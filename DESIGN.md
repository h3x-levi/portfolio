---
name: Akshay Mondal
description: A one-page portfolio told in the notch language of macOS and Dynamic Island, on a drenched ultramarine field.
colors:
  field: "#2f3dff"
  ink: "#0b0b0d"
  ink-2: "#17171c"
  ink-line: "rgba(255, 255, 255, 0.09)"
  paper: "#f3f3f1"
  soft: "#d6daff"
  dim: "#a3a3ad"
  ink-body: "#c9c9d1"
  ink-strong: "#d4d4da"
  live: "#ff5ca8"
typography:
  display:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4.25rem, 13.4vw, 19rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  display-italic:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4.25rem, 13.4vw, 19rem)"
    fontWeight: 300
    lineHeight: 0.86
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.6vw, 9rem)"
    fontWeight: 780
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 3.75rem)"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 116"
  title-sm:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    fontWeight: 650
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  body-lg:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    fontVariation: "'wdth' 104"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    letterSpacing: "0"
    fontFeature: "'tnum' 1"
rounded:
  pill: "999px"
  island: "32px"
  notch: "22px"
  inner: "20px"
  capture: "18px"
  thumb: "12px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 6rem)"
  section: "clamp(5rem, 9vw, 8.5rem)"
  island-pad: "clamp(1.5rem, 2.4vw, 2.25rem)"
  island-gap: "clamp(0.75rem, 1.2vw, 1.125rem)"
  pill-gap: "0.625rem"
components:
  island:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.island}"
    padding: "{spacing.island-pad}"
  pill-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "3rem"
  pill-line:
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "3rem"
  pill-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "3rem"
  chip:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0 0.75rem"
    height: "1.875rem"
  work-label:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.soft}"
    rounded: "{rounded.pill}"
    padding: "0 0.6rem"
    height: "1.5rem"
  act:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem 0 0.6rem"
    height: "4.25rem"
  notch:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    width: "292px"
    height: "40px"
  notch-link:
    textColor: "{colors.dim}"
    rounded: "{rounded.pill}"
    padding: "0 0.9rem"
    height: "2.5rem"
  notch-link-active:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
  route-tab-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.25rem"
---

# Design System: Akshay Mondal

## Overview

**Creative North Star: "The Live Activity"**

The page speaks the interface language of a notch: black islands that grow, split, merge and dock on a drenched ultramarine wallpaper. There is one field color and one container. Every section sits directly on the field; every grouped thing (a project, a role, a certification, a control) is a near-black island, either a pill or a continuously rounded slab. Islands carry no hue of their own. Color arrives only at their edges, as a rim light, and pink appears only where something is live.

Type does the heavy lifting. A single variable sans runs the full width axis, from condensed to very wide, and that axis is part of the motion: names stretch in on load and capability verbs widen on hover. The display sizes are huge and tight, set as one wide heavy word over one italic light word. Mono is a narrow tool, kept to dates and project stacks.

Motion is spring-based and always lands on a still, readable state. The page boots with a device that morphs from phone to laptop to desktop, the camera enters its screen, and the notch docks at the top. A project island opens in place into its case study while its siblings reflow. In the hero, a glossy WebGL liquid notch sheds droplets and follows the cursor. Every one of these steps aside under reduced motion.

**Key Characteristics:**
- One field (ultramarine), one container (ink island), one live accent (pink).
- Pills for controls and compact rows; 32px islands for content.
- Achromatic islands with a gradient rim light; a pink rim only on live islands.
- Mona Sans variable across weight 200 to 900 and width 75 to 125; display pairs wide 800 with italic 300.
- Geist Mono only for dates and project stacks.
- Spring `linear()` easing on every transform; every staged animation ends on a still state.

## Colors

A drenched, high-chroma blue field holding achromatic near-black islands, with one hot pink kept for live state.

### Primary
- **Ultramarine Field** (field): the page itself. Every section background, the boot screen, the browser theme color, the scrollbar track. It is never a container fill and never a text color.

