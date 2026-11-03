  /* ================ Part V: prophets, the fivefold and the kingdom now ================ */
  function initPrOffice() {
    const nodes = DATA.pr.lawsuit.map(n => ({ ...n, w: ["indict", "intercede"].includes(n.id) ? 330 : 420 }));
    flowchart($("#prLawsuit"), nodes, DATA.pr.lawsuitEdges, { id: "prl", w: 900, h: 560, nodeW: 420, refsInline: true, label: "Flowchart of a prophet's covenant lawsuit", start: "council", onSelect: n => panelFill("#prLawsuitPanel", "The prophetic pattern", n) });
    $("#prOffice").append(...DATA.pr.office.map(([t, d]) => el("div", { class: "card" }, el("p", { class: "eyebrow", text: t }), el("p", { html: refify(d), style: { color: "var(--ink)" } }))));
  }

  function initPrPairs() {
    const P = DATA.pr.pairs, T = DATA.pr.relTypes, cw = 122, x0 = 110, W = x0 + P.length * cw + 10, H = 380, yK = 70, yP = 190, yR = 310;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Map of prophets and the kings and priests they related to", style: { minWidth: W * 0.82 + "px" } });
    [["KING", yK, "var(--babel)"], ["PROPHET", yP, "var(--accent)"], ["PRIEST", yR, "var(--eden)"]].forEach(([t, y, c]) => svg.append(sv("line", { x1: x0 - 10, y1: y, x2: W - 10, y2: y, stroke: c, "stroke-opacity": .15, "stroke-width": 26 }), sv("text", { x: 14, y: y + 5, "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: c }, t)));
    const node = (x, y, label, c) => [sv("rect", { x: x - 56, y: y - 19, width: 112, height: 38, rx: 10, fill: "var(--surface)", stroke: c, "stroke-width": 2 }), sv("text", { x, y: y + 4, "text-anchor": "middle", "font-size": label.length > 15 ? 10 : 11.5, "font-weight": 800, fill: "var(--ink)" }, label)];
    const cols = P.map((p, i) => {
      const x = x0 + i * cw + cw / 2;
      const g = sv("g", { class: "fnode pcol", tabindex: "0", role: "button", "aria-label": p.p });
      g.append(sv("rect", { class: "colbg", x: x - cw / 2 + 3, y: 30, width: cw - 6, height: H - 50, rx: 12, fill: "var(--accent)", "fill-opacity": 0 }));
      if (p.k) g.append(sv("line", { x1: x, y1: yK + 19, x2: x, y2: yP - 19, stroke: T[p.rk][1], "stroke-width": 5, "stroke-linecap": "round" }));
      if (p.pr) g.append(sv("line", { x1: x, y1: yP + 19, x2: x, y2: yR - 19, stroke: T[p.rp][1], "stroke-width": 5, "stroke-linecap": "round" }));
      if (p.k) g.append(...node(x, yK, p.k, "var(--babel)"));
      g.append(...node(x, yP, p.p, "var(--accent)"));
      if (p.pr) g.append(...node(x, yR, p.pr, "var(--eden)"));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return g;
    });
    $("#prPairs").append(svg);
    const f = $("#prPairFilter");
    [["all", "All relationships", null], ...Object.entries(T).map(([k, v]) => [k, v[0], v[1]])].forEach(([k, n, c]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), onclick: () => {
      $$(".chip", f).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
      cols.forEach((g, i) => g.style.opacity = k === "all" || P[i].rk === k || P[i].rp === k ? 1 : .18);
    } }, c ? el("i", { class: "dotc", style: { background: c } }) : null, n)));
    function sel(i) {
      cols.forEach((g, j) => $(".colbg", g).setAttribute("fill-opacity", j === i ? .14 : 0));
      const p = P[i];
      const rel = (who, r) => el("span", { class: "relchip", style: { borderColor: T[r][1] } }, el("i", { class: "dotc", style: { background: T[r][1] } }), `${T[r][0]} ${who}`);
      $("#prPairPanel").replaceChildren(el("p", { class: "eyebrow", text: "Prophet" }), el("h3", { text: p.p }),
        el("div", { class: "chips" }, p.k ? rel(p.k, p.rk) : null, p.pr ? rel(p.pr, p.rp) : null), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }));
    }
    sel(1);
  }

  function initPrFive() {
    const F = DATA.pr.five, C = [260, 250], R = 172;
    const svg = sv("svg", { viewBox: "0 0 520 500", role: "img", "aria-label": "Five ministries around the ascended Christ" });
    const pos = F.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [C[0] + Math.cos(a) * R, C[1] + Math.sin(a) * R]; });
    pos.forEach((p, i) => { const q = pos[(i + 1) % 5]; svg.append(sv("line", { x1: p[0], y1: p[1], x2: q[0], y2: q[1], stroke: "var(--line)", "stroke-width": 2 })); });
    pos.forEach(p => svg.append(sv("line", { x1: C[0], y1: C[1], x2: p[0], y2: p[1], stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .7 })));
    svg.append(sv("circle", { cx: C[0], cy: C[1], r: 70, fill: "var(--accent)", opacity: .15, class: "pulse" }), sv("circle", { cx: C[0], cy: C[1], r: 56, fill: "var(--accent)" }),
      sv("text", { x: C[0], y: C[1] - 6, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--accent-ink)" }, "The ascended"), sv("text", { x: C[0], y: C[1] + 10, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--accent-ink)" }, "Christ"),
      sv("text", { x: C[0], y: C[1] + 26, "text-anchor": "middle", "font-size": 10, fill: "var(--accent-ink)" }, "Eph 4:8–10"));
    const nodes = F.map((f, i) => {
      const [x, y] = pos[i];
      svg.append(sv("circle", { cx: x, cy: y, r: 50, fill: "var(--surface)" }));
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": f.n }, sv("circle", { cx: x, cy: y, r: 50, fill: f.c, "fill-opacity": .22, stroke: f.c, "stroke-width": 2.5 }), sv("text", { x, y: y + 5, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, f.n));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return g.firstChild;
    });
    $("#prStar").append(svg);
    function sel(i) {
      nodes.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .5 : .22); c.setAttribute("stroke-width", j === i ? 5 : 2.5); });
      const f = F[i];
      const row = (cls, t, d) => el("div", { class: "row " + cls }, el("b", { text: t }), el("p", { html: refify(d) }));
      $("#prStarPanel").replaceChildren(el("p", { class: "eyebrow", text: f.gk }), el("h3", { text: f.n }), el("p", { html: refify(f.role) }),
        row("", "Old Testament echo", f.ot), row("babel", "Kingly connection", f.king), row("eden", "Priestly connection", f.priest), row("christ", "How it equips kings and priests", f.equip), row("warn", "If it works alone", f.alone));
    }
    sel(1);
    const steps = [["Christ ascends and gives gifts", "Eph 4:8–10"], ["Five ministries", "Eph 4:11"], ["Saints equipped for ministry", "Eph 4:12"], ["Every part working", "Eph 4:16"], ["Unity and maturity", "Eph 4:13–15"], ["Royal priests filling all things", "Eph 1:22–23; 1 Pet 2:9"]];
    $("#prEquipFlow").append(...steps.map(([t, r]) => el("li", { class: "card reveal" }, el("b", { text: t }), el("span", { class: "ref", text: r }))));
  }

  function initPrChanged() {
    const svg = sv("svg", { viewBox: "0 0 460 320", role: "img", "aria-label": "Old and new covenant overlapping in what is unchanged" });
    const zones = {
      old: sv("circle", { cx: 160, cy: 160, r: 130, fill: "var(--muted)", "fill-opacity": .18, stroke: "var(--muted)", "stroke-width": 2 }),
      new: sv("circle", { cx: 300, cy: 160, r: 130, fill: "var(--accent)", "fill-opacity": .18, stroke: "var(--accent)", "stroke-width": 2 })
    };
    svg.append(zones.old, zones.new);
    const mid = sv("path", { d: "M230 47 A130 130 0 0 1 230 273 A130 130 0 0 1 230 47 Z", fill: "var(--eden)", "fill-opacity": .3 });
    svg.append(mid);
    const t = (x, y, s, fs, c) => svg.append(sv("text", { x, y, "text-anchor": "middle", "font-size": fs, "font-weight": 800, fill: c || "var(--ink)", "pointer-events": "none" }, s));
    t(110, 150, "OLD", 15); t(110, 170, "COVENANT", 12, "var(--muted)"); t(350, 150, "NEW", 15); t(350, 170, "COVENANT", 12, "var(--muted)"); t(230, 155, "What", 12); t(230, 171, "stays", 12);
    const map = { old: zones.old, new: zones.new, same: mid };
    Object.entries(map).forEach(([k, n]) => { n.style.cursor = "pointer"; n.addEventListener("click", () => set(k)); });
    $("#prVenn").append(svg);
    const tg = $("#prCovToggle"), box = $("#prChanged");
    function set(m) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      zones.old.setAttribute("fill-opacity", m === "old" ? .4 : .14); zones.new.setAttribute("fill-opacity", m === "new" ? .4 : .14); mid.setAttribute("fill-opacity", m === "same" ? .6 : .25);
      box.classList.toggle("twisted", false);
      box.replaceChildren(...(m === "same"
        ? DATA.pr.unchanged.map(u => el("div", { class: "crow same" }, el("b", { text: "Unchanged" }), el("p", { class: "cval", html: refify(u) })))
        : DATA.pr.changed.map(r => el("div", { class: "crow " + (m === "old" ? "old" : "new") }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(m === "old" ? r[1] : r[2]) })))));
    }
    [["old", "Old covenant"], ["new", "New covenant"], ["same", "What stays the same"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("new");
  }

  function initPrEquip() {
    const M = DATA.pr.matrix, cols = DATA.pr.matrixCols, F = DATA.pr.five;
    const grid = $("#prMatrix");
    grid.append(el("span", { class: "mh" }), ...cols.map(c => el("span", { class: "mh " + c.k, text: c.t })));
    const cells = [];
    F.forEach(f => {
      grid.append(el("span", { class: "mrow", style: { color: f.c }, text: f.n }));
      M[f.id].forEach(([lvl, d], j) => {
        const b = el("button", { class: `mcell l${lvl} ${cols[j].k}`, type: "button", "aria-label": `${f.n}, ${cols[j].t}: ${d}`, onclick: () => {
          cells.forEach(c => c.classList.toggle("on", c === b));
          $("#prMatrixNote").innerHTML = `<b>${f.n} · ${cols[j].t}</b> (${cols[j].k === "king" ? "kingly" : "priestly"}): ${refify(d)}`;
        } }, el("span", { class: "bars", "aria-hidden": "true" }, ...[1, 2, 3].map(n => el("i", { class: n <= lvl ? "f" : "" }))));
        cells.push(b); grid.append(b);
      });
    });
    cells[2].click();
    // spheres wheel
    const S = DATA.pr.spheres, n = S.length, Cx = 220, Cy = 220, R1 = 90, R2 = 200;
    const svg = sv("svg", { viewBox: "0 0 440 440", role: "img", "aria-label": "Seven spheres of life around the royal priesthood" });
    const arc = (a0, a1) => { const p = (r, a) => [Cx + Math.cos(a) * r, Cy + Math.sin(a) * r]; const [x1, y1] = p(R2, a0), [x2, y2] = p(R2, a1), [x3, y3] = p(R1, a1), [x4, y4] = p(R1, a0); return `M${x1} ${y1} A${R2} ${R2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${R1} ${R1} 0 0 0 ${x4} ${y4} Z`; };
    const segs = S.map((s, i) => {
      const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .02, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - .02, am = (a0 + a1) / 2;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n });
      const pth = sv("path", { d: arc(a0, a1), fill: i % 2 ? "var(--babel)" : "var(--eden)", "fill-opacity": .25, stroke: "var(--surface)", "stroke-width": 2 });
      const words = s.n.split(" & ");
      g.append(pth, ...words.map((w, k) => sv("text", { x: Cx + Math.cos(am) * 145, y: Cy + Math.sin(am) * 145 + 4 + (k - (words.length - 1) / 2) * 15, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, (k ? "& " : "") + w)));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return pth;
    });
    svg.append(sv("circle", { cx: Cx, cy: Cy, r: R1 - 8, fill: "var(--accent)" }), sv("text", { x: Cx, y: Cy - 4, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--accent-ink)" }, "Royal"), sv("text", { x: Cx, y: Cy + 14, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--accent-ink)" }, "priests"));
    $("#prWheel").append(svg);
    function sel(i) {
      segs.forEach((p, j) => p.setAttribute("fill-opacity", j === i ? .6 : .25));
      const s = S[i];
      $("#prWheelPanel").replaceChildren(el("p", { class: "eyebrow", text: "Sphere of life" }), el("h3", { text: s.n }), el("span", { class: "ref", text: s.ref }),
        el("div", { class: "row eden" }, el("b", { text: "As priests" }), el("p", { html: refify(s.priest) })), el("div", { class: "row babel" }, el("b", { text: "As kings" }), el("p", { html: refify(s.king) })));
    }
    sel(2);
  }

  function initPrDaniel() {
    const svg = sv("svg", { viewBox: "0 0 600 420", role: "img", "aria-label": "Daniel's statue struck by a stone that becomes a mountain filling the earth" });
    svg.append(sv("rect", { width: 600, height: 420, fill: "var(--bg-2)", opacity: .5 }));
    const mountain = sv("path", { fill: "var(--eden)", "fill-opacity": .75 });
    const peak = sv("circle", { r: 0, fill: "var(--accent)", opacity: .3, class: "pulse" });
    svg.append(peak, mountain, sv("line", { x1: 0, y1: 360, x2: 600, y2: 360, stroke: "var(--line)", "stroke-width": 2 }));
    const metal = { gold: "var(--accent)", silver: "#b8c0c8", bronze: "#a8743a", iron: "#6b7280", clay: "#b08a5a" };
    const pieces = [
      [sv("circle", { cx: 200, cy: 86, r: 24, fill: metal.gold }), -60, 260, -80, "Babylon (gold)", 92],
      [sv("rect", { x: 170, y: 112, width: 60, height: 54, rx: 6, fill: metal.silver }), 70, 240, 50, "Medo-Persia (silver)", 142],
      [sv("rect", { x: 174, y: 166, width: 52, height: 46, rx: 6, fill: metal.bronze }), -90, 190, -40, "Greece (bronze)", 192],
      [sv("rect", { x: 178, y: 212, width: 18, height: 106, rx: 4, fill: metal.iron }), -40, 60, -70, "Rome (iron)", 266],
      [sv("rect", { x: 204, y: 212, width: 18, height: 106, rx: 4, fill: metal.iron }), 60, 60, 80, "", 0],
      [sv("rect", { x: 174, y: 318, width: 26, height: 20, rx: 3, fill: metal.clay }), -30, 20, -40, "iron & clay", 330],
      [sv("rect", { x: 200, y: 318, width: 26, height: 20, rx: 3, fill: metal.clay }), 40, 20, 40, "", 0]
    ];
    const labels = [];
    pieces.forEach(([n, , , , lab, ly]) => { n.style.transformBox = "fill-box"; n.style.transformOrigin = "center"; svg.append(n); if (lab) { const t = sv("text", { x: 244, y: ly, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, lab); labels.push(t); svg.append(t); } });
    const stone = sv("polygon", { points: "-14,-6 -4,-15 12,-10 15,5 4,14 -12,9", fill: "#8a8f98", stroke: "var(--ink)", "stroke-width": 1.5 });
    svg.append(stone);
    const cap = sv("text", { x: 300, y: 36, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(cap);
    $("#prDaniel").append(svg);
    const clamp = v => Math.max(0, Math.min(1, v));
    function render(t) {
      const s = clamp(t / 22), b = clamp((t - 22) / 20), g = clamp((t - 42) / 58);
      stone.setAttribute("transform", `translate(${560 + (212 - 560) * s} ${20 + (322 - 20) * s}) rotate(${s * 540})`);
      stone.style.opacity = g > 0.02 ? 0 : 1;
      pieces.forEach(([n, dx, dy, r]) => { n.style.transform = b ? `translate(${dx * b}px, ${dy * b * .35}px) rotate(${r * b}deg)` : ""; n.style.opacity = 1 - b; });
      labels.forEach(l => l.style.opacity = 1 - b);
      const w = 30 + g * 1150, h = 20 + g * 300;
      mountain.setAttribute("d", g > 0 ? `M${212 - w / 2} 360 Q${212 - w / 6} ${360 - h * .8} 212 ${360 - h} Q${212 + w / 6} ${360 - h * .8} ${212 + w / 2} 360 Z` : "");
      peak.setAttribute("cx", 212); peak.setAttribute("cy", 360 - h); peak.setAttribute("r", g > 0 ? 18 + g * 30 : 0);
      const st = [...DATA.pr.daniel].reverse().find(d => t >= d.at);
      cap.textContent = st.t;
      $("#prDanielInfo").replaceChildren(el("h3", { text: st.t }), el("span", { class: "ref", text: st.ref }), el("p", { html: refify(st.d) }));
    }
    const range = $("#prDanielRange");
    range.addEventListener("input", () => { cancelAnimationFrame(anim); render(+range.value); });
    let anim = null;
    $("#prDanielPlay").addEventListener("click", () => {
      cancelAnimationFrame(anim);
      if (reduceMotion) { range.value = 100; render(100); return; }
      const t0 = performance.now();
      const step = now => { const t = Math.min(100, (now - t0) / 80); range.value = t; render(t); if (t < 100) anim = requestAnimationFrame(step); };
      anim = requestAnimationFrame(step);
    });
    range.value = 0; render(0);
  }

  function initPrTense() {
    const box = $("#prTense"), cols = DATA.pr.tenseCols, colours = ["var(--eden)", "var(--accent)", "var(--babel)", "var(--muted)"];
    const btns = [];
    cols.forEach((c, i) => {
      const col = el("div", { class: "tcol", style: { borderTopColor: colours[i] } }, el("p", { class: "eyebrow", style: { color: colours[i] }, text: c }));
      DATA.pr.tense.forEach((v, j) => { if (v.col !== i) return; const b = el("button", { class: "tchip", type: "button", onclick: () => sel(j) }, el("b", { text: v.ref }), el("span", { text: "“" + v.v + "”" })); btns[j] = b; col.append(b); });
      if (i < 3) col.append(el("span", { class: "tarrow", "aria-hidden": "true", text: "→" }));
      box.append(col);
    });
    function sel(j) {
      btns.forEach((b, k) => b && b.classList.toggle("on", k === j));
      const v = DATA.pr.tense[j];
      $("#prTensePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: colours[v.col] }, text: cols[v.col] }), el("h3", { text: v.ref }), el("p", { class: "tquote", html: v.t }));
    }
    sel(0);
  }

  function initPrFunnel() {
    const L = DATA.pr.funnel, shortS = ["All creation", "Every sphere", "Services & programmes", "Evangelism & classes", "Ticket to heaven"], shortR = ["Kingdom on earth", "Royal priests everywhere", "Equipping the saints", "Discipling nations", "Knowing the Father now"];
    const svg = sv("svg", { viewBox: "0 0 520 400", role: "img", "aria-label": "A funnel showing the calling narrowing, or restored" });
    const layers = L.map((l, i) => {
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": l.shrunk });
      const poly = sv("polygon", { fill: "var(--accent)", "fill-opacity": .14 + i * .1, stroke: "var(--accent)", "stroke-width": 1.5 });
      const txt = sv("text", { x: 260, y: 30 + i * 74 + 38, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" });
      g.append(poly, txt);
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      svg.append(g); return { poly, txt };
    });
    $("#prFunnel").append(svg);
    let mode = "shrunk", k = 1, anim = null, cur = 0;
    const draw = kk => layers.forEach(({ poly }, i) => {
      const y0 = 30 + i * 74, y1 = y0 + 64, a = i * 44 * kk, b = (i + 1) * 44 * kk;
      poly.setAttribute("points", `${20 + a},${y0} ${500 - a},${y0} ${500 - b},${y1} ${20 + b},${y1}`);
    });
    function set(m) {
      mode = m;
      $$("#prFunnelToggle .chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m)));
      layers.forEach(({ txt, poly }, i) => { txt.textContent = (m === "shrunk" ? shortS : shortR)[i]; poly.setAttribute("fill", m === "shrunk" ? "var(--accent)" : "var(--eden)"); poly.setAttribute("stroke", m === "shrunk" ? "var(--accent)" : "var(--eden)"); });
      const from = k, to = m === "shrunk" ? 1 : 0;
      cancelAnimationFrame(anim);
      if (reduceMotion) { k = to; draw(k); } else {
        const t0 = performance.now();
        const step = now => { const t = Math.min(1, (now - t0) / 700); k = from + (to - from) * (1 - Math.pow(1 - t, 3)); draw(k); if (t < 1) anim = requestAnimationFrame(step); };
        anim = requestAnimationFrame(step);
      }
      sel(cur);
    }
    function sel(i) {
      cur = i;
      layers.forEach(({ poly }, j) => poly.setAttribute("stroke-width", j === i ? 4 : 1.5));
      const l = L[i];
      $("#prFunnelPanel").replaceChildren(el("p", { class: "eyebrow", text: `Layer ${i + 1} of ${L.length}` }),
        el("div", { class: "row warn" }, el("b", { text: "Shrunk to" }), el("p", { html: refify(l.shrunk) })),
        i ? el("div", { class: "row" }, el("b", { text: "What narrowed it" }), el("p", { html: refify(l.cause) })) : null,
        el("div", { class: "row eden" }, el("b", { text: "Original intent" }), el("p", { html: refify(l.restored) })));
    }
    [["shrunk", "How it shrank"], ["restored", "Restore the original intent"]].forEach(([m, n]) => $("#prFunnelToggle").append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    draw(1); set("shrunk"); sel(4);
    const fill = (sel2, rows) => $(sel2).append(...rows.map(([t, d]) => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: t }), el("p", { html: refify(d) })))));
    fill("#prTrans", DATA.pr.transaction); fill("#prRel", DATA.pr.relationship);
  }

  function initPrTimeline() {
    const E = DATA.pr.timeline, W = 1100, H = 330, yA = 175;
    const X = y => y <= 72 ? 60 + (y - 28) * (700 / 44) : 860 + (y - 76) * (180 / 23);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline from AD 30 to AD 70 and the growing kingdom age until Christ's return", style: { minWidth: "900px" } });
    const grad = sv("linearGradient", { id: "kgrow", x1: 0, y1: 0, x2: 1, y2: 0 }, sv("stop", { offset: 0, "stop-color": "var(--eden)", "stop-opacity": .15 }), sv("stop", { offset: 1, "stop-color": "var(--eden)", "stop-opacity": .6 }));
    svg.append(sv("defs", {}, grad));
    svg.append(sv("rect", { x: X(28), y: yA - 14, width: X(70) - X(28), height: 28, rx: 6, fill: "var(--muted)", "fill-opacity": .18 }),
      sv("text", { x: (X(28) + X(70)) / 2, y: yA + 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: "var(--muted)" }, "THE OLD COVENANT AGE ENDING · “THIS GENERATION”"));
    svg.append(sv("path", { d: `M${X(70)} ${yA + 14} L${X(99) + 20} ${yA + 14} L${X(99) + 20} ${yA - 70} Q${X(85)} ${yA - 30} ${X(70)} ${yA - 6} Z`, fill: "url(#kgrow)" }),
      sv("text", { x: X(84), y: yA + 34, "text-anchor": "middle", "font-size": 12, "font-weight": 800, "letter-spacing": 1.5, fill: "var(--eden)" }, "THE KINGDOM AGE · GROWING"));
    svg.append(sv("line", { x1: 40, y1: yA, x2: W - 30, y2: yA, stroke: "var(--ink)", "stroke-width": 2 }));
    svg.append(sv("text", { x: (X(72) + X(76)) / 2, y: yA + 5, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--surface)", stroke: "var(--surface)", "stroke-width": 8 }, "≈"), sv("text", { x: (X(72) + X(76)) / 2, y: yA + 5, "text-anchor": "middle", "font-size": 16, "font-weight": 800, fill: "var(--ink)" }, "≈"));
    [30, 40, 50, 60, 70].forEach(y => svg.append(sv("line", { x1: X(y), y1: yA - 5, x2: X(y), y2: yA + 5, stroke: "var(--ink)" }), sv("text", { x: X(y), y: yA + 52, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "AD " + y)));
    let lastX = -999, tier = 0;
    const dots = E.map((e, i) => {
      const x = X(e.y); tier = x - lastX < 120 ? tier + 1 : 0; lastX = x;
      const up = i % 2 === 0, ly = up ? yA - 40 - tier * 26 : yA + 78 + tier * 26;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": e.t });
      g.append(sv("line", { x1: x, y1: yA, x2: x, y2: up ? ly + 6 : ly - 14, stroke: "var(--line)", "stroke-dasharray": "2 3" }),
        sv("circle", { cx: x, cy: yA, r: e.future ? 10 : 8, fill: e.future ? "var(--surface)" : e.y >= 76 ? "var(--eden)" : e.y >= 64 ? "var(--flame)" : "var(--accent)", stroke: e.future ? "var(--accent)" : "var(--surface)", "stroke-width": e.future ? 3 : 2, "stroke-dasharray": e.future ? "3 3" : "" }),
        sv("text", { x, y: ly, "text-anchor": x > W - 120 ? "end" : x < 120 ? "start" : "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, e.t.length > 30 ? e.t.slice(0, 28) + "…" : e.t));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); sel(i); } });
      svg.append(g); return g.querySelector("circle");
    });
    $("#prTimeline").append(svg);
    function sel(i) {
      dots.forEach((d, j) => d.setAttribute("r", j === i ? 13 : E[j].future ? 10 : 8));
      const e = E[i];
      $("#prTimelinePanel").replaceChildren(el("p", { class: "eyebrow", text: e.future ? "Still future" : e.y >= 76 ? "Now" : "AD " + Math.floor(e.y) }), el("h3", { text: e.t }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.d) }));
    }
    sel(7);
  }

  function initPrObjections() {
    const box = $("#prObjections"), O = DATA.pr.objections;
    const cards = O.map((o, i) => {
      const d = el("details", { class: "obj " + o.k, open: i === 0 ? true : null },
        el("summary", {}, el("span", { class: "obadge", text: o.k === "straw" ? "Misrepresentation" : "Objection" }), el("b", { text: o.q }), el("small", { class: "ref", text: o.refs })),
        el("div", { class: "obody" },
          el("div", { class: "row warn" }, el("b", { text: o.k === "straw" ? "The misrepresentation" : "What is not being claimed" }), el("p", { html: refify(o.not) })),
          el("div", { class: "row eden" }, el("b", { text: "Response" }), el("p", { html: refify(o.a) }))));
      box.append(d); return d;
    });
    const f = $("#prObjFilter");
    [["all", "All"], ["serious", "Serious objections"], ["straw", "Misrepresentations"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      cards.forEach((c, i) => { c.hidden = !(k === "all" || O[i].k === k); });
    } })));
  }

  function initPrStudy() {
    $("#prQuestions").append(...DATA.pr.study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $("#prMemory").append(...DATA.pr.memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }

