/* Part XI: The heavenly host — a field guide to biblical angels */
DATA.an = {};

/* 1 · "Angel" is a job title */
DATA.an.messengers = [
  { who: "Jacob’s servants", ref: "Gen 32:3", kind: "human", d: "Jacob “sent messengers (malʾākîm) before him to Esau”: ordinary servants, called “angels” in Hebrew." },
  { who: "A king’s runner", ref: "1 Sam 11:3; 2 Kgs 9:18", kind: "human", d: "Royal couriers carrying news are malʾākîm." },
  { who: "The prophet Haggai", ref: "Hag 1:13", kind: "human", d: "“Haggai, the messenger (malʾak) of the LORD, spoke to the people.”" },
  { who: "“Malachi”", ref: "Mal 1:1; 3:1", kind: "human", d: "The name means “my messenger”. In 3:1 God promises, “I send my messenger to prepare the way.”" },
  { who: "John the Baptist", ref: "Mark 1:2; Luke 7:27", kind: "human", d: "The Gospels apply Malachi’s “messenger” (angelos) to John." },
  { who: "Gabriel", ref: "Luke 1:19", kind: "spirit", d: "“I am Gabriel. I stand in the presence of God, and I was sent to speak to you.”" },
  { who: "The angels at Sodom", ref: "Gen 19:1", kind: "spirit", d: "The “two angels” arrive looking so ordinary that the city takes them for travellers." }
];
DATA.an.titles = [
  { t: "Spirits", ref: "Heb 1:14; Ps 104:4", d: "“Are they not all ministering spirits sent out to serve?”" },
  { t: "Holy ones", ref: "Ps 89:5–7; Dan 4:13", d: "“Holy” means belonging to God’s presence, set apart for him." },
  { t: "The host of heaven", ref: "1 Kgs 22:19; Luke 2:13", d: "Army language. “The LORD of hosts” means the LORD of armies." },
  { t: "Morning stars", ref: "Job 38:7", d: "“When the morning stars sang together and all the sons of God shouted for joy.”" },
  { t: "Sons of God", ref: "Job 1:6; 38:7", d: "Royal-household language for the highest members of God’s court (bĕnê hāʾĕlōhîm)." },
  { t: "ʾĕlōhîm", ref: "Ps 82:1; 8:5", d: "A word for spirit beings in general. The LORD is “God of gods”: the Elohim above all elohim, in a class of his own." },
  { t: "The council", ref: "Ps 89:7; Jer 23:18", d: "“A God greatly to be feared in the council of the holy ones.” God enthroned, surrounded by his court." }
];

