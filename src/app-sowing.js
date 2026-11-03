  /* ================ Part VII: sowing and reaping ================ */
  function initSwDesign() {
    const nodes = DATA.sw.design.map(n => ({ ...n, w: ["flesh", "spirit"].includes(n.id) ? 340 : 440 }));
    flowchart($("#swDesign"), nodes, DATA.sw.designEdges, { id: "swd", w: 900, h: 560, nodeW: 440, refsInline: true, label: "Flowchart of God's design for sowing and reaping", start: "covenant", onSelect: n => panelFill("#swDesignPanel", "God’s design", n) });
    $("#swMillet").append(photo("millet"));
  }

  function initSwGrow() {
    const L = DATA.sw.laws, svg = sv("svg", { viewBox: "0 0 520 440", role: "img", "aria-label": "A seed growing through the eight laws of the harvest" });
    svg.append(sv("rect", { width: 520, height: 260, fill: "var(--babel)", "fill-opacity": .08 }), sv("rect", { y: 260, width: 520, height: 180, fill: "#8a6238", "fill-opacity": .35 }));
    const soilGlow = sv("rect", { y: 260, width: 520, height: 180, fill: "#5b3a1e", "fill-opacity": 0, style: { transition: "fill-opacity .6s" } });
    svg.append(soilGlow, sv("line", { x1: 0, y1: 260, x2: 520, y2: 260, stroke: "#6b4a2b", "stroke-width": 3 }));
    const fade = (...kids) => { const g = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, ...kids); svg.append(g); return g; };
    // overlays per law
    const ov = [];
    ov[0] = fade(sv("rect", { x: 330, y: 288, width: 150, height: 34, rx: 8, fill: "var(--surface)", stroke: "var(--accent)" }), sv("text", { x: 405, y: 310, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "wheat → wheat"));
    ov[1] = fade(sv("text", { x: 260, y: 420, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--surface)" }, "good soil: “an honest and good heart”"));
    ov[2] = fade(sv("text", { x: 340, y: 330, "font-size": 12.5, "font-weight": 800, fill: "var(--surface)" }, "the seed must die"));
    ov[3] = fade(...[0, 1, 2, 3].map(i => sv("circle", { cx: 360 + i * 36, cy: 40, r: 12, fill: i === 3 ? "var(--accent)" : "var(--muted)", "fill-opacity": .3 + i * .2 })), sv("text", { x: 414, y: 74, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "in due season"));
    const sun = fade(sv("circle", { cx: 70, cy: 60, r: 30, fill: "var(--accent)" }), ...Array.from({ length: 8 }, (_, i) => sv("line", { x1: 70 + Math.cos(i * .785) * 38, y1: 60 + Math.sin(i * .785) * 38, x2: 70 + Math.cos(i * .785) * 50, y2: 60 + Math.sin(i * .785) * 50, stroke: "var(--accent)", "stroke-width": 3 })),
      ...Array.from({ length: 10 }, (_, i) => sv("line", { x1: 150 + i * 30, y1: 30 + (i % 3) * 18, x2: 146 + i * 30, y2: 44 + (i % 3) * 18, stroke: "var(--babel)", "stroke-width": 2.5, "stroke-linecap": "round" })),
      sv("text", { x: 70, y: 112, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "God gives the growth"));
    ov[4] = sun;
    // plant
    const roots = sv("g", { stroke: "#f2e6c9", "stroke-width": 2, fill: "none", opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: "M260 304 C250 330 236 350 228 380" }), sv("path", { d: "M260 304 C270 334 284 352 296 384" }), sv("path", { d: "M260 304 L262 392" }));
    svg.append(roots);
    const seedL = sv("ellipse", { cx: 256, cy: 300, rx: 8, ry: 12, fill: "#d9b44a", style: { transition: "transform .6s", transformBox: "fill-box", transformOrigin: "center" } });
    const seedR = sv("ellipse", { cx: 264, cy: 300, rx: 8, ry: 12, fill: "#c9a43a", style: { transition: "transform .6s", transformBox: "fill-box", transformOrigin: "center" } });
    svg.append(seedL, seedR);
    const stalks = [-70, 0, 70].map((dx, k) => {
      const g = sv("g", { opacity: k === 1 ? 1 : 0, style: { transition: "opacity .6s" } });
      const stem = sv("line", { x1: 260 + dx, y1: 262, x2: 260 + dx, y2: 262, stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", style: { transition: "all .8s" } });
      const leaf1 = sv("path", { d: `M${260 + dx} 230 Q${236 + dx} 214 ${226 + dx} 226 Q${244 + dx} 236 ${260 + dx} 230 Z`, fill: "var(--eden)", opacity: 0, style: { transition: "opacity .6s" } });
      const leaf2 = sv("path", { d: `M${260 + dx} 200 Q${284 + dx} 184 ${294 + dx} 196 Q${276 + dx} 206 ${260 + dx} 200 Z`, fill: "var(--eden)", opacity: 0, style: { transition: "opacity .6s" } });
      const head = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, ...Array.from({ length: 6 }, (_, i) => sv("ellipse", { cx: 260 + dx + (i % 2 ? 6 : -6), cy: 112 + i * 9, rx: 6, ry: 9, fill: "#d9b44a" })),
        sv("text", { x: 260 + dx, y: 96, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, ["30×", "60×", "100×"][k]));
      g.append(stem, leaf1, leaf2, head); svg.append(g);
      return { g, stem, leaf1, leaf2, head };
    });
    ov[6] = fade(sv("rect", { x: 20, y: 150, width: 120, height: 70, rx: 8, fill: "var(--surface)", stroke: "var(--line)" }), sv("text", { x: 80, y: 168, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "sparingly"), ...[0, 1].map(i => sv("line", { x1: 60 + i * 40, y1: 214, x2: 60 + i * 40, y2: 188, stroke: "var(--eden)", "stroke-width": 3 })),
      sv("rect", { x: 380, y: 150, width: 120, height: 70, rx: 8, fill: "var(--surface)", stroke: "var(--line)" }), sv("text", { x: 440, y: 168, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "bountifully"), ...Array.from({ length: 9 }, (_, i) => sv("line", { x1: 392 + i * 12, y1: 214, x2: 392 + i * 12, y2: 180, stroke: "var(--eden)", "stroke-width": 3 })));
    ov[7] = fade(sv("path", { d: "M30 230 Q30 200 56 196 L84 196 Q110 200 110 230 L104 256 L36 256 Z", fill: "#b08a5a" }), sv("text", { x: 70, y: 232, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--surface)" }, "seed"),
      sv("path", { d: "M190 120 C130 110 100 150 90 188", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "6 6", class: "flow" }), sv("text", { x: 120, y: 112, "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "seed for the sower"));
    $("#swGrow").append(svg);
    const chips = $("#swLawChips");
    L.forEach((l, i) => chips.append(el("button", { class: "chip", type: "button", text: `${i + 1}`, "aria-label": l.n, onclick: () => { clearInterval(timer); set(i); } })));
    function set(s) {
      $$(".chip", chips).forEach((c, j) => c.setAttribute("aria-pressed", String(j === s)));
      ov.forEach((o, j) => o && o.setAttribute("opacity", j === s || (j === 4 && s >= 4 && s <= 5) ? 1 : 0));
      soilGlow.setAttribute("fill-opacity", s === 1 ? .45 : 0);
      seedL.style.transform = s >= 2 ? "translate(-6px, 2px) rotate(-30deg)" : ""; seedR.style.transform = s >= 2 ? "translate(6px, 2px) rotate(30deg)" : "";
      seedL.style.opacity = seedR.style.opacity = s >= 5 ? .3 : 1;
      roots.setAttribute("opacity", s >= 2 ? 1 : 0);
      const h = [0, 0, 8, 70, 120, 160, 160, 160][s];
      stalks.forEach((st, k) => {
        st.g.setAttribute("opacity", k === 1 || s >= 5 ? 1 : 0);
        st.stem.setAttribute("y2", 262 - h);
        st.leaf1.setAttribute("opacity", s >= 3 ? 1 : 0); st.leaf2.setAttribute("opacity", s >= 4 ? 1 : 0);
        st.head.setAttribute("opacity", s >= 5 ? 1 : 0);
      });
      const l = L[s];
      $("#swLawInfo").replaceChildren(el("p", { class: "eyebrow", text: `Law ${s + 1} of ${L.length}` }), el("h3", { text: l.n }), el("span", { class: "ref", text: l.ref }), el("p", { html: refify(l.d) }));
    }
    let timer = null;
    $("#swGrowPlay").addEventListener("click", () => { clearInterval(timer); let s = 0; set(0); timer = setInterval(() => { s++; if (s >= L.length) return clearInterval(timer); set(s); }, reduceMotion ? 900 : 1500); });
    set(5);
  }

  function initSwSoils() {
    const S = DATA.sw.soils, svg = sv("svg", { viewBox: "0 0 1000 330", role: "img", "aria-label": "Four soils from the parable of the sower", style: { minWidth: "760px" } });
    const panels = {};
    S.forEach((s, i) => {
      const x = i * 250, g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n }), () => sel(i));
      const bg = sv("rect", { x: x + 6, y: 6, width: 238, height: 318, rx: 12, fill: "var(--surface)", stroke: "var(--line)", "stroke-width": 2 });
      g.append(bg, sv("rect", { x: x + 6, y: 200, width: 238, height: 124, rx: 0, fill: ["#9a9a92", "#a08868", "#7a6a4a", "#5b3a1e"][i], "fill-opacity": .55 }));
      if (i === 1) [30, 80, 140, 190].forEach(dx => g.append(sv("ellipse", { cx: x + dx, cy: 214, rx: 22, ry: 10, fill: "#8a8f98" })));
      g.append(sv("text", { x: x + 125, y: 34, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, s.n));
      const seeds = sv("g", { class: "sseeds" }, ...[70, 110, 150, 190].map(dx => sv("ellipse", { cx: x + dx, cy: 196, rx: 4, ry: 6, fill: "#d9b44a" })));
      const out = sv("g", { class: "sout", style: { transition: "opacity .8s" } });
      if (i === 0) out.append(...[[90, 150], [150, 120], [190, 160]].map(([dx, y]) => sv("path", { d: `M${x + dx - 14} ${y} Q${x + dx - 6} ${y - 10} ${x + dx} ${y} Q${x + dx + 6} ${y - 10} ${x + dx + 14} ${y}`, fill: "none", stroke: "var(--ink)", "stroke-width": 3 })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "taken at once"));
      if (i === 1) out.append(sv("circle", { cx: x + 210, cy: 70, r: 20, fill: "var(--accent)" }), ...[80, 125, 170].map(dx => sv("path", { d: `M${x + dx} 196 Q${x + dx + 6} 160 ${x + dx + 22} 168`, fill: "none", stroke: "#b8a24a", "stroke-width": 4 })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "scorched, no root"));
      if (i === 2) out.append(...[80, 125, 170].map(dx => sv("line", { x1: x + dx, y1: 196, x2: x + dx, y2: 140, stroke: "var(--eden)", "stroke-width": 4 })), ...[60, 105, 150, 195].map(dx => sv("path", { d: `M${x + dx} 196 L${x + dx + 8} 110 L${x + dx + 14} 150 L${x + dx + 22} 96 L${x + dx + 26} 196`, fill: "#4a3a2a" })), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "choked, no fruit"));
      if (i === 3) out.append(...[["30×", 75], ["60×", 125], ["100×", 175]].flatMap(([t, dx]) => [sv("line", { x1: x + dx, y1: 196, x2: x + dx, y2: 90, stroke: "var(--eden)", "stroke-width": 4 }), ...Array.from({ length: 5 }, (_, k) => sv("ellipse", { cx: x + dx + (k % 2 ? 5 : -5), cy: 74 + k * 7, rx: 5, ry: 7, fill: "#d9b44a" })), sv("text", { x: x + dx, y: 62, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, t)]), sv("text", { x: x + 125, y: 296, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--surface)" }, "fruit with patience"));
      g.append(seeds, out); svg.append(g); panels[s.id] = bg;
    });
    $("#swSoils").append(svg);
    $("#swSow").addEventListener("click", () => {
      $$(".sout", svg).forEach(o => o.style.opacity = 0);
      $$(".sseeds", svg).forEach(s => { s.style.transition = "none"; s.style.transform = "translateY(-170px)"; s.style.opacity = 1; });
      requestAnimationFrame(() => requestAnimationFrame(() => $$(".sseeds", svg).forEach(s => { s.style.transition = reduceMotion ? "none" : "transform .9s cubic-bezier(.5,0,.8,.4)"; s.style.transform = ""; })));
      setTimeout(() => $$(".sout", svg).forEach((o, i) => setTimeout(() => o.style.opacity = 1, reduceMotion ? 0 : i * 400)), reduceMotion ? 0 : 1000);
    });
    function sel(i) {
      Object.values(panels).forEach((b, j) => { b.setAttribute("stroke", j === i ? "var(--accent)" : "var(--line)"); b.setAttribute("stroke-width", j === i ? 4 : 2); });
      const s = S[i];
      $("#swSoilPanel").replaceChildren(el("p", { class: "eyebrow", text: `Soil ${i + 1} of 4` }), el("h3", { text: s.n }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.d) }),
        el("div", { class: "row eden" }, el("b", { text: "For our hearts" }), el("p", { html: refify(s.heart) })));
    }
    sel(3);
  }

  function initSwThread() {
    const T = DATA.sw.thread, C = DATA.sw.cats, W = 1100, H = 250, X = b => 50 + (b - 1) * (1000 / 65);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Passages about sowing and reaping placed along the books of the Bible", style: { minWidth: "860px" } });
    let d = "M30 130"; for (let x = 30; x < W - 30; x += 40) d += ` Q${x + 20} ${x % 80 ? 122 : 138} ${x + 40} 130`;
    svg.append(sv("rect", { x: 0, y: 130, width: W, height: 120, fill: "#8a6238", "fill-opacity": .25 }), sv("path", { d, fill: "none", stroke: "#6b4a2b", "stroke-width": 3 }));
    [[1, "Genesis"], [19, "Psalms"], [23, "Isaiah"], [28, "Hosea"], [40, "Matthew"], [43, "John"], [46, "1 Cor"], [48, "Gal"], [66, "Revelation"]].forEach(([b, t]) => svg.append(sv("line", { x1: X(b), y1: 226, x2: X(b), y2: 234, stroke: "var(--muted)" }), sv("text", { x: X(b), y: 246, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    svg.append(sv("line", { x1: X(39.5), y1: 20, x2: X(39.5), y2: 230, stroke: "var(--line)", "stroke-dasharray": "4 4" }), sv("text", { x: X(39.5) - 8, y: 30, "text-anchor": "end", "font-size": 11, "font-weight": 800, fill: "var(--eden)" }, "OLD TESTAMENT"), sv("text", { x: X(39.5) + 8, y: 30, "font-size": 11, "font-weight": 800, fill: "var(--babel)" }, "NEW TESTAMENT"));
    const count = {};
    const seeds = T.map((t, i) => {
      const n = count[t.b] = (count[t.b] || 0) + 1, x = X(t.b), y = 130 + (n % 2 ? -1 : 1) * (14 + Math.floor((n - 1) / 2) * 26) + (n % 2 ? 0 : 18);
      const g = hit(sv("g", { class: "fnode tseed", tabindex: "0", role: "button", "aria-label": t.ref }), () => sel(i));
      g.append(sv("line", { x1: x, y1: 130, x2: x, y2: y, stroke: C[t.cat][1], "stroke-width": 1.5, opacity: .6 }), sv("ellipse", { cx: x, cy: y, rx: 8, ry: 11, fill: C[t.cat][1], stroke: "var(--surface)", "stroke-width": 2 }));
      if (y < 130) g.append(sv("path", { d: `M${x} ${y - 11} Q${x + 8} ${y - 22} ${x + 14} ${y - 18}`, fill: "none", stroke: "var(--eden)", "stroke-width": 2 }));
      svg.append(g); return g;
    });
    const lbl = sv("text", { "font-size": 12.5, "font-weight": 800, fill: "var(--ink)", "text-anchor": "middle", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 });
    svg.append(lbl);
    $("#swThread").append(svg);
    const f = $("#swThreadFilter");
    [["all", "All themes", null], ...Object.entries(C).map(([k, v]) => [k, v[0], v[1]])].forEach(([k, n, c]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), onclick: () => {
      $$(".chip", f).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
      seeds.forEach((g, i) => g.style.opacity = k === "all" || T[i].cat === k ? 1 : .15);
    } }, c ? el("i", { class: "dotc", style: { background: c } }) : null, n)));
    function sel(i) {
      const t = T[i], e = $("ellipse", seeds[i]);
      seeds.forEach((g, j) => $("ellipse", g).setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"));
      lbl.setAttribute("x", Math.max(70, Math.min(W - 70, +e.getAttribute("cx")))); lbl.setAttribute("y", +e.getAttribute("cy") < 130 ? +e.getAttribute("cy") - 26 : +e.getAttribute("cy") + 30); lbl.textContent = t.ref;
      $("#swThreadPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: C[t.cat][1] }, text: C[t.cat][0] }), el("h3", { text: t.t }), el("span", { class: "ref", text: t.ref }), el("p", { html: refify(t.d) }));
    }
    sel(1);
  }

  function initSwChrist() {
    const svg = sv("svg", { viewBox: "0 0 400 420", role: "img", "aria-label": "A grain of wheat falls into the ground, dies, and becomes a great harvest" });
    svg.append(sv("rect", { y: 250, width: 400, height: 170, fill: "#8a6238", "fill-opacity": .35 }), sv("line", { x1: 0, y1: 250, x2: 400, y2: 250, stroke: "#6b4a2b", "stroke-width": 3 }));
    const cross = sv("g", { opacity: .18 }, sv("rect", { x: 194, y: 270, width: 12, height: 110, fill: "var(--ink)" }), sv("rect", { x: 168, y: 292, width: 64, height: 12, fill: "var(--ink)" }));
    svg.append(cross);
    const seed = sv("ellipse", { cx: 200, cy: 0, rx: 9, ry: 13, fill: "#d9b44a", style: { transition: reduceMotion ? "none" : "transform 1.2s cubic-bezier(.5,0,.8,.4), opacity .6s" } });
    const stem = sv("line", { x1: 200, y1: 262, x2: 200, y2: 262, stroke: "var(--eden)", "stroke-width": 5, "stroke-linecap": "round", style: { transition: reduceMotion ? "none" : "all 1.2s" } });
    svg.append(stem, seed);
    const grains = [];
    for (let ring = 0; ring < 4; ring++) {
      const n = [1, 6, 12, 20][ring], r = ring * 28;
      for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + ring; const g = sv("ellipse", { cx: 200 + Math.cos(a) * r, cy: 120 + Math.sin(a) * r * .8, rx: 5, ry: 8, fill: "#d9b44a", opacity: 0, style: { transition: "opacity .4s" } }); grains.push(g); svg.append(g); }
    }
    const cap = sv("text", { x: 200, y: 404, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--surface)" }, "");
    svg.append(cap);
    $("#swChrist").append(svg);
    let t = [];
    function stage(s) {
      const texts = ["One grain of wheat", "It falls into the earth and dies", "It rises: the firstfruits", "It bears much fruit"];
      cap.textContent = texts[s];
      seed.style.transform = s === 0 ? "translateY(40px)" : "translateY(268px)"; seed.style.opacity = s >= 2 ? 0 : 1;
      stem.setAttribute("y2", s >= 2 ? 160 : 262);
      grains.forEach((g, i) => { t.push(setTimeout(() => g.setAttribute("opacity", s >= 3 ? 1 : (s === 2 && i === 0 ? 1 : 0)), s >= 3 && !reduceMotion ? i * 40 : 0)); });
    }
    $("#swChristPlay").addEventListener("click", () => { t.forEach(clearTimeout); t = []; stage(0); [1, 2, 3].forEach((s, i) => t.push(setTimeout(() => stage(s), reduceMotion ? 0 : 900 + i * 1400))); });
    stage(3);
  }

  function initSwHarvest() {
    const P = DATA.sw.pairs, svg = sv("svg", { viewBox: "0 0 900 170", role: "img", "aria-label": "A seed packet becoming its harvest" });
    const packet = sv("g", {}, sv("rect", { x: 40, y: 30, width: 220, height: 110, rx: 12, class: "pk", fill: "var(--eden)", "fill-opacity": .2, stroke: "var(--eden)", "stroke-width": 2 }));
    const pText = sv("text", { x: 150, y: 92, "text-anchor": "middle", "font-size": 17, "font-weight": 800, fill: "var(--ink)" }, "");
    packet.append(sv("text", { x: 150, y: 56, "text-anchor": "middle", "font-size": 11, "font-weight": 800, "letter-spacing": 2, fill: "var(--muted)" }, "SOW"), pText);
    const arrow = sv("path", { d: "M280 85 L600 85", stroke: "var(--eden)", "stroke-width": 5, fill: "none", "stroke-dasharray": "10 8", class: "flow" });
    const harvest = sv("g", {}, sv("rect", { x: 620, y: 20, width: 250, height: 130, rx: 12, class: "hv", fill: "var(--accent)", "fill-opacity": .2, stroke: "var(--accent)", "stroke-width": 2 }));
    const hText = sv("text", { x: 745, y: 92, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--ink)" }, "");
    harvest.append(sv("text", { x: 745, y: 48, "text-anchor": "middle", "font-size": 11, "font-weight": 800, "letter-spacing": 2, fill: "var(--muted)" }, "REAP"), hText);
    svg.append(packet, arrow, harvest, sv("text", { x: 440, y: 70, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "in due season, more than was sown"));
    $("#swPairArt").append(svg);
    const btns = P.map((p, i) => { const b = el("button", { class: "chip", type: "button", text: p.seed, onclick: () => sel(i) }); $(p.good ? "#swGood" : "#swBad").append(b); return b; });
    function sel(i) {
      const p = P[i], c = p.good ? "var(--eden)" : "var(--flame)";
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      $(".pk", svg).setAttribute("fill", c); $(".pk", svg).setAttribute("stroke", c); arrow.setAttribute("stroke", c);
      $(".hv", svg).setAttribute("fill", p.good ? "var(--accent)" : "var(--muted)"); $(".hv", svg).setAttribute("stroke", p.good ? "var(--accent)" : "var(--muted)");
      pText.textContent = p.seed; hText.textContent = p.harvest.length > 26 ? p.harvest.slice(0, 25) + "…" : p.harvest;
      $("#swPairPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: c }, text: p.good ? "A seed of life" : "A seed of decay" }), el("h3", { text: `${p.seed} → ${p.harvest}` }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }));
    }
    sel(1);
  }

  function initSwCycle() {
    const Cy = DATA.sw.cycle, svg = sv("svg", { viewBox: "0 0 440 440", role: "img", "aria-label": "Six-stage blessing cycle from grace to thanksgiving" });
    const R = 150, cx = 220, cy = 220, n = Cy.length;
    svg.append(sv("defs", {}, sv("marker", { id: "sw-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))));
    const pt = a => [cx + Math.cos(a) * R, cy + Math.sin(a) * R];
    for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .26, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .26, [x1, y1] = pt(a0), [x2, y2] = pt(a1); svg.append(sv("path", { d: `M${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2}`, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "marker-end": "url(#sw-arr)" })); }
    if (!reduceMotion) { const d = sv("ellipse", { rx: 5, ry: 7, fill: "#d9b44a" }); d.append(sv("animateMotion", { dur: "10s", repeatCount: "indefinite", path: `M${cx} ${cy - R} A${R} ${R} 0 1 1 ${cx - .01} ${cy - R}` })); svg.append(d); }
    svg.append(sv("text", { x: cx, y: cy - 6, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "Blessed"), sv("text", { x: cx, y: cy + 14, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "to bless"));
    const cols = ["var(--accent)", "var(--eden)", "var(--eden)", "var(--babel)", "var(--babel)", "var(--accent)"];
    const nodes = Cy.map((c, i) => {
      const [x, y] = pt(-Math.PI / 2 + i * 2 * Math.PI / n);
      const words = c.t.split(" ");
      const mid = Math.ceil(words.length / 2);
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }, sv("circle", { cx: x, cy: y, r: 44, fill: "var(--surface)" }), sv("circle", { cx: x, cy: y, r: 44, fill: cols[i], "fill-opacity": .2, stroke: cols[i], "stroke-width": 2 }),
        sv("text", { x, y: y - 2, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, words.slice(0, mid).join(" ")), sv("text", { x, y: y + 12, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, words.slice(mid).join(" "))), () => sel(i));
      svg.append(g); return g.childNodes[1];
    });
    $("#swCycle").append(svg);
    function sel(i) { nodes.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .5 : .2); c.setAttribute("stroke-width", j === i ? 4 : 2); }); const c = Cy[i]; $("#swCyclePanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of ${n}` }), el("h3", { text: c.t }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) })); }
    sel(0);
    $("#swGogh").append(photo("gogh"));
  }

  function initSwExchange() {
    const E = DATA.sw.exchange, svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "The great exchange: our harvest laid on Christ, his given to us" });
    svg.append(sv("text", { x: 100, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "US"), sv("text", { x: 420, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "CHRIST"),
      sv("rect", { x: 252, y: 60, width: 16, height: 250, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: 210, y: 110, width: 100, height: 16, fill: "var(--muted)", opacity: .5 }));
    const boxes = [];
    E.ours.forEach((t, i) => { const g = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.2s cubic-bezier(.4,.1,.2,1) ${i * .15}s` } }, sv("rect", { x: 30, y: 70 + i * 80, width: 140, height: 50, rx: 10, fill: "var(--flame)", "fill-opacity": .25, stroke: "var(--flame)", "stroke-width": 2 }), sv("text", { x: 100, y: 100 + i * 80, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, t)); boxes.push([g, 320]); svg.append(g); });
    E.his.forEach((t, i) => { const g = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.2s cubic-bezier(.4,.1,.2,1) ${i * .15}s` } }, sv("rect", { x: 350, y: 70 + i * 80, width: 140, height: 50, rx: 10, fill: "var(--accent)", "fill-opacity": .25, stroke: "var(--accent)", "stroke-width": 2 }), sv("text", { x: 420, y: 100 + i * 80, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, t)); boxes.push([g, -320]); svg.append(g); });
    svg.append(sv("text", { x: 260, y: 334, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--accent)" }, E.refs));
    $("#swExchange").append(svg);
    let swapped = false;
    $("#swExchangeBtn").addEventListener("click", () => { swapped = !swapped; boxes.forEach(([g, dx]) => g.style.transform = swapped ? `translateX(${dx}px)` : ""); $("#swExchangeBtn").textContent = swapped ? "Reset ◂" : "Exchange ▸"; });
  }

  function initSwManip() {
    const svg = sv("svg", { viewBox: "0 0 460 360", role: "img", "aria-label": "A vending machine compared with a garden tended by a gardener" });
    const machine = sv("g", {}, sv("rect", { x: 130, y: 30, width: 200, height: 300, rx: 14, fill: "var(--muted)", "fill-opacity": .3, stroke: "var(--ink)", "stroke-width": 3 }),
      ...Array.from({ length: 9 }, (_, i) => sv("rect", { x: 148 + (i % 3) * 46, y: 50 + Math.floor(i / 3) * 56, width: 38, height: 44, rx: 6, fill: "var(--surface)", stroke: "var(--line)" })),
      sv("rect", { x: 300, y: 220, width: 14, height: 40, rx: 4, fill: "var(--ink)" }), sv("rect", { x: 150, y: 270, width: 160, height: 40, rx: 6, fill: "var(--ink)", opacity: .7 }),
      sv("text", { x: 230, y: 350, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--flame)" }, "coin in → product out"));
    const coin = sv("circle", { cx: 307, cy: 190, r: 10, fill: "var(--accent)", class: reduceMotion ? "" : "coin" });
    machine.append(coin);
    const garden = sv("g", {}, sv("rect", { x: 0, y: 260, width: 460, height: 100, fill: "#8a6238", "fill-opacity": .3 }), sv("circle", { cx: 400, cy: 60, r: 30, fill: "var(--accent)" }),
      ...[200, 260, 320, 380].map((x, i) => sv("g", {}, sv("line", { x1: x, y1: 262, x2: x, y2: 170 - i * 8, stroke: "var(--eden)", "stroke-width": 4 }), sv("ellipse", { cx: x, cy: 160 - i * 8, rx: 7, ry: 12, fill: "#d9b44a" }))),
      sv("circle", { cx: 90, cy: 150, r: 18, fill: "#c99a6e" }), sv("path", { d: "M70 175 L110 175 L118 262 L62 262 Z", fill: "var(--babel)" }), sv("path", { d: "M112 200 L150 210 L160 200", fill: "none", stroke: "var(--muted)", "stroke-width": 6, "stroke-linecap": "round" }),
      ...[0, 1, 2].map(i => sv("line", { x1: 166 + i * 6, y1: 206, x2: 172 + i * 6, y2: 222, stroke: "var(--babel)", "stroke-width": 2 })),
      sv("text", { x: 230, y: 350, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--eden)" }, "a Gardener, seasons and life"));
    svg.append(machine, garden);
    $("#swMachine").append(svg);
    const box = $("#swCompare"), tg = $("#swMachineToggle");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      machine.style.display = m === "machine" ? "" : "none"; garden.style.display = m === "garden" ? "" : "none";
      box.classList.toggle("twisted", m === "machine");
      box.replaceChildren(...DATA.sw.compare.map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(m === "garden" ? r[1] : r[2]) }))));
    }
    [["garden", "God’s design: a garden"], ["machine", "Manipulation: a vending machine"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("garden");
    $("#swWhy").append(...DATA.sw.why.map((w, i) => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: `Reason ${i + 1}` }), el("b", { text: w.t }), el("p", { html: refify(w.d) })))));
    // detector + gauge
    const gs = sv("svg", { viewBox: "0 0 360 230", role: "img", "aria-label": "Manipulation gauge" });
    const arc = (a0, a1, c) => { const p = a => [180 + Math.cos(a) * 140, 190 + Math.sin(a) * 140]; const [x1, y1] = p(a0), [x2, y2] = p(a1); return sv("path", { d: `M${x1} ${y1} A140 140 0 0 1 ${x2} ${y2}`, fill: "none", stroke: c, "stroke-width": 26 }); };
    gs.append(arc(Math.PI, Math.PI * 1.33, "var(--eden)"), arc(Math.PI * 1.33, Math.PI * 1.66, "var(--accent)"), arc(Math.PI * 1.66, Math.PI * 2, "var(--flame)"));
    const needle = sv("line", { x1: 180, y1: 190, x2: 60, y2: 190, stroke: "var(--ink)", "stroke-width": 5, "stroke-linecap": "round", style: { transformOrigin: "180px 190px", transformBox: "view-box", transition: "transform .5s cubic-bezier(.3,1.4,.5,1)" } });
    const verdict = sv("text", { x: 180, y: 222, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    gs.append(needle, sv("circle", { cx: 180, cy: 190, r: 10, fill: "var(--ink)" }), verdict);
    $("#swGauge").append(gs);
    const inputs = DATA.sw.detector.map((q, i) => { const id = "swdet" + i; const inp = el("input", { type: "checkbox", id }); $("#swDetector").append(el("label", { for: id, class: "check" }, inp, el("span", { text: q }))); inp.addEventListener("change", upd); return inp; });
    function upd() {
      const n = inputs.filter(i => i.checked).length, max = inputs.length;
      needle.style.transform = `rotate(${n / max * 180}deg)`;
      verdict.textContent = n === 0 ? "Freely given: looks like God’s design" : n <= 2 ? "Some warning signs: ask questions" : n <= 4 ? "Serious warning signs" : "This is manipulation";
      verdict.setAttribute("fill", n === 0 ? "var(--eden)" : n <= 2 ? "var(--accent)" : "var(--flame)");
    }
    upd();
  }

  function initSwObjections() { objectionList("#swObjections", "#swObjFilter", DATA.sw.objections); }
  function initSwStudy() { studyGuide("#swQuestions", "#swMemory", DATA.sw.study, DATA.sw.memory); }

