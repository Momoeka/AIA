# AIA Surveyors — Image Prompt Pack

The site currently ships with **generic survey/field photos** reused from the
Shahi Survey project (no Shahi branding is visible in them — they are plain
field/instrument/infrastructure shots). They look good, but for a true
"$10B" bespoke feel you can replace them with AIA-specific renders.

## How to use
1. Generate each image from the prompt below (Midjourney / DALL·E / SDXL / etc.).
2. Save it with the **exact filename** listed.
3. Drop it into `public/images/` (overwrite the placeholder).
4. No code changes needed — filenames already wired into the site.

## Global art direction (paste into every prompt)
> Cinematic, photoreal, professional land-surveying photography. Cool blue
> accent lighting (#2E7DFF), deep near-black background tones (#0B0E14),
> crisp natural daylight on subject, shallow depth of field, high detail,
> editorial/architectural-magazine quality, no text, no logos, no watermarks,
> 16:9 unless noted.

---

### `hero.png`  — 1920×1080 (landscape, primary hero)
A lone surveyor in a hi-vis vest operating a yellow total station on a tripod
at golden hour, on a wide infrastructure site (highway embankment or open
plain). Long shadows, dramatic sky, instrument sharp in foreground, blueprint-
blue rim light. Space on the lower-left for headline text. Premium, aspirational.

### `mobile-hero.png` — 1080×1920 (portrait crop of the same scene)
Same surveyor + total station, vertical composition, instrument lower-third,
sky filling the top half. Optimised so the subject reads on a phone screen.

### `about-1.png` — 1200×1500 (portrait)
Two-person AIA crew on site reviewing a tablet/field controller beside a DGPS
rover pole. Realistic Indian infrastructure backdrop, focused and competent,
documentary feel.

### `about-3.jpeg` — 1600×1200 (landscape) — used in "Industrial & As-Built"
Surveyor capturing an as-built of a completed industrial structure or
plant/bridge — instrument in foreground, steel/concrete structure behind,
overcast precision light.

### `work-road.jpeg` — 1600×1200
DGPS/total-station survey along a new highway corridor; centre-line pegs,
chainage marks, road stretching to horizon.

### `work-topo.jpeg` — 1600×1200
Topographical survey over open/undulating terrain or a rail corridor; surveyor
with level instrument, contoured ground, distant horizon.

### `work-hydro.jpeg` — 1600×1200
Water-resource survey — canal, reservoir embankment or riverbank — crew taking
cross-sections, water body in frame.

### `work-power.png` — 1600×1200
Pipeline / power / utility corridor survey — trench or pipeline RoW, alignment
markers, industrial-energy mood.

### `work-construction.png` — 1600×1200
Building-layout setting-out on a foundation/plinth — surveyor marking grid lines
and column centres on a real construction site.

---

## Optional bespoke upgrades (not yet referenced — add + wire if you want)
- `work-railway.jpeg` — dedicated railway track-alignment survey (currently
  `work-topo.jpeg` stands in for the Railways sector card).
- `work-pipeline.jpeg` — dedicated gas-pipeline trench survey (currently
  `work-power.png` stands in for the Pipelines sector card).
- `og-banner.png` — 1200×630 social/Open-Graph card with the AIA logomark and
  tagline "Precision on Every Terrain" on a dark survey-grid background.

> If you generate these two extras, tell me and I'll repoint the Sectors cards
> (`src/components/Sectors.tsx`) to the new, more accurate filenames.