/* 2 · Field guide */
DATA.an.beings = [
  { id: "malak", n: "Messengers (malʾākîm, angeloi)", calledAngel: "yes", look: "Usually like ordinary men; occasionally dazzling (Matt 28:3).", job: "Carry God’s word, rescue, protect, announce.", refs: "Gen 18:2; 19:1; Heb 13:2; Luke 24:4", d: "The Bible’s “angels” proper. Abraham served three visitors lunch; Hebrews says some “have entertained angels unawares”. They are never clearly described with wings.", ctx: "In the ancient world any royal envoy was a messenger: his authority was his sender’s." },
  { id: "cherub", n: "Cherubim (kĕrûbîm)", calledAngel: "no", look: "Winged composite creatures; in Ezekiel four faces (human, lion, ox, eagle), straight legs, calves’ hooves, human hands.", job: "Guard God’s presence; carry his throne.", refs: "Gen 3:24; Exod 25:18–22; 1 Kgs 6:23–28; Ezek 1; 10", d: "Throne guardians, from the gate of Eden to the mercy seat and Solomon’s inner room.", ctx: "Like the Assyrian lamassu, the winged human-headed bulls and lions set in pairs at palace gates. The Hebrew kĕrûb is probably related to Akkadian kāribu, an intercessor-guardian figure." },
  { id: "seraph", n: "Seraphim (śĕrāpîm)", calledAngel: "no", look: "Six wings: two cover the face, two the feet, two fly. The same word means “fiery serpent” elsewhere.", job: "Guard the throne; worship (“Holy, holy, holy”); purify.", refs: "Isa 6:1–7; Num 21:6–9; Isa 14:29; 30:6", d: "The “burning ones” in Isaiah’s temple vision. One takes a coal from the altar to cleanse Isaiah’s lips.", ctx: "Egypt’s uraeus, the rearing winged cobra on Pharaoh’s crown, guarded kings by spitting fire. Judahite seals of Isaiah’s century show winged cobras." },
  { id: "ophan", n: "Wheels (ʾôpannîm)", calledAngel: "no (later: yes)", look: "Gleaming wheels within wheels, rims full of “eyes”, moving in any direction.", job: "Part of God’s throne-chariot; “the spirit of the living creatures was in the wheels”.", refs: "Ezek 1:15–21; 10:9–13; Dan 7:9", d: "In Scripture they are simply wheels. Later Jewish writings (1 Enoch 61:10; 71:7) and liturgy promote them to a rank of angels; the internet made them a meme.", ctx: "The word ʿayin, “eye”, can also mean “gleam” or “sparkle”: the rims may be studded with lights." },
  { id: "living", n: "The four living creatures", calledAngel: "no", look: "Lion, ox, man, flying eagle; six wings; full of eyes.", job: "Day and night: “Holy, holy, holy is the Lord God Almighty.”", refs: "Rev 4:6–8; 5:8–14", d: "Revelation gathers Ezekiel’s faces, Isaiah’s six wings and the wheels’ eyes around one throne.", ctx: "From the second century, Christians linked the four faces to the four Gospels (Irenaeus; later Jerome)." },
  { id: "prince", n: "Princes and archangels", calledAngel: "yes", look: "Not described; Gabriel appears “like a man” (Dan 9:21).", job: "Rule or fight over nations; Michael is “prince” of Israel.", refs: "Dan 10:13, 20–21; 12:1; Jude 9; 1 Thess 4:16; Rev 12:7", d: "Daniel reveals princes over Persia and Greece, opposed by Michael, “one of the chief princes”. Archangel means chief or ruling messenger.", ctx: "This fits Deuteronomy 32:8–9: the nations under heavenly beings, Israel as the LORD’s own portion." },
  { id: "watcher", n: "Watchers (ʿîrîn)", calledAngel: "no", look: "Not described; “a watcher, a holy one, came down from heaven”.", job: "Members of the heavenly council who issue decrees.", refs: "Dan 4:13, 17, 23", d: "Good in Daniel. In 1 Enoch’s Book of the Watchers the name passes to the fallen sons of God of Genesis 6.", ctx: "The word likely means “wakeful ones”. Some scholars compare Mesopotamian guardian spirits, though the link is uncertain." },
  { id: "angelLord", n: "The angel of the LORD", calledAngel: "yes", look: "In fire, as a man, as a commander.", job: "Speaks and acts as God himself.", refs: "Exod 3:2–6; 23:20–21; Judg 13:21–22; Josh 5:13–15", d: "A messenger who speaks as God: “I am the God of Abraham.” “My name is in him.” Many Christians since the early church have seen here the Son before his incarnation.", ctx: "Later Jewish debates about “two powers in heaven” wrestled with figures like this." },
  { id: "powers", n: "Thrones, dominions, rulers, authorities", calledAngel: "—", look: "Not described: titles of government.", job: "Created to govern for God; some rebelled; all are now under Christ.", refs: "Col 1:16; 2:15; Eph 1:21; 6:12; 1 Pet 3:22", d: "Paul’s words for spiritual governments. He never ranks them: his point is that Christ made them, is above them, and has defeated the rebels.", ctx: "The same Greek words described human officials over regions. See Part VIII." }
];

