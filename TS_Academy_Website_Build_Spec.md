# TS Academy — Complete Website Build Specification

> **Purpose:** Build a polished, production-ready, single-page website for **Total Solution (TS Academy)** in Surat, Gujarat. Use this document as the complete implementation brief. Follow it end-to-end without requiring the owner to make routine design or coding decisions. Where business information is not provided, keep a clearly identified editable placeholder rather than inventing facts.

## 1. Project outcome

Create a responsive, colorful, friendly, bilingual (Gujarati + English) website for a local education business serving children from nursery through Standard 9, plus special entrance-preparation batches.

**Brand names to represent**
- **Total Solution** — umbrella/business name
- **TS Academy** — academic classes for Standards 1–9
- **TS Jawahar Navodaya** — Jawahar Navodaya entrance preparation
- **TS Preschool** — preschool, nursery and play-area experience

**Primary goals**
1. Help parents understand the programs and facilities quickly.
2. Build trust through the owner/teacher introduction, faculty, learning culture and gallery.
3. Make it easy to call, message, find either branch, or enquire about admission.
4. Support Gujarati and English throughout the page.
5. Work well on phones, tablets and desktops.

## 2. Required technology and delivery

Use the existing project stack if one already exists. If starting from an empty folder, use:
- React + TypeScript + Vite
- CSS modules or a well-organized global CSS design system
- React Router is unnecessary for this one-page site
- Lucide icons (or equivalent lightweight icons)
- Google Maps links for directions; use embedded maps only when a reliable embed URL is available
- Local static assets for logos and gallery images

Keep the app simple, maintainable and easy to run. Do not add a backend, database, authentication, paid APIs or unnecessary dependencies.

**Expected final delivery**
- Complete runnable source code
- `README.md` with exact installation and run instructions
- `.env.example` only if environment variables are genuinely needed
- Responsive and accessible UI
- No dead buttons, fake testimonials, fake contact details, fabricated statistics, or unfinished sections
- A clear list of business details that still need to be supplied, if any

## 3. Brand and visual direction

Create a cheerful, trustworthy education brand that feels appropriate to both preschool children and parents of school-age students.

### Visual style
- Bright but balanced palette: sky blue, teal, sunny yellow, coral/orange, soft lavender and white.
- Use a clean readable typeface with Gujarati-script support, such as Noto Sans Gujarati paired with a compatible Latin font.
- Rounded cards, soft shadows, generous whitespace and friendly illustrations.
- Use small educational visual motifs: numbers, alphabet blocks, stars, pencils, books, shapes, rulers, puzzles and simple mathematics symbols.
- Use diverse, age-appropriate child/learning illustrations. Avoid clutter, overly childish styling in the Standard 1–9 and Navodaya sections, or excessive animation.
- Use restrained motion only: gentle entrance transitions, hover feedback and small decorative movement. Respect `prefers-reduced-motion`.
- Do not use copyrighted photos or random images implying they are actual TS Academy students or staff. Use owner-supplied photos where available; otherwise use clearly generic illustrations/placeholders until real photos are added.

### Logo
If no logo asset is supplied, create a simple text-based TS Academy mark with a small book/star motif. Keep the brand text editable and do not pretend it is the official existing logo.

## 4. Single-page structure

Build the page in this order. Header links should smoothly scroll to the matching section and work on mobile.

### A. Header / navigation
- Brand mark: Total Solution / TS Academy
- Navigation: Home, Programs, About Amit Sir, Facilities, Gallery, Branches, Contact
- Language toggle: ગુજરાતી | English
- Primary CTA: “Admission Enquiry” / “પ્રવેશ માટે પૂછપરછ”
- Mobile menu with accessible open/close behavior
- Sticky header is acceptable, but must not cover section headings when scrolling

### B. Hero / home
Use a lively hero with a clear headline, short supporting copy, two CTAs and an education-themed illustration.

