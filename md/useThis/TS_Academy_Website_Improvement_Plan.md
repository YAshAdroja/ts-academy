# TS Academy Website Improvement Plan

**Document type:** Incremental website-improvement instructions  
**Project:** TS Academy / TS Preschool / TS Jawahar Navodaya  
**Purpose:** Improve the already implemented website in small, testable steps.  
**Important:** This is a focused improvement file. Do not merge it with the original website implementation specification or the separate faculty-details improvement file.

---

## 1. Instructions for the Coding Agent

Read the existing project and this document before making changes.

1. Treat the current website implementation as the baseline; do not rebuild it from scratch.
2. Make only the improvements described in the current task or approved step.
3. Preserve working routes, features, content, integrations, and styling unless a change is explicitly requested.
4. Do not merge separate Markdown instruction files into one document.
5. Keep changes focused, maintainable, responsive, and accessible.
6. Before editing, inspect the relevant components, shared styles, content data, and assets.
7. Reuse existing components and design tokens when possible. Avoid duplicate components and unnecessary dependencies.
8. Do not invent business details, staff qualifications, parent testimonials, awards, student results, or facility claims.
9. After each step, run the available lint, type-check, test, and production-build commands. Report which checks actually ran and their results.
10. If a required asset or business fact is missing, use a clearly identified placeholder or list it as a question; do not silently fabricate it.

## 2. Project Background

TS Academy is an education-focused institution in Surat, Gujarat. The website represents:

- TS Academy
- TS Preschool
- TS Jawahar Navodaya

The site should communicate a welcoming, trustworthy, child-friendly learning environment to parents and students. It should support Gujarati and English content and make it easy for parents to explore programs, learn about the institution, view the learning environment, contact the team, and find either branch.

### Primary audiences

- Parents exploring preschool or school-level learning support.
- Students and families interested in Jawahar Navodaya entrance preparation.
- Parents seeking contact information, directions, and updates.
- Families who prefer Gujarati or English.

## 3. Improvement Goals

Improve the existing website without disrupting its current implementation:

- Make the visual design more polished, consistent, and child-friendly.
- Improve information hierarchy so parents can quickly understand the institution and its offerings.
- Improve mobile, tablet, and desktop layouts.
- Make calls to action and contact details easy to find.
- Present programs, facilities, gallery images, and parent feedback clearly.
- Improve Gujarati/English language switching and ensure translations remain consistent.
- Keep content and assets easy to update centrally.
- Maintain fast loading, accessible controls, and reduced-motion support.
- Keep the code ready for future backend integration without requiring UI components to be rewritten.

## 4. Design Direction

Use the following sites for general inspiration only:

- https://www.firstcry.com/intelli/intellitots
- https://klay.co.in/
- https://www.littlemillennium.com/
- https://www.vatsalyapreschool.in/aboutus.html — additional reference for the About Us page, founder introduction, leadership/faculty profiles, and branch information.

Use Vatsalya's page only as inspiration for information structure and presentation. Adapt the ideas to TS Academy's own identity, content, staff, and educational focus. Do not copy source code, logos, illustrations, photographs, wording, or distinctive brand identity.

For the TS Academy About Us and faculty sections, consider:
- A clear profile for Amit Kansagra (અમિત કણસાગરા), using an approved photo and owner-confirmed biography.
- Consistent faculty profile cards with verified names, roles, subjects, qualifications, and biographies.
- A concise institution story, educational vision, and learning approach.
- Clear branch information with verified addresses and working map links.
- A responsive layout that works in Gujarati and English.

Do not invent staff qualifications, titles, years of experience, awards, or credentials. Keep faculty-specific details and implementation instructions in the separate faculty-improvement Markdown file; do not merge that file into this one.

### Desired visual style

