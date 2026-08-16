
"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main>

        <section className="page__title-area p-relative pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__title mb-10">Privacy Policy</h1>
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

                            <p>Izzy Immigration (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
                                we collect when you use our website and how we use it.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>1. Information we collect</h4>
                            <ul>
                                <li><strong>Information you give us:</strong> name, email address, phone number, and any
                                    message you send through our contact or newsletter forms.</li>
                                <li><strong>Information collected automatically:</strong> pages viewed, browser type, and
                                    device information, used to improve our site.</li>
                            </ul>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>2. How we use your information</h4>
                            <ul>
                                <li>To respond to your enquiry and provide visa or residency guidance.</li>
                                <li>To send you updates you subscribed to. You can unsubscribe at any time.</li>
                                <li>To improve our website and services.</li>
                                <li>To comply with legal obligations.</li>
                            </ul>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>3. How we share your information</h4>
                            <p>We do not sell your personal information. We only share data with service providers who help
                                us operate (for example, our messaging and email services), and only to the extent needed.
                                If we are required by law to disclose information, we will do so in line with legal
                                obligations.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>4. Data security</h4>
                            <p>We take reasonable technical and organisational measures to protect your personal information
                                against loss, misuse, and unauthorised access.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>5. Your rights</h4>
                            <p>You may request access to, correction of, or deletion of the personal information we hold
                                about you. To do so, contact us at <a href="mailto:info@izzyimmigration.com">info@izzyimmigration.com</a>.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>6. Cookies</h4>
                            <p>Our site may use cookies and analytics tools to understand how visitors use the site. You can
                                control cookies through your browser settings.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>7. Changes to this policy</h4>
                            <p>We may update this policy from time to time. The latest version will always be published on
                                this page with the date shown above.</p>

                            <h4 style={{"color":"var(--rr-heading-primary)","marginTop":"30px"}}>8. Contact us</h4>
                            <p>Questions about this policy? Email <a href="mailto:info@izzyimmigration.com">info@izzyimmigration.com</a>.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
  );
}
