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
