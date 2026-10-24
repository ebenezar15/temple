/* Content for "Where Heaven Meets Earth". Scripture quotations follow the ESV unless noted. */
const DATA = {};

DATA.schemes = [
  { id: "auto", name: "Follow device", note: "Eden by day, night sky in dark mode", sw: ["#eef2e6", "#a87a1c", "#0d1120", "#e3b75b"] },
  { id: "eden", name: "Eden Dawn", note: "Garden green and the gold of Havilah", sw: ["#eef2e6", "#2e6a45", "#a87a1c", "#2b4f8f"] },
  { id: "tabernacle", name: "Tabernacle", note: "Purple, scarlet, blue and gold (Exod 26:1)", sw: ["#1c1226", "#dcae45", "#e2566a", "#7f9cf0"] },
  { id: "lapis", name: "Ishtar Lapis", note: "Babylon’s blue glazed brick", sw: ["#0e2656", "#eab84a", "#8fd6c6", "#9fc0ff"] },
  { id: "sinai", name: "Sinai Stone", note: "Desert stone and rams’ skins dyed red", sw: ["#ece3d2", "#8a3a2d", "#3f6e57", "#3a6879"] },
  { id: "jerusalem", name: "New Jerusalem", note: "Pearl, jasper and gold like glass", sw: ["#f2f5f8", "#9a7414", "#157a6b", "#6a4ea3"] },
  { id: "night", name: "Night Sky", note: "“Look toward heaven, and number the stars”", sw: ["#0d1120", "#e3b75b", "#84c79c", "#86a3e6"] }
];

DATA.clues = [
  { icon: "mountain", title: "High ground", front: "“A river flowed out of Eden to water the garden” (Gen 2:10). Water runs downhill, so Eden sits above the garden.",
    back: "Ezekiel calls Eden “the garden of God” and “the holy mountain of God” in the same breath (Ezek 28:13–14). Israel’s Temple later stood on a mountain too: Zion.", ref: "Gen 2:10 · Ezek 28:13–14" },
  { icon: "river", title: "One river, four heads", front: "The river parts into Pishon, Gihon, Tigris and Euphrates (Gen 2:10–14). Real rivers do not split this way; the picture is of life flowing out from God’s dwelling to the whole world.",
    back: "Ezekiel sees a river flowing from the Temple, deepening as it goes and healing everything (Ezek 47:1–12). Jerusalem’s own spring is named Gihon (1 Kgs 1:33). Revelation’s river flows from the throne (Rev 22:1).", ref: "Gen 2:10–14 · Ezek 47" },
  { icon: "hands", title: "Serve and guard", front: "God puts the man in the garden “to work it and keep it” (Gen 2:15). The Hebrew verbs are ʿāvad and shāmar.",
    back: "The same pair describes the Levites, who “guard” and “do service” at the Tabernacle (Num 3:7–8; 8:26; 18:5–7). Adam is pictured as a priest, not a farmhand.", ref: "Gen 2:15 · Num 3:7–8" },
  { icon: "steps", title: "God walks there", front: "Adam and Eve hear “the LORD God walking in the garden” (Gen 3:8). The form of the verb is mithhallēk.",
    back: "God uses the same verb for his presence in the camp and the Tabernacle: “I will walk among you” (Lev 26:12; Deut 23:14), and “I have been moving about in a tent” (2 Sam 7:6–7).", ref: "Gen 3:8 · Lev 26:12" },
  { icon: "wings", title: "Cherubim at the east", front: "After the fall, God stations cherubim and a flaming sword on the east side of the garden to guard the way to the tree of life (Gen 3:24).",
    back: "Cherubim are woven into the Tabernacle curtains and the veil (Exod 26:1, 31), and two gold cherubim cover the Ark (Exod 25:18–22). The Tabernacle’s only entrance faces east.", ref: "Gen 3:24 · Exod 25–26" },
  { icon: "gem", title: "Gold and onyx", front: "The land of Havilah has good gold, bdellium and onyx stone (Gen 2:11–12). An odd detail for a story about a garden.",
    back: "Gold covers the Tabernacle furniture, and two onyx stones engraved with the tribes’ names sit on the high priest’s shoulders (Exod 25:7; 28:9–12). The materials of Eden become the materials of the sanctuary.", ref: "Gen 2:12 · Exod 28:9" },
  { icon: "tree", title: "The tree of life", front: "In the middle of the garden stands the tree of life (Gen 2:9), the source of unending life in God’s presence.",
    back: "The Tabernacle lampstand is a golden almond tree with branches, buds and blossoms (Exod 25:31–36). Solomon carves palm trees and open flowers on every wall of the Temple (1 Kgs 6:29–35).", ref: "Gen 2:9 · Exod 25:31" },
  { icon: "robe", title: "Clothed by God", front: "Before sending them out, God makes Adam and Eve “garments of skins” and clothes them (Gen 3:21). The word is kuttōnet, a tunic.",
    back: "Kuttōnet is the word for the priests’ tunics, and Moses “clothes” Aaron’s sons with them, just as God clothed Adam (Exod 28:4, 40; Lev 8:13).", ref: "Gen 3:21 · Exod 28:40" }
];

DATA.mountain = {
  eden: { short: ["Eden", "Garden", "The wider earth"], label: "Eden", title: "Eden: the first holy mountain",
    intro: "Eden is the high region, the garden lies within it, and the rest of the world lies beyond. Humanity is placed in the middle ring to serve, and is meant to spread the garden outward.",
    zones: [
      ["Eden itself", "The mountain-dwelling of God, source of the river (Gen 2:10; Ezek 28:13–14)."],
      ["The garden", "Where Adam serves and guards, and where God walks (Gen 2:15; 3:8)."],
      ["The wider earth", "To be filled and ruled as God’s image-bearers multiply (Gen 1:28)."]
    ], icon: "tree" },
  sinai: { short: ["Moses", "Elders", "The people"], label: "Sinai", title: "Sinai: the mountain of God",
    intro: "At Sinai the same three rings appear around a real mountain. Boundaries are set, and nearness to God depends on who you are.",
    zones: [
      ["The summit, in the cloud", "Moses alone enters the glory for forty days (Exod 24:15–18)."],
      ["Up the slope", "Aaron, his sons and seventy elders “saw the God of Israel … and ate and drank” (Exod 24:9–11), an Eden-like meal in God’s presence."],
      ["Around the base", "The people stay behind the boundary; “whoever touches the mountain shall be put to death” (Exod 19:12)."]
    ], icon: "fire" },
  tabernacle: { short: ["Most Holy", "Holy Place", "Courtyard"], label: "Tabernacle", title: "The Tabernacle: Sinai on the move",
    intro: "God tells Moses to build “according to the pattern” shown on the mountain (Exod 25:9, 40). The tent turns Sinai’s three zones into a portable sanctuary in the middle of the camp.",
    zones: [
      ["Most Holy Place", "The Ark under the cherubim; the high priest enters once a year with blood (Lev 16)."],
      ["Holy Place", "Priests serve daily at the lampstand, the table of bread and the incense altar."],
      ["Courtyard", "Israel brings offerings to the bronze altar and the laver."]
    ], icon: "ark" },
  temple: { short: ["Inner room", "Nave", "Courts"], label: "Temple", title: "Solomon’s Temple on Mount Zion",
    intro: "Built on Mount Moriah (2 Chr 3:1), the Temple was decorated like a garden, with cherubim, palm trees, open flowers and pomegranates (1 Kgs 6:29; 7:18–20).",
    zones: [
      ["The inner sanctuary", "A cube of gold where the Ark rests under two olive-wood cherubim 10 cubits tall (1 Kgs 6:20–28)."],
      ["The nave", "Cedar walls carved with gourds and open flowers, lit by ten golden lampstands (1 Kgs 6:18; 7:49)."],
      ["The courts", "Meant to be “a house of prayer for all peoples” (Isa 56:7)."]
    ], icon: "temple" },
  jerusalem: { short: ["Throne", "River & tree", "The nations"], label: "New Jerusalem", title: "The New Jerusalem: no more rings",
    intro: "John is carried “to a great, high mountain” to see the holy city coming down (Rev 21:10). The boundaries are gone: the whole city is holy, and God’s people see his face.",
    zones: [
      ["The throne of God and the Lamb", "At the centre of the city, not hidden behind a veil (Rev 22:1, 3)."],
      ["The river and the tree", "Flowing down the middle of the street, with leaves for the healing of the nations (Rev 22:1–2)."],
      ["The nations", "They walk by its light; its gates will never be shut (Rev 21:24–25)."]
    ], icon: "city", allGold: true }
};

/* Tabernacle plan: viewBox 600×300, 1 cubit = 5.6px, east on the right */
DATA.tabernacle = [
  { id: "gate", x: 580, y: 150, name: "The eastern gate", ref: "Exod 27:13–16",
    what: "The only way in: a 20-cubit screen of blue, purple and scarlet yarn on the east side of a 100 × 50 cubit court.",
    eden: "Eden was guarded on its east side (Gen 3:24). Here the way back in faces east as well, but now it is open, at a price.",
    christ: "“I am the door. If anyone enters by me, he will be saved” (John 10:9)." },
  { id: "altar", x: 370, y: 150, name: "Bronze altar", ref: "Exod 27:1–8",
    what: "A 5 × 5 cubit altar of acacia wood overlaid with bronze, where burnt offerings were made day and night.",
    eden: "The first death in Scripture follows the fall, when God makes garments of skins (Gen 3:21). Access to God now passes through sacrifice.",
    christ: "Christ “offered for all time a single sacrifice for sins” (Heb 10:12)." },
  { id: "laver", x: 290, y: 150, name: "Bronze laver", ref: "Exod 30:17–21; 38:8",
    what: "A basin made from the bronze mirrors of the serving women. Priests washed hands and feet before entering.",
    eden: "Water again stands between the people and God’s presence, an echo of the river that flowed out of Eden.",
    christ: "“…having our bodies washed with pure water” (Heb 10:22); “If I do not wash you, you have no share with me” (John 13:8)." },
  { id: "table", x: 200, y: 128, name: "Table of the bread of the Presence", ref: "Exod 25:23–30; Lev 24:5–9",
    what: "Twelve loaves, one for each tribe, set out fresh every Sabbath on a gold-covered table on the north side.",
    eden: "In Eden God provides food freely (Gen 2:16). Here bread is set before his face continually: a meal of fellowship.",
    christ: "“I am the bread of life” (John 6:35)." },
  { id: "lamp", x: 200, y: 172, name: "Golden lampstand", ref: "Exod 25:31–40",
    what: "Hammered from one talent of pure gold, with seven lamps and cups shaped like almond blossoms, on the south side.",
    eden: "A stylised tree of life (Gen 2:9), giving light in the presence of God.",
    christ: "“I am the light of the world” (John 8:12). Christ walks among the lampstands, his churches (Rev 1:12–20)." },
  { id: "incense", x: 150, y: 150, name: "Altar of incense", ref: "Exod 30:1–10",
    what: "A small gold altar just in front of the veil. Fragrant incense burned on it morning and evening.",
    eden: "Smoke rises before the veil the way a cloud of glory veiled God’s presence on the mountain.",
    christ: "The prayers of the saints rise like incense (Ps 141:2; Rev 8:3–4); Christ “always lives to make intercession” (Heb 7:25)." },
  { id: "veil", x: 132, y: 150, name: "The veil", ref: "Exod 26:31–33",
    what: "A curtain of blue, purple and scarlet yarn and fine linen, embroidered with cherubim, separating the Holy Place from the Most Holy Place.",
    eden: "Cherubim barred the way to the tree of life (Gen 3:24). Cherubim are woven into the barrier that bars the way to God’s throne.",
    christ: "At Jesus’ death “the curtain of the temple was torn in two, from top to bottom” (Matt 27:51). The way is open “through the curtain, that is, through his flesh” (Heb 10:20)." },
  { id: "ark", x: 104, y: 150, name: "Ark and mercy seat", ref: "Exod 25:10–22",
    what: "In the 10 × 10 × 10 cubit Most Holy Place: the Ark, its gold cover (the kappōret or mercy seat) and two cherubim facing each other.",
    eden: "The innermost place of the presence, like the summit of Eden. “There I will meet with you” (Exod 25:22).",
    christ: "Christ is the one “whom God put forward as a propitiation (hilastērion, the word for the mercy seat) by his blood” (Rom 3:25)." }
];

DATA.arkParts = [
  { id: "glory", name: "The glory between the cherubim", ref: "Exod 25:22; 2 Sam 6:2",
    text: "God promised: “There I will meet with you, and from above the mercy seat, from between the two cherubim … I will speak with you.” He is “the LORD of hosts who sits enthroned on the cherubim.” The Ark is his footstool; the throne itself is invisible above it." },
  { id: "cherubim", name: "Two cherubim of hammered gold", ref: "Exod 25:18–20",
    text: "Made of one piece with the cover, facing each other with wings spread overhead. They are the throne-guardians of Eden (Gen 3:24) now guarding God’s throne room. Ezekiel sees living cherubim carrying God’s throne (Ezek 1; 10)." },
  { id: "seat", name: "The mercy seat (kappōret)", ref: "Lev 16:14–15",
    text: "The pure gold lid, 2.5 × 1.5 cubits. On the Day of Atonement the high priest sprinkled blood on it seven times. The word comes from the root for “atone” or “cover.” The Greek translation, hilastērion, is the word Paul uses for Christ in Romans 3:25." },
  { id: "box", name: "Acacia chest overlaid with gold", ref: "Exod 25:10–11",
    text: "About 2.5 × 1.5 × 1.5 cubits (roughly 115 × 70 × 70 cm), gold inside and out with a gold moulding around it. Wood from the desert covered in the gold of Eden." },
  { id: "poles", name: "Carrying poles", ref: "Exod 25:12–15; 1 Chr 15:15",
    text: "Acacia poles covered in gold, through four gold rings, never to be removed. Only Levites carried it on their shoulders. When David moved it on a cart, Uzzah died touching it (2 Sam 6:6–7)." },
  { id: "contents", name: "What was inside", ref: "Heb 9:4; Exod 16:33; Num 17:10",
    text: "The two tablets of the covenant, a golden jar of manna, and Aaron’s staff that budded. Law, provision and life from a dead branch: three reminders kept beneath God’s throne. By Solomon’s day only the tablets remained (1 Kgs 8:9)." }
];

/* Ark journey: lon/lat */
DATA.arkJourney = [
  { name: "Mount Sinai", lon: 33.97, lat: 28.54, when: "c. 15th–13th c. BC", ref: "Exod 25:10–22; 37:1–9",
    text: "Bezalel builds the Ark at the foot of the mountain to the pattern God showed Moses. The tablets of the covenant are placed inside." },
  { name: "Through the wilderness", lon: 34.40, lat: 30.65, when: "40 years", ref: "Num 10:33–36",
    text: "The Ark goes ahead of Israel to find them a resting place. Whenever it set out Moses said, “Arise, O LORD, and let your enemies be scattered.”" },
  { name: "Crossing the Jordan", lon: 35.53, lat: 31.84, when: "Entry to Canaan", ref: "Josh 3–4",
    text: "When the priests carrying the Ark step into the flooded Jordan, the waters stop and Israel crosses on dry ground." },
  { name: "Jericho", lon: 35.44, lat: 31.87, when: "", ref: "Josh 6",
    text: "Carried around the city once a day for six days and seven times on the seventh, with seven priests blowing rams’ horns. The walls fall." },
  { name: "Shiloh", lon: 35.29, lat: 32.05, when: "Period of the Judges", ref: "Josh 18:1; 1 Sam 3:3",
    text: "The Tabernacle is set up at Shiloh for centuries. The boy Samuel sleeps “in the temple of the LORD, where the ark of God was” when God calls him." },
  { name: "Ebenezer: captured", lon: 34.93, lat: 32.10, when: "c. 1050 BC", ref: "1 Sam 4",
    text: "Israel carries the Ark into battle like a lucky charm, treating God as something to be used. They are routed, and the Philistines capture it. “The glory has departed from Israel.”" },
  { name: "Ashdod, Gath, Ekron", lon: 34.65, lat: 31.80, when: "Seven months", ref: "1 Sam 5",
    text: "Placed beside the idol Dagon, the Ark is found next morning with Dagon fallen on his face before it, then broken. Plague follows the Ark from city to city." },
  { name: "Beth-shemesh", lon: 34.98, lat: 31.75, when: "", ref: "1 Sam 6",
    text: "Sent back on a new cart pulled by two milk cows, which head straight for Israel’s border, lowing as they go." },
  { name: "Kiriath-jearim", lon: 35.10, lat: 31.80, when: "About 20 years", ref: "1 Sam 7:1–2",
    text: "Kept in the house of Abinadab on the hill, cared for by his son Eleazar." },
  { name: "Jerusalem", lon: 35.23, lat: 31.78, when: "c. 1000 / 960 BC", ref: "2 Sam 6; 1 Kgs 8:1–11",
    text: "David brings it up to the City of David, dancing before the LORD with all his might. Solomon places it in the Most Holy Place, and the cloud of glory fills the Temple." },
  { name: "Lost to history", lon: 35.23, lat: 31.78, when: "586 BC and after", ref: "2 Kgs 25:8–17; Jer 3:16; Rev 11:19",
    text: "When Babylon burns the Temple, the Ark disappears from the record. Jeremiah foresaw a day when “they shall no more say, ‘The ark of the covenant of the LORD.’ … Jerusalem shall be called the throne of the LORD.” John sees “the ark of his covenant” in God’s temple in heaven.", lost: true }
];

DATA.adam = [
  { id: "adam", tab: "Adam", head: "The first priest-king",
    rows: [
      ["Placed", "In the garden-temple “to work it and keep it” (Gen 2:15), ruling creation as God’s image (Gen 1:26–28)."],
      ["Test", "The tree of the knowledge of good and evil: deciding for oneself what is good, wisdom that belongs to God (compare Deut 1:39; 2 Sam 14:17)."],
      ["Outcome", "He fails to guard the sanctuary from the serpent, and takes what was not given. He is driven out (gārash, a forceful expulsion) and cherubim guard the way back (Gen 3:24)."]
    ] },
  { id: "priests", tab: "Israel’s priests", head: "Guardians of a portable Eden",
    rows: [
      ["Placed", "To guard the Tabernacle and do its service (Num 3:7–8; 18:1–7), dressed in tunics as God dressed Adam (Exod 28:40)."],
      ["Calling", "To bless the people, teach the law and stand between God and Israel (Num 6:22–27; Mal 2:7)."],
      ["Outcome", "Some prove faithful, such as Phinehas (Num 25:10–13), but many fail: Nadab and Abihu (Lev 10:1–2), Eli’s sons (1 Sam 2:12–17). The barriers stay up."]
    ] },
  { id: "jesus", tab: "Jesus, the last Adam", head: "The one who succeeds",
    rows: [
      ["Placed", "“The Word became flesh and dwelt (eskēnōsen, “tabernacled”) among us, and we have seen his glory” (John 1:14). “Destroy this temple, and in three days I will raise it up”: he meant his body (John 2:19–21)."],
      ["Test", "Tempted by the devil in the wilderness, he refuses every shortcut (Matt 4:1–11). Mark adds that “he was with the wild animals, and the angels were ministering to him” (Mark 1:13), a picture of Eden restored."],
      ["Outcome", "He promises a dying thief, “Today you will be with me in paradise” (Luke 23:43; paradeisos is the Greek Old Testament word for Eden’s garden). He rises in a garden and is mistaken for the gardener (John 20:15). “The last Adam became a life-giving spirit” (1 Cor 15:45)."]
    ] },
  { id: "church", tab: "The church", head: "A living temple and a royal priesthood",
    rows: [
      ["Placed", "“Do you not know that you are God’s temple and that God’s Spirit dwells in you?” (1 Cor 3:16; Eph 2:19–22)."],
      ["Calling", "“You are a chosen race, a royal priesthood … that you may proclaim the excellencies of him who called you” (1 Pet 2:9), spreading God’s presence the way Adam was to spread the garden."],
      ["Destiny", "“A kingdom and priests to our God, and they shall reign on the earth” (Rev 5:10). Creation itself waits to be set free (Rom 8:19–21)."]
    ] }
];

DATA.story = [
  { era: "Genesis 2", title: "Eden", short: "God walks with humanity", ref: "Gen 2:8–15; 3:8",
    text: "Heaven and earth overlap in a garden on the mountain of God. Humanity serves as priest-king, with open access to the tree of life.", barrier: "None" },
  { era: "Genesis 3", title: "Exile east", short: "Cherubim guard the way", ref: "Gen 3:22–24",
    text: "Having grasped at moral autonomy, Adam and Eve are driven out eastward. The tragedy is more than a broken rule: humanity is cut off from the place where heaven and earth meet.", barrier: "Cherubim and a flaming sword" },
  { era: "Patriarchs", title: "Altars and Bethel", short: "Meeting places on the move", ref: "Gen 12:7–8; 28:10–22",
    text: "Abraham builds altars where God appears. Jacob sees a stairway joining heaven and earth and names the place Bethel, “house of God.”", barrier: "Occasional, God-initiated encounters" },
  { era: "Exodus 19–24", title: "Sinai", short: "The mountain of God", ref: "Exod 19:10–25; 24:9–18",
    text: "God descends on the mountain in fire. The people stay at the base, elders go partway up, and Moses enters the cloud.", barrier: "Boundaries around the mountain" },
  { era: "Exodus 25–40", title: "Tabernacle", short: "“I will dwell among them”", ref: "Exod 25:8; 40:34–38",
    text: "“Since you can’t come to me, I’ll come to you.” A tent in the middle of the camp, built to a heavenly pattern, filled with glory so that even Moses cannot enter.", barrier: "Curtains, veil and sacrifice" },
  { era: "c. 960 BC", title: "Solomon’s Temple", short: "Eden continued", ref: "1 Kgs 6–8",
    text: "A permanent house on Mount Zion, carved with gardens and cherubim. The glory fills it so powerfully that the priests cannot stand to minister.", barrier: "Most Holy Place, entered once a year" },
  { era: "586 BC", title: "Glory departs, exile to Babylon", short: "The temple falls", ref: "Ezek 10:18–19; 11:23; 2 Kgs 25",
    text: "Ezekiel watches the glory leave the Temple eastward. Babylon burns the house and carries Judah away, east again. In exile Ezekiel sees a future temple with a river of life (Ezek 40–48).", barrier: "No temple at all" },
  { era: "c. 4 BC – AD 30", title: "Jesus", short: "God tabernacles in flesh", ref: "John 1:14; 2:19–21",
    text: "God’s presence now lives in a human body. Jesus touches lepers and eats with sinners: holiness spreads outward from him instead of being contaminated.", barrier: "God is present in a person" },
  { era: "AD 30", title: "Torn veil and Pentecost", short: "The way is open", ref: "Matt 27:51; Acts 2:1–4; 1 Cor 3:16",
    text: "The veil is torn top to bottom. Fifty days later the Spirit fills the believers like glory filling a temple. God’s people become his dwelling, Eden restored one person at a time.", barrier: "Torn open" },
  { era: "Revelation 21–22", title: "New creation", short: "God with us, forever", ref: "Rev 21:1–5, 22–27; 22:1–5",
    text: "“Behold, the dwelling place of God is with man.” The river and the tree return with no cherubim guarding them. No curse, no night, no temple, because the whole city is God’s dwelling. They will see his face.", barrier: "None, ever again" }
];

