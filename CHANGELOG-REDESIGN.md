# Redesign Changelog — Conversion-Focused Holdings Site

## Summary

The MEnterprise Firm Inc site was restructured from a “cool portfolio” into a single primary conversion path (“Request partner pack”) with clearer messaging, trust proof, and mobile-first layout. Outcome-oriented copy and a consistent CTA system replace feature-heavy language and scattered CTAs.

---

## A) Copy & Information Architecture

### Hero
- **Before:** “A holding company for the modern stack” + “Explore the portfolio” / “Request an introduction.”
- **After:** Headline “Compliance infrastructure for high-risk commerce.” Subhead “One network. Identity, risk scanning, payments.” Operating model line. **Primary CTA:** “Request partner pack” (scroll to contact). **Secondary CTA:** “View portfolio.” Micro-proof: “Response within 24 business hours.”

### Trust / Proof Strip (new)
- New section directly under hero: Focus (high-risk commerce & compliance infrastructure), Delivery (audit-ready artifacts, deterministic workflows), Response (within 24 business hours). Compact, operations-focused.

### Portfolio
- **Before:** Full-screen pinned section per subsidiary (7 long scroll sections) + “Visit site” on each.
- **After:** **Portfolio Router** — card grid. Top 5 companies shown first; “View full portfolio” reveals remaining 2. Each card: name, category, **outcome** (one line), **key capability** (business impact), “Visit site” with UTM (`utm_source=menterprise&utm_medium=portfolio&utm_campaign=holding_router`). “One network. Seven engines.” + short intro. No long scroll-through per company.

### Subsidiary copy (outcome-oriented)
- **ShipMyStack:** Outcome “One identity layer across deploy targets and plans.” Capability “Central OAuth; reduces duplicate sign-on and plan sprawl.”
- **PrepScan:** “Catch prohibited content before auditors do.” / “Live site scanning; flags risk factors so merchants stay compliant.”
- **Scan643:** “Flag unauthorized script changes before they become PCI findings.” / “Deep-web script analysis and hashing; pay-to-reveal reports for security teams.”
- **ReUp:** “Stay live when rails go down.” / “Multi-rail checkout and P2P deep links; BTCPay optional.”
- **MSE:** “See checkout failures before they become downtime.” / “Event-driven monitoring and checkout simulation; surfaces active threats.”
- **KratomBans:** “Know what’s legal where before you ship.” / “State and county legality API; Sentinel keeps content and APIs in sync.”
- **Sovereign Stack:** “Run checkouts and audits without custody risk.” / “Jurisdictional fallback; headless frontend for high-risk simulations.”

### Operating Model (new)
- **“How the system works”** — 3 steps: **Detect** (monitoring surfaces risk before it becomes a finding), **Evidence** (logged with timestamps and artifacts), **Remediate** (actionable outputs and integrations). Plain language for technical and non-technical buyers.

### Partner section (new)
- **“Partners & operators”** — ISOs, agencies, infrastructure buyers. Copy: “We integrate with your stack. Share your use case and we’ll route you to the right product or a fit call. No runaround.” CTA: “Request partner pack” (scroll to contact).

### Contact & footer
- **Contact:** Headline “Request partner pack.” Subhead “Get capability overviews, integration notes, and response SLAs. We reply within 24 business hours.” Form labels and placeholders from `lib/copy.ts`. Message placeholder “Use case or question.” Success state: “Inquiry sent. We’ll respond within 24 business hours.”
- **Footer:** Legal line added: “MEnterprise Firm Inc operates under DBAs including Sovereign Stack and Elite Shop.” Plus existing © and company name.

---

## B) UI & Components

### Navigation
- Sticky nav with **primary CTA “Request partner pack”** always visible (including mobile). Links: Portfolio, How we operate (hidden on small screens), primary CTA. Scroll-based show/hide and light/dark styling by section retained. Focus-visible rings and min tap height 44px.

### Button system
- **Primary:** Gold border + gold text, hover fill gold. Used for main CTAs (hero, nav, partner, contact submit).
- **Secondary:** Light border, transparent bg, hover subtle fill. Used for “View portfolio” and “View full portfolio.”
- **Ghost:** Text-only, for low-emphasis actions if needed later.
- Transitions 200ms; focus-visible ring for accessibility.

### Form & inputs
- **`.input-base`** in `index.css`: white bg, border, 16px text, focus border + ring gold. Used on contact form. Labels and IDs wired for a11y.

### Layout & typography
- **Mobile-first:** Body `clamp(16px, 2.5vw, 18px)`, line-height 1.5. Section padding `px-[5vw] md:px-[8vw]`, `py-16 md:py-24`. Headings `clamp()` for fluid scale.
- **Contrast:** Dark bg `#0B0C0E`, light text `#F4F6F9`, gold accent `#C9A45C`. Contact section light bg `#F4F6F9` for contrast. No low-contrast body text.

### Removed / simplified
- **OverviewSection** (pinned “One network. Eight engines” + image) removed; its role folded into Portfolio Router headline and intro.
- **SubsidiaryShowcase** (7 full-screen pinned sections) removed from main flow; replaced by card grid in PortfolioRouter. Fewer “visit site” exits before contact; one primary path.

---

## C) Conversion & Analytics

### Primary path
- **Single dominant CTA:** “Request partner pack” in hero, nav, and partner section → scroll to contact. Secondary: “View portfolio” and “View full portfolio” (expand cards). “Visit site” on cards is tertiary (outbound with UTM).

### Lead capture
- Contact form is the lead capture. Submit shows success message; form resets. No backend wired; ready for Formspree, Vercel serverless, or your API. `data-track="contact-submit"` and optional `gtag('event', 'contact_submit', …)` for analytics.

