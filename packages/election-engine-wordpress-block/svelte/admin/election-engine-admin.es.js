var st = Object.defineProperty;
var rt = (t, e, l) => e in t ? st(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var me = (t, e, l) => (rt(t, typeof e != "symbol" ? e + "" : e, l), l);
function ge() {
}
function ye(t, e) {
  for (const l in e)
    t[l] = e[l];
  return (
    /** @type {T & S} */
    t
  );
}
function Xe(t) {
  return t();
}
function we() {
  return /* @__PURE__ */ Object.create(null);
}
function ee(t) {
  t.forEach(Xe);
}
function $e(t) {
  return typeof t == "function";
}
function te(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ft(t) {
  return Object.keys(t).length === 0;
}
function fe(t, e, l, n) {
  if (t) {
    const o = xe(t, e, l, n);
    return t[0](o);
  }
}
function xe(t, e, l, n) {
  return t[1] && n ? ye(l.ctx.slice(), t[1](n(e))) : l.ctx;
}
function ae(t, e, l, n) {
  if (t[2] && n) {
    const o = t[2](n(l));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], c = Math.max(e.dirty.length, o.length);
      for (let s = 0; s < c; s += 1)
        i[s] = e.dirty[s] | o[s];
      return i;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function ue(t, e, l, n, o, i) {
  if (o) {
    const c = xe(e, l, n, i);
    t.p(c, o);
  }
}
function _e(t) {
  if (t.ctx.length > 32) {
    const e = [], l = t.ctx.length / 32;
    for (let n = 0; n < l; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function at(t) {
  const e = {};
  for (const l in t)
    l[0] !== "$" && (e[l] = t[l]);
  return e;
}
function Ne(t, e) {
  const l = {};
  e = new Set(e);
  for (const n in t)
    !e.has(n) && n[0] !== "$" && (l[n] = t[n]);
  return l;
}
function j(t, e) {
  t.appendChild(e);
}
function P(t, e, l) {
  t.insertBefore(e, l || null);
}
function M(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function X(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function q(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createTextNode(t);
}
function T() {
  return z(" ");
}
function et() {
  return z("");
}
function U(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function S(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function ut(t) {
  return Array.from(t.childNodes);
}
function $(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function F(t, e, l) {
  t.classList.toggle(e, !!l);
}
function _t(t, e, { bubbles: l = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: l, cancelable: n });
}
let re;
function se(t) {
  re = t;
}
function tt() {
  if (!re)
    throw new Error("Function called outside component initialization");
  return re;
}
function dt(t) {
  tt().$$.on_destroy.push(t);
}
function lt() {
  const t = tt();
  return (e, l, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const i = _t(
        /** @type {string} */
        e,
        l,
        { cancelable: n }
      );
      return o.slice().forEach((c) => {
        c.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function gt(t, e) {
  const l = t.$$.callbacks[e.type];
  l && l.slice().forEach((n) => n.call(this, e));
}
const oe = [], O = [];
let ce = [];
const ke = [], ht = /* @__PURE__ */ Promise.resolve();
let pe = !1;
function mt() {
  pe || (pe = !0, ht.then(nt));
}
function ve(t) {
  ce.push(t);
}
function Z(t) {
  ke.push(t);
}
const be = /* @__PURE__ */ new Set();
let ie = 0;
function nt() {
  if (ie !== 0)
    return;
  const t = re;
  do {
    try {
      for (; ie < oe.length; ) {
        const e = oe[ie];
        ie++, se(e), bt(e.$$);
      }
    } catch (e) {
      throw oe.length = 0, ie = 0, e;
    }
    for (se(null), oe.length = 0, ie = 0; O.length; )
      O.pop()();
    for (let e = 0; e < ce.length; e += 1) {
      const l = ce[e];
      be.has(l) || (be.add(l), l());
    }
    ce.length = 0;
  } while (oe.length);
  for (; ke.length; )
    ke.pop()();
  pe = !1, be.clear(), se(t);
}
function bt(t) {
  if (t.fragment !== null) {
    t.update(), ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ve);
  }
}
function yt(t) {
  const e = [], l = [];
  ce.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), ce = e;
}
const de = /* @__PURE__ */ new Set();
let x;
function K() {
  x = {
    r: 0,
    c: [],
    p: x
    // parent group
  };
}
function R() {
  x.r || ee(x.c), x = x.p;
}
function N(t, e) {
  t && t.i && (de.delete(t), t.i(e));
}
function A(t, e, l, n) {
  if (t && t.o) {
    if (de.has(t))
      return;
    de.add(t), x.c.push(() => {
      de.delete(t), n && (l && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function G(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Q(t, e, l) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = l, l(t.$$.ctx[n]));
}
function I(t) {
  t && t.c();
}
function V(t, e, l) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(e, l), ve(() => {
    const i = t.$$.on_mount.map(Xe).filter($e);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : ee(i), t.$$.on_mount = [];
  }), o.forEach(ve);
}
function W(t, e) {
  const l = t.$$;
  l.fragment !== null && (yt(l.after_update), ee(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function kt(t, e) {
  t.$$.dirty[0] === -1 && (oe.push(t), mt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function le(t, e, l, n, o, i, c = null, s = [-1]) {
  const u = re;
  se(t);
  const g = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: ge,
    not_equal: o,
    bound: we(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: we(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  c && c(g.root);
  let r = !1;
  if (g.ctx = l ? l(t, e.props || {}, (p, f, ...k) => {
    const y = k.length ? k[0] : f;
    return g.ctx && o(g.ctx[p], g.ctx[p] = y) && (!g.skip_bound && g.bound[p] && g.bound[p](y), r && kt(t, p)), f;
  }) : [], g.update(), r = !0, ee(g.before_update), g.fragment = n ? n(g.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = ut(e.target);
      g.fragment && g.fragment.l(p), p.forEach(M);
    } else
      g.fragment && g.fragment.c();
    e.intro && N(t.$$.fragment), V(t, e.target, e.anchor), nt();
  }
  se(u);
}
class ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    me(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    me(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    W(this, 1), this.$destroy = ge;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, l) {
    if (!$e(l))
      return ge;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(l), () => {
      const o = n.indexOf(l);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ft(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pt);
function vt(t) {
  let e, l, n, o, i;
  const c = (
    /*#slots*/
    t[16].default
  ), s = fe(
    c,
    t,
    /*$$scope*/
    t[15],
    null
  );
  return {
    c() {
      e = q("button"), s && s.c(), S(
        e,
        "type",
        /*type*/
        t[0]
      ), S(
        e,
        "id",
        /*id*/
        t[3]
      ), S(
        e,
        "title",
        /*title*/
        t[1]
      ), e.disabled = /*disabled*/
      t[2], S(
        e,
        "aria-label",
        /*aria_label*/
        t[9]
      ), S(
        e,
        "aria-hidden",
        /*aria_hidden*/
        t[10]
      ), S(e, "class", l = "button " + /*btn_class*/
      t[11] + " " + /*$$restProps*/
      (t[13].class || "")), S(
        e,
        "style",
        /*style*/
        t[12]
      ), F(
        e,
        "button-primary",
        /*primary*/
        t[4]
      ), F(
        e,
        "button-large",
        /*large*/
        t[5]
      ), F(
        e,
        "button-small",
        /*small*/
        t[6]
      ), F(
        e,
        "delete",
        /*warning*/
        t[7]
      ), F(
        e,
        "button-link",
        /*link*/
        t[8]
      );
    },
    m(u, g) {
      P(u, e, g), s && s.m(e, null), n = !0, o || (i = U(
        e,
        "click",
        /*click_handler*/
        t[17]
      ), o = !0);
    },
    p(u, [g]) {
      s && s.p && (!n || g & /*$$scope*/
      32768) && ue(
        s,
        c,
        u,
        /*$$scope*/
        u[15],
        n ? ae(
          c,
          /*$$scope*/
          u[15],
          g,
          null
        ) : _e(
          /*$$scope*/
          u[15]
        ),
        null
      ), (!n || g & /*type*/
      1) && S(
        e,
        "type",
        /*type*/
        u[0]
      ), (!n || g & /*id*/
      8) && S(
        e,
        "id",
        /*id*/
        u[3]
      ), (!n || g & /*title*/
      2) && S(
        e,
        "title",
        /*title*/
        u[1]
      ), (!n || g & /*disabled*/
      4) && (e.disabled = /*disabled*/
      u[2]), (!n || g & /*aria_label*/
      512) && S(
        e,
        "aria-label",
        /*aria_label*/
        u[9]
      ), (!n || g & /*aria_hidden*/
      1024) && S(
        e,
        "aria-hidden",
        /*aria_hidden*/
        u[10]
      ), (!n || g & /*btn_class, $$restProps*/
      10240 && l !== (l = "button " + /*btn_class*/
      u[11] + " " + /*$$restProps*/
      (u[13].class || ""))) && S(e, "class", l), (!n || g & /*style*/
      4096) && S(
        e,
        "style",
        /*style*/
        u[12]
      ), (!n || g & /*btn_class, $$restProps, primary*/
      10256) && F(
        e,
        "button-primary",
        /*primary*/
        u[4]
      ), (!n || g & /*btn_class, $$restProps, large*/
      10272) && F(
        e,
        "button-large",
        /*large*/
        u[5]
      ), (!n || g & /*btn_class, $$restProps, small*/
      10304) && F(
        e,
        "button-small",
        /*small*/
        u[6]
      ), (!n || g & /*btn_class, $$restProps, warning*/
      10368) && F(
        e,
        "delete",
        /*warning*/
        u[7]
      ), (!n || g & /*btn_class, $$restProps, link*/
      10496) && F(
        e,
        "button-link",
        /*link*/
        u[8]
      );
    },
    i(u) {
      n || (N(s, u), n = !0);
    },
    o(u) {
      A(s, u), n = !1;
    },
    d(u) {
      u && M(e), s && s.d(u), o = !1, i();
    }
  };
}
function wt(t, e, l) {
  const n = [
    "type",
    "title",
    "disabled",
    "id",
    "primary",
    "large",
    "small",
    "warning",
    "danger",
    "link",
    "aria_label",
    "aria_hidden",
    "btn_class"
  ];
  let o = Ne(e, n), { $$slots: i = {}, $$scope: c } = e, { type: s = "button" } = e, { title: u = null } = e, { disabled: g = !1 } = e, { id: r = null } = e, { primary: p = !1 } = e, { large: f = !1 } = e, { small: k = !1 } = e, { warning: y = !1 } = e, { danger: a = !1 } = e, { link: v = !1 } = e, { aria_label: C = null } = e, { aria_hidden: _ = !1 } = e, { btn_class: E = "button" } = e, h = "";
  function m(d) {
    gt.call(this, t, d);
  }
  return t.$$set = (d) => {
    e = ye(ye({}, e), at(d)), l(13, o = Ne(e, n)), "type" in d && l(0, s = d.type), "title" in d && l(1, u = d.title), "disabled" in d && l(2, g = d.disabled), "id" in d && l(3, r = d.id), "primary" in d && l(4, p = d.primary), "large" in d && l(5, f = d.large), "small" in d && l(6, k = d.small), "warning" in d && l(7, y = d.warning), "danger" in d && l(14, a = d.danger), "link" in d && l(8, v = d.link), "aria_label" in d && l(9, C = d.aria_label), "aria_hidden" in d && l(10, _ = d.aria_hidden), "btn_class" in d && l(11, E = d.btn_class), "$$scope" in d && l(15, c = d.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*warning*/
    128 && y && l(12, h = "color: #a00; border-color: #a00;"), t.$$.dirty & /*danger*/
    16384 && a && l(12, h = "background-color: #a00; border-color: #a00; color: #fff;");
  }, [
    s,
    u,
    g,
    r,
    p,
    f,
    k,
    y,
    v,
    C,
    _,
    E,
    h,
    o,
    a,
    c,
    i,
    m
  ];
}
class J extends ne {
  constructor(e) {
    super(), le(this, e, wt, vt, te, {
      type: 0,
      title: 1,
      disabled: 2,
      id: 3,
      primary: 4,
      large: 5,
      small: 6,
      warning: 7,
      danger: 14,
      link: 8,
      aria_label: 9,
      aria_hidden: 10,
      btn_class: 11
    });
  }
}
function Ee(t, e, l) {
  const n = t.slice();
  return n[9] = e[l], n;
}
function Ce(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function Se(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function Nt(t) {
  let e = (
    /*year*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*years*/
      8 && e !== (e = /*year*/
      n[15] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Ae(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler*/
      t[6](
        /*year*/
        t[15]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[15]
      ),
      $$slots: { default: [Nt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_year, years*/
      9 && (s.primary = /*selected_year*/
      t[0] === /*year*/
      t[15]), c & /*$$scope, years*/
      262152 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Et(t) {
  let e = (
    /*election*/
    t[12] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*elections*/
      16 && e !== (e = /*election*/
      n[12] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Le(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_1*/
      t[7](
        /*election*/
        t[12]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[12]
      ),
      $$slots: { default: [Et] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_election, elections*/
      18 && (s.primary = /*selected_election*/
      t[1] === /*election*/
      t[12]), c & /*$$scope, elections*/
      262160 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Be(t) {
  let e, l, n, o, i = G(
    /*regions*/
    t[5]
  ), c = [];
  for (let u = 0; u < i.length; u += 1)
    c[u] = Me(Ee(t, i, u));
  const s = (u) => A(c[u], 1, 1, () => {
    c[u] = null;
  });
  return {
    c() {
      e = q("h4"), e.textContent = "Select Province", l = T();
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      n = et();
    },
    m(u, g) {
      P(u, e, g), P(u, l, g);
      for (let r = 0; r < c.length; r += 1)
        c[r] && c[r].m(u, g);
      P(u, n, g), o = !0;
    },
    p(u, g) {
      if (g & /*selected_region, regions*/
      36) {
        i = G(
          /*regions*/
          u[5]
        );
        let r;
        for (r = 0; r < i.length; r += 1) {
          const p = Ee(u, i, r);
          c[r] ? (c[r].p(p, g), N(c[r], 1)) : (c[r] = Me(p), c[r].c(), N(c[r], 1), c[r].m(n.parentNode, n));
        }
        for (K(), r = i.length; r < c.length; r += 1)
          s(r);
        R();
      }
    },
    i(u) {
      if (!o) {
        for (let g = 0; g < i.length; g += 1)
          N(c[g]);
        o = !0;
      }
    },
    o(u) {
      c = c.filter(Boolean);
      for (let g = 0; g < c.length; g += 1)
        A(c[g]);
      o = !1;
    },
    d(u) {
      u && (M(e), M(l), M(n)), X(c, u);
    }
  };
}
function Ct(t) {
  let e = (
    /*region*/
    t[9] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*regions*/
      32 && e !== (e = /*region*/
      n[9] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Me(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_2*/
      t[8](
        /*region*/
        t[9]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[9]
      ),
      $$slots: { default: [Ct] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_region, regions*/
      36 && (s.primary = /*selected_region*/
      t[2] === /*region*/
      t[9]), c & /*$$scope, regions*/
      262176 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function St(t) {
  let e, l, n, o, i, c, s, u, g = G(
    /*years*/
    t[3]
  ), r = [];
  for (let v = 0; v < g.length; v += 1)
    r[v] = Ae(Se(t, g, v));
  const p = (v) => A(r[v], 1, 1, () => {
    r[v] = null;
  });
  let f = G(
    /*elections*/
    t[4]
  ), k = [];
  for (let v = 0; v < f.length; v += 1)
    k[v] = Le(Ce(t, f, v));
  const y = (v) => A(k[v], 1, 1, () => {
    k[v] = null;
  });
  let a = (
    /*selected_election*/
    t[1] === "Provincial Legislature" && Be(t)
  );
  return {
    c() {
      e = q("div"), l = q("h4"), l.textContent = "Select Year", n = T();
      for (let v = 0; v < r.length; v += 1)
        r[v].c();
      o = T(), i = q("h4"), i.textContent = "Select Election", c = T();
      for (let v = 0; v < k.length; v += 1)
        k[v].c();
      s = T(), a && a.c(), S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(v, C) {
      P(v, e, C), j(e, l), j(e, n);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_] && r[_].m(e, null);
      j(e, o), j(e, i), j(e, c);
      for (let _ = 0; _ < k.length; _ += 1)
        k[_] && k[_].m(e, null);
      j(e, s), a && a.m(e, null), u = !0;
    },
    p(v, [C]) {
      if (C & /*selected_year, years*/
      9) {
        g = G(
          /*years*/
          v[3]
        );
        let _;
        for (_ = 0; _ < g.length; _ += 1) {
          const E = Se(v, g, _);
          r[_] ? (r[_].p(E, C), N(r[_], 1)) : (r[_] = Ae(E), r[_].c(), N(r[_], 1), r[_].m(e, o));
        }
        for (K(), _ = g.length; _ < r.length; _ += 1)
          p(_);
        R();
      }
      if (C & /*selected_election, elections*/
      18) {
        f = G(
          /*elections*/
          v[4]
        );
        let _;
        for (_ = 0; _ < f.length; _ += 1) {
          const E = Ce(v, f, _);
          k[_] ? (k[_].p(E, C), N(k[_], 1)) : (k[_] = Le(E), k[_].c(), N(k[_], 1), k[_].m(e, s));
        }
        for (K(), _ = f.length; _ < k.length; _ += 1)
          y(_);
        R();
      }
      /*selected_election*/
      v[1] === "Provincial Legislature" ? a ? (a.p(v, C), C & /*selected_election*/
      2 && N(a, 1)) : (a = Be(v), a.c(), N(a, 1), a.m(e, null)) : a && (K(), A(a, 1, 1, () => {
        a = null;
      }), R());
    },
    i(v) {
      if (!u) {
        for (let C = 0; C < g.length; C += 1)
          N(r[C]);
        for (let C = 0; C < f.length; C += 1)
          N(k[C]);
        N(a), u = !0;
      }
    },
    o(v) {
      r = r.filter(Boolean);
      for (let C = 0; C < r.length; C += 1)
        A(r[C]);
      k = k.filter(Boolean);
      for (let C = 0; C < k.length; C += 1)
        A(k[C]);
      A(a), u = !1;
    },
    d(v) {
      v && M(e), X(r, v), X(k, v), a && a.d();
    }
  };
}
function At(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: o = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: c = "National Assembly" } = e, { regions: s = [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ] } = e, { selected_region: u = "Gauteng" } = e;
  const g = (f) => l(0, o = f), r = (f) => l(1, c = f), p = (f) => l(2, u = f);
  return t.$$set = (f) => {
    "years" in f && l(3, n = f.years), "selected_year" in f && l(0, o = f.selected_year), "elections" in f && l(4, i = f.elections), "selected_election" in f && l(1, c = f.selected_election), "regions" in f && l(5, s = f.regions), "selected_region" in f && l(2, u = f.selected_region);
  }, [
    o,
    c,
    u,
    n,
    i,
    s,
    g,
    r,
    p
  ];
}
class Lt extends ne {
  constructor(e) {
    super(), le(this, e, At, St, te, {
      years: 3,
      selected_year: 0,
      elections: 4,
      selected_election: 1,
      regions: 5,
      selected_region: 2
    });
  }
}
function Pe(t, e, l) {
  const n = t.slice();
  return n[9] = e[l], n;
}
function qe(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function je(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function Bt(t) {
  let e = (
    /*year*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*years*/
      8 && e !== (e = /*year*/
      n[15] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Te(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler*/
      t[6](
        /*year*/
        t[15]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[15]
      ),
      $$slots: { default: [Bt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_year, years*/
      9 && (s.primary = /*selected_year*/
      t[0] === /*year*/
      t[15]), c & /*$$scope, years*/
      262152 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Mt(t) {
  let e = (
    /*election*/
    t[12] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*elections*/
      16 && e !== (e = /*election*/
      n[12] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function De(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_1*/
      t[7](
        /*election*/
        t[12]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[12]
      ),
      $$slots: { default: [Mt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_election, elections*/
      18 && (s.primary = /*selected_election*/
      t[1] === /*election*/
      t[12]), c & /*$$scope, elections*/
      262160 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Pt(t) {
  let e = (
    /*region*/
    t[9] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*regions*/
      32 && e !== (e = /*region*/
      n[9] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function He(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_2*/
      t[8](
        /*region*/
        t[9]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[9]
      ),
      $$slots: { default: [Pt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_region, regions*/
      36 && (s.primary = /*selected_region*/
      t[2] === /*region*/
      t[9]), c & /*$$scope, regions*/
      262176 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function qt(t) {
  let e, l, n, o, i, c, s, u, g, r, p = G(
    /*years*/
    t[3]
  ), f = [];
  for (let h = 0; h < p.length; h += 1)
    f[h] = Te(je(t, p, h));
  const k = (h) => A(f[h], 1, 1, () => {
    f[h] = null;
  });
  let y = G(
    /*elections*/
    t[4]
  ), a = [];
  for (let h = 0; h < y.length; h += 1)
    a[h] = De(qe(t, y, h));
  const v = (h) => A(a[h], 1, 1, () => {
    a[h] = null;
  });
  let C = G(
    /*regions*/
    t[5]
  ), _ = [];
  for (let h = 0; h < C.length; h += 1)
    _[h] = He(Pe(t, C, h));
  const E = (h) => A(_[h], 1, 1, () => {
    _[h] = null;
  });
  return {
    c() {
      e = q("div"), l = q("h4"), l.textContent = "Select Year", n = T();
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      o = T(), i = q("h4"), i.textContent = "Select Election", c = T();
      for (let h = 0; h < a.length; h += 1)
        a[h].c();
      s = T(), u = q("h4"), u.textContent = "Select Region", g = T();
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(h, m) {
      P(h, e, m), j(e, l), j(e, n);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(e, null);
      j(e, o), j(e, i), j(e, c);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(e, null);
      j(e, s), j(e, u), j(e, g);
      for (let d = 0; d < _.length; d += 1)
        _[d] && _[d].m(e, null);
      r = !0;
    },
    p(h, [m]) {
      if (m & /*selected_year, years*/
      9) {
        p = G(
          /*years*/
          h[3]
        );
        let d;
        for (d = 0; d < p.length; d += 1) {
          const H = je(h, p, d);
          f[d] ? (f[d].p(H, m), N(f[d], 1)) : (f[d] = Te(H), f[d].c(), N(f[d], 1), f[d].m(e, o));
        }
        for (K(), d = p.length; d < f.length; d += 1)
          k(d);
        R();
      }
      if (m & /*selected_election, elections*/
      18) {
        y = G(
          /*elections*/
          h[4]
        );
        let d;
        for (d = 0; d < y.length; d += 1) {
          const H = qe(h, y, d);
          a[d] ? (a[d].p(H, m), N(a[d], 1)) : (a[d] = De(H), a[d].c(), N(a[d], 1), a[d].m(e, s));
        }
        for (K(), d = y.length; d < a.length; d += 1)
          v(d);
        R();
      }
      if (m & /*selected_region, regions*/
      36) {
        C = G(
          /*regions*/
          h[5]
        );
        let d;
        for (d = 0; d < C.length; d += 1) {
          const H = Pe(h, C, d);
          _[d] ? (_[d].p(H, m), N(_[d], 1)) : (_[d] = He(H), _[d].c(), N(_[d], 1), _[d].m(e, null));
        }
        for (K(), d = C.length; d < _.length; d += 1)
          E(d);
        R();
      }
    },
    i(h) {
      if (!r) {
        for (let m = 0; m < p.length; m += 1)
          N(f[m]);
        for (let m = 0; m < y.length; m += 1)
          N(a[m]);
        for (let m = 0; m < C.length; m += 1)
          N(_[m]);
        r = !0;
      }
    },
    o(h) {
      f = f.filter(Boolean);
      for (let m = 0; m < f.length; m += 1)
        A(f[m]);
      a = a.filter(Boolean);
      for (let m = 0; m < a.length; m += 1)
        A(a[m]);
      _ = _.filter(Boolean);
      for (let m = 0; m < _.length; m += 1)
        A(_[m]);
      r = !1;
    },
    d(h) {
      h && M(e), X(f, h), X(a, h), X(_, h);
    }
  };
}
function jt(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: o = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: c = "National Assembly" } = e, { regions: s = [
    "National",
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ] } = e, { selected_region: u = "National" } = e;
  const g = (f) => l(0, o = f), r = (f) => l(1, c = f), p = (f) => l(2, u = f);
  return t.$$set = (f) => {
    "years" in f && l(3, n = f.years), "selected_year" in f && l(0, o = f.selected_year), "elections" in f && l(4, i = f.elections), "selected_election" in f && l(1, c = f.selected_election), "regions" in f && l(5, s = f.regions), "selected_region" in f && l(2, u = f.selected_region);
  }, [
    o,
    c,
    u,
    n,
    i,
    s,
    g,
    r,
    p
  ];
}
class Tt extends ne {
  constructor(e) {
    super(), le(this, e, jt, qt, te, {
      years: 3,
      selected_year: 0,
      elections: 4,
      selected_election: 1,
      regions: 5,
      selected_region: 2
    });
  }
}
function Ge(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function Oe(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function Ve(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function We(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function Dt(t) {
  let e = (
    /*year*/
    t[21] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*years*/
      16 && e !== (e = /*year*/
      n[21] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Fe(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler*/
      t[8](
        /*year*/
        t[21]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[21]
      ),
      $$slots: { default: [Dt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_year, years*/
      17 && (s.primary = /*selected_year*/
      t[0] === /*year*/
      t[21]), c & /*$$scope, years*/
      16777232 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Ht(t) {
  let e = (
    /*election*/
    t[18] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*elections*/
      32 && e !== (e = /*election*/
      n[18] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Ie(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_1*/
      t[9](
        /*election*/
        t[18]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[18]
      ),
      $$slots: { default: [Ht] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_election, elections*/
      34 && (s.primary = /*selected_election*/
      t[1] === /*election*/
      t[18]), c & /*$$scope, elections*/
      16777248 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Gt(t) {
  let e = (
    /*region*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*regions*/
      64 && e !== (e = /*region*/
      n[15] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Ke(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_2*/
      t[10](
        /*region*/
        t[15]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[15]
      ),
      $$slots: { default: [Gt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_region, regions*/
      68 && (s.primary = /*selected_region*/
      t[2] === /*region*/
      t[15]), c & /*$$scope, regions*/
      16777280 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Ot(t) {
  let e = (
    /*field*/
    t[12] + ""
  ), l;
  return {
    c() {
      l = z(e);
    },
    m(n, o) {
      P(n, l, o);
    },
    p(n, o) {
      o & /*fields*/
      128 && e !== (e = /*field*/
      n[12] + "") && $(l, e);
    },
    d(n) {
      n && M(l);
    }
  };
}
function Re(t) {
  let e, l, n;
  function o() {
    return (
      /*click_handler_3*/
      t[11](
        /*field*/
        t[12]
      )
    );
  }
  return l = new J({
    props: {
      primary: (
        /*selected_fields*/
        t[3].includes(
          /*field*/
          t[12]
        )
      ),
      $$slots: { default: [Ot] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", o), {
    c() {
      e = q("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, c) {
      P(i, e, c), V(l, e, null), n = !0;
    },
    p(i, c) {
      t = i;
      const s = {};
      c & /*selected_fields, fields*/
      136 && (s.primary = /*selected_fields*/
      t[3].includes(
        /*field*/
        t[12]
      )), c & /*$$scope, fields*/
      16777344 && (s.$$scope = { dirty: c, ctx: t }), l.$set(s);
    },
    i(i) {
      n || (N(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && M(e), W(l);
    }
  };
}
function Vt(t) {
  let e, l, n, o, i, c, s, u, g, r, p, f, k, y = G(
    /*years*/
    t[4]
  ), a = [];
  for (let w = 0; w < y.length; w += 1)
    a[w] = Fe(We(t, y, w));
  const v = (w) => A(a[w], 1, 1, () => {
    a[w] = null;
  });
  let C = G(
    /*elections*/
    t[5]
  ), _ = [];
  for (let w = 0; w < C.length; w += 1)
    _[w] = Ie(Ve(t, C, w));
  const E = (w) => A(_[w], 1, 1, () => {
    _[w] = null;
  });
  let h = G(
    /*regions*/
    t[6]
  ), m = [];
  for (let w = 0; w < h.length; w += 1)
    m[w] = Ke(Oe(t, h, w));
  const d = (w) => A(m[w], 1, 1, () => {
    m[w] = null;
  });
  let H = G(
    /*fields*/
    t[7]
  ), D = [];
  for (let w = 0; w < H.length; w += 1)
    D[w] = Re(Ge(t, H, w));
  const he = (w) => A(D[w], 1, 1, () => {
    D[w] = null;
  });
  return {
    c() {
      e = q("div"), l = q("h4"), l.textContent = "Select Year", n = T();
      for (let w = 0; w < a.length; w += 1)
        a[w].c();
      o = T(), i = q("h4"), i.textContent = "Select Election", c = T();
      for (let w = 0; w < _.length; w += 1)
        _[w].c();
      s = T(), u = q("h4"), u.textContent = "Select Region", g = T();
      for (let w = 0; w < m.length; w += 1)
        m[w].c();
      r = T(), p = q("h4"), p.textContent = "Select Fields", f = T();
      for (let w = 0; w < D.length; w += 1)
        D[w].c();
      S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(w, L) {
      P(w, e, L), j(e, l), j(e, n);
      for (let b = 0; b < a.length; b += 1)
        a[b] && a[b].m(e, null);
      j(e, o), j(e, i), j(e, c);
      for (let b = 0; b < _.length; b += 1)
        _[b] && _[b].m(e, null);
      j(e, s), j(e, u), j(e, g);
      for (let b = 0; b < m.length; b += 1)
        m[b] && m[b].m(e, null);
      j(e, r), j(e, p), j(e, f);
      for (let b = 0; b < D.length; b += 1)
        D[b] && D[b].m(e, null);
      k = !0;
    },
    p(w, [L]) {
      if (L & /*selected_year, years*/
      17) {
        y = G(
          /*years*/
          w[4]
        );
        let b;
        for (b = 0; b < y.length; b += 1) {
          const Y = We(w, y, b);
          a[b] ? (a[b].p(Y, L), N(a[b], 1)) : (a[b] = Fe(Y), a[b].c(), N(a[b], 1), a[b].m(e, o));
        }
        for (K(), b = y.length; b < a.length; b += 1)
          v(b);
        R();
      }
      if (L & /*selected_election, elections*/
      34) {
        C = G(
          /*elections*/
          w[5]
        );
        let b;
        for (b = 0; b < C.length; b += 1) {
          const Y = Ve(w, C, b);
          _[b] ? (_[b].p(Y, L), N(_[b], 1)) : (_[b] = Ie(Y), _[b].c(), N(_[b], 1), _[b].m(e, s));
        }
        for (K(), b = C.length; b < _.length; b += 1)
          E(b);
        R();
      }
      if (L & /*selected_region, regions*/
      68) {
        h = G(
          /*regions*/
          w[6]
        );
        let b;
        for (b = 0; b < h.length; b += 1) {
          const Y = Oe(w, h, b);
          m[b] ? (m[b].p(Y, L), N(m[b], 1)) : (m[b] = Ke(Y), m[b].c(), N(m[b], 1), m[b].m(e, r));
        }
        for (K(), b = h.length; b < m.length; b += 1)
          d(b);
        R();
      }
      if (L & /*selected_fields, fields*/
      136) {
        H = G(
          /*fields*/
          w[7]
        );
        let b;
        for (b = 0; b < H.length; b += 1) {
          const Y = Ge(w, H, b);
          D[b] ? (D[b].p(Y, L), N(D[b], 1)) : (D[b] = Re(Y), D[b].c(), N(D[b], 1), D[b].m(e, null));
        }
        for (K(), b = H.length; b < D.length; b += 1)
          he(b);
        R();
      }
    },
    i(w) {
      if (!k) {
        for (let L = 0; L < y.length; L += 1)
          N(a[L]);
        for (let L = 0; L < C.length; L += 1)
          N(_[L]);
        for (let L = 0; L < h.length; L += 1)
          N(m[L]);
        for (let L = 0; L < H.length; L += 1)
          N(D[L]);
        k = !0;
      }
    },
    o(w) {
      a = a.filter(Boolean);
      for (let L = 0; L < a.length; L += 1)
        A(a[L]);
      _ = _.filter(Boolean);
      for (let L = 0; L < _.length; L += 1)
        A(_[L]);
      m = m.filter(Boolean);
      for (let L = 0; L < m.length; L += 1)
        A(m[L]);
      D = D.filter(Boolean);
      for (let L = 0; L < D.length; L += 1)
        A(D[L]);
      k = !1;
    },
    d(w) {
      w && M(e), X(a, w), X(_, w), X(m, w), X(D, w);
    }
  };
}
function Wt(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: o = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: c = "National Assembly" } = e, { regions: s = [
    "National",
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ] } = e, { selected_region: u = "National" } = e, { fields: g = ["Party", "Votes", "Seats"] } = e, { selected_fields: r = ["Party", "Votes", "Seats"] } = e;
  const p = (a) => l(0, o = a), f = (a) => l(1, c = a), k = (a) => l(2, u = a), y = (a) => {
    r.includes(a) ? l(3, r = r.filter((v) => v !== a)) : l(3, r = [...r, a]), l(3, r);
  };
  return t.$$set = (a) => {
    "years" in a && l(4, n = a.years), "selected_year" in a && l(0, o = a.selected_year), "elections" in a && l(5, i = a.elections), "selected_election" in a && l(1, c = a.selected_election), "regions" in a && l(6, s = a.regions), "selected_region" in a && l(2, u = a.selected_region), "fields" in a && l(7, g = a.fields), "selected_fields" in a && l(3, r = a.selected_fields);
  }, [
    o,
    c,
    u,
    r,
    n,
    i,
    s,
    g,
    p,
    f,
    k,
    y
  ];
}
class Ft extends ne {
  constructor(e) {
    super(), le(this, e, Wt, Vt, te, {
      years: 4,
      selected_year: 0,
      elections: 5,
      selected_election: 1,
      regions: 6,
      selected_region: 2,
      fields: 7,
      selected_fields: 3
    });
  }
}
const It = (t) => ({}), Ye = (t) => ({}), Kt = (t) => ({}), Ze = (t) => ({});
function Rt(t) {
  let e, l, n, o, i, c, s, u, g, r, p, f;
  const k = (
    /*#slots*/
    t[5].title
  ), y = fe(
    k,
    t,
    /*$$scope*/
    t[4],
    Ze
  ), a = (
    /*#slots*/
    t[5].default
  ), v = fe(
    a,
    t,
    /*$$scope*/
    t[4],
    null
  ), C = (
    /*#slots*/
    t[5].footer
  ), _ = fe(
    C,
    t,
    /*$$scope*/
    t[4],
    Ye
  );
  return {
    c() {
      e = q("div"), l = T(), n = q("div"), o = q("div"), i = q("h3"), y && y.c(), c = T(), s = q("div"), v && v.c(), u = T(), g = q("div"), _ && _.c(), S(e, "role", "button"), S(e, "tabindex", "-1"), S(e, "class", "modal-background svelte-uku0eo"), S(o, "class", "election-engine-modal-title svelte-uku0eo"), S(s, "class", "election-engine-modal-content"), S(g, "class", "election-engine-modal-footer svelte-uku0eo"), S(n, "class", "modal svelte-uku0eo"), S(n, "role", "dialog"), S(n, "aria-modal", "true");
    },
    m(E, h) {
      P(E, e, h), t[6](e), P(E, l, h), P(E, n, h), j(n, o), j(o, i), y && y.m(i, null), j(n, c), j(n, s), v && v.m(s, null), j(n, u), j(n, g), _ && _.m(g, null), t[7](n), r = !0, p || (f = [
        U(
          window,
          "keydown",
          /*handle_keydown*/
          t[3]
        ),
        U(
          e,
          "click",
          /*close*/
          t[2]
        ),
        U(
          e,
          "keypress",
          /*handle_keydown*/
          t[3]
        ),
        U(
          n,
          "close",
          /*close*/
          t[2]
        )
      ], p = !0);
    },
    p(E, [h]) {
      y && y.p && (!r || h & /*$$scope*/
      16) && ue(
        y,
        k,
        E,
        /*$$scope*/
        E[4],
        r ? ae(
          k,
          /*$$scope*/
          E[4],
          h,
          Kt
        ) : _e(
          /*$$scope*/
          E[4]
        ),
        Ze
      ), v && v.p && (!r || h & /*$$scope*/
      16) && ue(
        v,
        a,
        E,
        /*$$scope*/
        E[4],
        r ? ae(
          a,
          /*$$scope*/
          E[4],
          h,
          null
        ) : _e(
          /*$$scope*/
          E[4]
        ),
        null
      ), _ && _.p && (!r || h & /*$$scope*/
      16) && ue(
        _,
        C,
        E,
        /*$$scope*/
        E[4],
        r ? ae(
          C,
          /*$$scope*/
          E[4],
          h,
          It
        ) : _e(
          /*$$scope*/
          E[4]
        ),
        Ye
      );
    },
    i(E) {
      r || (N(y, E), N(v, E), N(_, E), r = !0);
    },
    o(E) {
      A(y, E), A(v, E), A(_, E), r = !1;
    },
    d(E) {
      E && (M(e), M(l), M(n)), t[6](null), y && y.d(E), v && v.d(E), _ && _.d(E), t[7](null), p = !1, ee(f);
    }
  };
}
function Yt(t, e, l) {
  let { $$slots: n = {}, $$scope: o } = e;
  const i = lt(), c = () => i("close");
  let s, u;
  const g = (k) => {
    if (k.key === "Escape") {
      c();
      return;
    }
    if (k.key === "Tab") {
      const y = s.querySelectorAll("*"), a = Array.from(y).filter((C) => C.tabIndex >= 0);
      let v = a.indexOf(document.activeElement);
      v === -1 && k.shiftKey && (v = 0), v += a.length + (k.shiftKey ? -1 : 1), v %= a.length, a[v].focus(), k.preventDefault();
    }
  }, r = typeof document < "u" && document.activeElement;
  r && dt(() => {
    r.focus();
  });
  function p(k) {
    O[k ? "unshift" : "push"](() => {
      u = k, l(1, u);
    });
  }
  function f(k) {
    O[k ? "unshift" : "push"](() => {
      s = k, l(0, s);
    });
  }
  return t.$$set = (k) => {
    "$$scope" in k && l(4, o = k.$$scope);
  }, [
    s,
    u,
    c,
    g,
    o,
    n,
    p,
    f
  ];
}
class Zt extends ne {
  constructor(e) {
    super(), le(this, e, Yt, Rt, te, {});
  }
}
function Qe(t) {
  let e, l;
  return e = new Zt({
    props: {
      $$slots: {
        title: [Ut],
        default: [zt]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "close",
    /*close_handler*/
    t[25]
  ), e.$on(
    "close",
    /*onClose*/
    t[4]
  ), {
    c() {
      I(e.$$.fragment);
    },
    m(n, o) {
      V(e, n, o), l = !0;
    },
    p(n, o) {
      const i = {};
      o & /*$$scope, show_modal, visualisation_data, visualisation*/
      268435463 && (i.$$scope = { dirty: o, ctx: n }), e.$set(i);
    },
    i(n) {
      l || (N(e.$$.fragment, n), l = !0);
    },
    o(n) {
      A(e.$$.fragment, n), l = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function ze(t) {
  let e, l, n, o, i;
  function c(r) {
    t[14](r);
  }
  function s(r) {
    t[15](r);
  }
  function u(r) {
    t[16](r);
  }
  let g = {};
  return (
    /*visualisation_data*/
    t[1].hemicycle.selected_year !== void 0 && (g.selected_year = /*visualisation_data*/
    t[1].hemicycle.selected_year), /*visualisation_data*/
    t[1].hemicycle.selected_election !== void 0 && (g.selected_election = /*visualisation_data*/
    t[1].hemicycle.selected_election), /*visualisation_data*/
    t[1].hemicycle.selected_region !== void 0 && (g.selected_region = /*visualisation_data*/
    t[1].hemicycle.selected_region), e = new Lt({ props: g }), O.push(() => Q(e, "selected_year", c)), O.push(() => Q(e, "selected_election", s)), O.push(() => Q(e, "selected_region", u)), {
      c() {
        I(e.$$.fragment);
      },
      m(r, p) {
        V(e, r, p), i = !0;
      },
      p(r, p) {
        const f = {};
        !l && p & /*visualisation_data*/
        2 && (l = !0, f.selected_year = /*visualisation_data*/
        r[1].hemicycle.selected_year, Z(() => l = !1)), !n && p & /*visualisation_data*/
        2 && (n = !0, f.selected_election = /*visualisation_data*/
        r[1].hemicycle.selected_election, Z(() => n = !1)), !o && p & /*visualisation_data*/
        2 && (o = !0, f.selected_region = /*visualisation_data*/
        r[1].hemicycle.selected_region, Z(() => o = !1)), e.$set(f);
      },
      i(r) {
        i || (N(e.$$.fragment, r), i = !0);
      },
      o(r) {
        A(e.$$.fragment, r), i = !1;
      },
      d(r) {
        W(e, r);
      }
    }
  );
}
function Ue(t) {
  let e, l, n, o, i;
  function c(r) {
    t[17](r);
  }
  function s(r) {
    t[18](r);
  }
  function u(r) {
    t[19](r);
  }
  let g = {};
  return (
    /*visualisation_data*/
    t[1].carto.selected_year !== void 0 && (g.selected_year = /*visualisation_data*/
    t[1].carto.selected_year), /*visualisation_data*/
    t[1].carto.selected_election !== void 0 && (g.selected_election = /*visualisation_data*/
    t[1].carto.selected_election), /*visualisation_data*/
    t[1].carto.selected_region !== void 0 && (g.selected_region = /*visualisation_data*/
    t[1].carto.selected_region), e = new Tt({ props: g }), O.push(() => Q(e, "selected_year", c)), O.push(() => Q(e, "selected_election", s)), O.push(() => Q(e, "selected_region", u)), {
      c() {
        I(e.$$.fragment);
      },
      m(r, p) {
        V(e, r, p), i = !0;
      },
      p(r, p) {
        const f = {};
        !l && p & /*visualisation_data*/
        2 && (l = !0, f.selected_year = /*visualisation_data*/
        r[1].carto.selected_year, Z(() => l = !1)), !n && p & /*visualisation_data*/
        2 && (n = !0, f.selected_election = /*visualisation_data*/
        r[1].carto.selected_election, Z(() => n = !1)), !o && p & /*visualisation_data*/
        2 && (o = !0, f.selected_region = /*visualisation_data*/
        r[1].carto.selected_region, Z(() => o = !1)), e.$set(f);
      },
      i(r) {
        i || (N(e.$$.fragment, r), i = !0);
      },
      o(r) {
        A(e.$$.fragment, r), i = !1;
      },
      d(r) {
        W(e, r);
      }
    }
  );
}
function Je(t) {
  let e, l, n, o, i, c;
  function s(f) {
    t[20](f);
  }
  function u(f) {
    t[21](f);
  }
  function g(f) {
    t[22](f);
  }
  function r(f) {
    t[23](f);
  }
  let p = {};
  return (
    /*visualisation_data*/
    t[1].table.selected_year !== void 0 && (p.selected_year = /*visualisation_data*/
    t[1].table.selected_year), /*visualisation_data*/
    t[1].table.selected_election !== void 0 && (p.selected_election = /*visualisation_data*/
    t[1].table.selected_election), /*visualisation_data*/
    t[1].table.selected_region !== void 0 && (p.selected_region = /*visualisation_data*/
    t[1].table.selected_region), /*visualisation_data*/
    t[1].table.selected_fields !== void 0 && (p.selected_fields = /*visualisation_data*/
    t[1].table.selected_fields), e = new Ft({ props: p }), O.push(() => Q(e, "selected_year", s)), O.push(() => Q(e, "selected_election", u)), O.push(() => Q(e, "selected_region", g)), O.push(() => Q(e, "selected_fields", r)), {
      c() {
        I(e.$$.fragment);
      },
      m(f, k) {
        V(e, f, k), c = !0;
      },
      p(f, k) {
        const y = {};
        !l && k & /*visualisation_data*/
        2 && (l = !0, y.selected_year = /*visualisation_data*/
        f[1].table.selected_year, Z(() => l = !1)), !n && k & /*visualisation_data*/
        2 && (n = !0, y.selected_election = /*visualisation_data*/
        f[1].table.selected_election, Z(() => n = !1)), !o && k & /*visualisation_data*/
        2 && (o = !0, y.selected_region = /*visualisation_data*/
        f[1].table.selected_region, Z(() => o = !1)), !i && k & /*visualisation_data*/
        2 && (i = !0, y.selected_fields = /*visualisation_data*/
        f[1].table.selected_fields, Z(() => i = !1)), e.$set(y);
      },
      i(f) {
        c || (N(e.$$.fragment, f), c = !0);
      },
      o(f) {
        A(e.$$.fragment, f), c = !1;
      },
      d(f) {
        W(e, f);
      }
    }
  );
}
function Qt(t) {
  let e;
  return {
    c() {
      e = z("Done");
    },
    m(l, n) {
      P(l, e, n);
    },
    d(l) {
      l && M(e);
    }
  };
}
function zt(t) {
  let e, l, n, o, i, c, s, u, g, r, p, f, k, y, a, v, C, _ = (
    /*visualisation*/
    t[0] === "hemicycle" && ze(t)
  ), E = (
    /*visualisation*/
    t[0] === "carto" && Ue(t)
  ), h = (
    /*visualisation*/
    t[0] === "table" && Je(t)
  );
  return y = new J({
    props: {
      secondary: !0,
      $$slots: { default: [Qt] },
      $$scope: { ctx: t }
    }
  }), y.$on(
    "click",
    /*click_handler_3*/
    t[24]
  ), y.$on(
    "click",
    /*onClose*/
    t[4]
  ), {
    c() {
      e = q("div"), l = q("div"), l.innerHTML = "<p>Hemicycle</p>", n = T(), o = q("div"), o.innerHTML = "<p>Map</p>", i = T(), c = q("div"), c.innerHTML = "<p>Table</p>", s = T(), _ && _.c(), u = T(), E && E.c(), g = T(), h && h.c(), r = T(), p = q("hr"), f = T(), k = q("div"), I(y.$$.fragment), S(l, "class", "election-engine-visualisation-item svelte-48878w"), S(l, "role", "button"), S(l, "tabindex", "0"), F(
        l,
        "selected",
        /*visualisation*/
        t[0] === "hemicycle"
      ), S(o, "class", "election-engine-visualisation-item svelte-48878w"), S(o, "role", "button"), S(o, "tabindex", "0"), F(
        o,
        "selected",
        /*visualisation*/
        t[0] === "carto"
      ), S(c, "class", "election-engine-visualisation-item svelte-48878w"), S(c, "role", "button"), S(c, "tabindex", "0"), F(
        c,
        "selected",
        /*visualisation*/
        t[0] === "table"
      ), S(e, "class", "election-engine-visualisation-container svelte-48878w"), S(p, "class", "mt-4 svelte-48878w"), S(k, "class", "mt-4 svelte-48878w");
    },
    m(m, d) {
      P(m, e, d), j(e, l), j(e, n), j(e, o), j(e, i), j(e, c), P(m, s, d), _ && _.m(m, d), P(m, u, d), E && E.m(m, d), P(m, g, d), h && h.m(m, d), P(m, r, d), P(m, p, d), P(m, f, d), P(m, k, d), V(y, k, null), a = !0, v || (C = [
        U(
          l,
          "click",
          /*click_handler*/
          t[8]
        ),
        U(
          l,
          "keypress",
          /*keypress_handler*/
          t[9]
        ),
        U(
          o,
          "click",
          /*click_handler_1*/
          t[10]
        ),
        U(
          o,
          "keypress",
          /*keypress_handler_1*/
          t[11]
        ),
        U(
          c,
          "click",
          /*click_handler_2*/
          t[12]
        ),
        U(
          c,
          "keypress",
          /*keypress_handler_2*/
          t[13]
        )
      ], v = !0);
    },
    p(m, d) {
      (!a || d & /*visualisation*/
      1) && F(
        l,
        "selected",
        /*visualisation*/
        m[0] === "hemicycle"
      ), (!a || d & /*visualisation*/
      1) && F(
        o,
        "selected",
        /*visualisation*/
        m[0] === "carto"
      ), (!a || d & /*visualisation*/
      1) && F(
        c,
        "selected",
        /*visualisation*/
        m[0] === "table"
      ), /*visualisation*/
      m[0] === "hemicycle" ? _ ? (_.p(m, d), d & /*visualisation*/
      1 && N(_, 1)) : (_ = ze(m), _.c(), N(_, 1), _.m(u.parentNode, u)) : _ && (K(), A(_, 1, 1, () => {
        _ = null;
      }), R()), /*visualisation*/
      m[0] === "carto" ? E ? (E.p(m, d), d & /*visualisation*/
      1 && N(E, 1)) : (E = Ue(m), E.c(), N(E, 1), E.m(g.parentNode, g)) : E && (K(), A(E, 1, 1, () => {
        E = null;
      }), R()), /*visualisation*/
      m[0] === "table" ? h ? (h.p(m, d), d & /*visualisation*/
      1 && N(h, 1)) : (h = Je(m), h.c(), N(h, 1), h.m(r.parentNode, r)) : h && (K(), A(h, 1, 1, () => {
        h = null;
      }), R());
      const H = {};
      d & /*$$scope*/
      268435456 && (H.$$scope = { dirty: d, ctx: m }), y.$set(H);
    },
    i(m) {
      a || (N(_), N(E), N(h), N(y.$$.fragment, m), a = !0);
    },
    o(m) {
      A(_), A(E), A(h), A(y.$$.fragment, m), a = !1;
    },
    d(m) {
      m && (M(e), M(s), M(u), M(g), M(r), M(p), M(f), M(k)), _ && _.d(m), E && E.d(m), h && h.d(m), W(y), v = !1, ee(C);
    }
  };
}
function Ut(t) {
  let e;
  return {
    c() {
      e = q("div"), e.innerHTML = "<h2>Elections Engine</h2>", S(e, "slot", "title");
    },
    m(l, n) {
      P(l, e, n);
    },
    p: ge,
    d(l) {
      l && M(e);
    }
  };
}
function Jt(t) {
  let e, l, n = (
    /*show_modal*/
    t[2] && Qe(t)
  );
  return {
    c() {
      n && n.c(), e = et();
    },
    m(o, i) {
      n && n.m(o, i), P(o, e, i), l = !0;
    },
    p(o, [i]) {
      /*show_modal*/
      o[2] ? n ? (n.p(o, i), i & /*show_modal*/
      4 && N(n, 1)) : (n = Qe(o), n.c(), N(n, 1), n.m(e.parentNode, e)) : n && (K(), A(n, 1, 1, () => {
        n = null;
      }), R());
    },
    i(o) {
      l || (N(n), l = !0);
    },
    o(o) {
      A(n), l = !1;
    },
    d(o) {
      o && M(e), n && n.d(o);
    }
  };
}
function Xt(t, e, l) {
  const n = lt();
  let { show_modal: o = !1 } = e, { is_block: i = !0 } = e, { visualisation: c = "hemicycle" } = e, { visualisation_data: s = {
    hemicycle: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "Gauteng"
    },
    carto: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "National"
    },
    table: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "National",
      selected_fields: ["Party", "Votes", "Seats"]
    }
  } } = e, u = null, g = null;
  i && jQuery(document).on("election-engine-edit-block-click", (B, tl, ot, ct) => {
    l(6, u = ot), l(7, g = ct), u.visualisation && l(0, c = u.visualisation), l(1, s[c] = { ...u }, s), l(2, o = !0);
  });
  function r(B) {
    l(0, c = B), u && l(6, u.visualisation = B, u);
  }
  function p(B) {
    B.preventDefault(), n("close");
  }
  const f = () => r("hemicycle"), k = () => r("hemicycle"), y = () => r("carto"), a = () => r("carto"), v = () => r("table"), C = () => r("table");
  function _(B) {
    t.$$.not_equal(s.hemicycle.selected_year, B) && (s.hemicycle.selected_year = B, l(1, s));
  }
  function E(B) {
    t.$$.not_equal(s.hemicycle.selected_election, B) && (s.hemicycle.selected_election = B, l(1, s));
  }
  function h(B) {
    t.$$.not_equal(s.hemicycle.selected_region, B) && (s.hemicycle.selected_region = B, l(1, s));
  }
  function m(B) {
    t.$$.not_equal(s.carto.selected_year, B) && (s.carto.selected_year = B, l(1, s));
  }
  function d(B) {
    t.$$.not_equal(s.carto.selected_election, B) && (s.carto.selected_election = B, l(1, s));
  }
  function H(B) {
    t.$$.not_equal(s.carto.selected_region, B) && (s.carto.selected_region = B, l(1, s));
  }
  function D(B) {
    t.$$.not_equal(s.table.selected_year, B) && (s.table.selected_year = B, l(1, s));
  }
  function he(B) {
    t.$$.not_equal(s.table.selected_election, B) && (s.table.selected_election = B, l(1, s));
  }
  function w(B) {
    t.$$.not_equal(s.table.selected_region, B) && (s.table.selected_region = B, l(1, s));
  }
  function L(B) {
    t.$$.not_equal(s.table.selected_fields, B) && (s.table.selected_fields = B, l(1, s));
  }
  const b = () => l(2, o = !1), Y = () => l(2, o = !1);
  return t.$$set = (B) => {
    "show_modal" in B && l(2, o = B.show_modal), "is_block" in B && l(5, i = B.is_block), "visualisation" in B && l(0, c = B.visualisation), "visualisation_data" in B && l(1, s = B.visualisation_data);
  }, t.$$.update = () => {
    t.$$.dirty & /*attributes, setAttributes, is_block, visualisation, visualisation_data*/
    227 && u && g && i && (c === "hemicycle" ? g({
      ...u,
      ...s.hemicycle
    }) : c === "carto" ? g({
      ...u,
      ...s.carto
    }) : c === "table" && g({
      ...u,
      ...s.table
    }));
  }, [
    c,
    s,
    o,
    r,
    p,
    i,
    u,
    g,
    f,
    k,
    y,
    a,
    v,
    C,
    _,
    E,
    h,
    m,
    d,
    H,
    D,
    he,
    w,
    L,
    b,
    Y
  ];
}
class it extends ne {
  constructor(e) {
    super(), le(this, e, Xt, Jt, te, {
      show_modal: 2,
      is_block: 5,
      visualisation: 0,
      visualisation_data: 1
    });
  }
}
function $t(t) {
  let e, l, n, o, i, c, s, u, g;
  function r(y) {
    t[5](y);
  }
  function p(y) {
    t[6](y);
  }
  function f(y) {
    t[7](y);
  }
  let k = { is_block: !1 };
  return (
    /*visualisation*/
    t[1] !== void 0 && (k.visualisation = /*visualisation*/
    t[1]), /*visualisation_data*/
    t[2] !== void 0 && (k.visualisation_data = /*visualisation_data*/
    t[2]), /*show_modal*/
    t[0] !== void 0 && (k.show_modal = /*show_modal*/
    t[0]), n = new it({ props: k }), O.push(() => Q(n, "visualisation", r)), O.push(() => Q(n, "visualisation_data", p)), O.push(() => Q(n, "show_modal", f)), n.$on(
      "close",
      /*onClose*/
      t[4]
    ), {
      c() {
        e = q("a"), e.innerHTML = '<span class="wp-media-buttons-icon dashicons dashicons-chart-bar"></span> Election Engine', l = T(), I(n.$$.fragment), S(e, "href", "#"), S(e, "class", "button"), S(e, "id", "electionengine_insert_shortcode_button"), S(e, "data-editor", "content");
      },
      m(y, a) {
        P(y, e, a), P(y, l, a), V(n, y, a), s = !0, u || (g = U(
          e,
          "click",
          /*clickShortcodeButton*/
          t[3]
        ), u = !0);
      },
      p(y, [a]) {
        const v = {};
        !o && a & /*visualisation*/
        2 && (o = !0, v.visualisation = /*visualisation*/
        y[1], Z(() => o = !1)), !i && a & /*visualisation_data*/
        4 && (i = !0, v.visualisation_data = /*visualisation_data*/
        y[2], Z(() => i = !1)), !c && a & /*show_modal*/
        1 && (c = !0, v.show_modal = /*show_modal*/
        y[0], Z(() => c = !1)), n.$set(v);
      },
      i(y) {
        s || (N(n.$$.fragment, y), s = !0);
      },
      o(y) {
        A(n.$$.fragment, y), s = !1;
      },
      d(y) {
        y && (M(e), M(l)), W(n, y), u = !1, g();
      }
    }
  );
}
function xt(t, e, l) {
  let n = !1, o = "hemicycle", i = {
    hemicycle: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "Gauteng"
    },
    carto: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "National"
    },
    table: {
      selected_year: 2024,
      selected_election: "National Assembly",
      selected_region: "National",
      selected_fields: ["Party", "Votes", "Seats"]
    }
  };
  function c(p) {
    p.preventDefault(), l(0, n = !0);
  }
  function s(p) {
    p.preventDefault(), l(0, n = !1);
    const f = {
      visualisation: o,
      selected_year: i[o].selected_year,
      selected_election: i[o].selected_election,
      selected_region: i[o].selected_region
    };
    o === "table" && (f.selected_fields = i[o].selected_fields.join(","));
    let k = [];
    for (const a in f)
      k.push(`${a}="${f[a]}"`);
    const y = `[election-engine ${k.join(" ")}]`;
    wp.media.editor.insert(y);
  }
  function u(p) {
    o = p, l(1, o);
  }
  function g(p) {
    i = p, l(2, i);
  }
  function r(p) {
    n = p, l(0, n);
  }
  return [
    n,
    o,
    i,
    c,
    s,
    u,
    g,
    r
  ];
}
class el extends ne {
  constructor(e) {
    super(), le(this, e, xt, $t, te, {});
  }
}
jQuery(() => {
  const t = document.getElementById("ElectionsEngineAdminModal");
  t && new it({
    target: t
  });
  const e = document.getElementById("ElectionsEngineShortcodeModal");
  e && new el({
    target: e
  });
});
