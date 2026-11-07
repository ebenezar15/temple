  /* ================ Part IX·b: the second veil and full union ================ */
  const VL = () => DATA.vl;
  const cherubPath = (x, y, s, c) => sv("g", { transform: `translate(${x} ${y}) scale(${s})`, fill: "none", stroke: c, "stroke-width": 2.2, "stroke-linecap": "round" },
    sv("path", { d: "M0 10 Q-26 -6 -34 -30 Q-14 -18 -4 -4 M0 10 Q26 -6 34 -30 Q14 -18 4 -4 M-30 -24 Q-20 -10 -6 -2 M30 -24 Q20 -10 6 -2" }), sv("circle", { cx: 0, cy: -2, r: 5 }), sv("path", { d: "M-6 10 L0 26 L6 10" }));

  function initVlTear() {
    const C = VL().cherubim;
    const svg = sv("svg", { viewBox: "0 0 480 380", role: "img", "aria-label": "The inner veil with woven cherubim, torn from top to bottom to reveal the glory behind it" });
    svg.append(sv("defs", {},
      sv("radialGradient", { id: "vlGlow" }, sv("stop", { offset: 0, "stop-color": "#fff8dc", "stop-opacity": 1 }), sv("stop", { offset: .35, "stop-color": "var(--accent)", "stop-opacity": .85 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 })),
      sv("linearGradient", { id: "vlCloth", x1: 0, x2: 1 }, sv("stop", { offset: 0, "stop-color": "#2f4f8f" }), sv("stop", { offset: .5, "stop-color": "#6b3f8f" }), sv("stop", { offset: 1, "stop-color": "#9b2f3f" })),
      sv("clipPath", { id: "vlL" }, sv("path", { d: "M0 0 H244 L232 50 L250 100 L230 150 L248 200 L228 250 L246 300 L232 380 H0 Z" })),
      sv("clipPath", { id: "vlR" }, sv("path", { d: "M480 0 H244 L232 50 L250 100 L230 150 L248 200 L228 250 L246 300 L232 380 H480 Z" }))));
    const glory = sv("g", { class: "vl-glory" }, sv("circle", { cx: 240, cy: 190, r: 200, fill: "url(#vlGlow)" }),
      ...Array.from({ length: 18 }, (_, i) => { const a = i * Math.PI / 9; return sv("line", { x1: 240 + Math.cos(a) * 60, y1: 190 + Math.sin(a) * 60, x2: 240 + Math.cos(a) * 240, y2: 190 + Math.sin(a) * 240, stroke: "#fff3c4", "stroke-width": 3, "stroke-opacity": .5 }); }),
      sv("rect", { x: 200, y: 214, width: 80, height: 40, fill: "var(--accent)" }), cherubPath(222, 206, .7, "#fff3c4"), cherubPath(258, 206, .7, "#fff3c4"));
    svg.append(glory);
    const half = (clip, dir) => {
      const g = sv("g", { class: "vl-half", "data-dir": dir, "clip-path": `url(#${clip})` }, sv("rect", { width: 480, height: 380, fill: "url(#vlCloth)" }),
        ...Array.from({ length: 12 }, (_, i) => sv("line", { x1: 0, y1: 16 + i * 32, x2: 480, y2: 16 + i * 32, stroke: "#fff", "stroke-opacity": .06, "stroke-width": 6 })));
      [[90, 110], [390, 110], [90, 270], [390, 270], [160, 190], [320, 190]].forEach(([x, y]) => g.append(cherubPath(x, y, 1.3, "#e8c66a")));
      return g;
    };
    const L = half("vlL", -1), R = half("vlR", 1);
    const tear = sv("path", { class: "vl-tearline", d: "M244 0 L232 50 L250 100 L230 150 L248 200 L228 250 L246 300 L232 380", fill: "none", stroke: "#fff8dc", "stroke-width": 4, pathLength: 1 });
    svg.append(L, R, tear, sv("rect", { x: 0, y: 0, width: 480, height: 14, fill: "#8a6238" }));
    $("#vlVeil").append(svg);
    const cards = C.map((c, i) => el("button", { class: "card cher-card", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("span", { class: "cher-n", text: String(i + 1) }), el("h3", { text: c.t }), el("span", { class: "ref", text: c.ref })));
    $("#vlCherubim").append(...cards);
    function sel(i) { selectSet(cards, i); const c = C[i]; info("#vlTearPanel", `The veil · ${i + 1} of ${C.length}`, c.t, c.ref, c.d); }
    let torn = false;
    $("#vlTearBtn").addEventListener("click", () => {
      torn = !torn; svg.classList.toggle("torn", torn);
      $("#vlTearBtn").textContent = torn ? "Close the veil again ↺" : "“It is finished” · tear the veil ▸";
      sel(torn ? 2 : 1);
      if (torn && window.__burst && !reduceMotion) { const r = svg.getBoundingClientRect(); setTimeout(() => window.__burst(r.left + r.width / 2, r.top + r.height / 2), 900); }
    });
    sel(1);
  }

  function initVlAtone() {
    const A = VL().atonement, n = A.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 280`, role: "img", "aria-label": "Cross-section of the tabernacle: the high priest enters once a year; Christ enters once for all and opens the way", style: { minWidth: "760px" } });
    svg.append(sv("rect", { x: 20, y: 60, width: 420, height: 180, fill: "var(--eden)", "fill-opacity": .08 }), txt(230, 52, "COURT", { "font-size": 11, fill: "var(--eden)", "letter-spacing": ".12em" }),
      sv("rect", { x: 440, y: 60, width: 340, height: 180, fill: "var(--accent)", "fill-opacity": .08 }), txt(610, 52, "HOLY PLACE", { "font-size": 11, fill: "var(--accent)", "letter-spacing": ".12em" }),
      sv("rect", { x: 790, y: 60, width: 190, height: 180, fill: "var(--accent)", "fill-opacity": .2, class: "vl-holiest" }), txt(885, 52, "MOST HOLY", { "font-size": 11, fill: "var(--accent)", "letter-spacing": ".12em" }),
      sv("rect", { x: 130, y: 170, width: 50, height: 50, fill: "#b08a5a" }), sv("rect", { x: 740, y: 180, width: 22, height: 40, fill: "var(--accent)" }),
      sv("rect", { x: 860, y: 190, width: 54, height: 30, fill: "var(--accent)" }), cherubPath(875, 186, .5, "var(--accent)"), cherubPath(899, 186, .5, "var(--accent)"));
    const glow = sv("circle", { cx: 887, cy: 150, r: 60, fill: "url(#vlGlow2)", class: "pulse" });
    svg.prepend(sv("defs", {}, sv("radialGradient", { id: "vlGlow2" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .7 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(glow);
    const vTop = sv("line", { x1: 790, y1: 60, x2: 790, y2: 150, stroke: "#6b3f8f", "stroke-width": 8, class: "vl-vt" }), vBot = sv("line", { x1: 790, y1: 150, x2: 790, y2: 240, stroke: "#6b3f8f", "stroke-width": 8, class: "vl-vb" });
    svg.append(vTop, vBot, txt(790, 262, "the veil", { "font-size": 11, fill: "#6b3f8f" }));
    const priest = sv("g", { class: "actor" }, person(0, 0, 1.4, "var(--ink)"), sv("rect", { x: -9, y: -12, width: 18, height: 6, fill: "var(--accent)" }));
    const cloud = sv("g", { class: "cloud", opacity: 0 }, ...[[-10, -50, 14], [8, -58, 16], [24, -46, 12]].map(([x, y, r]) => sv("circle", { cx: x, cy: y, r, fill: "var(--muted)", "fill-opacity": .35 })));
    priest.append(cloud);
    const drops = sv("g", { opacity: 0 }, ...[0, 1, 2, 3, 4, 5, 6].map(k => sv("circle", { cx: 866 + k * 7, cy: 186 - (k % 2) * 4, r: 2.6, fill: "var(--flame)" })));
    const again = sv("g", { opacity: 0 }, sv("path", { d: "M560 120 a24 24 0 1 1 -6 -16 M554 96 l2 10 l-10 0", fill: "none", stroke: "var(--flame)", "stroke-width": 3 }), txt(560, 160, "next year, again", { "font-size": 11.5, fill: "var(--flame)" }));
    const christ = sv("g", { class: "actor", opacity: 0 }, sv("circle", { cx: 0, cy: -20, r: 28, fill: "var(--accent)", "fill-opacity": .25, class: "pulse" }), person(0, 0, 1.4, "var(--accent)"));
    const anchor = sv("g", { opacity: 0 }, sv("path", { d: "M300 200 Q600 120 880 150", fill: "none", stroke: "var(--babel)", "stroke-width": 3, "stroke-dasharray": "6 6", class: "flow" }), person(300, 214, 1.1, "var(--eden)"), txt(300, 244, "you", { "font-size": 11, fill: "var(--eden)" }), sv("path", { d: "M300 192 v-16 M292 182 h16 M290 198 q10 10 20 0", stroke: "var(--babel)", "stroke-width": 3, fill: "none" }));
    svg.append(drops, again, anchor, priest, christ);
    $("#vlAtone").append(svg);
    const posP = [[220, 200], [760, 200], [850, 200], [400, 200]];
    let i = 0, pp = posP[0].slice(), cp = [400, 200];
    priest.setAttribute("transform", `translate(${pp[0]} ${pp[1]})`);
    const move = (node, from, to, set) => tween(0, 1, 800, k => { const x = from[0] + (to[0] - from[0]) * k, y = from[1] + (to[1] - from[1]) * k; node.setAttribute("transform", `translate(${x} ${y})`); set([x, y]); });
    function go(k) {
      i = Math.max(0, Math.min(n - 1, k));
      const priestStep = i <= 3;
      priest.setAttribute("opacity", priestStep ? 1 : .15);
      if (priestStep) move(priest, pp, posP[i], v => pp = v);
      cloud.setAttribute("opacity", i === 1 || i === 2 ? 1 : 0);
      drops.setAttribute("opacity", i === 2 ? 1 : 0);
      again.setAttribute("opacity", i === 3 ? 1 : 0);
      christ.setAttribute("opacity", i >= 4 ? 1 : 0);
      if (i >= 4) move(christ, cp, i === 4 ? [887, 200] : [887, 200], v => cp = v); else { cp = [400, 200]; christ.setAttribute("transform", "translate(400 200)"); }
      svg.classList.toggle("opened", i >= 4);
      anchor.setAttribute("opacity", i === 5 ? 1 : 0);
      const a = A[i]; info("#vlAtPanel", `${i < 4 ? "The Day of Atonement" : "Christ our high priest"} · ${i + 1} of ${n}`, a.t, a.ref, a.d);
      $("#vlAtNext").textContent = i === n - 1 ? "Start again ▸" : "Next ▸";
    }
    $("#vlAtNext").addEventListener("click", () => go(i === n - 1 ? 0 : i + 1));
    $("#vlAtPrev").addEventListener("click", () => go(i - 1));
    go(0);
  }

  function initVlArk() {
    const A = VL().ark;
    const svg = sv("svg", { viewBox: "0 0 480 380", role: "img", "aria-label": "The ark of the covenant: select the mercy seat, the tablets, the jar of manna and Aaron's budded rod" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "vlShek" }, sv("stop", { offset: 0, "stop-color": "#fff8dc" }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 240, cy: 120, r: 110, fill: "url(#vlShek)", class: "pulse" }));
    // contents (hidden until open)
    const items = {
      tablets: sv("g", { class: "ark-item", "data-id": "tablets" }, ...[196, 226].map(x => sv("path", { d: `M${x} 250 V200 Q${x} 186 ${x + 13} 186 Q${x + 26} 186 ${x + 26} 200 V250 Z`, fill: "#9aa0a6", stroke: "var(--ink)", "stroke-width": 1.5 })), txt(222, 172, "tablets", { "font-size": 11 })),
      manna: sv("g", { class: "ark-item", "data-id": "manna" }, sv("path", { d: "M276 250 Q270 220 282 212 L282 204 H302 V212 Q314 220 308 250 Z", fill: "var(--accent)" }), sv("rect", { x: 280, y: 198, width: 24, height: 7, rx: 2, fill: "var(--accent)" }), txt(292, 186, "manna", { "font-size": 11 })),
      rod: sv("g", { class: "ark-item", "data-id": "rod" }, sv("line", { x1: 168, y1: 252, x2: 176, y2: 170, stroke: "#6b4a2b", "stroke-width": 4 }), ...[[172, 196], [176, 180], [170, 214]].map(([x, y]) => sv("circle", { cx: x + 6, cy: y, r: 5, fill: "#f4c2d7" })), ...[[164, 188], [168, 204]].map(([x, y]) => sv("ellipse", { cx: x, cy: y, rx: 6, ry: 3, fill: "var(--eden)" })), txt(162, 160, "budded rod", { "font-size": 11 }))
    };
    const box = sv("g", {}, sv("rect", { x: 140, y: 250, width: 200, height: 90, rx: 4, fill: "var(--accent)" }), sv("rect", { x: 150, y: 260, width: 180, height: 70, fill: "none", stroke: "#fff3c4", "stroke-opacity": .5 }), sv("rect", { x: 100, y: 300, width: 280, height: 8, rx: 4, fill: "#8a6238" }));
    const seat = sv("g", { class: "ark-lid", "data-id": "seat" }, sv("rect", { x: 134, y: 238, width: 212, height: 14, rx: 3, fill: "#e8c66a" }), cherubPath(190, 226, 1.1, "var(--accent)"), cherubPath(290, 226, 1.1, "var(--accent)"), txt(240, 230, "mercy seat", { "font-size": 11 }));
    svg.append(...Object.values(items), box, seat);
    $("#vlArk").append(svg);
    const hot = id => id === "seat" ? seat : items[id];
    A.forEach((a, i) => { const g = hot(a.id); g.setAttribute("tabindex", "0"); g.setAttribute("role", "button"); g.setAttribute("aria-label", a.n); g.classList.add("fnode"); hit(g, () => sel(i)); });
    function sel(i) {
      const a = A[i]; svg.classList.toggle("open", a.id !== "seat");
      Object.values(items).concat(seat).forEach(g => g.classList.toggle("sel", g === hot(a.id)));
      info("#vlArkPanel", `Behind the veil · ${i + 1} of ${A.length}`, a.n, a.ref, a.d, [el("p", { class: "use" }, el("b", { text: "Full union: " }), a.u),
        el("div", { class: "htl-controls", style: { marginTop: "4px" } }, ...A.map((b, j) => el("button", { class: "chip", type: "button", "aria-pressed": String(j === i), text: b.n.split(" ").slice(0, 3).join(" "), onclick: () => sel(j) })))]);
    }
    sel(0);
  }

  function initVlLine() {
    const R = VL().readings, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 200`, role: "img", "aria-label": "Timeline: the cross, the end of the old covenant age, the resurrection, and what all agree on", style: { minWidth: "720px" } });
    svg.append(sv("defs", {}, sv("linearGradient", { id: "vlLG", gradientUnits: "userSpaceOnUse", x1: 60, y1: 0, x2: 940, y2: 0 }, sv("stop", { offset: 0, "stop-color": "#6b3f8f" }), sv("stop", { offset: 1, "stop-color": "var(--accent)" }))),
      sv("path", { class: "draw", d: "M60 100 L940 100", stroke: "url(#vlLG)", "stroke-width": 8, "stroke-linecap": "round", pathLength: 1 }));
    const xs = [150, 400, 650, 880];
    const icons = [
      sv("path", { d: "M-3 -18 h6 v10 h10 v6 h-10 v20 h-6 v-20 h-10 v-6 h10 Z", fill: "var(--accent)" }),
      sv("path", { d: "M-16 14 V-4 L0 -16 L16 -4 V14 Z M-16 -4 L16 10", fill: "none", stroke: "var(--flame)", "stroke-width": 3 }),
      sv("path", { d: "M-18 8 A18 18 0 0 1 18 8 Z M0 -14 V-20 M-14 -8 l-5 -4 M14 -8 l5 -4", fill: "var(--accent)", stroke: "var(--accent)", "stroke-width": 2.5 }),
      sv("path", { d: "M0 16 C-18 2 -14 -14 -4 -12 C-2 -12 0 -10 0 -8 C0 -10 2 -12 4 -12 C14 -14 18 2 0 16 Z", fill: "var(--eden)" })
    ];
    const gs = R.map((r, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": r.t }), () => sel(i));
      const ic = icons[i]; ic.setAttribute("transform", `translate(${xs[i]} 50)`);
      g.append(sv("circle", { class: "rbg", cx: xs[i], cy: 100, r: 14, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 4 }), ic, txt(xs[i], 140, r.t, { "font-size": 13 }), txt(xs[i], 160, r.ref.split(";")[0], { "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    $("#vlLine").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const r = R[i]; info("#vlLinePanel", i === 3 ? "Common ground" : `A reading · ${i + 1} of 3`, r.t, r.ref, r.d); }
    sel(3);
  }

  function initVlUnion() {
    const svg = sv("svg", { viewBox: "0 0 440 380", role: "img", "aria-label": "Motion graphic of John 14:20: the Father, the Son and you, drawn into one another" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "vlU" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .5 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 220, cy: 180, r: 170, fill: "url(#vlU)", class: "pulse" }));
    const F = sv("g", { class: "u-f" }, sv("circle", { cx: 0, cy: 0, r: 120, fill: "var(--accent)", "fill-opacity": .14, stroke: "var(--accent)", "stroke-width": 3 }), txt(0, -98, "the Father", { "font-size": 13, fill: "var(--accent)" }));
    const S = sv("g", { class: "u-s" }, sv("circle", { cx: 0, cy: 0, r: 76, fill: "var(--flame)", "fill-opacity": .14, stroke: "var(--flame)", "stroke-width": 3 }), txt(0, -54, "the Son", { "font-size": 13, fill: "var(--flame)" }));
    const Y = sv("g", { class: "u-y" }, sv("circle", { cx: 0, cy: 0, r: 38, fill: "var(--eden)", "fill-opacity": .22, stroke: "var(--eden)", "stroke-width": 3 }), txt(0, 5, "you", { "font-size": 13, fill: "var(--eden)" }));
    const inner = sv("g", { class: "u-in" }, sv("circle", { cx: 0, cy: 0, r: 14, fill: "var(--flame)", "fill-opacity": .5 }), txt(0, 30, "I in you", { "font-size": 10.5, fill: "var(--flame)" }));
    Y.append(inner);
    svg.append(F, S, Y, txt(220, 366, "“I am in my Father, and you in me, and I in you” · John 14:20", { "font-size": 12, "font-style": "italic", fill: "var(--muted)" }));
    $("#vlOrbit").append(svg);
    const place = merged => {
      F.setAttribute("transform", merged ? "translate(220 180)" : "translate(110 180) scale(.55)");
      S.setAttribute("transform", merged ? "translate(220 180)" : "translate(240 180) scale(.7)");
      Y.setAttribute("transform", merged ? "translate(220 196)" : "translate(360 180)");
      inner.setAttribute("opacity", merged ? 1 : 0);
    };
    let merged = true; place(true);
    if (!reduceMotion) { place(false); merged = false; setInterval(() => { merged = !merged; place(merged); }, 3200); }
    const P = VL().pictures;
    const icons = { in: "M0 0 m-14 0 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0 M0 0 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0", spirit: "M0 14 C-12 4 -8 -6 0 -14 C2 -6 10 -4 6 6 C10 2 12 8 0 14 Z", vine: "M-14 12 C-6 2 4 2 12 -12 M-4 4 q-8 -2 -8 -10 q8 2 8 10 M6 -4 q8 0 8 -8 q-8 0 -8 8", marriage: "M-6 0 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 M6 0 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0", body: "M0 -14 a5 5 0 1 0 0.1 0 M-8 14 V0 Q0 -6 8 0 V14", home: "M-12 12 V-2 L0 -12 L12 -2 V12 Z M-3 12 V4 H3 V12", nature: "M0 -6 a6 6 0 1 0 0.1 0 M0 -16 V-10 M0 10 V16 M-16 0 H-10 M10 0 H16 M-11 -11 l4 4 M7 7 l4 4 M11 -11 l-4 4 M-7 7 l-4 4" };
    const btns = P.map((p, i) => el("button", { class: "pic-card", type: "button", "aria-pressed": "false", style: { "--d": i * .07 + "s" }, onclick: () => sel(i) }, sv("svg", { viewBox: "-18 -18 36 36", "aria-hidden": "true" }, sv("path", { d: icons[p.id], fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" })), el("b", { text: p.t })));
    $("#vlPictures").append(...btns);
    function sel(i) { selectSet(btns, i); const p = P[i]; info("#vlPicPanel", `Pictures of union · ${i + 1} of ${P.length}`, p.t, p.ref, p.d); }
    sel(0);
    $("#vlGuard").append(...VL().guard.map(([t, d]) => el("div", { class: "card stg" }, el("h3", { text: t }), el("p", { html: refify(d) }))));
  }

  function initVlFace() {
    const F = VL().face;
    const svg = sv("svg", { viewBox: "0 0 440 340", role: "img", "aria-label": "Layers of veil thinning until only light remains" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "vlF" }, sv("stop", { offset: 0, "stop-color": "#fffbe8" }), sv("stop", { offset: .4, "stop-color": "var(--accent)", "stop-opacity": .8 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    const light = sv("g", { class: "face-light" }, sv("circle", { cx: 220, cy: 160, r: 150, fill: "url(#vlF)" }), ...Array.from({ length: 24 }, (_, i) => { const a = i * Math.PI / 12; return sv("line", { x1: 220 + Math.cos(a) * 50, y1: 160 + Math.sin(a) * 50, x2: 220 + Math.cos(a) * 200, y2: 160 + Math.sin(a) * 200, stroke: "#fff3c4", "stroke-width": 2, "stroke-opacity": .5 }); }));
    svg.append(light);
    const veils = [0, 1, 2, 3, 4].map(k => sv("rect", { class: "fveil", x: 40 + k * 8, y: 20 + k * 6, width: 360 - k * 16, height: 280 - k * 12, rx: 18, fill: "#6b3f8f", "fill-opacity": .35, style: { transitionDelay: k * .08 + "s" } }));
    svg.append(...veils);
    const crown = sv("g", { class: "face-crown", opacity: 0 }, sv("path", { d: "M196 300 L192 276 L206 286 L220 268 L234 286 L248 276 L244 300 Z", fill: "var(--accent)" }), txt(220, 326, "“his name on their foreheads”", { "font-size": 11.5, fill: "var(--accent)" }));
    svg.append(crown);
    $("#vlFace").append(svg);
    const r = $("#vlFaceRange");
    function set(i) {
      r.value = i;
      veils.forEach((v, k) => v.classList.toggle("off", k < i));
      light.style.opacity = .35 + i * .13; light.style.transform = `scale(${.8 + i * .06})`;
      crown.setAttribute("opacity", i === 5 ? 1 : 0);
      const f = F[i]; info("#vlFaceInfo", `Step ${i + 1} of ${F.length}`, f.t, f.ref, f.d);
    }
    r.addEventListener("input", () => set(+r.value));
    set(0);
  }

  function initVlLive() {
    const icons = ["M-10 10 L10 -10 M2 -10 H10 V-2", "M-14 12 C-6 2 4 2 12 -12 M-4 4 q-8 -2 -8 -10 q8 2 8 10", "M-12 6 Q0 -10 12 6", "M-10 0 H10 M-8 0 V10 M8 0 V10 M-4 -6 h8", "M-10 -4 A4 4 0 1 0 -9.9 -4 M10 -4 A4 4 0 1 0 10.1 -4 M-14 10 Q-10 0 -6 10 M6 10 Q10 0 14 10", "M-10 10 h20 v-8 h-20 Z M-8 2 l8 -12 l8 12"];
    $("#vlLive").append(...VL().live.map((l, i) => el("div", { class: "live-card", style: { "--d": i * .1 + "s" } }, sv("svg", { viewBox: "-16 -16 32 32", "aria-hidden": "true" }, sv("path", { d: icons[i], fill: "none", stroke: "currentColor", "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round" })), el("b", { text: l.t }), el("span", { class: "ref", text: l.ref }), el("p", { text: l.d }))));
  }
