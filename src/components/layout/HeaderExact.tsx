
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SearchModal } from "./SearchModal";

export function HeaderExact() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Offcanvas Mobile Menu */}
      <div className={`offcanvas__area ${isMobileOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <Link href="/" onClick={() => setIsMobileOpen(false)}>
                  <img src="/assets/imgs/logo/logo.svg" alt="Izzy Migration Mentors Limited" style={{ height: "48px", width: "auto" }} />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button
                  className="offcanvas-close-icon animation--flip"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <span className="offcanvas-m-lines">
                    <span className="offcanvas-m-line line--1"></span>
                    <span className="offcanvas-m-line line--2"></span>
                    <span className="offcanvas-m-line line--3"></span>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation List */}
            <div className="mobile-menu fix mb-30">
              <nav className="mean-nav">
                <ul className="space-y-2 py-4 text-sm font-bold text-navy-900">
                  <li><Link href="/" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
                  <li><Link href="/about" onClick={() => setIsMobileOpen(false)}>About Izzy</Link></li>
                  <li><Link href="/why-izzy" onClick={() => setIsMobileOpen(false)}>Why Choose Us</Link></li>
                  <li><Link href="/expertise" onClick={() => setIsMobileOpen(false)}>Our Expertise</Link></li>
                  <li><Link href="/citizenship" onClick={() => setIsMobileOpen(false)}>Citizenship</Link></li>
                  <li><Link href="/residency" onClick={() => setIsMobileOpen(false)}>Residency</Link></li>
                  <li><Link href="/programmes" onClick={() => setIsMobileOpen(false)}>All Programmes</Link></li>
                  <li><Link href="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="offcanvas__social">
              <h3 className="offcanvas__title mb-20">Subscribe &amp; Follow</h3>
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div className="offcanvas__btn mt-25">
              <div className="header__btn-wrap">
                <Link className="rr-btn btn-hover-white w-100 justify-content-center" href="/contact" onClick={() => setIsMobileOpen(false)}>
                  Book a Free Assessment <span><i className="fa-regular fa-angle-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isMobileOpen ? "overlay-open" : ""}`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Main Header */}
      <header>
        <div id="header-sticky" className={`header__area header-1 gray-bg ${isSticky ? "header-sticky" : ""}`}>
          <div className="header-container">
            <div className="mega__menu-wrapper p-relative">
              <div className="header__main">
                <div className="header__left">
                  <div className="header__logo">
                    <Link href="/">
                      <img src="/assets/imgs/logo/logo.svg" alt="Izzy Migration Mentors Limited" style={{ height: "48px", width: "auto" }} />
                    </Link>
                  </div>
                </div>
                <div className="header__middle">
                  <div className="mean__menu-wrapper d-none d-xl-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li className="has-dropdown">
                            <Link href="/about">About Us</Link>
                            <ul className="submenu">
                              <li><Link href="/about">About Izzy</Link></li>
                              <li><Link href="/why-izzy">Why Choose Us</Link></li>
                              <li><Link href="/expertise">Our Expertise</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link href="/expertise">Our Expertise</Link>
                            <ul className="submenu">
                              <li><Link href="/expertise">Corporate &amp; Business Structuring</Link></li>
                              <li><Link href="/expertise">Private Client &amp; Wealth Mobility</Link></li>
                              <li><Link href="/expertise">Sovereign Compliance &amp; Due Diligence</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link href="/citizenship">Citizenship</Link>
                          </li>
                          <li className="has-dropdown">
                            <Link href="/residency">Residency</Link>
                          </li>
                          <li>
                            <Link href="/programmes">All Programmes</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center mr-3 border border-gray-200 hover:bg-gold-500 hover:text-white transition-colors"
                      aria-label="Search"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <div className="header__btn-wrap d-none d-sm-inline-flex">
                      <Link href="/contact" className="rr-btn">
                        Book A Consultation <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <button
                          className="bar-icon"
                          onClick={() => setIsMobileOpen(true)}
                          aria-label="Open mobile menu"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
