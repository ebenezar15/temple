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