- Warm, colorful, educational, and professional.
- Friendly for children while remaining reassuring and clear for parents.
- Use a consistent set of colors, spacing, typography, border radii, shadows, and button styles.
- Use generous whitespace and readable text instead of overcrowded sections.
- Use illustrations of educational objects such as letters, numbers, books, pencils, shapes, school boards, benches, and friendly child characters where they support the content.
- Keep decorative illustrations near the bottom-left or bottom-right edges of sections/cards. They must not cover text, controls, faces, or important information.
- Prefer lightweight SVG illustrations and optimized WebP/PNG images.
- Use Lottie only when it adds meaningful value; animations must be subtle and nonessential.

Do not replace the existing design system wholesale if it is already working. Improve consistency through shared tokens and reusable components.

## 5. Review the Existing Website First

Before changing the code, inspect and report:

- Current framework, package scripts, routing, and component structure.
- Existing page sections and navigation.
- Current responsive behavior.
- Current Gujarati/English language implementation.
- Where contact details, branches, programs, reviews, gallery items, and images are stored.
- Existing design tokens and reusable components.
- Existing errors or obvious accessibility/performance issues.
- Which improvements can be made safely without restructuring the application.

Then work through the implementation checklist below in order. Do not make every change at once if that would make review or testing difficult.

## 6. Incremental Implementation Plan

### Step 1 — Visual consistency

- Review headings, body text, buttons, cards, section spacing, container widths, and image treatment.
- Standardize inconsistent spacing, radii, shadows, colors, and typography.
- Establish or reuse shared design tokens.
- Make hover, focus, active, disabled, and loading states consistent.
- Preserve the existing brand identity and content.

**Acceptance criteria**
- Shared components look consistent across pages.
- Text and controls remain readable.
- No existing working section is removed without approval.

### Step 2 — Responsive layout

Test the current site and improve it for small mobile screens, larger phones, tablets, laptops, and wide desktops.

- Prevent horizontal overflow.
- Ensure navigation is usable on mobile.
- Stack cards and columns cleanly on narrow screens.
- Keep images within their containers and preserve suitable aspect ratios.
- Make tap targets comfortable to use.
- Ensure decorative illustrations never overlap essential content.
- Check long Gujarati text, which may wrap differently from English.

**Acceptance criteria**
- No clipping, overlapping, or unexpected horizontal scrolling at common viewport sizes.
- Navigation, language switching, links, and forms remain usable on touch devices.
- Content order remains logical on small screens.

### Step 3 — Home page and calls to action

Review the existing home page rather than rebuilding it.

- Ensure the opening section explains who TS Academy serves and what it offers.
- Make the main action clear, such as contacting the academy or asking about admissions.
- Provide secondary paths to programs, the institution profile, gallery, and locations.
- Use a relevant, optimized image or illustration that supports the message.
- Avoid unsupported claims such as guaranteed admission, guaranteed results, or unverified success rates.

**Acceptance criteria**
- A first-time visitor can quickly understand the institution and identify the next action.
- Calls to action are descriptive and work correctly on mobile and desktop.

### Step 4 — Programs and learning information

Present verified programs in clear cards or sections. Possible categories, subject to confirmation, include:

- Preschool / early-years activities.
- School-level academic support.
- Jawahar Navodaya entrance preparation.
- Balachadi preparation, if currently offered.

Do not imply that every program is available at every branch unless confirmed. Keep program names, descriptions, age/grade ranges, medium, branch availability, and visibility in centralized content data.

**Important grade-range note:** Existing information differs between Standards 1–9 and Standards 1–10. Keep this configurable and flag it for owner confirmation before publishing a definitive claim. Confirm language-medium and eligibility details as well.

**Acceptance criteria**
- Each visible program has an accurate name and description.
- Unconfirmed program details are clearly marked for review and are not presented as established facts.

### Step 5 — About the institution and owner

Present the institution’s purpose and the owner/educational lead, Amit Kansagra (Gujarati: **અમિત કણસાગરા**), in a respectful, professional way.

Possible themes based on the supplied description:

