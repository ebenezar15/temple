/* Part VIII·e: far above all — enemies under his feet */
DATA.fa = {};

/* Ephesians 1:19 — four words of power */
DATA.fa.power = [
  { w: "dynamis", t: "Power", v: 78, d: "Inherent ability: the capacity to act. The word behind “dynamite” and “dynamic”." },
  { w: "energeia", t: "Working", v: 88, d: "Power in operation: energy actually at work. “According to the working of his great might.”" },
  { w: "kratos", t: "Might", v: 94, d: "Mastery and dominion: power that prevails over resistance." },
  { w: "ischys", t: "Strength", v: 100, d: "Strength possessed, like muscle. Paul piles up all four words to describe the power that raised Christ, now “toward us who believe”." }
];

/* Ephesians 1:21 — what Christ is far above */
DATA.fa.above = [
  { gk: "archē", t: "All rule", d: "First place, rank and rulership: every ruling power, visible or invisible (Col 2:15)." },
  { gk: "exousia", t: "Authority", d: "Every claimed right to command. Christ holds “all authority in heaven and on earth” (Matt 28:18)." },
  { gk: "dynamis", t: "Power", d: "Every force or ability, spiritual or natural, that could oppose God’s purpose." },
  { gk: "kyriotēs", t: "Dominion", d: "Lordship: every realm that claims to be lord. “Jesus is Lord” settles it (Phil 2:9–11)." },
  { gk: "onoma", t: "Every name that is named", d: "Every title, name and reputation invoked in spells, empires and ideologies, “not only in this age but also in the one to come”." }
];

/* Head, body, feet — Ephesians 1:22–23 */
DATA.fa.headFeet = [
  { id: "head", t: "Christ the head, seated far above", ref: "Eph 1:20–22; Col 1:18", d: "Raised by the Father and seated at his right hand. The head directs, decides and gives life." },
  { id: "body", t: "The church, his body and fullness", ref: "Eph 1:23; 1 Cor 12:27", d: "“The church, which is his body, the fullness of him who fills all in all.” Heaven’s head has an earthly body." },
  { id: "feet", t: "The feet are part of the body", ref: "Eph 1:22; Rom 16:20; Luke 10:19", d: "God “put all things under his feet” and gave him as head “to the church, which is his body”. The feet are where the body stands. “The God of peace will soon crush Satan under your feet.”" },
  { id: "under", t: "All things under his feet", ref: "Ps 8:6; Heb 2:8–9; 1 Cor 15:27", d: "Psalm 8 gave Adam this dominion; Christ the last Adam has won it back. “At present, we do not yet see everything in subjection to him. But we see Jesus … crowned.”" }
];

/* Psalm 110:1 — sit … until */
DATA.fa.until = [
  { t: "“Sit at my right hand”", ref: "Ps 110:1; Acts 2:32–36; Heb 1:3", d: "The most quoted Old Testament verse in the New. At the ascension the Son sat down, his work of atonement finished.", at: 0 },
  { t: "“Until I make your enemies”", ref: "Heb 10:12–13; 1 Cor 15:25", d: "“He sat down at the right hand of God, waiting from that time until his enemies should be made a footstool.” “He must reign until he has put all his enemies under his feet.” The reign is now; the subduing is progressive.", at: 1 },
  { t: "“Your footstool”", ref: "Josh 10:24–25; Ps 110:2–3", d: "Joshua had his commanders put their feet on the necks of the defeated kings: “Do not be afraid … for thus the LORD will do to all your enemies.” “Rule in the midst of your enemies! Your people will offer themselves freely.”", at: 2 },
  { t: "“The last enemy … death”", ref: "1 Cor 15:24–28, 54–57", d: "“Then comes the end, when he delivers the kingdom to God the Father after destroying every rule and every authority and power.” Death is swallowed up in victory, and God is “all in all”.", at: 3 }
];

