  /* ================ Part VIII·d: heavenly places as the sanctuary ================ */
  const SC = () => DATA.sc;

  function initScPlan() {
    const Z = SC().zones;
    const svg = sv("svg", { viewBox: "0 0 640 360", role: "img", "aria-label": "Plan of the tabernacle: outside the camp, outer court, holy place behind the first veil, holy of holies behind the second veil", style: { minWidth: "520px" } });
    const zr = [[0, 40, 60, 280], [60, 40, 280, 280], [340, 110, 140, 140], [480, 110, 80, 140]];
    const zoneRects = zr.map(([x, y, w, h], i) => sv("rect", { class: "zr", x, y, width: w, height: h, fill: ["var(--muted)", "var(--eden)", "var(--accent)", "var(--babel)"][i], "fill-opacity": .06 }));
    svg.append(...zoneRects);
    svg.append(sv("rect", { x: 60, y: 40, width: 520, height: 280, fill: "none", stroke: "var(--ink)", "stroke-opacity": .5, "stroke-width": 2, "stroke-dasharray": "2 4" }),
      sv("rect", { x: 340, y: 110, width: 220, height: 140, fill: "var(--surface)", "fill-opacity": .6, stroke: "var(--ink)", "stroke-width": 2.5 }),
      txt(30, 30, "OUTSIDE", { "font-size": 10, fill: "var(--muted)", "letter-spacing": ".1em" }), txt(200, 30, "OUTER COURT", { "font-size": 10, fill: "var(--eden)", "letter-spacing": ".1em" }),
      txt(410, 100, "HOLY PLACE", { "font-size": 10, fill: "var(--accent)", "letter-spacing": ".1em" }), txt(520, 100, "HOLIEST", { "font-size": 10, fill: "var(--babel)", "letter-spacing": ".1em" }));
    // court furniture
    svg.append(sv("rect", { x: 130, y: 160, width: 40, height: 40, fill: "#b08a5a" }), txt(150, 218, "altar", { "font-size": 10, fill: "var(--muted)" }),
      sv("circle", { cx: 260, cy: 180, r: 14, fill: "var(--babel)", "fill-opacity": .5 }), txt(260, 210, "laver", { "font-size": 10, fill: "var(--muted)" }));
    // holy place furniture
    const menorah = sv("g", { class: "pf", "data-id": "menorah" }, sv("path", { d: "M380 152 v-22 M366 140 q14 14 28 0 M372 140 q8 8 16 0", stroke: "var(--accent)", "stroke-width": 2.5, fill: "none" }), ...[366, 372, 380, 388, 394].map(x => sv("circle", { cx: x, cy: 138, r: 2.4, fill: "var(--flame)", class: "flick" })), txt(380, 166, "lampstand", { "font-size": 9.5, fill: "var(--accent)" }));
    const table = sv("g", { class: "pf", "data-id": "bread" }, sv("rect", { x: 362, y: 206, width: 36, height: 18, rx: 2, fill: "var(--accent)", "fill-opacity": .7 }), ...[0, 1, 2, 3, 4, 5].map(k => sv("circle", { cx: 367 + k * 5.2, cy: 215, r: 2.3, fill: "var(--surface)" })), txt(380, 238, "table", { "font-size": 9.5, fill: "var(--accent)" }));
    const incense = sv("g", { class: "pf", "data-id": "incense" }, sv("rect", { x: 440, y: 172, width: 16, height: 16, fill: "var(--accent)" }), sv("path", { class: "smoke", d: "M448 170 q-6 -8 0 -14 q6 -6 0 -14", stroke: "var(--muted)", "stroke-width": 2, fill: "none" }), txt(448, 202, "incense", { "font-size": 9.5, fill: "var(--accent)" }));
    const ark = sv("g", {}, sv("rect", { x: 506, y: 170, width: 28, height: 20, fill: "var(--accent)" }), sv("path", { d: "M506 170 l6 -10 M534 170 l-6 -10", stroke: "var(--accent)", "stroke-width": 2 }), txt(520, 204, "ark", { "font-size": 9.5, fill: "var(--babel)" }));
    svg.append(menorah, table, incense, ark);
    // veils
    const veil1 = sv("g", { class: "veil1" }, sv("line", { x1: 340, y1: 112, x2: 340, y2: 248, stroke: "var(--babel)", "stroke-width": 6 }), txt(340, 268, "1st veil", { "font-size": 10, fill: "var(--babel)" }));
    const veil2 = sv("g", { class: "veil2" }, sv("line", { x1: 480, y1: 112, x2: 480, y2: 248, stroke: "var(--flame)", "stroke-width": 6 }), txt(480, 268, "2nd veil", { "font-size": 10, fill: "var(--flame)" }));
    svg.append(veil1, veil2);
    const block = sv("g", { class: "block-x", opacity: 0 }, sv("circle", { cx: 326, cy: 180, r: 12, fill: "var(--flame)" }), sv("path", { d: "M320 174 L332 186 M332 174 L320 186", stroke: "#fff", "stroke-width": 3 }));
    const forerunner = sv("g", { opacity: 0, class: "fore" }, sv("circle", { cx: 548, cy: 180, r: 16, fill: "var(--accent)", "fill-opacity": .3, class: "pulse" }), person(548, 194, .7, "var(--accent)"), txt(548, 132, "forerunner", { "font-size": 9.5, fill: "var(--accent)" }));
    const me = sv("g", { class: "me" }, sv("circle", { cx: 0, cy: -10, r: 16, fill: "var(--eden)", "fill-opacity": .25, class: "pulse" }), person(0, 4, .8, "var(--eden)"), txt(0, 26, "you", { "font-size": 10, fill: "var(--eden)" }));
    svg.append(block, forerunner, me);
    const others = sv("g", { class: "others" }, person(200, 270, .6, "var(--muted)"), txt(200, 290, "Israelite", { "font-size": 9, fill: "var(--muted)" }), person(420, 196, .55, "var(--ink)"), txt(420, 212, "priest", { "font-size": 9, fill: "var(--muted)" }));
    svg.append(others);
    $("#scPlan").append(svg);
    const pos = [[30, 190], [210, 190], [420, 190], [500, 190]];
    let cov = 0, zone = 0, cur = pos[0].slice();
    const chips = ["Old covenant", "In Christ"].map((t, i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { cov = i; selectSet(chips, i); svg.dataset.cov = i; set(zone); } }));
    $("#scCov").append(...chips); selectSet(chips, 0); svg.dataset.cov = 0;
    const r = $("#scRange");
    function set(i) {
      zone = i; r.value = i;
      const reach = cov === 0 ? Math.min(i, 1) : Math.min(i, 3);
      const [tx, ty] = reach === 3 ? [492, 190] : pos[reach];
      const from = cur.slice();
      tween(0, 1, 700, k => { cur = [from[0] + (tx - from[0]) * k, from[1] + (ty - from[1]) * k]; me.setAttribute("transform", `translate(${cur[0]} ${cur[1]})`); });
      zoneRects.forEach((z, j) => z.setAttribute("fill-opacity", j === i ? .22 : .06));
      const host = $("#scPlan"); if (host.scrollWidth > host.clientWidth + 4) { const w = svg.getBoundingClientRect().width; host.scrollTo({ left: Math.max(0, tx / 640 * w - host.clientWidth / 2), behavior: reduceMotion ? "auto" : "smooth" }); }
      block.setAttribute("opacity", cov === 0 && i >= 2 ? 1 : 0);
      forerunner.setAttribute("opacity", cov === 1 && i === 3 ? 1 : 0);
      const z = Z[i];
      const status = cov === 0
        ? (i <= 1 ? (i === 0 ? "Under the old covenant you are outside, far off." : "Under the old covenant this is as far as you may come.") : `Under the old covenant you may not enter: this belonged to ${z.who.toLowerCase()}.`)
        : (i === 3 ? "In Christ the way has been opened, and he has gone in ahead of us." : i === 2 ? "In Christ you stand here as a priest." : i === 1 ? "In Christ you are brought further in." : "In Christ you are no longer left here.");
      $("#scZoneInfo").replaceChildren(el("p", { class: "eyebrow", text: `${cov ? "In Christ" : "Old covenant"} · zone ${i + 1} of 4` }), el("h3", { text: z.t }), el("span", { class: "ref", text: z.ref }),
        el("p", { class: "use" }, el("b", { text: status })), el("p", { html: refify(z.d) }), el("p", { class: "muted small", html: refify("Who: " + z.who) }), cov ? el("p", { html: refify(z.eph) }) : null);
    }
    r.addEventListener("input", () => set(+r.value));
    me.setAttribute("transform", `translate(${cur[0]} ${cur[1]})`);
    set(0);
  }

  function furnPic(id) {
    const s = sv("svg", { viewBox: "0 0 160 120", class: "fpic", "aria-hidden": "true" });
    if (id === "menorah") {
      s.append(sv("circle", { cx: 80, cy: 50, r: 46, fill: "var(--accent)", "fill-opacity": .12, class: "pulse" }), sv("path", { d: "M80 104 V44 M50 44 Q50 76 80 76 Q110 76 110 44 M60 44 Q60 66 80 66 Q100 66 100 44 M70 44 Q70 56 80 56 Q90 56 90 44 M64 104 H96", stroke: "var(--accent)", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }),
        ...[50, 60, 70, 80, 90, 100, 110].map((x, i) => sv("path", { class: "flame", d: `M${x} 40 q-5 -8 0 -16 q5 8 0 16 Z`, fill: "var(--flame)", style: { animationDelay: i * .13 + "s" } })));
    }
    if (id === "bread") {
      s.append(sv("rect", { x: 26, y: 70, width: 108, height: 10, rx: 3, fill: "var(--accent)" }), sv("path", { d: "M36 80 V108 M124 80 V108", stroke: "var(--accent)", "stroke-width": 5 }),
        ...[0, 1, 2, 3, 4, 5].flatMap(k => [sv("ellipse", { class: "loaf", cx: 54, cy: 64 - k * 9, rx: 18, ry: 5, fill: "#c99a5b", style: { animationDelay: k * .1 + "s" } }), sv("ellipse", { class: "loaf", cx: 106, cy: 64 - k * 9, rx: 18, ry: 5, fill: "#c99a5b", style: { animationDelay: .6 + k * .1 + "s" } })]),
        txt(80, 116, "12 loaves", { "font-size": 10, fill: "var(--muted)" }));
    }
    if (id === "incense") {
      s.append(sv("rect", { x: 58, y: 70, width: 44, height: 38, fill: "var(--accent)" }), sv("rect", { x: 54, y: 64, width: 52, height: 8, fill: "var(--accent)" }), sv("path", { d: "M54 64 l-4 -6 M106 64 l4 -6", stroke: "var(--accent)", "stroke-width": 3 }),
        ...[0, 1, 2].map(k => sv("path", { class: "smoke", d: `M${70 + k * 10} 60 q-8 -12 0 -22 q8 -10 0 -22`, stroke: "var(--muted)", "stroke-width": 3, fill: "none", "stroke-linecap": "round", style: { animationDelay: k * .5 + "s" } })));
    }
    return s;
  }
  function initScFurniture() {
    const F = SC().furniture;
    const cards = F.map((f, i) => { const b = el("button", { class: "card fcard", type: "button", "aria-pressed": "false", style: { "--c": f.c }, onclick: () => sel(i) }, furnPic(f.id), el("h3", { text: f.n }), el("p", { class: "eyebrow", text: f.tag })); $("#scFurniture").append(b); return b; });
    function sel(i) {
      selectSet(cards, i); const f = F[i];
      $("#scFurnPanel").replaceChildren(
        el("div", { class: "you-are", style: { "--c": f.c } }, el("small", { text: "The blessing" }), el("b", { text: f.you })),
        el("div", { class: "frows" },
          el("div", { class: "frow" }, el("small", { text: "In the tabernacle" }), el("p", { html: refify(f.ot) })),
          el("div", { class: "frow" }, el("small", { text: "Who could enjoy it" }), el("p", { html: refify(f.who) })),
          el("div", { class: "frow" }, el("small", { text: "Fulfilled in Christ" }), el("p", { html: refify(f.christ) })),
          el("div", { class: "frow" }, el("small", { text: "In Ephesians" }), el("p", { html: refify(f.eph) }))),
        el("div", { class: "chips" }, ...f.gifts.map(g => el("span", { class: "tag-pill", text: g }))),
        el("p", { class: "use" }, el("b", { text: "Not power. " }), "Relationship: the priest was closer to God, communed with God and approached God."));
    }
    sel(0);
  }

  function initScPrivileges() {
    const C = SC().compare, box = $("#scCompare");
    C.forEach(([k, a, b], i) => box.append(el("div", { class: "pp-row", style: { "--d": i * .07 + "s" } }, el("b", { text: k }),
      el("span", { class: "ms-flip" }, el("span", { class: "ms-face pp-a", text: a }), el("span", { class: "ms-face pp-b", html: refify(b) })))));
    const chips = [["What we imagine", false], ["What Paul meant", true]].map(([t, on], i) => el("button", { class: "chip", type: "button", text: t, onclick: () => { selectSet(chips, i); box.classList.toggle("paul", on); } }));
    $("#scFlip").append(...chips); selectSet(chips, 0);
    setTimeout(() => { if (!box.classList.contains("paul")) { selectSet(chips, 1); box.classList.add("paul"); } }, reduceMotion ? 0 : 2600);
    $("#scPara").append(SC().paraphrase, el("cite", { text: "Ephesians 1:3, read in the light of the holy place" }));
    const icon = { "the lampstand": "M0 10 V-4 M-8 -4 Q-8 4 0 4 Q8 4 8 -4 M-6 12 H6", "the table": "M-10 0 H10 M-8 0 V10 M8 0 V10 M-6 -4 H6", "the altar of incense": "M-6 10 V0 H6 V10 M-2 -2 q-3 -4 0 -8", "the whole holy place": "M-10 10 V-6 L0 -12 L10 -6 V10 Z" };
    $("#scIdentity").append(...SC().identity.map(([t, ref, from], i) => el("div", { class: "id-pill", style: { "--d": i * .12 + "s" } },
      sv("svg", { viewBox: "-14 -14 28 28", "aria-hidden": "true" }, sv("path", { d: icon[from], fill: "none", stroke: "currentColor", "stroke-width": 2.2, "stroke-linecap": "round" })), el("b", { text: t }), el("span", { class: "ref", text: ref }), el("small", { text: "from " + from }))));
    $("#scReadings").append(...SC().readings.map(([t, d], i) => el("div", { class: "card stg" + (i === 2 ? " agree" : "") }, el("h3", { text: t }), el("p", { html: refify(d) }))));
  }