**English copy draft**
- Eyebrow: `LEARN • GROW • SHINE`
- Heading: `A happy place to learn, explore and achieve.`
- Supporting text: `From early childhood learning to school academics and competitive entrance preparation, TS helps children build confidence, strong foundations and a love of learning.`
- CTA 1: `Explore Our Programs`
- CTA 2: `Enquire for Admission`

**Gujarati copy draft**
- Eyebrow: `શીખો • આગળ વધો • ચમકો`
- Heading: `શીખવા, શોધવા અને સફળતા મેળવવા માટેનું આનંદમય સ્થળ.`
- Supporting text: `બાળકોના પ્રારંભિક શિક્ષણથી લઈને શાળાના અભ્યાસ અને પ્રવેશ પરીક્ષાની તૈયારી સુધી, TS બાળકોમાં આત્મવિશ્વાસ, મજબૂત પાયો અને શીખવાની ઉત્સુકતા વિકસાવવામાં મદદ કરે છે.`
- CTA 1: `અમારા અભ્યાસક્રમો જુઓ`
- CTA 2: `પ્રવેશ માટે પૂછપરછ કરો`

Avoid unsupported claims such as “No. 1”, “100% results”, or specific student counts.

### C. Programs / our services
Use three prominent cards with distinct but consistent illustrations.

1. **TS Preschool**
   - Nursery and early-childhood learning
   - Play-based activities and age-appropriate foundational skills
   - Mention the play area as a provided service based on the owner's description
   - CTA: `Ask About Preschool`

2. **TS Academy — Standards 1–9**
   - Academic support for Standards 1 through 9
   - Emphasize concept clarity, practice, confidence and regular learning habits
   - Do not claim specific boards, mediums, subjects or class timings unless confirmed
   - CTA: `Ask About Classes`

3. **TS Jawahar Navodaya**
   - Special preparation batch for Jawahar Navodaya entrance
   - Explain that the batch focuses on structured preparation and practice without promising selection or results
   - CTA: `Ask About Navodaya Batch`

Add a small note that parents can contact the academy for current batch availability, timings, fees and admission requirements.

### D. About the owner / Amit Sir
Use a warm introduction block with a portrait placeholder that can be replaced with a real photo.

**English draft**
`Meet Amit Sir (Amit Kansagra), the person behind Total Solution. His goal is to help children grow through education, curiosity, discipline and confidence. The academy brings together early learning, school-level academic support and focused entrance preparation so families can explore learning options for different stages of a child's journey.`

**Gujarati draft**
`મળો અમિત સર (અમિત કાંસાગરા) સાથે — ટોટલ સોલ્યુશન પાછળની પ્રેરણા. બાળકો શિક્ષણ, જિજ્ઞાસા, શિસ્ત અને આત્મવિશ્વાસ સાથે આગળ વધે એ તેમનો ધ્યેય છે. એકેડેમી પ્રારંભિક શિક્ષણ, શાળાના અભ્યાસમાં માર્ગદર્શન અને પ્રવેશ પરીક્ષાની તૈયારીને એક જ જગ્યાએ લાવવાનો પ્રયત્ન કરે છે, જેથી બાળકોના વિકાસના વિવિધ તબક્કે પરિવારને યોગ્ય માર્ગદર્શન મળી શકે.`

This is suggested marketing copy based only on the owner's description. Do not add unverified qualifications, years of experience, awards, personal biography or outcome statistics. The owner can edit this text before launch.

### E. Facilities and learning culture
Create a visual grid for:
- Friendly learning environment
- Play-based early learning
- Academic practice and concept building
- Focused Navodaya preparation
- Faculty and classroom culture
- Child-friendly activities and learning materials

These are section themes, not verified claims about specific equipment. Only show facilities that the owner confirms are actually available. Use editable labels and generic illustrations until authentic photos/details are supplied.

### F. Gallery
- Responsive photo grid with optional lightbox
- Suggested categories: Classrooms, Activities, Faculty, Events, Preschool, Student Work
- Use real images supplied by the owner
- If no images are available, show a tasteful “Gallery photos coming soon” state or clearly marked placeholders; do not fabricate actual classroom/student photos
- Add meaningful alt text; do not expose children's full names or private information
- Keep the component easy to update by adding image objects to one data file

