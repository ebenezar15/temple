  /* ================ Part IV: kings and priests ================ */
  const KC = { accent: "var(--accent)", babel: "var(--babel)", eden: "var(--eden)", flame: "var(--flame)", muted: "var(--muted)", ink: "var(--ink)" };

  /* Generic SVG flowchart: boxes centred on (x, y), arrows from bottom to top */
  function flowchart(host, nodes, edges, opt) {
    const W = opt.w, H = opt.h, uid = opt.id;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": opt.label });
    svg.append(sv("defs", {}, sv("marker", { id: uid + "-arr", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--muted)" }))));
    const subOf = n => n.sub ? n.sub + (n.ref ? "  ·  " + n.ref : "") : (opt.refsInline && n.ref ? n.ref : null);
    const box = n => { const h = subOf(n) ? 62 : 50; return { x: n.x - (n.w || opt.nodeW) / 2, y: n.y - h / 2, w: n.w || opt.nodeW, h }; };
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    edges.forEach(([a, b]) => {
      const A = box(byId[a]), B = box(byId[b]);
      const x1 = byId[a].x, y1 = A.y + A.h, x2 = byId[b].x, y2 = B.y - 4, my = (y1 + y2) / 2;
      const d = `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`;
      svg.append(sv("path", { d, fill: "none", stroke: "var(--line)", "stroke-width": 2.5, "marker-end": `url(#${uid}-arr)` }),
        sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 2, class: "flow", opacity: .7 }));
    });
    (opt.annotate || []).forEach(a => svg.append(sv("text", { x: a.x, y: a.y, "text-anchor": a.anchor || "middle", "font-size": 12, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }, a.t)));
    const els = {};
    nodes.forEach(n => {
      const b = box(n), c = KC[n.c] || KC.ink;
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": n.t });
      const r = sv("rect", { x: b.x, y: b.y, width: b.w, height: b.h, rx: 12, fill: c, "fill-opacity": .12, stroke: c, "stroke-width": 1.8 });
      const sub = subOf(n);
      g.append(r, sv("text", { x: n.x, y: n.y + (sub ? -4 : 5), "text-anchor": "middle", "font-size": opt.fs || 15, "font-weight": 800, fill: "var(--ink)" }, n.t));
      if (sub) g.append(sv("text", { x: n.x, y: n.y + 17, "text-anchor": "middle", "font-size": 12.5, "font-style": "italic", "font-weight": 600, fill: c === KC.ink ? "var(--muted)" : c }, sub));
      g.addEventListener("click", () => sel(n.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(n.id); } });
      els[n.id] = r; svg.append(g);
    });
    host.append(svg);
    function sel(id) {
      Object.entries(els).forEach(([k, r]) => { const on = k === id; r.setAttribute("fill-opacity", on ? .32 : .12); r.setAttribute("stroke-width", on ? 3.5 : 1.8); });
      opt.onSelect(byId[id]);
    }
    sel(opt.start || nodes[0].id);
    return sel;
  }
  const panelFill = (sel, eyebrow, n) => $(sel).replaceChildren(...[el("p", { class: "eyebrow", text: eyebrow }), el("h3", { text: n.t }), n.ref ? el("span", { class: "ref", text: n.ref }) : null, el("p", { html: refify(n.d) })].filter(Boolean));

  function initKpDesign() {
    flowchart($("#kpDesign"), DATA.kp.design, DATA.kp.designEdges, {
      id: "kpd", w: 900, h: 470, nodeW: 300, label: "Flowchart of God’s design for humanity as priest-kings", start: "adam",
      annotate: [{ x: 250, y: 168, t: "faces the world for God", anchor: "end" }, { x: 650, y: 168, t: "faces God for the world", anchor: "start" }],
      onSelect: n => panelFill("#kpDesignPanel", "God’s design", n)
    });
    // axis diagram
    const svg = sv("svg", { viewBox: "0 0 420 300", role: "img", "aria-label": "Two axes: the priest faces God for people; the king faces the world for God" });
    svg.append(sv("defs", {}, sv("marker", { id: "ax-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 8, markerHeight: 8, orient: "auto-start-reverse" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--ink)" }))));
    svg.append(sv("line", { x1: 210, y1: 262, x2: 210, y2: 34, stroke: "var(--eden)", "stroke-width": 5, "marker-end": "url(#ax-arr)", "marker-start": "url(#ax-arr)" }),
      sv("line", { x1: 40, y1: 150, x2: 380, y2: 150, stroke: "var(--babel)", "stroke-width": 5, "marker-end": "url(#ax-arr)", "marker-start": "url(#ax-arr)" }));
    svg.append(sv("circle", { cx: 210, cy: 150, r: 34, fill: "var(--accent)", opacity: .2, class: "pulse" }), sv("circle", { cx: 210, cy: 150, r: 22, fill: "var(--accent)" }),
      sv("text", { x: 210, y: 154, "text-anchor": "middle", "font-size": 10, "font-weight": 800, fill: "var(--accent-ink)" }, "IMAGE"));
    const t = (x, y, s, c, a, fs) => svg.append(sv("text", { x, y, "text-anchor": a || "middle", "font-size": fs || 12, "font-weight": 800, fill: c }, s));
    t(210, 22, "GOD", "var(--ink)"); t(210, 288, "PEOPLE & CREATION", "var(--ink)");
    t(222, 72, "PRIEST", "var(--eden)", "start", 13); t(222, 88, "access · worship · intercession", "var(--muted)", "start", 11);
    t(380, 136, "KING", "var(--babel)", "end", 13); t(380, 178, "authority · stewardship · justice", "var(--muted)", "end", 11);
    if (!reduceMotion) {
      [["M210 262 L210 40", "var(--eden)", 0], ["M210 40 L210 262", "var(--eden)", 1.5], ["M210 150 L374 150", "var(--babel)", .7], ["M210 150 L46 150", "var(--babel)", 2.2]].forEach(([p, c, b]) => {
        const dot = sv("circle", { r: 5, fill: c }); dot.append(sv("animateMotion", { dur: "3s", repeatCount: "indefinite", path: p, begin: -b + "s" })); svg.append(dot);
      });
    }
    $("#kpAxis").append(svg);
  }

  function initKpTwist() {
    const list = $("#kpTwist");
    const tag = { king: ["Kingship", "var(--babel)"], priest: ["Priesthood", "var(--eden)"], both: ["Both", "var(--flame)"] };
    const items = DATA.kp.twist.map((s, i) => {
      const li = el("li", { class: "vstep", "data-s": s.strand }, el("button", { type: "button", onclick: () => sel(i) },
        el("span", { class: "vtag", style: { background: tag[s.strand][1] }, text: tag[s.strand][0] }), el("b", { text: s.t }), el("small", { text: s.ref })));
      list.append(li); return li;
    });
    function sel(i) {
      items.forEach((li, j) => li.classList.toggle("on", j === i));
      const s = DATA.kp.twist[i];
      $("#kpTwistPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: tag[s.strand][1] }, text: `Step ${i + 1} of ${DATA.kp.twist.length} · ${tag[s.strand][0]}` }), el("h3", { text: s.t }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.d) }));
    }
    const f = $("#kpTwistFilter");
    [["all", "All steps"], ["king", "Kingship twisted"], ["priest", "Priesthood twisted"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      items.forEach(li => li.classList.toggle("dim", k !== "all" && li.dataset.s !== k && li.dataset.s !== "both"));
    } })));
    sel(0);
    // design vs distortion
    const box = $("#kpContrast");
    const rows = DATA.kp.contrast.map(r => { const v = el("p", { class: "cval", html: refify(r[1]) }); box.append(el("div", { class: "crow" }, el("b", { text: r[0] }), v)); return v; });
    const tg = $("#kpContrastToggle");
    const set = mode => {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === mode)));
      box.classList.toggle("twisted", mode === "twisted");
      rows.forEach((v, i) => { v.classList.add("out"); setTimeout(() => { v.innerHTML = refify(DATA.kp.contrast[i][mode === "twisted" ? 2 : 1]); v.classList.remove("out"); }, reduceMotion ? 0 : 200 + i * 60); });
    };
    [["design", "God’s design"], ["twisted", "The distortion"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, "aria-pressed": String(m === "design"), text: n, onclick: () => set(m) })));
  }

  function initKpSplit() {
    const nodes = DATA.kp.split.map(n => ({ ...n, w: ["levi", "judah", "prophet"].includes(n.id) ? 236 : 400 }));
    flowchart($("#kpSplit"), nodes, DATA.kp.splitEdges, { id: "kps", w: 900, h: 482, nodeW: 340, refsInline: true, label: "Flowchart: from a kingdom of priests to separate offices and their reunion in the Messiah", onSelect: n => panelFill("#kpSplitPanel", "Sinai to the Messiah", n) });
    // triangle
    const P = { prophet: [210, 56], priest: [70, 296], king: [350, 296] };
    const svg = sv("svg", { viewBox: "0 0 420 360", role: "img", "aria-label": "Triangle of the three anointed offices with the Messiah at the centre" });
    const edge = (a, b, label, lx, ly) => { svg.append(sv("line", { x1: P[a][0], y1: P[a][1], x2: P[b][0], y2: P[b][1], stroke: "var(--line)", "stroke-width": 3 })); svg.append(sv("text", { x: lx, y: ly, "text-anchor": "middle", "font-size": 11, "font-style": "italic", "font-weight": 600, fill: "var(--muted)" }, label)); };
    edge("prophet", "priest", "corrects (Malachi)", 96, 170); edge("prophet", "king", "confronts (Nathan, Elijah)", 330, 170); edge("priest", "king", "anoints & partners (Zadok, Jehoiada)", 210, 330);
    svg.append(sv("path", { d: "M210 150 C190 180 190 200 210 210 C230 200 230 180 210 150 Z", fill: "var(--accent)", class: "pulse" }),
      sv("text", { x: 210, y: 236, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "Messiah · Christ"), sv("text", { x: 210, y: 251, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "“the Anointed One”"));
    const vs = {};
    Object.entries(DATA.kp.offices).forEach(([k, o]) => {
      const [x, y] = P[k];
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": o.t }, sv("circle", { cx: x, cy: y, r: 34, fill: o.c, "fill-opacity": .2, stroke: o.c, "stroke-width": 2 }), sv("text", { x, y: y + 5, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, o.t));
      g.addEventListener("click", () => sel(k)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(k); } });
      vs[k] = g.firstChild; svg.append(g);
    });
    $("#kpTriangle").append(svg);
    function sel(k) {
      Object.entries(vs).forEach(([j, c]) => { c.setAttribute("fill-opacity", j === k ? .45 : .2); c.setAttribute("stroke-width", j === k ? 4 : 2); });
      const o = DATA.kp.offices[k];
      $("#kpTrianglePanel").replaceChildren(el("p", { class: "eyebrow", text: "Anointed office" }), el("h3", { text: o.t }), el("p", { html: refify(o.role) }),
        el("div", { class: "row" }, el("b", { text: "Anointing" }), el("p", { html: refify(o.anoint) })),
        el("div", { class: "row christ" }, el("b", { text: "Fulfilled in Christ" }), el("p", { html: refify(o.christ) })),
        el("div", { class: "row eden" }, el("b", { text: "Our share" }), el("p", { html: refify(o.us) })));
    }
    sel("priest");
  }

  function initKpRoles() {
    const R = DATA.kp.roles;
    makeTabs($("#kpRoleTabs"), $("#kpRolePanels"), [{ tab: "The priest", k: "priest" }, { tab: "The king", k: "king" }], (p, it) => {
      const r = R[it.k], c = it.k === "priest" ? "var(--eden)" : "var(--babel)";
      const card = (t, body) => el("div", { class: "card role-card", style: { borderTop: `3px solid ${c}` } }, el("p", { class: "eyebrow", style: { color: c }, text: t }), body);
      p.append(el("div", { class: "role-grid" },
        card("Responsibilities", el("ul", { class: "tight" }, r.resp.map(x => el("li", { html: refify(x) })))),
        card("Access", el("p", { html: refify(r.access) })), card("Authority", el("p", { html: refify(r.authority) })), card("Limits", el("p", { html: refify(r.limits) }))));
    }, "kprole");
    // garments
    const svg = sv("svg", { viewBox: "0 0 600 430", role: "img", "aria-label": "The high priest's garments and the king's signs of office" });
    const G = {};
    const hot = (id, ...kids) => { const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": DATA.kp.garments.find(x => x.id === id).t }, ...kids); g.addEventListener("click", () => sel(id)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(id); } }); G[id] = g; return g; };
    // priest
    svg.append(sv("circle", { cx: 170, cy: 76, r: 22, fill: "#c99a6e" }));
    svg.append(hot("tunic", sv("rect", { class: "hl", x: 108, y: 112, width: 22, height: 120, rx: 10, fill: "var(--surface)", stroke: "var(--muted)" }), sv("rect", { class: "hl", x: 210, y: 112, width: 22, height: 120, rx: 10, fill: "var(--surface)", stroke: "var(--muted)" })));
    svg.append(hot("robe", sv("path", { class: "hl", d: "M132 104 L208 104 L236 372 L104 372 Z", fill: "var(--babel)", stroke: "transparent" }), ...Array.from({ length: 11 }, (_, i) => sv("circle", { cx: 110 + i * 12, cy: 370, r: 4, fill: i % 2 ? "var(--flame)" : "var(--accent)" }))));
    svg.append(hot("ephod", sv("rect", { class: "hl", x: 138, y: 106, width: 64, height: 128, rx: 4, fill: "var(--accent)", stroke: "transparent" }), sv("rect", { x: 138, y: 220, width: 64, height: 10, fill: "var(--flame)", opacity: .8 }), sv("circle", { cx: 142, cy: 108, r: 7, fill: "#2b2b2b" }), sv("circle", { cx: 198, cy: 108, r: 7, fill: "#2b2b2b" })));
    const gems = sv("g", {}, sv("rect", { class: "hl", x: 151, y: 126, width: 38, height: 50, rx: 3, fill: "var(--surface)", stroke: "transparent" }));
    DATA.breastpiece.forEach(([, c], i) => gems.append(sv("rect", { x: 154 + (i % 3) * 11.5, y: 129 + Math.floor(i / 3) * 11.5, width: 9, height: 9, rx: 1.5, fill: c })));
    svg.append(hot("breast", gems));
    svg.append(hot("turban", sv("path", { class: "hl", d: "M148 66 Q148 38 170 38 Q192 38 192 66 Z", fill: "var(--surface)", stroke: "var(--muted)" }), sv("rect", { x: 160, y: 54, width: 20, height: 8, rx: 2, fill: "var(--accent)" })));
    svg.append(sv("text", { x: 170, y: 408, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "The high priest"));
    // king
    svg.append(hot("throne", sv("path", { class: "hl", d: "M360 120 L500 120 L500 380 L360 380 Z M372 132 L488 132 L488 250 L372 250 Z", fill: "var(--muted)", "fill-opacity": .35, "fill-rule": "evenodd", stroke: "transparent" })));
    svg.append(sv("circle", { cx: 430, cy: 76, r: 22, fill: "#c99a6e" }), sv("path", { d: "M398 104 L462 104 L486 372 L374 372 Z", fill: "var(--flame)", opacity: .85 }), sv("path", { d: "M416 104 L444 104 L440 372 L420 372 Z", fill: "var(--surface)", opacity: .7 }));
    svg.append(hot("crown", sv("path", { class: "hl", d: "M408 58 L408 36 L419 48 L430 30 L441 48 L452 36 L452 58 Z", fill: "var(--accent)", stroke: "transparent" })));
    svg.append(hot("scepter", sv("line", { class: "hl", x1: 476, y1: 220, x2: 520, y2: 120, stroke: "var(--accent)", "stroke-width": 6, "stroke-linecap": "round" }), sv("circle", { cx: 522, cy: 114, r: 10, fill: "var(--accent)" })));
    svg.append(hot("ring", sv("circle", { class: "hl", cx: 474, cy: 226, r: 7, fill: "none", stroke: "var(--accent)", "stroke-width": 4 })));
    svg.append(hot("scroll", sv("rect", { class: "hl", x: 360, y: 200, width: 40, height: 28, rx: 6, fill: "var(--surface)", stroke: "var(--muted)" }), sv("line", { x1: 368, y1: 210, x2: 392, y2: 210, stroke: "var(--muted)" }), sv("line", { x1: 368, y1: 218, x2: 388, y2: 218, stroke: "var(--muted)" })));
    svg.append(sv("text", { x: 430, y: 408, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "The king"));
    $("#kpGarments").append(svg);
    function sel(id) {
      const g = DATA.kp.garments.find(x => x.id === id);
      Object.entries(G).forEach(([k, n]) => n.classList.toggle("on", k === id));
      $("#kpGarmentPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: g.who === "priest" ? "var(--eden)" : "var(--babel)" }, text: g.who === "priest" ? "High priest" : "King" }), el("h3", { text: g.t }), el("span", { class: "ref", text: g.ref }), el("p", { html: refify(g.d) }),
        el("div", { class: "chips" }, DATA.kp.garments.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o.id === id), text: o.t.split(" and ")[0].split(":")[0], onclick: () => sel(o.id) }))),
        el("p", { class: "muted", html: "In Christ both meet: John sees him “clothed with a long robe and with a golden sash” like a priest (<span class=\"ref\">Rev 1:13</span>), and crowned with “many diadems” as King of kings (<span class=\"ref\">Rev 19:12, 16</span>)." }));
    }
    sel("breast");
  }

  function initKpRings() {
    const C = [260, 205], S = [[480, 370], [370, 285], [250, 195], [120, 104]];
    const svg = sv("svg", { viewBox: "0 0 520 420", role: "img", "aria-label": "Concentric rings of access in the Temple" });
    const fills = ["var(--muted)", "var(--babel)", "var(--eden)", "var(--accent)"];
    const walls = S.map(([w, h], i) => { const r = sv("rect", { x: C[0] - w / 2, y: C[1] - h / 2, width: w, height: h, rx: 6, fill: fills[i], "fill-opacity": .08 + i * .05, stroke: fills[i], "stroke-width": 3, style: { transition: "stroke-opacity 1s, stroke-dasharray 1s" } }); svg.append(r); return r; });
    DATA.kp.rings.forEach((r, i) => svg.append(sv("text", { x: C[0], y: C[1] - S[3 - i][1] / 2 + 16, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)", "letter-spacing": 1 }, r.n.toUpperCase())));
    const veilL = sv("rect", { x: C[0] - 60, y: C[1] + 44, width: 60, height: 8, fill: "var(--flame)", style: { transition: "transform 1.2s" } }), veilR = sv("rect", { x: C[0], y: C[1] + 44, width: 60, height: 8, fill: "var(--babel)", style: { transition: "transform 1.2s" } });
    svg.append(veilL, veilR);
    // zone 0 = Most Holy (innermost) … zone 3 = outer court
    const counts = [1, 6, 14, 20], zoneFill = ["var(--accent)", "var(--eden)", "var(--babel)", "var(--muted)"];
    let seed = 5; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const homes = [], dots = [];
    counts.forEach((n, z) => {
      for (let k = 0; k < n; k++) {
        let x, y;
        if (z === 0) { x = C[0]; y = C[1] + 8; }
        else {
          const [ow, oh] = S[3 - z], [iw, ih] = S[4 - z];
          do { x = C[0] + (rnd() - .5) * (ow - 26); y = C[1] + (rnd() - .5) * (oh - 44) + 10; } while (Math.abs(x - C[0]) < iw / 2 + 10 && Math.abs(y - C[1]) < ih / 2 + 12);
        }
        homes.push([x, y]);
        const d = sv("circle", { r: 6, fill: zoneFill[z], style: { transition: reduceMotion ? "none" : `transform 1.4s cubic-bezier(.3,.8,.3,1) ${dots.length * 0.02}s, fill .8s` } });
        d.dataset.ring = z;
        dots.push(d); svg.append(d);
      }
    });
    $("#kpRings").append(svg);
    function set(mode) {
      $$("#kpRingToggle .chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === mode)));
      const after = mode === "after";
      walls.forEach((w, i) => { w.style.strokeOpacity = after ? .18 : 1; w.style.strokeDasharray = after ? "4 10" : "none"; });
      veilL.style.transform = after ? "translate(-46px, 0) scaleY(1)" : ""; veilR.style.transform = after ? "translate(46px, 0)" : "";
      dots.forEach((d, i) => {
        let x, y;
        if (after) { const a = i * 2.39996, r = 10 + Math.sqrt(i) * 9.5; x = C[0] + Math.cos(a) * r; y = C[1] + 8 + Math.sin(a) * r * .8; d.setAttribute("fill", "var(--accent)"); }
        else { [x, y] = homes[i]; d.setAttribute("fill", zoneFill[d.dataset.ring]); }
        d.style.transform = `translate(${x}px, ${y}px)`;
      });
      $("#kpRingInfo").replaceChildren(...(after
        ? [el("h3", { text: "After the cross: one open way" }), el("p", { html: refify("“We have confidence to enter the holy places by the blood of Jesus, by the new and living way that he opened for us through the curtain, that is, through his flesh” (Heb 10:19–20).") }),
            el("p", { html: refify("“He himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility … through him we both have access in one Spirit to the Father” (Eph 2:14–18).") }),
            el("p", { html: refify("Every believer, Jew and Gentile, is now a priest with access (1 Pet 2:5, 9). In the end there is no temple at all: “they will see his face” (Rev 21:22; 22:4).") })]
        : [el("h3", { text: "Before the cross: graded access" }), ...DATA.kp.rings.map((r, i) => el("div", { class: "zone on" }, el("i", { style: { background: fills[3 - i] } }), el("div", {}, el("b", { text: r.n }), el("span", { html: refify(r.who + " (" + r.ref + ")") }))))]));
    }
    [["before", "Before the cross"], ["after", "After the cross"]].forEach(([m, n]) => $("#kpRingToggle").append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("before");
  }

  function initKpCross() {
    $("#kpCross").append(...DATA.kp.cross.map(c => el("div", { class: "card xcard reveal " + c.k },
      el("div", { class: "xhead" }, el("span", { class: "xmark", "aria-hidden": "true", text: c.k === "good" ? "✓" : "✕" }), el("div", {}, el("h3", { text: c.n }), el("small", { text: c.role }))),
      el("span", { class: "ref", text: c.ref }),
      el("div", { class: "row" }, el("b", { text: c.k === "good" ? "What they did" : "The line crossed" }), el("p", { html: refify(c.did) })),
      el("div", { class: "row" }, el("b", { text: "What happened" }), el("p", { html: refify(c.res) })))));
  }

  function initKpPeople() {
    const box = $("#kpPeople"), P = DATA.kp.people, E = DATA.kp.eras;
    const grid = el("div", { class: "pgrid", style: { gridTemplateColumns: `120px repeat(${E.length}, minmax(112px, 1fr))` } });
    grid.append(el("span", {}), ...E.map(e => el("span", { class: "pera", text: e })));
    const btns = [];
    [["king", "Kings", "var(--babel)"], ["both", "Both", "var(--accent)"], ["priest", "Priests", "var(--eden)"]].forEach(([lane, label, c]) => {
      grid.append(el("span", { class: "plane", style: { color: c, borderColor: c }, text: label }));
      E.forEach((_, era) => {
        const cell = el("div", { class: "pcell " + lane });
        P.forEach((p, i) => {
          if (p.lane !== lane || p.era !== era) return;
          const b = el("button", { class: "pchip f-" + p.f, type: "button", "data-i": i, text: p.n, onclick: () => sel(i) });
          btns[i] = b; cell.append(b);
        });
        grid.append(cell);
      });
    });
    box.append(grid);
    const f = $("#kpPeopleFilter");
    const filters = { all: () => true, king: p => p.lane === "king", priest: p => p.lane === "priest", both: p => p.lane === "both", faithful: p => p.f === "faithful", twisted: p => p.f === "twisted", pairs: p => !!p.pair };
    [["all", "Everyone"], ["king", "Kings"], ["priest", "Priests"], ["both", "Both offices"], ["pairs", "King–priest partners"], ["faithful", "Faithful"], ["twisted", "Twisted the office"]].forEach(([k, n]) => f.append(el("button", { class: "chip", type: "button", "data-k": k, "aria-pressed": String(k === "all"), text: n, onclick: () => {
      $$(".chip", f).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      P.forEach((p, i) => btns[i].classList.toggle("dim", !filters[k](p)));
    } })));
    const laneName = { king: "King", priest: "Priest", both: "King and priest" }, fName = { faithful: "Faithful", mixed: "Mixed record", twisted: "Twisted the office" };
    function sel(i) {
      const p = P[i];
      const partners = p.pair ? P.filter((q, j) => q.pair === p.pair && j !== i) : [];
      btns.forEach((b, j) => { b.classList.toggle("on", j === i); b.classList.toggle("partner", partners.includes(P[j])); });
      $("#kpPersonPanel").replaceChildren(el("p", { class: "eyebrow", text: `${laneName[p.lane]} · ${E[p.era]} · ${fName[p.f]}` }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) }),
        partners.length ? el("div", { class: "row" }, el("b", { text: "Worked alongside" }), el("div", { class: "chips" }, partners.map(q => el("button", { class: "chip", type: "button", text: q.n, onclick: () => sel(P.indexOf(q)) })))) : null);
      const b = btns[i];
      if (box.scrollWidth > box.clientWidth) box.scrollTo({ left: Math.max(0, b.offsetLeft - box.clientWidth / 2), behavior: reduceMotion ? "auto" : "smooth" });
    }
    sel(P.findIndex(p => p.n === "Melchizedek"));
  }

  function initKpMelch() {
    const fl = $("#kpMelchFlow");
    DATA.kp.melchFlow.forEach((s, i) => { if (i) fl.append(el("span", { class: "harrow", "aria-hidden": "true", text: "→" })); fl.append(el("div", { class: "card hstep reveal" }, el("span", { class: "ref", text: s.ref }), el("h3", { text: s.t }), el("p", { html: refify(s.d) }))); });
    const t = $("#kpOrder");
    $("tbody", t).append(...DATA.kp.order.map(r => el("tr", {}, el("td", { text: r[0] }), el("td", { html: refify(r[1]) }), el("td", { html: refify(r[2]) }))));
    $$("th.colsel", t).forEach(th => { th.tabIndex = 0; th.setAttribute("role", "button"); const go = () => { const c = th.dataset.col; t.dataset.hl = t.dataset.hl === c ? "" : c; }; th.addEventListener("click", go); th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }); });
    t.dataset.hl = "2";
  }

  function initKpPromises() {
    const N = DATA.kp.promises, W = 1060, H = 520, yK = 150, yP = 380, yM = 265;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Royal and priestly promises converging on Christ and flowing to his people" });
    const kx = N.filter(n => n.s === "king").map(n => n.x), px = N.filter(n => n.s === "priest").map(n => n.x);
    const join = N.find(n => n.s === "join"), christ = N.find(n => n.s === "christ"), church = N.find(n => n.s === "church");
    const kd = `M30 ${yK} L${kx[kx.length - 1]} ${yK} C${kx[kx.length - 1] + 70} ${yK} ${join.x - 60} ${yM} ${join.x} ${yM}`;
    const pd = `M30 ${yP} L${px[px.length - 1]} ${yP} C${px[px.length - 1] + 70} ${yP} ${join.x - 60} ${yM} ${join.x} ${yM}`;
    const md = `M${join.x} ${yM} L${W - 30} ${yM}`;
    svg.append(sv("text", { x: 30, y: yK - 112, "font-size": 12, "font-weight": 800, "letter-spacing": 2, fill: "var(--babel)" }, "ROYAL PROMISES"), sv("text", { x: 30, y: yP + 128, "font-size": 12, "font-weight": 800, "letter-spacing": 2, fill: "var(--eden)" }, "PRIESTLY PROMISES"));
    [[kd, "var(--babel)"], [pd, "var(--eden)"], [md, "var(--accent)"]].forEach(([d, c], i) => svg.append(sv("path", { d, fill: "none", stroke: c, "stroke-width": i === 2 ? 10 : 6, "stroke-linecap": "round", opacity: .35 }), sv("path", { d, fill: "none", stroke: c, "stroke-width": 2.5, class: "flow" })));
    const nodes = N.map((n, i) => {
      const y = n.s === "king" ? yK : n.s === "priest" ? yP : yM, c = n.s === "king" ? "var(--babel)" : n.s === "priest" ? "var(--eden)" : "var(--accent)";
      const big = n.s === "christ" || n.s === "church" || n.s === "join";
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": n.t });
      g.append(sv("circle", { cx: n.x, cy: y, r: big ? 16 : 11, fill: c, stroke: "var(--surface)", "stroke-width": 3 }));
      const above = n.s === "king" || (big && n.s !== "christ");
      const tier = big ? 0 : (N.filter(m => m.s === n.s).indexOf(n) % 2) * 34;
      const ty = above ? y - (big ? 50 : 36) - tier : y + (big ? 42 : 32) + tier;
      if (tier) g.append(sv("line", { x1: n.x, y1: above ? y - 12 : y + 12, x2: n.x, y2: above ? ty + 20 : ty - 14, stroke: c, "stroke-width": 1, "stroke-dasharray": "2 3" }));
      g.append(sv("text", { x: n.x, y: ty, "text-anchor": "middle", "font-size": big ? 14 : 12.5, "font-weight": 800, fill: "var(--ink)" }, n.t), sv("text", { x: n.x, y: ty + 16, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: c }, n.ref.split(";")[0]));
      g.addEventListener("click", () => { clearInterval(timer); sel(i); });
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); clearInterval(timer); sel(i); } });
      svg.append(g); return g.firstChild;
    });
    $("#kpPromises").append(svg);
    function sel(i) {
      nodes.forEach((c, j) => { c.setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"); c.setAttribute("stroke-width", j === i ? 4 : 3); });
      const n = N[i], lab = { king: "Royal promise", priest: "Priestly promise", join: "The two streams meet", christ: "Fulfilled", church: "Shared with his people" }[n.s];
      $("#kpPromisePanel").replaceChildren(el("p", { class: "eyebrow", text: lab }), el("h3", { text: n.t }), el("span", { class: "ref", text: n.ref }), el("p", { html: refify(n.d) }));
    }
    const order = [];
    const ks = N.map((n, i) => [n, i]).filter(([n]) => n.s === "king"), ps = N.map((n, i) => [n, i]).filter(([n]) => n.s === "priest");
    ks.forEach((k, j) => { order.push(k[1]); if (ps[j]) order.push(ps[j][1]); });
    N.forEach((n, i) => { if (["join", "christ", "church"].includes(n.s)) order.push(i); });
    let timer = null;
    $("#kpPromisePlay").addEventListener("click", () => { clearInterval(timer); let k = 0; sel(order[k]); timer = setInterval(() => { k++; if (k >= order.length) return clearInterval(timer); sel(order[k]); }, 1500); });
    sel(N.indexOf(christ));
  }

  function initKpCalling() {
    // balance
    const svg = sv("svg", { viewBox: "0 0 420 300", role: "img", "aria-label": "A balance between priestly and kingly calling" });
    svg.append(sv("polygon", { points: "210,214 180,272 240,272", fill: "var(--muted)" }), sv("rect", { x: 140, y: 272, width: 140, height: 10, rx: 4, fill: "var(--muted)" }));
    const beam = sv("g", { style: { transformOrigin: "210px 210px", transformBox: "view-box", transition: reduceMotion ? "none" : "transform .5s cubic-bezier(.3,1.3,.5,1)" } });
    const bar = sv("rect", { x: 40, y: 204, width: 340, height: 12, rx: 6, fill: "var(--accent)" });
    beam.append(bar);
    const pan = (x, c, label, iconFn) => { const g = sv("g", {}, sv("line", { x1: x, y1: 210, x2: x - 34, y2: 150, stroke: "var(--muted)" }), sv("line", { x1: x, y1: 210, x2: x + 34, y2: 150, stroke: "var(--muted)" }), sv("path", { d: `M${x - 44} 150 Q${x} 176 ${x + 44} 150 Z`, fill: c }), ...iconFn(x), sv("text", { x, y: 238, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: c }, label)); beam.append(g); };
    pan(70, "var(--eden)", "PRIEST", x => [sv("path", { d: `M${x - 10} 140 Q${x} 116 ${x + 10} 140 Z`, fill: "var(--eden)" }), sv("path", { d: `M${x} 116 C${x - 6} 104 ${x + 6} 98 ${x} 88`, fill: "none", stroke: "var(--muted)", "stroke-width": 2 })]);
    pan(350, "var(--babel)", "KING", x => [sv("path", { d: `M${x - 16} 142 L${x - 16} 124 L${x - 8} 132 L${x} 118 L${x + 8} 132 L${x + 16} 124 L${x + 16} 142 Z`, fill: "var(--accent)" })]);
    svg.append(beam);
    $("#kpBalance").append(svg);
    const range = $("#kpBalanceRange");
    const upd = () => {
      const v = +range.value, z = DATA.kp.balance.find(b => v < b.max);
      beam.style.transform = `rotate(${(v - 50) * 0.32}deg)`;
      bar.setAttribute("fill", Math.abs(v - 50) <= 10 ? "var(--accent)" : "var(--muted)");
      $("#kpBalanceTitle").textContent = z.t; $("#kpBalanceText").innerHTML = refify(z.d);
    };
    range.addEventListener("input", upd); upd();
    // cycle
    const cs = sv("svg", { viewBox: "0 0 400 400", role: "img", "aria-label": "A four-stage cycle: enter, receive and intercede, go and rule, offer back" });
    const R = 140, Cx = 200, Cy = 200;
    cs.append(sv("defs", {}, sv("marker", { id: "cy-arr", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, sv("path", { d: "M0 0 L10 5 L0 10 Z", fill: "var(--accent)" }))));
    const ang = [-90, 0, 90, 180], pt = a => [Cx + Math.cos(a * Math.PI / 180) * R, Cy + Math.sin(a * Math.PI / 180) * R];
    ang.forEach((a, i) => { const [x1, y1] = pt(a + 16), [x2, y2] = pt(a + 74); cs.append(sv("path", { d: `M${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2}`, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "marker-end": "url(#cy-arr)" })); });
    if (!reduceMotion) { const d = sv("circle", { r: 6, fill: "var(--flame)" }); d.append(sv("animateMotion", { dur: "8s", repeatCount: "indefinite", path: `M${Cx} ${Cy - R} A${R} ${R} 0 1 1 ${Cx - 0.01} ${Cy - R}` })); cs.append(d); }
    cs.append(sv("text", { x: Cx, y: Cy - 6, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "A royal"), sv("text", { x: Cx, y: Cy + 14, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "priesthood"));
    const colors = ["var(--eden)", "var(--eden)", "var(--babel)", "var(--accent)"];
    const cn = DATA.kp.cycle.map((c, i) => {
      const [x, y] = pt(ang[i]);
      const g = sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": c.t }, sv("circle", { cx: x, cy: y, r: 40, fill: colors[i], "fill-opacity": .2, stroke: colors[i], "stroke-width": 2 }), sv("text", { x, y: y - 2, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, String(i + 1)), sv("text", { x, y: y + 13, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, c.t.split(" & ")[0]));
      g.addEventListener("click", () => sel(i)); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(i); } });
      cs.append(g); return g.firstChild;
    });
    $("#kpCycle").append(cs);
    function sel(i) {
      cn.forEach((c, j) => { c.setAttribute("fill-opacity", j === i ? .45 : .2); c.setAttribute("stroke-width", j === i ? 4 : 2); });
      const c = DATA.kp.cycle[i];
      $("#kpCyclePanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of 4 · ${i < 2 ? "priestly" : i === 2 ? "kingly" : "both"}` }), el("h3", { text: c.t }), el("span", { class: "ref", text: c.ref }), el("p", { html: refify(c.d) }));
    }
    sel(0);
    const card = ([t, d]) => el("div", { class: "card call-card" }, el("h3", { text: t }), el("p", { html: refify(d) }));
    $("#kpCallPriest").append(...DATA.kp.calling.priest.map(card));
    $("#kpCallKing").append(...DATA.kp.calling.king.map(card));
  }

  function initKpStudy() {
    $("#kpQuestions").append(...DATA.kp.study.map((s, i) => el("details", { class: "qset", open: i === 0 ? true : null }, el("summary", { text: s.t }), el("ol", {}, s.q.map(q => el("li", { html: refify(q) }))))));
    $("#kpMemory").append(...DATA.kp.memory.map(([r, v]) => {
      const b = el("button", { class: "clue mem", type: "button", "aria-pressed": "false", "aria-label": `Memory verse ${r}. Turn over.` },
        el("div", { class: "clue-inner" }, el("div", { class: "clue-face front" }, el("p", { class: "eyebrow", text: "Memory verse" }), el("h3", { text: r }), el("span", { class: "hint", text: "Tap to reveal" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: r }), el("p", { text: v }))));
      b.addEventListener("click", () => { const on = b.classList.toggle("flipped"); b.setAttribute("aria-pressed", String(on)); });
      return b;
    }));
  }

