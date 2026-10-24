/* Where Heaven Meets Earth — interactive behaviour */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    setAttrs(n, attrs);
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  function sv(tag, attrs, ...kids) {
    const n = document.createElementNS(NS, tag);
    setAttrs(n, attrs);
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  function setAttrs(n, attrs) {
    if (!attrs) return;
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (k === "style" && typeof v === "object") Object.assign(n.style, v);
      else n.setAttribute(k, v === true ? "" : v);
    }
  }
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };
  /* Turn "(Gen 2:10)"-style references inside plain text into styled spans */
  function refify(t) {
    return String(t).replace(/\(([1-3]?\s?[A-Z][a-z]+\.?\s\d+[^()]*)\)/g, '(<span class="ref">$1</span>)');
  }

  /* ---------------- Colour schemes ---------------- */
  const root = document.documentElement;
  function applyScheme(id) {
    if (id === "auto") root.removeAttribute("data-scheme"); else root.setAttribute("data-scheme", id);
    store.set("hme-scheme", id);
    $$(".scheme-opt").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === id)));
    syncAccentInput();
  }
  function applyAccent(c) {
    if (c) {
      root.style.setProperty("--accent", c);
      root.style.setProperty("--glow", `color-mix(in srgb, ${c} 18%, transparent)`);
    } else {
      root.style.removeProperty("--accent");
      root.style.removeProperty("--glow");
    }
    store.set("hme-accent", c || null);
  }
  function syncAccentInput() {
    const v = getComputedStyle(root).getPropertyValue("--accent").trim();
    if (/^#[0-9a-f]{6}$/i.test(v)) $("#accentPick").value = v;
  }
  function initSchemes() {
    const grid = $("#schemeGrid");
    DATA.schemes.forEach(s => {
      grid.append(el("button", { class: "scheme-opt", type: "button", "data-id": s.id, "aria-pressed": "false", onclick: () => applyScheme(s.id) },
        el("span", { class: "sw", "aria-hidden": "true" }, s.sw.map(c => el("i", { style: { background: c } }))),
        el("b", { text: s.name }), el("small", { text: s.note })));
    });
    const btn = $("#schemeBtn"), panel = $("#schemePanel");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      btn.setAttribute("aria-expanded", String(!panel.hidden));
      if (!panel.hidden) syncAccentInput();
    });
    document.addEventListener("click", e => { if (!panel.hidden && !panel.contains(e.target)) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); } });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); btn.focus(); } });
    $("#accentPick").addEventListener("input", e => applyAccent(e.target.value));
    $("#accentReset").addEventListener("click", () => { applyAccent(null); syncAccentInput(); });
    applyScheme(store.get("hme-scheme") || "auto");
    const acc = store.get("hme-accent");
    if (acc) applyAccent(acc);
  }

  /* ---------------- Icons ---------------- */
  const ICONS = {
    mountain: "M3 20 L10 7 L14 13 L16 10 L21 20 Z M10 7 L12 11",
    river: "M12 3 C12 8 12 9 12 11 M12 11 C9 14 6 17 4 21 M12 11 C11 15 10 18 9 21 M12 11 C13 15 14 18 15 21 M12 11 C15 14 18 17 20 21",
    hands: "M4 14 C6 12 8 12 10 13 L14 15 M20 14 C18 12 16 12 14 13 M12 3 L12 9 M9 6 L15 6 M4 14 L4 20 M20 14 L20 20",
    steps: "M5 20 C5 17 8 17 8 20 Z M10 15 C10 12 13 12 13 15 Z M15 10 C15 7 18 7 18 10 Z",
    wings: "M12 12 C8 4 3 5 2 9 C5 9 8 11 12 12 C16 11 19 9 22 9 C21 5 16 4 12 12 Z M12 12 L12 21",
    gem: "M6 4 L18 4 L22 9 L12 21 L2 9 Z M2 9 L22 9 M9 4 L7 9 L12 21 L17 9 L15 4",
    tree: "M12 21 L12 11 M12 14 L8 10 M12 12 L16 8 M12 3 C7 3 5 7 7 10 C4 12 7 16 12 15 C17 16 20 12 17 10 C19 7 17 3 12 3 Z",
    robe: "M9 3 L15 3 L19 7 L17 10 L16 9 L17 21 L7 21 L8 9 L7 10 L5 7 Z M12 3 L12 8",
    speak: "M4 5 H20 V15 H11 L6 19 V15 H4 Z M8 9 H16 M8 12 H13",
    scroll: "M6 4 H17 C19 4 19 7 17 7 H8 V18 C8 20 5 20 5 18 V6 C5 4 6 4 6 4 Z M8 7 V18 C8 20 19 20 19 18 V7",
    scale: "M12 4 V20 M6 20 H18 M5 8 H19 M5 8 L2 14 H8 Z M19 8 L16 14 H22 Z",
    council: "M12 4 A2 2 0 1 1 12 8 A2 2 0 1 1 12 4 M5 9 A2 2 0 1 1 5 13 A2 2 0 1 1 5 9 M19 9 A2 2 0 1 1 19 13 A2 2 0 1 1 19 9 M9 20 C9 14 15 14 15 20 M2 20 C2 16 8 16 8 20 M16 20 C16 16 22 16 22 20",
    temple: "M3 20 H21 M5 20 V10 M19 20 V10 M9 20 V10 M15 20 V10 M3 10 L12 4 L21 10 Z",
    dust: "M4 18 C8 16 16 16 20 18 M6 14 C9 12 13 13 15 11 C17 9 20 10 20 10 M7 21 H17"
  };
  function icon(name, cls) {
    return sv("svg", { viewBox: "0 0 24 24", class: cls || "icon", "aria-hidden": "true", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" },
      sv("path", { d: ICONS[name] || ICONS.tree }));
  }

  /* ---------------- Hero ---------------- */
  function initHero() {
    const g = $("#heroStars");
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 46; i++) {
      const c = sv("circle", { cx: (rnd() * 560).toFixed(1), cy: (rnd() * 300).toFixed(1), r: (0.6 + rnd() * 1.6).toFixed(2), fill: "var(--accent)", opacity: (0.25 + rnd() * 0.6).toFixed(2) });
      if (i % 3 === 0) { c.classList.add("twinkle"); c.style.animationDelay = (rnd() * 3).toFixed(2) + "s"; }
      g.append(c);
    }
  }

  /* ---------------- Clues ---------------- */
  function initClues() {
    const grid = $("#clueGrid");
    const seen = new Set();
    const update = () => {
      $("#clueLabel").textContent = `${seen.size} of ${DATA.clues.length} clues uncovered`;
      $("#clueMeter").style.width = (seen.size / DATA.clues.length * 100) + "%";
    };
    DATA.clues.forEach((c, i) => {
      const card = el("button", { class: "clue reveal", type: "button", "aria-pressed": "false", "aria-label": `Clue ${i + 1}: ${c.title}. Turn over.` },
        el("div", { class: "clue-inner" },
          el("div", { class: "clue-face front" }, icon(c.icon), el("h3", { text: c.title }), el("p", { html: refify(c.front) }), el("span", { class: "hint", text: "Tap to see the sanctuary link" })),
          el("div", { class: "clue-face back" }, el("span", { class: "ref", text: c.ref }), el("h3", { text: "In the sanctuary" }), el("p", { html: refify(c.back) }), el("span", { class: "hint", text: "Tap to turn back" }))));
      card.addEventListener("click", () => {
        const on = card.classList.toggle("flipped");
        card.setAttribute("aria-pressed", String(on));
        seen.add(i); update();
      });
      grid.append(card);
    });
    $("#clueAll").addEventListener("click", () => {
      $$(".clue", grid).forEach((c, i) => { setTimeout(() => { c.classList.add("flipped"); c.setAttribute("aria-pressed", "true"); seen.add(i); update(); }, reduceMotion ? 0 : i * 110); });
    });
    update();
  }

  /* ---------------- Mountain ---------------- */
  function initMountain() {
    const stage = $("#mtnStage");
    const svg = sv("svg", { viewBox: "0 0 600 430", role: "img", "aria-label": "A mountain divided into three zones of holiness" });
    const bands = [
      sv("polygon", { points: "300,40 386.7,160 213.3,160" }),
      sv("polygon", { points: "213.3,160 386.7,160 473.3,280 126.7,280" }),
      sv("polygon", { points: "126.7,280 473.3,280 560,400 40,400" })
    ];
    const labels = [
      sv("text", { x: 300, y: 148, "text-anchor": "middle", "font-size": 13, "font-weight": 700 }),
      sv("text", { x: 300, y: 262, "text-anchor": "middle", "font-size": 15, "font-weight": 700 }),
      sv("text", { x: 300, y: 384, "text-anchor": "middle", "font-size": 16, "font-weight": 700 })
    ];
    const iconG = sv("g", { transform: "translate(300 96)" });
    const river = sv("g", { fill: "none", stroke: "var(--babel)", "stroke-width": 3, "stroke-linecap": "round" },
      sv("path", { class: "flow", d: "M300 120 L300 300" }), sv("path", { class: "flow", d: "M300 300 C270 330 200 370 150 400" }),
      sv("path", { class: "flow", d: "M300 300 C295 340 280 380 270 400" }), sv("path", { class: "flow", d: "M300 300 C305 340 320 380 330 400" }),
      sv("path", { class: "flow", d: "M300 300 C330 330 400 370 450 400" }));
    const rings = sv("g", { fill: "none", stroke: "var(--accent)", opacity: .5 },
      sv("circle", { cx: 300, cy: 96, r: 40, "stroke-dasharray": "2 5" }), sv("circle", { cx: 300, cy: 96, r: 64, opacity: .5 }));
    svg.append(rings);
    bands.forEach((b, i) => { b.classList.add("band"); b.style.transition = "fill .6s, opacity .4s"; b.style.cursor = "pointer"; b.addEventListener("click", () => focusZone(i)); svg.append(b); });
    svg.append(river, iconG, ...labels, sv("line", { x1: 20, y1: 400, x2: 580, y2: 400, stroke: "var(--line)", "stroke-width": 2 }));
    stage.append(svg);

    const ICON_SVG = {
      tree: () => [sv("rect", { x: -3, y: 0, width: 6, height: 26, rx: 2, fill: "var(--ink)", opacity: .7 }), sv("circle", { cx: 0, cy: -6, r: 18, fill: "var(--eden)" }), sv("circle", { cx: -13, cy: 4, r: 10, fill: "var(--eden)" }), sv("circle", { cx: 13, cy: 4, r: 10, fill: "var(--eden)" }), sv("circle", { cx: -5, cy: -8, r: 3, fill: "var(--accent-ink)" }), sv("circle", { cx: 7, cy: 0, r: 3, fill: "var(--accent-ink)" })],
      fire: () => [sv("ellipse", { cx: 0, cy: -10, rx: 46, ry: 18, fill: "var(--muted)", opacity: .5, class: "pulse" }), sv("path", { d: "M0 24 C-16 10 -8 -4 0 -18 C4 -6 16 2 0 24 Z", fill: "var(--flame)" }), sv("path", { d: "M0 22 C-7 14 -3 6 0 -2 C3 8 8 12 0 22 Z", fill: "var(--accent)" })],
      ark: () => [sv("rect", { x: -22, y: 2, width: 44, height: 20, fill: "var(--accent-ink)", stroke: "var(--accent-ink)" }), sv("path", { d: "M-22 2 Q-12 -22 0 -8 Q12 -22 22 2", fill: "none", stroke: "var(--accent-ink)", "stroke-width": 3 })],
      temple: () => [sv("path", { d: "M-26 22 L-26 -6 L0 -20 L26 -6 L26 22 Z", fill: "var(--accent-ink)" }), sv("rect", { x: -6, y: 6, width: 12, height: 16, fill: "var(--accent)" })],
      city: () => [sv("rect", { x: -26, y: -16, width: 52, height: 38, fill: "none", stroke: "var(--accent-ink)", "stroke-width": 3 }), ...[-16, 0, 16].map(x => sv("rect", { x: x - 4, y: 8, width: 8, height: 14, fill: "var(--accent-ink)" })), sv("circle", { cx: 0, cy: -2, r: 5, fill: "var(--accent-ink)" })]
    };

    const modes = Object.keys(DATA.mountain);
    const chips = $("#mtnModes");
    let current = "eden";
    modes.forEach(m => chips.append(el("button", { class: "chip", type: "button", "data-m": m, "aria-pressed": String(m === current), onclick: () => setMode(m), text: DATA.mountain[m].label })));

    function zoneColors(m) {
      return m.allGold ? ["var(--accent)", "var(--accent)", "var(--accent)"] : ["var(--accent)", "var(--eden)", "var(--muted)"];
    }
    function focusZone(i) {
      $$(".zone", $("#mtnZones")).forEach((z, j) => z.classList.toggle("on", j === i));
      bands.forEach((b, j) => b.style.opacity = (i == null || j === i) ? "" : ".35");
    }
    function setMode(id) {
      current = id;
      const m = DATA.mountain[id];
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === id)));
      $("#mtnTitle").textContent = m.title;
      $("#mtnIntro").innerHTML = refify(m.intro);
      const cols = zoneColors(m);
      const ops = m.allGold ? [1, .8, .6] : [1, 1, .35];
      bands.forEach((b, i) => { b.setAttribute("fill", cols[i]); b.setAttribute("fill-opacity", ops[i]); });
      const fills = m.allGold ? ["var(--accent-ink)", "var(--accent-ink)", "var(--accent-ink)"] : ["var(--accent-ink)", "var(--surface)", "var(--ink)"];
      labels.forEach((l, i) => { l.textContent = m.short[i]; l.setAttribute("fill", fills[i]); });
      iconG.replaceChildren(...ICON_SVG[m.icon]());
      river.style.display = (id === "eden" || id === "jerusalem") ? "" : "none";
      const zones = $("#mtnZones");
      zones.replaceChildren(...m.zones.map((z, i) => {
        const d = el("div", { class: "zone", tabindex: "0", role: "button" }, el("i", { style: { background: cols[i], opacity: ops[i] } }), el("div", {}, el("b", { text: z[0] }), el("span", { html: refify(z[1]) })));
        d.addEventListener("mouseenter", () => focusZone(i));
        d.addEventListener("mouseleave", () => focusZone(null));
        d.addEventListener("focus", () => focusZone(i));
        d.addEventListener("blur", () => focusZone(null));
        d.addEventListener("click", () => focusZone(i));
        return d;
      }));
      focusZone(null);
    }
    setMode(current);
  }

  /* ---------------- Tabernacle ---------------- */
  function initTabernacle() {
    const stage = $("#tabStage");
    const svg = sv("svg", { viewBox: "0 0 600 320", role: "img", "aria-label": "Plan of the Tabernacle court, with the gate on the east" });
    // court posts
    const court = sv("g");
    court.append(sv("rect", { x: 20, y: 10, width: 560, height: 280, fill: "var(--bg)", stroke: "var(--line)", "stroke-width": 2 }));
    for (let x = 20; x <= 580; x += 28) { court.append(sv("circle", { cx: x, cy: 10, r: 2.5, fill: "var(--muted)" }), sv("circle", { cx: x, cy: 290, r: 2.5, fill: "var(--muted)" })); }
    for (let y = 38; y < 290; y += 28) { court.append(sv("circle", { cx: 20, cy: y, r: 2.5, fill: "var(--muted)" })); if (y < 94 || y > 206) court.append(sv("circle", { cx: 580, cy: y, r: 2.5, fill: "var(--muted)" })); }
    svg.append(court);
    // gate (blue, purple, scarlet)
    svg.append(sv("rect", { x: 576, y: 94, width: 3, height: 112, fill: "var(--babel)" }), sv("rect", { x: 579, y: 94, width: 3, height: 112, fill: "#6b3a8f" }), sv("rect", { x: 582, y: 94, width: 3, height: 112, fill: "var(--flame)" }));
    // tent
    svg.append(sv("rect", { x: 76, y: 122, width: 168, height: 56, fill: "var(--accent)", "fill-opacity": .12, stroke: "var(--accent)", "stroke-width": 1.5 }));
    svg.append(sv("rect", { x: 76, y: 122, width: 56, height: 56, fill: "var(--accent)", "fill-opacity": .22 }));
    svg.append(sv("text", { x: 104, y: 116, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "MOST HOLY"));
    svg.append(sv("text", { x: 188, y: 116, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, "HOLY PLACE"));
    svg.append(sv("text", { x: 400, y: 30, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 2 }, "COURTYARD · 100 × 50 CUBITS"));
    // compass
    svg.append(sv("g", { transform: "translate(40 300)", fill: "var(--muted)", "font-size": 10, "font-weight": 700 },
      sv("text", { x: 0, y: 14 }, "← WEST, toward the presence"), sv("text", { x: 520, y: 14, "text-anchor": "end" }, "EAST · entrance →")));

    const draw = {
      gate: () => [sv("rect", { class: "hl", x: 568, y: 140, width: 24, height: 20, rx: 4, fill: "transparent", stroke: "transparent" })],
      altar: () => [sv("rect", { class: "hl", x: 356, y: 136, width: 28, height: 28, fill: "#a8743a", stroke: "transparent" }), sv("path", { d: "M362 150 L378 150 M370 142 L370 158", stroke: "var(--surface)", "stroke-width": 2 })],
      laver: () => [sv("circle", { class: "hl", cx: 290, cy: 150, r: 11, fill: "var(--babel)", "fill-opacity": .35, stroke: "#a8743a", "stroke-width": 2.5 })],
      table: () => [sv("rect", { class: "hl", x: 190, y: 123, width: 20, height: 11, fill: "var(--accent)", stroke: "transparent" })],
      lamp: () => [sv("path", { class: "hl", d: "M192 166 Q200 182 208 166 M196 166 Q200 176 204 166 M200 164 L200 180", fill: "none", stroke: "var(--accent)", "stroke-width": 2 })],
      incense: () => [sv("rect", { class: "hl", x: 144, y: 144, width: 12, height: 12, fill: "var(--accent)", stroke: "transparent" })],
      veil: () => [sv("rect", { class: "hl", x: 129, y: 122, width: 6, height: 56, fill: "var(--flame)", stroke: "transparent" }), sv("rect", { x: 130.5, y: 122, width: 1.5, height: 56, fill: "var(--babel)" })],
      ark: () => [sv("rect", { class: "hl", x: 94, y: 143, width: 20, height: 14, fill: "var(--accent)", stroke: "transparent" }), sv("path", { d: "M94 143 Q99 132 104 140 Q109 132 114 143", fill: "none", stroke: "var(--accent)", "stroke-width": 1.5 })]
    };
    const labelPos = { gate: [556, 176, "end"], altar: [370, 182], laver: [290, 178], table: [214, 132, "start"], lamp: [214, 178, "start"], incense: [150, 196], veil: [132, 212], ark: [102, 196] };
    const short = { gate: "Gate", altar: "Altar", laver: "Laver", table: "Bread", lamp: "Lampstand", incense: "Incense", veil: "Veil", ark: "Ark" };
    const nodes = {};
    DATA.tabernacle.forEach(item => {
      const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": item.name });
      g.append(sv("circle", { cx: item.x, cy: item.y, r: 18, fill: "transparent" }), ...draw[item.id]());
      const lp = labelPos[item.id];
      g.append(sv("text", { x: lp[0], y: lp[1], "text-anchor": lp[2] || "middle", "font-size": 10, "font-weight": 700, fill: "var(--ink)" }, short[item.id]));
      g.addEventListener("click", () => select(item.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(item.id); } });
      svg.append(g); nodes[item.id] = g;
    });
    const walker = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.1s cubic-bezier(.4,.1,.2,1)" } },
      sv("circle", { r: 13, fill: "var(--accent)", opacity: .25, class: "pulse" }), sv("circle", { r: 6, fill: "var(--ink)", stroke: "var(--surface)", "stroke-width": 2 }));
    svg.append(walker);
    stage.append(svg);

    const order = ["gate", "altar", "laver", "table", "lamp", "incense", "veil", "ark"];
    let idx = 0, walking = null;
    function moveWalker(id) {
      const it = DATA.tabernacle.find(t => t.id === id);
      const x = id === "gate" ? 596 : it.x, y = id === "table" ? 140 : id === "lamp" ? 160 : it.y;
      walker.style.transform = `translate(${x}px, ${y}px)`;
    }
    function select(id) {
      idx = order.indexOf(id);
      const it = DATA.tabernacle.find(t => t.id === id);
      Object.entries(nodes).forEach(([k, n]) => n.classList.toggle("on", k === id));
      moveWalker(id);
      $("#tabPanel").replaceChildren(
        el("p", { class: "eyebrow", text: `Station ${idx + 1} of ${order.length}` }),
        el("h3", { text: it.name }), el("span", { class: "ref", text: it.ref }),
        el("div", { class: "row" }, el("b", { text: "What it was" }), el("p", { html: refify(it.what) })),
        el("div", { class: "row eden" }, el("b", { text: "Echo of Eden" }), el("p", { html: refify(it.eden) })),
        el("div", { class: "row christ" }, el("b", { text: "Fulfilled in Christ" }), el("p", { html: refify(it.christ) })));
    }
    $("#tabWalk").addEventListener("click", () => {
      clearInterval(walking);
      if (idx >= order.length - 1) idx = -1;
      select(order[++idx]);
      walking = setInterval(() => { if (idx >= order.length - 1) { clearInterval(walking); return; } select(order[++idx]); }, reduceMotion ? 2400 : 2600);
    });
    $("#tabReset").addEventListener("click", () => { clearInterval(walking); select("gate"); });
    stage.addEventListener("click", e => { if (e.isTrusted) clearInterval(walking); }, true);
    select("gate");
  }

  /* ---------------- Ark ---------------- */
  function initArk() {
    const stage = $("#arkStage");
    const svg = sv("svg", { viewBox: "0 0 400 300", role: "img", "aria-label": "The Ark of the Covenant with its cherubim" });
    const gold = "var(--accent)";
    const parts = {
      glory: [sv("ellipse", { cx: 200, cy: 52, rx: 70, ry: 26, fill: gold, opacity: .18, class: "pulse" }), sv("ellipse", { class: "hl", cx: 200, cy: 52, rx: 46, ry: 16, fill: gold, "fill-opacity": .3, stroke: "transparent" }), sv("text", { x: 200, y: 56, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "glory")],
      cherubim: [
        sv("path", { class: "hl", d: "M112 136 Q130 62 196 92 L196 98 Q136 80 124 136 Z", fill: gold, "fill-opacity": .85, stroke: "transparent" }),
        sv("path", { class: "hl", d: "M288 136 Q270 62 204 92 L204 98 Q264 80 276 136 Z", fill: gold, "fill-opacity": .85, stroke: "transparent" }),
        sv("rect", { x: 100, y: 108, width: 24, height: 30, rx: 8, fill: gold }), sv("circle", { cx: 116, cy: 102, r: 9, fill: gold }),
        sv("rect", { x: 276, y: 108, width: 24, height: 30, rx: 8, fill: gold }), sv("circle", { cx: 284, cy: 102, r: 9, fill: gold })
      ],
      seat: [sv("rect", { class: "hl", x: 82, y: 136, width: 236, height: 13, rx: 2, fill: gold, stroke: "transparent" })],
      box: [sv("rect", { class: "hl", x: 90, y: 149, width: 220, height: 92, fill: gold, "fill-opacity": .8, stroke: "transparent" }), sv("rect", { x: 98, y: 157, width: 204, height: 76, fill: "none", stroke: "var(--accent-ink)", "stroke-opacity": .35 }), sv("rect", { x: 90, y: 149, width: 220, height: 6, fill: "var(--accent-ink)", opacity: .15 })],
      poles: [sv("rect", { class: "hl", x: 14, y: 200, width: 372, height: 9, rx: 4.5, fill: "#8c6a2c", stroke: "transparent" }), sv("circle", { cx: 106, cy: 204.5, r: 8, fill: "none", stroke: gold, "stroke-width": 3 }), sv("circle", { cx: 294, cy: 204.5, r: 8, fill: "none", stroke: gold, "stroke-width": 3 })],
      contents: [sv("rect", { class: "hl", x: 150, y: 164, width: 100, height: 64, rx: 6, fill: "var(--surface)", "fill-opacity": .2, stroke: "var(--accent-ink)", "stroke-dasharray": "4 4", "stroke-opacity": .6 }),
        sv("g", { class: "inside", opacity: 0, style: { transition: "opacity .5s" } },
          sv("rect", { x: 160, y: 172, width: 16, height: 26, rx: 6, fill: "var(--muted)" }), sv("rect", { x: 178, y: 172, width: 16, height: 26, rx: 6, fill: "var(--muted)" }),
          sv("path", { d: "M206 198 L206 182 Q206 174 214 174 Q222 174 222 182 L222 198 Z", fill: "var(--accent-ink)", opacity: .8 }),
          sv("path", { d: "M236 224 L236 170", stroke: "#6b4a1e", "stroke-width": 3 }), sv("circle", { cx: 236, cy: 170, r: 4, fill: "var(--eden)" }), sv("circle", { cx: 240, cy: 180, r: 3, fill: "var(--eden)" }), sv("circle", { cx: 232, cy: 186, r: 3, fill: "var(--eden)" })),
        sv("text", { class: "inside-lbl", x: 200, y: 222, "text-anchor": "middle", "font-size": 10, "font-weight": 700, fill: "var(--accent-ink)" }, "look inside")]
    };
    const order = ["poles", "box", "contents", "seat", "cherubim", "glory"];
    const nodes = {};
    order.forEach(id => {
      const p = DATA.arkParts.find(a => a.id === id);
      const g = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": p.name }, ...parts[id]);
      g.addEventListener("click", e => { e.stopPropagation(); select(id); });
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); } });
      svg.append(g); nodes[id] = g;
    });
    svg.append(sv("line", { x1: 10, y1: 270, x2: 390, y2: 270, stroke: "var(--line)", "stroke-width": 2 }),
      sv("text", { x: 200, y: 290, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)", "font-weight": 600 }, "2.5 × 1.5 × 1.5 cubits · select a part"));
    stage.append(svg);
    function select(id) {
      const p = DATA.arkParts.find(a => a.id === id);
      Object.entries(nodes).forEach(([k, n]) => n.classList.toggle("on", k === id));
      const inside = $(".inside", svg), lbl = $(".inside-lbl", svg);
      inside.setAttribute("opacity", id === "contents" ? 1 : 0);
      lbl.style.display = id === "contents" ? "none" : "";
      $("#arkPanel").replaceChildren(el("p", { class: "eyebrow", text: "Part of the Ark" }), el("h3", { text: p.name }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.text) }),
        el("div", { class: "chips" }, order.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o === id), onclick: () => select(o), text: cap(DATA.arkParts.find(a => a.id === o).name.split(" (")[0].replace("The ", "")) }))));
    }
    select("glory");
  }

  /* ---------------- Maps ---------------- */
  const proj = (lon, lat) => [(lon - 28) * 40, (40 - lat) * 45];
  const pts = arr => arr.map(([lo, la]) => proj(lo, la).map(v => v.toFixed(1)).join(",")).join(" ");
  function linePath(arr) {
    return arr.map(([lo, la], i) => { const [x, y] = proj(lo, la); return (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); }).join(" ");
  }
  function baseMap(k, vb, aria) {
    const M = DATA.map;
    const svg = sv("svg", { viewBox: vb, role: "img", "aria-label": aria, style: { background: "var(--bg)" } });
    svg.append(sv("rect", { x: -50, y: -50, width: 1060, height: 820, fill: "var(--bg)" }));
    const sea = { fill: "var(--babel)", "fill-opacity": .22, stroke: "var(--babel)", "stroke-opacity": .5, "stroke-width": 1.2 * k };
    svg.append(sv("polygon", { points: pts(M.med) + " 0,-50 -50,-50 -50,770 0,770", ...sea }));
    svg.append(sv("polygon", { points: pts(M.cyprus), fill: "var(--bg)", stroke: "var(--babel)", "stroke-opacity": .5, "stroke-width": k }));
    svg.append(sv("polygon", { points: pts(M.gulf), ...sea }));
    svg.append(sv("polygon", { points: pts(M.red), ...sea }));
    svg.append(sv("polygon", { points: pts(M.dead), ...sea }), sv("polygon", { points: pts(M.galilee), ...sea }));
    const riv = { fill: "none", stroke: "var(--babel)", "stroke-width": 2.2 * k, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: .8 };
    const rivers = sv("g", { class: "rivers" });
    ["euphrates", "tigris", "shatt", "nile", "nile2", "jordan"].forEach(r => rivers.append(sv("path", { d: linePath(M[r]), ...riv, "data-r": r })));
    svg.append(rivers);
    M.labels.forEach(l => {
      const [x, y] = proj(l.lon, l.lat);
      svg.append(sv("text", { x, y, "text-anchor": "middle", "font-size": (l.cls === "sea" ? 13 : 12) * k, "letter-spacing": 3 * k, "font-weight": 700, fill: l.cls === "sea" ? "var(--babel)" : "var(--muted)", opacity: l.cls === "sea" ? .8 : .65 }, l.t));
    });
    return svg;
  }
  function place(svg, p, k, opt = {}) {
    const [x, y] = proj(p.lon, p.lat);
    const g = sv("g", { class: opt.cls || "" });
    g.append(sv("circle", { cx: x, cy: y, r: (opt.r || 4.5) * k, fill: opt.fill || "var(--ink)", stroke: "var(--bg)", "stroke-width": 1.5 * k }));
    if (opt.label !== false) {
      const t = sv("text", { x: x + (opt.dx ?? 8) * k, y: y + (opt.dy ?? 4) * k, "font-size": (opt.fs || 13) * k, "font-weight": 700, fill: opt.color || "var(--ink)", "text-anchor": opt.anchor || "start", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": 3 * k, "stroke-linejoin": "round" }, opt.text || p.n);
      g.append(t);
    }
    svg.append(g);
    return g;
  }

  function initMap() {
    const M = DATA.map, P = M.places;
    const svg = baseMap(1, "0 0 960 720", "Map of the ancient Near East");
    const always = ["babylon", "jerusalem", "ur", "nineveh", "haran", "memphis"];
    const layers = {};
    const mk = id => { const g = sv("g", { class: "layer", style: { transition: "opacity .6s" } }); layers[id] = g; return g; };

    // Eden layer
    const eden = mk("eden");
    ["euphrates", "tigris"].forEach(r => eden.append(sv("path", { d: linePath(M[r]), fill: "none", stroke: "var(--eden)", "stroke-width": 6, "stroke-linecap": "round", opacity: .55 }),
      sv("path", { d: linePath(M[r]), fill: "none", stroke: "var(--surface)", "stroke-width": 2, class: "flow" })));
    const [ex, ey] = proj(39.4, 38.9);
    eden.append(sv("text", { x: ex - 150, y: ey - 18, "font-size": 15, "font-weight": 800, fill: "var(--eden)" }, "Tigris & Euphrates (Gen 2:14)"));
    eden.append(place(svg, P.ararat, 1, { fill: "var(--eden)", text: "Mt Ararat", color: "var(--eden)" }));
    eden.append(place(svg, P.jerusalem, 1, { r: 7, fill: "var(--eden)", text: "Gihon spring (1 Kgs 1:33)", dx: -10, dy: 22, anchor: "end", color: "var(--eden)" }));

    // Babel layer
    const babel = mk("babel");
    const [bx, by] = proj(45.0, 32.0);
    babel.append(sv("ellipse", { cx: bx, cy: by, rx: 120, ry: 70, fill: "var(--babel)", opacity: .14, transform: `rotate(-35 ${bx} ${by})` }));
    ["eridu", "uruk", "akkad", "calah"].forEach(id => { const left = id === "eridu" || id === "akkad"; babel.append(place(svg, P[id], 1, { fill: "var(--babel)", color: "var(--babel)", dx: left ? -8 : 8, anchor: left ? "end" : "start", dy: id === "eridu" ? 14 : id === "akkad" ? -4 : 4 })); });
    const [zx, zy] = proj(P.babylon.lon, P.babylon.lat);
    const zig = sv("g", { transform: `translate(${zx - 14} ${zy - 34})`, fill: "var(--babel)" },
      sv("rect", { x: 0, y: 20, width: 28, height: 6 }), sv("rect", { x: 4, y: 14, width: 20, height: 6 }), sv("rect", { x: 8, y: 8, width: 12, height: 6 }), sv("rect", { x: 11, y: 2, width: 6, height: 6, fill: "var(--accent)" }));
    babel.append(zig);

    // Abraham layer
    const abr = mk("abraham");
    const abrPts = M.abrahamRoute.map(id => [P[id].lon, P[id].lat]);
    const abrPath = sv("path", { d: linePath(abrPts), fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round", class: "draw" });
    abr.append(abrPath);
    ["shechem", "bethel", "negev"].forEach(id => abr.append(place(svg, P[id], 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12, dx: id === "bethel" ? -8 : 8, anchor: id === "bethel" ? "end" : "start", dy: id === "negev" ? 12 : 4 })));
    abr.append(place(svg, P.damascus, 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12 }));
    abr.append(place(svg, P.mari, 1, { fill: "var(--accent)", color: "var(--accent)", fs: 12 }));

    // Exile layer
    const exile = mk("exile");
    const exPts = M.exileRoute.map(id => [P[id].lon, P[id].lat]);
    const exPath = sv("path", { d: linePath(exPts), fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-dasharray": "2 9", "stroke-linecap": "round", class: "flow" });
    exile.append(exPath);
    exile.append(place(svg, P.riblah, 1, { fill: "var(--flame)", color: "var(--flame)", fs: 12 }), place(svg, P.carchemish, 1, { fill: "var(--flame)", color: "var(--flame)", fs: 12, dy: -8 }));
    const [jx, jy] = proj(P.jerusalem.lon, P.jerusalem.lat);
    exile.append(sv("text", { x: jx + 60, y: jy + 64, "font-size": 14, "font-weight": 800, fill: "var(--flame)" }, "605–586 BC → Babylon"));

    // Pentecost layer
    const pent = mk("pentecost");
    M.pentecost.forEach(n => {
      const [x, y] = proj(n.lon, n.lat);
      pent.append(sv("line", { x1: jx, y1: jy, x2: x, y2: y, stroke: "var(--accent)", "stroke-width": 1.5, "stroke-dasharray": "3 5", class: "flow" }));
      const right = n.n.endsWith("→");
      pent.append(sv("circle", { cx: x, cy: y, r: 5, fill: "var(--accent)" }),
        sv("text", { x: x + (right ? 8 : 0), y: y - 9, "text-anchor": right ? "start" : "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": 3 }, right ? "← " + n.n.replace(" →", "") : n.n));
    });
    pent.append(sv("circle", { cx: jx, cy: jy, r: 14, fill: "var(--accent)", opacity: .35, class: "pulse" }));

    Object.values(layers).forEach(g => { g.style.opacity = 0; g.style.pointerEvents = "none"; svg.append(g); });
    always.forEach(id => place(svg, P[id], 1, { r: 5, dx: id === "jerusalem" ? -8 : 8, anchor: id === "jerusalem" ? "end" : "start", dy: id === "ur" ? 14 : 4 }));
    $("#mapStage").append(svg);

    const on = new Set();
    const chips = $("#mapLayers");
    function render(lastId) {
      M.layers.forEach(L => {
        const g = layers[L.id];
        const show = on.has(L.id);
        g.style.opacity = show ? 1 : 0;
      });
      if (on.has("abraham") && lastId === "abraham") {
        const len = abrPath.getTotalLength();
        abrPath.style.setProperty("--len", len);
        abrPath.classList.remove("go");
        void abrPath.getBoundingClientRect();
        requestAnimationFrame(() => abrPath.classList.add("go"));
      }
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(on.has(c.dataset.id))));
      const L = M.layers.find(l => l.id === lastId) || M.layers.find(l => on.has(l.id));
      $("#mapInfo").innerHTML = L ? refify(L.info) : "<p class='muted'>Turn on a layer to explore the map.</p>";
    }
    M.layers.forEach(L => chips.append(el("button", { class: "chip", type: "button", "data-id": L.id, "aria-pressed": "false", text: L.name,
      onclick: () => { on.has(L.id) ? on.delete(L.id) : on.add(L.id); render(on.has(L.id) ? L.id : null); } })));
    on.add("babel"); on.add("abraham");
    render("babel");
    // ensure the route is visible even before any animation
    const len = abrPath.getTotalLength();
    abrPath.style.setProperty("--len", len); abrPath.classList.add("go");
  }

  function initArkMap() {
    const k = 0.2;
    const svg = baseMap(k, "184 308 162 236", "Map of the Ark's journey from Sinai to Jerusalem");
    const J = DATA.arkJourney;
    const route = sv("path", { fill: "none", stroke: "var(--accent)", "stroke-width": 2.4 * k * 3, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: .9 });
    svg.append(route);
    const dots = J.map((s, i) => {
      if (s.lost) return null;
      const [x, y] = proj(s.lon, s.lat);
      const g = sv("g", { style: { cursor: "pointer" } }, sv("circle", { cx: x, cy: y, r: 1.6, fill: "var(--muted)" }));
      g.addEventListener("click", () => go(i));
      svg.append(g);
      return g;
    });
    // small labels for key places
    [["Mt Sinai", 33.97, 28.54, 1.5, 0], ["Kadesh", 34.4, 30.65, 1.5, 0], ["Jericho", 35.44, 31.87, 1.5, 0], ["Shiloh", 35.29, 32.05, 1.5, -.6], ["Jerusalem", 35.23, 31.78, 1.5, 1.6], ["Ashdod", 34.65, 31.8, -1.5, 0]].forEach(([n, lo, la, dx, dy]) => {
      const [x, y] = proj(lo, la);
      svg.append(sv("text", { x: x + dx * 1.4, y: y + dy * 1.4 + 1, "font-size": 4, "font-weight": 700, fill: "var(--ink)", "text-anchor": dx < 0 ? "end" : "start", "paint-order": "stroke", stroke: "var(--bg)", "stroke-width": .8 }, n));
    });
    const marker = sv("g", { style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1), opacity .6s" } },
      sv("circle", { r: 4.5, fill: "var(--accent)", opacity: .3, class: "pulse" }),
      sv("rect", { x: -2.4, y: -1.5, width: 4.8, height: 3, fill: "var(--accent)", stroke: "var(--ink)", "stroke-width": .3 }),
      sv("path", { d: "M-2.4 -1.5 Q-1.2 -3.6 0 -2.2 Q1.2 -3.6 2.4 -1.5", fill: "none", stroke: "var(--accent)", "stroke-width": .5 }));
    svg.append(marker);
    $("#arkMapStage").append(svg);

    let i = 0, timer = null;
    function go(n) {
      i = Math.max(0, Math.min(J.length - 1, n));
      const s = J[i];
      const pathPts = J.slice(0, i + 1).filter(p => !p.lost).map(p => [p.lon, p.lat]);
      route.setAttribute("d", linePath(pathPts));
      const [x, y] = proj(s.lon, s.lat);
      marker.style.transform = `translate(${x}px, ${y}px)`;
      marker.style.opacity = s.lost ? .25 : 1;
      dots.forEach((d, j) => d && d.firstChild.setAttribute("fill", j <= i ? "var(--accent)" : "var(--muted)"));
      $("#arkJourneyPanel").replaceChildren(el("p", { class: "eyebrow", text: `Stop ${i + 1} of ${J.length}${s.when ? " · " + s.when : ""}` }), el("h3", { text: s.name }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.text) }));
      $("#arkStepLabel").textContent = `${i + 1} / ${J.length}`;
    }
    $("#arkPrev").addEventListener("click", () => { clearInterval(timer); go(i - 1); });
    $("#arkNext").addEventListener("click", () => { clearInterval(timer); go(i + 1); });
    $("#arkPlay").addEventListener("click", () => {
      clearInterval(timer); go(0);
      timer = setInterval(() => { if (i >= J.length - 1) return clearInterval(timer); go(i + 1); }, 2400);
    });
    go(0);
  }

  /* ---------------- Tabs helper ---------------- */
  function makeTabs(listEl, panelsEl, items, render, idp) {
    const tabs = [], panels = [];
    items.forEach((it, i) => {
      const id = `${idp}-${i}`;
      const t = el("button", { class: "tab", role: "tab", type: "button", id: id + "-t", "aria-controls": id + "-p", "aria-selected": String(i === 0), tabindex: i === 0 ? "0" : "-1", text: it.tab });
      const p = el("div", { class: "tabpanel", role: "tabpanel", id: id + "-p", "aria-labelledby": id + "-t" });
      p.hidden = i !== 0;
      render(p, it);
      t.addEventListener("click", () => sel(i));
      t.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); const n = (i + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length; sel(n); tabs[n].focus(); }
      });
      tabs.push(t); panels.push(p); listEl.append(t); panelsEl.append(p);
    });
    function sel(n) { tabs.forEach((t, j) => { t.setAttribute("aria-selected", String(j === n)); t.tabIndex = j === n ? 0 : -1; panels[j].hidden = j !== n; }); }
  }

  function initTabsContent() {
    if ($("#adamTabs")) makeTabs($("#adamTabs"), $("#adamPanels"), DATA.adam, (p, it) => {
      p.append(el("h3", { text: it.head }));
      const g = el("div", { class: "grid-3" });
      it.rows.forEach(r => g.append(el("div", { class: "card" }, el("p", { class: "eyebrow", text: r[0] }), el("p", { html: refify(r[1]), style: { color: "var(--ink)" } }))));
      p.append(g);
    }, "adam");
    if ($("#mythTabs")) makeTabs($("#mythTabs"), $("#mythPanels"), DATA.myth, (p, it) => {
      const good = it.tab.startsWith("What");
      p.append(el("ul", { style: { margin: 0, paddingLeft: "1.2em", display: "grid", gap: "8px" } }, it.rows.map(r => el("li", { html: refify(r), style: { color: good ? "var(--ink)" : "var(--muted)" } }))));
    }, "myth");
    if ($("#sinTabs")) makeTabs($("#sinTabs"), $("#sinPanels"), DATA.sin, (p, it) => {
      p.append(el("div", { class: "split even" },
        el("div", { class: "stack" }, el("h3", { text: it.head }), el("span", { class: "ref", text: it.ref })),
        el("div", { class: "prose" }, it.body.map(b => el("p", { html: refify(b) })))));
    }, "sin");
  }

  /* ---------------- Menorah ---------------- */
  function initMenorah() {
    const svg = sv("svg", { viewBox: "0 0 400 360", role: "img", "aria-label": "The golden lampstand with seven almond-blossom lamps" });
    const g = sv("g", { fill: "none", stroke: "var(--accent)", "stroke-width": 7, "stroke-linecap": "round" });
    const cx = 200, base = 280, top = 90;
    g.append(sv("path", { d: `M${cx} ${base} L${cx} ${top}` }));
    [50, 95, 140].forEach(r => g.append(sv("path", { d: `M${cx - r} ${top} L${cx - r} ${top + 20} A${r} ${r} 0 0 0 ${cx + r} ${top + 20} L${cx + r} ${top}` })));
    svg.append(g);
    svg.append(sv("path", { d: `M${cx - 60} ${base + 30} L${cx + 60} ${base + 30} L${cx + 30} ${base} L${cx - 30} ${base} Z`, fill: "var(--accent)" }));
    const xs = [cx - 140, cx - 95, cx - 50, cx, cx + 50, cx + 95, cx + 140];
    xs.forEach((x, i) => {
      svg.append(sv("path", { d: `M${x - 12} ${top - 4} Q${x} ${top + 14} ${x + 12} ${top - 4} Z`, fill: "var(--accent)" }));
      const f = sv("path", { d: `M${x} ${top - 34} C${x - 9} ${top - 18} ${x - 6} ${top - 8} ${x} ${top - 6} C${x + 6} ${top - 8} ${x + 9} ${top - 18} ${x} ${top - 34} Z`, fill: "var(--flame)" });
      if (!reduceMotion) { f.classList.add("pulse"); f.style.animationDelay = (i * .27) + "s"; f.style.animationDuration = "1.8s"; }
      svg.append(sv("circle", { cx: x, cy: top - 18, r: 16, fill: "var(--accent)", opacity: .15 }), f);
      // almond buds along branches
      if (i !== 3) svg.append(sv("circle", { cx: x, cy: top + 30, r: 5, fill: "var(--eden)" }));
    });
    svg.append(sv("text", { x: cx, y: 350, "text-anchor": "middle", "font-size": 12, fill: "var(--muted)", "font-weight": 600 }, "Seven lamps, almond-blossom cups, buds and flowers · Exod 25:31–40"));
    $("#menorahStage").append(svg);
    $("#menorahPhoto").append(photo("menorah"));
  }

  /* ---------------- Story timeline ---------------- */
  function initStory() {
    const wrap = $("#storyTl");
    const track = el("div", { class: "htl-track" });
    const fill = el("div", { class: "htl-fill" });
    track.append(fill);
    const steps = DATA.story.map((s, i) => {
      const b = el("button", { class: "htl-step", type: "button", onclick: () => go(i) }, el("div", { class: "dot" }), el("small", { text: s.era }), el("b", { text: s.title }), el("span", { text: s.short }));
      track.append(b); return b;
    });
    wrap.append(track);
    let cur = 0;
    function go(i) {
      cur = Math.max(0, Math.min(DATA.story.length - 1, i));
      steps.forEach((b, j) => { b.classList.toggle("on", j === cur); b.classList.toggle("past", j < cur); });
      fill.style.width = (steps[cur].offsetLeft + 11) + "px";
      const s = DATA.story[cur];
      $("#storyDetail").replaceChildren(el("p", { class: "eyebrow", text: `${s.era} · ${cur + 1} of ${DATA.story.length}` }), el("h3", { text: s.title }), el("span", { class: "ref", text: s.ref }), el("p", { html: refify(s.text) }),
        el("div", { class: "row" }, el("b", { text: "Barrier between God and people" }), el("p", { text: s.barrier })));
      const st = steps[cur];
      if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: st.offsetLeft - 20, behavior: reduceMotion ? "auto" : "smooth" });
    }
    $("#storyPrev").addEventListener("click", () => go(cur - 1));
    $("#storyNext").addEventListener("click", () => go(cur + 1));
    go(0);
  }

  /* ---------------- Mirror ---------------- */
  function initMirror() {
    const L = $("#mirrorL"), R = $("#mirrorR"), svg = $("#mirrorSvg"), mid = $(".mirror-mid");
    const left = [], right = [];
    DATA.mirror.forEach((m, i) => {
      const a = el("div", { class: "mitem", tabindex: "0", html: `${m[0]}<br><span class="ref">${m[1]}</span>` });
      const b = el("div", { class: "mitem", tabindex: "0", html: `${m[2]}<br><span class="ref">${m[3]}</span>` });
      [a, b].forEach(n => { n.addEventListener("mouseenter", () => hl(i)); n.addEventListener("focus", () => hl(i)); n.addEventListener("click", () => hl(i)); });
      left.push(a); right.push(b); L.append(a); R.append(b);
    });
    let active = 0;
    function drawLines() {
      svg.replaceChildren();
      const mr = mid.getBoundingClientRect();
      const w = mr.width;
      DATA.mirror.forEach((m, i) => {
        const a = left[i].getBoundingClientRect(), b = right[i].getBoundingClientRect();
        const y1 = a.top + a.height / 2 - mr.top, y2 = b.top + b.height / 2 - mr.top;
        const on = i === active;
        svg.append(sv("path", { d: `M0 ${y1} C${w / 2} ${y1} ${w / 2} ${y2} ${w} ${y2}`, fill: "none", stroke: on ? "var(--accent)" : "var(--line)", "stroke-width": on ? 3 : 1.5 }));
        if (on) svg.append(sv("circle", { cx: 0, cy: y1, r: 4, fill: "var(--accent)" }), sv("circle", { cx: w, cy: y2, r: 4, fill: "var(--accent)" }));
      });
    }
    function hl(i) {
      active = i;
      left.forEach((n, j) => n.classList.toggle("on", j === i));
      right.forEach((n, j) => n.classList.toggle("on", j === i));
      drawLines();
    }
    hl(0);
    window.addEventListener("resize", drawLines);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLines);
    setTimeout(drawLines, 400);
  }

  /* ---------------- Photos ---------------- */
  function fallbackArt(kind, ar) {
    const [aw, ah] = ar.split("/").map(Number);
    const W = 400, H = Math.round(400 * ah / aw);
    const s = sv("svg", { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true" });
    s.append(sv("rect", { width: W, height: H, fill: "var(--bg-2)" }));
    const g = sv("g", { transform: `translate(${W / 2} ${H * 0.58})` });
    const gold = "var(--accent)", blue = "var(--babel)", green = "var(--eden)";
    const art = {
      garden: () => [sv("circle", { cx: 0, cy: -40, r: 70, fill: gold, opacity: .15 }), sv("path", { d: "M-180 60 Q-60 -10 0 20 Q80 -20 180 60 Z", fill: green, opacity: .7 }), sv("rect", { x: -4, y: -40, width: 8, height: 60, fill: "var(--ink)", opacity: .6 }), sv("circle", { cx: 0, cy: -55, r: 34, fill: green }), sv("circle", { cx: -8, cy: -60, r: 5, fill: gold }), sv("circle", { cx: 12, cy: -48, r: 5, fill: gold })],
      garden2: () => [...[0, 1, 2, 3].map(i => sv("rect", { x: -120 + i * 20, y: -i * 26, width: 240 - i * 40, height: 26, fill: blue, opacity: .5 + i * .1 })), ...[-90, -40, 10, 60].map((x, i) => sv("circle", { cx: x + 10, cy: -8 - (i % 2) * 26, r: 12, fill: green }))],
      ark: () => [sv("rect", { x: -70, y: -20, width: 140, height: 50, fill: gold }), sv("path", { d: "M-70 -20 Q-35 -80 0 -40 Q35 -80 70 -20", fill: "none", stroke: gold, "stroke-width": 6 }), sv("rect", { x: -120, y: 10, width: 240, height: 6, rx: 3, fill: "var(--ink)", opacity: .4 })],
      temple: () => [sv("rect", { x: -130, y: 10, width: 260, height: 30, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: -40, y: -70, width: 80, height: 80, fill: gold, opacity: .85 }), sv("rect", { x: -12, y: -30, width: 24, height: 40, fill: "var(--bg-2)" })],
      menorah: () => [sv("path", { d: "M0 40 L0 -50 M-60 -50 A60 60 0 0 0 60 -50 M-40 -50 A40 40 0 0 0 40 -50 M-20 -50 A20 20 0 0 0 20 -50", fill: "none", stroke: gold, "stroke-width": 6 })],
      tower: () => [...[0, 1, 2, 3, 4, 5].map(i => sv("ellipse", { cx: 0, cy: 30 - i * 22, rx: 120 - i * 17, ry: 12, fill: blue, opacity: .35 + i * .1 })), sv("path", { d: "M-60 -110 Q0 -150 60 -110", fill: "none", stroke: "var(--muted)", "stroke-width": 3, opacity: .5 })],
      gate: () => [sv("rect", { x: -110, y: -80, width: 220, height: 120, fill: blue }), sv("path", { d: "M-40 40 L-40 -20 A40 40 0 0 1 40 -20 L40 40 Z", fill: "var(--bg-2)" }), ...[-80, 60].map(x => sv("rect", { x, y: -60, width: 20, height: 14, fill: gold }))],
      web: () => { const pts = [[-120, -40], [-60, -80], [20, -70], [100, -30], [120, 40], [40, 70], [-50, 60], [-110, 30]]; return [...pts.flatMap((a, i) => pts.slice(i + 2, i + 5).map(b => sv("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: "var(--muted)", "stroke-width": 2, opacity: .5 }))), ...pts.map((p, i) => sv("circle", { cx: p[0], cy: p[1], r: 10, fill: i % 3 === 0 ? green : i % 3 === 1 ? blue : gold }))]; },
      serpent: () => [sv("path", { d: "M-150 40 C-100 -20 -60 80 0 20 C60 -40 100 60 150 -10", fill: "none", stroke: green, "stroke-width": 16, "stroke-linecap": "round" }), sv("circle", { cx: 150, cy: -10, r: 14, fill: green }), sv("circle", { cx: 0, cy: -70, r: 30, fill: gold, opacity: .25 })],
      pole: () => [sv("rect", { x: -4, y: -110, width: 8, height: 160, fill: "var(--muted)" }), sv("path", { d: "M0 -90 C30 -80 -30 -60 0 -50 C30 -40 -30 -20 0 -10", fill: "none", stroke: gold, "stroke-width": 8 })],
      zig: () => [...[0, 1, 2].map(i => sv("rect", { x: -140 + i * 40, y: 10 - i * 34, width: 280 - i * 80, height: 34, fill: "#b08a5a", opacity: .6 + i * .12 })), sv("rect", { x: -8, y: -20, width: 16, height: 30, fill: "var(--bg-2)" })]
    };
    g.append(...(art[kind] || art.garden)());
    s.append(g);
    return s;
  }
  function photo(key) {
    const im = DATA.images[key];
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(im.file)}?width=960`;
    const page = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(im.file)}`;
    const fig = el("figure", { class: "photo reveal", style: { "--ar": im.ar } });
    const img = el("img", { src: url, alt: im.cap.replace(/<[^>]+>/g, ""), loading: "lazy", decoding: "async", referrerpolicy: "no-referrer" });
    img.addEventListener("error", () => fig.classList.add("noimg"));
    const fb = el("div", { class: "fallback" }, fallbackArt(im.art, im.ar));
    fig.append(img, fb, el("figcaption", { html: `${im.cap} · <a href="${page}" target="_blank" rel="noopener">view on Wikimedia Commons</a>` }));
    return fig;
  }
  function initPhotos() {
    const put = (sel, keys) => { const n = $(sel); if (n) keys.forEach(k => n.append(photo(k))); };
    put("#bruegelPhoto", ["bruegel"]);
    put("#part1Gallery", ["eden", "ark", "temple"]);
    put("#part2Gallery", ["ishtar", "ur", "hanging"]);
  }

  /* ---------------- Ziggurat ---------------- */
  function initZiggurat() {
    const stage = $("#zigStage");
    const VB = [0, 0, 600, 430];
    const svg = sv("svg", { viewBox: VB.join(" "), role: "img", "aria-label": "Cross-section of a seven-stage ziggurat" });
    const sky = sv("g");
    svg.append(sky);
    // divine descent (drawn at large scale, revealed on zoom-out)
    const descent = sv("g", { opacity: 0, style: { transition: "opacity 1.2s" } });
    const grad = sv("linearGradient", { id: "beam", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--accent)", "stop-opacity": .9 }), sv("stop", { offset: 1, "stop-color": "var(--accent)", "stop-opacity": 0 }));
    svg.append(sv("defs", {}, grad));
    descent.append(sv("polygon", { points: "-200,-3600 800,-3600 380,60 220,60", fill: "url(#beam)", opacity: .55 }));
    descent.append(sv("circle", { cx: 300, cy: -3400, r: 380, fill: "var(--accent)", opacity: .35 }));
    descent.append(sv("text", { x: 300, y: -2500, "text-anchor": "middle", "font-size": 230, "font-weight": 800, fill: "var(--ink)" }, "“The LORD came down"));
    descent.append(sv("text", { x: 300, y: -2200, "text-anchor": "middle", "font-size": 230, "font-weight": 800, fill: "var(--ink)" }, "to see the city and the tower”"));
    descent.append(sv("text", { x: 300, y: -1950, "text-anchor": "middle", "font-size": 140, "font-weight": 700, fill: "var(--accent)" }, "Genesis 11:5"));
    descent.append(sv("path", { d: "M1300 -300 Q900 -200 420 120", fill: "none", stroke: "var(--ink)", "stroke-width": 20 }), sv("text", { x: 1340, y: -320, "font-size": 140, "font-weight": 700, fill: "var(--ink)" }, "“its top in the heavens”"));
    svg.append(descent);

    svg.append(sv("rect", { x: -3000, y: 380, width: 7000, height: 4000, fill: "var(--bg-2)" }), sv("line", { x1: -3000, y1: 380, x2: 4000, y2: 380, stroke: "var(--line)", "stroke-width": 2 }));
    const tiers = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Seven stages" });
    const tierEls = [];
    for (let i = 0; i < 7; i++) {
      const w = 360 - i * 42, h = 32, y = 380 - (i + 1) * h;
      const r = sv("rect", { class: "hl", x: 300 - w / 2, y, width: w, height: h, fill: "var(--babel)", "fill-opacity": 1 - i * .07, stroke: "transparent", style: { transformOrigin: `300px ${y + h}px`, transformBox: "view-box", transition: reduceMotion ? "none" : "transform .45s cubic-bezier(.3,1.4,.5,1), opacity .3s" } });
      tierEls.push(r); tiers.append(r);
      // brick courses
      for (let yy = y + 8; yy < y + h; yy += 8) tiers.append(sv("line", { x1: 300 - w / 2, y1: yy, x2: 300 + w / 2, y2: yy, stroke: "var(--surface)", "stroke-opacity": .12, "pointer-events": "none" }));
    }
    svg.append(tiers);
    const stairs = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "The stairway" });
    stairs.append(sv("polygon", { class: "hl", points: "285,380 315,380 309,220 291,220", fill: "var(--surface)", "fill-opacity": .35, stroke: "transparent" }));
    for (let y = 372; y > 222; y -= 8) stairs.append(sv("line", { x1: 286 + (380 - y) * .037, y1: y, x2: 314 - (380 - y) * .037, y2: y, stroke: "var(--ink)", "stroke-opacity": .3 }));
    svg.append(stairs);
    const shrine = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "The shrine at the top", style: { transition: "opacity .4s" } },
      sv("rect", { class: "hl", x: 276, y: 118, width: 48, height: 38, fill: "var(--accent)", stroke: "transparent" }), sv("rect", { x: 294, y: 134, width: 12, height: 22, fill: "var(--ink)", opacity: .5 }),
      sv("circle", { cx: 300, cy: 104, r: 24, fill: "var(--accent)", opacity: .18, class: "pulse" }));
    svg.append(shrine);
    const temple = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Esagila temple" },
      sv("rect", { class: "hl", x: 488, y: 340, width: 92, height: 40, fill: "var(--muted)", "fill-opacity": .55, stroke: "transparent" }), sv("rect", { x: 524, y: 356, width: 20, height: 24, fill: "var(--bg)" }),
      sv("text", { x: 534, y: 332, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "Esagila"));
    svg.append(temple);
    const bricks = sv("g", { class: "hot", tabindex: "0", role: "button", "aria-label": "Fired brick and bitumen" });
    bricks.append(sv("rect", { class: "hl", x: 20, y: 330, width: 84, height: 50, fill: "#b08a5a", stroke: "transparent" }));
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) bricks.append(sv("rect", { x: 20 + c * 21 + (r % 2 ? 10 : 0), y: 330 + r * 12.5, width: 19, height: 10.5, fill: "#c9a36e", stroke: "#2a2014", "stroke-width": 1.5 }));
    bricks.append(sv("text", { x: 62, y: 322, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "brick + bitumen"));
    svg.append(bricks);
    const tinyLbl = sv("text", { x: 300, y: 80, "text-anchor": "middle", "font-size": 13, "font-weight": 700, fill: "var(--muted)" }, "the god was meant to come down here");
    svg.append(tinyLbl);
    stage.append(svg);

    const map = { shrine, stairs, tiers, bricks, temple };
    Object.entries(map).forEach(([id, g]) => {
      g.addEventListener("click", () => select(id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); } });
    });
    function select(id) {
      const z = DATA.ziggurat.find(x => x.id === id);
      Object.entries(map).forEach(([k, g]) => g.classList.toggle("on", k === id));
      $("#zigPanel").replaceChildren(el("p", { class: "eyebrow", text: "Etemenanki, Babylon" }), el("h3", { text: z.name }), el("span", { class: "ref", text: z.ref }), el("p", { html: refify(z.text) }),
        el("div", { class: "chips" }, DATA.ziggurat.map(o => el("button", { class: "chip", type: "button", "aria-pressed": String(o.id === id), onclick: () => select(o.id), text: cap(o.name.replace("The ", "").replace(" at the top", "")) }))));
    }
    select("shrine");

    let anim = null;
    function animateVB(to, dur) {
      cancelAnimationFrame(anim);
      const from = svg.getAttribute("viewBox").split(" ").map(Number);
      if (reduceMotion) { svg.setAttribute("viewBox", to.join(" ")); return; }
      const t0 = performance.now();
      const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const step = now => {
        const t = Math.min(1, (now - t0) / dur), e = ease(t);
        svg.setAttribute("viewBox", from.map((f, i) => (f + (to[i] - f) * e).toFixed(2)).join(" "));
        if (t < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }
    function reset() { animateVB(VB, 900); descent.setAttribute("opacity", 0); tinyLbl.style.opacity = 1; }
    $("#zigBuild").addEventListener("click", () => {
      reset();
      tierEls.forEach(t => { t.style.transform = "scaleY(0)"; });
      shrine.style.opacity = 0; stairs.style.opacity = 0;
      tierEls.forEach((t, i) => setTimeout(() => { t.style.transform = "scaleY(1)"; }, reduceMotion ? 0 : 250 + i * 320));
      setTimeout(() => { stairs.style.opacity = 1; shrine.style.opacity = 1; select("shrine"); }, reduceMotion ? 0 : 250 + 7 * 320);
    });
    $("#zigDescend").addEventListener("click", () => {
      tierEls.forEach(t => t.style.transform = "scaleY(1)"); shrine.style.opacity = 1; stairs.style.opacity = 1;
      tinyLbl.style.opacity = 0;
      descent.setAttribute("opacity", 1);
      animateVB([-2400, -3800, 5400, 4300], 2600);
      $("#zigPanel").replaceChildren(el("p", { class: "eyebrow", text: "Genesis 11:5" }), el("h3", { text: "God has to stoop to see it" }),
        el("p", { text: "The builders said its top would be “in the heavens.” The narrator replies that the LORD had to come down just to look at it. The structure meant to bring a god down to human terms is so small that the Creator must descend to inspect it, and he comes down on his own terms, to scatter." }),
        el("p", { class: "muted", text: "Press Reset to return to the tower." }));
    });
    $("#zigReset").addEventListener("click", () => { reset(); select("shrine"); });

    // names
    $("#zigNames").append(...DATA.zigNames.map(n => el("div", { class: "card" },
      n.cun ? el("p", { class: "cun", style: { fontSize: "1.6rem", color: "var(--babel)", lineHeight: 1.2 }, text: n.cun }) : null,
      el("h3", { text: n.name }), el("p", { text: n.meaning }))));

    // scale chart
    const W = 520, H = 330, base = 290, maxH = 250, max = 828;
    const sc = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Heights compared: Etemenanki 91 metres, Statue of Liberty 93, Great Pyramid 147, Eiffel Tower 330, Burj Khalifa 828" });
    [0, 200, 400, 600, 800].forEach(v => {
      const y = base - v / max * maxH;
      sc.append(sv("line", { x1: 50, y1: y, x2: W - 10, y2: y, stroke: "var(--line)", "stroke-dasharray": v ? "3 4" : "" }), sv("text", { x: 44, y: y + 4, "text-anchor": "end" }, v + " m"));
    });
    const bw = 56, gap = (W - 70 - DATA.scale.length * bw) / DATA.scale.length;
    DATA.scale.forEach((d, i) => {
      const x = 62 + i * (bw + gap), h = d.m / max * maxH;
      const bar = sv("rect", { x, y: base - h, width: bw, height: h, rx: 3, fill: i === 0 ? "var(--babel)" : "var(--muted)", "fill-opacity": i === 0 ? 1 : .45 });
      sc.append(bar, sv("text", { class: "lbl", x: x + bw / 2, y: base - h - 8, "text-anchor": "middle" }, Math.round(d.m) + " m"),
        sv("text", { x: x + bw / 2, y: base + 16, "text-anchor": "middle", style: { fontWeight: i === 0 ? 700 : 400, fill: i === 0 ? "var(--ink)" : "" } }, d.name));
      if (d.note) sc.append(sv("text", { x: x + bw / 2, y: base + 30, "text-anchor": "middle", style: { fontSize: "10px" } }, d.note));
    });
    $("#scaleChart").append(sc);
  }

  /* ---------------- Genealogy ---------------- */
  function initGen() {
    const line = $("#genLine");
    let born = -98;
    const btns = DATA.gen.map((g, i) => {
      g.born = born;
      if (g.at != null) born += g.at;
      const b = el("button", { class: "gen-b" + (g.abram ? " abram-b" : ""), type: "button", onclick: () => show(i) }, el("span", { text: g.n }), el("small", { text: g.abram ? "called · Gen 12" : `${g.life} years` }));
      if (i) line.append(el("span", { class: "arrow", "aria-hidden": "true", text: "→" }));
      line.append(b);
      return b;
    });
    function show(i, lightTo) {
      btns.forEach((b, j) => { b.classList.toggle("lit", j <= (lightTo ?? i) && !DATA.gen[j].abram); b.classList.toggle("abram", DATA.gen[j].abram && j <= (lightTo ?? i)); });
      const g = DATA.gen[i];
      const yrs = g.born < 0 ? `${-g.born} years before the flood` : `${g.born} years after the flood`;
      $("#genPanel").replaceChildren(el("p", { class: "eyebrow", text: `Generation ${i + 1} from Shem · born about ${yrs} (Masoretic numbers)` }),
        el("h3", { text: g.n }),
        g.at != null ? el("p", { class: "muted", text: `Became a father at ${g.at}; lived ${g.life} years.` }) : el("p", { class: "muted", text: `Lived ${g.life} years (Gen 25:7).` }),
        g.note ? el("p", { html: refify(g.note) }) : null,
        i === 0 ? el("p", { class: "muted", text: "On these numbers Shem lives 600 years and outlives Abraham himself." }) : null);
    }
    show(0);
    let t = null;
    $("#genPlay").addEventListener("click", () => {
      clearInterval(t); let i = 0; show(0);
      t = setInterval(() => { i++; if (i >= DATA.gen.length) return clearInterval(t); show(i); }, reduceMotion ? 900 : 650);
    });
    // "let us"
    $("#letus").append(...DATA.letus.map(l => el("div", { class: "letus-line" + (l.god ? " god" : "") }, el("div", {}, el("b", { text: l.who }), el("br"), el("span", { class: "ref", text: l.ref })), el("q", { text: l.text }))),
      el("p", { class: "muted", style: { fontSize: ".95rem" }, text: DATA.letusNote }));
  }

  /* ---------------- Nations ---------------- */
  function initNations() {
    const W = 460, C = W / 2;
    const svg = sv("svg", { viewBox: `0 0 ${W} ${W}`, role: "img", "aria-label": "Seventy nations scattered from Babel, with one portion kept for the LORD" });
    const rings = sv("g", { fill: "none", stroke: "var(--line)" }, sv("circle", { cx: C, cy: C, r: 180, "stroke-dasharray": "2 6" }), sv("circle", { cx: C, cy: C, r: 110 }));
    svg.append(rings);
    const center = sv("g", { style: { transition: "opacity .6s" } });
    center.append(sv("g", { transform: `translate(${C - 22} ${C - 30})`, fill: "var(--babel)" }, sv("rect", { x: 0, y: 40, width: 44, height: 10 }), sv("rect", { x: 7, y: 30, width: 30, height: 10 }), sv("rect", { x: 13, y: 20, width: 18, height: 10 }), sv("rect", { x: 18, y: 12, width: 8, height: 8, fill: "var(--accent)" })));
    const flame = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: `M${C} ${C + 26} C${C - 20} ${C + 8} ${C - 10} ${C - 10} ${C} ${C - 30} C${C + 6} ${C - 12} ${C + 20} ${C} ${C} ${C + 26} Z`, fill: "var(--flame)" }), sv("path", { d: `M${C} ${C + 22} C${C - 9} ${C + 12} ${C - 4} ${C + 2} ${C} ${C - 8} C${C + 4} ${C + 6} ${C + 10} ${C + 12} ${C} ${C + 22} Z`, fill: "var(--accent)" }));
    svg.append(center, flame);
    const lbl = sv("text", { x: C, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "One people, one language (Gen 11:1)");
    svg.append(lbl);
    const portion = sv("g", { opacity: 0, style: { transition: "opacity .8s" } },
      sv("circle", { cx: C, cy: C - 180, r: 11, fill: "none", stroke: "var(--accent)", "stroke-width": 2.5, "stroke-dasharray": "3 3" }),
      sv("text", { x: C, y: C - 150, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--accent)" }, "The LORD’s portion: Jacob"),
      sv("text", { x: C, y: C - 136, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, "(Deut 32:9), a nation not yet born"));
    svg.append(portion);
    const dots = [];
    for (let i = 0; i < 70; i++) {
      const d = sv("g", { style: { transition: reduceMotion ? "none" : `transform 1.4s cubic-bezier(.3,.8,.3,1) ${(i % 10) * 0.03}s` } },
        sv("circle", { r: 5.5, fill: `hsl(${(i * 47) % 360} 55% 55%)` }));
      dots.push(d); svg.append(d);
    }
    // the "sons of God", one above each nation
    const stars = sv("g", { opacity: 0, style: { transition: "opacity .9s" } });
    for (let i = 0; i < 70; i++) {
      const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
      stars.append(sv("circle", { cx: C + Math.cos(a) * 200, cy: C + Math.sin(a) * 200, r: 1.8, fill: "var(--muted)" }));
    }
    stars.append(sv("text", { x: C + 160, y: C + 200, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 600 }, "· sons of God"));
    svg.append(stars);
    $("#nationsStage").append(svg);
    let seed = 3; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const jitter = dots.map(() => [(rnd() - .5) * 60, (rnd() - .5) * 60]);
    function cluster() {
      dots.forEach((d, i) => { d.style.transform = `translate(${C + jitter[i][0]}px, ${C + 50 + jitter[i][1] * .5}px)`; });
      stars.setAttribute("opacity", 0);
      portion.setAttribute("opacity", 0); flame.setAttribute("opacity", 0); center.setAttribute("opacity", 1);
      lbl.textContent = "One people, one language (Gen 11:1)";
    }
    function divide() {
      // 71 slots: slot 0 (top) is the LORD's portion, left empty
      dots.forEach((d, i) => {
        const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
        d.style.transform = `translate(${C + Math.cos(a) * 180}px, ${C + Math.sin(a) * 180}px)`;
      });
      stars.setAttribute("opacity", 1);
      portion.setAttribute("opacity", 1); flame.setAttribute("opacity", 0); center.setAttribute("opacity", .35);
      lbl.textContent = "Divided “according to the number of the sons of God”";
    }
    function gather() {
      dots.forEach((d, i) => {
        const a = -Math.PI / 2 + (i + 1) / 71 * Math.PI * 2;
        d.style.transform = `translate(${C + Math.cos(a) * 110}px, ${C + Math.sin(a) * 110}px)`;
      });
      stars.setAttribute("opacity", 0);
      portion.setAttribute("opacity", 0); flame.setAttribute("opacity", 1); center.setAttribute("opacity", 0);
      lbl.textContent = "Gathered, still many: “every nation under heaven” (Acts 2:5)";
    }
    cluster();
    $("#divideBtn").addEventListener("click", divide);
    $("#gatherBtn").addEventListener("click", gather);
    // start divided so the page shows the idea at rest
    setTimeout(divide, 600);
  }

  /* ---------------- Ladder ---------------- */
  function initLadder() {
    const svg = sv("svg", { viewBox: "0 0 400 440", role: "img", "aria-label": "Jacob's dream: a stairway from earth to heaven with angels going up and down" });
    svg.append(sv("circle", { cx: 330, cy: 60, r: 90, fill: "var(--accent)", opacity: .15 }), sv("circle", { cx: 330, cy: 60, r: 44, fill: "var(--accent)", opacity: .35 }));
    let seed = 11; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 30; i++) svg.append(sv("circle", { cx: rnd() * 400, cy: rnd() * 300, r: .8 + rnd() * 1.4, fill: "var(--muted)", class: i % 2 ? "twinkle" : "" }));
    const pathD = "M70 390 L330 70";
    const rail = sv("g", { stroke: "var(--accent)", "stroke-width": 3 });
    rail.append(sv("line", { x1: 50, y1: 384, x2: 316, y2: 60 }), sv("line", { x1: 92, y1: 400, x2: 346, y2: 84 }));
    for (let t = 0.04; t < 1; t += 0.07) {
      const x1 = 50 + (316 - 50) * t, y1 = 384 + (60 - 384) * t, x2 = 92 + (346 - 92) * t, y2 = 400 + (84 - 400) * t;
      rail.append(sv("line", { x1, y1, x2, y2, "stroke-width": 2, opacity: .8 }));
    }
    svg.append(rail);
    // Jacob asleep with a stone pillow
    svg.append(sv("ellipse", { cx: 96, cy: 418, rx: 46, ry: 9, fill: "var(--muted)", opacity: .5 }), sv("rect", { x: 40, y: 404, width: 18, height: 12, rx: 4, fill: "var(--muted)" }), sv("circle", { cx: 64, cy: 405, r: 7, fill: "var(--ink)", opacity: .7 }), sv("rect", { x: 70, y: 402, width: 66, height: 12, rx: 6, fill: "var(--ink)", opacity: .55 }));
    svg.append(sv("text", { x: 150, y: 430, "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "Jacob at Bethel · Gen 28:12"));
    svg.append(sv("text", { x: 330, y: 160, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--ink)" }, "“I am the LORD”"));
    if (!reduceMotion) {
      for (let i = 0; i < 6; i++) {
        const up = i % 2 === 0;
        const a = sv("g", {}, sv("circle", { r: 5, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 1.5 }), sv("path", { d: "M-4 0 Q-12 -9 -14 2 M4 0 Q12 -9 14 2", fill: "none", stroke: "var(--accent)", "stroke-width": 1.5 }));
        const m = sv("animateMotion", { dur: "7s", repeatCount: "indefinite", path: pathD, begin: `${i * 1.15}s`, keyPoints: up ? "0;1" : "1;0", keyTimes: "0;1", calcMode: "linear" });
        a.append(m); svg.append(a);
      }
    }
    $("#ladderStage").append(svg);
  }

  /* ---------------- Pentecost ---------------- */
  function initPentecost() {
    const cmp = $("#compare"), range = $("#compareRange");
    const set = v => cmp.style.setProperty("--split", v + "%");
    range.addEventListener("input", e => set(e.target.value));
    set(50);
    let i = 0, timer = null;
    const txt = $("#tongueText"), lang = $("#tongueLang");
    function next() {
      i = (i + 1) % DATA.tongues.length;
      txt.classList.add("out");
      setTimeout(() => { lang.textContent = DATA.tongues[i][0]; txt.textContent = DATA.tongues[i][1]; txt.classList.remove("out"); }, reduceMotion ? 0 : 350);
    }
    $("#tongueBtn").addEventListener("click", () => { clearInterval(timer); next(); });
    if (!reduceMotion) timer = setInterval(next, 3400);
  }

  /* ---------------- Cities ---------------- */
  function initCities() {
    const box = $("#lanes");
    const inner = el("div", { class: "lanes-inner" });
    const all = [];
    const mkLane = (key, label) => {
      const lane = el("div", { class: "lane " + key }, el("div", { class: "lane-label", text: label }));
      for (let c = 0; c < 8; c++) {
        const cell = el("div", { class: "stack", style: { gap: "8px" } });
        DATA.cities[key].filter(x => x.col === c).forEach(x => {
          const b = el("button", { class: "city", type: "button" }, el("b", { text: x.name }), el("small", { text: x.short }));
          b.addEventListener("click", () => sel(x, b, key));
          all.push(b); cell.append(b);
          x._btn = b;
        });
        lane.append(cell);
      }
      return lane;
    };
    inner.append(mkLane("man", "City of man"), el("div", { class: "lane-axis" }, el("span", {}), DATA.eras.map(e => el("span", { text: e }))), mkLane("god", "City of God"));
    box.append(inner);
    function sel(x, b, key) {
      all.forEach(n => n.classList.toggle("on", n === b));
      $("#cityPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: key === "man" ? "var(--babel)" : "var(--accent)" }, text: key === "man" ? "City of man" : "City of God" }),
        el("h3", { text: x.name }), el("span", { class: "ref", text: x.short }), el("p", { html: refify(x.text) }));
    }
    const babel = DATA.cities.man.find(x => x.name === "Babel");
    sel(babel, babel._btn, "man");
    // Babylon vs New Jerusalem table
    $("#cityTable").append(...DATA.cityTable.map(r => el("tr", {}, el("td", { text: r[0] }), el("td", { html: `${r[1]}<span class="ref">${r[2]}</span>` }), el("td", { html: `${r[3]}<span class="ref">${r[4]}</span>` }))));
  }

  /* ---------------- Connections web ---------------- */
  function initWeb() {
    const W = 600, C = W / 2, R = 228;
    const order = ["eden", "mountain", "adam", "serpent", "seed", "tabernacle", "ark", "temple", "jesus", "church", "newjer", "pentecost", "bethel", "abraham", "shem", "nations", "babylon", "babel"];
    const nodes = order.map(id => DATA.web.nodes.find(n => n.id === id));
    const pos = {};
    nodes.forEach((n, i) => { const a = -Math.PI / 2 + i / nodes.length * Math.PI * 2; pos[n.id] = [C + Math.cos(a) * R, C + Math.sin(a) * R, a]; });
    const svg = sv("svg", { viewBox: `-40 -10 ${W + 80} ${W + 20}`, role: "img", "aria-label": "Network of connections between the themes" });
    const gE = sv("g"), gN = sv("g");
    const edges = DATA.web.edges.map(([a, b, label]) => {
      const [x1, y1] = pos[a], [x2, y2] = pos[b];
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const qx = mx + (C - mx) * .55, qy = my + (C - my) * .55;
      const p = sv("path", { class: "edge", d: `M${x1} ${y1} Q${qx} ${qy} ${x2} ${y2}`, fill: "none" });
      gE.append(p);
      return { a, b, label, p };
    });
    const colour = g => g === 1 ? "var(--eden)" : g === 2 ? "var(--babel)" : g === 4 ? "var(--flame)" : "var(--accent)";
    const nEls = {};
    nodes.forEach(n => {
      const [x, y, a] = pos[n.id];
      const g = sv("g", { class: "node", tabindex: "0", role: "button", "aria-label": n.n });
      const anchor = Math.abs(Math.cos(a)) < .2 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
      const tx = x + Math.cos(a) * 18, ty = y + Math.sin(a) * 18 + 4;
      g.append(sv("circle", { cx: x, cy: y, r: 11, fill: colour(n.g), stroke: "var(--surface)" }),
        sv("text", { x: tx, y: ty + (anchor === "middle" ? Math.sin(a) * 6 : 0), "text-anchor": anchor, "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, n.n));
      g.addEventListener("click", () => sel(n.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(n.id); } });
      gN.append(g); nEls[n.id] = g;
    });
    svg.append(gE, gN);
    $("#webStage").append(svg);
    function sel(id) {
      const n = DATA.web.nodes.find(x => x.id === id);
      const linked = new Set([id]);
      const mine = edges.filter(e => e.a === id || e.b === id);
      mine.forEach(e => { linked.add(e.a); linked.add(e.b); });
      edges.forEach(e => { const on = mine.includes(e); e.p.classList.toggle("on", on); e.p.classList.toggle("dim", !on); });
      Object.entries(nEls).forEach(([k, g]) => { g.classList.toggle("on", k === id); g.classList.toggle("dim", !linked.has(k)); });
      $("#webPanel").replaceChildren(el("p", { class: "eyebrow", text: n.g === 1 ? "Part I" : n.g === 4 ? "Part II" : n.g === 2 ? "Part III" : "Fulfilment" }), el("h3", { text: n.n }), el("p", { html: refify(n.d) }),
        el("div", { class: "row" }, el("b", { text: `${mine.length} connections` })),
        el("div", { class: "stack", style: { gap: "8px" } }, mine.map(e => {
          const other = e.a === id ? e.b : e.a;
          const on = DATA.web.nodes.find(x => x.id === other);
          return el("button", { class: "qopt", type: "button", onclick: () => sel(other) }, el("b", { text: on.n + " " }), el("span", { class: "muted", html: "· " + refify(e.label) }));
        })));
    }
    sel("jesus");
  }

  /* ---------------- Quiz ---------------- */
  function initQuiz() {
    const box = $("#quizBox");
    let qi = 0, score = 0;
    function render() {
      if (qi >= DATA.quiz.length) {
        const msg = score === DATA.quiz.length ? "Perfect. You have walked from Eden to the New Jerusalem." : score >= DATA.quiz.length * 0.7 ? "Well done. A few threads to revisit above." : "A good start. Scroll back through the sections and try again.";
        box.replaceChildren(el("div", { class: "qcard" }, el("p", { class: "eyebrow", text: "Your score" }), el("h3", { style: { fontSize: "var(--step-3)" }, text: `${score} / ${DATA.quiz.length}` }), el("p", { text: msg }),
          el("div", {}, el("button", { class: "btn primary", type: "button", onclick: () => { qi = 0; score = 0; render(); }, text: "Try again" }))));
        return;
      }
      const q = DATA.quiz[qi];
      const explain = el("p", { class: "qexplain", hidden: true });
      const nextBtn = el("button", { class: "btn primary small", type: "button", hidden: true, text: qi === DATA.quiz.length - 1 ? "See score" : "Next question ▸", onclick: () => { qi++; render(); } });
      const opts = q.a.map((a, i) => el("button", { class: "qopt", type: "button", text: a, onclick: () => {
        opts.forEach((o, j) => { o.disabled = true; if (j === q.c) o.classList.add("right"); });
        if (i === q.c) score++; else opts[i].classList.add("wrong");
        explain.innerHTML = (i === q.c ? "<b>Correct.</b> " : "<b>Not quite.</b> ") + refify(q.x);
        explain.hidden = false; nextBtn.hidden = false; nextBtn.focus();
      } }));
      box.replaceChildren(el("div", { class: "qcard" },
        el("div", { class: "qbar" }, el("span", { class: "eyebrow", text: `Question ${qi + 1} of ${DATA.quiz.length}` }), el("span", { class: "muted", text: `Score ${score}` })),
        el("div", { class: "meter", style: { maxWidth: "none" } }, el("i", { style: { width: (qi / DATA.quiz.length * 100) + "%" } })),
        el("h3", { text: q.q }), el("div", { class: "qopts" }, opts), explain, el("div", {}, nextBtn)));
    }
    render();
  }

  function initSources() {
    $("#sourceList").append(...DATA.sources.map(s => el("div", { class: "source" }, el("b", { text: s[0] }), el("i", { text: s[1] }), el("span", { text: s[2] }))));
  }

  /* ---------------- Scroll: progress, nav, reveals ---------------- */
  function initScroll() {
    const prog = $("#progress");
    const toc = $$(".toc a");
    const targets = toc.map(a => $(a.getAttribute("href"))).filter(Boolean);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + "%";
      let cur = null;
      targets.forEach((t, i) => { if (t.getBoundingClientRect().top < 160) cur = i; });
      toc.forEach((a, i) => a.classList.toggle("active", i === cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!reduceMotion && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      $$(".reveal").forEach(n => { if (n.getBoundingClientRect().top > window.innerHeight) { n.classList.add("pre"); io.observe(n); } });
    }
  }

  /* ================ Part II: the serpent and the seed ================ */
  function initNachash() {
    const svg = sv("svg", { viewBox: "0 0 600 430", class: "venn", role: "img", "aria-label": "Three overlapping meanings of the Hebrew word nachash" });
    const grad = sv("linearGradient", { id: "nachGrad", x1: 0, y1: 0, x2: 1, y2: 0 },
      sv("stop", { offset: 0, "stop-color": "var(--ink)" }), sv("stop", { offset: .5, "stop-color": "var(--accent)" }, reduceMotion ? null : sv("animate", { attributeName: "offset", values: "0;1;0", dur: "6s", repeatCount: "indefinite" })), sv("stop", { offset: 1, "stop-color": "var(--ink)" }));
    svg.append(sv("defs", {}, grad));
    svg.append(sv("text", { x: 300, y: 92, "text-anchor": "middle", "font-size": 84, fill: "url(#nachGrad)", style: { fontFamily: "var(--font-hebrew)" } }, "נָחָשׁ"));
    svg.append(sv("text", { x: 300, y: 122, "text-anchor": "middle", "font-size": 14, "letter-spacing": 4, "font-weight": 700, fill: "var(--muted)" }, "N · Ḥ · Š"));
    const spec = { serpent: [232, 238, "var(--eden)"], diviner: [368, 238, "var(--babel)"], shining: [300, 330, "var(--accent)"] };
    const rings = {};
    Object.entries(spec).forEach(([k, [cx, cy, c]]) => {
      const r = sv("circle", { class: "ring", cx, cy, r: 92, fill: c, "fill-opacity": .2, stroke: c, "stroke-width": 2 });
      rings[k] = r; svg.append(r);
    });
    // icons inside each ring
    svg.append(sv("path", { d: "M170 250 C180 220 200 260 210 230 C218 206 236 222 230 200", fill: "none", stroke: "var(--eden)", "stroke-width": 6, "stroke-linecap": "round" }), sv("circle", { cx: 231, cy: 197, r: 6, fill: "var(--eden)" }));
    svg.append(sv("path", { d: "M378 222 Q406 196 434 222 Q406 248 378 222 Z", fill: "none", stroke: "var(--babel)", "stroke-width": 3 }), sv("circle", { cx: 406, cy: 222, r: 7, fill: "var(--babel)" }));
    const star = sv("g", { transform: "translate(300 372)" });
    for (let i = 0; i < 8; i++) star.append(sv("line", { x1: 0, y1: 0, x2: 0, y2: -20, stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round", transform: `rotate(${i * 45})` }));
    star.append(sv("circle", { r: 7, fill: "var(--accent)" }));
    svg.append(star);
    svg.append(sv("text", { class: "lbl", x: 140, y: 168, fill: "var(--eden)" }, "serpent"), sv("text", { class: "lbl", x: 460, y: 168, "text-anchor": "end", fill: "var(--babel)" }, "diviner"),
      sv("text", { class: "lbl", x: 412, y: 405, fill: "var(--accent)" }, "shining one"));
    const core = sv("g", {}, sv("circle", { cx: 300, cy: 270, r: 26, fill: "var(--flame)", opacity: .25, class: "pulse" }), sv("text", { x: 300, y: 268, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "a divine"), sv("text", { x: 300, y: 281, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "being"));
    svg.append(core);
    $("#nachashStage").append(svg);
    const chips = $("#nachashChips");
    const keys = Object.keys(DATA.nachash);
    keys.forEach(k => chips.append(el("button", { class: "chip", type: "button", "data-k": k, text: DATA.nachash[k].label, onclick: () => set(k) })));
    function set(k) {
      const d = DATA.nachash[k];
      $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      Object.entries(rings).forEach(([rk, r]) => { const on = k === "all" || k === rk; r.style.opacity = on ? 1 : .25; r.setAttribute("fill-opacity", on ? (k === "all" ? .28 : .35) : .1); r.setAttribute("stroke-width", on ? 3 : 1); });
      core.style.opacity = k === "all" ? 1 : .35;
      $("#nachashHeb").textContent = d.heb;
      $("#nachashHead").textContent = d.head;
      $("#nachashText").innerHTML = refify(d.text);
    }
    set("all");
  }

  function initNotSnake() {
    $("#notSnake").append(...DATA.notSnake.map(c => el("div", { class: "card reveal" }, icon(c.icon, "icon"), el("h3", { text: c.title }), el("p", { html: refify(c.text) }))));
    $$("#notSnake .icon").forEach(i => { i.style.width = "36px"; i.style.height = "36px"; i.style.color = "var(--flame)"; });
  }

  function initCherub() {
    const gems = $("#gems");
    DATA.breastpiece.forEach(([n, c, on]) => gems.append(el("div", { class: "gem" + (on ? "" : " off"), style: { background: c, color: n === "Diamond" ? "#333" : "#fff", textShadow: n === "Diamond" ? "none" : "" }, text: n })));
    const box = $("#verses");
    const btns = DATA.ezekiel.map((v, i) => {
      const b = el("button", { class: "verse", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("small", { text: "Ezekiel " + v.v }), v.text);
      box.append(b); return b;
    });
    function sel(i) {
      const v = DATA.ezekiel[i];
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      $("#verseRef").textContent = "Ezekiel " + v.v;
      $("#verseNote").innerHTML = refify(v.note);
      gems.classList.toggle("spot", !!v.gems);
    }
    sel(1);
  }

  function initMorningStar() {
    const svg = sv("svg", { viewBox: "0 0 600 400", role: "img", "aria-label": "The morning star climbing toward the mountain of assembly, then falling at sunrise" });
    const sky = sv("linearGradient", { id: "skyG", x1: 0, y1: 0, x2: 0, y2: 1 }, sv("stop", { offset: 0, "stop-color": "var(--babel)", "stop-opacity": .35 }), sv("stop", { offset: 1, "stop-color": "var(--bg)", "stop-opacity": 1 }));
    svg.append(sv("defs", {}, sky), sv("rect", { width: 600, height: 300, fill: "url(#skyG)" }));
    let seed = 21; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 40; i++) svg.append(sv("circle", { cx: rnd() * 600, cy: rnd() * 260, r: .6 + rnd() * 1.3, fill: "var(--muted)", class: i % 3 ? "" : "twinkle" }));
    svg.append(sv("polygon", { points: "370,300 482,118 600,300", fill: "var(--muted)", "fill-opacity": .28 }),
      sv("text", { x: 486, y: 142, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "var(--ink)" }, "mount of assembly"),
      sv("text", { x: 486, y: 156, "text-anchor": "middle", "font-size": 10, fill: "var(--muted)" }, "“far reaches of the north” (Zaphon)"));
    const sun = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1.6s ease, opacity 1.2s" }, opacity: 0 },
      sv("circle", { cx: 130, cy: 300, r: 90, fill: "var(--accent)", opacity: .18 }), sv("circle", { cx: 130, cy: 300, r: 46, fill: "var(--accent)" }));
    sun.style.transform = "translateY(60px)";
    svg.append(sun);
    svg.append(sv("rect", { x: 0, y: 300, width: 600, height: 100, fill: "var(--ink)", "fill-opacity": .12 }), sv("line", { x1: 0, y1: 300, x2: 600, y2: 300, stroke: "var(--line)", "stroke-width": 2 }),
      sv("text", { x: 20, y: 386, "font-size": 12, "font-weight": 800, fill: "var(--muted)", "letter-spacing": 2 }, "SHEOL · THE PIT"));
    const P = [[80, 286], [160, 236], [240, 192], [320, 156], [400, 126], [482, 92]];
    svg.append(sv("polyline", { points: P.map(p => p.join(",")).join(" "), fill: "none", stroke: "var(--accent)", "stroke-width": 1.5, "stroke-dasharray": "3 6", opacity: .5 }));
    const trail = sv("polyline", { fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" });
    svg.append(trail);
    const venus = sv("g", { style: { transition: reduceMotion ? "none" : "transform 1s cubic-bezier(.4,.1,.2,1), opacity .8s" } },
      sv("circle", { r: 18, fill: "var(--accent)", opacity: .25, class: "pulse" }), sv("circle", { r: 6, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 2 }));
    svg.append(venus);
    const lbl = sv("text", { x: 300, y: 30, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(lbl);
    $("#starStage").append(svg);
    const list = $("#iwill");
    const items = DATA.iwill.map(w => { const li = el("li", { class: "iw", text: "“" + w.t + "”" }); list.append(li); return li; });
    const fall = $("#iwFall");
    let step = 0;
    function render() {
      items.forEach((li, i) => li.classList.toggle("on", i < step));
      fall.classList.toggle("on", step > 5);
      if (step <= 5) {
        const [x, y] = P[step];
        venus.style.transform = `translate(${x}px, ${y}px)`; venus.style.opacity = 1;
        trail.setAttribute("points", P.slice(0, step + 1).map(p => p.join(",")).join(" "));
        sun.style.opacity = 0; sun.style.transform = "translateY(60px)";
        lbl.textContent = step === 0 ? "Before dawn: the brightest star rises" : step === 5 ? "“I will make myself like the Most High”" : "";
      } else {
        venus.style.transform = "translate(482px, 360px)"; venus.style.opacity = .6;
        trail.setAttribute("points", P.map(p => p.join(",")).join(" ") + " 482,360");
        sun.style.opacity = 1; sun.style.transform = "translateY(0)";
        lbl.textContent = "Sunrise: “How you are fallen from heaven, O Day Star!”";
      }
      $("#starNext").textContent = step < 5 ? "Next “I will” ▸" : step === 5 ? "Sunrise ▾" : "Done";
      $("#starNext").disabled = step > 5;
    }
    $("#starNext").addEventListener("click", () => { step = Math.min(6, step + 1); render(); });
    $("#starReset").addEventListener("click", () => { step = 0; render(); });
    render();

    // two trajectories
    const ps = sv("svg", { viewBox: "0 0 900 310", role: "img", "aria-label": "The rebel climbs and falls; Christ descends to the cross and is exalted" });
    [[45, "God’s throne"], [170, "the created order"], [282, "death · the pit"]].forEach(([y, t]) => ps.append(sv("line", { x1: 20, y1: y, x2: 880, y2: y, stroke: "var(--line)", "stroke-dasharray": y === 170 ? "" : "4 6" }), sv("text", { x: 24, y: y - 6, "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, t)));
    const helel = sv("path", { d: "M60 160 C160 150 260 90 370 58 C400 52 420 120 470 286", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    const christ = sv("path", { d: "M500 40 C540 60 570 160 610 172 C650 184 670 280 700 282 C740 284 780 80 860 26", fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    ps.append(helel, christ);
    const t = (x, y, s, c, a) => ps.append(sv("text", { x, y, "font-size": 12, "font-weight": 700, fill: c || "var(--ink)", "text-anchor": a || "start", "paint-order": "stroke", stroke: "var(--surface)", "stroke-width": 4 }, s));
    t(60, 150, "Day Star rises", "var(--flame)"); t(370, 50, "“I will be like the Most High”", "var(--flame)", "middle"); t(478, 300, "brought down to the pit", "var(--flame)");
    t(500, 32, "“in the form of God”", "var(--accent)"); t(618, 166, "“emptied himself”"); t(700, 300, "“death on a cross”", "var(--accent)", "middle"); t(860, 18, "“highly exalted”", "var(--accent)", "end");
    ps.append(sv("circle", { cx: 860, cy: 26, r: 7, fill: "var(--accent)" }), sv("circle", { cx: 470, cy: 286, r: 6, fill: "var(--flame)" }));
    const wrap = el("div", { class: "scroll-x" }, ps);
    $("#pathsStage").append(wrap);
    [helel, christ].forEach(p => { p.style.setProperty("--len", p.getTotalLength()); });
    const go = () => { helel.classList.add("go"); setTimeout(() => christ.classList.add("go"), reduceMotion ? 0 : 900); };
    if ("IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { go(); io.disconnect(); } }, { threshold: .3 });
      io.observe(wrap);
      setTimeout(go, 4000);
    } else go();
  }

  function initSeraph() {
    const svg = sv("svg", { viewBox: "0 0 520 320", role: "img", "aria-label": "A winged serpent guardian beside a winged cherub guardian" });
    // seraph: rearing winged serpent
    const s = sv("g", { transform: "translate(130 0)" });
    s.append(sv("path", { d: "M-70 120 Q-120 60 -100 30 Q-60 70 -20 110 Z", fill: "var(--accent)", opacity: .75 }), sv("path", { d: "M70 120 Q120 60 100 30 Q60 70 20 110 Z", fill: "var(--accent)", opacity: .75 }));
    s.append(sv("path", { d: "M-40 280 C-80 270 -60 240 0 240 C60 240 70 210 20 200 C-20 192 -20 160 0 140 L0 90", fill: "none", stroke: "var(--flame)", "stroke-width": 16, "stroke-linecap": "round" }));
    s.append(sv("ellipse", { cx: 0, cy: 92, rx: 22, ry: 30, fill: "var(--flame)" }), sv("circle", { cx: -7, cy: 84, r: 3, fill: "var(--accent-ink)" }), sv("circle", { cx: 7, cy: 84, r: 3, fill: "var(--accent-ink)" }));
    [-30, 0, 30].forEach((x, i) => { const f = sv("path", { d: `M${x} 60 C${x - 8} 46 ${x - 4} 38 ${x} 28 C${x + 4} 38 ${x + 8} 46 ${x} 60 Z`, fill: "var(--accent)" }); if (!reduceMotion) { f.classList.add("pulse"); f.style.animationDelay = i * .3 + "s"; } s.append(f); });
    s.append(sv("text", { x: 0, y: 306, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "Seraph · śārāph"));
    svg.append(s);
    // cherub: winged lion with human face
    const c = sv("g", { transform: "translate(390 0)" });
    c.append(sv("path", { d: "M-10 170 Q-40 60 60 40 Q20 90 30 160 Z", fill: "var(--babel)", opacity: .75 }));
    c.append(sv("rect", { x: -70, y: 170, width: 130, height: 60, rx: 28, fill: "var(--babel)" }));
    [-60, -30, 20, 46].forEach(x => c.append(sv("rect", { x, y: 222, width: 14, height: 50, rx: 6, fill: "var(--babel)" })));
    c.append(sv("circle", { cx: -78, cy: 160, r: 24, fill: "var(--babel)" }), sv("circle", { cx: -84, cy: 156, r: 3, fill: "var(--surface)" }), sv("path", { d: "M60 190 Q90 200 84 230", fill: "none", stroke: "var(--babel)", "stroke-width": 6, "stroke-linecap": "round" }));
    c.append(sv("text", { x: -10, y: 306, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, "Cherub · kərûb"));
    svg.append(c);
    svg.append(sv("text", { x: 260, y: 24, "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: "var(--muted)" }, "two pictures of a throne-guardian"));
    $("#seraphStage").append(svg);
  }

  function initCurse() {
    const box = $("#curseLines");
    const btns = DATA.curseLines.map((c, i) => { const b = el("button", { class: "verse", type: "button", "aria-pressed": "false", onclick: () => sel(i) }, el("small", { text: c.ref }), c.t); box.append(b); return b; });
    function sel(i) {
      btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      const c = DATA.curseLines[i];
      $("#curseNote").replaceChildren(el("p", { class: "eyebrow", text: c.ref }), el("p", { html: refify(c.note) }));
    }
    sel(2);
    // descent diagram
    const L = [["Mountain of God", 60], ["Heaven", 140], ["Earth · ʾereṣ", 230], ["Dust", 310], ["Sheol · the pit · abyss", 400], ["Lake of fire", 490]];
    const svg = sv("svg", { viewBox: "0 0 420 540", role: "img", "aria-label": "The serpent's descent through Scripture from God's mountain to the lake of fire" });
    svg.append(sv("polygon", { points: "300,92 360,26 420,92", fill: "var(--eden)", "fill-opacity": .45 }));
    const tree = sv("g", { opacity: 0, style: { transition: "opacity .8s" } }, sv("circle", { cx: 360, cy: 30, r: 26, fill: "var(--accent)", opacity: .3, class: "pulse" }), sv("rect", { x: 357, y: 26, width: 6, height: 22, fill: "var(--ink)", opacity: .6 }), sv("circle", { cx: 360, cy: 22, r: 13, fill: "var(--eden)" }));
    svg.append(tree);
    svg.append(sv("rect", { x: 0, y: 470, width: 420, height: 70, fill: "var(--flame)", "fill-opacity": .18 }), sv("rect", { x: 0, y: 380, width: 420, height: 90, fill: "var(--ink)", "fill-opacity": .07 }));
    L.forEach(([n, y]) => svg.append(sv("line", { x1: 150, y1: y, x2: 410, y2: y, stroke: "var(--line)", "stroke-dasharray": "3 5" }), sv("text", { x: 146, y: y + 4, "text-anchor": "end", "font-size": 11, "font-weight": 700, fill: "var(--muted)" }, n)));
    const trail = sv("polyline", { fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-dasharray": "5 5", "stroke-linecap": "round" });
    svg.append(trail);
    const marker = sv("g", { style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1), opacity .6s" } },
      sv("circle", { r: 16, fill: "var(--flame)", opacity: .2, class: "pulse" }),
      sv("path", { d: "M-11 6 C-6 -6 0 10 5 -2 C8 -9 12 -6 12 -6", fill: "none", stroke: "var(--flame)", "stroke-width": 4, "stroke-linecap": "round" }), sv("circle", { cx: 12, cy: -6, r: 3.5, fill: "var(--flame)" }));
    svg.append(marker);
    $("#descentStage").append(svg);
    const D = DATA.descent;
    const pos = i => { const d = D[i]; return [175 + i * 27, d.lvl < 0 ? 30 : L[d.lvl][1]]; };
    let i = 0;
    function go(n) {
      i = Math.max(0, Math.min(D.length - 1, n));
      const d = D[i], [x, y] = pos(i);
      marker.style.transform = `translate(${x}px, ${y}px)`;
      marker.style.opacity = d.lvl < 0 ? 0 : 1;
      tree.setAttribute("opacity", d.lvl < 0 ? 1 : 0);
      trail.setAttribute("points", D.slice(0, i + 1).filter(s => s.lvl >= 0).map((s, j) => pos(j).join(",")).join(" "));
      $("#descentPanel").replaceChildren(el("p", { class: "eyebrow", text: `Step ${i + 1} of ${D.length}` }), el("h3", { text: d.title }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.text) }));
      $("#descNext").disabled = i === D.length - 1;
    }
    $("#descNext").addEventListener("click", () => go(i + 1));
    $("#descPrev").addEventListener("click", () => go(i - 1));
    go(0);
  }

  function initSeedWar() {
    const E = DATA.seedWar, W = 1300, H = 340, dx = (W - 210) / (E.length - 1);
    const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Timeline of the woman's seed and the serpent's attacks from Genesis to Revelation" });
    const yS = 128, yA = 236;
    svg.append(sv("text", { x: 14, y: 30, "font-size": 12, "font-weight": 800, fill: "var(--accent)", "letter-spacing": 2 }, "THE WOMAN’S SEED"), sv("text", { x: 14, y: H - 12, "font-size": 12, "font-weight": 800, fill: "var(--flame)", "letter-spacing": 2 }, "THE SERPENT STRIKES"));
    const X = i => 50 + i * dx;
    let d = `M${X(0)} ${yS}`;
    for (let i = 1; i < E.length; i++) { const mx = (X(i - 1) + X(i)) / 2; d += ` Q${mx} ${yS + (i % 2 ? -18 : 18)} ${X(i)} ${yS}`; }
    const line = sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 4, "stroke-linecap": "round", class: "draw" });
    const snake = sv("path", { d: E.map((e, i) => `${i ? "L" : "M"}${X(i)} ${yA + (i % 2 ? 10 : -10)}`).join(" "), fill: "none", stroke: "var(--flame)", "stroke-width": 2, "stroke-dasharray": "2 7", opacity: .6 });
    svg.append(snake, line);
    const evs = E.map((e, i) => {
      const x = X(i), seedK = e.k === "seed";
      const g = sv("g", { class: "ev", tabindex: "0", role: "button", "aria-label": e.n });
      if (!seedK) g.append(sv("path", { d: `M${x} ${yA - 12} L${x - 6} ${yA - 46} L${x + 5} ${yA - 56} L${x - 2} ${yS + 10}`, fill: "none", stroke: "var(--flame)", "stroke-width": 2.5, "stroke-linejoin": "round" }));
      const y = seedK ? yS : yA;
      g.append(sv("circle", { cx: x, cy: y, r: seedK ? 9 : 8, fill: seedK ? "var(--accent)" : "var(--flame)", stroke: "var(--surface)", "stroke-width": 2 }));
      const ty = seedK ? yS - 22 : yA + 24;
      g.append(sv("text", { x, y: ty, transform: `rotate(${seedK ? -28 : 28} ${x} ${ty})`, "text-anchor": seedK ? "start" : "start" }, e.n));
      g.addEventListener("click", () => { stop(); sel(i); });
      g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); stop(); sel(i); } });
      svg.append(g);
      return g;
    });
    $("#seedWar").append(svg);
    line.style.setProperty("--len", line.getTotalLength());
    line.classList.add("go");
    function sel(i) {
      evs.forEach((g, j) => g.classList.toggle("on", j === i));
      const e = E[i];
      $("#seedPanel").replaceChildren(el("p", { class: "eyebrow", style: { color: e.k === "seed" ? "var(--accent)" : "var(--flame)" }, text: (e.k === "seed" ? "The woman’s seed" : "The serpent strikes") + ` · ${i + 1} of ${E.length}` }),
        el("h3", { text: e.n }), el("span", { class: "ref", text: e.ref }), el("p", { html: refify(e.text) }));
      const wrap = $("#seedWar");
      const x = X(i) / W * wrap.scrollWidth - wrap.clientWidth / 2;
      if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: Math.max(0, x), behavior: reduceMotion ? "auto" : "smooth" });
    }
    let timer = null;
    function stop() { clearInterval(timer); evs.forEach(g => g.classList.remove("hide")); }
    $("#seedPlay").addEventListener("click", () => {
      clearInterval(timer);
      line.classList.remove("go"); void line.getBoundingClientRect();
      evs.forEach(g => g.classList.add("hide"));
      let i = 0;
      const step = () => { evs[i].classList.remove("hide"); sel(i); i++; if (i >= E.length) clearInterval(timer); };
      requestAnimationFrame(() => { line.style.transition = `stroke-dashoffset ${E.length * 1.6}s linear`; line.classList.add("go"); });
      step(); timer = setInterval(step, 1600);
    });
    sel(0);
  }

  function initBronze() {
    const svg = sv("svg", { viewBox: "0 0 400 380", role: "img", "aria-label": "The bronze serpent on a pole, with bitten people looking up and being healed" });
    svg.append(sv("circle", { cx: 200, cy: 150, r: 110, fill: "var(--accent)", opacity: .12, class: "pulse" }));
    svg.append(sv("rect", { x: 196, y: 60, width: 8, height: 280, rx: 3, fill: "#8c6a2c" }), sv("rect", { x: 170, y: 74, width: 60, height: 7, rx: 3, fill: "#8c6a2c" }));
    let d = "M200 92";
    for (let y = 92, k = 0; y < 250; y += 20, k++) d += ` Q${k % 2 ? 176 : 224} ${y + 10} 200 ${y + 20}`;
    svg.append(sv("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 9, "stroke-linecap": "round" }), sv("path", { d: "M200 92 Q214 70 236 76", fill: "none", stroke: "var(--accent)", "stroke-width": 9, "stroke-linecap": "round" }), sv("circle", { cx: 238, cy: 76, r: 8, fill: "var(--accent)" }));
    const sights = sv("g", { opacity: 0, style: { transition: "opacity .8s" } });
    svg.append(sights);
    const people = [];
    for (let i = 0; i < 14; i++) {
      const a = Math.PI * (0.08 + 0.84 * i / 13), x = 200 - Math.cos(a) * 170, y = 352 - Math.sin(a) * 34;
      sights.append(sv("line", { x1: x, y1: y - 18, x2: 220, y2: 150, stroke: "var(--accent)", "stroke-width": 1, "stroke-dasharray": "2 5" }));
      const p = sv("g", { class: "person", style: { transformBox: "fill-box" } }, sv("circle", { cx: x, cy: y - 22, r: 6 }), sv("rect", { x: x - 6, y: y - 15, width: 12, height: 18, rx: 5 }));
      p.setAttribute("fill", "var(--flame)");
      people.push(p); svg.append(p);
    }
    $("#poleStage").append(svg);
    let t = [];
    $("#lookBtn").addEventListener("click", () => {
      t.forEach(clearTimeout); t = [];
      sights.setAttribute("opacity", 1);
      people.forEach((p, i) => t.push(setTimeout(() => { p.setAttribute("fill", "var(--eden)"); p.style.transform = "translateY(-6px)"; }, reduceMotion ? 0 : 200 + i * 160)));
    });
    $("#lookReset").addEventListener("click", () => { t.forEach(clearTimeout); sights.setAttribute("opacity", 0); people.forEach(p => { p.setAttribute("fill", "var(--flame)"); p.style.transform = ""; }); });
    $("#neboPhoto").append(photo("nebo"));
    ["fall", "dragon"].forEach(k => $("#serpentGallery").append(photo(k)));
    $("#serpentGallery").style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
  }

  /* ---------------- Multi-page chrome: active page, table of contents, home cards ---------------- */
  function initPages() {
    const pageEl = $(".page");
    const id = pageEl ? pageEl.dataset.page : "home";
    $$(".nav a").forEach(a => {
      const on = a.dataset.p === id;
      a.classList.toggle("active", on);
      if (on) { a.setAttribute("aria-current", "page"); const nav = a.parentElement; if (nav.scrollWidth > nav.clientWidth) nav.scrollLeft = a.offsetLeft - 16; }
    });
    $$(".toc").forEach(toc => {
      $$("main section.block").forEach(sec => {
        const h = $(".sec-head h2, .sec-head h3, h2", sec);
        if (!sec.id || !h) return;
        const label = sec.dataset.toc || h.textContent.replace(/[“”"]/g, "").split(/[:,(]/)[0].trim();
        toc.append(el("a", { href: "#" + sec.id, text: label }));
      });
    });
    $$(".pc-art").forEach(n => n.append(fallbackArt(n.dataset.art, "4/3")));
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 60); }
  }

  function boot() {
    // [init function, element it needs]; each runs only on pages that contain its section
    const steps = [[initSchemes], [initPages], [initHero, "#heroSvg"], [initClues, "#clueGrid"], [initMountain, "#mtnStage"], [initTabernacle, "#tabStage"],
      [initArk, "#arkStage"], [initArkMap, "#arkMapStage"], [initTabsContent], [initMenorah, "#menorahStage"], [initStory, "#storyTl"], [initPhotos], [initMirror, "#mirror"],
      [initNachash, "#nachashStage"], [initNotSnake, "#notSnake"], [initCherub, "#gems"], [initMorningStar, "#starStage"], [initSeraph, "#seraphStage"],
      [initCurse, "#curseLines"], [initSeedWar, "#seedWar"], [initBronze, "#poleStage"],
      [initMap, "#mapStage"], [initZiggurat, "#zigStage"], [initGen, "#genLine"], [initNations, "#nationsStage"], [initLadder, "#ladderStage"],
      [initPentecost, "#compare"], [initCities, "#lanes"], [initWeb, "#webStage"], [initQuiz, "#quizBox"], [initSources, "#sourceList"], [initScroll]];
    steps.forEach(([fn, need]) => { if (need && !$(need)) return; try { fn(); } catch (err) { console.error(fn.name, err); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
