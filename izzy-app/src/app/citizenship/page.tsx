
"use client";

import React from "react";
import Link from "next/link";

export default function CitizenshipbyInvestmentPage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Citizenship Programmes</span></div>
            <h1>Citizenship by Investment</h1>
            <p>A second passport is the ultimate plan B — visa-free travel, a stronger business profile and a stable jurisdiction for your family. Compare every active citizenship-by-investment route in one place.</p>
        </div>
    </section>

    {/*  Master Catalogue Section  */}
    <section className="program-section program-section--alt program-section--last">
        <div className="container">
            
            {/*  Filter Suite Card  */}
            <div className="cat-filter-wrapper">
                <div className="row align-items-center g-3">
                    <div className="col-lg-6 col-md-7 col-12">
                        <div className="cat-search-box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" id="catalogue-search" className="cat-search-input" placeholder="Search by country, route, or keyword..." aria-label="Search programmes" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="cat-sort-wrap justify-content-md-end">
                            <label htmlFor="catalogue-sort" className="cat-sort-label"><i className="fa-solid fa-arrow-down-short-wide"></i> Sort:</label>
                            <select id="catalogue-sort" className="cat-sort-select" aria-label="Sort programmes">
                                <option value="featured">Featured / Recommended</option>
                                <option value="investment-asc">Investment: Low to High</option>
                                <option value="investment-desc">Investment: High to Low</option>
                                <option value="name-asc">Country (A-Z)</option>
                                <option value="name-desc">Country (Z-A)</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/*  Region Filter Chips  */}
                <div id="catalogue-regions" className="cat-regions"></div>
            </div>
            
            {/*  Status & Live Counter Bar  */}
            <div className="cat-status-bar">
                <p className="cat-count" id="catalogue-count">Loading programmes...</p>
                <button type="button" className="cat-clear-btn" id="catalogue-clear-filters">
                    <i className="fa-solid fa-rotate-left"></i> Clear All Filters
                </button>
            </div>
            
            {/*  Master Grid  */}
            <div className="row g-4" id="catalogue-grid"></div>
            
            {/*  Curated Sovereign Regional Showcase Gallery  */}
            <div className="cat-gallery-section mt-80 mb-40">
                <div className="program-section__head text-center mx-auto" style={{"maxWidth":"760px"}}>
                    <span className="eyebrow"><i className="fa-solid fa-passport"></i> Global Second Passports</span>
                    <h2>Featured Sovereign Citizenship Jurisdictions</h2>
                    <p className="mx-auto">Compare tier-one sovereign citizenship destinations by passport power, visa-free access, and tax incentives.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/st-kitts-citizenship.webp" alt="St. Kitts & Nevis Citizenship" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-umbrella-beach"></i> St. Kitts &amp; Nevis</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>St. Kitts &amp; Nevis</h4>
                                <p>World’s most established CBI programme (est. 1984). 150+ visa-free countries and full family inclusion.</p>
                                <span className="region-showcase-card__meta">From $250,000 · 6-10 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/antigua-citizenship.webp" alt="Antigua & Barbuda Citizenship" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-umbrella-beach"></i> Antigua &amp; Barbuda</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Antigua &amp; Barbuda</h4>
                                <p>Premier Caribbean option for large families. 150+ visa-free destinations including UK, Schengen, and Singapore.</p>
                                <span className="region-showcase-card__meta">From $230,000 · 6-9 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/grenada-citizenship.webp" alt="Grenada Direct Passport" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-umbrella-beach"></i> Grenada</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Grenada Direct Passport</h4>
                                <p>Only Caribbean programme holding a USA E-2 Investor Visa treaty and visa-free travel access to China.</p>
                                <span className="region-showcase-card__meta">From $235,000 · 6-9 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/turkiye-citizenship.webp" alt="Türkiye Citizenship" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-europe"></i> Türkiye</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Türkiye Citizenship</h4>
                                <p>Real estate investment pathway granting direct Turkish passport, USA E-2 eligibility, and transcontinental hub access.</p>
                                <span className="region-showcase-card__meta">From $400,000 · 6-8 Months</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Bottom Guidance CTA Band  */}
            <div className="cta-band mt-40">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="cta-band__content">
                            <span className="eyebrow" style={{"color":"#e8c47a","fontSize":"13px","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.1em","display":"block","marginBottom":"8px"}}>Tailored Advisory</span>
                            <h2 style={{"color":"#fff","fontSize":"clamp(24px, 3vw, 36px)","fontWeight":"800","marginBottom":"12px","lineHeight":"1.2"}}>Need Guidance on Direct Second Citizenship?</h2>
                            <p style={{"color":"rgba(255, 255, 255, 0.85)","fontSize":"16px","margin":"0","maxWidth":"680px"}}>Schedule a confidential strategy call with an Izzy Senior Mentor to compare Caribbean and European citizenship routes, vetting standards, and family inclusion.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                        <a href="/contact" className="rr-btn" style={{"background":"#b8860b","color":"#fff","borderColor":"#b8860b","fontWeight":"700","padding":"16px 32px","borderRadius":"12px","display":"inline-flex","alignItems":"center","gap":"8px"}}>
                            Book A Consultation <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>


    </main>
  );
}
