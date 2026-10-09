# ZEUS --- MASTER BUILD PROMPT FOR KIMI K3

You are the lead product engineer, AI systems architect, UX engineer and
QA owner for ZEUS.

Your assignment is to BUILD a functional beta application, not a static
concept, landing page, slideshow, or visual-only prototype.

## PRODUCT

ZEUS is a commercial AI Business Operating System for professional DJs.

Positioning: "Your AI management team for the business behind the
booth." "YOU DJ. ZEUS RUNS THE BUSINESS."

The product must support multiple DJs. Each DJ receives an isolated
workspace containing their own brand, services, rates, clients, venues,
bookings, music preparation, creative workflow, invoices, finances,
integrations, permissions and operating rules.

Do not import founder-specific personal data into customer workspaces.
Founder/prototype data may be used only as seeded demo data.

## PRIMARY UX CONCEPT

ZEUS has TWO experiences backed by the SAME data and agent system.

### 1. DARK MODE --- ZEUS ORACLE

This is the signature mobile-first experience. Use
`assets/ZEUS_MOBILE_UX_REFERENCE.png` as the primary visual reference.

Keep the interface deliberately minimal: - Giant glowing
lightning/electricity orb is the primary interaction object. -
Monumental Zeus statue remains visible as in the reference. - Stormy
sky, lightning, dark charcoal/black environment, brushed/aged gold. -
Master ZEUS logo at top. - One microphone/voice control. - One compact
menu/drawer. - Avoid dashboard clutter on this home screen. -
Information should appear contextually only after the user asks ZEUS for
it, like an autonomous AI assistant. - Results should materialize as
elegant dark glass/holographic cards over the storm environment and
disappear/minimize cleanly. - Voice interaction exists ONLY in
Dark/Oracle Mode. - ZEUS should feel commanding, calm, intelligent and
ominous --- never cartoonish. - When ZEUS completes a task, animate
electricity through the orb/lightning environment and show a restrained
completion confirmation such as "Consider it done." - Respect
reduced-motion accessibility settings.

### 2. LIGHT MODE --- COMMAND CENTER

A marble-white, premium Greek-inspired executive dashboard. This is the
information-dense management interface. It must include: - Needs
Attention - Upcoming Bookings - Money Outstanding - Music Readiness -
Creative Schedule - Paid Revenue - Receivables - Subscriptions &
Expenses - Client / Venue Intelligence

Users can switch between Oracle and Command Center. Same account, same
data, same agents.

## BRAND

Use `assets/ZEUS_MASTER_LOGO_REFERENCE.jpg` as the authoritative ZEUS
brand-logo reference. The word is ZEUS. The E is creatively represented
by the lightning bolt. Do not substitute a different wordmark. Visual
language: - brushed aged gold - dark rustic charcoal/black - marble
white in Light Mode - Greek architectural restraint - premium cinematic
lighting - electricity/lightning as a functional feedback language Avoid
cheap "Greek mythology" clichés, excessive columns, cartoon lightning,
neon cyberpunk, or generic SaaS gradients.

`assets/ZEUS_LOGO_TRANSPARENT_REFERENCE.png` is an additional isolated
logo reference. `assets/ZEUS_DESKTOP_ORACLE_REFERENCE.jpg` shows the
broader desktop Oracle/Command concept.

## SIX AI ROLES

1.  ZEUS / Chief of Staff
2.  Booking Manager
3.  Music Director
4.  Creative Director
5.  Invoice Manager
6.  CFO

All six operate against ONE shared ZEUS CORE. Do not build six
disconnected chatbots with separate realities.

### ZEUS / Chief of Staff

Executive orchestrator. Routes work, summarizes priorities, coordinates
other agents and exposes approvals.

### Booking Manager

Inquiry capture, qualification, availability, rates, negotiation
boundaries, confirmation, event details, calendar and CRM.

### Music Director

Music brief, genres, energy curve, track/library analysis, crate
recommendations, client requests, do-not-play lists and readiness.

### Creative Director

Capture plan, edit queue, approval, publishing plan, Canva/content
workflow, brand consistency.

### Invoice Manager

Invoice creation, job matching, payment terms, deposits, discounts, FOC
documentation, reminders and payment status. Never changes the
commercial agreement.

### CFO

Paid revenue, receivables, expenses, subscriptions, profitability, cash
reporting, client economics and business intelligence.

## ZEUS CORE DATA MODEL

Create a real persistent data layer suitable for beta testing.

Core entities: - User - Workspace - DJ Business Profile - Agent -
Permission Rule - Integration - Integration Capability/Test - Client -
Venue - Inquiry - Job - Booking - Music Prep - Creative Task - Invoice -
Payment - Expense - Subscription - Approval - Activity/Audit Log -
Notification

All customer data must be workspace-scoped.

Every booking/job receives a unique Job ID such as: ZEU-26-0001

Canonical lifecycle: Inquiry → Booking → Music Prep → Content Prep →
Invoice → Payment → CFO Reporting

Every state transition should be visible in the audit/activity log.

## FOUNDER BASELINES --- DUBAI STARTER TEMPLATE

These are founder baselines, NOT universal market rates: - DJ
private/corporate: AED 2,000 - MC: AED 3,500 - Equipment rental floor:
AED 800 - DJ + MC: custom/calculated - Residencies:
contract-calculated - FOC: AED 0 received while preserving normal
commercial value and justification

During onboarding let users either adopt the starter template or enter
their own values. Rate settings should support normal rate,
floor/minimum, negotiation range, equipment, overtime, rush/travel
adjustments, deposits, payment terms and discount authority.

FOC must record: - normal commercial value - amount received = 0 -
justification/reason so free work is not invisible to business
intelligence.

