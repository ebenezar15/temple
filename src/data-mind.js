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