/* Enemies to be subdued: defeated (cross) → subdued (body) → destroyed (end) */
DATA.fa.enemies = [
  { id: "sin", n: "Sin", icon: "M-10 -10 L10 10 M10 -10 L-10 10", defeated: "Condemned in the flesh of Christ (Rom 8:3); its dominion broken (Rom 6:6, 14).", body: "Count yourselves dead to sin; offer your members to God; confess and walk in the light (Rom 6:11–13; 1 John 1:7).", end: "No more sin in the city of God (Rev 21:27)." },
  { id: "flesh", n: "The flesh", icon: "M-12 6 Q0 -16 12 6 Z", defeated: "“Those who belong to Christ Jesus have crucified the flesh” (Gal 5:24).", body: "Walk by the Spirit; put to death the deeds of the body (Gal 5:16; Rom 8:13).", end: "Bodies raised imperishable and spiritual (1 Cor 15:42–44)." },
  { id: "world", n: "The world system", icon: "M0 -12 A12 12 0 1 0 0.1 -12 M-12 0 H12", defeated: "“Take heart; I have overcome the world” (John 16:33).", body: "Do not be conformed; overcome by faith; build counter-cultures of the kingdom (Rom 12:2; 1 John 5:4).", end: "The kingdom of the world becomes the kingdom of our Lord (Rev 11:15)." },
  { id: "satan", n: "Satan and the powers", icon: "M-12 8 Q-12 -14 0 -14 Q12 -14 12 8 L6 2 L0 10 L-6 2 Z", defeated: "Disarmed and shamed at the cross (Col 2:15); the strong man bound (Matt 12:29).", body: "Resist; stand in the armour; cast out demons; pray (Jas 4:7; Eph 6:10–18; Mark 16:17).", end: "Thrown into the lake of fire (Rev 20:10)." },
  { id: "lies", n: "Lies and strongholds", icon: "M-12 10 V-6 H-4 V-12 H4 V-6 H12 V10 Z", defeated: "Christ is the truth; the father of lies is exposed (John 14:6; 8:44).", body: "Demolish arguments; take every thought captive; teach and preach the truth (2 Cor 10:4–5).", end: "Every knee bows and every tongue confesses (Phil 2:10–11)." },
  { id: "fear", n: "Fear", icon: "M0 -12 L12 10 H-12 Z M0 -3 V3", defeated: "Through death he delivered those who were in lifelong slavery to the fear of death (Heb 2:14–15).", body: "Cast out fear by perfect love; receive the Spirit of power, love and self-control (1 John 4:18; 2 Tim 1:7).", end: "Nothing to fear: “they shall see his face” (Rev 22:4)." },
  { id: "curse", n: "The curse", icon: "M-12 -4 Q0 -14 12 -4 M-12 4 Q0 14 12 4", defeated: "Christ became a curse for us (Gal 3:13).", body: "Break curses in his name, bless instead of cursing, restore what was cursed (Rom 12:14; Isa 61:4).", end: "“No longer will there be anything accursed” (Rev 22:3)." },
  { id: "sickness", n: "Sickness", icon: "M-4 -12 H4 V-4 H12 V4 H4 V12 H-4 V4 H-12 V-4 H-4 Z", defeated: "“He took our illnesses and bore our diseases” (Matt 8:17; Isa 53:4–5).", body: "Pray for the sick, lay on hands, anoint, use medicine, show mercy (Jas 5:14–16; Mark 16:18).", end: "“Neither shall there be mourning, nor crying, nor pain” (Rev 21:4)." },
  { id: "injustice", n: "Injustice and oppression", icon: "M-12 -8 H12 M0 -12 V12 M-12 -8 L-16 4 H-8 Z M12 -8 L8 4 H16 Z", defeated: "Jesus announced liberty to captives and the oppressed (Luke 4:18–19).", body: "Do justice, love mercy, defend the poor, break every yoke (Mic 6:8; Isa 58:6–7).", end: "He judges the nations in righteousness (Ps 96:13; Isa 11:4)." },
  { id: "division", n: "Division and hostility", icon: "M-12 0 H-3 M3 0 H12 M-3 -8 V8 M3 -8 V8", defeated: "“He himself is our peace … has broken down … the dividing wall of hostility” (Eph 2:14–16).", body: "Maintain the unity of the Spirit; reconcile; welcome one another (Eph 4:3; 2 Cor 5:18; Rom 15:7).", end: "One new humanity from every tribe and tongue (Rev 7:9)." },
  { id: "death", n: "Death, the last enemy", icon: "M-10 12 V-2 A10 10 0 0 1 10 -2 V12 Z M-4 2 H4", defeated: "Christ tasted death for everyone, rose, and holds the keys of Death (Heb 2:9; Rev 1:18).", body: "Proclaim resurrection; live resurrection life; heal and raise; comfort with hope; defend life (Rom 6:4; Matt 10:8; 1 Thess 4:13–18).", end: "“Death is swallowed up in victory.” Death and Hades thrown into the lake of fire (1 Cor 15:54; Rev 20:14)." }
];

