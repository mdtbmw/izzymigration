
"use client";

import React from "react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main>

    
    <div className="breadcrumb__area dark-green breadcrumb-space overflow-hidden custom-width position-relative z-1" data-background="/assets/imgs/breadcrumb/breadcrumb.png">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12">
                    <div className="breadcrumb__content">
                        <div className="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                            <h1 className="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">About Us</h1>
                        </div>
                        <div className="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".4s">
                            <nav>
                                <ul>
                                    <li><span><a href="/">Home</a></span></li>
                                    <li className="active"><span>About Us</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/*  Who We Are  */}
    <section className="section-space position-relative overflow-hidden">
        <div className="choose-us__area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="choose-us__media">
                            <div className="choose-us__media-thumb">
                                <div className="choose-us__media-thumb-img">
                                    <div className="choose-us__media-thumb-img-green-border wow fadeInLeft animated" data-wow-delay=".2s"></div>
                                    <div className="choose-us__media-thumb-img-img wow fadeInLeft animated" data-wow-delay=".2s">
                                        <img src="/assets/imgs/choose-us/choose-us-left-img.png" alt="Izzy Immigration advisory team" />
                                    </div>
                                </div>
                                <div className="choose-us__media-thumb-circle spin">
                                    <img src="/assets/imgs/choose-us/choose-us-circle-img.png" alt="" />
                                </div>
                            </div>
                            <div className="choose-us__media-img">
                                <div className="choose-us__text wow fadeInLeft animated" data-wow-delay=".4s">
                                    <h3 className="counter__item-title"><span className="odometer" data-count="25">0</span></h3>
                                    <p>Years Of <br /> Experience</p>
                                </div>
                                <div className="choose-us__media-img-pictute wow fadeInLeft animated" data-wow-delay=".5s">
                                    <img src="/assets/imgs/choose-us/choose-us-right-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="choose-us__content">
                            <div className="section__title-wrapper mb-20">
                                <h6 className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".6s">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3754_90)"><path d="M19.299 2.66986C19.2609 2.59008 19.1926 2.52868 19.1093 2.49911L12.195 0.0581985C12.0215 -0.00317634 11.831 0.0879901 11.7697 0.26149L10.199 4.70581H9.51204V3.57248C9.51202 3.41941 9.47686 3.26838 9.40926 3.13104C9.34166 2.9937 9.24343 2.87372 9.12214 2.78033C9.00085 2.68695 8.85974 2.62266 8.70968 2.59242C8.55962 2.56217 8.40462 2.56679 8.25663 2.6059L0.24744 4.7169V4.7229C0.176847 4.74064 0.114146 4.78133 0.0691834 4.83857C0.0242205 4.89581 -0.000457842 4.96636 -0.000976562 5.03915L-0.000976562 19.0391C-0.000976562 19.5914 0.446773 20.0391 0.999021 20.0391H10.3323C10.8846 20.0391 11.3323 19.5914 11.3323 19.0391V16.0145L14.0057 16.9582C14.1793 17.0194 14.3697 16.9285 14.431 16.7548L19.3133 2.92457C19.3278 2.88326 19.334 2.83949 19.3315 2.79578C19.329 2.75208 19.318 2.70928 19.2989 2.66986H19.299Z" fill="#050548"/><path d="M16.5429 5.12938L16.7648 4.50063L17.3364 4.7023L17.1145 5.33105L16.5429 5.12938ZM11.971 3.51526L12.193 2.88672L12.7644 3.08851L12.5424 3.71709L11.971 3.51526ZM5.51204 6.707C3.67104 6.707 2.17871 8.19933 2.17871 10.0403C2.17871 11.8813 3.67104 13.3737 5.51204 13.3737C7.35303 13.3737 8.84536 11.8813 8.84536 10.0403C8.84341 8.20033 7.3522 6.70909 5.51204 6.707Z" fill="#050548"/></g><defs><clipPath id="clip0_3754_90"><rect width="20" height="20" fill="white" transform="translate(-0.000976562 0.0390625)"/></clipPath></defs></svg>
                                    Who We Are
                                </h6>
                                <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".7s">A Whole New World.<br />Your Gateway To Global Mobility.</h2>
                            </div>
                            <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay="1s"><strong>Global Mobility | Residency &amp; Citizenship Solutions | International Real Estate | Luxury Cruise Experiences.</strong></p>
                            <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay="1.1s">We are a premier international consulting and advisory firm dedicated to empowering individuals, families, entrepreneurs, and corporate clients with bespoke solutions in investment immigration, including Citizenship and Residency by Investment (CBI &amp; RBI), global real estate, cruise vacations experiences, luxury lifestyles, and strategic advisory services. With a client-centric approach and an extensive international network, we deliver tailored solutions that unlock global mobility, premium lifestyle access, and high-value investment opportunities across leading international markets, while maintaining the highest standards of professionalism, integrity, and confidentiality.</p>
                            <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay="1.2s">Our expertise is strongly focused on investment immigration, global property markets, and curated lifestyle experiences, enabling us to provide integrated solutions that meet the evolving needs of today's global citizens, investors, and high-net-worth individuals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Our Services  */}
    <section className="section-space gray-bg overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section__title-wrapper text-center mb-60">
                        <h6 className="section__title-wrapper-center-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">What We Do</h6>
                        <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Our Services</h2>
                    </div>
                </div>
            </div>
            <div className="row mb-minus-30">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay=".2s">
                        <div className="service__item-icon">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.1836 3.20312H1.81641C1.33484 3.20368 0.873151 3.39523 0.53263 3.73575C0.192108 4.07628 0.00055827 4.53796 0 5.01953L0 26.4634C6.2096e-05 26.5722 0.0432948 26.6765 0.120201 26.7534C0.197106 26.8303 0.301395 26.8735 0.410156 26.8736H29.5898C29.6986 26.8735 29.8029 26.8303 29.8798 26.7534C29.9567 26.6765 29.9999 26.5722 30 26.4634V5.01953C29.9994 4.53796 29.8079 4.07628 29.4674 3.73575C29.1269 3.39523 28.6652 3.20368 28.1836 3.20312ZM0.820312 5.01953C0.820623 4.75545 0.925668 4.50227 1.1124 4.31553C1.29914 4.12879 1.55232 4.02375 1.81641 4.02344H28.1836C28.4477 4.02375 28.7009 4.12879 28.8876 4.31553C29.0743 4.50227 29.1794 4.75545 29.1797 5.01953V8.74305H0.820312V5.01953ZM29.1797 26.0533H0.820312V9.56336H29.1797V26.0533Z" fill="white"/><path d="M27.7147 5.07812H9.78809C9.67931 5.07812 9.57498 5.12134 9.49806 5.19826C9.42114 5.27518 9.37793 5.3795 9.37793 5.48828V7.27797C9.37793 7.38675 9.42114 7.49107 9.49806 7.56799C9.57498 7.64491 9.67931 7.68813 9.78809 7.68813H27.7147C27.8235 7.68806 27.9278 7.64483 28.0047 7.56792C28.0816 7.49102 28.1248 7.38673 28.1249 7.27797V5.48828C28.1248 5.37952 28.0816 5.27523 28.0047 5.19833C27.9278 5.12142 27.8235 5.07819 27.7147 5.07812ZM27.3046 6.86781H10.1982V5.89844H27.3046V6.86781Z" fill="white"/><path d="M4.16016 5.07812H2.28516C2.1764 5.07819 2.07211 5.12142 1.9952 5.19833C1.91829 5.27523 1.87506 5.37952 1.875 5.48828V7.27797C1.87506 7.38673 1.91829 7.49102 1.9952 7.56792C2.07211 7.64483 2.1764 7.68806 2.28516 7.68813H4.16016C4.26892 7.68806 4.37321 7.64483 4.45011 7.56792C4.52702 7.49102 4.57025 7.38673 4.57031 7.27797V5.48828C4.57025 5.37952 4.52702 5.27523 4.45011 5.19833C4.37321 5.12142 4.26892 5.07819 4.16016 5.07812ZM3.75 6.86781H2.69531V5.89844H3.75V6.86781Z" fill="white"/><path d="M7.91113 5.07812H6.03613C5.92737 5.07819 5.82308 5.12142 5.74618 5.19833C5.66927 5.27523 5.62604 5.37952 5.62598 5.48828V7.27797C5.62604 7.38673 5.66927 7.49102 5.74618 7.56792C5.82308 7.64483 5.92737 7.68806 6.03613 7.68813H7.91113C8.01991 7.68813 8.12424 7.64491 8.20116 7.56799C8.27808 7.49107 8.32129 7.38675 8.32129 7.27797V5.48828C8.32129 5.3795 8.27808 5.27518 8.20116 5.19826C8.12424 5.12134 8.01991 5.07812 7.91113 5.07812ZM7.50098 6.86781H6.44629V5.89844H7.50098V6.86781Z" fill="white"/><path d="M15.0001 24.1608C16.256 24.1608 17.4837 23.7885 18.528 23.0907C19.5722 22.393 20.3862 21.4013 20.8668 20.241C21.3475 19.0807 21.4732 17.804 21.2283 16.5722C20.9833 15.3404 20.3785 14.2089 19.4905 13.3209C18.6024 12.4328 17.471 11.828 16.2392 11.583C15.0074 11.3379 13.7307 11.4637 12.5704 11.9443C11.41 12.4249 10.4183 13.2388 9.72056 14.283C9.02281 15.3273 8.65039 16.555 8.65039 17.8109C8.65225 19.4944 9.32182 21.1084 10.5122 22.2988C11.7026 23.4892 13.3166 24.1589 15.0001 24.1608ZM15.0001 12.2815C16.0938 12.2814 17.1629 12.6057 18.0723 13.2133C18.9816 13.8209 19.6904 14.6845 20.109 15.6949C20.5275 16.7053 20.637 17.8172 20.4237 18.8898C20.2103 19.9625 19.6837 20.9478 18.9103 21.7211C18.137 22.4945 17.1517 23.0211 16.079 23.2345C15.0064 23.4478 13.8945 23.3383 12.8841 22.9197C11.8737 22.5012 11.0101 21.7924 10.4025 20.883C9.79493 19.9737 9.47066 18.9045 9.4707 17.8109C9.47238 16.3449 10.0555 14.9395 11.0921 13.9029C12.1287 12.8663 13.5341 12.2832 15.0001 12.2815Z" fill="white"/></svg>
                        </div>
                        <div className="service__item-content">
                            <h4>Strategic Advisory &amp; Consulting</h4>
                            <p>We provide expert advisory services to individuals and families seeking to enhance their global lifestyle, mobility, and investment positioning. Our guidance covers global mobility solutions, relocation strategies, lifestyle planning, market entry insights, and long-term wealth and mobility structuring, enabling clients to make confident, informed decisions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay=".3s">
                        <div className="service__item-icon">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67969 20.0977C6.67969 24.3516 10.125 27.8672 14.4492 27.8672C18.7383 27.8672 22.2187 24.3867 22.2187 20.0977C22.2187 15.8789 18.8086 12.3281 14.4492 12.3281C10.1953 12.3281 6.67969 15.8086 6.67969 20.0977Z" fill="white"/><path d="M30.4805 14.332L32.625 13.4883V14.543L31.2891 16.1602C31.1836 16.2656 31.1484 16.4062 31.1484 16.5469V18.0586C31.1484 18.5156 31.6406 18.832 32.0625 18.5859L34.418 17.2852C35.3672 16.7578 35.9648 15.7383 35.9648 14.6484V6.91406C35.9648 6.5625 35.6836 6.31641 35.3672 6.31641H34.418C33.4336 6.31641 32.5898 7.125 32.5898 8.14453V10.043L30.5859 11.2734C29.9883 11.625 29.6367 12.293 29.6367 12.9961V13.7695C29.6367 14.1914 30.0937 14.5078 30.4805 14.332Z" fill="white"/><path d="M44.7891 13.208C31.3945 -0.186523 36.0351 4.4541 35.0156 3.43457C34.7695 3.18848 34.3828 3.18848 34.1367 3.43457L28.1602 9.44629C27.4219 8.3916 26.2266 7.79395 24.9609 7.79395H24.3984V3.8916C24.3984 3.50488 24.0469 3.22363 23.6602 3.29395L0.527344 7.79395C0.246094 7.86426 0.0351562 8.11035 0.0351562 8.3916V41.2627C0.0351562 41.6143 0.316406 41.8604 0.632812 41.8604H28.2305C28.582 41.8604 28.8281 41.5791 28.8281 41.2627V30.0127L44.7539 14.0869C45.0351 13.8408 45.0351 13.4541 44.7891 13.208ZM28.7227 10.6064L34.5937 4.73535L41.7656 11.9072C41.0977 12.5752 30.3047 23.3682 28.8633 24.8096V11.6963C28.8633 11.3096 28.8281 10.958 28.7227 10.6064ZM23.168 4.62988V7.75879H7.03125L23.168 4.62988ZM1.26562 40.6299V8.98926H24.9609C26.4375 8.98926 27.6328 10.1846 27.6328 11.6611V40.5947H1.26562V40.6299ZM28.8633 28.2549V26.5674L42.6445 12.7861L43.4883 13.6299L28.8633 28.2549Z" fill="white"/></svg>
                        </div>
                        <div className="service__item-content">
                            <h4>Investment Immigration</h4>
                            <p>We specialize in Citizenship by Investment (CBI) and Residency by Investment (RBI) programs across reputable jurisdictions worldwide, including the Caribbean, Europe, Asia-Pacific, the Americas, and other regions worldwide. From tailored consultation to full application management, our advisors ensure a seamless, compliant, and discreet process, helping clients secure enhanced global mobility, lifestyle freedom, and access to new international opportunities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay=".4s">
                        <div className="service__item-icon">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.1602 9.00391C38.8477 9.00391 40.2539 7.63281 40.2539 5.91016C40.2539 4.1875 38.8477 2.85156 37.1602 2.85156C35.4727 2.85156 34.0664 4.22266 34.0664 5.94531C34.0664 7.63281 35.4375 9.00391 37.1602 9.00391ZM37.1602 4.08203C38.1797 4.08203 39.0234 4.92578 39.0234 5.94531C39.0234 6.96484 38.1797 7.80859 37.1602 7.80859C36.1406 7.80859 35.2969 6.96484 35.2969 5.94531C35.2969 4.92578 36.1055 4.08203 37.1602 4.08203Z" fill="white"/><path d="M40.8517 16.1406C40.2892 14.9453 39.6212 13.7852 38.8478 12.7305C40.5353 11.6055 43.0314 9.39062 43.0314 5.94531C43.0314 2.67578 40.3946 0.0742188 37.1603 0.0742188C33.9259 0.0742188 31.254 2.67578 31.254 5.94531V6.33203C30.797 6.12109 30.3399 5.91016 29.8829 5.69922C16.6642 0.390625 2.03916 9.98828 1.96885 24.5781C1.9337 35.8281 11.004 44.9688 22.254 45.0039C33.504 45.0391 42.6446 35.9688 42.6798 24.7188C42.6798 24.6484 42.6798 24.6133 42.6798 24.543C42.6798 21.6602 42.047 18.7773 40.8517 16.1406ZM37.1603 1.26953C39.7267 1.26953 41.8009 3.34375 41.836 5.94531C41.836 9.63672 38.1798 11.8164 37.1603 12.3086C36.1759 11.7813 32.4845 9.63672 32.4845 5.94531C32.4845 3.34375 34.5587 1.26953 37.1603 1.26953ZM36.879 13.5742C37.0548 13.6445 37.2306 13.6445 37.3712 13.5742C37.4064 13.5742 37.547 13.5039 37.7579 13.3633C38.3204 14.1367 38.8126 14.9453 39.2696 15.7891H35.6134L33.1524 13.3281C33.0118 13.1875 32.8009 13.1172 32.5899 13.1523L25.3478 14.7695C25.0665 14.8398 24.8556 15.0859 24.8556 15.3672V16.8438C24.8556 17.1602 25.0665 17.4062 25.3829 17.4414L30.3751 18.2148L31.6056 20.6055C31.6759 20.7461 31.8165 20.8867 31.9923 20.9219L35.1564 21.8008V23.5938L33.2579 25.5625C33.1524 25.668 33.0821 25.8438 33.0821 25.9844V28.9727L29.6017 35.0547H27.6681V33.1211C27.6681 32.9453 27.5978 32.7695 27.4571 32.6641L24.7853 30.2383V27.4258C24.7853 27.1797 24.6095 26.9336 24.3985 26.8633L18.9142 24.8594V20.2891L22.5001 16.4219C22.7462 16.1758 22.711 15.7891 22.4649 15.543L22.4298 15.5078L19.1603 12.9766L21.8321 9.17969H27.3165C27.4923 9.17969 27.6329 9.10938 27.7384 9.00391L29.7774 6.96484C30.3399 7.21094 30.9376 7.49219 31.5001 7.80859C32.6251 11.6055 36.7032 13.4688 36.879 13.5742Z" fill="white"/><path d="M10.582 20.6055C8.89453 20.6055 7.48828 21.9766 7.48828 23.6992C7.48828 25.3867 8.85938 26.793 10.582 26.793C12.3047 26.793 13.6758 25.4219 13.6758 23.6992C13.6406 22.0117 12.2695 20.6055 10.582 20.6055ZM10.582 25.5625C9.5625 25.5625 8.71875 24.7188 8.71875 23.6992C8.71875 22.6797 9.5625 21.8359 10.582 21.8359C11.6016 21.8359 12.4453 22.6797 12.4453 23.6992C12.4453 24.7188 11.6016 25.5625 10.582 25.5625Z" fill="white"/></svg>
                        </div>
                        <div className="service__item-content">
                            <h4>Global Real Estate Investment</h4>
                            <p>We offer access to premium real estate opportunities in some of the world's most sought-after destinations, e.g. United States, Canada, UK, UAE, Panama, Europe etc. From luxury residential properties and second homes to high-yield commercial and investment assets, we provide end-to-end advisory services designed to optimize value, lifestyle benefits, and long-term returns.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay=".5s">
                        <div className="service__item-icon">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0ZM22.5 41.25C12.1484 41.25 3.75 32.8516 3.75 22.5C3.75 12.1484 12.1484 3.75 22.5 3.75C32.8516 3.75 41.25 12.1484 41.25 22.5C41.25 32.8516 32.8516 41.25 22.5 41.25Z" fill="white"/><path d="M30 15H15C14.1716 15 13.5 15.6716 13.5 16.5V31.5C13.5 32.3284 14.1716 33 15 33H30C30.8284 33 31.5 32.3284 31.5 31.5V16.5C31.5 15.6716 30.8284 15 30 15ZM16.5 18H28.5V30H16.5V18Z" fill="white"/><path d="M20.25 21.75H24.75V23.5H20.25V21.75ZM20.25 25.5H24.75V27.25H20.25V25.5Z" fill="white"/></svg>
                        </div>
                        <div className="service__item-content">
                            <h4>Luxury Cruise &amp; Travel Experiences</h4>
                            <p>We curate exceptional cruise journeys and bespoke travel experiences for discerning clients. From ultra-luxury cruise vacations and private itineraries to group and corporate travel arrangements, we design seamless, high-end experiences that combine comfort, exclusivity, and unforgettable destinations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Our Commitment  */}
    <section className="section-space position-relative overflow-hidden">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    <div className="choose-us__content">
                        <div className="section__title-wrapper mb-20">
                            <h6 className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3754_90)"><path d="M19.299 2.66986C19.2609 2.59008 19.1926 2.52868 19.1093 2.49911L12.195 0.0581985C12.0215 -0.00317634 11.831 0.0879901 11.7697 0.26149L10.199 4.70581H9.51204V3.57248C9.51202 3.41941 9.47686 3.26838 9.40926 3.13104C9.34166 2.9937 9.24343 2.87372 9.12214 2.78033C9.00085 2.68695 8.85974 2.62266 8.70968 2.59242C8.55962 2.56217 8.40462 2.56679 8.25663 2.6059L0.24744 4.7169V4.7229C0.176847 4.74064 0.114146 4.78133 0.0691834 4.83857C0.0242205 4.89581 -0.000457842 4.96636 -0.000976562 5.03915L-0.000976562 19.0391C-0.000976562 19.5914 0.446773 20.0391 0.999021 20.0391H10.3323C10.8846 20.0391 11.3323 19.5914 11.3323 19.0391V16.0145L14.0057 16.9582C14.1793 17.0194 14.3697 16.9285 14.431 16.7548L19.3133 2.92457C19.3278 2.88326 19.334 2.83949 19.3315 2.79578C19.329 2.75208 19.318 2.70928 19.2989 2.66986H19.299Z" fill="#050548"/><path d="M16.5429 5.12938L16.7648 4.50063L17.3364 4.7023L17.1145 5.33105L16.5429 5.12938ZM11.971 3.51526L12.193 2.88672L12.7644 3.08851L12.5424 3.71709L11.971 3.51526ZM5.51204 6.707C3.67104 6.707 2.17871 8.19933 2.17871 10.0403C2.17871 11.8813 3.67104 13.3737 5.51204 13.3737C7.35303 13.3737 8.84536 11.8813 8.84536 10.0403C8.84341 8.20033 7.3522 6.70909 5.51204 6.707Z" fill="#050548"/></g><defs><clipPath id="clip0_3754_90b"><rect width="20" height="20" fill="white" transform="translate(-0.000976562 0.0390625)"/></clipPath></defs></svg>
                                Our Commitment
                            </h6>
                            <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Built On Trust, Excellence &amp; Measurable Outcomes</h2>
                        </div>
                        <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay=".4s">Our mission is to build lasting relationships founded on trust, excellence, and measurable outcomes. By combining global expertise in investment immigration, real estate, and lifestyle advisory with highly personalized service, we help our clients expand their global access, elevate their lifestyles, and secure meaningful investment opportunities.</p>
                        <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay=".5s">Whether you are seeking investment immigration solutions, Residency and Golden Visa options in Europe, premium global real estate opportunities, curated luxury cruise experiences, or strategic lifestyle advisory, we are your trusted partner in achieving a truly global way of life.</p>
                        <div className="choose-us__button mt-40">
                            <div className="choose-us__button-btn wow fadeInLeft animated" data-wow-delay=".6s">
                                <a href="/contact">Book a Free Assessment <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="choose-us__button-text wow fadeInLeft animated" data-wow-delay=".7s">
                                <div className="choose-us__button-text-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="choose-us__button-text-number">
                                    <h6>Need help?</h6>
                                    <a href="tel:+2347067203694">0706 720 3694</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="choose-us__media">
                        <div className="choose-us__media-thumb">
                            <div className="choose-us__media-thumb-img">
                                <div className="choose-us__media-thumb-img-green-border wow fadeInLeft animated" data-wow-delay=".2s"></div>
                                <div className="choose-us__media-thumb-img-img wow fadeInLeft animated" data-wow-delay=".2s">
                                    <img src="/assets/imgs/faq/faq-info-img.png" alt="Izzy Immigration commitment" />
                                </div>
                            </div>
                            <div className="choose-us__media-thumb-circle spin">
                                <img src="/assets/imgs/choose-us/choose-us-circle-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* process-section */}
    <section className="process__area border-1px section-space custom-width p-relative overflow-hidden z-1">
        <div className="process__bg-img" data-background="/assets/imgs/about/process/process-bg.png"></div>
        <div className="container">
            <div className="row">
                <div className="section__title-wrapper text-center mb-60">
                    <h6 className="section__title-wrapper-center-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">Process Overview</h6>
                    <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">From First Call <br /> to Approved Application</h2>
                </div>
            </div>
            <div className="row mb-minus-30">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="process__item mb-30 wow fadeInLeft animated" data-wow-delay=".4s">
                        <span className="process__item-number">01</span>
                        <h5 className="mb-20 mt-10">Free Eligibility Assessment</h5>
                        <p>Share your goals, budget and circumstances. We match you against every residency and citizenship route that genuinely qualifies — and tell you plainly which ones do not.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="process__item process__item-2 mb-30 wow fadeInLeft animated" data-wow-delay=".5s">
                        <span className="process__item-number">02</span>
                        <h5 className="mb-20 mt-10">Strategy &amp; Document Preparation</h5>
                        <p>We map the fastest, most secure route for your profile, then build your file with certified translations, apostilles, source-of-funds evidence and professional references — exactly what the authority expects.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="process__item mb-30 wow fadeInLeft animated" data-wow-delay=".6s">
                        <span className="process__item-number">03</span>
                        <h5 className="mb-20 mt-10">Submission, Approval &amp; Beyond</h5>
                        <p>We submit, track and advocate for your application through every review stage, and support your relocation and settlement once approval arrives.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Counter  */}
    <section className="section-space counter position-relative overflow-hidden">
        <div className="faq__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="row counter__bg mt-30 mb-minus-20">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="counter__item mb-20">
                                    <h3 className="counter__item-title"><span className="odometer" data-count="3000">0</span>+</h3>
                                    <p>Successful applications</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="counter__item mb-20">
                                    <h3 className="counter__item-title"><span className="odometer" data-count="46">0</span>+</h3>
                                    <p>Residency &amp; citizenship programmes</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="counter__item mb-2">
                                    <h3 className="counter__item-title"><span className="odometer" data-count="30">0</span>+</h3>
                                    <p>Countries covered</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="counter__item mb-20">
                                    <h3 className="counter__item-title"><span className="odometer" data-count="25">0</span>+</h3>
                                    <p>Years of combined experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Trust strip  */}
    <section className="main-brand__area section-space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="text-center" style={{"margin":"0","fontSize":"1.05rem","fontWeight":"600","color":"var(--rr-heading-primary)"}}>Global Mobility | Residency &amp; Citizenship Solutions | International Real Estate | Luxury Cruise Experiences.</p>
                </div>
            </div>
        </div>
    </section>
    {/*  Trust strip end  */}

    {/* contact-section */}
    <section className="contact-us__area border bg-gray section-space-top bottom custom-width overflow-hidden">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="contact-us__widget mb-30" data-tilt>
                        <img src="/assets/imgs/concact/contact-left-img.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-us__title-wrapper">
                        <div className="section__title-wrapper mb-40">
                            <h6 className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">Contact Information</h6>
                            <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">Ready to Start Your Application?</h2>
                        </div>
                        <div className="contact-us__form-wrapper white-bg">
                            <form className="contact-us__form" id="contact-us__form" method="POST" action="/api/lead">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="contact-us__input wow fadeInLeft animated" data-wow-delay=".4s">
                                            <span>Your Name</span>
                                            <input name="name" id="name" type="text" placeholder="Your Name" required />
                                            <div className="icon"><i className="fa-solid fa-user"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="contact-us__input wow fadeInLeft animated" data-wow-delay=".5s">
                                            <span>Your Email</span>
                                            <input name="email" id="email" type="email" placeholder="Your Email" required />
                                            <div className="icon icon-2"><i className="fa-solid fa-paper-plane"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="contact-us__input wow fadeInLeft animated" data-wow-delay=".6s">
                                            <span>Your Phone</span>
                                            <input name="phone" id="phone" type="tel" placeholder="Your Phone" />
                                            <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="contact-us__input wow fadeInLeft animated" data-wow-delay=".7s">
                                            <span>Subject</span>
                                            <input name="subject" id="subject" type="text" placeholder="I need help with..." />
                                            <div className="icon icon-2"><i className="fa-solid fa-tag"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-us__textarea wow fadeInLeft animated" data-wow-delay=".8s">
                                            <span>Message</span>
                                            <textarea name="message" id="message" cols={30} rows={6} placeholder="Tell us about your visa or residency goal..." required></textarea>
                                            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="website" className="d-none" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                                        <button type="submit" className="contact-btn mt-30 wow fadeInLeft animated" data-wow-delay=".9s">Send Message</button>
                                        <div className="ajax-response mt-15"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </main>
  );
}
