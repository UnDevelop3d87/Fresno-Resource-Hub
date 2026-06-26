# Five59ineHub™ — Fresno Resource Hub™

One Hub. Every Resource. We Got You!

A single-file community resource directory for Fresno County residents. Lists local
organizations, events, and the Fresno City Council districts with meeting links.

-----

## ⚠️ Most important rule: the filename

The file **MUST** be named **`index.html`** — lowercase `i`.

A capital `Index.html` is why the site showed “Page not found.” Netlify (and almost every
host) serves the homepage from lowercase `index.html` only. Do not rename it.

-----

## How to deploy (Netlify drag-and-drop)

1. Put `index.html` in a folder on your computer (e.g. a folder named `five59inehub`).
1. Go to <https://app.netlify.com> and log in.
1. Open your site’s **Deploys** tab — or, for a new site, “Add new site” → “Deploy manually.”
1. **Drag the folder (or the raw `index.html`) onto the drop zone.** Do NOT zip it.
1. Wait ~10 seconds. Netlify publishes and shows your live `*.netlify.app` URL.

Dropping a new deploy replaces the current one — that’s intended, since the old file was broken.

### Custom domain (fivefiveninehub.com)

The `.netlify.app` URL works instantly. The custom domain only works once it’s:

- added under Netlify → Domain settings, AND
- pointed at Netlify from Porkbun (DNS).
  Test the `.netlify.app` URL first.

-----

## What’s in this version

- 17 organizations, verified — no duplicates.
- A photo banner on every organization card (built-in images — they never 404).
- **City Council** page: all 7 Fresno districts, each with District Page, Meetings &
  Agendas, and Watch Live (CMAC) links, plus a meeting-schedule banner.
- All broken links fixed.
- Donations: Cash App `$FresnoResourceHub` and Venmo `@fresnoresourcehub`.
- AHH Soul Line Dance: Mondays 6–8 PM, 770 Event Center.

-----

## Things you can update later (search the file for these)

- **Social media URLs** — search for `TODO: replace href="#"`. Paste your real
  Facebook/Instagram/TikTok/YouTube links there.
- **Council members** — search for `const DISTRICTS`. Update names after elections.
- **Organizations** — search for `const RESOURCES`. Add entries in the same `{name:..., ...}` format.
- **Events** — search for the events array (each has `title`, `description`, `start_at`, `location`).

After any edit, save and re-deploy (drag the folder to Netlify again).

-----

## Editing safely

This is one self-contained HTML file: HTML + CSS + JavaScript together, no build step.

If you edit the JavaScript, check it for typos before deploying. A single broken bracket
can blank the page. If the site ever loads blank after an edit, undo your last change.

-----

## Contact aliases used in the site (Mailfence plus-addressing)

- General / report updates: `fresnoresourcehub+info@mailfence.com`
- Partnerships / list a program: `fresnoresourcehub+TeamUp@mailfence.com`
- Accessibility / help: `fresnoresourcehub+help@mailfence.com`

-----

© 2025–2026 Five59ineHub™. All rights reserved. An independent, non-governmental
community organization. For Fresno County residents only.
Five59ineHub™, be PRESENT, the logo and slogans are trademarks of Five59ineHub™.