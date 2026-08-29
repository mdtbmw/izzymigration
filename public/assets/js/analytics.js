// Izzy Immigration — analytics loader with cookie consent.
// Analytics only load after the visitor accepts the consent banner.
(function () {
  var cfg = window.IZZY_CONFIG || {};
  var GA_ID = cfg.analyticsId;

  var CONSENT_KEY = "izzy_consent";

  function hasConsented() {
    try {
      return document.cookie.indexOf(CONSENT_KEY + "=accepted") !== -1;
    } catch (e) {
      return false;
    }
  }

  function setConsent(value) {
    try {
      document.cookie = CONSENT_KEY + "=" + value + "; path=/; max-age=" + 60 * 60 * 24 * 365 + "; SameSite=Lax";
    } catch (e) {}
  }

  function loadAnalytics() {
    if (!GA_ID || GA_ID.indexOf("XXXXXX") !== -1) return; // not configured yet
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.id = "izzy-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML =
      '<div class="izzy-consent__inner">' +
      '<p style="margin:0 0 12px;color:#333;font-size:.95rem;">We use cookies to improve your experience and analyse site traffic. <a href="privacy.html" style="color:var(--rr-theme-primary);text-decoration:underline;">Privacy Policy</a></p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
      '<button type="button" class="izzy-consent__accept" style="background:var(--rr-theme-primary);color:#fff;border:none;padding:10px 20px;border-radius:6px;font-weight:700;cursor:pointer;">Accept</button>' +
      '<button type="button" class="izzy-consent__decline" style="background:#e9ecef;color:#333;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;">Decline</button>' +
      "</div></div>";

    var css = document.createElement("style");
    css.textContent =
      "#izzy-consent{position:fixed;left:0;right:0;bottom:0;z-index:10000;background:#fff;box-shadow:0 -6px 24px rgba(0,0,0,.12);padding:16px 20px}" +
      "@media(min-width:768px){#izzy-consent .izzy-consent__inner{max-width:720px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px}#izzy-consent p{margin:0!important}}";
    document.head.appendChild(css);
    document.body.appendChild(banner);

    banner.querySelector(".izzy-consent__accept").addEventListener("click", function () {
      setConsent("accepted");
      banner.remove();
      loadAnalytics();
    });
    banner.querySelector(".izzy-consent__decline").addEventListener("click", function () {
      setConsent("declined");
      banner.remove();
    });
  }

  if (hasConsented()) {
    loadAnalytics();
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  }
})();
