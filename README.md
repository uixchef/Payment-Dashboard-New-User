# Payments onboarding experience — setup guidance system

Product-led onboarding for HighLevel’s payments surface: activation, education, and a clear path to first value for users who have not yet transacted. This repository is the **new-user** half of a broader payments ecosystem redesign that pairs **contextual experiences** with **user maturity** — empty states and setup guidance here; operational metrics and day-to-day workflows in the active-user dashboard.

---

## Problem context

First-time users historically landed on **empty invoice and payment views** with little orientation. Core actions were hard to discover, terminology stacked up without narrative, and “what do I do next?” went unanswered. That raised time-to-first-transaction, increased support-style confusion, and undermined trust in payments as a complete product area rather than a scattered set of screens.

---

## What this repo covers

- The **new user onboarding experience** for payments: welcome, guided setup, education, and ecosystem discoverability.
- **Zero-transaction users** — accounts with no meaningful payment activity yet (and typically no completed payment configuration).
- **Not** the active-user operational dashboard (volume, reconciliation, day-to-day monitoring). That lives in a sibling repository (see [Related repositories](#related-repositories)).

---

## Core experience design

| Pillar | What it does |
|--------|----------------|
| **Three-step setup** | A sequenced path (e.g. connect providers → create sellable offers → test the flow) that turns abstract “payments” into concrete next actions. |
| **Guided onboarding checklist** | Visible progress (e.g. steps completed) so users sense momentum and know what remains. |
| **Education** | Short-form help embedded in the flow: demo video, documentation links, and contextual copy so learning happens **while** configuring, not in a separate tutorial silo. |
| **Discoverability grid** | A structured map of the payments suite so users see the full ecosystem (invoicing, products, checkout, etc.) and land in the right tool after setup. |

Together, these turn the first visit from a dead end into a **guided activation loop**.

---

## Product thinking

- **Reduce time-to-first-transaction** — every screen earns its place by moving setup forward or removing ambiguity.
- **Teach while guiding** — copy, tooltips, and media sit next to the actions they explain; onboarding is not a one-time wizard disconnected from real work.
- **Encourage activation through actions** — primary paths are tasks (connect, create, verify), not passive reading lists.
- **Maturity-aware context** — the wider redesign introduces a **contextual system** that adapts as users gain transactions and configuration; this repo owns the **pre-activation** slice of that spectrum.

---

## UX decisions

- **Step-by-step progression** — order reflects dependencies (you cannot meaningfully “go live” before providers and offers exist).
- **Inline CTAs** — each step exposes a single obvious action; secondary paths stay available without competing for attention.
- **Helper text and tooltips** — reduce jargon and answer “why this step” without opening a separate help center tab.
- **Visual hierarchy** — welcome and setup read as one story: headline → supporting line → action; the grid reads as exploration, not a second primary funnel.
- **Cognitive load** — three steps, one progress model, limited parallel noise so new users are not overwhelmed by the full product at once.

---

## System behavior

**New-user detection (conceptual contract)**

- **No transactions** — no completed payment activity that indicates a live funnel.
- **No payment setup** — providers, products, or configuration incomplete in a way that blocks first value.

When those conditions clear (transactions and/or completed setup per product rules), the experience **transitions** to the **active user dashboard** — metrics, monitoring, and operational workflows rather than setup guidance.

*Exact thresholds and API fields are defined in the payments platform and PRD; implement gates against those contracts in app and data layers.*

---

## System architecture

- **Modular onboarding components** — welcome, checklist/setup, and suite discovery compose a single page without entangling shell navigation.
- **Configurable steps** — step definitions, labels, and deep links should remain data- or config-driven so product can reorder or extend without a full rewrite.
- **State tracking for completion** — progress (e.g. steps done / total) syncs from backend or client state so the UI reflects truth across sessions and devices.

Implementation in this codebase centers on composable sections under `components/payment-hub/` and a dedicated route under `app/payment-hub/`, wrapped by a shell layout for consistent chrome.

---

## Scalability

- **New onboarding steps** — add a step definition, wire CTA routes, and extend completion logic; avoid hardcoding “three” in business rules if the product grows beyond three milestones.
- **New payment capabilities** — the discoverability grid and copy layers can absorb additional tiles or categories as the ecosystem expands.
- **Shared maturity model** — alignment with the active-user repo keeps one mental model: **setup → operate**, with clear handoff.

---

## Tech stack

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS, Radix primitives, shadcn-style UI components
- **Icons:** Lucide React
- **Language:** TypeScript
- **Node:** v22+ (see `engines` in `package.json`)

---

## Developer experience

- **Reusable onboarding modules** — sections are isolated components (welcome, get started, quick links) for reuse and testing.
- **Config-driven step system** — prefer step metadata (id, title, description, href, completion key) over duplicating markup per step.
- **Clear separation** — onboarding UI stays distinct from shell/navigation concerns where possible, so experiments on copy or layout do not ripple through the app shell.

---

## Setup instructions

```bash
# From the repository root (this app)
cd my-app
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:3000`) and navigate to the payment hub route implemented in `app/payment-hub/`.

```bash
npm run build   # production build
npm run start   # run production server locally
npm run lint    # eslint
```

---

## Folder structure

```text
my-app/
├── app/
│   ├── payment-hub/
│   │   ├── layout.tsx      # shell wrapper for the hub
│   │   └── page.tsx        # composes onboarding sections
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── payment-hub/        # onboarding + hub chrome (welcome, get started, quick links, shell, sidebar, topbar)
│   └── ui/                 # shared primitives (button, input, etc.)
├── lib/                    # utilities (e.g. classnames)
└── package.json
```

---

## Screenshots / demo

Add:

- A full-height capture of the **payment hub** onboarding page (welcome + three-step setup + suite grid).
- Optional: a short screen recording walking through **connect → create → verify** and landing on the first success state.

*Replace this subsection with assets when publishing externally; keep alt text descriptive for accessibility.*

---

## Related repositories

- **Active user dashboard** — operational metrics and day-to-day payments workflows for users post-activation.

Explore the operational dashboard → [INSERT ACTIVE USER REPO LINK]

---

## Future enhancements

- **Personalized onboarding** — tailor step order or emphasis by industry, region, or existing CRM data.
- **AI-guided setup** — conversational troubleshooting and “next best action” tied to account state and errors.
- **Dynamic recommendations** — promote relevant payment features as usage patterns emerge, still respecting the maturity split between this repo and the active dashboard.

---

## License

Proprietary — internal HighLevel use only. Unauthorized copying, distribution, or use outside the organization is not permitted.