/* 3 · Cherubim through Scripture */
DATA.an.cherubLine = [
  { t: "At Eden’s gate", ref: "Gen 3:24", d: "Cherubim and a flaming, turning sword guard the way to the tree of life." },
  { t: "On the mercy seat", ref: "Exod 25:18–22", d: "Two golden cherubim face each other over the ark: “There I will meet with you.”" },
  { t: "Woven into the veil", ref: "Exod 26:31", d: "Cherubim on the curtain screen the most holy place (see Part IX·b)." },
  { t: "Solomon’s giants", ref: "1 Kgs 6:23–28", d: "Two olive-wood cherubim overlaid with gold, each 10 cubits (about 15 ft) tall; their wings spanned the 20-cubit room wall to wall." },
  { t: "“Enthroned on the cherubim”", ref: "1 Sam 4:4; Ps 80:1; Ps 18:10", d: "God’s title. “He rode on a cherub and flew.”" },
  { t: "Ezekiel’s chariot", ref: "Ezek 1; 10:20", d: "“I knew that they were cherubim”: four faces, carrying the throne." },
  { t: "Around the throne", ref: "Rev 4:6–8", d: "The living creatures of Revelation echo them, worshipping forever." }
];

/* 4 · Four faces: three readings */
DATA.an.faces = [
  { id: "man", n: "Man", sky: "Aquarius, the water-bearer", greatest: "Crown of creation", gospel: "Matthew (begins with the human genealogy)" },
  { id: "lion", n: "Lion", sky: "Leo", greatest: "King of wild beasts", gospel: "Mark (in Jerome’s scheme; John in Irenaeus’s)" },
  { id: "ox", n: "Ox", sky: "Taurus", greatest: "Strongest of domestic animals", gospel: "Luke (begins with priestly sacrifice in the temple)" },
  { id: "eagle", n: "Eagle", sky: "the region of Scorpio and Aquila", greatest: "King of birds", gospel: "John (soaring theology; Mark in Irenaeus’s)" }
];
DATA.an.faceReadings = [
  { k: "greatest", t: "The greatest of creatures", tag: "widely held", d: "A rabbinic tradition says the four represent the proudest of each realm: man among creatures, lion among wild animals, ox among domestic animals and eagle among birds. All of creation bows at God’s throne." },
  { k: "sky", t: "The four quarters of the heavens", tag: "speculative", d: "Ezekiel saw this in Babylon, home of star-watching. Some scholars note that lion, bull, man and eagle line up with constellations marking the four quarters of the sky. If so, the message is that Babylon’s heavens are the LORD’s chariot. Later synagogues laid zodiac mosaics with a similar point. Attractive, but unproven." },
  { k: "gospel", t: "The four Gospels", tag: "church tradition", d: "From Irenaeus (c. 180) onward, Christians read the four creatures as the four Gospels; Jerome’s pairing (Matthew man, Mark lion, Luke ox, John eagle) became standard in Christian art." }
];

/* 5 · Wheels: from vehicle to angel to meme */
DATA.an.wheelLine = [
  { t: "Wheels of a throne-chariot", ref: "Ezek 1:15–21", d: "Ofan just means wheel. Wheels within wheels, rims “full of eyes”, moving with the creatures." },
  { t: "A throne with burning wheels", ref: "Dan 7:9", d: "“His throne was fiery flames; its wheels were burning fire.”" },
  { t: "Promoted to a rank of angels", ref: "1 Enoch 61:10; 71:7", d: "The Similitudes of Enoch list “the cherubim, seraphim and ophanim” as watchful beings who never sleep." },
  { t: "Sung in synagogue prayer", ref: "Morning service", d: "“The ophanim and the holy living creatures, with a great sound, rise toward the seraphim.” Jewish mysticism meditated on Ezekiel’s merkavah (chariot)." },
  { t: "“Biblically accurate angels”", ref: "Internet, 2020s", d: "Memes call the eye-covered wheels angels. The Bible never does: they are part of God’s throne." }
];

