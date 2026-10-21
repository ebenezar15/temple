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