### Tracking hooks (analytics-ready)
- `data-track` and/or `gtag` events: `hero_cta_click`, `nav_cta_click`, `partner_cta_click`, `portfolio_click` (card “Visit site”), `contact_submit`. Campaign `holding_router`. Wire to GTM or gtag as needed.

### UTM on portfolio links
- All subsidiary “Visit site” links use `portfolioUrl(website)` → `https://{website}?utm_source=menterprise&utm_medium=portfolio&utm_campaign=holding_router`.

---

## D) SEO & Meta

### index.html
- **Title:** “MEnterprise Firm Inc | Holdings & Compliance Infrastructure.”
- **Meta description:** Holdings + Sovereign Stack + compliance infrastructure, audience, “Request partner pack.”
- **Open Graph:** og:type, og:title, og:description, og:url, og:site_name.
- **Twitter:** summary_large_image, title, description.
- **Favicon:** `/favicon.ico` (add file as needed).

### Schema
- **Organization** JSON-LD: name, url, description, address (4496 Mahoning Ave #968, Youngstown, OH 44515).

### Structure
- Single H1 on hero: “Compliance infrastructure for high-risk commerce.” H2s: Portfolio, How the system works, Partners, Request partner pack. Sections have `id` and `aria-labelledby` where appropriate.

---

## E) Performance & Accessibility

- **Hero image:** `loading="eager"`, `fetchPriority="high"`, `alt=""` (decorative).
- **Portfolio logos:** `loading="lazy"`, width/height 48 to reduce layout shift.
- **Motion:** GSAP only on hero (entrance + scroll exit). Rest of page is static layout + CSS transitions (150–300ms). No heavy animation libs on flowing sections.
- **Focus:** Buttons and key links use `focus-visible:ring-2 focus-visible:ring-gold ring-offset-2`. Inputs use `.input-base` focus styles.
- **Tap targets:** Min height 44px on primary CTAs and nav items.
- **Body:** Minimum 16px on mobile via `clamp(16px, 2.5vw, 18px)`.

---

## F) Files Touched

| File | Change |
|------|--------|
| `app/index.html` | Meta, OG, Twitter, favicon link, Organization schema. |
| `app/src/App.tsx` | New structure: Hero → TrustStrip → PortfolioRouter → OperatingModel → PartnerSection → Contact. Removed OverviewSection & SubsidiaryShowcase. Scroll snap kept for hero only. |
| `app/src/sections/HeroSection.tsx` | New copy, primary/secondary CTAs, micro-proof, scrollToContact/scrollToPortfolio, tracking hooks. |
| `app/src/sections/TrustStrip.tsx` | **New.** Trust strip copy and layout. |
| `app/src/sections/PortfolioRouter.tsx` | **New.** Card grid, top 5 + “View full portfolio,” outcome/keyCapability, UTM links. |
| `app/src/sections/OperatingModel.tsx` | **New.** Detect / Evidence / Remediate. |
| `app/src/sections/PartnerSection.tsx` | **New.** Partner copy + “Request partner pack” CTA. |
| `app/src/sections/ContactSection.tsx` | New copy from `lib/copy`, response note, footer legal, success state, labels/ids, tracking. |
| `app/src/components/Navigation.tsx` | Primary CTA “Request partner pack” in nav, “How we operate” link, focus and tap targets. |
| `app/src/index.css` | Body font-size/line-height, btn-primary/secondary/ghost, input-base, focus-visible. |
| `app/src/lib/copy.ts` | **New.** TRUST_STRIP, OPERATING_MODEL, PARTNER_COPY, CONTACT_COPY, FOOTER_LEGAL, UTM_PARAMS, portfolioUrl. |
| `app/src/lib/subsidiaries.ts` | **New.** SUBSIDIARIES with outcome, keyCapability, category, order; PORTFOLIO_FEATURED_COUNT. |

**Unchanged but still in repo:** `SubsidiaryShowcase.tsx`, `OverviewSection.tsx` (no longer imported; can be removed in a follow-up if desired).

---

## G) QA Checklist (Final)

- [ ] **Mobile UX:** Hero, trust strip, portfolio cards, operating model, partner, contact readable and tappable on 320px–428px. Primary CTA visible in nav.
- [ ] **Accessibility:** Focus order and focus-visible rings on nav, hero CTAs, portfolio links, form fields, submit. Labels and IDs on contact form. H1/H2 hierarchy.
- [ ] **Performance:** Hero image eager; portfolio logos lazy. No layout shift from images (width/height set). Run Lighthouse (mobile).
- [ ] **Copy consistency:** No forbidden words (cutting-edge, revolutionary, synergy, etc.). One primary CTA across hero, nav, partner.
- [ ] **Link tracking:** UTM on all “Visit site” portfolio links. data-track / gtag events for hero, nav, partner, contact submit (wire to your analytics).
- [ ] **Contact form:** Success state and footer legal line render. Backend/API or Formspree to be wired separately.
- [ ] **SEO:** Title, meta description, OG/Twitter, Organization schema. Favicon added when asset exists.

---

## Why These Changes

1. **Clarity over hype:** Headlines and subs answer what it is, who it’s for, what outcome. Subsidiary copy is outcome + capability, not feature lists.
2. **One primary path:** “Request partner pack” is the only dominant CTA; portfolio and “Visit site” support rather than compete.
3. **Credibility:** Trust strip and “How the system works” add proof and rigor without overclaiming.
4. **Mobile-first:** Typography, spacing, and tap targets tuned for small screens; desktop scales up.
5. **Conversion-ready:** Single lead capture (contact form), UTM on outbound portfolio links, and analytics hooks for funnel measurement.