/* 6 · Seraph: burning serpent */
DATA.an.seraphLine = [
  { t: "Fiery serpents in the wilderness", ref: "Num 21:6–9", d: "“The LORD sent fiery serpents (nĕḥāšîm śĕrāpîm).” Moses makes a bronze śārāp on a pole; whoever looks lives. Jesus applies it to his cross (John 3:14)." },
  { t: "A flying fiery serpent", ref: "Isa 14:29; 30:6", d: "Isaiah twice uses śārāp mĕʿôpēp: a flying, winged serpent." },
  { t: "The uraeus", ref: "Egyptian royal art", d: "A rearing cobra, hood spread like wings, on Pharaoh’s brow; it guarded king and gods by spitting fire. Spitting cobras really do spray burning venom." },
  { t: "Winged cobras on Judah’s seals", ref: "8th century BC", d: "Hebrew seals from Isaiah’s era show winged uraei: guardians Isaiah’s hearers would recognise." },
  { t: "Seraphim around God’s throne", ref: "Isa 6:1–7", d: "The fiercest guardians cover their faces before God, cry “Holy, holy, holy”, and one carries a coal that cleanses rather than destroys." }
];

/* 7 · How ideas about angels grew */
DATA.an.growth = [
  { era: "Before the exile", t: "Mostly unnamed", ref: "Gen 18; Isa 6", d: "Messengers who look like men; cherubim and seraphim at the throne. No angel has a name." },
  { era: "Exile (6th c. BC)", t: "Names appear", ref: "Dan 8–12", d: "Gabriel and Michael, princes of nations, watchers. A rabbi later remarked, “The names of the angels came up with them from Babylon” (Jerusalem Talmud, Rosh Hashanah 1:2)." },
  { era: "3rd c. BC – 1st c. AD", t: "1 Enoch", ref: "1 Enoch 6–16; 20", d: "The Book of the Watchers: 200 watchers led by Shemihazah and Azazel descend on Mount Hermon, father the giants, teach forbidden arts. Seven holy angels named: Uriel, Raphael, Raguel, Michael, Sariel, Gabriel, Remiel. Jude 14–15 quotes 1 Enoch 1:9." },
  { era: "c. 200 BC", t: "Tobit", ref: "Tobit 3–12", d: "Raphael travels in disguise as “Azariah”, has Tobias catch a fish whose heart and liver drive off the demon Asmodeus and whose gall heals Tobit’s blindness: “one of the seven holy angels who present the prayers of the saints” (12:15; compare Rev 8:2)." },
  { era: "2nd c. BC", t: "Jubilees", ref: "Jubilees 2:2", d: "Angels created on day one, assigned to winds, clouds, snow, hail, frost, thunder and the seasons." },
  { era: "1st c. BC – AD", t: "Dead Sea Scrolls", ref: "4Q400–407; 1QM 9", d: "Angels as priests in a heavenly temple (Songs of the Sabbath Sacrifice); in the War Scroll the names Michael, Gabriel, Sariel and Raphael are written on the shields of the towers." },
  { era: "New Testament", t: "Pulled back", ref: "Heb 1; Col 2:18; Rev 22:9", d: "Only Michael and Gabriel named; angels are servants; the Son is far above them. No angel worship." },
  { era: "c. AD 500", t: "Nine choirs", ref: "Pseudo-Dionysius", d: "“The Celestial Hierarchy” arranges nine ranks in three triads. Its author borrowed the name of Paul’s convert Dionysius (Acts 17:34)." },
  { era: "Renaissance", t: "Putti become “cherubs”", ref: "Raphael, 1512", d: "Roman winged babies (putti) fill religious art; Raphael’s two at the foot of the Sistine Madonna become the world’s favourite “cherubs”." },
  { era: "Today", t: "Memes", ref: "“Be not afraid”", d: "Eye-covered wheels go viral as “biblically accurate angels”: half right, half wrong." }
];

