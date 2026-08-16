# Izzy Immigration Mentors Limited — Official Web Platform

> Premium Sovereign Wealth Mobility, Residency & Citizenship Advisory Platform built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.18.0 or v20+ (LTS recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# -> Local server available at http://localhost:3000
```

---

## 🛠️ Production Build & Verification

```bash
# Typecheck
npm run typecheck

# Production compile (generates static pages & optimized assets)
npm run build

# Start production server
npm run start -p 3001
```

---

## 🌐 Deployment Guidelines

### 1. Vercel (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (Root Directory: `./`).
4. Build Command: `npm run build` (or `next build`).
5. Output Directory: `.next` (automatically handled).
6. Click **Deploy**.

### 2. Netlify / Cloudflare / Custom VPS
- **Build Command**: `npm run build`
- **Publish Directory**: `.next` / standalone server
- **Node Version**: `>= 18.18.0`

---

## 📁 Project Structure

```
├── public/                 # Static vector brand icons, badges, hero imagery, country flags
├── src/
│   ├── app/                # Next.js App Router (Pages, Metadata, Sitemaps, Robots)
│   │   ├── page.tsx        # Dynamic luxury landing page
│   │   ├── programmes/     # 55 Sovereign Citizenship & Residency Dossiers
│   │   ├── about/          # Institutional pedigree & advisory board
│   │   ├── compare/        # Sovereign programme comparison matrix
│   │   ├── contact/        # Private advisory booking & office network
│   │   └── ...             # Blog, Legal, Privacy, Real Estate, Ancestry
│   ├── components/         # Modular React components (Hero, Dossiers, Mega Menus)
│   ├── data/               # Program data, countries, siteConfig, brand assets
│   └── lib/                # Utilities, brand helpers, metadata generators
├── tailwind.config.ts      # Tailored sovereign luxury palette (Navy & Gold tokens)
├── next.config.ts          # Security headers & optimized Next.js configuration
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Scripts & production dependencies
```

---

## 🛡️ License & Copyright

© 2026 Izzy Immigration Mentors Limited. All Rights Reserved.  
Authorized official strategic partner of Economiq Advisory Group.
