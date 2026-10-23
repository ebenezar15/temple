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
