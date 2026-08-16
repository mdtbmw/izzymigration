
"use client";

import React from "react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function CitizenshipbyAncestryPage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Citizenship by Descent</span></div>
            <h1>Citizenship &amp; Residency by Descent</h1>
            <p>Your family history may already hold the key to a second passport or a lawful right to live in another country. We trace qualifying ancestry, gather the documents, and manage the entire application for you.</p>
        </div>
    </section>

    <section className="program-section">
        <div className="container">
            <div className="program-section__head">
                <span className="eyebrow">What We Do</span>
                <h2>How Ancestry-Based Routes Work</h2>
                <p>Many countries grant citizenship or residency to descendants of their nationals — sometimes through a grandparent or great-grandparent. Eligibility rules, document requirements and processing times differ by country.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-tree"></i></div>
                        <div>
                            <h3>Free Eligibility Assessment</h3>
                            <p>Tell us where your parents, grandparents or great-grandparents were born. We map your family tree against every descent-based route we manage and tell you, honestly, whether a claim is worth pursuing.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-file-lines"></i></div>
                        <div>
                            <h3>Document Sourcing &amp; Apostilles</h3>
                            <p>Birth certificates, marriage records, naturalisation papers — often decades old and across multiple countries. Our research team sources certified copies, arranges translations and handles apostilles and legalisation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-scale-balanced"></i></div>
                        <div>
                            <h3>Government Liaison &amp; Submissions</h3>
                            <p>Consular offices and civil registries rarely respond quickly to public inquiries. We manage the correspondence, respond to queries, and track your file from submission to registration.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-passport"></i></div>
                        <div>
                            <h3>Passport &amp; Settlement Support</h3>
                            <p>Once approved, we support your passport application, citizenship registration for children and the practicalities of settling — identity documents, addresses and local processes in your new country.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="program-section program-section--alt">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="program-section__head" style={{"marginBottom":"20px"}}>
                        <span className="eyebrow">The Izzy Advantage</span>
                        <h2>Why Entitlement Is Worth Checking</h2>
                    </div>
                    <ul className="req-list" style={{"gridTemplateColumns":"1fr"}}>
                        <li>No investment required — eligibility is based on family history, not money.</li>
                        <li>Citizenship can pass automatically to your children and future generations.</li>
                        <li>A second nationality opens doors in business, travel and education.</li>
                        <li>Even rejected claims are low-cost to evaluate: the assessment is free.</li>
                        <li>Documents sourced once are reusable for other routes, including investment programmes.</li>
                    </ul>
                    <div className="d-flex flex-wrap gap-3 mt-30">
                        <a href="/contact" className="rr-btn btn-light-gold">Start a Free Assessment <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="/citizenship" className="rr-btn btn-ghost-light">Explore Citizenship Programmes <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="side-card">
                        <h3>Frequently Asked Questions</h3>
                        <div className="faq-accordion accordion" id="ancestry-faqs">
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ancestry-faq-1" aria-expanded="true" aria-controls="ancestry-faq-1">
                                        How far back can ancestry claims go?
                                    </button>
                                </h5>
                                <div id="ancestry-faq-1" className="accordion-collapse collapse show" aria-labelledby="ancestry-faq-1" data-bs-parent="#ancestry-faqs">
                                    <div className="accordion-body">
                                        <p>It depends entirely on the country. Some accept parents or grandparents only; others reach back to great-grandparents and beyond. During your free assessment we establish which of your ancestors may qualify you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ancestry-faq-2" aria-expanded="false" aria-controls="ancestry-faq-2">
                                        Is this the same as citizenship by investment?
                                    </button>
                                </h5>
                                <div id="ancestry-faq-2" className="accordion-collapse collapse" aria-labelledby="ancestry-faq-2" data-bs-parent="#ancestry-faqs">
                                    <div className="accordion-body">
                                        <p>No. Descent routes are based on family history and usually require no investment at all. They are slower and more document-heavy, but they cost far less. If you do not qualify by descent, our citizenship and residency programmes cover the investment routes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ancestry-faq-3" aria-expanded="false" aria-controls="ancestry-faq-3">
                                        Can my children be included?
                                    </button>
                                </h5>
                                <div id="ancestry-faq-3" className="accordion-collapse collapse" aria-labelledby="ancestry-faq-3" data-bs-parent="#ancestry-faqs">
                                    <div className="accordion-body">
                                        <p>Yes — in most countries citizenship by descent extends to children automatically, and in some cases to grandchildren. We map the full family line during your assessment so the entire family can be covered by one application.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ancestry-faq-4" aria-expanded="false" aria-controls="ancestry-faq-4">
                                        What does the process cost?
                                    </button>
                                </h5>
                                <div id="ancestry-faq-4" className="accordion-collapse collapse" aria-labelledby="ancestry-faq-4" data-bs-parent="#ancestry-faqs">
                                    <div className="accordion-body">
                                        <p>The eligibility assessment is free and comes with our honest recommendation. If we take the file forward, you receive a fixed, transparent fee schedule covering research, document sourcing, translations, apostilles and government submissions — no surprises later.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="program-section program-section--last">
        <div className="container">
            <div className="cta-band">
                <h2>Your passport may already exist in your family tree</h2>
                <p>Tell us about your parents and grandparents — we will tell you whether any of the 56 programmes we manage, or a descent route, fits you.</p>
                <div className="cta-band__actions">
                    <a href={createWhatsAppLink({ type: "ancestry", message: "Hello Izzy Immigration, I would like to check my family tree for citizenship by ancestry and descent." })} id="cta-whatsapp" className="rr-btn btn-light-gold" target="_blank" rel="noopener"><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
                    <a href="/contact" className="rr-btn btn-ghost-light">Book a Free Assessment <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
