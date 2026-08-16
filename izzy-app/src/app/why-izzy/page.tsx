
"use client";

import React from "react";
import Link from "next/link";

export default function WhyChooseUsPage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><a href="/about">About Us</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Why Choose Izzy</span></div>
            <h1>Why Izzy Immigration</h1>
            <p>We are not a form-filling agency. Izzy Immigration is a mentor-led advisory — we give you a single expert who owns your entire file, an honest recommendation and a programme that fits your life.</p>
        </div>
    </section>

    <section className="program-section">
        <div className="container">
            <div className="program-section__head">
                <span className="eyebrow">The Izzy Difference</span>
                <h2>Advice You Can Actually Trust</h2>
                <p>Anyone can sell you a golden visa. We exist to make sure the one you buy is right — and that it is approved.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-user-tie"></i></div>
                        <h3>One Mentor, One File</h3>
                        <p>Your dedicated mentor knows your family, your finances and your goals. No call centres, no hand-offs — one accountable expert from first call to passport in hand.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-scale-balanced"></i></div>
                        <h3>Honest Recommendations</h3>
                        <p>If a programme is weak for you, we say so. Our advice is structured around your jurisdiction, your timeline and your budget — never around our commission.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-file-shield"></i></div>
                        <h3>Compliance First</h3>
                        <p>Source-of-funds, due diligence and documentary integrity are handled by specialists before submission — the single biggest factor between approval and refusal.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-earth-africa"></i></div>
                        <h3>56 Programmes, One Roof</h3>
                        <p>Ten citizenship routes and forty-six residency routes across the Caribbean, Europe, the Americas, Africa, the Middle East and Asia Pacific — compared side by side for you.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-lock"></i></div>
                        <h3>Discretion, Always</h3>
                        <p>Global mobility is a private matter. Your information is held in confidence and never shared beyond what your application requires.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="benefit-card">
                        <div className="benefit-card__icon"><i className="fa-solid fa-handshake"></i></div>
                        <h3>Beyond Approval</h3>
                        <p>Passport in hand is not the finish line. We stay with you through settlement, renewal, family additions and the next stage of your journey.</p>
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
                        <span className="eyebrow">How We Work</span>
                        <h2>From First Call to Approval</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-sm-6">
                            <div className="step-card">
                                <div className="step-card__num">01</div>
                                <h3>Free Assessment</h3>
                                <p>We map your goals, budget and timeline against every qualifying programme.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="step-card">
                                <div className="step-card__num">02</div>
                                <h3>Strategy &amp; Plan</h3>
                                <p>You receive a written recommendation with costs, timeline and risks — no pressure.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="step-card">
                                <div className="step-card__num">03</div>
                                <h3>Documentation</h3>
                                <p>Our team gathers, translates, notarises and apostilles every document.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="step-card">
                                <div className="step-card__num">04</div>
                                <h3>Submission &amp; Approval</h3>
                                <p>We manage the submission, respond to the government and track your file to approval.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cta-band">
                        <h2>Experience the difference</h2>
                        <p>Start with a free, no-obligation assessment. You will know your options within one working day.</p>
                        <div className="cta-band__actions">
                            <a href="/contact" className="rr-btn btn-light-gold">Book a Free Assessment <i className="fa-solid fa-arrow-right"></i></a>
                            <a href="#" id="cta-whatsapp" className="rr-btn btn-ghost-light"><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
