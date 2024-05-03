var Bt = Object.defineProperty;
var Ct = (i, e, t) => e in i ? Bt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Re = (i, e, t) => (Ct(i, typeof e != "symbol" ? e + "" : e, t), t);
function ne() {
}
function mt(i) {
  return i();
}
function Ye() {
  return /* @__PURE__ */ Object.create(null);
}
function ve(i) {
  i.forEach(mt);
}
function Et(i) {
  return typeof i == "function";
}
function je(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Mt(i) {
  return Object.keys(i).length === 0;
}
function b(i, e) {
  i.appendChild(e);
}
function q(i, e, t) {
  i.insertBefore(e, t || null);
}
function A(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function be(i, e) {
  for (let t = 0; t < i.length; t += 1)
    i[t] && i[t].d(e);
}
function I(i) {
  return document.createElement(i);
}
function V(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function T(i) {
  return document.createTextNode(i);
}
function re() {
  return T(" ");
}
function Le() {
  return T("");
}
function de(i, e, t, l) {
  return i.addEventListener(e, t, l), () => i.removeEventListener(e, t, l);
}
function f(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Vt(i) {
  return Array.from(i.childNodes);
}
function Y(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Z(i, e, t) {
  i.classList.toggle(e, !!t);
}
let ke;
function we(i) {
  ke = i;
}
function St() {
  if (!ke)
    throw new Error("Function called outside component initialization");
  return ke;
}
function At(i) {
  St().$$.on_mount.push(i);
}
const _e = [], Ke = [];
let ye = [];
const Xe = [], qt = /* @__PURE__ */ Promise.resolve();
let Fe = !1;
function Pt() {
  Fe || (Fe = !0, qt.then(bt));
}
function He(i) {
  ye.push(i);
}
const Ne = /* @__PURE__ */ new Set();
let ge = 0;
function bt() {
  if (ge !== 0)
    return;
  const i = ke;
  do {
    try {
      for (; ge < _e.length; ) {
        const e = _e[ge];
        ge++, we(e), Tt(e.$$);
      }
    } catch (e) {
      throw _e.length = 0, ge = 0, e;
    }
    for (we(null), _e.length = 0, ge = 0; Ke.length; )
      Ke.pop()();
    for (let e = 0; e < ye.length; e += 1) {
      const t = ye[e];
      Ne.has(t) || (Ne.add(t), t());
    }
    ye.length = 0;
  } while (_e.length);
  for (; Xe.length; )
    Xe.pop()();
  Fe = !1, Ne.clear(), we(i);
}
function Tt(i) {
  if (i.fragment !== null) {
    i.update(), ve(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(He);
  }
}
function xt(i) {
  const e = [], t = [];
  ye.forEach((l) => i.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ye = e;
}
const Pe = /* @__PURE__ */ new Set();
let le;
function $e() {
  le = {
    r: 0,
    c: [],
    p: le
    // parent group
  };
}
function et() {
  le.r || ve(le.c), le = le.p;
}
function U(i, e) {
  i && i.i && (Pe.delete(i), i.i(e));
}
function pe(i, e, t, l) {
  if (i && i.o) {
    if (Pe.has(i))
      return;
    Pe.add(i), le.c.push(() => {
      Pe.delete(i), l && (t && i.d(1), l());
    }), i.o(e);
  } else
    l && l();
}
function G(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function wt(i) {
  i && i.c();
}
function We(i, e, t) {
  const { fragment: l, after_update: r } = i.$$;
  l && l.m(e, t), He(() => {
    const n = i.$$.on_mount.map(mt).filter(Et);
    i.$$.on_destroy ? i.$$.on_destroy.push(...n) : ve(n), i.$$.on_mount = [];
  }), r.forEach(He);
}
function ze(i, e) {
  const t = i.$$;
  t.fragment !== null && (xt(t.after_update), ve(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Rt(i, e) {
  i.$$.dirty[0] === -1 && (_e.push(i), Pt(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Je(i, e, t, l, r, n, o = null, s = [-1]) {
  const a = ke;
  we(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: ne,
    not_equal: r,
    bound: Ye(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ye(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(c.root);
  let h = !1;
  if (c.ctx = t ? t(i, e.props || {}, (u, d, ..._) => {
    const y = _.length ? _[0] : d;
    return c.ctx && r(c.ctx[u], c.ctx[u] = y) && (!c.skip_bound && c.bound[u] && c.bound[u](y), h && Rt(i, u)), d;
  }) : [], c.update(), h = !0, ve(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = Vt(e.target);
      c.fragment && c.fragment.l(u), u.forEach(A);
    } else
      c.fragment && c.fragment.c();
    e.intro && U(i.$$.fragment), We(i, e.target, e.anchor), bt();
  }
  we(a);
}
class Ie {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Re(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Re(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ze(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Et(t))
      return ne;
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
    this.$$set && !Mt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Nt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Nt);
var kt = {}, Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
var Ft = function() {
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
    var o;
    if (l && r ? (o = n.red, n.red = e.red, n.left = l, l.parent = n, n !== r ? (t = n.parent, n.parent = e.parent, e = n.right, t.left = e, n.right = r, r.parent = n) : (n.parent = t, t = n, e = n.right)) : (o = e.red, e = n), e && (e.parent = t), !o) {
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
Te.RBTree = Ft;
var Ht = /* @__PURE__ */ function() {
  function i() {
  }
  return i;
}();
Te.RBTreeNode = Ht;
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
var jt = /* @__PURE__ */ function() {
  function i(e, t) {
    this.x = e, this.y = t;
  }
  return i;
}();
Oe.Vertex = jt;
var De = {};
Object.defineProperty(De, "__esModule", { value: !0 });
var Lt = /* @__PURE__ */ function() {
  function i(e, t) {
    this.lSite = e, this.rSite = t, this.va = this.vb = null;
  }
  return i;
}();
De.Edge = Lt;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
var Wt = function() {
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
    for (var e = this.halfedges, t = e.length, l = 1 / 0, r = 1 / 0, n = -1 / 0, o = -1 / 0, s, a, c; t--; )
      s = e[t].getStartpoint(), a = s.x, c = s.y, a < l && (l = a), c < r && (r = c), a > n && (n = a), c > o && (o = c);
    return {
      x: l,
      y: r,
      width: n - l,
      height: o - r
    };
  }, i.prototype.pointIntersection = function(e, t) {
    for (var l = this.halfedges, r = l.length, n, o, s, a; r--; ) {
      if (n = l[r], o = n.getStartpoint(), s = n.getEndpoint(), a = (t - o.y) * (s.x - o.x) - (e - o.x) * (s.y - o.y), !a)
        return 0;
      if (a > 0)
        return -1;
    }
    return 1;
  }, i;
}();
Qe.Cell = Wt;
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
var zt = /* @__PURE__ */ function() {
  function i(e) {
    this.site = e;
  }
  return i;
}();
Ze.Diagram = zt;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
var Jt = function() {
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
Ge.Halfedge = Jt;
Object.defineProperty(kt, "__esModule", { value: !0 });
var qe = Te, It = Oe, tt = De, Ot = Qe, it = Ze, Dt = Ge, Qt = function() {
  function i() {
    this.vertices = null, this.edges = null, this.cells = null, this.toRecycle = null, this.beachsectionJunkyard = [], this.circleEventJunkyard = [], this.vertexJunkyard = [], this.edgeJunkyard = [], this.cellJunkyard = [];
  }
  return i.prototype.compute = function(e, t) {
    var l = /* @__PURE__ */ new Date();
    this.reset(), this.toRecycle && (this.vertexJunkyard = this.vertexJunkyard.concat(this.toRecycle.vertices), this.edgeJunkyard = this.edgeJunkyard.concat(this.toRecycle.edges), this.cellJunkyard = this.cellJunkyard.concat(this.toRecycle.cells), this.toRecycle = null);
    var r = e.slice(0);
    r.sort(function(_, y) {
      var p = y.y - _.y;
      return p || y.x - _.x;
    });
    for (var n = r.pop(), o = 0, s, a, c = this.cells, h; ; )
      if (h = this.firstCircleEvent, n && (!h || n.y < h.y || n.y === h.y && n.x < h.x))
        (n.x !== s || n.y !== a) && (c[o] = this.createCell(n), n.id = o++, this.addBeachsection(n), a = n.y, s = n.x), n = r.pop();
      else if (h)
        this.removeBeachsection(h.arc);
      else
        break;
    this.clipEdges(t), this.closeCells(t);
    var u = /* @__PURE__ */ new Date(), d = new it.Diagram();
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
      if (e instanceof it.Diagram)
        this.toRecycle = e;
      else
        throw "Voronoi.recycleDiagram() > Need a Diagram object.";
  }, i.prototype.reset = function() {
    if (this.beachline || (this.beachline = new qe.RBTree()), this.beachline.root)
      for (var e = this.beachline.first(this.beachline.root); e; )
        this.beachsectionJunkyard.push(e), e = e.next;
    this.beachline.root = null, this.circleEvents || (this.circleEvents = new qe.RBTree()), this.circleEvents.root = this.firstCircleEvent = null, this.vertices = [], this.edges = [], this.cells = [];
  }, i.prototype.createCell = function(e) {
    var t = this.cellJunkyard.pop();
    return t ? (t.init(e), t.init(e)) : new Ot.Cell(e);
  }, i.prototype.createHalfedge = function(e, t, l) {
    return new Dt.Halfedge(e, t, l);
  }, i.prototype.createVertex = function(e, t) {
    var l = this.vertexJunkyard.pop();
    return l ? (l.x = e, l.y = t) : l = new It.Vertex(e, t), this.vertices.push(l), l;
  }, i.prototype.createEdge = function(e, t, l, r) {
    l === void 0 && (l = null), r === void 0 && (r = null);
    var n = this.edgeJunkyard.pop();
    return n ? (n.lSite = e, n.rSite = t, n.va = n.vb = null) : n = new tt.Edge(e, t), this.edges.push(n), l && this.setEdgeStartpoint(n, e, t, l), r && this.setEdgeEndpoint(n, e, t, r), this.cells[e.id].halfedges.push(this.createHalfedge(n, e, t)), this.cells[t.id].halfedges.push(this.createHalfedge(n, t, e)), n;
  }, i.prototype.createBorderEdge = function(e, t, l) {
    var r = this.edgeJunkyard.pop();
    return r ? (r.lSite = e, r.rSite = null) : r = new tt.Edge(e, null), r.va = t, r.vb = l, this.edges.push(r), r;
  }, i.prototype.setEdgeStartpoint = function(e, t, l, r) {
    !e.va && !e.vb ? (e.va = r, e.lSite = t, e.rSite = l) : e.lSite === l ? e.vb = r : e.va = r;
  }, i.prototype.setEdgeEndpoint = function(e, t, l, r) {
    this.setEdgeStartpoint(e, l, t, r);
  }, i.prototype.createBeachsection = function(e) {
    var t = this.beachsectionJunkyard.pop();
    return t || (t = new qe.RBTreeNode()), t.site = e, t;
  }, i.prototype.leftBreakPoint = function(e, t) {
    var l = e.site, r = l.x, n = l.y, o = n - t;
    if (!o)
      return r;
    var s = e.prev;
    if (!s)
      return -1 / 0;
    l = s.site;
    var a = l.x, c = l.y, h = c - t;
    if (!h)
      return a;
    var u = a - r, d = 1 / o - 1 / h, _ = u / h;
    return d ? (-_ + this.sqrt(_ * _ - 2 * d * (u * u / (-2 * h) - c + h / 2 + n - o / 2))) / d + r : (r + a) / 2;
  }, i.prototype.rightBreakPoint = function(e, t) {
    var l = e.next;
    if (l)
      return this.leftBreakPoint(l, t);
    var r = e.site;
    return r.y === t ? r.x : 1 / 0;
  }, i.prototype.detachBeachsection = function(e) {
    this.detachCircleEvent(e), this.beachline.removeNode(e), this.beachsectionJunkyard.push(e);
  }, i.prototype.removeBeachsection = function(e) {
    var t = e.circleEvent, l = t.x, r = t.ycenter, n = this.createVertex(l, r), o = e.prev, s = e.next, a = [e], c = Math.abs;
    this.detachBeachsection(e);
    for (var h = o; h.circleEvent && c(l - h.circleEvent.x) < this.eps() && c(r - h.circleEvent.ycenter) < this.eps(); )
      o = h.prev, a.unshift(h), this.detachBeachsection(h), h = o;
    a.unshift(h), this.detachCircleEvent(h);
    for (var u = s; u.circleEvent && c(l - u.circleEvent.x) < this.eps() && c(r - u.circleEvent.ycenter) < this.eps(); )
      s = u.next, a.push(u), this.detachBeachsection(u), u = s;
    a.push(u), this.detachCircleEvent(u);
    var d = a.length, _;
    for (_ = 1; _ < d; _++)
      u = a[_], h = a[_ - 1], this.setEdgeStartpoint(u.edge, h.site, u.site, n);
    h = a[0], u = a[d - 1], u.edge = this.createEdge(h.site, u.site, void 0, n), this.attachCircleEvent(h), this.attachCircleEvent(u);
  }, i.prototype.addBeachsection = function(e) {
    for (var t = e.x, l = e.y, r, n, o, s, a = this.beachline.root; a; )
      if (o = this.leftBreakPoint(a, l) - t, o > this.eps())
        a = a.left;
      else if (s = t - this.rightBreakPoint(a, l), s > this.eps()) {
        if (!a.right) {
          r = a;
          break;
        }
        a = a.right;
      } else {
        o > -this.eps() ? (r = a.prev, n = a) : s > -this.eps() ? (r = a, n = a.next) : r = n = a;
        break;
      }
    var c = this.createBeachsection(e);
    if (this.beachline.insertSuccessor(r, c), !(!r && !n)) {
      if (r === n) {
        this.detachCircleEvent(r), n = this.createBeachsection(r.site), this.beachline.insertSuccessor(c, n), c.edge = n.edge = this.createEdge(r.site, c.site), this.attachCircleEvent(r), this.attachCircleEvent(n);
        return;
      }
      if (r && !n) {
        c.edge = this.createEdge(r.site, c.site);
        return;
      }
      if (r !== n) {
        this.detachCircleEvent(r), this.detachCircleEvent(n);
        var h = r.site, u = h.x, d = h.y, _ = e.x - u, y = e.y - d, p = n.site, v = p.x - u, B = p.y - d, M = 2 * (_ * B - y * v), C = _ * _ + y * y, P = v * v + B * B, S = this.createVertex((B * C - y * P) / M + u, (_ * P - v * C) / M + d);
        this.setEdgeStartpoint(n.edge, h, p, S), c.edge = this.createEdge(h, e, void 0, S), n.edge = this.createEdge(e, p, void 0, S), this.attachCircleEvent(r), this.attachCircleEvent(n);
        return;
      }
    }
  }, i.prototype.attachCircleEvent = function(e) {
    var t = e.prev, l = e.next;
    if (!(!t || !l)) {
      var r = t.site, n = e.site, o = l.site;
      if (r !== o) {
        var s = n.x, a = n.y, c = r.x - s, h = r.y - a, u = o.x - s, d = o.y - a, _ = 2 * (c * d - h * u);
        if (!(_ >= -2e-12)) {
          var y = c * c + h * h, p = u * u + d * d, v = (d * y - h * p) / _, B = (c * p - u * y) / _, M = B + a, C = this.circleEventJunkyard.pop();
          C || (C = new qe.RBTreeNode()), C.arc = e, C.site = n, C.x = v + s, C.y = M + this.sqrt(v * v + B * B), C.ycenter = M, e.circleEvent = C;
          for (var P = null, S = this.circleEvents.root; S; )
            if (C.y < S.y || C.y === S.y && C.x <= S.x)
              if (S.left)
                S = S.left;
              else {
                P = S.prev;
                break;
              }
            else if (S.right)
              S = S.right;
            else {
              P = S;
              break;
            }
          this.circleEvents.insertSuccessor(P, C), P || (this.firstCircleEvent = C);
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
    var r = e.va, n = t.xl, o = t.xr, s = t.yt, a = t.yb, c = e.lSite, h = e.rSite, u = c.x, d = c.y, _ = h.x, y = h.y, p = (u + _) / 2, v = (d + y) / 2, B, M;
    if (this.cells[c.id].closeMe = !0, this.cells[h.id].closeMe = !0, y !== d && (B = (u - _) / (y - d), M = v - B * p), B === void 0) {
      if (p < n || p >= o)
        return !1;
      if (u > _) {
        if (!r || r.y < s)
          r = this.createVertex(p, s);
        else if (r.y >= a)
          return !1;
        l = this.createVertex(p, a);
      } else {
        if (!r || r.y > a)
          r = this.createVertex(p, a);
        else if (r.y < s)
          return !1;
        l = this.createVertex(p, s);
      }
    } else if (B < -1 || B > 1)
      if (u > _) {
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
    else if (d < y) {
      if (!r || r.x < n)
        r = this.createVertex(n, B * n + M);
      else if (r.x >= o)
        return !1;
      l = this.createVertex(o, B * o + M);
    } else {
      if (!r || r.x > o)
        r = this.createVertex(o, B * o + M);
      else if (r.x < n)
        return !1;
      l = this.createVertex(n, B * n + M);
    }
    return e.va = r, e.vb = l, !0;
  }, i.prototype.clipEdge = function(e, t) {
    var l = e.va.x, r = e.va.y, n = e.vb.x, o = e.vb.y, s = 0, a = 1, c = n - l, h = o - r, u = l - t.xl;
    if (c === 0 && u < 0)
      return !1;
    var d = -u / c;
    if (c < 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    } else if (c > 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    }
    if (u = t.xr - l, c === 0 && u < 0)
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
    if (u = r - t.yt, h === 0 && u < 0)
      return !1;
    if (d = -u / h, h < 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    } else if (h > 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    }
    if (u = t.yb - r, h === 0 && u < 0)
      return !1;
    if (d = u / h, h < 0) {
      if (d > a)
        return !1;
      d > s && (s = d);
    } else if (h > 0) {
      if (d < s)
        return !1;
      d < a && (a = d);
    }
    return s > 0 && (e.va = this.createVertex(l + s * c, r + s * h)), a < 1 && (e.vb = this.createVertex(l + a * c, r + a * h)), (s > 0 || a < 1) && (this.cells[e.lSite.id].closeMe = !0, this.cells[e.rSite.id].closeMe = !0), !0;
  }, i.prototype.clipEdges = function(e) {
    for (var t = this.edges, l = t.length, r, n = Math.abs; l--; )
      r = t[l], (!this.connectEdge(r, e) || !this.clipEdge(r, e) || n(r.va.x - r.vb.x) < this.eps() && n(r.va.y - r.vb.y) < this.eps()) && (r.va = r.vb = null, t.splice(l, 1));
  }, i.prototype.closeCells = function(e) {
    for (var t = e.xl, l = e.xr, r = e.yt, n = e.yb, o = this.cells, s = o.length, a, c, h, u, d, _, y, p, v, B = Math.abs; s--; )
      if (a = o[s], !!a.prepareHalfedges() && a.closeMe) {
        for (h = a.halfedges, u = h.length, c = 0; c < u; ) {
          if (_ = h[c].getEndpoint(), p = h[(c + 1) % u].getStartpoint(), B(_.x - p.x) >= this.eps() || B(_.y - p.y) >= this.eps())
            switch (!0) {
              case (this.equalWithEpsilon(_.x, t) && this.lessThanWithEpsilon(_.y, n)):
                if (v = this.equalWithEpsilon(p.x, t), y = this.createVertex(t, v ? p.y : n), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v)
                  break;
                _ = y;
              case (this.equalWithEpsilon(_.y, n) && this.lessThanWithEpsilon(_.x, l)):
                if (v = this.equalWithEpsilon(p.y, n), y = this.createVertex(v ? p.x : l, n), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v)
                  break;
                _ = y;
              case (this.equalWithEpsilon(_.x, l) && this.greaterThanWithEpsilon(_.y, r)):
                if (v = this.equalWithEpsilon(p.x, l), y = this.createVertex(l, v ? p.y : r), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v)
                  break;
                _ = y;
              case (this.equalWithEpsilon(_.y, r) && this.greaterThanWithEpsilon(_.x, t)):
                if (v = this.equalWithEpsilon(p.y, r), y = this.createVertex(v ? p.x : t, r), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v || (_ = y, v = this.equalWithEpsilon(p.x, t), y = this.createVertex(t, v ? p.y : n), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v) || (_ = y, v = this.equalWithEpsilon(p.y, n), y = this.createVertex(v ? p.x : l, n), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v) || (_ = y, v = this.equalWithEpsilon(p.x, l), y = this.createVertex(l, v ? p.y : r), d = this.createBorderEdge(a.site, _, y), c++, h.splice(c, 0, this.createHalfedge(d, a.site, null)), u++, v))
                  break;
              default:
                throw "Voronoi.closeCells() > this makes no sense!";
            }
          c++;
        }
        a.closeMe = !1;
      }
  }, i;
}(), Zt = kt.Voronoi = Qt;
const Gt = (i) => {
  const e = new Zt();
  let t = 0, l = 0, r = 0, n = 0;
  for (let s = 0; s < i.length; s++) {
    let a = i[s];
    a.x < t && (t = a.x), a.x > l && (l = a.x), a.y < r && (r = a.y), a.y > n && (n = a.y);
  }
  let o = { xl: t, xr: l, yt: r, yb: n };
  return e.compute(i, o);
};
function lt(i) {
  if (!i || i.length === 0)
    return "";
  let e = [];
  const t = i.shift();
  let l = t.getStartpoint(), r = t.getEndpoint();
  e.push(`M ${l.x} ${l.y}`), e.push(`L ${r.x} ${r.y}`);
  for (let n of i) {
    let o = n.getEndpoint();
    e.push(`L ${o.x} ${o.y}`);
  }
  return e.push("Z"), e.join(" ");
}
function Ut(i, e, t, l) {
  let r = [], n = 0;
  for (let c = e; c >= 0; c--) {
    const h = i - c * i / e, u = l / 180 * Math.PI * h;
    n += u;
  }
  const o = n / t;
  let s = 0, a = 0;
  for (let c = e; c >= 0; c--) {
    const h = i - c * i / e, u = l / 180 * Math.PI * h;
    let d = Math.ceil(u / o);
    s + d > t && (d = t - s);
    const _ = u / d, y = (l - 180) / 180 * Math.PI / 2;
    for (let p = 0; p < d; p++) {
      s++;
      const v = p * _ / h + _ / h / 2, B = -h * Math.cos(v - y), M = -h * Math.sin(v - y);
      r.push({ id: c, x: B, y: M, a, angle: v });
    }
    a++;
  }
  return r.sort((c, h) => c.angle - h.angle), r;
}
function rt(i, e, t) {
  const l = i.slice();
  return l[33] = e[t], l[35] = t, l;
}
function nt(i, e, t) {
  const l = i.slice();
  return l[36] = e[t], l[35] = t, l;
}
function st(i, e, t) {
  const l = i.slice();
  return l[36] = e[t], l;
}
function at(i, e, t) {
  const l = i.slice();
  return l[40] = e[t], l[35] = t, l;
}
function ft(i) {
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
      q(l, e, r);
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
      l && A(e);
    }
  };
}
function Yt(i) {
  let e, t, l, r, n, o;
  return {
    c() {
      var s, a, c, h, u;
      e = V("circle"), f(e, "data-party", t = /*point*/
      (s = i[36].data) == null ? void 0 : s.id), f(e, "cx", l = /*point*/
      i[36].x), f(e, "cy", r = /*point*/
      i[36].y), f(
        e,
        "r",
        /*dotsize*/
        i[3]
      ), f(e, "fill", n = /*point*/
      (a = i[36].data) == null ? void 0 : a.color), f(e, "opacity", o = /*current_party*/
      (c = i[0]) != null && c.id ? (
        /*point*/
        ((h = i[36].data) == null ? void 0 : h.id) === /*current_party*/
        ((u = i[0]) == null ? void 0 : u.id) ? 1 : 0.5
      ) : 1);
    },
    m(s, a) {
      q(s, e, a);
    },
    p(s, a) {
      var c, h, u, d, _;
      a[0] & /*points*/
      512 && t !== (t = /*point*/
      (c = s[36].data) == null ? void 0 : c.id) && f(e, "data-party", t), a[0] & /*points*/
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
      (h = s[36].data) == null ? void 0 : h.color) && f(e, "fill", n), a[0] & /*current_party, points*/
      513 && o !== (o = /*current_party*/
      (u = s[0]) != null && u.id ? (
        /*point*/
        ((d = s[36].data) == null ? void 0 : d.id) === /*current_party*/
        ((_ = s[0]) == null ? void 0 : _.id) ? 1 : 0.5
      ) : 1) && f(e, "opacity", o);
    },
    d(s) {
      s && A(e);
    }
  };
}
function Kt(i) {
  let e, t, l, r, n;
  return {
    c() {
      var o, s, a, c, h;
      e = V("path"), f(e, "d", $t), f(e, "transform", t = `translate(${/*point*/
      i[36].x},${/*point*/
      i[36].y}) rotate(-5) scale(0.07)`), f(e, "data-party", l = /*point*/
      (o = i[36].data) == null ? void 0 : o.id), f(e, "fill", r = /*point*/
      (s = i[36].data) == null ? void 0 : s.color), f(e, "opacity", n = /*current_party*/
      (a = i[0]) != null && a.id ? (
        /*point*/
        ((c = i[36].data) == null ? void 0 : c.id) === /*current_party*/
        ((h = i[0]) == null ? void 0 : h.id) ? 1 : 0.5
      ) : 1);
    },
    m(o, s) {
      q(o, e, s);
    },
    p(o, s) {
      var a, c, h, u, d;
      s[0] & /*points*/
      512 && t !== (t = `translate(${/*point*/
      o[36].x},${/*point*/
      o[36].y}) rotate(-5) scale(0.07)`) && f(e, "transform", t), s[0] & /*points*/
      512 && l !== (l = /*point*/
      (a = o[36].data) == null ? void 0 : a.id) && f(e, "data-party", l), s[0] & /*points*/
      512 && r !== (r = /*point*/
      (c = o[36].data) == null ? void 0 : c.color) && f(e, "fill", r), s[0] & /*current_party, points*/
      513 && n !== (n = /*current_party*/
      (h = o[0]) != null && h.id ? (
        /*point*/
        ((u = o[36].data) == null ? void 0 : u.id) === /*current_party*/
        ((d = o[0]) == null ? void 0 : d.id) ? 1 : 0.5
      ) : 1) && f(e, "opacity", n);
    },
    d(o) {
      o && A(e);
    }
  };
}
function ot(i) {
  let e;
  function t(n, o) {
    return (
      /*selectedShape*/
      n[7] === "hexagon" ? Kt : Yt
    );
  }
  let l = t(i), r = l(i);
  return {
    c() {
      r.c(), e = Le();
    },
    m(n, o) {
      r.m(n, o), q(n, e, o);
    },
    p(n, o) {
      l === (l = t(n)) && r ? r.p(n, o) : (r.d(1), r = l(n), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(n) {
      n && A(e), r.d(n);
    }
  };
}
function ct(i) {
  let e, t = `${/*i*/
  i[35]}`, l, r, n;
  return {
    c() {
      e = V("text"), l = T(t), f(e, "x", r = /*point*/
      i[36].x), f(e, "y", n = /*point*/
      i[36].y), f(e, "text-anchor", "middle"), f(e, "alignment-baseline", "middle"), f(e, "fill", "white"), f(e, "font-size", "8");
    },
    m(o, s) {
      q(o, e, s), b(e, l);
    },
    p(o, s) {
      s[0] & /*points*/
      512 && r !== (r = /*point*/
      o[36].x) && f(e, "x", r), s[0] & /*points*/
      512 && n !== (n = /*point*/
      o[36].y) && f(e, "y", n);
    },
    d(o) {
      o && A(e);
    }
  };
}
function ht(i) {
  let e, t, l, r, n, o;
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
  function c() {
    return (
      /*click_handler*/
      i[28](
        /*cell*/
        i[33]
      )
    );
  }
  function h(...u) {
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
      e = V("path"), f(e, "class", "voronoi_path"), f(e, "d", t = lt(
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
      q(u, e, d), n || (o = [
        de(e, "mouseover", s),
        de(e, "focus", a),
        de(
          e,
          "mouseout",
          /*mouseout_handler*/
          i[26]
        ),
        de(
          e,
          "blur",
          /*blur_handler*/
          i[27]
        ),
        de(e, "click", c),
        de(e, "keypress", h)
      ], n = !0);
    },
    p(u, d) {
      i = u, d[0] & /*voronoi*/
      4096 && t !== (t = lt(
        /*cell*/
        i[33].halfedges
      ).toString()) && f(e, "d", t), d[0] & /*display*/
      256 && l !== (l = /*display*/
      i[8].includes("voronoi") ? "white" : "transparent") && f(e, "stroke", l), d[0] & /*display*/
      256 && r !== (r = /*display*/
      i[8].includes("voronoi") ? 1 : 0) && f(e, "stroke-width", r);
    },
    d(u) {
      u && A(e), n = !1, ve(o);
    }
  };
}
function ut(i) {
  var l;
  let e, t = (
    /*cell*/
    ((l = i[33].halfedges) == null ? void 0 : l.length) > 0 && ht(i)
  );
  return {
    c() {
      t && t.c(), e = Le();
    },
    m(r, n) {
      t && t.m(r, n), q(r, e, n);
    },
    p(r, n) {
      var o;
      /*cell*/
      ((o = r[33].halfedges) == null ? void 0 : o.length) > 0 ? t ? t.p(r, n) : (t = ht(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && A(e), t && t.d(r);
    }
  };
}
function dt(i) {
  let e, t = `${/*current_party*/
  i[0].text}`, l;
  return {
    c() {
      e = V("text"), l = T(t), f(e, "x", 0), f(e, "y", 0), f(e, "text-anchor", "middle"), f(e, "alignment-baseline", "middle"), f(
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
      q(r, e, n), b(e, l);
    },
    p(r, n) {
      n[0] & /*current_party*/
      1 && t !== (t = `${/*current_party*/
      r[0].text}`) && Y(l, t), n[0] & /*color*/
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
      r && A(e);
    }
  };
}
function Xt(i) {
  let e, t, l, r, n, o, s, a, c, h, u, d, _, y, p, v, B, M, C, P = `${/*r*/
  i[1]}, 0`, S, W, K, j, se = `${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, ee, X, $, D, ae, te, z, fe = `-${/*r*/
  i[1]}, ${-/*r*/
  i[1]}`, me, E, J, x, Be, Ce, Ee, Q, Me = `-${/*r*/
  i[1]}, 0`, xe, Ve, ie, Se, Ae, oe = G(Array(
    /*rows*/
    i[2]
  )), R = [];
  for (let g = 0; g < oe.length; g += 1)
    R[g] = ft(at(i, oe, g));
  let ce = G(
    /*points*/
    i[9]
  ), N = [];
  for (let g = 0; g < ce.length; g += 1)
    N[g] = ot(st(i, ce, g));
  let he = G(
    /*points*/
    i[9]
  ), F = [];
  for (let g = 0; g < he.length; g += 1)
    F[g] = ct(nt(i, he, g));
  let ue = G(
    /*voronoi*/
    i[12].cells
  ), H = [];
  for (let g = 0; g < ue.length; g += 1)
    H[g] = ut(rt(i, ue, g));
  let L = (
    /*current_party*/
    i[0] && dt(i)
  );
  return {
    c() {
      var g, w;
      e = I("main"), t = V("svg"), l = V("g");
      for (let k = 0; k < R.length; k += 1)
        R[k].c();
      n = V("g");
      for (let k = 0; k < N.length; k += 1)
        N[k].c();
      s = V("g");
      for (let k = 0; k < F.length; k += 1)
        F[k].c();
      c = V("g");
      for (let k = 0; k < H.length; k += 1)
        H[k].c();
      u = V("g"), L && L.c(), _ = V("g"), y = V("g"), p = V("text"), v = T("0, 0"), B = V("circle"), M = V("g"), C = V("text"), S = T(P), W = V("circle"), K = V("g"), j = V("text"), ee = T(se), D = V("circle"), te = V("g"), z = V("text"), me = T(fe), x = V("circle"), Ee = V("g"), Q = V("text"), xe = T(Me), ie = V("circle"), f(l, "id", "arcs"), f(l, "transform", r = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(l, "class", "svelte-smqp4o"), Z(l, "hide", !/*display*/
      i[8].includes("arcs")), f(n, "id", "points"), f(n, "transform", o = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(n, "class", "svelte-smqp4o"), Z(n, "hide", !/*display*/
      i[8].includes("points")), f(s, "id", "numbers"), f(s, "transform", a = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(s, "class", "svelte-smqp4o"), Z(s, "hide", !/*display*/
      i[8].includes("numbers")), f(c, "id", "voronoi"), f(c, "transform", h = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(u, "id", "text"), f(u, "transform", d = `translate(${/*text_position*/
      ((g = i[6]) == null ? void 0 : g.x) || /*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*text_position*/
      ((w = i[6]) == null ? void 0 : w.y) || /*r*/
      i[1] + /*top_padding*/
      i[10] + 20})`), f(u, "class", "svelte-smqp4o"), Z(u, "hide", !/*display*/
      i[8].includes("text")), f(p, "x", "0"), f(p, "y", "10"), f(p, "text-anchor", "middle"), f(p, "alignment-baseline", "middle"), f(p, "fill", "white"), f(p, "font-size", "8"), f(B, "cx", "0"), f(B, "cy", "0"), f(B, "r", "2"), f(B, "fill", "white"), f(y, "class", "reference_points"), f(
        C,
        "x",
        /*r*/
        i[1]
      ), f(C, "y", "10"), f(C, "text-anchor", "middle"), f(C, "alignment-baseline", "middle"), f(C, "fill", "white"), f(C, "font-size", "8"), f(
        W,
        "cx",
        /*r*/
        i[1]
      ), f(W, "cy", 0), f(W, "r", "2"), f(W, "fill", "white"), f(M, "class", "reference_points"), f(j, "x", X = /*r*/
      i[1] - 10), f(j, "y", $ = -/*r*/
      i[1] + 10), f(j, "text-anchor", "middle"), f(j, "alignment-baseline", "middle"), f(j, "fill", "white"), f(j, "font-size", "8"), f(
        D,
        "cx",
        /*r*/
        i[1]
      ), f(D, "cy", ae = -/*r*/
      i[1]), f(D, "r", "2"), f(D, "fill", "white"), f(K, "class", "reference_points"), f(z, "x", E = -/*r*/
      i[1] + 10), f(z, "y", J = -/*r*/
      i[1] + 10), f(z, "text-anchor", "middle"), f(z, "alignment-baseline", "middle"), f(z, "fill", "white"), f(z, "font-size", "8"), f(x, "cx", Be = -/*r*/
      i[1]), f(x, "cy", Ce = -/*r*/
      i[1]), f(x, "r", "2"), f(x, "fill", "white"), f(te, "class", "reference_points"), f(Q, "x", Ve = -/*r*/
      i[1]), f(Q, "y", 10), f(Q, "text-anchor", "middle"), f(Q, "alignment-baseline", "middle"), f(Q, "fill", "white"), f(Q, "font-size", "8"), f(ie, "cx", Se = -/*r*/
      i[1]), f(ie, "cy", 0), f(ie, "r", "2"), f(ie, "fill", "white"), f(Ee, "class", "reference_points"), f(_, "id", "referencePoints"), f(_, "transform", Ae = `translate(${/*r*/
      i[1] + /*left_padding*/
      i[11]}, ${/*r*/
      i[1] + /*top_padding*/
      i[10]})`), f(_, "class", "svelte-smqp4o"), Z(_, "hide", !/*display*/
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
    m(g, w) {
      q(g, e, w), b(e, t), b(t, l);
      for (let k = 0; k < R.length; k += 1)
        R[k] && R[k].m(l, null);
      b(t, n);
      for (let k = 0; k < N.length; k += 1)
        N[k] && N[k].m(n, null);
      b(t, s);
      for (let k = 0; k < F.length; k += 1)
        F[k] && F[k].m(s, null);
      b(t, c);
      for (let k = 0; k < H.length; k += 1)
        H[k] && H[k].m(c, null);
      b(t, u), L && L.m(u, null), b(t, _), b(_, y), b(y, p), b(p, v), b(y, B), b(_, M), b(M, C), b(C, S), b(M, W), b(_, K), b(K, j), b(j, ee), b(K, D), b(_, te), b(te, z), b(z, me), b(te, x), b(_, Ee), b(Ee, Q), b(Q, xe), b(Ee, ie);
    },
    p(g, w) {
      var k, Ue;
      if (w[0] & /*r, rows*/
      6) {
        oe = G(Array(
          /*rows*/
          g[2]
        ));
        let m;
        for (m = 0; m < oe.length; m += 1) {
          const O = at(g, oe, m);
          R[m] ? R[m].p(O, w) : (R[m] = ft(O), R[m].c(), R[m].m(l, null));
        }
        for (; m < R.length; m += 1)
          R[m].d(1);
        R.length = oe.length;
      }
      if (w[0] & /*r, left_padding, top_padding*/
      3074 && r !== (r = `translate(${/*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*r*/
      g[1] + /*top_padding*/
      g[10]})`) && f(l, "transform", r), w[0] & /*display*/
      256 && Z(l, "hide", !/*display*/
      g[8].includes("arcs")), w[0] & /*points, current_party, selectedShape, dotsize*/
      649) {
        ce = G(
          /*points*/
          g[9]
        );
        let m;
        for (m = 0; m < ce.length; m += 1) {
          const O = st(g, ce, m);
          N[m] ? N[m].p(O, w) : (N[m] = ot(O), N[m].c(), N[m].m(n, null));
        }
        for (; m < N.length; m += 1)
          N[m].d(1);
        N.length = ce.length;
      }
      if (w[0] & /*r, left_padding, top_padding*/
      3074 && o !== (o = `translate(${/*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*r*/
      g[1] + /*top_padding*/
      g[10]})`) && f(n, "transform", o), w[0] & /*display*/
      256 && Z(n, "hide", !/*display*/
      g[8].includes("points")), w[0] & /*points*/
      512) {
        he = G(
          /*points*/
          g[9]
        );
        let m;
        for (m = 0; m < he.length; m += 1) {
          const O = nt(g, he, m);
          F[m] ? F[m].p(O, w) : (F[m] = ct(O), F[m].c(), F[m].m(s, null));
        }
        for (; m < F.length; m += 1)
          F[m].d(1);
        F.length = he.length;
      }
      if (w[0] & /*r, left_padding, top_padding*/
      3074 && a !== (a = `translate(${/*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*r*/
      g[1] + /*top_padding*/
      g[10]})`) && f(s, "transform", a), w[0] & /*display*/
      256 && Z(s, "hide", !/*display*/
      g[8].includes("numbers")), w[0] & /*voronoi, display, selectParty, unselectParty, clickParty*/
      233728) {
        ue = G(
          /*voronoi*/
          g[12].cells
        );
        let m;
        for (m = 0; m < ue.length; m += 1) {
          const O = rt(g, ue, m);
          H[m] ? H[m].p(O, w) : (H[m] = ut(O), H[m].c(), H[m].m(c, null));
        }
        for (; m < H.length; m += 1)
          H[m].d(1);
        H.length = ue.length;
      }
      w[0] & /*r, left_padding, top_padding*/
      3074 && h !== (h = `translate(${/*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*r*/
      g[1] + /*top_padding*/
      g[10]})`) && f(c, "transform", h), /*current_party*/
      g[0] ? L ? L.p(g, w) : (L = dt(g), L.c(), L.m(u, null)) : L && (L.d(1), L = null), w[0] & /*text_position, r, left_padding, top_padding*/
      3138 && d !== (d = `translate(${/*text_position*/
      ((k = g[6]) == null ? void 0 : k.x) || /*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*text_position*/
      ((Ue = g[6]) == null ? void 0 : Ue.y) || /*r*/
      g[1] + /*top_padding*/
      g[10] + 20})`) && f(u, "transform", d), w[0] & /*display*/
      256 && Z(u, "hide", !/*display*/
      g[8].includes("text")), w[0] & /*r*/
      2 && P !== (P = `${/*r*/
      g[1]}, 0`) && Y(S, P), w[0] & /*r*/
      2 && f(
        C,
        "x",
        /*r*/
        g[1]
      ), w[0] & /*r*/
      2 && f(
        W,
        "cx",
        /*r*/
        g[1]
      ), w[0] & /*r*/
      2 && se !== (se = `${/*r*/
      g[1]}, ${-/*r*/
      g[1]}`) && Y(ee, se), w[0] & /*r*/
      2 && X !== (X = /*r*/
      g[1] - 10) && f(j, "x", X), w[0] & /*r*/
      2 && $ !== ($ = -/*r*/
      g[1] + 10) && f(j, "y", $), w[0] & /*r*/
      2 && f(
        D,
        "cx",
        /*r*/
        g[1]
      ), w[0] & /*r*/
      2 && ae !== (ae = -/*r*/
      g[1]) && f(D, "cy", ae), w[0] & /*r*/
      2 && fe !== (fe = `-${/*r*/
      g[1]}, ${-/*r*/
      g[1]}`) && Y(me, fe), w[0] & /*r*/
      2 && E !== (E = -/*r*/
      g[1] + 10) && f(z, "x", E), w[0] & /*r*/
      2 && J !== (J = -/*r*/
      g[1] + 10) && f(z, "y", J), w[0] & /*r*/
      2 && Be !== (Be = -/*r*/
      g[1]) && f(x, "cx", Be), w[0] & /*r*/
      2 && Ce !== (Ce = -/*r*/
      g[1]) && f(x, "cy", Ce), w[0] & /*r*/
      2 && Me !== (Me = `-${/*r*/
      g[1]}, 0`) && Y(xe, Me), w[0] & /*r*/
      2 && Ve !== (Ve = -/*r*/
      g[1]) && f(Q, "x", Ve), w[0] & /*r*/
      2 && Se !== (Se = -/*r*/
      g[1]) && f(ie, "cx", Se), w[0] & /*r, left_padding, top_padding*/
      3074 && Ae !== (Ae = `translate(${/*r*/
      g[1] + /*left_padding*/
      g[11]}, ${/*r*/
      g[1] + /*top_padding*/
      g[10]})`) && f(_, "transform", Ae), w[0] & /*display*/
      256 && Z(_, "hide", !/*display*/
      g[8].includes("referencePoints")), w[0] & /*svgWidth*/
      8192 && f(
        t,
        "width",
        /*svgWidth*/
        g[13]
      ), w[0] & /*svgHeight*/
      16384 && f(
        t,
        "height",
        /*svgHeight*/
        g[14]
      );
    },
    i: ne,
    o: ne,
    d(g) {
      g && A(e), be(R, g), be(N, g), be(F, g), be(H, g), L && L.d();
    }
  };
}
let $t = "M86.60254037844386 12L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z";
function ei(i, e, t) {
  let { data: l = [] } = e, { r = 300 } = e, { rows: n = 12 } = e, { dotsize: o = 5 } = e, { padding: s = 10 } = e, { total_seats: a } = e, { color: c = "white" } = e, { font_size: h = 12 } = e, { arc: u = 180 } = e, { text_position: d = null } = e, { selectedShape: _ = "circle" } = e, { display: y = ["points", "text"] } = e, { current_party: p = null } = e, v = [], B = null, M = !1, C = 0, P = 0, S = 0, W = 0, K = 0, j = 0;
  function se() {
    Array.isArray(s) ? s.length === 2 ? (t(10, C = s[0]), t(22, P = s[0]), t(11, S = s[1]), t(23, W = s[1])) : s.length === 4 && (t(10, C = s[0]), t(22, P = s[1]), t(11, S = s[2]), t(23, W = s[3])) : (t(10, C = s), t(22, P = s), t(11, S = s), t(23, W = s));
  }
  function ee(E) {
    E.data && !M && t(0, p = E.data);
  }
  function X(E) {
    E.data && (p && M && p.id === E.data.id ? (t(0, p = null), M = !1) : (t(0, p = E.data), M = !0));
  }
  function $() {
    M || t(0, p = null);
  }
  const D = (E) => {
    ee(E.site);
  }, ae = (E) => ee(E.site), te = () => $(), z = () => $(), fe = (E) => {
    X(E.site);
  }, me = (E, J) => {
    J.key === "Enter" && X(E.site);
  };
  return i.$$set = (E) => {
    "data" in E && t(19, l = E.data), "r" in E && t(1, r = E.r), "rows" in E && t(2, n = E.rows), "dotsize" in E && t(3, o = E.dotsize), "padding" in E && t(20, s = E.padding), "total_seats" in E && t(21, a = E.total_seats), "color" in E && t(4, c = E.color), "font_size" in E && t(5, h = E.font_size), "arc" in E && t(18, u = E.arc), "text_position" in E && t(6, d = E.text_position), "selectedShape" in E && t(7, _ = E.selectedShape), "display" in E && t(8, y = E.display), "current_party" in E && t(0, p = E.current_party);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*arc, data, r, rows, total_seats, points, left_padding, right_padding, top_padding, bottom_padding*/
    15470086) {
      u < 10 && t(18, u = 10), u > 360 && t(18, u = 360), se(), l.sort((J, x) => x.count - J.count), l.reduce((J, x) => J + x.count, 0), t(9, v = Ut(r, n, a, u));
      let E = 0;
      for (let J in l)
        for (let x = 0; x < l[J].count; x++)
          t(9, v[E].data = l[J], v), E++;
      t(12, B = Gt(v)), t(13, K = r * 2 + S + W), t(14, j = r * 2 + C + P);
    }
  }, [
    p,
    r,
    n,
    o,
    c,
    h,
    d,
    _,
    y,
    v,
    C,
    S,
    B,
    K,
    j,
    ee,
    X,
    $,
    u,
    l,
    s,
    a,
    P,
    W,
    D,
    ae,
    te,
    z,
    fe,
    me
  ];
}
class ti extends Ie {
  constructor(e) {
    super(), Je(
      this,
      e,
      ei,
      Xt,
      je,
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
function gt(i, e, t) {
  const l = i.slice();
  return l[4] = e[t], l;
}
function _t(i) {
  let e, t = (
    /*field*/
    i[4] + ""
  ), l;
  return {
    c() {
      e = I("th"), l = T(t);
    },
    m(r, n) {
      q(r, e, n), b(e, l);
    },
    p(r, n) {
      n & /*selected_fields*/
      1 && t !== (t = /*field*/
      r[4] + "") && Y(l, t);
    },
    d(r) {
      r && A(e);
    }
  };
}
function ii(i) {
  let e, t, l, r, n, o = G(
    /*selected_fields*/
    i[0]
  ), s = [];
  for (let a = 0; a < o.length; a += 1)
    s[a] = _t(gt(i, o, a));
  return {
    c() {
      e = I("table"), t = I("thead"), l = I("tr");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      r = re(), n = I("tbody"), n.innerHTML = "<tr><td>ANC</td> <td>10,000,000</td> <td>200</td></tr> <tr><td>DA</td> <td>5,000,000</td> <td>100</td></tr> <tr><td>EFF</td> <td>2,000,000</td> <td>40</td></tr>";
    },
    m(a, c) {
      q(a, e, c), b(e, t), b(t, l);
      for (let h = 0; h < s.length; h += 1)
        s[h] && s[h].m(l, null);
      b(e, r), b(e, n);
    },
    p(a, [c]) {
      if (c & /*selected_fields*/
      1) {
        o = G(
          /*selected_fields*/
          a[0]
        );
        let h;
        for (h = 0; h < o.length; h += 1) {
          const u = gt(a, o, h);
          s[h] ? s[h].p(u, c) : (s[h] = _t(u), s[h].c(), s[h].m(l, null));
        }
        for (; h < s.length; h += 1)
          s[h].d(1);
        s.length = o.length;
      }
    },
    i: ne,
    o: ne,
    d(a) {
      a && A(e), be(s, a);
    }
  };
}
function li(i, e, t) {
  let { selected_year: l = 2024 } = e, { selected_election: r = "National Assembly" } = e, { selected_region: n = "National" } = e, { selected_fields: o = ["Party", "Votes", "Seats"] } = e;
  return i.$$set = (s) => {
    "selected_year" in s && t(1, l = s.selected_year), "selected_election" in s && t(2, r = s.selected_election), "selected_region" in s && t(3, n = s.selected_region), "selected_fields" in s && t(0, o = s.selected_fields);
  }, [o, l, r, n];
}
class ri extends Ie {
  constructor(e) {
    super(), Je(this, e, li, ii, je, {
      selected_year: 1,
      selected_election: 2,
      selected_region: 3,
      selected_fields: 0
    });
  }
}
function pt(i) {
  let e, t;
  return e = new ti({
    props: { data: (
      /*data*/
      i[5]
    ), total_seats: si, rows: ai }
  }), {
    c() {
      wt(e.$$.fragment);
    },
    m(l, r) {
      We(e, l, r), t = !0;
    },
    p(l, r) {
      const n = {};
      r & /*data*/
      32 && (n.data = /*data*/
      l[5]), e.$set(n);
    },
    i(l) {
      t || (U(e.$$.fragment, l), t = !0);
    },
    o(l) {
      pe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ze(e, l);
    }
  };
}
function yt(i) {
  let e, t, l, r, n, o, s, a, c, h, u, d, _, y;
  return {
    c() {
      e = I("h1"), e.textContent = "Carto", t = re(), l = I("ul"), r = I("li"), n = T("Year: "), o = T(
        /*selected_year*/
        i[1]
      ), s = re(), a = I("li"), c = T("Election: "), h = T(
        /*selected_election*/
        i[2]
      ), u = re(), d = I("li"), _ = T("Region: "), y = T(
        /*selected_region*/
        i[3]
      );
    },
    m(p, v) {
      q(p, e, v), q(p, t, v), q(p, l, v), b(l, r), b(r, n), b(r, o), b(l, s), b(l, a), b(a, c), b(a, h), b(l, u), b(l, d), b(d, _), b(d, y);
    },
    p(p, v) {
      v & /*selected_year*/
      2 && Y(
        o,
        /*selected_year*/
        p[1]
      ), v & /*selected_election*/
      4 && Y(
        h,
        /*selected_election*/
        p[2]
      ), v & /*selected_region*/
      8 && Y(
        y,
        /*selected_region*/
        p[3]
      );
    },
    d(p) {
      p && (A(e), A(t), A(l));
    }
  };
}
function vt(i) {
  let e, t, l, r;
  return l = new ri({
    props: {
      selected_year: (
        /*selected_year*/
        i[1]
      ),
      selected_election: (
        /*selected_election*/
        i[2]
      ),
      selected_region: (
        /*selected_region*/
        i[3]
      ),
      selected_fields: (
        /*selected_fields*/
        i[4]
      )
    }
  }), {
    c() {
      e = I("h1"), e.textContent = "Table", t = re(), wt(l.$$.fragment);
    },
    m(n, o) {
      q(n, e, o), q(n, t, o), We(l, n, o), r = !0;
    },
    p(n, o) {
      const s = {};
      o & /*selected_year*/
      2 && (s.selected_year = /*selected_year*/
      n[1]), o & /*selected_election*/
      4 && (s.selected_election = /*selected_election*/
      n[2]), o & /*selected_region*/
      8 && (s.selected_region = /*selected_region*/
      n[3]), o & /*selected_fields*/
      16 && (s.selected_fields = /*selected_fields*/
      n[4]), l.$set(s);
    },
    i(n) {
      r || (U(l.$$.fragment, n), r = !0);
    },
    o(n) {
      pe(l.$$.fragment, n), r = !1;
    },
    d(n) {
      n && (A(e), A(t)), ze(l, n);
    }
  };
}
function ni(i) {
  let e, t, l, r, n = (
    /*visualisation*/
    i[0] === "hemicycle" && pt(i)
  ), o = (
    /*visualisation*/
    i[0] === "carto" && yt(i)
  ), s = (
    /*visualisation*/
    i[0] === "table" && vt(i)
  );
  return {
    c() {
      n && n.c(), e = re(), o && o.c(), t = re(), s && s.c(), l = Le();
    },
    m(a, c) {
      n && n.m(a, c), q(a, e, c), o && o.m(a, c), q(a, t, c), s && s.m(a, c), q(a, l, c), r = !0;
    },
    p(a, [c]) {
      /*visualisation*/
      a[0] === "hemicycle" ? n ? (n.p(a, c), c & /*visualisation*/
      1 && U(n, 1)) : (n = pt(a), n.c(), U(n, 1), n.m(e.parentNode, e)) : n && ($e(), pe(n, 1, 1, () => {
        n = null;
      }), et()), /*visualisation*/
      a[0] === "carto" ? o ? o.p(a, c) : (o = yt(a), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*visualisation*/
      a[0] === "table" ? s ? (s.p(a, c), c & /*visualisation*/
      1 && U(s, 1)) : (s = vt(a), s.c(), U(s, 1), s.m(l.parentNode, l)) : s && ($e(), pe(s, 1, 1, () => {
        s = null;
      }), et());
    },
    i(a) {
      r || (U(n), U(s), r = !0);
    },
    o(a) {
      pe(n), pe(s), r = !1;
    },
    d(a) {
      a && (A(e), A(t), A(l)), n && n.d(a), o && o.d(a), s && s.d(a);
    }
  };
}
const si = 400, ai = 12;
function fi(i, e, t) {
  let { visualisation: l = "hemicycle" } = e, { selected_year: r = 2024 } = e, { selected_election: n = "National Assembly" } = e, { selected_region: o = "Gauteng" } = e, { selected_fields: s = ["Party", "Votes", "Seats"] } = e, a = [];
  const c = [
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
  return At(async () => {
    const u = await (await fetch("https://iec-api.revengine.dailymaverick.co.za/results/seats/national/2019")).json();
    t(5, a = u.partyResults.map((d, _) => ({
      id: _,
      text: d.Abbreviation,
      count: d.Seats,
      color: c[_]
    })));
  }), i.$$set = (h) => {
    "visualisation" in h && t(0, l = h.visualisation), "selected_year" in h && t(1, r = h.selected_year), "selected_election" in h && t(2, n = h.selected_election), "selected_region" in h && t(3, o = h.selected_region), "selected_fields" in h && t(4, s = h.selected_fields);
  }, [
    l,
    r,
    n,
    o,
    s,
    a
  ];
}
class oi extends Ie {
  constructor(e) {
    super(), Je(this, e, fi, ni, je, {
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
    var l;
    let t = {
      id: e.id,
      visualisation: jQuery(e).data("visualisation"),
      selected_year: jQuery(e).data("selected_year"),
      selected_election: jQuery(e).data("selected_election"),
      selected_region: jQuery(e).data("selected_region"),
      selected_fields: (l = jQuery(e).data("selected_fields")) == null ? void 0 : l.split(",").map((r) => r.trim())
    };
    new oi({
      target: e,
      props: t
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Rpb24tZW5naW5lLmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3V0aWxzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9kb20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2xpZmVjeWNsZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC90cmFuc2l0aW9ucy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvZWFjaC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvQ29tcG9uZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc2hhcmVkL3ZlcnNpb24uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2Rpc2Nsb3NlLXZlcnNpb24vaW5kZXguanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdm9yb25vaWpzL3JidHJlZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdmVydGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9lZGdlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9jZWxsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9kaWFncmFtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9oYWxmZWRnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvdm9yb25vaS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvbGlicy92b3Jvbm9pLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1oZW1pY3ljbGUvZGlzdC9saWJzL2hlbWljeWNsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvSGVtaWN5Y2xlLnN2ZWx0ZSIsIi4uLy4uL3NyYy9zdmVsdGUvY29tcG9uZW50cy9UYWJsZS5zdmVsdGUiLCIuLi8uLi9zcmMvc3ZlbHRlL0FwcC5zdmVsdGUiLCIuLi8uLi9zcmMvc3ZlbHRlL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjb25zdCBpZGVudGl0eSA9ICh4KSA9PiB4O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUgU1xuICogQHBhcmFtIHtUfSB0YXJcbiAqIEBwYXJhbSB7U30gc3JjXG4gKiBAcmV0dXJucyB7VCAmIFN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRmb3IgKGNvbnN0IGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiAvKiogQHR5cGUge1QgJiBTfSAqLyAodGFyKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBQcm9taXNlTGlrZTxhbnk+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gKFxuXHRcdCEhdmFsdWUgJiZcblx0XHQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpICYmXG5cdFx0dHlwZW9mICgvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlKS50aGVuKSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuXHRlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG5cdFx0bG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm4pIHtcblx0cmV0dXJuIGZuKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gZm5zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG5cdGZucy5mb3JFYWNoKHJ1bik7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHRoaW5nXG4gKiBAcmV0dXJucyB7dGhpbmcgaXMgRnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuXHRyZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xufVxuXG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRfc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuXHRpZiAoZWxlbWVudF9zcmMgPT09IHVybCkgcmV0dXJuIHRydWU7XG5cdGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcblx0XHRzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0fVxuXHQvLyBUaGlzIGlzIGFjdHVhbGx5IGZhc3RlciB0aGFuIGRvaW5nIFVSTCguLikuaHJlZlxuXHRzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuXHRyZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3Jjc2V0ICovXG5mdW5jdGlvbiBzcGxpdF9zcmNzZXQoc3Jjc2V0KSB7XG5cdHJldHVybiBzcmNzZXQuc3BsaXQoJywnKS5tYXAoKHNyYykgPT4gc3JjLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MU291cmNlRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnR9IGVsZW1lbnRfc3Jjc2V0XG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IHNyY3NldFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnRfc3Jjc2V0LCBzcmNzZXQpIHtcblx0Y29uc3QgZWxlbWVudF91cmxzID0gc3BsaXRfc3Jjc2V0KGVsZW1lbnRfc3Jjc2V0LnNyY3NldCk7XG5cdGNvbnN0IHVybHMgPSBzcGxpdF9zcmNzZXQoc3Jjc2V0IHx8ICcnKTtcblxuXHRyZXR1cm4gKFxuXHRcdHVybHMubGVuZ3RoID09PSBlbGVtZW50X3VybHMubGVuZ3RoICYmXG5cdFx0dXJscy5ldmVyeShcblx0XHRcdChbdXJsLCB3aWR0aF0sIGkpID0+XG5cdFx0XHRcdHdpZHRoID09PSBlbGVtZW50X3VybHNbaV1bMV0gJiZcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byB0ZXN0IGJvdGggd2F5cyBiZWNhdXNlIFZpdGUgd2lsbCBjcmVhdGUgYW4gYSBmdWxsIFVSTCB3aXRoXG5cdFx0XHRcdC8vIGBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWZgIGZvciB0aGUgY2xpZW50IHdoZW4gYGJhc2U6ICcuLydgLCBhbmQgdGhlXG5cdFx0XHRcdC8vIHJlbGF0aXZlIFVSTHMgaW5zaWRlIHNyY3NldCBhcmUgbm90IGF1dG9tYXRpY2FsbHkgcmVzb2x2ZWQgdG8gYWJzb2x1dGUgVVJMcyBieVxuXHRcdFx0XHQvLyBicm93c2VycyAoaW4gY29udHJhc3QgdG8gaW1nLnNyYykuIFRoaXMgbWVhbnMgYm90aCBTU1IgYW5kIERPTSBjb2RlIGNvdWxkXG5cdFx0XHRcdC8vIGNvbnRhaW4gcmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMcy5cblx0XHRcdFx0KHNyY191cmxfZXF1YWwoZWxlbWVudF91cmxzW2ldWzBdLCB1cmwpIHx8IHNyY191cmxfZXF1YWwodXJsLCBlbGVtZW50X3VybHNbaV1bMF0pKVxuXHRcdClcblx0KTtcbn1cblxuLyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG5cdGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG5cdGlmIChzdG9yZSA9PSBudWxsKSB7XG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcblx0XHRcdGNhbGxiYWNrKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRcdHJldHVybiBub29wO1xuXHR9XG5cdGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG5cdHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBhIHN0b3JlIGJ5IHN1YnNjcmliaW5nIGFuZCBpbW1lZGlhdGVseSB1bnN1YnNjcmliaW5nLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSNnZXRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vc3RvcmUvcHVibGljLmpzJykuUmVhZGFibGU8VD59IHN0b3JlXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuXHRsZXQgdmFsdWU7XG5cdHN1YnNjcmliZShzdG9yZSwgKF8pID0+ICh2YWx1ZSA9IF8pKSgpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG5cdGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuXHRpZiAoZGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcblx0XHRyZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG5cdHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpIDogJCRzY29wZS5jdHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuXHRpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuXHRcdGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG5cdFx0aWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGxldHM7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IG1lcmdlZCA9IFtdO1xuXHRcdFx0Y29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcblx0XHRcdFx0bWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVyZ2VkO1xuXHRcdH1cblx0XHRyZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG5cdH1cblx0cmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKFxuXHRzbG90LFxuXHRzbG90X2RlZmluaXRpb24sXG5cdGN0eCxcblx0JCRzY29wZSxcblx0c2xvdF9jaGFuZ2VzLFxuXHRnZXRfc2xvdF9jb250ZXh0X2ZuXG4pIHtcblx0aWYgKHNsb3RfY2hhbmdlcykge1xuXHRcdGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuXHRcdHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zbG90KFxuXHRzbG90LFxuXHRzbG90X2RlZmluaXRpb24sXG5cdGN0eCxcblx0JCRzY29wZSxcblx0ZGlydHksXG5cdGdldF9zbG90X2NoYW5nZXNfZm4sXG5cdGdldF9zbG90X2NvbnRleHRfZm5cbikge1xuXHRjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuXHR1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdIHwgLTF9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcblx0aWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG5cdFx0Y29uc3QgZGlydHkgPSBbXTtcblx0XHRjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRkaXJ0eVtpXSA9IC0xO1xuXHRcdH1cblx0XHRyZXR1cm4gZGlydHk7XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG4vKiogQHJldHVybnMge3t9fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgayBpbiBwcm9wcykgaWYgKGtbMF0gIT09ICckJykgcmVzdWx0W2tdID0gcHJvcHNba107XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG5cdGNvbnN0IHJlc3QgPSB7fTtcblx0a2V5cyA9IG5ldyBTZXQoa2V5cyk7XG5cdGZvciAoY29uc3QgayBpbiBwcm9wcykgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpIHJlc3Rba10gPSBwcm9wc1trXTtcblx0cmV0dXJuIHJlc3Q7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcblx0XHRyZXN1bHRba2V5XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm5zIHsodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG5cdGxldCByYW4gPSBmYWxzZTtcblx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0aWYgKHJhbikgcmV0dXJuO1xuXHRcdHJhbiA9IHRydWU7XG5cdFx0Zm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG5cdHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG4vKiogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7W251bWJlciwgc3RyaW5nXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0X2Nzc191bml0KHZhbHVlKSB7XG5cdGNvbnN0IHNwbGl0ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5tYXRjaCgvXlxccyooLT9bXFxkLl0rKShbXlxcc10qKVxccyokLyk7XG5cdHJldHVybiBzcGxpdCA/IFtwYXJzZUZsb2F0KHNwbGl0WzFdKSwgc3BsaXRbMl0gfHwgJ3B4J10gOiBbLyoqIEB0eXBlIHtudW1iZXJ9ICovICh2YWx1ZSksICdweCddO1xufVxuXG5leHBvcnQgY29uc3QgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMgPSBbJycsIHRydWUsIDEsICd0cnVlJywgJ2NvbnRlbnRlZGl0YWJsZSddO1xuIiwiaW1wb3J0IHsgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMsIGhhc19wcm9wIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlclNpbmdsZXRvbi5qcyc7XG5cbi8vIFRyYWNrIHdoaWNoIG5vZGVzIGFyZSBjbGFpbWVkIGR1cmluZyBoeWRyYXRpb24uIFVuY2xhaW1lZCBub2RlcyBjYW4gdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIERPTVxuLy8gYXQgdGhlIGVuZCBvZiBoeWRyYXRpb24gd2l0aG91dCB0b3VjaGluZyB0aGUgcmVtYWluaW5nIG5vZGVzLlxubGV0IGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRfaHlkcmF0aW5nKCkge1xuXHRpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcblx0aXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGxvd1xuICogQHBhcmFtIHtudW1iZXJ9IGhpZ2hcbiAqIEBwYXJhbSB7KGluZGV4OiBudW1iZXIpID0+IG51bWJlcn0ga2V5XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuXHQvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG5cdHdoaWxlIChsb3cgPCBoaWdoKSB7XG5cdFx0Y29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcblx0XHRpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcblx0XHRcdGxvdyA9IG1pZCArIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZ2ggPSBtaWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBsb3c7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlRXh9IHRhcmdldFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGluaXRfaHlkcmF0ZSh0YXJnZXQpIHtcblx0aWYgKHRhcmdldC5oeWRyYXRlX2luaXQpIHJldHVybjtcblx0dGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG5cdC8vIFdlIGtub3cgdGhhdCBhbGwgY2hpbGRyZW4gaGF2ZSBjbGFpbV9vcmRlciB2YWx1ZXMgc2luY2UgdGhlIHVuY2xhaW1lZCBoYXZlIGJlZW4gZGV0YWNoZWQgaWYgdGFyZ2V0IGlzIG5vdCA8aGVhZD5cblxuXHRsZXQgY2hpbGRyZW4gPSAvKiogQHR5cGUge0FycmF5TGlrZTxOb2RlRXgyPn0gKi8gKHRhcmdldC5jaGlsZE5vZGVzKTtcblx0Ly8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcblx0aWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG5cdFx0Y29uc3QgbXlfY2hpbGRyZW4gPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG5cdFx0XHRpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG15X2NoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoaWxkcmVuID0gbXlfY2hpbGRyZW47XG5cdH1cblx0Lypcblx0ICogUmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseS5cblx0ICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuXHQgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuXHQgKiBzdWJzZXF1ZW5jZSBvZiBub2RlcyB0aGF0IGFyZSBjbGFpbWVkIGluIG9yZGVyIGNhbiBiZSBmb3VuZCBieVxuXHQgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuXHQgKlxuXHQgKiBUaGlzIGFsZ29yaXRobSBpcyBvcHRpbWFsIGluIGdlbmVyYXRpbmcgdGhlIGxlYXN0IGFtb3VudCBvZiByZW9yZGVyIG9wZXJhdGlvbnNcblx0ICogcG9zc2libGUuXG5cdCAqXG5cdCAqIFByb29mOlxuXHQgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcblx0ICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG5cdCAqIG1lYW5pbmcgdGhhdCB0aGV5IG11c3QgYmUgYWxyZWFkeSBvcmRlcmVkIGFtb25nIGVhY2ggb3RoZXIuIFRodXMsIHRoZSBtYXhpbWFsXG5cdCAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG5cdCAqL1xuXHQvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuXHQvLyBtOiBzdWJzZXF1ZW5jZSBsZW5ndGggaiA9PiBpbmRleCBrIG9mIHNtYWxsZXN0IHZhbHVlIHRoYXQgZW5kcyBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGxlbmd0aCBqXG5cdGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcblx0Ly8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcblx0Y29uc3QgcCA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCk7XG5cdG1bMF0gPSAtMTtcblx0bGV0IGxvbmdlc3QgPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuXHRcdC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG5cdFx0Ly8gdXBwZXJfYm91bmQgcmV0dXJucyBmaXJzdCBncmVhdGVyIHZhbHVlLCBzbyB3ZSBzdWJ0cmFjdCBvbmVcblx0XHQvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuXHRcdGNvbnN0IHNlcV9sZW4gPVxuXHRcdFx0KGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnRcblx0XHRcdFx0PyBsb25nZXN0ICsgMVxuXHRcdFx0XHQ6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIChpZHgpID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG5cdFx0cFtpXSA9IG1bc2VxX2xlbl0gKyAxO1xuXHRcdGNvbnN0IG5ld19sZW4gPSBzZXFfbGVuICsgMTtcblx0XHQvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG5cdFx0bVtuZXdfbGVuXSA9IGk7XG5cdFx0bG9uZ2VzdCA9IE1hdGgubWF4KG5ld19sZW4sIGxvbmdlc3QpO1xuXHR9XG5cdC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcblxuXHQvKipcblx0ICogQHR5cGUge05vZGVFeDJbXX1cblx0ICovXG5cdGNvbnN0IGxpcyA9IFtdO1xuXHQvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZUV4MltdfVxuXHQgKi9cblx0Y29uc3QgdG9fbW92ZSA9IFtdO1xuXHRsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuXHRcdGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcblx0XHRmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuXHRcdFx0dG9fbW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcblx0XHR9XG5cdFx0bGFzdC0tO1xuXHR9XG5cdGZvciAoOyBsYXN0ID49IDA7IGxhc3QtLSkge1xuXHRcdHRvX21vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG5cdH1cblx0bGlzLnJldmVyc2UoKTtcblx0Ly8gV2Ugc29ydCB0aGUgbm9kZXMgYmVpbmcgbW92ZWQgdG8gZ3VhcmFudGVlIHRoYXQgdGhlaXIgaW5zZXJ0aW9uIG9yZGVyIG1hdGNoZXMgdGhlIGNsYWltIG9yZGVyXG5cdHRvX21vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuXHQvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuXHRmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b19tb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0d2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvX21vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG5cdFx0XHRqKys7XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hvciA9IGogPCBsaXMubGVuZ3RoID8gbGlzW2pdIDogbnVsbDtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvX21vdmVbaV0sIGFuY2hvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVfc2hlZXRfaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcblx0Y29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuXHRpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG5cdFx0c3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG5cdFx0YXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdCB8IERvY3VtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcblx0aWYgKCFub2RlKSByZXR1cm4gZG9jdW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuXHRpZiAocm9vdCAmJiAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0KSB7XG5cdFx0cmV0dXJuIC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpO1xuXHR9XG5cdHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Q1NTU3R5bGVTaGVldH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcblx0Y29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG5cdC8vIEZvciB0cmFuc2l0aW9ucyB0byB3b3JrIHdpdGhvdXQgJ3N0eWxlLXNyYzogdW5zYWZlLWlubGluZScgQ29udGVudCBTZWN1cml0eSBQb2xpY3ksXG5cdC8vIHRoZXNlIGVtcHR5IHRhZ3MgbmVlZCB0byBiZSBhbGxvd2VkIHdpdGggYSBoYXNoIGFzIGEgd29ya2Fyb3VuZCB1bnRpbCB3ZSBtb3ZlIHRvIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuXG5cdC8vIFVzaW5nIHRoZSBoYXNoIGZvciB0aGUgZW1wdHkgc3RyaW5nIChmb3IgYW4gZW1wdHkgdGFnKSB3b3JrcyBpbiBhbGwgYnJvd3NlcnMgZXhjZXB0IFNhZmFyaS5cblx0Ly8gU28gYXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgd29ya2Fyb3VuZCwgd2hlbiB3ZSBhcHBlbmQgZW1wdHkgc3R5bGUgdGFncyB3ZSBzZXQgdGhlaXIgY29udGVudCB0byAvKiBlbXB0eSAqLy5cblx0Ly8gVGhlIGhhc2ggJ3NoYTI1Ni05T2xOTzBETkVlYVZ6SEw0Ulp3Q0xzQkhBOFdCUTh0b0JwLzRGNVhWMm5jPScgd2lsbCB0aGVuIHdvcmsgZXZlbiBpbiBTYWZhcmkuXG5cdHN0eWxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnLyogZW1wdHkgKi8nO1xuXHRhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NoYWRvd1Jvb3QgfCBEb2N1bWVudH0gbm9kZVxuICogQHBhcmFtIHtIVE1MU3R5bGVFbGVtZW50fSBzdHlsZVxuICogQHJldHVybnMge0NTU1N0eWxlU2hlZXR9XG4gKi9cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG5cdGFwcGVuZCgvKiogQHR5cGUge0RvY3VtZW50fSAqLyAobm9kZSkuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG5cdHJldHVybiBzdHlsZS5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVFeH0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGVFeH0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuXHRpZiAoaXNfaHlkcmF0aW5nKSB7XG5cdFx0aW5pdF9oeWRyYXRlKHRhcmdldCk7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0KHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldClcblx0XHQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXHRcdC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG5cdFx0d2hpbGUgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLmNsYWltX29yZGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdGlmIChub2RlICE9PSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCkge1xuXHRcdFx0Ly8gV2Ugb25seSBpbnNlcnQgaWYgdGhlIG9yZGVyaW5nIG9mIHRoaXMgbm9kZSBzaG91bGQgYmUgbW9kaWZpZWQgb3IgdGhlIHBhcmVudCBub2RlIGlzIG5vdCB0YXJnZXRcblx0XHRcdGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQgfHwgbm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gbm9kZS5uZXh0U2libGluZztcblx0XHR9XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZUV4fSBub2RlXG4gKiBAcGFyYW0ge05vZGVFeH0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuXHRpZiAoaXNfaHlkcmF0aW5nICYmICFhbmNob3IpIHtcblx0XHRhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuXHRpZiAobm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gS1xuICogQHBhcmFtIHtLfSBuYW1lXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBLXG4gKiBAcGFyYW0ge0t9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpc1xuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtLXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIHtrZXlvZiBUfSBLXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtLW119IGV4Y2x1ZGVcbiAqIEByZXR1cm5zIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcblx0Y29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fSAqLyAoe30pO1xuXHRmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG5cdFx0aWYgKFxuXHRcdFx0aGFzX3Byb3Aob2JqLCBrKSAmJlxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0ZXhjbHVkZS5pbmRleE9mKGspID09PSAtMVxuXHRcdCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0dGFyZ2V0W2tdID0gb2JqW2tdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXB9IEtcbiAqIEBwYXJhbSB7S30gbmFtZVxuICogQHJldHVybnMge1NWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZSgpIHtcblx0cmV0dXJuIHRleHQoJyAnKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpIHtcblx0cmV0dXJuIHRleHQoJycpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJucyB7Q29tbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQoY29udGVudCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuXHRyZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gdm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxmKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcykgZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRpZiAoZXZlbnQuaXNUcnVzdGVkKSBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0ZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuLyoqXG4gKiBMaXN0IG9mIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYWx3YXlzIGJlIHNldCB0aHJvdWdoIHRoZSBhdHRyIG1ldGhvZCxcbiAqIGJlY2F1c2UgdXBkYXRpbmcgdGhlbSB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgZG9lc24ndCB3b3JrIHJlbGlhYmx5LlxuICogSW4gdGhlIGV4YW1wbGUgb2YgYHdpZHRoYC9gaGVpZ2h0YCwgdGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgc2V0dGVyIG9ubHlcbiAqIGFjY2VwdHMgbnVtZXJpYyB2YWx1ZXMsIGJ1dCB0aGUgYXR0cmlidXRlIGNhbiBhbHNvIGJlIHNldCB0byBhIHN0cmluZyBsaWtlIGA1MCVgLlxuICogSWYgdGhpcyBsaXN0IGJlY29tZXMgdG9vIGJpZywgcmV0aGluayB0aGlzIGFwcHJvYWNoLlxuICovXG5jb25zdCBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZSA9IFsnd2lkdGgnLCAnaGVpZ2h0J107XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3sgW3g6IHN0cmluZ106IHN0cmluZyB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcblx0XHRcdC8qKiBAdHlwZSB7YW55fSAqLyAobm9kZSkudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0gJiZcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0uc2V0ICYmXG5cdFx0XHRhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZS5pbmRleE9mKGtleSkgPT09IC0xXG5cdFx0KSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHt7IFt4OiBzdHJpbmddOiBzdHJpbmcgfX0gYXR0cmlidXRlc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBkYXRhX21hcFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAobm9kZSwgZGF0YV9tYXApIHtcblx0T2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIGtleSwgZGF0YV9tYXBba2V5XSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG5cdGNvbnN0IGxvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpOyAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBiZWhhdmlvciB3ZSBkbyBsb3dlcmNhc2UgZmlyc3Rcblx0aWYgKGxvd2VyIGluIG5vZGUpIHtcblx0XHRub2RlW2xvd2VyXSA9IHR5cGVvZiBub2RlW2xvd2VyXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcblx0fSBlbHNlIGlmIChwcm9wIGluIG5vZGUpIHtcblx0XHRub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0YXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZHluYW1pY19lbGVtZW50X2RhdGEodGFnKSB7XG5cdHJldHVybiAvLS8udGVzdCh0YWcpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc3ZlbHRlX2RhdGFzZXQobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5kYXRhc2V0LnN2ZWx0ZUg7XG59XG5cbi8qKlxuICogQHJldHVybnMge3Vua25vd25bXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuXHRjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0aWYgKCFjaGVja2VkKSB7XG5cdFx0dmFsdWUuZGVsZXRlKF9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZ3JvdXBcbiAqIEByZXR1cm5zIHt7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXHRyZXR1cm4ge1xuXHRcdC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcblx0XHRcdF9pbnB1dHMgPSBpbnB1dHM7XG5cdFx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBncm91cC5wdXNoKGlucHV0KSk7XG5cdFx0fSxcblx0XHQvKiByZW1vdmUgKi8gcigpIHtcblx0XHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGdyb3VwLnNwbGljZShncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzXG4gKiBAcmV0dXJucyB7eyB1KG5ld19pbmRleGVzOiBudW1iZXJbXSk6IHZvaWQ7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByOiAoKSA9PiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMoZ3JvdXAsIGluZGV4ZXMpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXG5cdGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG5cdFx0fVxuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gcHVzaCgpIHtcblx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBfZ3JvdXAucHVzaChpbnB1dCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0X2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdC8qIHVwZGF0ZSAqLyB1KG5ld19pbmRleGVzKSB7XG5cdFx0XHRpbmRleGVzID0gbmV3X2luZGV4ZXM7XG5cdFx0XHRjb25zdCBuZXdfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cdFx0XHRpZiAobmV3X2dyb3VwICE9PSBfZ3JvdXApIHtcblx0XHRcdFx0cmVtb3ZlKCk7XG5cdFx0XHRcdF9ncm91cCA9IG5ld19ncm91cDtcblx0XHRcdFx0cHVzaCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuXHRcdFx0X2lucHV0cyA9IGlucHV0cztcblx0XHRcdHB1c2goKTtcblx0XHR9LFxuXHRcdC8qIHJlbW92ZSAqLyByOiByZW1vdmVcblx0fTtcbn1cblxuLyoqIEByZXR1cm5zIHtudW1iZXJ9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuXHRjb25zdCBhcnJheSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0NoaWxkTm9kZVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG5cdGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge0NoaWxkTm9kZUV4fSBSXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHsobm9kZTogQ2hpbGROb2RlRXgpID0+IG5vZGUgaXMgUn0gcHJlZGljYXRlXG4gKiBAcGFyYW0geyhub2RlOiBDaGlsZE5vZGVFeCkgPT4gQ2hpbGROb2RlRXggfCB1bmRlZmluZWR9IHByb2Nlc3Nfbm9kZVxuICogQHBhcmFtIHsoKSA9PiBSfSBjcmVhdGVfbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBkb250X3VwZGF0ZV9sYXN0X2luZGV4XG4gKiBAcmV0dXJucyB7Un1cbiAqL1xuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzX25vZGUsIGNyZWF0ZV9ub2RlLCBkb250X3VwZGF0ZV9sYXN0X2luZGV4ID0gZmFsc2UpIHtcblx0Ly8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Vcblx0aW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcblx0Y29uc3QgcmVzdWx0X25vZGUgPSAoKCkgPT4ge1xuXHRcdC8vIFdlIGZpcnN0IHRyeSB0byBmaW5kIGFuIGVsZW1lbnQgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZVxuXHRcdGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdFx0aWYgKHByZWRpY2F0ZShub2RlKSkge1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3Nfbm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRfdXBkYXRlX2xhc3RfaW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIHdlIHRyeSB0byBmaW5kIG9uZSBiZWZvcmVcblx0XHQvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcblx0XHRmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmIChwcmVkaWNhdGUobm9kZSkpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzX25vZGUobm9kZSk7XG5cdFx0XHRcdGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bm9kZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFkb250X3VwZGF0ZV9sYXN0X2luZGV4KSB7XG5cdFx0XHRcdFx0bm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Ly8gU2luY2Ugd2Ugc3BsaWNlZCBiZWZvcmUgdGhlIGxhc3RfaW5kZXgsIHdlIGRlY3JlYXNlIGl0XG5cdFx0XHRcdFx0bm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcblx0XHRyZXR1cm4gY3JlYXRlX25vZGUoKTtcblx0fSkoKTtcblx0cmVzdWx0X25vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG5cdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHRyZXR1cm4gcmVzdWx0X25vZGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0geyhuYW1lOiBzdHJpbmcpID0+IEVsZW1lbnQgfCBTVkdFbGVtZW50fSBjcmVhdGVfZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnQgfCBTVkdFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG5cdHJldHVybiBjbGFpbV9ub2RlKFxuXHRcdG5vZGVzLFxuXHRcdC8qKiBAcmV0dXJucyB7bm9kZSBpcyBFbGVtZW50IHwgU1ZHRWxlbWVudH0gKi9cblx0XHQobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSxcblx0XHQvKiogQHBhcmFtIHtFbGVtZW50fSBub2RlICovXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IHJlbW92ZSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0Y29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG5cdFx0XHRcdFx0cmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmUuZm9yRWFjaCgodikgPT4gbm9kZS5yZW1vdmVBdHRyaWJ1dGUodikpO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9LFxuXHRcdCgpID0+IGNyZWF0ZV9lbGVtZW50KG5hbWUpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfX0gYXR0cmlidXRlc1xuICogQHJldHVybnMge0VsZW1lbnQgfCBTVkdFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0cmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnX2VsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7VGV4dH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIFRleHR9ICovXG5cdFx0KG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsXG5cdFx0LyoqIEBwYXJhbSB7VGV4dH0gbm9kZSAqL1xuXHRcdChub2RlKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhX3N0ciA9ICcnICsgZGF0YTtcblx0XHRcdGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhX3N0cikpIHtcblx0XHRcdFx0aWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFfc3RyLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhX3N0ci5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub2RlLmRhdGEgPSBkYXRhX3N0cjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCgpID0+IHRleHQoZGF0YSksXG5cdFx0dHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcblx0KTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuXHRyZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHJldHVybnMge0NvbW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9jb21tZW50KG5vZGVzLCBkYXRhKSB7XG5cdHJldHVybiBjbGFpbV9ub2RlKFxuXHRcdG5vZGVzLFxuXHRcdC8qKiBAcmV0dXJucyB7bm9kZSBpcyBDb21tZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4LFxuXHRcdC8qKiBAcGFyYW0ge0NvbW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0bm9kZS5kYXRhID0gJycgKyBkYXRhO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9LFxuXHRcdCgpID0+IGNvbW1lbnQoZGF0YSksXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRfY29tbWVudF9pZHgobm9kZXMsIHRleHQsIHN0YXJ0KSB7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3N2Z1xuICogQHJldHVybnMge0h0bWxUYWdIeWRyYXRpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9odG1sX3RhZyhub2RlcywgaXNfc3ZnKSB7XG5cdC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuXHRjb25zdCBzdGFydF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG5cdGNvbnN0IGVuZF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGlmIChzdGFydF9pbmRleCA9PT0gLTEgfHwgZW5kX2luZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcpO1xuXHR9XG5cblx0aW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcblx0Y29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG5cdGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcblx0aWYgKGNsYWltZWRfbm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2Zyk7XG5cdH1cblx0Zm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcblx0XHRuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuXHRcdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHR9XG5cdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcsIGNsYWltZWRfbm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcblx0ZGF0YSA9ICcnICsgZGF0YTtcblx0aWYgKHRleHQuZGF0YSA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKSB7XG5cdGRhdGEgPSAnJyArIGRhdGE7XG5cdGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cl92YWx1ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuXHRpZiAofmNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLmluZGV4T2YoYXR0cl92YWx1ZSkpIHtcblx0XHRzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0X2RhdGEodGV4dCwgZGF0YSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG5cdGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIGRvIG5vdGhpbmdcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG5cdH0gZWxzZSB7XG5cdFx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSwgbW91bnRpbmcpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmICghbW91bnRpbmcgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuXHRjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcblx0cmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcblx0cmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCAob3B0aW9uKSA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcblxuLyoqXG4gKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbmxldCBjcm9zc29yaWdpbjtcblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcblx0aWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcblx0XHRjcm9zc29yaWdpbiA9IGZhbHNlO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuXHRcdFx0XHR2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNyb3Nzb3JpZ2luID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcblx0Y29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0bm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblx0Y29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoXG5cdFx0J3N0eWxlJyxcblx0XHQnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcblx0XHRcdCdvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnXG5cdCk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0aWZyYW1lLnRhYkluZGV4ID0gLTE7XG5cdGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcblxuXHQvKipcblx0ICogQHR5cGUgeygpID0+IHZvaWR9XG5cdCAqL1xuXHRsZXQgdW5zdWJzY3JpYmU7XG5cdGlmIChjcm9zc29yaWdpbikge1xuXHRcdGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuXHRcdHVuc3Vic2NyaWJlID0gbGlzdGVuKFxuXHRcdFx0d2luZG93LFxuXHRcdFx0J21lc3NhZ2UnLFxuXHRcdFx0LyoqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldmVudCAqLyAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpIGZuKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcblx0XHRpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG5cdFx0XHQvLyBtYWtlIHN1cmUgYW4gaW5pdGlhbCByZXNpemUgZXZlbnQgaXMgZmlyZWQgX2FmdGVyXyB0aGUgaWZyYW1lIGlzIGxvYWRlZCAod2hpY2ggaXMgYXN5bmNocm9ub3VzKVxuXHRcdFx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzQyMzNcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0fVxuXHRhcHBlbmQobm9kZSwgaWZyYW1lKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoY3Jvc3NvcmlnaW4pIHtcblx0XHRcdHVuc3Vic2NyaWJlKCk7XG5cdFx0fSBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdFx0ZGV0YWNoKGlmcmFtZSk7XG5cdH07XG59XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2NvbnRlbnRfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7XG5cdGJveDogJ2NvbnRlbnQtYm94J1xufSk7XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHtcblx0Ym94OiAnYm9yZGVyLWJveCdcbn0pO1xuZXhwb3J0IGNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKFxuXHR7IGJveDogJ2RldmljZS1waXhlbC1jb250ZW50LWJveCcgfVxuKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIH07XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuXHQvLyBUaGUgYCEhYCBpcyByZXF1aXJlZCBiZWNhdXNlIGFuIGB1bmRlZmluZWRgIGZsYWcgbWVhbnMgZmxpcHBpbmcgdGhlIGN1cnJlbnQgc3RhdGUuXG5cdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCAhIXRvZ2dsZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1R9IFtkZXRhaWxdXG4gKiBAcGFyYW0ge3sgYnViYmxlcz86IGJvb2xlYW4sIGNhbmNlbGFibGU/OiBib29sZWFuIH19IFtvcHRpb25zXVxuICogQHJldHVybnMge0N1c3RvbUV2ZW50PFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcblx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbCwgYnViYmxlcywgY2FuY2VsYWJsZSB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHJldHVybnMge0NoaWxkTm9kZUFycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVJZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGxldCBzdGFydGVkID0gMDtcblx0Zm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLykge1xuXHRcdFx0Y29uc3QgY29tbWVudCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuXHRcdFx0aWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9FTkRgKSB7XG5cdFx0XHRcdHN0YXJ0ZWQgLT0gMTtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcblx0XHRcdFx0c3RhcnRlZCArPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHN0YXJ0ZWQgPiAwKSB7XG5cdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIEh0bWxUYWcge1xuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQGRlZmF1bHQgZmFsc2Vcblx0ICovXG5cdGlzX3N2ZyA9IGZhbHNlO1xuXHQvKiogcGFyZW50IGZvciBjcmVhdGluZyBub2RlICovXG5cdGUgPSB1bmRlZmluZWQ7XG5cdC8qKiBodG1sIHRhZyBub2RlcyAqL1xuXHRuID0gdW5kZWZpbmVkO1xuXHQvKiogdGFyZ2V0ICovXG5cdHQgPSB1bmRlZmluZWQ7XG5cdC8qKiBhbmNob3IgKi9cblx0YSA9IHVuZGVmaW5lZDtcblx0Y29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UpIHtcblx0XHR0aGlzLmlzX3N2ZyA9IGlzX3N2Zztcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0YyhodG1sKSB7XG5cdFx0dGhpcy5oKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSB0YXJnZXRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IGFuY2hvclxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG5cdFx0aWYgKCF0aGlzLmUpIHtcblx0XHRcdGlmICh0aGlzLmlzX3N2Zylcblx0XHRcdFx0dGhpcy5lID0gc3ZnX2VsZW1lbnQoLyoqIEB0eXBlIHtrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcH0gKi8gKHRhcmdldC5ub2RlTmFtZSkpO1xuXHRcdFx0LyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi8gZWxzZVxuXHRcdFx0XHR0aGlzLmUgPSBlbGVtZW50KFxuXHRcdFx0XHRcdC8qKiBAdHlwZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSAqLyAoXG5cdFx0XHRcdFx0XHR0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdHRoaXMudCA9XG5cdFx0XHRcdHRhcmdldC50YWdOYW1lICE9PSAnVEVNUExBVEUnXG5cdFx0XHRcdFx0PyB0YXJnZXRcblx0XHRcdFx0XHQ6IC8qKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gKi8gKHRhcmdldCkuY29udGVudDtcblx0XHRcdHRoaXMuYyhodG1sKTtcblx0XHR9XG5cdFx0dGhpcy5pKGFuY2hvcik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRoKGh0bWwpIHtcblx0XHR0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR0aGlzLm4gPSBBcnJheS5mcm9tKFxuXHRcdFx0dGhpcy5lLm5vZGVOYW1lID09PSAnVEVNUExBVEUnID8gdGhpcy5lLmNvbnRlbnQuY2hpbGROb2RlcyA6IHRoaXMuZS5jaGlsZE5vZGVzXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0aShhbmNob3IpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHAoaHRtbCkge1xuXHRcdHRoaXMuZCgpO1xuXHRcdHRoaXMuaChodG1sKTtcblx0XHR0aGlzLmkodGhpcy5hKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZCgpIHtcblx0XHR0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG5cdC8qKiBAdHlwZSB7RWxlbWVudFtdfSBoeWRyYXRpb24gY2xhaW1lZCBub2RlcyAqL1xuXHRsID0gdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKGlzX3N2ZyA9IGZhbHNlLCBjbGFpbWVkX25vZGVzKSB7XG5cdFx0c3VwZXIoaXNfc3ZnKTtcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHRcdHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjKGh0bWwpIHtcblx0XHRpZiAodGhpcy5sKSB7XG5cdFx0XHR0aGlzLm4gPSB0aGlzLmw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1cGVyLmMoaHRtbCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRpKGFuY2hvcikge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcblx0XHRyZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGVzY2FwZWQgPSB7XG5cdCdcIic6ICcmcXVvdDsnLFxuXHQnJic6ICcmYW1wOycsXG5cdCc8JzogJyZsdDsnXG59O1xuXG5jb25zdCByZWdleF9hdHRyaWJ1dGVfY2hhcmFjdGVyc190b19lc2NhcGUgPSAvW1wiJjxdL2c7XG5cbi8qKlxuICogTm90ZSB0aGF0IHRoZSBhdHRyaWJ1dGUgaXRzZWxmIHNob3VsZCBiZSBzdXJyb3VuZGVkIGluIGRvdWJsZSBxdW90ZXNcbiAqIEBwYXJhbSB7YW55fSBhdHRyaWJ1dGVcbiAqL1xuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcblx0cmV0dXJuIFN0cmluZyhhdHRyaWJ1dGUpLnJlcGxhY2UocmVnZXhfYXR0cmlidXRlX2NoYXJhY3RlcnNfdG9fZXNjYXBlLCAobWF0Y2gpID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeV9zcHJlYWQoYXR0cmlidXRlcykge1xuXHRsZXQgc3RyID0gJyAnO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSAhPSBudWxsKSB7XG5cdFx0XHRzdHIgKz0gYCR7a2V5fT1cIiR7ZXNjYXBlX2F0dHJpYnV0ZShhdHRyaWJ1dGVzW2tleV0pfVwiIGA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKFxuXHRcdC8qKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgKi8gKG5vZGUpID0+IHtcblx0XHRcdHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG5cdFx0fVxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuXHRyZXR1cm4gbmV3IGNvbXBvbmVudChwcm9wcyk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge05vZGUgJiB7XG4gKiBcdGNsYWltX29yZGVyPzogbnVtYmVyO1xuICogXHRoeWRyYXRlX2luaXQ/OiB0cnVlO1xuICogXHRhY3R1YWxfZW5kX2NoaWxkPzogTm9kZUV4O1xuICogXHRjaGlsZE5vZGVzOiBOb2RlTGlzdE9mPE5vZGVFeD47XG4gKiB9fSBOb2RlRXhcbiAqL1xuXG4vKiogQHR5cGVkZWYge0NoaWxkTm9kZSAmIE5vZGVFeH0gQ2hpbGROb2RlRXggKi9cblxuLyoqIEB0eXBlZGVmIHtOb2RlRXggJiB7IGNsYWltX29yZGVyOiBudW1iZXIgfX0gTm9kZUV4MiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtDaGlsZE5vZGVFeFtdICYge1xuICogXHRjbGFpbV9pbmZvPzoge1xuICogXHRcdGxhc3RfaW5kZXg6IG51bWJlcjtcbiAqIFx0XHR0b3RhbF9jbGFpbWVkOiBudW1iZXI7XG4gKiBcdH07XG4gKiB9fSBDaGlsZE5vZGVBcnJheVxuICovXG4iLCJpbXBvcnQgeyBjdXN0b21fZXZlbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBsZXQgY3VycmVudF9jb21wb25lbnQ7XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuXHRpZiAoIWN1cnJlbnRfY29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuXHRyZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgYWZ0ZXIgYW55IHN0YXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGJlZm9yZSB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjYmVmb3JldXBkYXRlXG4gKiBAcGFyYW0geygpID0+IGFueX0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5cbi8qKlxuICogVGhlIGBvbk1vdW50YCBmdW5jdGlvbiBzY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gYXMgc29vbiBhcyB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTS5cbiAqIEl0IG11c3QgYmUgY2FsbGVkIGR1cmluZyB0aGUgY29tcG9uZW50J3MgaW5pdGlhbGlzYXRpb24gKGJ1dCBkb2Vzbid0IG5lZWQgdG8gbGl2ZSAqaW5zaWRlKiB0aGUgY29tcG9uZW50O1xuICogaXQgY2FuIGJlIGNhbGxlZCBmcm9tIGFuIGV4dGVybmFsIG1vZHVsZSkuXG4gKlxuICogSWYgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCBfc3luY2hyb25vdXNseV8gZnJvbSBgb25Nb3VudGAsIGl0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKlxuICogYG9uTW91bnRgIGRvZXMgbm90IHJ1biBpbnNpZGUgYSBbc2VydmVyLXNpZGUgY29tcG9uZW50XShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zZXJ2ZXItc2lkZS1jb21wb25lbnQtYXBpKS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjb25tb3VudFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7KCkgPT4gaW1wb3J0KCcuL3ByaXZhdGUuanMnKS5Ob3RGdW5jdGlvbjxUPiB8IFByb21pc2U8aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5Ob3RGdW5jdGlvbjxUPj4gfCAoKCkgPT4gYW55KX0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VudChmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYWZ0ZXIgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2FmdGVydXBkYXRlXG4gKiBAcGFyYW0geygpID0+IGFueX0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKlxuICogT3V0IG9mIGBvbk1vdW50YCwgYGJlZm9yZVVwZGF0ZWAsIGBhZnRlclVwZGF0ZWAgYW5kIGBvbkRlc3Ryb3lgLCB0aGlzIGlzIHRoZVxuICogb25seSBvbmUgdGhhdCBydW5zIGluc2lkZSBhIHNlcnZlci1zaWRlIGNvbXBvbmVudC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjb25kZXN0cm95XG4gKiBAcGFyYW0geygpID0+IGFueX0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBkaXNwYXRjaGVyIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggW2NvbXBvbmVudCBldmVudHNdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3RlbXBsYXRlLXN5bnRheC1jb21wb25lbnQtZGlyZWN0aXZlcy1vbi1ldmVudG5hbWUpLlxuICogRXZlbnQgZGlzcGF0Y2hlcnMgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIHR3byBhcmd1bWVudHM6IGBuYW1lYCBhbmQgYGRldGFpbGAuXG4gKlxuICogQ29tcG9uZW50IGV2ZW50cyBjcmVhdGVkIHdpdGggYGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcmAgY3JlYXRlIGFcbiAqIFtDdXN0b21FdmVudF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50KS5cbiAqIFRoZXNlIGV2ZW50cyBkbyBub3QgW2J1YmJsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9KYXZhU2NyaXB0L0J1aWxkaW5nX2Jsb2Nrcy9FdmVudHMjRXZlbnRfYnViYmxpbmdfYW5kX2NhcHR1cmUpLlxuICogVGhlIGBkZXRhaWxgIGFyZ3VtZW50IGNvcnJlc3BvbmRzIHRvIHRoZSBbQ3VzdG9tRXZlbnQuZGV0YWlsXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQvZGV0YWlsKVxuICogcHJvcGVydHkgYW5kIGNhbiBjb250YWluIGFueSB0eXBlIG9mIGRhdGEuXG4gKlxuICogVGhlIGV2ZW50IGRpc3BhdGNoZXIgY2FuIGJlIHR5cGVkIHRvIG5hcnJvdyB0aGUgYWxsb3dlZCBldmVudCBuYW1lcyBhbmQgdGhlIHR5cGUgb2YgdGhlIGBkZXRhaWxgIGFyZ3VtZW50OlxuICogYGBgdHNcbiAqIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyPHtcbiAqICBsb2FkZWQ6IG5ldmVyOyAvLyBkb2VzIG5vdCB0YWtlIGEgZGV0YWlsIGFyZ3VtZW50XG4gKiAgY2hhbmdlOiBzdHJpbmc7IC8vIHRha2VzIGEgZGV0YWlsIGFyZ3VtZW50IG9mIHR5cGUgc3RyaW5nLCB3aGljaCBpcyByZXF1aXJlZFxuICogIG9wdGlvbmFsOiBudW1iZXIgfCBudWxsOyAvLyB0YWtlcyBhbiBvcHRpb25hbCBkZXRhaWwgYXJndW1lbnQgb2YgdHlwZSBudW1iZXJcbiAqIH0+KCk7XG4gKiBgYGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjY3JlYXRlZXZlbnRkaXNwYXRjaGVyXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtFdmVudE1hcD1hbnldXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLkV2ZW50RGlzcGF0Y2hlcjxFdmVudE1hcD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG5cdGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuXHRyZXR1cm4gKHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcblx0XHRpZiAoY2FsbGJhY2tzKSB7XG5cdFx0XHQvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG5cdFx0XHQvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG5cdFx0XHRjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHR5cGUpLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSB9KTtcblx0XHRcdGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goKGZuKSA9PiB7XG5cdFx0XHRcdGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG59XG5cbi8qKlxuICogQXNzb2NpYXRlcyBhbiBhcmJpdHJhcnkgYGNvbnRleHRgIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IGNvbXBvbmVudCBhbmQgdGhlIHNwZWNpZmllZCBga2V5YFxuICogYW5kIHJldHVybnMgdGhhdCBvYmplY3QuIFRoZSBjb250ZXh0IGlzIHRoZW4gYXZhaWxhYmxlIHRvIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnRcbiAqIChpbmNsdWRpbmcgc2xvdHRlZCBjb250ZW50KSB3aXRoIGBnZXRDb250ZXh0YC5cbiAqXG4gKiBMaWtlIGxpZmVjeWNsZSBmdW5jdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjc2V0Y29udGV4dFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEBwYXJhbSB7VH0gY29udGV4dFxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRleHQgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGBrZXlgLlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjZ2V0Y29udGV4dFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcblx0cmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSB3aG9sZSBjb250ZXh0IG1hcCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uIFVzZWZ1bCwgZm9yIGV4YW1wbGUsIGlmIHlvdVxuICogcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSBjb21wb25lbnQgYW5kIHdhbnQgdG8gcGFzcyB0aGUgZXhpc3RpbmcgY29udGV4dCB0byBpdC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjZ2V0YWxsY29udGV4dHNcbiAqIEB0ZW1wbGF0ZSB7TWFwPGFueSwgYW55Pn0gW1Q9TWFwPGFueSwgYW55Pl1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG5cdHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0O1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gYGtleWAgaGFzIGJlZW4gc2V0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2hhc2NvbnRleHRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcblx0cmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuaGFzKGtleSk7XG59XG5cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG4vKipcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBldmVudFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuXHRjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuXHRpZiAoY2FsbGJhY2tzKSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goKGZuKSA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IHJ1bl9hbGwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICcuL2xpZmVjeWNsZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5leHBvcnQgY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuZXhwb3J0IGNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5cbmxldCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5cbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuXG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xuXG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuXHRpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcblx0XHR1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcblx0XHRyZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrKCkge1xuXHRzY2hlZHVsZV91cGRhdGUoKTtcblx0cmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG5cdHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcblx0Zmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuXG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuXG5sZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaCgpIHtcblx0Ly8gRG8gbm90IHJlZW50ZXIgZmx1c2ggd2hpbGUgZGlydHkgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgYXMgdGhpcyBjYW5cblx0Ly8gcmVzdWx0IGluIGFuIGluZmluaXRlIGxvb3AuIEluc3RlYWQsIGxldCB0aGUgaW5uZXIgZmx1c2ggaGFuZGxlIGl0LlxuXHQvLyBSZWVudHJhbmN5IGlzIG9rIGFmdGVyd2FyZHMgZm9yIGJpbmRpbmdzIGV0Yy5cblx0aWYgKGZsdXNoaWR4ICE9PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuXHRkbyB7XG5cdFx0Ly8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuXHRcdC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcblx0XHRcdFx0Zmx1c2hpZHgrKztcblx0XHRcdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHRcdHVwZGF0ZShjb21wb25lbnQuJCQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIHJlc2V0IGRpcnR5IHN0YXRlIHRvIG5vdCBlbmQgdXAgaW4gYSBkZWFkbG9ja2VkIHN0YXRlIGFuZCB0aGVuIHJldGhyb3dcblx0XHRcdGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcblx0XHRcdGZsdXNoaWR4ID0gMDtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcblx0XHRkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG5cdFx0Zmx1c2hpZHggPSAwO1xuXHRcdHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG5cdFx0Ly8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG5cdFx0Ly8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuXHRcdC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuXHRcdFx0aWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG5cdFx0XHRcdC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcblx0XHRcdFx0c2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuXHR9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG5cdHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0Zmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG5cdH1cblx0dXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuXHRzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuXHRzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG5cdGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuXHRcdCQkLnVwZGF0ZSgpO1xuXHRcdHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG5cdFx0Y29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcblx0XHQkJC5kaXJ0eSA9IFstMV07XG5cdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcblx0XHQkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcblx0fVxufVxuXG4vKipcbiAqIFVzZWZ1bCBmb3IgZXhhbXBsZSB0byBleGVjdXRlIHJlbWFpbmluZyBgYWZ0ZXJVcGRhdGVgIGNhbGxiYWNrcyBiZWZvcmUgZXhlY3V0aW5nIGBkZXN0cm95YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gZm5zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoZm5zKSB7XG5cdGNvbnN0IGZpbHRlcmVkID0gW107XG5cdGNvbnN0IHRhcmdldHMgPSBbXTtcblx0cmVuZGVyX2NhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiAoZm5zLmluZGV4T2YoYykgPT09IC0xID8gZmlsdGVyZWQucHVzaChjKSA6IHRhcmdldHMucHVzaChjKSkpO1xuXHR0YXJnZXRzLmZvckVhY2goKGMpID0+IGMoKSk7XG5cdHJlbmRlcl9jYWxsYmFja3MgPSBmaWx0ZXJlZDtcbn1cbiIsImltcG9ydCB7IGlkZW50aXR5IGFzIGxpbmVhciwgaXNfZnVuY3Rpb24sIG5vb3AsIHJ1bl9hbGwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IG5vdyB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuaW1wb3J0IHsgbG9vcCB9IGZyb20gJy4vbG9vcC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfcnVsZSwgZGVsZXRlX3J1bGUgfSBmcm9tICcuL3N0eWxlX21hbmFnZXIuanMnO1xuaW1wb3J0IHsgY3VzdG9tX2V2ZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYWRkX3JlbmRlcl9jYWxsYmFjayB9IGZyb20gJy4vc2NoZWR1bGVyLmpzJztcblxuLyoqXG4gKiBAdHlwZSB7UHJvbWlzZTx2b2lkPiB8IG51bGx9XG4gKi9cbmxldCBwcm9taXNlO1xuXG4vKipcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5mdW5jdGlvbiB3YWl0KCkge1xuXHRpZiAoIXByb21pc2UpIHtcblx0XHRwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0cHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHByb21pc2UgPSBudWxsO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtJTlRSTyB8IE9VVFJPIHwgYm9vbGVhbn0gZGlyZWN0aW9uXG4gKiBAcGFyYW0geydzdGFydCcgfCAnZW5kJ30ga2luZFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuXHRub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIEB0eXBlIHtPdXRyb31cbiAqL1xubGV0IG91dHJvcztcblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG5cdG91dHJvcyA9IHtcblx0XHRyOiAwLFxuXHRcdGM6IFtdLFxuXHRcdHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG5cdGlmICghb3V0cm9zLnIpIHtcblx0XHRydW5fYWxsKG91dHJvcy5jKTtcblx0fVxuXHRvdXRyb3MgPSBvdXRyb3MucDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuRnJhZ21lbnR9IGJsb2NrXG4gKiBAcGFyYW0gezAgfCAxfSBbbG9jYWxdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG5cdGlmIChibG9jayAmJiBibG9jay5pKSB7XG5cdFx0b3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcblx0XHRibG9jay5pKGxvY2FsKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5GcmFnbWVudH0gYmxvY2tcbiAqIEBwYXJhbSB7MCB8IDF9IGxvY2FsXG4gKiBAcGFyYW0gezAgfCAxfSBbZGV0YWNoXVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuXHRpZiAoYmxvY2sgJiYgYmxvY2subykge1xuXHRcdGlmIChvdXRyb2luZy5oYXMoYmxvY2spKSByZXR1cm47XG5cdFx0b3V0cm9pbmcuYWRkKGJsb2NrKTtcblx0XHRvdXRyb3MuYy5wdXNoKCgpID0+IHtcblx0XHRcdG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0aWYgKGRldGFjaCkgYmxvY2suZCgxKTtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRibG9jay5vKGxvY2FsKTtcblx0fSBlbHNlIGlmIChjYWxsYmFjaykge1xuXHRcdGNhbGxiYWNrKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAdHlwZSB7aW1wb3J0KCcuLi90cmFuc2l0aW9uL3B1YmxpYy5qcycpLlRyYW5zaXRpb25Db25maWd9XG4gKi9cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbkZufSBmblxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge3sgc3RhcnQoKTogdm9pZDsgaW52YWxpZGF0ZSgpOiB2b2lkOyBlbmQoKTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtUcmFuc2l0aW9uT3B0aW9uc30gKi9cblx0Y29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnaW4nIH07XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuXHRsZXQgcnVubmluZyA9IGZhbHNlO1xuXHRsZXQgYW5pbWF0aW9uX25hbWU7XG5cdGxldCB0YXNrO1xuXHRsZXQgdWlkID0gMDtcblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGNsZWFudXAoKSB7XG5cdFx0aWYgKGFuaW1hdGlvbl9uYW1lKSBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGdvKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlbGF5ID0gMCxcblx0XHRcdGR1cmF0aW9uID0gMzAwLFxuXHRcdFx0ZWFzaW5nID0gbGluZWFyLFxuXHRcdFx0dGljayA9IG5vb3AsXG5cdFx0XHRjc3Ncblx0XHR9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcblx0XHRpZiAoY3NzKSBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcblx0XHR0aWNrKDAsIDEpO1xuXHRcdGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuXHRcdGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuXHRcdGlmICh0YXNrKSB0YXNrLmFib3J0KCk7XG5cdFx0cnVubmluZyA9IHRydWU7XG5cdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG5cdFx0dGFzayA9IGxvb3AoKG5vdykgPT4ge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0aWYgKG5vdyA+PSBlbmRfdGltZSkge1xuXHRcdFx0XHRcdHRpY2soMSwgMCk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuXHRcdFx0XHRcdGNsZWFudXAoKTtcblx0XHRcdFx0XHRyZXR1cm4gKHJ1bm5pbmcgPSBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG5cdFx0XHRcdFx0dGljayh0LCAxIC0gdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBydW5uaW5nO1xuXHRcdH0pO1xuXHR9XG5cdGxldCBzdGFydGVkID0gZmFsc2U7XG5cdHJldHVybiB7XG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoc3RhcnRlZCkgcmV0dXJuO1xuXHRcdFx0c3RhcnRlZCA9IHRydWU7XG5cdFx0XHRkZWxldGVfcnVsZShub2RlKTtcblx0XHRcdGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG5cdFx0XHRcdGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcblx0XHRcdFx0d2FpdCgpLnRoZW4oZ28pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z28oKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGludmFsaWRhdGUoKSB7XG5cdFx0XHRzdGFydGVkID0gZmFsc2U7XG5cdFx0fSxcblx0XHRlbmQoKSB7XG5cdFx0XHRpZiAocnVubmluZykge1xuXHRcdFx0XHRjbGVhbnVwKCk7XG5cdFx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25Gbn0gZm5cbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHt7IGVuZChyZXNldDogYW55KTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG5cdC8qKiBAdHlwZSB7VHJhbnNpdGlvbk9wdGlvbnN9ICovXG5cdGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ291dCcgfTtcblx0bGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG5cdGxldCBydW5uaW5nID0gdHJ1ZTtcblx0bGV0IGFuaW1hdGlvbl9uYW1lO1xuXHRjb25zdCBncm91cCA9IG91dHJvcztcblx0Z3JvdXAuciArPSAxO1xuXHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdGxldCBvcmlnaW5hbF9pbmVydF92YWx1ZTtcblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGdvKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlbGF5ID0gMCxcblx0XHRcdGR1cmF0aW9uID0gMzAwLFxuXHRcdFx0ZWFzaW5nID0gbGluZWFyLFxuXHRcdFx0dGljayA9IG5vb3AsXG5cdFx0XHRjc3Ncblx0XHR9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcblxuXHRcdGlmIChjc3MpIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG5cblx0XHRjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcblx0XHRjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcblx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG5cblx0XHRpZiAoJ2luZXJ0JyBpbiBub2RlKSB7XG5cdFx0XHRvcmlnaW5hbF9pbmVydF92YWx1ZSA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChub2RlKS5pbmVydDtcblx0XHRcdG5vZGUuaW5lcnQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGxvb3AoKG5vdykgPT4ge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0aWYgKG5vdyA+PSBlbmRfdGltZSkge1xuXHRcdFx0XHRcdHRpY2soMCwgMSk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcblx0XHRcdFx0XHRpZiAoIS0tZ3JvdXAucikge1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcblx0XHRcdFx0XHRcdC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuXHRcdFx0XHRcdFx0cnVuX2FsbChncm91cC5jKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuXHRcdFx0XHRcdHRpY2soMSAtIHQsIHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcnVubmluZztcblx0XHR9KTtcblx0fVxuXG5cdGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG5cdFx0d2FpdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0Y29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuXHRcdFx0Z28oKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRnbygpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRlbmQocmVzZXQpIHtcblx0XHRcdGlmIChyZXNldCAmJiAnaW5lcnQnIGluIG5vZGUpIHtcblx0XHRcdFx0bm9kZS5pbmVydCA9IG9yaWdpbmFsX2luZXJ0X3ZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG5cdFx0XHRcdGNvbmZpZy50aWNrKDEsIDApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0aWYgKGFuaW1hdGlvbl9uYW1lKSBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG5cdFx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25Gbn0gZm5cbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW50cm9cbiAqIEByZXR1cm5zIHt7IHJ1bihiOiAwIHwgMSk6IHZvaWQ7IGVuZCgpOiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuXHQvKipcblx0ICogQHR5cGUge1RyYW5zaXRpb25PcHRpb25zfSAqL1xuXHRjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdib3RoJyB9O1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcblx0bGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UHJvZ3JhbSB8IG51bGx9ICovXG5cdGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UGVuZGluZ1Byb2dyYW0gfCBudWxsfSAqL1xuXHRsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcblx0bGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcblxuXHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdGxldCBvcmlnaW5hbF9pbmVydF92YWx1ZTtcblxuXHQvKipcblx0ICogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcblx0XHRpZiAoYW5pbWF0aW9uX25hbWUpIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1BlbmRpbmdQcm9ncmFtfSBwcm9ncmFtXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuXHQgKiBAcmV0dXJucyB7UHJvZ3JhbX1cblx0ICovXG5cdGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcblx0XHRjb25zdCBkID0gLyoqIEB0eXBlIHtQcm9ncmFtWydkJ119ICovIChwcm9ncmFtLmIgLSB0KTtcblx0XHRkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YTogdCxcblx0XHRcdGI6IHByb2dyYW0uYixcblx0XHRcdGQsXG5cdFx0XHRkdXJhdGlvbixcblx0XHRcdHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuXHRcdFx0ZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG5cdFx0XHRncm91cDogcHJvZ3JhbS5ncm91cFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtJTlRSTyB8IE9VVFJPfSBiXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ28oYikge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlbGF5ID0gMCxcblx0XHRcdGR1cmF0aW9uID0gMzAwLFxuXHRcdFx0ZWFzaW5nID0gbGluZWFyLFxuXHRcdFx0dGljayA9IG5vb3AsXG5cdFx0XHRjc3Ncblx0XHR9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtQZW5kaW5nUHJvZ3JhbX0gKi9cblx0XHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdFx0c3RhcnQ6IG5vdygpICsgZGVsYXksXG5cdFx0XHRiXG5cdFx0fTtcblxuXHRcdGlmICghYikge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3Ncblx0XHRcdHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG5cdFx0XHRvdXRyb3MuciArPSAxO1xuXHRcdH1cblxuXHRcdGlmICgnaW5lcnQnIGluIG5vZGUpIHtcblx0XHRcdGlmIChiKSB7XG5cdFx0XHRcdGlmIChvcmlnaW5hbF9pbmVydF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Ly8gYWJvcnRlZC9yZXZlcnNlZCBvdXRybyDigJQgcmVzdG9yZSBwcmV2aW91cyBpbmVydCB2YWx1ZVxuXHRcdFx0XHRcdG5vZGUuaW5lcnQgPSBvcmlnaW5hbF9pbmVydF92YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3JpZ2luYWxfaW5lcnRfdmFsdWUgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAobm9kZSkuaW5lcnQ7XG5cdFx0XHRcdG5vZGUuaW5lcnQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG5cdFx0XHRwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG5cdFx0XHQvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcblx0XHRcdGlmIChjc3MpIHtcblx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYikgdGljaygwLCAxKTtcblx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuXHRcdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG5cdFx0XHRsb29wKChub3cpID0+IHtcblx0XHRcdFx0aWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcblx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuXHRcdFx0XHRcdHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuXHRcdFx0XHRcdGlmIChjc3MpIHtcblx0XHRcdFx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShcblx0XHRcdFx0XHRcdFx0bm9kZSxcblx0XHRcdFx0XHRcdFx0dCxcblx0XHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtLmIsXG5cdFx0XHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0ZWFzaW5nLFxuXHRcdFx0XHRcdFx0XHRjb25maWcuY3NzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocnVubmluZ19wcm9ncmFtKSB7XG5cdFx0XHRcdFx0aWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG5cdFx0XHRcdFx0XHR0aWNrKCh0ID0gcnVubmluZ19wcm9ncmFtLmIpLCAxIC0gdCk7XG5cdFx0XHRcdFx0XHRkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuXHRcdFx0XHRcdFx0aWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcblx0XHRcdFx0XHRcdFx0Ly8gd2UncmUgZG9uZVxuXHRcdFx0XHRcdFx0XHRpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcblx0XHRcdFx0XHRcdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcblx0XHRcdFx0XHRcdFx0XHRpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcblx0XHRcdFx0XHRcdHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0XHRcdFx0dGljayh0LCAxIC0gdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4ge1xuXHRcdHJ1bihiKSB7XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuXHRcdFx0XHR3YWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0cyA9IHsgZGlyZWN0aW9uOiBiID8gJ2luJyA6ICdvdXQnIH07XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdGNvbmZpZyA9IGNvbmZpZyhvcHRzKTtcblx0XHRcdFx0XHRnbyhiKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnbyhiKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGVuZCgpIHtcblx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0cnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcblx0XHR9XG5cdH07XG59XG5cbi8qKiBAdHlwZWRlZiB7MX0gSU5UUk8gKi9cbi8qKiBAdHlwZWRlZiB7MH0gT1VUUk8gKi9cbi8qKiBAdHlwZWRlZiB7eyBkaXJlY3Rpb246ICdpbicgfCAnb3V0JyB8ICdib3RoJyB9fSBUcmFuc2l0aW9uT3B0aW9ucyAqL1xuLyoqIEB0eXBlZGVmIHsobm9kZTogRWxlbWVudCwgcGFyYW1zOiBhbnksIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zKSA9PiBpbXBvcnQoJy4uL3RyYW5zaXRpb24vcHVibGljLmpzJykuVHJhbnNpdGlvbkNvbmZpZ30gVHJhbnNpdGlvbkZuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3V0cm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9uW119IGNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQZW5kaW5nUHJvZ3JhbVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0XG4gKiBAcHJvcGVydHkge0lOVFJPfE9VVFJPfSBiXG4gKiBAcHJvcGVydHkge091dHJvfSBbZ3JvdXBdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQcm9ncmFtXG4gKiBAcHJvcGVydHkge251bWJlcn0gYVxuICogQHByb3BlcnR5IHtJTlRST3xPVVRST30gYlxuICogQHByb3BlcnR5IHsxfC0xfSBkXG4gKiBAcHJvcGVydHkge251bWJlcn0gZHVyYXRpb25cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZFxuICogQHByb3BlcnR5IHtPdXRyb30gW2dyb3VwXVxuICovXG4iLCJpbXBvcnQgeyB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCB9IGZyb20gJy4vdHJhbnNpdGlvbnMuanMnO1xuaW1wb3J0IHsgcnVuX2FsbCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vLyBnZW5lcmFsIGVhY2ggZnVuY3Rpb25zOlxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlX2FycmF5X2xpa2UoYXJyYXlfbGlrZV9vcl9pdGVyYXRvcikge1xuXHRyZXR1cm4gYXJyYXlfbGlrZV9vcl9pdGVyYXRvcj8ubGVuZ3RoICE9PSB1bmRlZmluZWRcblx0XHQ/IGFycmF5X2xpa2Vfb3JfaXRlcmF0b3Jcblx0XHQ6IEFycmF5LmZyb20oYXJyYXlfbGlrZV9vcl9pdGVyYXRvcik7XG59XG5cbi8vIGtleWVkIGVhY2ggZnVuY3Rpb25zOlxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmQoMSk7XG5cdGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0dHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcblx0XHRsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG5cdH0pO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmYoKTtcblx0b3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5cbi8qKiBAcmV0dXJucyB7YW55W119ICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2goXG5cdG9sZF9ibG9ja3MsXG5cdGRpcnR5LFxuXHRnZXRfa2V5LFxuXHRkeW5hbWljLFxuXHRjdHgsXG5cdGxpc3QsXG5cdGxvb2t1cCxcblx0bm9kZSxcblx0ZGVzdHJveSxcblx0Y3JlYXRlX2VhY2hfYmxvY2ssXG5cdG5leHQsXG5cdGdldF9jb250ZXh0XG4pIHtcblx0bGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcblx0bGV0IG4gPSBsaXN0Lmxlbmd0aDtcblx0bGV0IGkgPSBvO1xuXHRjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXHRjb25zdCBuZXdfYmxvY2tzID0gW107XG5cdGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdXBkYXRlcyA9IFtdO1xuXHRpID0gbjtcblx0d2hpbGUgKGktLSkge1xuXHRcdGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG5cdFx0Y29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuXHRcdGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcblx0XHRpZiAoIWJsb2NrKSB7XG5cdFx0XHRibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcblx0XHRcdGJsb2NrLmMoKTtcblx0XHR9IGVsc2UgaWYgKGR5bmFtaWMpIHtcblx0XHRcdC8vIGRlZmVyIHVwZGF0ZXMgdW50aWwgYWxsIHRoZSBET00gc2h1ZmZsaW5nIGlzIGRvbmVcblx0XHRcdHVwZGF0ZXMucHVzaCgoKSA9PiBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpKTtcblx0XHR9XG5cdFx0bmV3X2xvb2t1cC5zZXQoa2V5LCAobmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKSk7XG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG5cdH1cblx0Y29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcblx0LyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcblx0XHR0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcblx0XHRibG9jay5tKG5vZGUsIG5leHQpO1xuXHRcdGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG5cdFx0bmV4dCA9IGJsb2NrLmZpcnN0O1xuXHRcdG4tLTtcblx0fVxuXHR3aGlsZSAobyAmJiBuKSB7XG5cdFx0Y29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG5cdFx0Y29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG5cdFx0Y29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG5cdFx0Y29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH0gZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG5cdFx0XHQvLyByZW1vdmUgb2xkIGJsb2NrXG5cdFx0XHRkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0XHRcdG8tLTtcblx0XHR9IGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH0gZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG5cdFx0XHRvLS07XG5cdFx0fSBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuXHRcdFx0ZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXHR9XG5cdHdoaWxlIChvLS0pIHtcblx0XHRjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuXHRcdGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cdHdoaWxlIChuKSBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuXHRydW5fYWxsKHVwZGF0ZXMpO1xuXHRyZXR1cm4gbmV3X2Jsb2Nrcztcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG5cdGNvbnN0IGtleXMgPSBuZXcgTWFwKCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG5cdFx0aWYgKGtleXMuaGFzKGtleSkpIHtcblx0XHRcdGxldCB2YWx1ZSA9ICcnO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFsdWUgPSBgd2l0aCB2YWx1ZSAnJHtTdHJpbmcoa2V5KX0nIGA7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdC8vIGNhbid0IHN0cmluZ2lmeVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRgQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoOiBLZXlzIGF0IGluZGV4ICR7a2V5cy5nZXQoXG5cdFx0XHRcdFx0a2V5XG5cdFx0XHRcdCl9IGFuZCAke2l9ICR7dmFsdWV9YXJlIGR1cGxpY2F0ZXNgXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRrZXlzLnNldChrZXksIGkpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRhZGRfcmVuZGVyX2NhbGxiYWNrLFxuXHRmbHVzaCxcblx0Zmx1c2hfcmVuZGVyX2NhbGxiYWNrcyxcblx0c2NoZWR1bGVfdXBkYXRlLFxuXHRkaXJ0eV9jb21wb25lbnRzXG59IGZyb20gJy4vc2NoZWR1bGVyLmpzJztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICcuL2xpZmVjeWNsZS5qcyc7XG5pbXBvcnQgeyBibGFua19vYmplY3QsIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgcnVuLCBydW5fYWxsLCBub29wIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRjaGlsZHJlbixcblx0ZGV0YWNoLFxuXHRzdGFydF9oeWRyYXRpbmcsXG5cdGVuZF9oeWRyYXRpbmcsXG5cdGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMsXG5cdGluc2VydCxcblx0ZWxlbWVudCxcblx0YXR0clxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uX2luIH0gZnJvbSAnLi90cmFuc2l0aW9ucy5qcyc7XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcblx0Y29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG5cdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuXHRibG9jayAmJiBibG9jay5jKCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuXHRibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuXHRjb25zdCB7IGZyYWdtZW50LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcblx0ZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG5cdC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcblx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG5cdFx0Y29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQub25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHlcblx0XHQvLyBpdCB3aWxsIHVwZGF0ZSB0aGUgYCQkLm9uX2Rlc3Ryb3lgIHJlZmVyZW5jZSB0byBgbnVsbGAuXG5cdFx0Ly8gdGhlIGRlc3RydWN0dXJlZCBvbl9kZXN0cm95IG1heSBzdGlsbCByZWZlcmVuY2UgdG8gdGhlIG9sZCBhcnJheVxuXHRcdGlmIChjb21wb25lbnQuJCQub25fZGVzdHJveSkge1xuXHRcdFx0Y29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuXHRcdFx0Ly8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuXHRcdFx0cnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG5cdFx0fVxuXHRcdGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuXHR9KTtcblx0YWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuXHRjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcblx0aWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG5cdFx0Zmx1c2hfcmVuZGVyX2NhbGxiYWNrcygkJC5hZnRlcl91cGRhdGUpO1xuXHRcdHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG5cdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuXHRcdC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cblx0XHQvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG5cdFx0JCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcblx0XHQkJC5jdHggPSBbXTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuXHRpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuXHRcdGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXHRcdHNjaGVkdWxlX3VwZGF0ZSgpO1xuXHRcdGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuXHR9XG5cdGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9IDEgPDwgaSAlIDMxO1xufVxuXG4vLyBUT0RPOiBEb2N1bWVudCB0aGUgb3RoZXIgcGFyYW1zXG4vKipcbiAqIEBwYXJhbSB7U3ZlbHRlQ29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLkNvbXBvbmVudENvbnN0cnVjdG9yT3B0aW9uc30gb3B0aW9uc1xuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3V0aWxzLmpzJylbJ25vdF9lcXVhbCddfSBub3RfZXF1YWwgVXNlZCB0byBjb21wYXJlIHByb3BzIGFuZCBzdGF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0geyh0YXJnZXQ6IEVsZW1lbnQgfCBTaGFkb3dSb290KSA9PiB2b2lkfSBbYXBwZW5kX3N0eWxlc10gRnVuY3Rpb24gdGhhdCBhcHBlbmRzIHN0eWxlcyB0byB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBpbml0aWFsaXNlZC5cbiAqIFRoaXMgd2lsbCBiZSB0aGUgYGFkZF9jc3NgIGZ1bmN0aW9uIGZyb20gdGhlIGNvbXBpbGVkIGNvbXBvbmVudC5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoXG5cdGNvbXBvbmVudCxcblx0b3B0aW9ucyxcblx0aW5zdGFuY2UsXG5cdGNyZWF0ZV9mcmFnbWVudCxcblx0bm90X2VxdWFsLFxuXHRwcm9wcyxcblx0YXBwZW5kX3N0eWxlcyA9IG51bGwsXG5cdGRpcnR5ID0gWy0xXVxuKSB7XG5cdGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcblx0c2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5UJCR9ICovXG5cdGNvbnN0ICQkID0gKGNvbXBvbmVudC4kJCA9IHtcblx0XHRmcmFnbWVudDogbnVsbCxcblx0XHRjdHg6IFtdLFxuXHRcdC8vIHN0YXRlXG5cdFx0cHJvcHMsXG5cdFx0dXBkYXRlOiBub29wLFxuXHRcdG5vdF9lcXVhbCxcblx0XHRib3VuZDogYmxhbmtfb2JqZWN0KCksXG5cdFx0Ly8gbGlmZWN5Y2xlXG5cdFx0b25fbW91bnQ6IFtdLFxuXHRcdG9uX2Rlc3Ryb3k6IFtdLFxuXHRcdG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuXHRcdGJlZm9yZV91cGRhdGU6IFtdLFxuXHRcdGFmdGVyX3VwZGF0ZTogW10sXG5cdFx0Y29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuXHRcdC8vIGV2ZXJ5dGhpbmcgZWxzZVxuXHRcdGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG5cdFx0ZGlydHksXG5cdFx0c2tpcF9ib3VuZDogZmFsc2UsXG5cdFx0cm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG5cdH0pO1xuXHRhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG5cdGxldCByZWFkeSA9IGZhbHNlO1xuXHQkJC5jdHggPSBpbnN0YW5jZVxuXHRcdD8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuXHRcdFx0XHRpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICgkJC5jdHhbaV0gPSB2YWx1ZSkpKSB7XG5cdFx0XHRcdFx0aWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKSAkJC5ib3VuZFtpXSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHJlYWR5KSBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHQgIH0pXG5cdFx0OiBbXTtcblx0JCQudXBkYXRlKCk7XG5cdHJlYWR5ID0gdHJ1ZTtcblx0cnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcblx0Ly8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG5cdCQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcblx0aWYgKG9wdGlvbnMudGFyZ2V0KSB7XG5cdFx0aWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuXHRcdFx0c3RhcnRfaHlkcmF0aW5nKCk7XG5cdFx0XHQvLyBUT0RPOiB3aGF0IGlzIHRoZSBjb3JyZWN0IHR5cGUgaGVyZT9cblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuXHRcdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG5cdFx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmludHJvKSB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG5cdFx0bW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yKTtcblx0XHRlbmRfaHlkcmF0aW5nKCk7XG5cdFx0Zmx1c2goKTtcblx0fVxuXHRzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBsZXQgU3ZlbHRlRWxlbWVudDtcblxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdFx0LyoqIFRoZSBTdmVsdGUgY29tcG9uZW50IGNvbnN0cnVjdG9yICovXG5cdFx0JCRjdG9yO1xuXHRcdC8qKiBTbG90cyAqL1xuXHRcdCQkcztcblx0XHQvKiogVGhlIFN2ZWx0ZSBjb21wb25lbnQgaW5zdGFuY2UgKi9cblx0XHQkJGM7XG5cdFx0LyoqIFdoZXRoZXIgb3Igbm90IHRoZSBjdXN0b20gZWxlbWVudCBpcyBjb25uZWN0ZWQgKi9cblx0XHQkJGNuID0gZmFsc2U7XG5cdFx0LyoqIENvbXBvbmVudCBwcm9wcyBkYXRhICovXG5cdFx0JCRkID0ge307XG5cdFx0LyoqIGB0cnVlYCBpZiBjdXJyZW50bHkgaW4gdGhlIHByb2Nlc3Mgb2YgcmVmbGVjdGluZyBjb21wb25lbnQgcHJvcHMgYmFjayB0byBhdHRyaWJ1dGVzICovXG5cdFx0JCRyID0gZmFsc2U7XG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBQcm9wcyBkZWZpbml0aW9uIChuYW1lLCByZWZsZWN0ZWQsIHR5cGUgZXRjKSAqL1xuXHRcdCQkcF9kID0ge307XG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbltdPn0gRXZlbnQgbGlzdGVuZXJzICovXG5cdFx0JCRsID0ge307XG5cdFx0LyoqIEB0eXBlIHtNYXA8RnVuY3Rpb24sIEZ1bmN0aW9uPn0gRXZlbnQgbGlzdGVuZXIgdW5zdWJzY3JpYmUgZnVuY3Rpb25zICovXG5cdFx0JCRsX3UgPSBuZXcgTWFwKCk7XG5cblx0XHRjb25zdHJ1Y3RvcigkJGNvbXBvbmVudEN0b3IsICQkc2xvdHMsIHVzZV9zaGFkb3dfZG9tKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4kJGN0b3IgPSAkJGNvbXBvbmVudEN0b3I7XG5cdFx0XHR0aGlzLiQkcyA9ICQkc2xvdHM7XG5cdFx0XHRpZiAodXNlX3NoYWRvd19kb20pIHtcblx0XHRcdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuXHRcdFx0Ly8gV2UgY2FuJ3QgZGV0ZXJtaW5lIHVwZnJvbnQgaWYgdGhlIGV2ZW50IGlzIGEgY3VzdG9tIGV2ZW50IG9yIG5vdCwgc28gd2UgaGF2ZSB0b1xuXHRcdFx0Ly8gbGlzdGVuIHRvIGJvdGguIElmIHNvbWVvbmUgdXNlcyBhIGN1c3RvbSBldmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYSByZWd1bGFyXG5cdFx0XHQvLyBicm93c2VyIGV2ZW50LCB0aGlzIGZpcmVzIHR3aWNlIC0gd2UgY2FuJ3QgYXZvaWQgdGhhdC5cblx0XHRcdHRoaXMuJCRsW3R5cGVdID0gdGhpcy4kJGxbdHlwZV0gfHwgW107XG5cdFx0XHR0aGlzLiQkbFt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0XHRcdGlmICh0aGlzLiQkYykge1xuXHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRjLiRvbih0eXBlLCBsaXN0ZW5lcik7XG5cdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHR9XG5cdFx0XHRzdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRyZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG5cdFx0XHRzdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblx0XHRcdGlmICh0aGlzLiQkYykge1xuXHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRsX3UuZ2V0KGxpc3RlbmVyKTtcblx0XHRcdFx0aWYgKHVuc3ViKSB7XG5cdFx0XHRcdFx0dW5zdWIoKTtcblx0XHRcdFx0XHR0aGlzLiQkbF91LmRlbGV0ZShsaXN0ZW5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuJCRjbiA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuJCRjKSB7XG5cdFx0XHRcdC8vIFdlIHdhaXQgb25lIHRpY2sgdG8gbGV0IHBvc3NpYmxlIGNoaWxkIHNsb3QgZWxlbWVudHMgYmUgY3JlYXRlZC9tb3VudGVkXG5cdFx0XHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAoIXRoaXMuJCRjbiB8fCB0aGlzLiQkYykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBjcmVhdGVfc2xvdChuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRcdGxldCBub2RlO1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2JqID0ge1xuXHRcdFx0XHRcdFx0XHRjOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW1lbnQoJ3Nsb3QnKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRyKG5vZGUsICduYW1lJywgbmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHRcdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG5cdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFthbmNob3JdXG5cdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRtOiBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHRcdFx0XHRcdFx0XHRcdGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGQ6IGZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRldGFjaGluZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGV0YWNoKG5vZGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCAkJHNsb3RzID0ge307XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nX3Nsb3RzID0gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyh0aGlzKTtcblx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIHRoaXMuJCRzKSB7XG5cdFx0XHRcdFx0aWYgKG5hbWUgaW4gZXhpc3Rpbmdfc2xvdHMpIHtcblx0XHRcdFx0XHRcdCQkc2xvdHNbbmFtZV0gPSBbY3JlYXRlX3Nsb3QobmFtZSldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiB0aGlzLmF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHQvLyB0aGlzLiQkZGF0YSB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhpcy5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuJCRnX3AoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0XHRcdGlmICghKG5hbWUgaW4gdGhpcy4kJGQpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiQkZFtuYW1lXSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShuYW1lLCBhdHRyaWJ1dGUudmFsdWUsIHRoaXMuJCRwX2QsICd0b1Byb3AnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gUG9ydCBvdmVyIHByb3BzIHRoYXQgd2VyZSBzZXQgcHJvZ3JhbW1hdGljYWxseSBiZWZvcmUgY2Ugd2FzIGluaXRpYWxpemVkXG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCRwX2QpIHtcblx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdGhpcy4kJGQpICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldID0gdGhpc1trZXldOyAvLyBkb24ndCB0cmFuc2Zvcm0sIHRoZXNlIHdlcmUgc2V0IHRocm91Z2ggSmF2YVNjcmlwdFxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXNba2V5XTsgLy8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSB0aGF0IHNoYWRvd3MgdGhlIGdldHRlci9zZXR0ZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kJGMgPSBuZXcgdGhpcy4kJGN0b3Ioe1xuXHRcdFx0XHRcdHRhcmdldDogdGhpcy5zaGFkb3dSb290IHx8IHRoaXMsXG5cdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuJCRkLFxuXHRcdFx0XHRcdFx0JCRzbG90cyxcblx0XHRcdFx0XHRcdCQkc2NvcGU6IHtcblx0XHRcdFx0XHRcdFx0Y3R4OiBbXVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVmbGVjdCBjb21wb25lbnQgcHJvcHMgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRjb25zdCByZWZsZWN0X2F0dHJpYnV0ZXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kJHIgPSB0cnVlO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCRwX2QpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0gPSB0aGlzLiQkYy4kJC5jdHhbdGhpcy4kJGMuJCQucHJvcHNba2V5XV07XG5cdFx0XHRcdFx0XHRpZiAodGhpcy4kJHBfZFtrZXldLnJlZmxlY3QpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlX3ZhbHVlID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKFxuXHRcdFx0XHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCRwX2QsXG5cdFx0XHRcdFx0XHRcdFx0J3RvQXR0cmlidXRlJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRpZiAoYXR0cmlidXRlX3ZhbHVlID09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlIHx8IGtleSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUodGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSB8fCBrZXksIGF0dHJpYnV0ZV92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kJHIgPSBmYWxzZTtcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy4kJGMuJCQuYWZ0ZXJfdXBkYXRlLnB1c2gocmVmbGVjdF9hdHRyaWJ1dGVzKTtcblx0XHRcdFx0cmVmbGVjdF9hdHRyaWJ1dGVzKCk7IC8vIG9uY2UgaW5pdGlhbGx5IGJlY2F1c2UgYWZ0ZXJfdXBkYXRlIGlzIGFkZGVkIHRvbyBsYXRlIGZvciBmaXJzdCByZW5kZXJcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy4kJGwpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuJCRsW3R5cGVdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRjLiRvbih0eXBlLCBsaXN0ZW5lcik7XG5cdFx0XHRcdFx0XHR0aGlzLiQkbF91LnNldChsaXN0ZW5lciwgdW5zdWIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiQkbCA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFdlIGRvbid0IG5lZWQgdGhpcyB3aGVuIHdvcmtpbmcgd2l0aGluIFN2ZWx0ZSBjb2RlLCBidXQgZm9yIGNvbXBhdGliaWxpdHkgb2YgcGVvcGxlIHVzaW5nIHRoaXMgb3V0c2lkZSBvZiBTdmVsdGVcblx0XHQvLyBhbmQgc2V0dGluZyBhdHRyaWJ1dGVzIHRocm91Z2ggc2V0QXR0cmlidXRlIGV0YywgdGhpcyBpcyBoZWxwZnVsXG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLiQkcikgcmV0dXJuO1xuXHRcdFx0YXR0ciA9IHRoaXMuJCRnX3AoYXR0cik7XG5cdFx0XHR0aGlzLiQkZFthdHRyXSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShhdHRyLCBuZXdWYWx1ZSwgdGhpcy4kJHBfZCwgJ3RvUHJvcCcpO1xuXHRcdFx0dGhpcy4kJGM/LiRzZXQoeyBbYXR0cl06IHRoaXMuJCRkW2F0dHJdIH0pO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4kJGNuID0gZmFsc2U7XG5cdFx0XHQvLyBJbiBhIG1pY3JvdGFzaywgYmVjYXVzZSB0aGlzIGNvdWxkIGJlIGEgbW92ZSB3aXRoaW4gdGhlIERPTVxuXHRcdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy4kJGNuKSB7XG5cdFx0XHRcdFx0dGhpcy4kJGMuJGRlc3Ryb3koKTtcblx0XHRcdFx0XHR0aGlzLiQkYyA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JCRnX3AoYXR0cmlidXRlX25hbWUpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdE9iamVjdC5rZXlzKHRoaXMuJCRwX2QpLmZpbmQoXG5cdFx0XHRcdFx0KGtleSkgPT5cblx0XHRcdFx0XHRcdHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgPT09IGF0dHJpYnV0ZV9uYW1lIHx8XG5cdFx0XHRcdFx0XHQoIXRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09IGF0dHJpYnV0ZV9uYW1lKVxuXHRcdFx0XHQpIHx8IGF0dHJpYnV0ZV9uYW1lXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IHByb3BzX2RlZmluaXRpb25cbiAqIEBwYXJhbSB7J3RvQXR0cmlidXRlJyB8ICd0b1Byb3AnfSBbdHJhbnNmb3JtXVxuICovXG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUocHJvcCwgdmFsdWUsIHByb3BzX2RlZmluaXRpb24sIHRyYW5zZm9ybSkge1xuXHRjb25zdCB0eXBlID0gcHJvcHNfZGVmaW5pdGlvbltwcm9wXT8udHlwZTtcblx0dmFsdWUgPSB0eXBlID09PSAnQm9vbGVhbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicgPyB2YWx1ZSAhPSBudWxsIDogdmFsdWU7XG5cdGlmICghdHJhbnNmb3JtIHx8ICFwcm9wc19kZWZpbml0aW9uW3Byb3BdKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9IGVsc2UgaWYgKHRyYW5zZm9ybSA9PT0gJ3RvQXR0cmlidXRlJykge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBudWxsIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA/ICcnIDogbnVsbDtcblx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHZhbHVlO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSAmJiBKU09OLnBhcnNlKHZhbHVlKTtcblx0XHRcdGNhc2UgJ0Jvb2xlYW4nOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7IC8vIGNvbnZlcnNpb24gYWxyZWFkeSBoYW5kbGVkIGFib3ZlXG5cdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgIT0gbnVsbCA/ICt2YWx1ZSA6IHZhbHVlO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICpcbiAqIFR1cm4gYSBTdmVsdGUgY29tcG9uZW50IGludG8gYSBjdXN0b20gZWxlbWVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLkNvbXBvbmVudFR5cGV9IENvbXBvbmVudCAgQSBTdmVsdGUgY29tcG9uZW50IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IHByb3BzX2RlZmluaXRpb24gIFRoZSBwcm9wcyB0byBvYnNlcnZlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBzbG90cyAgVGhlIHNsb3RzIHRvIGNyZWF0ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gYWNjZXNzb3JzICBPdGhlciBhY2Nlc3NvcnMgYmVzaWRlcyB0aGUgb25lcyBmb3IgcHJvcHMgdGhlIGNvbXBvbmVudCBoYXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlX3NoYWRvd19kb20gIFdoZXRoZXIgdG8gdXNlIHNoYWRvdyBET01cbiAqIEBwYXJhbSB7KGNlOiBuZXcgKCkgPT4gSFRNTEVsZW1lbnQpID0+IG5ldyAoKSA9PiBIVE1MRWxlbWVudH0gW2V4dGVuZF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZWxlbWVudChcblx0Q29tcG9uZW50LFxuXHRwcm9wc19kZWZpbml0aW9uLFxuXHRzbG90cyxcblx0YWNjZXNzb3JzLFxuXHR1c2Vfc2hhZG93X2RvbSxcblx0ZXh0ZW5kXG4pIHtcblx0bGV0IENsYXNzID0gY2xhc3MgZXh0ZW5kcyBTdmVsdGVFbGVtZW50IHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKENvbXBvbmVudCwgc2xvdHMsIHVzZV9zaGFkb3dfZG9tKTtcblx0XHRcdHRoaXMuJCRwX2QgPSBwcm9wc19kZWZpbml0aW9uO1xuXHRcdH1cblx0XHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhwcm9wc19kZWZpbml0aW9uKS5tYXAoKGtleSkgPT5cblx0XHRcdFx0KHByb3BzX2RlZmluaXRpb25ba2V5XS5hdHRyaWJ1dGUgfHwga2V5KS50b0xvd2VyQ2FzZSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0T2JqZWN0LmtleXMocHJvcHNfZGVmaW5pdGlvbikuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbGFzcy5wcm90b3R5cGUsIHByb3AsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRjICYmIHByb3AgaW4gdGhpcy4kJGMgPyB0aGlzLiQkY1twcm9wXSA6IHRoaXMuJCRkW3Byb3BdO1xuXHRcdFx0fSxcblx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHR2YWx1ZSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShwcm9wLCB2YWx1ZSwgcHJvcHNfZGVmaW5pdGlvbik7XG5cdFx0XHRcdHRoaXMuJCRkW3Byb3BdID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuJCRjPy4kc2V0KHsgW3Byb3BdOiB2YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdGFjY2Vzc29ycy5mb3JFYWNoKChhY2Nlc3NvcikgPT4ge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbGFzcy5wcm90b3R5cGUsIGFjY2Vzc29yLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkYz8uW2FjY2Vzc29yXTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdGlmIChleHRlbmQpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIC0gYXNzaWduaW5nIGhlcmUgaXMgZmluZVxuXHRcdENsYXNzID0gZXh0ZW5kKENsYXNzKTtcblx0fVxuXHRDb21wb25lbnQuZWxlbWVudCA9IC8qKiBAdHlwZSB7YW55fSAqLyAoQ2xhc3MpO1xuXHRyZXR1cm4gQ2xhc3M7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBbUHJvcHM9YW55XVxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBbRXZlbnRzPWFueV1cbiAqL1xuZXhwb3J0IGNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiAjIyMgUFJJVkFURSBBUElcblx0ICpcblx0ICogRG8gbm90IHVzZSwgbWF5IGNoYW5nZSBhdCBhbnkgdGltZVxuXHQgKlxuXHQgKiBAdHlwZSB7YW55fVxuXHQgKi9cblx0JCQgPSB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiAjIyMgUFJJVkFURSBBUElcblx0ICpcblx0ICogRG8gbm90IHVzZSwgbWF5IGNoYW5nZSBhdCBhbnkgdGltZVxuXHQgKlxuXHQgKiBAdHlwZSB7YW55fVxuXHQgKi9cblx0JCRzZXQgPSB1bmRlZmluZWQ7XG5cblx0LyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHQkZGVzdHJveSgpIHtcblx0XHRkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcblx0XHR0aGlzLiRkZXN0cm95ID0gbm9vcDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdGVtcGxhdGUge0V4dHJhY3Q8a2V5b2YgRXZlbnRzLCBzdHJpbmc+fSBLXG5cdCAqIEBwYXJhbSB7S30gdHlwZVxuXHQgKiBAcGFyYW0geygoZTogRXZlbnRzW0tdKSA9PiB2b2lkKSB8IG51bGwgfCB1bmRlZmluZWR9IGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuXHQgKi9cblx0JG9uKHR5cGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcblx0XHRcdHJldHVybiBub29wO1xuXHRcdH1cblx0XHRjb25zdCBjYWxsYmFja3MgPSB0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSk7XG5cdFx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpbmRleCAhPT0gLTEpIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQYXJ0aWFsPFByb3BzPn0gcHJvcHNcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHQkc2V0KHByb3BzKSB7XG5cdFx0aWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KHByb3BzKSkge1xuXHRcdFx0dGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcblx0XHRcdHRoaXMuJCRzZXQocHJvcHMpO1xuXHRcdFx0dGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F0dHJpYnV0ZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3JlZmxlY3RdXG4gKiBAcHJvcGVydHkgeydTdHJpbmcnfCdCb29sZWFuJ3wnTnVtYmVyJ3wnQXJyYXknfCdPYmplY3QnfSBbdHlwZV1cbiAqL1xuIiwiLy8gZ2VuZXJhdGVkIGR1cmluZyByZWxlYXNlLCBkbyBub3QgbW9kaWZ5XG5cbi8qKlxuICogVGhlIGN1cnJlbnQgdmVyc2lvbiwgYXMgc2V0IGluIHBhY2thZ2UuanNvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtY29tcGlsZXIjc3ZlbHRlLXZlcnNpb25cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuMi4xNSc7XG5leHBvcnQgY29uc3QgUFVCTElDX1ZFUlNJT04gPSAnNCc7XG4iLCJpbXBvcnQgeyBQVUJMSUNfVkVSU0lPTiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC92ZXJzaW9uLmpzJztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQvLyBAdHMtaWdub3JlXG5cdCh3aW5kb3cuX19zdmVsdGUgfHwgKHdpbmRvdy5fX3N2ZWx0ZSA9IHsgdjogbmV3IFNldCgpIH0pKS52LmFkZChQVUJMSUNfVkVSU0lPTik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSQlRyZWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJCVHJlZSgpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICB9XG4gICAgUkJUcmVlLnByb3RvdHlwZS5pbnNlcnRTdWNjZXNzb3IgPSBmdW5jdGlvbiAobm9kZSwgc3VjY2Vzc29yKSB7XG4gICAgICAgIHZhciBwYXJlbnQ7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzdWNjZXNzb3IucHJldiA9IG5vZGU7XG4gICAgICAgICAgICBzdWNjZXNzb3IubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgICAgICAgICAgICBub2RlLm5leHQucHJldiA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUubmV4dCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmZpcnN0KHRoaXMucm9vdCk7XG4gICAgICAgICAgICBzdWNjZXNzb3IucHJldiA9IG51bGw7XG4gICAgICAgICAgICBzdWNjZXNzb3IubmV4dCA9IG5vZGU7XG4gICAgICAgICAgICBub2RlLnByZXYgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICBwYXJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VjY2Vzc29yLnByZXYgPSBzdWNjZXNzb3IubmV4dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN1Y2Nlc3Nvci5sZWZ0ID0gc3VjY2Vzc29yLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgc3VjY2Vzc29yLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgc3VjY2Vzc29yLnJlZCA9IHRydWU7XG4gICAgICAgIHZhciBncmFuZHBhLCB1bmNsZTtcbiAgICAgICAgbm9kZSA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucmVkKSB7XG4gICAgICAgICAgICBncmFuZHBhID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IGdyYW5kcGEubGVmdCkge1xuICAgICAgICAgICAgICAgIHVuY2xlID0gZ3JhbmRwYS5yaWdodDtcbiAgICAgICAgICAgICAgICBpZiAodW5jbGUgJiYgdW5jbGUucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSB1bmNsZS5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhbmRwYS5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZ3JhbmRwYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBwYXJlbnQucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhbmRwYS5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KGdyYW5kcGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuY2xlID0gZ3JhbmRwYS5sZWZ0O1xuICAgICAgICAgICAgICAgIGlmICh1bmNsZSAmJiB1bmNsZS5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHVuY2xlLnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBncmFuZHBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBncmFuZHBhLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChncmFuZHBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QucmVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLnJlbW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5uZXh0KSB7XG4gICAgICAgICAgICBub2RlLm5leHQucHJldiA9IG5vZGUucHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wcmV2KSB7XG4gICAgICAgICAgICBub2RlLnByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm5leHQgPSBub2RlLnByZXYgPSBudWxsO1xuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIHZhciBsZWZ0ID0gbm9kZS5sZWZ0O1xuICAgICAgICB2YXIgcmlnaHQgPSBub2RlLnJpZ2h0O1xuICAgICAgICB2YXIgbmV4dCA9IG51bGw7XG4gICAgICAgIGlmICghbGVmdCkge1xuICAgICAgICAgICAgbmV4dCA9IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFyaWdodCkge1xuICAgICAgICAgICAgbmV4dCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5maXJzdChyaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5sZWZ0ID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJpZ2h0ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzUmVkO1xuICAgICAgICBpZiAobGVmdCAmJiByaWdodCkge1xuICAgICAgICAgICAgaXNSZWQgPSBuZXh0LnJlZDtcbiAgICAgICAgICAgIG5leHQucmVkID0gbm9kZS5yZWQ7XG4gICAgICAgICAgICBuZXh0LmxlZnQgPSBsZWZ0O1xuICAgICAgICAgICAgbGVmdC5wYXJlbnQgPSBuZXh0O1xuICAgICAgICAgICAgaWYgKG5leHQgIT09IHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gbmV4dC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbmV4dC5wYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV4dC5yaWdodDtcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbmV4dC5yaWdodCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHJpZ2h0LnBhcmVudCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0LnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBuZXh0O1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0LnJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXNSZWQgPSBub2RlLnJlZDtcbiAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnJlZCkge1xuICAgICAgICAgICAgbm9kZS5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2libGluZztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5yaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKHNpYmxpbmcubGVmdCAmJiBzaWJsaW5nLmxlZnQucmVkKSB8fCAoc2libGluZy5yaWdodCAmJiBzaWJsaW5nLnJpZ2h0LnJlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaWJsaW5nLnJpZ2h0IHx8ICFzaWJsaW5nLnJpZ2h0LnJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5sZWZ0LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSBwYXJlbnQucmVkO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gc2libGluZy5yaWdodC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQubGVmdDtcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5sZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKHNpYmxpbmcubGVmdCAmJiBzaWJsaW5nLmxlZnQucmVkKSB8fCAoc2libGluZy5yaWdodCAmJiBzaWJsaW5nLnJpZ2h0LnJlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaWJsaW5nLmxlZnQgfHwgIXNpYmxpbmcubGVmdC5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmlnaHQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSBwYXJlbnQucmVkO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gc2libGluZy5sZWZ0LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmcucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICB9IHdoaWxlICghbm9kZS5yZWQpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5yZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHAgPSBub2RlO1xuICAgICAgICB2YXIgcSA9IG5vZGUucmlnaHQ7XG4gICAgICAgIHZhciBwYXJlbnQgPSBwLnBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJpZ2h0ID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHE7XG4gICAgICAgIH1cbiAgICAgICAgcS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHAucGFyZW50ID0gcTtcbiAgICAgICAgcC5yaWdodCA9IHEubGVmdDtcbiAgICAgICAgaWYgKHAucmlnaHQpIHtcbiAgICAgICAgICAgIHAucmlnaHQucGFyZW50ID0gcDtcbiAgICAgICAgfVxuICAgICAgICBxLmxlZnQgPSBwO1xuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5yb3RhdGVSaWdodCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwID0gbm9kZTtcbiAgICAgICAgdmFyIHEgPSBub2RlLmxlZnQ7XG4gICAgICAgIHZhciBwYXJlbnQgPSBwLnBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJpZ2h0ID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHE7XG4gICAgICAgIH1cbiAgICAgICAgcS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHAucGFyZW50ID0gcTtcbiAgICAgICAgcC5sZWZ0ID0gcS5yaWdodDtcbiAgICAgICAgaWYgKHAubGVmdCkge1xuICAgICAgICAgICAgcC5sZWZ0LnBhcmVudCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgcS5yaWdodCA9IHA7XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUubGVmdCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHdoaWxlIChub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBSQlRyZWU7XG59KCkpO1xuZXhwb3J0cy5SQlRyZWUgPSBSQlRyZWU7XG52YXIgUkJUcmVlTm9kZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUkJUcmVlTm9kZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFJCVHJlZU5vZGU7XG59KCkpO1xuZXhwb3J0cy5SQlRyZWVOb2RlID0gUkJUcmVlTm9kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJidHJlZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBWZXJ0ZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZlcnRleCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHJldHVybiBWZXJ0ZXg7XG59KCkpO1xuZXhwb3J0cy5WZXJ0ZXggPSBWZXJ0ZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZXJ0ZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRWRnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRWRnZShsU2l0ZSwgclNpdGUpIHtcbiAgICAgICAgdGhpcy5sU2l0ZSA9IGxTaXRlO1xuICAgICAgICB0aGlzLnJTaXRlID0gclNpdGU7XG4gICAgICAgIHRoaXMudmEgPSB0aGlzLnZiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEVkZ2U7XG59KCkpO1xuZXhwb3J0cy5FZGdlID0gRWRnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVkZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ2VsbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2VsbChzaXRlKSB7XG4gICAgICAgIHRoaXMuc2l0ZSA9IHNpdGU7XG4gICAgICAgIHRoaXMuaGFsZmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuY2xvc2VNZSA9IGZhbHNlO1xuICAgIH1cbiAgICBDZWxsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gc2l0ZTtcbiAgICAgICAgdGhpcy5oYWxmZWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbG9zZU1lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUucHJlcGFyZUhhbGZlZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbGZlZGdlcyA9IHRoaXMuaGFsZmVkZ2VzO1xuICAgICAgICB2YXIgaUhhbGZlZGdlID0gaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIGVkZ2U7XG4gICAgICAgIHdoaWxlIChpSGFsZmVkZ2UtLSkge1xuICAgICAgICAgICAgZWRnZSA9IGhhbGZlZGdlc1tpSGFsZmVkZ2VdLmVkZ2U7XG4gICAgICAgICAgICBpZiAoIWVkZ2UudmIgfHwgIWVkZ2UudmEpIHtcbiAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlIYWxmZWRnZSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGFsZmVkZ2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiLmFuZ2xlIC0gYS5hbmdsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYWxmZWRnZXMubGVuZ3RoO1xuICAgIH07XG4gICAgQ2VsbC5wcm90b3R5cGUuZ2V0TmVpZ2hib3JJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZWlnaGJvcnMgPSBbXTtcbiAgICAgICAgdmFyIGlIYWxmZWRnZSA9IHRoaXMuaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIGVkZ2U7XG4gICAgICAgIHdoaWxlIChpSGFsZmVkZ2UtLSkge1xuICAgICAgICAgICAgZWRnZSA9IHRoaXMuaGFsZmVkZ2VzW2lIYWxmZWRnZV0uZWRnZTtcbiAgICAgICAgICAgIGlmIChlZGdlLmxTaXRlICE9PSBudWxsICYmIGVkZ2UubFNpdGUuaWQgIT0gdGhpcy5zaXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goZWRnZS5sU2l0ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlZGdlLnJTaXRlICE9PSBudWxsICYmIGVkZ2UuclNpdGUuaWQgIT0gdGhpcy5zaXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goZWRnZS5yU2l0ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcbiAgICB9O1xuICAgIDtcbiAgICBDZWxsLnByb3RvdHlwZS5nZXRCYm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXM7XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICB2YXIgeG1pbiA9IEluZmluaXR5O1xuICAgICAgICB2YXIgeW1pbiA9IEluZmluaXR5O1xuICAgICAgICB2YXIgeG1heCA9IC1JbmZpbml0eTtcbiAgICAgICAgdmFyIHltYXggPSAtSW5maW5pdHk7XG4gICAgICAgIHZhciB2LCB2eCwgdnk7XG4gICAgICAgIHdoaWxlIChpSGFsZmVkZ2UtLSkge1xuICAgICAgICAgICAgdiA9IGhhbGZlZGdlc1tpSGFsZmVkZ2VdLmdldFN0YXJ0cG9pbnQoKTtcbiAgICAgICAgICAgIHZ4ID0gdi54O1xuICAgICAgICAgICAgdnkgPSB2Lnk7XG4gICAgICAgICAgICBpZiAodnggPCB4bWluKSB7XG4gICAgICAgICAgICAgICAgeG1pbiA9IHZ4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZ5IDwgeW1pbikge1xuICAgICAgICAgICAgICAgIHltaW4gPSB2eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2eCA+IHhtYXgpIHtcbiAgICAgICAgICAgICAgICB4bWF4ID0gdng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodnkgPiB5bWF4KSB7XG4gICAgICAgICAgICAgICAgeW1heCA9IHZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4bWluLFxuICAgICAgICAgICAgeTogeW1pbixcbiAgICAgICAgICAgIHdpZHRoOiB4bWF4IC0geG1pbixcbiAgICAgICAgICAgIGhlaWdodDogeW1heCAtIHltaW5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIENlbGwucHJvdG90eXBlLnBvaW50SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGhhbGZlZGdlcyA9IHRoaXMuaGFsZmVkZ2VzO1xuICAgICAgICB2YXIgaUhhbGZlZGdlID0gaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIGhhbGZlZGdlO1xuICAgICAgICB2YXIgcDAsIHAxO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgd2hpbGUgKGlIYWxmZWRnZS0tKSB7XG4gICAgICAgICAgICBoYWxmZWRnZSA9IGhhbGZlZGdlc1tpSGFsZmVkZ2VdO1xuICAgICAgICAgICAgcDAgPSBoYWxmZWRnZS5nZXRTdGFydHBvaW50KCk7XG4gICAgICAgICAgICBwMSA9IGhhbGZlZGdlLmdldEVuZHBvaW50KCk7XG4gICAgICAgICAgICByID0gKHkgLSBwMC55KSAqIChwMS54IC0gcDAueCkgLSAoeCAtIHAwLngpICogKHAxLnkgLSBwMC55KTtcbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH07XG4gICAgcmV0dXJuIENlbGw7XG59KCkpO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGlhZ3JhbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlhZ3JhbShzaXRlKSB7XG4gICAgICAgIHRoaXMuc2l0ZSA9IHNpdGU7XG4gICAgfVxuICAgIHJldHVybiBEaWFncmFtO1xufSgpKTtcbmV4cG9ydHMuRGlhZ3JhbSA9IERpYWdyYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWFncmFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEhhbGZlZGdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIYWxmZWRnZShlZGdlLCBsU2l0ZSwgclNpdGUpIHtcbiAgICAgICAgdGhpcy5zaXRlID0gbFNpdGU7XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2U7XG4gICAgICAgIGlmIChyU2l0ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIoclNpdGUueSAtIGxTaXRlLnksIHJTaXRlLnggLSBsU2l0ZS54KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YSA9IGVkZ2UudmE7XG4gICAgICAgICAgICB2YXIgdmIgPSBlZGdlLnZiO1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IGVkZ2UubFNpdGUgPT09IGxTaXRlID9cbiAgICAgICAgICAgICAgICBNYXRoLmF0YW4yKHZiLnggLSB2YS54LCB2YS55IC0gdmIueSkgOlxuICAgICAgICAgICAgICAgIE1hdGguYXRhbjIodmEueCAtIHZiLngsIHZiLnkgLSB2YS55KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBIYWxmZWRnZS5wcm90b3R5cGUuZ2V0U3RhcnRwb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZS5sU2l0ZSA9PT0gdGhpcy5zaXRlID8gdGhpcy5lZGdlLnZhIDogdGhpcy5lZGdlLnZiO1xuICAgIH07XG4gICAgO1xuICAgIEhhbGZlZGdlLnByb3RvdHlwZS5nZXRFbmRwb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZS5sU2l0ZSA9PT0gdGhpcy5zaXRlID8gdGhpcy5lZGdlLnZiIDogdGhpcy5lZGdlLnZhO1xuICAgIH07XG4gICAgO1xuICAgIHJldHVybiBIYWxmZWRnZTtcbn0oKSk7XG5leHBvcnRzLkhhbGZlZGdlID0gSGFsZmVkZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oYWxmZWRnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByYnRyZWVfMSA9IHJlcXVpcmUoXCIuL3JidHJlZVwiKTtcbnZhciB2ZXJ0ZXhfMSA9IHJlcXVpcmUoXCIuL3ZlcnRleFwiKTtcbnZhciBlZGdlXzEgPSByZXF1aXJlKFwiLi9lZGdlXCIpO1xudmFyIGNlbGxfMSA9IHJlcXVpcmUoXCIuL2NlbGxcIik7XG52YXIgZGlhZ3JhbV8xID0gcmVxdWlyZShcIi4vZGlhZ3JhbVwiKTtcbnZhciBoYWxmZWRnZV8xID0gcmVxdWlyZShcIi4vaGFsZmVkZ2VcIik7XG52YXIgVm9yb25vaSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVm9yb25vaSgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmNlbGxzID0gbnVsbDtcbiAgICAgICAgdGhpcy50b1JlY3ljbGUgPSBudWxsO1xuICAgICAgICB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkID0gW107XG4gICAgICAgIHRoaXMuY2lyY2xlRXZlbnRKdW5reWFyZCA9IFtdO1xuICAgICAgICB0aGlzLnZlcnRleEp1bmt5YXJkID0gW107XG4gICAgICAgIHRoaXMuZWRnZUp1bmt5YXJkID0gW107XG4gICAgICAgIHRoaXMuY2VsbEp1bmt5YXJkID0gW107XG4gICAgfVxuICAgIFZvcm9ub2kucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2l0ZXMsIGJib3gpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgaWYgKHRoaXMudG9SZWN5Y2xlKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRleEp1bmt5YXJkID0gdGhpcy52ZXJ0ZXhKdW5reWFyZC5jb25jYXQodGhpcy50b1JlY3ljbGUudmVydGljZXMpO1xuICAgICAgICAgICAgdGhpcy5lZGdlSnVua3lhcmQgPSB0aGlzLmVkZ2VKdW5reWFyZC5jb25jYXQodGhpcy50b1JlY3ljbGUuZWRnZXMpO1xuICAgICAgICAgICAgdGhpcy5jZWxsSnVua3lhcmQgPSB0aGlzLmNlbGxKdW5reWFyZC5jb25jYXQodGhpcy50b1JlY3ljbGUuY2VsbHMpO1xuICAgICAgICAgICAgdGhpcy50b1JlY3ljbGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXRlRXZlbnRzID0gc2l0ZXMuc2xpY2UoMCk7XG4gICAgICAgIHNpdGVFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIHIgPSBiLnkgLSBhLnk7XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGIueCAtIGEueDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzaXRlID0gc2l0ZUV2ZW50cy5wb3AoKSwgc2l0ZWlkID0gMCwgeHNpdGV4LCB4c2l0ZXksIGNlbGxzID0gdGhpcy5jZWxscywgY2lyY2xlO1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBjaXJjbGUgPSB0aGlzLmZpcnN0Q2lyY2xlRXZlbnQ7XG4gICAgICAgICAgICBpZiAoc2l0ZSAmJiAoIWNpcmNsZSB8fCBzaXRlLnkgPCBjaXJjbGUueSB8fCAoc2l0ZS55ID09PSBjaXJjbGUueSAmJiBzaXRlLnggPCBjaXJjbGUueCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpdGUueCAhPT0geHNpdGV4IHx8IHNpdGUueSAhPT0geHNpdGV5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW3NpdGVpZF0gPSB0aGlzLmNyZWF0ZUNlbGwoc2l0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNpdGUuaWQgPSBzaXRlaWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCZWFjaHNlY3Rpb24oc2l0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHhzaXRleSA9IHNpdGUueTtcbiAgICAgICAgICAgICAgICAgICAgeHNpdGV4ID0gc2l0ZS54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaXRlID0gc2l0ZUV2ZW50cy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNpcmNsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQmVhY2hzZWN0aW9uKGNpcmNsZS5hcmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlwRWRnZXMoYmJveCk7XG4gICAgICAgIHRoaXMuY2xvc2VDZWxscyhiYm94KTtcbiAgICAgICAgdmFyIHN0b3BUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRpYWdyYW0gPSBuZXcgZGlhZ3JhbV8xLkRpYWdyYW0oKTtcbiAgICAgICAgZGlhZ3JhbS5jZWxscyA9IHRoaXMuY2VsbHM7XG4gICAgICAgIGRpYWdyYW0uZWRnZXMgPSB0aGlzLmVkZ2VzO1xuICAgICAgICBkaWFncmFtLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgZGlhZ3JhbS5leGVjVGltZSA9IHN0b3BUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGRpYWdyYW07XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5zcXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4KTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh4KTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmVwcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDFlLTk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5pbnZlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAxLjAgLyB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZXF1YWxXaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFicyhhIC0gYikgPCB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZ3JlYXRlclRoYW5XaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYSAtIGIpID4gdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIDtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5ncmVhdGVyVGhhbk9yRXF1YWxXaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYiAtIGEpIDwgdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmxlc3NUaGFuV2l0aEVwc2lsb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGIgLSBhKSA+IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5sZXNzVGhhbk9yRXF1YWxXaXRoRXBzaWxvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYSAtIGIpIDwgdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnF1YW50aXplU2l0ZXMgPSBmdW5jdGlvbiAoc2l0ZXMpIHtcbiAgICAgICAgdmFyIGVwcyA9IHRoaXMuZXBzKCksIG4gPSBzaXRlcy5sZW5ndGgsIHNpdGU7XG4gICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgIHNpdGUgPSBzaXRlc1tuXTtcbiAgICAgICAgICAgIHNpdGUueCA9IE1hdGguZmxvb3Ioc2l0ZS54IC8gZXBzKSAqIGVwcztcbiAgICAgICAgICAgIHNpdGUueSA9IE1hdGguZmxvb3Ioc2l0ZS55IC8gZXBzKSAqIGVwcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucmVjeWNsZSA9IGZ1bmN0aW9uIChkaWFncmFtKSB7XG4gICAgICAgIGlmIChkaWFncmFtKSB7XG4gICAgICAgICAgICBpZiAoZGlhZ3JhbSBpbnN0YW5jZW9mIGRpYWdyYW1fMS5EaWFncmFtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b1JlY3ljbGUgPSBkaWFncmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ1Zvcm9ub2kucmVjeWNsZURpYWdyYW0oKSA+IE5lZWQgYSBEaWFncmFtIG9iamVjdC4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJlYWNobGluZSkge1xuICAgICAgICAgICAgdGhpcy5iZWFjaGxpbmUgPSBuZXcgcmJ0cmVlXzEuUkJUcmVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmVhY2hsaW5lLnJvb3QpIHtcbiAgICAgICAgICAgIHZhciBiZWFjaHNlY3Rpb24gPSB0aGlzLmJlYWNobGluZS5maXJzdCh0aGlzLmJlYWNobGluZS5yb290KTtcbiAgICAgICAgICAgIHdoaWxlIChiZWFjaHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlYWNoc2VjdGlvbkp1bmt5YXJkLnB1c2goYmVhY2hzZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBiZWFjaHNlY3Rpb24gPSBiZWFjaHNlY3Rpb24ubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlYWNobGluZS5yb290ID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLmNpcmNsZUV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5jaXJjbGVFdmVudHMgPSBuZXcgcmJ0cmVlXzEuUkJUcmVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaXJjbGVFdmVudHMucm9vdCA9IHRoaXMuZmlyc3RDaXJjbGVFdmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xuICAgICAgICB0aGlzLmNlbGxzID0gW107XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVDZWxsID0gZnVuY3Rpb24gKHNpdGUpIHtcbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLmNlbGxKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNlbGwuaW5pdChzaXRlKTtcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmluaXQoc2l0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjZWxsXzEuQ2VsbChzaXRlKTtcbiAgICB9O1xuICAgIDtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVIYWxmZWRnZSA9IGZ1bmN0aW9uIChlZGdlLCBsU2l0ZSwgclNpdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBoYWxmZWRnZV8xLkhhbGZlZGdlKGVkZ2UsIGxTaXRlLCByU2l0ZSk7XG4gICAgfTtcbiAgICA7XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlVmVydGV4ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIHYgPSB0aGlzLnZlcnRleEp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgIHYgPSBuZXcgdmVydGV4XzEuVmVydGV4KHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdi54ID0geDtcbiAgICAgICAgICAgIHYueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHYpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUVkZ2UgPSBmdW5jdGlvbiAobFNpdGUsIHJTaXRlLCB2YSwgdmIpIHtcbiAgICAgICAgaWYgKHZhID09PSB2b2lkIDApIHsgdmEgPSBudWxsOyB9XG4gICAgICAgIGlmICh2YiA9PT0gdm9pZCAwKSB7IHZiID0gbnVsbDsgfVxuICAgICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZUp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIWVkZ2UpIHtcbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgZWRnZV8xLkVkZ2UobFNpdGUsIHJTaXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkZ2UubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UuclNpdGUgPSByU2l0ZTtcbiAgICAgICAgICAgIGVkZ2UudmEgPSBlZGdlLnZiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgIGlmICh2YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRFZGdlU3RhcnRwb2ludChlZGdlLCBsU2l0ZSwgclNpdGUsIHZhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RWRnZUVuZHBvaW50KGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbHNbbFNpdGUuaWRdLmhhbGZlZGdlcy5wdXNoKHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgbFNpdGUsIHJTaXRlKSk7XG4gICAgICAgIHRoaXMuY2VsbHNbclNpdGUuaWRdLmhhbGZlZGdlcy5wdXNoKHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgclNpdGUsIGxTaXRlKSk7XG4gICAgICAgIHJldHVybiBlZGdlO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlQm9yZGVyRWRnZSA9IGZ1bmN0aW9uIChsU2l0ZSwgdmEsIHZiKSB7XG4gICAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlSnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghZWRnZSkge1xuICAgICAgICAgICAgZWRnZSA9IG5ldyBlZGdlXzEuRWRnZShsU2l0ZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlZGdlLmxTaXRlID0gbFNpdGU7XG4gICAgICAgICAgICBlZGdlLnJTaXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlZGdlLnZhID0gdmE7XG4gICAgICAgIGVkZ2UudmIgPSB2YjtcbiAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICByZXR1cm4gZWRnZTtcbiAgICB9O1xuICAgIDtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5zZXRFZGdlU3RhcnRwb2ludCA9IGZ1bmN0aW9uIChlZGdlLCBsU2l0ZSwgclNpdGUsIHZlcnRleCkge1xuICAgICAgICBpZiAoIWVkZ2UudmEgJiYgIWVkZ2UudmIpIHtcbiAgICAgICAgICAgIGVkZ2UudmEgPSB2ZXJ0ZXg7XG4gICAgICAgICAgICBlZGdlLmxTaXRlID0gbFNpdGU7XG4gICAgICAgICAgICBlZGdlLnJTaXRlID0gclNpdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWRnZS5sU2l0ZSA9PT0gclNpdGUpIHtcbiAgICAgICAgICAgIGVkZ2UudmIgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlZGdlLnZhID0gdmVydGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5zZXRFZGdlRW5kcG9pbnQgPSBmdW5jdGlvbiAoZWRnZSwgbFNpdGUsIHJTaXRlLCB2ZXJ0ZXgpIHtcbiAgICAgICAgdGhpcy5zZXRFZGdlU3RhcnRwb2ludChlZGdlLCByU2l0ZSwgbFNpdGUsIHZlcnRleCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoc2l0ZSkge1xuICAgICAgICB2YXIgYmVhY2hzZWN0aW9uID0gdGhpcy5iZWFjaHNlY3Rpb25KdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFiZWFjaHNlY3Rpb24pIHtcbiAgICAgICAgICAgIGJlYWNoc2VjdGlvbiA9IG5ldyByYnRyZWVfMS5SQlRyZWVOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYmVhY2hzZWN0aW9uLnNpdGUgPSBzaXRlO1xuICAgICAgICByZXR1cm4gYmVhY2hzZWN0aW9uO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUubGVmdEJyZWFrUG9pbnQgPSBmdW5jdGlvbiAoYXJjLCBkaXJlY3RyaXgpIHtcbiAgICAgICAgdmFyIHNpdGUgPSBhcmMuc2l0ZSwgcmZvY3ggPSBzaXRlLngsIHJmb2N5ID0gc2l0ZS55LCBwYnkyID0gcmZvY3kgLSBkaXJlY3RyaXg7XG4gICAgICAgIGlmICghcGJ5Mikge1xuICAgICAgICAgICAgcmV0dXJuIHJmb2N4O1xuICAgICAgICB9XG4gICAgICAgIHZhciBsQXJjID0gYXJjLnByZXY7XG4gICAgICAgIGlmICghbEFyYykge1xuICAgICAgICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBzaXRlID0gbEFyYy5zaXRlO1xuICAgICAgICB2YXIgbGZvY3ggPSBzaXRlLngsIGxmb2N5ID0gc2l0ZS55LCBwbGJ5MiA9IGxmb2N5IC0gZGlyZWN0cml4O1xuICAgICAgICBpZiAoIXBsYnkyKSB7XG4gICAgICAgICAgICByZXR1cm4gbGZvY3g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhsID0gbGZvY3ggLSByZm9jeCwgYWJ5MiA9IDEgLyBwYnkyIC0gMSAvIHBsYnkyLCBiID0gaGwgLyBwbGJ5MjtcbiAgICAgICAgaWYgKGFieTIpIHtcbiAgICAgICAgICAgIHJldHVybiAoLWIgKyB0aGlzLnNxcnQoYiAqIGIgLSAyICogYWJ5MiAqIChobCAqIGhsIC8gKC0yICogcGxieTIpIC0gbGZvY3kgKyBwbGJ5MiAvIDIgKyByZm9jeSAtIHBieTIgLyAyKSkpIC8gYWJ5MiArIHJmb2N4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocmZvY3ggKyBsZm9jeCkgLyAyO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucmlnaHRCcmVha1BvaW50ID0gZnVuY3Rpb24gKGFyYywgZGlyZWN0cml4KSB7XG4gICAgICAgIHZhciByQXJjID0gYXJjLm5leHQ7XG4gICAgICAgIGlmIChyQXJjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0QnJlYWtQb2ludChyQXJjLCBkaXJlY3RyaXgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXRlID0gYXJjLnNpdGU7XG4gICAgICAgIHJldHVybiBzaXRlLnkgPT09IGRpcmVjdHJpeCA/IHNpdGUueCA6IEluZmluaXR5O1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZGV0YWNoQmVhY2hzZWN0aW9uID0gZnVuY3Rpb24gKGJlYWNoc2VjdGlvbikge1xuICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGJlYWNoc2VjdGlvbik7XG4gICAgICAgIHRoaXMuYmVhY2hsaW5lLnJlbW92ZU5vZGUoYmVhY2hzZWN0aW9uKTtcbiAgICAgICAgdGhpcy5iZWFjaHNlY3Rpb25KdW5reWFyZC5wdXNoKGJlYWNoc2VjdGlvbik7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5yZW1vdmVCZWFjaHNlY3Rpb24gPSBmdW5jdGlvbiAoYmVhY2hzZWN0aW9uKSB7XG4gICAgICAgIHZhciBjaXJjbGUgPSBiZWFjaHNlY3Rpb24uY2lyY2xlRXZlbnQsIHggPSBjaXJjbGUueCwgeSA9IGNpcmNsZS55Y2VudGVyLCB2ZXJ0ZXggPSB0aGlzLmNyZWF0ZVZlcnRleCh4LCB5KSwgcHJldmlvdXMgPSBiZWFjaHNlY3Rpb24ucHJldiwgbmV4dCA9IGJlYWNoc2VjdGlvbi5uZXh0LCBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucyA9IFtiZWFjaHNlY3Rpb25dLCBhYnNfZm4gPSBNYXRoLmFicztcbiAgICAgICAgdGhpcy5kZXRhY2hCZWFjaHNlY3Rpb24oYmVhY2hzZWN0aW9uKTtcbiAgICAgICAgdmFyIGxBcmMgPSBwcmV2aW91cztcbiAgICAgICAgd2hpbGUgKGxBcmMuY2lyY2xlRXZlbnQgJiZcbiAgICAgICAgICAgIGFic19mbih4IC0gbEFyYy5jaXJjbGVFdmVudC54KSA8IHRoaXMuZXBzKCkgJiZcbiAgICAgICAgICAgIGFic19mbih5IC0gbEFyYy5jaXJjbGVFdmVudC55Y2VudGVyKSA8IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgIHByZXZpb3VzID0gbEFyYy5wcmV2O1xuICAgICAgICAgICAgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMudW5zaGlmdChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoQmVhY2hzZWN0aW9uKGxBcmMpO1xuICAgICAgICAgICAgbEFyYyA9IHByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnVuc2hpZnQobEFyYyk7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgIHZhciByQXJjID0gbmV4dDtcbiAgICAgICAgd2hpbGUgKHJBcmMuY2lyY2xlRXZlbnQgJiZcbiAgICAgICAgICAgIGFic19mbih4IC0gckFyYy5jaXJjbGVFdmVudC54KSA8IHRoaXMuZXBzKCkgJiZcbiAgICAgICAgICAgIGFic19mbih5IC0gckFyYy5jaXJjbGVFdmVudC55Y2VudGVyKSA8IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgIG5leHQgPSByQXJjLm5leHQ7XG4gICAgICAgICAgICBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy5wdXNoKHJBcmMpO1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hCZWFjaHNlY3Rpb24ockFyYyk7XG4gICAgICAgICAgICByQXJjID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy5wdXNoKHJBcmMpO1xuICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KHJBcmMpO1xuICAgICAgICB2YXIgbkFyY3MgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy5sZW5ndGgsIGlBcmM7XG4gICAgICAgIGZvciAoaUFyYyA9IDE7IGlBcmMgPCBuQXJjczsgaUFyYysrKSB7XG4gICAgICAgICAgICByQXJjID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnNbaUFyY107XG4gICAgICAgICAgICBsQXJjID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnNbaUFyYyAtIDFdO1xuICAgICAgICAgICAgdGhpcy5zZXRFZGdlU3RhcnRwb2ludChyQXJjLmVkZ2UsIGxBcmMuc2l0ZSwgckFyYy5zaXRlLCB2ZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1swXTtcbiAgICAgICAgckFyYyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zW25BcmNzIC0gMV07XG4gICAgICAgIHJBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShsQXJjLnNpdGUsIHJBcmMuc2l0ZSwgdW5kZWZpbmVkLCB2ZXJ0ZXgpO1xuICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KHJBcmMpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuYWRkQmVhY2hzZWN0aW9uID0gZnVuY3Rpb24gKHNpdGUpIHtcbiAgICAgICAgdmFyIHggPSBzaXRlLngsIGRpcmVjdHJpeCA9IHNpdGUueTtcbiAgICAgICAgdmFyIGxBcmMsIHJBcmMsIGR4bCwgZHhyLCBub2RlID0gdGhpcy5iZWFjaGxpbmUucm9vdDtcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIGR4bCA9IHRoaXMubGVmdEJyZWFrUG9pbnQobm9kZSwgZGlyZWN0cml4KSAtIHg7XG4gICAgICAgICAgICBpZiAoZHhsID4gdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkeHIgPSB4IC0gdGhpcy5yaWdodEJyZWFrUG9pbnQobm9kZSwgZGlyZWN0cml4KTtcbiAgICAgICAgICAgICAgICBpZiAoZHhyID4gdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxBcmMgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHhsID4gLXRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxBcmMgPSBub2RlLnByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICByQXJjID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkeHIgPiAtdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByQXJjID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbEFyYyA9IHJBcmMgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3QXJjID0gdGhpcy5jcmVhdGVCZWFjaHNlY3Rpb24oc2l0ZSk7XG4gICAgICAgIHRoaXMuYmVhY2hsaW5lLmluc2VydFN1Y2Nlc3NvcihsQXJjLCBuZXdBcmMpO1xuICAgICAgICBpZiAoIWxBcmMgJiYgIXJBcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobEFyYyA9PT0gckFyYykge1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHJBcmMgPSB0aGlzLmNyZWF0ZUJlYWNoc2VjdGlvbihsQXJjLnNpdGUpO1xuICAgICAgICAgICAgdGhpcy5iZWFjaGxpbmUuaW5zZXJ0U3VjY2Vzc29yKG5ld0FyYywgckFyYyk7XG4gICAgICAgICAgICBuZXdBcmMuZWRnZSA9IHJBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShsQXJjLnNpdGUsIG5ld0FyYy5zaXRlKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KHJBcmMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsQXJjICYmICFyQXJjKSB7XG4gICAgICAgICAgICBuZXdBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShsQXJjLnNpdGUsIG5ld0FyYy5zaXRlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobEFyYyAhPT0gckFyYykge1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQockFyYyk7XG4gICAgICAgICAgICB2YXIgbFNpdGUgPSBsQXJjLnNpdGUsIGF4ID0gbFNpdGUueCwgYXkgPSBsU2l0ZS55LCBieCA9IHNpdGUueCAtIGF4LCBieSA9IHNpdGUueSAtIGF5LCByU2l0ZSA9IHJBcmMuc2l0ZSwgY3ggPSByU2l0ZS54IC0gYXgsIGN5ID0gclNpdGUueSAtIGF5LCBkID0gMiAqIChieCAqIGN5IC0gYnkgKiBjeCksIGhiID0gYnggKiBieCArIGJ5ICogYnksIGhjID0gY3ggKiBjeCArIGN5ICogY3ksIHZlcnRleCA9IHRoaXMuY3JlYXRlVmVydGV4KChjeSAqIGhiIC0gYnkgKiBoYykgLyBkICsgYXgsIChieCAqIGhjIC0gY3ggKiBoYikgLyBkICsgYXkpO1xuICAgICAgICAgICAgdGhpcy5zZXRFZGdlU3RhcnRwb2ludChyQXJjLmVkZ2UsIGxTaXRlLCByU2l0ZSwgdmVydGV4KTtcbiAgICAgICAgICAgIG5ld0FyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKGxTaXRlLCBzaXRlLCB1bmRlZmluZWQsIHZlcnRleCk7XG4gICAgICAgICAgICByQXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2Uoc2l0ZSwgclNpdGUsIHVuZGVmaW5lZCwgdmVydGV4KTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KHJBcmMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5hdHRhY2hDaXJjbGVFdmVudCA9IGZ1bmN0aW9uIChhcmMpIHtcbiAgICAgICAgdmFyIGxBcmMgPSBhcmMucHJldiwgckFyYyA9IGFyYy5uZXh0O1xuICAgICAgICBpZiAoIWxBcmMgfHwgIXJBcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbFNpdGUgPSBsQXJjLnNpdGUsIGNTaXRlID0gYXJjLnNpdGUsIHJTaXRlID0gckFyYy5zaXRlO1xuICAgICAgICBpZiAobFNpdGUgPT09IHJTaXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ4ID0gY1NpdGUueCwgYnkgPSBjU2l0ZS55LCBheCA9IGxTaXRlLnggLSBieCwgYXkgPSBsU2l0ZS55IC0gYnksIGN4ID0gclNpdGUueCAtIGJ4LCBjeSA9IHJTaXRlLnkgLSBieTtcbiAgICAgICAgdmFyIGQgPSAyICogKGF4ICogY3kgLSBheSAqIGN4KTtcbiAgICAgICAgaWYgKGQgPj0gLTJlLTEyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhID0gYXggKiBheCArIGF5ICogYXksIGhjID0gY3ggKiBjeCArIGN5ICogY3ksIHggPSAoY3kgKiBoYSAtIGF5ICogaGMpIC8gZCwgeSA9IChheCAqIGhjIC0gY3ggKiBoYSkgLyBkLCB5Y2VudGVyID0geSArIGJ5O1xuICAgICAgICB2YXIgY2lyY2xlRXZlbnQgPSB0aGlzLmNpcmNsZUV2ZW50SnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghY2lyY2xlRXZlbnQpIHtcbiAgICAgICAgICAgIGNpcmNsZUV2ZW50ID0gbmV3IHJidHJlZV8xLlJCVHJlZU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjaXJjbGVFdmVudC5hcmMgPSBhcmM7XG4gICAgICAgIGNpcmNsZUV2ZW50LnNpdGUgPSBjU2l0ZTtcbiAgICAgICAgY2lyY2xlRXZlbnQueCA9IHggKyBieDtcbiAgICAgICAgY2lyY2xlRXZlbnQueSA9IHljZW50ZXIgKyB0aGlzLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgIGNpcmNsZUV2ZW50LnljZW50ZXIgPSB5Y2VudGVyO1xuICAgICAgICBhcmMuY2lyY2xlRXZlbnQgPSBjaXJjbGVFdmVudDtcbiAgICAgICAgdmFyIHByZWRlY2Vzc29yID0gbnVsbCwgbm9kZSA9IHRoaXMuY2lyY2xlRXZlbnRzLnJvb3Q7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoY2lyY2xlRXZlbnQueSA8IG5vZGUueSB8fCAoY2lyY2xlRXZlbnQueSA9PT0gbm9kZS55ICYmIGNpcmNsZUV2ZW50LnggPD0gbm9kZS54KSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWRlY2Vzc29yID0gbm9kZS5wcmV2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWRlY2Vzc29yID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2lyY2xlRXZlbnRzLmluc2VydFN1Y2Nlc3NvcihwcmVkZWNlc3NvciwgY2lyY2xlRXZlbnQpO1xuICAgICAgICBpZiAoIXByZWRlY2Vzc29yKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2lyY2xlRXZlbnQgPSBjaXJjbGVFdmVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZGV0YWNoQ2lyY2xlRXZlbnQgPSBmdW5jdGlvbiAoYXJjKSB7XG4gICAgICAgIHZhciBjaXJjbGVFdmVudCA9IGFyYy5jaXJjbGVFdmVudDtcbiAgICAgICAgaWYgKGNpcmNsZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNpcmNsZUV2ZW50LnByZXYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2lyY2xlRXZlbnQgPSBjaXJjbGVFdmVudC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaXJjbGVFdmVudHMucmVtb3ZlTm9kZShjaXJjbGVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUV2ZW50SnVua3lhcmQucHVzaChjaXJjbGVFdmVudCk7XG4gICAgICAgICAgICBhcmMuY2lyY2xlRXZlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jb25uZWN0RWRnZSA9IGZ1bmN0aW9uIChlZGdlLCBiYm94KSB7XG4gICAgICAgIHZhciB2YiA9IGVkZ2UudmI7XG4gICAgICAgIGlmICghIXZiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmEgPSBlZGdlLnZhLCB4bCA9IGJib3gueGwsIHhyID0gYmJveC54ciwgeXQgPSBiYm94Lnl0LCB5YiA9IGJib3gueWIsIGxTaXRlID0gZWRnZS5sU2l0ZSwgclNpdGUgPSBlZGdlLnJTaXRlLCBseCA9IGxTaXRlLngsIGx5ID0gbFNpdGUueSwgcnggPSByU2l0ZS54LCByeSA9IHJTaXRlLnksIGZ4ID0gKGx4ICsgcngpIC8gMiwgZnkgPSAobHkgKyByeSkgLyAyLCBmbSwgZmI7XG4gICAgICAgIHRoaXMuY2VsbHNbbFNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNlbGxzW3JTaXRlLmlkXS5jbG9zZU1lID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJ5ICE9PSBseSkge1xuICAgICAgICAgICAgZm0gPSAobHggLSByeCkgLyAocnkgLSBseSk7XG4gICAgICAgICAgICBmYiA9IGZ5IC0gZm0gKiBmeDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGZ4IDwgeGwgfHwgZnggPj0geHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobHggPiByeCkge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueSA8IHl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoZngsIHl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueSA+PSB5Yikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoZngsIHliKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueSA+IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoZngsIHliKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueSA8IHl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChmeCwgeXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtIDwgLTEgfHwgZm0gPiAxKSB7XG4gICAgICAgICAgICBpZiAobHggPiByeCkge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueSA8IHl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKHl0IC0gZmIpIC8gZm0sIHl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueSA+PSB5Yikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKHliIC0gZmIpIC8gZm0sIHliKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueSA+IHliKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKHliIC0gZmIpIC8gZm0sIHliKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueSA8IHl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCgoeXQgLSBmYikgLyBmbSwgeXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGx5IDwgcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnggPCB4bCkge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KHhsLCBmbSAqIHhsICsgZmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS54ID49IHhyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgZm0gKiB4ciArIGZiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdmEgfHwgdmEueCA+IHhyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeHIsIGZtICogeHIgKyBmYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnggPCB4bCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeGwsIGZtICogeGwgKyBmYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWRnZS52YSA9IHZhO1xuICAgICAgICBlZGdlLnZiID0gdmI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY2xpcEVkZ2UgPSBmdW5jdGlvbiAoZWRnZSwgYmJveCkge1xuICAgICAgICB2YXIgYXggPSBlZGdlLnZhLngsIGF5ID0gZWRnZS52YS55LCBieCA9IGVkZ2UudmIueCwgYnkgPSBlZGdlLnZiLnksIHQwID0gMCwgdDEgPSAxLCBkeCA9IGJ4IC0gYXgsIGR5ID0gYnkgLSBheTtcbiAgICAgICAgdmFyIHEgPSBheCAtIGJib3gueGw7XG4gICAgICAgIGlmIChkeCA9PT0gMCAmJiBxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gLXEgLyBkeDtcbiAgICAgICAgaWYgKGR4IDwgMCkge1xuICAgICAgICAgICAgaWYgKHIgPCB0MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyIDwgdDEpIHtcbiAgICAgICAgICAgICAgICB0MSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHggPiAwKSB7XG4gICAgICAgICAgICBpZiAociA+IHQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPiB0MCkge1xuICAgICAgICAgICAgICAgIHQwID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxID0gYmJveC54ciAtIGF4O1xuICAgICAgICBpZiAoZHggPT09IDAgJiYgcSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByID0gcSAvIGR4O1xuICAgICAgICBpZiAoZHggPCAwKSB7XG4gICAgICAgICAgICBpZiAociA+IHQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPiB0MCkge1xuICAgICAgICAgICAgICAgIHQwID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyIDwgdDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA8IHQxKSB7XG4gICAgICAgICAgICAgICAgdDEgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHEgPSBheSAtIGJib3gueXQ7XG4gICAgICAgIGlmIChkeSA9PT0gMCAmJiBxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHIgPSAtcSAvIGR5O1xuICAgICAgICBpZiAoZHkgPCAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeSA+IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHEgPSBiYm94LnliIC0gYXk7XG4gICAgICAgIGlmIChkeSA9PT0gMCAmJiBxIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBxIC8gZHk7XG4gICAgICAgIGlmIChkeSA8IDApIHtcbiAgICAgICAgICAgIGlmIChyID4gdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA+IHQwKSB7XG4gICAgICAgICAgICAgICAgdDAgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPCB0MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyIDwgdDEpIHtcbiAgICAgICAgICAgICAgICB0MSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQwID4gMCkge1xuICAgICAgICAgICAgZWRnZS52YSA9IHRoaXMuY3JlYXRlVmVydGV4KGF4ICsgdDAgKiBkeCwgYXkgKyB0MCAqIGR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodDEgPCAxKSB7XG4gICAgICAgICAgICBlZGdlLnZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoYXggKyB0MSAqIGR4LCBheSArIHQxICogZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0MCA+IDAgfHwgdDEgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2VkZ2UubFNpdGUuaWRdLmNsb3NlTWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZWxsc1tlZGdlLnJTaXRlLmlkXS5jbG9zZU1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNsaXBFZGdlcyA9IGZ1bmN0aW9uIChiYm94KSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuZWRnZXMsIGlFZGdlID0gZWRnZXMubGVuZ3RoLCBlZGdlLCBhYnNfZm4gPSBNYXRoLmFicztcbiAgICAgICAgd2hpbGUgKGlFZGdlLS0pIHtcbiAgICAgICAgICAgIGVkZ2UgPSBlZGdlc1tpRWRnZV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdEVkZ2UoZWRnZSwgYmJveCkgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5jbGlwRWRnZShlZGdlLCBiYm94KSB8fFxuICAgICAgICAgICAgICAgIChhYnNfZm4oZWRnZS52YS54IC0gZWRnZS52Yi54KSA8IHRoaXMuZXBzKCkgJiYgYWJzX2ZuKGVkZ2UudmEueSAtIGVkZ2UudmIueSkgPCB0aGlzLmVwcygpKSkge1xuICAgICAgICAgICAgICAgIGVkZ2UudmEgPSBlZGdlLnZiID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlZGdlcy5zcGxpY2UoaUVkZ2UsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jbG9zZUNlbGxzID0gZnVuY3Rpb24gKGJib3gpIHtcbiAgICAgICAgdmFyIHhsID0gYmJveC54bCwgeHIgPSBiYm94LnhyLCB5dCA9IGJib3gueXQsIHliID0gYmJveC55YiwgY2VsbHMgPSB0aGlzLmNlbGxzLCBpQ2VsbCA9IGNlbGxzLmxlbmd0aCwgY2VsbCwgaUxlZnQsIGhhbGZlZGdlcywgbkhhbGZlZGdlcywgZWRnZSwgdmEsIHZiLCB2eiwgbGFzdEJvcmRlclNlZ21lbnQsIGFic19mbiA9IE1hdGguYWJzO1xuICAgICAgICB3aGlsZSAoaUNlbGwtLSkge1xuICAgICAgICAgICAgY2VsbCA9IGNlbGxzW2lDZWxsXTtcbiAgICAgICAgICAgIGlmICghY2VsbC5wcmVwYXJlSGFsZmVkZ2VzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2VsbC5jbG9zZU1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYWxmZWRnZXMgPSBjZWxsLmhhbGZlZGdlcztcbiAgICAgICAgICAgIG5IYWxmZWRnZXMgPSBoYWxmZWRnZXMubGVuZ3RoO1xuICAgICAgICAgICAgaUxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGlMZWZ0IDwgbkhhbGZlZGdlcykge1xuICAgICAgICAgICAgICAgIHZhID0gaGFsZmVkZ2VzW2lMZWZ0XS5nZXRFbmRwb2ludCgpO1xuICAgICAgICAgICAgICAgIHZ6ID0gaGFsZmVkZ2VzWyhpTGVmdCArIDEpICUgbkhhbGZlZGdlc10uZ2V0U3RhcnRwb2ludCgpO1xuICAgICAgICAgICAgICAgIGlmIChhYnNfZm4odmEueCAtIHZ6LngpID49IHRoaXMuZXBzKCkgfHwgYWJzX2ZuKHZhLnkgLSB2ei55KSA+PSB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odmEueCwgeGwpICYmIHRoaXMubGVzc1RoYW5XaXRoRXBzaWxvbih2YS55LCB5Yik6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueCwgeGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeGwsIGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueSA6IHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZhLnksIHliKSAmJiB0aGlzLmxlc3NUaGFuV2l0aEVwc2lsb24odmEueCwgeHIpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LnksIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueCA6IHhyLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS54LCB4cikgJiYgdGhpcy5ncmVhdGVyVGhhbldpdGhFcHNpbG9uKHZhLnksIHl0KTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4ciwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odmEueSwgeXQpICYmIHRoaXMuZ3JlYXRlclRoYW5XaXRoRXBzaWxvbih2YS54LCB4bCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueSwgeXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgobGFzdEJvcmRlclNlZ21lbnQgPyB2ei54IDogeGwsIHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei54LCB4bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgbGFzdEJvcmRlclNlZ21lbnQgPyB2ei55IDogeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LnksIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueCA6IHhyLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueCwgeHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeHIsIGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueSA6IHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiVm9yb25vaS5jbG9zZUNlbGxzKCkgPiB0aGlzIG1ha2VzIG5vIHNlbnNlIVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxsLmNsb3NlTWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFZvcm9ub2k7XG59KCkpO1xuZXhwb3J0cy5Wb3Jvbm9pID0gVm9yb25vaTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZvcm9ub2kuanMubWFwIiwiaW1wb3J0ICogYXMgcGtnIGZyb20gXCJ2b3Jvbm9panNcIjtcbmV4cG9ydCBjb25zdCBjYWxjVm9yb25vaSA9IChwb2ludHMpID0+IHtcbiAgICBjb25zdCB2b3Jvbm9pID0gbmV3IHBrZy5Wb3Jvbm9pKCk7XG4gICAgbGV0IG1pbl94ID0gMDtcbiAgICBsZXQgbWF4X3ggPSAwO1xuICAgIGxldCBtaW5feSA9IDA7XG4gICAgbGV0IG1heF95ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgIGlmIChwb2ludC54IDwgbWluX3gpXG4gICAgICAgICAgICBtaW5feCA9IHBvaW50Lng7XG4gICAgICAgIGlmIChwb2ludC54ID4gbWF4X3gpXG4gICAgICAgICAgICBtYXhfeCA9IHBvaW50Lng7XG4gICAgICAgIGlmIChwb2ludC55IDwgbWluX3kpXG4gICAgICAgICAgICBtaW5feSA9IHBvaW50Lnk7XG4gICAgICAgIGlmIChwb2ludC55ID4gbWF4X3kpXG4gICAgICAgICAgICBtYXhfeSA9IHBvaW50Lnk7XG4gICAgfVxuICAgIGxldCBiYm94ID0geyB4bDogbWluX3gsIHhyOiBtYXhfeCwgeXQ6IG1pbl95LCB5YjogbWF4X3kgfTtcbiAgICByZXR1cm4gdm9yb25vaS5jb21wdXRlKHBvaW50cywgYmJveCk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNoYXBlRnJvbUVkZ2VzKGVkZ2VzKSB7XG4gICAgaWYgKCFlZGdlcyB8fCBlZGdlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBmaXJzdF9lZGdlID0gZWRnZXMuc2hpZnQoKTtcbiAgICBsZXQgc3RhcnQgPSBmaXJzdF9lZGdlLmdldFN0YXJ0cG9pbnQoKTtcbiAgICBsZXQgZW5kID0gZmlyc3RfZWRnZS5nZXRFbmRwb2ludCgpO1xuICAgIHJlc3VsdC5wdXNoKGBNICR7c3RhcnQueH0gJHtzdGFydC55fWApO1xuICAgIHJlc3VsdC5wdXNoKGBMICR7ZW5kLnh9ICR7ZW5kLnl9YCk7XG4gICAgZm9yIChsZXQgZWRnZSBvZiBlZGdlcykge1xuICAgICAgICBsZXQgZW5kID0gZWRnZS5nZXRFbmRwb2ludCgpO1xuICAgICAgICByZXN1bHQucHVzaChgTCAke2VuZC54fSAke2VuZC55fWApO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChcIlpcIik7XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoZW1pY3ljbGUocmFkaXVzLCByb3dzLCBwb2ludHMsIGFuZ2xlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCB0b3RhbEFyY0xlbmd0aCA9IDA7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbCBhcmMgbGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgLSBpICogcmFkaXVzIC8gcm93cztcbiAgICAgICAgY29uc3QgYXJjTGVuZ3RoID0gYW5nbGUgLyAxODAgKiBNYXRoLlBJICogcjtcbiAgICAgICAgdG90YWxBcmNMZW5ndGggKz0gYXJjTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBkaXN0YW5jZUJldHdlZW5Qb2ludHMgPSB0b3RhbEFyY0xlbmd0aCAvIHBvaW50cztcbiAgICAvLyBjb25zb2xlLmxvZyh7dG90YWxBcmNMZW5ndGgsIGRpc3RhbmNlQmV0d2VlblBvaW50c30pXG4gICAgbGV0IHRvdGFsX3BvaW50cyA9IDA7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBwb2ludHNcbiAgICBsZXQgYSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgLSBpICogcmFkaXVzIC8gcm93cztcbiAgICAgICAgY29uc3QgYXJjTGVuZ3RoID0gYW5nbGUgLyAxODAgKiBNYXRoLlBJICogcjtcbiAgICAgICAgbGV0IHBvaW50c0luQXJjID0gTWF0aC5jZWlsKGFyY0xlbmd0aCAvIGRpc3RhbmNlQmV0d2VlblBvaW50cyk7XG4gICAgICAgIGlmICh0b3RhbF9wb2ludHMgKyBwb2ludHNJbkFyYyA+IHBvaW50cykge1xuICAgICAgICAgICAgcG9pbnRzSW5BcmMgPSBwb2ludHMgLSB0b3RhbF9wb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxEaXN0YW5jZUJldHdlZW5Qb2ludHMgPSBhcmNMZW5ndGggLyBwb2ludHNJbkFyYztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGFuZ2xlIC0gMTgwKSAvIDE4MCAqIE1hdGguUEkgLyAyO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50c0luQXJjOyBqKyspIHtcbiAgICAgICAgICAgIHRvdGFsX3BvaW50cysrO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoaiAqIGxvY2FsRGlzdGFuY2VCZXR3ZWVuUG9pbnRzIC8gcikgKyAobG9jYWxEaXN0YW5jZUJldHdlZW5Qb2ludHMgLyByIC8gMik7XG4gICAgICAgICAgICBjb25zdCB4ID0gLXIgKiBNYXRoLmNvcyhhbmdsZSAtIG9mZnNldCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gLXIgKiBNYXRoLnNpbihhbmdsZSAtIG9mZnNldCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGlkOiBpLCB4LCB5LCBhLCBhbmdsZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBhKys7XG4gICAgfVxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBhLmFuZ2xlIC0gYi5hbmdsZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIjxzY3JpcHQ+aW1wb3J0IHsgY2FsY1Zvcm9ub2ksIHNoYXBlRnJvbUVkZ2VzIH0gZnJvbSBcIi4vbGlicy92b3Jvbm9pXCI7XG5pbXBvcnQgeyBoZW1pY3ljbGUgfSBmcm9tIFwiLi9saWJzL2hlbWljeWNsZVwiO1xuZXhwb3J0IGxldCBkYXRhID0gW107XG5leHBvcnQgbGV0IHIgPSAzMDA7XG5leHBvcnQgbGV0IHJvd3MgPSAxMjtcbmV4cG9ydCBsZXQgZG90c2l6ZSA9IDU7XG5leHBvcnQgbGV0IHBhZGRpbmcgPSAxMDtcbmV4cG9ydCBsZXQgdG90YWxfc2VhdHM7XG5leHBvcnQgbGV0IGNvbG9yID0gXCJ3aGl0ZVwiO1xuZXhwb3J0IGxldCBmb250X3NpemUgPSAxMjtcbmV4cG9ydCBsZXQgYXJjID0gMTgwO1xuZXhwb3J0IGxldCB0ZXh0X3Bvc2l0aW9uID0gbnVsbDtcbmV4cG9ydCBsZXQgc2VsZWN0ZWRTaGFwZSA9IFwiY2lyY2xlXCI7XG5leHBvcnQgbGV0IGRpc3BsYXkgPSBbXCJwb2ludHNcIiwgXCJ0ZXh0XCJdO1xuZXhwb3J0IGxldCBjdXJyZW50X3BhcnR5ID0gbnVsbDtcbmxldCB0b3RhbF9vY2N1cGllZF9zZWF0cyA9IDA7XG5sZXQgcG9pbnRzID0gW107XG5sZXQgdm9yb25vaSA9IG51bGw7XG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xubGV0IHRvcF9wYWRkaW5nID0gMDtcbmxldCBib3R0b21fcGFkZGluZyA9IDA7XG5sZXQgbGVmdF9wYWRkaW5nID0gMDtcbmxldCByaWdodF9wYWRkaW5nID0gMDtcbmxldCBzdmdXaWR0aCA9IDA7XG5sZXQgc3ZnSGVpZ2h0ID0gMDtcbmxldCBoZXhhZ29uU2hhcGUgPSBcIk04Ni42MDI1NDAzNzg0NDM4NiAxMkwxNzMuMjA1MDgwNzU2ODg3NzIgNTBMMTczLjIwNTA4MDc1Njg4NzcyIDE1MEw4Ni42MDI1NDAzNzg0NDM4NiAyMDBMMCAxNTBMMCA1MFpcIjtcbiQ6IHtcbiAgaWYgKGFyYyA8IDEwKVxuICAgIGFyYyA9IDEwO1xuICBpZiAoYXJjID4gMzYwKVxuICAgIGFyYyA9IDM2MDtcbiAgY2FsY1BhZGRpbmcoKTtcbiAgZGF0YS5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG4gIHRvdGFsX29jY3VwaWVkX3NlYXRzID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIuY291bnQsIDApO1xuICBwb2ludHMgPSBoZW1pY3ljbGUociwgcm93cywgdG90YWxfc2VhdHMsIGFyYyk7XG4gIGxldCB4ID0gMDtcbiAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLmNvdW50OyBqKyspIHtcbiAgICAgIHBvaW50c1t4XS5kYXRhID0gZGF0YVtpXTtcbiAgICAgIHgrKztcbiAgICB9XG4gIH1cbiAgdm9yb25vaSA9IGNhbGNWb3Jvbm9pKHBvaW50cyk7XG4gIHN2Z1dpZHRoID0gciAqIDIgKyBsZWZ0X3BhZGRpbmcgKyByaWdodF9wYWRkaW5nO1xuICBzdmdIZWlnaHQgPSByICogMiArIHRvcF9wYWRkaW5nICsgYm90dG9tX3BhZGRpbmc7XG59XG5mdW5jdGlvbiBjYWxjUGFkZGluZygpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGFkZGluZykpIHtcbiAgICBpZiAocGFkZGluZy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRvcF9wYWRkaW5nID0gcGFkZGluZ1swXTtcbiAgICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZ1swXTtcbiAgICAgIGxlZnRfcGFkZGluZyA9IHBhZGRpbmdbMV07XG4gICAgICByaWdodF9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICB9IGVsc2UgaWYgKHBhZGRpbmcubGVuZ3RoID09PSA0KSB7XG4gICAgICB0b3BfcGFkZGluZyA9IHBhZGRpbmdbMF07XG4gICAgICBib3R0b21fcGFkZGluZyA9IHBhZGRpbmdbMV07XG4gICAgICBsZWZ0X3BhZGRpbmcgPSBwYWRkaW5nWzJdO1xuICAgICAgcmlnaHRfcGFkZGluZyA9IHBhZGRpbmdbM107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcF9wYWRkaW5nID0gcGFkZGluZztcbiAgICBib3R0b21fcGFkZGluZyA9IHBhZGRpbmc7XG4gICAgbGVmdF9wYWRkaW5nID0gcGFkZGluZztcbiAgICByaWdodF9wYWRkaW5nID0gcGFkZGluZztcbiAgfVxufVxuZnVuY3Rpb24gc2VsZWN0UGFydHkocG9pbnQpIHtcbiAgaWYgKHBvaW50LmRhdGEgJiYgIWNsaWNrZWQpXG4gICAgY3VycmVudF9wYXJ0eSA9IHBvaW50LmRhdGE7XG59XG5mdW5jdGlvbiBjbGlja1BhcnR5KHBvaW50KSB7XG4gIGlmICghcG9pbnQuZGF0YSlcbiAgICByZXR1cm47XG4gIGlmICghY3VycmVudF9wYXJ0eSkge1xuICAgIGN1cnJlbnRfcGFydHkgPSBwb2ludC5kYXRhO1xuICAgIGNsaWNrZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGNsaWNrZWQgJiYgY3VycmVudF9wYXJ0eS5pZCA9PT0gcG9pbnQuZGF0YS5pZCkge1xuICAgIGN1cnJlbnRfcGFydHkgPSBudWxsO1xuICAgIGNsaWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50X3BhcnR5ID0gcG9pbnQuZGF0YTtcbiAgICBjbGlja2VkID0gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gdW5zZWxlY3RQYXJ0eSgpIHtcbiAgaWYgKCFjbGlja2VkKVxuICAgIGN1cnJlbnRfcGFydHkgPSBudWxsO1xufVxuPC9zY3JpcHQ+XG5cbjxtYWluPlxuICAgIDxzdmcgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0+XG4gICAgICAgIDxnIGlkPVwiYXJjc1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3IgKyAobGVmdF9wYWRkaW5nKX0sICR7ciArICh0b3BfcGFkZGluZyl9KWB9IGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwiYXJjc1wiKX0+XG4gICAgICAgICAgICB7I2VhY2ggQXJyYXkocm93cykgYXMgXywgaX1cbiAgICAgICAgICAgICAgICA8IS0tIERyYXcgYSBzZW1pY2lyY2xlIGZvciBlYWNoIHJvdyAtLT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAke3IgLSAoaSAqIChyIC8gcm93cykpfSwwIEEgJHtyIC0gKGkgKiAociAvIHJvd3MpKX0sJHtyIC0gKGkgKiAociAvIHJvd3MpKX0gMCAwLDAgJHstKHIgLSAoaSAqIChyIC8gcm93cykpKX0sMGB9IGZpbGw9XCJ0cmFuc3BhcmVudFwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIG9wYWNpdHk9XCIwLjRcIiAvPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwicG9pbnRzXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIChsZWZ0X3BhZGRpbmcpfSwgJHtyICsgKHRvcF9wYWRkaW5nKX0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJwb2ludHNcIil9PlxuICAgICAgICAgICAgeyNlYWNoIHBvaW50cyBhcyBwb2ludH1cbiAgICAgICAgICAgICAgICB7I2lmIHNlbGVjdGVkU2hhcGUgPT09ICdoZXhhZ29uJ31cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9e2hleGFnb25TaGFwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3BvaW50Lnh9LCR7cG9pbnQueX0pIHJvdGF0ZSgtNSkgc2NhbGUoMC4wNylgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJ0eT17cG9pbnQuZGF0YT8uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtwb2ludC5kYXRhPy5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9e2N1cnJlbnRfcGFydHk/LmlkID8gcG9pbnQuZGF0YT8uaWQgPT09IGN1cnJlbnRfcGFydHk/LmlkID8gMSA6IDAuNSA6IDF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcnR5PXtwb2ludC5kYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN4PXtwb2ludC54fSBjeT17cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHI9e2RvdHNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtwb2ludC5kYXRhPy5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9e2N1cnJlbnRfcGFydHk/LmlkID8gcG9pbnQuZGF0YT8uaWQgPT09IGN1cnJlbnRfcGFydHk/LmlkID8gMSA6IDAuNSA6IDF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBpZD1cIm51bWJlcnNcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgKGxlZnRfcGFkZGluZyl9LCAke3IgKyAodG9wX3BhZGRpbmcpfSlgfSBjbGFzczpoaWRlPXshZGlzcGxheS5pbmNsdWRlcyhcIm51bWJlcnNcIil9PlxuICAgICAgICAgICAgeyNlYWNoIHBvaW50cyBhcyBwb2ludCwgaX1cbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtwb2ludC54fSB5PXtwb2ludC55fSB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj57IGAke2l9YCB9PC90ZXh0PlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwidm9yb25vaVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3IgKyBsZWZ0X3BhZGRpbmd9LCAke3IgKyB0b3BfcGFkZGluZ30pYH0+XG4gICAgICAgICAgICA8IS0tIERyYXcgVm9yb25vaSAtLT5cbiAgICAgICAgICAgIHsjZWFjaCB2b3Jvbm9pLmNlbGxzIGFzIGNlbGwsIGl9XG4gICAgICAgICAgICAgICAgeyNpZiAoY2VsbC5oYWxmZWRnZXM/Lmxlbmd0aCA+IDApfVxuICAgICAgICAgICAgICAgIDxwYXRoIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZvcm9ub2lfcGF0aFwiIFxuICAgICAgICAgICAgICAgICAgICBkPXtzaGFwZUZyb21FZGdlcyhjZWxsLmhhbGZlZGdlcykudG9TdHJpbmcoKX0gXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiIFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9e2Rpc3BsYXkuaW5jbHVkZXMoXCJ2b3Jvbm9pXCIpID8gXCJ3aGl0ZVwiIDogXCJ0cmFuc3BhcmVudFwifVxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9e2Rpc3BsYXkuaW5jbHVkZXMoXCJ2b3Jvbm9pXCIpID8gMSA6IDB9XG4gICAgICAgICAgICAgICAgICAgIG9uOm1vdXNlb3Zlcj17KCkgPT4ge3NlbGVjdFBhcnR5KGNlbGwuc2l0ZSk7fX0gXG4gICAgICAgICAgICAgICAgICAgIG9uOmZvY3VzPXsoKSA9PiBzZWxlY3RQYXJ0eShjZWxsLnNpdGUpfSBvbjptb3VzZW91dD17KCkgPT4gdW5zZWxlY3RQYXJ0eSgpfSBcbiAgICAgICAgICAgICAgICAgICAgb246Ymx1cj17KCkgPT4gdW5zZWxlY3RQYXJ0eSgpfSByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7IGNsaWNrUGFydHkoY2VsbC5zaXRlKX19XG4gICAgICAgICAgICAgICAgICAgIG9uOmtleXByZXNzPXsoZSkgPT4ge2lmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7Y2xpY2tQYXJ0eShjZWxsLnNpdGUpO319fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBpZD1cInRleHRcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt0ZXh0X3Bvc2l0aW9uPy54IHx8IHIgKyBsZWZ0X3BhZGRpbmd9LCAke3RleHRfcG9zaXRpb24/LnkgfHwgciArIHRvcF9wYWRkaW5nICsgMjB9KWB9IGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwidGV4dFwiKX0+XG4gICAgICAgICAgICA8IS0tIElucHV0IHRleHQgZGF0YSAtLT5cbiAgICAgICAgICAgIHsjaWYgKGN1cnJlbnRfcGFydHkpfVxuICAgICAgICAgICAgPHRleHQgeD17MH0geT17MH0gdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPXtjb2xvcn0gZm9udC1zaXplPXtmb250X3NpemV9PntgJHtjdXJyZW50X3BhcnR5LnRleHR9YH08L3RleHQ+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwicmVmZXJlbmNlUG9pbnRzXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIChsZWZ0X3BhZGRpbmcpfSwgJHtyICsgKHRvcF9wYWRkaW5nKX0pYH0gY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJyZWZlcmVuY2VQb2ludHNcIil9PlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD0wIHk9MTAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+MCwgMDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PTAgY3k9MCByPTIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGNsYXNzPVwicmVmZXJlbmNlX3BvaW50c1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9e3J9IHk9MTAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIiBmb250LXNpemU9XCI4XCI+e2Ake3J9LCAkezB9YH08L3RleHQ+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17cn0gY3k9ezB9IHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgeD17ciAtIDEwfSB5PXstciArIDEwfSB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiIGZvbnQtc2l6ZT1cIjhcIj57YCR7cn0sICR7LXJ9YH08L3RleHQ+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17cn0gY3k9ey1yfSByPTIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIGNsYXNzPVwicmVmZXJlbmNlX3BvaW50c1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9ey1yICsgMTB9IHk9ey1yICsgMTB9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPntgLSR7cn0sICR7LXJ9YH08L3RleHQ+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17LXJ9IGN5PXstcn0gcj0yIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PXstcn0geT17MTB9IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIndoaXRlXCIgZm9udC1zaXplPVwiOFwiPntgLSR7cn0sICR7MH1gfTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXstcn0gY3k9ezB9IHI9MiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG48L21haW4+XG5cbjxzdHlsZT5cblxuICAgIC5oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzZWxlY3RlZF95ZWFyID0gMjAyNDsgLy8gMjAyNCwgMjAxOSwgMjAxNFxuXHRleHBvcnQgbGV0IHNlbGVjdGVkX2VsZWN0aW9uID0gJ05hdGlvbmFsIEFzc2VtYmx5JzsgLy8gTmF0aW9uYWwgQXNzZW1ibHksIFByb3ZpbmNpYWwgTGVnaXNsYXR1cmVcblx0ZXhwb3J0IGxldCBzZWxlY3RlZF9yZWdpb24gPSAnTmF0aW9uYWwnOyAvLyBOYXRpb25hbCwgR2F1dGVuZywgV2VzdGVybiBDYXBlLCBldGMuXG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfZmllbGRzID0gWydQYXJ0eScsICdWb3RlcycsICdTZWF0cyddOyAvLyBvbmx5IGZvciB0YWJsZVxuPC9zY3JpcHQ+XG5cbjx0YWJsZT5cblx0PHRoZWFkPlxuXHRcdDx0cj5cblx0XHRcdHsjZWFjaCBzZWxlY3RlZF9maWVsZHMgYXMgZmllbGR9XG5cdFx0XHRcdDx0aD57ZmllbGR9PC90aD5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3RyPlxuXHQ8L3RoZWFkPlxuXHQ8dGJvZHk+XG5cdFx0PHRyPlxuXHRcdFx0PHRkPkFOQzwvdGQ+XG5cdFx0XHQ8dGQ+MTAsMDAwLDAwMDwvdGQ+XG5cdFx0XHQ8dGQ+MjAwPC90ZD5cblx0XHQ8L3RyPlxuXHRcdDx0cj5cblx0XHRcdDx0ZD5EQTwvdGQ+XG5cdFx0XHQ8dGQ+NSwwMDAsMDAwPC90ZD5cblx0XHRcdDx0ZD4xMDA8L3RkPlxuXHRcdDwvdHI+XG5cdFx0PHRyPlxuXHRcdFx0PHRkPkVGRjwvdGQ+XG5cdFx0XHQ8dGQ+MiwwMDAsMDAwPC90ZD5cblx0XHRcdDx0ZD40MDwvdGQ+XG5cdFx0PC90cj5cblx0PC90Ym9keT5cbjwvdGFibGU+XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IEhlbWljeWNsZSBmcm9tICdzdmVsdGUtaGVtaWN5Y2xlJztcblx0aW1wb3J0IFRhYmxlIGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL3dvcmRwcmVzcy1ibG9jay9zcmMvc3ZlbHRlL2NvbXBvbmVudHMvVGFibGUuc3ZlbHRlXCI7XG5cblx0ZXhwb3J0IGxldCB2aXN1YWxpc2F0aW9uID0gJ2hlbWljeWNsZSc7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfeWVhciA9IDIwMjQ7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfZWxlY3Rpb24gPSAnTmF0aW9uYWwgQXNzZW1ibHknO1xuXHRleHBvcnQgbGV0IHNlbGVjdGVkX3JlZ2lvbiA9ICdHYXV0ZW5nJztcblx0ZXhwb3J0IGxldCBzZWxlY3RlZF9maWVsZHMgPSBbJ1BhcnR5JywgJ1ZvdGVzJywgJ1NlYXRzJ107XG5cblx0bGV0IGRhdGEgPSBbXVxuXHRjb25zdCBjb2xvdXJzID0gW1xuXHRcdFwiI0ZGMDAwMFwiLFxuXHRcdFwiIzAwMDBGRlwiLFxuXHRcdFwiIzAwODAwMFwiLFxuXHRcdFwiI0ZGQTUwMFwiLFxuXHRcdFwiI0ZGRkYwMFwiLFxuXHRcdFwiIzgwMDA4MFwiLFxuXHRcdFwiI0ZGQzBDQlwiLFxuXHRcdFwiIzAwRkZGRlwiLFxuXHRcdFwiI0ZGMDBGRlwiLFxuXHRcdFwiIzAwMDAwMFwiLFxuXHRcdFwiIzgwODA4MFwiLFxuXHRcdFwiIzgwMDAwMFwiLFxuXHRcdFwiIzAwODA4MFwiLFxuXHRcdFwiIzgwMDA4MFwiLFxuXHRcdFwiIzAwMDA4MFwiLFxuXHRcdFwiIzgwODAwMFwiLFxuXHRcdFwiIzAwODAwMFwiXG5cdF1cblx0Y29uc3QgdG90YWxfc2VhdHMgPSA0MDA7XG5cdGNvbnN0IHJvd3M9IDEyO1xuXHRvbk1vdW50KGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBsaXZlX3Jlc3VsdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaWVjLWFwaS5yZXZlbmdpbmUuZGFpbHltYXZlcmljay5jby56YS9yZXN1bHRzL3NlYXRzL25hdGlvbmFsLzIwMTlcIik7XG5cdFx0Y29uc3QgbGl2ZV9yZXN1bHRzX2pzb24gPSBhd2FpdCBsaXZlX3Jlc3VsdHMuanNvbigpO1xuXHRcdGRhdGEgPSBsaXZlX3Jlc3VsdHNfanNvbi5wYXJ0eVJlc3VsdHMubWFwKChwYXJ0eSwgaWQpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkOiBpZCxcblx0XHRcdFx0dGV4dDogcGFydHkuQWJicmV2aWF0aW9uLFxuXHRcdFx0XHRjb3VudDogcGFydHkuU2VhdHMsXG5cdFx0XHRcdGNvbG9yOiBjb2xvdXJzW2lkXSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH0pO1xuPC9zY3JpcHQ+XG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwiaGVtaWN5Y2xlXCJ9XG5cdDxIZW1pY3ljbGUge2RhdGF9IHt0b3RhbF9zZWF0c30ge3Jvd3N9IC8+XG57L2lmfVxueyNpZiB2aXN1YWxpc2F0aW9uID09PSBcImNhcnRvXCJ9XG5cdDxoMT5DYXJ0bzwvaDE+XG5cdDx1bD5cblx0XHQ8bGk+WWVhcjoge3NlbGVjdGVkX3llYXJ9PC9saT5cblx0XHQ8bGk+RWxlY3Rpb246IHtzZWxlY3RlZF9lbGVjdGlvbn08L2xpPlxuXHRcdDxsaT5SZWdpb246IHtzZWxlY3RlZF9yZWdpb259PC9saT5cblx0PC91bD5cbnsvaWZ9XG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwidGFibGVcIn1cblx0PGgxPlRhYmxlPC9oMT5cblx0PFRhYmxlIHtzZWxlY3RlZF95ZWFyfSB7c2VsZWN0ZWRfZWxlY3Rpb259IHtzZWxlY3RlZF9yZWdpb259IHtzZWxlY3RlZF9maWVsZHN9IC8+XG57L2lmfVxuXG4iLCIvLyBpbXBvcnQgJy4vYXBwLmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuc3ZlbHRlJ1xuY29uc29sZS5sb2coXCJBcHBcIilcbi8vIEdldCBcImlkXCIgYXR0cmlidXRlIGZyb20gdGhlIGRpdiBlbGVtZW50IGluIHRoZSBibG9ja1xualF1ZXJ5KCgpID0+IHtcblx0Y29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay10ZW5sYXllci1lbGVjdGlvbi1lbmdpbmUnKTtcblx0dGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG5cdFx0bGV0IHByb3BzID0ge1xuXHRcdFx0aWQ6IHRhcmdldC5pZCxcblx0XHRcdHZpc3VhbGlzYXRpb246IGpRdWVyeSh0YXJnZXQpLmRhdGEoXCJ2aXN1YWxpc2F0aW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfeWVhcjogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX3llYXJcIiksXG5cdFx0XHRzZWxlY3RlZF9lbGVjdGlvbjogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX2VsZWN0aW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfcmVnaW9uOiBqUXVlcnkodGFyZ2V0KS5kYXRhKFwic2VsZWN0ZWRfcmVnaW9uXCIpLFxuXHRcdFx0c2VsZWN0ZWRfZmllbGRzOiBqUXVlcnkodGFyZ2V0KS5kYXRhKFwic2VsZWN0ZWRfZmllbGRzXCIpPy5zcGxpdChcIixcIikubWFwKHMgPT4gcy50cmltKCkpLFxuXHRcdH1cblx0XHRuZXcgQXBwKHtcblx0XHRcdHRhcmdldCxcblx0XHRcdHByb3BzXG5cdFx0fSlcblx0fSlcbn0pXG4vLyBleHBvcnQgZGVmYXVsdCBhcHBcbiJdLCJuYW1lcyI6WyJub29wIiwicnVuIiwiZm4iLCJibGFua19vYmplY3QiLCJydW5fYWxsIiwiZm5zIiwiaXNfZnVuY3Rpb24iLCJ0aGluZyIsInNhZmVfbm90X2VxdWFsIiwiYSIsImIiLCJpc19lbXB0eSIsIm9iaiIsImFwcGVuZCIsInRhcmdldCIsIm5vZGUiLCJpbnNlcnQiLCJhbmNob3IiLCJkZXRhY2giLCJkZXN0cm95X2VhY2giLCJpdGVyYXRpb25zIiwiZGV0YWNoaW5nIiwiaSIsImVsZW1lbnQiLCJuYW1lIiwic3ZnX2VsZW1lbnQiLCJ0ZXh0IiwiZGF0YSIsInNwYWNlIiwiZW1wdHkiLCJsaXN0ZW4iLCJldmVudCIsImhhbmRsZXIiLCJvcHRpb25zIiwiYXR0ciIsImF0dHJpYnV0ZSIsInZhbHVlIiwiY2hpbGRyZW4iLCJzZXRfZGF0YSIsInRvZ2dsZV9jbGFzcyIsInRvZ2dsZSIsImN1cnJlbnRfY29tcG9uZW50Iiwic2V0X2N1cnJlbnRfY29tcG9uZW50IiwiY29tcG9uZW50IiwiZ2V0X2N1cnJlbnRfY29tcG9uZW50Iiwib25Nb3VudCIsImRpcnR5X2NvbXBvbmVudHMiLCJiaW5kaW5nX2NhbGxiYWNrcyIsInJlbmRlcl9jYWxsYmFja3MiLCJmbHVzaF9jYWxsYmFja3MiLCJyZXNvbHZlZF9wcm9taXNlIiwidXBkYXRlX3NjaGVkdWxlZCIsInNjaGVkdWxlX3VwZGF0ZSIsImZsdXNoIiwiYWRkX3JlbmRlcl9jYWxsYmFjayIsInNlZW5fY2FsbGJhY2tzIiwiZmx1c2hpZHgiLCJzYXZlZF9jb21wb25lbnQiLCJ1cGRhdGUiLCJjYWxsYmFjayIsIiQkIiwiZGlydHkiLCJmbHVzaF9yZW5kZXJfY2FsbGJhY2tzIiwiZmlsdGVyZWQiLCJ0YXJnZXRzIiwiYyIsIm91dHJvaW5nIiwib3V0cm9zIiwiZ3JvdXBfb3V0cm9zIiwiY2hlY2tfb3V0cm9zIiwidHJhbnNpdGlvbl9pbiIsImJsb2NrIiwibG9jYWwiLCJ0cmFuc2l0aW9uX291dCIsImVuc3VyZV9hcnJheV9saWtlIiwiYXJyYXlfbGlrZV9vcl9pdGVyYXRvciIsImNyZWF0ZV9jb21wb25lbnQiLCJtb3VudF9jb21wb25lbnQiLCJmcmFnbWVudCIsImFmdGVyX3VwZGF0ZSIsIm5ld19vbl9kZXN0cm95IiwiZGVzdHJveV9jb21wb25lbnQiLCJtYWtlX2RpcnR5IiwiaW5pdCIsImluc3RhbmNlIiwiY3JlYXRlX2ZyYWdtZW50Iiwibm90X2VxdWFsIiwicHJvcHMiLCJhcHBlbmRfc3R5bGVzIiwicGFyZW50X2NvbXBvbmVudCIsInJlYWR5IiwicmV0IiwicmVzdCIsIm5vZGVzIiwiU3ZlbHRlQ29tcG9uZW50IiwiX19wdWJsaWNGaWVsZCIsInR5cGUiLCJjYWxsYmFja3MiLCJpbmRleCIsIlBVQkxJQ19WRVJTSU9OIiwicmJ0cmVlIiwiUkJUcmVlIiwic3VjY2Vzc29yIiwicGFyZW50IiwiZ3JhbmRwYSIsInVuY2xlIiwibGVmdCIsInJpZ2h0IiwibmV4dCIsImlzUmVkIiwic2libGluZyIsInAiLCJxIiwiUkJUcmVlTm9kZSIsInZlcnRleCIsIlZlcnRleCIsIngiLCJ5IiwiZWRnZSIsIkVkZ2UiLCJsU2l0ZSIsInJTaXRlIiwiY2VsbCIsIkNlbGwiLCJzaXRlIiwiaGFsZmVkZ2VzIiwiaUhhbGZlZGdlIiwibmVpZ2hib3JzIiwieG1pbiIsInltaW4iLCJ4bWF4IiwieW1heCIsInYiLCJ2eCIsInZ5IiwiaGFsZmVkZ2UiLCJwMCIsInAxIiwiciIsImRpYWdyYW0iLCJEaWFncmFtIiwiSGFsZmVkZ2UiLCJ2YSIsInZiIiwidm9yb25vaSIsInJidHJlZV8xIiwicmVxdWlyZSQkMCIsInZlcnRleF8xIiwicmVxdWlyZSQkMSIsImVkZ2VfMSIsInJlcXVpcmUkJDIiLCJjZWxsXzEiLCJyZXF1aXJlJCQzIiwiZGlhZ3JhbV8xIiwicmVxdWlyZSQkNCIsImhhbGZlZGdlXzEiLCJyZXF1aXJlJCQ1IiwiVm9yb25vaSIsInNpdGVzIiwiYmJveCIsInN0YXJ0VGltZSIsInNpdGVFdmVudHMiLCJzaXRlaWQiLCJ4c2l0ZXgiLCJ4c2l0ZXkiLCJjZWxscyIsImNpcmNsZSIsInN0b3BUaW1lIiwiZXBzIiwibiIsImJlYWNoc2VjdGlvbiIsImFyYyIsImRpcmVjdHJpeCIsInJmb2N4IiwicmZvY3kiLCJwYnkyIiwibEFyYyIsImxmb2N4IiwibGZvY3kiLCJwbGJ5MiIsImhsIiwiYWJ5MiIsInJBcmMiLCJwcmV2aW91cyIsImRpc2FwcGVhcmluZ1RyYW5zaXRpb25zIiwiYWJzX2ZuIiwibkFyY3MiLCJpQXJjIiwiZHhsIiwiZHhyIiwibmV3QXJjIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJjeCIsImN5IiwiZCIsImhiIiwiaGMiLCJjU2l0ZSIsImhhIiwieWNlbnRlciIsImNpcmNsZUV2ZW50IiwicHJlZGVjZXNzb3IiLCJ4bCIsInhyIiwieXQiLCJ5YiIsImx4IiwibHkiLCJyeCIsInJ5IiwiZngiLCJmeSIsImZtIiwiZmIiLCJ0MCIsInQxIiwiZHgiLCJkeSIsImVkZ2VzIiwiaUVkZ2UiLCJpQ2VsbCIsImlMZWZ0IiwibkhhbGZlZGdlcyIsInZ6IiwibGFzdEJvcmRlclNlZ21lbnQiLCJWb3Jvbm9pXzEiLCJjYWxjVm9yb25vaSIsInBvaW50cyIsInBrZy5Wb3Jvbm9pIiwibWluX3giLCJtYXhfeCIsIm1pbl95IiwibWF4X3kiLCJwb2ludCIsInNoYXBlRnJvbUVkZ2VzIiwicmVzdWx0IiwiZmlyc3RfZWRnZSIsInN0YXJ0IiwiZW5kIiwiaGVtaWN5Y2xlIiwicmFkaXVzIiwicm93cyIsImFuZ2xlIiwidG90YWxBcmNMZW5ndGgiLCJhcmNMZW5ndGgiLCJkaXN0YW5jZUJldHdlZW5Qb2ludHMiLCJ0b3RhbF9wb2ludHMiLCJwb2ludHNJbkFyYyIsImxvY2FsRGlzdGFuY2VCZXR3ZWVuUG9pbnRzIiwib2Zmc2V0IiwiaiIsInBhdGgiLCJwYXRoX2RfdmFsdWUiLCJjdHgiLCJfYSIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiY2lyY2xlX2N4X3ZhbHVlIiwiY2lyY2xlX2N5X3ZhbHVlIiwiY2lyY2xlX29wYWNpdHlfdmFsdWUiLCJoZXhhZ29uU2hhcGUiLCJwYXRoX3RyYW5zZm9ybV92YWx1ZSIsInBhdGhfb3BhY2l0eV92YWx1ZSIsImNyZWF0ZV9pZl9ibG9ja18yIiwidGV4dF8xIiwidGV4dF8xX3hfdmFsdWUiLCJ0ZXh0XzFfeV92YWx1ZSIsInBhdGhfc3Ryb2tlX3dpZHRoX3ZhbHVlIiwiaWZfYmxvY2siLCJjcmVhdGVfaWZfYmxvY2tfMSIsInRfdmFsdWUiLCJ0IiwidDFfdmFsdWUiLCJ0Ml92YWx1ZSIsInQzX3ZhbHVlIiwidDRfdmFsdWUiLCJlYWNoX3ZhbHVlXzMiLCJlYWNoX3ZhbHVlIiwiY3JlYXRlX2lmX2Jsb2NrIiwiZzAiLCJnMF90cmFuc2Zvcm1fdmFsdWUiLCJnMSIsImcxX3RyYW5zZm9ybV92YWx1ZSIsImcyIiwiZzJfdHJhbnNmb3JtX3ZhbHVlIiwiZzMiLCJnM190cmFuc2Zvcm1fdmFsdWUiLCJnNCIsImc0X3RyYW5zZm9ybV92YWx1ZSIsInRleHQyIiwidGV4dDJfeF92YWx1ZSIsInRleHQyX3lfdmFsdWUiLCJ0ZXh0MyIsInRleHQzX3hfdmFsdWUiLCJ0ZXh0M195X3ZhbHVlIiwiZzEwIiwiZzEwX3RyYW5zZm9ybV92YWx1ZSIsIm1haW4iLCJzdmciLCJnNSIsInRleHQwIiwiY2lyY2xlMCIsImc2IiwidGV4dDEiLCJjaXJjbGUxIiwiZzciLCJjaXJjbGUyIiwiZzgiLCJjaXJjbGUzIiwiZzkiLCJ0ZXh0NCIsImNpcmNsZTQiLCJ0MiIsInQzIiwidDQiLCIkJHByb3BzIiwiZG90c2l6ZSIsInBhZGRpbmciLCJ0b3RhbF9zZWF0cyIsImNvbG9yIiwiZm9udF9zaXplIiwidGV4dF9wb3NpdGlvbiIsInNlbGVjdGVkU2hhcGUiLCJkaXNwbGF5IiwiY3VycmVudF9wYXJ0eSIsImNsaWNrZWQiLCJ0b3BfcGFkZGluZyIsImJvdHRvbV9wYWRkaW5nIiwibGVmdF9wYWRkaW5nIiwicmlnaHRfcGFkZGluZyIsInN2Z1dpZHRoIiwic3ZnSGVpZ2h0IiwiY2FsY1BhZGRpbmciLCIkJGludmFsaWRhdGUiLCJzZWxlY3RQYXJ0eSIsImNsaWNrUGFydHkiLCJ1bnNlbGVjdFBhcnR5IiwiZSIsImFjYyIsImN1ciIsInRoIiwidGFibGUiLCJ0aGVhZCIsInRyMCIsInRib2R5Iiwic2VsZWN0ZWRfeWVhciIsInNlbGVjdGVkX2VsZWN0aW9uIiwic2VsZWN0ZWRfcmVnaW9uIiwic2VsZWN0ZWRfZmllbGRzIiwiaDEiLCJ1bCIsImxpMCIsImxpMSIsImxpMiIsImlmX2Jsb2NrMCIsImlmX2Jsb2NrMSIsImlmX2Jsb2NrMiIsInZpc3VhbGlzYXRpb24iLCJjb2xvdXJzIiwibGl2ZV9yZXN1bHRzX2pzb24iLCJwYXJ0eSIsImlkIiwicyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7O0FBQ08sU0FBU0EsS0FBTztBQUFFO0FBc0NsQixTQUFTQyxHQUFJQyxHQUFJO0FBQ3ZCLFNBQU9BLEVBQUU7QUFDVjtBQUVPLFNBQVNDLEtBQWU7QUFDOUIsU0FBTyx1QkFBTyxPQUFPLElBQUk7QUFDMUI7QUFNTyxTQUFTQyxHQUFRQyxHQUFLO0FBQzVCLEVBQUFBLEVBQUksUUFBUUosRUFBRztBQUNoQjtBQU1PLFNBQVNLLEdBQVlDLEdBQU87QUFDbEMsU0FBTyxPQUFPQSxLQUFVO0FBQ3pCO0FBR08sU0FBU0MsR0FBZUMsR0FBR0MsR0FBRztBQUNwQyxTQUFPRCxLQUFLQSxJQUFJQyxLQUFLQSxJQUFJRCxNQUFNQyxLQUFNRCxLQUFLLE9BQU9BLEtBQU0sWUFBYSxPQUFPQSxLQUFNO0FBQ2xGO0FBc0RPLFNBQVNFLEdBQVNDLEdBQUs7QUFDN0IsU0FBTyxPQUFPLEtBQUtBLENBQUcsRUFBRSxXQUFXO0FBQ3BDO0FDb0JPLFNBQVNDLEVBQU9DLEdBQVFDLEdBQU07QUFDcEMsRUFBQUQsRUFBTyxZQUFZQyxDQUFJO0FBQ3hCO0FBOEZPLFNBQVNDLEVBQU9GLEdBQVFDLEdBQU1FLEdBQVE7QUFDNUMsRUFBQUgsRUFBTyxhQUFhQyxHQUFNRSxLQUFVLElBQUk7QUFDekM7QUFvQk8sU0FBU0MsRUFBT0gsR0FBTTtBQUM1QixFQUFJQSxFQUFLLGNBQ1JBLEVBQUssV0FBVyxZQUFZQSxDQUFJO0FBRWxDO0FBSU8sU0FBU0ksR0FBYUMsR0FBWUMsR0FBVztBQUNu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O0FBRVosRUFEZ0IsU0FBUyxpQkFBaUIsb0NBQW9DLEVBQ3RFLFFBQVEsQ0FBQWhXLE1BQVU7QXJCTjNCLFFBQUFtUDtBcUJPRSxRQUFJMUssSUFBUTtBQUFBLE1BQ1gsSUFBSXpFLEVBQU87QUFBQSxNQUNYLGVBQWUsT0FBT0EsQ0FBTSxFQUFFLEtBQUssZUFBZTtBQUFBLE1BQ2xELGVBQWUsT0FBT0EsQ0FBTSxFQUFFLEtBQUssZUFBZTtBQUFBLE1BQ2xELG1CQUFtQixPQUFPQSxDQUFNLEVBQUUsS0FBSyxtQkFBbUI7QUFBQSxNQUMxRCxpQkFBaUIsT0FBT0EsQ0FBTSxFQUFFLEtBQUssaUJBQWlCO0FBQUEsTUFDdEQsa0JBQWlCbVAsSUFBQSxPQUFPblAsQ0FBTSxFQUFFLEtBQUssaUJBQWlCLE1BQXJDLGdCQUFBbVAsRUFBd0MsTUFBTSxLQUFLLElBQUksQ0FBQThHLE1BQUtBLEVBQUUsS0FBSTtBQUFBLElBQ25GO0FBQ0QsUUFBSUMsR0FBSTtBQUFBLE1BQ1AsUUFBQWxXO0FBQUEsTUFDQSxPQUFBeUU7QUFBQSxJQUNILENBQUc7QUFBQSxFQUNILENBQUU7QUFDRixDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4XX0=
