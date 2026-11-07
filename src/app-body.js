  /* ================ Part I·b: your body is a temple ================ */
  const BT = () => DATA.bt;

  function initBtLine() {
    const T = BT().line, W = 1000, n = T.length;
    const svg = sv("svg", { viewBox: `0 0 ${W} 220`, role: "img", "aria-label": "The body as a temple through Scripture, from Psalm 139 to Revelation 21", style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "btG", gradientUnits: "userSpaceOnUse", x1: 40, y1: 0, x2: W - 40, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--eden)" }), sv("stop", { offset: .5, "stop-color": "var(--accent)" }), sv("stop", { offset: 1, "stop-color": "var(--babel)" }))),
      sv("path", { class: "draw", d: `M40 110 L${W - 40} 110`, stroke: "url(#btG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = T.map((_, i) => 70 + i * (W - 140) / (n - 1));
    const gs = T.map((t, i) => {
      const x = xs[i], up = i % 2 === 0, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": t.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: 110, r: i === 4 ? 18 : 12, fill: "var(--surface)", stroke: i === 4 ? "var(--flame)" : "var(--accent)", "stroke-width": 4 }));
      if (i === 4) g.append(sv("circle", { cx: x, cy: 110, r: 28, fill: "var(--flame)", "fill-opacity": .16, class: "pulse" }));
      const w = t.t.split(" "), h = Math.ceil(w.length / 2), two = t.t.length > 16, ly = up ? 58 : 166;
      g.append(sv("line", { x1: x, y1: up ? 70 : 126, x2: x, y2: up ? 96 : 150, stroke: "var(--line)", "stroke-width": 2 }), txt(x, ly - (two ? 8 : 0), two ? w.slice(0, h).join(" ") : t.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, w.slice(h).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), t.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#btLine").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const t = T[i]; info("#btLinePanel", `The temple of the body · ${i + 1} of ${n}`, t.t, t.ref, t.d); }
    sel(4);
  }

  function initBtPattern() {
    const L = BT().layers;
    // temple, top-down
    const ts = sv("svg", { viewBox: "0 0 400 300", role: "img", "aria-label": "Tabernacle plan: altar, laver, tent door, holy place with lampstand, most holy place with the ark" });
    const tg = {};
    ts.append(sv("rect", { x: 10, y: 30, width: 380, height: 240, rx: 4, fill: "var(--eden)", "fill-opacity": .07, stroke: "var(--muted)", "stroke-dasharray": "2 4" }), txt(20, 22, "court", { "text-anchor": "start", "font-size": 10.5, fill: "var(--muted)" }));
    tg.altar = sv("g", { class: "ly" }, sv("rect", { x: 50, y: 125, width: 50, height: 50, fill: "#b08a5a" }), sv("path", { d: "M50 125 l-6 -6 M100 125 l6 -6 M50 175 l-6 6 M100 175 l6 6", stroke: "#b08a5a", "stroke-width": 4 }), txt(75, 194, "altar", { "font-size": 11 }));
    tg.laver = sv("g", { class: "ly" }, sv("circle", { cx: 150, cy: 150, r: 18, fill: "var(--babel)", "fill-opacity": .55 }), sv("circle", { cx: 150, cy: 150, r: 10, fill: "var(--surface)", "fill-opacity": .5, class: "pulse" }), txt(150, 186, "laver", { "font-size": 11 }));
    tg.house = sv("g", { class: "ly" }, sv("rect", { x: 200, y: 90, width: 170, height: 120, fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 3 }), sv("line", { x1: 315, y1: 90, x2: 315, y2: 210, stroke: "var(--flame)", "stroke-width": 4 }), txt(258, 82, "holy place", { "font-size": 10.5, fill: "var(--muted)" }), txt(342, 82, "most holy", { "font-size": 10.5, fill: "var(--muted)" }));
    tg.door = sv("g", { class: "ly" }, sv("line", { x1: 200, y1: 92, x2: 200, y2: 208, stroke: "var(--babel)", "stroke-width": 7 }), txt(200, 226, "door screen", { "font-size": 11 }));
    tg.lamp = sv("g", { class: "ly" }, sv("path", { d: "M240 130 v28 M226 132 q14 14 28 0 M232 132 q8 8 16 0", stroke: "var(--accent)", "stroke-width": 3, fill: "none" }), ...[226, 232, 240, 248, 254].map(x => sv("circle", { cx: x, cy: 128, r: 2.6, fill: "var(--flame)", class: "flick" })), txt(240, 176, "lampstand", { "font-size": 11 }));
    tg.ark = sv("g", { class: "ly" }, sv("rect", { x: 326, y: 138, width: 34, height: 24, fill: "var(--accent)" }), sv("rect", { x: 334, y: 143, width: 8, height: 14, rx: 3, fill: "var(--surface)" }), sv("rect", { x: 344, y: 143, width: 8, height: 14, rx: 3, fill: "var(--surface)" }), txt(343, 180, "ark", { "font-size": 11 }));
    ts.append(tg.house, tg.altar, tg.laver, tg.door, tg.lamp, tg.ark);
    // cell
    const cs = sv("svg", { viewBox: "0 0 400 300", role: "img", "aria-label": "Body and cell: blood vessel, interstitial fluid, cell membrane with proteins, mitochondria, nucleus with DNA" });
    const cg = {};
    cg.altar = sv("g", { class: "ly" }, sv("path", { d: "M14 20 Q60 150 14 280", stroke: "var(--flame)", "stroke-width": 26, fill: "none", "stroke-opacity": .55, "stroke-linecap": "round" }), ...[0, 1, 2, 3].map(k => sv("circle", { r: 5, fill: "var(--flame)" }, reduceMotion ? null : sv("animateMotion", { dur: "3s", begin: -(k * .75) + "s", repeatCount: "indefinite", path: "M14 20 Q60 150 14 280" }))), txt(36, 296, "blood", { "font-size": 11 }));
    cg.laver = sv("g", { class: "ly" }, sv("rect", { x: 56, y: 24, width: 336, height: 252, rx: 40, fill: "var(--babel)", "fill-opacity": .12 }), ...[[80, 50], [100, 250], [370, 60], [372, 240], [90, 150]].map(([x, y]) => sv("circle", { cx: x, cy: y, r: 3, fill: "var(--babel)", "fill-opacity": .6, class: "pulse" })), txt(110, 20, "interstitial fluid", { "font-size": 11 }));
    cg.house = sv("g", { class: "ly" }, sv("ellipse", { cx: 228, cy: 150, rx: 140, ry: 105, fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 1, "stroke-opacity": .3 }), txt(228, 270, "the cell", { "font-size": 11 }));
    cg.door = sv("g", { class: "ly" }, sv("ellipse", { cx: 228, cy: 150, rx: 140, ry: 105, fill: "none", stroke: "var(--babel)", "stroke-width": 5 }), ...[200, 230, 160, 330].map(a => { const r = a * Math.PI / 180; return sv("rect", { x: 228 + Math.cos(r) * 140 - 5, y: 150 + Math.sin(r) * 105 - 9, width: 10, height: 18, rx: 4, fill: "var(--eden)", transform: `rotate(${a} ${228 + Math.cos(r) * 140} ${150 + Math.sin(r) * 105})` }); }), txt(340, 270, "membrane", { "font-size": 11 }), txt(340, 284, "+ proteins", { "font-size": 10, fill: "var(--eden)" }));
    cg.lamp = sv("g", { class: "ly" }, ...[[150, 110, -20], [160, 200, 15], [300, 210, -10]].map(([x, y, a]) => sv("g", { transform: `rotate(${a} ${x} ${y})` }, sv("ellipse", { cx: x, cy: y, rx: 26, ry: 13, fill: "var(--accent)", "fill-opacity": .75 }), sv("path", { d: `M${x - 18} ${y} q6 -8 10 0 q4 8 10 0 q4 -8 10 0`, stroke: "var(--surface)", "stroke-width": 2, fill: "none" }))), txt(160, 232, "mitochondria", { "font-size": 11 }));
    cg.ark = sv("g", { class: "ly" }, sv("circle", { cx: 250, cy: 140, r: 46, fill: "var(--accent)", "fill-opacity": .2, stroke: "var(--accent)", "stroke-width": 3 }), sv("path", { d: "M220 130 q8 -12 16 0 t16 0 t16 0 t16 0 M220 148 q8 12 16 0 t16 0 t16 0 t16 0", stroke: "var(--flame)", "stroke-width": 2.5, fill: "none" }), txt(250, 200, "nucleus · DNA", { "font-size": 11 }));
    cs.append(cg.laver, cg.altar, cg.house, cg.door, cg.lamp, cg.ark);
    // journey particles
    const tp = sv("circle", { r: 7, fill: "var(--eden)", class: "jp", opacity: 0 }), cp = sv("circle", { r: 7, fill: "var(--eden)", class: "jp", opacity: 0 });
    ts.append(tp); cs.append(cp);
    $("#btTemple").prepend(ts); $("#btCell").prepend(cs);
    const tpos = { altar: [75, 150], laver: [150, 150], door: [200, 150], house: [280, 200], lamp: [240, 145], ark: [343, 150] };
    const cpos = { altar: [24, 150], laver: [70, 150], door: [88, 150], house: [180, 160], lamp: [150, 110], ark: [250, 140] };
    const chips = L.map((l, i) => el("button", { class: "chip", type: "button", text: `${i + 1} · ${l.par}`, onclick: () => sel(i) }));
    $("#btLayerChips").append(...chips);
    let ct = [10, 150], cc = [10, 150];
    function sel(i, still) {
      selectSet(chips, i);
      const l = L[i];
      Object.entries(tg).forEach(([k, g]) => g.classList.toggle("on", k === l.id));
      Object.entries(cg).forEach(([k, g]) => g.classList.toggle("on", k === l.id));
      [[tp, tpos, "t"], [cp, cpos, "c"]].forEach(([p, pos, w]) => {
        const from = w === "t" ? ct : cc, to = pos[l.id]; p.setAttribute("opacity", 1);
        tween(0, 1, still ? 0 : 600, k => { const x = from[0] + (to[0] - from[0]) * k, y = from[1] + (to[1] - from[1]) * k; p.setAttribute("cx", x); p.setAttribute("cy", y); if (w === "t") ct = [x, y]; else cc = [x, y]; });
      });
      $("#btLayerPanel").replaceChildren(el("p", { class: "eyebrow", text: `Moving inward · ${i + 1} of ${L.length}` }), el("h3", { text: l.par }),
        el("div", { class: "pair" }, el("div", { class: "pair-t" }, el("small", { text: "Temple" }), el("b", { text: l.temple })), el("div", { class: "pair-eq", text: "↔" }), el("div", { class: "pair-c" }, el("small", { text: "Body / cell" }), el("b", { text: l.cell }))),
        el("span", { class: "ref", text: l.ref }), el("p", { html: refify(l.d) }));
    }
    $("#btJourney").addEventListener("click", async () => { ct = [10, 150]; cc = [10, 150]; for (let i = 0; i < L.length; i++) { sel(i); await sleep(1500); } });
    sel(0, true);
    const t = $("#btTable");
    t.append(el("thead", {}, el("tr", {}, el("th", { text: "Temple" }), el("th", { text: "Body / cell" }), el("th", { text: "Parallel" }))),
      el("tbody", {}, ...L.map(l => el("tr", {}, el("td", { text: l.temple }), el("td", { text: l.cell }), el("td", { text: l.par })))));
  }

  function initBtCode() {
    const svg = sv("svg", { viewBox: "0 0 400 300", role: "img", "aria-label": "Two stone tablets turning into the two strands of a DNA double helix" });
    const tablets = sv("g", { class: "tablets" }, ...[130, 210].map(x => sv("g", {}, sv("path", { d: `M${x} 230 V100 Q${x} 60 ${x + 30} 60 Q${x + 60} 60 ${x + 60} 100 V230 Z`, fill: "var(--muted)", "fill-opacity": .6, stroke: "var(--ink)", "stroke-width": 2 }), ...[0, 1, 2, 3, 4, 5].map(k => sv("line", { x1: x + 12, y1: 100 + k * 20, x2: x + 48, y2: 100 + k * 20, stroke: "var(--ink)", "stroke-opacity": .5, "stroke-width": 2 })))), txt(200, 262, "two tablets of the testimony", { "font-size": 12 }));
    const helix = sv("g", { class: "helix" });
    const s1 = sv("path", { fill: "none", stroke: "var(--accent)", "stroke-width": 4 }), s2 = sv("path", { fill: "none", stroke: "var(--eden)", "stroke-width": 4 }), rungs = sv("g", {});
    helix.append(rungs, s1, s2, txt(200, 286, "two strands of DNA", { "font-size": 12 }));
    svg.append(tablets, helix);
    $("#btHelix").append(svg);
    let ph = 0;
    function draw() {
      const A = 50, cx = 200, pts1 = [], pts2 = []; rungs.replaceChildren();
      for (let y = 20; y <= 260; y += 6) { const a = (y / 40) + ph; pts1.push(`${cx + Math.sin(a) * A} ${y}`); pts2.push(`${cx - Math.sin(a) * A} ${y}`); if (y % 18 === 2) rungs.append(sv("line", { x1: cx + Math.sin(a) * A, y1: y, x2: cx - Math.sin(a) * A, y2: y, stroke: ["var(--flame)", "var(--babel)", "var(--accent)", "var(--eden)"][(y / 18 | 0) % 4], "stroke-width": 3, "stroke-opacity": .7 })); }
      s1.setAttribute("d", "M" + pts1.join(" L")); s2.setAttribute("d", "M" + pts2.join(" L"));
    }
    draw();
    let showHelix = false;
    const flip = () => { showHelix = !showHelix; svg.classList.toggle("dna", showHelix); };
    if (!reduceMotion) { const loop = () => { ph += .03; if (showHelix) draw(); requestAnimationFrame(loop); }; requestAnimationFrame(loop); setInterval(flip, 3500); } else { svg.classList.add("dna"); }
    svg.addEventListener("click", flip);
    const C = BT().code;
    $("#btCodeFlow").append(el("p", { class: "eyebrow", text: "Two codes, the same story" }), el("div", { class: "code-cols" }, ...C.map(c => el("div", { class: "code-col " + c.side }, el("b", { class: "cc-h", text: c.side === "temple" ? "In the temple" : "In the cell" }),
      ...c.steps.flatMap(([t, d, ref], i) => [i ? el("span", { class: "cc-arrow", text: "↓" }) : null, el("div", { class: "cc-step", style: { "--d": i * .2 + "s" } }, el("small", { text: t }), el("span", { html: refify(d + (ref ? ` (${ref})` : "")) }))].filter(Boolean))))),
      el("p", { class: "muted small", text: "Select the diagram to switch between tablets and helix." }));
    $("#btRestore").append(...BT().restore.map(([t, ref, d]) => el("div", { class: "card stg" }, el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { text: d }))));
    $("#btPhotos").append(photo("cell"), photo("dna"));
  }

  function initBtLive() {
    $("#btHold").append(...BT().hold.map(([t, d]) => el("div", { class: "card stg" }, el("h3", { text: t }), el("p", { html: refify(d) }))));
    const icons = ["M0 -12 L10 6 H-10 Z", "M-8 0 H8 M0 -8 V8", "M-10 4 Q0 -12 10 4", "M-6 10 V-2 Q0 -12 6 -2 V10", "M-10 -4 A4 4 0 1 0 -9.9 -4 M10 -4 A4 4 0 1 0 10.1 -4 M-14 10 Q-10 0 -6 10 M6 10 Q10 0 14 10", "M0 -12 L3 -3 L12 -3 L5 3 L8 12 L0 6 L-8 12 L-5 3 L-12 -3 L-3 -3 Z"];
    $("#btLive").append(...BT().live.map((l, i) => el("div", { class: "live-card", style: { "--d": i * .1 + "s" } }, sv("svg", { viewBox: "-16 -16 32 32", "aria-hidden": "true" }, sv("path", { d: icons[i], fill: "none", stroke: "currentColor", "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round" })), el("b", { text: l.t }), el("span", { class: "ref", text: l.ref }), el("p", { text: l.d }))));
    studyGuide("#btQuestions", "#btMemory", BT().study, BT().memory);
  }

  /* ---------- related facts: numbers, heart, zoom, book, flip cards ---------- */
  function countUp(node, to, ms) {
    const fmt = v => Math.round(v).toLocaleString();
    if (reduceMotion || !("IntersectionObserver" in window)) { node.textContent = fmt(to); return; }
    node.textContent = "0";
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now(); const step = t => { const k = Math.min(1, (t - t0) / ms); node.textContent = fmt(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }), { threshold: .4 });
    io.observe(node);
  }
  function initBtNumbers() {
    const N = BT().numbers;
    [["#btNumT", N.temple, "t"], ["#btNumB", N.body, "b"]].forEach(([sel, arr, k]) => $(sel).append(...arr.map((x, i) => {
      const num = el("b", { class: "num-v" });
      countUp(num, x.n, 1400 + i * 150);
      return el("div", { class: "num-tile " + k, style: { "--d": i * .08 + "s" } }, el("small", { text: x.t }), el("div", { class: "num-line" }, num, el("span", { text: x.unit })), el("p", { html: refify(x.d) }));
    })));
  }

  function initBtHeart() {
    const svg = sv("svg", { viewBox: "0 0 420 400", role: "img", "aria-label": "The heart pumping blood around two loops: to the lungs and to the body" });
    const pul = "M210 170 C120 170 120 40 210 40 C300 40 300 170 210 170", sys = "M210 210 C60 210 60 370 210 370 C360 370 360 210 210 210";
    svg.append(sv("path", { d: pul, fill: "none", stroke: "var(--babel)", "stroke-width": 16, "stroke-opacity": .25 }), sv("path", { d: sys, fill: "none", stroke: "var(--flame)", "stroke-width": 16, "stroke-opacity": .25 }));
    // lungs and body
    svg.append(sv("path", { d: "M150 30 Q120 60 130 100 Q160 110 180 70 Q176 40 150 30 Z M270 30 Q300 60 290 100 Q260 110 240 70 Q244 40 270 30 Z", fill: "var(--babel)", "fill-opacity": .35 }), txt(210, 24, "lungs · oxygen in", { "font-size": 11.5, fill: "var(--babel)" }),
      sv("rect", { x: 160, y: 340, width: 100, height: 46, rx: 12, fill: "var(--flame)", "fill-opacity": .18 }), txt(210, 368, "body · every cell", { "font-size": 11.5, fill: "var(--flame)" }));
    if (!reduceMotion) {
      [[pul, "var(--babel)", 4, 4], [sys, "var(--flame)", 6, 6]].forEach(([d, c, n, dur]) => { for (let k = 0; k < n; k++) { const dot = sv("circle", { r: 5, fill: c }); dot.append(sv("animateMotion", { dur: dur + "s", begin: -(k * dur / n) + "s", repeatCount: "indefinite", path: d })); svg.append(dot); } });
    }
    svg.append(sv("g", { class: "heart-beat" }, sv("path", { d: "M210 236 C150 200 158 150 190 150 C202 150 208 158 210 166 C212 158 218 150 230 150 C262 150 270 200 210 236 Z", fill: "var(--flame)" }), sv("path", { d: "M196 168 q-10 10 -4 24", stroke: "#fff", "stroke-opacity": .5, "stroke-width": 4, fill: "none", "stroke-linecap": "round" })));
    svg.append(txt(330, 200, "the altar", { "text-anchor": "start", "font-size": 11.5, fill: "var(--muted)", "font-style": "italic" }), txt(330, 214, "of the body", { "text-anchor": "start", "font-size": 11.5, fill: "var(--muted)", "font-style": "italic" }));
    $("#btHeart").append(svg);
    const beats = el("b", { class: "live-num", text: "0" }), litres = el("b", { class: "live-num", text: "0.0" });
    $("#btHeartPanel").append(el("p", { class: "eyebrow", text: "Live, since you opened this page (at 70 beats a minute)" }),
      el("div", { class: "live-row" }, el("div", {}, beats, el("small", { text: "heartbeats" })), el("div", {}, litres, el("small", { text: "litres pumped" }))),
      el("ul", { class: "ticks" }, ...["A drop of blood makes a full circuit of the body in about a minute at rest.", "The right side of the heart sends blood to the lungs; the left side sends it to the whole body: two loops, one heart.", "William Harvey first described the full circulation in 1628. Leviticus had already said “the life of the flesh is in the blood” (Lev 17:11).", "Like the altar fire that was never to go out (Lev 6:13), the heart beats from about three weeks after conception until death."].map(t => el("li", { html: refify(t) }))));
    const t0 = Date.now();
    setInterval(() => { const n = Math.floor((Date.now() - t0) / 60000 * 70); beats.textContent = n.toLocaleString(); litres.textContent = (n * .07).toFixed(1); }, 860);
  }

  function initBtZoom() {
    const Z = BT().zoom, n = Z.length, R = 180;
    const svg = sv("svg", { viewBox: "0 0 400 400", role: "img", "aria-label": "Zooming inward through nested rooms of the temple and the body" });
    svg.append(sv("defs", {}, sv("clipPath", { id: "btZc" }, sv("rect", { width: 400, height: 400, rx: 12 }))));
    const g = sv("g", { class: "zoomg" }), wrap = sv("g", { "clip-path": "url(#btZc)" }, g);
    const tc = ["var(--muted)", "var(--eden)", "var(--babel)", "var(--accent)", "var(--flame)", "var(--accent)"];
    Z.forEach((z, k) => {
      const r = R / Math.pow(2, k), c = tc[k];
      g.append(sv("circle", { cx: 200, cy: 200, r, fill: c, "fill-opacity": .08 + k * .03 }),
        sv("path", { d: `M200 ${200 - r} A${r} ${r} 0 0 0 200 ${200 + r}`, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "vector-effect": "non-scaling-stroke" }),
        sv("path", { d: `M200 ${200 - r} A${r} ${r} 0 0 1 200 ${200 + r}`, fill: "none", stroke: "var(--babel)", "stroke-width": 3, "vector-effect": "non-scaling-stroke" }));
      for (let d = 0; d < 6; d++) { const a = d * 1.05 + k, rr = r * .78; g.append(sv("circle", { cx: 200 + Math.cos(a) * rr, cy: 200 + Math.sin(a) * rr, r: r * .035, fill: c, "fill-opacity": .6 })); }
    });
    const r5 = R / 32;
    g.append(sv("rect", { x: 200 - r5 * .75, y: 200 - r5 * .5, width: r5 * .3, height: r5 * .9, rx: r5 * .12, fill: "var(--muted)" }), sv("rect", { x: 200 - r5 * .4, y: 200 - r5 * .5, width: r5 * .3, height: r5 * .9, rx: r5 * .12, fill: "var(--muted)" }),
      sv("path", { d: `M${200 + r5 * .15} ${200 - r5 * .5} q${r5 * .3} ${r5 * .25} 0 ${r5 * .5} t0 ${r5 * .5} M${200 + r5 * .45} ${200 - r5 * .5} q${-r5 * .3} ${r5 * .25} 0 ${r5 * .5} t0 ${r5 * .5}`, fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, "vector-effect": "non-scaling-stroke" }));
    svg.append(wrap, sv("line", { x1: 200, y1: 0, x2: 200, y2: 400, stroke: "var(--line)", "stroke-dasharray": "3 5" }));
    const lt = txt(14, 22, "", { "text-anchor": "start", "font-size": 12, fill: "var(--accent)" }), rt = txt(386, 22, "", { "text-anchor": "end", "font-size": 12, fill: "var(--babel)" });
    svg.append(sv("rect", { x: 6, y: 6, width: 160, height: 24, rx: 12, fill: "var(--surface)", "fill-opacity": .85 }), sv("rect", { x: 234, y: 6, width: 160, height: 24, rx: 12, fill: "var(--surface)", "fill-opacity": .85 }), lt, rt,
      txt(100, 392, "TEMPLE", { "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".14em" }), txt(300, 392, "BODY", { "font-size": 10.5, fill: "var(--babel)", "letter-spacing": ".14em" }));
    $("#btZoom").append(svg);
    const r = $("#btZoomRange");
    function set(k) {
      r.value = k; g.style.transform = `scale(${Math.pow(2, k)})`;
      const z = Z[k]; lt.textContent = z.temple[0]; rt.textContent = z.body[0];
      $("#btZoomInfo").replaceChildren(el("p", { class: "eyebrow", text: `Level ${k + 1} of ${n}` }),
        el("div", { class: "pair" }, el("div", { class: "pair-t" }, el("small", { text: "Temple" }), el("b", { text: z.temple[0] }), el("span", { html: refify(z.temple[1]) })), el("div", { class: "pair-eq", text: "↔" }), el("div", { class: "pair-c" }, el("small", { text: "Body" }), el("b", { text: z.body[0] }), el("span", { text: z.body[1] }))));
    }
    r.addEventListener("input", () => set(+r.value));
    $("#btZoomPlay").addEventListener("click", async () => { for (let k = 0; k < n; k++) { set(k); await sleep(1500); } });
    set(0);
  }

  function initBtBook() {
    const L = "ACGT", cols = { A: "var(--eden)", C: "var(--babel)", G: "var(--accent)", T: "var(--flame)" };
    let seq = ""; for (let i = 0; i < 160; i++) seq += L[(i * 7 + (i * i) % 11) % 4];
    const strip = () => el("span", { class: "tape-run" }, ...[...seq].map(ch => el("i", { text: ch, style: { color: cols[ch] } })));
    $("#btTape").append(el("div", { class: "tape-inner" }, strip(), strip()));
    const svg = sv("svg", { viewBox: "0 0 420 312", role: "img", "aria-label": "A library of about a thousand books, the length of one copy of the human genome" });
    const books = [];
    for (let s = 0; s < 5; s++) {
      svg.append(sv("rect", { x: 20, y: 74 + s * 46, width: 380, height: 5, fill: "#8a6238", "fill-opacity": .6 }));
      for (let b = 0; b < 20; b++) { const h = 30 + ((b * 7 + s * 3) % 9); const bk = sv("rect", { class: "bk", x: 26 + b * 18.5, y: 74 + s * 46 - h, width: 14, height: h, rx: 2, fill: [cols.A, cols.C, cols.G, cols.T][(b + s) % 4], "fill-opacity": .8, style: { transitionDelay: (s * 20 + b) * 12 + "ms" } }); svg.append(bk); books.push(bk); }
    }
    svg.append(txt(210, 22, "100 spines × 10 = about 1,000 books of 1,000 pages", { "font-size": 12 }), txt(210, 304, "≈ 3.1 billion letters in one copy of your genome", { "font-size": 12, fill: "var(--muted)" }));
    $("#btLibrary").append(svg);
    const show = () => svg.classList.add("full");
    if (reduceMotion || !("IntersectionObserver" in window)) show(); else { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { show(); io.disconnect(); } }), { threshold: .4 }); io.observe(svg); }
    $("#btBookFacts").append(...BT().book.map(([t, d]) => el("div", { class: "card stg" }, el("h3", { text: t }), el("p", { text: d }))));
  }

  function initBtFacts() {
    $("#btFacts").append(...BT().facts.map(f => {
      const b = el("button", { class: "flipcard", type: "button", "aria-pressed": "false" },
        el("div", { class: "fc-inner" }, el("div", { class: "fc-face fc-under fc-scr" }, el("small", { text: "Scripture says" }), el("p", { html: refify(f.s) }), el("span", { class: "hint", text: "Tap to flip" })),
          el("div", { class: "fc-face fc-above" }, el("small", { text: "What we now know" }), el("p", { text: f.k }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
    $("#btFurther").append(...BT().further.map(([t, d]) => el("div", { class: "card stg further" }, el("span", { class: "spec", text: "speculative" }), el("h3", { text: t }), el("p", { html: refify(d) }))));
  }
