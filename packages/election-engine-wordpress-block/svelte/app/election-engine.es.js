var mt = Object.defineProperty;
var Et = (i, e, t) => e in i ? mt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Te = (i, e, t) => (Et(i, typeof e != "symbol" ? e + "" : e, t), t);
function Ee() {
}
function ht(i) {
  return i();
}
function De() {
  return /* @__PURE__ */ Object.create(null);
}
function ge(i) {
  i.forEach(ht);
}
function ct(i) {
  return typeof i == "function";
}
function ut(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function bt(i) {
  return Object.keys(i).length === 0;
}
function m(i, e) {
  i.appendChild(e);
}
function P(i, e, t) {
  i.insertBefore(e, t || null);
}
function R(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Se(i, e) {
  for (let t = 0; t < i.length; t += 1)
    i[t] && i[t].d(e);
}
function I(i) {
  return document.createElement(i);
}
function V(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function q(i) {
  return document.createTextNode(i);
}
function G() {
  return q(" ");
}
function Ne() {
  return q("");
}
function ce(i, e, t, l) {
  return i.addEventListener(e, t, l), () => i.removeEventListener(e, t, l);
}
function f(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function wt(i) {
  return Array.from(i.childNodes);
}
function O(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Z(i, e, t) {
  i.classList.toggle(e, !!t);
}
let be;
function ye(i) {
  be = i;
}
function kt() {
  if (!be)
    throw new Error("Function called outside component initialization");
  return be;
}
function Bt(i) {
  kt().$$.on_mount.push(i);
}
const de = [], Qe = [];
let pe = [];
const Ye = [], Ct = /* @__PURE__ */ Promise.resolve();
let je = !1;
function Mt() {
  je || (je = !0, Ct.then(dt));
}
function Fe(i) {
  pe.push(i);
}
const xe = /* @__PURE__ */ new Set();
let ue = 0;
function dt() {
  if (ue !== 0)
    return;
  const i = be;
  do {
    try {
      for (; ue < de.length; ) {
        const e = de[ue];
        ue++, ye(e), Vt(e.$$);
      }
    } catch (e) {
      throw de.length = 0, ue = 0, e;
    }
    for (ye(null), de.length = 0, ue = 0; Qe.length; )
      Qe.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const t = pe[e];
      xe.has(t) || (xe.add(t), t());
    }
    pe.length = 0;
  } while (de.length);
  for (; Ye.length; )
    Ye.pop()();
  je = !1, xe.clear(), ye(i);
}
function Vt(i) {
  if (i.fragment !== null) {
    i.update(), ge(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Fe);
  }
}
function St(i) {
  const e = [], t = [];
  pe.forEach((l) => i.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), pe = e;
}
const qe = /* @__PURE__ */ new Set();
let le;
function At() {
  le = {
    r: 0,
    c: [],
    p: le
    // parent group
  };
}
function qt() {
  le.r || ge(le.c), le = le.p;
}
function me(i, e) {
  i && i.i && (qe.delete(i), i.i(e));
}
function He(i, e, t, l) {
  if (i && i.o) {
    if (qe.has(i))
      return;
    qe.add(i), le.c.push(() => {
      qe.delete(i), l && (t && i.d(1), l());
    }), i.o(e);
  } else
    l && l();
}
function $(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Rt(i) {
  i && i.c();
}
function pt(i, e, t) {
  const { fragment: l, after_update: r } = i.$$;
  l && l.m(e, t), Fe(() => {
    const n = i.$$.on_mount.map(ht).filter(ct);
    i.$$.on_destroy ? i.$$.on_destroy.push(...n) : ge(n), i.$$.on_mount = [];
  }), r.forEach(Fe);
}
function gt(i, e) {
  const t = i.$$;
  t.fragment !== null && (St(t.after_update), ge(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Pt(i, e) {
  i.$$.dirty[0] === -1 && (de.push(i), Mt(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _t(i, e, t, l, r, n, h = null, s = [-1]) {
  const a = be;
  ye(i);
  const o = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: Ee,
    not_equal: r,
    bound: De(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: De(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  h && h(o.root);
  let c = !1;
  if (o.ctx = t ? t(i, e.props || {}, (u, d, ...g) => {
    const v = g.length ? g[0] : d;
    return o.ctx && r(o.ctx[u], o.ctx[u] = v) && (!o.skip_bound && o.bound[u] && o.bound[u](v), c && Pt(i, u)), d;
  }) : [], o.update(), c = !0, ge(o.before_update), o.fragment = l ? l(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = wt(e.target);
      o.fragment && o.fragment.l(u), u.forEach(R);
    } else
      o.fragment && o.fragment.c();
    e.intro && me(i.$$.fragment), pt(i, e.target, e.anchor), dt();
  }
  ye(a);
}
class vt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Te(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Te(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    gt(this, 1), this.$destroy = Ee;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ct(t))
      return Ee;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const r = l.indexOf(t);
      r !== -1 && l.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !bt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Tt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Tt);
var yt = {}, Re = {};
Object.defineProperty(Re, "__esModule", { value: !0 });
var xt = function() {
  function i() {
    this.root = null;
  }
  return i.prototype.insertSuccessor = function(e, t) {
    var l;
    if (e) {
      if (t.prev = e, t.next = e.next, e.next && (e.next.prev = t), e.next = t, e.right) {
        for (e = e.right; e.left; )
          e = e.left;
        e.left = t;
      } else
        e.right = t;
      l = e;
    } else
      this.root ? (e = this.first(this.root), t.prev = null, t.next = e, e.prev = t, e.left = t, l = e) : (t.prev = t.next = null, this.root = t, l = null);
    t.left = t.right = null, t.parent = l, t.red = !0;
    var r, n;
    for (e = t; l && l.red; )
      r = l.parent, l === r.left ? (n = r.right, n && n.red ? (l.red = n.red = !1, r.red = !0, e = r) : (e === l.right && (this.rotateLeft(l), e = l, l = e.parent), l.red = !1, r.red = !0, this.rotateRight(r))) : (n = r.left, n && n.red ? (l.red = n.red = !1, r.red = !0, e = r) : (e === l.left && (this.rotateRight(l), e = l, l = e.parent), l.red = !1, r.red = !0, this.rotateLeft(r))), l = e.parent;
    this.root.red = !1;
  }, i.prototype.removeNode = function(e) {
    e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
    var t = e.parent, l = e.left, r = e.right, n = null;
    l ? r ? n = this.first(r) : n = l : n = r, t ? t.left === e ? t.left = n : t.right = n : this.root = n;
    var h;
    if (l && r ? (h = n.red, n.red = e.red, n.left = l, l.parent = n, n !== r ? (t = n.parent, n.parent = e.parent, e = n.right, t.left = e, n.right = r, r.parent = n) : (n.parent = t, t = n, e = n.right)) : (h = e.red, e = n), e && (e.parent = t), !h) {
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
    var t = e, l = e.right, r = t.parent;
    r ? r.left === t ? r.left = l : r.right = l : this.root = l, l.parent = r, t.parent = l, t.right = l.left, t.right && (t.right.parent = t), l.left = t;
  }, i.prototype.rotateRight = function(e) {
    var t = e, l = e.left, r = t.parent;
    r ? r.left === t ? r.left = l : r.right = l : this.root = l, l.parent = r, t.parent = l, t.left = l.right, t.left && (t.left.parent = t), l.right = t;
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
Re.RBTree = xt;
var jt = /* @__PURE__ */ function() {
  function i() {
  }
  return i;
}();
Re.RBTreeNode = jt;
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
var Ft = /* @__PURE__ */ function() {
  function i(e, t) {
    this.x = e, this.y = t;
  }
  return i;
}();
Le.Vertex = Ft;
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
var Ht = /* @__PURE__ */ function() {
  function i(e, t) {
    this.lSite = e, this.rSite = t, this.va = this.vb = null;
  }
  return i;
}();
We.Edge = Ht;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
var Nt = function() {
  function i(e) {
    this.site = e, this.halfedges = [], this.closeMe = !1;
  }
  return i.prototype.init = function(e) {
    return this.site = e, this.halfedges = [], this.closeMe = !1, this;
  }, i.prototype.prepareHalfedges = function() {
    for (var e = this.halfedges, t = e.length, l; t--; )
      l = e[t].edge, (!l.vb || !l.va) && e.splice(t, 1);
    return e.sort(function(r, n) {
      return n.angle - r.angle;
    }), e.length;
  }, i.prototype.getNeighborIds = function() {
    for (var e = [], t = this.halfedges.length, l; t--; )
      l = this.halfedges[t].edge, l.lSite !== null && l.lSite.id != this.site.id ? e.push(l.lSite.id) : l.rSite !== null && l.rSite.id != this.site.id && e.push(l.rSite.id);
    return e;
  }, i.prototype.getBbox = function() {
    for (var e = this.halfedges, t = e.length, l = 1 / 0, r = 1 / 0, n = -1 / 0, h = -1 / 0, s, a, o; t--; )
      s = e[t].getStartpoint(), a = s.x, o = s.y, a < l && (l = a), o < r && (r = o), a > n && (n = a), o > h && (h = o);
    return {
      x: l,
      y: r,
      width: n - l,
      height: h - r
    };
  }, i.prototype.pointIntersection = function(e, t) {
    for (var l = this.halfedges, r = l.length, n, h, s, a; r--; ) {
      if (n = l[r], h = n.getStartpoint(), s = n.getEndpoint(), a = (t - h.y) * (s.x - h.x) - (e - h.x) * (s.y - h.y), !a)
        return 0;
      if (a > 0)
        return -1;
    }
    return 1;
  }, i;
}();
ze.Cell = Nt;
var Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
var Lt = /* @__PURE__ */ function() {
  function i(e) {
    this.site = e;
  }
  return i;
}();
Je.Diagram = Lt;
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
var Wt = function() {
  function i(e, t, l) {
    if (this.site = t, this.edge = e, l)
      this.angle = Math.atan2(l.y - t.y, l.x - t.x);
    else {
      var r = e.va, n = e.vb;
      this.angle = e.lSite === t ? Math.atan2(n.x - r.x, r.y - n.y) : Math.atan2(r.x - n.x, n.y - r.y);
    }
  }
  return i.prototype.getStartpoint = function() {
    return this.edge.lSite === this.site ? this.edge.va : this.edge.vb;
  }, i.prototype.getEndpoint = function() {
    return this.edge.lSite === this.site ? this.edge.vb : this.edge.va;
  }, i;
}();
Ie.Halfedge = Wt;
Object.defineProperty(yt, "__esModule", { value: !0 });
var Ae = Re, zt = Le, Ze = We, Jt = ze, Ge = Je, It = Ie, Ot = function() {
  function i() {
    this.vertices = null, this.edges = null, this.cells = null, this.toRecycle = null, this.beachsectionJunkyard = [], this.circleEventJunkyard = [], this.vertexJunkyard = [], this.edgeJunkyard = [], this.cellJunkyard = [];
  }
  return i.prototype.compute = function(e, t) {
    var l = /* @__PURE__ */ new Date();
    this.reset(), this.toRecycle && (this.vertexJunkyard = this.vertexJunkyard.concat(this.toRecycle.vertices), this.edgeJunkyard = this.edgeJunkyard.concat(this.toRecycle.edges), this.cellJunkyard = this.cellJunkyard.concat(this.toRecycle.cells), this.toRecycle = null);
    var r = e.slice(0);
    r.sort(function(g, v) {
      var _ = v.y - g.y;
      return _ || v.x - g.x;
    });
    for (var n = r.pop(), h = 0, s, a, o = this.cells, c; ; )
      if (c = this.firstCircleEvent, n && (!c || n.y < c.y || n.y === c.y && n.x < c.x))
        (n.x !== s || n.y !== a) && (o[h] = this.createCell(n), n.id = h++, this.addBeachsection(n), a = n.y, s = n.x), n = r.pop();
      else if (c)
        this.removeBeachsection(c.arc);
      else
        break;
    this.clipEdges(t), this.closeCells(t);
    var u = /* @__PURE__ */ new Date(), d = new Ge.Diagram();
    return d.cells = this.cells, d.edges = this.edges, d.vertices = this.vertices, d.execTime = u.getTime() - l.getTime(), this.reset(), d;
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
    for (var t = this.eps(), l = e.length, r; l--; )
      r = e[l], r.x = Math.floor(r.x / t) * t, r.y = Math.floor(r.y / t) * t;
  }, i.prototype.recycle = function(e) {
    if (e)
      if (e instanceof Ge.Diagram)
        this.toRecycle = e;
      else
        throw "Voronoi.recycleDiagram() > Need a Diagram object.";
  }, i.prototype.reset = function() {
    if (this.beachline || (this.beachline = new Ae.RBTree()), this.beachline.root)
      for (var e = this.beachline.first(this.beachline.root); e; )
        this.beachsectionJunkyard.push(e), e = e.next;
    this.beachline.root = null, this.circleEvents || (this.circleEvents = new Ae.RBTree()), this.circleEvents.root = this.firstCircleEvent = null, this.vertices = [], this.edges = [], this.cells = [];
  }, i.prototype.createCell = function(e) {
    var t = this.cellJunkyard.pop();
    return t ? (t.init(e), t.init(e)) : new Jt.Cell(e);
  }, i.prototype.createHalfedge = function(e, t, l) {
    return new It.Halfedge(e, t, l);
  }, i.prototype.createVertex = function(e, t) {
    var l = this.vertexJunkyard.pop();
    return l ? (l.x = e, l.y = t) : l = new zt.Vertex(e, t), this.vertices.push(l), l;
  }, i.prototype.createEdge = function(e, t, l, r) {
    l === void 0 && (l = null), r === void 0 && (r = null);
    var n = this.edgeJunkyard.pop();
    return n ? (n.lSite = e, n.rSite = t, n.va = n.vb = null) : n = new Ze.Edge(e, t), this.edges.push(n), l && this.setEdgeStartpoint(n, e, t, l), r && this.setEdgeEndpoint(n, e, t, r), this.cells[e.id].halfedges.push(this.createHalfedge(n, e, t)), this.cells[t.id].halfedges.push(this.createHalfedge(n, t, e)), n;
  }, i.prototype.createBorderEdge = function(e, t, l) {
    var r = this.edgeJunkyard.pop();
    return r ? (r.lSite = e, r.rSite = null) : r = new Ze.Edge(e, null), r.va = t, r.vb = l, this.edges.push(r), r;
  }, i.prototype.setEdgeStartpoint = function(e, t, l, r) {
    !e.va && !e.vb ? (e.va = r, e.lSite = t, e.rSite = l) : e.lSite === l ? e.vb = r : e.va = r;
  }, i.prototype.setEdgeEndpoint = function(e, t, l, r) {
    this.setEdgeStartpoint(e, l, t, r);
  }, i.prototype.createBeachsection = function(e) {
    var t = this.beachsectionJunkyard.pop();
    return t || (t = new Ae.RBTreeNode()), t.site = e, t;
  }, i.prototype.leftBreakPoint = function(e, t) {
    var l = e.site, r = l.x, n = l.y, h = n - t;
    if (!h)
      return r;
    var s = e.prev;
    if (!s)
      return -1 / 0;
    l = s.site;
    var a = l.x, o = l.y, c = o - t;
    if (!c)
      return a;
    var u = a - r, d = 1 / h - 1 / c, g = u / c;
    return d ? (-g + this.sqrt(g * g - 2 * d * (u * u / (-2 * c) - o + c / 2 + n - h / 2))) / d + r : (r + a) / 2;
  }, i.prototype.rightBreakPoint = function(e, t) {
    var l = e.next;
    if (l)
      return this.leftBreakPoint(l, t);
    var r = e.site;
    return r.y === t ? r.x : 1 / 0;
  }, i.prototype.detachBeachsection = function(e) {
    this.detachCircleEvent(e), this.beachline.removeNode(e), this.beachsectionJunkyard.push(e);
  }, i.prototype.removeBeachsection = function(e) {
    var t = e.circleEvent, l = t.x, r = t.ycenter, n = this.createVertex(l, r), h = e.prev, s = e.next, a = [e], o = Math.abs;
    this.detachBeachsection(e);
    for (var c = h; c.circleEvent && o(l - c.circleEvent.x) < this.eps() && o(r - c.circleEvent.ycenter) < this.eps(); )
      h = c.prev, a.unshift(c), this.detachBeachsection(c), c = h;
    a.unshift(c), this.detachCircleEvent(c);
    for (var u = s; u.circleEvent && o(l - u.circleEvent.x) < this.eps() && o(r - u.circleEvent.ycenter) < this.eps(); )
      s = u.next, a.push(u), this.detachBeachsection(u), u = s;
    a.push(u), this.detachCircleEvent(u);
    var d = a.length, g;
    for (g = 1; g < d; g++)
      u = a[g], c = a[g - 1], this.setEdgeStartpoint(u.edge, c.site, u.site, n);
    c = a[0], u = a[d - 1], u.edge = this.createEdge(c.site, u.site, void 0, n), this.attachCircleEvent(c), this.attachCircleEvent(u);
  }, i.prototype.addBeachsection = function(e) {
    for (var t = e.x, l = e.y, r, n, h, s, a = this.beachline.root; a; )
      if (h = this.leftBreakPoint(a, l) - t, h > this.eps())
        a = a.left;
      else if (s = t - this.rightBreakPoint(a, l), s > this.eps()) {
        if (!a.right) {
          r = a;
          break;
        }
        a = a.right;
      } else {
        h > -this.eps() ? (r = a.prev, n = a) : s > -this.eps() ? (r = a, n = a.next) : r = n = a;
        break;
      }
    var o = this.createBeachsection(e);
    if (this.beachline.insertSuccessor(r, o), !(!r && !n)) {
      if (r === n) {
        this.detachCircleEvent(r), n = this.createBeachsection(r.site), this.beachline.insertSuccessor(o, n), o.edge = n.edge = this.createEdge(r.site, o.site), this.attachCircleEvent(r), this.attachCircleEvent(n);
        return;
      }
      if (r && !n) {
        o.edge = this.createEdge(r.site, o.site);
        return;
      }
      if (r !== n) {
        this.detachCircleEvent(r), this.detachCircleEvent(n);
        var c = r.site, u = c.x, d = c.y, g = e.x - u, v = e.y - d, _ = n.site, y = _.x - u, B = _.y - d, M = 2 * (g * B - v * y), w = g * g + v * v, S = y * y + B * B, A = this.createVertex((B * w - v * S) / M + u, (g * S - y * w) / M + d);
        this.setEdgeStartpoint(n.edge, c, _, A), o.edge = this.createEdge(c, e, void 0, A), n.edge = this.createEdge(e, _, void 0, A), this.attachCircleEvent(r), this.attachCircleEvent(n);
        return;
      }
    }
  }, i.prototype.attachCircleEvent = function(e) {
    var t = e.prev, l = e.next;
    if (!(!t || !l)) {
      var r = t.site, n = e.site, h = l.site;
      if (r !== h) {
        var s = n.x, a = n.y, o = r.x - s, c = r.y - a, u = h.x - s, d = h.y - a, g = 2 * (o * d - c * u);
        if (!(g >= -2e-12)) {
          var v = o * o + c * c, _ = u * u + d * d, y = (d * v - c * _) / g, B = (o * _ - u * v) / g, M = B + a, w = this.circleEventJunkyard.pop();
          w || (w = new Ae.RBTreeNode()), w.arc = e, w.site = n, w.x = y + s, w.y = M + this.sqrt(y * y + B * B), w.ycenter = M, e.circleEvent = w;
          for (var S = null, A = this.circleEvents.root; A; )
            if (w.y < A.y || w.y === A.y && w.x <= A.x)
              if (A.left)
                A = A.left;
              else {
                S = A.prev;
                break;
              }
            else if (A.right)
              A = A.right;
            else {
              S = A;
              break;
            }
          this.circleEvents.insertSuccessor(S, w), S || (this.firstCircleEvent = w);
        }
      }
    }
  }, i.prototype.detachCircleEvent = function(e) {
    var t = e.circleEvent;
    t && (t.prev || (this.firstCircleEvent = t.next), this.circleEvents.removeNode(t), this.circleEventJunkyard.push(t), e.circleEvent = null);
  }, i.prototype.connectEdge = function(e, t) {
    var l = e.vb;
    if (l)
      return !0;
    var r = e.va, n = t.xl, h = t.xr, s = t.yt, a = t.yb, o = e.lSite, c = e.rSite, u = o.x, d = o.y, g = c.x, v = c.y, _ = (u + g) / 2, y = (d + v) / 2, B, M;
    if (this.cells[o.id].closeMe = !0, this.cells[c.id].closeMe = !0, v !== d && (B = (u - g) / (v - d), M = y - B * _), B === void 0) {
      if (_ < n || _ >= h)
        return !1;
      if (u > g) {
        if (!r || r.y < s)
          r = this.createVertex(_, s);
        else if (r.y >= a)
          return !1;
        l = this.createVertex(_, a);
      } else {
        if (!r || r.y > a)
          r = this.createVertex(_, a);
        else if (r.y < s)
          return !1;
        l = this.createVertex(_, s);
      }
    } else if (B < -1 || B > 1)
      if (u > g) {
        if (!r || r.y < s)
          r = this.createVertex((s - M) / B, s);
        else if (r.y >= a)
          return !1;
        l = this.createVertex((a - M) / B, a);
      } else {
        if (!r || r.y > a)
          r = this.createVertex((a - M) / B, a);
        else if (r.y < s)
          return !1;
        l = this.createVertex((s - M) / B, s);
      }
    else if (d < v) {
      if (!r || r.x < n)
        r = this.createVertex(n, B * n + M);
      else if (r.x >= h)
        return !1;
      l = this.createVertex(h, B * h + M);
    } else {
      if (!r || r.x > h)
        r = this.createVertex(h, B * h + M);
      else if (r.x < n)
        return !1;
      l = this.createVertex(n, B * n + M);
    }
    return e.va = r, e.vb = l, !0;
  }, i.prototype.clipEdge = function(e, t) {
    var l = e.va.x, r = e.va.y, n = e.vb.x, h = e.vb.y, s = 0, a = 1, o = n - l, c = h - r, u = l - t.xl;
    if (o === 0 && u < 0)
      return !1;
    var d = -u / o;
    if (o < 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    } else if (o > 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    }
    if (u = t.xr - l, o === 0 && u < 0)
      return !1;
    if (d = u / o, o < 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    } else if (o > 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    }
    if (u = r - t.yt, c === 0 && u < 0)
      return !1;
    if (d = -u / c, c < 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    } else if (c > 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    }
    if (u = t.yb - r, c === 0 && u < 0)
      return !1;
    if (d = u / c, c < 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    } else if (c > 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    }
    return s > 0 && (e.va = this.createVertex(l + s * o, r + s * c)), a < 1 && (e.vb = this.createVertex(l + a * o, r + a * c)), (s > 0 || a < 1) && (this.cells[e.lSite.id].closeMe = !0, this.cells[e.rSite.id].closeMe = !0), !0;
  }, i.prototype.clipEdges = function(e) {
    for (var t = this.edges, l = t.length, r, n = Math.abs; l--; )
      r = t[l], (!this.connectEdge(r, e) || !this.clipEdge(r, e) || n(r.va.x - r.vb.x) < this.eps() && n(r.va.y - r.vb.y) < this.eps()) && (r.va = r.vb = null, t.splice(l, 1));
  }, i.prototype.closeCells = function(e) {
    for (var t = e.xl, l = e.xr, r = e.yt, n = e.yb, h = this.cells, s = h.length, a, o, c, u, d, g, v, _, y, B = Math.abs; s--; )
      if (a = h[s], !!a.prepareHalfedges() && a.closeMe) {
        for (c = a.halfedges, u = c.length, o = 0; o < u; ) {
          if (g = c[o].getEndpoint(), _ = c[(o + 1) % u].getStartpoint(), B(g.x - _.x) >= this.eps() || B(g.y - _.y) >= this.eps())
            switch (!0) {
              case (this.equalWithEpsilon(g.x, t) && this.lessThanWithEpsilon(g.y, n)):
                if (y = this.equalWithEpsilon(_.x, t), v = this.createVertex(t, y ? _.y : n), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.y, n) && this.lessThanWithEpsilon(g.x, l)):
                if (y = this.equalWithEpsilon(_.y, n), v = this.createVertex(y ? _.x : l, n), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.x, l) && this.greaterThanWithEpsilon(g.y, r)):
                if (y = this.equalWithEpsilon(_.x, l), v = this.createVertex(l, y ? _.y : r), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y)
                  break;
                g = v;
              case (this.equalWithEpsilon(g.y, r) && this.greaterThanWithEpsilon(g.x, t)):
                if (y = this.equalWithEpsilon(_.y, r), v = this.createVertex(y ? _.x : t, r), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y || (g = v, y = this.equalWithEpsilon(_.x, t), v = this.createVertex(t, y ? _.y : n), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y) || (g = v, y = this.equalWithEpsilon(_.y, n), v = this.createVertex(y ? _.x : l, n), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y) || (g = v, y = this.equalWithEpsilon(_.x, l), v = this.createVertex(l, y ? _.y : r), d = this.createBorderEdge(a.site, g, v), o++, c.splice(o, 0, this.createHalfedge(d, a.site, null)), u++, y))
                  break;
              default:
                throw "Voronoi.closeCells() > this makes no sense!";
            }
          o++;
        }
        a.closeMe = !1;
      }
  }, i;
}(), Dt = yt.Voronoi = Ot;
const Qt = (i) => {
  const e = new Dt();
  let t = 0, l = 0, r = 0, n = 0;
  for (let s = 0; s < i.length; s++) {
    let a = i[s];
    a.x < t && (t = a.x), a.x > l && (l = a.x), a.y < r && (r = a.y), a.y > n && (n = a.y);
  }
  let h = { xl: t, xr: l, yt: r, yb: n };
  return e.compute(i, h);
};
function Ue(i) {
  if (!i || i.length === 0)
    return "";
  let e = [];
  const t = i.shift();
  let l = t.getStartpoint(), r = t.getEndpoint();
  e.push(`M ${l.x} ${l.y}`), e.push(`L ${r.x} ${r.y}`);
  for (let n of i) {
    let h = n.getEndpoint();
    e.push(`L ${h.x} ${h.y}`);
  }
  return e.push("Z"), e.join(" ");
}
function Yt(i, e, t, l) {
  let r = [], n = 0;
  for (let o = e; o >= 0; o--) {
    const c = i - o * i / e, u = l / 180 * Math.PI * c;
    n += u;
  }
  const h = n / t;
  let s = 0, a = 0;
  for (let o = e; o >= 0; o--) {
    const c = i - o * i / e, u = l / 180 * Math.PI * c;
    let d = Math.ceil(u / h);
    s + d > t && (d = t - s);
    const g = u / d, v = (l - 180) / 180 * Math.PI / 2;
    for (let _ = 0; _ < d; _++) {
      s++;
      const y = _ * g / c + g / c / 2, B = -c * Math.cos(y - v), M = -c * Math.sin(y - v);
      r.push({ id: o, x: B, y: M, a, angle: y });
    }
    a++;
  }
  return r.sort((o, c) => o.angle - c.angle), r;
}
function Ke(i, e, t) {
  const l = i.slice();
  return l[33] = e[t], l[35] = t, l;
}
function Xe(i, e, t) {
  const l = i.slice();
  return l[36] = e[t], l[35] = t, l;
}
function $e(i, e, t) {
  const l = i.slice();
  return l[36] = e[t], l;
}
function et(i, e, t) {
  const l = i.slice();
  return l[40] = e[t], l[35] = t, l;
}
function tt(i) {
  let e, t;
  return {
    c() {
      e = V("path"), f(e, "d", t = `M ${/*r*/
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
      i[2]))},0`), f(e, "fill", "transparent"), f(e, "stroke", "white"), f(e, "stroke-width", "1"), f(e, "opacity", "0.4");
    },
    m(l, r) {
      P(l, e, r);
    },
    p(l, r) {
      r[0] & /*r, rows*/
      6 && t !== (t = `M ${/*r*/
      l[1] - /*i*/
      l[35] * /*r*/
      (l[1] / /*rows*/
      l[2])},0 A ${/*r*/
      l[1] - /*i*/
      l[35] * /*r*/
      (l[1] / /*rows*/
      l[2])},${/*r*/
      l[1] - /*i*/
      l[35] * /*r*/
      (l[1] / /*rows*/
      l[2])} 0 0,0 ${-/*r*/
      (l[1] - /*i*/
      l[35] * /*r*/
      (l[1] / /*rows*/
      l[2]))},0`) && f(e, "d", t);
    },
    d(l) {
      l && R(e);
    }
  };
}
function Zt(i) {
  let e, t, l, r, n, h;
  return {
    c() {
      var s, a, o, c, u;
      e = V("circle"), f(e, "data-party", t = /*point*/
      (s = i[36].data) == null ? void 0 : s.id), f(e, "cx", l = /*point*/
      i[36].x), f(e, "cy", r = /*point*/
      i[36].y), f(
        e,
        "r",
        /*dotsize*/
        i[3]
      ), f(e, "fill", n = /*point*/
      (a = i[36].data) == null ? void 0 : a.color), f(e, "opacity", h = /*current_party*/
      (o = i[0]) != null && o.id ? (
        /*point*/
        ((c = i[36].data) == null ? void 0 : c.id) === /*current_party*/
        ((u = i[0]) == null ? void 0 : u.id) ? 1 : 0.5
      ) : 1);
    },
    m(s, a) {
      P(s, e, a);
    },
    p(s, a) {
      var o, c, u, d, g;
      a[0] & /*points*/
      512 && t !== (t = /*point*/
      (o = s[36].data) == null ? void 0 : o.id) && f(e, "data-party", t), a[0] & /*points*/
      512 && l !== (l = /*point*/
      s[36].x) && f(e, "cx", l), a[0] & /*points*/
      512 && r !== (r = /*point*/
      s[36].y) && f(e, "cy", r), a[0] & /*dotsize*/
      8 && f(
        e,
        "r",
        /*dotsize*/
        s[3]
      ), a[0] & /*points*/
      512 && n !== (n = /*point*/
      (c = s[36].data) == null ? void 0 : c.color) && f(e, "fill", n), a[0] & /*current_party, points*/
      513 && h !== (h = /*current_party*/
      (u = s[0]) != null && u.id ? (
        /*point*/
        ((d = s[36].data) == null ? void 0 : d.id) === /*current_party*/
        ((g = s[0]) == null ? void 0 : g.id) ? 1 : 0.5
      ) : 1) && f(e, "opacity", h);
    },
    d(s) {
      s && R(e);
    }
  };
}
function Gt(i) {
  let e, t, l, r, n;
  return {
    c() {
      var h, s, a, o, c;
      e = V("path"), f(e, "d", Kt), f(e, "transform", t = `translate(${/*point*/
      i[36].x},${/*point*/
      i[36].y}) rotate(-5) scale(0.07)`), f(e, "data-party", l = /*point*/
      (h = i[36].data) == null ? void 0 : h.id), f(e, "fill", r = /*point*/
      (s = i[36].data) == null ? void 0 : s.color), f(e, "opacity", n = /*current_party*/
      (a = i[0]) != null && a.id ? (
        /*point*/
        ((o = i[36].data) == null ? void 0 : o.id) === /*current_party*/
        ((c = i[0]) == null ? void 0 : c.id) ? 1 : 0.5
      ) : 1);
    },
    m(h, s) {
      P(h, e, s);
    },
    p(h, s) {
      var a, o, c, u, d;
      s[0] & /*points*/
      512 && t !== (t = `translate(${/*point*/
      h[36].x},${/*point*/
      h[36].y}) rotate(-5) scale(0.07)`) && f(e, "transform", t), s[0] & /*points*/
      512 && l !== (l = /*point*/
      (a = h[36].data) == null ? void 0 : a.id) && f(e, "data-party", l), s[0] & /*points*/
      512 && r !== (r = /*point*/
      (o = h[36].data) == null ? void 0 : o.color) && f(e, "fill", r), s[0] & /*current_party, points*/
      513 && n !== (n = /*current_party*/
      (c = h[0]) != null && c.id ? (
        /*point*/
        ((u = h[36].data) == null ? void 0 : u.id) === /*current_party*/
        ((d = h[0]) == null ? void 0 : d.id) ? 1 : 0.5
      ) : 1) && f(e, "opacity", n);
    },
    d(h) {
      h && R(e);
    }
  };
}
function it(i) {
  let e;
  function t(n, h) {
    return (
      /*selectedShape*/
      n[7] === "hexagon" ? Gt : Zt
    );
  }
  let l = t(i), r = l(i);
  return {
    c() {
      r.c(), e = Ne();
    },
    m(n, h) {
      r.m(n, h), P(n, e, h);
    },
    p(n, h) {
      l === (l = t(n)) && r ? r.p(n, h) : (r.d(1), r = l(n), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(n) {
      n && R(e), r.d(n);
    }
  };
}
function lt(i) {
  let e, t = `${/*i*/
  i[35]}`, l, r, n;
  return {
    c() {
      e = V("text"), l = q(t), f(e, "x", r = /*point*/
      i[36].x), f(e, "y", n = /*point*/
      i[36].y), f(e, "text-anchor", "middle"), f(e, "alignment-baseline", "middle"), f(e, "fill", "white"), f(e, "font-size", "8");
    },
    m(h, s) {
      P(h, e, s), m(e, l);
    },
    p(h, s) {
      s[0] & /*points*/
      512 && r !== (r = /*point*/
      h[36].x) && f(e, "x", r), s[0] & /*points*/
      512 && n !== (n = /*point*/
      h[36].y) && f(e, "y", n);
    },
    d(h) {
      h && R(e);
    }
  };
}
function rt(i) {
  let e, t, l, r, n, h;
  function s() {
    return (
      /*mouseover_handler*/
      i[24](
        /*cell*/
        i[33]
      )
    );
  }
  function a() {
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
  function c(...u) {
    return (
      /*keypress_handler*/
      i[29](
        /*cell*/
        i[33],
        ...u
      )
    );
  }
  return {
    c() {
      e = V("path"), f(e, "class", "voronoi_path"), f(e, "d", t = Ue(
        /*cell*/
        i[33].halfedges
      ).toString()), f(e, "fill", "transparent"), f(e, "stroke", l = /*display*/
      i[8].includes("voronoi") ? "white" : "transparent"), f(e, "stroke-width", r = /*display*/
      i[8].includes("voronoi") ? 1 : 0), f(e, "role", "button"), f(
        e,
        "tabindex",
        /*i*/
        i[35]
      );
    },
    m(u, d) {
      P(u, e, d), n || (h = [
        ce(e, "mouseover", s),
        ce(e, "focus", a),
        ce(
          e,
          "mouseout",
          /*mouseout_handler*/
          i[26]
        ),
        ce(
          e,
          "blur",
          /*blur_handler*/
          i[27]
        ),
        ce(e, "click", o),
        ce(e, "keypress", c)
      ], n = !0);
    },
    p(u, d) {
      i = u, d[0] & /*voronoi*/
      4096 && t !== (t = Ue(
        /*cell*/
        i[33].halfedges
      ).toString()) && f(e, "d", t), d[0] & /*display*/
      256 && l !== (l = /*display*/
      i[8].includes("voronoi") ? "white" : "transparent") && f(e, "stroke", l), d[0] & /*display*/
      256 && r !== (r = /*display*/
      i[8].includes("voronoi") ? 1 : 0) && f(e, "stroke-width", r);
    },
    d(u) {
      u && R(e), n = !1, ge(h);
    }
  };
}
function nt(i) {
  var l;
  let e, t = (
    /*cell*/
    ((l = i[33].halfedges) == null ? void 0 : l.length) > 0 && rt(i)
  );
  return {
    c() {
      t && t.c(), e = Ne();
    },
    m(r, n) {
      t && t.m(r, n), P(r, e, n);
    },
    p(r, n) {
      var h;
      /*cell*/
      ((h = r[33].halfedges) == null ? void 0 : h.length) > 0 ? t ? t.p(r, n) : (t = rt(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && R(e), t && t.d(r);
    }
  };
}
function st(i) {
  let e, t = `${/*current_party*/
  i[0].text}`, l;
  return {
    c() {
      e = V("text"), l = q(t), f(e, "x", 0), f(e, "y", 0), f(e, "text-anchor", "middle"), f(e, "alignment-baseline", "middle"), f(
        e,
        "fill",
        /*color*/
        i[4]
      ), f(
        e,
        "font-size",
        /*font_size*/
        i[5]
      );
    },
    m(r, n) {
      P(r, e, n), m(e, l);
    },
    p(r, n) {
      n[0] & /*current_party*/
      1 && t !== (t = `${/*current_party*/
      r[0].text}`) && O(l, t), n[0] & /*color*/
      16 && f(
        e,
        "fill",
        /*color*/
        r[4]
      ), n[0] & /*font_size*/
      32 && f(
        e,
        "font-size",
        /*font_size*/
        r[5]
      );
    },
    d(r) {
      r && R(e);
    }
  };
}
function Ut(i) {
  let e, t, l, r, n, h, s, a, o, c, u, d, g, v, _, y, B, M, w, S = `${/*r*/
  i[1]}, 0`, A, W, U, N, re = `${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, ee, K, X, Q, ne, te, z, se = `-${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, _e, b, J, T, we, ke, ve, Y, Be = `-${/*r*/
  i[1]}, 0`, Pe, Ce, ie, Me, Ve, ae = $(Array(
    /*rows*/
    i[2]
  )), x = [];
  for (let p = 0; p < ae.length; p += 1)
    x[p] = tt(et(i, ae, p));
  let fe = $(
    /*points*/
    i[9]
  ), j = [];
  for (let p = 0; p < fe.length; p += 1)
    j[p] = it($e(i, fe, p));
  let oe = $(
    /*points*/
    i[9]
  ), F = [];
  for (let p = 0; p < oe.length; p += 1)
    F[p] = lt(Xe(i, oe, p));
  let he = $(
    /*voronoi*/
    i[12].cells
  ), H = [];
  for (let p = 0; p < he.length; p += 1)
    H[p] = nt(Ke(i, he, p));
  let L = (
    /*current_party*/
    i[0] && st(i)
  );
  return {
    c() {
      var p, k;
      e = I("main"), t = V("svg"), l = V("g");
      for (let C = 0; C < x.length; C += 1)
        x[C].c();
      n = V("g");
      for (let C = 0; C < j.length; C += 1)
        j[C].c();
      s = V("g");
      for (let C = 0; C < F.length; C += 1)
        F[C].c();
      o = V("g");
      for (let C = 0; C < H.length; C += 1)
        H[C].c();
      u = V("g"), L && L.c(), g = V("g"), v = V("g"), _ = V("text"), y = q("0, 0"), B = V("circle"), M = V("g"), w = V("text"), A = q(S), W = V("circle"), U = V("g"), N = V("text"), ee = q(re), Q = V("circle"), te = V("g"), z = V("text"), _e = q(se), T = V("circle"), ve = V("g"), Y = V("text"), Pe = q(Be), ie = V("circle"), f(l, "id", "arcs"), f(l, "transform", r = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(l, "class", "svelte-smqp4o"), Z(l, "hide", !/*display*/
      i[8].includes("arcs")), f(n, "id", "points"), f(n, "transform", h = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(n, "class", "svelte-smqp4o"), Z(n, "hide", !/*display*/
      i[8].includes("points")), f(s, "id", "numbers"), f(s, "transform", a = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(s, "class", "svelte-smqp4o"), Z(s, "hide", !/*display*/
      i[8].includes("numbers")), f(o, "id", "voronoi"), f(o, "transform", c = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(u, "id", "text"), f(u, "transform", d = `translate(${/*text_position*/
      ((p = i[6]) == null ? void 0 : p.x) || /*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*text_position*/
      ((k = i[6]) == null ? void 0 : k.y) || /*r*/
      i[1] + /*top_padding*/
      i[10] + 20})`), f(u, "class", "svelte-smqp4o"), Z(u, "hide", !/*display*/
      i[8].includes("text")), f(_, "x", "0"), f(_, "y", "10"), f(_, "text-anchor", "middle"), f(_, "alignment-baseline", "middle"), f(_, "fill", "white"), f(_, "font-size", "8"), f(B, "cx", "0"), f(B, "cy", "0"), f(B, "r", "2"), f(B, "fill", "white"), f(v, "class", "reference_points"), f(
        w,
        "x",
        /*r*/
        i[1]
      ), f(w, "y", "10"), f(w, "text-anchor", "middle"), f(w, "alignment-baseline", "middle"), f(w, "fill", "white"), f(w, "font-size", "8"), f(
        W,
        "cx",
        /*r*/
        i[1]
      ), f(W, "cy", 0), f(W, "r", "2"), f(W, "fill", "white"), f(M, "class", "reference_points"), f(N, "x", K = /*r*/
      i[1] - 10), f(N, "y", X = -/*r*/
      i[1] + 10), f(N, "text-anchor", "middle"), f(N, "alignment-baseline", "middle"), f(N, "fill", "white"), f(N, "font-size", "8"), f(
        Q,
        "cx",
        /*r*/
        i[1]
      ), f(Q, "cy", ne = -/*r*/
      i[1]), f(Q, "r", "2"), f(Q, "fill", "white"), f(U, "class", "reference_points"), f(z, "x", b = -/*r*/
      i[1] + 10), f(z, "y", J = -/*r*/
      i[1] + 10), f(z, "text-anchor", "middle"), f(z, "alignment-baseline", "middle"), f(z, "fill", "white"), f(z, "font-size", "8"), f(T, "cx", we = -/*r*/
      i[1]), f(T, "cy", ke = -/*r*/
      i[1]), f(T, "r", "2"), f(T, "fill", "white"), f(te, "class", "reference_points"), f(Y, "x", Ce = -/*r*/
      i[1]), f(Y, "y", 10), f(Y, "text-anchor", "middle"), f(Y, "alignment-baseline", "middle"), f(Y, "fill", "white"), f(Y, "font-size", "8"), f(ie, "cx", Me = -/*r*/
      i[1]), f(ie, "cy", 0), f(ie, "r", "2"), f(ie, "fill", "white"), f(ve, "class", "reference_points"), f(g, "id", "referencePoints"), f(g, "transform", Ve = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(g, "class", "svelte-smqp4o"), Z(g, "hide", !/*display*/
      i[8].includes("referencePoints")), f(
        t,
        "width",
        /*svgWidth*/
        i[13]
      ), f(
        t,
        "height",
        /*svgHeight*/
        i[14]
      );
    },
    m(p, k) {
      P(p, e, k), m(e, t), m(t, l);
      for (let C = 0; C < x.length; C += 1)
        x[C] && x[C].m(l, null);
      m(t, n);
      for (let C = 0; C < j.length; C += 1)
        j[C] && j[C].m(n, null);
      m(t, s);
      for (let C = 0; C < F.length; C += 1)
        F[C] && F[C].m(s, null);
      m(t, o);
      for (let C = 0; C < H.length; C += 1)
        H[C] && H[C].m(o, null);
      m(t, u), L && L.m(u, null), m(t, g), m(g, v), m(v, _), m(_, y), m(v, B), m(g, M), m(M, w), m(w, A), m(M, W), m(g, U), m(U, N), m(N, ee), m(U, Q), m(g, te), m(te, z), m(z, _e), m(te, T), m(g, ve), m(ve, Y), m(Y, Pe), m(ve, ie);
    },
    p(p, k) {
      var C, Oe;
      if (k[0] & /*r, rows*/
      6) {
        ae = $(Array(
          /*rows*/
          p[2]
        ));
        let E;
        for (E = 0; E < ae.length; E += 1) {
          const D = et(p, ae, E);
          x[E] ? x[E].p(D, k) : (x[E] = tt(D), x[E].c(), x[E].m(l, null));
        }
        for (; E < x.length; E += 1)
          x[E].d(1);
        x.length = ae.length;
      }
      if (k[0] & /*r, left_padding, top_padding*/
      3074 && r !== (r = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && f(l, "transform", r), k[0] & /*display*/
      256 && Z(l, "hide", !/*display*/
      p[8].includes("arcs")), k[0] & /*points, current_party, selectedShape, dotsize*/
      649) {
        fe = $(
          /*points*/
          p[9]
        );
        let E;
        for (E = 0; E < fe.length; E += 1) {
          const D = $e(p, fe, E);
          j[E] ? j[E].p(D, k) : (j[E] = it(D), j[E].c(), j[E].m(n, null));
        }
        for (; E < j.length; E += 1)
          j[E].d(1);
        j.length = fe.length;
      }
      if (k[0] & /*r, left_padding, top_padding*/
      3074 && h !== (h = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && f(n, "transform", h), k[0] & /*display*/
      256 && Z(n, "hide", !/*display*/
      p[8].includes("points")), k[0] & /*points*/
      512) {
        oe = $(
          /*points*/
          p[9]
        );
        let E;
        for (E = 0; E < oe.length; E += 1) {
          const D = Xe(p, oe, E);
          F[E] ? F[E].p(D, k) : (F[E] = lt(D), F[E].c(), F[E].m(s, null));
        }
        for (; E < F.length; E += 1)
          F[E].d(1);
        F.length = oe.length;
      }
      if (k[0] & /*r, left_padding, top_padding*/
      3074 && a !== (a = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && f(s, "transform", a), k[0] & /*display*/
      256 && Z(s, "hide", !/*display*/
      p[8].includes("numbers")), k[0] & /*voronoi, display, selectParty, unselectParty, clickParty*/
      233728) {
        he = $(
          /*voronoi*/
          p[12].cells
        );
        let E;
        for (E = 0; E < he.length; E += 1) {
          const D = Ke(p, he, E);
          H[E] ? H[E].p(D, k) : (H[E] = nt(D), H[E].c(), H[E].m(o, null));
        }
        for (; E < H.length; E += 1)
          H[E].d(1);
        H.length = he.length;
      }
      k[0] & /*r, left_padding, top_padding*/
      3074 && c !== (c = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && f(o, "transform", c), /*current_party*/
      p[0] ? L ? L.p(p, k) : (L = st(p), L.c(), L.m(u, null)) : L && (L.d(1), L = null), k[0] & /*text_position, r, left_padding, top_padding*/
      3138 && d !== (d = `translate(${/*text_position*/
      ((C = p[6]) == null ? void 0 : C.x) || /*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*text_position*/
      ((Oe = p[6]) == null ? void 0 : Oe.y) || /*r*/
      p[1] + /*top_padding*/
      p[10] + 20})`) && f(u, "transform", d), k[0] & /*display*/
      256 && Z(u, "hide", !/*display*/
      p[8].includes("text")), k[0] & /*r*/
      2 && S !== (S = `${/*r*/
      p[1]}, 0`) && O(A, S), k[0] & /*r*/
      2 && f(
        w,
        "x",
        /*r*/
        p[1]
      ), k[0] & /*r*/
      2 && f(
        W,
        "cx",
        /*r*/
        p[1]
      ), k[0] & /*r*/
      2 && re !== (re = `${/*r*/
      p[1]}, ${-/*r*/
      p[1]}`) && O(ee, re), k[0] & /*r*/
      2 && K !== (K = /*r*/
      p[1] - 10) && f(N, "x", K), k[0] & /*r*/
      2 && X !== (X = -/*r*/
      p[1] + 10) && f(N, "y", X), k[0] & /*r*/
      2 && f(
        Q,
        "cx",
        /*r*/
        p[1]
      ), k[0] & /*r*/
      2 && ne !== (ne = -/*r*/
      p[1]) && f(Q, "cy", ne), k[0] & /*r*/
      2 && se !== (se = `-${/*r*/
      p[1]}, ${-/*r*/
      p[1]}`) && O(_e, se), k[0] & /*r*/
      2 && b !== (b = -/*r*/
      p[1] + 10) && f(z, "x", b), k[0] & /*r*/
      2 && J !== (J = -/*r*/
      p[1] + 10) && f(z, "y", J), k[0] & /*r*/
      2 && we !== (we = -/*r*/
      p[1]) && f(T, "cx", we), k[0] & /*r*/
      2 && ke !== (ke = -/*r*/
      p[1]) && f(T, "cy", ke), k[0] & /*r*/
      2 && Be !== (Be = `-${/*r*/
      p[1]}, 0`) && O(Pe, Be), k[0] & /*r*/
      2 && Ce !== (Ce = -/*r*/
      p[1]) && f(Y, "x", Ce), k[0] & /*r*/
      2 && Me !== (Me = -/*r*/
      p[1]) && f(ie, "cx", Me), k[0] & /*r, left_padding, top_padding*/
      3074 && Ve !== (Ve = `translate(${/*r*/
      p[1] + /*left_padding*/
      p[11]}, ${/*r*/
      p[1] + /*top_padding*/
      p[10]})`) && f(g, "transform", Ve), k[0] & /*display*/
      256 && Z(g, "hide", !/*display*/
      p[8].includes("referencePoints")), k[0] & /*svgWidth*/
      8192 && f(
        t,
        "width",
        /*svgWidth*/
        p[13]
      ), k[0] & /*svgHeight*/
      16384 && f(
        t,
        "height",
        /*svgHeight*/
        p[14]
      );
    },
    i: Ee,
    o: Ee,
    d(p) {
      p && R(e), Se(x, p), Se(j, p), Se(F, p), Se(H, p), L && L.d();
    }
  };
}
let Kt = "M86.60254037844386 12L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z";
function Xt(i, e, t) {
  let { data: l = [] } = e, { r = 300 } = e, { rows: n = 12 } = e, { dotsize: h = 5 } = e, { padding: s = 10 } = e, { total_seats: a } = e, { color: o = "white" } = e, { font_size: c = 12 } = e, { arc: u = 180 } = e, { text_position: d = null } = e, { selectedShape: g = "circle" } = e, { display: v = ["points", "text"] } = e, { current_party: _ = null } = e, y = [], B = null, M = !1, w = 0, S = 0, A = 0, W = 0, U = 0, N = 0;
  function re() {
    Array.isArray(s) ? s.length === 2 ? (t(10, w = s[0]), t(22, S = s[0]), t(11, A = s[1]), t(23, W = s[1])) : s.length === 4 && (t(10, w = s[0]), t(22, S = s[1]), t(11, A = s[2]), t(23, W = s[3])) : (t(10, w = s), t(22, S = s), t(11, A = s), t(23, W = s));
  }
  function ee(b) {
    b.data && !M && t(0, _ = b.data);
  }
  function K(b) {
    b.data && (_ && M && _.id === b.data.id ? (t(0, _ = null), M = !1) : (t(0, _ = b.data), M = !0));
  }
  function X() {
    M || t(0, _ = null);
  }
  const Q = (b) => {
    ee(b.site);
  }, ne = (b) => ee(b.site), te = () => X(), z = () => X(), se = (b) => {
    K(b.site);
  }, _e = (b, J) => {
    J.key === "Enter" && K(b.site);
  };
  return i.$$set = (b) => {
    "data" in b && t(19, l = b.data), "r" in b && t(1, r = b.r), "rows" in b && t(2, n = b.rows), "dotsize" in b && t(3, h = b.dotsize), "padding" in b && t(20, s = b.padding), "total_seats" in b && t(21, a = b.total_seats), "color" in b && t(4, o = b.color), "font_size" in b && t(5, c = b.font_size), "arc" in b && t(18, u = b.arc), "text_position" in b && t(6, d = b.text_position), "selectedShape" in b && t(7, g = b.selectedShape), "display" in b && t(8, v = b.display), "current_party" in b && t(0, _ = b.current_party);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*arc, data, r, rows, total_seats, points, left_padding, right_padding, top_padding, bottom_padding*/
    15470086) {
      u < 10 && t(18, u = 10), u > 360 && t(18, u = 360), re(), l.sort((J, T) => T.count - J.count), l.reduce((J, T) => J + T.count, 0), t(9, y = Yt(r, n, a, u));
      let b = 0;
      for (let J in l)
        for (let T = 0; T < l[J].count; T++)
          t(9, y[b].data = l[J], y), b++;
      t(12, B = Qt(y)), t(13, U = r * 2 + A + W), t(14, N = r * 2 + w + S);
    }
  }, [
    _,
    r,
    n,
    h,
    o,
    c,
    d,
    g,
    v,
    y,
    w,
    A,
    B,
    U,
    N,
    ee,
    K,
    X,
    u,
    l,
    s,
    a,
    S,
    W,
    Q,
    ne,
    te,
    z,
    se,
    _e
  ];
}
class $t extends vt {
  constructor(e) {
    super(), _t(
      this,
      e,
      Xt,
      Ut,
      ut,
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
function at(i) {
  let e, t;
  return e = new $t({
    props: { data: (
      /*data*/
      i[5]
    ), total_seats: ti, rows: ii }
  }), {
    c() {
      Rt(e.$$.fragment);
    },
    m(l, r) {
      pt(e, l, r), t = !0;
    },
    p(l, r) {
      const n = {};
      r & /*data*/
      32 && (n.data = /*data*/
      l[5]), e.$set(n);
    },
    i(l) {
      t || (me(e.$$.fragment, l), t = !0);
    },
    o(l) {
      He(e.$$.fragment, l), t = !1;
    },
    d(l) {
      gt(e, l);
    }
  };
}
function ft(i) {
  let e, t, l, r, n, h, s, a, o, c, u, d, g, v;
  return {
    c() {
      e = I("h1"), e.textContent = "Carto", t = G(), l = I("ul"), r = I("li"), n = q("Year: "), h = q(
        /*selected_year*/
        i[1]
      ), s = G(), a = I("li"), o = q("Election: "), c = q(
        /*selected_election*/
        i[2]
      ), u = G(), d = I("li"), g = q("Region: "), v = q(
        /*selected_region*/
        i[3]
      );
    },
    m(_, y) {
      P(_, e, y), P(_, t, y), P(_, l, y), m(l, r), m(r, n), m(r, h), m(l, s), m(l, a), m(a, o), m(a, c), m(l, u), m(l, d), m(d, g), m(d, v);
    },
    p(_, y) {
      y & /*selected_year*/
      2 && O(
        h,
        /*selected_year*/
        _[1]
      ), y & /*selected_election*/
      4 && O(
        c,
        /*selected_election*/
        _[2]
      ), y & /*selected_region*/
      8 && O(
        v,
        /*selected_region*/
        _[3]
      );
    },
    d(_) {
      _ && (R(e), R(t), R(l));
    }
  };
}
function ot(i) {
  let e, t, l, r, n, h, s, a, o, c, u, d, g, v, _, y, B, M;
  return {
    c() {
      e = I("h1"), e.textContent = "Table", t = G(), l = I("ul"), r = I("li"), n = q("Year: "), h = q(
        /*selected_year*/
        i[1]
      ), s = G(), a = I("li"), o = q("Election: "), c = q(
        /*selected_election*/
        i[2]
      ), u = G(), d = I("li"), g = q("Region: "), v = q(
        /*selected_region*/
        i[3]
      ), _ = G(), y = I("li"), B = q("Fields: "), M = q(
        /*selected_fields*/
        i[4]
      );
    },
    m(w, S) {
      P(w, e, S), P(w, t, S), P(w, l, S), m(l, r), m(r, n), m(r, h), m(l, s), m(l, a), m(a, o), m(a, c), m(l, u), m(l, d), m(d, g), m(d, v), m(l, _), m(l, y), m(y, B), m(y, M);
    },
    p(w, S) {
      S & /*selected_year*/
      2 && O(
        h,
        /*selected_year*/
        w[1]
      ), S & /*selected_election*/
      4 && O(
        c,
        /*selected_election*/
        w[2]
      ), S & /*selected_region*/
      8 && O(
        v,
        /*selected_region*/
        w[3]
      ), S & /*selected_fields*/
      16 && O(
        M,
        /*selected_fields*/
        w[4]
      );
    },
    d(w) {
      w && (R(e), R(t), R(l));
    }
  };
}
function ei(i) {
  let e, t, l, r, n = (
    /*visualisation*/
    i[0] === "hemicycle" && at(i)
  ), h = (
    /*visualisation*/
    i[0] === "carto" && ft(i)
  ), s = (
    /*visualisation*/
    i[0] === "table" && ot(i)
  );
  return {
    c() {
      n && n.c(), e = G(), h && h.c(), t = G(), s && s.c(), l = Ne();
    },
    m(a, o) {
      n && n.m(a, o), P(a, e, o), h && h.m(a, o), P(a, t, o), s && s.m(a, o), P(a, l, o), r = !0;
    },
    p(a, [o]) {
      /*visualisation*/
      a[0] === "hemicycle" ? n ? (n.p(a, o), o & /*visualisation*/
      1 && me(n, 1)) : (n = at(a), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (At(), He(n, 1, 1, () => {
        n = null;
      }), qt()), /*visualisation*/
      a[0] === "carto" ? h ? h.p(a, o) : (h = ft(a), h.c(), h.m(t.parentNode, t)) : h && (h.d(1), h = null), /*visualisation*/
      a[0] === "table" ? s ? s.p(a, o) : (s = ot(a), s.c(), s.m(l.parentNode, l)) : s && (s.d(1), s = null);
    },
    i(a) {
      r || (me(n), r = !0);
    },
    o(a) {
      He(n), r = !1;
    },
    d(a) {
      a && (R(e), R(t), R(l)), n && n.d(a), h && h.d(a), s && s.d(a);
    }
  };
}
const ti = 400, ii = 12;
function li(i, e, t) {
  let { visualisation: l = "hemicycle" } = e, { selected_year: r = 2024 } = e, { selected_election: n = "National Assembly" } = e, { selected_region: h = "Gauteng" } = e, { selected_fields: s = ["Party", "Votes", "Seats"] } = e, a = [];
  const o = [
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
  return Bt(async () => {
    const u = await (await fetch("https://iec-api.revengine.dailymaverick.co.za/results/seats/national/2019")).json();
    t(5, a = u.partyResults.map((d, g) => ({
      id: g,
      text: d.Abbreviation,
      count: d.Seats,
      color: o[g]
    })));
  }), i.$$set = (c) => {
    "visualisation" in c && t(0, l = c.visualisation), "selected_year" in c && t(1, r = c.selected_year), "selected_election" in c && t(2, n = c.selected_election), "selected_region" in c && t(3, h = c.selected_region), "selected_fields" in c && t(4, s = c.selected_fields);
  }, [
    l,
    r,
    n,
    h,
    s,
    a
  ];
}
class ri extends vt {
  constructor(e) {
    super(), _t(this, e, li, ei, ut, {
      visualisation: 0,
      selected_year: 1,
      selected_election: 2,
      selected_region: 3,
      selected_fields: 4
    });
  }
}
console.log("App");
jQuery(() => {
  document.querySelectorAll(".wp-block-tenlayer-election-engine").forEach((e) => {
    console.log(e);
    let t = {
      id: e.id,
      visualisation: jQuery(e).data("visualisation"),
      selected_year: jQuery(e).data("selected_year"),
      selected_election: jQuery(e).data("selected_election"),
      selected_region: jQuery(e).data("selected_region"),
      selected_fields: jQuery(e).data("selected_fields")
    };
    console.log(t), new ri({
      target: e,
      props: t
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Rpb24tZW5naW5lLmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3V0aWxzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9kb20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2xpZmVjeWNsZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC90cmFuc2l0aW9ucy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvZWFjaC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvQ29tcG9uZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc2hhcmVkL3ZlcnNpb24uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2Rpc2Nsb3NlLXZlcnNpb24vaW5kZXguanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdm9yb25vaWpzL3JidHJlZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdmVydGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9lZGdlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9jZWxsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9kaWFncmFtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9oYWxmZWRnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdm9yb25vaS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvbGlicy92b3Jvbm9pLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1oZW1pY3ljbGUvZGlzdC9saWJzL2hlbWljeWNsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvSGVtaWN5Y2xlLnN2ZWx0ZSIsIi4uLy4uL3NyYy9zdmVsdGUvQXBwLnN2ZWx0ZSIsIi4uLy4uL3NyYy9zdmVsdGUvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gKHgpID0+IHg7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0ZW1wbGF0ZSBTXG4gKiBAcGFyYW0ge1R9IHRhclxuICogQHBhcmFtIHtTfSBzcmNcbiAqIEByZXR1cm5zIHtUICYgU31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuXHQvLyBAdHMtaWdub3JlXG5cdGZvciAoY29uc3QgayBpbiBzcmMpIHRhcltrXSA9IHNyY1trXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7VCAmIFN9ICovICh0YXIpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIFByb21pc2VMaWtlPGFueT59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiAoXG5cdFx0ISF2YWx1ZSAmJlxuXHRcdCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgJiZcblx0XHR0eXBlb2YgKC8qKiBAdHlwZSB7YW55fSAqLyAodmFsdWUpLnRoZW4pID09PSAnZnVuY3Rpb24nXG5cdCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG5cdGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcblx0XHRsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbikge1xuXHRyZXR1cm4gZm4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbltdfSBmbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcblx0Zm5zLmZvckVhY2gocnVuKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHt0aGluZyBpcyBGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG5cdHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8IChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XG59XG5cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudF9zcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG5cdGlmIChlbGVtZW50X3NyYyA9PT0gdXJsKSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuXHRcdHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR9XG5cdC8vIFRoaXMgaXMgYWN0dWFsbHkgZmFzdGVyIHRoYW4gZG9pbmcgVVJMKC4uKS5ocmVmXG5cdHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG5cdHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBzcmNzZXQgKi9cbmZ1bmN0aW9uIHNwbGl0X3NyY3NldChzcmNzZXQpIHtcblx0cmV0dXJuIHNyY3NldC5zcGxpdCgnLCcpLm1hcCgoc3JjKSA9PiBzcmMudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxTb3VyY2VFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudH0gZWxlbWVudF9zcmNzZXRcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gc3Jjc2V0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNyY3NldF91cmxfZXF1YWwoZWxlbWVudF9zcmNzZXQsIHNyY3NldCkge1xuXHRjb25zdCBlbGVtZW50X3VybHMgPSBzcGxpdF9zcmNzZXQoZWxlbWVudF9zcmNzZXQuc3Jjc2V0KTtcblx0Y29uc3QgdXJscyA9IHNwbGl0X3NyY3NldChzcmNzZXQgfHwgJycpO1xuXG5cdHJldHVybiAoXG5cdFx0dXJscy5sZW5ndGggPT09IGVsZW1lbnRfdXJscy5sZW5ndGggJiZcblx0XHR1cmxzLmV2ZXJ5KFxuXHRcdFx0KFt1cmwsIHdpZHRoXSwgaSkgPT5cblx0XHRcdFx0d2lkdGggPT09IGVsZW1lbnRfdXJsc1tpXVsxXSAmJlxuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIHRlc3QgYm90aCB3YXlzIGJlY2F1c2UgVml0ZSB3aWxsIGNyZWF0ZSBhbiBhIGZ1bGwgVVJMIHdpdGhcblx0XHRcdFx0Ly8gYG5ldyBVUkwoYXNzZXQsIGltcG9ydC5tZXRhLnVybCkuaHJlZmAgZm9yIHRoZSBjbGllbnQgd2hlbiBgYmFzZTogJy4vJ2AsIGFuZCB0aGVcblx0XHRcdFx0Ly8gcmVsYXRpdmUgVVJMcyBpbnNpZGUgc3Jjc2V0IGFyZSBub3QgYXV0b21hdGljYWxseSByZXNvbHZlZCB0byBhYnNvbHV0ZSBVUkxzIGJ5XG5cdFx0XHRcdC8vIGJyb3dzZXJzIChpbiBjb250cmFzdCB0byBpbWcuc3JjKS4gVGhpcyBtZWFucyBib3RoIFNTUiBhbmQgRE9NIGNvZGUgY291bGRcblx0XHRcdFx0Ly8gY29udGFpbiByZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkxzLlxuXHRcdFx0XHQoc3JjX3VybF9lcXVhbChlbGVtZW50X3VybHNbaV1bMF0sIHVybCkgfHwgc3JjX3VybF9lcXVhbCh1cmwsIGVsZW1lbnRfdXJsc1tpXVswXSkpXG5cdFx0KVxuXHQpO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19lbXB0eShvYmopIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcblx0aWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcblx0aWYgKHN0b3JlID09IG51bGwpIHtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuXHRcdFx0Y2FsbGJhY2sodW5kZWZpbmVkKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5vb3A7XG5cdH1cblx0Y29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcblx0cmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIGEgc3RvcmUgYnkgc3Vic2NyaWJpbmcgYW5kIGltbWVkaWF0ZWx5IHVuc3Vic2NyaWJpbmcuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXN0b3JlI2dldFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9zdG9yZS9wdWJsaWMuanMnKS5SZWFkYWJsZTxUPn0gc3RvcmVcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG5cdGxldCB2YWx1ZTtcblx0c3Vic2NyaWJlKHN0b3JlLCAoXykgPT4gKHZhbHVlID0gXykpKCk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcblx0Y29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG5cdGlmIChkZWZpbml0aW9uKSB7XG5cdFx0Y29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuXHRcdHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcblx0cmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm4gPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSkgOiAkJHNjb3BlLmN0eDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG5cdGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG5cdFx0Y29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcblx0XHRpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGV0cztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbWVyZ2VkID0gW107XG5cdFx0XHRjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZXJnZWQ7XG5cdFx0fVxuXHRcdHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcblx0fVxuXHRyZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2UoXG5cdHNsb3QsXG5cdHNsb3RfZGVmaW5pdGlvbixcblx0Y3R4LFxuXHQkJHNjb3BlLFxuXHRzbG90X2NoYW5nZXMsXG5cdGdldF9zbG90X2NvbnRleHRfZm5cbikge1xuXHRpZiAoc2xvdF9jaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG5cdFx0c2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3Nsb3QoXG5cdHNsb3QsXG5cdHNsb3RfZGVmaW5pdGlvbixcblx0Y3R4LFxuXHQkJHNjb3BlLFxuXHRkaXJ0eSxcblx0Z2V0X3Nsb3RfY2hhbmdlc19mbixcblx0Z2V0X3Nsb3RfY29udGV4dF9mblxuKSB7XG5cdGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG5cdHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5cbi8qKiBAcmV0dXJucyB7YW55W10gfCAtMX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuXHRpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcblx0XHRjb25zdCBkaXJ0eSA9IFtdO1xuXHRcdGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGRpcnR5W2ldID0gLTE7XG5cdFx0fVxuXHRcdHJldHVybiBkaXJ0eTtcblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBrIGluIHByb3BzKSBpZiAoa1swXSAhPT0gJyQnKSByZXN1bHRba10gPSBwcm9wc1trXTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm5zIHt7fX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcblx0Y29uc3QgcmVzdCA9IHt9O1xuXHRrZXlzID0gbmV3IFNldChrZXlzKTtcblx0Zm9yIChjb25zdCBrIGluIHByb3BzKSBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJykgcmVzdFtrXSA9IHByb3BzW2tdO1xuXHRyZXR1cm4gcmVzdDtcbn1cblxuLyoqIEByZXR1cm5zIHt7fX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuXHRcdHJlc3VsdFtrZXldID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHJldHVybnMgeyh0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4pIHtcblx0bGV0IHJhbiA9IGZhbHNlO1xuXHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRpZiAocmFuKSByZXR1cm47XG5cdFx0cmFuID0gdHJ1ZTtcblx0XHRmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcblx0c3RvcmUuc2V0KHZhbHVlKTtcblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcblx0cmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbi8qKiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtbbnVtYmVyLCBzdHJpbmddfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRfY3NzX3VuaXQodmFsdWUpIHtcblx0Y29uc3Qgc3BsaXQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eXFxzKigtP1tcXGQuXSspKFteXFxzXSopXFxzKiQvKTtcblx0cmV0dXJuIHNwbGl0ID8gW3BhcnNlRmxvYXQoc3BsaXRbMV0pLCBzcGxpdFsyXSB8fCAncHgnXSA6IFsvKiogQHR5cGUge251bWJlcn0gKi8gKHZhbHVlKSwgJ3B4J107XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcyA9IFsnJywgdHJ1ZSwgMSwgJ3RydWUnLCAnY29udGVudGVkaXRhYmxlJ107XG4iLCJpbXBvcnQgeyBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcywgaGFzX3Byb3AgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyU2luZ2xldG9uLmpzJztcblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG5cdGlzX2h5ZHJhdGluZyA9IHRydWU7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRfaHlkcmF0aW5nKCkge1xuXHRpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbG93XG4gKiBAcGFyYW0ge251bWJlcn0gaGlnaFxuICogQHBhcmFtIHsoaW5kZXg6IG51bWJlcikgPT4gbnVtYmVyfSBrZXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gdXBwZXJfYm91bmQobG93LCBoaWdoLCBrZXksIHZhbHVlKSB7XG5cdC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcblx0d2hpbGUgKGxvdyA8IGhpZ2gpIHtcblx0XHRjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuXHRcdGlmIChrZXkobWlkKSA8PSB2YWx1ZSkge1xuXHRcdFx0bG93ID0gbWlkICsgMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGlnaCA9IG1pZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGxvdztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVFeH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuXHRpZiAodGFyZ2V0Lmh5ZHJhdGVfaW5pdCkgcmV0dXJuO1xuXHR0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcblx0Ly8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuXG5cdGxldCBjaGlsZHJlbiA9IC8qKiBAdHlwZSB7QXJyYXlMaWtlPE5vZGVFeDI+fSAqLyAodGFyZ2V0LmNoaWxkTm9kZXMpO1xuXHQvLyBJZiB0YXJnZXQgaXMgPGhlYWQ+LCB0aGVyZSBtYXkgYmUgY2hpbGRyZW4gd2l0aG91dCBjbGFpbV9vcmRlclxuXHRpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcblx0XHRjb25zdCBteV9jaGlsZHJlbiA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBjaGlsZHJlbltpXTtcblx0XHRcdGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bXlfY2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hpbGRyZW4gPSBteV9jaGlsZHJlbjtcblx0fVxuXHQvKlxuXHQgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuXHQgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG5cdCAqIG5vZGVzIHRoYXQgYXJlIGFscmVhZHkgY2xhaW1lZCBpbiBvcmRlciBhbmQgb25seSBtb3ZpbmcgdGhlIHJlc3QuIFRoZSBsb25nZXN0XG5cdCAqIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG5cdCAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG5cdCAqXG5cdCAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuXHQgKiBwb3NzaWJsZS5cblx0ICpcblx0ICogUHJvb2Y6XG5cdCAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuXHQgKiBhbHdheXMgZm9ybSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLCBzaW5jZSB0aGV5IGRvIG5vdCBtb3ZlIGFtb25nIGVhY2ggb3RoZXJcblx0ICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcblx0ICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cblx0ICovXG5cdC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG5cdC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcblx0Y29uc3QgbSA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCArIDEpO1xuXHQvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuXHRjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcblx0bVswXSA9IC0xO1xuXHRsZXQgbG9uZ2VzdCA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG5cdFx0Ly8gRmluZCB0aGUgbGFyZ2VzdCBzdWJzZXF1ZW5jZSBsZW5ndGggc3VjaCB0aGF0IGl0IGVuZHMgaW4gYSB2YWx1ZSBsZXNzIHRoYW4gb3VyIGN1cnJlbnQgdmFsdWVcblx0XHQvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuXHRcdC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG5cdFx0Y29uc3Qgc2VxX2xlbiA9XG5cdFx0XHQobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudFxuXHRcdFx0XHQ/IGxvbmdlc3QgKyAxXG5cdFx0XHRcdDogdXBwZXJfYm91bmQoMSwgbG9uZ2VzdCwgKGlkeCkgPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcblx0XHRwW2ldID0gbVtzZXFfbGVuXSArIDE7XG5cdFx0Y29uc3QgbmV3X2xlbiA9IHNlcV9sZW4gKyAxO1xuXHRcdC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cblx0XHRtW25ld19sZW5dID0gaTtcblx0XHRsb25nZXN0ID0gTWF0aC5tYXgobmV3X2xlbiwgbG9uZ2VzdCk7XG5cdH1cblx0Ly8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZUV4MltdfVxuXHQgKi9cblx0Y29uc3QgbGlzID0gW107XG5cdC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlRXgyW119XG5cdCAqL1xuXHRjb25zdCB0b19tb3ZlID0gW107XG5cdGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblx0Zm9yIChsZXQgY3VyID0gbVtsb25nZXN0XSArIDE7IGN1ciAhPSAwOyBjdXIgPSBwW2N1ciAtIDFdKSB7XG5cdFx0bGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuXHRcdGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG5cdFx0XHR0b19tb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuXHRcdH1cblx0XHRsYXN0LS07XG5cdH1cblx0Zm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG5cdFx0dG9fbW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcblx0fVxuXHRsaXMucmV2ZXJzZSgpO1xuXHQvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcblx0dG9fbW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG5cdC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG5cdGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRvX21vdmUubGVuZ3RoOyBpKyspIHtcblx0XHR3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9fbW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcblx0XHRcdGorKztcblx0XHR9XG5cdFx0Y29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUodG9fbW92ZVtpXSwgYW5jaG9yKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZV9zaGVldF9pZFxuICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuXHRjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG5cdGlmICghYXBwZW5kX3N0eWxlc190by5nZXRFbGVtZW50QnlJZChzdHlsZV9zaGVldF9pZCkpIHtcblx0XHRjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcblx0XHRzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlcztcblx0XHRhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtTaGFkb3dSb290IHwgRG9jdW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuXHRpZiAoIW5vZGUpIHJldHVybiBkb2N1bWVudDtcblx0Y29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUgPyBub2RlLmdldFJvb3ROb2RlKCkgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG5cdGlmIChyb290ICYmIC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QpIHtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCk7XG5cdH1cblx0cmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtDU1NTdHlsZVNoZWV0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSkge1xuXHRjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcblx0Ly8gRm9yIHRyYW5zaXRpb25zIHRvIHdvcmsgd2l0aG91dCAnc3R5bGUtc3JjOiB1bnNhZmUtaW5saW5lJyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSxcblx0Ly8gdGhlc2UgZW1wdHkgdGFncyBuZWVkIHRvIGJlIGFsbG93ZWQgd2l0aCBhIGhhc2ggYXMgYSB3b3JrYXJvdW5kIHVudGlsIHdlIG1vdmUgdG8gdGhlIFdlYiBBbmltYXRpb25zIEFQSS5cblx0Ly8gVXNpbmcgdGhlIGhhc2ggZm9yIHRoZSBlbXB0eSBzdHJpbmcgKGZvciBhbiBlbXB0eSB0YWcpIHdvcmtzIGluIGFsbCBicm93c2VycyBleGNlcHQgU2FmYXJpLlxuXHQvLyBTbyBhcyBhIHdvcmthcm91bmQgZm9yIHRoZSB3b3JrYXJvdW5kLCB3aGVuIHdlIGFwcGVuZCBlbXB0eSBzdHlsZSB0YWdzIHdlIHNldCB0aGVpciBjb250ZW50IHRvIC8qIGVtcHR5ICovLlxuXHQvLyBUaGUgaGFzaCAnc2hhMjU2LTlPbE5PMERORWVhVnpITDRSWndDTHNCSEE4V0JROHRvQnAvNEY1WFYybmM9JyB3aWxsIHRoZW4gd29yayBldmVuIGluIFNhZmFyaS5cblx0c3R5bGVfZWxlbWVudC50ZXh0Q29udGVudCA9ICcvKiBlbXB0eSAqLyc7XG5cdGFwcGVuZF9zdHlsZXNoZWV0KGdldF9yb290X2Zvcl9zdHlsZShub2RlKSwgc3R5bGVfZWxlbWVudCk7XG5cdHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2hhZG93Um9vdCB8IERvY3VtZW50fSBub2RlXG4gKiBAcGFyYW0ge0hUTUxTdHlsZUVsZW1lbnR9IHN0eWxlXG4gKiBAcmV0dXJucyB7Q1NTU3R5bGVTaGVldH1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcblx0YXBwZW5kKC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovIChub2RlKS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcblx0cmV0dXJuIHN0eWxlLnNoZWV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZUV4fSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKSB7XG5cdGlmIChpc19oeWRyYXRpbmcpIHtcblx0XHRpbml0X2h5ZHJhdGUodGFyZ2V0KTtcblx0XHRpZiAoXG5cdFx0XHR0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHQodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwgJiYgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KVxuXHRcdCkge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcblx0XHR9XG5cdFx0Ly8gU2tpcCBub2RlcyBvZiB1bmRlZmluZWQgb3JkZXJpbmdcblx0XHR3aGlsZSAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwgJiYgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdFx0aWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuXHRcdFx0aWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBbYW5jaG9yXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlRXh9IHRhcmdldFxuICogQHBhcmFtIHtOb2RlRXh9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZUV4fSBbYW5jaG9yXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG5cdGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuXHRcdGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcblx0fSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9IGFuY2hvcikge1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG5cdGlmIChub2RlLnBhcmVudE5vZGUpIHtcblx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBLXG4gKiBAcGFyYW0ge0t9IG5hbWVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFRhZ05hbWVNYXBbS119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IEtcbiAqIEBwYXJhbSB7S30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlzXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUge2tleW9mIFR9IEtcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKiBAcGFyYW0ge0tbXX0gZXhjbHVkZVxuICogQHJldHVybnMge1BpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuXHRjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUge1BpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj59ICovICh7fSk7XG5cdGZvciAoY29uc3QgayBpbiBvYmopIHtcblx0XHRpZiAoXG5cdFx0XHRoYXNfcHJvcChvYmosIGspICYmXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRleGNsdWRlLmluZGV4T2YoaykgPT09IC0xXG5cdFx0KSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0YXJnZXRba10gPSBvYmpba107XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcH0gS1xuICogQHBhcmFtIHtLfSBuYW1lXG4gKiBAcmV0dXJucyB7U1ZHRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICogQHJldHVybnMge1RleHR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0KGRhdGEpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwYWNlKCkge1xuXHRyZXR1cm4gdGV4dCgnICcpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHRyZXR1cm4gdGV4dCgnJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtDb21tZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudChjb250ZW50KSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGNvbnRlbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0fSBoYW5kbGVyXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG5cdHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiBhbnl9ICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24oZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGYoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKSBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IHZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGlmIChldmVudC5pc1RydXN0ZWQpIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSkgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG4vKipcbiAqIExpc3Qgb2YgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBhbHdheXMgYmUgc2V0IHRocm91Z2ggdGhlIGF0dHIgbWV0aG9kLFxuICogYmVjYXVzZSB1cGRhdGluZyB0aGVtIHRocm91Z2ggdGhlIHByb3BlcnR5IHNldHRlciBkb2Vzbid0IHdvcmsgcmVsaWFibHkuXG4gKiBJbiB0aGUgZXhhbXBsZSBvZiBgd2lkdGhgL2BoZWlnaHRgLCB0aGUgcHJvYmxlbSBpcyB0aGF0IHRoZSBzZXR0ZXIgb25seVxuICogYWNjZXB0cyBudW1lcmljIHZhbHVlcywgYnV0IHRoZSBhdHRyaWJ1dGUgY2FuIGFsc28gYmUgc2V0IHRvIGEgc3RyaW5nIGxpa2UgYDUwJWAuXG4gKiBJZiB0aGlzIGxpc3QgYmVjb21lcyB0b28gYmlnLCByZXRoaW5rIHRoaXMgYXBwcm9hY2guXG4gKi9cbmNvbnN0IGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlID0gWyd3aWR0aCcsICdoZWlnaHQnXTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7eyBbeDogc3RyaW5nXTogc3RyaW5nIH19IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHQvLyBAdHMtaWdub3JlXG5cdGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuXHRcdFx0LyoqIEB0eXBlIHthbnl9ICovIChub2RlKS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XSAmJlxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XS5zZXQgJiZcblx0XHRcdGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlLmluZGV4T2Yoa2V5KSA9PT0gLTFcblx0XHQpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3sgW3g6IHN0cmluZ106IHN0cmluZyB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IGRhdGFfbWFwXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcChub2RlLCBkYXRhX21hcCkge1xuXHRPYmplY3Qua2V5cyhkYXRhX21hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0c2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwga2V5LCBkYXRhX21hcFtrZXldKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0Y29uc3QgbG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7IC8vIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGV4aXN0aW5nIGJlaGF2aW9yIHdlIGRvIGxvd2VyY2FzZSBmaXJzdFxuXHRpZiAobG93ZXIgaW4gbm9kZSkge1xuXHRcdG5vZGVbbG93ZXJdID0gdHlwZW9mIG5vZGVbbG93ZXJdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICcnID8gdHJ1ZSA6IHZhbHVlO1xuXHR9IGVsc2UgaWYgKHByb3AgaW4gbm9kZSkge1xuXHRcdG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSh0YWcpIHtcblx0cmV0dXJuIC8tLy50ZXN0KHRhZykgPyBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAgOiBzZXRfYXR0cmlidXRlcztcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zdmVsdGVfZGF0YXNldChub2RlKSB7XG5cdHJldHVybiBub2RlLmRhdGFzZXQuc3ZlbHRlSDtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dW5rbm93bltdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG5cdGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRpZiAoIWNoZWNrZWQpIHtcblx0XHR2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBncm91cFxuICogQHJldHVybnMge3sgcCguLi5pbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSk6IHZvaWQ7IHIoKTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cChncm91cCkge1xuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9pbnB1dHM7XG5cdHJldHVybiB7XG5cdFx0LyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuXHRcdFx0X2lucHV0cyA9IGlucHV0cztcblx0XHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGdyb3VwLnB1c2goaW5wdXQpKTtcblx0XHR9LFxuXHRcdC8qIHJlbW92ZSAqLyByKCkge1xuXHRcdFx0X2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gZ3JvdXAuc3BsaWNlKGdyb3VwLmluZGV4T2YoaW5wdXQpLCAxKSk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGluZGV4ZXNcbiAqIEByZXR1cm5zIHt7IHUobmV3X2luZGV4ZXM6IG51bWJlcltdKTogdm9pZDsgcCguLi5pbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSk6IHZvaWQ7IHI6ICgpID0+IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYyhncm91cCwgaW5kZXhlcykge1xuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX0gKi9cblx0bGV0IF9pbnB1dHM7XG5cblx0ZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGdyb3VwID0gZ3JvdXBbaW5kZXhlc1tpXV0gPSBncm91cFtpbmRleGVzW2ldXSB8fCBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBwdXNoKCkge1xuXHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IF9ncm91cC5wdXNoKGlucHV0KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBfZ3JvdXAuc3BsaWNlKF9ncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0LyogdXBkYXRlICovIHUobmV3X2luZGV4ZXMpIHtcblx0XHRcdGluZGV4ZXMgPSBuZXdfaW5kZXhlcztcblx0XHRcdGNvbnN0IG5ld19ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcblx0XHRcdGlmIChuZXdfZ3JvdXAgIT09IF9ncm91cCkge1xuXHRcdFx0XHRyZW1vdmUoKTtcblx0XHRcdFx0X2dyb3VwID0gbmV3X2dyb3VwO1xuXHRcdFx0XHRwdXNoKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiBwdXNoICovIHAoLi4uaW5wdXRzKSB7XG5cdFx0XHRfaW5wdXRzID0gaW5wdXRzO1xuXHRcdFx0cHVzaCgpO1xuXHRcdH0sXG5cdFx0LyogcmVtb3ZlICovIHI6IHJlbW92ZVxuXHR9O1xufVxuXG4vKiogQHJldHVybnMge251bWJlcn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5cbi8qKiBAcmV0dXJucyB7YW55W119ICovXG5leHBvcnQgZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG5cdGNvbnN0IGFycmF5ID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7Q2hpbGROb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbml0X2NsYWltX2luZm8obm9kZXMpIHtcblx0aWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuXHRcdG5vZGVzLmNsYWltX2luZm8gPSB7IGxhc3RfaW5kZXg6IDAsIHRvdGFsX2NsYWltZWQ6IDAgfTtcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Q2hpbGROb2RlRXh9IFJcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcGFyYW0geyhub2RlOiBDaGlsZE5vZGVFeCkgPT4gbm9kZSBpcyBSfSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7KG5vZGU6IENoaWxkTm9kZUV4KSA9PiBDaGlsZE5vZGVFeCB8IHVuZGVmaW5lZH0gcHJvY2Vzc19ub2RlXG4gKiBAcGFyYW0geygpID0+IFJ9IGNyZWF0ZV9ub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRvbnRfdXBkYXRlX2xhc3RfaW5kZXhcbiAqIEByZXR1cm5zIHtSfVxuICovXG5mdW5jdGlvbiBjbGFpbV9ub2RlKG5vZGVzLCBwcmVkaWNhdGUsIHByb2Nlc3Nfbm9kZSwgY3JlYXRlX25vZGUsIGRvbnRfdXBkYXRlX2xhc3RfaW5kZXggPSBmYWxzZSkge1xuXHQvLyBUcnkgdG8gZmluZCBub2RlcyBpbiBhbiBvcmRlciBzdWNoIHRoYXQgd2UgbGVuZ3RoZW4gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuXHRpbml0X2NsYWltX2luZm8obm9kZXMpO1xuXHRjb25zdCByZXN1bHRfbm9kZSA9ICgoKSA9PiB7XG5cdFx0Ly8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG5cdFx0Zm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gbm9kZXNbaV07XG5cdFx0XHRpZiAocHJlZGljYXRlKG5vZGUpKSB7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc19ub2RlKG5vZGUpO1xuXHRcdFx0XHRpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdG5vZGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZG9udF91cGRhdGVfbGFzdF9pbmRleCkge1xuXHRcdFx0XHRcdG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuXHRcdC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuXHRcdGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdFx0aWYgKHByZWRpY2F0ZShub2RlKSkge1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3Nfbm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRfdXBkYXRlX2xhc3RfaW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuXHRcdHJldHVybiBjcmVhdGVfbm9kZSgpO1xuXHR9KSgpO1xuXHRyZXN1bHRfbm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcblx0bm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG5cdHJldHVybiByZXN1bHRfbm9kZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZykgPT4gRWxlbWVudCB8IFNWR0VsZW1lbnR9IGNyZWF0ZV9lbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIEVsZW1lbnQgfCBTVkdFbGVtZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLFxuXHRcdC8qKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlID0gW107XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcblx0XHRcdFx0XHRyZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlbW92ZS5mb3JFYWNoKCh2KSA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cdFx0KCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSlcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgU1ZHRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0cmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuXHRyZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuXHRyZXR1cm4gY2xhaW1fbm9kZShcblx0XHRub2Rlcyxcblx0XHQvKiogQHJldHVybnMge25vZGUgaXMgVGV4dH0gKi9cblx0XHQobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyxcblx0XHQvKiogQHBhcmFtIHtUZXh0fSBub2RlICovXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IGRhdGFfc3RyID0gJycgKyBkYXRhO1xuXHRcdFx0aWYgKG5vZGUuZGF0YS5zdGFydHNXaXRoKGRhdGFfc3RyKSkge1xuXHRcdFx0XHRpZiAobm9kZS5kYXRhLmxlbmd0aCAhPT0gZGF0YV9zdHIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFfc3RyLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUuZGF0YSA9IGRhdGFfc3RyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0KCkgPT4gdGV4dChkYXRhKSxcblx0XHR0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuXHQpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtUZXh0fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG5cdHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7Q29tbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2NvbW1lbnQobm9kZXMsIGRhdGEpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIENvbW1lbnR9ICovXG5cdFx0KG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDgsXG5cdFx0LyoqIEBwYXJhbSB7Q29tbWVudH0gbm9kZSAqL1xuXHRcdChub2RlKSA9PiB7XG5cdFx0XHRub2RlLmRhdGEgPSAnJyArIGRhdGE7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cdFx0KCkgPT4gY29tbWVudChkYXRhKSxcblx0XHR0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldF9jb21tZW50X2lkeChub2RlcywgdGV4dCwgc3RhcnQpIHtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfc3ZnXG4gKiBAcmV0dXJucyB7SHRtbFRhZ0h5ZHJhdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzLCBpc19zdmcpIHtcblx0Ly8gZmluZCBodG1sIG9wZW5pbmcgdGFnXG5cdGNvbnN0IHN0YXJ0X2luZGV4ID0gZ2V0X2NvbW1lbnRfaWR4KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcblx0Y29uc3QgZW5kX2luZGV4ID0gZ2V0X2NvbW1lbnRfaWR4KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXggKyAxKTtcblx0aWYgKHN0YXJ0X2luZGV4ID09PSAtMSB8fCBlbmRfaW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2Zyk7XG5cdH1cblxuXHRpbml0X2NsYWltX2luZm8obm9kZXMpO1xuXHRjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcblx0ZGV0YWNoKGh0bWxfdGFnX25vZGVzWzBdKTtcblx0ZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcblx0Y29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuXHRpZiAoY2xhaW1lZF9ub2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oaXNfc3ZnKTtcblx0fVxuXHRmb3IgKGNvbnN0IG4gb2YgY2xhaW1lZF9ub2Rlcykge1xuXHRcdG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG5cdFx0bm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG5cdH1cblx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2ZywgY2xhaW1lZF9ub2Rlcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuXHRkYXRhID0gJycgKyBkYXRhO1xuXHRpZiAodGV4dC5kYXRhID09PSBkYXRhKSByZXR1cm47XG5cdHRleHQuZGF0YSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RhdGFfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEpIHtcblx0ZGF0YSA9ICcnICsgZGF0YTtcblx0aWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKSByZXR1cm47XG5cdHRleHQuZGF0YSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoZGF0YSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXh0fSB0ZXh0XG4gKiBAcGFyYW0ge3Vua25vd259IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyX3ZhbHVlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhLCBhdHRyX3ZhbHVlKSB7XG5cdGlmICh+Y29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMuaW5kZXhPZihhdHRyX3ZhbHVlKSkge1xuXHRcdHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKTtcblx0fSBlbHNlIHtcblx0XHRzZXRfZGF0YSh0ZXh0LCBkYXRhKTtcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcblx0aW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gZG8gbm90aGluZ1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcblx0fSBlbHNlIHtcblx0XHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlLCBtb3VudGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0aWYgKCFtb3VudGluZyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG5cdGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuXHRyZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIChvcHRpb24pID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxuXG4vKipcbiAqIEB0eXBlIHtib29sZWFufSAqL1xubGV0IGNyb3Nzb3JpZ2luO1xuXG4vKipcbiAqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuXHRpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNyb3Nzb3JpZ2luID0gZmFsc2U7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG5cdFx0XHRcdHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y3Jvc3NvcmlnaW4gPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfaWZyYW1lX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuXHRjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcblx0XHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0fVxuXHRjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcblx0aWZyYW1lLnNldEF0dHJpYnV0ZShcblx0XHQnc3R5bGUnLFxuXHRcdCdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuXHRcdFx0J292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOydcblx0KTtcblx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRpZnJhbWUudGFiSW5kZXggPSAtMTtcblx0Y29uc3QgY3Jvc3NvcmlnaW4gPSBpc19jcm9zc29yaWdpbigpO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7KCkgPT4gdm9pZH1cblx0ICovXG5cdGxldCB1bnN1YnNjcmliZTtcblx0aWYgKGNyb3Nzb3JpZ2luKSB7XG5cdFx0aWZyYW1lLnNyYyA9IFwiZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+XCI7XG5cdFx0dW5zdWJzY3JpYmUgPSBsaXN0ZW4oXG5cdFx0XHR3aW5kb3csXG5cdFx0XHQnbWVzc2FnZScsXG5cdFx0XHQvKiogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGV2ZW50ICovIChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdykgZm4oKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuXHRcdGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHR1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcblx0XHRcdC8vIG1ha2Ugc3VyZSBhbiBpbml0aWFsIHJlc2l6ZSBldmVudCBpcyBmaXJlZCBfYWZ0ZXJfIHRoZSBpZnJhbWUgaXMgbG9hZGVkICh3aGljaCBpcyBhc3luY2hyb25vdXMpXG5cdFx0XHQvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvNDIzM1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHR9XG5cdGFwcGVuZChub2RlLCBpZnJhbWUpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmIChjcm9zc29yaWdpbikge1xuXHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHR9IGVsc2UgaWYgKHVuc3Vic2NyaWJlICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG5cdFx0XHR1bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHRkZXRhY2goaWZyYW1lKTtcblx0fTtcbn1cbmV4cG9ydCBjb25zdCByZXNpemVfb2JzZXJ2ZXJfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHtcblx0Ym94OiAnY29udGVudC1ib3gnXG59KTtcbmV4cG9ydCBjb25zdCByZXNpemVfb2JzZXJ2ZXJfYm9yZGVyX2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oe1xuXHRib3g6ICdib3JkZXItYm94J1xufSk7XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2RldmljZV9waXhlbF9jb250ZW50X2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oXG5cdHsgYm94OiAnZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94JyB9XG4pO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24gfTtcblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG5cdC8vIFRoZSBgISFgIGlzIHJlcXVpcmVkIGJlY2F1c2UgYW4gYHVuZGVmaW5lZGAgZmxhZyBtZWFucyBmbGlwcGluZyB0aGUgY3VycmVudCBzdGF0ZS5cblx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsICEhdG9nZ2xlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7VH0gW2RldGFpbF1cbiAqIEBwYXJhbSB7eyBidWJibGVzPzogYm9vbGVhbiwgY2FuY2VsYWJsZT86IGJvb2xlYW4gfX0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnQ8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCB7IGJ1YmJsZXMgPSBmYWxzZSwgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuXHRyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgZGV0YWlsLCBidWJibGVzLCBjYW5jZWxhYmxlIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcmV0dXJucyB7Q2hpbGROb2RlQXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcblx0cmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbm9kZUlkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoZWFkXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkX3NlbGVjdG9yKG5vZGVJZCwgaGVhZCkge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0bGV0IHN0YXJ0ZWQgPSAwO1xuXHRmb3IgKGNvbnN0IG5vZGUgb2YgaGVhZC5jaGlsZE5vZGVzKSB7XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovKSB7XG5cdFx0XHRjb25zdCBjb21tZW50ID0gbm9kZS50ZXh0Q29udGVudC50cmltKCk7XG5cdFx0XHRpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X0VORGApIHtcblx0XHRcdFx0c3RhcnRlZCAtPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X1NUQVJUYCkge1xuXHRcdFx0XHRzdGFydGVkICs9IDE7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcblx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuLyoqICovXG5leHBvcnQgY2xhc3MgSHRtbFRhZyB7XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAZGVmYXVsdCBmYWxzZVxuXHQgKi9cblx0aXNfc3ZnID0gZmFsc2U7XG5cdC8qKiBwYXJlbnQgZm9yIGNyZWF0aW5nIG5vZGUgKi9cblx0ZSA9IHVuZGVmaW5lZDtcblx0LyoqIGh0bWwgdGFnIG5vZGVzICovXG5cdG4gPSB1bmRlZmluZWQ7XG5cdC8qKiB0YXJnZXQgKi9cblx0dCA9IHVuZGVmaW5lZDtcblx0LyoqIGFuY2hvciAqL1xuXHRhID0gdW5kZWZpbmVkO1xuXHRjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuXHRcdHRoaXMuaXNfc3ZnID0gaXNfc3ZnO1xuXHRcdHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjKGh0bWwpIHtcblx0XHR0aGlzLmgoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IHRhcmdldFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgU1ZHRWxlbWVudH0gYW5jaG9yXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0bShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcblx0XHRpZiAoIXRoaXMuZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNfc3ZnKVxuXHRcdFx0XHR0aGlzLmUgPSBzdmdfZWxlbWVudCgvKiogQHR5cGUge2tleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwfSAqLyAodGFyZ2V0Lm5vZGVOYW1lKSk7XG5cdFx0XHQvKiogIzczNjQgIHRhcmdldCBmb3IgPHRlbXBsYXRlPiBtYXkgYmUgcHJvdmlkZWQgYXMgI2RvY3VtZW50LWZyYWdtZW50KDExKSAqLyBlbHNlXG5cdFx0XHRcdHRoaXMuZSA9IGVsZW1lbnQoXG5cdFx0XHRcdFx0LyoqIEB0eXBlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9ICovIChcblx0XHRcdFx0XHRcdHRhcmdldC5ub2RlVHlwZSA9PT0gMTEgPyAnVEVNUExBVEUnIDogdGFyZ2V0Lm5vZGVOYW1lXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0dGhpcy50ID1cblx0XHRcdFx0dGFyZ2V0LnRhZ05hbWUgIT09ICdURU1QTEFURSdcblx0XHRcdFx0XHQ/IHRhcmdldFxuXHRcdFx0XHRcdDogLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAodGFyZ2V0KS5jb250ZW50O1xuXHRcdFx0dGhpcy5jKGh0bWwpO1xuXHRcdH1cblx0XHR0aGlzLmkoYW5jaG9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGgoaHRtbCkge1xuXHRcdHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHRoaXMubiA9IEFycmF5LmZyb20oXG5cdFx0XHR0aGlzLmUubm9kZU5hbWUgPT09ICdURU1QTEFURScgPyB0aGlzLmUuY29udGVudC5jaGlsZE5vZGVzIDogdGhpcy5lLmNoaWxkTm9kZXNcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRpKGFuY2hvcikge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0cChodG1sKSB7XG5cdFx0dGhpcy5kKCk7XG5cdFx0dGhpcy5oKGh0bWwpO1xuXHRcdHRoaXMuaSh0aGlzLmEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRkKCkge1xuXHRcdHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcblx0LyoqIEB0eXBlIHtFbGVtZW50W119IGh5ZHJhdGlvbiBjbGFpbWVkIG5vZGVzICovXG5cdGwgPSB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UsIGNsYWltZWRfbm9kZXMpIHtcblx0XHRzdXBlcihpc19zdmcpO1xuXHRcdHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG5cdFx0dGhpcy5sID0gY2xhaW1lZF9ub2Rlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGMoaHRtbCkge1xuXHRcdGlmICh0aGlzLmwpIHtcblx0XHRcdHRoaXMubiA9IHRoaXMubDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VwZXIuYyhodG1sKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGkoYW5jaG9yKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuXHRcdHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZXNjYXBlZCA9IHtcblx0J1wiJzogJyZxdW90OycsXG5cdCcmJzogJyZhbXA7Jyxcblx0JzwnOiAnJmx0Oydcbn07XG5cbmNvbnN0IHJlZ2V4X2F0dHJpYnV0ZV9jaGFyYWN0ZXJzX3RvX2VzY2FwZSA9IC9bXCImPF0vZztcblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhlIGF0dHJpYnV0ZSBpdHNlbGYgc2hvdWxkIGJlIHN1cnJvdW5kZWQgaW4gZG91YmxlIHF1b3Rlc1xuICogQHBhcmFtIHthbnl9IGF0dHJpYnV0ZVxuICovXG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlKGF0dHJpYnV0ZSkge1xuXHRyZXR1cm4gU3RyaW5nKGF0dHJpYnV0ZSkucmVwbGFjZShyZWdleF9hdHRyaWJ1dGVfY2hhcmFjdGVyc190b19lc2NhcGUsIChtYXRjaCkgPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gYXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5X3NwcmVhZChhdHRyaWJ1dGVzKSB7XG5cdGxldCBzdHIgPSAnICc7XG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoYXR0cmlidXRlc1trZXldICE9IG51bGwpIHtcblx0XHRcdHN0ciArPSBgJHtrZXl9PVwiJHtlc2NhcGVfYXR0cmlidXRlKGF0dHJpYnV0ZXNba2V5XSl9XCIgYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0ZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goXG5cdFx0LyoqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSAqLyAobm9kZSkgPT4ge1xuXHRcdFx0cmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcblx0XHR9XG5cdCk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudChjb21wb25lbnQsIHByb3BzKSB7XG5cdHJldHVybiBuZXcgY29tcG9uZW50KHByb3BzKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7Tm9kZSAmIHtcbiAqIFx0Y2xhaW1fb3JkZXI/OiBudW1iZXI7XG4gKiBcdGh5ZHJhdGVfaW5pdD86IHRydWU7XG4gKiBcdGFjdHVhbF9lbmRfY2hpbGQ/OiBOb2RlRXg7XG4gKiBcdGNoaWxkTm9kZXM6IE5vZGVMaXN0T2Y8Tm9kZUV4PjtcbiAqIH19IE5vZGVFeFxuICovXG5cbi8qKiBAdHlwZWRlZiB7Q2hpbGROb2RlICYgTm9kZUV4fSBDaGlsZE5vZGVFeCAqL1xuXG4vKiogQHR5cGVkZWYge05vZGVFeCAmIHsgY2xhaW1fb3JkZXI6IG51bWJlciB9fSBOb2RlRXgyICovXG5cbi8qKlxuICogQHR5cGVkZWYge0NoaWxkTm9kZUV4W10gJiB7XG4gKiBcdGNsYWltX2luZm8/OiB7XG4gKiBcdFx0bGFzdF9pbmRleDogbnVtYmVyO1xuICogXHRcdHRvdGFsX2NsYWltZWQ6IG51bWJlcjtcbiAqIFx0fTtcbiAqIH19IENoaWxkTm9kZUFycmF5XG4gKi9cbiIsImltcG9ydCB7IGN1c3RvbV9ldmVudCB9IGZyb20gJy4vZG9tLmpzJztcblxuZXhwb3J0IGxldCBjdXJyZW50X2NvbXBvbmVudDtcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcblx0Y3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG5cdGlmICghY3VycmVudF9jb21wb25lbnQpIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG5cdHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCBhZnRlciBhbnkgc3RhdGUgY2hhbmdlLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYmVmb3JlIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNiZWZvcmV1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBUaGUgYG9uTW91bnRgIGZ1bmN0aW9uIHNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NLlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlICppbnNpZGUqIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS5cbiAqXG4gKiBJZiBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIF9zeW5jaHJvbm91c2x5XyBmcm9tIGBvbk1vdW50YCwgaXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBgb25Nb3VudGAgZG9lcyBub3QgcnVuIGluc2lkZSBhIFtzZXJ2ZXItc2lkZSBjb21wb25lbnRdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXNlcnZlci1zaWRlLWNvbXBvbmVudC1hcGkpLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbm1vdW50XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+IHwgUHJvbWlzZTxpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+PiB8ICgoKSA9PiBhbnkpfSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdW50KGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBhZnRlciB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjYWZ0ZXJ1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbmRlc3Ryb3lcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBUaGUgZXZlbnQgZGlzcGF0Y2hlciBjYW4gYmUgdHlwZWQgdG8gbmFycm93IHRoZSBhbGxvd2VkIGV2ZW50IG5hbWVzIGFuZCB0aGUgdHlwZSBvZiB0aGUgYGRldGFpbGAgYXJndW1lbnQ6XG4gKiBgYGB0c1xuICogY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXI8e1xuICogIGxvYWRlZDogbmV2ZXI7IC8vIGRvZXMgbm90IHRha2UgYSBkZXRhaWwgYXJndW1lbnRcbiAqICBjaGFuZ2U6IHN0cmluZzsgLy8gdGFrZXMgYSBkZXRhaWwgYXJndW1lbnQgb2YgdHlwZSBzdHJpbmcsIHdoaWNoIGlzIHJlcXVpcmVkXG4gKiAgb3B0aW9uYWw6IG51bWJlciB8IG51bGw7IC8vIHRha2VzIGFuIG9wdGlvbmFsIGRldGFpbCBhcmd1bWVudCBvZiB0eXBlIG51bWJlclxuICogfT4oKTtcbiAqIGBgYFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNjcmVhdGVldmVudGRpc3BhdGNoZXJcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW0V2ZW50TWFwPWFueV1cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljLmpzJykuRXZlbnREaXNwYXRjaGVyPEV2ZW50TWFwPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcblx0Y29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG5cdHJldHVybiAodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pID0+IHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuXHRcdGlmIChjYWxsYmFja3MpIHtcblx0XHRcdC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcblx0XHRcdC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cblx0XHRcdGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuXHRcdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IHtcblx0XHRcdFx0Zm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNzZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHBhcmFtIHtUfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRhbGxjb250ZXh0c1xuICogQHRlbXBsYXRlIHtNYXA8YW55LCBhbnk+fSBbVD1NYXA8YW55LCBhbnk+XVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcblx0cmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjaGFzY29udGV4dFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cblxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbi8qKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGV2ZW50XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG5cdGlmIChjYWxsYmFja3MpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgcnVuX2FsbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3VycmVudF9jb21wb25lbnQsIHNldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcblxuZXhwb3J0IGNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmV4cG9ydCBjb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5leHBvcnQgY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcblxubGV0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcblxuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5cbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSAvKiBAX19QVVJFX18gKi8gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG5cdGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuXHRcdHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuXHRcdHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2soKSB7XG5cdHNjaGVkdWxlX3VwZGF0ZSgpO1xuXHRyZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcblx0cmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuXHRmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbi8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4vLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4vLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbi8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbi8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4vLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbi8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbi8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4vLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbi8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4vLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5cbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKCkge1xuXHQvLyBEbyBub3QgcmVlbnRlciBmbHVzaCB3aGlsZSBkaXJ0eSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBhcyB0aGlzIGNhblxuXHQvLyByZXN1bHQgaW4gYW4gaW5maW5pdGUgbG9vcC4gSW5zdGVhZCwgbGV0IHRoZSBpbm5lciBmbHVzaCBoYW5kbGUgaXQuXG5cdC8vIFJlZW50cmFuY3kgaXMgb2sgYWZ0ZXJ3YXJkcyBmb3IgYmluZGluZ3MgZXRjLlxuXHRpZiAoZmx1c2hpZHggIT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cdGRvIHtcblx0XHQvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG5cdFx0Ly8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuXHRcdFx0XHRmbHVzaGlkeCsrO1xuXHRcdFx0XHRzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcblx0XHRcdFx0dXBkYXRlKGNvbXBvbmVudC4kJCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuXHRcdFx0ZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuXHRcdFx0Zmx1c2hpZHggPSAwO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuXHRcdGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcblx0XHRmbHVzaGlkeCA9IDA7XG5cdFx0d2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aCkgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcblx0XHQvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcblx0XHQvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG5cdFx0Ly8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG5cdFx0XHRpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcblx0XHRcdFx0Ly8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuXHRcdFx0XHRzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG5cdH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcblx0d2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcblx0fVxuXHR1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cdHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcblx0aWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG5cdFx0JCQudXBkYXRlKCk7XG5cdFx0cnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcblx0XHRjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuXHRcdCQkLmRpcnR5ID0gWy0xXTtcblx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuXHRcdCQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogVXNlZnVsIGZvciBleGFtcGxlIHRvIGV4ZWN1dGUgcmVtYWluaW5nIGBhZnRlclVwZGF0ZWAgY2FsbGJhY2tzIGJlZm9yZSBleGVjdXRpbmcgYGRlc3Ryb3lgLlxuICogQHBhcmFtIHtGdW5jdGlvbltdfSBmbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyhmbnMpIHtcblx0Y29uc3QgZmlsdGVyZWQgPSBbXTtcblx0Y29uc3QgdGFyZ2V0cyA9IFtdO1xuXHRyZW5kZXJfY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IChmbnMuaW5kZXhPZihjKSA9PT0gLTEgPyBmaWx0ZXJlZC5wdXNoKGMpIDogdGFyZ2V0cy5wdXNoKGMpKSk7XG5cdHRhcmdldHMuZm9yRWFjaCgoYykgPT4gYygpKTtcblx0cmVuZGVyX2NhbGxiYWNrcyA9IGZpbHRlcmVkO1xufVxuIiwiaW1wb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyLCBpc19mdW5jdGlvbiwgbm9vcCwgcnVuX2FsbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgeyBsb29wIH0gZnJvbSAnLi9sb29wLmpzJztcbmltcG9ydCB7IGNyZWF0ZV9ydWxlLCBkZWxldGVfcnVsZSB9IGZyb20gJy4vc3R5bGVfbWFuYWdlci5qcyc7XG5pbXBvcnQgeyBjdXN0b21fZXZlbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBhZGRfcmVuZGVyX2NhbGxiYWNrIH0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuXG4vKipcbiAqIEB0eXBlIHtQcm9taXNlPHZvaWQ+IHwgbnVsbH1cbiAqL1xubGV0IHByb21pc2U7XG5cbi8qKlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmZ1bmN0aW9uIHdhaXQoKSB7XG5cdGlmICghcHJvbWlzZSkge1xuXHRcdHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRwcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0cHJvbWlzZSA9IG51bGw7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0lOVFJPIHwgT1VUUk8gfCBib29sZWFufSBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7J3N0YXJ0JyB8ICdlbmQnfSBraW5kXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG5cdG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cblxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogQHR5cGUge091dHJvfVxuICovXG5sZXQgb3V0cm9zO1xuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcblx0b3V0cm9zID0ge1xuXHRcdHI6IDAsXG5cdFx0YzogW10sXG5cdFx0cDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcblx0aWYgKCFvdXRyb3Mucikge1xuXHRcdHJ1bl9hbGwob3V0cm9zLmMpO1xuXHR9XG5cdG91dHJvcyA9IG91dHJvcy5wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5GcmFnbWVudH0gYmxvY2tcbiAqIEBwYXJhbSB7MCB8IDF9IFtsb2NhbF1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcblx0aWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcblx0XHRvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuXHRcdGJsb2NrLmkobG9jYWwpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLkZyYWdtZW50fSBibG9ja1xuICogQHBhcmFtIHswIHwgMX0gbG9jYWxcbiAqIEBwYXJhbSB7MCB8IDF9IFtkZXRhY2hdXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja11cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG5cdGlmIChibG9jayAmJiBibG9jay5vKSB7XG5cdFx0aWYgKG91dHJvaW5nLmhhcyhibG9jaykpIHJldHVybjtcblx0XHRvdXRyb2luZy5hZGQoYmxvY2spO1xuXHRcdG91dHJvcy5jLnB1c2goKCkgPT4ge1xuXHRcdFx0b3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRpZiAoZGV0YWNoKSBibG9jay5kKDEpO1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGJsb2NrLm8obG9jYWwpO1xuXHR9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxufVxuXG4vKipcbiAqIEB0eXBlIHtpbXBvcnQoJy4uL3RyYW5zaXRpb24vcHVibGljLmpzJykuVHJhbnNpdGlvbkNvbmZpZ31cbiAqL1xuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7eyBzdGFydCgpOiB2b2lkOyBpbnZhbGlkYXRlKCk6IHZvaWQ7IGVuZCgpOiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuXHQvKipcblx0ICogQHR5cGUge1RyYW5zaXRpb25PcHRpb25zfSAqL1xuXHRjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcblx0bGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG5cdGxldCBydW5uaW5nID0gZmFsc2U7XG5cdGxldCBhbmltYXRpb25fbmFtZTtcblx0bGV0IHRhc2s7XG5cdGxldCB1aWQgPSAwO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gY2xlYW51cCgpIHtcblx0XHRpZiAoYW5pbWF0aW9uX25hbWUpIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXHRcdGlmIChjc3MpIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuXHRcdHRpY2soMCwgMSk7XG5cdFx0Y29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG5cdFx0Y29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG5cdFx0aWYgKHRhc2spIHRhc2suYWJvcnQoKTtcblx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcblx0XHR0YXNrID0gbG9vcCgobm93KSA9PiB7XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAobm93ID49IGVuZF90aW1lKSB7XG5cdFx0XHRcdFx0dGljaygxLCAwKTtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG5cdFx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRcdHJldHVybiAocnVubmluZyA9IGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0XHR0aWNrKHQsIDEgLSB0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ1bm5pbmc7XG5cdFx0fSk7XG5cdH1cblx0bGV0IHN0YXJ0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHtcblx0XHRzdGFydCgpIHtcblx0XHRcdGlmIChzdGFydGVkKSByZXR1cm47XG5cdFx0XHRzdGFydGVkID0gdHJ1ZTtcblx0XHRcdGRlbGV0ZV9ydWxlKG5vZGUpO1xuXHRcdFx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHRcdFx0Y29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuXHRcdFx0XHR3YWl0KCkudGhlbihnbyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnbygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZSgpIHtcblx0XHRcdHN0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9LFxuXHRcdGVuZCgpIHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGNsZWFudXAoKTtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbkZufSBmblxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge3sgZW5kKHJlc2V0OiBhbnkpOiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcblx0LyoqIEB0eXBlIHtUcmFuc2l0aW9uT3B0aW9uc30gKi9cblx0Y29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnb3V0JyB9O1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcblx0bGV0IHJ1bm5pbmcgPSB0cnVlO1xuXHRsZXQgYW5pbWF0aW9uX25hbWU7XG5cdGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuXHRncm91cC5yICs9IDE7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0bGV0IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gZ28oKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXG5cdFx0aWYgKGNzcykgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcblxuXHRcdGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuXHRcdGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuXHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcblxuXHRcdGlmICgnaW5lcnQnIGluIG5vZGUpIHtcblx0XHRcdG9yaWdpbmFsX2luZXJ0X3ZhbHVlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLmluZXJ0O1xuXHRcdFx0bm9kZS5pbmVydCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0bG9vcCgobm93KSA9PiB7XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAobm93ID49IGVuZF90aW1lKSB7XG5cdFx0XHRcdFx0dGljaygwLCAxKTtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuXHRcdFx0XHRcdGlmICghLS1ncm91cC5yKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuXHRcdFx0XHRcdFx0Ly8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG5cdFx0XHRcdFx0XHRydW5fYWxsKGdyb3VwLmMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG5cdFx0XHRcdFx0dGljaygxIC0gdCwgdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBydW5uaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHR3YWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG5cdFx0XHRnbygpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGdvKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGVuZChyZXNldCkge1xuXHRcdFx0aWYgKHJlc2V0ICYmICdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0XHRub2RlLmluZXJ0ID0gb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcblx0XHRcdFx0Y29uZmlnLnRpY2soMSwgMCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRpZiAoYW5pbWF0aW9uX25hbWUpIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbkZufSBmblxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHBhcmFtIHtib29sZWFufSBpbnRyb1xuICogQHJldHVybnMge3sgcnVuKGI6IDAgfCAxKTogdm9pZDsgZW5kKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7VHJhbnNpdGlvbk9wdGlvbnN9ICovXG5cdGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2JvdGgnIH07XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuXHRsZXQgdCA9IGludHJvID8gMCA6IDE7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQcm9ncmFtIHwgbnVsbH0gKi9cblx0bGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQZW5kaW5nUHJvZ3JhbSB8IG51bGx9ICovXG5cdGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuXG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0bGV0IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UGVuZGluZ1Byb2dyYW19IHByb2dyYW1cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuXHRcdGNvbnN0IGQgPSAvKiogQHR5cGUge1Byb2dyYW1bJ2QnXX0gKi8gKHByb2dyYW0uYiAtIHQpO1xuXHRcdGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRhOiB0LFxuXHRcdFx0YjogcHJvZ3JhbS5iLFxuXHRcdFx0ZCxcblx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0c3RhcnQ6IHByb2dyYW0uc3RhcnQsXG5cdFx0XHRlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcblx0XHRcdGdyb3VwOiBwcm9ncmFtLmdyb3VwXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0lOVFJPIHwgT1VUUk99IGJcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiBnbyhiKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGVsYXkgPSAwLFxuXHRcdFx0ZHVyYXRpb24gPSAzMDAsXG5cdFx0XHRlYXNpbmcgPSBsaW5lYXIsXG5cdFx0XHR0aWNrID0gbm9vcCxcblx0XHRcdGNzc1xuXHRcdH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1BlbmRpbmdQcm9ncmFtfSAqL1xuXHRcdGNvbnN0IHByb2dyYW0gPSB7XG5cdFx0XHRzdGFydDogbm93KCkgKyBkZWxheSxcblx0XHRcdGJcblx0XHR9O1xuXG5cdFx0aWYgKCFiKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuXHRcdFx0cHJvZ3JhbS5ncm91cCA9IG91dHJvcztcblx0XHRcdG91dHJvcy5yICs9IDE7XG5cdFx0fVxuXG5cdFx0aWYgKCdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0aWYgKGIpIHtcblx0XHRcdFx0aWYgKG9yaWdpbmFsX2luZXJ0X3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvLyBhYm9ydGVkL3JldmVyc2VkIG91dHJvIOKAlCByZXN0b3JlIHByZXZpb3VzIGluZXJ0IHZhbHVlXG5cdFx0XHRcdFx0bm9kZS5pbmVydCA9IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcmlnaW5hbF9pbmVydF92YWx1ZSA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChub2RlKS5pbmVydDtcblx0XHRcdFx0bm9kZS5pbmVydCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcblx0XHRcdHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cblx0XHRcdC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuXHRcdFx0aWYgKGNzcykge1xuXHRcdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdFx0YW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcblx0XHRcdH1cblx0XHRcdGlmIChiKSB0aWNrKDAsIDEpO1xuXHRcdFx0cnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG5cdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcblx0XHRcdGxvb3AoKG5vdykgPT4ge1xuXHRcdFx0XHRpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuXHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG5cdFx0XHRcdFx0cGVuZGluZ19wcm9ncmFtID0gbnVsbDtcblx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG5cdFx0XHRcdFx0aWYgKGNzcykge1xuXHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKFxuXHRcdFx0XHRcdFx0XHRub2RlLFxuXHRcdFx0XHRcdFx0XHR0LFxuXHRcdFx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0uYixcblx0XHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRlYXNpbmcsXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5jc3Ncblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChydW5uaW5nX3Byb2dyYW0pIHtcblx0XHRcdFx0XHRpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0XHRcdHRpY2soKHQgPSBydW5uaW5nX3Byb2dyYW0uYiksIDEgLSB0KTtcblx0XHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG5cdFx0XHRcdFx0XHRpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuXHRcdFx0XHRcdFx0XHQvLyB3ZSdyZSBkb25lXG5cdFx0XHRcdFx0XHRcdGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuXHRcdFx0XHRcdFx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuXHRcdFx0XHRcdFx0XHRcdGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucikgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuXHRcdFx0XHRcdFx0dCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRcdFx0XHR0aWNrKHQsIDEgLSB0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0cnVuKGIpIHtcblx0XHRcdGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG5cdFx0XHRcdHdhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBvcHRzID0geyBkaXJlY3Rpb246IGIgPyAnaW4nIDogJ291dCcgfTtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0Y29uZmlnID0gY29uZmlnKG9wdHMpO1xuXHRcdFx0XHRcdGdvKGIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdvKGIpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZW5kKCkge1xuXHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqIEB0eXBlZGVmIHsxfSBJTlRSTyAqL1xuLyoqIEB0eXBlZGVmIHswfSBPVVRSTyAqL1xuLyoqIEB0eXBlZGVmIHt7IGRpcmVjdGlvbjogJ2luJyB8ICdvdXQnIHwgJ2JvdGgnIH19IFRyYW5zaXRpb25PcHRpb25zICovXG4vKiogQHR5cGVkZWYgeyhub2RlOiBFbGVtZW50LCBwYXJhbXM6IGFueSwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMpID0+IGltcG9ydCgnLi4vdHJhbnNpdGlvbi9wdWJsaWMuanMnKS5UcmFuc2l0aW9uQ29uZmlnfSBUcmFuc2l0aW9uRm4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPdXRyb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb25bXX0gY1xuICogQHByb3BlcnR5IHtPYmplY3R9IHBcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBlbmRpbmdQcm9ncmFtXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRcbiAqIEBwcm9wZXJ0eSB7SU5UUk98T1VUUk99IGJcbiAqIEBwcm9wZXJ0eSB7T3V0cm99IFtncm91cF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByb2dyYW1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhXG4gKiBAcHJvcGVydHkge0lOVFJPfE9VVFJPfSBiXG4gKiBAcHJvcGVydHkgezF8LTF9IGRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0XG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kXG4gKiBAcHJvcGVydHkge091dHJvfSBbZ3JvdXBdXG4gKi9cbiIsImltcG9ydCB7IHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0IH0gZnJvbSAnLi90cmFuc2l0aW9ucy5qcyc7XG5pbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIGdlbmVyYWwgZWFjaCBmdW5jdGlvbnM6XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVfYXJyYXlfbGlrZShhcnJheV9saWtlX29yX2l0ZXJhdG9yKSB7XG5cdHJldHVybiBhcnJheV9saWtlX29yX2l0ZXJhdG9yPy5sZW5ndGggIT09IHVuZGVmaW5lZFxuXHRcdD8gYXJyYXlfbGlrZV9vcl9pdGVyYXRvclxuXHRcdDogQXJyYXkuZnJvbShhcnJheV9saWtlX29yX2l0ZXJhdG9yKTtcbn1cblxuLy8ga2V5ZWQgZWFjaCBmdW5jdGlvbnM6XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHR0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuXHRcdGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcblx0fSk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuLyoqIEByZXR1cm5zIHthbnlbXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChcblx0b2xkX2Jsb2Nrcyxcblx0ZGlydHksXG5cdGdldF9rZXksXG5cdGR5bmFtaWMsXG5cdGN0eCxcblx0bGlzdCxcblx0bG9va3VwLFxuXHRub2RlLFxuXHRkZXN0cm95LFxuXHRjcmVhdGVfZWFjaF9ibG9jayxcblx0bmV4dCxcblx0Z2V0X2NvbnRleHRcbikge1xuXHRsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuXHRsZXQgbiA9IGxpc3QubGVuZ3RoO1xuXHRsZXQgaSA9IG87XG5cdGNvbnN0IG9sZF9pbmRleGVzID0ge307XG5cdHdoaWxlIChpLS0pIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG5cdGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcblx0Y29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB1cGRhdGVzID0gW107XG5cdGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0Y29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHRjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG5cdFx0bGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0Ly8gZGVmZXIgdXBkYXRlcyB1bnRpbCBhbGwgdGhlIERPTSBzaHVmZmxpbmcgaXMgZG9uZVxuXHRcdFx0dXBkYXRlcy5wdXNoKCgpID0+IGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSkpO1xuXHRcdH1cblx0XHRuZXdfbG9va3VwLnNldChrZXksIChuZXdfYmxvY2tzW2ldID0gYmxvY2spKTtcblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcblx0fVxuXHRjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuXHQvKiogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuXHRcdGJsb2NrLm0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHRjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHRjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHRjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHRjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fSBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH0gZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fSBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcblx0XHRcdG8tLTtcblx0XHR9IGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG5cdFx0XHRkaWRfbW92ZS5hZGQobmV3X2tleSk7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKG8tLSkge1xuXHRcdGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cdHJ1bl9hbGwodXBkYXRlcyk7XG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcblx0Y29uc3Qga2V5cyA9IG5ldyBNYXAoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcblx0XHRpZiAoa2V5cy5oYXMoa2V5KSkge1xuXHRcdFx0bGV0IHZhbHVlID0gJyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IGB3aXRoIHZhbHVlICcke1N0cmluZyhrZXkpfScgYDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gY2FuJ3Qgc3RyaW5naWZ5XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdGBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2g6IEtleXMgYXQgaW5kZXggJHtrZXlzLmdldChcblx0XHRcdFx0XHRrZXlcblx0XHRcdFx0KX0gYW5kICR7aX0gJHt2YWx1ZX1hcmUgZHVwbGljYXRlc2Bcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGtleXMuc2V0KGtleSwgaSk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdGFkZF9yZW5kZXJfY2FsbGJhY2ssXG5cdGZsdXNoLFxuXHRmbHVzaF9yZW5kZXJfY2FsbGJhY2tzLFxuXHRzY2hlZHVsZV91cGRhdGUsXG5cdGRpcnR5X2NvbXBvbmVudHNcbn0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuaW1wb3J0IHsgY3VycmVudF9jb21wb25lbnQsIHNldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IGJsYW5rX29iamVjdCwgaXNfZW1wdHksIGlzX2Z1bmN0aW9uLCBydW4sIHJ1bl9hbGwsIG5vb3AgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7XG5cdGNoaWxkcmVuLFxuXHRkZXRhY2gsXG5cdHN0YXJ0X2h5ZHJhdGluZyxcblx0ZW5kX2h5ZHJhdGluZyxcblx0Z2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyxcblx0aW5zZXJ0LFxuXHRlbGVtZW50LFxuXHRhdHRyXG59IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHRyYW5zaXRpb25faW4gfSBmcm9tICcuL3RyYW5zaXRpb25zLmpzJztcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuXHRjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcblx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG5cdGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG5cdGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yKSB7XG5cdGNvbnN0IHsgZnJhZ21lbnQsIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuXHRmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcblx0Ly8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuXHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcblx0XHRjb25zdCBuZXdfb25fZGVzdHJveSA9IGNvbXBvbmVudC4kJC5vbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseVxuXHRcdC8vIGl0IHdpbGwgdXBkYXRlIHRoZSBgJCQub25fZGVzdHJveWAgcmVmZXJlbmNlIHRvIGBudWxsYC5cblx0XHQvLyB0aGUgZGVzdHJ1Y3R1cmVkIG9uX2Rlc3Ryb3kgbWF5IHN0aWxsIHJlZmVyZW5jZSB0byB0aGUgb2xkIGFycmF5XG5cdFx0aWYgKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KSB7XG5cdFx0XHRjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG5cdFx0XHQvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG5cdFx0XHRydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcblx0XHR9XG5cdFx0Y29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG5cdH0pO1xuXHRhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG5cdGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuXHRpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcblx0XHRmbHVzaF9yZW5kZXJfY2FsbGJhY2tzKCQkLmFmdGVyX3VwZGF0ZSk7XG5cdFx0cnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcblx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG5cdFx0Ly8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuXHRcdC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcblx0XHQkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuXHRcdCQkLmN0eCA9IFtdO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG5cdGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG5cdFx0ZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdFx0c2NoZWR1bGVfdXBkYXRlKCk7XG5cdFx0Y29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG5cdH1cblx0Y29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gMSA8PCBpICUgMzE7XG59XG5cbi8vIFRPRE86IERvY3VtZW50IHRoZSBvdGhlciBwYXJhbXNcbi8qKlxuICogQHBhcmFtIHtTdmVsdGVDb21wb25lbnR9IGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljLmpzJykuQ29tcG9uZW50Q29uc3RydWN0b3JPcHRpb25zfSBvcHRpb25zXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vdXRpbHMuanMnKVsnbm90X2VxdWFsJ119IG5vdF9lcXVhbCBVc2VkIHRvIGNvbXBhcmUgcHJvcHMgYW5kIHN0YXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7KHRhcmdldDogRWxlbWVudCB8IFNoYWRvd1Jvb3QpID0+IHZvaWR9IFthcHBlbmRfc3R5bGVzXSBGdW5jdGlvbiB0aGF0IGFwcGVuZHMgc3R5bGVzIHRvIHRoZSBET00gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGluaXRpYWxpc2VkLlxuICogVGhpcyB3aWxsIGJlIHRoZSBgYWRkX2Nzc2AgZnVuY3Rpb24gZnJvbSB0aGUgY29tcGlsZWQgY29tcG9uZW50LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChcblx0Y29tcG9uZW50LFxuXHRvcHRpb25zLFxuXHRpbnN0YW5jZSxcblx0Y3JlYXRlX2ZyYWdtZW50LFxuXHRub3RfZXF1YWwsXG5cdHByb3BzLFxuXHRhcHBlbmRfc3R5bGVzID0gbnVsbCxcblx0ZGlydHkgPSBbLTFdXG4pIHtcblx0Y29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuXHRzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlQkJH0gKi9cblx0Y29uc3QgJCQgPSAoY29tcG9uZW50LiQkID0ge1xuXHRcdGZyYWdtZW50OiBudWxsLFxuXHRcdGN0eDogW10sXG5cdFx0Ly8gc3RhdGVcblx0XHRwcm9wcyxcblx0XHR1cGRhdGU6IG5vb3AsXG5cdFx0bm90X2VxdWFsLFxuXHRcdGJvdW5kOiBibGFua19vYmplY3QoKSxcblx0XHQvLyBsaWZlY3ljbGVcblx0XHRvbl9tb3VudDogW10sXG5cdFx0b25fZGVzdHJveTogW10sXG5cdFx0b25fZGlzY29ubmVjdDogW10sXG5cdFx0YmVmb3JlX3VwZGF0ZTogW10sXG5cdFx0YWZ0ZXJfdXBkYXRlOiBbXSxcblx0XHRjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG5cdFx0Ly8gZXZlcnl0aGluZyBlbHNlXG5cdFx0Y2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcblx0XHRkaXJ0eSxcblx0XHRza2lwX2JvdW5kOiBmYWxzZSxcblx0XHRyb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3Rcblx0fSk7XG5cdGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcblx0bGV0IHJlYWR5ID0gZmFsc2U7XG5cdCQkLmN0eCA9IGluc3RhbmNlXG5cdFx0PyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG5cdFx0XHRcdGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgKCQkLmN0eFtpXSA9IHZhbHVlKSkpIHtcblx0XHRcdFx0XHRpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pICQkLmJvdW5kW2ldKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVhZHkpIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdCAgfSlcblx0XHQ6IFtdO1xuXHQkJC51cGRhdGUoKTtcblx0cmVhZHkgPSB0cnVlO1xuXHRydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuXHQvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcblx0JCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuXHRpZiAob3B0aW9ucy50YXJnZXQpIHtcblx0XHRpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG5cdFx0XHRzdGFydF9oeWRyYXRpbmcoKTtcblx0XHRcdC8vIFRPRE86IHdoYXQgaXMgdGhlIGNvcnJlY3QgdHlwZSBoZXJlP1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0Y29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG5cdFx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcblx0XHRcdG5vZGVzLmZvckVhY2goZGV0YWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cblx0XHRcdCQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuaW50cm8pIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcblx0XHRtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuXHRcdGVuZF9oeWRyYXRpbmcoKTtcblx0XHRmbHVzaCgpO1xuXHR9XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IGxldCBTdmVsdGVFbGVtZW50O1xuXG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0XHQvKiogVGhlIFN2ZWx0ZSBjb21wb25lbnQgY29uc3RydWN0b3IgKi9cblx0XHQkJGN0b3I7XG5cdFx0LyoqIFNsb3RzICovXG5cdFx0JCRzO1xuXHRcdC8qKiBUaGUgU3ZlbHRlIGNvbXBvbmVudCBpbnN0YW5jZSAqL1xuXHRcdCQkYztcblx0XHQvKiogV2hldGhlciBvciBub3QgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuXHRcdCQkY24gPSBmYWxzZTtcblx0XHQvKiogQ29tcG9uZW50IHByb3BzIGRhdGEgKi9cblx0XHQkJGQgPSB7fTtcblx0XHQvKiogYHRydWVgIGlmIGN1cnJlbnRseSBpbiB0aGUgcHJvY2VzcyBvZiByZWZsZWN0aW5nIGNvbXBvbmVudCBwcm9wcyBiYWNrIHRvIGF0dHJpYnV0ZXMgKi9cblx0XHQkJHIgPSBmYWxzZTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IFByb3BzIGRlZmluaXRpb24gKG5hbWUsIHJlZmxlY3RlZCwgdHlwZSBldGMpICovXG5cdFx0JCRwX2QgPSB7fTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEZ1bmN0aW9uW10+fSBFdmVudCBsaXN0ZW5lcnMgKi9cblx0XHQkJGwgPSB7fTtcblx0XHQvKiogQHR5cGUge01hcDxGdW5jdGlvbiwgRnVuY3Rpb24+fSBFdmVudCBsaXN0ZW5lciB1bnN1YnNjcmliZSBmdW5jdGlvbnMgKi9cblx0XHQkJGxfdSA9IG5ldyBNYXAoKTtcblxuXHRcdGNvbnN0cnVjdG9yKCQkY29tcG9uZW50Q3RvciwgJCRzbG90cywgdXNlX3NoYWRvd19kb20pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiQkY3RvciA9ICQkY29tcG9uZW50Q3Rvcjtcblx0XHRcdHRoaXMuJCRzID0gJCRzbG90cztcblx0XHRcdGlmICh1c2Vfc2hhZG93X2RvbSkge1xuXHRcdFx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG5cdFx0XHQvLyBXZSBjYW4ndCBkZXRlcm1pbmUgdXBmcm9udCBpZiB0aGUgZXZlbnQgaXMgYSBjdXN0b20gZXZlbnQgb3Igbm90LCBzbyB3ZSBoYXZlIHRvXG5cdFx0XHQvLyBsaXN0ZW4gdG8gYm90aC4gSWYgc29tZW9uZSB1c2VzIGEgY3VzdG9tIGV2ZW50IHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhIHJlZ3VsYXJcblx0XHRcdC8vIGJyb3dzZXIgZXZlbnQsIHRoaXMgZmlyZXMgdHdpY2UgLSB3ZSBjYW4ndCBhdm9pZCB0aGF0LlxuXHRcdFx0dGhpcy4kJGxbdHlwZV0gPSB0aGlzLiQkbFt0eXBlXSB8fCBbXTtcblx0XHRcdHRoaXMuJCRsW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHRcdFx0aWYgKHRoaXMuJCRjKSB7XG5cdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGMuJG9uKHR5cGUsIGxpc3RlbmVyKTtcblx0XHRcdFx0dGhpcy4kJGxfdS5zZXQobGlzdGVuZXIsIHVuc3ViKTtcblx0XHRcdH1cblx0XHRcdHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcblx0XHRcdHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKHRoaXMuJCRjKSB7XG5cdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGxfdS5nZXQobGlzdGVuZXIpO1xuXHRcdFx0XHRpZiAodW5zdWIpIHtcblx0XHRcdFx0XHR1bnN1YigpO1xuXHRcdFx0XHRcdHRoaXMuJCRsX3UuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4kJGNuID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy4kJGMpIHtcblx0XHRcdFx0Ly8gV2Ugd2FpdCBvbmUgdGljayB0byBsZXQgcG9zc2libGUgY2hpbGQgc2xvdCBlbGVtZW50cyBiZSBjcmVhdGVkL21vdW50ZWRcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdGlmICghdGhpcy4kJGNuIHx8IHRoaXMuJCRjKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZ1bmN0aW9uIGNyZWF0ZV9zbG90KG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IG5vZGU7XG5cdFx0XHRcdFx0XHRjb25zdCBvYmogPSB7XG5cdFx0XHRcdFx0XHRcdGM6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbWVudCgnc2xvdCcpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuYW1lICE9PSAnZGVmYXVsdCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHIobm9kZSwgJ25hbWUnLCBuYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcblx0XHRcdFx0XHRcdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2FuY2hvcl1cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdG06IGZ1bmN0aW9uIG1vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZDogZnVuY3Rpb24gZGVzdHJveShkZXRhY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGV0YWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXRhY2gobm9kZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICQkc2xvdHMgPSB7fTtcblx0XHRcdFx0Y29uc3QgZXhpc3Rpbmdfc2xvdHMgPSBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKHRoaXMpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy4kJHMpIHtcblx0XHRcdFx0XHRpZiAobmFtZSBpbiBleGlzdGluZ19zbG90cykge1xuXHRcdFx0XHRcdFx0JCRzbG90c1tuYW1lXSA9IFtjcmVhdGVfc2xvdChuYW1lKV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIHRoaXMuYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdC8vIHRoaXMuJCRkYXRhIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGlzLmF0dHJpYnV0ZXNcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy4kJGdfcChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdFx0aWYgKCEobmFtZSBpbiB0aGlzLiQkZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW25hbWVdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKG5hbWUsIGF0dHJpYnV0ZS52YWx1ZSwgdGhpcy4kJHBfZCwgJ3RvUHJvcCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBQb3J0IG92ZXIgcHJvcHMgdGhhdCB3ZXJlIHNldCBwcm9ncmFtbWF0aWNhbGx5IGJlZm9yZSBjZSB3YXMgaW5pdGlhbGl6ZWRcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJHBfZCkge1xuXHRcdFx0XHRcdGlmICghKGtleSBpbiB0aGlzLiQkZCkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0gPSB0aGlzW2tleV07IC8vIGRvbid0IHRyYW5zZm9ybSwgdGhlc2Ugd2VyZSBzZXQgdGhyb3VnaCBKYXZhU2NyaXB0XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpc1trZXldOyAvLyByZW1vdmUgdGhlIHByb3BlcnR5IHRoYXQgc2hhZG93cyB0aGUgZ2V0dGVyL3NldHRlclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiQkYyA9IG5ldyB0aGlzLiQkY3Rvcih7XG5cdFx0XHRcdFx0dGFyZ2V0OiB0aGlzLnNoYWRvd1Jvb3QgfHwgdGhpcyxcblx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0Li4udGhpcy4kJGQsXG5cdFx0XHRcdFx0XHQkJHNsb3RzLFxuXHRcdFx0XHRcdFx0JCRzY29wZToge1xuXHRcdFx0XHRcdFx0XHRjdHg6IFtdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBSZWZsZWN0IGNvbXBvbmVudCBwcm9wcyBhcyBhdHRyaWJ1dGVzXG5cdFx0XHRcdGNvbnN0IHJlZmxlY3RfYXR0cmlidXRlcyA9ICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLiQkciA9IHRydWU7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJHBfZCkge1xuXHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSA9IHRoaXMuJCRjLiQkLmN0eFt0aGlzLiQkYy4kJC5wcm9wc1trZXldXTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLiQkcF9kW2tleV0ucmVmbGVjdCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGVfdmFsdWUgPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUoXG5cdFx0XHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0sXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kJHBfZCxcblx0XHRcdFx0XHRcdFx0XHQndG9BdHRyaWJ1dGUnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVfdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgfHwga2V5KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSh0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlIHx8IGtleSwgYXR0cmlidXRlX3ZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLiQkciA9IGZhbHNlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLiQkYy4kJC5hZnRlcl91cGRhdGUucHVzaChyZWZsZWN0X2F0dHJpYnV0ZXMpO1xuXHRcdFx0XHRyZWZsZWN0X2F0dHJpYnV0ZXMoKTsgLy8gb25jZSBpbml0aWFsbHkgYmVjYXVzZSBhZnRlcl91cGRhdGUgaXMgYWRkZWQgdG9vIGxhdGUgZm9yIGZpcnN0IHJlbmRlclxuXG5cdFx0XHRcdGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLiQkbCkge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy4kJGxbdHlwZV0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGMuJG9uKHR5cGUsIGxpc3RlbmVyKTtcblx0XHRcdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJCRsID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3QgbmVlZCB0aGlzIHdoZW4gd29ya2luZyB3aXRoaW4gU3ZlbHRlIGNvZGUsIGJ1dCBmb3IgY29tcGF0aWJpbGl0eSBvZiBwZW9wbGUgdXNpbmcgdGhpcyBvdXRzaWRlIG9mIFN2ZWx0ZVxuXHRcdC8vIGFuZCBzZXR0aW5nIGF0dHJpYnV0ZXMgdGhyb3VnaCBzZXRBdHRyaWJ1dGUgZXRjLCB0aGlzIGlzIGhlbHBmdWxcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMuJCRyKSByZXR1cm47XG5cdFx0XHRhdHRyID0gdGhpcy4kJGdfcChhdHRyKTtcblx0XHRcdHRoaXMuJCRkW2F0dHJdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKGF0dHIsIG5ld1ZhbHVlLCB0aGlzLiQkcF9kLCAndG9Qcm9wJyk7XG5cdFx0XHR0aGlzLiQkYz8uJHNldCh7IFthdHRyXTogdGhpcy4kJGRbYXR0cl0gfSk7XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiQkY24gPSBmYWxzZTtcblx0XHRcdC8vIEluIGEgbWljcm90YXNrLCBiZWNhdXNlIHRoaXMgY291bGQgYmUgYSBtb3ZlIHdpdGhpbiB0aGUgRE9NXG5cdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLiQkY24pIHtcblx0XHRcdFx0XHR0aGlzLiQkYy4kZGVzdHJveSgpO1xuXHRcdFx0XHRcdHRoaXMuJCRjID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkJGdfcChhdHRyaWJ1dGVfbmFtZSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy4kJHBfZCkuZmluZChcblx0XHRcdFx0XHQoa2V5KSA9PlxuXHRcdFx0XHRcdFx0dGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSA9PT0gYXR0cmlidXRlX25hbWUgfHxcblx0XHRcdFx0XHRcdCghdGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gYXR0cmlidXRlX25hbWUpXG5cdFx0XHRcdCkgfHwgYXR0cmlidXRlX25hbWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvblxuICogQHBhcmFtIHsndG9BdHRyaWJ1dGUnIHwgJ3RvUHJvcCd9IFt0cmFuc2Zvcm1dXG4gKi9cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShwcm9wLCB2YWx1ZSwgcHJvcHNfZGVmaW5pdGlvbiwgdHJhbnNmb3JtKSB7XG5cdGNvbnN0IHR5cGUgPSBwcm9wc19kZWZpbml0aW9uW3Byb3BdPy50eXBlO1xuXHR2YWx1ZSA9IHR5cGUgPT09ICdCb29sZWFuJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyA/IHZhbHVlICE9IG51bGwgOiB2YWx1ZTtcblx0aWYgKCF0cmFuc2Zvcm0gfHwgIXByb3BzX2RlZmluaXRpb25bcHJvcF0pIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0gZWxzZSBpZiAodHJhbnNmb3JtID09PSAndG9BdHRyaWJ1dGUnKSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID8gJycgOiBudWxsO1xuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBudWxsIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICYmIEpTT04ucGFyc2UodmFsdWUpO1xuXHRcdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTsgLy8gY29udmVyc2lvbiBhbHJlYWR5IGhhbmRsZWQgYWJvdmVcblx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSAhPSBudWxsID8gK3ZhbHVlIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKlxuICogVHVybiBhIFN2ZWx0ZSBjb21wb25lbnQgaW50byBhIGN1c3RvbSBlbGVtZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljLmpzJykuQ29tcG9uZW50VHlwZX0gQ29tcG9uZW50ICBBIFN2ZWx0ZSBjb21wb25lbnQgY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvbiAgVGhlIHByb3BzIHRvIG9ic2VydmVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHNsb3RzICBUaGUgc2xvdHMgdG8gY3JlYXRlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhY2Nlc3NvcnMgIE90aGVyIGFjY2Vzc29ycyBiZXNpZGVzIHRoZSBvbmVzIGZvciBwcm9wcyB0aGUgY29tcG9uZW50IGhhc1xuICogQHBhcmFtIHtib29sZWFufSB1c2Vfc2hhZG93X2RvbSAgV2hldGhlciB0byB1c2Ugc2hhZG93IERPTVxuICogQHBhcmFtIHsoY2U6IG5ldyAoKSA9PiBIVE1MRWxlbWVudCkgPT4gbmV3ICgpID0+IEhUTUxFbGVtZW50fSBbZXh0ZW5kXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9lbGVtZW50KFxuXHRDb21wb25lbnQsXG5cdHByb3BzX2RlZmluaXRpb24sXG5cdHNsb3RzLFxuXHRhY2Nlc3NvcnMsXG5cdHVzZV9zaGFkb3dfZG9tLFxuXHRleHRlbmRcbikge1xuXHRsZXQgQ2xhc3MgPSBjbGFzcyBleHRlbmRzIFN2ZWx0ZUVsZW1lbnQge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoQ29tcG9uZW50LCBzbG90cywgdXNlX3NoYWRvd19kb20pO1xuXHRcdFx0dGhpcy4kJHBfZCA9IHByb3BzX2RlZmluaXRpb247XG5cdFx0fVxuXHRcdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHByb3BzX2RlZmluaXRpb24pLm1hcCgoa2V5KSA9PlxuXHRcdFx0XHQocHJvcHNfZGVmaW5pdGlvbltrZXldLmF0dHJpYnV0ZSB8fCBrZXkpLnRvTG93ZXJDYXNlKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRPYmplY3Qua2V5cyhwcm9wc19kZWZpbml0aW9uKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzLnByb3RvdHlwZSwgcHJvcCwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGMgJiYgcHJvcCBpbiB0aGlzLiQkYyA/IHRoaXMuJCRjW3Byb3BdIDogdGhpcy4kJGRbcHJvcF07XG5cdFx0XHR9LFxuXHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKHByb3AsIHZhbHVlLCBwcm9wc19kZWZpbml0aW9uKTtcblx0XHRcdFx0dGhpcy4kJGRbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy4kJGM/LiRzZXQoeyBbcHJvcF06IHZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0YWNjZXNzb3JzLmZvckVhY2goKGFjY2Vzc29yKSA9PiB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzLnByb3RvdHlwZSwgYWNjZXNzb3IsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRjPy5bYWNjZXNzb3JdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0aWYgKGV4dGVuZCkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgLSBhc3NpZ25pbmcgaGVyZSBpcyBmaW5lXG5cdFx0Q2xhc3MgPSBleHRlbmQoQ2xhc3MpO1xuXHR9XG5cdENvbXBvbmVudC5lbGVtZW50ID0gLyoqIEB0eXBlIHthbnl9ICovIChDbGFzcyk7XG5cdHJldHVybiBDbGFzcztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtQcm9wcz1hbnldXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtFdmVudHM9YW55XVxuICovXG5leHBvcnQgY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqICMjIyBQUklWQVRFIEFQSVxuXHQgKlxuXHQgKiBEbyBub3QgdXNlLCBtYXkgY2hhbmdlIGF0IGFueSB0aW1lXG5cdCAqXG5cdCAqIEB0eXBlIHthbnl9XG5cdCAqL1xuXHQkJCA9IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqICMjIyBQUklWQVRFIEFQSVxuXHQgKlxuXHQgKiBEbyBub3QgdXNlLCBtYXkgY2hhbmdlIGF0IGFueSB0aW1lXG5cdCAqXG5cdCAqIEB0eXBlIHthbnl9XG5cdCAqL1xuXHQkJHNldCA9IHVuZGVmaW5lZDtcblxuXHQvKiogQHJldHVybnMge3ZvaWR9ICovXG5cdCRkZXN0cm95KCkge1xuXHRcdGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuXHRcdHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSB7RXh0cmFjdDxrZXlvZiBFdmVudHMsIHN0cmluZz59IEtcblx0ICogQHBhcmFtIHtLfSB0eXBlXG5cdCAqIEBwYXJhbSB7KChlOiBFdmVudHNbS10pID0+IHZvaWQpIHwgbnVsbCB8IHVuZGVmaW5lZH0gY2FsbGJhY2tcblx0ICogQHJldHVybnMgeygpID0+IHZvaWR9XG5cdCAqL1xuXHQkb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuXHRcdFx0cmV0dXJuIG5vb3A7XG5cdFx0fVxuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKTtcblx0XHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGluZGV4ICE9PSAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1BhcnRpYWw8UHJvcHM+fSBwcm9wc1xuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdCRzZXQocHJvcHMpIHtcblx0XHRpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkocHJvcHMpKSB7XG5cdFx0XHR0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuXHRcdFx0dGhpcy4kJHNldChwcm9wcyk7XG5cdFx0XHR0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmlidXRlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbcmVmbGVjdF1cbiAqIEBwcm9wZXJ0eSB7J1N0cmluZyd8J0Jvb2xlYW4nfCdOdW1iZXInfCdBcnJheSd8J09iamVjdCd9IFt0eXBlXVxuICovXG4iLCIvLyBnZW5lcmF0ZWQgZHVyaW5nIHJlbGVhc2UsIGRvIG5vdCBtb2RpZnlcblxuLyoqXG4gKiBUaGUgY3VycmVudCB2ZXJzaW9uLCBhcyBzZXQgaW4gcGFja2FnZS5qc29uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1jb21waWxlciNzdmVsdGUtdmVyc2lvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4yLjE1JztcbmV4cG9ydCBjb25zdCBQVUJMSUNfVkVSU0lPTiA9ICc0JztcbiIsImltcG9ydCB7IFBVQkxJQ19WRVJTSU9OIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3ZlcnNpb24uanMnO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdC8vIEB0cy1pZ25vcmVcblx0KHdpbmRvdy5fX3N2ZWx0ZSB8fCAod2luZG93Ll9fc3ZlbHRlID0geyB2OiBuZXcgU2V0KCkgfSkpLnYuYWRkKFBVQkxJQ19WRVJTSU9OKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJCVHJlZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUkJUcmVlKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIH1cbiAgICBSQlRyZWUucHJvdG90eXBlLmluc2VydFN1Y2Nlc3NvciA9IGZ1bmN0aW9uIChub2RlLCBzdWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHBhcmVudDtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5wcmV2ID0gbm9kZTtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5uZXh0ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuZmlyc3QodGhpcy5yb290KTtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5wcmV2ID0gbnVsbDtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5uZXh0ID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWNjZXNzb3IucHJldiA9IHN1Y2Nlc3Nvci5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3VjY2Vzc29yLmxlZnQgPSBzdWNjZXNzb3IucmlnaHQgPSBudWxsO1xuICAgICAgICBzdWNjZXNzb3IucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBzdWNjZXNzb3IucmVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGdyYW5kcGEsIHVuY2xlO1xuICAgICAgICBub2RlID0gc3VjY2Vzc29yO1xuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5yZWQpIHtcbiAgICAgICAgICAgIGdyYW5kcGEgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gZ3JhbmRwYS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgdW5jbGUgPSBncmFuZHBhLnJpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh1bmNsZSAmJiB1bmNsZS5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHVuY2xlLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBncmFuZHBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQoZ3JhbmRwYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5jbGUgPSBncmFuZHBhLmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKHVuY2xlICYmIHVuY2xlLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdW5jbGUucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGdyYW5kcGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50LmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KGdyYW5kcGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdC5yZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnByZXYpIHtcbiAgICAgICAgICAgIG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIG5vZGUubmV4dCA9IG5vZGUucHJldiA9IG51bGw7XG4gICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgdmFyIGxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICAgIHZhciByaWdodCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIHZhciBuZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFsZWZ0KSB7XG4gICAgICAgICAgICBuZXh0ID0gcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXJpZ2h0KSB7XG4gICAgICAgICAgICBuZXh0ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmZpcnN0KHJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNSZWQ7XG4gICAgICAgIGlmIChsZWZ0ICYmIHJpZ2h0KSB7XG4gICAgICAgICAgICBpc1JlZCA9IG5leHQucmVkO1xuICAgICAgICAgICAgbmV4dC5yZWQgPSBub2RlLnJlZDtcbiAgICAgICAgICAgIG5leHQubGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICBsZWZ0LnBhcmVudCA9IG5leHQ7XG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gcmlnaHQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBuZXh0LnBhcmVudDtcbiAgICAgICAgICAgICAgICBuZXh0LnBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0LnJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBuZXh0LnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgcmlnaHQucGFyZW50ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5leHQucmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc1JlZCA9IG5vZGUucmVkO1xuICAgICAgICAgICAgbm9kZSA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucmVkKSB7XG4gICAgICAgICAgICBub2RlLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50LmxlZnQpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LnJpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoc2libGluZy5sZWZ0ICYmIHNpYmxpbmcubGVmdC5yZWQpIHx8IChzaWJsaW5nLnJpZ2h0ICYmIHNpYmxpbmcucmlnaHQucmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNpYmxpbmcucmlnaHQgfHwgIXNpYmxpbmcucmlnaHQucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmxlZnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHBhcmVudC5yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBzaWJsaW5nLnJpZ2h0LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucm9vdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5sZWZ0O1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoc2libGluZy5sZWZ0ICYmIHNpYmxpbmcubGVmdC5yZWQpIHx8IChzaWJsaW5nLnJpZ2h0ICYmIHNpYmxpbmcucmlnaHQucmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNpYmxpbmcubGVmdCB8fCAhc2libGluZy5sZWZ0LnJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5yaWdodC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHBhcmVudC5yZWQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBzaWJsaW5nLmxlZnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucm9vdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZy5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH0gd2hpbGUgKCFub2RlLnJlZCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcCA9IG5vZGU7XG4gICAgICAgIHZhciBxID0gbm9kZS5yaWdodDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHAucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gcTtcbiAgICAgICAgfVxuICAgICAgICBxLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcC5wYXJlbnQgPSBxO1xuICAgICAgICBwLnJpZ2h0ID0gcS5sZWZ0O1xuICAgICAgICBpZiAocC5yaWdodCkge1xuICAgICAgICAgICAgcC5yaWdodC5wYXJlbnQgPSBwO1xuICAgICAgICB9XG4gICAgICAgIHEubGVmdCA9IHA7XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLnJvdGF0ZVJpZ2h0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHAgPSBub2RlO1xuICAgICAgICB2YXIgcSA9IG5vZGUubGVmdDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHAucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gcTtcbiAgICAgICAgfVxuICAgICAgICBxLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcC5wYXJlbnQgPSBxO1xuICAgICAgICBwLmxlZnQgPSBxLnJpZ2h0O1xuICAgICAgICBpZiAocC5sZWZ0KSB7XG4gICAgICAgICAgICBwLmxlZnQucGFyZW50ID0gcDtcbiAgICAgICAgfVxuICAgICAgICBxLnJpZ2h0ID0gcDtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIFJCVHJlZTtcbn0oKSk7XG5leHBvcnRzLlJCVHJlZSA9IFJCVHJlZTtcbnZhciBSQlRyZWVOb2RlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSQlRyZWVOb2RlKCkge1xuICAgIH1cbiAgICByZXR1cm4gUkJUcmVlTm9kZTtcbn0oKSk7XG5leHBvcnRzLlJCVHJlZU5vZGUgPSBSQlRyZWVOb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmJ0cmVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFZlcnRleCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmVydGV4KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFZlcnRleDtcbn0oKSk7XG5leHBvcnRzLlZlcnRleCA9IFZlcnRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlcnRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFZGdlKGxTaXRlLCByU2l0ZSkge1xuICAgICAgICB0aGlzLmxTaXRlID0gbFNpdGU7XG4gICAgICAgIHRoaXMuclNpdGUgPSByU2l0ZTtcbiAgICAgICAgdGhpcy52YSA9IHRoaXMudmIgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gRWRnZTtcbn0oKSk7XG5leHBvcnRzLkVkZ2UgPSBFZGdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDZWxsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZWxsKHNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gc2l0ZTtcbiAgICAgICAgdGhpcy5oYWxmZWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbG9zZU1lID0gZmFsc2U7XG4gICAgfVxuICAgIENlbGwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBzaXRlO1xuICAgICAgICB0aGlzLmhhbGZlZGdlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsb3NlTWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5wcmVwYXJlSGFsZmVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXM7XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZWRnZTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICBlZGdlID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV0uZWRnZTtcbiAgICAgICAgICAgIGlmICghZWRnZS52YiB8fCAhZWRnZS52YSkge1xuICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUhhbGZlZGdlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoYWxmZWRnZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIuYW5nbGUgLSBhLmFuZ2xlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5nZXROZWlnaGJvcklkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5laWdoYm9ycyA9IFtdO1xuICAgICAgICB2YXIgaUhhbGZlZGdlID0gdGhpcy5oYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZWRnZTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICBlZGdlID0gdGhpcy5oYWxmZWRnZXNbaUhhbGZlZGdlXS5lZGdlO1xuICAgICAgICAgICAgaWYgKGVkZ2UubFNpdGUgIT09IG51bGwgJiYgZWRnZS5sU2l0ZS5pZCAhPSB0aGlzLnNpdGUuaWQpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChlZGdlLmxTaXRlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UuclNpdGUgIT09IG51bGwgJiYgZWRnZS5yU2l0ZS5pZCAhPSB0aGlzLnNpdGUuaWQpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChlZGdlLnJTaXRlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xuICAgIH07XG4gICAgO1xuICAgIENlbGwucHJvdG90eXBlLmdldEJib3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYWxmZWRnZXMgPSB0aGlzLmhhbGZlZGdlcztcbiAgICAgICAgdmFyIGlIYWxmZWRnZSA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgIHZhciB4bWluID0gSW5maW5pdHk7XG4gICAgICAgIHZhciB5bWluID0gSW5maW5pdHk7XG4gICAgICAgIHZhciB4bWF4ID0gLUluZmluaXR5O1xuICAgICAgICB2YXIgeW1heCA9IC1JbmZpbml0eTtcbiAgICAgICAgdmFyIHYsIHZ4LCB2eTtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICB2ID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV0uZ2V0U3RhcnRwb2ludCgpO1xuICAgICAgICAgICAgdnggPSB2Lng7XG4gICAgICAgICAgICB2eSA9IHYueTtcbiAgICAgICAgICAgIGlmICh2eCA8IHhtaW4pIHtcbiAgICAgICAgICAgICAgICB4bWluID0gdng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodnkgPCB5bWluKSB7XG4gICAgICAgICAgICAgICAgeW1pbiA9IHZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZ4ID4geG1heCkge1xuICAgICAgICAgICAgICAgIHhtYXggPSB2eDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2eSA+IHltYXgpIHtcbiAgICAgICAgICAgICAgICB5bWF4ID0gdnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHhtaW4sXG4gICAgICAgICAgICB5OiB5bWluLFxuICAgICAgICAgICAgd2lkdGg6IHhtYXggLSB4bWluLFxuICAgICAgICAgICAgaGVpZ2h0OiB5bWF4IC0geW1pblxuICAgICAgICB9O1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUucG9pbnRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXM7XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgaGFsZmVkZ2U7XG4gICAgICAgIHZhciBwMCwgcDE7XG4gICAgICAgIHZhciByO1xuICAgICAgICB3aGlsZSAoaUhhbGZlZGdlLS0pIHtcbiAgICAgICAgICAgIGhhbGZlZGdlID0gaGFsZmVkZ2VzW2lIYWxmZWRnZV07XG4gICAgICAgICAgICBwMCA9IGhhbGZlZGdlLmdldFN0YXJ0cG9pbnQoKTtcbiAgICAgICAgICAgIHAxID0gaGFsZmVkZ2UuZ2V0RW5kcG9pbnQoKTtcbiAgICAgICAgICAgIHIgPSAoeSAtIHAwLnkpICogKHAxLnggLSBwMC54KSAtICh4IC0gcDAueCkgKiAocDEueSAtIHAwLnkpO1xuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfTtcbiAgICByZXR1cm4gQ2VsbDtcbn0oKSk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaWFncmFtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFncmFtKHNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gc2l0ZTtcbiAgICB9XG4gICAgcmV0dXJuIERpYWdyYW07XG59KCkpO1xuZXhwb3J0cy5EaWFncmFtID0gRGlhZ3JhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpYWdyYW0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSGFsZmVkZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhhbGZlZGdlKGVkZ2UsIGxTaXRlLCByU2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBsU2l0ZTtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZTtcbiAgICAgICAgaWYgKHJTaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMihyU2l0ZS55IC0gbFNpdGUueSwgclNpdGUueCAtIGxTaXRlLngpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhID0gZWRnZS52YTtcbiAgICAgICAgICAgIHZhciB2YiA9IGVkZ2UudmI7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gZWRnZS5sU2l0ZSA9PT0gbFNpdGUgP1xuICAgICAgICAgICAgICAgIE1hdGguYXRhbjIodmIueCAtIHZhLngsIHZhLnkgLSB2Yi55KSA6XG4gICAgICAgICAgICAgICAgTWF0aC5hdGFuMih2YS54IC0gdmIueCwgdmIueSAtIHZhLnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEhhbGZlZGdlLnByb3RvdHlwZS5nZXRTdGFydHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlLmxTaXRlID09PSB0aGlzLnNpdGUgPyB0aGlzLmVkZ2UudmEgOiB0aGlzLmVkZ2UudmI7XG4gICAgfTtcbiAgICA7XG4gICAgSGFsZmVkZ2UucHJvdG90eXBlLmdldEVuZHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlLmxTaXRlID09PSB0aGlzLnNpdGUgPyB0aGlzLmVkZ2UudmIgOiB0aGlzLmVkZ2UudmE7XG4gICAgfTtcbiAgICA7XG4gICAgcmV0dXJuIEhhbGZlZGdlO1xufSgpKTtcbmV4cG9ydHMuSGFsZmVkZ2UgPSBIYWxmZWRnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbGZlZGdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJidHJlZV8xID0gcmVxdWlyZShcIi4vcmJ0cmVlXCIpO1xudmFyIHZlcnRleF8xID0gcmVxdWlyZShcIi4vdmVydGV4XCIpO1xudmFyIGVkZ2VfMSA9IHJlcXVpcmUoXCIuL2VkZ2VcIik7XG52YXIgY2VsbF8xID0gcmVxdWlyZShcIi4vY2VsbFwiKTtcbnZhciBkaWFncmFtXzEgPSByZXF1aXJlKFwiLi9kaWFncmFtXCIpO1xudmFyIGhhbGZlZGdlXzEgPSByZXF1aXJlKFwiLi9oYWxmZWRnZVwiKTtcbnZhciBWb3Jvbm9pID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWb3Jvbm9pKCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBudWxsO1xuICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5jaXJjbGVFdmVudEp1bmt5YXJkID0gW107XG4gICAgICAgIHRoaXMudmVydGV4SnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5lZGdlSnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5jZWxsSnVua3lhcmQgPSBbXTtcbiAgICB9XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzaXRlcywgYmJveCkge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAodGhpcy50b1JlY3ljbGUpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGV4SnVua3lhcmQgPSB0aGlzLnZlcnRleEp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS52ZXJ0aWNlcyk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VKdW5reWFyZCA9IHRoaXMuZWRnZUp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS5lZGdlcyk7XG4gICAgICAgICAgICB0aGlzLmNlbGxKdW5reWFyZCA9IHRoaXMuY2VsbEp1bmt5YXJkLmNvbmNhdCh0aGlzLnRvUmVjeWNsZS5jZWxscyk7XG4gICAgICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpdGVFdmVudHMgPSBzaXRlcy5zbGljZSgwKTtcbiAgICAgICAgc2l0ZUV2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgciA9IGIueSAtIGEueTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYi54IC0gYS54O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNpdGUgPSBzaXRlRXZlbnRzLnBvcCgpLCBzaXRlaWQgPSAwLCB4c2l0ZXgsIHhzaXRleSwgY2VsbHMgPSB0aGlzLmNlbGxzLCBjaXJjbGU7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGNpcmNsZSA9IHRoaXMuZmlyc3RDaXJjbGVFdmVudDtcbiAgICAgICAgICAgIGlmIChzaXRlICYmICghY2lyY2xlIHx8IHNpdGUueSA8IGNpcmNsZS55IHx8IChzaXRlLnkgPT09IGNpcmNsZS55ICYmIHNpdGUueCA8IGNpcmNsZS54KSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2l0ZS54ICE9PSB4c2l0ZXggfHwgc2l0ZS55ICE9PSB4c2l0ZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbc2l0ZWlkXSA9IHRoaXMuY3JlYXRlQ2VsbChzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2l0ZS5pZCA9IHNpdGVpZCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJlYWNoc2VjdGlvbihzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgeHNpdGV5ID0gc2l0ZS55O1xuICAgICAgICAgICAgICAgICAgICB4c2l0ZXggPSBzaXRlLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNpdGUgPSBzaXRlRXZlbnRzLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2lyY2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCZWFjaHNlY3Rpb24oY2lyY2xlLmFyYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaXBFZGdlcyhiYm94KTtcbiAgICAgICAgdGhpcy5jbG9zZUNlbGxzKGJib3gpO1xuICAgICAgICB2YXIgc3RvcFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZGlhZ3JhbSA9IG5ldyBkaWFncmFtXzEuRGlhZ3JhbSgpO1xuICAgICAgICBkaWFncmFtLmNlbGxzID0gdGhpcy5jZWxscztcbiAgICAgICAgZGlhZ3JhbS5lZGdlcyA9IHRoaXMuZWRnZXM7XG4gICAgICAgIGRpYWdyYW0udmVydGljZXMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICBkaWFncmFtLmV4ZWNUaW1lID0gc3RvcFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm4gZGlhZ3JhbTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNxcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMWUtOTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmludmVwcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAvIHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5lcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzKGEgLSBiKSA8IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5ncmVhdGVyVGhhbldpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhIC0gYikgPiB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmdyZWF0ZXJUaGFuT3JFcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChiIC0gYSkgPCB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUubGVzc1RoYW5XaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYiAtIGEpID4gdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmxlc3NUaGFuT3JFcXVhbFdpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhIC0gYikgPCB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucXVhbnRpemVTaXRlcyA9IGZ1bmN0aW9uIChzaXRlcykge1xuICAgICAgICB2YXIgZXBzID0gdGhpcy5lcHMoKSwgbiA9IHNpdGVzLmxlbmd0aCwgc2l0ZTtcbiAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgc2l0ZSA9IHNpdGVzW25dO1xuICAgICAgICAgICAgc2l0ZS54ID0gTWF0aC5mbG9vcihzaXRlLnggLyBlcHMpICogZXBzO1xuICAgICAgICAgICAgc2l0ZS55ID0gTWF0aC5mbG9vcihzaXRlLnkgLyBlcHMpICogZXBzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yZWN5Y2xlID0gZnVuY3Rpb24gKGRpYWdyYW0pIHtcbiAgICAgICAgaWYgKGRpYWdyYW0pIHtcbiAgICAgICAgICAgIGlmIChkaWFncmFtIGluc3RhbmNlb2YgZGlhZ3JhbV8xLkRpYWdyYW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvUmVjeWNsZSA9IGRpYWdyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnVm9yb25vaS5yZWN5Y2xlRGlhZ3JhbSgpID4gTmVlZCBhIERpYWdyYW0gb2JqZWN0Lic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmVhY2hsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLmJlYWNobGluZSA9IG5ldyByYnRyZWVfMS5SQlRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZWFjaGxpbmUucm9vdCkge1xuICAgICAgICAgICAgdmFyIGJlYWNoc2VjdGlvbiA9IHRoaXMuYmVhY2hsaW5lLmZpcnN0KHRoaXMuYmVhY2hsaW5lLnJvb3QpO1xuICAgICAgICAgICAgd2hpbGUgKGJlYWNoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQucHVzaChiZWFjaHNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJlYWNoc2VjdGlvbiA9IGJlYWNoc2VjdGlvbi5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVhY2hsaW5lLnJvb3QgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuY2lyY2xlRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cyA9IG5ldyByYnRyZWVfMS5SQlRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cy5yb290ID0gdGhpcy5maXJzdENpcmNsZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUNlbGwgPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbEp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbC5pbml0KHNpdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGNlbGwuaW5pdChzaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNlbGxfMS5DZWxsKHNpdGUpO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUhhbGZlZGdlID0gZnVuY3Rpb24gKGVkZ2UsIGxTaXRlLCByU2l0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IGhhbGZlZGdlXzEuSGFsZmVkZ2UoZWRnZSwgbFNpdGUsIHJTaXRlKTtcbiAgICB9O1xuICAgIDtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVWZXJ0ZXggPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgdiA9IHRoaXMudmVydGV4SnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgdiA9IG5ldyB2ZXJ0ZXhfMS5WZXJ0ZXgoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2LnggPSB4O1xuICAgICAgICAgICAgdi55ID0geTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlRWRnZSA9IGZ1bmN0aW9uIChsU2l0ZSwgclNpdGUsIHZhLCB2Yikge1xuICAgICAgICBpZiAodmEgPT09IHZvaWQgMCkgeyB2YSA9IG51bGw7IH1cbiAgICAgICAgaWYgKHZiID09PSB2b2lkIDApIHsgdmIgPSBudWxsOyB9XG4gICAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlSnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgZWRnZSA9IG5ldyBlZGdlXzEuRWRnZShsU2l0ZSwgclNpdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWRnZS5sU2l0ZSA9IGxTaXRlO1xuICAgICAgICAgICAgZWRnZS5yU2l0ZSA9IHJTaXRlO1xuICAgICAgICAgICAgZWRnZS52YSA9IGVkZ2UudmIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgaWYgKHZhKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2Yikge1xuICAgICAgICAgICAgdGhpcy5zZXRFZGdlRW5kcG9pbnQoZWRnZSwgbFNpdGUsIHJTaXRlLCB2Yik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZWxsc1tsU2l0ZS5pZF0uaGFsZmVkZ2VzLnB1c2godGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBsU2l0ZSwgclNpdGUpKTtcbiAgICAgICAgdGhpcy5jZWxsc1tyU2l0ZS5pZF0uaGFsZmVkZ2VzLnB1c2godGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCByU2l0ZSwgbFNpdGUpKTtcbiAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVCb3JkZXJFZGdlID0gZnVuY3Rpb24gKGxTaXRlLCB2YSwgdmIpIHtcbiAgICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2VKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICBlZGdlID0gbmV3IGVkZ2VfMS5FZGdlKGxTaXRlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkZ2UubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UuclNpdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudmEgPSB2YTtcbiAgICAgICAgZWRnZS52YiA9IHZiO1xuICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgIHJldHVybiBlZGdlO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNldEVkZ2VTdGFydHBvaW50ID0gZnVuY3Rpb24gKGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmVydGV4KSB7XG4gICAgICAgIGlmICghZWRnZS52YSAmJiAhZWRnZS52Yikge1xuICAgICAgICAgICAgZWRnZS52YSA9IHZlcnRleDtcbiAgICAgICAgICAgIGVkZ2UubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UuclNpdGUgPSByU2l0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGdlLmxTaXRlID09PSByU2l0ZSkge1xuICAgICAgICAgICAgZWRnZS52YiA9IHZlcnRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkZ2UudmEgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnNldEVkZ2VFbmRwb2ludCA9IGZ1bmN0aW9uIChlZGdlLCBsU2l0ZSwgclNpdGUsIHZlcnRleCkge1xuICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KGVkZ2UsIHJTaXRlLCBsU2l0ZSwgdmVydGV4KTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChzaXRlKSB7XG4gICAgICAgIHZhciBiZWFjaHNlY3Rpb24gPSB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIWJlYWNoc2VjdGlvbikge1xuICAgICAgICAgICAgYmVhY2hzZWN0aW9uID0gbmV3IHJidHJlZV8xLlJCVHJlZU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBiZWFjaHNlY3Rpb24uc2l0ZSA9IHNpdGU7XG4gICAgICAgIHJldHVybiBiZWFjaHNlY3Rpb247XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5sZWZ0QnJlYWtQb2ludCA9IGZ1bmN0aW9uIChhcmMsIGRpcmVjdHJpeCkge1xuICAgICAgICB2YXIgc2l0ZSA9IGFyYy5zaXRlLCByZm9jeCA9IHNpdGUueCwgcmZvY3kgPSBzaXRlLnksIHBieTIgPSByZm9jeSAtIGRpcmVjdHJpeDtcbiAgICAgICAgaWYgKCFwYnkyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmZvY3g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxBcmMgPSBhcmMucHJldjtcbiAgICAgICAgaWYgKCFsQXJjKSB7XG4gICAgICAgICAgICByZXR1cm4gLUluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHNpdGUgPSBsQXJjLnNpdGU7XG4gICAgICAgIHZhciBsZm9jeCA9IHNpdGUueCwgbGZvY3kgPSBzaXRlLnksIHBsYnkyID0gbGZvY3kgLSBkaXJlY3RyaXg7XG4gICAgICAgIGlmICghcGxieTIpIHtcbiAgICAgICAgICAgIHJldHVybiBsZm9jeDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGwgPSBsZm9jeCAtIHJmb2N4LCBhYnkyID0gMSAvIHBieTIgLSAxIC8gcGxieTIsIGIgPSBobCAvIHBsYnkyO1xuICAgICAgICBpZiAoYWJ5Mikge1xuICAgICAgICAgICAgcmV0dXJuICgtYiArIHRoaXMuc3FydChiICogYiAtIDIgKiBhYnkyICogKGhsICogaGwgLyAoLTIgKiBwbGJ5MikgLSBsZm9jeSArIHBsYnkyIC8gMiArIHJmb2N5IC0gcGJ5MiAvIDIpKSkgLyBhYnkyICsgcmZvY3g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChyZm9jeCArIGxmb2N4KSAvIDI7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yaWdodEJyZWFrUG9pbnQgPSBmdW5jdGlvbiAoYXJjLCBkaXJlY3RyaXgpIHtcbiAgICAgICAgdmFyIHJBcmMgPSBhcmMubmV4dDtcbiAgICAgICAgaWYgKHJBcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRCcmVha1BvaW50KHJBcmMsIGRpcmVjdHJpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpdGUgPSBhcmMuc2l0ZTtcbiAgICAgICAgcmV0dXJuIHNpdGUueSA9PT0gZGlyZWN0cml4ID8gc2l0ZS54IDogSW5maW5pdHk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5kZXRhY2hCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoYmVhY2hzZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQoYmVhY2hzZWN0aW9uKTtcbiAgICAgICAgdGhpcy5iZWFjaGxpbmUucmVtb3ZlTm9kZShiZWFjaHNlY3Rpb24pO1xuICAgICAgICB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkLnB1c2goYmVhY2hzZWN0aW9uKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJlbW92ZUJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChiZWFjaHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGJlYWNoc2VjdGlvbi5jaXJjbGVFdmVudCwgeCA9IGNpcmNsZS54LCB5ID0gY2lyY2xlLnljZW50ZXIsIHZlcnRleCA9IHRoaXMuY3JlYXRlVmVydGV4KHgsIHkpLCBwcmV2aW91cyA9IGJlYWNoc2VjdGlvbi5wcmV2LCBuZXh0ID0gYmVhY2hzZWN0aW9uLm5leHQsIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zID0gW2JlYWNoc2VjdGlvbl0sIGFic19mbiA9IE1hdGguYWJzO1xuICAgICAgICB0aGlzLmRldGFjaEJlYWNoc2VjdGlvbihiZWFjaHNlY3Rpb24pO1xuICAgICAgICB2YXIgbEFyYyA9IHByZXZpb3VzO1xuICAgICAgICB3aGlsZSAobEFyYy5jaXJjbGVFdmVudCAmJlxuICAgICAgICAgICAgYWJzX2ZuKHggLSBsQXJjLmNpcmNsZUV2ZW50LngpIDwgdGhpcy5lcHMoKSAmJlxuICAgICAgICAgICAgYWJzX2ZuKHkgLSBsQXJjLmNpcmNsZUV2ZW50LnljZW50ZXIpIDwgdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgcHJldmlvdXMgPSBsQXJjLnByZXY7XG4gICAgICAgICAgICBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy51bnNoaWZ0KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hCZWFjaHNlY3Rpb24obEFyYyk7XG4gICAgICAgICAgICBsQXJjID0gcHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgICAgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMudW5zaGlmdChsQXJjKTtcbiAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgdmFyIHJBcmMgPSBuZXh0O1xuICAgICAgICB3aGlsZSAockFyYy5jaXJjbGVFdmVudCAmJlxuICAgICAgICAgICAgYWJzX2ZuKHggLSByQXJjLmNpcmNsZUV2ZW50LngpIDwgdGhpcy5lcHMoKSAmJlxuICAgICAgICAgICAgYWJzX2ZuKHkgLSByQXJjLmNpcmNsZUV2ZW50LnljZW50ZXIpIDwgdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgbmV4dCA9IHJBcmMubmV4dDtcbiAgICAgICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnB1c2gockFyYyk7XG4gICAgICAgICAgICB0aGlzLmRldGFjaEJlYWNoc2VjdGlvbihyQXJjKTtcbiAgICAgICAgICAgIHJBcmMgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnB1c2gockFyYyk7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgIHZhciBuQXJjcyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLmxlbmd0aCwgaUFyYztcbiAgICAgICAgZm9yIChpQXJjID0gMTsgaUFyYyA8IG5BcmNzOyBpQXJjKyspIHtcbiAgICAgICAgICAgIHJBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1tpQXJjXTtcbiAgICAgICAgICAgIGxBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1tpQXJjIC0gMV07XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KHJBcmMuZWRnZSwgbEFyYy5zaXRlLCByQXJjLnNpdGUsIHZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbEFyYyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zWzBdO1xuICAgICAgICByQXJjID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnNbbkFyY3MgLSAxXTtcbiAgICAgICAgckFyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgckFyYy5zaXRlLCB1bmRlZmluZWQsIHZlcnRleCk7XG4gICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5hZGRCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB2YXIgeCA9IHNpdGUueCwgZGlyZWN0cml4ID0gc2l0ZS55O1xuICAgICAgICB2YXIgbEFyYywgckFyYywgZHhsLCBkeHIsIG5vZGUgPSB0aGlzLmJlYWNobGluZS5yb290O1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgZHhsID0gdGhpcy5sZWZ0QnJlYWtQb2ludChub2RlLCBkaXJlY3RyaXgpIC0geDtcbiAgICAgICAgICAgIGlmIChkeGwgPiB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGR4ciA9IHggLSB0aGlzLnJpZ2h0QnJlYWtQb2ludChub2RlLCBkaXJlY3RyaXgpO1xuICAgICAgICAgICAgICAgIGlmIChkeHIgPiB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkeGwgPiAtdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IG5vZGUucHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJBcmMgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGR4ciA+IC10aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJBcmMgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gckFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdBcmMgPSB0aGlzLmNyZWF0ZUJlYWNoc2VjdGlvbihzaXRlKTtcbiAgICAgICAgdGhpcy5iZWFjaGxpbmUuaW5zZXJ0U3VjY2Vzc29yKGxBcmMsIG5ld0FyYyk7XG4gICAgICAgIGlmICghbEFyYyAmJiAhckFyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsQXJjID09PSByQXJjKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgckFyYyA9IHRoaXMuY3JlYXRlQmVhY2hzZWN0aW9uKGxBcmMuc2l0ZSk7XG4gICAgICAgICAgICB0aGlzLmJlYWNobGluZS5pbnNlcnRTdWNjZXNzb3IobmV3QXJjLCByQXJjKTtcbiAgICAgICAgICAgIG5ld0FyYy5lZGdlID0gckFyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgbmV3QXJjLnNpdGUpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxBcmMgJiYgIXJBcmMpIHtcbiAgICAgICAgICAgIG5ld0FyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxBcmMuc2l0ZSwgbmV3QXJjLnNpdGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsQXJjICE9PSByQXJjKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICAgICAgICAgIHZhciBsU2l0ZSA9IGxBcmMuc2l0ZSwgYXggPSBsU2l0ZS54LCBheSA9IGxTaXRlLnksIGJ4ID0gc2l0ZS54IC0gYXgsIGJ5ID0gc2l0ZS55IC0gYXksIHJTaXRlID0gckFyYy5zaXRlLCBjeCA9IHJTaXRlLnggLSBheCwgY3kgPSByU2l0ZS55IC0gYXksIGQgPSAyICogKGJ4ICogY3kgLSBieSAqIGN4KSwgaGIgPSBieCAqIGJ4ICsgYnkgKiBieSwgaGMgPSBjeCAqIGN4ICsgY3kgKiBjeSwgdmVydGV4ID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKGN5ICogaGIgLSBieSAqIGhjKSAvIGQgKyBheCwgKGJ4ICogaGMgLSBjeCAqIGhiKSAvIGQgKyBheSk7XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VTdGFydHBvaW50KHJBcmMuZWRnZSwgbFNpdGUsIHJTaXRlLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgbmV3QXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2UobFNpdGUsIHNpdGUsIHVuZGVmaW5lZCwgdmVydGV4KTtcbiAgICAgICAgICAgIHJBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShzaXRlLCByU2l0ZSwgdW5kZWZpbmVkLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmF0dGFjaENpcmNsZUV2ZW50ID0gZnVuY3Rpb24gKGFyYykge1xuICAgICAgICB2YXIgbEFyYyA9IGFyYy5wcmV2LCByQXJjID0gYXJjLm5leHQ7XG4gICAgICAgIGlmICghbEFyYyB8fCAhckFyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsU2l0ZSA9IGxBcmMuc2l0ZSwgY1NpdGUgPSBhcmMuc2l0ZSwgclNpdGUgPSByQXJjLnNpdGU7XG4gICAgICAgIGlmIChsU2l0ZSA9PT0gclNpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnggPSBjU2l0ZS54LCBieSA9IGNTaXRlLnksIGF4ID0gbFNpdGUueCAtIGJ4LCBheSA9IGxTaXRlLnkgLSBieSwgY3ggPSByU2l0ZS54IC0gYngsIGN5ID0gclNpdGUueSAtIGJ5O1xuICAgICAgICB2YXIgZCA9IDIgKiAoYXggKiBjeSAtIGF5ICogY3gpO1xuICAgICAgICBpZiAoZCA+PSAtMmUtMTIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGEgPSBheCAqIGF4ICsgYXkgKiBheSwgaGMgPSBjeCAqIGN4ICsgY3kgKiBjeSwgeCA9IChjeSAqIGhhIC0gYXkgKiBoYykgLyBkLCB5ID0gKGF4ICogaGMgLSBjeCAqIGhhKSAvIGQsIHljZW50ZXIgPSB5ICsgYnk7XG4gICAgICAgIHZhciBjaXJjbGVFdmVudCA9IHRoaXMuY2lyY2xlRXZlbnRKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFjaXJjbGVFdmVudCkge1xuICAgICAgICAgICAgY2lyY2xlRXZlbnQgPSBuZXcgcmJ0cmVlXzEuUkJUcmVlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNpcmNsZUV2ZW50LmFyYyA9IGFyYztcbiAgICAgICAgY2lyY2xlRXZlbnQuc2l0ZSA9IGNTaXRlO1xuICAgICAgICBjaXJjbGVFdmVudC54ID0geCArIGJ4O1xuICAgICAgICBjaXJjbGVFdmVudC55ID0geWNlbnRlciArIHRoaXMuc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgY2lyY2xlRXZlbnQueWNlbnRlciA9IHljZW50ZXI7XG4gICAgICAgIGFyYy5jaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50O1xuICAgICAgICB2YXIgcHJlZGVjZXNzb3IgPSBudWxsLCBub2RlID0gdGhpcy5jaXJjbGVFdmVudHMucm9vdDtcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChjaXJjbGVFdmVudC55IDwgbm9kZS55IHx8IChjaXJjbGVFdmVudC55ID09PSBub2RlLnkgJiYgY2lyY2xlRXZlbnQueCA8PSBub2RlLngpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZGVjZXNzb3IgPSBub2RlLnByZXY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZGVjZXNzb3IgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaXJjbGVFdmVudHMuaW5zZXJ0U3VjY2Vzc29yKHByZWRlY2Vzc29yLCBjaXJjbGVFdmVudCk7XG4gICAgICAgIGlmICghcHJlZGVjZXNzb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5kZXRhY2hDaXJjbGVFdmVudCA9IGZ1bmN0aW9uIChhcmMpIHtcbiAgICAgICAgdmFyIGNpcmNsZUV2ZW50ID0gYXJjLmNpcmNsZUV2ZW50O1xuICAgICAgICBpZiAoY2lyY2xlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghY2lyY2xlRXZlbnQucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDaXJjbGVFdmVudCA9IGNpcmNsZUV2ZW50Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cy5yZW1vdmVOb2RlKGNpcmNsZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlRXZlbnRKdW5reWFyZC5wdXNoKGNpcmNsZUV2ZW50KTtcbiAgICAgICAgICAgIGFyYy5jaXJjbGVFdmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNvbm5lY3RFZGdlID0gZnVuY3Rpb24gKGVkZ2UsIGJib3gpIHtcbiAgICAgICAgdmFyIHZiID0gZWRnZS52YjtcbiAgICAgICAgaWYgKCEhdmIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YSA9IGVkZ2UudmEsIHhsID0gYmJveC54bCwgeHIgPSBiYm94LnhyLCB5dCA9IGJib3gueXQsIHliID0gYmJveC55YiwgbFNpdGUgPSBlZGdlLmxTaXRlLCByU2l0ZSA9IGVkZ2UuclNpdGUsIGx4ID0gbFNpdGUueCwgbHkgPSBsU2l0ZS55LCByeCA9IHJTaXRlLngsIHJ5ID0gclNpdGUueSwgZnggPSAobHggKyByeCkgLyAyLCBmeSA9IChseSArIHJ5KSAvIDIsIGZtLCBmYjtcbiAgICAgICAgdGhpcy5jZWxsc1tsU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2VsbHNbclNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICBpZiAocnkgIT09IGx5KSB7XG4gICAgICAgICAgICBmbSA9IChseCAtIHJ4KSAvIChyeSAtIGx5KTtcbiAgICAgICAgICAgIGZiID0gZnkgLSBmbSAqIGZ4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZnggPCB4bCB8fCBmeCA+PSB4cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChseCA+IHJ4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55ID49IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55ID4geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGZ4LCB5dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm0gPCAtMSB8fCBmbSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChseCA+IHJ4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeXQgLSBmYikgLyBmbSwgeXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55ID49IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeWIgLSBmYikgLyBmbSwgeWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS55ID4geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeWIgLSBmYikgLyBmbSwgeWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS55IDwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KCh5dCAtIGZiKSAvIGZtLCB5dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobHkgPCByeSkge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueCA8IHhsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeGwsIGZtICogeGwgKyBmYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnggPj0geHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBmbSAqIHhyICsgZmIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS54ID4geHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgZm0gKiB4ciArIGZiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueCA8IHhsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgZm0gKiB4bCArIGZiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlZGdlLnZhID0gdmE7XG4gICAgICAgIGVkZ2UudmIgPSB2YjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jbGlwRWRnZSA9IGZ1bmN0aW9uIChlZGdlLCBiYm94KSB7XG4gICAgICAgIHZhciBheCA9IGVkZ2UudmEueCwgYXkgPSBlZGdlLnZhLnksIGJ4ID0gZWRnZS52Yi54LCBieSA9IGVkZ2UudmIueSwgdDAgPSAwLCB0MSA9IDEsIGR4ID0gYnggLSBheCwgZHkgPSBieSAtIGF5O1xuICAgICAgICB2YXIgcSA9IGF4IC0gYmJveC54bDtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAtcSAvIGR4O1xuICAgICAgICBpZiAoZHggPCAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHEgPSBiYm94LnhyIC0gYXg7XG4gICAgICAgIGlmIChkeCA9PT0gMCAmJiBxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBxIC8gZHg7XG4gICAgICAgIGlmIChkeCA8IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR4ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPCB0MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyIDwgdDEpIHtcbiAgICAgICAgICAgICAgICB0MSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcSA9IGF5IC0gYmJveC55dDtcbiAgICAgICAgaWYgKGR5ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgciA9IC1xIC8gZHk7XG4gICAgICAgIGlmIChkeSA8IDApIHtcbiAgICAgICAgICAgIGlmIChyIDwgdDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA8IHQxKSB7XG4gICAgICAgICAgICAgICAgdDEgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcSA9IGJib3gueWIgLSBheTtcbiAgICAgICAgaWYgKGR5ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHEgLyBkeTtcbiAgICAgICAgaWYgKGR5IDwgMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHkgPiAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodDAgPiAwKSB7XG4gICAgICAgICAgICBlZGdlLnZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoYXggKyB0MCAqIGR4LCBheSArIHQwICogZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0MSA8IDEpIHtcbiAgICAgICAgICAgIGVkZ2UudmIgPSB0aGlzLmNyZWF0ZVZlcnRleChheCArIHQxICogZHgsIGF5ICsgdDEgKiBkeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQwID4gMCB8fCB0MSA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbZWRnZS5sU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2VkZ2UuclNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY2xpcEVkZ2VzID0gZnVuY3Rpb24gKGJib3gpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5lZGdlcywgaUVkZ2UgPSBlZGdlcy5sZW5ndGgsIGVkZ2UsIGFic19mbiA9IE1hdGguYWJzO1xuICAgICAgICB3aGlsZSAoaUVkZ2UtLSkge1xuICAgICAgICAgICAgZWRnZSA9IGVkZ2VzW2lFZGdlXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25uZWN0RWRnZShlZGdlLCBiYm94KSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmNsaXBFZGdlKGVkZ2UsIGJib3gpIHx8XG4gICAgICAgICAgICAgICAgKGFic19mbihlZGdlLnZhLnggLSBlZGdlLnZiLngpIDwgdGhpcy5lcHMoKSAmJiBhYnNfZm4oZWRnZS52YS55IC0gZWRnZS52Yi55KSA8IHRoaXMuZXBzKCkpKSB7XG4gICAgICAgICAgICAgICAgZWRnZS52YSA9IGVkZ2UudmIgPSBudWxsO1xuICAgICAgICAgICAgICAgIGVkZ2VzLnNwbGljZShpRWRnZSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNsb3NlQ2VsbHMgPSBmdW5jdGlvbiAoYmJveCkge1xuICAgICAgICB2YXIgeGwgPSBiYm94LnhsLCB4ciA9IGJib3gueHIsIHl0ID0gYmJveC55dCwgeWIgPSBiYm94LnliLCBjZWxscyA9IHRoaXMuY2VsbHMsIGlDZWxsID0gY2VsbHMubGVuZ3RoLCBjZWxsLCBpTGVmdCwgaGFsZmVkZ2VzLCBuSGFsZmVkZ2VzLCBlZGdlLCB2YSwgdmIsIHZ6LCBsYXN0Qm9yZGVyU2VnbWVudCwgYWJzX2ZuID0gTWF0aC5hYnM7XG4gICAgICAgIHdoaWxlIChpQ2VsbC0tKSB7XG4gICAgICAgICAgICBjZWxsID0gY2VsbHNbaUNlbGxdO1xuICAgICAgICAgICAgaWYgKCFjZWxsLnByZXBhcmVIYWxmZWRnZXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjZWxsLmNsb3NlTWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbGZlZGdlcyA9IGNlbGwuaGFsZmVkZ2VzO1xuICAgICAgICAgICAgbkhhbGZlZGdlcyA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgICAgICBpTGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaUxlZnQgPCBuSGFsZmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgdmEgPSBoYWxmZWRnZXNbaUxlZnRdLmdldEVuZHBvaW50KCk7XG4gICAgICAgICAgICAgICAgdnogPSBoYWxmZWRnZXNbKGlMZWZ0ICsgMSkgJSBuSGFsZmVkZ2VzXS5nZXRTdGFydHBvaW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19mbih2YS54IC0gdnoueCkgPj0gdGhpcy5lcHMoKSB8fCBhYnNfZm4odmEueSAtIHZ6LnkpID49IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS54LCB4bCkgJiYgdGhpcy5sZXNzVGhhbldpdGhFcHNpbG9uKHZhLnksIHliKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odmEueSwgeWIpICYmIHRoaXMubGVzc1RoYW5XaXRoRXBzaWxvbih2YS54LCB4cik6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueSwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgobGFzdEJvcmRlclNlZ21lbnQgPyB2ei54IDogeHIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZhLngsIHhyKSAmJiB0aGlzLmdyZWF0ZXJUaGFuV2l0aEVwc2lsb24odmEueSwgeXQpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS55LCB5dCkgJiYgdGhpcy5ncmVhdGVyVGhhbldpdGhFcHNpbG9uKHZhLngsIHhsKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei55LCB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnggOiB4bCwgeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhsLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueSwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgobGFzdEJvcmRlclNlZ21lbnQgPyB2ei54IDogeHIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJWb3Jvbm9pLmNsb3NlQ2VsbHMoKSA+IHRoaXMgbWFrZXMgbm8gc2Vuc2UhXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuY2xvc2VNZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVm9yb25vaTtcbn0oKSk7XG5leHBvcnRzLlZvcm9ub2kgPSBWb3Jvbm9pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm9yb25vaS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBwa2cgZnJvbSBcInZvcm9ub2lqc1wiO1xuZXhwb3J0IGNvbnN0IGNhbGNWb3Jvbm9pID0gKHBvaW50cykgPT4ge1xuICAgIGNvbnN0IHZvcm9ub2kgPSBuZXcgcGtnLlZvcm9ub2koKTtcbiAgICBsZXQgbWluX3ggPSAwO1xuICAgIGxldCBtYXhfeCA9IDA7XG4gICAgbGV0IG1pbl95ID0gMDtcbiAgICBsZXQgbWF4X3kgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgaWYgKHBvaW50LnggPCBtaW5feClcbiAgICAgICAgICAgIG1pbl94ID0gcG9pbnQueDtcbiAgICAgICAgaWYgKHBvaW50LnggPiBtYXhfeClcbiAgICAgICAgICAgIG1heF94ID0gcG9pbnQueDtcbiAgICAgICAgaWYgKHBvaW50LnkgPCBtaW5feSlcbiAgICAgICAgICAgIG1pbl95ID0gcG9pbnQueTtcbiAgICAgICAgaWYgKHBvaW50LnkgPiBtYXhfeSlcbiAgICAgICAgICAgIG1heF95ID0gcG9pbnQueTtcbiAgICB9XG4gICAgbGV0IGJib3ggPSB7IHhsOiBtaW5feCwgeHI6IG1heF94LCB5dDogbWluX3ksIHliOiBtYXhfeSB9O1xuICAgIHJldHVybiB2b3Jvbm9pLmNvbXB1dGUocG9pbnRzLCBiYm94KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gc2hhcGVGcm9tRWRnZXMoZWRnZXMpIHtcbiAgICBpZiAoIWVkZ2VzIHx8IGVkZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGZpcnN0X2VkZ2UgPSBlZGdlcy5zaGlmdCgpO1xuICAgIGxldCBzdGFydCA9IGZpcnN0X2VkZ2UuZ2V0U3RhcnRwb2ludCgpO1xuICAgIGxldCBlbmQgPSBmaXJzdF9lZGdlLmdldEVuZHBvaW50KCk7XG4gICAgcmVzdWx0LnB1c2goYE0gJHtzdGFydC54fSAke3N0YXJ0Lnl9YCk7XG4gICAgcmVzdWx0LnB1c2goYEwgJHtlbmQueH0gJHtlbmQueX1gKTtcbiAgICBmb3IgKGxldCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgICAgIGxldCBlbmQgPSBlZGdlLmdldEVuZHBvaW50KCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGBMICR7ZW5kLnh9ICR7ZW5kLnl9YCk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKFwiWlwiKTtcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhlbWljeWNsZShyYWRpdXMsIHJvd3MsIHBvaW50cywgYW5nbGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IHRvdGFsQXJjTGVuZ3RoID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGFyYyBsZW5ndGhcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAtIGkgKiByYWRpdXMgLyByb3dzO1xuICAgICAgICBjb25zdCBhcmNMZW5ndGggPSBhbmdsZSAvIDE4MCAqIE1hdGguUEkgKiByO1xuICAgICAgICB0b3RhbEFyY0xlbmd0aCArPSBhcmNMZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IHRvdGFsQXJjTGVuZ3RoIC8gcG9pbnRzO1xuICAgIC8vIGNvbnNvbGUubG9nKHt0b3RhbEFyY0xlbmd0aCwgZGlzdGFuY2VCZXR3ZWVuUG9pbnRzfSlcbiAgICBsZXQgdG90YWxfcG9pbnRzID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBvaW50c1xuICAgIGxldCBhID0gMDtcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAtIGkgKiByYWRpdXMgLyByb3dzO1xuICAgICAgICBjb25zdCBhcmNMZW5ndGggPSBhbmdsZSAvIDE4MCAqIE1hdGguUEkgKiByO1xuICAgICAgICBsZXQgcG9pbnRzSW5BcmMgPSBNYXRoLmNlaWwoYXJjTGVuZ3RoIC8gZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKTtcbiAgICAgICAgaWYgKHRvdGFsX3BvaW50cyArIHBvaW50c0luQXJjID4gcG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludHNJbkFyYyA9IHBvaW50cyAtIHRvdGFsX3BvaW50cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyA9IGFyY0xlbmd0aCAvIHBvaW50c0luQXJjO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAoYW5nbGUgLSAxODApIC8gMTgwICogTWF0aC5QSSAvIDI7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRzSW5BcmM7IGorKykge1xuICAgICAgICAgICAgdG90YWxfcG9pbnRzKys7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IChqICogbG9jYWxEaXN0YW5jZUJldHdlZW5Qb2ludHMgLyByKSArIChsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyAvIHIgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAtciAqIE1hdGguY29zKGFuZ2xlIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAtciAqIE1hdGguc2luKGFuZ2xlIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgaWQ6IGksIHgsIHksIGEsIGFuZ2xlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGErKztcbiAgICB9XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEuYW5nbGUgLSBiLmFuZ2xlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiPHNjcmlwdD5pbXBvcnQgeyBjYWxjVm9yb25vaSwgc2hhcGVGcm9tRWRnZXMgfSBmcm9tIFwiLi9saWJzL3Zvcm9ub2lcIjtcbmltcG9ydCB7IGhlbWljeWNsZSB9IGZyb20gXCIuL2xpYnMvaGVtaWN5Y2xlXCI7XG5leHBvcnQgbGV0IGRhdGEgPSBbXTtcbmV4cG9ydCBsZXQgciA9IDMwMDtcbmV4cG9ydCBsZXQgcm93cyA9IDEyO1xuZXhwb3J0IGxldCBkb3RzaXplID0gNTtcbmV4cG9ydCBsZXQgcGFkZGluZyA9IDEwO1xuZXhwb3J0IGxldCB0b3RhbF9zZWF0cztcbmV4cG9ydCBsZXQgY29sb3IgPSBcIndoaXRlXCI7XG5leHBvcnQgbGV0IGZvbnRfc2l6ZSA9IDEyO1xuZXhwb3J0IGxldCBhcmMgPSAxODA7XG5leHBvcnQgbGV0IHRleHRfcG9zaXRpb24gPSBudWxsO1xuZXhwb3J0IGxldCBzZWxlY3RlZFNoYXBlID0gXCJjaXJjbGVcIjtcbmV4cG9ydCBsZXQgZGlzcGxheSA9IFtcInBvaW50c1wiLCBcInRleHRcIl07XG5leHBvcnQgbGV0IGN1cnJlbnRfcGFydHkgPSBudWxsO1xubGV0IHRvdGFsX29jY3VwaWVkX3NlYXRzID0gMDtcbmxldCBwb2ludHMgPSBbXTtcbmxldCB2b3Jvbm9pID0gbnVsbDtcbmxldCBjbGlja2VkID0gZmFsc2U7XG5sZXQgdG9wX3BhZGRpbmcgPSAwO1xubGV0IGJvdHRvbV9wYWRkaW5nID0gMDtcbmxldCBsZWZ0X3BhZGRpbmcgPSAwO1xubGV0IHJpZ2h0X3BhZGRpbmcgPSAwO1xubGV0IHN2Z1dpZHRoID0gMDtcbmxldCBzdmdIZWlnaHQgPSAwO1xubGV0IGhleGFnb25TaGFwZSA9IFwiTTg2LjYwMjU0MDM3ODQ0Mzg2IDEyTDE3My4yMDUwODA3NTY4ODc3MiA1MEwxNzMuMjA1MDgwNzU2ODg3NzIgMTUwTDg2LjYwMjU0MDM3ODQ0Mzg2IDIwMEwwIDE1MEwwIDUwWlwiO1xuJDoge1xuICBpZiAoYXJjIDwgMTApXG4gICAgYXJjID0gMTA7XG4gIGlmIChhcmMgPiAzNjApXG4gICAgYXJjID0gMzYwO1xuICBjYWxjUGFkZGluZygpO1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcbiAgdG90YWxfb2NjdXBpZWRfc2VhdHMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5jb3VudCwgMCk7XG4gIHBvaW50cyA9IGhlbWljeWNsZShyLCByb3dzLCB0b3RhbF9zZWF0cywgYXJjKTtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uY291bnQ7IGorKykge1xuICAgICAgcG9pbnRzW3hdLmRhdGEgPSBkYXRhW2ldO1xuICAgICAgeCsrO1xuICAgIH1cbiAgfVxuICB2b3Jvbm9pID0gY2FsY1Zvcm9ub2kocG9pbnRzKTtcbiAgc3ZnV2lkdGggPSByICogMiArIGxlZnRfcGFkZGluZyArIHJpZ2h0X3BhZGRpbmc7XG4gIHN2Z0hlaWdodCA9IHIgKiAyICsgdG9wX3BhZGRpbmcgKyBib3R0b21fcGFkZGluZztcbn1cbmZ1bmN0aW9uIGNhbGNQYWRkaW5nKCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYWRkaW5nKSkge1xuICAgIGlmIChwYWRkaW5nLmxlbmd0aCA9PT0gMikge1xuICAgICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgYm90dG9tX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgbGVmdF9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nWzFdO1xuICAgIH0gZWxzZSBpZiAocGFkZGluZy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRvcF9wYWRkaW5nID0gcGFkZGluZ1swXTtcbiAgICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIGxlZnRfcGFkZGluZyA9IHBhZGRpbmdbMl07XG4gICAgICByaWdodF9wYWRkaW5nID0gcGFkZGluZ1szXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZztcbiAgICBsZWZ0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICB9XG59XG5mdW5jdGlvbiBzZWxlY3RQYXJ0eShwb2ludCkge1xuICBpZiAocG9pbnQuZGF0YSAmJiAhY2xpY2tlZClcbiAgICBjdXJyZW50X3BhcnR5ID0gcG9pbnQuZGF0YTtcbn1cbmZ1bmN0aW9uIGNsaWNrUGFydHkocG9pbnQpIHtcbiAgaWYgKCFwb2ludC5kYXRhKVxuICAgIHJldHVybjtcbiAgaWYgKCFjdXJyZW50X3BhcnR5KSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IHBvaW50LmRhdGE7XG4gICAgY2xpY2tlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZCAmJiBjdXJyZW50X3BhcnR5LmlkID09PSBwb2ludC5kYXRhLmlkKSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG4gICAgY2xpY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRfcGFydHkgPSBwb2ludC5kYXRhO1xuICAgIGNsaWNrZWQgPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiB1bnNlbGVjdFBhcnR5KCkge1xuICBpZiAoIWNsaWNrZWQpXG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG59XG48L3NjcmlwdD5cblxuPG1haW4+XG4gICAgPHN2ZyB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fT5cbiAgICAgICAgPGcgaWQ9XCJhcmNzXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIChsZWZ0X3BhZGRpbmcpfSwgJHtyICsgKHRvcF9wYWRkaW5nKX0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJhcmNzXCIpfT5cbiAgICAgICAgICAgIHsjZWFjaCBBcnJheShyb3dzKSBhcyBfLCBpfVxuICAgICAgICAgICAgICAgIDwhLS0gRHJhdyBhIHNlbWljaXJjbGUgZm9yIGVhY2ggcm93IC0tPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNICR7ciAtIChpICogKHIgLyByb3dzKSl9LDAgQSAke3IgLSAoaSAqIChyIC8gcm93cykpfSwke3IgLSAoaSAqIChyIC8gcm93cykpfSAwIDAsMCAkey0ociAtIChpICogKHIgLyByb3dzKSkpfSwwYH0gZmlsbD1cInRyYW5zcGFyZW50XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxXCIgb3BhY2l0eT1cIjAuNFwiIC8+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJwb2ludHNcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgKGxlZnRfcGFkZGluZyl9LCAke3IgKyAodG9wX3BhZGRpbmcpfSlgfSBjbGFzczpoaWRlPXshZGlzcGxheS5pbmNsdWRlcyhcInBvaW50c1wiKX0+XG4gICAgICAgICAgICB7I2VhY2ggcG9pbnRzIGFzIHBvaW50fVxuICAgICAgICAgICAgICAgIHsjaWYgc2VsZWN0ZWRTaGFwZSA9PT0gJ2hleGFnb24nfVxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD17aGV4YWdvblNoYXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cG9pbnQueH0sJHtwb2ludC55fSkgcm90YXRlKC01KSBzY2FsZSgwLjA3KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcnR5PXtwb2ludC5kYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3BvaW50LmRhdGE/LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWQgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWQgPyAxIDogMC41IDogMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGFydHk9e3BvaW50LmRhdGE/LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3g9e3BvaW50Lnh9IGN5PXtwb2ludC55fVxuICAgICAgICAgICAgICAgICAgICAgICAgcj17ZG90c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3BvaW50LmRhdGE/LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWQgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWQgPyAxIDogMC41IDogMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwibnVtYmVyc1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3IgKyAobGVmdF9wYWRkaW5nKX0sICR7ciArICh0b3BfcGFkZGluZyl9KWB9IGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwibnVtYmVyc1wiKX0+XG4gICAgICAgICAgICB7I2VhY2ggcG9pbnRzIGFzIHBvaW50LCBpfVxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9e3BvaW50Lnh9IHk9e3BvaW50Lnl9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPnsgYCR7aX1gIH08L3RleHQ+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJ2b3Jvbm9pXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIGxlZnRfcGFkZGluZ30sICR7ciArIHRvcF9wYWRkaW5nfSlgfT5cbiAgICAgICAgICAgIDwhLS0gRHJhdyBWb3Jvbm9pIC0tPlxuICAgICAgICAgICAgeyNlYWNoIHZvcm9ub2kuY2VsbHMgYXMgY2VsbCwgaX1cbiAgICAgICAgICAgICAgICB7I2lmIChjZWxsLmhhbGZlZGdlcz8ubGVuZ3RoID4gMCl9XG4gICAgICAgICAgICAgICAgPHBhdGggXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidm9yb25vaV9wYXRoXCIgXG4gICAgICAgICAgICAgICAgICAgIGQ9e3NoYXBlRnJvbUVkZ2VzKGNlbGwuaGFsZmVkZ2VzKS50b1N0cmluZygpfSBcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCIgXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17ZGlzcGxheS5pbmNsdWRlcyhcInZvcm9ub2lcIikgPyBcIndoaXRlXCIgOiBcInRyYW5zcGFyZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD17ZGlzcGxheS5pbmNsdWRlcyhcInZvcm9ub2lcIikgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgb246bW91c2VvdmVyPXsoKSA9PiB7c2VsZWN0UGFydHkoY2VsbC5zaXRlKTt9fSBcbiAgICAgICAgICAgICAgICAgICAgb246Zm9jdXM9eygpID0+IHNlbGVjdFBhcnR5KGNlbGwuc2l0ZSl9IG9uOm1vdXNlb3V0PXsoKSA9PiB1bnNlbGVjdFBhcnR5KCl9IFxuICAgICAgICAgICAgICAgICAgICBvbjpibHVyPXsoKSA9PiB1bnNlbGVjdFBhcnR5KCl9IHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHsgY2xpY2tQYXJ0eShjZWxsLnNpdGUpfX1cbiAgICAgICAgICAgICAgICAgICAgb246a2V5cHJlc3M9eyhlKSA9PiB7aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtjbGlja1BhcnR5KGNlbGwuc2l0ZSk7fX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwidGV4dFwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3RleHRfcG9zaXRpb24/LnggfHwgciArIGxlZnRfcGFkZGluZ30sICR7dGV4dF9wb3NpdGlvbj8ueSB8fCByICsgdG9wX3BhZGRpbmcgKyAyMH0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJ0ZXh0XCIpfT5cbiAgICAgICAgICAgIDwhLS0gSW5wdXQgdGV4dCBkYXRhIC0tPlxuICAgICAgICAgICAgeyNpZiAoY3VycmVudF9wYXJ0eSl9XG4gICAgICAgICAgICA8dGV4dCB4PXswfSB5PXswfSB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9e2NvbG9yfSBmb250LXNpemU9e2ZvbnRfc2l6ZX0+e2Ake2N1cnJlbnRfcGFydHkudGV4dH1gfTwvdGV4dD5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJyZWZlcmVuY2VQb2ludHNcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgKGxlZnRfcGFkZGluZyl9LCAke3IgKyAodG9wX3BhZGRpbmcpfSlgfSBjbGFzczpoaWRlPXshZGlzcGxheS5pbmNsdWRlcyhcInJlZmVyZW5jZVBvaW50c1wiKX0+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PTAgeT0xMCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj4wLCAwPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9MCBjeT0wIHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD17cn0geT0xMCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj57YCR7cn0sICR7MH1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17MH0gcj0yIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtyIC0gMTB9IHk9ey1yICsgMTB9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPntgJHtyfSwgJHstcn1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17LXJ9IHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD17LXIgKyAxMH0geT17LXIgKyAxMH0gdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+e2AtJHtyfSwgJHstcn1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXstcn0gY3k9ey1yfSByPTIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGNsYXNzPVwicmVmZXJlbmNlX3BvaW50c1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9ey1yfSB5PXsxMH0gdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+e2AtJHtyfSwgJHswfWB9PC90ZXh0PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ey1yfSBjeT17MH0gcj0yIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbjwvbWFpbj5cblxuPHN0eWxlPlxuXG4gICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IEhlbWljeWNsZSBmcm9tICdzdmVsdGUtaGVtaWN5Y2xlJztcblxuXHRleHBvcnQgbGV0IHZpc3VhbGlzYXRpb24gPSAnaGVtaWN5Y2xlJztcblx0ZXhwb3J0IGxldCBzZWxlY3RlZF95ZWFyID0gMjAyNDtcblx0ZXhwb3J0IGxldCBzZWxlY3RlZF9lbGVjdGlvbiA9ICdOYXRpb25hbCBBc3NlbWJseSc7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfcmVnaW9uID0gJ0dhdXRlbmcnO1xuXHRleHBvcnQgbGV0IHNlbGVjdGVkX2ZpZWxkcyA9IFsnUGFydHknLCAnVm90ZXMnLCAnU2VhdHMnXTtcblxuXHRsZXQgZGF0YSA9IFtdXG5cdGNvbnN0IGNvbG91cnMgPSBbXG5cdFx0XCIjRkYwMDAwXCIsXG5cdFx0XCIjMDAwMEZGXCIsXG5cdFx0XCIjMDA4MDAwXCIsXG5cdFx0XCIjRkZBNTAwXCIsXG5cdFx0XCIjRkZGRjAwXCIsXG5cdFx0XCIjODAwMDgwXCIsXG5cdFx0XCIjRkZDMENCXCIsXG5cdFx0XCIjMDBGRkZGXCIsXG5cdFx0XCIjRkYwMEZGXCIsXG5cdFx0XCIjMDAwMDAwXCIsXG5cdFx0XCIjODA4MDgwXCIsXG5cdFx0XCIjODAwMDAwXCIsXG5cdFx0XCIjMDA4MDgwXCIsXG5cdFx0XCIjODAwMDgwXCIsXG5cdFx0XCIjMDAwMDgwXCIsXG5cdFx0XCIjODA4MDAwXCIsXG5cdFx0XCIjMDA4MDAwXCJcblx0XVxuXHRjb25zdCB0b3RhbF9zZWF0cyA9IDQwMDtcblx0Y29uc3Qgcm93cz0gMTI7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGxpdmVfcmVzdWx0cyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9pZWMtYXBpLnJldmVuZ2luZS5kYWlseW1hdmVyaWNrLmNvLnphL3Jlc3VsdHMvc2VhdHMvbmF0aW9uYWwvMjAxOVwiKTtcblx0XHRjb25zdCBsaXZlX3Jlc3VsdHNfanNvbiA9IGF3YWl0IGxpdmVfcmVzdWx0cy5qc29uKCk7XG5cdFx0ZGF0YSA9IGxpdmVfcmVzdWx0c19qc29uLnBhcnR5UmVzdWx0cy5tYXAoKHBhcnR5LCBpZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHR0ZXh0OiBwYXJ0eS5BYmJyZXZpYXRpb24sXG5cdFx0XHRcdGNvdW50OiBwYXJ0eS5TZWF0cyxcblx0XHRcdFx0Y29sb3I6IGNvbG91cnNbaWRdLFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fSk7XG48L3NjcmlwdD5cbnsjaWYgdmlzdWFsaXNhdGlvbiA9PT0gXCJoZW1pY3ljbGVcIn1cblx0PEhlbWljeWNsZSB7ZGF0YX0ge3RvdGFsX3NlYXRzfSB7cm93c30gLz5cbnsvaWZ9XG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwiY2FydG9cIn1cblx0PGgxPkNhcnRvPC9oMT5cblx0PHVsPlxuXHRcdDxsaT5ZZWFyOiB7c2VsZWN0ZWRfeWVhcn08L2xpPlxuXHRcdDxsaT5FbGVjdGlvbjoge3NlbGVjdGVkX2VsZWN0aW9ufTwvbGk+XG5cdFx0PGxpPlJlZ2lvbjoge3NlbGVjdGVkX3JlZ2lvbn08L2xpPlxuXHQ8L3VsPlxuey9pZn1cbnsjaWYgdmlzdWFsaXNhdGlvbiA9PT0gXCJ0YWJsZVwifVxuXHQ8aDE+VGFibGU8L2gxPlxuXHQ8dWw+XG5cdFx0PGxpPlllYXI6IHtzZWxlY3RlZF95ZWFyfTwvbGk+XG5cdFx0PGxpPkVsZWN0aW9uOiB7c2VsZWN0ZWRfZWxlY3Rpb259PC9saT5cblx0XHQ8bGk+UmVnaW9uOiB7c2VsZWN0ZWRfcmVnaW9ufTwvbGk+XG5cdFx0PGxpPkZpZWxkczoge3NlbGVjdGVkX2ZpZWxkc308L2xpPlxuXHQ8L3VsPlxuey9pZn1cblxuIiwiLy8gaW1wb3J0ICcuL2FwcC5jc3MnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnN2ZWx0ZSdcbmNvbnNvbGUubG9nKFwiQXBwXCIpXG4vLyBHZXQgXCJpZFwiIGF0dHJpYnV0ZSBmcm9tIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgYmxvY2tcbmpRdWVyeSgoKSA9PiB7XG5cdGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2stdGVubGF5ZXItZWxlY3Rpb24tZW5naW5lJyk7XG5cdHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhcmdldCk7XG5cdFx0bGV0IHByb3BzID0ge1xuXHRcdFx0aWQ6IHRhcmdldC5pZCxcblx0XHRcdHZpc3VhbGlzYXRpb246IGpRdWVyeSh0YXJnZXQpLmRhdGEoXCJ2aXN1YWxpc2F0aW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfeWVhcjogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX3llYXJcIiksXG5cdFx0XHRzZWxlY3RlZF9lbGVjdGlvbjogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX2VsZWN0aW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfcmVnaW9uOiBqUXVlcnkodGFyZ2V0KS5kYXRhKFwic2VsZWN0ZWRfcmVnaW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfZmllbGRzOiBqUXVlcnkodGFyZ2V0KS5kYXRhKFwic2VsZWN0ZWRfZmllbGRzXCIpXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHByb3BzKVxuXHRcdG5ldyBBcHAoe1xuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0cHJvcHNcblx0XHR9KVxuXHR9KVxufSlcbi8vIGV4cG9ydCBkZWZhdWx0IGFwcFxuIl0sIm5hbWVzIjpbIm5vb3AiLCJydW4iLCJmbiIsImJsYW5rX29iamVjdCIsInJ1bl9hbGwiLCJmbnMiLCJpc19mdW5jdGlvbiIsInRoaW5nIiwic2FmZV9ub3RfZXF1YWwiLCJhIiwiYiIsImlzX2VtcHR5Iiwib2JqIiwiYXBwZW5kIiwidGFyZ2V0Iiwibm9kZSIsImluc2VydCIsImFuY2hvciIsImRldGFjaCIsImRlc3Ryb3lfZWFjaCIsIml0ZXJhdGlvbnMiLCJkZXRhY2hpbmciLCJpIiwiZWxlbWVudCIsIm5hbWUiLCJzdmdfZWxlbWVudCIsInRleHQiLCJkYXRhIiwic3BhY2UiLCJlbXB0eSIsImxpc3RlbiIsImV2ZW50IiwiaGFuZGxlciIsIm9wdGlvbnMiLCJhdHRyIiwiYXR0cmlidXRlIiwidmFsdWUiLCJjaGlsZHJlbiIsInNldF9kYXRhIiwidG9nZ2xlX2NsYXNzIiwidG9nZ2xlIiwiY3VycmVudF9jb21wb25lbnQiLCJzZXRfY3VycmVudF9jb21wb25lbnQiLCJjb21wb25lbnQiLCJnZXRfY3VycmVudF9jb21wb25lbnQiLCJvbk1vdW50IiwiZGlydHlfY29tcG9uZW50cyIsImJpbmRpbmdfY2FsbGJhY2tzIiwicmVuZGVyX2NhbGxiYWNrcyIsImZsdXNoX2NhbGxiYWNrcyIsInJlc29sdmVkX3Byb21pc2UiLCJ1cGRhdGVfc2NoZWR1bGVkIiwic2NoZWR1bGVfdXBkYXRlIiwiZmx1c2giLCJhZGRfcmVuZGVyX2NhbGxiYWNrIiwic2Vlbl9jYWxsYmFja3MiLCJmbHVzaGlkeCIsInNhdmVkX2NvbXBvbmVudCIsInVwZGF0ZSIsImNhbGxiYWNrIiwiJCQiLCJkaXJ0eSIsImZsdXNoX3JlbmRlcl9jYWxsYmFja3MiLCJmaWx0ZXJlZCIsInRhcmdldHMiLCJjIiwib3V0cm9pbmciLCJvdXRyb3MiLCJncm91cF9vdXRyb3MiLCJjaGVja19vdXRyb3MiLCJ0cmFuc2l0aW9uX2luIiwiYmxvY2siLCJsb2NhbCIsInRyYW5zaXRpb25fb3V0IiwiZW5zdXJlX2FycmF5X2xpa2UiLCJhcnJheV9saWtlX29yX2l0ZXJhdG9yIiwiY3JlYXRlX2NvbXBvbmVudCIsIm1vdW50X2NvbXBvbmVudCIsImZyYWdtZW50IiwiYWZ0ZXJfdXBkYXRlIiwibmV3X29uX2Rlc3Ryb3kiLCJkZXN0cm95X2NvbXBvbmVudCIsIm1ha2VfZGlydHkiLCJpbml0IiwiaW5zdGFuY2UiLCJjcmVhdGVfZnJhZ21lbnQiLCJub3RfZXF1YWwiLCJwcm9wcyIsImFwcGVuZF9zdHlsZXMiLCJwYXJlbnRfY29tcG9uZW50IiwicmVhZHkiLCJyZXQiLCJyZXN0Iiwibm9kZXMiLCJTdmVsdGVDb21wb25lbnQiLCJfX3B1YmxpY0ZpZWxkIiwidHlwZSIsImNhbGxiYWNrcyIsImluZGV4IiwiUFVCTElDX1ZFUlNJT04iLCJyYnRyZWUiLCJSQlRyZWUiLCJzdWNjZXNzb3IiLCJwYXJlbnQiLCJncmFuZHBhIiwidW5jbGUiLCJsZWZ0IiwicmlnaHQiLCJuZXh0IiwiaXNSZWQiLCJzaWJsaW5nIiwicCIsInEiLCJSQlRyZWVOb2RlIiwidmVydGV4IiwiVmVydGV4IiwieCIsInkiLCJlZGdlIiwiRWRnZSIsImxTaXRlIiwiclNpdGUiLCJjZWxsIiwiQ2VsbCIsInNpdGUiLCJoYWxmZWRnZXMiLCJpSGFsZmVkZ2UiLCJuZWlnaGJvcnMiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwidiIsInZ4IiwidnkiLCJoYWxmZWRnZSIsInAwIiwicDEiLCJyIiwiZGlhZ3JhbSIsIkRpYWdyYW0iLCJIYWxmZWRnZSIsInZhIiwidmIiLCJ2b3Jvbm9pIiwicmJ0cmVlXzEiLCJyZXF1aXJlJCQwIiwidmVydGV4XzEiLCJyZXF1aXJlJCQxIiwiZWRnZV8xIiwicmVxdWlyZSQkMiIsImNlbGxfMSIsInJlcXVpcmUkJDMiLCJkaWFncmFtXzEiLCJyZXF1aXJlJCQ0IiwiaGFsZmVkZ2VfMSIsInJlcXVpcmUkJDUiLCJWb3Jvbm9pIiwic2l0ZXMiLCJiYm94Iiwic3RhcnRUaW1lIiwic2l0ZUV2ZW50cyIsInNpdGVpZCIsInhzaXRleCIsInhzaXRleSIsImNlbGxzIiwiY2lyY2xlIiwic3RvcFRpbWUiLCJlcHMiLCJuIiwiYmVhY2hzZWN0aW9uIiwiYXJjIiwiZGlyZWN0cml4IiwicmZvY3giLCJyZm9jeSIsInBieTIiLCJsQXJjIiwibGZvY3giLCJsZm9jeSIsInBsYnkyIiwiaGwiLCJhYnkyIiwickFyYyIsInByZXZpb3VzIiwiZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMiLCJhYnNfZm4iLCJuQXJjcyIsImlBcmMiLCJkeGwiLCJkeHIiLCJuZXdBcmMiLCJheCIsImF5IiwiYngiLCJieSIsImN4IiwiY3kiLCJkIiwiaGIiLCJoYyIsImNTaXRlIiwiaGEiLCJ5Y2VudGVyIiwiY2lyY2xlRXZlbnQiLCJwcmVkZWNlc3NvciIsInhsIiwieHIiLCJ5dCIsInliIiwibHgiLCJseSIsInJ4IiwicnkiLCJmeCIsImZ5IiwiZm0iLCJmYiIsInQwIiwidDEiLCJkeCIsImR5IiwiZWRnZXMiLCJpRWRnZSIsImlDZWxsIiwiaUxlZnQiLCJuSGFsZmVkZ2VzIiwidnoiLCJsYXN0Qm9yZGVyU2VnbWVudCIsIlZvcm9ub2lfMSIsImNhbGNWb3Jvbm9pIiwicG9pbnRzIiwicGtnLlZvcm9ub2kiLCJtaW5feCIsIm1heF94IiwibWluX3kiLCJtYXhfeSIsInBvaW50Iiwic2hhcGVGcm9tRWRnZXMiLCJyZXN1bHQiLCJmaXJzdF9lZGdlIiwic3RhcnQiLCJlbmQiLCJoZW1pY3ljbGUiLCJyYWRpdXMiLCJyb3dzIiwiYW5nbGUiLCJ0b3RhbEFyY0xlbmd0aCIsImFyY0xlbmd0aCIsImRpc3RhbmNlQmV0d2VlblBvaW50cyIsInRvdGFsX3BvaW50cyIsInBvaW50c0luQXJjIiwibG9jYWxEaXN0YW5jZUJldHdlZW5Qb2ludHMiLCJvZmZzZXQiLCJqIiwicGF0aCIsInBhdGhfZF92YWx1ZSIsImN0eCIsIl9hIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJjaXJjbGVfY3hfdmFsdWUiLCJjaXJjbGVfY3lfdmFsdWUiLCJjaXJjbGVfb3BhY2l0eV92YWx1ZSIsImhleGFnb25TaGFwZSIsInBhdGhfdHJhbnNmb3JtX3ZhbHVlIiwicGF0aF9vcGFjaXR5X3ZhbHVlIiwiY3JlYXRlX2lmX2Jsb2NrXzIiLCJ0ZXh0XzEiLCJ0ZXh0XzFfeF92YWx1ZSIsInRleHRfMV95X3ZhbHVlIiwicGF0aF9zdHJva2Vfd2lkdGhfdmFsdWUiLCJpZl9ibG9jayIsImNyZWF0ZV9pZl9ibG9ja18xIiwidF92YWx1ZSIsInQiLCJ0MV92YWx1ZSIsInQyX3ZhbHVlIiwidDNfdmFsdWUiLCJ0NF92YWx1ZSIsImVhY2hfdmFsdWVfMyIsImVhY2hfdmFsdWUiLCJjcmVhdGVfaWZfYmxvY2siLCJnMCIsImcwX3RyYW5zZm9ybV92YWx1ZSIsImcxIiwiZzFfdHJhbnNmb3JtX3ZhbHVlIiwiZzIiLCJnMl90cmFuc2Zvcm1fdmFsdWUiLCJnMyIsImczX3RyYW5zZm9ybV92YWx1ZSIsImc0IiwiZzRfdHJhbnNmb3JtX3ZhbHVlIiwidGV4dDIiLCJ0ZXh0Ml94X3ZhbHVlIiwidGV4dDJfeV92YWx1ZSIsInRleHQzIiwidGV4dDNfeF92YWx1ZSIsInRleHQzX3lfdmFsdWUiLCJnMTAiLCJnMTBfdHJhbnNmb3JtX3ZhbHVlIiwibWFpbiIsInN2ZyIsImc1IiwidGV4dDAiLCJjaXJjbGUwIiwiZzYiLCJ0ZXh0MSIsImNpcmNsZTEiLCJnNyIsImNpcmNsZTIiLCJnOCIsImNpcmNsZTMiLCJnOSIsInRleHQ0IiwiY2lyY2xlNCIsInQyIiwidDMiLCJ0NCIsIiQkcHJvcHMiLCJkb3RzaXplIiwicGFkZGluZyIsInRvdGFsX3NlYXRzIiwiY29sb3IiLCJmb250X3NpemUiLCJ0ZXh0X3Bvc2l0aW9uIiwic2VsZWN0ZWRTaGFwZSIsImRpc3BsYXkiLCJjdXJyZW50X3BhcnR5IiwiY2xpY2tlZCIsInRvcF9wYWRkaW5nIiwiYm90dG9tX3BhZGRpbmciLCJsZWZ0X3BhZGRpbmciLCJyaWdodF9wYWRkaW5nIiwic3ZnV2lkdGgiLCJzdmdIZWlnaHQiLCJjYWxjUGFkZGluZyIsIiQkaW52YWxpZGF0ZSIsInNlbGVjdFBhcnR5IiwiY2xpY2tQYXJ0eSIsInVuc2VsZWN0UGFydHkiLCJlIiwiYWNjIiwiY3VyIiwiaDEiLCJ1bCIsImxpMCIsImxpMSIsImxpMiIsImxpMyIsImlmX2Jsb2NrMCIsImlmX2Jsb2NrMSIsImlmX2Jsb2NrMiIsInZpc3VhbGlzYXRpb24iLCJzZWxlY3RlZF95ZWFyIiwic2VsZWN0ZWRfZWxlY3Rpb24iLCJzZWxlY3RlZF9yZWdpb24iLCJzZWxlY3RlZF9maWVsZHMiLCJjb2xvdXJzIiwibGl2ZV9yZXN1bHRzX2pzb24iLCJwYXJ0eSIsImlkIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7QUFDTyxTQUFTQSxLQUFPO0FBQUU7QUFzQ2xCLFNBQVNDLEdBQUlDLEdBQUk7QUFDdkIsU0FBT0EsRUFBRTtBQUNWO0FBRU8sU0FBU0MsS0FBZTtBQUM5QixTQUFPLHVCQUFPLE9BQU8sSUFBSTtBQUMxQjtBQU1PLFNBQVNDLEdBQVFDLEdBQUs7QUFDNUIsRUFBQUEsRUFBSSxRQUFRSixFQUFHO0FBQ2hCO0FBTU8sU0FBU0ssR0FBWUMsR0FBTztBQUNsQyxTQUFPLE9BQU9BLEtBQVU7QUFDekI7QUFHTyxTQUFTQyxHQUFlQyxHQUFHQyxHQUFHO0FBQ3BDLFNBQU9ELEtBQUtBLElBQUlDLEtBQUtBLElBQUlELE1BQU1DLEtBQU1ELEtBQUssT0FBT0EsS0FBTSxZQUFhLE9BQU9BLEtBQU07QUFDbEY7QUFzRE8sU0FBU0UsR0FBU0MsR0FBSztBQUM3QixTQUFPLE9BQU8sS0FBS0EsQ0FBRyxFQUFFLFdBQVc7QUFDcEM7QUNvQk8sU0FBU0MsRUFBT0MsR0FBUUMsR0FBTTtBQUNwQyxFQUFBRCxFQUFPLFlBQVlDLENBQUk7QUFDeEI7QUE4Rk8sU0FBU0MsRUFBT0YsR0FBUUMsR0FBTUUsR0FBUTtBQUM1QyxFQUFBSCxFQUFPLGFBQWFDLEdBQU1FLEtBQVUsSUFBSTtBQUN6QztBQW9CTyxTQUFTQyxFQUFPSCxHQUFNO0FBQzVCLEVBQUlBLEVBQUss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Ozs7QUFYekI7QUFBQSxNQUFBQSxTQUFrQjs7OztNQUdsQkEsU0FBa0I7TUFRbEJBLFNBQWtCOzs7Ozs7Ozs7Ozs7O0FBMUJoQixNQUFBbUUsS0FBYyxLQUNkL0UsS0FBTTs7QUEzQkQsTUFBQSxFQUFBLGVBQUE4RyxJQUFnQixZQUFXLElBQUFsQyxHQUMzQixFQUFBLGVBQUFtQyxJQUFnQixLQUFJLElBQUFuQyxHQUNwQixFQUFBLG1CQUFBb0MsSUFBb0Isb0JBQW1CLElBQUFwQyxHQUN2QyxFQUFBLGlCQUFBcUMsSUFBa0IsVUFBUyxJQUFBckMsR0FDM0IsRUFBQSxpQkFBQXNDLElBQW1CLENBQUEsU0FBUyxTQUFTLE9BQU8sRUFBQSxJQUFBdEMsR0FFbkRyUyxJQUFJLENBQUE7UUFDRjRVLElBQU87QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBSUQsU0FBQTFULEdBQU8sWUFBQTtVQUVBMlQsSUFBaUIsT0FETCxNQUFTLE1BQU0sMkVBQTJFLEdBQy9EO1NBQzdDN1UsSUFBTzZVLEVBQWtCLGFBQWEsSUFBRyxDQUFFQyxHQUFPQztNQUU1QyxJQUFBQTtBQUFBLE1BQ0osTUFBTUQsRUFBTTtBQUFBLE1BQ1osT0FBT0EsRUFBTTtBQUFBLE1BQ2IsT0FBT0YsRUFBUUcsQ0FBRTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDckIsUUFBUSxJQUFJLEtBQUs7QUFFakIsT0FBTyxNQUFNO0FBRVosRUFEZ0IsU0FBUyxpQkFBaUIsb0NBQW9DLEVBQ3RFLFFBQVEsQ0FBQTVWLE1BQVU7QUFDekIsWUFBUSxJQUFJQSxDQUFNO0FBQ2xCLFFBQUl5RSxJQUFRO0FBQUEsTUFDWCxJQUFJekUsRUFBTztBQUFBLE1BQ1gsZUFBZSxPQUFPQSxDQUFNLEVBQUUsS0FBSyxlQUFlO0FBQUEsTUFDbEQsZUFBZSxPQUFPQSxDQUFNLEVBQUUsS0FBSyxlQUFlO0FBQUEsTUFDbEQsbUJBQW1CLE9BQU9BLENBQU0sRUFBRSxLQUFLLG1CQUFtQjtBQUFBLE1BQzFELGlCQUFpQixPQUFPQSxDQUFNLEVBQUUsS0FBSyxpQkFBaUI7QUFBQSxNQUN0RCxpQkFBaUIsT0FBT0EsQ0FBTSxFQUFFLEtBQUssaUJBQWlCO0FBQUEsSUFDdEQ7QUFDRCxZQUFRLElBQUl5RSxDQUFLLEdBQ2pCLElBQUlvUixHQUFJO0FBQUEsTUFDUCxRQUFBN1Y7QUFBQSxNQUNBLE9BQUF5RTtBQUFBLElBQ0gsQ0FBRztBQUFBLEVBQ0gsQ0FBRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMThdfQ==
