var gt = Object.defineProperty;
var _t = (i, e, t) => e in i ? gt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var qe = (i, e, t) => (_t(i, typeof e != "symbol" ? e + "" : e, t), t);
function ye() {
}
function st(i) {
  return i();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(i) {
  i.forEach(st);
}
function at(i) {
  return typeof i == "function";
}
function ft(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function vt(i) {
  return Object.keys(i).length === 0;
}
function M(i, e) {
  i.appendChild(e);
}
function D(i, e, t) {
  i.insertBefore(e, t || null);
}
function N(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Me(i, e) {
  for (let t = 0; t < i.length; t += 1)
    i[t] && i[t].d(e);
}
function yt(i) {
  return document.createElement(i);
}
function V(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function K(i) {
  return document.createTextNode(i);
}
function Fe() {
  return K("");
}
function fe(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function mt(i) {
  return Array.from(i.childNodes);
}
function ge(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function O(i, e, t) {
  i.classList.toggle(e, !!t);
}
let me;
function _e(i) {
  me = i;
}
function Et() {
  if (!me)
    throw new Error("Function called outside component initialization");
  return me;
}
function bt(i) {
  Et().$$.on_mount.push(i);
}
const he = [], Oe = [];
let ce = [];
const De = [], wt = /* @__PURE__ */ Promise.resolve();
let Re = !1;
function kt() {
  Re || (Re = !0, wt.then(ot));
}
function Te(i) {
  ce.push(i);
}
const Pe = /* @__PURE__ */ new Set();
let oe = 0;
function ot() {
  if (oe !== 0)
    return;
  const i = me;
  do {
    try {
      for (; oe < he.length; ) {
        const e = he[oe];
        oe++, _e(e), xt(e.$$);
      }
    } catch (e) {
      throw he.length = 0, oe = 0, e;
    }
    for (_e(null), he.length = 0, oe = 0; Oe.length; )
      Oe.pop()();
    for (let e = 0; e < ce.length; e += 1) {
      const t = ce[e];
      Pe.has(t) || (Pe.add(t), t());
    }
    ce.length = 0;
  } while (he.length);
  for (; De.length; )
    De.pop()();
  Re = !1, Pe.clear(), _e(i);
}
function xt(i) {
  if (i.fragment !== null) {
    i.update(), ue(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Te);
  }
}
function Bt(i) {
  const e = [], t = [];
  ce.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ce = e;
}
const Ce = /* @__PURE__ */ new Set();
let ee;
function Mt() {
  ee = {
    r: 0,
    c: [],
    p: ee
    // parent group
  };
}
function Vt() {
  ee.r || ue(ee.c), ee = ee.p;
}
function ve(i, e) {
  i && i.i && (Ce.delete(i), i.i(e));
}
function He(i, e, t, r) {
  if (i && i.o) {
    if (Ce.has(i))
      return;
    Ce.add(i), ee.c.push(() => {
      Ce.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else
    r && r();
}
function G(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Ct(i) {
  i && i.c();
}
function ht(i, e, t) {
  const { fragment: r, after_update: l } = i.$$;
  r && r.m(e, t), Te(() => {
    const n = i.$$.on_mount.map(st).filter(at);
    i.$$.on_destroy ? i.$$.on_destroy.push(...n) : ue(n), i.$$.on_mount = [];
  }), l.forEach(Te);
}
function ct(i, e) {
  const t = i.$$;
  t.fragment !== null && (Bt(t.after_update), ue(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function St(i, e) {
  i.$$.dirty[0] === -1 && (he.push(i), kt(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ut(i, e, t, r, l, n, c = null, s = [-1]) {
  const f = me;
  _e(i);
  const o = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: ye,
    not_equal: l,
    bound: Ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Ie(),
    dirty: s,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  c && c(o.root);
  let u = !1;
  if (o.ctx = t ? t(i, e.props || {}, (h, d, ...g) => {
    const v = g.length ? g[0] : d;
    return o.ctx && l(o.ctx[h], o.ctx[h] = v) && (!o.skip_bound && o.bound[h] && o.bound[h](v), u && St(i, h)), d;
  }) : [], o.update(), u = !0, ue(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = mt(e.target);
      o.fragment && o.fragment.l(h), h.forEach(N);
    } else
      o.fragment && o.fragment.c();
    e.intro && ve(i.$$.fragment), ht(i, e.target, e.anchor), ot();
  }
  _e(f);
}
class dt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    qe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    qe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ct(this, 1), this.$destroy = ye;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!at(t))
      return ye;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const l = r.indexOf(t);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !vt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const At = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(At);
var pt = {}, Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
var qt = function() {
  function i() {
    this.root = null;
  }
  return i.prototype.insertSuccessor = function(e, t) {
    var r;
    if (e) {
      if (t.prev = e, t.next = e.next, e.next && (e.next.prev = t), e.next = t, e.right) {
        for (e = e.right; e.left; )
          e = e.left;
        e.left = t;
      } else
        e.right = t;
      r = e;
    } else
      this.root ? (e = this.first(this.root), t.prev = null, t.next = e, e.prev = t, e.left = t, r = e) : (t.prev = t.next = null, this.root = t, r = null);
    t.left = t.right = null, t.parent = r, t.red = !0;
    var l, n;
    for (e = t; r && r.red; )
      l = r.parent, r === l.left ? (n = l.right, n && n.red ? (r.red = n.red = !1, l.red = !0, e = l) : (e === r.right && (this.rotateLeft(r), e = r, r = e.parent), r.red = !1, l.red = !0, this.rotateRight(l))) : (n = l.left, n && n.red ? (r.red = n.red = !1, l.red = !0, e = l) : (e === r.left && (this.rotateRight(r), e = r, r = e.parent), r.red = !1, l.red = !0, this.rotateLeft(l))), r = e.parent;
    this.root.red = !1;
  }, i.prototype.removeNode = function(e) {
    e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
    var t = e.parent, r = e.left, l = e.right, n = null;
    r ? l ? n = this.first(l) : n = r : n = l, t ? t.left === e ? t.left = n : t.right = n : this.root = n;
    var c;
    if (r && l ? (c = n.red, n.red = e.red, n.left = r, r.parent = n, n !== l ? (t = n.parent, n.parent = e.parent, e = n.right, t.left = e, n.right = l, l.parent = n) : (n.parent = t, t = n, e = n.right)) : (c = e.red, e = n), e && (e.parent = t), !c) {
      if (e && e.red) {
        e.red = !1;
        return;
      }
      var s;
      do {
        if (e === this.root)
          break;
        if (e === t.left) {
          if (s = t.right, s.red && (s.red = !1, t.red = !0, this.rotateLeft(t), s = t.right), s.left && s.left.red || s.right && s.right.red) {
            (!s.right || !s.right.red) && (s.left.red = !1, s.red = !0, this.rotateRight(s), s = t.right), s.red = t.red, t.red = s.right.red = !1, this.rotateLeft(t), e = this.root;
            break;
          }
        } else if (s = t.left, s.red && (s.red = !1, t.red = !0, this.rotateRight(t), s = t.left), s.left && s.left.red || s.right && s.right.red) {
          (!s.left || !s.left.red) && (s.right.red = !1, s.red = !0, this.rotateLeft(s), s = t.left), s.red = t.red, t.red = s.left.red = !1, this.rotateRight(t), e = this.root;
          break;
        }
        s.red = !0, e = t, t = t.parent;
      } while (!e.red);
      e && (e.red = !1);
    }
  }, i.prototype.rotateLeft = function(e) {
    var t = e, r = e.right, l = t.parent;
    l ? l.left === t ? l.left = r : l.right = r : this.root = r, r.parent = l, t.parent = r, t.right = r.left, t.right && (t.right.parent = t), r.left = t;
  }, i.prototype.rotateRight = function(e) {
    var t = e, r = e.left, l = t.parent;
    l ? l.left === t ? l.left = r : l.right = r : this.root = r, r.parent = l, t.parent = r, t.left = r.right, t.left && (t.left.parent = t), r.right = t;
  }, i.prototype.first = function(e) {
    for (; e.left; )
      e = e.left;
    return e;
  }, i.prototype.last = function(e) {
    for (; e.right; )
      e = e.right;
    return e;
  }, i;
}();
Se.RBTree = qt;
var Pt = /* @__PURE__ */ function() {
  function i() {
  }
  return i;
}();
Se.RBTreeNode = Pt;
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
var Rt = /* @__PURE__ */ function() {
  function i(e, t) {
    this.x = e, this.y = t;
  }
  return i;
}();
Le.Vertex = Rt;
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
var Tt = /* @__PURE__ */ function() {
  function i(e, t) {
    this.lSite = e, this.rSite = t, this.va = this.vb = null;
  }
  return i;
}();
We.Edge = Tt;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
var Ht = function() {
  function i(e) {
    this.site = e, this.halfedges = [], this.closeMe = !1;
  }
  return i.prototype.init = function(e) {
    return this.site = e, this.halfedges = [], this.closeMe = !1, this;
  }, i.prototype.prepareHalfedges = function() {
    for (var e = this.halfedges, t = e.length, r; t--; )
      r = e[t].edge, (!r.vb || !r.va) && e.splice(t, 1);
    return e.sort(function(l, n) {
      return n.angle - l.angle;
    }), e.length;
  }, i.prototype.getNeighborIds = function() {
    for (var e = [], t = this.halfedges.length, r; t--; )
      r = this.halfedges[t].edge, r.lSite !== null && r.lSite.id != this.site.id ? e.push(r.lSite.id) : r.rSite !== null && r.rSite.id != this.site.id && e.push(r.rSite.id);
    return e;
  }, i.prototype.getBbox = function() {
    for (var e = this.halfedges, t = e.length, r = 1 / 0, l = 1 / 0, n = -1 / 0, c = -1 / 0, s, f, o; t--; )
      s = e[t].getStartpoint(), f = s.x, o = s.y, f < r && (r = f), o < l && (l = o), f > n && (n = f), o > c && (c = o);
    return {
      x: r,
      y: l,
      width: n - r,
      height: c - l
    };
  }, i.prototype.pointIntersection = function(e, t) {
    for (var r = this.halfedges, l = r.length, n, c, s, f; l--; ) {
      if (n = r[l], c = n.getStartpoint(), s = n.getEndpoint(), f = (t - c.y) * (s.x - c.x) - (e - c.x) * (s.y - c.y), !f)
        return 0;
      if (f > 0)
        return -1;
    }
    return 1;
  }, i;
}();
ze.Cell = Ht;
var Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
var Ft = /* @__PURE__ */ function() {
  function i(e) {
    this.site = e;
  }
  return i;
}();
Je.Diagram = Ft;
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
var Lt = function() {
  function i(e, t, r) {
    if (this.site = t, this.edge = e, r)
      this.angle = Math.atan2(r.y - t.y, r.x - t.x);
    else {
      var l = e.va, n = e.vb;
      this.angle = e.lSite === t ? Math.atan2(n.x - l.x, l.y - n.y) : Math.atan2(l.x - n.x, n.y - l.y);
    }
  }
  return i.prototype.getStartpoint = function() {
    return this.edge.lSite === this.site ? this.edge.va : this.edge.vb;
  }, i.prototype.getEndpoint = function() {
    return this.edge.lSite === this.site ? this.edge.vb : this.edge.va;
  }, i;
}();
Ne.Halfedge = Lt;
Object.defineProperty(pt, "__esModule", { value: !0 });
var Ve = Se, Wt = Le, Ze = We, zt = ze, Qe = Je, Jt = Ne, Nt = function() {
  function i() {
    this.vertices = null, this.edges = null, this.cells = null, this.toRecycle = null, this.beachsectionJunkyard = [], this.circleEventJunkyard = [], this.vertexJunkyard = [], this.edgeJunkyard = [], this.cellJunkyard = [];
  }
  return i.prototype.compute = function(e, t) {
    var r = /* @__PURE__ */ new Date();
    this.reset(), this.toRecycle && (this.vertexJunkyard = this.vertexJunkyard.concat(this.toRecycle.vertices), this.edgeJunkyard = this.edgeJunkyard.concat(this.toRecycle.edges), this.cellJunkyard = this.cellJunkyard.concat(this.toRecycle.cells), this.toRecycle = null);
    var l = e.slice(0);
    l.sort(function(g, v) {
      var _ = v.y - g.y;
      return _ || v.x - g.x;
    });
    for (var n = l.pop(), c = 0, s, f, o = this.cells, u; ; )
      if (u = this.firstCircleEvent, n && (!u || n.y < u.y || n.y === u.y && n.x < u.x))
        (n.x !== s || n.y !== f) && (o[c] = this.createCell(n), n.id = c++, this.addBeachsection(n), f = n.y, s = n.x), n = l.pop();
      else if (u)
        this.removeBeachsection(u.arc);
      else
        break;
    this.clipEdges(t), this.closeCells(t);
    var h = /* @__PURE__ */ new Date(), d = new Qe.Diagram();
    return d.cells = this.cells, d.edges = this.edges, d.vertices = this.vertices, d.execTime = h.getTime() - r.getTime(), this.reset(), d;
  }, i.prototype.sqrt = function(e) {
    return Math.sqrt(e);
  }, i.prototype.abs = function(e) {
    return Math.abs(e);
  }, i.prototype.eps = function() {
    return 1e-9;
  }, i.prototype.inveps = function() {
    return 1 / this.eps();
  }, i.prototype.equalWithEpsilon = function(e, t) {
    return this.abs(e - t) < this.eps();
  }, i.prototype.greaterThanWithEpsilon = function(e, t) {
    return e - t > this.eps();
  }, i.prototype.greaterThanOrEqualWithEpsilon = function(e, t) {
    return t - e < this.eps();
  }, i.prototype.lessThanWithEpsilon = function(e, t) {
    return t - e > this.eps();
  }, i.prototype.lessThanOrEqualWithEpsilon = function(e, t) {
    return e - t < this.eps();
  }, i.prototype.quantizeSites = function(e) {
    for (var t = this.eps(), r = e.length, l; r--; )
      l = e[r], l.x = Math.floor(l.x / t) * t, l.y = Math.floor(l.y / t) * t;
  }, i.prototype.recycle = function(e) {
    if (e)
      if (e instanceof Qe.Diagram)
        this.toRecycle = e;
      else
        throw "Voronoi.recycleDiagram() > Need a Diagram object.";
  }, i.prototype.reset = function() {
    if (this.beachline || (this.beachline = new Ve.RBTree()), this.beachline.root)
      for (var e = this.beachline.first(this.beachline.root); e; )
        this.beachsectionJunkyard.push(e), e = e.next;
    this.beachline.root = null, this.circleEvents || (this.circleEvents = new Ve.RBTree()), this.circleEvents.root = this.firstCircleEvent = null, this.vertices = [], this.edges = [], this.cells = [];
  }, i.prototype.createCell = function(e) {
    var t = this.cellJunkyard.pop();
    return t ? (t.init(e), t.init(e)) : new zt.Cell(e);
  }, i.prototype.createHalfedge = function(e, t, r) {
    return new Jt.Halfedge(e, t, r);
  }, i.prototype.createVertex = function(e, t) {
    var r = this.vertexJunkyard.pop();
    return r ? (r.x = e, r.y = t) : r = new Wt.Vertex(e, t), this.vertices.push(r), r;
  }, i.prototype.createEdge = function(e, t, r, l) {
    r === void 0 && (r = null), l === void 0 && (l = null);
    var n = this.edgeJunkyard.pop();
    return n ? (n.lSite = e, n.rSite = t, n.va = n.vb = null) : n = new Ze.Edge(e, t), this.edges.push(n), r && this.setEdgeStartpoint(n, e, t, r), l && this.setEdgeEndpoint(n, e, t, l), this.cells[e.id].halfedges.push(this.createHalfedge(n, e, t)), this.cells[t.id].halfedges.push(this.createHalfedge(n, t, e)), n;
  }, i.prototype.createBorderEdge = function(e, t, r) {
    var l = this.edgeJunkyard.pop();
    return l ? (l.lSite = e, l.rSite = null) : l = new Ze.Edge(e, null), l.va = t, l.vb = r, this.edges.push(l), l;
  }, i.prototype.setEdgeStartpoint = function(e, t, r, l) {
    !e.va && !e.vb ? (e.va = l, e.lSite = t, e.rSite = r) : e.lSite === r ? e.vb = l : e.va = l;
  }, i.prototype.setEdgeEndpoint = function(e, t, r, l) {
    this.setEdgeStartpoint(e, r, t, l);
  }, i.prototype.createBeachsection = function(e) {
    var t = this.beachsectionJunkyard.pop();
    return t || (t = new Ve.RBTreeNode()), t.site = e, t;
  }, i.prototype.leftBreakPoint = function(e, t) {
    var r = e.site, l = r.x, n = r.y, c = n - t;
    if (!c)
      return l;
    var s = e.prev;
    if (!s)
      return -1 / 0;
    r = s.site;
    var f = r.x, o = r.y, u = o - t;
    if (!u)
      return f;
    var h = f - l, d = 1 / c - 1 / u, g = h / u;
    return d ? (-g + this.sqrt(g * g - 2 * d * (h * h / (-2 * u) - o + u / 2 + n - c / 2))) / d + l : (l + f) / 2;
  }, i.prototype.rightBreakPoint = function(e, t) {
    var r = e.next;
    if (r)
      return this.leftBreakPoint(r, t);
    var l = e.site;
    return l.y === t ? l.x : 1 / 0;
  }, i.prototype.detachBeachsection = function(e) {
    this.detachCircleEvent(e), this.beachline.removeNode(e), this.beachsectionJunkyard.push(e);
  }, i.prototype.removeBeachsection = function(e) {
    var t = e.circleEvent, r = t.x, l = t.ycenter, n = this.createVertex(r, l), c = e.prev, s = e.next, f = [e], o = Math.abs;
    this.detachBeachsection(e);
    for (var u = c; u.circleEvent && o(r - u.circleEvent.x) < this.eps() && o(l - u.circleEvent.ycenter) < this.eps(); )
      c = u.prev, f.unshift(u), this.detachBeachsection(u), u = c;
    f.unshift(u), this.detachCircleEvent(u);
    for (var h = s; h.circleEvent && o(r - h.circleEvent.x) < this.eps() && o(l - h.circleEvent.ycenter) < this.eps(); )
      s = h.next, f.push(h), this.detachBeachsection(h), h = s;
    f.push(h), this.detachCircleEvent(h);
    var d = f.length, g;
    for (g = 1; g < d; g++)
      h = f[g], u = f[g - 1], this.setEdgeStartpoint(h.edge, u.site, h.site, n);
    u = f[0], h = f[d - 1], h.edge = this.createEdge(u.site, h.site, void 0, n), this.attachCircleEvent(u), this.attachCircleEvent(h);
  }, i.prototype.addBeachsection = function(e) {
    for (var t = e.x, r = e.y, l, n, c, s, f = this.beachline.root; f; )
      if (c = this.leftBreakPoint(f, r) - t, c > this.eps())
        f = f.left;
      else if (s = t - this.rightBreakPoint(f, r), s > this.eps()) {
        if (!f.right) {
          l = f;
          break;
        }
        f = f.right;
      } else {
        c > -this.eps() ? (l = f.prev, n = f) : s > -this.eps() ? (l = f, n = f.next) : l = n = f;
        break;
      }
    var o = this.createBeachsection(e);
    if (this.beachline.insertSuccessor(l, o), !(!l && !n)) {
      if (l === n) {
        this.detachCircleEvent(l), n = this.createBeachsection(l.site), this.beachline.insertSuccessor(o, n), o.edge = n.edge = this.createEdge(l.site, o.site), this.attachCircleEvent(l), this.attachCircleEvent(n);
        return;
      }
      if (l && !n) {
        o.edge = this.createEdge(l.site, o.site);
        return;
      }
      if (l !== n) {
        this.detachCircleEvent(l), this.detachCircleEvent(n);
        var u = l.site, h = u.x, d = u.y, g = e.x - h, v = e.y - d, _ = n.site, E = _.x - h, k = _.y - d, B = 2 * (g * k - v * E), x = g * g + v * v, S = E * E + k * k, C = this.createVertex((k * x - v * S) / B + h, (g * S - E * x) / B + d);
        this.setEdgeStartpoint(n.edge, u, _, C), o.edge = this.createEdge(u, e, void 0, C), n.edge = this.createEdge(e, _, void 0, C), this.attachCircleEvent(l), this.attachCircleEvent(n);
        return;
      }
    }
  }, i.prototype.attachCircleEvent = function(e) {
    var t = e.prev, r = e.next;
    if (!(!t || !r)) {
      var l = t.site, n = e.site, c = r.site;
      if (l !== c) {
        var s = n.x, f = n.y, o = l.x - s, u = l.y - f, h = c.x - s, d = c.y - f, g = 2 * (o * d - u * h);
        if (!(g >= -2e-12)) {
          var v = o * o + u * u, _ = h * h + d * d, E = (d * v - u * _) / g, k = (o * _ - h * v) / g, B = k + f, x = this.circleEventJunkyard.pop();
          x || (x = new Ve.RBTreeNode()), x.arc = e, x.site = n, x.x = E + s, x.y = B + this.sqrt(E * E + k * k), x.ycenter = B, e.circleEvent = x;
          for (var S = null, C = this.circleEvents.root; C; )
            if (x.y < C.y || x.y === C.y && x.x <= C.x)
              if (C.left)
                C = C.left;
              else {
                S = C.prev;
                break;
              }
            else if (C.right)
              C = C.right;
            else {
              S = C;
              break;
            }
          this.circleEvents.insertSuccessor(S, x), S || (this.firstCircleEvent = x);
        }
      }
    }
  }, i.prototype.detachCircleEvent = function(e) {
    var t = e.circleEvent;
    t && (t.prev || (this.firstCircleEvent = t.next), this.circleEvents.removeNode(t), this.circleEventJunkyard.push(t), e.circleEvent = null);
  }, i.prototype.connectEdge = function(e, t) {
    var r = e.vb;
    if (r)
      return !0;
    var l = e.va, n = t.xl, c = t.xr, s = t.yt, f = t.yb, o = e.lSite, u = e.rSite, h = o.x, d = o.y, g = u.x, v = u.y, _ = (h + g) / 2, E = (d + v) / 2, k, B;
    if (this.cells[o.id].closeMe = !0, this.cells[u.id].closeMe = !0, v !== d && (k = (h - g) / (v - d), B = E - k * _), k === void 0) {
      if (_ < n || _ >= c)
        return !1;
      if (h > g) {
        if (!l || l.y < s)
          l = this.createVertex(_, s);
        else if (l.y >= f)
          return !1;
        r = this.createVertex(_, f);
      } else {
        if (!l || l.y > f)
          l = this.createVertex(_, f);
        else if (l.y < s)
          return !1;
        r = this.createVertex(_, s);
      }
    } else if (k < -1 || k > 1)
      if (h > g) {
        if (!l || l.y < s)
          l = this.createVertex((s - B) / k, s);
        else if (l.y >= f)
          return !1;
        r = this.createVertex((f - B) / k, f);
      } else {
        if (!l || l.y > f)
          l = this.createVertex((f - B) / k, f);
        else if (l.y < s)
          return !1;
        r = this.createVertex((s - B) / k, s);
      }
    else if (d < v) {
      if (!l || l.x < n)
        l = this.createVertex(n, k * n + B);
      else if (l.x >= c)
        return !1;
      r = this.createVertex(c, k * c + B);
    } else {
      if (!l || l.x > c)
        l = this.createVertex(c, k * c + B);
      else if (l.x < n)
        return !1;
      r = this.createVertex(n, k * n + B);
    }
    return e.va = l, e.vb = r, !0;
  }, i.prototype.clipEdge = function(e, t) {
    var r = e.va.x, l = e.va.y, n = e.vb.x, c = e.vb.y, s = 0, f = 1, o = n - r, u = c - l, h = r - t.xl;
    if (o === 0 && h < 0)
      return !1;
    var d = -h / o;
    if (o < 0) {
      if (d < s)
        return !1;
      d < f && (f = d);
    } else if (o > 0) {
      if (d > f)
        return !1;
      d > s && (s = d);
    }
    if (h = t.xr - r, o === 0 && h < 0)
      return !1;
    if (d = h / o, o < 0) {
      if (d > f)
        return !1;
      d > s && (s = d);
    } else if (o > 0) {
      if (d < s)
        return !1;
      d < f && (f = d);
    }
    if (h = l - t.yt, u === 0 && h < 0)
      return !1;
    if (d = -h / u, u < 0) {
      if (d < s)
        return !1;
      d < f && (f = d);
    } else if (u > 0) {
      if (d > f)
        return !1;
      d > s && (s = d);
    }
    if (h = t.yb - l, u === 0 && h < 0)
      return !1;
    if (d = h / u, u < 0) {
      if (d > f)
        return !1;
      d > s && (s = d);
    } else if (u > 0) {
      if (d < s)
        return !1;
      d < f && (f = d);
    }
    return s > 0 && (e.va = this.createVertex(r + s * o, l + s * u)), f < 1 && (e.vb = this.createVertex(r + f * o, l + f * u)), (s > 0 || f < 1) && (this.cells[e.lSite.id].closeMe = !0, this.cells[e.rSite.id].closeMe = !0), !0;
  }, i.prototype.clipEdges = function(e) {
    for (var t = this.edges, r = t.length, l, n = Math.abs; r--; )
      l = t[r], (!this.connectEdge(l, e) || !this.clipEdge(l, e) || n(l.va.x - l.vb.x) < this.eps() && n(l.va.y - l.vb.y) < this.eps()) && (l.va = l.vb = null, t.splice(r, 1));
  }, i.prototype.closeCells = function(e) {
    for (var t = e.xl, r = e.xr, l = e.yt, n = e.yb, c = this.cells, s = c.length, f, o, u, h, d, g, v, _, E, k = Math.abs; s--; )
      if (f = c[s], !!f.prepareHalfedges() && f.closeMe) {
        for (u = f.halfedges, h = u.length, o = 0; o < h; ) {
          if (g = u[o].getEndpoint(), _ = u[(o + 1) % h].getStartpoint(), k(g.x - _.x) >= this.eps() || k(g.y - _.y) >= this.eps())
            switch (!0) {
              case (this.equalWithEpsilon(g.x, t) && this.lessThanWithEpsilon(g.y, n)):
                if (E = this.equalWithEpsilon(_.x, t), v = this.createVertex(t, E ? _.y : n), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.y, n) && this.lessThanWithEpsilon(g.x, r)):
                if (E = this.equalWithEpsilon(_.y, n), v = this.createVertex(E ? _.x : r, n), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.x, r) && this.greaterThanWithEpsilon(g.y, l)):
                if (E = this.equalWithEpsilon(_.x, r), v = this.createVertex(r, E ? _.y : l), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.y, l) && this.greaterThanWithEpsilon(g.x, t)):
                if (E = this.equalWithEpsilon(_.y, l), v = this.createVertex(E ? _.x : t, l), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E || (g = v, E = this.equalWithEpsilon(_.x, t), v = this.createVertex(t, E ? _.y : n), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E) || (g = v, E = this.equalWithEpsilon(_.y, n), v = this.createVertex(E ? _.x : r, n), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E) || (g = v, E = this.equalWithEpsilon(_.x, r), v = this.createVertex(r, E ? _.y : l), d = this.createBorderEdge(f.site, g, v), o++, u.splice(o, 0, this.createHalfedge(d, f.site, null)), h++, E))
                  break;
              default:
                throw "Voronoi.closeCells() > this makes no sense!";
            }
          o++;
        }
        f.closeMe = !1;
      }
  }, i;
}(), jt = pt.Voronoi = Nt;
const It = (i) => {
  const e = new jt();
  let t = 0, r = 0, l = 0, n = 0;
  for (let s = 0; s < i.length; s++) {
    let f = i[s];
    f.x < t && (t = f.x), f.x > r && (r = f.x), f.y < l && (l = f.y), f.y > n && (n = f.y);
  }
  let c = { xl: t, xr: r, yt: l, yb: n };
  return e.compute(i, c);
};
function Ue(i) {
  if (!i || i.length === 0)
    return "";
  let e = [];
  const t = i.shift();
  let r = t.getStartpoint(), l = t.getEndpoint();
  e.push(`M ${r.x} ${r.y}`), e.push(`L ${l.x} ${l.y}`);
  for (let n of i) {
    let c = n.getEndpoint();
    e.push(`L ${c.x} ${c.y}`);
  }
  return e.push("Z"), e.join(" ");
}
function Ot(i, e, t, r) {
  let l = [], n = 0;
  for (let o = e; o >= 0; o--) {
    const u = i - o * i / e, h = r / 180 * Math.PI * u;
    n += h;
  }
  const c = n / t;
  let s = 0, f = 0;
  for (let o = e; o >= 0; o--) {
    const u = i - o * i / e, h = r / 180 * Math.PI * u;
    let d = Math.ceil(h / c);
    s + d > t && (d = t - s);
    const g = h / d, v = (r - 180) / 180 * Math.PI / 2;
    for (let _ = 0; _ < d; _++) {
      s++;
      const E = _ * g / u + g / u / 2, k = -u * Math.cos(E - v), B = -u * Math.sin(E - v);
      l.push({ id: o, x: k, y: B, a: f, angle: E });
    }
    f++;
  }
  return l.sort((o, u) => o.angle - u.angle), l;
}
function Ge(i, e, t) {
  const r = i.slice();
  return r[33] = e[t], r[35] = t, r;
}
function Ke(i, e, t) {
  const r = i.slice();
  return r[36] = e[t], r[35] = t, r;
}
function Xe(i, e, t) {
  const r = i.slice();
  return r[36] = e[t], r;
}
function Ye(i, e, t) {
  const r = i.slice();
  return r[40] = e[t], r[35] = t, r;
}
function $e(i) {
  let e, t;
  return {
    c() {
      e = V("path"), a(e, "d", t = `M ${/*r*/
      i[1] - /*i*/
      i[35] * /*r*/
      (i[1] / /*rows*/
      i[2])},0 A ${/*r*/
      i[1] - /*i*/
      i[35] * /*r*/
      (i[1] / /*rows*/
      i[2])},${/*r*/
      i[1] - /*i*/
      i[35] * /*r*/
      (i[1] / /*rows*/
      i[2])} 0 0,0 ${-/*r*/
      (i[1] - /*i*/
      i[35] * /*r*/
      (i[1] / /*rows*/
      i[2]))},0`), a(e, "fill", "transparent"), a(e, "stroke", "white"), a(e, "stroke-width", "1"), a(e, "opacity", "0.4");
    },
    m(r, l) {
      D(r, e, l);
    },
    p(r, l) {
      l[0] & /*r, rows*/
      6 && t !== (t = `M ${/*r*/
      r[1] - /*i*/
      r[35] * /*r*/
      (r[1] / /*rows*/
      r[2])},0 A ${/*r*/
      r[1] - /*i*/
      r[35] * /*r*/
      (r[1] / /*rows*/
      r[2])},${/*r*/
      r[1] - /*i*/
      r[35] * /*r*/
      (r[1] / /*rows*/
      r[2])} 0 0,0 ${-/*r*/
      (r[1] - /*i*/
      r[35] * /*r*/
      (r[1] / /*rows*/
      r[2]))},0`) && a(e, "d", t);
    },
    d(r) {
      r && N(e);
    }
  };
}
function Dt(i) {
  let e, t, r, l, n, c;
  return {
    c() {
      var s, f, o, u, h;
      e = V("circle"), a(e, "data-party", t = /*point*/
      (s = i[36].data) == null ? void 0 : s.id), a(e, "cx", r = /*point*/
      i[36].x), a(e, "cy", l = /*point*/
      i[36].y), a(
        e,
        "r",
        /*dotsize*/
        i[3]
      ), a(e, "fill", n = /*point*/
      (f = i[36].data) == null ? void 0 : f.color), a(e, "opacity", c = /*current_party*/
      (o = i[0]) != null && o.id ? (
        /*point*/
        ((u = i[36].data) == null ? void 0 : u.id) === /*current_party*/
        ((h = i[0]) == null ? void 0 : h.id) ? 1 : 0.5
      ) : 1);
    },
    m(s, f) {
      D(s, e, f);
    },
    p(s, f) {
      var o, u, h, d, g;
      f[0] & /*points*/
      512 && t !== (t = /*point*/
      (o = s[36].data) == null ? void 0 : o.id) && a(e, "data-party", t), f[0] & /*points*/
      512 && r !== (r = /*point*/
      s[36].x) && a(e, "cx", r), f[0] & /*points*/
      512 && l !== (l = /*point*/
      s[36].y) && a(e, "cy", l), f[0] & /*dotsize*/
      8 && a(
        e,
        "r",
        /*dotsize*/
        s[3]
      ), f[0] & /*points*/
      512 && n !== (n = /*point*/
      (u = s[36].data) == null ? void 0 : u.color) && a(e, "fill", n), f[0] & /*current_party, points*/
      513 && c !== (c = /*current_party*/
      (h = s[0]) != null && h.id ? (
        /*point*/
        ((d = s[36].data) == null ? void 0 : d.id) === /*current_party*/
        ((g = s[0]) == null ? void 0 : g.id) ? 1 : 0.5
      ) : 1) && a(e, "opacity", c);
    },
    d(s) {
      s && N(e);
    }
  };
}
function Zt(i) {
  let e, t, r, l, n;
  return {
    c() {
      var c, s, f, o, u;
      e = V("path"), a(e, "d", Ut), a(e, "transform", t = `translate(${/*point*/
      i[36].x},${/*point*/
      i[36].y}) rotate(-5) scale(0.07)`), a(e, "data-party", r = /*point*/
      (c = i[36].data) == null ? void 0 : c.id), a(e, "fill", l = /*point*/
      (s = i[36].data) == null ? void 0 : s.color), a(e, "opacity", n = /*current_party*/
      (f = i[0]) != null && f.id ? (
        /*point*/
        ((o = i[36].data) == null ? void 0 : o.id) === /*current_party*/
        ((u = i[0]) == null ? void 0 : u.id) ? 1 : 0.5
      ) : 1);
    },
    m(c, s) {
      D(c, e, s);
    },
    p(c, s) {
      var f, o, u, h, d;
      s[0] & /*points*/
      512 && t !== (t = `translate(${/*point*/
      c[36].x},${/*point*/
      c[36].y}) rotate(-5) scale(0.07)`) && a(e, "transform", t), s[0] & /*points*/
      512 && r !== (r = /*point*/
      (f = c[36].data) == null ? void 0 : f.id) && a(e, "data-party", r), s[0] & /*points*/
      512 && l !== (l = /*point*/
      (o = c[36].data) == null ? void 0 : o.color) && a(e, "fill", l), s[0] & /*current_party, points*/
      513 && n !== (n = /*current_party*/
      (u = c[0]) != null && u.id ? (
        /*point*/
        ((h = c[36].data) == null ? void 0 : h.id) === /*current_party*/
        ((d = c[0]) == null ? void 0 : d.id) ? 1 : 0.5
      ) : 1) && a(e, "opacity", n);
    },
    d(c) {
      c && N(e);
    }
  };
}
function et(i) {
  let e;
  function t(n, c) {
    return (
      /*selectedShape*/
      n[7] === "hexagon" ? Zt : Dt
    );
  }
  let r = t(i), l = r(i);
  return {
    c() {
      l.c(), e = Fe();
    },
    m(n, c) {
      l.m(n, c), D(n, e, c);
    },
    p(n, c) {
      r === (r = t(n)) && l ? l.p(n, c) : (l.d(1), l = r(n), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(n) {
      n && N(e), l.d(n);
    }
  };
}
function tt(i) {
  let e, t = `${/*i*/
  i[35]}`, r, l, n;
  return {
    c() {
      e = V("text"), r = K(t), a(e, "x", l = /*point*/
      i[36].x), a(e, "y", n = /*point*/
      i[36].y), a(e, "text-anchor", "middle"), a(e, "alignment-baseline", "middle"), a(e, "fill", "white"), a(e, "font-size", "8");
    },
    m(c, s) {
      D(c, e, s), M(e, r);
    },
    p(c, s) {
      s[0] & /*points*/
      512 && l !== (l = /*point*/
      c[36].x) && a(e, "x", l), s[0] & /*points*/
      512 && n !== (n = /*point*/
      c[36].y) && a(e, "y", n);
    },
    d(c) {
      c && N(e);
    }
  };
}
function it(i) {
  let e, t, r, l, n, c;
  function s() {
    return (
      /*mouseover_handler*/
      i[24](
        /*cell*/
        i[33]
      )
    );
  }
  function f() {
    return (
      /*focus_handler*/
      i[25](
        /*cell*/
        i[33]
      )
    );
  }
  function o() {
    return (
      /*click_handler*/
      i[28](
        /*cell*/
        i[33]
      )
    );
  }
  function u(...h) {
    return (
      /*keypress_handler*/
      i[29](
        /*cell*/
        i[33],
        ...h
      )
    );
  }
  return {
    c() {
      e = V("path"), a(e, "class", "voronoi_path"), a(e, "d", t = Ue(
        /*cell*/
        i[33].halfedges
      ).toString()), a(e, "fill", "transparent"), a(e, "stroke", r = /*display*/
      i[8].includes("voronoi") ? "white" : "transparent"), a(e, "stroke-width", l = /*display*/
      i[8].includes("voronoi") ? 1 : 0), a(e, "role", "button"), a(
        e,
        "tabindex",
        /*i*/
        i[35]
      );
    },
    m(h, d) {
      D(h, e, d), n || (c = [
        fe(e, "mouseover", s),
        fe(e, "focus", f),
        fe(
          e,
          "mouseout",
          /*mouseout_handler*/
          i[26]
        ),
        fe(
          e,
          "blur",
          /*blur_handler*/
          i[27]
        ),
        fe(e, "click", o),
        fe(e, "keypress", u)
      ], n = !0);
    },
    p(h, d) {
      i = h, d[0] & /*voronoi*/
      4096 && t !== (t = Ue(
        /*cell*/
        i[33].halfedges
      ).toString()) && a(e, "d", t), d[0] & /*display*/
      256 && r !== (r = /*display*/
      i[8].includes("voronoi") ? "white" : "transparent") && a(e, "stroke", r), d[0] & /*display*/
      256 && l !== (l = /*display*/
      i[8].includes("voronoi") ? 1 : 0) && a(e, "stroke-width", l);
    },
    d(h) {
      h && N(e), n = !1, ue(c);
    }
  };
}
function rt(i) {
  var r;
  let e, t = (
    /*cell*/
    ((r = i[33].halfedges) == null ? void 0 : r.length) > 0 && it(i)
  );
  return {
    c() {
      t && t.c(), e = Fe();
    },
    m(l, n) {
      t && t.m(l, n), D(l, e, n);
    },
    p(l, n) {
      var c;
      /*cell*/
      ((c = l[33].halfedges) == null ? void 0 : c.length) > 0 ? t ? t.p(l, n) : (t = it(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && N(e), t && t.d(l);
    }
  };
}
function lt(i) {
  let e, t = `${/*current_party*/
  i[0].text}`, r;
  return {
    c() {
      e = V("text"), r = K(t), a(e, "x", 0), a(e, "y", 0), a(e, "text-anchor", "middle"), a(e, "alignment-baseline", "middle"), a(
        e,
        "fill",
        /*color*/
        i[4]
      ), a(
        e,
        "font-size",
        /*font_size*/
        i[5]
      );
    },
    m(l, n) {
      D(l, e, n), M(e, r);
    },
    p(l, n) {
      n[0] & /*current_party*/
      1 && t !== (t = `${/*current_party*/
      l[0].text}`) && ge(r, t), n[0] & /*color*/
      16 && a(
        e,
        "fill",
        /*color*/
        l[4]
      ), n[0] & /*font_size*/
      32 && a(
        e,
        "font-size",
        /*font_size*/
        l[5]
      );
    },
    d(l) {
      l && N(e);
    }
  };
}
function Qt(i) {
  let e, t, r, l, n, c, s, f, o, u, h, d, g, v, _, E, k, B, x, S = `${/*r*/
  i[1]}, 0`, C, L, Z, H, te = `${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, X, Q, U, j, ie, Y, W, re = `-${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, de, m, z, A, Ee, be, pe, I, we = `-${/*r*/
  i[1]}, 0`, Ae, ke, $, xe, Be, le = G(Array(
    /*rows*/
    i[2]
  )), q = [];
  for (let p = 0; p < le.length; p += 1)
    q[p] = $e(Ye(i, le, p));
  let ne = G(
    /*points*/
    i[9]
  ), P = [];
  for (let p = 0; p < ne.length; p += 1)
    P[p] = et(Xe(i, ne, p));
  let se = G(
    /*points*/
    i[9]
  ), R = [];
  for (let p = 0; p < se.length; p += 1)
    R[p] = tt(Ke(i, se, p));
  let ae = G(
    /*voronoi*/
    i[12].cells
  ), T = [];
  for (let p = 0; p < ae.length; p += 1)
    T[p] = rt(Ge(i, ae, p));
  let F = (
    /*current_party*/
    i[0] && lt(i)
  );
  return {
    c() {
      var p, b;
      e = yt("main"), t = V("svg"), r = V("g");
      for (let w = 0; w < q.length; w += 1)
        q[w].c();
      n = V("g");
      for (let w = 0; w < P.length; w += 1)
        P[w].c();
      s = V("g");
      for (let w = 0; w < R.length; w += 1)
        R[w].c();
      o = V("g");
      for (let w = 0; w < T.length; w += 1)
        T[w].c();
      h = V("g"), F && F.c(), g = V("g"), v = V("g"), _ = V("text"), E = K("0, 0"), k = V("circle"), B = V("g"), x = V("text"), C = K(S), L = V("circle"), Z = V("g"), H = V("text"), X = K(te), j = V("circle"), Y = V("g"), W = V("text"), de = K(re), A = V("circle"), pe = V("g"), I = V("text"), Ae = K(we), $ = V("circle"), a(r, "id", "arcs"), a(r, "transform", l = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), a(r, "class", "svelte-smqp4o"), O(r, "hide", !/*display*/
      i[8].includes("arcs")), a(n, "id", "points"), a(n, "transform", c = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), a(n, "class", "svelte-smqp4o"), O(n, "hide", !/*display*/
      i[8].includes("points")), a(s, "id", "numbers"), a(s, "transform", f = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), a(s, "class", "svelte-smqp4o"), O(s, "hide", !/*display*/
      i[8].includes("numbers")), a(o, "id", "voronoi"), a(o, "transform", u = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), a(h, "id", "text"), a(h, "transform", d = `translate(${/*text_position*/
      ((p = i[6]) == null ? void 0 : p.x) || /*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*text_position*/
      ((b = i[6]) == null ? void 0 : b.y) || /*r*/
      i[1] + /*top_padding*/
      i[10] + 20})`), a(h, "class", "svelte-smqp4o"), O(h, "hide", !/*display*/
      i[8].includes("text")), a(_, "x", "0"), a(_, "y", "10"), a(_, "text-anchor", "middle"), a(_, "alignment-baseline", "middle"), a(_, "fill", "white"), a(_, "font-size", "8"), a(k, "cx", "0"), a(k, "cy", "0"), a(k, "r", "2"), a(k, "fill", "white"), a(v, "class", "reference_points"), a(
        x,
        "x",
        /*r*/
        i[1]
      ), a(x, "y", "10"), a(x, "text-anchor", "middle"), a(x, "alignment-baseline", "middle"), a(x, "fill", "white"), a(x, "font-size", "8"), a(
        L,
        "cx",
        /*r*/
        i[1]
      ), a(L, "cy", 0), a(L, "r", "2"), a(L, "fill", "white"), a(B, "class", "reference_points"), a(H, "x", Q = /*r*/
      i[1] - 10), a(H, "y", U = -/*r*/
      i[1] + 10), a(H, "text-anchor", "middle"), a(H, "alignment-baseline", "middle"), a(H, "fill", "white"), a(H, "font-size", "8"), a(
        j,
        "cx",
        /*r*/
        i[1]
      ), a(j, "cy", ie = -/*r*/
      i[1]), a(j, "r", "2"), a(j, "fill", "white"), a(Z, "class", "reference_points"), a(W, "x", m = -/*r*/
      i[1] + 10), a(W, "y", z = -/*r*/
      i[1] + 10), a(W, "text-anchor", "middle"), a(W, "alignment-baseline", "middle"), a(W, "fill", "white"), a(W, "font-size", "8"), a(A, "cx", Ee = -/*r*/
      i[1]), a(A, "cy", be = -/*r*/
      i[1]), a(A, "r", "2"), a(A, "fill", "white"), a(Y, "class", "reference_points"), a(I, "x", ke = -/*r*/
      i[1]), a(I, "y", 10), a(I, "text-anchor", "middle"), a(I, "alignment-baseline", "middle"), a(I, "fill", "white"), a(I, "font-size", "8"), a($, "cx", xe = -/*r*/
      i[1]), a($, "cy", 0), a($, "r", "2"), a($, "fill", "white"), a(pe, "class", "reference_points"), a(g, "id", "referencePoints"), a(g, "transform", Be = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), a(g, "class", "svelte-smqp4o"), O(g, "hide", !/*display*/
      i[8].includes("referencePoints")), a(
        t,
        "width",
        /*svgWidth*/
        i[13]
      ), a(
        t,
        "height",
        /*svgHeight*/
        i[14]
      );
    },
    m(p, b) {
      D(p, e, b), M(e, t), M(t, r);
      for (let w = 0; w < q.length; w += 1)
        q[w] && q[w].m(r, null);
      M(t, n);
      for (let w = 0; w < P.length; w += 1)
        P[w] && P[w].m(n, null);
      M(t, s);
      for (let w = 0; w < R.length; w += 1)
        R[w] && R[w].m(s, null);
      M(t, o);
      for (let w = 0; w < T.length; w += 1)
        T[w] && T[w].m(o, null);
      M(t, h), F && F.m(h, null), M(t, g), M(g, v), M(v, _), M(_, E), M(v, k), M(g, B), M(B, x), M(x, C), M(B, L), M(g, Z), M(Z, H), M(H, X), M(Z, j), M(g, Y), M(Y, W), M(W, de), M(Y, A), M(g, pe), M(pe, I), M(I, Ae), M(pe, $);
    },
    p(p, b) {
      var w, je;
      if (b[0] & /*r, rows*/
      6) {
        le = G(Array(
          /*rows*/
          p[2]
        ));
        let y;
        for (y = 0; y < le.length; y += 1) {
          const J = Ye(p, le, y);
          q[y] ? q[y].p(J, b) : (q[y] = $e(J), q[y].c(), q[y].m(r, null));
        }
        for (; y < q.length; y += 1)
          q[y].d(1);
        q.length = le.length;
      }
      if (b[0] & /*r, left_padding, top_padding*/
      3074 && l !== (l = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && a(r, "transform", l), b[0] & /*display*/
      256 && O(r, "hide", !/*display*/
      p[8].includes("arcs")), b[0] & /*points, current_party, selectedShape, dotsize*/
      649) {
        ne = G(
          /*points*/
          p[9]
        );
        let y;
        for (y = 0; y < ne.length; y += 1) {
          const J = Xe(p, ne, y);
          P[y] ? P[y].p(J, b) : (P[y] = et(J), P[y].c(), P[y].m(n, null));
        }
        for (; y < P.length; y += 1)
          P[y].d(1);
        P.length = ne.length;
      }
      if (b[0] & /*r, left_padding, top_padding*/
      3074 && c !== (c = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && a(n, "transform", c), b[0] & /*display*/
      256 && O(n, "hide", !/*display*/
      p[8].includes("points")), b[0] & /*points*/
      512) {
        se = G(
          /*points*/
          p[9]
        );
        let y;
        for (y = 0; y < se.length; y += 1) {
          const J = Ke(p, se, y);
          R[y] ? R[y].p(J, b) : (R[y] = tt(J), R[y].c(), R[y].m(s, null));
        }
        for (; y < R.length; y += 1)
          R[y].d(1);
        R.length = se.length;
      }
      if (b[0] & /*r, left_padding, top_padding*/
      3074 && f !== (f = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && a(s, "transform", f), b[0] & /*display*/
      256 && O(s, "hide", !/*display*/
      p[8].includes("numbers")), b[0] & /*voronoi, display, selectParty, unselectParty, clickParty*/
      233728) {
        ae = G(
          /*voronoi*/
          p[12].cells
        );
        let y;
        for (y = 0; y < ae.length; y += 1) {
          const J = Ge(p, ae, y);
          T[y] ? T[y].p(J, b) : (T[y] = rt(J), T[y].c(), T[y].m(o, null));
        }
        for (; y < T.length; y += 1)
          T[y].d(1);
        T.length = ae.length;
      }
      b[0] & /*r, left_padding, top_padding*/
      3074 && u !== (u = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && a(o, "transform", u), /*current_party*/
      p[0] ? F ? F.p(p, b) : (F = lt(p), F.c(), F.m(h, null)) : F && (F.d(1), F = null), b[0] & /*text_position, r, left_padding, top_padding*/
      3138 && d !== (d = `translate(${/*text_position*/
      ((w = p[6]) == null ? void 0 : w.x) || /*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*text_position*/
      ((je = p[6]) == null ? void 0 : je.y) || /*r*/
      p[1] + /*top_padding*/
      p[10] + 20})`) && a(h, "transform", d), b[0] & /*display*/
      256 && O(h, "hide", !/*display*/
      p[8].includes("text")), b[0] & /*r*/
      2 && S !== (S = `${/*r*/
      p[1]}, 0`) && ge(C, S), b[0] & /*r*/
      2 && a(
        x,
        "x",
        /*r*/
        p[1]
      ), b[0] & /*r*/
      2 && a(
        L,
        "cx",
        /*r*/
        p[1]
      ), b[0] & /*r*/
      2 && te !== (te = `${/*r*/
      p[1]}, ${-/*r*/
      p[1]}`) && ge(X, te), b[0] & /*r*/
      2 && Q !== (Q = /*r*/
      p[1] - 10) && a(H, "x", Q), b[0] & /*r*/
      2 && U !== (U = -/*r*/
      p[1] + 10) && a(H, "y", U), b[0] & /*r*/
      2 && a(
        j,
        "cx",
        /*r*/
        p[1]
      ), b[0] & /*r*/
      2 && ie !== (ie = -/*r*/
      p[1]) && a(j, "cy", ie), b[0] & /*r*/
      2 && re !== (re = `-${/*r*/
      p[1]}, ${-/*r*/
      p[1]}`) && ge(de, re), b[0] & /*r*/
      2 && m !== (m = -/*r*/
      p[1] + 10) && a(W, "x", m), b[0] & /*r*/
      2 && z !== (z = -/*r*/
      p[1] + 10) && a(W, "y", z), b[0] & /*r*/
      2 && Ee !== (Ee = -/*r*/
      p[1]) && a(A, "cx", Ee), b[0] & /*r*/
      2 && be !== (be = -/*r*/
      p[1]) && a(A, "cy", be), b[0] & /*r*/
      2 && we !== (we = `-${/*r*/
      p[1]}, 0`) && ge(Ae, we), b[0] & /*r*/
      2 && ke !== (ke = -/*r*/
      p[1]) && a(I, "x", ke), b[0] & /*r*/
      2 && xe !== (xe = -/*r*/
      p[1]) && a($, "cx", xe), b[0] & /*r, left_padding, top_padding*/
      3074 && Be !== (Be = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && a(g, "transform", Be), b[0] & /*display*/
      256 && O(g, "hide", !/*display*/
      p[8].includes("referencePoints")), b[0] & /*svgWidth*/
      8192 && a(
        t,
        "width",
        /*svgWidth*/
        p[13]
      ), b[0] & /*svgHeight*/
      16384 && a(
        t,
        "height",
        /*svgHeight*/
        p[14]
      );
    },
    i: ye,
    o: ye,
    d(p) {
      p && N(e), Me(q, p), Me(P, p), Me(R, p), Me(T, p), F && F.d();
    }
  };
}
let Ut = "M86.60254037844386 12L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z";
function Gt(i, e, t) {
  let { data: r = [] } = e, { r: l = 300 } = e, { rows: n = 12 } = e, { dotsize: c = 5 } = e, { padding: s = 10 } = e, { total_seats: f } = e, { color: o = "white" } = e, { font_size: u = 12 } = e, { arc: h = 180 } = e, { text_position: d = null } = e, { selectedShape: g = "circle" } = e, { display: v = ["points", "text"] } = e, { current_party: _ = null } = e, E = [], k = null, B = !1, x = 0, S = 0, C = 0, L = 0, Z = 0, H = 0;
  function te() {
    Array.isArray(s) ? s.length === 2 ? (t(10, x = s[0]), t(22, S = s[0]), t(11, C = s[1]), t(23, L = s[1])) : s.length === 4 && (t(10, x = s[0]), t(22, S = s[1]), t(11, C = s[2]), t(23, L = s[3])) : (t(10, x = s), t(22, S = s), t(11, C = s), t(23, L = s));
  }
  function X(m) {
    m.data && !B && t(0, _ = m.data);
  }
  function Q(m) {
    m.data && (_ && B && _.id === m.data.id ? (t(0, _ = null), B = !1) : (t(0, _ = m.data), B = !0));
  }
  function U() {
    B || t(0, _ = null);
  }
  const j = (m) => {
    X(m.site);
  }, ie = (m) => X(m.site), Y = () => U(), W = () => U(), re = (m) => {
    Q(m.site);
  }, de = (m, z) => {
    z.key === "Enter" && Q(m.site);
  };
  return i.$$set = (m) => {
    "data" in m && t(19, r = m.data), "r" in m && t(1, l = m.r), "rows" in m && t(2, n = m.rows), "dotsize" in m && t(3, c = m.dotsize), "padding" in m && t(20, s = m.padding), "total_seats" in m && t(21, f = m.total_seats), "color" in m && t(4, o = m.color), "font_size" in m && t(5, u = m.font_size), "arc" in m && t(18, h = m.arc), "text_position" in m && t(6, d = m.text_position), "selectedShape" in m && t(7, g = m.selectedShape), "display" in m && t(8, v = m.display), "current_party" in m && t(0, _ = m.current_party);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*arc, data, r, rows, total_seats, points, left_padding, right_padding, top_padding, bottom_padding*/
    15470086) {
      h < 10 && t(18, h = 10), h > 360 && t(18, h = 360), te(), r.sort((z, A) => A.count - z.count), r.reduce((z, A) => z + A.count, 0), t(9, E = Ot(l, n, f, h));
      let m = 0;
      for (let z in r)
        for (let A = 0; A < r[z].count; A++)
          t(9, E[m].data = r[z], E), m++;
      t(12, k = It(E)), t(13, Z = l * 2 + C + L), t(14, H = l * 2 + x + S);
    }
  }, [
    _,
    l,
    n,
    c,
    o,
    u,
    d,
    g,
    v,
    E,
    x,
    C,
    k,
    Z,
    H,
    X,
    Q,
    U,
    h,
    r,
    s,
    f,
    S,
    L,
    j,
    ie,
    Y,
    W,
    re,
    de
  ];
}
class Kt extends dt {
  constructor(e) {
    super(), ut(
      this,
      e,
      Gt,
      Qt,
      ft,
      {
        data: 19,
        r: 1,
        rows: 2,
        dotsize: 3,
        padding: 20,
        total_seats: 21,
        color: 4,
        font_size: 5,
        arc: 18,
        text_position: 6,
        selectedShape: 7,
        display: 8,
        current_party: 0
      },
      null,
      [-1, -1]
    );
  }
}
function nt(i) {
  let e, t;
  return e = new Kt({
    props: { data: (
      /*data*/
      i[1]
    ), total_seats: Yt, rows: $t }
  }), {
    c() {
      Ct(e.$$.fragment);
    },
    m(r, l) {
      ht(e, r, l), t = !0;
    },
    p(r, l) {
      const n = {};
      l & /*data*/
      2 && (n.data = /*data*/
      r[1]), e.$set(n);
    },
    i(r) {
      t || (ve(e.$$.fragment, r), t = !0);
    },
    o(r) {
      He(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ct(e, r);
    }
  };
}
function Xt(i) {
  let e, t, r = (
    /*visualisation*/
    i[0] === "hemicycle" && nt(i)
  );
  return {
    c() {
      r && r.c(), e = Fe();
    },
    m(l, n) {
      r && r.m(l, n), D(l, e, n), t = !0;
    },
    p(l, [n]) {
      /*visualisation*/
      l[0] === "hemicycle" ? r ? (r.p(l, n), n & /*visualisation*/
      1 && ve(r, 1)) : (r = nt(l), r.c(), ve(r, 1), r.m(e.parentNode, e)) : r && (Mt(), He(r, 1, 1, () => {
        r = null;
      }), Vt());
    },
    i(l) {
      t || (ve(r), t = !0);
    },
    o(l) {
      He(r), t = !1;
    },
    d(l) {
      l && N(e), r && r.d(l);
    }
  };
}
const Yt = 400, $t = 12;
function ei(i, e, t) {
  let { visualisation: r = "hemicycle" } = e, l = [];
  const n = [
    "#FF0000",
    "#0000FF",
    "#008000",
    "#FFA500",
    "#FFFF00",
    "#800080",
    "#FFC0CB",
    "#00FFFF",
    "#FF00FF",
    "#000000",
    "#808080",
    "#800000",
    "#008080",
    "#800080",
    "#000080",
    "#808000",
    "#008000"
  ];
  return bt(async () => {
    const s = await (await fetch("https://iec-api.revengine.dailymaverick.co.za/results/seats/national/2019")).json();
    t(1, l = s.partyResults.map((f, o) => ({
      id: o,
      text: f.Abbreviation,
      count: f.Seats,
      color: n[o]
    })));
  }), i.$$set = (c) => {
    "visualisation" in c && t(0, r = c.visualisation);
  }, [r, l];
}
class ti extends dt {
  constructor(e) {
    super(), ut(this, e, ei, Xt, ft, { visualisation: 0 });
  }
}
console.log("App");
jQuery(() => {
  const i = document.querySelectorAll(".wp-block-tenlayer-election-engine");
  console.log({ targets: i }), i.forEach((e) => {
    let t = {
      id: e.id,
      visualisation: e.dataset.visualisation,
      selected_year: e.dataset.selected_year,
      selected_election: e.dataset.selected_election,
      selected_region: e.dataset.selected_region,
      selected_fields: e.dataset.selected_fields
    };
    new ti({
      target: e,
      props: t
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Rpb24tZW5naW5lLmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3V0aWxzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9kb20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2xpZmVjeWNsZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC90cmFuc2l0aW9ucy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvZWFjaC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvQ29tcG9uZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc2hhcmVkL3ZlcnNpb24uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2Rpc2Nsb3NlLXZlcnNpb24vaW5kZXguanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdm9yb25vaWpzL3JidHJlZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdmVydGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9lZGdlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9jZWxsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9kaWFncmFtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9oYWxmZWRnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdm9yb25vaS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvbGlicy92b3Jvbm9pLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1oZW1pY3ljbGUvZGlzdC9saWJzL2hlbWljeWNsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvSGVtaWN5Y2xlLnN2ZWx0ZSIsIi4uLy4uL3NyYy9zdmVsdGUvQXBwLnN2ZWx0ZSIsIi4uLy4uL3NyYy9zdmVsdGUvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gKHgpID0+IHg7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0ZW1wbGF0ZSBTXG4gKiBAcGFyYW0ge1R9IHRhclxuICogQHBhcmFtIHtTfSBzcmNcbiAqIEByZXR1cm5zIHtUICYgU31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuXHQvLyBAdHMtaWdub3JlXG5cdGZvciAoY29uc3QgayBpbiBzcmMpIHRhcltrXSA9IHNyY1trXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7VCAmIFN9ICovICh0YXIpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIFByb21pc2VMaWtlPGFueT59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiAoXG5cdFx0ISF2YWx1ZSAmJlxuXHRcdCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgJiZcblx0XHR0eXBlb2YgKC8qKiBAdHlwZSB7YW55fSAqLyAodmFsdWUpLnRoZW4pID09PSAnZnVuY3Rpb24nXG5cdCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG5cdGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcblx0XHRsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbikge1xuXHRyZXR1cm4gZm4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbltdfSBmbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcblx0Zm5zLmZvckVhY2gocnVuKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHt0aGluZyBpcyBGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG5cdHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8IChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XG59XG5cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudF9zcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG5cdGlmIChlbGVtZW50X3NyYyA9PT0gdXJsKSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuXHRcdHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR9XG5cdC8vIFRoaXMgaXMgYWN0dWFsbHkgZmFzdGVyIHRoYW4gZG9pbmcgVVJMKC4uKS5ocmVmXG5cdHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG5cdHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBzcmNzZXQgKi9cbmZ1bmN0aW9uIHNwbGl0X3NyY3NldChzcmNzZXQpIHtcblx0cmV0dXJuIHNyY3NldC5zcGxpdCgnLCcpLm1hcCgoc3JjKSA9PiBzcmMudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxTb3VyY2VFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudH0gZWxlbWVudF9zcmNzZXRcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gc3Jjc2V0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNyY3NldF91cmxfZXF1YWwoZWxlbWVudF9zcmNzZXQsIHNyY3NldCkge1xuXHRjb25zdCBlbGVtZW50X3VybHMgPSBzcGxpdF9zcmNzZXQoZWxlbWVudF9zcmNzZXQuc3Jjc2V0KTtcblx0Y29uc3QgdXJscyA9IHNwbGl0X3NyY3NldChzcmNzZXQgfHwgJycpO1xuXG5cdHJldHVybiAoXG5cdFx0dXJscy5sZW5ndGggPT09IGVsZW1lbnRfdXJscy5sZW5ndGggJiZcblx0XHR1cmxzLmV2ZXJ5KFxuXHRcdFx0KFt1cmwsIHdpZHRoXSwgaSkgPT5cblx0XHRcdFx0d2lkdGggPT09IGVsZW1lbnRfdXJsc1tpXVsxXSAmJlxuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIHRlc3QgYm90aCB3YXlzIGJlY2F1c2UgVml0ZSB3aWxsIGNyZWF0ZSBhbiBhIGZ1bGwgVVJMIHdpdGhcblx0XHRcdFx0Ly8gYG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZmAgZm9yIHRoZSBjbGllbnQgd2hlbiBgYmFzZTogJy4vJ2AsIGFuZCB0aGVcblx0XHRcdFx0Ly8gcmVsYXRpdmUgVVJMcyBpbnNpZGUgc3Jjc2V0IGFyZSBub3QgYXV0b21hdGljYWxseSByZXNvbHZlZCB0byBhYnNvbHV0ZSBVUkxzIGJ5XG5cdFx0XHRcdC8vIGJyb3dzZXJzIChpbiBjb250cmFzdCB0byBpbWcuc3JjKS4gVGhpcyBtZWFucyBib3RoIFNTUiBhbmQgRE9NIGNvZGUgY291bGRcblx0XHRcdFx0Ly8gY29udGFpbiByZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkxzLlxuXHRcdFx0XHQoc3JjX3VybF9lcXVhbChlbGVtZW50X3VybHNbaV1bMF0sIHVybCkgfHwgc3JjX3VybF9lcXVhbCh1cmwsIGVsZW1lbnRfdXJsc1tpXVswXSkpXG5cdFx0KVxuXHQpO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19lbXB0eShvYmopIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcblx0aWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcblx0aWYgKHN0b3JlID09IG51bGwpIHtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuXHRcdFx0Y2FsbGJhY2sodW5kZWZpbmVkKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5vb3A7XG5cdH1cblx0Y29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcblx0cmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIGEgc3RvcmUgYnkgc3Vic2NyaWJpbmcgYW5kIGltbWVkaWF0ZWx5IHVuc3Vic2NyaWJpbmcuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXN0b3JlI2dldFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9zdG9yZS9wdWJsaWMuanMnKS5SZWFkYWJsZTxUPn0gc3RvcmVcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG5cdGxldCB2YWx1ZTtcblx0c3Vic2NyaWJlKHN0b3JlLCAoXykgPT4gKHZhbHVlID0gXykpKCk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcblx0Y29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG5cdGlmIChkZWZpbml0aW9uKSB7XG5cdFx0Y29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuXHRcdHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcblx0cmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm4gPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSkgOiAkJHNjb3BlLmN0eDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG5cdGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG5cdFx0Y29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcblx0XHRpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGV0cztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbWVyZ2VkID0gW107XG5cdFx0XHRjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZXJnZWQ7XG5cdFx0fVxuXHRcdHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcblx0fVxuXHRyZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2UoXG5cdHNsb3QsXG5cdHNsb3RfZGVmaW5pdGlvbixcblx0Y3R4LFxuXHQkJHNjb3BlLFxuXHRzbG90X2NoYW5nZXMsXG5cdGdldF9zbG90X2NvbnRleHRfZm5cbikge1xuXHRpZiAoc2xvdF9jaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG5cdFx0c2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3Nsb3QoXG5cdHNsb3QsXG5cdHNsb3RfZGVmaW5pdGlvbixcblx0Y3R4LFxuXHQkJHNjb3BlLFxuXHRkaXJ0eSxcblx0Z2V0X3Nsb3RfY2hhbmdlc19mbixcblx0Z2V0X3Nsb3RfY29udGV4dF9mblxuKSB7XG5cdGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG5cdHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5cbi8qKiBAcmV0dXJucyB7YW55W10gfCAtMX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuXHRpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcblx0XHRjb25zdCBkaXJ0eSA9IFtdO1xuXHRcdGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGRpcnR5W2ldID0gLTE7XG5cdFx0fVxuXHRcdHJldHVybiBkaXJ0eTtcblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBrIGluIHByb3BzKSBpZiAoa1swXSAhPT0gJyQnKSByZXN1bHRba10gPSBwcm9wc1trXTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm5zIHt7fX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcblx0Y29uc3QgcmVzdCA9IHt9O1xuXHRrZXlzID0gbmV3IFNldChrZXlzKTtcblx0Zm9yIChjb25zdCBrIGluIHByb3BzKSBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJykgcmVzdFtrXSA9IHByb3BzW2tdO1xuXHRyZXR1cm4gcmVzdDtcbn1cblxuLyoqIEByZXR1cm5zIHt7fX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuXHRcdHJlc3VsdFtrZXldID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHJldHVybnMgeyh0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4pIHtcblx0bGV0IHJhbiA9IGZhbHNlO1xuXHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRpZiAocmFuKSByZXR1cm47XG5cdFx0cmFuID0gdHJ1ZTtcblx0XHRmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcblx0c3RvcmUuc2V0KHZhbHVlKTtcblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcblx0cmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbi8qKiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtbbnVtYmVyLCBzdHJpbmddfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRfY3NzX3VuaXQodmFsdWUpIHtcblx0Y29uc3Qgc3BsaXQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eXFxzKigtP1tcXGQuXSspKFteXFxzXSopXFxzKiQvKTtcblx0cmV0dXJuIHNwbGl0ID8gW3BhcnNlRmxvYXQoc3BsaXRbMV0pLCBzcGxpdFsyXSB8fCAncHgnXSA6IFsvKiogQHR5cGUge251bWJlcn0gKi8gKHZhbHVlKSwgJ3B4J107XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcyA9IFsnJywgdHJ1ZSwgMSwgJ3RydWUnLCAnY29udGVudGVkaXRhYmxlJ107XG4iLCJpbXBvcnQgeyBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcywgaGFzX3Byb3AgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyU2luZ2xldG9uLmpzJztcblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG5cdGlzX2h5ZHJhdGluZyA9IHRydWU7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRfaHlkcmF0aW5nKCkge1xuXHRpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbG93XG4gKiBAcGFyYW0ge251bWJlcn0gaGlnaFxuICogQHBhcmFtIHsoaW5kZXg6IG51bWJlcikgPT4gbnVtYmVyfSBrZXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gdXBwZXJfYm91bmQobG93LCBoaWdoLCBrZXksIHZhbHVlKSB7XG5cdC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcblx0d2hpbGUgKGxvdyA8IGhpZ2gpIHtcblx0XHRjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuXHRcdGlmIChrZXkobWlkKSA8PSB2YWx1ZSkge1xuXHRcdFx0bG93ID0gbWlkICsgMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGlnaCA9IG1pZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGxvdztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVFeH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuXHRpZiAodGFyZ2V0Lmh5ZHJhdGVfaW5pdCkgcmV0dXJuO1xuXHR0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcblx0Ly8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuXG5cdGxldCBjaGlsZHJlbiA9IC8qKiBAdHlwZSB7QXJyYXlMaWtlPE5vZGVFeDI+fSAqLyAodGFyZ2V0LmNoaWxkTm9kZXMpO1xuXHQvLyBJZiB0YXJnZXQgaXMgPGhlYWQ+LCB0aGVyZSBtYXkgYmUgY2hpbGRyZW4gd2l0aG91dCBjbGFpbV9vcmRlclxuXHRpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcblx0XHRjb25zdCBteV9jaGlsZHJlbiA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBjaGlsZHJlbltpXTtcblx0XHRcdGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bXlfY2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hpbGRyZW4gPSBteV9jaGlsZHJlbjtcblx0fVxuXHQvKlxuXHQgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuXHQgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG5cdCAqIG5vZGVzIHRoYXQgYXJlIGFscmVhZHkgY2xhaW1lZCBpbiBvcmRlciBhbmQgb25seSBtb3ZpbmcgdGhlIHJlc3QuIFRoZSBsb25nZXN0XG5cdCAqIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG5cdCAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG5cdCAqXG5cdCAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuXHQgKiBwb3NzaWJsZS5cblx0ICpcblx0ICogUHJvb2Y6XG5cdCAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuXHQgKiBhbHdheXMgZm9ybSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLCBzaW5jZSB0aGV5IGRvIG5vdCBtb3ZlIGFtb25nIGVhY2ggb3RoZXJcblx0ICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcblx0ICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cblx0ICovXG5cdC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG5cdC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcblx0Y29uc3QgbSA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCArIDEpO1xuXHQvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuXHRjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcblx0bVswXSA9IC0xO1xuXHRsZXQgbG9uZ2VzdCA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG5cdFx0Ly8gRmluZCB0aGUgbGFyZ2VzdCBzdWJzZXF1ZW5jZSBsZW5ndGggc3VjaCB0aGF0IGl0IGVuZHMgaW4gYSB2YWx1ZSBsZXNzIHRoYW4gb3VyIGN1cnJlbnQgdmFsdWVcblx0XHQvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuXHRcdC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG5cdFx0Y29uc3Qgc2VxX2xlbiA9XG5cdFx0XHQobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudFxuXHRcdFx0XHQ/IGxvbmdlc3QgKyAxXG5cdFx0XHRcdDogdXBwZXJfYm91bmQoMSwgbG9uZ2VzdCwgKGlkeCkgPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcblx0XHRwW2ldID0gbVtzZXFfbGVuXSArIDE7XG5cdFx0Y29uc3QgbmV3X2xlbiA9IHNlcV9sZW4gKyAxO1xuXHRcdC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cblx0XHRtW25ld19sZW5dID0gaTtcblx0XHRsb25nZXN0ID0gTWF0aC5tYXgobmV3X2xlbiwgbG9uZ2VzdCk7XG5cdH1cblx0Ly8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZUV4MltdfVxuXHQgKi9cblx0Y29uc3QgbGlzID0gW107XG5cdC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlRXgyW119XG5cdCAqL1xuXHRjb25zdCB0b19tb3ZlID0gW107XG5cdGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblx0Zm9yIChsZXQgY3VyID0gbVtsb25nZXN0XSArIDE7IGN1ciAhPSAwOyBjdXIgPSBwW2N1ciAtIDFdKSB7XG5cdFx0bGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuXHRcdGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG5cdFx0XHR0b19tb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuXHRcdH1cblx0XHRsYXN0LS07XG5cdH1cblx0Zm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG5cdFx0dG9fbW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcblx0fVxuXHRsaXMucmV2ZXJzZSgpO1xuXHQvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcblx0dG9fbW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG5cdC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG5cdGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRvX21vdmUubGVuZ3RoOyBpKyspIHtcblx0XHR3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9fbW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcblx0XHRcdGorKztcblx0XHR9XG5cdFx0Y29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUodG9fbW92ZVtpXSwgYW5jaG9yKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZV9zaGVldF9pZFxuICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuXHRjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG5cdGlmICghYXBwZW5kX3N0eWxlc190by5nZXRFbGVtZW50QnlJZChzdHlsZV9zaGVldF9pZCkpIHtcblx0XHRjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcblx0XHRzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlcztcblx0XHRhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtTaGFkb3dSb290IHwgRG9jdW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuXHRpZiAoIW5vZGUpIHJldHVybiBkb2N1bWVudDtcblx0Y29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUgPyBub2RlLmdldFJvb3ROb2RlKCkgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG5cdGlmIChyb290ICYmIC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QpIHtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCk7XG5cdH1cblx0cmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtDU1NTdHlsZVNoZWV0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSkge1xuXHRjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcblx0Ly8gRm9yIHRyYW5zaXRpb25zIHRvIHdvcmsgd2l0aG91dCAnc3R5bGUtc3JjOiB1bnNhZmUtaW5saW5lJyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSxcblx0Ly8gdGhlc2UgZW1wdHkgdGFncyBuZWVkIHRvIGJlIGFsbG93ZWQgd2l0aCBhIGhhc2ggYXMgYSB3b3JrYXJvdW5kIHVudGlsIHdlIG1vdmUgdG8gdGhlIFdlYiBBbmltYXRpb25zIEFQSS5cblx0Ly8gVXNpbmcgdGhlIGhhc2ggZm9yIHRoZSBlbXB0eSBzdHJpbmcgKGZvciBhbiBlbXB0eSB0YWcpIHdvcmtzIGluIGFsbCBicm93c2VycyBleGNlcHQgU2FmYXJpLlxuXHQvLyBTbyBhcyBhIHdvcmthcm91bmQgZm9yIHRoZSB3b3JrYXJvdW5kLCB3aGVuIHdlIGFwcGVuZCBlbXB0eSBzdHlsZSB0YWdzIHdlIHNldCB0aGVpciBjb250ZW50IHRvIC8qIGVtcHR5ICovLlxuXHQvLyBUaGUgaGFzaCAnc2hhMjU2LTlPbE5PMERORWVhVnpITDRSWndDTHNCSEE4V0JROHRvQnAvNEY1WFYybmM9JyB3aWxsIHRoZW4gd29yayBldmVuIGluIFNhZmFyaS5cblx0c3R5bGVfZWxlbWVudC50ZXh0Q29udGVudCA9ICcvKiBlbXB0eSAqLyc7XG5cdGFwcGVuZF9zdHlsZXNoZWV0KGdldF9yb290X2Zvcl9zdHlsZShub2RlKSwgc3R5bGVfZWxlbWVudCk7XG5cdHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2hhZG93Um9vdCB8IERvY3VtZW50fSBub2RlXG4gKiBAcGFyYW0ge0hUTUxTdHlsZUVsZW1lbnR9IHN0eWxlXG4gKiBAcmV0dXJucyB7Q1NTU3R5bGVTaGVldH1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcblx0YXBwZW5kKC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovIChub2RlKS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcblx0cmV0dXJuIHN0eWxlLnNoZWV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZUV4fSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKSB7XG5cdGlmIChpc19oeWRyYXRpbmcpIHtcblx0XHRpbml0X2h5ZHJhdGUodGFyZ2V0KTtcblx0XHRpZiAoXG5cdFx0XHR0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHQodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwgJiYgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KVxuXHRcdCkge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcblx0XHR9XG5cdFx0Ly8gU2tpcCBub2RlcyBvZiB1bmRlZmluZWQgb3JkZXJpbmdcblx0XHR3aGlsZSAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwgJiYgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdFx0aWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuXHRcdFx0aWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBbYW5jaG9yXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlRXh9IHRhcmdldFxuICogQHBhcmFtIHtOb2RlRXh9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZUV4fSBbYW5jaG9yXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG5cdGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuXHRcdGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcblx0fSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9IGFuY2hvcikge1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG5cdGlmIChub2RlLnBhcmVudE5vZGUpIHtcblx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBLXG4gKiBAcGFyYW0ge0t9IG5hbWVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFRhZ05hbWVNYXBbS119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IEtcbiAqIEBwYXJhbSB7S30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlzXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUge2tleW9mIFR9IEtcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKiBAcGFyYW0ge0tbXX0gZXhjbHVkZVxuICogQHJldHVybnMge1BpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuXHRjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUge1BpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj59ICovICh7fSk7XG5cdGZvciAoY29uc3QgayBpbiBvYmopIHtcblx0XHRpZiAoXG5cdFx0XHRoYXNfcHJvcChvYmosIGspICYmXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRleGNsdWRlLmluZGV4T2YoaykgPT09IC0xXG5cdFx0KSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0YXJnZXRba10gPSBvYmpba107XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcH0gS1xuICogQHBhcmFtIHtLfSBuYW1lXG4gKiBAcmV0dXJucyB7U1ZHRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICogQHJldHVybnMge1RleHR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0KGRhdGEpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwYWNlKCkge1xuXHRyZXR1cm4gdGV4dCgnICcpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHRyZXR1cm4gdGV4dCgnJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtDb21tZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudChjb250ZW50KSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGNvbnRlbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0fSBoYW5kbGVyXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG5cdHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiBhbnl9ICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24oZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGYoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKSBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IHZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGlmIChldmVudC5pc1RydXN0ZWQpIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSkgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG4vKipcbiAqIExpc3Qgb2YgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBhbHdheXMgYmUgc2V0IHRocm91Z2ggdGhlIGF0dHIgbWV0aG9kLFxuICogYmVjYXVzZSB1cGRhdGluZyB0aGVtIHRocm91Z2ggdGhlIHByb3BlcnR5IHNldHRlciBkb2Vzbid0IHdvcmsgcmVsaWFibHkuXG4gKiBJbiB0aGUgZXhhbXBsZSBvZiBgd2lkdGhgL2BoZWlnaHRgLCB0aGUgcHJvYmxlbSBpcyB0aGF0IHRoZSBzZXR0ZXIgb25seVxuICogYWNjZXB0cyBudW1lcmljIHZhbHVlcywgYnV0IHRoZSBhdHRyaWJ1dGUgY2FuIGFsc28gYmUgc2V0IHRvIGEgc3RyaW5nIGxpa2UgYDUwJWAuXG4gKiBJZiB0aGlzIGxpc3QgYmVjb21lcyB0b28gYmlnLCByZXRoaW5rIHRoaXMgYXBwcm9hY2guXG4gKi9cbmNvbnN0IGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlID0gWyd3aWR0aCcsICdoZWlnaHQnXTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7eyBbeDogc3RyaW5nXTogc3RyaW5nIH19IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHQvLyBAdHMtaWdub3JlXG5cdGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuXHRcdFx0LyoqIEB0eXBlIHthbnl9ICovIChub2RlKS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XSAmJlxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XS5zZXQgJiZcblx0XHRcdGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlLmluZGV4T2Yoa2V5KSA9PT0gLTFcblx0XHQpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3sgW3g6IHN0cmluZ106IHN0cmluZyB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IGRhdGFfbWFwXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcChub2RlLCBkYXRhX21hcCkge1xuXHRPYmplY3Qua2V5cyhkYXRhX21hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0c2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwga2V5LCBkYXRhX21hcFtrZXldKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0Y29uc3QgbG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7IC8vIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGV4aXN0aW5nIGJlaGF2aW9yIHdlIGRvIGxvd2VyY2FzZSBmaXJzdFxuXHRpZiAobG93ZXIgaW4gbm9kZSkge1xuXHRcdG5vZGVbbG93ZXJdID0gdHlwZW9mIG5vZGVbbG93ZXJdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICcnID8gdHJ1ZSA6IHZhbHVlO1xuXHR9IGVsc2UgaWYgKHByb3AgaW4gbm9kZSkge1xuXHRcdG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSh0YWcpIHtcblx0cmV0dXJuIC8tLy50ZXN0KHRhZykgPyBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAgOiBzZXRfYXR0cmlidXRlcztcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zdmVsdGVfZGF0YXNldChub2RlKSB7XG5cdHJldHVybiBub2RlLmRhdGFzZXQuc3ZlbHRlSDtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dW5rbm93bltdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG5cdGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRpZiAoIWNoZWNrZWQpIHtcblx0XHR2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBncm91cFxuICogQHJldHVybnMge3sgcCguLi5pbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSk6IHZvaWQ7IHIoKTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cChncm91cCkge1xuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9pbnB1dHM7XG5cdHJldHVybiB7XG5cdFx0LyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuXHRcdFx0X2lucHV0cyA9IGlucHV0cztcblx0XHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGdyb3VwLnB1c2goaW5wdXQpKTtcblx0XHR9LFxuXHRcdC8qIHJlbW92ZSAqLyByKCkge1xuXHRcdFx0X2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gZ3JvdXAuc3BsaWNlKGdyb3VwLmluZGV4T2YoaW5wdXQpLCAxKSk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGluZGV4ZXNcbiAqIEByZXR1cm5zIHt7IHUobmV3X2luZGV4ZXM6IG51bWJlcltdKTogdm9pZDsgcCguLi5pbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSk6IHZvaWQ7IHI6ICgpID0+IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYyhncm91cCwgaW5kZXhlcykge1xuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9pbnB1dHM7XG5cblx0ZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGdyb3VwID0gZ3JvdXBbaW5kZXhlc1tpXV0gPSBncm91cFtpbmRleGVzW2ldXSB8fCBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBwdXNoKCkge1xuXHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IF9ncm91cC5wdXNoKGlucHV0KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBfZ3JvdXAuc3BsaWNlKF9ncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0LyogdXBkYXRlICovIHUobmV3X2luZGV4ZXMpIHtcblx0XHRcdGluZGV4ZXMgPSBuZXdfaW5kZXhlcztcblx0XHRcdGNvbnN0IG5ld19ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcblx0XHRcdGlmIChuZXdfZ3JvdXAgIT09IF9ncm91cCkge1xuXHRcdFx0XHRyZW1vdmUoKTtcblx0XHRcdFx0X2dyb3VwID0gbmV3X2dyb3VwO1xuXHRcdFx0XHRwdXNoKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiBwdXNoICovIHAoLi4uaW5wdXRzKSB7XG5cdFx0XHRfaW5wdXRzID0gaW5wdXRzO1xuXHRcdFx0cHVzaCgpO1xuXHRcdH0sXG5cdFx0LyogcmVtb3ZlICovIHI6IHJlbW92ZVxuXHR9O1xufVxuXG4vKiogQHJldHVybnMge251bWJlcn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5cbi8qKiBAcmV0dXJucyB7YW55W119ICovXG5leHBvcnQgZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG5cdGNvbnN0IGFycmF5ID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7Q2hpbGROb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbml0X2NsYWltX2luZm8obm9kZXMpIHtcblx0aWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuXHRcdG5vZGVzLmNsYWltX2luZm8gPSB7IGxhc3RfaW5kZXg6IDAsIHRvdGFsX2NsYWltZWQ6IDAgfTtcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Q2hpbGROb2RlRXh9IFJcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcGFyYW0geyhub2RlOiBDaGlsZE5vZGVFeCkgPT4gbm9kZSBpcyBSfSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7KG5vZGU6IENoaWxkTm9kZUV4KSA9PiBDaGlsZE5vZGVFeCB8IHVuZGVmaW5lZH0gcHJvY2Vzc19ub2RlXG4gKiBAcGFyYW0geygpID0+IFJ9IGNyZWF0ZV9ub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRvbnRfdXBkYXRlX2xhc3RfaW5kZXhcbiAqIEByZXR1cm5zIHtSfVxuICovXG5mdW5jdGlvbiBjbGFpbV9ub2RlKG5vZGVzLCBwcmVkaWNhdGUsIHByb2Nlc3Nfbm9kZSwgY3JlYXRlX25vZGUsIGRvbnRfdXBkYXRlX2xhc3RfaW5kZXggPSBmYWxzZSkge1xuXHQvLyBUcnkgdG8gZmluZCBub2RlcyBpbiBhbiBvcmRlciBzdWNoIHRoYXQgd2UgbGVuZ3RoZW4gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuXHRpbml0X2NsYWltX2luZm8obm9kZXMpO1xuXHRjb25zdCByZXN1bHRfbm9kZSA9ICgoKSA9PiB7XG5cdFx0Ly8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG5cdFx0Zm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gbm9kZXNbaV07XG5cdFx0XHRpZiAocHJlZGljYXRlKG5vZGUpKSB7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc19ub2RlKG5vZGUpO1xuXHRcdFx0XHRpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdG5vZGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZG9udF91cGRhdGVfbGFzdF9pbmRleCkge1xuXHRcdFx0XHRcdG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuXHRcdC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuXHRcdGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdFx0aWYgKHByZWRpY2F0ZShub2RlKSkge1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3Nfbm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRfdXBkYXRlX2xhc3RfaW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuXHRcdHJldHVybiBjcmVhdGVfbm9kZSgpO1xuXHR9KSgpO1xuXHRyZXN1bHRfbm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcblx0bm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG5cdHJldHVybiByZXN1bHRfbm9kZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZykgPT4gRWxlbWVudCB8IFNWR0VsZW1lbnR9IGNyZWF0ZV9lbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIEVsZW1lbnQgfCBTVkdFbGVtZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLFxuXHRcdC8qKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlID0gW107XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcblx0XHRcdFx0XHRyZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlbW92ZS5mb3JFYWNoKCh2KSA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cdFx0KCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSlcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgU1ZHRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0cmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuXHRyZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuXHRyZXR1cm4gY2xhaW1fbm9kZShcblx0XHRub2Rlcyxcblx0XHQvKiogQHJldHVybnMge25vZGUgaXMgVGV4dH0gKi9cblx0XHQobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyxcblx0XHQvKiogQHBhcmFtIHtUZXh0fSBub2RlICovXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IGRhdGFfc3RyID0gJycgKyBkYXRhO1xuXHRcdFx0aWYgKG5vZGUuZGF0YS5zdGFydHNXaXRoKGRhdGFfc3RyKSkge1xuXHRcdFx0XHRpZiAobm9kZS5kYXRhLmxlbmd0aCAhPT0gZGF0YV9zdHIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFfc3RyLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUuZGF0YSA9IGRhdGFfc3RyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0KCkgPT4gdGV4dChkYXRhKSxcblx0XHR0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuXHQpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG5cdHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7Q29tbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2NvbW1lbnQobm9kZXMsIGRhdGEpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIENvbW1lbnR9ICovXG5cdFx0KG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDgsXG5cdFx0LyoqIEBwYXJhbSB7Q29tbWVudH0gbm9kZSAqL1xuXHRcdChub2RlKSA9PiB7XG5cdFx0XHRub2RlLmRhdGEgPSAnJyArIGRhdGE7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cdFx0KCkgPT4gY29tbWVudChkYXRhKSxcblx0XHR0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldF9jb21tZW50X2lkeChub2RlcywgdGV4dCwgc3RhcnQpIHtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfc3ZnXG4gKiBAcmV0dXJucyB7SHRtbFRhZ0h5ZHJhdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzLCBpc19zdmcpIHtcblx0Ly8gZmluZCBodG1sIG9wZW5pbmcgdGFnXG5cdGNvbnN0IHN0YXJ0X2luZGV4ID0gZ2V0X2NvbW1lbnRfaWR4KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcblx0Y29uc3QgZW5kX2luZGV4ID0gZ2V0X2NvbW1lbnRfaWR4KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXggKyAxKTtcblx0aWYgKHN0YXJ0X2luZGV4ID09PSAtMSB8fCBlbmRfaW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2Zyk7XG5cdH1cblxuXHRpbml0X2NsYWltX2luZm8obm9kZXMpO1xuXHRjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcblx0ZGV0YWNoKGh0bWxfdGFnX25vZGVzWzBdKTtcblx0ZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcblx0Y29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuXHRpZiAoY2xhaW1lZF9ub2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oaXNfc3ZnKTtcblx0fVxuXHRmb3IgKGNvbnN0IG4gb2YgY2xhaW1lZF9ub2Rlcykge1xuXHRcdG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG5cdFx0bm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG5cdH1cblx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2ZywgY2xhaW1lZF9ub2Rlcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuXHRkYXRhID0gJycgKyBkYXRhO1xuXHRpZiAodGV4dC5kYXRhID09PSBkYXRhKSByZXR1cm47XG5cdHRleHQuZGF0YSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RhdGFfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEpIHtcblx0ZGF0YSA9ICcnICsgZGF0YTtcblx0aWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKSByZXR1cm47XG5cdHRleHQuZGF0YSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyX3ZhbHVlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhLCBhdHRyX3ZhbHVlKSB7XG5cdGlmICh+Y29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMuaW5kZXhPZihhdHRyX3ZhbHVlKSkge1xuXHRcdHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKTtcblx0fSBlbHNlIHtcblx0XHRzZXRfZGF0YSh0ZXh0LCBkYXRhKTtcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcblx0aW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gZG8gbm90aGluZ1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcblx0fSBlbHNlIHtcblx0XHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlLCBtb3VudGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0aWYgKCFtb3VudGluZyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG5cdGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuXHRyZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIChvcHRpb24pID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxuXG4vKipcbiAqIEB0eXBlIHtib29sZWFufSAqL1xubGV0IGNyb3Nzb3JpZ2luO1xuXG4vKipcbiAqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuXHRpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNyb3Nzb3JpZ2luID0gZmFsc2U7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG5cdFx0XHRcdHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y3Jvc3NvcmlnaW4gPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfaWZyYW1lX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuXHRjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcblx0XHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0fVxuXHRjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcblx0aWZyYW1lLnNldEF0dHJpYnV0ZShcblx0XHQnc3R5bGUnLFxuXHRcdCdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuXHRcdFx0J292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOydcblx0KTtcblx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRpZnJhbWUudGFiSW5kZXggPSAtMTtcblx0Y29uc3QgY3Jvc3NvcmlnaW4gPSBpc19jcm9zc29yaWdpbigpO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7KCkgPT4gdm9pZH1cblx0ICovXG5cdGxldCB1bnN1YnNjcmliZTtcblx0aWYgKGNyb3Nzb3JpZ2luKSB7XG5cdFx0aWZyYW1lLnNyYyA9IFwiZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+XCI7XG5cdFx0dW5zdWJzY3JpYmUgPSBsaXN0ZW4oXG5cdFx0XHR3aW5kb3csXG5cdFx0XHQnbWVzc2FnZScsXG5cdFx0XHQvKiogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGV2ZW50ICovIChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdykgZm4oKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuXHRcdGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHR1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcblx0XHRcdC8vIG1ha2Ugc3VyZSBhbiBpbml0aWFsIHJlc2l6ZSBldmVudCBpcyBmaXJlZCBfYWZ0ZXJfIHRoZSBpZnJhbWUgaXMgbG9hZGVkICh3aGljaCBpcyBhc3luY2hyb25vdXMpXG5cdFx0XHQvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvNDIzM1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHR9XG5cdGFwcGVuZChub2RlLCBpZnJhbWUpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmIChjcm9zc29yaWdpbikge1xuXHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHR9IGVsc2UgaWYgKHVuc3Vic2NyaWJlICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG5cdFx0XHR1bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHRkZXRhY2goaWZyYW1lKTtcblx0fTtcbn1cbmV4cG9ydCBjb25zdCByZXNpemVfb2JzZXJ2ZXJfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHtcblx0Ym94OiAnY29udGVudC1ib3gnXG59KTtcbmV4cG9ydCBjb25zdCByZXNpemVfb2JzZXJ2ZXJfYm9yZGVyX2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oe1xuXHRib3g6ICdib3JkZXItYm94J1xufSk7XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2RldmljZV9waXhlbF9jb250ZW50X2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oXG5cdHsgYm94OiAnZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94JyB9XG4pO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24gfTtcblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG5cdC8vIFRoZSBgISFgIGlzIHJlcXVpcmVkIGJlY2F1c2UgYW4gYHVuZGVmaW5lZGAgZmxhZyBtZWFucyBmbGlwcGluZyB0aGUgY3VycmVudCBzdGF0ZS5cblx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsICEhdG9nZ2xlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7VH0gW2RldGFpbF1cbiAqIEBwYXJhbSB7eyBidWJibGVzPzogYm9vbGVhbiwgY2FuY2VsYWJsZT86IGJvb2xlYW4gfX0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnQ8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCB7IGJ1YmJsZXMgPSBmYWxzZSwgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuXHRyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgZGV0YWlsLCBidWJibGVzLCBjYW5jZWxhYmxlIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcmV0dXJucyB7Q2hpbGROb2RlQXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcblx0cmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbm9kZUlkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoZWFkXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkX3NlbGVjdG9yKG5vZGVJZCwgaGVhZCkge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0bGV0IHN0YXJ0ZWQgPSAwO1xuXHRmb3IgKGNvbnN0IG5vZGUgb2YgaGVhZC5jaGlsZE5vZGVzKSB7XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovKSB7XG5cdFx0XHRjb25zdCBjb21tZW50ID0gbm9kZS50ZXh0Q29udGVudC50cmltKCk7XG5cdFx0XHRpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X0VORGApIHtcblx0XHRcdFx0c3RhcnRlZCAtPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X1NUQVJUYCkge1xuXHRcdFx0XHRzdGFydGVkICs9IDE7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcblx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuLyoqICovXG5leHBvcnQgY2xhc3MgSHRtbFRhZyB7XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAZGVmYXVsdCBmYWxzZVxuXHQgKi9cblx0aXNfc3ZnID0gZmFsc2U7XG5cdC8qKiBwYXJlbnQgZm9yIGNyZWF0aW5nIG5vZGUgKi9cblx0ZSA9IHVuZGVmaW5lZDtcblx0LyoqIGh0bWwgdGFnIG5vZGVzICovXG5cdG4gPSB1bmRlZmluZWQ7XG5cdC8qKiB0YXJnZXQgKi9cblx0dCA9IHVuZGVmaW5lZDtcblx0LyoqIGFuY2hvciAqL1xuXHRhID0gdW5kZWZpbmVkO1xuXHRjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuXHRcdHRoaXMuaXNfc3ZnID0gaXNfc3ZnO1xuXHRcdHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjKGh0bWwpIHtcblx0XHR0aGlzLmgoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IHRhcmdldFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgU1ZHRWxlbWVudH0gYW5jaG9yXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0bShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcblx0XHRpZiAoIXRoaXMuZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNfc3ZnKVxuXHRcdFx0XHR0aGlzLmUgPSBzdmdfZWxlbWVudCgvKiogQHR5cGUge2tleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwfSAqLyAodGFyZ2V0Lm5vZGVOYW1lKSk7XG5cdFx0XHQvKiogIzczNjQgIHRhcmdldCBmb3IgPHRlbXBsYXRlPiBtYXkgYmUgcHJvdmlkZWQgYXMgI2RvY3VtZW50LWZyYWdtZW50KDExKSAqLyBlbHNlXG5cdFx0XHRcdHRoaXMuZSA9IGVsZW1lbnQoXG5cdFx0XHRcdFx0LyoqIEB0eXBlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9ICovIChcblx0XHRcdFx0XHRcdHRhcmdldC5ub2RlVHlwZSA9PT0gMTEgPyAnVEVNUExBVEUnIDogdGFyZ2V0Lm5vZGVOYW1lXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0dGhpcy50ID1cblx0XHRcdFx0dGFyZ2V0LnRhZ05hbWUgIT09ICdURU1QTEFURSdcblx0XHRcdFx0XHQ/IHRhcmdldFxuXHRcdFx0XHRcdDogLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAodGFyZ2V0KS5jb250ZW50O1xuXHRcdFx0dGhpcy5jKGh0bWwpO1xuXHRcdH1cblx0XHR0aGlzLmkoYW5jaG9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGgoaHRtbCkge1xuXHRcdHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHRoaXMubiA9IEFycmF5LmZyb20oXG5cdFx0XHR0aGlzLmUubm9kZU5hbWUgPT09ICdURU1QTEFURScgPyB0aGlzLmUuY29udGVudC5jaGlsZE5vZGVzIDogdGhpcy5lLmNoaWxkTm9kZXNcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRpKGFuY2hvcikge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0cChodG1sKSB7XG5cdFx0dGhpcy5kKCk7XG5cdFx0dGhpcy5oKGh0bWwpO1xuXHRcdHRoaXMuaSh0aGlzLmEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRkKCkge1xuXHRcdHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcblx0LyoqIEB0eXBlIHtFbGVtZW50W119IGh5ZHJhdGlvbiBjbGFpbWVkIG5vZGVzICovXG5cdGwgPSB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UsIGNsYWltZWRfbm9kZXMpIHtcblx0XHRzdXBlcihpc19zdmcpO1xuXHRcdHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG5cdFx0dGhpcy5sID0gY2xhaW1lZF9ub2Rlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGMoaHRtbCkge1xuXHRcdGlmICh0aGlzLmwpIHtcblx0XHRcdHRoaXMubiA9IHRoaXMubDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VwZXIuYyhodG1sKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGkoYW5jaG9yKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuXHRcdHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZXNjYXBlZCA9IHtcblx0J1wiJzogJyZxdW90OycsXG5cdCcmJzogJyZhbXA7Jyxcblx0JzwnOiAnJmx0Oydcbn07XG5cbmNvbnN0IHJlZ2V4X2F0dHJpYnV0ZV9jaGFyYWN0ZXJzX3RvX2VzY2FwZSA9IC9bXCImPF0vZztcblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhlIGF0dHJpYnV0ZSBpdHNlbGYgc2hvdWxkIGJlIHN1cnJvdW5kZWQgaW4gZG91YmxlIHF1b3Rlc1xuICogQHBhcmFtIHthbnl9IGF0dHJpYnV0ZVxuICovXG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlKGF0dHJpYnV0ZSkge1xuXHRyZXR1cm4gU3RyaW5nKGF0dHJpYnV0ZSkucmVwbGFjZShyZWdleF9hdHRyaWJ1dGVfY2hhcmFjdGVyc190b19lc2NhcGUsIChtYXRjaCkgPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gYXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5X3NwcmVhZChhdHRyaWJ1dGVzKSB7XG5cdGxldCBzdHIgPSAnICc7XG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoYXR0cmlidXRlc1trZXldICE9IG51bGwpIHtcblx0XHRcdHN0ciArPSBgJHtrZXl9PVwiJHtlc2NhcGVfYXR0cmlidXRlKGF0dHJpYnV0ZXNba2V5XSl9XCIgYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0ZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goXG5cdFx0LyoqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSAqLyAobm9kZSkgPT4ge1xuXHRcdFx0cmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudChjb21wb25lbnQsIHByb3BzKSB7XG5cdHJldHVybiBuZXcgY29tcG9uZW50KHByb3BzKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7Tm9kZSAmIHtcbiAqIFx0Y2xhaW1fb3JkZXI/OiBudW1iZXI7XG4gKiBcdGh5ZHJhdGVfaW5pdD86IHRydWU7XG4gKiBcdGFjdHVhbF9lbmRfY2hpbGQ/OiBOb2RlRXg7XG4gKiBcdGNoaWxkTm9kZXM6IE5vZGVMaXN0T2Y8Tm9kZUV4PjtcbiAqIH19IE5vZGVFeFxuICovXG5cbi8qKiBAdHlwZWRlZiB7Q2hpbGROb2RlICYgTm9kZUV4fSBDaGlsZE5vZGVFeCAqL1xuXG4vKiogQHR5cGVkZWYge05vZGVFeCAmIHsgY2xhaW1fb3JkZXI6IG51bWJlciB9fSBOb2RlRXgyICovXG5cbi8qKlxuICogQHR5cGVkZWYge0NoaWxkTm9kZUV4W10gJiB7XG4gKiBcdGNsYWltX2luZm8/OiB7XG4gKiBcdFx0bGFzdF9pbmRleDogbnVtYmVyO1xuICogXHRcdHRvdGFsX2NsYWltZWQ6IG51bWJlcjtcbiAqIFx0fTtcbiAqIH19IENoaWxkTm9kZUFycmF5XG4gKi9cbiIsImltcG9ydCB7IGN1c3RvbV9ldmVudCB9IGZyb20gJy4vZG9tLmpzJztcblxuZXhwb3J0IGxldCBjdXJyZW50X2NvbXBvbmVudDtcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcblx0Y3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG5cdGlmICghY3VycmVudF9jb21wb25lbnQpIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG5cdHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCBhZnRlciBhbnkgc3RhdGUgY2hhbmdlLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYmVmb3JlIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNiZWZvcmV1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBUaGUgYG9uTW91bnRgIGZ1bmN0aW9uIHNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NLlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlICppbnNpZGUqIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS5cbiAqXG4gKiBJZiBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIF9zeW5jaHJvbm91c2x5XyBmcm9tIGBvbk1vdW50YCwgaXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBgb25Nb3VudGAgZG9lcyBub3QgcnVuIGluc2lkZSBhIFtzZXJ2ZXItc2lkZSBjb21wb25lbnRdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXNlcnZlci1zaWRlLWNvbXBvbmVudC1hcGkpLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbm1vdW50XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+IHwgUHJvbWlzZTxpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+PiB8ICgoKSA9PiBhbnkpfSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdW50KGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBhZnRlciB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjYWZ0ZXJ1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbmRlc3Ryb3lcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBUaGUgZXZlbnQgZGlzcGF0Y2hlciBjYW4gYmUgdHlwZWQgdG8gbmFycm93IHRoZSBhbGxvd2VkIGV2ZW50IG5hbWVzIGFuZCB0aGUgdHlwZSBvZiB0aGUgYGRldGFpbGAgYXJndW1lbnQ6XG4gKiBgYGB0c1xuICogY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXI8e1xuICogIGxvYWRlZDogbmV2ZXI7IC8vIGRvZXMgbm90IHRha2UgYSBkZXRhaWwgYXJndW1lbnRcbiAqICBjaGFuZ2U6IHN0cmluZzsgLy8gdGFrZXMgYSBkZXRhaWwgYXJndW1lbnQgb2YgdHlwZSBzdHJpbmcsIHdoaWNoIGlzIHJlcXVpcmVkXG4gKiAgb3B0aW9uYWw6IG51bWJlciB8IG51bGw7IC8vIHRha2VzIGFuIG9wdGlvbmFsIGRldGFpbCBhcmd1bWVudCBvZiB0eXBlIG51bWJlclxuICogfT4oKTtcbiAqIGBgYFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNjcmVhdGVldmVudGRpc3BhdGNoZXJcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW0V2ZW50TWFwPWFueV1cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljLmpzJykuRXZlbnREaXNwYXRjaGVyPEV2ZW50TWFwPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcblx0Y29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG5cdHJldHVybiAodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pID0+IHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuXHRcdGlmIChjYWxsYmFja3MpIHtcblx0XHRcdC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcblx0XHRcdC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cblx0XHRcdGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuXHRcdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IHtcblx0XHRcdFx0Zm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNzZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHBhcmFtIHtUfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRhbGxjb250ZXh0c1xuICogQHRlbXBsYXRlIHtNYXA8YW55LCBhbnk+fSBbVD1NYXA8YW55LCBhbnk+XVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcblx0cmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjaGFzY29udGV4dFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cblxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbi8qKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGV2ZW50XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG5cdGlmIChjYWxsYmFja3MpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgcnVuX2FsbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3VycmVudF9jb21wb25lbnQsIHNldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcblxuZXhwb3J0IGNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmV4cG9ydCBjb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5leHBvcnQgY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcblxubGV0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcblxuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5cbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSAvKiBAX19QVVJFX18gKi8gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG5cdGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuXHRcdHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuXHRcdHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2soKSB7XG5cdHNjaGVkdWxlX3VwZGF0ZSgpO1xuXHRyZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcblx0cmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuXHRmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbi8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4vLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4vLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbi8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbi8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4vLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbi8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbi8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4vLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbi8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4vLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5cbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKCkge1xuXHQvLyBEbyBub3QgcmVlbnRlciBmbHVzaCB3aGlsZSBkaXJ0eSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBhcyB0aGlzIGNhblxuXHQvLyByZXN1bHQgaW4gYW4gaW5maW5pdGUgbG9vcC4gSW5zdGVhZCwgbGV0IHRoZSBpbm5lciBmbHVzaCBoYW5kbGUgaXQuXG5cdC8vIFJlZW50cmFuY3kgaXMgb2sgYWZ0ZXJ3YXJkcyBmb3IgYmluZGluZ3MgZXRjLlxuXHRpZiAoZmx1c2hpZHggIT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cdGRvIHtcblx0XHQvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG5cdFx0Ly8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuXHRcdFx0XHRmbHVzaGlkeCsrO1xuXHRcdFx0XHRzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcblx0XHRcdFx0dXBkYXRlKGNvbXBvbmVudC4kJCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuXHRcdFx0ZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuXHRcdFx0Zmx1c2hpZHggPSAwO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuXHRcdGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcblx0XHRmbHVzaGlkeCA9IDA7XG5cdFx0d2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aCkgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcblx0XHQvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcblx0XHQvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG5cdFx0Ly8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG5cdFx0XHRpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcblx0XHRcdFx0Ly8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuXHRcdFx0XHRzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG5cdH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcblx0d2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcblx0fVxuXHR1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cdHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcblx0aWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG5cdFx0JCQudXBkYXRlKCk7XG5cdFx0cnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcblx0XHRjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuXHRcdCQkLmRpcnR5ID0gWy0xXTtcblx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuXHRcdCQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogVXNlZnVsIGZvciBleGFtcGxlIHRvIGV4ZWN1dGUgcmVtYWluaW5nIGBhZnRlclVwZGF0ZWAgY2FsbGJhY2tzIGJlZm9yZSBleGVjdXRpbmcgYGRlc3Ryb3lgLlxuICogQHBhcmFtIHtGdW5jdGlvbltdfSBmbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyhmbnMpIHtcblx0Y29uc3QgZmlsdGVyZWQgPSBbXTtcblx0Y29uc3QgdGFyZ2V0cyA9IFtdO1xuXHRyZW5kZXJfY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IChmbnMuaW5kZXhPZihjKSA9PT0gLTEgPyBmaWx0ZXJlZC5wdXNoKGMpIDogdGFyZ2V0cy5wdXNoKGMpKSk7XG5cdHRhcmdldHMuZm9yRWFjaCgoYykgPT4gYygpKTtcblx0cmVuZGVyX2NhbGxiYWNrcyA9IGZpbHRlcmVkO1xufVxuIiwiaW1wb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyLCBpc19mdW5jdGlvbiwgbm9vcCwgcnVuX2FsbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgeyBsb29wIH0gZnJvbSAnLi9sb29wLmpzJztcbmltcG9ydCB7IGNyZWF0ZV9ydWxlLCBkZWxldGVfcnVsZSB9IGZyb20gJy4vc3R5bGVfbWFuYWdlci5qcyc7XG5pbXBvcnQgeyBjdXN0b21fZXZlbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBhZGRfcmVuZGVyX2NhbGxiYWNrIH0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuXG4vKipcbiAqIEB0eXBlIHtQcm9taXNlPHZvaWQ+IHwgbnVsbH1cbiAqL1xubGV0IHByb21pc2U7XG5cbi8qKlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmZ1bmN0aW9uIHdhaXQoKSB7XG5cdGlmICghcHJvbWlzZSkge1xuXHRcdHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRwcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0cHJvbWlzZSA9IG51bGw7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0lOVFJPIHwgT1VUUk8gfCBib29sZWFufSBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7J3N0YXJ0JyB8ICdlbmQnfSBraW5kXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG5cdG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cblxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogQHR5cGUge091dHJvfVxuICovXG5sZXQgb3V0cm9zO1xuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcblx0b3V0cm9zID0ge1xuXHRcdHI6IDAsXG5cdFx0YzogW10sXG5cdFx0cDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcblx0aWYgKCFvdXRyb3Mucikge1xuXHRcdHJ1bl9hbGwob3V0cm9zLmMpO1xuXHR9XG5cdG91dHJvcyA9IG91dHJvcy5wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5GcmFnbWVudH0gYmxvY2tcbiAqIEBwYXJhbSB7MCB8IDF9IFtsb2NhbF1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcblx0aWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcblx0XHRvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuXHRcdGJsb2NrLmkobG9jYWwpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLkZyYWdtZW50fSBibG9ja1xuICogQHBhcmFtIHswIHwgMX0gbG9jYWxcbiAqIEBwYXJhbSB7MCB8IDF9IFtkZXRhY2hdXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja11cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG5cdGlmIChibG9jayAmJiBibG9jay5vKSB7XG5cdFx0aWYgKG91dHJvaW5nLmhhcyhibG9jaykpIHJldHVybjtcblx0XHRvdXRyb2luZy5hZGQoYmxvY2spO1xuXHRcdG91dHJvcy5jLnB1c2goKCkgPT4ge1xuXHRcdFx0b3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRpZiAoZGV0YWNoKSBibG9jay5kKDEpO1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGJsb2NrLm8obG9jYWwpO1xuXHR9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxufVxuXG4vKipcbiAqIEB0eXBlIHtpbXBvcnQoJy4uL3RyYW5zaXRpb24vcHVibGljLmpzJykuVHJhbnNpdGlvbkNvbmZpZ31cbiAqL1xuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7eyBzdGFydCgpOiB2b2lkOyBpbnZhbGlkYXRlKCk6IHZvaWQ7IGVuZCgpOiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuXHQvKipcblx0ICogQHR5cGUge1RyYW5zaXRpb25PcHRpb25zfSAqL1xuXHRjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcblx0bGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG5cdGxldCBydW5uaW5nID0gZmFsc2U7XG5cdGxldCBhbmltYXRpb25fbmFtZTtcblx0bGV0IHRhc2s7XG5cdGxldCB1aWQgPSAwO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gY2xlYW51cCgpIHtcblx0XHRpZiAoYW5pbWF0aW9uX25hbWUpIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXHRcdGlmIChjc3MpIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuXHRcdHRpY2soMCwgMSk7XG5cdFx0Y29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG5cdFx0Y29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG5cdFx0aWYgKHRhc2spIHRhc2suYWJvcnQoKTtcblx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcblx0XHR0YXNrID0gbG9vcCgobm93KSA9PiB7XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAobm93ID49IGVuZF90aW1lKSB7XG5cdFx0XHRcdFx0dGljaygxLCAwKTtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG5cdFx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRcdHJldHVybiAocnVubmluZyA9IGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0XHR0aWNrKHQsIDEgLSB0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ1bm5pbmc7XG5cdFx0fSk7XG5cdH1cblx0bGV0IHN0YXJ0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHtcblx0XHRzdGFydCgpIHtcblx0XHRcdGlmIChzdGFydGVkKSByZXR1cm47XG5cdFx0XHRzdGFydGVkID0gdHJ1ZTtcblx0XHRcdGRlbGV0ZV9ydWxlKG5vZGUpO1xuXHRcdFx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHRcdFx0Y29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuXHRcdFx0XHR3YWl0KCkudGhlbihnbyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnbygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZSgpIHtcblx0XHRcdHN0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9LFxuXHRcdGVuZCgpIHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGNsZWFudXAoKTtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbkZufSBmblxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge3sgZW5kKHJlc2V0OiBhbnkpOiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcblx0LyoqIEB0eXBlIHtUcmFuc2l0aW9uT3B0aW9uc30gKi9cblx0Y29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnb3V0JyB9O1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcblx0bGV0IHJ1bm5pbmcgPSB0cnVlO1xuXHRsZXQgYW5pbWF0aW9uX25hbWU7XG5cdGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuXHRncm91cC5yICs9IDE7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0bGV0IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXG5cdFx0aWYgKGNzcykgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcblxuXHRcdGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuXHRcdGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuXHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcblxuXHRcdGlmICgnaW5lcnQnIGluIG5vZGUpIHtcblx0XHRcdG9yaWdpbmFsX2luZXJ0X3ZhbHVlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLmluZXJ0O1xuXHRcdFx0bm9kZS5pbmVydCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0bG9vcCgobm93KSA9PiB7XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAobm93ID49IGVuZF90aW1lKSB7XG5cdFx0XHRcdFx0dGljaygwLCAxKTtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuXHRcdFx0XHRcdGlmICghLS1ncm91cC5yKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuXHRcdFx0XHRcdFx0Ly8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG5cdFx0XHRcdFx0XHRydW5fYWxsKGdyb3VwLmMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG5cdFx0XHRcdFx0dGljaygxIC0gdCwgdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBydW5uaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHR3YWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG5cdFx0XHRnbygpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGdvKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGVuZChyZXNldCkge1xuXHRcdFx0aWYgKHJlc2V0ICYmICdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0XHRub2RlLmluZXJ0ID0gb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcblx0XHRcdFx0Y29uZmlnLnRpY2soMSwgMCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAoYW5pbWF0aW9uX25hbWUpIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbkZufSBmblxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHBhcmFtIHtib29sZWFufSBpbnRyb1xuICogQHJldHVybnMge3sgcnVuKGI6IDAgfCAxKTogdm9pZDsgZW5kKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7VHJhbnNpdGlvbk9wdGlvbnN9ICovXG5cdGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2JvdGgnIH07XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuXHRsZXQgdCA9IGludHJvID8gMCA6IDE7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQcm9ncmFtIHwgbnVsbH0gKi9cblx0bGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQZW5kaW5nUHJvZ3JhbSB8IG51bGx9ICovXG5cdGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuXG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0bGV0IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UGVuZGluZ1Byb2dyYW19IHByb2dyYW1cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuXHRcdGNvbnN0IGQgPSAvKiogQHR5cGUge1Byb2dyYW1bJ2QnXX0gKi8gKHByb2dyYW0uYiAtIHQpO1xuXHRcdGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRhOiB0LFxuXHRcdFx0YjogcHJvZ3JhbS5iLFxuXHRcdFx0ZCxcblx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0c3RhcnQ6IHByb2dyYW0uc3RhcnQsXG5cdFx0XHRlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcblx0XHRcdGdyb3VwOiBwcm9ncmFtLmdyb3VwXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0lOVFJPIHwgT1VUUk99IGJcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiBnbyhiKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1BlbmRpbmdQcm9ncmFtfSAqL1xuXHRcdGNvbnN0IHByb2dyYW0gPSB7XG5cdFx0XHRzdGFydDogbm93KCkgKyBkZWxheSxcblx0XHRcdGJcblx0XHR9O1xuXG5cdFx0aWYgKCFiKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuXHRcdFx0cHJvZ3JhbS5ncm91cCA9IG91dHJvcztcblx0XHRcdG91dHJvcy5yICs9IDE7XG5cdFx0fVxuXG5cdFx0aWYgKCdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0aWYgKGIpIHtcblx0XHRcdFx0aWYgKG9yaWdpbmFsX2luZXJ0X3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvLyBhYm9ydGVkL3JldmVyc2VkIG91dHJvIOKAlCByZXN0b3JlIHByZXZpb3VzIGluZXJ0IHZhbHVlXG5cdFx0XHRcdFx0bm9kZS5pbmVydCA9IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcmlnaW5hbF9pbmVydF92YWx1ZSA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChub2RlKS5pbmVydDtcblx0XHRcdFx0bm9kZS5pbmVydCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcblx0XHRcdHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cblx0XHRcdC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuXHRcdFx0aWYgKGNzcykge1xuXHRcdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdFx0YW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcblx0XHRcdH1cblx0XHRcdGlmIChiKSB0aWNrKDAsIDEpO1xuXHRcdFx0cnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG5cdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcblx0XHRcdGxvb3AoKG5vdykgPT4ge1xuXHRcdFx0XHRpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuXHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG5cdFx0XHRcdFx0cGVuZGluZ19wcm9ncmFtID0gbnVsbDtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG5cdFx0XHRcdFx0aWYgKGNzcykge1xuXHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKFxuXHRcdFx0XHRcdFx0XHRub2RlLFxuXHRcdFx0XHRcdFx0XHR0LFxuXHRcdFx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0uYixcblx0XHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRlYXNpbmcsXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5jc3Ncblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChydW5uaW5nX3Byb2dyYW0pIHtcblx0XHRcdFx0XHRpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0XHRcdHRpY2soKHQgPSBydW5uaW5nX3Byb2dyYW0uYiksIDEgLSB0KTtcblx0XHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG5cdFx0XHRcdFx0XHRpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuXHRcdFx0XHRcdFx0XHQvLyB3ZSdyZSBkb25lXG5cdFx0XHRcdFx0XHRcdGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuXHRcdFx0XHRcdFx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuXHRcdFx0XHRcdFx0XHRcdGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucikgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuXHRcdFx0XHRcdFx0dCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRcdFx0XHR0aWNrKHQsIDEgLSB0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0cnVuKGIpIHtcblx0XHRcdGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG5cdFx0XHRcdHdhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBvcHRzID0geyBkaXJlY3Rpb246IGIgPyAnaW4nIDogJ291dCcgfTtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0Y29uZmlnID0gY29uZmlnKG9wdHMpO1xuXHRcdFx0XHRcdGdvKGIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdvKGIpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZW5kKCkge1xuXHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqIEB0eXBlZGVmIHsxfSBJTlRSTyAqL1xuLyoqIEB0eXBlZGVmIHswfSBPVVRSTyAqL1xuLyoqIEB0eXBlZGVmIHt7IGRpcmVjdGlvbjogJ2luJyB8ICdvdXQnIHwgJ2JvdGgnIH19IFRyYW5zaXRpb25PcHRpb25zICovXG4vKiogQHR5cGVkZWYgeyhub2RlOiBFbGVtZW50LCBwYXJhbXM6IGFueSwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMpID0+IGltcG9ydCgnLi4vdHJhbnNpdGlvbi9wdWJsaWMuanMnKS5UcmFuc2l0aW9uQ29uZmlnfSBUcmFuc2l0aW9uRm4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPdXRyb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb25bXX0gY1xuICogQHByb3BlcnR5IHtPYmplY3R9IHBcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBlbmRpbmdQcm9ncmFtXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRcbiAqIEBwcm9wZXJ0eSB7SU5UUk98T1VUUk99IGJcbiAqIEBwcm9wZXJ0eSB7T3V0cm99IFtncm91cF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByb2dyYW1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhXG4gKiBAcHJvcGVydHkge0lOVFJPfE9VVFJPfSBiXG4gKiBAcHJvcGVydHkgezF8LTF9IGRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0XG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kXG4gKiBAcHJvcGVydHkge091dHJvfSBbZ3JvdXBdXG4gKi9cbiIsImltcG9ydCB7IHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0IH0gZnJvbSAnLi90cmFuc2l0aW9ucy5qcyc7XG5pbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIGdlbmVyYWwgZWFjaCBmdW5jdGlvbnM6XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVfYXJyYXlfbGlrZShhcnJheV9saWtlX29yX2l0ZXJhdG9yKSB7XG5cdHJldHVybiBhcnJheV9saWtlX29yX2l0ZXJhdG9yPy5sZW5ndGggIT09IHVuZGVmaW5lZFxuXHRcdD8gYXJyYXlfbGlrZV9vcl9pdGVyYXRvclxuXHRcdDogQXJyYXkuZnJvbShhcnJheV9saWtlX29yX2l0ZXJhdG9yKTtcbn1cblxuLy8ga2V5ZWQgZWFjaCBmdW5jdGlvbnM6XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHR0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuXHRcdGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcblx0fSk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuLyoqIEByZXR1cm5zIHthbnlbXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChcblx0b2xkX2Jsb2Nrcyxcblx0ZGlydHksXG5cdGdldF9rZXksXG5cdGR5bmFtaWMsXG5cdGN0eCxcblx0bGlzdCxcblx0bG9va3VwLFxuXHRub2RlLFxuXHRkZXN0cm95LFxuXHRjcmVhdGVfZWFjaF9ibG9jayxcblx0bmV4dCxcblx0Z2V0X2NvbnRleHRcbikge1xuXHRsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuXHRsZXQgbiA9IGxpc3QubGVuZ3RoO1xuXHRsZXQgaSA9IG87XG5cdGNvbnN0IG9sZF9pbmRleGVzID0ge307XG5cdHdoaWxlIChpLS0pIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG5cdGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcblx0Y29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB1cGRhdGVzID0gW107XG5cdGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0Y29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHRjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG5cdFx0bGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0Ly8gZGVmZXIgdXBkYXRlcyB1bnRpbCBhbGwgdGhlIERPTSBzaHVmZmxpbmcgaXMgZG9uZVxuXHRcdFx0dXBkYXRlcy5wdXNoKCgpID0+IGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSkpO1xuXHRcdH1cblx0XHRuZXdfbG9va3VwLnNldChrZXksIChuZXdfYmxvY2tzW2ldID0gYmxvY2spKTtcblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcblx0fVxuXHRjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuXHQvKiogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuXHRcdGJsb2NrLm0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHRjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHRjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHRjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHRjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fSBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH0gZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fSBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcblx0XHRcdG8tLTtcblx0XHR9IGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG5cdFx0XHRkaWRfbW92ZS5hZGQobmV3X2tleSk7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKG8tLSkge1xuXHRcdGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cdHJ1bl9hbGwodXBkYXRlcyk7XG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcblx0Y29uc3Qga2V5cyA9IG5ldyBNYXAoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcblx0XHRpZiAoa2V5cy5oYXMoa2V5KSkge1xuXHRcdFx0bGV0IHZhbHVlID0gJyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IGB3aXRoIHZhbHVlICcke1N0cmluZyhrZXkpfScgYDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gY2FuJ3Qgc3RyaW5naWZ5XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdGBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2g6IEtleXMgYXQgaW5kZXggJHtrZXlzLmdldChcblx0XHRcdFx0XHRrZXlcblx0XHRcdFx0KX0gYW5kICR7aX0gJHt2YWx1ZX1hcmUgZHVwbGljYXRlc2Bcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGtleXMuc2V0KGtleSwgaSk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdGFkZF9yZW5kZXJfY2FsbGJhY2ssXG5cdGZsdXNoLFxuXHRmbHVzaF9yZW5kZXJfY2FsbGJhY2tzLFxuXHRzY2hlZHVsZV91cGRhdGUsXG5cdGRpcnR5X2NvbXBvbmVudHNcbn0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuaW1wb3J0IHsgY3VycmVudF9jb21wb25lbnQsIHNldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IGJsYW5rX29iamVjdCwgaXNfZW1wdHksIGlzX2Z1bmN0aW9uLCBydW4sIHJ1bl9hbGwsIG5vb3AgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7XG5cdGNoaWxkcmVuLFxuXHRkZXRhY2gsXG5cdHN0YXJ0X2h5ZHJhdGluZyxcblx0ZW5kX2h5ZHJhdGluZyxcblx0Z2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyxcblx0aW5zZXJ0LFxuXHRlbGVtZW50LFxuXHRhdHRyXG59IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHRyYW5zaXRpb25faW4gfSBmcm9tICcuL3RyYW5zaXRpb25zLmpzJztcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuXHRjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcblx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG5cdGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG5cdGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yKSB7XG5cdGNvbnN0IHsgZnJhZ21lbnQsIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuXHRmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcblx0Ly8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuXHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcblx0XHRjb25zdCBuZXdfb25fZGVzdHJveSA9IGNvbXBvbmVudC4kJC5vbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseVxuXHRcdC8vIGl0IHdpbGwgdXBkYXRlIHRoZSBgJCQub25fZGVzdHJveWAgcmVmZXJlbmNlIHRvIGBudWxsYC5cblx0XHQvLyB0aGUgZGVzdHJ1Y3R1cmVkIG9uX2Rlc3Ryb3kgbWF5IHN0aWxsIHJlZmVyZW5jZSB0byB0aGUgb2xkIGFycmF5XG5cdFx0aWYgKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KSB7XG5cdFx0XHRjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG5cdFx0XHQvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG5cdFx0XHRydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcblx0XHR9XG5cdFx0Y29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG5cdH0pO1xuXHRhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG5cdGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuXHRpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcblx0XHRmbHVzaF9yZW5kZXJfY2FsbGJhY2tzKCQkLmFmdGVyX3VwZGF0ZSk7XG5cdFx0cnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcblx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG5cdFx0Ly8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuXHRcdC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcblx0XHQkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuXHRcdCQkLmN0eCA9IFtdO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG5cdGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG5cdFx0ZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdFx0c2NoZWR1bGVfdXBkYXRlKCk7XG5cdFx0Y29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG5cdH1cblx0Y29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gMSA8PCBpICUgMzE7XG59XG5cbi8vIFRPRE86IERvY3VtZW50IHRoZSBvdGhlciBwYXJhbXNcbi8qKlxuICogQHBhcmFtIHtTdmVsdGVDb21wb25lbnR9IGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljLmpzJykuQ29tcG9uZW50Q29uc3RydWN0b3JPcHRpb25zfSBvcHRpb25zXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vdXRpbHMuanMnKVsnbm90X2VxdWFsJ119IG5vdF9lcXVhbCBVc2VkIHRvIGNvbXBhcmUgcHJvcHMgYW5kIHN0YXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7KHRhcmdldDogRWxlbWVudCB8IFNoYWRvd1Jvb3QpID0+IHZvaWR9IFthcHBlbmRfc3R5bGVzXSBGdW5jdGlvbiB0aGF0IGFwcGVuZHMgc3R5bGVzIHRvIHRoZSBET00gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGluaXRpYWxpc2VkLlxuICogVGhpcyB3aWxsIGJlIHRoZSBgYWRkX2Nzc2AgZnVuY3Rpb24gZnJvbSB0aGUgY29tcGlsZWQgY29tcG9uZW50LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChcblx0Y29tcG9uZW50LFxuXHRvcHRpb25zLFxuXHRpbnN0YW5jZSxcblx0Y3JlYXRlX2ZyYWdtZW50LFxuXHRub3RfZXF1YWwsXG5cdHByb3BzLFxuXHRhcHBlbmRfc3R5bGVzID0gbnVsbCxcblx0ZGlydHkgPSBbLTFdXG4pIHtcblx0Y29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuXHRzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlQkJH0gKi9cblx0Y29uc3QgJCQgPSAoY29tcG9uZW50LiQkID0ge1xuXHRcdGZyYWdtZW50OiBudWxsLFxuXHRcdGN0eDogW10sXG5cdFx0Ly8gc3RhdGVcblx0XHRwcm9wcyxcblx0XHR1cGRhdGU6IG5vb3AsXG5cdFx0bm90X2VxdWFsLFxuXHRcdGJvdW5kOiBibGFua19vYmplY3QoKSxcblx0XHQvLyBsaWZlY3ljbGVcblx0XHRvbl9tb3VudDogW10sXG5cdFx0b25fZGVzdHJveTogW10sXG5cdFx0b25fZGlzY29ubmVjdDogW10sXG5cdFx0YmVmb3JlX3VwZGF0ZTogW10sXG5cdFx0YWZ0ZXJfdXBkYXRlOiBbXSxcblx0XHRjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG5cdFx0Ly8gZXZlcnl0aGluZyBlbHNlXG5cdFx0Y2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcblx0XHRkaXJ0eSxcblx0XHRza2lwX2JvdW5kOiBmYWxzZSxcblx0XHRyb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3Rcblx0fSk7XG5cdGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcblx0bGV0IHJlYWR5ID0gZmFsc2U7XG5cdCQkLmN0eCA9IGluc3RhbmNlXG5cdFx0PyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG5cdFx0XHRcdGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgKCQkLmN0eFtpXSA9IHZhbHVlKSkpIHtcblx0XHRcdFx0XHRpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pICQkLmJvdW5kW2ldKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVhZHkpIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdCAgfSlcblx0XHQ6IFtdO1xuXHQkJC51cGRhdGUoKTtcblx0cmVhZHkgPSB0cnVlO1xuXHRydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuXHQvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcblx0JCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuXHRpZiAob3B0aW9ucy50YXJnZXQpIHtcblx0XHRpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG5cdFx0XHRzdGFydF9oeWRyYXRpbmcoKTtcblx0XHRcdC8vIFRPRE86IHdoYXQgaXMgdGhlIGNvcnJlY3QgdHlwZSBoZXJlP1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0Y29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG5cdFx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcblx0XHRcdG5vZGVzLmZvckVhY2goZGV0YWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cblx0XHRcdCQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuaW50cm8pIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcblx0XHRtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuXHRcdGVuZF9oeWRyYXRpbmcoKTtcblx0XHRmbHVzaCgpO1xuXHR9XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IGxldCBTdmVsdGVFbGVtZW50O1xuXG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0XHQvKiogVGhlIFN2ZWx0ZSBjb21wb25lbnQgY29uc3RydWN0b3IgKi9cblx0XHQkJGN0b3I7XG5cdFx0LyoqIFNsb3RzICovXG5cdFx0JCRzO1xuXHRcdC8qKiBUaGUgU3ZlbHRlIGNvbXBvbmVudCBpbnN0YW5jZSAqL1xuXHRcdCQkYztcblx0XHQvKiogV2hldGhlciBvciBub3QgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuXHRcdCQkY24gPSBmYWxzZTtcblx0XHQvKiogQ29tcG9uZW50IHByb3BzIGRhdGEgKi9cblx0XHQkJGQgPSB7fTtcblx0XHQvKiogYHRydWVgIGlmIGN1cnJlbnRseSBpbiB0aGUgcHJvY2VzcyBvZiByZWZsZWN0aW5nIGNvbXBvbmVudCBwcm9wcyBiYWNrIHRvIGF0dHJpYnV0ZXMgKi9cblx0XHQkJHIgPSBmYWxzZTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IFByb3BzIGRlZmluaXRpb24gKG5hbWUsIHJlZmxlY3RlZCwgdHlwZSBldGMpICovXG5cdFx0JCRwX2QgPSB7fTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEZ1bmN0aW9uW10+fSBFdmVudCBsaXN0ZW5lcnMgKi9cblx0XHQkJGwgPSB7fTtcblx0XHQvKiogQHR5cGUge01hcDxGdW5jdGlvbiwgRnVuY3Rpb24+fSBFdmVudCBsaXN0ZW5lciB1bnN1YnNjcmliZSBmdW5jdGlvbnMgKi9cblx0XHQkJGxfdSA9IG5ldyBNYXAoKTtcblxuXHRcdGNvbnN0cnVjdG9yKCQkY29tcG9uZW50Q3RvciwgJCRzbG90cywgdXNlX3NoYWRvd19kb20pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiQkY3RvciA9ICQkY29tcG9uZW50Q3Rvcjtcblx0XHRcdHRoaXMuJCRzID0gJCRzbG90cztcblx0XHRcdGlmICh1c2Vfc2hhZG93X2RvbSkge1xuXHRcdFx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG5cdFx0XHQvLyBXZSBjYW4ndCBkZXRlcm1pbmUgdXBmcm9udCBpZiB0aGUgZXZlbnQgaXMgYSBjdXN0b20gZXZlbnQgb3Igbm90LCBzbyB3ZSBoYXZlIHRvXG5cdFx0XHQvLyBsaXN0ZW4gdG8gYm90aC4gSWYgc29tZW9uZSB1c2VzIGEgY3VzdG9tIGV2ZW50IHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhIHJlZ3VsYXJcblx0XHRcdC8vIGJyb3dzZXIgZXZlbnQsIHRoaXMgZmlyZXMgdHdpY2UgLSB3ZSBjYW4ndCBhdm9pZCB0aGF0LlxuXHRcdFx0dGhpcy4kJGxbdHlwZV0gPSB0aGlzLiQkbFt0eXBlXSB8fCBbXTtcblx0XHRcdHRoaXMuJCRsW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHRcdFx0aWYgKHRoaXMuJCRjKSB7XG5cdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGMuJG9uKHR5cGUsIGxpc3RlbmVyKTtcblx0XHRcdFx0dGhpcy4kJGxfdS5zZXQobGlzdGVuZXIsIHVuc3ViKTtcblx0XHRcdH1cblx0XHRcdHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcblx0XHRcdHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKHRoaXMuJCRjKSB7XG5cdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGxfdS5nZXQobGlzdGVuZXIpO1xuXHRcdFx0XHRpZiAodW5zdWIpIHtcblx0XHRcdFx0XHR1bnN1YigpO1xuXHRcdFx0XHRcdHRoaXMuJCRsX3UuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4kJGNuID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy4kJGMpIHtcblx0XHRcdFx0Ly8gV2Ugd2FpdCBvbmUgdGljayB0byBsZXQgcG9zc2libGUgY2hpbGQgc2xvdCBlbGVtZW50cyBiZSBjcmVhdGVkL21vdW50ZWRcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdGlmICghdGhpcy4kJGNuIHx8IHRoaXMuJCRjKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZ1bmN0aW9uIGNyZWF0ZV9zbG90KG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IG5vZGU7XG5cdFx0XHRcdFx0XHRjb25zdCBvYmogPSB7XG5cdFx0XHRcdFx0XHRcdGM6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbWVudCgnc2xvdCcpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuYW1lICE9PSAnZGVmYXVsdCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHIobm9kZSwgJ25hbWUnLCBuYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcblx0XHRcdFx0XHRcdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2FuY2hvcl1cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdG06IGZ1bmN0aW9uIG1vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZDogZnVuY3Rpb24gZGVzdHJveShkZXRhY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGV0YWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXRhY2gobm9kZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICQkc2xvdHMgPSB7fTtcblx0XHRcdFx0Y29uc3QgZXhpc3Rpbmdfc2xvdHMgPSBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKHRoaXMpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy4kJHMpIHtcblx0XHRcdFx0XHRpZiAobmFtZSBpbiBleGlzdGluZ19zbG90cykge1xuXHRcdFx0XHRcdFx0JCRzbG90c1tuYW1lXSA9IFtjcmVhdGVfc2xvdChuYW1lKV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIHRoaXMuYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdC8vIHRoaXMuJCRkYXRhIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGlzLmF0dHJpYnV0ZXNcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy4kJGdfcChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdFx0aWYgKCEobmFtZSBpbiB0aGlzLiQkZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW25hbWVdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKG5hbWUsIGF0dHJpYnV0ZS52YWx1ZSwgdGhpcy4kJHBfZCwgJ3RvUHJvcCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBQb3J0IG92ZXIgcHJvcHMgdGhhdCB3ZXJlIHNldCBwcm9ncmFtbWF0aWNhbGx5IGJlZm9yZSBjZSB3YXMgaW5pdGlhbGl6ZWRcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJHBfZCkge1xuXHRcdFx0XHRcdGlmICghKGtleSBpbiB0aGlzLiQkZCkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0gPSB0aGlzW2tleV07IC8vIGRvbid0IHRyYW5zZm9ybSwgdGhlc2Ugd2VyZSBzZXQgdGhyb3VnaCBKYXZhU2NyaXB0XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpc1trZXldOyAvLyByZW1vdmUgdGhlIHByb3BlcnR5IHRoYXQgc2hhZG93cyB0aGUgZ2V0dGVyL3NldHRlclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiQkYyA9IG5ldyB0aGlzLiQkY3Rvcih7XG5cdFx0XHRcdFx0dGFyZ2V0OiB0aGlzLnNoYWRvd1Jvb3QgfHwgdGhpcyxcblx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0Li4udGhpcy4kJGQsXG5cdFx0XHRcdFx0XHQkJHNsb3RzLFxuXHRcdFx0XHRcdFx0JCRzY29wZToge1xuXHRcdFx0XHRcdFx0XHRjdHg6IFtdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZWZsZWN0IGNvbXBvbmVudCBwcm9wcyBhcyBhdHRyaWJ1dGVzXG5cdFx0XHRcdGNvbnN0IHJlZmxlY3RfYXR0cmlidXRlcyA9ICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLiQkciA9IHRydWU7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJHBfZCkge1xuXHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSA9IHRoaXMuJCRjLiQkLmN0eFt0aGlzLiQkYy4kJC5wcm9wc1trZXldXTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLiQkcF9kW2tleV0ucmVmbGVjdCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGVfdmFsdWUgPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUoXG5cdFx0XHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0sXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kJHBfZCxcblx0XHRcdFx0XHRcdFx0XHQndG9BdHRyaWJ1dGUnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVfdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgfHwga2V5KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSh0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlIHx8IGtleSwgYXR0cmlidXRlX3ZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLiQkciA9IGZhbHNlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLiQkYy4kJC5hZnRlcl91cGRhdGUucHVzaChyZWZsZWN0X2F0dHJpYnV0ZXMpO1xuXHRcdFx0XHRyZWZsZWN0X2F0dHJpYnV0ZXMoKTsgLy8gb25jZSBpbml0aWFsbHkgYmVjYXVzZSBhZnRlcl91cGRhdGUgaXMgYWRkZWQgdG9vIGxhdGUgZm9yIGZpcnN0IHJlbmRlclxuXG5cdFx0XHRcdGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLiQkbCkge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy4kJGxbdHlwZV0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGMuJG9uKHR5cGUsIGxpc3RlbmVyKTtcblx0XHRcdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJCRsID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3QgbmVlZCB0aGlzIHdoZW4gd29ya2luZyB3aXRoaW4gU3ZlbHRlIGNvZGUsIGJ1dCBmb3IgY29tcGF0aWJpbGl0eSBvZiBwZW9wbGUgdXNpbmcgdGhpcyBvdXRzaWRlIG9mIFN2ZWx0ZVxuXHRcdC8vIGFuZCBzZXR0aW5nIGF0dHJpYnV0ZXMgdGhyb3VnaCBzZXRBdHRyaWJ1dGUgZXRjLCB0aGlzIGlzIGhlbHBmdWxcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMuJCRyKSByZXR1cm47XG5cdFx0XHRhdHRyID0gdGhpcy4kJGdfcChhdHRyKTtcblx0XHRcdHRoaXMuJCRkW2F0dHJdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKGF0dHIsIG5ld1ZhbHVlLCB0aGlzLiQkcF9kLCAndG9Qcm9wJyk7XG5cdFx0XHR0aGlzLiQkYz8uJHNldCh7IFthdHRyXTogdGhpcy4kJGRbYXR0cl0gfSk7XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiQkY24gPSBmYWxzZTtcblx0XHRcdC8vIEluIGEgbWljcm90YXNrLCBiZWNhdXNlIHRoaXMgY291bGQgYmUgYSBtb3ZlIHdpdGhpbiB0aGUgRE9NXG5cdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLiQkY24pIHtcblx0XHRcdFx0XHR0aGlzLiQkYy4kZGVzdHJveSgpO1xuXHRcdFx0XHRcdHRoaXMuJCRjID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkJGdfcChhdHRyaWJ1dGVfbmFtZSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy4kJHBfZCkuZmluZChcblx0XHRcdFx0XHQoa2V5KSA9PlxuXHRcdFx0XHRcdFx0dGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSA9PT0gYXR0cmlidXRlX25hbWUgfHxcblx0XHRcdFx0XHRcdCghdGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gYXR0cmlidXRlX25hbWUpXG5cdFx0XHRcdCkgfHwgYXR0cmlidXRlX25hbWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvblxuICogQHBhcmFtIHsndG9BdHRyaWJ1dGUnIHwgJ3RvUHJvcCd9IFt0cmFuc2Zvcm1dXG4gKi9cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShwcm9wLCB2YWx1ZSwgcHJvcHNfZGVmaW5pdGlvbiwgdHJhbnNmb3JtKSB7XG5cdGNvbnN0IHR5cGUgPSBwcm9wc19kZWZpbml0aW9uW3Byb3BdPy50eXBlO1xuXHR2YWx1ZSA9IHR5cGUgPT09ICdCb29sZWFuJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyA/IHZhbHVlICE9IG51bGwgOiB2YWx1ZTtcblx0aWYgKCF0cmFuc2Zvcm0gfHwgIXByb3BzX2RlZmluaXRpb25bcHJvcF0pIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0gZWxzZSBpZiAodHJhbnNmb3JtID09PSAndG9BdHRyaWJ1dGUnKSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID8gJycgOiBudWxsO1xuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBudWxsIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICYmIEpTT04ucGFyc2UodmFsdWUpO1xuXHRcdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTsgLy8gY29udmVyc2lvbiBhbHJlYWR5IGhhbmRsZWQgYWJvdmVcblx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSAhPSBudWxsID8gK3ZhbHVlIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKlxuICogVHVybiBhIFN2ZWx0ZSBjb21wb25lbnQgaW50byBhIGN1c3RvbSBlbGVtZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljLmpzJykuQ29tcG9uZW50VHlwZX0gQ29tcG9uZW50ICBBIFN2ZWx0ZSBjb21wb25lbnQgY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvbiAgVGhlIHByb3BzIHRvIG9ic2VydmVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHNsb3RzICBUaGUgc2xvdHMgdG8gY3JlYXRlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhY2Nlc3NvcnMgIE90aGVyIGFjY2Vzc29ycyBiZXNpZGVzIHRoZSBvbmVzIGZvciBwcm9wcyB0aGUgY29tcG9uZW50IGhhc1xuICogQHBhcmFtIHtib29sZWFufSB1c2Vfc2hhZG93X2RvbSAgV2hldGhlciB0byB1c2Ugc2hhZG93IERPTVxuICogQHBhcmFtIHsoY2U6IG5ldyAoKSA9PiBIVE1MRWxlbWVudCkgPT4gbmV3ICgpID0+IEhUTUxFbGVtZW50fSBbZXh0ZW5kXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9lbGVtZW50KFxuXHRDb21wb25lbnQsXG5cdHByb3BzX2RlZmluaXRpb24sXG5cdHNsb3RzLFxuXHRhY2Nlc3NvcnMsXG5cdHVzZV9zaGFkb3dfZG9tLFxuXHRleHRlbmRcbikge1xuXHRsZXQgQ2xhc3MgPSBjbGFzcyBleHRlbmRzIFN2ZWx0ZUVsZW1lbnQge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoQ29tcG9uZW50LCBzbG90cywgdXNlX3NoYWRvd19kb20pO1xuXHRcdFx0dGhpcy4kJHBfZCA9IHByb3BzX2RlZmluaXRpb247XG5cdFx0fVxuXHRcdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHByb3BzX2RlZmluaXRpb24pLm1hcCgoa2V5KSA9PlxuXHRcdFx0XHQocHJvcHNfZGVmaW5pdGlvbltrZXldLmF0dHJpYnV0ZSB8fCBrZXkpLnRvTG93ZXJDYXNlKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRPYmplY3Qua2V5cyhwcm9wc19kZWZpbml0aW9uKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzLnByb3RvdHlwZSwgcHJvcCwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGMgJiYgcHJvcCBpbiB0aGlzLiQkYyA/IHRoaXMuJCRjW3Byb3BdIDogdGhpcy4kJGRbcHJvcF07XG5cdFx0XHR9LFxuXHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKHByb3AsIHZhbHVlLCBwcm9wc19kZWZpbml0aW9uKTtcblx0XHRcdFx0dGhpcy4kJGRbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy4kJGM/LiRzZXQoeyBbcHJvcF06IHZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0YWNjZXNzb3JzLmZvckVhY2goKGFjY2Vzc29yKSA9PiB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzLnByb3RvdHlwZSwgYWNjZXNzb3IsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRjPy5bYWNjZXNzb3JdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0aWYgKGV4dGVuZCkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgLSBhc3NpZ25pbmcgaGVyZSBpcyBmaW5lXG5cdFx0Q2xhc3MgPSBleHRlbmQoQ2xhc3MpO1xuXHR9XG5cdENvbXBvbmVudC5lbGVtZW50ID0gLyoqIEB0eXBlIHthbnl9ICovIChDbGFzcyk7XG5cdHJldHVybiBDbGFzcztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtQcm9wcz1hbnldXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtFdmVudHM9YW55XVxuICovXG5leHBvcnQgY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqICMjIyBQUklWQVRFIEFQSVxuXHQgKlxuXHQgKiBEbyBub3QgdXNlLCBtYXkgY2hhbmdlIGF0IGFueSB0aW1lXG5cdCAqXG5cdCAqIEB0eXBlIHthbnl9XG5cdCAqL1xuXHQkJCA9IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqICMjIyBQUklWQVRFIEFQSVxuXHQgKlxuXHQgKiBEbyBub3QgdXNlLCBtYXkgY2hhbmdlIGF0IGFueSB0aW1lXG5cdCAqXG5cdCAqIEB0eXBlIHthbnl9XG5cdCAqL1xuXHQkJHNldCA9IHVuZGVmaW5lZDtcblxuXHQvKiogQHJldHVybnMge3ZvaWR9ICovXG5cdCRkZXN0cm95KCkge1xuXHRcdGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuXHRcdHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSB7RXh0cmFjdDxrZXlvZiBFdmVudHMsIHN0cmluZz59IEtcblx0ICogQHBhcmFtIHtLfSB0eXBlXG5cdCAqIEBwYXJhbSB7KChlOiBFdmVudHNbS10pID0+IHZvaWQpIHwgbnVsbCB8IHVuZGVmaW5lZH0gY2FsbGJhY2tcblx0ICogQHJldHVybnMgeygpID0+IHZvaWR9XG5cdCAqL1xuXHQkb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuXHRcdFx0cmV0dXJuIG5vb3A7XG5cdFx0fVxuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKTtcblx0XHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGluZGV4ICE9PSAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1BhcnRpYWw8UHJvcHM+fSBwcm9wc1xuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdCRzZXQocHJvcHMpIHtcblx0XHRpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkocHJvcHMpKSB7XG5cdFx0XHR0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuXHRcdFx0dGhpcy4kJHNldChwcm9wcyk7XG5cdFx0XHR0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmlidXRlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbcmVmbGVjdF1cbiAqIEBwcm9wZXJ0eSB7J1N0cmluZyd8J0Jvb2xlYW4nfCdOdW1iZXInfCdBcnJheSd8J09iamVjdCd9IFt0eXBlXVxuICovXG4iLCIvLyBnZW5lcmF0ZWQgZHVyaW5nIHJlbGVhc2UsIGRvIG5vdCBtb2RpZnlcblxuLyoqXG4gKiBUaGUgY3VycmVudCB2ZXJzaW9uLCBhcyBzZXQgaW4gcGFja2FnZS5qc29uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1jb21waWxlciNzdmVsdGUtdmVyc2lvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4yLjE1JztcbmV4cG9ydCBjb25zdCBQVUJMSUNfVkVSU0lPTiA9ICc0JztcbiIsImltcG9ydCB7IFBVQkxJQ19WRVJTSU9OIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3ZlcnNpb24uanMnO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdC8vIEB0cy1pZ25vcmVcblx0KHdpbmRvdy5fX3N2ZWx0ZSB8fCAod2luZG93Ll9fc3ZlbHRlID0geyB2OiBuZXcgU2V0KCkgfSkpLnYuYWRkKFBVQkxJQ19WRVJTSU9OKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJCVHJlZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUkJUcmVlKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIH1cbiAgICBSQlRyZWUucHJvdG90eXBlLmluc2VydFN1Y2Nlc3NvciA9IGZ1bmN0aW9uIChub2RlLCBzdWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHBhcmVudDtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5wcmV2ID0gbm9kZTtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5uZXh0ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuZmlyc3QodGhpcy5yb290KTtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5wcmV2ID0gbnVsbDtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5uZXh0ID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWNjZXNzb3IucHJldiA9IHN1Y2Nlc3Nvci5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3VjY2Vzc29yLmxlZnQgPSBzdWNjZXNzb3IucmlnaHQgPSBudWxsO1xuICAgICAgICBzdWNjZXNzb3IucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBzdWNjZXNzb3IucmVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGdyYW5kcGEsIHVuY2xlO1xuICAgICAgICBub2RlID0gc3VjY2Vzc29yO1xuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5yZWQpIHtcbiAgICAgICAgICAgIGdyYW5kcGEgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gZ3JhbmRwYS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgdW5jbGUgPSBncmFuZHBhLnJpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh1bmNsZSAmJiB1bmNsZS5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHVuY2xlLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBncmFuZHBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQoZ3JhbmRwYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5jbGUgPSBncmFuZHBhLmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKHVuY2xlICYmIHVuY2xlLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdW5jbGUucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGdyYW5kcGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50LmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KGdyYW5kcGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdC5yZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnByZXYpIHtcbiAgICAgICAgICAgIG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIG5vZGUubmV4dCA9IG5vZGUucHJldiA9IG51bGw7XG4gICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgdmFyIGxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICAgIHZhciByaWdodCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIHZhciBuZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFsZWZ0KSB7XG4gICAgICAgICAgICBuZXh0ID0gcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXJpZ2h0KSB7XG4gICAgICAgICAgICBuZXh0ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmZpcnN0KHJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNSZWQ7XG4gICAgICAgIGlmIChsZWZ0ICYmIHJpZ2h0KSB7XG4gICAgICAgICAgICBpc1JlZCA9IG5leHQucmVkO1xuICAgICAgICAgICAgbmV4dC5yZWQgPSBub2RlLnJlZDtcbiAgICAgICAgICAgIG5leHQubGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICBsZWZ0LnBhcmVudCA9IG5leHQ7XG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gcmlnaHQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBuZXh0LnBhcmVudDtcbiAgICAgICAgICAgICAgICBuZXh0LnBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0LnJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBuZXh0LnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgcmlnaHQucGFyZW50ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5leHQucmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc1JlZCA9IG5vZGUucmVkO1xuICAgICAgICAgICAgbm9kZSA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucmVkKSB7XG4gICAgICAgICAgICBub2RlLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50LmxlZnQpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LnJpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoc2libGluZy5sZWZ0ICYmIHNpYmxpbmcubGVmdC5yZWQpIHx8IChzaWJsaW5nLnJpZ2h0ICYmIHNpYmxpbmcucmlnaHQucmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNpYmxpbmcucmlnaHQgfHwgIXNpYmxpbmcucmlnaHQucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmxlZnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHBhcmVudC5yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBzaWJsaW5nLnJpZ2h0LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucm9vdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5sZWZ0O1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoc2libGluZy5sZWZ0ICYmIHNpYmxpbmcubGVmdC5yZWQpIHx8IChzaWJsaW5nLnJpZ2h0ICYmIHNpYmxpbmcucmlnaHQucmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNpYmxpbmcubGVmdCB8fCAhc2libGluZy5sZWZ0LnJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5yaWdodC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHBhcmVudC5yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBzaWJsaW5nLmxlZnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucm9vdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZy5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH0gd2hpbGUgKCFub2RlLnJlZCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcCA9IG5vZGU7XG4gICAgICAgIHZhciBxID0gbm9kZS5yaWdodDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHAucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gcTtcbiAgICAgICAgfVxuICAgICAgICBxLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcC5wYXJlbnQgPSBxO1xuICAgICAgICBwLnJpZ2h0ID0gcS5sZWZ0O1xuICAgICAgICBpZiAocC5yaWdodCkge1xuICAgICAgICAgICAgcC5yaWdodC5wYXJlbnQgPSBwO1xuICAgICAgICB9XG4gICAgICAgIHEubGVmdCA9IHA7XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLnJvdGF0ZVJpZ2h0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHAgPSBub2RlO1xuICAgICAgICB2YXIgcSA9IG5vZGUubGVmdDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHAucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gcTtcbiAgICAgICAgfVxuICAgICAgICBxLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcC5wYXJlbnQgPSBxO1xuICAgICAgICBwLmxlZnQgPSBxLnJpZ2h0O1xuICAgICAgICBpZiAocC5sZWZ0KSB7XG4gICAgICAgICAgICBwLmxlZnQucGFyZW50ID0gcDtcbiAgICAgICAgfVxuICAgICAgICBxLnJpZ2h0ID0gcDtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIFJCVHJlZTtcbn0oKSk7XG5leHBvcnRzLlJCVHJlZSA9IFJCVHJlZTtcbnZhciBSQlRyZWVOb2RlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSQlRyZWVOb2RlKCkge1xuICAgIH1cbiAgICByZXR1cm4gUkJUcmVlTm9kZTtcbn0oKSk7XG5leHBvcnRzLlJCVHJlZU5vZGUgPSBSQlRyZWVOb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmJ0cmVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFZlcnRleCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmVydGV4KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFZlcnRleDtcbn0oKSk7XG5leHBvcnRzLlZlcnRleCA9IFZlcnRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlcnRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFZGdlKGxTaXRlLCByU2l0ZSkge1xuICAgICAgICB0aGlzLmxTaXRlID0gbFNpdGU7XG4gICAgICAgIHRoaXMuclNpdGUgPSByU2l0ZTtcbiAgICAgICAgdGhpcy52YSA9IHRoaXMudmIgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gRWRnZTtcbn0oKSk7XG5leHBvcnRzLkVkZ2UgPSBFZGdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDZWxsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZWxsKHNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gc2l0ZTtcbiAgICAgICAgdGhpcy5oYWxmZWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbG9zZU1lID0gZmFsc2U7XG4gICAgfVxuICAgIENlbGwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBzaXRlO1xuICAgICAgICB0aGlzLmhhbGZlZGdlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsb3NlTWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5wcmVwYXJlSGFsZmVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXM7XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZWRnZTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICBlZGdlID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV0uZWRnZTtcbiAgICAgICAgICAgIGlmICghZWRnZS52YiB8fCAhZWRnZS52YSkge1xuICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUhhbGZlZGdlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoYWxmZWRnZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIuYW5nbGUgLSBhLmFuZ2xlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5nZXROZWlnaGJvcklkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5laWdoYm9ycyA9IFtdO1xuICAgICAgICB2YXIgaUhhbGZlZGdlID0gdGhpcy5oYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZWRnZTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICBlZGdlID0gdGhpcy5oYWxmZWRnZXNbaUhhbGZlZGdlXS5lZGdlO1xuICAgICAgICAgICAgaWYgKGVkZ2UubFNpdGUgIT09IG51bGwgJiYgZWRnZS5sU2l0ZS5pZCAhPSB0aGlzLnNpdGUuaWQpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChlZGdlLmxTaXRlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UuclNpdGUgIT09IG51bGwgJiYgZWRnZS5yU2l0ZS5pZCAhPSB0aGlzLnNpdGUuaWQpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChlZGdlLnJTaXRlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xuICAgIH07XG4gICAgO1xuICAgIENlbGwucHJvdG90eXBlLmdldEJib3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYWxmZWRnZXMgPSB0aGlzLmhhbGZlZGdlcztcbiAgICAgICAgdmFyIGlIYWxmZWRnZSA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgIHZhciB4bWluID0gSW5maW5pdHk7XG4gICAgICAgIHZhciB5bWluID0gSW5maW5pdHk7XG4gICAgICAgIHZhciB4bWF4ID0gLUluZmluaXR5O1xuICAgICAgICB2YXIgeW1heCA9IC1JbmZpbml0eTtcbiAgICAgICAgdmFyIHYsIHZ4LCB2eTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICB2ID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV0uZ2V0U3RhcnRwb2ludCgpO1xuICAgICAgICAgICAgdnggPSB2Lng7XG4gICAgICAgICAgICB2eSA9IHYueTtcbiAgICAgICAgICAgIGlmICh2eCA8IHhtaW4pIHtcbiAgICAgICAgICAgICAgICB4bWluID0gdng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodnkgPCB5bWluKSB7XG4gICAgICAgICAgICAgICAgeW1pbiA9IHZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZ4ID4geG1heCkge1xuICAgICAgICAgICAgICAgIHhtYXggPSB2eDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2eSA+IHltYXgpIHtcbiAgICAgICAgICAgICAgICB5bWF4ID0gdnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHhtaW4sXG4gICAgICAgICAgICB5OiB5bWluLFxuICAgICAgICAgICAgd2lkdGg6IHhtYXggLSB4bWluLFxuICAgICAgICAgICAgaGVpZ2h0OiB5bWF4IC0geW1pblxuICAgICAgICB9O1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUucG9pbnRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXM7XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgaGFsZmVkZ2U7XG4gICAgICAgIHZhciBwMCwgcDE7XG4gICAgICAgIHZhciByO1xuICAgICAgICB3aGlsZSAoaUhhbGZlZGdlLS0pIHtcbiAgICAgICAgICAgIGhhbGZlZGdlID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV07XG4gICAgICAgICAgICBwMCA9IGhhbGZlZGdlLmdldFN0YXJ0cG9pbnQoKTtcbiAgICAgICAgICAgIHAxID0gaGFsZmVkZ2UuZ2V0RW5kcG9pbnQoKTtcbiAgICAgICAgICAgIHIgPSAoeSAtIHAwLnkpICogKHAxLnggLSBwMC54KSAtICh4IC0gcDAueCkgKiAocDEueSAtIHAwLnkpO1xuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfTtcbiAgICByZXR1cm4gQ2VsbDtcbn0oKSk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaWFncmFtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFncmFtKHNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gc2l0ZTtcbiAgICB9XG4gICAgcmV0dXJuIERpYWdyYW07XG59KCkpO1xuZXhwb3J0cy5EaWFncmFtID0gRGlhZ3JhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpYWdyYW0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSGFsZmVkZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhhbGZlZGdlKGVkZ2UsIGxTaXRlLCByU2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBsU2l0ZTtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZTtcbiAgICAgICAgaWYgKHJTaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMihyU2l0ZS55IC0gbFNpdGUueSwgclNpdGUueCAtIGxTaXRlLngpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhID0gZWRnZS52YTtcbiAgICAgICAgICAgIHZhciB2YiA9IGVkZ2UudmI7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gZWRnZS5sU2l0ZSA9PT0gbFNpdGUgP1xuICAgICAgICAgICAgICAgIE1hdGguYXRhbjIodmIueCAtIHZhLngsIHZhLnkgLSB2Yi55KSA6XG4gICAgICAgICAgICAgICAgTWF0aC5hdGFuMih2YS54IC0gdmIueCwgdmIueSAtIHZhLnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEhhbGZlZGdlLnByb3RvdHlwZS5nZXRTdGFydHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlLmxTaXRlID09PSB0aGlzLnNpdGUgPyB0aGlzLmVkZ2UudmEgOiB0aGlzLmVkZ2UudmI7XG4gICAgfTtcbiAgICA7XG4gICAgSGFsZmVkZ2UucHJvdG90eXBlLmdldEVuZHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlLmxTaXRlID09PSB0aGlzLnNpdGUgPyB0aGlzLmVkZ2UudmIgOiB0aGlzLmVkZ2UudmE7XG4gICAgfTtcbiAgICA7XG4gICAgcmV0dXJuIEhhbGZlZGdlO1xufSgpKTtcbmV4cG9ydHMuSGFsZmVkZ2UgPSBIYWxmZWRnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbGZlZGdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJidHJlZV8xID0gcmVxdWlyZShcIi4vcmJ0cmVlXCIpO1xudmFyIHZlcnRleF8xID0gcmVxdWlyZShcIi4vdmVydGV4XCIpO1xudmFyIGVkZ2VfMSA9IHJlcXVpcmUoXCIuL2VkZ2VcIik7XG52YXIgY2VsbF8xID0gcmVxdWlyZShcIi4vY2VsbFwiKTtcbnZhciBkaWFncmFtXzEgPSByZXF1aXJlKFwiLi9kaWFncmFtXCIpO1xudmFyIGhhbGZlZGdlXzEgPSByZXF1aXJlKFwiLi9oYWxmZWRnZVwiKTtcbnZhciBWb3Jvbm9pID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWb3Jvbm9pKCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBudWxsO1xuICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5jaXJjbGVFdmVudEp1bmt5YXJkID0gW107XG4gICAgICAgIHRoaXMudmVydGV4SnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5lZGdlSnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5jZWxsSnVua3lhcmQgPSBbXTtcbiAgICB9XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzaXRlcywgYmJveCkge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAodGhpcy50b1JlY3ljbGUpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGV4SnVua3lhcmQgPSB0aGlzLnZlcnRleEp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS52ZXJ0aWNlcyk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VKdW5reWFyZCA9IHRoaXMuZWRnZUp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS5lZGdlcyk7XG4gICAgICAgICAgICB0aGlzLmNlbGxKdW5reWFyZCA9IHRoaXMuY2VsbEp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS5jZWxscyk7XG4gICAgICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpdGVFdmVudHMgPSBzaXRlcy5zbGljZSgwKTtcbiAgICAgICAgc2l0ZUV2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgciA9IGIueSAtIGEueTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYi54IC0gYS54O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNpdGUgPSBzaXRlRXZlbnRzLnBvcCgpLCBzaXRlaWQgPSAwLCB4c2l0ZXgsIHhzaXRleSwgY2VsbHMgPSB0aGlzLmNlbGxzLCBjaXJjbGU7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGNpcmNsZSA9IHRoaXMuZmlyc3RDaXJjbGVFdmVudDtcbiAgICAgICAgICAgIGlmIChzaXRlICYmICghY2lyY2xlIHx8IHNpdGUueSA8IGNpcmNsZS55IHx8IChzaXRlLnkgPT09IGNpcmNsZS55ICYmIHNpdGUueCA8IGNpcmNsZS54KSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2l0ZS54ICE9PSB4c2l0ZXggfHwgc2l0ZS55ICE9PSB4c2l0ZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbc2l0ZWlkXSA9IHRoaXMuY3JlYXRlQ2VsbChzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2l0ZS5pZCA9IHNpdGVpZCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJlYWNoc2VjdGlvbihzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgeHNpdGV5ID0gc2l0ZS55O1xuICAgICAgICAgICAgICAgICAgICB4c2l0ZXggPSBzaXRlLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNpdGUgPSBzaXRlRXZlbnRzLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2lyY2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCZWFjaHNlY3Rpb24oY2lyY2xlLmFyYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaXBFZGdlcyhiYm94KTtcbiAgICAgICAgdGhpcy5jbG9zZUNlbGxzKGJib3gpO1xuICAgICAgICB2YXIgc3RvcFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZGlhZ3JhbSA9IG5ldyBkaWFncmFtXzEuRGlhZ3JhbSgpO1xuICAgICAgICBkaWFncmFtLmNlbGxzID0gdGhpcy5jZWxscztcbiAgICAgICAgZGlhZ3JhbS5lZGdlcyA9IHRoaXMuZWRnZXM7XG4gICAgICAgIGRpYWdyYW0udmVydGljZXMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICBkaWFncmFtLmV4ZWNUaW1lID0gc3RvcFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm4gZGlhZ3JhbTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNxcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMWUtOTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmludmVwcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAvIHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5lcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzKGEgLSBiKSA8IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5ncmVhdGVyVGhhbldpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhIC0gYikgPiB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmdyZWF0ZXJUaGFuT3JFcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChiIC0gYSkgPCB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUubGVzc1RoYW5XaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYiAtIGEpID4gdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmxlc3NUaGFuT3JFcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhIC0gYikgPCB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucXVhbnRpemVTaXRlcyA9IGZ1bmN0aW9uIChzaXRlcykge1xuICAgICAgICB2YXIgZXBzID0gdGhpcy5lcHMoKSwgbiA9IHNpdGVzLmxlbmd0aCwgc2l0ZTtcbiAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgc2l0ZSA9IHNpdGVzW25dO1xuICAgICAgICAgICAgc2l0ZS54ID0gTWF0aC5mbG9vcihzaXRlLnggLyBlcHMpICogZXBzO1xuICAgICAgICAgICAgc2l0ZS55ID0gTWF0aC5mbG9vcihzaXRlLnkgLyBlcHMpICogZXBzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yZWN5Y2xlID0gZnVuY3Rpb24gKGRpYWdyYW0pIHtcbiAgICAgICAgaWYgKGRpYWdyYW0pIHtcbiAgICAgICAgICAgIGlmIChkaWFncmFtIGluc3RhbmNlb2YgZGlhZ3JhbV8xLkRpYWdyYW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IGRpYWdyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnVm9yb25vaS5yZWN5Y2xlRGlhZ3JhbSgpID4gTmVlZCBhIERpYWdyYW0gb2JqZWN0Lic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmVhY2hsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLmJlYWNobGluZSA9IG5ldyByYnRyZWVfMS5SQlRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZWFjaGxpbmUucm9vdCkge1xuICAgICAgICAgICAgdmFyIGJlYWNoc2VjdGlvbiA9IHRoaXMuYmVhY2hsaW5lLmZpcnN0KHRoaXMuYmVhY2hsaW5lLnJvb3QpO1xuICAgICAgICAgICAgd2hpbGUgKGJlYWNoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQucHVzaChiZWFjaHNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJlYWNoc2VjdGlvbiA9IGJlYWNoc2VjdGlvbi5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVhY2hsaW5lLnJvb3QgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuY2lyY2xlRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cyA9IG5ldyByYnRyZWVfMS5SQlRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cy5yb290ID0gdGhpcy5maXJzdENpcmNsZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUNlbGwgPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbEp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbC5pbml0KHNpdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGNlbGwuaW5pdChzaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNlbGxfMS5DZWxsKHNpdGUpO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUhhbGZlZGdlID0gZnVuY3Rpb24gKGVkZ2UsIGxTaXRlLCByU2l0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IGhhbGZlZGdlXzEuSGFsZmVkZ2UoZWRnZSwgbFNpdGUsIHJTaXRlKTtcbiAgICB9O1xuICAgIDtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVWZXJ0ZXggPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgdiA9IHRoaXMudmVydGV4SnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgdiA9IG5ldyB2ZXJ0ZXhfMS5WZXJ0ZXgoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2LnggPSB4O1xuICAgICAgICAgICAgdi55ID0geTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlRWRnZSA9IGZ1bmN0aW9uIChsU2l0ZSwgclNpdGUsIHZhLCB2Yikge1xuICAgICAgICBpZiAodmEgPT09IHZvaWQgMCkgeyB2YSA9IG51bGw7IH1cbiAgICAgICAgaWYgKHZiID09PSB2b2lkIDApIHsgdmIgPSBudWxsOyB9XG4gICAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlSnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgZWRnZSA9IG5ldyBlZGdlXzEuRWRnZShsU2l0ZSwgclNpdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWRnZS5sU2l0ZSA9IGxTaXRlO1xuICAgICAgICAgICAgZWRnZS5yU2l0ZSA9IHJTaXRlO1xuICAgICAgICAgICAgZWRnZS52YSA9IGVkZ2UudmIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgaWYgKHZhKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2Yikge1xuICAgICAgICAgICAgdGhpcy5zZXRFZGdlRW5kcG9pbnQoZWRnZSwgbFNpdGUsIHJTaXRlLCB2Yik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZWxsc1tsU2l0ZS5pZF0uaGFsZmVkZ2VzLnB1c2godGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBsU2l0ZSwgclNpdGUpKTtcbiAgICAgICAgdGhpcy5jZWxsc1tyU2l0ZS5pZF0uaGFsZmVkZ2VzLnB1c2godGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCByU2l0ZSwgbFNpdGUpKTtcbiAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVCb3JkZXJFZGdlID0gZnVuY3Rpb24gKGxTaXRlLCB2YSwgdmIpIHtcbiAgICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2VKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICBlZGdlID0gbmV3IGVkZ2VfMS5FZGdlKGxTaXRlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkZ2UubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UuclNpdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudmEgPSB2YTtcbiAgICAgICAgZWRnZS52YiA9IHZiO1xuICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgIHJldHVybiBlZGdlO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNldEVkZ2VTdGFydHBvaW50ID0gZnVuY3Rpb24gKGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmVydGV4KSB7XG4gICAgICAgIGlmICghZWRnZS52YSAmJiAhZWRnZS52Yikge1xuICAgICAgICAgICAgZWRnZS52YSA9IHZlcnRleDtcbiAgICAgICAgICAgIGVkZ2UubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UuclNpdGUgPSByU2l0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGdlLmxTaXRlID09PSByU2l0ZSkge1xuICAgICAgICAgICAgZWRnZS52YiA9IHZlcnRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkZ2UudmEgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNldEVkZ2VFbmRwb2ludCA9IGZ1bmN0aW9uIChlZGdlLCBsU2l0ZSwgclNpdGUsIHZlcnRleCkge1xuICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KGVkZ2UsIHJTaXRlLCBsU2l0ZSwgdmVydGV4KTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChzaXRlKSB7XG4gICAgICAgIHZhciBiZWFjaHNlY3Rpb24gPSB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIWJlYWNoc2VjdGlvbikge1xuICAgICAgICAgICAgYmVhY2hzZWN0aW9uID0gbmV3IHJidHJlZV8xLlJCVHJlZU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBiZWFjaHNlY3Rpb24uc2l0ZSA9IHNpdGU7XG4gICAgICAgIHJldHVybiBiZWFjaHNlY3Rpb247XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5sZWZ0QnJlYWtQb2ludCA9IGZ1bmN0aW9uIChhcmMsIGRpcmVjdHJpeCkge1xuICAgICAgICB2YXIgc2l0ZSA9IGFyYy5zaXRlLCByZm9jeCA9IHNpdGUueCwgcmZvY3kgPSBzaXRlLnksIHBieTIgPSByZm9jeSAtIGRpcmVjdHJpeDtcbiAgICAgICAgaWYgKCFwYnkyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmZvY3g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxBcmMgPSBhcmMucHJldjtcbiAgICAgICAgaWYgKCFsQXJjKSB7XG4gICAgICAgICAgICByZXR1cm4gLUluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHNpdGUgPSBsQXJjLnNpdGU7XG4gICAgICAgIHZhciBsZm9jeCA9IHNpdGUueCwgbGZvY3kgPSBzaXRlLnksIHBsYnkyID0gbGZvY3kgLSBkaXJlY3RyaXg7XG4gICAgICAgIGlmICghcGxieTIpIHtcbiAgICAgICAgICAgIHJldHVybiBsZm9jeDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGwgPSBsZm9jeCAtIHJmb2N4LCBhYnkyID0gMSAvIHBieTIgLSAxIC8gcGxieTIsIGIgPSBobCAvIHBsYnkyO1xuICAgICAgICBpZiAoYWJ5Mikge1xuICAgICAgICAgICAgcmV0dXJuICgtYiArIHRoaXMuc3FydChiICogYiAtIDIgKiBhYnkyICogKGhsICogaGwgLyAoLTIgKiBwbGJ5MikgLSBsZm9jeSArIHBsYnkyIC8gMiArIHJmb2N5IC0gcGJ5MiAvIDIpKSkgLyBhYnkyICsgcmZvY3g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChyZm9jeCArIGxmb2N4KSAvIDI7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yaWdodEJyZWFrUG9pbnQgPSBmdW5jdGlvbiAoYXJjLCBkaXJlY3RyaXgpIHtcbiAgICAgICAgdmFyIHJBcmMgPSBhcmMubmV4dDtcbiAgICAgICAgaWYgKHJBcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRCcmVha1BvaW50KHJBcmMsIGRpcmVjdHJpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpdGUgPSBhcmMuc2l0ZTtcbiAgICAgICAgcmV0dXJuIHNpdGUueSA9PT0gZGlyZWN0cml4ID8gc2l0ZS54IDogSW5maW5pdHk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5kZXRhY2hCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoYmVhY2hzZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQoYmVhY2hzZWN0aW9uKTtcbiAgICAgICAgdGhpcy5iZWFjaGxpbmUucmVtb3ZlTm9kZShiZWFjaHNlY3Rpb24pO1xuICAgICAgICB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkLnB1c2goYmVhY2hzZWN0aW9uKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJlbW92ZUJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChiZWFjaHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGJlYWNoc2VjdGlvbi5jaXJjbGVFdmVudCwgeCA9IGNpcmNsZS54LCB5ID0gY2lyY2xlLnljZW50ZXIsIHZlcnRleCA9IHRoaXMuY3JlYXRlVmVydGV4KHgsIHkpLCBwcmV2aW91cyA9IGJlYWNoc2VjdGlvbi5wcmV2LCBuZXh0ID0gYmVhY2hzZWN0aW9uLm5leHQsIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zID0gW2JlYWNoc2VjdGlvbl0sIGFic19mbiA9IE1hdGguYWJzO1xuICAgICAgICB0aGlzLmRldGFjaEJlYWNoc2VjdGlvbihiZWFjaHNlY3Rpb24pO1xuICAgICAgICB2YXIgbEFyYyA9IHByZXZpb3VzO1xuICAgICAgICB3aGlsZSAobEFyYy5jaXJjbGVFdmVudCAmJlxuICAgICAgICAgICAgYWJzX2ZuKHggLSBsQXJjLmNpcmNsZUV2ZW50LngpIDwgdGhpcy5lcHMoKSAmJlxuICAgICAgICAgICAgYWJzX2ZuKHkgLSBsQXJjLmNpcmNsZUV2ZW50LnljZW50ZXIpIDwgdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgcHJldmlvdXMgPSBsQXJjLnByZXY7XG4gICAgICAgICAgICBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy51bnNoaWZ0KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hCZWFjaHNlY3Rpb24obEFyYyk7XG4gICAgICAgICAgICBsQXJjID0gcHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgICAgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMudW5zaGlmdChsQXJjKTtcbiAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgdmFyIHJBcmMgPSBuZXh0O1xuICAgICAgICB3aGlsZSAockFyYy5jaXJjbGVFdmVudCAmJlxuICAgICAgICAgICAgYWJzX2ZuKHggLSByQXJjLmNpcmNsZUV2ZW50LngpIDwgdGhpcy5lcHMoKSAmJlxuICAgICAgICAgICAgYWJzX2ZuKHkgLSByQXJjLmNpcmNsZUV2ZW50LnljZW50ZXIpIDwgdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgbmV4dCA9IHJBcmMubmV4dDtcbiAgICAgICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnB1c2gockFyYyk7XG4gICAgICAgICAgICB0aGlzLmRldGFjaEJlYWNoc2VjdGlvbihyQXJjKTtcbiAgICAgICAgICAgIHJBcmMgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnB1c2gockFyYyk7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgIHZhciBuQXJjcyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLmxlbmd0aCwgaUFyYztcbiAgICAgICAgZm9yIChpQXJjID0gMTsgaUFyYyA8IG5BcmNzOyBpQXJjKyspIHtcbiAgICAgICAgICAgIHJBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1tpQXJjXTtcbiAgICAgICAgICAgIGxBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1tpQXJjIC0gMV07XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KHJBcmMuZWRnZSwgbEFyYy5zaXRlLCByQXJjLnNpdGUsIHZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbEFyYyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zWzBdO1xuICAgICAgICByQXJjID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnNbbkFyY3MgLSAxXTtcbiAgICAgICAgckFyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgckFyYy5zaXRlLCB1bmRlZmluZWQsIHZlcnRleCk7XG4gICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5hZGRCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB2YXIgeCA9IHNpdGUueCwgZGlyZWN0cml4ID0gc2l0ZS55O1xuICAgICAgICB2YXIgbEFyYywgckFyYywgZHhsLCBkeHIsIG5vZGUgPSB0aGlzLmJlYWNobGluZS5yb290O1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgZHhsID0gdGhpcy5sZWZ0QnJlYWtQb2ludChub2RlLCBkaXJlY3RyaXgpIC0geDtcbiAgICAgICAgICAgIGlmIChkeGwgPiB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGR4ciA9IHggLSB0aGlzLnJpZ2h0QnJlYWtQb2ludChub2RlLCBkaXJlY3RyaXgpO1xuICAgICAgICAgICAgICAgIGlmIChkeHIgPiB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkeGwgPiAtdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IG5vZGUucHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJBcmMgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGR4ciA+IC10aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJBcmMgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gckFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdBcmMgPSB0aGlzLmNyZWF0ZUJlYWNoc2VjdGlvbihzaXRlKTtcbiAgICAgICAgdGhpcy5iZWFjaGxpbmUuaW5zZXJ0U3VjY2Vzc29yKGxBcmMsIG5ld0FyYyk7XG4gICAgICAgIGlmICghbEFyYyAmJiAhckFyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsQXJjID09PSByQXJjKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgckFyYyA9IHRoaXMuY3JlYXRlQmVhY2hzZWN0aW9uKGxBcmMuc2l0ZSk7XG4gICAgICAgICAgICB0aGlzLmJlYWNobGluZS5pbnNlcnRTdWNjZXNzb3IobmV3QXJjLCByQXJjKTtcbiAgICAgICAgICAgIG5ld0FyYy5lZGdlID0gckFyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgbmV3QXJjLnNpdGUpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxBcmMgJiYgIXJBcmMpIHtcbiAgICAgICAgICAgIG5ld0FyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgbmV3QXJjLnNpdGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsQXJjICE9PSByQXJjKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICAgICAgICAgIHZhciBsU2l0ZSA9IGxBcmMuc2l0ZSwgYXggPSBsU2l0ZS54LCBheSA9IGxTaXRlLnksIGJ4ID0gc2l0ZS54IC0gYXgsIGJ5ID0gc2l0ZS55IC0gYXksIHJTaXRlID0gckFyYy5zaXRlLCBjeCA9IHJTaXRlLnggLSBheCwgY3kgPSByU2l0ZS55IC0gYXksIGQgPSAyICogKGJ4ICogY3kgLSBieSAqIGN4KSwgaGIgPSBieCAqIGJ4ICsgYnkgKiBieSwgaGMgPSBjeCAqIGN4ICsgY3kgKiBjeSwgdmVydGV4ID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKGN5ICogaGIgLSBieSAqIGhjKSAvIGQgKyBheCwgKGJ4ICogaGMgLSBjeCAqIGhiKSAvIGQgKyBheSk7XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KHJBcmMuZWRnZSwgbFNpdGUsIHJTaXRlLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgbmV3QXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2UobFNpdGUsIHNpdGUsIHVuZGVmaW5lZCwgdmVydGV4KTtcbiAgICAgICAgICAgIHJBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShzaXRlLCByU2l0ZSwgdW5kZWZpbmVkLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmF0dGFjaENpcmNsZUV2ZW50ID0gZnVuY3Rpb24gKGFyYykge1xuICAgICAgICB2YXIgbEFyYyA9IGFyYy5wcmV2LCByQXJjID0gYXJjLm5leHQ7XG4gICAgICAgIGlmICghbEFyYyB8fCAhckFyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsU2l0ZSA9IGxBcmMuc2l0ZSwgY1NpdGUgPSBhcmMuc2l0ZSwgclNpdGUgPSByQXJjLnNpdGU7XG4gICAgICAgIGlmIChsU2l0ZSA9PT0gclNpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnggPSBjU2l0ZS54LCBieSA9IGNTaXRlLnksIGF4ID0gbFNpdGUueCAtIGJ4LCBheSA9IGxTaXRlLnkgLSBieSwgY3ggPSByU2l0ZS54IC0gYngsIGN5ID0gclNpdGUueSAtIGJ5O1xuICAgICAgICB2YXIgZCA9IDIgKiAoYXggKiBjeSAtIGF5ICogY3gpO1xuICAgICAgICBpZiAoZCA+PSAtMmUtMTIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGEgPSBheCAqIGF4ICsgYXkgKiBheSwgaGMgPSBjeCAqIGN4ICsgY3kgKiBjeSwgeCA9IChjeSAqIGhhIC0gYXkgKiBoYykgLyBkLCB5ID0gKGF4ICogaGMgLSBjeCAqIGhhKSAvIGQsIHljZW50ZXIgPSB5ICsgYnk7XG4gICAgICAgIHZhciBjaXJjbGVFdmVudCA9IHRoaXMuY2lyY2xlRXZlbnRKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFjaXJjbGVFdmVudCkge1xuICAgICAgICAgICAgY2lyY2xlRXZlbnQgPSBuZXcgcmJ0cmVlXzEuUkJUcmVlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNpcmNsZUV2ZW50LmFyYyA9IGFyYztcbiAgICAgICAgY2lyY2xlRXZlbnQuc2l0ZSA9IGNTaXRlO1xuICAgICAgICBjaXJjbGVFdmVudC54ID0geCArIGJ4O1xuICAgICAgICBjaXJjbGVFdmVudC55ID0geWNlbnRlciArIHRoaXMuc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgY2lyY2xlRXZlbnQueWNlbnRlciA9IHljZW50ZXI7XG4gICAgICAgIGFyYy5jaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50O1xuICAgICAgICB2YXIgcHJlZGVjZXNzb3IgPSBudWxsLCBub2RlID0gdGhpcy5jaXJjbGVFdmVudHMucm9vdDtcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChjaXJjbGVFdmVudC55IDwgbm9kZS55IHx8IChjaXJjbGVFdmVudC55ID09PSBub2RlLnkgJiYgY2lyY2xlRXZlbnQueCA8PSBub2RlLngpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZGVjZXNzb3IgPSBub2RlLnByZXY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZGVjZXNzb3IgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaXJjbGVFdmVudHMuaW5zZXJ0U3VjY2Vzc29yKHByZWRlY2Vzc29yLCBjaXJjbGVFdmVudCk7XG4gICAgICAgIGlmICghcHJlZGVjZXNzb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5kZXRhY2hDaXJjbGVFdmVudCA9IGZ1bmN0aW9uIChhcmMpIHtcbiAgICAgICAgdmFyIGNpcmNsZUV2ZW50ID0gYXJjLmNpcmNsZUV2ZW50O1xuICAgICAgICBpZiAoY2lyY2xlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghY2lyY2xlRXZlbnQucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cy5yZW1vdmVOb2RlKGNpcmNsZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlRXZlbnRKdW5reWFyZC5wdXNoKGNpcmNsZUV2ZW50KTtcbiAgICAgICAgICAgIGFyYy5jaXJjbGVFdmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNvbm5lY3RFZGdlID0gZnVuY3Rpb24gKGVkZ2UsIGJib3gpIHtcbiAgICAgICAgdmFyIHZiID0gZWRnZS52YjtcbiAgICAgICAgaWYgKCEhdmIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YSA9IGVkZ2UudmEsIHhsID0gYmJveC54bCwgeHIgPSBiYm94LnhyLCB5dCA9IGJib3gueXQsIHliID0gYmJveC55YiwgbFNpdGUgPSBlZGdlLmxTaXRlLCByU2l0ZSA9IGVkZ2UuclNpdGUsIGx4ID0gbFNpdGUueCwgbHkgPSBsU2l0ZS55LCByeCA9IHJTaXRlLngsIHJ5ID0gclNpdGUueSwgZnggPSAobHggKyByeCkgLyAyLCBmeSA9IChseSArIHJ5KSAvIDIsIGZtLCBmYjtcbiAgICAgICAgdGhpcy5jZWxsc1tsU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2VsbHNbclNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICBpZiAocnkgIT09IGx5KSB7XG4gICAgICAgICAgICBmbSA9IChseCAtIHJ4KSAvIChyeSAtIGx5KTtcbiAgICAgICAgICAgIGZiID0gZnkgLSBmbSAqIGZ4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZnggPCB4bCB8fCBmeCA+PSB4cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChseCA+IHJ4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55ID49IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55ID4geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGZ4LCB5dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm0gPCAtMSB8fCBmbSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChseCA+IHJ4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeXQgLSBmYikgLyBmbSwgeXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55ID49IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeWIgLSBmYikgLyBmbSwgeWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55ID4geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeWIgLSBmYikgLyBmbSwgeWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KCh5dCAtIGZiKSAvIGZtLCB5dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobHkgPCByeSkge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueCA8IHhsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeGwsIGZtICogeGwgKyBmYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnggPj0geHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBmbSAqIHhyICsgZmIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS54ID4geHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgZm0gKiB4ciArIGZiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueCA8IHhsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgZm0gKiB4bCArIGZiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlZGdlLnZhID0gdmE7XG4gICAgICAgIGVkZ2UudmIgPSB2YjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jbGlwRWRnZSA9IGZ1bmN0aW9uIChlZGdlLCBiYm94KSB7XG4gICAgICAgIHZhciBheCA9IGVkZ2UudmEueCwgYXkgPSBlZGdlLnZhLnksIGJ4ID0gZWRnZS52Yi54LCBieSA9IGVkZ2UudmIueSwgdDAgPSAwLCB0MSA9IDEsIGR4ID0gYnggLSBheCwgZHkgPSBieSAtIGF5O1xuICAgICAgICB2YXIgcSA9IGF4IC0gYmJveC54bDtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAtcSAvIGR4O1xuICAgICAgICBpZiAoZHggPCAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHEgPSBiYm94LnhyIC0gYXg7XG4gICAgICAgIGlmIChkeCA9PT0gMCAmJiBxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBxIC8gZHg7XG4gICAgICAgIGlmIChkeCA8IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR4ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPCB0MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyIDwgdDEpIHtcbiAgICAgICAgICAgICAgICB0MSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcSA9IGF5IC0gYmJveC55dDtcbiAgICAgICAgaWYgKGR5ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgciA9IC1xIC8gZHk7XG4gICAgICAgIGlmIChkeSA8IDApIHtcbiAgICAgICAgICAgIGlmIChyIDwgdDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA8IHQxKSB7XG4gICAgICAgICAgICAgICAgdDEgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcSA9IGJib3gueWIgLSBheTtcbiAgICAgICAgaWYgKGR5ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHEgLyBkeTtcbiAgICAgICAgaWYgKGR5IDwgMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHkgPiAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodDAgPiAwKSB7XG4gICAgICAgICAgICBlZGdlLnZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoYXggKyB0MCAqIGR4LCBheSArIHQwICogZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0MSA8IDEpIHtcbiAgICAgICAgICAgIGVkZ2UudmIgPSB0aGlzLmNyZWF0ZVZlcnRleChheCArIHQxICogZHgsIGF5ICsgdDEgKiBkeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQwID4gMCB8fCB0MSA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbZWRnZS5sU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2VkZ2UuclNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY2xpcEVkZ2VzID0gZnVuY3Rpb24gKGJib3gpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5lZGdlcywgaUVkZ2UgPSBlZGdlcy5sZW5ndGgsIGVkZ2UsIGFic19mbiA9IE1hdGguYWJzO1xuICAgICAgICB3aGlsZSAoaUVkZ2UtLSkge1xuICAgICAgICAgICAgZWRnZSA9IGVkZ2VzW2lFZGdlXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25uZWN0RWRnZShlZGdlLCBiYm94KSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmNsaXBFZGdlKGVkZ2UsIGJib3gpIHx8XG4gICAgICAgICAgICAgICAgKGFic19mbihlZGdlLnZhLnggLSBlZGdlLnZiLngpIDwgdGhpcy5lcHMoKSAmJiBhYnNfZm4oZWRnZS52YS55IC0gZWRnZS52Yi55KSA8IHRoaXMuZXBzKCkpKSB7XG4gICAgICAgICAgICAgICAgZWRnZS52YSA9IGVkZ2UudmIgPSBudWxsO1xuICAgICAgICAgICAgICAgIGVkZ2VzLnNwbGljZShpRWRnZSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNsb3NlQ2VsbHMgPSBmdW5jdGlvbiAoYmJveCkge1xuICAgICAgICB2YXIgeGwgPSBiYm94LnhsLCB4ciA9IGJib3gueHIsIHl0ID0gYmJveC55dCwgeWIgPSBiYm94LnliLCBjZWxscyA9IHRoaXMuY2VsbHMsIGlDZWxsID0gY2VsbHMubGVuZ3RoLCBjZWxsLCBpTGVmdCwgaGFsZmVkZ2VzLCBuSGFsZmVkZ2VzLCBlZGdlLCB2YSwgdmIsIHZ6LCBsYXN0Qm9yZGVyU2VnbWVudCwgYWJzX2ZuID0gTWF0aC5hYnM7XG4gICAgICAgIHdoaWxlIChpQ2VsbC0tKSB7XG4gICAgICAgICAgICBjZWxsID0gY2VsbHNbaUNlbGxdO1xuICAgICAgICAgICAgaWYgKCFjZWxsLnByZXBhcmVIYWxmZWRnZXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjZWxsLmNsb3NlTWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbGZlZGdlcyA9IGNlbGwuaGFsZmVkZ2VzO1xuICAgICAgICAgICAgbkhhbGZlZGdlcyA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgICAgICBpTGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaUxlZnQgPCBuSGFsZmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgdmEgPSBoYWxmZWRnZXNbaUxlZnRdLmdldEVuZHBvaW50KCk7XG4gICAgICAgICAgICAgICAgdnogPSBoYWxmZWRnZXNbKGlMZWZ0ICsgMSkgJSBuSGFsZmVkZ2VzXS5nZXRTdGFydHBvaW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19mbih2YS54IC0gdnoueCkgPj0gdGhpcy5lcHMoKSB8fCBhYnNfZm4odmEueSAtIHZ6LnkpID49IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS54LCB4bCkgJiYgdGhpcy5sZXNzVGhhbldpdGhFcHNpbG9uKHZhLnksIHliKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odmEueSwgeWIpICYmIHRoaXMubGVzc1RoYW5XaXRoRXBzaWxvbih2YS54LCB4cik6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueSwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgobGFzdEJvcmRlclNlZ21lbnQgPyB2ei54IDogeHIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZhLngsIHhyKSAmJiB0aGlzLmdyZWF0ZXJUaGFuV2l0aEVwc2lsb24odmEueSwgeXQpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS55LCB5dCkgJiYgdGhpcy5ncmVhdGVyVGhhbldpdGhFcHNpbG9uKHZhLngsIHhsKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei55LCB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnggOiB4bCwgeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhsLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueSwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgobGFzdEJvcmRlclNlZ21lbnQgPyB2ei54IDogeHIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJWb3Jvbm9pLmNsb3NlQ2VsbHMoKSA+IHRoaXMgbWFrZXMgbm8gc2Vuc2UhXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuY2xvc2VNZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVm9yb25vaTtcbn0oKSk7XG5leHBvcnRzLlZvcm9ub2kgPSBWb3Jvbm9pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm9yb25vaS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBwa2cgZnJvbSBcInZvcm9ub2lqc1wiO1xuZXhwb3J0IGNvbnN0IGNhbGNWb3Jvbm9pID0gKHBvaW50cykgPT4ge1xuICAgIGNvbnN0IHZvcm9ub2kgPSBuZXcgcGtnLlZvcm9ub2koKTtcbiAgICBsZXQgbWluX3ggPSAwO1xuICAgIGxldCBtYXhfeCA9IDA7XG4gICAgbGV0IG1pbl95ID0gMDtcbiAgICBsZXQgbWF4X3kgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgaWYgKHBvaW50LnggPCBtaW5feClcbiAgICAgICAgICAgIG1pbl94ID0gcG9pbnQueDtcbiAgICAgICAgaWYgKHBvaW50LnggPiBtYXhfeClcbiAgICAgICAgICAgIG1heF94ID0gcG9pbnQueDtcbiAgICAgICAgaWYgKHBvaW50LnkgPCBtaW5feSlcbiAgICAgICAgICAgIG1pbl95ID0gcG9pbnQueTtcbiAgICAgICAgaWYgKHBvaW50LnkgPiBtYXhfeSlcbiAgICAgICAgICAgIG1heF95ID0gcG9pbnQueTtcbiAgICB9XG4gICAgbGV0IGJib3ggPSB7IHhsOiBtaW5feCwgeHI6IG1heF94LCB5dDogbWluX3ksIHliOiBtYXhfeSB9O1xuICAgIHJldHVybiB2b3Jvbm9pLmNvbXB1dGUocG9pbnRzLCBiYm94KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gc2hhcGVGcm9tRWRnZXMoZWRnZXMpIHtcbiAgICBpZiAoIWVkZ2VzIHx8IGVkZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGZpcnN0X2VkZ2UgPSBlZGdlcy5zaGlmdCgpO1xuICAgIGxldCBzdGFydCA9IGZpcnN0X2VkZ2UuZ2V0U3RhcnRwb2ludCgpO1xuICAgIGxldCBlbmQgPSBmaXJzdF9lZGdlLmdldEVuZHBvaW50KCk7XG4gICAgcmVzdWx0LnB1c2goYE0gJHtzdGFydC54fSAke3N0YXJ0Lnl9YCk7XG4gICAgcmVzdWx0LnB1c2goYEwgJHtlbmQueH0gJHtlbmQueX1gKTtcbiAgICBmb3IgKGxldCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgICAgIGxldCBlbmQgPSBlZGdlLmdldEVuZHBvaW50KCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGBMICR7ZW5kLnh9ICR7ZW5kLnl9YCk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKFwiWlwiKTtcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhlbWljeWNsZShyYWRpdXMsIHJvd3MsIHBvaW50cywgYW5nbGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IHRvdGFsQXJjTGVuZ3RoID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGFyYyBsZW5ndGhcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAtIGkgKiByYWRpdXMgLyByb3dzO1xuICAgICAgICBjb25zdCBhcmNMZW5ndGggPSBhbmdsZSAvIDE4MCAqIE1hdGguUEkgKiByO1xuICAgICAgICB0b3RhbEFyY0xlbmd0aCArPSBhcmNMZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IHRvdGFsQXJjTGVuZ3RoIC8gcG9pbnRzO1xuICAgIC8vIGNvbnNvbGUubG9nKHt0b3RhbEFyY0xlbmd0aCwgZGlzdGFuY2VCZXR3ZWVuUG9pbnRzfSlcbiAgICBsZXQgdG90YWxfcG9pbnRzID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBvaW50c1xuICAgIGxldCBhID0gMDtcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAtIGkgKiByYWRpdXMgLyByb3dzO1xuICAgICAgICBjb25zdCBhcmNMZW5ndGggPSBhbmdsZSAvIDE4MCAqIE1hdGguUEkgKiByO1xuICAgICAgICBsZXQgcG9pbnRzSW5BcmMgPSBNYXRoLmNlaWwoYXJjTGVuZ3RoIC8gZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKTtcbiAgICAgICAgaWYgKHRvdGFsX3BvaW50cyArIHBvaW50c0luQXJjID4gcG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludHNJbkFyYyA9IHBvaW50cyAtIHRvdGFsX3BvaW50cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyA9IGFyY0xlbmd0aCAvIHBvaW50c0luQXJjO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAoYW5nbGUgLSAxODApIC8gMTgwICogTWF0aC5QSSAvIDI7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRzSW5BcmM7IGorKykge1xuICAgICAgICAgICAgdG90YWxfcG9pbnRzKys7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IChqICogbG9jYWxEaXN0YW5jZUJldHdlZW5Qb2ludHMgLyByKSArIChsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyAvIHIgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAtciAqIE1hdGguY29zKGFuZ2xlIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAtciAqIE1hdGguc2luKGFuZ2xlIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaWQ6IGksIHgsIHksIGEsIGFuZ2xlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGErKztcbiAgICB9XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEuYW5nbGUgLSBiLmFuZ2xlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiPHNjcmlwdD5pbXBvcnQgeyBjYWxjVm9yb25vaSwgc2hhcGVGcm9tRWRnZXMgfSBmcm9tIFwiLi9saWJzL3Zvcm9ub2lcIjtcbmltcG9ydCB7IGhlbWljeWNsZSB9IGZyb20gXCIuL2xpYnMvaGVtaWN5Y2xlXCI7XG5leHBvcnQgbGV0IGRhdGEgPSBbXTtcbmV4cG9ydCBsZXQgciA9IDMwMDtcbmV4cG9ydCBsZXQgcm93cyA9IDEyO1xuZXhwb3J0IGxldCBkb3RzaXplID0gNTtcbmV4cG9ydCBsZXQgcGFkZGluZyA9IDEwO1xuZXhwb3J0IGxldCB0b3RhbF9zZWF0cztcbmV4cG9ydCBsZXQgY29sb3IgPSBcIndoaXRlXCI7XG5leHBvcnQgbGV0IGZvbnRfc2l6ZSA9IDEyO1xuZXhwb3J0IGxldCBhcmMgPSAxODA7XG5leHBvcnQgbGV0IHRleHRfcG9zaXRpb24gPSBudWxsO1xuZXhwb3J0IGxldCBzZWxlY3RlZFNoYXBlID0gXCJjaXJjbGVcIjtcbmV4cG9ydCBsZXQgZGlzcGxheSA9IFtcInBvaW50c1wiLCBcInRleHRcIl07XG5leHBvcnQgbGV0IGN1cnJlbnRfcGFydHkgPSBudWxsO1xubGV0IHRvdGFsX29jY3VwaWVkX3NlYXRzID0gMDtcbmxldCBwb2ludHMgPSBbXTtcbmxldCB2b3Jvbm9pID0gbnVsbDtcbmxldCBjbGlja2VkID0gZmFsc2U7XG5sZXQgdG9wX3BhZGRpbmcgPSAwO1xubGV0IGJvdHRvbV9wYWRkaW5nID0gMDtcbmxldCBsZWZ0X3BhZGRpbmcgPSAwO1xubGV0IHJpZ2h0X3BhZGRpbmcgPSAwO1xubGV0IHN2Z1dpZHRoID0gMDtcbmxldCBzdmdIZWlnaHQgPSAwO1xubGV0IGhleGFnb25TaGFwZSA9IFwiTTg2LjYwMjU0MDM3ODQ0Mzg2IDEyTDE3My4yMDUwODA3NTY4ODc3MiA1MEwxNzMuMjA1MDgwNzU2ODg3NzIgMTUwTDg2LjYwMjU0MDM3ODQ0Mzg2IDIwMEwwIDE1MEwwIDUwWlwiO1xuJDoge1xuICBpZiAoYXJjIDwgMTApXG4gICAgYXJjID0gMTA7XG4gIGlmIChhcmMgPiAzNjApXG4gICAgYXJjID0gMzYwO1xuICBjYWxjUGFkZGluZygpO1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcbiAgdG90YWxfb2NjdXBpZWRfc2VhdHMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5jb3VudCwgMCk7XG4gIHBvaW50cyA9IGhlbWljeWNsZShyLCByb3dzLCB0b3RhbF9zZWF0cywgYXJjKTtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uY291bnQ7IGorKykge1xuICAgICAgcG9pbnRzW3hdLmRhdGEgPSBkYXRhW2ldO1xuICAgICAgeCsrO1xuICAgIH1cbiAgfVxuICB2b3Jvbm9pID0gY2FsY1Zvcm9ub2kocG9pbnRzKTtcbiAgc3ZnV2lkdGggPSByICogMiArIGxlZnRfcGFkZGluZyArIHJpZ2h0X3BhZGRpbmc7XG4gIHN2Z0hlaWdodCA9IHIgKiAyICsgdG9wX3BhZGRpbmcgKyBib3R0b21fcGFkZGluZztcbn1cbmZ1bmN0aW9uIGNhbGNQYWRkaW5nKCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYWRkaW5nKSkge1xuICAgIGlmIChwYWRkaW5nLmxlbmd0aCA9PT0gMikge1xuICAgICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgYm90dG9tX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgbGVmdF9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nWzFdO1xuICAgIH0gZWxzZSBpZiAocGFkZGluZy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRvcF9wYWRkaW5nID0gcGFkZGluZ1swXTtcbiAgICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIGxlZnRfcGFkZGluZyA9IHBhZGRpbmdbMl07XG4gICAgICByaWdodF9wYWRkaW5nID0gcGFkZGluZ1szXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZztcbiAgICBsZWZ0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICB9XG59XG5mdW5jdGlvbiBzZWxlY3RQYXJ0eShwb2ludCkge1xuICBpZiAocG9pbnQuZGF0YSAmJiAhY2xpY2tlZClcbiAgICBjdXJyZW50X3BhcnR5ID0gcG9pbnQuZGF0YTtcbn1cbmZ1bmN0aW9uIGNsaWNrUGFydHkocG9pbnQpIHtcbiAgaWYgKCFwb2ludC5kYXRhKVxuICAgIHJldHVybjtcbiAgaWYgKCFjdXJyZW50X3BhcnR5KSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IHBvaW50LmRhdGE7XG4gICAgY2xpY2tlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZCAmJiBjdXJyZW50X3BhcnR5LmlkID09PSBwb2ludC5kYXRhLmlkKSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG4gICAgY2xpY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRfcGFydHkgPSBwb2ludC5kYXRhO1xuICAgIGNsaWNrZWQgPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiB1bnNlbGVjdFBhcnR5KCkge1xuICBpZiAoIWNsaWNrZWQpXG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG59XG48L3NjcmlwdD5cblxuPG1haW4+XG4gICAgPHN2ZyB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fT5cbiAgICAgICAgPGcgaWQ9XCJhcmNzXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIChsZWZ0X3BhZGRpbmcpfSwgJHtyICsgKHRvcF9wYWRkaW5nKX0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJhcmNzXCIpfT5cbiAgICAgICAgICAgIHsjZWFjaCBBcnJheShyb3dzKSBhcyBfLCBpfVxuICAgICAgICAgICAgICAgIDwhLS0gRHJhdyBhIHNlbWljaXJjbGUgZm9yIGVhY2ggcm93IC0tPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNICR7ciAtIChpICogKHIgLyByb3dzKSl9LDAgQSAke3IgLSAoaSAqIChyIC8gcm93cykpfSwke3IgLSAoaSAqIChyIC8gcm93cykpfSAwIDAsMCAkey0ociAtIChpICogKHIgLyByb3dzKSkpfSwwYH0gZmlsbD1cInRyYW5zcGFyZW50XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxXCIgb3BhY2l0eT1cIjAuNFwiIC8+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJwb2ludHNcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgKGxlZnRfcGFkZGluZyl9LCAke3IgKyAodG9wX3BhZGRpbmcpfSlgfSBjbGFzczpoaWRlPXshZGlzcGxheS5pbmNsdWRlcyhcInBvaW50c1wiKX0+XG4gICAgICAgICAgICB7I2VhY2ggcG9pbnRzIGFzIHBvaW50fVxuICAgICAgICAgICAgICAgIHsjaWYgc2VsZWN0ZWRTaGFwZSA9PT0gJ2hleGFnb24nfVxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD17aGV4YWdvblNoYXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cG9pbnQueH0sJHtwb2ludC55fSkgcm90YXRlKC01KSBzY2FsZSgwLjA3KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcnR5PXtwb2ludC5kYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3BvaW50LmRhdGE/LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWQgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWQgPyAxIDogMC41IDogMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGFydHk9e3BvaW50LmRhdGE/LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3g9e3BvaW50Lnh9IGN5PXtwb2ludC55fVxuICAgICAgICAgICAgICAgICAgICAgICAgcj17ZG90c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3BvaW50LmRhdGE/LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWQgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWQgPyAxIDogMC41IDogMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwibnVtYmVyc1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3IgKyAobGVmdF9wYWRkaW5nKX0sICR7ciArICh0b3BfcGFkZGluZyl9KWB9IGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwibnVtYmVyc1wiKX0+XG4gICAgICAgICAgICB7I2VhY2ggcG9pbnRzIGFzIHBvaW50LCBpfVxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9e3BvaW50Lnh9IHk9e3BvaW50Lnl9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPnsgYCR7aX1gIH08L3RleHQ+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJ2b3Jvbm9pXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIGxlZnRfcGFkZGluZ30sICR7ciArIHRvcF9wYWRkaW5nfSlgfT5cbiAgICAgICAgICAgIDwhLS0gRHJhdyBWb3Jvbm9pIC0tPlxuICAgICAgICAgICAgeyNlYWNoIHZvcm9ub2kuY2VsbHMgYXMgY2VsbCwgaX1cbiAgICAgICAgICAgICAgICB7I2lmIChjZWxsLmhhbGZlZGdlcz8ubGVuZ3RoID4gMCl9XG4gICAgICAgICAgICAgICAgPHBhdGggXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidm9yb25vaV9wYXRoXCIgXG4gICAgICAgICAgICAgICAgICAgIGQ9e3NoYXBlRnJvbUVkZ2VzKGNlbGwuaGFsZmVkZ2VzKS50b1N0cmluZygpfSBcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCIgXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17ZGlzcGxheS5pbmNsdWRlcyhcInZvcm9ub2lcIikgPyBcIndoaXRlXCIgOiBcInRyYW5zcGFyZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD17ZGlzcGxheS5pbmNsdWRlcyhcInZvcm9ub2lcIikgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgb246bW91c2VvdmVyPXsoKSA9PiB7c2VsZWN0UGFydHkoY2VsbC5zaXRlKTt9fSBcbiAgICAgICAgICAgICAgICAgICAgb246Zm9jdXM9eygpID0+IHNlbGVjdFBhcnR5KGNlbGwuc2l0ZSl9IG9uOm1vdXNlb3V0PXsoKSA9PiB1bnNlbGVjdFBhcnR5KCl9IFxuICAgICAgICAgICAgICAgICAgICBvbjpibHVyPXsoKSA9PiB1bnNlbGVjdFBhcnR5KCl9IHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHsgY2xpY2tQYXJ0eShjZWxsLnNpdGUpfX1cbiAgICAgICAgICAgICAgICAgICAgb246a2V5cHJlc3M9eyhlKSA9PiB7aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtjbGlja1BhcnR5KGNlbGwuc2l0ZSk7fX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwidGV4dFwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3RleHRfcG9zaXRpb24/LnggfHwgciArIGxlZnRfcGFkZGluZ30sICR7dGV4dF9wb3NpdGlvbj8ueSB8fCByICsgdG9wX3BhZGRpbmcgKyAyMH0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJ0ZXh0XCIpfT5cbiAgICAgICAgICAgIDwhLS0gSW5wdXQgdGV4dCBkYXRhIC0tPlxuICAgICAgICAgICAgeyNpZiAoY3VycmVudF9wYXJ0eSl9XG4gICAgICAgICAgICA8dGV4dCB4PXswfSB5PXswfSB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9e2NvbG9yfSBmb250LXNpemU9e2ZvbnRfc2l6ZX0+e2Ake2N1cnJlbnRfcGFydHkudGV4dH1gfTwvdGV4dD5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJyZWZlcmVuY2VQb2ludHNcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgKGxlZnRfcGFkZGluZyl9LCAke3IgKyAodG9wX3BhZGRpbmcpfSlgfSBjbGFzczpoaWRlPXshZGlzcGxheS5pbmNsdWRlcyhcInJlZmVyZW5jZVBvaW50c1wiKX0+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PTAgeT0xMCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj4wLCAwPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9MCBjeT0wIHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD17cn0geT0xMCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj57YCR7cn0sICR7MH1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17MH0gcj0yIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtyIC0gMTB9IHk9ey1yICsgMTB9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPntgJHtyfSwgJHstcn1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17LXJ9IHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD17LXIgKyAxMH0geT17LXIgKyAxMH0gdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+e2AtJHtyfSwgJHstcn1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXstcn0gY3k9ey1yfSByPTIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGNsYXNzPVwicmVmZXJlbmNlX3BvaW50c1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9ey1yfSB5PXsxMH0gdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+e2AtJHtyfSwgJHswfWB9PC90ZXh0PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ey1yfSBjeT17MH0gcj0yIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbjwvbWFpbj5cblxuPHN0eWxlPlxuXG4gICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IEhlbWljeWNsZSBmcm9tICdzdmVsdGUtaGVtaWN5Y2xlJztcblxuXHRleHBvcnQgbGV0IHZpc3VhbGlzYXRpb24gPSAnaGVtaWN5Y2xlJztcblx0bGV0IGRhdGEgPSBbXVxuXHRjb25zdCBjb2xvdXJzID0gW1xuXHRcdFwiI0ZGMDAwMFwiLFxuXHRcdFwiIzAwMDBGRlwiLFxuXHRcdFwiIzAwODAwMFwiLFxuXHRcdFwiI0ZGQTUwMFwiLFxuXHRcdFwiI0ZGRkYwMFwiLFxuXHRcdFwiIzgwMDA4MFwiLFxuXHRcdFwiI0ZGQzBDQlwiLFxuXHRcdFwiIzAwRkZGRlwiLFxuXHRcdFwiI0ZGMDBGRlwiLFxuXHRcdFwiIzAwMDAwMFwiLFxuXHRcdFwiIzgwODA4MFwiLFxuXHRcdFwiIzgwMDAwMFwiLFxuXHRcdFwiIzAwODA4MFwiLFxuXHRcdFwiIzgwMDA4MFwiLFxuXHRcdFwiIzAwMDA4MFwiLFxuXHRcdFwiIzgwODAwMFwiLFxuXHRcdFwiIzAwODAwMFwiXG5cdF1cblx0Y29uc3QgdG90YWxfc2VhdHMgPSA0MDA7XG5cdGNvbnN0IHJvd3M9IDEyO1xuXHRvbk1vdW50KGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBsaXZlX3Jlc3VsdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaWVjLWFwaS5yZXZlbmdpbmUuZGFpbHltYXZlcmljay5jby56YS9yZXN1bHRzL3NlYXRzL25hdGlvbmFsLzIwMTlcIik7XG5cdFx0Y29uc3QgbGl2ZV9yZXN1bHRzX2pzb24gPSBhd2FpdCBsaXZlX3Jlc3VsdHMuanNvbigpO1xuXHRcdGRhdGEgPSBsaXZlX3Jlc3VsdHNfanNvbi5wYXJ0eVJlc3VsdHMubWFwKChwYXJ0eSwgaWQpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkOiBpZCxcblx0XHRcdFx0dGV4dDogcGFydHkuQWJicmV2aWF0aW9uLFxuXHRcdFx0XHRjb3VudDogcGFydHkuU2VhdHMsXG5cdFx0XHRcdGNvbG9yOiBjb2xvdXJzW2lkXSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH0pO1xuPC9zY3JpcHQ+XG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwiaGVtaWN5Y2xlXCJ9XG5cdDxIZW1pY3ljbGUge2RhdGF9IHt0b3RhbF9zZWF0c30ge3Jvd3N9IC8+XG57L2lmfVxuXG4iLCIvLyBpbXBvcnQgJy4vYXBwLmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuc3ZlbHRlJ1xuY29uc29sZS5sb2coXCJBcHBcIilcbi8vIEdldCBcImlkXCIgYXR0cmlidXRlIGZyb20gdGhlIGRpdiBlbGVtZW50IGluIHRoZSBibG9ja1xualF1ZXJ5KCgpID0+IHtcblx0Y29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay10ZW5sYXllci1lbGVjdGlvbi1lbmdpbmUnKTtcblx0Y29uc29sZS5sb2coe3RhcmdldHN9KVxuXHR0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcblx0XHRsZXQgcHJvcHMgPSB7XG5cdFx0XHRpZDogdGFyZ2V0LmlkLFxuXHRcdFx0dmlzdWFsaXNhdGlvbjogdGFyZ2V0LmRhdGFzZXQudmlzdWFsaXNhdGlvbixcblx0XHRcdHNlbGVjdGVkX3llYXI6IHRhcmdldC5kYXRhc2V0LnNlbGVjdGVkX3llYXIsXG5cdFx0XHRzZWxlY3RlZF9lbGVjdGlvbjogdGFyZ2V0LmRhdGFzZXQuc2VsZWN0ZWRfZWxlY3Rpb24sXG5cdFx0XHRzZWxlY3RlZF9yZWdpb246IHRhcmdldC5kYXRhc2V0LnNlbGVjdGVkX3JlZ2lvbixcblx0XHRcdHNlbGVjdGVkX2ZpZWxkczogdGFyZ2V0LmRhdGFzZXQuc2VsZWN0ZWRfZmllbGRzLFxuXHRcdH1cblx0XHRuZXcgQXBwKHtcblx0XHRcdHRhcmdldCxcblx0XHRcdHByb3BzXG5cdFx0fSlcblx0fSlcbn0pXG4vLyBleHBvcnQgZGVmYXVsdCBhcHBcbiJdLCJuYW1lcyI6WyJub29wIiwicnVuIiwiZm4iLCJibGFua19vYmplY3QiLCJydW5fYWxsIiwiZm5zIiwiaXNfZnVuY3Rpb24iLCJ0aGluZyIsInNhZmVfbm90X2VxdWFsIiwiYSIsImIiLCJpc19lbXB0eSIsIm9iaiIsImFwcGVuZCIsInRhcmdldCIsIm5vZGUiLCJpbnNlcnQiLCJhbmNob3IiLCJkZXRhY2giLCJkZXN0cm95X2VhY2giLCJpdGVyYXRpb25zIiwiZGV0YWNoaW5nIiwiaSIsImVsZW1lbnQiLCJuYW1lIiwic3ZnX2VsZW1lbnQiLCJ0ZXh0IiwiZGF0YSIsImVtcHR5IiwibGlzdGVuIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsImF0dHIiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic2V0X2RhdGEiLCJ0b2dnbGVfY2xhc3MiLCJ0b2dnbGUiLCJjdXJyZW50X2NvbXBvbmVudCIsInNldF9jdXJyZW50X2NvbXBvbmVudCIsImNvbXBvbmVudCIsImdldF9jdXJyZW50X2NvbXBvbmVudCIsIm9uTW91bnQiLCJkaXJ0eV9jb21wb25lbnRzIiwiYmluZGluZ19jYWxsYmFja3MiLCJyZW5kZXJfY2FsbGJhY2tzIiwiZmx1c2hfY2FsbGJhY2tzIiwicmVzb2x2ZWRfcHJvbWlzZSIsInVwZGF0ZV9zY2hlZHVsZWQiLCJzY2hlZHVsZV91cGRhdGUiLCJmbHVzaCIsImFkZF9yZW5kZXJfY2FsbGJhY2siLCJzZWVuX2NhbGxiYWNrcyIsImZsdXNoaWR4Iiwic2F2ZWRfY29tcG9uZW50IiwidXBkYXRlIiwiY2FsbGJhY2siLCIkJCIsImRpcnR5IiwiZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyIsImZpbHRlcmVkIiwidGFyZ2V0cyIsImMiLCJvdXRyb2luZyIsIm91dHJvcyIsImdyb3VwX291dHJvcyIsImNoZWNrX291dHJvcyIsInRyYW5zaXRpb25faW4iLCJibG9jayIsImxvY2FsIiwidHJhbnNpdGlvbl9vdXQiLCJlbnN1cmVfYXJyYXlfbGlrZSIsImFycmF5X2xpa2Vfb3JfaXRlcmF0b3IiLCJjcmVhdGVfY29tcG9uZW50IiwibW91bnRfY29tcG9uZW50IiwiZnJhZ21lbnQiLCJhZnRlcl91cGRhdGUiLCJuZXdfb25fZGVzdHJveSIsImRlc3Ryb3lfY29tcG9uZW50IiwibWFrZV9kaXJ0eSIsImluaXQiLCJpbnN0YW5jZSIsImNyZWF0ZV9mcmFnbWVudCIsIm5vdF9lcXVhbCIsInByb3BzIiwiYXBwZW5kX3N0eWxlcyIsInBhcmVudF9jb21wb25lbnQiLCJyZWFkeSIsInJldCIsInJlc3QiLCJub2RlcyIsIlN2ZWx0ZUNvbXBvbmVudCIsIl9fcHVibGljRmllbGQiLCJ0eXBlIiwiY2FsbGJhY2tzIiwiaW5kZXgiLCJQVUJMSUNfVkVSU0lPTiIsInJidHJlZSIsIlJCVHJlZSIsInN1Y2Nlc3NvciIsInBhcmVudCIsImdyYW5kcGEiLCJ1bmNsZSIsImxlZnQiLCJyaWdodCIsIm5leHQiLCJpc1JlZCIsInNpYmxpbmciLCJwIiwicSIsIlJCVHJlZU5vZGUiLCJ2ZXJ0ZXgiLCJWZXJ0ZXgiLCJ4IiwieSIsImVkZ2UiLCJFZGdlIiwibFNpdGUiLCJyU2l0ZSIsImNlbGwiLCJDZWxsIiwic2l0ZSIsImhhbGZlZGdlcyIsImlIYWxmZWRnZSIsIm5laWdoYm9ycyIsInhtaW4iLCJ5bWluIiwieG1heCIsInltYXgiLCJ2IiwidngiLCJ2eSIsImhhbGZlZGdlIiwicDAiLCJwMSIsInIiLCJkaWFncmFtIiwiRGlhZ3JhbSIsIkhhbGZlZGdlIiwidmEiLCJ2YiIsInZvcm9ub2kiLCJyYnRyZWVfMSIsInJlcXVpcmUkJDAiLCJ2ZXJ0ZXhfMSIsInJlcXVpcmUkJDEiLCJlZGdlXzEiLCJyZXF1aXJlJCQyIiwiY2VsbF8xIiwicmVxdWlyZSQkMyIsImRpYWdyYW1fMSIsInJlcXVpcmUkJDQiLCJoYWxmZWRnZV8xIiwicmVxdWlyZSQkNSIsIlZvcm9ub2kiLCJzaXRlcyIsImJib3giLCJzdGFydFRpbWUiLCJzaXRlRXZlbnRzIiwic2l0ZWlkIiwieHNpdGV4IiwieHNpdGV5IiwiY2VsbHMiLCJjaXJjbGUiLCJzdG9wVGltZSIsImVwcyIsIm4iLCJiZWFjaHNlY3Rpb24iLCJhcmMiLCJkaXJlY3RyaXgiLCJyZm9jeCIsInJmb2N5IiwicGJ5MiIsImxBcmMiLCJsZm9jeCIsImxmb2N5IiwicGxieTIiLCJobCIsImFieTIiLCJyQXJjIiwicHJldmlvdXMiLCJkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucyIsImFic19mbiIsIm5BcmNzIiwiaUFyYyIsImR4bCIsImR4ciIsIm5ld0FyYyIsImF4IiwiYXkiLCJieCIsImJ5IiwiY3giLCJjeSIsImQiLCJoYiIsImhjIiwiY1NpdGUiLCJoYSIsInljZW50ZXIiLCJjaXJjbGVFdmVudCIsInByZWRlY2Vzc29yIiwieGwiLCJ4ciIsInl0IiwieWIiLCJseCIsImx5IiwicngiLCJyeSIsImZ4IiwiZnkiLCJmbSIsImZiIiwidDAiLCJ0MSIsImR4IiwiZHkiLCJlZGdlcyIsImlFZGdlIiwiaUNlbGwiLCJpTGVmdCIsIm5IYWxmZWRnZXMiLCJ2eiIsImxhc3RCb3JkZXJTZWdtZW50IiwiVm9yb25vaV8xIiwiY2FsY1Zvcm9ub2kiLCJwb2ludHMiLCJwa2cuVm9yb25vaSIsIm1pbl94IiwibWF4X3giLCJtaW5feSIsIm1heF95IiwicG9pbnQiLCJzaGFwZUZyb21FZGdlcyIsInJlc3VsdCIsImZpcnN0X2VkZ2UiLCJzdGFydCIsImVuZCIsImhlbWljeWNsZSIsInJhZGl1cyIsInJvd3MiLCJhbmdsZSIsInRvdGFsQXJjTGVuZ3RoIiwiYXJjTGVuZ3RoIiwiZGlzdGFuY2VCZXR3ZWVuUG9pbnRzIiwidG90YWxfcG9pbnRzIiwicG9pbnRzSW5BcmMiLCJsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyIsIm9mZnNldCIsImoiLCJwYXRoIiwicGF0aF9kX3ZhbHVlIiwiY3R4IiwiX2EiLCJfYiIsIl9jIiwiX2QiLCJfZSIsImNpcmNsZV9jeF92YWx1ZSIsImNpcmNsZV9jeV92YWx1ZSIsImNpcmNsZV9vcGFjaXR5X3ZhbHVlIiwiaGV4YWdvblNoYXBlIiwicGF0aF90cmFuc2Zvcm1fdmFsdWUiLCJwYXRoX29wYWNpdHlfdmFsdWUiLCJjcmVhdGVfaWZfYmxvY2tfMiIsInRleHRfMSIsInRleHRfMV94X3ZhbHVlIiwidGV4dF8xX3lfdmFsdWUiLCJwYXRoX3N0cm9rZV93aWR0aF92YWx1ZSIsImlmX2Jsb2NrIiwiY3JlYXRlX2lmX2Jsb2NrXzEiLCJ0X3ZhbHVlIiwidCIsInQxX3ZhbHVlIiwidDJfdmFsdWUiLCJ0M192YWx1ZSIsInQ0X3ZhbHVlIiwiZWFjaF92YWx1ZV8zIiwiZWFjaF92YWx1ZSIsImNyZWF0ZV9pZl9ibG9jayIsImcwIiwiZzBfdHJhbnNmb3JtX3ZhbHVlIiwiZzEiLCJnMV90cmFuc2Zvcm1fdmFsdWUiLCJnMiIsImcyX3RyYW5zZm9ybV92YWx1ZSIsImczIiwiZzNfdHJhbnNmb3JtX3ZhbHVlIiwiZzQiLCJnNF90cmFuc2Zvcm1fdmFsdWUiLCJ0ZXh0MiIsInRleHQyX3hfdmFsdWUiLCJ0ZXh0Ml95X3ZhbHVlIiwidGV4dDMiLCJ0ZXh0M194X3ZhbHVlIiwidGV4dDNfeV92YWx1ZSIsImcxMCIsImcxMF90cmFuc2Zvcm1fdmFsdWUiLCJtYWluIiwic3ZnIiwiZzUiLCJ0ZXh0MCIsImNpcmNsZTAiLCJnNiIsInRleHQxIiwiY2lyY2xlMSIsImc3IiwiY2lyY2xlMiIsImc4IiwiY2lyY2xlMyIsImc5IiwidGV4dDQiLCJjaXJjbGU0IiwidDIiLCJ0MyIsInQ0IiwiJCRwcm9wcyIsImRvdHNpemUiLCJwYWRkaW5nIiwidG90YWxfc2VhdHMiLCJjb2xvciIsImZvbnRfc2l6ZSIsInRleHRfcG9zaXRpb24iLCJzZWxlY3RlZFNoYXBlIiwiZGlzcGxheSIsImN1cnJlbnRfcGFydHkiLCJjbGlja2VkIiwidG9wX3BhZGRpbmciLCJib3R0b21fcGFkZGluZyIsImxlZnRfcGFkZGluZyIsInJpZ2h0X3BhZGRpbmciLCJzdmdXaWR0aCIsInN2Z0hlaWdodCIsImNhbGNQYWRkaW5nIiwiJCRpbnZhbGlkYXRlIiwic2VsZWN0UGFydHkiLCJjbGlja1BhcnR5IiwidW5zZWxlY3RQYXJ0eSIsImUiLCJhY2MiLCJjdXIiLCJ2aXN1YWxpc2F0aW9uIiwiY29sb3VycyIsImxpdmVfcmVzdWx0c19qc29uIiwicGFydHkiLCJpZCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7O0FBQ08sU0FBU0EsS0FBTztBQUFFO0FBc0NsQixTQUFTQyxHQUFJQyxHQUFJO0FBQ3ZCLFNBQU9BLEVBQUU7QUFDVjtBQUVPLFNBQVNDLEtBQWU7QUFDOUIsU0FBTyx1QkFBTyxPQUFPLElBQUk7QUFDMUI7QUFNTyxTQUFTQyxHQUFRQyxHQUFLO0FBQzVCLEVBQUFBLEVBQUksUUFBUUosRUFBRztBQUNoQjtBQU1PLFNBQVNLLEdBQVlDLEdBQU87QUFDbEMsU0FBTyxPQUFPQSxLQUFVO0FBQ3pCO0FBR08sU0FBU0MsR0FBZUMsR0FBR0MsR0FBRztBQUNwQyxTQUFPRCxLQUFLQSxJQUFJQyxLQUFLQSxJQUFJRCxNQUFNQyxLQUFNRCxLQUFLLE9BQU9BLEtBQU0sWUFBYSxPQUFPQSxLQUFNO0FBQ2xGO0FBc0RPLFNBQVNFLEdBQVNDLEdBQUs7QUFDN0IsU0FBTyxPQUFPLEtBQUtBLENBQUcsRUFBRSxXQUFXO0FBQ3BDO0FDb0JPLFNBQVNDLEVBQU9DLEdBQVFDLEdBQU07QUFDcEMsRUFBQUQsRUFBTyxZQUFZQyxDQUFJO0FBQ3hCO0FBOEZPLFNBQVNDLEVBQU9GLEdBQVFDLEdBQU1FLEdBQVE7QUFDNUMsRUFBQUgsRUFBTyxhQUFhQyxHQUFNRSxLQUFVLElBQUk7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
