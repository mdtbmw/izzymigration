// Izzy Immigration — site-wide business config.
// Single place to update contact details, WhatsApp number, and social profiles.
// Every page loads this file and uses the constants below.

window.IZZY_CONFIG = {
  // E.164, digits only (no + or spaces). THIS IS A PLACEHOLDER — replace before launch.
  whatsappNumber: "15550192345",
  phoneDisplay: "+1 (555) 019-2345",
  phoneTel: "+15550192345",
  email: "info@izzyimmigration.com",
  // Google Analytics 4 Measurement ID. PLACEHOLDER — set your real G-XXXXXXX ID.
  analyticsId: "G-XXXXXXXXXX",
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
    pinterest: "https://pinterest.com/",
    youtube: "https://youtube.com/",
  },
};

// Floating WhatsApp chat button + fixed CTA (created on every page).
(function () {
  if (window.IZZY_WHATSAPP_BUTTON_LOADED) return;
  window.IZZY_WHATSAPP_BUTTON_LOADED = true;

  var cfg = window.IZZY_CONFIG;
  var link = document.createElement("a");
  link.href =
    "https://wa.me/" + cfg.whatsappNumber + "?text=" +
    encodeURIComponent("Hello Izzy Immigration, I would like a free assessment for:");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Chat with Izzy Immigration on WhatsApp");
  link.setAttribute("role", "button");
  link.id = "izzy-whatsapp";
  link.innerHTML =
    '<svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M16.004 3C8.832 3 3 8.832 3 16.004c0 2.296.601 4.542 1.742 6.512L3 29l6.65-1.717c1.9 1.032 4.035 1.574 6.35 1.574 7.17 0 13.002-5.832 13.002-13.002C29.002 8.832 23.172 3 16.004 3zm0 23.7c-1.9 0-3.755-.516-5.37-1.486l-.385-.228-3.945 1.017 1.053-3.83-.252-.394a10.66 10.66 0 0 1-1.636-5.67c0-5.91 4.813-10.722 10.728-10.722 2.864 0 5.556 1.117 7.582 3.145a10.62 10.62 0 0 1 3.137 7.582c0 5.908-4.812 10.72-10.724 10.72zm5.873-8.027c-.322-.162-1.905-.94-2.2-1.048-.295-.107-.51-.162-.724.162-.215.323-.83 1.047-1.017 1.262-.188.215-.375.242-.697.08-.322-.16-1.36-.5-2.59-1.598-.958-.854-1.604-1.91-1.792-2.233-.188-.323-.02-.498.14-.658.145-.145.323-.376.484-.565.162-.188.215-.322.323-.538.107-.215.054-.403-.027-.565-.08-.162-.724-1.746-.993-2.392-.26-.627-.526-.542-.724-.552l-.615-.01c-.215 0-.564.08-.86.403-.295.322-1.127 1.102-1.127 2.689s1.153 3.12 1.315 3.336c.16.215 2.27 3.465 5.5 4.858.768.332 1.368.53 1.836.678.772.245 1.474.21 2.03.128.618-.093 1.905-.779 2.173-1.53.268-.752.268-1.396.188-1.53-.08-.135-.295-.216-.617-.378z"/></svg>';

  var css = document.createElement("style");
  css.textContent =
    "#izzy-whatsapp{position:fixed;right:22px;bottom:22px;z-index:9999;width:60px;height:60px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.25);transition:transform .2s ease;cursor:pointer}" +
    "#izzy-whatsapp:hover{transform:scale(1.08)}" +
    "@media(max-width:575px){#izzy-whatsapp{width:54px;height:54px;right:16px;bottom:16px}}";
  document.head.appendChild(css);
  document.body.appendChild(link);
})();
