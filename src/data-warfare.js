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
