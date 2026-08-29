
"use client";

import React from "react";
import Link from "next/link";

export default function LegalDisclaimerPage() {
  return (
    <main>

        <section className="page__title-area p-relative pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__title mb-10">Disclaimer</h1>
                            <p>Last updated: August 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="legal-content" style={{"color":"#555","lineHeight":"1.8"}}>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"20px"}}>Independent advisor</h4>
                            <p>Izzy Migration Mentors is an independent immigration and residency advisory firm. We are not a
                                government agency and are not affiliated with any embassy, consulate, or immigration
                                authority. We do not process applications on behalf of any government.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>General information</h4>
                            <p>Program information published on this site — including investment amounts, processing times,
                                and eligibility requirements — reflects publicly available information at the time of
                                writing. These details change frequently and vary by jurisdiction. They are provided for
                                general guidance only and should be verified with the relevant government authority before
                                you rely on them.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>No guarantee of outcome</h4>
                            <p>All visa, residency, and citizenship decisions rest solely with the relevant government
                                authorities. No representation is made that any application will be approved.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>Not legal or financial advice</h4>
                            <p>Nothing on this website constitutes legal, tax, or financial advice. For decisions that may
                                affect your legal or financial position, consult a qualified professional.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>Contact</h4>
                            <p>Questions? Email <a href="mailto:info@izzyimmigration.com">info@izzyimmigration.com</a>.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
  );
}
