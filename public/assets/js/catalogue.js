/* ============================================================
   Izzy Immigration — Master Programme Catalogue Engine
   Powers:
   - programmes.html (All Programmes Explorer)
   - citizenship.html (Citizenship by Investment Catalogue)
   - residency.html (Residency & Golden Visa Catalogue)
   ============================================================ */
(function () {
  'use strict';

  var TYPE_LABEL = {
    all: 'All Programmes Catalogue',
    citizenship: 'Citizenship by Investment',
    residency: 'Residency by Investment'
  };

  function getParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function typeForPage() {
    var body = document.body;
    var type = body && body.getAttribute('data-catalogue');
    if (type === 'residency') return 'residency';
    if (type === 'citizenship') return 'citizenship';
    return 'all';
  }

  function parseMinInvestment(str) {
    if (!str) return 0;
    var digits = str.replace(/[^0-9]/g, '');
    var val = parseInt(digits, 10);
    return isNaN(val) ? 0 : val;
  }

  function esc(text) {
    var d = document.createElement('div');
    d.textContent = String(text == null ? '' : text);
    return d.innerHTML;
  }

  function buildCard(p) {
    var a = document.createElement('a');
    a.className = 'program-card';
    a.href = 'program.html?p=' + encodeURIComponent(p.id);

    // Image Container
    var imgWrap = document.createElement('div');
    imgWrap.className = 'program-card__img';
    
    if (p.hero) {
      var img = document.createElement('img');
      img.src = p.hero;
      img.alt = p.title + ' - ' + p.country;
      img.loading = 'lazy';
      imgWrap.appendChild(img);
    }

    // Top badges container
    var topBadges = document.createElement('div');
    topBadges.className = 'program-card__top-badges';

    // Flag & Country badge (Top Left)
    if (p.flag || p.country) {
      var flag = document.createElement('span');
      flag.className = 'program-card__flag';
      if (p.flag) {
        var flagImg = document.createElement('img');
        flagImg.src = p.flag;
        flagImg.alt = p.country + ' flag';
        flag.appendChild(flagImg);
      }
      flag.appendChild(document.createTextNode(p.country || 'Global'));
      topBadges.appendChild(flag);
    }

    // Type badge (Top Right)
    var typeBadge = document.createElement('span');
    var isCitizenship = (p.type === 'citizenship');
    typeBadge.className = 'program-card__type-badge ' + (isCitizenship ? 'is-citizenship' : 'is-residency');
    typeBadge.innerHTML = isCitizenship 
      ? '<i class="fa-solid fa-passport"></i> Citizenship' 
      : '<i class="fa-solid fa-house-chimney"></i> Residency';
    topBadges.appendChild(typeBadge);

    imgWrap.appendChild(topBadges);
    a.appendChild(imgWrap);

    // Body Container
    var body = document.createElement('div');
    body.className = 'program-card__body';

    // Title
    var h3 = document.createElement('h3');
    h3.className = 'program-card__title';
    h3.textContent = p.title;
    body.appendChild(h3);

    // Key Stats Grid
    var statsGrid = document.createElement('div');
    statsGrid.className = 'program-card__stats';
    statsGrid.innerHTML =
      '<div class="program-card__stat-item">' +
        '<span class="stat-label"><i class="fa-solid fa-coins"></i> Min. Investment</span>' +
        '<strong class="stat-val">' + esc(p.minInvestment || 'Contact for pricing') + '</strong>' +
      '</div>' +
      '<div class="program-card__stat-item">' +
        '<span class="stat-label"><i class="fa-solid fa-clock"></i> Timeline</span>' +
        '<strong class="stat-val">' + esc(p.processing || 'Fast Track') + '</strong>' +
      '</div>';
    body.appendChild(statsGrid);

    // Highlight benefit if available
    var highlightText = (p.benefits && p.benefits.length > 0) ? p.benefits[0] : (p.region + ' Jurisdiction');
    if (highlightText) {
      var highlightEl = document.createElement('div');
      highlightEl.className = 'program-card__highlight';
      highlightEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>' + esc(highlightText) + '</span>';
      body.appendChild(highlightEl);
    }

    // Card Footer with CTA
    var footer = document.createElement('div');
    footer.className = 'program-card__foot';
    footer.innerHTML = 
      '<span class="program-card__region-tag"><i class="fa-solid fa-location-dot"></i> ' + esc(p.region || 'International') + '</span>' +
      '<span class="program-card__cta">Explore <i class="fa-solid fa-arrow-right"></i></span>';
    body.appendChild(footer);

    a.appendChild(body);
    return a;
  }

  function init() {
    var pageType = typeForPage();
    var allPrograms = window.IZZY_PROGRAMS || [];
    
    // If page is specifically citizenship or residency, filter base list
    var baseList = (pageType === 'all') 
      ? allPrograms 
      : allPrograms.filter(function (p) { return p.type === pageType; });

    var grid = document.getElementById('catalogue-grid');
    if (!grid) return; // Exit gracefully if not a catalogue page

    var empty = document.getElementById('catalogue-empty');
    var searchInput = document.getElementById('catalogue-search');
    var regionHost = document.getElementById('catalogue-regions');
    var typeFilterHost = document.getElementById('catalogue-type-filter');
    var sortSelect = document.getElementById('catalogue-sort');
    var countEl = document.getElementById('catalogue-count');
    var clearFiltersBtn = document.getElementById('catalogue-clear-filters');
    var titleEl = document.getElementById('catalogue-title');

    if (titleEl && TYPE_LABEL[pageType]) { 
      titleEl.textContent = TYPE_LABEL[pageType]; 
    }

    // Determine unique regions from current baseList
    var regions = (window.IZZY_REGION_ORDER || []).filter(function (r) {
      return baseList.some(function (p) { return p.region === r; });
    });

    var state = {
      q: (getParam('q') || '').toLowerCase(),
      type: (pageType === 'all') ? (getParam('type') || 'all') : pageType,
      region: getParam('region') || '',
      sort: getParam('sort') || 'featured'
    };

    // Initialize Search Input
    if (searchInput) {
      searchInput.value = state.q;
      searchInput.addEventListener('input', function () {
        state.q = searchInput.value.toLowerCase().trim();
        render();
      });
    }

    // Initialize Sort Select
    if (sortSelect) {
      sortSelect.value = state.sort;
      sortSelect.addEventListener('change', function () {
        state.sort = sortSelect.value;
        render();
      });
    }

    // Initialize Type Filter Tabs (only on master programmes.html)
    if (typeFilterHost && pageType === 'all') {
      var types = [
        { id: 'all', label: 'All Programmes (' + allPrograms.length + ')' },
        { id: 'citizenship', label: 'Citizenship (' + allPrograms.filter(function(p){return p.type==='citizenship';}).length + ')' },
        { id: 'residency', label: 'Residency (' + allPrograms.filter(function(p){return p.type==='residency';}).length + ')' }
      ];

      typeFilterHost.innerHTML = '';
      types.forEach(function (t) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cat-type-btn' + (state.type === t.id ? ' is-active' : '');
        btn.textContent = t.label;
        btn.addEventListener('click', function () {
          state.type = t.id;
          typeFilterHost.querySelectorAll('.cat-type-btn').forEach(function (b) {
            b.classList.toggle('is-active', b === btn);
          });
          render();
        });
        typeFilterHost.appendChild(btn);
      });
    }

    // Initialize Region Filter Pills
    if (regionHost) {
      regionHost.innerHTML = '';
      var allBtn = document.createElement('button');
      allBtn.className = 'cat-region-btn' + (state.region ? '' : ' is-active');
      allBtn.type = 'button';
      allBtn.textContent = 'All Regions';
      allBtn.addEventListener('click', function () {
        state.region = '';
        render();
      });
      regionHost.appendChild(allBtn);

      regions.forEach(function (r) {
        var btn = document.createElement('button');
        btn.className = 'cat-region-btn' + (state.region === r ? ' is-active' : '');
        btn.type = 'button';
        btn.textContent = r;
        btn.addEventListener('click', function () {
          state.region = r;
          render();
        });
        regionHost.appendChild(btn);
      });
    }

    // Clear Filters button
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', function () {
        state.q = '';
        state.region = '';
        if (pageType === 'all') state.type = 'all';
        state.sort = 'featured';
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'featured';
        if (typeFilterHost) {
          typeFilterHost.querySelectorAll('.cat-type-btn').forEach(function (b, idx) {
            b.classList.toggle('is-active', idx === 0);
          });
        }
        render();
      });
    }

    function render() {
      var filtered = baseList.filter(function (p) {
        // Type match (for all page)
        var matchType = (state.type === 'all' || p.type === state.type);

        // Region match
        var matchRegion = (!state.region || p.region === state.region);

        // Search match
        var matchQ = true;
        if (state.q) {
          var haystack = (p.title + ' ' + p.country + ' ' + p.region + ' ' + (p.intro || '') + ' ' + (p.minInvestment || '') + ' ' + (p.benefits ? p.benefits.join(' ') : '')).toLowerCase();
          matchQ = haystack.indexOf(state.q) !== -1;
        }

        return matchType && matchRegion && matchQ;
      });

      // Sorting
      if (state.sort === 'investment-asc') {
        filtered.sort(function (a, b) {
          return parseMinInvestment(a.minInvestment) - parseMinInvestment(b.minInvestment);
        });
      } else if (state.sort === 'investment-desc') {
        filtered.sort(function (a, b) {
          return parseMinInvestment(b.minInvestment) - parseMinInvestment(a.minInvestment);
        });
      } else if (state.sort === 'name-asc') {
        filtered.sort(function (a, b) {
          return a.country.localeCompare(b.country) || a.title.localeCompare(b.title);
        });
      } else if (state.sort === 'name-desc') {
        filtered.sort(function (a, b) {
          return b.country.localeCompare(a.country) || b.title.localeCompare(a.title);
        });
      }

      // Render cards to grid
      grid.innerHTML = '';
      filtered.forEach(function (p) {
        var col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-12';
        col.appendChild(buildCard(p));
        grid.appendChild(col);
      });

      // Update counter
      if (countEl) {
        countEl.innerHTML = 'Showing <strong>' + filtered.length + '</strong> of <strong>' + baseList.length + '</strong> programmes';
      }

      // Empty state
      if (empty) {
        empty.classList.toggle('is-visible', filtered.length === 0);
      }

      // Sync active state on region buttons
      if (regionHost) {
        var desiredRegion = state.region || 'All Regions';
        regionHost.querySelectorAll('.cat-region-btn').forEach(function (b) {
          b.classList.toggle('is-active', b.textContent === desiredRegion);
        });
      }

      // Show/hide clear filters button if filters are active
      if (clearFiltersBtn) {
        var hasActiveFilters = (state.q || state.region || (pageType === 'all' && state.type !== 'all') || state.sort !== 'featured');
        clearFiltersBtn.style.display = hasActiveFilters ? 'inline-flex' : 'none';
      }
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