### Tertiary
- **Live Pink** (live): the "something is happening now" signal. Allowed only as the live dot, the waveform bars, the typing caret in the dictation demo, the boot progress hairline, the pink rim on an island that contains a live dot, and the pink environment light reflected in the WebGL liquid notch. It is never body text, never a fill larger than a dot or bar, and never text on the field (2.27:1 there).

### Neutral
- **Notch Ink** (ink): every island, pill, the notch, the boot device bezel. Text selection on the field also uses it.
- **Raised Ink** (ink-2): surfaces inside an island: chips, icon wells, thumbnail wells, the hovered or current notch link.
- **Ink Hairline** (ink-line): 1px inset outlines on chips and captures inside islands, and dividers within an island.
- **Paper** (paper): primary text on both field and ink, the paper pill, the selected tab thumb, the focus ring on the field.
- **Soft Blue** (soft): secondary text on the field (ledes, sub-copy, footer), labels inside islands, the focus ring inside islands. Field dividers are this color at about 0.3 alpha.
- **Ink Body** (ink-body): long-form body copy inside islands.
- **Ink Strong** (ink-strong): chip text, case-study paragraphs and footer links inside the contact island.
- **Dim** (dim): tertiary text and resting nav links, used only on ink (7.87:1). On the field it falls to 2.6:1.

### Named Rules
**The One Field Rule.** The ultramarine field owns every section. No section switches to a dark, light or tinted background; contrast changes happen by placing an island, not by repainting the page.

**The Live Only Rule.** Pink marks live state and nothing else. If nothing on the island is live, there is no pink on it.

**The Achromatic Island Rule.** Islands are ink. Hue enters only through the rim light and through the real captures shown inside them.

## Typography

**Display Font:** Mona Sans, self-hosted variable (with ui-sans-serif, system-ui)
**Body Font:** Mona Sans
**Label/Mono Font:** Geist Mono, self-hosted (with ui-monospace, SFMono-Regular, Menlo)

**Character:** One variable family carries every voice, from 19rem wide display to 0.8rem notch labels, by moving width and weight together. Geist Mono is a quiet tabular counterpoint for numbers and stacks.

Both Mona Sans faces declare `font-weight: 200 900` and `font-stretch: 75% 125%`; the width axis is set with `font-stretch`, never with synthetic scaling.

### Hierarchy
- **Display** (800, width 125, clamp(4.25rem, 13.4vw, 19rem), 0.86): the hero name, first word. The second word is italic 300 at width 112, indented. The contact title uses the same pairing at clamp(3.5rem, 11vw, 15rem).
- **Capability verb** (800, width 100 widening to 125 on hover, clamp(4rem, 10.5vw, 13rem), 0.85): the big verbs in the capabilities rows; the middle row is italic 300.
- **Headline** (780, width 118, clamp(2.75rem, 6.6vw, 9rem), 0.92): section titles, with the closing word in italic 300 at width 108.
- **Title** (760, width 116, clamp(1.875rem, 3vw, 3.75rem), 1): project island titles. Role titles sit near it (740, width 114).
- **Title small** (650, width 112, clamp(1.5rem, 2.4vw, 2.125rem)): group headings over island grids, with a 0.9375rem soft-blue aside.
- **Body large** (400, clamp(1.0625rem, 1.4vw, 1.25rem)): ledes and sub-copy in soft blue, capped at 52ch. Bio paragraphs and role bullets run larger (up to 2rem / 1.9rem).
- **Body** (400, 1.0625rem, 1.55; 1rem under 760px): default text.
- **Label** (600, width 104, 0.9375rem): pill text. Notch labels are 0.8125rem.
- **Mono** (400, 0.78rem, tabular figures): dates and project stacks.

### Named Rules
**The Wide Over Italic Rule.** Display moments pair one wide heavy word (800, width 118 to 125) with one italic light word (300, width 108 to 112). Never set a whole display line italic or a whole line light.

**The Mono Is For Numbers And Stacks Rule.** Geist Mono appears only on dates (periods, year ranges, the "now" marker) and on the technology chips of a project case study. Role skill chips and capability chips override the chip to the sans. Mono is never used for headings, labels or decoration.