/* 8 · Nine choirs */
DATA.an.choirs = {
  dionysius: ["Seraphim", "Cherubim", "Thrones", "Dominions", "Virtues", "Powers", "Principalities", "Archangels", "Angels"],
  gregory: ["Seraphim", "Cherubim", "Thrones", "Dominions", "Principalities", "Powers", "Virtues", "Archangels", "Angels"],
  source: { Seraphim: "Isa 6", Cherubim: "Ezek 1; 10", Thrones: "Col 1:16", Dominions: "Col 1:16; Eph 1:21", Virtues: "Eph 1:21 (Latin virtutes = dynameis, powers)", Powers: "Eph 1:21; Col 2:15", Principalities: "Eph 6:12; Col 1:16", Archangels: "Jude 9; 1 Thess 4:16", Angels: "throughout" }
};

/* 9 · Myths */
DATA.an.myths = [
  { m: "People become angels when they die.", t: "Humans and angels are different beings. In the resurrection we are “like the angels” in not marrying (Matt 22:30), and believers will even “judge angels” (1 Cor 6:3). Angels “long to look” into the gospel (1 Pet 1:12)." },
  { m: "Angels have wings.", t: "The messengers never clearly do. Daniel 9:21’s “swift flight” is uncertain Hebrew. The winged beings are cherubim and seraphim, which are never called angels." },
  { m: "Cherubs are chubby babies.", t: "Biblical cherubim are towering throne guardians. The babies are Renaissance putti, borrowed from Roman Cupids." },
  { m: "The eye-covered wheels are angels.", t: "Ezekiel calls them wheels (ʾôpannîm), part of God’s throne. Later Jewish tradition made them a rank of angels." },
  { m: "We should pray to angels or worship them.", t: "Paul warns against “worship of angels” (Col 2:18). When John bows, the angel says, “Do not do that! I am a fellow servant … Worship God” (Rev 22:8–9)." },
  { m: "Medieval scholars debated angels on a pinhead.", t: "No medieval text asks it. The jibe appears in the 1600s (William Chillingworth, 1638) to mock scholastics, though Aquinas did ask whether several angels can be in one place (Summa I, q. 52, a. 3)." },
  { m: "Everyone has exactly one guardian angel.", t: "Scripture hints that angels watch over God’s people (Matt 18:10; Acts 12:15; Ps 91:11; Heb 1:14) but never says how many or how." },
  { m: "There are exactly nine ranks of angels.", t: "The names are biblical; the ladder is from about AD 500, and even the church disagreed on the order." }
];

