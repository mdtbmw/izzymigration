/* ============================================================
   Izzy Immigration — ancestry landing page helpers
   Wires the WhatsApp CTA and adds the faq-accordion class to the
   static FAQ so the programmes design system styles it.
   ============================================================ */
(function () {
  'use strict';

  function whatsappHref(message) {
    var cfg = window.IZZY_CONFIG || {};
    var number = cfg.whatsappNumber || '15550192345';
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  }

  function init() {
    var faq = document.getElementById('ancestry-faqs');
    if (faq) { faq.classList.add('faq-accordion'); }

    var href = whatsappHref('Hello Izzy Immigration, I would like to check my ancestry for citizenship or residency eligibility.');
    var cta = document.getElementById('cta-whatsapp');
    if (cta) { cta.setAttribute('href', href); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