**The Width Is Motion Rule.** The width axis is a motion channel: the hero name stretches in from width 75, capability verbs widen to 125 on hover. Animate `font-stretch` with the spring; never fake it with `scaleX`.

## Layout

A full-bleed field with content held in a wrap that is full width up to 2560px and padded by the gutter, clamp(1.25rem, 4vw, 6rem). Sections breathe with vertical padding of clamp(5rem, 9vw, 8.5rem).

The hero fills at least the taller of 100dvh and 720px, with its copy anchored to the lower left: builder line, two-line name, sub, two pill CTAs, then a row of four project act pills (columns 1.25fr 1.25fr 1fr 1fr). The WebGL notch occupies the upper right.

Project islands sit on a 12-column grid with a gap of clamp(0.75rem, 1.2vw, 1.125rem). Each island declares its own span and minimum height. An open island takes the full row (`1 / -1`) and its siblings reflow around it. Inside an open case, copy and media split 5fr / 7fr. Two-column rows (about, role, education, certifications, languages) use 5fr / 7fr or 4fr / 8fr splits. Lists on the field are separated by soft-blue hairlines at 0.28 to 0.3 alpha, not by cards.

Responsive behaviour:
- **Above 1700px:** certifications go to three columns; act pills grow to 5rem.
- **Up to 1100px:** every project island spans all 12 columns at 26rem minimum; act pills go two by two; case, about, role and capability rows stack.
- **Up to 760px:** body drops to 1rem. Act pills become a horizontally scrolling, snap-aligned strip that bleeds to the edge (each 82% wide). The open notch grows to min(92vw, 360px) by 236px with stacked links. The tablist goes two by two at a 28px radius, and the sliding thumb is replaced by a paper fill on the selected tab. Certifications, education and languages go single-column; the certificate pill's radius drops to 28px.

## Elevation & Depth

Depth comes from ink islands lifting off the blue field. Shadows are tinted with a deep field blue (rgba(6, 10, 92, …)), so they read as the field darkening under the island, never as grey. Each island carries a 1px inner top highlight and a rim light. Captures inside islands cast black shadows and carry a 1px ink-line ring.

### Shadow Vocabulary
- **Island** (`box-shadow: 0 1px 0 rgba(255, 255, 255, 0.07) inset, 0 28px 56px -28px rgba(6, 10, 92, 0.75)`): every island and the lightbox buttons.
- **Ink pill lift** (`box-shadow: 0 18px 36px -18px rgba(6, 10, 92, 0.9)`): the ink pill on the field.
- **Open notch** (`box-shadow: 0 30px 60px -24px rgba(6, 10, 92, 0.9)`): the notch only while expanded.
- **Capture** (`box-shadow: 0 40px 70px -30px rgba(0, 0, 0, 0.95), 0 0 0 1px var(--ink-line)`): screenshots inside islands. The Olivia stack and phone shots use softer 24px and 30px variants.

### Rim Light
A 1px masked gradient ring sits over every island: `linear-gradient(170deg, rgba(214, 218, 255, 0.55), rgba(47, 61, 255, 0.35) 28%, transparent 60%)`. It is brightest on the upper left and fades out before the lower right. An island containing a live dot adds a pink highlight from the upper right: `linear-gradient(200deg, rgba(255, 92, 168, 0.7), transparent 38%)`.

### Named Rules
**The Rim Not Fill Rule.** Color lives at the island's rim, never in its fill. To mark an island as different, change its rim; do not tint its background.

**The Blue Shadow Rule.** Shadows that fall on the field are field-blue (rgba(6, 10, 92, …)). Black shadows are only for captures sitting on ink.

## Shapes