/* 10 · Fact-check of the source video against other sources */
DATA.an.review = [
  { c: "Hebrew malʾāk and Greek angelos simply mean “messenger”, and are used of humans too.", v: "ok", n: "Correct. Gen 32:3; Hag 1:13; Mal 3:1; Mark 1:2. Standard lexicons (BDB, BDAG) agree." },
  { c: "Only two angels are named in the Protestant Bible: Michael and Gabriel.", v: "nuance", n: "True of God’s faithful angels. But Revelation 9:11 names “the angel of the bottomless pit”: Abaddon / Apollyon. “Lucifer” is a Latin rendering of “day star” in Isaiah 14:12, not an angel’s name in Hebrew." },
  { c: "The beings called angels are never described with wings, except perhaps Daniel 9:21.", v: "nuance", n: "Largely correct. The Hebrew of Dan 9:21 (muʿāp bîʿāp) is disputed. Revelation has angels “flying” (14:6) without mentioning wings. Zechariah 5:9 has winged women, not called angels." },
  { c: "Cherubim resemble Assyrian lamassu, and kĕrûb relates to Akkadian kāribu.", v: "ok", n: "The composite-guardian comparison is mainstream. The etymology is probable but debated. Lamassu stand about 4 m (13–14 ft) tall and weigh tens of tons." },
  { c: "Solomon’s cherubim were 10 cubits tall, wings 5 cubits each, spanning the room.", v: "ok", n: "1 Kgs 6:23–28. A cubit is roughly 45 cm (18 in), so about 15 ft tall, a 30 ft span across a 20-cubit room." },
  { c: "Ezekiel’s four faces match Babylonian constellations; the wheels resemble star charts.", v: "spec", n: "Speculative, as the video admits. Other strong readings: “the greatest of creatures” (rabbinic) and later the four Gospels. Treat the zodiac link as possible background, not the meaning." },
  { c: "In Ezekiel 10:14 the ox face becomes “the face of a cherub”.", v: "ok", n: "That is the Hebrew text. Interestingly, the oldest Greek translation (Septuagint) lacks verse 14 altogether, which suggests scribes noticed the puzzle." },
  { c: "Seraph means both “burning” and “serpent”; compare Egypt’s uraeus and winged cobras on Judahite seals.", v: "ok", n: "Num 21:6–8; Isa 14:29; 30:6. Widely held in commentaries and iconography studies (for example Othmar Keel). How many wings the seals show varies; some depict four." },
  { c: "Ophanim became a class of angels in 1 Enoch and in Jewish prayer.", v: "ok", n: "1 Enoch 61:10; 71:7. The morning Kedushah: “the ophanim and the holy creatures … rise toward the seraphim.”" },
  { c: "A rabbi said “the names of the angels came up with them from Babylon”.", v: "ok", n: "Resh Lakish, Jerusalem Talmud, Rosh Hashanah 1:2 (also Genesis Rabbah 48:9)." },
  { c: "1 Enoch dates from the 3rd century BC to the 1st century; Jude quotes it; chapter 20 names seven archangels.", v: "ok", n: "Jude 14–15 quotes 1 Enoch 1:9. The seventh name, Remiel, appears in the Greek text of 1 Enoch 20." },
  { c: "Babylonian guardian figurines buried under houses were called “watchers”.", v: "spec", n: "Apotropaic figurines were indeed buried under thresholds. Linking their names to Daniel’s ʿîr is a scholarly suggestion, not settled." },
  { c: "Tobit: Raphael, the fish, Asmodeus, and “one of the seven holy angels”.", v: "ok", n: "Tobit 3–12; 12:15. Compare Revelation 8:2, “the seven angels who stand before God”." },
  { c: "Pseudo-Dionysius (c. 500) invented the nine choirs; Gregory ordered them differently; Dante has Gregory smile at his mistake.", v: "ok", n: "Celestial Hierarchy; Gregory, Homily 34 on the Gospels; Dante, Paradiso 28.133–135. Dante had followed Gregory’s order earlier, in the Convivio." },
  { c: "“Angels on a pinhead” was never a medieval debate.", v: "ok", n: "The phrase appears in the 1600s, notably William Chillingworth (1638). Nuance: Aquinas did discuss whether several angels can occupy one place (Summa I, q. 52, a. 3)." },
  { c: "Ezekiel was 30 in 593 BC; Uzziah died in 740 BC after a reign of about 50 years.", v: "nuance", n: "Ezek 1:1–2 fits 593 BC. Uzziah reigned 52 years (2 Kgs 15:2), probably including a co-regency; his death is dated about 740/739 BC." },
  { c: "Humans don’t become angels; angels aren’t to be worshipped; guardian angels are hinted at.", v: "ok", n: "Matt 22:30; 1 Cor 6:3; Col 2:18; Rev 22:8–9; Matt 18:10; Acts 12:15." }
];
DATA.an.missing = [
  ["Angels and the giving of the law", "Acts 7:53; Gal 3:19; Heb 2:2", "The law was “delivered by angels”: a major New Testament theme the overview skips."],
  ["Angels worship the Son", "Heb 1:6; Rev 5:11–12", "“Let all God’s angels worship him”: the climax of Hebrews 1."],
  ["Twelve legions", "Matt 26:53", "Jesus could summon “more than twelve legions of angels”, yet chose the cross."],
  ["Fallen angels", "2 Pet 2:4; Jude 6; Rev 12:9", "The darker side of the host, promised for a later video."],
  ["Angels rejoice and learn", "Luke 15:10; Eph 3:10", "Joy over one sinner who repents; the church displays God’s wisdom to heavenly powers."],
  ["Angels at the end", "Matt 13:41, 49; 2 Thess 1:7", "Angels gather the harvest and accompany Christ’s appearing."]
];

