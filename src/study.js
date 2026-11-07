/* Where Heaven Meets Earth — learning layer: parts menu, progress, saves, notes, journey map */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const NS = "http://www.w3.org/2000/svg";
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function h(tag, attrs, ...kids) {
    const svg = /^(svg|g|path|circle|text|line|rect|animateMotion|mpath|defs|linearGradient|stop|svga)$/.test(tag);
    const n = svg ? document.createElementNS(NS, tag === "svga" ? "a" : tag) : document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "text") n.textContent = v; else if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v === true ? "" : v);
    }
    kids.flat().forEach(k => k != null && n.append(k.nodeType ? k : document.createTextNode(k)));
    return n;
  }
  /* ---------- storage ---------- */
  const KEY = "hme-study";
  let S = { done: {}, saved: {}, notes: {}, last: null, known: {}, quiz: {} };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { /* storage unavailable */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } };

  const PAGES = window.SITE_PAGES || [];
  const INDEX = (window.SITE_INDEX || []).filter(x => x.k !== "part overview" && x.f !== "index.html");
  const pageEl = $(".page");
  const pid = pageEl ? pageEl.dataset.page : "home";
  const P = PAGES.find(p => p.id === pid) || { f: "index.html", nav: "Home" };
  const totals = f => INDEX.filter(x => x.f === f).length;
  const doneOn = f => INDEX.filter(x => x.f === f && S.done[f + "#" + x.id]).length;
  const pct = f => { const t = totals(f); return t ? doneOn(f) / t : 0; };
  /* memory verses from every part, for the Review tab */
  const PARTS_MEM = [["kp", "Part IV · Kings and Priests"], ["pr", "Part V · Prophets"], ["ky", "Part VI · The Keys"], ["sw", "Part VII · Sowing and Reaping"], ["wf", "Part VIII · Spiritual Warfare"], ["sn", "Part IX · Heaven and Earth United"], ["mn", "Part X · Renewing the Mind"]];
  const CARDS = (() => { try { return PARTS_MEM.flatMap(([k, p]) => ((typeof DATA !== "undefined" && DATA[k] && DATA[k].memory) || []).map(([r, v]) => ({ r, v, p }))); } catch (e) { return []; } })();
  const title = (f, id) => (INDEX.find(x => x.f === f && x.id === id) || {}).t || id;

  /* ---------- progress ring ---------- */
  function ring(p, size) {
    const r = 15, c = 2 * Math.PI * r;
    return h("svg", { viewBox: "0 0 36 36", class: "pring", width: size || 36, height: size || 36, "aria-hidden": "true" },
      h("circle", { cx: 18, cy: 18, r, fill: "none", stroke: "var(--line)", "stroke-width": 3.5 }),
      h("circle", { cx: 18, cy: 18, r, fill: "none", stroke: "var(--accent)", "stroke-width": 3.5, "stroke-linecap": "round", "stroke-dasharray": `${c * p} ${c}`, transform: "rotate(-90 18 18)" }),
      p >= 1 ? h("path", { d: "M12 18 l4 4 l8 -9", fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-linecap": "round" }) : (size || 36) >= 48 ? h("text", { x: 18, y: 21, "text-anchor": "middle", "font-size": 8, "font-weight": 800, fill: "var(--muted)" }, Math.round(p * 100) + "%") : null);
  }

  /* ---------- parts menu ---------- */
  function partsMenu() {
    const btn = $("#partsBtn"), menu = $("#partsMenu"); if (!btn || !menu) return;
    const cur = $("#pbCur"); if (cur) cur.textContent = P.nav;
    const paint = () => $$(".pm-ring", menu).forEach(n => n.replaceChildren(...(totals(n.dataset.f) ? [ring(pct(n.dataset.f))] : [])));
    const open = on => {
      menu.hidden = !on; btn.setAttribute("aria-expanded", String(on)); document.body.classList.toggle("pm-open", on);
      if (on) { paint(); const a = $(".nav a.active", menu) || $(".nav a", menu); a && a.focus({ preventScroll: true }); }
    };
    btn.addEventListener("click", e => { e.stopPropagation(); open(menu.hidden); });
    document.addEventListener("click", e => { if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) open(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { open(false); btn.focus(); } });
    paint();
  }

  /* ---------- section tools: studied / save / note ---------- */
  let railTimer;
  function paintRail() { clearTimeout(railTimer); railTimer = setTimeout(() => $$(".rail a").forEach(a => a.classList.toggle("done", !!S.done[P.f + a.getAttribute("href")])), 50); }
  function sectionTools() {
    $$("main section.block[id]").forEach(sec => {
      if (!INDEX.some(x => x.f === P.f && x.id === sec.id)) return;
      const key = P.f + "#" + sec.id, t = title(P.f, sec.id);
      const head = $(".sec-head", sec) || $(".wrap", sec); if (!head) return;
      const mk = (cls, label, icon) => h("button", { class: "stool " + cls, type: "button", "aria-pressed": "false" }, h("span", { class: "si", "aria-hidden": "true", text: icon }), h("span", { class: "sl", text: label }));
      const bDone = mk("st-done", "Mark studied", "✓"), bSave = mk("st-save", "Save", "☆"), bNote = mk("st-note", "Note", "✎");
      const bar = h("div", { class: "stools", role: "group", "aria-label": "Study tools for " + t }, bDone, bSave, bNote);
      const ta = h("textarea", { rows: 3, placeholder: "Your notes on “" + t + "”…", "aria-label": "Notes on " + t });
      const st = h("small", { class: "nstat" });
      const box = h("div", { class: "nbox" }, ta, st); box.hidden = true;
      const sync = () => {
        const d = !!S.done[key], s = !!S.saved[key], n = !!(S.notes[key] && S.notes[key].text);
        bDone.setAttribute("aria-pressed", String(d)); $(".sl", bDone).textContent = d ? "Studied" : "Mark studied";
        bSave.setAttribute("aria-pressed", String(s)); $(".si", bSave).textContent = s ? "★" : "☆"; $(".sl", bSave).textContent = s ? "Saved" : "Save";
        bNote.classList.toggle("has", n); sec.classList.toggle("studied", d);
      };
      bDone.addEventListener("click", () => {
        if (S.done[key]) delete S.done[key]; else { S.done[key] = Date.now(); if (window.__burst && !reduce) { const r = bDone.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top); } }
        save(); sync(); paintAll();
      });
      bSave.addEventListener("click", () => { if (S.saved[key]) delete S.saved[key]; else S.saved[key] = { t, p: P.nav, ts: Date.now() }; save(); sync(); paintAll(); });
      bNote.addEventListener("click", () => { box.hidden = !box.hidden; bNote.setAttribute("aria-pressed", String(!box.hidden)); if (!box.hidden) ta.focus(); });
      if (S.notes[key]) ta.value = S.notes[key].text;
      let tm;
      ta.addEventListener("input", () => {
        clearTimeout(tm); st.textContent = "Saving…";
        tm = setTimeout(() => { const v = ta.value.trim(); if (v) S.notes[key] = { text: ta.value, t, p: P.nav, ts: Date.now() }; else delete S.notes[key]; save(); sync(); paintAll(); st.textContent = v ? "Saved on this device" : ""; }, 400);
      });
      head.append(bar, box); sync();
    });
  }

  /* ---------- part progress in the banner ---------- */
  function bannerProgress() {
    const b = $("main .part-banner:not(.sub-banner) .wrap > div:last-child"); if (!b || !totals(P.f)) return;
    const bar = h("div", { class: "pprog" }, h("div", { class: "pbar" }, h("i", {})), h("span", { class: "ptxt" }));
    b.append(bar);
  }
  function paintBanner() {
    const bar = $(".pprog"); if (!bar) return;
    const t = totals(P.f), d = doneOn(P.f);
    $("i", bar).style.width = (t ? d / t * 100 : 0) + "%";
    $(".ptxt", bar).textContent = d ? `${d} of ${t} sections studied` : `${t} sections · mark each one as you study it`;
  }

  /* ---------- remember where the reader is ---------- */
  function trackLast() {
    const secs = $$("main section.block[id]").filter(s => INDEX.some(x => x.f === P.f && x.id === s.id));
    if (!secs.length || pid === "home") return;
    let tm;
    window.addEventListener("scroll", () => {
      clearTimeout(tm);
      tm = setTimeout(() => {
        let k = -1; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .4) k = i; });
        if (k < 0) return;
        S.last = { f: P.f, id: secs[k].id, t: title(P.f, secs[k].id), p: P.nav, ts: Date.now() }; save();
      }, 500);
    }, { passive: true });
  }

  /* ---------- My study drawer ---------- */
  let drawer, tabs = {}, activeTab = "progress";
  function buildDrawer() {
    const btn = $("#studyBtn"); if (!btn) return;
    drawer = h("aside", { class: "drawer", id: "studyDrawer", "aria-label": "My study", hidden: true },
      h("div", { class: "dr-head" }, h("h2", { text: "My study" }), h("button", { class: "dr-x", type: "button", "aria-label": "Close", text: "×", onclick: () => toggle(false) })),
      h("div", { class: "dr-tabs", role: "tablist" }, ...[["progress", "Progress"], ["review", "Review"], ["saved", "Saved"], ["notes", "Notes"]].map(([k, n]) => (tabs[k] = h("button", { class: "tab", role: "tab", type: "button", "aria-selected": String(k === activeTab), text: n, onclick: () => { activeTab = k; renderDrawer(); } })))),
      h("div", { class: "dr-body", id: "drBody" }),
      h("p", { class: "dr-foot", text: "Progress, saves and notes stay in this browser on this device." }));
    const veil = h("div", { class: "dr-veil", hidden: true, onclick: () => toggle(false) });
    document.body.append(veil, drawer);
    function toggle(on) {
      drawer.hidden = veil.hidden = !on; btn.setAttribute("aria-expanded", String(on));
      requestAnimationFrame(() => { drawer.classList.toggle("open", on); veil.classList.toggle("open", on); });
      if (on) { renderDrawer(); $(".dr-x", drawer).focus(); } else btn.focus({ preventScroll: true });
    }
    btn.addEventListener("click", () => toggle(drawer.hidden));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !drawer.hidden) toggle(false); });
    window.__openStudy = tab => { if (tab) activeTab = tab; toggle(true); };
  }
  const href = key => { const [f, id] = key.split("#"); return f === P.f ? "#" + id : key; };
  function renderDrawer() {
    if (!drawer || drawer.hidden) return;
    Object.entries(tabs).forEach(([k, t]) => t.setAttribute("aria-selected", String(k === activeTab)));
    const body = $("#drBody"); body.replaceChildren();
    if (activeTab === "progress") {
      const all = INDEX.length, d = Object.keys(S.done).filter(k => INDEX.some(x => x.f + "#" + x.id === k)).length;
      body.append(h("div", { class: "dr-total" }, ring(all ? d / all : 0, 64), h("div", {}, h("b", { text: `${d} of ${all} sections studied` }), h("small", { text: `${Object.keys(S.saved).length} saved · ${Object.keys(S.notes).length} notes · ${Object.keys(S.known || {}).length}/${CARDS.length} verses` }))));
      if (S.last) body.append(h("a", { class: "dr-cont", href: href(S.last.f + "#" + S.last.id) }, h("small", { text: "Continue where you left off" }), h("b", { text: S.last.t }), h("span", { text: S.last.p })));
      body.append(h("ul", { class: "dr-parts" }, PAGES.filter(p => totals(p.f)).map(p => h("li", {}, h("a", { href: p.f === P.f ? "#top" : p.f }, ring(pct(p.f), 30), h("span", { text: p.nav }), h("small", { text: `${doneOn(p.f)}/${totals(p.f)}` + (S.quiz && S.quiz[p.id] ? ` · quiz ${S.quiz[p.id].best}/${S.quiz[p.id].of}` : "") }))))));
      if (d) body.append(h("button", { class: "linkish", type: "button", text: "Reset progress", onclick: () => { if (confirm("Clear all “studied” marks?")) { S.done = {}; save(); paintAll(); location.reload(); } } }));
    }
    if (activeTab === "review") {
      if (!CARDS.length) { body.append(h("p", { class: "dr-empty", text: "No memory verses found." })); return; }
      const known = CARDS.filter(c => S.known[c.r]).length;
      const queue = CARDS.filter(c => !S.known[c.r]);
      body.append(h("div", { class: "rv-meta" }, h("span", { text: `${known} of ${CARDS.length} verses known` }), known ? h("button", { class: "linkish", type: "button", text: "Start over", onclick: () => { S.known = {}; save(); renderDrawer(); } }) : null),
        h("div", { class: "rv-bar" }, h("i", { style: `width:${known / CARDS.length * 100}%` })));
      if (!queue.length) { body.append(h("div", { class: "rv-card" }, h("b", { text: "Every memory verse reviewed ✓" }), h("p", { text: "Well done. Start over any time to keep them fresh." }))); if (window.__burst && !reduce) { const r = drawer.getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top + 200); } return; }
      const c = queue[Math.floor(Math.random() * queue.length)];
      const verse = h("blockquote", { text: c.v }); verse.hidden = true;
      const acts = h("div", { class: "dr-actions" }); acts.hidden = true;
      const show = h("button", { class: "btn primary small", type: "button", text: "Show the verse", onclick: () => { verse.hidden = false; acts.hidden = false; show.hidden = true; } });
      acts.append(h("button", { class: "btn small", type: "button", text: "Got it ✓", onclick: () => { S.known[c.r] = Date.now(); save(); renderDrawer(); } }), h("button", { class: "btn small", type: "button", text: "Again ↻", onclick: () => renderDrawer() }));
      body.append(h("div", { class: "rv-card" }, h("small", { class: "eyebrow", text: c.p }), h("span", { class: "ref", text: c.r }), h("p", { class: "muted small", text: "Say the verse from memory, then check." }), verse, show, acts));
    }
    if (activeTab === "saved") {
      const ks = Object.keys(S.saved).sort((a, b) => S.saved[b].ts - S.saved[a].ts);
      body.append(ks.length ? h("ul", { class: "dr-list" }, ks.map(k => h("li", {}, h("a", { href: href(k) }, h("b", { text: S.saved[k].t }), h("small", { text: S.saved[k].p })),
        h("button", { class: "dr-rm", type: "button", "aria-label": "Remove " + S.saved[k].t, text: "×", onclick: () => { delete S.saved[k]; save(); paintAll(); } }))))
        : h("p", { class: "dr-empty", text: "Select ☆ Save on any section to keep it here." }));
    }
    if (activeTab === "notes") {
      const ks = Object.keys(S.notes).sort((a, b) => S.notes[b].ts - S.notes[a].ts);
      if (!ks.length) { body.append(h("p", { class: "dr-empty", text: "Select ✎ Note on any section to write your thoughts. They appear here." })); return; }
      const text = ks.map(k => `${S.notes[k].p} — ${S.notes[k].t}\n${S.notes[k].text.trim()}\n`).join("\n");
      const copy = h("button", { class: "btn small", type: "button", text: "Copy all notes", onclick: async () => { try { await navigator.clipboard.writeText(text); copy.textContent = "Copied ✓"; } catch (e) { copy.textContent = "Copy not available"; } setTimeout(() => copy.textContent = "Copy all notes", 1800); } });
      const dl = h("button", { class: "btn small", type: "button", text: "Download .txt", onclick: () => { try { const a = h("a", { href: URL.createObjectURL(new Blob([text], { type: "text/plain" })), download: "my-study-notes.txt" }); document.body.append(a); a.click(); a.remove(); } catch (e) { /* download blocked */ } } });
      body.append(h("div", { class: "dr-actions" }, copy, dl), h("ul", { class: "dr-list notes" }, ks.map(k => h("li", {}, h("a", { href: href(k) }, h("b", { text: S.notes[k].t }), h("small", { text: S.notes[k].p }), h("p", { text: S.notes[k].text }))))));
    }
  }
  function paintBadge() {
    const b = $("#studyCount"); if (!b) return;
    const n = Object.keys(S.saved).length + Object.keys(S.notes).length; b.textContent = n || ""; b.hidden = !n;
  }

  /* ---------- home: journey map ---------- */
  function journey() {
    const host = $("#journeyMap"); if (!host) return;
    const parts = PAGES.filter(p => p.id !== "home");
    const W = 1000, H = 380, n = parts.length, top = Math.ceil(n / 2);
    const pts = parts.map((p, i) => i < top ? [80 + i * (780 / (top - 1)), 90] : [860 - (i - top) * (780 / Math.max(1, n - top - 1)), 280]);
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < n; i++) {
      const [x, y] = pts[i], [px, py] = pts[i - 1];
      d += py !== y ? ` C${px + 110} ${py} ${x + 110} ${y} ${x} ${y}` : ` L${x} ${y}`;
    }
    const svg = h("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Your journey through the study, with your progress in each part" });
    svg.append(h("path", { id: "jpath", d, fill: "none", stroke: "var(--line)", "stroke-width": 10, "stroke-linecap": "round" }), h("path", { d, fill: "none", stroke: "var(--accent)", "stroke-width": 3, "stroke-dasharray": "2 12", "stroke-linecap": "round", class: "flow" }));
    if (!reduce) { const dot = h("circle", { r: 8, fill: "var(--accent)" }); dot.append(h("animateMotion", { dur: "18s", repeatCount: "indefinite", path: d })); svg.append(dot); }
    const cols = ["var(--eden)", "var(--flame)", "var(--babel)", "var(--accent)", "var(--eden)", "var(--accent)", "var(--eden)", "var(--flame)", "var(--babel)"];
    parts.forEach((p, i) => {
      const [x, y] = pts[i], q = pct(p.f), r = 30, c = 2 * Math.PI * r;
      const [num, name] = p.nav.includes("·") ? p.nav.split("·").map(s => s.trim().replace("Part ", "")) : ["★", p.nav];
      const a = h("svga", { href: p.f, class: "jstop", "aria-label": `${p.nav}: ${Math.round(q * 100)}% studied` },
        h("circle", { cx: x, cy: y, r: 40, fill: "var(--surface)", stroke: cols[i % cols.length], "stroke-width": 3 }),
        h("circle", { cx: x, cy: y, r, fill: "none", stroke: "var(--line)", "stroke-width": 5 }),
        h("circle", { cx: x, cy: y, r, fill: "none", stroke: "var(--accent)", "stroke-width": 5, "stroke-linecap": "round", "stroke-dasharray": `${c * q} ${c}`, transform: `rotate(-90 ${x} ${y})` }),
        h("text", { x, y: y + 7, "text-anchor": "middle", "font-size": 20, "font-weight": 700, fill: "var(--ink)", class: "jnum" }, q >= 1 ? "✓" : num));
      const words = name.split(" "), half = Math.ceil(words.length / 2), two = name.length > 16;
      const ty = y < 200 ? y - 54 : y + 66;
      a.append(h("text", { x, y: ty - (two && y < 200 ? 16 : 0), "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, two ? words.slice(0, half).join(" ") : name));
      if (two) a.append(h("text", { x, y: ty + (y < 200 ? 0 : 16), "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: "var(--ink)" }, words.slice(half).join(" ")));
      svg.append(a);
    });
    host.append(svg);
    const side = $("#journeySide"); if (!side) return;
    const all = INDEX.length, dn = Object.keys(S.done).filter(k => INDEX.some(x => x.f + "#" + x.id === k)).length;
    side.append(h("div", { class: "dr-total" }, ring(all ? dn / all : 0, 64), h("div", {}, h("b", { text: dn ? `${dn} of ${all} sections studied` : `${all} sections to explore` }), h("small", { text: `${Object.keys(S.saved).length} saved · ${Object.keys(S.notes).length} notes` }))));
    side.append(S.last ? h("a", { class: "dr-cont", href: S.last.f + "#" + S.last.id }, h("small", { text: "Continue where you left off" }), h("b", { text: S.last.t }), h("span", { text: S.last.p }))
      : h("a", { class: "dr-cont", href: "garden.html" }, h("small", { text: "Start the journey" }), h("b", { text: "Part I · The Garden-Temple" }), h("span", { text: "Eden, the mountain of God and the first sanctuary" })));
    side.append(h("ol", { class: "howto" }, h("li", { text: "Open a part from the map or the Parts menu." }), h("li", { text: "Work through each interactive section." }), h("li", { text: "Mark it ✓ studied, ☆ save it or ✎ write a note." }), h("li", { text: "Review everything in My study." })));
    side.append(h("div", { class: "dr-actions" }, h("button", { class: "btn primary small", type: "button", text: "Open My study", onclick: () => window.__openStudy && window.__openStudy("progress") }), h("button", { class: "btn small", type: "button", text: `Review ${CARDS.length} memory verses`, onclick: () => window.__openStudy && window.__openStudy("review") })));
  }

  /* ---------- end-of-part self-check ---------- */
  const partOf = id => (id === "garden" || id === "babel") ? "core" : id;
  const quizFor = id => { try { return (typeof DATA !== "undefined" && DATA.quiz || []).filter(q => q.part === partOf(id)); } catch (e) { return []; } };
  function selfCheck() {
    const Q = quizFor(pid); const pager = $(".pager");
    if (Q.length < 2 || !pager || pid === "connections") return;
    const sec = h("section", { class: "block selfcheck", id: "selfcheck", "data-toc": "Check yourself" },
      h("div", { class: "wrap" }, h("div", { class: "sec-head" }, h("p", { class: "eyebrow", text: "Quick check · " + Q.length + " questions" }), h("h2", { text: "Check your understanding" }), h("p", { text: "A short quiz on this part. Your best score is saved in My study." })),
        h("div", { class: "sc-card", id: "scCard", "aria-live": "polite" })));
    pager.before(sec);
    let i = 0, score = 0, order = [];
    const card = $("#scCard");
    function start() { order = Q.map((q, k) => k).sort(() => Math.random() - .5); i = 0; score = 0; show(); }
    function show() {
      if (i >= order.length) return finish();
      const q = Q[order[i]];
      const opts = h("div", { class: "sc-opts" });
      const fb = h("div", { class: "sc-fb" });
      q.a.forEach((a, k) => opts.append(h("button", { class: "sc-opt", type: "button", text: a, onclick: () => {
        $$(".sc-opt", opts).forEach((b, j) => { b.disabled = true; b.classList.toggle("right", j === q.c); b.classList.toggle("wrong", j === k && k !== q.c); });
        if (k === q.c) { score++; if (window.__burst && !reduce) { const r = opts.children[k].getBoundingClientRect(); window.__burst(r.left + r.width / 2, r.top); } }
        fb.replaceChildren(h("p", { class: k === q.c ? "ok" : "no", text: (k === q.c ? "Correct. " : "Not quite. ") + (q.x || "") }), h("button", { class: "btn primary small", type: "button", text: i + 1 < order.length ? "Next question ▸" : "See my score ▸", onclick: () => { i++; show(); } }));
      } })));
      card.replaceChildren(h("div", { class: "rv-meta" }, h("span", { text: `Question ${i + 1} of ${order.length}` }), h("span", { text: `Score ${score}` })), h("div", { class: "rv-bar" }, h("i", { style: `width:${i / order.length * 100}%` })), h("h3", { text: q.q }), opts, fb);
    }
    function finish() {
      const best = Math.max(score, (S.quiz[pid] || {}).best || 0);
      S.quiz[pid] = { best, of: Q.length, ts: Date.now() }; save(); paintAll();
      card.replaceChildren(h("div", { class: "sc-done" }, ring(score / Q.length, 72), h("div", {}, h("b", { text: `You scored ${score} of ${Q.length}` }), h("p", { text: score === Q.length ? "Excellent: you have this part down." : "Review the sections you missed, then try again." }), h("small", { text: `Best: ${best} of ${Q.length}` }))),
        h("div", { class: "dr-actions" }, h("button", { class: "btn primary small", type: "button", text: "Try again", onclick: start }), h("button", { class: "btn small", type: "button", text: "Review memory verses", onclick: () => window.__openStudy && window.__openStudy("review") })));
    }
    start();
  }

  function paintAll() { paintBanner(); paintBadge(); paintRail(); renderDrawer(); }
  function start() {
    [selfCheck, partsMenu, sectionTools, bannerProgress, trackLast, buildDrawer, journey, paintAll].forEach(fn => { try { fn(); } catch (err) { console.error("study", fn.name, err); } });
    setTimeout(paintRail, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