DATA.mirror = [
  ["God creates the heavens and the earth", "Gen 1:1", "A new heaven and a new earth", "Rev 21:1"],
  ["A river flows out of Eden", "Gen 2:10", "The river of the water of life flows from the throne", "Rev 22:1"],
  ["The tree of life in the midst of the garden", "Gen 2:9", "The tree of life on either side of the river", "Rev 22:2"],
  ["Gold, bdellium and onyx in Havilah", "Gen 2:11–12", "A city of pure gold with foundations of every jewel", "Rev 21:18–21"],
  ["God walks in the garden", "Gen 3:8", "“The dwelling place of God is with man”", "Rev 21:3"],
  ["They hid from the presence of the LORD", "Gen 3:8", "“They will see his face”", "Rev 22:4"],
  ["“Cursed is the ground because of you”", "Gen 3:17", "“No longer will there be anything accursed”", "Rev 22:3"],
  ["“You shall surely die”", "Gen 2:17", "“Death shall be no more”", "Rev 21:4"],
  ["The serpent deceives", "Gen 3:1–13", "The ancient serpent is bound and thrown down", "Rev 20:2, 10"],
  ["Cherubim guard the way back", "Gen 3:24", "Its gates will never be shut", "Rev 21:25"],
  ["Humanity made to work, keep and rule", "Gen 1:28; 2:15", "His servants will serve him and reign forever", "Rev 22:3, 5"]
];

DATA.myth = [
  { tab: "The popular version", rows: [
    "Proud people try to build a tower tall enough to reach heaven.",
    "God feels threatened by what they might achieve.",
    "He scrambles their languages, and that is why French and Japanese sound different.",
    "Moral: don’t aim too high."
  ] },
  { tab: "What the text signals", rows: [
    "The tower (migdāl) in Shinar, built of fired brick and bitumen, is a Mesopotamian temple-tower: a ziggurat.",
    "“Its top in the heavens” is a stock phrase for a temple’s function, not its height. The medieval Jewish commentator Abraham ibn Ezra already noted the builders were not fools who thought they could climb into the sky.",
    "God has to “come down to see” it (Gen 11:5): the narrator is mocking the project.",
    "The sin is deeper than ambition: refusing God’s command to fill the earth, trying to manage God, and making a name without him."
  ] }
];

DATA.ziggurat = [
  { id: "shrine", name: "The shrine at the top", ref: "Herodotus, Histories 1.181",
    text: "A small temple at the summit, prepared like a bed-chamber for the god. Herodotus describes Babylon’s as holding a great couch and a golden table. The god was expected to descend, take up residence and bless the city below." },
  { id: "stairs", name: "The stairway", ref: "Gen 28:12",
    text: "Monumental stairs led up the south face of Etemenanki. The stairway was a road for the god to come down to his house, and for priests to serve him. Jacob’s sullam at Bethel uses this picture, but with God at the top speaking promises no one earned." },
  { id: "tiers", name: "Seven stages", ref: "Esagila Tablet",
    text: "Etemenanki rose in stepped stages, traditionally seven, on a base about 91 m square and roughly 91 m tall according to a cuneiform tablet giving its measurements. It was an artificial cosmic mountain on a flat plain that had no natural mountains." },
  { id: "bricks", name: "Fired brick and bitumen", ref: "Gen 11:3",
    text: "“They had brick for stone, and bitumen for mortar.” Southern Mesopotamia has no stone quarries, so builders fired mud bricks and set them in natural tar. Excavated bricks from Babylon are stamped with Nebuchadnezzar’s name. The narrator is writing for readers who built with stone, and points out the foreign technique." },
  { id: "temple", name: "Esagila, the temple below", ref: "Dan 4:30",
    text: "Beside the ziggurat stood Esagila, “house whose top is lofty”, temple of Marduk, chief god of Babylon. Nebuchadnezzar II, who rebuilt both, wrote that he raised the ziggurat’s top “to rival heaven,” using the same idea as Genesis 11:4." }
];

DATA.zigNames = [
  { cun: "𒂍𒋼𒀭𒆠", name: "Etemenanki · Babylon", meaning: "“House of the foundation of heaven and earth”" },
  { cun: "", name: "Ziggurat of Sippar", meaning: "“Temple of the stairway to pure heaven”" },
  { cun: "", name: "Ziggurat of Larsa", meaning: "“Temple that links heaven and earth”" },
  { cun: "𒆍𒀭𒊏𒆠", name: "Bāb-ilim · the city itself", meaning: "“Gate of the gods”: Babylon named itself after its ziggurat" }
];

DATA.scale = [
  { name: "Etemenanki", m: 91, note: "c. 6th c. BC" },
  { name: "Statue of Liberty", m: 93, note: "with pedestal" },
  { name: "Great Pyramid", m: 146.6, note: "original height" },
  { name: "Eiffel Tower", m: 330, note: "" },
  { name: "Burj Khalifa", m: 828, note: "" }
];

DATA.sin = [
  { tab: "1 · Refusing to scatter", head: "“Lest we be dispersed over the face of the whole earth”", ref: "Gen 1:28; 9:1, 7; 11:4",
    body: [
      "God’s first word to humanity was “Be fruitful and multiply and fill the earth” (Gen 1:28), repeated to Noah after the flood (Gen 9:1, 7). Eden’s garden was meant to spread.",
      "Babel’s builders know the command and refuse it outright. The city is a fortress against God’s plan; the tower is its religious centrepiece.",
      "The scattering God brings is both judgment and the enforced fulfilment of his original command."
    ] },
  { tab: "2 · Managing God", head: "A god on retainer", ref: "Gen 11:4–5; 12:1–3",
    body: [
      "Mesopotamian religion was transactional. The city builds the ziggurat, prepares the shrine, feeds the god and performs the rites, and the god is expected to respond with harvests, protection and victory, on the city’s terms and for the city’s benefit.",
      "Babel is an attempt to summon heaven and control it. Israel later tried the same thing with the Ark at Ebenezer and lost it (1 Sam 4).",
      "Genesis 12 is the answer: no architecture, no ritual. God speaks first to one man and simply makes promises: “I will bless you … and in you all the families of the earth shall be blessed.” Everything Babel tried to manufacture from the bottom up, God gives freely from the top down."
    ] },
  { tab: "3 · Making a name", head: "“Let us make a name for ourselves”", ref: "Gen 11:4; 12:2",
    body: [
      "Fame, legacy and security, built by human effort and anchored in their own city.",
      "The Hebrew word is shem, and the narrator plays on it. Babel’s name-project is torn down, and immediately “these are the generations of Shem” (Gen 11:10) begins, running straight to Abram.",
      "God’s first words to Abram: “I will make your name great.” The thing they built a tower to get, God gives as a gift to an old man who has done nothing yet."
    ] }
];

DATA.gen = [
  { n: "Shem", at: 100, life: 600, note: "Son of Noah. His name means “name.” Fathered Arpachshad two years after the flood (Gen 11:10)." },
  { n: "Arpachshad", at: 35, life: 438, note: "Born just after the flood." },
  { n: "Shelah", at: 30, life: 433, note: "" },
  { n: "Eber", at: 34, life: 464, note: "Likely the root of the word “Hebrew” (ʿivrî)." },
  { n: "Peleg", at: 30, life: 239, note: "His name means “division”, “for in his days the earth was divided” (Gen 10:25), often linked with the scattering at Babel." },
  { n: "Reu", at: 32, life: 239, note: "" },
  { n: "Serug", at: 30, life: 230, note: "" },
  { n: "Nahor", at: 29, life: 148, note: "" },
  { n: "Terah", at: 70, life: 205, note: "Leaves Ur of the Chaldeans for Canaan but settles in Haran (Gen 11:31). Joshua 24:2 says he “served other gods.”" },
  { n: "Abram", at: null, life: 175, note: "“Go from your country … to the land that I will show you. And I will make of you a great nation, and I will bless you and make your name great” (Gen 12:1–2). Renamed Abraham, “father of a multitude of nations” (Gen 17:5).", abram: true }
];

DATA.letus = [
  { who: "God", ref: "Gen 1:26", text: "Let us make man in our image, after our likeness.", god: true },
  { who: "Builders", ref: "Gen 11:3", text: "Come, let us make bricks (nilbenāh) and burn them thoroughly." },
  { who: "Builders", ref: "Gen 11:4", text: "Come, let us build ourselves a city and a tower … and let us make a name for ourselves." },
  { who: "God", ref: "Gen 11:7", text: "Come, let us go down and there confuse (nāvlāh) their language.", god: true }
];
DATA.letusNote = "In Hebrew the builders’ “let us make bricks” (n-l-b-n) is answered by God’s “let us confuse” (n-b-l), nearly the same consonants reversed. The city is then named Babel, because there the LORD “confused” (bālal) the language (Gen 11:9).";

DATA.tongues = [
  ["Greek · Acts 2:11", "τὰ μεγαλεῖα τοῦ θεοῦ"],
  ["Latin · Vulgate", "magnalia Dei"],
  ["Hebrew", "גְּדֹלוֹת אֱלֹהִים"],
  ["Arabic", "عَظَائِمِ اللهِ"],
  ["Persian · where Parthians, Medes and Elamites lived", "کارهای عظیم خدا"],
  ["English", "the mighty works of God"],
  ["Spanish", "las maravillas de Dios"],
  ["French", "les merveilles de Dieu"],
  ["German", "die großen Taten Gottes"],
  ["Portuguese", "as grandezas de Deus"],
  ["Russian", "о великих делах Божиих"],
  ["Swahili", "matendo makuu ya Mungu"],
  ["Hindi", "परमेश्वर के बड़े-बड़े काम"],
  ["Tamil", "தேவனுடைய மகத்துவங்கள்"],
  ["Korean", "하나님의 큰 일"],
  ["Chinese", "神的大作为"],
  ["Japanese", "神の大きなみわざ"]
];

DATA.eras = ["Primeval", "Patriarchs", "Exodus", "Kingdom", "Exile", "Jesus", "Church", "The end"];
DATA.cities = {
  man: [
    { col: 0, name: "Enoch, Cain’s city", short: "Gen 4:17", text: "The first city in the Bible is built by a murderer, “east of Eden,” and named after his son: a name made for himself. Its culture grows quickly: livestock, music, metalwork, and a boast of seventy-sevenfold vengeance (Gen 4:17–24)." },
    { col: 0, name: "Babel", short: "Gen 10:8–12; 11", text: "Founded as the first kingdom of Nimrod, “a mighty hunter before the LORD,” along with Erech (Uruk), Accad and Calneh in Shinar, and then Nineveh. A city and tower built to avoid scattering and to make a name." },
    { col: 1, name: "Sodom", short: "Gen 13; 19", text: "Lot moves east toward this well-watered city “like the garden of the LORD” (Gen 13:10), a counterfeit Eden. It is arrogant, prosperous and careless of the poor (Ezek 16:49)." },
    { col: 2, name: "Pithom and Raamses", short: "Exod 1:11–14", text: "Pharaoh’s store-cities, built by Hebrew slaves making bricks. The city of man runs on bricks and forced labour; God’s first great act of salvation is getting his people out of a brick-making empire." },
    { col: 3, name: "Jericho", short: "Josh 6", text: "A walled city that falls without a siege, as the Ark is carried around it and the trumpets sound." },
    { col: 3, name: "Nineveh", short: "Jonah 3–4", text: "The great Assyrian city. Surprisingly, it repents at Jonah’s preaching, and God spares it: the city of man is not beyond mercy." },
    { col: 4, name: "Babylon of Nebuchadnezzar", short: "Dan 3–4", text: "Nebuchadnezzar raises a golden image 60 cubits high and demands worship (Dan 3). Walking on his roof he boasts, “Is not this great Babylon, which I have built?” and is humbled until he lifts his eyes to heaven (Dan 4:30–37)." },
    { col: 6, name: "Rome, “Babylon”", short: "1 Pet 5:13", text: "The early church called imperial Rome “Babylon”: the city of power that crucified Jesus and persecuted his people, and to which they were exiles (1 Pet 1:1; 2:11)." },
    { col: 7, name: "Babylon the great falls", short: "Rev 17–18", text: "Every city of man is gathered into one image: a city of luxury, trade and violence, “drunk with the blood of the saints.” She falls in a single hour, and heaven sings." }
  ],
  god: [
    { col: 0, name: "Eden", short: "Gen 2", text: "The first sanctuary: a garden on the mountain of God, the seed of what was meant to fill the earth." },
    { col: 1, name: "Abraham’s tents", short: "Heb 11:8–16", text: "Abraham lived in tents in the promised land, “for he was looking forward to the city that has foundations, whose designer and builder is God.” God “has prepared for them a city.”" },
    { col: 2, name: "The camp around the tent", short: "Num 2", text: "Twelve tribes encamped in a square around the Tabernacle, three on each side, with God’s dwelling at the centre: a moving city with God in the middle." },
    { col: 3, name: "Jerusalem, Mount Zion", short: "Ps 46; 48; 87", text: "“Beautiful in elevation … Mount Zion, in the far north (Zaphon), the city of the great King” (Ps 48:2), claiming the title of Baal’s mountain for the LORD. Psalm 87 imagines foreign nations registered as born in Zion." },
    { col: 4, name: "Ezekiel’s city", short: "Ezek 40–48", text: "In exile in Babylon, Ezekiel sees a new temple with a river flowing out of it and a city whose name is “The LORD Is There” (Ezek 48:35)." },
    { col: 5, name: "A city on a hill", short: "Matt 5:14; Luke 19:41", text: "Jesus calls his followers “a city set on a hill” that cannot be hidden. He weeps over Jerusalem because it did not know “the things that make for peace.”" },
    { col: 6, name: "The heavenly Jerusalem", short: "Heb 12:22; Gal 4:26", text: "“You have come to Mount Zion and to the city of the living God, the heavenly Jerusalem.” Believers’ “citizenship is in heaven” (Phil 3:20) while they live as exiles in Babylon." },
    { col: 7, name: "The New Jerusalem", short: "Rev 21–22", text: "The holy city comes down out of heaven from God, prepared as a bride. Built by God, not by brick and bitumen, and open to all nations." }
  ]
};

DATA.cityTable = [
  ["Pictured as", "A prostitute riding a scarlet beast", "Rev 17:3–5", "The Bride, the wife of the Lamb", "Rev 21:2, 9"],
  ["Origin", "Built by human power, trade and violence", "Rev 18:3, 11–17", "Comes down out of heaven from God", "Rev 21:2, 10"],
  ["Wealth", "Gold, jewels and pearls worn for luxury", "Rev 17:4; 18:16", "Streets of gold, gates of pearl, foundations of jewels", "Rev 21:18–21"],
  ["The nations", "Deceived by her sorcery", "Rev 18:23", "Walk by its light; healed by the tree’s leaves", "Rev 21:24; 22:2"],
  ["What is drunk", "The wine of her immorality", "Rev 17:2", "The water of life without price", "Rev 21:6; 22:17"],
  ["A name on the forehead", "“Babylon the great, mother of prostitutes”", "Rev 17:5", "God’s name on his servants’ foreheads", "Rev 22:4"],
  ["How long", "Falls “in a single hour”", "Rev 18:10, 17, 19", "“They will reign forever and ever”", "Rev 22:5"],
  ["The call", "“Come out of her, my people”", "Rev 18:4", "“The Spirit and the Bride say, ‘Come’”", "Rev 22:17"]
];

/* Map: projection lon 28–52, lat 24–40 → 960 × 720 */
DATA.map = {
  med: [[28,31.0],[29.5,30.95],[30.4,31.45],[31.3,31.55],[32.3,31.25],[33.4,31.15],[34.2,31.32],[34.75,32.1],[34.95,32.85],[35.15,33.2],[35.5,33.9],[35.85,34.6],[35.88,35.3],[35.8,35.9],[36.15,36.55],[35.6,36.65],[34.6,36.8],[33.6,36.2],[32.6,36.1],[31.4,36.75],[30.6,36.85],[29.6,36.2],[28.9,36.7],[28.2,37.0],[28.0,37.0]],
  cyprus: [[32.3,35.05],[32.9,35.4],[33.9,35.35],[34.6,35.68],[34.0,35.05],[33.9,34.95],[33.0,34.6],[32.4,34.75]],
  gulf: [[47.9,30.0],[48.5,29.95],[48.9,30.35],[49.6,30.05],[50.3,29.25],[50.85,28.85],[51.4,27.95],[52,27.5],[52,24.3],[51.6,24.9],[51.3,25.9],[51.05,26.05],[50.75,25.45],[50.5,25.7],[50.2,26.3],[49.6,26.95],[48.65,27.95],[48.35,28.6],[48.0,29.35]],
  red: [[32.55,29.95],[32.75,29.55],[33.25,28.6],[33.85,27.85],[34.25,27.75],[34.45,28.15],[34.62,28.85],[34.92,29.5],[35.02,29.42],[34.82,28.7],[34.88,28.05],[35.25,27.95],[36.0,26.9],[36.7,25.9],[37.3,24.9],[37.8,24.0],[35.6,24.0],[34.9,24.9],[34.25,26.1],[33.8,26.9],[33.35,27.8],[32.8,28.9]],
  dead: [[35.45,31.75],[35.58,31.75],[35.6,31.1],[35.42,31.1]],
  galilee: [[35.53,32.88],[35.65,32.88],[35.65,32.72],[35.55,32.72]],
  euphrates: [[41.2,39.6],[39.8,39.0],[38.7,38.4],[38.2,37.4],[38.05,36.9],[38.3,36.4],[39.0,35.95],[40.15,35.3],[40.9,34.5],[41.5,34.4],[42.4,34.0],[43.3,33.45],[43.8,33.3],[44.3,32.8],[44.42,32.54],[44.9,31.95],[45.6,31.4],[46.1,31.05],[46.8,30.98],[47.43,31.0]],
  tigris: [[39.6,38.6],[40.2,37.9],[41.0,37.55],[42.2,37.3],[42.7,36.8],[43.13,36.36],[43.3,35.5],[43.6,34.7],[43.87,34.2],[44.4,33.3],[45.0,32.95],[45.8,32.5],[46.6,31.95],[47.15,31.8],[47.43,31.0]],
  shatt: [[47.43,31.0],[47.9,30.5],[48.5,29.95]],
  nile: [[32.9,24.0],[32.85,24.8],[32.6,25.7],[32.75,26.2],[31.75,27.2],[30.8,28.1],[31.0,29.0],[31.25,30.05],[30.9,30.6],[30.4,31.4]],
  nile2: [[31.25,30.05],[31.6,30.7],[31.85,31.45]],
  jordan: [[35.62,33.2],[35.6,32.88],[35.57,32.72],[35.55,32.2],[35.55,31.75]],
  places: {
    ur: { n: "Ur", lon: 46.10, lat: 30.96 }, eridu: { n: "Eridu", lon: 45.99, lat: 30.70 }, uruk: { n: "Uruk (Erech)", lon: 45.64, lat: 31.32 },
    babylon: { n: "Babylon", lon: 44.42, lat: 32.54 }, nineveh: { n: "Nineveh", lon: 43.15, lat: 36.36 }, haran: { n: "Haran", lon: 39.03, lat: 36.86 },
    mari: { n: "Mari", lon: 40.89, lat: 34.55 }, damascus: { n: "Damascus", lon: 36.3, lat: 33.5 }, jerusalem: { n: "Jerusalem", lon: 35.23, lat: 31.78 },
    bethel: { n: "Bethel", lon: 35.22, lat: 31.93 }, shechem: { n: "Shechem", lon: 35.28, lat: 32.21 }, memphis: { n: "Memphis", lon: 31.25, lat: 29.85 },
    susa: { n: "Susa", lon: 48.26, lat: 32.19 }, sinai: { n: "Mt Sinai", lon: 33.97, lat: 28.54 }, ararat: { n: "Ararat", lon: 44.3, lat: 39.7 },
    akkad: { n: "Akkad", lon: 44.1, lat: 33.1 }, calah: { n: "Calah", lon: 43.33, lat: 36.1 }, riblah: { n: "Riblah", lon: 36.55, lat: 34.45 },
    carchemish: { n: "Carchemish", lon: 38.0, lat: 36.83 }, negev: { n: "Negev", lon: 34.8, lat: 30.9 }
  },
  labels: [
    { t: "MEDITERRANEAN SEA", lon: 31.2, lat: 33.4, cls: "sea" }, { t: "PERSIAN GULF", lon: 50.0, lat: 27.0, cls: "sea" },
    { t: "RED SEA", lon: 36.2, lat: 25.4, cls: "sea" }, { t: "SHINAR", lon: 46.7, lat: 32.7, cls: "region" },
    { t: "ARABIAN DESERT", lon: 41.0, lat: 29.0, cls: "region" }, { t: "EGYPT", lon: 30.2, lat: 27.0, cls: "region" },
    { t: "CANAAN", lon: 34.1, lat: 32.6, cls: "region" }, { t: "ZAGROS MOUNTAINS", lon: 47.4, lat: 34.3, cls: "region" },
    { t: "TAURUS MTS", lon: 34.0, lat: 37.8, cls: "region" }
  ],
  layers: [
    { id: "eden", name: "Rivers of Eden",
      info: "<h3>The rivers of Eden</h3><p>Two of Eden’s four rivers are familiar: the Tigris (Hiddekel) and the Euphrates (Gen 2:14). The Pishon and Gihon are unknown, which suggests Genesis is describing a sacred geography rather than a map. Jerusalem’s own spring was called Gihon (1 Kgs 1:33), linking the Temple mount to Eden. Mount Ararat, where the ark of Noah rested (Gen 8:4), lies in the same highlands where the two rivers rise.</p>" },
    { id: "babel", name: "Babel & Shinar",
      info: "<h3>The plain of Shinar</h3><p>Babel lies on a flat alluvial plain between the rivers with no stone and no mountains, which is why its people made their own mountain out of brick. Nimrod’s kingdom began with “Babel, Erech, Accad and Calneh in the land of Shinar,” then spread north to Nineveh and Calah (Gen 10:10–11). Eridu was regarded in Sumerian tradition as the first city, and Ur had its own great ziggurat.</p>" },
    { id: "abraham", name: "Abraham’s call",
      info: "<h3>Out of Babel’s world</h3><p>Terah takes Abram from Ur of the Chaldeans, a city crowned by a ziggurat to the moon god, up the Euphrates to Haran (Gen 11:31). There God calls Abram onward to Canaan (Gen 12:1–5): to Shechem, Bethel, the Negev and briefly Egypt (Gen 12:6–10). God takes one man <em>out of</em> Shinar to begin blessing every nation.</p>" },
    { id: "exile", name: "Exile to Babylon",
      info: "<h3>Back to Shinar</h3><p>In 605, 597 and 586 BC Nebuchadnezzar deported Judah to Babylon (2 Kgs 24–25; Dan 1:1–2). The Temple’s treasures are carried into “the land of Shinar, to the house of his god” (Dan 1:2), the same old name. Abraham’s family travels his route in reverse. In 538 BC Cyrus of Persia lets them return (Ezra 1).</p>" },
    { id: "pentecost", name: "Pentecost nations",
      info: "<h3>Every nation under heaven</h3><p>Luke lists the peoples present in Jerusalem: Parthians, Medes, Elamites, residents of Mesopotamia, Judea, Cappadocia, Pontus, Asia, Phrygia, Pamphylia, Egypt, Libya around Cyrene, visitors from Rome, Cretans and Arabs (Acts 2:9–11). Scholars such as Craig Keener see the list as a deliberate echo of the Table of Nations scattered after Babel. Lines run from Jerusalem out to each region.</p>" }
  ],
  abrahamRoute: ["ur", "uruk", "babylon", "mari", "haran", "carchemish", "damascus", "shechem", "bethel", "negev", "memphis"],
  exileRoute: ["jerusalem", "damascus", "riblah", "carchemish", "mari", "babylon"],
  pentecost: [
    { n: "Parthians", lon: 51.4, lat: 36.2 }, { n: "Medes", lon: 48.3, lat: 35.2 }, { n: "Elamites", lon: 48.6, lat: 32.8 },
    { n: "Mesopotamia", lon: 42.6, lat: 35.0 }, { n: "Judea", lon: 35.0, lat: 31.3 }, { n: "Cappadocia", lon: 35.5, lat: 38.7 },
    { n: "Pontus", lon: 37.2, lat: 39.75 }, { n: "Asia", lon: 28.6, lat: 38.6 }, { n: "Phrygia", lon: 30.8, lat: 39.0 },
    { n: "Pamphylia", lon: 30.9, lat: 37.25 }, { n: "Egypt", lon: 30.8, lat: 28.6 }, { n: "Libya, Cyrene →", lon: 28.3, lat: 30.3 },
    { n: "Rome →", lon: 28.3, lat: 38.0 }, { n: "Cretans →", lon: 28.3, lat: 35.4 }, { n: "Arabs", lon: 38.5, lat: 28.4 }
  ]
};