/* 11 · Angels in the life of Jesus */
DATA.an.jesus = [
  { t: "Announcing", ref: "Luke 1:26–38; Matt 1:20", d: "Gabriel to Mary; an angel to Joseph in a dream." },
  { t: "Singing", ref: "Luke 2:9–14", d: "A “multitude of the heavenly host”, an army, praising God over the shepherds." },
  { t: "Ministering", ref: "Matt 4:11", d: "After the temptations, “angels came and were ministering to him”." },
  { t: "Strengthening", ref: "Luke 22:43", d: "In Gethsemane “an angel from heaven” strengthened him." },
  { t: "Waiting", ref: "Matt 26:53", d: "Twelve legions at his call, refused for our sake." },
  { t: "Announcing again", ref: "Matt 28:2–7", d: "Dazzling at the tomb: “He is not here, for he has risen.”" },
  { t: "Promising", ref: "Acts 1:10–11", d: "Two men in white at the ascension: “This Jesus … will come in the same way.”" },
  { t: "Returning", ref: "2 Thess 1:7; Matt 25:31", d: "“The Lord Jesus is revealed from heaven with his mighty angels.”" }
];

DATA.an.objections = [
  { k: "serious", q: "“If later Jewish books shaped ideas about angels, the Bible’s angels are just borrowed mythology.”", refs: "Acts 17:28; Jude 14–15; Ps 29:1",
    not: "No one denies that biblical writers used images their world understood.",
    a: "Scripture often takes familiar images, such as palace guardians, a royal cobra or a council of gods, and re-centres them on the LORD: the guardians cover their faces before him. Using a culture’s language is not the same as borrowing its theology. The New Testament is notably restrained compared with the books around it." },
  { k: "straw", q: "“Talking about angels distracts from Jesus.”", refs: "Heb 1:1–14; Col 1:16",
    not: "Obsession with angels can indeed distract.",
    a: "Hebrews talks about angels precisely to exalt Jesus above them. Understanding the heavenly host shows how great the Son is, and how wonderful it is that he took on human flesh, not angelic nature (Heb 2:16)." },
  { k: "serious", q: "“Books like 1 Enoch should be in the Bible, since Jude quotes it.”", refs: "Jude 14; Acts 17:28; Titus 1:12",
    not: "1 Enoch is valuable for understanding the New Testament world.",
    a: "Quoting a book does not make it Scripture: Paul quotes Greek poets too. Jude cites a true prophecy within Enoch. The Ethiopian Orthodox Church does include 1 Enoch; most traditions read it as important background, not canon." }
];
DATA.an.study = [
  { t: "The heavenly host", q: ["Which surprised you most: that “angel” is a job title, or that the winged beings are never called angels?", "Read Isaiah 6 slowly. What does it mean that even seraphim cover their faces?"] },
  { t: "Review", q: ["Pick one claim from the fact-check that was marked “speculative”. What would make it more or less convincing?", "How does Hebrews 1 keep angels in their place, and why does that matter for worship?"] }
];
DATA.an.memory = [
  ["Hebrews 1:14", "“Are they not all ministering spirits sent out to serve for the sake of those who are to inherit salvation?”"],
  ["Isaiah 6:3", "“Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!”"],
  ["Revelation 22:9", "“You must not do that! I am a fellow servant with you … Worship God.”"]
];
DATA.quiz.push(
  { q: "What does the Hebrew word malʾāk, usually translated “angel”, mean?", a: ["Winged one", "Messenger", "Holy one", "Star"], c: 1, x: "It is a job title: a messenger, used for humans and spirits alike." },
  { q: "In Ezekiel 10, what does Ezekiel say the four-faced living creatures are?", a: ["Seraphim", "Watchers", "Cherubim", "Ophanim"], c: 2, x: "“I knew that they were cherubim” (Ezek 10:20)." },
  { q: "What did the angel tell John when he fell down to worship him?", a: ["“Rise and follow me”", "“Do not do that … Worship God”", "“Ask, and it will be given”", "“Fear not, I am your guardian”"], c: 1, x: "Revelation 22:9: “I am a fellow servant with you … Worship God.”" }
);
DATA.web.nodes.push({ id: "angels", n: "The heavenly host", g: 4, d: "Messengers, cherubim, seraphim, wheels and powers: a field guide to the beings around God’s throne." });
DATA.web.edges.push(
  ["angels", "serpent", "Seraphim: the burning serpents (Num 21; Isa 6)"],
  ["angels", "tabernacle", "Cherubim on the ark and the veil"],
  ["angels", "warfare", "Princes of nations and Paul’s powers"],
  ["angels", "jesus", "Far above the angels (Heb 1)"]
);
Object.assign(DATA.images, {
  lamassu: { file: "Human_headed_winged_bull_facing.jpg", cap: "Human-headed winged bull (lamassu) from the palace of Sargon II at Khorsabad, about 710 BC, Louvre: the kind of throne guardian ancient readers pictured as cherubim.", ar: "3/4", art: "temple" },
  sistine: { file: "RAFAEL_-_Madonna_Sixtina_(Gemäldegalerie_Alter_Meister,_Dresden,_1513-14._Óleo_sobre_lienzo,_265_x_196_cm).jpg", cap: "Raphael, <i>Sistine Madonna</i> (1512–13), Dresden. The two winged infants at the bottom became the world’s favourite “cherubs”.", ar: "3/4", art: "star" },
  ezekiel: { file: "Ezekiel's_vision.jpg", cap: "An early modern engraving of Ezekiel’s vision of the throne-chariot: living creatures, wheels within wheels and the throne above (Ezek 1).", ar: "4/3", art: "web" }
});

