/* ============================================================
   Izzy Immigration — static landing page helpers
   Wires the WhatsApp CTA (why-izzy / our-expertise /
   global-real-estate / cruise) and styles static FAQs.
   ============================================================ */
(function () {
  'use strict';

  function whatsappHref(message) {
    var cfg = window.IZZY_CONFIG || {};
    var number = cfg.whatsappNumber || '15550192345';
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  }

  var MESSAGES = {
    'why-izzy.html': 'Hello Izzy Immigration, I would like a free assessment of my residency or citizenship options.',
    'global-real-estate.html': 'Hello Izzy Immigration, I am interested in qualifying real estate for a residency or citizenship programme.'
  };

  function init() {
    var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    var faq = document.querySelector('.faq-accordion');
    if (faq) { faq.classList.add('faq-accordion'); }

    var message = MESSAGES[page] || 'Hello Izzy Immigration, I would like to plan my journey with your team.';
    var cta = document.getElementById('cta-whatsapp');
    if (cta) { cta.setAttribute('href', whatsappHref(message)); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
