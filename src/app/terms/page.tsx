
"use client";

import React from "react";
import Link from "next/link";

export default function TermsofServicePage() {
  return (
    <main>

        <section className="page__title-area p-relative pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__title mb-10">Terms &amp; Conditions</h1>
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

                            <p>These terms govern your use of the Izzy Migration Mentors website and the information and services
                                described on it. By using this site you agree to these terms.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>1. Information only, not legal advice</h4>
                            <p>The content on this website is provided for general information about visa and residency
                                programs. It does not constitute legal advice. Immigration rules change frequently and vary
                                by jurisdiction. Always confirm current requirements with the relevant government
                                authority or a licensed professional before acting.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>2. No guarantee of approval</h4>
                            <p>Visa, residency, and citizenship applications are decided solely by the relevant government
                                authorities. Neither Izzy Migration Mentors nor any advisor guarantees a specific outcome.
                                Engagement, eligibility, and application outcomes are subject to each authority&rsquo;s
                                rules.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>3. Our services</h4>
                            <p>When you enquire through our site, we will discuss your goals and outline how we can help.
                                Any formal engagement will be set out in a separate written agreement.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>4. Use of the website</h4>
                            <ul>
                                <li>You agree not to misuse the site, attempt unauthorised access, or submit false
                                    information.</li>
                                <li>All content, branding, and materials on this site belong to Izzy Migration Mentors or its
                                    licensors.</li>
                            </ul>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>5. Limitation of liability</h4>
                            <p>To the maximum extent permitted by law, Izzy Migration Mentors is not liable for any loss arising
                                from reliance on the general information published on this website or from interruptions to
                                the site.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>6. Third-party links</h4>
                            <p>Our site may link to external websites. We are not responsible for the content or practices
                                of those sites.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>7. Changes</h4>
                            <p>We may update these terms at any time. Continued use of the site means you accept the
                                updated terms.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>8. Contact</h4>
                            <p>Questions? Email <a href="mailto:info@izzyimmigration.com">info@izzyimmigration.com</a>.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
  );
}
