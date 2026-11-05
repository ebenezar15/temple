  /* ================ Part IX: heaven and earth united ================ */
  const SN = () => DATA.sn;
  const tween = (from, to, ms, fn) => {
    if (reduceMotion) return fn(to);
    const t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; fn(from + (to - from) * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const info = (sel, eyebrow, t, ref, d, extra) => $(sel).replaceChildren(...[el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: t }), ref ? el("span", { class: "ref", text: ref }) : null, el("p", { html: refify(d) }), ...(extra || [])].filter(Boolean));

  /* 1 · Heaven–earth overlap slider */
  function initSnMerge() {
    const M = SN().merge, R = 92, C = 190;
    const svg = sv("svg", { viewBox: "0 0 520 380", role: "img", "aria-label": "Two circles, heaven and earth, overlapping more or less at each stage of the biblical story" });
    svg.append(sv("defs", {},
      sv("radialGradient", { id: "snHeav" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .55 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": .14 })),
      sv("radialGradient", { id: "snEarth" }, sv("stop", { offset: 0, "stop-color": "var(--eden)", "stop-opacity": .5 }), sv("stop", { offset: 1, "stop-color": "var(--eden)", "stop-opacity": .14 })),
      sv("clipPath", { id: "snClip" }, sv("circle", { id: "snClipC", cx: 260, cy: C, r: R }))));
    const rays = sv("g", { class: "sn-rays", opacity: 0 }, ...Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return sv("line", { x1: 260 + Math.cos(a) * 104, y1: C + Math.sin(a) * 104, x2: 260 + Math.cos(a) * 150, y2: C + Math.sin(a) * 150, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" }); }));
    const heav = sv("circle", { cx: 260, cy: C, r: R, fill: "url(#snHeav)", stroke: "var(--accent)", "stroke-width": 2.5 });
    const earth = sv("circle", { cx: 260, cy: C, r: R, fill: "url(#snEarth)", stroke: "var(--eden)", "stroke-width": 2.5 });
    const lens = sv("circle", { cx: 260, cy: C, r: R, fill: "var(--accent)", "fill-opacity": .45, "clip-path": "url(#snClip)", class: "pulse" });
    const hl = txt(260, 0, "HEAVEN", { "font-size": 13, fill: "var(--accent)", "letter-spacing": ".16em" }), el2 = txt(260, 0, "EARTH", { "font-size": 13, fill: "var(--eden)", "letter-spacing": ".16em" });
    const stars = sv("g", {}, ...[[-40, -30], [30, -50], [50, -14], [-20, -60], [-58, -6]].map(([x, y]) => sv("circle", { cx: 260 + x, cy: y, r: 2.5, fill: "var(--accent)" })));
    const hills = sv("path", { d: "", fill: "var(--eden)", "fill-opacity": .5 });
    const label = txt(260, 0, "", { "font-size": 12.5, fill: "var(--ink)" });
    svg.append(rays, heav, earth, lens, stars, hills, hl, el2, label);
    $("#snMerge").append(svg);
    let cur = 1 - M[0].ov;
    function draw(off) {
      const d = off * 100, hy = C - d, ey = C + d;
      heav.setAttribute("cy", hy); earth.setAttribute("cy", ey); $("#snClipC", svg).setAttribute("cy", ey); lens.setAttribute("cy", hy);
      hl.setAttribute("y", hy - R + 30); el2.setAttribute("y", ey + R - 18);
      stars.setAttribute("transform", `translate(0 ${hy})`);
      hills.setAttribute("d", `M${200} ${ey + 46} Q230 ${ey + 22} 260 ${ey + 40} Q290 ${ey + 18} 320 ${ey + 46} Z`);
      label.setAttribute("y", C + 5);
      rays.setAttribute("opacity", Math.max(0, 1 - off * 6));
    }
    const r = $("#snMergeRange");
    function set(i) {
      r.value = i; const m = M[i], target = 1 - m.ov;
      tween(cur, target, 800, v => { cur = v; draw(v); });
      label.textContent = m.ov > .2 ? m.t : "";
      const part = (DATA.sn.hub.find(h => h.f === m.page) || { n: "", t: "Connections" });
      info("#snMergeInfo", `Moment ${i + 1} of ${M.length} · overlap ${Math.round(m.ov * 100)}%`, m.t, m.ref, m.d, [el("a", { class: "btn small", href: m.page, text: `See it in ${part.n ? "Part " + part.n : "Connections"} →` })]);
    }
    r.addEventListener("input", () => set(+r.value));
    $("#snMergePlay").addEventListener("click", async () => { for (let i = 0; i < M.length; i++) { set(i); await sleep(1500); } });
    draw(cur); set(0);
  }

  /* 2 · anakephalaiōsis: gathering threads */
  function initSnWord() {
    const W = SN().word, svg = sv("svg", { viewBox: "0 0 520 320", role: "img", "aria-label": "Threads from heaven and earth gathered into one knot under Christ the head" });
    svg.append(sv("rect", { width: 520, height: 160, fill: "var(--accent)", "fill-opacity": .07 }), sv("rect", { y: 160, width: 520, height: 160, fill: "var(--eden)", "fill-opacity": .08 }),
      txt(16, 22, "THINGS IN HEAVEN", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(16, 310, "THINGS ON EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".12em" }));
    const K = [260, 150];
    const pts = [[40, 50], [110, 30], [190, 70], [330, 60], [420, 30], [490, 70], [30, 270], [120, 300], [200, 250], [320, 290], [410, 250], [490, 290]];
    const threads = pts.map(([x, y], i) => {
      const c = i < 6 ? "var(--accent)" : "var(--eden)";
      const p = sv("path", { d: `M${x} ${y} C${x} ${(y + K[1]) / 2} ${K[0] + (x - K[0]) * .3} ${K[1] + (i < 6 ? -40 : 40)} ${K[0]} ${K[1]}`, fill: "none", stroke: c, "stroke-width": 3, "stroke-linecap": "round", pathLength: 1, class: "thread", style: { transitionDelay: i * .07 + "s" } });
      svg.append(p, sv("circle", { cx: x, cy: y, r: 6, fill: c }));
      return p;
    });
    const knot = sv("g", { class: "knot" }, sv("circle", { cx: K[0], cy: K[1], r: 18, fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 3 }), sv("path", { d: `M${K[0] - 9} ${K[1]} q9 -14 18 0 q-9 14 -18 0`, fill: "none", stroke: "var(--ink)", "stroke-width": 2.5 }));
    const head = sv("g", { class: "headc" }, sv("circle", { cx: 260, cy: 70, r: 30, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), sv("path", { d: "M244 82 L242 60 L252 68 L260 54 L268 68 L278 60 L276 82 Z", fill: "var(--accent)" }), sv("line", { x1: 260, y1: 100, x2: 260, y2: 132, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "3 4" }), txt(250, 116, "Christ, the head", { "text-anchor": "end", "font-size": 12, fill: "var(--accent)" }));
    svg.append(knot, head);
    $("#snWord").append(svg);
    $("#snWordGo").addEventListener("click", () => { svg.classList.remove("gathered"); void svg.getBoundingClientRect(); requestAnimationFrame(() => svg.classList.add("gathered")); });
    $("#snWordPanel").append(el("p", { class: "eyebrow", text: "Ephesians 1:10" }), el("p", { class: "big-word", text: W.w }), el("p", { class: "muted small", text: W.tr }),
      el("div", { class: "wparts" }, ...W.parts.flatMap(([a, b], i) => [i ? el("span", { class: "wplus", text: "+" }) : null, el("span", { class: "wpart" }, el("b", { text: a }), el("small", { text: b }))].filter(Boolean))),
      el("p", { html: refify(W.d) }));
    $("#snDore").append(photo("dore"));
  }

  /* 3 · Hub: every part summed up in Christ */
  function initSnHub() {
    const H = SN().hub, cx = 260, cy = 260, rad = 190;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Hub diagram: the eight parts of the study connected to Christ at the centre" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "3 6" }));
    const nodes = H.map((h, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / H.length, x = cx + Math.cos(a) * (rad + 8), y = cy + Math.sin(a) * rad, c = KC[h.c];
      svg.append(sv("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: "var(--line)", "stroke-width": 2.5 }), sv("line", { x1: x, y1: y, x2: cx, y2: cy, stroke: c, "stroke-width": 2, class: "flow", opacity: .7 }));
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `Part ${h.n}: ${h.t}` }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 52, fill: "var(--surface)", stroke: c, "stroke-width": 3 }), txt(x, y - 6, h.n, { "font-size": 17, fill: c, class: "jnum" }));
      const w = h.t.split(" "), half = Math.ceil(w.length / 2);
      g.append(txt(x, y + 12, w.slice(0, half).join(" "), { "font-size": 9.5 }), txt(x, y + 24, w.slice(half).join(" "), { "font-size": 9.5 }));
      return g;
    });
    svg.append(...nodes);
    svg.append(sv("circle", { cx, cy, r: 70, fill: "var(--accent)", "fill-opacity": .16, class: "pulse" }), sv("circle", { cx, cy, r: 54, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }),
      txt(cx, cy - 8, "All things", { "font-size": 13 }), txt(cx, cy + 8, "united", { "font-size": 13 }), txt(cx, cy + 24, "in Christ", { "font-size": 13, fill: "var(--accent)" }));
    $("#snHub").append(svg);
    function sel(i) {
      nodes.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const h = H[i];
      info("#snHubPanel", `Part ${h.n}`, h.t, null, h.d, [el("a", { class: "btn primary small", href: h.f, text: `Open Part ${h.n} →` })]);
    }
    sel(0);
  }

  /* 4 · Expanding Eden */
  function initSnExpand() {
    const E = SN().expand, cx = 260, cy = 210;
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "The garden of Eden growing until God's presence fills the whole earth" });
    svg.append(sv("defs", {}, sv("clipPath", { id: "snEarthClip" }, sv("circle", { cx, cy, r: 190 }))));
    svg.append(sv("circle", { cx, cy, r: 190, fill: "var(--babel)", "fill-opacity": .14, stroke: "var(--babel)", "stroke-width": 2 }));
    [["M120 140 q30 -40 80 -20 q20 30 -10 60 q-40 20 -70 -40 Z"], ["M290 110 q50 -20 90 20 q10 40 -30 50 q-50 -10 -60 -70 Z"], ["M180 280 q40 -10 60 30 q-10 40 -50 30 q-30 -30 -10 -60 Z"], ["M330 250 q40 0 50 40 q-20 30 -50 10 Z"]].forEach(([d]) => svg.append(sv("path", { d, fill: "var(--muted)", "fill-opacity": .2 })));
    const garden = sv("circle", { cx, cy, r: E[0].r, fill: "var(--eden)", "fill-opacity": .5, "clip-path": "url(#snEarthClip)", class: "sn-garden" });
    const glow = sv("circle", { cx, cy, r: E[0].r + 10, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "4 6", "clip-path": "url(#snEarthClip)", class: "sn-garden" });
    svg.append(garden, glow);
    E.forEach((e, i) => { if (i) svg.append(sv("circle", { cx, cy, r: Math.min(e.r, 188), fill: "none", stroke: "var(--line)", "stroke-dasharray": "2 5" })); });
    svg.append(sv("g", { transform: `translate(${cx} ${cy})` }, sv("rect", { x: -3, y: -6, width: 6, height: 18, fill: "#6b4a2b" }), sv("circle", { cx: 0, cy: -12, r: 12, fill: "var(--eden)" }), sv("circle", { cx: -4, cy: -14, r: 2.5, fill: "var(--accent)" }), sv("circle", { cx: 5, cy: -9, r: 2.5, fill: "var(--accent)" })));
    const cube = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("rect", { x: cx - 24, y: 22, width: 48, height: 40, fill: "var(--accent)", "fill-opacity": .8 }), sv("path", { d: `M${cx - 24} 22 l12 -10 h48 l-12 10 Z M${cx + 24} 22 l12 -10 v40 l-12 10 Z`, fill: "var(--accent)" }), txt(cx + 50, 44, "New Jerusalem", { "text-anchor": "start", "font-size": 11.5, fill: "var(--accent)" }));
    svg.append(cube, txt(cx, 412, "the earth", { "font-size": 11.5, fill: "var(--babel)" }));
    $("#snExpand").append(svg);
    const chips = E.map((e, i) => el("button", { class: "chip", type: "button", text: String(i + 1), "aria-label": e.t, onclick: () => set(i) }));
    $("#snExpandChips").append(...chips);
    let cur = E[0].r;
    function set(i) {
      selectSet(chips, i);
      const e = E[i];
      tween(cur, e.r, 900, v => { cur = v; garden.setAttribute("r", v); glow.setAttribute("r", v + 10); });
      cube.setAttribute("opacity", i === E.length - 1 ? 1 : 0);
      info("#snExpandInfo", `Stage ${i + 1} of ${E.length}`, e.t, e.ref, e.d);
    }
    $("#snExpandPlay").addEventListener("click", async () => { for (let i = 0; i < E.length; i++) { set(i); await sleep(1500); } });
    set(0);
    $("#snAdam").append(photo("adam"));
  }

  /* 5 · Romans 8: creation and the revealing of sons */
  function initSnReveal() {
    const R = SN().reveal, svg = sv("svg", { viewBox: "0 0 900 280", role: "img", "aria-label": "Creation moving from groaning in bondage to glory as the sons of God are revealed" });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "snSky", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .35 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const sky = sv("rect", { width: 900, height: 220, fill: "url(#snSky)", class: "rv rv4" });
    const sun = sv("circle", { cx: 760, cy: 230, r: 50, fill: "var(--accent)", class: "rv-sun" });
    const ground = sv("path", { d: "M0 220 Q150 190 300 214 Q450 236 600 206 Q750 186 900 214 L900 280 L0 280 Z", fill: "var(--muted)", "fill-opacity": .45, class: "rv-ground" });
    const waves = sv("g", { class: "rv-groan" }, ...[0, 1, 2].map(i => sv("path", { d: `M${60 + i * 30} ${150 - i * 14} q20 -16 40 0 q20 16 40 0`, fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, style: { animationDelay: i * .3 + "s" } })), txt(120, 190, "groaning", { "font-size": 12, fill: "var(--flame)" }));
    const chains = sv("g", { class: "rv-chains" }, ...[0, 1, 2, 3, 4].map(i => sv("ellipse", { cx: 240 + i * 22, cy: 200, rx: 12, ry: 7, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), txt(284, 182, "bondage to decay", { "font-size": 11.5, fill: "var(--muted)" }));
    const watch = sv("g", { class: "rv rv1" }, ...[[600, 196], [650, 190], [700, 196]].map(([x, y]) => sv("g", { transform: `translate(${x} ${y})` }, sv("path", { d: "M0 0 L0 -26 M0 -26 q-10 -6 -6 -16 M0 -26 q10 -6 6 -16", stroke: "var(--eden)", "stroke-width": 3, fill: "none" }))), txt(650, 132, "eager longing", { "font-size": 12, fill: "var(--eden)" }));
    const sons = sv("g", { class: "rv rv2" }, ...[400, 450, 500].map((x, i) => sv("g", {}, sv("circle", { cx: x, cy: 150, r: 26, fill: "var(--accent)", "fill-opacity": .25, class: "pulse", style: { animationDelay: i * .4 + "s" } }), person(x, 182, 1.3, "var(--accent)"))), txt(450, 104, "sons led by the Spirit", { "font-size": 12.5, fill: "var(--accent)" }));
    const spirit = sv("g", { class: "rv rv3" }, sv("path", { d: "M380 86 q70 -44 140 0", fill: "none", stroke: "var(--babel)", "stroke-width": 3, "stroke-dasharray": "4 6", class: "flow" }), txt(450, 50, "the Spirit groans with us", { "font-size": 11.5, fill: "var(--babel)" }));
    const blooms = sv("g", { class: "rv rv4" }, ...[60, 140, 220, 300, 560, 640, 820, 870].map((x, i) => sv("g", { transform: `translate(${x} ${214 - (i % 3) * 6})` }, sv("line", { x1: 0, y1: 0, x2: 0, y2: -22, stroke: "var(--eden)", "stroke-width": 3 }), sv("circle", { cx: 0, cy: -26, r: 7, fill: i % 2 ? "var(--accent)" : "var(--flame)" }), sv("circle", { cx: 0, cy: -26, r: 3, fill: "var(--surface)" }))), txt(150, 140, "freedom of glory", { "font-size": 12.5, fill: "var(--eden)" }));
    svg.append(sky, sun, sv("path", { d: ground.getAttribute("d"), fill: "var(--surface)" }), ground, waves, chains, watch, spirit, sons, blooms);
    $("#snReveal").append(svg);
    const chips = R.map((r, i) => el("button", { class: "chip", type: "button", text: `${i + 1} · ${r.t}`, onclick: () => set(i) }));
    $("#snRevealChips").append(...chips);
    function set(i) {
      selectSet(chips, i);
      svg.dataset.step = i;
      $$(".rv", svg).forEach(n => { const k = +n.getAttribute("class").match(/rv(\d)/)[1]; n.classList.toggle("on", k <= i); });
      const r = R[i]; info("#snRevealPanel", `Romans 8 · step ${i + 1} of ${R.length}`, r.t, r.ref, r.d);
    }
    set(0);
    $("#snNot").append(...SN().notThis.map(([t, d]) => el("div", { class: "card stg not-card" }, el("span", { class: "notx", text: "✕" }), el("h3", { text: t }), el("p", { html: refify(d) }))));
  }

  /* 6 · nēpios → teknon → huios */
  function initSnGrowth() {
    const G = SN().growth, svg = sv("svg", { viewBox: "0 0 900 330", role: "img", "aria-label": "Three steps rising: infant, child and mature son", style: { minWidth: "700px" } });
    const steps = [[60, 250, 240], [320, 200, 260], [610, 140, 270]];
    svg.append(sv("path", { d: "M60 300 L60 250 L300 250 L300 200 L580 200 L580 140 L880 140 L880 300 Z", fill: "var(--accent)", "fill-opacity": .08 }), txt(470, 316, "“grow up in every way into him who is the head” · Eph 4:15", { "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
    const figs = [
      () => sv("g", {}, sv("circle", { cx: 0, cy: -34, r: 10, fill: "var(--muted)" }), sv("ellipse", { cx: 0, cy: -12, rx: 14, ry: 12, fill: "var(--muted)" }), sv("path", { d: "M-20 -2 q20 14 40 0", stroke: "var(--babel)", "stroke-width": 3, fill: "none" }), txt(26, -40, "milk", { "text-anchor": "start", "font-size": 10.5, fill: "var(--muted)" })),
      () => sv("g", {}, sv("circle", { cx: 0, cy: -58, r: 11, fill: "var(--eden)" }), sv("path", { d: "M-14 0 L-12 -44 Q0 -50 12 -44 L14 0 Z", fill: "var(--eden)" }), sv("path", { d: "M14 -36 q26 -6 34 -26", stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", fill: "none" }), sv("circle", { cx: 52, cy: -66, r: 9, fill: "var(--accent)", "fill-opacity": .5 }), txt(64, -66, "Abba", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)" })),
      () => sv("g", {}, sv("circle", { cx: 0, cy: -90, r: 13, fill: "var(--accent)" }), sv("path", { d: "M-24 0 L-18 -72 Q0 -80 18 -72 L24 0 Z", fill: "var(--accent)", "fill-opacity": .85 }), sv("path", { d: "M-24 0 L-30 -60 L-18 -72", fill: "var(--flame)", "fill-opacity": .6 }), sv("circle", { cx: 30, cy: -46, r: 6, fill: "none", stroke: "var(--ink)", "stroke-width": 3 }), sv("path", { d: "M18 -60 L30 -50", stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round" }), sv("path", { d: "M-10 -106 l4 -10 l6 6 l6 -6 l4 10 Z", fill: "var(--accent)" }), txt(30, 26, "ring, robe, sandals · Luke 15:22", { "font-size": 10.5, fill: "var(--muted)" }))
    ];
    const gs = G.map((g, i) => {
      const [x, y, w] = steps[i];
      const node = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `${g.w}: ${g.t}` }), () => sel(i));
      node.append(sv("rect", { class: "rbg", x, y: y - 6, width: w, height: 6, rx: 3, fill: "var(--line)" }));
      const f = figs[i](); f.setAttribute("transform", `translate(${x + 60} ${y - 8})`); node.append(f);
      node.append(txt(x + w - 70, y - 54, g.gk, { "font-size": 22, fill: [KC.muted, KC.eden, KC.accent][i], class: "jnum" }), txt(x + w - 70, y - 34, g.w, { "font-size": 13, "font-style": "italic" }), txt(x + w - 70, y - 18, g.t, { "font-size": 11.5, fill: "var(--muted)" }));
      svg.append(node); return node;
    });
    $("#snGrowth").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--accent)" : "var(--line)"));
      const g = G[i];
      info("#snGrowthPanel", `${g.gk} · ${g.w}`, g.t, g.ref, g.d, [el("ul", { class: "ticks" }, g.marks.map(m => el("li", { html: refify(m) })))]);
    }
    sel(2);
    $("#snDaughters").append(sv("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, sv("circle", { cx: 9, cy: 8, r: 4, fill: "currentColor" }), sv("circle", { cx: 16, cy: 9, r: 3.4, fill: "currentColor", opacity: .7 }), sv("path", { d: "M2 21 q7 -12 14 0 Z M12 21 q5 -10 10 0 Z", fill: "currentColor" })), el("div", {}, el("b", { text: "Sons and daughters" }), el("p", { html: refify(SN().daughters) })));
  }

  /* 7 · Body of Christ */
  function initSnBody() {
    const B = SN().body, svg = sv("svg", { viewBox: "0 0 420 500", role: "img", "aria-label": "A body with Christ as the head; select each member" });
    const col = "var(--babel)";
    svg.append(sv("g", { opacity: .3 }, sv("rect", { x: 160, y: 120, width: 100, height: 170, rx: 30, fill: col }), sv("path", { d: "M164 140 L104 250 M256 140 L316 250", stroke: col, "stroke-width": 24, "stroke-linecap": "round" }), sv("path", { d: "M182 280 L176 440 M238 280 L244 440", stroke: col, "stroke-width": 28, "stroke-linecap": "round" })));
    svg.append(sv("circle", { cx: 210, cy: 70, r: 58, fill: "var(--accent)", "fill-opacity": .18, class: "pulse" }), sv("circle", { cx: 210, cy: 70, r: 42, fill: "var(--accent)", "fill-opacity": .85 }), sv("path", { d: "M188 32 L186 14 L198 22 L210 8 L222 22 L234 14 L232 32 Z", fill: "var(--accent)" }));
    const pos = { head: [210, 70, 46, 270, 18], eyes: [196, 64, 9, 40, 70], mouth: [210, 92, 9, 40, 108], heart: [222, 166, 16, 300, 160], hands: [104, 254, 16, 30, 260], knees: [178, 370, 14, 30, 380], feet: [244, 446, 16, 300, 452], joints: [256, 142, 12, 320, 110] };
    const icons = { heart: "M0 6 C-10 -2 -8 -10 0 -5 C8 -10 10 -2 0 6 Z" };
    const gs = B.map((b, i) => {
      const [x, y, r, lx, ly] = pos[b.id];
      const g = hit(sv("g", { class: "fnode bpart", tabindex: "0", role: "button", "aria-label": b.n }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r, fill: b.id === "head" ? "transparent" : "var(--surface)", stroke: b.id === "head" ? "transparent" : "var(--accent)", "stroke-width": 2.5 }));
      if (b.id !== "head") g.append(sv("circle", { cx: x, cy: y, r: r + 6, fill: "none", stroke: "var(--accent)", "stroke-width": 1.5, class: "ping" }));
      if (icons[b.id]) g.append(sv("path", { d: icons[b.id], transform: `translate(${x} ${y})`, fill: "var(--flame)" }));
      g.append(sv("line", { x1: x, y1: y, x2: lx + (lx > 210 ? -6 : 60), y2: ly - 4, stroke: "var(--line)", "stroke-width": 1.5 }), txt(lx, ly, b.n.split(":")[0].replace(" and ligaments", ""), { "text-anchor": "start", "font-size": 12 }));
      svg.append(g); return g;
    });
    $("#snBody").append(svg);
    function sel(i) {
      gs.forEach((g, j) => g.classList.toggle("sel", j === i));
      const b = B[i];
      info("#snBodyPanel", "The body of Christ", b.n, b.ref, b.d, [el("p", { class: "use" }, el("b", { text: "As kings and priests: " }), b.kp)]);
    }
    sel(0);
  }

  /* 8 · Two-way ladder */
  function initSnLadder() {
    const L = SN().ladder, svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "A ladder between heaven and earth: priestly actions rise, kingly actions descend" });
    svg.append(sv("rect", { width: 520, height: 70, fill: "var(--accent)", "fill-opacity": .14 }), sv("rect", { y: 430, width: 520, height: 70, fill: "var(--eden)", "fill-opacity": .14 }),
      txt(260, 40, "HEAVEN · the throne", { "font-size": 12, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(260, 472, "EARTH · the nations", { "font-size": 12, fill: "var(--eden)", "letter-spacing": ".12em" }));
    svg.append(sv("line", { x1: 230, y1: 60, x2: 230, y2: 440, stroke: "var(--ink)", "stroke-width": 5, opacity: .6 }), sv("line", { x1: 290, y1: 60, x2: 290, y2: 440, stroke: "var(--ink)", "stroke-width": 5, opacity: .6 }));
    for (let y = 90; y < 440; y += 36) svg.append(sv("line", { x1: 230, y1: y, x2: 290, y2: y, stroke: "var(--ink)", "stroke-width": 4, opacity: .5 }));
    if (!reduceMotion) [["M245 440 L245 64", "var(--eden)", 0], ["M245 440 L245 64", "var(--eden)", 2], ["M275 64 L275 440", "var(--accent)", 1], ["M275 64 L275 440", "var(--accent)", 3]].forEach(([p, c, b]) => { const d = sv("circle", { r: 6, fill: c }); d.append(sv("animateMotion", { dur: "4s", begin: b + "s", repeatCount: "indefinite", path: p })); svg.append(d); });
    svg.append(txt(110, 96, "↑ PRIESTS carry up", { "font-size": 11.5, fill: "var(--eden)" }), txt(410, 96, "KINGS bring down ↓", { "font-size": 11.5, fill: "var(--accent)" }));
    const items = [];
    const pill = (it, x, y, c, kind, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": it.t }), () => sel(kind, i));
      g.append(sv("rect", { class: "rbg", x: x - 92, y: y - 15, width: 184, height: 30, rx: 15, fill: "var(--surface)", stroke: c, "stroke-width": 2 }), txt(x, y + 4.5, it.t, { "font-size": 12 }));
      svg.append(g); items.push([kind, i, g]);
    };
    L.up.forEach((it, i) => pill(it, 110, 400 - i * 80, "var(--eden)", "up", i));
    L.down.forEach((it, i) => pill(it, 410, 130 + i * 54, "var(--accent)", "down", i));
    $("#snLadder").append(svg);
    function sel(kind, i) {
      items.forEach(([k, j, g]) => $(".rbg", g).setAttribute("fill", k === kind && j === i ? "var(--glow)" : "var(--surface)"));
      const it = L[kind][i];
      info("#snLadderPanel", kind === "up" ? "Priestly: earth → heaven" : "Kingly: heaven → earth", it.t, it.ref, it.d);
    }
    sel("up", 0);
  }

  /* 9 · Spheres */
  function initSnSpheres() {
    const S = SN().spheres, cx = 260, cy = 250;
    const svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "Spheres of life around the throne, with heaven's rule spreading outward" });
    [60, 120, 180].forEach((r, i) => svg.append(sv("circle", { cx, cy, r, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "ripple-ring", style: { animationDelay: i * 1 + "s" } })));
    svg.append(sv("circle", { cx, cy, r: 50, fill: "var(--accent)", "fill-opacity": .2 }), txt(cx, cy - 4, "Thy kingdom", { "font-size": 12.5 }), txt(cx, cy + 12, "come", { "font-size": 12.5, fill: "var(--accent)" }));
    const cols = ["var(--eden)", "var(--accent)", "var(--babel)", "var(--flame)", "var(--accent)", "var(--eden)", "var(--babel)"];
    const gs = S.map((s, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / S.length, x = cx + Math.cos(a) * 190, y = cy + Math.sin(a) * 190;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.t }), () => sel(i));
      const w = s.t.split(" "), two = s.t.length > 10, half = Math.ceil(w.length / 2);
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 44, fill: "var(--surface)", stroke: cols[i], "stroke-width": 3 }), txt(x, y + (two ? -2 : 5), two ? w.slice(0, half).join(" ") : s.t, { "font-size": 11.5 }));
      if (two) g.append(txt(x, y + 12, w.slice(half).join(" "), { "font-size": 11.5 }));
      svg.append(g); return g;
    });
    $("#snSpheres").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const s = S[i]; info("#snSpherePanel", "Sphere of life", s.t, s.ref, s.d); }
    sel(0);
  }

  function initSnObjections() { objectionList("#snObjections", "#snObjFilter", SN().objections); studyGuide("#snQuestions", "#snMemory", SN().study, SN().memory); }

  /* ---------- Part VIII·d: seated in the heavenly places ---------- */
  function initWfSit() {
    const S = WF().seated, svg = sv("svg", { viewBox: "0 0 520 400", role: "img", "aria-label": "A believer seated with Christ in heavenly places, walking and standing on earth" });
    svg.append(sv("rect", { width: 520, height: 170, fill: "var(--accent)", "fill-opacity": .1, class: "lv lv0" }), sv("rect", { y: 230, width: 520, height: 170, fill: "var(--eden)", "fill-opacity": .1, class: "lv lv12" }),
      txt(16, 24, "IN THE HEAVENLY PLACES", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".12em" }), txt(16, 390, "ON EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".12em" }));
    const throne = (x, c, s) => sv("g", { transform: `translate(${x} 140) scale(${s})` }, sv("path", { d: "M-26 0 L-26 -50 Q-26 -60 -16 -60 L16 -60 Q26 -60 26 -50 L26 0 Z M-34 0 L34 0 L34 8 L-34 8 Z", fill: c, "fill-opacity": .8 }));
    svg.append(throne(220, "var(--accent)", 1.1), throne(310, "var(--accent)", .9), person(220, 118, 1.2, "var(--ink)"), sv("path", { d: "M210 76 l4 -10 l6 6 l6 -6 l4 10 Z", fill: "var(--accent)" }), person(310, 122, 1, "var(--eden)"),
      txt(220, 162, "Christ", { "font-size": 11 }), txt(310, 162, "you, in him", { "font-size": 11, fill: "var(--eden)" }));
    const beam = sv("path", { d: "M310 170 L310 300", stroke: "var(--accent)", "stroke-width": 4, "stroke-dasharray": "4 8", class: "lv lv12 dashmove" });
    const walker = sv("g", { class: "lv lv1 walker" }, person(0, 0, 1.3, "var(--eden)"));
    walker.setAttribute("transform", "translate(160 340)");
    const path = sv("path", { d: "M80 352 L440 352", stroke: "var(--eden)", "stroke-width": 3, "stroke-dasharray": "2 8", class: "lv lv1" });
    const stander = sv("g", { class: "lv lv2" }, person(310, 340, 1.5, "var(--eden)"), sv("rect", { x: 280, y: 300, width: 16, height: 40, rx: 6, fill: "var(--babel)" }), sv("path", { d: "M330 290 L330 340", stroke: "var(--ink)", "stroke-width": 3 }));
    const shot = [0, 1, 2].map(i => sv("path", { d: `M${440 + i * 10} ${296 + i * 18} l-26 4`, stroke: "var(--flame)", "stroke-width": 3, class: "lv lv2" }));
    svg.append(beam, path, walker, stander, ...shot);
    $("#wfSit").append(svg);
    const chips = S.map((s, i) => el("button", { class: "chip", type: "button", text: s.t, onclick: () => set(i) }));
    $("#wfSitChips").append(...chips);
    function set(i) {
      selectSet(chips, i); svg.dataset.s = i;
      $$(".lv", svg).forEach(n => { const k = n.getAttribute("class").match(/lv(\d+)/)[1]; n.classList.toggle("on", k.includes(String(i))); });
      const s = S[i]; info("#wfSitInfo", `Ephesians · ${i + 1} of 3`, s.t, s.ref, s.d, [el("p", { class: "use" }, el("b", { text: s.post }))]);
    }
    set(0);
  }

  function initWfTreasury() {
    const B = WF().blessings, cx = 260, cy = 260, n = B.length;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Treasury of every spiritual blessing in Ephesians 1, grouped by Father, Son and Spirit" });
    const gc = { Father: "var(--accent)", Son: "var(--flame)", Spirit: "var(--babel)" };
    const arc = (a0, a1, r) => `M${cx + Math.cos(a0) * r} ${cy + Math.sin(a0) * r} A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${cx + Math.cos(a1) * r} ${cy + Math.sin(a1) * r}`;
    const ang = i => -Math.PI / 2 + (i + .5) * 2 * Math.PI / n;
    [["Father", 0, 3], ["Son", 4, 8], ["Spirit", 9, 10]].forEach(([g, a, b]) => {
      const a0 = ang(a) - Math.PI / n + .03, a1 = ang(b) + Math.PI / n - .03;
      svg.append(sv("path", { d: arc(a0, a1, 236), fill: "none", stroke: gc[g], "stroke-width": 10, "stroke-linecap": "round", opacity: .5 }));
      const am = (a0 + a1) / 2; svg.append(txt(cx + Math.cos(am) * 214, cy + Math.sin(am) * 214 + 4, g === "Father" ? "the Father · vv. 3–6" : g === "Son" ? "the Son · vv. 7–12" : "the Spirit · vv. 13–14", { "font-size": 11, fill: gc[g] }));
    });
    const chest = sv("g", {}, sv("circle", { cx, cy, r: 70, fill: "var(--accent)", "fill-opacity": .14, class: "pulse" }), sv("rect", { x: cx - 40, y: cy - 16, width: 80, height: 46, rx: 6, fill: "var(--accent)" }), sv("path", { d: `M${cx - 40} ${cy - 16} Q${cx} ${cy - 50} ${cx + 40} ${cy - 16} Z`, fill: "var(--accent)", "fill-opacity": .75 }), sv("rect", { x: cx - 7, y: cy - 6, width: 14, height: 16, rx: 3, fill: "var(--surface)" }), txt(cx, cy + 52, "in Christ", { "font-size": 13 }));
    svg.append(chest);
    const gs = B.map((b, i) => {
      const a = ang(i), x = cx + Math.cos(a) * 160, y = cy + Math.sin(a) * 160;
      const g = hit(sv("g", { class: "fnode gem", tabindex: "0", role: "button", "aria-label": b.t, style: { animationDelay: i * .08 + "s" } }), () => sel(i));
      g.append(sv("line", { x1: cx + Math.cos(a) * 74, y1: cy + Math.sin(a) * 74, x2: x - Math.cos(a) * 24, y2: y - Math.sin(a) * 24, stroke: "var(--line)", "stroke-width": 1.5 }),
        sv("path", { class: "rbg", d: `M${x} ${y - 22} L${x + 20} ${y - 6} L${x + 12} ${y + 18} L${x - 12} ${y + 18} L${x - 20} ${y - 6} Z`, fill: "var(--surface)", stroke: gc[b.g], "stroke-width": 2.5 }), txt(x, y + 5, String(i + 1), { "font-size": 13, fill: gc[b.g] }));
      svg.append(g); return g;
    });
    $("#wfTreasury").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const b = B[i];
      $("#wfTreasuryPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: gc[b.g] }, text: `Blessing ${i + 1} of ${n} · from the ${b.g}` }), el("h3", { text: b.t }), el("span", { class: "ref", text: b.ref }), el("p", { class: "use" }, el("b", { text: "On earth this week: " }), b.now),
        el("div", { class: "htl-controls", style: { marginTop: "6px" } }, el("button", { class: "btn small", type: "button", text: "◂", "aria-label": "Previous blessing", onclick: () => sel((i + n - 1) % n) }), el("button", { class: "btn small", type: "button", text: "▸", "aria-label": "Next blessing", onclick: () => sel((i + 1) % n) })));
    }
    sel(0);
  }

  function initWfDual() {
    const D = WF().dual, n = D.length, W = 980, bw = (W - 40) / n;
    const svg = sv("svg", { viewBox: `0 0 ${W} 300`, role: "img", "aria-label": "Pairs of heavenly truths above and earthly experiences below", style: { minWidth: "760px" } });
    svg.append(sv("rect", { width: W, height: 120, fill: "var(--accent)", "fill-opacity": .08 }), sv("rect", { y: 180, width: W, height: 120, fill: "var(--eden)", "fill-opacity": .08 }),
      sv("line", { x1: 0, y1: 150, x2: W, y2: 150, stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "6 6" }), txt(W - 12, 144, "in Christ (position)", { "text-anchor": "end", "font-size": 11, fill: "var(--accent)" }), txt(W - 12, 166, "in the world (experience)", { "text-anchor": "end", "font-size": 11, fill: "var(--eden)" }));
    const wrap2 = (s, x, y, c) => { const w = s.split(" "), h = Math.ceil(w.length / 2), two = s.length > 14; return [txt(x, y - (two ? 7 : 0), two ? w.slice(0, h).join(" ") : s, { "font-size": 11.5, fill: c }), two ? txt(x, y + 8, w.slice(h).join(" "), { "font-size": 11.5, fill: c }) : null].filter(Boolean); };
    const pairs = D.map((d, i) => {
      const x = 20 + i * bw + bw / 2;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": `${d[0]} and ${d[2]}` }), () => sel(i));
      g.append(sv("rect", { class: "rt", x: x - bw / 2 + 5, y: 26, width: bw - 10, height: 70, rx: 10, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 1.6 }), ...wrap2(d[0], x, 62, "var(--ink)"),
        sv("rect", { class: "rb", x: x - bw / 2 + 5, y: 204, width: bw - 10, height: 70, rx: 10, fill: "var(--surface)", stroke: "var(--eden)", "stroke-width": 1.6 }), ...wrap2(d[2], x, 240, "var(--ink)"),
        sv("path", { class: "beamd", d: `M${x} 98 L${x} 200`, stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round", pathLength: 1 }));
      svg.append(g); return g;
    });
    const host = $("#wfDual"); host.classList.add("scroll-x"); host.append(svg);
    function sel(i) {
      pairs.forEach((g, j) => g.classList.toggle("sel", j === i));
      const d = D[i];
      $("#wfDualPanel").replaceChildren(el("p", { class: "eyebrow", text: `Pair ${i + 1} of ${n}` }), el("div", { class: "dual-row" },
        el("div", { class: "dual up" }, el("small", { text: "Above: in Christ" }), el("b", { text: d[0] }), el("span", { class: "ref", text: d[1] })),
        el("div", { class: "dual-arrow", text: "↓" }),
        el("div", { class: "dual down" }, el("small", { text: "Below: in the world" }), el("b", { text: d[2] }), el("span", { class: "ref", text: d[3] }))), el("p", { class: "use", html: refify(d[4]) }));
    }
    sel(0);
  }

  function initWfHeirs() {
    const H = WF().heirs, svg = sv("svg", { viewBox: "0 0 520 440", role: "img", "aria-label": "Inheritance meter: the Spirit as down payment now, growing through mission, and the fullness to come" });
    const zones = [["now", "NOW · the down payment", 0, "var(--eden)"], ["growing", "GROWING · through mission", 1, "var(--babel)"], ["then", "THEN · the fullness", 2, "var(--accent)"]];
    const top = 40, zh = 120;
    zones.forEach(([k, t, i, c]) => svg.append(sv("rect", { x: 140, y: top + (2 - i) * zh, width: 360, height: zh - 6, rx: 12, fill: c, "fill-opacity": .08, stroke: c, "stroke-opacity": .4 }), txt(150, top + (2 - i) * zh + 18, t, { "text-anchor": "start", "font-size": 10.5, fill: c, "letter-spacing": ".1em" })));
    // meter
    svg.append(sv("rect", { x: 50, y: top, width: 46, height: zh * 3 - 6, rx: 23, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }));
    const fill = sv("rect", { x: 54, width: 38, rx: 19, fill: "var(--accent)", y: top + zh * 3 - 10, height: 0 });
    svg.append(fill, txt(73, top + zh * 3 + 18, "arrabōn", { "font-size": 11.5, "font-style": "italic", fill: "var(--accent)" }));
    const counts = { now: 0, growing: 0, then: 0 };
    const gs = H.map((h, i) => {
      const zi = { now: 0, growing: 1, then: 2 }[h.when], k = counts[h.when]++;
      const x = 232 + (k % 2) * 180, y = top + (2 - zi) * zh + 48 + Math.floor(k / 2) * 34;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": h.t }), () => sel(i));
      g.append(sv("rect", { class: "rbg", x: x - 86, y: y - 14, width: 172, height: 28, rx: 14, fill: "var(--surface)", stroke: zones[zi][3], "stroke-width": 2 }), txt(x, y + 4, h.t.length > 27 ? h.t.slice(0, 26) + "…" : h.t, { "font-size": 11 }));
      svg.append(g); return [g, zi];
    });
    $("#wfHeirs").append(svg);
    let cur = 0;
    function sel(i) {
      gs.forEach(([g], j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const h = H[i], zi = gs[i][1], target = (zi + .5) / 3 * (zh * 3 - 14);
      tween(cur, target, 700, v => { cur = v; fill.setAttribute("height", v); fill.setAttribute("y", top + zh * 3 - 10 - v); });
      info("#wfHeirsPanel", `Co-heirs · ${zones[zi][1].split(" · ")[0].toLowerCase()}`, h.t, h.ref, h.d);
    }
    sel(0);
  }