Two silhouettes. The **pill** (999px) for every control and compact row: CTAs, chips, act islands, certificate rows, notch links, the tablist and its thumb, tool tags. The **island** (32px) for content: project islands, prior roles, education. The contact island scales its corners from 32px to 64px with the viewport. Inside islands, nested surfaces step down: inner panels 20px, captures 18px (14px for the tilted dashboard and editor shots), thumbnails 12px. The notch is flat on top with 22px lower corners, opening to 30px. The portrait is framed as a device: a 40px outer island, a 30px photo, and a small notch cutout holding a live dot. Icon wells, the plus button, certificate logos and lightbox buttons are full circles.

Several island-like radii (24px education, 26px prior roles, 28px small-screen tabs and certificates) sit close to the island step rather than on it.

## Components

### Buttons (pills)
Tactile, springy and plain: no gradients, one weight.
- **Shape:** full pill (999px), 3rem tall, 1.375rem side padding, 0.6rem icon gap.
- **Ink pill:** ink fill, paper text, ink-pill lift shadow. The primary action on the field ("See the work").
- **Line pill:** transparent with a 1.5px inset ring of paper at 0.6 alpha; on hover the ring goes solid and a paper wash at 0.08 alpha fills in. Used for the secondary action and the contact icon buttons (3.75rem circles).
- **Paper pill:** paper fill, ink text. Used for the strongest action on ink (the case-study Close, the notch's email link).
- **Hover / Active:** ink and paper pills lift 2px; every pill presses to scale(0.96). Transforms use the spring at 0.5s; colors cross-fade at 0.2s.
- **Focus:** 2px outline at a 3px offset, paper on the field and soft blue inside islands.

### Chips
- **Style:** raised-ink pill, 1.875rem tall, a 1px ink-line inset ring, ink-strong text in Geist Mono 0.75rem. These are project stacks.
- **Sans variant:** role skill chips and capability chips switch the same pill to the sans (0.8125rem to 0.9375rem; capability chips sit on ink at 2.5rem).
- **Work label:** a 1.5rem raised-ink pill in soft blue, used for honest qualifiers on an island (for example, a synthetic-data note).

### Cards / Containers (islands)
- **Corner Style:** 32px (island), or pill for compact rows.
- **Background:** ink only.
- **Shadow Strategy:** the Island shadow plus the rim light (see Elevation & Depth).
- **Border:** none; the rim light replaces it.
- **Internal Padding:** clamp(1.5rem, 2.4vw, 2.25rem).

### Navigation (the notch)
A fixed ink notch at the top center, 292px by 40px, flat on top with 22px lower corners. During boot it waits above the viewport and drops in with the bouncy spring when docked. The bar holds the Olivia mascot sprite, a label that names the current section and blurs in on change, the live waveform and a chevron toggle. Opened, it grows to 112px tall (236px on small screens) and reveals a row of pill links: resting links are dim, and the hovered or current link is paper on raised ink. The email link is a paper pill. Escape or a click outside closes it and returns focus to the toggle.

### Project Island (signature)
A compact island showing a title, a one-line description, a meta row, a raised-ink plus button and staged art (tilted captures, a phone fan, or the dictation demo). On hover the art fans out and the plus turns 90 degrees. The whole face is one button. Activating it runs a view transition: each island has its own `view-transition-name`, the group animates over 0.62s on the spring, and the opened island expands to the full row while its siblings reflow. The open case shows copy, steps, stack chips and links beside a media panel (an inner-radius well with thumbnails marked by `aria-pressed`). Focus moves to Close on open and back to the island on close, and Escape closes it unless the lightbox is open.

### Act Pills (hero)
4.25rem ink pills with a 3rem circular icon well (mascot sprite or SVG icon), a bold name and an ellipsised line, plus a live dot when the project is live. They unfold from scaleX(0.3) in sequence after boot and open the matching project island.

### Route Tablist (experience)
A pill island holding four tabs with `role="tablist"`. A paper thumb slides under the selected tab on the spring (0.6s), and the selected label turns ink. Arrow keys, Home and End move the selection and focus. The panel is `role="tabpanel"`, focusable and labelled by its tab, and rises in on change.

### Lightbox
A native `<dialog>` opened with `showModal()`, so it brings its own focus trap, Escape handling and inert background. The backdrop is a dark field tint (rgba(8, 10, 40, 0.86)) with a 14px blur. The figure pops in on the spring, the image is capped at 80vh with an 18px radius, and close, previous and next are ink circle buttons with the Island shadow. The page scroll locks while it is open.

### Boot Loader (device morph)
A full-field overlay with `role="progressbar"` and a live value. An ink device morphs on the spring: a phone with a pill cutout, then a laptop with a notch and a deck, then a desktop with a dot camera, a neck and a foot. A caption names each stage and a 2px pink hairline fills with real font and image loading (at least 2.3s, at most 4s). Then the screen scales up 9 times as the camera enters it, the overlay goes transparent, and the notch docks. While booting, `<html>` locks scroll and the skip link, `<main>` and the footer are `inert`. The loader is skipped under reduced motion, on deep links with a hash, and after the first visit in a session.

### Liquid Notch (WebGL)
A full-hero canvas that ray-marches a glossy ink rounded slab merged with drifting droplets and a cursor-following blob (smooth minimum). Its environment reflects the field blue, white highlights and one pink light. It rises in once booted, follows a fine pointer and drifts on its own otherwise, sinks as the page scrolls, and pauses when off-screen or when the tab is hidden. Device pixel ratio is capped at 1.25 (1 under 760px). If WebGL is unavailable or the context is lost, a static ink pill with a gradient highlight takes its place. The canvas is decorative and `aria-hidden`.

### Motion grammar
- **Spring** (`--spring`, a `linear()` curve with about 1.7% overshoot): every transform, size, radius and width-axis change, plus view-transition groups.
- **Bouncy spring** (`--spring-bouncy`, about 16% overshoot): only entrances that should land with weight, namely the device appearing and the notch docking.
- **Ease out** (`cubic-bezier(0.16, 1, 0.3, 1)`): opacity, blur and rise reveals.
- Reveals start from translateY(24 to 32px) and blur(6px). Content is visible by default, and motion is applied only once script confirms it.
- The contact island grows out of a notch shape through a scroll-linked `clip-path`, only where `animation-timeline: view()` is supported and motion is allowed.
- **Reduced motion:** the loader is skipped, the WebGL notch renders one still frame, view transitions and smooth scrolling are bypassed, the typing demo is static, the scroll-linked clip is not applied, and a global rule collapses every remaining animation and transition to 0.01ms with a single iteration.

## Do's and Don'ts

### Do:
- **Do** put every section directly on the ultramarine field and every grouped thing in an ink island.
- **Do** use the pill (999px) for controls and compact rows, and the 32px island for content.
- **Do** give every new island the Island shadow and rim light; give it the pink rim only if it holds a live dot.
- **Do** set display moments as one wide 800 word over one italic 300 word, with negative tracking (-0.04em).
- **Do** move `font-stretch` and transforms on `--spring`; reserve `--spring-bouncy` for weighty entrances.
- **Do** end every staged animation on a still, readable state, and give each one a reduced-motion path that skips it.
- **Do** separate list rows on the field with soft-blue hairlines (about 0.3 alpha), and rows inside islands with ink-line.
- **Do** use native semantics for interactive patterns: `<dialog>` with `showModal()`, the ARIA tablist with arrow, Home and End keys, and `inert` on anything not yet reachable.
- **Do** credit CX ArtLab wherever the Olivia mascot appears as a character.

### Don't:
- **Don't** repaint a section in a dark, light or tinted background; the field is the only page color.
- **Don't** tint an island's fill to mark it; change its rim.
- **Don't** use pink for anything that is not live, or as text on the field.
- **Don't** use dim (#a3a3ad) text on the field; it is for ink only.
- **Don't** use Geist Mono for headings, labels, eyebrows or decoration; keep it to dates and project stacks.
- **Don't** fake width with `scaleX` on type; use the font's width axis.
- **Don't** cast grey or black shadows onto the field; field shadows are field-blue.
- **Don't** let WebGL or the loader gate content: the page must read with neither.
