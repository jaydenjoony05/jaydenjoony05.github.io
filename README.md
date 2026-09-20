# Jayden Park — creative portfolio

An image-led personal portfolio for fine art, digital design, and social graphics. Built with Astro, custom CSS, and a small amount of browser JavaScript. No React runtime, database, tracking, or third-party embeds.

## Status and launch gate

**Unpublished review build.** Wix and its domain remain unchanged. Deployment is disabled unless the repository variable `PAGES_PUBLISH_APPROVED` is explicitly set to `true` after Jayden approves launch. Do not add a CNAME, change DNS, or connect the existing domain without separate approval.

## Setup

Install Node.js 24 and pnpm 11.19.0, then:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro. For production verification:

```sh
pnpm build
node scripts/check.mjs
pnpm preview
```

Set `ASTRO_TELEMETRY_DISABLED=1` if desired. On macOS environments that restrict Astro's development server, the static build can also be previewed with `python3 -m http.server 4321 --bind 127.0.0.1 --directory dist`.

## Editing

- `src/pages/index.astro`: introduction, featured selection, homepage order.
- `src/data/projects.json`: all 20 project records. Each has a unique slug, title, category, description, source URL, and images. Preserve existing creative credits.
- `src/data/playground.json`: four organization collections containing 21 social graphics, roles, and corrected community links.
- `src/pages/about.astro`: biography, personal details, recognition. Personal photos can replace the temporary artwork figure once provided.
- `src/data/writing.json`: two archived posts. Dates and statements belong to their original 2024 context.
- `src/layouts/Layout.astro`: global navigation, contact links, metadata, and interaction behavior. Contact currently uses the existing LinkedIn profile. Add a verified public email and résumé link when provided.
- `src/style.css`: responsive design and palette. Navy `#1D3557`, pink `#F7A4AB`. The source palette image's swatch labels were reversed; RGB/hex values are retained as their actual colors.
- `src/data/source.json`: read-only migration inventory preserving original descriptions and Wix media references. Do not expose raw inventory as website navigation.

### Images

Locally stored WebP derivatives live in `public/images/`. Each source media ID has 600px and 1600px variants. `Picture.astro` selects responsive sources. New images should follow that convention or update the component to accept a different filename. `src/data/image-dimensions.json` records image sizes to reserve layout space.

Original sources remain on Wix. The site does not hotlink them. Keep original master artwork backed up separately. Do not commit private material. Updating images does not require modifying Wix.

### Project content

The site uses source-supported descriptions. Miracle Flights currently documents its six-month engagement and available interface screens; detailed personal responsibilities, research, process, and outcomes can be added when supplied. No metrics or research findings have been invented. Missing dates/mediums are omitted rather than guessed.

## Deployment after explicit launch approval

1. Review and merge the implementation into `main`.
2. In repository Settings → Pages, select **GitHub Actions** as the build source.
3. Only after approval, create repository Actions variable `PAGES_PUBLISH_APPROVED=true`.
4. Run “Validate and deploy portfolio” manually, or push an approved change to `main`.

The workflow builds, checks internal references and collection coverage, uploads the static artifact, and deploys only on `main` with the approval variable enabled. Pull requests only validate. Disable the variable to stop future deployments; this does not remove an already-published site.

The intended address is https://jaydenjoony05.github.io/ and uses root-relative routes (no repository-name prefix). No domain records or CNAME are configured. If a custom domain is approved later, update Astro's `site`, sitemap origin, robots.txt, and domain configuration together.

## Accessibility and interaction

Semantic page landmarks, one h1 per page, skip link, visible keyboard focus, labeled filter controls, and native modal dialogs. Escape closes artwork dialogs and returns focus to the opener. Collage cards can be moved with arrow keys, reset with Escape or Reset; the decorative drag behavior is disabled for touch scrolling. Reduced-motion preferences suppress animation. Content remains available without JavaScript; filters and enlargement are progressive enhancements.

## Attribution

Artwork/content migrated from Jayden's public Wix portfolio with permission. Existing credits remain on their project pages: Doug Pedersen inspiration, AJ&Smart credit, and the AI-assisted MoMA concept. INDPNT studio is retained as an archive project, not the current brand. DM Sans and DM Serif Display are self-hosted under the SIL Open Font License (see `public/fonts/`).