/* The last enemy: death — timeline */
DATA.fa.death = [
  { t: "Death threatened", ref: "Gen 2:17", d: "“In the day that you eat of it you shall surely die.” Death was never part of God’s design: it entered as an enemy." },
  { t: "Death reigns", ref: "Gen 3:19; Rom 5:12, 14, 17", d: "“Death reigned from Adam to Moses.” Death behaves like a king, with sin as its sting and fear as its chains." },
  { t: "Glimpses of victory", ref: "Gen 5:24; 2 Kgs 2:11; 1 Kgs 17:22; Ezek 37", d: "Enoch and Elijah taken up, a widow’s son raised, dry bones live: previews that death is not final." },
  { t: "Jesus raises the dead", ref: "Luke 7:14–15; John 11:25–44", d: "“I am the resurrection and the life.” At Lazarus’ tomb Jesus wept, then commanded, “Lazarus, come out.”" },
  { t: "He tastes death for everyone", ref: "Heb 2:9, 14–15", d: "He shared our flesh “that through death he might destroy the one who has the power of death … and deliver all those who through fear of death were subject to lifelong slavery”." },
  { t: "Risen: the keys of Death", ref: "Rev 1:17–18; 2 Tim 1:10", d: "“I died, and behold I am alive forevermore, and I have the keys of Death and Hades.” He “abolished death and brought life and immortality to light”." },
  { t: "The body lives from resurrection", ref: "Rom 6:4; 8:11; 1 Cor 15:55–57", d: "The same Spirit gives life to our mortal bodies. “O death, where is your sting?” Believers still die, but death has lost its sting and its claim." },
  { t: "Swallowed up in victory", ref: "1 Cor 15:26, 54; Rev 20:14; 21:4", d: "“The last enemy to be destroyed is death.” Death and Hades are thrown into the lake of fire. “Death shall be no more.”" }
];
DATA.fa.deathDo = [
  ["Proclaim the resurrection", "Acts 4:2, 33", "The apostles preached “in Jesus the resurrection from the dead” with great power."],
  ["Lose the fear of death", "Heb 2:15; Phil 1:21", "“To live is Christ, and to die is gain.” Fearless sons are free to obey."],
  ["Live resurrection life now", "Rom 6:4; Col 3:1", "Walk in newness of life: the age to come breaking into ordinary days."],
  ["Heal the sick, even raise the dead", "Matt 10:8; Acts 9:40; 20:9–12", "Jesus commissioned it; Peter and Paul did it. Pray with faith; leave outcomes to God."],
  ["Grieve with hope", "1 Thess 4:13–18; John 11:35", "Jesus wept. We grieve, but not as those who have no hope."],
  ["Choose life and defend it", "Deut 30:19; Prov 24:11", "Oppose violence, protect the vulnerable, care for the dying: a culture of life."],
  ["Die well, as a witness", "Rev 12:11; Acts 7:59–60", "“They loved not their lives even unto death.” Stephen died forgiving, seeing heaven open."]
];

/* Daily life: living under vs living from above */
DATA.fa.daily = [
  { s: "Bad news and fear", under: "“I’m doing OK under the circumstances.” Fear sets the agenda.", above: "Circumstances are under his feet, and so under mine in him. I pray from the throne, then act calmly (Ps 112:7; Phil 4:6–7)." },
  { s: "Accusation and shame", under: "The voice of condemnation decides how I feel about God.", above: "“Who shall bring any charge against God’s elect?” I answer accusation with the blood and the word (Rom 8:33–34; Rev 12:10–11)." },
  { s: "Temptation", under: "Sin feels stronger than me; I manage it and hope.", above: "Sin shall not have dominion over me. I reckon myself dead to it and yield to God (Rom 6:11–14)." },
  { s: "Hostility at work or home", under: "People are the enemy; I fight them or flee them.", above: "People are never the enemy. I bless, serve and pray, and I resist the darkness behind the conflict (Rom 12:14–21; Eph 6:12)." },
  { s: "Sickness", under: "Diagnosis has the final word.", above: "I pray and ask for prayer, use wisdom and medicine, and trust the One who bore my sicknesses, whatever the outcome (Jas 5:14–16)." },
  { s: "Delay and disappointment", under: "Silence means God has forgotten me.", above: "He is seated and reigning “until”. I wait in faith and keep sowing (Heb 10:12–13; Gal 6:9)." },
  { s: "Grief and loss", under: "Death has the last word.", above: "Death is a defeated enemy with no sting. I grieve with hope (1 Cor 15:55; 1 Thess 4:13)." }
];

/* The body's assignments */
DATA.fa.assign = [
  { t: "Proclaim and disciple", ref: "Matt 28:18–20", d: "“All authority … has been given to me. Go therefore.” Every disciple made is territory under his feet." },
  { t: "Pray and worship", ref: "Matt 6:10; Ps 149:6–9; Acts 4:24–31", d: "Pray the kingdom down, praise as warfare, and agree in prayer so the place is shaken." },
  { t: "Heal and deliver", ref: "Luke 9:1–2; Acts 10:38", d: "Do what Jesus did, “healing all who were oppressed by the devil”." },
  { t: "Live holy and united", ref: "Eph 4:1–3; 1 Pet 1:15", d: "Holiness removes footholds; unity is the body’s strength. A divided body cannot stand." },
  { t: "Do justice and mercy", ref: "Mic 6:8; Matt 25:35–40", d: "Lift the poor, protect the weak and reform what is unjust. Kings rule for the oppressed." },
  { t: "Overcome evil with good", ref: "Rom 12:21; Matt 5:44", d: "The body subdues enemies the way the Head did: by love, truth and sacrifice, never by hatred." },
  { t: "Endure and overcome", ref: "Rev 12:11; 2 Tim 2:3, 12", d: "“If we endure, we will also reign with him.” Faithfulness in suffering is victory." }
];