DATA.web = {
  nodes: [
    { id: "eden", n: "Eden", g: 1, d: "God’s garden-sanctuary on his mountain, where heaven and earth first overlapped." },
    { id: "mountain", n: "Cosmic mountain", g: 1, d: "The ancient picture of the gods’ dwelling: high, central, the source of living water. Eden, Sinai and Zion all fit it." },
    { id: "adam", n: "Adam", g: 1, d: "God’s image placed in his temple as priest-king, to serve, guard and rule." },
    { id: "tabernacle", n: "Tabernacle", g: 1, d: "A portable Eden built to the pattern shown on Sinai." },
    { id: "ark", n: "Ark", g: 1, d: "God’s footstool under the cherubim, at the heart of the sanctuary." },
    { id: "temple", n: "Temple", g: 1, d: "Solomon’s house on Zion, carved like a garden and filled with glory." },
    { id: "jesus", n: "Jesus", g: 3, d: "God tabernacling in flesh: the true temple, the last Adam and the stairway between heaven and earth." },
    { id: "church", n: "Church", g: 3, d: "God’s people as his living temple and royal priesthood." },
    { id: "pentecost", n: "Pentecost", g: 3, d: "The Spirit descends unsummoned, and the scattered nations hear one message in many tongues." },
    { id: "newjer", n: "New Jerusalem", g: 3, d: "Eden fulfilled: a garden-city-temple where God lives with his people forever." },
    { id: "babel", n: "Babel ziggurat", g: 2, d: "A man-made holy mountain meant to bring a god down on human terms." },
    { id: "babylon", n: "Babylon", g: 2, d: "Bāb-ilim, the “gate of the gods”: the city of man in every age." },
    { id: "nations", n: "70 nations", g: 2, d: "The peoples scattered at Babel and placed under lesser powers (Deut 32:8–9)." },
    { id: "shem", n: "Shem · name", g: 2, d: "The name Babel tried to build and God chose to give." },
    { id: "abraham", n: "Abraham", g: 2, d: "Called out of Ur to receive a great name and bless every nation." },
    { id: "bethel", n: "Bethel", g: 2, d: "“The gate of heaven”, where God set up the stairway himself." }
  ],
  edges: [
    ["eden", "mountain", "“The holy mountain of God” (Ezek 28:14)"],
    ["eden", "tabernacle", "Cherubim, an eastern entrance, gold and onyx"],
    ["eden", "adam", "Placed to serve and guard (Gen 2:15)"],
    ["eden", "newjer", "The river and tree return; no more curse"],
    ["mountain", "babel", "A ziggurat is a man-made cosmic mountain"],
    ["mountain", "tabernacle", "Sinai’s three zones become the tent’s"],
    ["tabernacle", "ark", "The Ark rests in the Most Holy Place"],
    ["tabernacle", "temple", "The tent becomes a house"],
    ["ark", "temple", "Placed under the cherubim (1 Kgs 8:6)"],
    ["temple", "jesus", "“Destroy this temple” (John 2:19)"],
    ["temple", "babylon", "Babylon burns the Temple in 586 BC"],
    ["adam", "jesus", "The last Adam (1 Cor 15:45)"],
    ["jesus", "church", "The veil torn; “you are God’s temple”"],
    ["jesus", "bethel", "The true stairway (John 1:51)"],
    ["church", "pentecost", "The Spirit fills the new temple"],
    ["church", "newjer", "The Bride, the wife of the Lamb"],
    ["babel", "babylon", "Same place, same name"],
    ["babel", "shem", "“Let us make a name for ourselves”"],
    ["shem", "abraham", "The line of Shem leads to Abram (Gen 11:10–26)"],
    ["babel", "nations", "Scattered into the nations"],
    ["nations", "pentecost", "“Every nation under heaven” gathered"],
    ["nations", "abraham", "“In you all the families of the earth shall be blessed”"],
    ["babel", "bethel", "Gate of the gods vs. gate of heaven"],
    ["babel", "pentecost", "Babel reversed"],
    ["babylon", "newjer", "The prostitute city vs. the bride city"],
    ["shem", "pentecost", "“In the name of Jesus Christ” (Acts 2:38)"],
    ["abraham", "newjer", "“The city whose designer and builder is God” (Heb 11:10)"]
  ]
};

DATA.quiz = [
  { q: "Which two Hebrew verbs describe Adam’s job in Genesis 2:15 and the Levites’ duties at the Tabernacle?", a: ["Bārāʾ and ʿāśāh (create and make)", "ʿĀvad and shāmar (serve and guard)", "Hālak and yāshav (walk and sit)", "Zākar and shāmaʿ (remember and hear)"], c: 1,
    x: "Genesis 2:15 and Numbers 3:7–8 use the same pair, so Adam is pictured as a priest in a sanctuary." },
  { q: "What guarded the way to the tree of life, and also appeared on the Ark and the veil?", a: ["Seraphim", "Lions", "Cherubim", "Archangels"], c: 2,
    x: "Cherubim guarded Eden’s east side (Gen 3:24) and were woven into the veil and hammered onto the mercy seat (Exod 25–26)." },
  { q: "Which piece of Tabernacle furniture was shaped like a flowering almond tree?", a: ["The golden lampstand", "The table of the bread of the Presence", "The bronze laver", "The incense altar"], c: 0,
    x: "The menorah had branches, buds and almond-blossom cups (Exod 25:31–36), a stylised tree of life." },
  { q: "What building materials does Genesis 11:3 say Babel’s builders used?", a: ["Cut stone and lime", "Cedar and gold", "Fired brick and bitumen", "Sun-dried mud and straw"], c: 2,
    x: "Brick for stone and bitumen for mortar: the technique of stoneless southern Mesopotamia." },
  { q: "What was a Mesopotamian ziggurat mainly for?", a: ["A ladder for people to climb to heaven", "A royal tomb", "An astronomical observatory", "A man-made mountain where a god would come down to live"], c: 3,
    x: "The shrine at the top was prepared for the god to descend into and bless the city on its terms." },
  { q: "What does Babylon’s Akkadian name, Bāb-ilim, mean?", a: ["House of the king", "Gate of the gods", "City of rivers", "Tower of the sky"], c: 1,
    x: "Babylon named itself after its function as a meeting point of heaven and earth." },
  { q: "The Hebrew word for “name” in “let us make a name for ourselves” is also the name of…", a: ["Noah’s son Shem", "Abraham’s father Terah", "Nimrod", "Peleg"], c: 0,
    x: "Babel seeks a shem; Genesis immediately turns to “the generations of Shem,” ending with Abram, whose name God makes great." },
  { q: "Where did Jacob say, “This is none other than the house of God, and this is the gate of heaven”?", a: ["Mount Moriah", "Babel", "Bethel", "Shiloh"], c: 2,
    x: "At Bethel (Gen 28:17), after God showed him a stairway reaching heaven that God himself had set up." },
  { q: "What happened to languages at Pentecost?", a: ["Everyone spoke one language again", "Languages stayed different, but each person heard the message in their own", "Only Hebrew was spoken", "The disciples stopped speaking"], c: 1,
    x: "Diversity remains (Acts 2:6–11). The barrier that divided the nations is overcome, not the languages themselves." },
  { q: "What shape do the Most Holy Place and the New Jerusalem share?", a: ["A pyramid", "A sphere", "A perfect cube", "A seven-tiered step"], c: 2,
    x: "20 × 20 × 20 cubits (1 Kgs 6:20) and 12,000 stadia each way (Rev 21:16): the whole city becomes the Holy of Holies." }
];

DATA.sources = [
  ["Michael S. Heiser", "The Unseen Realm (2015)", "Eden as the divine dwelling, the cosmic mountain and the Deuteronomy 32 view of the nations."],
  ["G. K. Beale", "The Temple and the Church’s Mission (2004)", "The temple theme from Eden to the New Jerusalem and the church’s calling to spread God’s presence."],
  ["Gordon J. Wenham", "“Sanctuary Symbolism in the Garden of Eden Story” (1986)", "The short study that set out the Eden–Tabernacle parallels."],
  ["John H. Walton", "The Lost World of Genesis One (2009); Genesis, NIVAC (2001)", "Creation as temple inauguration and the ziggurat background of Genesis 11."],
  ["L. Michael Morales", "Who Shall Ascend the Mountain of the Lord? (2015)", "The mountain-of-God pattern through Leviticus and the whole Bible."],
  ["T. Desmond Alexander", "From Eden to the New Jerusalem (2008)", "An accessible overview of the Bible’s storyline through the theme of God’s dwelling."],
  ["Augustine of Hippo", "The City of God (AD 426)", "The classic account of the two cities formed by two loves."],
  ["Craig S. Keener", "Acts: An Exegetical Commentary (2012–15)", "The Pentecost nations list and its echo of the Table of Nations."],
  ["Andrew R. George", "“The Tower of Babel: Archaeology, History and Cuneiform Texts” (2007)", "What excavations and tablets reveal about Etemenanki."]
];

/* Public-domain artwork on Wikimedia Commons (hot-linked; each has an illustrated fallback) */
DATA.images = {
  eden: { file: "Jan_Brueghel_de_Oude_en_Peter_Paul_Rubens_-_Het_aards_paradijs_met_de_zondeval_van_Adam_en_Eva.jpg", cap: "Jan Brueghel the Elder and Peter Paul Rubens, <i>The Garden of Eden with the Fall of Man</i> (c. 1615), Mauritshuis", ar: "3/2", art: "garden" },
  ark: { file: "James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg", cap: "James Tissot, <i>The Ark Passes Over the Jordan</i> (c. 1896–1902)", ar: "4/3", art: "ark" },
  temple: { file: "Second_Temple.jpg", cap: "Model of Herod’s Temple in Jerusalem (Holyland Model, Israel Museum)", ar: "4/3", art: "temple" },
  menorah: { file: "Arch_of_Titus_Menorah.png", cap: "The Temple menorah carried off as spoil after AD 70, relief on the Arch of Titus, Rome", ar: "16/9", art: "menorah" },
  bruegel: { file: "Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project_-_edited.jpg", cap: "Pieter Bruegel the Elder, <i>The Tower of Babel</i> (1563), Kunsthistorisches Museum, Vienna", ar: "4/3", art: "tower" },
  ishtar: { file: "Ishtar_Gate_at_Berlin_Museum.jpg", cap: "The Ishtar Gate of Babylon (c. 575 BC), reconstructed in the Pergamon Museum, Berlin", ar: "4/3", art: "gate" },
  ur: { file: "Ziggurat_of_ur.jpg", cap: "The restored Great Ziggurat of Ur (21st century BC), southern Iraq", ar: "3/2", art: "zig" },
  hanging: { file: "Hanging_Gardens_of_Babylon.jpg", cap: "A 16th-century engraving imagining the Hanging Gardens of Babylon", ar: "3/2", art: "garden2" },
  tongues: { file: "Confusion_of_Tongues.png", cap: "Gustave Doré, <i>The Confusion of Tongues</i> (1865–66)", ar: "4/5", art: "tower" }
};

/* Part II: The Serpent and the Seed */
DATA.nachash = {
  serpent: { label: "Serpent", color: "var(--eden)", heb: "נָחָשׁ · nāḥāš",
    head: "The noun: a serpent",
    text: "The plain meaning, and the one every translation gives: “the serpent was more crafty than any other beast of the field” (Gen 3:1). The same noun names the fiery serpents of the wilderness (Num 21:6–9), the serpent at the bottom of the sea (Amos 9:3) and Leviathan, “the fleeing serpent” (Isa 27:1)." },
  diviner: { label: "Diviner", color: "var(--babel)", heb: "נִחֵשׁ · niḥēš",
    head: "The verb: to divine, to read omens",
    text: "As a verb the same consonants mean to practise divination: to obtain hidden knowledge from the spirit realm. Joseph’s silver cup is the one he “uses for divination” (Gen 44:5, 15). Israel is told, “You shall not interpret omens” (Lev 19:26) and “There shall not be found among you … anyone who practises divination” (Deut 18:10). In Eden the nāḥāš offers exactly that: knowledge from the divine side, against God’s word." },
  shining: { label: "Shining one", color: "var(--accent)", heb: "נְחֹשֶׁת · nəḥōšet",
    head: "Bronze: the shining one",
    text: "A closely related word means bronze or copper, which gleams when polished. Divine beings are described this way: the cherubim’s feet “sparkled like burnished bronze” (Ezek 1:7), the heavenly man in Daniel 10:6 had arms and legs “like the gleam of burnished bronze”, and the risen Christ’s feet are “like burnished bronze” (Rev 1:15). Moses’ bronze serpent is literally a nəḥaš nəḥōšet (Num 21:9)." },
  all: { label: "All three", color: "var(--flame)", heb: "a profile, not a pet",
    head: "Put together: a divine being",
    text: "Serpentine in form, a source of knowledge from the divine realm, and radiant: the word describes a profile, not a reptile. An Israelite ear would have heard all three at once, which English loses when it can only say “serpent”. Scholars debate whether these are one root or sound-alike words; Michael Heiser and others argue the author chose nāḥāš precisely because it carries all three." }
};

DATA.notSnake = [
  { icon: "speak", title: "It speaks", text: "The only other speaking animal in the Old Testament is Balaam’s donkey, and only because “the LORD opened the mouth of the donkey” (Num 22:28). Here no explanation is given." },
  { icon: "scroll", title: "It knows God’s words", text: "It quotes and twists the command: “Did God actually say, ‘You shall not eat of any tree’?” (Gen 3:1), when God had said the opposite (Gen 2:16–17)." },
  { icon: "scale", title: "It argues about God", text: "It attacks God’s motives: “God knows that when you eat of it your eyes will be opened” (Gen 3:5). This is theology, not instinct." },
  { icon: "council", title: "It talks like the council", text: "“You will be like God (kēʾlōhîm)”. God later confirms, “the man has become like one of us” (Gen 3:22). The plural echoes the heavenly council (Gen 1:26; Ps 82:1; 1 Kgs 22:19–22; Job 1:6)." },
  { icon: "temple", title: "It is inside the sanctuary", text: "Eden is God’s dwelling (Part I). The nāḥāš is not wandering in from outside; it already has access to God’s house." },
  { icon: "dust", title: "The curse doesn’t fit biology", text: "Snakes do not eat dust, and fear of snakes is not universal. “Belly” and “dust” are the Bible’s language for humiliation and death (Ps 72:9; Mic 7:17; Gen 3:19)." }
];

DATA.ezekiel = [
  { v: "28:12", text: "You were the signet of perfection, full of wisdom and perfect in beauty.", note: "The chapter begins as a lament (qînâ) over the human king of Tyre, a proud island trading city. Then the imagery outgrows any human king." },
  { v: "28:13", text: "You were in Eden, the garden of God; every precious stone was your covering.", note: "No king of Tyre was ever in Eden. The nine stones listed match nine of the twelve on the high priest’s breastpiece (Exod 28:17–20): a priestly guardian of sacred space. See the breastpiece beside this list.", gems: true },
  { v: "28:14", text: "You were an anointed guardian cherub. I placed you; you were on the holy mountain of God.", note: "A cherub is a throne-guardian (Gen 3:24; Exod 25:20). Eden is “the holy mountain of God”, the cosmic mountain of Part I. (The Greek translation reads “with the cherub”, making the figure a human placed beside a cherub; either way the setting is Eden.)" },
  { v: "28:14", text: "In the midst of the stones of fire you walked.", note: "The fiery divine realm around God’s throne, compare the burning coals among the living creatures (Ezek 1:13)." },
  { v: "28:15", text: "You were blameless in your ways from the day you were created, till unrighteousness was found in you.", note: "Created, not born. Blameless at first: evil was not built in, it was found later." },
  { v: "28:17", text: "Your heart was proud because of your beauty; you corrupted your wisdom for the sake of your splendor.", note: "Pride is the root. Beauty and wisdom, gifts from God, become reasons to grasp." },
  { v: "28:16–17", text: "I cast you as a profane thing from the mountain of God … I cast you to the ground.", note: "Expelled from the holy mountain and thrown to the ʾereṣ, the ground, the same word used of the underworld. Compare Adam and Eve driven from the garden (Gen 3:24)." }
];

DATA.breastpiece = [
  ["Sardius", "#b3312c", true], ["Topaz", "#d9b44a", true], ["Carbuncle", "#8f1d33", true],
  ["Emerald", "#2e8b57", true], ["Sapphire", "#2851a3", true], ["Diamond", "#dfe7ee", true],
  ["Jacinth", "#e07b39", false], ["Agate", "#9c8a74", false], ["Amethyst", "#8e5bb5", false],
  ["Beryl", "#6fbdb4", true], ["Onyx", "#2b2b2b", true], ["Jasper", "#6e8b3d", true]
];

DATA.iwill = [
  { t: "I will ascend to heaven", y: 0 },
  { t: "above the stars of God I will set my throne on high", y: 1 },
  { t: "I will sit on the mount of assembly in the far reaches of the north", y: 2 },
  { t: "I will ascend above the heights of the clouds", y: 3 },
  { t: "I will make myself like the Most High", y: 4 }
];

DATA.descent = [
  { lvl: 0, title: "Guardian on the mountain", ref: "Ezek 28:14", text: "An anointed guardian cherub on the holy mountain of God, walking among the stones of fire." },
  { lvl: 2, title: "Cast to the ground", ref: "Ezek 28:16–17", text: "“I cast you as a profane thing from the mountain of God … I cast you to the ground (ʾereṣ).”" },
  { lvl: 3, title: "Belly and dust", ref: "Gen 3:14", text: "“On your belly you shall go, and dust you shall eat all the days of your life.” From the highest place to the lowest; dust is the realm of death (Gen 3:19; Isa 65:25)." },
  { lvl: 4, title: "Down to Sheol", ref: "Isa 14:12–15", text: "“How you are fallen from heaven, O Day Star, son of Dawn! … You are brought down to Sheol, to the far reaches of the pit.” The ʾereṣ can mean the underworld itself, “the land whose bars closed upon me” (Jonah 2:6)." },
  { lvl: 2, title: "Falling like lightning", ref: "Luke 10:18; John 12:31", text: "As the kingdom advances, Jesus says, “I saw Satan fall like lightning from heaven,” and before the cross, “now will the ruler of this world be cast out.”" },
  { lvl: 2, title: "Thrown down", ref: "Rev 12:9", text: "“The great dragon was thrown down, that ancient serpent, who is called the devil and Satan, the deceiver of the whole world.”" },
  { lvl: 4, title: "Bound in the abyss", ref: "Rev 20:1–3", text: "An angel “seized the dragon, that ancient serpent … and bound him for a thousand years, and threw him into the pit.”" },
  { lvl: 5, title: "The lake of fire", ref: "Rev 20:10", text: "“The devil who had deceived them was thrown into the lake of fire.” The downward path that began in Genesis 3 ends." },
  { lvl: -1, title: "The garden without a serpent", ref: "Rev 22:1–5", text: "River, tree, God’s face, “no longer will there be anything accursed.” The garden-temple is restored, and the nāḥāš is nowhere in it." }
];

DATA.curseLines = [
  { t: "Because you have done this, cursed are you above all livestock and above all beasts of the field;", ref: "Gen 3:14a", note: "A demotion: the one who was “more crafty than any beast” (3:1) is now cursed below them all." },
  { t: "on your belly you shall go,", ref: "Gen 3:14b", note: "The posture of a defeated enemy: “May his enemies lick the dust” (Ps 72:9); nations “lick the dust like a serpent” (Mic 7:17)." },
  { t: "and dust you shall eat all the days of your life.", ref: "Gen 3:14c", note: "Dust belongs to death: “to dust you shall return” (Gen 3:19); the dead “dwell in the dust” (Isa 26:19). Even in the new creation, “dust shall be the serpent’s food” (Isa 65:25)." },
  { t: "I will put enmity between you and the woman, and between your offspring and her offspring;", ref: "Gen 3:15a", note: "Two lines of “seed” (zeraʿ) at war through history. Trace them in the timeline below." },
  { t: "he shall bruise your head, and you shall bruise his heel.", ref: "Gen 3:15b", note: "The protoevangelium, the first gospel. A head wound is fatal; a heel wound is painful but not final. “The God of peace will soon crush Satan under your feet” (Rom 16:20)." }
];

