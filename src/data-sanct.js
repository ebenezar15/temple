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