### G. Branches and map directions
Show two branch cards, each with the address and a clear “Get Directions” link. Use Google Maps directions/place URLs provided below. Do not claim the map pin has been verified unless it has been checked.

**Branch 1 — TS Preschool / Mota Varachha**
Address supplied by owner:
`F5–F9, Liberty Nine Road, Ram Chowk, Mota Varachha, Surat, Gujarat 394101, India`
Directions/place link supplied:
https://share.google/NgKp656ChWUlW4XVg

**Branch 2 — TS Academy / Nana Varachha (Sarthana Jakat Naka area)**
Address supplied by owner:
`Govind Park, B-107/8, First Floor, Vrajabhumi Road, opposite Varniraj Apartment, Bhagavan Nagar, Sarthana Jakat Naka, Bhagawan Nagar Society, Nana Varachha, Surat, Gujarat 395013, India`
Map link supplied:
https://www.google.com/maps/place/Siddheshwar+Jewellers/@21.227824,72.901325,932m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0459fad9c893f:0x422726faf0a24417!8m2!3d21.227824!4d72.901325!16s%2Fg%2F11l_18n4_9

**Important:** The second link appears to point to a nearby landmark/business rather than a confirmed TS Academy pin. Keep it as a provisional directions link only and request a correct TS Academy Google Maps share link before launch. Do not silently label the landmark itself as the academy.

Map implementation:
- Use a clickable “Get Directions” link that opens Google Maps in a new tab.
- An embedded map is optional; do not let it dominate the page or harm mobile performance.
- Add `target="_blank"` and safe `rel="noopener noreferrer"` for external links.

### H. Contact and admission enquiry
Provide:
- Phone number CTA (only once a confirmed number is supplied)
- WhatsApp CTA (only once a confirmed WhatsApp number is supplied)
- Simple enquiry form with: Parent name, phone number, program of interest, child’s standard/age (optional), preferred branch (optional), message (optional)
- Client-side validation and accessible error messages
- Clear success state only when a real submission has succeeded

No backend endpoint or receiving email was provided. Therefore:
- Do not create a fake form submission or falsely tell the user the enquiry was sent.
- Until a real endpoint, email, or WhatsApp number is configured, make the form a demo UI with an explicit “Enquiry delivery is not configured yet” message, or route users to an owner-approved contact channel.
- Put contact settings in one clearly named config file so the owner can update them easily.
- Never invent phone numbers, email addresses, opening hours, fees or batch schedules.

### I. Social links
Use icon links and accessible labels for:
- YouTube: https://www.youtube.com/@TS-Academy
- Facebook: http://facebook.com/profile.php?id=100090597774524
- Instagram: https://instagram.com/ts_preschool?igshid=NTc4MTIwNjQ2YQ==

Open social profiles in a new tab safely. Use the direct Instagram URL above rather than the YouTube redirect URL. If an account URL changes, update the social links in one config file.

### J. Footer
Include:
- Total Solution / TS Academy brand
- Short line about preschool, academic classes and Navodaya preparation
- Quick navigation links
- Branch links
- Social links
- Language toggle or current language
- Copyright year generated dynamically
- Privacy note: do not collect or transmit enquiry information until the owner configures a real destination

## 5. Gujarati and English language support

Language support is a core requirement, not an afterthought.

- Default language: Gujarati or English based on the owner's preference; if no preference is given, default to Gujarati and provide a visible toggle.
- All headings, buttons, labels, validation messages, navigation items, section copy and accessibility labels must be translated.
- Store text in separate `en` and `gu` dictionaries; do not scatter conditional translations throughout components.
- Persist the selected language in local storage if practical and privacy-appropriate.
- Ensure Gujarati font rendering, line-height, spacing and mobile wrapping are tested.
- Use `lang="gu"` for Gujarati and `lang="en"` for English where applicable.
- Do not translate official brand names inconsistently.

## 6. Functional requirements

