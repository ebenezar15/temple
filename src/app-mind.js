  /* ================ Part X: renewing the mind ================ */
  const MN = () => DATA.mn;
  const wrapText = (s, n) => { const out = []; let line = ""; s.split(" ").forEach(w => { if ((line + " " + w).trim().length > n) { out.push(line.trim()); line = w; } else line += " " + w; }); if (line.trim()) out.push(line.trim()); return out; };

  /* 1 · Romans 12:2 + metamorphosis */
  function initMnRom() {
    const W = MN().words;
    const svg = sv("svg", { viewBox: "0 0 520 300", role: "img", "aria-label": "Conformed: pressed into a mould from outside. Transformed: a caterpillar changing into a butterfly from within" });
    // conformed: mould pressing a shape
    const conf = sv("g", { class: "mm-conf" },
      sv("g", { class: "mould" }, sv("rect", { x: 170, y: 30, width: 180, height: 70, rx: 6, fill: "var(--muted)", "fill-opacity": .55 }), sv("rect", { x: 210, y: 100, width: 100, height: 40, fill: "var(--muted)", "fill-opacity": .4 }), txt(260, 72, "THIS AGE", { "font-size": 14, fill: "var(--surface)", "letter-spacing": ".2em" })),
      sv("path", { class: "blob", d: "M200 250 Q190 180 260 172 Q330 180 320 250 Z", fill: "var(--babel)", "fill-opacity": .7 }),
      sv("rect", { x: 120, y: 250, width: 280, height: 10, rx: 4, fill: "var(--line)" }),
      txt(260, 286, "pressed from the outside: same shape as everyone else", { "font-size": 12, fill: "var(--muted)" }));
    // transformed: caterpillar → chrysalis → butterfly
    const branch = sv("path", { d: "M60 60 Q260 40 470 70", stroke: "#6b4a2b", "stroke-width": 6, fill: "none", "stroke-linecap": "round" });
    const cat = sv("g", { class: "mt-s0" }, ...[0, 1, 2, 3, 4, 5].map(i => sv("circle", { cx: 80 + i * 16, cy: 200 - Math.abs(i - 2.5) * 3, r: 10, fill: "var(--eden)" })), sv("circle", { cx: 166, cy: 192, r: 3, fill: "var(--ink)" }), txt(120, 236, "caterpillar", { "font-size": 11.5, fill: "var(--muted)" }));
    const chrys = sv("g", { class: "mt-s1" }, sv("line", { x1: 260, y1: 52, x2: 260, y2: 80, stroke: "#6b4a2b", "stroke-width": 2 }), sv("path", { d: "M260 80 Q286 120 270 170 Q260 186 250 170 Q234 120 260 80 Z", fill: "var(--accent)", "fill-opacity": .75 }), sv("circle", { cx: 260, cy: 130, r: 24, fill: "var(--accent)", "fill-opacity": .25, class: "pulse" }), txt(260, 204, "renewal within", { "font-size": 11.5, fill: "var(--accent)" }));
    const bfly = sv("g", { class: "mt-s2" }, sv("g", { class: "wings" },
      sv("path", { d: "M380 150 Q330 90 340 140 Q330 180 380 160 Z", fill: "var(--flame)", "fill-opacity": .8 }), sv("path", { d: "M380 150 Q430 90 420 140 Q430 180 380 160 Z", fill: "var(--accent)", "fill-opacity": .85 }),
      sv("path", { d: "M380 160 Q345 200 360 210 Q375 200 380 165 Z", fill: "var(--babel)", "fill-opacity": .8 }), sv("path", { d: "M380 160 Q415 200 400 210 Q385 200 380 165 Z", fill: "var(--eden)", "fill-opacity": .8 })),
      sv("rect", { x: 377, y: 140, width: 6, height: 50, rx: 3, fill: "var(--ink)" }), txt(380, 236, "transformed", { "font-size": 11.5, fill: "var(--eden)" }));
    const trans = sv("g", { class: "mm-trans" }, branch, cat, chrys, bfly, txt(260, 286, "changed from within: metamorphoō", { "font-size": 12, fill: "var(--muted)" }));
    svg.append(conf, trans);
    $("#mnMeta").append(svg);
    let timer = null, stage = 2;
    function setStage(s) { stage = s; svg.dataset.stage = s; }
    function mode(m) {
      svg.dataset.mode = m; selectSet(chips, m === "out" ? 0 : 1); clearInterval(timer);
      if (m === "in") { if (reduceMotion) return setStage(2); setStage(0); timer = setInterval(() => setStage((stage + 1) % 3), 1600); }
    }
    const chips = [["out", "Conformed: outside in"], ["in", "Transformed: inside out"]].map(([k, t]) => el("button", { class: "chip", type: "button", text: t, onclick: () => mode(k) }));
    $("#mnModes").append(...chips);
    const btns = W.map((w, i) => { const b = el("button", { class: "vw " + (w.dir === "out" ? "vw-out" : "vw-in"), type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("b", { text: w.t }), el("small", { text: w.w })); $("#mnWords").append(b); return b; });
    function sel(i) {
      selectSet(btns, i); const w = W[i];
      $("#mnWordPanel").replaceChildren(el("p", { class: "eyebrow", text: `Romans 12:2 · word ${i + 1} of ${W.length}` }), el("p", { class: "big-word", text: w.gk }), el("h3", { text: `${w.t} (${w.w})` }), el("p", { html: refify(w.d) }));
      mode(w.dir);
    }
    sel(2);
  }

  function initMnVocab() {
    $("#mnVocab").append(...MN().vocab.map(v => el("div", { class: "card word-card stg" }, el("p", { class: "eyebrow", text: v.lang }), el("p", { class: "big-word" + (v.lang === "Hebrew" ? " heb-tr" : ""), text: v.w }), el("h3", { text: v.t }), el("p", { html: refify(v.d) }))));
  }

  function initMnPath() {
    const wide = { seed: 420, image: 560 };
    const nodes = MN().path.map(n => ({ ...n, w: wide[n.id] || 380 }));
    flowchart($("#mnPath"), nodes, MN().pathEdges, { id: "mnp", w: 900, h: 540, nodeW: 380, fs: 14, refsInline: true, label: "Flowchart: a thought leading either to death through the flesh or to life and peace through the Spirit", start: "seed",
      annotate: [{ x: 120, y: 470, t: "death", anchor: "middle" }, { x: 780, y: 470, t: "life and peace", anchor: "middle" }], onSelect: n => panelFill("#mnPathPanel", "How a thought becomes a life", n) });
  }

  /* 4 · taking thoughts captive */
  function initMnCaptive() {
    const C = MN().captive, n = C.length, W = 1000;
    const svg = sv("svg", { viewBox: `0 0 ${W} 260`, role: "img", "aria-label": "A thought walked through six steps until it is replaced by truth", style: { minWidth: "760px" } });
    const xs = C.map((_, i) => 90 + i * (W - 180) / (n - 1));
    svg.append(sv("line", { x1: 60, y1: 200, x2: W - 60, y2: 200, stroke: "var(--line)", "stroke-width": 6, "stroke-linecap": "round" }));
    const icons = [
      sv("path", { d: "M-16 0 Q0 -14 16 0 Q0 14 -16 0 Z M0 -5 A5 5 0 1 0 0.1 -5", fill: "none", stroke: "var(--babel)", "stroke-width": 2.5 }),
      sv("path", { d: "M-14 -8 H14 M0 -14 V10 M-14 -8 L-18 4 H-10 Z M14 -8 L10 4 H18 Z M-8 12 H8", fill: "none", stroke: "var(--babel)", "stroke-width": 2.5 }),
      sv("path", { d: "M-12 -12 V12 M-4 -12 V12 M4 -12 V12 M12 -12 V12 M-16 -12 H16", fill: "none", stroke: "var(--ink)", "stroke-width": 3 }),
      sv("path", { d: "M-3 -14 h6 v8 h8 v6 h-8 v14 h-6 v-14 h-8 v-6 h8 Z", fill: "var(--accent)" }),
      sv("path", { d: "M-12 -4 L-4 4 L12 -12", fill: "none", stroke: "var(--eden)", "stroke-width": 4, "stroke-linecap": "round" }),
      sv("path", { d: "M-14 6 Q-14 -10 0 -10 Q14 -10 14 6 M-8 6 Q-8 -4 0 -4 Q8 -4 8 6", fill: "none", stroke: "var(--eden)", "stroke-width": 2.5 })
    ];
    const marks = C.map((c, i) => {
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }), () => go(i));
      const ic = icons[i]; ic.setAttribute("transform", `translate(${xs[i]} 200)`);
      g.append(sv("circle", { class: "rbg", cx: xs[i], cy: 200, r: 24, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2.5 }), ic, txt(xs[i], 246, `${i + 1}. ${c.t}`, { "font-size": 12.5 }));
      svg.append(g); return g;
    });
    const bub = sv("g", { class: "cap-bub" });
    const bubBg = sv("rect", { x: -110, y: -30, width: 220, height: 60, rx: 30, fill: "var(--flame)", "fill-opacity": .16, stroke: "var(--flame)", "stroke-width": 2 });
    const bubT = txt(0, 5, "“I’ll always be like this.”", { "font-size": 13, fill: "var(--flame)" });
    const bars = sv("g", { class: "cap-bars", opacity: 0 }, ...[-80, -48, -16, 16, 48, 80].map(x => sv("line", { x1: x, y1: -38, x2: x, y2: 38, stroke: "var(--ink)", "stroke-width": 4 })), sv("line", { x1: -96, y1: -38, x2: 96, y2: -38, stroke: "var(--ink)", "stroke-width": 4 }));
    const echo = sv("g", { class: "cap-echo", opacity: 0 }, ...[1, 2, 3].map(k => sv("rect", { x: -110 - k * 10, y: -30 - k * 8, width: 220 + k * 20, height: 60 + k * 16, rx: 40, fill: "none", stroke: "var(--eden)", "stroke-opacity": .5 / k, "stroke-width": 2 })));
    bub.append(echo, bubBg, bubT, bars);
    svg.append(bub);
    $("#mnCaptive").append(svg);
    let i = 0, x = xs[0];
    function go(k) {
      i = Math.max(0, Math.min(n - 1, k));
      marks.forEach((g, j) => $(".rbg", g).setAttribute("fill", j <= i ? "var(--glow)" : "var(--surface)"));
      tween(x, xs[i], 700, v => { x = Math.min(Math.max(v, 130), W - 130); bub.setAttribute("transform", `translate(${x} 100)`); });
      bars.setAttribute("opacity", i === 2 || i === 3 ? 1 : 0);
      const truth = i >= 4;
      bubT.textContent = truth ? "“I am being transformed.”" : "“I’ll always be like this.”";
      bubT.setAttribute("fill", truth ? "var(--eden)" : "var(--flame)");
      bubBg.setAttribute("fill", truth ? "var(--eden)" : "var(--flame)"); bubBg.setAttribute("stroke", truth ? "var(--eden)" : "var(--flame)");
      bub.setAttribute("opacity", i === 3 ? .55 : 1);
      echo.setAttribute("opacity", i === 5 ? 1 : 0);
      const c = C[i]; info("#mnCapPanel", `Step ${i + 1} of ${n}`, c.t, c.ref, c.d);
      $("#mnCapNext").textContent = i === n - 1 ? "Start again ▸" : "Next step ▸";
    }
    $("#mnCapNext").addEventListener("click", () => go(i === n - 1 ? 0 : i + 1));
    $("#mnCapPrev").addEventListener("click", () => go(i - 1));
    go(0);
  }

  /* 5 · lie → truth exchange */
  function initMnExchange() {
    const L = MN().lies;
    const svg = sv("svg", { viewBox: "0 0 520 220", role: "img", "aria-label": "A card with a lie cracks and falls; a card with the truth rises in its place" });
    const lieG = sv("g", { class: "lie-card" }), truthG = sv("g", { class: "truth-card" });
    svg.append(lieG, truthG);
    $("#mnSwap").append(svg);
    const card = (g, lines, c, label) => {
      g.replaceChildren(sv("rect", { x: 60, y: 40, width: 400, height: 140, rx: 16, fill: "var(--surface)", stroke: c, "stroke-width": 3 }), txt(260, 70, label, { "font-size": 11, fill: c, "letter-spacing": ".14em" }),
        ...lines.map((l, k) => txt(260, 108 + k * 22 - (lines.length - 1) * 11, l, { "font-size": 17, fill: "var(--ink)" })));
    };
    const btns = L.map((l, i) => { const b = el("button", { class: "lie-btn", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("span", { class: "lx", text: "✕" }), el("span", { text: l.lie })); $("#mnLies").append(b); return b; });
    function sel(i) {
      selectSet(btns, i); const l = L[i];
      card(lieG, wrapText(l.lie, 30), "var(--flame)", "THE LIE");
      lieG.append(sv("path", { class: "crack", d: "M250 40 L262 80 L248 110 L266 140 L256 180", fill: "none", stroke: "var(--flame)", "stroke-width": 3 }));
      card(truthG, wrapText(l.truth, 32), "var(--eden)", "THE TRUTH");
      svg.classList.remove("go"); void svg.getBoundingClientRect(); requestAnimationFrame(() => svg.classList.add("go"));
      const copy = el("button", { class: "btn small", type: "button", text: "Copy declaration", onclick: async () => { try { await navigator.clipboard.writeText(l.say + " (" + l.refs + ")"); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Select the text to copy"; } setTimeout(() => copy.textContent = "Copy declaration", 1800); } });
      $("#mnTruth").replaceChildren(el("p", { class: "eyebrow", text: "Exchange " + (i + 1) + " of " + L.length }), el("p", { class: "lie-line", html: `<s>${l.lie}</s>` }), el("p", { class: "muted small", text: "Common roots: " + l.root }), el("h3", { text: l.truth }), el("span", { class: "ref", text: l.refs }), el("blockquote", { class: "decl", text: l.say }), el("div", { class: "htl-controls", style: { marginTop: "4px" } }, copy));
    }
    sel(0);
  }

  /* 6 · means of renewal */
  function initMnMeans() {
    const M = MN().means, cx = 260, cy = 260, rad = 182;
    const svg = sv("svg", { viewBox: "0 0 520 520", role: "img", "aria-label": "Eight means God uses to renew the mind, around the mind of Christ" });
    svg.append(sv("circle", { cx, cy, r: rad, fill: "none", stroke: "var(--line)", "stroke-width": 2, "stroke-dasharray": "3 6" }));
    [50, 100, 150].forEach((r, i) => svg.append(sv("circle", { cx, cy, r, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "ripple-ring", style: { animationDelay: i + "s" } })));
    const gs = M.map((m, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / M.length, x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      svg.append(sv("line", { x1: x, y1: y, x2: cx, y2: cy, stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .5 }));
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": m.t }), () => sel(i));
      g.append(sv("circle", { class: "rbg", cx: x, cy: y, r: 44, fill: "var(--surface)", stroke: "var(--babel)", "stroke-width": 2.5 }), sv("path", { d: m.icon, transform: `translate(${x} ${y - 10})`, fill: "none", stroke: "var(--babel)", "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round" }));
      const w = m.t.split(" "), two = m.t.length > 11, h = Math.ceil(w.length / 2);
      g.append(txt(x, y + 20, two ? w.slice(0, h).join(" ") : m.t, { "font-size": 10.5 })); if (two) g.append(txt(x, y + 31, w.slice(h).join(" "), { "font-size": 10.5 }));
      return g;
    });
    svg.append(...gs, sv("circle", { cx, cy, r: 58, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), txt(cx, cy - 6, "the mind", { "font-size": 13 }), txt(cx, cy + 12, "of Christ", { "font-size": 13, fill: "var(--accent)" }), txt(cx, cy + 30, "1 Cor 2:16", { "font-size": 10.5, "font-style": "italic", fill: "var(--muted)" }));
    $("#mnMeans").append(svg);
    function sel(i) { gs.forEach((g, j) => $(".rbg", g).setAttribute("fill", j === i ? "var(--glow)" : "var(--surface)")); const m = M[i]; info("#mnMeansPanel", `Means of renewal · ${i + 1} of ${M.length}`, m.t, m.ref, m.d); }
    sel(0);
  }

  /* 7 · Philippians 4:8 filter */
  function initMnFilter() {
    const F = MN().filters, T = MN().thoughts, W = 1000, xs = F.map((_, i) => 120 + i * 100);
    const svg = sv("svg", { viewBox: `0 0 ${W} 220`, role: "img", "aria-label": "A thought passing through eight gates: true, honourable, just, pure, lovely, commendable, excellent, praiseworthy", style: { minWidth: "760px" } });
    svg.append(sv("line", { x1: 40, y1: 110, x2: W - 40, y2: 110, stroke: "var(--line)", "stroke-width": 4, "stroke-dasharray": "4 8" }));
    const gates = F.map(([t, gk], i) => {
      const g = sv("g", { class: "gate" }, sv("rect", { class: "gbar", x: xs[i] - 8, y: 60, width: 16, height: 100, rx: 8, fill: "var(--line)" }), sv("text", { class: "gmark", x: xs[i], y: 48, "text-anchor": "middle", "font-size": 18, "font-weight": 800 }, ""),
        txt(xs[i], 182, t, { "font-size": 12 }), txt(xs[i], 198, gk, { "font-size": 10.5, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }));
      svg.append(g); return g;
    });
    const orb = sv("circle", { cx: 70, cy: 110, r: 18, fill: "var(--babel)", class: "orb" });
    const verdict = txt(W - 40, 22, "", { "text-anchor": "end", "font-size": 14 });
    svg.append(orb, verdict);
    $("#mnFilter").append(svg);
    let run = 0;
    const chips = T.map((t, i) => el("button", { class: "chip", type: "button", text: t.t, onclick: () => test(i) }));
    $("#mnThoughts").append(...chips);
    async function test(i) {
      selectSet(chips, i); const t = T[i], my = ++run;
      gates.forEach(g => { $(".gbar", g).setAttribute("fill", "var(--line)"); $(".gmark", g).textContent = ""; });
      orb.setAttribute("fill", "var(--babel)"); verdict.textContent = "";
      let x = 70; orb.setAttribute("cx", x);
      $("#mnFilterPanel").replaceChildren(el("p", { class: "eyebrow", text: "Testing a thought" }), el("h3", { text: t.t }));
      for (let k = 0; k < F.length; k++) {
        await new Promise(r => tween(x, xs[k], reduceMotion ? 0 : 320, v => { x = v; orb.setAttribute("cx", v); if (Math.abs(v - xs[k]) < .5) r(); }));
        if (my !== run) return;
        const bad = t.fail.includes(k);
        $(".gbar", gates[k]).setAttribute("fill", bad ? "var(--flame)" : "var(--eden)");
        const mk = $(".gmark", gates[k]); mk.textContent = bad ? "✕" : "✓"; mk.setAttribute("fill", bad ? "var(--flame)" : "var(--eden)");
        await sleep(120);
      }
      const ok = !t.fail.length;
      orb.setAttribute("fill", ok ? "var(--eden)" : "var(--flame)");
      tween(x, W - 70, 400, v => orb.setAttribute("cx", v));
      verdict.textContent = ok ? "Keep it: think about this" : `Fails ${t.fail.length} of 8: take it captive`;
      verdict.setAttribute("fill", ok ? "var(--eden)" : "var(--flame)");
      $("#mnFilterPanel").replaceChildren(el("p", { class: "eyebrow", text: ok ? "Passes every gate" : "Caught by the filter" }), el("h3", { text: t.t }), el("p", { html: refify(t.note) }));
      if (ok && window.__burst && !reduceMotion) { const r = svg.getBoundingClientRect(); window.__burst(r.right - 60, r.top + r.height / 2); }
    }
    test(0);
  }

  /* 8 · glory slider */
  function initMnGlory() {
    const G = MN().glory;
    const svg = sv("svg", { viewBox: "0 0 520 340", role: "img", "aria-label": "A person beholding the glory of the Lord, unveiled, growing brighter degree by degree" });
    svg.append(sv("defs", {}, sv("radialGradient", { id: "mnG" }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .9 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }))));
    svg.append(sv("circle", { cx: 420, cy: 150, r: 110, fill: "url(#mnG)", class: "pulse" }), sv("circle", { cx: 420, cy: 150, r: 40, fill: "var(--accent)" }), txt(420, 286, "the glory of the Lord", { "font-size": 12, fill: "var(--accent)" }), txt(420, 302, "in the face of Jesus Christ", { "font-size": 11, fill: "var(--muted)" }));
    const rays = sv("g", {}, ...[-40, -20, 0, 20, 40].map(dy => sv("line", { x1: 380, y1: 150 + dy * .4, x2: 160, y2: 140 + dy, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" })));
    const glow = sv("circle", { cx: 120, cy: 150, r: 40, fill: "var(--accent)", "fill-opacity": 0 });
    const body = sv("g", {}, sv("circle", { cx: 120, cy: 118, r: 22 }), sv("path", { d: "M90 250 L94 160 Q120 146 146 160 L150 250 Z" }));
    const veil = sv("g", { class: "veil" }, sv("path", { d: "M90 90 Q120 80 150 90 L156 170 Q120 182 84 170 Z", fill: "var(--muted)", "fill-opacity": .85 }), sv("path", { d: "M100 96 L98 168 M120 92 V176 M140 96 L142 168", stroke: "var(--surface)", "stroke-opacity": .4 }));
    const deg = txt(120, 300, "", { "font-size": 12.5 });
    svg.append(rays, glow, body, veil, deg);
    $("#mnGlory").append(svg);
    const r = $("#mnGloryRange");
    function set(i) {
      r.value = i; const k = i / 5;
      rays.setAttribute("opacity", i === 0 ? .08 : .2 + k * .8);
      glow.setAttribute("r", 40 + k * 70); glow.setAttribute("fill-opacity", i < 2 ? 0 : .12 + k * .35);
      body.style.fill = i < 2 ? "var(--muted)" : `color-mix(in srgb, var(--accent) ${Math.round(k * 100)}%, var(--muted))`;
      veil.classList.toggle("off", i >= 1);
      deg.textContent = i >= 4 ? "glory → glory → glory" : i >= 2 ? "beholding" : i === 1 ? "unveiled" : "veiled";
      const g = G[i]; info("#mnGloryInfo", `Degree ${i + 1} of ${G.length}`, g.t, g.ref, g.d);
    }
    r.addEventListener("input", () => set(+r.value));
    set(0);
    $("#mnTransfig").append(photo("transfig"));
  }

  /* 9 · orphan vs son */
  function initMnMindset() {
    const M = MN().mindset, box = $("#mnMindset");
    const rows = M.map(([area, orphan, son, ref], i) => {
      const row = el("button", { class: "ms-row", type: "button", style: { "--d": i * .06 + "s" } }, el("b", { class: "ms-area", text: area }),
        el("span", { class: "ms-flip" }, el("span", { class: "ms-face ms-orphan", text: orphan }), el("span", { class: "ms-face ms-son", text: son })), el("span", { class: "ref", text: ref }));
      row.addEventListener("click", () => row.classList.toggle("open"));
      box.append(row); return row;
    });
    const sw = el("button", { class: "switch", type: "button", role: "switch", "aria-checked": "false", "aria-label": "Switch from orphan to son mindset" }, el("span", { class: "sw-l", text: "Orphan" }), el("span", { class: "sw-knob" }), el("span", { class: "sw-r", text: "Son" }));
    sw.addEventListener("click", () => { const on = sw.getAttribute("aria-checked") !== "true"; sw.setAttribute("aria-checked", String(on)); box.classList.toggle("son", on); if (on && window.__burst && !reduceMotion) { const r = sw.getBoundingClientRect(); window.__burst(r.right, r.top); } });
    $("#mnSwitch").append(sw, el("span", { class: "muted small", text: "Galatians 4:7: “you are no longer a slave, but a son”" }));
    void rows;
  }

  /* 10 · daily renewal tracker */
  function initMnDaily() {
    const D = MN().daily, KEY = "hme-renew";
    let data = {}; try { data = JSON.parse(store.get(KEY) || "{}"); } catch (e) { data = {}; }
    const day = d => d.toISOString().slice(0, 10), today = day(new Date());
    const list = $("#mnChecklist");
    const head = el("div", { class: "rv-meta" }, el("span", { text: "Today" }), el("span", { id: "mnDayCount" }));
    list.append(el("p", { class: "eyebrow", text: new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) }), head);
    const boxes = D.map((d, i) => {
      const id = "mnChk" + i;
      const cb = el("input", { type: "checkbox", id });
      cb.checked = (data[today] || []).includes(i);
      cb.addEventListener("change", () => {
        const set = new Set(data[today] || []); cb.checked ? set.add(i) : set.delete(i); data[today] = [...set];
        store.set(KEY, JSON.stringify(data)); paint();
        if (set.size === D.length && window.__burst && !reduceMotion) { const r = cb.getBoundingClientRect(); window.__burst(r.left, r.top); }
      });
      list.append(el("label", { class: "chk", for: id }, cb, el("span", { class: "chk-box", "aria-hidden": "true" }), el("span", {}, el("b", { text: d.t }), el("small", { class: "ref", text: d.ref }))));
      return cb;
    });
    const svg = sv("svg", { viewBox: "0 0 520 240", role: "img", "aria-label": "Your renewal practice over the last seven days" });
    $("#mnWeek").append(svg);
    function paint() {
      $("#mnDayCount").textContent = `${(data[today] || []).length} of ${D.length}`;
      svg.replaceChildren(txt(260, 30, "Your last seven days", { "font-size": 13 }));
      let streak = 0, counting = true;
      for (let k = 6; k >= 0; k--) {
        const d = new Date(); d.setDate(d.getDate() - k); const key = day(d), n = (data[key] || []).length, p = n / D.length;
        const x = 50 + (6 - k) * 70, r = 24, c = 2 * Math.PI * r;
        svg.append(sv("circle", { cx: x, cy: 120, r, fill: "none", stroke: "var(--line)", "stroke-width": 7 }),
          sv("circle", { cx: x, cy: 120, r, fill: p >= 1 ? "var(--glow)" : "none", stroke: n ? "var(--eden)" : "none", "stroke-width": 7, "stroke-linecap": "round", "stroke-dasharray": `${c * p} ${c}`, transform: `rotate(-90 ${x} 120)` }),
          txt(x, 125, p >= 1 ? "✓" : String(n), { "font-size": 14, fill: p >= 1 ? "var(--eden)" : "var(--muted)" }),
          txt(x, 168, d.toLocaleDateString(undefined, { weekday: "short" }), { "font-size": 12, fill: k === 0 ? "var(--accent)" : "var(--muted)" }));
      }
      for (let k = 0; k < 365 && counting; k++) { const d = new Date(); d.setDate(d.getDate() - k); if ((data[day(d)] || []).length) streak++; else if (k > 0) counting = false; }
      svg.append(txt(260, 220, streak ? `${streak}-day streak: “day by day” (2 Cor 4:16)` : "Start today: “our inner self is being renewed day by day”", { "font-size": 13, fill: "var(--eden)" }));
    }
    paint(); void boxes;
  }

  function initMnObjections() { objectionList("#mnObjections", "#mnObjFilter", MN().objections); studyGuide("#mnQuestions", "#mnMemory", MN().study, MN().memory); }
