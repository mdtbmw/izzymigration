import http.server
import socketserver
import os
import urllib.parse
import posixpath
import json

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def translate_path(self, path):
        path = path.split('?', 1)[0].split('#', 1)[0]
        path = urllib.parse.unquote(path)
        path = posixpath.normpath(path)
        words = filter(None, path.split('/'))
        local_path = DIRECTORY
        for word in words:
            local_path = os.path.join(local_path, word)
        
        if os.path.isdir(local_path):
            for index in "index.html", "index.htm":
                index_path = os.path.join(local_path, index)
                if os.path.exists(index_path):
                    return index_path
            return local_path

        if not os.path.exists(local_path) and not os.path.splitext(local_path)[1]:
            html_candidate = local_path + '.html'
            if os.path.isfile(html_candidate):
                return html_candidate

        return local_path

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/config':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "ok", "whatsapp": "+2347067203694"}')
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/lead':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                lead_data = json.loads(post_data.decode('utf-8'))
                print(f"[LEAD RECEIVED] {lead_data.get('name')} ({lead_data.get('email')}) - Programme: {lead_data.get('program')}")
            except Exception as e:
                print(f"[LEAD ERROR] {e}")

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"success": true, "message": "Lead received successfully"}')
            return

        self.send_error(404, "Endpoint not found")

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
        print(f"Izzy Immigration local server running at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
