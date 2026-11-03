  /* ================ Part IV add-on: Supply and Support (Isaiah 3) ================ */
  const ROLE = { king: ["Kingly", "var(--babel)"], priest: ["Priestly", "var(--eden)"], both: ["King & priest", "var(--accent)"] };

  function initSsMap() {
    const targets = ["ss-net", "ss-judgment", "ss-build", "ss-build", "ss-came", "ss-worship", "ss-gate", "ss-orphan", "ss-babylons", "ss-daniels", "ss-accord"];
    $("#ssMap").append(...DATA.ss.map.map((m, i) => el("a", { class: "sscard reveal", href: "#" + targets[i], style: { borderLeftColor: ROLE[m.role][1] } },
      el("span", { class: "ssnum", text: String(i + 1) }), el("b", { text: m.n }), el("span", { class: "sstag", style: { background: ROLE[m.role][1] }, text: ROLE[m.role][0] }), el("small", { text: m.t }))));
  }

  function initSsNet() {
    const svg = sv("svg", { viewBox: "0 0 540 360", role: "img", "aria-label": "Fishing boats and a net that holds or breaks depending on supply and support" });
    svg.append(sv("rect", { width: 540, height: 150, fill: "var(--babel)", "fill-opacity": .06 }), sv("rect", { y: 150, width: 540, height: 210, fill: "var(--babel)", "fill-opacity": .25 }));
    const boat = (x) => sv("g", { style: { transition: "transform 1s cubic-bezier(.4,.1,.2,1)", transformBox: "fill-box", transformOrigin: "center" } },
      sv("path", { d: `M${x} 140 L${x + 150} 140 L${x + 128} 172 L${x + 22} 172 Z`, fill: "#7a5530" }), sv("line", { x1: x + 75, y1: 140, x2: x + 75, y2: 60, stroke: "#7a5530", "stroke-width": 4 }), sv("path", { d: `M${x + 79} 66 L${x + 128} 120 L${x + 79} 120 Z`, fill: "var(--surface)", stroke: "var(--line)" }));
    const b1 = boat(40), b2 = boat(330);
    svg.append(b1, b2);
    const rope = sv("path", { d: "M190 160 Q270 190 350 160", fill: "none", stroke: "#b08a5a", "stroke-width": 3, "stroke-dasharray": "6 5" });
    svg.append(rope);
    const mesh = sv("g", { stroke: "var(--ink)", "stroke-opacity": .55, fill: "none" });
    for (let i = 0; i <= 8; i++) mesh.append(sv("line", { x1: 80 + i * 22, y1: 172, x2: 100 + i * 17, y2: 320 }));
    for (let j = 0; j <= 6; j++) { const y = 180 + j * 23; mesh.append(sv("line", { x1: 80 + j * 3, y1: y, x2: 256 - j * 3, y2: y })); }
    svg.append(mesh);
    const tear = sv("g", { opacity: 0, style: { transition: "opacity .6s" } }, sv("path", { d: "M150 270 L162 290 L150 306 L168 322 L176 300 L190 318", fill: "none", stroke: "var(--flame)", "stroke-width": 4 }), sv("text", { x: 168, y: 346, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--flame)" }, "the net is breaking"));
    let seed = 9; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const fish = Array.from({ length: 48 }, () => { const x = 92 + rnd() * 150, y = 190 + rnd() * 120; const f = sv("g", { style: { transition: "transform 1.2s ease-in, opacity .8s" } }, sv("ellipse", { cx: x, cy: y, rx: 8, ry: 4, fill: "var(--accent)" }), sv("path", { d: `M${x + 7} ${y} L${x + 13} ${y - 4} L${x + 13} ${y + 4} Z`, fill: "var(--accent)" })); svg.append(f); return f; });
    svg.append(tear);
    const label = sv("text", { x: 270, y: 30, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(label);
    $("#ssNet").append(svg);
    const sup = $("#ssSupply"), spt = $("#ssSupport");
    function upd() {
      const s = +sup.value, p = +spt.value, diff = s - p, st = DATA.ss.net.states.find(x => diff < x.max);
      const n = Math.round(s / 100 * fish.length), broken = diff >= 25;
      fish.forEach((f, i) => { const on = i < n; f.style.opacity = on ? 1 : 0; f.style.transform = broken && on && i % 3 === 0 ? "translateY(60px)" : ""; });
      mesh.setAttribute("stroke-width", .6 + p / 22);
      tear.setAttribute("opacity", broken ? 1 : 0);
      b1.style.transform = broken ? "translateY(26px) rotate(7deg)" : "";
      const partner = p >= 50;
      b2.style.opacity = partner ? 1 : .25; rope.style.opacity = partner ? 1 : 0;
      b2.style.transform = broken && partner ? "translateY(14px) rotate(-4deg)" : "";
      label.textContent = st.t;
      $("#ssNetInfo").replaceChildren(...[el("h3", { text: st.t }), el("span", { class: "ref", text: DATA.ss.net.verse }), el("p", { html: refify(st.d) }), partner ? el("p", { class: "muted", text: "Strong support means partners: “they signalled to their partners in the other boat to come and help them.”" }) : null].filter(Boolean));
    }
    sup.addEventListener("input", upd); spt.addEventListener("input", upd); upd();
    $("#ssWant").append(document.createTextNode(DATA.ss.want.q), el("cite", { text: DATA.ss.want.d }));
  }

  function initSsPillars() {
    const P = DATA.ss.pillars, svg = sv("svg", { viewBox: "0 0 580 380", role: "img", "aria-label": "A building held up by six pillars of a nation's supply and support" });
    const roof = sv("g", { style: { transition: "transform 1s cubic-bezier(.5,0,.6,1)", transformBox: "view-box", transformOrigin: "290px 90px" } },
      sv("path", { d: "M40 90 L290 20 L540 90 Z", fill: "var(--accent)", "fill-opacity": .5, stroke: "var(--accent)", "stroke-width": 2 }), sv("rect", { x: 40, y: 90, width: 500, height: 22, fill: "var(--accent)", "fill-opacity": .7 }),
      sv("text", { x: 290, y: 70, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "a nation’s order"));
    svg.append(sv("rect", { x: 30, y: 320, width: 520, height: 20, fill: "var(--muted)", "fill-opacity": .5 }), sv("rect", { x: 20, y: 340, width: 540, height: 16, fill: "var(--muted)", "fill-opacity": .35 }));
    const pillars = P.map((p, i) => {
      const x = 62 + i * 82;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": p.n, style: { transition: `transform .9s cubic-bezier(.5,0,.7,1) ${i * .15}s, opacity .9s ${i * .15}s`, transformBox: "fill-box", transformOrigin: "bottom center" } },
        sv("rect", { class: "pil", x, y: 112, width: 44, height: 208, fill: i === 0 ? "var(--eden)" : "var(--surface)", "fill-opacity": i === 0 ? .5 : 1, stroke: "var(--ink)", "stroke-opacity": .4, "stroke-width": 2 }),
        ...[0, 1, 2].map(k => sv("line", { x1: x + 11 + k * 11, y1: 118, x2: x + 11 + k * 11, y2: 314, stroke: "var(--line)" })),
        sv("text", { x: x + 22, y: 216, "text-anchor": "middle", "font-size": 11.5, "font-weight": 800, fill: "var(--ink)", transform: `rotate(-90 ${x + 22} 216)` }, p.n)), () => sel(i));
      svg.append(g); return g;
    });
    svg.append(roof);
    const kids = sv("text", { x: 290, y: 300, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--flame)", opacity: 0, style: { transition: "opacity .6s 1.2s" } }, "“boys their princes … infants shall rule”");
    svg.append(kids);
    $("#ssPillars").append(svg);
    function sel(i) { pillars.forEach((g, j) => $(".pil", g).setAttribute("stroke-width", j === i ? 5 : 2)); const p = P[i]; $("#ssPillarPanel").replaceChildren(el("p", { class: "eyebrow", text: i === 0 ? "Supply" : "Support" }), el("h3", { text: p.n }), el("span", { class: "ref", text: p.ref }), el("p", { html: refify(p.d) })); }
    $("#ssRemove").addEventListener("click", () => { pillars.forEach((g, i) => { g.style.transform = `rotate(${i % 2 ? 78 : -78}deg) translateY(10px)`; g.style.opacity = .25; }); roof.style.transform = "translateY(150px) rotate(-5deg)"; kids.setAttribute("opacity", 1); });
    $("#ssRestore").addEventListener("click", () => { pillars.forEach(g => { g.style.transform = ""; g.style.opacity = 1; }); roof.style.transform = ""; kids.setAttribute("opacity", 0); });
    sel(2);
    $("#ssCollapse").append(...DATA.ss.collapse.map(c => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: c.ref }), el("p", { html: refify(c.t) })))));
  }

  function initSsBuild() {
    const svg = sv("svg", { viewBox: "0 0 540 320", role: "img", "aria-label": "A wall of identical bricks beside a wall of uncut living stones" });
    svg.append(sv("line", { x1: 10, y1: 280, x2: 530, y2: 280, stroke: "var(--line)", "stroke-width": 3 }));
    const blocks = [], left = sv("g"), right = sv("g");
    for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) {
      const b = sv("rect", { x: 22 + c * 44 + (r % 2 ? 22 : 0) - (r % 2 && c === 4 ? 0 : 0), y: 248 - r * 32, width: 40, height: 28, rx: 2, fill: "#b4553a", stroke: "#7a3020", style: { transition: "opacity .3s, transform .4s" } });
      if (r % 2 && c === 4) continue;
      left.append(b); blocks.push([b, r]);
    }
    let seed = 4; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
      const cx = 318 + c * 56 + (r % 2 ? 26 : 0), cy = 254 - r * 38, pts = Array.from({ length: 7 }, (_, k) => { const a = k / 7 * Math.PI * 2, rr = 22 + rnd() * 8; return `${(cx + Math.cos(a) * rr * 1.2).toFixed(1)},${(cy + Math.sin(a) * rr * .8).toFixed(1)}`; }).join(" ");
      if (cx > 520) continue;
      const s = sv("polygon", { points: pts, fill: "#a7a29a", stroke: "#6b6660", "stroke-width": 1.5, style: { transition: "opacity .3s, transform .4s" } });
      right.append(s); blocks.push([s, r]);
    }
    svg.append(left, right, sv("text", { x: 130, y: 306, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--flame)" }, "Babel · bricks"), sv("text", { x: 410, y: 306, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--eden)" }, "Bethel · living stones"),
      sv("text", { x: 130, y: 22, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "made by hands · uniform · “check their CV”"), sv("text", { x: 410, y: 22, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)", "font-weight": 700 }, "shaped by life · each one different"));
    $("#ssWalls").append(svg);
    const tg = $("#ssBuildToggle"), box = $("#ssBuild");
    function set(k) {
      $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.k === k)));
      left.style.opacity = k === "babel" ? 1 : .35; right.style.opacity = k === "bethel" ? 1 : .35;
      box.classList.toggle("twisted", k === "babel");
      box.replaceChildren(...DATA.ss.build[k].map(r => el("div", { class: "crow" }, el("b", { text: r[0] }), el("p", { class: "cval", html: refify(r[1]) }))));
    }
    [["babel", "Babel"], ["bethel", "Bethel"]].forEach(([k, n]) => tg.append(el("button", { class: "chip", type: "button", "data-k": k, text: n, onclick: () => set(k) })));
    set("bethel");
    $("#ssBuildBtn").addEventListener("click", () => { blocks.forEach(([b]) => { b.style.transition = "none"; b.style.opacity = 0; b.style.transform = "translateY(-30px)"; }); requestAnimationFrame(() => requestAnimationFrame(() => blocks.forEach(([b, r], i) => { b.style.transition = reduceMotion ? "none" : `opacity .3s ${r * .25 + (i % 5) * .04}s, transform .4s ${r * .25 + (i % 5) * .04}s`; b.style.opacity = 1; b.style.transform = ""; }))); });
  }

  function initSsArena() {
    const A = DATA.ss.arenas, svg = sv("svg", { viewBox: "0 0 460 420", role: "img", "aria-label": "Three arenas: the throne, the angelic conflict, and the human arena at Babel" });
    const fills = ["var(--accent)", "var(--babel)", "var(--eden)"];
    const bands = A.map((a, i) => { const y = 20 + i * 132; const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": a.n }, sv("rect", { class: "ab", x: 20, y, width: 420, height: 120, rx: 14, fill: fills[i], "fill-opacity": .14, stroke: fills[i], "stroke-width": 2 }), sv("text", { x: 40, y: y + 26, "font-size": 13, "font-weight": 800, "letter-spacing": 1.5, fill: fills[i] }, a.n.toUpperCase())), () => sel(i)); svg.append(g); return g; });
    // throne
    bands[0].append(sv("rect", { x: 210, y: 50, width: 40, height: 50, rx: 4, fill: "var(--accent)" }), sv("rect", { x: 200, y: 96, width: 60, height: 10, fill: "var(--accent)" }), sv("circle", { cx: 230, cy: 66, r: 30, fill: "var(--accent)", opacity: .15, class: "pulse" }), sv("text", { x: 300, y: 84, "font-size": 12, "font-weight": 700, fill: "var(--ink)" }, "seated, unmoved"));
    // angels
    bands[1].append(sv("circle", { cx: 180, cy: 200, r: 14, fill: "var(--babel)" }), sv("path", { d: "M170 212 L190 212 L196 250 L164 250 Z", fill: "var(--babel)" }), sv("line", { x1: 196, y1: 214, x2: 236, y2: 186, stroke: "var(--accent)", "stroke-width": 4 }),
      sv("circle", { cx: 290, cy: 204, r: 14, fill: "var(--flame)" }), sv("path", { d: "M280 216 L300 216 L306 250 L274 250 Z", fill: "var(--flame)" }), sv("text", { x: 230, y: 168, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "“The Lord rebuke you”"));
    // human
    bands[2].append(...[0, 1, 2, 3].map(i => sv("rect", { x: 200 + i * 8, y: 360 - i * 20, width: 80 - i * 16, height: 20, fill: "var(--babel)", opacity: .6 + i * .1 })), sv("path", { d: "M330 40 C 360 160 340 260 300 300", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "6 6", class: "flow" }), sv("text", { x: 350, y: 330, "font-size": 12, "font-weight": 800, fill: "var(--ink)" }, "“the LORD came down”"));
    $("#ssArena").append(svg);
    function sel(i) { bands.forEach((g, j) => $(".ab", g).setAttribute("fill-opacity", j === i ? .32 : .14)); const a = A[i]; $("#ssArenaPanel").replaceChildren(el("p", { class: "eyebrow", text: `Arena ${i + 1} of 3` }), el("h3", { text: a.n }), el("span", { class: "ref", text: a.ref }), el("p", { html: refify(a.d) })); }
    sel(2);
  }

  function initSsWorship() {
    const svg = sv("svg", { viewBox: "0 0 900 220", role: "img", "aria-label": "Sound waves: confused when everyone plays their own song, aligned in one accord" });
    const cols = ["var(--babel)", "var(--flame)", "var(--eden)", "var(--accent)", "#6b3a8f", "var(--muted)"];
    const waves = cols.map((c, i) => { const p = sv("path", { fill: "none", stroke: c, "stroke-width": 3, opacity: .8 }); svg.append(p); return p; });
    const cap = sv("text", { x: 450, y: 210, "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, "");
    svg.append(cap);
    $("#ssSound").append(svg);
    let mode = "chaos", t = 0, raf = null;
    const draw = () => {
      waves.forEach((p, i) => {
        let d = "";
        for (let x = 0; x <= 900; x += 10) {
          const y = mode === "chaos" ? 100 + Math.sin(x * (0.01 + i * 0.013) + t * (1 + i * .7) + i * 2) * (24 + i * 7) + Math.sin(x * 0.05 * (i + 1) + t * 3) * 10 : 100 + Math.sin(x * 0.02 + t * 1.4) * 40 + (i - 2.5) * 2;
          d += (x ? "L" : "M") + x + " " + y.toFixed(1);
        }
        p.setAttribute("d", d); p.setAttribute("stroke", mode === "chaos" ? cols[i] : "var(--accent)");
      });
      t += .04;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };
    const tg = $("#ssSoundToggle");
    function set(m) { mode = m; $$(".chip", tg).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.m === m))); cap.textContent = m === "chaos" ? "Everyone their own song: confusion (Babel)" : "One accord: many voices, one sound (Acts 2:1)"; cancelAnimationFrame(raf); draw(); }
    [["chaos", "Everyone their own song"], ["one", "One accord"]].forEach(([m, n]) => tg.append(el("button", { class: "chip", type: "button", "data-m": m, text: n, onclick: () => set(m) })));
    set("chaos");
    $("#ssWorship").append(...DATA.ss.worship.map(w => el("div", { class: "card" }, el("p", { class: "eyebrow", text: w.ref }), el("h3", { text: w.t }), el("p", { html: refify(w.d) }))));
  }

  function initSsGate() {
    const G = DATA.ss.gate, svg = sv("svg", { viewBox: "0 0 520 360", role: "img", "aria-label": "A city gate where a gatekeeper decides what enters" });
    svg.append(sv("rect", { x: 300, y: 40, width: 200, height: 280, fill: "var(--accent)", "fill-opacity": .08 }), sv("text", { x: 420, y: 66, "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "var(--accent)" }, "THE CHURCH · THE CITY"));
    svg.append(sv("path", { d: "M270 320 L270 120 L330 120 L330 320 Z M282 320 L282 180 Q300 150 318 180 L318 320 Z", fill: "var(--muted)", "fill-rule": "evenodd" }), sv("rect", { x: 270, y: 20, width: 60, height: 300, fill: "none" }));
    svg.append(sv("rect", { x: 270, y: 40, width: 12, height: 280, fill: "var(--muted)" }), sv("rect", { x: 318, y: 40, width: 12, height: 280, fill: "var(--muted)" }));
    svg.append(sv("circle", { cx: 350, cy: 262, r: 11, fill: "#c99a6e" }), sv("path", { d: "M340 274 L360 274 L364 318 L336 318 Z", fill: "var(--babel)" }), sv("text", { x: 350, y: 340, "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "var(--ink)" }, "gatekeeper"));
    const tokens = G.map((g, i) => {
      const y = 40 + i * 48;
      const t = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": g.n, style: { transition: reduceMotion ? "none" : "transform .9s cubic-bezier(.4,.1,.2,1)" } },
        sv("rect", { class: "tk", x: 20, y, width: 150, height: 36, rx: 18, fill: "var(--surface)", stroke: g.ok ? "var(--eden)" : "var(--flame)", "stroke-width": 2 }),
        sv("text", { x: 95, y: y + 23, "text-anchor": "middle", "font-size": 12.5, "font-weight": 800, fill: "var(--ink)" }, g.n)), () => sel(i));
      svg.append(t); return t;
    });
    const cross = sv("path", { d: "M286 196 L314 224 M314 196 L286 224", stroke: "var(--flame)", "stroke-width": 7, "stroke-linecap": "round", opacity: 0, style: { transition: "opacity .4s .8s" } });
    svg.append(cross);
    $("#ssGate").append(svg);
    function sel(i) {
      const g = G[i];
      tokens.forEach((t, j) => { t.style.transform = j === i ? (g.ok ? `translate(${310 - 0}px, ${170 - (40 + j * 48)}px)` : `translate(${100}px, ${190 - (40 + j * 48)}px)`) : ""; });
      cross.setAttribute("opacity", g.ok ? 0 : 1);
      $("#ssGatePanel").replaceChildren(el("p", { class: "eyebrow", style: { color: g.ok ? "var(--eden)" : "var(--flame)" }, text: g.ok ? "Welcomed through the gate" : "Stopped at the gate" }), el("h3", { text: g.n }), el("span", { class: "ref", text: g.ref }), el("p", { html: refify(g.d) }));
    }
    sel(4);
    // Psalm 1 steps
    const st = sv("svg", { viewBox: "0 0 420 260", role: "img", "aria-label": "Three descending steps: walk, stand, sit" });
    [0, 1, 2].forEach(i => st.append(sv("rect", { x: 30 + i * 120, y: 60 + i * 60, width: 360 - i * 120, height: 200 - i * 60, fill: "var(--flame)", "fill-opacity": .08 + i * .1 }), sv("text", { x: 50 + i * 120, y: 84 + i * 60, "font-size": 13, "font-weight": 800, fill: "var(--ink)" }, DATA.ss.psalm1[i].v.toUpperCase())));
    const fig = sv("g", { style: { transition: reduceMotion ? "none" : "transform .8s cubic-bezier(.4,.1,.2,1)" } });
    const body = sv("path", { d: "M-8 0 L8 0 L10 40 L-10 40 Z", fill: "var(--babel)" });
    const head = sv("circle", { cx: 0, cy: -12, r: 10, fill: "#c99a6e" });
    fig.append(head, body);
    st.append(fig);
    $("#ssSteps").append(st);
    const r = $("#ssStepRange");
    const upd = () => { const i = +r.value, p = DATA.ss.psalm1[i]; fig.style.transform = `translate(${90 + i * 120}px, ${18 + i * 60 + (i === 2 ? 14 : 0)}px)`; body.setAttribute("d", i === 2 ? "M-8 0 L8 0 L22 22 L22 26 L-8 26 Z" : "M-8 0 L8 0 L10 40 L-10 40 Z"); $("#ssStepInfo").replaceChildren(el("h3", { text: `${p.v} ${p.t}` }), el("p", { html: refify(p.d) }), el("p", { class: "muted", html: refify("The opposite of gossip is covering: Shem and Japheth “walked backward and covered the nakedness of their father” (Gen 9:23).") })); };
    r.addEventListener("input", upd); upd();
  }

  function initSsStairs() {
    const S = DATA.ss.stages, svg = sv("svg", { viewBox: "0 0 540 340", role: "img", "aria-label": "A staircase from orphan to mature son" });
    const steps = S.map((s, i) => {
      const x = 20 + i * 100, y = 280 - i * 52;
      const g = hit(sv("g", { class: "fnode", tabindex: "0", role: "button", "aria-label": s.n }, sv("rect", { class: "stp", x, y, width: 100, height: 340 - y, fill: i === 4 ? "var(--accent)" : "var(--eden)", "fill-opacity": .15 + i * .12, stroke: "var(--surface)", "stroke-width": 2 }),
        sv("text", { x: x + 50, y: y + 22, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "var(--ink)", "font-style": "italic" }, s.g), sv("text", { x: x + 50, y: y + 40, "text-anchor": "middle", "font-size": 12, fill: "var(--ink)", "font-weight": 700 }, s.n)), () => sel(i));
      svg.append(g); return g;
    });
    const fig = sv("g", { style: { transition: reduceMotion ? "none" : "transform .7s cubic-bezier(.4,.1,.2,1)" } }, sv("circle", { cx: 0, cy: -36, r: 9, fill: "#c99a6e" }), sv("path", { d: "M-8 -26 L8 -26 L10 0 L-10 0 Z", fill: "var(--babel)" }));
    const crown = sv("path", { d: "M-9 -46 L-9 -54 L-4 -50 L0 -57 L4 -50 L9 -54 L9 -46 Z", fill: "var(--accent)", opacity: 0, style: { transition: "opacity .4s" } });
    fig.append(crown); svg.append(fig);
    $("#ssStairs").append(svg);
    function sel(i) {
      steps.forEach((g, j) => $(".stp", g).setAttribute("stroke", j === i ? "var(--ink)" : "var(--surface)"));
      fig.style.transform = `translate(${70 + i * 100}px, ${280 - i * 52}px)`; crown.setAttribute("opacity", i === 4 ? 1 : 0);
      const s = S[i];
      $("#ssStairPanel").replaceChildren(el("p", { class: "eyebrow", text: `Stage ${i + 1} of ${S.length}` }), el("h3", { text: `${s.g} · ${s.n}` }), el("p", { html: refify(s.d) }),
        el("div", { class: "row warn" }, el("b", { text: "The orphan spirit" }), el("p", { html: refify(DATA.ss.tenants.d + " (" + DATA.ss.tenants.ref + ")") })));
    }
    sel(0);
  }

  function initSsBabylons() {
    const B = DATA.ss.babylons;
    const icons = {
      tower: () => [...[0, 1, 2, 3].map(i => sv("rect", { x: 20 + i * 10, y: 80 - i * 18, width: 80 - i * 20, height: 18, fill: "var(--babel)", opacity: .6 + i * .1 }))],
      scroll: () => [sv("rect", { x: 30, y: 30, width: 60, height: 70, rx: 4, fill: "var(--surface)", stroke: "var(--accent)", "stroke-width": 3 }), ...[0, 1, 2, 3].map(i => sv("line", { x1: 40, y1: 46 + i * 13, x2: 80, y2: 46 + i * 13, stroke: "var(--muted)", "stroke-width": 3 })), sv("circle", { cx: 30, cy: 30, r: 8, fill: "var(--accent)" }), sv("circle", { cx: 90, cy: 100, r: 8, fill: "var(--accent)" })],
      phone: () => [sv("rect", { x: 38, y: 18, width: 44, height: 84, rx: 8, fill: "var(--ink)" }), sv("rect", { x: 42, y: 26, width: 36, height: 64, rx: 3, fill: "var(--flame)", opacity: .7 }), ...[0, 1, 2].map(i => sv("path", { d: `M${92 + i * 6} ${40 + i * 4} Q${100 + i * 8} 60 ${92 + i * 6} ${80 - i * 4}`, fill: "none", stroke: "var(--flame)", "stroke-width": 2 }))]
    };
    const cards = B.map((b, i) => { const c = el("button", { class: "bcard", type: "button", onclick: () => sel(i) }, el("span", { class: "bver", text: "Babylon " + b.v }), sv("svg", { viewBox: "0 0 120 120", class: "bicon", "aria-hidden": "true" }, ...icons[b.icon]()), el("b", { text: b.n }), el("small", { text: b.who + " · " + b.weapon })); if (i < 2) c.append(el("span", { class: "barrow", "aria-hidden": "true", text: "→" })); $("#ssBabylons").append(c); return c; });
    function sel(i) { cards.forEach((c, j) => c.classList.toggle("on", j === i)); const b = B[i]; $("#ssBabylonPanel").replaceChildren(el("p", { class: "eyebrow", text: `Babylon ${b.v} · led by ${b.who}` }), el("h3", { text: b.n }), el("span", { class: "ref", text: b.ref }), el("div", { class: "row warn" }, el("b", { text: "What Satan weaponises" }), el("p", { text: b.weapon })), el("p", { html: refify(b.how) })); }
    sel(2);
    $("#ssDaniel").append(...DATA.ss.daniel.map(d => el("li", { class: "card reveal" }, el("b", { text: d.t }), el("span", { class: "ref", text: d.ref }), el("small", { class: "muted", text: d.d }))));
  }

  function initSsDaniels() {
    $("#ssDaniels").append(...DATA.ss.daniels.map((d, i) => el("div", { class: "card dstep" }, el("span", { class: "ssnum", text: String(i + 1) }), el("h3", { text: d.t }), el("span", { class: "ref", text: d.ref }), el("p", { html: refify(d.d) }))));
  }

  function initSsFire() {
    const svg = sv("svg", { viewBox: "0 0 420 340", role: "img", "aria-label": "A fire on Malta, a viper fastening on a hand, and the viper shaken into the fire" });
    svg.append(sv("rect", { y: 280, width: 420, height: 60, fill: "#8a6238", "fill-opacity": .3 }));
    [[-30, 10], [30, -10], [0, 0]].forEach(([dx, r]) => svg.append(sv("rect", { x: 140 + dx, y: 262, width: 140, height: 12, rx: 6, fill: "#6b4a2b", transform: `rotate(${r} 210 268)` })));
    const flames = sv("g", { style: { transition: "transform .8s cubic-bezier(.3,1.4,.5,1)", transformBox: "fill-box", transformOrigin: "bottom center" } },
      sv("path", { d: "M210 262 C150 230 170 170 200 130 C206 170 236 160 230 110 C270 160 280 230 210 262 Z", fill: "var(--flame)" }), sv("path", { d: "M210 260 C180 240 188 200 206 176 C210 200 228 196 226 170 C248 204 246 240 210 260 Z", fill: "var(--accent)" }));
    flames.style.transform = "scale(0.25)";
    svg.append(flames);
    const hand = sv("g", {}, sv("path", { d: "M420 200 L330 196 Q310 196 306 206 Q304 216 318 218 L420 222 Z", fill: "#c99a6e" }));
    svg.append(hand);
    const viper = sv("g", { opacity: 0, style: { transition: reduceMotion ? "none" : "transform 1s cubic-bezier(.4,.1,.2,1), opacity .5s" } }, sv("path", { d: "M318 208 C300 190 280 214 262 196 C246 180 236 200 222 190", fill: "none", stroke: "#3a4a2a", "stroke-width": 7, "stroke-linecap": "round" }), sv("circle", { cx: 220, cy: 189, r: 6, fill: "#3a4a2a" }));
    svg.append(viper);
    const cap = sv("text", { x: 210, y: 36, "text-anchor": "middle", "font-size": 15, "font-weight": 800, fill: "var(--ink)" }, "Gathering sticks on Malta");
    svg.append(cap);
    $("#ssFire").append(svg);
    $("#ssLight").addEventListener("click", () => { flames.style.transform = "scale(1)"; viper.style.transform = ""; setTimeout(() => { viper.setAttribute("opacity", 1); cap.textContent = "Out of the heat, a viper fastens on his hand"; }, reduceMotion ? 0 : 900); });
    $("#ssShake").addEventListener("click", () => { viper.style.transform = "translate(-40px, 40px) rotate(-30deg)"; setTimeout(() => { viper.setAttribute("opacity", 0); cap.textContent = "“He shook off the creature into the fire and suffered no harm”"; }, reduceMotion ? 0 : 700); flames.style.transform = "scale(1.1)"; });
    $("#ssAccord").append(...DATA.ss.accord.map(a => el("li", { class: "vstep" }, el("div", { class: "vcard" }, el("small", { text: a.ref }), el("b", { text: a.t }), el("p", { html: refify(a.d) })))));
    flames.style.transform = "scale(1)"; cap.textContent = "When unity happens, fire comes";
  }

