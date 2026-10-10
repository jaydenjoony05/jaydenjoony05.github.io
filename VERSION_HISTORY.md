# Saved design versions

The user named these versions on 2026-10-09. These names refer to immutable local Git tags, not the latest published site.

## Version 1 — `portfolio-version-1`
The complete design immediately before the desktop sidebar experiment. It includes:
- Original top navigation and “hi, I’m Jayden” hero on desktop and mobile.
- IBM Plex Mono accents on labels, artwork captions, filters, and supporting details.
- Original DM Sans hero description and size.
- Hero introduction raised 30px on desktop and 12px on mobile.
- Navy Drag Left label, pink arrow touching the left edge, and the latest label text sizing.
- All previously published Playground, cursor, and transition changes.

## Version 2 — latest checkpoint: `portfolio-version-2-r7`

Saved locally on 2026-10-10; not published. This is the default checkpoint for future requests to restore Version 2.

Includes the simplified sidebar with three initial highlights, hover-to-expand project list, session-persistent click expansion, hidden scrollbar, and expanded list filling available space. The introduction sits above the bottom contact link in IBM Plex Mono with tighter spacing. Includes the latest name/navigation sizes, section links landing 24px below the viewport top, and the LinkedIn “Let’s connect” link.

This checkpoint also tightens the gap between Experience and Selected fragments to 16px. The preceding checkpoint remains available as `portfolio-version-2-r2`.

The “[ JAYDEN PARK ]” label above the featured artwork now links to the About page. The prior spacing checkpoint remains available as `portfolio-version-2-r3`.

The About introduction is scaled down by 15% in typography, width, and spacing, with its body text then increased by 5%. The preceding checkpoint remains available as `portfolio-version-2-r5`.

The About opening is centered within the viewport below navigation, with its top padding subsequently reduced by 5% and then 10%. The previous checkpoint remains available as `portfolio-version-2-r6`.

### Latest refinements
- Layered section scrolling on Work and About, with regular scrolling on Playground and reduced-motion/mobile fallbacks.
- Extra space above incoming sections and after Pepper; wider side margins around Experience and Selected Fragments.
- Updated experience headings, descriptions, bullet text, captions, and vertical spacing; balanced headline wrapping.
- Refined Selected Fragments description, recognition, filter, and count typography.
- Pink Drag Left block with navy text and arrow, bottom-left alignment, and updated sizing/weight.
- Updated sidebar section numbers, Pepper cooking-challenge heading spacing/alignment, and smaller Playground/About navigation.

The checkpoint before these refinements remains available as `portfolio-version-2-r4`.

### Original Version 2 — `portfolio-version-2`
The first desktop sidebar design, based on Version 1. It adds the fixed desktop rail, introduction, project index, enlarged main artwork area, and keeps the familiar mobile navigation. The Playground transition also moves and hides the sidebar appropriately.

## Future requests
If the user says “Revert to Version 1”, restore the website to `portfolio-version-1`. If they request Version 2, use the latest checkpoint `portfolio-version-2-r7`. The original sidebar snapshot remains available as `portfolio-version-2`. Preserve unrelated user work and these version records. Inspect differences before restoring, and remove website files introduced after the requested snapshot when necessary (for example, Version 1 has no WorkSidebar.astro). Rebuild and validate the preview. Do not publish a version switch unless requested.

Never move or overwrite these tags. New experiments may continue in the working tree without changing these saved versions.
