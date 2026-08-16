
"use client";

import React from "react";
import Link from "next/link";

export default function LuxuryCruiseTravelPage() {
  return (
    <main>


    <section className="page-hero">
        <div className="container">
            <div className="page-hero-breadcrumb"><a href="/">Home</a><span className="sep"><i className="fa-solid fa-angle-right"></i></span><span className="current">Luxury Cruise &amp; Travel</span></div>
            <h1>Luxury Cruise &amp; Travel</h1>
            <p>The best way to fall in love with a country is to live in it. Our curated cruise and travel arm lets you explore destinations — in absolute comfort — before you relocate.</p>
        </div>
    </section>

    <section className="program-section">
        <div className="container">
            <div className="program-section__head">
                <span className="eyebrow">Travel With Purpose</span>
                <h2>Explore Before You Move</h2>
                <p>Every relocation starts as a journey. Our travel partners design luxury cruise itineraries that double as discovery trips — so you can scout a future home in absolute comfort.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-ship"></i></div>
                        <div>
                            <h3>Luxury Cruises</h3>
                            <p>Mediterranean, Caribbean and beyond — five-star voyages that put your shortlist of countries literally on the itinerary.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-map-location-dot"></i></div>
                        <div>
                            <h3>Discovery Itineraries</h3>
                            <p>We combine ports, cities and property viewings into one journey — see your target residency location through a resident's eyes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-user-gear"></i></div>
                        <div>
                            <h3>Bespoke Arrangements</h3>
                            <p>Private charters, villa stays and ground support arranged end to end by our travel desk — one itinerary, one team.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media-card">
                        <div className="media-card__icon"><i className="fa-solid fa-compass"></i></div>
                        <div>
                            <h3>Seamless Handoff</h3>
                            <p>Enjoy the voyage; when you return, your relocation plan is already prepared by the same team that arranged the trip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="program-section program-section--last">
        <div className="container">
            <div className="cta-band">
                <h2>Set sail toward your next chapter</h2>
                <p>Tell us where you dream of living — we will design the journey that takes you there, at sea and beyond.</p>
                <div className="cta-band__actions">
                    <a href="/contact" className="rr-btn btn-light-gold">Plan My Journey <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="/why-izzy" className="rr-btn btn-ghost-light">Why Izzy Immigration <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