- Personal involvement in teaching and educational activities.
- Guidance for students preparing for Jawahar Navodaya entrance examinations.
- Strong fundamentals, curiosity, discipline, confidence, and values.
- Constructive relationships with students and parents.
- Helping students prepare for their next stage of learning.

Treat these as draft messaging to validate with the owner. Do not invent qualifications, years of personal teaching experience, awards, credentials, or measurable outcomes.

#### Official Gujarati slogan

> અમારી સંસ્થા શિક્ષણનું એક એવું કેન્દ્ર બનાવવાનું સપનું જુએ છે, જ્યાં દરેક વિદ્યાર્થીની પ્રતિભાને પ્રોત્સાહન મળે અને તેઓ જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસ સાથે ઉજ્જવળ ભવિષ્ય તરફ આગમન કરે.

#### Supplied English translation

> Our institution dreams of creating an educational center where every student's talent is encouraged, and they move towards a bright future with knowledge, values, and self-confidence.

Preserve the Gujarati wording exactly unless the owner requests an edit. Keep both language versions in centralized content data.

### Step 6 — Facilities and learning environment

Use a clear, visual layout for verified facilities and learning activities. Potential content themes include foundational learning, problem-solving, Navodaya preparation, preschool activities, learning resources, student confidence, and parent communication.

These are topic suggestions, not proof that a specific facility or service exists.

Do **not** claim CCTV, air conditioning, transport, meals, medical support, certified staff, smart boards, safety certifications, or any other specific facility unless the owner confirms it.

**Acceptance criteria**
- Every published facility claim has been confirmed.
- Images accurately represent the institution and are approved for use.
- Missing information is recorded for follow-up rather than fabricated.

### Step 7 — Gallery and media

- Organize approved photos into meaningful categories such as classrooms, activities, events, faculty, and student work.
- Use consistent image ratios and appropriate cropping.
- Add useful alternative text to informative images.
- Lazy-load below-the-fold images.
- Avoid stretching low-resolution images.
- Ensure any student photographs are approved for public website use by the appropriate parent/guardian and institution.
- Do not use stock photos in a way that falsely suggests they depict TS Academy.
- Use placeholders only when clearly identified as placeholders during development.

### Step 8 — Parent reviews and testimonials

- Keep reviews in centralized data.
- Store review text, language, reviewer display name (if consented), approval status, and optional date.
- Show only approved, genuine testimonials on the public website.
- Do not invent testimonials or present generated demo text as real parent feedback.
- Clearly label demo content in development and hide it from production.
- Do not publish personal contact details or unnecessary personal information about reviewers.

**Acceptance criteria**
- Unapproved reviews are not publicly displayed.
- The interface has a graceful empty state if no approved reviews are available.

### Step 9 — Branch locations and contact

Keep the two supplied branch records in centralized data. Verify addresses and map pins before launch.

**Branch 1 — Mota Varachha**

Supplied Gujarati address:

> F-5 થી F-9, Liberty Nine, રામ ચોક નજીક, સુદામા ચોક, મોટા વરાછા, સુરત, ગુજરાત

Supplied English address:

> F5–F9, Liberty Nine Road, Ram Chowk, Mota Varachha, Surat, Gujarat 394101, India

Map link supplied:

https://share.google/NgKp656ChWUlW4XVg

**Branch 2 — Nana Varachha / Sarthana Jakat Naka area**

Supplied address:

> Govind Park, B-107/8, First Floor, Vrajabhumi Road, opposite Varniraj Apartment, Bhagavan Nagar, Sarthana Jakat Naka, Bhagawan Nagar Society, Nana Varachha, Surat, Gujarat 395013.

Map link supplied:

https://www.google.com/maps/place/Siddheshwar+Jewellers/@21.227824,72.901325,932m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0459fad9c893f:0x422726faf0a24417!8m2!3d21.227824!4d72.901325!16s%2Fg%2F11l_18n4_9?entry=ttu

The second link references a place named Siddheshwar Jewellers. Confirm that its pin correctly identifies the intended academy branch before publishing it.

