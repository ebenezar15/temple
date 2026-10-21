// Inlines src/ into a single self-contained index.html (no dependencies).
// Usage: node scripts/build.mjs [--fragment out.html]
//   --fragment writes the page without <!doctype>/<html>/<head>/<body> wrappers,
//   for hosts that supply their own document skeleton.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = f => readFileSync(join(root, "src", f), "utf8");

const head = `<title>Where Heaven Meets Earth</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="An interactive Bible study: Eden as God's garden-temple, the Tabernacle, the Ark and the Temple; and Babel, Babylon and the City of God.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&family=Noto+Serif+Hebrew:wght@500&family=Noto+Sans+Cuneiform&display=swap">
<style>
${read("styles.css")}
</style>`;

const body = `${read("body.html")}
<script>
${read("data.js")}
${read("app.js")}
</script>`;

const full = `<!doctype html>
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

writeFileSync(join(root, "index.html"), full);
console.log("wrote index.html", (full.length / 1024).toFixed(1) + " KB");

const i = process.argv.indexOf("--fragment");
if (i > -1 && process.argv[i + 1]) {
  writeFileSync(process.argv[i + 1], `${head}\n${body}\n`);
  console.log("wrote fragment", process.argv[i + 1]);
}