- Single-page navigation with correct scroll targets
- Working language toggle
- Working mobile navigation
- Working program CTAs that scroll to contact/enquiry or the relevant program
- Working branch direction links
- Working social profile links
- Gallery lightbox only if actual gallery images are available
- Form validation and truthful submission status
- Responsive layout at 320px, 375px, 768px, 1024px and 1440px widths
- Keyboard navigation, visible focus states, sufficient contrast, semantic headings and labels
- No horizontal overflow
- No console errors, broken imports or missing assets
- No fake metrics, fake reviews, fabricated faculty profiles or unverified facilities

## 7. Suggested project structure

```text
ts-academy/
├── public/
│   ├── images/
│   │   ├── logo-placeholder.svg
│   │   └── gallery/                 # owner-approved real photos
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProgramCards.tsx
│   │   ├── AboutAmitSir.tsx
│   │   ├── Facilities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Branches.tsx
│   │   ├── EnquiryForm.tsx
│   │   └── Footer.tsx
│   ├── content/
│   │   └── translations.ts
│   ├── config/
│   │   └── site.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── README.md
├── package.json
└── index.html
```

Adapt this structure if the existing project already has a sensible organization.

## 8. Content/configuration management

Centralize editable details in `src/config/site.ts`, including:
- Brand labels
- Branch names, addresses and map URLs
- Social URLs
- Confirmed phone and WhatsApp numbers
- Contact form destination/status
- Gallery assets
- Any owner-approved timings or other business facts

If information is not known, use `null` or an obvious TODO value and hide the corresponding UI instead of displaying invented content.

## 9. SEO and sharing

- Page title: `TS Academy | Total Solution — Surat`
- Meta description: `Explore TS Preschool, academic classes for Standards 1–9, and Jawahar Navodaya entrance preparation from Total Solution in Surat.`
- Add Open Graph title/description and a share image only when a real brand image is available.
- Add a favicon.
- Use descriptive section IDs and image alt text.
- Add local business structured data only for confirmed facts; do not invent phone numbers, opening hours, geo-coordinates or ratings.
- Optimize images and avoid loading every gallery image at full resolution immediately.
- Ensure social sharing previews are attractive and accurate.

## 10. Quality, privacy and safety

- Never publish children's identifiable photos without permission from the parent/guardian and academy.
- Do not expose children’s names, phone numbers, school IDs or other personal data in the gallery.
- Do not include tracking/analytics unless explicitly approved and configured.
- Avoid external scripts and fonts that block the page unnecessarily; use a reliable Gujarati font fallback.
- Make clear that the site provides educational information and that admission, fees and batch details must be confirmed directly.
- Avoid unverified claims about exam selection rates or guaranteed results.

## 11. Acceptance checklist

The site is ready for review only when all applicable items pass:

- [ ] It starts successfully using the README commands.
- [ ] It is a complete single-page site, not a wireframe.
- [ ] Gujarati and English toggles translate the entire UI.
- [ ] Header navigation and all CTAs work.
- [ ] Program cards cover preschool, Standards 1–9 and Jawahar Navodaya preparation.
- [ ] Amit Sir / Amit Kansagra section is present and editable.
- [ ] Facilities and gallery sections work without fake claims or fake photos.
- [ ] Both branches are shown with their supplied addresses.
- [ ] Branch 2 map pin is clearly marked provisional until verified.
- [ ] YouTube, Facebook and Instagram links open correctly.
- [ ] Contact form never pretends to send data when no endpoint is configured.
- [ ] Phone/WhatsApp actions are hidden until verified contact numbers are provided.
- [ ] Layout works on mobile, tablet and desktop.
- [ ] Accessibility basics, focus states and reduced-motion preference are supported.
- [ ] No console errors, broken links, placeholder text accidentally exposed, or horizontal overflow.
- [ ] README explains how to run, build and update content/photos.

## 12. Exact build workflow for the coding agent

