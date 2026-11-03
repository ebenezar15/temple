  /* ================ Part VI: the keys of the kingdom ================ */
  const BOOKS = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
  const keyGlyph = (c, s) => sv("g", { transform: `scale(${s || 1})` }, sv("circle", { cx: 0, cy: 0, r: 7, fill: "none", stroke: c, "stroke-width": 3.5 }), sv("rect", { x: -1.8, y: 6, width: 3.6, height: 18, fill: c }), sv("rect", { x: 1.8, y: 18, width: 6, height: 3, fill: c }), sv("rect", { x: 1.8, y: 13, width: 4, height: 3, fill: c }));
  const hit = (g, fn) => { g.addEventListener("click", fn); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } }); return g; };

  function objectionList(boxSel, filterSel, O) {
    const box = $(boxSel);
    const cards = O.map((o, i) => {
      const d = el("details", { class: "obj " + o.k, open: i === 0 ? true : null },
        el("summary", {}, el("span", { class: "obadge", text: o.k === "straw" ? "Misrepresentation" : "Objection" }), el("b", { text: o.q }), el("small", { class: "ref", text: o.refs })),
        el("div", { class: "obody" }, el("div", { class: "row warn" }, el("b", { text: o.k === "straw" ? "The misrepresentation" : "What is not being claimed" }), el("p", { html: refify(o.not) })),
          el("div", { class: "row eden" }, el("b", { text: "Response" }), el("p", { html: refify(o.a) }))));
      box.append(d); return d;
    });
    const f = $(filterSel);
    [["all", "All"], ["serious", "Serious objections"], ["straw", "Misrepresentations"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      cards.forEach((c, i) => { c.hidden = !(k === "all" || O[i].k === k); });
    } })));
  }
  function studyGuide(qSel, mSel, study, memory) {
    $(qSel).append(...study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $(mSel).append(...memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }

  function initKyMeaning() {
    $("#kyWords").append(...DATA.ky.words.map(w => el("div", { class: "card word-card" }, el("p", { class: "eyebrow", text: w.lang }), el("p", { class: w.lang === "Hebrew" ? "heb big-word" : "big-word", text: w.w }), el("h3", { text: `${w.tr} · ${w.gloss}` }), el("p", { text: w.d }))));
    const W = 1100, H = 190, x0 = 30, bw = (W - 60) / 66, yB = 120;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "The 66 books of the Bible with every occurrence of the word key marked", style: { minWidth: "820px" } });
    BOOKS.forEach((b, i) => {
      const nt = i >= 39;
      svg.append(sv("rect", { x: x0 + i * bw + 1, y: yB, width: bw - 2, height: 26, rx: 2, fill: nt ? "var(--babel)" : "var(--eden)", "fill-opacity": .28 }, sv("title", {}, b)));
    });
    [[1, "Law"], [6, "History"], [18, "Wisdom"], [23, "Prophets"], [40, "Gospels & Acts"], [48, "Letters"], [65, "Rev."]].forEach(([b, t]) => svg.append(sv("text", { x: x0 + (b - 1) * bw, y: yB + 44, "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    svg.append(sv("text", { x: x0, y: H - 6, "font-size": 11, fill: "var(--eden)", "font-weight": 800 }, "OLD TESTAMENT"), sv("text", { x: x0 + 39 * bw, y: H - 6, "font-size": 11, fill: "var(--babel)", "font-weight": 800 }, "NEW TESTAMENT"));
    const stacks = {};
    const marks = DATA.ky.occ.map((o, i) => {
      const n = stacks[o.book] = (stacks[o.book] || 0) + 1;
      const x = x0 + (o.book - 0.5) * bw, y = yB - 26 - (n - 1) * 34;
      const g = hit(sv("g", { class: "fnode kmark", tabindex: "0", role: "button", "aria-label": o.name }), () => selOcc(i));
      g.append(sv("line", { x1: x, y1: y + 22, x2: x, y2: yB, stroke: "var(--accent)", "stroke-dasharray": "2 2" }), sv("circle", { class: "kbg", cx: x, cy: y + 6, r: 15, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
      const k = keyGlyph("var(--accent)", .62); k.setAttribute("transform", `translate(${x} ${y - 1}) scale(.62)`); g.append(k);
      svg.append(g); return g;
    });
    svg.append(sv("text", { x: x0 + 13 * bw, y: 20, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "Each key marks one occurrence of the word. Revelation has three."));
    $("#kyCanon").append(svg);
    const cards = DATA.ky.meanings.map((m, i) => {
      const b = el("button", { class: "meaning", type: "button", onclick: () => selMeaning(i) },
        sv("svg", { viewBox: "0 0 24 24", class: "micon", "aria-hidden": "true", fill: "none", stroke: "currentColor", "stroke-width": 1.7, "stroke-linecap": "round", "stroke-linejoin": "round" }, sv("path", { d: m.icon })),
        el("b", { text: m.n }), el("span", { text: m.d }), el("small", { class: "ref", text: m.also }));
      $("#kyMeanings").append(b); return b;
    });
    function light(pred) { marks.forEach((g, i) => { const on = pred(DATA.ky.occ[i]); g.style.opacity = on ? 1 : .25; $(".kbg", g).setAttribute("fill", on ? "var(--glow)" : "var(--surface)"); }); }
    function selOcc(i) {
      const o = DATA.ky.occ[i];
      cards.forEach(c => c.classList.remove("on"));
      light(x => x === o);
      $("#kyCanonPanel").replaceChildren(el("p", { class: "eyebrow", text: BOOKS[o.book - 1] }), el("h3", { text: o.name }), el("p", { html: refify(o.d) }),
        el("div", { class: "chips" }, o.m.map(id => { const mi = DATA.ky.meanings.findIndex(m => m.id === id); return el("button", { class: "chip", type: "button", text: DATA.ky.meanings[mi].n, onclick: () => selMeaning(mi) }); })));
    }
    function selMeaning(i) {
      const m = DATA.ky.meanings[i];
      cards.forEach((c, j) => c.classList.toggle("on", j === i));
      light(o => o.m.includes(m.id));
      const hits = DATA.ky.occ.filter(o => o.m.includes(m.id));
      $("#kyCanonPanel").replaceChildren(el("p", { class: "eyebrow", text: "What keys represent" }), el("h3", { text: m.n }), el("p", { html: refify(m.d) }),
        el("p", { class: "muted", text: hits.length ? `In the verses that use the word “key”: ${hits.map(h => h.name).join(" · ")}` : "This meaning is carried by related imagery rather than the word “key” itself." }),
        el("span", { class: "ref", text: "See also: " + m.also }));
    }
    selMeaning(0);
  }

  function initKyRing() {
    const R = DATA.ky.ring, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Seven biblical keys hanging on one ring" });
    const C = [260, 96];
    svg.append(sv("circle", { cx: C[0], cy: C[1], r: 58, fill: "none", stroke: "var(--accent)", "stroke-width": 9 }), sv("circle", { cx: C[0], cy: C[1], r: 58, fill: "none", stroke: "var(--surface)", "stroke-width": 2, opacity: .5 }),
      sv("text", { x: C[0], y: 26, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--muted)", "letter-spacing": 1.5 }, "IN CHRIST’S HAND · REV 1:18; 3:7"));
    const keys = R.map((k, i) => {
      const a = -48 + i * 16, rad = (90 + a) * Math.PI / 180, ax = C[0] + Math.cos(rad) * 58, ay = C[1] + Math.sin(rad) * 58;
      const outer = sv("g", { transform: `translate(${ax} ${ay}) rotate(${a})` });
      const g = hit(sv("g", { class: "fnode hkey", tabindex: "0", role: "button", "aria-label": k.n }), () => sel(i));
      g.append(sv("circle", { cx: 0, cy: 24, r: 18, fill: "var(--surface)", stroke: k.c, "stroke-width": 7 }), sv("rect", { x: -4.5, y: 42, width: 9, height: 200, rx: 3, fill: k.c }),
        sv("rect", { x: 4.5, y: 208, width: 20, height: 10, rx: 2, fill: k.c }), sv("rect", { x: 4.5, y: 226, width: 14, height: 10, rx: 2, fill: k.c }), sv("rect", { x: 4.5, y: 190, width: 10, height: 8, rx: 2, fill: k.c }));
      outer.append(g); svg.append(outer);
      const short = ["Key of David", "Kingdom", "Death & Hades", "Knowledge", "Abyss", "Open door", "Forgive & retain"][i];
      const tr = a * Math.PI / 180, tx = ax - Math.sin(tr) * 262, ty = ay + Math.cos(tr) * 262 + 16;
      svg.append(sv("text", { x: Math.max(58, Math.min(462, tx)), y: Math.min(ty, 460), "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, short));
      return g;
    });
    $("#kyRing").append(svg);
    function sel(i) {
      keys.forEach((g, j) => g.classList.toggle("on", j === i));
      const k = R[i];
      $("#kyRingPanel").replaceChildren(el("p", { class: "eyebrow", text: `Key ${i + 1} of ${R.length}` }), el("h3", { text: k.n }), el("span", { class: "ref", text: k.ref }), el("p", { html: refify(k.d) }),
        el("div", { class: "chips" }, R.map((o, j) => el("button", { class: "chip", type: "button", "aria-pressed": String(j === i), text: o.n.replace("Key of the ", "").replace("Keys of the ", "").replace("Key of ", "").replace("Keys of ", ""), onclick: () => sel(j) }))));
    }
    sel(0);
  }

  function initKyPalace() {
    const P = DATA.ky.palace, svg = sv("svg", { viewBox: "0 0 600 440", role: "img", "aria-label": "Plan of a royal palace with the rooms the steward's key controlled" });
    svg.append(sv("rect", { x: 60, y: 30, width: 480, height: 300, rx: 6, fill: "var(--bg)", stroke: "var(--ink)", "stroke-width": 4 }), sv("rect", { x: 270, y: 324, width: 60, height: 12, fill: "var(--surface)" }));
    svg.append(sv("rect", { x: 220, y: 150, width: 160, height: 160, rx: 6, fill: "none", stroke: "var(--line)", "stroke-dasharray": "5 5" }), sv("text", { x: 300, y: 236, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "COURTYARD"));
    const zones = { decrees: [75, 45, 130, 90], throne: [220, 45, 160, 90], court: [395, 45, 130, 265], stores: [75, 150, 130, 160], gate: [262, 312, 76, 34], family: [60, 360, 480, 66] };
    const fills = { throne: "var(--accent)", decrees: "var(--babel)", court: "var(--eden)", stores: "var(--muted)", gate: "var(--flame)", family: "var(--eden)" };
    const rects = {};
    P.forEach((p, i) => {
      const [x, y, w, h] = zones[p.id];
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": p.n }), () => sel(i));
      const r = sv("rect", { x, y, width: w, height: h, rx: 6, fill: fills[p.id], "fill-opacity": .16, stroke: fills[p.id], "stroke-width": 2 });
      g.append(r);
      if (p.id === "family") for (let k = 0; k < 9; k++) { const hx = 80 + k * 52; g.append(sv("path", { d: `M${hx} 418 L${hx} 396 L${hx + 14} 384 L${hx + 28} 396 L${hx + 28} 418 Z`, fill: "var(--eden)", "fill-opacity": .45 })); }
      if (p.id === "throne") g.append(sv("rect", { x: 288, y: 70, width: 24, height: 30, rx: 3, fill: "var(--accent)" }));
      if (p.id === "stores") for (let k = 0; k < 6; k++) g.append(sv("circle", { cx: 100 + (k % 3) * 40, cy: 200 + Math.floor(k / 3) * 50, r: 12, fill: "var(--muted)", "fill-opacity": .5 }));
      const label = { gate: "Gate", family: "Jerusalem: the people", court: "Royal service", stores: "Storehouses", throne: "Throne room", decrees: "Scribes & decrees" }[p.id];
      g.append(sv("text", { x: x + w / 2, y: p.id === "family" ? y + 14 : p.id === "gate" ? y + 22 : y + 22, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, label));
      rects[p.id] = r; svg.append(g);
    });
    const key = sv("g", { style: { transition: reduceMotion ? "none" : "transform .8s cubic-bezier(.4,.1,.2,1)" } }, sv("circle", { r: 20, fill: "var(--accent)", opacity: .25, class: "pulse" }));
    const kg = keyGlyph("var(--accent)", 1); kg.setAttribute("transform", "translate(0 -10)"); key.append(kg);
    svg.append(key);
    $("#kyPalace").append(svg);
    function sel(i) {
      const p = P[i], [x, y, w, h] = zones[p.id];
      Object.entries(rects).forEach(([k, r]) => { r.setAttribute("fill-opacity", k === p.id ? .4 : .16); r.setAttribute("stroke-width", k === p.id ? 4 : 2); });
      key.style.transform = `translate(${x + w - 22}px, ${y + h / 2 + (p.id === "family" ? -6 : 8)}px)`;
      $("#kyPalacePanel").replaceChildren(el("p", { class: "eyebrow", text: "The steward’s key" }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }),
        el("div", { class: "row christ" }, el("b", { text: "In the kingdom today" }), el("p", { html: refify(p.app) })));
    }
    sel(0);
  }

  function initKyStewards() {
    const S = DATA.ky.stewards;
    const svg = sv("svg", { viewBox: "0 0 460 330", role: "img", "aria-label": "The key passing from Shebna to Eliakim" });
    svg.append(sv("line", { x1: 20, y1: 300, x2: 440, y2: 300, stroke: "var(--line)", "stroke-width": 2 }));
    const fig = (x, robe, label) => { const g = sv("g", {}, sv("circle", { cx: x, cy: 120, r: 22, fill: "#c99a6e" }), sv("path", { d: `M${x - 34} 150 L${x + 34} 150 L${x + 48} 296 L${x - 48} 296 Z`, fill: robe }), sv("text", { x, y: 322, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, label)); svg.append(g); return g; };
    // Shebna's rock-cut tomb
    svg.append(sv("path", { d: "M30 300 L30 190 Q30 160 60 160 L80 160 Q110 160 110 190 L110 300 Z", fill: "var(--muted)", "fill-opacity": .3 }), sv("text", { x: 70, y: 150, "text-anchor": "middle", "font-size": 10.5, fill: "var(--muted)", "font-weight": 700 }, "his own tomb"));
    const sh = fig(180, "var(--flame)", "Shebna");
    const el2 = fig(330, "var(--babel)", "Eliakim");
    const sash = sv("rect", { x: 296, y: 200, width: 68, height: 10, fill: "var(--accent)" });
    svg.append(sash);
    const key = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.1s cubic-bezier(.4,.1,.2,1)" } });
    const kk = sv("g", { transform: "rotate(-60) scale(1.9)" }); kk.append(...keyGlyph("var(--accent)").childNodes);
    key.append(sv("circle", { r: 22, fill: "var(--accent)", opacity: .2, class: "pulse" }), kk);
    svg.append(key);
    svg.append(sv("text", { x: 235, y: 60, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "“I will place on his shoulder the key”"), sv("text", { x: 235, y: 78, "text-anchor": "middle", "font-size": 11, fill: "var(--accent)", "font-weight": 700 }, "Isaiah 22:22"));
    $("#kyStewardArt").append(svg);
    const tg = $("#kyStewardToggle"), box = $("#kySteward");
    function set(k) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      const s = S[k];
      key.style.transform = k === "shebna" ? "translate(158px, 150px)" : "translate(308px, 150px)";
      sh.style.opacity = k === "shebna" ? 1 : .35; el2.style.opacity = k === "eliakim" ? 1 : .35; sash.style.opacity = k === "eliakim" ? 1 : 0;
      box.classList.toggle("twisted", k === "shebna");
      box.replaceChildren(el("p", { class: "eyebrow", text: s.ref }), ...s.rows.map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(r[1]) }))));
    }
    [["shebna", "Shebna: the key misused"], ["eliakim", "Eliakim: the key given"]].forEach(([k, n]) => tg.append(el("button", { class: "chip", type: "button", "data-k": k, text: n, onclick: () => set(k) })));
    set("eliakim");
  }

  function initKyFlow() {
    const nodes = DATA.ky.flow.map(n => ({ ...n, w: ["joseph", "eliakim", "peter", "church"].includes(n.id) ? 340 : 440 }));
    flowchart($("#kyFlow"), nodes, DATA.ky.flowEdges, { id: "kyf", w: 900, h: 700, nodeW: 440, refsInline: true, label: "Flowchart of the keys from Joseph to the New Jerusalem", start: "christ", onSelect: n => panelFill("#kyFlowPanel", "Keys across Scripture", n) });
  }

  function initKyCaesarea() {
    const C = DATA.ky.caesarea, svg = sv("svg", { viewBox: "0 0 600 400", role: "img", "aria-label": "Caesarea Philippi: cliff, cave of Pan, niches, temple and spring" });
    svg.append(sv("rect", { width: 600, height: 400, fill: "var(--babel)", "fill-opacity": .08 }));
    const zones = {};
    const z = (id, ...kids) => { const i = C.findIndex(c => c.id === id); const g = hit(sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": C[i].n }, ...kids), () => sel(i)); zones[id] = g; svg.append(g); };
    z("rock", sv("path", { class: "hl", d: "M0 380 L0 120 L60 80 L170 60 L300 40 L420 55 L520 70 L600 100 L600 380 Z", fill: "#b59b7a", "fill-opacity": .55, stroke: "transparent" }), sv("text", { x: 470, y: 110, "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "the cliff (petra)"));
    z("niches", ...[[380, 150], [430, 165], [480, 150], [530, 170]].map(([x, y]) => sv("path", { class: "hl", d: `M${x - 14} ${y + 30} L${x - 14} ${y + 10} Q${x} ${y - 6} ${x + 14} ${y + 10} L${x + 14} ${y + 30} Z`, fill: "var(--ink)", "fill-opacity": .45, stroke: "transparent" })), sv("text", { x: 455, y: 226, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "niches of Pan"));
    z("cave", sv("path", { class: "hl", d: "M150 330 L150 230 Q150 170 215 170 Q280 170 280 230 L280 330 Z", fill: "#1d1a17", stroke: "transparent" }), sv("text", { x: 215, y: 162, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, "the cave: “gates of Hades”"));
    z("temple", sv("rect", { class: "hl", x: 300, y: 250, width: 120, height: 14, fill: "var(--surface)", stroke: "transparent" }), ...[0, 1, 2, 3, 4].map(k => sv("rect", { x: 306 + k * 24, y: 264, width: 10, height: 60, fill: "var(--surface)" })), sv("path", { d: "M296 250 L360 222 L424 250 Z", fill: "var(--surface)" }), sv("text", { x: 360, y: 214, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, "temple of Augustus"));
    z("spring", sv("path", { class: "hl flow", d: "M215 330 C220 350 260 360 300 372 C360 388 440 380 600 392", fill: "none", stroke: "var(--babel)", "stroke-width": 6 }), sv("text", { x: 470, y: 372, "font-size": 12, "font-weight": 800, fill: "var(--babel)" }, "springs of the Jordan"));
    svg.append(sv("rect", { x: 0, y: 380, width: 600, height: 20, fill: "var(--eden)", "fill-opacity": .4 }));
    $("#kyCaesarea").append(svg);
    function sel(i) {
      Object.entries(zones).forEach(([k, g]) => g.classList.toggle("on", k === C[i].id));
      const c = C[i];
      $("#kyCaesareaPanel").replaceChildren(el("p", { class: "eyebrow", text: "Caesarea Philippi" }), el("h3", { text: c.n }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) }),
        el("div", { class: "chips" }, C.map((o, j) => el("button", { class: "chip", type: "button", "aria-pressed": String(j === i), text: o.n.split(":")[0], onclick: () => sel(j) }))));
    }
    sel(0);
  }

  function initKyBind() {
    const svg = sv("svg", { viewBox: "0 0 520 360", role: "img", "aria-label": "Direction of binding and loosing: heaven first, then earth" });
    svg.append(sv("defs", {}, sv("marker", { id: "kb-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "context-stroke" }))));
    svg.append(sv("rect", { x: 20, y: 20, width: 480, height: 100, rx: 14, fill: "var(--accent)", "fill-opacity": .14 }), sv("text", { x: 40, y: 48, "font-size": 13, "font-weight": 800, "letter-spacing": 2, fill: "var(--accent)" }, "HEAVEN"),
      sv("rect", { x: 20, y: 240, width: 480, height: 100, rx: 14, fill: "var(--eden)", "fill-opacity": .14 }), sv("text", { x: 40, y: 268, "font-size": 13, "font-weight": 800, "letter-spacing": 2, fill: "var(--eden)" }, "EARTH"));
    const right = sv("g", {}, sv("text", { x: 260, y: 82, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "1 · Already bound or loosed in heaven"),
      sv("path", { d: "M260 124 L260 236", stroke: "var(--accent)", "stroke-width": 5, fill: "none", "marker-end": "url(#kb-arr)" }), sv("path", { d: "M260 124 L260 236", stroke: "var(--surface)", "stroke-width": 2, fill: "none", class: "flow" }),
      sv("text", { x: 276, y: 184, "font-size": 12.5, "font-weight": 700, fill: "var(--muted)" }, "discerned by Scripture, prayer, the Spirit"),
      sv("text", { x: 260, y: 300, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "2 · Declared and enacted on earth"), sv("text", { x: 260, y: 322, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)" }, "“shall have been bound” · estai dedemenon"));
    const wrong = sv("g", {}, sv("text", { x: 260, y: 300, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "1 · We decide what we want"),
      sv("path", { d: "M260 236 L260 124", stroke: "var(--flame)", "stroke-width": 5, fill: "none", "marker-end": "url(#kb-arr)" }),
      sv("text", { x: 260, y: 82, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "2 · Heaven must comply"),
      sv("path", { d: "M236 156 L284 204 M284 156 L236 204", stroke: "var(--flame)", "stroke-width": 7, "stroke-linecap": "round" }));
    svg.append(right, wrong);
    $("#kyDir").append(svg);
    const tg = $("#kyDirToggle");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      right.style.display = m === "right" ? "" : "none"; wrong.style.display = m === "wrong" ? "" : "none";
      $("#kyDirPanel").replaceChildren(...(m === "right"
        ? [el("p", { class: "eyebrow", text: "The biblical direction" }), el("h3", { text: "Stewards follow the King" }), el("p", { html: refify("Matthew 16:19 and 18:18 use a future perfect: “whatever you bind on earth shall have been bound in heaven.” The church does not dictate to heaven; it recognises and enforces on earth what heaven has already settled, as Jesus did only what he saw the Father doing (John 5:19).") }), el("p", { html: refify("That is why it is safe to give such authority to ordinary disciples: it is anchored in God’s will, prayed as “your will be done, on earth as it is in heaven” (Matt 6:10).") })]
        : [el("p", { class: "eyebrow", style: { color: "var(--flame)" }, text: "A common misreading" }), el("h3", { text: "Keys as a formula" }), el("p", { html: refify("Treating binding and loosing as a technique to command outcomes reverses the grammar and the relationship. A steward who opens doors the king has closed is not exercising authority but usurping it, like Shebna building his own monument (Isa 22:16).") })]));
    }
    [["right", "Heaven first (the text)"], ["wrong", "Earth first (misreading)"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("right");
    makeTabs($("#kySenseTabs"), $("#kySensePanels"), DATA.ky.senses, (p, it) => {
      p.append(el("div", { class: "split even" }, el("div", { class: "stack" }, el("h3", { text: it.head, style: { color: it.c } }), el("span", { class: "ref", text: it.ref })),
        el("div", { class: "prose" }, it.body.map(b => el("p", { html: refify(b) })))));
    }, "kysense");
  }

  function initKyDoors() {
    const D = DATA.ky.doors, box = $("#kyDoors");
    const cells = D.map((d, i) => {
      const c = el("button", { class: "door", type: "button", "aria-label": `${d.n}: ${d.who}`, onclick: () => { stop(); c.classList.add("open"); sel(i); } },
        el("span", { class: "door-frame" }, el("span", { class: "door-light" }, el("small", { text: d.who })), el("span", { class: "door-leaf" }, el("i", { class: "knob" }))),
        el("b", { text: d.n }), el("small", { class: "ref", text: d.ref }));
      box.append(c); return c;
    });
    function sel(i) {
      cells.forEach((c, j) => c.classList.toggle("sel", j === i));
      const d = D[i];
      $("#kyDoorPanel").replaceChildren(el("p", { class: "eyebrow", text: `Door ${i + 1} of ${D.length}` }), el("h3", { text: `${d.n}: ${d.who}` }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.d) }));
    }
    let t = [];
    const stop = () => { t.forEach(clearTimeout); t = []; };
    $("#kyDoorsPlay").addEventListener("click", () => { stop(); cells.forEach(c => c.classList.remove("open")); cells.forEach((c, i) => t.push(setTimeout(() => { c.classList.add("open"); sel(i); }, reduceMotion ? 0 : 300 + i * 700))); });
    $("#kyDoorsReset").addEventListener("click", () => { stop(); cells.forEach(c => c.classList.remove("open")); });
    cells.slice(0, 3).forEach(c => c.classList.add("open")); sel(2);
  }

  function initKyKey() {
    const T = DATA.ky.teeth, E = DATA.ky.eras;
    const svg = sv("svg", { viewBox: "0 0 640 300", role: "img", "aria-label": "A key whose teeth represent the functions of the keys" });
    const gold = "var(--accent)";
    svg.append(sv("circle", { cx: 90, cy: 120, r: 62, fill: "none", stroke: gold, "stroke-width": 22 }), sv("circle", { cx: 90, cy: 120, r: 22, fill: gold, opacity: .3 }),
      sv("rect", { x: 148, y: 108, width: 450, height: 24, rx: 6, fill: gold }));
    const labels = [];
    const teeth = T.map((t, i) => {
      const x = 260 + i * 56;
      const g = sv("g", { style: { transformOrigin: `${x + 20}px 132px`, transformBox: "view-box", transition: reduceMotion ? "none" : "transform .6s cubic-bezier(.3,1.4,.5,1), opacity .5s" } },
        sv("rect", { x, y: 132, width: 40, height: 46 + (i % 2) * 20, rx: 4, fill: gold }));
      const lab = sv("g", { style: { transition: "opacity .5s" } },
        sv("text", { x: x + 20, y: 210 + (i % 2) * 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, t.n.split(" ")[0]),
        sv("text", { x: x + 20, y: 224 + (i % 2) * 34, "text-anchor": "middle", "font-size": 10.5, fill: "var(--muted)" }, t.n.split(" ").slice(1).join(" ")));
      const strike = sv("line", { x1: x - 4, y1: 206 + (i % 2) * 34, x2: x + 44, y2: 206 + (i % 2) * 34, stroke: "var(--flame)", "stroke-width": 2, opacity: 0 });
      svg.append(g, lab, strike); labels.push([lab, strike]); return g;
    });
    const count = sv("text", { x: 90, y: 236, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(count, sv("text", { x: 90, y: 254, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "teeth on the key"));
    $("#kyKey").append(svg);
    const chips = $("#kyEraChips");
    function set(i) {
      $$(".chip", chips).forEach((c, j) => c.setAttribute("aria-pressed", String(j === i)));
      const e = E[i];
      T.forEach((t, j) => { const on = e.have.includes(t.id); teeth[j].style.transform = on ? "scaleY(1)" : "scaleY(0.08)"; teeth[j].style.opacity = on ? 1 : .3; labels[j][0].style.opacity = on ? 1 : .4; labels[j][1].setAttribute("opacity", on ? 0 : .8); });
      count.textContent = `${e.have.length} of ${T.length}`;
      $("#kyEraInfo").replaceChildren(el("h3", { text: e.n }), el("p", { html: refify(e.d) }),
        el("ul", { class: "tight" }, T.map(t => el("li", { style: { opacity: e.have.includes(t.id) ? 1 : .4, textDecoration: e.have.includes(t.id) ? "none" : "line-through" }, html: `<b>${t.n}</b>: ${refify(t.d)}` }))));
    }
    E.forEach((e, i) => chips.append(el("button", { class: "chip", type: "button", text: e.n, onclick: () => set(i) })));
    set(4);
  }

  function initKyOperate() {
    const O = DATA.ky.operate, list = $("#kyOperate");
    const items = O.map((o, i) => { const li = el("li", { class: "card op", tabindex: "0", role: "button" }, el("b", { text: o.t }), el("span", { class: "ref", text: o.ref })); hit(li, () => sel(i)); list.append(li); return li; });
    function sel(i) { items.forEach((li, j) => li.classList.toggle("on", j === i)); const o = O[i]; $("#kyOperatePanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${O.length}` }), el("h3", { text: o.t }), el("span", { class: "ref", text: o.ref }), el("p", { html: refify(o.d) })); }
    sel(1);
    $("#kyPractice").append(...DATA.ky.practice.map(([t, d]) => el("div", { class: "card" }, keyGlyphHTML(), el("h3", { text: t }), el("p", { html: refify(d) }))));
  }
  function keyGlyphHTML() { const s = sv("svg", { viewBox: "-12 -10 30 40", class: "kicon", "aria-hidden": "true" }); s.append(keyGlyph("var(--accent)")); return s; }

  function initKyObjections() { objectionList("#kyObjections", "#kyObjFilter", DATA.ky.objections); }
  function initKyStudy() { studyGuide("#kyQuestions", "#kyMemory", DATA.ky.study, DATA.ky.memory); }

