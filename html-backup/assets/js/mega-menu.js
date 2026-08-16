/* ============================================================
   Izzy Immigration — Sovereign Header Mega-Menu & Dropdown Engine
   Builds high-impact luxury mega-menu panels with country flags,
   investment tiers, regional grouping, and rapid consultation CTAs.
   ============================================================ */
(function () {
  'use strict';

  if (!window.IZZY_PROGRAMS || !Array.isArray(window.IZZY_PROGRAMS)) {
    return;
  }

  var PROGRAMS = window.IZZY_PROGRAMS;

  var TYPE_LABEL = {
    citizenship: 'Citizenship by Investment',
    residency: 'Residency by Investment'
  };

  var TYPE_SUBTITLE = {
    citizenship: '10 verified sovereign passport & direct dual citizenship corridors',
    residency: '45 premier golden visas, permanent residency & investor permits'
  };

  var TYPE_PAGE = {
    citizenship: 'citizenship.html',
    residency: 'residency.html'
  };

  var REGION_ICONS = {
    'Europe': 'fa-earth-europe',
    'Caribbean': 'fa-umbrella-beach',
    'Americas': 'fa-earth-americas',
    'Asia-Pacific': 'fa-earth-asia',
    'Pacific & Europe': 'fa-globe',
    'Middle East & Africa': 'fa-earth-africa',
    'Africa & Middle East': 'fa-earth-africa'
  };

  var SUBMENU_ICONS = {
    'about-us.html': 'fa-building-columns',
    'why-izzy.html': 'fa-award',
    'our-expertise.html': 'fa-compass',
    'global-real-estate.html': 'fa-city',
    'cruise.html': 'fa-ship',
    'ancestry.html': 'fa-dna',
    'programmes.html': 'fa-earth-americas',
    'contact.html': 'fa-envelope'
  };

  function getShortInvestment(minInv) {
    if (!minInv) { return ''; }
    var m = minInv.match(/^([€$£])([\d,]+)/);
    if (m) {
      var num = parseInt(m[2].replace(/,/g, ''), 10);
      if (num >= 1000000) {
        return m[1] + (num / 1000000) + 'M+';
      } else if (num >= 1000) {
        return m[1] + Math.round(num / 1000) + 'k+';
      }
    }
    if (minInv.toLowerCase().indexOf('request') !== -1) {
      return 'On Request';
    }
    return minInv.length <= 10 ? minInv : '';
  }

  function esc(text) {
    var d = document.createElement('div');
    d.textContent = String(text == null ? '' : text);
    return d.innerHTML;
  }

  function buildItem(p) {
    var li = document.createElement('li');
    li.className = 'mega-item';

    var a = document.createElement('a');
    a.className = 'mega-item__link';
    a.href = 'program.html?p=' + encodeURIComponent(p.id);

    var shortInv = getShortInvestment(p.minInvestment);

    var flagHtml = '';
    if (p.flag) {
      flagHtml = '<span class="mega-item__flag-box"><img src="' + esc(p.flag) + '" alt="' + esc(p.country) + ' flag" loading="lazy"></span>';
    } else {
      flagHtml = '<span class="mega-item__flag-box mega-item__flag-box--placeholder"><i class="fa-solid fa-flag"></i></span>';
    }

    a.innerHTML =
      '<div class="mega-item__left">' +
        flagHtml +
        '<div class="mega-item__details">' +
          '<span class="mega-item__title">' + esc(p.title) + '</span>' +
          '<span class="mega-item__country">' + esc(p.country) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="mega-item__right">' +
        (shortInv ? '<span class="mega-item__badge">' + esc(shortInv) + '</span>' : '') +
        '<i class="fa-solid fa-arrow-right mega-item__arrow"></i>' +
      '</div>';

    li.appendChild(a);
    return li;
  }

  function buildColumn(regionTitle, iconName, items, extraCardHtml) {
    var col = document.createElement('div');
    col.className = 'mega-menu__col';

    var regHead = document.createElement('div');
    regHead.className = 'mega-menu__region-head';
    regHead.innerHTML = '<i class="fa-solid ' + iconName + '"></i> <span>' + esc(regionTitle) + '</span>';
    col.appendChild(regHead);

    var ul = document.createElement('ul');
    ul.className = 'mega-menu__item-list';

    (items || []).forEach(function (p) {
      ul.appendChild(buildItem(p));
    });

    col.appendChild(ul);

    if (extraCardHtml) {
      var extra = document.createElement('div');
      extra.innerHTML = extraCardHtml;
      col.appendChild(extra.firstElementChild || extra);
    }

    return col;
  }

  function buildCitizenshipMenu(host) {
    var grid = host.querySelector('#mega-citizenship-grid');
    if (!grid) { return; }
    grid.innerHTML = '';

    var list = PROGRAMS.filter(function (p) { return p.type === 'citizenship'; });

    // Group 1: Caribbean (St. Kitts first, Antigua, Dominica, Grenada, Saint Lucia)
    var caribbean = list.filter(function (p) { return p.region === 'Caribbean'; });
    
    // Group 2: Pacific & Europe (Vanuatu DSP, Vanuatu CIIP, Nauru, Türkiye)
    var pacificEurope = list.filter(function (p) { 
      return p.region === 'Asia-Pacific' || p.region === 'Europe'; 
    });

    // Group 3: Middle East (Egypt)
    var middleEast = list.filter(function (p) { 
      return p.region === 'Africa & Middle East' || p.region === 'Middle East & Africa'; 
    });

    var promoCardHtml = 
      '<div class="mega-promo-card mt-15" style="background: linear-gradient(135deg, #050548 0%, #0d1152 100%); border-radius: 14px; padding: 18px; color: #fff; border: 1px solid rgba(184, 134, 11, 0.3);">' +
        '<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">' +
          '<span style="background: #b8860b; color: #fff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 999px; text-transform: uppercase;">Pre-Vetting</span>' +
          '<span style="font-size: 11.5px; color: #e8c47a; font-weight: 600;">100% Confidential</span>' +
        '</div>' +
        '<h5 style="font-size: 14px; font-weight: 800; margin-bottom: 6px; color: #fff;">Free Passport Eligibility Check</h5>' +
        '<p style="font-size: 12px; color: rgba(255,255,255,0.75); line-height: 1.45; margin-bottom: 12px;">Discover which sovereign passport best matches your family, timeline & budget.</p>' +
        '<a href="contact.html" style="display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 8px 14px; background: #b8860b; color: #fff; border-radius: 8px; font-size: 12.5px; font-weight: 700; text-decoration: none; gap: 6px;">Book Evaluation <i class="fa-solid fa-arrow-right"></i></a>' +
      '</div>';

    grid.appendChild(buildColumn('Caribbean Sovereign CIPs', 'fa-umbrella-beach', caribbean));
    grid.appendChild(buildColumn('Pacific & European CIPs', 'fa-globe', pacificEurope));
    grid.appendChild(buildColumn('Middle East & Advisory', 'fa-earth-africa', middleEast, promoCardHtml));
  }

  function buildResidencyMenu(host) {
    var grid = host.querySelector('#mega-residency-grid');
    if (!grid) { return; }
    grid.innerHTML = '';

    var list = PROGRAMS.filter(function (p) { return p.type === 'residency'; });

    var europe = list.filter(function (p) { return p.region === 'Europe'; });
    var americas = list.filter(function (p) { return p.region === 'Americas'; });
    var apac = list.filter(function (p) { return p.region === 'Asia-Pacific'; });
    var mea = list.filter(function (p) { 
      return p.region === 'Africa & Middle East' || p.region === 'Middle East & Africa'; 
    });

    var mentorCardHtml =
      '<div class="mega-promo-card mt-15" style="background: #fbf9f4; border-radius: 12px; padding: 14px; border: 1px solid rgba(184, 134, 11, 0.2);">' +
        '<div style="font-size: 11px; font-weight: 700; color: #b8860b; text-transform: uppercase; margin-bottom: 4px;"><i class="fa-solid fa-headset"></i> Senior Mentors Desk</div>' +
        '<p style="font-size: 12px; color: #5a5a78; margin-bottom: 8px; line-height: 1.4;">Custom investment structuring for HNIs and corporate founders.</p>' +
        '<a href="contact.html" style="font-size: 12px; font-weight: 700; color: #050548; display: inline-flex; align-items: center; gap: 4px; text-decoration: underline;">Schedule Private Call <i class="fa-solid fa-arrow-right"></i></a>' +
      '</div>';

    grid.appendChild(buildColumn('Europe Golden Visas', 'fa-earth-europe', europe));
    grid.appendChild(buildColumn('Americas & EB-5', 'fa-earth-americas', americas));
    grid.appendChild(buildColumn('Asia-Pacific Corridors', 'fa-earth-asia', apac));
    grid.appendChild(buildColumn('Africa & Middle East', 'fa-earth-africa', mea, mentorCardHtml));
  }

  function buildPanel(type) {
    var count = PROGRAMS.filter(function (p) { return p.type === type; }).length;
    var wrap = document.createElement('div');
    wrap.className = 'mega-menu-wrap';
    wrap.id = 'mega-panel-' + type;
    wrap.setAttribute('data-panel-type', type);

    var ul = document.createElement('div');
    ul.className = 'mega-menu';
    ul.setAttribute('data-menu', type);

    var head = document.createElement('div');
    head.className = 'mega-menu__head';
    head.innerHTML =
      '<div class="mega-menu__head-left">' +
        '<div class="mega-menu__head-badge"><i class="fa-solid fa-crown"></i> <span>Sovereign Portfolio</span></div>' +
        '<h4 class="mega-menu__head-title">' + esc(TYPE_LABEL[type]) + '</h4>' +
        '<p class="mega-menu__head-sub">' + count + ' verified sovereign routes · ' + esc(TYPE_SUBTITLE[type]) + '</p>' +
      '</div>' +
      '<div class="mega-menu__head-middle">' +
        '<div class="mega-menu__search-box">' +
          '<i class="fa-solid fa-magnifying-glass mega-menu__search-icon"></i>' +
          '<input type="text" class="mega-search-input" placeholder="Search by country or programme..." aria-label="Search programmes">' +
        '</div>' +
      '</div>' +
      '<div class="mega-menu__head-right">' +
        '<a href="' + TYPE_PAGE[type] + '" class="mega-menu__head-cta">' +
          '<span>View All ' + (type === 'citizenship' ? 'Citizenship' : 'Residency') + ' (' + count + ')</span>' +
          '<i class="fa-solid fa-arrow-right"></i>' +
        '</a>' +
      '</div>';

    var grid = document.createElement('div');
    grid.className = 'mega-menu__grid mega-menu__grid--' + (type === 'citizenship' ? '3' : '4');
    grid.id = 'mega-' + type + '-grid';

    var foot = document.createElement('div');
    foot.className = 'mega-menu__foot';
    foot.innerHTML =
      '<div class="mega-menu__foot-left">' +
        '<div class="mega-menu__foot-icon"><i class="fa-solid fa-shield-halved"></i></div>' +
        '<div class="mega-menu__foot-text">' +
          '<strong>Confidential Sovereign Advisory Desk</strong>' +
          '<span>Direct Senior Mentor assessment · No obligation · Total discretion guaranteed</span>' +
        '</div>' +
      '</div>' +
      '<div class="mega-menu__foot-right">' +
        '<a href="contact.html" class="mega-menu__foot-btn"><i class="fa-solid fa-calendar-check"></i> Book Consultation</a>' +
        '<a href="https://wa.me/2347067203694?text=Hello%20Izzy%20Immigration,%20I%20would%20like%20to%20inquire%20about%20your%20' + type + '%20programmes" target="_blank" rel="noopener" class="mega-menu__foot-wa" title="WhatsApp Us Directly"><i class="fa-brands fa-whatsapp"></i></a>' +
      '</div>';

    ul.appendChild(head);
    ul.appendChild(grid);
    ul.appendChild(foot);
    wrap.appendChild(ul);

    if (type === 'citizenship') {
      buildCitizenshipMenu(ul);
    } else {
      buildResidencyMenu(ul);
    }

    // Wire live search within the mega menu
    var searchInput = head.querySelector('.mega-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var query = this.value.trim().toLowerCase();
        var items = grid.querySelectorAll('.mega-item');
        items.forEach(function (item) {
          var text = item.textContent.toLowerCase();
          if (!query || text.indexOf(query) !== -1) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
      // Prevent keydown escape/enter from bubbling to document
      searchInput.addEventListener('keydown', function (e) {
        e.stopPropagation();
      });
    }

    return wrap;
  }

  function enhanceStandardSubmenus() {
    document.querySelectorAll('.main-menu .submenu').forEach(function (submenu) {
      submenu.querySelectorAll('li a').forEach(function (a) {
        var href = (a.getAttribute('href') || '').replace(/^.*\//, '');
        var icon = SUBMENU_ICONS[href] || 'fa-angle-right';
        if (!a.querySelector('.submenu-item__icon')) {
          var originalText = a.textContent.trim();
          a.innerHTML =
            '<div class="submenu-item__wrap">' +
              '<span class="submenu-item__icon"><i class="fa-solid ' + icon + '"></i></span>' +
              '<span class="submenu-item__label">' + esc(originalText) + '</span>' +
            '</div>' +
            '<i class="fa-solid fa-arrow-right submenu-item__arrow"></i>';
        }
      });
    });
  }

  function init() {
    var headerWrapper = document.querySelector('.mega__menu-wrapper') || document.querySelector('.header__main') || document.querySelector('header');
    if (!headerWrapper) { return; }

    var menuRoot = document.querySelector('.mean__menu-wrapper .main-menu #mobile-menu') || document.querySelector('.main-menu #mobile-menu');
    if (!menuRoot) { return; }

    // Remove any previously appended panels to prevent duplicates
    document.querySelectorAll('.mega-menu-wrap').forEach(function (el) { el.remove(); });

    var panels = {};
    var activeTimeout = null;

    ['citizenship', 'residency'].forEach(function (type) {
      var panel = buildPanel(type);
      headerWrapper.appendChild(panel);
      panels[type] = panel;

      panel.addEventListener('mouseenter', function () {
        clearTimeout(activeTimeout);
        showPanel(type);
      });

      panel.addEventListener('mouseleave', function () {
        scheduleClose();
      });
    });

    function showPanel(type) {
      clearTimeout(activeTimeout);
      Object.keys(panels).forEach(function (t) {
        var p = panels[t];
        var trigger = menuRoot.querySelector('li[data-mega-type="' + t + '"]');
        if (t === type) {
          p.classList.add('is-active');
          if (trigger) { trigger.classList.add('is-active'); }
        } else {
          p.classList.remove('is-active');
          if (trigger) { trigger.classList.remove('is-active'); }
        }
      });
    }

    function scheduleClose() {
      clearTimeout(activeTimeout);
      activeTimeout = setTimeout(function () {
        Object.keys(panels).forEach(function (t) {
          panels[t].classList.remove('is-active');
          var trigger = menuRoot.querySelector('li[data-mega-type="' + t + '"]');
          if (trigger) { trigger.classList.remove('is-active'); }
        });
      }, 220);
    }

    menuRoot.querySelectorAll(':scope > ul > li').forEach(function (li) {
      var link = li.querySelector(':scope > a');
      if (!link) { return; }
      var href = (link.getAttribute('href') || '').replace(/\.html.*$/, '.html').replace(/^.*\//, '');
      var type = null;
      if (href === 'citizenship.html') { type = 'citizenship'; }
      if (href === 'residency.html') { type = 'residency'; }

      if (type) {
        li.classList.add('has-mega-menu');
        li.setAttribute('data-mega-type', type);

        li.addEventListener('mouseenter', function () {
          showPanel(type);
        });

        li.addEventListener('mouseleave', function () {
          scheduleClose();
        });
      }
    });

    enhanceStandardSubmenus();

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-mega-menu') && !e.target.closest('.mega-menu-wrap')) {
        Object.keys(panels).forEach(function (t) {
          panels[t].classList.remove('is-active');
        });
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        Object.keys(panels).forEach(function (t) {
          panels[t].classList.remove('is-active');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