1. Inspect the repository and preserve any working setup.
2. Create or update the app according to this specification.
3. Implement the design system and responsive layout first.
4. Implement all sections and centralized bilingual content.
5. Add the supplied branch and social links.
6. Add honest contact-form behavior; do not fake a backend.
7. Run the available lint, type-check and production build commands.
8. Fix every error that can be fixed within the repository.
9. Test the language toggle, navigation, CTA scroll targets, external links, mobile menu and responsive layout.
10. Update `README.md` with exact commands, project structure and owner-editable settings.
11. Provide a short completion report listing what was built and any remaining owner inputs.

Do not stop after generating a design mockup. Deliver a working implementation and verify it with the project's available build checks.

## 13. Owner inputs needed before public launch

The website can be developed with the information above, but these items must be confirmed before launch:

1. **Official contact number** and WhatsApp number.
2. **Correct Google Maps share link for Branch 2** (the supplied link may point to a nearby landmark).
3. **Actual photos** of Amit Sir, faculty, classrooms, activities and facilities, with appropriate permissions.
4. **Confirm the services/facilities** that are actually available at each branch.
5. **Enquiry destination**: backend endpoint, official email, or approved WhatsApp flow.
6. Preferred default language (Gujarati or English).
7. Optional: official logo, class timings, fee/admission details, and confirmed teaching subjects/mediums.


## 14. Centralized content architecture — mandatory requirement

**All website content and all image references must be managed centrally.** Do not hardcode business content, image paths, reviews, addresses, social links, program details, or other editable values inside individual UI components. The first version may use dummy/mock data, but it must be straightforward to replace the mock data source with a backend later without rewriting the UI.

### Architecture goals

1. Keep content separate from presentation.
2. Make one central data layer the source of truth for the entire site.
3. Keep image metadata and image paths in that same data layer (actual image files can live in `public/images/` or a future media service).
4. Support mock data now and a backend API later through the same typed interface.
5. Make parent reviews/testimonials manageable from the central data source.
6. Keep the UI components independent of whether data came from local mock data or a remote backend.
7. Include loading, empty, error and retry states for data-driven sections, even if the mock provider resolves immediately.

### Recommended folder structure

Use or adapt the following structure. The important requirement is the separation of data, data access and UI—not the exact filenames.

```text
src/
├── app/
│   ├── App.tsx
│   └── providers/
├── components/
│   ├── layout/
│   ├── common/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FacilitiesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── BranchesSection.tsx
│   │   └── ContactSection.tsx
├── content/
│   ├── translations/
│   │   ├── en.ts
│   │   ├── gu.ts
│   │   └── index.ts
│   └── site-content.types.ts
├── data/
│   ├── mock/
│   │   ├── site.mock.ts
│   │   ├── programs.mock.ts
│   │   ├── facilities.mock.ts
│   │   ├── gallery.mock.ts
│   │   ├── reviews.mock.ts
│   │   ├── branches.mock.ts
│   │   ├── faculty.mock.ts
│   │   └── contact.mock.ts
│   └── repositories/
│       ├── site.repository.ts
│       ├── programs.repository.ts
│       ├── gallery.repository.ts
│       ├── reviews.repository.ts
│       ├── branches.repository.ts
│       └── contact.repository.ts
├── services/
│   ├── api/
│   │   ├── api-client.ts
│   │   └── endpoints.ts
│   └── data-provider.ts
├── config/
│   ├── environment.ts
│   └── site-config.ts
├── hooks/
├── types/
├── styles/
└── main.tsx

public/
└── images/
    ├── brand/
    ├── hero/
    ├── owner/
    ├── programs/
    ├── faculty/
    ├── facilities/
    ├── gallery/
    └── reviews/
```

Do not create every file mechanically if the app is very small; keep the same separation with a sensible minimal structure. Avoid duplicate sources of truth.

### Central content models

Define TypeScript interfaces/types for all content returned by either mock data or the backend. Example model shapes:

