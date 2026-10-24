// Builds the multi-page site from src/ (no dependencies).
//   node scripts/build.mjs                 → index.html, garden.html, … + assets/ at the repo root
//   node scripts/build.mjs --artifact DIR  → self-contained pages (CSS/JS inlined) in DIR;
//                                            DIR/index.html omits <!doctype>/<html>/<head>/<body>
//                                            for hosts that supply their own document skeleton.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = f => readFileSync(join(root, "src", f), "utf8");

const PAGES = [
  { id: "home", file: "index.html", title: "Where Heaven Meets Earth", nav: "Home" },
  { id: "garden", file: "garden.html", title: "The Garden-Temple · Where Heaven Meets Earth", nav: "Part I · The Garden-Temple" },
  { id: "serpent", file: "serpent.html", title: "The Serpent and the Seed · Where Heaven Meets Earth", nav: "Part II · The Serpent and the Seed" },
  { id: "babel", file: "babel.html", title: "Babel and the City of God · Where Heaven Meets Earth", nav: "Part III · Babel and the City of God" },
  { id: "connections", file: "connections.html", title: "Connections and Quiz · Where Heaven Meets Earth", nav: "Connections & Quiz" }
];

const css = read("styles.css");
const js = [read("data.js"), read("data-serpent.js"), read("app.js")].join("\n");
const header = read("partials/header.html");
const footer = read("partials/footer.html");
const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&family=Noto+Serif+Hebrew:wght@500&family=Noto+Sans+Cuneiform&display=swap">`;

function pager(i) {
  const prev = PAGES[i - 1], next = PAGES[i + 1];
  if (i === 0) return "";
  return `<nav class="pager" aria-label="Previous and next page"><div class="wrap">
  ${prev ? `<a class="pg prev" href="${prev.file}"><small>← Previous</small><b>${prev.nav.replace("&", "&amp;")}</b></a>` : "<span></span>"}
  ${next ? `<a class="pg next" href="${next.file}"><small>Next →</small><b>${next.nav.replace("&", "&amp;")}</b></a>` : `<a class="pg next" href="${PAGES[0].file}"><small>Back to the start →</small><b>Home</b></a>`}
</div></nav>`;
}

function page(p, i, inline) {
  const head = `<title>${p.title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="An interactive Bible study: the garden-temple, the serpent and the seed, and Babel, Babylon and the City of God.">
${fonts}
${inline ? `<style>\n${css}\n</style>` : `<link rel="stylesheet" href="assets/styles.css">`}`;
  const body = `<div class="page" data-page="${p.id}">
${header}
<main id="main">
${read(`pages/${p.id}.html`)}
</main>
${pager(i)}
${footer}
</div>
${inline ? `<script>\n${js}\n</script>` : `<script src="assets/app.js"></script>`}`;
  return { head, body };
}

const doc = ({ head, body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`;

const a = process.argv.indexOf("--artifact");
if (a > -1) {
  const out = process.argv[a + 1];
  mkdirSync(out, { recursive: true });
  PAGES.forEach((p, i) => {
    const parts = page(p, i, true);
    writeFileSync(join(out, p.file), i === 0 ? `${parts.head}\n${parts.body}\n` : doc(parts));
  });
  console.log("wrote self-contained pages to", out);
} else {
  mkdirSync(join(root, "assets"), { recursive: true });
  writeFileSync(join(root, "assets", "styles.css"), css);
  writeFileSync(join(root, "assets", "app.js"), js);
  PAGES.forEach((p, i) => writeFileSync(join(root, p.file), doc(page(p, i, false))));
  console.log("wrote", PAGES.map(p => p.file).join(", "), "+ assets/");
}