DATA.seedWar = [
  { k: "seed", n: "The promise", ref: "Gen 3:15", text: "Before Abraham, Sinai or David, God announces that the woman’s offspring will crush the serpent’s head." },
  { k: "seed", n: "“A man: the LORD”", ref: "Gen 4:1", text: "Eve names Cain (qayin) saying, literally, “I have gotten a man, the LORD” (ʾet-YHWH). Some ancient readers heard her hoping Cain was the promised one." },
  { k: "attack", n: "Cain kills Abel", ref: "Gen 4:8; 1 John 3:12", text: "The first murder. John says Cain “was of the evil one and murdered his brother.” The serpent’s line strikes first." },
  { k: "seed", n: "Seth: “another offspring”", ref: "Gen 4:25", text: "“God has appointed for me another offspring (zeraʿ) instead of Abel.” The word from Genesis 3:15 returns, and the line continues." },
  { k: "seed", n: "Noah", ref: "Gen 5:29; 6:8", text: "His father hopes, “Out of the ground that the LORD has cursed, this one shall bring us relief.” Noah finds favour and the line survives the flood." },
  { k: "seed", n: "Abraham", ref: "Gen 22:18", text: "“In your offspring shall all the nations of the earth be blessed.” The seed is now tied to one family." },
  { k: "seed", n: "Judah", ref: "Gen 49:10", text: "“The scepter shall not depart from Judah … until tribute comes to him; and to him shall be the obedience of the peoples.” A royal seed." },
  { k: "attack", n: "Pharaoh’s decree", ref: "Exod 1:16, 22", text: "“Every son that is born to the Hebrews you shall cast into the Nile.” Moses is drawn out of the water alive." },
  { k: "seed", n: "David", ref: "2 Sam 7:12–16", text: "“I will raise up your offspring after you … I will establish the throne of his kingdom forever.”" },
  { k: "attack", n: "Athaliah", ref: "2 Kgs 11:1–3", text: "Queen Athaliah “destroyed all the royal family.” One baby, Joash, is hidden in the Temple for six years. The line of David hangs by a thread." },
  { k: "seed", n: "Immanuel", ref: "Isa 7:14", text: "“The virgin shall conceive and bear a son, and shall call his name Immanuel.”" },
  { k: "attack", n: "Haman", ref: "Esth 3:6, 13", text: "A decree “to destroy, to kill, and to annihilate all Jews, young and old, women and children, in one day.” It is overturned." },
  { k: "seed", n: "Born of woman", ref: "Gal 4:4; Gal 3:16", text: "“God sent forth his Son, born of woman.” Paul: the promise was “not ‘and to offsprings,’ referring to many, but … ‘and to your offspring,’ who is Christ.”" },
  { k: "attack", n: "Herod", ref: "Matt 2:16", text: "Herod kills every boy in Bethlehem two years old and under. The child escapes to Egypt." },
  { k: "attack", n: "The heel struck", ref: "Luke 22:3, 53; John 13:2", text: "Satan enters Judas; “this is your hour, and the power of darkness.” The cross is the bruised heel." },
  { k: "seed", n: "The head crushed", ref: "Col 2:15; Heb 2:14", text: "“Through death he might destroy the one who has the power of death, that is, the devil.” He “disarmed the rulers and authorities … triumphing over them.”" },
  { k: "seed", n: "Under your feet", ref: "Rom 16:20", text: "“The God of peace will soon crush Satan under your feet.” The church shares in the victory of the seed." },
  { k: "attack", n: "The dragon’s last war", ref: "Rev 12:4, 17", text: "The dragon waits to devour the woman’s child, fails, and makes war “on the rest of her offspring.” Then it is thrown down." }
];

DATA.serpentQuiz = [
  { q: "Which three ideas can the Hebrew word nāḥāš suggest?", a: ["Serpent, diviner, shining (bronze)", "Snake, dragon, lizard", "Tree, fruit, garden", "Angel, king, priest"], c: 0,
    x: "Serpent (noun), to divine (verb) and bronze or shining (nəḥōšet): the three senses an Israelite reader would catch together." },
  { q: "The stones covering the figure in Ezekiel 28:13 match which object?", a: ["The Ark’s mercy seat", "The high priest’s breastpiece", "Solomon’s throne", "The walls of Babylon"], c: 1,
    x: "Nine of the twelve breastpiece stones of Exodus 28:17–20 appear in Ezekiel 28:13: a priestly guardian in Eden." },
  { q: "What did King Hezekiah call the bronze serpent when he destroyed it?", a: ["Leviathan", "Nehushtan", "Seraph", "Behemoth"], c: 1,
    x: "Nehushtan (2 Kgs 18:4), a pun on nāḥāš (serpent) and nəḥōšet (bronze). Israel had begun burning incense to it." },
  { q: "According to Galatians 3:16, the promised “offspring” is…", a: ["All of Israel", "Every believer", "One person, Christ", "The prophets"], c: 2,
    x: "Paul notes the singular: “to your offspring, who is Christ.”" }
];

Object.assign(DATA.images, {
  fall: { file: "Michelangelo,_Fall_and_Expulsion_from_Garden_of_Eden_00.jpg", cap: "Michelangelo, <i>The Fall and Expulsion from the Garden of Eden</i> (1508–12), Sistine Chapel ceiling. He paints the serpent with a human upper body.", ar: "16/9", art: "serpent" },
  nebo: { file: "Brazen_Serpent_Sculpture.jpg", cap: "Giovanni Fantoni’s bronze serpent sculpture on Mount Nebo, Jordan, recalling Numbers 21 and John 3:14", ar: "3/4", art: "pole" },
  dragon: { file: "William_Blake_-_The_Great_Red_Dragon_and_the_Woman_Clothed_with_the_Sun_-_Google_Art_Project.jpg", cap: "William Blake, <i>The Great Red Dragon and the Woman Clothed with the Sun</i> (c. 1803–05), Revelation 12", ar: "3/4", art: "serpent" }
});

DATA.quiz.push(...DATA.serpentQuiz);

DATA.web.nodes.push(
  { id: "serpent", n: "The serpent", g: 4, d: "The nāḥāš: a shining, divining, serpentine being inside God’s sanctuary, cast down and finally destroyed." },
  { id: "seed", n: "The seed", g: 4, d: "The woman’s offspring promised in Genesis 3:15, traced through Seth, Abraham and David to Christ." }
);
DATA.web.edges.push(
  ["serpent", "eden", "Appears inside God’s sanctuary (Gen 3:1)"],
  ["serpent", "adam", "The guardian fails to guard"],
  ["serpent", "mountain", "Cast from the mountain of God (Ezek 28:16)"],
  ["serpent", "babylon", "Isaiah 14’s “Day Star” taunt is aimed at Babylon’s king"],
  ["serpent", "jesus", "“As Moses lifted up the serpent …” (John 3:14)"],
  ["serpent", "newjer", "No serpent and no curse in the restored garden (Rev 22:3)"],
  ["seed", "serpent", "Enmity between the two seeds (Gen 3:15)"],
  ["seed", "abraham", "“In your offspring all nations blessed” (Gen 22:18)"],
  ["seed", "jesus", "The one offspring, Christ (Gal 3:16)"],
  ["seed", "shem", "The line runs through Shem (Gen 11:10–26)"]
);

DATA.sources.push(
  ["Gordon J. Wenham", "Genesis 1–15, Word Biblical Commentary (1987)", "Careful reading of Genesis 3, the serpent and the curse."],
  ["James M. Hamilton Jr.", "“The Skull Crushing Seed of the Woman” (2006)", "How Genesis 3:15 echoes through the rest of Scripture."]
);

