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
