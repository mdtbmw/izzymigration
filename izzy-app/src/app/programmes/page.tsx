
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AllProgrammesPage() {
  return (
    <main>


    {/*  Page Hero Banner  */}
    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb">
                <a href="/">Home</a>
                <span className="sep"><i className="fa-solid fa-angle-right"></i></span>
                <a href="/programmes">Services &amp; Lifestyle</a>
                <span className="sep"><i className="fa-solid fa-angle-right"></i></span>
                <span className="current">All Programmes Catalogue</span>
            </div>
            <h1 id="catalogue-title">Global Residency &amp; Citizenship Programmes</h1>
            <p>Explore 46+ premier government-approved citizenship and residency by investment routes across 30+ jurisdictions worldwide. Compare investment thresholds, processing timelines, and strategic benefits in one place.</p>
            <div className="page-hero-pills">
                <span className="page-hero-pill"><i className="fa-solid fa-shield-halved"></i> 46+ Verified Routes</span>
                <span className="page-hero-pill"><i className="fa-solid fa-globe"></i> 30+ Sovereign Jurisdictions</span>
                <span className="page-hero-pill"><i className="fa-solid fa-user-lock"></i> 100% Confidential Advisory</span>
            </div>
        </div>
    </section>

    {/*  Master Catalogue Section  */}
    <section className="program-section program-section--alt program-section--last">
        <div className="container">
            
            {/*  Modern Filter Suite Card  */}
            <div className="cat-filter-wrapper">
                <div className="row align-items-center g-3">
                    
                    {/*  Type Tabs (Segmented Control)  */}
                    <div className="col-xl-5 col-lg-6 col-12">
                        <div className="cat-type-nav" id="catalogue-type-filter"></div>
                    </div>
                    
                    {/*  Search Input  */}
                    <div className="col-xl-4 col-lg-3 col-md-7 col-12">
                        <div className="cat-search-box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" id="catalogue-search" className="cat-search-input" placeholder="Search country, programme, or keyword..." aria-label="Search programmes" />
                        </div>
                    </div>
                    
                    {/*  Sort Selection  */}
                    <div className="col-xl-3 col-lg-3 col-md-5 col-12">
                        <div className="cat-sort-wrap justify-content-lg-end">
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
            
            {/*  Master Dynamic Programme Grid (3 columns on desktop, 2 on tablet, 1 on mobile)  */}
            <div className="row g-4" id="catalogue-grid"></div>
            
            {/*  Empty State Container  */}
            <div className="cat-empty" id="catalogue-empty">
                <div className="cat-empty-icon"><i className="fa-solid fa-compass"></i></div>
                <h3>No programmes match your current filters</h3>
                <p>Try searching for a different country, switching to "All Regions", or clearing active filters.</p>
                <a href="/contact" className="rr-btn">Talk to a Senior Mentor <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
            {/*  Curated Sovereign Regional Showcase Gallery  */}
            <div className="cat-gallery-section mt-80 mb-40">
                <div className="program-section__head text-center mx-auto" style={{"maxWidth":"760px"}}>
                    <span className="eyebrow"><i className="fa-solid fa-earth-americas"></i> Global Corridors</span>
                    <h2>Featured Sovereign Jurisdictions</h2>
                    <p className="mx-auto">Compare tier-one sovereign destinations by regional prestige, tax environment, and global mobility.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/portugal-golden-visa.webp" alt="European Golden Visas" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-europe"></i> Europe</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>European Union Residency</h4>
                                <p>Schengen borderless travel, EU healthcare, and permanent residence across Greece, Portugal, Cyprus, and Italy.</p>
                                <span className="region-showcase-card__meta">From €250,000 · 14 Programmes</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/st-kitts-citizenship.webp" alt="Caribbean Direct Passports" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-umbrella-beach"></i> Caribbean</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Caribbean Passports</h4>
                                <p>Direct sovereign citizenship with 150+ visa-free destinations, zero personal tax, and fast 6-month processing.</p>
                                <span className="region-showcase-card__meta">From $100,000 · 5 Programmes</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/indonesia-golden-visa.jpg" alt="Asia-Pacific Investment Hubs" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-earth-asia"></i> Asia-Pacific</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Asia-Pacific Corridors</h4>
                                <p>High-growth economies, zero stay requirements, and premier tropical lifestyle in Indonesia, Singapore, and Thailand.</p>
                                <span className="region-showcase-card__meta">From $150,000 · 12 Programmes</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="region-showcase-card">
                            <div className="region-showcase-card__img">
                                <img src="/assets/imgs/programs/uae-residence.webp" alt="Americas & Middle East Hubs" loading="lazy" />
                                <span className="region-showcase-card__tag"><i className="fa-solid fa-city"></i> Middle East &amp; Americas</span>
                            </div>
                            <div className="region-showcase-card__body">
                                <h4>Americas &amp; Middle East</h4>
                                <p>World financial capitals, tax-free commercial bases, and investor green cards across UAE, USA, and Canada.</p>
                                <span className="region-showcase-card__meta">From $200,000 · 15 Programmes</span>
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
                            <h2 style={{"color":"#fff","fontSize":"clamp(24px, 3vw, 36px)","fontWeight":"800","marginBottom":"12px","lineHeight":"1.2"}}>Unsure Which Jurisdiction Fits Your Family's Goals?</h2>
                            <p style={{"color":"rgba(255, 255, 255, 0.85)","fontSize":"16px","margin":"0","maxWidth":"680px"}}>Schedule a confidential strategy call with an Izzy Senior Mentor to compare tax implications, residency requirements, and processing timelines across jurisdictions.</p>
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