/* Where Heaven Meets Earth — interactive behaviour */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    setAttrs(n, attrs);
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  function sv(tag, attrs, ...kids) {
    const n = document.createElementNS(NS, tag);
    setAttrs(n, attrs);
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  function setAttrs(n, attrs) {
    if (!attrs) return;
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (k === "style" && typeof v === "object") Object.assign(n.style, v);
      else n.setAttribute(k, v === true ? "" : v);
    }
  }
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };
  /* Turn "(Gen 2:10)"-style references inside plain text into styled spans */
  function refify(t) {
    return String(t).replace(/\(([1-3]?\s?[A-Z][a-z]+\.?\s\d+[^()]*)\)/g, '(<span class="ref">$1</span>)');
  }

  /* ---------------- Colour schemes ---------------- */
  const root = document.documentElement;
  function applyScheme(id) {
    if (id === "auto") root.removeAttribute("data-scheme"); else root.setAttribute("data-scheme", id);
    store.set("hme-scheme", id);
    $$(".scheme-opt").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === id)));
    syncAccentInput();
  }
  function applyAccent(c) {
    if (c) {
      root.style.setProperty("--accent", c);
      root.style.setProperty("--glow", `color-mix(in srgb, ${c} 18%, transparent)`);
    } else {
      root.style.removeProperty("--accent");
      root.style.removeProperty("--glow");
    }
    store.set("hme-accent", c || null);
  }
  function syncAccentInput() {
    const v = getComputedStyle(root).getPropertyValue("--accent").trim();
    if (/^#[0-9a-f]{6}$/i.test(v)) $("#accentPick").value = v;
  }
  function initSchemes() {
    const grid = $("#schemeGrid");
    DATA.schemes.forEach(s => {
      grid.append(el("button", { class: "scheme-opt", type: "button", "data-id": s.id, "aria-pressed": "false", onclick: () => applyScheme(s.id) },
        el("span", { class: "sw", "aria-hidden": "true" }, s.sw.map(c => el("i", { style: { background: c } }))),
        el("b", { text: s.name }), el("small", { text: s.note })));
    });
    const btn = $("#schemeBtn"), panel = $("#schemePanel");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      btn.setAttribute("aria-expanded", String(!panel.hidden));
      if (!panel.hidden) syncAccentInput();
    });
    document.addEventListener("click", e => { if (!panel.hidden && !panel.contains(e.target)) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); } });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); btn.focus(); } });
    $("#accentPick").addEventListener("input", e => applyAccent(e.target.value));
    $("#accentReset").addEventListener("click", () => { applyAccent(null); syncAccentInput(); });
    applyScheme(store.get("hme-scheme") || "auto");
    const acc = store.get("hme-accent");
    if (acc) applyAccent(acc);
  }

  /* ---------------- Icons ---------------- */
  const ICONS = {
    mountain: "M3 20 L10 7 L14 13 L16 10 L21 20 Z M10 7 L12 11",
    river: "M12 3 C12 8 12 9 12 11 M12 11 C9 14 6 17 4 21 M12 11 C11 15 10 18 9 21 M12 11 C13 15 14 18 15 21 M12 11 C15 14 18 17 20 21",
    hands: "M4 14 C6 12 8 12 10 13 L14 15 M20 14 C18 12 16 12 14 13 M12 3 L12 9 M9 6 L15 6 M4 14 L4 20 M20 14 L20 20",
    steps: "M5 20 C5 17 8 17 8 20 Z M10 15 C10 12 13 12 13 15 Z M15 10 C15 7 18 7 18 10 Z",
    wings: "M12 12 C8 4 3 5 2 9 C5 9 8 11 12 12 C16 11 19 9 22 9 C21 5 16 4 12 12 Z M12 12 L12 21",
    gem: "M6 4 L18 4 L22 9 L12 21 L2 9 Z M2 9 L22 9 M9 4 L7 9 L12 21 L17 9 L15 4",
    tree: "M12 21 L12 11 M12 14 L8 10 M12 12 L16 8 M12 3 C7 3 5 7 7 10 C4 12 7 16 12 15 C17 16 20 12 17 10 C19 7 17 3 12 3 Z",
    robe: "M9 3 L15 3 L19 7 L17 10 L16 9 L17 21 L7 21 L8 9 L7 10 L5 7 Z M12 3 L12 8",
    speak: "M4 5 H20 V15 H11 L6 19 V15 H4 Z M8 9 H16 M8 12 H13",
    scroll: "M6 4 H17 C19 4 19 7 17 7 H8 V18 C8 20 5 20 5 18 V6 C5 4 6 4 6 4 Z M8 7 V18 C8 20 19 20 19 18 V7",
    scale: "M12 4 V20 M6 20 H18 M5 8 H19 M5 8 L2 14 H8 Z M19 8 L16 14 H22 Z",
    council: "M12 4 A2 2 0 1 1 12 8 A2 2 0 1 1 12 4 M5 9 A2 2 0 1 1 5 13 A2 2 0 1 1 5 9 M19 9 A2 2 0 1 1 19 13 A2 2 0 1 1 19 9 M9 20 C9 14 15 14 15 20 M2 20 C2 16 8 16 8 20 M16 20 C16 16 22 16 22 20",
    temple: "M3 20 H21 M5 20 V10 M19 20 V10 M9 20 V10 M15 20 V10 M3 10 L12 4 L21 10 Z",
    dust: "M4 18 C8 16 16 16 20 18 M6 14 C9 12 13 13 15 11 C17 9 20 10 20 10 M7 21 H17"
  };
  function icon(name, cls) {
    return sv("svg", { viewBox: "0 0 24 24", class: cls || "icon", "aria-hidden": "true", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" },
      sv("path", { d: ICONS[name] || ICONS.tree }));
  }

  /* ---------------- Hero ---------------- */
  function initHero() {
    const g = $("#heroStars");
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 46; i++) {
      const c = sv("circle", { cx: (rnd() * 560).toFixed(1), cy: (rnd() * 300).toFixed(1), r: (0.6 + rnd() * 1.6).toFixed(2), fill: "var(--accent)", opacity: (0.25 + rnd() * 0.6).toFixed(2) });
      if (i % 3 === 0) { c.classList.add("twinkle"); c.style.animationDelay = (rnd() * 3).toFixed(2) + "s"; }
      g.append(c);
    }
  }

  /* ---------------- Clues ---------------- */
  function initClues() {
    const grid = $("#clueGrid");
    const seen = new Set();
    const update = () => {
      $("#clueLabel").textContent = `${seen.size} of ${DATA.clues.length} clues uncovered`;
      $("#clueMeter").style.width = (seen.size / DATA.clues.length * 100) + "%";
    };
    DATA.clues.forEach((c, i) => {
      const card = el("button", { class: "clue reveal", type: "button", "aria-pressed": "false", "aria-label": `Clue ${i + 1}: ${c.title}. Turn over.` },
        el("div", { class: "clue-inner" },
          el("div", { class: "clue-face front" }, icon(c.icon), el("h3", { text: c.title }), el("p", { html: refify(c.front) }), el("span", { class: "hint", text: "Tap to see the sanctuary link" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: c.ref }), el("h3", { text: "In the sanctuary" }), el("p", { html: refify(c.back) }), el("span", { class: "hint", text: "Tap to turn back" }))));
      card.addEventListener("click", () => {
        const on = card.classList.toggle("flipped");
        card.setAttribute("aria-pressed", String(on));
        seen.add(i); update();
      });
      grid.append(card);
    });
    $("#clueAll").addEventListener("click", () => {
      $$(".clue", grid).forEach((c, i) => { setTimeout(() => { c.classList.add("flipped"); c.setAttribute("aria-pressed", "true"); seen.add(i); update(); }, reduceMotion ? 0 : i * 110); });
    });
    update();
  }

  /* ---------------- Mountain ---------------- */
  function initMountain() {
    const stage = $("#mtnStage");
    const svg = sv("svg", { viewBox: "0 0 600 430", role: "img", "aria-label": "A mountain divided into three zones of holiness" });
    const bands = [
      sv("polygon", { points: "300,40 386.7,160 213.3,160" }),
      sv("polygon", { points: "213.3,160 386.7,160 473.3,280 126.7,280" }),
      sv("polygon", { points: "126.7,280 473.3,280 560,400 40,400" })
    ];
    const labels = [
      sv("text", { x: 300, y: 148, "text-anchor": "middle", "font-size": 13, "font-weight": 700 }),
      sv("text", { x: 300, y: 262, "text-anchor": "middle", "font-size": 15, "font-weight": 700 }),
      sv("text", { x: 300, y: 384, "text-anchor": "middle", "font-size": 16, "font-weight": 700 })
    ];
    const iconG = sv("g", { transform: "translate(300 96)" });
    const river = sv("g", { fill: "none", stroke: "var(--babel)", "stroke-width": 3, "stroke-linecap": "round" },
      sv("path", { class: "flow", d: "M300 120 L300 300" }), sv("path", { class: "flow", d: "M300 300 C270 330 200 370 150 400" }),
      sv("path", { class: "flow", d: "M300 300 C295 340 280 380 270 400" }), sv("path", { class: "flow", d: "M300 300 C305 340 320 380 330 400" }),
      sv("path", { class: "flow", d: "M300 300 C330 330 400 370 450 400" }));
    const rings = sv("g", { fill: "none", stroke: "var(--accent)", opacity: .5 },
      sv("circle", { cx: 300, cy: 96, r: 40, "stroke-dasharray": "2 5" }), sv("circle", { cx: 300, cy: 96, r: 64, opacity: .5 }));
    svg.append(rings);
    bands.forEach((b, i) => { b.classList.add("band"); b.style.transition = "fill .6s, opacity .4s"; b.style.cursor = "pointer"; b.addEventListener("click", () => focusZone(i)); svg.append(b); });
    svg.append(river, iconG, ...labels, sv("line", { x1: 20, y1: 400, x2: 580, y2: 400, stroke: "var(--line)", "stroke-width": 2 }));
    stage.append(svg);

    const ICON_SVG = {
      tree: () => [sv("rect", { x: -3, y: 0, width: 6, height: 26, rx: 2, fill: "var(--ink)", opacity: .7 }), sv("circle", { cx: 0, cy: -6, r: 18, fill: "var(--eden)" }), sv("circle", { cx: -13, cy: 4, r: 10, fill: "var(--eden)" }), sv("circle", { cx: 13, cy: 4, r: 10, fill: "var(--eden)" }), sv("circle", { cx: -5, cy: -8, r: 3, fill: "var(--accent-ink)" }), sv("circle", { cx: 7, cy: 0, r: 3, fill: "var(--accent-ink)" })],
      fire: () => [sv("ellipse", { cx: 0, cy: -10, rx: 46, ry: 18, fill: "var(--muted)", opacity: .5, class: "pulse" }), sv("path", { d: "M0 24 C-16 10 -8 -4 0 -18 C4 -6 16 2 0 24 Z", fill: "var(--flame)" }), sv("path", { d: "M0 22 C-7 14 -3 6 0 -2 C3 8 8 12 0 22 Z", fill: "var(--accent)" })],
      ark: () => [sv("rect", { x: -22, y: 2, width: 44, height: 20, fill: "var(--accent-ink)", stroke: "var(--accent-ink)" }), sv("path", { d: "M-22 2 Q-12 -22 0 -8 Q12 -22 22 2", fill: "none", stroke: "var(--accent-ink)", "stroke-width": 3 })],
      temple: () => [sv("path", { d: "M-26 22 L-26 -6 L0 -20 L26 -6 L26 22 Z", fill: "var(--accent-ink)" }), sv("rect", { x: -6, y: 6, width: 12, height: 16, fill: "var(--accent)" })],
      city: () => [sv("rect", { x: -26, y: -16, width: 52, height: 38, fill: "none", stroke: "var(--accent-ink)", "stroke-width": 3 }), ...[-16, 0, 16].map(x => sv("rect", { x: x - 4, y: 8, width: 8, height: 14, fill: "var(--accent-ink)" })), sv("circle", { cx: 0, cy: -2, r: 5, fill: "var(--accent-ink)" })]
    };

    const modes = Object.keys(DATA.mountain);
    const chips = $("#mtnModes");
    let current = "eden";
    modes.forEach(m => chips.append(el("button", { class: "chip", type: "button", "data-m": m, "aria-pressed": String(m === current), onclick: () => setMode(m), text: DATA.mountain[m].label })));

    function zoneColors(m) {
      return m.allGold ? ["var(--accent)", "var(--accent)", "var(--accent)"] : ["var(--accent)", "var(--eden)", "var(--muted)"];
    }
    function focusZone(i) {
      $$(".zone", $("#mtnZones")).forEach((z, j) => z.classList.toggle("on", j === i));
      bands.forEach((b, j) => b.style.opacity = (i == null || j === i) ? "" : ".35");
    }
    function setMode(id) {
      current = id;
      const m = DATA.mountain[id];
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === id)));
      $("#mtnTitle").textContent = m.title;
      $("#mtnIntro").innerHTML = refify(m.intro);
      const cols = zoneColors(m);
      const ops = m.allGold ? [1, .8, .6] : [1, 1, .35];
      bands.forEach((b, i) => { b.setAttribute("fill", cols[i]); b.setAttribute("fill-opacity", ops[i]); });
      const fills = m.allGold ? ["var(--accent-ink)", "var(--accent-ink)", "var(--accent-ink)"] : ["var(--accent-ink)", "var(--surface)", "var(--ink)"];
      labels.forEach((l, i) => { l.textContent = m.short[i]; l.setAttribute("fill", fills[i]); });
      iconG.replaceChildren(...ICON_SVG[m.icon]());
      river.style.display = (id === "eden" || id === "jerusalem") ? "" : "none";
      const zones = $("#mtnZones");
      zones.replaceChildren(...m.zones.map((z, i) => {
        const d = el("div", { class: "zone", tabindex: "0", role: "button" }, el("i", { style: { background: cols[i], opacity: ops[i] } }), el("div", {}, el("b", { text: z[0] }), el("span", { html: refify(z[1]) })));
        d.addEventListener("mouseenter", () => focusZone(i));
        d.addEventListener("mouseleave", () => focusZone(null));
        d.addEventListener("focus", () => focusZone(i));
        d.addEventListener("blur", () => focusZone(null));
        d.addEventListener("click", () => focusZone(i));
        return d;
      }));
      focusZone(null);
    }
    setMode(current);
  }

  /* ---------------- Tabernacle ---------------- */
  function initTabernacle() {
    const stage = $("#tabStage");
    const svg = sv("svg", { viewBox: "0 0 600 320", role: "img", "aria-label": "Plan of the Tabernacle court, with the gate on the east" });
    // court posts
    const court = sv("g");
    court.append(sv("rect", { x: 20, y: 10, width: 560, height: 280, fill: "var(--bg)", stroke: "var(--line)", "stroke-width": 2 }));
    for (let x = 20; x <= 580; x += 28) { court.append(sv("circle", { cx: x, cy: 10, r: 2.5, fill: "var(--muted)" }), sv("circle", { cx: x, cy: 290, r: 2.5, fill: "var(--muted)" })); }
    for (let y = 38; y < 290; y += 28) { court.append(sv("circle", { cx: 20, cy: y, r: 2.5, fill: "var(--muted)" })); if (y < 94 || y > 206) court.append(sv("circle", { cx: 580, cy: y, r: 2.5, fill: "var(--muted)" })); }
    svg.append(court);
    // gate (blue, purple, scarlet)
    svg.append(sv("rect", { x: 576, y: 94, width: 3, height: 112, fill: "var(--babel)" }), sv("rect", { x: 579, y: 94, width: 3, height: 112, fill: "#6b3a8f" }), sv("rect", { x: 582, y: 94, width: 3, height: 112, fill: "var(--flame)" }));
    // tent
    svg.append(sv("rect", { x: 76, y: 122, width: 168, height: 56, fill: "var(--accent)", "fill-opacity": .12, stroke: "var(--accent)", "stroke-width": 1.5 }));
    svg.append(sv("rect", { x: 76, y: 122, width: 56, height: 56, fill: "var(--accent)", "fill-opacity": .22 }));
    svg.append(sv("text", { x: 104, y: 116, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "MOST HOLY"));
    svg.append(sv("text", { x: 188, y: 116, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "HOLY PLACE"));
    svg.append(sv("text", { x: 400, y: 30, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 2 }, "COURTYARD · 100 × 50 CUBITS"));
    // compass
    svg.append(sv("g", { transform: "translate(40 300)", fill: "var(--muted)", "font-size": 10, "font-weight": 700 },
      sv("text", { x: 0, y: 14 }, "← WEST, toward the presence"), sv("text", { x: 520, y: 14, "text-anchor": "end" }, "EAST · entrance →")));

    const draw = {
      gate: () => [sv("rect", { class: "hl", x: 568, y: 140, width: 24, height: 20, rx: 4, fill: "transparent", stroke: "transparent" })],
      altar: () => [sv("rect", { class: "hl", x: 356, y: 136, width: 28, height: 28, fill: "#a8743a", stroke: "transparent" }), sv("path", { d: "M362 150 L378 150 M370 142 L370 158", stroke: "var(--surface)", "stroke-width": 2 })],
      laver: () => [sv("circle", { class: "hl", cx: 290, cy: 150, r: 11, fill: "var(--babel)", "fill-opacity": .35, stroke: "#a8743a", "stroke-width": 2.5 })],
      table: () => [sv("rect", { class: "hl", x: 190, y: 123, width: 20, height: 11, fill: "var(--accent)", stroke: "transparent" })],
      lamp: () => [sv("path", { class: "hl", d: "M192 166 Q200 182 208 166 M196 166 Q200 176 204 166 M200 164 L200 180", fill: "none", stroke: "var(--accent)", "stroke-width": 2 })],
      incense: () => [sv("rect", { class: "hl", x: 144, y: 144, width: 12, height: 12, fill: "var(--accent)", stroke: "transparent" })],
      veil: () => [sv("rect", { class: "hl", x: 129, y: 122, width: 6, height: 56, fill: "var(--flame)", stroke: "transparent" }), sv("rect", { x: 130.5, y: 122, width: 1.5, height: 56, fill: "var(--babel)" })],
      ark: () => [sv("rect", { class: "hl", x: 94, y: 143, width: 20, height: 14, fill: "var(--accent)", stroke: "transparent" }), sv("path", { d: "M94 143 Q99 132 104 140 Q109 132 114 143", fill: "none", stroke: "var(--accent)", "stroke-width": 1.5 })]
    };
    const labelPos = { gate: [556, 176, "end"], altar: [370, 182], laver: [290, 178], table: [214, 132, "start"], lamp: [214, 178, "start"], incense: [150, 196], veil: [132, 212], ark: [102, 196] };
    const short = { gate: "Gate", altar: "Altar", laver: "Laver", table: "Bread", lamp: "Lampstand", incense: "Incense", veil: "Veil", ark: "Ark" };
    const nodes = {};
    DATA.tabernacle.forEach(item => {
      const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": item.name });
      g.append(sv("circle", { cx: item.x, cy: item.y, r: 18, fill: "transparent" }), ...draw[item.id]());
      const lp = labelPos[item.id];
      g.append(sv("text", { x: lp[0], y: lp[1], "text-anchor": lp[2] || "middle", "font-size": 10, "font-weight": 700, fill: "var(--ink)" }, short[item.id]));
      g.addEventListener("click", () => select(item.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(item.id); } });
      svg.append(g); nodes[item.id] = g;
    });
    const walker = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.1s cubic-bezier(.4,.1,.2,1)" } },
      sv("circle", { r: 13, fill: "var(--accent)", opacity: .25, class: "pulse" }), sv("circle", { r: 6, fill: "var(--ink)", stroke: "var(--surface)", "stroke-width": 2 }));
    svg.append(walker);
    stage.append(svg);

    const order = ["gate", "altar", "laver", "table", "lamp", "incense", "veil", "ark"];
    let idx = 0, walking = null;
    function moveWalker(id) {
      const it = DATA.tabernacle.find(t => t.id === id);
      const x = id === "gate" ? 596 : it.x, y = id === "table" ? 140 : id === "lamp" ? 160 : it.y;
      walker.style.transform = `translate(${x}px, ${y}px)`;
    }
    function select(id) {
      idx = order.indexOf(id);
      const it = DATA.tabernacle.find(t => t.id === id);
      Object.entries(nodes).forEach(([k, n]) => n.classList.toggle("on", k === id));
      moveWalker(id);
      $("#tabPanel").replaceChildren(
        el("p", { class: "eyebrow", text: `Station ${idx + 1} of ${order.length}` }),
        el("h3", { text: it.name }), el("span", { class: "ref", text: it.ref }),
        el("div", { class: "row" }, el("b", { text: "What it was" }), el("p", { html: refify(it.what) })),
        el("div", { class: "row eden" }, el("b", { text: "Echo of Eden" }), el("p", { html: refify(it.eden) })),
        el("div", { class: "row christ" }, el("b", { text: "Fulfilled in Christ" }), el("p", { html: refify(it.christ) })));
    }
    $("#tabWalk").addEventListener("click", () => {
      clearInterval(walking);
      if (idx >= order.length - 1) idx = -1;
      select(order[++idx]);
      walking = setInterval(() => { if (idx >= order.length - 1) { clearInterval(walking); return; } select(order[++idx]); }, reduceMotion ? 2400 : 2600);
    });
    $("#tabReset").addEventListener("click", () => { clearInterval(walking); select("gate"); });
    stage.addEventListener("click", e => { if (e.isTrusted) clearInterval(walking); }, true);
    select("gate");
  }

  /* ---------------- Ark ---------------- */
  function initArk() {
    const stage = $("#arkStage");
    const svg = sv("svg", { viewBox: "0 0 400 300", role: "img", "aria-label": "The Ark of the Covenant with its cherubim" });
    const gold = "var(--accent)";
    const parts = {
      glory: [sv("ellipse", { cx: 200, cy: 52, rx: 70, ry: 26, fill: gold, opacity: .18, class: "pulse" }), sv("ellipse", { class: "hl", cx: 200, cy: 52, rx: 46, ry: 16, fill: gold, "fill-opacity": .3, stroke: "transparent" }), sv("text", { x: 200, y: 56, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "glory")],
      cherubim: [
        sv("path", { class: "hl", d: "M112 136 Q130 62 196 92 L196 98 Q136 80 124 136 Z", fill: gold, "fill-opacity": .85, stroke: "transparent" }),
        sv("path", { class: "hl", d: "M288 136 Q270 62 204 92 L204 98 Q264 80 276 136 Z", fill: gold, "fill-opacity": .85, stroke: "transparent" }),
        sv("rect", { x: 100, y: 108, width: 24, height: 30, rx: 8, fill: gold }), sv("circle", { cx: 116, cy: 102, r: 9, fill: gold }),
        sv("rect", { x: 276, y: 108, width: 24, height: 30, rx: 8, fill: gold }), sv("circle", { cx: 284, cy: 102, r: 9, fill: gold })
      ],
      seat: [sv("rect", { class: "hl", x: 82, y: 136, width: 236, height: 13, rx: 2, fill: gold, stroke: "transparent" })],
      box: [sv("rect", { class: "hl", x: 90, y: 149, width: 220, height: 92, fill: gold, "fill-opacity": .8, stroke: "transparent" }), sv("rect", { x: 98, y: 157, width: 204, height: 76, fill: "none", stroke: "var(--accent-ink)", "stroke-opacity": .35 }), sv("rect", { x: 90, y: 149, width: 220, height: 6, fill: "var(--accent-ink)", opacity: .15 })],
      poles: [sv("rect", { class: "hl", x: 14, y: 200, width: 372, height: 9, rx: 4.5, fill: "#8c6a2c", stroke: "transparent" }), sv("circle", { cx: 106, cy: 204.5, r: 8, fill: "none", stroke: gold, "stroke-width": 3 }), sv("circle", { cx: 294, cy: 204.5, r: 8, fill: "none", stroke: gold, "stroke-width": 3 })],
      contents: [sv("rect", { class: "hl", x: 150, y: 164, width: 100, height: 64, rx: 6, fill: "var(--surface)", "fill-opacity": .2, stroke: "var(--accent-ink)", "stroke-dasharray": "4 4", "stroke-opacity": .6 }),
        sv("g", { class: "inside", opacity: 0, style: { transition: "opacity .5s" } },
          sv("rect", { x: 160, y: 172, width: 16, height: 26, rx: 6, fill: "var(--muted)" }), sv("rect", { x: 178, y: 172, width: 16, height: 26, rx: 6, fill: "var(--muted)" }),
          sv("path", { d: "M206 198 L206 182 Q206 174 214 174 Q222 174 222 182 L222 198 Z", fill: "var(--accent-ink)", opacity: .8 }),
          sv("path", { d: "M236 224 L236 170", stroke: "#6b4a1e", "stroke-width": 3 }), sv("circle", { cx: 236, cy: 170, r: 4, fill: "var(--eden)" }), sv("circle", { cx: 240, cy: 180, r: 3, fill: "var(--eden)" }), sv("circle", { cx: 232, cy: 186, r: 3, fill: "var(--eden)" })),
        sv("text", { class: "inside-lbl", x: 200, y: 222, "text-anchor": "middle", "font-size": 10, "font-weight": 700, fill: "var(--accent-ink)" }, "look inside")]
    };
    const order = ["poles", "box", "contents", "seat", "cherubim", "glory"];
    const nodes = {};
    order.forEach(id => {
      const p = DATA.arkParts.find(a => a.id === id);
      const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": p.name }, ...parts[id]);
      g.addEventListener("click", e => { e.stopPropagation(); select(id); });
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); } });
      svg.append(g); nodes[id] = g;
    });
    svg.append(sv("line", { x1: 10, y1: 270, x2: 390, y2: 270, stroke: "var(--line)", "stroke-width": 2 }),
      sv("text", { x: 200, y: 290, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)", "font-weight": 600 }, "2.5 × 1.5 × 1.5 cubits · select a part"));
    stage.append(svg);
    function select(id) {
      const p = DATA.arkParts.find(a => a.id === id);
      Object.entries(nodes).forEach(([k, n]) => n.classList.toggle("on", k === id));
      const inside = $(".inside", svg), lbl = $(".inside-lbl", svg);
      inside.setAttribute("opacity", id === "contents" ? 1 : 0);
      lbl.style.display = id === "contents" ? "none" : "";
      $("#arkPanel").replaceChildren(el("p", { class: "eyebrow", text: "Part of the Ark" }), el("h3", { text: p.name }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.text) }),
        el("div", { class: "chips" }, order.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o === id), onclick: () => select(o), text: cap(DATA.arkParts.find(a => a.id === o).name.split(" (")[0].replace("The ", "")) }))));
    }
    select("glory");
  }

  /* ---------------- Maps ---------------- */
  const proj = (lon, lat) => [(lon - 28) * 40, (40 - lat) * 45];
  const pts = arr => arr.map(([lo, la]) => proj(lo, la).map(v => v.toFixed(1)).join(",")).join(" ");
  function linePath(arr) {
    return arr.map(([lo, la], i) => { const [x, y] = proj(lo, la); return (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); }).join(" ");
  }
  function baseMap(k, vb, aria) {
    const M = DATA.map;
    const svg = sv("svg", { viewBox: vb, role: "img", "aria-label": aria, style: { background: "var(--bg)" } });
    svg.append(sv("rect", { x: -50, y: -50, width: 1060, height: 820, fill: "var(--bg)" }));
    const sea = { fill: "var(--babel)", "fill-opacity": .22, stroke: "var(--babel)", "stroke-opacity": .5, "stroke-width": 1.2 * k };
    svg.append(sv("polygon", { points: pts(M.med) + " 0,-50 -50,-50 -50,770 0,770", ...sea }));
    svg.append(sv("polygon", { points: pts(M.cyprus), fill: "var(--bg)", stroke: "var(--babel)", "stroke-opacity": .5, "stroke-width": k }));
    svg.append(sv("polygon", { points: pts(M.gulf), ...sea }));
    svg.append(sv("polygon", { points: pts(M.red), ...sea }));
    svg.append(sv("polygon", { points: pts(M.dead), ...sea }), sv("polygon", { points: pts(M.galilee), ...sea }));
    const riv = { fill: "none", stroke: "var(--babel)", "stroke-width": 2.2 * k, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: .8 };
    const rivers = sv("g", { class: "rivers" });
    ["euphrates", "tigris", "shatt", "nile", "nile2", "jordan"].forEach(r => rivers.append(sv("path", { d: linePath(M[r]), ...riv, "data-r": r })));
    svg.append(rivers);
    M.labels.forEach(l => {
      const [x, y] = proj(l.lon, l.lat);
      svg.append(sv("text", { x, y, "text-anchor": "middle", "font-size": (l.cls === "sea" ? 13 : 12) * k, "letter-spacing": 3 * k, "font-weight": 700, fill: l.cls === "sea" ? "var(--babel)" : "var(--muted)", opacity: l.cls === "sea" ? .8 : .65 }, l.t));
    });
    return svg;
  }
  function place(svg, p, k, opt = {}) {
    const [x, y] = proj(p.lon, p.lat);
    const g = sv("g", { class: opt.cls || "" });
    g.append(sv("circle", { cx: x, cy: y, r: (opt.r || 4.5) * k, fill: opt.fill || "var(--ink)", stroke: "var(--bg)", "stroke-width": 1.5 * k }));
    if (opt.label !== false) {
      const t = sv("text", { x: x + (opt.dx ?? 8) * k, y: y + (opt.dy ?? 4) * k, "font-size": (opt.fs || 13) * k, "font-weight": 700, fill: opt.color || "var(--ink)", "text-anchor": opt.anchor || "start", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": 3 * k, "stroke-linejoin": "round" }, opt.text || p.n);
      g.append(t);
    }
    svg.append(g);
    return g;
  }

  function initMap() {
    const M = DATA.map, P = M.places;
    const svg = baseMap(1, "0 0 960 720", "Map of the ancient Near East");
    const always = ["babylon", "jerusalem", "ur", "nineveh", "haran", "memphis"];
    const layers = {};
    const mk = id => { const g = sv("g", { class: "layer", style: { transition: "opacity .6s" } }); layers[id] = g; return g; };

    // Eden layer
    const eden = mk("eden");
    ["euphrates", "tigris"].forEach(r => eden.append(sv("path", { d: linePath(M[r]), fill: "none", stroke: "var(--eden)", "stroke-width": 6, "stroke-linecap": "round", opacity: .55 }),
      sv("path", { d: linePath(M[r]), fill: "none", stroke: "var(--surface)", "stroke-width": 2, class: "flow" })));
    const [ex, ey] = proj(39.4, 38.9);
    eden.append(sv("text", { x: ex - 150, y: ey - 18, "font-size": 15, "font-weight": 800, fill: "var(--eden)" }, "Tigris & Euphrates (Gen 2:14)"));
    eden.append(place(svg, P.ararat, 1, { fill: "var(--eden)", text: "Mt Ararat", color: "var(--eden)" }));
    eden.append(place(svg, P.jerusalem, 1, { r: 7, fill: "var(--eden)", text: "Gihon spring (1 Kgs 1:33)", dx: -10, dy: 22, anchor: "end", color: "var(--eden)" }));

    // Babel layer
    const babel = mk("babel");
    const [bx, by] = proj(45.0, 32.0);
    babel.append(sv("ellipse", { cx: bx, cy: by, rx: 120, ry: 70, fill: "var(--babel)", opacity: .14, transform: `rotate(-35 ${bx} ${by})` }));
    ["eridu", "uruk", "akkad", "calah"].forEach(id => { const left = id === "eridu" || id === "akkad"; babel.append(place(svg, P[id], 1, { fill: "var(--babel)", color: "var(--babel)", dx: left ? -8 : 8, anchor: left ? "end" : "start", dy: id === "eridu" ? 14 : id === "akkad" ? -4 : 4 })); });
    const [zx, zy] = proj(P.babylon.lon, P.babylon.lat);
    const zig = sv("g", { transform: `translate(${zx - 14} ${zy - 34})`, fill: "var(--babel)" },
      sv("rect", { x: 0, y: 20, width: 28, height: 6 }), sv("rect", { x: 4, y: 14, width: 20, height: 6 }), sv("rect", { x: 8, y: 8, width: 12, height: 6 }), sv("rect", { x: 11, y: 2, width: 6, height: 6, fill: "var(--accent)" }));
    babel.append(zig);

    // Abraham layer
    const abr = mk("abraham");
    const abrPts = M.abrahamRoute.map(id => [P[id].lon, P[id].lat]);
    const abrPath = sv("path", { d: linePath(abrPts), fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round", class: "draw" });
    abr.append(abrPath);
    ["shechem", "bethel", "negev"].forEach(id => abr.append(place(svg, P[id], 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12, dx: id === "bethel" ? -8 : 8, anchor: id === "bethel" ? "end" : "start", dy: id === "negev" ? 12 : 4 })));
    abr.append(place(svg, P.damascus, 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12 }));
    abr.append(place(svg, P.mari, 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12 }));

    // Exile layer
    const exile = mk("exile");
    const exPts = M.exileRoute.map(id => [P[id].lon, P[id].lat]);
    const exPath = sv("path", { d: linePath(exPts), fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-dasharray": "2 9", "stroke-linecap": "round", class: "flow" });
    exile.append(exPath);
    exile.append(place(svg, P.riblah, 1, { fill: "var(--flame)", color: "var(--flame)", fs: 12 }), place(svg, P.carchemish, 1, { fill: "var(--flame)", color: "var(--flame)", fs: 12, dy: -8 }));
    const [jx, jy] = proj(P.jerusalem.lon, P.jerusalem.lat);
    exile.append(sv("text", { x: jx + 60, y: jy + 64, "font-size": 14, "font-weight": 800, fill: "var(--flame)" }, "605–586 BC → Babylon"));

    // Pentecost layer
    const pent = mk("pentecost");
    M.pentecost.forEach(n => {
      const [x, y] = proj(n.lon, n.lat);
      pent.append(sv("line", { x1: jx, y1: jy, x2: x, y2: y, stroke: "var(--accent)", "stroke-width": 1.5, "stroke-dasharray": "3 5", class: "flow" }));
      const right = n.n.endsWith("→");
      pent.append(sv("circle", { cx: x, cy: y, r: 5, fill: "var(--accent)" }),
        sv("text", { x: x + (right ? 8 : 0), y: y - 9, "text-anchor": right ? "start" : "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": 3 }, right ? "← " + n.n.replace(" →", "") : n.n));
    });
    pent.append(sv("circle", { cx: jx, cy: jy, r: 14, fill: "var(--accent)", opacity: .35, class: "pulse" }));

    Object.values(layers).forEach(g => { g.style.opacity = 0; g.style.pointerEvents = "none"; svg.append(g); });
    always.forEach(id => place(svg, P[id], 1, { r: 5, dx: id === "jerusalem" ? -8 : 8, anchor: id === "jerusalem" ? "end" : "start", dy: id === "ur" ? 14 : 4 }));
    $("#mapStage").append(svg);

    const on = new Set();
    const chips = $("#mapLayers");
    function render(lastId) {
      M.layers.forEach(L => {
        const g = layers[L.id];
        const show = on.has(L.id);
        g.style.opacity = show ? 1 : 0;
      });
      if (on.has("abraham") && lastId === "abraham") {
        const len = abrPath.getTotalLength();
        abrPath.style.setProperty("--len", len);
        abrPath.classList.remove("go");
        void abrPath.getBoundingClientRect();
        requestAnimationFrame(() => abrPath.classList.add("go"));
      }
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(on.has(c.dataset.id))));
      const L = M.layers.find(l => l.id === lastId) || M.layers.find(l => on.has(l.id));
      $("#mapInfo").innerHTML = L ? refify(L.info) : "<p class='muted'>Turn on a layer to explore the map.</p>";
    }
    M.layers.forEach(L => chips.append(el("button", { class: "chip", type: "button", "data-id": L.id, "aria-pressed": "false", text: L.name,
      onclick: () => { on.has(L.id) ? on.delete(L.id) : on.add(L.id); render(on.has(L.id) ? L.id : null); } })));
    on.add("babel"); on.add("abraham");
    render("babel");
    // ensure the route is visible even before any animation
    const len = abrPath.getTotalLength();
    abrPath.style.setProperty("--len", len); abrPath.classList.add("go");
  }

  function initArkMap() {
    const k = 0.2;
    const svg = baseMap(k, "184 308 162 236", "Map of the Ark's journey from Sinai to Jerusalem");
    const J = DATA.arkJourney;
    const route = sv("path", { fill: "none", stroke: "var(--accent)", "stroke-width": 2.4 * k * 3, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: .9 });
    svg.append(route);
    const dots = J.map((s, i) => {
      if (s.lost) return null;
      const [x, y] = proj(s.lon, s.lat);
      const g = sv("g", { style: { cursor: "pointer" } }, sv("circle", { cx: x, cy: y, r: 1.6, fill: "var(--muted)" }));
      g.addEventListener("click", () => go(i));
      svg.append(g);
      return g;
    });
    // small labels for key places
    [["Mt Sinai", 33.97, 28.54, 1.5, 0], ["Kadesh", 34.4, 30.65, 1.5, 0], ["Jericho", 35.44, 31.87, 1.5, 0], ["Shiloh", 35.29, 32.05, 1.5, -.6], ["Jerusalem", 35.23, 31.78, 1.5, 1.6], ["Ashdod", 34.65, 31.8, -1.5, 0]].forEach(([n, lo, la, dx, dy]) => {
      const [x, y] = proj(lo, la);
      svg.append(sv("text", { x: x + dx * 1.4, y: y + dy * 1.4 + 1, "font-size": 4, "font-weight": 700, fill: "var(--ink)", "text-anchor": dx < 0 ? "end" : "start", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": .8 }, n));
    });
    const marker = sv("g", { style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1), opacity .6s" } },
      sv("circle", { r: 4.5, fill: "var(--accent)", opacity: .3, class: "pulse" }),
      sv("rect", { x: -2.4, y: -1.5, width: 4.8, height: 3, fill: "var(--accent)", stroke: "var(--ink)", "stroke-width": .3 }),
      sv("path", { d: "M-2.4 -1.5 Q-1.2 -3.6 0 -2.2 Q1.2 -3.6 2.4 -1.5", fill: "none", stroke: "var(--accent)", "stroke-width": .5 }));
    svg.append(marker);
    $("#arkMapStage").append(svg);

    let i = 0, timer = null;
    function go(n) {
      i = Math.max(0, Math.min(J.length - 1, n));
      const s = J[i];
      const pathPts = J.slice(0, i + 1).filter(p => !p.lost).map(p => [p.lon, p.lat]);
      route.setAttribute("d", linePath(pathPts));
      const [x, y] = proj(s.lon, s.lat);
      marker.style.transform = `translate(${x}px, ${y}px)`;
      marker.style.opacity = s.lost ? .25 : 1;
      dots.forEach((d, j) => d && d.firstChild.setAttribute("fill", j <= i ? "var(--accent)" : "var(--muted)"));
      $("#arkJourneyPanel").replaceChildren(el("p", { class: "eyebrow", text: `Stop ${i + 1} of ${J.length}${s.when ? " · " + s.when : ""}` }), el("h3", { text: s.name }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.text) }));
      $("#arkStepLabel").textContent = `${i + 1} / ${J.length}`;
    }
    $("#arkPrev").addEventListener("click", () => { clearInterval(timer); go(i - 1); });
    $("#arkNext").addEventListener("click", () => { clearInterval(timer); go(i + 1); });
    $("#arkPlay").addEventListener("click", () => {
      clearInterval(timer); go(0);
      timer = setInterval(() => { if (i >= J.length - 1) return clearInterval(timer); go(i + 1); }, 2400);
    });
    go(0);
  }

  /* ---------------- Tabs helper ---------------- */
  function makeTabs(listEl, panelsEl, items, render, idp) {
    const tabs = [], panels = [];
    items.forEach((it, i) => {
      const id = `${idp}-${i}`;
      const t = el("button", { class: "tab", role: "tab", type: "button", id: id + "-t", "aria-controls": id + "-p", "aria-selected": String(i === 0), tabindex: i === 0 ? "0" : "-1", text: it.tab });
      const p = el("div", { class: "tabpanel", role: "tabpanel", id: id + "-p", "aria-labelledby": id + "-t" });
      p.hidden = i !== 0;
      render(p, it);
      t.addEventListener("click", () => sel(i));
      t.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); const n = (i + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length; sel(n); tabs[n].focus(); }
      });
      tabs.push(t); panels.push(p); listEl.append(t); panelsEl.append(p);
    });
    function sel(n) { tabs.forEach((t, j) => { t.setAttribute("aria-selected", String(j === n)); t.tabIndex = j === n ? 0 : -1; panels[j].hidden = j !== n; }); }
  }

  function initTabsContent() {
    if ($("#adamTabs")) makeTabs($("#adamTabs"), $("#adamPanels"), DATA.adam, (p, it) => {
      p.append(el("h3", { text: it.head }));
      const g = el("div", { class: "grid-3" });
      it.rows.forEach(r => g.append(el("div", { class: "card" }, el("p", { class: "eyebrow", text: r[0] }), el("p", { html: refify(r[1]), style: { color: "var(--ink)" } }))));
      p.append(g);
    }, "adam");
    if ($("#mythTabs")) makeTabs($("#mythTabs"), $("#mythPanels"), DATA.myth, (p, it) => {
      const good = it.tab.startsWith("What");
      p.append(el("ul", { style: { margin: 0, paddingLeft: "1.2em", display: "grid", gap: "8px" } }, it.rows.map(r => el("li", { html: refify(r), style: { color: good ? "var(--ink)" : "var(--muted)" } }))));
    }, "myth");
    if ($("#sinTabs")) makeTabs($("#sinTabs"), $("#sinPanels"), DATA.sin, (p, it) => {
      p.append(el("div", { class: "split even" },
        el("div", { class: "stack" }, el("h3", { text: it.head }), el("span", { class: "ref", text: it.ref })),
        el("div", { class: "prose" }, it.body.map(b => el("p", { html: refify(b) })))));
    }, "sin");
  }

  /* ---------------- Menorah ---------------- */
  function initMenorah() {
    const svg = sv("svg", { viewBox: "0 0 400 360", role: "img", "aria-label": "The golden lampstand with seven almond-blossom lamps" });
    const g = sv("g", { fill: "none", stroke: "var(--accent)", "stroke-width": 7, "stroke-linecap": "round" });
    const cx = 200, base = 280, top = 90;
    g.append(sv("path", { d: `M${cx} ${base} L${cx} ${top}` }));
    [50, 95, 140].forEach(r => g.append(sv("path", { d: `M${cx - r} ${top} L${cx - r} ${top + 20} A${r} ${r} 0 0 0 ${cx + r} ${top + 20} L${cx + r} ${top}` })));
    svg.append(g);
    svg.append(sv("path", { d: `M${cx - 60} ${base + 30} L${cx + 60} ${base + 30} L${cx + 30} ${base} L${cx - 30} ${base} Z`, fill: "var(--accent)" }));
    const xs = [cx - 140, cx - 95, cx - 50, cx, cx + 50, cx + 95, cx + 140];
    xs.forEach((x, i) => {
      svg.append(sv("path", { d: `M${x - 12} ${top - 4} Q${x} ${top + 14} ${x + 12} ${top - 4} Z`, fill: "var(--accent)" }));
      const f = sv("path", { d: `M${x} ${top - 34} C${x - 9} ${top - 18} ${x - 6} ${top - 8} ${x} ${top - 6} C${x + 6} ${top - 8} ${x + 9} ${top - 18} ${x} ${top - 34} Z`, fill: "var(--flame)" });
      if (!reduceMotion) { f.classList.add("pulse"); f.style.animationDelay = (i * .27) + "s"; f.style.animationDuration = "1.8s"; }
      svg.append(sv("circle", { cx: x, cy: top - 18, r: 16, fill: "var(--accent)", opacity: .15 }), f);
      // almond buds along branches
      if (i !== 3) svg.append(sv("circle", { cx: x, cy: top + 30, r: 5, fill: "var(--eden)" }));
    });
    svg.append(sv("text", { x: cx, y: 350, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)", "font-weight": 600 }, "Seven lamps, almond-blossom cups, buds and flowers · Exod 25:31–40"));
    $("#menorahStage").append(svg);
    $("#menorahPhoto").append(photo("menorah"));
  }

  /* ---------------- Story timeline ---------------- */
  function initStory() {
    const wrap = $("#storyTl");
    const track = el("div", { class: "htl-track" });
    const fill = el("div", { class: "htl-fill" });
    track.append(fill);
    const steps = DATA.story.map((s, i) => {
      const b = el("button", { class: "htl-step", type: "button", onclick: () => go(i) }, el("div", { class: "dot" }), el("small", { text: s.era }), el("b", { text: s.title }), el("span", { text: s.short }));
      track.append(b); return b;
    });
    wrap.append(track);
    let cur = 0;
    function go(i) {
      cur = Math.max(0, Math.min(DATA.story.length - 1, i));
      steps.forEach((b, j) => { b.classList.toggle("on", j === cur); b.classList.toggle("past", j < cur); });
      fill.style.width = (steps[cur].offsetLeft + 11) + "px";
      const s = DATA.story[cur];
      $("#storyDetail").replaceChildren(el("p", { class: "eyebrow", text: `${s.era} · ${cur + 1} of ${DATA.story.length}` }), el("h3", { text: s.title }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.text) }),
        el("div", { class: "row" }, el("b", { text: "Barrier between God and people" }), el("p", { text: s.barrier })));
      const st = steps[cur];
      if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: st.offsetLeft - 20, behavior: reduceMotion ? "auto" : "smooth" });
    }
    $("#storyPrev").addEventListener("click", () => go(cur - 1));
    $("#storyNext").addEventListener("click", () => go(cur + 1));
    go(0);
  }

  /* ---------------- Mirror ---------------- */
  function initMirror() {
    const L = $("#mirrorL"), R = $("#mirrorR"), svg = $("#mirrorSvg"), mid = $(".mirror-mid");
    const left = [], right = [];
    DATA.mirror.forEach((m, i) => {
      const a = el("div", { class: "mitem", tabindex: "0", html: `${m[0]}<br><span class="ref">${m[1]}</span>` });
      const b = el("div", { class: "mitem", tabindex: "0", html: `${m[2]}<br><span class="ref">${m[3]}</span>` });
      [a, b].forEach(n => { n.addEventListener("mouseenter", () => hl(i)); n.addEventListener("focus", () => hl(i)); n.addEventListener("click", () => hl(i)); });
      left.push(a); right.push(b); L.append(a); R.append(b);
    });
    let active = 0;
    function drawLines() {
      svg.replaceChildren();
      const mr = mid.getBoundingClientRect();
      const w = mr.width;
      DATA.mirror.forEach((m, i) => {
        const a = left[i].getBoundingClientRect(), b = right[i].getBoundingClientRect();
        const y1 = a.top + a.height / 2 - mr.top, y2 = b.top + b.height / 2 - mr.top;
        const on = i === active;
        svg.append(sv("path", { d: `M0 ${y1} C${w / 2} ${y1} ${w / 2} ${y2} ${w} ${y2}`, fill: "none", stroke: on ? "var(--accent)" : "var(--line)", "stroke-width": on ? 3 : 1.5 }));
        if (on) svg.append(sv("circle", { cx: 0, cy: y1, r: 4, fill: "var(--accent)" }), sv("circle", { cx: w, cy: y2, r: 4, fill: "var(--accent)" }));
      });
    }
    function hl(i) {
      active = i;
      left.forEach((n, j) => n.classList.toggle("on", j === i));
      right.forEach((n, j) => n.classList.toggle("on", j === i));
      drawLines();
    }
    hl(0);
    window.addEventListener("resize", drawLines);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLines);
    setTimeout(drawLines, 400);
  }

  /* ---------------- Photos ---------------- */
  function fallbackArt(kind, ar) {
    const [aw, ah] = ar.split("/").map(Number);
    const W = 400, H = Math.round(400 * ah / aw);
    const s = sv("svg", { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true" });
    s.append(sv("rect", { width: W, height: H, fill: "var(--bg-2)" }));
    const g = sv("g", { transform: `translate(${W / 2} ${H * 0.58})` });
    const gold = "var(--accent)", blue = "var(--babel)", green = "var(--eden)";
    const art = {
      garden: () => [sv("circle", { cx: 0, cy: -40, r: 70, fill: gold, opacity: .15 }), sv("path", { d: "M-180 60 Q-60 -10 0 20 Q80 -20 180 60 Z", fill: green, opacity: .7 }), sv("rect", { x: -4, y: -40, width: 8, height: 60, fill: "var(--ink)", opacity: .6 }), sv("circle", { cx: 0, cy: -55, r: 34, fill: green }), sv("circle", { cx: -8, cy: -60, r: 5, fill: gold }), sv("circle", { cx: 12, cy: -48, r: 5, fill: gold })],
      garden2: () => [...[0, 1, 2, 3].map(i => sv("rect", { x: -120 + i * 20, y: -i * 26, width: 240 - i * 40, height: 26, fill: blue, opacity: .5 + i * .1 })), ...[-90, -40, 10, 60].map((x, i) => sv("circle", { cx: x + 10, cy: -8 - (i % 2) * 26, r: 12, fill: green }))],
      ark: () => [sv("rect", { x: -70, y: -20, width: 140, height: 50, fill: gold }), sv("path", { d: "M-70 -20 Q-35 -80 0 -40 Q35 -80 70 -20", fill: "none", stroke: gold, "stroke-width": 6 }), sv("rect", { x: -120, y: 10, width: 240, height: 6, rx: 3, fill: "var(--ink)", opacity: .4 })],
      temple: () => [sv("rect", { x: -130, y: 10, width: 260, height: 30, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: -40, y: -70, width: 80, height: 80, fill: gold, opacity: .85 }), sv("rect", { x: -12, y: -30, width: 24, height: 40, fill: "var(--bg-2)" })],
      menorah: () => [sv("path", { d: "M0 40 L0 -50 M-60 -50 A60 60 0 0 0 60 -50 M-40 -50 A40 40 0 0 0 40 -50 M-20 -50 A20 20 0 0 0 20 -50", fill: "none", stroke: gold, "stroke-width": 6 })],
      tower: () => [...[0, 1, 2, 3, 4, 5].map(i => sv("ellipse", { cx: 0, cy: 30 - i * 22, rx: 120 - i * 17, ry: 12, fill: blue, opacity: .35 + i * .1 })), sv("path", { d: "M-60 -110 Q0 -150 60 -110", fill: "none", stroke: "var(--muted)", "stroke-width": 3, opacity: .5 })],
      gate: () => [sv("rect", { x: -110, y: -80, width: 220, height: 120, fill: blue }), sv("path", { d: "M-40 40 L-40 -20 A40 40 0 0 1 40 -20 L40 40 Z", fill: "var(--bg-2)" }), ...[-80, 60].map(x => sv("rect", { x, y: -60, width: 20, height: 14, fill: gold }))],
      web: () => { const pts = [[-120, -40], [-60, -80], [20, -70], [100, -30], [120, 40], [40, 70], [-50, 60], [-110, 30]]; return [...pts.flatMap((a, i) => pts.slice(i + 2, i + 5).map(b => sv("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: "var(--muted)", "stroke-width": 2, opacity: .5 }))), ...pts.map((p, i) => sv("circle", { cx: p[0], cy: p[1], r: 10, fill: i % 3 === 0 ? green : i % 3 === 1 ? blue : gold }))]; },
      serpent: () => [sv("path", { d: "M-150 40 C-100 -20 -60 80 0 20 C60 -40 100 60 150 -10", fill: "none", stroke: green, "stroke-width": 16, "stroke-linecap": "round" }), sv("circle", { cx: 150, cy: -10, r: 14, fill: green }), sv("circle", { cx: 0, cy: -70, r: 30, fill: gold, opacity: .25 })],
      pole: () => [sv("rect", { x: -4, y: -110, width: 8, height: 160, fill: "var(--muted)" }), sv("path", { d: "M0 -90 C30 -80 -30 -60 0 -50 C30 -40 -30 -20 0 -10", fill: "none", stroke: gold, "stroke-width": 8 })],
      zig: () => [...[0, 1, 2].map(i => sv("rect", { x: -140 + i * 40, y: 10 - i * 34, width: 280 - i * 80, height: 34, fill: "#b08a5a", opacity: .6 + i * .12 })), sv("rect", { x: -8, y: -20, width: 16, height: 30, fill: "var(--bg-2)" })]
    };
    g.append(...(art[kind] || art.garden)());
    s.append(g);
    return s;
  }
  function photo(key) {
    const im = DATA.images[key];
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(im.file)}?width=960`;
    const page = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(im.file)}`;
    const fig = el("figure", { class: "photo reveal", style: { "--ar": im.ar } });
    const img = el("img", { src: url, alt: im.cap.replace(/<[^>]+>/g, ""), loading: "lazy", decoding: "async", referrerpolicy: "no-referrer" });
    img.addEventListener("error", () => fig.classList.add("noimg"));
    const fb = el("div", { class: "fallback" }, fallbackArt(im.art, im.ar));
    fig.append(img, fb, el("figcaption", { html: `${im.cap} · <a href="${page}" target="_blank" rel="noopener">view on Wikimedia Commons</a>` }));
    return fig;
  }
  function initPhotos() {
    const put = (sel, keys) => { const n = $(sel); if (n) keys.forEach(k => n.append(photo(k))); };
    put("#bruegelPhoto", ["bruegel"]);
    put("#part1Gallery", ["eden", "ark", "temple"]);
    put("#part2Gallery", ["ishtar", "ur", "hanging"]);
  }

  /* ---------------- Ziggurat ---------------- */
  function initZiggurat() {
    const stage = $("#zigStage");
    const VB = [0, 0, 600, 430];
    const svg = sv("svg", { viewBox: VB.join(" "), role: "img", "aria-label": "Cross-section of a seven-stage ziggurat" });
    const sky = sv("g");
    svg.append(sky);
    // divine descent (drawn at large scale, revealed on zoom-out)
    const descent = sv("g", { opacity: 0, style: { transition: "opacity 1.2s" } });
    const grad = sv("linearGradient", { id: "beam", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .9 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }));
    svg.append(sv("defs", {}, grad));
    descent.append(sv("polygon", { points: "-200,-3600 800,-3600 380,60 220,60", fill: "url(#beam)", opacity: .55 }));
    descent.append(sv("circle", { cx: 300, cy: -3400, r: 380, fill: "var(--accent)", opacity: .35 }));
    descent.append(sv("text", { x: 300, y: -2500, "text-anchor": "middle", "font-size": 230, "font-weight": 800, fill: "var(--ink)" }, "“The LORD came down"));
    descent.append(sv("text", { x: 300, y: -2200, "text-anchor": "middle", "font-size": 230, "font-weight": 800, fill: "var(--ink)" }, "to see the city and the tower”"));
    descent.append(sv("text", { x: 300, y: -1950, "text-anchor": "middle", "font-size": 140, "font-weight": 700, fill: "var(--accent)" }, "Genesis 11:5"));
    descent.append(sv("path", { d: "M1300 -300 Q900 -200 420 120", fill: "none", stroke: "var(--ink)", "stroke-width": 20 }), sv("text", { x: 1340, y: -320, "font-size": 140, "font-weight": 700, fill: "var(--ink)" }, "“its top in the heavens”"));
    svg.append(descent);

    svg.append(sv("rect", { x: -3000, y: 380, width: 7000, height: 4000, fill: "var(--bg-2)" }), sv("line", { x1: -3000, y1: 380, x2: 4000, y2: 380, stroke: "var(--line)", "stroke-width": 2 }));
    const tiers = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Seven stages" });
    const tierEls = [];
    for (let i = 0; i < 7; i++) {
      const w = 360 - i * 42, h = 32, y = 380 - (i + 1) * h;
      const r = sv("rect", { class: "hl", x: 300 - w / 2, y, width: w, height: h, fill: "var(--babel)", "fill-opacity": 1 - i * .07, stroke: "transparent", style: { transformOrigin: `300px ${y + h}px`, transformBox: "view-box", transition: reduceMotion ? "none" : "transform .45s cubic-bezier(.3,1.4,.5,1), opacity .3s" } });
      tierEls.push(r); tiers.append(r);
      // brick courses
      for (let yy = y + 8; yy < y + h; yy += 8) tiers.append(sv("line", { x1: 300 - w / 2, y1: yy, x2: 300 + w / 2, y2: yy, stroke: "var(--surface)", "stroke-opacity": .12, "pointer-events": "none" }));
    }
    svg.append(tiers);
    const stairs = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "The stairway" });
    stairs.append(sv("polygon", { class: "hl", points: "285,380 315,380 309,220 291,220", fill: "var(--surface)", "fill-opacity": .35, stroke: "transparent" }));
    for (let y = 372; y > 222; y -= 8) stairs.append(sv("line", { x1: 286 + (380 - y) * .037, y1: y, x2: 314 - (380 - y) * .037, y2: y, stroke: "var(--ink)", "stroke-opacity": .3 }));
    svg.append(stairs);
    const shrine = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "The shrine at the top", style: { transition: "opacity .4s" } },
      sv("rect", { class: "hl", x: 276, y: 118, width: 48, height: 38, fill: "var(--accent)", stroke: "transparent" }), sv("rect", { x: 294, y: 134, width: 12, height: 22, fill: "var(--ink)", opacity: .5 }),
      sv("circle", { cx: 300, cy: 104, r: 24, fill: "var(--accent)", opacity: .18, class: "pulse" }));
    svg.append(shrine);
    const temple = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Esagila temple" },
      sv("rect", { class: "hl", x: 488, y: 340, width: 92, height: 40, fill: "var(--muted)", "fill-opacity": .55, stroke: "transparent" }), sv("rect", { x: 524, y: 356, width: 20, height: 24, fill: "var(--bg)" }),
      sv("text", { x: 534, y: 332, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "Esagila"));
    svg.append(temple);
    const bricks = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Fired brick and bitumen" });
    bricks.append(sv("rect", { class: "hl", x: 20, y: 330, width: 84, height: 50, fill: "#b08a5a", stroke: "transparent" }));
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) bricks.append(sv("rect", { x: 20 + c * 21 + (r % 2 ? 10 : 0), y: 330 + r * 12.5, width: 19, height: 10.5, fill: "#c9a36e", stroke: "#2a2014", "stroke-width": 1.5 }));
    bricks.append(sv("text", { x: 62, y: 322, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "brick + bitumen"));
    svg.append(bricks);
    const tinyLbl = sv("text", { x: 300, y: 80, "text-anchor": "middle", "font-size": 13, "font-weight": 700, fill: "var(--muted)" }, "the god was meant to come down here");
    svg.append(tinyLbl);
    stage.append(svg);

    const map = { shrine, stairs, tiers, bricks, temple };
    Object.entries(map).forEach(([id, g]) => {
      g.addEventListener("click", () => select(id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); } });
    });
    function select(id) {
      const z = DATA.ziggurat.find(x => x.id === id);
      Object.entries(map).forEach(([k, g]) => g.classList.toggle("on", k === id));
      $("#zigPanel").replaceChildren(el("p", { class: "eyebrow", text: "Etemenanki, Babylon" }), el("h3", { text: z.name }), el("span", { class: "ref", text: z.ref }), el("p", { html: refify(z.text) }),
        el("div", { class: "chips" }, DATA.ziggurat.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o.id === id), onclick: () => select(o.id), text: cap(o.name.replace("The ", "").replace(" at the top", "")) }))));
    }
    select("shrine");

    let anim = null;
    function animateVB(to, dur) {
      cancelAnimationFrame(anim);
      const from = svg.getAttribute("viewBox").split(" ").map(Number);
      if (reduceMotion) { svg.setAttribute("viewBox", to.join(" ")); return; }
      const t0 = performance.now();
      const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const step = now => {
        const t = Math.min(1, (now - t0) / dur), e = ease(t);
        svg.setAttribute("viewBox", from.map((f, i) => (f + (to[i] - f) * e).toFixed(2)).join(" "));
        if (t < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }
    function reset() { animateVB(VB, 900); descent.setAttribute("opacity", 0); tinyLbl.style.opacity = 1; }
    $("#zigBuild").addEventListener("click", () => {
      reset();
      tierEls.forEach(t => { t.style.transform = "scaleY(0)"; });
      shrine.style.opacity = 0; stairs.style.opacity = 0;
      tierEls.forEach((t, i) => setTimeout(() => { t.style.transform = "scaleY(1)"; }, reduceMotion ? 0 : 250 + i * 320));
      setTimeout(() => { stairs.style.opacity = 1; shrine.style.opacity = 1; select("shrine"); }, reduceMotion ? 0 : 250 + 7 * 320);
    });
    $("#zigDescend").addEventListener("click", () => {
      tierEls.forEach(t => t.style.transform = "scaleY(1)"); shrine.style.opacity = 1; stairs.style.opacity = 1;
      tinyLbl.style.opacity = 0;
      descent.setAttribute("opacity", 1);
      animateVB([-2400, -3800, 5400, 4300], 2600);
      $("#zigPanel").replaceChildren(el("p", { class: "eyebrow", text: "Genesis 11:5" }), el("h3", { text: "God has to stoop to see it" }),
        el("p", { text: "The builders said its top would be “in the heavens.” The narrator replies that the LORD had to come down just to look at it. The structure meant to bring a god down to human terms is so small that the Creator must descend to inspect it, and he comes down on his own terms, to scatter." }),
        el("p", { class: "muted", text: "Press Reset to return to the tower." }));
    });
    $("#zigReset").addEventListener("click", () => { reset(); select("shrine"); });

    // names
    $("#zigNames").append(...DATA.zigNames.map(n => el("div", { class: "card" },
      n.cun ? el("p", { class: "cun", style: { fontSize: "1.6rem", color: "var(--babel)", lineHeight: 1.2 }, text: n.cun }) : null,
      el("h3", { text: n.name }), el("p", { text: n.meaning }))));

    // scale chart
    const W = 520, H = 330, base = 290, maxH = 250, max = 828;
    const sc = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Heights compared: Etemenanki 91 metres, Statue of Liberty 93, Great Pyramid 147, Eiffel Tower 330, Burj Khalifa 828" });
    [0, 200, 400, 600, 800].forEach(v => {
      const y = base - v / max * maxH;
      sc.append(sv("line", { x1: 50, y1: y, x2: W - 10, y2: y, stroke: "var(--line)", "stroke-dasharray": v ? "3 4" : "" }), sv("text", { x: 44, y: y + 4, "text-anchor": "end" }, v + " m"));
    });
    const bw = 56, gap = (W - 70 - DATA.scale.length * bw) / DATA.scale.length;
    DATA.scale.forEach((d, i) => {
      const x = 62 + i * (bw + gap), h = d.m / max * maxH;
      const bar = sv("rect", { x, y: base - h, width: bw, height: h, rx: 3, fill: i === 0 ? "var(--babel)" : "var(--muted)", "fill-opacity": i === 0 ? 1 : .45 });
      sc.append(bar, sv("text", { class: "lbl", x: x + bw / 2, y: base - h - 8, "text-anchor": "middle" }, Math.round(d.m) + " m"),
        sv("text", { x: x + bw / 2, y: base + 16, "text-anchor": "middle", style: { fontWeight: i === 0 ? 700 : 400, fill: i === 0 ? "var(--ink)" : "" } }, d.name));
      if (d.note) sc.append(sv("text", { x: x + bw / 2, y: base + 30, "text-anchor": "middle", style: { fontSize: "10px" } }, d.note));
    });
    $("#scaleChart").append(sc);
  }

  /* ---------------- Genealogy ---------------- */
  function initGen() {
    const line = $("#genLine");
    let born = -98;
    const btns = DATA.gen.map((g, i) => {
      g.born = born;
      if (g.at != null) born += g.at;
      const b = el("button", { class: "gen-b" + (g.abram ? " abram-b" : ""), type: "button", onclick: () => show(i) }, el("span", { text: g.n }), el("small", { text: g.abram ? "called · Gen 12" : `${g.life} years` }));
      if (i) line.append(el("span", { class: "arrow", "aria-hidden": "true", text: "→" }));
      line.append(b);
      return b;
    });
    function show(i, lightTo) {
      btns.forEach((b, j) => { b.classList.toggle("lit", j <= (lightTo ?? i) && !DATA.gen[j].abram); b.classList.toggle("abram", DATA.gen[j].abram && j <= (lightTo ?? i)); });
      const g = DATA.gen[i];
      const yrs = g.born < 0 ? `${-g.born} years before the flood` : `${g.born} years after the flood`;
      $("#genPanel").replaceChildren(el("p", { class: "eyebrow", text: `Generation ${i + 1} from Shem · born about ${yrs} (Masoretic numbers)` }),
        el("h3", { text: g.n }),
        g.at != null ? el("p", { class: "muted", text: `Became a father at ${g.at}; lived ${g.life} years.` }) : el("p", { class: "muted", text: `Lived ${g.life} years (Gen 25:7).` }),
        g.note ? el("p", { html: refify(g.note) }) : null,
        i === 0 ? el("p", { class: "muted", text: "On these numbers Shem lives 600 years and outlives Abraham himself." }) : null);
    }
    show(0);
    let t = null;
    $("#genPlay").addEventListener("click", () => {
      clearInterval(t); let i = 0; show(0);
      t = setInterval(() => { i++; if (i >= DATA.gen.length) return clearInterval(t); show(i); }, reduceMotion ? 900 : 650);
    });
    // "let us"
    $("#letus").append(...DATA.letus.map(l => el("div", { class: "letus-line" + (l.god ? " god" : "") }, el("div", {}, el("b", { text: l.who }), el("br"), el("span", { class: "ref", text: l.ref })), el("q", { text: l.text }))),
      el("p", { class: "muted", style: { fontSize: ".95rem" }, text: DATA.letusNote }));
  }

  /* ---------------- Nations ---------------- */
  function initNations() {
    const W = 460, C = W / 2;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${W}`, role: "img", "aria-label": "Seventy nations scattered from Babel, with one portion kept for the LORD" });
    const rings = sv("g", { fill: "none", stroke: "var(--line)" }, sv("circle", { cx: C, cy: C, r: 180, "stroke-dasharray": "2 6" }), sv("circle", { cx: C, cy: C, r: 110 }));
    svg.append(rings);
    const center = sv("g", { style: { transition: "opacity .6s" } });
    center.append(sv("g", { transform: `translate(${C - 22} ${C - 30})`, fill: "var(--babel)" }, sv("rect", { x: 0, y: 40, width: 44, height: 10 }), sv("rect", { x: 7, y: 30, width: 30, height: 10 }), sv("rect", { x: 13, y: 20, width: 18, height: 10 }), sv("rect", { x: 18, y: 12, width: 8, height: 8, fill: "var(--accent)" })));
    const flame = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: `M${C} ${C + 26} C${C - 20} ${C + 8} ${C - 10} ${C - 10} ${C} ${C - 30} C${C + 6} ${C - 12} ${C + 20} ${C} ${C} ${C + 26} Z`, fill: "var(--flame)" }), sv("path", { d: `M${C} ${C + 22} C${C - 9} ${C + 12} ${C - 4} ${C + 2} ${C} ${C - 8} C${C + 4} ${C + 6} ${C + 10} ${C + 12} ${C} ${C + 22} Z`, fill: "var(--accent)" }));
    svg.append(center, flame);
    const lbl = sv("text", { x: C, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "One people, one language (Gen 11:1)");
    svg.append(lbl);
    const portion = sv("g", { opacity: 0, style: { transition: "opacity .8s" } },
      sv("circle", { cx: C, cy: C - 180, r: 11, fill: "none", stroke: "var(--accent)", "stroke-width": 2.5, "stroke-dasharray": "3 3" }),
      sv("text", { x: C, y: C - 150, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--accent)" }, "The LORD’s portion: Jacob"),
      sv("text", { x: C, y: C - 136, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "(Deut 32:9), a nation not yet born"));
    svg.append(portion);
    const dots = [];
    for (let i = 0; i < 70; i++) {
      const d = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.4s cubic-bezier(.3,.8,.3,1) ${(i % 10) * 0.03}s` } },
        sv("circle", { r: 5.5, fill: `hsl(${(i * 47) % 360} 55% 55%)` }));
      dots.push(d); svg.append(d);
    }
    // the "sons of God", one above each nation
    const stars = sv("g", { opacity: 0, style: { transition: "opacity .9s" } });
    for (let i = 0; i < 70; i++) {
      const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
      stars.append(sv("circle", { cx: C + Math.cos(a) * 200, cy: C + Math.sin(a) * 200, r: 1.8, fill: "var(--muted)" }));
    }
    stars.append(sv("text", { x: C + 160, y: C + 200, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 600 }, "· sons of God"));
    svg.append(stars);
    $("#nationsStage").append(svg);
    let seed = 3; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const jitter = dots.map(() => [(rnd() - .5) * 60, (rnd() - .5) * 60]);
    function cluster() {
      dots.forEach((d, i) => { d.style.transform = `translate(${C + jitter[i][0]}px, ${C + 50 + jitter[i][1] * .5}px)`; });
      stars.setAttribute("opacity", 0);
      portion.setAttribute("opacity", 0); flame.setAttribute("opacity", 0); center.setAttribute("opacity", 1);
      lbl.textContent = "One people, one language (Gen 11:1)";
    }
    function divide() {
      // 71 slots: slot 0 (top) is the LORD's portion, left empty
      dots.forEach((d, i) => {
        const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
        d.style.transform = `translate(${C + Math.cos(a) * 180}px, ${C + Math.sin(a) * 180}px)`;
      });
      stars.setAttribute("opacity", 1);
      portion.setAttribute("opacity", 1); flame.setAttribute("opacity", 0); center.setAttribute("opacity", .35);
      lbl.textContent = "Divided “according to the number of the sons of God”";
    }
    function gather() {
      dots.forEach((d, i) => {
        const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
        d.style.transform = `translate(${C + Math.cos(a) * 110}px, ${C + Math.sin(a) * 110}px)`;
      });
      stars.setAttribute("opacity", 0);
      portion.setAttribute("opacity", 0); flame.setAttribute("opacity", 1); center.setAttribute("opacity", 0);
      lbl.textContent = "Gathered, still many: “every nation under heaven” (Acts 2:5)";
    }
    cluster();
    $("#divideBtn").addEventListener("click", divide);
    $("#gatherBtn").addEventListener("click", gather);
    // start divided so the page shows the idea at rest
    setTimeout(divide, 600);
  }

  /* ---------------- Ladder ---------------- */
  function initLadder() {
    const svg = sv("svg", { viewBox: "0 0 400 440", role: "img", "aria-label": "Jacob's dream: a stairway from earth to heaven with angels going up and down" });
    svg.append(sv("circle", { cx: 330, cy: 60, r: 90, fill: "var(--accent)", opacity: .15 }), sv("circle", { cx: 330, cy: 60, r: 44, fill: "var(--accent)", opacity: .35 }));
    let seed = 11; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 30; i++) svg.append(sv("circle", { cx: rnd() * 400, cy: rnd() * 300, r: .8 + rnd() * 1.4, fill: "var(--muted)", class: i % 2 ? "twinkle" : "" }));
    const pathD = "M70 390 L330 70";
    const rail = sv("g", { stroke: "var(--accent)", "stroke-width": 3 });
    rail.append(sv("line", { x1: 50, y1: 384, x2: 316, y2: 60 }), sv("line", { x1: 92, y1: 400, x2: 346, y2: 84 }));
    for (let t = 0.04; t < 1; t += 0.07) {
      const x1 = 50 + (316 - 50) * t, y1 = 384 + (60 - 384) * t, x2 = 92 + (346 - 92) * t, y2 = 400 + (84 - 400) * t;
      rail.append(sv("line", { x1, y1, x2, y2, "stroke-width": 2, opacity: .8 }));
    }
    svg.append(rail);
    // Jacob asleep with a stone pillow
    svg.append(sv("ellipse", { cx: 96, cy: 418, rx: 46, ry: 9, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: 40, y: 404, width: 18, height: 12, rx: 4, fill: "var(--muted)" }), sv("circle", { cx: 64, cy: 405, r: 7, fill: "var(--ink)", opacity: .7 }), sv("rect", { x: 70, y: 402, width: 66, height: 12, rx: 6, fill: "var(--ink)", opacity: .55 }));
    svg.append(sv("text", { x: 150, y: 430, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "Jacob at Bethel · Gen 28:12"));
    svg.append(sv("text", { x: 330, y: 160, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--ink)" }, "“I am the LORD”"));
    if (!reduceMotion) {
      for (let i = 0; i < 6; i++) {
        const up = i % 2 === 0;
        const a = sv("g", {}, sv("circle", { r: 5, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 1.5 }), sv("path", { d: "M-4 0 Q-12 -9 -14 2 M4 0 Q12 -9 14 2", fill: "none", stroke: "var(--accent)", "stroke-width": 1.5 }));
        const m = sv("animateMotion", { dur: "7s", repeatCount: "indefinite", path: pathD, begin: `${i * 1.15}s`, keyPoints: up ? "0;1" : "1;0", keyTimes: "0;1", calcMode: "linear" });
        a.append(m); svg.append(a);
      }
    }
    $("#ladderStage").append(svg);
  }

  /* ---------------- Pentecost ---------------- */
  function initPentecost() {
    const cmp = $("#compare"), range = $("#compareRange");
    const set = v => cmp.style.setProperty("--split", v + "%");
    range.addEventListener("input", e => set(e.target.value));
    set(50);
    let i = 0, timer = null;
    const txt = $("#tongueText"), lang = $("#tongueLang");
    function next() {
      i = (i + 1) % DATA.tongues.length;
      txt.classList.add("out");
      setTimeout(() => { lang.textContent = DATA.tongues[i][0]; txt.textContent = DATA.tongues[i][1]; txt.classList.remove("out"); }, reduceMotion ? 0 : 350);
    }
    $("#tongueBtn").addEventListener("click", () => { clearInterval(timer); next(); });
    if (!reduceMotion) timer = setInterval(next, 3400);
  }

  /* ---------------- Cities ---------------- */
  function initCities() {
    const box = $("#lanes");
    const inner = el("div", { class: "lanes-inner" });
    const all = [];
    const mkLane = (key, label) => {
      const lane = el("div", { class: "lane " + key }, el("div", { class: "lane-label", text: label }));
      for (let c = 0; c < 8; c++) {
        const cell = el("div", { class: "stack", style: { gap: "8px" } });
        DATA.cities[key].filter(x => x.col === c).forEach(x => {
          const b = el("button", { class: "city", type: "button" }, el("b", { text: x.name }), el("small", { text: x.short }));
          b.addEventListener("click", () => sel(x, b, key));
          all.push(b); cell.append(b);
          x._btn = b;
        });
        lane.append(cell);
      }
      return lane;
    };
    inner.append(mkLane("man", "City of man"), el("div", { class: "lane-axis" }, el("span", {}), DATA.eras.map(e => el("span", { text: e }))), mkLane("god", "City of God"));
    box.append(inner);
    function sel(x, b, key) {
      all.forEach(n => n.classList.toggle("on", n === b));
      $("#cityPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: key === "man" ? "var(--babel)" : "var(--accent)" }, text: key === "man" ? "City of man" : "City of God" }),
        el("h3", { text: x.name }), el("span", { class: "ref", text: x.short }), el("p", { html: refify(x.text) }));
    }
    const babel = DATA.cities.man.find(x => x.name === "Babel");
    sel(babel, babel._btn, "man");
    // Babylon vs New Jerusalem table
    $("#cityTable").append(...DATA.cityTable.map(r => el("tr", {}, el("td", { text: r[0] }), el("td", { html: `${r[1]}<span class="ref">${r[2]}</span>` }), el("td", { html: `${r[3]}<span class="ref">${r[4]}</span>` }))));
  }

  /* ---------------- Connections web ---------------- */
  function initWeb() {
    const W = 600, C = W / 2, R = 228;
    const order = ["eden", "mountain", "adam", "serpent", "seed", "tabernacle", "ark", "temple", "jesus", "church", "newjer", "pentecost", "bethel", "abraham", "shem", "nations", "babylon", "babel"];
    const nodes = order.map(id => DATA.web.nodes.find(n => n.id === id));
    const pos = {};
    nodes.forEach((n, i) => { const a = -Math.PI / 2 + i / nodes.length * Math.PI * 2; pos[n.id] = [C + Math.cos(a) * R, C + Math.sin(a) * R, a]; });
    const svg = sv("svg", { viewBox: `-40 -10 ${W + 80} ${W + 20}`, role: "img", "aria-label": "Network of connections between the themes" });
    const gE = sv("g"), gN = sv("g");
    const edges = DATA.web.edges.map(([a, b, label]) => {
      const [x1, y1] = pos[a], [x2, y2] = pos[b];
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const qx = mx + (C - mx) * .55, qy = my + (C - my) * .55;
      const p = sv("path", { class: "edge", d: `M${x1} ${y1} Q${qx} ${qy} ${x2} ${y2}`, fill: "none" });
      gE.append(p);
      return { a, b, label, p };
    });
    const colour = g => g === 1 ? "var(--eden)" : g === 2 ? "var(--babel)" : g === 4 ? "var(--flame)" : "var(--accent)";
    const nEls = {};
    nodes.forEach(n => {
      const [x, y, a] = pos[n.id];
      const g = sv("g", { class: "node", tabindex: "0", role: "button", "aria-label": n.n });
      const anchor = Math.abs(Math.cos(a)) < .2 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
      const tx = x + Math.cos(a) * 18, ty = y + Math.sin(a) * 18 + 4;
      g.append(sv("circle", { cx: x, cy: y, r: 11, fill: colour(n.g), stroke: "var(--surface)" }),
        sv("text", { x: tx, y: ty + (anchor === "middle" ? Math.sin(a) * 6 : 0), "text-anchor": anchor, "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, n.n));
      g.addEventListener("click", () => sel(n.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(n.id); } });
      gN.append(g); nEls[n.id] = g;
    });
    svg.append(gE, gN);
    $("#webStage").append(svg);
    function sel(id) {
      const n = DATA.web.nodes.find(x => x.id === id);
      const linked = new Set([id]);
      const mine = edges.filter(e => e.a === id || e.b === id);
      mine.forEach(e => { linked.add(e.a); linked.add(e.b); });
      edges.forEach(e => { const on = mine.includes(e); e.p.classList.toggle("on", on); e.p.classList.toggle("dim", !on); });
      Object.entries(nEls).forEach(([k, g]) => { g.classList.toggle("on", k === id); g.classList.toggle("dim", !linked.has(k)); });
      $("#webPanel").replaceChildren(el("p", { class: "eyebrow", text: n.g === 1 ? "Part I" : n.g === 4 ? "Part II" : n.g === 2 ? "Part III" : "Fulfilment" }), el("h3", { text: n.n }), el("p", { html: refify(n.d) }),
        el("div", { class: "row" }, el("b", { text: `${mine.length} connections` })),
        el("div", { class: "stack", style: { gap: "8px" } }, mine.map(e => {
          const other = e.a === id ? e.b : e.a;
          const on = DATA.web.nodes.find(x => x.id === other);
          return el("button", { class: "qopt", type: "button", onclick: () => sel(other) }, el("b", { text: on.n + " " }), el("span", { class: "muted", html: "· " + refify(e.label) }));
        })));
    }
    sel("jesus");
  }

  /* ---------------- Quiz ---------------- */
  function initQuiz() {
    const box = $("#quizBox");
    let qi = 0, score = 0;
    function render() {
      if (qi >= DATA.quiz.length) {
        const msg = score === DATA.quiz.length ? "Perfect. You have walked from Eden to the New Jerusalem." : score >= DATA.quiz.length * 0.7 ? "Well done. A few threads to revisit above." : "A good start. Scroll back through the sections and try again.";
        box.replaceChildren(el("div", { class: "qcard" }, el("p", { class: "eyebrow", text: "Your score" }), el("h3", { style: { fontSize: "var(--step-3)" }, text: `${score} / ${DATA.quiz.length}` }), el("p", { text: msg }),
          el("div", {}, el("button", { class: "btn primary", type: "button", onclick: () => { qi = 0; score = 0; render(); }, text: "Try again" }))));
        return;
      }
      const q = DATA.quiz[qi];
      const explain = el("p", { class: "qexplain", hidden: true });
      const nextBtn = el("button", { class: "btn primary small", type: "button", hidden: true, text: qi === DATA.quiz.length - 1 ? "See score" : "Next question ▸", onclick: () => { qi++; render(); } });
      const opts = q.a.map((a, i) => el("button", { class: "qopt", type: "button", text: a, onclick: () => {
        opts.forEach((o, j) => { o.disabled = true; if (j === q.c) o.classList.add("right"); });
        if (i === q.c) score++; else opts[i].classList.add("wrong");
        explain.innerHTML = (i === q.c ? "<b>Correct.</b> " : "<b>Not quite.</b> ") + refify(q.x);
        explain.hidden = false; nextBtn.hidden = false; nextBtn.focus();
      } }));
      box.replaceChildren(el("div", { class: "qcard" },
        el("div", { class: "qbar" }, el("span", { class: "eyebrow", text: `Question ${qi + 1} of ${DATA.quiz.length}` }), el("span", { class: "muted", text: `Score ${score}` })),
        el("div", { class: "meter", style: { maxWidth: "none" } }, el("i", { style: { width: (qi / DATA.quiz.length * 100) + "%" } })),
        el("h3", { text: q.q }), el("div", { class: "qopts" }, opts), explain, el("div", {}, nextBtn)));
    }
    render();
  }

  function initSources() {
    $("#sourceList").append(...DATA.sources.map(s => el("div", { class: "source" }, el("b", { text: s[0] }), el("i", { text: s[1] }), el("span", { text: s[2] }))));
  }

  /* ---------------- Scroll: progress, nav, reveals ---------------- */
  function initScroll() {
    const prog = $("#progress");
    const toc = $$(".toc a");
    const targets = toc.map(a => $(a.getAttribute("href"))).filter(Boolean);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + "%";
      let cur = null;
      targets.forEach((t, i) => { if (t.getBoundingClientRect().top < 160) cur = i; });
      toc.forEach((a, i) => a.classList.toggle("active", i === cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!reduceMotion && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      $$(".reveal").forEach(n => { if (n.getBoundingClientRect().top > window.innerHeight) { n.classList.add("pre"); io.observe(n); } });
    }
  }

  /* ================ Part II: the serpent and the seed ================ */
  function initNachash() {
    const svg = sv("svg", { viewBox: "0 0 600 430", class: "venn", role: "img", "aria-label": "Three overlapping meanings of the Hebrew word nachash" });
    const grad = sv("linearGradient", { id: "nachGrad", x1: 0, y1: 0, x2: 1, y2: 0 },
      sv("stop", { offset: 0, "stop-color": "var(--ink)" }), sv("stop", { offset: .5, "stop-color": "var(--accent)" }, reduceMotion ? null : sv("animate", { attributeName: "offset", values: "0;1;0", dur: "6s", repeatCount: "indefinite" })), sv("stop", { offset: 1, "stop-color": "var(--ink)" }));
    svg.append(sv("defs", {}, grad));
    svg.append(sv("text", { x: 300, y: 92, "text-anchor": "middle", "font-size": 84, fill: "url(#nachGrad)", style: { fontFamily: "var(--font-hebrew)" } }, "נָחָשׁ"));
    svg.append(sv("text", { x: 300, y: 122, "text-anchor": "middle", "font-size": 14, "letter-spacing": 4, "font-weight": 700, fill: "var(--muted)" }, "N · Ḥ · Š"));
    const spec = { serpent: [232, 238, "var(--eden)"], diviner: [368, 238, "var(--babel)"], shining: [300, 330, "var(--accent)"] };
    const rings = {};
    Object.entries(spec).forEach(([k, [cx, cy, c]]) => {
      const r = sv("circle", { class: "ring", cx, cy, r: 92, fill: c, "fill-opacity": .2, stroke: c, "stroke-width": 2 });
      rings[k] = r; svg.append(r);
    });
    // icons inside each ring
    svg.append(sv("path", { d: "M170 250 C180 220 200 260 210 230 C218 206 236 222 230 200", fill: "none", stroke: "var(--eden)", "stroke-width": 6, "stroke-linecap": "round" }), sv("circle", { cx: 231, cy: 197, r: 6, fill: "var(--eden)" }));
    svg.append(sv("path", { d: "M378 222 Q406 196 434 222 Q406 248 378 222 Z", fill: "none", stroke: "var(--babel)", "stroke-width": 3 }), sv("circle", { cx: 406, cy: 222, r: 7, fill: "var(--babel)" }));
    const star = sv("g", { transform: "translate(300 372)" });
    for (let i = 0; i < 8; i++) star.append(sv("line", { x1: 0, y1: 0, x2: 0, y2: -20, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round", transform: `rotate(${i * 45})` }));
    star.append(sv("circle", { r: 7, fill: "var(--accent)" }));
    svg.append(star);
    svg.append(sv("text", { class: "lbl", x: 140, y: 168, fill: "var(--eden)" }, "serpent"), sv("text", { class: "lbl", x: 460, y: 168, "text-anchor": "end", fill: "var(--babel)" }, "diviner"),
      sv("text", { class: "lbl", x: 412, y: 405, fill: "var(--accent)" }, "shining one"));
    const core = sv("g", {}, sv("circle", { cx: 300, cy: 270, r: 26, fill: "var(--flame)", opacity: .25, class: "pulse" }), sv("text", { x: 300, y: 268, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "a divine"), sv("text", { x: 300, y: 281, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "being"));
    svg.append(core);
    $("#nachashStage").append(svg);
    const chips = $("#nachashChips");
    const keys = Object.keys(DATA.nachash);
    keys.forEach(k => chips.append(el("button", { class: "chip", type: "button", "data-k": k, text: DATA.nachash[k].label, onclick: () => set(k) })));
    function set(k) {
      const d = DATA.nachash[k];
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      Object.entries(rings).forEach(([rk, r]) => { const on = k === "all" || k === rk; r.style.opacity = on ? 1 : .25; r.setAttribute("fill-opacity", on ? (k === "all" ? .28 : .35) : .1); r.setAttribute("stroke-width", on ? 3 : 1); });
      core.style.opacity = k === "all" ? 1 : .35;
      $("#nachashHeb").textContent = d.heb;
      $("#nachashHead").textContent = d.head;
      $("#nachashText").innerHTML = refify(d.text);
    }
    set("all");
  }

  function initNotSnake() {
    $("#notSnake").append(...DATA.notSnake.map(c => el("div", { class: "card reveal" }, icon(c.icon, "icon"), el("h3", { text: c.title }), el("p", { html: refify(c.text) }))));
    $$("#notSnake .icon").forEach(i => { i.style.width = "36px"; i.style.height = "36px"; i.style.color = "var(--flame)"; });
  }

  function initCherub() {
    const gems = $("#gems");
    DATA.breastpiece.forEach(([n, c, on]) => gems.append(el("div", { class: "gem" + (on ? "" : " off"), style: { background: c, color: n === "Diamond" ? "#333" : "#fff", textShadow: n === "Diamond" ? "none" : "" }, text: n })));
    const box = $("#verses");
    const btns = DATA.ezekiel.map((v, i) => {
      const b = el("button", { class: "verse", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("small", { text: "Ezekiel " + v.v }), v.text);
      box.append(b); return b;
    });
    function sel(i) {
      const v = DATA.ezekiel[i];
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      $("#verseRef").textContent = "Ezekiel " + v.v;
      $("#verseNote").innerHTML = refify(v.note);
      gems.classList.toggle("spot", !!v.gems);
    }
    sel(1);
  }

  function initMorningStar() {
    const svg = sv("svg", { viewBox: "0 0 600 400", role: "img", "aria-label": "The morning star climbing toward the mountain of assembly, then falling at sunrise" });
    const sky = sv("linearGradient", { id: "skyG", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--babel)", "stop-opacity": .35 }), sv("stop", { offset: 1, "stop-color": "var(--bg)", "stop-opacity": 1 }));
    svg.append(sv("defs", {}, sky), sv("rect", { width: 600, height: 300, fill: "url(#skyG)" }));
    let seed = 21; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 40; i++) svg.append(sv("circle", { cx: rnd() * 600, cy: rnd() * 260, r: .6 + rnd() * 1.3, fill: "var(--muted)", class: i % 3 ? "" : "twinkle" }));
    svg.append(sv("polygon", { points: "370,300 482,118 600,300", fill: "var(--muted)", "fill-opacity": .28 }),
      sv("text", { x: 486, y: 142, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "mount of assembly"),
      sv("text", { x: 486, y: 156, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)" }, "“far reaches of the north” (Zaphon)"));
    const sun = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.6s ease, opacity 1.2s" }, opacity: 0 },
      sv("circle", { cx: 130, cy: 300, r: 90, fill: "var(--accent)", opacity: .18 }), sv("circle", { cx: 130, cy: 300, r: 46, fill: "var(--accent)" }));
    sun.style.transform = "translateY(60px)";
    svg.append(sun);
    svg.append(sv("rect", { x: 0, y: 300, width: 600, height: 100, fill: "var(--ink)", "fill-opacity": .12 }), sv("line", { x1: 0, y1: 300, x2: 600, y2: 300, stroke: "var(--line)", "stroke-width": 2 }),
      sv("text", { x: 20, y: 386, "font-size": 12, "font-weight": 800, fill: "var(--muted)", "letter-spacing": 2 }, "SHEOL · THE PIT"));
    const P = [[80, 286], [160, 236], [240, 192], [320, 156], [400, 126], [482, 92]];
    svg.append(sv("polyline", { points: P.map(p => p.join(",")).join(" "), fill: "none", stroke: "var(--accent)", "stroke-width": 1.5, "stroke-dasharray": "3 6", opacity: .5 }));
    const trail = sv("polyline", { fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" });
    svg.append(trail);
    const venus = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1s cubic-bezier(.4,.1,.2,1), opacity .8s" } },
      sv("circle", { r: 18, fill: "var(--accent)", opacity: .25, class: "pulse" }), sv("circle", { r: 6, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
    svg.append(venus);
    const lbl = sv("text", { x: 300, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(lbl);
    $("#starStage").append(svg);
    const list = $("#iwill");
    const items = DATA.iwill.map(w => { const li = el("li", { class: "iw", text: "“" + w.t + "”" }); list.append(li); return li; });
    const fall = $("#iwFall");
    let step = 0;
    function render() {
      items.forEach((li, i) => li.classList.toggle("on", i < step));
      fall.classList.toggle("on", step > 5);
      if (step <= 5) {
        const [x, y] = P[step];
        venus.style.transform = `translate(${x}px, ${y}px)`; venus.style.opacity = 1;
        trail.setAttribute("points", P.slice(0, step + 1).map(p => p.join(",")).join(" "));
        sun.style.opacity = 0; sun.style.transform = "translateY(60px)";
        lbl.textContent = step === 0 ? "Before dawn: the brightest star rises" : step === 5 ? "“I will make myself like the Most High”" : "";
      } else {
        venus.style.transform = "translate(482px, 360px)"; venus.style.opacity = .6;
        trail.setAttribute("points", P.map(p => p.join(",")).join(" ") + " 482,360");
        sun.style.opacity = 1; sun.style.transform = "translateY(0)";
        lbl.textContent = "Sunrise: “How you are fallen from heaven, O Day Star!”";
      }
      $("#starNext").textContent = step < 5 ? "Next “I will” ▸" : step === 5 ? "Sunrise ▾" : "Done";
      $("#starNext").disabled = step > 5;
    }
    $("#starNext").addEventListener("click", () => { step = Math.min(6, step + 1); render(); });
    $("#starReset").addEventListener("click", () => { step = 0; render(); });
    render();

    // two trajectories
    const ps = sv("svg", { viewBox: "0 0 900 310", role: "img", "aria-label": "The rebel climbs and falls; Christ descends to the cross and is exalted" });
    [[45, "God’s throne"], [170, "the created order"], [282, "death · the pit"]].forEach(([y, t]) => ps.append(sv("line", { x1: 20, y1: y, x2: 880, y2: y, stroke: "var(--line)", "stroke-dasharray": y === 170 ? "" : "4 6" }), sv("text", { x: 24, y: y - 6, "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    const helel = sv("path", { d: "M60 160 C160 150 260 90 370 58 C400 52 420 120 470 286", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    const christ = sv("path", { d: "M500 40 C540 60 570 160 610 172 C650 184 670 280 700 282 C740 284 780 80 860 26", fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    ps.append(helel, christ);
    const t = (x, y, s, c, a) => ps.append(sv("text", { x, y, "font-size": 12, "font-weight": 700, fill: c || "var(--ink)", "text-anchor": a || "start", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, s));
    t(60, 150, "Day Star rises", "var(--flame)"); t(370, 50, "“I will be like the Most High”", "var(--flame)", "middle"); t(478, 300, "brought down to the pit", "var(--flame)");
    t(500, 32, "“in the form of God”", "var(--accent)"); t(618, 166, "“emptied himself”"); t(700, 300, "“death on a cross”", "var(--accent)", "middle"); t(860, 18, "“highly exalted”", "var(--accent)", "end");
    ps.append(sv("circle", { cx: 860, cy: 26, r: 7, fill: "var(--accent)" }), sv("circle", { cx: 470, cy: 286, r: 6, fill: "var(--flame)" }));
    const wrap = el("div", { class: "scroll-x" }, ps);
    $("#pathsStage").append(wrap);
    [helel, christ].forEach(p => { p.style.setProperty("--len", p.getTotalLength()); });
    const go = () => { helel.classList.add("go"); setTimeout(() => christ.classList.add("go"), reduceMotion ? 0 : 900); };
    if ("IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { go(); io.disconnect(); } }, { threshold: .3 });
      io.observe(wrap);
      setTimeout(go, 4000);
    } else go();
  }

  function initSeraph() {
    const svg = sv("svg", { viewBox: "0 0 520 320", role: "img", "aria-label": "A winged serpent guardian beside a winged cherub guardian" });
    // seraph: rearing winged serpent
    const s = sv("g", { transform: "translate(130 0)" });
    s.append(sv("path", { d: "M-70 120 Q-120 60 -100 30 Q-60 70 -20 110 Z", fill: "var(--accent)", opacity: .75 }), sv("path", { d: "M70 120 Q120 60 100 30 Q60 70 20 110 Z", fill: "var(--accent)", opacity: .75 }));
    s.append(sv("path", { d: "M-40 280 C-80 270 -60 240 0 240 C60 240 70 210 20 200 C-20 192 -20 160 0 140 L0 90", fill: "none", stroke: "var(--flame)", "stroke-width": 16, "stroke-linecap": "round" }));
    s.append(sv("ellipse", { cx: 0, cy: 92, rx: 22, ry: 30, fill: "var(--flame)" }), sv("circle", { cx: -7, cy: 84, r: 3, fill: "var(--accent-ink)" }), sv("circle", { cx: 7, cy: 84, r: 3, fill: "var(--accent-ink)" }));
    [-30, 0, 30].forEach((x, i) => { const f = sv("path", { d: `M${x} 60 C${x - 8} 46 ${x - 4} 38 ${x} 28 C${x + 4} 38 ${x + 8} 46 ${x} 60 Z`, fill: "var(--accent)" }); if (!reduceMotion) { f.classList.add("pulse"); f.style.animationDelay = i * .3 + "s"; } s.append(f); });
    s.append(sv("text", { x: 0, y: 306, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "Seraph · śārāph"));
    svg.append(s);
    // cherub: winged lion with human face
    const c = sv("g", { transform: "translate(390 0)" });
    c.append(sv("path", { d: "M-10 170 Q-40 60 60 40 Q20 90 30 160 Z", fill: "var(--babel)", opacity: .75 }));
    c.append(sv("rect", { x: -70, y: 170, width: 130, height: 60, rx: 28, fill: "var(--babel)" }));
    [-60, -30, 20, 46].forEach(x => c.append(sv("rect", { x, y: 222, width: 14, height: 50, rx: 6, fill: "var(--babel)" })));
    c.append(sv("circle", { cx: -78, cy: 160, r: 24, fill: "var(--babel)" }), sv("circle", { cx: -84, cy: 156, r: 3, fill: "var(--surface)" }), sv("path", { d: "M60 190 Q90 200 84 230", fill: "none", stroke: "var(--babel)", "stroke-width": 6, "stroke-linecap": "round" }));
    c.append(sv("text", { x: -10, y: 306, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "Cherub · kərûb"));
    svg.append(c);
    svg.append(sv("text", { x: 260, y: 24, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "two pictures of a throne-guardian"));
    $("#seraphStage").append(svg);
  }

  function initCurse() {
    const box = $("#curseLines");
    const btns = DATA.curseLines.map((c, i) => { const b = el("button", { class: "verse", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("small", { text: c.ref }), c.t); box.append(b); return b; });
    function sel(i) {
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      const c = DATA.curseLines[i];
      $("#curseNote").replaceChildren(el("p", { class: "eyebrow", text: c.ref }), el("p", { html: refify(c.note) }));
    }
    sel(2);
    // descent diagram
    const L = [["Mountain of God", 60], ["Heaven", 140], ["Earth · ʾereṣ", 230], ["Dust", 310], ["Sheol · the pit · abyss", 400], ["Lake of fire", 490]];
    const svg = sv("svg", { viewBox: "0 0 420 540", role: "img", "aria-label": "The serpent's descent through Scripture from God's mountain to the lake of fire" });
    svg.append(sv("polygon", { points: "300,92 360,26 420,92", fill: "var(--eden)", "fill-opacity": .45 }));
    const tree = sv("g", { opacity: 0, style: { transition: "opacity .8s" } }, sv("circle", { cx: 360, cy: 30, r: 26, fill: "var(--accent)", opacity: .3, class: "pulse" }), sv("rect", { x: 357, y: 26, width: 6, height: 22, fill: "var(--ink)", opacity: .6 }), sv("circle", { cx: 360, cy: 22, r: 13, fill: "var(--eden)" }));
    svg.append(tree);
    svg.append(sv("rect", { x: 0, y: 470, width: 420, height: 70, fill: "var(--flame)", "fill-opacity": .18 }), sv("rect", { x: 0, y: 380, width: 420, height: 90, fill: "var(--ink)", "fill-opacity": .07 }));
    L.forEach(([n, y]) => svg.append(sv("line", { x1: 150, y1: y, x2: 410, y2: y, stroke: "var(--line)", "stroke-dasharray": "3 5" }), sv("text", { x: 146, y: y + 4, "text-anchor": "end", "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, n)));
    const trail = sv("polyline", { fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-dasharray": "5 5", "stroke-linecap": "round" });
    svg.append(trail);
    const marker = sv("g", { style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1), opacity .6s" } },
      sv("circle", { r: 16, fill: "var(--flame)", opacity: .2, class: "pulse" }),
      sv("path", { d: "M-11 6 C-6 -6 0 10 5 -2 C8 -9 12 -6 12 -6", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round" }), sv("circle", { cx: 12, cy: -6, r: 3.5, fill: "var(--flame)" }));
    svg.append(marker);
    $("#descentStage").append(svg);
    const D = DATA.descent;
    const pos = i => { const d = D[i]; return [175 + i * 27, d.lvl < 0 ? 30 : L[d.lvl][1]]; };
    let i = 0;
    function go(n) {
      i = Math.max(0, Math.min(D.length - 1, n));
      const d = D[i], [x, y] = pos(i);
      marker.style.transform = `translate(${x}px, ${y}px)`;
      marker.style.opacity = d.lvl < 0 ? 0 : 1;
      tree.setAttribute("opacity", d.lvl < 0 ? 1 : 0);
      trail.setAttribute("points", D.slice(0, i + 1).filter(s => s.lvl >= 0).map((s, j) => pos(j).join(",")).join(" "));
      $("#descentPanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${D.length}` }), el("h3", { text: d.title }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.text) }));
      $("#descNext").disabled = i === D.length - 1;
    }
    $("#descNext").addEventListener("click", () => go(i + 1));
    $("#descPrev").addEventListener("click", () => go(i - 1));
    go(0);
  }

  function initSeedWar() {
    const E = DATA.seedWar, W = 1300, H = 340, dx = (W - 210) / (E.length - 1);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline of the woman's seed and the serpent's attacks from Genesis to Revelation" });
    const yS = 128, yA = 236;
    svg.append(sv("text", { x: 14, y: 30, "font-size": 12, "font-weight": 800, fill: "var(--accent)", "letter-spacing": 2 }, "THE WOMAN’S SEED"), sv("text", { x: 14, y: H - 12, "font-size": 12, "font-weight": 800, fill: "var(--flame)", "letter-spacing": 2 }, "THE SERPENT STRIKES"));
    const X = i => 50 + i * dx;
    let d = `M${X(0)} ${yS}`;
    for (let i = 1; i < E.length; i++) { const mx = (X(i - 1) + X(i)) / 2; d += ` Q${mx} ${yS + (i % 2 ? -18 : 18)} ${X(i)} ${yS}`; }
    const line = sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    const snake = sv("path", { d: E.map((e, i) => `${i ? "L" : "M"}${X(i)} ${yA + (i % 2 ? 10 : -10)}`).join(" "), fill: "none", stroke: "var(--flame)", "stroke-width": 2, "stroke-dasharray": "2 7", opacity: .6 });
    svg.append(snake, line);
    const evs = E.map((e, i) => {
      const x = X(i), seedK = e.k === "seed";
      const g = sv("g", { class: "ev", tabindex: "0", role: "button", "aria-label": e.n });
      if (!seedK) g.append(sv("path", { d: `M${x} ${yA - 12} L${x - 6} ${yA - 46} L${x + 5} ${yA - 56} L${x - 2} ${yS + 10}`, fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-linejoin": "round" }));
      const y = seedK ? yS : yA;
      g.append(sv("circle", { cx: x, cy: y, r: seedK ? 9 : 8, fill: seedK ? "var(--accent)" : "var(--flame)", stroke: "var(--surface)", "stroke-width": 2 }));
      const ty = seedK ? yS - 22 : yA + 24;
      g.append(sv("text", { x, y: ty, transform: `rotate(${seedK ? -28 : 28} ${x} ${ty})`, "text-anchor": seedK ? "start" : "start" }, e.n));
      g.addEventListener("click", () => { stop(); sel(i); });
      g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); stop(); sel(i); } });
      svg.append(g);
      return g;
    });
    $("#seedWar").append(svg);
    line.style.setProperty("--len", line.getTotalLength());
    line.classList.add("go");
    function sel(i) {
      evs.forEach((g, j) => g.classList.toggle("on", j === i));
      const e = E[i];
      $("#seedPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: e.k === "seed" ? "var(--accent)" : "var(--flame)" }, text: (e.k === "seed" ? "The woman’s seed" : "The serpent strikes") + ` · ${i + 1} of ${E.length}` }),
        el("h3", { text: e.n }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.text) }));
      const wrap = $("#seedWar");
      const x = X(i) / W * wrap.scrollWidth - wrap.clientWidth / 2;
      if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: Math.max(0, x), behavior: reduceMotion ? "auto" : "smooth" });
    }
    let timer = null;
    function stop() { clearInterval(timer); evs.forEach(g => g.classList.remove("hide")); }
    $("#seedPlay").addEventListener("click", () => {
      clearInterval(timer);
      line.classList.remove("go"); void line.getBoundingClientRect();
      evs.forEach(g => g.classList.add("hide"));
      let i = 0;
      const step = () => { evs[i].classList.remove("hide"); sel(i); i++; if (i >= E.length) clearInterval(timer); };
      requestAnimationFrame(() => { line.style.transition = `stroke-dashoffset ${E.length * 1.6}s linear`; line.classList.add("go"); });
      step(); timer = setInterval(step, 1600);
    });
    sel(0);
  }

  function initBronze() {
    const svg = sv("svg", { viewBox: "0 0 400 380", role: "img", "aria-label": "The bronze serpent on a pole, with bitten people looking up and being healed" });
    svg.append(sv("circle", { cx: 200, cy: 150, r: 110, fill: "var(--accent)", opacity: .12, class: "pulse" }));
    svg.append(sv("rect", { x: 196, y: 60, width: 8, height: 280, rx: 3, fill: "#8c6a2c" }), sv("rect", { x: 170, y: 74, width: 60, height: 7, rx: 3, fill: "#8c6a2c" }));
    let d = "M200 92";
    for (let y = 92, k = 0; y < 250; y += 20, k++) d += ` Q${k % 2 ? 176 : 224} ${y + 10} 200 ${y + 20}`;
    svg.append(sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 9, "stroke-linecap": "round" }), sv("path", { d: "M200 92 Q214 70 236 76", fill: "none", stroke: "var(--accent)", "stroke-width": 9, "stroke-linecap": "round" }), sv("circle", { cx: 238, cy: 76, r: 8, fill: "var(--accent)" }));
    const sights = sv("g", { opacity: 0, style: { transition: "opacity .8s" } });
    svg.append(sights);
    const people = [];
    for (let i = 0; i < 14; i++) {
      const a = Math.PI * (0.08 + 0.84 * i / 13), x = 200 - Math.cos(a) * 170, y = 352 - Math.sin(a) * 34;
      sights.append(sv("line", { x1: x, y1: y - 18, x2: 220, y2: 150, stroke: "var(--accent)", "stroke-width": 1, "stroke-dasharray": "2 5" }));
      const p = sv("g", { class: "person", style: { transformBox: "fill-box" } }, sv("circle", { cx: x, cy: y - 22, r: 6 }), sv("rect", { x: x - 6, y: y - 15, width: 12, height: 18, rx: 5 }));
      p.setAttribute("fill", "var(--flame)");
      people.push(p); svg.append(p);
    }
    $("#poleStage").append(svg);
    let t = [];
    $("#lookBtn").addEventListener("click", () => {
      t.forEach(clearTimeout); t = [];
      sights.setAttribute("opacity", 1);
      people.forEach((p, i) => t.push(setTimeout(() => { p.setAttribute("fill", "var(--eden)"); p.style.transform = "translateY(-6px)"; }, reduceMotion ? 0 : 200 + i * 160)));
    });
    $("#lookReset").addEventListener("click", () => { t.forEach(clearTimeout); sights.setAttribute("opacity", 0); people.forEach(p => { p.setAttribute("fill", "var(--flame)"); p.style.transform = ""; }); });
    $("#neboPhoto").append(photo("nebo"));
    ["fall", "dragon"].forEach(k => $("#serpentGallery").append(photo(k)));
    $("#serpentGallery").style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
  }

  /* ---------------- Multi-page chrome: active page, table of contents, home cards ---------------- */
  function initPages() {
    const pageEl = $(".page");
    const id = pageEl ? pageEl.dataset.page : "home";
    $$(".nav a").forEach(a => {
      const on = a.dataset.p === id;
      a.classList.toggle("active", on);
      if (on) { a.setAttribute("aria-current", "page"); const nav = a.parentElement; if (nav.scrollWidth > nav.clientWidth) nav.scrollLeft = a.offsetLeft - 16; }
    });
    $$(".toc").forEach(toc => {
      $$("main section.block").forEach(sec => {
        const h = $(".sec-head h2, .sec-head h3, h2", sec);
        if (!sec.id || !h) return;
        const label = sec.dataset.toc || h.textContent.replace(/[“”"]/g, "").split(/[:,(]/)[0].trim();
        toc.append(el("a", { href: "#" + sec.id, text: label }));
      });
    });
    $$(".pc-art").forEach(n => n.append(fallbackArt(n.dataset.art, "4/3")));
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 60); }
  }

  function boot() {
    // [init function, element it needs]; each runs only on pages that contain its section
    const steps = [[initSchemes], [initPages], [initHero, "#heroSvg"], [initClues, "#clueGrid"], [initMountain, "#mtnStage"], [initTabernacle, "#tabStage"],
      [initArk, "#arkStage"], [initArkMap, "#arkMapStage"], [initTabsContent], [initMenorah, "#menorahStage"], [initStory, "#storyTl"], [initPhotos], [initMirror, "#mirror"],
      [initNachash, "#nachashStage"], [initNotSnake, "#notSnake"], [initCherub, "#gems"], [initMorningStar, "#starStage"], [initSeraph, "#seraphStage"],
      [initCurse, "#curseLines"], [initSeedWar, "#seedWar"], [initBronze, "#poleStage"],
      [initMap, "#mapStage"], [initZiggurat, "#zigStage"], [initGen, "#genLine"], [initNations, "#nationsStage"], [initLadder, "#ladderStage"],
      [initPentecost, "#compare"], [initCities, "#lanes"], [initWeb, "#webStage"], [initQuiz, "#quizBox"], [initSources, "#sourceList"], [initScroll]];
    steps.forEach(([fn, need]) => { if (need && !$(need)) return; try { fn(); } catch (err) { console.error(fn.name, err); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
