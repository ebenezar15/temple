  /* ================ Part XI: the heavenly host ================ */
  const AN = () => DATA.an;

  /* illustrations, drawn in a 200 × 200 box */
  function beingArt(id, size) {
    const s = sv("svg", { viewBox: "0 0 200 200", class: "being-art", width: size || 120, height: size || 120, "aria-hidden": "true" });
    s.append(sv("circle", { cx: 100, cy: 100, r: 92, fill: "var(--accent)", "fill-opacity": .08 }));
    const gold = "var(--accent)", ink = "var(--ink)";
    const A = {
      malak: () => [sv("circle", { cx: 100, cy: 60, r: 16, fill: ink, "fill-opacity": .8 }), sv("path", { d: "M74 160 L80 86 Q100 74 120 86 L126 160 Z", fill: "var(--babel)", "fill-opacity": .7 }), sv("path", { d: "M132 70 L138 168", stroke: "#6b4a2b", "stroke-width": 5, "stroke-linecap": "round" }), sv("path", { d: "M60 168 H140", stroke: ink, "stroke-opacity": .3, "stroke-width": 3 })],
      cherub: () => [sv("path", { d: "M50 92 Q36 40 70 28 Q74 60 86 84 Z M150 92 Q164 40 130 28 Q126 60 114 84 Z", fill: gold, "fill-opacity": .85 }), ...[0, 1, 2].map(k => sv("path", { d: `M${56 + k * 6} ${70 - k * 12} q10 6 18 18 M${144 - k * 6} ${70 - k * 12} q-10 6 -18 18`, stroke: "var(--surface)", "stroke-width": 2, fill: "none" })), sv("rect", { x: 62, y: 104, width: 82, height: 38, rx: 14, fill: "#b08a5a" }), ...[70, 88, 120, 136].map(x => sv("rect", { x, y: 138, width: 9, height: 30, rx: 3, fill: "#8a6238" })), sv("circle", { cx: 70, cy: 96, r: 15, fill: "#c9a46a" }), sv("path", { d: "M58 98 Q70 124 82 98 Z", fill: "#5a3e24" }), sv("rect", { x: 58, y: 74, width: 24, height: 9, fill: gold })],
      seraph: () => [...[[-1, 60], [1, 60], [-1, 100], [1, 100], [-1, 140], [1, 140]].map(([d, y]) => sv("path", { d: `M100 ${y} Q${100 + d * 80} ${y - 34} ${100 + d * 86} ${y + 8} Q${100 + d * 50} ${y + 2} 100 ${y + 12} Z`, fill: "var(--flame)", "fill-opacity": .55 + (y === 100 ? .25 : 0) })), sv("path", { d: "M100 172 Q78 160 92 140 Q106 120 96 98 Q90 76 100 60", stroke: gold, "stroke-width": 14, fill: "none", "stroke-linecap": "round" }), sv("path", { d: "M84 62 Q100 30 116 62 Q100 74 84 62 Z", fill: gold }), sv("circle", { cx: 95, cy: 56, r: 2.5, fill: ink }), sv("circle", { cx: 105, cy: 56, r: 2.5, fill: ink })],
      ophan: () => [sv("ellipse", { cx: 100, cy: 100, rx: 76, ry: 76, fill: "none", stroke: gold, "stroke-width": 8 }), sv("ellipse", { cx: 100, cy: 100, rx: 30, ry: 76, fill: "none", stroke: "var(--babel)", "stroke-width": 7 }), ...Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return sv("g", {}, sv("ellipse", { cx: 100 + Math.cos(a) * 76, cy: 100 + Math.sin(a) * 76, rx: 7, ry: 4.5, fill: "var(--surface)", stroke: ink, "stroke-width": 1.5 }), sv("circle", { cx: 100 + Math.cos(a) * 76, cy: 100 + Math.sin(a) * 76, r: 2.2, fill: ink })); })],
      living: () => [sv("circle", { cx: 100, cy: 100, r: 26, fill: gold, "fill-opacity": .6 }), ...[["man", 100, 46], ["lion", 154, 100], ["ox", 100, 154], ["eagle", 46, 100]].map(([k, x, y]) => faceIcon(k, x, y, 22))],
      prince: () => [sv("circle", { cx: 100, cy: 58, r: 15, fill: ink, "fill-opacity": .8 }), sv("path", { d: "M90 46 l3 -10 l7 6 l7 -6 l3 10 Z", fill: gold }), sv("path", { d: "M74 166 L80 84 Q100 72 120 84 L126 166 Z", fill: "var(--babel)", "fill-opacity": .75 }), sv("path", { d: "M134 40 L134 136 M124 124 H144", stroke: "#c0c6cc", "stroke-width": 5, "stroke-linecap": "round" }), sv("path", { d: "M64 86 Q40 76 34 52 Q54 62 72 76 Z M136 86 Q160 76 166 52", fill: "var(--accent)", "fill-opacity": .25 })],
      watcher: () => [sv("path", { d: "M30 100 Q100 40 170 100 Q100 160 30 100 Z", fill: "var(--surface)", stroke: ink, "stroke-width": 3 }), sv("circle", { cx: 100, cy: 100, r: 26, fill: "var(--babel)" }), sv("circle", { cx: 100, cy: 100, r: 11, fill: ink }), sv("circle", { cx: 94, cy: 94, r: 4, fill: "#fff" }), ...[[40, 40], [160, 44], [150, 160], [48, 158]].map(([x, y]) => sv("path", { d: `M${x} ${y - 6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 Z`, fill: gold }))],
      angelLord: () => [sv("path", { d: "M100 26 Q140 70 124 118 Q140 104 142 88 Q160 140 100 172 Q40 140 58 88 Q60 104 76 118 Q60 70 100 26 Z", fill: "var(--flame)", "fill-opacity": .75, class: "flick" }), sv("path", { d: "M100 60 Q122 92 112 130 Q100 146 88 130 Q78 92 100 60 Z", fill: gold }), sv("path", { d: "M60 176 Q100 150 140 176", stroke: "var(--eden)", "stroke-width": 8, fill: "none" })],
      powers: () => [...[[50, 120], [100, 96], [150, 120]].map(([x, y], i) => sv("g", {}, sv("path", { d: `M${x - 20} ${y + 40} V${y} Q${x - 20} ${y - 12} ${x - 8} ${y - 12} H${x + 8} Q${x + 20} ${y - 12} ${x + 20} ${y} V${y + 40} Z M${x - 26} ${y + 40} H${x + 26} V${y + 48} H${x - 26} Z`, fill: i === 1 ? gold : "var(--babel)", "fill-opacity": .75 }), sv("path", { d: `M${x - 12} ${y - 18} l4 -12 l8 8 l8 -8 l4 12 Z`, fill: gold })))]
    };
    s.append(...(A[id] || A.malak)());
    return s;
  }
  function faceIcon(k, x, y, r) {
    const g = sv("g", { transform: `translate(${x} ${y})` }), ink = "var(--ink)";
    const base = { man: "#d8b48c", lion: "#d9a24a", ox: "#9a7652", eagle: "#c9c2b6" }[k];
    if (k === "lion") g.append(...Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return sv("circle", { cx: Math.cos(a) * r, cy: Math.sin(a) * r, r: r * .42, fill: "#b07a2a" }); }));
    if (k === "ox") g.append(sv("path", { d: `M${-r} ${-r * .5} Q${-r * 1.6} ${-r * 1.3} ${-r * .6} ${-r * 1.2} M${r} ${-r * .5} Q${r * 1.6} ${-r * 1.3} ${r * .6} ${-r * 1.2}`, stroke: "#e8dcc8", "stroke-width": r * .28, fill: "none", "stroke-linecap": "round" }));
    g.append(sv("circle", { r, fill: base }), sv("circle", { cx: -r * .35, cy: -r * .15, r: r * .1, fill: ink }), sv("circle", { cx: r * .35, cy: -r * .15, r: r * .1, fill: ink }));
    if (k === "eagle") g.append(sv("path", { d: `M${-r * .25} ${r * .1} L${r * .25} ${r * .1} L0 ${r * .7} Z`, fill: "#e0a030" }));
    if (k === "man") g.append(sv("path", { d: `M${-r * .3} ${r * .4} Q0 ${r * .6} ${r * .3} ${r * .4}`, stroke: ink, "stroke-width": 1.6, fill: "none" }));
    if (k === "lion" || k === "ox") g.append(sv("ellipse", { cx: 0, cy: r * .45, rx: r * .32, ry: r * .2, fill: ink, "fill-opacity": .5 }));
    return g;
  }

  /* generic horizontal timeline */
  function anTimeline(host, items, panel, eyebrow, opt) {
    const W = 1000, n = items.length, svg = sv("svg", { viewBox: `0 0 ${W} 230`, role: "img", "aria-label": opt.label, style: { minWidth: "760px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: opt.id, gradientUnits: "userSpaceOnUse", x1: 40, y1: 0, x2: W - 40, y2: 0 }, sv("stop", { offset: 0, "stop-color": opt.c1 || "var(--babel)" }), sv("stop", { offset: 1, "stop-color": opt.c2 || "var(--accent)" }))),
      sv("path", { class: "draw", d: `M40 115 L${W - 40} 115`, stroke: `url(#${opt.id})`, "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = items.map((_, i) => 70 + i * (W - 140) / (n - 1));
    const gs = items.map((it, i) => {
      const x = xs[i], up = i % 2 === 0, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": it.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: 115, r: 13, fill: "var(--surface)", stroke: opt.c2 || "var(--accent)", "stroke-width": 4 }));
      const lab = it.era ? it.era : it.ref.split(";")[0];
      const w = it.t.split(" "), h = Math.ceil(w.length / 2), two = it.t.length > 15, ly = up ? 62 : 172;
      g.append(sv("line", { x1: x, y1: up ? 74 : 130, x2: x, y2: up ? 100 : 156, stroke: "var(--line)", "stroke-width": 2 }), txt(x, ly - (two ? 8 : 0), two ? w.slice(0, h).join(" ") : it.t, { "font-size": 12.5 }));
      if (two) g.append(txt(x, ly + 8, w.slice(h).join(" "), { "font-size": 12.5 }));
      g.append(txt(x, up ? ly - (two ? 24 : 16) : ly + (two ? 24 : 16), lab, { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    host.append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const it = items[i]; info(panel, `${eyebrow} · ${i + 1} of ${n}`, it.t, it.ref, it.d); }
    sel(opt.start || 0);
  }

  function initAnBadge() {
    const M = AN().messengers;
    const svg = sv("svg", { viewBox: "0 0 440 300", role: "img", "aria-label": "A messenger's badge given to humans and spirits alike" });
    const throne = sv("g", {}, sv("circle", { cx: 60, cy: 80, r: 44, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }), sv("path", { d: "M40 110 V70 Q40 58 52 58 H68 Q80 58 80 70 V110 Z", fill: "var(--accent)" }), txt(60, 140, "the Sender", { "font-size": 12, fill: "var(--accent)" }));
    const figure = sv("g", { class: "msg-fig" });
    const badge = sv("g", { class: "msg-badge" }, sv("path", { d: "M0 -26 L22 -16 L20 12 Q12 26 0 32 Q-12 26 -20 12 L-22 -16 Z", fill: "var(--accent)", stroke: "#fff3c4", "stroke-width": 2 }), txt(0, -2, "malʾāk", { "font-size": 9.5, fill: "var(--accent-ink)" }), txt(0, 11, "angelos", { "font-size": 9.5, fill: "var(--accent-ink)" }));
    const recip = txt(320, 270, "", { "font-size": 13 });
    svg.append(throne, sv("path", { d: "M100 90 Q200 40 290 120", fill: "none", stroke: "var(--accent)", "stroke-width": 2.5, "stroke-dasharray": "5 7", class: "flow" }), figure, badge, recip, txt(220, 24, "“messenger”: a job title, not a species", { "font-size": 12.5, fill: "var(--muted)", "font-style": "italic" }));
    $("#anBadge").append(svg);
    const chips = M.map((m, i) => el("button", { class: "chip", type: "button", text: m.who, onclick: () => sel(i) }));
    $("#anMessengers").append(...chips);
    function sel(i) {
      selectSet(chips, i); const m = M[i], spirit = m.kind === "spirit";
      figure.replaceChildren(...[spirit ? sv("circle", { cx: 320, cy: 170, r: 64, fill: "var(--accent)", "fill-opacity": .18, class: "pulse" }) : null, person(320, 230, 3, spirit ? "var(--accent)" : "var(--babel)")].filter(Boolean));
      recip.textContent = spirit ? "a heavenly being" : "a human being"; recip.setAttribute("fill", spirit ? "var(--accent)" : "var(--babel)");
      play(badge, [{ transform: "translate(60px, 80px) scale(.4)", opacity: .3 }, { transform: "translate(320px, 170px) scale(1)", opacity: 1 }], { duration: 900 });
      info("#anBadgePanel", spirit ? "A heavenly messenger" : "A human messenger", m.who, m.ref, m.d);
    }
    badge.style.transform = "translate(320px, 170px)";
    sel(2);
  }

  function initAnCouncil() {
    const T = AN().titles, cx = 220, cy = 210, rad = 150;
    const svg = sv("svg", { viewBox: "0 0 440 420", role: "img", "aria-label": "God enthroned with the council of holy ones around him" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--accent)", "stroke-dasharray": "2 6" }), sv("circle", { cx, cy, r: 62, fill: "var(--accent)", "fill-opacity": .2, class: "pulse" }),
      sv("path", { d: `M${cx - 22} ${cy + 26} V${cy - 10} Q${cx - 22} ${cy - 24} ${cx - 8} ${cy - 24} H${cx + 8} Q${cx + 22} ${cy - 24} ${cx + 22} ${cy - 10} V${cy + 26} Z`, fill: "var(--accent)" }), txt(cx, cy + 48, "the LORD", { "font-size": 13, fill: "var(--accent)" }), txt(cx, cy + 64, "God of gods", { "font-size": 11, fill: "var(--muted)" }));
    const gs = T.map((t, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / T.length, x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": t.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 36, fill: "var(--surface)", stroke: "var(--babel)", "stroke-width": 2.5 }), person(x, y + 10, .55, "var(--babel)"));
      const w = t.t.split(" "), two = w.length > 2, h = Math.ceil(w.length / 2); g.append(txt(x, two ? y + 22 : y + 26, two ? w.slice(0, h).join(" ") : t.t, { "font-size": 9.5 })); if (two) g.append(txt(x, y + 32, w.slice(h).join(" "), { "font-size": 9.5 }));
      svg.append(g); return g;
    });
    if (!reduceMotion) { const dot = sv("circle", { r: 6, fill: "var(--accent)" }); dot.append(sv("animateMotion", { dur: "5s", repeatCount: "indefinite", path: `M${cx} ${cy} L${cx + 200} ${cy + 200}` })); svg.append(dot, txt(400, 410, "sent out = “angel”", { "text-anchor": "end", "font-size": 11, fill: "var(--accent)" })); }
    $("#anCouncil").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const t = T[i]; info("#anCouncilPanel", `Titles of the heavenly host · ${i + 1} of ${T.length}`, t.t, t.ref, t.d); }
    sel(0);
  }

  function initAnField() {
    const B = AN().beings;
    const cards = B.map((b, i) => el("button", { class: "field-card", type: "button", "aria-pressed": "false", style: { "--d": i * .06 + "s" }, onclick: () => sel(i) }, beingArt(b.id, 96), el("b", { text: b.n.split(" (")[0] }), el("span", { class: "angel-tag " + (b.calledAngel.startsWith("yes") ? "yes" : b.calledAngel.startsWith("no") ? "no" : "na"), text: b.calledAngel.startsWith("yes") ? "called “angel”" : b.calledAngel.startsWith("no") ? "not called “angel”" : "titles of rule" })));
    $("#anField").append(...cards);
    function sel(i) {
      selectSet(cards, i); const b = B[i];
      const dl = el("dl", { class: "fd-list" }, ...[["Where", b.refs], ["Looks like", b.look], ["Does", b.job], ["Called “angel”?", b.calledAngel], ["Ancient context", b.ctx]].flatMap(([k, v]) => [el("dt", { text: k }), el("dd", { html: refify(v) })]));
      $("#anFieldPanel").replaceChildren(el("div", { class: "fd-art" }, beingArt(b.id, 220)), el("div", {}, el("p", { class: "eyebrow", text: `Field guide · ${i + 1} of ${B.length}` }), el("h3", { text: b.n }), el("p", { html: refify(b.d) }), dl));
    }
    sel(1);
  }

  function initAnCherub() {
    anTimeline($("#anCherubLine"), AN().cherubLine, "#anCherubPanel", "Cherubim", { id: "anCg", label: "Cherubim from Genesis to Revelation", c1: "var(--eden)", c2: "var(--accent)", start: 3 });
    const u = 20, svg = sv("svg", { viewBox: "0 0 480 300", role: "img", "aria-label": "Scale drawing of Solomon's two cherubim filling a 20-cubit room, with a person for scale" });
    const x0 = 40, y0 = 260;
    svg.append(sv("rect", { x: x0, y: y0 - 11 * u, width: 20 * u, height: 11 * u, fill: "var(--accent)", "fill-opacity": .06, stroke: "var(--muted)", "stroke-dasharray": "3 4" }), sv("line", { x1: x0 - 10, y1: y0, x2: x0 + 20 * u + 10, y2: y0, stroke: "var(--ink)", "stroke-width": 2 }));
    [[x0 + 5 * u, 0], [x0 + 15 * u, 1]].forEach(([cx]) => {
      svg.append(sv("g", { class: "big-cherub" }, sv("path", { d: `M${cx - 5 * u} ${y0 - 9.5 * u} Q${cx - 2.5 * u} ${y0 - 10.6 * u} ${cx} ${y0 - 8 * u} Q${cx + 2.5 * u} ${y0 - 10.6 * u} ${cx + 5 * u} ${y0 - 9.5 * u} L${cx} ${y0 - 7 * u} Z`, fill: "var(--accent)", "fill-opacity": .85 }),
        sv("rect", { x: cx - .9 * u, y: y0 - 7.6 * u, width: 1.8 * u, height: 7.6 * u, rx: 6, fill: "var(--accent)" }), sv("circle", { cx, cy: y0 - 8.4 * u, r: .8 * u, fill: "#e8c66a" })));
    });
    svg.append(person(x0 + 10 * u, y0, 1.25, "var(--eden)"), txt(x0 + 10 * u, y0 - 46, "a person", { "font-size": 10.5, fill: "var(--eden)" }),
      sv("path", { d: `M${x0} ${y0 + 18} H${x0 + 20 * u}`, stroke: "var(--babel)", "stroke-width": 1.5, "marker-start": "", fill: "none" }), txt(x0 + 10 * u, y0 + 34, "20 cubits ≈ 30 ft: wing tip to wing tip, wall to wall (1 Kgs 6:27)", { "font-size": 11.5, fill: "var(--babel)" }),
      sv("path", { d: `M${x0 + 20 * u + 22} ${y0} V${y0 - 10 * u}`, stroke: "var(--babel)", "stroke-width": 1.5 }), txt(x0 + 20 * u + 30, y0 - 5 * u, "10 cubits", { "text-anchor": "start", "font-size": 11, fill: "var(--babel)" }), txt(x0 + 20 * u + 30, y0 - 5 * u + 14, "≈ 15 ft", { "text-anchor": "start", "font-size": 11, fill: "var(--babel)" }));
    $("#anScale").append(svg);
    $("#anLamassu").append(photo("lamassu"));
  }

  function initAnFaces() {
    const F = AN().faces, R = AN().faceReadings;
    const svg = sv("svg", { viewBox: "0 0 400 400", role: "img", "aria-label": "The four faces of the living creatures: man, lion, ox and eagle, turning" });
    svg.append(sv("circle", { cx: 200, cy: 200, r: 170, fill: "var(--accent)", "fill-opacity": .07 }), sv("circle", { cx: 200, cy: 200, r: 120, fill: "none", stroke: "var(--accent)", "stroke-dasharray": "3 6" }));
    const rot = sv("g", { class: "faces-rot" });
    const pos = { man: [200, 80], lion: [320, 200], ox: [200, 320], eagle: [80, 200] };
    const labels = {};
    F.forEach(f => { const [x, y] = pos[f.id]; const g = sv("g", { class: "face-g" }); g.append(faceIcon(f.id, x, y, 42)); labels[f.id] = txt(x, y + 66, f.n, { "font-size": 13 }); g.append(labels[f.id]); rot.append(g); });
    svg.append(rot, sv("circle", { cx: 200, cy: 200, r: 34, fill: "var(--accent)", "fill-opacity": .5, class: "pulse" }), txt(200, 205, "cherub", { "font-size": 12, fill: "var(--accent-ink)" }));
    $("#anFaces").append(svg);
    const chips = R.map((r, i) => el("button", { class: "chip", type: "button", text: r.t, onclick: () => sel(i) }));
    $("#anFaceChips").append(...chips);
    function sel(i) {
      selectSet(chips, i); const r = R[i];
      F.forEach(f => { labels[f.id].textContent = r.k === "sky" ? f.sky.split(",")[0].replace("the region of ", "") : r.k === "gospel" ? f.gospel.split(" (")[0] : f.n; });
      $("#anFacePanel").replaceChildren(el("p", { class: "eyebrow", text: r.t }), el("span", { class: "verdict-tag " + (r.tag === "speculative" ? "v-spec" : "v-ok"), text: r.tag }), el("p", { html: refify(r.d) }),
        el("table", { class: "face-table" }, el("tbody", {}, ...F.map(f => el("tr", {}, el("th", { text: f.n }), el("td", { text: f[r.k] }))))));
    }
    sel(0);
    $("#anEzekiel").append(photo("ezekiel"));
  }

  function initAnWheels() {
    const L = AN().wheelLine;
    const svg = sv("svg", { viewBox: "0 0 400 400", role: "img", "aria-label": "Animated wheel within a wheel, rims full of eyes" });
    svg.append(sv("circle", { cx: 200, cy: 200, r: 180, fill: "url(#anWG)" }));
    svg.prepend(sv("defs", {}, sv("radialGradient", { id: "anWG" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .35 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const rings = [{ c: "var(--accent)", tilt: 0 }, { c: "var(--babel)", tilt: Math.PI / 2 }, { c: "#c0c6cc", tilt: Math.PI / 4 }].map(r => {
      const e = sv("ellipse", { cx: 200, cy: 200, rx: 140, ry: 140, fill: "none", stroke: r.c, "stroke-width": 9 });
      const eyes = Array.from({ length: 10 }, () => sv("g", {}, sv("ellipse", { rx: 7, ry: 4.5, fill: "var(--surface)", stroke: "var(--ink)", "stroke-width": 1.4 }), sv("circle", { r: 2.2, fill: "var(--ink)" })));
      svg.append(e, ...eyes); return { ...r, e, eyes };
    });
    $("#anWheel").append(svg);
    let t = 0;
    const draw = () => {
      rings.forEach((r, k) => {
        const sq = Math.cos(t + r.tilt), rx = Math.abs(sq) * 140 + 6, rot = k === 2 ? 45 : k * 90;
        r.e.setAttribute("rx", rx); r.e.setAttribute("transform", `rotate(${rot} 200 200)`);
        r.eyes.forEach((g, i) => { const a = i * Math.PI / 5 + t * .6, x = Math.cos(a) * rx, y = Math.sin(a) * 140, rr = rot * Math.PI / 180; g.setAttribute("transform", `translate(${200 + x * Math.cos(rr) - y * Math.sin(rr)} ${200 + x * Math.sin(rr) + y * Math.cos(rr)})`); });
      });
    };
    draw();
    if (!reduceMotion) { const loop = () => { t += .012; draw(); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
    const chips = L.map((l, i) => el("button", { class: "chip", type: "button", text: `${i + 1}`, "aria-label": l.t, onclick: () => sel(i) }));
    $("#anWheelChips").append(...chips);
    function sel(i) { selectSet(chips, i); const l = L[i]; info("#anWheelPanel", ["Vehicle", "Vehicle", "Angel", "Angel", "Meme"][i] + ` · step ${i + 1} of ${L.length}`, l.t, l.ref, l.d); }
    sel(0);
  }

  function initAnSeraph() {
    const L = AN().seraphLine;
    const svg = sv("svg", { viewBox: "0 0 460 340", role: "img", "aria-label": "A seraph carries a burning coal from the altar to Isaiah's lips" });
    svg.append(sv("rect", { x: 40, y: 240, width: 90, height: 60, fill: "#b08a5a" }), ...[60, 80, 100].map(x => sv("circle", { cx: x, cy: 236, r: 9, fill: "var(--flame)", class: "flick" })), txt(85, 320, "altar", { "font-size": 11.5 }));
    const ser = sv("g", { class: "ser-hover" }); ser.append(beingArt("seraph", 170)); ser.firstChild.setAttribute("x", 140); ser.firstChild.setAttribute("y", 10); Object.assign(ser.firstChild.style, { width: "170px", height: "170px" });
    svg.append(ser);
    svg.append(person(390, 300, 2.4, "var(--babel)"), txt(390, 326, "Isaiah", { "font-size": 12 }));
    const lips = sv("circle", { cx: 390, cy: 228, r: 0, fill: "var(--accent)", "fill-opacity": .6 });
    const coal = sv("g", { opacity: 0 }, sv("circle", { r: 7, fill: "var(--flame)" }), sv("circle", { r: 12, fill: "var(--flame)", "fill-opacity": .3, class: "pulse" }));
    const said = txt(300, 40, "", { "font-size": 13, fill: "var(--accent)" });
    svg.append(lips, coal, said, txt(225, 200, "Holy, holy, holy", { "font-size": 12, fill: "var(--accent)", "font-style": "italic", class: "holy" }));
    $("#anSeraph").append(svg);
    $("#anCoal").addEventListener("click", async () => {
      said.textContent = ""; lips.setAttribute("r", 0); coal.setAttribute("opacity", 1);
      const p0 = [80, 232], p1 = [225, 110], p2 = [384, 226];
      await new Promise(res => tween(0, 1, 1800, k => { const a = (1 - k) * (1 - k), b = 2 * k * (1 - k), c = k * k; coal.setAttribute("transform", `translate(${a * p0[0] + b * p1[0] + c * p2[0]} ${a * p0[1] + b * p1[1] + c * p2[1]})`); if (k >= 1) res(); }));
      coal.setAttribute("opacity", 0); tween(0, 30, 600, v => lips.setAttribute("r", v)); said.textContent = "“Your guilt is taken away”";
    });
    const chips = L.map((l, i) => el("button", { class: "chip", type: "button", text: `${i + 1} · ${l.t.split(" ").slice(0, 3).join(" ")}`, onclick: () => sel(i) }));
    $("#anSeraphChips").append(...chips);
    function sel(i) { selectSet(chips, i); const l = L[i]; info("#anSeraphPanel", `Śārāp · ${i + 1} of ${L.length}`, l.t, l.ref, l.d); }
    sel(4);
  }

  function initAnPrinces() {
    const svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "Map of Greece, Israel and Persia with their heavenly princes; Michael helps the messenger past the prince of Persia" });
    svg.append(sv("rect", { y: 0, width: 520, height: 150, fill: "var(--accent)", "fill-opacity": .06 }), txt(16, 22, "HEAVENLY REALM", { "text-anchor": "start", "font-size": 10.5, fill: "var(--accent)", "letter-spacing": ".12em" }),
      sv("path", { d: "M0 220 Q60 190 120 210 Q180 236 240 214 Q300 194 360 212 Q430 232 520 206 V340 H0 Z", fill: "var(--eden)", "fill-opacity": .18 }), txt(16, 330, "NATIONS ON EARTH", { "text-anchor": "start", "font-size": 10.5, fill: "var(--eden)", "letter-spacing": ".12em" }));
    const lands = [["Greece", 90, "var(--babel)"], ["Israel", 250, "var(--eden)"], ["Persia", 430, "var(--flame)"]];
    lands.forEach(([n, x, c]) => svg.append(sv("ellipse", { cx: x, cy: 270, rx: 62, ry: 26, fill: c, "fill-opacity": .25, stroke: c }), txt(x, 275, n, { "font-size": 13, fill: c }), sv("line", { x1: x, y1: 244, x2: x, y2: 150, stroke: c, "stroke-dasharray": "3 5" })));
    const princeG = sv("g", { class: "pr-greece", opacity: .2 }, person(90, 130, 1.2, "var(--babel)"), txt(90, 146, "prince of Greece", { "font-size": 10.5, fill: "var(--babel)" }));
    const princeP = sv("g", {}, person(430, 120, 1.3, "var(--flame)"), txt(430, 140, "prince of Persia", { "font-size": 10.5, fill: "var(--flame)" }));
    const michael = sv("g", { class: "actor" }, sv("circle", { cx: 0, cy: -16, r: 20, fill: "var(--accent)", "fill-opacity": .25, class: "pulse" }), person(0, 0, 1.3, "var(--accent)"), sv("path", { d: "M14 -34 V0", stroke: "#c0c6cc", "stroke-width": 3 }), txt(0, 18, "Michael", { "font-size": 10.5, fill: "var(--accent)" }));
    const msg = sv("g", { class: "actor" }, sv("circle", { cx: 0, cy: -14, r: 16, fill: "#fff3c4", "fill-opacity": .5 }), person(0, 0, 1.1, "var(--ink)"), txt(0, 18, "messenger", { "font-size": 10.5 }));
    const daniel = sv("g", {}, person(320, 318, 1, "var(--ink)"), txt(320, 334, "Daniel by the Tigris", { "font-size": 9.5 }));
    const days = txt(300, 40, "", { "font-size": 15, fill: "var(--flame)" });
    svg.append(princeG, princeP, daniel, michael, msg, days);
    michael.setAttribute("transform", "translate(250 130)"); msg.setAttribute("transform", "translate(330 40)");
    $("#anMap").append(svg);
    const steps = [
      ["Daniel mourns three weeks", "Dan 10:2–3", "Daniel fasted and prayed for “three weeks”. Heaven answered on the first day."],
      ["The messenger is withstood", "Dan 10:12–13", "“The prince of the kingdom of Persia withstood me twenty-one days.” A spiritual being, since no human prince can stop an angel."],
      ["Michael comes to help", "Dan 10:13, 21", "“Michael, one of the chief princes, came to help me.” Michael is Israel’s prince: “your prince”."],
      ["The prince of Greece will come", "Dan 10:20; 12:1", "The conflict continues as empires change. At the end “shall arise Michael, the great prince who has charge of your people”."]
    ];
    let cur = 0;
    const panel = i => { const [t, ref, d] = steps[i]; info("#anMapPanel", `Daniel 10 · ${i + 1} of 4`, t, ref, d); };
    const at = (node, x, y) => node.setAttribute("transform", `translate(${x} ${y})`);
    async function run() {
      const go = (node, from, to, ms) => new Promise(r => tween(0, 1, ms, k => { at(node, from[0] + (to[0] - from[0]) * k, from[1] + (to[1] - from[1]) * k); if (k >= 1) r(); }));
      at(michael, 250, 130); at(msg, 330, 40); princeG.setAttribute("opacity", .2); days.textContent = "";
      panel(0); await sleep(1200);
      panel(1); await go(msg, [330, 40], [395, 110], 900);
      for (let d = 1; d <= 21; d++) { days.textContent = `day ${d} of 21`; await sleep(reduceMotion ? 0 : 90); }
      panel(2); await go(michael, [250, 130], [360, 110], 900);
      await go(msg, [395, 110], [380, 262], 900); days.textContent = "the answer arrives";
      panel(3); princeG.setAttribute("opacity", 1);
    }
    $("#anMapPlay").addEventListener("click", run);
    panel(cur);
  }

  function initAnGrowth() { anTimeline($("#anGrowth"), AN().growth, "#anGrowthPanel", "How ideas about angels grew", { id: "anGg", label: "Timeline of developing ideas about angels", c1: "var(--eden)", c2: "var(--flame)", start: 1 }); }

  function initAnChoirs() {
    const C = AN().choirs, H = 34, svg = sv("svg", { viewBox: `0 0 420 ${H * 9 + 40}`, role: "img", "aria-label": "The nine choirs of angels in three triads, in two historical orders" });
    const triad = i => ["var(--flame)", "var(--accent)", "var(--babel)"][Math.floor(i / 3)];
    svg.append(txt(210, 16, "closest to God ↑", { "font-size": 11, fill: "var(--muted)" }), txt(210, H * 9 + 36, "closest to us ↓", { "font-size": 11, fill: "var(--muted)" }));
    const bars = {};
    C.dionysius.forEach(name => {
      const g = hit(sv("g", { class: "choir fnode", tabindex: "0", role: "button", "aria-label": name }), () => pick(name));
      g.append(sv("rect", { class: "cbar", x: 0, y: 0, width: 300, height: H - 6, rx: 8 }), txt(150, 19, name, { "font-size": 13, fill: "var(--ink)" }));
      svg.append(g); bars[name] = g;
    });
    $("#anChoirs").append(svg);
    let order = "dionysius";
    function layout() {
      C[order].forEach((name, i) => { const w = 200 + i * 22, g = bars[name]; g.style.transform = `translate(${210 - w / 2}px, ${24 + i * H}px)`; const r = $(".cbar", g); r.setAttribute("width", w); r.setAttribute("fill", triad(i)); r.setAttribute("fill-opacity", .28); $("text", g).setAttribute("x", w / 2); });
      const moved = C.dionysius.filter((n, i) => C.gregory[i] !== n);
      Object.entries(bars).forEach(([n, g]) => g.classList.toggle("moved", order === "gregory" && moved.includes(n)));
    }
    function pick(name) {
      const i = C[order].indexOf(name);
      info("#anChoirPanel", `${order === "dionysius" ? "Pseudo-Dionysius" : "Gregory the Great"} · rank ${i + 1} of 9`, name, C.source[name], `Triad ${Math.floor(i / 3) + 1}. The title comes from Scripture; its place on the ladder comes from later tradition. The Bible never ranks them or says there are nine.`);
    }
    const chips = [["dionysius", "Pseudo-Dionysius (c. 500)"], ["gregory", "Gregory the Great (c. 600)"]].map(([k, t], i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { order = k; selectSet(chips, i); layout(); info("#anChoirPanel", k === "gregory" ? "Gregory’s order" : "Dionysius’s order", k === "gregory" ? "Principalities and Virtues trade places" : "The Celestial Hierarchy", k === "gregory" ? "Gregory, Homily 34" : "Pseudo-Dionysius", k === "gregory" ? "Gregory the Great swapped two ranks. In Dante’s Paradiso (canto 28) Beatrice says that when Gregory reached heaven and saw the true order, “he smiled at himself”. Dante had followed Gregory’s order earlier, in the Convivio." : "Written around AD 500 under the name of Paul’s Athenian convert Dionysius (Acts 17:34), the book arranged the titles of Isaiah, Ezekiel, Paul and Jude into three triads. For a thousand years many believed it came from the apostolic age."); } }));
    $("#anChoirToggle").append(...chips);
    selectSet(chips, 0); layout(); chips[0].click();
    $("#anSistine").append(photo("sistine"));
  }

  function initAnJesus() {
    const A = AN().jesus, n = A.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 250`, role: "img", "aria-label": "Angels at eight moments in the life of Jesus", style: { minWidth: "760px" } });
    const pts = A.map((_, i) => [70 + i * (W - 140) / (n - 1), i % 2 ? 160 : 90]);
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
    svg.append(sv("path", { d, fill: "none", stroke: "var(--line)", "stroke-width": 8, "stroke-linejoin": "round" }), sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "3 9", class: "flow" }));
    if (!reduceMotion) { const dot = sv("circle", { r: 8, fill: "var(--accent)" }); dot.append(sv("animateMotion", { dur: "12s", repeatCount: "indefinite", path: d })); svg.append(dot); }
    const gs = A.map((a, i) => {
      const [x, y] = pts[i], g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": a.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 22, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), sv("path", { d: `M${x - 12} ${y + 4} Q${x - 16} ${y - 12} ${x - 4} ${y - 6} M${x + 12} ${y + 4} Q${x + 16} ${y - 12} ${x + 4} ${y - 6}`, stroke: "var(--accent)", "stroke-width": 2.5, fill: "none" }), sv("circle", { cx: x, cy: y - 2, r: 4, fill: "var(--accent)" }), txt(x, i % 2 ? y + 44 : y - 32, a.t, { "font-size": 12.5 }), txt(x, i % 2 ? y + 60 : y - 48, a.ref.split(";")[0], { "font-size": 10.5, "font-style": "italic", fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    svg.append(txt(W / 2, 244, "“Let all God’s angels worship him” · Hebrews 1:6", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    $("#anJesus").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const a = A[i]; info("#anJesusPanel", `Angels and Jesus · ${i + 1} of ${n}`, a.t, a.ref, a.d); }
    sel(0);
  }

  function initAnMyths() {
    $("#anMyths").append(...AN().myths.map(m => {
      const b = el("button", { class: "flipcard", type: "button", "aria-pressed": "false" }, el("div", { class: "fc-inner" },
        el("div", { class: "fc-face fc-under" }, el("small", { text: "Myth" }), el("b", { text: m.m }), el("span", { class: "hint", text: "Tap to flip" })),
        el("div", { class: "fc-face fc-above" }, el("small", { text: "What Scripture and history say" }), el("p", { html: refify(m.t) }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }

  function initAnReview() {
    const R = AN().review, lab = { ok: "Supported", nuance: "Needs nuance", spec: "Speculative" };
    const cnt = k => R.filter(r => r.v === k).length;
    const meter = $("#anMeter");
    meter.append(el("div", { class: "vm-bar" }, ...["ok", "nuance", "spec"].map(k => el("span", { class: "vm-seg v-" + k, style: { "--w": cnt(k) / R.length * 100 + "%" }, title: lab[k] }))),
      el("div", { class: "vm-legend" }, ...["ok", "nuance", "spec"].map(k => el("span", {}, el("i", { class: "vm-dot v-" + k }), `${lab[k]}: ${cnt(k)}`))));
    const rows = R.map((r, i) => el("details", { class: "rv-row v-" + r.v, open: i < 2 ? true : null }, el("summary", {}, el("span", { class: "verdict-tag v-" + r.v, text: lab[r.v] }), el("b", { text: r.c })), el("p", { html: refify(r.n) })));
    $("#anReview").append(...rows);
    const f = $("#anReviewFilter");
    [["all", "All claims"], ["ok", "Supported"], ["nuance", "Needs nuance"], ["spec", "Speculative"]].forEach(([k, t], i) => f.append(el("button", { class: "chip", type: "button", "aria-pressed": String(i === 0), text: t, onclick: e => { $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c === e.currentTarget))); rows.forEach((row, j) => { row.hidden = !(k === "all" || R[j].v === k); }); } })));
    $("#anMissing").append(...AN().missing.map(([t, ref, d]) => el("div", { class: "card stg" }, el("h3", { text: t }), el("span", { class: "ref", text: ref }), el("p", { text: d }))));
  }

  function initAnObjections() { objectionList("#anObjections", "#anObjFilter", AN().objections); studyGuide("#anQuestions", "#anMemory", AN().study, AN().memory); }
