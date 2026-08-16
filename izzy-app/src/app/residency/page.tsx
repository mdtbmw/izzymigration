
"use client";

import React from "react";
import Link from "next/link";

export default function ResidencyGoldenVisasPage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Residency Programmes</span></div>
            <h1>Residency by Investment</h1>
            <p>A residency permit unlocks visa-free travel, tax planning and a lawful base in a new market — without renouncing anything. Explore every residency-by-investment programme we manage.</p>
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
                    <span className="eyebrow"><i className="fa-solid fa-house-chimney"></i> Global Residency &amp; Golden Visas</span>
                    <h2>Featured Sovereign Residency Jurisdictions</h2>
                    <p className="mx-auto">Compare tier-one sovereign residency options by lifestyle quality, real estate yields, and minimal stay rules.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/greece-golden-visa.webp" alt="Greece Golden Visa" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-europe"></i> Greece</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Greece Golden Visa</h4>
                                <p>5-year renewable EU permanent residency through real estate with unrestricted Schengen borderless travel.</p>
                                <span className="region-showcase-card__meta">From €250,000 · 3-5 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/cyprus-pr.webp" alt="Cyprus Permanent Residency" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-europe"></i> Cyprus</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Cyprus Permanent Residency</h4>
                                <p>Fast-track life-long permanent residence permit via brand new residential luxury real estate acquisition.</p>
                                <span className="region-showcase-card__meta">From €300,000 · 2-3 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/indonesia-golden-visa.jpg" alt="Indonesia Golden Visa" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-asia"></i> Indonesia</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Indonesia Golden Visa</h4>
                                <p>5 or 10-year renewable residency under code E28C. Zero stay requirement and access to Bali and Jakarta.</p>
                                <span className="region-showcase-card__meta">From $350,000 · 2-3 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/uae-residence.webp" alt="UAE Golden Visa" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-city"></i> UAE (Dubai)</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>UAE Golden Visa</h4>
                                <p>10-year renewable Golden Residency for real estate investors and entrepreneurs in zero-tax Dubai.</p>
                                <span className="region-showcase-card__meta">From AED 2M · 1-2 Months</span>
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
                            <h2 style={{"color":"#fff","fontSize":"clamp(24px, 3vw, 36px)","fontWeight":"800","marginBottom":"12px","lineHeight":"1.2"}}>Compare Golden Visas &amp; Tax Residency</h2>
                            <p style={{"color":"rgba(255, 255, 255, 0.85)","fontSize":"16px","margin":"0","maxWidth":"680px"}}>Schedule a confidential strategy call with an Izzy Senior Mentor to compare residency programs, real estate yields, and minimum stay requirements.</p>
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
