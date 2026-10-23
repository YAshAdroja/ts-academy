# TS Academy (Total Solution) — Official Website

> **Production-ready, fully responsive, bilingual (Gujarati + English) single-page website for Total Solution (TS Academy), Surat.**

Built with **React 18 + TypeScript + Vite**, featuring a **Repository Architecture** that allows instant switching between local frontend mock management and a future REST API backend without changing any UI components.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.0.0 or higher recommended, verified on v26.4.0)
- npm (v9.0.0 or higher)

### 1. Installation
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🎨 Design System & Responsiveness

- **Color Palette:**
  - Sky Blue (`#0284c7`, `#0369a1`): Main academic trust & branding
  - Teal (`#0d9488`): Concept growth & clarity
  - Sunny Yellow / Amber (`#f59e0b`): Toddler preschool warmth & joy
  - Coral / Rose (`#f43f5e`): Highlighting active learning
  - Soft Lavender (`#7c3aed`): Navodaya entrance achievement
  - Slate Neutrals: High contrast text and balanced backgrounds
- **Typography:**
  - Gujarati: `Noto Sans Gujarati`
  - English: `Inter`
  - Fallbacks: System UI sans-serif
- **Fully Responsive Breakpoints:**
  - Mobile Phones (320px, 375px, 414px)
  - Tablets & Small Laptops (768px, 1024px)
  - Desktop Displays (1280px, 1440px+)
- **Accessibility:**
  - Visible focus rings (`:focus-visible`)
  - Semantic HTML landmarks (`header`, `main`, `section`, `footer`, `nav`)
  - Motion reduction support via `@media (prefers-reduced-motion: reduce)`

---

## 🌐 Bilingual Support (Gujarati & English)

- **Default Language:** Gujarati (`gu`) per owner brief, with an instant toggle to English (`en`).
- **Persistence:** Selected language is stored in browser `localStorage` (`ts_academy_selected_lang`).
- **HTML Document Sync:** Dynamic update of `<html lang="gu">` / `<html lang="en">` for screen readers and SEO.
- **Data Model:** All content uses typed `LocalizedText { en: string; gu: string; }`.

---

## 🏗️ Architecture & Future Backend Switch

All components consume data via **React custom hooks** backed by the `SiteRepository` interface. **UI components never import mock files directly.**

```text
[ React UI Components ]
         │
         ▼
[ Custom Hooks (useSiteContent, usePrograms, etc.) ]
         │
         ▼
[ siteRepository (Factory Provider) ]
         │
  ┌──────┴──────────────────────────┐
  ▼                                 ▼
[ MockSiteRepository ]      [ ApiSiteRepository ]
(Local Mock Data Layer)     (Remote REST API Client)
```

### How to Toggle Between Frontend-Only Mode and Future Backend

1. In `.env` (or environment variables):
   ```dotenv
   # Use frontend mock data (Default):
   VITE_DATA_SOURCE=mock
   VITE_API_BASE_URL=

   # Switch to future backend:
   VITE_DATA_SOURCE=api
   VITE_API_BASE_URL=https://api.yourdomain.com
   ```

2. When `VITE_DATA_SOURCE=api` is selected, `ApiSiteRepository` connects to the endpoints listed below. If `VITE_API_BASE_URL` is missing or unreachable, a clear, retryable configuration alert is displayed in the UI rather than silently displaying fake data.

### Expected Backend REST API Contract

| Endpoint | Method | Expected Response Type | Notes |
| :--- | :--- | :--- | :--- |
| `/api/v1/site-content?lang={gu\|en}` | `GET` | `SiteContent` | Brand, Hero, Owner, SEO, Social links |
| `/api/v1/programs?lang={gu\|en}` | `GET` | `Program[]` | Active programs in sort order |
| `/api/v1/facilities?lang={gu\|en}` | `GET` | `Facility[]` | Active campus facilities |
| `/api/v1/faculty?lang={gu\|en}` | `GET` | `FacultyMember[]` | Active mentors & teachers |
| `/api/v1/gallery?lang={gu\|en}` | `GET` | `GalleryItem[]` | Published gallery photos |
| `/api/v1/reviews/approved?lang={gu\|en}` | `GET` | `ParentReview[]` | **Only approved reviews** (`isApproved: true`) |
| `/api/v1/branches?lang={gu\|en}` | `GET` | `Branch[]` | Branch addresses & directions URLs |
| `/api/v1/enquiry` | `POST` | `EnquiryResult` | `{ success: boolean, message: LocalizedText, mode: 'api' }` |

---

## 📝 How to Manage and Edit Content

### 1. Show or Hide Sections Centrally
Open `src/config/site-config.ts`:
```ts
export const siteConfig = {
  sectionVisibility: {
    hero: true,
    programs: true,
    aboutOwner: true,
    facilities: true,
    faculty: true,        // Set to false to hide Faculty section
    gallery: true,        // Set to false to hide Gallery section
    parentReviews: true,  // Set to false to hide Reviews section
    branches: true,
    enquiryForm: true,
  },
  // ...
};
```

