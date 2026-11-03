# Where Heaven Meets Earth

An interactive, animated Bible study in five parts:

- **Part I: The Garden-Temple.** Eden as God's sanctuary on his mountain, Adam as priest-king, the Tabernacle as a portable Eden, the Ark of the Covenant and its journey, Solomon's Temple, and the New Jerusalem as Eden fulfilled.
- **Part II: The Serpent and the Seed.** The Hebrew *nāḥāš* (serpent, diviner, shining one), why the serpent of Genesis 3 reads as a divine being inside God's sanctuary, Ezekiel 28's fallen guardian cherub and the high priest's breastpiece, Isaiah 14's "Day Star", seraphim as burning serpents, the curse decoded, the war of the two seeds from Genesis 3:15 to Revelation 12, the bronze serpent and John 3:14, and "that ancient serpent".
- **Part III: Babel, Babylon and the City of God.** The Tower of Babel as a Mesopotamian ziggurat, the three layers of Babel's rebellion, the *shem* ("name") wordplay, the seventy nations of Deuteronomy 32, Bethel's "gate of heaven", Pentecost as Babel reversed, and the two cities from Cain to Revelation.
- **Part IV: Kings and Priests** (a detailed study). God's design for humanity as priest-kings, how kingship and priesthood were twisted, why Israel's offices were separated, roles, access and authority, kings who crossed the line, a map of kings, priests and those who were both from Adam to the church, the order of Melchizedek, converging promises, and how believers are called to function as a royal priesthood, with a study guide and memory verses.
- **Part V: Prophets, the Fivefold and the Kingdom Now** (a detailed study). The Old Testament prophetic office and its relationships with kings and priests, the five ministries of Ephesians 4 and how each equips believers as kings and priests, what changed between the covenants, why the royal priesthood is a present calling, how the church narrowed that calling, the AD 70 setting of Jesus' end-time warnings, and objections answered.

## Interactive pieces

Flip-card clues · switchable "cosmic mountain" diagram (Eden, Sinai, Tabernacle, Temple, New Jerusalem) · walk-through Tabernacle plan · explorable Ark with an animated journey map · creation-as-temple table · animated menorah · God's-dwelling timeline · Genesis ↔ Revelation mirror · layered map of the ancient Near East (rivers of Eden, Shinar, Abraham's route, the exile, Pentecost nations) · build-a-ziggurat with a Genesis 11:5 zoom-out · to-scale height chart · Shem genealogy · seventy-nations animation · Jacob's stairway · Babel/Pentecost comparison slider · "mighty works of God" in 17 languages · two-cities timeline · Babylon vs New Jerusalem table · connections web · Venn diagram of *nāḥāš* · Ezekiel 28 verse walker with breastpiece gems · morning-star animation and Philippians 2 "two paths" chart · seraph/cherub illustration · the serpent's descent from God's mountain to the lake of fire · animated two-seeds timeline · "look and live" bronze serpent · 14-question quiz.

## Colour schemes and font

Use the **Colours** button (top right) to switch between seven schemes (Follow device, Eden Dawn, Tabernacle, Ishtar Lapis, Sinai Stone, New Jerusalem, Night Sky) or pick a custom highlight colour. Your choice is remembered in the browser.

Text is set in **Avenir Next**. Avenir Next is a commercial typeface: it is used automatically wherever it is installed (all Apple devices), and the page falls back to the free, similar Nunito Sans from Google Fonts elsewhere.

## Pages

| Page | Contents |
| --- | --- |
| `index.html` | Home: introduction and a guide to the three parts |
| `garden.html` | Part I: The Garden-Temple |
| `serpent.html` | Part II: The Serpent and the Seed |
| `babel.html` | Part III: Babel, Babylon and the City of God |
| `kings.html` | Part IV: Kings and Priests |
| `prophets.html` | Part V: Prophets, the Fivefold and the Kingdom Now |
| `connections.html` | Connections web, quiz and further reading |

Each part page opens with an "on this page" list of its sections and ends with previous/next links.

## Running it

Open `index.html` in any modern browser. The pages share `assets/styles.css` and `assets/app.js`; the only network requests are Google Fonts and the public-domain artwork hot-linked from Wikimedia Commons (each image has a drawn fallback if it cannot load).

## Editing

Source lives in `src/`:

| File | Contents |
| --- | --- |
| `src/pages/*.html` | Each page's sections and text |
| `src/partials/*.html` | Shared header (navigation, colour picker) and footer |
| `src/styles.css` | Colour schemes, layout and animation |
| `src/data.js` | Content for Parts I and III: clues, timelines, map coordinates, quiz, sources |
| `src/data-serpent.js` | Content for Part II: the serpent and the seed |
| `src/data-kings.js`, `src/app-kings.js` | Content and interactive code for Part IV: kings and priests |
| `src/data-prophets.js`, `src/app-prophets.js` | Content and interactive code for Part V: prophets and the fivefold |
| `src/app.js` | Interactive behaviour |

After editing, rebuild the pages:

```sh
node scripts/build.mjs
```

## Sources

Scripture quotations follow the ESV unless noted. Ideas draw on Michael S. Heiser, G. K. Beale, Gordon J. Wenham, John H. Walton, L. Michael Morales, T. Desmond Alexander, Augustine, Craig S. Keener and Andrew R. George (full list in the app's "Further reading" section).
