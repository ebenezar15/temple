  /* ================ Part VIII·e: far above all, under his feet ================ */
  const FA = () => DATA.fa;

  function initFaAbove() {
    $("#faPower").append(...FA().power.map(p => el("div", { class: "card power-meter stg" }, el("p", { class: "eyebrow gk", text: p.w }), el("h3", { text: p.t }), el("div", { class: "meter" }, el("i", { style: { "--v": p.v + "%" } })), el("p", { text: p.d }))));
    const A = FA().above, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Christ seated far above five layers: rule, authority, power, dominion and every name" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "faGlow" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .6 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 220, cy: 70, r: 80, fill: "url(#faGlow)", class: "pulse" }),
      sv("path", { d: "M196 104 L196 64 Q196 52 208 52 L232 52 Q244 52 244 64 L244 104 Z M186 104 L254 104 L254 112 L186 112 Z", fill: "var(--accent)" }),
      sv("path", { d: "M206 52 L210 38 L216 46 L220 34 L224 46 L230 38 L234 52 Z", fill: "var(--accent)" }),
      person(300, 98, .9, "var(--eden)"), txt(318, 92, "the church,", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)" }), txt(318, 106, "in him", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)" }), txt(220, 132, "Christ, at the right hand", { "font-size": 11.5 }));
    // far above dimension arrow
    svg.append(sv("defs", {}, sv("marker", { id: "faArr", viewBox: "0 0 10 10", refX: 5, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))),
      sv("line", { x1: 440, y1: 74, x2: 440, y2: 196, stroke: "var(--accent)", "stroke-width": 2.5, "marker-start": "url(#faArr)", "marker-end": "url(#faArr)" }), txt(452, 130, "far", { "text-anchor": "start", "font-size": 12, fill: "var(--accent)" }), txt(452, 146, "above", { "text-anchor": "start", "font-size": 12, fill: "var(--accent)" }));
    const bands = A.map((a, i) => {
      const y = 206 + i * 50, w = 380 - i * 20, x = 220 - w / 2;
      const g = hit(sv("g", { class: "fnode fa-band", tabindex: "0", role: "button", "aria-label": a.t }), () => sel(i));
      g.append(sv("rect", { class: "rbg", x, y, width: w, height: 40, rx: 10, fill: "var(--flame)", "fill-opacity": .14 + i * .04, stroke: "var(--flame)", "stroke-opacity": .5 }), txt(x + 14, y + 25, a.t, { "text-anchor": "start", "font-size": 13 }), txt(x + w - 14, y + 25, a.gk, { "text-anchor": "end", "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    const ageLab = txt(220, 462, "this age", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic" });
    svg.append(ageLab);
    $("#faAbove").append(svg);
    let age = 0, cur = 0;
    const chips = ["This age", "The age to come"].map((t, i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { age = i; selectSet(chips, i); svg.classList.toggle("age2", i === 1); ageLab.textContent = i ? "the age to come: every power under his feet, God all in all" : "this age: powers still active, but already beneath him"; sel(cur); } }));
    $("#faAge").append(...chips); selectSet(chips, 0);
    function sel(i) {
      cur = i; bands.forEach((g, j) => g.classList.toggle("sel", j === i));
      const a = A[i];
      $("#faAbovePanel").replaceChildren(el("p", { class: "eyebrow", text: `Far above · ${i + 1} of ${A.length}` }), el("h3", { text: `${a.t} (${a.gk})` }), el("p", { html: refify(a.d) }),
        el("p", { class: "use", html: age ? "In the age to come every one of these is destroyed or subjected, and God is “all in all” (<span class=\"ref\">1 Cor 15:24–28</span>)." : "In this age they still operate, but from beneath his feet. You face them from a seat above them, not from a pit beneath them (<span class=\"ref\">Eph 2:6</span>)." }));
    }
    sel(0);
    $("#faAsc").append(photo("ascension"));
  }

  function initFaBody() {
    const H = FA().headFeet, svg = sv("svg", { viewBox: "0 0 520 480", role: "img", "aria-label": "Christ the head in heaven, the church his body on earth, and enemies brought under the feet" });
    svg.append(sv("rect", { width: 520, height: 130, fill: "var(--accent)", "fill-opacity": .1 }), sv("rect", { y: 400, width: 520, height: 80, fill: "var(--eden)", "fill-opacity": .12 }),
      txt(16, 22, "HEAVEN", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".14em" }), txt(16, 470, "EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".14em" }));
    const head = sv("g", { class: "hb hb-head" }, sv("circle", { cx: 260, cy: 72, r: 52, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), sv("circle", { cx: 260, cy: 76, r: 36, fill: "var(--accent)" }), sv("path", { d: "M238 44 L236 26 L248 34 L260 20 L272 34 L284 26 L282 44 Z", fill: "var(--accent)" }));
    const body = sv("g", { class: "hb hb-body" }, sv("path", { d: "M222 120 Q260 108 298 120 L312 300 Q260 316 208 300 Z", fill: "var(--babel)", "fill-opacity": .55 }), sv("path", { d: "M222 130 L170 250 M298 130 L350 250", stroke: "var(--babel)", "stroke-opacity": .55, "stroke-width": 22, "stroke-linecap": "round" }),
      ...[[240, 170], [270, 190], [250, 220], [280, 240], [235, 260], [262, 280]].map(([x, y]) => person(x, y, .6, "var(--eden)")), txt(370, 190, "the church,", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }), txt(370, 206, "his body", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }));
    const legs = sv("g", { class: "hb hb-feet" }, sv("path", { d: "M236 300 L224 404 M284 300 L296 404", stroke: "var(--babel)", "stroke-opacity": .55, "stroke-width": 26, "stroke-linecap": "round" }), sv("path", { d: "M200 404 h44 v14 h-50 Z M276 404 h44 l6 14 h-50 Z", fill: "var(--babel)" }), txt(370, 380, "the feet are", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }), txt(370, 396, "in the body", { "text-anchor": "start", "font-size": 12, fill: "var(--babel)" }));
    svg.append(sv("path", { d: "M260 112 L260 124", stroke: "var(--accent)", "stroke-width": 6 }), body, legs, head);
    const foes = ["sin", "fear", "lies", "powers", "curse", "death"].map((n, i) => {
      const x = i < 3 ? 50 + i * 40 : 360 + (i - 3) * 50, y = 440 - (i % 2) * 14;
      const g = sv("g", { class: "foe" }, sv("circle", { cx: x, cy: y - 8, r: 14, fill: "var(--flame)", "fill-opacity": .6 }), txt(x, y + 18, n, { "font-size": 10, fill: "var(--flame)" }));
      g.dataset.tx = 230 + i * 12 - x; g.dataset.ty = 462 - y;
      svg.append(g); return g;
    });
    $("#faBody").append(svg);
    const chips = H.map((h, i) => el("button", { class: "chip", type: "button", text: ["Head", "Body", "Feet", "Under"][i], onclick: () => sel(i) }));
    $("#faBodyChips").append(...chips);
    function sel(i) {
      selectSet(chips, i); svg.dataset.part = H[i].id;
      const h = H[i]; $("#faBodyPanel").replaceChildren(el("h3", { text: h.t }), el("span", { class: "ref", text: h.ref }), el("p", { html: refify(h.d) }));
    }
    sel(2);
    $("#faBodyGo").addEventListener("click", async () => {
      foes.forEach(f => { f.style.transform = ""; f.classList.remove("down"); });
      await sleep(80); sel(3);
      for (const f of foes) { await sleep(300); f.style.transform = `translate(${f.dataset.tx}px, ${f.dataset.ty}px) scale(.6)`; f.classList.add("down"); }
    });
  }

  function initFaUntil() {
    const U = FA().until, svg = sv("svg", { viewBox: "0 0 900 210", role: "img", "aria-label": "Psalm 110:1 as a timeline: sit, until, footstool, the last enemy", style: { minWidth: "720px" } });
    const xs = [110, 340, 570, 800];
    svg.append(sv("line", { x1: 60, y1: 120, x2: 850, y2: 120, stroke: "var(--line)", "stroke-width": 10, "stroke-linecap": "round" }));
    const fill = sv("line", { x1: 60, y1: 120, x2: 60, y2: 120, stroke: "var(--accent)", "stroke-width": 10, "stroke-linecap": "round" });
    svg.append(fill);
    const icons = [
      sv("path", { d: "M-18 18 V-12 Q-18 -20 -10 -20 H10 Q18 -20 18 -12 V18 Z M-24 18 H24 V24 H-24 Z", fill: "var(--accent)" }),
      sv("path", { d: "M-14 -22 H14 M-14 22 H14 M-12 -22 Q-12 0 0 0 Q12 0 12 -22 M-12 22 Q-12 0 0 0 Q12 0 12 22", stroke: "var(--babel)", "stroke-width": 3, fill: "none" }),
      sv("path", { d: "M-26 8 H26 V16 H-26 Z M-20 16 V26 M20 16 V26 M-12 -10 l8 -12 l8 12 Z M4 -6 l8 -12 l8 12 Z", fill: "var(--eden)", stroke: "var(--eden)", "stroke-width": 3 }),
      sv("path", { d: "M-16 22 V0 A16 16 0 0 1 16 0 V22 Z M-28 -24 L28 24", fill: "var(--muted)", stroke: "var(--flame)", "stroke-width": 4 })
    ];
    const nodes = U.map((u, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": u.t }), () => set(i));
      const ic = icons[i]; ic.setAttribute("transform", `translate(${xs[i]} 58)`);
      g.append(sv("circle", { class: "rbg", cx: xs[i], cy: 120, r: 16, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), ic, txt(xs[i], 166, u.t, { "font-size": 13 }), txt(xs[i], 186, u.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#faUntil").append(svg);
    const r = $("#faUntilRange");
    let cur = 60;
    function set(i) {
      r.value = i;
      nodes.forEach((g, j) => $(".rbg", g).setAttribute("fill", j <= i ? "var(--accent)" : "var(--surface)"));
      tween(cur, xs[i], 600, v => { cur = v; fill.setAttribute("x2", v); });
      const u = U[i]; info("#faUntilPanel", `Psalm 110:1 · ${i + 1} of 4`, u.t, u.ref, u.d);
    }
    r.addEventListener("input", () => set(+r.value));
    set(0);
  }

  function initFaEnemies() {
    const E = FA().enemies;
    const stool = sv("svg", { viewBox: "0 0 520 190", role: "img", "aria-label": "A footstool beneath the feet; subdued enemies are placed under it" });
    stool.append(sv("path", { d: "M150 60 h60 v18 h-66 Z M310 60 h60 l6 18 h-66 Z", fill: "var(--babel)" }), sv("rect", { x: 120, y: 80, width: 280, height: 22, rx: 6, fill: "var(--accent)" }), sv("path", { d: "M140 102 v40 M380 102 v40", stroke: "var(--accent)", "stroke-width": 8 }), txt(260, 30, "“until I make your enemies your footstool”", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    const pile = sv("g", {}); stool.append(pile, sv("text", { x: 260, y: 180, "text-anchor": "middle", "font-size": 11.5, "font-weight": 700, fill: "var(--muted)", id: "faCount" }, "0 of 11 subdued"));
    $("#faStool").append(stool);
    const done = new Set();
    const tiles = E.map((e, i) => {
      const b = el("button", { class: "etile" + (e.id === "death" ? " last" : ""), type: "button", "aria-pressed": "false", onclick: () => sel(i) },
        sv("svg", { viewBox: "-16 -16 32 32", "aria-hidden": "true" }, sv("path", { d: e.icon, fill: "none", stroke: "currentColor", "stroke-width": 2.5, "stroke-linecap": "round", "stroke-linejoin": "round" })), el("span", { text: e.n }));
      $("#faEnemies").append(b); return b;
    });
    function subdue(i) {
      if (done.has(i)) return; done.add(i);
      const k = done.size - 1, x = 160 + (k % 6) * 40, y = 120 + Math.floor(k / 6) * 26;
      const g = sv("g", { class: "subdued" }, sv("circle", { cx: x, cy: y, r: 11, fill: E[i].id === "death" ? "var(--ink)" : "var(--flame)", "fill-opacity": .7 }), sv("path", { d: E[i].icon, transform: `translate(${x} ${y}) scale(.55)`, fill: "none", stroke: "var(--surface)", "stroke-width": 3 }));
      pile.append(g); tiles[i].classList.add("done");
      $("#faCount", stool).textContent = done.size === E.length ? "Every enemy under his feet: God is all in all" : `${done.size} of ${E.length} subdued`;
      if (done.size === E.length && window.__burst) { const r = stool.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + 60); }
    }
    function sel(i) {
      selectSet(tiles, i);
      const e = E[i];
      $("#faEnemyPanel").replaceChildren(el("p", { class: "eyebrow", text: e.id === "death" ? "The last enemy" : `Enemy ${i + 1} of ${E.length}` }), el("h3", { text: e.n }),
        el("div", { class: "estages" },
          el("div", { class: "es s1" }, el("small", { text: "① Defeated at the cross" }), el("p", { html: refify(e.defeated) })),
          el("div", { class: "es s2" }, el("small", { text: "② Being subdued through the body" }), el("p", { html: refify(e.body) })),
          el("div", { class: "es s3" }, el("small", { text: "③ Destroyed at the end" }), el("p", { html: refify(e.end) }))),
        el("button", { class: "btn primary small", type: "button", text: done.has(i) ? "Under his feet ✓" : "Subdue: put it under his feet ▸", onclick: ev => { subdue(i); ev.target.textContent = "Under his feet ✓"; } }));
    }
    sel(0);
  }

  function initFaDeath() {
    const D = FA().death, W = 1000, n = D.length;
    const svg = sv("svg", { viewBox: `0 0 ${W} 220`, role: "img", "aria-label": "Timeline of death from Genesis to Revelation", style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "faDG", gradientUnits: "userSpaceOnUse", x1: 40, y1: 0, x2: W - 40, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--ink)" }), sv("stop", { offset: .5, "stop-color": "var(--flame)" }), sv("stop", { offset: .68, "stop-color": "var(--accent)" }), sv("stop", { offset: 1, "stop-color": "var(--eden)" }))),
      sv("path", { class: "draw", d: `M40 110 L${W - 40} 110`, stroke: "url(#faDG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = D.map((_, i) => 60 + i * (W - 120) / (n - 1));
    const gs = D.map((d, i) => {
      const x = xs[i], up = i % 2 === 0, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": d.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: 110, r: i === 5 ? 18 : 12, fill: "var(--surface)", stroke: i < 4 ? "var(--flame)" : i === 5 ? "var(--accent)" : "var(--eden)", "stroke-width": 4 }));
      if (i === 5) g.append(sv("circle", { cx: x, cy: 110, r: 28, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }));
      const w = d.t.split(" "), h = Math.ceil(w.length / 2), two = d.t.length > 16, ly = up ? 58 : 166;
      g.append(sv("line", { x1: x, y1: up ? 70 : 126, x2: x, y2: up ? 96 : 150, stroke: "var(--line)", "stroke-width": 2 }), txt(x, ly - (two ? 8 : 0), two ? w.slice(0, h).join(" ") : d.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, w.slice(h).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), d.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#faDeath").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const d = D[i]; info("#faDeathPanel", `The last enemy · ${i + 1} of ${n}`, d.t, d.ref, d.d); }
    sel(5);
    // swallowed up
    const sw = sv("svg", { viewBox: "0 0 420 220", role: "img", "aria-label": "Death swallowed up in victory" });
    const deathG = sv("g", { class: "sw-death" }, sv("rect", { x: 120, y: 80, width: 180, height: 60, rx: 10, fill: "var(--ink)", "fill-opacity": .8 }), txt(210, 118, "DEATH", { "font-size": 22, fill: "var(--surface)", "letter-spacing": ".2em" }));
    const sting = sv("path", { class: "sw-sting", d: "M300 110 q30 -10 40 -40 l6 10 l-12 2", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round" });
    const vic = sv("circle", { class: "sw-vic", cx: 210, cy: 110, r: 0, fill: "var(--accent)" });
    const vt = txt(210, 118, "VICTORY", { "font-size": 22, fill: "var(--accent-ink)", "letter-spacing": ".2em", class: "sw-vt", opacity: 0 });
    sw.append(deathG, sting, vic, vt, txt(210, 206, "“Death is swallowed up in victory” · 1 Cor 15:54", { "font-size": 11.5, "font-style": "italic", fill: "var(--muted)" }));
    $("#faSwallow").append(sw);
    $("#faSwallowGo").addEventListener("click", async () => {
      sw.classList.remove("go"); vic.setAttribute("r", 0); vt.setAttribute("opacity", 0);
      await sleep(60); sw.classList.add("go");
      await sleep(700); tween(0, 120, 900, v => vic.setAttribute("r", v));
      await sleep(900); vt.setAttribute("opacity", 1);
      if (window.__burst && !reduceMotion) { const r = sw.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + r.height / 2); }
    });
    $("#faDeathDo").append(...FA().deathDo.map(([t, ref, d], i) => el("div", { class: "card stg dd-card" }, el("span", { class: "errn ok", text: String(i + 1) }), el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { text: d }))));
  }

  function initFaDaily() {
    const D = FA().daily;
    const cards = D.map(d => {
      const b = el("button", { class: "flipcard", type: "button", "aria-pressed": "false", "aria-label": `${d.s}: flip to living from above` },
        el("div", { class: "fc-inner" }, el("div", { class: "fc-face fc-under" }, el("small", { text: "Living under" }), el("b", { text: d.s }), el("p", { text: d.under })),
          el("div", { class: "fc-face fc-above" }, el("small", { text: "Living from above" }), el("b", { text: d.s }), el("p", { html: refify(d.above) }))));
      b.addEventListener("click", () => flip(b, !b.classList.contains("flipped")));
      $("#faDaily").append(b); return b;
    });
    function flip(b, on) { b.classList.toggle("flipped", on); b.setAttribute("aria-pressed", String(on)); }
    const chips = [["Living under", false], ["Living from above", true]].map(([t, on], i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { selectSet(chips, i); cards.forEach((c, k) => setTimeout(() => flip(c, on), reduceMotion ? 0 : k * 90)); } }));
    $("#faDailyToggle").append(...chips); selectSet(chips, 0);
  }

  function initFaAssign() {
    const A = FA().assign, n = A.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 250`, role: "img", "aria-label": "Seven steps of the body's assignment along a path", style: { minWidth: "760px" } });
    const pts = A.map((_, i) => [70 + i * (W - 140) / (n - 1), i % 2 ? 160 : 90]);
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
    svg.append(sv("path", { d, fill: "none", stroke: "var(--line)", "stroke-width": 8, "stroke-linejoin": "round" }), sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "3 9", class: "flow" }));
    if (!reduceMotion) { const dot = sv("circle", { r: 8, fill: "var(--accent)" }); dot.append(sv("animateMotion", { dur: "10s", repeatCount: "indefinite", path: d })); svg.append(dot); }
    const gs = A.map((a, i) => {
      const [x, y] = pts[i], g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": a.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 22, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), txt(x, y + 5, String(i + 1), { "font-size": 14, fill: "var(--accent)" }));
      const w = a.t.split(" "), h = Math.ceil(w.length / 2), ty = i % 2 ? y + 46 : y - 38;
      g.append(txt(x, ty, w.slice(0, h).join(" "), { "font-size": 12.5 }), txt(x, ty + 15, w.slice(h).join(" "), { "font-size": 12.5 }));
      svg.append(g); return g;
    });
    svg.append(txt(W / 2, 244, "“Rule in the midst of your enemies! Your people will offer themselves freely” · Ps 110:2–3", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    $("#faAssign").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const a = A[i]; info("#faAssignPanel", `The body’s assignment · ${i + 1} of ${n}`, a.t, a.ref, a.d); }
    sel(0);
  }
