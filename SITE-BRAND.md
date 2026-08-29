# Izzy Immigration — Site Brand & Content Reference

Single source of truth for business details, copy, and conversion logic. Update the
**Business Info** block below, then do the grep-replaces listed at the end. Everything
else on the site already consumes these values.

---

## Business Info (OWNER TO CONFIRM — all values below are placeholders)

| Item | Value | Where used |
| :--- | :--- | :--- |
| Company name | Izzy Immigration | everywhere |
| Tagline | Global visas & residency, done right | hero, titles |
| Email | `info@izzyimmigration.com` | contact page, footer, mailto links |
| Phone / WhatsApp | `+1 555 019 2345` (placeholder) | tel links, floating WhatsApp button |
| Address | Template placeholder — replace with real office address | contact page, footer |
| Social links | Template placeholders (facebook.com/, etc.) — replace with real profiles | header, footer, offcanvas |
| Domain (canonical/OG/sitemap) | `https://izzyimmigration.com` (assumed from the site's mailto — confirm) | all `<head>` canonical/OG, `sitemap.xml`, `robots.txt` |
| Google Analytics 4 ID | `G-XXXXXXXXXX` in `assets/js/site-config.js` | consent banner + gtag |

> ⚠️ The number `+15550192345` is a reserved fake-number placeholder. Replace it with
> the real business WhatsApp number before launch. It is used in: `assets/js/site-config.js`,
> all `tel:` links, and the floating WhatsApp button.

---

## Conversion funnel (what the site does now)

1. **Primary action = WhatsApp.** A floating chat button appears on every page; the
   hero and contact pages push visitors to "Book a Free Assessment" or message directly.
2. **Forms (contact, about, newsletter) POST JSON to `/api/lead`** (Vercel serverless).
   The function validates input, blocks spam (honeypot + rate limit), then delivers the
   lead to every configured channel via env vars:
   - `WHATSAPP_CLOUD_TOKEN` + `WHATSAPP_PHONE_ID` + `WHATSAPP_TO` → WhatsApp Business Cloud API
   - `SHEET_WEBHOOK` → Google Apps Script / Sheets webhook
   - `RESEND_API_KEY` + `RESEND_TO` → email
   At least one channel must be configured or the function returns 503 so you notice.
3. **Newsletter** uses the same endpoint with `type=newsletter`.

### Env vars to set on Vercel (Project → Settings → Environment Variables)
```
WHATSAPP_CLOUD_TOKEN=     # Meta WhatsApp Business Cloud API token
WHATSAPP_PHONE_ID=        # Meta phone number ID
WHATSAPP_TO=              # destination number in E.164, e.g. 15550192345
SHEET_WEBHOOK=            # optional Apps Script webhook URL
RESEND_API_KEY=           # optional
RESEND_TO=                # optional
```

---

## Copy blocks (already written into the pages)

- **Hero H1:** "Visa Made Easy. Dreams Made Possible."
- **Hero CTA:** "Read More" → replaced by "Book a Free Assessment" (contact.html)
- **Why Choose Us H2:** "Your Trusted Partner for Global Visas & Residency"
- **Footer about:** "Izzy Immigration is a global mobility advisory firm helping
  individuals and families secure visas, residency, and citizenship — with end-to-end
  guidance from first consultation to approval."

---

## Placeholder grep-replace checklist before launch

Search the whole folder and update:

- `+15550192345` → real WhatsApp/phone number (E.164, digits only)
- `info@izzyimmigration.com` → confirm real inbox
- `G-XXXXXXXXXX` in `assets/js/site-config.js` → real GA4 Measurement ID
- `https://izzyimmigration.com` → real domain (canonical/OG tags in every `<head>`, `sitemap.xml`, `robots.txt`)
- `assets/js/site-config.js` → social profile URLs
- `assets/imgs/logo/logo.svg` → real logo (or keep)
- Vercel env vars (above)