```ts
export type SupportedLanguage = "en" | "gu";

export interface LocalizedText {
  en: string;
  gu: string;
}

export interface ImageAsset {
  id: string;
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
  objectPosition?: string;
  category?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  image: ImageAsset;
  icon?: string;
  isActive: boolean;
  sortOrder: number;
  ctaLabel: LocalizedText;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  photo: ImageAsset | null;
  isActive: boolean;
  sortOrder: number;
}

export interface GalleryItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  image: ImageAsset;
  category: string;
  alt: LocalizedText;
  isPublished: boolean;
  sortOrder: number;
}

export interface ParentReview {
  id: string;
  parentDisplayName: string;
  relationship?: LocalizedText;
  review: LocalizedText;
  rating?: number;
  programId?: string;
  dateLabel?: string;
  avatar?: ImageAsset | null;
  isApproved: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

export interface Branch {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  mapUrl: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  openingHours?: LocalizedText | null;
  image?: ImageAsset | null;
  isActive: boolean;
  sortOrder: number;
}

export interface Facility {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: ImageAsset;
  isActive: boolean;
  sortOrder: number;
}

export interface SocialLinks {
  youtube: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface SiteContent {
  brand: {
    businessName: LocalizedText;
    academyName: LocalizedText;
    preschoolName: LocalizedText;
    navodayaName: LocalizedText;
    logo: ImageAsset | null;
    faviconUrl: string | null;
  };
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    image: ImageAsset | null;
  };
  owner: {
    name: string;
    displayName: LocalizedText;
    biography: LocalizedText;
    goal: LocalizedText;
    photo: ImageAsset | null;
  };
  socialLinks: SocialLinks;
  seo: {
    title: LocalizedText;
    description: LocalizedText;
    shareImage: ImageAsset | null;
  };
}
```

Adjust model shapes when needed, but retain stable IDs, bilingual fields, active/published flags, sort order and centralized image references wherever appropriate. Keep contact/enquiry configuration and form delivery configuration separate from display content.

### Central data provider and backend switching

All UI components must consume data through repositories or a typed data-provider interface, never import `*.mock.ts` directly.

Create one configuration setting such as:

```ts
export type DataSourceMode = "mock" | "api";

export const appConfig = {
  dataSource: (import.meta.env.VITE_DATA_SOURCE ?? "mock") as DataSourceMode,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "",
};
```

Use `.env.example`:

```dotenv
VITE_DATA_SOURCE=mock
VITE_API_BASE_URL=
```

Implement a shared interface that both providers satisfy. For example:

```ts
export interface SiteRepository {
  getSiteContent(language: SupportedLanguage): Promise<SiteContent>;
  getPrograms(language: SupportedLanguage): Promise<Program[]>;
  getFacilities(language: SupportedLanguage): Promise<Facility[]>;
  getFaculty(language: SupportedLanguage): Promise<FacultyMember[]>;
  getGallery(language: SupportedLanguage): Promise<GalleryItem[]>;
  getApprovedReviews(language: SupportedLanguage): Promise<ParentReview[]>;
  getBranches(language: SupportedLanguage): Promise<Branch[]>;
  submitEnquiry(input: EnquiryInput): Promise<EnquiryResult>;
}
```

Create:
- `MockSiteRepository`: reads centralized local mock data and simulates the same return shapes as the API provider.
- `ApiSiteRepository`: makes requests to a configurable API base URL and maps/validates responses.
- `siteRepository`: one factory that selects the provider based on `VITE_DATA_SOURCE`.

Example factory:

```ts
export const siteRepository: SiteRepository =
  appConfig.dataSource === "api"
    ? new ApiSiteRepository(apiClient)
    : new MockSiteRepository();
```

This is illustrative: implement the actual classes and imports so the code compiles. Do not leave pseudocode in the final project.

**Backend switch acceptance test:** Changing the configured provider from `mock` to `api` must not require changing section components. When no real backend is configured, keep `mock` as the default. If `api` is selected but the base URL is missing, show a clear configuration error rather than silently showing fake data as if it came from the backend.

### API and data-fetching behavior