### 2. Updating Academic Programs
Open `src/data/mock/programs.mock.ts`:
- Each program has `title`, `description`, `highlights`, `badge`, `sortOrder`, and `isActive`.
- Bilingual strings can be edited directly in `{ en: "...", gu: "..." }`.

### 3. Adding or Replacing Images
- Store your images in `public/images/` under the appropriate subfolder (`brand/`, `hero/`, `owner/`, `programs/`, `facilities/`, `gallery/`, `faculty/`, `branches/`).
- Update the image reference in `src/data/mock/media.mock.ts` or `src/data/mock/gallery.mock.ts`:
  ```ts
  {
    id: 'gal-new',
    src: '/images/gallery/classroom-real.jpg',
    alt: {
      en: 'Students in classroom',
      gu: 'વર્ગખંડમાં વિદ્યાર્થીઓ',
    },
    // ...
  }
  ```

### 4. Updating Owner Details (Amit Sir)
Open `src/data/mock/site.mock.ts`:
- Update `owner.displayName`, `owner.biography`, `owner.philosophy`, and replace `/images/owner/amit-sir-portrait.svg` with the official photograph.

### 5. Managing Parent Reviews
Open `src/data/mock/reviews.mock.ts`:
- Only items with `isApproved: true` are displayed on the public website.
- Demo reviews are clearly tagged with `isDemo: true` and have a visible "Demo Testimonial" tag in development.

---

## ⚠️ Pre-Launch Owner Checklist

Before publicly marketing the site, the owner should confirm and update these items:

- [ ] **Official Contact Phone & WhatsApp Number:**
  - Add to `siteContentMock.contact.phone` and `whatsapp` in `src/data/mock/site.mock.ts`. (Quick call/WhatsApp buttons will automatically appear in the enquiry section once provided).
- [ ] **Official Google Maps Pin for Branch 2 (Nana Varachha):**
  - The current link points to a nearby landmark (`Siddheshwar Jewellers`). Replace with the verified TS Academy Google Maps pin link in `src/config/site-config.ts` and set `isProvisional: false`.
- [ ] **Real Classroom & Activity Photos:**
  - Replace the SVG placeholder illustrations in `public/images/gallery/` and `public/images/owner/` with owner-approved authentic photographs.
- [ ] **Enquiry Delivery Destination:**
  - Configure a real backend endpoint or form submission handler (e.g. EmailJS, Formspree, or your custom REST API in `VITE_API_BASE_URL`).
- [ ] **Real Parent Testimonials:**
  - Replace the demo placeholder reviews in `src/data/mock/reviews.mock.ts` with authentic parent feedback.

---

## 📁 Project Directory Structure

```text
ts-academy/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── brand/          # Logos
│       ├── hero/           # Hero visual
│       ├── owner/          # Amit Sir portrait
│       ├── programs/       # Preschool, Academics, Navodaya
│       ├── facilities/     # Classrooms, Play Area, Lab, Library
│       ├── gallery/        # Classroom & event photos
│       ├── faculty/        # Faculty placeholders
│       ├── reviews/        # Parent avatars
│       └── branches/       # Branch building visuals
├── src/
│   ├── App.tsx             # Main application layout
│   ├── main.tsx            # React root mount
│   ├── vite-env.d.ts       # TypeScript environment declarations
│   ├── components/
│   │   ├── common/
│   │   │   └── AsyncStateView.tsx  # Shimmer & retry handling
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky nav & language toggle
│   │   │   └── Footer.tsx          # Branches, socials, copyright
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ProgramsSection.tsx
│   │       ├── AboutAmitSir.tsx
│   │       ├── FacilitiesSection.tsx
│   │       ├── FacultySection.tsx
│   │       ├── GallerySection.tsx
│   │       ├── ReviewsSection.tsx
│   │       ├── BranchesSection.tsx
│   │       └── ContactSection.tsx
│   ├── config/
│   │   ├── environment.ts  # VITE_DATA_SOURCE configuration
│   │   └── site-config.ts  # Section visibility & branch URLs
│   ├── content/
│   │   └── translations/
│   │       ├── en.ts       # English dictionary
│   │       ├── gu.ts       # Gujarati dictionary
│   │       └── index.ts
│   ├── data/
│   │   ├── mock/           # Central typed mock datasets
│   │   └── repositories/
│   │       └── site.repository.ts  # Mock & API repository layer
│   ├── hooks/
│   │   ├── useLanguage.tsx # Language state & localization
│   │   └── useSiteData.ts  # Typed repository hooks
│   ├── services/
│   │   └── api/
│   │       ├── api-client.ts
│   │       └── endpoints.ts
│   ├── styles/
│   │   ├── tokens.css      # Design tokens (colors, fonts, radii)
│   │   └── global.css      # Global styles, reset & utilities
│   └── types/
│       └── models.ts       # Central data models
├── .env.example
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts
```
