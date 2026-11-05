  /* ================ Part VIII: spiritual warfare and dominion ================ */
  const WF = () => DATA.wf;
  const txt = (x, y, s, o) => sv("text", Object.assign({ x, y, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, o || {}), s);
  const play = (node, frames, opt) => (reduceMotion || !node.animate) ? (Object.assign(node.style, frames[frames.length - 1]), { finished: Promise.resolve(), onfinish: null }) : node.animate(frames, Object.assign({ fill: "forwards", easing: "cubic-bezier(.3,.7,.3,1)" }, opt));
  const done = a => a.finished ? a.finished.catch(() => {}) : Promise.resolve();
  const sleep = ms => new Promise(r => setTimeout(r, reduceMotion ? 0 : ms));
  const person = (x, y, s, c) => sv("g", { transform: `translate(${x} ${y}) scale(${s || 1})` }, sv("circle", { cx: 0, cy: -26, r: 9, fill: c || "var(--ink)" }), sv("path", { d: "M-12 10 Q-12 -14 0 -14 Q12 -14 12 10 Z", fill: c || "var(--ink)" }));

  function selectSet(items, i) { items.forEach((n, j) => { n.classList.toggle("on", j === i); if (n.tagName === "BUTTON") n.setAttribute("aria-pressed", String(j === i)); }); }

  /* 1 · Layered battlefield */
  function initWfLayers() {
    const L = WF().layers, svg = sv("svg", { viewBox: "0 0 520 470", role: "img", "aria-label": "Layered map: Christ seated, the church seated with him, the powers under his feet, and people who are not the enemy" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "wfThrone" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .75 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 })),
      sv("linearGradient", { id: "wfBeam", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .5 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const bands = [[8, 112], [124, 92], [228, 112], [352, 110]];
    const fills = ["var(--accent)", "var(--eden)", "var(--flame)", "var(--babel)"];
    svg.append(sv("polygon", { points: "236,70 284,70 360,350 160,350", fill: "url(#wfBeam)", class: "wf-beam" }));
    const gs = L.map((l, i) => {
      const [y, h] = bands[i];
      const g = hit(sv("g", { class: "fnode wf-band", tabindex: "0", role: "button", "aria-label": l.n }), () => sel(i));
      g.append(sv("rect", { class: "bandbg", x: 8, y, width: 504, height: h, rx: 14, fill: fills[i], "fill-opacity": .1, stroke: fills[i], "stroke-opacity": .5, "stroke-width": 1.5 }));
      g.append(txt(24, y + 22, l.n.toUpperCase(), { "text-anchor": "start", "font-size": 11.5, fill: fills[i], "letter-spacing": ".08em" }), txt(24, y + 38, l.ref, { "text-anchor": "start", "font-size": 11, "font-weight": 600, "font-style": "italic", fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    // throne
    svg.append(sv("circle", { cx: 260, cy: 62, r: 62, fill: "url(#wfThrone)", class: "pulse" }),
      sv("path", { d: "M236 92 L236 52 Q236 40 248 40 L272 40 Q284 40 284 52 L284 92 Z M226 92 L294 92 L294 100 L226 100 Z", fill: "var(--accent)" }),
      sv("path", { d: "M246 40 L250 26 L256 34 L260 22 L264 34 L270 26 L274 40 Z", fill: "var(--accent)" }));
    svg.append(txt(410, 52, "“far above all rule", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 }), txt(410, 68, "and authority”", { "font-size": 11.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 }));
    // church seated
    [190, 225, 295, 330].forEach((x, i) => svg.append(sv("g", { class: "wf-bob", style: { animationDelay: i * .4 + "s" } }, person(x, 192, .95, "var(--eden)"))));
    svg.append(txt(260, 178, "in him", { "font-size": 11, fill: "var(--eden)" }));
    // feet line + powers
    svg.append(sv("path", { d: "M40 222 L480 222", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round" }), txt(496, 250, "under his feet", { "text-anchor": "end", "font-size": 11, fill: "var(--accent)" }));
    WF().powers.forEach((p, i) => {
      const x = 120 + i * 100, y = 292 + (i % 2) * 10;
      svg.append(sv("g", { class: "wf-drift", style: { animationDelay: i * .7 + "s" } },
        sv("path", { d: `M${x - 22} ${y + 12} Q${x - 24} ${y - 22} ${x} ${y - 26} Q${x + 24} ${y - 22} ${x + 22} ${y + 12} L${x + 14} ${y + 4} L${x + 6} ${y + 14} L${x} ${y + 4} L${x - 6} ${y + 14} L${x - 14} ${y + 4} Z`, fill: "var(--flame)", "fill-opacity": .55 }),
        sv("circle", { cx: x - 7, cy: y - 8, r: 2.5, fill: "var(--surface)" }), sv("circle", { cx: x + 7, cy: y - 8, r: 2.5, fill: "var(--surface)" }),
        txt(x, y + 32, p.gk, { "font-size": 10.5, "font-style": "italic", "font-weight": 700, fill: "var(--muted)" })));
    });
    // people
    [110, 170, 230, 290, 350, 410].forEach((x, i) => svg.append(person(x, 440, 1, i % 2 ? "var(--babel)" : "var(--muted)")));
    svg.append(sv("g", { transform: "translate(470 412)" }, sv("circle", { r: 16, fill: "none", stroke: "var(--flame)", "stroke-width": 3 }), sv("path", { d: "M-11 -11 L11 11", stroke: "var(--flame)", "stroke-width": 3 })), txt(470, 444, "not the enemy", { "font-size": 10.5, fill: "var(--flame)" }));
    $("#wfLayers").append(svg);
    function sel(i) {
      gs.forEach((g, j) => { const r = $(".bandbg", g); r.setAttribute("fill-opacity", j === i ? .26 : .1); r.setAttribute("stroke-width", j === i ? 3 : 1.5); });
      const l = L[i];
      $("#wfLayerPanel").replaceChildren(el("p", { class: "eyebrow", text: `Layer ${i + 1} of ${L.length}` }), el("h3", { text: l.n }), el("span", { class: "ref", text: l.ref }), el("p", { html: refify(l.d) }));
    }
    sel(0);
    $("#wfPowers").append(...WF().powers.map(p => el("div", { class: "card power-card tilt" }, el("p", { class: "eyebrow gk", text: p.gk }), el("h3", { text: p.n }), el("p", { html: refify(p.d) }))));
    $("#wfMichael").append(photo("michael"));
  }

  /* 2 · Word pictures */
  function wordPic(kind) {
    const s = sv("svg", { viewBox: "0 0 120 90", class: "wpic", "aria-hidden": "true" });
    const c = "var(--accent)";
    if (kind === "badge") s.append(sv("g", { class: "wp-pop" }, sv("path", { d: "M60 8 L92 20 L88 54 Q80 74 60 84 Q40 74 32 54 L28 20 Z", fill: c, "fill-opacity": .2, stroke: c, "stroke-width": 3 }), sv("path", { d: "M60 28 L65 42 L80 42 L68 51 L72 66 L60 57 L48 66 L52 51 L40 42 L55 42 Z", fill: c })));
    if (kind === "engine") s.append(sv("g", { class: "wp-spin" }, sv("circle", { cx: 60, cy: 45, r: 22, fill: "none", stroke: "var(--eden)", "stroke-width": 8 }), ...Array.from({ length: 8 }, (_, i) => sv("rect", { x: 55, y: 13, width: 10, height: 12, rx: 2, fill: "var(--eden)", transform: `rotate(${i * 45} 60 45)` }))), sv("path", { d: "M54 36 L72 45 L54 54 Z", fill: "var(--accent)", class: "wp-pulse" }));
    if (kind === "crown") s.append(sv("g", { class: "wp-pop" }, sv("path", { d: "M24 66 L20 26 L42 44 L60 16 L78 44 L100 26 L96 66 Z", fill: c }), sv("rect", { x: 24, y: 68, width: 72, height: 10, rx: 3, fill: c }), ...[42, 60, 78].map(x => sv("circle", { cx: x, cy: 56, r: 4, fill: "var(--surface)" }))));
    if (kind === "fort") {
      s.append(sv("rect", { x: 10, y: 80, width: 100, height: 4, fill: "var(--muted)" }));
      [[30, 50], [50, 50], [70, 50], [30, 30], [70, 30], [50, 30]].forEach(([x, y], i) => s.append(sv("rect", { class: "wp-brick", x, y, width: 18, height: 18, rx: 2, fill: "var(--flame)", "fill-opacity": .65, style: { "--d": i * .08 + "s", "--r": (i % 2 ? 1 : -1) * (10 + i * 6) + "deg" } })));
      [30, 50, 70].forEach(x => s.append(sv("rect", { class: "wp-brick", x: x + 4, y: 20, width: 10, height: 8, fill: "var(--flame)", "fill-opacity": .65, style: { "--d": ".5s", "--r": "25deg" } })));
    }
    return s;
  }
  function initWfWords() {
    const W = WF().words;
    const cards = W.map((w, i) => { const b = el("button", { class: "card wcard", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, wordPic(w.pic), el("p", { class: "eyebrow gk", text: w.w }), el("h3", { text: w.t })); $("#wfWords").append(b); return b; });
    function sel(i) { selectSet(cards, i); const w = W[i]; $("#wfWordPanel").replaceChildren(el("p", { class: "eyebrow", text: w.w }), el("h3", { text: w.t }), el("p", { html: refify(w.d) })); }
    sel(0);
  }

  /* 3 · Chain of authority */
  function initWfChain() {
    const wide = { son: 540, means: 600, sons: 380, under: 380 };
    const nodes = WF().chain.map(n => ({ ...n, w: wide[n.id] || 440 }));
    flowchart($("#wfChain"), nodes, WF().chainEdges, { id: "wfc", w: 900, h: 560, nodeW: 440, refsInline: true, label: "Flowchart of the chain of authority from the Father to the church", start: "son", onSelect: n => panelFill("#wfChainPanel", "Chain of authority", n) });
  }

  /* 4 · Armour of God */
  function initWfArmour() {
    const A = WF().armour, svg = sv("svg", { viewBox: "0 0 440 470", role: "img", "aria-label": "Figure of a soldier wearing the armour of God; select each piece" });
    const body = "var(--muted)";
    const aura = sv("g", { class: "wf-aura" }, sv("ellipse", { cx: 220, cy: 240, rx: 200, ry: 228, fill: "var(--accent)", "fill-opacity": .06, stroke: "var(--accent)", "stroke-width": 2, "stroke-dasharray": "6 10" }));
    svg.append(aura);
    svg.append(sv("g", { opacity: .5 },
      sv("circle", { cx: 220, cy: 84, r: 28, fill: body }),
      sv("rect", { x: 182, y: 118, width: 76, height: 150, rx: 18, fill: body }),
      sv("path", { d: "M184 130 L132 220 M256 130 L300 236", stroke: body, "stroke-width": 18, "stroke-linecap": "round" }),
      sv("rect", { x: 188, y: 262, width: 26, height: 140, rx: 10, fill: body }), sv("rect", { x: 226, y: 262, width: 26, height: 140, rx: 10, fill: body })));
    const P = {
      helmet: [sv("path", { d: "M188 88 Q188 46 220 44 Q252 46 252 88 L242 88 Q240 64 220 62 Q200 64 198 88 Z", fill: "var(--accent)" }), sv("path", { d: "M212 46 Q220 14 248 22 Q232 28 228 46 Z", fill: "var(--flame)" })],
      breast: [sv("path", { d: "M180 122 L260 122 L266 206 Q220 232 174 206 Z", fill: "var(--accent)" }), sv("path", { d: "M220 130 L220 212 M190 150 Q220 162 250 150", stroke: "var(--accent-ink)", "stroke-width": 2, fill: "none", opacity: .5 })],
      belt: [sv("rect", { x: 176, y: 222, width: 88, height: 22, rx: 6, fill: "var(--eden)" }), ...[184, 200, 216, 232, 248].map(x => sv("rect", { x, y: 244, width: 10, height: 34, rx: 3, fill: "var(--eden)", "fill-opacity": .8 }))],
      shoes: [sv("path", { d: "M184 396 L216 396 L218 420 L176 420 Q172 410 184 396 Z M224 396 L256 396 Q268 410 264 420 L222 420 Z", fill: "var(--babel)" }), ...[0, 1, 2].map(i => sv("path", { d: `M${188 + i * 8} 400 L${190 + i * 8} 386 M${232 + i * 8} 400 L${234 + i * 8} 386`, stroke: "var(--babel)", "stroke-width": 3 }))],
      shield: [sv("rect", { x: 66, y: 150, width: 96, height: 180, rx: 20, fill: "var(--babel)" }), sv("rect", { x: 74, y: 158, width: 80, height: 164, rx: 16, fill: "none", stroke: "var(--accent)", "stroke-width": 3 }), sv("circle", { cx: 114, cy: 240, r: 14, fill: "var(--accent)" }), sv("path", { d: "M114 172 L114 226 M114 254 L114 308 M82 240 L100 240 M128 240 L146 240", stroke: "var(--accent)", "stroke-width": 3 })],
      sword: [sv("path", { d: "M305 60 L315 60 L315 222 L305 222 Z M310 44 L315 60 L305 60 Z", fill: "var(--ink)", "fill-opacity": .8 }), sv("rect", { x: 290, y: 222, width: 40, height: 8, rx: 3, fill: "var(--accent)" }), sv("rect", { x: 306, y: 230, width: 8, height: 26, rx: 3, fill: "var(--flame)" })],
      pray: [sv("path", { d: "M220 6 Q228 20 220 30 Q212 20 220 6 Z M180 16 Q186 26 180 34 Q174 26 180 16 Z M260 16 Q266 26 260 34 Q254 26 260 16 Z", fill: "var(--flame)" })]
    };
    const labels = { helmet: [350, 70], breast: [350, 160], belt: [350, 236], shoes: [350, 410], shield: [24, 120], sword: [350, 120], pray: [92, 30] };
    const pieces = A.map((a, i) => {
      const g = hit(sv("g", { class: "fnode wf-piece", tabindex: "0", role: "button", "aria-label": a.n }), () => { wear(i); sel(i); });
      g.append(...P[a.id]);
      const [lx, ly] = labels[a.id];
      const lab = sv("g", { class: "wf-plab" }, sv("circle", { cx: lx, cy: ly - 4, r: 10, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }), txt(lx, ly, String(i + 1), { "font-size": 11 }), txt(lx + (lx > 300 ? 16 : 16), ly, a.n.split(" ").slice(0, a.id === "pray" ? 1 : 1)[0], { "text-anchor": "start", "font-size": 11.5, "font-weight": 700, fill: "var(--muted)" }));
      svg.append(g, lab); return g;
    });
    $("#wfArmour").append(svg);
    function wear(i) { pieces[i].classList.add("worn"); if (pieces.every(p => p.classList.contains("worn"))) { aura.classList.add("on"); } }
    function sel(i) {
      pieces.forEach((p, j) => p.classList.toggle("sel", j === i));
      const a = A[i];
      $("#wfArmourPanel").replaceChildren(el("p", { class: "eyebrow", text: `Piece ${i + 1} of ${A.length}` }), el("h3", { text: a.n }), el("span", { class: "ref", text: a.ref }), el("p", { html: refify(a.d) }), el("p", { class: "use" }, el("b", { text: "Put it on: " }), a.use));
    }
    sel(0); wear(0);
    $("#wfSuitUp").addEventListener("click", async () => {
      pieces.forEach(p => p.classList.remove("worn")); aura.classList.remove("on");
      for (let i = 0; i < A.length; i++) { await sleep(i ? 650 : 120); wear(i); sel(i); }
      if (window.__burst) { const r = svg.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + r.height * .3); }
    });
  }

  /* 5 · Evidence matrix (shared by "speak to it" and "break curses") */
  function matrix(gridSel, panelSel, legendSel, items, levels, eyebrow) {
    const grid = $(gridSel), legend = $(legendSel);
    const tiles = items.map((t, i) => {
      const [lab, c] = levels[t.lvl];
      const b = el("button", { class: "ttile", type: "button", "aria-pressed": "false", style: { "--c": c }, onclick: () => sel(i) }, el("span", { class: "tdot" }), el("b", { text: t.n }), el("small", { text: lab }));
      grid.append(b); return b;
    });
    [["all", "All", "var(--muted)"], ...Object.entries(levels).map(([k, [n, c]]) => [k, n, c])].forEach(([k, n, c]) => legend.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), style: { "--c": c } }, k !== "all" ? el("span", { class: "tdot", style: { background: c } }) : null, n)));
    legend.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", legend).forEach(c => c.setAttribute("aria-pressed", String(c === b)));
      tiles.forEach((t, i) => t.classList.toggle("dim", b.dataset.k !== "all" && items[i].lvl !== b.dataset.k));
    });
    function sel(i) {
      selectSet(tiles, i);
      const t = items[i], [lab, c] = levels[t.lvl];
      $(panelSel).replaceChildren(el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: t.n }), el("span", { class: "verdict", style: { "--c": c }, text: lab }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }), el("p", { class: "use" }, el("b", { text: "How: " }), t.how));
    }
    sel(0);
  }
  function initWfSpeak() { matrix("#wfTargets", "#wfTargetPanel", "#wfLegend", WF().targets, WF().levels, "Can we speak to it?"); }

  /* 6 · Bound in heaven */
  function initWfBind() {
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "Heaven decides, the church agrees and speaks, and earth is bound and loosed" });
    svg.append(sv("rect", { width: 520, height: 150, fill: "var(--accent)", "fill-opacity": .1 }), sv("rect", { y: 270, width: 520, height: 150, fill: "var(--babel)", "fill-opacity": .08 }));
    svg.append(txt(20, 24, "HEAVEN", { "text-anchor": "start", "font-size": 11, fill: "var(--accent)", "letter-spacing": ".14em" }), txt(20, 296, "EARTH", { "text-anchor": "start", "font-size": 11, fill: "var(--babel)", "letter-spacing": ".14em" }));
    const scroll = sv("g", { class: "wb wb0" }, sv("rect", { x: 200, y: 44, width: 120, height: 70, rx: 6, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }), sv("rect", { x: 192, y: 40, width: 136, height: 10, rx: 5, fill: "var(--accent)" }), sv("rect", { x: 192, y: 108, width: 136, height: 10, rx: 5, fill: "var(--accent)" }), txt(260, 74, "“It is", { "font-size": 12 }), txt(260, 92, "settled”", { "font-size": 12 }));
    const beam = sv("path", { class: "wb wb1", d: "M260 122 L260 196", stroke: "var(--accent)", "stroke-width": 6, "stroke-dasharray": "4 8", "stroke-linecap": "round" });
    const agree = sv("g", { class: "wb wb2" }, person(222, 232, 1.1, "var(--eden)"), person(298, 232, 1.1, "var(--eden)"), sv("path", { d: "M236 214 Q260 196 284 214", fill: "none", stroke: "var(--accent)", "stroke-width": 3 }),
      txt(260, 262, "two agree · keys turn", { "font-size": 11, fill: "var(--eden)" }), sv("path", { class: "wf-wave", d: "M330 214 q8 -10 16 0 q8 10 16 0 M330 226 q8 -10 16 0 q8 10 16 0", fill: "none", stroke: "var(--accent)", "stroke-width": 2.5 }));
    const strong = sv("g", { class: "wb wb3" }, sv("path", { d: "M70 400 Q68 330 110 322 Q152 330 150 400 Z", fill: "var(--flame)", "fill-opacity": .6 }), sv("circle", { cx: 110, cy: 312, r: 16, fill: "var(--flame)", "fill-opacity": .6 }),
      ...[340, 360, 380].map(y => sv("ellipse", { class: "chainl", cx: 110, cy: y, rx: 50, ry: 8, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), txt(170, 350, "bound", { "text-anchor": "start", "font-size": 12, fill: "var(--flame)" }));
    const freed = sv("g", { class: "wb wb3" }, person(410, 396, 1.6, "var(--eden)"), sv("path", { d: "M372 360 l-14 -10 M448 360 l14 -10 M376 380 l-18 4 M444 380 l18 4", stroke: "var(--ink)", "stroke-width": 3, "stroke-linecap": "round" }), txt(410, 312, "loosed", { "font-size": 12, fill: "var(--eden)" }));
    svg.append(scroll, beam, agree, strong, freed, sv("path", { d: "M260 280 L260 300", stroke: "var(--muted)", "stroke-width": 2 }));
    $("#wfBind").append(svg);
    const steps = [
      ["Heaven decides", "Matt 16:19; Ps 119:89", "The Greek is future perfect: “whatever you bind on earth shall have been bound in heaven”. God’s will is settled first. “Forever, O LORD, your word is firmly fixed in the heavens.”"],
      ["Heaven reveals", "Matt 16:17; Amos 3:7", "“Flesh and blood has not revealed this to you, but my Father who is in heaven.” Binding begins with revelation: hearing what the Father has decided."],
      ["The church agrees and speaks", "Matt 18:18–20; Acts 4:24–31", "“If two of you agree on earth about anything they ask, it will be done for them by my Father.” The early church prayed Psalm 2 back to God, and the place was shaken."],
      ["Earth is bound and loosed", "Matt 12:28–29; Luke 13:16", "“How can someone enter a strong man’s house … unless he first binds the strong man?” The enemy’s work is restrained and captives are loosed, as the bent woman was “loosed from this bond”."]
    ];
    const r = $("#wfBindRange");
    function set(s) {
      r.value = s;
      $$(".wb", svg).forEach(n => { const k = +n.getAttribute("class").match(/wb(\d)/)[1]; n.classList.toggle("on", k <= s); });
      const [t, ref, d] = steps[s];
      $("#wfBindInfo").replaceChildren(el("p", { class: "eyebrow", text: `Step ${s + 1} of 4` }), el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { html: refify(d) }));
    }
    r.addEventListener("input", () => set(+r.value));
    $("#wfBindPlay").addEventListener("click", async () => { for (let s = 0; s < 4; s++) { set(s); await sleep(1400); } });
    set(0);
  }

  /* 7 · Words that build worlds */
  function initWfTongue() {
    const wide = { call: 420, decree: 380, prophesy: 520 };
    const nodes = WF().tongue.map(n => ({ ...n, w: wide[n.id] || 460 }));
    flowchart($("#wfTongue"), nodes, WF().tongueEdges, { id: "wft", w: 900, h: 480, nodeW: 460, refsInline: true, label: "Flowchart from God's creative word to prophesying over our lives", start: "tongue", onSelect: n => panelFill("#wfTonguePanel", "The power of words", n) });
    // life and death picture (Prov 18:21; Jas 3:4–6)
    const svg = sv("svg", { viewBox: "0 0 520 300", role: "img", "aria-label": "Words of life grow a tree; words of death spread a fire" });
    svg.append(sv("rect", { y: 250, width: 520, height: 50, fill: "#8a6238", "fill-opacity": .3 }));
    const mouth = sv("g", { transform: "translate(260 150)" }, sv("circle", { r: 46, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }), sv("path", { d: "M-22 4 Q0 26 22 4 Q0 12 -22 4 Z", fill: "var(--ink)" }), sv("circle", { cx: -14, cy: -14, r: 4, fill: "var(--ink)" }), sv("circle", { cx: 14, cy: -14, r: 4, fill: "var(--ink)" }));
    const tree = sv("g", { class: "wl-tree" }, sv("rect", { x: 92, y: 170, width: 12, height: 80, fill: "#6b4a2b" }), ...[[98, 150, 40], [72, 172, 26], [124, 170, 28], [98, 118, 26]].map(([x, y, r]) => sv("circle", { cx: x, cy: y, r, fill: "var(--eden)" })), ...[[86, 150], [110, 164], [96, 124]].map(([x, y]) => sv("circle", { cx: x, cy: y, r: 5, fill: "var(--accent)" })));
    const fire = sv("g", { class: "wl-fire" }, ...[[380, 250, 40], [420, 250, 54], [462, 250, 36]].map(([x, y, h]) => sv("path", { class: "flick", d: `M${x - 18} ${y} Q${x - 22} ${y - h * .6} ${x} ${y - h} Q${x + 22} ${y - h * .6} ${x + 18} ${y} Z`, fill: "var(--flame)" })), ...[396, 440].map(x => sv("path", { d: `M${x} 250 l-6 -30 l12 -10 l-4 40 Z`, fill: "#4a3a2a" })));
    const lifeW = sv("g", { class: "wl-words life" }, ...["blessing", "truth", "hope"].map((w, i) => txt(200 - i * 26, 112 + i * 26, w, { "font-size": 12, fill: "var(--eden)", class: "fly", style: { animationDelay: i * .3 + "s" } })));
    const deathW = sv("g", { class: "wl-words death" }, ...["curse", "lies", "fear"].map((w, i) => txt(320 + i * 26, 112 + i * 26, w, { "font-size": 12, fill: "var(--flame)", class: "fly r", style: { animationDelay: i * .3 + "s" } })));
    svg.append(tree, fire, lifeW, deathW, mouth, txt(98, 284, "life · Prov 18:21", { "font-size": 11.5, fill: "var(--eden)" }), txt(420, 284, "a spark · Jas 3:5–6", { "font-size": 11.5, fill: "var(--flame)" }));
    $("#wfRudder").append(svg);
    const modes = [["life", "Speak life"], ["death", "Speak death"]];
    const chips = modes.map(([k, n]) => el("button", { class: "chip", type: "button", "aria-pressed": "false", text: n, onclick: () => set(k) }));
    $("#wfRudderChips").append(...chips);
    function set(k) { svg.dataset.mode = k; chips.forEach((c, i) => c.setAttribute("aria-pressed", String(modes[i][0] === k))); }
    set("life");
  }

  /* 8 · Declaration builder */
  function initWfBuilder() {
    const D = WF().declare;
    const svg = sv("svg", { viewBox: "0 0 520 200", role: "img", "aria-label": "Promise, faith, declaration and fruit" });
    const stations = [[60, "Promise", "M-22 -16 L0 -10 L22 -16 L22 16 L0 22 L-22 16 Z M0 -10 L0 22"], [190, "Faith", "M0 18 C-30 -4 -18 -26 0 -12 C18 -26 30 -4 0 18 Z"], [320, "Speak", "M-16 -8 Q0 20 16 -8 Q0 2 -16 -8 Z"], [450, "Fruit", "M0 22 L0 -2 M0 4 Q-18 -2 -16 -18 Q-2 -14 0 4 M0 -2 Q18 -10 16 -24 Q2 -20 0 -2"]];
    const nodes = stations.map(([x, t, d], i) => {
      const g = sv("g", { class: "ds", transform: `translate(${x} 100)` }, sv("circle", { r: 44, class: "dsbg", fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 }), sv("path", { d, fill: i === 0 ? "none" : "var(--accent)", stroke: "var(--accent)", "stroke-width": 3, "stroke-linejoin": "round" }), txt(0, 70, t, { "font-size": 13 }));
      svg.append(g); return g;
    });
    [0, 1, 2].forEach(i => svg.append(sv("path", { class: "dsline", d: `M${stations[i][0] + 48} 100 L${stations[i + 1][0] - 52} 100`, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "5 7", "marker-end": "" })));
    const waves = sv("g", { class: "dswave" }, ...[0, 1, 2].map(i => sv("path", { d: `M${362 + i * 10} ${80 - i * 4} q10 20 0 ${40 + i * 8}`, fill: "none", stroke: "var(--accent)", "stroke-width": 2.5, style: { animationDelay: i * .2 + "s" } })));
    const ref = txt(260, 26, "", { "font-size": 12.5, fill: "var(--muted)", "font-style": "italic", "font-weight": 600 });
    svg.append(waves, ref);
    $("#wfDeclArt").append(svg);
    const chips = D.map((d, i) => el("button", { class: "chip", type: "button", "aria-pressed": "false", text: d.n, onclick: () => sel(i) }));
    $("#wfDeclChips").append(...chips);
    let run = 0;
    async function sel(i) {
      selectSet(chips, i);
      const d = D[i], my = ++run;
      ref.textContent = d.ref;
      nodes.forEach(n => n.classList.remove("on"));
      for (let k = 0; k < nodes.length; k++) { await sleep(k ? 380 : 40); if (my !== run) return; nodes[k].classList.add("on"); }
      void d;
    }
    const out = $("#wfDeclOut");
    function render(i) {
      const d = D[i];
      const copy = el("button", { class: "btn small", type: "button", text: "Copy", onclick: async () => { try { await navigator.clipboard.writeText(d.say + " (" + d.ref + ")"); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Select the text to copy"; } setTimeout(() => copy.textContent = "Copy", 1800); } });
      const speak = "speechSynthesis" in window ? el("button", { class: "btn small", type: "button", text: "Read aloud", onclick: () => { try { speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(d.say)); } catch (e) { /* unsupported */ } } }) : null;
      out.replaceChildren(...[el("p", { class: "eyebrow", text: d.n }), el("h3", { text: "The promise" }), el("p", { class: "promise", text: d.promise }), el("span", { class: "ref", text: d.ref }), el("h3", { class: "mt-s", text: "Your declaration" }), el("blockquote", { class: "decl", text: d.say }), el("div", { class: "htl-controls", style: { marginTop: "8px" } }, copy, speak),
        el("p", { class: "muted small", text: "Say it to God in thanks, over yourself in faith, and against fear in Jesus’ name. Change the words to fit your situation, but keep the promise." })].filter(Boolean));
    }
    chips.forEach((c, i) => c.addEventListener("click", () => render(i)));
    sel(0); render(0);
  }

  function initWfCompare() {
    const C = WF().compare, t = $("#wfCompare");
    t.append(el("thead", {}, el("tr", {}, el("th", { text: "" }), ...C.cols.map((c, i) => el("th", { class: "cc" + i, text: c })))),
      el("tbody", {}, ...C.rows.map(r => el("tr", {}, el("td", { text: r[0] }), ...r.slice(1).map((c, i) => el("td", { class: "cc" + i, html: refify(c) }))))));
  }

  /* 9 · Curse timeline */
  function initWfCurseLine() {
    const T = WF().curseLine, W = 1000, H = 230, n = T.length;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline from the curse in Genesis to no more curse in Revelation", style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "wfCurseG", x1: 0, x2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--flame)" }), sv("stop", { offset: .62, "stop-color": "var(--flame)" }), sv("stop", { offset: .74, "stop-color": "var(--accent)" }), sv("stop", { offset: 1, "stop-color": "var(--eden)" }))));
    svg.append(sv("path", { class: "draw", d: `M40 120 L${W - 40} 120`, stroke: "url(#wfCurseG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = T.map((_, i) => 60 + i * (W - 120) / (n - 1));
    const dots = T.map((t, i) => {
      const x = xs[i], cross = i === 6, up = i % 2 === 0;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": t.t }), () => sel(i));
      if (cross) g.append(sv("circle", { cx: x, cy: 120, r: 34, fill: "var(--accent)", "fill-opacity": .18, class: "pulse" }), sv("path", { d: `M${x - 4} 88 h8 v18 h14 v8 h-14 v36 h-8 v-36 h-14 v-8 h14 Z`, fill: "var(--accent)" }));
      else g.append(sv("circle", { class: "cdot", cx: x, cy: 120, r: 12, fill: "var(--surface)", stroke: i < 6 ? "var(--flame)" : "var(--eden)", "stroke-width": 4 }));
      const ly = up ? 66 : 178;
      g.append(sv("line", { x1: x, y1: up ? 78 : 136, x2: x, y2: up ? 104 : 162, stroke: "var(--line)", "stroke-width": 2 }));
      const words = t.t.split(" "), half = Math.ceil(words.length / 2), two = t.t.length > 18;
      g.append(txt(x, ly - (two ? 8 : 0), two ? words.slice(0, half).join(" ") : t.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, words.slice(half).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), t.ref.split(";")[0], { "font-size": 11, "font-weight": 600, "font-style": "italic", fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#wfCurseLine").append(svg);
    function sel(i) {
      dots.forEach((g, j) => g.classList.toggle("sel", j === i));
      const t = T[i];
      $("#wfCursePanel").replaceChildren(el("p", { class: "eyebrow", text: `${i + 1} of ${n}` }), el("h3", { text: t.t }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }));
    }
    sel(6);
  }

  /* 10 · Shield animation */
  function initWfShield() {
    const svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "Arrows of curses meet the cross and the shield of faith" });
    svg.append(sv("rect", { y: 300, width: 520, height: 40, fill: "var(--eden)", "fill-opacity": .15 }));
    // house under the cross
    const home = sv("g", {}, sv("path", { d: "M380 300 L380 210 L440 160 L500 210 L500 300 Z", fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 2 }), sv("rect", { x: 425, y: 250, width: 30, height: 50, fill: "var(--babel)", "fill-opacity": .5 }),
      sv("path", { d: "M436 92 h8 v20 h16 v8 h-16 v34 h-8 v-34 h-16 v-8 h16 Z", fill: "var(--accent)" }), person(440, 240, .9, "var(--eden)"));
    const glow = sv("ellipse", { cx: 440, cy: 200, rx: 76, ry: 124, fill: "var(--accent)", "fill-opacity": .08, stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "2 0", class: "wf-cover" });
    const shield = sv("g", { class: "wf-shieldg" }, sv("path", { d: "M330 90 Q350 80 350 100 L350 290 Q350 310 330 300 Q316 200 330 90 Z", fill: "var(--babel)" }), sv("path", { d: "M338 110 L338 280", stroke: "var(--accent)", "stroke-width": 3 }));
    const door = sv("g", { class: "wf-door" }, sv("rect", { x: 326, y: 180, width: 30, height: 40, fill: "var(--bg)", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-dasharray": "4 3" }), txt(341, 236, "open door", { "font-size": 10.5, fill: "var(--flame)" }));
    svg.append(glow, home, shield, door);
    const labels = ["curse", "spell", "word curse", "accusation"];
    const arrows = labels.map((l, i) => {
      const y = 120 + i * 46;
      const g = sv("g", { class: "arrow" }, sv("line", { x1: 20, y1: y, x2: 80, y2: y, stroke: "var(--flame)", "stroke-width": 4 }), sv("path", { d: `M80 ${y - 7} L96 ${y} L80 ${y + 7} Z`, fill: "var(--flame)" }), sv("path", { d: `M20 ${y} l-8 -6 M20 ${y} l-8 6`, stroke: "var(--flame)", "stroke-width": 3 }), txt(52, y - 8, l, { "font-size": 10.5, fill: "var(--flame)" }));
      svg.append(g); return g;
    });
    const bird = sv("g", { class: "wf-bird", opacity: 0 }, sv("path", { d: "M0 0 Q10 -10 20 0 Q30 -10 40 0", fill: "none", stroke: "var(--ink)", "stroke-width": 3 }));
    const burst = sv("circle", { cx: 440, cy: 236, r: 0, fill: "var(--flame)", "fill-opacity": .4 });
    svg.append(bird, burst);
    $("#wfShield").append(svg);
    const modes = [
      ["covered", "In Christ, no cause", "Num 23:8, 23; Prov 26:2; Isa 54:17", "“How can I curse whom God has not cursed?” A curse with no cause has nowhere to land; like a sparrow, it flits away. Stand in faith and refuse fear."],
      ["open", "An open door", "Eph 4:27; Acts 19:18–19; Matt 18:34", "Unconfessed sin, occult objects or practices, and unforgiveness give the enemy a topos, a place to stand. Here one arrow finds a gap."],
      ["closed", "Door closed by repentance", "1 John 1:9; Gal 3:13; Rev 12:11", "Confess, renounce and forgive, then declare what the blood has done. The gap closes and every arrow falls. Then bless those who cursed you (Luke 6:28)."]
    ];
    let mode = 0;
    const chips = modes.map((m, i) => el("button", { class: "chip", type: "button", "aria-pressed": String(i === 0), text: m[1], onclick: () => { mode = i; selectSet(chips, i); info(); fire(); } }));
    $("#wfShieldMode").append(...chips);
    function info() { const [, t, ref, d] = modes[mode]; door.classList.toggle("on", mode === 1); $("#wfShieldInfo").replaceChildren(el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { html: refify(d) })); }
    async function fire() {
      arrows.forEach(a => { a.getAnimations && a.getAnimations().forEach(x => x.cancel()); a.style.transform = ""; a.style.opacity = 1; });
      burst.setAttribute("r", 0);
      const runs = arrows.map(async (a, i) => {
        await sleep(i * 260);
        const through = mode === 1 && i === 1;
        const dx = through ? 330 : 222;
        await done(play(a, [{ transform: "translate(0px,0px)" }, { transform: `translate(${dx}px,${through ? 70 : 0}px)` }], { duration: 700, easing: "ease-in" }));
        if (through) { burst.setAttribute("r", 30); play(burst, [{ opacity: 1 }, { opacity: .2 }], { duration: 600 }); return; }
        await done(play(a, [{ transform: `translate(${dx}px,0px)`, opacity: 1 }, { transform: `translate(${dx - 70}px,${150 - i * 30}px) rotate(-110deg)`, opacity: 0 }], { duration: 650, easing: "ease-out" }));
      });
      if (mode === 0) { bird.setAttribute("opacity", 1); play(bird, [{ transform: "translate(250px,120px)" }, { transform: "translate(120px,10px)", opacity: 0 }], { duration: 1600, delay: 900 }); }
      await Promise.all(runs);
    }
    $("#wfShieldGo").addEventListener("click", fire);
    info();
  }

  function initWfBreak() {
    matrix("#wfCurseTargets", "#wfCurseTargetPanel", "#wfCurseLegend", WF().curseTargets, WF().curseLevels, "Can we break it?");
    $("#wfVerbs").append(...WF().verbs.map(v => el("div", { class: "card verb-card tilt" }, el("p", { class: "eyebrow gk", text: v.w }), el("h3", { text: v.t }), el("span", { class: "ref", text: v.ref }), el("p", { html: refify(v.d) }))));
  }

  function initWfFree() {
    const wide = { door: 380, attack: 380, repent: 360, resist: 360, ask: 520, break: 520, fill: 480 };
    const nodes = WF().free.map(n => ({ ...n, w: wide[n.id] || 440 }));
    flowchart($("#wfFree"), nodes, WF().freeEdges, { id: "wff", w: 900, h: 560, nodeW: 440, fs: 14, refsInline: true, label: "Flowchart: a path to freedom from curses and bondages", start: "trouble", annotate: [{ x: 262, y: 182, t: "yes", anchor: "end" }, { x: 638, y: 182, t: "no", anchor: "start" }], onSelect: n => panelFill("#wfFreePanel", "A path to freedom", n) });
  }

  /* 11 · Spectrum */
  function initWfSpectrum() {
    const S = WF().spectrum, svg = sv("svg", { viewBox: "0 0 900 150", role: "img", "aria-label": "Spectrum from a demon behind everything to no spiritual realm, with the sober middle road" });
    const cols = ["var(--flame)", "var(--babel)", "var(--eden)", "var(--babel)", "var(--flame)"];
    let x0 = 20;
    S.forEach((z, i) => {
      const x1 = 20 + Math.min(z.max, 100) * 8.6, w = x1 - x0;
      svg.append(sv("rect", { x: x0, y: 70, width: w - 3, height: 26, rx: 6, fill: cols[i], "fill-opacity": i === 2 ? .7 : .35 }));
      const words = z.t.split(" "); const half = Math.ceil(words.length / 2);
      svg.append(txt(x0 + w / 2, 34, words.slice(0, half).join(" "), { "font-size": 12 }), txt(x0 + w / 2, 50, words.slice(half).join(" "), { "font-size": 12 }));
      x0 = x1;
    });
    svg.append(txt(20, 124, "← ditch: fixation", { "text-anchor": "start", "font-size": 11.5, fill: "var(--flame)" }), txt(880, 124, "ditch: denial →", { "text-anchor": "end", "font-size": 11.5, fill: "var(--flame)" }), txt(450, 124, "the road", { "font-size": 11.5, fill: "var(--eden)" }));
    const mk = sv("g", { class: "spec-mk" }, sv("path", { d: "M0 64 L-9 52 L9 52 Z", fill: "var(--ink)" }), sv("rect", { x: -3, y: 64, width: 6, height: 38, rx: 3, fill: "var(--ink)" }));
    svg.append(mk);
    $("#wfSpectrum").append(svg);
    const r = $("#wfSpecRange");
    function set() {
      const v = +r.value; mk.setAttribute("transform", `translate(${20 + v * 8.6} 0)`);
      const i = S.findIndex(z => v < z.max), z = S[i];
      $("#wfSpecPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: cols[i] }, text: i === 2 ? "The biblical road" : "A ditch to avoid" }), el("h3", { text: z.t }), el("p", { html: refify(z.d) }));
    }
    r.addEventListener("input", set); set();
    $("#wfErrors").append(...WF().errors.map((e, i) => el("div", { class: "card err-card stg" }, el("span", { class: "errn", text: String(i + 1) }), el("h3", { text: e.t }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.d) }))));
  }

  /* 12 · Sons, priests, kings */
  function initWfRoles() {
    const R = WF().roles, svg = sv("svg", { viewBox: "0 0 460 400", role: "img", "aria-label": "Triangle of son, priest and king around Christ" });
    const pos = [[230, 70], [90, 320], [370, 320]];
    svg.append(sv("path", { d: "M230 70 L90 320 L370 320 Z", fill: "var(--accent)", "fill-opacity": .06, stroke: "var(--line)", "stroke-width": 3 }), sv("path", { class: "flow", d: "M230 70 L90 320 L370 320 Z", fill: "none", stroke: "var(--accent)", "stroke-width": 2, opacity: .6 }));
    svg.append(sv("circle", { cx: 230, cy: 236, r: 44, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), txt(230, 232, "Christ", { "font-size": 14 }), txt(230, 250, "in you", { "font-size": 12, fill: "var(--muted)" }));
    const icons = { son: "M0 -16 Q14 -16 14 -2 Q14 14 0 18 Q-14 14 -14 -2 Q-14 -16 0 -16 Z", priest: "M-12 16 L-12 -6 Q0 -22 12 -6 L12 16 Z M-4 -2 h8 M0 -6 v10", king: "M-16 10 L-18 -12 L-8 -2 L0 -16 L8 -2 L18 -12 L16 10 Z" };
    const gs = R.map((r, i) => {
      const [x, y] = pos[i];
      const g = hit(sv("g", { class: "fnode role-node", tabindex: "0", role: "button", "aria-label": r.n }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 52, fill: "var(--surface)", stroke: r.c, "stroke-width": 3 }), sv("path", { d: icons[r.id], transform: `translate(${x} ${y - 10})`, fill: r.c }), txt(x, y + 28, r.n.replace("As ", "").toUpperCase(), { "font-size": 12, fill: r.c, "letter-spacing": ".1em" }));
      svg.append(g); return g;
    });
    $("#wfRoleArt").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const r = R[i];
      $("#wfRolePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: r.c }, text: r.n }), el("h3", { text: r.core }), el("span", { class: "ref", text: r.ref }), el("p", { html: refify(r.d) }), el("ul", { class: "ticks" }, r.acts.map(a => el("li", { html: refify(a) }))));
    }
    sel(0);
  }

  /* 13 · Wilderness temptation */
  function initWfTempt() {
    const T = WF().temptations, svg = sv("svg", { viewBox: "0 50 900 270", role: "img", "aria-label": "The tempter's three attacks deflected by Jesus with the words It is written" });
    svg.append(sv("rect", { y: 260, width: 900, height: 60, fill: "#c9a46a", "fill-opacity": .25 }));
    const scenes = [
      sv("g", {}, ...[[140, 262], [170, 266], [200, 262]].map(([x, y]) => sv("ellipse", { cx: x, cy: y, rx: 16, ry: 10, fill: "var(--muted)" }))),
      sv("g", {}, sv("rect", { x: 430, y: 150, width: 60, height: 110, fill: "var(--muted)", "fill-opacity": .5 }), sv("path", { d: "M420 150 L460 120 L500 150 Z", fill: "var(--muted)", "fill-opacity": .6 })),
      sv("g", {}, sv("path", { d: "M560 260 L640 140 L720 260 Z", fill: "var(--eden)", "fill-opacity": .35 }), ...[600, 640, 680].map(x => sv("rect", { x: x - 6, y: 236, width: 12, height: 12, fill: "var(--accent)" })))
    ];
    svg.append(...scenes);
    const tempter = sv("g", { class: "wf-drift" }, sv("path", { d: "M60 250 Q40 160 90 130 Q140 160 120 250 Z", fill: "var(--flame)", "fill-opacity": .5 }), sv("circle", { cx: 80, cy: 160, r: 3, fill: "var(--surface)" }), sv("circle", { cx: 100, cy: 160, r: 3, fill: "var(--surface)" }));
    const jesus = sv("g", {}, sv("circle", { cx: 810, cy: 150, r: 60, fill: "var(--accent)", "fill-opacity": .14, class: "pulse" }), sv("circle", { cx: 810, cy: 128, r: 14, fill: "var(--ink)", "fill-opacity": .8 }), sv("path", { d: "M786 258 L794 150 Q810 140 826 150 L834 258 Z", fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 2 }));
    const word = sv("g", { class: "itw", opacity: 0 }, sv("rect", { x: 670, y: 70, width: 110, height: 40, rx: 8, fill: "var(--accent)" }), txt(725, 95, "It is written", { "font-size": 13, fill: "var(--accent-ink)" }));
    const dart = sv("g", {}, sv("line", { x1: 130, y1: 0, x2: 200, y2: 0, stroke: "var(--flame)", "stroke-width": 5 }), sv("path", { d: "M200 -8 L218 0 L200 8 Z", fill: "var(--flame)" }));
    const tag = txt(180, -14, "", { "font-size": 12, fill: "var(--flame)" });
    dart.append(tag);
    const shards = sv("g", { opacity: 0 }, ...Array.from({ length: 6 }, (_, i) => sv("line", { x1: 0, y1: 0, x2: Math.cos(i) * 22, y2: Math.sin(i) * 22, stroke: "var(--flame)", "stroke-width": 3, transform: "translate(680 150)" })));
    const marks = [0, 1, 2].map(i => sv("circle", { cx: 380 + i * 70, cy: 300, r: 9, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
    svg.append(tempter, jesus, word, dart, shards, ...marks);
    $("#wfTempt").append(svg);
    let i = -1, busy = false;
    dart.setAttribute("transform", "translate(0 150)"); dart.style.opacity = 0;
    async function go(n) {
      if (busy) return; busy = true; i = n;
      marks.forEach((m, j) => m.setAttribute("fill", j <= i ? "var(--accent)" : "var(--surface)"));
      scenes.forEach((s, j) => s.style.opacity = j === i ? 1 : .35);
      const t = T[i];
      tag.textContent = t.target;
      word.setAttribute("opacity", 0); shards.setAttribute("opacity", 0);
      dart.style.opacity = 1;
      await done(play(dart, [{ transform: "translate(0px,150px)" }, { transform: "translate(460px,150px)" }], { duration: 1100, easing: "ease-in" }));
      word.setAttribute("opacity", 1);
      play(word, [{ transform: "scale(.6)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 300 });
      dart.style.opacity = 0; shards.setAttribute("opacity", 1);
      play(shards, [{ opacity: 1, transform: "scale(.4)" }, { opacity: 0, transform: "scale(1.6)" }], { duration: 700 });
      $("#wfTemptPanel").replaceChildren(el("p", { class: "eyebrow", text: `Temptation ${i + 1} of 3 · ${t.target}` }),
        el("div", { class: "row warn" }, el("b", { text: "The attack" }), el("p", { text: t.attack })), el("div", { class: "row eden" }, el("b", { text: "The answer" }), el("p", { text: t.answer })), el("span", { class: "ref", text: t.ref }),
        i === 2 ? el("p", { html: refify("“Then the devil left him, and behold, angels came and were ministering to him” (Matt 4:11). Jesus then returned “in the power of the Spirit” (Luke 4:14).") }) : null);
      $("#wfTemptNext").textContent = i === 2 ? "Start again ▸" : "Next attack ▸";
      busy = false;
    }
    $("#wfTemptNext").addEventListener("click", () => go(i >= 2 ? 0 : i + 1));
    $("#wfTemptPrev").addEventListener("click", () => go(Math.max(0, i - 1)));
    $("#wfTemptPanel").append(el("p", { text: "Press “Next attack” to begin." }));
  }

  /* 14 · Battle rhythm */
  function initWfRhythm() {
    const R = WF().rhythm, n = R.length, cx = 230, cy = 220, rad = 160;
    const svg = sv("svg", { viewBox: "0 0 460 440", role: "img", "aria-label": "A seven-step cycle of daily spiritual warfare" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 3 }), sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .6 }));
    if (!reduceMotion) { const d = sv("circle", { r: 7, fill: "var(--accent)" }); d.append(sv("animateMotion", { dur: "14s", repeatCount: "indefinite", path: `M${cx} ${cy - rad} A${rad} ${rad} 0 1 1 ${cx - .1} ${cy - rad}` })); svg.append(d); }
    svg.append(txt(cx, cy - 6, "Stand in", { "font-size": 14 }), txt(cx, cy + 14, "Christ’s victory", { "font-size": 14 }));
    const gs = R.map((r, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": r.t }), () => { stop(); sel(i); });
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 34, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2.5 }), txt(x, y - 4, String(i + 1), { "font-size": 15, fill: "var(--accent)" }));
      const w = r.t.split(" "); g.append(txt(x, y + 11, w.length > 2 ? w.slice(0, 2).join(" ") : r.t, { "font-size": 9.5 })); if (w.length > 2) g.append(txt(x, y + 22, w.slice(2).join(" "), { "font-size": 9.5 }));
      svg.append(g); return g;
    });
    $("#wfRhythm").append(svg);
    function sel(i) {
      gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)"));
      const r = R[i];
      $("#wfRhythmPanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${n}` }), el("h3", { text: r.t }), el("span", { class: "ref", text: r.ref }), el("p", { html: refify(r.d) }));
    }
    let k = 0, timer = null;
    const stop = () => { clearInterval(timer); timer = null; };
    sel(0);
    if (!reduceMotion && "IntersectionObserver" in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && timer === null && k === 0) { timer = setInterval(() => { k++; if (k >= n) return stop(); sel(k); }, 3200); } }), { threshold: .5 }).observe(svg);
  }

  function initWfObjections() { objectionList("#wfObjections", "#wfObjFilter", WF().objections); studyGuide("#wfQuestions", "#wfMemory", WF().study, WF().memory); }
