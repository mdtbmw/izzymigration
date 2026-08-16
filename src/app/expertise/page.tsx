
"use client";

import React from "react";
import Link from "next/link";

export default function OurExpertisePage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><a href="/about">About Us</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Our Expertise</span></div>
            <h1>Our Expertise</h1>
            <p>Six interlocking practice areas, one standard: every file prepared as though a government inspector is watching. Because one is.</p>
        </div>
    </section>

    <section className="program-section">
        <div className="container">
            <div className="program-section__head">
                <span className="eyebrow">What We Do</span>
                <h2>Practice Areas</h2>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-id-card"></i></div>
                        <div>
                            <h3>Citizenship by Investment</h3>
                            <p>Caribbean and European citizenship programmes — economic contribution, real estate and fund routes, structured for speed and certainty.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-house-chimney"></i></div>
                        <div>
                            <h3>Residency &amp; Golden Visas</h3>
                            <p>Forty-six residency routes across Europe, the Americas, Asia and the Middle East — matched to your lifestyle and investment style.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-building"></i></div>
                        <div>
                            <h3>Global Real Estate</h3>
                            <p>Qualifying property acquisition that satisfies programme requirements and performs as an investment — vetted by local counsel in every market.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-tree"></i></div>
                        <div>
                            <h3>Citizenship by Descent</h3>
                            <p>Ancestry-based claims researched and documented from first records to passport — often with no investment required at all.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-briefcase"></i></div>
                        <div>
                            <h3>Business &amp; Relocation</h3>
                            <p>Company formation, tax structuring and physical relocation — the practical layer that turns a permit into a new home base.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-file-contract"></i></div>
                        <div>
                            <h3>Due Diligence &amp; Compliance</h3>
                            <p>Source-of-funds preparation, background readiness and document integrity — built in from day one, not fixed at the last minute.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="program-section program-section--alt">
        <div className="container">
            <div className="cta-band">
                <h2>Tell us where you want to be</h2>
                <p>Whether you are exploring a first residency or a second passport, we will show you the strongest route — and the honest reasons for it.</p>
                <div className="cta-band__actions">
                    <a href="/contact" className="rr-btn btn-light-gold">Book a Free Assessment <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="/programmes" className="rr-btn btn-ghost-light">Browse All Programmes <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
