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
  { id: "kings", file: "kings.html", title: "Kings and Priests · Where Heaven Meets Earth", nav: "Part IV · Kings and Priests" },
  { id: "prophets", file: "prophets.html", title: "Prophets and the Fivefold · Where Heaven Meets Earth", nav: "Part V · Prophets and the Fivefold" },
  { id: "keys", file: "keys.html", title: "The Keys of the Kingdom · Where Heaven Meets Earth", nav: "Part VI · The Keys of the Kingdom" },
  { id: "sowing", file: "sowing.html", title: "Sowing and Reaping · Where Heaven Meets Earth", nav: "Part VII · Sowing and Reaping" },
  { id: "warfare", file: "warfare.html", title: "Spiritual Warfare · Where Heaven Meets Earth", nav: "Part VIII · Spiritual Warfare" },
  { id: "sons", file: "sons.html", title: "Heaven and Earth United · Where Heaven Meets Earth", nav: "Part IX · Heaven and Earth United" },
  { id: "connections", file: "connections.html", title: "Connections and Quiz · Where Heaven Meets Earth", nav: "Connections & Quiz" }
];

const css = read("styles.css");
const js = [read("data.js"), read("data-serpent.js"), read("data-kings.js"), read("data-prophets.js"), read("data-keys.js"), read("data-sowing.js"), read("data-supply.js"), read("data-warfare.js"), read("data-sons.js"), read("app.js").replace("/*@@KINGS@@*/", () => read("app-kings.js")).replace("/*@@PROPHETS@@*/", () => read("app-prophets.js")).replace("/*@@KEYS@@*/", () => read("app-keys.js")).replace("/*@@SOWING@@*/", () => read("app-sowing.js")).replace("/*@@SUPPLY@@*/", () => read("app-supply.js")).replace("/*@@WARFARE@@*/", () => read("app-warfare.js")).replace("/*@@SONS@@*/", () => read("app-sons.js"))].join("\n");
const jsAll = () => js + "\nwindow.SITE_INDEX = " + JSON.stringify(SITE_INDEX) + ";\nwindow.SITE_PAGES = " + JSON.stringify(PAGES.map(p => ({ id: p.id, f: p.file, nav: p.nav }))) + ";\n" + read("fx.js") + "\n" + read("study.js");
// Search index: every section of every page, for the search palette
const strip = h => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const SITE_INDEX = [];
PAGES.forEach(p => {
  const html = read(`pages/${p.id}.html`);
  for (const m of html.matchAll(/<section class="block[^"]*" id="([^"]+)"([^>]*)>([\s\S]*?)<\/section>/g)) {
    const toc = (m[2].match(/data-toc="([^"]*)"/) || [])[1];
    const h = (m[3].match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/) || [])[1];
    const eb = (m[3].match(/class="eyebrow"[^>]*>([\s\S]*?)</) || [])[1];
    if (!h && !toc) continue;
    SITE_INDEX.push({ f: p.file, p: p.nav, id: m[1], t: strip(h || toc), k: strip((toc || "") + " " + (eb || "")) });
  }
  for (const m of html.matchAll(/<div class="part-banner[^"]*" id="([^"]+)"[\s\S]*?<h2>([\s\S]*?)<\/h2>/g)) SITE_INDEX.push({ f: p.file, p: p.nav, id: m[1], t: strip(m[2]), k: "part overview" });
});
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
${inline ? `<script>\n${jsAll()}\n</script>` : `<script src="assets/app.js"></script>`}`;
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
  writeFileSync(join(root, "assets", "app.js"), jsAll());
  PAGES.forEach((p, i) => writeFileSync(join(root, p.file), doc(page(p, i, false))));
  console.log("wrote", PAGES.map(p => p.file).join(", "), "+ assets/");
}