- Define endpoint paths in one file (e.g. `services/api/endpoints.ts`).
- Define request/response types and a common API client in one place.
- Handle network errors, non-2xx responses, empty results and malformed responses.
- Do not embed API URLs in components.
- Do not store secret API keys in client-side environment variables. Any private credentials must remain on the server.
- Use cancellation or stale-request protection when a component changes language or unmounts during a request.
- Show appropriate loading, error and retry UI for remote data.
- Do not silently replace a failed backend response with mock data. If a deliberate fallback is implemented, clearly label it as demo content.
- Keep the mock repository contract aligned with the API contract so both return the same shapes.

## 15. Centralized images and media management

All images must be referenced through centralized data/configuration. No UI component should contain hardcoded image paths or URLs.

### Image rules

- Keep local image files under `public/images/`, organized by category.
- Store each image's path, ID, alt text, dimensions and optional display position in central mock data.
- Render images by consuming the `ImageAsset` model.
- If the backend later returns a media/CDN URL, the same `ImageAsset.src` field should be used without changing the visual components.
- Prefer optimized WebP/AVIF assets with sensible fallbacks where practical.
- Lazy-load below-the-fold gallery and facility images; provide width/height or aspect ratios to reduce layout shifts.
- Use meaningful bilingual alt text; use empty alt text only for purely decorative images.
- Provide graceful fallback visuals for missing/broken images.
- Do not invent original academy photos. If real photos are not available, use clearly identified demo illustrations/placeholders and keep the source easy to replace.
- Avoid putting a large base64 image directly in TypeScript/JSON.
- Do not use a remote image service that requires an API key or may change URLs unexpectedly without documenting it.

### Central media manifest

Use a central gallery/media manifest, such as `src/data/mock/gallery.mock.ts`, and reusable references for logo, hero, owner, program cards, faculty, facilities, gallery and review avatars. Avoid maintaining the same path separately in multiple components.

Example:

```ts
export const media = {
  logo: {
    id: "brand-logo",
    src: "/images/brand/ts-academy-logo-placeholder.svg",
    alt: { en: "TS Academy logo", gu: "TS એકેડેમી લોગો" },
  },
  hero: {
    id: "hero-learning",
    src: "/images/hero/learning-placeholder.svg",
    alt: { en: "Children learning together", gu: "બાળકો સાથે શીખી રહ્યા છે" },
  },
};
```

The filenames above are examples; create the files if referenced, or use an existing valid asset. Never leave a path to a file that does not exist.

## 16. Parent reviews and testimonials — centrally managed

Add a dedicated **Parent Reviews** section. Its complete content must come from the central repository, not from hardcoded JSX.

### Review behavior
- Use `getApprovedReviews(language)` so the UI only displays reviews explicitly approved for publication.
- Support bilingual review text, display name, optional relationship/program, optional rating, optional avatar, featured flag and sort order.
- If no approved reviews exist, show a polished empty state such as “Parent reviews will appear here soon” / `વાલીઓના પ્રતિભાવો ટૂંક સમયમાં અહીં જોવા મળશે.` Do not hide the section unexpectedly or invent real-sounding reviews.
- Demo reviews may be seeded in mock data for development only, but must be unmistakably marked as **demo content** in the data and README. Do not publish demo testimonials as genuine parent statements.
- Never invent review counts, Google ratings, star averages or “verified parent” badges.
- Avoid exposing a parent's full name, child's name, phone number or private details without explicit permission.
- Keep review submission disabled unless a real backend/moderation process is configured.
- Only render a star rating when it exists and is within the valid range.
- Use stable review IDs and deterministic sorting.
- Add a configuration flag to enable/disable the entire review section without editing the component.

Suggested configuration:

```ts
export const sectionVisibility = {
  parentReviews: true,
  gallery: true,
  faculty: true,
  facilities: true,
};
```

Section visibility should be read by the page composition layer or site configuration. Do not duplicate flags in multiple files.

### Backend readiness for reviews

Define the future API contract for:
- Fetching published/approved reviews
- Optional review submission (only if owner enables it)
- Moderation status controlled by a trusted backend/admin—not by the public browser
- Sorting and pagination if review volume grows