**Contact details supplied**

- Office: 8488929310
- Mobile: 9898894334

Keep telephone numbers and map URLs in one central configuration file. Use `tel:` links for confirmed phone numbers. Only add a WhatsApp action after confirming which number is WhatsApp-enabled. Do not invent opening hours or response-time promises.

**Acceptance criteria**
- Each branch has a distinct name, address, map link, and contact details where confirmed.
- Directions links open correctly.
- Address text is readable on mobile.
- The branch pin is checked against the real location.

### Step 10 — Social links and YouTube

Use the following supplied links, checking that they still resolve and belong to the institution before launch:

- TS Academy YouTube: https://www.youtube.com/@TS-Academy
- TS Navodaya YouTube: https://www.youtube.com/@tsnavodaya
- Facebook: http://facebook.com/profile.php?id=100090597774524&mibextid=ZbWKwL
- Instagram: https://instagram.com/ts_preschool?igshid=NTc4MTIwNjQ2YQ==

Requirements:

- Keep social links in centralized configuration.
- Use clear labels and accessible icons.
- Open external links safely when opening a new tab.
- Avoid heavy embedded feeds that slow down the site.
- If embedding YouTube content, use the supplied official channel/video identifiers and a responsive, privacy-conscious embed. Do not fabricate video IDs.
- Provide a useful fallback link if an embed fails.

### Step 11 — Gujarati and English experience

- Ensure users can switch languages easily and the selected language is reflected consistently throughout the interface.
- Keep both languages together in structured content data rather than scattering translated strings across components.
- Check navigation, forms, validation messages, buttons, page titles, image descriptions, and empty states in both languages.
- Avoid machine-generated or placeholder translations in production without review.
- Preserve the exact official Gujarati slogan above.
- Ensure font choices support Gujarati characters clearly and reliably.

**Acceptance criteria**
- No visible section accidentally mixes languages unless intentionally bilingual.
- Switching languages does not break layout or lose the current page context unnecessarily.
- Gujarati text is not clipped, overlapped, or rendered with missing glyphs.

### Step 12 — Accessibility and motion

- Use semantic headings and landmarks.
- Ensure all interactive controls can be operated with a keyboard.
- Provide visible keyboard focus.
- Use sufficient color contrast and descriptive link text.
- Give meaningful images appropriate alt text; mark purely decorative images as decorative.
- Respect `prefers-reduced-motion`.
- Keep animation away from critical reading paths and avoid flashing or distracting loops.
- Do not rely on color or animation alone to communicate important information.

### Step 13 — Performance and reliability

- Optimize image dimensions and formats.
- Lazy-load nonessential images and embeds.
- Avoid unnecessary animation libraries or large dependencies.
- Prevent layout shifts by reserving image/media space.
- Use loading, empty, and error states where data is fetched.
- Check browser console errors and failed asset requests.
- Keep the site usable if optional third-party embeds fail.

### Step 14 — Centralized content and asset management

Reuse the project's existing data architecture if suitable. Otherwise, organize content so it can be updated without editing every UI component.

Recommended content groups:

- `siteConfig`: site name, logos, slogan, language defaults, contact, social links.
- `branches`: branch name, localized address, map link, phone, verified status.
- `programs`: localized title/description, grade or age range, medium, branch availability, visibility, sort order.
- `facilities`: localized title/description, image, verification status, visibility, sort order.
- `gallery`: image path, localized alt text, category, approval status, sort order.
- `faculty`: reference to the separate faculty data/improvement workflow; do not duplicate or merge faculty instructions into this document.
- `reviews`: localized review text, consented display name, approval status, date.
- `assets`: stable asset identifiers, file paths, alt text, and intended usage.

Requirements:

