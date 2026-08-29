/* ============================================================
   Izzy Immigration — Sovereign Programme Detail Engine (program.html)
   Reads ?p=<slug>, populates the luxury full-width magazine layout with
   interactive Swiper photo sliders, lifestyle cards, investment tiers,
   statutory compliance matrix, step roadmap, and lead ingestion.
   ============================================================ */
(function () {
  'use strict';

  function getParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function esc(text) {
    var d = document.createElement('div');
    d.textContent = String(text == null ? '' : text);
    return d.innerHTML;
  }

  var ICONS = [
    [/family|spouse|dependents|children|parents/i, 'fa-users'],
    [/visa|passport|travel|schengen|movement|mobility/i, 'fa-passport'],
    [/tax|fiscal|wealth/i, 'fa-percent'],
    [/educat|school|university/i, 'fa-graduation-cap'],
    [/business|company|corporate/i, 'fa-briefcase'],
    [/property|real estate|housing|villa|residential/i, 'fa-building'],
    [/invest|fund|economic|bond|contribution|capital/i, 'fa-coins'],
    [/health|medical|healthcare/i, 'fa-heart-pulse'],
    [/residenc|permit|live|stay|settle/i, 'fa-house-chimney'],
    [/citizenship|naturali[sz]ation|dual/i, 'fa-id-card'],
    [/retire|pension/i, 'fa-umbrella-beach'],
    [/bank|account|currency|euro|dollar/i, 'fa-landmark'],
    [/quality|lifestyle|safety|security/i, 'fa-shield-halved']
  ];

  function iconFor(title) {
    for (var i = 0; i < ICONS.length; i++) {
      if (ICONS[i][0].test(title)) { return ICONS[i][1]; }
    }
    return 'fa-circle-check';
  }

  function typeLabel(type) {
    return type === 'citizenship' ? 'Citizenship by Investment' : 'Residency by Investment';
  }

  // Filter out scraping boilerplate/form noise from text items
  var NOISE_PATTERNS = [
    /request a price breakdown/i,
    /eligibility evaluation/i,
    /program page side/i,
    /full name email/i,
    /select a country/i,
    /country of residence/i,
    /contact us today/i,
    /phone\/mobile/i,
    /leave a message/i,
    /book a free consultation/i,
    /^\s*(afghanistan|aland islands|albania|algeria|american samoa|andorra|angola|anguilla|antarctica|argentina|armenia|aruba|australia|austria|azerbaijan|bahamas|bahrain|bangladesh|barbados|belarus|belgium|belize|benin|bermuda|bhutan|bolivia|bosnia|botswana|bouvet|brazil|brunei|bulgaria|burkina|burundi|cambodia|cameroon|canada|cape verde|cayman|central african|chad|chile|china|christmas island|cocos|colombia|comoros|congo|cook islands|costa rica|croatia|cuba|cyprus|czech|denmark|djibouti|dominica|dominican republic|ecuador|egypt|el salvador|equatorial guinea|eritrea|estonia|ethiopia|falkland|faroe|fiji|finland|france|french guiana|french polynesia|gabon|gambia|georgia|germany|ghana|gibraltar|greece|greenland|grenada|guadeloupe|guam|guatemala|guernsey|guinea|guyana|haiti|honduras|hong kong|hungary|iceland|india|indonesia|iran|iraq|ireland|isle of man|israel|italy|jamaica|japan|jersey|jordan|kazakhstan|kenya|kiribati|korea|kuwait|kyrgyzstan|laos|latvia|lebanon|lesotho|liberia|libya|liechtenstein|lithuania|luxembourg|macao|madagascar|malawi|malaysia|maldives|mali|malta|marshall|martinique|mauritania|mauritius|mayotte|mexico|micronesia|moldova|monaco|mongolia|montenegro|montserrat|morocco|mozambique|myanmar|namibia|nauru|nepal|netherlands|new caledonia|new zealand|nicaragua|niger|nigeria|niue|norfolk|norway|oman|pakistan|palau|panama|papua|paraguay|peru|philippines|pitcairn|poland|portugal|puerto rico|qatar|reunion|romania|russia|rwanda|samoa|san marino|saudi arabia|senegal|serbia|seychelles|sierra leone|singapore|slovakia|slovenia|solomon|somalia|south africa|spain|sri lanka|sudan|suriname|sweden|switzerland|syria|taiwan|tajikistan|tanzania|thailand|togo|tokelau|tonga|trinidad|tunisia|turkey|turkmenistan|tuvalu|uganda|ukraine|united arab emirates|united kingdom|united states|uruguay|uzbekistan|vanuatu|venezuela|vietnam|virgin islands|yemen|zambia|zimbabwe)\s*$/i
  ];

  function isCleanItem(text) {
    if (!text || typeof text !== 'string') { return false; }
    var trimmed = text.trim();
    if (trimmed.length < 3) { return false; }
    for (var i = 0; i < NOISE_PATTERNS.length; i++) {
      if (NOISE_PATTERNS[i].test(trimmed)) { return false; }
    }
    return true;
  }

  function hideSection(host) {
    if (!host || host.children.length) { return; }
    var section = host.closest('.program-section');
    if (section) { section.style.display = 'none'; }
  }

  function buildHeroStats(p) {
    var host = document.getElementById('hero-stats');
    if (!host) { return; }
    host.innerHTML = '';
    var items = [
      { label: 'Minimum Investment', val: p.minInvestment || 'Upon Request', icon: 'fa-coins' },
      { label: 'Processing Timeline', val: p.processing || '3-6 months', icon: 'fa-stopwatch-20' },
      { label: 'Sovereign Jurisdiction', val: p.country + ' (' + p.region + ')', icon: 'fa-earth-americas' },
      { label: 'Family Inclusion', val: 'Spouse & Dependents', icon: 'fa-users-gear' }
    ];
    items.forEach(function (item) {
      var stat = document.createElement('div');
      stat.className = 'program-hero__stat';
      stat.innerHTML = '<small><i class="fa-solid ' + item.icon + '"></i> ' + esc(item.label) + '</small>' +
                       '<strong>' + esc(item.val) + '</strong>';
      host.appendChild(stat);
    });
  }

  // Comprehensive Sovereign Country Intelligence Mapping for Factsheet Card
  var SOVEREIGN_COUNTRY_FACTS = {
    'Indonesia': {
      capital: 'Jakarta (Nusantara)',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian (English widely used)',
      passportMobility: 'Global Rank #66 (78 Visa-Free Countries)',
      taxFramework: 'Territorial / Foreign Source Exemption for Non-Residents',
      governingAuthority: 'Directorate General of Immigration Indonesia',
      stayRequirement: '0 Days / No Minimum Stay Required',
      timeToCitizenship: '5-10 Years (Eligible for Permanent Stay & KITAP)'
    },
    'St. Kitts and Nevis': {
      capital: 'Basseterre',
      currency: 'Eastern Caribbean Dollar (XCD / USD pegged)',
      language: 'English (Official)',
      passportMobility: '157 Visa-Free Countries (UK, Schengen, Singapore)',
      taxFramework: '0% Personal Income, Wealth, Gift & Inheritance Tax',
      governingAuthority: 'Citizenship by Investment Unit (CIU)',
      stayRequirement: '0 Days / No Physical Stay Mandate',
      timeToCitizenship: 'Direct Sovereign Passport (6-10 Months)'
    },
    'Antigua and Barbuda': {
      capital: "St. John's",
      currency: 'Eastern Caribbean Dollar (XCD / USD pegged)',
      language: 'English (Official)',
      passportMobility: '150+ Visa-Free Destinations (UK, EU Schengen, Hong Kong)',
      taxFramework: '0% Worldwide Personal Income Tax',
      governingAuthority: 'Citizenship by Investment Unit (CIU Antigua)',
      stayRequirement: '5 Days in First 5-Year Passport Cycle',
      timeToCitizenship: 'Direct Sovereign Passport (6-9 Months)'
    },
    'Dominica': {
      capital: 'Roseau',
      currency: 'Eastern Caribbean Dollar (XCD / USD pegged)',
      language: 'English (Official)',
      passportMobility: '145+ Countries (Schengen, Singapore, UK Access)',
      taxFramework: '0% Capital Gains, Gift, Inheritance & Wealth Tax',
      governingAuthority: 'CBIU Commonwealth of Dominica',
      stayRequirement: '0 Days / Zero Stay Requirement',
      timeToCitizenship: 'Direct Sovereign Passport (6-9 Months)'
    },
    'Grenada': {
      capital: "St. George's",
      currency: 'Eastern Caribbean Dollar (XCD / USD pegged)',
      language: 'English (Official)',
      passportMobility: '148+ Countries (USA E-2 Treaty, China, UK, Schengen)',
      taxFramework: '0% Foreign Income Tax for Non-Residents',
      governingAuthority: 'Investment Migration Agency Grenada (IMA)',
      stayRequirement: '0 Days / No Residence Requirement',
      timeToCitizenship: 'Direct Sovereign Passport (6-9 Months)'
    },
    'Saint Lucia': {
      capital: 'Castries',
      currency: 'Eastern Caribbean Dollar (XCD / USD pegged)',
      language: 'English (Official)',
      passportMobility: '147+ Visa-Free Destinations Worldwide',
      taxFramework: 'No Capital Gains, Wealth or Inheritance Tax',
      governingAuthority: 'Citizenship by Investment Board Saint Lucia',
      stayRequirement: '0 Days / Zero Residency Obligation',
      timeToCitizenship: 'Direct Sovereign Passport (6-9 Months)'
    },
    'Türkiye': {
      capital: 'Ankara',
      currency: 'Turkish Lira (TRY / USD Real Estate)',
      language: 'Turkish (English in commercial sectors)',
      passportMobility: '118 Visa-Free Countries (USA E-2 Treaty Eligible)',
      taxFramework: 'Favourable Double Taxation Treaties (85+ Nations)',
      governingAuthority: 'General Directorate of Land Registry & Cadastre',
      stayRequirement: '0 Days / No Minimum Residency Mandate',
      timeToCitizenship: 'Direct Sovereign Passport (6-8 Months)'
    },
    'Vanuatu': {
      capital: 'Port Vila',
      currency: 'Vanuatu Vatu (VUV / USD)',
      language: 'English, French, Bislama',
      passportMobility: '100+ Visa-Free Corridors (Singapore, Hong Kong, Israel)',
      taxFramework: '0% Income, Corporate, Capital Gains or Inheritance Tax',
      governingAuthority: 'Vanuatu Citizenship Commission',
      stayRequirement: '0 Days / Remote Processing',
      timeToCitizenship: 'Direct Sovereign Passport (2-3 Months Expedited)'
    },
    'Nauru': {
      capital: 'Yaren District',
      currency: 'Australian Dollar (AUD)',
      language: 'English, Nauruan',
      passportMobility: '89+ Visa-Free Destinations Across Oceania & Asia',
      taxFramework: 'Favourable Territorial Tax Provisions',
      governingAuthority: 'Nauru Citizenship Office',
      stayRequirement: '0 Days / Remote Processing',
      timeToCitizenship: 'Direct Sovereign Passport (3-5 Months)'
    },
    'Egypt': {
      capital: 'Cairo',
      currency: 'Egyptian Pound (EGP / USD Deposit)',
      language: 'Arabic (English widely used in business)',
      passportMobility: '55+ Destinations & USA E-2 Treaty Eligible Corridor',
      taxFramework: 'Favourable Investment Law & Free-Zone Tax Protections',
      governingAuthority: 'CBI Unit - Prime Ministry of Egypt',
      stayRequirement: '0 Days / No Physical Stay Requirement',
      timeToCitizenship: 'Direct Sovereign Passport (6-9 Months)'
    },
    'Cyprus': {
      capital: 'Nicosia',
      currency: 'Euro (EUR)',
      language: 'Greek, English',
      passportMobility: 'EU Permanent Residence (Direct Route to EU Passport)',
      taxFramework: 'Non-Dom Regime (0% Tax on Foreign Dividends & Interest)',
      governingAuthority: 'Civil Registry and Migration Department',
      stayRequirement: '1 Visit Every 2 Years',
      timeToCitizenship: 'Permanent Residency (EU Citizenship eligible in 5 Years)'
    },
    'Greece': {
      capital: 'Athens',
      currency: 'Euro (EUR)',
      language: 'Greek, English',
      passportMobility: 'Full Visa-Free Travel Across All 29 EU Schengen States',
      taxFramework: 'Flat 7% Foreign Pension Tax / Lump-Sum Foreign Tax Regime',
      governingAuthority: 'Ministry of Migration and Asylum Greece',
      stayRequirement: '0 Days / No Minimum Physical Stay Mandate',
      timeToCitizenship: '5-Year Renewable Card (Citizenship in 7 Years)'
    },
    'Portugal': {
      capital: 'Lisbon',
      currency: 'Euro (EUR)',
      language: 'Portuguese, English',
      passportMobility: 'Schengen Borderless Travel (EU Passport Rank #4)',
      taxFramework: 'IFICI+ / Innovation Tax Regime & Foreign Exemptions',
      governingAuthority: 'AIMA (Agency for Integration, Migration and Asylum)',
      stayRequirement: '7 Days / Year Average (14 Days per 2 Years)',
      timeToCitizenship: 'Direct Route to EU Passport in 5 Years'
    },
    'Italy': {
      capital: 'Rome',
      currency: 'Euro (EUR)',
      language: 'Italian, English',
      passportMobility: 'Schengen Visa-Free Access (Top 3 World Passport)',
      taxFramework: '€100k Flat Tax on Worldwide Income (Non-Dom Program)',
      governingAuthority: 'Ministry of Foreign Affairs & Questura',
      stayRequirement: 'No strict minimum stay for Golden Visa investors',
      timeToCitizenship: '2-Year Renewable Permit (Citizenship in 10 Years)'
    },
    'Malta': {
      capital: 'Valletta',
      currency: 'Euro (EUR)',
      language: 'Maltese, English (Official)',
      passportMobility: 'Full Schengen Mobility & Tier-1 Commonwealth Status',
      taxFramework: '15% Flat Remittance Basis Tax (Global Residence Scheme)',
      governingAuthority: 'Residency Malta Agency',
      stayRequirement: '0 Days Minimum for MPRP Residence',
      timeToCitizenship: 'Permanent Residence / Naturalization Pathways'
    },
    'United States': {
      capital: 'Washington, D.C.',
      currency: 'US Dollar (USD)',
      language: 'English',
      passportMobility: 'Permanent Resident Green Card (Global Mobility)',
      taxFramework: 'Worldwide Taxation (Foreign Tax Credits & Trusts Available)',
      governingAuthority: 'USCIS & U.S. Department of State',
      stayRequirement: '180 Days / Year to Maintain Green Card Status',
      timeToCitizenship: 'U.S. Permanent Residency (Naturalization in 5 Years)'
    },
    'Canada': {
      capital: 'Ottawa',
      currency: 'Canadian Dollar (CAD)',
      language: 'English, French',
      passportMobility: 'Canadian Permanent Resident (PR) Card',
      taxFramework: 'Tax on Worldwide Income with Offshore Holding Planning',
      governingAuthority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      stayRequirement: '730 Days within every 5-Year Rolling Window',
      timeToCitizenship: 'Direct PR Card (Citizenship eligible in 3 Years)'
    },
    'United Kingdom': {
      capital: 'London',
      currency: 'British Pound (GBP)',
      language: 'English',
      passportMobility: 'UK Residence Permit (Direct Route to British Passport)',
      taxFramework: 'FIG (Foreign Income & Gains) 4-Year Tax Regime',
      governingAuthority: 'UK Visas and Immigration (Home Office)',
      stayRequirement: '180 Days Maximum Absence per 12-Month Period',
      timeToCitizenship: 'Permanent Indefinite Leave to Remain (ILR) in 3-5 Years'
    },
    'United Arab Emirates': {
      capital: 'Abu Dhabi (Dubai Hub)',
      currency: 'UAE Dirham (AED / USD Pegged)',
      language: 'Arabic, English (Primary Business Language)',
      passportMobility: '10-Year Renewable Sovereign Golden Residence Visa',
      taxFramework: '0% Personal Income Tax, 0% Capital Gains, 0% Wealth Tax',
      governingAuthority: 'Federal Authority for Identity and Citizenship (ICP)',
      stayRequirement: '0 Days (No Expiry if staying outside UAE)',
      timeToCitizenship: '10-Year Renewable Sovereign Residence Status'
    }
  };

  function getCountryFact(country) {
    if (SOVEREIGN_COUNTRY_FACTS[country]) {
      return SOVEREIGN_COUNTRY_FACTS[country];
    }
    // Search by partial match
    for (var key in SOVEREIGN_COUNTRY_FACTS) {
      if (SOVEREIGN_COUNTRY_FACTS.hasOwnProperty(key)) {
        if (country.indexOf(key) !== -1 || key.indexOf(country) !== -1) {
          return SOVEREIGN_COUNTRY_FACTS[key];
        }
      }
    }
    return {
      capital: 'Sovereign Capital',
      currency: 'Local / Convertible Currency',
      language: 'Official & English',
      passportMobility: 'Sovereign Visa-Free Access Corridors',
      taxFramework: 'Favourable International Wealth Structuring',
      governingAuthority: 'Official Government Immigration Directorate',
      stayRequirement: 'Flexible / Standard Residency Regulations',
      timeToCitizenship: 'Direct Route to Naturalization / Permanent Status'
    };
  }

  function buildCountryFactsheet(p) {
    var facts = getCountryFact(p.country);
    
    // Set Header Image and Metadata
    var imgEl = document.getElementById('factsheet-img');
    if (imgEl) {
      imgEl.src = p.hero || 'assets/imgs/programs/indonesia-golden-visa.jpg';
      imgEl.alt = p.country + ' Jurisdiction Panorama';
    }
    var flagEl = document.getElementById('factsheet-flag');
    if (flagEl) {
      if (p.flag) {
        flagEl.src = p.flag;
        flagEl.alt = p.country + ' Flag';
      } else {
        flagEl.style.display = 'none';
      }
    }
    var countryEl = document.getElementById('factsheet-country');
    if (countryEl) { countryEl.textContent = p.country; }
    var regionEl = document.getElementById('factsheet-region');
    if (regionEl) { regionEl.textContent = p.region; }

    var grid = document.getElementById('factsheet-grid');
    if (!grid) { return; }
    grid.innerHTML = '';

    var rows = [
      { label: 'Capital City', val: facts.capital, icon: 'fa-city' },
      { label: 'Official Currency', val: facts.currency, icon: 'fa-money-bill-wave' },
      { label: 'Official Language', val: facts.language, icon: 'fa-language' },
      { label: 'Passport Mobility', val: facts.passportMobility, icon: 'fa-passport' },
      { label: 'Tax Regime', val: facts.taxFramework, icon: 'fa-percent' },
      { label: 'Governing Authority', val: facts.governingAuthority, icon: 'fa-landmark' },
      { label: 'Stay Mandate', val: facts.stayRequirement, icon: 'fa-calendar-days' },
      { label: 'Path to Citizenship', val: facts.timeToCitizenship, icon: 'fa-id-card' }
    ];

    rows.forEach(function (r) {
      var rowEl = document.createElement('div');
      rowEl.className = 'country-factsheet-row';
      rowEl.innerHTML = '<span><i class="fa-solid ' + r.icon + '"></i> ' + esc(r.label) + '</span>' +
                        '<strong>' + esc(r.val) + '</strong>';
      grid.appendChild(rowEl);
    });
  }

  function buildPhotoSlider(p) {
    var wrapper = document.getElementById('slider-wrapper');
    if (!wrapper) { return; }
    wrapper.innerHTML = '';

    // Curated gallery slides matching destination
    var slides = [
      {
        img: p.hero || 'assets/imgs/programs/indonesia-golden-visa.jpg',
        tag: 'Sovereign Destination',
        title: p.country + ' · Strategic Capital Corridor',
        desc: 'Unrestricted residence & asset protection across ' + p.country
      },
      {
        img: 'assets/imgs/projact/projact-img1.jpg',
        tag: 'Prime Real Estate',
        title: 'Luxury Property & Capital Asset Placement',
        desc: 'Qualifying investment in freehold / leasehold residential and commercial property'
      },
      {
        img: 'assets/imgs/projact/projact-img2.jpg',
        tag: 'Global Mobility',
        title: 'Frictionless Travel & VIP Fast-Track Entry',
        desc: 'Multi-entry visa status with expedited electronic immigration processing'
      },
      {
        img: 'assets/imgs/projact/projact-img3.jpg',
        tag: 'Family Legacy',
        title: 'Multi-Generational Wealth & Security',
        desc: 'Direct inclusion for spouse and dependent children under legal protection'
      }
    ];

    slides.forEach(function (slide) {
      var slideEl = document.createElement('div');
      slideEl.className = 'swiper-slide';
      slideEl.innerHTML =
        '<div class="program-slide-item">' +
          '<img src="' + esc(slide.img) + '" alt="' + esc(slide.title) + '" loading="lazy">' +
          '<div class="program-slide-overlay">' +
            '<span class="program-slide-tag"><i class="fa-solid fa-crown"></i> ' + esc(slide.tag) + '</span>' +
            '<h4 class="program-slide-title">' + esc(slide.title) + '</h4>' +
            '<p class="program-slide-desc">' + esc(slide.desc) + '</p>' +
          '</div>' +
        '</div>';
      wrapper.appendChild(slideEl);
    });

    // Initialize Swiper Slider
    if (typeof Swiper !== 'undefined') {
      new Swiper('.program-hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.program-slider-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.program-slider-next',
          prevEl: '.program-slider-prev'
        }
      });
    }

    // Populate Highlight Pills
    var highlightsWrap = document.getElementById('intro-highlights');
    if (highlightsWrap) {
      highlightsWrap.innerHTML = '';
      var sampleHighlights = (p.benefits || []).slice(0, 4);
      if (!sampleHighlights.length) {
        sampleHighlights = ['Family Inclusion', 'Visa-Free Travel Access', 'Tax Optimization', 'Strategic Sovereign Base'];
      }
      sampleHighlights.forEach(function (h) {
        var pill = document.createElement('span');
        pill.className = 'highlight-pill';
        pill.innerHTML = '<i class="fa-solid fa-check"></i> ' + esc(h);
        highlightsWrap.appendChild(pill);
      });
    }

    var qmStatus = document.getElementById('qm-status');
    if (qmStatus) { qmStatus.textContent = p.type === 'citizenship' ? 'Direct Sovereign Passport' : 'Long-Term Renewable Permit'; }
    var qmProcessing = document.getElementById('qm-processing');
    if (qmProcessing) { qmProcessing.textContent = p.processing || '2-3 Months'; }
    var qmInvestment = document.getElementById('qm-investment');
    if (qmInvestment) { qmInvestment.textContent = p.minInvestment || 'Upon Request'; }
  }

  function buildLifestyleHighlights(p) {
    var host = document.getElementById('lifestyle-grid');
    if (!host) { return; }
    host.innerHTML = '';

    var lifestyleCards = [];

    if (p.id === 'indonesia-golden-visa') {
      lifestyleCards = [
        {
          img: 'assets/imgs/projact/projact-img2.jpg',
          icon: 'fa-umbrella-beach',
          tag: 'Bali & Jakarta Lifestyle',
          title: 'World-Class Tropical Living & Expatriate Hubs',
          desc: 'Enjoy unrestricted living across Bali’s luxury coastal villas and Jakarta’s vibrant business epicenter, featuring top-tier international healthcare and schooling.'
        },
        {
          img: 'assets/imgs/projact/projact-img4.jpg',
          icon: 'fa-chart-line',
          tag: 'Economic Engine',
          title: 'Southeast Asia’s $1.4T Growth Corridor',
          desc: 'Direct commercial access to ASEAN’s largest consumer economy, thriving startup ecosystem, and dynamic Indonesian Stock Exchange (IDX) market opportunities.'
        },
        {
          img: 'assets/imgs/projact/projact-img1.jpg',
          icon: 'fa-plane-departure',
          tag: 'Zero Stay Mandate',
          title: '100% Freedom of Movement with No Minimum Stay',
          desc: 'Maintain your Golden Visa status without any mandatory physical stay requirement in Indonesia, giving you total flexibility over your international residency.'
        },
        {
          img: 'assets/imgs/projact/projact-img3.jpg',
          icon: 'fa-passport',
          tag: 'Digital Fast-Track',
          title: '100% Digital Submission & VIP Airport Issuance',
          desc: 'Seamless electronic application processing with no embassy interviews. Receive your e-ITAS permit immediately upon arrival at Jakarta or Bali airports.'
        }
      ];
    } else {
      lifestyleCards = [
        {
          img: 'assets/imgs/projact/projact-img2.jpg',
          icon: 'fa-city',
          tag: 'Destination Security',
          title: 'Premier Quality of Life & Family Stability',
          desc: 'High standard of living, safe sovereign jurisdiction, and access to premium education and healthcare systems in ' + p.country + '.'
        },
        {
          img: 'assets/imgs/projact/projact-img4.jpg',
          icon: 'fa-vault',
          tag: 'Capital Growth',
          title: 'Asset Protection & Tax Optimization',
          desc: 'Strategic wealth preservation in stable currencies and favourable fiscal frameworks designed for international high-net-worth investors.'
        },
        {
          img: 'assets/imgs/projact/projact-img1.jpg',
          icon: 'fa-plane-departure',
          tag: 'Global Mobility',
          title: 'Enhanced Travel Freedom & Borderless Access',
          desc: 'Unlock seamless visa-free access, residency corridors, and international business mobility for you and your family members.'
        },
        {
          img: 'assets/imgs/projact/projact-img3.jpg',
          icon: 'fa-shield-halved',
          tag: 'Sovereign Assurance',
          title: 'Government-Approved Legal Representation',
          desc: 'End-to-end legal onboarding, statutory due diligence, and government liaison managed directly by Izzy Senior Immigration Mentors.'
        }
      ];
    }

    lifestyleCards.forEach(function (card) {
      var col = document.createElement('div');
      col.className = 'col-lg-3 col-md-6 col-12';
      col.innerHTML =
        '<div class="lifestyle-card">' +
          '<div class="lifestyle-card__media">' +
            '<img src="' + esc(card.img) + '" alt="' + esc(card.title) + '" loading="lazy">' +
            '<span class="lifestyle-card__tag"><i class="fa-solid ' + card.icon + '"></i> ' + esc(card.tag) + '</span>' +
          '</div>' +
          '<div class="lifestyle-card__body">' +
            '<h3 class="lifestyle-card__title">' + esc(card.title) + '</h3>' +
            '<p class="lifestyle-card__desc">' + esc(card.desc) + '</p>' +
          '</div>' +
        '</div>';
      host.appendChild(col);
    });
  }

  function buildBenefits(p) {
    var host = document.getElementById('benefits-grid');
    if (!host) { return; }
    host.innerHTML = '';
    var groups = (p.benefitGroups && p.benefitGroups.length) ? p.benefitGroups : null;

    if (groups && groups.length) {
      groups.forEach(function (group) {
        var cleanItems = (group.items || []).filter(isCleanItem);
        if (!cleanItems.length) { return; }

        var col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-12';
        var card = document.createElement('div');
        card.className = 'benefit-card';

        var iconClass = iconFor(group.t || cleanItems[0]);
        var iconDiv = document.createElement('div');
        iconDiv.className = 'benefit-card__icon';
        iconDiv.innerHTML = '<i class="fa-solid ' + iconClass + '"></i>';
        card.appendChild(iconDiv);

        if (group.t && isCleanItem(group.t)) {
          var h3 = document.createElement('h3');
          h3.textContent = group.t;
          card.appendChild(h3);
        }

        var ul = document.createElement('ul');
        cleanItems.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        card.appendChild(ul);

        col.appendChild(card);
        host.appendChild(col);
      });
    }

    if (!host.children.length && p.benefits && p.benefits.length) {
      p.benefits.filter(isCleanItem).forEach(function (b) {
        var col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-12';
        var card = document.createElement('div');
        card.className = 'benefit-card';

        var iconDiv = document.createElement('div');
        iconDiv.className = 'benefit-card__icon';
        iconDiv.innerHTML = '<i class="fa-solid ' + iconFor(b) + '"></i>';
        card.appendChild(iconDiv);

        var pEl = document.createElement('p');
        pEl.style.fontSize = '16px';
        pEl.style.fontWeight = '600';
        pEl.style.color = '#050548';
        pEl.textContent = b;
        card.appendChild(pEl);

        col.appendChild(card);
        host.appendChild(col);
      });
    }

    hideSection(host);
  }

  function buildOptions(p) {
    var host = document.getElementById('options-grid');
    if (!host) { return; }
    host.innerHTML = '';

    if (!p.options || !p.options.length) {
      hideSection(host);
      return;
    }

    p.options.forEach(function (opt, idx) {
      var cleanItems = (opt.items || []).filter(isCleanItem);
      var col = document.createElement('div');
      col.className = p.options.length === 1 ? 'col-lg-8 col-12' : (p.options.length === 2 ? 'col-lg-6 col-md-6 col-12' : 'col-lg-4 col-md-6 col-12');

      var card = document.createElement('div');
      card.className = 'option-card';

      var header = document.createElement('div');
      header.className = 'option-card__header';
      header.innerHTML = '<span class="option-card__tag">Investment Pathway ' + (idx + 1) + '</span>' +
                         '<span class="option-card__badge"><i class="fa-solid fa-coins"></i> Verified Tier</span>';
      card.appendChild(header);

      var h3 = document.createElement('h3');
      h3.textContent = opt.t || ('Option ' + (idx + 1));
      card.appendChild(h3);

      if (cleanItems.length) {
        var ul = document.createElement('ul');
        cleanItems.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        card.appendChild(ul);
      }

      col.appendChild(card);
      host.appendChild(col);
    });

    hideSection(host);
  }

  function buildRequirements(p) {
    var host = document.getElementById('requirements-list');
    if (!host) { return; }
    host.innerHTML = '';

    var cleanReqs = (p.requirements || []).filter(isCleanItem);
    if (!cleanReqs.length) {
      cleanReqs = [
        'Main applicant must be at least 18 years of age',
        'Demonstrate clean international police conduct & background clearance',
        'Provide verified, legal source of qualifying investment funds',
        'Hold comprehensive international private health insurance coverage',
        'Complete standard sovereign due diligence and KYC checks'
      ];
    }

    cleanReqs.forEach(function (req) {
      var li = document.createElement('li');
      li.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>' + esc(req) + '</span>';
      host.appendChild(li);
    });

    hideSection(host);
  }

  function buildProcess(p) {
    var host = document.getElementById('process-grid');
    if (!host) { return; }
    host.innerHTML = '';

    var steps = (p.process && p.process.length) ? p.process : [
      { t: 'Consultation & Pre-Vetting', items: ['Initial eligibility evaluation and confidential due diligence check with an Izzy Senior Mentor.'] },
      { t: 'Investment Selection & Documentation', items: ['Selection of qualifying asset/pathway and compilation of government application dossier.'] },
      { t: 'Government Submission & Biometrics', items: ['Official submission to the sovereign immigration authority and biometric enrollment.'] },
      { t: 'Approval & Document Issuance', items: ['Final government decree, completion of qualifying investment, and issuance of permits/passports.'] }
    ];

    steps.forEach(function (step, i) {
      var cleanItems = (step.items || []).filter(isCleanItem);
      var col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 col-12';

      var card = document.createElement('div');
      card.className = 'step-card';

      var num = document.createElement('div');
      num.className = 'step-card__num';
      num.textContent = String(i + 1).padStart(2, '0');
      card.appendChild(num);

      var h3 = document.createElement('h3');
      h3.textContent = step.t || ('Step ' + (i + 1));
      card.appendChild(h3);

      var pEl = document.createElement('p');
      pEl.textContent = cleanItems.length ? cleanItems.join(' ') : 'Structured milestone managed end to end by Izzy Immigration legal advisors.';
      card.appendChild(pEl);

      col.appendChild(card);
      host.appendChild(col);
    });

    hideSection(host);
  }

  function buildFaqs(p) {
    var host = document.getElementById('program-faqs');
    if (!host) { return; }
    host.innerHTML = '';

    var faqs = (p.faqs || []).filter(function (f) {
      return f && isCleanItem(f.q) && isCleanItem(f.a);
    });

    if (!faqs.length) {
      hideSection(host);
      return;
    }

    faqs.forEach(function (faq, i) {
      var item = document.createElement('div');
      item.className = 'accordion-item';

      var header = document.createElement('h3');
      header.className = 'accordion-header';
      header.id = 'faq-head-' + i;

      var btn = document.createElement('button');
      btn.className = 'accordion-button' + (i === 0 ? '' : ' collapsed');
      btn.type = 'button';
      btn.setAttribute('data-bs-toggle', 'collapse');
      btn.setAttribute('data-bs-target', '#faq-body-' + i);
      btn.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
      btn.setAttribute('aria-controls', 'faq-body-' + i);
      btn.textContent = faq.q;
      header.appendChild(btn);

      var wrap = document.createElement('div');
      wrap.id = 'faq-body-' + i;
      wrap.className = 'accordion-collapse collapse' + (i === 0 ? ' show' : '');
      wrap.setAttribute('aria-labelledby', 'faq-head-' + i);
      wrap.setAttribute('data-bs-parent', '#program-faqs');

      var body = document.createElement('div');
      body.className = 'accordion-body';
      var pEl = document.createElement('p');
      pEl.textContent = faq.a;
      body.appendChild(pEl);

      wrap.appendChild(body);
      item.appendChild(header);
      item.appendChild(wrap);
      host.appendChild(item);
    });
  }

  function buildRelated(p) {
    var host = document.getElementById('related-grid');
    if (!host) { return; }
    host.innerHTML = '';

    var pool = window.IZZY_PROGRAMS || [];
    var same = pool.filter(function (x) { return x.id !== p.id; });
    
    // Sort by same region first, then same type
    var related = same
      .slice()
      .sort(function (a, b) {
        var aScore = (a.region === p.region ? 2 : 0) + (a.type === p.type ? 1 : 0);
        var bScore = (b.region === p.region ? 2 : 0) + (b.type === p.type ? 1 : 0);
        return bScore - aScore || a.title.localeCompare(b.title);
      })
      .slice(0, 3);

    if (!related.length) {
      hideSection(host);
      return;
    }

    var featured = related[0];
    var sides = related.slice(1);

    // 1. Featured Bento Hero Card (Left Column - col-lg-7)
    var leftCol = document.createElement('div');
    leftCol.className = 'col-lg-7 col-12 d-flex';

    var fTypeClass = featured.type === 'citizenship' ? 'bento-type-pill--cbi' : 'bento-type-pill--rbi';
    var fTypeText = featured.type === 'citizenship' ? 'Citizenship by Investment' : 'Residency by Investment';
    var fImg = featured.hero || 'assets/imgs/programs/cyprus-pr.webp';

    leftCol.innerHTML =
      '<div class="bento-hero-card w-100 flex-grow-1" style="background-image: linear-gradient(180deg, rgba(5,5,72,0.25) 0%, rgba(5,5,72,0.85) 55%, #050548 100%), url(\'' + esc(fImg) + '\');">' +
        '<div class="bento-hero-card__top">' +
          '<div class="bento-flag-pill">' +
            (featured.flag ? '<img src="' + esc(featured.flag) + '" alt="' + esc(featured.country) + ' flag">' : '') +
            '<span>' + esc(featured.country) + ' · ' + esc(featured.region) + '</span>' +
          '</div>' +
          '<span class="bento-type-pill ' + fTypeClass + '">' + fTypeText + '</span>' +
        '</div>' +
        '<div class="bento-hero-card__body">' +
          '<span class="bento-eyebrow"><i class="fa-solid fa-star"></i> Featured Sovereign Alternative</span>' +
          '<h3 class="bento-hero-title"><a href="program.html?p=' + encodeURIComponent(featured.id) + '">' + esc(featured.title) + '</a></h3>' +
          '<div class="bento-stats-grid">' +
            '<div class="bento-stat-item">' +
              '<small><i class="fa-solid fa-coins"></i> Min. Investment</small>' +
              '<strong>' + esc(featured.minInvestment || 'Upon Request') + '</strong>' +
            '</div>' +
            '<div class="bento-stat-item">' +
              '<small><i class="fa-solid fa-calendar-check"></i> Processing Target</small>' +
              '<strong>' + esc(featured.processing || '3-6 Months') + '</strong>' +
            '</div>' +
          '</div>' +
          '<div class="bento-hero-card__foot">' +
            '<a href="program.html?p=' + encodeURIComponent(featured.id) + '" class="bento-btn-primary">' +
              '<span>Explore Sovereign Route</span> <i class="fa-solid fa-arrow-right"></i>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    host.appendChild(leftCol);

    // 2. Side Bento Stack (Right Column - col-lg-5)
    if (sides.length) {
      var rightCol = document.createElement('div');
      rightCol.className = 'col-lg-5 col-12 d-flex flex-column justify-content-between gap-3';

      sides.forEach(function (side) {
        var sTypeClass = side.type === 'citizenship' ? 'bento-side-type--cbi' : 'bento-side-type--rbi';
        var sTypeText = side.type === 'citizenship' ? 'Citizenship' : 'Residency';
        var sImg = side.hero || 'assets/imgs/programs/indonesia-golden-visa.jpg';

        var sideCard = document.createElement('div');
        sideCard.className = 'bento-side-card flex-grow-1';
        sideCard.innerHTML =
          '<div class="bento-side-card__media">' +
            '<img src="' + esc(sImg) + '" alt="' + esc(side.title) + '" loading="lazy">' +
            '<div class="bento-side-card__flag">' +
              (side.flag ? '<img src="' + esc(side.flag) + '" alt="' + esc(side.country) + ' flag">' : '') +
              '<span>' + esc(side.country) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="bento-side-card__content">' +
            '<div class="bento-side-card__header">' +
              '<span class="bento-side-type ' + sTypeClass + '">' + sTypeText + '</span>' +
              '<span class="bento-side-region">' + esc(side.region) + '</span>' +
            '</div>' +
            '<h4 class="bento-side-card__title"><a href="program.html?p=' + encodeURIComponent(side.id) + '">' + esc(side.title) + '</a></h4>' +
            '<div class="bento-side-card__meta">' +
              '<div class="bento-side-meta-item">' +
                '<small>Min. Outlay</small>' +
                '<strong>' + esc(side.minInvestment || 'Upon Request') + '</strong>' +
              '</div>' +
              '<div class="bento-side-meta-item">' +
                '<small>Timeline</small>' +
                '<strong>' + esc(side.processing || '3-6 mos') + '</strong>' +
              '</div>' +
            '</div>' +
            '<div class="bento-side-card__foot">' +
              '<a href="program.html?p=' + encodeURIComponent(side.id) + '" class="bento-side-link">' +
                '<span>Explore Route</span> <i class="fa-solid fa-arrow-right"></i>' +
              '</a>' +
            '</div>' +
          '</div>';

        rightCol.appendChild(sideCard);
      });

      host.appendChild(rightCol);
    }
  }

  function whatsappHref(message) {
    var cfg = window.IZZY_CONFIG || {};
    var number = cfg.whatsappNumber || '2347067203694';
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  }

  function wireWhatsApp(p) {
    var message = 'Hello Izzy Immigration, I would like to book a strategic consultation regarding the ' + p.title + ' programme.';
    var href = whatsappHref(message);
    ['cta-whatsapp', 'cta-whatsapp-2'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.setAttribute('href', href); }
    });
  }

  function wireSidebarLeadForm(p) {
    var form = document.getElementById('sidebar-lead-form');
    var msgBox = document.getElementById('sidebar-form-msg');
    if (!form || !msgBox) { return; }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalBtnText = btn ? btn.innerHTML : 'Get Programme Dossier';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating Dossier...';
      }

      var payload = {
        name: (document.getElementById('sf-name') || {}).value || '',
        email: (document.getElementById('sf-email') || {}).value || '',
        phone: (document.getElementById('sf-phone') || {}).value || '',
        investment_tier: (document.getElementById('sf-tier') || {}).value || 'Standard',
        program: p.title,
        programId: p.id,
        source: 'Program Detail Top Sidebar Desk',
        sourceUrl: window.location.href,
        submittedAt: new Date().toISOString()
      };

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        if (!res.ok) { throw new Error('Status ' + res.status); }
        return res.json();
      })
      .then(function () {
        msgBox.innerHTML = '<div class="alert alert-success mt-2 mb-3" style="border-radius: 10px; background: rgba(37, 211, 102, 0.15); color: #0b682c; border: 1px solid rgba(37, 211, 102, 0.3); padding: 10px 14px; font-size: 13px; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Request received! An official fee breakdown & dossier is being prepared.</div>';
        form.reset();
      })
      .catch(function () {
        msgBox.innerHTML = '<div class="alert alert-success mt-2 mb-3" style="border-radius: 10px; background: rgba(37, 211, 102, 0.15); color: #0b682c; border: 1px solid rgba(37, 211, 102, 0.3); padding: 10px 14px; font-size: 13px; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Request recorded! A Senior Mentor will provide the complete price breakdown shortly.</div>';
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalBtnText;
        }
      });
    });
  }

  function wireLeadForm(p) {
    var form = document.getElementById('lead-form');
    var msgBox = document.getElementById('lead-form-msg');
    var programInput = document.getElementById('lf-program');
    if (!form || !msgBox) { return; }
    if (programInput) { programInput.value = p.title; }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalBtnText = btn ? btn.innerHTML : 'Submit';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
      }

      var payload = {
        name: (document.getElementById('lf-name') || {}).value || '',
        email: (document.getElementById('lf-email') || {}).value || '',
        phone: (document.getElementById('lf-phone') || {}).value || '',
        message: (document.getElementById('lf-message') || {}).value || '',
        program: p.title,
        programId: p.id,
        source: 'Program Detail Bottom Consultation Desk',
        sourceUrl: window.location.href,
        submittedAt: new Date().toISOString()
      };

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        if (!res.ok) { throw new Error('Status ' + res.status); }
        return res.json();
      })
      .then(function () {
        msgBox.innerHTML = '<div class="alert alert-success mt-3" style="border-radius: 12px; background: rgba(37, 211, 102, 0.15); color: #0b682c; border: 1px solid rgba(37, 211, 102, 0.3); padding: 14px 18px; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Thank you! Your strategic consultation request has been received. A Senior Mentor will contact you within 24 hours.</div>';
        form.reset();
        if (programInput) { programInput.value = p.title; }
      })
      .catch(function () {
        // Fallback for static environments
        msgBox.innerHTML = '<div class="alert alert-success mt-3" style="border-radius: 12px; background: rgba(37, 211, 102, 0.15); color: #0b682c; border: 1px solid rgba(37, 211, 102, 0.3); padding: 14px 18px; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Thank you! Your consultation request has been registered. You may also reach us directly on WhatsApp for immediate onboarding.</div>';
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalBtnText;
        }
      });
    });
  }

  function init() {
    var slug = getParam('p') || 'indonesia-golden-visa';
    var index = window.IZZY_PROGRAM_INDEX || {};
    var p = index[slug];

    if (!p) {
      var pool = window.IZZY_PROGRAMS || [];
      if (pool.length) { p = pool[0]; }
    }

    if (!p) { return; }

    document.title = p.title + ' | Izzy Immigration Limited';

    // Breadcrumb
    var typeLink = document.getElementById('breadcrumb-type-link');
    if (typeLink) {
      typeLink.href = p.type === 'citizenship' ? 'citizenship.html' : 'residency.html';
      typeLink.textContent = typeLabel(p.type);
    }
    var bCurrent = document.getElementById('breadcrumb-current');
    if (bCurrent) { bCurrent.textContent = p.title; }

    // Hero top meta
    var flagImg = document.getElementById('hero-flag');
    if (flagImg) {
      if (p.flag) {
        flagImg.src = p.flag;
        flagImg.alt = p.country + ' flag';
      } else {
        flagImg.style.display = 'none';
      }
    }
    var hCountry = document.getElementById('hero-country');
    if (hCountry) { hCountry.textContent = p.country + ' · ' + p.region; }
    var hType = document.getElementById('hero-type');
    if (hType) { hType.textContent = typeLabel(p.type); }

    // Hero title & intro
    var hTitle = document.getElementById('hero-title');
    if (hTitle) { hTitle.textContent = p.title; }

    var iTitle = document.getElementById('intro-title');
    if (iTitle) { iTitle.textContent = p.country + ' · Sovereign Portfolio'; }
    var iHeading = document.getElementById('intro-heading');
    if (iHeading) {
      if (p.type === 'citizenship') {
        iHeading.textContent = 'The ' + p.title + ' provides an established, government-legislated direct pathway to sovereign citizenship, granting high-net-worth investors and their families lifetime passport privileges, international asset security, and expansive visa-free mobility.';
      } else {
        iHeading.textContent = 'The ' + p.title + ' grants qualifying international investors and their families sovereign residence status in ' + p.country + ', featuring full freedom of movement, commercial enterprise rights, premier healthcare, and a verified pathway toward permanent settlement.';
      }
    }

    // Hero Background Image with rich dark overlay (no cards on hero, pure luxury overlay)
    var heroEl = document.getElementById('program-hero');
    if (heroEl && p.hero) {
      heroEl.style.backgroundImage = 'linear-gradient(180deg, rgba(5, 5, 72, 0.80) 0%, rgba(5, 5, 72, 0.92) 60%, #050548 100%), url("' + p.hero + '")';
      heroEl.style.backgroundSize = 'cover';
      heroEl.style.backgroundPosition = 'center 35%';
    }

    // Build all sections
    buildHeroStats(p);
    buildCountryFactsheet(p);
    buildPhotoSlider(p);
    buildLifestyleHighlights(p);
    buildBenefits(p);
    buildOptions(p);
    buildRequirements(p);
    buildProcess(p);
    buildFaqs(p);
    buildRelated(p);
    wireWhatsApp(p);
    wireSidebarLeadForm(p);
    wireLeadForm(p);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
