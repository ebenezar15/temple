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

;DATA.quiz.forEach(q => { q.part = q.part || "core"; });

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

;DATA.quiz.forEach(q => { q.part = q.part || "serpent"; });

/* Part IV: Kings and Priests */
DATA.kp = {};

/* 1 · God's design: flowchart nodes (viewBox 900 × 470) */
DATA.kp.design = [
  { id: "god", x: 450, y: 44, w: 300, t: "God: the true King and the holy Presence", c: "accent",
    d: "Before there are any kings or priests, God is both: “The LORD is king forever and ever” (Ps 10:16) and the Holy One whose presence fills the temple (Isa 6:1–3). Every human king and priest is meant to reflect him, never replace him." },
  { id: "image", x: 450, y: 134, w: 300, t: "Humanity made in his image", c: "ink", ref: "Gen 1:26–27",
    d: "In the ancient world only kings and priests were called the “image” of a god. Genesis gives that title to every human being, male and female. Royalty and priesthood are humanity’s original job description, not a privilege for a few." },
  { id: "king", x: 205, y: 240, w: 290, t: "KING · rule and subdue", sub: "rādâ · kābaš", c: "babel", ref: "Gen 1:28",
    d: "“Have dominion (rādâ) … and subdue (kābaš) the earth.” Kingship faces outward to the world on God’s behalf: ordering, protecting, developing and stewarding creation as his representative. Psalm 8:5–6 sings it: “crowned with glory and honour … given dominion over the works of your hands.”" },
  { id: "priest", x: 695, y: 240, w: 290, t: "PRIEST · serve and guard", sub: "ʿābad · šāmar", c: "eden", ref: "Gen 2:15",
    d: "“To work (ʿābad) it and keep (šāmar) it”: the verbs used later for Levites serving and guarding the Tabernacle (Num 3:7–8). Priesthood faces Godward: living in his presence, worshipping, guarding what is holy, and bringing creation back to him." },
  { id: "adam", x: 450, y: 338, w: 320, t: "Adam: a priest-king in the garden-temple", c: "accent",
    d: "One person, two directions. Authority over creation flows out of access to God. The king rules well because the priest walks with God in the cool of the day (Gen 3:8)." },
  { id: "mission", x: 450, y: 428, w: 440, t: "Mission: fill the earth with God’s presence", c: "ink", ref: "Gen 1:28; Hab 2:14",
    d: "“Be fruitful and multiply and fill the earth.” Eden was meant to spread until “the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea” (Hab 2:14). Priest-kings multiplying priest-kings." }
];
DATA.kp.designEdges = [["god", "image"], ["image", "king"], ["image", "priest"], ["king", "adam"], ["priest", "adam"], ["adam", "mission"]];

/* 2 · How it got twisted */
DATA.kp.twist = [
  { strand: "both", t: "The grasp", ref: "Gen 3:5–6", d: "“You will be like God.” Instead of receiving rule from God, humanity seizes it. The priest stops guarding the sanctuary; the king takes what was not given. Both offices break at once." },
  { strand: "king", t: "Rule becomes domination", ref: "Gen 3:16", d: "“He shall rule over you.” The same idea of rule, now turned against another image-bearer. Kingship shifts from serving creation to controlling people." },
  { strand: "king", t: "Cain builds a city", ref: "Gen 4:17–24", d: "The first city is founded by a murderer, named after his son, and ends with Lamech’s boast of seventy-sevenfold revenge. Power without presence." },
  { strand: "king", t: "Nimrod, the first “mighty one”", ref: "Gen 10:8–12", d: "“The beginning of his kingdom was Babel.” The first named king builds empire: kingship as conquest and self-made greatness." },
  { strand: "priest", t: "Babel’s temple-tower", ref: "Gen 11:1–9", d: "Priesthood turned into technology: build the right structure, perform the right rites, and bring a god down on the city’s terms (Part III)." },
  { strand: "both", t: "Pharaoh: king as god", ref: "Exod 1:8–14; 5:2", d: "Egypt’s king was hailed as son of the sun god and served as chief priest of the land. One man claims both offices for himself, and enslaves God’s firstborn son (Exod 4:22)." },
  { strand: "king", t: "“A king like all the nations”", ref: "1 Sam 8:5–20", d: "Israel rejects God as king. Samuel warns what such a king will do: “he will take” your sons, daughters, fields, vineyards, servants and flocks, six times over (1 Sam 8:11–17)." },
  { strand: "priest", t: "Priests for profit", ref: "1 Sam 2:12–17; Mal 2:7–9", d: "Eli’s sons take the best of the sacrifices by force. Later priests “turned aside from the way” and “caused many to stumble by your instruction.” Access to God becomes a business." },
  { strand: "both", t: "King and high priest against the Anointed", ref: "Ps 2:1–2; John 11:47–53; Luke 23:6–12", d: "Herod and the chief priests join hands against Jesus: “The kings of the earth set themselves … against the LORD and against his Anointed” (Acts 4:25–27)." },
  { strand: "both", t: "Babylon the great", ref: "Rev 17–18", d: "The final picture: the kings of the earth and a seductive false religion locked together, until both fall in a single hour." }
];
DATA.kp.contrast = [
  ["Source of authority", "Received from God and exercised under his word (Deut 17:18–20)", "Self-made, inherited by force or claimed as divine right"],
  ["Use of power", "Shepherding: protecting the weak, doing justice (Ps 72:1–4, 12–14)", "Taking: “he will take … he will take” (1 Sam 8:11–17)"],
  ["Access to God", "A gift of grace, entered with holiness and fear (Lev 10:3)", "Controlled by ritual, purchase or position (Mic 3:11)"],
  ["Toward people", "Bless them and carry their names before God (Num 6:22–27; Exod 28:29)", "Use them: priests who “feed on the sheep” (Ezek 34:2–3)"],
  ["Toward God", "Represent him; “Holy to the LORD” (Exod 28:36)", "Replace him; “I will make myself like the Most High” (Isa 14:14)"],
  ["Where it ends", "A city where God’s servants “will reign forever” (Rev 22:5)", "Babylon “fallen, fallen” in one hour (Rev 18:2, 10)"]
];

/* 3 · Israel: one calling, split into offices */
DATA.kp.split = [
  { id: "offer", x: 450, y: 42, t: "“You shall be to me a kingdom of priests”", ref: "Exod 19:5–6", c: "accent",
    d: "At Sinai God offers the whole nation the Eden vocation: a royal priesthood standing between God and the nations. Every Israelite was invited." },
  { id: "fear", x: 450, y: 134, t: "The people stand far off", ref: "Exod 20:18–21", c: "flame",
    d: "“You speak to us, and we will listen; but do not let God speak to us, lest we die.” The people ask for a go-between rather than direct access." },
  { id: "calf", x: 450, y: 226, t: "The golden calf", ref: "Exod 32", c: "flame",
    d: "At the foot of the mountain, with Aaron leading, Israel makes an idol. Priesthood fails at its very first moment." },
  { id: "levi", x: 200, y: 336, t: "Levi and Aaron: the priests", ref: "Exod 32:26–29; Num 3:5–13", c: "eden",
    d: "The Levites rally to Moses and are set apart in place of the firstborn of every family. Aaron’s sons become priests; the rest of Levi serves the Tabernacle. Access is now carried by one tribe on behalf of all." },
  { id: "judah", x: 700, y: 336, t: "Judah and David: the kings", ref: "Gen 49:10; 2 Sam 7:12–16", c: "babel",
    d: "The scepter is promised to Judah and the throne to David’s line. A king must write his own copy of God’s law, read it daily and not exalt himself above his brothers (Deut 17:14–20)." },
  { id: "prophet", x: 450, y: 336, t: "Prophets: the word", ref: "Deut 18:15–22", c: "muted",
    d: "A third office holds both accountable, speaking God’s word to kings (Nathan, Elijah) and priests (Malachi)." },
  { id: "messiah", x: 450, y: 446, t: "Promised: one who unites them again", ref: "Ps 110:4; Zech 6:12–13", c: "accent",
    d: "“You are a priest forever after the order of Melchizedek.” “He shall sit and rule on his throne. And there shall be a priest on his throne, and the counsel of peace shall be between them both.”" }
];
DATA.kp.splitEdges = [["offer", "fear"], ["fear", "calf"], ["calf", "levi"], ["calf", "judah"], ["calf", "prophet"], ["levi", "messiah"], ["judah", "messiah"], ["prophet", "messiah"]];

DATA.kp.offices = {
  prophet: { t: "Prophet", c: "var(--muted)", anoint: "Elisha anointed by Elijah (1 Kgs 19:16)",
    role: "Brings God’s word to people: calls, warns, corrects and comforts.", christ: "The prophet like Moses (Deut 18:15; Acts 3:22); the Word made flesh (John 1:14).",
    us: "“That you may proclaim the excellencies of him who called you” (1 Pet 2:9); speak the truth in love (Eph 4:15)." },
  priest: { t: "Priest", c: "var(--eden)", anoint: "Aaron anointed by Moses (Exod 29:7; Lev 8:12)",
    role: "Brings people to God: sacrifice, intercession, blessing, teaching the law, guarding holiness.", christ: "The great high priest who offered himself once for all and always intercedes (Heb 7:25–27).",
    us: "Offer spiritual sacrifices (1 Pet 2:5), intercede for all people (1 Tim 2:1), draw near with confidence (Heb 4:16)." },
  king: { t: "King", c: "var(--babel)", anoint: "David anointed by Samuel (1 Sam 16:13); Solomon by Zadok the priest (1 Kgs 1:39)",
    role: "Rules on God’s behalf: justice, protection, leadership, stewardship of land and people.", christ: "The Son of David enthroned at God’s right hand, King of kings (Acts 2:30–36; Rev 19:16).",
    us: "Reign in life through Christ (Rom 5:17), steward our work and world (Col 3:23), lead by serving (Mark 10:42–45)." }
};

/* 4 · Roles: priest vs king */
DATA.kp.roles = {
  priest: {
    resp: ["Offer sacrifices and burn incense (Lev 1–7; Exod 30:7–8)", "Intercede and make atonement (Lev 16)", "Bless the people in God’s name (Num 6:22–27)", "Teach the law and distinguish holy from common (Lev 10:10–11; Mal 2:7)", "Guard the sanctuary (Num 18:1–7)", "Help judge hard cases (Deut 17:8–12)"],
    access: "Priests entered the Holy Place daily. Only the high priest entered the Most Holy Place, once a year, with blood (Lev 16:2, 34; Heb 9:7).",
    authority: "Spiritual authority over worship, purity and teaching. Priests had no army and no land inheritance: “I am your portion and your inheritance” (Num 18:20).",
    limits: "Must be of Aaron’s line (Num 3:10), physically unblemished (Lev 21:16–23) and ritually holy. Strange fire brought death (Lev 10:1–2)."
  },
  king: {
    resp: ["Write and read a copy of the law daily (Deut 17:18–19)", "Do justice and defend the poor (Ps 72:1–4; Jer 22:15–16)", "Lead and protect the people (1 Sam 8:20)", "Shepherd, not fleece, the flock (2 Sam 5:2; Ezek 34)", "Support true worship and the Temple (1 Chr 22; 2 Chr 29–31)"],
    access: "Kings worshipped in the courts like other Israelites. They could not enter the Holy Place or burn incense (2 Chr 26:18).",
    authority: "Civil and military authority, always under God’s law and answerable to prophets (2 Sam 12:7).",
    limits: "Must be an Israelite chosen by God; must not multiply horses, wives or gold, nor return to Egypt, nor lift his heart above his brothers (Deut 17:15–20)."
  }
};
DATA.kp.garments = [
  { id: "turban", who: "priest", t: "Turban and gold plate", ref: "Exod 28:36–38", d: "A plate of pure gold engraved “Holy to the LORD” on the front of the turban, “so that Aaron shall bear any guilt from the holy things.” The priest’s head is marked for God." },
  { id: "ephod", who: "priest", t: "Ephod and onyx stones", ref: "Exod 28:6–12", d: "A vest of gold, blue, purple and scarlet. On its shoulders two onyx stones engraved with the names of the twelve tribes: the priest carries the people on his shoulders before God." },
  { id: "breast", who: "priest", t: "Breastpiece of judgment", ref: "Exod 28:15–30", d: "Twelve stones in four rows, each engraved with a tribe, worn “on his heart … before the LORD regularly”. Inside it, the Urim and Thummim for seeking God’s decision." },
  { id: "robe", who: "priest", t: "Robe of blue: bells and pomegranates", ref: "Exod 28:31–35", d: "A robe all of blue with golden bells and pomegranates around the hem, “so that its sound shall be heard when he goes into the Holy Place.” Fruitfulness and the sound of life in God’s presence." },
  { id: "tunic", who: "priest", t: "Linen tunic and sash", ref: "Exod 28:39–43", d: "Fine linen “for glory and for beauty”. Linen, not wool, “so that they do not sweat” (Ezek 44:18): priestly service is not done in the strength of the flesh." },
  { id: "crown", who: "king", t: "Crown", ref: "Ps 21:3; 2 Sam 12:30", d: "“You set a crown of fine gold upon his head.” A sign of glory received, not seized. Jesus wore a crown of thorns before many diadems (John 19:2; Rev 19:12)." },
  { id: "scepter", who: "king", t: "Scepter", ref: "Gen 49:10; Ps 45:6", d: "“The scepter shall not depart from Judah.” “The scepter of your kingdom is a scepter of uprightness.” Authority measured by righteousness." },
  { id: "scroll", who: "king", t: "His own copy of the law", ref: "Deut 17:18–20", d: "The king must write a copy of the law “in the presence of the Levitical priests” and read it all his life, “that his heart may not be lifted up above his brothers.” The king sits under a book." },
  { id: "throne", who: "king", t: "Throne", ref: "1 Kgs 10:18–20; 1 Chr 29:23", d: "Solomon “sat on the throne of the LORD as king.” The throne belongs to God; the king only occupies it for him." },
  { id: "ring", who: "king", t: "Signet ring", ref: "Hag 2:23", d: "God calls Zerubbabel, David’s heir after the exile, “like a signet ring, for I have chosen you”: the seal that carries the king’s authority." }
];

/* 5 · Access: rings of holiness */
DATA.kp.rings = [
  { n: "Most Holy Place", who: "The high priest, once a year, with blood", ref: "Lev 16; Heb 9:7" },
  { n: "Holy Place", who: "Priests, daily, for incense, lamps and bread", ref: "Exod 30:7–8; Heb 9:6" },
  { n: "Court", who: "Israelites bringing sacrifices", ref: "Lev 1:2–5" },
  { n: "Outer court", who: "The nations; in Herod’s temple a stone barrier warned Gentiles to go no further on pain of death", ref: "Eph 2:14" }
];

/* 6 · Crossing the line */
DATA.kp.cross = [
  { n: "Korah", role: "Levite seizes priesthood", ref: "Num 16", did: "With 250 leaders, demands the priesthood: “All in the congregation are holy … Why then do you exalt yourselves?”", res: "The earth opens and fire consumes the 250 offering incense. Aaron’s staff buds to confirm God’s choice (Num 17).", k: "bad" },
  { n: "Saul", role: "King acts as priest", ref: "1 Sam 13:8–14", did: "Impatient for Samuel, offers the burnt offering himself before battle.", res: "“You have done foolishly … now your kingdom shall not continue.” His dynasty is rejected.", k: "bad" },
  { n: "Uzzah", role: "Handling holy things wrongly", ref: "2 Sam 6:1–11; 1 Chr 15:13–15", did: "The Ark is carried on a new cart, Philistine-style. When the oxen stumble, Uzzah grabs it.", res: "He dies. David learns: “Because you did not carry it the first time … we did not seek him according to the rule.”", k: "bad" },
  { n: "Jeroboam I", role: "King invents a priesthood", ref: "1 Kgs 12:25–33; 13:1–5", did: "Sets up golden calves at Bethel and Dan, appoints priests from any tribe and a festival of his own devising.", res: "His hand withers as he stretches it out at the altar. “This thing became sin” and doomed his house (1 Kgs 13:34).", k: "bad" },
  { n: "Ahaz", role: "King redesigns worship", ref: "2 Kgs 16:10–18", did: "Copies a pagan altar from Damascus, has Urijah the priest build it and moves God’s altar aside.", res: "Worship is reshaped by politics; Judah slides toward judgment. The compliant priest is complicit.", k: "bad" },
  { n: "Uzziah", role: "King burns incense", ref: "2 Chr 26:16–21", did: "“When he was strong, he grew proud” and entered the Temple to burn incense.", res: "Azariah and eighty priests withstand him; leprosy breaks out on his forehead and he lives in isolation until death.", k: "bad" },
  { n: "Jehoshaphat", role: "Getting it right", ref: "2 Chr 19:8–11", did: "Sets up courts with a clear division: “Amariah the chief priest is over you in all matters of the LORD; and Zebadiah … in all the king’s matters.”", res: "Order and justice: “Deal courageously, and may the LORD be with the upright!”", k: "good" },
  { n: "Josiah and Hilkiah", role: "Partnership", ref: "2 Kgs 22–23", did: "The high priest finds the Book of the Law; the king hears it, tears his robes and leads national repentance.", res: "The greatest reform in Judah’s history: “Before him there was no king like him.”", k: "good" }
];

/* 7 · People map: lane k = king | both | priest; era index; f = faithful, mixed, twisted; pair id links partners */
DATA.kp.eras = ["Beginning", "Patriarchs", "Exodus", "Judges", "United kingdom", "Divided kingdom", "Exile & return", "Between the Testaments", "New Testament & beyond"];
DATA.kp.people = [
  { n: "Adam", lane: "both", era: 0, f: "mixed", ref: "Gen 1:26–28; 2:15", d: "The first priest-king: to rule the earth and serve and guard the garden-temple. He failed to guard it." },
  { n: "Abel", lane: "priest", era: 0, f: "faithful", ref: "Gen 4:4; Heb 11:4", d: "Brings the firstborn of his flock: the first acceptable offering, made by faith." },
  { n: "Cain", lane: "king", era: 0, f: "twisted", ref: "Gen 4:8–17", d: "Kills his brother and builds the first city: power cut off from God’s presence." },
  { n: "Noah", lane: "both", era: 0, f: "faithful", ref: "Gen 8:20–9:7", d: "Builds an altar and offers sacrifice; receives a renewed commission to fill and rule the earth." },
  { n: "Nimrod", lane: "king", era: 1, f: "twisted", ref: "Gen 10:8–12", d: "The first “mighty one” on earth, whose kingdom began at Babel." },
  { n: "Melchizedek", lane: "both", era: 1, f: "faithful", ref: "Gen 14:18–20; Heb 7", d: "King of Salem and priest of God Most High. Brings bread and wine and blesses Abraham, who gives him a tenth." },
  { n: "Abraham", lane: "both", era: 1, f: "faithful", ref: "Gen 12:7–8; 14:14–16; 23:6", d: "Builds altars wherever God appears, defeats four kings, and is called “a prince of God” by the Hittites. Kings will come from him (Gen 17:6)." },
  { n: "Job", lane: "priest", era: 1, f: "faithful", ref: "Job 1:5; 42:8", d: "Offers burnt offerings for his children and later prays for his friends: a father as household priest." },
  { n: "Pharaoh", lane: "king", era: 2, f: "twisted", ref: "Exod 1:8–22; 5:2", d: "God-king and chief priest of Egypt: “Who is the LORD, that I should obey his voice?”", pair: "exodus" },
  { n: "Jethro", lane: "priest", era: 2, f: "faithful", ref: "Exod 18", d: "Priest of Midian who blesses God for the exodus and teaches Moses to share the burden of judging." },
  { n: "Moses", lane: "both", era: 2, f: "faithful", ref: "Ps 99:6; Lev 8; Deut 33:4–5", d: "Leader and lawgiver who consecrated the priests and stood in the gap for Israel. Psalm 99 counts him “among his priests”.", pair: "moses" },
  { n: "Aaron", lane: "priest", era: 2, f: "mixed", ref: "Exod 28–29; 32", d: "The first high priest, anointed and robed for glory and beauty. He also made the golden calf.", pair: "moses" },
  { n: "Phinehas", lane: "priest", era: 2, f: "faithful", ref: "Num 25:10–13", d: "Zealous for God’s holiness; given “a covenant of a perpetual priesthood”." },
  { n: "Korah", lane: "priest", era: 2, f: "twisted", ref: "Num 16", d: "A Levite who tried to seize the priesthood. The ground swallowed him." },
  { n: "Gideon", lane: "king", era: 3, f: "mixed", ref: "Judg 8:22–27", d: "Refuses the crown, “The LORD will rule over you”, then makes an ephod that becomes a snare to Israel." },
  { n: "Abimelech", lane: "king", era: 3, f: "twisted", ref: "Judg 9", d: "Murders seventy brothers to make himself king. Jotham’s fable of the bramble-king mocks him." },
  { n: "Micah’s priest", lane: "priest", era: 3, f: "twisted", ref: "Judg 17–18", d: "A Levite hired for ten pieces of silver a year, then lured away by a better offer. “Everyone did what was right in his own eyes.”" },
  { n: "Eli", lane: "priest", era: 3, f: "mixed", ref: "1 Sam 2:12–36", d: "High priest at Shiloh who honoured his sons above God. God promises “a faithful priest” instead." },
  { n: "Samuel", lane: "both", era: 3, f: "faithful", ref: "1 Sam 3; 7:9–17", d: "Levite, prophet and the last judge. He offered sacrifices, led the nation and anointed its first two kings." },
  { n: "Saul", lane: "king", era: 4, f: "twisted", ref: "1 Sam 13:8–14; 15", d: "The king “like all the nations”. Offered sacrifice in impatience and lost the kingdom." },
  { n: "David", lane: "both", era: 4, f: "faithful", ref: "2 Sam 6:14–18; Ps 110", d: "The king after God’s heart. Wore a linen ephod, offered sacrifices and blessed the people as the Ark came home, all under God’s order. He wrote of a priest-king to come.", pair: "david" },
  { n: "Zadok", lane: "priest", era: 4, f: "faithful", ref: "1 Kgs 1:32–40; Ezek 44:15", d: "Faithful priest who anointed Solomon; Ezekiel’s future temple is served by “the sons of Zadok”.", pair: "david" },
  { n: "Abiathar", lane: "priest", era: 4, f: "mixed", ref: "1 Kgs 2:26–27", d: "David’s loyal priest who later backed Adonijah and was removed, fulfilling the word against Eli’s house." },
  { n: "Solomon", lane: "king", era: 4, f: "mixed", ref: "1 Kgs 8; 11:1–8", d: "Builds the Temple, offers its dedication prayer and blesses the people. Later multiplies wives, gold and horses, exactly what Deuteronomy 17 forbade.", pair: "david" },
  { n: "Jeroboam I", lane: "king", era: 5, f: "twisted", ref: "1 Kgs 12:25–33", d: "Invents his own priesthood, altars and festival for the northern kingdom." },
  { n: "Jehoshaphat", lane: "king", era: 5, f: "faithful", ref: "2 Chr 19:8–11", d: "Separates “matters of the LORD” (the chief priest) from “the king’s matters”.", pair: "jehosh" },
  { n: "Amariah", lane: "priest", era: 5, f: "faithful", ref: "2 Chr 19:11", d: "Chief priest set over “all matters of the LORD” in Jehoshaphat’s courts.", pair: "jehosh" },
  { n: "Joash", lane: "king", era: 5, f: "mixed", ref: "2 Kgs 11–12; 2 Chr 24", d: "Rescued as a baby and crowned at seven by the priest Jehoiada. Did well while Jehoiada lived, then turned and killed his son Zechariah.", pair: "joash" },
  { n: "Jehoiada", lane: "priest", era: 5, f: "faithful", ref: "2 Kgs 11:4–21; 2 Chr 24:16", d: "High priest who hid the last heir of David and restored the throne. Buried “among the kings, because he had done good in Israel”.", pair: "joash" },
  { n: "Uzziah", lane: "king", era: 5, f: "mixed", ref: "2 Chr 26", d: "Strong and successful, then proud: he burned incense and was struck with leprosy.", pair: "uzziah" },
  { n: "Azariah the priest", lane: "priest", era: 5, f: "faithful", ref: "2 Chr 26:17–18", d: "With eighty priests he withstood the king: “It is not for you, Uzziah, to burn incense to the LORD.”", pair: "uzziah" },
  { n: "Ahaz", lane: "king", era: 5, f: "twisted", ref: "2 Kgs 16:10–18", d: "Copies a pagan altar for the Temple.", pair: "ahaz" },
  { n: "Urijah", lane: "priest", era: 5, f: "twisted", ref: "2 Kgs 16:11, 16", d: "Builds the king’s altar exactly as ordered: a priest who would not say no.", pair: "ahaz" },
  { n: "Hezekiah", lane: "king", era: 5, f: "faithful", ref: "2 Chr 29–31", d: "Cleanses the Temple, restores the priests and Levites, and celebrates the greatest Passover since Solomon." },
  { n: "Josiah", lane: "king", era: 5, f: "faithful", ref: "2 Kgs 22–23", d: "Hears the rediscovered law and leads Judah’s deepest reform.", pair: "josiah" },
  { n: "Hilkiah", lane: "priest", era: 5, f: "faithful", ref: "2 Kgs 22:8", d: "High priest who found the Book of the Law in the Temple.", pair: "josiah" },
  { n: "Zerubbabel", lane: "king", era: 6, f: "faithful", ref: "Hag 2:20–23; Zech 4:6–10", d: "David’s heir and governor after the exile: “Not by might, nor by power, but by my Spirit.” God’s chosen signet ring.", pair: "return" },
  { n: "Joshua the high priest", lane: "both", era: 6, f: "faithful", ref: "Zech 3; 6:9–15", d: "Cleansed in a vision, then crowned as a sign: “Behold, the man whose name is the Branch … he shall be a priest on his throne.” With Zerubbabel, one of “the two anointed ones” (Zech 4:14).", pair: "return" },
  { n: "Ezra", lane: "priest", era: 6, f: "faithful", ref: "Ezra 7:10", d: "Priest and scribe who “set his heart to study the Law of the LORD, and to do it and to teach”.", pair: "ezra" },
  { n: "Nehemiah", lane: "king", era: 6, f: "faithful", ref: "Neh 2; 8:9", d: "Persian-appointed governor who rebuilds Jerusalem’s walls and works alongside Ezra.", pair: "ezra" },
  { n: "The Hasmoneans", lane: "both", era: 7, f: "twisted", ref: "1 Maccabees 14:41", d: "After the Maccabean revolt, priestly rulers took the high priesthood and later the title of king, though neither of David’s line nor of Zadok’s. Many Jews objected, and the Qumran community looked for two messiahs, one of Aaron and one of Israel." },
  { n: "Herod", lane: "king", era: 8, f: "twisted", ref: "Matt 2:16; Luke 23:6–12", d: "Herod the Great rebuilt the Temple and slaughtered Bethlehem’s infants; his son Antipas mocked Jesus at his trial.", pair: "trial" },
  { n: "Caiaphas", lane: "priest", era: 8, f: "twisted", ref: "John 11:49–53; 18:13–14", d: "High priest who reasoned that one man should die for the nation, unknowingly prophesying the cross.", pair: "trial" },
  { n: "Zechariah", lane: "priest", era: 8, f: "faithful", ref: "Luke 1:5–23, 67–79", d: "A priest burning incense when Gabriel announces John’s birth. His song celebrates “a horn of salvation … in the house of his servant David”." },
  { n: "Jesus", lane: "both", era: 8, f: "faithful", ref: "Heb 7; Rev 19:16", d: "Son of David and high priest after the order of Melchizedek: the one person in whom kingship and priesthood fully meet." },
  { n: "The church", lane: "both", era: 8, f: "faithful", ref: "1 Pet 2:5, 9; Rev 1:6; 5:10", d: "“A chosen race, a royal priesthood, a holy nation.” Made “a kingdom and priests to our God, and they shall reign on the earth.”" }
];

/* 8 · Melchizedek vs Aaron */
DATA.kp.order = [
  ["Tribe", "Levi, through Aaron (Num 3:10)", "No genealogy recorded; Jesus is from Judah (Heb 7:3, 13–14)"],
  ["Basis", "“A legal requirement concerning bodily descent”", "“The power of an indestructible life” (Heb 7:16)"],
  ["Appointment", "Without an oath", "With an oath: “The Lord has sworn and will not change his mind” (Heb 7:20–21; Ps 110:4)"],
  ["Duration", "Many priests, “prevented by death from continuing”", "“A priest forever”; “he always lives to make intercession” (Heb 7:23–25)"],
  ["Sacrifice", "Daily, repeated, for his own sins too", "“Once for all when he offered up himself” (Heb 7:27)"],
  ["Sanctuary", "An earthly copy and shadow", "“Into heaven itself, now to appear in the presence of God on our behalf” (Heb 9:24)"],
  ["King as well?", "Never: priests could not rule", "Yes: “king of righteousness … king of peace” (Heb 7:2)"]
];
DATA.kp.melchFlow = [
  { ref: "Genesis 14:18–20", t: "The meeting", d: "After the battle of the kings, Melchizedek, king of Salem and priest of God Most High, brings out bread and wine and blesses Abram. Abram gives him a tenth of everything." },
  { ref: "Psalm 110:1, 4", t: "The oath", d: "David hears God speak to “my Lord”: “Sit at my right hand … You are a priest forever after the order of Melchizedek.” A king at God’s right hand who is also a priest." },
  { ref: "Hebrews 5–7", t: "The fulfilment", d: "Jesus, of Judah and not Levi, is that priest. Because Levi was “still in the loins of his ancestor” when Abraham tithed, the greater blessed the lesser (Heb 7:7–10)." },
  { ref: "Hebrews 8–10", t: "The new covenant", d: "A better priest brings a better covenant, a better sanctuary and a better sacrifice, and opens the way for all his people to draw near." }
];

/* 9 · Promises converging (viewBox 1060 × 470) */
DATA.kp.promises = [
  { s: "king", x: 70, ref: "Gen 1:28", t: "Dominion", d: "Humanity is given rule over the earth." },
  { s: "king", x: 170, ref: "Gen 17:6", t: "Kings from Abraham", d: "“Kings shall come from you.”" },
  { s: "king", x: 270, ref: "Gen 49:10", t: "The scepter to Judah", d: "“Until tribute comes to him; and to him shall be the obedience of the peoples.”" },
  { s: "king", x: 370, ref: "Num 24:17", t: "Star and scepter", d: "“A star shall come out of Jacob, and a scepter shall rise out of Israel.”" },
  { s: "king", x: 470, ref: "2 Sam 7:12–16", t: "David’s house forever", d: "“I will establish the throne of his kingdom forever.”" },
  { s: "king", x: 570, ref: "Isa 9:6–7", t: "Prince of Peace", d: "“Of the increase of his government and of peace there will be no end, on the throne of David.”" },
  { s: "priest", x: 70, ref: "Gen 14:18", t: "Melchizedek", d: "A king who is also priest of God Most High." },
  { s: "priest", x: 170, ref: "Exod 19:6", t: "Kingdom of priests", d: "The whole nation called to royal priesthood." },
  { s: "priest", x: 270, ref: "Num 25:13", t: "Perpetual priesthood", d: "A covenant of priesthood with Phinehas." },
  { s: "priest", x: 370, ref: "1 Sam 2:35", t: "A faithful priest", d: "“I will raise up for myself a faithful priest, who shall do according to what is in my heart.”" },
  { s: "priest", x: 470, ref: "Ps 110:4", t: "Priest forever", d: "“After the order of Melchizedek.”" },
  { s: "priest", x: 570, ref: "Isa 61:6; Jer 33:17–22", t: "Priests of the LORD", d: "“You shall be called the priests of the LORD.” God promises never to lack a king on David’s throne or Levitical priests before him." },
  { s: "join", x: 690, ref: "Zech 6:12–13", t: "A priest on his throne", d: "The Branch “shall build the temple of the LORD … and shall sit and rule on his throne. And there shall be a priest on his throne.”" },
  { s: "christ", x: 820, ref: "Luke 1:32–33; Heb 7:26–28", t: "Jesus Christ", d: "Given “the throne of his father David” and made “a high priest, holy, innocent … exalted above the heavens.”" },
  { s: "church", x: 950, ref: "1 Pet 2:9; Rev 1:6; 5:10; 22:5", t: "A royal priesthood", d: "His people share both offices: “they shall reign on the earth … and they will reign forever and ever.”" }
];

/* 10 · Our calling */
DATA.kp.calling = {
  priest: [
    ["Draw near", "With confidence to the throne of grace (Heb 4:16; 10:19–22)."],
    ["Offer spiritual sacrifices", "Your body as a living sacrifice; praise; doing good and sharing (Rom 12:1; Heb 13:15–16)."],
    ["Intercede", "Supplications, prayers and thanksgivings for all people, including those in authority (1 Tim 2:1–2)."],
    ["Bless", "Bless and do not curse (Rom 12:14; Luke 6:28)."],
    ["Minister reconciliation", "“We are ambassadors for Christ, God making his appeal through us” (2 Cor 5:18–20)."],
    ["Guard what is holy", "Your heart, your body as God’s temple, and the truth entrusted to you (Prov 4:23; 1 Cor 6:19; 2 Tim 1:14)."]
  ],
  king: [
    ["Reign in life", "Through the abundance of grace and the gift of righteousness (Rom 5:17)."],
    ["Rule yourself", "“Whoever rules his spirit” is better than one who takes a city; self-control is fruit of the Spirit (Prov 16:32; Gal 5:23)."],
    ["Steward your domain", "Work heartily as for the Lord; be faithful in little (Col 3:23; Luke 16:10; 19:17)."],
    ["Do justice", "Do justice, love kindness, walk humbly (Mic 6:8); open your mouth for the voiceless (Prov 31:8–9)."],
    ["Stand in Christ’s authority", "Seated with Christ in the heavenly places; resist the enemy in his armour (Eph 2:6; 6:10–18; Luke 10:19)."],
    ["Lead by serving", "“Whoever would be great among you must be your servant … the Son of Man came not to be served but to serve” (Mark 10:42–45)."]
  ]
};
DATA.kp.balance = [
  { max: 15, t: "All priest, no king", d: "Worship without responsibility. Faith becomes private and withdrawn, prayer never turns into action, and the world is left to others. Compare the priest and Levite who passed by on the other side (Luke 10:31–32)." },
  { max: 40, t: "Leaning priestly", d: "Rich devotion that needs to step out: let what you receive in God’s presence go into your work, family and city (Jas 2:14–17)." },
  { max: 60, t: "A royal priesthood", d: "Authority flowing from access. We stand before God for the world, and stand in the world for God. Rule is safe only in hands that first worship. “They will be priests of God and of Christ, and they will reign with him” (Rev 20:6)." },
  { max: 85, t: "Leaning kingly", d: "Strong action that needs to slow down and return to the presence, or it will run on its own strength (Ps 127:1–2; John 15:5)." },
  { max: 101, t: "All king, no priest", d: "Power without presence. Activism, control and pride: Saul offering his own sacrifice, Uzziah reaching for the censer when he was strong (1 Sam 13; 2 Chr 26:16)." }
];
DATA.kp.cycle = [
  { t: "Enter", ref: "Heb 10:19–22", d: "Come into God’s presence through the blood of Jesus and the torn curtain." },
  { t: "Receive & intercede", ref: "1 Tim 2:1; John 15:5", d: "Receive grace, word and direction; carry other people’s names before God." },
  { t: "Go & rule", ref: "Matt 28:18–20; Gen 1:28", d: "Go out under his authority to serve, build, heal and make disciples." },
  { t: "Offer back", ref: "Rom 12:1; Rev 21:24–26", d: "Bring the fruit of your work back to God as worship, and return to his presence." }
];

/* 11 · Study guide */
DATA.kp.study = [
  { t: "God’s design", q: ["Genesis 1:26–28 and 2:15 give two sets of verbs. Which describe kingship and which priesthood? Why might God want both in one person?", "How does Psalm 8 restate humanity’s royal calling?", "Where do you see authority and worship working together, or pulling apart, in your own life?"] },
  { t: "The twisting", q: ["Compare 1 Samuel 8:11–17 with Mark 10:42–45. What is the difference between a king who takes and a king who gives?", "What made Eli’s sons’ priesthood corrupt (1 Sam 2:12–17)? Where can religion become a means of gain today (1 Tim 6:5)?"] },
  { t: "Separate offices", q: ["Why did God separate priesthood and kingship in Israel? What does Uzziah’s story (2 Chr 26) teach about strength and pride?", "Read 2 Chronicles 19:8–11. What healthy boundaries do you see between “matters of the LORD” and “the king’s matters”?"] },
  { t: "Both together", q: ["Read Genesis 14:18–20, Psalm 110 and Hebrews 7. Why does Hebrews need Melchizedek to explain Jesus’ priesthood?", "Zechariah 6:9–15 crowns a high priest. What is the sign pointing to?"] },
  { t: "Our calling", q: ["1 Peter 2:9 calls the church “a royal priesthood”. Which half comes more naturally to you? Which needs to grow?", "Plan a daily rhythm of entering, receiving, going and offering back. What would change this week?"] }
];
DATA.kp.memory = [
  ["Exodus 19:6", "“You shall be to me a kingdom of priests and a holy nation.”"],
  ["Psalm 110:4", "“The LORD has sworn and will not change his mind, ‘You are a priest forever after the order of Melchizedek.’”"],
  ["Zechariah 6:13", "“He shall sit and rule on his throne. And there shall be a priest on his throne.”"],
  ["Hebrews 4:16", "“Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.”"],
  ["1 Peter 2:9", "“You are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.”"],
  ["Revelation 5:10", "“You have made them a kingdom and priests to our God, and they shall reign on the earth.”"],
  ["Mark 10:45", "“For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.”"],
  ["Romans 5:17", "“Much more will those who receive the abundance of grace and the free gift of righteousness reign in life through the one man Jesus Christ.”"]
];

DATA.quiz.push(
  { q: "Who was both “king of Salem” and “priest of God Most High”?", a: ["Jethro", "Melchizedek", "Aaron", "Samuel"], c: 1, x: "Melchizedek met Abraham with bread and wine (Gen 14:18–20); Psalm 110:4 and Hebrews 7 call Jesus a priest after his order." },
  { q: "What happened to King Uzziah when he burned incense in the Temple?", a: ["He lost a battle", "Leprosy broke out on his forehead", "His hand withered", "The ground opened"], c: 1, x: "2 Chronicles 26:16–21. Azariah and eighty priests withstood him: burning incense belonged to the priests." },
  { q: "In Zechariah 6, who is crowned as a sign of the coming Branch, “a priest on his throne”?", a: ["Zerubbabel", "Ezra", "Joshua the high priest", "Nehemiah"], c: 2, x: "The crown is set on Joshua the high priest (Zech 6:11–13), uniting the two offices in one sign." },
  { q: "Which verse calls the church “a royal priesthood”?", a: ["Romans 12:1", "1 Peter 2:9", "Hebrews 4:16", "Ephesians 2:6"], c: 1, x: "1 Peter 2:9, echoing Exodus 19:6." }
);

DATA.web.nodes.push(
  { id: "kingpriest", n: "Kings & priests", g: 3, d: "Humanity’s two-fold calling: to rule the world for God and to serve in his presence, split in Israel and reunited in Christ and his people." },
  { id: "melchizedek", n: "Melchizedek", g: 3, d: "King of Salem and priest of God Most High, the pattern for Christ’s eternal priesthood." }
);
DATA.web.edges.push(
  ["kingpriest", "adam", "The first priest-king (Gen 1:28; 2:15)"],
  ["kingpriest", "babel", "Nimrod, the first king, began at Babel (Gen 10:10)"],
  ["kingpriest", "temple", "Solomon builds it; priests serve in it"],
  ["kingpriest", "church", "“A royal priesthood” (1 Pet 2:9)"],
  ["kingpriest", "newjer", "“They will reign forever and ever” (Rev 22:5)"],
  ["melchizedek", "abraham", "Bread, wine, blessing and a tithe (Gen 14:18–20)"],
  ["melchizedek", "jesus", "“A priest forever after the order of Melchizedek” (Heb 7)"],
  ["melchizedek", "kingpriest", "King and priest in one person"]
);

DATA.sources.push(
  ["Peter J. Gentry & Stephen J. Wellum", "Kingdom through Covenant (2012)", "Adam as priest-king and the covenants that restore that calling."],
  ["Andrew S. Malone", "God’s Mediators: A Biblical Theology of Priesthood (2017)", "Priesthood from Eden to the church."],
  ["Daniel I. Block", "“The Burden of Leadership: The Mosaic Paradigm of Kingship” (2005)", "Deuteronomy 17 and the servant-king."]
);

;DATA.quiz.forEach(q => { q.part = q.part || "kings"; });

/* Part V: Prophets, the fivefold ministry and the kingdom now */
DATA.pr = {};

/* 1 · The prophetic office: covenant lawsuit flowchart (viewBox 900 × 560) */
DATA.pr.lawsuit = [
  { id: "council", x: 450, y: 40, t: "Stands in the council of the LORD", ref: "Jer 23:18, 22; Amos 3:7", c: "accent",
    d: "A true prophet’s defining privilege was access to hear: “Who among them has stood in the council of the LORD to see and to hear his word?” “The Lord GOD does nothing without revealing his secret to his servants the prophets.” Micaiah and Isaiah both describe seeing God’s throne-room council (1 Kgs 22:19–22; Isa 6)." },
  { id: "covenant", x: 450, y: 130, t: "God’s covenant with his people", ref: "Exod 19–24; Deut 28", c: "ink",
    d: "The prophets are not inventing new religion. They hold Israel to the covenant already made at Sinai, with its blessings for faithfulness and curses for rebellion." },
  { id: "breach", x: 450, y: 220, t: "Kings, priests and people break it", ref: "2 Kgs 17:13–14", c: "flame",
    d: "Idolatry, injustice, oppression of the poor, corrupt worship. “The LORD warned Israel and Judah by every prophet … but they would not listen.”" },
  { id: "sent", x: 450, y: 310, t: "The prophet is sent as God’s messenger", ref: "Mal 3:1; Jer 7:25", c: "muted",
    d: "Like an envoy carrying a king’s message, the prophet speaks with the formula of royal decrees: “Thus says the LORD.” His authority is entirely borrowed; tested by whether his words come true and lead to the true God (Deut 13:1–5; 18:20–22)." },
  { id: "indict", x: 220, y: 410, t: "Indictment and warning", ref: "Mic 6:1–8; Isa 1", c: "flame",
    d: "A covenant lawsuit (rîb): heaven and earth are called as witnesses, the charges are read, and the people are called to return: “He has told you, O man, what is good.”" },
  { id: "intercede", x: 680, y: 410, t: "Intercession", ref: "Gen 20:7; 1 Sam 12:23; Ezek 22:30", c: "eden",
    d: "Prophets also stood in the gap, a priestly-like role. Abraham is the first person called a prophet, precisely as one who prays for others. Samuel: “Far be it from me that I should sin against the LORD by ceasing to pray for you.”" },
  { id: "outcome", x: 450, y: 512, t: "Judgment or restoration, and a new covenant promised", ref: "Jer 31:31–34; Ezek 36:26–27", c: "accent",
    d: "Exile comes, but the prophets also see beyond it: a new covenant written on hearts, the Spirit poured out, a Davidic king and a renewed priesthood. The prophetic office points forward to its own fulfilment." }
];
DATA.pr.lawsuitEdges = [["council", "covenant"], ["covenant", "breach"], ["breach", "sent"], ["sent", "indict"], ["sent", "intercede"], ["indict", "outcome"], ["intercede", "outcome"]];

DATA.pr.office = [
  ["Purpose", "To guard the covenant relationship between God and his people: calling everyone, including kings and priests, back to faithfulness, and announcing God’s plans."],
  ["Authority", "Wholly derived. “Thus says the LORD.” The prophet had no army, no altar and often no status, yet kings trembled. Authority rose or fell on faithfulness to God’s word (Deut 18:18–22)."],
  ["Responsibilities", "Speak God’s word; warn and call to repentance; intercede; anoint and confront kings; correct priests; comfort the faithful; foretell; and, for some, write Scripture."],
  ["Access", "Not to the altar but to the council: the prophet heard God’s counsel and carried it out (Jer 23:18–22). Priests drew near to offer; prophets drew near to hear."],
  ["Limits", "False prophets were to be rejected, even if their signs worked (Deut 13:1–5). A prophet could not offer sacrifice or rule; he served the word."]
];

/* 2 · Prophets with kings and priests. rk / rp = relationship to king / priest */
DATA.pr.relTypes = { anoint: ["Anointed or appointed", "var(--accent)"], confront: ["Confronted", "var(--flame)"], counsel: ["Counselled", "var(--eden)"], strengthen: ["Strengthened", "var(--babel)"] };
DATA.pr.pairs = [
  { p: "Samuel", k: "Saul, David", rk: "anoint", pr: "Eli", rp: "confront", ref: "1 Sam 3:11–18; 10:1; 15; 16:13", d: "As a boy he delivers God’s judgment to Eli the high priest. As a man he anoints Saul, rebukes him for usurping the priest’s role, and anoints David." },
  { p: "Nathan", k: "David", rk: "confront", pr: "Zadok", rp: "anoint", ref: "2 Sam 7; 12; 1 Kgs 1:32–40", d: "Brings God’s covenant to David, then confronts him over Bathsheba: “You are the man!” With Zadok the priest he anoints Solomon." },
  { p: "Gad", k: "David", rk: "counsel", ref: "1 Sam 22:5; 2 Sam 24:11–19", d: "“David’s seer”. He directs David to build an altar on Araunah’s threshing floor, the site of the future Temple." },
  { p: "Ahijah", k: "Jeroboam I", rk: "anoint", ref: "1 Kgs 11:29–39; 14:1–16", d: "Tears his cloak into twelve pieces to designate Jeroboam king, then pronounces judgment when Jeroboam invents his own priesthood." },
  { p: "Elijah", k: "Ahab", rk: "confront", pr: "Baal’s prophets", rp: "confront", ref: "1 Kgs 17–18; 21", d: "Stands against Ahab’s idolatry and his theft of Naboth’s vineyard, and defeats 450 prophets of Baal on Mount Carmel." },
  { p: "Micaiah", k: "Ahab, Jehoshaphat", rk: "confront", ref: "1 Kgs 22", d: "The lone true voice among 400 flattering prophets. He describes the heavenly council and is imprisoned for it." },
  { p: "Elisha", k: "Jehu", rk: "anoint", ref: "2 Kgs 9:1–13", d: "Sends a young prophet to anoint Jehu to end the house of Ahab." },
  { p: "Amos", k: "Jeroboam II", rk: "confront", pr: "Amaziah of Bethel", rp: "confront", ref: "Amos 7:10–17", d: "A farmer from Judah. The royal priest at Bethel tells him to go home: “it is the king’s sanctuary.” Amos answers with God’s word." },
  { p: "Isaiah", k: "Ahaz, Hezekiah", rk: "strengthen", ref: "Isa 7; 37–39", d: "Urges Ahaz to trust God rather than Assyria, and strengthens Hezekiah when Jerusalem is besieged." },
  { p: "Huldah", k: "Josiah", rk: "counsel", pr: "Hilkiah", rp: "counsel", ref: "2 Kgs 22:12–20", d: "When the Book of the Law is found, the king sends the high priest to consult her. A woman prophet interprets Scripture for king and priest alike." },
  { p: "Jeremiah", k: "Zedekiah", rk: "confront", pr: "Pashhur", rp: "confront", ref: "Jer 20:1–6; 38:14–23", d: "Beaten and put in the stocks by Pashhur the priest, consulted in secret by the frightened king." },
  { p: "Haggai & Zechariah", k: "Zerubbabel", rk: "strengthen", pr: "Joshua", rp: "strengthen", ref: "Ezra 5:1–2; Hag 2; Zech 3–6", d: "Stir up the governor and the high priest to rebuild the Temple, and crown Joshua as a sign of the coming priest-king." },
  { p: "Malachi", pr: "The priests", rp: "confront", ref: "Mal 1:6–2:9", d: "Rebukes priests who offer blind and lame animals: “The lips of a priest should guard knowledge … but you have turned aside from the way.”" },
  { p: "John the Baptist", k: "Herod Antipas", rk: "confront", pr: "Priests and Levites", rp: "confront", ref: "Matt 3:7–12; 14:3–4; John 1:19–28", d: "Son of a priest, he preaches in the wilderness instead of the Temple, tells Herod “It is not lawful”, and points to the Lamb of God." },
  { p: "Jesus", k: "Herod", rk: "confront", pr: "Chief priests", rp: "confront", ref: "Luke 13:32; Matt 21:23–46", d: "The prophet like Moses (Acts 3:22) who confronts both king and Temple, and is himself the true King and High Priest." }
];

/* 3 · The fivefold */
DATA.pr.five = [
  { id: "apostle", n: "Apostles", gk: "apostolos · “one who is sent”", c: "var(--babel)",
    role: "Sent ones who pioneer, lay foundations and establish communities in Christ’s order (1 Cor 3:10; Rom 15:20).",
    ot: "Echoes Moses and Joshua leading a people into a new land; and the royal envoy (šālîaḥ) who carries a king’s authority.",
    king: "Strongly kingly: carrying the King’s commission into new territory and ordering communities under his rule (Matt 28:18–20).",
    priest: "Paul calls his mission “the priestly service of the gospel of God, so that the offering of the Gentiles may be acceptable” (Rom 15:16).",
    equip: "Equips believers to see their lives as sent: carrying Christ’s rule and presence into every place they go.",
    alone: "Isolated, it becomes empire-building, control and celebrity leadership." },
  { id: "prophet", n: "Prophets", gk: "prophētēs · “one who speaks forth”", c: "var(--accent)",
    role: "Hear and speak what God is saying now, for building up, encouragement and comfort (1 Cor 14:3), always weighed by Scripture and the church (1 Cor 14:29; 1 Thess 5:20–21).",
    ot: "The Old Testament prophets, but now in a people where the Spirit rests on all (Num 11:29; Joel 2:28; Acts 2:17–18).",
    king: "Calls those who lead in every sphere to justice and righteousness, as Nathan did to David.",
    priest: "Draws people into God’s presence and holiness, and leads in intercession (Acts 13:1–3).",
    equip: "Trains believers to hear God for themselves, discern and speak life: “you can all prophesy one by one, so that all may learn” (1 Cor 14:31).",
    alone: "Isolated, it becomes unaccountable, sensational or harsh." },
  { id: "evangelist", n: "Evangelists", gk: "euangelistēs · “herald of good news”", c: "var(--flame)",
    role: "Announce the good news of Jesus with clarity and power, and gather people into the kingdom (Acts 8:5–12; 21:8).",
    ot: "The herald on the mountains: “How beautiful … are the feet of him who brings good news … who says to Zion, ‘Your God reigns’” (Isa 52:7). In the Roman world “gospel” announced a king’s victory or accession.",
    king: "It is a royal announcement: a new King is enthroned, and the borders of his kingdom are extended.",
    priest: "Bringing people near to God, reconciled (2 Cor 5:18–20), and presenting them as an offering.",
    equip: "Makes every believer a confident witness to the King’s reign in ordinary life.",
    alone: "Isolated, it shrinks the gospel to a decision, leaving converts without formation or calling." },
  { id: "shepherd", n: "Shepherds", gk: "poimēn · “pastor, shepherd”", c: "var(--eden)",
    role: "Care for, protect, feed and lead the flock (John 21:15–17; Acts 20:28; 1 Pet 5:1–4).",
    ot: "David the shepherd-king and God’s promise of true shepherds after the false ones (Ezek 34; Jer 3:15).",
    king: "Shepherding was the ancient picture of good kingship: “you shall shepherd my people Israel” (2 Sam 5:2).",
    priest: "Priestly care: bearing people’s names before God, binding up the broken, guarding the flock.",
    equip: "Models servant leadership so believers can shepherd families, teams and cities well.",
    alone: "Isolated, it becomes maintenance and dependence: a flock that never grows up." },
  { id: "teacher", n: "Teachers", gk: "didaskalos · “teacher”", c: "var(--muted)",
    role: "Explain and apply the Scriptures so that people understand and obey (2 Tim 2:2; Jas 3:1).",
    ot: "Priests and Levites taught the law (Lev 10:11; Mal 2:7); Ezra and the Levites “gave the sense, so that the people understood” (Neh 8:7–8). Kings were to read the law daily (Deut 17:19).",
    king: "Wisdom for governing life and society, like Solomon’s wisdom for justice (1 Kgs 3:9–12).",
    priest: "Distinguishing holy from common and guarding sound doctrine (Ezek 44:23; Titus 1:9).",
    equip: "Grounds believers in truth so their worship and their rule are shaped by God’s word, not culture.",
    alone: "Isolated, it becomes information without transformation." }
];

/* 4 · What changed and what did not */
DATA.pr.changed = [
  ["Who carries the Spirit", "Selected individuals: prophets, kings, some craftsmen", "“All flesh”: sons and daughters, young and old (Acts 2:17–18)"],
  ["Where God dwells", "A building in Jerusalem", "His people, together and individually (1 Cor 3:16; 6:19)"],
  ["Who is a priest", "One family of one tribe", "Every believer (1 Pet 2:5, 9)"],
  ["Who reigns", "One dynasty", "All who are in Christ reign with him (Eph 2:6; Rev 5:10)"],
  ["How prophecy works", "Canonical, “Thus says the LORD”", "Weighed and tested by the church under Scripture (1 Cor 14:29; Eph 2:20)"],
  ["Stance of leaders", "Offices stood between God and the people", "Gifts stand among the people to equip them (Eph 4:12)"]
];
DATA.pr.unchanged = [
  "God still speaks and is to be obeyed (Heb 12:25)",
  "Christ is the one King, Priest and Prophet (Heb 1:1–3)",
  "Holiness, justice and mercy (Mic 6:8; 1 Pet 1:15–16)",
  "Leaders serve and are accountable (1 Pet 5:1–4)",
  "Every word is tested (1 John 4:1)",
  "The goal: God dwelling with his people and filling the earth (Rev 21:3)"
];

/* 5 · Equip matrix */
DATA.pr.matrixCols = [
  { k: "king", t: "Govern & build" }, { k: "king", t: "Justice in society" }, { k: "king", t: "Authority over darkness" },
  { k: "priest", t: "Worship & access" }, { k: "priest", t: "Intercession" }, { k: "priest", t: "Holiness & reconciliation" }
];
DATA.pr.matrix = {
  apostle: [[3, "Plants communities and structures that carry Christ’s order"], [2, "Sends people into new spheres and nations"], [3, "Pioneers where the enemy has held ground (Acts 19:8–20)"], [2, "Sets worship at the heart of new communities"], [2, "Prays for churches constantly (Col 1:9)"], [2, "Builds Jew and Gentile into one temple (Eph 2:19–22)"]],
  prophet: [[2, "Gives direction and timing for leaders"], [3, "Calls rulers and systems to righteousness"], [3, "Exposes deception and discerns spirits"], [3, "Draws people into God’s presence"], [3, "Hears what to pray and leads intercession"], [2, "Calls the church to holiness and return"]],
  evangelist: [[1, "Grows the citizenry of the kingdom"], [2, "Brings good news to the poor (Luke 4:18)"], [3, "Sets captives free (Acts 8:6–8)"], [2, "Brings new worshippers near"], [1, "Mobilises prayer for the lost"], [3, "Ministers reconciliation (2 Cor 5:18–20)"]],
  shepherd: [[2, "Models servant leadership in families and teams"], [2, "Protects the vulnerable (Ezek 34:4)"], [2, "Guards the flock from wolves (Acts 20:29)"], [2, "Leads people beside still waters"], [3, "Carries people’s names before God"], [3, "Restores the broken (Gal 6:1)"]],
  teacher: [[3, "Gives biblical wisdom for every sphere of life"], [2, "Grounds justice in God’s law and character"], [2, "Equips with truth, the belt of the armour (Eph 6:14)"], [2, "Shapes worship by sound doctrine"], [1, "Teaches people to pray (Luke 11:1)"], [3, "Distinguishes holy and common (Ezek 44:23)"]]
};

/* 5b · Spheres of life */
DATA.pr.spheres = [
  { n: "Family", priest: "Parents bless, pray for and teach their children (Deut 6:6–7; Job 1:5).", king: "Ordering a home in love and justice; raising heirs who rule well (Eph 5–6).", ref: "Deut 6:6–9" },
  { n: "Church", priest: "Gathered worship, communion, mutual care (Heb 10:24–25).", king: "Equipping, sending and governing in humility (Eph 4:11–16).", ref: "Eph 4:11–16" },
  { n: "Work & business", priest: "Work offered as worship, “as for the Lord” (Col 3:23).", king: "Stewarding resources, creating value and serving neighbours (Gen 2:15; Prov 31).", ref: "Col 3:23–24" },
  { n: "Government & justice", priest: "Prayer for all in authority (1 Tim 2:1–2).", king: "Ruling justly, defending the weak, “seek the welfare of the city” (Jer 29:7; Ps 82:3–4).", ref: "Jer 29:7" },
  { n: "Education", priest: "Passing on the knowledge of God to the next generation (Ps 78:4–7).", king: "Wisdom and skill for every field (Dan 1:17–20).", ref: "Ps 78:4–7" },
  { n: "Arts & media", priest: "Beauty that glorifies God; Bezalel “filled with the Spirit” as an artist (Exod 31:1–5).", king: "Shaping the stories and imagination of a culture (Phil 4:8).", ref: "Exod 31:1–5" },
  { n: "Health & science", priest: "Compassion for the sick, as Jesus healed (Matt 9:35–36).", king: "Exploring and stewarding creation: “It is the glory of kings to search things out” (Prov 25:2).", ref: "Prov 25:2" }
];

/* 6 · Now, not only later: tense map */
DATA.pr.tense = [
  { col: 0, ref: "Rev 1:5–6", v: "made us", t: "To him who loves us and has freed us from our sins by his blood and <mark>made us</mark> a kingdom, priests to his God and Father." },
  { col: 0, ref: "Col 1:13", v: "transferred", t: "He has delivered us from the domain of darkness and <mark>transferred</mark> us to the kingdom of his beloved Son." },
  { col: 0, ref: "Eph 2:6", v: "seated", t: "And raised us up with him and <mark>seated</mark> us with him in the heavenly places in Christ Jesus." },
  { col: 0, ref: "Matt 28:18", v: "has been given", t: "All authority in heaven and on earth <mark>has been given</mark> to me." },
  { col: 1, ref: "1 Pet 2:9", v: "are", t: "But you <mark>are</mark> a chosen race, a royal priesthood, a holy nation." },
  { col: 1, ref: "Rom 5:17", v: "reign in life", t: "Those who receive the abundance of grace … <mark>reign in life</mark> through the one man Jesus Christ." },
  { col: 1, ref: "Heb 12:28", v: "receiving", t: "Let us be grateful for <mark>receiving</mark> a kingdom that cannot be shaken." },
  { col: 1, ref: "Luke 17:20–21", v: "in your midst", t: "The kingdom of God is <mark>in the midst of you</mark>." },
  { col: 2, ref: "1 Cor 15:25", v: "must reign until", t: "For he <mark>must reign until</mark> he has put all his enemies under his feet." },
  { col: 2, ref: "Isa 9:7", v: "no end", t: "Of the <mark>increase</mark> of his government and of peace there will be no end." },
  { col: 2, ref: "Matt 13:31–33", v: "grows", t: "The kingdom is like a mustard seed … it <mark>grows</mark> … like leaven … till it was all leavened." },
  { col: 2, ref: "Ps 110:1–2", v: "rule in the midst", t: "Sit at my right hand, <mark>until</mark> I make your enemies your footstool … <mark>Rule in the midst</mark> of your enemies!" },
  { col: 3, ref: "1 Cor 15:24–26", v: "the end", t: "Then comes the end, when he delivers the kingdom to God the Father … The last enemy to be destroyed is death." },
  { col: 3, ref: "Acts 1:11", v: "will come", t: "This Jesus … <mark>will come</mark> in the same way as you saw him go into heaven." },
  { col: 3, ref: "Rev 22:5", v: "will reign forever", t: "They <mark>will reign</mark> forever and ever." }
];
DATA.pr.tenseCols = ["Already done", "True now", "Growing until", "Completed at his return"];

/* Daniel 2 stages */
DATA.pr.daniel = [
  { at: 0, t: "The statue of empires", ref: "Dan 2:31–33, 36–40", d: "Gold, silver, bronze and iron: Babylon, Medo-Persia, Greece and Rome, a succession of human kingdoms." },
  { at: 22, t: "A stone cut out by no human hand", ref: "Dan 2:34, 44", d: "“In the days of those kings the God of heaven will set up a kingdom that shall never be destroyed.” The stone arrives during the fourth kingdom: Rome, the empire into which Jesus was born." },
  { at: 42, t: "The statue is broken", ref: "Dan 2:35", d: "Iron, clay, bronze, silver and gold become “like the chaff of the summer threshing floors; and the wind carried them away.”" },
  { at: 60, t: "The stone becomes a mountain", ref: "Dan 2:35", d: "“The stone that struck the image became a great mountain and filled the whole earth.” Not a sudden replacement but growth, like the mustard seed and the leaven." },
  { at: 90, t: "The whole earth filled", ref: "Hab 2:14; Isa 11:9", d: "The mountain of the LORD’s house fills the earth: the Eden mandate fulfilled by the kingdom of Christ (Isa 2:2–4)." }
];

/* 7 · How the purpose shrank */
DATA.pr.funnel = [
  { shrunk: "The kingdom of God over all creation", restored: "“Your kingdom come, on earth as it is in heaven” (Matt 6:10)", cause: "Where it began" },
  { shrunk: "God’s people serving in every sphere", restored: "Royal priests in every sphere of life (1 Pet 2:9; Col 3:17)", cause: "A split between “sacred” and “secular” work" },
  { shrunk: "Church services and programmes", restored: "Leaders equipping the saints for works of service (Eph 4:12)", cause: "A divide between professional clergy and passive laity" },
  { shrunk: "Evangelism and discipleship classes only", restored: "Disciples who disciple nations in all Christ commanded (Matt 28:19–20)", cause: "Individualism and a decision-centred gospel" },
  { shrunk: "A private ticket to heaven", restored: "Eternal life as knowing the Father now (John 17:3)", cause: "Expecting only decline, and heaven as escape from earth" }
];
DATA.pr.transaction = [
  ["Problem", "I am guilty and headed for punishment."],
  ["Solution", "Pray a prayer; the debt is paid."],
  ["Result", "A ticket to heaven after death."],
  ["Meanwhile", "Attend church, avoid sin, invite others, wait."],
  ["Earth", "A sinking ship; get people off it."]
];
DATA.pr.relationship = [
  ["Origin", "A Father who made sons and daughters in his image to share his life and rule (Gen 1:26; Luke 3:38)."],
  ["Problem", "Broken relationship: we hid from his presence and lost our place (Gen 3:8–10)."],
  ["Solution", "The Son reconciles us by his blood and the Spirit makes us sons who cry “Abba” (Rom 5:10; 8:15)."],
  ["Result", "Heirs with Christ, joined to him now: “this is eternal life, that they know you” (Rom 8:17; John 17:3)."],
  ["Mission", "The family business: sons bring their Father’s order, beauty and justice to earth as royal priests (Matt 6:10; Rom 8:19–21)."]
];

/* 8 · Timeline AD 30–70 and beyond (x from year) */
DATA.pr.timeline = [
  { y: 30, t: "“This generation will not pass away”", ref: "Matt 24:1–2, 34", d: "On the Mount of Olives, Jesus predicts the Temple’s destruction: “not one stone will be left here upon another … this generation will not pass away until all these things take place.”" },
  { y: 30.6, t: "Enthroned with all authority", ref: "Dan 7:13–14; Matt 28:18; Acts 2:33–36", d: "The Son of Man comes on the clouds to the Ancient of Days and receives dominion: fulfilled at the ascension. Peter proclaims David’s throne now occupied." },
  { y: 31.4, t: "Pentecost", ref: "Acts 2", d: "The Spirit poured out. The royal priesthood begins its work, in every language." },
  { y: 60, t: "The gospel in all the world", ref: "Col 1:6, 23; Rom 10:18", d: "Paul says the gospel “has been proclaimed in all creation under heaven”, the sign Jesus gave before the end of that age (Matt 24:14)." },
  { y: 64, t: "Nero’s persecution", ref: "Rev 1:9; 13", d: "Great tribulation for the church in Rome. Many read Revelation’s beast against this background, with Revelation written before AD 70 while the Temple still stood (Rev 11:1–2)." },
  { y: 65, t: "“Ready to vanish away”", ref: "Heb 8:13", d: "Hebrews says the old covenant system “is becoming obsolete and growing old … ready to vanish away”." },
  { y: 66, t: "The Jewish war begins", ref: "Luke 21:20–22", d: "“When you see Jerusalem surrounded by armies, then know that its desolation has come near … these are days of vengeance.” Christians flee as Jesus warned." },
  { y: 70, t: "The Temple destroyed", ref: "Matt 24:2; Luke 21:24", d: "Rome burns the Temple. The old covenant age ends exactly as Jesus said, within a generation. The way is clear for the new covenant age of the kingdom." },
  { y: 76, t: "The kingdom age: growing", ref: "Matt 13:31–33; Isa 9:7", d: "From here the mountain grows. History is not a slide into darkness but the slow, contested advance of Christ’s reign through his people." },
  { y: 99, t: "Christ returns in glory", ref: "Acts 1:11; 1 Cor 15:22–26; 1 Thess 4:16–17", d: "Still future: the bodily return of Jesus, the resurrection of the dead, the final judgment and death destroyed. He returns to a kingdom that has filled the earth, and hands it to the Father.", future: true }
];

/* 9 · Objections */
DATA.pr.objections = [
  { k: "serious", q: "“We only reign after Christ returns. The kingdom is future.”", refs: "2 Tim 2:12; Rev 20:4–6",
    not: "No one is saying the kingdom is already complete, or that the future reign is unimportant.",
    a: "Scripture uses the past and present tense for our royal priesthood: Christ “made us a kingdom, priests” (Rev 1:6), “you are a royal priesthood” (1 Pet 2:9), we are seated with him now (Eph 2:6) and “reign in life” (Rom 5:17). Second Timothy 2:12 promises reigning to those who endure; it does not say reigning begins only later. The kingdom is inaugurated now and consummated later: the same reign, growing." },
  { k: "serious", q: "“Jesus said, ‘My kingdom is not of this world’.”", refs: "John 18:36",
    not: "This does not claim Jesus’ kingdom is earthly politics or advances by armies.",
    a: "The Greek is ek tou kosmou: “not from this world.” Jesus speaks of the kingdom’s source and character, not its location: “my kingdom is not from here,” so his servants do not fight. A kingdom from heaven still rules on earth: “All authority in heaven and on earth has been given to me” (Matt 28:18); “the kingdom of the world has become the kingdom of our Lord” (Rev 11:15)." },
  { k: "serious", q: "“The Bible says the world will get worse and worse until the end.”", refs: "2 Tim 3:1–13; Matt 24",
    not: "No one claims every year will be better than the last, or that evil disappears before the return.",
    a: "Second Timothy 3 describes troubles Timothy faced in his own day, then adds: “they will not get very far, for their folly will be plain to all” (3:9). Matthew 24’s tribulation was tied to “this generation” and the fall of the Temple in AD 70 (24:2, 34). Jesus’ kingdom parables describe growth: a seed becoming a tree, leaven filling the dough (Matt 13:31–33). The trajectory is increase without end (Isa 9:7), with wheat and weeds growing together until harvest (Matt 13:30)." },
  { k: "straw", q: "“This is a social gospel that replaces the cross with activism.”", refs: "Rev 1:5–6; 5:9–10; John 3:3",
    not: "This is a misrepresentation. The view does not replace forgiveness, new birth or the cross.",
    a: "We are made kings and priests “by his blood” (Rev 1:5–6; 5:9–10). No one sees the kingdom without being born again (John 3:3). Transformation of society flows from transformed people, by the Spirit, not from programmes or politics. The cross is the foundation; the kingdom is what is built on it." },
  { k: "straw", q: "“So Christians should seize political power and force their beliefs on others.”", refs: "Zech 4:6; 2 Cor 10:4; Mark 10:42–45",
    not: "This is a misrepresentation. Reigning with Christ is not coercion.",
    a: "The kingdom advances “not by might, nor by power, but by my Spirit” (Zech 4:6). Our weapons are not carnal (2 Cor 10:4). Jesus’ model of rule is service: “whoever would be first among you must be slave of all” (Mark 10:44). Like leaven, the kingdom works from inside out, through love, truth, excellence and sacrifice. Christians serve in public life as one sphere among many, not to dominate." },
  { k: "serious", q: "“The Great Commission is evangelism and discipleship. Why add more?”", refs: "Matt 28:18–20; Eph 4:12",
    not: "No one is downplaying evangelism or discipleship. They are essential.",
    a: "The commission is to “make disciples of all nations … teaching them to observe all that I have commanded.” That is nations, not only individuals, and all of Christ’s commands, which touch family, work, money, justice and culture. Evangelism is the door into the house, not the whole house. The five ministries exist to equip the saints “for the work of ministry” in all of life (Eph 4:12), not only to produce more evangelists and small-group leaders." },
  { k: "serious", q: "“Apostles and prophets ended with the first century.”", refs: "Eph 2:20; 4:11–13; 1 Cor 13:8–12",
    not: "No one is claiming new Scripture, or that modern leaders equal the Twelve.",
    a: "The foundational apostles and prophets who gave us Scripture were unique and are not repeated (Eph 2:20; Jude 3). But Ephesians 4 says the five gifts are given “until we all attain to the unity of the faith … to mature manhood, to the measure of the stature of the fullness of Christ” (4:13). The church has not yet reached that, so the functions of pioneering, hearing God and building up continue, always tested by Scripture." },
  { k: "straw", q: "“Reading prophecy as fulfilled in AD 70 denies the second coming.”", refs: "Acts 1:11; 1 Cor 15:22–26; 1 Thess 4:16",
    not: "This is a misrepresentation. This reading holds firmly to a future return of Christ.",
    a: "Many texts that speak of judgment “coming” on the clouds use Old Testament judgment imagery (Isa 19:1) and were fulfilled when Jerusalem fell, as Jesus said, within that generation. But the bodily return of Jesus (Acts 1:11), the resurrection of the dead and the destruction of death (1 Cor 15:22–26) and the final judgment are still future. Christ returns at the end of a growing kingdom, not to rescue a failed one." },
  { k: "serious", q: "“If the kingdom is advancing, why is there still so much evil?”", refs: "Matt 13:24–33; 1 Cor 15:25",
    not: "No one is saying the world is already fixed or that progress is steady.",
    a: "Jesus said the kingdom grows like a seed: slowly, hidden, then large. Weeds grow alongside wheat until the harvest. Christ “must reign until” all enemies are under his feet, a process, not an instant. Look over centuries rather than news cycles: the gospel has spread from a hundred and twenty people to every nation, and where it has gone it has brought hospitals, schools, literacy and campaigns against slavery. Progress is real, contested and uneven." },
  { k: "serious", q: "“Talk of reigning breeds pride and triumphalism.”", refs: "John 13:3–5; Rom 8:17; Rev 1:9",
    not: "No one is calling for arrogance or a prosperity message.",
    a: "Jesus, knowing “that the Father had given all things into his hands”, picked up a towel and washed feet (John 13:3–5). Royal priests reign the way he reigns: by serving and suffering. John calls himself our “partner in the tribulation and the kingdom and the patient endurance that are in Jesus” (Rev 1:9). We are heirs “provided we suffer with him” (Rom 8:17)." },
  { k: "straw", q: "“The fivefold is about titles and hierarchy.”", refs: "Matt 23:8–12; Eph 4:7, 11–12",
    not: "This is a misrepresentation of the biblical gifts, though it is a real abuse.",
    a: "Ephesians 4 describes gifts Christ gives, defined by what they do: equip the saints. Jesus forbade status-seeking titles (Matt 23:8–12). The test of an apostle, prophet, evangelist, shepherd or teacher is not a title on a door but believers who mature and function as royal priests." },
  { k: "serious", q: "“Relationship language makes the gospel sentimental. The gospel is legal justification.”", refs: "Rom 5:1–11; 8:15–17; Gal 4:4–7",
    not: "No one is denying justification by faith or the reality of sin and judgment.",
    a: "Justification is real and precious: “we have peace with God” (Rom 5:1). But Paul moves straight on to reconciliation (5:10–11) and adoption: “you have received the Spirit of adoption … heirs of God and fellow heirs with Christ” (Rom 8:15–17; Gal 4:4–7). The courtroom opens into the family. Sons are heirs, and heirs are trained to rule." }
];

DATA.pr.study = [
  { t: "The prophetic office", q: ["Read Jeremiah 23:18–22. What made a true prophet different from a false one?", "How did prophets relate to kings and priests? Choose one pair from the map and study it."] },
  { t: "The fivefold", q: ["Ephesians 4:11–16: what is the purpose of the five gifts, and when do they stop being needed?", "Which of the five have you received from most? Which has been missing in your church experience?"] },
  { t: "Now, not only later", q: ["List the verbs in Revelation 1:5–6, Ephesians 2:6 and 1 Peter 2:9. What tense are they?", "Read Daniel 2:34–35, 44. When is the stone set up, and how does it fill the earth?"] },
  { t: "A bigger purpose", q: ["Which layer of the shrinking funnel describes your church or your own thinking?", "What would it mean for your work this week to be priestly service and kingly stewardship?"] }
];
DATA.pr.memory = [
  ["Ephesians 4:11–12", "“He gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.”"],
  ["Numbers 11:29", "“Would that all the LORD’s people were prophets, that the LORD would put his Spirit on them!”"],
  ["Daniel 2:44", "“In the days of those kings the God of heaven will set up a kingdom that shall never be destroyed.”"],
  ["1 Corinthians 15:25", "“For he must reign until he has put all his enemies under his feet.”"],
  ["Isaiah 9:7", "“Of the increase of his government and of peace there will be no end.”"],
  ["Matthew 6:10", "“Your kingdom come, your will be done, on earth as it is in heaven.”"]
];

DATA.quiz.push(
  { q: "According to Jeremiah 23:18–22, what marked a true prophet?", a: ["Performing miracles", "Standing in the council of the LORD to hear his word", "Being born into a priestly family", "Being appointed by the king"], c: 1, x: "True prophets had “stood in the council of the LORD”; false prophets spoke from their own minds." },
  { q: "What does Ephesians 4:12 say the five ministries are given for?", a: ["To rule the church", "To equip the saints for the work of ministry", "To replace the priesthood", "To write new Scripture"], c: 1, x: "The gifts equip every believer to minister and build up the body." },
  { q: "In Daniel 2, what happens to the stone cut without hands?", a: ["It is ground to dust", "It becomes a great mountain and fills the whole earth", "It is placed in the Temple", "It returns to heaven"], c: 1, x: "Daniel 2:35, 44: God’s kingdom, set up in the days of those kings, grows to fill the earth." }
);

DATA.web.nodes.push(
  { id: "prophets", n: "Prophets", g: 3, d: "Messengers from God’s council who held kings, priests and people to the covenant." },
  { id: "fivefold", n: "Fivefold gifts", g: 3, d: "Apostles, prophets, evangelists, shepherds and teachers, given to equip the saints to function as kings and priests." }
);
DATA.web.edges.push(
  ["prophets", "kingpriest", "Anointed, counselled and confronted kings and priests"],
  ["prophets", "temple", "Malachi and Haggai: the house and its priests"],
  ["prophets", "jesus", "The prophet like Moses (Acts 3:22)"],
  ["fivefold", "church", "Equip the saints for ministry (Eph 4:12)"],
  ["fivefold", "pentecost", "The Spirit poured on all flesh (Acts 2:17)"],
  ["fivefold", "prophets", "Prophecy continues among a Spirit-filled people"],
  ["fivefold", "kingpriest", "Equip believers to rule and serve now"]
);

DATA.sources.push(
  ["Iain H. Murray", "The Puritan Hope (1971)", "How confident expectation of the gospel’s spread shaped missions and revival."],
  ["Kenneth L. Gentry Jr.", "He Shall Have Dominion (1992)", "The case for a growing, victorious kingdom in history."],
  ["N. T. Wright", "Surprised by Hope (2008)", "Resurrection, new creation and why present work matters."]
);

;DATA.quiz.forEach(q => { q.part = q.part || "prophets"; });

/* Part VI: The keys of the kingdom */
DATA.ky = {};

/* 1 · The keyring */
DATA.ky.ring = [
  { id: "david", n: "Key of the house of David", ref: "Isa 22:22; Rev 3:7", c: "var(--accent)",
    d: "Given to Eliakim, the royal steward: “I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.” Jesus claims it: “The words of the holy one, the true one, who has the key of David.” Authority over access to the King’s house." },
  { id: "kingdom", n: "Keys of the kingdom of heaven", ref: "Matt 16:19", c: "var(--babel)",
    d: "“I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.” Plural keys, delegated by the King to his people as stewards." },
  { id: "death", n: "Keys of Death and Hades", ref: "Rev 1:18", c: "var(--flame)",
    d: "“I died, and behold I am alive forevermore, and I have the keys of Death and Hades.” The risen Christ holds the gates that once held humanity. The gates of Hades cannot prevail against his church (Matt 16:18)." },
  { id: "knowledge", n: "Key of knowledge", ref: "Luke 11:52", c: "var(--eden)",
    d: "“Woe to you lawyers! For you have taken away the key of knowledge. You did not enter yourselves, and you hindered those who were entering.” Teaching that should open God’s word can be used to lock people out." },
  { id: "abyss", n: "Key of the abyss", ref: "Rev 9:1; 20:1–3", c: "var(--muted)",
    d: "An angel “holding in his hand the key to the bottomless pit and a great chain … seized the dragon … and bound him.” Every key, even to the deepest prison, is in heaven’s hands." },
  { id: "door", n: "The open door", ref: "Rev 3:8; Acts 14:27", c: "var(--babel)",
    d: "“I have set before you an open door, which no one is able to shut.” God “had opened a door of faith to the Gentiles.” Keys exist for doors, and doors exist for people to come in." },
  { id: "forgive", n: "Forgiving and retaining", ref: "John 20:21–23", c: "var(--eden)",
    d: "“As the Father has sent me, even so I am sending you … Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them.” Declaring God’s mercy is one vital use of the keys, but only one." }
];

/* 2 · The royal palace and the steward */
DATA.ky.palace = [
  { id: "gate", n: "The palace gate", ref: "Isa 22:22", d: "The steward decided who came in. The key on his shoulder meant the authority to open and to shut: no one could reverse his decision without the king.", app: "Opening and closing: opening the way into God’s presence and kingdom for others, and closing doors to what does not belong (Eph 4:27)." },
  { id: "court", n: "Royal service", ref: "Isa 22:21; Gen 41:40–44", d: "He appointed and oversaw the king’s servants. Joseph, set “over my house”, ran Egypt so that “without your consent no one shall lift up hand or foot”.", app: "Recognising and releasing people into their callings in the King’s service (Acts 6:3–6; 13:2–3)." },
  { id: "stores", n: "Storehouses and treasury", ref: "Gen 41:56; 1 Kgs 4:7", d: "The steward controlled provisions. Joseph opened the storehouses and fed the nations in famine.", app: "Stewarding resources and generosity: “stewards of God’s varied grace” (1 Pet 4:10; 2 Cor 9:8–11)." },
  { id: "throne", n: "Access to the king", ref: "2 Kgs 18:18; Esth 4:11", d: "No one approached the throne without permission. The steward stood nearest the king and carried messages to and from him; Eliakim negotiated on Hezekiah’s behalf.", app: "Through Christ we have access (Eph 2:18) and bring others near in prayer and proclamation." },
  { id: "decrees", n: "The king’s decisions", ref: "Gen 41:55; Isa 22:21", d: "“Go to Joseph. What he says to you, do.” The steward administered the king’s will and law, but never invented his own.", app: "Binding and loosing: declaring on earth what heaven has already decided (Matt 16:19; Acts 15:28)." },
  { id: "family", n: "A father to the people", ref: "Isa 22:21", d: "God says of Eliakim: “he shall be a father to the inhabitants of Jerusalem and to the house of Judah.” The office was given with a father’s heart.", app: "The heart behind the keys: not control but care. Keys open the house so the family can come home (Luke 15:20–24)." }
];

/* 3 · Shebna and Eliakim */
DATA.ky.stewards = {
  shebna: { n: "Shebna", ref: "Isa 22:15–19", rows: [
    ["Focus", "Himself: “What have you to do here … that you have cut out here a tomb for yourself?” (22:16)"],
    ["Display", "“Your glorious chariots” (22:18), status and show"],
    ["Use of the key", "Building a monument to his own name, like Babel"],
    ["Outcome", "“I will thrust you from your office … and the LORD will hurl you away violently” (22:17–19)"]
  ] },
  eliakim: { n: "Eliakim", ref: "Isa 22:20–24", rows: [
    ["Identity", "“My servant Eliakim” (22:20): a servant before he is a steward"],
    ["Clothing", "“I will clothe him with your robe, and will bind your sash on him” (22:21)"],
    ["Heart", "“He shall be a father to the inhabitants of Jerusalem” (22:21)"],
    ["Outcome", "“A peg in a secure place … a throne of honour to his father’s house” (22:23). Yet even this peg would one day give way (22:25), pointing to a greater Steward."]
  ] }
};

/* 4 · Connections flowchart (viewBox 900 × 700) */
DATA.ky.flow = [
  { id: "joseph", x: 230, y: 40, t: "Joseph over Pharaoh’s house", ref: "Gen 41:40–44", c: "eden",
    d: "The pattern of the royal steward: “You shall be over my house, and all my people shall order themselves as you command.” He opens the storehouses and saves the nations." },
  { id: "eliakim", x: 670, y: 40, t: "Eliakim receives the key of David", ref: "Isa 22:20–23", c: "accent",
    d: "The steward over the house of David receives the key, the robe and the sash, and becomes a father to Jerusalem." },
  { id: "shoulder", x: 450, y: 140, t: "“The government shall be upon his shoulder”", ref: "Isa 9:6; 22:22", c: "accent",
    d: "The same image twice in Isaiah: the key on the steward’s shoulder (22:22) and the government on the shoulder of the promised Son (9:6). The steward foreshadows the King himself." },
  { id: "christ", x: 450, y: 240, t: "Christ holds the key of David", ref: "Rev 3:7; Rev 1:18", c: "accent",
    d: "The greater Eliakim: he opens and no one shuts. He also holds the keys of Death and Hades, conquered by his death and resurrection." },
  { id: "peter", x: 230, y: 345, t: "Keys given to Peter", ref: "Matt 16:13–19", c: "babel",
    d: "At Caesarea Philippi, beside the “gates of Hades”, Peter confesses Jesus as the Christ, and Jesus promises him the keys of the kingdom." },
  { id: "church", x: 670, y: 345, t: "Binding and loosing given to the church", ref: "Matt 18:15–20", c: "babel",
    d: "The same words to the gathered disciples (plural “you”), in the setting of restoring a brother, with the promise of Christ’s presence “where two or three are gathered”." },
  { id: "acts", x: 450, y: 450, t: "Doors opened in Acts", ref: "Acts 2; 8; 10; 15", c: "eden",
    d: "Peter opens the door to Jews at Pentecost, confirms it for Samaritans and opens it to Gentiles at Cornelius’ house. The church in council “binds and looses” for the Gentiles: “it has seemed good to the Holy Spirit and to us” (Acts 15:28)." },
  { id: "doors", x: 450, y: 550, t: "Open doors for the gospel", ref: "Acts 14:27; Col 4:3; Rev 3:8", c: "eden",
    d: "God “opened a door of faith to the Gentiles.” Paul asks for prayer that God would open a door for the word. To a weak church Christ says, “I have set before you an open door.”" },
  { id: "abyss", x: 450, y: 652, t: "The enemy bound; the house filled", ref: "Rev 20:1–3; Rev 21:25", c: "flame",
    d: "The dragon is bound with the key of the abyss. In the New Jerusalem the gates are never shut: every door the keys were for is finally open." }
];
DATA.ky.flowEdges = [["joseph", "shoulder"], ["eliakim", "shoulder"], ["shoulder", "christ"], ["christ", "peter"], ["christ", "church"], ["peter", "acts"], ["church", "acts"], ["acts", "doors"], ["doors", "abyss"]];

/* 5 · Caesarea Philippi */
DATA.ky.caesarea = [
  { id: "cave", n: "The cave: “gates of Hades”", ref: "Matt 16:18", d: "At the foot of the cliff, a cave out of which the spring once gushed. The water was thought to be bottomless, and pagans saw the cave as an entrance to the underworld. Jesus speaks of the “gates of Hades” within sight of it." },
  { id: "niches", n: "Niches for Pan", ref: "Matt 16:13", d: "The city was originally Paneas, after the goat-god Pan, whose shrine and niches were cut into the rock face. Pan was believed to cross between the living and the dead." },
  { id: "temple", n: "Temple to Augustus", ref: "Matt 16:16", d: "Herod the Great built a temple to Caesar here, and his son Philip renamed the city Caesarea Philippi. In a place honouring Caesar as divine son, Peter confesses: “You are the Christ, the Son of the living God.”" },
  { id: "rock", n: "The rock", ref: "Matt 16:18", d: "“You are Peter (Petros), and on this rock (petra) I will build my church.” Christians have read “the rock” as Peter, as his confession, or as Christ himself; all agree that the church stands on who Jesus is." },
  { id: "spring", n: "The springs of the Jordan", ref: "Ps 42:6", d: "Banias is one of the sources of the Jordan, the river of Israel’s entry into the land and of Jesus’ baptism. A place of living water and of pagan gates side by side." }
];

/* 6 · Binding and loosing */
DATA.ky.senses = [
  { tab: "Forbid and permit", head: "A teacher’s ruling", ref: "Matt 16:19; 18:18; Acts 15", c: "var(--babel)",
    body: ["In Jesus’ day the Hebrew verbs ʾāsar (bind) and hittîr (loose) were technical terms for rabbis declaring what the law forbade and permitted, for example what counted as work on the Sabbath.", "Jesus gives his disciples this authority under his own teaching: to declare what the King’s law requires and allows.", "The Jerusalem council is the clearest example: Gentile believers are “loosed” from circumcision and asked to abstain from a few things. “It has seemed good to the Holy Spirit and to us” (Acts 15:28)."] },
  { tab: "Bind the strong man", head: "Authority over darkness", ref: "Matt 12:28–29; Luke 13:16", c: "var(--flame)",
    body: ["“How can someone enter a strong man’s house and plunder his goods, unless he first binds the strong man?” Jesus binds Satan by casting out demons by the Spirit of God.", "He looses a woman “whom Satan bound for eighteen years”. Jewish writings of the time also spoke of binding evil spirits (Tobit 8:3).", "He sends his disciples with authority “over all the power of the enemy” (Luke 10:17–19). Believers resist the devil, who flees (Jas 4:7), always in Christ’s name and never in their own strength (Jude 9)."] },
  { tab: "Forgive and retain", head: "Declaring mercy", ref: "John 20:21–23; Jas 5:16", c: "var(--eden)",
    body: ["Sent as the Father sent the Son and breathed on with the Spirit, the disciples are told: “If you forgive the sins of any, they are forgiven them.”", "This is not the church manufacturing forgiveness. It is the gospel declared with authority: to those who repent and believe, sins are forgiven; to those who refuse, they remain.", "It is precious and central, but it is one tooth of the key, not the whole key."] }
];

/* 7 · Doors opened */
DATA.ky.doors = [
  { n: "Jerusalem", who: "Jews from every nation", ref: "Acts 2:14–41", d: "Peter uses the keys first at Pentecost: about three thousand believe." },
  { n: "Samaria", who: "Samaritans", ref: "Acts 8:14–17", d: "Peter and John lay hands on believing Samaritans and they receive the Spirit: the old division is unlocked." },
  { n: "Caesarea", who: "Gentiles", ref: "Acts 10:34–48; 11:17", d: "In a Roman officer’s house the Spirit falls on Gentiles while Peter is still preaching. “Who was I that I could stand in God’s way?”" },
  { n: "Jerusalem council", who: "Decision for all nations", ref: "Acts 15:6–29", d: "Binding and loosing in council: Gentiles are welcomed without circumcision." },
  { n: "Galatia", who: "“A door of faith to the Gentiles”", ref: "Acts 14:27", d: "Paul and Barnabas report what God had done and how he “had opened a door of faith to the Gentiles”." },
  { n: "Europe", who: "Philippi", ref: "Acts 16:9–15", d: "A vision of a man from Macedonia, and a door opens across the sea. The Lord “opened Lydia’s heart”." },
  { n: "Ephesus", who: "“A wide door … and many adversaries”", ref: "1 Cor 16:9; Acts 19:10–20", d: "All Asia hears the word; scrolls of magic are burned. Open doors come with opposition." },
  { n: "Philadelphia", who: "A weak church", ref: "Rev 3:7–8", d: "“I know that you have but little power … I have set before you an open door, which no one is able to shut.”" }
];

/* 8 · The key losing its teeth */
DATA.ky.teeth = [
  { id: "access", n: "Access", d: "Opening and shutting the way into the kingdom (Matt 23:13; Acts 14:27)." },
  { id: "rule", n: "Decisions", d: "Forbidding and permitting under Christ’s word (Matt 18:18; Acts 15)." },
  { id: "war", n: "Authority over darkness", d: "Binding the strong man and loosing the bound (Matt 12:29; Luke 13:16)." },
  { id: "forgive", n: "Forgiveness", d: "Declaring sins forgiven to the repentant (John 20:23)." },
  { id: "knowledge", n: "Knowledge", d: "Opening the Scriptures so people can enter (Luke 11:52; 24:45)." },
  { id: "stores", n: "Stewardship", d: "Opening the King’s storehouses of grace and provision (1 Pet 4:10)." }
];
DATA.ky.eras = [
  { n: "Jesus and the apostles", have: ["access", "rule", "war", "forgive", "knowledge", "stores"], d: "In the Gospels and Acts the keys open doors to nations, settle questions, set captives free, declare forgiveness, open the Scriptures and release provision." },
  { n: "Early church", have: ["access", "rule", "war", "forgive", "knowledge"], d: "The focus moves toward discipline: who may share in communion and how the penitent are restored. Still broad, but narrowing." },
  { n: "Medieval church", have: ["forgive", "rule"], d: "“The power of the keys” comes to mean mainly priestly absolution in confession, excommunication and the authority of the papacy." },
  { n: "Reformation", have: ["forgive", "knowledge", "rule"], d: "The keys are redefined as the preaching of the gospel and church discipline (for example the Heidelberg Catechism, Q. 83–85). Truer to Scripture, but still mostly about forgiveness and membership." },
  { n: "Much of today", have: ["forgive"], d: "Often reduced to private assurance of forgiveness, or ignored altogether; elsewhere turned into a formula for commanding outcomes. The access, the stewardship and the father’s heart are largely forgotten." },
  { n: "Restored", have: ["access", "rule", "war", "forgive", "knowledge", "stores"], d: "Stewards in the King’s house again: opening doors, discerning together, setting captives free, declaring mercy, opening the word and releasing the King’s provision." }
];

/* 9 · How to operate */
DATA.ky.operate = [
  { t: "Live in the King’s house", ref: "John 15:4–5; Isa 22:20", d: "Keys belong to servants who abide. Eliakim was “my servant” before he was steward. Authority flows from relationship." },
  { t: "Hear what heaven has decided", ref: "Matt 16:19; John 5:19", d: "“Whatever you bind on earth shall have been bound in heaven.” The Greek is a future perfect: heaven decides first; we discern it through Scripture, prayer and the Spirit." },
  { t: "Agree together", ref: "Matt 18:18–20; Acts 15:28", d: "Binding and loosing is given to the gathered church. Agreement, accountability and Christ’s presence go together." },
  { t: "Open, shut, bind, loose, forgive", ref: "Col 4:3; Luke 10:19; John 20:23", d: "Pray doors open for the gospel; close doors to the enemy; set people free from guilt and bondage; declare God’s mercy." },
  { t: "Steward and give account", ref: "Luke 12:42–48; 1 Cor 4:1–2", d: "“It is required of stewards that they be found faithful.” Keys are entrusted, and the King will ask how we used them." }
];
DATA.ky.practice = [
  ["Open doors for the gospel", "Pray specifically for open doors in your workplace, family and city, and walk through them (Col 4:3–6; 1 Cor 16:9)."],
  ["Loose people from guilt", "Confess sins to one another and declare forgiveness in Christ to the repentant (Jas 5:16; 1 John 1:9)."],
  ["Bind the strong man", "Pray against specific spiritual strongholds before and while you serve, in Jesus’ name and his authority (Matt 12:29; Eph 6:10–18)."],
  ["Shut doors to the enemy", "“Give no opportunity to the devil” through anger, bitterness or compromise (Eph 4:26–27)."],
  ["Open the Scriptures", "Teach in a way that lets others enter, not one that locks them out (Luke 24:32; 11:52)."],
  ["Open the storehouses", "Use money, skill and influence to open provision for others, like Joseph in the famine (2 Cor 9:8–11)."]
];

/* 10 · Objections */
DATA.ky.objections = [
  { k: "serious", q: "“The keys were given to Peter alone, and through him to his successors.”", refs: "Matt 16:19; 18:18",
    not: "No one denies Peter’s unique role. He really did use the keys first.",
    a: "Peter opened the door to Jews (Acts 2) and to Gentiles (Acts 10), a once-for-all foundation. But the same authority to bind and loose is given to the gathered disciples in Matthew 18:18, where “you” is plural. And the key of David belongs to Christ alone (Rev 3:7): the keys are his, delegated to his whole household as stewards (1 Pet 4:10)." },
  { k: "serious", q: "“Binding and loosing only means church discipline or forgiveness of sins.”", refs: "Matt 18:15–18; John 20:23",
    not: "No one is downplaying discipline or forgiveness. Both are real uses of the keys.",
    a: "Matthew 18 does apply it to restoring a sinning brother, and John 20 to forgiveness. But in Jesus’ culture “bind” and “loose” meant forbid and permit, rulings like the one in Acts 15. Jesus also uses “bind” for overpowering Satan (Matt 12:29) and “loose” for freeing a woman Satan had bound (Luke 13:16). And the opposite of using the keys is “shutting the kingdom in people’s faces” (Matt 23:13): the keys are about access." },
  { k: "straw", q: "“So Christians can command God and bind or loose whatever they want.”", refs: "Matt 16:19; 1 John 5:14",
    not: "This is a misrepresentation. The keys are not a formula for getting our way.",
    a: "The Greek of Matthew 16:19 is a future perfect: whatever you bind on earth “shall have been bound” in heaven. Heaven leads; earth follows. A steward opens the doors the king wants opened. We pray “your will be done” (Matt 6:10) and ask “according to his will” (1 John 5:14)." },
  { k: "serious", q: "“Only God can bind Satan. Believers should not try.”", refs: "Rev 20:1–3; Matt 12:29; Jude 9",
    not: "No one claims believers have power of their own over the devil, or should mock him.",
    a: "Jesus bound the strong man, and then sent his disciples with authority “over all the power of the enemy” (Luke 10:17–19). Believers are commanded to resist the devil (Jas 4:7) and stand in God’s armour (Eph 6:10–18). Jude 9 warns against reviling, not against resisting: even Michael said, “The Lord rebuke you.” All authority is Christ’s, exercised in his name." },
  { k: "straw", q: "“Teaching about keys and authority breeds spiritual elitism and control.”", refs: "Isa 22:15–21; Matt 23:13",
    not: "This is a misrepresentation of the biblical picture, though control is a real danger.",
    a: "Isaiah 22 is a warning against exactly that: Shebna used his office for his own monument and lost the key. Eliakim received it as “my servant” and “a father to the inhabitants of Jerusalem”. Jesus condemned teachers who used their position to shut people out. Keys are for opening the house to others." },
  { k: "serious", q: "“The key of David belongs to Christ alone. It is not for us.”", refs: "Rev 3:7–8; Matt 16:19",
    not: "No one claims the church owns the key or acts independently of Christ.",
    a: "Agreed: Christ holds the key of David. But in the same breath he tells a weak church, “I have set before you an open door” (Rev 3:8), and he gives his disciples “the keys of the kingdom” (Matt 16:19). He is the master of the house; we are stewards who use his keys at his word." },
  { k: "serious", q: "“Isaiah 22 is about a historical official. Applying it to Christ is allegory.”", refs: "Rev 3:7; Isa 22:22",
    not: "No one denies Eliakim was a real man in Hezekiah’s court.",
    a: "Revelation itself quotes Isaiah 22:22 about Jesus. The New Testament authorises this reading: Eliakim was a real steward and a pattern of the greater one, just as David was a real king and a pattern of the Son of David. Isaiah 22:25 even says the peg would give way, leaving room for one who never fails." },
  { k: "straw", q: "“This is a modern invention of the charismatic movement.”", refs: "Matt 16:19",
    not: "This is a misrepresentation. The keys have been discussed throughout church history.",
    a: "Church fathers such as Tertullian and Augustine wrote about the keys; the medieval church built a whole doctrine of “the power of the keys”; Reformation catechisms defined them; and rabbinic writings used “binding and loosing” long before. What is being recovered is the breadth of the biblical picture, not a new idea." },
  { k: "serious", q: "“The keys are about getting into heaven after death.”", refs: "Matt 23:13; Col 1:13",
    not: "No one denies that the kingdom has a future consummation.",
    a: "Jesus accused the teachers of shutting people out of the kingdom then: “you neither enter yourselves nor allow those who would enter to go in.” The apostles used the keys in history, in Acts. We have already been “transferred to the kingdom of his beloved Son.” The keys open the kingdom now, on earth." }
];

DATA.ky.study = [
  { t: "The steward", q: ["Read Isaiah 22:15–25. Compare Shebna and Eliakim. What disqualified one and qualified the other?", "How does Genesis 41:37–57 show what a steward with keys does for others?"] },
  { t: "The keys", q: ["Read Matthew 16:13–19 with the setting of Caesarea Philippi in mind. Why might Jesus have chosen this place?", "List every key in Scripture from the keyring. Who holds each one, and what does it open?"] },
  { t: "Binding and loosing", q: ["What difference does the future perfect (“shall have been bound”) make to how we pray?", "Compare Matthew 12:29, Luke 13:16, Acts 15:28 and John 20:23. Which sense of binding and loosing is each?"] },
  { t: "Operating in it", q: ["Which tooth of the key has been missing in your experience: access, decisions, authority over darkness, forgiveness, knowledge or stewardship?", "Where is God setting an open door before you right now?"] }
];
DATA.ky.memory = [
  ["Isaiah 22:22", "“I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.”"],
  ["Matthew 16:19", "“I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.”"],
  ["Revelation 3:8", "“Behold, I have set before you an open door, which no one is able to shut.”"],
  ["Revelation 1:18", "“I died, and behold I am alive forevermore, and I have the keys of Death and Hades.”"],
  ["Isaiah 9:6", "“For to us a child is born, to us a son is given; and the government shall be upon his shoulder.”"],
  ["1 Corinthians 4:2", "“Moreover, it is required of stewards that they be found faithful.”"]
];

DATA.quiz.push(
  { q: "Who received “the key of the house of David” in Isaiah 22?", a: ["Hezekiah", "Shebna", "Eliakim", "Isaiah"], c: 2, x: "Eliakim replaced the self-serving Shebna as steward over the royal house (Isa 22:20–22). Revelation 3:7 applies the key to Christ." },
  { q: "In Jesus’ day, the rabbinic terms “bind” and “loose” commonly meant…", a: ["Arrest and release", "Forbid and permit", "Curse and bless", "Marry and divorce"], c: 1, x: "Teachers “bound” (forbade) and “loosed” (permitted) actions under the law; Acts 15 shows the church doing this." },
  { q: "Where did Jesus promise Peter the keys of the kingdom?", a: ["Capernaum", "Caesarea Philippi", "The Mount of Olives", "Jerusalem’s Temple"], c: 1, x: "At Caesarea Philippi, beside a cave pagans called a gate to the underworld (Matt 16:13–19)." }
);

DATA.web.nodes.push({ id: "keys", n: "Keys", g: 3, d: "The steward’s authority to open and shut the King’s house: given to Eliakim, held by Christ, delegated to his church." });
DATA.web.edges.push(
  ["keys", "jesus", "He holds the key of David and of Death and Hades (Rev 3:7; 1:18)"],
  ["keys", "church", "Keys of the kingdom given to the disciples (Matt 16:19; 18:18)"],
  ["keys", "pentecost", "Peter opens the door at Pentecost (Acts 2)"],
  ["keys", "kingpriest", "Stewards in the King’s house"],
  ["keys", "nations", "Doors of faith opened to the Gentiles (Acts 10; 14:27)"]
);

DATA.sources.push(
  ["Jerusalem Perspective", "“‘Binding’ and ‘Loosing’ in the Kingdom of Heaven”", "The rabbinic meaning of ʾāsar and hittîr as forbid and permit (jerusalemperspective.com)."],
  ["Israel Bible Center", "“Binding and Loosing in the Gospels and Talmud”", "Binding and loosing as establishing norms in Jewish usage (israelbiblecenter.com)."],
  ["That the World May Know", "“The Gates of Hell”", "Caesarea Philippi, the cave of Pan and the setting of Matthew 16 (thattheworldmayknow.com)."]
);

/* 0 · What keys mean throughout the Bible */
DATA.ky.words = [
  { lang: "Hebrew", w: "מַפְתֵּחַ", tr: "maptēaḥ", gloss: "“opener”", d: "From pātaḥ, “to open”. In Hebrew a key is named for what it opens." },
  { lang: "Greek", w: "κλείς", tr: "kleis", gloss: "“shutter”", d: "Related to kleiō, “to shut”. In Greek a key is named for what it shuts. Together the two languages hold both sides: “he shall open … and he shall shut.”" }
];
/* every place the word “key” appears; book = canonical position 1–66 */
DATA.ky.occ = [
  { book: 7, name: "Judges 3:25", m: ["access"], d: "Eglon’s servants finally take the key and open the locked roof chamber: a key is the means of entry to a closed royal room." },
  { book: 13, name: "1 Chronicles 9:26–27", m: ["trust", "worship"], d: "Levite gatekeepers “were entrusted to be over the chambers and the treasures of the house of God … they had charge of opening it every morning.” Keys as sacred trust and daily service." },
  { book: 23, name: "Isaiah 22:22", m: ["authority", "access", "trust"], d: "The key of the house of David laid on Eliakim’s shoulder: royal office, authority to open and shut." },
  { book: 40, name: "Matthew 16:19", m: ["authority", "access", "decision"], d: "The keys of the kingdom of heaven, with binding and loosing." },
  { book: 42, name: "Luke 11:52", m: ["knowledge", "access"], d: "“You have taken away the key of knowledge.” Understanding of God’s word as a key, and teachers who lock it." },
  { book: 66, name: "Revelation 1:18", m: ["life", "authority"], d: "The keys of Death and Hades: power over life and death, won by resurrection." },
  { book: 66, name: "Revelation 3:7", m: ["authority", "access"], d: "Christ “who has the key of David”, opening a door no one can shut." },
  { book: 66, name: "Revelation 9:1; 20:1", m: ["judgment"], d: "The key of the bottomless pit: confining and releasing evil is under heaven’s control." }
];
DATA.ky.meanings = [
  { id: "authority", n: "Authority and office", icon: "M12 3 L14 9 L20 9 L15 13 L17 20 L12 16 L7 20 L9 13 L4 9 L10 9 Z", d: "A key on the shoulder was a badge of office (Isa 22:22). To hold the keys is to be trusted with the master’s authority, like a prime minister in a royal court.", also: "Isa 9:6 · Gen 41:40 · Matt 28:18" },
  { id: "access", n: "Access and entry", icon: "M5 21 V5 a2 2 0 0 1 2 -2 H17 a2 2 0 0 1 2 2 V21 M14 12 h.01", d: "Keys decide who comes in. The whole story of Scripture is about access to God’s presence lost and restored.", also: "Gen 3:24 · Eph 2:18 · Heb 10:19–20" },
  { id: "trust", n: "Trust and stewardship", icon: "M12 3 a4 4 0 1 1 0 8 a4 4 0 1 1 0 -8 M12 11 V21 M12 16 h4 M12 19 h3", d: "Keys are entrusted, never owned. The Levite gatekeepers and the royal steward held what belonged to someone else and would give account.", also: "1 Cor 4:1–2 · Luke 12:42 · 1 Pet 4:10" },
  { id: "decision", n: "Judgment and decision", icon: "M12 4 V20 M6 20 H18 M5 8 H19 M5 8 L2 14 H8 Z M19 8 L16 14 H22 Z", d: "Opening and shutting, binding and loosing: keys represent rulings that stand. Heaven decides; stewards declare it on earth.", also: "Matt 18:18 · Acts 15:28" },
  { id: "knowledge", n: "Knowledge and revelation", icon: "M4 5 H11 a2 2 0 0 1 2 2 V20 a2 2 0 0 0 -2 -2 H4 Z M20 5 H13 V20 a2 2 0 0 1 2 -2 H20 Z", d: "Understanding unlocks. Jesus “opened their minds to understand the Scriptures”; only the Lamb can open the sealed scroll.", also: "Luke 24:45 · Rev 5:5 · Matt 13:11" },
  { id: "worship", n: "Worship and service", icon: "M3 20 H21 M5 20 V10 M19 20 V10 M9 20 V10 M15 20 V10 M3 10 L12 4 L21 10 Z", d: "Every morning the Levites unlocked God’s house so worship could begin. Keys serve the presence of God among his people.", also: "1 Chr 9:27 · Ps 24:7–10" },
  { id: "life", n: "Life and death", icon: "M12 21 C5 15 3 11 6 7 C8 4 11 5 12 8 C13 5 16 4 18 7 C21 11 19 15 12 21 Z", d: "Christ holds the keys of Death and Hades. No grave can stay locked against him or his people.", also: "Rev 1:18 · Hos 13:14 · 1 Cor 15:55" },
  { id: "judgment", n: "Confinement and release", icon: "M6 11 V7 a6 6 0 0 1 12 0 V11 M5 11 H19 V21 H5 Z M12 15 V17", d: "The same key that opens can lock. The abyss is locked and unlocked only by heaven’s command.", also: "Rev 20:1–3 · Isa 24:22 · Jude 6" },
  { id: "provision", n: "Treasure and provision", icon: "M4 9 H20 V20 H4 Z M4 9 L6 5 H18 L20 9 M12 9 V20", d: "Keys open storehouses. God promises to “open to you his good treasury, the heavens” and gives Cyrus “the treasures of darkness”.", also: "Deut 28:12 · Isa 45:1–3 · Gen 41:56" },
  { id: "christ", n: "Christ himself", icon: "M12 3 V21 M5 9 H19", d: "In the end the key is a person: “I am the door. If anyone enters by me, he will be saved” (John 10:9). He is the opener of every door that matters.", also: "John 10:7–9 · John 14:6 · Rev 3:20" }
];

;DATA.quiz.forEach(q => { q.part = q.part || "keys"; });

/* Part VII: Sowing and reaping */
DATA.sw = {};

/* 1 · God's design flowchart (viewBox 900 × 560) */
DATA.sw.design = [
  { id: "seed", x: 450, y: 40, t: "Seed with life “in itself”", ref: "Gen 1:11–12", c: "eden",
    d: "On the third day God makes plants “yielding seed … each according to its kind, with seed in it.” Multiplication is built into creation: life that carries its own future." },
  { id: "bless", x: 450, y: 130, t: "“Be fruitful and multiply”", ref: "Gen 1:22, 28", c: "accent",
    d: "The first blessing is the power to bear fruit. In Scripture, to be blessed (bārak) is to be empowered by God to flourish and multiply for his purposes." },
  { id: "covenant", x: 450, y: 220, t: "“Seedtime and harvest shall not cease”", ref: "Gen 8:22", c: "accent",
    d: "After the flood God binds himself by covenant: while the earth remains, the cycle of sowing and reaping will continue. It is a promise from a faithful Person, not an impersonal force." },
  { id: "law", x: 450, y: 310, t: "“Whatever one sows, that will he also reap”", ref: "Gal 6:7", c: "ink",
    d: "“Do not be deceived: God is not mocked.” The principle runs through nature, character, relationships, generosity and eternity." },
  { id: "flesh", x: 220, y: 410, t: "Sow to the flesh → corruption", ref: "Gal 6:8a", c: "flame",
    d: "Seeds of self-indulgence, injustice and deceit produce a harvest of decay (Prov 22:8; Hos 8:7)." },
  { id: "spirit", x: 680, y: 410, t: "Sow to the Spirit → eternal life", ref: "Gal 6:8b–9", c: "eden",
    d: "“Let us not grow weary of doing good, for in due season we will reap, if we do not give up.” Seeds of righteousness, mercy and generosity produce lasting fruit." },
  { id: "harvest", x: 450, y: 512, t: "The final harvest", ref: "Matt 13:39; Rev 14:15", c: "accent",
    d: "“The harvest is the end of the age.” Every seed comes to its full fruit before the Lord of the harvest." }
];
DATA.sw.designEdges = [["seed", "bless"], ["bless", "covenant"], ["covenant", "law"], ["law", "flesh"], ["law", "spirit"], ["flesh", "harvest"], ["spirit", "harvest"]];

/* 2 · Laws of the harvest */
DATA.sw.laws = [
  { n: "The law of kind", ref: "Gen 1:11; Gal 6:7", d: "You reap the same kind as you sow. Wheat produces wheat. Mercy produces mercy (Matt 5:7); judging produces judgment (Matt 7:2)." },
  { n: "The law of soil", ref: "Mark 4:20; Luke 8:15", d: "The same seed yields differently in different soil. The good soil is “an honest and good heart” that hears, holds fast and bears fruit with patience." },
  { n: "The law of dying", ref: "John 12:24; 1 Cor 15:36", d: "“Unless a grain of wheat falls into the earth and dies, it remains alone.” A seed must be released and buried before it multiplies." },
  { n: "The law of seasons", ref: "Gal 6:9; Jas 5:7; Eccl 3:1–2", d: "There is a time to plant and a time to harvest. “The farmer waits for the precious fruit of the earth, being patient.”" },
  { n: "The law of the Lord of the harvest", ref: "1 Cor 3:6–7; Mark 4:26–29", d: "“I planted, Apollos watered, but God gave the growth.” The sower “knows not how” the seed grows: the increase is God’s work, not ours." },
  { n: "The law of more", ref: "Mark 4:8; Hos 8:7", d: "A harvest is larger than the seed: thirty, sixty, a hundredfold. The same law works in judgment: “they sow the wind, and they shall reap the whirlwind.”" },
  { n: "The law of proportion", ref: "2 Cor 9:6; Luke 6:38", d: "“Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully.” “With the measure you use it will be measured back to you.”" },
  { n: "The law of seed for the sower", ref: "2 Cor 9:10; Isa 55:10", d: "God “supplies seed to the sower and bread for food”. Part of every harvest is seed for the next sowing; we never sow what we did not first receive." }
];

/* 3 · Four soils */
DATA.sw.soils = [
  { id: "path", n: "The path", ref: "Mark 4:4, 15", d: "Seed on hard, trodden ground; birds take it at once. “Satan immediately comes and takes away the word that is sown in them.”", heart: "Hardened by busyness, cynicism or pain. Break up your fallow ground (Hos 10:12)." },
  { id: "rock", n: "Rocky ground", ref: "Mark 4:5–6, 16–17", d: "Quick growth, shallow roots; the sun scorches it. They receive the word with joy, but “when tribulation or persecution arises … they fall away.”", heart: "Enthusiasm without depth. Let roots go down through trials (Col 2:7; Jas 1:2–4)." },
  { id: "thorns", n: "Among thorns", ref: "Mark 4:7, 18–19", d: "It grows, but thorns choke it: “the cares of the world and the deceitfulness of riches and the desires for other things … choke the word, and it proves unfruitful.”", heart: "Divided affections. Seek first the kingdom (Matt 6:33)." },
  { id: "good", n: "Good soil", ref: "Mark 4:8, 20; Luke 8:15", d: "Those who “hear the word and accept it and bear fruit, thirtyfold and sixtyfold and a hundredfold.” Luke adds: “holding it fast in an honest and good heart … with patience.”", heart: "Hear, hold fast, persevere. Fruit is the evidence (John 15:8)." }
];

/* 4 · Through Scripture. cat: creation, character, generosity, word, christ, judgment */
DATA.sw.cats = { creation: ["Creation & covenant", "var(--eden)"], character: ["Character & righteousness", "var(--babel)"], generosity: ["Generosity", "var(--accent)"], word: ["Word & kingdom", "#6b3a8f"], christ: ["Christ & resurrection", "var(--flame)"], judgment: ["Judgment & final harvest", "var(--muted)"] };
DATA.sw.thread = [
  { b: 1, cat: "creation", ref: "Gen 1:11–12", t: "Seed in itself", d: "Plants yielding seed according to their kind: the principle is woven into creation." },
  { b: 1, cat: "creation", ref: "Gen 8:22", t: "Seedtime and harvest", d: "A covenant promise that the cycle will never cease while the earth remains." },
  { b: 1, cat: "generosity", ref: "Gen 26:1–12", t: "Isaac sows in famine", d: "In a famine, obeying God’s word to stay, “Isaac sowed in that land and reaped in the same year a hundredfold. The LORD blessed him.”" },
  { b: 19, cat: "character", ref: "Ps 126:5–6", t: "Sow in tears, reap with joy", d: "“He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him.”" },
  { b: 20, cat: "generosity", ref: "Prov 11:24–25", t: "One gives freely, yet grows richer", d: "“Whoever brings blessing will be enriched, and one who waters will himself be watered.”" },
  { b: 20, cat: "character", ref: "Prov 22:8", t: "Injustice reaps calamity", d: "“Whoever sows injustice will reap calamity, and the rod of his fury will fail.”" },
  { b: 21, cat: "generosity", ref: "Eccl 11:1–6", t: "Cast your bread", d: "“Cast your bread upon the waters, for you will find it after many days … In the morning sow your seed, and at evening withhold not your hand.”" },
  { b: 23, cat: "word", ref: "Isa 55:10–11", t: "The word as seed", d: "As rain makes the earth bring forth, “giving seed to the sower and bread to the eater, so shall my word be … it shall not return to me empty.”" },
  { b: 28, cat: "character", ref: "Hos 8:7; 10:12", t: "Wind and whirlwind; righteousness and love", d: "“They sow the wind, and they shall reap the whirlwind.” “Sow for yourselves righteousness; reap steadfast love; break up your fallow ground.”" },
  { b: 37, cat: "generosity", ref: "Hag 1:5–6", t: "Sown much, harvested little", d: "“Consider your ways. You have sown much, and harvested little.” Neglecting God’s house while building their own drained their harvest." },
  { b: 39, cat: "generosity", ref: "Mal 3:10–11", t: "Windows of heaven", d: "“Bring the full tithe … and thereby put me to the test … I will rebuke the devourer for you, so that it will not destroy the fruits of your soil.”" },
  { b: 40, cat: "word", ref: "Matt 13:1–43", t: "Kingdom parables", d: "The sower, the weeds among the wheat, the mustard seed: the kingdom works like seed." },
  { b: 41, cat: "word", ref: "Mark 4:26–29", t: "It grows, he knows not how", d: "The seed sprouts and grows while the farmer sleeps: “first the blade, then the ear, then the full grain.”" },
  { b: 42, cat: "generosity", ref: "Luke 6:38", t: "Good measure, pressed down", d: "“Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap.”" },
  { b: 43, cat: "word", ref: "John 4:35–38", t: "Fields white for harvest", d: "“One sows and another reaps … I sent you to reap that for which you did not labour.”" },
  { b: 43, cat: "christ", ref: "John 12:24", t: "The grain of wheat dies", d: "Jesus speaks of his own death: one grain falls into the earth and bears much fruit." },
  { b: 46, cat: "word", ref: "1 Cor 3:6–9", t: "God gives the growth", d: "“Neither he who plants nor he who waters is anything, but only God who gives the growth … You are God’s field.”" },
  { b: 46, cat: "generosity", ref: "1 Cor 9:11", t: "Spiritual and material", d: "“If we have sown spiritual things among you, is it too much if we reap material things from you?”" },
  { b: 46, cat: "christ", ref: "1 Cor 15:20, 36–44", t: "Sown perishable, raised imperishable", d: "Christ the firstfruits; our bodies are sown like seed and raised in glory." },
  { b: 47, cat: "generosity", ref: "2 Cor 9:6–11", t: "Sow bountifully, cheerfully", d: "“God loves a cheerful giver … He who supplies seed to the sower … will supply and multiply your seed for sowing and increase the harvest of your righteousness.”" },
  { b: 48, cat: "character", ref: "Gal 6:7–10", t: "Flesh or Spirit", d: "“Whatever one sows, that will he also reap … let us do good to everyone.”" },
  { b: 59, cat: "character", ref: "Jas 3:18", t: "A harvest of righteousness", d: "“A harvest of righteousness is sown in peace by those who make peace.”" },
  { b: 66, cat: "judgment", ref: "Rev 14:14–16", t: "The harvest of the earth", d: "One like a son of man with a sharp sickle reaps, “for the harvest of the earth is fully ripe.”" }
];

/* 5 · Seed → harvest chooser */
DATA.sw.pairs = [
  { good: true, seed: "Righteousness", harvest: "Steadfast love", ref: "Hos 10:12", d: "Sowing right living in relationship with God reaps his covenant love." },
  { good: true, seed: "Generosity", harvest: "Sufficiency to abound in every good work", ref: "2 Cor 9:6–11", d: "The harvest of giving is not hoarded wealth but being “enriched in every way to be generous in every way”, overflowing in thanksgiving to God." },
  { good: true, seed: "Tears in faithfulness", harvest: "Joy and sheaves", ref: "Ps 126:5–6", d: "Faithful sowing in seasons of grief still comes home with songs." },
  { good: true, seed: "Peacemaking", harvest: "Righteousness", ref: "Jas 3:18", d: "Peace is the seed bed for a harvest of right relationships." },
  { good: true, seed: "To the Spirit", harvest: "Eternal life", ref: "Gal 6:8", d: "Investing in what the Spirit loves yields life that does not end." },
  { good: true, seed: "Mercy and forgiveness", harvest: "Mercy received", ref: "Matt 5:7; Luke 6:37", d: "“Forgive, and you will be forgiven.”" },
  { good: true, seed: "The word", harvest: "Thirty, sixty, a hundredfold", ref: "Mark 4:20; Isa 55:11", d: "God’s word in a good heart never returns empty." },
  { good: false, seed: "The wind", harvest: "The whirlwind", ref: "Hos 8:7", d: "Empty, faithless choices return multiplied and destructive." },
  { good: false, seed: "Injustice", harvest: "Calamity", ref: "Prov 22:8; Job 4:8", d: "“Those who plow iniquity and sow trouble reap the same.”" },
  { good: false, seed: "To the flesh", harvest: "Corruption", ref: "Gal 6:8", d: "Self-indulgence decays from within." },
  { good: false, seed: "Discord", harvest: "Broken relationships", ref: "Prov 6:14–19; 16:28", d: "The Lord hates “one who sows discord among brothers”." },
  { good: false, seed: "Stinginess", harvest: "Want", ref: "Prov 11:24; Hag 1:6", d: "“Another withholds what he should give, and only suffers want.”" }
];

/* 6 · Blessing cycle */
DATA.sw.cycle = [
  { t: "Grace gives the seed", ref: "2 Cor 9:10; 1 Cor 4:7", d: "Everything begins with God: “What do you have that you did not receive?” We only ever sow what he supplied." },
  { t: "Sow freely and cheerfully", ref: "2 Cor 9:7", d: "“Not reluctantly or under compulsion, for God loves a cheerful giver.” Love, not pressure, is the motive." },
  { t: "God gives the growth", ref: "1 Cor 3:7; Mark 4:27", d: "We plant and water; God makes it grow, in his time and way." },
  { t: "A harvest of righteousness", ref: "2 Cor 9:8–10", d: "“God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.”" },
  { t: "Blessed to bless others", ref: "Gen 12:2; 2 Cor 9:11", d: "“You will be enriched in every way to be generous in every way.” The harvest flows outward." },
  { t: "Thanksgiving to God", ref: "2 Cor 9:11–12", d: "The final fruit is “many thanksgivings to God”. The cycle ends in worship, and begins again with more seed." }
];

/* 7 · Principle or manipulation */
DATA.sw.compare = [
  ["Where it comes from", "The character of a faithful Father who made the world (Gen 8:22; Jas 1:17)", "A technique detached from God, used like a lever"],
  ["Motive", "Love, worship and obedience (2 Cor 8:8–9)", "Fear, greed or guilt (1 Tim 6:5)"],
  ["Direction", "God gives first: we sow what we received (2 Cor 9:10)", "We pay first so that God owes us"],
  ["Pressure", "“Not reluctantly or under compulsion” (2 Cor 9:7)", "Urgency, deadlines, emotional pressure"],
  ["Who controls the growth", "God, in his time (1 Cor 3:7; Eccl 11:5)", "The preacher promises amounts and dates"],
  ["What the harvest is for", "Good works, generosity and thanksgiving to God (2 Cor 9:8–12)", "Personal gain and display"],
  ["What it does to people", "Freedom and joy", "Shame, debt and disappointment"]
];
DATA.sw.why = [
  { t: "The principle is cut off from the Person", d: "When sowing and reaping is taught without the Father, it becomes a machine. Laws without the Lawgiver always feel cold and transactional." },
  { t: "It is used to extract money", d: "“Sow a seed of this amount for your breakthrough.” Peter rebuked Simon for thinking “you could obtain the gift of God with money” (Acts 8:20); Paul warns of those “imagining that godliness is a means of gain” (1 Tim 6:5)." },
  { t: "The motive becomes getting", d: "“You ask and do not receive, because you ask wrongly, to spend it on your passions” (Jas 4:3). Giving in order to get turns a gift into a bribe." },
  { t: "God is treated as a vending machine", d: "Put in a coin, receive a product. But the Father gives good gifts because he is good (Matt 7:11), not because we have programmed him." },
  { t: "Timing and amounts are promised by people", d: "The Bible promises “due season” (Gal 6:9), never a date or a multiplier chosen by a speaker." },
  { t: "Suffering and grace are left out", d: "A formula cannot explain Job, the martyrs who “did not receive what was promised” in this life (Heb 11:39), or grace that does not give us what our sins deserve (Ps 103:10)." }
];
DATA.sw.detector = [
  "Am I being pressured to give right now, with an artificial deadline?",
  "Is a specific return promised for a specific amount?",
  "Does the person asking benefit most from my giving?",
  "Are verses quoted without their context?",
  "Is God’s grace and Christ’s finished work missing from the message?",
  "Would I feel guilty or cursed if I said no?",
  "Is the harvest only about my comfort, not about others and God’s glory?"
];

/* 8 · Grace and the harvest */
DATA.sw.exchange = {
  ours: ["Our sin", "Our rebellion", "Our wind"],
  his: ["His righteousness", "His obedience", "His life"],
  refs: "Isa 53:4–6; Gal 3:13; 2 Cor 5:21; Ps 103:10; John 4:38"
};

/* 9 · Objections */
DATA.sw.objections = [
  { k: "serious", q: "“Sowing and reaping is just karma.”", refs: "Ps 103:10; Gal 3:13",
    not: "No one is saying God is an impersonal force of cause and effect.",
    a: "Karma is an impersonal, endless cycle with no forgiveness. The biblical principle comes from a personal God who made a covenant (Gen 8:22), and it is interrupted by grace: “He does not deal with us according to our sins” (Ps 103:10). Christ reaped what we sowed on the cross (Gal 3:13), and we reap what he sowed (John 4:38)." },
  { k: "straw", q: "“If I give money, God is obligated to make me rich.”", refs: "2 Cor 9:8–11; 1 Tim 6:6–10",
    not: "This is a misrepresentation that has caused real harm.",
    a: "The harvest of generosity is described as sufficiency “so that you may abound in every good work”, being “enriched in every way to be generous in every way”, and thanksgiving to God. Paul learned contentment in plenty and in hunger (Phil 4:11–13). God is never in our debt (Rom 11:35)." },
  { k: "serious", q: "“Talking about reaping blessings is the prosperity gospel.”", refs: "Gal 6:9; Luke 6:38; Prov 11:25",
    not: "No one is defending greed or formulas for wealth.",
    a: "Scripture itself makes these promises: “in due season we will reap”; “give, and it will be given to you.” The error of the prosperity message is greed, formula and manipulation, not the promise. Reject the manipulation; keep the Bible’s promise and its purpose." },
  { k: "serious", q: "“We are under grace now, so sowing and reaping no longer applies.”", refs: "Gal 6:7–9; 2 Sam 12:13–14",
    not: "No one is saying we earn salvation by sowing good deeds.",
    a: "Paul wrote “whatever one sows, that will he also reap” to Christians saved by grace, in a letter defending grace. Grace forgives the guilt of our bad seed and changes the soil of our hearts, but consequences can remain: David was forgiven, yet the sword did not depart from his house. Grace makes good sowing possible and joyful." },
  { k: "serious", q: "“Then suffering means you must have sown badly.”", refs: "Job 42:7; John 9:2–3; Heb 11:39",
    not: "No one claims every hardship is the harvest of personal sin.",
    a: "That was the error of Job’s friends, and God rebuked them. Jesus said the man born blind suffered “that the works of God might be displayed in him”. Many faithful people died “not having received the things promised” in this life. Some harvests come in eternity (2 Cor 4:17)." },
  { k: "serious", q: "“Giving to get is selfish. We should give expecting nothing.”", refs: "Luke 6:35; Matt 6:3–4; Heb 11:6",
    not: "No one is endorsing giving to receive from people or to be seen.",
    a: "Jesus says, “lend, expecting nothing in return, and your reward will be great.” We expect nothing from people, yet we may trust our Father who “sees in secret and will reward you”. Faith believes God “rewards those who seek him”. The motive is love; the hope is in God." },
  { k: "straw", q: "“Name your seed amount and claim your breakthrough.”", refs: "Acts 8:18–24; 2 Pet 2:3",
    not: "This is a misuse of the principle, not the principle itself.",
    a: "There is no New Testament pattern of paying a preacher for a guaranteed miracle. Simon the magician tried to buy the Spirit’s power and was told, “May your silver perish with you.” Peter warns that “in their greed they will exploit you with false words.” God’s gifts are free." }
];

DATA.sw.study = [
  { t: "God’s design", q: ["Read Genesis 1:11–12, 1:28 and 8:22. What do they teach about seed, blessing and God’s faithfulness?", "What is the difference between a principle that comes from a Person and an impersonal law?"] },
  { t: "The soils", q: ["Which soil in Mark 4 describes your heart in this season? What would “breaking up fallow ground” look like?", "Why does Luke 8:15 mention patience?"] },
  { t: "Blessing", q: ["Read 2 Corinthians 9:6–15 and trace the cycle from seed to thanksgiving. Who is at the start and the end?", "What is the harvest of generosity for, according to 2 Corinthians 9:8 and 9:11?"] },
  { t: "Manipulation", q: ["Use the manipulation checklist on a recent appeal you heard. What did you notice?", "How does grace (Ps 103:10; Gal 3:13) change the way we think about sowing and reaping?"] }
];
DATA.sw.memory = [
  ["Genesis 8:22", "“While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.”"],
  ["Galatians 6:7, 9", "“Whatever one sows, that will he also reap … And let us not grow weary of doing good, for in due season we will reap, if we do not give up.”"],
  ["2 Corinthians 9:7", "“Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”"],
  ["John 12:24", "“Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.”"],
  ["Hosea 10:12", "“Sow for yourselves righteousness; reap steadfast love; break up your fallow ground, for it is the time to seek the LORD.”"],
  ["1 Corinthians 3:7", "“So neither he who plants nor he who waters is anything, but only God who gives the growth.”"]
];

DATA.quiz.push(
  { q: "According to 2 Corinthians 9:8–11, what is the harvest of generosity mainly for?", a: ["Personal luxury", "Abounding in every good work, generosity and thanksgiving to God", "Proving spiritual status", "Paying off the preacher"], c: 1, x: "“Enriched in every way to be generous in every way, which through us will produce thanksgiving to God.”" },
  { q: "In the parable of the sower, what chokes the seed among thorns?", a: ["Birds", "The scorching sun", "Cares, riches and other desires", "Too much rain"], c: 2, x: "Mark 4:18–19: “the cares of the world and the deceitfulness of riches and the desires for other things.”" },
  { q: "What does 2 Corinthians 9:7 say giving must NOT be?", a: ["Generous", "Reluctant or under compulsion", "Planned", "Secret"], c: 1, x: "Compulsion is the mark of manipulation; God loves a cheerful giver." }
);

DATA.web.nodes.push({ id: "sowing", n: "Sowing & reaping", g: 4, d: "God’s covenant principle of seed and harvest, from Genesis 8:22 to the final harvest, carried by grace and not by formula." });
DATA.web.edges.push(
  ["sowing", "seed", "The promised seed (Gen 3:15) and the grain that dies (John 12:24)"],
  ["sowing", "eden", "“Be fruitful and multiply” (Gen 1:28)"],
  ["sowing", "babel", "Babel tried to take what God gives; sowing receives"],
  ["sowing", "church", "“You are God’s field” (1 Cor 3:9)"]
);

Object.assign(DATA.images, {
  millet: { file: "Jean-François_Millet_-_The_Sower_-_Google_Art_Project.jpg", cap: "Jean-François Millet, <i>The Sower</i> (1850), Museum of Fine Arts, Boston", ar: "4/5", art: "sower" },
  gogh: { file: "Van_Gogh_-_Sämann_bei_untergehender_Sonne.jpeg", cap: "Vincent van Gogh, <i>The Sower at Sunset</i> (1888), Kröller-Müller Museum", ar: "5/4", art: "sower" }
});

;DATA.quiz.forEach(q => { q.part = q.part || "sowing"; });

/* Part IV add-on: “Supply and Support” sermon notes (Isaiah 3) */
DATA.ss = {};

DATA.ss.map = [
  { n: "Supply and support", role: "king", t: "Kings build the structures that can hold what God releases." },
  { n: "Signs of judgment", role: "king", t: "When order is violated, government, prophets and elders are removed." },
  { n: "Babel or Bethel", role: "both", t: "Every builder is building a rival kingdom or a house of God." },
  { n: "Bricks or living stones", role: "priest", t: "God builds his temple with living stones, not manufactured bricks." },
  { n: "Heaven came down", role: "both", t: "God responds to unity, and fights in the arena of those made in his image." },
  { n: "Worship is not a song", role: "priest", t: "Priests, not performers: heaven hears the spirit and the lifestyle." },
  { n: "Gatekeepers and gossip", role: "priest", t: "Gatekeepers guard what enters; gossip blocks the gate." },
  { n: "The orphan generation", role: "both", t: "Sons inherit; orphans try to seize the inheritance by killing the heir." },
  { n: "Three Babylons", role: "king", t: "Speech, literature and technology: three ways the city of man unites people against God." },
  { n: "A generation of Daniels", role: "both", t: "Those who refuse the king’s table rise to shape kings and wise men." },
  { n: "One accord", role: "both", t: "Unity is the structure for Pentecost; when the fire is lit, shake off the snake." }
];

DATA.ss.net = {
  verse: "Luke 5:6–7",
  states: [
    { max: -25, t: "Support without supply: empty nets", d: "Strong systems and skilled hands, but little to hold. Isaiah 3:1 warns that the Lord of hosts can take away “both supply and support”; every other provider is only his servant (Gen 22:14)." },
    { max: 25, t: "Supply matched by support: the catch is held", d: "Peter signals his partners in the other boat and the catch is brought in. “My God will supply every need of yours according to his riches in glory” (Phil 4:19): God supplies; we build the support systems that can carry it." },
    { max: 101, t: "Supply without support: the net breaks and the boat sinks", d: "“Their nets were breaking … they filled both the boats, so that they began to sink.” God’s goodness can become destructive without the infrastructure to hold it. The notes apply this to nations rich in gold, oil and minerals but poor in the structures to steward them: abundant in supply, limited in support." }
  ]
};
DATA.ss.want = { q: "“Who decides the day is determined by who wants it bad enough to be good enough to get it.”", d: "Every nation believes God will come through its gate, and every nation could be a gate for God’s kingdom. The question the notes press is hunger: do you want it badly enough to become the kind of people who can hold it?" };

DATA.ss.pillars = [
  { n: "Bread and water", ref: "Isa 3:1", d: "“The whole supply of bread and the whole supply of water.” God removes provision to remind a people that he is the Provider (Jehovah Jireh); every other provider is his servant." },
  { n: "Mighty man & soldier", ref: "Isa 3:2", d: "Protection and strength removed: a nation left without defenders." },
  { n: "Judge", ref: "Isa 3:2", d: "“I will take away the judge” means: I will take away your government. Even if there is supply, it will leak, because the support systems are not adequate." },
  { n: "Prophet", ref: "Isa 3:2; 1 Sam 28", d: "When prophets are gone, people become like Saul, seeking the medium at Endor. A poor nation stops seeking the true voice." },
  { n: "Elder & counsellor", ref: "Isa 3:2–3", d: "Wisdom and experience removed: no one left to give counsel." },
  { n: "Skilled artisan", ref: "Isa 3:3", d: "“The skilful magician and the expert in charms”, the craftsmen and builders, are taken away too." }
];
DATA.ss.collapse = [
  { ref: "Isa 3:4", t: "“I will make boys their princes, and infants shall rule over them.” Capricious children become the replacement structure." },
  { ref: "Isa 3:5", t: "“The people will oppress one another … the youth will be insolent to the elder.” Order is violated, so disorder follows." },
  { ref: "Isa 3:6–7", t: "“You have a cloak; you shall be our leader.” He replies, “I will not be a healer.” No one can carry the ruins." },
  { ref: "Isa 3:10–11", t: "“Tell the righteous that it shall be well with them, for they shall eat the fruit of their deeds.” Even in judgment, God keeps a distinction." }
];

DATA.ss.build = {
  babel: [["Founder", "Nimrod, “a mighty hunter … the beginning of his kingdom was Babel” (Gen 10:8–10): the first kingdom structure outside God’s house."], ["Language", "One lip, one purpose: the language of rebellion we are all born into (Ps 51:5)."], ["Pattern", "“Come, let us …”: imitating God’s “Let us make man” (Gen 1:26), an unholy trinity."], ["Material", "Bricks: manufactured, uniform, made by human hands (Gen 11:3)."], ["Goal", "“Let us make a name for ourselves” (Gen 11:4)."]],
  bethel: [["Founder", "God himself, who sets up the stairway (Gen 28:12–17)."], ["Language", "Revelation, not marketing: “flesh and blood has not revealed this to you” (Matt 16:17)."], ["Pattern", "The pattern shown on the mountain of prayer (Exod 25:40)."], ["Material", "Uncut stones and living stones (Exod 20:25; 1 Pet 2:5)."], ["Goal", "His name first; then he gives the name (Phil 2:5–9)."]]
};

DATA.ss.arenas = [
  { n: "The throne", ref: "Rev 12:7–9", d: "When Lucifer rebelled, God remained on his throne. A third of the angels rose, and God stayed seated. He does not descend to fight in a lesser arena." },
  { n: "The angelic arena", ref: "Jude 9; Rev 12:10", d: "Michael fought the dragon, yet even he “did not presume to pronounce a blasphemous judgment, but said, ‘The Lord rebuke you.’” No mockery. Heaven has only one “accuser of the brothers”, and that position is taken: online rebuke has no power." },
  { n: "The human arena", ref: "Gen 11:5–7; Gen 1:27", d: "At Babel, “the LORD came down”. Humanity is made in God’s image, so this is his arena. United rebels with no instruments and no priests brought heaven down. God respects unity, even unity against him." }
];

DATA.ss.worship = [
  { t: "A position, not a performance", ref: "John 4:23–24", d: "True worship is a position in spirit and truth. Songs only tell people, in the best way we can, where we live in the spirit." },
  { t: "Heaven hears the spirit", ref: "Luke 23:46", d: "On the cross Jesus did not sing; he said, “Father, into your hands I commit my spirit.” Heaven hears your spirit, which means it also hears your gossip." },
  { t: "Without love, only noise", ref: "1 Cor 13:1", d: "“If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal.” You can sing on key without the key that unlocks the kingdom." },
  { t: "Priests, not performers", ref: "Rev 14:3–4", d: "Don’t sing or play as a transaction. Revelation’s new song could be learned only by those who lived for their one Husband. Heaven hears Monday to Wednesday, not just the rehearsal." }
];

DATA.ss.gate = [
  { n: "False prophet", ok: false, ref: "Matt 7:15", d: "Gatekeepers check before giving someone a platform. A million followers on earth is no reference in heaven." },
  { n: "Jezebel tolerated", ok: false, ref: "Rev 2:20", d: "“I have this against you, that you tolerate that woman Jezebel.” God’s issue was with the tolerator as well as the perpetrator." },
  { n: "Gossip", ok: false, ref: "Ps 1:1; Prov 16:28", d: "Being present in a gossip group is participating. The notes put it simply: if you want to be blessed, stop listening." },
  { n: "Slander of leaders", ok: false, ref: "Jude 8–9", d: "Even Michael did not rail against dignitaries. Videos mocking pastors are not accountability." },
  { n: "Unity", ok: true, ref: "John 17:21", d: "“That they may all be one … so that the world may believe.” God cannot come in while church fights church and leader fights leader." },
  { n: "Love that covers", ok: true, ref: "Gen 9:23; 1 Pet 4:8", d: "Shem and Japheth walked backward and covered their father. “Love covers a multitude of sins.”" }
];
DATA.ss.psalm1 = [
  { v: "Walks", t: "in the counsel of the wicked", d: "First you pass by and listen: “Did you hear?”" },
  { v: "Stands", t: "in the way of sinners", d: "Then you linger and become part of the group." },
  { v: "Sits", t: "in the seat of scoffers", d: "Finally you settle in and become the scoffer. Involuntary presence becomes active participation." }
];

DATA.ss.stages = [
  { g: "orphanos", n: "Orphan", d: "Fatherless and unformed: the rawest stage, yet often the one handed a microphone." },
  { g: "brephos", n: "Infant", d: "A newborn who can only receive (1 Pet 2:2)." },
  { g: "nēpios", n: "Babe", d: "A child who cannot yet discern; easily tossed about (Eph 4:14; 1 Cor 3:1)." },
  { g: "paidion", n: "Young child", d: "Learning and being trained (Matt 18:3)." },
  { g: "huios", n: "Mature son", d: "A son who can carry the Father’s name and inheritance (Rom 8:14; Gal 4:6–7)." }
];
DATA.ss.tenants = { ref: "Matt 21:33–39", d: "“This is the heir. Come, let us kill him and have his inheritance.” An orphan spirit tries to promote itself by tearing down others, building a following on the bones of great men and women of God. Sons inherit; orphans try to seize." };

DATA.ss.babylons = [
  { v: "1.0", n: "Language and speech", who: "Nimrod", ref: "Gen 11:1–9", weapon: "The unity of rebellion", how: "Satan recruits: everyone already shares one language. To lead it you need no intellect, only united rebels.", icon: "tower" },
  { v: "2.0", n: "Language and literature", who: "Nebuchadnezzar", ref: "Dan 1:3–8; 2 Cor 11:14", weapon: "The unity of beauty", how: "People must be taught the same language and books: indoctrination through education, teaching ugly things in beautiful ways. “World” is kosmos, the root of “cosmetics”; Satan disguises himself as an angel of light. Evil is given beautiful names; the covenant rainbow is redefined.", icon: "scroll" },
  { v: "3.0", n: "Technology and sorcery", who: "Revelation’s Babylon", ref: "Rev 18:21–23; 2 Tim 4:3", weapon: "Addiction", how: "Language and literature are put into machines. “By your sorcery (pharmakeia, the root of “pharmacy”) all nations were deceived.” Satan no longer needs to make people one; he keeps them high on endless scrolling and dopamine, until a generation cannot endure sound teaching.", icon: "phone" }
];
DATA.ss.daniel = [
  { ref: "Dan 1:3–4", t: "Taken to Babylon’s schools", d: "Chosen youths taught “the literature and language of the Chaldeans”." },
  { ref: "Dan 1:8", t: "Purposed in his heart", d: "“Daniel resolved that he would not defile himself with the king’s food.” Deprivation in the natural turns common youth into uncommon youth." },
  { ref: "Dan 1:17–20", t: "Ten times better", d: "God gives learning and skill; they rise to the top in every area." },
  { ref: "Dan 2:48; 5:11", t: "Chief of the wise men", d: "Daniel is set over all the wise men of Babylon, and reshapes what they study." },
  { ref: "Matt 2:1–2", t: "The Magi follow the star", d: "Centuries later, wise men from the East are the ones who recognise the newborn King. The notes suggest Daniel’s influence on Babylon’s schools of the wise prepared them." }
];
DATA.ss.daniels = [
  { t: "Refuse the king’s table", ref: "Dan 1:8", d: "Cut off what is shaping your mind more than God is. The notes describe deleting every app after realising they had become more connected to Wi-Fi than to the kingdom of God." },
  { t: "Become sensitive again", ref: "1 Kgs 19:12", d: "What seemed boring becomes interesting. Books and prayer return; God begins to speak because you can hear him again." },
  { t: "Receive divine ideas", ref: "Dan 1:17; 2:19", d: "One with him again, he gives ideas in the midst of Babylon that can transform a generation." },
  { t: "Fear God, not the tree", ref: "Gen 2:9, 16–17", d: "God may cut you off from something for a season, but if you must stay away from it forever, it has become your idol. Why did God put the tree in the garden? So it would become like every other tree and no longer rule Adam’s senses." }
];

DATA.ss.accord = [
  { t: "One accord", ref: "Acts 2:1–2", d: "“They were all together in one place. And suddenly there came from heaven a sound like a mighty rushing wind.” As sudden as “suddenly” sounds, suddenlies are predictable: oneness brought heaven down at Babel, and oneness brings the Spirit down at Pentecost." },
  { t: "No gossip, no audience", ref: "Prov 26:20", d: "“For lack of wood the fire goes out, and where there is no whisperer, quarrelling ceases.” Refuse to be the audience: give the gossip twenty seconds, then go and tell the person yourself." },
  { t: "The fire is lit", ref: "Acts 28:2–3", d: "On Malta the islanders lit a fire; as Paul gathered sticks, a viper came out of the heat and fastened on his hand. When unity happens, fire comes; when fire comes, snakes come out." },
  { t: "Shake it off", ref: "Acts 28:5; 2 Cor 5:17", d: "“He shook off the creature into the fire and suffered no harm.” What they said about you may once have been true, but “if anyone is in Christ, he is a new creation.” Stop looking for me at my old address. Don’t let the snake put out your fire; let your fire put out the snake." }
];

DATA.kp.study.push({ t: "Supply and support", q: ["Read Isaiah 3:1–12. Which supports does God remove, and what happens when they are gone?", "Where in your life, family or nation is there supply without support? What structure needs to be built?", "Which Babylon (speech, literature or technology) has the strongest pull on you? What would a Daniel response look like?"] });
DATA.kp.memory.push(["Isaiah 3:1", "“For behold, the Lord GOD of hosts is taking away from Jerusalem and from Judah support and supply, all support of bread, and all support of water.”"]);

;DATA.quiz.forEach(q => { q.part = q.part || "kings"; });

/* Part VIII: Spiritual warfare and dominion */
DATA.wf = {};

/* 1 · Ephesians 6:12 — the powers, and where they stand */
DATA.wf.powers = [
  { gk: "archai", n: "Rulers", d: "“First ones”: high-ranking spiritual powers. Paul uses the same word for the powers Christ disarmed (Col 2:15)." },
  { gk: "exousiai", n: "Authorities", d: "Powers that claim a right to rule. Christ is seated “far above all rule and authority” (Eph 1:21)." },
  { gk: "kosmokratores", n: "Cosmic powers over this present darkness", d: "“World-rulers”, a word used in the ancient world of planetary and astrological powers. They rule only “this present darkness”, not the age to come." },
  { gk: "pneumatika tēs ponērias", n: "Spiritual forces of evil", d: "Hosts of wickedness in the heavenly places: deception, accusation and temptation behind visible events (2 Cor 4:4; Rev 12:10)." }
];
DATA.wf.layers = [
  { n: "Christ, seated", ref: "Eph 1:20–22", d: "Raised and seated “far above all rule and authority and power and dominion, and above every name that is named”. God “put all things under his feet”." },
  { n: "The church, seated with him", ref: "Eph 2:6; Col 3:1–3", d: "God “raised us up with him and seated us with him in the heavenly places”. We fight from his victory, not toward it." },
  { n: "The powers, under his feet", ref: "Col 2:15; 1 Pet 3:22", d: "“He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.” Angels, authorities and powers are “subjected to him”." },
  { n: "Flesh and blood: not the enemy", ref: "Eph 6:12; 2 Tim 2:24–26", d: "People are not our enemies. Even opponents are to be gently taught, “that they may escape from the snare of the devil”." }
];

/* 2 · The armour of God (God's own armour from Isaiah) */
DATA.wf.armour = [
  { id: "belt", n: "Belt of truth", ref: "Eph 6:14; Isa 11:5", d: "“Faithfulness the belt of his loins” is said of the Messiah. Truth holds everything together: lies are the devil’s native language (John 8:44).", use: "Know and speak the truth; refuse lies about God, yourself and others." },
  { id: "breast", n: "Breastplate of righteousness", ref: "Eph 6:14; Isa 59:17", d: "“He put on righteousness as a breastplate”: God’s own armour. Righteousness given in Christ (2 Cor 5:21) and lived out in integrity guards the heart.", use: "Stand in Christ’s righteousness against accusation; live cleanly so the enemy has no foothold (Eph 4:27)." },
  { id: "shoes", n: "Shoes of the gospel of peace", ref: "Eph 6:15; Isa 52:7", d: "“How beautiful … are the feet of him who brings good news, who publishes peace.” Readiness to stand firm and to carry the good news.", use: "Stand firm and be ready to share the gospel wherever you go." },
  { id: "shield", n: "Shield of faith", ref: "Eph 6:16", d: "A Roman scutum was large enough to cover the whole body; soaked in water, it put out flaming arrows. Faith extinguishes “all the flaming darts of the evil one”.", use: "Answer fear, temptation and doubt with trust in God’s character and promises." },
  { id: "helmet", n: "Helmet of salvation", ref: "Eph 6:17; Isa 59:17; 1 Thess 5:8", d: "Again God’s own armour (Isa 59:17). Paul also calls it “the hope of salvation”: assurance that guards the mind.", use: "Guard your thinking with the certainty of who you are and where history is going." },
  { id: "sword", n: "Sword of the Spirit", ref: "Eph 6:17; Heb 4:12; Matt 4:4", d: "“Which is the word (rhēma) of God”: the spoken word, the specific Scripture the Spirit brings for the moment, as Jesus answered each temptation with “It is written”.", use: "Learn Scripture so the Spirit can bring the right word to your mouth." },
  { id: "pray", n: "Praying at all times in the Spirit", ref: "Eph 6:18", d: "The armour is put on in prayer: “praying at all times in the Spirit, with all prayer and supplication … for all the saints.”", use: "Pray continually, in the Spirit, for yourself and for others." }
];

/* 3 · Words of authority */
DATA.wf.words = [
  { w: "exousia", t: "Authority", pic: "badge", d: "The right to act: delegated authority, like a police officer’s badge. “I have given you authority (exousia) to tread on serpents and scorpions” (Luke 10:19). To all who received him, he gave “the right (exousia) to become children of God” (John 1:12)." },
  { w: "dynamis", t: "Power", pic: "engine", d: "The ability to act, like an engine. “You will receive power (dynamis) when the Holy Spirit has come upon you” (Acts 1:8). The enemy has some power, but we have authority “over all the power (dynamis) of the enemy” (Luke 10:19)." },
  { w: "rādâ · kābaš", t: "Dominion", pic: "crown", d: "“Have dominion … subdue” (Gen 1:26–28): the original royal mandate over creation. “You have given him dominion over the works of your hands; you have put all things under his feet” (Ps 8:6), fulfilled in Christ (Heb 2:8–9)." },
  { w: "ochyrōma", t: "Strongholds", pic: "fort", d: "A fortress. Paul defines it: “arguments and every lofty opinion raised against the knowledge of God”. It is torn down by divine weapons that “take every thought captive to obey Christ” (2 Cor 10:3–5)." }
];

/* 4 · Chain of authority flowchart (viewBox 900 × 560) */
DATA.wf.chain = [
  { id: "father", x: 450, y: 40, t: "The Father", ref: "Ps 24:1; Dan 4:34–35", c: "accent", d: "All authority originates in God. “The earth is the LORD’s and the fullness thereof.”" },
  { id: "son", x: 450, y: 130, t: "The Son: “all authority has been given to me”", ref: "Matt 28:18; Eph 1:20–22", c: "accent", d: "Won by his obedience, death and resurrection. The ascended Christ holds all authority in heaven and on earth." },
  { id: "name", x: 450, y: 220, t: "Given in his name", ref: "John 14:13–14; Acts 3:6, 16", c: "babel", d: "Not a password but a commission: acting as his representatives, by his authority, according to his will. “In the name of Jesus Christ of Nazareth, rise up and walk.”" },
  { id: "sons", x: 220, y: 320, t: "To sons and daughters", ref: "John 1:12; Luke 10:17–20", c: "eden", d: "Authority is given to children of God, including ordinary disciples: the seventy-two returned saying, “even the demons are subject to us in your name.”" },
  { id: "under", x: 680, y: 320, t: "Exercised under authority", ref: "Matt 8:8–10; Jas 4:7", c: "eden", d: "The centurion understood: “I too am a man under authority.” Authority flows to those who submit: “Submit yourselves therefore to God. Resist the devil, and he will flee.”" },
  { id: "means", x: 450, y: 420, t: "Through faith, the word, prayer, holiness and agreement", ref: "Mark 11:22–24; Matt 18:19; Eph 6:17–18", c: "babel", d: "The New Testament means are simple: faith in God, his word in our mouth, prayer, a clean life and agreement with others." },
  { id: "aim", x: 450, y: 512, t: "To enforce Christ’s victory on earth", ref: "Rom 16:20; 1 John 3:8; Matt 6:10", c: "accent", d: "“The God of peace will soon crush Satan under your feet.” We do not win the victory; we apply the victory he already won, so that his will is done on earth as in heaven." }
];
DATA.wf.chainEdges = [["father", "son"], ["son", "name"], ["name", "sons"], ["name", "under"], ["sons", "means"], ["under", "means"], ["means", "aim"]];

/* 5 · Can we speak to it? */
DATA.wf.levels = { speak: ["Speak with authority", "var(--eden)"], declare: ["Pray and declare God’s word", "var(--accent)"], stand: ["Stand and pray; don’t revile", "var(--babel)"], no: ["Not our role", "var(--flame)"] };
DATA.wf.targets = [
  { n: "Demons", lvl: "speak", ref: "Mark 16:17; Acts 16:18; Luke 10:17", d: "A clear New Testament pattern. Jesus cast out spirits “with a word” (Matt 8:16). Paul turned and said to a spirit, “I command you in the name of Jesus Christ to come out of her.” Believers are told these signs will accompany them.", how: "Calmly, briefly, in Jesus’ name; no shouting, no conversations, no fascination." },
  { n: "Sickness", lvl: "speak", ref: "Luke 4:39; Acts 3:6; Acts 9:34; Jas 5:14–16", d: "Jesus “rebuked the fever, and it left her.” Peter spoke to the lame man: “rise up and walk.” James commands elders to pray over the sick and anoint them. Yet not everyone was healed at once: Paul left Trophimus ill (2 Tim 4:20) and recommended wine for Timothy’s stomach (1 Tim 5:23).", how: "Pray, lay on hands, speak healing in Jesus’ name, use medicine too, and never condemn the sick." },
  { n: "Mountains and obstacles", lvl: "speak", ref: "Mark 11:22–24; Zech 4:6–7", d: "“Whoever says to this mountain, ‘Be taken up and thrown into the sea,’ and does not doubt … it will be done.” Jesus begins with “Have faith in God”. Zechariah prophesies to the mountain before Zerubbabel: “you shall become a plain … not by might, nor by power, but by my Spirit.”", how: "Speak in faith what God has said about the obstacle, not what you merely want." },
  { n: "Storms and circumstances", lvl: "declare", ref: "Mark 4:39–40; Ezek 37:4", d: "Jesus rebuked the wind and the sea, and asked his disciples why they had no faith. Ezekiel prophesied to dry bones, but only when God told him to. Speaking to circumstances follows God’s word and leading.", how: "Seek what God is saying, then declare it boldly." },
  { n: "Strongholds", lvl: "declare", ref: "2 Cor 10:3–5", d: "Paul’s strongholds are arguments and lofty opinions against the knowledge of God, located in the mind and culture. They fall when truth is proclaimed and “every thought” is taken captive to obey Christ.", how: "Confront lies with truth, in prayer, preaching, counsel and repentance." },
  { n: "Delays", lvl: "declare", ref: "Dan 10:12–13; Hab 2:3; John 11:6", d: "Some hindrance is spiritual: Daniel’s answer was resisted by “the prince of the kingdom of Persia” for twenty-one days, and Satan hindered Paul (1 Thess 2:18). But Daniel kept praying and fasting; he never addressed the prince. Some delays are God’s own timing: Jesus waited two days before going to Lazarus.", how: "Discern: persevere in prayer, stand on promises, and trust God’s timing." },
  { n: "Principalities over regions", lvl: "stand", ref: "Eph 6:13–18; Jude 8–10; Acts 19:18–20", d: "Scripture shows such powers are real (Dan 10), but never shows believers commanding them. Ephesians says “stand” and “pray”. Jude warns that even Michael did not pronounce a reviling judgment on the devil. In Ephesus the city changed as people repented and burned their books of magic.", how: "Pray, preach the gospel, walk in holiness and unity; avoid mocking or ‘mapping’ obsessions." },
  { n: "Satan himself", lvl: "stand", ref: "Matt 4:10; Jas 4:7; 1 Pet 5:8–9", d: "Jesus said, “Be gone, Satan!” Believers are told to resist him, firm in faith, and he flees. The New Testament never shows believers ‘binding Satan’ daily; Jesus bound the strong man, and Revelation reserves his final binding for God’s angel.", how: "Resist by submission to God, truth and faith; don’t engage in banter." },
  { n: "People", lvl: "no", ref: "Rom 12:14; Luke 9:54–56; Eph 6:12", d: "We never command, curse or ‘bind’ people. When the disciples wanted fire on a village, Jesus rebuked them. “Bless those who persecute you.” Our struggle is not against flesh and blood.", how: "Pray for people, bless them, and resist the evil influencing them." },
  { n: "God", lvl: "no", ref: "Isa 45:9; Matt 6:10; 1 John 5:14", d: "We command darkness; we ask God. Prayer is bold, persistent and even wrestling (Gen 32:26; Luke 18:1–8), but it is never ordering God around.", how: "Ask boldly “according to his will”, and trust him." }
];

/* 6 · Errors and extremes */
DATA.wf.spectrum = [
  { max: 15, t: "A demon behind everything", d: "Every problem is spiritual attack: blame shifted from the flesh and choices (Jas 1:14), medicine neglected, constant fear, shouting at the devil and endless deliverance. The devil becomes the centre of attention." },
  { max: 40, t: "Fascinated by the dark", d: "Real faith, but too much talk about demons and too little about Christ. “Do not rejoice in this, that the spirits are subject to you, but rejoice that your names are written in heaven” (Luke 10:20)." },
  { max: 60, t: "Sober, Christ-centred, Spirit-led", d: "“Be sober-minded; be watchful. Your adversary the devil prowls around … Resist him, firm in your faith” (1 Pet 5:8–9). Aware of the enemy, absorbed with Christ, using every means God gives: prayer, the word, holiness, community, medicine and authority in Jesus’ name." },
  { max: 85, t: "Quietly sceptical", d: "Belief in spiritual evil in theory, but no expectation of God’s power in practice. Prayer becomes vague; the church watches captives remain bound (Luke 13:16)." },
  { max: 101, t: "No spiritual realm at all", d: "Everything has a natural explanation; prayer against evil seems superstitious. But a quarter of Jesus’ recorded ministry involved deliverance, and Acts 10:38 sums up his work as “healing all who were oppressed by the devil”." }
];
DATA.wf.errors = [
  { t: "Volume as authority", ref: "Matt 8:16", d: "Jesus “cast out the spirits with a word”. Authority is not measured in decibels." },
  { t: "Jesus’ name as a magic formula", ref: "Acts 19:13–16", d: "The seven sons of Sceva used the name without relationship: “Jesus I know, and Paul I recognise, but who are you?”" },
  { t: "Blaming the devil for the flesh", ref: "Jas 1:14; Gal 5:19–21", d: "“Each person is tempted when he is lured and enticed by his own desire.” The flesh needs crucifying, not casting out." },
  { t: "Neglecting ordinary means", ref: "1 Tim 5:23; Col 4:14", d: "Paul prescribed wine for Timothy; Luke was “the beloved physician”. Medicine and prayer are not rivals." },
  { t: "Warfare instead of obedience", ref: "Jas 4:7; 1 Sam 15:22", d: "“Submit to God” comes before “resist the devil”. No prayer technique replaces repentance." },
  { t: "Reviling and mocking spirits", ref: "Jude 8–10; 2 Pet 2:10–11", d: "Even Michael said only, “The Lord rebuke you.” Bravado is not authority." },
  { t: "Fear of the devil", ref: "1 John 4:4; 2 Tim 1:7", d: "“He who is in you is greater than he who is in the world.” God has not given us a spirit of fear." },
  { t: "Fighting people", ref: "Eph 6:12; 2 Cor 10:3–4", d: "Calling opponents demons, or praying curses on them, mistakes the battlefield." }
];

/* 7 · Sons, priests, kings in battle */
DATA.wf.roles = [
  { id: "son", n: "As sons", c: "var(--accent)", core: "Fight from identity, not for it", ref: "Matt 3:17–4:3; Rom 8:15–16", d: "The Father said, “This is my beloved Son.” The very next scene, the tempter begins, “If you are the Son of God …”. The first attack is always on identity. Sons rest in the Father’s love, so accusation and fear lose their grip.", acts: ["Know who you are in Christ (Eph 1:3–14)", "Cry “Abba, Father” (Gal 4:6)", "Overcome accusation by the blood (Rev 12:10–11)"] },
  { id: "priest", n: "As priests", c: "var(--eden)", core: "Stand in the gap", ref: "Ezek 22:30; Num 16:46–48; Exod 17:11–12", d: "God looked for someone to “stand in the breach”. Aaron ran with his censer between the living and the dead, and the plague stopped. While Moses’ hands were raised, Joshua prevailed in the valley. Priestly intercession turns battles.", acts: ["Pray at all times in the Spirit (Eph 6:18)", "Intercede for leaders (1 Tim 2:1–2)", "Worship as warfare (2 Chr 20:21–22)"] },
  { id: "king", n: "As kings", c: "var(--babel)", core: "Enforce the King’s decrees", ref: "Luke 10:19; Ps 149:6–9; Rom 5:17", d: "Kings rule by decree. Authority over the power of the enemy is given; Psalm 149 pictures God’s people with “the high praises of God in their throats and two-edged swords in their hands … to execute on them the judgment written”. We enforce what is written, not what we invent.", acts: ["Speak the written word (Matt 4:4)", "Bind and loose what heaven has settled (Matt 16:19)", "Rule yourself first (Prov 16:32)"] }
];

/* 8 · Wilderness temptation */
DATA.wf.temptations = [
  { attack: "“If you are the Son of God, command these stones to become loaves of bread.”", target: "Appetite and identity", answer: "“It is written, ‘Man shall not live by bread alone, but by every word that comes from the mouth of God.’”", ref: "Matt 4:3–4; Deut 8:3" },
  { attack: "“If you are the Son of God, throw yourself down, for it is written …”", target: "Presumption, with Scripture twisted", answer: "“Again it is written, ‘You shall not put the Lord your God to the test.’”", ref: "Matt 4:5–7; Deut 6:16" },
  { attack: "“All these I will give you, if you will fall down and worship me.”", target: "Power without the cross", answer: "“Be gone, Satan! For it is written, ‘You shall worship the Lord your God and him only shall you serve.’”", ref: "Matt 4:8–10; Deut 6:13" }
];

/* 9 · Battle rhythm */
DATA.wf.rhythm = [
  { t: "Submit", ref: "Jas 4:7", d: "Begin with surrender to God. Confess and turn from known sin; close every open door (Eph 4:27)." },
  { t: "Put on the armour", ref: "Eph 6:13–17", d: "Truth, righteousness, peace, faith, salvation and the word: put on Christ himself (Rom 13:14)." },
  { t: "Stand", ref: "Eph 6:11, 13, 14", d: "Paul says “stand” four times. The posture is holding ground already won, not chasing the enemy." },
  { t: "Pray in the Spirit", ref: "Eph 6:18; Jude 20", d: "Pray at all times, for all the saints, with perseverance." },
  { t: "Speak the word", ref: "Matt 4:4; Rev 12:11", d: "Answer every lie with “It is written”, and testify to what the blood has done." },
  { t: "Resist and command", ref: "Jas 4:7; Acts 16:18", d: "Resist firmly; where Scripture shows it, command in Jesus’ name, calmly and briefly." },
  { t: "Praise and give thanks", ref: "2 Chr 20:21–22; Ps 149:6", d: "Jehoshaphat put the singers in front of the army; when they began to praise, the LORD set an ambush." }
];

/* 10 · Objections */
DATA.wf.objections = [
  { k: "serious", q: "“Only Jesus and the apostles had authority over demons.”", refs: "Luke 10:17–19; Mark 16:17; Acts 8:6–7",
    not: "No one is claiming every believer has an apostle’s foundational role.",
    a: "Jesus sent seventy-two ordinary disciples, not just the Twelve, and they returned saying the demons were subject to them. Philip, a table-server, cast out spirits in Samaria. Every believer is told to “resist the devil” (Jas 4:7) and to stand in God’s armour (Eph 6). Authority belongs to sons in Christ’s name." },
  { k: "serious", q: "“We should only talk to God, never to the devil, demons or sickness.”", refs: "Matt 4:10; Luke 4:39; Acts 16:18; Mark 11:23",
    not: "No one is saying we should hold conversations with demons or neglect prayer to God.",
    a: "Most New Testament spiritual warfare is prayer to God, truth and holiness. But the record also shows direct address: Jesus said “Be gone, Satan”, rebuked a fever, and spoke to a fig tree; Paul commanded a spirit to leave; Jesus taught his disciples to say to the mountain, “be taken up”. Both are biblical; neither replaces the other." },
  { k: "straw", q: "“So we can name and claim whatever we want.”", refs: "Mark 11:22; 1 John 5:14; Matt 16:19",
    not: "This is a misrepresentation of biblical authority.",
    a: "Mark 11 begins, “Have faith in God”, not faith in our words. We ask “according to his will”. Binding and loosing is in the future perfect: what “shall have been bound” in heaven. Authority enforces what God has said; it never manufactures what we prefer." },
  { k: "serious", q: "“Christians should bind Satan every day and command territorial spirits over cities.”", refs: "Matt 12:29; Rev 20:1–3; Dan 10; Jude 9",
    not: "No one denies spiritual powers over nations are real, or that prayer for cities matters.",
    a: "Jesus bound the strong man, and Revelation gives the final binding of Satan to an angel from heaven. Daniel saw a prince over Persia, but he prayed and fasted; he did not address it. Ephesians 6 says stand and pray. Cities changed in Acts through the gospel, repentance and the burning of occult books (Acts 19:18–20). Pray boldly for cities; avoid reviling powers or turning maps of demons into a method." },
  { k: "serious", q: "“Every delay is the devil.”", refs: "Hab 2:3; John 11:6; Gal 4:4; Dan 10:12–13",
    not: "No one denies that some hindrances are demonic.",
    a: "Some are: Daniel’s answer was resisted, and Satan hindered Paul. But Jesus deliberately waited two days before going to Lazarus, and God sent his Son “when the fullness of time had come”. “If it seems slow, wait for it; it will surely come.” Discern before you rebuke; persevere either way." },
  { k: "serious", q: "“Sickness is always from the devil, so if you are not healed you lacked faith.”", refs: "Luke 13:11, 16; 2 Tim 4:20; 2 Cor 12:7–9; John 9:2–3",
    not: "No one disputes that God heals or that we should pray boldly for healing.",
    a: "Some sickness is demonic (Luke 13:16), some is natural (Paul left Trophimus ill), and Paul’s thorn was not removed even though he prayed three times. Jesus refused to blame the man born blind. Pray with faith and expectation, use medicine, and never heap condemnation on the sick." },
  { k: "serious", q: "“Christians can be possessed by demons.” / “Christians can’t be touched at all.”", refs: "Eph 1:13; 1 John 5:18; Eph 4:27; 2 Cor 11:3",
    not: "Both extremes are being rejected here.",
    a: "A believer belongs to Christ, is sealed with the Spirit, and “the evil one does not touch him” in the sense of owning him. Yet believers can “give opportunity to the devil”, be deceived, oppressed and tempted. Avoid “possession” language for Christians; freedom from footholds comes through repentance, truth, prayer and, where needed, ministry in Jesus’ name." },
  { k: "straw", q: "“Believing in demons is primitive superstition.”", refs: "Mark 1:34; Acts 10:38; Eph 6:12",
    not: "This dismisses a central strand of the New Testament.",
    a: "Jesus’ ministry is summed up as “healing all who were oppressed by the devil”, and casting out demons was a regular part of it. Paul writes that our struggle is against spiritual forces. Christians across the world today, especially in the Global South, report the same realities. The question is not whether, but how, to respond biblically." },
  { k: "serious", q: "“If we have authority, we should win every battle in this life.”", refs: "Rev 12:11; Heb 11:35–39; 2 Cor 4:8–10",
    not: "No one is denying victory; the question is what victory looks like.",
    a: "“They have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.” Some by faith shut lions’ mouths; others by faith were sawn in two. Victory includes faithfulness under suffering. The war is won; some battles are won by enduring." }
];

DATA.wf.study = [
  { t: "The battlefield", q: ["Read Ephesians 1:19–2:6 before 6:10–18. How does knowing where Christ is seated change how we fight?", "Who is not our enemy, according to Ephesians 6:12? Where do you need to change your target?"] },
  { t: "Authority", q: ["What is the difference between exousia (authority) and dynamis (power) in Luke 10:19 and Acts 1:8?", "Why did the centurion understand authority so well (Matt 8:8–10)?"] },
  { t: "Speaking", q: ["Using the “Can we speak to it?” map, which items have clear New Testament examples, and which do not?", "How does Mark 11:22–24 keep “speaking to the mountain” anchored in God?"] },
  { t: "Balance", q: ["Where on the spectrum have you been: a demon behind everything, or no spiritual realm at all?", "Write your own battle rhythm for this week from Ephesians 6 and James 4:7."] }
];
DATA.wf.memory = [
  ["Ephesians 6:12", "“For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.”"],
  ["Luke 10:19", "“Behold, I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.”"],
  ["James 4:7", "“Submit yourselves therefore to God. Resist the devil, and he will flee from you.”"],
  ["2 Corinthians 10:4–5", "“The weapons of our warfare are not of the flesh but have divine power to destroy strongholds … and take every thought captive to obey Christ.”"],
  ["Matthew 28:18", "“All authority in heaven and on earth has been given to me.”"],
  ["Revelation 12:11", "“They have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death.”"]
];

DATA.quiz.push(
  { q: "According to Ephesians 6:12, who is NOT our enemy?", a: ["Rulers and authorities", "Flesh and blood", "Spiritual forces of evil", "Cosmic powers"], c: 1, x: "“We do not wrestle against flesh and blood.” People are never the enemy." },
  { q: "In Luke 10:19, Jesus gives authority (exousia) over…", a: ["Other believers", "All the power (dynamis) of the enemy", "God’s timing", "Governments"], c: 1, x: "Authority (the right) over the enemy’s power (ability)." },
  { q: "What did Jesus answer each temptation with in Matthew 4?", a: ["A miracle", "Silence", "“It is written”", "A rebuke of the angels"], c: 2, x: "Three times, Scripture from Deuteronomy: the sword of the Spirit in action." }
);
DATA.web.nodes.push({ id: "warfare", n: "Spiritual warfare", g: 4, d: "Standing in Christ’s finished victory: authority over the enemy, exercised by sons, priests and kings through truth, prayer and the word." });
DATA.web.edges.push(
  ["warfare", "serpent", "Crushing the serpent under our feet (Rom 16:20)"],
  ["warfare", "keys", "Binding and loosing (Matt 16:19; 12:29)"],
  ["warfare", "kingpriest", "Sons, priests and kings in battle"],
  ["warfare", "jesus", "He disarmed the powers (Col 2:15)"]
);
Object.assign(DATA.images, {
  michael: { file: "Le_Grand_Saint_Michel,_by_Raffaello_Sanzio,_from_C2RMF_retouched.jpg", cap: "Raphael, <i>Saint Michael Vanquishing Satan</i> (1518), Louvre. Jude 9 and Revelation 12:7–9.", ar: "3/4", art: "serpent" }
});

/* 11 · Speaking over our lives: the power of declaration */
DATA.wf.tongue = [
  { id: "create", x: 450, y: 40, c: "accent", t: "God creates by speaking", ref: "Gen 1:3; Heb 11:3; Ps 33:6", d: "“And God said, ‘Let there be light,’ and there was light.” The worlds were framed by the word of God. Made in his image, we are the only creatures who speak words that shape what follows." },
  { id: "tongue", x: 450, y: 130, c: "eden", t: "Death and life are in the tongue", ref: "Prov 18:21; Jas 3:2–10; Matt 12:36–37", d: "“Death and life are in the power of the tongue, and those who love it will eat its fruits.” James compares the tongue to a ship’s rudder and a spark that sets a forest alight. Words steer lives." },
  { id: "faith", x: 450, y: 230, c: "babel", t: "Faith believes, then speaks", ref: "2 Cor 4:13; Rom 10:9–10; Ps 116:10", d: "“I believed, and so I spoke; we also believe, and so we also speak.” Confession (homologeō, “to say the same thing”) means saying what God has already said. It is agreement, not invention." },
  { id: "call", x: 230, y: 330, c: "eden", t: "Calling things that are not as though they were", ref: "Rom 4:17–21; Gen 17:5", d: "God called Abram “father of many nations” before Isaac was born, and Abraham believed “the God who … calls into existence the things that do not exist”. He was “fully convinced that God was able to do what he had promised”." },
  { id: "decree", x: 670, y: 330, c: "eden", t: "Decree and it will be established", ref: "Job 22:28; Isa 44:26; Num 14:28", d: "“You will decide (decree) on a matter, and it will be established for you.” God “confirms the word of his servant”. The flip side is sobering: “as you have said in my hearing I will do to you” (Num 14:28): Israel’s unbelieving words became their outcome." },
  { id: "prophesy", x: 450, y: 430, c: "accent", t: "Prophesy over your life", ref: "1 Tim 1:18; Ezek 37:4–10; 1 Cor 14:3", d: "Paul charged Timothy, “in accordance with the prophecies previously made about you … wage the good warfare.” Ezekiel prophesied to bones and to breath. Prophecy builds up, encourages and comforts; we fight with the words God has spoken over us." }
];
DATA.wf.tongueEdges = [["create", "tongue"], ["tongue", "faith"], ["faith", "call"], ["faith", "decree"], ["call", "prophesy"], ["decree", "prophesy"]];

/* Declaration builder: area → promise → declaration */
DATA.wf.declare = [
  { id: "identity", n: "Identity", ref: "Eph 1:3–7; 2 Cor 5:17; 1 Pet 2:9", promise: "“If anyone is in Christ, he is a new creation.” “You are a chosen race, a royal priesthood.”", say: "I am a new creation in Christ, chosen, forgiven and seated with him. I am a son of God and part of his royal priesthood. I will not live from accusation; I live from his love." },
  { id: "fear", n: "Fear and anxiety", ref: "2 Tim 1:7; Isa 41:10; Phil 4:6–7", promise: "“God gave us a spirit not of fear but of power and love and self-control.”", say: "God has not given me a spirit of fear. In Jesus’ name I refuse fear and torment. The peace of God guards my heart and mind in Christ Jesus." },
  { id: "family", n: "Family and children", ref: "Isa 54:13; Acts 16:31; Ps 128:3", promise: "“All your children shall be taught by the LORD, and great shall be the peace of your children.”", say: "My household belongs to the Lord. My children will be taught by the LORD and great will be their peace. As for me and my house, we will serve the LORD." },
  { id: "health", n: "Health and healing", ref: "Isa 53:4–5; Ps 103:2–3; Jas 5:14–15", promise: "“He was pierced for our transgressions … and with his wounds we are healed.”", say: "Jesus bore my sins and carried my sicknesses. I receive his healing and life in my body. I will pray, use wisdom and trust him, and I will bless the Lord who heals all my diseases." },
  { id: "provision", n: "Provision and work", ref: "Phil 4:19; Deut 8:18; 2 Cor 9:8", promise: "“My God will supply every need of yours according to his riches in glory in Christ Jesus.”", say: "My God supplies every need of mine in Christ. He gives me power to produce wealth for his covenant. I will work with diligence and give with joy, and I will abound in every good work." },
  { id: "calling", n: "Calling and future", ref: "Jer 29:11; Phil 1:6; Eph 2:10", promise: "“He who began a good work in you will bring it to completion at the day of Jesus Christ.”", say: "I am God’s workmanship, created for good works he prepared beforehand. He who began a good work in me will complete it. My times are in his hand; I will walk in what he has prepared." },
  { id: "battle", n: "Under attack", ref: "Isa 54:17; Rom 8:31; Luke 10:19", promise: "“No weapon that is fashioned against you shall succeed, and you shall refute every tongue that rises against you in judgment.”", say: "No weapon formed against me will prosper, and every tongue raised against me in judgment I condemn by the word of God. If God is for me, who can be against me? I stand in Christ’s victory." }
];

/* Biblical declaration vs positive thinking vs magic */
DATA.wf.compare = {
  cols: ["Biblical declaration", "Positive thinking", "Magic and witchcraft"],
  rows: [
    ["Source", "What God has said (Rom 10:17)", "What I want to be true", "Hidden power I can manipulate"],
    ["Centre", "God and his will (1 John 5:14)", "Me and my mindset", "Me and my control"],
    ["Power", "The Spirit, through faith", "Psychology", "Spirits, rituals, formulas"],
    ["Posture", "Submission and trust", "Self-reliance", "Domination and manipulation"],
    ["Towards people", "Blessing, even enemies (Rom 12:14)", "Neutral", "Cursing, binding, controlling others"],
    ["When it doesn’t happen", "Keep trusting; God is good (Hab 3:17–18)", "Try harder; blame yourself", "Bigger ritual, more fear"]
  ]
};

/* 12 · Curses, witchcraft and bondages */
DATA.wf.curseLine = [
  { t: "Curse enters", ref: "Gen 3:14–17", d: "The ground is cursed because of sin. The curse is the fruit of separation from God, not a random force." },
  { t: "Blessing over Abraham", ref: "Gen 12:3", d: "“I will bless those who bless you, and him who dishonours you I will curse.” God sets his blessing as a covering over his people." },
  { t: "Balaam cannot curse", ref: "Num 23:8, 23; Deut 23:5", d: "“How can I curse whom God has not cursed?” “There is no enchantment against Jacob, no divination against Israel.” God “turned the curse into a blessing for you, because the LORD your God loved you”." },
  { t: "Blessings and curses of the covenant", ref: "Deut 28; 30:19", d: "Under the old covenant, obedience brought blessing and disobedience the curse. “I have set before you life and death, blessing and curse. Therefore choose life.”" },
  { t: "No causeless curse", ref: "Prov 26:2", d: "“Like a sparrow in its flitting, like a swallow in its flying, a curse that is causeless does not alight.” Curses need a landing place." },
  { t: "The fathers and the sons", ref: "Exod 20:5–6; Ezek 18:20; Jer 31:29–30", d: "Patterns pass to those “who hate me”, but mercy to thousands. Ezekiel insists, “the son shall not suffer for the iniquity of the father”. Each person who turns to God is free." },
  { t: "Christ became a curse for us", ref: "Gal 3:13–14", d: "“Christ redeemed us from the curse of the law by becoming a curse for us … so that in Christ Jesus the blessing of Abraham might come to the Gentiles.” The cross is the end of the curse for those in him." },
  { t: "Witchcraft exposed in Acts", ref: "Acts 8:9–24; 13:8–12; 16:16–18; 19:18–20", d: "Simon the sorcerer was confronted; Elymas the magician was struck blind by Paul’s word; a spirit of divination was cast out; new believers in Ephesus confessed their practices and burned their magic books." },
  { t: "No more curse", ref: "Rev 22:3", d: "“No longer will there be anything accursed.” The story ends where Eden began: God’s presence, the tree of life and no curse." }
];
DATA.wf.curseLevels = { yes: ["Yes: break and renounce in Jesus’ name", "var(--eden)"], deal: ["Yes, with repentance and truth", "var(--accent)"], care: ["Discern: not every trouble is a curse", "var(--babel)"], no: ["Never: that is witchcraft", "var(--flame)"] };
DATA.wf.curseTargets = [
  { n: "Witchcraft and sorcery against you", lvl: "yes", ref: "Isa 54:17; Num 23:23; Acts 13:8–12; Luke 10:19", d: "Scripture treats witchcraft as real but defeated. “No weapon fashioned against you shall succeed.” “There is no enchantment against Jacob.” Paul confronted Elymas directly when he opposed the gospel.", how: "Stand under the blood, refuse fear, rebuke the work of darkness in Jesus’ name, and bless the people involved (Rom 12:14)." },
  { n: "Occult involvement (yours or your family’s)", lvl: "deal", ref: "Acts 19:18–20; Deut 18:10–12; 2 Cor 4:2", d: "Divination, mediums, spells, charms and occult objects are forbidden because they open the door to spiritual bondage. In Ephesus believers “came, confessing and divulging their practices” and burned their books publicly.", how: "Confess, renounce by name, destroy objects, receive forgiveness and ask for prayer if bondage remains." },
  { n: "Bondages and addictions", lvl: "deal", ref: "Luke 13:16; Isa 58:6; John 8:31–36; Gal 5:1", d: "Jesus loosed a daughter of Abraham whom “Satan bound for eighteen years”. God’s chosen fast is “to loose the bonds of wickedness … and to break every yoke”. “If the Son sets you free, you will be free indeed.”", how: "Truth, repentance, deliverance prayer in Jesus’ name, and ongoing discipleship and accountability (Jas 5:16)." },
  { n: "Generational patterns", lvl: "deal", ref: "Exod 20:5–6; Ezek 18:1–20; Neh 9:2; 2 Cor 5:17", d: "Families pass on sins, wounds and patterns, but Ezekiel rejects fatalism: each person who turns lives. Nehemiah’s people “confessed their sins and the iniquities of their fathers”. In Christ you are a new creation.", how: "Acknowledge the pattern, confess, renounce agreement with it, and build new habits in a new family: the church." },
  { n: "Word curses and inner vows", lvl: "deal", ref: "Prov 18:21; Matt 5:33–37; Isa 54:17", d: "Words spoken over us (“you’ll never amount to anything”) or by us (“I’ll never trust anyone again”) can become lies we live by. Isaiah says we will “refute every tongue that rises against you in judgment”.", how: "Forgive the speaker, renounce the lie, and replace it with what God says about you." },
  { n: "Every hardship as a curse", lvl: "care", ref: "John 9:2–3; Prov 26:2; Jas 1:2–4; 2 Cor 12:7–10", d: "When the disciples assumed a curse behind blindness, Jesus answered, “neither this man sinned, nor his parents.” Some trials are testing, some are the fallen world, some are consequences, some are attacks.", how: "Ask God for wisdom before you assign a cause; don’t live in suspicion of relatives or neighbours." },
  { n: "Cursing, ‘binding’ or ‘sending back fire’ on people", lvl: "no", ref: "Rom 12:14; Luke 6:28; Luke 9:54–55; Jas 3:9–10", d: "“Bless those who persecute you; bless and do not curse them.” When disciples wanted fire on a Samaritan village, Jesus rebuked them. Prayers that harm or control people use the methods of witchcraft with Christian words.", how: "Rebuke the darkness, never the person. Pray for their salvation and blessing." }
];
/* Freedom flowchart (viewBox 900 × 560) */
DATA.wf.free = [
  { id: "trouble", x: 450, y: 40, t: "Trouble, oppression or a pattern", ref: "Prov 26:2", c: "flame", d: "Start here: something keeps hindering you. Before naming it, remember that a causeless curse does not land." },
  { id: "ask", x: 450, y: 130, t: "Ask God: is there a cause or an open door?", ref: "Ps 139:23–24; Jas 1:5", c: "babel", d: "“Search me, O God, and know my heart.” Ask for wisdom; God gives generously and without reproach." },
  { id: "door", x: 220, y: 230, t: "An open door: sin, occult, unforgiveness", ref: "Eph 4:26–27; Matt 18:34–35", c: "flame", d: "Anger left unresolved gives “opportunity (topos, a place) to the devil”. Unforgiveness hands people over to tormentors." },
  { id: "attack", x: 680, y: 230, t: "No open door: an attack or a trial", ref: "1 Pet 5:8–10; Eph 6:13", c: "babel", d: "Sometimes you are simply under attack, or in a season of testing. Resist, stand and endure." },
  { id: "repent", x: 220, y: 330, t: "Confess, forgive, renounce", ref: "1 John 1:9; Acts 19:18–19; 2 Cor 4:2", c: "eden", d: "Confess sin, forgive those who hurt you, and renounce every agreement with darkness by name. Destroy occult objects." },
  { id: "resist", x: 680, y: 330, t: "Resist, firm in faith", ref: "Jas 4:7; 1 Pet 5:9", c: "eden", d: "Submit to God, resist the devil and he will flee. Refuse fear." },
  { id: "break", x: 450, y: 430, t: "Break it in Jesus’ name, by the blood", ref: "Gal 3:13; Col 2:14–15; Rev 12:11", c: "accent", d: "Declare what the cross has done: Christ became the curse, cancelled the record of debt and disarmed the powers. In his name, command every bondage to break and every spirit to leave." },
  { id: "fill", x: 450, y: 516, t: "Be filled, bless and walk free", ref: "Luke 11:24–26; Eph 5:18; Gal 5:1", c: "accent", d: "An empty house invites return. Be filled with the Spirit, stay in community, keep blessing people, and “stand firm … do not submit again to a yoke of slavery”." }
];
DATA.wf.freeEdges = [["trouble", "ask"], ["ask", "door"], ["ask", "attack"], ["door", "repent"], ["attack", "resist"], ["repent", "break"], ["resist", "break"], ["break", "fill"]];
/* Biblical vocabulary for “cancel” and “break” */
DATA.wf.verbs = [
  { w: "epitimaō", t: "Rebuke", ref: "Mark 9:25; Luke 4:39; Jude 9", d: "Jesus rebuked unclean spirits, fevers and storms. Michael said, “The Lord rebuke you”: rebuke rests on God’s authority, not ours." },
  { w: "exaleiphō", t: "Cancel · blot out", ref: "Col 2:14", d: "God “cancelled the record of debt that stood against us … nailing it to the cross”. We announce a cancellation God has already made." },
  { w: "lyō", t: "Loose · break", ref: "Matt 16:19; Luke 13:16; 1 John 3:8", d: "“The Son of God appeared to destroy (lysē, undo) the works of the devil.” The same verb is used for loosing in Matthew 16." },
  { w: "apeipon", t: "Renounce", ref: "2 Cor 4:2; Titus 2:12", d: "“We have renounced disgraceful, underhanded ways.” Renouncing is a decisive verbal break with what we once agreed with." },
  { w: "eulogeō", t: "Bless", ref: "Rom 12:14; 1 Pet 3:9", d: "Our counter-weapon is blessing: “do not repay evil for evil or reviling for reviling, but on the contrary, bless.”" }
];

DATA.wf.objections.push(
  { k: "serious", q: "“Words are just words; declaring Scripture over yourself is mind over matter.”", refs: "Prov 18:21; Rom 4:17; 2 Cor 4:13",
    not: "No one is claiming that words have power in themselves apart from God.",
    a: "Scripture says death and life are in the power of the tongue, and that God “confirms the word of his servant”. The power is not psychological but covenantal: speaking what God has said in faith is agreement with him. Abraham was named “father of many” before it was visible because God had said it." },
  { k: "straw", q: "“Declaring is just the prosperity gospel: speak it and you get it.”", refs: "Mark 11:22; 1 John 5:14–15; Jas 4:13–16",
    not: "This confuses biblical confession with a formula.",
    a: "Biblical declaration starts with “Have faith in God”, is bounded by his will and humbly says “if the Lord wills”. It covers identity, holiness, mission and endurance far more than possessions. The test is whether it centres God’s promise or my appetite." },
  { k: "serious", q: "“Christians can’t be cursed, so breaking curses is unnecessary.”", refs: "Gal 3:13; Num 23:8; Prov 26:2; Acts 19:18–19; Eph 4:27",
    not: "No one is denying that Christ has redeemed us from the curse.",
    a: "Exactly: because Christ became the curse, believers can stand free. But Scripture also shows believers who still had occult practices to renounce (Acts 19) and footholds they could give the devil (Eph 4:27). Breaking a curse is not adding to the cross; it is applying the cross to an area not yet surrendered." },
  { k: "serious", q: "“Generational curses mean I’m doomed to repeat my family’s sin.”", refs: "Ezek 18:20; 2 Cor 5:17; Exod 20:6",
    not: "Family patterns are real; the question is whether they are destiny.",
    a: "Ezekiel 18 was written to refute that fatalism: “the soul who sins shall die … the son shall not suffer for the iniquity of the father.” God shows mercy to thousands. In Christ you are a new creation and have a new Father." },
  { k: "straw", q: "“If someone curses me, I should send the curse back on them.”", refs: "Rom 12:14; Luke 6:28; Luke 9:55",
    not: "This takes the methods of witchcraft into prayer.",
    a: "Jesus said, “Bless those who curse you, pray for those who abuse you.” We break the power of a curse by Christ’s authority and then bless the person. Turning curses back on people is retaliation, not kingdom authority." },
  { k: "serious", q: "“Talking about witchcraft just breeds fear and superstition.”", refs: "1 John 4:4; Col 2:15; Acts 13:9–12; Gal 5:20",
    not: "Fearful obsession with witchcraft is indeed a problem.",
    a: "The New Testament names sorcery as real (Gal 5:20; Acts 8; 13; 16; 19) but never fears it: Christ disarmed the powers, and “he who is in you is greater”. Silence leaves people in fear; teaching that is soberly biblical sets them free." }
);
DATA.wf.study.push({ t: "Words and curses", q: ["Write three declarations for your life, each anchored in a specific promise. Which part of the builder helped most?", "Read Proverbs 26:2 and Galatians 3:13 together. What do they teach about curses for someone in Christ?", "Is there anything you need to renounce (Acts 19:18–19) or anyone you need to bless (Rom 12:14)?"] });
DATA.wf.memory.push(
  ["Proverbs 18:21", "“Death and life are in the power of the tongue, and those who love it will eat its fruits.”"],
  ["Galatians 3:13", "“Christ redeemed us from the curse of the law by becoming a curse for us.”"],
  ["Isaiah 54:17", "“No weapon that is fashioned against you shall succeed, and you shall refute every tongue that rises against you in judgment.”"]
);
DATA.quiz.push({ q: "According to Proverbs 26:2, a curse that is causeless…", a: ["Always lands eventually", "Does not alight", "Returns to the sender", "Lasts three generations"], c: 1, x: "“Like a sparrow in its flitting … a curse that is causeless does not alight.”" });

;DATA.quiz.forEach(q => { q.part = q.part || "warfare"; });

/* Part IX: Heaven and earth united — the body of Christ and the manifestation of the sons */
DATA.sn = {};

/* 1 · Ephesians 1:10 — heaven and earth through the story (overlap 0–1) */
DATA.sn.merge = [
  { t: "Eden", ov: .62, ref: "Gen 2:8–15; 3:8", page: "garden.html", d: "Heaven and earth overlapped in a garden-temple. God walked with Adam “in the cool of the day”. Eden was the beachhead, never meant to stay small: the mandate was to fill the earth." },
  { t: "The fall and Babel", ov: .04, ref: "Gen 3:23–24; 11:1–9", page: "babel.html", d: "Exiled, guarded by cherubim. At Babel people tried to force the overlap from below with a tower “with its top in the heavens”. Heaven and earth were pulled apart." },
  { t: "Bethel, Sinai and the tabernacle", ov: .24, ref: "Gen 28:12–17; Exod 25:8–9; 40:34", page: "garden.html", d: "God opened thin places: a stairway at Bethel, fire on Sinai, then a tent where his glory filled the earth in one small room. “Let them make me a sanctuary, that I may dwell in their midst.”" },
  { t: "The temple", ov: .3, ref: "1 Kgs 8:10–11, 27; Isa 6:1–3", page: "garden.html", d: "Solomon’s temple, decorated as Eden, was heaven’s embassy in Jerusalem. Even so, “heaven and the highest heaven cannot contain you”. Isaiah saw the train of God’s robe fill the temple and heard, “the whole earth is full of his glory”." },
  { t: "The Word became flesh", ov: .55, ref: "John 1:14, 51; Col 2:9", page: "serpent.html", d: "“The Word became flesh and tabernacled among us.” In Jesus heaven and earth met in a person: “the whole fullness of deity dwells bodily”. He is Jacob’s ladder: angels ascend and descend on the Son of Man." },
  { t: "The cross and the torn veil", ov: .66, ref: "Matt 27:51; Col 1:20; Eph 2:14–16", page: "kings.html", d: "The veil that separated the holy of holies tore from top to bottom. Through the blood of his cross God reconciled “all things, whether on earth or in heaven”. The dividing wall came down." },
  { t: "Ascension and Pentecost", ov: .76, ref: "Acts 1:9–11; 2:1–4; Eph 4:8–10", page: "babel.html", d: "A man now sits on heaven’s throne, and heaven’s fire sits on people’s heads. Babel reversed: God came down so that his people could be his temple across every language." },
  { t: "The church, his body", ov: .84, ref: "Eph 1:22–23; 2:19–22; 2 Cor 6:16", page: "prophets.html", d: "“The church, which is his body, the fullness of him who fills all in all.” Believers are “a dwelling place for God by the Spirit”, living stones where heaven touches earth wherever they go." },
  { t: "All things united in him", ov: 1, ref: "Eph 1:10; Rev 21:1–3; 22:1–5", page: "connections.html", d: "“The dwelling place of God is with man.” New Jerusalem comes down; the whole creation becomes the holy of holies. This was the plan from the beginning, and every step of history moves toward it." }
];

/* 2 · The word anakephalaiōsis */
DATA.sn.word = {
  w: "anakephalaiōsasthai", tr: "to sum up · to head up · to unite under one head",
  parts: [["ana", "again, back up"], ["kephalē", "head"], ["-aioō", "bring together"]],
  d: "Paul’s word in Ephesians 1:10 pictures adding up a column of figures and writing the total at the head, or gathering scattered threads into one knot. Everything in heaven and everything on earth is brought together under Christ as head. Ephesians 1:22 uses the same root: God gave him as “head (kephalē) over all things to the church, which is his body”."
};

/* 3 · Every part of the study, summed up in Christ */
DATA.sn.hub = [
  { n: "I", t: "The Garden-Temple", f: "garden.html", c: "eden", d: "Eden was where heaven and earth first overlapped. Ephesians 1:10 is Eden filling the whole earth." },
  { n: "II", t: "The Serpent and the Seed", f: "serpent.html", c: "flame", d: "The serpent broke the union; the seed crushes his head and restores it (Gen 3:15; Rom 16:20)." },
  { n: "III", t: "Babel and the City of God", f: "babel.html", c: "babel", d: "Babel forced union from below; God’s city comes down from above (Rev 21:2)." },
  { n: "IV", t: "Kings and Priests", f: "kings.html", c: "accent", d: "Priests carry earth to heaven; kings carry heaven’s rule to earth. Sons do both (Rev 5:10)." },
  { n: "V", t: "Prophets and the Fivefold", f: "prophets.html", c: "eden", d: "The fivefold equip the body “to the measure of the stature of the fullness of Christ” (Eph 4:13)." },
  { n: "VI", t: "The Keys", f: "keys.html", c: "accent", d: "Keys open earth to heaven’s decisions: “on earth as it is in heaven” (Matt 16:19; 6:10)." },
  { n: "VII", t: "Sowing and Reaping", f: "sowing.html", c: "eden", d: "The kingdom grows like seed until it fills the earth (Matt 13:31–33; Dan 2:35)." },
  { n: "VIII", t: "Spiritual Warfare", f: "warfare.html", c: "flame", d: "We fight from heavenly places, enforcing Christ’s headship over every power (Eph 1:21–22)." }
];

/* 4 · God's initial plan: expanding Eden */
DATA.sn.expand = [
  { t: "A garden in the east", r: 26, ref: "Gen 2:8, 15", d: "God plants a garden on his mountain and places the man there “to work it and keep it”: priestly service in a sanctuary." },
  { t: "Fill the earth and subdue it", r: 70, ref: "Gen 1:26–28", d: "The image-bearers are blessed to be fruitful, multiply and fill the earth. In practice that means extending the garden’s order and God’s presence outward." },
  { t: "Through Abraham, all families", r: 112, ref: "Gen 12:1–3; 22:17–18", d: "After the fall and Babel, God restarts with one family: “in you all the families of the earth shall be blessed.”" },
  { t: "The glory fills the earth", r: 160, ref: "Num 14:21; Isa 11:9; Hab 2:14", d: "“The earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea.” The prophets saw Eden’s goal restated." },
  { t: "The stone becomes a mountain", r: 200, ref: "Dan 2:34–35, 44; Matt 13:31–33", d: "A stone cut without hands strikes the empires and “became a great mountain and filled the whole earth”. Jesus’ kingdom grows like a mustard seed and leaven." },
  { t: "A garden-city covers the world", r: 240, ref: "Rev 21:1–3, 16; 22:1–2", d: "The New Jerusalem is a cube, like the holy of holies, with the river and tree of life. The garden has become a city that fills the new creation." }
];

/* 5 · Romans 8:19 — the manifestation of the sons */
DATA.sn.reveal = [
  { t: "Creation groans", ref: "Rom 8:20–22", d: "Creation was “subjected to futility” and is in “bondage to corruption”. It groans like a woman in labour: pain with a promise." },
  { t: "Eager longing", ref: "Rom 8:19", d: "Apokaradokia: craning the neck, watching with outstretched head. Creation waits “for the revealing (apokalypsis) of the sons (huioi) of God”." },
  { t: "Sons led by the Spirit", ref: "Rom 8:14–17", d: "“All who are led by the Spirit of God are sons of God.” Sonship is revealed now as the Spirit leads, and as we cry “Abba! Father!”" },
  { t: "We groan too", ref: "Rom 8:23–27", d: "We have the firstfruits of the Spirit and wait for “adoption as sons, the redemption of our bodies”. The Spirit himself groans in intercession through us." },
  { t: "Glory revealed", ref: "Rom 8:18, 21, 29–30", d: "Creation “will be set free … and obtain the freedom of the glory of the children of God.” Sons are conformed to the image of the Son: the firstborn among many brothers." }
];
DATA.sn.notThis = [
  ["Not an elite", "Every believer led by the Spirit is a son (Rom 8:14; Gal 3:26). There is no special class of “manifested sons” above the body."],
  ["Not only future", "Sons are being revealed now through Spirit-led lives (Phil 2:15), and completely at the resurrection (Rom 8:23; 1 John 3:2)."],
  ["Not apart from the Son", "We are sons in the Son. Our glory is to be “conformed to the image of his Son” (Rom 8:29), never to replace him."],
  ["Not escape from creation", "Creation is set free with us, not left behind. Sons heal the world they were made to steward (Rom 8:21)."]
];

/* 6 · Huios: three words for children */
DATA.sn.growth = [
  { w: "nēpios", gk: "νήπιος", t: "Infant", ref: "Gal 4:1–3; 1 Cor 3:1–2; Heb 5:13; Eph 4:14", d: "“The heir, as long as he is a child (nēpios), is no different from a slave, though he is the owner of everything.” Infants own the estate but cannot run it: they need milk, are “tossed to and fro” and remain under guardians.", marks: ["Unskilled in the word of righteousness", "Tossed by every wind of doctrine", "Needs guardians and managers", "Owns everything, governs nothing"] },
  { w: "teknon", gk: "τέκνον", t: "Born child", ref: "John 1:12–13; 1 John 3:1–2; Rom 8:16", d: "From tiktō, to give birth: a child by nature and new birth. “See what kind of love the Father has given to us, that we should be called children (tekna) of God.” Teknon stresses belonging, family likeness and the Father’s affection.", marks: ["Born of God, not of the will of man", "The Spirit witnesses: you are his child", "Loved before any performance", "Growing in family likeness"] },
  { w: "huios", gk: "υἱός", t: "Mature son, placed as heir", ref: "Rom 8:14, 19; Gal 4:4–7; Heb 5:14", d: "Huios carries the son’s standing, character and authority to represent his father. Paul pairs it with huiothesia, adoption or “son-placing”: the Roman act that set an heir in full legal standing. “You are no longer a slave, but a son (huios), and if a son, then an heir through God.”", marks: ["Led by the Spirit (Rom 8:14)", "Powers of discernment trained by practice (Heb 5:14)", "Trusted with the Father’s business (Luke 2:49)", "Represents the Father’s name and will"] }
];
DATA.sn.daughters = "Sonship language is about inheritance, not gender. In the ancient world sons inherited; in Christ “there is no male and female, for you are all sons (huioi) of God through faith” (Gal 3:26–28). Every daughter is an heir with full standing: “you shall be sons and daughters to me” (2 Cor 6:18).";

/* 7 · The body of Christ */
DATA.sn.body = [
  { id: "head", n: "The head: Christ", ref: "Eph 1:22–23; Col 1:18; 2:19", d: "The head directs and the body expresses. All growth comes from “holding fast to the Head, from whom the whole body … grows with a growth that is from God”.", kp: "The King-Priest who rules the whole body." },
  { id: "eyes", n: "Eyes: prophetic sight", ref: "1 Cor 12:17, 21; Eph 1:17–18", d: "Seeing what God is doing: “having the eyes of your hearts enlightened”. Prophets and seers help the body see.", kp: "Kings need sight to rule rightly (Prov 29:18)." },
  { id: "mouth", n: "Mouth: proclaiming and declaring", ref: "Rom 10:14–15; Eph 4:15; 1 Pet 4:11", d: "Preaching the gospel, teaching and “speaking the truth in love”: the body speaks Christ’s words on earth.", kp: "Royal decree and priestly blessing (Num 6:23–27)." },
  { id: "heart", n: "Heart: worship and love", ref: "1 Cor 13:1–3; Eph 3:17–19; Col 3:16", d: "Without love every gift is noise. Worship and love are the pulse that keeps the body alive.", kp: "The priestly heart: ministering to God." },
  { id: "hands", n: "Hands: serving and healing", ref: "Mark 16:18; Acts 9:36–39; Rom 12:7–8", d: "Laying hands on the sick, serving tables, giving and showing mercy: Christ still touches the world through his body.", kp: "Kings build and steward; priests bless." },
  { id: "knees", n: "Knees: intercession", ref: "Eph 3:14–16; 6:18; 1 Tim 2:1–2", d: "“I bow my knees before the Father.” Intercession is the body’s posture of priestly mediation for cities and nations.", kp: "Priests standing in the gap." },
  { id: "feet", n: "Feet: going and sending", ref: "Rom 10:15; Isa 52:7; Matt 28:19", d: "“How beautiful are the feet of those who preach the good news!” Apostles and evangelists carry the body into new territory.", kp: "Kings extending the borders of Eden." },
  { id: "joints", n: "Joints and ligaments: unity", ref: "Eph 4:16; Col 2:19; Ps 133", d: "The body grows “when each part is working properly”, joined by every ligament. Relationships carry the supply.", kp: "One priesthood, one kingdom: no solo kings." }
];

/* 8 · What sons and daughters as kings and priests do */
DATA.sn.ladder = {
  up: [
    { t: "Worship", ref: "Rev 5:8; Heb 13:15", d: "Golden bowls of incense, “which are the prayers of the saints”, rise to the throne. Worship is the sacrifice of praise." },
    { t: "Intercession", ref: "1 Tim 2:1–4; Ezek 22:30", d: "Carrying people, cities and nations before God; standing in the breach." },
    { t: "Thanksgiving and offering", ref: "Rom 12:1; Phil 4:18", d: "Presenting our bodies, work and gifts as living sacrifices, “a fragrant offering”." },
    { t: "Repentance for the land", ref: "2 Chr 7:14; Dan 9:3–19", d: "Like Daniel, confessing the sins of a people so that God heals the land." }
  ],
  down: [
    { t: "Blessing", ref: "Num 6:23–27; Gen 12:2", d: "Priests put God’s name on people. Sons release blessing over families, workplaces and cities." },
    { t: "Healing and deliverance", ref: "Matt 10:7–8; Luke 9:1–2", d: "“Proclaim as you go, ‘The kingdom of heaven is at hand.’ Heal the sick … cast out demons.”" },
    { t: "Justice and good governance", ref: "Ps 72:1–4; Isa 1:17; Mic 6:8", d: "Kings defend the poor and the fatherless. Sons bring heaven’s justice into law, business and community." },
    { t: "Building and stewardship", ref: "Gen 2:15; Isa 61:4; Luke 19:13", d: "“They shall build up the ancient ruins.” Work is cultivation of Eden: “Engage in business until I come.”" },
    { t: "Discipling nations", ref: "Matt 28:18–20; Rev 21:24–26", d: "Teaching nations to obey Christ, until the kings of the earth bring their glory into the city." },
    { t: "Reconciliation", ref: "2 Cor 5:18–20", d: "“God … gave us the ministry of reconciliation”: ambassadors bringing earth back into union with heaven." }
  ]
};

/* 9 · Spheres where heaven touches earth */
DATA.sn.spheres = [
  { t: "Family", ref: "Eph 5:22–6:4; Deut 6:6–9", d: "The first temple and kingdom: blessing children, praying together, making home a place of God’s presence." },
  { t: "Church", ref: "Eph 4:11–16; Acts 2:42–47", d: "Equipping the saints, breaking bread, sharing, worship: a living preview of the age to come." },
  { t: "Work and business", ref: "Col 3:23–24; Prov 22:29", d: "Excellence, integrity and provision as service to the Lord; the marketplace as a mission field and a mandate." },
  { t: "City and government", ref: "Jer 29:7; Rom 13:1–7; 1 Tim 2:2", d: "Seeking the welfare of the city, praying for leaders, serving justice." },
  { t: "Culture and the arts", ref: "Exod 31:1–5; Phil 4:8", d: "Bezalel was filled with the Spirit for craftsmanship. Beauty and truth bear witness to the King." },
  { t: "Creation", ref: "Gen 2:15; Rom 8:19–21; Ps 24:1", d: "Caring for the earth as stewards who know creation is waiting for its liberation." },
  { t: "The nations", ref: "Ps 2:8; Matt 24:14; Rev 7:9", d: "Gospel to every people group, until every tribe and tongue worships before the throne." }
];

DATA.sn.objections = [
  { k: "serious", q: "“Heaven is our home; earth is going to burn, so why invest in it?”", refs: "Rev 21:1–3; Rom 8:21; Matt 6:10; 2 Pet 3:13",
    not: "No one denies that the present age will pass away or that heaven is real.",
    a: "The Bible ends with heaven coming down, not with souls leaving earth for ever: “the dwelling place of God is with man”. Creation will be “set free”, and Peter looks for “new heavens and a new earth in which righteousness dwells”. Jesus taught us to pray for God’s will on earth as in heaven. What we do in the Lord is not in vain (1 Cor 15:58)." },
  { k: "straw", q: "“The manifestation of the sons means a super-elite will become divine.”", refs: "Rom 8:14, 29; Gal 3:26; 1 John 3:2",
    not: "This is a distortion of Romans 8.",
    a: "All believers led by the Spirit are sons; the goal is to be conformed to the image of the Son, the firstborn among many brothers. Sons share his life and inheritance; they never replace him or become another Christ. Glory is received, not seized." },
  { k: "serious", q: "“The body of Christ is a metaphor; it doesn’t mean Christ acts through us.”", refs: "Acts 1:1; 9:4; 1 Cor 12:27; Eph 1:23",
    not: "No one is saying the church is Christ, or that the Head and the body are the same.",
    a: "Luke says his first book covered what Jesus “began to do and teach”, implying Acts records what he continued to do through his people. Jesus asked Saul, “why are you persecuting me?” The church is “the fullness of him who fills all in all”. The Head rules; the body expresses him." },
  { k: "serious", q: "“Ephesians 1:10 is only about the end; nothing changes before Jesus returns.”", refs: "Eph 1:20–23; 2:6; 3:10; Matt 13:33",
    not: "No one claims the fullness arrives before the new creation.",
    a: "Paul says Christ is already seated above every power and already head over all things to the church, and that the church already displays God’s wisdom to the powers. The kingdom works like leaven, spreading until it fills the dough. The summing up is the goal of a process that has already begun." },
  { k: "straw", q: "“Talk of dominion means Christians should seize political power.”", refs: "Mark 10:42–45; John 18:36; Matt 5:5",
    not: "This misrepresents servant dominion.",
    a: "Jesus’ rule comes by service, sacrifice and the Spirit, not by force: “whoever would be great among you must be your servant.” His kingdom is not from this world, yet it is for this world. The meek inherit the earth. Sons influence every sphere as servants and stewards, never as tyrants." },
  { k: "serious", q: "“Sonship (huios) excludes women.”", refs: "Gal 3:26–28; 2 Cor 6:18; 1 Pet 3:7",
    not: "No one is denying that Scripture uses male language for sons.",
    a: "“Son” is legal language for an heir. Paul applies it to all believers, male and female, and adds, “you shall be sons and daughters to me.” Peter calls wives “heirs with you of the grace of life”. Daughters receive full inheritance and full authority in Christ." }
];
DATA.sn.study = [
  { t: "Heaven and earth", q: ["Drag the slider through the story. Which moment surprises you most, and why?", "How does Ephesians 1:10 change your view of the Garden-Temple (Part I) and Babel (Part III)?"] },
  { t: "Sons", q: ["Are you living more like a nēpios, a teknon or a huios? What would maturity look like this month (Heb 5:14)?", "What is creation waiting for in your workplace or city (Rom 8:19)?"] },
  { t: "The body", q: ["Which part of the body best describes your function? Who are the joints that connect you (Eph 4:16)?", "Choose one up-ladder and one down-ladder action to practise this week."] }
];
DATA.sn.memory = [
  ["Ephesians 1:9–10", "“Making known to us the mystery of his will … as a plan for the fullness of time, to unite all things in him, things in heaven and things on earth.”"],
  ["Romans 8:19", "“For the creation waits with eager longing for the revealing of the sons of God.”"],
  ["Romans 8:14", "“For all who are led by the Spirit of God are sons of God.”"],
  ["Ephesians 1:22–23", "“He put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.”"],
  ["Galatians 4:7", "“So you are no longer a slave, but a son, and if a son, then an heir through God.”"],
  ["Revelation 21:3", "“Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people.”"]
];

DATA.quiz.push(
  { q: "In Ephesians 1:10, God’s plan is to unite all things in Christ…", a: ["In heaven only", "On earth only", "Things in heaven and things on earth", "After earth is destroyed"], c: 2, x: "“To unite all things in him, things in heaven and things on earth.”" },
  { q: "Which Greek word does Paul use for mature, placed sons in Romans 8:14 and 19?", a: ["Nēpios", "Teknon", "Huios", "Doulos"], c: 2, x: "Huioi: sons with the standing of heirs, “led by the Spirit”." },
  { q: "According to Romans 8:21, creation will be…", a: ["Destroyed and forgotten", "Set free from bondage into the freedom of the glory of the children of God", "Left as it is", "Replaced by heaven alone"], c: 1, x: "Creation shares in the liberation of God’s children." }
);
DATA.web.nodes.push({ id: "sons", n: "Sons and the body", g: 4, d: "Ephesians 1:10: heaven and earth united in Christ, revealed through his body, the sons and daughters who rule and serve as kings and priests." });
DATA.web.edges.push(
  ["sons", "eden", "Eden’s overlap filling the earth"],
  ["sons", "newjer", "Heaven and earth fully united (Rev 21:3)"],
  ["sons", "kingpriest", "Sons function as kings and priests"],
  ["sons", "fivefold", "Equipping the body to maturity (Eph 4:13)"],
  ["sons", "warfare", "Seated with Christ above every power"]
);
Object.assign(DATA.images, {
  dore: { file: "Paradiso_Canto_31.jpg", cap: "Gustave Doré, <i>The Empyrean</i> (1868), from Dante’s <i>Paradiso</i>: the redeemed gathered as one around the light of God.", ar: "4/5", art: "star" },
  adam: { file: "Michelangelo_-_Creation_of_Adam_(cropped).jpg", cap: "Michelangelo, <i>The Creation of Adam</i> (c. 1512), Sistine Chapel: the image-bearer made to receive life from above.", ar: "16/9", art: "garden" }
});

/* ---------- Part VIII addition: seated in the heavenly places ---------- */
DATA.wf.seated = [
  { t: "Sit", ref: "Eph 1:3–3:21", d: "Chapters 1–3 are almost all indicative: what God has done. We are blessed, chosen, raised and seated with Christ. Everything begins with rest in a finished work.", post: "Position: raised and seated with him (Eph 2:6)" },
  { t: "Walk", ref: "Eph 4:1–6:9", d: "“Walk in a manner worthy of the calling.” Heavenly position becomes earthly conduct: unity, holiness, love, wisdom, family and work.", post: "Practice: live out the position (Eph 4:1)" },
  { t: "Stand", ref: "Eph 6:10–20", d: "Only after sitting and walking does Paul say “stand”. We hold ground on earth from a throne in heaven.", post: "Power: withstand in the evil day (Eph 6:13)" }
];
DATA.wf.blessings = [
  { g: "Father", t: "Chosen in him", ref: "Eph 1:4", now: "You are wanted on purpose; rejection does not define you." },
  { g: "Father", t: "Holy and blameless before him", ref: "Eph 1:4; Col 1:22", now: "You can come before God without shame or performance." },
  { g: "Father", t: "Adopted as sons (huiothesia)", ref: "Eph 1:5; Gal 4:5", now: "You are placed as an heir, not hired as a servant." },
  { g: "Father", t: "Accepted in the Beloved", ref: "Eph 1:6", now: "The Father’s delight in Jesus now rests on you." },
  { g: "Son", t: "Redemption through his blood", ref: "Eph 1:7; Col 1:13–14", now: "Every chain of the past has been bought out." },
  { g: "Son", t: "Forgiveness of trespasses", ref: "Eph 1:7; Col 2:13–14", now: "No record of debt stands against you." },
  { g: "Son", t: "Wisdom and insight", ref: "Eph 1:8–9, 17", now: "You can ask for and expect wisdom for real decisions (Jas 1:5)." },
  { g: "Son", t: "The mystery of his will revealed", ref: "Eph 1:9–10", now: "You know where history is heading: heaven and earth united." },
  { g: "Son", t: "An inheritance obtained", ref: "Eph 1:11", now: "You are part of God’s plan and portion." },
  { g: "Spirit", t: "Sealed with the Spirit", ref: "Eph 1:13; 4:30", now: "You are marked as God’s property and protected." },
  { g: "Spirit", t: "The down payment (arrabōn)", ref: "Eph 1:14; 2 Cor 1:22", now: "The Spirit is the first instalment of the age to come, now." }
];
DATA.wf.dual = [
  ["Seated with Christ", "Eph 2:6", "Standing in battle", "Eph 6:13", "Fight from rest, not for rest: the battle is held, not won, by you."],
  ["Citizens of heaven", "Phil 3:20", "Ambassadors on earth", "2 Cor 5:20", "Your passport is heavenly, so your posting on earth is an embassy: represent the King where you live and work."],
  ["Hidden with Christ in God", "Col 3:3", "A light in the world", "Matt 5:14", "Security in secret makes you brave in public. You don’t need applause to shine."],
  ["Righteous in him", "2 Cor 5:21", "Growing in holiness", "2 Cor 7:1", "You grow because you are righteous, not to become righteous. Failure sends you to the throne, not away from it."],
  ["Blessed with every blessing", "Eph 1:3", "Tested by many trials", "Jas 1:2–4", "Trials do not cancel blessing; they reveal and mature it. Count it joy."],
  ["More than conquerors", "Rom 8:37", "In tribulation", "John 16:33", "Tribulation is real but never final: “take heart; I have overcome the world.”"],
  ["Complete in him", "Col 2:10", "Pressing on to maturity", "Phil 3:12–14", "Nothing is missing in Christ, so you press on from fullness toward the fullness of the stature of Christ (Eph 4:13)."]
];
DATA.wf.heirs = [
  { t: "The Spirit, the down payment", when: "now", ref: "Eph 1:14; Rom 8:23", d: "The arrabōn: a real first instalment that guarantees the rest. Power, joy and gifts now are a taste of the age to come." },
  { t: "Sonship and access", when: "now", ref: "Gal 4:6–7; Heb 4:16", d: "Heirs have the run of the Father’s house: boldness at the throne, and the Spirit crying “Abba”." },
  { t: "The kingdom", when: "now", ref: "Luke 12:32; Col 1:13; Jas 2:5", d: "“It is your Father’s good pleasure to give you the kingdom.” Already transferred into it; heirs of it." },
  { t: "Suffering with him", when: "now", ref: "Rom 8:17; Phil 3:10", d: "“Heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him.” Co-heirs share the cross before the crown." },
  { t: "The nations", when: "growing", ref: "Ps 2:8; Matt 28:18–19", d: "“Ask of me, and I will make the nations your heritage.” The Son’s inheritance is being gathered through his co-heirs’ mission." },
  { t: "The world", when: "growing", ref: "Rom 4:13; Matt 5:5", d: "Abraham was promised he “would be heir of the world”. The meek inherit the earth." },
  { t: "All things", when: "then", ref: "Rev 21:7; Heb 1:2; 1 Cor 3:21–23", d: "“The one who conquers will have this heritage.” Christ is “heir of all things”, and “all are yours, and you are Christ’s”." },
  { t: "Glory and reigning", when: "then", ref: "Rom 8:17–18; 2 Tim 2:12; Rev 22:5", d: "Glorified with him; “they will reign forever and ever”." }
];
DATA.wf.objections.push(
  { k: "serious", q: "“Being seated in heavenly places is only a legal fiction, a status with no effect on earth.”", refs: "Eph 2:6–10; Col 3:1–4; Heb 4:16",
    not: "No one is claiming we are physically in heaven.",
    a: "Paul moves straight from “seated with him” to “we are his workmanship, created … for good works” on earth. Colossians says because we are raised with Christ, “seek the things that are above” and then puts to death earthly vices. Position produces practice: access in prayer, freedom from condemnation, authority over the enemy and a heavenly mind in earthly work." },
  { k: "straw", q: "“If we are co-heirs, we should be rich and never suffer.”", refs: "Rom 8:17; 2 Cor 6:10; Heb 11:13",
    not: "This turns inheritance into entitlement.",
    a: "Co-heirship includes the condition “provided we suffer with him”. Paul was “poor, yet making many rich; having nothing, yet possessing everything”. The down payment is real and generous, but the fullness is still ahead." }
);
DATA.wf.study.push({ t: "Seated with Christ", q: ["Read Ephesians 1:3–14 aloud. Which blessing do you most need to believe this week?", "Pick one pair from the “dual reality” table. How will the heavenly side change how you face the earthly side?", "What part of your inheritance are you living in now, and what are you still waiting for?"] });
DATA.wf.memory.push(["Ephesians 2:6", "“And raised us up with him and seated us with him in the heavenly places in Christ Jesus.”"], ["Romans 8:17", "“And if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him.”"]);

;DATA.quiz.forEach(q => { q.part = q.part || "sons"; });

/* Part VIII·e: far above all — enemies under his feet */
DATA.fa = {};

/* Ephesians 1:19 — four words of power */
DATA.fa.power = [
  { w: "dynamis", t: "Power", v: 78, d: "Inherent ability: the capacity to act. The word behind “dynamite” and “dynamic”." },
  { w: "energeia", t: "Working", v: 88, d: "Power in operation: energy actually at work. “According to the working of his great might.”" },
  { w: "kratos", t: "Might", v: 94, d: "Mastery and dominion: power that prevails over resistance." },
  { w: "ischys", t: "Strength", v: 100, d: "Strength possessed, like muscle. Paul piles up all four words to describe the power that raised Christ, now “toward us who believe”." }
];

/* Ephesians 1:21 — what Christ is far above */
DATA.fa.above = [
  { gk: "archē", t: "All rule", d: "First place, rank and rulership: every ruling power, visible or invisible (Col 2:15)." },
  { gk: "exousia", t: "Authority", d: "Every claimed right to command. Christ holds “all authority in heaven and on earth” (Matt 28:18)." },
  { gk: "dynamis", t: "Power", d: "Every force or ability, spiritual or natural, that could oppose God’s purpose." },
  { gk: "kyriotēs", t: "Dominion", d: "Lordship: every realm that claims to be lord. “Jesus is Lord” settles it (Phil 2:9–11)." },
  { gk: "onoma", t: "Every name that is named", d: "Every title, name and reputation invoked in spells, empires and ideologies, “not only in this age but also in the one to come”." }
];

/* Head, body, feet — Ephesians 1:22–23 */
DATA.fa.headFeet = [
  { id: "head", t: "Christ the head, seated far above", ref: "Eph 1:20–22; Col 1:18", d: "Raised by the Father and seated at his right hand. The head directs, decides and gives life." },
  { id: "body", t: "The church, his body and fullness", ref: "Eph 1:23; 1 Cor 12:27", d: "“The church, which is his body, the fullness of him who fills all in all.” Heaven’s head has an earthly body." },
  { id: "feet", t: "The feet are part of the body", ref: "Eph 1:22; Rom 16:20; Luke 10:19", d: "God “put all things under his feet” and gave him as head “to the church, which is his body”. The feet are where the body stands. “The God of peace will soon crush Satan under your feet.”" },
  { id: "under", t: "All things under his feet", ref: "Ps 8:6; Heb 2:8–9; 1 Cor 15:27", d: "Psalm 8 gave Adam this dominion; Christ the last Adam has won it back. “At present, we do not yet see everything in subjection to him. But we see Jesus … crowned.”" }
];

/* Psalm 110:1 — sit … until */
DATA.fa.until = [
  { t: "“Sit at my right hand”", ref: "Ps 110:1; Acts 2:32–36; Heb 1:3", d: "The most quoted Old Testament verse in the New. At the ascension the Son sat down, his work of atonement finished.", at: 0 },
  { t: "“Until I make your enemies”", ref: "Heb 10:12–13; 1 Cor 15:25", d: "“He sat down at the right hand of God, waiting from that time until his enemies should be made a footstool.” “He must reign until he has put all his enemies under his feet.” The reign is now; the subduing is progressive.", at: 1 },
  { t: "“Your footstool”", ref: "Josh 10:24–25; Ps 110:2–3", d: "Joshua had his commanders put their feet on the necks of the defeated kings: “Do not be afraid … for thus the LORD will do to all your enemies.” “Rule in the midst of your enemies! Your people will offer themselves freely.”", at: 2 },
  { t: "“The last enemy … death”", ref: "1 Cor 15:24–28, 54–57", d: "“Then comes the end, when he delivers the kingdom to God the Father after destroying every rule and every authority and power.” Death is swallowed up in victory, and God is “all in all”.", at: 3 }
];

/* Enemies to be subdued: defeated (cross) → subdued (body) → destroyed (end) */
DATA.fa.enemies = [
  { id: "sin", n: "Sin", icon: "M-10 -10 L10 10 M10 -10 L-10 10", defeated: "Condemned in the flesh of Christ (Rom 8:3); its dominion broken (Rom 6:6, 14).", body: "Count yourselves dead to sin; offer your members to God; confess and walk in the light (Rom 6:11–13; 1 John 1:7).", end: "No more sin in the city of God (Rev 21:27)." },
  { id: "flesh", n: "The flesh", icon: "M-12 6 Q0 -16 12 6 Z", defeated: "“Those who belong to Christ Jesus have crucified the flesh” (Gal 5:24).", body: "Walk by the Spirit; put to death the deeds of the body (Gal 5:16; Rom 8:13).", end: "Bodies raised imperishable and spiritual (1 Cor 15:42–44)." },
  { id: "world", n: "The world system", icon: "M0 -12 A12 12 0 1 0 0.1 -12 M-12 0 H12", defeated: "“Take heart; I have overcome the world” (John 16:33).", body: "Do not be conformed; overcome by faith; build counter-cultures of the kingdom (Rom 12:2; 1 John 5:4).", end: "The kingdom of the world becomes the kingdom of our Lord (Rev 11:15)." },
  { id: "satan", n: "Satan and the powers", icon: "M-12 8 Q-12 -14 0 -14 Q12 -14 12 8 L6 2 L0 10 L-6 2 Z", defeated: "Disarmed and shamed at the cross (Col 2:15); the strong man bound (Matt 12:29).", body: "Resist; stand in the armour; cast out demons; pray (Jas 4:7; Eph 6:10–18; Mark 16:17).", end: "Thrown into the lake of fire (Rev 20:10)." },
  { id: "lies", n: "Lies and strongholds", icon: "M-12 10 V-6 H-4 V-12 H4 V-6 H12 V10 Z", defeated: "Christ is the truth; the father of lies is exposed (John 14:6; 8:44).", body: "Demolish arguments; take every thought captive; teach and preach the truth (2 Cor 10:4–5).", end: "Every knee bows and every tongue confesses (Phil 2:10–11)." },
  { id: "fear", n: "Fear", icon: "M0 -12 L12 10 H-12 Z M0 -3 V3", defeated: "Through death he delivered those who were in lifelong slavery to the fear of death (Heb 2:14–15).", body: "Cast out fear by perfect love; receive the Spirit of power, love and self-control (1 John 4:18; 2 Tim 1:7).", end: "Nothing to fear: “they shall see his face” (Rev 22:4)." },
  { id: "curse", n: "The curse", icon: "M-12 -4 Q0 -14 12 -4 M-12 4 Q0 14 12 4", defeated: "Christ became a curse for us (Gal 3:13).", body: "Break curses in his name, bless instead of cursing, restore what was cursed (Rom 12:14; Isa 61:4).", end: "“No longer will there be anything accursed” (Rev 22:3)." },
  { id: "sickness", n: "Sickness", icon: "M-4 -12 H4 V-4 H12 V4 H4 V12 H-4 V4 H-12 V-4 H-4 Z", defeated: "“He took our illnesses and bore our diseases” (Matt 8:17; Isa 53:4–5).", body: "Pray for the sick, lay on hands, anoint, use medicine, show mercy (Jas 5:14–16; Mark 16:18).", end: "“Neither shall there be mourning, nor crying, nor pain” (Rev 21:4)." },
  { id: "injustice", n: "Injustice and oppression", icon: "M-12 -8 H12 M0 -12 V12 M-12 -8 L-16 4 H-8 Z M12 -8 L8 4 H16 Z", defeated: "Jesus announced liberty to captives and the oppressed (Luke 4:18–19).", body: "Do justice, love mercy, defend the poor, break every yoke (Mic 6:8; Isa 58:6–7).", end: "He judges the nations in righteousness (Ps 96:13; Isa 11:4)." },
  { id: "division", n: "Division and hostility", icon: "M-12 0 H-3 M3 0 H12 M-3 -8 V8 M3 -8 V8", defeated: "“He himself is our peace … has broken down … the dividing wall of hostility” (Eph 2:14–16).", body: "Maintain the unity of the Spirit; reconcile; welcome one another (Eph 4:3; 2 Cor 5:18; Rom 15:7).", end: "One new humanity from every tribe and tongue (Rev 7:9)." },
  { id: "death", n: "Death, the last enemy", icon: "M-10 12 V-2 A10 10 0 0 1 10 -2 V12 Z M-4 2 H4", defeated: "Christ tasted death for everyone, rose, and holds the keys of Death (Heb 2:9; Rev 1:18).", body: "Proclaim resurrection; live resurrection life; heal and raise; comfort with hope; defend life (Rom 6:4; Matt 10:8; 1 Thess 4:13–18).", end: "“Death is swallowed up in victory.” Death and Hades thrown into the lake of fire (1 Cor 15:54; Rev 20:14)." }
];

/* The last enemy: death — timeline */
DATA.fa.death = [
  { t: "Death threatened", ref: "Gen 2:17", d: "“In the day that you eat of it you shall surely die.” Death was never part of God’s design: it entered as an enemy." },
  { t: "Death reigns", ref: "Gen 3:19; Rom 5:12, 14, 17", d: "“Death reigned from Adam to Moses.” Death behaves like a king, with sin as its sting and fear as its chains." },
  { t: "Glimpses of victory", ref: "Gen 5:24; 2 Kgs 2:11; 1 Kgs 17:22; Ezek 37", d: "Enoch and Elijah taken up, a widow’s son raised, dry bones live: previews that death is not final." },
  { t: "Jesus raises the dead", ref: "Luke 7:14–15; John 11:25–44", d: "“I am the resurrection and the life.” At Lazarus’ tomb Jesus wept, then commanded, “Lazarus, come out.”" },
  { t: "He tastes death for everyone", ref: "Heb 2:9, 14–15", d: "He shared our flesh “that through death he might destroy the one who has the power of death … and deliver all those who through fear of death were subject to lifelong slavery”." },
  { t: "Risen: the keys of Death", ref: "Rev 1:17–18; 2 Tim 1:10", d: "“I died, and behold I am alive forevermore, and I have the keys of Death and Hades.” He “abolished death and brought life and immortality to light”." },
  { t: "The body lives from resurrection", ref: "Rom 6:4; 8:11; 1 Cor 15:55–57", d: "The same Spirit gives life to our mortal bodies. “O death, where is your sting?” Believers still die, but death has lost its sting and its claim." },
  { t: "Swallowed up in victory", ref: "1 Cor 15:26, 54; Rev 20:14; 21:4", d: "“The last enemy to be destroyed is death.” Death and Hades are thrown into the lake of fire. “Death shall be no more.”" }
];
DATA.fa.deathDo = [
  ["Proclaim the resurrection", "Acts 4:2, 33", "The apostles preached “in Jesus the resurrection from the dead” with great power."],
  ["Lose the fear of death", "Heb 2:15; Phil 1:21", "“To live is Christ, and to die is gain.” Fearless sons are free to obey."],
  ["Live resurrection life now", "Rom 6:4; Col 3:1", "Walk in newness of life: the age to come breaking into ordinary days."],
  ["Heal the sick, even raise the dead", "Matt 10:8; Acts 9:40; 20:9–12", "Jesus commissioned it; Peter and Paul did it. Pray with faith; leave outcomes to God."],
  ["Grieve with hope", "1 Thess 4:13–18; John 11:35", "Jesus wept. We grieve, but not as those who have no hope."],
  ["Choose life and defend it", "Deut 30:19; Prov 24:11", "Oppose violence, protect the vulnerable, care for the dying: a culture of life."],
  ["Die well, as a witness", "Rev 12:11; Acts 7:59–60", "“They loved not their lives even unto death.” Stephen died forgiving, seeing heaven open."]
];

/* Daily life: living under vs living from above */
DATA.fa.daily = [
  { s: "Bad news and fear", under: "“I’m doing OK under the circumstances.” Fear sets the agenda.", above: "Circumstances are under his feet, and so under mine in him. I pray from the throne, then act calmly (Ps 112:7; Phil 4:6–7)." },
  { s: "Accusation and shame", under: "The voice of condemnation decides how I feel about God.", above: "“Who shall bring any charge against God’s elect?” I answer accusation with the blood and the word (Rom 8:33–34; Rev 12:10–11)." },
  { s: "Temptation", under: "Sin feels stronger than me; I manage it and hope.", above: "Sin shall not have dominion over me. I reckon myself dead to it and yield to God (Rom 6:11–14)." },
  { s: "Hostility at work or home", under: "People are the enemy; I fight them or flee them.", above: "People are never the enemy. I bless, serve and pray, and I resist the darkness behind the conflict (Rom 12:14–21; Eph 6:12)." },
  { s: "Sickness", under: "Diagnosis has the final word.", above: "I pray and ask for prayer, use wisdom and medicine, and trust the One who bore my sicknesses, whatever the outcome (Jas 5:14–16)." },
  { s: "Delay and disappointment", under: "Silence means God has forgotten me.", above: "He is seated and reigning “until”. I wait in faith and keep sowing (Heb 10:12–13; Gal 6:9)." },
  { s: "Grief and loss", under: "Death has the last word.", above: "Death is a defeated enemy with no sting. I grieve with hope (1 Cor 15:55; 1 Thess 4:13)." }
];

/* The body's assignments */
DATA.fa.assign = [
  { t: "Proclaim and disciple", ref: "Matt 28:18–20", d: "“All authority … has been given to me. Go therefore.” Every disciple made is territory under his feet." },
  { t: "Pray and worship", ref: "Matt 6:10; Ps 149:6–9; Acts 4:24–31", d: "Pray the kingdom down, praise as warfare, and agree in prayer so the place is shaken." },
  { t: "Heal and deliver", ref: "Luke 9:1–2; Acts 10:38", d: "Do what Jesus did, “healing all who were oppressed by the devil”." },
  { t: "Live holy and united", ref: "Eph 4:1–3; 1 Pet 1:15", d: "Holiness removes footholds; unity is the body’s strength. A divided body cannot stand." },
  { t: "Do justice and mercy", ref: "Mic 6:8; Matt 25:35–40", d: "Lift the poor, protect the weak and reform what is unjust. Kings rule for the oppressed." },
  { t: "Overcome evil with good", ref: "Rom 12:21; Matt 5:44", d: "The body subdues enemies the way the Head did: by love, truth and sacrifice, never by hatred." },
  { t: "Endure and overcome", ref: "Rev 12:11; 2 Tim 2:3, 12", d: "“If we endure, we will also reign with him.” Faithfulness in suffering is victory." }
];

DATA.fa.objections = [
  { k: "serious", q: "“Only Christ subdues his enemies; the church has no part in it.”", refs: "Rom 16:20; Eph 1:22–23; Luke 10:19; Ps 110:2–3",
    not: "No one claims the church adds to Christ’s victory or replaces him.",
    a: "God put all things under Christ’s feet and gave him as head “to the church, which is his body”: the feet are in the body. Paul promises God “will soon crush Satan under your feet”. Psalm 110 says the King rules “in the midst of your enemies” while “your people will offer themselves freely”. The Head wins; the body enforces." },
  { k: "serious", q: "“Putting enemies under his feet only happens at the second coming.”", refs: "1 Cor 15:24–26; Heb 10:12–13; Eph 1:20–22",
    not: "No one denies that death is destroyed at the end.",
    a: "Paul says Christ “must reign until he has put all his enemies under his feet”, and that death is the last enemy. That implies others are subdued before the last, during his present reign from the right hand. Hebrews pictures him seated now, “waiting until” his enemies become his footstool. The end completes a process already under way." },
  { k: "straw", q: "“Being above all powers means Christians never suffer or lose.”", refs: "Heb 2:8–9; 2 Cor 4:8–12; Rev 12:11",
    not: "This turns position into triumphalism.",
    a: "“We do not yet see everything in subjection to him. But we see Jesus … crowned … because of the suffering of death.” The body shares the Head’s path: cross, then crown. Paul was afflicted but not crushed. Overcomers “loved not their lives even unto death”." },
  { k: "straw", q: "“If death is defeated, a believer who dies lacked faith.”", refs: "Heb 9:27; Phil 1:21–23; 1 Cor 15:26",
    not: "This misunderstands the order of victory.",
    a: "Death is the last enemy to be destroyed, not the first. Its sting and fear are removed now, but bodily death remains until the resurrection. Paul longed “to depart and be with Christ”. Faithful believers die in faith (Heb 11:13). We pray for life and healing, and we die without fear." },
  { k: "serious", q: "“Subduing enemies sounds like Christians taking over by force.”", refs: "2 Cor 10:3–5; John 18:36; Matt 26:52",
    not: "No one is advocating coercion.",
    a: "“The weapons of our warfare are not of the flesh.” Jesus told Peter to put away his sword. The enemies are sin, death, lies and dark powers, not people. The body subdues them by the gospel, prayer, truth, holiness, justice and love." }
];
DATA.fa.study = [
  { t: "Far above", q: ["Read Ephesians 1:19–23 slowly. Which of the five things Christ is above have you been living under?", "What does “the feet are in the body” change about how you see your daily life?"] },
  { t: "Under his feet", q: ["Pick one enemy from the list. What has the cross already done, and what is your assignment now?", "How does knowing death is the last enemy shape how you pray for the sick and grieve the dying?"] }
];
DATA.fa.memory = [
  ["Ephesians 1:22–23", "“And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.”"],
  ["1 Corinthians 15:25–26", "“For he must reign until he has put all his enemies under his feet. The last enemy to be destroyed is death.”"],
  ["Psalm 110:1", "“The LORD says to my Lord: ‘Sit at my right hand, until I make your enemies your footstool.’”"],
  ["Romans 16:20", "“The God of peace will soon crush Satan under your feet.”"]
];
DATA.quiz.push(
  { q: "According to Ephesians 1:22–23, God gave Christ as head over all things to…", a: ["The angels", "The church, which is his body", "Israel only", "The nations"], c: 1, x: "“To the church, which is his body, the fullness of him who fills all in all.”" },
  { q: "Which enemy does 1 Corinthians 15:26 call the last to be destroyed?", a: ["Satan", "Sin", "Death", "The world"], c: 2, x: "“The last enemy to be destroyed is death.”" }
);
DATA.web.edges.push(["warfare", "sons", "Under his feet: the body enforces the Head’s victory"]);
Object.assign(DATA.images, {
  ascension: { file: "Rembrandt_van_Rijn_192.jpg", cap: "Rembrandt, <i>The Ascension</i> (1636), Alte Pinakothek, Munich: “seated … far above all rule and authority” (Eph 1:20–21).", ar: "3/4", art: "crown" }
});
DATA.wf.objections.push(...DATA.fa.objections);
DATA.wf.study.push(...DATA.fa.study);
DATA.wf.memory.push(...DATA.fa.memory);

;DATA.quiz.forEach(q => { q.part = q.part || "warfare"; });

/* Part X: Renewing the mind and transformation */
DATA.mn = {};

/* 1 · Romans 12:2 word by word */
DATA.mn.words = [
  { w: "syschēmatizesthe", t: "Be conformed", gk: "συσχηματίζεσθε", d: "From schēma, outward shape or fashion. Pressed into a mould from the outside: “Do not let the world squeeze you into its shape.” Peter uses it for being shaped by “the passions of your former ignorance” (1 Pet 1:14).", dir: "out" },
  { w: "aiōni toutō", t: "This age", gk: "αἰῶνι τούτῳ", d: "Not the physical world but the present age: its values, systems and ways of thinking, ruled by “the god of this age” who blinds minds (2 Cor 4:4). Christ rescued us “from the present evil age” (Gal 1:4)." , dir: "out" },
  { w: "metamorphousthe", t: "Be transformed", gk: "μεταμορφοῦσθε", d: "Change of form from within, like a caterpillar to a butterfly. The same word describes Jesus’ transfiguration (Matt 17:2) and our being “transformed into the same image from one degree of glory to another” (2 Cor 3:18). It is in the passive voice and the present tense: “keep on letting yourselves be transformed”.", dir: "in" },
  { w: "anakainōsei", t: "By the renewal", gk: "ἀνακαινώσει", d: "Made new in quality, not merely refreshed. Titus 3:5 calls it “the renewal of the Holy Spirit”. It is ongoing: “our inner self is being renewed day by day” (2 Cor 4:16).", dir: "in" },
  { w: "tou noos", t: "Of the mind", gk: "τοῦ νοός", d: "Nous: the faculty that perceives, reasons, judges and decides, the seat of moral understanding. Before Christ it was “futile” and “darkened” (Eph 4:17–18); in Christ “we have the mind (nous) of Christ” (1 Cor 2:16).", dir: "in" },
  { w: "dokimazein", t: "That you may discern", gk: "δοκιμάζειν", d: "To test and approve, like assaying metal. A renewed mind can recognise “what is the will of God, what is good and acceptable and perfect”. Transformation leads to guidance." , dir: "in" }
];

/* 2 · Biblical vocabulary of the inner life */
DATA.mn.vocab = [
  { w: "lēb / lēbāb", lang: "Hebrew", t: "Heart", d: "The control centre of the person: thought, will, memory and emotion together. “Keep your heart with all vigilance, for from it flow the springs of life” (Prov 4:23)." },
  { w: "nous", lang: "Greek", t: "Mind", d: "Perception and moral judgement. It can be “debased” (Rom 1:28) or “renewed” (Rom 12:2)." },
  { w: "dianoia", lang: "Greek", t: "Understanding", d: "Thinking things through. We love God “with all your mind (dianoia)” (Matt 22:37); the Spirit “opened their minds to understand the Scriptures” (Luke 24:45)." },
  { w: "phronēma", lang: "Greek", t: "Mindset", d: "The set or outlook of the mind. “To set the mind on the flesh is death, but to set the mind on the Spirit is life and peace” (Rom 8:6)." },
  { w: "logismos", lang: "Greek", t: "Reasonings", d: "Arguments and calculations. Strongholds are built from them, and they are “destroyed” by divine weapons (2 Cor 10:4–5)." },
  { w: "noēma", lang: "Greek", t: "Thoughts, schemes", d: "Individual thoughts and designs. “We take every thought (noēma) captive to obey Christ” (2 Cor 10:5); Satan has his own noēmata, his designs (2 Cor 2:11)." },
  { w: "metanoia", lang: "Greek", t: "Repentance", d: "Literally a change of mind (meta + nous). Repentance is the doorway of renewal: “repent, for the kingdom of heaven is at hand” (Matt 4:17)." }
];

/* 3 · How a thought becomes a life (two paths) */
DATA.mn.path = [
  { id: "seed", x: 450, y: 40, t: "A thought is planted", ref: "Prov 23:7; Matt 13:19", c: "accent", d: "Every life begins as a seed in the mind: a word heard, an image seen, a suggestion whispered. “As he thinks in his heart, so is he” (Prov 23:7, NKJV)." },
  { id: "flesh", x: 230, y: 130, t: "Mind set on the flesh", ref: "Rom 8:5–7; Jas 1:14", c: "flame", d: "Desire entertains the thought: “each person is tempted when he is lured and enticed by his own desire.”" },
  { id: "spirit", x: 670, y: 130, t: "Mind set on the Spirit", ref: "Rom 8:5–6; Col 3:2", c: "eden", d: "The thought is weighed by the word and the Spirit: “Set your minds on things that are above.”" },
  { id: "fbelief", x: 230, y: 220, t: "A lie believed", ref: "Gen 3:1–6; John 8:44", c: "flame", d: "“Did God actually say…?” A believed lie becomes a lens through which everything else is read." },
  { id: "sbelief", x: 670, y: 220, t: "Truth believed", ref: "John 8:31–32; Rom 10:17", c: "eden", d: "“You will know the truth, and the truth will set you free.” Faith comes by hearing the word." },
  { id: "fact", x: 230, y: 310, t: "Choices and habits", ref: "Jas 1:15; Rom 6:16", c: "flame", d: "“Desire when it has conceived gives birth to sin.” Repeated choices become slavery." },
  { id: "sact", x: 670, y: 310, t: "Obedience and practice", ref: "Phil 4:9; Heb 5:14", c: "eden", d: "“What you have learned and received … practise these things.” Powers of discernment are “trained by constant practice”." },
  { id: "fend", x: 230, y: 400, t: "Death: bondage, fear, decay", ref: "Rom 8:6; Gal 6:8", c: "flame", d: "“To set the mind on the flesh is death.” “The one who sows to his own flesh will from the flesh reap corruption.”" },
  { id: "send", x: 670, y: 400, t: "Life and peace", ref: "Rom 8:6; Isa 26:3", c: "eden", d: "“To set the mind on the Spirit is life and peace.” “You keep him in perfect peace whose mind is stayed on you.”" },
  { id: "image", x: 450, y: 492, t: "Character and destiny: his image", ref: "Rom 8:29; 2 Cor 3:18", c: "accent", d: "God’s goal is not better thoughts alone but a person conformed to the image of his Son. Habits become character; character becomes destiny." }
];
DATA.mn.pathEdges = [["seed", "flesh"], ["seed", "spirit"], ["flesh", "fbelief"], ["spirit", "sbelief"], ["fbelief", "fact"], ["sbelief", "sact"], ["fact", "fend"], ["sact", "send"], ["send", "image"]];

/* 4 · Lie → truth exchange */
DATA.mn.lies = [
  { lie: "I am unloved.", root: "Rejection, abandonment, comparison", truth: "I am loved with an everlasting love.", refs: "Jer 31:3; Rom 5:8; 8:38–39", say: "Nothing in all creation can separate me from the love of God in Christ Jesus my Lord." },
  { lie: "I am a failure.", root: "Performance-based identity, past mistakes", truth: "I am God’s workmanship, a new creation.", refs: "Eph 2:10; 2 Cor 5:17; Phil 1:6", say: "He who began a good work in me will bring it to completion." },
  { lie: "God is distant and disappointed with me.", root: "Shame, an earthly father’s absence or harshness", truth: "I have been brought near, and the Father delights in me.", refs: "Eph 2:13; Zeph 3:17; Luke 15:20", say: "The Father runs to me, rejoices over me with singing and calls me his child." },
  { lie: "I’ll always be like this.", root: "Fatalism, generational patterns, repeated failure", truth: "I am being transformed from one degree of glory to another.", refs: "2 Cor 3:18; Ezek 18:20; Rom 6:6", say: "My old self was crucified with Christ; I am no longer a slave to sin." },
  { lie: "I am alone.", root: "Isolation, betrayal, loss", truth: "He will never leave me, and I belong to a body.", refs: "Heb 13:5; Matt 28:20; 1 Cor 12:27", say: "The Lord is with me, and I am a member of his body." },
  { lie: "I am not enough.", root: "Comparison, unrealistic expectations", truth: "His grace is sufficient; I am complete in him.", refs: "2 Cor 12:9; Col 2:10; Phil 4:13", say: "I can do all things through him who strengthens me." },
  { lie: "My past defines me.", root: "Guilt, trauma, others’ labels", truth: "I am forgiven, cleansed and given a new name.", refs: "1 John 1:9; Isa 43:18–19; Rev 2:17", say: "The old has passed away; behold, the new has come." },
  { lie: "If I don’t control everything, it will fall apart.", root: "Fear, past chaos, an orphan mindset", truth: "My Father holds all things together and cares for me.", refs: "Col 1:17; Matt 6:31–33; 1 Pet 5:7", say: "I cast all my anxieties on him, because he cares for me." }
];
DATA.mn.captive = [
  { t: "Notice it", ref: "Ps 139:23–24", d: "“Search me, O God … see if there be any grievous way in me.” Name the thought instead of letting it run in the background." },
  { t: "Test it", ref: "1 John 4:1; 2 Cor 10:5", d: "Does it agree with what God has said? Is it a logismos raised “against the knowledge of God”?" },
  { t: "Take it captive", ref: "2 Cor 10:5", d: "Arrest it: refuse to agree with it. Thoughts can be visitors without becoming residents." },
  { t: "Bring it to Christ", ref: "2 Cor 10:5; Phil 4:6–7", d: "Make it “obey Christ”: confess, pray, and hand it to him. Peace then guards heart and mind." },
  { t: "Replace it", ref: "Eph 4:22–24; Phil 4:8", d: "Put off the old, be renewed in the spirit of your mind, put on the new. An empty mind refills with old thoughts; fill it with truth." },
  { t: "Rehearse the truth", ref: "Josh 1:8; Ps 1:2", d: "Meditate (hāgâ: mutter, murmur) day and night until truth becomes your default thinking." }
];

/* 5 · The means of renewal */
DATA.mn.means = [
  { t: "The word", icon: "M-12 -10 L0 -6 L12 -10 V10 L0 14 L-12 10 Z M0 -6 V14", ref: "John 17:17; Ps 1:2; Josh 1:8", d: "“Sanctify them in the truth; your word is truth.” Meditation (hāgâ) means turning the word over aloud until it shapes you." },
  { t: "The Spirit", icon: "M0 -14 Q10 -2 0 14 Q-10 -2 0 -14 Z", ref: "Titus 3:5; 1 Cor 2:12–16; John 16:13", d: "Renewal is “of the Holy Spirit”. He searches the depths of God and gives us “the mind of Christ”." },
  { t: "Beholding in worship", icon: "M-14 0 Q0 -14 14 0 Q0 14 -14 0 Z M0 -4 A4 4 0 1 0 0.1 -4", ref: "2 Cor 3:18; Ps 27:4", d: "We become like what we behold. Unveiled worship transforms us “from one degree of glory to another”." },
  { t: "Prayer", icon: "M-6 14 L-6 -4 Q-6 -12 0 -14 Q6 -12 6 -4 L6 14", ref: "Phil 4:6–7; Matt 6:6", d: "Anxiety turned into prayer and thanksgiving is met by a peace that “will guard your hearts and your minds in Christ Jesus”." },
  { t: "Community", icon: "M-10 -4 A4 4 0 1 0 -9.9 -4 M10 -4 A4 4 0 1 0 10.1 -4 M0 -8 A4 4 0 1 0 0.1 -8 M-14 12 Q-10 2 -6 12 M6 12 Q10 2 14 12 M-4 10 Q0 0 4 10", ref: "Heb 10:24–25; Prov 27:17; Jas 5:16", d: "Iron sharpens iron. Confession, encouragement and wise counsel break isolated thinking." },
  { t: "Practice and obedience", icon: "M-12 10 L-4 2 L2 8 L12 -6 M6 -6 H12 V0", ref: "Heb 5:14; Phil 4:9; 1 Tim 4:7", d: "Gymnazō: training, like an athlete. Doing the truth trains the mind until right responses become natural." },
  { t: "Trials and suffering", icon: "M-12 12 L0 -12 L12 12 Z M0 -2 V4 M0 7 V8", ref: "Jas 1:2–4; Rom 5:3–5; 1 Pet 1:6–7", d: "Testing produces steadfastness, character and hope: trials refine thinking like fire refines gold." },
  { t: "Repentance", icon: "M-12 0 A12 12 0 1 1 0 12 M-12 0 L-16 -6 M-12 0 L-6 -4", ref: "Matt 4:17; Acts 3:19; 2 Tim 2:25", d: "Metanoia: a change of mind that turns direction. “Repent … that times of refreshing may come.”" }
];

/* 6 · Philippians 4:8 thought filter */
DATA.mn.filters = [["True", "alēthē"], ["Honourable", "semna"], ["Just", "dikaia"], ["Pure", "hagna"], ["Lovely", "prosphilē"], ["Commendable", "euphēma"], ["Excellent", "aretē"], ["Praiseworthy", "epainos"]];
DATA.mn.thoughts = [
  { t: "“Everyone at church is fake.”", fail: [0, 2, 4], note: "A sweeping judgement that is not true, not just and not lovely. Replace it with something like: “People are in process, like me. Who can I encourage this week?” (Heb 10:24)." },
  { t: "“God has been faithful to me before; he will be again.”", fail: [], note: "It passes every gate. Rehearse it: this is how David strengthened himself in the LORD (1 Sam 30:6; Ps 77:11)." },
  { t: "“I’ll get them back for what they said.”", fail: [1, 2, 3, 4, 5], note: "Revenge fails almost every filter. “Never avenge yourselves … overcome evil with good” (Rom 12:19–21)." },
  { t: "“What if I lose my job and everything falls apart?”", fail: [0, 4, 7], note: "Fear rehearses an imagined future as if it were true. Turn it into prayer with thanksgiving (Phil 4:6–7; Matt 6:34)." },
  { t: "“My colleague did great work; I should tell her.”", fail: [], note: "It passes: honourable, lovely, commendable. Speak it. Words that build up give grace to those who hear (Eph 4:29)." },
  { t: "“Just one look won’t hurt anyone.”", fail: [0, 3, 6], note: "A lie about consequences that fails purity. Take it captive early: “flee youthful passions” (2 Tim 2:22; Jas 1:14–15)." }
];

/* 7 · Orphan mind vs son mind */
DATA.mn.mindset = [
  ["Identity", "I am what I do; I must prove myself.", "I am a beloved son or daughter; I live from acceptance.", "Matt 3:17; Eph 1:6"],
  ["Provision", "Scarcity: there is never enough, so I grab and hoard.", "Abundance: my Father knows what I need.", "Matt 6:31–33; Phil 4:19"],
  ["Others", "Competition: your win is my loss.", "Honour: I celebrate your success.", "Rom 12:10, 15"],
  ["Authority", "Distrust and rebellion, or people-pleasing.", "Secure submission and healthy respect.", "1 Pet 5:5–6"],
  ["Rest", "Striving and anxious control.", "Trust and Sabbath rest.", "Heb 4:9–10; Ps 127:2"],
  ["Failure", "Shame: I am a failure.", "Discipline: my Father is training me.", "Heb 12:5–11"],
  ["Inheritance", "I must take what I can now.", "I am an heir; I can wait and give.", "Gal 4:7; Rom 8:17"],
  ["Perspective", "Earth-bound and circumstance-led.", "Seated above, heaven-minded.", "Col 3:1–3; Eph 2:6"]
];

/* 8 · 2 Corinthians 3:18 — degrees of glory */
DATA.mn.glory = [
  { t: "Veiled", ref: "2 Cor 3:13–15; Exod 34:33–35", d: "Moses veiled his shining face so Israel would not see the glory fading. “To this day whenever Moses is read a veil lies over their hearts.”" },
  { t: "Turning to the Lord", ref: "2 Cor 3:16–17", d: "“When one turns to the Lord, the veil is removed. Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.”" },
  { t: "Beholding", ref: "2 Cor 3:18; 4:6", d: "“We all, with unveiled face, beholding the glory of the Lord” in “the face of Jesus Christ”: looking at him, as in a mirror." },
  { t: "Being transformed", ref: "2 Cor 3:18; Rom 12:2", d: "Metamorphoumetha: we are being transformed into the same image. It is passive: the Spirit does it as we behold." },
  { t: "Degree by degree", ref: "2 Cor 3:18; Prov 4:18", d: "“From one degree of glory to another.” Like the dawn, “which shines brighter and brighter until full day”." },
  { t: "Like him", ref: "1 John 3:2; Rom 8:29–30", d: "“When he appears we shall be like him, because we shall see him as he is.” The process completes in glory." }
];

/* 9 · Daily renewal rhythm (stored per day) */
DATA.mn.daily = [
  { t: "Read a passage slowly", ref: "Ps 119:105" },
  { t: "Choose one verse to meditate on all day", ref: "Josh 1:8" },
  { t: "Notice one lie I believed today", ref: "Ps 139:23" },
  { t: "Replace it with a specific truth", ref: "Eph 4:22–24" },
  { t: "Speak a declaration aloud", ref: "2 Cor 4:13" },
  { t: "Obey one thing the word said", ref: "Jas 1:22" },
  { t: "Give thanks for three things", ref: "1 Thess 5:18" }
];

DATA.mn.objections = [
  { k: "straw", q: "“Renewing the mind is just positive thinking with Bible verses.”", refs: "Rom 12:2; Titus 3:5; John 17:17",
    not: "This reduces a work of the Spirit to a technique.",
    a: "Positive thinking starts with what I want to believe; renewal starts with what God has said and the Spirit’s power to make it true in me. It is “the renewal of the Holy Spirit”, it includes repentance, and it often means facing painful truths, not avoiding them." },
  { k: "serious", q: "“At conversion everything is made new, so there is nothing left to renew.”", refs: "2 Cor 5:17; 4:16; Eph 4:22–24; Col 3:10",
    not: "No one denies that believers are new creations.",
    a: "Paul writes both: “if anyone is in Christ, he is a new creation” and “our inner self is being renewed day by day”. The new self “is being renewed in knowledge”. Our position is complete; our thinking is still being brought into line with it." },
  { k: "serious", q: "“Transformation is all God’s work, so I just wait for it.”", refs: "Phil 2:12–13; Rom 12:1–2; 2 Pet 1:5–8",
    not: "No one claims we transform ourselves.",
    a: "“Work out your own salvation … for it is God who works in you.” Romans 12:2 is passive (be transformed) yet a command: we present ourselves, set our minds, take thoughts captive and practise. Grace is opposed to earning, not to effort." },
  { k: "serious", q: "“Feelings don’t matter; only right doctrine does.”", refs: "Ps 42:5; Mark 14:34; Gal 5:22",
    not: "No one is putting feelings above truth.",
    a: "Scripture engages the whole heart: the psalmist argues with his own soul, Jesus was “very sorrowful”, and the fruit of the Spirit includes joy and peace. Renewal brings truth to our emotions instead of suppressing them." },
  { k: "straw", q: "“If you had a renewed mind you would never struggle with anxiety or depression.”", refs: "2 Cor 1:8–9; 1 Kgs 19:4–8; Ps 88",
    not: "This heaps shame on the struggling.",
    a: "Paul “despaired of life itself”; Elijah asked to die and God gave him sleep and food first. Renewal is a process, and God uses many means, including rest, community, wise counsel and medical care, alongside prayer and the word." },
  { k: "serious", q: "“Christians shouldn’t need counselling or therapy.”", refs: "Prov 11:14; 15:22; Col 4:14",
    not: "No one says counselling replaces the Spirit and the word.",
    a: "“In an abundance of counsellors there is safety.” Luke was “the beloved physician”. Wise counsel and good care can serve renewal when they are consistent with Scripture. All truth is God’s truth, and the Spirit can use it." }
];
DATA.mn.study = [
  { t: "Romans 12:2", q: ["Which word in the Romans 12:2 breakdown struck you most? Why?", "Where is the world squeezing you into its shape right now?"] },
  { t: "Lies and truth", q: ["Which lie in the exchange tool have you believed? Write the truth and a verse on a card for this week.", "Walk one recurring thought through the six steps of taking it captive."] },
  { t: "Mindsets", q: ["In the orphan and son table, which row is most true of you? What would change if you thought like a son there?", "Track the daily renewal rhythm for seven days. What changed?"] }
];
DATA.mn.memory = [
  ["Romans 12:2", "“Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.”"],
  ["2 Corinthians 3:18", "“And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another.”"],
  ["2 Corinthians 10:5", "“We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ.”"],
  ["Philippians 4:8", "“Whatever is true, whatever is honourable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable … think about these things.”"],
  ["Isaiah 26:3", "“You keep him in perfect peace whose mind is stayed on you, because he trusts in you.”"],
  ["Ephesians 4:23–24", "“To be renewed in the spirit of your minds, and to put on the new self, created after the likeness of God.”"]
];
DATA.quiz.push(
  { q: "The Greek word for “transformed” in Romans 12:2 is also used for…", a: ["The flood", "Jesus’ transfiguration", "Pentecost", "The crossing of the Red Sea"], c: 1, x: "Metamorphoō: Jesus “was transfigured before them” (Matt 17:2)." },
  { q: "According to Romans 8:6, the mind set on the Spirit is…", a: ["Strength and wealth", "Life and peace", "Wisdom and knowledge", "Joy and patience"], c: 1, x: "“To set the mind on the Spirit is life and peace.”" },
  { q: "In 2 Corinthians 10:5 we take every thought captive to…", a: ["Forget it", "Obey Christ", "Analyse it", "Share it"], c: 1, x: "“Take every thought captive to obey Christ.”" }
);
DATA.web.nodes.push({ id: "mind", n: "Renewing the mind", g: 4, d: "Transformation from the inside out: the Spirit renews the mind so sons think from heaven and become like the Son (Rom 12:2; 2 Cor 3:18)." });
DATA.web.edges.push(
  ["mind", "sons", "Sons grow into the image of the Son"],
  ["mind", "warfare", "Strongholds are thoughts taken captive"],
  ["mind", "sowing", "Thoughts are seeds"],
  ["mind", "kingpriest", "Kings and priests think from heaven"]
);
if (DATA.sn && DATA.sn.hub) DATA.sn.hub.push({ n: "X", t: "Renewing the Mind", f: "mind.html", c: "babel", d: "Transformation is how sons grow into the image of the Son until heaven’s mind shapes earth’s life (Rom 12:2; 2 Cor 3:18)." });
Object.assign(DATA.images, {
  transfig: { file: "Transfiguration_Raphael.jpg", cap: "Raphael, <i>The Transfiguration</i> (1516–20), Vatican Museums. The same Greek word, metamorphoō, describes Jesus transfigured (Matt 17:2) and us being transformed (Rom 12:2).", ar: "3/4", art: "star" }
});

;DATA.quiz.forEach(q => { q.part = q.part || "mind"; });

/* Part VIII·d addition: "heavenly places" as the sanctuary — the holy place and its priestly privileges */
DATA.sc = {};

/* Zones of the tabernacle, from outside the camp to beyond the second veil */
DATA.sc.zones = [
  { id: "outside", t: "Outside: far off", who: "Gentiles and the unclean", ref: "Eph 2:12–13; Num 5:2–3", d: "“Separated from Christ, alienated from the commonwealth of Israel … having no hope and without God in the world.” Outside the camp was the place of exclusion.", eph: "“But now in Christ Jesus you who once were far off have been brought near by the blood of Christ” (Eph 2:13)." },
  { id: "court", t: "The outer court", who: "The ordinary Israelite", ref: "Lev 1:2–5; Ps 100:4", d: "The worshipper could bring a sacrifice to the bronze altar and watch the priest wash at the laver. He could come this far and no further. He never saw the light inside the tent.", eph: "Good, but outside: the old covenant worshipper was near the house, not inside it." },
  { id: "holy", t: "The holy place, through the first veil", who: "The priests", ref: "Heb 9:2, 6; Exod 26:36; 28:1", d: "Behind the first curtain stood the lampstand, the table of bread and the altar of incense. Only consecrated priests entered daily to tend the light, eat the bread and offer incense. This was “heaven” in the tent.", eph: "“Blessed … with every spiritual blessing in the heavenly places” (Eph 1:3): the privileges of the holy place now belong to every believer." },
  { id: "holiest", t: "The holy of holies, beyond the second veil", who: "The high priest, once a year", ref: "Heb 9:3–7; Lev 16:2, 34", d: "Behind the second curtain was the ark, the mercy seat and the cherubim: God’s throne-room presence. Only the high priest entered, once a year, “not without blood”.", eph: "Christ has entered “into heaven itself” as our forerunner (Heb 6:19–20; 9:24). The goal of the story is full union: “the dwelling place of God is with man” (Rev 21:3)." }
];

/* The three pieces of the holy place */
DATA.sc.furniture = [
  { id: "menorah", n: "The lampstand", tag: "Illumination: knowing God", c: "var(--accent)",
    ot: "The holy place had no window. Its only light came from the seven-branched lampstand of pure gold, kept burning by the priests (Exod 25:31–40; 27:20–21; Lev 24:1–4). Without it the priest would walk in darkness.",
    who: "Only the priests ever saw this light. The common worshipper stood outside the tent.",
    christ: "Jesus: “I am the light of the world” (John 8:12). God “has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ” (2 Cor 4:6). The lampstands are the churches (Rev 1:20).",
    eph: "“Having the eyes of your hearts enlightened, that you may know what is the hope … the riches … the immeasurable greatness” (Eph 1:17–18). “Now you are light in the Lord. Walk as children of light” (Eph 5:8).",
    you: "You are enlightened", gifts: ["Understanding", "Revelation", "Knowledge of God", "Wisdom", "Truth"] },
  { id: "bread", n: "The table of showbread", tag: "Fellowship: union and communion", c: "var(--eden)",
    ot: "Twelve loaves, one for each tribe, set “before the LORD” every Sabbath as “an everlasting covenant” (Lev 24:5–9; Exod 25:30). Literally the “bread of the presence” (leḥem pānîm).",
    who: "It was not food for the nation: “it shall be for Aaron and his sons, and they shall eat it in a holy place” (Lev 24:9). David ate it only in an emergency (1 Sam 21:6; Matt 12:4). The Israelite brought sacrifices; the priest sat and ate in God’s house.",
    christ: "Jesus: “I am the bread of life” (John 6:35, 51). “The bread that we break, is it not a participation in the body of Christ?” (1 Cor 10:16–17). “I will come in to him and eat with him, and he with me” (Rev 3:20).",
    eph: "“You are no longer strangers and aliens, but … members of the household of God” (Eph 2:19). Eating in Scripture is covenant participation: everyone now shares the priestly meal.",
    you: "You belong", gifts: ["Acceptance", "Fellowship", "Participation", "Union", "Covenant belonging"] },
  { id: "incense", n: "The altar of incense", tag: "Access: nearness and acceptance", c: "var(--babel)",
    ot: "A golden altar stood immediately before the second veil, and its smoke rose continually, morning and evening (Exod 30:1–10). Scripture links incense with prayer: “Let my prayer be counted as incense before you” (Ps 141:2).",
    who: "Only the priest approached this close. When Zechariah burned incense, “the whole multitude of the people were praying outside” (Luke 1:9–10).",
    christ: "In heaven the golden bowls of incense “are the prayers of the saints” (Rev 5:8; 8:3–4). Through Jesus “we have confidence to enter the holy places” and “draw near” (Heb 10:19–22).",
    eph: "“Through him we both have access in one Spirit to the Father” (Eph 2:18). “In whom we have boldness and access with confidence through our faith in him” (Eph 3:12). “Let us then with confidence draw near” (Heb 4:16): priestly language.",
    you: "You are near and accepted", gifts: ["Access", "Acceptance", "Confidence", "Nearness", "Being heard"] }
];

/* Not powers — privileges */
DATA.sc.compare = [
  ["“Spiritual blessings” are…", "supernatural abilities, mystical powers, special experiences", "the privileges of the holy place: relationship, access, identity and participation"],
  ["The point of the blessing", "being more powerful than other people", "no longer standing outside the sanctuary"],
  ["The light", "secret knowledge for a few", "every believer enlightened to know God (Eph 1:18)"],
  ["The bread", "a reward for the spiritual elite", "every believer eating at God’s table (Eph 2:19)"],
  ["The incense", "a technique to make prayer work", "every believer heard, welcomed and accepted (Eph 2:18)"],
  ["Where it leads", "self-promotion", "worship and service as a royal priesthood (1 Pet 2:9)"]
];
DATA.sc.paraphrase = "“Blessed be God, who has brought us through the veil and granted us every privilege that formerly belonged only to those ministering in the sanctuary.”";
DATA.sc.identity = [
  ["You are enlightened", "Eph 1:18; 5:8", "the lampstand"],
  ["You are accepted", "Eph 1:6", "the altar of incense"],
  ["You are included", "Eph 1:13; 3:6", "the table"],
  ["You are near", "Eph 2:13", "the altar of incense"],
  ["You belong", "Eph 2:19", "the table"],
  ["You are a priest", "1 Pet 2:5, 9; Rev 1:6", "the whole holy place"]
];
DATA.sc.readings = [
  ["Full access now", "Many read the curtain torn at the cross (Matt 27:51) as the inner veil, so that believers already enter the holy of holies “by the new and living way … through the curtain, that is, through his flesh” (Heb 10:19–22)."],
  ["The holy place now, full union awaited", "Others notice Hebrews 9:8: “the way into the holy places is not yet opened as long as the first section is still standing.” They see the first generation of believers living in the holy place while the old covenant was “ready to vanish away” (Heb 8:13), awaiting full union with God’s presence beyond the remaining veil."],
  ["What both agree on", "In Christ we are no longer outside. Every believer has been moved, by covenant, from the outer court to the priesthood: light, bread, incense, access, and a forerunner who has gone ahead of us into the presence itself (Heb 6:19–20)."]
];

DATA.wf.objections.push(
  { k: "straw", q: "“Every spiritual blessing means believers have special powers that make them superior.”", refs: "Eph 1:3–14; 2:18–22; 1 Pet 2:9",
    not: "This misreads “spiritual blessings” as abilities.",
    a: "Paul lists the blessings himself: chosen, adopted, redeemed, forgiven, enlightened, sealed. They are the privileges of the holy place: light, fellowship and access. Gifts and power are real (1 Cor 12), but they serve the body. The core blessing is relationship, not rank." }
);
DATA.wf.study.push({ t: "The holy place", q: ["Which of the three, the lamp, the bread or the incense, do you most need to live in this week?", "Read Ephesians 1:3–2:22 and mark every phrase about light, belonging or access."] });
DATA.wf.memory.push(["Ephesians 2:18–19", "“For through him we both have access in one Spirit to the Father. So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God.”"]);
DATA.quiz.push({ q: "Which piece of the holy place does Scripture most often link with prayer?", a: ["The lampstand", "The table of showbread", "The altar of incense", "The bronze laver"], c: 2, x: "“Let my prayer be counted as incense before you” (Ps 141:2); the golden bowls of incense are “the prayers of the saints” (Rev 5:8)." });
DATA.web.edges.push(["warfare", "tabernacle", "“Heavenly places”: the holy place opened to every believer"]);

DATA.sc.glossary = [
  { w: "menôrâ", t: "Lampstand", d: "The seven-branched golden lampstand, the only light in the holy place (Exod 25:31–40)." },
  { w: "leḥem pānîm", t: "Bread of the presence", d: "The twelve loaves set before the LORD each Sabbath and eaten only by priests (Lev 24:5–9)." },
  { w: "qəṭōret", t: "Incense", d: "The holy incense burned on the golden altar before the veil, a picture of prayer (Exod 30:34–38; Ps 141:2)." },
  { w: "pārōket", t: "Veil, curtain", d: "The curtain screening the holy of holies (Exod 26:31–33); torn at Jesus’ death (Matt 27:51)." },
  { w: "epouraniois", t: "Heavenly places", d: "Paul’s phrase in Ephesians (1:3, 20; 2:6; 3:10; 6:12): the realm of God’s presence and rule, pictured in the sanctuary." },
  { w: "prosagōgē", t: "Access", d: "The right of approach, like being introduced into a king’s presence (Eph 2:18; 3:12; Rom 5:2)." }
];

;DATA.quiz.forEach(q => { q.part = q.part || "warfare"; });

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
      else if (k === "style" && typeof v === "object") Object.entries(v).forEach(([sk, sv2]) => sk.startsWith("--") ? n.style.setProperty(sk, sv2) : (n.style[sk] = sv2));
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
      star: () => { const pts = Array.from({ length: 5 }, (_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [Math.cos(a) * 95, Math.sin(a) * 95 - 10]; }); return [...pts.map((p, i) => sv("line", { x1: p[0], y1: p[1], x2: pts[(i + 1) % 5][0], y2: pts[(i + 1) % 5][1], stroke: "var(--muted)", "stroke-width": 3, opacity: .5 })), ...pts.map(p => sv("line", { x1: 0, y1: -10, x2: p[0], y2: p[1], stroke: gold, "stroke-width": 3 })), sv("circle", { cx: 0, cy: -10, r: 30, fill: gold }), ...pts.map((p, i) => sv("circle", { cx: p[0], cy: p[1], r: 20, fill: [blue, gold, "var(--flame)", green, "var(--muted)"][i] }))]; },
      keys: () => [sv("circle", { cx: 0, cy: -30, r: 46, fill: "none", stroke: gold, "stroke-width": 10 }), ...[-40, -10, 20, 50].map((a, i) => { const r = (90 + a) * Math.PI / 180, x = Math.cos(r) * 46, y = -30 + Math.sin(r) * 46; return sv("g", { transform: `translate(${x} ${y}) rotate(${a})` }, sv("circle", { cx: 0, cy: 12, r: 9, fill: "none", stroke: [gold, blue, "var(--flame)", green][i], "stroke-width": 5 }), sv("rect", { x: -3, y: 21, width: 6, height: 70, fill: [gold, blue, "var(--flame)", green][i] }), sv("rect", { x: 3, y: 78, width: 12, height: 6, fill: [gold, blue, "var(--flame)", green][i] })); })],
      sower: () => [sv("circle", { cx: 120, cy: -70, r: 34, fill: gold, opacity: .6 }), sv("path", { d: "M-200 40 Q0 -10 200 40 L200 80 L-200 80 Z", fill: "#8a6238", opacity: .5 }), sv("circle", { cx: -40, cy: -70, r: 14, fill: "var(--ink)", opacity: .7 }), sv("path", { d: "M-56 -54 L-24 -54 L-14 30 L-66 30 Z", fill: "var(--ink)", opacity: .6 }), sv("path", { d: "M-24 -40 L20 -60", stroke: "var(--ink)", "stroke-width": 6, opacity: .6 }), ...[0, 1, 2, 3, 4].map(i => sv("circle", { cx: 30 + i * 14, cy: -50 + i * 16, r: 3, fill: gold }))],
      crown: () => [sv("path", { d: "M-150 20 L-150 -40 L-120 -10 L-95 -60 L-70 -10 L-40 -40 L-40 20 Z", fill: gold }), sv("path", { d: "M40 20 L40 -30 Q90 -80 140 -30 L140 20 Z", fill: "var(--surface)", stroke: "var(--muted)", "stroke-width": 3 }), sv("rect", { x: 70, y: -22, width: 40, height: 12, rx: 3, fill: gold }), sv("circle", { cx: 0, cy: -20, r: 30, fill: gold, opacity: .25 }), sv("rect", { x: -160, y: 40, width: 320, height: 8, rx: 4, fill: "var(--muted)", opacity: .5 })],
      shield: () => [sv("path", { d: "M-150 -60 L-60 -20 M-150 -10 L-60 0 M-150 40 L-60 20", stroke: "var(--flame)", "stroke-width": 5, "stroke-linecap": "round", opacity: .7 }), sv("path", { d: "M0 -100 L70 -76 L64 4 Q50 50 0 74 Q-50 50 -64 4 L-70 -76 Z", fill: blue }), sv("path", { d: "M-6 -70 h12 v30 h26 v12 h-26 v54 h-12 v-54 h-26 v-12 h26 Z", fill: gold }), sv("circle", { cx: 120, cy: -50, r: 30, fill: gold, opacity: .3 })],
      union: () => [sv("circle", { cx: -40, cy: -20, r: 70, fill: gold, opacity: .35 }), sv("circle", { cx: 40, cy: 0, r: 70, fill: green, opacity: .35 }), sv("path", { d: "M0 -60 v80 M-30 -30 h60", stroke: gold, "stroke-width": 8 }), ...[-150, -110, 120, 150].map((x, i) => sv("circle", { cx: x, cy: -50 + i * 30, r: 4, fill: gold }))],
      butterfly: () => [sv("path", { d: "M0 0 Q-70 -90 -60 -10 Q-80 50 0 10 Z", fill: "var(--flame)", opacity: .8 }), sv("path", { d: "M0 0 Q70 -90 60 -10 Q80 50 0 10 Z", fill: gold, opacity: .85 }), sv("rect", { x: -4, y: -30, width: 8, height: 70, rx: 4, fill: "var(--ink)", opacity: .7 }), ...[-150, -120].map((x, i) => sv("circle", { cx: x, cy: 20 - i * 14, r: 8 + i * 2, fill: green, opacity: .6 }))],
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
    const order = ["eden", "mountain", "adam", "serpent", "seed", "tabernacle", "ark", "temple", "kingpriest", "melchizedek", "prophets", "fivefold", "keys", "sowing", "warfare", "sons", "mind", "jesus", "church", "newjer", "pentecost", "bethel", "abraham", "shem", "nations", "babylon", "babel"];
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

  /* ================ Part IV: kings and priests ================ */
  const KC = { accent: "var(--accent)", babel: "var(--babel)", eden: "var(--eden)", flame: "var(--flame)", muted: "var(--muted)", ink: "var(--ink)" };

  /* Generic SVG flowchart: boxes centred on (x, y), arrows from bottom to top */
  function flowchart(host, nodes, edges, opt) {
    const W = opt.w, H = opt.h, uid = opt.id;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": opt.label });
    svg.append(sv("defs", {}, sv("marker", { id: uid + "-arr", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--muted)" }))));
    const subOf = n => n.sub ? n.sub + (n.ref ? "  ·  " + n.ref : "") : (opt.refsInline && n.ref ? n.ref : null);
    const box = n => { const h = subOf(n) ? 62 : 50; return { x: n.x - (n.w || opt.nodeW) / 2, y: n.y - h / 2, w: n.w || opt.nodeW, h }; };
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    edges.forEach(([a, b]) => {
      const A = box(byId[a]), B = box(byId[b]);
      const x1 = byId[a].x, y1 = A.y + A.h, x2 = byId[b].x, y2 = B.y - 4, my = (y1 + y2) / 2;
      const d = `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`;
      svg.append(sv("path", { d, fill: "none", stroke: "var(--line)", "stroke-width": 2.5, "marker-end": `url(#${uid}-arr)` }),
        sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .7 }));
    });
    (opt.annotate || []).forEach(a => svg.append(sv("text", { x: a.x, y: a.y, "text-anchor": a.anchor || "middle", "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }, a.t)));
    const els = {};
    nodes.forEach(n => {
      const b = box(n), c = KC[n.c] || KC.ink;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": n.t });
      const r = sv("rect", { x: b.x, y: b.y, width: b.w, height: b.h, rx: 12, fill: c, "fill-opacity": .12, stroke: c, "stroke-width": 1.8 });
      const sub = subOf(n);
      g.append(r, sv("text", { x: n.x, y: n.y + (sub ? -4 : 5), "text-anchor": "middle", "font-size": opt.fs || 15, "font-weight": 800, fill: "var(--ink)" }, n.t));
      if (sub) g.append(sv("text", { x: n.x, y: n.y + 17, "text-anchor": "middle", "font-size": 12.5, "font-style": "italic", "font-weight": 600, fill: c === KC.ink ? "var(--muted)" : c }, sub));
      g.addEventListener("click", () => sel(n.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(n.id); } });
      els[n.id] = r; svg.append(g);
    });
    host.append(svg);
    function sel(id) {
      Object.entries(els).forEach(([k, r]) => { const on = k === id; r.setAttribute("fill-opacity", on ? .32 : .12); r.setAttribute("stroke-width", on ? 3.5 : 1.8); });
      opt.onSelect(byId[id]);
    }
    sel(opt.start || nodes[0].id);
    return sel;
  }
  const panelFill = (sel, eyebrow, n) => $(sel).replaceChildren(...[el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: n.t }), n.ref ? el("span", { class: "ref", text: n.ref }) : null, el("p", { html: refify(n.d) })].filter(Boolean));

  function initKpDesign() {
    flowchart($("#kpDesign"), DATA.kp.design, DATA.kp.designEdges, {
      id: "kpd", w: 900, h: 470, nodeW: 300, label: "Flowchart of God’s design for humanity as priest-kings", start: "adam",
      annotate: [{ x: 250, y: 168, t: "faces the world for God", anchor: "end" }, { x: 650, y: 168, t: "faces God for the world", anchor: "start" }],
      onSelect: n => panelFill("#kpDesignPanel", "God’s design", n)
    });
    // axis diagram
    const svg = sv("svg", { viewBox: "0 0 420 300", role: "img", "aria-label": "Two axes: the priest faces God for people; the king faces the world for God" });
    svg.append(sv("defs", {}, sv("marker", { id: "ax-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 8, markerHeight: 8, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--ink)" }))));
    svg.append(sv("line", { x1: 210, y1: 262, x2: 210, y2: 34, stroke: "var(--eden)", "stroke-width": 5, "marker-end": "url(#ax-arr)", "marker-start": "url(#ax-arr)" }),
      sv("line", { x1: 40, y1: 150, x2: 380, y2: 150, stroke: "var(--babel)", "stroke-width": 5, "marker-end": "url(#ax-arr)", "marker-start": "url(#ax-arr)" }));
    svg.append(sv("circle", { cx: 210, cy: 150, r: 34, fill: "var(--accent)", opacity: .2, class: "pulse" }), sv("circle", { cx: 210, cy: 150, r: 22, fill: "var(--accent)" }),
      sv("text", { x: 210, y: 154, "text-anchor": "middle", "font-size": 10, "font-weight": 800, fill: "var(--accent-ink)" }, "IMAGE"));
    const t = (x, y, s, c, a, fs) => svg.append(sv("text", { x, y, "text-anchor": a || "middle", "font-size": fs || 12, "font-weight": 800, fill: c }, s));
    t(210, 22, "GOD", "var(--ink)"); t(210, 288, "PEOPLE & CREATION", "var(--ink)");
    t(222, 72, "PRIEST", "var(--eden)", "start", 13); t(222, 88, "access · worship · intercession", "var(--muted)", "start", 11);
    t(380, 136, "KING", "var(--babel)", "end", 13); t(380, 178, "authority · stewardship · justice", "var(--muted)", "end", 11);
    if (!reduceMotion) {
      [["M210 262 L210 40", "var(--eden)", 0], ["M210 40 L210 262", "var(--eden)", 1.5], ["M210 150 L374 150", "var(--babel)", .7], ["M210 150 L46 150", "var(--babel)", 2.2]].forEach(([p, c, b]) => {
        const dot = sv("circle", { r: 5, fill: c }); dot.append(sv("animateMotion", { dur: "3s", repeatCount: "indefinite", path: p, begin: b + "s" })); svg.append(dot);
      });
    }
    $("#kpAxis").append(svg);
  }

  function initKpTwist() {
    const list = $("#kpTwist");
    const tag = { king: ["Kingship", "var(--babel)"], priest: ["Priesthood", "var(--eden)"], both: ["Both", "var(--flame)"] };
    const items = DATA.kp.twist.map((s, i) => {
      const li = el("li", { class: "vstep", "data-s": s.strand }, el("button", { type: "button", onclick: () => sel(i) },
        el("span", { class: "vtag", style: { background: tag[s.strand][1] }, text: tag[s.strand][0] }), el("b", { text: s.t }), el("small", { text: s.ref })));
      list.append(li); return li;
    });
    function sel(i) {
      items.forEach((li, j) => li.classList.toggle("on", j === i));
      const s = DATA.kp.twist[i];
      $("#kpTwistPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: tag[s.strand][1] }, text: `Step ${i + 1} of ${DATA.kp.twist.length} · ${tag[s.strand][0]}` }), el("h3", { text: s.t }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.d) }));
    }
    const f = $("#kpTwistFilter");
    [["all", "All steps"], ["king", "Kingship twisted"], ["priest", "Priesthood twisted"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      items.forEach(li => li.classList.toggle("dim", k !== "all" && li.dataset.s !== k && li.dataset.s !== "both"));
    } })));
    sel(0);
    // design vs distortion
    const box = $("#kpContrast");
    const rows = DATA.kp.contrast.map(r => { const v = el("p", { class: "cval", html: refify(r[1]) }); box.append(el("div", { class: "crow" }, el("b", { text: r[0] }), v)); return v; });
    const tg = $("#kpContrastToggle");
    const set = mode => {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === mode)));
      box.classList.toggle("twisted", mode === "twisted");
      rows.forEach((v, i) => { v.classList.add("out"); setTimeout(() => { v.innerHTML = refify(DATA.kp.contrast[i][mode === "twisted" ? 2 : 1]); v.classList.remove("out"); }, reduceMotion ? 0 : 200 + i * 60); });
    };
    [["design", "God’s design"], ["twisted", "The distortion"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, "aria-pressed": String(m === "design"), text: n, onclick: () => set(m) })));
  }

  function initKpSplit() {
    const nodes = DATA.kp.split.map(n => ({ ...n, w: ["levi", "judah", "prophet"].includes(n.id) ? 236 : 400 }));
    flowchart($("#kpSplit"), nodes, DATA.kp.splitEdges, { id: "kps", w: 900, h: 482, nodeW: 340, refsInline: true, label: "Flowchart: from a kingdom of priests to separate offices and their reunion in the Messiah", onSelect: n => panelFill("#kpSplitPanel", "Sinai to the Messiah", n) });
    // triangle
    const P = { prophet: [210, 56], priest: [70, 296], king: [350, 296] };
    const svg = sv("svg", { viewBox: "0 0 420 360", role: "img", "aria-label": "Triangle of the three anointed offices with the Messiah at the centre" });
    const edge = (a, b, label, lx, ly) => { svg.append(sv("line", { x1: P[a][0], y1: P[a][1], x2: P[b][0], y2: P[b][1], stroke: "var(--line)", "stroke-width": 3 })); svg.append(sv("text", { x: lx, y: ly, "text-anchor": "middle", "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }, label)); };
    edge("prophet", "priest", "corrects (Malachi)", 96, 170); edge("prophet", "king", "confronts (Nathan, Elijah)", 330, 170); edge("priest", "king", "anoints & partners (Zadok, Jehoiada)", 210, 330);
    svg.append(sv("path", { d: "M210 150 C190 180 190 200 210 210 C230 200 230 180 210 150 Z", fill: "var(--accent)", class: "pulse" }),
      sv("text", { x: 210, y: 236, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "Messiah · Christ"), sv("text", { x: 210, y: 251, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "“the Anointed One”"));
    const vs = {};
    Object.entries(DATA.kp.offices).forEach(([k, o]) => {
      const [x, y] = P[k];
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": o.t }, sv("circle", { cx: x, cy: y, r: 34, fill: o.c, "fill-opacity": .2, stroke: o.c, "stroke-width": 2 }), sv("text", { x, y: y + 5, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, o.t));
      g.addEventListener("click", () => sel(k)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(k); } });
      vs[k] = g.firstChild; svg.append(g);
    });
    $("#kpTriangle").append(svg);
    function sel(k) {
      Object.entries(vs).forEach(([j, c]) => { c.setAttribute("fill-opacity", j === k ? .45 : .2); c.setAttribute("stroke-width", j === k ? 4 : 2); });
      const o = DATA.kp.offices[k];
      $("#kpTrianglePanel").replaceChildren(el("p", { class: "eyebrow", text: "Anointed office" }), el("h3", { text: o.t }), el("p", { html: refify(o.role) }),
        el("div", { class: "row" }, el("b", { text: "Anointing" }), el("p", { html: refify(o.anoint) })),
        el("div", { class: "row christ" }, el("b", { text: "Fulfilled in Christ" }), el("p", { html: refify(o.christ) })),
        el("div", { class: "row eden" }, el("b", { text: "Our share" }), el("p", { html: refify(o.us) })));
    }
    sel("priest");
  }

  function initKpRoles() {
    const R = DATA.kp.roles;
    makeTabs($("#kpRoleTabs"), $("#kpRolePanels"), [{ tab: "The priest", k: "priest" }, { tab: "The king", k: "king" }], (p, it) => {
      const r = R[it.k], c = it.k === "priest" ? "var(--eden)" : "var(--babel)";
      const card = (t, body) => el("div", { class: "card role-card", style: { borderTop: `3px solid ${c}` } }, el("p", { class: "eyebrow", style: { color: c }, text: t }), body);
      p.append(el("div", { class: "role-grid" },
        card("Responsibilities", el("ul", { class: "tight" }, r.resp.map(x => el("li", { html: refify(x) })))),
        card("Access", el("p", { html: refify(r.access) })), card("Authority", el("p", { html: refify(r.authority) })), card("Limits", el("p", { html: refify(r.limits) }))));
    }, "kprole");
    // garments
    const svg = sv("svg", { viewBox: "0 0 600 430", role: "img", "aria-label": "The high priest's garments and the king's signs of office" });
    const G = {};
    const hot = (id, ...kids) => { const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": DATA.kp.garments.find(x => x.id === id).t }, ...kids); g.addEventListener("click", () => sel(id)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(id); } }); G[id] = g; return g; };
    // priest
    svg.append(sv("circle", { cx: 170, cy: 76, r: 22, fill: "#c99a6e" }));
    svg.append(hot("tunic", sv("rect", { class: "hl", x: 108, y: 112, width: 22, height: 120, rx: 10, fill: "var(--surface)", stroke: "var(--muted)" }), sv("rect", { class: "hl", x: 210, y: 112, width: 22, height: 120, rx: 10, fill: "var(--surface)", stroke: "var(--muted)" })));
    svg.append(hot("robe", sv("path", { class: "hl", d: "M132 104 L208 104 L236 372 L104 372 Z", fill: "var(--babel)", stroke: "transparent" }), ...Array.from({ length: 11 }, (_, i) => sv("circle", { cx: 110 + i * 12, cy: 370, r: 4, fill: i % 2 ? "var(--flame)" : "var(--accent)" }))));
    svg.append(hot("ephod", sv("rect", { class: "hl", x: 138, y: 106, width: 64, height: 128, rx: 4, fill: "var(--accent)", stroke: "transparent" }), sv("rect", { x: 138, y: 220, width: 64, height: 10, fill: "var(--flame)", opacity: .8 }), sv("circle", { cx: 142, cy: 108, r: 7, fill: "#2b2b2b" }), sv("circle", { cx: 198, cy: 108, r: 7, fill: "#2b2b2b" })));
    const gems = sv("g", {}, sv("rect", { class: "hl", x: 151, y: 126, width: 38, height: 50, rx: 3, fill: "var(--surface)", stroke: "transparent" }));
    DATA.breastpiece.forEach(([, c], i) => gems.append(sv("rect", { x: 154 + (i % 3) * 11.5, y: 129 + Math.floor(i / 3) * 11.5, width: 9, height: 9, rx: 1.5, fill: c })));
    svg.append(hot("breast", gems));
    svg.append(hot("turban", sv("path", { class: "hl", d: "M148 66 Q148 38 170 38 Q192 38 192 66 Z", fill: "var(--surface)", stroke: "var(--muted)" }), sv("rect", { x: 160, y: 54, width: 20, height: 8, rx: 2, fill: "var(--accent)" })));
    svg.append(sv("text", { x: 170, y: 408, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "The high priest"));
    // king
    svg.append(hot("throne", sv("path", { class: "hl", d: "M360 120 L500 120 L500 380 L360 380 Z M372 132 L488 132 L488 250 L372 250 Z", fill: "var(--muted)", "fill-opacity": .35, "fill-rule": "evenodd", stroke: "transparent" })));
    svg.append(sv("circle", { cx: 430, cy: 76, r: 22, fill: "#c99a6e" }), sv("path", { d: "M398 104 L462 104 L486 372 L374 372 Z", fill: "var(--flame)", opacity: .85 }), sv("path", { d: "M416 104 L444 104 L440 372 L420 372 Z", fill: "var(--surface)", opacity: .7 }));
    svg.append(hot("crown", sv("path", { class: "hl", d: "M408 58 L408 36 L419 48 L430 30 L441 48 L452 36 L452 58 Z", fill: "var(--accent)", stroke: "transparent" })));
    svg.append(hot("scepter", sv("line", { class: "hl", x1: 476, y1: 220, x2: 520, y2: 120, stroke: "var(--accent)", "stroke-width": 6, "stroke-linecap": "round" }), sv("circle", { cx: 522, cy: 114, r: 10, fill: "var(--accent)" })));
    svg.append(hot("ring", sv("circle", { class: "hl", cx: 474, cy: 226, r: 7, fill: "none", stroke: "var(--accent)", "stroke-width": 4 })));
    svg.append(hot("scroll", sv("rect", { class: "hl", x: 360, y: 200, width: 40, height: 28, rx: 6, fill: "var(--surface)", stroke: "var(--muted)" }), sv("line", { x1: 368, y1: 210, x2: 392, y2: 210, stroke: "var(--muted)" }), sv("line", { x1: 368, y1: 218, x2: 388, y2: 218, stroke: "var(--muted)" })));
    svg.append(sv("text", { x: 430, y: 408, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "The king"));
    $("#kpGarments").append(svg);
    function sel(id) {
      const g = DATA.kp.garments.find(x => x.id === id);
      Object.entries(G).forEach(([k, n]) => n.classList.toggle("on", k === id));
      $("#kpGarmentPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: g.who === "priest" ? "var(--eden)" : "var(--babel)" }, text: g.who === "priest" ? "High priest" : "King" }), el("h3", { text: g.t }), el("span", { class: "ref", text: g.ref }), el("p", { html: refify(g.d) }),
        el("div", { class: "chips" }, DATA.kp.garments.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o.id === id), text: o.t.split(" and ")[0].split(":")[0], onclick: () => sel(o.id) }))),
        el("p", { class: "muted", html: "In Christ both meet: John sees him “clothed with a long robe and with a golden sash” like a priest (<span class=\"ref\">Rev 1:13</span>), and crowned with “many diadems” as King of kings (<span class=\"ref\">Rev 19:12, 16</span>)." }));
    }
    sel("breast");
  }

  function initKpRings() {
    const C = [260, 205], S = [[480, 370], [370, 285], [250, 195], [120, 104]];
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "Concentric rings of access in the Temple" });
    const fills = ["var(--muted)", "var(--babel)", "var(--eden)", "var(--accent)"];
    const walls = S.map(([w, h], i) => { const r = sv("rect", { x: C[0] - w / 2, y: C[1] - h / 2, width: w, height: h, rx: 6, fill: fills[i], "fill-opacity": .08 + i * .05, stroke: fills[i], "stroke-width": 3, style: { transition: "stroke-opacity 1s, stroke-dasharray 1s" } }); svg.append(r); return r; });
    DATA.kp.rings.forEach((r, i) => svg.append(sv("text", { x: C[0], y: C[1] - S[3 - i][1] / 2 + 16, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)", "letter-spacing": 1 }, r.n.toUpperCase())));
    const veilL = sv("rect", { x: C[0] - 60, y: C[1] + 44, width: 60, height: 8, fill: "var(--flame)", style: { transition: "transform 1.2s" } }), veilR = sv("rect", { x: C[0], y: C[1] + 44, width: 60, height: 8, fill: "var(--babel)", style: { transition: "transform 1.2s" } });
    svg.append(veilL, veilR);
    // zone 0 = Most Holy (innermost) … zone 3 = outer court
    const counts = [1, 6, 14, 20], zoneFill = ["var(--accent)", "var(--eden)", "var(--babel)", "var(--muted)"];
    let seed = 5; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const homes = [], dots = [];
    counts.forEach((n, z) => {
      for (let k = 0; k < n; k++) {
        let x, y;
        if (z === 0) { x = C[0]; y = C[1] + 8; }
        else {
          const [ow, oh] = S[3 - z], [iw, ih] = S[4 - z];
          do { x = C[0] + (rnd() - .5) * (ow - 26); y = C[1] + (rnd() - .5) * (oh - 44) + 10; } while (Math.abs(x - C[0]) < iw / 2 + 10 && Math.abs(y - C[1]) < ih / 2 + 12);
        }
        homes.push([x, y]);
        const d = sv("circle", { r: 6, fill: zoneFill[z], style: { transition: reduceMotion ? "none" : `transform 1.4s cubic-bezier(.3,.8,.3,1) ${dots.length * 0.02}s, fill .8s` } });
        d.dataset.ring = z;
        dots.push(d); svg.append(d);
      }
    });
    $("#kpRings").append(svg);
    function set(mode) {
      $$("#kpRingToggle .chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === mode)));
      const after = mode === "after";
      walls.forEach((w, i) => { w.style.strokeOpacity = after ? .18 : 1; w.style.strokeDasharray = after ? "4 10" : "none"; });
      veilL.style.transform = after ? "translate(-46px, 0) scaleY(1)" : ""; veilR.style.transform = after ? "translate(46px, 0)" : "";
      dots.forEach((d, i) => {
        let x, y;
        if (after) { const a = i * 2.39996, r = 10 + Math.sqrt(i) * 9.5; x = C[0] + Math.cos(a) * r; y = C[1] + 8 + Math.sin(a) * r * .8; d.setAttribute("fill", "var(--accent)"); }
        else { [x, y] = homes[i]; d.setAttribute("fill", zoneFill[d.dataset.ring]); }
        d.style.transform = `translate(${x}px, ${y}px)`;
      });
      $("#kpRingInfo").replaceChildren(...(after
        ? [el("h3", { text: "After the cross: one open way" }), el("p", { html: refify("“We have confidence to enter the holy places by the blood of Jesus, by the new and living way that he opened for us through the curtain, that is, through his flesh” (Heb 10:19–20).") }),
            el("p", { html: refify("“He himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility … through him we both have access in one Spirit to the Father” (Eph 2:14–18).") }),
            el("p", { html: refify("Every believer, Jew and Gentile, is now a priest with access (1 Pet 2:5, 9). In the end there is no temple at all: “they will see his face” (Rev 21:22; 22:4).") })]
        : [el("h3", { text: "Before the cross: graded access" }), ...DATA.kp.rings.map((r, i) => el("div", { class: "zone on" }, el("i", { style: { background: fills[3 - i] } }), el("div", {}, el("b", { text: r.n }), el("span", { html: refify(r.who + " (" + r.ref + ")") }))))]));
    }
    [["before", "Before the cross"], ["after", "After the cross"]].forEach(([m, n]) => $("#kpRingToggle").append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("before");
  }

  function initKpCross() {
    $("#kpCross").append(...DATA.kp.cross.map(c => el("div", { class: "card xcard reveal " + c.k },
      el("div", { class: "xhead" }, el("span", { class: "xmark", "aria-hidden": "true", text: c.k === "good" ? "✓" : "✕" }), el("div", {}, el("h3", { text: c.n }), el("small", { text: c.role }))),
      el("span", { class: "ref", text: c.ref }),
      el("div", { class: "row" }, el("b", { text: c.k === "good" ? "What they did" : "The line crossed" }), el("p", { html: refify(c.did) })),
      el("div", { class: "row" }, el("b", { text: "What happened" }), el("p", { html: refify(c.res) })))));
  }

  function initKpPeople() {
    const box = $("#kpPeople"), P = DATA.kp.people, E = DATA.kp.eras;
    const grid = el("div", { class: "pgrid", style: { gridTemplateColumns: `120px repeat(${E.length}, minmax(112px, 1fr))` } });
    grid.append(el("span", {}), ...E.map(e => el("span", { class: "pera", text: e })));
    const btns = [];
    [["king", "Kings", "var(--babel)"], ["both", "Both", "var(--accent)"], ["priest", "Priests", "var(--eden)"]].forEach(([lane, label, c]) => {
      grid.append(el("span", { class: "plane", style: { color: c, borderColor: c }, text: label }));
      E.forEach((_, era) => {
        const cell = el("div", { class: "pcell " + lane });
        P.forEach((p, i) => {
          if (p.lane !== lane || p.era !== era) return;
          const b = el("button", { class: "pchip f-" + p.f, type: "button", "data-i": i, text: p.n, onclick: () => sel(i) });
          btns[i] = b; cell.append(b);
        });
        grid.append(cell);
      });
    });
    box.append(grid);
    const f = $("#kpPeopleFilter");
    const filters = { all: () => true, king: p => p.lane === "king", priest: p => p.lane === "priest", both: p => p.lane === "both", faithful: p => p.f === "faithful", twisted: p => p.f === "twisted", pairs: p => !!p.pair };
    [["all", "Everyone"], ["king", "Kings"], ["priest", "Priests"], ["both", "Both offices"], ["pairs", "King–priest partners"], ["faithful", "Faithful"], ["twisted", "Twisted the office"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      P.forEach((p, i) => btns[i].classList.toggle("dim", !filters[k](p)));
    } })));
    const laneName = { king: "King", priest: "Priest", both: "King and priest" }, fName = { faithful: "Faithful", mixed: "Mixed record", twisted: "Twisted the office" };
    function sel(i) {
      const p = P[i];
      const partners = p.pair ? P.filter((q, j) => q.pair === p.pair && j !== i) : [];
      btns.forEach((b, j) => { b.classList.toggle("on", j === i); b.classList.toggle("partner", partners.includes(P[j])); });
      $("#kpPersonPanel").replaceChildren(el("p", { class: "eyebrow", text: `${laneName[p.lane]} · ${E[p.era]} · ${fName[p.f]}` }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }),
        partners.length ? el("div", { class: "row" }, el("b", { text: "Worked alongside" }), el("div", { class: "chips" }, partners.map(q => el("button", { class: "chip", type: "button", text: q.n, onclick: () => sel(P.indexOf(q)) })))) : null);
      const b = btns[i];
      if (box.scrollWidth > box.clientWidth) box.scrollTo({ left: Math.max(0, b.offsetLeft - box.clientWidth / 2), behavior: reduceMotion ? "auto" : "smooth" });
    }
    sel(P.findIndex(p => p.n === "Melchizedek"));
  }

  function initKpMelch() {
    const fl = $("#kpMelchFlow");
    DATA.kp.melchFlow.forEach((s, i) => { if (i) fl.append(el("span", { class: "harrow", "aria-hidden": "true", text: "→" })); fl.append(el("div", { class: "card hstep reveal" }, el("span", { class: "ref", text: s.ref }), el("h3", { text: s.t }), el("p", { html: refify(s.d) }))); });
    const t = $("#kpOrder");
    $("tbody", t).append(...DATA.kp.order.map(r => el("tr", {}, el("td", { text: r[0] }), el("td", { html: refify(r[1]) }), el("td", { html: refify(r[2]) }))));
    $$("th.colsel", t).forEach(th => { th.tabIndex = 0; th.setAttribute("role", "button"); const go = () => { const c = th.dataset.col; t.dataset.hl = t.dataset.hl === c ? "" : c; }; th.addEventListener("click", go); th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }); });
    t.dataset.hl = "2";
  }

  function initKpPromises() {
    const N = DATA.kp.promises, W = 1060, H = 520, yK = 150, yP = 380, yM = 265;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Royal and priestly promises converging on Christ and flowing to his people" });
    const kx = N.filter(n => n.s === "king").map(n => n.x), px = N.filter(n => n.s === "priest").map(n => n.x);
    const join = N.find(n => n.s === "join"), christ = N.find(n => n.s === "christ"), church = N.find(n => n.s === "church");
    const kd = `M30 ${yK} L${kx[kx.length - 1]} ${yK} C${kx[kx.length - 1] + 70} ${yK} ${join.x - 60} ${yM} ${join.x} ${yM}`;
    const pd = `M30 ${yP} L${px[px.length - 1]} ${yP} C${px[px.length - 1] + 70} ${yP} ${join.x - 60} ${yM} ${join.x} ${yM}`;
    const md = `M${join.x} ${yM} L${W - 30} ${yM}`;
    svg.append(sv("text", { x: 30, y: yK - 112, "font-size": 12, "font-weight": 800, "letter-spacing": 2, fill: "var(--babel)" }, "ROYAL PROMISES"), sv("text", { x: 30, y: yP + 128, "font-size": 12, "font-weight": 800, "letter-spacing": 2, fill: "var(--eden)" }, "PRIESTLY PROMISES"));
    [[kd, "var(--babel)"], [pd, "var(--eden)"], [md, "var(--accent)"]].forEach(([d, c], i) => svg.append(sv("path", { d, fill: "none", stroke: c, "stroke-width": i === 2 ? 10 : 6, "stroke-linecap": "round", opacity: .35 }), sv("path", { d, fill: "none", stroke: c, "stroke-width": 2.5, class: "flow" })));
    const nodes = N.map((n, i) => {
      const y = n.s === "king" ? yK : n.s === "priest" ? yP : yM, c = n.s === "king" ? "var(--babel)" : n.s === "priest" ? "var(--eden)" : "var(--accent)";
      const big = n.s === "christ" || n.s === "church" || n.s === "join";
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": n.t });
      g.append(sv("circle", { cx: n.x, cy: y, r: big ? 16 : 11, fill: c, stroke: "var(--surface)", "stroke-width": 3 }));
      const above = n.s === "king" || (big && n.s !== "christ");
      const tier = big ? 0 : (N.filter(m => m.s === n.s).indexOf(n) % 2) * 34;
      const ty = above ? y - (big ? 50 : 36) - tier : y + (big ? 42 : 32) + tier;
      if (tier) g.append(sv("line", { x1: n.x, y1: above ? y - 12 : y + 12, x2: n.x, y2: above ? ty + 20 : ty - 14, stroke: c, "stroke-width": 1, "stroke-dasharray": "2 3" }));
      g.append(sv("text", { x: n.x, y: ty, "text-anchor": "middle", "font-size": big ? 14 : 12.5, "font-weight": 800, fill: "var(--ink)" }, n.t), sv("text", { x: n.x, y: ty + 16, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: c }, n.ref.split(";")[0]));
      g.addEventListener("click", () => { clearInterval(timer); sel(i); });
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); clearInterval(timer); sel(i); } });
      svg.append(g); return g.firstChild;
    });
    $("#kpPromises").append(svg);
    function sel(i) {
      nodes.forEach((c, j) => { c.setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"); c.setAttribute("stroke-width", j === i ? 4 : 3); });
      const n = N[i], lab = { king: "Royal promise", priest: "Priestly promise", join: "The two streams meet", christ: "Fulfilled", church: "Shared with his people" }[n.s];
      $("#kpPromisePanel").replaceChildren(el("p", { class: "eyebrow", text: lab }), el("h3", { text: n.t }), el("span", { class: "ref", text: n.ref }), el("p", { html: refify(n.d) }));
    }
    const order = [];
    const ks = N.map((n, i) => [n, i]).filter(([n]) => n.s === "king"), ps = N.map((n, i) => [n, i]).filter(([n]) => n.s === "priest");
    ks.forEach((k, j) => { order.push(k[1]); if (ps[j]) order.push(ps[j][1]); });
    N.forEach((n, i) => { if (["join", "christ", "church"].includes(n.s)) order.push(i); });
    let timer = null;
    $("#kpPromisePlay").addEventListener("click", () => { clearInterval(timer); let k = 0; sel(order[k]); timer = setInterval(() => { k++; if (k >= order.length) return clearInterval(timer); sel(order[k]); }, 1500); });
    sel(N.indexOf(christ));
  }

  function initKpCalling() {
    // balance
    const svg = sv("svg", { viewBox: "0 0 420 300", role: "img", "aria-label": "A balance between priestly and kingly calling" });
    svg.append(sv("polygon", { points: "210,214 180,272 240,272", fill: "var(--muted)" }), sv("rect", { x: 140, y: 272, width: 140, height: 10, rx: 4, fill: "var(--muted)" }));
    const beam = sv("g", { style: { transformOrigin: "210px 210px", transformBox: "view-box", transition: reduceMotion ? "none" : "transform .5s cubic-bezier(.3,1.3,.5,1)" } });
    const bar = sv("rect", { x: 40, y: 204, width: 340, height: 12, rx: 6, fill: "var(--accent)" });
    beam.append(bar);
    const pan = (x, c, label, iconFn) => { const g = sv("g", {}, sv("line", { x1: x, y1: 210, x2: x - 34, y2: 150, stroke: "var(--muted)" }), sv("line", { x1: x, y1: 210, x2: x + 34, y2: 150, stroke: "var(--muted)" }), sv("path", { d: `M${x - 44} 150 Q${x} 176 ${x + 44} 150 Z`, fill: c }), ...iconFn(x), sv("text", { x, y: 238, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: c }, label)); beam.append(g); };
    pan(70, "var(--eden)", "PRIEST", x => [sv("path", { d: `M${x - 10} 140 Q${x} 116 ${x + 10} 140 Z`, fill: "var(--eden)" }), sv("path", { d: `M${x} 116 C${x - 6} 104 ${x + 6} 98 ${x} 88`, fill: "none", stroke: "var(--muted)", "stroke-width": 2 })]);
    pan(350, "var(--babel)", "KING", x => [sv("path", { d: `M${x - 16} 142 L${x - 16} 124 L${x - 8} 132 L${x} 118 L${x + 8} 132 L${x + 16} 124 L${x + 16} 142 Z`, fill: "var(--accent)" })]);
    svg.append(beam);
    $("#kpBalance").append(svg);
    const range = $("#kpBalanceRange");
    const upd = () => {
      const v = +range.value, z = DATA.kp.balance.find(b => v < b.max);
      beam.style.transform = `rotate(${(v - 50) * 0.32}deg)`;
      bar.setAttribute("fill", Math.abs(v - 50) <= 10 ? "var(--accent)" : "var(--muted)");
      $("#kpBalanceTitle").textContent = z.t; $("#kpBalanceText").innerHTML = refify(z.d);
    };
    range.addEventListener("input", upd); upd();
    // cycle
    const cs = sv("svg", { viewBox: "0 0 400 400", role: "img", "aria-label": "A four-stage cycle: enter, receive and intercede, go and rule, offer back" });
    const R = 140, Cx = 200, Cy = 200;
    cs.append(sv("defs", {}, sv("marker", { id: "cy-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))));
    const ang = [-90, 0, 90, 180], pt = a => [Cx + Math.cos(a * Math.PI / 180) * R, Cy + Math.sin(a * Math.PI / 180) * R];
    ang.forEach((a, i) => { const [x1, y1] = pt(a + 16), [x2, y2] = pt(a + 74); cs.append(sv("path", { d: `M${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2}`, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "marker-end": "url(#cy-arr)" })); });
    if (!reduceMotion) { const d = sv("circle", { r: 6, fill: "var(--flame)" }); d.append(sv("animateMotion", { dur: "8s", repeatCount: "indefinite", path: `M${Cx} ${Cy - R} A${R} ${R} 0 1 1 ${Cx - 0.01} ${Cy - R}` })); cs.append(d); }
    cs.append(sv("text", { x: Cx, y: Cy - 6, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "A royal"), sv("text", { x: Cx, y: Cy + 14, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "priesthood"));
    const colors = ["var(--eden)", "var(--eden)", "var(--babel)", "var(--accent)"];
    const cn = DATA.kp.cycle.map((c, i) => {
      const [x, y] = pt(ang[i]);
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }, sv("circle", { cx: x, cy: y, r: 40, fill: colors[i], "fill-opacity": .2, stroke: colors[i], "stroke-width": 2 }), sv("text", { x, y: y - 2, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, String(i + 1)), sv("text", { x, y: y + 13, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, c.t.split(" & ")[0]));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      cs.append(g); return g.firstChild;
    });
    $("#kpCycle").append(cs);
    function sel(i) {
      cn.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .45 : .2); c.setAttribute("stroke-width", j === i ? 4 : 2); });
      const c = DATA.kp.cycle[i];
      $("#kpCyclePanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of 4 · ${i < 2 ? "priestly" : i === 2 ? "kingly" : "both"}` }), el("h3", { text: c.t }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) }));
    }
    sel(0);
    const card = ([t, d]) => el("div", { class: "card call-card" }, el("h3", { text: t }), el("p", { html: refify(d) }));
    $("#kpCallPriest").append(...DATA.kp.calling.priest.map(card));
    $("#kpCallKing").append(...DATA.kp.calling.king.map(card));
  }

  function initKpStudy() {
    $("#kpQuestions").append(...DATA.kp.study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $("#kpMemory").append(...DATA.kp.memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }


  /* ================ Part V: prophets, the fivefold and the kingdom now ================ */
  function initPrOffice() {
    const nodes = DATA.pr.lawsuit.map(n => ({ ...n, w: ["indict", "intercede"].includes(n.id) ? 330 : 420 }));
    flowchart($("#prLawsuit"), nodes, DATA.pr.lawsuitEdges, { id: "prl", w: 900, h: 560, nodeW: 420, refsInline: true, label: "Flowchart of a prophet's covenant lawsuit", start: "council", onSelect: n => panelFill("#prLawsuitPanel", "The prophetic pattern", n) });
    $("#prOffice").append(...DATA.pr.office.map(([t, d]) => el("div", { class: "card" }, el("p", { class: "eyebrow", text: t }), el("p", { html: refify(d), style: { color: "var(--ink)" } }))));
  }

  function initPrPairs() {
    const P = DATA.pr.pairs, T = DATA.pr.relTypes, cw = 122, x0 = 110, W = x0 + P.length * cw + 10, H = 380, yK = 70, yP = 190, yR = 310;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Map of prophets and the kings and priests they related to", style: { minWidth: W * 0.82 + "px" } });
    [["KING", yK, "var(--babel)"], ["PROPHET", yP, "var(--accent)"], ["PRIEST", yR, "var(--eden)"]].forEach(([t, y, c]) => svg.append(sv("line", { x1: x0 - 10, y1: y, x2: W - 10, y2: y, stroke: c, "stroke-opacity": .15, "stroke-width": 26 }), sv("text", { x: 14, y: y + 5, "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: c }, t)));
    const node = (x, y, label, c) => [sv("rect", { x: x - 56, y: y - 19, width: 112, height: 38, rx: 10, fill: "var(--surface)", stroke: c, "stroke-width": 2 }), sv("text", { x, y: y + 4, "text-anchor": "middle", "font-size": label.length > 15 ? 10 : 11.5, "font-weight": 800, fill: "var(--ink)" }, label)];
    const cols = P.map((p, i) => {
      const x = x0 + i * cw + cw / 2;
      const g = sv("g", { class: "fnode pcol", tabindex: "0", role: "button", "aria-label": p.p });
      g.append(sv("rect", { class: "colbg", x: x - cw / 2 + 3, y: 30, width: cw - 6, height: H - 50, rx: 12, fill: "var(--accent)", "fill-opacity": 0 }));
      if (p.k) g.append(sv("line", { x1: x, y1: yK + 19, x2: x, y2: yP - 19, stroke: T[p.rk][1], "stroke-width": 5, "stroke-linecap": "round" }));
      if (p.pr) g.append(sv("line", { x1: x, y1: yP + 19, x2: x, y2: yR - 19, stroke: T[p.rp][1], "stroke-width": 5, "stroke-linecap": "round" }));
      if (p.k) g.append(...node(x, yK, p.k, "var(--babel)"));
      g.append(...node(x, yP, p.p, "var(--accent)"));
      if (p.pr) g.append(...node(x, yR, p.pr, "var(--eden)"));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return g;
    });
    $("#prPairs").append(svg);
    const f = $("#prPairFilter");
    [["all", "All relationships", null], ...Object.entries(T).map(([k, v]) => [k, v[0], v[1]])].forEach(([k, n, c]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), onclick: () => {
      $$(".chip", f).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
      cols.forEach((g, i) => g.style.opacity = k === "all" || P[i].rk === k || P[i].rp === k ? 1 : .18);
    } }, c ? el("i", { class: "dotc", style: { background: c } }) : null, n)));
    function sel(i) {
      cols.forEach((g, j) => $(".colbg", g).setAttribute("fill-opacity", j === i ? .14 : 0));
      const p = P[i];
      const rel = (who, r) => el("span", { class: "relchip", style: { borderColor: T[r][1] } }, el("i", { class: "dotc", style: { background: T[r][1] } }), `${T[r][0]} ${who}`);
      $("#prPairPanel").replaceChildren(el("p", { class: "eyebrow", text: "Prophet" }), el("h3", { text: p.p }),
        el("div", { class: "chips" }, p.k ? rel(p.k, p.rk) : null, p.pr ? rel(p.pr, p.rp) : null), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }));
    }
    sel(1);
  }

  function initPrFive() {
    const F = DATA.pr.five, C = [260, 250], R = 172;
    const svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "Five ministries around the ascended Christ" });
    const pos = F.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [C[0] + Math.cos(a) * R, C[1] + Math.sin(a) * R]; });
    pos.forEach((p, i) => { const q = pos[(i + 1) % 5]; svg.append(sv("line", { x1: p[0], y1: p[1], x2: q[0], y2: q[1], stroke: "var(--line)", "stroke-width": 2 })); });
    pos.forEach(p => svg.append(sv("line", { x1: C[0], y1: C[1], x2: p[0], y2: p[1], stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .7 })));
    svg.append(sv("circle", { cx: C[0], cy: C[1], r: 70, fill: "var(--accent)", opacity: .15, class: "pulse" }), sv("circle", { cx: C[0], cy: C[1], r: 56, fill: "var(--accent)" }),
      sv("text", { x: C[0], y: C[1] - 6, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--accent-ink)" }, "The ascended"), sv("text", { x: C[0], y: C[1] + 10, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--accent-ink)" }, "Christ"),
      sv("text", { x: C[0], y: C[1] + 26, "text-anchor": "middle", "font-size": 10, fill: "var(--accent-ink)" }, "Eph 4:8–10"));
    const nodes = F.map((f, i) => {
      const [x, y] = pos[i];
      svg.append(sv("circle", { cx: x, cy: y, r: 50, fill: "var(--surface)" }));
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": f.n }, sv("circle", { cx: x, cy: y, r: 50, fill: f.c, "fill-opacity": .22, stroke: f.c, "stroke-width": 2.5 }), sv("text", { x, y: y + 5, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, f.n));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return g.firstChild;
    });
    $("#prStar").append(svg);
    function sel(i) {
      nodes.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .5 : .22); c.setAttribute("stroke-width", j === i ? 5 : 2.5); });
      const f = F[i];
      const row = (cls, t, d) => el("div", { class: "row " + cls }, el("b", { text: t }), el("p", { html: refify(d) }));
      $("#prStarPanel").replaceChildren(el("p", { class: "eyebrow", text: f.gk }), el("h3", { text: f.n }), el("p", { html: refify(f.role) }),
        row("", "Old Testament echo", f.ot), row("babel", "Kingly connection", f.king), row("eden", "Priestly connection", f.priest), row("christ", "How it equips kings and priests", f.equip), row("warn", "If it works alone", f.alone));
    }
    sel(1);
    const steps = [["Christ ascends and gives gifts", "Eph 4:8–10"], ["Five ministries", "Eph 4:11"], ["Saints equipped for ministry", "Eph 4:12"], ["Every part working", "Eph 4:16"], ["Unity and maturity", "Eph 4:13–15"], ["Royal priests filling all things", "Eph 1:22–23; 1 Pet 2:9"]];
    $("#prEquipFlow").append(...steps.map(([t, r]) => el("li", { class: "card reveal" }, el("b", { text: t }), el("span", { class: "ref", text: r }))));
  }

  function initPrChanged() {
    const svg = sv("svg", { viewBox: "0 0 460 320", role: "img", "aria-label": "Old and new covenant overlapping in what is unchanged" });
    const zones = {
      old: sv("circle", { cx: 160, cy: 160, r: 130, fill: "var(--muted)", "fill-opacity": .18, stroke: "var(--muted)", "stroke-width": 2 }),
      new: sv("circle", { cx: 300, cy: 160, r: 130, fill: "var(--accent)", "fill-opacity": .18, stroke: "var(--accent)", "stroke-width": 2 })
    };
    svg.append(zones.old, zones.new);
    const mid = sv("path", { d: "M230 47 A130 130 0 0 1 230 273 A130 130 0 0 1 230 47 Z", fill: "var(--eden)", "fill-opacity": .3 });
    svg.append(mid);
    const t = (x, y, s, fs, c) => svg.append(sv("text", { x, y, "text-anchor": "middle", "font-size": fs, "font-weight": 800, fill: c || "var(--ink)", "pointer-events": "none" }, s));
    t(110, 150, "OLD", 15); t(110, 170, "COVENANT", 12, "var(--muted)"); t(350, 150, "NEW", 15); t(350, 170, "COVENANT", 12, "var(--muted)"); t(230, 155, "What", 12); t(230, 171, "stays", 12);
    const map = { old: zones.old, new: zones.new, same: mid };
    Object.entries(map).forEach(([k, n]) => { n.style.cursor = "pointer"; n.addEventListener("click", () => set(k)); });
    $("#prVenn").append(svg);
    const tg = $("#prCovToggle"), box = $("#prChanged");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      zones.old.setAttribute("fill-opacity", m === "old" ? .4 : .14); zones.new.setAttribute("fill-opacity", m === "new" ? .4 : .14); mid.setAttribute("fill-opacity", m === "same" ? .6 : .25);
      box.classList.toggle("twisted", false);
      box.replaceChildren(...(m === "same"
        ? DATA.pr.unchanged.map(u => el("div", { class: "crow same" }, el("b", { text: "Unchanged" }), el("p", { class: "cval", html: refify(u) })))
        : DATA.pr.changed.map(r => el("div", { class: "crow " + (m === "old" ? "old" : "new") }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(m === "old" ? r[1] : r[2]) })))));
    }
    [["old", "Old covenant"], ["new", "New covenant"], ["same", "What stays the same"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("new");
  }

  function initPrEquip() {
    const M = DATA.pr.matrix, cols = DATA.pr.matrixCols, F = DATA.pr.five;
    const grid = $("#prMatrix");
    grid.append(el("span", { class: "mh" }), ...cols.map(c => el("span", { class: "mh " + c.k, text: c.t })));
    const cells = [];
    F.forEach(f => {
      grid.append(el("span", { class: "mrow", style: { color: f.c }, text: f.n }));
      M[f.id].forEach(([lvl, d], j) => {
        const b = el("button", { class: `mcell l${lvl} ${cols[j].k}`, type: "button", "aria-label": `${f.n}, ${cols[j].t}: ${d}`, onclick: () => {
          cells.forEach(c => c.classList.toggle("on", c === b));
          $("#prMatrixNote").innerHTML = `<b>${f.n} · ${cols[j].t}</b> (${cols[j].k === "king" ? "kingly" : "priestly"}): ${refify(d)}`;
        } }, el("span", { class: "bars", "aria-hidden": "true" }, ...[1, 2, 3].map(n => el("i", { class: n <= lvl ? "f" : "" }))));
        cells.push(b); grid.append(b);
      });
    });
    cells[2].click();
    // spheres wheel
    const S = DATA.pr.spheres, n = S.length, Cx = 220, Cy = 220, R1 = 90, R2 = 200;
    const svg = sv("svg", { viewBox: "0 0 440 440", role: "img", "aria-label": "Seven spheres of life around the royal priesthood" });
    const arc = (a0, a1) => { const p = (r, a) => [Cx + Math.cos(a) * r, Cy + Math.sin(a) * r]; const [x1, y1] = p(R2, a0), [x2, y2] = p(R2, a1), [x3, y3] = p(R1, a1), [x4, y4] = p(R1, a0); return `M${x1} ${y1} A${R2} ${R2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${R1} ${R1} 0 0 0 ${x4} ${y4} Z`; };
    const segs = S.map((s, i) => {
      const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .02, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .02, am = (a0 + a1) / 2;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n });
      const pth = sv("path", { d: arc(a0, a1), fill: i % 2 ? "var(--babel)" : "var(--eden)", "fill-opacity": .25, stroke: "var(--surface)", "stroke-width": 2 });
      const words = s.n.split(" & ");
      g.append(pth, ...words.map((w, k) => sv("text", { x: Cx + Math.cos(am) * 145, y: Cy + Math.sin(am) * 145 + 4 + (k - (words.length - 1) / 2) * 15, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, (k ? "& " : "") + w)));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return pth;
    });
    svg.append(sv("circle", { cx: Cx, cy: Cy, r: R1 - 8, fill: "var(--accent)" }), sv("text", { x: Cx, y: Cy - 4, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--accent-ink)" }, "Royal"), sv("text", { x: Cx, y: Cy + 14, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--accent-ink)" }, "priests"));
    $("#prWheel").append(svg);
    function sel(i) {
      segs.forEach((p, j) => p.setAttribute("fill-opacity", j === i ? .6 : .25));
      const s = S[i];
      $("#prWheelPanel").replaceChildren(el("p", { class: "eyebrow", text: "Sphere of life" }), el("h3", { text: s.n }), el("span", { class: "ref", text: s.ref }),
        el("div", { class: "row eden" }, el("b", { text: "As priests" }), el("p", { html: refify(s.priest) })), el("div", { class: "row babel" }, el("b", { text: "As kings" }), el("p", { html: refify(s.king) })));
    }
    sel(2);
  }

  function initPrDaniel() {
    const svg = sv("svg", { viewBox: "0 0 600 420", role: "img", "aria-label": "Daniel's statue struck by a stone that becomes a mountain filling the earth" });
    svg.append(sv("rect", { width: 600, height: 420, fill: "var(--bg-2)", opacity: .5 }));
    const mountain = sv("path", { fill: "var(--eden)", "fill-opacity": .75 });
    const peak = sv("circle", { r: 0, fill: "var(--accent)", opacity: .3, class: "pulse" });
    svg.append(peak, mountain, sv("line", { x1: 0, y1: 360, x2: 600, y2: 360, stroke: "var(--line)", "stroke-width": 2 }));
    const metal = { gold: "var(--accent)", silver: "#b8c0c8", bronze: "#a8743a", iron: "#6b7280", clay: "#b08a5a" };
    const pieces = [
      [sv("circle", { cx: 200, cy: 86, r: 24, fill: metal.gold }), -60, 260, -80, "Babylon (gold)", 92],
      [sv("rect", { x: 170, y: 112, width: 60, height: 54, rx: 6, fill: metal.silver }), 70, 240, 50, "Medo-Persia (silver)", 142],
      [sv("rect", { x: 174, y: 166, width: 52, height: 46, rx: 6, fill: metal.bronze }), -90, 190, -40, "Greece (bronze)", 192],
      [sv("rect", { x: 178, y: 212, width: 18, height: 106, rx: 4, fill: metal.iron }), -40, 60, -70, "Rome (iron)", 266],
      [sv("rect", { x: 204, y: 212, width: 18, height: 106, rx: 4, fill: metal.iron }), 60, 60, 80, "", 0],
      [sv("rect", { x: 174, y: 318, width: 26, height: 20, rx: 3, fill: metal.clay }), -30, 20, -40, "iron & clay", 330],
      [sv("rect", { x: 200, y: 318, width: 26, height: 20, rx: 3, fill: metal.clay }), 40, 20, 40, "", 0]
    ];
    const labels = [];
    pieces.forEach(([n, , , , lab, ly]) => { n.style.transformBox = "fill-box"; n.style.transformOrigin = "center"; svg.append(n); if (lab) { const t = sv("text", { x: 244, y: ly, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, lab); labels.push(t); svg.append(t); } });
    const stone = sv("polygon", { points: "-14,-6 -4,-15 12,-10 15,5 4,14 -12,9", fill: "#8a8f98", stroke: "var(--ink)", "stroke-width": 1.5 });
    svg.append(stone);
    const cap = sv("text", { x: 300, y: 36, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(cap);
    $("#prDaniel").append(svg);
    const clamp = v => Math.max(0, Math.min(1, v));
    function render(t) {
      const s = clamp(t / 22), b = clamp((t - 22) / 20), g = clamp((t - 42) / 58);
      stone.setAttribute("transform", `translate(${560 + (212 - 560) * s} ${20 + (322 - 20) * s}) rotate(${s * 540})`);
      stone.style.opacity = g > 0.02 ? 0 : 1;
      pieces.forEach(([n, dx, dy, r]) => { n.style.transform = b ? `translate(${dx * b}px, ${dy * b * .35}px) rotate(${r * b}deg)` : ""; n.style.opacity = 1 - b; });
      labels.forEach(l => l.style.opacity = 1 - b);
      const w = 30 + g * 1150, h = 20 + g * 300;
      mountain.setAttribute("d", g > 0 ? `M${212 - w / 2} 360 Q${212 - w / 6} ${360 - h * .8} 212 ${360 - h} Q${212 + w / 6} ${360 - h * .8} ${212 + w / 2} 360 Z` : "");
      peak.setAttribute("cx", 212); peak.setAttribute("cy", 360 - h); peak.setAttribute("r", g > 0 ? 18 + g * 30 : 0);
      const st = [...DATA.pr.daniel].reverse().find(d => t >= d.at);
      cap.textContent = st.t;
      $("#prDanielInfo").replaceChildren(el("h3", { text: st.t }), el("span", { class: "ref", text: st.ref }), el("p", { html: refify(st.d) }));
    }
    const range = $("#prDanielRange");
    range.addEventListener("input", () => { cancelAnimationFrame(anim); render(+range.value); });
    let anim = null;
    $("#prDanielPlay").addEventListener("click", () => {
      cancelAnimationFrame(anim);
      if (reduceMotion) { range.value = 100; render(100); return; }
      const t0 = performance.now();
      const step = now => { const t = Math.min(100, (now - t0) / 80); range.value = t; render(t); if (t < 100) anim = requestAnimationFrame(step); };
      anim = requestAnimationFrame(step);
    });
    range.value = 0; render(0);
  }

  function initPrTense() {
    const box = $("#prTense"), cols = DATA.pr.tenseCols, colours = ["var(--eden)", "var(--accent)", "var(--babel)", "var(--muted)"];
    const btns = [];
    cols.forEach((c, i) => {
      const col = el("div", { class: "tcol", style: { borderTopColor: colours[i] } }, el("p", { class: "eyebrow", style: { color: colours[i] }, text: c }));
      DATA.pr.tense.forEach((v, j) => { if (v.col !== i) return; const b = el("button", { class: "tchip", type: "button", onclick: () => sel(j) }, el("b", { text: v.ref }), el("span", { text: "“" + v.v + "”" })); btns[j] = b; col.append(b); });
      if (i < 3) col.append(el("span", { class: "tarrow", "aria-hidden": "true", text: "→" }));
      box.append(col);
    });
    function sel(j) {
      btns.forEach((b, k) => b && b.classList.toggle("on", k === j));
      const v = DATA.pr.tense[j];
      $("#prTensePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: colours[v.col] }, text: cols[v.col] }), el("h3", { text: v.ref }), el("p", { class: "tquote", html: v.t }));
    }
    sel(0);
  }

  function initPrFunnel() {
    const L = DATA.pr.funnel, shortS = ["All creation", "Every sphere", "Services & programmes", "Evangelism & classes", "Ticket to heaven"], shortR = ["Kingdom on earth", "Royal priests everywhere", "Equipping the saints", "Discipling nations", "Knowing the Father now"];
    const svg = sv("svg", { viewBox: "0 0 520 400", role: "img", "aria-label": "A funnel showing the calling narrowing, or restored" });
    const layers = L.map((l, i) => {
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": l.shrunk });
      const poly = sv("polygon", { fill: "var(--accent)", "fill-opacity": .14 + i * .1, stroke: "var(--accent)", "stroke-width": 1.5 });
      const txt = sv("text", { x: 260, y: 30 + i * 74 + 38, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" });
      g.append(poly, txt);
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return { poly, txt };
    });
    $("#prFunnel").append(svg);
    let mode = "shrunk", k = 1, anim = null, cur = 0;
    const draw = kk => layers.forEach(({ poly }, i) => {
      const y0 = 30 + i * 74, y1 = y0 + 64, a = i * 44 * kk, b = (i + 1) * 44 * kk;
      poly.setAttribute("points", `${20 + a},${y0} ${500 - a},${y0} ${500 - b},${y1} ${20 + b},${y1}`);
    });
    function set(m) {
      mode = m;
      $$("#prFunnelToggle .chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      layers.forEach(({ txt, poly }, i) => { txt.textContent = (m === "shrunk" ? shortS : shortR)[i]; poly.setAttribute("fill", m === "shrunk" ? "var(--accent)" : "var(--eden)"); poly.setAttribute("stroke", m === "shrunk" ? "var(--accent)" : "var(--eden)"); });
      const from = k, to = m === "shrunk" ? 1 : 0;
      cancelAnimationFrame(anim);
      if (reduceMotion) { k = to; draw(k); } else {
        const t0 = performance.now();
        const step = now => { const t = Math.min(1, (now - t0) / 700); k = from + (to - from) * (1 - Math.pow(1 - t, 3)); draw(k); if (t < 1) anim = requestAnimationFrame(step); };
        anim = requestAnimationFrame(step);
      }
      sel(cur);
    }
    function sel(i) {
      cur = i;
      layers.forEach(({ poly }, j) => poly.setAttribute("stroke-width", j === i ? 4 : 1.5));
      const l = L[i];
      $("#prFunnelPanel").replaceChildren(el("p", { class: "eyebrow", text: `Layer ${i + 1} of ${L.length}` }),
        el("div", { class: "row warn" }, el("b", { text: "Shrunk to" }), el("p", { html: refify(l.shrunk) })),
        i ? el("div", { class: "row" }, el("b", { text: "What narrowed it" }), el("p", { html: refify(l.cause) })) : null,
        el("div", { class: "row eden" }, el("b", { text: "Original intent" }), el("p", { html: refify(l.restored) })));
    }
    [["shrunk", "How it shrank"], ["restored", "Restore the original intent"]].forEach(([m, n]) => $("#prFunnelToggle").append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    draw(1); set("shrunk"); sel(4);
    const fill = (sel2, rows) => $(sel2).append(...rows.map(([t, d]) => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: t }), el("p", { html: refify(d) })))));
    fill("#prTrans", DATA.pr.transaction); fill("#prRel", DATA.pr.relationship);
  }

  function initPrTimeline() {
    const E = DATA.pr.timeline, W = 1100, H = 330, yA = 175;
    const X = y => y <= 72 ? 60 + (y - 28) * (700 / 44) : 860 + (y - 76) * (180 / 23);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline from AD 30 to AD 70 and the growing kingdom age until Christ's return", style: { minWidth: "900px" } });
    const grad = sv("linearGradient", { id: "kgrow", x1: 0, y1: 0, x2: 1, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--eden)", "stop-opacity": .15 }), sv("stop", { offset: 1, "stop-color": "var(--eden)", "stop-opacity": .6 }));
    svg.append(sv("defs", {}, grad));
    svg.append(sv("rect", { x: X(28), y: yA - 14, width: X(70) - X(28), height: 28, rx: 6, fill: "var(--muted)", "fill-opacity": .18 }),
      sv("text", { x: (X(28) + X(70)) / 2, y: yA + 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: "var(--muted)" }, "THE OLD COVENANT AGE ENDING · “THIS GENERATION”"));
    svg.append(sv("path", { d: `M${X(70)} ${yA + 14} L${X(99) + 20} ${yA + 14} L${X(99) + 20} ${yA - 70} Q${X(85)} ${yA - 30} ${X(70)} ${yA - 6} Z`, fill: "url(#kgrow)" }),
      sv("text", { x: X(84), y: yA + 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: "var(--eden)" }, "THE KINGDOM AGE · GROWING"));
    svg.append(sv("line", { x1: 40, y1: yA, x2: W - 30, y2: yA, stroke: "var(--ink)", "stroke-width": 2 }));
    svg.append(sv("text", { x: (X(72) + X(76)) / 2, y: yA + 5, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--surface)", stroke: "var(--surface)", "stroke-width": 8 }, "≈"), sv("text", { x: (X(72) + X(76)) / 2, y: yA + 5, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--ink)" }, "≈"));
    [30, 40, 50, 60, 70].forEach(y => svg.append(sv("line", { x1: X(y), y1: yA - 5, x2: X(y), y2: yA + 5, stroke: "var(--ink)" }), sv("text", { x: X(y), y: yA + 52, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "AD " + y)));
    let lastX = -999, tier = 0;
    const dots = E.map((e, i) => {
      const x = X(e.y); tier = x - lastX < 120 ? tier + 1 : 0; lastX = x;
      const up = i % 2 === 0, ly = up ? yA - 40 - tier * 26 : yA + 78 + tier * 26;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": e.t });
      g.append(sv("line", { x1: x, y1: yA, x2: x, y2: up ? ly + 6 : ly - 14, stroke: "var(--line)", "stroke-dasharray": "2 3" }),
        sv("circle", { cx: x, cy: yA, r: e.future ? 10 : 8, fill: e.future ? "var(--surface)" : e.y >= 76 ? "var(--eden)" : e.y >= 64 ? "var(--flame)" : "var(--accent)", stroke: e.future ? "var(--accent)" : "var(--surface)", "stroke-width": e.future ? 3 : 2, "stroke-dasharray": e.future ? "3 3" : "" }),
        sv("text", { x, y: ly, "text-anchor": x > W - 120 ? "end" : x < 120 ? "start" : "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, e.t.length > 30 ? e.t.slice(0, 28) + "…" : e.t));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); sel(i); } });
      svg.append(g); return g.querySelector("circle");
    });
    $("#prTimeline").append(svg);
    function sel(i) {
      dots.forEach((d, j) => d.setAttribute("r", j === i ? 13 : E[j].future ? 10 : 8));
      const e = E[i];
      $("#prTimelinePanel").replaceChildren(el("p", { class: "eyebrow", text: e.future ? "Still future" : e.y >= 76 ? "Now" : "AD " + Math.floor(e.y) }), el("h3", { text: e.t }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.d) }));
    }
    sel(7);
  }

  function initPrObjections() {
    const box = $("#prObjections"), O = DATA.pr.objections;
    const cards = O.map((o, i) => {
      const d = el("details", { class: "obj " + o.k, open: i === 0 ? true : null },
        el("summary", {}, el("span", { class: "obadge", text: o.k === "straw" ? "Misrepresentation" : "Objection" }), el("b", { text: o.q }), el("small", { class: "ref", text: o.refs })),
        el("div", { class: "obody" },
          el("div", { class: "row warn" }, el("b", { text: o.k === "straw" ? "The misrepresentation" : "What is not being claimed" }), el("p", { html: refify(o.not) })),
          el("div", { class: "row eden" }, el("b", { text: "Response" }), el("p", { html: refify(o.a) }))));
      box.append(d); return d;
    });
    const f = $("#prObjFilter");
    [["all", "All"], ["serious", "Serious objections"], ["straw", "Misrepresentations"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      cards.forEach((c, i) => { c.hidden = !(k === "all" || O[i].k === k); });
    } })));
  }

  function initPrStudy() {
    $("#prQuestions").append(...DATA.pr.study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $("#prMemory").append(...DATA.pr.memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }


  /* ================ Part VI: the keys of the kingdom ================ */
  const BOOKS = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
  const keyGlyph = (c, s) => sv("g", { transform: `scale(${s || 1})` }, sv("circle", { cx: 0, cy: 0, r: 7, fill: "none", stroke: c, "stroke-width": 3.5 }), sv("rect", { x: -1.8, y: 6, width: 3.6, height: 18, fill: c }), sv("rect", { x: 1.8, y: 18, width: 6, height: 3, fill: c }), sv("rect", { x: 1.8, y: 13, width: 4, height: 3, fill: c }));
  const hit = (g, fn) => { g.addEventListener("click", fn); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } }); return g; };

  function objectionList(boxSel, filterSel, O) {
    const box = $(boxSel);
    const cards = O.map((o, i) => {
      const d = el("details", { class: "obj " + o.k, open: i === 0 ? true : null },
        el("summary", {}, el("span", { class: "obadge", text: o.k === "straw" ? "Misrepresentation" : "Objection" }), el("b", { text: o.q }), el("small", { class: "ref", text: o.refs })),
        el("div", { class: "obody" }, el("div", { class: "row warn" }, el("b", { text: o.k === "straw" ? "The misrepresentation" : "What is not being claimed" }), el("p", { html: refify(o.not) })),
          el("div", { class: "row eden" }, el("b", { text: "Response" }), el("p", { html: refify(o.a) }))));
      box.append(d); return d;
    });
    const f = $(filterSel);
    [["all", "All"], ["serious", "Serious objections"], ["straw", "Misrepresentations"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      cards.forEach((c, i) => { c.hidden = !(k === "all" || O[i].k === k); });
    } })));
  }
  function studyGuide(qSel, mSel, study, memory) {
    $(qSel).append(...study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $(mSel).append(...memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }

  function initKyMeaning() {
    $("#kyWords").append(...DATA.ky.words.map(w => el("div", { class: "card word-card" }, el("p", { class: "eyebrow", text: w.lang }), el("p", { class: w.lang === "Hebrew" ? "heb big-word" : "big-word", text: w.w }), el("h3", { text: `${w.tr} · ${w.gloss}` }), el("p", { text: w.d }))));
    const W = 1100, H = 190, x0 = 30, bw = (W - 60) / 66, yB = 120;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "The 66 books of the Bible with every occurrence of the word key marked", style: { minWidth: "820px" } });
    BOOKS.forEach((b, i) => {
      const nt = i >= 39;
      svg.append(sv("rect", { x: x0 + i * bw + 1, y: yB, width: bw - 2, height: 26, rx: 2, fill: nt ? "var(--babel)" : "var(--eden)", "fill-opacity": .28 }, sv("title", {}, b)));
    });
    [[1, "Law"], [6, "History"], [18, "Wisdom"], [23, "Prophets"], [40, "Gospels & Acts"], [48, "Letters"], [65, "Rev."]].forEach(([b, t]) => svg.append(sv("text", { x: x0 + (b - 1) * bw, y: yB + 44, "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    svg.append(sv("text", { x: x0, y: H - 6, "font-size": 11, fill: "var(--eden)", "font-weight": 800 }, "OLD TESTAMENT"), sv("text", { x: x0 + 39 * bw, y: H - 6, "font-size": 11, fill: "var(--babel)", "font-weight": 800 }, "NEW TESTAMENT"));
    const stacks = {};
    const marks = DATA.ky.occ.map((o, i) => {
      const n = stacks[o.book] = (stacks[o.book] || 0) + 1;
      const x = x0 + (o.book - 0.5) * bw, y = yB - 26 - (n - 1) * 34;
      const g = hit(sv("g", { class: "fnode kmark", tabindex: "0", role: "button", "aria-label": o.name }), () => selOcc(i));
      g.append(sv("line", { x1: x, y1: y + 22, x2: x, y2: yB, stroke: "var(--accent)", "stroke-dasharray": "2 2" }), sv("circle", { class: "kbg", cx: x, cy: y + 6, r: 15, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
      const k = keyGlyph("var(--accent)", .62); k.setAttribute("transform", `translate(${x} ${y - 1}) scale(.62)`); g.append(k);
      svg.append(g); return g;
    });
    svg.append(sv("text", { x: x0 + 13 * bw, y: 20, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "Each key marks one occurrence of the word. Revelation has three."));
    $("#kyCanon").append(svg);
    const cards = DATA.ky.meanings.map((m, i) => {
      const b = el("button", { class: "meaning", type: "button", onclick: () => selMeaning(i) },
        sv("svg", { viewBox: "0 0 24 24", class: "micon", "aria-hidden": "true", fill: "none", stroke: "currentColor", "stroke-width": 1.7, "stroke-linecap": "round", "stroke-linejoin": "round" }, sv("path", { d: m.icon })),
        el("b", { text: m.n }), el("span", { text: m.d }), el("small", { class: "ref", text: m.also }));
      $("#kyMeanings").append(b); return b;
    });
    function light(pred) { marks.forEach((g, i) => { const on = pred(DATA.ky.occ[i]); g.style.opacity = on ? 1 : .25; $(".kbg", g).setAttribute("fill", on ? "var(--glow)" : "var(--surface)"); }); }
    function selOcc(i) {
      const o = DATA.ky.occ[i];
      cards.forEach(c => c.classList.remove("on"));
      light(x => x === o);
      $("#kyCanonPanel").replaceChildren(el("p", { class: "eyebrow", text: BOOKS[o.book - 1] }), el("h3", { text: o.name }), el("p", { html: refify(o.d) }),
        el("div", { class: "chips" }, o.m.map(id => { const mi = DATA.ky.meanings.findIndex(m => m.id === id); return el("button", { class: "chip", type: "button", text: DATA.ky.meanings[mi].n, onclick: () => selMeaning(mi) }); })));
    }
    function selMeaning(i) {
      const m = DATA.ky.meanings[i];
      cards.forEach((c, j) => c.classList.toggle("on", j === i));
      light(o => o.m.includes(m.id));
      const hits = DATA.ky.occ.filter(o => o.m.includes(m.id));
      $("#kyCanonPanel").replaceChildren(el("p", { class: "eyebrow", text: "What keys represent" }), el("h3", { text: m.n }), el("p", { html: refify(m.d) }),
        el("p", { class: "muted", text: hits.length ? `In the verses that use the word “key”: ${hits.map(h => h.name).join(" · ")}` : "This meaning is carried by related imagery rather than the word “key” itself." }),
        el("span", { class: "ref", text: "See also: " + m.also }));
    }
    selMeaning(0);
  }

  function initKyRing() {
    const R = DATA.ky.ring, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Seven biblical keys hanging on one ring" });
    const C = [260, 96];
    svg.append(sv("circle", { cx: C[0], cy: C[1], r: 58, fill: "none", stroke: "var(--accent)", "stroke-width": 9 }), sv("circle", { cx: C[0], cy: C[1], r: 58, fill: "none", stroke: "var(--surface)", "stroke-width": 2, opacity: .5 }),
      sv("text", { x: C[0], y: 26, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--muted)", "letter-spacing": 1.5 }, "IN CHRIST’S HAND · REV 1:18; 3:7"));
    const keys = R.map((k, i) => {
      const a = -48 + i * 16, rad = (90 + a) * Math.PI / 180, ax = C[0] + Math.cos(rad) * 58, ay = C[1] + Math.sin(rad) * 58;
      const outer = sv("g", { transform: `translate(${ax} ${ay}) rotate(${a})` });
      const g = hit(sv("g", { class: "fnode hkey", tabindex: "0", role: "button", "aria-label": k.n }), () => sel(i));
      g.append(sv("circle", { cx: 0, cy: 24, r: 18, fill: "var(--surface)", stroke: k.c, "stroke-width": 7 }), sv("rect", { x: -4.5, y: 42, width: 9, height: 200, rx: 3, fill: k.c }),
        sv("rect", { x: 4.5, y: 208, width: 20, height: 10, rx: 2, fill: k.c }), sv("rect", { x: 4.5, y: 226, width: 14, height: 10, rx: 2, fill: k.c }), sv("rect", { x: 4.5, y: 190, width: 10, height: 8, rx: 2, fill: k.c }));
      outer.append(g); svg.append(outer);
      const short = ["Key of David", "Kingdom", "Death & Hades", "Knowledge", "Abyss", "Open door", "Forgive & retain"][i];
      const tr = a * Math.PI / 180, tx = ax - Math.sin(tr) * 262, ty = ay + Math.cos(tr) * 262 + 16;
      svg.append(sv("text", { x: Math.max(58, Math.min(462, tx)), y: Math.min(ty, 460), "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, short));
      return g;
    });
    $("#kyRing").append(svg);
    function sel(i) {
      keys.forEach((g, j) => g.classList.toggle("on", j === i));
      const k = R[i];
      $("#kyRingPanel").replaceChildren(el("p", { class: "eyebrow", text: `Key ${i + 1} of ${R.length}` }), el("h3", { text: k.n }), el("span", { class: "ref", text: k.ref }), el("p", { html: refify(k.d) }),
        el("div", { class: "chips" }, R.map((o, j) => el("button", { class: "chip", type: "button", "aria-pressed": String(j === i), text: o.n.replace("Key of the ", "").replace("Keys of the ", "").replace("Key of ", "").replace("Keys of ", ""), onclick: () => sel(j) }))));
    }
    sel(0);
  }

  function initKyPalace() {
    const P = DATA.ky.palace, svg = sv("svg", { viewBox: "0 0 600 440", role: "img", "aria-label": "Plan of a royal palace with the rooms the steward's key controlled" });
    svg.append(sv("rect", { x: 60, y: 30, width: 480, height: 300, rx: 6, fill: "var(--bg)", stroke: "var(--ink)", "stroke-width": 4 }), sv("rect", { x: 270, y: 324, width: 60, height: 12, fill: "var(--surface)" }));
    svg.append(sv("rect", { x: 220, y: 150, width: 160, height: 160, rx: 6, fill: "none", stroke: "var(--line)", "stroke-dasharray": "5 5" }), sv("text", { x: 300, y: 236, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "COURTYARD"));
    const zones = { decrees: [75, 45, 130, 90], throne: [220, 45, 160, 90], court: [395, 45, 130, 265], stores: [75, 150, 130, 160], gate: [262, 312, 76, 34], family: [60, 360, 480, 66] };
    const fills = { throne: "var(--accent)", decrees: "var(--babel)", court: "var(--eden)", stores: "var(--muted)", gate: "var(--flame)", family: "var(--eden)" };
    const rects = {};
    P.forEach((p, i) => {
      const [x, y, w, h] = zones[p.id];
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": p.n }), () => sel(i));
      const r = sv("rect", { x, y, width: w, height: h, rx: 6, fill: fills[p.id], "fill-opacity": .16, stroke: fills[p.id], "stroke-width": 2 });
      g.append(r);
      if (p.id === "family") for (let k = 0; k < 9; k++) { const hx = 80 + k * 52; g.append(sv("path", { d: `M${hx} 418 L${hx} 396 L${hx + 14} 384 L${hx + 28} 396 L${hx + 28} 418 Z`, fill: "var(--eden)", "fill-opacity": .45 })); }
      if (p.id === "throne") g.append(sv("rect", { x: 288, y: 70, width: 24, height: 30, rx: 3, fill: "var(--accent)" }));
      if (p.id === "stores") for (let k = 0; k < 6; k++) g.append(sv("circle", { cx: 100 + (k % 3) * 40, cy: 200 + Math.floor(k / 3) * 50, r: 12, fill: "var(--muted)", "fill-opacity": .5 }));
      const label = { gate: "Gate", family: "Jerusalem: the people", court: "Royal service", stores: "Storehouses", throne: "Throne room", decrees: "Scribes & decrees" }[p.id];
      g.append(sv("text", { x: x + w / 2, y: p.id === "family" ? y + 14 : p.id === "gate" ? y + 22 : y + 22, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, label));
      rects[p.id] = r; svg.append(g);
    });
    const key = sv("g", { style: { transition: reduceMotion ? "none" : "transform .8s cubic-bezier(.4,.1,.2,1)" } }, sv("circle", { r: 20, fill: "var(--accent)", opacity: .25, class: "pulse" }));
    const kg = keyGlyph("var(--accent)", 1); kg.setAttribute("transform", "translate(0 -10)"); key.append(kg);
    svg.append(key);
    $("#kyPalace").append(svg);
    function sel(i) {
      const p = P[i], [x, y, w, h] = zones[p.id];
      Object.entries(rects).forEach(([k, r]) => { r.setAttribute("fill-opacity", k === p.id ? .4 : .16); r.setAttribute("stroke-width", k === p.id ? 4 : 2); });
      key.style.transform = `translate(${x + w - 22}px, ${y + h / 2 + (p.id === "family" ? -6 : 8)}px)`;
      $("#kyPalacePanel").replaceChildren(el("p", { class: "eyebrow", text: "The steward’s key" }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }),
        el("div", { class: "row christ" }, el("b", { text: "In the kingdom today" }), el("p", { html: refify(p.app) })));
    }
    sel(0);
  }

  function initKyStewards() {
    const S = DATA.ky.stewards;
    const svg = sv("svg", { viewBox: "0 0 460 330", role: "img", "aria-label": "The key passing from Shebna to Eliakim" });
    svg.append(sv("line", { x1: 20, y1: 300, x2: 440, y2: 300, stroke: "var(--line)", "stroke-width": 2 }));
    const fig = (x, robe, label) => { const g = sv("g", {}, sv("circle", { cx: x, cy: 120, r: 22, fill: "#c99a6e" }), sv("path", { d: `M${x - 34} 150 L${x + 34} 150 L${x + 48} 296 L${x - 48} 296 Z`, fill: robe }), sv("text", { x, y: 322, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, label)); svg.append(g); return g; };
    // Shebna's rock-cut tomb
    svg.append(sv("path", { d: "M30 300 L30 190 Q30 160 60 160 L80 160 Q110 160 110 190 L110 300 Z", fill: "var(--muted)", "fill-opacity": .3 }), sv("text", { x: 70, y: 150, "text-anchor": "middle", "font-size": 10.5, fill: "var(--muted)", "font-weight": 700 }, "his own tomb"));
    const sh = fig(180, "var(--flame)", "Shebna");
    const el2 = fig(330, "var(--babel)", "Eliakim");
    const sash = sv("rect", { x: 296, y: 200, width: 68, height: 10, fill: "var(--accent)" });
    svg.append(sash);
    const key = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.1s cubic-bezier(.4,.1,.2,1)" } });
    const kk = sv("g", { transform: "rotate(-60) scale(1.9)" }); kk.append(...keyGlyph("var(--accent)").childNodes);
    key.append(sv("circle", { r: 22, fill: "var(--accent)", opacity: .2, class: "pulse" }), kk);
    svg.append(key);
    svg.append(sv("text", { x: 235, y: 60, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "“I will place on his shoulder the key”"), sv("text", { x: 235, y: 78, "text-anchor": "middle", "font-size": 11, fill: "var(--accent)", "font-weight": 700 }, "Isaiah 22:22"));
    $("#kyStewardArt").append(svg);
    const tg = $("#kyStewardToggle"), box = $("#kySteward");
    function set(k) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      const s = S[k];
      key.style.transform = k === "shebna" ? "translate(158px, 150px)" : "translate(308px, 150px)";
      sh.style.opacity = k === "shebna" ? 1 : .35; el2.style.opacity = k === "eliakim" ? 1 : .35; sash.style.opacity = k === "eliakim" ? 1 : 0;
      box.classList.toggle("twisted", k === "shebna");
      box.replaceChildren(el("p", { class: "eyebrow", text: s.ref }), ...s.rows.map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(r[1]) }))));
    }
    [["shebna", "Shebna: the key misused"], ["eliakim", "Eliakim: the key given"]].forEach(([k, n]) => tg.append(el("button", { class: "chip", type: "button", "data-k": k, text: n, onclick: () => set(k) })));
    set("eliakim");
  }

  function initKyFlow() {
    const nodes = DATA.ky.flow.map(n => ({ ...n, w: ["joseph", "eliakim", "peter", "church"].includes(n.id) ? 340 : 440 }));
    flowchart($("#kyFlow"), nodes, DATA.ky.flowEdges, { id: "kyf", w: 900, h: 700, nodeW: 440, refsInline: true, label: "Flowchart of the keys from Joseph to the New Jerusalem", start: "christ", onSelect: n => panelFill("#kyFlowPanel", "Keys across Scripture", n) });
  }

  function initKyCaesarea() {
    const C = DATA.ky.caesarea, svg = sv("svg", { viewBox: "0 0 600 400", role: "img", "aria-label": "Caesarea Philippi: cliff, cave of Pan, niches, temple and spring" });
    svg.append(sv("rect", { width: 600, height: 400, fill: "var(--babel)", "fill-opacity": .08 }));
    const zones = {};
    const z = (id, ...kids) => { const i = C.findIndex(c => c.id === id); const g = hit(sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": C[i].n }, ...kids), () => sel(i)); zones[id] = g; svg.append(g); };
    z("rock", sv("path", { class: "hl", d: "M0 380 L0 120 L60 80 L170 60 L300 40 L420 55 L520 70 L600 100 L600 380 Z", fill: "#b59b7a", "fill-opacity": .55, stroke: "transparent" }), sv("text", { x: 470, y: 110, "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "the cliff (petra)"));
    z("niches", ...[[380, 150], [430, 165], [480, 150], [530, 170]].map(([x, y]) => sv("path", { class: "hl", d: `M${x - 14} ${y + 30} L${x - 14} ${y + 10} Q${x} ${y - 6} ${x + 14} ${y + 10} L${x + 14} ${y + 30} Z`, fill: "var(--ink)", "fill-opacity": .45, stroke: "transparent" })), sv("text", { x: 455, y: 226, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "niches of Pan"));
    z("cave", sv("path", { class: "hl", d: "M150 330 L150 230 Q150 170 215 170 Q280 170 280 230 L280 330 Z", fill: "#1d1a17", stroke: "transparent" }), sv("text", { x: 215, y: 162, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, "the cave: “gates of Hades”"));
    z("temple", sv("rect", { class: "hl", x: 300, y: 250, width: 120, height: 14, fill: "var(--surface)", stroke: "transparent" }), ...[0, 1, 2, 3, 4].map(k => sv("rect", { x: 306 + k * 24, y: 264, width: 10, height: 60, fill: "var(--surface)" })), sv("path", { d: "M296 250 L360 222 L424 250 Z", fill: "var(--surface)" }), sv("text", { x: 360, y: 214, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, "temple of Augustus"));
    z("spring", sv("path", { class: "hl flow", d: "M215 330 C220 350 260 360 300 372 C360 388 440 380 600 392", fill: "none", stroke: "var(--babel)", "stroke-width": 6 }), sv("text", { x: 470, y: 372, "font-size": 12, "font-weight": 800, fill: "var(--babel)" }, "springs of the Jordan"));
    svg.append(sv("rect", { x: 0, y: 380, width: 600, height: 20, fill: "var(--eden)", "fill-opacity": .4 }));
    $("#kyCaesarea").append(svg);
    function sel(i) {
      Object.entries(zones).forEach(([k, g]) => g.classList.toggle("on", k === C[i].id));
      const c = C[i];
      $("#kyCaesareaPanel").replaceChildren(el("p", { class: "eyebrow", text: "Caesarea Philippi" }), el("h3", { text: c.n }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) }),
        el("div", { class: "chips" }, C.map((o, j) => el("button", { class: "chip", type: "button", "aria-pressed": String(j === i), text: o.n.split(":")[0], onclick: () => sel(j) }))));
    }
    sel(0);
  }

  function initKyBind() {
    const svg = sv("svg", { viewBox: "0 0 520 360", role: "img", "aria-label": "Direction of binding and loosing: heaven first, then earth" });
    svg.append(sv("defs", {}, sv("marker", { id: "kb-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "context-stroke" }))));
    svg.append(sv("rect", { x: 20, y: 20, width: 480, height: 100, rx: 14, fill: "var(--accent)", "fill-opacity": .14 }), sv("text", { x: 40, y: 48, "font-size": 13, "font-weight": 800, "letter-spacing": 2, fill: "var(--accent)" }, "HEAVEN"),
      sv("rect", { x: 20, y: 240, width: 480, height: 100, rx: 14, fill: "var(--eden)", "fill-opacity": .14 }), sv("text", { x: 40, y: 268, "font-size": 13, "font-weight": 800, "letter-spacing": 2, fill: "var(--eden)" }, "EARTH"));
    const right = sv("g", {}, sv("text", { x: 260, y: 82, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "1 · Already bound or loosed in heaven"),
      sv("path", { d: "M260 124 L260 236", stroke: "var(--accent)", "stroke-width": 5, fill: "none", "marker-end": "url(#kb-arr)" }), sv("path", { d: "M260 124 L260 236", stroke: "var(--surface)", "stroke-width": 2, fill: "none", class: "flow" }),
      sv("text", { x: 276, y: 184, "font-size": 12.5, "font-weight": 700, fill: "var(--muted)" }, "discerned by Scripture, prayer, the Spirit"),
      sv("text", { x: 260, y: 300, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "2 · Declared and enacted on earth"), sv("text", { x: 260, y: 322, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)" }, "“shall have been bound” · estai dedemenon"));
    const wrong = sv("g", {}, sv("text", { x: 260, y: 300, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "1 · We decide what we want"),
      sv("path", { d: "M260 236 L260 124", stroke: "var(--flame)", "stroke-width": 5, fill: "none", "marker-end": "url(#kb-arr)" }),
      sv("text", { x: 260, y: 82, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "2 · Heaven must comply"),
      sv("path", { d: "M236 156 L284 204 M284 156 L236 204", stroke: "var(--flame)", "stroke-width": 7, "stroke-linecap": "round" }));
    svg.append(right, wrong);
    $("#kyDir").append(svg);
    const tg = $("#kyDirToggle");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      right.style.display = m === "right" ? "" : "none"; wrong.style.display = m === "wrong" ? "" : "none";
      $("#kyDirPanel").replaceChildren(...(m === "right"
        ? [el("p", { class: "eyebrow", text: "The biblical direction" }), el("h3", { text: "Stewards follow the King" }), el("p", { html: refify("Matthew 16:19 and 18:18 use a future perfect: “whatever you bind on earth shall have been bound in heaven.” The church does not dictate to heaven; it recognises and enforces on earth what heaven has already settled, as Jesus did only what he saw the Father doing (John 5:19).") }), el("p", { html: refify("That is why it is safe to give such authority to ordinary disciples: it is anchored in God’s will, prayed as “your will be done, on earth as it is in heaven” (Matt 6:10).") })]
        : [el("p", { class: "eyebrow", style: { color: "var(--flame)" }, text: "A common misreading" }), el("h3", { text: "Keys as a formula" }), el("p", { html: refify("Treating binding and loosing as a technique to command outcomes reverses the grammar and the relationship. A steward who opens doors the king has closed is not exercising authority but usurping it, like Shebna building his own monument (Isa 22:16).") })]));
    }
    [["right", "Heaven first (the text)"], ["wrong", "Earth first (misreading)"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("right");
    makeTabs($("#kySenseTabs"), $("#kySensePanels"), DATA.ky.senses, (p, it) => {
      p.append(el("div", { class: "split even" }, el("div", { class: "stack" }, el("h3", { text: it.head, style: { color: it.c } }), el("span", { class: "ref", text: it.ref })),
        el("div", { class: "prose" }, it.body.map(b => el("p", { html: refify(b) })))));
    }, "kysense");
  }

  function initKyDoors() {
    const D = DATA.ky.doors, box = $("#kyDoors");
    const cells = D.map((d, i) => {
      const c = el("button", { class: "door", type: "button", "aria-label": `${d.n}: ${d.who}`, onclick: () => { stop(); c.classList.add("open"); sel(i); } },
        el("span", { class: "door-frame" }, el("span", { class: "door-light" }, el("small", { text: d.who })), el("span", { class: "door-leaf" }, el("i", { class: "knob" }))),
        el("b", { text: d.n }), el("small", { class: "ref", text: d.ref }));
      box.append(c); return c;
    });
    function sel(i) {
      cells.forEach((c, j) => c.classList.toggle("sel", j === i));
      const d = D[i];
      $("#kyDoorPanel").replaceChildren(el("p", { class: "eyebrow", text: `Door ${i + 1} of ${D.length}` }), el("h3", { text: `${d.n}: ${d.who}` }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.d) }));
    }
    let t = [];
    const stop = () => { t.forEach(clearTimeout); t = []; };
    $("#kyDoorsPlay").addEventListener("click", () => { stop(); cells.forEach(c => c.classList.remove("open")); cells.forEach((c, i) => t.push(setTimeout(() => { c.classList.add("open"); sel(i); }, reduceMotion ? 0 : 300 + i * 700))); });
    $("#kyDoorsReset").addEventListener("click", () => { stop(); cells.forEach(c => c.classList.remove("open")); });
    cells.slice(0, 3).forEach(c => c.classList.add("open")); sel(2);
  }

  function initKyKey() {
    const T = DATA.ky.teeth, E = DATA.ky.eras;
    const svg = sv("svg", { viewBox: "0 0 640 300", role: "img", "aria-label": "A key whose teeth represent the functions of the keys" });
    const gold = "var(--accent)";
    svg.append(sv("circle", { cx: 90, cy: 120, r: 62, fill: "none", stroke: gold, "stroke-width": 22 }), sv("circle", { cx: 90, cy: 120, r: 22, fill: gold, opacity: .3 }),
      sv("rect", { x: 148, y: 108, width: 450, height: 24, rx: 6, fill: gold }));
    const labels = [];
    const teeth = T.map((t, i) => {
      const x = 260 + i * 56;
      const g = sv("g", { style: { transformOrigin: `${x + 20}px 132px`, transformBox: "view-box", transition: reduceMotion ? "none" : "transform .6s cubic-bezier(.3,1.4,.5,1), opacity .5s" } },
        sv("rect", { x, y: 132, width: 40, height: 46 + (i % 2) * 20, rx: 4, fill: gold }));
      const lab = sv("g", { style: { transition: "opacity .5s" } },
        sv("text", { x: x + 20, y: 210 + (i % 2) * 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, t.n.split(" ")[0]),
        sv("text", { x: x + 20, y: 224 + (i % 2) * 34, "text-anchor": "middle", "font-size": 10.5, fill: "var(--muted)" }, t.n.split(" ").slice(1).join(" ")));
      const strike = sv("line", { x1: x - 4, y1: 206 + (i % 2) * 34, x2: x + 44, y2: 206 + (i % 2) * 34, stroke: "var(--flame)", "stroke-width": 2, opacity: 0 });
      svg.append(g, lab, strike); labels.push([lab, strike]); return g;
    });
    const count = sv("text", { x: 90, y: 236, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(count, sv("text", { x: 90, y: 254, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "teeth on the key"));
    $("#kyKey").append(svg);
    const chips = $("#kyEraChips");
    function set(i) {
      $$(".chip", chips).forEach((c, j) => c.setAttribute("aria-pressed", String(j === i)));
      const e = E[i];
      T.forEach((t, j) => { const on = e.have.includes(t.id); teeth[j].style.transform = on ? "scaleY(1)" : "scaleY(0.08)"; teeth[j].style.opacity = on ? 1 : .3; labels[j][0].style.opacity = on ? 1 : .4; labels[j][1].setAttribute("opacity", on ? 0 : .8); });
      count.textContent = `${e.have.length} of ${T.length}`;
      $("#kyEraInfo").replaceChildren(el("h3", { text: e.n }), el("p", { html: refify(e.d) }),
        el("ul", { class: "tight" }, T.map(t => el("li", { style: { opacity: e.have.includes(t.id) ? 1 : .4, textDecoration: e.have.includes(t.id) ? "none" : "line-through" }, html: `<b>${t.n}</b>: ${refify(t.d)}` }))));
    }
    E.forEach((e, i) => chips.append(el("button", { class: "chip", type: "button", text: e.n, onclick: () => set(i) })));
    set(4);
  }

  function initKyOperate() {
    const O = DATA.ky.operate, list = $("#kyOperate");
    const items = O.map((o, i) => { const li = el("li", { class: "card op", tabindex: "0", role: "button" }, el("b", { text: o.t }), el("span", { class: "ref", text: o.ref })); hit(li, () => sel(i)); list.append(li); return li; });
    function sel(i) { items.forEach((li, j) => li.classList.toggle("on", j === i)); const o = O[i]; $("#kyOperatePanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${O.length}` }), el("h3", { text: o.t }), el("span", { class: "ref", text: o.ref }), el("p", { html: refify(o.d) })); }
    sel(1);
    $("#kyPractice").append(...DATA.ky.practice.map(([t, d]) => el("div", { class: "card" }, keyGlyphHTML(), el("h3", { text: t }), el("p", { html: refify(d) }))));
  }
  function keyGlyphHTML() { const s = sv("svg", { viewBox: "-12 -10 30 40", class: "kicon", "aria-hidden": "true" }); s.append(keyGlyph("var(--accent)")); return s; }

  function initKyObjections() { objectionList("#kyObjections", "#kyObjFilter", DATA.ky.objections); }
  function initKyStudy() { studyGuide("#kyQuestions", "#kyMemory", DATA.ky.study, DATA.ky.memory); }


  /* ================ Part VII: sowing and reaping ================ */
  function initSwDesign() {
    const nodes = DATA.sw.design.map(n => ({ ...n, w: ["flesh", "spirit"].includes(n.id) ? 340 : 440 }));
    flowchart($("#swDesign"), nodes, DATA.sw.designEdges, { id: "swd", w: 900, h: 560, nodeW: 440, refsInline: true, label: "Flowchart of God's design for sowing and reaping", start: "covenant", onSelect: n => panelFill("#swDesignPanel", "God’s design", n) });
    $("#swMillet").append(photo("millet"));
  }

  function initSwGrow() {
    const L = DATA.sw.laws, svg = sv("svg", { viewBox: "0 0 520 440", role: "img", "aria-label": "A seed growing through the eight laws of the harvest" });
    svg.append(sv("rect", { width: 520, height: 260, fill: "var(--babel)", "fill-opacity": .08 }), sv("rect", { y: 260, width: 520, height: 180, fill: "#8a6238", "fill-opacity": .35 }));
    const soilGlow = sv("rect", { y: 260, width: 520, height: 180, fill: "#5b3a1e", "fill-opacity": 0, style: { transition: "fill-opacity .6s" } });
    svg.append(soilGlow, sv("line", { x1: 0, y1: 260, x2: 520, y2: 260, stroke: "#6b4a2b", "stroke-width": 3 }));
    const fade = (...kids) => { const g = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, ...kids); svg.append(g); return g; };
    // overlays per law
    const ov = [];
    ov[0] = fade(sv("rect", { x: 330, y: 288, width: 150, height: 34, rx: 8, fill: "var(--surface)", stroke: "var(--accent)" }), sv("text", { x: 405, y: 310, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "wheat → wheat"));
    ov[1] = fade(sv("text", { x: 260, y: 420, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--surface)" }, "good soil: “an honest and good heart”"));
    ov[2] = fade(sv("text", { x: 340, y: 330, "font-size": 12.5, "font-weight": 800, fill: "var(--surface)" }, "the seed must die"));
    ov[3] = fade(...[0, 1, 2, 3].map(i => sv("circle", { cx: 360 + i * 36, cy: 40, r: 12, fill: i === 3 ? "var(--accent)" : "var(--muted)", "fill-opacity": .3 + i * .2 })), sv("text", { x: 414, y: 74, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "in due season"));
    const sun = fade(sv("circle", { cx: 70, cy: 60, r: 30, fill: "var(--accent)" }), ...Array.from({ length: 8 }, (_, i) => sv("line", { x1: 70 + Math.cos(i * .785) * 38, y1: 60 + Math.sin(i * .785) * 38, x2: 70 + Math.cos(i * .785) * 50, y2: 60 + Math.sin(i * .785) * 50, stroke: "var(--accent)", "stroke-width": 3 })),
      ...Array.from({ length: 10 }, (_, i) => sv("line", { x1: 150 + i * 30, y1: 30 + (i % 3) * 18, x2: 146 + i * 30, y2: 44 + (i % 3) * 18, stroke: "var(--babel)", "stroke-width": 2.5, "stroke-linecap": "round" })),
      sv("text", { x: 70, y: 112, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "God gives the growth"));
    ov[4] = sun;
    // plant
    const roots = sv("g", { stroke: "#f2e6c9", "stroke-width": 2, fill: "none", opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: "M260 304 C250 330 236 350 228 380" }), sv("path", { d: "M260 304 C270 334 284 352 296 384" }), sv("path", { d: "M260 304 L262 392" }));
    svg.append(roots);
    const seedL = sv("ellipse", { cx: 256, cy: 300, rx: 8, ry: 12, fill: "#d9b44a", style: { transition: "transform .6s", transformBox: "fill-box", transformOrigin: "center" } });
    const seedR = sv("ellipse", { cx: 264, cy: 300, rx: 8, ry: 12, fill: "#c9a43a", style: { transition: "transform .6s", transformBox: "fill-box", transformOrigin: "center" } });
    svg.append(seedL, seedR);
    const stalks = [-70, 0, 70].map((dx, k) => {
      const g = sv("g", { opacity: k === 1 ? 1 : 0, style: { transition: "opacity .6s" } });
      const stem = sv("line", { x1: 260 + dx, y1: 262, x2: 260 + dx, y2: 262, stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", style: { transition: "all .8s" } });
      const leaf1 = sv("path", { d: `M${260 + dx} 230 Q${236 + dx} 214 ${226 + dx} 226 Q${244 + dx} 236 ${260 + dx} 230 Z`, fill: "var(--eden)", opacity: 0, style: { transition: "opacity .6s" } });
      const leaf2 = sv("path", { d: `M${260 + dx} 200 Q${284 + dx} 184 ${294 + dx} 196 Q${276 + dx} 206 ${260 + dx} 200 Z`, fill: "var(--eden)", opacity: 0, style: { transition: "opacity .6s" } });
      const head = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, ...Array.from({ length: 6 }, (_, i) => sv("ellipse", { cx: 260 + dx + (i % 2 ? 6 : -6), cy: 112 + i * 9, rx: 6, ry: 9, fill: "#d9b44a" })),
        sv("text", { x: 260 + dx, y: 96, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, ["30×", "60×", "100×"][k]));
      g.append(stem, leaf1, leaf2, head); svg.append(g);
      return { g, stem, leaf1, leaf2, head };
    });
    ov[6] = fade(sv("rect", { x: 20, y: 150, width: 120, height: 70, rx: 8, fill: "var(--surface)", stroke: "var(--line)" }), sv("text", { x: 80, y: 168, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "sparingly"), ...[0, 1].map(i => sv("line", { x1: 60 + i * 40, y1: 214, x2: 60 + i * 40, y2: 188, stroke: "var(--eden)", "stroke-width": 3 })),
      sv("rect", { x: 380, y: 150, width: 120, height: 70, rx: 8, fill: "var(--surface)", stroke: "var(--line)" }), sv("text", { x: 440, y: 168, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "bountifully"), ...Array.from({ length: 9 }, (_, i) => sv("line", { x1: 392 + i * 12, y1: 214, x2: 392 + i * 12, y2: 180, stroke: "var(--eden)", "stroke-width": 3 })));
    ov[7] = fade(sv("path", { d: "M30 230 Q30 200 56 196 L84 196 Q110 200 110 230 L104 256 L36 256 Z", fill: "#b08a5a" }), sv("text", { x: 70, y: 232, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--surface)" }, "seed"),
      sv("path", { d: "M190 120 C130 110 100 150 90 188", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "6 6", class: "flow" }), sv("text", { x: 120, y: 112, "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "seed for the sower"));
    $("#swGrow").append(svg);
    const chips = $("#swLawChips");
    L.forEach((l, i) => chips.append(el("button", { class: "chip", type: "button", text: `${i + 1}`, "aria-label": l.n, onclick: () => { clearInterval(timer); set(i); } })));
    function set(s) {
      $$(".chip", chips).forEach((c, j) => c.setAttribute("aria-pressed", String(j === s)));
      ov.forEach((o, j) => o && o.setAttribute("opacity", j === s || (j === 4 && s >= 4 && s <= 5) ? 1 : 0));
      soilGlow.setAttribute("fill-opacity", s === 1 ? .45 : 0);
      seedL.style.transform = s >= 2 ? "translate(-6px, 2px) rotate(-30deg)" : ""; seedR.style.transform = s >= 2 ? "translate(6px, 2px) rotate(30deg)" : "";
      seedL.style.opacity = seedR.style.opacity = s >= 5 ? .3 : 1;
      roots.setAttribute("opacity", s >= 2 ? 1 : 0);
      const h = [0, 0, 8, 70, 120, 160, 160, 160][s];
      stalks.forEach((st, k) => {
        st.g.setAttribute("opacity", k === 1 || s >= 5 ? 1 : 0);
        st.stem.setAttribute("y2", 262 - h);
        st.leaf1.setAttribute("opacity", s >= 3 ? 1 : 0); st.leaf2.setAttribute("opacity", s >= 4 ? 1 : 0);
        st.head.setAttribute("opacity", s >= 5 ? 1 : 0);
      });
      const l = L[s];
      $("#swLawInfo").replaceChildren(el("p", { class: "eyebrow", text: `Law ${s + 1} of ${L.length}` }), el("h3", { text: l.n }), el("span", { class: "ref", text: l.ref }), el("p", { html: refify(l.d) }));
    }
    let timer = null;
    $("#swGrowPlay").addEventListener("click", () => { clearInterval(timer); let s = 0; set(0); timer = setInterval(() => { s++; if (s >= L.length) return clearInterval(timer); set(s); }, reduceMotion ? 900 : 1500); });
    set(5);
  }

  function initSwSoils() {
    const S = DATA.sw.soils, svg = sv("svg", { viewBox: "0 0 1000 330", role: "img", "aria-label": "Four soils from the parable of the sower", style: { minWidth: "760px" } });
    const panels = {};
    S.forEach((s, i) => {
      const x = i * 250, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n }), () => sel(i));
      const bg = sv("rect", { x: x + 6, y: 6, width: 238, height: 318, rx: 12, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 });
      g.append(bg, sv("rect", { x: x + 6, y: 200, width: 238, height: 124, rx: 0, fill: ["#9a9a92", "#a08868", "#7a6a4a", "#5b3a1e"][i], "fill-opacity": .55 }));
      if (i === 1) [30, 80, 140, 190].forEach(dx => g.append(sv("ellipse", { cx: x + dx, cy: 214, rx: 22, ry: 10, fill: "#8a8f98" })));
      g.append(sv("text", { x: x + 125, y: 34, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, s.n));
      const seeds = sv("g", { class: "sseeds" }, ...[70, 110, 150, 190].map(dx => sv("ellipse", { cx: x + dx, cy: 196, rx: 4, ry: 6, fill: "#d9b44a" })));
      const out = sv("g", { class: "sout", style: { transition: "opacity .8s" } });
      if (i === 0) out.append(...[[90, 150], [150, 120], [190, 160]].map(([dx, y]) => sv("path", { d: `M${x + dx - 14} ${y} Q${x + dx - 6} ${y - 10} ${x + dx} ${y} Q${x + dx + 6} ${y - 10} ${x + dx + 14} ${y}`, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "taken at once"));
      if (i === 1) out.append(sv("circle", { cx: x + 210, cy: 70, r: 20, fill: "var(--accent)" }), ...[80, 125, 170].map(dx => sv("path", { d: `M${x + dx} 196 Q${x + dx + 6} 160 ${x + dx + 22} 168`, fill: "none", stroke: "#b8a24a", "stroke-width": 4 })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "scorched, no root"));
      if (i === 2) out.append(...[80, 125, 170].map(dx => sv("line", { x1: x + dx, y1: 196, x2: x + dx, y2: 140, stroke: "var(--eden)", "stroke-width": 4 })), ...[60, 105, 150, 195].map(dx => sv("path", { d: `M${x + dx} 196 L${x + dx + 8} 110 L${x + dx + 14} 150 L${x + dx + 22} 96 L${x + dx + 26} 196`, fill: "#4a3a2a" })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "choked, no fruit"));
      if (i === 3) out.append(...[["30×", 75], ["60×", 125], ["100×", 175]].flatMap(([t, dx]) => [sv("line", { x1: x + dx, y1: 196, x2: x + dx, y2: 90, stroke: "var(--eden)", "stroke-width": 4 }), ...Array.from({ length: 5 }, (_, k) => sv("ellipse", { cx: x + dx + (k % 2 ? 5 : -5), cy: 74 + k * 7, rx: 5, ry: 7, fill: "#d9b44a" })), sv("text", { x: x + dx, y: 62, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, t)]), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "fruit with patience"));
      g.append(seeds, out); svg.append(g); panels[s.id] = bg;
    });
    $("#swSoils").append(svg);
    $("#swSow").addEventListener("click", () => {
      $$(".sout", svg).forEach(o => o.style.opacity = 0);
      $$(".sseeds", svg).forEach(s => { s.style.transition = "none"; s.style.transform = "translateY(-170px)"; s.style.opacity = 1; });
      requestAnimationFrame(() => requestAnimationFrame(() => $$(".sseeds", svg).forEach(s => { s.style.transition = reduceMotion ? "none" : "transform .9s cubic-bezier(.5,0,.8,.4)"; s.style.transform = ""; })));
      setTimeout(() => $$(".sout", svg).forEach((o, i) => setTimeout(() => o.style.opacity = 1, reduceMotion ? 0 : i * 400)), reduceMotion ? 0 : 1000);
    });
    function sel(i) {
      Object.values(panels).forEach((b, j) => { b.setAttribute("stroke", j === i ? "var(--accent)" : "var(--line)"); b.setAttribute("stroke-width", j === i ? 4 : 2); });
      const s = S[i];
      $("#swSoilPanel").replaceChildren(el("p", { class: "eyebrow", text: `Soil ${i + 1} of 4` }), el("h3", { text: s.n }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.d) }),
        el("div", { class: "row eden" }, el("b", { text: "For our hearts" }), el("p", { html: refify(s.heart) })));
    }
    sel(3);
  }

  function initSwThread() {
    const T = DATA.sw.thread, C = DATA.sw.cats, W = 1100, H = 250, X = b => 50 + (b - 1) * (1000 / 65);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Passages about sowing and reaping placed along the books of the Bible", style: { minWidth: "860px" } });
    let d = "M30 130"; for (let x = 30; x < W - 30; x += 40) d += ` Q${x + 20} ${x % 80 ? 122 : 138} ${x + 40} 130`;
    svg.append(sv("rect", { x: 0, y: 130, width: W, height: 120, fill: "#8a6238", "fill-opacity": .25 }), sv("path", { d, fill: "none", stroke: "#6b4a2b", "stroke-width": 3 }));
    [[1, "Genesis"], [19, "Psalms"], [23, "Isaiah"], [28, "Hosea"], [40, "Matthew"], [43, "John"], [46, "1 Cor"], [48, "Gal"], [66, "Revelation"]].forEach(([b, t]) => svg.append(sv("line", { x1: X(b), y1: 226, x2: X(b), y2: 234, stroke: "var(--muted)" }), sv("text", { x: X(b), y: 246, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    svg.append(sv("line", { x1: X(39.5), y1: 20, x2: X(39.5), y2: 230, stroke: "var(--line)", "stroke-dasharray": "4 4" }), sv("text", { x: X(39.5) - 8, y: 30, "text-anchor": "end", "font-size": 11, "font-weight": 800, fill: "var(--eden)" }, "OLD TESTAMENT"), sv("text", { x: X(39.5) + 8, y: 30, "font-size": 11, "font-weight": 800, fill: "var(--babel)" }, "NEW TESTAMENT"));
    const count = {};
    const seeds = T.map((t, i) => {
      const n = count[t.b] = (count[t.b] || 0) + 1, x = X(t.b), y = 130 + (n % 2 ? -1 : 1) * (14 + Math.floor((n - 1) / 2) * 26) + (n % 2 ? 0 : 18);
      const g = hit(sv("g", { class: "fnode tseed", tabindex: "0", role: "button", "aria-label": t.ref }), () => sel(i));
      g.append(sv("line", { x1: x, y1: 130, x2: x, y2: y, stroke: C[t.cat][1], "stroke-width": 1.5, opacity: .6 }), sv("ellipse", { cx: x, cy: y, rx: 8, ry: 11, fill: C[t.cat][1], stroke: "var(--surface)", "stroke-width": 2 }));
      if (y < 130) g.append(sv("path", { d: `M${x} ${y - 11} Q${x + 8} ${y - 22} ${x + 14} ${y - 18}`, fill: "none", stroke: "var(--eden)", "stroke-width": 2 }));
      svg.append(g); return g;
    });
    const lbl = sv("text", { "font-size": 12.5, "font-weight": 800, fill: "var(--ink)", "text-anchor": "middle", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 });
    svg.append(lbl);
    $("#swThread").append(svg);
    const f = $("#swThreadFilter");
    [["all", "All themes", null], ...Object.entries(C).map(([k, v]) => [k, v[0], v[1]])].forEach(([k, n, c]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), onclick: () => {
      $$(".chip", f).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
      seeds.forEach((g, i) => g.style.opacity = k === "all" || T[i].cat === k ? 1 : .15);
    } }, c ? el("i", { class: "dotc", style: { background: c } }) : null, n)));
    function sel(i) {
      const t = T[i], e = $("ellipse", seeds[i]);
      seeds.forEach((g, j) => $("ellipse", g).setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"));
      lbl.setAttribute("x", Math.max(70, Math.min(W - 70, +e.getAttribute("cx")))); lbl.setAttribute("y", +e.getAttribute("cy") < 130 ? +e.getAttribute("cy") - 26 : +e.getAttribute("cy") + 30); lbl.textContent = t.ref;
      $("#swThreadPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: C[t.cat][1] }, text: C[t.cat][0] }), el("h3", { text: t.t }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }));
    }
    sel(1);
  }

  function initSwChrist() {
    const svg = sv("svg", { viewBox: "0 0 400 420", role: "img", "aria-label": "A grain of wheat falls into the ground, dies, and becomes a great harvest" });
    svg.append(sv("rect", { y: 250, width: 400, height: 170, fill: "#8a6238", "fill-opacity": .35 }), sv("line", { x1: 0, y1: 250, x2: 400, y2: 250, stroke: "#6b4a2b", "stroke-width": 3 }));
    const cross = sv("g", { opacity: .18 }, sv("rect", { x: 194, y: 270, width: 12, height: 110, fill: "var(--ink)" }), sv("rect", { x: 168, y: 292, width: 64, height: 12, fill: "var(--ink)" }));
    svg.append(cross);
    const seed = sv("ellipse", { cx: 200, cy: 0, rx: 9, ry: 13, fill: "#d9b44a", style: { transition: reduceMotion ? "none" : "transform 1.2s cubic-bezier(.5,0,.8,.4), opacity .6s" } });
    const stem = sv("line", { x1: 200, y1: 262, x2: 200, y2: 262, stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", style: { transition: reduceMotion ? "none" : "all 1.2s" } });
    svg.append(stem, seed);
    const grains = [];
    for (let ring = 0; ring < 4; ring++) {
      const n = [1, 6, 12, 20][ring], r = ring * 28;
      for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + ring; const g = sv("ellipse", { cx: 200 + Math.cos(a) * r, cy: 120 + Math.sin(a) * r * .8, rx: 5, ry: 8, fill: "#d9b44a", opacity: 0, style: { transition: "opacity .4s" } }); grains.push(g); svg.append(g); }
    }
    const cap = sv("text", { x: 200, y: 404, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--surface)" }, "");
    svg.append(cap);
    $("#swChrist").append(svg);
    let t = [];
    function stage(s) {
      const texts = ["One grain of wheat", "It falls into the earth and dies", "It rises: the firstfruits", "It bears much fruit"];
      cap.textContent = texts[s];
      seed.style.transform = s === 0 ? "translateY(40px)" : "translateY(268px)"; seed.style.opacity = s >= 2 ? 0 : 1;
      stem.setAttribute("y2", s >= 2 ? 160 : 262);
      grains.forEach((g, i) => { t.push(setTimeout(() => g.setAttribute("opacity", s >= 3 ? 1 : (s === 2 && i === 0 ? 1 : 0)), s >= 3 && !reduceMotion ? i * 40 : 0)); });
    }
    $("#swChristPlay").addEventListener("click", () => { t.forEach(clearTimeout); t = []; stage(0); [1, 2, 3].forEach((s, i) => t.push(setTimeout(() => stage(s), reduceMotion ? 0 : 900 + i * 1400))); });
    stage(3);
  }

  function initSwHarvest() {
    const P = DATA.sw.pairs, svg = sv("svg", { viewBox: "0 0 900 170", role: "img", "aria-label": "A seed packet becoming its harvest" });
    const packet = sv("g", {}, sv("rect", { x: 40, y: 30, width: 220, height: 110, rx: 12, class: "pk", fill: "var(--eden)", "fill-opacity": .2, stroke: "var(--eden)", "stroke-width": 2 }));
    const pText = sv("text", { x: 150, y: 92, "text-anchor": "middle", "font-size": 17, "font-weight": 800, fill: "var(--ink)" }, "");
    packet.append(sv("text", { x: 150, y: 56, "text-anchor": "middle", "font-size": 11, "font-weight": 800, "letter-spacing": 2, fill: "var(--muted)" }, "SOW"), pText);
    const arrow = sv("path", { d: "M280 85 L600 85", stroke: "var(--eden)", "stroke-width": 5, fill: "none", "stroke-dasharray": "10 8", class: "flow" });
    const harvest = sv("g", {}, sv("rect", { x: 620, y: 20, width: 250, height: 130, rx: 12, class: "hv", fill: "var(--accent)", "fill-opacity": .2, stroke: "var(--accent)", "stroke-width": 2 }));
    const hText = sv("text", { x: 745, y: 92, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--ink)" }, "");
    harvest.append(sv("text", { x: 745, y: 48, "text-anchor": "middle", "font-size": 11, "font-weight": 800, "letter-spacing": 2, fill: "var(--muted)" }, "REAP"), hText);
    svg.append(packet, arrow, harvest, sv("text", { x: 440, y: 70, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "in due season, more than was sown"));
    $("#swPairArt").append(svg);
    const btns = P.map((p, i) => { const b = el("button", { class: "chip", type: "button", text: p.seed, onclick: () => sel(i) }); $(p.good ? "#swGood" : "#swBad").append(b); return b; });
    function sel(i) {
      const p = P[i], c = p.good ? "var(--eden)" : "var(--flame)";
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      $(".pk", svg).setAttribute("fill", c); $(".pk", svg).setAttribute("stroke", c); arrow.setAttribute("stroke", c);
      $(".hv", svg).setAttribute("fill", p.good ? "var(--accent)" : "var(--muted)"); $(".hv", svg).setAttribute("stroke", p.good ? "var(--accent)" : "var(--muted)");
      pText.textContent = p.seed; hText.textContent = p.harvest.length > 26 ? p.harvest.slice(0, 25) + "…" : p.harvest;
      $("#swPairPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: c }, text: p.good ? "A seed of life" : "A seed of decay" }), el("h3", { text: `${p.seed} → ${p.harvest}` }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }));
    }
    sel(1);
  }

  function initSwCycle() {
    const Cy = DATA.sw.cycle, svg = sv("svg", { viewBox: "0 0 440 440", role: "img", "aria-label": "Six-stage blessing cycle from grace to thanksgiving" });
    const R = 150, cx = 220, cy = 220, n = Cy.length;
    svg.append(sv("defs", {}, sv("marker", { id: "sw-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))));
    const pt = a => [cx + Math.cos(a) * R, cy + Math.sin(a) * R];
    for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .26, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .26, [x1, y1] = pt(a0), [x2, y2] = pt(a1); svg.append(sv("path", { d: `M${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2}`, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "marker-end": "url(#sw-arr)" })); }
    if (!reduceMotion) { const d = sv("ellipse", { rx: 5, ry: 7, fill: "#d9b44a" }); d.append(sv("animateMotion", { dur: "10s", repeatCount: "indefinite", path: `M${cx} ${cy - R} A${R} ${R} 0 1 1 ${cx - .01} ${cy - R}` })); svg.append(d); }
    svg.append(sv("text", { x: cx, y: cy - 6, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "Blessed"), sv("text", { x: cx, y: cy + 14, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "to bless"));
    const cols = ["var(--accent)", "var(--eden)", "var(--eden)", "var(--babel)", "var(--babel)", "var(--accent)"];
    const nodes = Cy.map((c, i) => {
      const [x, y] = pt(-Math.PI / 2 + i * 2 * Math.PI / n);
      const words = c.t.split(" ");
      const mid = Math.ceil(words.length / 2);
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }, sv("circle", { cx: x, cy: y, r: 44, fill: "var(--surface)" }), sv("circle", { cx: x, cy: y, r: 44, fill: cols[i], "fill-opacity": .2, stroke: cols[i], "stroke-width": 2 }),
        sv("text", { x, y: y - 2, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, words.slice(0, mid).join(" ")), sv("text", { x, y: y + 12, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, words.slice(mid).join(" "))), () => sel(i));
      svg.append(g); return g.childNodes[1];
    });
    $("#swCycle").append(svg);
    function sel(i) { nodes.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .5 : .2); c.setAttribute("stroke-width", j === i ? 4 : 2); }); const c = Cy[i]; $("#swCyclePanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of ${n}` }), el("h3", { text: c.t }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) })); }
    sel(0);
    $("#swGogh").append(photo("gogh"));
  }

  function initSwExchange() {
    const E = DATA.sw.exchange, svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "The great exchange: our harvest laid on Christ, his given to us" });
    svg.append(sv("text", { x: 100, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "US"), sv("text", { x: 420, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "CHRIST"),
      sv("rect", { x: 252, y: 60, width: 16, height: 250, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: 210, y: 110, width: 100, height: 16, fill: "var(--muted)", opacity: .5 }));
    const boxes = [];
    E.ours.forEach((t, i) => { const g = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.2s cubic-bezier(.4,.1,.2,1) ${i * .15}s` } }, sv("rect", { x: 30, y: 70 + i * 80, width: 140, height: 50, rx: 10, fill: "var(--flame)", "fill-opacity": .25, stroke: "var(--flame)", "stroke-width": 2 }), sv("text", { x: 100, y: 100 + i * 80, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, t)); boxes.push([g, 320]); svg.append(g); });
    E.his.forEach((t, i) => { const g = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.2s cubic-bezier(.4,.1,.2,1) ${i * .15}s` } }, sv("rect", { x: 350, y: 70 + i * 80, width: 140, height: 50, rx: 10, fill: "var(--accent)", "fill-opacity": .25, stroke: "var(--accent)", "stroke-width": 2 }), sv("text", { x: 420, y: 100 + i * 80, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, t)); boxes.push([g, -320]); svg.append(g); });
    svg.append(sv("text", { x: 260, y: 334, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--accent)" }, E.refs));
    $("#swExchange").append(svg);
    let swapped = false;
    $("#swExchangeBtn").addEventListener("click", () => { swapped = !swapped; boxes.forEach(([g, dx]) => g.style.transform = swapped ? `translateX(${dx}px)` : ""); $("#swExchangeBtn").textContent = swapped ? "Reset ◂" : "Exchange ▸"; });
  }

  function initSwManip() {
    const svg = sv("svg", { viewBox: "0 0 460 360", role: "img", "aria-label": "A vending machine compared with a garden tended by a gardener" });
    const machine = sv("g", {}, sv("rect", { x: 130, y: 30, width: 200, height: 300, rx: 14, fill: "var(--muted)", "fill-opacity": .3, stroke: "var(--ink)", "stroke-width": 3 }),
      ...Array.from({ length: 9 }, (_, i) => sv("rect", { x: 148 + (i % 3) * 46, y: 50 + Math.floor(i / 3) * 56, width: 38, height: 44, rx: 6, fill: "var(--surface)", stroke: "var(--line)" })),
      sv("rect", { x: 300, y: 220, width: 14, height: 40, rx: 4, fill: "var(--ink)" }), sv("rect", { x: 150, y: 270, width: 160, height: 40, rx: 6, fill: "var(--ink)", opacity: .7 }),
      sv("text", { x: 230, y: 350, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--flame)" }, "coin in → product out"));
    const coin = sv("circle", { cx: 307, cy: 190, r: 10, fill: "var(--accent)", class: reduceMotion ? "" : "coin" });
    machine.append(coin);
    const garden = sv("g", {}, sv("rect", { x: 0, y: 260, width: 460, height: 100, fill: "#8a6238", "fill-opacity": .3 }), sv("circle", { cx: 400, cy: 60, r: 30, fill: "var(--accent)" }),
      ...[200, 260, 320, 380].map((x, i) => sv("g", {}, sv("line", { x1: x, y1: 262, x2: x, y2: 170 - i * 8, stroke: "var(--eden)", "stroke-width": 4 }), sv("ellipse", { cx: x, cy: 160 - i * 8, rx: 7, ry: 12, fill: "#d9b44a" }))),
      sv("circle", { cx: 90, cy: 150, r: 18, fill: "#c99a6e" }), sv("path", { d: "M70 175 L110 175 L118 262 L62 262 Z", fill: "var(--babel)" }), sv("path", { d: "M112 200 L150 210 L160 200", fill: "none", stroke: "var(--muted)", "stroke-width": 6, "stroke-linecap": "round" }),
      ...[0, 1, 2].map(i => sv("line", { x1: 166 + i * 6, y1: 206, x2: 172 + i * 6, y2: 222, stroke: "var(--babel)", "stroke-width": 2 })),
      sv("text", { x: 230, y: 350, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--eden)" }, "a Gardener, seasons and life"));
    svg.append(machine, garden);
    $("#swMachine").append(svg);
    const box = $("#swCompare"), tg = $("#swMachineToggle");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      machine.style.display = m === "machine" ? "" : "none"; garden.style.display = m === "garden" ? "" : "none";
      box.classList.toggle("twisted", m === "machine");
      box.replaceChildren(...DATA.sw.compare.map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(m === "garden" ? r[1] : r[2]) }))));
    }
    [["garden", "God’s design: a garden"], ["machine", "Manipulation: a vending machine"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("garden");
    $("#swWhy").append(...DATA.sw.why.map((w, i) => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: `Reason ${i + 1}` }), el("b", { text: w.t }), el("p", { html: refify(w.d) })))));
    // detector + gauge
    const gs = sv("svg", { viewBox: "0 0 360 230", role: "img", "aria-label": "Manipulation gauge" });
    const arc = (a0, a1, c) => { const p = a => [180 + Math.cos(a) * 140, 190 + Math.sin(a) * 140]; const [x1, y1] = p(a0), [x2, y2] = p(a1); return sv("path", { d: `M${x1} ${y1} A140 140 0 0 1 ${x2} ${y2}`, fill: "none", stroke: c, "stroke-width": 26 }); };
    gs.append(arc(Math.PI, Math.PI * 1.33, "var(--eden)"), arc(Math.PI * 1.33, Math.PI * 1.66, "var(--accent)"), arc(Math.PI * 1.66, Math.PI * 2, "var(--flame)"));
    const needle = sv("line", { x1: 180, y1: 190, x2: 60, y2: 190, stroke: "var(--ink)", "stroke-width": 5, "stroke-linecap": "round", style: { transformOrigin: "180px 190px", transformBox: "view-box", transition: "transform .5s cubic-bezier(.3,1.4,.5,1)" } });
    const verdict = sv("text", { x: 180, y: 222, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    gs.append(needle, sv("circle", { cx: 180, cy: 190, r: 10, fill: "var(--ink)" }), verdict);
    $("#swGauge").append(gs);
    const inputs = DATA.sw.detector.map((q, i) => { const id = "swdet" + i; const inp = el("input", { type: "checkbox", id }); $("#swDetector").append(el("label", { for: id, class: "check" }, inp, el("span", { text: q }))); inp.addEventListener("change", upd); return inp; });
    function upd() {
      const n = inputs.filter(i => i.checked).length, max = inputs.length;
      needle.style.transform = `rotate(${n / max * 180}deg)`;
      verdict.textContent = n === 0 ? "Freely given: looks like God’s design" : n <= 2 ? "Some warning signs: ask questions" : n <= 4 ? "Serious warning signs" : "This is manipulation";
      verdict.setAttribute("fill", n === 0 ? "var(--eden)" : n <= 2 ? "var(--accent)" : "var(--flame)");
    }
    upd();
  }

  function initSwObjections() { objectionList("#swObjections", "#swObjFilter", DATA.sw.objections); }
  function initSwStudy() { studyGuide("#swQuestions", "#swMemory", DATA.sw.study, DATA.sw.memory); }


  /* ================ Part IV add-on: Supply and Support (Isaiah 3) ================ */
  const ROLE = { king: ["Kingly", "var(--babel)"], priest: ["Priestly", "var(--eden)"], both: ["King & priest", "var(--accent)"] };

  function initSsMap() {
    const targets = ["ss-net", "ss-judgment", "ss-build", "ss-build", "ss-came", "ss-worship", "ss-gate", "ss-orphan", "ss-babylons", "ss-daniels", "ss-accord"];
    $("#ssMap").append(...DATA.ss.map.map((m, i) => el("a", { class: "sscard reveal", href: "#" + targets[i], style: { borderLeftColor: ROLE[m.role][1] } },
      el("span", { class: "ssnum", text: String(i + 1) }), el("b", { text: m.n }), el("span", { class: "sstag", style: { background: ROLE[m.role][1] }, text: ROLE[m.role][0] }), el("small", { text: m.t }))));
  }

  function initSsNet() {
    const svg = sv("svg", { viewBox: "0 0 540 360", role: "img", "aria-label": "Fishing boats and a net that holds or breaks depending on supply and support" });
    svg.append(sv("rect", { width: 540, height: 150, fill: "var(--babel)", "fill-opacity": .06 }), sv("rect", { y: 150, width: 540, height: 210, fill: "var(--babel)", "fill-opacity": .25 }));
    const boat = (x) => sv("g", { style: { transition: "transform 1s cubic-bezier(.4,.1,.2,1)", transformBox: "fill-box", transformOrigin: "center" } },
      sv("path", { d: `M${x} 140 L${x + 150} 140 L${x + 128} 172 L${x + 22} 172 Z`, fill: "#7a5530" }), sv("line", { x1: x + 75, y1: 140, x2: x + 75, y2: 60, stroke: "#7a5530", "stroke-width": 4 }), sv("path", { d: `M${x + 79} 66 L${x + 128} 120 L${x + 79} 120 Z`, fill: "var(--surface)", stroke: "var(--line)" }));
    const b1 = boat(40), b2 = boat(330);
    svg.append(b1, b2);
    const rope = sv("path", { d: "M190 160 Q270 190 350 160", fill: "none", stroke: "#b08a5a", "stroke-width": 3, "stroke-dasharray": "6 5" });
    svg.append(rope);
    const mesh = sv("g", { stroke: "var(--ink)", "stroke-opacity": .55, fill: "none" });
    for (let i = 0; i <= 8; i++) mesh.append(sv("line", { x1: 80 + i * 22, y1: 172, x2: 100 + i * 17, y2: 320 }));
    for (let j = 0; j <= 6; j++) { const y = 180 + j * 23; mesh.append(sv("line", { x1: 80 + j * 3, y1: y, x2: 256 - j * 3, y2: y })); }
    svg.append(mesh);
    const tear = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: "M150 270 L162 290 L150 306 L168 322 L176 300 L190 318", fill: "none", stroke: "var(--flame)", "stroke-width": 4 }), sv("text", { x: 168, y: 346, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--flame)" }, "the net is breaking"));
    let seed = 9; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const fish = Array.from({ length: 48 }, () => { const x = 92 + rnd() * 150, y = 190 + rnd() * 120; const f = sv("g", { style: { transition: "transform 1.2s ease-in, opacity .8s" } }, sv("ellipse", { cx: x, cy: y, rx: 8, ry: 4, fill: "var(--accent)" }), sv("path", { d: `M${x + 7} ${y} L${x + 13} ${y - 4} L${x + 13} ${y + 4} Z`, fill: "var(--accent)" })); svg.append(f); return f; });
    svg.append(tear);
    const label = sv("text", { x: 270, y: 30, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(label);
    $("#ssNet").append(svg);
    const sup = $("#ssSupply"), spt = $("#ssSupport");
    function upd() {
      const s = +sup.value, p = +spt.value, diff = s - p, st = DATA.ss.net.states.find(x => diff < x.max);
      const n = Math.round(s / 100 * fish.length), broken = diff >= 25;
      fish.forEach((f, i) => { const on = i < n; f.style.opacity = on ? 1 : 0; f.style.transform = broken && on && i % 3 === 0 ? "translateY(60px)" : ""; });
      mesh.setAttribute("stroke-width", .6 + p / 22);
      tear.setAttribute("opacity", broken ? 1 : 0);
      b1.style.transform = broken ? "translateY(26px) rotate(7deg)" : "";
      const partner = p >= 50;
      b2.style.opacity = partner ? 1 : .25; rope.style.opacity = partner ? 1 : 0;
      b2.style.transform = broken && partner ? "translateY(14px) rotate(-4deg)" : "";
      label.textContent = st.t;
      $("#ssNetInfo").replaceChildren(...[el("h3", { text: st.t }), el("span", { class: "ref", text: DATA.ss.net.verse }), el("p", { html: refify(st.d) }), partner ? el("p", { class: "muted", text: "Strong support means partners: “they signalled to their partners in the other boat to come and help them.”" }) : null].filter(Boolean));
    }
    sup.addEventListener("input", upd); spt.addEventListener("input", upd); upd();
    $("#ssWant").append(document.createTextNode(DATA.ss.want.q), el("cite", { text: DATA.ss.want.d }));
  }

  function initSsPillars() {
    const P = DATA.ss.pillars, svg = sv("svg", { viewBox: "0 0 580 380", role: "img", "aria-label": "A building held up by six pillars of a nation's supply and support" });
    const roof = sv("g", { style: { transition: "transform 1s cubic-bezier(.5,0,.6,1)", transformBox: "view-box", transformOrigin: "290px 90px" } },
      sv("path", { d: "M40 90 L290 20 L540 90 Z", fill: "var(--accent)", "fill-opacity": .5, stroke: "var(--accent)", "stroke-width": 2 }), sv("rect", { x: 40, y: 90, width: 500, height: 22, fill: "var(--accent)", "fill-opacity": .7 }),
      sv("text", { x: 290, y: 70, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "a nation’s order"));
    svg.append(sv("rect", { x: 30, y: 320, width: 520, height: 20, fill: "var(--muted)", "fill-opacity": .5 }), sv("rect", { x: 20, y: 340, width: 540, height: 16, fill: "var(--muted)", "fill-opacity": .35 }));
    const pillars = P.map((p, i) => {
      const x = 62 + i * 82;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": p.n, style: { transition: `transform .9s cubic-bezier(.5,0,.7,1) ${i * .15}s, opacity .9s ${i * .15}s`, transformBox: "fill-box", transformOrigin: "bottom center" } },
        sv("rect", { class: "pil", x, y: 112, width: 44, height: 208, fill: i === 0 ? "var(--eden)" : "var(--surface)", "fill-opacity": i === 0 ? .5 : 1, stroke: "var(--ink)", "stroke-opacity": .4, "stroke-width": 2 }),
        ...[0, 1, 2].map(k => sv("line", { x1: x + 11 + k * 11, y1: 118, x2: x + 11 + k * 11, y2: 314, stroke: "var(--line)" })),
        sv("text", { x: x + 22, y: 216, "text-anchor": "middle", "font-size": 11.5, "font-weight": 800, fill: "var(--ink)", transform: `rotate(-90 ${x + 22} 216)` }, p.n)), () => sel(i));
      svg.append(g); return g;
    });
    svg.append(roof);
    const kids = sv("text", { x: 290, y: 300, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--flame)", opacity: 0, style: { transition: "opacity .6s 1.2s" } }, "“boys their princes … infants shall rule”");
    svg.append(kids);
    $("#ssPillars").append(svg);
    function sel(i) { pillars.forEach((g, j) => $(".pil", g).setAttribute("stroke-width", j === i ? 5 : 2)); const p = P[i]; $("#ssPillarPanel").replaceChildren(el("p", { class: "eyebrow", text: i === 0 ? "Supply" : "Support" }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) })); }
    $("#ssRemove").addEventListener("click", () => { pillars.forEach((g, i) => { g.style.transform = `rotate(${i % 2 ? 78 : -78}deg) translateY(10px)`; g.style.opacity = .25; }); roof.style.transform = "translateY(150px) rotate(-5deg)"; kids.setAttribute("opacity", 1); });
    $("#ssRestore").addEventListener("click", () => { pillars.forEach(g => { g.style.transform = ""; g.style.opacity = 1; }); roof.style.transform = ""; kids.setAttribute("opacity", 0); });
    sel(2);
    $("#ssCollapse").append(...DATA.ss.collapse.map(c => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: c.ref }), el("p", { html: refify(c.t) })))));
  }

  function initSsBuild() {
    const svg = sv("svg", { viewBox: "0 0 540 320", role: "img", "aria-label": "A wall of identical bricks beside a wall of uncut living stones" });
    svg.append(sv("line", { x1: 10, y1: 280, x2: 530, y2: 280, stroke: "var(--line)", "stroke-width": 3 }));
    const blocks = [], left = sv("g"), right = sv("g");
    for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) {
      const b = sv("rect", { x: 22 + c * 44 + (r % 2 ? 22 : 0) - (r % 2 && c === 4 ? 0 : 0), y: 248 - r * 32, width: 40, height: 28, rx: 2, fill: "#b4553a", stroke: "#7a3020", style: { transition: "opacity .3s, transform .4s" } });
      if (r % 2 && c === 4) continue;
      left.append(b); blocks.push([b, r]);
    }
    let seed = 4; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
      const cx = 318 + c * 56 + (r % 2 ? 26 : 0), cy = 254 - r * 38, pts = Array.from({ length: 7 }, (_, k) => { const a = k / 7 * Math.PI * 2, rr = 22 + rnd() * 8; return `${(cx + Math.cos(a) * rr * 1.2).toFixed(1)},${(cy + Math.sin(a) * rr * .8).toFixed(1)}`; }).join(" ");
      if (cx > 520) continue;
      const s = sv("polygon", { points: pts, fill: "#a7a29a", stroke: "#6b6660", "stroke-width": 1.5, style: { transition: "opacity .3s, transform .4s" } });
      right.append(s); blocks.push([s, r]);
    }
    svg.append(left, right, sv("text", { x: 130, y: 306, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--flame)" }, "Babel · bricks"), sv("text", { x: 410, y: 306, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--eden)" }, "Bethel · living stones"),
      sv("text", { x: 130, y: 22, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "made by hands · uniform · “check their CV”"), sv("text", { x: 410, y: 22, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "shaped by life · each one different"));
    $("#ssWalls").append(svg);
    const tg = $("#ssBuildToggle"), box = $("#ssBuild");
    function set(k) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      left.style.opacity = k === "babel" ? 1 : .35; right.style.opacity = k === "bethel" ? 1 : .35;
      box.classList.toggle("twisted", k === "babel");
      box.replaceChildren(...DATA.ss.build[k].map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(r[1]) }))));
    }
    [["babel", "Babel"], ["bethel", "Bethel"]].forEach(([k, n]) => tg.append(el("button", { class: "chip", type: "button", "data-k": k, text: n, onclick: () => set(k) })));
    set("bethel");
    $("#ssBuildBtn").addEventListener("click", () => { blocks.forEach(([b]) => { b.style.transition = "none"; b.style.opacity = 0; b.style.transform = "translateY(-30px)"; }); requestAnimationFrame(() => requestAnimationFrame(() => blocks.forEach(([b, r], i) => { b.style.transition = reduceMotion ? "none" : `opacity .3s ${r * .25 + (i % 5) * .04}s, transform .4s ${r * .25 + (i % 5) * .04}s`; b.style.opacity = 1; b.style.transform = ""; }))); });
  }

  function initSsArena() {
    const A = DATA.ss.arenas, svg = sv("svg", { viewBox: "0 0 460 420", role: "img", "aria-label": "Three arenas: the throne, the angelic conflict, and the human arena at Babel" });
    const fills = ["var(--accent)", "var(--babel)", "var(--eden)"];
    const bands = A.map((a, i) => { const y = 20 + i * 132; const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": a.n }, sv("rect", { class: "ab", x: 20, y, width: 420, height: 120, rx: 14, fill: fills[i], "fill-opacity": .14, stroke: fills[i], "stroke-width": 2 }), sv("text", { x: 40, y: y + 26, "font-size": 13, "font-weight": 800, "letter-spacing": 1.5, fill: fills[i] }, a.n.toUpperCase())), () => sel(i)); svg.append(g); return g; });
    // throne
    bands[0].append(sv("rect", { x: 210, y: 50, width: 40, height: 50, rx: 4, fill: "var(--accent)" }), sv("rect", { x: 200, y: 96, width: 60, height: 10, fill: "var(--accent)" }), sv("circle", { cx: 230, cy: 66, r: 30, fill: "var(--accent)", opacity: .15, class: "pulse" }), sv("text", { x: 300, y: 84, "font-size": 12, "font-weight": 700, fill: "var(--ink)" }, "seated, unmoved"));
    // angels
    bands[1].append(sv("circle", { cx: 180, cy: 200, r: 14, fill: "var(--babel)" }), sv("path", { d: "M170 212 L190 212 L196 250 L164 250 Z", fill: "var(--babel)" }), sv("line", { x1: 196, y1: 214, x2: 236, y2: 186, stroke: "var(--accent)", "stroke-width": 4 }),
      sv("circle", { cx: 290, cy: 204, r: 14, fill: "var(--flame)" }), sv("path", { d: "M280 216 L300 216 L306 250 L274 250 Z", fill: "var(--flame)" }), sv("text", { x: 230, y: 168, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "“The Lord rebuke you”"));
    // human
    bands[2].append(...[0, 1, 2, 3].map(i => sv("rect", { x: 200 + i * 8, y: 360 - i * 20, width: 80 - i * 16, height: 20, fill: "var(--babel)", opacity: .6 + i * .1 })), sv("path", { d: "M330 40 C 360 160 340 260 300 300", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "6 6", class: "flow" }), sv("text", { x: 350, y: 330, "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "“the LORD came down”"));
    $("#ssArena").append(svg);
    function sel(i) { bands.forEach((g, j) => $(".ab", g).setAttribute("fill-opacity", j === i ? .32 : .14)); const a = A[i]; $("#ssArenaPanel").replaceChildren(el("p", { class: "eyebrow", text: `Arena ${i + 1} of 3` }), el("h3", { text: a.n }), el("span", { class: "ref", text: a.ref }), el("p", { html: refify(a.d) })); }
    sel(2);
  }

  function initSsWorship() {
    const svg = sv("svg", { viewBox: "0 0 900 220", role: "img", "aria-label": "Sound waves: confused when everyone plays their own song, aligned in one accord" });
    const cols = ["var(--babel)", "var(--flame)", "var(--eden)", "var(--accent)", "#6b3a8f", "var(--muted)"];
    const waves = cols.map((c, i) => { const p = sv("path", { fill: "none", stroke: c, "stroke-width": 3, opacity: .8 }); svg.append(p); return p; });
    const cap = sv("text", { x: 450, y: 210, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(cap);
    $("#ssSound").append(svg);
    let mode = "chaos", t = 0, raf = null;
    const draw = () => {
      waves.forEach((p, i) => {
        let d = "";
        for (let x = 0; x <= 900; x += 10) {
          const y = mode === "chaos" ? 100 + Math.sin(x * (0.01 + i * 0.013) + t * (1 + i * .7) + i * 2) * (24 + i * 7) + Math.sin(x * 0.05 * (i + 1) + t * 3) * 10 : 100 + Math.sin(x * 0.02 + t * 1.4) * 40 + (i - 2.5) * 2;
          d += (x ? "L" : "M") + x + " " + y.toFixed(1);
        }
        p.setAttribute("d", d); p.setAttribute("stroke", mode === "chaos" ? cols[i] : "var(--accent)");
      });
      t += .04;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };
    const tg = $("#ssSoundToggle");
    function set(m) { mode = m; $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m))); cap.textContent = m === "chaos" ? "Everyone their own song: confusion (Babel)" : "One accord: many voices, one sound (Acts 2:1)"; cancelAnimationFrame(raf); draw(); }
    [["chaos", "Everyone their own song"], ["one", "One accord"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("chaos");
    $("#ssWorship").append(...DATA.ss.worship.map(w => el("div", { class: "card" }, el("p", { class: "eyebrow", text: w.ref }), el("h3", { text: w.t }), el("p", { html: refify(w.d) }))));
  }

  function initSsGate() {
    const G = DATA.ss.gate, svg = sv("svg", { viewBox: "0 0 520 360", role: "img", "aria-label": "A city gate where a gatekeeper decides what enters" });
    svg.append(sv("rect", { x: 300, y: 40, width: 200, height: 280, fill: "var(--accent)", "fill-opacity": .08 }), sv("text", { x: 420, y: 66, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--accent)" }, "THE CHURCH · THE CITY"));
    svg.append(sv("path", { d: "M270 320 L270 120 L330 120 L330 320 Z M282 320 L282 180 Q300 150 318 180 L318 320 Z", fill: "var(--muted)", "fill-rule": "evenodd" }), sv("rect", { x: 270, y: 20, width: 60, height: 300, fill: "none" }));
    svg.append(sv("rect", { x: 270, y: 40, width: 12, height: 280, fill: "var(--muted)" }), sv("rect", { x: 318, y: 40, width: 12, height: 280, fill: "var(--muted)" }));
    svg.append(sv("circle", { cx: 350, cy: 262, r: 11, fill: "#c99a6e" }), sv("path", { d: "M340 274 L360 274 L364 318 L336 318 Z", fill: "var(--babel)" }), sv("text", { x: 350, y: 340, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "gatekeeper"));
    const tokens = G.map((g, i) => {
      const y = 40 + i * 48;
      const t = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": g.n, style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1)" } },
        sv("rect", { class: "tk", x: 20, y, width: 150, height: 36, rx: 18, fill: "var(--surface)", stroke: g.ok ? "var(--eden)" : "var(--flame)", "stroke-width": 2 }),
        sv("text", { x: 95, y: y + 23, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, g.n)), () => sel(i));
      svg.append(t); return t;
    });
    const cross = sv("path", { d: "M286 196 L314 224 M314 196 L286 224", stroke: "var(--flame)", "stroke-width": 7, "stroke-linecap": "round", opacity: 0, style: { transition: "opacity .4s .8s" } });
    svg.append(cross);
    $("#ssGate").append(svg);
    function sel(i) {
      const g = G[i];
      tokens.forEach((t, j) => { t.style.transform = j === i ? (g.ok ? `translate(${310 - 0}px, ${170 - (40 + j * 48)}px)` : `translate(${100}px, ${190 - (40 + j * 48)}px)`) : ""; });
      cross.setAttribute("opacity", g.ok ? 0 : 1);
      $("#ssGatePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: g.ok ? "var(--eden)" : "var(--flame)" }, text: g.ok ? "Welcomed through the gate" : "Stopped at the gate" }), el("h3", { text: g.n }), el("span", { class: "ref", text: g.ref }), el("p", { html: refify(g.d) }));
    }
    sel(4);
    // Psalm 1 steps
    const st = sv("svg", { viewBox: "0 0 420 260", role: "img", "aria-label": "Three descending steps: walk, stand, sit" });
    [0, 1, 2].forEach(i => st.append(sv("rect", { x: 30 + i * 120, y: 60 + i * 60, width: 360 - i * 120, height: 200 - i * 60, fill: "var(--flame)", "fill-opacity": .08 + i * .1 }), sv("text", { x: 50 + i * 120, y: 84 + i * 60, "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, DATA.ss.psalm1[i].v.toUpperCase())));
    const fig = sv("g", { style: { transition: reduceMotion ? "none" : "transform .8s cubic-bezier(.4,.1,.2,1)" } });
    const body = sv("path", { d: "M-8 0 L8 0 L10 40 L-10 40 Z", fill: "var(--babel)" });
    const head = sv("circle", { cx: 0, cy: -12, r: 10, fill: "#c99a6e" });
    fig.append(head, body);
    st.append(fig);
    $("#ssSteps").append(st);
    const r = $("#ssStepRange");
    const upd = () => { const i = +r.value, p = DATA.ss.psalm1[i]; fig.style.transform = `translate(${90 + i * 120}px, ${18 + i * 60 + (i === 2 ? 14 : 0)}px)`; body.setAttribute("d", i === 2 ? "M-8 0 L8 0 L22 22 L22 26 L-8 26 Z" : "M-8 0 L8 0 L10 40 L-10 40 Z"); $("#ssStepInfo").replaceChildren(el("h3", { text: `${p.v} ${p.t}` }), el("p", { html: refify(p.d) }), el("p", { class: "muted", html: refify("The opposite of gossip is covering: Shem and Japheth “walked backward and covered the nakedness of their father” (Gen 9:23).") })); };
    r.addEventListener("input", upd); upd();
  }

  function initSsStairs() {
    const S = DATA.ss.stages, svg = sv("svg", { viewBox: "0 0 540 340", role: "img", "aria-label": "A staircase from orphan to mature son" });
    const steps = S.map((s, i) => {
      const x = 20 + i * 100, y = 280 - i * 52;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n }, sv("rect", { class: "stp", x, y, width: 100, height: 340 - y, fill: i === 4 ? "var(--accent)" : "var(--eden)", "fill-opacity": .15 + i * .12, stroke: "var(--surface)", "stroke-width": 2 }),
        sv("text", { x: x + 50, y: y + 22, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "font-style": "italic" }, s.g), sv("text", { x: x + 50, y: y + 40, "text-anchor": "middle", "font-size": 12, fill: "var(--ink)", "font-weight": 700 }, s.n)), () => sel(i));
      svg.append(g); return g;
    });
    const fig = sv("g", { style: { transition: reduceMotion ? "none" : "transform .7s cubic-bezier(.4,.1,.2,1)" } }, sv("circle", { cx: 0, cy: -36, r: 9, fill: "#c99a6e" }), sv("path", { d: "M-8 -26 L8 -26 L10 0 L-10 0 Z", fill: "var(--babel)" }));
    const crown = sv("path", { d: "M-9 -46 L-9 -54 L-4 -50 L0 -57 L4 -50 L9 -54 L9 -46 Z", fill: "var(--accent)", opacity: 0, style: { transition: "opacity .4s" } });
    fig.append(crown); svg.append(fig);
    $("#ssStairs").append(svg);
    function sel(i) {
      steps.forEach((g, j) => $(".stp", g).setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"));
      fig.style.transform = `translate(${70 + i * 100}px, ${280 - i * 52}px)`; crown.setAttribute("opacity", i === 4 ? 1 : 0);
      const s = S[i];
      $("#ssStairPanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of ${S.length}` }), el("h3", { text: `${s.g} · ${s.n}` }), el("p", { html: refify(s.d) }),
        el("div", { class: "row warn" }, el("b", { text: "The orphan spirit" }), el("p", { html: refify(DATA.ss.tenants.d + " (" + DATA.ss.tenants.ref + ")") })));
    }
    sel(0);
  }

  function initSsBabylons() {
    const B = DATA.ss.babylons;
    const icons = {
      tower: () => [...[0, 1, 2, 3].map(i => sv("rect", { x: 20 + i * 10, y: 80 - i * 18, width: 80 - i * 20, height: 18, fill: "var(--babel)", opacity: .6 + i * .1 }))],
      scroll: () => [sv("rect", { x: 30, y: 30, width: 60, height: 70, rx: 4, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), ...[0, 1, 2, 3].map(i => sv("line", { x1: 40, y1: 46 + i * 13, x2: 80, y2: 46 + i * 13, stroke: "var(--muted)", "stroke-width": 3 })), sv("circle", { cx: 30, cy: 30, r: 8, fill: "var(--accent)" }), sv("circle", { cx: 90, cy: 100, r: 8, fill: "var(--accent)" })],
      phone: () => [sv("rect", { x: 38, y: 18, width: 44, height: 84, rx: 8, fill: "var(--ink)" }), sv("rect", { x: 42, y: 26, width: 36, height: 64, rx: 3, fill: "var(--flame)", opacity: .7 }), ...[0, 1, 2].map(i => sv("path", { d: `M${92 + i * 6} ${40 + i * 4} Q${100 + i * 8} 60 ${92 + i * 6} ${80 - i * 4}`, fill: "none", stroke: "var(--flame)", "stroke-width": 2 }))]
    };
    const cards = B.map((b, i) => { const c = el("button", { class: "bcard", type: "button", onclick: () => sel(i) }, el("span", { class: "bver", text: "Babylon " + b.v }), sv("svg", { viewBox: "0 0 120 120", class: "bicon", "aria-hidden": "true" }, ...icons[b.icon]()), el("b", { text: b.n }), el("small", { text: b.who + " · " + b.weapon })); if (i < 2) c.append(el("span", { class: "barrow", "aria-hidden": "true", text: "→" })); $("#ssBabylons").append(c); return c; });
    function sel(i) { cards.forEach((c, j) => c.classList.toggle("on", j === i)); const b = B[i]; $("#ssBabylonPanel").replaceChildren(el("p", { class: "eyebrow", text: `Babylon ${b.v} · led by ${b.who}` }), el("h3", { text: b.n }), el("span", { class: "ref", text: b.ref }), el("div", { class: "row warn" }, el("b", { text: "What Satan weaponises" }), el("p", { text: b.weapon })), el("p", { html: refify(b.how) })); }
    sel(2);
    $("#ssDaniel").append(...DATA.ss.daniel.map(d => el("li", { class: "card reveal" }, el("b", { text: d.t }), el("span", { class: "ref", text: d.ref }), el("small", { class: "muted", text: d.d }))));
  }

  function initSsDaniels() {
    $("#ssDaniels").append(...DATA.ss.daniels.map((d, i) => el("div", { class: "card dstep" }, el("span", { class: "ssnum", text: String(i + 1) }), el("h3", { text: d.t }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.d) }))));
  }

  function initSsFire() {
    const svg = sv("svg", { viewBox: "0 0 420 340", role: "img", "aria-label": "A fire on Malta, a viper fastening on a hand, and the viper shaken into the fire" });
    svg.append(sv("rect", { y: 280, width: 420, height: 60, fill: "#8a6238", "fill-opacity": .3 }));
    [[-30, 10], [30, -10], [0, 0]].forEach(([dx, r]) => svg.append(sv("rect", { x: 140 + dx, y: 262, width: 140, height: 12, rx: 6, fill: "#6b4a2b", transform: `rotate(${r} 210 268)` })));
    const flames = sv("g", { style: { transition: "transform .8s cubic-bezier(.3,1.4,.5,1)", transformBox: "fill-box", transformOrigin: "bottom center" } },
      sv("path", { d: "M210 262 C150 230 170 170 200 130 C206 170 236 160 230 110 C270 160 280 230 210 262 Z", fill: "var(--flame)" }), sv("path", { d: "M210 260 C180 240 188 200 206 176 C210 200 228 196 226 170 C248 204 246 240 210 260 Z", fill: "var(--accent)" }));
    flames.style.transform = "scale(0.25)";
    svg.append(flames);
    const hand = sv("g", {}, sv("path", { d: "M420 200 L330 196 Q310 196 306 206 Q304 216 318 218 L420 222 Z", fill: "#c99a6e" }));
    svg.append(hand);
    const viper = sv("g", { opacity: 0, style: { transition: reduceMotion ? "none" : "transform 1s cubic-bezier(.4,.1,.2,1), opacity .5s" } }, sv("path", { d: "M318 208 C300 190 280 214 262 196 C246 180 236 200 222 190", fill: "none", stroke: "#3a4a2a", "stroke-width": 7, "stroke-linecap": "round" }), sv("circle", { cx: 220, cy: 189, r: 6, fill: "#3a4a2a" }));
    svg.append(viper);
    const cap = sv("text", { x: 210, y: 36, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "Gathering sticks on Malta");
    svg.append(cap);
    $("#ssFire").append(svg);
    $("#ssLight").addEventListener("click", () => { flames.style.transform = "scale(1)"; viper.style.transform = ""; setTimeout(() => { viper.setAttribute("opacity", 1); cap.textContent = "Out of the heat, a viper fastens on his hand"; }, reduceMotion ? 0 : 900); });
    $("#ssShake").addEventListener("click", () => { viper.style.transform = "translate(-40px, 40px) rotate(-30deg)"; setTimeout(() => { viper.setAttribute("opacity", 0); cap.textContent = "“He shook off the creature into the fire and suffered no harm”"; }, reduceMotion ? 0 : 700); flames.style.transform = "scale(1.1)"; });
    $("#ssAccord").append(...DATA.ss.accord.map(a => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: a.ref }), el("b", { text: a.t }), el("p", { html: refify(a.d) })))));
    flames.style.transform = "scale(1)"; cap.textContent = "When unity happens, fire comes";
  }


  /* ================ Part VIII: spiritual warfare and dominion ================ */
  const WF = () => DATA.wf;
  const txt = (x, y, s, o) => sv("text", Object.assign({ x, y, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, o || {}), s);
  const play = (node, frames, opt) => (reduceMotion || !node.animate) ? (Object.assign(node.style, frames[frames.length - 1]), { finished: Promise.resolve(), onfinish: null }) : node.animate(frames, Object.assign({ fill: "forwards", easing: "cubic-bezier(.3,.7,.3,1)" }, opt));
  const done = a => a.finished ? a.finished.catch(() => {}) : Promise.resolve();
  const sleep = ms => new Promise(r => setTimeout(r, reduceMotion ? 0 : ms));
  const person = (x, y, s, c) => sv("g", { transform: `translate(${x} ${y}) scale(${s || 1})` }, sv("circle", { cx: 0, cy: -26, r: 9, fill: c || "var(--ink)" }), sv("path", { d: "M-12 10 Q-12 -14 0 -14 Q12 -14 12 10 Z", fill: c || "var(--ink)" }));

  function selectSet(items, i) { items.forEach((n, j) => { n.classList.toggle("on", j === i); if (n.tagName === "BUTTON") n.setAttribute("aria-pressed", String(j === i)); }); }

  /* 1 · Layered battlefield */
  function initWfLayers() {
    const L = WF().layers, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Layered map: Christ seated, the church seated with him, the powers under his feet, and people who are not the enemy" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "wfThrone" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .75 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 })),
      sv("linearGradient", { id: "wfBeam", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .5 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const bands = [[8, 112], [124, 92], [228, 112], [352, 110]];
    const fills = ["var(--accent)", "var(--eden)", "var(--flame)", "var(--babel)"];
    svg.append(sv("polygon", { points: "236,70 284,70 360,350 160,350", fill: "url(#wfBeam)", class: "wf-beam" }));
    const gs = L.map((l, i) => {
      const [y, h] = bands[i];
      const g = hit(sv("g", { class: "fnode wf-band", tabindex: "0", role: "button", "aria-label": l.n }), () => sel(i));
      g.append(sv("rect", { class: "bandbg", x: 8, y, width: 504, height: h, rx: 14, fill: fills[i], "fill-opacity": .1, stroke: fills[i], "stroke-opacity": .5, "stroke-width": 1.5 }));
      g.append(txt(24, y + 22, l.n.toUpperCase(), { "text-anchor": "start", "font-size": 11.5, fill: fills[i], "letter-spacing": ".08em" }), txt(24, y + 38, l.ref, { "text-anchor": "start", "font-size": 11, "font-weight": 600, "font-style": "italic", fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    // throne
    svg.append(sv("circle", { cx: 260, cy: 62, r: 62, fill: "url(#wfThrone)", class: "pulse" }),
      sv("path", { d: "M236 92 L236 52 Q236 40 248 40 L272 40 Q284 40 284 52 L284 92 Z M226 92 L294 92 L294 100 L226 100 Z", fill: "var(--accent)" }),
      sv("path", { d: "M246 40 L250 26 L256 34 L260 22 L264 34 L270 26 L274 40 Z", fill: "var(--accent)" }));
    svg.append(txt(410, 52, "“far above all rule", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 }), txt(410, 68, "and authority”", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 }));
    // church seated
    [190, 225, 295, 330].forEach((x, i) => svg.append(sv("g", { class: "wf-bob", style: { animationDelay: i * .4 + "s" } }, person(x, 192, .95, "var(--eden)"))));
    svg.append(txt(260, 178, "in him", { "font-size": 11, fill: "var(--eden)" }));
    // feet line + powers
    svg.append(sv("path", { d: "M40 222 L480 222", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round" }), txt(496, 250, "under his feet", { "text-anchor": "end", "font-size": 11, fill: "var(--accent)" }));
    WF().powers.forEach((p, i) => {
      const x = 120 + i * 100, y = 292 + (i % 2) * 10;
      svg.append(sv("g", { class: "wf-drift", style: { animationDelay: i * .7 + "s" } },
        sv("path", { d: `M${x - 22} ${y + 12} Q${x - 24} ${y - 22} ${x} ${y - 26} Q${x + 24} ${y - 22} ${x + 22} ${y + 12} L${x + 14} ${y + 4} L${x + 6} ${y + 14} L${x} ${y + 4} L${x - 6} ${y + 14} L${x - 14} ${y + 4} Z`, fill: "var(--flame)", "fill-opacity": .55 }),
        sv("circle", { cx: x - 7, cy: y - 8, r: 2.5, fill: "var(--surface)" }), sv("circle", { cx: x + 7, cy: y - 8, r: 2.5, fill: "var(--surface)" }),
        txt(x, y + 32, p.gk, { "font-size": 10.5, "font-style": "italic", "font-weight": 700, fill: "var(--muted)" })));
    });
    // people
    [110, 170, 230, 290, 350, 410].forEach((x, i) => svg.append(person(x, 440, 1, i % 2 ? "var(--babel)" : "var(--muted)")));
    svg.append(sv("g", { transform: "translate(470 412)" }, sv("circle", { r: 16, fill: "none", stroke: "var(--flame)", "stroke-width": 3 }), sv("path", { d: "M-11 -11 L11 11", stroke: "var(--flame)", "stroke-width": 3 })), txt(470, 444, "not the enemy", { "font-size": 10.5, fill: "var(--flame)" }));
    $("#wfLayers").append(svg);
    function sel(i) {
      gs.forEach((g, j) => { const r = $(".bandbg", g); r.setAttribute("fill-opacity", j === i ? .26 : .1); r.setAttribute("stroke-width", j === i ? 3 : 1.5); });
      const l = L[i];
      $("#wfLayerPanel").replaceChildren(el("p", { class: "eyebrow", text: `Layer ${i + 1} of ${L.length}` }), el("h3", { text: l.n }), el("span", { class: "ref", text: l.ref }), el("p", { html: refify(l.d) }));
    }
    sel(0);
    $("#wfPowers").append(...WF().powers.map(p => el("div", { class: "card power-card tilt" }, el("p", { class: "eyebrow gk", text: p.gk }), el("h3", { text: p.n }), el("p", { html: refify(p.d) }))));
    $("#wfMichael").append(photo("michael"));
  }

  /* 2 · Word pictures */
  function wordPic(kind) {
    const s = sv("svg", { viewBox: "0 0 120 90", class: "wpic", "aria-hidden": "true" });
    const c = "var(--accent)";
    if (kind === "badge") s.append(sv("g", { class: "wp-pop" }, sv("path", { d: "M60 8 L92 20 L88 54 Q80 74 60 84 Q40 74 32 54 L28 20 Z", fill: c, "fill-opacity": .2, stroke: c, "stroke-width": 3 }), sv("path", { d: "M60 28 L65 42 L80 42 L68 51 L72 66 L60 57 L48 66 L52 51 L40 42 L55 42 Z", fill: c })));
    if (kind === "engine") s.append(sv("g", { class: "wp-spin" }, sv("circle", { cx: 60, cy: 45, r: 22, fill: "none", stroke: "var(--eden)", "stroke-width": 8 }), ...Array.from({ length: 8 }, (_, i) => sv("rect", { x: 55, y: 13, width: 10, height: 12, rx: 2, fill: "var(--eden)", transform: `rotate(${i * 45} 60 45)` }))), sv("path", { d: "M54 36 L72 45 L54 54 Z", fill: "var(--accent)", class: "wp-pulse" }));
    if (kind === "crown") s.append(sv("g", { class: "wp-pop" }, sv("path", { d: "M24 66 L20 26 L42 44 L60 16 L78 44 L100 26 L96 66 Z", fill: c }), sv("rect", { x: 24, y: 68, width: 72, height: 10, rx: 3, fill: c }), ...[42, 60, 78].map(x => sv("circle", { cx: x, cy: 56, r: 4, fill: "var(--surface)" }))));
    if (kind === "fort") {
      s.append(sv("rect", { x: 10, y: 80, width: 100, height: 4, fill: "var(--muted)" }));
      [[30, 50], [50, 50], [70, 50], [30, 30], [70, 30], [50, 30]].forEach(([x, y], i) => s.append(sv("rect", { class: "wp-brick", x, y, width: 18, height: 18, rx: 2, fill: "var(--flame)", "fill-opacity": .65, style: { "--d": i * .08 + "s", "--r": (i % 2 ? 1 : -1) * (10 + i * 6) + "deg" } })));
      [30, 50, 70].forEach(x => s.append(sv("rect", { class: "wp-brick", x: x + 4, y: 20, width: 10, height: 8, fill: "var(--flame)", "fill-opacity": .65, style: { "--d": ".5s", "--r": "25deg" } })));
    }
    return s;
  }
  function initWfWords() {
    const W = WF().words;
    const cards = W.map((w, i) => { const b = el("button", { class: "card wcard", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, wordPic(w.pic), el("p", { class: "eyebrow gk", text: w.w }), el("h3", { text: w.t })); $("#wfWords").append(b); return b; });
    function sel(i) { selectSet(cards, i); const w = W[i]; $("#wfWordPanel").replaceChildren(el("p", { class: "eyebrow", text: w.w }), el("h3", { text: w.t }), el("p", { html: refify(w.d) })); }
    sel(0);
  }

  /* 3 · Chain of authority */
  function initWfChain() {
    const wide = { son: 540, means: 600, sons: 380, under: 380 };
    const nodes = WF().chain.map(n => ({ ...n, w: wide[n.id] || 440 }));
    flowchart($("#wfChain"), nodes, WF().chainEdges, { id: "wfc", w: 900, h: 560, nodeW: 440, refsInline: true, label: "Flowchart of the chain of authority from the Father to the church", start: "son", onSelect: n => panelFill("#wfChainPanel", "Chain of authority", n) });
  }

  /* 4 · Armour of God */
  function initWfArmour() {
    const A = WF().armour, svg = sv("svg", { viewBox: "0 0 440 470", role: "img", "aria-label": "Figure of a soldier wearing the armour of God; select each piece" });
    const body = "var(--muted)";
    const aura = sv("g", { class: "wf-aura" }, sv("ellipse", { cx: 220, cy: 240, rx: 200, ry: 228, fill: "var(--accent)", "fill-opacity": .06, stroke: "var(--accent)", "stroke-width": 2, "stroke-dasharray": "6 10" }));
    svg.append(aura);
    svg.append(sv("g", { opacity: .5 },
      sv("circle", { cx: 220, cy: 84, r: 28, fill: body }),
      sv("rect", { x: 182, y: 118, width: 76, height: 150, rx: 18, fill: body }),
      sv("path", { d: "M184 130 L132 220 M256 130 L300 236", stroke: body, "stroke-width": 18, "stroke-linecap": "round" }),
      sv("rect", { x: 188, y: 262, width: 26, height: 140, rx: 10, fill: body }), sv("rect", { x: 226, y: 262, width: 26, height: 140, rx: 10, fill: body })));
    const P = {
      helmet: [sv("path", { d: "M188 88 Q188 46 220 44 Q252 46 252 88 L242 88 Q240 64 220 62 Q200 64 198 88 Z", fill: "var(--accent)" }), sv("path", { d: "M212 46 Q220 14 248 22 Q232 28 228 46 Z", fill: "var(--flame)" })],
      breast: [sv("path", { d: "M180 122 L260 122 L266 206 Q220 232 174 206 Z", fill: "var(--accent)" }), sv("path", { d: "M220 130 L220 212 M190 150 Q220 162 250 150", stroke: "var(--accent-ink)", "stroke-width": 2, fill: "none", opacity: .5 })],
      belt: [sv("rect", { x: 176, y: 222, width: 88, height: 22, rx: 6, fill: "var(--eden)" }), ...[184, 200, 216, 232, 248].map(x => sv("rect", { x, y: 244, width: 10, height: 34, rx: 3, fill: "var(--eden)", "fill-opacity": .8 }))],
      shoes: [sv("path", { d: "M184 396 L216 396 L218 420 L176 420 Q172 410 184 396 Z M224 396 L256 396 Q268 410 264 420 L222 420 Z", fill: "var(--babel)" }), ...[0, 1, 2].map(i => sv("path", { d: `M${188 + i * 8} 400 L${190 + i * 8} 386 M${232 + i * 8} 400 L${234 + i * 8} 386`, stroke: "var(--babel)", "stroke-width": 3 }))],
      shield: [sv("rect", { x: 66, y: 150, width: 96, height: 180, rx: 20, fill: "var(--babel)" }), sv("rect", { x: 74, y: 158, width: 80, height: 164, rx: 16, fill: "none", stroke: "var(--accent)", "stroke-width": 3 }), sv("circle", { cx: 114, cy: 240, r: 14, fill: "var(--accent)" }), sv("path", { d: "M114 172 L114 226 M114 254 L114 308 M82 240 L100 240 M128 240 L146 240", stroke: "var(--accent)", "stroke-width": 3 })],
      sword: [sv("path", { d: "M305 60 L315 60 L315 222 L305 222 Z M310 44 L315 60 L305 60 Z", fill: "var(--ink)", "fill-opacity": .8 }), sv("rect", { x: 290, y: 222, width: 40, height: 8, rx: 3, fill: "var(--accent)" }), sv("rect", { x: 306, y: 230, width: 8, height: 26, rx: 3, fill: "var(--flame)" })],
      pray: [sv("path", { d: "M220 6 Q228 20 220 30 Q212 20 220 6 Z M180 16 Q186 26 180 34 Q174 26 180 16 Z M260 16 Q266 26 260 34 Q254 26 260 16 Z", fill: "var(--flame)" })]
    };
    const labels = { helmet: [350, 70], breast: [350, 160], belt: [350, 236], shoes: [350, 410], shield: [24, 120], sword: [350, 120], pray: [92, 30] };
    const pieces = A.map((a, i) => {
      const g = hit(sv("g", { class: "fnode wf-piece", tabindex: "0", role: "button", "aria-label": a.n }), () => { wear(i); sel(i); });
      g.append(...P[a.id]);
      const [lx, ly] = labels[a.id];
      const lab = sv("g", { class: "wf-plab" }, sv("circle", { cx: lx, cy: ly - 4, r: 10, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }), txt(lx, ly, String(i + 1), { "font-size": 11 }), txt(lx + (lx > 300 ? 16 : 16), ly, a.n.split(" ").slice(0, a.id === "pray" ? 1 : 1)[0], { "text-anchor": "start", "font-size": 11.5, "font-weight": 700, fill: "var(--muted)" }));
      svg.append(g, lab); return g;
    });
    $("#wfArmour").append(svg);
    function wear(i) { pieces[i].classList.add("worn"); if (pieces.every(p => p.classList.contains("worn"))) { aura.classList.add("on"); } }
    function sel(i) {
      pieces.forEach((p, j) => p.classList.toggle("sel", j === i));
      const a = A[i];
      $("#wfArmourPanel").replaceChildren(el("p", { class: "eyebrow", text: `Piece ${i + 1} of ${A.length}` }), el("h3", { text: a.n }), el("span", { class: "ref", text: a.ref }), el("p", { html: refify(a.d) }), el("p", { class: "use" }, el("b", { text: "Put it on: " }), a.use));
    }
    sel(0); wear(0);
    $("#wfSuitUp").addEventListener("click", async () => {
      pieces.forEach(p => p.classList.remove("worn")); aura.classList.remove("on");
      for (let i = 0; i < A.length; i++) { await sleep(i ? 650 : 120); wear(i); sel(i); }
      if (window.__burst) { const r = svg.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + r.height * .3); }
    });
  }

  /* 5 · Evidence matrix (shared by "speak to it" and "break curses") */
  function matrix(gridSel, panelSel, legendSel, items, levels, eyebrow) {
    const grid = $(gridSel), legend = $(legendSel);
    const tiles = items.map((t, i) => {
      const [lab, c] = levels[t.lvl];
      const b = el("button", { class: "ttile", type: "button", "aria-pressed": "false", style: { "--c": c }, onclick: () => sel(i) }, el("span", { class: "tdot" }), el("b", { text: t.n }), el("small", { text: lab }));
      grid.append(b); return b;
    });
    [["all", "All", "var(--muted)"], ...Object.entries(levels).map(([k, [n, c]]) => [k, n, c])].forEach(([k, n, c]) => legend.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), style: { "--c": c } }, k !== "all" ? el("span", { class: "tdot", style: { background: c } }) : null, n)));
    legend.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", legend).forEach(c => c.setAttribute("aria-pressed", String(c === b)));
      tiles.forEach((t, i) => t.classList.toggle("dim", b.dataset.k !== "all" && items[i].lvl !== b.dataset.k));
    });
    function sel(i) {
      selectSet(tiles, i);
      const t = items[i], [lab, c] = levels[t.lvl];
      $(panelSel).replaceChildren(el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: t.n }), el("span", { class: "verdict", style: { "--c": c }, text: lab }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }), el("p", { class: "use" }, el("b", { text: "How: " }), t.how));
    }
    sel(0);
  }
  function initWfSpeak() { matrix("#wfTargets", "#wfTargetPanel", "#wfLegend", WF().targets, WF().levels, "Can we speak to it?"); }

  /* 6 · Bound in heaven */
  function initWfBind() {
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "Heaven decides, the church agrees and speaks, and earth is bound and loosed" });
    svg.append(sv("rect", { width: 520, height: 150, fill: "var(--accent)", "fill-opacity": .1 }), sv("rect", { y: 270, width: 520, height: 150, fill: "var(--babel)", "fill-opacity": .08 }));
    svg.append(txt(20, 24, "HEAVEN", { "text-anchor": "start", "font-size": 11, fill: "var(--accent)", "letter-spacing": ".14em" }), txt(20, 296, "EARTH", { "text-anchor": "start", "font-size": 11, fill: "var(--babel)", "letter-spacing": ".14em" }));
    const scroll = sv("g", { class: "wb wb0" }, sv("rect", { x: 200, y: 44, width: 120, height: 70, rx: 6, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }), sv("rect", { x: 192, y: 40, width: 136, height: 10, rx: 5, fill: "var(--accent)" }), sv("rect", { x: 192, y: 108, width: 136, height: 10, rx: 5, fill: "var(--accent)" }), txt(260, 74, "“It is", { "font-size": 12 }), txt(260, 92, "settled”", { "font-size": 12 }));
    const beam = sv("path", { class: "wb wb1", d: "M260 122 L260 196", stroke: "var(--accent)", "stroke-width": 6, "stroke-dasharray": "4 8", "stroke-linecap": "round" });
    const agree = sv("g", { class: "wb wb2" }, person(222, 232, 1.1, "var(--eden)"), person(298, 232, 1.1, "var(--eden)"), sv("path", { d: "M236 214 Q260 196 284 214", fill: "none", stroke: "var(--accent)", "stroke-width": 3 }),
      txt(260, 262, "two agree · keys turn", { "font-size": 11, fill: "var(--eden)" }), sv("path", { class: "wf-wave", d: "M330 214 q8 -10 16 0 q8 10 16 0 M330 226 q8 -10 16 0 q8 10 16 0", fill: "none", stroke: "var(--accent)", "stroke-width": 2.5 }));
    const strong = sv("g", { class: "wb wb3" }, sv("path", { d: "M70 400 Q68 330 110 322 Q152 330 150 400 Z", fill: "var(--flame)", "fill-opacity": .6 }), sv("circle", { cx: 110, cy: 312, r: 16, fill: "var(--flame)", "fill-opacity": .6 }),
      ...[340, 360, 380].map(y => sv("ellipse", { class: "chainl", cx: 110, cy: y, rx: 50, ry: 8, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), txt(170, 350, "bound", { "text-anchor": "start", "font-size": 12, fill: "var(--flame)" }));
    const freed = sv("g", { class: "wb wb3" }, person(410, 396, 1.6, "var(--eden)"), sv("path", { d: "M372 360 l-14 -10 M448 360 l14 -10 M376 380 l-18 4 M444 380 l18 4", stroke: "var(--ink)", "stroke-width": 3, "stroke-linecap": "round" }), txt(410, 312, "loosed", { "font-size": 12, fill: "var(--eden)" }));
    svg.append(scroll, beam, agree, strong, freed, sv("path", { d: "M260 280 L260 300", stroke: "var(--muted)", "stroke-width": 2 }));
    $("#wfBind").append(svg);
    const steps = [
      ["Heaven decides", "Matt 16:19; Ps 119:89", "The Greek is future perfect: “whatever you bind on earth shall have been bound in heaven”. God’s will is settled first. “Forever, O LORD, your word is firmly fixed in the heavens.”"],
      ["Heaven reveals", "Matt 16:17; Amos 3:7", "“Flesh and blood has not revealed this to you, but my Father who is in heaven.” Binding begins with revelation: hearing what the Father has decided."],
      ["The church agrees and speaks", "Matt 18:18–20; Acts 4:24–31", "“If two of you agree on earth about anything they ask, it will be done for them by my Father.” The early church prayed Psalm 2 back to God, and the place was shaken."],
      ["Earth is bound and loosed", "Matt 12:28–29; Luke 13:16", "“How can someone enter a strong man’s house … unless he first binds the strong man?” The enemy’s work is restrained and captives are loosed, as the bent woman was “loosed from this bond”."]
    ];
    const r = $("#wfBindRange");
    function set(s) {
      r.value = s;
      $$(".wb", svg).forEach(n => { const k = +n.getAttribute("class").match(/wb(\d)/)[1]; n.classList.toggle("on", k <= s); });
      const [t, ref, d] = steps[s];
      $("#wfBindInfo").replaceChildren(el("p", { class: "eyebrow", text: `Step ${s + 1} of 4` }), el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { html: refify(d) }));
    }
    r.addEventListener("input", () => set(+r.value));
    $("#wfBindPlay").addEventListener("click", async () => { for (let s = 0; s < 4; s++) { set(s); await sleep(1400); } });
    set(0);
  }

  /* 7 · Words that build worlds */
  function initWfTongue() {
    const wide = { call: 420, decree: 380, prophesy: 520 };
    const nodes = WF().tongue.map(n => ({ ...n, w: wide[n.id] || 460 }));
    flowchart($("#wfTongue"), nodes, WF().tongueEdges, { id: "wft", w: 900, h: 480, nodeW: 460, refsInline: true, label: "Flowchart from God's creative word to prophesying over our lives", start: "tongue", onSelect: n => panelFill("#wfTonguePanel", "The power of words", n) });
    // life and death picture (Prov 18:21; Jas 3:4–6)
    const svg = sv("svg", { viewBox: "0 0 520 300", role: "img", "aria-label": "Words of life grow a tree; words of death spread a fire" });
    svg.append(sv("rect", { y: 250, width: 520, height: 50, fill: "#8a6238", "fill-opacity": .3 }));
    const mouth = sv("g", { transform: "translate(260 150)" }, sv("circle", { r: 46, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }), sv("path", { d: "M-22 4 Q0 26 22 4 Q0 12 -22 4 Z", fill: "var(--ink)" }), sv("circle", { cx: -14, cy: -14, r: 4, fill: "var(--ink)" }), sv("circle", { cx: 14, cy: -14, r: 4, fill: "var(--ink)" }));
    const tree = sv("g", { class: "wl-tree" }, sv("rect", { x: 92, y: 170, width: 12, height: 80, fill: "#6b4a2b" }), ...[[98, 150, 40], [72, 172, 26], [124, 170, 28], [98, 118, 26]].map(([x, y, r]) => sv("circle", { cx: x, cy: y, r, fill: "var(--eden)" })), ...[[86, 150], [110, 164], [96, 124]].map(([x, y]) => sv("circle", { cx: x, cy: y, r: 5, fill: "var(--accent)" })));
    const fire = sv("g", { class: "wl-fire" }, ...[[380, 250, 40], [420, 250, 54], [462, 250, 36]].map(([x, y, h]) => sv("path", { class: "flick", d: `M${x - 18} ${y} Q${x - 22} ${y - h * .6} ${x} ${y - h} Q${x + 22} ${y - h * .6} ${x + 18} ${y} Z`, fill: "var(--flame)" })), ...[396, 440].map(x => sv("path", { d: `M${x} 250 l-6 -30 l12 -10 l-4 40 Z`, fill: "#4a3a2a" })));
    const lifeW = sv("g", { class: "wl-words life" }, ...["blessing", "truth", "hope"].map((w, i) => txt(200 - i * 26, 112 + i * 26, w, { "font-size": 12, fill: "var(--eden)", class: "fly", style: { animationDelay: i * .3 + "s" } })));
    const deathW = sv("g", { class: "wl-words death" }, ...["curse", "lies", "fear"].map((w, i) => txt(320 + i * 26, 112 + i * 26, w, { "font-size": 12, fill: "var(--flame)", class: "fly r", style: { animationDelay: i * .3 + "s" } })));
    svg.append(tree, fire, lifeW, deathW, mouth, txt(98, 284, "life · Prov 18:21", { "font-size": 11.5, fill: "var(--eden)" }), txt(420, 284, "a spark · Jas 3:5–6", { "font-size": 11.5, fill: "var(--flame)" }));
    $("#wfRudder").append(svg);
    const modes = [["life", "Speak life"], ["death", "Speak death"]];
    const chips = modes.map(([k, n]) => el("button", { class: "chip", type: "button", "aria-pressed": "false", text: n, onclick: () => set(k) }));
    $("#wfRudderChips").append(...chips);
    function set(k) { svg.dataset.mode = k; chips.forEach((c, i) => c.setAttribute("aria-pressed", String(modes[i][0] === k))); }
    set("life");
  }

  /* 8 · Declaration builder */
  function initWfBuilder() {
    const D = WF().declare;
    const svg = sv("svg", { viewBox: "0 0 520 200", role: "img", "aria-label": "Promise, faith, declaration and fruit" });
    const stations = [[60, "Promise", "M-22 -16 L0 -10 L22 -16 L22 16 L0 22 L-22 16 Z M0 -10 L0 22"], [190, "Faith", "M0 18 C-30 -4 -18 -26 0 -12 C18 -26 30 -4 0 18 Z"], [320, "Speak", "M-16 -8 Q0 20 16 -8 Q0 2 -16 -8 Z"], [450, "Fruit", "M0 22 L0 -2 M0 4 Q-18 -2 -16 -18 Q-2 -14 0 4 M0 -2 Q18 -10 16 -24 Q2 -20 0 -2"]];
    const nodes = stations.map(([x, t, d], i) => {
      const g = sv("g", { class: "ds", transform: `translate(${x} 100)` }, sv("circle", { r: 44, class: "dsbg", fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }), sv("path", { d, fill: i === 0 ? "none" : "var(--accent)", stroke: "var(--accent)", "stroke-width": 3, "stroke-linejoin": "round" }), txt(0, 70, t, { "font-size": 13 }));
      svg.append(g); return g;
    });
    [0, 1, 2].forEach(i => svg.append(sv("path", { class: "dsline", d: `M${stations[i][0] + 48} 100 L${stations[i + 1][0] - 52} 100`, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "5 7", "marker-end": "" })));
    const waves = sv("g", { class: "dswave" }, ...[0, 1, 2].map(i => sv("path", { d: `M${362 + i * 10} ${80 - i * 4} q10 20 0 ${40 + i * 8}`, fill: "none", stroke: "var(--accent)", "stroke-width": 2.5, style: { animationDelay: i * .2 + "s" } })));
    const ref = txt(260, 26, "", { "font-size": 12.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 });
    svg.append(waves, ref);
    $("#wfDeclArt").append(svg);
    const chips = D.map((d, i) => el("button", { class: "chip", type: "button", "aria-pressed": "false", text: d.n, onclick: () => sel(i) }));
    $("#wfDeclChips").append(...chips);
    let run = 0;
    async function sel(i) {
      selectSet(chips, i);
      const d = D[i], my = ++run;
      ref.textContent = d.ref;
      nodes.forEach(n => n.classList.remove("on"));
      for (let k = 0; k < nodes.length; k++) { await sleep(k ? 380 : 40); if (my !== run) return; nodes[k].classList.add("on"); }
      void d;
    }
    const out = $("#wfDeclOut");
    function render(i) {
      const d = D[i];
      const copy = el("button", { class: "btn small", type: "button", text: "Copy", onclick: async () => { try { await navigator.clipboard.writeText(d.say + " (" + d.ref + ")"); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Select the text to copy"; } setTimeout(() => copy.textContent = "Copy", 1800); } });
      const speak = "speechSynthesis" in window ? el("button", { class: "btn small", type: "button", text: "Read aloud", onclick: () => { try { speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(d.say)); } catch (e) { /* unsupported */ } } }) : null;
      out.replaceChildren(...[el("p", { class: "eyebrow", text: d.n }), el("h3", { text: "The promise" }), el("p", { class: "promise", text: d.promise }), el("span", { class: "ref", text: d.ref }), el("h3", { class: "mt-s", text: "Your declaration" }), el("blockquote", { class: "decl", text: d.say }), el("div", { class: "htl-controls", style: { marginTop: "8px" } }, copy, speak),
        el("p", { class: "muted small", text: "Say it to God in thanks, over yourself in faith, and against fear in Jesus’ name. Change the words to fit your situation, but keep the promise." })].filter(Boolean));
    }
    chips.forEach((c, i) => c.addEventListener("click", () => render(i)));
    sel(0); render(0);
  }

  function initWfCompare() {
    const C = WF().compare, t = $("#wfCompare");
    t.append(el("thead", {}, el("tr", {}, el("th", { text: "" }), ...C.cols.map((c, i) => el("th", { class: "cc" + i, text: c })))),
      el("tbody", {}, ...C.rows.map(r => el("tr", {}, el("td", { text: r[0] }), ...r.slice(1).map((c, i) => el("td", { class: "cc" + i, html: refify(c) }))))));
  }

  /* 9 · Curse timeline */
  function initWfCurseLine() {
    const T = WF().curseLine, W = 1000, H = 230, n = T.length;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline from the curse in Genesis to no more curse in Revelation", style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "wfCurseG", gradientUnits: "userSpaceOnUse", x1: 40, y1: 0, x2: W - 40, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--flame)" }), sv("stop", { offset: .62, "stop-color": "var(--flame)" }), sv("stop", { offset: .74, "stop-color": "var(--accent)" }), sv("stop", { offset: 1, "stop-color": "var(--eden)" }))));
    svg.append(sv("path", { class: "draw", d: `M40 120 L${W - 40} 120`, stroke: "url(#wfCurseG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = T.map((_, i) => 60 + i * (W - 120) / (n - 1));
    const dots = T.map((t, i) => {
      const x = xs[i], cross = i === 6, up = i % 2 === 0;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": t.t }), () => sel(i));
      if (cross) g.append(sv("circle", { cx: x, cy: 120, r: 34, fill: "var(--accent)", "fill-opacity": .18, class: "pulse" }), sv("path", { d: `M${x - 4} 88 h8 v18 h14 v8 h-14 v36 h-8 v-36 h-14 v-8 h14 Z`, fill: "var(--accent)" }));
      else g.append(sv("circle", { class: "cdot", cx: x, cy: 120, r: 12, fill: "var(--surface)", stroke: i < 6 ? "var(--flame)" : "var(--eden)", "stroke-width": 4 }));
      const ly = up ? 66 : 178;
      g.append(sv("line", { x1: x, y1: up ? 78 : 136, x2: x, y2: up ? 104 : 162, stroke: "var(--line)", "stroke-width": 2 }));
      const words = t.t.split(" "), half = Math.ceil(words.length / 2), two = t.t.length > 18;
      g.append(txt(x, ly - (two ? 8 : 0), two ? words.slice(0, half).join(" ") : t.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, words.slice(half).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), t.ref.split(";")[0], { "font-size": 11, "font-weight": 600, "font-style": "italic", fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#wfCurseLine").append(svg);
    function sel(i) {
      dots.forEach((g, j) => g.classList.toggle("sel", j === i));
      const t = T[i];
      $("#wfCursePanel").replaceChildren(el("p", { class: "eyebrow", text: `${i + 1} of ${n}` }), el("h3", { text: t.t }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }));
    }
    sel(6);
  }

  /* 10 · Shield animation */
  function initWfShield() {
    const svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "Arrows of curses meet the cross and the shield of faith" });
    svg.append(sv("rect", { y: 300, width: 520, height: 40, fill: "var(--eden)", "fill-opacity": .15 }));
    // house under the cross
    const home = sv("g", {}, sv("path", { d: "M380 300 L380 210 L440 160 L500 210 L500 300 Z", fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 2 }), sv("rect", { x: 425, y: 250, width: 30, height: 50, fill: "var(--babel)", "fill-opacity": .5 }),
      sv("path", { d: "M436 92 h8 v20 h16 v8 h-16 v34 h-8 v-34 h-16 v-8 h16 Z", fill: "var(--accent)" }), person(440, 240, .9, "var(--eden)"));
    const glow = sv("ellipse", { cx: 440, cy: 200, rx: 76, ry: 124, fill: "var(--accent)", "fill-opacity": .08, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "2 0", class: "wf-cover" });
    const shield = sv("g", { class: "wf-shieldg" }, sv("path", { d: "M330 90 Q350 80 350 100 L350 290 Q350 310 330 300 Q316 200 330 90 Z", fill: "var(--babel)" }), sv("path", { d: "M338 110 L338 280", stroke: "var(--accent)", "stroke-width": 3 }));
    const door = sv("g", { class: "wf-door" }, sv("rect", { x: 326, y: 180, width: 30, height: 40, fill: "var(--bg)", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-dasharray": "4 3" }), txt(341, 236, "open door", { "font-size": 10.5, fill: "var(--flame)" }));
    svg.append(glow, home, shield, door);
    const labels = ["curse", "spell", "word curse", "accusation"];
    const arrows = labels.map((l, i) => {
      const y = 120 + i * 46;
      const g = sv("g", { class: "arrow" }, sv("line", { x1: 20, y1: y, x2: 80, y2: y, stroke: "var(--flame)", "stroke-width": 4 }), sv("path", { d: `M80 ${y - 7} L96 ${y} L80 ${y + 7} Z`, fill: "var(--flame)" }), sv("path", { d: `M20 ${y} l-8 -6 M20 ${y} l-8 6`, stroke: "var(--flame)", "stroke-width": 3 }), txt(52, y - 8, l, { "font-size": 10.5, fill: "var(--flame)" }));
      svg.append(g); return g;
    });
    const bird = sv("g", { class: "wf-bird", opacity: 0 }, sv("path", { d: "M0 0 Q10 -10 20 0 Q30 -10 40 0", fill: "none", stroke: "var(--ink)", "stroke-width": 3 }));
    const burst = sv("circle", { cx: 440, cy: 236, r: 0, fill: "var(--flame)", "fill-opacity": .4 });
    svg.append(bird, burst);
    $("#wfShield").append(svg);
    const modes = [
      ["covered", "In Christ, no cause", "Num 23:8, 23; Prov 26:2; Isa 54:17", "“How can I curse whom God has not cursed?” A curse with no cause has nowhere to land; like a sparrow, it flits away. Stand in faith and refuse fear."],
      ["open", "An open door", "Eph 4:27; Acts 19:18–19; Matt 18:34", "Unconfessed sin, occult objects or practices, and unforgiveness give the enemy a topos, a place to stand. Here one arrow finds a gap."],
      ["closed", "Door closed by repentance", "1 John 1:9; Gal 3:13; Rev 12:11", "Confess, renounce and forgive, then declare what the blood has done. The gap closes and every arrow falls. Then bless those who cursed you (Luke 6:28)."]
    ];
    let mode = 0;
    const chips = modes.map((m, i) => el("button", { class: "chip", type: "button", "aria-pressed": String(i === 0), text: m[1], onclick: () => { mode = i; selectSet(chips, i); info(); fire(); } }));
    $("#wfShieldMode").append(...chips);
    function info() { const [, t, ref, d] = modes[mode]; door.classList.toggle("on", mode === 1); $("#wfShieldInfo").replaceChildren(el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { html: refify(d) })); }
    async function fire() {
      arrows.forEach(a => { a.getAnimations && a.getAnimations().forEach(x => x.cancel()); a.style.transform = ""; a.style.opacity = 1; });
      burst.setAttribute("r", 0);
      const runs = arrows.map(async (a, i) => {
        await sleep(i * 260);
        const through = mode === 1 && i === 1;
        const dx = through ? 330 : 222;
        await done(play(a, [{ transform: "translate(0px,0px)" }, { transform: `translate(${dx}px,${through ? 70 : 0}px)` }], { duration: 700, easing: "ease-in" }));
        if (through) { burst.setAttribute("r", 30); play(burst, [{ opacity: 1 }, { opacity: .2 }], { duration: 600 }); return; }
        await done(play(a, [{ transform: `translate(${dx}px,0px)`, opacity: 1 }, { transform: `translate(${dx - 70}px,${150 - i * 30}px) rotate(-110deg)`, opacity: 0 }], { duration: 650, easing: "ease-out" }));
      });
      if (mode === 0) { bird.setAttribute("opacity", 1); play(bird, [{ transform: "translate(250px,120px)" }, { transform: "translate(120px,10px)", opacity: 0 }], { duration: 1600, delay: 900 }); }
      await Promise.all(runs);
    }
    $("#wfShieldGo").addEventListener("click", fire);
    info();
  }

  function initWfBreak() {
    matrix("#wfCurseTargets", "#wfCurseTargetPanel", "#wfCurseLegend", WF().curseTargets, WF().curseLevels, "Can we break it?");
    $("#wfVerbs").append(...WF().verbs.map(v => el("div", { class: "card verb-card tilt" }, el("p", { class: "eyebrow gk", text: v.w }), el("h3", { text: v.t }), el("span", { class: "ref", text: v.ref }), el("p", { html: refify(v.d) }))));
  }

  function initWfFree() {
    const wide = { door: 380, attack: 380, repent: 360, resist: 360, ask: 520, break: 520, fill: 480 };
    const nodes = WF().free.map(n => ({ ...n, w: wide[n.id] || 440 }));
    flowchart($("#wfFree"), nodes, WF().freeEdges, { id: "wff", w: 900, h: 560, nodeW: 440, fs: 14, refsInline: true, label: "Flowchart: a path to freedom from curses and bondages", start: "trouble", annotate: [{ x: 262, y: 182, t: "yes", anchor: "end" }, { x: 638, y: 182, t: "no", anchor: "start" }], onSelect: n => panelFill("#wfFreePanel", "A path to freedom", n) });
  }

  /* 11 · Spectrum */
  function initWfSpectrum() {
    const S = WF().spectrum, svg = sv("svg", { viewBox: "0 0 900 150", role: "img", "aria-label": "Spectrum from a demon behind everything to no spiritual realm, with the sober middle road" });
    const cols = ["var(--flame)", "var(--babel)", "var(--eden)", "var(--babel)", "var(--flame)"];
    let x0 = 20;
    S.forEach((z, i) => {
      const x1 = 20 + Math.min(z.max, 100) * 8.6, w = x1 - x0;
      svg.append(sv("rect", { x: x0, y: 70, width: w - 3, height: 26, rx: 6, fill: cols[i], "fill-opacity": i === 2 ? .7 : .35 }));
      const words = z.t.split(" "); const half = Math.ceil(words.length / 2);
      svg.append(txt(x0 + w / 2, 34, words.slice(0, half).join(" "), { "font-size": 12 }), txt(x0 + w / 2, 50, words.slice(half).join(" "), { "font-size": 12 }));
      x0 = x1;
    });
    svg.append(txt(20, 124, "← ditch: fixation", { "text-anchor": "start", "font-size": 11.5, fill: "var(--flame)" }), txt(880, 124, "ditch: denial →", { "text-anchor": "end", "font-size": 11.5, fill: "var(--flame)" }), txt(450, 124, "the road", { "font-size": 11.5, fill: "var(--eden)" }));
    const mk = sv("g", { class: "spec-mk" }, sv("path", { d: "M0 64 L-9 52 L9 52 Z", fill: "var(--ink)" }), sv("rect", { x: -3, y: 64, width: 6, height: 38, rx: 3, fill: "var(--ink)" }));
    svg.append(mk);
    $("#wfSpectrum").append(svg);
    const r = $("#wfSpecRange");
    function set() {
      const v = +r.value; mk.setAttribute("transform", `translate(${20 + v * 8.6} 0)`);
      const i = S.findIndex(z => v < z.max), z = S[i];
      $("#wfSpecPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: cols[i] }, text: i === 2 ? "The biblical road" : "A ditch to avoid" }), el("h3", { text: z.t }), el("p", { html: refify(z.d) }));
    }
    r.addEventListener("input", set); set();
    $("#wfErrors").append(...WF().errors.map((e, i) => el("div", { class: "card err-card stg" }, el("span", { class: "errn", text: String(i + 1) }), el("h3", { text: e.t }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.d) }))));
  }

  /* 12 · Sons, priests, kings */
  function initWfRoles() {
    const R = WF().roles, svg = sv("svg", { viewBox: "0 0 460 400", role: "img", "aria-label": "Triangle of son, priest and king around Christ" });
    const pos = [[230, 70], [90, 320], [370, 320]];
    svg.append(sv("path", { d: "M230 70 L90 320 L370 320 Z", fill: "var(--accent)", "fill-opacity": .06, stroke: "var(--line)", "stroke-width": 3 }), sv("path", { class: "flow", d: "M230 70 L90 320 L370 320 Z", fill: "none", stroke: "var(--accent)", "stroke-width": 2, opacity: .6 }));
    svg.append(sv("circle", { cx: 230, cy: 236, r: 44, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), txt(230, 232, "Christ", { "font-size": 14 }), txt(230, 250, "in you", { "font-size": 12, fill: "var(--muted)" }));
    const icons = { son: "M0 -16 Q14 -16 14 -2 Q14 14 0 18 Q-14 14 -14 -2 Q-14 -16 0 -16 Z", priest: "M-12 16 L-12 -6 Q0 -22 12 -6 L12 16 Z M-4 -2 h8 M0 -6 v10", king: "M-16 10 L-18 -12 L-8 -2 L0 -16 L8 -2 L18 -12 L16 10 Z" };
    const gs = R.map((r, i) => {
      const [x, y] = pos[i];
      const g = hit(sv("g", { class: "fnode role-node", tabindex: "0", role: "button", "aria-label": r.n }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 52, fill: "var(--surface)", stroke: r.c, "stroke-width": 3 }), sv("path", { d: icons[r.id], transform: `translate(${x} ${y - 10})`, fill: r.c }), txt(x, y + 28, r.n.replace("As ", "").toUpperCase(), { "font-size": 12, fill: r.c, "letter-spacing": ".1em" }));
      svg.append(g); return g;
    });
    $("#wfRoleArt").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const r = R[i];
      $("#wfRolePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: r.c }, text: r.n }), el("h3", { text: r.core }), el("span", { class: "ref", text: r.ref }), el("p", { html: refify(r.d) }), el("ul", { class: "ticks" }, r.acts.map(a => el("li", { html: refify(a) }))));
    }
    sel(0);
  }

  /* 13 · Wilderness temptation */
  function initWfTempt() {
    const T = WF().temptations, svg = sv("svg", { viewBox: "0 50 900 270", role: "img", "aria-label": "The tempter's three attacks deflected by Jesus with the words It is written" });
    svg.append(sv("rect", { y: 260, width: 900, height: 60, fill: "#c9a46a", "fill-opacity": .25 }));
    const scenes = [
      sv("g", {}, ...[[140, 262], [170, 266], [200, 262]].map(([x, y]) => sv("ellipse", { cx: x, cy: y, rx: 16, ry: 10, fill: "var(--muted)" }))),
      sv("g", {}, sv("rect", { x: 430, y: 150, width: 60, height: 110, fill: "var(--muted)", "fill-opacity": .5 }), sv("path", { d: "M420 150 L460 120 L500 150 Z", fill: "var(--muted)", "fill-opacity": .6 })),
      sv("g", {}, sv("path", { d: "M560 260 L640 140 L720 260 Z", fill: "var(--eden)", "fill-opacity": .35 }), ...[600, 640, 680].map(x => sv("rect", { x: x - 6, y: 236, width: 12, height: 12, fill: "var(--accent)" })))
    ];
    svg.append(...scenes);
    const tempter = sv("g", { class: "wf-drift" }, sv("path", { d: "M60 250 Q40 160 90 130 Q140 160 120 250 Z", fill: "var(--flame)", "fill-opacity": .5 }), sv("circle", { cx: 80, cy: 160, r: 3, fill: "var(--surface)" }), sv("circle", { cx: 100, cy: 160, r: 3, fill: "var(--surface)" }));
    const jesus = sv("g", {}, sv("circle", { cx: 810, cy: 150, r: 60, fill: "var(--accent)", "fill-opacity": .14, class: "pulse" }), sv("circle", { cx: 810, cy: 128, r: 14, fill: "var(--ink)", "fill-opacity": .8 }), sv("path", { d: "M786 258 L794 150 Q810 140 826 150 L834 258 Z", fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 2 }));
    const word = sv("g", { class: "itw", opacity: 0 }, sv("rect", { x: 670, y: 70, width: 110, height: 40, rx: 8, fill: "var(--accent)" }), txt(725, 95, "It is written", { "font-size": 13, fill: "var(--accent-ink)" }));
    const dart = sv("g", {}, sv("line", { x1: 130, y1: 0, x2: 200, y2: 0, stroke: "var(--flame)", "stroke-width": 5 }), sv("path", { d: "M200 -8 L218 0 L200 8 Z", fill: "var(--flame)" }));
    const tag = txt(180, -14, "", { "font-size": 12, fill: "var(--flame)" });
    dart.append(tag);
    const shards = sv("g", { opacity: 0 }, ...Array.from({ length: 6 }, (_, i) => sv("line", { x1: 0, y1: 0, x2: Math.cos(i) * 22, y2: Math.sin(i) * 22, stroke: "var(--flame)", "stroke-width": 3, transform: "translate(680 150)" })));
    const marks = [0, 1, 2].map(i => sv("circle", { cx: 380 + i * 70, cy: 300, r: 9, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
    svg.append(tempter, jesus, word, dart, shards, ...marks);
    $("#wfTempt").append(svg);
    let i = -1, busy = false;
    dart.setAttribute("transform", "translate(0 150)"); dart.style.opacity = 0;
    async function go(n) {
      if (busy) return; busy = true; i = n;
      marks.forEach((m, j) => m.setAttribute("fill", j <= i ? "var(--accent)" : "var(--surface)"));
      scenes.forEach((s, j) => s.style.opacity = j === i ? 1 : .35);
      const t = T[i];
      tag.textContent = t.target;
      word.setAttribute("opacity", 0); shards.setAttribute("opacity", 0);
      dart.style.opacity = 1;
      await done(play(dart, [{ transform: "translate(0px,150px)" }, { transform: "translate(460px,150px)" }], { duration: 1100, easing: "ease-in" }));
      word.setAttribute("opacity", 1);
      play(word, [{ transform: "scale(.6)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 300 });
      dart.style.opacity = 0; shards.setAttribute("opacity", 1);
      play(shards, [{ opacity: 1, transform: "scale(.4)" }, { opacity: 0, transform: "scale(1.6)" }], { duration: 700 });
      $("#wfTemptPanel").replaceChildren(el("p", { class: "eyebrow", text: `Temptation ${i + 1} of 3 · ${t.target}` }),
        el("div", { class: "row warn" }, el("b", { text: "The attack" }), el("p", { text: t.attack })), el("div", { class: "row eden" }, el("b", { text: "The answer" }), el("p", { text: t.answer })), el("span", { class: "ref", text: t.ref }),
        i === 2 ? el("p", { html: refify("“Then the devil left him, and behold, angels came and were ministering to him” (Matt 4:11). Jesus then returned “in the power of the Spirit” (Luke 4:14).") }) : null);
      $("#wfTemptNext").textContent = i === 2 ? "Start again ▸" : "Next attack ▸";
      busy = false;
    }
    $("#wfTemptNext").addEventListener("click", () => go(i >= 2 ? 0 : i + 1));
    $("#wfTemptPrev").addEventListener("click", () => go(Math.max(0, i - 1)));
    $("#wfTemptPanel").append(el("p", { text: "Press “Next attack” to begin." }));
  }

  /* 14 · Battle rhythm */
  function initWfRhythm() {
    const R = WF().rhythm, n = R.length, cx = 230, cy = 220, rad = 160;
    const svg = sv("svg", { viewBox: "0 0 460 440", role: "img", "aria-label": "A seven-step cycle of daily spiritual warfare" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 3 }), sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .6 }));
    if (!reduceMotion) { const d = sv("circle", { r: 7, fill: "var(--accent)" }); d.append(sv("animateMotion", { dur: "14s", repeatCount: "indefinite", path: `M${cx} ${cy - rad} A${rad} ${rad} 0 1 1 ${cx - .1} ${cy - rad}` })); svg.append(d); }
    svg.append(txt(cx, cy - 6, "Stand in", { "font-size": 14 }), txt(cx, cy + 14, "Christ’s victory", { "font-size": 14 }));
    const gs = R.map((r, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": r.t }), () => { stop(); sel(i); });
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 34, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2.5 }), txt(x, y - 4, String(i + 1), { "font-size": 15, fill: "var(--accent)" }));
      const w = r.t.split(" "); g.append(txt(x, y + 11, w.length > 2 ? w.slice(0, 2).join(" ") : r.t, { "font-size": 9.5 })); if (w.length > 2) g.append(txt(x, y + 22, w.slice(2).join(" "), { "font-size": 9.5 }));
      svg.append(g); return g;
    });
    $("#wfRhythm").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const r = R[i];
      $("#wfRhythmPanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${n}` }), el("h3", { text: r.t }), el("span", { class: "ref", text: r.ref }), el("p", { html: refify(r.d) }));
    }
    let k = 0, timer = null;
    const stop = () => { clearInterval(timer); timer = null; };
    sel(0);
    if (!reduceMotion && "IntersectionObserver" in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && timer === null && k === 0) { timer = setInterval(() => { k++; if (k >= n) return stop(); sel(k); }, 3200); } }), { threshold: .5 }).observe(svg);
  }

  function initWfObjections() { objectionList("#wfObjections", "#wfObjFilter", WF().objections); studyGuide("#wfQuestions", "#wfMemory", WF().study, WF().memory); }

  /* ================ Part IX: heaven and earth united ================ */
  const SN = () => DATA.sn;
  const tween = (from, to, ms, fn) => {
    if (reduceMotion) return fn(to);
    const t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; fn(from + (to - from) * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const info = (sel, eyebrow, t, ref, d, extra) => $(sel).replaceChildren(...[el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: t }), ref ? el("span", { class: "ref", text: ref }) : null, el("p", { html: refify(d) }), ...(extra || [])].filter(Boolean));

  /* 1 · Heaven–earth overlap slider */
  function initSnMerge() {
    const M = SN().merge, R = 92, C = 190;
    const svg = sv("svg", { viewBox: "0 0 520 380", role: "img", "aria-label": "Two circles, heaven and earth, overlapping more or less at each stage of the biblical story" });
    svg.append(sv("defs", {},
      sv("radialGradient", { id: "snHeav" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .55 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": .14 })),
      sv("radialGradient", { id: "snEarth" }, sv("stop", { offset: 0, "stop-color": "var(--eden)", "stop-opacity": .5 }), sv("stop", { offset: 1, "stop-color": "var(--eden)", "stop-opacity": .14 })),
      sv("clipPath", { id: "snClip" }, sv("circle", { id: "snClipC", cx: 260, cy: C, r: R }))));
    const rays = sv("g", { class: "sn-rays", opacity: 0 }, ...Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return sv("line", { x1: 260 + Math.cos(a) * 104, y1: C + Math.sin(a) * 104, x2: 260 + Math.cos(a) * 150, y2: C + Math.sin(a) * 150, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" }); }));
    const heav = sv("circle", { cx: 260, cy: C, r: R, fill: "url(#snHeav)", stroke: "var(--accent)", "stroke-width": 2.5 });
    const earth = sv("circle", { cx: 260, cy: C, r: R, fill: "url(#snEarth)", stroke: "var(--eden)", "stroke-width": 2.5 });
    const lens = sv("circle", { cx: 260, cy: C, r: R, fill: "var(--accent)", "fill-opacity": .45, "clip-path": "url(#snClip)", class: "pulse" });
    const hl = txt(260, 0, "HEAVEN", { "font-size": 13, fill: "var(--accent)", "letter-spacing": ".16em" }), el2 = txt(260, 0, "EARTH", { "font-size": 13, fill: "var(--eden)", "letter-spacing": ".16em" });
    const stars = sv("g", {}, ...[[-40, -30], [30, -50], [50, -14], [-20, -60], [-58, -6]].map(([x, y]) => sv("circle", { cx: 260 + x, cy: y, r: 2.5, fill: "var(--accent)" })));
    const hills = sv("path", { d: "", fill: "var(--eden)", "fill-opacity": .5 });
    const label = txt(260, 0, "", { "font-size": 12.5, fill: "var(--ink)" });
    svg.append(rays, heav, earth, lens, stars, hills, hl, el2, label);
    $("#snMerge").append(svg);
    let cur = 1 - M[0].ov;
    function draw(off) {
      const d = off * 100, hy = C - d, ey = C + d;
      heav.setAttribute("cy", hy); earth.setAttribute("cy", ey); $("#snClipC", svg).setAttribute("cy", ey); lens.setAttribute("cy", hy);
      hl.setAttribute("y", hy - R + 30); el2.setAttribute("y", ey + R - 18);
      stars.setAttribute("transform", `translate(0 ${hy})`);
      hills.setAttribute("d", `M${200} ${ey + 46} Q230 ${ey + 22} 260 ${ey + 40} Q290 ${ey + 18} 320 ${ey + 46} Z`);
      label.setAttribute("y", C + 5);
      rays.setAttribute("opacity", Math.max(0, 1 - off * 6));
    }
    const r = $("#snMergeRange");
    function set(i) {
      r.value = i; const m = M[i], target = 1 - m.ov;
      tween(cur, target, 800, v => { cur = v; draw(v); });
      label.textContent = m.ov > .2 ? m.t : "";
      const part = (DATA.sn.hub.find(h => h.f === m.page) || { n: "", t: "Connections" });
      info("#snMergeInfo", `Moment ${i + 1} of ${M.length} · overlap ${Math.round(m.ov * 100)}%`, m.t, m.ref, m.d, [el("a", { class: "btn small", href: m.page, text: `See it in ${part.n ? "Part " + part.n : "Connections"} →` })]);
    }
    r.addEventListener("input", () => set(+r.value));
    $("#snMergePlay").addEventListener("click", async () => { for (let i = 0; i < M.length; i++) { set(i); await sleep(1500); } });
    draw(cur); set(0);
  }

  /* 2 · anakephalaiōsis: gathering threads */
  function initSnWord() {
    const W = SN().word, svg = sv("svg", { viewBox: "0 0 520 320", role: "img", "aria-label": "Threads from heaven and earth gathered into one knot under Christ the head" });
    svg.append(sv("rect", { width: 520, height: 160, fill: "var(--accent)", "fill-opacity": .07 }), sv("rect", { y: 160, width: 520, height: 160, fill: "var(--eden)", "fill-opacity": .08 }),
      txt(16, 22, "THINGS IN HEAVEN", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(16, 310, "THINGS ON EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".12em" }));
    const K = [260, 150];
    const pts = [[40, 50], [110, 30], [190, 70], [330, 60], [420, 30], [490, 70], [30, 270], [120, 300], [200, 250], [320, 290], [410, 250], [490, 290]];
    const threads = pts.map(([x, y], i) => {
      const c = i < 6 ? "var(--accent)" : "var(--eden)";
      const p = sv("path", { d: `M${x} ${y} C${x} ${(y + K[1]) / 2} ${K[0] + (x - K[0]) * .3} ${K[1] + (i < 6 ? -40 : 40)} ${K[0]} ${K[1]}`, fill: "none", stroke: c, "stroke-width": 3, "stroke-linecap": "round", pathLength: 1, class: "thread", style: { transitionDelay: i * .07 + "s" } });
      svg.append(p, sv("circle", { cx: x, cy: y, r: 6, fill: c }));
      return p;
    });
    const knot = sv("g", { class: "knot" }, sv("circle", { cx: K[0], cy: K[1], r: 18, fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 3 }), sv("path", { d: `M${K[0] - 9} ${K[1]} q9 -14 18 0 q-9 14 -18 0`, fill: "none", stroke: "var(--ink)", "stroke-width": 2.5 }));
    const head = sv("g", { class: "headc" }, sv("circle", { cx: 260, cy: 70, r: 30, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), sv("path", { d: "M244 82 L242 60 L252 68 L260 54 L268 68 L278 60 L276 82 Z", fill: "var(--accent)" }), sv("line", { x1: 260, y1: 100, x2: 260, y2: 132, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "3 4" }), txt(250, 116, "Christ, the head", { "text-anchor": "end", "font-size": 12, fill: "var(--accent)" }));
    svg.append(knot, head);
    $("#snWord").append(svg);
    $("#snWordGo").addEventListener("click", () => { svg.classList.remove("gathered"); void svg.getBoundingClientRect(); requestAnimationFrame(() => svg.classList.add("gathered")); });
    $("#snWordPanel").append(el("p", { class: "eyebrow", text: "Ephesians 1:10" }), el("p", { class: "big-word", text: W.w }), el("p", { class: "muted small", text: W.tr }),
      el("div", { class: "wparts" }, ...W.parts.flatMap(([a, b], i) => [i ? el("span", { class: "wplus", text: "+" }) : null, el("span", { class: "wpart" }, el("b", { text: a }), el("small", { text: b }))].filter(Boolean))),
      el("p", { html: refify(W.d) }));
    $("#snDore").append(photo("dore"));
  }

  /* 3 · Hub: every part summed up in Christ */
  function initSnHub() {
    const H = SN().hub, cx = 260, cy = 260, rad = 190;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Hub diagram: the eight parts of the study connected to Christ at the centre" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "3 6" }));
    const nodes = H.map((h, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / H.length, x = cx + Math.cos(a) * (rad + 8), y = cy + Math.sin(a) * rad, c = KC[h.c];
      svg.append(sv("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: "var(--line)", "stroke-width": 2.5 }), sv("line", { x1: x, y1: y, x2: cx, y2: cy, stroke: c, "stroke-width": 2, class: "flow", opacity: .7 }));
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `Part ${h.n}: ${h.t}` }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 52, fill: "var(--surface)", stroke: c, "stroke-width": 3 }), txt(x, y - 6, h.n, { "font-size": 17, fill: c, class: "jnum" }));
      const w = h.t.split(" "), half = Math.ceil(w.length / 2);
      g.append(txt(x, y + 12, w.slice(0, half).join(" "), { "font-size": 9.5 }), txt(x, y + 24, w.slice(half).join(" "), { "font-size": 9.5 }));
      return g;
    });
    svg.append(...nodes);
    svg.append(sv("circle", { cx, cy, r: 70, fill: "var(--accent)", "fill-opacity": .16, class: "pulse" }), sv("circle", { cx, cy, r: 54, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }),
      txt(cx, cy - 8, "All things", { "font-size": 13 }), txt(cx, cy + 8, "united", { "font-size": 13 }), txt(cx, cy + 24, "in Christ", { "font-size": 13, fill: "var(--accent)" }));
    $("#snHub").append(svg);
    function sel(i) {
      nodes.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const h = H[i];
      info("#snHubPanel", `Part ${h.n}`, h.t, null, h.d, [el("a", { class: "btn primary small", href: h.f, text: `Open Part ${h.n} →` })]);
    }
    sel(0);
  }

  /* 4 · Expanding Eden */
  function initSnExpand() {
    const E = SN().expand, cx = 260, cy = 210;
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "The garden of Eden growing until God's presence fills the whole earth" });
    svg.append(sv("defs", {}, sv("clipPath", { id: "snEarthClip" }, sv("circle", { cx, cy, r: 190 }))));
    svg.append(sv("circle", { cx, cy, r: 190, fill: "var(--babel)", "fill-opacity": .14, stroke: "var(--babel)", "stroke-width": 2 }));
    [["M120 140 q30 -40 80 -20 q20 30 -10 60 q-40 20 -70 -40 Z"], ["M290 110 q50 -20 90 20 q10 40 -30 50 q-50 -10 -60 -70 Z"], ["M180 280 q40 -10 60 30 q-10 40 -50 30 q-30 -30 -10 -60 Z"], ["M330 250 q40 0 50 40 q-20 30 -50 10 Z"]].forEach(([d]) => svg.append(sv("path", { d, fill: "var(--muted)", "fill-opacity": .2 })));
    const garden = sv("circle", { cx, cy, r: E[0].r, fill: "var(--eden)", "fill-opacity": .5, "clip-path": "url(#snEarthClip)", class: "sn-garden" });
    const glow = sv("circle", { cx, cy, r: E[0].r + 10, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "4 6", "clip-path": "url(#snEarthClip)", class: "sn-garden" });
    svg.append(garden, glow);
    E.forEach((e, i) => { if (i) svg.append(sv("circle", { cx, cy, r: Math.min(e.r, 188), fill: "none", stroke: "var(--line)", "stroke-dasharray": "2 5" })); });
    svg.append(sv("g", { transform: `translate(${cx} ${cy})` }, sv("rect", { x: -3, y: -6, width: 6, height: 18, fill: "#6b4a2b" }), sv("circle", { cx: 0, cy: -12, r: 12, fill: "var(--eden)" }), sv("circle", { cx: -4, cy: -14, r: 2.5, fill: "var(--accent)" }), sv("circle", { cx: 5, cy: -9, r: 2.5, fill: "var(--accent)" })));
    const cube = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("rect", { x: cx - 24, y: 22, width: 48, height: 40, fill: "var(--accent)", "fill-opacity": .8 }), sv("path", { d: `M${cx - 24} 22 l12 -10 h48 l-12 10 Z M${cx + 24} 22 l12 -10 v40 l-12 10 Z`, fill: "var(--accent)" }), txt(cx + 50, 44, "New Jerusalem", { "text-anchor": "start", "font-size": 11.5, fill: "var(--accent)" }));
    svg.append(cube, txt(cx, 412, "the earth", { "font-size": 11.5, fill: "var(--babel)" }));
    $("#snExpand").append(svg);
    const chips = E.map((e, i) => el("button", { class: "chip", type: "button", text: String(i + 1), "aria-label": e.t, onclick: () => set(i) }));
    $("#snExpandChips").append(...chips);
    let cur = E[0].r;
    function set(i) {
      selectSet(chips, i);
      const e = E[i];
      tween(cur, e.r, 900, v => { cur = v; garden.setAttribute("r", v); glow.setAttribute("r", v + 10); });
      cube.setAttribute("opacity", i === E.length - 1 ? 1 : 0);
      info("#snExpandInfo", `Stage ${i + 1} of ${E.length}`, e.t, e.ref, e.d);
    }
    $("#snExpandPlay").addEventListener("click", async () => { for (let i = 0; i < E.length; i++) { set(i); await sleep(1500); } });
    set(0);
    $("#snAdam").append(photo("adam"));
  }

  /* 5 · Romans 8: creation and the revealing of sons */
  function initSnReveal() {
    const R = SN().reveal, svg = sv("svg", { viewBox: "0 0 900 280", role: "img", "aria-label": "Creation moving from groaning in bondage to glory as the sons of God are revealed" });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "snSky", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .35 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const sky = sv("rect", { width: 900, height: 220, fill: "url(#snSky)", class: "rv rv4" });
    const sun = sv("circle", { cx: 760, cy: 230, r: 50, fill: "var(--accent)", class: "rv-sun" });
    const ground = sv("path", { d: "M0 220 Q150 190 300 214 Q450 236 600 206 Q750 186 900 214 L900 280 L0 280 Z", fill: "var(--muted)", "fill-opacity": .45, class: "rv-ground" });
    const waves = sv("g", { class: "rv-groan" }, ...[0, 1, 2].map(i => sv("path", { d: `M${60 + i * 30} ${150 - i * 14} q20 -16 40 0 q20 16 40 0`, fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, style: { animationDelay: i * .3 + "s" } })), txt(120, 190, "groaning", { "font-size": 12, fill: "var(--flame)" }));
    const chains = sv("g", { class: "rv-chains" }, ...[0, 1, 2, 3, 4].map(i => sv("ellipse", { cx: 240 + i * 22, cy: 200, rx: 12, ry: 7, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), txt(284, 182, "bondage to decay", { "font-size": 11.5, fill: "var(--muted)" }));
    const watch = sv("g", { class: "rv rv1" }, ...[[600, 196], [650, 190], [700, 196]].map(([x, y]) => sv("g", { transform: `translate(${x} ${y})` }, sv("path", { d: "M0 0 L0 -26 M0 -26 q-10 -6 -6 -16 M0 -26 q10 -6 6 -16", stroke: "var(--eden)", "stroke-width": 3, fill: "none" }))), txt(650, 132, "eager longing", { "font-size": 12, fill: "var(--eden)" }));
    const sons = sv("g", { class: "rv rv2" }, ...[400, 450, 500].map((x, i) => sv("g", {}, sv("circle", { cx: x, cy: 150, r: 26, fill: "var(--accent)", "fill-opacity": .25, class: "pulse", style: { animationDelay: i * .4 + "s" } }), person(x, 182, 1.3, "var(--accent)"))), txt(450, 104, "sons led by the Spirit", { "font-size": 12.5, fill: "var(--accent)" }));
    const spirit = sv("g", { class: "rv rv3" }, sv("path", { d: "M380 86 q70 -44 140 0", fill: "none", stroke: "var(--babel)", "stroke-width": 3, "stroke-dasharray": "4 6", class: "flow" }), txt(450, 50, "the Spirit groans with us", { "font-size": 11.5, fill: "var(--babel)" }));
    const blooms = sv("g", { class: "rv rv4" }, ...[60, 140, 220, 300, 560, 640, 820, 870].map((x, i) => sv("g", { transform: `translate(${x} ${214 - (i % 3) * 6})` }, sv("line", { x1: 0, y1: 0, x2: 0, y2: -22, stroke: "var(--eden)", "stroke-width": 3 }), sv("circle", { cx: 0, cy: -26, r: 7, fill: i % 2 ? "var(--accent)" : "var(--flame)" }), sv("circle", { cx: 0, cy: -26, r: 3, fill: "var(--surface)" }))), txt(150, 140, "freedom of glory", { "font-size": 12.5, fill: "var(--eden)" }));
    svg.append(sky, sun, sv("path", { d: ground.getAttribute("d"), fill: "var(--surface)" }), ground, waves, chains, watch, spirit, sons, blooms);
    $("#snReveal").append(svg);
    const chips = R.map((r, i) => el("button", { class: "chip", type: "button", text: `${i + 1} · ${r.t}`, onclick: () => set(i) }));
    $("#snRevealChips").append(...chips);
    function set(i) {
      selectSet(chips, i);
      svg.dataset.step = i;
      $$(".rv", svg).forEach(n => { const k = +n.getAttribute("class").match(/rv(\d)/)[1]; n.classList.toggle("on", k <= i); });
      const r = R[i]; info("#snRevealPanel", `Romans 8 · step ${i + 1} of ${R.length}`, r.t, r.ref, r.d);
    }
    set(0);
    $("#snNot").append(...SN().notThis.map(([t, d]) => el("div", { class: "card stg not-card" }, el("span", { class: "notx", text: "✕" }), el("h3", { text: t }), el("p", { html: refify(d) }))));
  }

  /* 6 · nēpios → teknon → huios */
  function initSnGrowth() {
    const G = SN().growth, svg = sv("svg", { viewBox: "0 0 900 330", role: "img", "aria-label": "Three steps rising: infant, child and mature son", style: { minWidth: "700px" } });
    const steps = [[60, 250, 240], [320, 200, 260], [610, 140, 270]];
    svg.append(sv("path", { d: "M60 300 L60 250 L300 250 L300 200 L580 200 L580 140 L880 140 L880 300 Z", fill: "var(--accent)", "fill-opacity": .08 }), txt(470, 316, "“grow up in every way into him who is the head” · Eph 4:15", { "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
    const figs = [
      () => sv("g", {}, sv("circle", { cx: 0, cy: -34, r: 10, fill: "var(--muted)" }), sv("ellipse", { cx: 0, cy: -12, rx: 14, ry: 12, fill: "var(--muted)" }), sv("path", { d: "M-20 -2 q20 14 40 0", stroke: "var(--babel)", "stroke-width": 3, fill: "none" }), txt(26, -40, "milk", { "text-anchor": "start", "font-size": 10.5, fill: "var(--muted)" })),
      () => sv("g", {}, sv("circle", { cx: 0, cy: -58, r: 11, fill: "var(--eden)" }), sv("path", { d: "M-14 0 L-12 -44 Q0 -50 12 -44 L14 0 Z", fill: "var(--eden)" }), sv("path", { d: "M14 -36 q26 -6 34 -26", stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", fill: "none" }), sv("circle", { cx: 52, cy: -66, r: 9, fill: "var(--accent)", "fill-opacity": .5 }), txt(64, -66, "Abba", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)" })),
      () => sv("g", {}, sv("circle", { cx: 0, cy: -90, r: 13, fill: "var(--accent)" }), sv("path", { d: "M-24 0 L-18 -72 Q0 -80 18 -72 L24 0 Z", fill: "var(--accent)", "fill-opacity": .85 }), sv("path", { d: "M-24 0 L-30 -60 L-18 -72", fill: "var(--flame)", "fill-opacity": .6 }), sv("circle", { cx: 30, cy: -46, r: 6, fill: "none", stroke: "var(--ink)", "stroke-width": 3 }), sv("path", { d: "M18 -60 L30 -50", stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round" }), sv("path", { d: "M-10 -106 l4 -10 l6 6 l6 -6 l4 10 Z", fill: "var(--accent)" }), txt(30, 26, "ring, robe, sandals · Luke 15:22", { "font-size": 10.5, fill: "var(--muted)" }))
    ];
    const gs = G.map((g, i) => {
      const [x, y, w] = steps[i];
      const node = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `${g.w}: ${g.t}` }), () => sel(i));
      node.append(sv("rect", { class: "rbg", x, y: y - 6, width: w, height: 6, rx: 3, fill: "var(--line)" }));
      const f = figs[i](); f.setAttribute("transform", `translate(${x + 60} ${y - 8})`); node.append(f);
      node.append(txt(x + w - 70, y - 54, g.gk, { "font-size": 22, fill: [KC.muted, KC.eden, KC.accent][i], class: "jnum" }), txt(x + w - 70, y - 34, g.w, { "font-size": 13, "font-style": "italic" }), txt(x + w - 70, y - 18, g.t, { "font-size": 11.5, fill: "var(--muted)" }));
      svg.append(node); return node;
    });
    $("#snGrowth").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--accent)" : "var(--line)"));
      const g = G[i];
      info("#snGrowthPanel", `${g.gk} · ${g.w}`, g.t, g.ref, g.d, [el("ul", { class: "ticks" }, g.marks.map(m => el("li", { html: refify(m) })))]);
    }
    sel(2);
    $("#snDaughters").append(sv("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, sv("circle", { cx: 9, cy: 8, r: 4, fill: "currentColor" }), sv("circle", { cx: 16, cy: 9, r: 3.4, fill: "currentColor", opacity: .7 }), sv("path", { d: "M2 21 q7 -12 14 0 Z M12 21 q5 -10 10 0 Z", fill: "currentColor" })), el("div", {}, el("b", { text: "Sons and daughters" }), el("p", { html: refify(SN().daughters) })));
  }

  /* 7 · Body of Christ */
  function initSnBody() {
    const B = SN().body, svg = sv("svg", { viewBox: "0 0 420 500", role: "img", "aria-label": "A body with Christ as the head; select each member" });
    const col = "var(--babel)";
    svg.append(sv("g", { opacity: .3 }, sv("rect", { x: 160, y: 120, width: 100, height: 170, rx: 30, fill: col }), sv("path", { d: "M164 140 L104 250 M256 140 L316 250", stroke: col, "stroke-width": 24, "stroke-linecap": "round" }), sv("path", { d: "M182 280 L176 440 M238 280 L244 440", stroke: col, "stroke-width": 28, "stroke-linecap": "round" })));
    svg.append(sv("circle", { cx: 210, cy: 70, r: 58, fill: "var(--accent)", "fill-opacity": .18, class: "pulse" }), sv("circle", { cx: 210, cy: 70, r: 42, fill: "var(--accent)", "fill-opacity": .85 }), sv("path", { d: "M188 32 L186 14 L198 22 L210 8 L222 22 L234 14 L232 32 Z", fill: "var(--accent)" }));
    const pos = { head: [210, 70, 46, 270, 18], eyes: [196, 64, 9, 40, 70], mouth: [210, 92, 9, 40, 108], heart: [222, 166, 16, 300, 160], hands: [104, 254, 16, 30, 260], knees: [178, 370, 14, 30, 380], feet: [244, 446, 16, 300, 452], joints: [256, 142, 12, 320, 110] };
    const icons = { heart: "M0 6 C-10 -2 -8 -10 0 -5 C8 -10 10 -2 0 6 Z" };
    const gs = B.map((b, i) => {
      const [x, y, r, lx, ly] = pos[b.id];
      const g = hit(sv("g", { class: "fnode bpart", tabindex: "0", role: "button", "aria-label": b.n }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r, fill: b.id === "head" ? "transparent" : "var(--surface)", stroke: b.id === "head" ? "transparent" : "var(--accent)", "stroke-width": 2.5 }));
      if (b.id !== "head") g.append(sv("circle", { cx: x, cy: y, r: r + 6, fill: "none", stroke: "var(--accent)", "stroke-width": 1.5, class: "ping" }));
      if (icons[b.id]) g.append(sv("path", { d: icons[b.id], transform: `translate(${x} ${y})`, fill: "var(--flame)" }));
      g.append(sv("line", { x1: x, y1: y, x2: lx + (lx > 210 ? -6 : 60), y2: ly - 4, stroke: "var(--line)", "stroke-width": 1.5 }), txt(lx, ly, b.n.split(":")[0].replace(" and ligaments", ""), { "text-anchor": "start", "font-size": 12 }));
      svg.append(g); return g;
    });
    $("#snBody").append(svg);
    function sel(i) {
      gs.forEach((g, j) => g.classList.toggle("sel", j === i));
      const b = B[i];
      info("#snBodyPanel", "The body of Christ", b.n, b.ref, b.d, [el("p", { class: "use" }, el("b", { text: "As kings and priests: " }), b.kp)]);
    }
    sel(0);
  }

  /* 8 · Two-way ladder */
  function initSnLadder() {
    const L = SN().ladder, svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "A ladder between heaven and earth: priestly actions rise, kingly actions descend" });
    svg.append(sv("rect", { width: 520, height: 70, fill: "var(--accent)", "fill-opacity": .14 }), sv("rect", { y: 430, width: 520, height: 70, fill: "var(--eden)", "fill-opacity": .14 }),
      txt(260, 40, "HEAVEN · the throne", { "font-size": 12, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(260, 472, "EARTH · the nations", { "font-size": 12, fill: "var(--eden)", "letter-spacing": ".12em" }));
    svg.append(sv("line", { x1: 230, y1: 60, x2: 230, y2: 440, stroke: "var(--ink)", "stroke-width": 5, opacity: .6 }), sv("line", { x1: 290, y1: 60, x2: 290, y2: 440, stroke: "var(--ink)", "stroke-width": 5, opacity: .6 }));
    for (let y = 90; y < 440; y += 36) svg.append(sv("line", { x1: 230, y1: y, x2: 290, y2: y, stroke: "var(--ink)", "stroke-width": 4, opacity: .5 }));
    if (!reduceMotion) [["M245 440 L245 64", "var(--eden)", 0], ["M245 440 L245 64", "var(--eden)", 2], ["M275 64 L275 440", "var(--accent)", 1], ["M275 64 L275 440", "var(--accent)", 3]].forEach(([p, c, b]) => { const d = sv("circle", { r: 6, fill: c }); d.append(sv("animateMotion", { dur: "4s", begin: b + "s", repeatCount: "indefinite", path: p })); svg.append(d); });
    svg.append(txt(110, 96, "↑ PRIESTS carry up", { "font-size": 11.5, fill: "var(--eden)" }), txt(410, 96, "KINGS bring down ↓", { "font-size": 11.5, fill: "var(--accent)" }));
    const items = [];
    const pill = (it, x, y, c, kind, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": it.t }), () => sel(kind, i));
      g.append(sv("rect", { class: "rbg", x: x - 92, y: y - 15, width: 184, height: 30, rx: 15, fill: "var(--surface)", stroke: c, "stroke-width": 2 }), txt(x, y + 4.5, it.t, { "font-size": 12 }));
      svg.append(g); items.push([kind, i, g]);
    };
    L.up.forEach((it, i) => pill(it, 110, 400 - i * 80, "var(--eden)", "up", i));
    L.down.forEach((it, i) => pill(it, 410, 130 + i * 54, "var(--accent)", "down", i));
    $("#snLadder").append(svg);
    function sel(kind, i) {
      items.forEach(([k, j, g]) => $(".rbg", g).setAttribute("fill", k === kind && j === i ? "var(--glow)" : "var(--surface)"));
      const it = L[kind][i];
      info("#snLadderPanel", kind === "up" ? "Priestly: earth → heaven" : "Kingly: heaven → earth", it.t, it.ref, it.d);
    }
    sel("up", 0);
  }

  /* 9 · Spheres */
  function initSnSpheres() {
    const S = SN().spheres, cx = 260, cy = 250;
    const svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "Spheres of life around the throne, with heaven's rule spreading outward" });
    [60, 120, 180].forEach((r, i) => svg.append(sv("circle", { cx, cy, r, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "ripple-ring", style: { animationDelay: i * 1 + "s" } })));
    svg.append(sv("circle", { cx, cy, r: 50, fill: "var(--accent)", "fill-opacity": .2 }), txt(cx, cy - 4, "Thy kingdom", { "font-size": 12.5 }), txt(cx, cy + 12, "come", { "font-size": 12.5, fill: "var(--accent)" }));
    const cols = ["var(--eden)", "var(--accent)", "var(--babel)", "var(--flame)", "var(--accent)", "var(--eden)", "var(--babel)"];
    const gs = S.map((s, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / S.length, x = cx + Math.cos(a) * 190, y = cy + Math.sin(a) * 190;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.t }), () => sel(i));
      const w = s.t.split(" "), two = s.t.length > 10, half = Math.ceil(w.length / 2);
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 44, fill: "var(--surface)", stroke: cols[i], "stroke-width": 3 }), txt(x, y + (two ? -2 : 5), two ? w.slice(0, half).join(" ") : s.t, { "font-size": 11.5 }));
      if (two) g.append(txt(x, y + 12, w.slice(half).join(" "), { "font-size": 11.5 }));
      svg.append(g); return g;
    });
    $("#snSpheres").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const s = S[i]; info("#snSpherePanel", "Sphere of life", s.t, s.ref, s.d); }
    sel(0);
  }

  function initSnObjections() { objectionList("#snObjections", "#snObjFilter", SN().objections); studyGuide("#snQuestions", "#snMemory", SN().study, SN().memory); }

  /* ---------- Part VIII·d: seated in the heavenly places ---------- */
  function initWfSit() {
    const S = WF().seated, svg = sv("svg", { viewBox: "0 0 520 400", role: "img", "aria-label": "A believer seated with Christ in heavenly places, walking and standing on earth" });
    svg.append(sv("rect", { width: 520, height: 170, fill: "var(--accent)", "fill-opacity": .1, class: "lv lv0" }), sv("rect", { y: 230, width: 520, height: 170, fill: "var(--eden)", "fill-opacity": .1, class: "lv lv12" }),
      txt(16, 24, "IN THE HEAVENLY PLACES", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(16, 390, "ON EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".12em" }));
    const throne = (x, c, s) => sv("g", { transform: `translate(${x} 140) scale(${s})` }, sv("path", { d: "M-26 0 L-26 -50 Q-26 -60 -16 -60 L16 -60 Q26 -60 26 -50 L26 0 Z M-34 0 L34 0 L34 8 L-34 8 Z", fill: c, "fill-opacity": .8 }));
    svg.append(throne(220, "var(--accent)", 1.1), throne(310, "var(--accent)", .9), person(220, 118, 1.2, "var(--ink)"), sv("path", { d: "M210 76 l4 -10 l6 6 l6 -6 l4 10 Z", fill: "var(--accent)" }), person(310, 122, 1, "var(--eden)"),
      txt(220, 162, "Christ", { "font-size": 11 }), txt(310, 162, "you, in him", { "font-size": 11, fill: "var(--eden)" }));
    const beam = sv("path", { d: "M310 170 L310 300", stroke: "var(--accent)", "stroke-width": 4, "stroke-dasharray": "4 8", class: "lv lv12 dashmove" });
    const walker = sv("g", { class: "lv lv1 walker" }, person(0, 0, 1.3, "var(--eden)"));
    walker.setAttribute("transform", "translate(160 340)");
    const path = sv("path", { d: "M80 352 L440 352", stroke: "var(--eden)", "stroke-width": 3, "stroke-dasharray": "2 8", class: "lv lv1" });
    const stander = sv("g", { class: "lv lv2" }, person(310, 340, 1.5, "var(--eden)"), sv("rect", { x: 280, y: 300, width: 16, height: 40, rx: 6, fill: "var(--babel)" }), sv("path", { d: "M330 290 L330 340", stroke: "var(--ink)", "stroke-width": 3 }));
    const shot = [0, 1, 2].map(i => sv("path", { d: `M${440 + i * 10} ${296 + i * 18} l-26 4`, stroke: "var(--flame)", "stroke-width": 3, class: "lv lv2" }));
    svg.append(beam, path, walker, stander, ...shot);
    $("#wfSit").append(svg);
    const chips = S.map((s, i) => el("button", { class: "chip", type: "button", text: s.t, onclick: () => set(i) }));
    $("#wfSitChips").append(...chips);
    function set(i) {
      selectSet(chips, i); svg.dataset.s = i;
      $$(".lv", svg).forEach(n => { const k = n.getAttribute("class").match(/lv(\d+)/)[1]; n.classList.toggle("on", k.includes(String(i))); });
      const s = S[i]; info("#wfSitInfo", `Ephesians · ${i + 1} of 3`, s.t, s.ref, s.d, [el("p", { class: "use" }, el("b", { text: s.post }))]);
    }
    set(0);
  }

  function initWfTreasury() {
    const B = WF().blessings, cx = 260, cy = 260, n = B.length;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Treasury of every spiritual blessing in Ephesians 1, grouped by Father, Son and Spirit" });
    const gc = { Father: "var(--accent)", Son: "var(--flame)", Spirit: "var(--babel)" };
    const arc = (a0, a1, r) => `M${cx + Math.cos(a0) * r} ${cy + Math.sin(a0) * r} A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${cx + Math.cos(a1) * r} ${cy + Math.sin(a1) * r}`;
    const ang = i => -Math.PI / 2 + (i + .5) * 2 * Math.PI / n;
    [["Father", 0, 3], ["Son", 4, 8], ["Spirit", 9, 10]].forEach(([g, a, b]) => {
      const a0 = ang(a) - Math.PI / n + .03, a1 = ang(b) + Math.PI / n - .03;
      svg.append(sv("path", { d: arc(a0, a1, 236), fill: "none", stroke: gc[g], "stroke-width": 10, "stroke-linecap": "round", opacity: .5 }));
      const am = (a0 + a1) / 2; svg.append(txt(cx + Math.cos(am) * 214, cy + Math.sin(am) * 214 + 4, g === "Father" ? "the Father · vv. 3–6" : g === "Son" ? "the Son · vv. 7–12" : "the Spirit · vv. 13–14", { "font-size": 11, fill: gc[g] }));
    });
    const chest = sv("g", {}, sv("circle", { cx, cy, r: 70, fill: "var(--accent)", "fill-opacity": .14, class: "pulse" }), sv("rect", { x: cx - 40, y: cy - 16, width: 80, height: 46, rx: 6, fill: "var(--accent)" }), sv("path", { d: `M${cx - 40} ${cy - 16} Q${cx} ${cy - 50} ${cx + 40} ${cy - 16} Z`, fill: "var(--accent)", "fill-opacity": .75 }), sv("rect", { x: cx - 7, y: cy - 6, width: 14, height: 16, rx: 3, fill: "var(--surface)" }), txt(cx, cy + 52, "in Christ", { "font-size": 13 }));
    svg.append(chest);
    const gs = B.map((b, i) => {
      const a = ang(i), x = cx + Math.cos(a) * 160, y = cy + Math.sin(a) * 160;
      const g = hit(sv("g", { class: "fnode gem", tabindex: "0", role: "button", "aria-label": b.t, style: { animationDelay: i * .08 + "s" } }), () => sel(i));
      g.append(sv("line", { x1: cx + Math.cos(a) * 74, y1: cy + Math.sin(a) * 74, x2: x - Math.cos(a) * 24, y2: y - Math.sin(a) * 24, stroke: "var(--line)", "stroke-width": 1.5 }),
        sv("path", { class: "rbg", d: `M${x} ${y - 22} L${x + 20} ${y - 6} L${x + 12} ${y + 18} L${x - 12} ${y + 18} L${x - 20} ${y - 6} Z`, fill: "var(--surface)", stroke: gc[b.g], "stroke-width": 2.5 }), txt(x, y + 5, String(i + 1), { "font-size": 13, fill: gc[b.g] }));
      svg.append(g); return g;
    });
    $("#wfTreasury").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const b = B[i];
      $("#wfTreasuryPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: gc[b.g] }, text: `Blessing ${i + 1} of ${n} · from the ${b.g}` }), el("h3", { text: b.t }), el("span", { class: "ref", text: b.ref }), el("p", { class: "use" }, el("b", { text: "On earth this week: " }), b.now),
        el("div", { class: "htl-controls", style: { marginTop: "6px" } }, el("button", { class: "btn small", type: "button", text: "◂", "aria-label": "Previous blessing", onclick: () => sel((i + n - 1) % n) }), el("button", { class: "btn small", type: "button", text: "▸", "aria-label": "Next blessing", onclick: () => sel((i + 1) % n) })));
    }
    sel(0);
  }

  function initWfDual() {
    const D = WF().dual, n = D.length, W = 980, bw = (W - 40) / n;
    const svg = sv("svg", { viewBox: `0 0 ${W} 300`, role: "img", "aria-label": "Pairs of heavenly truths above and earthly experiences below", style: { minWidth: "760px" } });
    svg.append(sv("rect", { width: W, height: 120, fill: "var(--accent)", "fill-opacity": .08 }), sv("rect", { y: 180, width: W, height: 120, fill: "var(--eden)", "fill-opacity": .08 }),
      sv("line", { x1: 0, y1: 150, x2: W, y2: 150, stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "6 6" }), txt(W - 12, 144, "in Christ (position)", { "text-anchor": "end", "font-size": 11, fill: "var(--accent)" }), txt(W - 12, 166, "in the world (experience)", { "text-anchor": "end", "font-size": 11, fill: "var(--eden)" }));
    const wrap2 = (s, x, y, c) => { const w = s.split(" "), h = Math.ceil(w.length / 2), two = s.length > 14; return [txt(x, y - (two ? 7 : 0), two ? w.slice(0, h).join(" ") : s, { "font-size": 11.5, fill: c }), two ? txt(x, y + 8, w.slice(h).join(" "), { "font-size": 11.5, fill: c }) : null].filter(Boolean); };
    const pairs = D.map((d, i) => {
      const x = 20 + i * bw + bw / 2;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `${d[0]} and ${d[2]}` }), () => sel(i));
      g.append(sv("rect", { class: "rt", x: x - bw / 2 + 5, y: 26, width: bw - 10, height: 70, rx: 10, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 1.6 }), ...wrap2(d[0], x, 62, "var(--ink)"),
        sv("rect", { class: "rb", x: x - bw / 2 + 5, y: 204, width: bw - 10, height: 70, rx: 10, fill: "var(--surface)", stroke: "var(--eden)", "stroke-width": 1.6 }), ...wrap2(d[2], x, 240, "var(--ink)"),
        sv("path", { class: "beamd", d: `M${x} 98 L${x} 200`, stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round", pathLength: 1 }));
      svg.append(g); return g;
    });
    const host = $("#wfDual"); host.classList.add("scroll-x"); host.append(svg);
    function sel(i) {
      pairs.forEach((g, j) => g.classList.toggle("sel", j === i));
      const d = D[i];
      $("#wfDualPanel").replaceChildren(el("p", { class: "eyebrow", text: `Pair ${i + 1} of ${n}` }), el("div", { class: "dual-row" },
        el("div", { class: "dual up" }, el("small", { text: "Above: in Christ" }), el("b", { text: d[0] }), el("span", { class: "ref", text: d[1] })),
        el("div", { class: "dual-arrow", text: "↓" }),
        el("div", { class: "dual down" }, el("small", { text: "Below: in the world" }), el("b", { text: d[2] }), el("span", { class: "ref", text: d[3] }))), el("p", { class: "use", html: refify(d[4]) }));
    }
    sel(0);
  }

  function initWfHeirs() {
    const H = WF().heirs, svg = sv("svg", { viewBox: "0 0 520 440", role: "img", "aria-label": "Inheritance meter: the Spirit as down payment now, growing through mission, and the fullness to come" });
    const zones = [["now", "NOW · the down payment", 0, "var(--eden)"], ["growing", "GROWING · through mission", 1, "var(--babel)"], ["then", "THEN · the fullness", 2, "var(--accent)"]];
    const top = 40, zh = 120;
    zones.forEach(([k, t, i, c]) => svg.append(sv("rect", { x: 140, y: top + (2 - i) * zh, width: 360, height: zh - 6, rx: 12, fill: c, "fill-opacity": .08, stroke: c, "stroke-opacity": .4 }), txt(150, top + (2 - i) * zh + 18, t, { "text-anchor": "start", "font-size": 10.5, fill: c, "letter-spacing": ".1em" })));
    // meter
    svg.append(sv("rect", { x: 50, y: top, width: 46, height: zh * 3 - 6, rx: 23, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }));
    const fill = sv("rect", { x: 54, width: 38, rx: 19, fill: "var(--accent)", y: top + zh * 3 - 10, height: 0 });
    svg.append(fill, txt(73, top + zh * 3 + 18, "arrabōn", { "font-size": 11.5, "font-style": "italic", fill: "var(--accent)" }));
    const counts = { now: 0, growing: 0, then: 0 };
    const gs = H.map((h, i) => {
      const zi = { now: 0, growing: 1, then: 2 }[h.when], k = counts[h.when]++;
      const x = 232 + (k % 2) * 180, y = top + (2 - zi) * zh + 48 + Math.floor(k / 2) * 34;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": h.t }), () => sel(i));
      g.append(sv("rect", { class: "rbg", x: x - 86, y: y - 14, width: 172, height: 28, rx: 14, fill: "var(--surface)", stroke: zones[zi][3], "stroke-width": 2 }), txt(x, y + 4, h.t.length > 27 ? h.t.slice(0, 26) + "…" : h.t, { "font-size": 11 }));
      svg.append(g); return [g, zi];
    });
    $("#wfHeirs").append(svg);
    let cur = 0;
    function sel(i) {
      gs.forEach(([g], j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const h = H[i], zi = gs[i][1], target = (zi + .5) / 3 * (zh * 3 - 14);
      tween(cur, target, 700, v => { cur = v; fill.setAttribute("height", v); fill.setAttribute("y", top + zh * 3 - 10 - v); });
      info("#wfHeirsPanel", `Co-heirs · ${zones[zi][1].split(" · ")[0].toLowerCase()}`, h.t, h.ref, h.d);
    }
    sel(0);
  }

  /* ================ Part VIII·e: far above all, under his feet ================ */
  const FA = () => DATA.fa;

  function initFaAbove() {
    $("#faPower").append(...FA().power.map(p => el("div", { class: "card power-meter stg" }, el("p", { class: "eyebrow gk", text: p.w }), el("h3", { text: p.t }), el("div", { class: "meter" }, el("i", { style: { "--v": p.v + "%" } })), el("p", { text: p.d }))));
    const A = FA().above, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Christ seated far above five layers: rule, authority, power, dominion and every name" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "faGlow" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .6 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 220, cy: 70, r: 80, fill: "url(#faGlow)", class: "pulse" }),
      sv("path", { d: "M196 104 L196 64 Q196 52 208 52 L232 52 Q244 52 244 64 L244 104 Z M186 104 L254 104 L254 112 L186 112 Z", fill: "var(--accent)" }),
      sv("path", { d: "M206 52 L210 38 L216 46 L220 34 L224 46 L230 38 L234 52 Z", fill: "var(--accent)" }),
      person(300, 98, .9, "var(--eden)"), txt(318, 92, "the church,", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)" }), txt(318, 106, "in him", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)" }), txt(220, 132, "Christ, at the right hand", { "font-size": 11.5 }));
    // far above dimension arrow
    svg.append(sv("defs", {}, sv("marker", { id: "faArr", viewBox: "0 0 10 10", refX: 5, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))),
      sv("line", { x1: 440, y1: 74, x2: 440, y2: 196, stroke: "var(--accent)", "stroke-width": 2.5, "marker-start": "url(#faArr)", "marker-end": "url(#faArr)" }), txt(452, 130, "far", { "text-anchor": "start", "font-size": 12, fill: "var(--accent)" }), txt(452, 146, "above", { "text-anchor": "start", "font-size": 12, fill: "var(--accent)" }));
    const bands = A.map((a, i) => {
      const y = 206 + i * 50, w = 380 - i * 20, x = 220 - w / 2;
      const g = hit(sv("g", { class: "fnode fa-band", tabindex: "0", role: "button", "aria-label": a.t }), () => sel(i));
      g.append(sv("rect", { class: "rbg", x, y, width: w, height: 40, rx: 10, fill: "var(--flame)", "fill-opacity": .14 + i * .04, stroke: "var(--flame)", "stroke-opacity": .5 }), txt(x + 14, y + 25, a.t, { "text-anchor": "start", "font-size": 13 }), txt(x + w - 14, y + 25, a.gk, { "text-anchor": "end", "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    const ageLab = txt(220, 462, "this age", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic" });
    svg.append(ageLab);
    $("#faAbove").append(svg);
    let age = 0, cur = 0;
    const chips = ["This age", "The age to come"].map((t, i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { age = i; selectSet(chips, i); svg.classList.toggle("age2", i === 1); ageLab.textContent = i ? "the age to come: every power under his feet, God all in all" : "this age: powers still active, but already beneath him"; sel(cur); } }));
    $("#faAge").append(...chips); selectSet(chips, 0);
    function sel(i) {
      cur = i; bands.forEach((g, j) => g.classList.toggle("sel", j === i));
      const a = A[i];
      $("#faAbovePanel").replaceChildren(el("p", { class: "eyebrow", text: `Far above · ${i + 1} of ${A.length}` }), el("h3", { text: `${a.t} (${a.gk})` }), el("p", { html: refify(a.d) }),
        el("p", { class: "use", html: age ? "In the age to come every one of these is destroyed or subjected, and God is “all in all” (<span class=\"ref\">1 Cor 15:24–28</span>)." : "In this age they still operate, but from beneath his feet. You face them from a seat above them, not from a pit beneath them (<span class=\"ref\">Eph 2:6</span>)." }));
    }
    sel(0);
    $("#faAsc").append(photo("ascension"));
  }

  function initFaBody() {
    const H = FA().headFeet, svg = sv("svg", { viewBox: "0 0 520 480", role: "img", "aria-label": "Christ the head in heaven, the church his body on earth, and enemies brought under the feet" });
    svg.append(sv("rect", { width: 520, height: 130, fill: "var(--accent)", "fill-opacity": .1 }), sv("rect", { y: 400, width: 520, height: 80, fill: "var(--eden)", "fill-opacity": .12 }),
      txt(16, 22, "HEAVEN", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".14em" }), txt(16, 470, "EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".14em" }));
    const head = sv("g", { class: "hb hb-head" }, sv("circle", { cx: 260, cy: 72, r: 52, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), sv("circle", { cx: 260, cy: 76, r: 36, fill: "var(--accent)" }), sv("path", { d: "M238 44 L236 26 L248 34 L260 20 L272 34 L284 26 L282 44 Z", fill: "var(--accent)" }));
    const body = sv("g", { class: "hb hb-body" }, sv("path", { d: "M222 120 Q260 108 298 120 L312 300 Q260 316 208 300 Z", fill: "var(--babel)", "fill-opacity": .55 }), sv("path", { d: "M222 130 L170 250 M298 130 L350 250", stroke: "var(--babel)", "stroke-opacity": .55, "stroke-width": 22, "stroke-linecap": "round" }),
      ...[[240, 170], [270, 190], [250, 220], [280, 240], [235, 260], [262, 280]].map(([x, y]) => person(x, y, .6, "var(--eden)")), txt(370, 190, "the church,", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }), txt(370, 206, "his body", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }));
    const legs = sv("g", { class: "hb hb-feet" }, sv("path", { d: "M236 300 L224 404 M284 300 L296 404", stroke: "var(--babel)", "stroke-opacity": .55, "stroke-width": 26, "stroke-linecap": "round" }), sv("path", { d: "M200 404 h44 v14 h-50 Z M276 404 h44 l6 14 h-50 Z", fill: "var(--babel)" }), txt(370, 380, "the feet are", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }), txt(370, 396, "in the body", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }));
    svg.append(sv("path", { d: "M260 112 L260 124", stroke: "var(--accent)", "stroke-width": 6 }), body, legs, head);
    const foes = ["sin", "fear", "lies", "powers", "curse", "death"].map((n, i) => {
      const x = i < 3 ? 50 + i * 40 : 360 + (i - 3) * 50, y = 440 - (i % 2) * 14;
      const g = sv("g", { class: "foe" }, sv("circle", { cx: x, cy: y - 8, r: 14, fill: "var(--flame)", "fill-opacity": .6 }), txt(x, y + 18, n, { "font-size": 10, fill: "var(--flame)" }));
      g.dataset.tx = 230 + i * 12 - x; g.dataset.ty = 462 - y;
      svg.append(g); return g;
    });
    $("#faBody").append(svg);
    const chips = H.map((h, i) => el("button", { class: "chip", type: "button", text: ["Head", "Body", "Feet", "Under"][i], onclick: () => sel(i) }));
    $("#faBodyChips").append(...chips);
    function sel(i) {
      selectSet(chips, i); svg.dataset.part = H[i].id;
      const h = H[i]; $("#faBodyPanel").replaceChildren(el("h3", { text: h.t }), el("span", { class: "ref", text: h.ref }), el("p", { html: refify(h.d) }));
    }
    sel(2);
    $("#faBodyGo").addEventListener("click", async () => {
      foes.forEach(f => { f.style.transform = ""; f.classList.remove("down"); });
      await sleep(80); sel(3);
      for (const f of foes) { await sleep(300); f.style.transform = `translate(${f.dataset.tx}px, ${f.dataset.ty}px) scale(.6)`; f.classList.add("down"); }
    });
  }

  function initFaUntil() {
    const U = FA().until, svg = sv("svg", { viewBox: "0 0 900 210", role: "img", "aria-label": "Psalm 110:1 as a timeline: sit, until, footstool, the last enemy", style: { minWidth: "720px" } });
    const xs = [110, 340, 570, 800];
    svg.append(sv("line", { x1: 60, y1: 120, x2: 850, y2: 120, stroke: "var(--line)", "stroke-width": 10, "stroke-linecap": "round" }));
    const fill = sv("line", { x1: 60, y1: 120, x2: 60, y2: 120, stroke: "var(--accent)", "stroke-width": 10, "stroke-linecap": "round" });
    svg.append(fill);
    const icons = [
      sv("path", { d: "M-18 18 V-12 Q-18 -20 -10 -20 H10 Q18 -20 18 -12 V18 Z M-24 18 H24 V24 H-24 Z", fill: "var(--accent)" }),
      sv("path", { d: "M-14 -22 H14 M-14 22 H14 M-12 -22 Q-12 0 0 0 Q12 0 12 -22 M-12 22 Q-12 0 0 0 Q12 0 12 22", stroke: "var(--babel)", "stroke-width": 3, fill: "none" }),
      sv("path", { d: "M-26 8 H26 V16 H-26 Z M-20 16 V26 M20 16 V26 M-12 -10 l8 -12 l8 12 Z M4 -6 l8 -12 l8 12 Z", fill: "var(--eden)", stroke: "var(--eden)", "stroke-width": 3 }),
      sv("path", { d: "M-16 22 V0 A16 16 0 0 1 16 0 V22 Z M-28 -24 L28 24", fill: "var(--muted)", stroke: "var(--flame)", "stroke-width": 4 })
    ];
    const nodes = U.map((u, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": u.t }), () => set(i));
      const ic = icons[i]; ic.setAttribute("transform", `translate(${xs[i]} 58)`);
      g.append(sv("circle", { class: "rbg", cx: xs[i], cy: 120, r: 16, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), ic, txt(xs[i], 166, u.t, { "font-size": 13 }), txt(xs[i], 186, u.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#faUntil").append(svg);
    const r = $("#faUntilRange");
    let cur = 60;
    function set(i) {
      r.value = i;
      nodes.forEach((g, j) => $(".rbg", g).setAttribute("fill", j <= i ? "var(--accent)" : "var(--surface)"));
      tween(cur, xs[i], 600, v => { cur = v; fill.setAttribute("x2", v); });
      const u = U[i]; info("#faUntilPanel", `Psalm 110:1 · ${i + 1} of 4`, u.t, u.ref, u.d);
    }
    r.addEventListener("input", () => set(+r.value));
    set(0);
  }

  function initFaEnemies() {
    const E = FA().enemies;
    const stool = sv("svg", { viewBox: "0 0 520 190", role: "img", "aria-label": "A footstool beneath the feet; subdued enemies are placed under it" });
    stool.append(sv("path", { d: "M150 60 h60 v18 h-66 Z M310 60 h60 l6 18 h-66 Z", fill: "var(--babel)" }), sv("rect", { x: 120, y: 80, width: 280, height: 22, rx: 6, fill: "var(--accent)" }), sv("path", { d: "M140 102 v40 M380 102 v40", stroke: "var(--accent)", "stroke-width": 8 }), txt(260, 30, "“until I make your enemies your footstool”", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    const pile = sv("g", {}); stool.append(pile, sv("text", { x: 260, y: 180, "text-anchor": "middle", "font-size": 11.5, "font-weight": 700, fill: "var(--muted)", id: "faCount" }, "0 of 11 subdued"));
    $("#faStool").append(stool);
    const done = new Set();
    const tiles = E.map((e, i) => {
      const b = el("button", { class: "etile" + (e.id === "death" ? " last" : ""), type: "button", "aria-pressed": "false", onclick: () => sel(i) },
        sv("svg", { viewBox: "-16 -16 32 32", "aria-hidden": "true" }, sv("path", { d: e.icon, fill: "none", stroke: "currentColor", "stroke-width": 2.5, "stroke-linecap": "round", "stroke-linejoin": "round" })), el("span", { text: e.n }));
      $("#faEnemies").append(b); return b;
    });
    function subdue(i) {
      if (done.has(i)) return; done.add(i);
      const k = done.size - 1, x = 160 + (k % 6) * 40, y = 120 + Math.floor(k / 6) * 26;
      const g = sv("g", { class: "subdued" }, sv("circle", { cx: x, cy: y, r: 11, fill: E[i].id === "death" ? "var(--ink)" : "var(--flame)", "fill-opacity": .7 }), sv("path", { d: E[i].icon, transform: `translate(${x} ${y}) scale(.55)`, fill: "none", stroke: "var(--surface)", "stroke-width": 3 }));
      pile.append(g); tiles[i].classList.add("done");
      $("#faCount", stool).textContent = done.size === E.length ? "Every enemy under his feet: God is all in all" : `${done.size} of ${E.length} subdued`;
      if (done.size === E.length && window.__burst) { const r = stool.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + 60); }
    }
    function sel(i) {
      selectSet(tiles, i);
      const e = E[i];
      $("#faEnemyPanel").replaceChildren(el("p", { class: "eyebrow", text: e.id === "death" ? "The last enemy" : `Enemy ${i + 1} of ${E.length}` }), el("h3", { text: e.n }),
        el("div", { class: "estages" },
          el("div", { class: "es s1" }, el("small", { text: "① Defeated at the cross" }), el("p", { html: refify(e.defeated) })),
          el("div", { class: "es s2" }, el("small", { text: "② Being subdued through the body" }), el("p", { html: refify(e.body) })),
          el("div", { class: "es s3" }, el("small", { text: "③ Destroyed at the end" }), el("p", { html: refify(e.end) }))),
        el("button", { class: "btn primary small", type: "button", text: done.has(i) ? "Under his feet ✓" : "Subdue: put it under his feet ▸", onclick: ev => { subdue(i); ev.target.textContent = "Under his feet ✓"; } }));
    }
    sel(0);
  }

  function initFaDeath() {
    const D = FA().death, W = 1000, n = D.length;
    const svg = sv("svg", { viewBox: `0 0 ${W} 220`, role: "img", "aria-label": "Timeline of death from Genesis to Revelation", style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "faDG", gradientUnits: "userSpaceOnUse", x1: 40, y1: 0, x2: W - 40, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--ink)" }), sv("stop", { offset: .5, "stop-color": "var(--flame)" }), sv("stop", { offset: .68, "stop-color": "var(--accent)" }), sv("stop", { offset: 1, "stop-color": "var(--eden)" }))),
      sv("path", { class: "draw", d: `M40 110 L${W - 40} 110`, stroke: "url(#faDG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = D.map((_, i) => 60 + i * (W - 120) / (n - 1));
    const gs = D.map((d, i) => {
      const x = xs[i], up = i % 2 === 0, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": d.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: 110, r: i === 5 ? 18 : 12, fill: "var(--surface)", stroke: i < 4 ? "var(--flame)" : i === 5 ? "var(--accent)" : "var(--eden)", "stroke-width": 4 }));
      if (i === 5) g.append(sv("circle", { cx: x, cy: 110, r: 28, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }));
      const w = d.t.split(" "), h = Math.ceil(w.length / 2), two = d.t.length > 16, ly = up ? 58 : 166;
      g.append(sv("line", { x1: x, y1: up ? 70 : 126, x2: x, y2: up ? 96 : 150, stroke: "var(--line)", "stroke-width": 2 }), txt(x, ly - (two ? 8 : 0), two ? w.slice(0, h).join(" ") : d.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, w.slice(h).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), d.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#faDeath").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const d = D[i]; info("#faDeathPanel", `The last enemy · ${i + 1} of ${n}`, d.t, d.ref, d.d); }
    sel(5);
    // swallowed up
    const sw = sv("svg", { viewBox: "0 0 420 220", role: "img", "aria-label": "Death swallowed up in victory" });
    const deathG = sv("g", { class: "sw-death" }, sv("rect", { x: 120, y: 80, width: 180, height: 60, rx: 10, fill: "var(--ink)", "fill-opacity": .8 }), txt(210, 118, "DEATH", { "font-size": 22, fill: "var(--surface)", "letter-spacing": ".2em" }));
    const sting = sv("path", { class: "sw-sting", d: "M300 110 q30 -10 40 -40 l6 10 l-12 2", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round" });
    const vic = sv("circle", { class: "sw-vic", cx: 210, cy: 110, r: 0, fill: "var(--accent)" });
    const vt = txt(210, 118, "VICTORY", { "font-size": 22, fill: "var(--accent-ink)", "letter-spacing": ".2em", class: "sw-vt", opacity: 0 });
    sw.append(deathG, sting, vic, vt, txt(210, 206, "“Death is swallowed up in victory” · 1 Cor 15:54", { "font-size": 11.5, "font-style": "italic", fill: "var(--muted)" }));
    $("#faSwallow").append(sw);
    $("#faSwallowGo").addEventListener("click", async () => {
      sw.classList.remove("go"); vic.setAttribute("r", 0); vt.setAttribute("opacity", 0);
      await sleep(60); sw.classList.add("go");
      await sleep(700); tween(0, 120, 900, v => vic.setAttribute("r", v));
      await sleep(900); vt.setAttribute("opacity", 1);
      if (window.__burst && !reduceMotion) { const r = sw.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + r.height / 2); }
    });
    $("#faDeathDo").append(...FA().deathDo.map(([t, ref, d], i) => el("div", { class: "card stg dd-card" }, el("span", { class: "errn ok", text: String(i + 1) }), el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { text: d }))));
  }

  function initFaDaily() {
    const D = FA().daily;
    const cards = D.map(d => {
      const b = el("button", { class: "flipcard", type: "button", "aria-pressed": "false", "aria-label": `${d.s}: flip to living from above` },
        el("div", { class: "fc-inner" }, el("div", { class: "fc-face fc-under" }, el("small", { text: "Living under" }), el("b", { text: d.s }), el("p", { text: d.under })),
          el("div", { class: "fc-face fc-above" }, el("small", { text: "Living from above" }), el("b", { text: d.s }), el("p", { html: refify(d.above) }))));
      b.addEventListener("click", () => flip(b, !b.classList.contains("flipped")));
      $("#faDaily").append(b); return b;
    });
    function flip(b, on) { b.classList.toggle("flipped", on); b.setAttribute("aria-pressed", String(on)); }
    const chips = [["Living under", false], ["Living from above", true]].map(([t, on], i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { selectSet(chips, i); cards.forEach((c, k) => setTimeout(() => flip(c, on), reduceMotion ? 0 : k * 90)); } }));
    $("#faDailyToggle").append(...chips); selectSet(chips, 0);
  }

  function initFaAssign() {
    const A = FA().assign, n = A.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 250`, role: "img", "aria-label": "Seven steps of the body's assignment along a path", style: { minWidth: "760px" } });
    const pts = A.map((_, i) => [70 + i * (W - 140) / (n - 1), i % 2 ? 160 : 90]);
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
    svg.append(sv("path", { d, fill: "none", stroke: "var(--line)", "stroke-width": 8, "stroke-linejoin": "round" }), sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "3 9", class: "flow" }));
    if (!reduceMotion) { const dot = sv("circle", { r: 8, fill: "var(--accent)" }); dot.append(sv("animateMotion", { dur: "10s", repeatCount: "indefinite", path: d })); svg.append(dot); }
    const gs = A.map((a, i) => {
      const [x, y] = pts[i], g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": a.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 22, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), txt(x, y + 5, String(i + 1), { "font-size": 14, fill: "var(--accent)" }));
      const w = a.t.split(" "), h = Math.ceil(w.length / 2), ty = i % 2 ? y + 46 : y - 38;
      g.append(txt(x, ty, w.slice(0, h).join(" "), { "font-size": 12.5 }), txt(x, ty + 15, w.slice(h).join(" "), { "font-size": 12.5 }));
      svg.append(g); return g;
    });
    svg.append(txt(W / 2, 244, "“Rule in the midst of your enemies! Your people will offer themselves freely” · Ps 110:2–3", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    $("#faAssign").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const a = A[i]; info("#faAssignPanel", `The body’s assignment · ${i + 1} of ${n}`, a.t, a.ref, a.d); }
    sel(0);
  }

  /* ================ Part X: renewing the mind ================ */
  const MN = () => DATA.mn;
  const wrapText = (s, n) => { const out = []; let line = ""; s.split(" ").forEach(w => { if ((line + " " + w).trim().length > n) { out.push(line.trim()); line = w; } else line += " " + w; }); if (line.trim()) out.push(line.trim()); return out; };

  /* 1 · Romans 12:2 + metamorphosis */
  function initMnRom() {
    const W = MN().words;
    const svg = sv("svg", { viewBox: "0 0 520 300", role: "img", "aria-label": "Conformed: pressed into a mould from outside. Transformed: a caterpillar changing into a butterfly from within" });
    // conformed: mould pressing a shape
    const conf = sv("g", { class: "mm-conf" },
      sv("g", { class: "mould" }, sv("rect", { x: 170, y: 30, width: 180, height: 70, rx: 6, fill: "var(--muted)", "fill-opacity": .55 }), sv("rect", { x: 210, y: 100, width: 100, height: 40, fill: "var(--muted)", "fill-opacity": .4 }), txt(260, 72, "THIS AGE", { "font-size": 14, fill: "var(--surface)", "letter-spacing": ".2em" })),
      sv("path", { class: "blob", d: "M200 250 Q190 180 260 172 Q330 180 320 250 Z", fill: "var(--babel)", "fill-opacity": .7 }),
      sv("rect", { x: 120, y: 250, width: 280, height: 10, rx: 4, fill: "var(--line)" }),
      txt(260, 286, "pressed from the outside: same shape as everyone else", { "font-size": 12, fill: "var(--muted)" }));
    // transformed: caterpillar → chrysalis → butterfly
    const branch = sv("path", { d: "M60 60 Q260 40 470 70", stroke: "#6b4a2b", "stroke-width": 6, fill: "none", "stroke-linecap": "round" });
    const cat = sv("g", { class: "mt-s0" }, ...[0, 1, 2, 3, 4, 5].map(i => sv("circle", { cx: 80 + i * 16, cy: 200 - Math.abs(i - 2.5) * 3, r: 10, fill: "var(--eden)" })), sv("circle", { cx: 166, cy: 192, r: 3, fill: "var(--ink)" }), txt(120, 236, "caterpillar", { "font-size": 11.5, fill: "var(--muted)" }));
    const chrys = sv("g", { class: "mt-s1" }, sv("line", { x1: 260, y1: 52, x2: 260, y2: 80, stroke: "#6b4a2b", "stroke-width": 2 }), sv("path", { d: "M260 80 Q286 120 270 170 Q260 186 250 170 Q234 120 260 80 Z", fill: "var(--accent)", "fill-opacity": .75 }), sv("circle", { cx: 260, cy: 130, r: 24, fill: "var(--accent)", "fill-opacity": .25, class: "pulse" }), txt(260, 204, "renewal within", { "font-size": 11.5, fill: "var(--accent)" }));
    const bfly = sv("g", { class: "mt-s2" }, sv("g", { class: "wings" },
      sv("path", { d: "M380 150 Q330 90 340 140 Q330 180 380 160 Z", fill: "var(--flame)", "fill-opacity": .8 }), sv("path", { d: "M380 150 Q430 90 420 140 Q430 180 380 160 Z", fill: "var(--accent)", "fill-opacity": .85 }),
      sv("path", { d: "M380 160 Q345 200 360 210 Q375 200 380 165 Z", fill: "var(--babel)", "fill-opacity": .8 }), sv("path", { d: "M380 160 Q415 200 400 210 Q385 200 380 165 Z", fill: "var(--eden)", "fill-opacity": .8 })),
      sv("rect", { x: 377, y: 140, width: 6, height: 50, rx: 3, fill: "var(--ink)" }), txt(380, 236, "transformed", { "font-size": 11.5, fill: "var(--eden)" }));
    const trans = sv("g", { class: "mm-trans" }, branch, cat, chrys, bfly, txt(260, 286, "changed from within: metamorphoō", { "font-size": 12, fill: "var(--muted)" }));
    svg.append(conf, trans);
    $("#mnMeta").append(svg);
    let timer = null, stage = 2;
    function setStage(s) { stage = s; svg.dataset.stage = s; }
    function mode(m) {
      svg.dataset.mode = m; selectSet(chips, m === "out" ? 0 : 1); clearInterval(timer);
      if (m === "in") { if (reduceMotion) return setStage(2); setStage(0); timer = setInterval(() => setStage((stage + 1) % 3), 1600); }
    }
    const chips = [["out", "Conformed: outside in"], ["in", "Transformed: inside out"]].map(([k, t]) => el("button", { class: "chip", type: "button", text: t, onclick: () => mode(k) }));
    $("#mnModes").append(...chips);
    const btns = W.map((w, i) => { const b = el("button", { class: "vw " + (w.dir === "out" ? "vw-out" : "vw-in"), type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("b", { text: w.t }), el("small", { text: w.w })); $("#mnWords").append(b); return b; });
    function sel(i) {
      selectSet(btns, i); const w = W[i];
      $("#mnWordPanel").replaceChildren(el("p", { class: "eyebrow", text: `Romans 12:2 · word ${i + 1} of ${W.length}` }), el("p", { class: "big-word", text: w.gk }), el("h3", { text: `${w.t} (${w.w})` }), el("p", { html: refify(w.d) }));
      mode(w.dir);
    }
    sel(2);
  }

  function initMnVocab() {
    $("#mnVocab").append(...MN().vocab.map(v => el("div", { class: "card word-card stg" }, el("p", { class: "eyebrow", text: v.lang }), el("p", { class: "big-word" + (v.lang === "Hebrew" ? " heb-tr" : ""), text: v.w }), el("h3", { text: v.t }), el("p", { html: refify(v.d) }))));
  }

  function initMnPath() {
    const wide = { seed: 420, image: 560 };
    const nodes = MN().path.map(n => ({ ...n, w: wide[n.id] || 380 }));
    flowchart($("#mnPath"), nodes, MN().pathEdges, { id: "mnp", w: 900, h: 540, nodeW: 380, fs: 14, refsInline: true, label: "Flowchart: a thought leading either to death through the flesh or to life and peace through the Spirit", start: "seed",
      annotate: [{ x: 120, y: 470, t: "death", anchor: "middle" }, { x: 780, y: 470, t: "life and peace", anchor: "middle" }], onSelect: n => panelFill("#mnPathPanel", "How a thought becomes a life", n) });
  }

  /* 4 · taking thoughts captive */
  function initMnCaptive() {
    const C = MN().captive, n = C.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 260`, role: "img", "aria-label": "A thought walked through six steps until it is replaced by truth", style: { minWidth: "760px" } });
    const xs = C.map((_, i) => 90 + i * (W - 180) / (n - 1));
    svg.append(sv("line", { x1: 60, y1: 200, x2: W - 60, y2: 200, stroke: "var(--line)", "stroke-width": 6, "stroke-linecap": "round" }));
    const icons = [
      sv("path", { d: "M-16 0 Q0 -14 16 0 Q0 14 -16 0 Z M0 -5 A5 5 0 1 0 0.1 -5", fill: "none", stroke: "var(--babel)", "stroke-width": 2.5 }),
      sv("path", { d: "M-14 -8 H14 M0 -14 V10 M-14 -8 L-18 4 H-10 Z M14 -8 L10 4 H18 Z M-8 12 H8", fill: "none", stroke: "var(--babel)", "stroke-width": 2.5 }),
      sv("path", { d: "M-12 -12 V12 M-4 -12 V12 M4 -12 V12 M12 -12 V12 M-16 -12 H16", fill: "none", stroke: "var(--ink)", "stroke-width": 3 }),
      sv("path", { d: "M-3 -14 h6 v8 h8 v6 h-8 v14 h-6 v-14 h-8 v-6 h8 Z", fill: "var(--accent)" }),
      sv("path", { d: "M-12 -4 L-4 4 L12 -12", fill: "none", stroke: "var(--eden)", "stroke-width": 4, "stroke-linecap": "round" }),
      sv("path", { d: "M-14 6 Q-14 -10 0 -10 Q14 -10 14 6 M-8 6 Q-8 -4 0 -4 Q8 -4 8 6", fill: "none", stroke: "var(--eden)", "stroke-width": 2.5 })
    ];
    const marks = C.map((c, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }), () => go(i));
      const ic = icons[i]; ic.setAttribute("transform", `translate(${xs[i]} 200)`);
      g.append(sv("circle", { class: "rbg", cx: xs[i], cy: 200, r: 24, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2.5 }), ic, txt(xs[i], 246, `${i + 1}. ${c.t}`, { "font-size": 12.5 }));
      svg.append(g); return g;
    });
    const bub = sv("g", { class: "cap-bub" });
    const bubBg = sv("rect", { x: -110, y: -30, width: 220, height: 60, rx: 30, fill: "var(--flame)", "fill-opacity": .16, stroke: "var(--flame)", "stroke-width": 2 });
    const bubT = txt(0, 5, "“I’ll always be like this.”", { "font-size": 13, fill: "var(--flame)" });
    const bars = sv("g", { class: "cap-bars", opacity: 0 }, ...[-80, -48, -16, 16, 48, 80].map(x => sv("line", { x1: x, y1: -38, x2: x, y2: 38, stroke: "var(--ink)", "stroke-width": 4 })), sv("line", { x1: -96, y1: -38, x2: 96, y2: -38, stroke: "var(--ink)", "stroke-width": 4 }));
    const echo = sv("g", { class: "cap-echo", opacity: 0 }, ...[1, 2, 3].map(k => sv("rect", { x: -110 - k * 10, y: -30 - k * 8, width: 220 + k * 20, height: 60 + k * 16, rx: 40, fill: "none", stroke: "var(--eden)", "stroke-opacity": .5 / k, "stroke-width": 2 })));
    bub.append(echo, bubBg, bubT, bars);
    svg.append(bub);
    $("#mnCaptive").append(svg);
    let i = 0, x = xs[0];
    function go(k) {
      i = Math.max(0, Math.min(n - 1, k));
      marks.forEach((g, j) => $(".rbg", g).setAttribute("fill", j <= i ? "var(--glow)" : "var(--surface)"));
      tween(x, xs[i], 700, v => { x = Math.min(Math.max(v, 130), W - 130); bub.setAttribute("transform", `translate(${x} 100)`); });
      bars.setAttribute("opacity", i === 2 || i === 3 ? 1 : 0);
      const truth = i >= 4;
      bubT.textContent = truth ? "“I am being transformed.”" : "“I’ll always be like this.”";
      bubT.setAttribute("fill", truth ? "var(--eden)" : "var(--flame)");
      bubBg.setAttribute("fill", truth ? "var(--eden)" : "var(--flame)"); bubBg.setAttribute("stroke", truth ? "var(--eden)" : "var(--flame)");
      bub.setAttribute("opacity", i === 3 ? .55 : 1);
      echo.setAttribute("opacity", i === 5 ? 1 : 0);
      const c = C[i]; info("#mnCapPanel", `Step ${i + 1} of ${n}`, c.t, c.ref, c.d);
      $("#mnCapNext").textContent = i === n - 1 ? "Start again ▸" : "Next step ▸";
    }
    $("#mnCapNext").addEventListener("click", () => go(i === n - 1 ? 0 : i + 1));
    $("#mnCapPrev").addEventListener("click", () => go(i - 1));
    go(0);
  }

  /* 5 · lie → truth exchange */
  function initMnExchange() {
    const L = MN().lies;
    const svg = sv("svg", { viewBox: "0 0 520 220", role: "img", "aria-label": "A card with a lie cracks and falls; a card with the truth rises in its place" });
    const lieG = sv("g", { class: "lie-card" }), truthG = sv("g", { class: "truth-card" });
    svg.append(lieG, truthG);
    $("#mnSwap").append(svg);
    const card = (g, lines, c, label) => {
      g.replaceChildren(sv("rect", { x: 60, y: 40, width: 400, height: 140, rx: 16, fill: "var(--surface)", stroke: c, "stroke-width": 3 }), txt(260, 70, label, { "font-size": 11, fill: c, "letter-spacing": ".14em" }),
        ...lines.map((l, k) => txt(260, 108 + k * 22 - (lines.length - 1) * 11, l, { "font-size": 17, fill: "var(--ink)" })));
    };
    const btns = L.map((l, i) => { const b = el("button", { class: "lie-btn", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("span", { class: "lx", text: "✕" }), el("span", { text: l.lie })); $("#mnLies").append(b); return b; });
    function sel(i) {
      selectSet(btns, i); const l = L[i];
      card(lieG, wrapText(l.lie, 30), "var(--flame)", "THE LIE");
      lieG.append(sv("path", { class: "crack", d: "M250 40 L262 80 L248 110 L266 140 L256 180", fill: "none", stroke: "var(--flame)", "stroke-width": 3 }));
      card(truthG, wrapText(l.truth, 32), "var(--eden)", "THE TRUTH");
      svg.classList.remove("go"); void svg.getBoundingClientRect(); requestAnimationFrame(() => svg.classList.add("go"));
      const copy = el("button", { class: "btn small", type: "button", text: "Copy declaration", onclick: async () => { try { await navigator.clipboard.writeText(l.say + " (" + l.refs + ")"); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Select the text to copy"; } setTimeout(() => copy.textContent = "Copy declaration", 1800); } });
      $("#mnTruth").replaceChildren(el("p", { class: "eyebrow", text: "Exchange " + (i + 1) + " of " + L.length }), el("p", { class: "lie-line", html: `<s>${l.lie}</s>` }), el("p", { class: "muted small", text: "Common roots: " + l.root }), el("h3", { text: l.truth }), el("span", { class: "ref", text: l.refs }), el("blockquote", { class: "decl", text: l.say }), el("div", { class: "htl-controls", style: { marginTop: "4px" } }, copy));
    }
    sel(0);
  }

  /* 6 · means of renewal */
  function initMnMeans() {
    const M = MN().means, cx = 260, cy = 260, rad = 182;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Eight means God uses to renew the mind, around the mind of Christ" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "3 6" }));
    [50, 100, 150].forEach((r, i) => svg.append(sv("circle", { cx, cy, r, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "ripple-ring", style: { animationDelay: i + "s" } })));
    const gs = M.map((m, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / M.length, x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      svg.append(sv("line", { x1: x, y1: y, x2: cx, y2: cy, stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .5 }));
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": m.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 44, fill: "var(--surface)", stroke: "var(--babel)", "stroke-width": 2.5 }), sv("path", { d: m.icon, transform: `translate(${x} ${y - 10})`, fill: "none", stroke: "var(--babel)", "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round" }));
      const w = m.t.split(" "), two = m.t.length > 11, h = Math.ceil(w.length / 2);
      g.append(txt(x, y + 20, two ? w.slice(0, h).join(" ") : m.t, { "font-size": 10.5 })); if (two) g.append(txt(x, y + 31, w.slice(h).join(" "), { "font-size": 10.5 }));
      return g;
    });
    svg.append(...gs, sv("circle", { cx, cy, r: 58, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), txt(cx, cy - 6, "the mind", { "font-size": 13 }), txt(cx, cy + 12, "of Christ", { "font-size": 13, fill: "var(--accent)" }), txt(cx, cy + 30, "1 Cor 2:16", { "font-size": 10.5, "font-style": "italic", fill: "var(--muted)" }));
    $("#mnMeans").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const m = M[i]; info("#mnMeansPanel", `Means of renewal · ${i + 1} of ${M.length}`, m.t, m.ref, m.d); }
    sel(0);
  }

  /* 7 · Philippians 4:8 filter */
  function initMnFilter() {
    const F = MN().filters, T = MN().thoughts, W = 1000, xs = F.map((_, i) => 120 + i * 100);
    const svg = sv("svg", { viewBox: `0 0 ${W} 220`, role: "img", "aria-label": "A thought passing through eight gates: true, honourable, just, pure, lovely, commendable, excellent, praiseworthy", style: { minWidth: "760px" } });
    svg.append(sv("line", { x1: 40, y1: 110, x2: W - 40, y2: 110, stroke: "var(--line)", "stroke-width": 4, "stroke-dasharray": "4 8" }));
    const gates = F.map(([t, gk], i) => {
      const g = sv("g", { class: "gate" }, sv("rect", { class: "gbar", x: xs[i] - 8, y: 60, width: 16, height: 100, rx: 8, fill: "var(--line)" }), sv("text", { class: "gmark", x: xs[i], y: 48, "text-anchor": "middle", "font-size": 18, "font-weight": 800 }, ""),
        txt(xs[i], 182, t, { "font-size": 12 }), txt(xs[i], 198, gk, { "font-size": 10.5, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    const orb = sv("circle", { cx: 70, cy: 110, r: 18, fill: "var(--babel)", class: "orb" });
    const verdict = txt(W - 40, 22, "", { "text-anchor": "end", "font-size": 14 });
    svg.append(orb, verdict);
    $("#mnFilter").append(svg);
    let run = 0;
    const chips = T.map((t, i) => el("button", { class: "chip", type: "button", text: t.t, onclick: () => test(i) }));
    $("#mnThoughts").append(...chips);
    async function test(i) {
      selectSet(chips, i); const t = T[i], my = ++run;
      gates.forEach(g => { $(".gbar", g).setAttribute("fill", "var(--line)"); $(".gmark", g).textContent = ""; });
      orb.setAttribute("fill", "var(--babel)"); verdict.textContent = "";
      let x = 70; orb.setAttribute("cx", x);
      $("#mnFilterPanel").replaceChildren(el("p", { class: "eyebrow", text: "Testing a thought" }), el("h3", { text: t.t }));
      for (let k = 0; k < F.length; k++) {
        await new Promise(r => tween(x, xs[k], reduceMotion ? 0 : 320, v => { x = v; orb.setAttribute("cx", v); if (Math.abs(v - xs[k]) < .5) r(); }));
        if (my !== run) return;
        const bad = t.fail.includes(k);
        $(".gbar", gates[k]).setAttribute("fill", bad ? "var(--flame)" : "var(--eden)");
        const mk = $(".gmark", gates[k]); mk.textContent = bad ? "✕" : "✓"; mk.setAttribute("fill", bad ? "var(--flame)" : "var(--eden)");
        await sleep(120);
      }
      const ok = !t.fail.length;
      orb.setAttribute("fill", ok ? "var(--eden)" : "var(--flame)");
      tween(x, W - 70, 400, v => orb.setAttribute("cx", v));
      verdict.textContent = ok ? "Keep it: think about this" : `Fails ${t.fail.length} of 8: take it captive`;
      verdict.setAttribute("fill", ok ? "var(--eden)" : "var(--flame)");
      $("#mnFilterPanel").replaceChildren(el("p", { class: "eyebrow", text: ok ? "Passes every gate" : "Caught by the filter" }), el("h3", { text: t.t }), el("p", { html: refify(t.note) }));
      if (ok && window.__burst && !reduceMotion) { const r = svg.getBoundingClientRect(); window.__burst(r.right - 60, r.top + r.height / 2); }
    }
    test(0);
  }

  /* 8 · glory slider */
  function initMnGlory() {
    const G = MN().glory;
    const svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "A person beholding the glory of the Lord, unveiled, growing brighter degree by degree" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "mnG" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .9 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 420, cy: 150, r: 110, fill: "url(#mnG)", class: "pulse" }), sv("circle", { cx: 420, cy: 150, r: 40, fill: "var(--accent)" }), txt(420, 286, "the glory of the Lord", { "font-size": 12, fill: "var(--accent)" }), txt(420, 302, "in the face of Jesus Christ", { "font-size": 11, fill: "var(--muted)" }));
    const rays = sv("g", {}, ...[-40, -20, 0, 20, 40].map(dy => sv("line", { x1: 380, y1: 150 + dy * .4, x2: 160, y2: 140 + dy, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" })));
    const glow = sv("circle", { cx: 120, cy: 150, r: 40, fill: "var(--accent)", "fill-opacity": 0 });
    const body = sv("g", {}, sv("circle", { cx: 120, cy: 118, r: 22 }), sv("path", { d: "M90 250 L94 160 Q120 146 146 160 L150 250 Z" }));
    const veil = sv("g", { class: "veil" }, sv("path", { d: "M90 90 Q120 80 150 90 L156 170 Q120 182 84 170 Z", fill: "var(--muted)", "fill-opacity": .85 }), sv("path", { d: "M100 96 L98 168 M120 92 V176 M140 96 L142 168", stroke: "var(--surface)", "stroke-opacity": .4 }));
    const deg = txt(120, 300, "", { "font-size": 12.5 });
    svg.append(rays, glow, body, veil, deg);
    $("#mnGlory").append(svg);
    const r = $("#mnGloryRange");
    function set(i) {
      r.value = i; const k = i / 5;
      rays.setAttribute("opacity", i === 0 ? .08 : .2 + k * .8);
      glow.setAttribute("r", 40 + k * 70); glow.setAttribute("fill-opacity", i < 2 ? 0 : .12 + k * .35);
      body.style.fill = i < 2 ? "var(--muted)" : `color-mix(in srgb, var(--accent) ${Math.round(k * 100)}%, var(--muted))`;
      veil.classList.toggle("off", i >= 1);
      deg.textContent = i >= 4 ? "glory → glory → glory" : i >= 2 ? "beholding" : i === 1 ? "unveiled" : "veiled";
      const g = G[i]; info("#mnGloryInfo", `Degree ${i + 1} of ${G.length}`, g.t, g.ref, g.d);
    }
    r.addEventListener("input", () => set(+r.value));
    set(0);
    $("#mnTransfig").append(photo("transfig"));
  }

  /* 9 · orphan vs son */
  function initMnMindset() {
    const M = MN().mindset, box = $("#mnMindset");
    const rows = M.map(([area, orphan, son, ref], i) => {
      const row = el("button", { class: "ms-row", type: "button", style: { "--d": i * .06 + "s" } }, el("b", { class: "ms-area", text: area }),
        el("span", { class: "ms-flip" }, el("span", { class: "ms-face ms-orphan", text: orphan }), el("span", { class: "ms-face ms-son", text: son })), el("span", { class: "ref", text: ref }));
      row.addEventListener("click", () => row.classList.toggle("open"));
      box.append(row); return row;
    });
    const sw = el("button", { class: "switch", type: "button", role: "switch", "aria-checked": "false", "aria-label": "Switch from orphan to son mindset" }, el("span", { class: "sw-l", text: "Orphan" }), el("span", { class: "sw-knob" }), el("span", { class: "sw-r", text: "Son" }));
    sw.addEventListener("click", () => { const on = sw.getAttribute("aria-checked") !== "true"; sw.setAttribute("aria-checked", String(on)); box.classList.toggle("son", on); if (on && window.__burst && !reduceMotion) { const r = sw.getBoundingClientRect(); window.__burst(r.right, r.top); } });
    $("#mnSwitch").append(sw, el("span", { class: "muted small", text: "Galatians 4:7: “you are no longer a slave, but a son”" }));
    void rows;
  }

  /* 10 · daily renewal tracker */
  function initMnDaily() {
    const D = MN().daily, KEY = "hme-renew";
    let data = {}; try { data = JSON.parse(store.get(KEY) || "{}"); } catch (e) { data = {}; }
    const day = d => d.toISOString().slice(0, 10), today = day(new Date());
    const list = $("#mnChecklist");
    const head = el("div", { class: "rv-meta" }, el("span", { text: "Today" }), el("span", { id: "mnDayCount" }));
    list.append(el("p", { class: "eyebrow", text: new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) }), head);
    const boxes = D.map((d, i) => {
      const id = "mnChk" + i;
      const cb = el("input", { type: "checkbox", id });
      cb.checked = (data[today] || []).includes(i);
      cb.addEventListener("change", () => {
        const set = new Set(data[today] || []); cb.checked ? set.add(i) : set.delete(i); data[today] = [...set];
        store.set(KEY, JSON.stringify(data)); paint();
        if (set.size === D.length && window.__burst && !reduceMotion) { const r = cb.getBoundingClientRect(); window.__burst(r.left, r.top); }
      });
      list.append(el("label", { class: "chk", for: id }, cb, el("span", { class: "chk-box", "aria-hidden": "true" }), el("span", {}, el("b", { text: d.t }), el("small", { class: "ref", text: d.ref }))));
      return cb;
    });
    const svg = sv("svg", { viewBox: "0 0 520 240", role: "img", "aria-label": "Your renewal practice over the last seven days" });
    $("#mnWeek").append(svg);
    function paint() {
      $("#mnDayCount").textContent = `${(data[today] || []).length} of ${D.length}`;
      svg.replaceChildren(txt(260, 30, "Your last seven days", { "font-size": 13 }));
      let streak = 0, counting = true;
      for (let k = 6; k >= 0; k--) {
        const d = new Date(); d.setDate(d.getDate() - k); const key = day(d), n = (data[key] || []).length, p = n / D.length;
        const x = 50 + (6 - k) * 70, r = 24, c = 2 * Math.PI * r;
        svg.append(sv("circle", { cx: x, cy: 120, r, fill: "none", stroke: "var(--line)", "stroke-width": 7 }),
          sv("circle", { cx: x, cy: 120, r, fill: p >= 1 ? "var(--glow)" : "none", stroke: n ? "var(--eden)" : "none", "stroke-width": 7, "stroke-linecap": "round", "stroke-dasharray": `${c * p} ${c}`, transform: `rotate(-90 ${x} 120)` }),
          txt(x, 125, p >= 1 ? "✓" : String(n), { "font-size": 14, fill: p >= 1 ? "var(--eden)" : "var(--muted)" }),
          txt(x, 168, d.toLocaleDateString(undefined, { weekday: "short" }), { "font-size": 12, fill: k === 0 ? "var(--accent)" : "var(--muted)" }));
      }
      for (let k = 0; k < 365 && counting; k++) { const d = new Date(); d.setDate(d.getDate() - k); if ((data[day(d)] || []).length) streak++; else if (k > 0) counting = false; }
      svg.append(txt(260, 220, streak ? `${streak}-day streak: “day by day” (2 Cor 4:16)` : "Start today: “our inner self is being renewed day by day”", { "font-size": 13, fill: "var(--eden)" }));
    }
    paint(); void boxes;
  }

  function initMnObjections() { objectionList("#mnObjections", "#mnObjFilter", MN().objections); studyGuide("#mnQuestions", "#mnMemory", MN().study, MN().memory); }

  /* ================ Part VIII·d: heavenly places as the sanctuary ================ */
  const SC = () => DATA.sc;

  function initScPlan() {
    const Z = SC().zones;
    const svg = sv("svg", { viewBox: "0 0 640 360", role: "img", "aria-label": "Plan of the tabernacle: outside the camp, outer court, holy place behind the first veil, holy of holies behind the second veil", style: { minWidth: "520px" } });
    const zr = [[0, 40, 60, 280], [60, 40, 280, 280], [340, 110, 140, 140], [480, 110, 80, 140]];
    const zoneRects = zr.map(([x, y, w, h], i) => sv("rect", { class: "zr", x, y, width: w, height: h, fill: ["var(--muted)", "var(--eden)", "var(--accent)", "var(--babel)"][i], "fill-opacity": .06 }));
    svg.append(...zoneRects);
    svg.append(sv("rect", { x: 60, y: 40, width: 520, height: 280, fill: "none", stroke: "var(--ink)", "stroke-opacity": .5, "stroke-width": 2, "stroke-dasharray": "2 4" }),
      sv("rect", { x: 340, y: 110, width: 220, height: 140, fill: "var(--surface)", "fill-opacity": .6, stroke: "var(--ink)", "stroke-width": 2.5 }),
      txt(30, 30, "OUTSIDE", { "font-size": 10, fill: "var(--muted)", "letter-spacing": ".1em" }), txt(200, 30, "OUTER COURT", { "font-size": 10, fill: "var(--eden)", "letter-spacing": ".1em" }),
      txt(410, 100, "HOLY PLACE", { "font-size": 10, fill: "var(--accent)", "letter-spacing": ".1em" }), txt(520, 100, "HOLIEST", { "font-size": 10, fill: "var(--babel)", "letter-spacing": ".1em" }));
    // court furniture
    svg.append(sv("rect", { x: 130, y: 160, width: 40, height: 40, fill: "#b08a5a" }), txt(150, 218, "altar", { "font-size": 10, fill: "var(--muted)" }),
      sv("circle", { cx: 260, cy: 180, r: 14, fill: "var(--babel)", "fill-opacity": .5 }), txt(260, 210, "laver", { "font-size": 10, fill: "var(--muted)" }));
    // holy place furniture
    const menorah = sv("g", { class: "pf", "data-id": "menorah" }, sv("path", { d: "M380 152 v-22 M366 140 q14 14 28 0 M372 140 q8 8 16 0", stroke: "var(--accent)", "stroke-width": 2.5, fill: "none" }), ...[366, 372, 380, 388, 394].map(x => sv("circle", { cx: x, cy: 138, r: 2.4, fill: "var(--flame)", class: "flick" })), txt(380, 166, "lampstand", { "font-size": 9.5, fill: "var(--accent)" }));
    const table = sv("g", { class: "pf", "data-id": "bread" }, sv("rect", { x: 362, y: 206, width: 36, height: 18, rx: 2, fill: "var(--accent)", "fill-opacity": .7 }), ...[0, 1, 2, 3, 4, 5].map(k => sv("circle", { cx: 367 + k * 5.2, cy: 215, r: 2.3, fill: "var(--surface)" })), txt(380, 238, "table", { "font-size": 9.5, fill: "var(--accent)" }));
    const incense = sv("g", { class: "pf", "data-id": "incense" }, sv("rect", { x: 440, y: 172, width: 16, height: 16, fill: "var(--accent)" }), sv("path", { class: "smoke", d: "M448 170 q-6 -8 0 -14 q6 -6 0 -14", stroke: "var(--muted)", "stroke-width": 2, fill: "none" }), txt(448, 202, "incense", { "font-size": 9.5, fill: "var(--accent)" }));
    const ark = sv("g", {}, sv("rect", { x: 506, y: 170, width: 28, height: 20, fill: "var(--accent)" }), sv("path", { d: "M506 170 l6 -10 M534 170 l-6 -10", stroke: "var(--accent)", "stroke-width": 2 }), txt(520, 204, "ark", { "font-size": 9.5, fill: "var(--babel)" }));
    svg.append(menorah, table, incense, ark);
    // veils
    const veil1 = sv("g", { class: "veil1" }, sv("line", { x1: 340, y1: 112, x2: 340, y2: 248, stroke: "var(--babel)", "stroke-width": 6 }), txt(340, 268, "1st veil", { "font-size": 10, fill: "var(--babel)" }));
    const veil2 = sv("g", { class: "veil2" }, sv("line", { x1: 480, y1: 112, x2: 480, y2: 248, stroke: "var(--flame)", "stroke-width": 6 }), txt(480, 268, "2nd veil", { "font-size": 10, fill: "var(--flame)" }));
    svg.append(veil1, veil2);
    const block = sv("g", { class: "block-x", opacity: 0 }, sv("circle", { cx: 326, cy: 180, r: 12, fill: "var(--flame)" }), sv("path", { d: "M320 174 L332 186 M332 174 L320 186", stroke: "#fff", "stroke-width": 3 }));
    const forerunner = sv("g", { opacity: 0, class: "fore" }, sv("circle", { cx: 548, cy: 180, r: 16, fill: "var(--accent)", "fill-opacity": .3, class: "pulse" }), person(548, 194, .7, "var(--accent)"), txt(548, 132, "forerunner", { "font-size": 9.5, fill: "var(--accent)" }));
    const me = sv("g", { class: "me" }, sv("circle", { cx: 0, cy: -10, r: 16, fill: "var(--eden)", "fill-opacity": .25, class: "pulse" }), person(0, 4, .8, "var(--eden)"), txt(0, 26, "you", { "font-size": 10, fill: "var(--eden)" }));
    svg.append(block, forerunner, me);
    const others = sv("g", { class: "others" }, person(200, 270, .6, "var(--muted)"), txt(200, 290, "Israelite", { "font-size": 9, fill: "var(--muted)" }), person(420, 196, .55, "var(--ink)"), txt(420, 212, "priest", { "font-size": 9, fill: "var(--muted)" }));
    svg.append(others);
    $("#scPlan").append(svg);
    const pos = [[30, 190], [210, 190], [420, 190], [500, 190]];
    let cov = 0, zone = 0, cur = pos[0].slice();
    const chips = ["Old covenant", "In Christ"].map((t, i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { cov = i; selectSet(chips, i); svg.dataset.cov = i; set(zone); } }));
    $("#scCov").append(...chips); selectSet(chips, 0); svg.dataset.cov = 0;
    const r = $("#scRange");
    function set(i) {
      zone = i; r.value = i;
      const reach = cov === 0 ? Math.min(i, 1) : Math.min(i, 3);
      const [tx, ty] = reach === 3 ? [492, 190] : pos[reach];
      const from = cur.slice();
      tween(0, 1, 700, k => { cur = [from[0] + (tx - from[0]) * k, from[1] + (ty - from[1]) * k]; me.setAttribute("transform", `translate(${cur[0]} ${cur[1]})`); });
      zoneRects.forEach((z, j) => z.setAttribute("fill-opacity", j === i ? .22 : .06));
      const host = $("#scPlan"); if (host.scrollWidth > host.clientWidth + 4) { const w = svg.getBoundingClientRect().width; host.scrollTo({ left: Math.max(0, tx / 640 * w - host.clientWidth / 2), behavior: reduceMotion ? "auto" : "smooth" }); }
      block.setAttribute("opacity", cov === 0 && i >= 2 ? 1 : 0);
      forerunner.setAttribute("opacity", cov === 1 && i === 3 ? 1 : 0);
      const z = Z[i];
      const status = cov === 0
        ? (i <= 1 ? (i === 0 ? "Under the old covenant you are outside, far off." : "Under the old covenant this is as far as you may come.") : `Under the old covenant you may not enter: this belonged to ${z.who.toLowerCase()}.`)
        : (i === 3 ? "In Christ the way has been opened, and he has gone in ahead of us." : i === 2 ? "In Christ you stand here as a priest." : i === 1 ? "In Christ you are brought further in." : "In Christ you are no longer left here.");
      $("#scZoneInfo").replaceChildren(el("p", { class: "eyebrow", text: `${cov ? "In Christ" : "Old covenant"} · zone ${i + 1} of 4` }), el("h3", { text: z.t }), el("span", { class: "ref", text: z.ref }),
        el("p", { class: "use" }, el("b", { text: status })), el("p", { html: refify(z.d) }), el("p", { class: "muted small", html: refify("Who: " + z.who) }), cov ? el("p", { html: refify(z.eph) }) : null);
    }
    r.addEventListener("input", () => set(+r.value));
    me.setAttribute("transform", `translate(${cur[0]} ${cur[1]})`);
    set(0);
  }

  function furnPic(id) {
    const s = sv("svg", { viewBox: "0 0 160 120", class: "fpic", "aria-hidden": "true" });
    if (id === "menorah") {
      s.append(sv("circle", { cx: 80, cy: 50, r: 46, fill: "var(--accent)", "fill-opacity": .12, class: "pulse" }), sv("path", { d: "M80 104 V44 M50 44 Q50 76 80 76 Q110 76 110 44 M60 44 Q60 66 80 66 Q100 66 100 44 M70 44 Q70 56 80 56 Q90 56 90 44 M64 104 H96", stroke: "var(--accent)", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }),
        ...[50, 60, 70, 80, 90, 100, 110].map((x, i) => sv("path", { class: "flame", d: `M${x} 40 q-5 -8 0 -16 q5 8 0 16 Z`, fill: "var(--flame)", style: { animationDelay: i * .13 + "s" } })));
    }
    if (id === "bread") {
      s.append(sv("rect", { x: 26, y: 70, width: 108, height: 10, rx: 3, fill: "var(--accent)" }), sv("path", { d: "M36 80 V108 M124 80 V108", stroke: "var(--accent)", "stroke-width": 5 }),
        ...[0, 1, 2, 3, 4, 5].flatMap(k => [sv("ellipse", { class: "loaf", cx: 54, cy: 64 - k * 9, rx: 18, ry: 5, fill: "#c99a5b", style: { animationDelay: k * .1 + "s" } }), sv("ellipse", { class: "loaf", cx: 106, cy: 64 - k * 9, rx: 18, ry: 5, fill: "#c99a5b", style: { animationDelay: .6 + k * .1 + "s" } })]),
        txt(80, 116, "12 loaves", { "font-size": 10, fill: "var(--muted)" }));
    }
    if (id === "incense") {
      s.append(sv("rect", { x: 58, y: 70, width: 44, height: 38, fill: "var(--accent)" }), sv("rect", { x: 54, y: 64, width: 52, height: 8, fill: "var(--accent)" }), sv("path", { d: "M54 64 l-4 -6 M106 64 l4 -6", stroke: "var(--accent)", "stroke-width": 3 }),
        ...[0, 1, 2].map(k => sv("path", { class: "smoke", d: `M${70 + k * 10} 60 q-8 -12 0 -22 q8 -10 0 -22`, stroke: "var(--muted)", "stroke-width": 3, fill: "none", "stroke-linecap": "round", style: { animationDelay: k * .5 + "s" } })));
    }
    return s;
  }
  function initScFurniture() {
    const F = SC().furniture;
    const cards = F.map((f, i) => { const b = el("button", { class: "card fcard", type: "button", "aria-pressed": "false", style: { "--c": f.c }, onclick: () => sel(i) }, furnPic(f.id), el("h3", { text: f.n }), el("p", { class: "eyebrow", text: f.tag })); $("#scFurniture").append(b); return b; });
    function sel(i) {
      selectSet(cards, i); const f = F[i];
      $("#scFurnPanel").replaceChildren(
        el("div", { class: "you-are", style: { "--c": f.c } }, el("small", { text: "The blessing" }), el("b", { text: f.you })),
        el("div", { class: "frows" },
          el("div", { class: "frow" }, el("small", { text: "In the tabernacle" }), el("p", { html: refify(f.ot) })),
          el("div", { class: "frow" }, el("small", { text: "Who could enjoy it" }), el("p", { html: refify(f.who) })),
          el("div", { class: "frow" }, el("small", { text: "Fulfilled in Christ" }), el("p", { html: refify(f.christ) })),
          el("div", { class: "frow" }, el("small", { text: "In Ephesians" }), el("p", { html: refify(f.eph) }))),
        el("div", { class: "chips" }, ...f.gifts.map(g => el("span", { class: "tag-pill", text: g }))),
        el("p", { class: "use" }, el("b", { text: "Not power. " }), "Relationship: the priest was closer to God, communed with God and approached God."));
    }
    sel(0);
  }

  function initScPrivileges() {
    const C = SC().compare, box = $("#scCompare");
    C.forEach(([k, a, b], i) => box.append(el("div", { class: "pp-row", style: { "--d": i * .07 + "s" } }, el("b", { text: k }),
      el("span", { class: "ms-flip" }, el("span", { class: "ms-face pp-a", text: a }), el("span", { class: "ms-face pp-b", html: refify(b) })))));
    const chips = [["What we imagine", false], ["What Paul meant", true]].map(([t, on], i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { selectSet(chips, i); box.classList.toggle("paul", on); } }));
    $("#scFlip").append(...chips); selectSet(chips, 0);
    setTimeout(() => { if (!box.classList.contains("paul")) { selectSet(chips, 1); box.classList.add("paul"); } }, reduceMotion ? 0 : 2600);
    $("#scPara").append(SC().paraphrase, el("cite", { text: "Ephesians 1:3, read in the light of the holy place" }));
    const icon = { "the lampstand": "M0 10 V-4 M-8 -4 Q-8 4 0 4 Q8 4 8 -4 M-6 12 H6", "the table": "M-10 0 H10 M-8 0 V10 M8 0 V10 M-6 -4 H6", "the altar of incense": "M-6 10 V0 H6 V10 M-2 -2 q-3 -4 0 -8", "the whole holy place": "M-10 10 V-6 L0 -12 L10 -6 V10 Z" };
    $("#scIdentity").append(...SC().identity.map(([t, ref, from], i) => el("div", { class: "id-pill", style: { "--d": i * .12 + "s" } },
      sv("svg", { viewBox: "-14 -14 28 28", "aria-hidden": "true" }, sv("path", { d: icon[from], fill: "none", stroke: "currentColor", "stroke-width": 2.2, "stroke-linecap": "round" })), el("b", { text: t }), el("span", { class: "ref", text: ref }), el("small", { text: "from " + from }))));
    $("#scReadings").append(...SC().readings.map(([t, d], i) => el("div", { class: "card stg" + (i === 2 ? " agree" : "") }, el("h3", { text: t }), el("p", { html: refify(d) }))));
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
      const grp = toc.dataset.group || "";
      $$("main section.block").forEach(sec => {
        if ((sec.dataset.group || "") !== grp && !(grp === "" && sec.id === "kp-study")) return;
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
      [initPentecost, "#compare"], [initCities, "#lanes"],
      [initKpDesign, "#kpDesign"], [initKpTwist, "#kpTwist"], [initKpSplit, "#kpSplit"], [initKpRoles, "#kpRoleTabs"], [initKpRings, "#kpRings"], [initKpCross, "#kpCross"],
      [initKpPeople, "#kpPeople"], [initKpMelch, "#kpMelchFlow"], [initKpPromises, "#kpPromises"], [initKpCalling, "#kpBalance"], [initKpStudy, "#kpQuestions"],
      [initPrOffice, "#prLawsuit"], [initPrPairs, "#prPairs"], [initPrFive, "#prStar"], [initPrChanged, "#prVenn"], [initPrEquip, "#prMatrix"],
      [initPrDaniel, "#prDaniel"], [initPrTense, "#prTense"], [initPrFunnel, "#prFunnel"], [initPrTimeline, "#prTimeline"], [initPrObjections, "#prObjections"], [initPrStudy, "#prQuestions"],
      [initKyMeaning, "#kyCanon"], [initKyRing, "#kyRing"], [initKyPalace, "#kyPalace"], [initKyStewards, "#kyStewardArt"], [initKyFlow, "#kyFlow"], [initKyCaesarea, "#kyCaesarea"],
      [initKyBind, "#kyDir"], [initKyDoors, "#kyDoors"], [initKyKey, "#kyKey"], [initKyOperate, "#kyOperate"], [initKyObjections, "#kyObjections"], [initKyStudy, "#kyQuestions"],
      [initSwDesign, "#swDesign"], [initSwGrow, "#swGrow"], [initSwSoils, "#swSoils"], [initSwThread, "#swThread"], [initSwChrist, "#swChrist"], [initSwHarvest, "#swPairArt"],
      [initSwCycle, "#swCycle"], [initSwExchange, "#swExchange"], [initSwManip, "#swMachine"], [initSwObjections, "#swObjections"], [initSwStudy, "#swQuestions"],
      [initSsMap, "#ssMap"], [initSsNet, "#ssNet"], [initSsPillars, "#ssPillars"], [initSsBuild, "#ssWalls"], [initSsArena, "#ssArena"], [initSsWorship, "#ssSound"],
      [initSsGate, "#ssGate"], [initSsStairs, "#ssStairs"], [initSsBabylons, "#ssBabylons"], [initSsDaniels, "#ssDaniels"], [initSsFire, "#ssFire"],
      [initWfLayers, "#wfLayers"], [initWfWords, "#wfWords"], [initWfChain, "#wfChain"], [initWfArmour, "#wfArmour"], [initWfSpeak, "#wfTargets"], [initWfBind, "#wfBind"],
      [initWfTongue, "#wfTongue"], [initWfBuilder, "#wfDeclOut"], [initWfCompare, "#wfCompare"], [initWfCurseLine, "#wfCurseLine"], [initWfShield, "#wfShield"], [initWfBreak, "#wfCurseTargets"],
      [initWfFree, "#wfFree"], [initWfSit, "#wfSit"], [initWfTreasury, "#wfTreasury"], [initWfDual, "#wfDual"], [initWfHeirs, "#wfHeirs"], [initScPlan, "#scPlan"], [initScFurniture, "#scFurniture"], [initScPrivileges, "#scCompare"], [initFaAbove, "#faAbove"], [initFaBody, "#faBody"], [initFaUntil, "#faUntil"], [initFaEnemies, "#faEnemies"], [initFaDeath, "#faDeath"], [initFaDaily, "#faDaily"], [initFaAssign, "#faAssign"], [initWfSpectrum, "#wfSpectrum"], [initWfRoles, "#wfRoleArt"], [initWfTempt, "#wfTempt"], [initWfRhythm, "#wfRhythm"], [initWfObjections, "#wfObjections"],
      [initSnMerge, "#snMerge"], [initSnWord, "#snWord"], [initSnHub, "#snHub"], [initSnExpand, "#snExpand"], [initSnReveal, "#snReveal"], [initSnGrowth, "#snGrowth"],
      [initSnBody, "#snBody"], [initSnLadder, "#snLadder"], [initSnSpheres, "#snSpheres"], [initSnObjections, "#snObjections"],
      [initMnRom, "#mnWords"], [initMnVocab, "#mnVocab"], [initMnPath, "#mnPath"], [initMnCaptive, "#mnCaptive"], [initMnExchange, "#mnLies"], [initMnMeans, "#mnMeans"],
      [initMnFilter, "#mnFilter"], [initMnGlory, "#mnGlory"], [initMnMindset, "#mnMindset"], [initMnDaily, "#mnChecklist"], [initMnObjections, "#mnObjections"],
      [initWeb, "#webStage"], [initQuiz, "#quizBox"], [initSources, "#sourceList"], [initScroll]];
    steps.forEach(([fn, need]) => { if (need && !$(need)) return; try { fn(); } catch (err) { console.error(fn.name, err); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

window.SITE_INDEX = [{"f":"index.html","p":"Home","id":"journey","t":"One road from Eden to the City of God","k":"Your journey Your journey · progress map"},{"f":"index.html","p":"Home","id":"parts","t":"Choose where to begin","k":"Seven parts, one story"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"clues","t":"Why Eden reads like a sanctuary","k":"Eight clues in the text"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"mountain","t":"The mountain of God, in three rings","k":"Cosmic geography"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"tabernacle","t":"Walk through the Tabernacle","k":"A portable Eden · Exodus 25–40"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"ark","t":"The Ark of the Covenant","k":"The footstool of God’s throne"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"adam","t":"Adam: image, priest and king","k":"Man in the sanctuary"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"tree","t":"A golden tree in the holy place","k":"Tree of life → lampstand"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"story","t":"God’s dwelling through history","k":"One plan from Genesis 2 to Revelation 22"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"restored","t":"Genesis 2–3 ↔ Revelation 21–22","k":"The story comes home"},{"f":"garden.html","p":"Part I · The Garden-Temple","id":"part1","t":"The Garden Was a Temple","k":"part overview"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"nachash","t":"Nāḥāš: serpent, diviner, shining one","k":"Genesis 3:1 · one Hebrew word"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"not-snake","t":"Six things a garden snake can’t do","k":"Reading Genesis 3 carefully"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"cherub","t":"The guardian cherub who fell","k":"Ezekiel 28:12–19"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"morning-star","t":"“Day Star, son of Dawn”","k":"Isaiah 14:12–15"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"seraph","t":"Seraphim: the burning serpents","k":"Throne guardians"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"curse","t":"The curse, decoded","k":"Genesis 3:14–15"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"seed","t":"The war of the two seeds","k":"Zeraʿ · “offspring, seed”"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"bronze","t":"Look and live","k":"Numbers 21:4–9 · John 3:14–15"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"dragon","t":"“That ancient serpent”","k":"Revelation 12:9 · 20:2"},{"f":"serpent.html","p":"Part II · The Serpent and the Seed","id":"serpent","t":"The Serpent and the Seed","k":"part overview"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"babel","t":"The tower everyone pictures","k":"Genesis 11:1–9"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"map","t":"Map of the story","k":"The land of Shinar and beyond"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"ziggurat","t":"What is a ziggurat?","k":"Anatomy of a temple-tower"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"sin","t":"Three layers of Babel’s rebellion","k":"What actually went wrong"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"shem","t":"“Let us make a שֵׁם shem for ourselves”","k":"A Hebrew wordplay"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"nations","t":"Seventy nations and one portion","k":"Deuteronomy 32:8–9 · the Table of Nations"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"gate","t":"“Gate of the gods” and “the gate of heaven”","k":"Two gates"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"pentecost","t":"Pentecost: Babel in reverse","k":"Genesis 11 ↔ Acts 2"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"cities","t":"The city of man and the city of God","k":"A tale of two cities"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"two-cities","t":"Babylon the great, or the New Jerusalem","k":"Revelation 17–18 ↔ 21–22"},{"f":"babel.html","p":"Part III · Babel and the City of God","id":"part2","t":"Babel, Babylon and the City of God","k":"part overview"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-design","t":"God’s design: one person, two directions","k":"God’s design Genesis 1–2 · flowchart"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-twist","t":"How it got twisted","k":"How it got twisted From the fall to Babylon · flow"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-split","t":"Why Israel’s offices were separated","k":"Why the offices split Sinai to David · flowchart"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-roles","t":"What priests and kings actually did","k":"Roles, access & authority Responsibilities · access · authority · limits"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-access","t":"Rings of access, then an open way","k":"Rings of access Who could come near?"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-cross","t":"When kings tried to be priests","k":"Crossing the line Boundaries in Israel"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-people","t":"Kings, priests and those who were both","k":"People map Old and New Testament · visual map"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-melch","t":"The order of Melchizedek","k":"Melchizedek Genesis 14 → Psalm 110 → Hebrews 7"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-promises","t":"Promises that meet in one person","k":"The promises Two streams of promise · diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-calling","t":"How we are called to function","k":"Our calling 1 Peter 2:9 · Revelation 5:10"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-map","t":"Eleven movements, two callings","k":"Overview Overview map"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-net","t":"Can you handle being blessed?","k":"Supply & support Isaiah 3:1 · Philippians 4:19 · Luke 5:6–7 · interactive"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-judgment","t":"When the pillars are removed","k":"Signs of judgment Isaiah 3:1–12 · structure diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-build","t":"Babel or Bethel: bricks or living stones","k":"Babel or Bethel Genesis 10–11 · Matthew 16 · 1 Peter 2:5 · building diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-came","t":"Heaven came down","k":"Heaven came down Genesis 11:5 · Revelation 12 · Jude 9 · arena diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-worship","t":"Worship is not a song","k":"Worship is not a song John 4:23–24 · sound diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-gate","t":"Unity, gatekeepers and gossip","k":"Gatekeepers & gossip Matthew 23:13 · Revelation 2:20 · Psalm 1 · gate diagram"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-orphan","t":"From orphan to son","k":"The orphan generation Greek words for growth · Matthew 21:33–39"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-babylons","t":"Babylon 1.0, 2.0 and 3.0","k":"Three Babylons Genesis 11 · Daniel 1 · Revelation 18"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-daniels","t":"A generation of Daniels","k":"A generation of Daniels Daniel 1:8 · Genesis 2:9"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"ss-accord","t":"One accord, then shake off the snake","k":"One accord Acts 2:1–2 · Acts 28:1–6 · animated"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kp-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"kings","t":"Kings and Priests","k":"part overview"},{"f":"kings.html","p":"Part IV · Kings and Priests","id":"supply","t":"Supply and Support","k":"part overview"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-office","t":"The prophet: messenger of the covenant","k":"The prophetic office Old Testament · flowchart"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-pairs","t":"Prophets between kings and priests","k":"Prophets with kings & priests Relationship map"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-five","t":"From three offices to five gifts","k":"The fivefold ministry Ephesians 4:7–16"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-changed","t":"What changed, and what did not","k":"What changed Old covenant → new covenant"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-equip","t":"How the five equip kings and priests","k":"Equipping kings & priests Matrix · spheres"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-now","t":"Kings and priests now, not only later","k":"Kings & priests now Daniel 2 · tense map"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-shrunk","t":"How the calling was shrunk","k":"How the purpose shrank Diagnosis · funnel"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-ages","t":"Reading the “end” in its setting","k":"Reading the end-time texts AD 30 → AD 70 → the kingdom age"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-objections","t":"Objections and misunderstandings","k":"Questions & objections Fair questions, honest answers"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"pr-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"prophets.html","p":"Part V · Prophets and the Fivefold","id":"prophets","t":"Prophets, the Fivefold and the Kingdom Now","k":"part overview"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-meaning","t":"What keys mean throughout the Bible","k":"What keys mean Genesis to Revelation · concordance map"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-ring","t":"The keyring","k":"The keyring Every key in Scripture"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-palace","t":"Inside the King’s house","k":"The steward’s palace Culture · the royal steward"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-stewards","t":"Two stewards: one key","k":"Shebna and Eliakim Isaiah 22:15–25"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-flow","t":"How the keys connect across Scripture","k":"Connections Joseph to the New Jerusalem · flowchart"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-caesarea","t":"Keys beside the “gates of Hades”","k":"Caesarea Philippi Matthew 16:13–20 · the setting"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-bind","t":"Binding and loosing: heaven first","k":"Binding and loosing Matthew 16:19 · grammar diagram"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-doors","t":"Doors the keys opened","k":"Doors opened The keys in action · Acts to Revelation"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-shrunk","t":"From access to absolution: how the key lost its teeth","k":"From access to absolution Church history · diagram"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-operate","t":"How we operate in the keys","k":"How to operate Practice"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-objections","t":"Objections and misunderstandings","k":"Objections Fair questions, honest answers"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"ky-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"keys.html","p":"Part VI · The Keys of the Kingdom","id":"keys","t":"The Keys of the Kingdom","k":"part overview"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-design","t":"God’s design: seed, blessing and harvest","k":"God’s design Genesis 1 → Galatians 6 → Revelation 14 · flowchart"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-laws","t":"Eight laws of the harvest","k":"Laws of the harvest Animated growth diagram"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-soils","t":"One seed, four soils","k":"The four soils Mark 4:1–20 · interactive parable"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-thread","t":"The seed principle through Scripture","k":"Through Scripture Genesis to Revelation · furrow map"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-christ","t":"The seed that died and multiplied","k":"The seed that died John 12:24 · 1 Corinthians 15:20"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-harvest","t":"What you sow, what you reap","k":"Seed and harvest The law of kind · chooser"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-cycle","t":"How sowing connects to blessing","k":"The blessing cycle 2 Corinthians 9:6–15 · cycle diagram"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-grace","t":"When grace interrupts the harvest","k":"Grace and the harvest The great exchange"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-manip","t":"Why kingdom principles can feel like manipulation","k":"Principle or manipulation? Diagnosis"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-objections","t":"Objections and misunderstandings","k":"Objections Fair questions, honest answers"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sw-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"sowing.html","p":"Part VII · Sowing and Reaping","id":"sowing","t":"Sowing and Reaping","k":"part overview"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-battle","t":"The battlefield: who is fighting, and from where","k":"The battlefield Ephesians 1:20 → 2:6 → 6:12 · layered map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-words","t":"Authority, power, dominion and strongholds: what the words mean","k":"Authority, power, dominion Hebrew and Greek · word pictures"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-chain","t":"Where our authority comes from","k":"Chain of authority Matthew 28:18 · flowchart"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-armour","t":"The armour of God is God’s own armour","k":"The armour of God Ephesians 6:13–18 · Isaiah 59:17 · interactive figure"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-speak","t":"Can we speak to it? Command it?","k":"Can we speak to it? Delays, strongholds, demons, sickness … · evidence map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-bind","t":"“Whatever you bind on earth shall have been bound in heaven”","k":"Bound in heaven Matthew 16:19 · 18:18 · 12:29 · mirror diagram"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-tongue","t":"Words that build worlds","k":"Words that build worlds Genesis 1 → Romans 4 → 1 Timothy 1 · flowchart"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-builder","t":"Build a declaration from a promise","k":"Declaration builder Promise → faith → declaration · interactive tool"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-compare","t":"Declaration, positive thinking or witchcraft?","k":"Declaration or manipulation? Side-by-side comparison"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-curseline","t":"From the curse to “no more curse”","k":"From curse to no more curse Genesis 3 → Revelation 22 · timeline"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-shield","t":"“There is no enchantment against Jacob”","k":"No causeless curse Numbers 23:23 · Proverbs 26:2 · Isaiah 54:17 · animation"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-break","t":"Can we rebuke, cancel and break it?","k":"Can we break it? Witchcraft, bondages, generational curses … · evidence map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-free","t":"A path to freedom","k":"A path to freedom Discern → deal → break → be filled · flowchart"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-sit","t":"Seated with him: sit, walk, stand","k":"Sit, walk, stand The shape of Ephesians · two-level diagram"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-sanctuary","t":"“Heavenly places”: the sanctuary Paul had in mind","k":"Heavenly places = the sanctuary Hebrews 9:1–8 · Ephesians 2:13–22 · tabernacle walk-through"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-holyplace","t":"Inside the first veil: light, bread and incense","k":"Light, bread, incense Exodus 25–30 · John 6 and 8 · Revelation 5:8 · animated furniture"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-privileges","t":"Privileges, not powers: what “every spiritual blessing” means","k":"Privileges, not powers Ephesians 1:3 · comparison and identity map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-blessings","t":"Every spiritual blessing in Christ","k":"Every spiritual blessing Ephesians 1:3–14 · treasury map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-dual","t":"Our dual reality: in Christ above, in the world below","k":"Our dual reality Already and not yet · mirror diagram"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-heirs","t":"Co-heirs with Christ: what is ours now, and what is coming","k":"Co-heirs with Christ Romans 8:17 · Galatians 4:7 · inheritance map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-far","t":"Far above all rule, authority, power and dominion","k":"Far above all Ephesians 1:19–21 · altitude map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-feet","t":"Head over all, and the feet are in the body","k":"The feet are in the body Ephesians 1:22–23 · animated diagram"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-until","t":"“Sit at my right hand, until I make your enemies your footstool”","k":"Sit … until Psalm 110:1 · Hebrews 10:12–13 · timeline"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-enemies","t":"All the enemies to be put under his feet","k":"Every enemy to subdue 1 Corinthians 15:25 · enemy map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-death","t":"The last enemy to be destroyed is death","k":"The last enemy: death 1 Corinthians 15:26, 54–57 · timeline and animation"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-daily","t":"Living from above, not under the circumstances","k":"Above, not under Daily life · flip cards"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-assign","t":"The body’s assignment: rule in the midst of your enemies","k":"The body’s assignment Psalm 110:2–3 · Matthew 28:18 · mission map"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-extremes","t":"Where people go wrong: two ditches and a road","k":"Errors and extremes 1 Peter 5:8–9 · spectrum slider"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-roles","t":"How sons, priests and kings walk in dominion","k":"Sons, priests, kings Revelation 1:6 · three postures in one person"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-jesus","t":"How Jesus fought: “It is written”","k":"“It is written” Matthew 4:1–11 · animation"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-rhythm","t":"A daily battle rhythm","k":"Battle rhythm James 4:7 · Ephesians 6 · cycle diagram"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-objections","t":"Objections and misunderstandings","k":"Objections Fair questions, honest answers"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"wf-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"warfare","t":"Spiritual Warfare and Dominion","k":"part overview"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"declare","t":"Speaking and Prophesying Over Our Lives","k":"part overview"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"curses","t":"Breaking Curses, Witchcraft and Bondages","k":"part overview"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"seated","t":"Seated in the Heavenly Places, Co-Heirs with Christ","k":"part overview"},{"f":"warfare.html","p":"Part VIII · Spiritual Warfare","id":"farabove","t":"Far Above All: Every Enemy Under His Feet","k":"part overview"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-merge","t":"Heaven and earth: pulled apart, coming together","k":"Heaven and earth Ephesians 1:10 · Genesis → Revelation · interactive diagram"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-word","t":"“To unite all things under one head”","k":"“Sum up all things” Greek word study · animation"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-hub","t":"How every part of this study is summed up in Christ","k":"How every part fits The whole study on one page · hub map"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-expand","t":"God’s initial plan: Eden was meant to fill the earth","k":"God’s initial plan Genesis 1:28 → Habakkuk 2:14 → Revelation 21 · growth animation"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-reveal","t":"Creation waits for the revealing of the sons of God","k":"The revealing of the sons Romans 8:14–30 · animated flow"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-huios","t":"Nēpios, teknon, huios: from infant to heir","k":"Huios: mature sons Galatians 4:1–7 · three Greek words · growth path"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-body","t":"The body of Christ: how the Head moves on earth","k":"The body of Christ Ephesians 1:22–23 · 1 Corinthians 12 · Ephesians 4:16 · body map"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-ladder","t":"What sons and daughters do as kings and priests","k":"What kings and priests do Genesis 28:12 · John 1:51 · two-way ladder"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-spheres","t":"On earth as it is in heaven, in every sphere of life","k":"Heaven in every sphere Matthew 6:10 · radial map"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-objections","t":"Objections and misunderstandings","k":"Objections Fair questions, honest answers"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sn-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"sons.html","p":"Part IX · Heaven and Earth United","id":"sons","t":"Heaven and Earth United: The Body and the Sons","k":"part overview"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-rom","t":"Conformed or transformed?","k":"Romans 12:2 Romans 12:1–2 · word by word · metamorphosis animation"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-vocab","t":"The Bible’s vocabulary of the inner life","k":"Heart and mind words Hebrew and Greek · word cards"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-path","t":"How a thought becomes a life","k":"How a thought becomes a life Romans 8:5–6 · James 1:14–15 · two-path flowchart"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-captive","t":"Taking every thought captive","k":"Take every thought captive 2 Corinthians 10:3–5 · step-by-step animation"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-exchange","t":"The great exchange: lies for truth","k":"Lie → truth exchange Ephesians 4:22–24 · John 8:32 · interactive tool"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-means","t":"How God renews the mind","k":"How God renews us Titus 3:5 · the means of renewal · hub diagram"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-filter","t":"Run a thought through the Philippians 4:8 filter","k":"The Philippians 4:8 filter Philippians 4:8 · animated filter"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-glory","t":"Beholding and becoming: from one degree of glory to another","k":"From glory to glory 2 Corinthians 3:7–18 · glory slider"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-mindset","t":"From an orphan mindset to a son’s mindset","k":"Orphan or son mindset Galatians 4:6–7 · Romans 8:15 · switch table"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-daily","t":"A daily renewal rhythm","k":"Daily renewal rhythm Practice · a tracker that remembers your days"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-objections","t":"Objections and misunderstandings","k":"Objections Fair questions, honest answers"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mn-study","t":"Study guide","k":"Study guide For personal or group study"},{"f":"mind.html","p":"Part X · Renewing the Mind","id":"mind","t":"Renewing the Mind and Transformation","k":"part overview"},{"f":"connections.html","p":"Connections & Quiz","id":"web","t":"The web of connections","k":"Everything connects"},{"f":"connections.html","p":"Connections & Quiz","id":"quiz","t":"Test yourself","k":"Check what you have seen"},{"f":"connections.html","p":"Connections & Quiz","id":"sources","t":"Further reading","k":"Go deeper"},{"f":"connections.html","p":"Connections & Quiz","id":"connections","t":"Connections &amp; Quiz","k":"part overview"}];
window.SITE_PAGES = [{"id":"home","f":"index.html","nav":"Home"},{"id":"garden","f":"garden.html","nav":"Part I · The Garden-Temple"},{"id":"serpent","f":"serpent.html","nav":"Part II · The Serpent and the Seed"},{"id":"babel","f":"babel.html","nav":"Part III · Babel and the City of God"},{"id":"kings","f":"kings.html","nav":"Part IV · Kings and Priests"},{"id":"prophets","f":"prophets.html","nav":"Part V · Prophets and the Fivefold"},{"id":"keys","f":"keys.html","nav":"Part VI · The Keys of the Kingdom"},{"id":"sowing","f":"sowing.html","nav":"Part VII · Sowing and Reaping"},{"id":"warfare","f":"warfare.html","nav":"Part VIII · Spiritual Warfare"},{"id":"sons","f":"sons.html","nav":"Part IX · Heaven and Earth United"},{"id":"mind","f":"mind.html","nav":"Part X · Renewing the Mind"},{"id":"connections","f":"connections.html","nav":"Connections & Quiz"}];
/* Where Heaven Meets Earth — motion and interaction layer (runs after the app has booted) */
(function () {
  "use strict";
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const mk = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#a87a1c";
  const palette = () => { const cs = getComputedStyle(document.documentElement); return ["--accent", "--eden", "--babel", "--flame"].map(v => cs.getPropertyValue(v).trim()).filter(Boolean); };

  /* ---------- 1 · Page transitions ---------- */
  function pageTransitions() {
    if (reduce) return;
    const veil = mk("div", "pt-veil");
    veil.setAttribute("aria-hidden", "true");
    veil.innerHTML = '<span class="pt-mark"></span>';
    document.body.append(veil);
    requestAnimationFrame(() => veil.classList.add("out"));
    window.addEventListener("pageshow", e => { if (e.persisted) { veil.classList.remove("in"); veil.classList.add("out"); } });
    document.addEventListener("click", e => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!/^[a-z-]+\.html(#.*)?$/i.test(href)) return;
      const here = location.pathname.split("/").pop() || "index.html";
      if (href.split("#")[0] === here) return;
      e.preventDefault();
      veil.classList.remove("out"); veil.classList.add("in");
      setTimeout(() => { location.href = href; }, 420);
    });
  }

  /* ---------- 2 · Ambient light motes on hero and part banners ---------- */
  function motes() {
    if (reduce) return;
    $$(".hero, .part-banner").forEach(host => {
      const c = mk("canvas", "motes"); c.setAttribute("aria-hidden", "true");
      host.prepend(c);
      const ctx = c.getContext("2d");
      let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1), mx = 0, my = 0, running = false, raf = 0;
      const N = host.classList.contains("hero") ? 70 : 38;
      const P = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 2.2, s: .0002 + Math.random() * .0008, ph: Math.random() * 6.28, d: .3 + Math.random() * .7 }));
      const size = () => { const r = host.getBoundingClientRect(); w = r.width; h = r.height; c.width = w * dpr; c.height = h * dpr; c.style.width = w + "px"; c.style.height = h + "px"; };
      size(); window.addEventListener("resize", size);
      host.addEventListener("pointermove", e => { const r = host.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
      let col = accent();
      new MutationObserver(() => { col = accent(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-scheme", "style", "data-theme"] });
      const tick = t => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); ctx.fillStyle = col;
        P.forEach(p => {
          p.y -= p.s; if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); }
          const x = p.x * w + Math.sin(t / 2400 + p.ph) * 14 + mx * 40 * p.d, y = p.y * h + my * 30 * p.d;
          ctx.globalAlpha = .18 + .5 * (0.5 + 0.5 * Math.sin(t / 900 + p.ph)) * p.d;
          ctx.beginPath(); ctx.arc(x, y, p.r, 0, 6.283); ctx.fill();
        });
        if (running) raf = requestAnimationFrame(tick);
      };
      new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting && !running) { running = true; raf = requestAnimationFrame(tick); } else if (!en.isIntersecting) { running = false; cancelAnimationFrame(raf); } })).observe(host);
    });
  }

  /* ---------- 3 · Hero parallax and scroll cue ---------- */
  function heroFx() {
    const hero = $(".hero"); if (!hero) return;
    const svg = $("#heroSvg");
    if (svg && fine && !reduce) {
      // keep any existing SVG transform (e.g. the ziggurat's translate) and add the parallax offset to it
      const layers = [["g[fill='none']", 18], ["#heroZig", -14], ["#heroStars", 26]].map(([s, d]) => { const n = $(s, svg); if (!n) return null; const base = (n.getAttribute("transform") || "").replace(/translate\(\s*([-\d.]+)[\s,]+([-\d.]+)\s*\)/, "translate($1px, $2px)"); return [n, d, base]; }).filter(Boolean);
      const apply = (x, y) => layers.forEach(([n, d, base]) => { n.style.transform = `${base} translate(${x * d}px, ${y * d}px)`; });
      hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); apply((e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5); });
      hero.addEventListener("pointerleave", () => apply(0, 0));
      layers.forEach(([n]) => { n.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)"; });
      apply(0, 0);
    }
    const cue = mk("a", "scroll-cue", '<span>Scroll</span><i aria-hidden="true"></i>');
    cue.href = "#parts"; if ($("#parts")) hero.append(cue);
  }

  /* ---------- 4 · Kinetic headings ---------- */
  function splitWords(el) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(ch => {
        if (ch.nodeType === 3) {
          const frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(document.createTextNode(part)); return; }
            const w = mk("span", "kw"); const inner = mk("span", "kwi"); inner.textContent = part; inner.style.setProperty("--i", i++); w.append(inner); frag.append(w);
          });
          ch.replaceWith(frag);
        } else if (ch.nodeType === 1 && !ch.classList.contains("kw")) walk(ch);
      });
    };
    walk(el);
    el.classList.add("kinetic");
  }
  function kinetic() {
    if (reduce) return;
    $$(".hero h1, .part-banner h2").forEach(splitWords);
    requestAnimationFrame(() => $$(".kinetic").forEach(k => k.classList.add("go")));
  }

  /* ---------- 5 · Scroll layer: staggered reveals, heading rules, numeral parallax ---------- */
  function scrollLayer() {
    const groups = ".grid-3, .grid-2, .clues, .meanings, .ssmap, .gallery, .cross-grid, .role-grid, .office-strip, .part-cards, .doors, .hchain, .sources, .babylons, .tense, .objs, .letus, .seedbags";
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
    $$(groups).forEach(g => {
      Array.from(g.children).forEach((c, i) => c.style.setProperty("--si", Math.min(i, 10)));
      if (!reduce && g.getBoundingClientRect().top > innerHeight) { g.classList.add("stg"); io.observe(g); }
    });
    $$(".sec-head").forEach(h => { if (reduce || h.getBoundingClientRect().top < innerHeight) h.classList.add("in"); else io.observe(h); });
    if (reduce) return;
    const nums = $$(".part-num");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        nums.forEach(n => { const r = n.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return; const p = (r.top + r.height / 2) / innerHeight - .5; n.style.transform = `translateY(${p * -40}px) rotate(${p * -4}deg)`; });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- 6 · Section rail ---------- */
  function rail() {
    const secs = $$("main section.block[id]").filter(s => $("h2, h3", s));
    if (secs.length < 4) return;
    const nav = mk("nav", "rail"); nav.setAttribute("aria-label", "Sections on this page");
    const dots = secs.map(s => {
      const label = s.dataset.toc || $("h2, h3", s).textContent.trim();
      const a = mk("a"); a.href = "#" + s.id; a.setAttribute("aria-label", label);
      a.append(mk("i"), mk("span", "rl", label.replace(/[<>]/g, "")));
      nav.append(a); return a;
    });
    if (secs.length > 18) nav.classList.add("dense");
    document.body.append(nav);
    let cur = -1;
    const upd = () => {
      let k = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .4) k = i; });
      if (k !== cur) { cur = k; dots.forEach((d, i) => { d.classList.toggle("on", i === k); d.classList.toggle("past", i < k); }); }
      nav.classList.toggle("show", scrollY > innerHeight * .5);
    };
    window.addEventListener("scroll", upd, { passive: true }); upd();
  }

  /* ---------- 7 · Pointer layer: spotlight, tilt, magnetic buttons, ripples ---------- */
  function pointerLayer() {
    const spot = ".card, .panel, .part-card, .explore-card, .meaning, .sscard, .bcard, .qopt, .verse, .tchip, .obj, .pg, .bag, .mitem, .xcard";
    document.addEventListener("pointermove", e => {
      const el = e.target.closest && e.target.closest(spot); if (!el) return;
      const r = el.getBoundingClientRect(); el.style.setProperty("--mx", (e.clientX - r.left) + "px"); el.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
    if (!fine || reduce) return;
    $$(".part-card, .bcard, .sscard, .explore-card").forEach(el => {
      el.classList.add("tilt");
      el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`; });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
    $$(".btn.primary, .hero .btn").forEach(b => {
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
    document.addEventListener("pointerdown", e => {
      const b = e.target.closest && e.target.closest(".btn, .chip, .qopt, .tab, .pchip, .city, .verse, .tchip, .meaning, .door");
      if (!b) return;
      const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, rp = mk("span", "ripple");
      rp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      if (getComputedStyle(b).position === "static") b.style.position = "relative";
      b.style.overflow = b.classList.contains("door") ? "" : "hidden";
      b.append(rp); setTimeout(() => rp.remove(), 650);
    });
  }

  /* ---------- 8 · Celebration bursts ---------- */
  let burstLayer = null;
  function burst(x, y, n = 26, spread = 1) {
    if (reduce) return;
    if (!burstLayer) { burstLayer = mk("div", "burst-layer"); burstLayer.setAttribute("aria-hidden", "true"); document.body.append(burstLayer); }
    const cols = palette();
    for (let i = 0; i < n; i++) {
      const p = mk("i", "bp" + (i % 3 === 0 ? " star" : ""));
      p.style.left = x + "px"; p.style.top = y + "px"; p.style.background = cols[i % cols.length];
      burstLayer.append(p);
      const a = Math.random() * Math.PI * 2, v = (60 + Math.random() * 140) * spread;
      const dx = Math.cos(a) * v, dy = Math.sin(a) * v - 60 * spread;
      p.animate([{ transform: "translate(-50%,-50%) scale(1) rotate(0)", opacity: 1 }, { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.9) rotate(${a * 200}deg)`, opacity: 1, offset: .6 }, { transform: `translate(calc(-50% + ${dx * 1.15}px), calc(-50% + ${dy + 120 * spread}px)) scale(.4) rotate(${a * 360}deg)`, opacity: 0 }], { duration: 900 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => p.remove();
    }
  }
  function celebrations() {
    window.__burst = burst;
    document.addEventListener("click", e => {
      const t = e.target.closest && e.target.closest("button");
      if (!t) return;
      const r = t.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      if (t.classList.contains("qopt")) setTimeout(() => { if (t.classList.contains("right")) burst(cx, cy, 34, 1.1); }, 0);
      else if (t.classList.contains("clue") || t.classList.contains("mem")) { if (!t.classList.contains("flipped")) setTimeout(() => t.classList.contains("flipped") && burst(cx, r.top + 30, 12, .6), 0); }
      else if (/See score/.test(t.textContent)) setTimeout(() => { burst(innerWidth / 2, innerHeight / 3, 90, 2); }, 120);
      else if (["kyDoorsPlay", "ssShake", "swExchangeBtn", "zigDescend", "lookBtn", "divideBtn", "gatherBtn", "swChristPlay", "prDanielPlay", "ssLight", "swSow", "starNext"].includes(t.id)) burst(cx, cy, 18, .8);
    });
  }

  /* ---------- 9 · Search palette and keyboard shortcuts ---------- */
  function palette_() {
    const IDX = window.SITE_INDEX || [];
    const btn = $("#searchBtn");
    const ov = mk("div", "pal-ov"); ov.hidden = true;
    ov.innerHTML = '<div class="pal" role="dialog" aria-modal="true" aria-label="Search the study"><div class="pal-in"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16 L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="palInput" type="text" placeholder="Search every topic: Melchizedek, ziggurat, keys…" autocomplete="off" aria-controls="palList"></div><ul id="palList" class="pal-list" role="listbox"></ul><div class="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span><span><kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> previous / next part</span></div></div>';
    document.body.append(ov);
    const input = $("#palInput", ov), list = $("#palList", ov);
    let items = [], sel = 0;
    const here = location.pathname.split("/").pop() || "index.html";
    const render = () => {
      const q = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      items = IDX.filter(x => { const hay = (x.t + " " + x.p + " " + (x.k || "")).toLowerCase(); return q.every(w => hay.includes(w)); }).slice(0, 40);
      sel = Math.min(sel, Math.max(0, items.length - 1));
      list.replaceChildren(...(items.length ? items.map((x, i) => { const li = mk("li", "pal-it" + (i === sel ? " on" : "")); li.setAttribute("role", "option"); li.setAttribute("aria-selected", String(i === sel)); li.append(mk("b", "", x.t.replace(/[<>]/g, "")), mk("span", "", x.p.replace(/[<>]/g, ""))); li.addEventListener("click", () => go(x)); li.addEventListener("pointermove", () => { if (sel !== i) { sel = i; mark(); } }); return li; }) : [mk("li", "pal-empty", "No topic matches. Try another word.")]));
    };
    const mark = () => $$(".pal-it", list).forEach((li, i) => { li.classList.toggle("on", i === sel); li.setAttribute("aria-selected", String(i === sel)); if (i === sel) li.scrollIntoView({ block: "nearest" }); });
    const go = x => { close(); const target = x.f === here ? "#" + x.id : x.f + "#" + x.id; if (x.f === here) { const el = document.getElementById(x.id); if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); } else { const a = mk("a"); a.href = target; document.body.append(a); a.click(); a.remove(); } };
    const open = () => { ov.hidden = false; requestAnimationFrame(() => ov.classList.add("open")); input.value = ""; sel = 0; render(); input.focus(); };
    const close = () => { ov.classList.remove("open"); setTimeout(() => { ov.hidden = true; }, 180); if (btn) btn.focus(); };
    if (btn) btn.addEventListener("click", open);
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    input.addEventListener("input", () => { sel = 0; render(); });
    input.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      else if (e.key === "Enter" && items[sel]) { e.preventDefault(); go(items[sel]); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    document.addEventListener("keydown", e => {
      const typing = /input|textarea|select/i.test(document.activeElement.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); ov.hidden ? open() : close(); }
      if (e.shiftKey && !typing && (e.key === "ArrowLeft" || e.key === "ArrowRight") && ov.hidden) { const a = $(e.key === "ArrowLeft" ? ".pg.prev" : ".pg.next"); if (a) { e.preventDefault(); a.click(); } }
    });
  }

  function start() {
    [pageTransitions, motes, heroFx, kinetic, scrollLayer, rail, pointerLayer, celebrations, palette_].forEach(fn => { try { fn(); } catch (err) { console.error("fx", fn.name, err); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

/* Where Heaven Meets Earth — learning layer: parts menu, progress, saves, notes, journey map */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const NS = "http://www.w3.org/2000/svg";
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function h(tag, attrs, ...kids) {
    const svg = /^(svg|g|path|circle|text|line|rect|animateMotion|mpath|defs|linearGradient|stop|svga)$/.test(tag);
    const n = svg ? document.createElementNS(NS, tag === "svga" ? "a" : tag) : document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "text") n.textContent = v; else if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v === true ? "" : v);
    }
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  /* ---------- storage ---------- */
  const KEY = "hme-study";
  let S = { done: {}, saved: {}, notes: {}, last: null, known: {}, quiz: {} };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { /* storage unavailable */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } };

  const PAGES = window.SITE_PAGES || [];
  const INDEX = (window.SITE_INDEX || []).filter(x => x.k !== "part overview" && x.f !== "index.html");
  const pageEl = $(".page");
  const pid = pageEl ? pageEl.dataset.page : "home";
  const P = PAGES.find(p => p.id === pid) || { f: "index.html", nav: "Home" };
  const totals = f => INDEX.filter(x => x.f === f).length;
  const doneOn = f => INDEX.filter(x => x.f === f && S.done[f + "#" + x.id]).length;
  const pct = f => { const t = totals(f); return t ? doneOn(f) / t : 0; };
  /* memory verses from every part, for the Review tab */
  const PARTS_MEM = [["kp", "Part IV · Kings and Priests"], ["pr", "Part V · Prophets"], ["ky", "Part VI · The Keys"], ["sw", "Part VII · Sowing and Reaping"], ["wf", "Part VIII · Spiritual Warfare"], ["sn", "Part IX · Heaven and Earth United"], ["mn", "Part X · Renewing the Mind"]];
  const CARDS = (() => { try { return PARTS_MEM.flatMap(([k, p]) => ((typeof DATA !== "undefined" && DATA[k] && DATA[k].memory) || []).map(([r, v]) => ({ r, v, p }))); } catch (e) { return []; } })();
  /* glossary of Hebrew and Greek terms gathered from every part */
  const GLOSS = (() => {
    try {
      const src = [["ky", "words", "Part VI"], ["wf", "powers", "Part VIII"], ["wf", "words", "Part VIII"], ["wf", "verbs", "Part VIII"], ["sc", "glossary", "Part VIII"], ["fa", "power", "Part VIII"], ["fa", "above", "Part VIII"], ["sn", "growth", "Part IX"], ["mn", "words", "Part X"], ["mn", "vocab", "Part X"]];
      const out = [], seen = new Set();
      src.forEach(([k, a, p]) => ((DATA[k] && DATA[k][a]) || []).forEach(x => {
        const w = x.w || x.gk, t = x.t || x.n || [x.tr, x.gloss].filter(Boolean).join(" · "), d = (x.d || "").replace(/<[^>]+>/g, "");
        if (!w || seen.has(w + t)) return; seen.add(w + t); out.push({ w, t, d, p });
      }));
      if (DATA.sn && DATA.sn.word) out.push({ w: DATA.sn.word.w, t: DATA.sn.word.tr, d: DATA.sn.word.d, p: "Part IX" });
      return out.sort((a, b) => a.w.localeCompare(b.w));
    } catch (e) { return []; }
  })();
  const title = (f, id) => (INDEX.find(x => x.f === f && x.id === id) || {}).t || id;

  /* ---------- progress ring ---------- */
  function ring(p, size) {
    const r = 15, c = 2 * Math.PI * r;
    return h("svg", { viewBox: "0 0 36 36", class: "pring", width: size || 36, height: size || 36, "aria-hidden": "true" },
      h("circle", { cx: 18, cy: 18, r, fill: "none", stroke: "var(--line)", "stroke-width": 3.5 }),
      h("circle", { cx: 18, cy: 18, r, fill: "none", stroke: "var(--accent)", "stroke-width": 3.5, "stroke-linecap": "round", "stroke-dasharray": `${c * p} ${c}`, transform: "rotate(-90 18 18)" }),
      p >= 1 ? h("path", { d: "M12 18 l4 4 l8 -9", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" }) : (size || 36) >= 48 ? h("text", { x: 18, y: 21, "text-anchor": "middle", "font-size": 8, "font-weight": 800, fill: "var(--muted)" }, Math.round(p * 100) + "%") : null);
  }

  /* ---------- parts menu ---------- */
  function partsMenu() {
    const btn = $("#partsBtn"), menu = $("#partsMenu"); if (!btn || !menu) return;
    const cur = $("#pbCur"); if (cur) cur.textContent = P.nav;
    const paint = () => $$(".pm-ring", menu).forEach(n => n.replaceChildren(...(totals(n.dataset.f) ? [ring(pct(n.dataset.f))] : [])));
    const open = on => {
      menu.hidden = !on; btn.setAttribute("aria-expanded", String(on)); document.body.classList.toggle("pm-open", on);
      if (on) { paint(); const a = $(".nav a.active", menu) || $(".nav a", menu); a && a.focus({ preventScroll: true }); }
    };
    btn.addEventListener("click", e => { e.stopPropagation(); open(menu.hidden); });
    document.addEventListener("click", e => { if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) open(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { open(false); btn.focus(); } });
    paint();
  }

  /* ---------- section tools: studied / save / note ---------- */
  let railTimer;
  function paintRail() { clearTimeout(railTimer); railTimer = setTimeout(() => $$(".rail a").forEach(a => a.classList.toggle("done", !!S.done[P.f + a.getAttribute("href")])), 50); }
  function sectionTools() {
    $$("main section.block[id]").forEach(sec => {
      if (!INDEX.some(x => x.f === P.f && x.id === sec.id)) return;
      const key = P.f + "#" + sec.id, t = title(P.f, sec.id);
      const head = $(".sec-head", sec) || $(".wrap", sec); if (!head) return;
      const mk = (cls, label, icon) => h("button", { class: "stool " + cls, type: "button", "aria-pressed": "false" }, h("span", { class: "si", "aria-hidden": "true", text: icon }), h("span", { class: "sl", text: label }));
      const bDone = mk("st-done", "Mark studied", "✓"), bSave = mk("st-save", "Save", "☆"), bNote = mk("st-note", "Note", "✎");
      const bar = h("div", { class: "stools", role: "group", "aria-label": "Study tools for " + t }, bDone, bSave, bNote);
      const ta = h("textarea", { rows: 3, placeholder: "Your notes on “" + t + "”…", "aria-label": "Notes on " + t });
      const st = h("small", { class: "nstat" });
      const box = h("div", { class: "nbox" }, ta, st); box.hidden = true;
      const sync = () => {
        const d = !!S.done[key], s = !!S.saved[key], n = !!(S.notes[key] && S.notes[key].text);
        bDone.setAttribute("aria-pressed", String(d)); $(".sl", bDone).textContent = d ? "Studied" : "Mark studied";
        bSave.setAttribute("aria-pressed", String(s)); $(".si", bSave).textContent = s ? "★" : "☆"; $(".sl", bSave).textContent = s ? "Saved" : "Save";
        bNote.classList.toggle("has", n); sec.classList.toggle("studied", d);
      };
      bDone.addEventListener("click", () => {
        if (S.done[key]) delete S.done[key]; else { S.done[key] = Date.now(); if (window.__burst && !reduce) { const r = bDone.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top); } }
        save(); sync(); paintAll();
      });
      bSave.addEventListener("click", () => { if (S.saved[key]) delete S.saved[key]; else S.saved[key] = { t, p: P.nav, ts: Date.now() }; save(); sync(); paintAll(); });
      bNote.addEventListener("click", () => { box.hidden = !box.hidden; bNote.setAttribute("aria-pressed", String(!box.hidden)); if (!box.hidden) ta.focus(); });
      if (S.notes[key]) ta.value = S.notes[key].text;
      let tm;
      ta.addEventListener("input", () => {
        clearTimeout(tm); st.textContent = "Saving…";
        tm = setTimeout(() => { const v = ta.value.trim(); if (v) S.notes[key] = { text: ta.value, t, p: P.nav, ts: Date.now() }; else delete S.notes[key]; save(); sync(); paintAll(); st.textContent = v ? "Saved on this device" : ""; }, 400);
      });
      head.append(bar, box); sync();
    });
  }

  /* ---------- part progress in the banner ---------- */
  function bannerProgress() {
    const b = $("main .part-banner:not(.sub-banner) .wrap > div:last-child"); if (!b || !totals(P.f)) return;
    const bar = h("div", { class: "pprog" }, h("div", { class: "pbar" }, h("i", {})), h("span", { class: "ptxt" }));
    b.append(bar);
  }
  function paintBanner() {
    const bar = $(".pprog"); if (!bar) return;
    const t = totals(P.f), d = doneOn(P.f);
    $("i", bar).style.width = (t ? d / t * 100 : 0) + "%";
    $(".ptxt", bar).textContent = d ? `${d} of ${t} sections studied` : `${t} sections · mark each one as you study it`;
  }

  /* ---------- remember where the reader is ---------- */
  function trackLast() {
    const secs = $$("main section.block[id]").filter(s => INDEX.some(x => x.f === P.f && x.id === s.id));
    if (!secs.length || pid === "home") return;
    let tm;
    window.addEventListener("scroll", () => {
      clearTimeout(tm);
      tm = setTimeout(() => {
        let k = -1; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .4) k = i; });
        if (k < 0) return;
        S.last = { f: P.f, id: secs[k].id, t: title(P.f, secs[k].id), p: P.nav, ts: Date.now() }; save();
      }, 500);
    }, { passive: true });
  }

  /* ---------- My study drawer ---------- */
  let drawer, tabs = {}, activeTab = "progress";
  function buildDrawer() {
    const btn = $("#studyBtn"); if (!btn) return;
    drawer = h("aside", { class: "drawer", id: "studyDrawer", "aria-label": "My study", hidden: true },
      h("div", { class: "dr-head" }, h("h2", { text: "My study" }), h("button", { class: "dr-x", type: "button", "aria-label": "Close", text: "×", onclick: () => toggle(false) })),
      h("div", { class: "dr-tabs", role: "tablist" }, ...[["progress", "Progress"], ["review", "Review"], ["glossary", "Glossary"], ["saved", "Saved"], ["notes", "Notes"]].map(([k, n]) => (tabs[k] = h("button", { class: "tab", role: "tab", type: "button", "aria-selected": String(k === activeTab), text: n, onclick: () => { activeTab = k; renderDrawer(); } })))),
      h("div", { class: "dr-body", id: "drBody" }),
      h("p", { class: "dr-foot", text: "Progress, saves and notes stay in this browser on this device." }));
    const veil = h("div", { class: "dr-veil", hidden: true, onclick: () => toggle(false) });
    document.body.append(veil, drawer);
    function toggle(on) {
      drawer.hidden = veil.hidden = !on; btn.setAttribute("aria-expanded", String(on));
      requestAnimationFrame(() => { drawer.classList.toggle("open", on); veil.classList.toggle("open", on); });
      if (on) { renderDrawer(); $(".dr-x", drawer).focus(); } else btn.focus({ preventScroll: true });
    }
    btn.addEventListener("click", () => toggle(drawer.hidden));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !drawer.hidden) toggle(false); });
    window.__openStudy = tab => { if (tab) activeTab = tab; toggle(true); };
  }
  const href = key => { const [f, id] = key.split("#"); return f === P.f ? "#" + id : key; };
  function renderDrawer() {
    if (!drawer || drawer.hidden) return;
    Object.entries(tabs).forEach(([k, t]) => t.setAttribute("aria-selected", String(k === activeTab)));
    const body = $("#drBody"); body.replaceChildren();
    if (activeTab === "progress") {
      const all = INDEX.length, d = Object.keys(S.done).filter(k => INDEX.some(x => x.f + "#" + x.id === k)).length;
      body.append(h("div", { class: "dr-total" }, ring(all ? d / all : 0, 64), h("div", {}, h("b", { text: `${d} of ${all} sections studied` }), h("small", { text: `${Object.keys(S.saved).length} saved · ${Object.keys(S.notes).length} notes · ${Object.keys(S.known || {}).length}/${CARDS.length} verses` }))));
      if (S.last) body.append(h("a", { class: "dr-cont", href: href(S.last.f + "#" + S.last.id) }, h("small", { text: "Continue where you left off" }), h("b", { text: S.last.t }), h("span", { text: S.last.p })));
      body.append(h("ul", { class: "dr-parts" }, PAGES.filter(p => totals(p.f)).map(p => h("li", {}, h("a", { href: p.f === P.f ? "#top" : p.f }, ring(pct(p.f), 30), h("span", { text: p.nav }), h("small", { text: `${doneOn(p.f)}/${totals(p.f)}` + (S.quiz && S.quiz[p.id] ? ` · quiz ${S.quiz[p.id].best}/${S.quiz[p.id].of}` : "") }))))));
      if (d) body.append(h("button", { class: "linkish", type: "button", text: "Reset progress", onclick: () => { if (confirm("Clear all “studied” marks?")) { S.done = {}; save(); paintAll(); location.reload(); } } }));
    }
    if (activeTab === "review") {
      if (!CARDS.length) { body.append(h("p", { class: "dr-empty", text: "No memory verses found." })); return; }
      const known = CARDS.filter(c => S.known[c.r]).length;
      const queue = CARDS.filter(c => !S.known[c.r]);
      body.append(h("div", { class: "rv-meta" }, h("span", { text: `${known} of ${CARDS.length} verses known` }), known ? h("button", { class: "linkish", type: "button", text: "Start over", onclick: () => { S.known = {}; save(); renderDrawer(); } }) : null),
        h("div", { class: "rv-bar" }, h("i", { style: `width:${known / CARDS.length * 100}%` })));
      if (!queue.length) { body.append(h("div", { class: "rv-card" }, h("b", { text: "Every memory verse reviewed ✓" }), h("p", { text: "Well done. Start over any time to keep them fresh." }))); if (window.__burst && !reduce) { const r = drawer.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + 200); } return; }
      const c = queue[Math.floor(Math.random() * queue.length)];
      const verse = h("blockquote", { text: c.v }); verse.hidden = true;
      const acts = h("div", { class: "dr-actions" }); acts.hidden = true;
      const show = h("button", { class: "btn primary small", type: "button", text: "Show the verse", onclick: () => { verse.hidden = false; acts.hidden = false; show.hidden = true; } });
      acts.append(h("button", { class: "btn small", type: "button", text: "Got it ✓", onclick: () => { S.known[c.r] = Date.now(); save(); renderDrawer(); } }), h("button", { class: "btn small", type: "button", text: "Again ↻", onclick: () => renderDrawer() }));
      body.append(h("div", { class: "rv-card" }, h("small", { class: "eyebrow", text: c.p }), h("span", { class: "ref", text: c.r }), h("p", { class: "muted small", text: "Say the verse from memory, then check." }), verse, show, acts));
    }
    if (activeTab === "glossary") {
      const q = h("input", { type: "search", class: "gl-q", placeholder: `Search ${GLOSS.length} Hebrew and Greek words…`, "aria-label": "Search the glossary" });
      const list = h("ul", { class: "dr-list gl" });
      const draw = () => { const v = q.value.trim().toLowerCase(); list.replaceChildren(...GLOSS.filter(g => !v || (g.w + " " + g.t + " " + g.d).toLowerCase().includes(v)).map(g => h("li", {}, h("div", { class: "gl-item" }, h("b", { text: g.w }), h("span", { text: g.t }), h("p", { text: g.d }), h("small", { text: g.p }))))); };
      q.addEventListener("input", draw); body.append(q, list); draw(); setTimeout(() => q.focus(), 50); return;
    }
    if (activeTab === "saved") {
      const ks = Object.keys(S.saved).sort((a, b) => S.saved[b].ts - S.saved[a].ts);
      body.append(ks.length ? h("ul", { class: "dr-list" }, ks.map(k => h("li", {}, h("a", { href: href(k) }, h("b", { text: S.saved[k].t }), h("small", { text: S.saved[k].p })),
        h("button", { class: "dr-rm", type: "button", "aria-label": "Remove " + S.saved[k].t, text: "×", onclick: () => { delete S.saved[k]; save(); paintAll(); } }))))
        : h("p", { class: "dr-empty", text: "Select ☆ Save on any section to keep it here." }));
    }
    if (activeTab === "notes") {
      const ks = Object.keys(S.notes).sort((a, b) => S.notes[b].ts - S.notes[a].ts);
      if (!ks.length) { body.append(h("p", { class: "dr-empty", text: "Select ✎ Note on any section to write your thoughts. They appear here." })); return; }
      const text = ks.map(k => `${S.notes[k].p} — ${S.notes[k].t}\n${S.notes[k].text.trim()}\n`).join("\n");
      const copy = h("button", { class: "btn small", type: "button", text: "Copy all notes", onclick: async () => { try { await navigator.clipboard.writeText(text); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Copy not available"; } setTimeout(() => copy.textContent = "Copy all notes", 1800); } });
      const dl = h("button", { class: "btn small", type: "button", text: "Download .txt", onclick: () => { try { const a = h("a", { href: URL.createObjectURL(new Blob([text], { type: "text/plain" })), download: "my-study-notes.txt" }); document.body.append(a); a.click(); a.remove(); } catch (e) { /* download blocked */ } } });
      body.append(h("div", { class: "dr-actions" }, copy, dl), h("ul", { class: "dr-list notes" }, ks.map(k => h("li", {}, h("a", { href: href(k) }, h("b", { text: S.notes[k].t }), h("small", { text: S.notes[k].p }), h("p", { text: S.notes[k].text }))))));
    }
  }
  function paintBadge() {
    const b = $("#studyCount"); if (!b) return;
    const n = Object.keys(S.saved).length + Object.keys(S.notes).length; b.textContent = n || ""; b.hidden = !n;
  }

  /* ---------- home: journey map ---------- */
  function journey() {
    const host = $("#journeyMap"); if (!host) return;
    const parts = PAGES.filter(p => p.id !== "home");
    const W = 1000, H = 380, n = parts.length, top = Math.ceil(n / 2);
    const pts = parts.map((p, i) => i < top ? [80 + i * (780 / (top - 1)), 90] : [860 - (i - top) * (780 / Math.max(1, n - top - 1)), 280]);
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < n; i++) {
      const [x, y] = pts[i], [px, py] = pts[i - 1];
      d += py !== y ? ` C${px + 110} ${py} ${x + 110} ${y} ${x} ${y}` : ` L${x} ${y}`;
    }
    const svg = h("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Your journey through the study, with your progress in each part" });
    svg.append(h("path", { id: "jpath", d, fill: "none", stroke: "var(--line)", "stroke-width": 10, "stroke-linecap": "round" }), h("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "2 12", "stroke-linecap": "round", class: "flow" }));
    if (!reduce) { const dot = h("circle", { r: 8, fill: "var(--accent)" }); dot.append(h("animateMotion", { dur: "18s", repeatCount: "indefinite", path: d })); svg.append(dot); }
    const cols = ["var(--eden)", "var(--flame)", "var(--babel)", "var(--accent)", "var(--eden)", "var(--accent)", "var(--eden)", "var(--flame)", "var(--babel)"];
    parts.forEach((p, i) => {
      const [x, y] = pts[i], q = pct(p.f), r = 30, c = 2 * Math.PI * r;
      const [num, name] = p.nav.includes("·") ? p.nav.split("·").map(s => s.trim().replace("Part ", "")) : ["★", p.nav];
      const a = h("svga", { href: p.f, class: "jstop", "aria-label": `${p.nav}: ${Math.round(q * 100)}% studied` },
        h("circle", { cx: x, cy: y, r: 40, fill: "var(--surface)", stroke: cols[i % cols.length], "stroke-width": 3 }),
        h("circle", { cx: x, cy: y, r, fill: "none", stroke: "var(--line)", "stroke-width": 5 }),
        h("circle", { cx: x, cy: y, r, fill: "none", stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round", "stroke-dasharray": `${c * q} ${c}`, transform: `rotate(-90 ${x} ${y})` }),
        h("text", { x, y: y + 7, "text-anchor": "middle", "font-size": 20, "font-weight": 700, fill: "var(--ink)", class: "jnum" }, q >= 1 ? "✓" : num));
      const words = name.split(" "), half = Math.ceil(words.length / 2), two = name.length > 16;
      const ty = y < 200 ? y - 54 : y + 66;
      a.append(h("text", { x, y: ty - (two && y < 200 ? 16 : 0), "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, two ? words.slice(0, half).join(" ") : name));
      if (two) a.append(h("text", { x, y: ty + (y < 200 ? 0 : 16), "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, words.slice(half).join(" ")));
      svg.append(a);
    });
    host.append(svg);
    const side = $("#journeySide"); if (!side) return;
    const all = INDEX.length, dn = Object.keys(S.done).filter(k => INDEX.some(x => x.f + "#" + x.id === k)).length;
    side.append(h("div", { class: "dr-total" }, ring(all ? dn / all : 0, 64), h("div", {}, h("b", { text: dn ? `${dn} of ${all} sections studied` : `${all} sections to explore` }), h("small", { text: `${Object.keys(S.saved).length} saved · ${Object.keys(S.notes).length} notes` }))));
    side.append(S.last ? h("a", { class: "dr-cont", href: S.last.f + "#" + S.last.id }, h("small", { text: "Continue where you left off" }), h("b", { text: S.last.t }), h("span", { text: S.last.p }))
      : h("a", { class: "dr-cont", href: "garden.html" }, h("small", { text: "Start the journey" }), h("b", { text: "Part I · The Garden-Temple" }), h("span", { text: "Eden, the mountain of God and the first sanctuary" })));
    side.append(h("ol", { class: "howto" }, h("li", { text: "Open a part from the map or the Parts menu." }), h("li", { text: "Work through each interactive section." }), h("li", { text: "Mark it ✓ studied, ☆ save it or ✎ write a note." }), h("li", { text: "Review everything in My study." })));
    side.append(h("div", { class: "dr-actions" }, h("button", { class: "btn primary small", type: "button", text: "Open My study", onclick: () => window.__openStudy && window.__openStudy("progress") }), h("button", { class: "btn small", type: "button", text: `Review ${CARDS.length} memory verses`, onclick: () => window.__openStudy && window.__openStudy("review") })));
  }

  /* ---------- end-of-part self-check ---------- */
  const partOf = id => (id === "garden" || id === "babel") ? "core" : id;
  const quizFor = id => { try { return (typeof DATA !== "undefined" && DATA.quiz || []).filter(q => q.part === partOf(id)); } catch (e) { return []; } };
  function selfCheck() {
    const Q = quizFor(pid); const pager = $(".pager");
    if (Q.length < 2 || !pager || pid === "connections") return;
    const sec = h("section", { class: "block selfcheck", id: "selfcheck", "data-toc": "Check yourself" },
      h("div", { class: "wrap" }, h("div", { class: "sec-head" }, h("p", { class: "eyebrow", text: "Quick check · " + Q.length + " questions" }), h("h2", { text: "Check your understanding" }), h("p", { text: "A short quiz on this part. Your best score is saved in My study." })),
        h("div", { class: "sc-card", id: "scCard", "aria-live": "polite" })));
    pager.before(sec);
    let i = 0, score = 0, order = [];
    const card = $("#scCard");
    function start() { order = Q.map((q, k) => k).sort(() => Math.random() - .5); i = 0; score = 0; show(); }
    function show() {
      if (i >= order.length) return finish();
      const q = Q[order[i]];
      const opts = h("div", { class: "sc-opts" });
      const fb = h("div", { class: "sc-fb" });
      q.a.forEach((a, k) => opts.append(h("button", { class: "sc-opt", type: "button", text: a, onclick: () => {
        $$(".sc-opt", opts).forEach((b, j) => { b.disabled = true; b.classList.toggle("right", j === q.c); b.classList.toggle("wrong", j === k && k !== q.c); });
        if (k === q.c) { score++; if (window.__burst && !reduce) { const r = opts.children[k].getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top); } }
        fb.replaceChildren(h("p", { class: k === q.c ? "ok" : "no", text: (k === q.c ? "Correct. " : "Not quite. ") + (q.x || "") }), h("button", { class: "btn primary small", type: "button", text: i + 1 < order.length ? "Next question ▸" : "See my score ▸", onclick: () => { i++; show(); } }));
      } })));
      card.replaceChildren(h("div", { class: "rv-meta" }, h("span", { text: `Question ${i + 1} of ${order.length}` }), h("span", { text: `Score ${score}` })), h("div", { class: "rv-bar" }, h("i", { style: `width:${i / order.length * 100}%` })), h("h3", { text: q.q }), opts, fb);
    }
    function finish() {
      const best = Math.max(score, (S.quiz[pid] || {}).best || 0);
      S.quiz[pid] = { best, of: Q.length, ts: Date.now() }; save(); paintAll();
      card.replaceChildren(h("div", { class: "sc-done" }, ring(score / Q.length, 72), h("div", {}, h("b", { text: `You scored ${score} of ${Q.length}` }), h("p", { text: score === Q.length ? "Excellent: you have this part down." : "Review the sections you missed, then try again." }), h("small", { text: `Best: ${best} of ${Q.length}` }))),
        h("div", { class: "dr-actions" }, h("button", { class: "btn primary small", type: "button", text: "Try again", onclick: start }), h("button", { class: "btn small", type: "button", text: "Review memory verses", onclick: () => window.__openStudy && window.__openStudy("review") })));
    }
    start();
  }

  function paintAll() { paintBanner(); paintBadge(); paintRail(); renderDrawer(); }
  function start() {
    [selfCheck, partsMenu, sectionTools, bannerProgress, trackLast, buildDrawer, journey, paintAll].forEach(fn => { try { fn(); } catch (err) { console.error("study", fn.name, err); } });
    setTimeout(paintRail, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
