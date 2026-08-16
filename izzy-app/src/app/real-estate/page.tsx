
"use client";

import React from "react";
import Link from "next/link";

export default function GlobalRealEstatePage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Global Real Estate</span></div>
            <h1>Global Real Estate</h1>
            <p>The right property is the foundation of most golden visas. We present vetted, qualifying options — and make sure the paperwork behind them is bulletproof.</p>
        </div>
    </section>

    <section className="program-section">
        <div className="container">
            <div className="program-section__head">
                <span className="eyebrow">Property Meets Programme</span>
                <h2>How Real Estate Fits Your Route</h2>
                <p>Real estate is the qualifying route for dozens of residency and citizenship programmes. The key is choosing property that satisfies the government — and works for you.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="step-card">
                        <div className="step-card__num">01</div>
                        <h3>Qualifying Criteria</h3>
                        <p>Minimum values, completion status and holding periods verified against current regulations.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="step-card">
                        <div className="step-card__num">02</div>
                        <h3>Vetted Inventory</h3>
                        <p>Every property we present is title-checked by local counsel and priced at genuine market levels.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="step-card">
                        <div className="step-card__num">03</div>
                        <h3>Investment Fit</h3>
                        <p>Rental yield, resale potential and currency exposure weighed against your wealth plan.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="step-card">
                        <div className="step-card__num">04</div>
                        <h3>Paperwork End-to-End</h3>
                        <p>Purchase contracts, fund transfers, registration and compliance handled by one team.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="program-section program-section--alt">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="program-section__head" style={{"marginBottom":"20px"}}>
                        <span className="eyebrow">Where Property Qualifies</span>
                        <h2>Real Estate Routes We Manage</h2>
                    </div>
                    <ul className="req-list" style={{"gridTemplateColumns":"1fr"}}>
                        <li>Greece Golden Visa — from EUR 250,000</li>
                        <li>Portugal Golden Visa — regulated funds &amp; enterprise, historic property routes</li>
                        <li>Spain, Italy and Malta — property-based residency and citizenship</li>
                        <li>Caribbean citizenship — approved developments, from USD 200,000</li>
                        <li>Cyprus Permanent Residency — EUR 300,000 qualifying property</li>
                        <li>UAE Golden Visa — property from AED 750,000</li>
                    </ul>
                    <a href="/residency" className="rr-btn mt-30">Browse Property-Linked Programmes <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-6">
                    <div className="side-card">
                        <h3>Frequently Asked Questions</h3>
                        <div className="faq-accordion accordion" id="re-faqs">
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#re-faq-1" aria-expanded="true" aria-controls="re-faq-1">
                                        Can I rent out my qualifying property?
                                    </button>
                                </h5>
                                <div id="re-faq-1" className="accordion-collapse collapse show" aria-labelledby="re-faq-1" data-bs-parent="#re-faqs">
                                    <div className="accordion-body">
                                        <p>Usually yes — most programmes allow your qualifying property to be leased, and many clients earn a rental yield while the application runs. Some routes set conditions on lease terms, so we confirm this for your specific programme before purchase.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#re-faq-2" aria-expanded="false" aria-controls="re-faq-2">
                                        Must I buy new or off-plan?
                                    </button>
                                </h5>
                                <div id="re-faq-2" className="accordion-collapse collapse" aria-labelledby="re-faq-2" data-bs-parent="#re-faqs">
                                    <div className="accordion-body">
                                        <p>That depends on the country. Some programmes only accept new builds or approved developments; others accept resale after a holding period. We filter the options so you never waste time viewing property that will not qualify.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#re-faq-3" aria-expanded="false" aria-controls="re-faq-3">
                                        Can I sell the property later?
                                    </button>
                                </h5>
                                <div id="re-faq-3" className="accordion-collapse collapse" aria-labelledby="re-faq-3" data-bs-parent="#re-faqs">
                                    <div className="accordion-body">
                                        <p>Yes, but holding periods apply — commonly five to seven years — after which the property is yours to sell freely while your status is retained. The holding requirement is one of the first figures we confirm for each programme.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