The public website must never be able to approve its own submitted reviews by sending `isApproved: true`. Approval must be enforced server-side. The mock implementation should follow the same public behavior by returning only approved records.

## 17. Central management of every editable section

Use centralized typed data for:
- Brand names, logos and SEO
- Hero text and images
- Owner biography, goal and portrait
- Programs, highlights, icons and program images
- Facilities and their images
- Faculty names, roles, biographies and portraits
- Gallery items, categories, captions and image paths
- Parent reviews and review avatars
- Branch addresses, map links and optional branch images
- Social profile links
- Contact details and enquiry form configuration
- Navigation labels and translations
- Section visibility and display ordering

Avoid duplicating the same business fact in translations, JSX, branch cards and footer. Put each fact in its appropriate central model and reuse it. Keep translations in dictionaries when they are UI labels; keep business-managed localized content in typed content records. Document which file or backend endpoint owns each kind of information.

## 18. Mock data policy

The owner explicitly permits dummy data for missing information, so create realistic **development placeholders** to make the page fully demonstrable. However:

- Mark every mock record with a field such as `isDemo: true` where appropriate, or maintain a clearly documented mock-only dataset.
- Use obvious placeholder names for faculty and parent reviews (e.g. “Demo Parent Review — replace before launch”), never names that imply a real person supplied a review.
- Never make invented phone numbers, emails or real-looking contact details clickable.
- Do not show mock reviews as genuine public testimonials.
- Keep supplied branch addresses and social URLs as the provided initial values, while clearly flagging the unverified second map URL.
- Clearly mark mock photos/illustrations as placeholders.
- Provide a single launch checklist showing every demo record that must be replaced or approved.
- Switching to API mode must fetch API data; it must not silently keep showing dummy data if the API fails.

## 19. Additional acceptance checklist for centralized data

- [ ] UI components do not hardcode editable business content or image URLs.
- [ ] All images are referenced through centralized typed media data.
- [ ] All data types are shared by mock and API providers.
- [ ] A single configuration selects `mock` or `api`.
- [ ] Changing data provider does not require rewriting UI components.
- [ ] API base URL and endpoint paths are centralized.
- [ ] API mode reports a clear error when unconfigured or unavailable.
- [ ] Parent reviews load from the repository and only approved records are displayed.
- [ ] Demo reviews and demo images are clearly marked and cannot be mistaken for authentic material.
- [ ] Parent review section can be enabled/disabled through central configuration.
- [ ] Gallery, faculty, programs, facilities and branches can be reordered/hidden through data/configuration.
- [ ] Gujarati and English content is represented consistently in the data model.
- [ ] Empty, loading and error states are handled.
- [ ] All image references point to files that exist or valid URLs from the selected data provider.
- [ ] README documents how to edit mock data, add images, change section visibility and switch to a backend.
- [ ] No component imports mock datasets directly; components use the repository/provider layer only.

## 20. README must explain the future backend switch

Include a practical guide with:
1. Where all mock business content lives.
2. How to add, replace, sort and remove images.
3. How to add/edit programs, facilities, faculty, branches and parent reviews.
4. How bilingual fields work.
5. How to hide/show a section centrally.
6. How to configure `VITE_DATA_SOURCE=mock` for local demo mode.
7. How to configure `VITE_DATA_SOURCE=api` and `VITE_API_BASE_URL` for a future backend.
8. A table of expected API endpoints and response types.
9. How errors, loading states and empty results behave.
10. Which demo content and unverified business details must be replaced before public launch.

**Final architecture rule:** Build the first version with centralized mock data, typed repositories and a working provider switch. Do not treat “backend-ready” as merely creating an `.env` variable. The mock and API providers must implement the same interface, and the website UI must depend only on that interface.

---
**Final instruction:** Use this document as the source of truth. Build the complete site with sensible design decisions, but never invent missing business facts. If an owner-only detail is required, keep it configurable and clearly list it in the final completion report.