DATA.an.glossary = [
  { w: "malʾāk", t: "Messenger, angel", d: "Hebrew job title for anyone sent with a message, human or heavenly (Gen 32:3; Hag 1:13)." },
  { w: "angelos", t: "Messenger, angel", d: "The Greek equivalent; source of the English word “angel”." },
  { w: "kĕrûb", t: "Cherub", d: "A winged throne guardian (Gen 3:24; Exod 25:18–22), probably related to Akkadian kāribu." },
  { w: "śārāp", t: "Seraph; fiery serpent", d: "From “to burn”; used of the fiery serpents (Num 21:6) and the six-winged beings of Isaiah 6." },
  { w: "ʾôpan", t: "Wheel", d: "The wheels of Ezekiel’s throne-chariot (Ezek 1:15); later a rank of angels (ophanim)." },
  { w: "ḥayyôt", t: "Living creatures", d: "Ezekiel’s four-faced beings (Ezek 1:5), identified as cherubim (10:20)." },
  { w: "ʿîr", t: "Watcher", d: "Aramaic “wakeful one”, a holy member of the heavenly council (Dan 4:13, 17)." },
  { w: "ṣĕbāʾôt", t: "Hosts, armies", d: "As in “the LORD of hosts”: the LORD of heaven’s armies." },
  { w: "bĕnê hāʾĕlōhîm", t: "Sons of God", d: "The highest members of God’s heavenly household (Job 1:6; 38:7)." }
];
if (DATA.sn && DATA.sn.hub) DATA.sn.hub.push({ n: "XI", t: "The Heavenly Host", f: "angels.html", c: "accent", d: "Cherubim, seraphim and every heavenly being are gathered around one throne, worshipping the One who sums up all things (Rev 4–5)." });
