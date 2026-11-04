/* Where Heaven Meets Earth — motion and interaction layer (runs after the app has booted) */
(function () {
  "use strict";
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const mk = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#a87a1c";
  const palette = () => { const cs = getComputedStyle(document.documentElement); return ["--accent", "--eden", "--babel", "--flame"].map(v => cs.getPropertyValue(v).trim()).filter(Boolean); };

  /* ---------- 1 · Page transitions ---------- */
  function pageTransitions() {
    if (reduce) return;
    const veil = mk("div", "pt-veil");
    veil.setAttribute("aria-hidden", "true");
    veil.innerHTML = '<span class="pt-mark"></span>';
    document.body.append(veil);
    requestAnimationFrame(() => veil.classList.add("out"));
    window.addEventListener("pageshow", e => { if (e.persisted) { veil.classList.remove("in"); veil.classList.add("out"); } });
    document.addEventListener("click", e => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!/^[a-z-]+\.html(#.*)?$/i.test(href)) return;
      const here = location.pathname.split("/").pop() || "index.html";
      if (href.split("#")[0] === here) return;
      e.preventDefault();
      veil.classList.remove("out"); veil.classList.add("in");
      setTimeout(() => { location.href = href; }, 420);
    });
  }

  /* ---------- 2 · Ambient light motes on hero and part banners ---------- */
  function motes() {
    if (reduce) return;
    $$(".hero, .part-banner").forEach(host => {
      const c = mk("canvas", "motes"); c.setAttribute("aria-hidden", "true");
      host.prepend(c);
      const ctx = c.getContext("2d");
      let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1), mx = 0, my = 0, running = false, raf = 0;
      const N = host.classList.contains("hero") ? 70 : 38;
      const P = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 2.2, s: .0002 + Math.random() * .0008, ph: Math.random() * 6.28, d: .3 + Math.random() * .7 }));
      const size = () => { const r = host.getBoundingClientRect(); w = r.width; h = r.height; c.width = w * dpr; c.height = h * dpr; c.style.width = w + "px"; c.style.height = h + "px"; };
      size(); window.addEventListener("resize", size);
      host.addEventListener("pointermove", e => { const r = host.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
      let col = accent();
      new MutationObserver(() => { col = accent(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-scheme", "style", "data-theme"] });
      const tick = t => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); ctx.fillStyle = col;
        P.forEach(p => {
          p.y -= p.s; if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); }
          const x = p.x * w + Math.sin(t / 2400 + p.ph) * 14 + mx * 40 * p.d, y = p.y * h + my * 30 * p.d;
          ctx.globalAlpha = .18 + .5 * (0.5 + 0.5 * Math.sin(t / 900 + p.ph)) * p.d;
          ctx.beginPath(); ctx.arc(x, y, p.r, 0, 6.283); ctx.fill();
        });
        if (running) raf = requestAnimationFrame(tick);
      };
      new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting && !running) { running = true; raf = requestAnimationFrame(tick); } else if (!en.isIntersecting) { running = false; cancelAnimationFrame(raf); } })).observe(host);
    });
  }

  /* ---------- 3 · Hero parallax and scroll cue ---------- */
  function heroFx() {
    const hero = $(".hero"); if (!hero) return;
    const svg = $("#heroSvg");
    if (svg && fine && !reduce) {
      // keep any existing SVG transform (e.g. the ziggurat's translate) and add the parallax offset to it
      const layers = [["g[fill='none']", 18], ["#heroZig", -14], ["#heroStars", 26]].map(([s, d]) => { const n = $(s, svg); if (!n) return null; const base = (n.getAttribute("transform") || "").replace(/translate\(\s*([-\d.]+)[\s,]+([-\d.]+)\s*\)/, "translate($1px, $2px)"); return [n, d, base]; }).filter(Boolean);
      const apply = (x, y) => layers.forEach(([n, d, base]) => { n.style.transform = `${base} translate(${x * d}px, ${y * d}px)`; });
      hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); apply((e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5); });
      hero.addEventListener("pointerleave", () => apply(0, 0));
      layers.forEach(([n]) => { n.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)"; });
      apply(0, 0);
    }
    const cue = mk("a", "scroll-cue", '<span>Scroll</span><i aria-hidden="true"></i>');
    cue.href = "#parts"; if ($("#parts")) hero.append(cue);
  }

  /* ---------- 4 · Kinetic headings ---------- */
  function splitWords(el) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(ch => {
        if (ch.nodeType === 3) {
          const frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(document.createTextNode(part)); return; }
            const w = mk("span", "kw"); const inner = mk("span", "kwi"); inner.textContent = part; inner.style.setProperty("--i", i++); w.append(inner); frag.append(w);
          });
          ch.replaceWith(frag);
        } else if (ch.nodeType === 1 && !ch.classList.contains("kw")) walk(ch);
      });
    };
    walk(el);
    el.classList.add("kinetic");
  }
  function kinetic() {
    if (reduce) return;
    $$(".hero h1, .part-banner h2").forEach(splitWords);
    requestAnimationFrame(() => $$(".kinetic").forEach(k => k.classList.add("go")));
  }

  /* ---------- 5 · Scroll layer: staggered reveals, heading rules, numeral parallax ---------- */
  function scrollLayer() {
    const groups = ".grid-3, .grid-2, .clues, .meanings, .ssmap, .gallery, .cross-grid, .role-grid, .office-strip, .part-cards, .doors, .hchain, .sources, .babylons, .tense, .objs, .letus, .seedbags";
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
    $$(groups).forEach(g => {
      Array.from(g.children).forEach((c, i) => c.style.setProperty("--si", Math.min(i, 10)));
      if (!reduce && g.getBoundingClientRect().top > innerHeight) { g.classList.add("stg"); io.observe(g); }
    });
    $$(".sec-head").forEach(h => { if (reduce || h.getBoundingClientRect().top < innerHeight) h.classList.add("in"); else io.observe(h); });
    if (reduce) return;
    const nums = $$(".part-num");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        nums.forEach(n => { const r = n.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return; const p = (r.top + r.height / 2) / innerHeight - .5; n.style.transform = `translateY(${p * -40}px) rotate(${p * -4}deg)`; });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- 6 · Section rail ---------- */
  function rail() {
    const secs = $$("main section.block[id]").filter(s => $("h2, h3", s));
    if (secs.length < 4) return;
    const nav = mk("nav", "rail"); nav.setAttribute("aria-label", "Sections on this page");
    const dots = secs.map(s => {
      const label = s.dataset.toc || $("h2, h3", s).textContent.trim();
      const a = mk("a"); a.href = "#" + s.id; a.setAttribute("aria-label", label);
      a.append(mk("i"), mk("span", "rl", label.replace(/[<>]/g, "")));
      nav.append(a); return a;
    });
    document.body.append(nav);
    let cur = -1;
    const upd = () => {
      let k = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .4) k = i; });
      if (k !== cur) { cur = k; dots.forEach((d, i) => { d.classList.toggle("on", i === k); d.classList.toggle("past", i < k); }); }
      nav.classList.toggle("show", scrollY > innerHeight * .5);
    };
    window.addEventListener("scroll", upd, { passive: true }); upd();
  }

  /* ---------- 7 · Pointer layer: spotlight, tilt, magnetic buttons, ripples ---------- */
  function pointerLayer() {
    const spot = ".card, .panel, .part-card, .explore-card, .meaning, .sscard, .bcard, .qopt, .verse, .tchip, .obj, .pg, .bag, .mitem, .xcard";
    document.addEventListener("pointermove", e => {
      const el = e.target.closest && e.target.closest(spot); if (!el) return;
      const r = el.getBoundingClientRect(); el.style.setProperty("--mx", (e.clientX - r.left) + "px"); el.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
    if (!fine || reduce) return;
    $$(".part-card, .bcard, .sscard, .explore-card").forEach(el => {
      el.classList.add("tilt");
      el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`; });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
    $$(".btn.primary, .hero .btn").forEach(b => {
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
    document.addEventListener("pointerdown", e => {
      const b = e.target.closest && e.target.closest(".btn, .chip, .qopt, .tab, .pchip, .city, .verse, .tchip, .meaning, .door");
      if (!b) return;
      const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, rp = mk("span", "ripple");
      rp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      if (getComputedStyle(b).position === "static") b.style.position = "relative";
      b.style.overflow = b.classList.contains("door") ? "" : "hidden";
      b.append(rp); setTimeout(() => rp.remove(), 650);
    });
  }

  /* ---------- 8 · Celebration bursts ---------- */
  let burstLayer = null;
  function burst(x, y, n = 26, spread = 1) {
    if (reduce) return;
    if (!burstLayer) { burstLayer = mk("div", "burst-layer"); burstLayer.setAttribute("aria-hidden", "true"); document.body.append(burstLayer); }
    const cols = palette();
    for (let i = 0; i < n; i++) {
      const p = mk("i", "bp" + (i % 3 === 0 ? " star" : ""));
      p.style.left = x + "px"; p.style.top = y + "px"; p.style.background = cols[i % cols.length];
      burstLayer.append(p);
      const a = Math.random() * Math.PI * 2, v = (60 + Math.random() * 140) * spread;
      const dx = Math.cos(a) * v, dy = Math.sin(a) * v - 60 * spread;
      p.animate([{ transform: "translate(-50%,-50%) scale(1) rotate(0)", opacity: 1 }, { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.9) rotate(${a * 200}deg)`, opacity: 1, offset: .6 }, { transform: `translate(calc(-50% + ${dx * 1.15}px), calc(-50% + ${dy + 120 * spread}px)) scale(.4) rotate(${a * 360}deg)`, opacity: 0 }], { duration: 900 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => p.remove();
    }
  }
  function celebrations() {
    window.__burst = burst;
    document.addEventListener("click", e => {
      const t = e.target.closest && e.target.closest("button");
      if (!t) return;
      const r = t.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      if (t.classList.contains("qopt")) setTimeout(() => { if (t.classList.contains("right")) burst(cx, cy, 34, 1.1); }, 0);
      else if (t.classList.contains("clue") || t.classList.contains("mem")) { if (!t.classList.contains("flipped")) setTimeout(() => t.classList.contains("flipped") && burst(cx, r.top + 30, 12, .6), 0); }
      else if (/See score/.test(t.textContent)) setTimeout(() => { burst(innerWidth / 2, innerHeight / 3, 90, 2); }, 120);
      else if (["kyDoorsPlay", "ssShake", "swExchangeBtn", "zigDescend", "lookBtn", "divideBtn", "gatherBtn", "swChristPlay", "prDanielPlay", "ssLight", "swSow", "starNext"].includes(t.id)) burst(cx, cy, 18, .8);
    });
  }

  /* ---------- 9 · Search palette and keyboard shortcuts ---------- */
  function palette_() {
    const IDX = window.SITE_INDEX || [];
    const btn = $("#searchBtn");
    const ov = mk("div", "pal-ov"); ov.hidden = true;
    ov.innerHTML = '<div class="pal" role="dialog" aria-modal="true" aria-label="Search the study"><div class="pal-in"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16 L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="palInput" type="text" placeholder="Search every topic: Melchizedek, ziggurat, keys…" autocomplete="off" aria-controls="palList"></div><ul id="palList" class="pal-list" role="listbox"></ul><div class="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span><span><kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> previous / next part</span></div></div>';
    document.body.append(ov);
    const input = $("#palInput", ov), list = $("#palList", ov);
    let items = [], sel = 0;
    const here = location.pathname.split("/").pop() || "index.html";
    const render = () => {
      const q = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      items = IDX.filter(x => { const hay = (x.t + " " + x.p + " " + (x.k || "")).toLowerCase(); return q.every(w => hay.includes(w)); }).slice(0, 40);
      sel = Math.min(sel, Math.max(0, items.length - 1));
      list.replaceChildren(...(items.length ? items.map((x, i) => { const li = mk("li", "pal-it" + (i === sel ? " on" : "")); li.setAttribute("role", "option"); li.setAttribute("aria-selected", String(i === sel)); li.append(mk("b", "", x.t.replace(/[<>]/g, "")), mk("span", "", x.p.replace(/[<>]/g, ""))); li.addEventListener("click", () => go(x)); li.addEventListener("pointermove", () => { if (sel !== i) { sel = i; mark(); } }); return li; }) : [mk("li", "pal-empty", "No topic matches. Try another word.")]));
    };
    const mark = () => $$(".pal-it", list).forEach((li, i) => { li.classList.toggle("on", i === sel); li.setAttribute("aria-selected", String(i === sel)); if (i === sel) li.scrollIntoView({ block: "nearest" }); });
    const go = x => { close(); const target = x.f === here ? "#" + x.id : x.f + "#" + x.id; if (x.f === here) { const el = document.getElementById(x.id); if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); } else { const a = mk("a"); a.href = target; document.body.append(a); a.click(); a.remove(); } };
    const open = () => { ov.hidden = false; requestAnimationFrame(() => ov.classList.add("open")); input.value = ""; sel = 0; render(); input.focus(); };
    const close = () => { ov.classList.remove("open"); setTimeout(() => { ov.hidden = true; }, 180); if (btn) btn.focus(); };
    if (btn) btn.addEventListener("click", open);
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    input.addEventListener("input", () => { sel = 0; render(); });
    input.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      else if (e.key === "Enter" && items[sel]) { e.preventDefault(); go(items[sel]); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    document.addEventListener("keydown", e => {
      const typing = /input|textarea|select/i.test(document.activeElement.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); ov.hidden ? open() : close(); }
      if (e.shiftKey && !typing && (e.key === "ArrowLeft" || e.key === "ArrowRight") && ov.hidden) { const a = $(e.key === "ArrowLeft" ? ".pg.prev" : ".pg.next"); if (a) { e.preventDefault(); a.click(); } }
    });
  }

  function start() {
    [pageTransitions, motes, heroFx, kinetic, scrollLayer, rail, pointerLayer, celebrations, palette_].forEach(fn => { try { fn(); } catch (err) { console.error("fx", fn.name, err); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