- Use stable IDs rather than relying on array positions.
- Keep visible/hidden and sort-order fields where useful.
- Avoid duplicating the same contact or branch data in multiple components.
- Do not add a new state-management or data library unless there is a clear need.
- Keep current mock data working.
- If the project already supports a repository/provider pattern, preserve it. Otherwise, make a small, typed data-access boundary that can later support an API without rewriting presentation components.
- Do not implement a backend merely because future backend support is desired.

### Step 15 — Images, SVGs, and Lottie assets

Suggested asset folders if compatible with the current project:

```text
public/
  images/
    brand/
    hero/
    education/
    classroom/
    characters/
    programs/
    facilities/
    faculty/
    gallery/
  animations/
```

- Keep a central asset manifest or central asset references.
- Verify that every referenced local file exists.
- Use original, licensed, or institution-approved assets only.
- Optimize SVGs and raster images before shipping.
- Prefer static SVG/PNG/WebP fallbacks if an animation fails.
- Lazy-load nonessential Lottie animations.
- Do not put essential copy inside images or animations.
- Avoid placing decorative objects over text or interactive elements.

## 7. Content and Claims That Need Owner Confirmation

Before launch, confirm the following:

- Whether the supported school-grade range is Standards 1–9 or Standards 1–10.
- Exact age/grade eligibility and medium for each program.
- Whether Balachadi preparation is currently offered and at which branch.
- Whether the institution started in 2018 and whether this date should be published.
- Any student-success statements or examination-result statistics. Do not invent counts or percentages.
- Correct branch names, addresses, map pins, and phone numbers.
- Which phone number, if any, supports WhatsApp.
- Current social account ownership and links.
- Facility and service claims.
- Faculty names, roles, qualifications, photos, and approved biographies.
- Permission to publish student images and parent testimonials.

Keep a visible development checklist for unresolved items. Do not publish internal notes or demo data as public-facing content.

## 8. Quality Assurance Checklist

Run the checks supported by the existing repository and report the actual outcome.

### Functional
- [ ] Main navigation and all page links work.
- [ ] Language switch works throughout the site.
- [ ] Contact links use the correct numbers.
- [ ] Both map links open and point to the intended locations.
- [ ] Social links resolve.
- [ ] Forms validate inputs and show useful feedback, if forms exist.
- [ ] Gallery media loads and fallbacks work.
- [ ] Only approved reviews appear in production.

### Responsive
- [ ] Small mobile screen checked.
- [ ] Large mobile screen checked.
- [ ] Tablet checked.
- [ ] Desktop checked.
- [ ] No horizontal overflow or overlapping content.
- [ ] Gujarati and English layouts both checked.

### Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Headings are in a logical order.
- [ ] Images have appropriate alt text.
- [ ] Contrast is sufficient.
- [ ] Reduced-motion preference is respected.

### Engineering
- [ ] No new TypeScript/lint errors.
- [ ] No avoidable browser console errors.
- [ ] No missing local assets.
- [ ] Production build succeeds.
- [ ] Existing features remain functional.
- [ ] README/setup instructions are updated only if the implementation workflow changed.

## 9. Change Reporting Format

After each improvement step, report:

1. **Step completed:** What was changed.
2. **Files changed:** Exact paths.
3. **Behavior preserved:** Existing features checked.
4. **Validation:** Commands actually run and their results.
5. **Open questions:** Facts or assets requiring owner confirmation.
6. **Next recommended step:** One focused next action.

Do not claim a test passed unless it was actually run.

## 10. Definition of Done

An improvement is complete when:

- It solves the targeted issue without unrelated rewrites.
- It works in Gujarati and English where applicable.
- It is responsive and accessible.
- It uses verified content and valid assets.
- It does not expose fabricated testimonials or unsupported claims.
- It passes all applicable checks that were actually run.
- Its changes and remaining questions are reported clearly.

---

## Final instruction

**Improve the existing TS Academy website incrementally. Do not rebuild the completed implementation, do not merge this document with other Markdown files, and do not combine the faculty-details workflow into this file. Start by inspecting the existing project, then implement only the first agreed improvement step and validate it before continuing.**
