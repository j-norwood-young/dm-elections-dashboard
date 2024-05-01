var it = Object.defineProperty;
var ct = (t, e, l) => e in t ? it(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var he = (t, e, l) => (ct(t, typeof e != "symbol" ? e + "" : e, l), l);
function de() {
}
function be(t, e) {
  for (const l in e)
    t[l] = e[l];
  return (
    /** @type {T & S} */
    t
  );
}
function Je(t) {
  return t();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(Je);
}
function Xe(t) {
  return typeof t == "function";
}
function ne(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ot(t) {
  return Object.keys(t).length === 0;
}
function re(t, e, l, n) {
  if (t) {
    const c = $e(t, e, l, n);
    return t[0](c);
  }
}
function $e(t, e, l, n) {
  return t[1] && n ? be(l.ctx.slice(), t[1](n(e))) : l.ctx;
}
function fe(t, e, l, n) {
  if (t[2] && n) {
    const c = t[2](n(l));
    if (e.dirty === void 0)
      return c;
    if (typeof c == "object") {
      const i = [], o = Math.max(e.dirty.length, c.length);
      for (let a = 0; a < o; a += 1)
        i[a] = e.dirty[a] | c[a];
      return i;
    }
    return e.dirty | c;
  }
  return e.dirty;
}
function ue(t, e, l, n, c, i) {
  if (c) {
    const o = $e(e, l, n, i);
    t.p(o, c);
  }
}
function ae(t) {
  if (t.ctx.length > 32) {
    const e = [], l = t.ctx.length / 32;
    for (let n = 0; n < l; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function st(t) {
  const e = {};
  for (const l in t)
    l[0] !== "$" && (e[l] = t[l]);
  return e;
}
function we(t, e) {
  const l = {};
  e = new Set(e);
  for (const n in t)
    !e.has(n) && n[0] !== "$" && (l[n] = t[n]);
  return l;
}
function P(t, e) {
  t.appendChild(e);
}
function B(t, e, l) {
  t.insertBefore(e, l || null);
}
function q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function z(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function M(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createTextNode(t);
}
function T() {
  return Y(" ");
}
function xe() {
  return Y("");
}
function Z(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function S(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function rt(t) {
  return Array.from(t.childNodes);
}
function X(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function W(t, e, l) {
  t.classList.toggle(e, !!l);
}
function ft(t, e, { bubbles: l = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: l, cancelable: n });
}
let se;
function oe(t) {
  se = t;
}
function et() {
  if (!se)
    throw new Error("Function called outside component initialization");
  return se;
}
function ut(t) {
  et().$$.on_destroy.push(t);
}
function at() {
  const t = et();
  return (e, l, { cancelable: n = !1 } = {}) => {
    const c = t.$$.callbacks[e];
    if (c) {
      const i = ft(
        /** @type {string} */
        e,
        l,
        { cancelable: n }
      );
      return c.slice().forEach((o) => {
        o.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function _t(t, e) {
  const l = t.$$.callbacks[e.type];
  l && l.slice().forEach((n) => n.call(this, e));
}
const te = [], D = [];
let le = [];
const ye = [], dt = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function gt() {
  ke || (ke = !0, dt.then(tt));
}
function pe(t) {
  le.push(t);
}
function U(t) {
  ye.push(t);
}
const me = /* @__PURE__ */ new Set();
let ee = 0;
function tt() {
  if (ee !== 0)
    return;
  const t = se;
  do {
    try {
      for (; ee < te.length; ) {
        const e = te[ee];
        ee++, oe(e), ht(e.$$);
      }
    } catch (e) {
      throw te.length = 0, ee = 0, e;
    }
    for (oe(null), te.length = 0, ee = 0; D.length; )
      D.pop()();
    for (let e = 0; e < le.length; e += 1) {
      const l = le[e];
      me.has(l) || (me.add(l), l());
    }
    le.length = 0;
  } while (te.length);
  for (; ye.length; )
    ye.pop()();
  ke = !1, me.clear(), oe(t);
}
function ht(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(pe);
  }
}
function mt(t) {
  const e = [], l = [];
  le.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), le = e;
}
const _e = /* @__PURE__ */ new Set();
let $;
function K() {
  $ = {
    r: 0,
    c: [],
    p: $
    // parent group
  };
}
function V() {
  $.r || x($.c), $ = $.p;
}
function w(t, e) {
  t && t.i && (_e.delete(t), t.i(e));
}
function A(t, e, l, n) {
  if (t && t.o) {
    if (_e.has(t))
      return;
    _e.add(t), $.c.push(() => {
      _e.delete(t), n && (l && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function O(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function J(t, e, l) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = l, l(t.$$.ctx[n]));
}
function I(t) {
  t && t.c();
}
function F(t, e, l) {
  const { fragment: n, after_update: c } = t.$$;
  n && n.m(e, l), pe(() => {
    const i = t.$$.on_mount.map(Je).filter(Xe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : x(i), t.$$.on_mount = [];
  }), c.forEach(pe);
}
function G(t, e) {
  const l = t.$$;
  l.fragment !== null && (mt(l.after_update), x(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function bt(t, e) {
  t.$$.dirty[0] === -1 && (te.push(t), gt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ie(t, e, l, n, c, i, o = null, a = [-1]) {
  const g = se;
  oe(t);
  const h = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: de,
    not_equal: c,
    bound: ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: ve(),
    dirty: a,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  o && o(h.root);
  let s = !1;
  if (h.ctx = l ? l(t, e.props || {}, (v, u, ...k) => {
    const E = k.length ? k[0] : u;
    return h.ctx && c(h.ctx[v], h.ctx[v] = E) && (!h.skip_bound && h.bound[v] && h.bound[v](E), s && bt(t, v)), u;
  }) : [], h.update(), s = !0, x(h.before_update), h.fragment = n ? n(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = rt(e.target);
      h.fragment && h.fragment.l(v), v.forEach(q);
    } else
      h.fragment && h.fragment.c();
    e.intro && w(t.$$.fragment), F(t, e.target, e.anchor), tt();
  }
  oe(g);
}
class ce {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    G(this, 1), this.$destroy = de;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, l) {
    if (!Xe(l))
      return de;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(l), () => {
      const c = n.indexOf(l);
      c !== -1 && n.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ot(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const yt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yt);
function kt(t) {
  let e, l, n, c, i;
  const o = (
    /*#slots*/
    t[16].default
  ), a = re(
    o,
    t,
    /*$$scope*/
    t[15],
    null
  );
  return {
    c() {
      e = M("button"), a && a.c(), S(
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
      ), W(
        e,
        "button-primary",
        /*primary*/
        t[4]
      ), W(
        e,
        "button-large",
        /*large*/
        t[5]
      ), W(
        e,
        "button-small",
        /*small*/
        t[6]
      ), W(
        e,
        "delete",
        /*warning*/
        t[7]
      ), W(
        e,
        "button-link",
        /*link*/
        t[8]
      );
    },
    m(g, h) {
      B(g, e, h), a && a.m(e, null), n = !0, c || (i = Z(
        e,
        "click",
        /*click_handler*/
        t[17]
      ), c = !0);
    },
    p(g, [h]) {
      a && a.p && (!n || h & /*$$scope*/
      32768) && ue(
        a,
        o,
        g,
        /*$$scope*/
        g[15],
        n ? fe(
          o,
          /*$$scope*/
          g[15],
          h,
          null
        ) : ae(
          /*$$scope*/
          g[15]
        ),
        null
      ), (!n || h & /*type*/
      1) && S(
        e,
        "type",
        /*type*/
        g[0]
      ), (!n || h & /*id*/
      8) && S(
        e,
        "id",
        /*id*/
        g[3]
      ), (!n || h & /*title*/
      2) && S(
        e,
        "title",
        /*title*/
        g[1]
      ), (!n || h & /*disabled*/
      4) && (e.disabled = /*disabled*/
      g[2]), (!n || h & /*aria_label*/
      512) && S(
        e,
        "aria-label",
        /*aria_label*/
        g[9]
      ), (!n || h & /*aria_hidden*/
      1024) && S(
        e,
        "aria-hidden",
        /*aria_hidden*/
        g[10]
      ), (!n || h & /*btn_class, $$restProps*/
      10240 && l !== (l = "button " + /*btn_class*/
      g[11] + " " + /*$$restProps*/
      (g[13].class || ""))) && S(e, "class", l), (!n || h & /*style*/
      4096) && S(
        e,
        "style",
        /*style*/
        g[12]
      ), (!n || h & /*btn_class, $$restProps, primary*/
      10256) && W(
        e,
        "button-primary",
        /*primary*/
        g[4]
      ), (!n || h & /*btn_class, $$restProps, large*/
      10272) && W(
        e,
        "button-large",
        /*large*/
        g[5]
      ), (!n || h & /*btn_class, $$restProps, small*/
      10304) && W(
        e,
        "button-small",
        /*small*/
        g[6]
      ), (!n || h & /*btn_class, $$restProps, warning*/
      10368) && W(
        e,
        "delete",
        /*warning*/
        g[7]
      ), (!n || h & /*btn_class, $$restProps, link*/
      10496) && W(
        e,
        "button-link",
        /*link*/
        g[8]
      );
    },
    i(g) {
      n || (w(a, g), n = !0);
    },
    o(g) {
      A(a, g), n = !1;
    },
    d(g) {
      g && q(e), a && a.d(g), c = !1, i();
    }
  };
}
function pt(t, e, l) {
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
  let c = we(e, n), { $$slots: i = {}, $$scope: o } = e, { type: a = "button" } = e, { title: g = null } = e, { disabled: h = !1 } = e, { id: s = null } = e, { primary: v = !1 } = e, { large: u = !1 } = e, { small: k = !1 } = e, { warning: E = !1 } = e, { danger: d = !1 } = e, { link: y = !1 } = e, { aria_label: C = null } = e, { aria_hidden: r = !1 } = e, { btn_class: N = "button" } = e, m = "";
  function b(f) {
    _t.call(this, t, f);
  }
  return t.$$set = (f) => {
    e = be(be({}, e), st(f)), l(13, c = we(e, n)), "type" in f && l(0, a = f.type), "title" in f && l(1, g = f.title), "disabled" in f && l(2, h = f.disabled), "id" in f && l(3, s = f.id), "primary" in f && l(4, v = f.primary), "large" in f && l(5, u = f.large), "small" in f && l(6, k = f.small), "warning" in f && l(7, E = f.warning), "danger" in f && l(14, d = f.danger), "link" in f && l(8, y = f.link), "aria_label" in f && l(9, C = f.aria_label), "aria_hidden" in f && l(10, r = f.aria_hidden), "btn_class" in f && l(11, N = f.btn_class), "$$scope" in f && l(15, o = f.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*warning*/
    128 && E && l(12, m = "color: #a00; border-color: #a00;"), t.$$.dirty & /*danger*/
    16384 && d && l(12, m = "background-color: #a00; border-color: #a00; color: #fff;");
  }, [
    a,
    g,
    h,
    s,
    v,
    u,
    k,
    E,
    y,
    C,
    r,
    N,
    m,
    c,
    d,
    o,
    i,
    b
  ];
}
class Q extends ce {
  constructor(e) {
    super(), ie(this, e, pt, kt, ne, {
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
function Ne(t, e, l) {
  const n = t.slice();
  return n[9] = e[l], n;
}
function Ee(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function Ce(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function vt(t) {
  let e = (
    /*year*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*years*/
      8 && e !== (e = /*year*/
      n[15] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Se(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler*/
      t[6](
        /*year*/
        t[15]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[15]
      ),
      $$slots: { default: [vt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_year, years*/
      9 && (a.primary = /*selected_year*/
      t[0] === /*year*/
      t[15]), o & /*$$scope, years*/
      262152 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function wt(t) {
  let e = (
    /*election*/
    t[12] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*elections*/
      16 && e !== (e = /*election*/
      n[12] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Ae(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_1*/
      t[7](
        /*election*/
        t[12]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[12]
      ),
      $$slots: { default: [wt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_election, elections*/
      18 && (a.primary = /*selected_election*/
      t[1] === /*election*/
      t[12]), o & /*$$scope, elections*/
      262160 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Le(t) {
  let e, l, n, c, i = O(
    /*regions*/
    t[5]
  ), o = [];
  for (let g = 0; g < i.length; g += 1)
    o[g] = qe(Ne(t, i, g));
  const a = (g) => A(o[g], 1, 1, () => {
    o[g] = null;
  });
  return {
    c() {
      e = M("h4"), e.textContent = "Select Province", l = T();
      for (let g = 0; g < o.length; g += 1)
        o[g].c();
      n = xe();
    },
    m(g, h) {
      B(g, e, h), B(g, l, h);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(g, h);
      B(g, n, h), c = !0;
    },
    p(g, h) {
      if (h & /*selected_region, regions*/
      36) {
        i = O(
          /*regions*/
          g[5]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const v = Ne(g, i, s);
          o[s] ? (o[s].p(v, h), w(o[s], 1)) : (o[s] = qe(v), o[s].c(), w(o[s], 1), o[s].m(n.parentNode, n));
        }
        for (K(), s = i.length; s < o.length; s += 1)
          a(s);
        V();
      }
    },
    i(g) {
      if (!c) {
        for (let h = 0; h < i.length; h += 1)
          w(o[h]);
        c = !0;
      }
    },
    o(g) {
      o = o.filter(Boolean);
      for (let h = 0; h < o.length; h += 1)
        A(o[h]);
      c = !1;
    },
    d(g) {
      g && (q(e), q(l), q(n)), z(o, g);
    }
  };
}
function Nt(t) {
  let e = (
    /*region*/
    t[9] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*regions*/
      32 && e !== (e = /*region*/
      n[9] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function qe(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_2*/
      t[8](
        /*region*/
        t[9]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[9]
      ),
      $$slots: { default: [Nt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_region, regions*/
      36 && (a.primary = /*selected_region*/
      t[2] === /*region*/
      t[9]), o & /*$$scope, regions*/
      262176 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Et(t) {
  let e, l, n, c, i, o, a, g, h = O(
    /*years*/
    t[3]
  ), s = [];
  for (let y = 0; y < h.length; y += 1)
    s[y] = Se(Ce(t, h, y));
  const v = (y) => A(s[y], 1, 1, () => {
    s[y] = null;
  });
  let u = O(
    /*elections*/
    t[4]
  ), k = [];
  for (let y = 0; y < u.length; y += 1)
    k[y] = Ae(Ee(t, u, y));
  const E = (y) => A(k[y], 1, 1, () => {
    k[y] = null;
  });
  let d = (
    /*selected_election*/
    t[1] === "Provincial Legislature" && Le(t)
  );
  return {
    c() {
      e = M("div"), l = M("h4"), l.textContent = "Select Year", n = T();
      for (let y = 0; y < s.length; y += 1)
        s[y].c();
      c = T(), i = M("h4"), i.textContent = "Select Election", o = T();
      for (let y = 0; y < k.length; y += 1)
        k[y].c();
      a = T(), d && d.c(), S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(y, C) {
      B(y, e, C), P(e, l), P(e, n);
      for (let r = 0; r < s.length; r += 1)
        s[r] && s[r].m(e, null);
      P(e, c), P(e, i), P(e, o);
      for (let r = 0; r < k.length; r += 1)
        k[r] && k[r].m(e, null);
      P(e, a), d && d.m(e, null), g = !0;
    },
    p(y, [C]) {
      if (C & /*selected_year, years*/
      9) {
        h = O(
          /*years*/
          y[3]
        );
        let r;
        for (r = 0; r < h.length; r += 1) {
          const N = Ce(y, h, r);
          s[r] ? (s[r].p(N, C), w(s[r], 1)) : (s[r] = Se(N), s[r].c(), w(s[r], 1), s[r].m(e, c));
        }
        for (K(), r = h.length; r < s.length; r += 1)
          v(r);
        V();
      }
      if (C & /*selected_election, elections*/
      18) {
        u = O(
          /*elections*/
          y[4]
        );
        let r;
        for (r = 0; r < u.length; r += 1) {
          const N = Ee(y, u, r);
          k[r] ? (k[r].p(N, C), w(k[r], 1)) : (k[r] = Ae(N), k[r].c(), w(k[r], 1), k[r].m(e, a));
        }
        for (K(), r = u.length; r < k.length; r += 1)
          E(r);
        V();
      }
      /*selected_election*/
      y[1] === "Provincial Legislature" ? d ? (d.p(y, C), C & /*selected_election*/
      2 && w(d, 1)) : (d = Le(y), d.c(), w(d, 1), d.m(e, null)) : d && (K(), A(d, 1, 1, () => {
        d = null;
      }), V());
    },
    i(y) {
      if (!g) {
        for (let C = 0; C < h.length; C += 1)
          w(s[C]);
        for (let C = 0; C < u.length; C += 1)
          w(k[C]);
        w(d), g = !0;
      }
    },
    o(y) {
      s = s.filter(Boolean);
      for (let C = 0; C < s.length; C += 1)
        A(s[C]);
      k = k.filter(Boolean);
      for (let C = 0; C < k.length; C += 1)
        A(k[C]);
      A(d), g = !1;
    },
    d(y) {
      y && q(e), z(s, y), z(k, y), d && d.d();
    }
  };
}
function Ct(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: c = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: o = "National Assembly" } = e, { regions: a = [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ] } = e, { selected_region: g = "Gauteng" } = e;
  const h = (u) => l(0, c = u), s = (u) => l(1, o = u), v = (u) => l(2, g = u);
  return t.$$set = (u) => {
    "years" in u && l(3, n = u.years), "selected_year" in u && l(0, c = u.selected_year), "elections" in u && l(4, i = u.elections), "selected_election" in u && l(1, o = u.selected_election), "regions" in u && l(5, a = u.regions), "selected_region" in u && l(2, g = u.selected_region);
  }, [
    c,
    o,
    g,
    n,
    i,
    a,
    h,
    s,
    v
  ];
}
class St extends ce {
  constructor(e) {
    super(), ie(this, e, Ct, Et, ne, {
      years: 3,
      selected_year: 0,
      elections: 4,
      selected_election: 1,
      regions: 5,
      selected_region: 2
    });
  }
}
function Be(t, e, l) {
  const n = t.slice();
  return n[9] = e[l], n;
}
function Me(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function Pe(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function At(t) {
  let e = (
    /*year*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*years*/
      8 && e !== (e = /*year*/
      n[15] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Te(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler*/
      t[6](
        /*year*/
        t[15]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[15]
      ),
      $$slots: { default: [At] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_year, years*/
      9 && (a.primary = /*selected_year*/
      t[0] === /*year*/
      t[15]), o & /*$$scope, years*/
      262152 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Lt(t) {
  let e = (
    /*election*/
    t[12] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*elections*/
      16 && e !== (e = /*election*/
      n[12] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function je(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_1*/
      t[7](
        /*election*/
        t[12]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[12]
      ),
      $$slots: { default: [Lt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_election, elections*/
      18 && (a.primary = /*selected_election*/
      t[1] === /*election*/
      t[12]), o & /*$$scope, elections*/
      262160 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function qt(t) {
  let e = (
    /*region*/
    t[9] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*regions*/
      32 && e !== (e = /*region*/
      n[9] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function He(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_2*/
      t[8](
        /*region*/
        t[9]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[9]
      ),
      $$slots: { default: [qt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_region, regions*/
      36 && (a.primary = /*selected_region*/
      t[2] === /*region*/
      t[9]), o & /*$$scope, regions*/
      262176 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Bt(t) {
  let e, l, n, c, i, o, a, g, h, s, v = O(
    /*years*/
    t[3]
  ), u = [];
  for (let m = 0; m < v.length; m += 1)
    u[m] = Te(Pe(t, v, m));
  const k = (m) => A(u[m], 1, 1, () => {
    u[m] = null;
  });
  let E = O(
    /*elections*/
    t[4]
  ), d = [];
  for (let m = 0; m < E.length; m += 1)
    d[m] = je(Me(t, E, m));
  const y = (m) => A(d[m], 1, 1, () => {
    d[m] = null;
  });
  let C = O(
    /*regions*/
    t[5]
  ), r = [];
  for (let m = 0; m < C.length; m += 1)
    r[m] = He(Be(t, C, m));
  const N = (m) => A(r[m], 1, 1, () => {
    r[m] = null;
  });
  return {
    c() {
      e = M("div"), l = M("h4"), l.textContent = "Select Year", n = T();
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      c = T(), i = M("h4"), i.textContent = "Select Election", o = T();
      for (let m = 0; m < d.length; m += 1)
        d[m].c();
      a = T(), g = M("h4"), g.textContent = "Select Region", h = T();
      for (let m = 0; m < r.length; m += 1)
        r[m].c();
      S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(m, b) {
      B(m, e, b), P(e, l), P(e, n);
      for (let f = 0; f < u.length; f += 1)
        u[f] && u[f].m(e, null);
      P(e, c), P(e, i), P(e, o);
      for (let f = 0; f < d.length; f += 1)
        d[f] && d[f].m(e, null);
      P(e, a), P(e, g), P(e, h);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      s = !0;
    },
    p(m, [b]) {
      if (b & /*selected_year, years*/
      9) {
        v = O(
          /*years*/
          m[3]
        );
        let f;
        for (f = 0; f < v.length; f += 1) {
          const H = Pe(m, v, f);
          u[f] ? (u[f].p(H, b), w(u[f], 1)) : (u[f] = Te(H), u[f].c(), w(u[f], 1), u[f].m(e, c));
        }
        for (K(), f = v.length; f < u.length; f += 1)
          k(f);
        V();
      }
      if (b & /*selected_election, elections*/
      18) {
        E = O(
          /*elections*/
          m[4]
        );
        let f;
        for (f = 0; f < E.length; f += 1) {
          const H = Me(m, E, f);
          d[f] ? (d[f].p(H, b), w(d[f], 1)) : (d[f] = je(H), d[f].c(), w(d[f], 1), d[f].m(e, a));
        }
        for (K(), f = E.length; f < d.length; f += 1)
          y(f);
        V();
      }
      if (b & /*selected_region, regions*/
      36) {
        C = O(
          /*regions*/
          m[5]
        );
        let f;
        for (f = 0; f < C.length; f += 1) {
          const H = Be(m, C, f);
          r[f] ? (r[f].p(H, b), w(r[f], 1)) : (r[f] = He(H), r[f].c(), w(r[f], 1), r[f].m(e, null));
        }
        for (K(), f = C.length; f < r.length; f += 1)
          N(f);
        V();
      }
    },
    i(m) {
      if (!s) {
        for (let b = 0; b < v.length; b += 1)
          w(u[b]);
        for (let b = 0; b < E.length; b += 1)
          w(d[b]);
        for (let b = 0; b < C.length; b += 1)
          w(r[b]);
        s = !0;
      }
    },
    o(m) {
      u = u.filter(Boolean);
      for (let b = 0; b < u.length; b += 1)
        A(u[b]);
      d = d.filter(Boolean);
      for (let b = 0; b < d.length; b += 1)
        A(d[b]);
      r = r.filter(Boolean);
      for (let b = 0; b < r.length; b += 1)
        A(r[b]);
      s = !1;
    },
    d(m) {
      m && q(e), z(u, m), z(d, m), z(r, m);
    }
  };
}
function Mt(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: c = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: o = "National Assembly" } = e, { regions: a = [
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
  ] } = e, { selected_region: g = "National" } = e;
  const h = (u) => l(0, c = u), s = (u) => l(1, o = u), v = (u) => l(2, g = u);
  return t.$$set = (u) => {
    "years" in u && l(3, n = u.years), "selected_year" in u && l(0, c = u.selected_year), "elections" in u && l(4, i = u.elections), "selected_election" in u && l(1, o = u.selected_election), "regions" in u && l(5, a = u.regions), "selected_region" in u && l(2, g = u.selected_region);
  }, [
    c,
    o,
    g,
    n,
    i,
    a,
    h,
    s,
    v
  ];
}
class Pt extends ce {
  constructor(e) {
    super(), ie(this, e, Mt, Bt, ne, {
      years: 3,
      selected_year: 0,
      elections: 4,
      selected_election: 1,
      regions: 5,
      selected_region: 2
    });
  }
}
function Oe(t, e, l) {
  const n = t.slice();
  return n[12] = e[l], n;
}
function We(t, e, l) {
  const n = t.slice();
  return n[15] = e[l], n;
}
function Fe(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function Ge(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function Tt(t) {
  let e = (
    /*year*/
    t[21] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*years*/
      16 && e !== (e = /*year*/
      n[21] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Ke(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler*/
      t[8](
        /*year*/
        t[21]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_year*/
        t[0] === /*year*/
        t[21]
      ),
      $$slots: { default: [Tt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_year, years*/
      17 && (a.primary = /*selected_year*/
      t[0] === /*year*/
      t[21]), o & /*$$scope, years*/
      16777232 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function jt(t) {
  let e = (
    /*election*/
    t[18] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*elections*/
      32 && e !== (e = /*election*/
      n[18] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Ve(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_1*/
      t[9](
        /*election*/
        t[18]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_election*/
        t[1] === /*election*/
        t[18]
      ),
      $$slots: { default: [jt] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_election, elections*/
      34 && (a.primary = /*selected_election*/
      t[1] === /*election*/
      t[18]), o & /*$$scope, elections*/
      16777248 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Ht(t) {
  let e = (
    /*region*/
    t[15] + ""
  ), l;
  return {
    c() {
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*regions*/
      64 && e !== (e = /*region*/
      n[15] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function Ie(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_2*/
      t[10](
        /*region*/
        t[15]
      )
    );
  }
  return l = new Q({
    props: {
      primary: (
        /*selected_region*/
        t[2] === /*region*/
        t[15]
      ),
      $$slots: { default: [Ht] },
      $$scope: { ctx: t }
    }
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_region, regions*/
      68 && (a.primary = /*selected_region*/
      t[2] === /*region*/
      t[15]), o & /*$$scope, regions*/
      16777280 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
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
      l = Y(e);
    },
    m(n, c) {
      B(n, l, c);
    },
    p(n, c) {
      c & /*fields*/
      128 && e !== (e = /*field*/
      n[12] + "") && X(l, e);
    },
    d(n) {
      n && q(l);
    }
  };
}
function De(t) {
  let e, l, n;
  function c() {
    return (
      /*click_handler_3*/
      t[11](
        /*field*/
        t[12]
      )
    );
  }
  return l = new Q({
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
  }), l.$on("click", c), {
    c() {
      e = M("div"), I(l.$$.fragment), S(e, "class", "option svelte-1we73ve");
    },
    m(i, o) {
      B(i, e, o), F(l, e, null), n = !0;
    },
    p(i, o) {
      t = i;
      const a = {};
      o & /*selected_fields, fields*/
      136 && (a.primary = /*selected_fields*/
      t[3].includes(
        /*field*/
        t[12]
      )), o & /*$$scope, fields*/
      16777344 && (a.$$scope = { dirty: o, ctx: t }), l.$set(a);
    },
    i(i) {
      n || (w(l.$$.fragment, i), n = !0);
    },
    o(i) {
      A(l.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(e), G(l);
    }
  };
}
function Wt(t) {
  let e, l, n, c, i, o, a, g, h, s, v, u, k, E = O(
    /*years*/
    t[4]
  ), d = [];
  for (let p = 0; p < E.length; p += 1)
    d[p] = Ke(Ge(t, E, p));
  const y = (p) => A(d[p], 1, 1, () => {
    d[p] = null;
  });
  let C = O(
    /*elections*/
    t[5]
  ), r = [];
  for (let p = 0; p < C.length; p += 1)
    r[p] = Ve(Fe(t, C, p));
  const N = (p) => A(r[p], 1, 1, () => {
    r[p] = null;
  });
  let m = O(
    /*regions*/
    t[6]
  ), b = [];
  for (let p = 0; p < m.length; p += 1)
    b[p] = Ie(We(t, m, p));
  const f = (p) => A(b[p], 1, 1, () => {
    b[p] = null;
  });
  let H = O(
    /*fields*/
    t[7]
  ), j = [];
  for (let p = 0; p < H.length; p += 1)
    j[p] = De(Oe(t, H, p));
  const ge = (p) => A(j[p], 1, 1, () => {
    j[p] = null;
  });
  return {
    c() {
      e = M("div"), l = M("h4"), l.textContent = "Select Year", n = T();
      for (let p = 0; p < d.length; p += 1)
        d[p].c();
      c = T(), i = M("h4"), i.textContent = "Select Election", o = T();
      for (let p = 0; p < r.length; p += 1)
        r[p].c();
      a = T(), g = M("h4"), g.textContent = "Select Region", h = T();
      for (let p = 0; p < b.length; p += 1)
        b[p].c();
      s = T(), v = M("h4"), v.textContent = "Select Fields", u = T();
      for (let p = 0; p < j.length; p += 1)
        j[p].c();
      S(e, "class", "election-engine-selection-container svelte-1we73ve");
    },
    m(p, L) {
      B(p, e, L), P(e, l), P(e, n);
      for (let _ = 0; _ < d.length; _ += 1)
        d[_] && d[_].m(e, null);
      P(e, c), P(e, i), P(e, o);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_] && r[_].m(e, null);
      P(e, a), P(e, g), P(e, h);
      for (let _ = 0; _ < b.length; _ += 1)
        b[_] && b[_].m(e, null);
      P(e, s), P(e, v), P(e, u);
      for (let _ = 0; _ < j.length; _ += 1)
        j[_] && j[_].m(e, null);
      k = !0;
    },
    p(p, [L]) {
      if (L & /*selected_year, years*/
      17) {
        E = O(
          /*years*/
          p[4]
        );
        let _;
        for (_ = 0; _ < E.length; _ += 1) {
          const R = Ge(p, E, _);
          d[_] ? (d[_].p(R, L), w(d[_], 1)) : (d[_] = Ke(R), d[_].c(), w(d[_], 1), d[_].m(e, c));
        }
        for (K(), _ = E.length; _ < d.length; _ += 1)
          y(_);
        V();
      }
      if (L & /*selected_election, elections*/
      34) {
        C = O(
          /*elections*/
          p[5]
        );
        let _;
        for (_ = 0; _ < C.length; _ += 1) {
          const R = Fe(p, C, _);
          r[_] ? (r[_].p(R, L), w(r[_], 1)) : (r[_] = Ve(R), r[_].c(), w(r[_], 1), r[_].m(e, a));
        }
        for (K(), _ = C.length; _ < r.length; _ += 1)
          N(_);
        V();
      }
      if (L & /*selected_region, regions*/
      68) {
        m = O(
          /*regions*/
          p[6]
        );
        let _;
        for (_ = 0; _ < m.length; _ += 1) {
          const R = We(p, m, _);
          b[_] ? (b[_].p(R, L), w(b[_], 1)) : (b[_] = Ie(R), b[_].c(), w(b[_], 1), b[_].m(e, s));
        }
        for (K(), _ = m.length; _ < b.length; _ += 1)
          f(_);
        V();
      }
      if (L & /*selected_fields, fields*/
      136) {
        H = O(
          /*fields*/
          p[7]
        );
        let _;
        for (_ = 0; _ < H.length; _ += 1) {
          const R = Oe(p, H, _);
          j[_] ? (j[_].p(R, L), w(j[_], 1)) : (j[_] = De(R), j[_].c(), w(j[_], 1), j[_].m(e, null));
        }
        for (K(), _ = H.length; _ < j.length; _ += 1)
          ge(_);
        V();
      }
    },
    i(p) {
      if (!k) {
        for (let L = 0; L < E.length; L += 1)
          w(d[L]);
        for (let L = 0; L < C.length; L += 1)
          w(r[L]);
        for (let L = 0; L < m.length; L += 1)
          w(b[L]);
        for (let L = 0; L < H.length; L += 1)
          w(j[L]);
        k = !0;
      }
    },
    o(p) {
      d = d.filter(Boolean);
      for (let L = 0; L < d.length; L += 1)
        A(d[L]);
      r = r.filter(Boolean);
      for (let L = 0; L < r.length; L += 1)
        A(r[L]);
      b = b.filter(Boolean);
      for (let L = 0; L < b.length; L += 1)
        A(b[L]);
      j = j.filter(Boolean);
      for (let L = 0; L < j.length; L += 1)
        A(j[L]);
      k = !1;
    },
    d(p) {
      p && q(e), z(d, p), z(r, p), z(b, p), z(j, p);
    }
  };
}
function Ft(t, e, l) {
  let { years: n = [2024, 2019, 2014] } = e, { selected_year: c = 2024 } = e, { elections: i = ["National Assembly", "Provincial Legislature"] } = e, { selected_election: o = "National Assembly" } = e, { regions: a = [
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
  ] } = e, { selected_region: g = "National" } = e, { fields: h = ["Party", "Votes", "Seats"] } = e, { selected_fields: s = ["Party", "Votes", "Seats"] } = e;
  const v = (d) => l(0, c = d), u = (d) => l(1, o = d), k = (d) => l(2, g = d), E = (d) => {
    s.includes(d) ? l(3, s = s.filter((y) => y !== d)) : l(3, s = [...s, d]), l(3, s);
  };
  return t.$$set = (d) => {
    "years" in d && l(4, n = d.years), "selected_year" in d && l(0, c = d.selected_year), "elections" in d && l(5, i = d.elections), "selected_election" in d && l(1, o = d.selected_election), "regions" in d && l(6, a = d.regions), "selected_region" in d && l(2, g = d.selected_region), "fields" in d && l(7, h = d.fields), "selected_fields" in d && l(3, s = d.selected_fields);
  }, [
    c,
    o,
    g,
    s,
    n,
    i,
    a,
    h,
    v,
    u,
    k,
    E
  ];
}
class Gt extends ce {
  constructor(e) {
    super(), ie(this, e, Ft, Wt, ne, {
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
const Kt = (t) => ({}), Re = (t) => ({}), Vt = (t) => ({}), Ye = (t) => ({});
function It(t) {
  let e, l, n, c, i, o, a, g, h, s, v, u;
  const k = (
    /*#slots*/
    t[5].title
  ), E = re(
    k,
    t,
    /*$$scope*/
    t[4],
    Ye
  ), d = (
    /*#slots*/
    t[5].default
  ), y = re(
    d,
    t,
    /*$$scope*/
    t[4],
    null
  ), C = (
    /*#slots*/
    t[5].footer
  ), r = re(
    C,
    t,
    /*$$scope*/
    t[4],
    Re
  );
  return {
    c() {
      e = M("div"), l = T(), n = M("div"), c = M("div"), i = M("h3"), E && E.c(), o = T(), a = M("div"), y && y.c(), g = T(), h = M("div"), r && r.c(), S(e, "role", "button"), S(e, "tabindex", "-1"), S(e, "class", "modal-background svelte-iqnkud"), S(c, "class", "election-engine-modal-title svelte-iqnkud"), S(a, "class", "election-engine-modal-content"), S(h, "class", "election-engine-modal-footer svelte-iqnkud"), S(n, "class", "modal svelte-iqnkud"), S(n, "role", "dialog"), S(n, "aria-modal", "true");
    },
    m(N, m) {
      B(N, e, m), t[6](e), B(N, l, m), B(N, n, m), P(n, c), P(c, i), E && E.m(i, null), P(n, o), P(n, a), y && y.m(a, null), P(n, g), P(n, h), r && r.m(h, null), t[7](n), s = !0, v || (u = [
        Z(
          window,
          "keydown",
          /*handle_keydown*/
          t[3]
        ),
        Z(
          e,
          "click",
          /*close*/
          t[2]
        ),
        Z(
          e,
          "keypress",
          /*handle_keydown*/
          t[3]
        ),
        Z(
          n,
          "close",
          /*close*/
          t[2]
        )
      ], v = !0);
    },
    p(N, [m]) {
      E && E.p && (!s || m & /*$$scope*/
      16) && ue(
        E,
        k,
        N,
        /*$$scope*/
        N[4],
        s ? fe(
          k,
          /*$$scope*/
          N[4],
          m,
          Vt
        ) : ae(
          /*$$scope*/
          N[4]
        ),
        Ye
      ), y && y.p && (!s || m & /*$$scope*/
      16) && ue(
        y,
        d,
        N,
        /*$$scope*/
        N[4],
        s ? fe(
          d,
          /*$$scope*/
          N[4],
          m,
          null
        ) : ae(
          /*$$scope*/
          N[4]
        ),
        null
      ), r && r.p && (!s || m & /*$$scope*/
      16) && ue(
        r,
        C,
        N,
        /*$$scope*/
        N[4],
        s ? fe(
          C,
          /*$$scope*/
          N[4],
          m,
          Kt
        ) : ae(
          /*$$scope*/
          N[4]
        ),
        Re
      );
    },
    i(N) {
      s || (w(E, N), w(y, N), w(r, N), s = !0);
    },
    o(N) {
      A(E, N), A(y, N), A(r, N), s = !1;
    },
    d(N) {
      N && (q(e), q(l), q(n)), t[6](null), E && E.d(N), y && y.d(N), r && r.d(N), t[7](null), v = !1, x(u);
    }
  };
}
function Dt(t, e, l) {
  let { $$slots: n = {}, $$scope: c } = e;
  const i = at(), o = () => i("close");
  let a, g;
  const h = (k) => {
    if (k.key === "Escape") {
      o();
      return;
    }
    if (k.key === "Tab") {
      const E = a.querySelectorAll("*"), d = Array.from(E).filter((C) => C.tabIndex >= 0);
      let y = d.indexOf(document.activeElement);
      y === -1 && k.shiftKey && (y = 0), y += d.length + (k.shiftKey ? -1 : 1), y %= d.length, d[y].focus(), k.preventDefault();
    }
  }, s = typeof document < "u" && document.activeElement;
  s && ut(() => {
    s.focus();
  });
  function v(k) {
    D[k ? "unshift" : "push"](() => {
      g = k, l(1, g);
    });
  }
  function u(k) {
    D[k ? "unshift" : "push"](() => {
      a = k, l(0, a);
    });
  }
  return t.$$set = (k) => {
    "$$scope" in k && l(4, c = k.$$scope);
  }, [
    a,
    g,
    o,
    h,
    c,
    n,
    v,
    u
  ];
}
class Rt extends ce {
  constructor(e) {
    super(), ie(this, e, Dt, It, ne, {});
  }
}
function Ze(t) {
  let e, l;
  return e = new Rt({
    props: {
      $$slots: {
        title: [Qt],
        default: [Zt]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "close",
    /*close_handler*/
    t[23]
  ), {
    c() {
      I(e.$$.fragment);
    },
    m(n, c) {
      F(e, n, c), l = !0;
    },
    p(n, c) {
      const i = {};
      c & /*$$scope, show_modal, visualisation_data, visualisation*/
      33554439 && (i.$$scope = { dirty: c, ctx: n }), e.$set(i);
    },
    i(n) {
      l || (w(e.$$.fragment, n), l = !0);
    },
    o(n) {
      A(e.$$.fragment, n), l = !1;
    },
    d(n) {
      G(e, n);
    }
  };
}
function Qe(t) {
  let e, l, n, c, i;
  function o(s) {
    t[12](s);
  }
  function a(s) {
    t[13](s);
  }
  function g(s) {
    t[14](s);
  }
  let h = {};
  return (
    /*visualisation_data*/
    t[1].hemicycle.selected_year !== void 0 && (h.selected_year = /*visualisation_data*/
    t[1].hemicycle.selected_year), /*visualisation_data*/
    t[1].hemicycle.selected_election !== void 0 && (h.selected_election = /*visualisation_data*/
    t[1].hemicycle.selected_election), /*visualisation_data*/
    t[1].hemicycle.selected_region !== void 0 && (h.selected_region = /*visualisation_data*/
    t[1].hemicycle.selected_region), e = new St({ props: h }), D.push(() => J(e, "selected_year", o)), D.push(() => J(e, "selected_election", a)), D.push(() => J(e, "selected_region", g)), {
      c() {
        I(e.$$.fragment);
      },
      m(s, v) {
        F(e, s, v), i = !0;
      },
      p(s, v) {
        const u = {};
        !l && v & /*visualisation_data*/
        2 && (l = !0, u.selected_year = /*visualisation_data*/
        s[1].hemicycle.selected_year, U(() => l = !1)), !n && v & /*visualisation_data*/
        2 && (n = !0, u.selected_election = /*visualisation_data*/
        s[1].hemicycle.selected_election, U(() => n = !1)), !c && v & /*visualisation_data*/
        2 && (c = !0, u.selected_region = /*visualisation_data*/
        s[1].hemicycle.selected_region, U(() => c = !1)), e.$set(u);
      },
      i(s) {
        i || (w(e.$$.fragment, s), i = !0);
      },
      o(s) {
        A(e.$$.fragment, s), i = !1;
      },
      d(s) {
        G(e, s);
      }
    }
  );
}
function ze(t) {
  let e, l, n, c, i;
  function o(s) {
    t[15](s);
  }
  function a(s) {
    t[16](s);
  }
  function g(s) {
    t[17](s);
  }
  let h = {};
  return (
    /*visualisation_data*/
    t[1].carto.selected_year !== void 0 && (h.selected_year = /*visualisation_data*/
    t[1].carto.selected_year), /*visualisation_data*/
    t[1].carto.selected_election !== void 0 && (h.selected_election = /*visualisation_data*/
    t[1].carto.selected_election), /*visualisation_data*/
    t[1].carto.selected_region !== void 0 && (h.selected_region = /*visualisation_data*/
    t[1].carto.selected_region), e = new Pt({ props: h }), D.push(() => J(e, "selected_year", o)), D.push(() => J(e, "selected_election", a)), D.push(() => J(e, "selected_region", g)), {
      c() {
        I(e.$$.fragment);
      },
      m(s, v) {
        F(e, s, v), i = !0;
      },
      p(s, v) {
        const u = {};
        !l && v & /*visualisation_data*/
        2 && (l = !0, u.selected_year = /*visualisation_data*/
        s[1].carto.selected_year, U(() => l = !1)), !n && v & /*visualisation_data*/
        2 && (n = !0, u.selected_election = /*visualisation_data*/
        s[1].carto.selected_election, U(() => n = !1)), !c && v & /*visualisation_data*/
        2 && (c = !0, u.selected_region = /*visualisation_data*/
        s[1].carto.selected_region, U(() => c = !1)), e.$set(u);
      },
      i(s) {
        i || (w(e.$$.fragment, s), i = !0);
      },
      o(s) {
        A(e.$$.fragment, s), i = !1;
      },
      d(s) {
        G(e, s);
      }
    }
  );
}
function Ue(t) {
  let e, l, n, c, i, o;
  function a(u) {
    t[18](u);
  }
  function g(u) {
    t[19](u);
  }
  function h(u) {
    t[20](u);
  }
  function s(u) {
    t[21](u);
  }
  let v = {};
  return (
    /*visualisation_data*/
    t[1].table.selected_year !== void 0 && (v.selected_year = /*visualisation_data*/
    t[1].table.selected_year), /*visualisation_data*/
    t[1].table.selected_election !== void 0 && (v.selected_election = /*visualisation_data*/
    t[1].table.selected_election), /*visualisation_data*/
    t[1].table.selected_region !== void 0 && (v.selected_region = /*visualisation_data*/
    t[1].table.selected_region), /*visualisation_data*/
    t[1].table.selected_fields !== void 0 && (v.selected_fields = /*visualisation_data*/
    t[1].table.selected_fields), e = new Gt({ props: v }), D.push(() => J(e, "selected_year", a)), D.push(() => J(e, "selected_election", g)), D.push(() => J(e, "selected_region", h)), D.push(() => J(e, "selected_fields", s)), {
      c() {
        I(e.$$.fragment);
      },
      m(u, k) {
        F(e, u, k), o = !0;
      },
      p(u, k) {
        const E = {};
        !l && k & /*visualisation_data*/
        2 && (l = !0, E.selected_year = /*visualisation_data*/
        u[1].table.selected_year, U(() => l = !1)), !n && k & /*visualisation_data*/
        2 && (n = !0, E.selected_election = /*visualisation_data*/
        u[1].table.selected_election, U(() => n = !1)), !c && k & /*visualisation_data*/
        2 && (c = !0, E.selected_region = /*visualisation_data*/
        u[1].table.selected_region, U(() => c = !1)), !i && k & /*visualisation_data*/
        2 && (i = !0, E.selected_fields = /*visualisation_data*/
        u[1].table.selected_fields, U(() => i = !1)), e.$set(E);
      },
      i(u) {
        o || (w(e.$$.fragment, u), o = !0);
      },
      o(u) {
        A(e.$$.fragment, u), o = !1;
      },
      d(u) {
        G(e, u);
      }
    }
  );
}
function Yt(t) {
  let e;
  return {
    c() {
      e = Y("Close");
    },
    m(l, n) {
      B(l, e, n);
    },
    d(l) {
      l && q(e);
    }
  };
}
function Zt(t) {
  let e, l, n, c, i, o, a, g, h, s, v, u, k, E, d, y, C, r = (
    /*visualisation*/
    t[0] === "hemicycle" && Qe(t)
  ), N = (
    /*visualisation*/
    t[0] === "carto" && ze(t)
  ), m = (
    /*visualisation*/
    t[0] === "table" && Ue(t)
  );
  return E = new Q({
    props: {
      secondary: !0,
      $$slots: { default: [Yt] },
      $$scope: { ctx: t }
    }
  }), E.$on(
    "click",
    /*click_handler_3*/
    t[22]
  ), {
    c() {
      e = M("div"), l = M("div"), l.innerHTML = "<p>Hemicycle</p>", n = T(), c = M("div"), c.innerHTML = "<p>Map</p>", i = T(), o = M("div"), o.innerHTML = "<p>Table</p>", a = T(), r && r.c(), g = T(), N && N.c(), h = T(), m && m.c(), s = T(), v = M("hr"), u = T(), k = M("div"), I(E.$$.fragment), S(l, "class", "election-engine-visualisation-item svelte-48878w"), S(l, "role", "button"), S(l, "tabindex", "0"), W(
        l,
        "selected",
        /*visualisation*/
        t[0] === "hemicycle"
      ), S(c, "class", "election-engine-visualisation-item svelte-48878w"), S(c, "role", "button"), S(c, "tabindex", "0"), W(
        c,
        "selected",
        /*visualisation*/
        t[0] === "carto"
      ), S(o, "class", "election-engine-visualisation-item svelte-48878w"), S(o, "role", "button"), S(o, "tabindex", "0"), W(
        o,
        "selected",
        /*visualisation*/
        t[0] === "table"
      ), S(e, "class", "election-engine-visualisation-container svelte-48878w"), S(v, "class", "mt-4 svelte-48878w"), S(k, "class", "mt-4 svelte-48878w");
    },
    m(b, f) {
      B(b, e, f), P(e, l), P(e, n), P(e, c), P(e, i), P(e, o), B(b, a, f), r && r.m(b, f), B(b, g, f), N && N.m(b, f), B(b, h, f), m && m.m(b, f), B(b, s, f), B(b, v, f), B(b, u, f), B(b, k, f), F(E, k, null), d = !0, y || (C = [
        Z(
          l,
          "click",
          /*click_handler*/
          t[6]
        ),
        Z(
          l,
          "keypress",
          /*keypress_handler*/
          t[7]
        ),
        Z(
          c,
          "click",
          /*click_handler_1*/
          t[8]
        ),
        Z(
          c,
          "keypress",
          /*keypress_handler_1*/
          t[9]
        ),
        Z(
          o,
          "click",
          /*click_handler_2*/
          t[10]
        ),
        Z(
          o,
          "keypress",
          /*keypress_handler_2*/
          t[11]
        )
      ], y = !0);
    },
    p(b, f) {
      (!d || f & /*visualisation*/
      1) && W(
        l,
        "selected",
        /*visualisation*/
        b[0] === "hemicycle"
      ), (!d || f & /*visualisation*/
      1) && W(
        c,
        "selected",
        /*visualisation*/
        b[0] === "carto"
      ), (!d || f & /*visualisation*/
      1) && W(
        o,
        "selected",
        /*visualisation*/
        b[0] === "table"
      ), /*visualisation*/
      b[0] === "hemicycle" ? r ? (r.p(b, f), f & /*visualisation*/
      1 && w(r, 1)) : (r = Qe(b), r.c(), w(r, 1), r.m(g.parentNode, g)) : r && (K(), A(r, 1, 1, () => {
        r = null;
      }), V()), /*visualisation*/
      b[0] === "carto" ? N ? (N.p(b, f), f & /*visualisation*/
      1 && w(N, 1)) : (N = ze(b), N.c(), w(N, 1), N.m(h.parentNode, h)) : N && (K(), A(N, 1, 1, () => {
        N = null;
      }), V()), /*visualisation*/
      b[0] === "table" ? m ? (m.p(b, f), f & /*visualisation*/
      1 && w(m, 1)) : (m = Ue(b), m.c(), w(m, 1), m.m(s.parentNode, s)) : m && (K(), A(m, 1, 1, () => {
        m = null;
      }), V());
      const H = {};
      f & /*$$scope*/
      33554432 && (H.$$scope = { dirty: f, ctx: b }), E.$set(H);
    },
    i(b) {
      d || (w(r), w(N), w(m), w(E.$$.fragment, b), d = !0);
    },
    o(b) {
      A(r), A(N), A(m), A(E.$$.fragment, b), d = !1;
    },
    d(b) {
      b && (q(e), q(a), q(g), q(h), q(s), q(v), q(u), q(k)), r && r.d(b), N && N.d(b), m && m.d(b), G(E), y = !1, x(C);
    }
  };
}
function Qt(t) {
  let e;
  return {
    c() {
      e = M("div"), e.innerHTML = "<h2>Elections Engine</h2>", S(e, "slot", "title");
    },
    m(l, n) {
      B(l, e, n);
    },
    p: de,
    d(l) {
      l && q(e);
    }
  };
}
function zt(t) {
  let e, l, n = (
    /*show_modal*/
    t[2] && Ze(t)
  );
  return {
    c() {
      n && n.c(), e = xe();
    },
    m(c, i) {
      n && n.m(c, i), B(c, e, i), l = !0;
    },
    p(c, [i]) {
      /*show_modal*/
      c[2] ? n ? (n.p(c, i), i & /*show_modal*/
      4 && w(n, 1)) : (n = Ze(c), n.c(), w(n, 1), n.m(e.parentNode, e)) : n && (K(), A(n, 1, 1, () => {
        n = null;
      }), V());
    },
    i(c) {
      l || (w(n), l = !0);
    },
    o(c) {
      A(n), l = !1;
    },
    d(c) {
      c && q(e), n && n.d(c);
    }
  };
}
function Ut(t, e, l) {
  let n = !1, c = "hemicycle", i = {
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
  }, o = null, a = null, g = null;
  jQuery(document).on("election-engine-edit-block-click", (_, R, lt, nt) => {
    o = R, l(4, a = lt), l(5, g = nt), a.visualisation && l(0, c = a.visualisation), l(1, i[c] = { ...a }, i), console.log("election-engine-edit-block-click", { props: o, attributes: a }), l(2, n = !0);
  });
  function h(_) {
    l(0, c = _), l(4, a.visualisation = _, a);
  }
  const s = () => h("hemicycle"), v = () => h("hemicycle"), u = () => h("carto"), k = () => h("carto"), E = () => h("table"), d = () => h("table");
  function y(_) {
    t.$$.not_equal(i.hemicycle.selected_year, _) && (i.hemicycle.selected_year = _, l(1, i));
  }
  function C(_) {
    t.$$.not_equal(i.hemicycle.selected_election, _) && (i.hemicycle.selected_election = _, l(1, i));
  }
  function r(_) {
    t.$$.not_equal(i.hemicycle.selected_region, _) && (i.hemicycle.selected_region = _, l(1, i));
  }
  function N(_) {
    t.$$.not_equal(i.carto.selected_year, _) && (i.carto.selected_year = _, l(1, i));
  }
  function m(_) {
    t.$$.not_equal(i.carto.selected_election, _) && (i.carto.selected_election = _, l(1, i));
  }
  function b(_) {
    t.$$.not_equal(i.carto.selected_region, _) && (i.carto.selected_region = _, l(1, i));
  }
  function f(_) {
    t.$$.not_equal(i.table.selected_year, _) && (i.table.selected_year = _, l(1, i));
  }
  function H(_) {
    t.$$.not_equal(i.table.selected_election, _) && (i.table.selected_election = _, l(1, i));
  }
  function j(_) {
    t.$$.not_equal(i.table.selected_region, _) && (i.table.selected_region = _, l(1, i));
  }
  function ge(_) {
    t.$$.not_equal(i.table.selected_fields, _) && (i.table.selected_fields = _, l(1, i));
  }
  const p = () => l(2, n = !1), L = () => l(2, n = !1);
  return t.$$.update = () => {
    t.$$.dirty & /*attributes, setAttributes, visualisation, visualisation_data*/
    51 && a && g && (c === "hemicycle" ? g({
      ...a,
      ...i.hemicycle
    }) : c === "carto" ? g({
      ...a,
      ...i.carto
    }) : c === "table" && (console.log("setting attributes", i.table), g({
      ...a,
      ...i.table
    })));
  }, [
    c,
    i,
    n,
    h,
    a,
    g,
    s,
    v,
    u,
    k,
    E,
    d,
    y,
    C,
    r,
    N,
    m,
    b,
    f,
    H,
    j,
    ge,
    p,
    L
  ];
}
class Jt extends ce {
  constructor(e) {
    super(), ie(this, e, Ut, zt, ne, {});
  }
}
jQuery(() => {
  const t = document.getElementById("ElectionsEngineAdminModal");
  new Jt({
    target: t
  });
});
