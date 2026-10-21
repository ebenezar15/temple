# Where Heaven Meets Earth

An interactive, animated Bible study in two parts:

- **Part I: The Garden-Temple.** Eden as God's sanctuary on his mountain, Adam as priest-king, the Tabernacle as a portable Eden, the Ark of the Covenant and its journey, Solomon's Temple, and the New Jerusalem as Eden fulfilled.
- **Part II: Babel, Babylon and the City of God.** The Tower of Babel as a Mesopotamian ziggurat, the three layers of Babel's rebellion, the *shem* ("name") wordplay, the seventy nations of Deuteronomy 32, Bethel's "gate of heaven", Pentecost as Babel reversed, and the two cities from Cain to Revelation.

## Interactive pieces

Flip-card clues · switchable "cosmic mountain" diagram (Eden, Sinai, Tabernacle, Temple, New Jerusalem) · walk-through Tabernacle plan · explorable Ark with an animated journey map · creation-as-temple table · animated menorah · God's-dwelling timeline · Genesis ↔ Revelation mirror · layered map of the ancient Near East (rivers of Eden, Shinar, Abraham's route, the exile, Pentecost nations) · build-a-ziggurat with a Genesis 11:5 zoom-out · to-scale height chart · Shem genealogy · seventy-nations animation · Jacob's stairway · Babel/Pentecost comparison slider · "mighty works of God" in 17 languages · two-cities timeline · Babylon vs New Jerusalem table · connections web · 10-question quiz.

## Colour schemes and font

Use the **Colours** button (top right) to switch between seven schemes (Follow device, Eden Dawn, Tabernacle, Ishtar Lapis, Sinai Stone, New Jerusalem, Night Sky) or pick a custom highlight colour. Your choice is remembered in the browser.

Text is set in **Avenir Next**. Avenir Next is a commercial typeface: it is used automatically wherever it is installed (all Apple devices), and the page falls back to the free, similar Nunito Sans from Google Fonts elsewhere.

## Running it

Open `index.html` in any modern browser. It is a single self-contained file; the only network requests are Google Fonts and the public-domain artwork hot-linked from Wikimedia Commons (each image has a drawn fallback if it cannot load).

## Editing

Source lives in `src/`:

| File | Contents |
| --- | --- |
| `src/body.html` | Page structure and section text |
| `src/styles.css` | Colour schemes, layout and animation |
| `src/data.js` | All content: clues, timelines, map coordinates, quiz, sources |
| `src/app.js` | Interactive behaviour |

After editing, rebuild the single-file page:

```sh
node scripts/build.mjs
```

## Sources

Scripture quotations follow the ESV unless noted. Ideas draw on Michael S. Heiser, G. K. Beale, Gordon J. Wenham, John H. Walton, L. Michael Morales, T. Desmond Alexander, Augustine, Craig S. Keener and Andrew R. George (full list in the app's "Further reading" section).
