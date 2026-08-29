# Izzy Immigration - Routex UI Design System & Component Guidelines (AGENT.MD)

This document serves as the mandatory UI design system specification for the **Izzy Immigration** website. All future agents, subagents, and developers MUST adhere strictly to these visual tokens and native component classes to maintain 100% design consistency across all pages and features.

---

## 1. Brand Color Palette & Tokens

Always use CSS variables from `assets/css/main.css` or the exact brand hex codes:

| Token Name | Hex Code / Variable | Usage |
| :--- | :--- | :--- |
| **Brand Primary (Dark Blue)** | `#050548` / `var(--rr-background-dark-green)` | Hero background, primary headings, card headers, main text |
| **Brand Secondary (Dark Gold)** | `#b8860b` / `var(--rr-theme-primary)` | Accent highlights, secondary buttons, checkmarks, badges, hover borders |
| **Card Background** | `#ffffff` / `var(--rr-common-white)` or `#f4f5f8` / `var(--rr-gray)` | Card backgrounds (`.visa__item-2` uses gray `#f4f5f8`) |
| **Body Text** | `#555555` / `var(--rr-text-body)` | Paragraphs, list item text, secondary copy |
| **Heading Text** | `#050548` / `var(--rr-heading-primary)` | `h1` through `h6` section headings |

---

## 2. Typography Rules

- **Heading Font**: `var(--rr-ff-heading)` (Inter / Outfit / Theme Heading Font)
- **Body Font**: `var(--rr-ff-body)`
- **Heading Hierarchy**:
  - `h1`: Hero title (`font-size: 55px`, `font-weight: 700`)
  - `h2`: Section title (`font-size: 40px`, `font-weight: 700`)
  - `h4` / `h5`: Card title (`font-size: 22px`, `font-weight: 700`)
  - `h6`: Section subtitle badge (`font-size: 16px`, uppercase, tracking)

---

## 3. Native Template Card Components

NEVER create ad-hoc custom card classes with inline CSS overrides. Use the native Routex card components built into `main.css`:

### A. Visa / Residency Program Card (`.visa__item`)

```html
<div class="col-lg-4 col-md-6 mb-30">
    <div class="visa__item visa__item-2 d-flex flex-column h-100">
        <div class="visa__item-media mb-20 d-flex align-items-center justify-content-between">
            <img src="https://harveylawcorporation.com/flags/[COUNTRY_CODE].svg" alt="Country Flag" style="width: 55px; height: 38px; border-radius: 4px; object-fit: cover;">
            <span class="badge" style="background-color: var(--rr-theme-primary); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">RESIDENCY</span>
        </div>
        <div class="visa__item-content d-flex flex-column flex-grow-1">
            <h5>Program Name</h5>
            <p class="mb-2"><strong>Investment:</strong> EUR 300,000</p>
            <p class="mb-3" style="font-size: 0.85rem; color: #777;"><strong>Processing:</strong> 6-9 months</p>
            <ul class="mb-20 flex-grow-1" style="list-style: none; padding: 0;">
                <li><i class="fa-solid fa-check" style="color: var(--rr-theme-primary); margin-right: 10px;"></i> Key Feature 1</li>
                <li><i class="fa-solid fa-check" style="color: var(--rr-theme-primary); margin-right: 10px;"></i> Key Feature 2</li>
            </ul>
            <div class="visa__item-content-button mt-auto d-flex align-items-center justify-content-between">
                <span style="font-weight: 700; color: var(--rr-heading-primary);">Learn More</span>
                <a href="/program-link/"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
```

Key features of `.visa__item`:
- Native `border-radius: 20px`
- Native `box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05)`
- Circular arrow button (`.visa__item-content-button a`) with native `-40deg` rotation that rotates to `1deg` on hover!

---

### B. Case Study / Article Card (`.latest-blog__item-slide`)

```html
<div class="swiper-slide latest-blog__item-slide mb-30">
    <div class="latest-blog__item-slide-inner">
        <div class="latest-blog__item-media">
            <a href="visa.html">
                <img src="assets/imgs/blog/letest-blog/blog-card1.jpg" alt="Case Study" class="img-fluid">
            </a>
        </div>
        <div class="latest-blog__item-text">
            <div class="latest-blog__item-text-meta d-flex align-items-center mb-10">
                <span class="meta-comment" style="color: var(--rr-theme-primary); font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Approved</span>
            </div>
            <div class="latest-blog__item-text-bottom">
                <a href="visa.html"><h4>Case Study Title</h4></a>
                <p>Case study summary description...</p>
                <a href="visa.html" class="readmore d-flex align-items-center">View Case Study <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
```

---

## 4. Native Button Variants

- **Primary Button**: `<a href="..." class="rr-btn">Text <i class="fa-solid fa-arrow-right"></i></a>`
- **Secondary Button**: `<a href="..." class="rr-btn2">Text <i class="fa-solid fa-arrow-right"></i></a>`
- **Card Icon Button**: `.visa__item-content-button a` (circular icon button)

---

## 5. Layout & Container Rules

- Wrap page content in standard Bootstrap container rows: `<div class="row g-4">` or `<div class="row mb-minus-30">`.
- Section padding: Use template wrapper classes `.section-space`, `.section-space-bottom`, `.padding-space`.
- Backgrounds: Use `.gray-bg` or `.dark-green` for alternating section backgrounds.