DATA.fa.objections = [
  { k: "serious", q: "“Only Christ subdues his enemies; the church has no part in it.”", refs: "Rom 16:20; Eph 1:22–23; Luke 10:19; Ps 110:2–3",
    not: "No one claims the church adds to Christ’s victory or replaces him.",
    a: "God put all things under Christ’s feet and gave him as head “to the church, which is his body”: the feet are in the body. Paul promises God “will soon crush Satan under your feet”. Psalm 110 says the King rules “in the midst of your enemies” while “your people will offer themselves freely”. The Head wins; the body enforces." },
  { k: "serious", q: "“Putting enemies under his feet only happens at the second coming.”", refs: "1 Cor 15:24–26; Heb 10:12–13; Eph 1:20–22",
    not: "No one denies that death is destroyed at the end.",
    a: "Paul says Christ “must reign until he has put all his enemies under his feet”, and that death is the last enemy. That implies others are subdued before the last, during his present reign from the right hand. Hebrews pictures him seated now, “waiting until” his enemies become his footstool. The end completes a process already under way." },
  { k: "straw", q: "“Being above all powers means Christians never suffer or lose.”", refs: "Heb 2:8–9; 2 Cor 4:8–12; Rev 12:11",
    not: "This turns position into triumphalism.",
    a: "“We do not yet see everything in subjection to him. But we see Jesus … crowned … because of the suffering of death.” The body shares the Head’s path: cross, then crown. Paul was afflicted but not crushed. Overcomers “loved not their lives even unto death”." },
  { k: "straw", q: "“If death is defeated, a believer who dies lacked faith.”", refs: "Heb 9:27; Phil 1:21–23; 1 Cor 15:26",
    not: "This misunderstands the order of victory.",
    a: "Death is the last enemy to be destroyed, not the first. Its sting and fear are removed now, but bodily death remains until the resurrection. Paul longed “to depart and be with Christ”. Faithful believers die in faith (Heb 11:13). We pray for life and healing, and we die without fear." },
  { k: "serious", q: "“Subduing enemies sounds like Christians taking over by force.”", refs: "2 Cor 10:3–5; John 18:36; Matt 26:52",
    not: "No one is advocating coercion.",
    a: "“The weapons of our warfare are not of the flesh.” Jesus told Peter to put away his sword. The enemies are sin, death, lies and dark powers, not people. The body subdues them by the gospel, prayer, truth, holiness, justice and love." }
];
DATA.fa.study = [
  { t: "Far above", q: ["Read Ephesians 1:19–23 slowly. Which of the five things Christ is above have you been living under?", "What does “the feet are in the body” change about how you see your daily life?"] },
  { t: "Under his feet", q: ["Pick one enemy from the list. What has the cross already done, and what is your assignment now?", "How does knowing death is the last enemy shape how you pray for the sick and grieve the dying?"] }
];
DATA.fa.memory = [
  ["Ephesians 1:22–23", "“And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.”"],
  ["1 Corinthians 15:25–26", "“For he must reign until he has put all his enemies under his feet. The last enemy to be destroyed is death.”"],
  ["Psalm 110:1", "“The LORD says to my Lord: ‘Sit at my right hand, until I make your enemies your footstool.’”"],
  ["Romans 16:20", "“The God of peace will soon crush Satan under your feet.”"]
];
DATA.quiz.push(
  { q: "According to Ephesians 1:22–23, God gave Christ as head over all things to…", a: ["The angels", "The church, which is his body", "Israel only", "The nations"], c: 1, x: "“To the church, which is his body, the fullness of him who fills all in all.”" },
  { q: "Which enemy does 1 Corinthians 15:26 call the last to be destroyed?", a: ["Satan", "Sin", "Death", "The world"], c: 2, x: "“The last enemy to be destroyed is death.”" }
);
DATA.web.edges.push(["warfare", "sons", "Under his feet: the body enforces the Head’s victory"]);
Object.assign(DATA.images, {
  ascension: { file: "Rembrandt_van_Rijn_192.jpg", cap: "Rembrandt, <i>The Ascension</i> (1636), Alte Pinakothek, Munich: “seated … far above all rule and authority” (Eph 1:20–21).", ar: "3/4", art: "crown" }
});
DATA.wf.objections.push(...DATA.fa.objections);
DATA.wf.study.push(...DATA.fa.study);
DATA.wf.memory.push(...DATA.fa.memory);