## PERMISSIONS

Every meaningful action supports: - AUTO - APPROVAL REQUIRED - NEVER
AUTO

Recommended safe defaults: AUTO: internal task creation, Job IDs,
readiness/status calculations, draft generation. APPROVAL REQUIRED:
client messages, invoices, discounts, public content, booking-term
changes. NEVER AUTO: bank-detail changes, refunds, contract acceptance,
destructive financial actions, master-rate changes unless explicitly
configured.

Build an approval inbox with Approve / Edit / Reject.

## FIRST-RUN ONBOARDING

Create a polished wizard: 1. Welcome / Build My Team 2. DJ identity and
business profile 3. Logo / colors / brand 4. Location / timezone /
currency 5. Services 6. Rates and commercial rules 7. Approval rules 8.
Required connection setup 9. Optional connections 10. Test connections
11. Workspace ready

Required connection targets: - Gmail - Google Calendar - Notion -
Spotify - Canva

Optional: - Instagram / Meta - video editing - record pools -
Rekordbox/library data - media storage

## NON-NEGOTIABLE INTEGRATION LIFECYCLE

Every integration MUST use: REQUESTED → AUTHORIZED → READ TEST → WRITE
TEST → LIVE

Never mark an integration LIVE just because OAuth authorization
succeeded. LIVE means the required tests genuinely passed.

Display capability-level status where possible, for example: Google
Calendar: - Read availability - Create event - Modify event - Delete
event Each capability should expose actual availability/permission.

If an integration cannot actually be implemented in the current
environment, DO NOT FAKE IT. Show it as Unsupported, Coming Soon, Manual
Import, or Not Live as appropriate. Mock integrations must be visibly
labeled DEMO and can never transition to LIVE.

## VOICE / ORACLE BEHAVIOR

Dark Mode should support natural voice input/output when technically
available. If real voice is unavailable in the current runtime,
implement the UI and typed conversational fallback but clearly label
voice capability status. Never pretend a voice request executed an
external action unless it did.

Example requests: - "What's on my schedule this weekend?" - "How much
money am I owed?" - "Prepare an invoice for Soho Garden." - "What
content do I need to post?" - "How was my business this month?" - "Show
me my top clients this year."

ZEUS should route requests to the correct role and surface concise
contextual cards.

## FOUNDER / SUPER ADMIN CONSOLE

Create a private Founder Console for beta operations: - workspaces /
pilot DJs - onboarding completion - integration health - active jobs -
approval counts - errors - agent activity - feature usage - audit logs -
workspace suspension/deactivation - demo-data reset

Do not expose one DJ's data to another.

## PILOT EXPERIENCE

Design for 5--10 initial DJs. A pilot user should be able to: - create
an account - create their workspace - onboard their
brand/rates/services - configure permissions - see truthful integration
status - enter or receive an inquiry - convert it to a booking -
generate a Job ID - progress the job - prepare music/content - prepare
an invoice - record payment - see CFO reporting - interact with ZEUS in
Dark Mode - manage everything in Light Mode

## MOBILE / PWA

Mobile-first. Installable PWA if supported. Responsive desktop/tablet.
Dark Oracle should feel especially polished on iPhone-sized screens. Use
safe areas, large touch targets, keyboard-safe inputs, sensible bottom
sheets and drawers.

## SECURITY / TRUST

-   real authentication
-   workspace isolation
-   server-side authorization
-   secure secret handling
-   no API keys exposed client-side
-   audit external writes
-   destructive actions require appropriate confirmation/permission
-   never claim an external write succeeded without a successful
    response
-   meaningful error and retry states

## BUILD PRIORITY

P0: Authentication, workspace isolation, persistence, onboarding, Job
IDs, booking lifecycle, permissions, approval inbox, Light Command
Center, Dark Oracle UI, activity log.

P1: Real integrations that can be supported safely, invoice workflow,
CFO reporting, music/creative readiness, Founder Console.

P2: Voice refinement, optional integrations, advanced intelligence, PWA
polish.

## SEED / DEMO DATA

Provide an optional DEMO workspace so the UX can be explored
immediately. Clearly label demo data. Do not mix demo records into real
workspaces.

## ACCEPTANCE TESTS

Before saying "done", test: 1. Two separate DJ accounts cannot see each
other's records. 2. A new DJ can finish onboarding. 3. Custom rates
override founder baselines. 4. A Job ID is unique and persists. 5. A job
can traverse the canonical lifecycle. 6. Approval-required actions
cannot bypass approval. 7. NEVER AUTO blocks the action. 8. Integration
cannot display LIVE without required tests. 9. Invoice totals/payment
state persist. 10. CFO metrics reflect stored
bookings/payments/expenses. 11. Dark and Light modes read the same
underlying data. 12. Dark Mode works cleanly on mobile. 13. Completion
animation fires only after a genuine successful action. 14. Errors never
trigger a false "Consider it done." 15. Founder Console can inspect
system health without exposing cross-workspace customer content
unnecessarily.

## DELIVERY RULE

Work autonomously through implementation and QA. Do not stop at
wireframes. Ask me only when a genuinely external approval, credential,
OAuth consent, paid service choice, domain purchase, or irreversible
decision is required. When blocked by one integration, continue building
independent functionality. Maintain a clear checklist: DONE / WORKING
BUT NEEDS TEST / BLOCKED BY OWNER / NOT STARTED.

At the end provide: - runnable app - setup instructions -
environment-variable checklist - demo credentials or demo flow -
integration test matrix - known limitations - QA results against the 15
acceptance tests - deployment instructions - production-readiness gaps

Do not call the app production-ready unless those claims are verified.
