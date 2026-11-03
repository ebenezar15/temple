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
