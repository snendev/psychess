/* https://cdn.esm.sh/v46/object-assign@4.1.1/deno/object-assign.js */
const mod9 = (async () => {
    var b = Object.create;
    var s = Object.defineProperty;
    var p = Object.getOwnPropertyDescriptor;
    var O = Object.getOwnPropertyNames;
    var j = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty;
    var m = r => s(r, "__esModule", { value: !0 });
    var v = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
    var y = (r, e, t) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of O(e))
                !g.call(r, n) && n !== "default" && s(r, n, { get: () => e[n], enumerable: !(t = p(e, n)) || t.enumerable });
        return r;
    }, h = r => y(m(s(r != null ? b(j(r)) : {}, "default", r && r.__esModule && "default" in r ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
    var l = v((q, i) => {
        "use strict";
        var u = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
        function P(r) {
            if (r == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(r);
        }
        function E() {
            try {
                if (!Object.assign)
                    return !1;
                var r = new String("abc");
                if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
                    return !1;
                for (var e = {}, t = 0; t < 10; t++)
                    e["_" + String.fromCharCode(t)] = t;
                var n = Object.getOwnPropertyNames(e).map(function (o) { return e[o]; });
                if (n.join("") !== "0123456789")
                    return !1;
                var a = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (o) { a[o] = o; }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
            }
            catch (o) {
                return !1;
            }
        }
        i.exports = E() ? Object.assign : function (r, e) {
            for (var t, n = P(r), a, o = 1; o < arguments.length; o++) {
                t = Object(arguments[o]);
                for (var f in t)
                    d.call(t, f) && (n[f] = t[f]);
                if (u) {
                    a = u(t);
                    for (var c = 0; c < a.length; c++)
                        w.call(t, a[c]) && (n[a[c]] = t[a[c]]);
                }
            }
            return n;
        };
    });
    var S = h(l());
    var export_default = S.default;
    return { default: export_default };
})();
const mod5 = (async () => {
    const __object_assign$ = (await mod9).default;
    var W = Object.create;
    var h = Object.defineProperty;
    var Y = Object.getOwnPropertyDescriptor;
    var G = Object.getOwnPropertyNames;
    var J = Object.getPrototypeOf, K = Object.prototype.hasOwnProperty;
    var Q = e => h(e, "__esModule", { value: !0 });
    var X = e => {
        if (typeof require != "undefined")
            return require(e);
        throw new Error("Dynamic require of \"" + e + "\" is not supported");
    };
    var j = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Z = (e, t, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of G(t))
                !K.call(e, o) && o !== "default" && h(e, o, { get: () => t[o], enumerable: !(r = Y(t, o)) || r.enumerable });
        return e;
    }, O = e => Z(Q(h(e != null ? W(J(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
    var z = j(n => {
        "use strict";
        var E = __object_assign$, y = 60103, P = 60106;
        n.Fragment = 60107;
        n.StrictMode = 60108;
        n.Profiler = 60114;
        var x = 60109, I = 60110, w = 60112;
        n.Suspense = 60113;
        var A = 60115, F = 60116;
        typeof Symbol == "function" && Symbol.for && (l = Symbol.for, y = l("react.element"), P = l("react.portal"), n.Fragment = l("react.fragment"), n.StrictMode = l("react.strict_mode"), n.Profiler = l("react.profiler"), x = l("react.provider"), I = l("react.context"), w = l("react.forward_ref"), n.Suspense = l("react.suspense"), A = l("react.memo"), F = l("react.lazy"));
        var l, L = typeof Symbol == "function" && Symbol.iterator;
        function b(e) { return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null); }
        function _(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
                t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var q = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, D = {};
        function d(e, t, r) { this.props = e, this.context = t, this.refs = D, this.updater = r || q; }
        d.prototype.isReactComponent = {};
        d.prototype.setState = function (e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null)
                throw Error(_(85));
            this.updater.enqueueSetState(this, e, t, "setState");
        };
        d.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
        function M() { }
        M.prototype = d.prototype;
        function S(e, t, r) { this.props = e, this.context = t, this.refs = D, this.updater = r || q; }
        var C = S.prototype = new M;
        C.constructor = S;
        E(C, d.prototype);
        C.isPureReactComponent = !0;
        var R = { current: null }, N = Object.prototype.hasOwnProperty, U = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
            var o, u = {}, c = null, f = null;
            if (t != null)
                for (o in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)
                    N.call(t, o) && !U.hasOwnProperty(o) && (u[o] = t[o]);
            var s = arguments.length - 2;
            if (s === 1)
                u.children = r;
            else if (1 < s) {
                for (var i = Array(s), p = 0; p < s; p++)
                    i[p] = arguments[p + 2];
                u.children = i;
            }
            if (e && e.defaultProps)
                for (o in s = e.defaultProps, s)
                    u[o] === void 0 && (u[o] = s[o]);
            return { $$typeof: y, type: e, key: c, ref: f, props: u, _owner: R.current };
        }
        function ee(e, t) { return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
        function k(e) { return typeof e == "object" && e !== null && e.$$typeof === y; }
        function te(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (r) { return t[r]; }); }
        var V = /\/+/g;
        function $(e, t) { return typeof e == "object" && e !== null && e.key != null ? te("" + e.key) : t.toString(36); }
        function v(e, t, r, o, u) {
            var c = typeof e;
            (c === "undefined" || c === "boolean") && (e = null);
            var f = !1;
            if (e === null)
                f = !0;
            else
                switch (c) {
                    case "string":
                    case "number":
                        f = !0;
                        break;
                    case "object": switch (e.$$typeof) {
                        case y:
                        case P: f = !0;
                    }
                }
            if (f)
                return f = e, u = u(f), e = o === "" ? "." + $(f, 0) : o, Array.isArray(u) ? (r = "", e != null && (r = e.replace(V, "$&/") + "/"), v(u, t, r, "", function (p) { return p; })) : u != null && (k(u) && (u = ee(u, r + (!u.key || f && f.key === u.key ? "" : ("" + u.key).replace(V, "$&/") + "/") + e)), t.push(u)), 1;
            if (f = 0, o = o === "" ? "." : o + ":", Array.isArray(e))
                for (var s = 0; s < e.length; s++) {
                    c = e[s];
                    var i = o + $(c, s);
                    f += v(c, t, r, i, u);
                }
            else if (i = b(e), typeof i == "function")
                for (e = i.call(e), s = 0; !(c = e.next()).done;)
                    c = c.value, i = o + $(c, s++), f += v(c, t, r, i, u);
            else if (c === "object")
                throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
            return f;
        }
        function m(e, t, r) {
            if (e == null)
                return e;
            var o = [], u = 0;
            return v(e, o, "", "", function (c) { return t.call(r, c, u++); }), o;
        }
        function re(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(), e._status = 0, e._result = t, t.then(function (r) { e._status === 0 && (r = r.default, e._status = 1, e._result = r); }, function (r) { e._status === 0 && (e._status = 2, e._result = r); });
            }
            if (e._status === 1)
                return e._result;
            throw e._result;
        }
        var B = { current: null };
        function a() {
            var e = B.current;
            if (e === null)
                throw Error(_(321));
            return e;
        }
        var ne = { ReactCurrentDispatcher: B, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: R, IsSomeRendererActing: { current: !1 }, assign: E };
        n.Children = { map: m, forEach: function (e, t, r) { m(e, function () { t.apply(this, arguments); }, r); }, count: function (e) { var t = 0; return m(e, function () { t++; }), t; }, toArray: function (e) { return m(e, function (t) { return t; }) || []; }, only: function (e) {
                if (!k(e))
                    throw Error(_(143));
                return e;
            } };
        n.Component = d;
        n.PureComponent = S;
        n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne;
        n.cloneElement = function (e, t, r) {
            if (e == null)
                throw Error(_(267, e));
            var o = E({}, e.props), u = e.key, c = e.ref, f = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (c = t.ref, f = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps)
                    var s = e.type.defaultProps;
                for (i in t)
                    N.call(t, i) && !U.hasOwnProperty(i) && (o[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
            }
            var i = arguments.length - 2;
            if (i === 1)
                o.children = r;
            else if (1 < i) {
                s = Array(i);
                for (var p = 0; p < i; p++)
                    s[p] = arguments[p + 2];
                o.children = s;
            }
            return { $$typeof: y, type: e.type, key: u, ref: c, props: o, _owner: f };
        };
        n.createContext = function (e, t) { return t === void 0 && (t = null), e = { $$typeof: I, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: x, _context: e }, e.Consumer = e; };
        n.createElement = T;
        n.createFactory = function (e) { var t = T.bind(null, e); return t.type = e, t; };
        n.createRef = function () { return { current: null }; };
        n.forwardRef = function (e) { return { $$typeof: w, render: e }; };
        n.isValidElement = k;
        n.lazy = function (e) { return { $$typeof: F, _payload: { _status: -1, _result: e }, _init: re }; };
        n.memo = function (e, t) { return { $$typeof: A, type: e, compare: t === void 0 ? null : t }; };
        n.useCallback = function (e, t) { return a().useCallback(e, t); };
        n.useContext = function (e, t) { return a().useContext(e, t); };
        n.useDebugValue = function () { };
        n.useEffect = function (e, t) { return a().useEffect(e, t); };
        n.useImperativeHandle = function (e, t, r) { return a().useImperativeHandle(e, t, r); };
        n.useLayoutEffect = function (e, t) { return a().useLayoutEffect(e, t); };
        n.useMemo = function (e, t) { return a().useMemo(e, t); };
        n.useReducer = function (e, t, r) { return a().useReducer(e, t, r); };
        n.useRef = function (e) { return a().useRef(e); };
        n.useState = function (e) { return a().useState(e); };
        n.version = "17.0.2";
    });
    var g = j((se, H) => {
        "use strict";
        H.exports = z();
    });
    var oe = O(g()), ue = O(g()), { Fragment: fe, StrictMode: le, Profiler: pe, Suspense: ae, Children: ye, Component: de, PureComponent: _e, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, cloneElement: me, createContext: he, createElement: Ee, createFactory: Se, createRef: Ce, forwardRef: Re, isValidElement: ke, lazy: $e, memo: ge, useCallback: je, useContext: Oe, useDebugValue: Pe, useEffect: xe, useImperativeHandle: Ie, useLayoutEffect: we, useMemo: Ae, useReducer: Fe, useRef: Le, useState: qe, version: De } = oe;
    var export_default = ue.default;
    return { Children: ye, Component: de, Fragment: fe, Profiler: pe, PureComponent: _e, StrictMode: le, Suspense: ae, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, cloneElement: me, createContext: he, createElement: Ee, createFactory: Se, createRef: Ce, default: export_default, forwardRef: Re, isValidElement: ke, lazy: $e, memo: ge, useCallback: je, useContext: Oe, useDebugValue: Pe, useEffect: xe, useImperativeHandle: Ie, useLayoutEffect: we, useMemo: Ae, useReducer: Fe, useRef: Le, useState: qe, version: De };
})();
const mod = (async () => {
    const { default: _default } = await mod5;
    return { default: _default, ...await mod5 };
})();
const mod10 = (async () => {
    var D = Object.create;
    var j = Object.defineProperty;
    var z = Object.getOwnPropertyDescriptor;
    var B = Object.getOwnPropertyNames;
    var G = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty;
    var ne = e => j(e, "__esModule", { value: !0 });
    var H = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
    var te = (e, n, t) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let l of B(n))
                !ee.call(e, l) && l !== "default" && j(e, l, { get: () => n[l], enumerable: !(t = z(n, l)) || t.enumerable });
        return e;
    }, J = e => te(ne(j(e != null ? D(G(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
    var $ = H(r => {
        "use strict";
        var _, v, g, C;
        typeof performance == "object" && typeof performance.now == "function" ? (K = performance, r.unstable_now = function () { return K.now(); }) : (F = Date, Q = F.now(), r.unstable_now = function () { return F.now() - Q; });
        var K, F, Q;
        typeof window == "undefined" || typeof MessageChannel != "function" ? (y = null, L = null, N = function () {
            if (y !== null)
                try {
                    var e = r.unstable_now();
                    y(!0, e), y = null;
                }
                catch (n) {
                    throw setTimeout(N, 0), n;
                }
        }, _ = function (e) { y !== null ? setTimeout(_, 0, e) : (y = e, setTimeout(N, 0)); }, v = function (e, n) { L = setTimeout(e, n); }, g = function () { clearTimeout(L); }, r.unstable_shouldYield = function () { return !1; }, C = r.unstable_forceFrameRate = function () { }) : (S = window.setTimeout, X = window.clearTimeout, typeof console != "undefined" && (Z = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof Z != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), h = !1, w = null, P = -1, E = 5, R = 0, r.unstable_shouldYield = function () { return r.unstable_now() >= R; }, C = function () { }, r.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1000 / e) : 5; }, q = new MessageChannel, x = q.port2, q.port1.onmessage = function () {
            if (w !== null) {
                var e = r.unstable_now();
                R = e + E;
                try {
                    w(!0, e) ? x.postMessage(null) : (h = !1, w = null);
                }
                catch (n) {
                    throw x.postMessage(null), n;
                }
            }
            else
                h = !1;
        }, _ = function (e) { w = e, h || (h = !0, x.postMessage(null)); }, v = function (e, n) { P = S(function () { e(r.unstable_now()); }, n); }, g = function () { X(P), P = -1; });
        var y, L, N, S, X, Z, h, w, P, E, R, q, x;
        function Y(e, n) {
            var t = e.length;
            e.push(n);
            e: for (;;) {
                var l = t - 1 >>> 1, o = e[l];
                if (o !== void 0 && 0 < I(o, n))
                    e[l] = n, e[t] = o, t = l;
                else
                    break e;
            }
        }
        function a(e) { return e = e[0], e === void 0 ? null : e; }
        function T(e) {
            var n = e[0];
            if (n !== void 0) {
                var t = e.pop();
                if (t !== n) {
                    e[0] = t;
                    e: for (var l = 0, o = e.length; l < o;) {
                        var f = 2 * (l + 1) - 1, b = e[f], m = f + 1, d = e[m];
                        if (b !== void 0 && 0 > I(b, t))
                            d !== void 0 && 0 > I(d, b) ? (e[l] = d, e[m] = t, l = m) : (e[l] = b, e[f] = t, l = f);
                        else if (d !== void 0 && 0 > I(d, t))
                            e[l] = d, e[m] = t, l = m;
                        else
                            break e;
                    }
                }
                return n;
            }
            return null;
        }
        function I(e, n) { var t = e.sortIndex - n.sortIndex; return t !== 0 ? t : e.id - n.id; }
        var s = [], c = [], re = 1, u = null, i = 3, M = !1, p = !1, k = !1;
        function U(e) {
            for (var n = a(c); n !== null;) {
                if (n.callback === null)
                    T(c);
                else if (n.startTime <= e)
                    T(c), n.sortIndex = n.expirationTime, Y(s, n);
                else
                    break;
                n = a(c);
            }
        }
        function W(e) {
            if (k = !1, U(e), !p)
                if (a(s) !== null)
                    p = !0, _(O);
                else {
                    var n = a(c);
                    n !== null && v(W, n.startTime - e);
                }
        }
        function O(e, n) {
            p = !1, k && (k = !1, g()), M = !0;
            var t = i;
            try {
                for (U(n), u = a(s); u !== null && (!(u.expirationTime > n) || e && !r.unstable_shouldYield());) {
                    var l = u.callback;
                    if (typeof l == "function") {
                        u.callback = null, i = u.priorityLevel;
                        var o = l(u.expirationTime <= n);
                        n = r.unstable_now(), typeof o == "function" ? u.callback = o : u === a(s) && T(s), U(n);
                    }
                    else
                        T(s);
                    u = a(s);
                }
                if (u !== null)
                    var f = !0;
                else {
                    var b = a(c);
                    b !== null && v(W, b.startTime - n), f = !1;
                }
                return f;
            }
            finally {
                u = null, i = t, M = !1;
            }
        }
        var le = C;
        r.unstable_IdlePriority = 5;
        r.unstable_ImmediatePriority = 1;
        r.unstable_LowPriority = 4;
        r.unstable_NormalPriority = 3;
        r.unstable_Profiling = null;
        r.unstable_UserBlockingPriority = 2;
        r.unstable_cancelCallback = function (e) { e.callback = null; };
        r.unstable_continueExecution = function () { p || M || (p = !0, _(O)); };
        r.unstable_getCurrentPriorityLevel = function () { return i; };
        r.unstable_getFirstCallbackNode = function () { return a(s); };
        r.unstable_next = function (e) {
            switch (i) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default: n = i;
            }
            var t = i;
            i = n;
            try {
                return e();
            }
            finally {
                i = t;
            }
        };
        r.unstable_pauseExecution = function () { };
        r.unstable_requestPaint = le;
        r.unstable_runWithPriority = function (e, n) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5: break;
                default: e = 3;
            }
            var t = i;
            i = e;
            try {
                return n();
            }
            finally {
                i = t;
            }
        };
        r.unstable_scheduleCallback = function (e, n, t) {
            var l = r.unstable_now();
            switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 1073741823;
                    break;
                case 4:
                    o = 10000;
                    break;
                default: o = 5000;
            }
            return o = t + o, e = { id: re++, callback: n, priorityLevel: e, startTime: t, expirationTime: o, sortIndex: -1 }, t > l ? (e.sortIndex = t, Y(c, e), a(s) === null && e === a(c) && (k ? g() : k = !0, v(W, t - l))) : (e.sortIndex = o, Y(s, e), p || M || (p = !0, _(O))), e;
        };
        r.unstable_wrapCallback = function (e) {
            var n = i;
            return function () {
                var t = i;
                i = n;
                try {
                    return e.apply(this, arguments);
                }
                finally {
                    i = t;
                }
            };
        };
    });
    var V = H((se, A) => {
        "use strict";
        A.exports = $();
    });
    var oe = J(V()), ie = J(V()), { unstable_now: ce, unstable_shouldYield: fe, unstable_forceFrameRate: be, unstable_IdlePriority: pe, unstable_ImmediatePriority: de, unstable_LowPriority: _e, unstable_NormalPriority: ye, unstable_Profiling: me, unstable_UserBlockingPriority: ve, unstable_cancelCallback: he, unstable_continueExecution: we, unstable_getCurrentPriorityLevel: ke, unstable_getFirstCallbackNode: ge, unstable_next: Pe, unstable_pauseExecution: xe, unstable_requestPaint: Te, unstable_runWithPriority: Ie, unstable_scheduleCallback: Me, unstable_wrapCallback: je } = oe;
    var export_default = ie.default;
    return { default: export_default, unstable_IdlePriority: pe, unstable_ImmediatePriority: de, unstable_LowPriority: _e, unstable_NormalPriority: ye, unstable_Profiling: me, unstable_UserBlockingPriority: ve, unstable_cancelCallback: he, unstable_continueExecution: we, unstable_forceFrameRate: be, unstable_getCurrentPriorityLevel: ke, unstable_getFirstCallbackNode: ge, unstable_next: Pe, unstable_now: ce, unstable_pauseExecution: xe, unstable_requestPaint: Te, unstable_runWithPriority: Ie, unstable_scheduleCallback: Me, unstable_shouldYield: fe, unstable_wrapCallback: je };
})();
const mod6 = (async () => {
    const __react$ = (await mod5).default;
    const __object_assign$ = (await mod9).default;
    const __scheduler$ = (await mod10).default;
    var _s = Object.create;
    var Or = Object.defineProperty;
    var Ns = Object.getOwnPropertyDescriptor;
    var Ps = Object.getOwnPropertyNames;
    var Ts = Object.getPrototypeOf, Ls = Object.prototype.hasOwnProperty;
    var zs = e => Or(e, "__esModule", { value: !0 });
    var Mr = e => {
        if (typeof require != "undefined")
            return require(e);
        throw new Error("Dynamic require of \"" + e + "\" is not supported");
    };
    var Ri = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
    var Os = (e, n, t) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let r of Ps(n))
                !Ls.call(e, r) && r !== "default" && Or(e, r, { get: () => n[r], enumerable: !(t = Ns(n, r)) || t.enumerable });
        return e;
    }, Di = e => Os(zs(Or(e != null ? _s(Ts(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
    var Es = Ri(ie => {
        "use strict";
        var _t = __react$, M = __object_assign$, U = __scheduler$;
        function v(e) {
            for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
                n += "&args[]=" + encodeURIComponent(arguments[t]);
            return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        if (!_t)
            throw Error(v(227));
        var Ii = new Set, On = {};
        function He(e, n) { nn(e, n), nn(e + "Capture", n); }
        function nn(e, n) {
            for (On[e] = n, e = 0; e < n.length; e++)
                Ii.add(n[e]);
        }
        var me = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Ms = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fi = Object.prototype.hasOwnProperty, ji = {}, Ui = {};
        function Rs(e) { return Fi.call(Ui, e) ? !0 : Fi.call(ji, e) ? !1 : Ms.test(e) ? Ui[e] = !0 : (ji[e] = !0, !1); }
        function Ds(e, n, t, r) {
            if (t !== null && t.type === 0)
                return !1;
            switch (typeof n) {
                case "function":
                case "symbol": return !0;
                case "boolean": return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
                default: return !1;
            }
        }
        function Is(e, n, t, r) {
            if (n === null || typeof n == "undefined" || Ds(e, n, t, r))
                return !0;
            if (r)
                return !1;
            if (t !== null)
                switch (t.type) {
                    case 3: return !n;
                    case 4: return n === !1;
                    case 5: return isNaN(n);
                    case 6: return isNaN(n) || 1 > n;
                }
            return !1;
        }
        function Y(e, n, t, r, l, i, o) { this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o; }
        var V = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { V[e] = new Y(e, 0, !1, e, null, !1, !1); });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var n = e[0]; V[n] = new Y(n, 1, !1, e[1], null, !1, !1); });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { V[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1); });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { V[e] = new Y(e, 2, !1, e, null, !1, !1); });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { V[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1); });
        ["checked", "multiple", "muted", "selected"].forEach(function (e) { V[e] = new Y(e, 3, !0, e, null, !1, !1); });
        ["capture", "download"].forEach(function (e) { V[e] = new Y(e, 4, !1, e, null, !1, !1); });
        ["cols", "rows", "size", "span"].forEach(function (e) { V[e] = new Y(e, 6, !1, e, null, !1, !1); });
        ["rowSpan", "start"].forEach(function (e) { V[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1); });
        var Rr = /[\-:]([a-z])/g;
        function Dr(e) { return e[1].toUpperCase(); }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var n = e.replace(Rr, Dr); V[n] = new Y(n, 1, !1, e, null, !1, !1); });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var n = e.replace(Rr, Dr); V[n] = new Y(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var n = e.replace(Rr, Dr); V[n] = new Y(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
        ["tabIndex", "crossOrigin"].forEach(function (e) { V[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1); });
        V.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function (e) { V[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0); });
        function Ir(e, n, t, r) { var l = V.hasOwnProperty(n) ? V[n] : null, i = l !== null ? l.type === 0 : r ? !1 : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N"); i || (Is(n, t, l, r) && (t = null), r || l === null ? Rs(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t)))); }
        var We = _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Mn = 60103, Ae = 60106, Ee = 60107, Fr = 60108, Rn = 60114, jr = 60109, Ur = 60110, Nt = 60112, Dn = 60113, Pt = 60120, Tt = 60115, Vr = 60116, Br = 60121, Hr = 60128, Vi = 60129, Wr = 60130, Ar = 60131;
        typeof Symbol == "function" && Symbol.for && (F = Symbol.for, Mn = F("react.element"), Ae = F("react.portal"), Ee = F("react.fragment"), Fr = F("react.strict_mode"), Rn = F("react.profiler"), jr = F("react.provider"), Ur = F("react.context"), Nt = F("react.forward_ref"), Dn = F("react.suspense"), Pt = F("react.suspense_list"), Tt = F("react.memo"), Vr = F("react.lazy"), Br = F("react.block"), F("react.scope"), Hr = F("react.opaque.id"), Vi = F("react.debug_trace_mode"), Wr = F("react.offscreen"), Ar = F("react.legacy_hidden"));
        var F, Bi = typeof Symbol == "function" && Symbol.iterator;
        function In(e) { return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"], typeof e == "function" ? e : null); }
        var Qr;
        function Fn(e) {
            if (Qr === void 0)
                try {
                    throw Error();
                }
                catch (t) {
                    var n = t.stack.trim().match(/\n( *(at )?)/);
                    Qr = n && n[1] || "";
                }
            return `
` + Qr + e;
        }
        var $r = !1;
        function Lt(e, n) {
            if (!e || $r)
                return "";
            $r = !0;
            var t = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (n)
                    if (n = function () { throw Error(); }, Object.defineProperty(n.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                            Reflect.construct(n, []);
                        }
                        catch (s) {
                            var r = s;
                        }
                        Reflect.construct(e, [], n);
                    }
                    else {
                        try {
                            n.call();
                        }
                        catch (s) {
                            r = s;
                        }
                        e.call(n.prototype);
                    }
                else {
                    try {
                        throw Error();
                    }
                    catch (s) {
                        r = s;
                    }
                    e();
                }
            }
            catch (s) {
                if (s && r && typeof s.stack == "string") {
                    for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u];)
                        u--;
                    for (; 1 <= o && 0 <= u; o--, u--)
                        if (l[o] !== i[u]) {
                            if (o !== 1 || u !== 1)
                                do
                                    if (o--, u--, 0 > u || l[o] !== i[u])
                                        return `
` + l[o].replace(" at new ", " at ");
                                while (1 <= o && 0 <= u);
                            break;
                        }
                }
            }
            finally {
                $r = !1, Error.prepareStackTrace = t;
            }
            return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
        }
        function Fs(e) {
            switch (e.tag) {
                case 5: return Fn(e.type);
                case 16: return Fn("Lazy");
                case 13: return Fn("Suspense");
                case 19: return Fn("SuspenseList");
                case 0:
                case 2:
                case 15: return e = Lt(e.type, !1), e;
                case 11: return e = Lt(e.type.render, !1), e;
                case 22: return e = Lt(e.type._render, !1), e;
                case 1: return e = Lt(e.type, !0), e;
                default: return "";
            }
        }
        function tn(e) {
            if (e == null)
                return null;
            if (typeof e == "function")
                return e.displayName || e.name || null;
            if (typeof e == "string")
                return e;
            switch (e) {
                case Ee: return "Fragment";
                case Ae: return "Portal";
                case Rn: return "Profiler";
                case Fr: return "StrictMode";
                case Dn: return "Suspense";
                case Pt: return "SuspenseList";
            }
            if (typeof e == "object")
                switch (e.$$typeof) {
                    case Ur: return (e.displayName || "Context") + ".Consumer";
                    case jr: return (e._context.displayName || "Context") + ".Provider";
                    case Nt:
                        var n = e.render;
                        return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
                    case Tt: return tn(e.type);
                    case Br: return tn(e._render);
                    case Vr:
                        n = e._payload, e = e._init;
                        try {
                            return tn(e(n));
                        }
                        catch (t) { }
                }
            return null;
        }
        function ke(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined": return e;
                default: return "";
            }
        }
        function Hi(e) { var n = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio"); }
        function js(e) {
            var n = Hi(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
            if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
                var l = t.get, i = t.set;
                return Object.defineProperty(e, n, { configurable: !0, get: function () { return l.call(this); }, set: function (o) { r = "" + o, i.call(this, o); } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function () { return r; }, setValue: function (o) { r = "" + o; }, stopTracking: function () { e._valueTracker = null, delete e[n]; } };
            }
        }
        function zt(e) { e._valueTracker || (e._valueTracker = js(e)); }
        function Wi(e) {
            if (!e)
                return !1;
            var n = e._valueTracker;
            if (!n)
                return !0;
            var t = n.getValue(), r = "";
            return e && (r = Hi(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
        }
        function Ot(e) {
            if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
                return null;
            try {
                return e.activeElement || e.body;
            }
            catch (n) {
                return e.body;
            }
        }
        function Yr(e, n) { var t = n.checked; return M({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked }); }
        function Ai(e, n) { var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked; t = ke(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null }; }
        function Qi(e, n) { n = n.checked, n != null && Ir(e, "checked", n, !1); }
        function Xr(e, n) {
            Qi(e, n);
            var t = ke(n.value), r = n.type;
            if (t != null)
                r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
            else if (r === "submit" || r === "reset") {
                e.removeAttribute("value");
                return;
            }
            n.hasOwnProperty("value") ? Kr(e, n.type, t) : n.hasOwnProperty("defaultValue") && Kr(e, n.type, ke(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
        }
        function $i(e, n, t) {
            if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                var r = n.type;
                if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
                    return;
                n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
            }
            t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
        }
        function Kr(e, n, t) { (n !== "number" || Ot(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t)); }
        function Us(e) { var n = ""; return _t.Children.forEach(e, function (t) { t != null && (n += t); }), n; }
        function Gr(e, n) { return e = M({ children: void 0 }, n), (n = Us(n.children)) && (e.children = n), e; }
        function rn(e, n, t, r) {
            if (e = e.options, n) {
                n = {};
                for (var l = 0; l < t.length; l++)
                    n["$" + t[l]] = !0;
                for (t = 0; t < e.length; t++)
                    l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
            }
            else {
                for (t = "" + ke(t), n = null, l = 0; l < e.length; l++) {
                    if (e[l].value === t) {
                        e[l].selected = !0, r && (e[l].defaultSelected = !0);
                        return;
                    }
                    n !== null || e[l].disabled || (n = e[l]);
                }
                n !== null && (n.selected = !0);
            }
        }
        function Zr(e, n) {
            if (n.dangerouslySetInnerHTML != null)
                throw Error(v(91));
            return M({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function Yi(e, n) {
            var t = n.value;
            if (t == null) {
                if (t = n.children, n = n.defaultValue, t != null) {
                    if (n != null)
                        throw Error(v(92));
                    if (Array.isArray(t)) {
                        if (!(1 >= t.length))
                            throw Error(v(93));
                        t = t[0];
                    }
                    n = t;
                }
                n == null && (n = ""), t = n;
            }
            e._wrapperState = { initialValue: ke(t) };
        }
        function Xi(e, n) { var t = ke(n.value), r = ke(n.defaultValue); t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r); }
        function Ki(e) { var n = e.textContent; n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n); }
        var Jr = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
        function Gi(e) {
            switch (e) {
                case "svg": return "http://www.w3.org/2000/svg";
                case "math": return "http://www.w3.org/1998/Math/MathML";
                default: return "http://www.w3.org/1999/xhtml";
            }
        }
        function qr(e, n) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Gi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
        var Mt, Zi = function (e) { return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (n, t, r, l) { MSApp.execUnsafeLocalFunction(function () { return e(n, t, r, l); }); } : e; }(function (e, n) {
            if (e.namespaceURI !== Jr.svg || "innerHTML" in e)
                e.innerHTML = n;
            else {
                for (Mt = Mt || document.createElement("div"), Mt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Mt.firstChild; e.firstChild;)
                    e.removeChild(e.firstChild);
                for (; n.firstChild;)
                    e.appendChild(n.firstChild);
            }
        });
        function jn(e, n) {
            if (n) {
                var t = e.firstChild;
                if (t && t === e.lastChild && t.nodeType === 3) {
                    t.nodeValue = n;
                    return;
                }
            }
            e.textContent = n;
        }
        var Un = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Vs = ["Webkit", "ms", "Moz", "O"];
        Object.keys(Un).forEach(function (e) { Vs.forEach(function (n) { n = n + e.charAt(0).toUpperCase() + e.substring(1), Un[n] = Un[e]; }); });
        function Ji(e, n, t) { return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + n).trim() : n + "px"; }
        function qi(e, n) {
            e = e.style;
            for (var t in n)
                if (n.hasOwnProperty(t)) {
                    var r = t.indexOf("--") === 0, l = Ji(t, n[t], r);
                    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
                }
        }
        var Bs = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function br(e, n) {
            if (n) {
                if (Bs[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
                    throw Error(v(137, e));
                if (n.dangerouslySetInnerHTML != null) {
                    if (n.children != null)
                        throw Error(v(60));
                    if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML))
                        throw Error(v(61));
                }
                if (n.style != null && typeof n.style != "object")
                    throw Error(v(62));
            }
        }
        function el(e, n) {
            if (e.indexOf("-") === -1)
                return typeof n.is == "string";
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph": return !1;
                default: return !0;
            }
        }
        function nl(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
        var tl = null, ln = null, on = null;
        function bi(e) {
            if (e = tt(e)) {
                if (typeof tl != "function")
                    throw Error(v(280));
                var n = e.stateNode;
                n && (n = bt(n), tl(e.stateNode, e.type, n));
            }
        }
        function eo(e) { ln ? on ? on.push(e) : on = [e] : ln = e; }
        function no() {
            if (ln) {
                var e = ln, n = on;
                if (on = ln = null, bi(e), n)
                    for (e = 0; e < n.length; e++)
                        bi(n[e]);
            }
        }
        function rl(e, n) { return e(n); }
        function to(e, n, t, r, l) { return e(n, t, r, l); }
        function ll() { }
        var ro = rl, Qe = !1, il = !1;
        function ol() { (ln !== null || on !== null) && (ll(), no()); }
        function Hs(e, n, t) {
            if (il)
                return e(n, t);
            il = !0;
            try {
                return ro(e, n, t);
            }
            finally {
                il = !1, ol();
            }
        }
        function Vn(e, n) {
            var t = e.stateNode;
            if (t === null)
                return null;
            var r = bt(t);
            if (r === null)
                return null;
            t = r[n];
            e: switch (n) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                    break e;
                default: e = !1;
            }
            if (e)
                return null;
            if (t && typeof t != "function")
                throw Error(v(231, n, typeof t));
            return t;
        }
        var ul = !1;
        if (me)
            try {
                un = {}, Object.defineProperty(un, "passive", { get: function () { ul = !0; } }), window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
            }
            catch (e) {
                ul = !1;
            }
        var un;
        function Ws(e, n, t, r, l, i, o, u, s) {
            var d = Array.prototype.slice.call(arguments, 3);
            try {
                n.apply(t, d);
            }
            catch (y) {
                this.onError(y);
            }
        }
        var Bn = !1, Rt = null, Dt = !1, sl = null, As = { onError: function (e) { Bn = !0, Rt = e; } };
        function Qs(e, n, t, r, l, i, o, u, s) { Bn = !1, Rt = null, Ws.apply(As, arguments); }
        function $s(e, n, t, r, l, i, o, u, s) {
            if (Qs.apply(this, arguments), Bn) {
                if (Bn) {
                    var d = Rt;
                    Bn = !1, Rt = null;
                }
                else
                    throw Error(v(198));
                Dt || (Dt = !0, sl = d);
            }
        }
        function $e(e) {
            var n = e, t = e;
            if (e.alternate)
                for (; n.return;)
                    n = n.return;
            else {
                e = n;
                do
                    n = e, (n.flags & 1026) != 0 && (t = n.return), e = n.return;
                while (e);
            }
            return n.tag === 3 ? t : null;
        }
        function lo(e) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
                    return n.dehydrated;
            }
            return null;
        }
        function io(e) {
            if ($e(e) !== e)
                throw Error(v(188));
        }
        function Ys(e) {
            var n = e.alternate;
            if (!n) {
                if (n = $e(e), n === null)
                    throw Error(v(188));
                return n !== e ? null : e;
            }
            for (var t = e, r = n;;) {
                var l = t.return;
                if (l === null)
                    break;
                var i = l.alternate;
                if (i === null) {
                    if (r = l.return, r !== null) {
                        t = r;
                        continue;
                    }
                    break;
                }
                if (l.child === i.child) {
                    for (i = l.child; i;) {
                        if (i === t)
                            return io(l), e;
                        if (i === r)
                            return io(l), n;
                        i = i.sibling;
                    }
                    throw Error(v(188));
                }
                if (t.return !== r.return)
                    t = l, r = i;
                else {
                    for (var o = !1, u = l.child; u;) {
                        if (u === t) {
                            o = !0, t = l, r = i;
                            break;
                        }
                        if (u === r) {
                            o = !0, r = l, t = i;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) {
                        for (u = i.child; u;) {
                            if (u === t) {
                                o = !0, t = i, r = l;
                                break;
                            }
                            if (u === r) {
                                o = !0, r = i, t = l;
                                break;
                            }
                            u = u.sibling;
                        }
                        if (!o)
                            throw Error(v(189));
                    }
                }
                if (t.alternate !== r)
                    throw Error(v(190));
            }
            if (t.tag !== 3)
                throw Error(v(188));
            return t.stateNode.current === t ? e : n;
        }
        function oo(e) {
            if (e = Ys(e), !e)
                return null;
            for (var n = e;;) {
                if (n.tag === 5 || n.tag === 6)
                    return n;
                if (n.child)
                    n.child.return = n, n = n.child;
                else {
                    if (n === e)
                        break;
                    for (; !n.sibling;) {
                        if (!n.return || n.return === e)
                            return null;
                        n = n.return;
                    }
                    n.sibling.return = n.return, n = n.sibling;
                }
            }
            return null;
        }
        function uo(e, n) {
            for (var t = e.alternate; n !== null;) {
                if (n === e || n === t)
                    return !0;
                n = n.return;
            }
            return !1;
        }
        var so, al, ao, fo, fl = !1, se = [], xe = null, Ce = null, _e = null, Hn = new Map, Wn = new Map, An = [], co = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function cl(e, n, t, r, l) { return { blockedOn: e, domEventName: n, eventSystemFlags: t | 16, nativeEvent: l, targetContainers: [r] }; }
        function po(e, n) {
            switch (e) {
                case "focusin":
                case "focusout":
                    xe = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Ce = null;
                    break;
                case "mouseover":
                case "mouseout":
                    _e = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Hn.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture": Wn.delete(n.pointerId);
            }
        }
        function Qn(e, n, t, r, l, i) { return e === null || e.nativeEvent !== i ? (e = cl(n, t, r, l, i), n !== null && (n = tt(n), n !== null && al(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e); }
        function Xs(e, n, t, r, l) {
            switch (n) {
                case "focusin": return xe = Qn(xe, e, n, t, r, l), !0;
                case "dragenter": return Ce = Qn(Ce, e, n, t, r, l), !0;
                case "mouseover": return _e = Qn(_e, e, n, t, r, l), !0;
                case "pointerover":
                    var i = l.pointerId;
                    return Hn.set(i, Qn(Hn.get(i) || null, e, n, t, r, l)), !0;
                case "gotpointercapture": return i = l.pointerId, Wn.set(i, Qn(Wn.get(i) || null, e, n, t, r, l)), !0;
            }
            return !1;
        }
        function Ks(e) {
            var n = Ye(e.target);
            if (n !== null) {
                var t = $e(n);
                if (t !== null) {
                    if (n = t.tag, n === 13) {
                        if (n = lo(t), n !== null) {
                            e.blockedOn = n, fo(e.lanePriority, function () { U.unstable_runWithPriority(e.priority, function () { ao(t); }); });
                            return;
                        }
                    }
                    else if (n === 3 && t.stateNode.hydrate) {
                        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function It(e) {
            if (e.blockedOn !== null)
                return !1;
            for (var n = e.targetContainers; 0 < n.length;) {
                var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                if (t !== null)
                    return n = tt(t), n !== null && al(n), e.blockedOn = t, !1;
                n.shift();
            }
            return !0;
        }
        function mo(e, n, t) { It(e) && t.delete(n); }
        function Gs() {
            for (fl = !1; 0 < se.length;) {
                var e = se[0];
                if (e.blockedOn !== null) {
                    e = tt(e.blockedOn), e !== null && so(e);
                    break;
                }
                for (var n = e.targetContainers; 0 < n.length;) {
                    var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                    if (t !== null) {
                        e.blockedOn = t;
                        break;
                    }
                    n.shift();
                }
                e.blockedOn === null && se.shift();
            }
            xe !== null && It(xe) && (xe = null), Ce !== null && It(Ce) && (Ce = null), _e !== null && It(_e) && (_e = null), Hn.forEach(mo), Wn.forEach(mo);
        }
        function $n(e, n) { e.blockedOn === n && (e.blockedOn = null, fl || (fl = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Gs))); }
        function ho(e) {
            function n(l) { return $n(l, e); }
            if (0 < se.length) {
                $n(se[0], e);
                for (var t = 1; t < se.length; t++) {
                    var r = se[t];
                    r.blockedOn === e && (r.blockedOn = null);
                }
            }
            for (xe !== null && $n(xe, e), Ce !== null && $n(Ce, e), _e !== null && $n(_e, e), Hn.forEach(n), Wn.forEach(n), t = 0; t < An.length; t++)
                r = An[t], r.blockedOn === e && (r.blockedOn = null);
            for (; 0 < An.length && (t = An[0], t.blockedOn === null);)
                Ks(t), t.blockedOn === null && An.shift();
        }
        function Ft(e, n) { var t = {}; return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t; }
        var sn = { animationend: Ft("Animation", "AnimationEnd"), animationiteration: Ft("Animation", "AnimationIteration"), animationstart: Ft("Animation", "AnimationStart"), transitionend: Ft("Transition", "TransitionEnd") }, dl = {}, vo = {};
        me && (vo = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
        function jt(e) {
            if (dl[e])
                return dl[e];
            if (!sn[e])
                return e;
            var n = sn[e], t;
            for (t in n)
                if (n.hasOwnProperty(t) && t in vo)
                    return dl[e] = n[t];
            return e;
        }
        var yo = jt("animationend"), go = jt("animationiteration"), wo = jt("animationstart"), So = jt("transitionend"), Eo = new Map, pl = new Map, Zs = ["abort", "abort", yo, "animationEnd", go, "animationIteration", wo, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", So, "transitionEnd", "waiting", "waiting"];
        function ml(e, n) {
            for (var t = 0; t < e.length; t += 2) {
                var r = e[t], l = e[t + 1];
                l = "on" + (l[0].toUpperCase() + l.slice(1)), pl.set(r, n), Eo.set(r, l), He(l, [r]);
            }
        }
        var Js = U.unstable_now;
        Js();
        var L = 8;
        function an(e) {
            if ((1 & e) != 0)
                return L = 15, 1;
            if ((2 & e) != 0)
                return L = 14, 2;
            if ((4 & e) != 0)
                return L = 13, 4;
            var n = 24 & e;
            return n !== 0 ? (L = 12, n) : (e & 32) != 0 ? (L = 11, 32) : (n = 192 & e, n !== 0 ? (L = 10, n) : (e & 256) != 0 ? (L = 9, 256) : (n = 3584 & e, n !== 0 ? (L = 8, n) : (e & 4096) != 0 ? (L = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L = 6, n) : (n = 62914560 & e, n !== 0 ? (L = 5, n) : e & 67108864 ? (L = 4, 67108864) : (e & 134217728) != 0 ? (L = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L = 2, n) : (1073741824 & e) != 0 ? (L = 1, 1073741824) : (L = 8, e))))));
        }
        function qs(e) {
            switch (e) {
                case 99: return 15;
                case 98: return 10;
                case 97:
                case 96: return 8;
                case 95: return 2;
                default: return 0;
            }
        }
        function bs(e) {
            switch (e) {
                case 15:
                case 14: return 99;
                case 13:
                case 12:
                case 11:
                case 10: return 98;
                case 9:
                case 8:
                case 7:
                case 6:
                case 4:
                case 5: return 97;
                case 3:
                case 2:
                case 1: return 95;
                case 0: return 90;
                default: throw Error(v(358, e));
            }
        }
        function Yn(e, n) {
            var t = e.pendingLanes;
            if (t === 0)
                return L = 0;
            var r = 0, l = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
            if (i !== 0)
                r = i, l = L = 15;
            else if (i = t & 134217727, i !== 0) {
                var s = i & ~o;
                s !== 0 ? (r = an(s), l = L) : (u &= i, u !== 0 && (r = an(u), l = L));
            }
            else
                i = t & ~o, i !== 0 ? (r = an(i), l = L) : u !== 0 && (r = an(u), l = L);
            if (r === 0)
                return 0;
            if (r = 31 - Ne(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o) == 0) {
                if (an(n), l <= L)
                    return n;
                L = l;
            }
            if (n = e.entangledLanes, n !== 0)
                for (e = e.entanglements, n &= r; 0 < n;)
                    t = 31 - Ne(n), l = 1 << t, r |= e[t], n &= ~l;
            return r;
        }
        function ko(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
        function Ut(e, n) {
            switch (e) {
                case 15: return 1;
                case 14: return 2;
                case 12: return e = fn(24 & ~n), e === 0 ? Ut(10, n) : e;
                case 10: return e = fn(192 & ~n), e === 0 ? Ut(8, n) : e;
                case 8: return e = fn(3584 & ~n), e === 0 && (e = fn(4186112 & ~n), e === 0 && (e = 512)), e;
                case 2: return n = fn(805306368 & ~n), n === 0 && (n = 268435456), n;
            }
            throw Error(v(358, e));
        }
        function fn(e) { return e & -e; }
        function hl(e) {
            for (var n = [], t = 0; 31 > t; t++)
                n.push(e);
            return n;
        }
        function Vt(e, n, t) { e.pendingLanes |= n; var r = n - 1; e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ne(n), e[n] = t; }
        var Ne = Math.clz32 ? Math.clz32 : ta, ea = Math.log, na = Math.LN2;
        function ta(e) { return e === 0 ? 32 : 31 - (ea(e) / na | 0) | 0; }
        var ra = U.unstable_UserBlockingPriority, la = U.unstable_runWithPriority, Bt = !0;
        function ia(e, n, t, r) {
            Qe || ll();
            var l = vl, i = Qe;
            Qe = !0;
            try {
                to(l, e, n, t, r);
            }
            finally {
                (Qe = i) || ol();
            }
        }
        function oa(e, n, t, r) { la(ra, vl.bind(null, e, n, t, r)); }
        function vl(e, n, t, r) {
            if (Bt) {
                var l;
                if ((l = (n & 4) == 0) && 0 < se.length && -1 < co.indexOf(e))
                    e = cl(null, e, n, t, r), se.push(e);
                else {
                    var i = yl(e, n, t, r);
                    if (i === null)
                        l && po(e, r);
                    else {
                        if (l) {
                            if (-1 < co.indexOf(e)) {
                                e = cl(i, e, n, t, r), se.push(e);
                                return;
                            }
                            if (Xs(i, e, n, t, r))
                                return;
                            po(e, r);
                        }
                        Zo(e, n, r, null, t);
                    }
                }
            }
        }
        function yl(e, n, t, r) {
            var l = nl(r);
            if (l = Ye(l), l !== null) {
                var i = $e(l);
                if (i === null)
                    l = null;
                else {
                    var o = i.tag;
                    if (o === 13) {
                        if (l = lo(i), l !== null)
                            return l;
                        l = null;
                    }
                    else if (o === 3) {
                        if (i.stateNode.hydrate)
                            return i.tag === 3 ? i.stateNode.containerInfo : null;
                        l = null;
                    }
                    else
                        i !== l && (l = null);
                }
            }
            return Zo(e, n, r, l, t), null;
        }
        var Pe = null, gl = null, Ht = null;
        function xo() {
            if (Ht)
                return Ht;
            var e, n = gl, t = n.length, r, l = "value" in Pe ? Pe.value : Pe.textContent, i = l.length;
            for (e = 0; e < t && n[e] === l[e]; e++)
                ;
            var o = t - e;
            for (r = 1; r <= o && n[t - r] === l[i - r]; r++)
                ;
            return Ht = l.slice(e, 1 < r ? 1 - r : void 0);
        }
        function Wt(e) { var n = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
        function At() { return !0; }
        function Co() { return !1; }
        function q(e) {
            function n(t, r, l, i, o) {
                this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
                for (var u in e)
                    e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? At : Co, this.isPropagationStopped = Co, this;
            }
            return M(n.prototype, { preventDefault: function () { this.defaultPrevented = !0; var t = this.nativeEvent; t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = At); }, stopPropagation: function () { var t = this.nativeEvent; t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = At); }, persist: function () { }, isPersistent: At }), n;
        }
        var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, wl = q(cn), Xn = M({}, cn, { view: 0, detail: 0 }), ua = q(Xn), Sl, El, Kn, Qt = M({}, Xn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xl, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Sl = e.screenX - Kn.screenX, El = e.screenY - Kn.screenY) : El = Sl = 0, Kn = e), Sl); }, movementY: function (e) { return "movementY" in e ? e.movementY : El; } }), _o = q(Qt), sa = M({}, Qt, { dataTransfer: 0 }), aa = q(sa), fa = M({}, Xn, { relatedTarget: 0 }), kl = q(fa), ca = M({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), da = q(ca), pa = M({}, cn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), ma = q(pa), ha = M({}, cn, { data: 0 }), No = q(ha), va = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ya = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, ga = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function wa(e) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(e) : (e = ga[e]) ? !!n[e] : !1; }
        function xl() { return wa; }
        var Sa = M({}, Xn, { key: function (e) {
                if (e.key) {
                    var n = va[e.key] || e.key;
                    if (n !== "Unidentified")
                        return n;
                }
                return e.type === "keypress" ? (e = Wt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ya[e.keyCode] || "Unidentified" : "";
            }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xl, charCode: function (e) { return e.type === "keypress" ? Wt(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Wt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Ea = q(Sa), ka = M({}, Qt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Po = q(ka), xa = M({}, Xn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xl }), Ca = q(xa), _a = M({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Na = q(_a), Pa = M({}, Qt, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Ta = q(Pa), La = [9, 13, 27, 32], Cl = me && "CompositionEvent" in window, Gn = null;
        me && "documentMode" in document && (Gn = document.documentMode);
        var za = me && "TextEvent" in window && !Gn, To = me && (!Cl || Gn && 8 < Gn && 11 >= Gn), Lo = String.fromCharCode(32), zo = !1;
        function Oo(e, n) {
            switch (e) {
                case "keyup": return La.indexOf(n.keyCode) !== -1;
                case "keydown": return n.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout": return !0;
                default: return !1;
            }
        }
        function Mo(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
        var dn = !1;
        function Oa(e, n) {
            switch (e) {
                case "compositionend": return Mo(n);
                case "keypress": return n.which !== 32 ? null : (zo = !0, Lo);
                case "textInput": return e = n.data, e === Lo && zo ? null : e;
                default: return null;
            }
        }
        function Ma(e, n) {
            if (dn)
                return e === "compositionend" || !Cl && Oo(e, n) ? (e = xo(), Ht = gl = Pe = null, dn = !1, e) : null;
            switch (e) {
                case "paste": return null;
                case "keypress":
                    if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                        if (n.char && 1 < n.char.length)
                            return n.char;
                        if (n.which)
                            return String.fromCharCode(n.which);
                    }
                    return null;
                case "compositionend": return To && n.locale !== "ko" ? null : n.data;
                default: return null;
            }
        }
        var Ra = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function Ro(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n === "input" ? !!Ra[e.type] : n === "textarea"; }
        function Do(e, n, t, r) { eo(r), n = Gt(n, "onChange"), 0 < n.length && (t = new wl("onChange", "change", null, t, r), e.push({ event: t, listeners: n })); }
        var Zn = null, Jn = null;
        function Da(e) { $o(e, 0); }
        function $t(e) {
            var n = yn(e);
            if (Wi(n))
                return e;
        }
        function Ia(e, n) {
            if (e === "change")
                return n;
        }
        var Io = !1;
        me && (me ? (Xt = "oninput" in document, Xt || (_l = document.createElement("div"), _l.setAttribute("oninput", "return;"), Xt = typeof _l.oninput == "function"), Yt = Xt) : Yt = !1, Io = Yt && (!document.documentMode || 9 < document.documentMode));
        var Yt, Xt, _l;
        function Fo() { Zn && (Zn.detachEvent("onpropertychange", jo), Jn = Zn = null); }
        function jo(e) {
            if (e.propertyName === "value" && $t(Jn)) {
                var n = [];
                if (Do(n, Jn, e, nl(e)), e = Da, Qe)
                    e(n);
                else {
                    Qe = !0;
                    try {
                        rl(e, n);
                    }
                    finally {
                        Qe = !1, ol();
                    }
                }
            }
        }
        function Fa(e, n, t) { e === "focusin" ? (Fo(), Zn = n, Jn = t, Zn.attachEvent("onpropertychange", jo)) : e === "focusout" && Fo(); }
        function ja(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown")
                return $t(Jn);
        }
        function Ua(e, n) {
            if (e === "click")
                return $t(n);
        }
        function Va(e, n) {
            if (e === "input" || e === "change")
                return $t(n);
        }
        function Ba(e, n) { return e === n && (e !== 0 || 1 / e == 1 / n) || e !== e && n !== n; }
        var ee = typeof Object.is == "function" ? Object.is : Ba, Ha = Object.prototype.hasOwnProperty;
        function qn(e, n) {
            if (ee(e, n))
                return !0;
            if (typeof e != "object" || e === null || typeof n != "object" || n === null)
                return !1;
            var t = Object.keys(e), r = Object.keys(n);
            if (t.length !== r.length)
                return !1;
            for (r = 0; r < t.length; r++)
                if (!Ha.call(n, t[r]) || !ee(e[t[r]], n[t[r]]))
                    return !1;
            return !0;
        }
        function Uo(e) {
            for (; e && e.firstChild;)
                e = e.firstChild;
            return e;
        }
        function Vo(e, n) {
            var t = Uo(e);
            e = 0;
            for (var r; t;) {
                if (t.nodeType === 3) {
                    if (r = e + t.textContent.length, e <= n && r >= n)
                        return { node: t, offset: n - e };
                    e = r;
                }
                e: {
                    for (; t;) {
                        if (t.nextSibling) {
                            t = t.nextSibling;
                            break e;
                        }
                        t = t.parentNode;
                    }
                    t = void 0;
                }
                t = Uo(t);
            }
        }
        function Bo(e, n) { return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1; }
        function Ho() {
            for (var e = window, n = Ot(); n instanceof e.HTMLIFrameElement;) {
                try {
                    var t = typeof n.contentWindow.location.href == "string";
                }
                catch (r) {
                    t = !1;
                }
                if (t)
                    e = n.contentWindow;
                else
                    break;
                n = Ot(e.document);
            }
            return n;
        }
        function Nl(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true"); }
        var Wa = me && "documentMode" in document && 11 >= document.documentMode, pn = null, Pl = null, bn = null, Tl = !1;
        function Wo(e, n, t) { var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument; Tl || pn == null || pn !== Ot(r) || (r = pn, "selectionStart" in r && Nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = Gt(Pl, "onSelect"), 0 < r.length && (n = new wl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pn))); }
        ml("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
        ml("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
        ml(Zs, 2);
        for (Ll = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Kt = 0; Kt < Ll.length; Kt++)
            pl.set(Ll[Kt], 0);
        var Ll, Kt;
        nn("onMouseEnter", ["mouseout", "mouseover"]);
        nn("onMouseLeave", ["mouseout", "mouseover"]);
        nn("onPointerEnter", ["pointerout", "pointerover"]);
        nn("onPointerLeave", ["pointerout", "pointerover"]);
        He("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        He("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        He("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        He("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        He("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        He("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ao = new Set("cancel close invalid load scroll toggle".split(" ").concat(et));
        function Qo(e, n, t) { var r = e.type || "unknown-event"; e.currentTarget = t, $s(r, n, void 0, e), e.currentTarget = null; }
        function $o(e, n) {
            n = (n & 4) != 0;
            for (var t = 0; t < e.length; t++) {
                var r = e[t], l = r.event;
                r = r.listeners;
                e: {
                    var i = void 0;
                    if (n)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var u = r[o], s = u.instance, d = u.currentTarget;
                            if (u = u.listener, s !== i && l.isPropagationStopped())
                                break e;
                            Qo(l, u, d), i = s;
                        }
                    else
                        for (o = 0; o < r.length; o++) {
                            if (u = r[o], s = u.instance, d = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped())
                                break e;
                            Qo(l, u, d), i = s;
                        }
                }
            }
            if (Dt)
                throw e = sl, Dt = !1, sl = null, e;
        }
        function z(e, n) { var t = tu(n), r = e + "__bubble"; t.has(r) || (Go(n, e, 2, !1), t.add(r)); }
        var Yo = "_reactListening" + Math.random().toString(36).slice(2);
        function Xo(e) { e[Yo] || (e[Yo] = !0, Ii.forEach(function (n) { Ao.has(n) || Ko(n, !1, e, null), Ko(n, !0, e, null); })); }
        function Ko(e, n, t, r) {
            var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t;
            if (e === "selectionchange" && t.nodeType !== 9 && (i = t.ownerDocument), r !== null && !n && Ao.has(e)) {
                if (e !== "scroll")
                    return;
                l |= 2, i = r;
            }
            var o = tu(i), u = e + "__" + (n ? "capture" : "bubble");
            o.has(u) || (n && (l |= 4), Go(i, e, l, n), o.add(u));
        }
        function Go(e, n, t, r) {
            var l = pl.get(n);
            switch (l === void 0 ? 2 : l) {
                case 0:
                    l = ia;
                    break;
                case 1:
                    l = oa;
                    break;
                default: l = vl;
            }
            t = l.bind(null, n, t, e), l = void 0, !ul || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
        }
        function Zo(e, n, t, r, l) {
            var i = r;
            if ((n & 1) == 0 && (n & 2) == 0 && r !== null)
                e: for (;;) {
                    if (r === null)
                        return;
                    var o = r.tag;
                    if (o === 3 || o === 4) {
                        var u = r.stateNode.containerInfo;
                        if (u === l || u.nodeType === 8 && u.parentNode === l)
                            break;
                        if (o === 4)
                            for (o = r.return; o !== null;) {
                                var s = o.tag;
                                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                                    return;
                                o = o.return;
                            }
                        for (; u !== null;) {
                            if (o = Ye(u), o === null)
                                return;
                            if (s = o.tag, s === 5 || s === 6) {
                                r = i = o;
                                continue e;
                            }
                            u = u.parentNode;
                        }
                    }
                    r = r.return;
                }
            Hs(function () {
                var d = i, y = nl(t), C = [];
                e: {
                    var h = Eo.get(e);
                    if (h !== void 0) {
                        var S = wl, k = e;
                        switch (e) {
                            case "keypress": if (Wt(t) === 0)
                                break e;
                            case "keydown":
                            case "keyup":
                                S = Ea;
                                break;
                            case "focusin":
                                k = "focus", S = kl;
                                break;
                            case "focusout":
                                k = "blur", S = kl;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                S = kl;
                                break;
                            case "click": if (t.button === 2)
                                break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                S = _o;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                S = aa;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                S = Ca;
                                break;
                            case yo:
                            case go:
                            case wo:
                                S = da;
                                break;
                            case So:
                                S = Na;
                                break;
                            case "scroll":
                                S = ua;
                                break;
                            case "wheel":
                                S = Ta;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                S = ma;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup": S = Po;
                        }
                        var E = (n & 4) != 0, c = !E && e === "scroll", a = E ? h !== null ? h + "Capture" : null : h;
                        E = [];
                        for (var f = d, p; f !== null;) {
                            p = f;
                            var m = p.stateNode;
                            if (p.tag === 5 && m !== null && (p = m, a !== null && (m = Vn(f, a), m != null && E.push(nt(f, m, p)))), c)
                                break;
                            f = f.return;
                        }
                        0 < E.length && (h = new S(h, k, null, t, y), C.push({ event: h, listeners: E }));
                    }
                }
                if ((n & 7) == 0) {
                    e: {
                        if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && (n & 16) == 0 && (k = t.relatedTarget || t.fromElement) && (Ye(k) || k[vn]))
                            break e;
                        if ((S || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (k = t.relatedTarget || t.toElement, S = d, k = k ? Ye(k) : null, k !== null && (c = $e(k), k !== c || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S = null, k = d), S !== k)) {
                            if (E = _o, m = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = Po, m = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = S == null ? h : yn(S), p = k == null ? h : yn(k), h = new E(m, f + "leave", S, t, y), h.target = c, h.relatedTarget = p, m = null, Ye(y) === d && (E = new E(a, f + "enter", k, t, y), E.target = p, E.relatedTarget = c, m = E), c = m, S && k)
                                n: {
                                    for (E = S, a = k, f = 0, p = E; p; p = mn(p))
                                        f++;
                                    for (p = 0, m = a; m; m = mn(m))
                                        p++;
                                    for (; 0 < f - p;)
                                        E = mn(E), f--;
                                    for (; 0 < p - f;)
                                        a = mn(a), p--;
                                    for (; f--;) {
                                        if (E === a || a !== null && E === a.alternate)
                                            break n;
                                        E = mn(E), a = mn(a);
                                    }
                                    E = null;
                                }
                            else
                                E = null;
                            S !== null && Jo(C, h, S, E, !1), k !== null && c !== null && Jo(C, c, k, E, !0);
                        }
                    }
                    e: {
                        if (h = d ? yn(d) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
                            var _ = Ia;
                        else if (Ro(h))
                            if (Io)
                                _ = Va;
                            else {
                                _ = ja;
                                var w = Fa;
                            }
                        else
                            (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = Ua);
                        if (_ && (_ = _(e, d))) {
                            Do(C, _, t, y);
                            break e;
                        }
                        w && w(e, h, d), e === "focusout" && (w = h._wrapperState) && w.controlled && h.type === "number" && Kr(h, "number", h.value);
                    }
                    switch (w = d ? yn(d) : window, e) {
                        case "focusin":
                            (Ro(w) || w.contentEditable === "true") && (pn = w, Pl = d, bn = null);
                            break;
                        case "focusout":
                            bn = Pl = pn = null;
                            break;
                        case "mousedown":
                            Tl = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Tl = !1, Wo(C, t, y);
                            break;
                        case "selectionchange": if (Wa)
                            break;
                        case "keydown":
                        case "keyup": Wo(C, t, y);
                    }
                    var N;
                    if (Cl)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    var T = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    T = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    T = "onCompositionUpdate";
                                    break e;
                            }
                            T = void 0;
                        }
                    else
                        dn ? Oo(e, t) && (T = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T = "onCompositionStart");
                    T && (To && t.locale !== "ko" && (dn || T !== "onCompositionStart" ? T === "onCompositionEnd" && dn && (N = xo()) : (Pe = y, gl = "value" in Pe ? Pe.value : Pe.textContent, dn = !0)), w = Gt(d, T), 0 < w.length && (T = new No(T, e, null, t, y), C.push({ event: T, listeners: w }), N ? T.data = N : (N = Mo(t), N !== null && (T.data = N)))), (N = za ? Oa(e, t) : Ma(e, t)) && (d = Gt(d, "onBeforeInput"), 0 < d.length && (y = new No("onBeforeInput", "beforeinput", null, t, y), C.push({ event: y, listeners: d }), y.data = N));
                }
                $o(C, n);
            });
        }
        function nt(e, n, t) { return { instance: e, listener: n, currentTarget: t }; }
        function Gt(e, n) {
            for (var t = n + "Capture", r = []; e !== null;) {
                var l = e, i = l.stateNode;
                l.tag === 5 && i !== null && (l = i, i = Vn(e, t), i != null && r.unshift(nt(e, i, l)), i = Vn(e, n), i != null && r.push(nt(e, i, l))), e = e.return;
            }
            return r;
        }
        function mn(e) {
            if (e === null)
                return null;
            do
                e = e.return;
            while (e && e.tag !== 5);
            return e || null;
        }
        function Jo(e, n, t, r, l) {
            for (var i = n._reactName, o = []; t !== null && t !== r;) {
                var u = t, s = u.alternate, d = u.stateNode;
                if (s !== null && s === r)
                    break;
                u.tag === 5 && d !== null && (u = d, l ? (s = Vn(t, i), s != null && o.unshift(nt(t, s, u))) : l || (s = Vn(t, i), s != null && o.push(nt(t, s, u)))), t = t.return;
            }
            o.length !== 0 && e.push({ event: n, listeners: o });
        }
        function Zt() { }
        var zl = null, Ol = null;
        function qo(e, n) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea": return !!n.autoFocus;
            }
            return !1;
        }
        function Ml(e, n) { return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null; }
        var bo = typeof setTimeout == "function" ? setTimeout : void 0, Aa = typeof clearTimeout == "function" ? clearTimeout : void 0;
        function Rl(e) { e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = "")); }
        function hn(e) {
            for (; e != null; e = e.nextSibling) {
                var n = e.nodeType;
                if (n === 1 || n === 3)
                    break;
            }
            return e;
        }
        function eu(e) {
            e = e.previousSibling;
            for (var n = 0; e;) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "$" || t === "$!" || t === "$?") {
                        if (n === 0)
                            return e;
                        n--;
                    }
                    else
                        t === "/$" && n++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        var Dl = 0;
        function Qa(e) { return { $$typeof: Hr, toString: e, valueOf: e }; }
        var Jt = Math.random().toString(36).slice(2), Te = "__reactFiber$" + Jt, qt = "__reactProps$" + Jt, vn = "__reactContainer$" + Jt, nu = "__reactEvents$" + Jt;
        function Ye(e) {
            var n = e[Te];
            if (n)
                return n;
            for (var t = e.parentNode; t;) {
                if (n = t[vn] || t[Te]) {
                    if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
                        for (e = eu(e); e !== null;) {
                            if (t = e[Te])
                                return t;
                            e = eu(e);
                        }
                    return n;
                }
                e = t, t = e.parentNode;
            }
            return null;
        }
        function tt(e) { return e = e[Te] || e[vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
        function yn(e) {
            if (e.tag === 5 || e.tag === 6)
                return e.stateNode;
            throw Error(v(33));
        }
        function bt(e) { return e[qt] || null; }
        function tu(e) { var n = e[nu]; return n === void 0 && (n = e[nu] = new Set), n; }
        var Il = [], gn = -1;
        function Le(e) { return { current: e }; }
        function O(e) { 0 > gn || (e.current = Il[gn], Il[gn] = null, gn--); }
        function R(e, n) { gn++, Il[gn] = e.current, e.current = n; }
        var ze = {}, W = Le(ze), K = Le(!1), Xe = ze;
        function wn(e, n) {
            var t = e.type.contextTypes;
            if (!t)
                return ze;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
                return r.__reactInternalMemoizedMaskedChildContext;
            var l = {}, i;
            for (i in t)
                l[i] = n[i];
            return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
        }
        function G(e) { return e = e.childContextTypes, e != null; }
        function er() { O(K), O(W); }
        function ru(e, n, t) {
            if (W.current !== ze)
                throw Error(v(168));
            R(W, n), R(K, t);
        }
        function lu(e, n, t) {
            var r = e.stateNode;
            if (e = n.childContextTypes, typeof r.getChildContext != "function")
                return t;
            r = r.getChildContext();
            for (var l in r)
                if (!(l in e))
                    throw Error(v(108, tn(n) || "Unknown", l));
            return M({}, t, r);
        }
        function nr(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ze, Xe = W.current, R(W, e), R(K, K.current), !0; }
        function iu(e, n, t) {
            var r = e.stateNode;
            if (!r)
                throw Error(v(169));
            t ? (e = lu(e, n, Xe), r.__reactInternalMemoizedMergedChildContext = e, O(K), O(W), R(W, e)) : O(K), R(K, t);
        }
        var Fl = null, Ke = null, $a = U.unstable_runWithPriority, jl = U.unstable_scheduleCallback, Ul = U.unstable_cancelCallback, Ya = U.unstable_shouldYield, ou = U.unstable_requestPaint, Vl = U.unstable_now, Xa = U.unstable_getCurrentPriorityLevel, tr = U.unstable_ImmediatePriority, uu = U.unstable_UserBlockingPriority, su = U.unstable_NormalPriority, au = U.unstable_LowPriority, fu = U.unstable_IdlePriority, Bl = {}, Ka = ou !== void 0 ? ou : function () { }, he = null, rr = null, Hl = !1, cu = Vl(), A = 10000 > cu ? Vl : function () { return Vl() - cu; };
        function Sn() {
            switch (Xa()) {
                case tr: return 99;
                case uu: return 98;
                case su: return 97;
                case au: return 96;
                case fu: return 95;
                default: throw Error(v(332));
            }
        }
        function du(e) {
            switch (e) {
                case 99: return tr;
                case 98: return uu;
                case 97: return su;
                case 96: return au;
                case 95: return fu;
                default: throw Error(v(332));
            }
        }
        function Ge(e, n) { return e = du(e), $a(e, n); }
        function rt(e, n, t) { return e = du(e), jl(e, n, t); }
        function ae() {
            if (rr !== null) {
                var e = rr;
                rr = null, Ul(e);
            }
            pu();
        }
        function pu() {
            if (!Hl && he !== null) {
                Hl = !0;
                var e = 0;
                try {
                    var n = he;
                    Ge(99, function () {
                        for (; e < n.length; e++) {
                            var t = n[e];
                            do
                                t = t(!0);
                            while (t !== null);
                        }
                    }), he = null;
                }
                catch (t) {
                    throw he !== null && (he = he.slice(e + 1)), jl(tr, ae), t;
                }
                finally {
                    Hl = !1;
                }
            }
        }
        var Ga = We.ReactCurrentBatchConfig;
        function oe(e, n) {
            if (e && e.defaultProps) {
                n = M({}, n), e = e.defaultProps;
                for (var t in e)
                    n[t] === void 0 && (n[t] = e[t]);
                return n;
            }
            return n;
        }
        var lr = Le(null), ir = null, En = null, or = null;
        function Wl() { or = En = ir = null; }
        function Al(e) { var n = lr.current; O(lr), e.type._context._currentValue = n; }
        function mu(e, n) {
            for (; e !== null;) {
                var t = e.alternate;
                if ((e.childLanes & n) === n) {
                    if (t === null || (t.childLanes & n) === n)
                        break;
                    t.childLanes |= n;
                }
                else
                    e.childLanes |= n, t !== null && (t.childLanes |= n);
                e = e.return;
            }
        }
        function kn(e, n) { ir = e, or = En = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) != 0 && (ue = !0), e.firstContext = null); }
        function ne(e, n) {
            if (or !== e && n !== !1 && n !== 0)
                if ((typeof n != "number" || n === 1073741823) && (or = e, n = 1073741823), n = { context: e, observedBits: n, next: null }, En === null) {
                    if (ir === null)
                        throw Error(v(308));
                    En = n, ir.dependencies = { lanes: 0, firstContext: n, responders: null };
                }
                else
                    En = En.next = n;
            return e._currentValue;
        }
        var Oe = !1;
        function Ql(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null }; }
        function hu(e, n) { e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
        function Me(e, n) { return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null }; }
        function Re(e, n) {
            if (e = e.updateQueue, e !== null) {
                e = e.shared;
                var t = e.pending;
                t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
            }
        }
        function vu(e, n) {
            var t = e.updateQueue, r = e.alternate;
            if (r !== null && (r = r.updateQueue, t === r)) {
                var l = null, i = null;
                if (t = t.firstBaseUpdate, t !== null) {
                    do {
                        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
                        i === null ? l = i = o : i = i.next = o, t = t.next;
                    } while (t !== null);
                    i === null ? l = i = n : i = i.next = n;
                }
                else
                    l = i = n;
                t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = t;
                return;
            }
            e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
        }
        function lt(e, n, t, r) {
            var l = e.updateQueue;
            Oe = !1;
            var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
            if (u !== null) {
                l.shared.pending = null;
                var s = u, d = s.next;
                s.next = null, o === null ? i = d : o.next = d, o = s;
                var y = e.alternate;
                if (y !== null) {
                    y = y.updateQueue;
                    var C = y.lastBaseUpdate;
                    C !== o && (C === null ? y.firstBaseUpdate = d : C.next = d, y.lastBaseUpdate = s);
                }
            }
            if (i !== null) {
                C = l.baseState, o = 0, y = d = s = null;
                do {
                    u = i.lane;
                    var h = i.eventTime;
                    if ((r & u) === u) {
                        y !== null && (y = y.next = { eventTime: h, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                        e: {
                            var S = e, k = i;
                            switch (u = n, h = t, k.tag) {
                                case 1:
                                    if (S = k.payload, typeof S == "function") {
                                        C = S.call(h, C, u);
                                        break e;
                                    }
                                    C = S;
                                    break e;
                                case 3: S.flags = S.flags & -4097 | 64;
                                case 0:
                                    if (S = k.payload, u = typeof S == "function" ? S.call(h, C, u) : S, u == null)
                                        break e;
                                    C = M({}, C, u);
                                    break e;
                                case 2: Oe = !0;
                            }
                        }
                        i.callback !== null && (e.flags |= 32, u = l.effects, u === null ? l.effects = [i] : u.push(i));
                    }
                    else
                        h = { eventTime: h, lane: u, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (d = y = h, s = C) : y = y.next = h, o |= u;
                    if (i = i.next, i === null) {
                        if (u = l.shared.pending, u === null)
                            break;
                        i = u.next, u.next = null, l.lastBaseUpdate = u, l.shared.pending = null;
                    }
                } while (1);
                y === null && (s = C), l.baseState = s, l.firstBaseUpdate = d, l.lastBaseUpdate = y, vt |= o, e.lanes = o, e.memoizedState = C;
            }
        }
        function yu(e, n, t) {
            if (e = n.effects, n.effects = null, e !== null)
                for (n = 0; n < e.length; n++) {
                    var r = e[n], l = r.callback;
                    if (l !== null) {
                        if (r.callback = null, r = t, typeof l != "function")
                            throw Error(v(191, l));
                        l.call(r);
                    }
                }
        }
        var gu = new _t.Component().refs;
        function ur(e, n, t, r) { n = e.memoizedState, t = t(r, n), t = t == null ? n : M({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t); }
        var sr = { isMounted: function (e) { return (e = e._reactInternals) ? $e(e) === e : !1; }, enqueueSetState: function (e, n, t) { e = e._reactInternals; var r = b(), l = Fe(e), i = Me(r, l); i.payload = n, t != null && (i.callback = t), Re(e, i), je(e, l, r); }, enqueueReplaceState: function (e, n, t) { e = e._reactInternals; var r = b(), l = Fe(e), i = Me(r, l); i.tag = 1, i.payload = n, t != null && (i.callback = t), Re(e, i), je(e, l, r); }, enqueueForceUpdate: function (e, n) { e = e._reactInternals; var t = b(), r = Fe(e), l = Me(t, r); l.tag = 2, n != null && (l.callback = n), Re(e, l), je(e, r, t); } };
        function wu(e, n, t, r, l, i, o) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !qn(t, r) || !qn(l, i) : !0; }
        function Su(e, n, t) { var r = !1, l = ze, i = n.contextType; return typeof i == "object" && i !== null ? i = ne(i) : (l = G(n) ? Xe : W.current, r = n.contextTypes, i = (r = r != null) ? wn(e, l) : ze), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sr, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n; }
        function Eu(e, n, t, r) { e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sr.enqueueReplaceState(n, n.state, null); }
        function $l(e, n, t, r) { var l = e.stateNode; l.props = t, l.state = e.memoizedState, l.refs = gu, Ql(e); var i = n.contextType; typeof i == "object" && i !== null ? l.context = ne(i) : (i = G(n) ? Xe : W.current, l.context = wn(e, i)), lt(e, t, l, r), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (ur(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sr.enqueueReplaceState(l, l.state, null), lt(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4); }
        var ar = Array.isArray;
        function it(e, n, t) {
            if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (t._owner) {
                    if (t = t._owner, t) {
                        if (t.tag !== 1)
                            throw Error(v(309));
                        var r = t.stateNode;
                    }
                    if (!r)
                        throw Error(v(147, e));
                    var l = "" + e;
                    return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l ? n.ref : (n = function (i) { var o = r.refs; o === gu && (o = r.refs = {}), i === null ? delete o[l] : o[l] = i; }, n._stringRef = l, n);
                }
                if (typeof e != "string")
                    throw Error(v(284));
                if (!t._owner)
                    throw Error(v(290, e));
            }
            return e;
        }
        function fr(e, n) {
            if (e.type !== "textarea")
                throw Error(v(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
        }
        function ku(e) {
            function n(c, a) {
                if (e) {
                    var f = c.lastEffect;
                    f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
                }
            }
            function t(c, a) {
                if (!e)
                    return null;
                for (; a !== null;)
                    n(c, a), a = a.sibling;
                return null;
            }
            function r(c, a) {
                for (c = new Map; a !== null;)
                    a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
                return c;
            }
            function l(c, a) { return c = Be(c, a), c.index = 0, c.sibling = null, c; }
            function i(c, a, f) { return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a; }
            function o(c) { return e && c.alternate === null && (c.flags = 2), c; }
            function u(c, a, f, p) { return a === null || a.tag !== 6 ? (a = Pi(f, c.mode, p), a.return = c, a) : (a = l(a, f), a.return = c, a); }
            function s(c, a, f, p) { return a !== null && a.elementType === f.type ? (p = l(a, f.props), p.ref = it(c, a, f), p.return = c, p) : (p = Tr(f.type, f.key, f.props, null, c.mode, p), p.ref = it(c, a, f), p.return = c, p); }
            function d(c, a, f, p) { return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Ti(f, c.mode, p), a.return = c, a) : (a = l(a, f.children || []), a.return = c, a); }
            function y(c, a, f, p, m) { return a === null || a.tag !== 7 ? (a = zn(f, c.mode, p, m), a.return = c, a) : (a = l(a, f), a.return = c, a); }
            function C(c, a, f) {
                if (typeof a == "string" || typeof a == "number")
                    return a = Pi("" + a, c.mode, f), a.return = c, a;
                if (typeof a == "object" && a !== null) {
                    switch (a.$$typeof) {
                        case Mn: return f = Tr(a.type, a.key, a.props, null, c.mode, f), f.ref = it(c, null, a), f.return = c, f;
                        case Ae: return a = Ti(a, c.mode, f), a.return = c, a;
                    }
                    if (ar(a) || In(a))
                        return a = zn(a, c.mode, f, null), a.return = c, a;
                    fr(c, a);
                }
                return null;
            }
            function h(c, a, f, p) {
                var m = a !== null ? a.key : null;
                if (typeof f == "string" || typeof f == "number")
                    return m !== null ? null : u(c, a, "" + f, p);
                if (typeof f == "object" && f !== null) {
                    switch (f.$$typeof) {
                        case Mn: return f.key === m ? f.type === Ee ? y(c, a, f.props.children, p, m) : s(c, a, f, p) : null;
                        case Ae: return f.key === m ? d(c, a, f, p) : null;
                    }
                    if (ar(f) || In(f))
                        return m !== null ? null : y(c, a, f, p, null);
                    fr(c, f);
                }
                return null;
            }
            function S(c, a, f, p, m) {
                if (typeof p == "string" || typeof p == "number")
                    return c = c.get(f) || null, u(a, c, "" + p, m);
                if (typeof p == "object" && p !== null) {
                    switch (p.$$typeof) {
                        case Mn: return c = c.get(p.key === null ? f : p.key) || null, p.type === Ee ? y(a, c, p.props.children, m, p.key) : s(a, c, p, m);
                        case Ae: return c = c.get(p.key === null ? f : p.key) || null, d(a, c, p, m);
                    }
                    if (ar(p) || In(p))
                        return c = c.get(f) || null, y(a, c, p, m, null);
                    fr(a, p);
                }
                return null;
            }
            function k(c, a, f, p) {
                for (var m = null, _ = null, w = a, N = a = 0, T = null; w !== null && N < f.length; N++) {
                    w.index > N ? (T = w, w = null) : T = w.sibling;
                    var P = h(c, w, f[N], p);
                    if (P === null) {
                        w === null && (w = T);
                        break;
                    }
                    e && w && P.alternate === null && n(c, w), a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P, w = T;
                }
                if (N === f.length)
                    return t(c, w), m;
                if (w === null) {
                    for (; N < f.length; N++)
                        w = C(c, f[N], p), w !== null && (a = i(w, a, N), _ === null ? m = w : _.sibling = w, _ = w);
                    return m;
                }
                for (w = r(c, w); N < f.length; N++)
                    T = S(w, c, N, f[N], p), T !== null && (e && T.alternate !== null && w.delete(T.key === null ? N : T.key), a = i(T, a, N), _ === null ? m = T : _.sibling = T, _ = T);
                return e && w.forEach(function (Se) { return n(c, Se); }), m;
            }
            function E(c, a, f, p) {
                var m = In(f);
                if (typeof m != "function")
                    throw Error(v(150));
                if (f = m.call(f), f == null)
                    throw Error(v(151));
                for (var _ = m = null, w = a, N = a = 0, T = null, P = f.next(); w !== null && !P.done; N++, P = f.next()) {
                    w.index > N ? (T = w, w = null) : T = w.sibling;
                    var Se = h(c, w, P.value, p);
                    if (Se === null) {
                        w === null && (w = T);
                        break;
                    }
                    e && w && Se.alternate === null && n(c, w), a = i(Se, a, N), _ === null ? m = Se : _.sibling = Se, _ = Se, w = T;
                }
                if (P.done)
                    return t(c, w), m;
                if (w === null) {
                    for (; !P.done; N++, P = f.next())
                        P = C(c, P.value, p), P !== null && (a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P);
                    return m;
                }
                for (w = r(c, w); !P.done; N++, P = f.next())
                    P = S(w, c, N, P.value, p), P !== null && (e && P.alternate !== null && w.delete(P.key === null ? N : P.key), a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P);
                return e && w.forEach(function (Cs) { return n(c, Cs); }), m;
            }
            return function (c, a, f, p) {
                var m = typeof f == "object" && f !== null && f.type === Ee && f.key === null;
                m && (f = f.props.children);
                var _ = typeof f == "object" && f !== null;
                if (_)
                    switch (f.$$typeof) {
                        case Mn:
                            e: {
                                for (_ = f.key, m = a; m !== null;) {
                                    if (m.key === _) {
                                        switch (m.tag) {
                                            case 7:
                                                if (f.type === Ee) {
                                                    t(c, m.sibling), a = l(m, f.props.children), a.return = c, c = a;
                                                    break e;
                                                }
                                                break;
                                            default: if (m.elementType === f.type) {
                                                t(c, m.sibling), a = l(m, f.props), a.ref = it(c, m, f), a.return = c, c = a;
                                                break e;
                                            }
                                        }
                                        t(c, m);
                                        break;
                                    }
                                    else
                                        n(c, m);
                                    m = m.sibling;
                                }
                                f.type === Ee ? (a = zn(f.props.children, c.mode, p, f.key), a.return = c, c = a) : (p = Tr(f.type, f.key, f.props, null, c.mode, p), p.ref = it(c, a, f), p.return = c, c = p);
                            }
                            return o(c);
                        case Ae:
                            e: {
                                for (m = f.key; a !== null;) {
                                    if (a.key === m)
                                        if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                            t(c, a.sibling), a = l(a, f.children || []), a.return = c, c = a;
                                            break e;
                                        }
                                        else {
                                            t(c, a);
                                            break;
                                        }
                                    else
                                        n(c, a);
                                    a = a.sibling;
                                }
                                a = Ti(f, c.mode, p), a.return = c, c = a;
                            }
                            return o(c);
                    }
                if (typeof f == "string" || typeof f == "number")
                    return f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, f), a.return = c, c = a) : (t(c, a), a = Pi(f, c.mode, p), a.return = c, c = a), o(c);
                if (ar(f))
                    return k(c, a, f, p);
                if (In(f))
                    return E(c, a, f, p);
                if (_ && fr(c, f), typeof f == "undefined" && !m)
                    switch (c.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15: throw Error(v(152, tn(c.type) || "Component"));
                    }
                return t(c, a);
            };
        }
        var cr = ku(!0), xu = ku(!1), ot = {}, fe = Le(ot), ut = Le(ot), st = Le(ot);
        function Ze(e) {
            if (e === ot)
                throw Error(v(174));
            return e;
        }
        function Yl(e, n) {
            switch (R(st, n), R(ut, e), R(fe, ot), e = n.nodeType, e) {
                case 9:
                case 11:
                    n = (n = n.documentElement) ? n.namespaceURI : qr(null, "");
                    break;
                default: e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = qr(n, e);
            }
            O(fe), R(fe, n);
        }
        function xn() { O(fe), O(ut), O(st); }
        function Cu(e) { Ze(st.current); var n = Ze(fe.current), t = qr(n, e.type); n !== t && (R(ut, e), R(fe, t)); }
        function Xl(e) { ut.current === e && (O(fe), O(ut)); }
        var D = Le(0);
        function dr(e) {
            for (var n = e; n !== null;) {
                if (n.tag === 13) {
                    var t = n.memoizedState;
                    if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
                        return n;
                }
                else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                    if ((n.flags & 64) != 0)
                        return n;
                }
                else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue;
                }
                if (n === e)
                    break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === e)
                        return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
            return null;
        }
        var ve = null, De = null, ce = !1;
        function _u(e, n) { var t = le(5, null, null, 0); t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t; }
        function Nu(e, n) {
            switch (e.tag) {
                case 5:
                    var t = e.type;
                    return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
                case 6: return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
                case 13: return !1;
                default: return !1;
            }
        }
        function Kl(e) {
            if (ce) {
                var n = De;
                if (n) {
                    var t = n;
                    if (!Nu(e, n)) {
                        if (n = hn(t.nextSibling), !n || !Nu(e, n)) {
                            e.flags = e.flags & -1025 | 2, ce = !1, ve = e;
                            return;
                        }
                        _u(ve, t);
                    }
                    ve = e, De = hn(n.firstChild);
                }
                else
                    e.flags = e.flags & -1025 | 2, ce = !1, ve = e;
            }
        }
        function Pu(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
                e = e.return;
            ve = e;
        }
        function pr(e) {
            if (e !== ve)
                return !1;
            if (!ce)
                return Pu(e), ce = !0, !1;
            var n = e.type;
            if (e.tag !== 5 || n !== "head" && n !== "body" && !Ml(n, e.memoizedProps))
                for (n = De; n;)
                    _u(e, n), n = hn(n.nextSibling);
            if (Pu(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                    throw Error(v(317));
                e: {
                    for (e = e.nextSibling, n = 0; e;) {
                        if (e.nodeType === 8) {
                            var t = e.data;
                            if (t === "/$") {
                                if (n === 0) {
                                    De = hn(e.nextSibling);
                                    break e;
                                }
                                n--;
                            }
                            else
                                t !== "$" && t !== "$!" && t !== "$?" || n++;
                        }
                        e = e.nextSibling;
                    }
                    De = null;
                }
            }
            else
                De = ve ? hn(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Gl() { De = ve = null, ce = !1; }
        var Cn = [];
        function Zl() {
            for (var e = 0; e < Cn.length; e++)
                Cn[e]._workInProgressVersionPrimary = null;
            Cn.length = 0;
        }
        var at = We.ReactCurrentDispatcher, te = We.ReactCurrentBatchConfig, ft = 0, I = null, Q = null, B = null, mr = !1, ct = !1;
        function Z() { throw Error(v(321)); }
        function Jl(e, n) {
            if (n === null)
                return !1;
            for (var t = 0; t < n.length && t < e.length; t++)
                if (!ee(e[t], n[t]))
                    return !1;
            return !0;
        }
        function ql(e, n, t, r, l, i) {
            if (ft = i, I = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, at.current = e === null || e.memoizedState === null ? Ja : qa, e = t(r, l), ct) {
                i = 0;
                do {
                    if (ct = !1, !(25 > i))
                        throw Error(v(301));
                    i += 1, B = Q = null, n.updateQueue = null, at.current = ba, e = t(r, l);
                } while (ct);
            }
            if (at.current = gr, n = Q !== null && Q.next !== null, ft = 0, B = Q = I = null, mr = !1, n)
                throw Error(v(300));
            return e;
        }
        function Je() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return B === null ? I.memoizedState = B = e : B = B.next = e, B; }
        function qe() {
            if (Q === null) {
                var e = I.alternate;
                e = e !== null ? e.memoizedState : null;
            }
            else
                e = Q.next;
            var n = B === null ? I.memoizedState : B.next;
            if (n !== null)
                B = n, Q = e;
            else {
                if (e === null)
                    throw Error(v(310));
                Q = e, e = { memoizedState: Q.memoizedState, baseState: Q.baseState, baseQueue: Q.baseQueue, queue: Q.queue, next: null }, B === null ? I.memoizedState = B = e : B = B.next = e;
            }
            return B;
        }
        function de(e, n) { return typeof n == "function" ? n(e) : n; }
        function dt(e) {
            var n = qe(), t = n.queue;
            if (t === null)
                throw Error(v(311));
            t.lastRenderedReducer = e;
            var r = Q, l = r.baseQueue, i = t.pending;
            if (i !== null) {
                if (l !== null) {
                    var o = l.next;
                    l.next = i.next, i.next = o;
                }
                r.baseQueue = l = i, t.pending = null;
            }
            if (l !== null) {
                l = l.next, r = r.baseState;
                var u = o = i = null, s = l;
                do {
                    var d = s.lane;
                    if ((ft & d) === d)
                        u !== null && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                    else {
                        var y = { lane: d, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null };
                        u === null ? (o = u = y, i = r) : u = u.next = y, I.lanes |= d, vt |= d;
                    }
                    s = s.next;
                } while (s !== null && s !== l);
                u === null ? i = r : u.next = o, ee(r, n.memoizedState) || (ue = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = u, t.lastRenderedState = r;
            }
            return [n.memoizedState, t.dispatch];
        }
        function pt(e) {
            var n = qe(), t = n.queue;
            if (t === null)
                throw Error(v(311));
            t.lastRenderedReducer = e;
            var r = t.dispatch, l = t.pending, i = n.memoizedState;
            if (l !== null) {
                t.pending = null;
                var o = l = l.next;
                do
                    i = e(i, o.action), o = o.next;
                while (o !== l);
                ee(i, n.memoizedState) || (ue = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
            }
            return [i, r];
        }
        function Tu(e, n, t) {
            var r = n._getVersion;
            r = r(n._source);
            var l = n._workInProgressVersionPrimary;
            if (l !== null ? e = l === r : (e = e.mutableReadLanes, (e = (ft & e) === e) && (n._workInProgressVersionPrimary = r, Cn.push(n))), e)
                return t(n._source);
            throw Cn.push(n), Error(v(350));
        }
        function Lu(e, n, t, r) {
            var l = X;
            if (l === null)
                throw Error(v(349));
            var i = n._getVersion, o = i(n._source), u = at.current, s = u.useState(function () { return Tu(l, n, t); }), d = s[1], y = s[0];
            s = B;
            var C = e.memoizedState, h = C.refs, S = h.getSnapshot, k = C.source;
            C = C.subscribe;
            var E = I;
            return e.memoizedState = { refs: h, source: n, subscribe: r }, u.useEffect(function () {
                h.getSnapshot = t, h.setSnapshot = d;
                var c = i(n._source);
                if (!ee(o, c)) {
                    c = t(n._source), ee(y, c) || (d(c), c = Fe(E), l.mutableReadLanes |= c & l.pendingLanes), c = l.mutableReadLanes, l.entangledLanes |= c;
                    for (var a = l.entanglements, f = c; 0 < f;) {
                        var p = 31 - Ne(f), m = 1 << p;
                        a[p] |= c, f &= ~m;
                    }
                }
            }, [t, n, r]), u.useEffect(function () {
                return r(n._source, function () {
                    var c = h.getSnapshot, a = h.setSnapshot;
                    try {
                        a(c(n._source));
                        var f = Fe(E);
                        l.mutableReadLanes |= f & l.pendingLanes;
                    }
                    catch (p) {
                        a(function () { throw p; });
                    }
                });
            }, [n, r]), ee(S, t) && ee(k, n) && ee(C, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: de, lastRenderedState: y }, e.dispatch = d = ti.bind(null, I, e), s.queue = e, s.baseQueue = null, y = Tu(l, n, t), s.memoizedState = s.baseState = y), y;
        }
        function zu(e, n, t) { var r = qe(); return Lu(r, e, n, t); }
        function mt(e) { var n = Je(); return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: de, lastRenderedState: e }, e = e.dispatch = ti.bind(null, I, e), [n.memoizedState, e]; }
        function hr(e, n, t, r) { return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = I.updateQueue, n === null ? (n = { lastEffect: null }, I.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e; }
        function Ou(e) { var n = Je(); return e = { current: e }, n.memoizedState = e; }
        function vr() { return qe().memoizedState; }
        function bl(e, n, t, r) { var l = Je(); I.flags |= e, l.memoizedState = hr(1 | n, t, void 0, r === void 0 ? null : r); }
        function ei(e, n, t, r) {
            var l = qe();
            r = r === void 0 ? null : r;
            var i = void 0;
            if (Q !== null) {
                var o = Q.memoizedState;
                if (i = o.destroy, r !== null && Jl(r, o.deps)) {
                    hr(n, t, i, r);
                    return;
                }
            }
            I.flags |= e, l.memoizedState = hr(1 | n, t, i, r);
        }
        function Mu(e, n) { return bl(516, 4, e, n); }
        function yr(e, n) { return ei(516, 4, e, n); }
        function Ru(e, n) { return ei(4, 2, e, n); }
        function Du(e, n) {
            if (typeof n == "function")
                return e = e(), n(e), function () { n(null); };
            if (n != null)
                return e = e(), n.current = e, function () { n.current = null; };
        }
        function Iu(e, n, t) { return t = t != null ? t.concat([e]) : null, ei(4, 2, Du.bind(null, n, e), t); }
        function ni() { }
        function Fu(e, n) { var t = qe(); n = n === void 0 ? null : n; var r = t.memoizedState; return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e); }
        function ju(e, n) { var t = qe(); n = n === void 0 ? null : n; var r = t.memoizedState; return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e); }
        function Za(e, n) {
            var t = Sn();
            Ge(98 > t ? 98 : t, function () { e(!0); }), Ge(97 < t ? 97 : t, function () {
                var r = te.transition;
                te.transition = 1;
                try {
                    e(!1), n();
                }
                finally {
                    te.transition = r;
                }
            });
        }
        function ti(e, n, t) {
            var r = b(), l = Fe(e), i = { lane: l, action: t, eagerReducer: null, eagerState: null, next: null }, o = n.pending;
            if (o === null ? i.next = i : (i.next = o.next, o.next = i), n.pending = i, o = e.alternate, e === I || o !== null && o === I)
                ct = mr = !0;
            else {
                if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
                    try {
                        var u = n.lastRenderedState, s = o(u, t);
                        if (i.eagerReducer = o, i.eagerState = s, ee(s, u))
                            return;
                    }
                    catch (d) { }
                    finally { }
                je(e, l, r);
            }
        }
        var gr = { readContext: ne, useCallback: Z, useContext: Z, useEffect: Z, useImperativeHandle: Z, useLayoutEffect: Z, useMemo: Z, useReducer: Z, useRef: Z, useState: Z, useDebugValue: Z, useDeferredValue: Z, useTransition: Z, useMutableSource: Z, useOpaqueIdentifier: Z, unstable_isNewReconciler: !1 }, Ja = { readContext: ne, useCallback: function (e, n) { return Je().memoizedState = [e, n === void 0 ? null : n], e; }, useContext: ne, useEffect: Mu, useImperativeHandle: function (e, n, t) { return t = t != null ? t.concat([e]) : null, bl(4, 2, Du.bind(null, n, e), t); }, useLayoutEffect: function (e, n) { return bl(4, 2, e, n); }, useMemo: function (e, n) { var t = Je(); return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e; }, useReducer: function (e, n, t) { var r = Je(); return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, e = e.dispatch = ti.bind(null, I, e), [r.memoizedState, e]; }, useRef: Ou, useState: mt, useDebugValue: ni, useDeferredValue: function (e) {
                var n = mt(e), t = n[0], r = n[1];
                return Mu(function () {
                    var l = te.transition;
                    te.transition = 1;
                    try {
                        r(e);
                    }
                    finally {
                        te.transition = l;
                    }
                }, [e]), t;
            }, useTransition: function () { var e = mt(!1), n = e[0]; return e = Za.bind(null, e[1]), Ou(e), [e, n]; }, useMutableSource: function (e, n, t) { var r = Je(); return r.memoizedState = { refs: { getSnapshot: n, setSnapshot: null }, source: e, subscribe: t }, Lu(r, e, n, t); }, useOpaqueIdentifier: function () {
                if (ce) {
                    var e = !1, n = Qa(function () { throw e || (e = !0, t("r:" + (Dl++).toString(36))), Error(v(355)); }), t = mt(n)[1];
                    return (I.mode & 2) == 0 && (I.flags |= 516, hr(5, function () { t("r:" + (Dl++).toString(36)); }, void 0, null)), n;
                }
                return n = "r:" + (Dl++).toString(36), mt(n), n;
            }, unstable_isNewReconciler: !1 }, qa = { readContext: ne, useCallback: Fu, useContext: ne, useEffect: yr, useImperativeHandle: Iu, useLayoutEffect: Ru, useMemo: ju, useReducer: dt, useRef: vr, useState: function () { return dt(de); }, useDebugValue: ni, useDeferredValue: function (e) {
                var n = dt(de), t = n[0], r = n[1];
                return yr(function () {
                    var l = te.transition;
                    te.transition = 1;
                    try {
                        r(e);
                    }
                    finally {
                        te.transition = l;
                    }
                }, [e]), t;
            }, useTransition: function () { var e = dt(de)[0]; return [vr().current, e]; }, useMutableSource: zu, useOpaqueIdentifier: function () { return dt(de)[0]; }, unstable_isNewReconciler: !1 }, ba = { readContext: ne, useCallback: Fu, useContext: ne, useEffect: yr, useImperativeHandle: Iu, useLayoutEffect: Ru, useMemo: ju, useReducer: pt, useRef: vr, useState: function () { return pt(de); }, useDebugValue: ni, useDeferredValue: function (e) {
                var n = pt(de), t = n[0], r = n[1];
                return yr(function () {
                    var l = te.transition;
                    te.transition = 1;
                    try {
                        r(e);
                    }
                    finally {
                        te.transition = l;
                    }
                }, [e]), t;
            }, useTransition: function () { var e = pt(de)[0]; return [vr().current, e]; }, useMutableSource: zu, useOpaqueIdentifier: function () { return pt(de)[0]; }, unstable_isNewReconciler: !1 }, ef = We.ReactCurrentOwner, ue = !1;
        function J(e, n, t, r) { n.child = e === null ? xu(n, null, t, r) : cr(n, e.child, t, r); }
        function Uu(e, n, t, r, l) { t = t.render; var i = n.ref; return kn(n, l), r = ql(e, n, t, r, i, l), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l, ye(e, n, l)) : (n.flags |= 1, J(e, n, r, l), n.child); }
        function Vu(e, n, t, r, l, i) {
            if (e === null) {
                var o = t.type;
                return typeof o == "function" && !_i(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Bu(e, n, o, r, l, i)) : (e = Tr(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
            }
            return o = e.child, (l & i) == 0 && (l = o.memoizedProps, t = t.compare, t = t !== null ? t : qn, t(l, r) && e.ref === n.ref) ? ye(e, n, i) : (n.flags |= 1, e = Be(o, r), e.ref = n.ref, e.return = n, n.child = e);
        }
        function Bu(e, n, t, r, l, i) {
            if (e !== null && qn(e.memoizedProps, r) && e.ref === n.ref)
                if (ue = !1, (i & l) != 0)
                    (e.flags & 16384) != 0 && (ue = !0);
                else
                    return n.lanes = e.lanes, ye(e, n, i);
            return li(e, n, t, r, i);
        }
        function ri(e, n, t) {
            var r = n.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
            if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
                if ((n.mode & 4) == 0)
                    n.memoizedState = { baseLanes: 0 }, Pr(n, t);
                else if ((t & 1073741824) != 0)
                    n.memoizedState = { baseLanes: 0 }, Pr(n, i !== null ? i.baseLanes : t);
                else
                    return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e }, Pr(n, e), null;
            else
                i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, Pr(n, r);
            return J(e, n, l, t), n.child;
        }
        function Hu(e, n) { var t = n.ref; (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128); }
        function li(e, n, t, r, l) { var i = G(t) ? Xe : W.current; return i = wn(n, i), kn(n, l), t = ql(e, n, t, r, i, l), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l, ye(e, n, l)) : (n.flags |= 1, J(e, n, t, l), n.child); }
        function Wu(e, n, t, r, l) {
            if (G(t)) {
                var i = !0;
                nr(n);
            }
            else
                i = !1;
            if (kn(n, l), n.stateNode === null)
                e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), Su(n, t, r), $l(n, t, r, l), r = !0;
            else if (e === null) {
                var o = n.stateNode, u = n.memoizedProps;
                o.props = u;
                var s = o.context, d = t.contextType;
                typeof d == "object" && d !== null ? d = ne(d) : (d = G(t) ? Xe : W.current, d = wn(n, d));
                var y = t.getDerivedStateFromProps, C = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
                C || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && Eu(n, o, r, d), Oe = !1;
                var h = n.memoizedState;
                o.state = h, lt(n, r, o, l), s = n.memoizedState, u !== r || h !== s || K.current || Oe ? (typeof y == "function" && (ur(n, t, y, r), s = n.memoizedState), (u = Oe || wu(n, t, u, r, h, s, d)) ? (C || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4)) : (typeof o.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4), r = !1);
            }
            else {
                o = n.stateNode, hu(e, n), u = n.memoizedProps, d = n.type === n.elementType ? u : oe(n.type, u), o.props = d, C = n.pendingProps, h = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = ne(s) : (s = G(t) ? Xe : W.current, s = wn(n, s));
                var S = t.getDerivedStateFromProps;
                (y = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== C || h !== s) && Eu(n, o, r, s), Oe = !1, h = n.memoizedState, o.state = h, lt(n, r, o, l);
                var k = n.memoizedState;
                u !== C || h !== k || K.current || Oe ? (typeof S == "function" && (ur(n, t, S, r), k = n.memoizedState), (d = Oe || wu(n, t, d, r, h, k, s)) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k), o.props = r, o.state = k, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 256), r = !1);
            }
            return ii(e, n, t, r, i, l);
        }
        function ii(e, n, t, r, l, i) {
            Hu(e, n);
            var o = (n.flags & 64) != 0;
            if (!r && !o)
                return l && iu(n, t, !1), ye(e, n, i);
            r = n.stateNode, ef.current = n;
            var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
            return n.flags |= 1, e !== null && o ? (n.child = cr(n, e.child, null, i), n.child = cr(n, null, u, i)) : J(e, n, u, i), n.memoizedState = r.state, l && iu(n, t, !0), n.child;
        }
        function Au(e) { var n = e.stateNode; n.pendingContext ? ru(e, n.pendingContext, n.pendingContext !== n.context) : n.context && ru(e, n.context, !1), Yl(e, n.containerInfo); }
        var wr = { dehydrated: null, retryLane: 0 };
        function Qu(e, n, t) { var r = n.pendingProps, l = D.current, i = !1, o; return (o = (n.flags & 64) != 0) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) != 0), o ? (i = !0, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l |= 1), R(D, l & 1), e === null ? (r.fallback !== void 0 && Kl(n), e = r.children, l = r.fallback, i ? (e = $u(n, e, l, t), n.child.memoizedState = { baseLanes: t }, n.memoizedState = wr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = $u(n, e, l, t), n.child.memoizedState = { baseLanes: t }, n.memoizedState = wr, n.lanes = 33554432, e) : (t = Ni({ mode: "visible", children: e }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t) : i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l = e.child.memoizedState, i.memoizedState = l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t); }
        function $u(e, n, t, r) { var l = e.mode, i = e.child; return n = { mode: "hidden", children: n }, (l & 2) == 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n) : i = Ni(n, l, 0, null), t = zn(t, l, r, null), i.return = e, t.return = e, i.sibling = t, e.child = i, t; }
        function Yu(e, n, t, r) { var l = e.child; return e = l.sibling, t = Be(l, { mode: "visible", children: t }), (n.mode & 2) == 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t; }
        function Xu(e, n, t, r, l) { var i = n.mode, o = e.child; e = o.sibling; var u = { mode: "hidden", children: t }; return (i & 2) == 0 && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = u, o = t.lastEffect, o !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o, o.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Be(o, u), e !== null ? r = Be(e, r) : (r = zn(r, i, l, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r; }
        function Ku(e, n) { e.lanes |= n; var t = e.alternate; t !== null && (t.lanes |= n), mu(e.return, n); }
        function oi(e, n, t, r, l, i) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l, lastEffect: i } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l, o.lastEffect = i); }
        function Gu(e, n, t) {
            var r = n.pendingProps, l = r.revealOrder, i = r.tail;
            if (J(e, n, r.children, t), r = D.current, (r & 2) != 0)
                r = r & 1 | 2, n.flags |= 64;
            else {
                if (e !== null && (e.flags & 64) != 0)
                    e: for (e = n.child; e !== null;) {
                        if (e.tag === 13)
                            e.memoizedState !== null && Ku(e, t);
                        else if (e.tag === 19)
                            Ku(e, t);
                        else if (e.child !== null) {
                            e.child.return = e, e = e.child;
                            continue;
                        }
                        if (e === n)
                            break e;
                        for (; e.sibling === null;) {
                            if (e.return === null || e.return === n)
                                break e;
                            e = e.return;
                        }
                        e.sibling.return = e.return, e = e.sibling;
                    }
                r &= 1;
            }
            if (R(D, r), (n.mode & 2) == 0)
                n.memoizedState = null;
            else
                switch (l) {
                    case "forwards":
                        for (t = n.child, l = null; t !== null;)
                            e = t.alternate, e !== null && dr(e) === null && (l = t), t = t.sibling;
                        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), oi(n, !1, l, t, i, n.lastEffect);
                        break;
                    case "backwards":
                        for (t = null, l = n.child, n.child = null; l !== null;) {
                            if (e = l.alternate, e !== null && dr(e) === null) {
                                n.child = l;
                                break;
                            }
                            e = l.sibling, l.sibling = t, t = l, l = e;
                        }
                        oi(n, !0, t, null, i, n.lastEffect);
                        break;
                    case "together":
                        oi(n, !1, null, null, void 0, n.lastEffect);
                        break;
                    default: n.memoizedState = null;
                }
            return n.child;
        }
        function ye(e, n, t) {
            if (e !== null && (n.dependencies = e.dependencies), vt |= n.lanes, (t & n.childLanes) != 0) {
                if (e !== null && n.child !== e.child)
                    throw Error(v(153));
                if (n.child !== null) {
                    for (e = n.child, t = Be(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)
                        e = e.sibling, t = t.sibling = Be(e, e.pendingProps), t.return = n;
                    t.sibling = null;
                }
                return n.child;
            }
            return null;
        }
        var Zu, ui, Ju, qu;
        Zu = function (e, n) {
            for (var t = n.child; t !== null;) {
                if (t.tag === 5 || t.tag === 6)
                    e.appendChild(t.stateNode);
                else if (t.tag !== 4 && t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === n)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === n)
                        return;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        };
        ui = function () { };
        Ju = function (e, n, t, r) {
            var l = e.memoizedProps;
            if (l !== r) {
                e = n.stateNode, Ze(fe.current);
                var i = null;
                switch (t) {
                    case "input":
                        l = Yr(e, l), r = Yr(e, r), i = [];
                        break;
                    case "option":
                        l = Gr(e, l), r = Gr(e, r), i = [];
                        break;
                    case "select":
                        l = M({}, l, { value: void 0 }), r = M({}, r, { value: void 0 }), i = [];
                        break;
                    case "textarea":
                        l = Zr(e, l), r = Zr(e, r), i = [];
                        break;
                    default: typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zt);
                }
                br(t, r);
                var o;
                t = null;
                for (d in l)
                    if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                        if (d === "style") {
                            var u = l[d];
                            for (o in u)
                                u.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
                        }
                        else
                            d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
                for (d in r) {
                    var s = r[d];
                    if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null))
                        if (d === "style")
                            if (u) {
                                for (o in u)
                                    !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
                                for (o in s)
                                    s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
                            }
                            else
                                t || (i || (i = []), i.push(d, t)), t = s;
                        else
                            d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (s != null && d === "onScroll" && z("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Hr ? s.toString() : (i = i || []).push(d, s));
                }
                t && (i = i || []).push("style", t);
                var d = i;
                (n.updateQueue = d) && (n.flags |= 4);
            }
        };
        qu = function (e, n, t, r) { t !== r && (n.flags |= 4); };
        function ht(e, n) {
            if (!ce)
                switch (e.tailMode) {
                    case "hidden":
                        n = e.tail;
                        for (var t = null; n !== null;)
                            n.alternate !== null && (t = n), n = n.sibling;
                        t === null ? e.tail = null : t.sibling = null;
                        break;
                    case "collapsed":
                        t = e.tail;
                        for (var r = null; t !== null;)
                            t.alternate !== null && (r = t), t = t.sibling;
                        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
                }
        }
        function nf(e, n, t) {
            var r = n.pendingProps;
            switch (n.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14: return null;
                case 1: return G(n.type) && er(), null;
                case 3: return xn(), O(K), O(W), Zl(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), ui(n), null;
                case 5:
                    Xl(n);
                    var l = Ze(st.current);
                    if (t = n.type, e !== null && n.stateNode != null)
                        Ju(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 128);
                    else {
                        if (!r) {
                            if (n.stateNode === null)
                                throw Error(v(166));
                            return null;
                        }
                        if (e = Ze(fe.current), pr(n)) {
                            r = n.stateNode, t = n.type;
                            var i = n.memoizedProps;
                            switch (r[Te] = n, r[qt] = i, t) {
                                case "dialog":
                                    z("cancel", r), z("close", r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    z("load", r);
                                    break;
                                case "video":
                                case "audio":
                                    for (e = 0; e < et.length; e++)
                                        z(et[e], r);
                                    break;
                                case "source":
                                    z("error", r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    z("error", r), z("load", r);
                                    break;
                                case "details":
                                    z("toggle", r);
                                    break;
                                case "input":
                                    Ai(r, i), z("invalid", r);
                                    break;
                                case "select":
                                    r._wrapperState = { wasMultiple: !!i.multiple }, z("invalid", r);
                                    break;
                                case "textarea": Yi(r, i), z("invalid", r);
                            }
                            br(t, i), e = null;
                            for (var o in i)
                                i.hasOwnProperty(o) && (l = i[o], o === "children" ? typeof l == "string" ? r.textContent !== l && (e = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (e = ["children", "" + l]) : On.hasOwnProperty(o) && l != null && o === "onScroll" && z("scroll", r));
                            switch (t) {
                                case "input":
                                    zt(r), $i(r, i, !0);
                                    break;
                                case "textarea":
                                    zt(r), Ki(r);
                                    break;
                                case "select":
                                case "option": break;
                                default: typeof i.onClick == "function" && (r.onclick = Zt);
                            }
                            r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
                        }
                        else {
                            switch (o = l.nodeType === 9 ? l : l.ownerDocument, e === Jr.html && (e = Gi(t)), e === Jr.html ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script></script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Te] = n, e[qt] = r, Zu(e, n, !1, !1), n.stateNode = e, o = el(t, r), t) {
                                case "dialog":
                                    z("cancel", e), z("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    z("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < et.length; l++)
                                        z(et[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    z("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    z("error", e), z("load", e), l = r;
                                    break;
                                case "details":
                                    z("toggle", e), l = r;
                                    break;
                                case "input":
                                    Ai(e, r), l = Yr(e, r), z("invalid", e);
                                    break;
                                case "option":
                                    l = Gr(e, r);
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, l = M({}, r, { value: void 0 }), z("invalid", e);
                                    break;
                                case "textarea":
                                    Yi(e, r), l = Zr(e, r), z("invalid", e);
                                    break;
                                default: l = r;
                            }
                            br(t, l);
                            var u = l;
                            for (i in u)
                                if (u.hasOwnProperty(i)) {
                                    var s = u[i];
                                    i === "style" ? qi(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Zi(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jn(e, s) : typeof s == "number" && jn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s != null && i === "onScroll" && z("scroll", e) : s != null && Ir(e, i, s, o));
                                }
                            switch (t) {
                                case "input":
                                    zt(e), $i(e, r, !1);
                                    break;
                                case "textarea":
                                    zt(e), Ki(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + ke(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: typeof l.onClick == "function" && (e.onclick = Zt);
                            }
                            qo(t, r) && (n.flags |= 4);
                        }
                        n.ref !== null && (n.flags |= 128);
                    }
                    return null;
                case 6:
                    if (e && n.stateNode != null)
                        qu(e, n, e.memoizedProps, r);
                    else {
                        if (typeof r != "string" && n.stateNode === null)
                            throw Error(v(166));
                        t = Ze(st.current), Ze(fe.current), pr(n) ? (r = n.stateNode, t = n.memoizedProps, r[Te] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Te] = n, n.stateNode = r);
                    }
                    return null;
                case 13: return O(D), r = n.memoizedState, (n.flags & 64) != 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? n.memoizedProps.fallback !== void 0 && pr(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) != 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== !0 || (D.current & 1) != 0 ? H === 0 && (H = 3) : ((H === 0 || H === 3) && (H = 4), X === null || (vt & 134217727) == 0 && (Nn & 134217727) == 0 || Tn(X, $))), (r || t) && (n.flags |= 4), null);
                case 4: return xn(), ui(n), e === null && Xo(n.stateNode.containerInfo), null;
                case 10: return Al(n), null;
                case 17: return G(n.type) && er(), null;
                case 19:
                    if (O(D), r = n.memoizedState, r === null)
                        return null;
                    if (i = (n.flags & 64) != 0, o = r.rendering, o === null)
                        if (i)
                            ht(r, !1);
                        else {
                            if (H !== 0 || e !== null && (e.flags & 64) != 0)
                                for (e = n.child; e !== null;) {
                                    if (o = dr(e), o !== null) {
                                        for (n.flags |= 64, ht(r, !1), i = o.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null;)
                                            i = t, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                                        return R(D, D.current & 1 | 2), n.child;
                                    }
                                    e = e.sibling;
                                }
                            r.tail !== null && A() > gi && (n.flags |= 64, i = !0, ht(r, !1), n.lanes = 33554432);
                        }
                    else {
                        if (!i)
                            if (e = dr(o), e !== null) {
                                if (n.flags |= 64, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !ce)
                                    return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
                            }
                            else
                                2 * A() - r.renderingStartTime > gi && t !== 1073741824 && (n.flags |= 64, i = !0, ht(r, !1), n.lanes = 33554432);
                        r.isBackwards ? (o.sibling = n.child, n.child = o) : (t = r.last, t !== null ? t.sibling = o : n.child = o, r.last = o);
                    }
                    return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A(), t.sibling = null, n = D.current, R(D, i ? n & 1 | 2 : n & 1), t) : null;
                case 23:
                case 24: return Ci(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
            }
            throw Error(v(156, n.tag));
        }
        function tf(e) {
            switch (e.tag) {
                case 1:
                    G(e.type) && er();
                    var n = e.flags;
                    return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
                case 3:
                    if (xn(), O(K), O(W), Zl(), n = e.flags, (n & 64) != 0)
                        throw Error(v(285));
                    return e.flags = n & -4097 | 64, e;
                case 5: return Xl(e), null;
                case 13: return O(D), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
                case 19: return O(D), null;
                case 4: return xn(), null;
                case 10: return Al(e), null;
                case 23:
                case 24: return Ci(), null;
                default: return null;
            }
        }
        function si(e, n) {
            try {
                var t = "", r = n;
                do
                    t += Fs(r), r = r.return;
                while (r);
                var l = t;
            }
            catch (i) {
                l = `
Error generating stack: ` + i.message + `
` + i.stack;
            }
            return { value: e, source: n, stack: l };
        }
        function ai(e, n) {
            try {
                console.error(n.value);
            }
            catch (t) {
                setTimeout(function () { throw t; });
            }
        }
        var rf = typeof WeakMap == "function" ? WeakMap : Map;
        function bu(e, n, t) { t = Me(-1, t), t.tag = 3, t.payload = { element: null }; var r = n.value; return t.callback = function () { kr || (kr = !0, wi = r), ai(e, n); }, t; }
        function es(e, n, t) {
            t = Me(-1, t), t.tag = 3;
            var r = e.type.getDerivedStateFromError;
            if (typeof r == "function") {
                var l = n.value;
                t.payload = function () { return ai(e, n), r(l); };
            }
            var i = e.stateNode;
            return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function () { typeof r != "function" && (pe === null ? pe = new Set([this]) : pe.add(this), ai(e, n)); var o = n.stack; this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" }); }), t;
        }
        var lf = typeof WeakSet == "function" ? WeakSet : Set;
        function ns(e) {
            var n = e.ref;
            if (n !== null)
                if (typeof n == "function")
                    try {
                        n(null);
                    }
                    catch (t) {
                        Ve(e, t);
                    }
                else
                    n.current = null;
        }
        function of(e, n) {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22: return;
                case 1:
                    if (n.flags & 256 && e !== null) {
                        var t = e.memoizedProps, r = e.memoizedState;
                        e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
                    }
                    return;
                case 3:
                    n.flags & 256 && Rl(n.stateNode.containerInfo);
                    return;
                case 5:
                case 6:
                case 4:
                case 17: return;
            }
            throw Error(v(163));
        }
        function uf(e, n, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                        e = n = n.next;
                        do {
                            if ((e.tag & 3) == 3) {
                                var r = e.create;
                                e.destroy = r();
                            }
                            e = e.next;
                        } while (e !== n);
                    }
                    if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                        e = n = n.next;
                        do {
                            var l = e;
                            r = l.next, l = l.tag, (l & 4) != 0 && (l & 1) != 0 && (vs(t, e), hf(t, e)), e = r;
                        } while (e !== n);
                    }
                    return;
                case 1:
                    e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && yu(t, n, e);
                    return;
                case 3:
                    if (n = t.updateQueue, n !== null) {
                        if (e = null, t.child !== null)
                            switch (t.child.tag) {
                                case 5:
                                    e = t.child.stateNode;
                                    break;
                                case 1: e = t.child.stateNode;
                            }
                        yu(t, n, e);
                    }
                    return;
                case 5:
                    e = t.stateNode, n === null && t.flags & 4 && qo(t.type, t.memoizedProps) && e.focus();
                    return;
                case 6: return;
                case 4: return;
                case 12: return;
                case 13:
                    t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && ho(t))));
                    return;
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24: return;
            }
            throw Error(v(163));
        }
        function ts(e, n) {
            for (var t = e;;) {
                if (t.tag === 5) {
                    var r = t.stateNode;
                    if (n)
                        r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                    else {
                        r = t.stateNode;
                        var l = t.memoizedProps.style;
                        l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = Ji("display", l);
                    }
                }
                else if (t.tag === 6)
                    t.stateNode.nodeValue = n ? "" : t.memoizedProps;
                else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        function rs(e, n) {
            if (Ke && typeof Ke.onCommitFiberUnmount == "function")
                try {
                    Ke.onCommitFiberUnmount(Fl, n);
                }
                catch (i) { }
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                        var t = e = e.next;
                        do {
                            var r = t, l = r.destroy;
                            if (r = r.tag, l !== void 0)
                                if ((r & 4) != 0)
                                    vs(n, t);
                                else {
                                    r = n;
                                    try {
                                        l();
                                    }
                                    catch (i) {
                                        Ve(r, i);
                                    }
                                }
                            t = t.next;
                        } while (t !== e);
                    }
                    break;
                case 1:
                    if (ns(n), e = n.stateNode, typeof e.componentWillUnmount == "function")
                        try {
                            e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
                        }
                        catch (i) {
                            Ve(n, i);
                        }
                    break;
                case 5:
                    ns(n);
                    break;
                case 4: us(e, n);
            }
        }
        function ls(e) { e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null; }
        function is(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
        function os(e) {
            e: {
                for (var n = e.return; n !== null;) {
                    if (is(n))
                        break e;
                    n = n.return;
                }
                throw Error(v(160));
            }
            var t = n;
            switch (n = t.stateNode, t.tag) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                    n = n.containerInfo, r = !0;
                    break;
                case 4:
                    n = n.containerInfo, r = !0;
                    break;
                default: throw Error(v(161));
            }
            t.flags & 16 && (jn(n, ""), t.flags &= -17);
            e: n: for (t = e;;) {
                for (; t.sibling === null;) {
                    if (t.return === null || is(t.return)) {
                        t = null;
                        break e;
                    }
                    t = t.return;
                }
                for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                    if (t.flags & 2 || t.child === null || t.tag === 4)
                        continue n;
                    t.child.return = t, t = t.child;
                }
                if (!(t.flags & 2)) {
                    t = t.stateNode;
                    break e;
                }
            }
            r ? fi(e, t, n) : ci(e, t, n);
        }
        function fi(e, n, t) {
            var r = e.tag, l = r === 5 || r === 6;
            if (l)
                e = l ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Zt));
            else if (r !== 4 && (e = e.child, e !== null))
                for (fi(e, n, t), e = e.sibling; e !== null;)
                    fi(e, n, t), e = e.sibling;
        }
        function ci(e, n, t) {
            var r = e.tag, l = r === 5 || r === 6;
            if (l)
                e = l ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
            else if (r !== 4 && (e = e.child, e !== null))
                for (ci(e, n, t), e = e.sibling; e !== null;)
                    ci(e, n, t), e = e.sibling;
        }
        function us(e, n) {
            for (var t = n, r = !1, l, i;;) {
                if (!r) {
                    r = t.return;
                    e: for (;;) {
                        if (r === null)
                            throw Error(v(160));
                        switch (l = r.stateNode, r.tag) {
                            case 5:
                                i = !1;
                                break e;
                            case 3:
                                l = l.containerInfo, i = !0;
                                break e;
                            case 4:
                                l = l.containerInfo, i = !0;
                                break e;
                        }
                        r = r.return;
                    }
                    r = !0;
                }
                if (t.tag === 5 || t.tag === 6) {
                    e: for (var o = e, u = t, s = u;;)
                        if (rs(o, s), s.child !== null && s.tag !== 4)
                            s.child.return = s, s = s.child;
                        else {
                            if (s === u)
                                break e;
                            for (; s.sibling === null;) {
                                if (s.return === null || s.return === u)
                                    break e;
                                s = s.return;
                            }
                            s.sibling.return = s.return, s = s.sibling;
                        }
                    i ? (o = l, u = t.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l.removeChild(t.stateNode);
                }
                else if (t.tag === 4) {
                    if (t.child !== null) {
                        l = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                        continue;
                    }
                }
                else if (rs(e, t), t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === n)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === n)
                        return;
                    t = t.return, t.tag === 4 && (r = !1);
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        function di(e, n) {
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var t = n.updateQueue;
                    if (t = t !== null ? t.lastEffect : null, t !== null) {
                        var r = t = t.next;
                        do
                            (r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                        while (r !== t);
                    }
                    return;
                case 1: return;
                case 5:
                    if (t = n.stateNode, t != null) {
                        r = n.memoizedProps;
                        var l = e !== null ? e.memoizedProps : r;
                        e = n.type;
                        var i = n.updateQueue;
                        if (n.updateQueue = null, i !== null) {
                            for (t[qt] = r, e === "input" && r.type === "radio" && r.name != null && Qi(t, r), el(e, l), n = el(e, r), l = 0; l < i.length; l += 2) {
                                var o = i[l], u = i[l + 1];
                                o === "style" ? qi(t, u) : o === "dangerouslySetInnerHTML" ? Zi(t, u) : o === "children" ? jn(t, u) : Ir(t, o, u, n);
                            }
                            switch (e) {
                                case "input":
                                    Xr(t, r);
                                    break;
                                case "textarea":
                                    Xi(t, r);
                                    break;
                                case "select": e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? rn(t, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? rn(t, !!r.multiple, r.defaultValue, !0) : rn(t, !!r.multiple, r.multiple ? [] : "", !1));
                            }
                        }
                    }
                    return;
                case 6:
                    if (n.stateNode === null)
                        throw Error(v(162));
                    n.stateNode.nodeValue = n.memoizedProps;
                    return;
                case 3:
                    t = n.stateNode, t.hydrate && (t.hydrate = !1, ho(t.containerInfo));
                    return;
                case 12: return;
                case 13:
                    n.memoizedState !== null && (yi = A(), ts(n.child, !0)), ss(n);
                    return;
                case 19:
                    ss(n);
                    return;
                case 17: return;
                case 23:
                case 24:
                    ts(n, n.memoizedState !== null);
                    return;
            }
            throw Error(v(163));
        }
        function ss(e) {
            var n = e.updateQueue;
            if (n !== null) {
                e.updateQueue = null;
                var t = e.stateNode;
                t === null && (t = e.stateNode = new lf), n.forEach(function (r) { var l = gf.bind(null, e, r); t.has(r) || (t.add(r), r.then(l, l)); });
            }
        }
        function sf(e, n) { return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : !1; }
        var af = Math.ceil, Sr = We.ReactCurrentDispatcher, pi = We.ReactCurrentOwner, x = 0, X = null, j = null, $ = 0, be = 0, mi = Le(0), H = 0, Er = null, _n = 0, vt = 0, Nn = 0, hi = 0, vi = null, yi = 0, gi = 1 / 0;
        function Pn() { gi = A() + 500; }
        var g = null, kr = !1, wi = null, pe = null, Ie = !1, yt = null, gt = 90, Si = [], Ei = [], ge = null, wt = 0, ki = null, xr = -1, we = 0, Cr = 0, St = null, _r = !1;
        function b() { return (x & 48) != 0 ? A() : xr !== -1 ? xr : xr = A(); }
        function Fe(e) {
            if (e = e.mode, (e & 2) == 0)
                return 1;
            if ((e & 4) == 0)
                return Sn() === 99 ? 1 : 2;
            if (we === 0 && (we = _n), Ga.transition !== 0) {
                Cr !== 0 && (Cr = vi !== null ? vi.pendingLanes : 0), e = we;
                var n = 4186112 & ~Cr;
                return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
            }
            return e = Sn(), (x & 4) != 0 && e === 98 ? e = Ut(12, we) : (e = qs(e), e = Ut(e, we)), e;
        }
        function je(e, n, t) {
            if (50 < wt)
                throw wt = 0, ki = null, Error(v(185));
            if (e = Nr(e, n), e === null)
                return null;
            Vt(e, n, t), e === X && (Nn |= n, H === 4 && Tn(e, $));
            var r = Sn();
            n === 1 ? (x & 8) != 0 && (x & 48) == 0 ? xi(e) : (re(e, t), x === 0 && (Pn(), ae())) : ((x & 4) == 0 || r !== 98 && r !== 99 || (ge === null ? ge = new Set([e]) : ge.add(e)), re(e, t)), vi = e;
        }
        function Nr(e, n) {
            e.lanes |= n;
            var t = e.alternate;
            for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)
                e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
            return t.tag === 3 ? t.stateNode : null;
        }
        function re(e, n) {
            for (var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
                var u = 31 - Ne(o), s = 1 << u, d = i[u];
                if (d === -1) {
                    if ((s & r) == 0 || (s & l) != 0) {
                        d = n, an(s);
                        var y = L;
                        i[u] = 10 <= y ? d + 250 : 6 <= y ? d + 5000 : -1;
                    }
                }
                else
                    d <= n && (e.expiredLanes |= s);
                o &= ~s;
            }
            if (r = Yn(e, e === X ? $ : 0), n = L, r === 0)
                t !== null && (t !== Bl && Ul(t), e.callbackNode = null, e.callbackPriority = 0);
            else {
                if (t !== null) {
                    if (e.callbackPriority === n)
                        return;
                    t !== Bl && Ul(t);
                }
                n === 15 ? (t = xi.bind(null, e), he === null ? (he = [t], rr = jl(tr, pu)) : he.push(t), t = Bl) : n === 14 ? t = rt(99, xi.bind(null, e)) : (t = bs(n), t = rt(t, as.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
            }
        }
        function as(e) {
            if (xr = -1, Cr = we = 0, (x & 48) != 0)
                throw Error(v(327));
            var n = e.callbackNode;
            if (Ue() && e.callbackNode !== n)
                return null;
            var t = Yn(e, e === X ? $ : 0);
            if (t === 0)
                return null;
            var r = t, l = x;
            x |= 16;
            var i = ps();
            (X !== e || $ !== r) && (Pn(), Ln(e, r));
            do
                try {
                    df();
                    break;
                }
                catch (u) {
                    ds(e, u);
                }
            while (1);
            if (Wl(), Sr.current = i, x = l, j !== null ? r = 0 : (X = null, $ = 0, r = H), (_n & Nn) != 0)
                Ln(e, 0);
            else if (r !== 0) {
                if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), t = ko(e), t !== 0 && (r = Et(e, t))), r === 1)
                    throw n = Er, Ln(e, 0), Tn(e, t), re(e, A()), n;
                switch (e.finishedWork = e.current.alternate, e.finishedLanes = t, r) {
                    case 0:
                    case 1: throw Error(v(345));
                    case 2:
                        en(e);
                        break;
                    case 3:
                        if (Tn(e, t), (t & 62914560) === t && (r = yi + 500 - A(), 10 < r)) {
                            if (Yn(e, 0) !== 0)
                                break;
                            if (l = e.suspendedLanes, (l & t) !== t) {
                                b(), e.pingedLanes |= e.suspendedLanes & l;
                                break;
                            }
                            e.timeoutHandle = bo(en.bind(null, e), r);
                            break;
                        }
                        en(e);
                        break;
                    case 4:
                        if (Tn(e, t), (t & 4186112) === t)
                            break;
                        for (r = e.eventTimes, l = -1; 0 < t;) {
                            var o = 31 - Ne(t);
                            i = 1 << o, o = r[o], o > l && (l = o), t &= ~i;
                        }
                        if (t = l, t = A() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3000 > t ? 3000 : 4320 > t ? 4320 : 1960 * af(t / 1960)) - t, 10 < t) {
                            e.timeoutHandle = bo(en.bind(null, e), t);
                            break;
                        }
                        en(e);
                        break;
                    case 5:
                        en(e);
                        break;
                    default: throw Error(v(329));
                }
            }
            return re(e, A()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function Tn(e, n) {
            for (n &= ~hi, n &= ~Nn, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
                var t = 31 - Ne(n), r = 1 << t;
                e[t] = -1, n &= ~r;
            }
        }
        function xi(e) {
            if ((x & 48) != 0)
                throw Error(v(327));
            if (Ue(), e === X && (e.expiredLanes & $) != 0) {
                var n = $, t = Et(e, n);
                (_n & Nn) != 0 && (n = Yn(e, n), t = Et(e, n));
            }
            else
                n = Yn(e, 0), t = Et(e, n);
            if (e.tag !== 0 && t === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), n = ko(e), n !== 0 && (t = Et(e, n))), t === 1)
                throw t = Er, Ln(e, 0), Tn(e, n), re(e, A()), t;
            return e.finishedWork = e.current.alternate, e.finishedLanes = n, en(e), re(e, A()), null;
        }
        function ff() {
            if (ge !== null) {
                var e = ge;
                ge = null, e.forEach(function (n) { n.expiredLanes |= 24 & n.pendingLanes, re(n, A()); });
            }
            ae();
        }
        function fs(e, n) {
            var t = x;
            x |= 1;
            try {
                return e(n);
            }
            finally {
                x = t, x === 0 && (Pn(), ae());
            }
        }
        function cs(e, n) {
            var t = x;
            x &= -2, x |= 8;
            try {
                return e(n);
            }
            finally {
                x = t, x === 0 && (Pn(), ae());
            }
        }
        function Pr(e, n) { R(mi, be), be |= n, _n |= n; }
        function Ci() { be = mi.current, O(mi); }
        function Ln(e, n) {
            e.finishedWork = null, e.finishedLanes = 0;
            var t = e.timeoutHandle;
            if (t !== -1 && (e.timeoutHandle = -1, Aa(t)), j !== null)
                for (t = j.return; t !== null;) {
                    var r = t;
                    switch (r.tag) {
                        case 1:
                            r = r.type.childContextTypes, r != null && er();
                            break;
                        case 3:
                            xn(), O(K), O(W), Zl();
                            break;
                        case 5:
                            Xl(r);
                            break;
                        case 4:
                            xn();
                            break;
                        case 13:
                            O(D);
                            break;
                        case 19:
                            O(D);
                            break;
                        case 10:
                            Al(r);
                            break;
                        case 23:
                        case 24: Ci();
                    }
                    t = t.return;
                }
            X = e, j = Be(e.current, null), $ = be = _n = n, H = 0, Er = null, hi = Nn = vt = 0;
        }
        function ds(e, n) {
            do {
                var t = j;
                try {
                    if (Wl(), at.current = gr, mr) {
                        for (var r = I.memoizedState; r !== null;) {
                            var l = r.queue;
                            l !== null && (l.pending = null), r = r.next;
                        }
                        mr = !1;
                    }
                    if (ft = 0, B = Q = I = null, ct = !1, pi.current = null, t === null || t.return === null) {
                        H = 1, Er = n, j = null;
                        break;
                    }
                    e: {
                        var i = e, o = t.return, u = t, s = n;
                        if (n = $, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
                            var d = s;
                            if ((u.mode & 2) == 0) {
                                var y = u.alternate;
                                y ? (u.updateQueue = y.updateQueue, u.memoizedState = y.memoizedState, u.lanes = y.lanes) : (u.updateQueue = null, u.memoizedState = null);
                            }
                            var C = (D.current & 1) != 0, h = o;
                            do {
                                var S;
                                if (S = h.tag === 13) {
                                    var k = h.memoizedState;
                                    if (k !== null)
                                        S = k.dehydrated !== null;
                                    else {
                                        var E = h.memoizedProps;
                                        S = E.fallback === void 0 ? !1 : E.unstable_avoidThisFallback !== !0 ? !0 : !C;
                                    }
                                }
                                if (S) {
                                    var c = h.updateQueue;
                                    if (c === null) {
                                        var a = new Set;
                                        a.add(d), h.updateQueue = a;
                                    }
                                    else
                                        c.add(d);
                                    if ((h.mode & 2) == 0) {
                                        if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1)
                                            if (u.alternate === null)
                                                u.tag = 17;
                                            else {
                                                var f = Me(-1, 1);
                                                f.tag = 2, Re(u, f);
                                            }
                                        u.lanes |= 1;
                                        break e;
                                    }
                                    s = void 0, u = n;
                                    var p = i.pingCache;
                                    if (p === null ? (p = i.pingCache = new rf, s = new Set, p.set(d, s)) : (s = p.get(d), s === void 0 && (s = new Set, p.set(d, s))), !s.has(u)) {
                                        s.add(u);
                                        var m = yf.bind(null, i, d, u);
                                        d.then(m, m);
                                    }
                                    h.flags |= 4096, h.lanes = n;
                                    break e;
                                }
                                h = h.return;
                            } while (h !== null);
                            s = Error((tn(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                        }
                        H !== 5 && (H = 2), s = si(s, u), h = o;
                        do {
                            switch (h.tag) {
                                case 3:
                                    i = s, h.flags |= 4096, n &= -n, h.lanes |= n;
                                    var _ = bu(h, i, n);
                                    vu(h, _);
                                    break e;
                                case 1:
                                    i = s;
                                    var w = h.type, N = h.stateNode;
                                    if ((h.flags & 64) == 0 && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (pe === null || !pe.has(N)))) {
                                        h.flags |= 4096, n &= -n, h.lanes |= n;
                                        var T = es(h, i, n);
                                        vu(h, T);
                                        break e;
                                    }
                            }
                            h = h.return;
                        } while (h !== null);
                    }
                    hs(t);
                }
                catch (P) {
                    n = P, j === t && t !== null && (j = t = t.return);
                    continue;
                }
                break;
            } while (1);
        }
        function ps() { var e = Sr.current; return Sr.current = gr, e === null ? gr : e; }
        function Et(e, n) {
            var t = x;
            x |= 16;
            var r = ps();
            X === e && $ === n || Ln(e, n);
            do
                try {
                    cf();
                    break;
                }
                catch (l) {
                    ds(e, l);
                }
            while (1);
            if (Wl(), x = t, Sr.current = r, j !== null)
                throw Error(v(261));
            return X = null, $ = 0, H;
        }
        function cf() {
            for (; j !== null;)
                ms(j);
        }
        function df() {
            for (; j !== null && !Ya();)
                ms(j);
        }
        function ms(e) { var n = gs(e.alternate, e, be); e.memoizedProps = e.pendingProps, n === null ? hs(e) : j = n, pi.current = null; }
        function hs(e) {
            var n = e;
            do {
                var t = n.alternate;
                if (e = n.return, (n.flags & 2048) == 0) {
                    if (t = nf(t, n, be), t !== null) {
                        j = t;
                        return;
                    }
                    if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (be & 1073741824) != 0 || (t.mode & 4) == 0) {
                        for (var r = 0, l = t.child; l !== null;)
                            r |= l.lanes | l.childLanes, l = l.sibling;
                        t.childLanes = r;
                    }
                    e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
                }
                else {
                    if (t = tf(n), t !== null) {
                        t.flags &= 2047, j = t;
                        return;
                    }
                    e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
                }
                if (n = n.sibling, n !== null) {
                    j = n;
                    return;
                }
                j = n = e;
            } while (n !== null);
            H === 0 && (H = 5);
        }
        function en(e) { var n = Sn(); return Ge(99, pf.bind(null, e, n)), null; }
        function pf(e, n) {
            do
                Ue();
            while (yt !== null);
            if ((x & 48) != 0)
                throw Error(v(327));
            var t = e.finishedWork;
            if (t === null)
                return null;
            if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
                throw Error(v(177));
            e.callbackNode = null;
            var r = t.lanes | t.childLanes, l = r, i = e.pendingLanes & ~l;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l, e.mutableReadLanes &= l, e.entangledLanes &= l, l = e.entanglements;
            for (var o = e.eventTimes, u = e.expirationTimes; 0 < i;) {
                var s = 31 - Ne(i), d = 1 << s;
                l[s] = 0, o[s] = -1, u[s] = -1, i &= ~d;
            }
            if (ge !== null && (r & 24) == 0 && ge.has(e) && ge.delete(e), e === X && (j = X = null, $ = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
                if (l = x, x |= 32, pi.current = null, zl = Bt, o = Ho(), Nl(o)) {
                    if ("selectionStart" in o)
                        u = { start: o.selectionStart, end: o.selectionEnd };
                    else
                        e: if (u = (u = o.ownerDocument) && u.defaultView || window, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
                            u = d.anchorNode, i = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
                            try {
                                u.nodeType, s.nodeType;
                            }
                            catch (P) {
                                u = null;
                                break e;
                            }
                            var y = 0, C = -1, h = -1, S = 0, k = 0, E = o, c = null;
                            n: for (;;) {
                                for (var a; E !== u || i !== 0 && E.nodeType !== 3 || (C = y + i), E !== s || d !== 0 && E.nodeType !== 3 || (h = y + d), E.nodeType === 3 && (y += E.nodeValue.length), (a = E.firstChild) !== null;)
                                    c = E, E = a;
                                for (;;) {
                                    if (E === o)
                                        break n;
                                    if (c === u && ++S === i && (C = y), c === s && ++k === d && (h = y), (a = E.nextSibling) !== null)
                                        break;
                                    E = c, c = E.parentNode;
                                }
                                E = a;
                            }
                            u = C === -1 || h === -1 ? null : { start: C, end: h };
                        }
                        else
                            u = null;
                    u = u || { start: 0, end: 0 };
                }
                else
                    u = null;
                Ol = { focusedElem: o, selectionRange: u }, Bt = !1, St = null, _r = !1, g = r;
                do
                    try {
                        mf();
                    }
                    catch (P) {
                        if (g === null)
                            throw Error(v(330));
                        Ve(g, P), g = g.nextEffect;
                    }
                while (g !== null);
                St = null, g = r;
                do
                    try {
                        for (o = e; g !== null;) {
                            var f = g.flags;
                            if (f & 16 && jn(g.stateNode, ""), f & 128) {
                                var p = g.alternate;
                                if (p !== null) {
                                    var m = p.ref;
                                    m !== null && (typeof m == "function" ? m(null) : m.current = null);
                                }
                            }
                            switch (f & 1038) {
                                case 2:
                                    os(g), g.flags &= -3;
                                    break;
                                case 6:
                                    os(g), g.flags &= -3, di(g.alternate, g);
                                    break;
                                case 1024:
                                    g.flags &= -1025;
                                    break;
                                case 1028:
                                    g.flags &= -1025, di(g.alternate, g);
                                    break;
                                case 4:
                                    di(g.alternate, g);
                                    break;
                                case 8:
                                    u = g, us(o, u);
                                    var _ = u.alternate;
                                    ls(u), _ !== null && ls(_);
                            }
                            g = g.nextEffect;
                        }
                    }
                    catch (P) {
                        if (g === null)
                            throw Error(v(330));
                        Ve(g, P), g = g.nextEffect;
                    }
                while (g !== null);
                if (m = Ol, p = Ho(), f = m.focusedElem, o = m.selectionRange, p !== f && f && f.ownerDocument && Bo(f.ownerDocument.documentElement, f)) {
                    for (o !== null && Nl(f) && (p = o.start, m = o.end, m === void 0 && (m = p), "selectionStart" in f ? (f.selectionStart = p, f.selectionEnd = Math.min(m, f.value.length)) : (m = (p = f.ownerDocument || document) && p.defaultView || window, m.getSelection && (m = m.getSelection(), u = f.textContent.length, _ = Math.min(o.start, u), o = o.end === void 0 ? _ : Math.min(o.end, u), !m.extend && _ > o && (u = o, o = _, _ = u), u = Vo(f, _), i = Vo(f, o), u && i && (m.rangeCount !== 1 || m.anchorNode !== u.node || m.anchorOffset !== u.offset || m.focusNode !== i.node || m.focusOffset !== i.offset) && (p = p.createRange(), p.setStart(u.node, u.offset), m.removeAllRanges(), _ > o ? (m.addRange(p), m.extend(i.node, i.offset)) : (p.setEnd(i.node, i.offset), m.addRange(p)))))), p = [], m = f; m = m.parentNode;)
                        m.nodeType === 1 && p.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
                    for (typeof f.focus == "function" && f.focus(), f = 0; f < p.length; f++)
                        m = p[f], m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
                }
                Bt = !!zl, Ol = zl = null, e.current = t, g = r;
                do
                    try {
                        for (f = e; g !== null;) {
                            var w = g.flags;
                            if (w & 36 && uf(f, g.alternate, g), w & 128) {
                                p = void 0;
                                var N = g.ref;
                                if (N !== null) {
                                    var T = g.stateNode;
                                    switch (g.tag) {
                                        case 5:
                                            p = T;
                                            break;
                                        default: p = T;
                                    }
                                    typeof N == "function" ? N(p) : N.current = p;
                                }
                            }
                            g = g.nextEffect;
                        }
                    }
                    catch (P) {
                        if (g === null)
                            throw Error(v(330));
                        Ve(g, P), g = g.nextEffect;
                    }
                while (g !== null);
                g = null, Ka(), x = l;
            }
            else
                e.current = t;
            if (Ie)
                Ie = !1, yt = e, gt = n;
            else
                for (g = r; g !== null;)
                    n = g.nextEffect, g.nextEffect = null, g.flags & 8 && (w = g, w.sibling = null, w.stateNode = null), g = n;
            if (r = e.pendingLanes, r === 0 && (pe = null), r === 1 ? e === ki ? wt++ : (wt = 0, ki = e) : wt = 0, t = t.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function")
                try {
                    Ke.onCommitFiberRoot(Fl, t, void 0, (t.current.flags & 64) == 64);
                }
                catch (P) { }
            if (re(e, A()), kr)
                throw kr = !1, e = wi, wi = null, e;
            return (x & 8) != 0 || ae(), null;
        }
        function mf() {
            for (; g !== null;) {
                var e = g.alternate;
                _r || St === null || ((g.flags & 8) != 0 ? uo(g, St) && (_r = !0) : g.tag === 13 && sf(e, g) && uo(g, St) && (_r = !0));
                var n = g.flags;
                (n & 256) != 0 && of(e, g), (n & 512) == 0 || Ie || (Ie = !0, rt(97, function () { return Ue(), null; })), g = g.nextEffect;
            }
        }
        function Ue() {
            if (gt !== 90) {
                var e = 97 < gt ? 97 : gt;
                return gt = 90, Ge(e, vf);
            }
            return !1;
        }
        function hf(e, n) { Si.push(n, e), Ie || (Ie = !0, rt(97, function () { return Ue(), null; })); }
        function vs(e, n) { Ei.push(n, e), Ie || (Ie = !0, rt(97, function () { return Ue(), null; })); }
        function vf() {
            if (yt === null)
                return !1;
            var e = yt;
            if (yt = null, (x & 48) != 0)
                throw Error(v(331));
            var n = x;
            x |= 32;
            var t = Ei;
            Ei = [];
            for (var r = 0; r < t.length; r += 2) {
                var l = t[r], i = t[r + 1], o = l.destroy;
                if (l.destroy = void 0, typeof o == "function")
                    try {
                        o();
                    }
                    catch (s) {
                        if (i === null)
                            throw Error(v(330));
                        Ve(i, s);
                    }
            }
            for (t = Si, Si = [], r = 0; r < t.length; r += 2) {
                l = t[r], i = t[r + 1];
                try {
                    var u = l.create;
                    l.destroy = u();
                }
                catch (s) {
                    if (i === null)
                        throw Error(v(330));
                    Ve(i, s);
                }
            }
            for (u = e.current.firstEffect; u !== null;)
                e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
            return x = n, ae(), !0;
        }
        function ys(e, n, t) { n = si(t, n), n = bu(e, n, 1), Re(e, n), n = b(), e = Nr(e, 1), e !== null && (Vt(e, 1, n), re(e, n)); }
        function Ve(e, n) {
            if (e.tag === 3)
                ys(e, e, n);
            else
                for (var t = e.return; t !== null;) {
                    if (t.tag === 3) {
                        ys(t, e, n);
                        break;
                    }
                    else if (t.tag === 1) {
                        var r = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pe === null || !pe.has(r))) {
                            e = si(n, e);
                            var l = es(t, e, 1);
                            if (Re(t, l), l = b(), t = Nr(t, 1), t !== null)
                                Vt(t, 1, l), re(t, l);
                            else if (typeof r.componentDidCatch == "function" && (pe === null || !pe.has(r)))
                                try {
                                    r.componentDidCatch(n, e);
                                }
                                catch (i) { }
                            break;
                        }
                    }
                    t = t.return;
                }
        }
        function yf(e, n, t) { var r = e.pingCache; r !== null && r.delete(n), n = b(), e.pingedLanes |= e.suspendedLanes & t, X === e && ($ & t) === t && (H === 4 || H === 3 && ($ & 62914560) === $ && 500 > A() - yi ? Ln(e, 0) : hi |= t), re(e, n); }
        function gf(e, n) { var t = e.stateNode; t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) == 0 ? n = 1 : (n & 4) == 0 ? n = Sn() === 99 ? 1 : 2 : (we === 0 && (we = _n), n = fn(62914560 & ~we), n === 0 && (n = 4194304))), t = b(), e = Nr(e, n), e !== null && (Vt(e, n, t), re(e, t)); }
        var gs;
        gs = function (e, n, t) {
            var r = n.lanes;
            if (e !== null)
                if (e.memoizedProps !== n.pendingProps || K.current)
                    ue = !0;
                else if ((t & r) != 0)
                    ue = (e.flags & 16384) != 0;
                else {
                    switch (ue = !1, n.tag) {
                        case 3:
                            Au(n), Gl();
                            break;
                        case 5:
                            Cu(n);
                            break;
                        case 1:
                            G(n.type) && nr(n);
                            break;
                        case 4:
                            Yl(n, n.stateNode.containerInfo);
                            break;
                        case 10:
                            r = n.memoizedProps.value;
                            var l = n.type._context;
                            R(lr, l._currentValue), l._currentValue = r;
                            break;
                        case 13:
                            if (n.memoizedState !== null)
                                return (t & n.child.childLanes) != 0 ? Qu(e, n, t) : (R(D, D.current & 1), n = ye(e, n, t), n !== null ? n.sibling : null);
                            R(D, D.current & 1);
                            break;
                        case 19:
                            if (r = (t & n.childLanes) != 0, (e.flags & 64) != 0) {
                                if (r)
                                    return Gu(e, n, t);
                                n.flags |= 64;
                            }
                            if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R(D, D.current), r)
                                break;
                            return null;
                        case 23:
                        case 24: return n.lanes = 0, ri(e, n, t);
                    }
                    return ye(e, n, t);
                }
            else
                ue = !1;
            switch (n.lanes = 0, n.tag) {
                case 2:
                    if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l = wn(n, W.current), kn(n, t), l = ql(null, n, r, e, l, t), n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
                        if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, G(r)) {
                            var i = !0;
                            nr(n);
                        }
                        else
                            i = !1;
                        n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ql(n);
                        var o = r.getDerivedStateFromProps;
                        typeof o == "function" && ur(n, r, o, e), l.updater = sr, n.stateNode = l, l._reactInternals = n, $l(n, r, e, t), n = ii(null, n, r, !0, i, t);
                    }
                    else
                        n.tag = 0, J(null, n, l, t), n = n.child;
                    return n;
                case 16:
                    l = n.elementType;
                    e: {
                        switch (e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i = l._init, l = i(l._payload), n.type = l, i = n.tag = Sf(l), e = oe(l, e), i) {
                            case 0:
                                n = li(null, n, l, e, t);
                                break e;
                            case 1:
                                n = Wu(null, n, l, e, t);
                                break e;
                            case 11:
                                n = Uu(null, n, l, e, t);
                                break e;
                            case 14:
                                n = Vu(null, n, l, oe(l.type, e), r, t);
                                break e;
                        }
                        throw Error(v(306, l, ""));
                    }
                    return n;
                case 0: return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), li(e, n, r, l, t);
                case 1: return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), Wu(e, n, r, l, t);
                case 3:
                    if (Au(n), r = n.updateQueue, e === null || r === null)
                        throw Error(v(282));
                    if (r = n.pendingProps, l = n.memoizedState, l = l !== null ? l.element : null, hu(e, n), lt(n, r, null, t), r = n.memoizedState.element, r === l)
                        Gl(), n = ye(e, n, t);
                    else {
                        if (l = n.stateNode, (i = l.hydrate) && (De = hn(n.stateNode.containerInfo.firstChild), ve = n, i = ce = !0), i) {
                            if (e = l.mutableSourceEagerHydrationData, e != null)
                                for (l = 0; l < e.length; l += 2)
                                    i = e[l], i._workInProgressVersionPrimary = e[l + 1], Cn.push(i);
                            for (t = xu(n, null, r, t), n.child = t; t;)
                                t.flags = t.flags & -3 | 1024, t = t.sibling;
                        }
                        else
                            J(e, n, r, t), Gl();
                        n = n.child;
                    }
                    return n;
                case 5: return Cu(n), e === null && Kl(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ml(r, l) ? o = null : i !== null && Ml(r, i) && (n.flags |= 16), Hu(e, n), J(e, n, o, t), n.child;
                case 6: return e === null && Kl(n), null;
                case 13: return Qu(e, n, t);
                case 4: return Yl(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = cr(n, null, r, t) : J(e, n, r, t), n.child;
                case 11: return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), Uu(e, n, r, l, t);
                case 7: return J(e, n, n.pendingProps, t), n.child;
                case 8: return J(e, n, n.pendingProps.children, t), n.child;
                case 12: return J(e, n, n.pendingProps.children, t), n.child;
                case 10:
                    e: {
                        r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value;
                        var u = n.type._context;
                        if (R(lr, u._currentValue), u._currentValue = i, o !== null)
                            if (u = o.value, i = ee(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
                                if (o.children === l.children && !K.current) {
                                    n = ye(e, n, t);
                                    break e;
                                }
                            }
                            else
                                for (u = n.child, u !== null && (u.return = n); u !== null;) {
                                    var s = u.dependencies;
                                    if (s !== null) {
                                        o = u.child;
                                        for (var d = s.firstContext; d !== null;) {
                                            if (d.context === r && (d.observedBits & i) != 0) {
                                                u.tag === 1 && (d = Me(-1, t & -t), d.tag = 2, Re(u, d)), u.lanes |= t, d = u.alternate, d !== null && (d.lanes |= t), mu(u.return, t), s.lanes |= t;
                                                break;
                                            }
                                            d = d.next;
                                        }
                                    }
                                    else
                                        o = u.tag === 10 && u.type === n.type ? null : u.child;
                                    if (o !== null)
                                        o.return = u;
                                    else
                                        for (o = u; o !== null;) {
                                            if (o === n) {
                                                o = null;
                                                break;
                                            }
                                            if (u = o.sibling, u !== null) {
                                                u.return = o.return, o = u;
                                                break;
                                            }
                                            o = o.return;
                                        }
                                    u = o;
                                }
                        J(e, n, l.children, t), n = n.child;
                    }
                    return n;
                case 9: return l = n.type, i = n.pendingProps, r = i.children, kn(n, t), l = ne(l, i.unstable_observedBits), r = r(l), n.flags |= 1, J(e, n, r, t), n.child;
                case 14: return l = n.type, i = oe(l, n.pendingProps), i = oe(l.type, i), Vu(e, n, l, i, r, t);
                case 15: return Bu(e, n, n.type, n.pendingProps, r, t);
                case 17: return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, G(r) ? (e = !0, nr(n)) : e = !1, kn(n, t), Su(n, r, l), $l(n, r, l, t), ii(null, n, r, !0, e, t);
                case 19: return Gu(e, n, t);
                case 23: return ri(e, n, t);
                case 24: return ri(e, n, t);
            }
            throw Error(v(156, n.tag));
        };
        function wf(e, n, t, r) { this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null; }
        function le(e, n, t, r) { return new wf(e, n, t, r); }
        function _i(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
        function Sf(e) {
            if (typeof e == "function")
                return _i(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === Nt)
                    return 11;
                if (e === Tt)
                    return 14;
            }
            return 2;
        }
        function Be(e, n) { var t = e.alternate; return t === null ? (t = le(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t; }
        function Tr(e, n, t, r, l, i) {
            var o = 2;
            if (r = e, typeof e == "function")
                _i(e) && (o = 1);
            else if (typeof e == "string")
                o = 5;
            else
                e: switch (e) {
                    case Ee: return zn(t.children, l, i, n);
                    case Vi:
                        o = 8, l |= 16;
                        break;
                    case Fr:
                        o = 8, l |= 1;
                        break;
                    case Rn: return e = le(12, t, n, l | 8), e.elementType = Rn, e.type = Rn, e.lanes = i, e;
                    case Dn: return e = le(13, t, n, l), e.type = Dn, e.elementType = Dn, e.lanes = i, e;
                    case Pt: return e = le(19, t, n, l), e.elementType = Pt, e.lanes = i, e;
                    case Wr: return Ni(t, l, i, n);
                    case Ar: return e = le(24, t, n, l), e.elementType = Ar, e.lanes = i, e;
                    default:
                        if (typeof e == "object" && e !== null)
                            switch (e.$$typeof) {
                                case jr:
                                    o = 10;
                                    break e;
                                case Ur:
                                    o = 9;
                                    break e;
                                case Nt:
                                    o = 11;
                                    break e;
                                case Tt:
                                    o = 14;
                                    break e;
                                case Vr:
                                    o = 16, r = null;
                                    break e;
                                case Br:
                                    o = 22;
                                    break e;
                            }
                        throw Error(v(130, e == null ? e : typeof e, ""));
                }
            return n = le(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
        }
        function zn(e, n, t, r) { return e = le(7, e, r, n), e.lanes = t, e; }
        function Ni(e, n, t, r) { return e = le(23, e, r, n), e.elementType = Wr, e.lanes = t, e; }
        function Pi(e, n, t) { return e = le(6, e, null, n), e.lanes = t, e; }
        function Ti(e, n, t) { return n = le(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n; }
        function Ef(e, n, t) { this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.mutableSourceEagerHydrationData = null; }
        function kf(e, n, t) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Ae, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t }; }
        function Lr(e, n, t, r) {
            var l = n.current, i = b(), o = Fe(l);
            e: if (t) {
                t = t._reactInternals;
                n: {
                    if ($e(t) !== t || t.tag !== 1)
                        throw Error(v(170));
                    var u = t;
                    do {
                        switch (u.tag) {
                            case 3:
                                u = u.stateNode.context;
                                break n;
                            case 1: if (G(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break n;
                            }
                        }
                        u = u.return;
                    } while (u !== null);
                    throw Error(v(171));
                }
                if (t.tag === 1) {
                    var s = t.type;
                    if (G(s)) {
                        t = lu(t, s, u);
                        break e;
                    }
                }
                t = u;
            }
            else
                t = ze;
            return n.context === null ? n.context = t : n.pendingContext = t, n = Me(i, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), Re(l, n), je(l, o, i), o;
        }
        function Li(e) {
            if (e = e.current, !e.child)
                return null;
            switch (e.child.tag) {
                case 5: return e.child.stateNode;
                default: return e.child.stateNode;
            }
        }
        function ws(e, n) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var t = e.retryLane;
                e.retryLane = t !== 0 && t < n ? t : n;
            }
        }
        function zi(e, n) { ws(e, n), (e = e.alternate) && ws(e, n); }
        function xf() { return null; }
        function Oi(e, n, t) {
            var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
            if (t = new Ef(e, n, t != null && t.hydrate === !0), n = le(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, Ql(n), e[vn] = t.current, Xo(e.nodeType === 8 ? e.parentNode : e), r)
                for (e = 0; e < r.length; e++) {
                    n = r[e];
                    var l = n._getVersion;
                    l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
                }
            this._internalRoot = t;
        }
        Oi.prototype.render = function (e) { Lr(e, this._internalRoot, null, null); };
        Oi.prototype.unmount = function () { var e = this._internalRoot, n = e.containerInfo; Lr(null, e, null, function () { n[vn] = null; }); };
        function kt(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
        function Cf(e, n) {
            if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n)
                for (var t; t = e.lastChild;)
                    e.removeChild(t);
            return new Oi(e, 0, n ? { hydrate: !0 } : void 0);
        }
        function zr(e, n, t, r, l) {
            var i = t._reactRootContainer;
            if (i) {
                var o = i._internalRoot;
                if (typeof l == "function") {
                    var u = l;
                    l = function () { var d = Li(o); u.call(d); };
                }
                Lr(n, o, e, l);
            }
            else {
                if (i = t._reactRootContainer = Cf(t, r), o = i._internalRoot, typeof l == "function") {
                    var s = l;
                    l = function () { var d = Li(o); s.call(d); };
                }
                cs(function () { Lr(n, o, e, l); });
            }
            return Li(o);
        }
        so = function (e) {
            if (e.tag === 13) {
                var n = b();
                je(e, 4, n), zi(e, 4);
            }
        };
        al = function (e) {
            if (e.tag === 13) {
                var n = b();
                je(e, 67108864, n), zi(e, 67108864);
            }
        };
        ao = function (e) {
            if (e.tag === 13) {
                var n = b(), t = Fe(e);
                je(e, t, n), zi(e, t);
            }
        };
        fo = function (e, n) { return n(); };
        tl = function (e, n, t) {
            switch (n) {
                case "input":
                    if (Xr(e, t), n = t.name, t.type === "radio" && n != null) {
                        for (t = e; t.parentNode;)
                            t = t.parentNode;
                        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + "][type=\"radio\"]"), n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r !== e && r.form === e.form) {
                                var l = bt(r);
                                if (!l)
                                    throw Error(v(90));
                                Wi(r), Xr(r, l);
                            }
                        }
                    }
                    break;
                case "textarea":
                    Xi(e, t);
                    break;
                case "select": n = t.value, n != null && rn(e, !!t.multiple, n, !1);
            }
        };
        rl = fs;
        to = function (e, n, t, r, l) {
            var i = x;
            x |= 4;
            try {
                return Ge(98, e.bind(null, n, t, r, l));
            }
            finally {
                x = i, x === 0 && (Pn(), ae());
            }
        };
        ll = function () { (x & 49) == 0 && (ff(), Ue()); };
        ro = function (e, n) {
            var t = x;
            x |= 2;
            try {
                return e(n);
            }
            finally {
                x = t, x === 0 && (Pn(), ae());
            }
        };
        function Ss(e, n) {
            var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!kt(n))
                throw Error(v(200));
            return kf(e, n, null, t);
        }
        var _f = { Events: [tt, yn, bt, eo, no, Ue, { current: !1 }] }, xt = { findFiberByHostInstance: Ye, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Nf = { bundleType: xt.bundleType, version: xt.version, rendererPackageName: xt.rendererPackageName, rendererConfig: xt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: We.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = oo(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: xt.findFiberByHostInstance || xf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && (Ct = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ct.isDisabled && Ct.supportsFiber))
            try {
                Fl = Ct.inject(Nf), Ke = Ct;
            }
            catch (e) { }
        var Ct;
        ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
        ie.createPortal = Ss;
        ie.findDOMNode = function (e) {
            if (e == null)
                return null;
            if (e.nodeType === 1)
                return e;
            var n = e._reactInternals;
            if (n === void 0)
                throw typeof e.render == "function" ? Error(v(188)) : Error(v(268, Object.keys(e)));
            return e = oo(n), e = e === null ? null : e.stateNode, e;
        };
        ie.flushSync = function (e, n) {
            var t = x;
            if ((t & 48) != 0)
                return e(n);
            x |= 1;
            try {
                if (e)
                    return Ge(99, e.bind(null, n));
            }
            finally {
                x = t, ae();
            }
        };
        ie.hydrate = function (e, n, t) {
            if (!kt(n))
                throw Error(v(200));
            return zr(null, e, n, !0, t);
        };
        ie.render = function (e, n, t) {
            if (!kt(n))
                throw Error(v(200));
            return zr(null, e, n, !1, t);
        };
        ie.unmountComponentAtNode = function (e) {
            if (!kt(e))
                throw Error(v(40));
            return e._reactRootContainer ? (cs(function () { zr(null, null, e, !1, function () { e._reactRootContainer = null, e[vn] = null; }); }), !0) : !1;
        };
        ie.unstable_batchedUpdates = fs;
        ie.unstable_createPortal = function (e, n) { return Ss(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null); };
        ie.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!kt(t))
                throw Error(v(200));
            if (e == null || e._reactInternals === void 0)
                throw Error(v(38));
            return zr(e, n, t, !1, r);
        };
        ie.version = "17.0.2";
    });
    var Mi = Ri((Of, xs) => {
        "use strict";
        function ks() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks);
                }
                catch (e) {
                    console.error(e);
                }
        }
        ks(), xs.exports = Es();
    });
    var Pf = Di(Mi()), Tf = Di(Mi()), { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mf, createPortal: Rf, findDOMNode: Df, flushSync: If, hydrate: Ff, render: jf, unmountComponentAtNode: Uf, unstable_batchedUpdates: Vf, unstable_createPortal: Bf, unstable_renderSubtreeIntoContainer: Hf, version: Wf } = Pf;
    var export_default = Tf.default;
    return { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mf, createPortal: Rf, default: export_default, findDOMNode: Df, flushSync: If, hydrate: Ff, render: jf, unmountComponentAtNode: Uf, unstable_batchedUpdates: Vf, unstable_createPortal: Bf, unstable_renderSubtreeIntoContainer: Hf, version: Wf };
})();
const mod1 = (async () => {
    const { default: _default } = await mod6;
    return { default: _default, ...await mod6 };
})();
const mod20 = (async () => {
    var b = Object.create;
    var s = Object.defineProperty;
    var p = Object.getOwnPropertyDescriptor;
    var O = Object.getOwnPropertyNames;
    var j = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty;
    var m = r => s(r, "__esModule", { value: !0 });
    var v = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
    var y = (r, e, t) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of O(e))
                !g.call(r, n) && n !== "default" && s(r, n, { get: () => e[n], enumerable: !(t = p(e, n)) || t.enumerable });
        return r;
    }, h = r => y(m(s(r != null ? b(j(r)) : {}, "default", r && r.__esModule && "default" in r ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
    var l = v((q, i) => {
        "use strict";
        var u = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
        function P(r) {
            if (r == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(r);
        }
        function E() {
            try {
                if (!Object.assign)
                    return !1;
                var r = new String("abc");
                if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
                    return !1;
                for (var e = {}, t = 0; t < 10; t++)
                    e["_" + String.fromCharCode(t)] = t;
                var n = Object.getOwnPropertyNames(e).map(function (o) { return e[o]; });
                if (n.join("") !== "0123456789")
                    return !1;
                var a = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (o) { a[o] = o; }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
            }
            catch (o) {
                return !1;
            }
        }
        i.exports = E() ? Object.assign : function (r, e) {
            for (var t, n = P(r), a, o = 1; o < arguments.length; o++) {
                t = Object(arguments[o]);
                for (var f in t)
                    d.call(t, f) && (n[f] = t[f]);
                if (u) {
                    a = u(t);
                    for (var c = 0; c < a.length; c++)
                        w.call(t, a[c]) && (n[a[c]] = t[a[c]]);
                }
            }
            return n;
        };
    });
    var S = h(l());
    var export_default = S.default;
    return { default: export_default };
})();
const mod19 = (async () => {
    const __object_assign$ = (await mod20).default;
    var W = Object.create;
    var h = Object.defineProperty;
    var Y = Object.getOwnPropertyDescriptor;
    var G = Object.getOwnPropertyNames;
    var J = Object.getPrototypeOf, K = Object.prototype.hasOwnProperty;
    var Q = e => h(e, "__esModule", { value: !0 });
    var X = e => {
        if (typeof require != "undefined")
            return require(e);
        throw new Error("Dynamic require of \"" + e + "\" is not supported");
    };
    var j = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Z = (e, t, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of G(t))
                !K.call(e, o) && o !== "default" && h(e, o, { get: () => t[o], enumerable: !(r = Y(t, o)) || r.enumerable });
        return e;
    }, O = e => Z(Q(h(e != null ? W(J(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
    var z = j(n => {
        "use strict";
        var E = __object_assign$, y = 60103, P = 60106;
        n.Fragment = 60107;
        n.StrictMode = 60108;
        n.Profiler = 60114;
        var x = 60109, I = 60110, w = 60112;
        n.Suspense = 60113;
        var A = 60115, F = 60116;
        typeof Symbol == "function" && Symbol.for && (l = Symbol.for, y = l("react.element"), P = l("react.portal"), n.Fragment = l("react.fragment"), n.StrictMode = l("react.strict_mode"), n.Profiler = l("react.profiler"), x = l("react.provider"), I = l("react.context"), w = l("react.forward_ref"), n.Suspense = l("react.suspense"), A = l("react.memo"), F = l("react.lazy"));
        var l, L = typeof Symbol == "function" && Symbol.iterator;
        function b(e) { return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null); }
        function _(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
                t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var q = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, D = {};
        function d(e, t, r) { this.props = e, this.context = t, this.refs = D, this.updater = r || q; }
        d.prototype.isReactComponent = {};
        d.prototype.setState = function (e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null)
                throw Error(_(85));
            this.updater.enqueueSetState(this, e, t, "setState");
        };
        d.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
        function M() { }
        M.prototype = d.prototype;
        function S(e, t, r) { this.props = e, this.context = t, this.refs = D, this.updater = r || q; }
        var C = S.prototype = new M;
        C.constructor = S;
        E(C, d.prototype);
        C.isPureReactComponent = !0;
        var R = { current: null }, N = Object.prototype.hasOwnProperty, U = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
            var o, u = {}, c = null, f = null;
            if (t != null)
                for (o in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)
                    N.call(t, o) && !U.hasOwnProperty(o) && (u[o] = t[o]);
            var s = arguments.length - 2;
            if (s === 1)
                u.children = r;
            else if (1 < s) {
                for (var i = Array(s), p = 0; p < s; p++)
                    i[p] = arguments[p + 2];
                u.children = i;
            }
            if (e && e.defaultProps)
                for (o in s = e.defaultProps, s)
                    u[o] === void 0 && (u[o] = s[o]);
            return { $$typeof: y, type: e, key: c, ref: f, props: u, _owner: R.current };
        }
        function ee(e, t) { return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
        function k(e) { return typeof e == "object" && e !== null && e.$$typeof === y; }
        function te(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (r) { return t[r]; }); }
        var V = /\/+/g;
        function $(e, t) { return typeof e == "object" && e !== null && e.key != null ? te("" + e.key) : t.toString(36); }
        function v(e, t, r, o, u) {
            var c = typeof e;
            (c === "undefined" || c === "boolean") && (e = null);
            var f = !1;
            if (e === null)
                f = !0;
            else
                switch (c) {
                    case "string":
                    case "number":
                        f = !0;
                        break;
                    case "object": switch (e.$$typeof) {
                        case y:
                        case P: f = !0;
                    }
                }
            if (f)
                return f = e, u = u(f), e = o === "" ? "." + $(f, 0) : o, Array.isArray(u) ? (r = "", e != null && (r = e.replace(V, "$&/") + "/"), v(u, t, r, "", function (p) { return p; })) : u != null && (k(u) && (u = ee(u, r + (!u.key || f && f.key === u.key ? "" : ("" + u.key).replace(V, "$&/") + "/") + e)), t.push(u)), 1;
            if (f = 0, o = o === "" ? "." : o + ":", Array.isArray(e))
                for (var s = 0; s < e.length; s++) {
                    c = e[s];
                    var i = o + $(c, s);
                    f += v(c, t, r, i, u);
                }
            else if (i = b(e), typeof i == "function")
                for (e = i.call(e), s = 0; !(c = e.next()).done;)
                    c = c.value, i = o + $(c, s++), f += v(c, t, r, i, u);
            else if (c === "object")
                throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
            return f;
        }
        function m(e, t, r) {
            if (e == null)
                return e;
            var o = [], u = 0;
            return v(e, o, "", "", function (c) { return t.call(r, c, u++); }), o;
        }
        function re(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(), e._status = 0, e._result = t, t.then(function (r) { e._status === 0 && (r = r.default, e._status = 1, e._result = r); }, function (r) { e._status === 0 && (e._status = 2, e._result = r); });
            }
            if (e._status === 1)
                return e._result;
            throw e._result;
        }
        var B = { current: null };
        function a() {
            var e = B.current;
            if (e === null)
                throw Error(_(321));
            return e;
        }
        var ne = { ReactCurrentDispatcher: B, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: R, IsSomeRendererActing: { current: !1 }, assign: E };
        n.Children = { map: m, forEach: function (e, t, r) { m(e, function () { t.apply(this, arguments); }, r); }, count: function (e) { var t = 0; return m(e, function () { t++; }), t; }, toArray: function (e) { return m(e, function (t) { return t; }) || []; }, only: function (e) {
                if (!k(e))
                    throw Error(_(143));
                return e;
            } };
        n.Component = d;
        n.PureComponent = S;
        n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne;
        n.cloneElement = function (e, t, r) {
            if (e == null)
                throw Error(_(267, e));
            var o = E({}, e.props), u = e.key, c = e.ref, f = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (c = t.ref, f = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps)
                    var s = e.type.defaultProps;
                for (i in t)
                    N.call(t, i) && !U.hasOwnProperty(i) && (o[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
            }
            var i = arguments.length - 2;
            if (i === 1)
                o.children = r;
            else if (1 < i) {
                s = Array(i);
                for (var p = 0; p < i; p++)
                    s[p] = arguments[p + 2];
                o.children = s;
            }
            return { $$typeof: y, type: e.type, key: u, ref: c, props: o, _owner: f };
        };
        n.createContext = function (e, t) { return t === void 0 && (t = null), e = { $$typeof: I, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: x, _context: e }, e.Consumer = e; };
        n.createElement = T;
        n.createFactory = function (e) { var t = T.bind(null, e); return t.type = e, t; };
        n.createRef = function () { return { current: null }; };
        n.forwardRef = function (e) { return { $$typeof: w, render: e }; };
        n.isValidElement = k;
        n.lazy = function (e) { return { $$typeof: F, _payload: { _status: -1, _result: e }, _init: re }; };
        n.memo = function (e, t) { return { $$typeof: A, type: e, compare: t === void 0 ? null : t }; };
        n.useCallback = function (e, t) { return a().useCallback(e, t); };
        n.useContext = function (e, t) { return a().useContext(e, t); };
        n.useDebugValue = function () { };
        n.useEffect = function (e, t) { return a().useEffect(e, t); };
        n.useImperativeHandle = function (e, t, r) { return a().useImperativeHandle(e, t, r); };
        n.useLayoutEffect = function (e, t) { return a().useLayoutEffect(e, t); };
        n.useMemo = function (e, t) { return a().useMemo(e, t); };
        n.useReducer = function (e, t, r) { return a().useReducer(e, t, r); };
        n.useRef = function (e) { return a().useRef(e); };
        n.useState = function (e) { return a().useState(e); };
        n.version = "17.0.2";
    });
    var g = j((se, H) => {
        "use strict";
        H.exports = z();
    });
    var oe = O(g()), ue = O(g()), { Fragment: fe, StrictMode: le, Profiler: pe, Suspense: ae, Children: ye, Component: de, PureComponent: _e, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, cloneElement: me, createContext: he, createElement: Ee, createFactory: Se, createRef: Ce, forwardRef: Re, isValidElement: ke, lazy: $e, memo: ge, useCallback: je, useContext: Oe, useDebugValue: Pe, useEffect: xe, useImperativeHandle: Ie, useLayoutEffect: we, useMemo: Ae, useReducer: Fe, useRef: Le, useState: qe, version: De } = oe;
    var export_default = ue.default;
    return { Children: ye, Component: de, Fragment: fe, Profiler: pe, PureComponent: _e, StrictMode: le, Suspense: ae, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, cloneElement: me, createContext: he, createElement: Ee, createFactory: Se, createRef: Ce, default: export_default, forwardRef: Re, isValidElement: ke, lazy: $e, memo: ge, useCallback: je, useContext: Oe, useDebugValue: Pe, useEffect: xe, useImperativeHandle: Ie, useLayoutEffect: we, useMemo: Ae, useReducer: Fe, useRef: Le, useState: qe, version: De };
})();
const mod17 = (async () => {
    const __react$ = (await mod19).default;
    var Pe = Object.create;
    var ne = Object.defineProperty;
    var Le = Object.getOwnPropertyDescriptor;
    var Ae = Object.getOwnPropertyNames;
    var Re = Object.getPrototypeOf, We = Object.prototype.hasOwnProperty;
    var Ue = e => ne(e, "__esModule", { value: !0 });
    var ae = e => {
        if (typeof require != "undefined")
            return require(e);
        throw new Error("Dynamic require of \"" + e + "\" is not supported");
    };
    var _ = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var De = (e, t, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of Ae(t))
                !We.call(e, n) && n !== "default" && ne(e, n, { get: () => t[n], enumerable: !(r = Le(t, n)) || r.enumerable });
        return e;
    }, Se = e => De(Ue(ne(e != null ? Pe(Re(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
    var y = _(l => {
        "use strict";
        Object.defineProperty(l, "__esModule", { value: !0 });
        l.isEventSourceSupported = l.isReactNative = l.ReadyState = l.UNPARSABLE_JSON_OBJECT = l.DEFAULT_RECONNECT_INTERVAL_MS = l.DEFAULT_RECONNECT_LIMIT = l.SOCKET_IO_PING_CODE = l.SOCKET_IO_PATH = l.SOCKET_IO_PING_INTERVAL = l.DEFAULT_EVENT_SOURCE_OPTIONS = l.EMPTY_EVENT_HANDLERS = l.DEFAULT_OPTIONS = void 0;
        var je = 1, qe = 1000 * je;
        l.DEFAULT_OPTIONS = {};
        l.EMPTY_EVENT_HANDLERS = {};
        l.DEFAULT_EVENT_SOURCE_OPTIONS = { withCredentials: !1, events: l.EMPTY_EVENT_HANDLERS };
        l.SOCKET_IO_PING_INTERVAL = 25 * qe;
        l.SOCKET_IO_PATH = "/socket.io/?EIO=3&transport=websocket";
        l.SOCKET_IO_PING_CODE = "2";
        l.DEFAULT_RECONNECT_LIMIT = 20;
        l.DEFAULT_RECONNECT_INTERVAL_MS = 5000;
        l.UNPARSABLE_JSON_OBJECT = {};
        var Je;
        (function (e) { e[e.UNINSTANTIATED = -1] = "UNINSTANTIATED", e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED"; })(Je = l.ReadyState || (l.ReadyState = {}));
        var Fe = function () {
            try {
                return "EventSource" in globalThis;
            }
            catch (e) {
                return !1;
            }
        };
        l.isReactNative = typeof navigator != "undefined" && navigator.product === "ReactNative";
        l.isEventSourceSupported = !l.isReactNative && Fe();
    });
    var ue = _(G => {
        "use strict";
        Object.defineProperty(G, "__esModule", { value: !0 });
        G.sharedWebSockets = void 0;
        G.sharedWebSockets = {};
    });
    var K = _(g => {
        "use strict";
        Object.defineProperty(g, "__esModule", { value: !0 });
        g.setUpSocketIOPing = g.appendQueryParams = g.parseSocketIOUrl = void 0;
        var V = y();
        g.parseSocketIOUrl = function (e) {
            if (e) {
                var t = /^https|wss/.test(e), r = e.replace(/^(https?|wss?)(:\/\/)?/, ""), n = r.replace(/\/$/, ""), a = t ? "wss" : "ws";
                return a + "://" + n + V.SOCKET_IO_PATH;
            }
            else if (e === "") {
                var t = /^https/.test(window.location.protocol), a = t ? "wss" : "ws", u = window.location.port ? ":" + window.location.port : "";
                return a + "://" + window.location.hostname + u + V.SOCKET_IO_PATH;
            }
            return e;
        };
        g.appendQueryParams = function (e, t) { t === void 0 && (t = {}); var r = /\?([\w]+=[\w]+)/, n = r.test(e), a = "" + Object.entries(t).reduce(function (u, o) { var i = o[0], f = o[1]; return u + (i + "=" + f + "&"); }, "").slice(0, -1); return "" + e + (n ? "&" : "?") + a; };
        g.setUpSocketIOPing = function (e, t) { t === void 0 && (t = V.SOCKET_IO_PING_INTERVAL); var r = function () { return e(V.SOCKET_IO_PING_CODE); }; return setInterval(r, t); };
    });
    var ce = _(B => {
        "use strict";
        Object.defineProperty(B, "__esModule", { value: !0 });
        B.assertIsWebSocket = void 0;
        function He(e) {
            if (!(e instanceof WebSocket))
                throw new Error("");
        }
        B.assertIsWebSocket = He;
    });
    var _e = _(M => {
        "use strict";
        var Q = M && M.__assign || function () {
            return Q = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }, Q.apply(this, arguments);
        };
        Object.defineProperty(M, "__esModule", { value: !0 });
        M.attachListeners = void 0;
        var Ge = K(), h = y(), Ve = ce(), Ke = function (e, t, r) { e.onmessage = function (n) { t.current.onMessage && t.current.onMessage(n), !(typeof t.current.filter == "function" && t.current.filter(n) !== !0) && r(n); }; }, Be = function (e, t, r, n) { e.onopen = function (a) { t.current.onOpen && t.current.onOpen(a), n.current = 0, r(h.ReadyState.OPEN); }; }, Qe = function (e, t, r, n, a) {
            if (h.isEventSourceSupported && e instanceof EventSource)
                return function () { };
            Ve.assertIsWebSocket(e);
            var u;
            return e.onclose = function (o) {
                var i, f;
                if (t.current.onClose && t.current.onClose(o), r(h.ReadyState.CLOSED), t.current.shouldReconnect && t.current.shouldReconnect(o)) {
                    var c = (i = t.current.reconnectAttempts) !== null && i !== void 0 ? i : h.DEFAULT_RECONNECT_LIMIT;
                    a.current < c ? u = window.setTimeout(function () { a.current++, n(); }, (f = t.current.reconnectInterval) !== null && f !== void 0 ? f : h.DEFAULT_RECONNECT_INTERVAL_MS) : (t.current.onReconnectStop && t.current.onReconnectStop(c), console.warn("Max reconnect attempts of " + c + " exceeded"));
                }
            }, function () { return u && window.clearTimeout(u); };
        }, Ye = function (e, t, r, n, a) { var u; return e.onerror = function (o) { var i, f; t.current.onError && t.current.onError(o), h.isEventSourceSupported && e instanceof EventSource && (t.current.onClose && t.current.onClose(Q(Q({}, o), { code: 1006, reason: "An error occurred with the EventSource: " + o, wasClean: !1 })), r(h.ReadyState.CLOSED), e.close()), t.current.retryOnError && (a.current < ((i = t.current.reconnectAttempts) !== null && i !== void 0 ? i : h.DEFAULT_RECONNECT_LIMIT) ? u = window.setTimeout(function () { a.current++, n(); }, (f = t.current.reconnectInterval) !== null && f !== void 0 ? f : h.DEFAULT_RECONNECT_INTERVAL_MS) : (t.current.onReconnectStop && t.current.onReconnectStop(t.current.reconnectAttempts), console.warn("Max reconnect attempts of " + t.current.reconnectAttempts + " exceeded"))); }, function () { return u && window.clearTimeout(u); }; };
        M.attachListeners = function (e, t, r, n, a, u) { var o = t.setLastMessage, i = t.setReadyState, f, c, s; return r.current.fromSocketIO && (f = Ge.setUpSocketIOPing(u)), Ke(e, r, o), Be(e, r, i, a), c = Qe(e, r, i, n, a), s = Ye(e, r, i, n, a), function () { i(h.ReadyState.CLOSING), c(), s(), e.close(), f && clearInterval(f); }; };
    });
    var oe = _(O => {
        "use strict";
        Object.defineProperty(O, "__esModule", { value: !0 });
        O.removeSubscriber = O.addSubscriber = O.hasSubscribers = O.getSubscribers = void 0;
        var P = {}, ze = [];
        O.getSubscribers = function (e) { return O.hasSubscribers(e) ? Array.from(P[e]) : ze; };
        O.hasSubscribers = function (e) { var t; return ((t = P[e]) === null || t === void 0 ? void 0 : t.size) > 0; };
        O.addSubscriber = function (e, t) { P[e] = P[e] || new Set, P[e].add(t); };
        O.removeSubscriber = function (e, t) { P[e].delete(t); };
    });
    var Ee = _(L => {
        "use strict";
        var Y = L && L.__assign || function () {
            return Y = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }, Y.apply(this, arguments);
        };
        Object.defineProperty(L, "__esModule", { value: !0 });
        L.attachSharedListeners = void 0;
        var $e = ue(), w = y(), D = oe(), xe = K(), Xe = function (e, t) { e.onmessage = function (r) { D.getSubscribers(t).forEach(function (n) { n.optionsRef.current.onMessage && n.optionsRef.current.onMessage(r), !(typeof n.optionsRef.current.filter == "function" && n.optionsRef.current.filter(r) !== !0) && n.setLastMessage(r); }); }; }, Ze = function (e, t) { e.onopen = function (r) { D.getSubscribers(t).forEach(function (n) { n.reconnectCount.current = 0, n.optionsRef.current.onOpen && n.optionsRef.current.onOpen(r), n.setReadyState(w.ReadyState.OPEN); }); }; }, et = function (e, t) {
            e instanceof WebSocket && (e.onclose = function (r) {
                D.getSubscribers(t).forEach(function (n) { n.optionsRef.current.onClose && n.optionsRef.current.onClose(r), n.setReadyState(w.ReadyState.CLOSED); }), delete $e.sharedWebSockets[t], D.getSubscribers(t).forEach(function (n) {
                    var a, u;
                    if (n.optionsRef.current.shouldReconnect && n.optionsRef.current.shouldReconnect(r)) {
                        var o = (a = n.optionsRef.current.reconnectAttempts) !== null && a !== void 0 ? a : w.DEFAULT_RECONNECT_LIMIT;
                        n.reconnectCount.current < o ? setTimeout(function () { n.reconnectCount.current++, n.reconnect.current(); }, (u = n.optionsRef.current.reconnectInterval) !== null && u !== void 0 ? u : w.DEFAULT_RECONNECT_INTERVAL_MS) : (n.optionsRef.current.onReconnectStop && n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts), console.warn("Max reconnect attempts of " + o + " exceeded"));
                    }
                });
            });
        }, tt = function (e, t) { e.onerror = function (r) { D.getSubscribers(t).forEach(function (n) { n.optionsRef.current.onError && n.optionsRef.current.onError(r), w.isEventSourceSupported && e instanceof EventSource && (n.optionsRef.current.onClose && n.optionsRef.current.onClose(Y(Y({}, r), { code: 1006, reason: "An error occurred with the EventSource: " + r, wasClean: !1 })), n.setReadyState(w.ReadyState.CLOSED)); }), w.isEventSourceSupported && e instanceof EventSource && e.close(); }; };
        L.attachSharedListeners = function (e, t, r, n) { var a; return r.current.fromSocketIO && (a = xe.setUpSocketIOPing(n)), Xe(e, t), et(e, t), Ze(e, t), tt(e, t), function () { a && clearInterval(a); }; };
    });
    var Oe = _(z => {
        "use strict";
        Object.defineProperty(z, "__esModule", { value: !0 });
        z.createOrJoinSocket = void 0;
        var C = ue(), j = y(), rt = _e(), nt = Ee(), se = oe(), at = function (e, t, r, n, a) {
            return function () {
                if (se.removeSubscriber(e, t), !se.hasSubscribers(e)) {
                    try {
                        var u = C.sharedWebSockets[e];
                        u instanceof WebSocket && (u.onclose = function (o) { r.current.onClose && r.current.onClose(o), n(j.ReadyState.CLOSED); }), u.close();
                    }
                    catch (o) { }
                    a && a(), delete C.sharedWebSockets[e];
                }
            };
        };
        z.createOrJoinSocket = function (e, t, r, n, a, u, o, i) {
            if (!j.isEventSourceSupported && n.current.eventSourceOptions)
                throw j.isReactNative ? new Error("EventSource is not supported in ReactNative") : new Error("EventSource is not supported");
            if (n.current.share) {
                var f = null;
                C.sharedWebSockets[t] === void 0 ? (r(j.ReadyState.CONNECTING), C.sharedWebSockets[t] = n.current.eventSourceOptions ? new EventSource(t, n.current.eventSourceOptions) : new WebSocket(t, n.current.protocols), f = nt.attachSharedListeners(C.sharedWebSockets[t], t, n, i)) : r(C.sharedWebSockets[t].readyState);
                var c = { setLastMessage: a, setReadyState: r, optionsRef: n, reconnectCount: o, reconnect: u };
                return se.addSubscriber(t, c), e.current = C.sharedWebSockets[t], at(t, c, n, r, f);
            }
            else {
                if (r(j.ReadyState.CONNECTING), e.current = n.current.eventSourceOptions ? new EventSource(t, n.current.eventSourceOptions) : new WebSocket(t, n.current.protocols), !e.current)
                    throw new Error("WebSocket failed to be created");
                return rt.attachListeners(e.current, { setLastMessage: a, setReadyState: r }, n, u.current, o, i);
            }
        };
    });
    var ye = _(N => {
        "use strict";
        var ut = N && N.__awaiter || function (e, t, r, n) {
            function a(u) { return u instanceof r ? u : new r(function (o) { o(u); }); }
            return new (r || (r = Promise))(function (u, o) {
                function i(s) {
                    try {
                        c(n.next(s));
                    }
                    catch (d) {
                        o(d);
                    }
                }
                function f(s) {
                    try {
                        c(n.throw(s));
                    }
                    catch (d) {
                        o(d);
                    }
                }
                function c(s) { s.done ? u(s.value) : a(s.value).then(i, f); }
                c((n = n.apply(e, t || [])).next());
            });
        }, ct = N && N.__generator || function (e, t) {
            var r = { label: 0, sent: function () {
                    if (u[0] & 1)
                        throw u[1];
                    return u[1];
                }, trys: [], ops: [] }, n, a, u, o;
            return o = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function () { return this; }), o;
            function i(c) { return function (s) { return f([c, s]); }; }
            function f(c) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; r;)
                    try {
                        if (n = 1, a && (u = c[0] & 2 ? a.return : c[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, c[1])).done)
                            return u;
                        switch (a = 0, u && (c = [c[0] & 2, u.value]), c[0]) {
                            case 0:
                            case 1:
                                u = c;
                                break;
                            case 4: return r.label++, { value: c[1], done: !1 };
                            case 5:
                                r.label++, a = c[1], c = [0];
                                continue;
                            case 7:
                                c = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                    r = 0;
                                    continue;
                                }
                                if (c[0] === 3 && (!u || c[1] > u[0] && c[1] < u[3])) {
                                    r.label = c[1];
                                    break;
                                }
                                if (c[0] === 6 && r.label < u[1]) {
                                    r.label = u[1], u = c;
                                    break;
                                }
                                if (u && r.label < u[2]) {
                                    r.label = u[2], r.ops.push(c);
                                    break;
                                }
                                u[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        c = t.call(e, r);
                    }
                    catch (s) {
                        c = [6, s], a = 0;
                    }
                    finally {
                        n = u = 0;
                    }
                if (c[0] & 5)
                    throw c[1];
                return { value: c[0] ? c[1] : void 0, done: !0 };
            }
        };
        Object.defineProperty(N, "__esModule", { value: !0 });
        N.getUrl = void 0;
        var he = K();
        N.getUrl = function (e, t) {
            return ut(void 0, void 0, void 0, function () {
                var r, n, a;
                return ct(this, function (u) {
                    switch (u.label) {
                        case 0: return typeof e != "function" ? [3, 2] : [4, e()];
                        case 1: return r = u.sent(), [3, 3];
                        case 2: r = e, u.label = 3;
                        case 3: return n = t.current.fromSocketIO ? he.parseSocketIOUrl(r) : r, a = t.current.queryParams ? he.appendQueryParams(n, t.current.queryParams) : n, [2, a];
                    }
                });
            });
        };
    });
    var be = _(A => {
        "use strict";
        Object.defineProperty(A, "__esModule", { value: !0 });
        A.websocketWrapper = void 0;
        A.websocketWrapper = function (e, t) { return new Proxy(e, { get: function (r, n) { var a = r[n]; return n === "reconnect" ? t : typeof a == "function" ? (console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."), function () { }) : a; }, set: function (r, n, a) { return /^on/.test(n) ? (console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."), !1) : (r[n] = a, !0); } }); };
        A.default = A.websocketWrapper;
    });
    var $ = _(E => {
        "use strict";
        var R = E && E.__assign || function () {
            return R = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }, R.apply(this, arguments);
        }, ot = E && E.__awaiter || function (e, t, r, n) {
            function a(u) { return u instanceof r ? u : new r(function (o) { o(u); }); }
            return new (r || (r = Promise))(function (u, o) {
                function i(s) {
                    try {
                        c(n.next(s));
                    }
                    catch (d) {
                        o(d);
                    }
                }
                function f(s) {
                    try {
                        c(n.throw(s));
                    }
                    catch (d) {
                        o(d);
                    }
                }
                function c(s) { s.done ? u(s.value) : a(s.value).then(i, f); }
                c((n = n.apply(e, t || [])).next());
            });
        }, st = E && E.__generator || function (e, t) {
            var r = { label: 0, sent: function () {
                    if (u[0] & 1)
                        throw u[1];
                    return u[1];
                }, trys: [], ops: [] }, n, a, u, o;
            return o = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function () { return this; }), o;
            function i(c) { return function (s) { return f([c, s]); }; }
            function f(c) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; r;)
                    try {
                        if (n = 1, a && (u = c[0] & 2 ? a.return : c[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, c[1])).done)
                            return u;
                        switch (a = 0, u && (c = [c[0] & 2, u.value]), c[0]) {
                            case 0:
                            case 1:
                                u = c;
                                break;
                            case 4: return r.label++, { value: c[1], done: !1 };
                            case 5:
                                r.label++, a = c[1], c = [0];
                                continue;
                            case 7:
                                c = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                    r = 0;
                                    continue;
                                }
                                if (c[0] === 3 && (!u || c[1] > u[0] && c[1] < u[3])) {
                                    r.label = c[1];
                                    break;
                                }
                                if (c[0] === 6 && r.label < u[1]) {
                                    r.label = u[1], u = c;
                                    break;
                                }
                                if (u && r.label < u[2]) {
                                    r.label = u[2], r.ops.push(c);
                                    break;
                                }
                                u[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        c = t.call(e, r);
                    }
                    catch (s) {
                        c = [6, s], a = 0;
                    }
                    finally {
                        n = u = 0;
                    }
                if (c[0] & 5)
                    throw c[1];
                return { value: c[0] ? c[1] : void 0, done: !0 };
            }
        }, it = E && E.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
        Object.defineProperty(E, "__esModule", { value: !0 });
        E.useWebSocket = void 0;
        var S = __react$, b = y(), ft = Oe(), lt = ye(), dt = it(be()), ge = ce();
        E.useWebSocket = function (e, t, r) {
            t === void 0 && (t = b.DEFAULT_OPTIONS), r === void 0 && (r = !0);
            var n = S.useState(null), a = n[0], u = n[1], o = S.useState({}), i = o[0], f = o[1], c = S.useMemo(function () {
                if (a)
                    try {
                        return JSON.parse(a.data);
                    }
                    catch (v) {
                        return b.UNPARSABLE_JSON_OBJECT;
                    }
                return null;
            }, [a]), s = S.useRef(null), d = S.useRef(null), m = S.useRef(function () { }), Z = S.useRef(0), q = S.useRef([]), p = S.useRef(null), J = S.useRef(t);
            J.current = t;
            var ee = s.current && i[s.current] !== void 0 ? i[s.current] : e !== null && r === !0 ? b.ReadyState.CONNECTING : b.ReadyState.UNINSTANTIATED, me = t.queryParams ? JSON.stringify(t.queryParams) : null, I = S.useCallback(function (v) {
                if (b.isEventSourceSupported && d.current instanceof EventSource) {
                    console.warn("Unable to send a message from an eventSource");
                    return;
                }
                d.current && d.current.readyState === b.ReadyState.OPEN ? (ge.assertIsWebSocket(d.current), d.current.send(v)) : q.current.push(v);
            }, []), Ie = S.useCallback(function (v) { I(JSON.stringify(v)); }, [I]), ke = S.useCallback(function () { return J.current.share !== !0 || b.isEventSourceSupported && d.current instanceof EventSource ? d.current : (p.current === null && d.current && (ge.assertIsWebSocket(d.current), p.current = dt.default(d.current, m)), p.current); }, []);
            return S.useEffect(function () {
                if (e !== null && r === !0) {
                    var v, F = !1, le = function () {
                        return ot(void 0, void 0, void 0, function () {
                            var H, k, de;
                            return st(this, function (ve) {
                                switch (ve.label) {
                                    case 0: return H = s, [4, lt.getUrl(e, J)];
                                    case 1: return H.current = ve.sent(), k = function (te) { F || u(te); }, de = function (te) { F || f(function (Me) { var re; return R(R({}, Me), s.current && (re = {}, re[s.current] = te, re)); }); }, v = ft.createOrJoinSocket(d, s.current, de, J, k, m, Z, I), [2];
                                }
                            });
                        });
                    };
                    return m.current = function () { F || (p.current && (p.current = null), v == null || v(), le()); }, le(), function () { F = !0, p.current && (p.current = null), v == null || v(), u(null); };
                }
                else
                    (e === null || r === !1) && f(function (H) { var k; return R(R({}, H), s.current && (k = {}, k[s.current] = b.ReadyState.CLOSED, k)); });
            }, [e, r, me, I]), S.useEffect(function () { ee === b.ReadyState.OPEN && q.current.splice(0).forEach(function (v) { I(v); }); }, [ee]), { sendMessage: I, sendJsonMessage: Ie, lastMessage: a, lastJsonMessage: c, readyState: ee, getWebSocket: ke };
        };
    });
    var Te = _(W => {
        "use strict";
        var x = W && W.__assign || function () {
            return x = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }, x.apply(this, arguments);
        };
        Object.defineProperty(W, "__esModule", { value: !0 });
        W.useSocketIO = void 0;
        var Ne = __react$, vt = $(), St = y(), ie = { type: "empty", payload: null }, _t = function (e) {
            if (!e || !e.data)
                return ie;
            var t = e.data.match(/\[.*]/);
            if (!t)
                return ie;
            var r = JSON.parse(t);
            return !Array.isArray(r) || !r[1] ? ie : { type: r[0], payload: r[1] };
        };
        W.useSocketIO = function (e, t, r) { t === void 0 && (t = St.DEFAULT_OPTIONS), r === void 0 && (r = !0); var n = Ne.useMemo(function () { return x(x({}, t), { fromSocketIO: !0 }); }, []), a = vt.useWebSocket(e, n, r), u = a.sendMessage, o = a.sendJsonMessage, i = a.lastMessage, f = a.readyState, c = a.getWebSocket, s = Ne.useMemo(function () { return _t(i); }, [i]); return { sendMessage: u, sendJsonMessage: o, lastMessage: s, lastJsonMessage: s, readyState: f, getWebSocket: c }; };
    });
    var Ce = _(T => {
        "use strict";
        var X = T && T.__assign || function () {
            return X = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }, X.apply(this, arguments);
        }, Et = T && T.__rest || function (e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
            return r;
        };
        Object.defineProperty(T, "__esModule", { value: !0 });
        T.useEventSource = void 0;
        var pe = __react$, Ot = $(), we = y();
        T.useEventSource = function (e, t, r) { t === void 0 && (t = we.DEFAULT_EVENT_SOURCE_OPTIONS), r === void 0 && (r = !0); var n = t.withCredentials, a = t.events, u = Et(t, ["withCredentials", "events"]), o = X(X({}, u), { eventSourceOptions: { withCredentials: n } }), i = pe.useRef(we.EMPTY_EVENT_HANDLERS); a && (i.current = a); var f = Ot.useWebSocket(e, o, r), c = f.lastMessage, s = f.readyState, d = f.getWebSocket; return pe.useEffect(function () { (c == null ? void 0 : c.type) && Object.entries(i.current).forEach(function (m) { var Z = m[0], q = m[1]; Z === c.type && q(c); }); }, [c]), { lastEvent: c, readyState: s, getEventSource: d }; };
    });
    var fe = _(U => {
        "use strict";
        Object.defineProperty(U, "__esModule", { value: !0 });
        var ht = $();
        Object.defineProperty(U, "default", { enumerable: !0, get: function () { return ht.useWebSocket; } });
        var yt = Te();
        Object.defineProperty(U, "useSocketIO", { enumerable: !0, get: function () { return yt.useSocketIO; } });
        var bt = y();
        Object.defineProperty(U, "ReadyState", { enumerable: !0, get: function () { return bt.ReadyState; } });
        var gt = Ce();
        Object.defineProperty(U, "useEventSource", { enumerable: !0, get: function () { return gt.useEventSource; } });
    });
    var Nt = Se(fe()), Tt = Se(fe()), { useSocketIO: qt, ReadyState: Jt, useEventSource: Ft } = Nt;
    var export_default = Tt.default;
    return { ReadyState: Jt, default: export_default, useEventSource: Ft, useSocketIO: qt };
})();
const mod13 = (async () => {
    const { default: _default } = await mod17;
    return { default: _default, ...await mod17 };
})();
const mod15 = (async () => {
    const WHITE_KING_CHAR = "\u2654";
    const WHITE_QUEEN_CHAR = "\u2655";
    const WHITE_ROOK_CHAR = "\u2656";
    const WHITE_BISHOP_CHAR = "\u2657";
    const WHITE_KNIGHT_CHAR = "\u2658";
    const WHITE_PAWN_CHAR = "\u2659";
    const BLACK_KING_CHAR = "\u265A";
    const BLACK_QUEEN_CHAR = "\u265B";
    const BLACK_ROOK_CHAR = "\u265C";
    const BLACK_BISHOP_CHAR = "\u265D";
    const BLACK_KNIGHT_CHAR = "\u265E";
    const BLACK_PAWN_CHAR = "\u265F";
    const PIECES = (function () {
        const PIECES_RECORD = {
            [WHITE_KING_CHAR]: WHITE_KING_CHAR,
            [WHITE_QUEEN_CHAR]: WHITE_QUEEN_CHAR,
            [WHITE_ROOK_CHAR]: WHITE_ROOK_CHAR,
            [WHITE_BISHOP_CHAR]: WHITE_BISHOP_CHAR,
            [WHITE_KNIGHT_CHAR]: WHITE_KNIGHT_CHAR,
            [WHITE_PAWN_CHAR]: WHITE_PAWN_CHAR,
            [BLACK_KING_CHAR]: BLACK_KING_CHAR,
            [BLACK_QUEEN_CHAR]: BLACK_QUEEN_CHAR,
            [BLACK_ROOK_CHAR]: BLACK_ROOK_CHAR,
            [BLACK_BISHOP_CHAR]: BLACK_BISHOP_CHAR,
            [BLACK_KNIGHT_CHAR]: BLACK_KNIGHT_CHAR,
            [BLACK_PAWN_CHAR]: BLACK_PAWN_CHAR
        };
        return new Set(Object.values(PIECES_RECORD));
    })();
    function isPiece(str) {
        return PIECES.has(str);
    }
    const CHESS_PIECE_CHAR_TO_CODE_MAP = {
        [WHITE_KING_CHAR]: "wK",
        [WHITE_QUEEN_CHAR]: "wQ",
        [WHITE_ROOK_CHAR]: "wR",
        [WHITE_BISHOP_CHAR]: "wB",
        [WHITE_KNIGHT_CHAR]: "wN",
        [WHITE_PAWN_CHAR]: "wP",
        [BLACK_KING_CHAR]: "bK",
        [BLACK_QUEEN_CHAR]: "bQ",
        [BLACK_ROOK_CHAR]: "bR",
        [BLACK_BISHOP_CHAR]: "bB",
        [BLACK_KNIGHT_CHAR]: "bN",
        [BLACK_PAWN_CHAR]: "bP"
    };
    const CHESS_PIECE_CODE_TO_CHAR_MAP = Object.fromEntries(Object.entries(CHESS_PIECE_CHAR_TO_CODE_MAP).map(([key, code]) => [code, key]));
    return { WHITE_KING_CHAR, WHITE_QUEEN_CHAR, WHITE_ROOK_CHAR, WHITE_BISHOP_CHAR, WHITE_KNIGHT_CHAR, WHITE_PAWN_CHAR, BLACK_KING_CHAR, BLACK_QUEEN_CHAR, BLACK_ROOK_CHAR, BLACK_BISHOP_CHAR, BLACK_KNIGHT_CHAR, BLACK_PAWN_CHAR, isPiece, CHESS_PIECE_CHAR_TO_CODE_MAP, CHESS_PIECE_CODE_TO_CHAR_MAP };
})();
const mod14 = (async () => {
    const { PieceCode } = await mod15;
    function getPositionIndex(position) {
        return position.row * 8 + position.col;
    }
    function getPosition(index) {
        const row = Math.floor(index / 8);
        const col = index % 8;
        return { row, col };
    }
    function getFile(col) {
        switch (col) {
            case 0: return "a";
            case 1: return "b";
            case 2: return "c";
            case 3: return "d";
            case 4: return "e";
            case 5: return "f";
            case 6: return "g";
            case 7: return "h";
            default: throw new Error();
        }
    }
    function getSquare(position) {
        return `${getFile(position.col)}${position.row + 1}`;
    }
    function getPositionFromSquare(square) {
        const col = (function () {
            switch (square.charAt(0)) {
                case "a": return 0;
                case "b": return 1;
                case "c": return 2;
                case "d": return 3;
                case "e": return 4;
                case "f": return 5;
                case "g": return 6;
                case "h": return 7;
                default: return 100;
            }
        })();
        const row = +square.charAt(1) - 1;
        return { row, col };
    }
    return { getPositionIndex, getPosition, getSquare, getPositionFromSquare };
})();
const mod11 = (async () => {
    const React = (await mod).default;
    const useWebSocket = (await mod13).default;
    const { Board, Position } = await mod14;
    const { Color } = await mod15;
    function shouldReconnect() {
        console.log("Reconnecting...");
        return true;
    }
    const initialState = {
        pieces: null,
        myColor: "white",
        lastMove: null,
        turn: "white"
    };
    function reducer(state, action) {
        switch (action.type) {
            case "update": {
                return {
                    pieces: action.pieces ?? state.pieces,
                    myColor: action.myColor ?? state.myColor,
                    lastMove: action.lastMove ?? state.lastMove,
                    turn: action.turn ?? state.turn
                };
            }
            case "close": {
                return {
                    pieces: null,
                    myColor: "white",
                    lastMove: null,
                    turn: "white"
                };
            }
            default: {
                console.warn(`Unsupported action: ${action}`);
                return state;
            }
        }
    }
    function useGame(options) {
        const [state, dispatch] = React.useReducer(reducer, initialState);
        const { pieces, lastMove, myColor, turn } = state;
        const onMessage = React.useCallback((message) => {
            const data = JSON.parse(message.data);
            console.log(data);
            dispatch({ type: "update", ...data });
        }, []);
        const onOpen = React.useCallback(() => {
            console.log("socket opened");
        }, []);
        const onError = React.useCallback((event) => {
            console.log(event);
        }, []);
        const onClose = React.useCallback((_event) => {
            dispatch({ type: "close" });
        }, []);
        const socket = useWebSocket(`ws://localhost:8080/api/ws`, { onMessage, onOpen, onError, onClose, shouldReconnect });
        const movePiece = React.useCallback((origin, target) => {
            socket.sendJsonMessage({ type: "move", origin, target });
        }, [socket]);
        const handle = React.useMemo(() => pieces ? ({
            pieces,
            lastMove,
            myColor,
            turn,
            movePiece
        }) : null, [pieces, lastMove, myColor, movePiece, turn]);
        if (handle === null) {
            return { status: "not-connected" };
        }
        return { status: "connected", handle };
    }
    return { default: _default };
})();
const mod18 = (async () => {
    const __react$ = (await mod19).default;
    var Wt = Object.create;
    var At = Object.defineProperty;
    var Gt = Object.getOwnPropertyDescriptor;
    var Vt = Object.getOwnPropertyNames;
    var Kt = Object.getPrototypeOf, Yt = Object.prototype.hasOwnProperty;
    var Xt = ce => At(ce, "__esModule", { value: !0 });
    var Ht = ce => {
        if (typeof require != "undefined")
            return require(ce);
        throw new Error("Dynamic require of \"" + ce + "\" is not supported");
    };
    var $t = (ce, m) => () => (m || ce((m = { exports: {} }).exports, m), m.exports);
    var Qt = (ce, m, a) => {
        if (m && typeof m == "object" || typeof m == "function")
            for (let n of Vt(m))
                !Yt.call(ce, n) && n !== "default" && At(ce, n, { get: () => m[n], enumerable: !(a = Gt(m, n)) || a.enumerable });
        return ce;
    }, Ut = ce => Qt(Xt(At(ce != null ? Wt(Kt(ce)) : {}, "default", ce && ce.__esModule && "default" in ce ? { get: () => ce.default, enumerable: !0 } : { value: ce, enumerable: !0 })), ce);
    var Bt = $t((Et, zt) => {
        (function (ce, m) { typeof Et == "object" && typeof zt == "object" ? zt.exports = m(__react$) : typeof define == "function" && define.amd ? define(["react"], m) : typeof Et == "object" ? Et.chessboardjsx = m(__react$) : ce.chessboardjsx = m(ce.react); })(window, function (ce) {
            return function (m) {
                var a = {};
                function n(r) {
                    if (a[r])
                        return a[r].exports;
                    var e = a[r] = { i: r, l: !1, exports: {} };
                    return m[r].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
                }
                return n.m = m, n.c = a, n.d = function (r, e, c) { n.o(r, e) || Object.defineProperty(r, e, { enumerable: !0, get: c }); }, n.r = function (r) { typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 }); }, n.t = function (r, e) {
                    if (1 & e && (r = n(r)), 8 & e || 4 & e && typeof r == "object" && r && r.__esModule)
                        return r;
                    var c = Object.create(null);
                    if (n.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: r }), 2 & e && typeof r != "string")
                        for (var i in r)
                            n.d(c, i, function (t) { return r[t]; }.bind(null, i));
                    return c;
                }, n.n = function (r) { var e = r && r.__esModule ? function () { return r.default; } : function () { return r; }; return n.d(e, "a", e), e; }, n.o = function (r, e) { return Object.prototype.hasOwnProperty.call(r, e); }, n.p = "", n(n.s = 50);
            }([function (m, a) { m.exports = ce; }, function (m, a, n) { m.exports = n(138)(); }, function (m, a, n) {
                    "use strict";
                    m.exports = function (r, e, c, i, t, o, u, d) {
                        if (!r) {
                            var v;
                            if (e === void 0)
                                v = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var b = [c, i, t, o, u, d], p = 0;
                                (v = new Error(e.replace(/%s/g, function () { return b[p++]; }))).name = "Invariant Violation";
                            }
                            throw v.framesToPop = 1, v;
                        }
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(45);
                    Object.defineProperty(a, "DragDropContext", { enumerable: !0, get: function () { return o(r).default; } });
                    var e = n(93);
                    Object.defineProperty(a, "DragDropContextProvider", { enumerable: !0, get: function () { return o(e).default; } });
                    var c = n(92);
                    Object.defineProperty(a, "DragLayer", { enumerable: !0, get: function () { return o(c).default; } });
                    var i = n(91);
                    Object.defineProperty(a, "DragSource", { enumerable: !0, get: function () { return o(i).default; } });
                    var t = n(81);
                    function o(u) { return u && u.__esModule ? u : { default: u }; }
                    Object.defineProperty(a, "DropTarget", { enumerable: !0, get: function () { return o(t).default; } });
                }, function (m, a) { var n = Array.isArray; m.exports = n; }, function (m, a, n) {
                    var r = n(44), e = n(131), c = n(43), i = Function.prototype, t = Object.prototype, o = i.toString, u = t.hasOwnProperty, d = o.call(Object);
                    m.exports = function (v) {
                        if (!c(v) || r(v) != "[object Object]")
                            return !1;
                        var b = e(v);
                        if (b === null)
                            return !0;
                        var p = u.call(b, "constructor") && b.constructor;
                        return typeof p == "function" && p instanceof p && o.call(p) == d;
                    };
                }, function (m, a, n) { var r = n(125), e = n(124), c = n(122); m.exports = function (i, t) { return c(e(i, t, r), i + ""); }; }, function (m, a, n) {
                    var r = n(26);
                    m.exports = function (e, c) {
                        for (var i = e.length; i--;)
                            if (r(e[i][0], c))
                                return i;
                        return -1;
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r, e) { };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.addSource = function (t) { return { type: r, sourceId: t }; }, a.addTarget = function (t) { return { type: e, targetId: t }; }, a.removeSource = function (t) { return { type: c, sourceId: t }; }, a.removeTarget = function (t) { return { type: i, targetId: t }; };
                    var r = a.ADD_SOURCE = "dnd-core/ADD_SOURCE", e = a.ADD_TARGET = "dnd-core/ADD_TARGET", c = a.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", i = a.REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
                }, function (m, a, n) { var r = n(121), e = n(43); m.exports = function (c) { return e(c) && r(c); }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.END_DRAG = a.DROP = a.HOVER = a.PUBLISH_DRAG_SOURCE = a.BEGIN_DRAG = void 0;
                    var r = Object.assign || function (l) {
                        for (var h = 1; h < arguments.length; h++) {
                            var s = arguments[h];
                            for (var g in s)
                                Object.prototype.hasOwnProperty.call(s, g) && (l[g] = s[g]);
                        }
                        return l;
                    };
                    a.beginDrag = function (l) {
                        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { publishSource: !0, clientOffset: null }, s = h.publishSource, g = h.clientOffset, S = h.getSourceClientOffset;
                        (0, e.default)((0, c.default)(l), "Expected sourceIds to be an array.");
                        var O = this.getMonitor(), j = this.getRegistry();
                        (0, e.default)(!O.isDragging(), "Cannot call beginDrag while dragging.");
                        for (var k = 0; k < l.length; k++)
                            (0, e.default)(j.getSource(l[k]), "Expected sourceIds to be registered.");
                        for (var T = null, P = l.length - 1; P >= 0; P--)
                            if (O.canDragSource(l[P])) {
                                T = l[P];
                                break;
                            }
                        if (T !== null) {
                            var R = null;
                            g && ((0, e.default)(typeof S == "function", "When clientOffset is provided, getSourceClientOffset must be a function."), R = S(T));
                            var K = j.getSource(T).beginDrag(O, T);
                            (0, e.default)((0, i.default)(K), "Item must be an object."), j.pinSource(T);
                            var B = j.getSourceType(T);
                            return { type: u, itemType: B, item: K, sourceId: T, clientOffset: g, sourceClientOffset: R, isSourcePublic: s };
                        }
                    }, a.publishDragSource = function () {
                        if (this.getMonitor().isDragging())
                            return { type: d };
                    }, a.hover = function (l) {
                        var h = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).clientOffset, s = h === void 0 ? null : h;
                        (0, e.default)((0, c.default)(l), "Expected targetIds to be an array.");
                        var g = l.slice(0), S = this.getMonitor(), O = this.getRegistry();
                        (0, e.default)(S.isDragging(), "Cannot call hover while not dragging."), (0, e.default)(!S.didDrop(), "Cannot call hover after drop.");
                        for (var j = 0; j < g.length; j++) {
                            var k = g[j];
                            (0, e.default)(g.lastIndexOf(k) === j, "Expected targetIds to be unique in the passed array.");
                            var T = O.getTarget(k);
                            (0, e.default)(T, "Expected targetIds to be registered.");
                        }
                        for (var P = S.getItemType(), R = g.length - 1; R >= 0; R--) {
                            var K = g[R], B = O.getTargetType(K);
                            (0, t.default)(B, P) || g.splice(R, 1);
                        }
                        for (var q = 0; q < g.length; q++) {
                            var F = g[q];
                            O.getTarget(F).hover(S, F);
                        }
                        return { type: v, targetIds: g, clientOffset: s };
                    }, a.drop = function () { var l = this, h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = this.getMonitor(), g = this.getRegistry(); (0, e.default)(s.isDragging(), "Cannot call drop while not dragging."), (0, e.default)(!s.didDrop(), "Cannot call drop twice during one drag operation."); var S = s.getTargetIds().filter(s.canDropOnTarget, s); S.reverse(), S.forEach(function (O, j) { var k = g.getTarget(O).drop(s, O); (0, e.default)(k === void 0 || (0, i.default)(k), "Drop result must either be an object or undefined."), k === void 0 && (k = j === 0 ? {} : s.getDropResult()), l.store.dispatch({ type: b, dropResult: r({}, h, k) }); }); }, a.endDrag = function () { var l = this.getMonitor(), h = this.getRegistry(); (0, e.default)(l.isDragging(), "Cannot call endDrag while not dragging."); var s = l.getSourceId(); return h.getSource(s, !0).endDrag(l, s), h.unpinSource(), { type: p }; };
                    var e = o(n(2)), c = o(n(4)), i = o(n(41)), t = o(n(40));
                    function o(l) { return l && l.__esModule ? l : { default: l }; }
                    var u = a.BEGIN_DRAG = "dnd-core/BEGIN_DRAG", d = a.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", v = a.HOVER = "dnd-core/HOVER", b = a.DROP = "dnd-core/DROP", p = a.END_DRAG = "dnd-core/END_DRAG";
                }, function (m, a) {
                    var n;
                    n = function () { return this; }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this");
                    }
                    catch (r) {
                        typeof window == "object" && (n = window);
                    }
                    m.exports = n;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.FILE = "__NATIVE_FILE__", a.URL = "__NATIVE_URL__", a.TEXT = "__NATIVE_TEXT__";
                }, function (m, a, n) {
                    "use strict";
                    a.__esModule = !0, a.default = function (r) { return Boolean(r && typeof r.dispose == "function"); }, m.exports = a.default;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r, e) {
                        if (r === e)
                            return !0;
                        var c = Object.keys(r), i = Object.keys(e);
                        if (c.length !== i.length)
                            return !1;
                        for (var t = Object.prototype.hasOwnProperty, o = 0; o < c.length; o += 1)
                            if (!t.call(e, c[o]) || r[c[o]] !== e[c[o]] || r[c[o]] !== e[c[o]])
                                return !1;
                        return !0;
                    };
                }, function (m, a, n) {
                    "use strict";
                    var r = { childContextTypes: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, e = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, c = Object.defineProperty, i = Object.getOwnPropertyNames, t = Object.getOwnPropertySymbols, o = Object.getOwnPropertyDescriptor, u = Object.getPrototypeOf, d = u && u(Object);
                    m.exports = function v(b, p, l) {
                        if (typeof p != "string") {
                            if (d) {
                                var h = u(p);
                                h && h !== d && v(b, h, l);
                            }
                            var s = i(p);
                            t && (s = s.concat(t(p)));
                            for (var g = 0; g < s.length; ++g) {
                                var S = s[g];
                                if (!(r[S] || e[S] || l && l[S])) {
                                    var O = o(p, S);
                                    try {
                                        c(b, S, O);
                                    }
                                    catch (j) { }
                                }
                            }
                            return b;
                        }
                        return b;
                    };
                }, function (m, a, n) { var r = n(37); m.exports = function (e, c) { return !(e == null || !e.length) && r(e, c, 0) > -1; }; }, function (m, a) {
                    m.exports = function (n, r) {
                        for (var e = -1, c = n == null ? 0 : n.length, i = Array(c); ++e < c;)
                            i[e] = r(n[e], e, n);
                        return i;
                    };
                }, function (m, a) {
                    m.exports = function (n, r, e) {
                        for (var c = -1, i = n == null ? 0 : n.length; ++c < i;)
                            if (e(r, n[c]))
                                return !0;
                        return !1;
                    };
                }, function (m, a, n) { var r = n(37); m.exports = function (e, c) { return !(e == null || !e.length) && r(e, c, 0) > -1; }; }, function (m, a, n) {
                    var r = n(4);
                    m.exports = function () {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return r(e) ? e : [e];
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(76), e = n(58);
                    a.getEmptyImage = e.default;
                    var c = n(13);
                    a.NativeTypes = c, a.default = function (i) { return new r.default(i); };
                }, function (m, a, n) {
                    (function (r, e) {
                        var c = 1, i = 2, t = 9007199254740991, o = "[object Arguments]", u = "[object Array]", d = "[object AsyncFunction]", v = "[object Boolean]", b = "[object Date]", p = "[object Error]", l = "[object Function]", h = "[object GeneratorFunction]", s = "[object Map]", g = "[object Number]", S = "[object Null]", O = "[object Object]", j = "[object Proxy]", k = "[object RegExp]", T = "[object Set]", P = "[object String]", R = "[object Symbol]", K = "[object Undefined]", B = "[object ArrayBuffer]", q = "[object DataView]", F = /^\[object .+?Constructor\]$/, Q = /^(?:0|[1-9]\d*)$/, z = {};
                        z["[object Float32Array]"] = z["[object Float64Array]"] = z["[object Int8Array]"] = z["[object Int16Array]"] = z["[object Int32Array]"] = z["[object Uint8Array]"] = z["[object Uint8ClampedArray]"] = z["[object Uint16Array]"] = z["[object Uint32Array]"] = !0, z[o] = z[u] = z[B] = z[v] = z[q] = z[b] = z[p] = z[l] = z[s] = z[g] = z[O] = z[k] = z[T] = z[P] = z["[object WeakMap]"] = !1;
                        var V = typeof r == "object" && r && r.Object === Object && r, ne = typeof self == "object" && self && self.Object === Object && self, G = V || ne || Function("return this")(), se = typeof a == "object" && a && !a.nodeType && a, oe = se && typeof e == "object" && e && !e.nodeType && e, me = oe && oe.exports === se, ve = me && V.process, ke = function () {
                            try {
                                return ve && ve.binding && ve.binding("util");
                            }
                            catch (E) { }
                        }(), qe = ke && ke.isTypedArray;
                        function Te(E, M) {
                            for (var N = -1, U = E == null ? 0 : E.length; ++N < U;)
                                if (M(E[N], N, E))
                                    return !0;
                            return !1;
                        }
                        function Ne(E) { var M = -1, N = Array(E.size); return E.forEach(function (U, ie) { N[++M] = [ie, U]; }), N; }
                        function Le(E) { var M = -1, N = Array(E.size); return E.forEach(function (U) { N[++M] = U; }), N; }
                        var $e, Ve, Ae, ft = Array.prototype, Tt = Function.prototype, Ke = Object.prototype, Qe = G["__core-js_shared__"], Je = Tt.toString, we = Ke.hasOwnProperty, ze = ($e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + $e : "", Ze = Ke.toString, jt = RegExp("^" + Je.call(we).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), dt = me ? G.Buffer : void 0, Be = G.Symbol, et = G.Uint8Array, pt = Ke.propertyIsEnumerable, Pt = ft.splice, Ce = Be ? Be.toStringTag : void 0, tt = Object.getOwnPropertySymbols, ht = dt ? dt.isBuffer : void 0, Mt = (Ve = Object.keys, Ae = Object, function (E) { return Ve(Ae(E)); }), nt = Me(G, "DataView"), Fe = Me(G, "Map"), Ye = Me(G, "Promise"), rt = Me(G, "Set"), Xe = Me(G, "WeakMap"), Ie = Me(Object, "create"), gt = xe(nt), xt = xe(Fe), Lt = xe(Ye), yt = xe(rt), It = xe(Xe), vt = Be ? Be.prototype : void 0, ot = vt ? vt.valueOf : void 0;
                        function je(E) {
                            var M = -1, N = E == null ? 0 : E.length;
                            for (this.clear(); ++M < N;) {
                                var U = E[M];
                                this.set(U[0], U[1]);
                            }
                        }
                        function Oe(E) {
                            var M = -1, N = E == null ? 0 : E.length;
                            for (this.clear(); ++M < N;) {
                                var U = E[M];
                                this.set(U[0], U[1]);
                            }
                        }
                        function Pe(E) {
                            var M = -1, N = E == null ? 0 : E.length;
                            for (this.clear(); ++M < N;) {
                                var U = E[M];
                                this.set(U[0], U[1]);
                            }
                        }
                        function He(E) {
                            var M = -1, N = E == null ? 0 : E.length;
                            for (this.__data__ = new Pe; ++M < N;)
                                this.add(E[M]);
                        }
                        function De(E) { var M = this.__data__ = new Oe(E); this.size = M.size; }
                        function Ue(E, M) {
                            for (var N = E.length; N--;)
                                if (Ot(E[N][0], M))
                                    return N;
                            return -1;
                        }
                        function Se(E) {
                            return E == null ? E === void 0 ? K : S : Ce && Ce in Object(E) ? function (M) {
                                var N = we.call(M, Ce), U = M[Ce];
                                try {
                                    M[Ce] = void 0;
                                    var ie = !0;
                                }
                                catch (ae) { }
                                var re = Ze.call(M);
                                return ie && (N ? M[Ce] = U : delete M[Ce]), re;
                            }(E) : function (M) { return Ze.call(M); }(E);
                        }
                        function it(E) { return Re(E) && Se(E) == o; }
                        function bt(E, M, N, U, ie) {
                            return E === M || (E == null || M == null || !Re(E) && !Re(M) ? E != E && M != M : function (re, ae, de, be, he, fe) {
                                var pe = Ge(re), y = Ge(ae), f = pe ? u : _e(re), D = y ? u : _e(ae), C = (f = f == o ? O : f) == O, _ = (D = D == o ? O : D) == O, w = f == D;
                                if (w && ut(re)) {
                                    if (!ut(ae))
                                        return !1;
                                    pe = !0, C = !1;
                                }
                                if (w && !C)
                                    return fe || (fe = new De), pe || St(re) ? at(re, ae, de, be, he, fe) : function (L, A, J, Z, ee, H, $) {
                                        switch (f) {
                                            case q:
                                                if (L.byteLength != A.byteLength || L.byteOffset != A.byteOffset)
                                                    return !1;
                                                L = L.buffer, A = A.buffer;
                                            case B: return !(L.byteLength != A.byteLength || !H(new et(L), new et(A)));
                                            case v:
                                            case b:
                                            case g: return Ot(+L, +A);
                                            case p: return L.name == A.name && L.message == A.message;
                                            case k:
                                            case P: return L == A + "";
                                            case s: var te = Ne;
                                            case T:
                                                var le = Z & c;
                                                if (te || (te = Le), L.size != A.size && !le)
                                                    return !1;
                                                var ue = $.get(L);
                                                if (ue)
                                                    return ue == A;
                                                Z |= i, $.set(L, A);
                                                var X = at(te(L), te(A), Z, ee, H, $);
                                                return $.delete(L), X;
                                            case R: if (ot)
                                                return ot.call(L) == ot.call(A);
                                        }
                                        return !1;
                                    }(re, ae, 0, de, be, he, fe);
                                if (!(de & c)) {
                                    var x = C && we.call(re, "__wrapped__"), I = _ && we.call(ae, "__wrapped__");
                                    if (x || I) {
                                        var Y = x ? re.value() : re, W = I ? ae.value() : ae;
                                        return fe || (fe = new De), he(Y, W, de, be, fe);
                                    }
                                }
                                return !!w && (fe || (fe = new De), function (L, A, J, Z, ee, H) {
                                    var $ = J & c, te = mt(L), le = te.length;
                                    if (le != mt(A).length && !$)
                                        return !1;
                                    for (var ue = le; ue--;) {
                                        var X = te[ue];
                                        if (!($ ? X in A : we.call(A, X)))
                                            return !1;
                                    }
                                    var ge = H.get(L);
                                    if (ge && H.get(A))
                                        return ge == A;
                                    var ye = !0;
                                    H.set(L, A), H.set(A, L);
                                    for (var Ee = $; ++ue < le;) {
                                        var Dt = L[X = te[ue]], kt = A[X];
                                        if (Z)
                                            var Ft = $ ? Z(kt, Dt, X, A, L, H) : Z(Dt, kt, X, L, A, H);
                                        if (!(Ft === void 0 ? Dt === kt || ee(Dt, kt, J, Z, H) : Ft)) {
                                            ye = !1;
                                            break;
                                        }
                                        Ee || (Ee = X == "constructor");
                                    }
                                    if (ye && !Ee) {
                                        var Ct = L.constructor, _t = A.constructor;
                                        Ct != _t && "constructor" in L && "constructor" in A && !(typeof Ct == "function" && Ct instanceof Ct && typeof _t == "function" && _t instanceof _t) && (ye = !1);
                                    }
                                    return H.delete(L), H.delete(A), ye;
                                }(re, ae, de, be, he, fe));
                            }(E, M, N, U, bt, ie));
                        }
                        function at(E, M, N, U, ie, re) {
                            var ae = N & c, de = E.length, be = M.length;
                            if (de != be && !(ae && be > de))
                                return !1;
                            var he = re.get(E);
                            if (he && re.get(M))
                                return he == M;
                            var fe = -1, pe = !0, y = N & i ? new He : void 0;
                            for (re.set(E, M), re.set(M, E); ++fe < de;) {
                                var f = E[fe], D = M[fe];
                                if (U)
                                    var C = ae ? U(D, f, fe, M, E, re) : U(f, D, fe, E, M, re);
                                if (C !== void 0) {
                                    if (C)
                                        continue;
                                    pe = !1;
                                    break;
                                }
                                if (y) {
                                    if (!Te(M, function (_, w) {
                                        if (x = w, !y.has(x) && (f === _ || ie(f, _, N, U, re)))
                                            return y.push(w);
                                        var x;
                                    })) {
                                        pe = !1;
                                        break;
                                    }
                                }
                                else if (f !== D && !ie(f, D, N, U, re)) {
                                    pe = !1;
                                    break;
                                }
                            }
                            return re.delete(E), re.delete(M), pe;
                        }
                        function mt(E) {
                            return function (M, N, U) {
                                var ie = Nt(M);
                                return Ge(M) ? ie : function (re, ae) {
                                    for (var de = -1, be = ae.length, he = re.length; ++de < be;)
                                        re[he + de] = ae[de];
                                    return re;
                                }(ie, U(M));
                            }(E, 0, wt);
                        }
                        function We(E, M) { var N, U, ie = E.__data__; return ((U = typeof (N = M)) == "string" || U == "number" || U == "symbol" || U == "boolean" ? N !== "__proto__" : N === null) ? ie[typeof M == "string" ? "string" : "hash"] : ie.map; }
                        function Me(E, M) { var N = function (U, ie) { return U == null ? void 0 : U[ie]; }(E, M); return function (U) { return !(!lt(U) || ze && ze in U) && (st(U) ? jt : F).test(xe(U)); }(N) ? N : void 0; }
                        je.prototype.clear = function () { this.__data__ = Ie ? Ie(null) : {}, this.size = 0; }, je.prototype.delete = function (E) { var M = this.has(E) && delete this.__data__[E]; return this.size -= M ? 1 : 0, M; }, je.prototype.get = function (E) {
                            var M = this.__data__;
                            if (Ie) {
                                var N = M[E];
                                return N === "__lodash_hash_undefined__" ? void 0 : N;
                            }
                            return we.call(M, E) ? M[E] : void 0;
                        }, je.prototype.has = function (E) { var M = this.__data__; return Ie ? M[E] !== void 0 : we.call(M, E); }, je.prototype.set = function (E, M) { var N = this.__data__; return this.size += this.has(E) ? 0 : 1, N[E] = Ie && M === void 0 ? "__lodash_hash_undefined__" : M, this; }, Oe.prototype.clear = function () { this.__data__ = [], this.size = 0; }, Oe.prototype.delete = function (E) { var M = this.__data__, N = Ue(M, E); return !(N < 0 || (N == M.length - 1 ? M.pop() : Pt.call(M, N, 1), --this.size, 0)); }, Oe.prototype.get = function (E) { var M = this.__data__, N = Ue(M, E); return N < 0 ? void 0 : M[N][1]; }, Oe.prototype.has = function (E) { return Ue(this.__data__, E) > -1; }, Oe.prototype.set = function (E, M) { var N = this.__data__, U = Ue(N, E); return U < 0 ? (++this.size, N.push([E, M])) : N[U][1] = M, this; }, Pe.prototype.clear = function () { this.size = 0, this.__data__ = { hash: new je, map: new (Fe || Oe), string: new je }; }, Pe.prototype.delete = function (E) { var M = We(this, E).delete(E); return this.size -= M ? 1 : 0, M; }, Pe.prototype.get = function (E) { return We(this, E).get(E); }, Pe.prototype.has = function (E) { return We(this, E).has(E); }, Pe.prototype.set = function (E, M) { var N = We(this, E), U = N.size; return N.set(E, M), this.size += N.size == U ? 0 : 1, this; }, He.prototype.add = He.prototype.push = function (E) { return this.__data__.set(E, "__lodash_hash_undefined__"), this; }, He.prototype.has = function (E) { return this.__data__.has(E); }, De.prototype.clear = function () { this.__data__ = new Oe, this.size = 0; }, De.prototype.delete = function (E) { var M = this.__data__, N = M.delete(E); return this.size = M.size, N; }, De.prototype.get = function (E) { return this.__data__.get(E); }, De.prototype.has = function (E) { return this.__data__.has(E); }, De.prototype.set = function (E, M) {
                            var N = this.__data__;
                            if (N instanceof Oe) {
                                var U = N.__data__;
                                if (!Fe || U.length < 199)
                                    return U.push([E, M]), this.size = ++N.size, this;
                                N = this.__data__ = new Pe(U);
                            }
                            return N.set(E, M), this.size = N.size, this;
                        };
                        var wt = tt ? function (E) {
                            return E == null ? [] : (E = Object(E), function (M, N) {
                                for (var U = -1, ie = M == null ? 0 : M.length, re = 0, ae = []; ++U < ie;) {
                                    var de = M[U];
                                    be = de, pt.call(E, be) && (ae[re++] = de);
                                }
                                var be;
                                return ae;
                            }(tt(E)));
                        } : function () { return []; }, _e = Se;
                        function Rt(E, M) { return !!(M = M ?? t) && (typeof E == "number" || Q.test(E)) && E > -1 && E % 1 == 0 && E < M; }
                        function xe(E) {
                            if (E != null) {
                                try {
                                    return Je.call(E);
                                }
                                catch (M) { }
                                try {
                                    return E + "";
                                }
                                catch (M) { }
                            }
                            return "";
                        }
                        function Ot(E, M) { return E === M || E != E && M != M; }
                        (nt && _e(new nt(new ArrayBuffer(1))) != q || Fe && _e(new Fe) != s || Ye && _e(Ye.resolve()) != "[object Promise]" || rt && _e(new rt) != T || Xe && _e(new Xe) != "[object WeakMap]") && (_e = function (E) {
                            var M = Se(E), N = M == O ? E.constructor : void 0, U = N ? xe(N) : "";
                            if (U)
                                switch (U) {
                                    case gt: return q;
                                    case xt: return s;
                                    case Lt: return "[object Promise]";
                                    case yt: return T;
                                    case It: return "[object WeakMap]";
                                }
                            return M;
                        });
                        var qt = it(function () { return arguments; }()) ? it : function (E) { return Re(E) && we.call(E, "callee") && !pt.call(E, "callee"); }, Ge = Array.isArray, ut = ht || function () { return !1; };
                        function st(E) {
                            if (!lt(E))
                                return !1;
                            var M = Se(E);
                            return M == l || M == h || M == d || M == j;
                        }
                        function ct(E) { return typeof E == "number" && E > -1 && E % 1 == 0 && E <= t; }
                        function lt(E) { var M = typeof E; return E != null && (M == "object" || M == "function"); }
                        function Re(E) { return E != null && typeof E == "object"; }
                        var St = qe ? function (E) { return function (M) { return E(M); }; }(qe) : function (E) { return Re(E) && ct(E.length) && !!z[Se(E)]; };
                        function Nt(E) {
                            return (M = E) != null && ct(M.length) && !st(M) ? function (N, U) {
                                var ie = Ge(N), re = !ie && qt(N), ae = !ie && !re && ut(N), de = !ie && !re && !ae && St(N), be = ie || re || ae || de, he = be ? function (y, f) {
                                    for (var D = -1, C = Array(y); ++D < y;)
                                        C[D] = f(D);
                                    return C;
                                }(N.length, String) : [], fe = he.length;
                                for (var pe in N)
                                    !U && !we.call(N, pe) || be && (pe == "length" || ae && (pe == "offset" || pe == "parent") || de && (pe == "buffer" || pe == "byteLength" || pe == "byteOffset") || Rt(pe, fe)) || he.push(pe);
                                return he;
                            }(E) : function (N) {
                                if (ie = (U = N) && U.constructor, U !== (typeof ie == "function" && ie.prototype || Ke))
                                    return Mt(N);
                                var U, ie, re = [];
                                for (var ae in Object(N))
                                    we.call(N, ae) && ae != "constructor" && re.push(ae);
                                return re;
                            }(E);
                            var M;
                        }
                        e.exports = function (E, M) { return bt(E, M); };
                    }).call(this, n(12), n(57)(m));
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r, e) { return { _isMBTransition: !0, event: r, check: e }; };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.createTransition = a.MouseTransition = a.TouchTransition = a.HTML5DragTransition = void 0;
                    var r = i(n(56)), e = n(54), c = i(n(24));
                    function i(t) { return t && t.__esModule ? t : { default: t }; }
                    a.HTML5DragTransition = e.HTML5DragTransition, a.TouchTransition = e.TouchTransition, a.MouseTransition = e.MouseTransition, a.createTransition = c.default, a.default = function (t) { return t.getMonitor ? new r.default(t) : function (o) { return new r.default(o, t); }; };
                }, function (m, a) { m.exports = function (n, r) { return n === r || n != n && r != r; }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(73);
                    a.isFirefox = r(function () { return /firefox/i.test(navigator.userAgent); }), a.isSafari = r(function () { return Boolean(window.safari); });
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (i) { return typeof i; } : function (i) { return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i; };
                    a.default = function i(t, o) { return typeof t == "string" || (t === void 0 ? "undefined" : r(t)) === "symbol" || o && (0, c.default)(t) && t.every(function (u) { return i(u, !1); }); };
                    var e, c = (e = n(4)) && e.__esModule ? e : { default: e };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (c, i) { return i === c || i !== null && c !== null && (0, e.default)(i, c); };
                    var r, e = (r = n(15)) && r.__esModule ? r : { default: r };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (i) {
                        var t = {};
                        return Object.keys(i).forEach(function (o) {
                            var u, d = (u = i[o], function () {
                                var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                if ((0, e.isValidElement)(v)) {
                                    var p = v;
                                    (function (h) {
                                        if (typeof h.type != "string") {
                                            var s = h.type.displayName || h.type.name || "the component";
                                            throw new Error("Only native element nodes can now be passed to React DnD connectors.You can either wrap " + s + " into a <div>, or turn it into a drag source or a drop target itself.");
                                        }
                                    })(p);
                                    var l = b ? function (h) { return u(h, b); } : u;
                                    return (0, c.default)(p, l);
                                }
                                u(v, b);
                            });
                            t[o] = function () { return d; };
                        }), t;
                    };
                    var r, e = n(0), c = (r = n(82)) && r.__esModule ? r : { default: r };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = Object.assign || function (s) {
                        for (var g = 1; g < arguments.length; g++) {
                            var S = arguments[g];
                            for (var O in S)
                                Object.prototype.hasOwnProperty.call(S, O) && (s[O] = S[O]);
                        }
                        return s;
                    }, e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) { return typeof s; } : function (s) { return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s; }, c = function () {
                        function s(g, S) {
                            for (var O = 0; O < S.length; O++) {
                                var j = S[O];
                                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                            }
                        }
                        return function (g, S, O) { return S && s(g.prototype, S), O && s(g, O), g; };
                    }();
                    a.default = function (s) {
                        var g, S, O = s.DecoratedComponent, j = s.createHandler, k = s.createMonitor, T = s.createConnector, P = s.registerHandler, R = s.containerDisplayName, K = s.getType, B = s.collect, q = s.options.arePropsEqual, F = q === void 0 ? p.default : q, Q = O.displayName || O.name || "Component", z = (S = g = function (V) {
                            function ne(G, se) {
                                (function (me, ve) {
                                    if (!(me instanceof ne))
                                        throw new TypeError("Cannot call a class as a function");
                                })(this);
                                var oe = function (me, ve) {
                                    if (!me)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !ve || typeof ve != "object" && typeof ve != "function" ? me : ve;
                                }(this, (ne.__proto__ || Object.getPrototypeOf(ne)).call(this, G, se));
                                return oe.handleChange = oe.handleChange.bind(oe), oe.handleChildRef = oe.handleChildRef.bind(oe), (0, d.default)(e(oe.context.dragDropManager) === "object", "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", Q, Q), oe.manager = oe.context.dragDropManager, oe.handlerMonitor = k(oe.manager), oe.handlerConnector = T(oe.manager.getBackend()), oe.handler = j(oe.handlerMonitor), oe.disposable = new u.SerialDisposable, oe.receiveProps(G), oe.state = oe.getCurrentState(), oe.dispose(), oe;
                            }
                            return function (G, se) {
                                if (typeof se != "function" && se !== null)
                                    throw new TypeError("Super expression must either be null or a function, not " + typeof se);
                                G.prototype = Object.create(se && se.prototype, { constructor: { value: G, enumerable: !1, writable: !0, configurable: !0 } }), se && (Object.setPrototypeOf ? Object.setPrototypeOf(G, se) : G.__proto__ = se);
                            }(ne, i.Component), c(ne, [{ key: "getHandlerId", value: function () { return this.handlerId; } }, { key: "getDecoratedComponentInstance", value: function () { return this.decoratedComponentInstance; } }, { key: "shouldComponentUpdate", value: function (G, se) { return !F(G, this.props) || !(0, b.default)(se, this.state); } }]), c(ne, [{ key: "componentDidMount", value: function () { this.isCurrentlyMounted = !0, this.disposable = new u.SerialDisposable, this.currentType = null, this.receiveProps(this.props), this.handleChange(); } }, { key: "componentWillReceiveProps", value: function (G) { F(G, this.props) || (this.receiveProps(G), this.handleChange()); } }, { key: "componentWillUnmount", value: function () { this.dispose(), this.isCurrentlyMounted = !1; } }, { key: "receiveProps", value: function (G) { this.handler.receiveProps(G), this.receiveType(K(G)); } }, { key: "receiveType", value: function (G) {
                                        if (G !== this.currentType) {
                                            this.currentType = G;
                                            var se = P(G, this.handler, this.manager), oe = se.handlerId, me = se.unregister;
                                            this.handlerId = oe, this.handlerMonitor.receiveHandlerId(oe), this.handlerConnector.receiveHandlerId(oe);
                                            var ve = this.manager.getMonitor().subscribeToStateChange(this.handleChange, { handlerIds: [oe] });
                                            this.disposable.setDisposable(new u.CompositeDisposable(new u.Disposable(ve), new u.Disposable(me)));
                                        }
                                    } }, { key: "handleChange", value: function () {
                                        if (this.isCurrentlyMounted) {
                                            var G = this.getCurrentState();
                                            (0, b.default)(G, this.state) || this.setState(G);
                                        }
                                    } }, { key: "dispose", value: function () { this.disposable.dispose(), this.handlerConnector.receiveHandlerId(null); } }, { key: "handleChildRef", value: function (G) { this.decoratedComponentInstance = G, this.handler.receiveComponent(G); } }, { key: "getCurrentState", value: function () { return B(this.handlerConnector.hooks, this.handlerMonitor); } }, { key: "render", value: function () { return t.default.createElement(O, r({}, this.props, this.state, { ref: h(O) ? this.handleChildRef : null })); } }]), ne;
                        }(), g.DecoratedComponent = O, g.displayName = R + "(" + Q + ")", g.contextTypes = { dragDropManager: o.default.object.isRequired }, S);
                        return (0, v.default)(z, O);
                    };
                    var i = n(0), t = l(i), o = l(n(1)), u = n(90), d = (l(n(5)), l(n(2))), v = l(n(16)), b = l(n(15)), p = l(n(32));
                    function l(s) { return s && s.__esModule ? s : { default: s }; }
                    var h = function (s) { return Boolean(s && s.prototype && typeof s.prototype.render == "function"); };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; };
                    a.default = function (e, c) {
                        if (e === c)
                            return !0;
                        if ((e === void 0 ? "undefined" : r(e)) !== "object" || e === null || (c === void 0 ? "undefined" : r(c)) !== "object" || c === null)
                            return !1;
                        var i = Object.keys(e), t = Object.keys(c);
                        if (i.length !== t.length)
                            return !1;
                        for (var o = Object.prototype.hasOwnProperty, u = 0; u < i.length; u += 1) {
                            if (!o.call(c, i[u]))
                                return !1;
                            var d = e[i[u]], v = c[i[u]];
                            if (d !== v || (d === void 0 ? "undefined" : r(d)) === "object" || (v === void 0 ? "undefined" : r(v)) === "object")
                                return !1;
                        }
                        return !0;
                    };
                }, function (m, a, n) {
                    var r = n(21), e = n(20), c = n(19), i = n(17), t = n(108), o = n(107);
                    m.exports = function (u, d, v) {
                        var b = -1, p = e, l = u.length, h = !0, s = [], g = s;
                        if (v)
                            h = !1, p = c;
                        else if (l >= 200) {
                            var S = d ? null : t(u);
                            if (S)
                                return o(S);
                            h = !1, p = i, g = new r;
                        }
                        else
                            g = d ? [] : s;
                        e: for (; ++b < l;) {
                            var O = u[b], j = d ? d(O) : O;
                            if (O = v || O !== 0 ? O : 0, h && j == j) {
                                for (var k = g.length; k--;)
                                    if (g[k] === j)
                                        continue e;
                                d && g.push(j), s.push(O);
                            }
                            else
                                p(g, j, v) || (g !== s && g.push(j), s.push(O));
                        }
                        return s;
                    };
                }, function (m, a, n) {
                    var r = n(114), e = n(113);
                    m.exports = function c(i, t, o, u, d) {
                        var v = -1, b = i.length;
                        for (o || (o = e), d || (d = []); ++v < b;) {
                            var p = i[v];
                            t > 0 && o(p) ? t > 1 ? c(p, t - 1, o, u, d) : r(d, p) : u || (d[d.length] = p);
                        }
                        return d;
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () {
                        arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                        var d = arguments[1], v = arguments[2];
                        switch (d.type) {
                            case c.HOVER: break;
                            case i.ADD_SOURCE:
                            case i.ADD_TARGET:
                            case i.REMOVE_TARGET:
                            case i.REMOVE_SOURCE: return o;
                            case c.BEGIN_DRAG:
                            case c.PUBLISH_DRAG_SOURCE:
                            case c.END_DRAG:
                            case c.DROP:
                            default: return u;
                        }
                        var b = d.targetIds, p = v.targetIds, l = (0, r.default)(b, p), h = !1;
                        if (l.length === 0) {
                            for (var s = 0; s < b.length; s++)
                                if (b[s] !== p[s]) {
                                    h = !0;
                                    break;
                                }
                        }
                        else
                            h = !0;
                        if (!h)
                            return o;
                        var g = p[p.length - 1], S = b[b.length - 1];
                        return g !== S && (g && l.push(g), S && l.push(S)), l;
                    }, a.areDirty = function (d, v) { return d !== o && (d === u || v === void 0 || (0, e.default)(v, d).length > 0); };
                    var r = t(n(117)), e = t(n(106)), c = n(11), i = n(9);
                    function t(d) { return d && d.__esModule ? d : { default: d }; }
                    var o = [], u = [];
                }, function (m, a) { m.exports = function (n) { return function (r) { return n(r); }; }; }, function (m, a) {
                    m.exports = function (n, r, e) {
                        for (var c = e - 1, i = n.length; ++c < i;)
                            if (n[c] === r)
                                return c;
                        return -1;
                    };
                }, function (m, a, n) {
                    var r = n(21), e = n(20), c = n(19), i = n(18), t = n(36), o = n(17);
                    m.exports = function (u, d, v, b) {
                        var p = -1, l = e, h = !0, s = u.length, g = [], S = d.length;
                        if (!s)
                            return g;
                        v && (d = i(d, t(v))), b ? (l = c, h = !1) : d.length >= 200 && (l = o, h = !1, d = new r(d));
                        e: for (; ++p < s;) {
                            var O = u[p], j = v == null ? O : v(O);
                            if (O = b || O !== 0 ? O : 0, h && j == j) {
                                for (var k = S; k--;)
                                    if (d[k] === j)
                                        continue e;
                                g.push(O);
                            }
                            else
                                l(d, j, b) || g.push(O);
                        }
                        return g;
                    };
                }, function (m, a, n) { var r = n(38), e = n(6), c = n(10), i = e(function (t, o) { return c(t) ? r(t, o) : []; }); m.exports = i; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (c, i) { return (0, e.default)(c) ? c.some(function (t) { return t === i; }) : c === i; };
                    var r, e = (r = n(4)) && r.__esModule ? r : { default: r };
                }, function (m, a) { m.exports = function (n) { var r = typeof n; return n != null && (r == "object" || r == "function"); }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = Object.assign || function (i) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var u in o)
                                Object.prototype.hasOwnProperty.call(o, u) && (i[u] = o[u]);
                        }
                        return i;
                    };
                    a.default = function () {
                        var i, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, u = arguments[1];
                        switch (u.type) {
                            case e.BEGIN_DRAG: return { initialSourceClientOffset: u.sourceClientOffset, initialClientOffset: u.clientOffset, clientOffset: u.clientOffset };
                            case e.HOVER: return i = o.clientOffset, t = u.clientOffset, i === t || i && t && i.x === t.x && i.y === t.y ? o : r({}, o, { clientOffset: u.clientOffset });
                            case e.END_DRAG:
                            case e.DROP: return c;
                            default: return o;
                        }
                    }, a.getSourceClientOffset = function (i) { var t = i.clientOffset, o = i.initialClientOffset, u = i.initialSourceClientOffset; return t && o && u ? { x: t.x + u.x - o.x, y: t.y + u.y - o.y } : null; }, a.getDifferenceFromInitialOffset = function (i) { var t = i.clientOffset, o = i.initialClientOffset; return t && o ? { x: t.x - o.x, y: t.y - o.y } : null; };
                    var e = n(11), c = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null };
                }, function (m, a) { m.exports = function (n) { return n != null && typeof n == "object"; }; }, function (m, a) { var n = Object.prototype.toString; m.exports = function (r) { return n.call(r); }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.unpackBackendForEs5Users = a.createChildContext = a.CHILD_CONTEXT_TYPES = void 0;
                    var r = Object.assign || function (g) {
                        for (var S = 1; S < arguments.length; S++) {
                            var O = arguments[S];
                            for (var j in O)
                                Object.prototype.hasOwnProperty.call(O, j) && (g[j] = O[j]);
                        }
                        return g;
                    }, e = function () {
                        function g(S, O) {
                            for (var j = 0; j < O.length; j++) {
                                var k = O[j];
                                k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(S, k.key, k);
                            }
                        }
                        return function (S, O, j) { return O && g(S.prototype, O), j && g(S, j), S; };
                    }(), c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (g) { return typeof g; } : function (g) { return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g; };
                    a.default = function (g) {
                        b.default.apply(void 0, ["DragDropContext", "backend"].concat(Array.prototype.slice.call(arguments)));
                        var S = s(g), O = h(S);
                        return function (j) {
                            var k, T, P = j.displayName || j.name || "Component", R = (T = k = function (K) {
                                function B() {
                                    return function (q, F) {
                                        if (!(q instanceof B))
                                            throw new TypeError("Cannot call a class as a function");
                                    }(this), function (q, F) {
                                        if (!q)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !F || typeof F != "object" && typeof F != "function" ? q : F;
                                    }(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
                                }
                                return function (q, F) {
                                    if (typeof F != "function" && F !== null)
                                        throw new TypeError("Super expression must either be null or a function, not " + typeof F);
                                    q.prototype = Object.create(F && F.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), F && (Object.setPrototypeOf ? Object.setPrototypeOf(q, F) : q.__proto__ = F);
                                }(B, i.Component), e(B, [{ key: "getDecoratedComponentInstance", value: function () { return (0, d.default)(this.child, "In order to access an instance of the decorated component it can not be a stateless component."), this.child; } }, { key: "getManager", value: function () { return O.dragDropManager; } }, { key: "getChildContext", value: function () { return O; } }, { key: "render", value: function () { var q = this; return t.default.createElement(j, r({}, this.props, { ref: function (F) { q.child = F; } })); } }]), B;
                            }(), k.DecoratedComponent = j, k.displayName = "DragDropContext(" + P + ")", k.childContextTypes = l, T);
                            return (0, v.default)(R, j);
                        };
                    };
                    var i = n(0), t = p(i), o = p(n(1)), u = n(134), d = p(n(2)), v = p(n(16)), b = p(n(8));
                    function p(g) { return g && g.__esModule ? g : { default: g }; }
                    var l = a.CHILD_CONTEXT_TYPES = { dragDropManager: o.default.object.isRequired }, h = a.createChildContext = function (g, S) { return { dragDropManager: new u.DragDropManager(g, S) }; }, s = a.unpackBackendForEs5Users = function (g) { var S = g; return (S === void 0 ? "undefined" : c(S)) === "object" && typeof S.default == "function" && (S = S.default), (0, d.default)(typeof S == "function", "Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html"), S; };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = i(n(22)), e = i(n(51)), c = n(25);
                    function i(t) { return t && t.__esModule ? t : { default: t }; }
                    a.default = { backends: [{ backend: r.default, transition: c.MouseTransition }, { backend: (0, e.default)({ enableMouseEvents: !0 }), preview: !0, transition: c.TouchTransition }] };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.createTransition = a.MouseTransition = a.TouchTransition = a.HTML5DragTransition = a.Preview = void 0;
                    var r = n(25), e = i(r), c = i(n(53));
                    function i(t) { return t && t.__esModule ? t : { default: t }; }
                    a.Preview = c.default, a.HTML5DragTransition = r.HTML5DragTransition, a.TouchTransition = r.TouchTransition, a.MouseTransition = r.MouseTransition, a.createTransition = r.createTransition, a.default = e.default;
                }, function (m, a, n) {
                    var r, e;
                    e = function (c) {
                        var i = ["N", "E", "A", "D"];
                        function t(k, T) { k.super_ = T, k.prototype = Object.create(T.prototype, { constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 } }); }
                        function o(k, T) { Object.defineProperty(this, "kind", { value: k, enumerable: !0 }), T && T.length && Object.defineProperty(this, "path", { value: T, enumerable: !0 }); }
                        function u(k, T, P) { u.super_.call(this, "E", k), Object.defineProperty(this, "lhs", { value: T, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: P, enumerable: !0 }); }
                        function d(k, T) { d.super_.call(this, "N", k), Object.defineProperty(this, "rhs", { value: T, enumerable: !0 }); }
                        function v(k, T) { v.super_.call(this, "D", k), Object.defineProperty(this, "lhs", { value: T, enumerable: !0 }); }
                        function b(k, T, P) { b.super_.call(this, "A", k), Object.defineProperty(this, "index", { value: T, enumerable: !0 }), Object.defineProperty(this, "item", { value: P, enumerable: !0 }); }
                        function p(k, T, P) { var R = k.slice((P || T) + 1 || k.length); return k.length = T < 0 ? k.length + T : T, k.push.apply(k, R), k; }
                        function l(k) { var T = typeof k; return T !== "object" ? T : k === Math ? "math" : k === null ? "null" : Array.isArray(k) ? "array" : Object.prototype.toString.call(k) === "[object Date]" ? "date" : typeof k.toString == "function" && /^\/.*\//.test(k.toString()) ? "regexp" : "object"; }
                        function h(k) {
                            var T = 0;
                            if (k.length === 0)
                                return T;
                            for (var P = 0; P < k.length; P++)
                                T = (T << 5) - T + k.charCodeAt(P), T &= T;
                            return T;
                        }
                        function s(k) {
                            var T = 0, P = l(k);
                            if (P === "array")
                                return k.forEach(function (B) { T += s(B); }), T + h("[type: array, hash: " + T + "]");
                            if (P === "object") {
                                for (var R in k)
                                    if (k.hasOwnProperty(R)) {
                                        var K = "[ type: object, key: " + R + ", value hash: " + s(k[R]) + "]";
                                        T += h(K);
                                    }
                                return T;
                            }
                            return T + h("[ type: " + P + " ; value: " + k + "]");
                        }
                        function g(k, T, P, R, K, B, q, F) {
                            P = P || [], K = K || [], q = q || [];
                            var Q = K.slice(0);
                            if (B != null) {
                                if (R) {
                                    if (typeof R == "function" && R(Q, B))
                                        return;
                                    if (typeof R == "object") {
                                        if (R.prefilter && R.prefilter(Q, B))
                                            return;
                                        if (R.normalize) {
                                            var z = R.normalize(Q, B, k, T);
                                            z && (k = z[0], T = z[1]);
                                        }
                                    }
                                }
                                Q.push(B);
                            }
                            l(k) === "regexp" && l(T) === "regexp" && (k = k.toString(), T = T.toString());
                            var V, ne, G, se, oe = typeof k, me = typeof T, ve = oe !== "undefined" || q && q.length > 0 && q[q.length - 1].lhs && Object.getOwnPropertyDescriptor(q[q.length - 1].lhs, B), ke = me !== "undefined" || q && q.length > 0 && q[q.length - 1].rhs && Object.getOwnPropertyDescriptor(q[q.length - 1].rhs, B);
                            if (!ve && ke)
                                P.push(new d(Q, T));
                            else if (!ke && ve)
                                P.push(new v(Q, k));
                            else if (l(k) !== l(T))
                                P.push(new u(Q, k, T));
                            else if (l(k) === "date" && k - T != 0)
                                P.push(new u(Q, k, T));
                            else if (oe === "object" && k !== null && T !== null) {
                                for (V = q.length - 1; V > -1; --V)
                                    if (q[V].lhs === k) {
                                        se = !0;
                                        break;
                                    }
                                if (se)
                                    k !== T && P.push(new u(Q, k, T));
                                else {
                                    if (q.push({ lhs: k, rhs: T }), Array.isArray(k)) {
                                        for (F && (k.sort(function (Ne, Le) { return s(Ne) - s(Le); }), T.sort(function (Ne, Le) { return s(Ne) - s(Le); })), V = T.length - 1, ne = k.length - 1; V > ne;)
                                            P.push(new b(Q, V, new d(void 0, T[V--])));
                                        for (; ne > V;)
                                            P.push(new b(Q, ne, new v(void 0, k[ne--])));
                                        for (; V >= 0; --V)
                                            g(k[V], T[V], P, R, Q, V, q, F);
                                    }
                                    else {
                                        var qe = Object.keys(k), Te = Object.keys(T);
                                        for (V = 0; V < qe.length; ++V)
                                            G = qe[V], (se = Te.indexOf(G)) >= 0 ? (g(k[G], T[G], P, R, Q, G, q, F), Te[se] = null) : g(k[G], void 0, P, R, Q, G, q, F);
                                        for (V = 0; V < Te.length; ++V)
                                            (G = Te[V]) && g(void 0, T[G], P, R, Q, G, q, F);
                                    }
                                    q.length = q.length - 1;
                                }
                            }
                            else
                                k !== T && (oe === "number" && isNaN(k) && isNaN(T) || P.push(new u(Q, k, T)));
                        }
                        function S(k, T, P, R, K) {
                            var B = [];
                            if (g(k, T, B, R, null, null, null, K), P)
                                for (var q = 0; q < B.length; ++q)
                                    P(B[q]);
                            return B;
                        }
                        function O(k, T, P, R) { var K = S(k, T, R ? function (B) { B && R.push(B); } : void 0, P); return R || (K.length ? K : void 0); }
                        function j(k, T, P) {
                            if (P === void 0 && T && ~i.indexOf(T.kind) && (P = T), k && P && P.kind) {
                                for (var R = k, K = -1, B = P.path ? P.path.length - 1 : 0; ++K < B;)
                                    R[P.path[K]] === void 0 && (R[P.path[K]] = P.path[K + 1] !== void 0 && typeof P.path[K + 1] == "number" ? [] : {}), R = R[P.path[K]];
                                switch (P.kind) {
                                    case "A":
                                        P.path && R[P.path[K]] === void 0 && (R[P.path[K]] = []), function q(F, Q, z) {
                                            if (z.path && z.path.length) {
                                                var V, ne = F[Q], G = z.path.length - 1;
                                                for (V = 0; V < G; V++)
                                                    ne = ne[z.path[V]];
                                                switch (z.kind) {
                                                    case "A":
                                                        q(ne[z.path[V]], z.index, z.item);
                                                        break;
                                                    case "D":
                                                        delete ne[z.path[V]];
                                                        break;
                                                    case "E":
                                                    case "N": ne[z.path[V]] = z.rhs;
                                                }
                                            }
                                            else
                                                switch (z.kind) {
                                                    case "A":
                                                        q(F[Q], z.index, z.item);
                                                        break;
                                                    case "D":
                                                        F = p(F, Q);
                                                        break;
                                                    case "E":
                                                    case "N": F[Q] = z.rhs;
                                                }
                                            return F;
                                        }(P.path ? R[P.path[K]] : R, P.index, P.item);
                                        break;
                                    case "D":
                                        delete R[P.path[K]];
                                        break;
                                    case "E":
                                    case "N": R[P.path[K]] = P.rhs;
                                }
                            }
                        }
                        return t(u, o), t(d, o), t(v, o), t(b, o), Object.defineProperties(O, { diff: { value: O, enumerable: !0 }, orderIndependentDiff: { value: function (k, T, P, R) { var K = S(k, T, R ? function (B) { B && R.push(B); } : void 0, P, !0); return R || (K.length ? K : void 0); }, enumerable: !0 }, observableDiff: { value: S, enumerable: !0 }, orderIndependentObservableDiff: { value: function (k, T, P, R, K, B, q) { return g(k, T, P, R, K, B, q, !0); }, enumerable: !0 }, orderIndepHash: { value: s, enumerable: !0 }, applyDiff: { value: function (k, T, P) { k && T && S(k, T, function (R) { P && !P(k, T, R) || j(k, T, R); }); }, enumerable: !0 }, applyChange: { value: j, enumerable: !0 }, revertChange: { value: function (k, T, P) {
                                    if (k && T && P && P.kind) {
                                        var R, K, B = k;
                                        for (K = P.path.length - 1, R = 0; R < K; R++)
                                            B[P.path[R]] === void 0 && (B[P.path[R]] = {}), B = B[P.path[R]];
                                        switch (P.kind) {
                                            case "A":
                                                (function q(F, Q, z) {
                                                    if (z.path && z.path.length) {
                                                        var V, ne = F[Q], G = z.path.length - 1;
                                                        for (V = 0; V < G; V++)
                                                            ne = ne[z.path[V]];
                                                        switch (z.kind) {
                                                            case "A":
                                                                q(ne[z.path[V]], z.index, z.item);
                                                                break;
                                                            case "D":
                                                            case "E":
                                                                ne[z.path[V]] = z.lhs;
                                                                break;
                                                            case "N": delete ne[z.path[V]];
                                                        }
                                                    }
                                                    else
                                                        switch (z.kind) {
                                                            case "A":
                                                                q(F[Q], z.index, z.item);
                                                                break;
                                                            case "D":
                                                            case "E":
                                                                F[Q] = z.lhs;
                                                                break;
                                                            case "N": F = p(F, Q);
                                                        }
                                                    return F;
                                                })(B[P.path[R]], P.index, P.item);
                                                break;
                                            case "D":
                                            case "E":
                                                B[P.path[R]] = P.lhs;
                                                break;
                                            case "N": delete B[P.path[R]];
                                        }
                                    }
                                }, enumerable: !0 }, isConflict: { value: function () { return typeof $conflict != "undefined"; }, enumerable: !0 } }), O.DeepDiff = O, c.DeepDiff = O, O;
                    }(this), (r = function () { return e; }.call(a, n, a, m)) === void 0 || (m.exports = r);
                }, function (m, a, n) {
                    "use strict";
                    function r(e) { var c, i = e.Symbol; return typeof i == "function" ? i.observable ? c = i.observable : (c = i("observable"), i.observable = c) : c = "@@observable", c; }
                    n.d(a, "a", function () { return r; });
                }, function (m, a, n) {
                    "use strict";
                    n.r(a);
                    var r = n(0), e = n.n(r), c = n(3), i = n(1), t = n.n(i), o = n(22), u = n(48), d = n.n(u);
                    function v(y) { return (v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    var b = "abcdefgh".split("");
                    function p(y) { return typeof y == "string"; }
                    function l(y) {
                        if (!h(y))
                            return !1;
                        for (var f = (y = y.replace(/ .+$/, "")).split("/"), D = {}, C = 8, _ = 0; _ < 8; _++) {
                            for (var w = f[_].split(""), x = 0, I = 0; I < w.length; I++)
                                w[I].search(/[1-8]/) !== -1 ? x += parseInt(w[I], 10) : (D[b[x] + C] = (Y = w[I]).toLowerCase() === Y ? "b" + Y.toUpperCase() : "w" + Y.toUpperCase(), x += 1);
                            C -= 1;
                        }
                        var Y;
                        return D;
                    }
                    function h(y) {
                        if (!p(y))
                            return !1;
                        var f = (y = function (C) { return C.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11"); }(y = y.replace(/ .+$/, ""))).split("/");
                        if (f.length !== 8)
                            return !1;
                        for (var D = 0; D < 8; D++)
                            if (f[D].length !== 8 || f[D].search(/[^kqrnbpKQRNBP1]/) !== -1)
                                return !1;
                        return !0;
                    }
                    function s(y) { return (s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function g(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function S(y) { return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function O(y, f) { return (O = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    function j(y, f, D) { return f in y ? Object.defineProperty(y, f, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : y[f] = D, y; }
                    var k = function (y) {
                        var f = y.dropTarget, D = y.square, C = y.targetSquare, _ = y.waitForTransition, w = y.getSquareCoordinates, x = y.piece, I = y.width, Y = y.pieces, W = y.transitionDuration, L = y.isDragging, A = y.sourceSquare, J = y.onPieceClick, Z = y.allowDrag, ee = y.customDragLayerStyles, H = ee === void 0 ? {} : ee, $ = y.phantomPieceStyles, te = $ === void 0 ? {} : $, le = { squareWidth: I / 8, isDragging: L, droppedPiece: f && f.piece, targetSquare: f && f.target, sourceSquare: f && f.source };
                        return e.a.createElement("div", { "data-testid": "".concat(x, "-").concat(D), onClick: function () { return J(x); }, style: function (ue) {
                                for (var X = 1; X < arguments.length; X++) {
                                    var ge = arguments[X] != null ? arguments[X] : {}, ye = Object.keys(ge);
                                    typeof Object.getOwnPropertySymbols == "function" && (ye = ye.concat(Object.getOwnPropertySymbols(ge).filter(function (Ee) { return Object.getOwnPropertyDescriptor(ge, Ee).enumerable; }))), ye.forEach(function (Ee) { j(ue, Ee, ge[Ee]); });
                                }
                                return ue;
                            }({}, K({ isDragging: L, transitionDuration: W, waitForTransition: _, square: D, targetSquare: C, sourceSquare: A, getSquareCoordinates: w, getTranslation: R, piece: x, allowDrag: Z }), te, H) }, typeof Y[x] == "function" ? Y[x](le) : e.a.createElement("svg", { viewBox: "1 1 43 43", width: I / 8, height: I / 8 }, e.a.createElement("g", null, Y[x])));
                    }, T = function (y) {
                        function f() {
                            return function (x, I) {
                                if (!(x instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), _ = this, !(w = S(f).apply(this, arguments)) || s(w) !== "object" && typeof w != "function" ? function (x) {
                                if (x === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return x;
                            }(_) : w;
                            var _, w;
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && O(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "shouldComponentUpdate", value: function (_) { return !(_.dropTarget === null && !_.isDragging && !this.props.isDragging && this.props.sourceSquare === _.sourceSquare && this.props.waitForTransition === _.waitForTransition && this.props.width === _.width); } }, { key: "componentDidMount", value: function () { window.addEventListener("touchstart", this.props.setTouchState), this.props.connectDragPreview(Object(o.getEmptyImage)(), { captureDraggingState: !0 }); } }, { key: "componentWillUnmount", value: function () { window.removeEventListener("touchstart", this.props.setTouchState); } }, { key: "render", value: function () { var _ = this.props, w = _.square, x = _.targetSquare, I = _.waitForTransition, Y = _.getSquareCoordinates, W = _.piece, L = _.width, A = _.pieces, J = _.transitionDuration, Z = _.isDragging, ee = _.connectDragSource, H = _.sourceSquare, $ = _.dropTarget, te = _.onPieceClick, le = _.allowDrag; return ee(k({ square: w, targetSquare: x, waitForTransition: I, getSquareCoordinates: Y, piece: W, width: L, pieces: A, transitionDuration: J, isDragging: Z, sourceSquare: H, dropTarget: $, onPieceClick: te, allowDrag: le })); } }]) && g(D.prototype, C), f;
                    }();
                    T.propTypes = { piece: t.a.string, square: t.a.string, id: t.a.oneOfType([t.a.string, t.a.number]), width: t.a.number, connectDragSource: t.a.func, isDragging: t.a.bool, connectDragPreview: t.a.func, dropOffBoard: t.a.string, getSquareCoordinates: t.a.func, onDrop: t.a.oneOfType([t.a.bool, t.a.func]), transitionDuration: t.a.number, pieces: t.a.object, sourceSquare: t.a.string, targetSquare: t.a.string, waitForTransition: t.a.bool, setTouchState: t.a.func, onPieceClick: t.a.func, wasSquareClicked: t.a.func, allowDrag: t.a.func };
                    var P = Object(c.DragSource)("piece", { canDrag: function (y) { return y.draggable && y.allowDrag({ piece: y.piece, sourceSquare: y.square }); }, beginDrag: function (y) { return { piece: y.piece, source: y.square, board: y.id }; }, endDrag: function (y, f) {
                            var D = y.setPosition, C = y.dropOffBoard, _ = y.piece, w = y.square, x = y.onDrop, I = y.wasManuallyDropped, Y = y.wasSquareClicked, W = f.getDropResult(), L = f.didDrop();
                            if (!L && C === "trash")
                                return D({ sourceSquare: w, piece: _ });
                            if (f.getItem().board === (W && W.board) && L) {
                                if (x.length)
                                    return I(!0), w !== "spare" && Y(!1), x({ sourceSquare: w, targetSquare: W.target, piece: _ });
                                D({ sourceSquare: w, targetSquare: W.target, piece: _ });
                            }
                        } }, function (y, f) { return { connectDragSource: y.dragSource(), connectDragPreview: y.dragPreview(), isDragging: f.isDragging(), dropTarget: f.getDropResult() }; })(T), R = function (y) { var f = y.waitForTransition, D = y.square, C = y.targetSquare, _ = y.sourceSquare, w = y.getSquareCoordinates; return function (x, I) { return I && I === x; }(D, C) && f && function (x) { var I = (0, x.getSquareCoordinates)(x.sourceSq, x.targetSq), Y = I.sourceSquare, W = I.targetSquare; return "translate(".concat(Y.x - W.x, "px, ").concat(Y.y - W.y, "px)"); }({ getSquareCoordinates: w, sourceSq: _, targetSq: C }); }, K = function (y) { var f = y.isDragging, D = y.transitionDuration, C = y.waitForTransition, _ = y.square, w = y.targetSquare, x = y.sourceSquare, I = y.getSquareCoordinates, Y = y.getTranslation, W = y.piece, L = y.allowDrag; return { opacity: f ? 0 : 1, transform: Y({ waitForTransition: C, square: _, targetSquare: w, sourceSquare: x, getSquareCoordinates: I }), transition: "transform ".concat(D, "ms"), zIndex: 5, cursor: f ? "-webkit-grabbing" : L({ piece: W, sourceSquare: _ }) ? "-webkit-grab" : "not-allowed" }; };
                    function B(y) { return (B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function q(y) {
                        for (var f = 1; f < arguments.length; f++) {
                            var D = arguments[f] != null ? arguments[f] : {}, C = Object.keys(D);
                            typeof Object.getOwnPropertySymbols == "function" && (C = C.concat(Object.getOwnPropertySymbols(D).filter(function (_) { return Object.getOwnPropertyDescriptor(D, _).enumerable; }))), C.forEach(function (_) { F(y, _, D[_]); });
                        }
                        return y;
                    }
                    function F(y, f, D) { return f in y ? Object.defineProperty(y, f, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : y[f] = D, y; }
                    function Q(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function z(y, f) {
                        return !f || B(f) !== "object" && typeof f != "function" ? function (D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D;
                        }(y) : f;
                    }
                    function V(y) { return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function ne(y, f) { return (ne = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var G = function (y) {
                        function f() {
                            var _, w, x;
                            (function (L, A) {
                                if (!(L instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            for (var I = arguments.length, Y = new Array(I), W = 0; W < I; W++)
                                Y[W] = arguments[W];
                            return z(x, (w = x = z(this, (_ = V(f)).call.apply(_, [this].concat(Y))), x.onClick = function () { x.props.wasSquareClicked(!0), x.props.onSquareClick(x.props.square); }, w));
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && ne(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "componentDidMount", value: function () { var _ = this.props, w = _.square, x = _.setSquareCoordinates, I = _.width; (0, _.roughSquare)({ squareElement: this.roughSquareSvg, squareWidth: I / 8 }); var Y = this[w].getBoundingClientRect(); x(Y.x, Y.y, w); } }, { key: "componentDidUpdate", value: function (_) {
                                    var w = this.props, x = w.screenWidth, I = w.screenHeight, Y = w.square, W = w.setSquareCoordinates;
                                    if (_.screenWidth !== x || _.screenHeight !== I) {
                                        var L = this[Y].getBoundingClientRect();
                                        W(L.x, L.y, Y);
                                    }
                                } }, { key: "render", value: function () { var _ = this, w = this.props, x = w.connectDropTarget, I = w.width, Y = w.squareColor, W = w.children, L = w.square, A = w.roughSquare, J = w.onMouseOverSquare, Z = w.onMouseOutSquare, ee = w.squareStyles, H = w.onDragOverSquare, $ = w.onSquareRightClick; return x(e.a.createElement("div", { "data-testid": "".concat(Y, "-square"), "data-squareid": L, ref: function (te) { return _[L] = te; }, style: oe(this.props), onMouseOver: function () { return J(L); }, onMouseOut: function () { return Z(L); }, onDragEnter: function () { return H(L); }, onClick: function () { return _.onClick(); }, onContextMenu: function (te) { te.preventDefault(), $(L); } }, e.a.createElement("div", { style: q({}, ve(I), me, ee[L] && ee[L]) }, A.length ? e.a.createElement("div", { style: me }, W, e.a.createElement("svg", { style: q({}, ve(I), { position: "absolute", display: "block" }), ref: function (te) { return _.roughSquareSvg = te; } })) : W))); } }]) && Q(D.prototype, C), f;
                    }();
                    G.propTypes = { connectDropTarget: t.a.func, width: t.a.number, squareColor: t.a.oneOf(["white", "black"]), children: t.a.oneOfType([t.a.array, t.a.node]), isOver: t.a.bool, square: t.a.string, setSquareCoordinates: t.a.func, lightSquareStyle: t.a.object, darkSquareStyle: t.a.object, roughSquare: t.a.func, onMouseOverSquare: t.a.func, onMouseOutSquare: t.a.func, dropSquareStyle: t.a.object, screenWidth: t.a.number, screenHeight: t.a.number, squareStyles: t.a.object, onDragOverSquare: t.a.func, onSquareClick: t.a.func, wasSquareClicked: t.a.func, onSquareRightClick: t.a.func };
                    var se = Object(c.DropTarget)("piece", { drop: function (y, f) { return { target: y.square, board: y.id, piece: f.getItem().piece, source: f.getItem().source }; } }, function (y, f) { return { connectDropTarget: y.dropTarget(), isOver: f.isOver() }; })(G), oe = function (y) { var f = y.width, D = y.squareColor, C = y.isOver, _ = y.darkSquareStyle, w = y.lightSquareStyle, x = y.dropSquareStyle; return q({}, q({}, ve(f), me, D === "black" ? _ : w, C && x)); }, me = { display: "flex", justifyContent: "center" }, ve = function (y) { return { width: y / 8, height: y / 8 }; };
                    function ke(y) {
                        for (var f = 1; f < arguments.length; f++) {
                            var D = arguments[f] != null ? arguments[f] : {}, C = Object.keys(D);
                            typeof Object.getOwnPropertySymbols == "function" && (C = C.concat(Object.getOwnPropertySymbols(D).filter(function (_) { return Object.getOwnPropertyDescriptor(D, _).enumerable; }))), C.forEach(function (_) { qe(y, _, D[_]); });
                        }
                        return y;
                    }
                    function qe(y, f, D) { return f in y ? Object.defineProperty(y, f, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : y[f] = D, y; }
                    function Te(y) { return (Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function Ne(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function Le(y) { return (Le = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function $e(y, f) { return ($e = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var Ve = function (y, f) { return y === "white" ? f + 1 : f - 1; }, Ae = function (y, f, D) { return y === "black" ? f[7 - D] : f[D]; }, ft = function (y) {
                        function f() {
                            return function (x, I) {
                                if (!(x instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), _ = this, !(w = Le(f).apply(this, arguments)) || Te(w) !== "object" && typeof w != "function" ? function (x) {
                                if (x === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return x;
                            }(_) : w;
                            var _, w;
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && $e(_, w);
                        }(f, r.PureComponent), D = f, (C = [{ key: "render", value: function () { var _ = this.props, w = _.row, x = _.col, I = _.orientation, Y = _.lightSquareStyle, W = _.darkSquareStyle, L = Y.backgroundColor, A = W.backgroundColor, J = x === 0, Z = I === "white" && w === 0 || I === "black" && w === 9, ee = J && Z; return ee ? function (H, $) { var te = H.orientation, le = H.row, ue = H.width, X = H.alpha, ge = H.col, ye = $.whiteColor; return e.a.createElement(r.Fragment, null, e.a.createElement("div", { "data-testid": "bottom-left-".concat(Ve(te, le)), style: ke({}, ze, { fontSize: ue / 48, color: ye }, we(ue)) }, Ve(te, le)), e.a.createElement("div", { "data-testid": "bottom-left-".concat(Ae(te, X, ge)), style: ke({}, ze, { fontSize: ue / 48, color: ye }, Je(ue)) }, Ae(te, X, ge))); }(this.props, { whiteColor: L }) : Z ? function (H, $) { var te = H.orientation, le = H.width, ue = H.alpha, X = H.col, ge = $.whiteColor, ye = $.blackColor; return e.a.createElement("div", { "data-testid": "column-".concat(Ae(te, ue, X)), style: ke({}, ze, Ke({ col: X, width: le, blackColor: ye, whiteColor: ge }), Je(le)) }, Ae(te, ue, X)); }(this.props, { whiteColor: L, blackColor: A }) : J ? function (H, $) { var te = H.orientation, le = H.row, ue = H.width, X = $.whiteColor, ge = $.blackColor, ye = $.isRow, Ee = $.isBottomLeftSquare; return e.a.createElement("div", { style: ke({}, ze, Qe({ row: le, width: ue, blackColor: ge, whiteColor: X, orientation: te, isBottomLeftSquare: Ee, isRow: ye }), we(ue)) }, Ve(te, le)); }(this.props, { whiteColor: L, blackColor: A, isRow: J, isBottomLeftSquare: ee }) : null; } }]) && Ne(D.prototype, C), f;
                    }();
                    ft.propTypes = { row: t.a.number, col: t.a.number, alpha: t.a.array, orientation: t.a.string, width: t.a.number, lightSquareStyle: t.a.object, darkSquareStyle: t.a.object };
                    var Tt = ft, Ke = function (y) { var f = y.col, D = y.width, C = y.blackColor, _ = y.whiteColor; return { fontSize: D / 48, color: f % 2 != 0 ? C : _ }; }, Qe = function (y) { var f = y.row, D = y.width, C = y.blackColor, _ = y.whiteColor, w = y.orientation, x = y.isBottomLeftSquare, I = y.isRow; return { fontSize: D / 48, color: w === "black" ? I && !x && f % 2 == 0 ? C : _ : I && !x && f % 2 != 0 ? C : _ }; }, Je = function (y) { return { alignSelf: "flex-end", paddingLeft: y / 8 - y / 48 }; }, we = function (y) { return { alignSelf: "flex-start", paddingRight: y / 8 - y / 48 }; }, ze = { fontFamily: "Helvetica Neue", zIndex: 3, position: "absolute" };
                    function Ze(y) { var f = y.width, D = y.pieces, C = y.phantomPieceValue, _ = y.allowDrag; return k({ width: f, pieces: D, piece: C, phantomPieceStyles: dt(f), allowDrag: _ }); }
                    Ze.propTypes = { width: t.a.number, phantomPieceValue: t.a.string, pieces: t.a.object, allowDrag: t.a.func };
                    var jt = Ze, dt = function (y) { return { position: "absolute", width: y / 8, height: y / 8, zIndex: 1 }; };
                    function Be(y) { return (Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function et(y) {
                        return function (f) {
                            if (Array.isArray(f)) {
                                for (var D = 0, C = new Array(f.length); D < f.length; D++)
                                    C[D] = f[D];
                                return C;
                            }
                        }(y) || function (f) {
                            if (Symbol.iterator in Object(f) || Object.prototype.toString.call(f) === "[object Arguments]")
                                return Array.from(f);
                        }(y) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance"); }();
                    }
                    function pt(y, f, D) { return f in y ? Object.defineProperty(y, f, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : y[f] = D, y; }
                    function Pt(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function Ce(y) { return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function tt(y, f) { return (tt = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var ht = function (y) {
                        function f() {
                            return function (x, I) {
                                if (!(x instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), _ = this, !(w = Ce(f).apply(this, arguments)) || Be(w) !== "object" && typeof w != "function" ? function (x) {
                                if (x === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return x;
                            }(_) : w;
                            var _, w;
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && tt(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "render", value: function () {
                                    var _ = this.props, w = _.width, x = _.boardStyle, I = _.orientation, Y = _.children, W = _.boardId, L = b, A = 8, J = "white";
                                    return I === "black" && (A = 1), e.a.createElement("div", { style: function (Z) {
                                            for (var ee = 1; ee < arguments.length; ee++) {
                                                var H = arguments[ee] != null ? arguments[ee] : {}, $ = Object.keys(H);
                                                typeof Object.getOwnPropertySymbols == "function" && ($ = $.concat(Object.getOwnPropertySymbols(H).filter(function (te) { return Object.getOwnPropertyDescriptor(H, te).enumerable; }))), $.forEach(function (te) { pt(Z, te, H[te]); });
                                            }
                                            return Z;
                                        }({}, nt(w), x), "data-boardid": W }, et(Array(8)).map(function (Z, ee) { return A = I === "black" ? A + 1 : A - 1, e.a.createElement("div", { key: ee.toString(), style: Fe(w) }, et(Array(8)).map(function (H, $) { var te = I === "black" ? L[7 - $] + (A - 1) : L[$] + (A + 1); return $ !== 0 && (J = J === "black" ? "white" : "black"), Y({ square: te, squareColor: J, col: $, row: A, alpha: L }); })); }));
                                } }]) && Pt(D.prototype, C), f;
                    }();
                    ht.propTypes = { width: t.a.number, orientation: t.a.string, boardStyle: t.a.object, children: t.a.func, boardId: t.a.oneOfType([t.a.string, t.a.number]) };
                    var Mt = ht, nt = function (y) { return { width: y, height: y, cursor: "default" }; }, Fe = function (y) { return { display: "flex", flexWrap: "nowrap", width: y }; };
                    function Ye(y) { return (Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function rt(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function Xe(y, f) {
                        return !f || Ye(f) !== "object" && typeof f != "function" ? function (D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D;
                        }(y) : f;
                    }
                    function Ie(y) { return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function gt(y, f) { return (gt = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var xt = function (y) {
                        function f() {
                            var _, w, x;
                            (function (L, A) {
                                if (!(L instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            for (var I = arguments.length, Y = new Array(I), W = 0; W < I; W++)
                                Y[W] = arguments[W];
                            return Xe(x, (w = x = Xe(this, (_ = Ie(f)).call.apply(_, [this].concat(Y))), x.setSquareCoordinates = function (L, A, J) { return x.setState((H = { x: L, y: A }, (ee = J) in (Z = {}) ? Object.defineProperty(Z, ee, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : Z[ee] = H, Z)); var Z, ee, H; }, x.getSquareCoordinates = function (L, A) { return { sourceSquare: x.state[L], targetSquare: x.state[A] }; }, x.showPhantom = function (L) { var A = L.square, J = L.targetSquare, Z = L.phantomPiece; return Z && Z[J] && function (ee, H) { return H && H === ee; }(A, J); }, x.hasPiece = function (L, A) { return L && Object.keys(L) && Object.keys(L).includes(A); }, w));
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && gt(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "render", value: function () { var _ = this; return e.a.createElement(pe.Consumer, null, function (w) { return e.a.createElement(Mt, { width: w.width, boardStyle: w.boardStyle, orientation: w.orientation, boardId: w.id }, function (x) { var I = x.square, Y = x.squareColor, W = x.col, L = x.row, A = x.alpha; return e.a.createElement(se, { key: "".concat(W).concat(L), width: w.width, square: I, squareColor: Y, setSquareCoordinates: _.setSquareCoordinates, lightSquareStyle: w.lightSquareStyle, darkSquareStyle: w.darkSquareStyle, roughSquare: w.roughSquare, onMouseOverSquare: w.onMouseOverSquare, onMouseOutSquare: w.onMouseOutSquare, onDragOverSquare: w.onDragOverSquare, dropSquareStyle: w.dropSquareStyle, id: w.id, screenWidth: w.screenWidth, screenHeight: w.screenHeight, squareStyles: w.squareStyles, onSquareClick: w.onSquareClick, onSquareRightClick: w.onSquareRightClick, wasSquareClicked: w.wasSquareClicked }, _.hasPiece(w.currentPosition, I) ? e.a.createElement(P, { pieces: w.pieces, square: I, piece: w.currentPosition[I], width: w.width, setPosition: w.setPosition, dropOffBoard: w.dropOffBoard, getSquareCoordinates: _.getSquareCoordinates, draggable: w.draggable, onDrop: w.onDrop, sourceSquare: w.sourceSquare, targetSquare: w.targetSquare, waitForTransition: w.waitForTransition, transitionDuration: w.transitionDuration, orientation: w.orientation, id: w.id, setTouchState: w.setTouchState, wasManuallyDropped: w.wasManuallyDropped, phantomPiece: w.phantomPiece, onPieceClick: w.onPieceClick, wasSquareClicked: w.wasSquareClicked, allowDrag: w.allowDrag }) : null, _.showPhantom({ square: I, targetSquare: w.targetSquare, phantomPiece: w.phantomPiece }) && e.a.createElement(jt, { width: w.width, phantomPieceValue: w.phantomPiece[w.targetSquare], pieces: w.pieces, showNotation: w.showNotation, allowDrag: w.allowDrag }), w.showNotation && e.a.createElement(Tt, { row: L, col: W, alpha: A, orientation: w.orientation, width: w.width, lightSquareStyle: w.lightSquareStyle, darkSquareStyle: w.darkSquareStyle })); }); }); } }]) && rt(D.prototype, C), f;
                    }(), Lt = n(23), yt = n.n(Lt), It = n(47), vt = n.n(It), ot = n(46), je = n.n(ot);
                    function Oe(y) { return (Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function Pe(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function He(y, f) {
                        return !f || Oe(f) !== "object" && typeof f != "function" ? function (D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D;
                        }(y) : f;
                    }
                    function De(y) { return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function Ue(y, f) { return (Ue = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var Se = function (y) {
                        function f() {
                            var _, w, x;
                            (function (L, A) {
                                if (!(L instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            for (var I = arguments.length, Y = new Array(I), W = 0; W < I; W++)
                                Y[W] = arguments[W];
                            return He(x, (w = x = He(this, (_ = De(f)).call.apply(_, [this].concat(Y))), x.getOrientation = function (L) { return x.props.top ? L === "black" ? "white" : "black" : L === "black" ? "black" : "white"; }, w));
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && Ue(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "render", value: function () { var _ = this; return e.a.createElement(pe.Consumer, null, function (w) { var x = _.getOrientation(w.orientation) === "black" ? ["bK", "bQ", "bR", "bB", "bN", "bP"] : ["wK", "wQ", "wR", "wB", "wN", "wP"]; return e.a.createElement("div", { style: bt(w.width) }, x.map(function (I) { return e.a.createElement("div", { "data-testid": "spare-".concat(I), key: I }, e.a.createElement(P, { piece: I, width: w.width, setPosition: w.setPosition, square: "spare", dropOffBoard: w.dropOffBoard, draggable: !0, onDrop: w.onDrop, sourceSquare: w.sourceSquare, targetSquare: w.targetSquare, sourcePiece: w.sourcePiece, orientation: w.orientation, manualDrop: w.manualDrop, id: w.id, pieces: w.pieces, wasManuallyDropped: w.wasManuallyDropped, onPieceClick: w.onPieceClick, allowDrag: w.allowDrag })); })); }); } }]) && Pe(D.prototype, C), f;
                    }();
                    Se.propTypes = { top: t.a.bool }, Se.Top = function () { return e.a.createElement(Se, { top: !0 }); }, Se.Bottom = function () { return e.a.createElement(Se, null); };
                    var it = Se, bt = function (y) { return { display: "flex", justifyContent: "center", width: y }; };
                    function at(y) { return (at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function mt(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function We(y) { return (We = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function Me(y, f) { return (Me = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var wt = function (y) {
                        function f() {
                            return function (x, I) {
                                if (!(x instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), _ = this, !(w = We(f).apply(this, arguments)) || at(w) !== "object" && typeof w != "function" ? function (x) {
                                if (x === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return x;
                            }(_) : w;
                            var _, w;
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && Me(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "render", value: function () { var _ = this.props, w = _.isDragging, x = _.width, I = _.item, Y = _.id, W = _.currentOffset, L = _.wasPieceTouched, A = _.pieces, J = _.sourceSquare; return w && I.board === Y ? e.a.createElement("div", { style: Rt }, e.a.createElement("div", { style: xe(W, L) }, k({ width: x, pieces: A, piece: I.piece, isDragging: w, customDragLayerStyles: { opacity: 1 }, sourceSquare: J }))) : null; } }]) && mt(D.prototype, C), f;
                    }();
                    wt.propTypes = { item: t.a.object, currentOffset: t.a.shape({ x: t.a.number.isRequired, y: t.a.number.isRequired }), isDragging: t.a.bool.isRequired, width: t.a.number, pieces: t.a.object, id: t.a.oneOfType([t.a.string, t.a.number]), wasPieceTouched: t.a.bool, sourceSquare: t.a.string };
                    var _e = Object(c.DragLayer)(function (y) { return { item: y.getItem(), currentOffset: y.getSourceClientOffset(), isDragging: y.isDragging() }; })(wt), Rt = { position: "fixed", pointerEvents: "none", zIndex: 10, left: 0, top: 0 }, xe = function (y, f) {
                        if (!y)
                            return { display: "none" };
                        var D = y.x, C = y.y;
                        return { transform: f ? "translate(".concat(D, "px, ").concat(C + -25, "px) scale(2)") : "translate(".concat(D, "px, ").concat(C, "px)") };
                    }, Ot = { wP: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("path", { d: "M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z ", style: { opacity: "1", fill: "#ffffff", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } })), wR: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "#ffffff", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 34,14 L 31,17 L 14,17 L 11,14" }), e.a.createElement("path", { d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17", style: { strokeLinecap: "butt", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" }), e.a.createElement("path", { d: "M 11,14 L 34,14", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }))), wN: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "none", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18", style: { fill: "#ffffff", stroke: "#000000" } }), e.a.createElement("path", { d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10", style: { fill: "#ffffff", stroke: "#000000" } }), e.a.createElement("path", { d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z", style: { fill: "#000000", stroke: "#000000" } }), e.a.createElement("path", { d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z", transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)", style: { fill: "#000000", stroke: "#000000" } }))), wB: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "none", fillRule: "evenodd", fillOpacity: "1", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("g", { style: { fill: "#ffffff", stroke: "#000000", strokeLinecap: "butt" } }, e.a.createElement("path", { d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" }), e.a.createElement("path", { d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" }), e.a.createElement("path", { d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" })), e.a.createElement("path", { d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }))), wQ: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "#ffffff", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z", transform: "translate(-1,-1)" }), e.a.createElement("path", { d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z", transform: "translate(15.5,-5.5)" }), e.a.createElement("path", { d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z", transform: "translate(32,-1)" }), e.a.createElement("path", { d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z", transform: "translate(7,-4.5)" }), e.a.createElement("path", { d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z", transform: "translate(24,-4)" }), e.a.createElement("path", { d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 11.5,30 C 15,29 30,29 33.5,30", style: { fill: "none" } }), e.a.createElement("path", { d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5", style: { fill: "none" } }))), wK: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { fill: "none", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 22.5,11.63 L 22.5,6", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 20,8 L 25,8", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25", style: { fill: "#ffffff", stroke: "#000000", strokeLinecap: "butt", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z ", style: { fill: "#ffffff", stroke: "#000000" } }), e.a.createElement("path", { d: "M 11.5,30 C 17,27 27,27 32.5,30", style: { fill: "none", stroke: "#000000" } }), e.a.createElement("path", { d: "M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5", style: { fill: "none", stroke: "#000000" } }), e.a.createElement("path", { d: "M 11.5,37 C 17,34 27,34 32.5,37", style: { fill: "none", stroke: "#000000" } }))), bP: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("path", { d: "M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z ", style: { opacity: "1", fill: "#000000", fillOpacity: "1", fillRule: "nonzero", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } })), bR: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "000000", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ", style: { strokeLinecap: "butt", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 12,35.5 L 33,35.5 L 33,35.5", style: { fill: "none", stroke: "#ffffff", strokeWidth: "1", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 13,31.5 L 32,31.5", style: { fill: "none", stroke: "#ffffff", strokeWidth: "1", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 14,29.5 L 31,29.5", style: { fill: "none", stroke: "#ffffff", strokeWidth: "1", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 14,16.5 L 31,16.5", style: { fill: "none", stroke: "#ffffff", strokeWidth: "1", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 11,14 L 34,14", style: { fill: "none", stroke: "#ffffff", strokeWidth: "1", strokeLinejoin: "miter" } }))), bN: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "none", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18", style: { fill: "#000000", stroke: "#000000" } }), e.a.createElement("path", { d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10", style: { fill: "#000000", stroke: "#000000" } }), e.a.createElement("path", { d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z", style: { fill: "#ffffff", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z", transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)", style: { fill: "#ffffff", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ", style: { fill: "#ffffff", stroke: "none" } }))), bB: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "none", fillRule: "evenodd", fillOpacity: "1", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("g", { style: { fill: "#000000", stroke: "#000000", strokeLinecap: "butt" } }, e.a.createElement("path", { d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" }), e.a.createElement("path", { d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" }), e.a.createElement("path", { d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" })), e.a.createElement("path", { d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18", style: { fill: "none", stroke: "#ffffff", strokeLinejoin: "miter" } }))), bQ: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { opacity: "1", fill: "000000", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("g", { style: { fill: "#000000", stroke: "none" } }, e.a.createElement("circle", { cx: "6", cy: "12", r: "2.75" }), e.a.createElement("circle", { cx: "14", cy: "9", r: "2.75" }), e.a.createElement("circle", { cx: "22.5", cy: "8", r: "2.75" }), e.a.createElement("circle", { cx: "31", cy: "9", r: "2.75" }), e.a.createElement("circle", { cx: "39", cy: "12", r: "2.75" })), e.a.createElement("path", { d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z", style: { strokeLinecap: "butt", stroke: "#000000" } }), e.a.createElement("path", { d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z", style: { strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 11,38.5 A 35,35 1 0 0 34,38.5", style: { fill: "none", stroke: "#000000", strokeLinecap: "butt" } }), e.a.createElement("path", { d: "M 11,29 A 35,35 1 0 1 34,29", style: { fill: "none", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 12.5,31.5 L 32.5,31.5", style: { fill: "none", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5", style: { fill: "none", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5", style: { fill: "none", stroke: "#ffffff" } }))), bK: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, e.a.createElement("g", { style: { fill: "none", fillOpacity: "1", fillRule: "evenodd", stroke: "#000000", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" } }, e.a.createElement("path", { d: "M 22.5,11.63 L 22.5,6", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }, id: "path6570" }), e.a.createElement("path", { d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25", style: { fill: "#000000", fillOpacity: "1", strokeLinecap: "butt", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z ", style: { fill: "#000000", stroke: "#000000" } }), e.a.createElement("path", { d: "M 20,8 L 25,8", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), e.a.createElement("path", { d: "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85", style: { fill: "none", stroke: "#ffffff" } }), e.a.createElement("path", { d: "M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37", style: { fill: "none", stroke: "#ffffff" } }))) }, qt = { whiteKing: e.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", style: { shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality" }, viewBox: "0 0 4210 12970", x: "0px", y: "0px", fillRule: "evenodd", clipRule: "evenodd", width: "250", height: "250" }, e.a.createElement("g", null, e.a.createElement("path", { style: { fill: "black", fillRule: "nonzero" }, d: "M2105 0c169,0 286,160 249,315l200 0c-172,266 -231,479 -256,792 315,-24 530,-86 792,-255l0 897c-265,-171 -479,-231 -792,-256 18,234 75,495 185,682l339 0c233,0 369,269 225,456l545 0 -595 1916c130,94 158,275 59,402 465,0 416,568 51,568l-334 0 465 2867 332 0c250,0 381,306 199,485 162,63 273,220 273,399l0 633 168 0 0 475c-1403,0 -2807,0 -4210,0l0 -475 167 0 0 -633c0,-179 112,-336 274,-399 -181,-178 -52,-485 199,-485l332 0 465 -2867 -335 0c-353,0 -418,-568 51,-568 -98,-127 -70,-308 59,-402l-594 -1916c181,0 363,0 545,0 -144,-187 -9,-456 225,-456l339 0c110,-187 167,-448 185,-682 -315,25 -530,87 -793,256l0 -897c266,171 480,231 793,255 -25,-315 -87,-529 -256,-792l199 0c-36,-155 81,-315 250,-315zm-1994 10012l0 253 3988 0 0 -253c-1330,0 -2659,0 -3988,0zm484 -1060c-174,0 -316,142 -316,316l0 633 3652 0 0 -633c0,-174 -142,-316 -316,-316 -1007,0 -2013,0 -3020,0zm45 -457c-230,0 -225,345 0,345l2930 0c230,0 225,-345 0,-345 -977,0 -1953,0 -2930,0zm2020 -2978l-1111 0 -465 2867 2041 0 -465 -2867zm-1558 -456c-229,0 -224,345 0,345 669,0 1337,0 2005,0 230,0 225,-345 0,-345 -668,0 -1336,0 -2005,0zm1730 -457l-1454 0c-229,0 -224,345 0,345l1454 0c229,0 224,-345 0,-345zm-2064 -1862l544 1751c529,0 1057,0 1586,0l544 -1751c-892,0 -1783,0 -2674,0zm1085 -567l504 0c-126,-247 -163,-526 -177,-800 273,15 553,52 800,177l0 -504c-247,126 -527,163 -800,177 14,-273 51,-552 177,-799 -168,0 -336,0 -504,0 125,247 162,526 177,799 -274,-14 -553,-51 -800,-177l0 504c247,-125 527,-162 800,-177 -15,274 -52,553 -177,800zm969 111l-1434 0c-230,0 -225,345 0,345l1434 0c230,0 225,-345 0,-345zm-717 -2175c-105,0 -175,109 -133,204l266 0c42,-96 -30,-205 -133,-204z" }))) };
                    function Ge(y) { return (Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function ut(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function st(y, f) {
                        return !f || Ge(f) !== "object" && typeof f != "function" ? function (D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D;
                        }(y) : f;
                    }
                    function ct(y) { return (ct = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function lt(y, f) { return (lt = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var Re = function (y) {
                        function f() {
                            var _, w, x;
                            (function (L, A) {
                                if (!(L instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            for (var I = arguments.length, Y = new Array(I), W = 0; W < I; W++)
                                Y[W] = arguments[W];
                            return st(x, (w = x = st(this, (_ = ct(f)).call.apply(_, [this].concat(Y))), x.state = { hasError: !1 }, w));
                        }
                        var D, C;
                        return function (_, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            _.prototype = Object.create(w && w.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), w && lt(_, w);
                        }(f, r.Component), D = f, (C = [{ key: "componentDidCatch", value: function (_) { this.setState({ hasError: !0 }), console.error(_.message); } }, { key: "render", value: function () { return this.state.hasError ? e.a.createElement("div", { style: Nt }, e.a.createElement("div", { style: E }, qt.whiteKing), e.a.createElement("h1", null, "Something went wrong")) : this.props.children; } }]) && ut(D.prototype, C), f;
                    }();
                    Re.propTypes = { children: t.a.object };
                    var St = Re, Nt = { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }, E = { width: 250, height: 250, transform: "rotate(90deg)" };
                    function M(y) { return (M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; })(y); }
                    function N(y) {
                        for (var f = 1; f < arguments.length; f++) {
                            var D = arguments[f] != null ? arguments[f] : {}, C = Object.keys(D);
                            typeof Object.getOwnPropertySymbols == "function" && (C = C.concat(Object.getOwnPropertySymbols(D).filter(function (_) { return Object.getOwnPropertyDescriptor(D, _).enumerable; }))), C.forEach(function (_) { U(y, _, D[_]); });
                        }
                        return y;
                    }
                    function U(y, f, D) { return f in y ? Object.defineProperty(y, f, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : y[f] = D, y; }
                    function ie(y, f) {
                        for (var D = 0; D < f.length; D++) {
                            var C = f[D];
                            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
                        }
                    }
                    function re(y, f) {
                        return !f || M(f) !== "object" && typeof f != "function" ? function (D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D;
                        }(y) : f;
                    }
                    function ae(y) { return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (f) { return f.__proto__ || Object.getPrototypeOf(f); })(y); }
                    function de(y, f) { return (de = Object.setPrototypeOf || function (D, C) { return D.__proto__ = C, D; })(y, f); }
                    var be = e.a.createContext(), he = function (y) {
                        return y === "start" ? l("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR") : h(y) ? l(y) : function (f) {
                            if (f === null || v(f) !== "object")
                                return !1;
                            for (var D in f)
                                if (f.hasOwnProperty(D) && (!p(_ = D) || _.search(/^[a-h][1-8]$/) === -1 || !p(C = f[D]) || C.search(/^[bw][KQRNBP]$/) === -1))
                                    return !1;
                            var C, _;
                            return !0;
                        }(y) ? y : {};
                    }, fe = function (y) {
                        function f() {
                            var w, x, I;
                            (function (A, J) {
                                if (!(A instanceof f))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            for (var Y = arguments.length, W = new Array(Y), L = 0; L < Y; L++)
                                W[L] = arguments[L];
                            return re(I, (x = I = re(this, (w = ae(f)).call.apply(w, [this].concat(W))), I.state = { previousPositionFromProps: he(I.props.position), currentPosition: he(I.props.position), sourceSquare: "", targetSquare: "", sourcePiece: "", waitForTransition: !1, phantomPiece: null, wasPieceTouched: !1, manualDrop: !1, squareClicked: !1, firstMove: !1, pieces: N({}, Ot, I.props.pieces), undoMove: I.props.undo }, I.updateWindowDimensions = function () { I.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight }); }, I.wasManuallyDropped = function (A) { return I.setState({ manualDrop: A }); }, I.wasSquareClicked = function (A) { return I.setState({ squareClicked: A }); }, I.setPosition = function (A) {
                                var J = A.sourceSquare, Z = A.targetSquare, ee = A.piece, H = I.state.currentPosition, $ = I.props, te = $.getPosition, le = $.dropOffBoard;
                                if (J !== Z) {
                                    if (le === "trash" && !Z) {
                                        var ue = H;
                                        return delete ue[J], I.setState({ currentPosition: ue, manualDrop: !0 }), te(H);
                                    }
                                    var X = H;
                                    J !== "spare" && delete X[J], X[Z] = ee, I.setState({ currentPosition: X, manualDrop: !0 }), te(H);
                                }
                            }, I.setTouchState = function (A) { return I.setState({ wasPieceTouched: A.isTrusted }); }, I.getWidth = function () { var A = I.props, J = A.calcWidth, Z = A.width, ee = I.state, H = ee.screenWidth, $ = ee.screenHeight; return J({ screenWidth: H, screenHeight: $ }) ? J({ screenWidth: H, screenHeight: $ }) : Z; }, x));
                        }
                        var D, C, _;
                        return function (w, x) {
                            if (typeof x != "function" && x !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            w.prototype = Object.create(x && x.prototype, { constructor: { value: w, writable: !0, configurable: !0 } }), x && de(w, x);
                        }(f, r.Component), D = f, _ = [{ key: "getDerivedStateFromProps", value: function (w, x) {
                                    var I = w.position, Y = w.undo, W = x.currentPosition, L = x.manualDrop, A = x.squareClicked, J = he(I);
                                    if (!yt()(J, W)) {
                                        var Z = function (le, ue) { var X = d()(le, ue), ge = X.length; return { sourceSquare: X && X[1] && X && X[1].kind === "D" ? X[1].path && X[1].path[0] : X[0].path && X[0].path[0], targetSquare: X && X[1] && X && X[1].kind === "D" ? X[0] && X[0].path[0] : X[1] && X[1].path[0], sourcePiece: X && X[1] && X && X[1].kind === "D" ? X[1] && X[1].lhs : X[1] && X[1].rhs, squaresAffected: ge }; }(W, J), ee = Z.sourceSquare, H = Z.targetSquare, $ = Z.sourcePiece, te = Z.squaresAffected;
                                        return L ? { sourceSquare: ee, targetSquare: H, sourcePiece: $, currentPosition: J, waitForTransition: !1, manualDrop: !1 } : te && te !== 2 ? { currentPosition: J, waitForTransition: !1, manualDrop: !1, sourceSquare: ee, targetSquare: H, sourcePiece: $ } : W[H] ? (delete J[H], { sourceSquare: ee, targetSquare: H, sourcePiece: $, currentPosition: J, waitForTransition: !A, phantomPiece: A ? null : U({}, H, W[H]), manualDrop: !1, squareClicked: !1 }) : Y ? { sourceSquare: ee, targetSquare: H, sourcePiece: $, currentPosition: J, waitForTransition: !0, manualDrop: !1, squareClicked: !1, undoMove: !0 } : { sourceSquare: ee, targetSquare: H, sourcePiece: $, currentPosition: J, waitForTransition: !A, manualDrop: !1, squareClicked: !1 };
                                    }
                                    return null;
                                } }], (C = [{ key: "componentDidMount", value: function () { this.updateWindowDimensions(), window.addEventListener("resize", this.updateWindowDimensions); } }, { key: "componentWillUnmount", value: function () { window.removeEventListener("resize", this.updateWindowDimensions); } }, { key: "componentDidUpdate", value: function (w) {
                                    var x = this, I = this.props, Y = I.position, W = I.transitionDuration, L = I.getPosition, A = this.state, J = A.waitForTransition, Z = A.undoMove, ee = he(Y), H = he(w.position);
                                    if ((!yt()(ee, H) || Z) && (this.setState({ previousPositionFromProps: H, undoMove: !1 }), L(ee), J))
                                        return new Promise(function ($) { x.setState({ currentPosition: ee }, function () { return setTimeout(function () { x.setState({ waitForTransition: !1 }), $(); }, W); }); }).then(function () { return setTimeout(function () { return x.setState({ phantomPiece: null }); }, W); });
                                } }, { key: "render", value: function () { var w = this.props, x = w.sparePieces, I = w.id, Y = w.orientation, W = w.dropOffBoard, L = this.state, A = L.sourceSquare, J = L.targetSquare, Z = L.sourcePiece, ee = L.waitForTransition, H = L.phantomPiece, $ = L.wasPieceTouched, te = L.currentPosition, le = L.manualDrop, ue = L.screenWidth, X = L.screenHeight, ge = L.pieces, ye = ue && X; return e.a.createElement(St, null, e.a.createElement(be.Provider, { value: N({}, this.props, { pieces: ge, orientation: Y.toLowerCase(), dropOffBoard: W.toLowerCase() }, { width: this.getWidth(), sourceSquare: A, targetSquare: J, sourcePiece: Z, waitForTransition: ee, phantomPiece: H, setPosition: this.setPosition, manualDrop: le, setTouchState: this.setTouchState, currentPosition: te, screenWidth: ue, screenHeight: X, wasManuallyDropped: this.wasManuallyDropped, wasSquareClicked: this.wasSquareClicked }) }, e.a.createElement("div", null, ye && x && e.a.createElement(it.Top, null), ye && e.a.createElement(xt, null), ye && x && e.a.createElement(it.Bottom, null)), e.a.createElement(_e, { width: this.getWidth(), pieces: ge, id: I, wasPieceTouched: $, sourceSquare: J }))); } }]) && ie(D.prototype, C), _ && ie(D, _), f;
                    }();
                    fe.propTypes = { id: t.a.oneOfType([t.a.string, t.a.number]), position: t.a.oneOfType([t.a.string, t.a.object]), pieces: t.a.object, width: t.a.number, orientation: t.a.oneOf(["white", "black"]), showNotation: t.a.bool, sparePieces: t.a.bool, draggable: t.a.bool, dropOffBoard: t.a.oneOf(["snapback", "trash"]), transitionDuration: t.a.number, boardStyle: t.a.object, lightSquareStyle: t.a.object, darkSquareStyle: t.a.object, squareStyles: t.a.object, dropSquareStyle: t.a.object, calcWidth: t.a.func, roughSquare: t.a.func, onMouseOverSquare: t.a.func, onMouseOutSquare: t.a.func, onDrop: t.a.func, getPosition: t.a.func, onDragOverSquare: t.a.func, onSquareClick: t.a.func, onPieceClick: t.a.func, onSquareRightClick: t.a.func, allowDrag: t.a.func, undo: t.a.bool }, fe.defaultProps = { id: "0", position: "", pieces: {}, width: 560, orientation: "white", showNotation: !0, sparePieces: !1, draggable: !0, undo: !1, dropOffBoard: "snapback", transitionDuration: 300, boardStyle: {}, lightSquareStyle: { backgroundColor: "rgb(240, 217, 181)" }, darkSquareStyle: { backgroundColor: "rgb(181, 136, 99)" }, squareStyles: {}, dropSquareStyle: { boxShadow: "inset 0 0 1px 4px yellow" }, calcWidth: function () { }, roughSquare: function () { }, onMouseOverSquare: function () { }, onMouseOutSquare: function () { }, onDrop: function () { }, getPosition: function () { }, onDragOverSquare: function () { }, onSquareClick: function () { }, onPieceClick: function () { }, onSquareRightClick: function () { }, allowDrag: function () { return !0; } }, fe.Consumer = be.Consumer;
                    var pe = Object(c.DragDropContext)(vt()(je.a))(fe);
                    n.d(a, "default", function () { return pe; });
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.TouchBackend = void 0;
                    var r = Object.assign || function (h) {
                        for (var s = 1; s < arguments.length; s++) {
                            var g = arguments[s];
                            for (var S in g)
                                Object.prototype.hasOwnProperty.call(g, S) && (h[S] = g[S]);
                        }
                        return h;
                    }, e = function () {
                        function h(s, g) {
                            for (var S = 0; S < g.length; S++) {
                                var O = g[S];
                                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(s, O.key, O);
                            }
                        }
                        return function (s, g, S) { return g && h(s.prototype, g), S && h(s, S), s; };
                    }();
                    a.default = function () { var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = function (g) { return new l(g, h); }; return h.getMonitor ? s(h) : s; };
                    var c, i = (c = n(2)) && c.__esModule ? c : { default: c };
                    function t(h) {
                        return h.targetTouches ? function (s) {
                            if (s.targetTouches.length === 1)
                                return t(s.targetTouches[0]);
                        }(h) : { x: h.clientX, y: h.clientY };
                    }
                    var o = 1, u = { Left: 0, Center: 1, Right: 2 };
                    function d(h) { return h.button === void 0 || h.button === u.Left; }
                    var v = (typeof document != "undefined" && document.elementsFromPoint || function (h, s) {
                        if (document.msElementsFromPoint) {
                            var g = document.msElementsFromPoint(h, s);
                            return g && Array.prototype.slice.call(g, 0);
                        }
                        for (var S, O, j, k = [], T = []; (S = document.elementFromPoint(h, s)) && k.indexOf(S) === -1 && S !== null;)
                            k.push(S), T.push({ value: S.style.getPropertyValue("pointer-events"), priority: S.style.getPropertyPriority("pointer-events") }), S.style.setProperty("pointer-events", "none", "important");
                        for (O = T.length; j = T[--O];)
                            k[O].style.setProperty("pointer-events", j.value ? j.value : "", j.priority);
                        return k;
                    }).bind(typeof document != "undefined" ? document : null), b = function () {
                        var h = !1;
                        try {
                            addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { h = !0; } }));
                        }
                        catch (s) { }
                        return h;
                    }(), p = { mouse: { start: "mousedown", move: "mousemove", end: "mouseup", contextmenu: "contextmenu" }, touch: { start: "touchstart", move: "touchmove", end: "touchend" }, keyboard: { keydown: "keydown" } }, l = a.TouchBackend = function () {
                        function h(s) {
                            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            (function (S, O) {
                                if (!(S instanceof h))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), g.delayTouchStart = g.delayTouchStart || g.delay, g = r({ enableTouchEvents: !0, enableMouseEvents: !1, enableKeyboardEvents: !1, ignoreContextMenu: !1, delayTouchStart: 0, delayMouseStart: 0, touchSlop: 0 }, g), this.actions = s.getActions(), this.monitor = s.getMonitor(), this.registry = s.getRegistry(), this.enableKeyboardEvents = g.enableKeyboardEvents, this.enableMouseEvents = g.enableMouseEvents, this.delayTouchStart = g.delayTouchStart, this.delayMouseStart = g.delayMouseStart, this.ignoreContextMenu = g.ignoreContextMenu, this.touchSlop = g.touchSlop, this.sourceNodes = {}, this.sourceNodeOptions = {}, this.sourcePreviewNodes = {}, this.sourcePreviewNodeOptions = {}, this.targetNodes = {}, this.targetNodeOptions = {}, this.listenerTypes = [], this._mouseClientOffset = {}, g.enableMouseEvents && this.listenerTypes.push("mouse"), g.enableTouchEvents && this.listenerTypes.push("touch"), g.enableKeyboardEvents && this.listenerTypes.push("keyboard"), this.getSourceClientOffset = this.getSourceClientOffset.bind(this), this.handleTopMoveStart = this.handleTopMoveStart.bind(this), this.handleTopMoveStartDelay = this.handleTopMoveStartDelay.bind(this), this.handleTopMoveStartCapture = this.handleTopMoveStartCapture.bind(this), this.handleTopMoveCapture = this.handleTopMoveCapture.bind(this), this.handleTopMove = this.handleTopMove.bind(this), this.handleTopMoveEndCapture = this.handleTopMoveEndCapture.bind(this), this.handleCancelOnEscape = this.handleCancelOnEscape.bind(this);
                        }
                        return e(h, [{ key: "setup", value: function () { typeof window != "undefined" && ((0, i.default)(!this.constructor.isSetUp, "Cannot have two Touch backends at the same time."), this.constructor.isSetUp = !0, this.addEventListener(window, "start", this.getTopMoveStartHandler()), this.addEventListener(window, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(window, "move", this.handleTopMove), this.addEventListener(window, "move", this.handleTopMoveCapture, !0), this.addEventListener(window, "end", this.handleTopMoveEndCapture, !0), this.enableMouseEvents && !this.ignoreContextMenu && this.addEventListener(window, "contextmenu", this.handleTopMoveEndCapture), this.enableKeyboardEvents && this.addEventListener(window, "keydown", this.handleCancelOnEscape, !0)); } }, { key: "teardown", value: function () { typeof window != "undefined" && (this.constructor.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(window, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(window, "start", this.handleTopMoveStart), this.removeEventListener(window, "move", this.handleTopMoveCapture, !0), this.removeEventListener(window, "move", this.handleTopMove), this.removeEventListener(window, "end", this.handleTopMoveEndCapture, !0), this.enableMouseEvents && !this.ignoreContextMenu && this.removeEventListener(window, "contextmenu", this.handleTopMoveEndCapture), this.enableKeyboardEvents && this.removeEventListener(window, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver()); } }, { key: "addEventListener", value: function (s, g, S, O) { var j = b ? { capture: O, passive: !1 } : O; this.listenerTypes.forEach(function (k) { var T = p[k][g]; T && s.addEventListener(T, S, j); }); } }, { key: "removeEventListener", value: function (s, g, S, O) { var j = b ? { capture: O, passive: !1 } : O; this.listenerTypes.forEach(function (k) { var T = p[k][g]; T && s.removeEventListener(T, S, j); }); } }, { key: "connectDragSource", value: function (s, g, S) { var O = this, j = this.handleMoveStart.bind(this, s); return this.sourceNodes[s] = g, this.addEventListener(g, "start", j), function () { delete O.sourceNodes[s], O.removeEventListener(g, "start", j); }; } }, { key: "connectDragPreview", value: function (s, g, S) { var O = this; return this.sourcePreviewNodeOptions[s] = S, this.sourcePreviewNodes[s] = g, function () { delete O.sourcePreviewNodes[s], delete O.sourcePreviewNodeOptions[s]; }; } }, { key: "connectDropTarget", value: function (s, g) {
                                    var S = this, O = function (j) {
                                        var k = void 0;
                                        if (S.monitor.isDragging()) {
                                            switch (j.type) {
                                                case p.mouse.move:
                                                    k = { x: j.clientX, y: j.clientY };
                                                    break;
                                                case p.touch.move: k = { x: j.touches[0].clientX, y: j.touches[0].clientY };
                                            }
                                            var T = document.elementFromPoint(k.x, k.y), P = g.contains(T);
                                            return T === g || P ? S.handleMove(j, s) : void 0;
                                        }
                                    };
                                    return this.addEventListener(document.querySelector("body"), "move", O), this.targetNodes[s] = g, function () { delete S.targetNodes[s], S.removeEventListener(document.querySelector("body"), "move", O); };
                                } }, { key: "getSourceClientOffset", value: function (s) {
                                    return function (g) {
                                        var S = g.nodeType === 1 ? g : g.parentElement;
                                        if (!S)
                                            return null;
                                        var O = S.getBoundingClientRect(), j = O.top;
                                        return { x: O.left, y: j };
                                    }(this.sourceNodes[s]);
                                } }, { key: "handleTopMoveStartCapture", value: function (s) { d(s) && (this.moveStartSourceIds = []); } }, { key: "handleMoveStart", value: function (s) { Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(s); } }, { key: "getTopMoveStartHandler", value: function () { return this.delayTouchStart || this.delayMouseStart ? this.handleTopMoveStartDelay : this.handleTopMoveStart; } }, { key: "handleTopMoveStart", value: function (s) {
                                    if (d(s)) {
                                        var g = t(s);
                                        g && (this._mouseClientOffset = g), this.waitingForDelay = !1;
                                    }
                                } }, { key: "handleTopMoveStartDelay", value: function (s) {
                                    if (d(s)) {
                                        var g = s.type === p.touch.start ? this.delayTouchStart : this.delayMouseStart;
                                        this.timeout = setTimeout(this.handleTopMoveStart.bind(this, s), g), this.waitingForDelay = !0;
                                    }
                                } }, { key: "handleTopMoveCapture", value: function (s) { this.dragOverTargetIds = []; } }, { key: "handleMove", value: function (s, g) { this.dragOverTargetIds.unshift(g); } }, { key: "handleTopMove", value: function (s) {
                                    var g = this;
                                    if (clearTimeout(this.timeout), !this.waitingForDelay) {
                                        var S, O, j, k, T = this.moveStartSourceIds, P = this.dragOverTargetIds, R = t(s);
                                        if (R && (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && T && (S = this._mouseClientOffset.x, O = this._mouseClientOffset.y, j = R.x, k = R.y, Math.sqrt(Math.pow(Math.abs(j - S), 2) + Math.pow(Math.abs(k - O), 2)) > (this.touchSlop ? this.touchSlop : 0)) && (this.moveStartSourceIds = null, this.actions.beginDrag(T, { clientOffset: this._mouseClientOffset, getSourceClientOffset: this.getSourceClientOffset, publishSource: !1 })), this.monitor.isDragging())) {
                                            var K = this.sourceNodes[this.monitor.getSourceId()];
                                            this.installSourceNodeRemovalObserver(K), this.actions.publishDragSource(), s.preventDefault();
                                            var B = P.map(function (ne) { return g.targetNodes[ne]; }), q = v(R.x, R.y), F = [];
                                            for (var Q in q) {
                                                var z = q[Q];
                                                for (F.push(z); z && z.ownerSVGElement;)
                                                    z = z.parentElement, F.includes(z) || F.push(z);
                                            }
                                            var V = F.filter(function (ne) { return B.indexOf(ne) > -1; }).map(function (ne) {
                                                for (var G in g.targetNodes)
                                                    if (ne === g.targetNodes[G])
                                                        return G;
                                                return null;
                                            }).filter(function (ne) { return !!ne; }).filter(function (ne, G, se) { return se.indexOf(ne) === G; });
                                            V.reverse(), this.actions.hover(V, { clientOffset: R });
                                        }
                                    }
                                } }, { key: "handleTopMoveEndCapture", value: function (s) { (function (g) { return g.buttons === void 0 || (g.buttons & o) == 0; })(s) && (this.monitor.isDragging() && !this.monitor.didDrop() ? (s.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag()) : this.moveStartSourceIds = null); } }, { key: "handleCancelOnEscape", value: function (s) { s.key === "Escape" && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag()); } }, { key: "handleOnContextMenu", value: function () { this.moveStartSourceIds = null; } }, { key: "installSourceNodeRemovalObserver", value: function (s) { var g = this; this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = s, this.draggedSourceNodeRemovalObserver = new window.MutationObserver(function () { s.parentElement || (g.resurrectSourceNode(), g.uninstallSourceNodeRemovalObserver()); }), s && s.parentElement && this.draggedSourceNodeRemovalObserver.observe(s.parentElement, { childList: !0 }); } }, { key: "resurrectSourceNode", value: function () { this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), document.body.appendChild(this.draggedSourceNode); } }, { key: "uninstallSourceNodeRemovalObserver", value: function () { this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = null, this.draggedSourceNode = null; } }]), h;
                    }();
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0;
                    var r, e, c, i, t = function () {
                        function v(b, p) {
                            for (var l = 0; l < p.length; l++) {
                                var h = p[l];
                                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(b, h.key, h);
                            }
                        }
                        return function (b, p, l) { return p && v(b.prototype, p), l && v(b, l), b; };
                    }(), o = n(0), u = (i = n(1)) && i.__esModule ? i : { default: i }, d = (0, n(3).DragLayer)(function (v) { return { currentOffset: v.getSourceClientOffset(), isDragging: v.isDragging(), itemType: v.getItemType(), item: v.getItem() }; })((c = e = function (v) {
                        function b() {
                            return function (p, l) {
                                if (!(p instanceof b))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), function (p, l) {
                                if (!p)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !l || typeof l != "object" && typeof l != "function" ? p : l;
                            }(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
                        }
                        return function (p, l) {
                            if (typeof l != "function" && l !== null)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof l);
                            p.prototype = Object.create(l && l.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(p, l) : p.__proto__ = l);
                        }(b, o.PureComponent), t(b, [{ key: "getStyle", value: function () { var p = "translate(" + this.props.currentOffset.x + "px, " + this.props.currentOffset.y + "px)"; return { pointerEvents: "none", position: "fixed", top: 0, left: 0, transform: p, WebkitTransform: p }; } }, { key: "render", value: function () { return this.props.isDragging && this.props.currentOffset !== null ? this.props.generator(this.props.itemType, this.props.item, this.getStyle()) : null; } }]), b;
                    }(), e.defaultProps = { currentOffset: { x: 0, y: 0 }, isDragging: !1, itemType: "", item: {} }, e.propTypes = { currentOffset: u.default.shape({ x: u.default.number, y: u.default.number }), isDragging: u.default.bool, itemType: u.default.string, item: u.default.any, generator: u.default.func.isRequired }, e.contextTypes = { dragDropManager: u.default.object }, r = c)) || r;
                    a.default = d;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0;
                    var r, e, c, i = function () {
                        function p(l, h) {
                            for (var s = 0; s < h.length; s++) {
                                var g = h[s];
                                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(l, g.key, g);
                            }
                        }
                        return function (l, h, s) { return h && p(l.prototype, h), s && p(l, s), l; };
                    }(), t = n(0), o = v(t), u = v(n(1)), d = v(n(52));
                    function v(p) { return p && p.__esModule ? p : { default: p }; }
                    var b = (0, n(3).DragLayer)(function (p) { return { isDragging: p.isDragging() }; })((c = e = function (p) {
                        function l() {
                            return function (h, s) {
                                if (!(h instanceof l))
                                    throw new TypeError("Cannot call a class as a function");
                            }(this), function (h, s) {
                                if (!h)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !s || typeof s != "object" && typeof s != "function" ? h : s;
                            }(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
                        }
                        return function (h, s) {
                            if (typeof s != "function" && s !== null)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof s);
                            h.prototype = Object.create(s && s.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(h, s) : h.__proto__ = s);
                        }(l, t.PureComponent), i(l, [{ key: "render", value: function () { return this.context.dragDropManager.getBackend().previewEnabled() ? o.default.createElement(d.default, this.props) : null; } }]), l;
                    }(), e.propTypes = { generator: u.default.func.isRequired }, e.contextTypes = { dragDropManager: u.default.object }, r = c)) || r;
                    a.default = b;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.MouseTransition = a.HTML5DragTransition = a.TouchTransition = void 0;
                    var r, e = (r = n(24)) && r.__esModule ? r : { default: r };
                    a.TouchTransition = (0, e.default)("touchstart", function (c) { return c.touches != null; }), a.HTML5DragTransition = (0, e.default)("dragstart", function (c) { return !!c.type && (c.type.indexOf("drag") !== -1 || c.type.indexOf("drop") !== -1); }), a.MouseTransition = (0, e.default)("mousedown", function (c) { return c.type && c.type.indexOf("touch") === -1 && c.type.indexOf("mouse") !== -1; });
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r) {
                        for (var e = arguments.length, c = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                            c[i - 1] = arguments[i];
                        return c.forEach(function (t) {
                            for (var o in t)
                                Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
                        }), r;
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0;
                    var r, e = (r = n(55)) && r.__esModule ? r : { default: r };
                    a.default = function c(i, t) {
                        var o = this;
                        (function (d, v) {
                            if (!(d instanceof c))
                                throw new TypeError("Cannot call a class as a function");
                        })(this), this.setup = function () {
                            if (typeof window != "undefined") {
                                if (o.constructor.isSetUp)
                                    throw new Error("Cannot have two MultiBackends at the same time.");
                                o.constructor.isSetUp = !0, o.addEventListeners(window), o.backends[o.current].instance.setup();
                            }
                        }, this.teardown = function () { typeof window != "undefined" && (o.constructor.isSetUp = !1, o.removeEventListeners(window), o.backends[o.current].instance.teardown()); }, this.connectDragSource = function () {
                            for (var d = arguments.length, v = Array(d), b = 0; b < d; b++)
                                v[b] = arguments[b];
                            return o.connectBackend("connectDragSource", v);
                        }, this.connectDragPreview = function () {
                            for (var d = arguments.length, v = Array(d), b = 0; b < d; b++)
                                v[b] = arguments[b];
                            return o.connectBackend("connectDragPreview", v);
                        }, this.connectDropTarget = function () {
                            for (var d = arguments.length, v = Array(d), b = 0; b < d; b++)
                                v[b] = arguments[b];
                            return o.connectBackend("connectDropTarget", v);
                        }, this.previewEnabled = function () { return o.backends[o.current].preview; }, this.addEventListeners = function (d) { o.backends.forEach(function (v) { v.transition && d.addEventListener(v.transition.event, o.backendSwitcher, !0); }); }, this.removeEventListeners = function (d) { o.backends.forEach(function (v) { v.transition && d.removeEventListener(v.transition.event, o.backendSwitcher, !0); }); }, this.backendSwitcher = function (d) {
                            var v = o.current, b = 0;
                            if (o.backends.some(function (l) { return b !== o.current && l.transition && l.transition.check(d) ? (o.current = b, !0) : (b += 1, !1); }), o.current !== v) {
                                o.backends[v].instance.teardown(), Object.keys(o.nodes).forEach(function (l) { var h = o.nodes[l]; h.handler(), h.handler = o.callBackend(h.func, h.args); }), o.backends[o.current].instance.setup();
                                var p = null;
                                try {
                                    p = new d.constructor(d.type, d);
                                }
                                catch (l) {
                                    (p = document.createEvent("Event")).initEvent(d.type, d.bubbles, d.cancelable);
                                }
                                d.target.dispatchEvent(p);
                            }
                        }, this.callBackend = function (d, v) {
                            var b;
                            return (b = o.backends[o.current].instance)[d].apply(b, function (p) {
                                if (Array.isArray(p)) {
                                    for (var l = 0, h = Array(p.length); l < p.length; l++)
                                        h[l] = p[l];
                                    return h;
                                }
                                return Array.from(p);
                            }(v));
                        }, this.connectBackend = function (d, v) { var b = d + "_" + v[0], p = o.callBackend(d, v); return o.nodes[b] = { func: d, args: v, handler: p }, function () { var l, h = (l = o.nodes[b]).handler.apply(l, arguments); return delete o.nodes[b], h; }; };
                        var u = (0, e.default)({ backends: [] }, t || {});
                        if (u.backends.length < 1)
                            throw new Error(`You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)
        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx`);
                        this.current = 0, this.backends = [], u.backends.forEach(function (d) {
                            if (!d.backend)
                                throw new Error("You must specify a 'backend' property in your Backend entry: " + d);
                            var v = d.transition;
                            if (v && !v._isMBTransition)
                                throw new Error("You must specify a valid 'transition' property (either undefined or the return of 'createTransition') in your Backend entry: " + d);
                            o.backends.push({ instance: new d.backend(i), preview: d.preview || !1, transition: v });
                        }), this.nodes = {};
                    };
                }, function (m, a) { m.exports = function (n) { return n.webpackPolyfill || (n.deprecate = function () { }, n.paths = [], n.children || (n.children = []), Object.defineProperty(n, "loaded", { enumerable: !0, get: function () { return n.l; } }), Object.defineProperty(n, "id", { enumerable: !0, get: function () { return n.i; } }), n.webpackPolyfill = 1), n; }; }, function (m, a, n) {
                    "use strict";
                    var r;
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () { return r || ((r = new Image).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), r; };
                }, function (m, a) {
                    m.exports = function (n, r, e, c) {
                        var i = e ? e.call(c, n, r) : void 0;
                        if (i !== void 0)
                            return !!i;
                        if (n === r)
                            return !0;
                        if (typeof n != "object" || !n || typeof r != "object" || !r)
                            return !1;
                        var t = Object.keys(n), o = Object.keys(r);
                        if (t.length !== o.length)
                            return !1;
                        for (var u = Object.prototype.hasOwnProperty.bind(r), d = 0; d < t.length; d++) {
                            var v = t[d];
                            if (!u(v))
                                return !1;
                            var b = n[v], p = r[v];
                            if ((i = e ? e.call(c, b, p, v) : void 0) === !1 || i === void 0 && b !== p)
                                return !1;
                        }
                        return !0;
                    };
                }, function (m, a) {
                    m.exports = function (n) {
                        var r = [];
                        if (n != null)
                            for (var e in Object(n))
                                r.push(e);
                        return r;
                    };
                }, function (m, a) { m.exports = function () { return !1; }; }, function (m, a, n) {
                    var r = n(6), e = n(26), c = n(61), i = n(60), t = Object.prototype, o = t.hasOwnProperty, u = r(function (d, v) {
                        d = Object(d);
                        var b = -1, p = v.length, l = p > 2 ? v[2] : void 0;
                        for (l && c(v[0], v[1], l) && (p = 1); ++b < p;)
                            for (var h = v[b], s = i(h), g = -1, S = s.length; ++g < S;) {
                                var O = s[g], j = d[O];
                                (j === void 0 || e(j, t[O]) && !o.call(d, O)) && (d[O] = h[O]);
                            }
                        return d;
                    });
                    m.exports = u;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (c) { return typeof c; } : function (c) { return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c; };
                    function e(c, i, t) {
                        var o = t.value;
                        if (typeof o != "function")
                            throw new Error("@autobind decorator can only be applied to methods not: " + (o === void 0 ? "undefined" : r(o)));
                        var u = !1;
                        return { configurable: !0, get: function () {
                                if (u || this === c.prototype || this.hasOwnProperty(i) || typeof o != "function")
                                    return o;
                                var d = o.bind(this);
                                return u = !0, Object.defineProperty(this, i, { configurable: !0, get: function () { return d; }, set: function (v) { o = v, delete this[i]; } }), u = !1, d;
                            }, set: function (d) { o = d; } };
                    }
                    a.default = function () {
                        return arguments.length === 1 ? function (c) {
                            var i = void 0;
                            return typeof Reflect != "undefined" && typeof Reflect.ownKeys == "function" ? i = Reflect.ownKeys(c.prototype) : (i = Object.getOwnPropertyNames(c.prototype), typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(c.prototype)))), i.forEach(function (t) {
                                if (t !== "constructor") {
                                    var o = Object.getOwnPropertyDescriptor(c.prototype, t);
                                    typeof o.value == "function" && Object.defineProperty(c.prototype, t, e(c, t, o));
                                }
                            }), c;
                        }.apply(void 0, arguments) : e.apply(void 0, arguments);
                    };
                }, function (m, a, n) {
                    "use strict";
                    var r;
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var e = n(13);
                    function c(t, o, u) { var d = o.reduce(function (v, b) { return v || t.getData(b); }, null); return d ?? u; }
                    var i = ((r = {})[e.FILE] = { exposeProperty: "files", matchesTypes: ["Files"], getData: function (t) { return Array.prototype.slice.call(t.files); } }, r[e.URL] = { exposeProperty: "urls", matchesTypes: ["Url", "text/uri-list"], getData: function (t, o) {
                            return c(t, o, "").split(`
`);
                        } }, r[e.TEXT] = { exposeProperty: "text", matchesTypes: ["Text", "text/plain"], getData: function (t, o) { return c(t, o, ""); } }, r);
                    a.createNativeDragSource = function (t) { var o = i[t], u = o.exposeProperty, d = o.matchesTypes, v = o.getData; return function () { function b() { var p; this.item = (p = {}, Object.defineProperty(p, u, { get: function () { return console.warn(`Browser doesn't allow reading "` + u + "\" until the drop event."), null; }, enumerable: !0, configurable: !0 }), p); } return b.prototype.mutateItemByReadingDataTransfer = function (p) { delete this.item[u], this.item[u] = v(p, d); }, b.prototype.canDrag = function () { return !0; }, b.prototype.beginDrag = function () { return this.item; }, b.prototype.isDragging = function (p, l) { return l === p.getSourceId(); }, b.prototype.endDrag = function () { }, b; }(); }, a.matchNativeItemType = function (t) { var o = Array.prototype.slice.call(t.types || []); return Object.keys(i).filter(function (u) { return i[u].matchesTypes.some(function (d) { return o.indexOf(d) > -1; }); })[0] || null; };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function e(c, i) {
                            for (var t = c.length, o = [], u = 0; u < t; u++)
                                o.push(u);
                            o.sort(function (K, B) { return c[K] < c[B] ? -1 : 1; });
                            var d, v, b = [], p = [], l = [];
                            for (u = 0; u < t - 1; u++)
                                d = c[u + 1] - c[u], v = i[u + 1] - i[u], p.push(d), b.push(v), l.push(v / d);
                            var h = [l[0]];
                            for (u = 0; u < p.length - 1; u++) {
                                var s = l[u], g = l[u + 1];
                                if (s * g <= 0)
                                    h.push(0);
                                else {
                                    d = p[u];
                                    var S = p[u + 1], O = d + S;
                                    h.push(3 * O / ((O + S) / s + (O + d) / g));
                                }
                            }
                            h.push(l[l.length - 1]);
                            var j, k = [], T = [];
                            for (u = 0; u < h.length - 1; u++) {
                                j = l[u];
                                var P = h[u], R = 1 / p[u];
                                O = P + h[u + 1] - j - j, k.push((j - P - O) * R), T.push(O * R * R);
                            }
                            this.xs = c, this.ys = i, this.c1s = h, this.c2s = k, this.c3s = T;
                        }
                        return e.prototype.interpolate = function (c) {
                            var i = this, t = i.xs, o = i.ys, u = i.c1s, d = i.c2s, v = i.c3s, b = t.length - 1;
                            if (c === t[b])
                                return o[b];
                            for (var p, l = 0, h = v.length - 1; l <= h;) {
                                var s = t[p = Math.floor(0.5 * (l + h))];
                                if (s < c)
                                    l = p + 1;
                                else {
                                    if (!(s > c))
                                        return o[p];
                                    h = p - 1;
                                }
                            }
                            var g = c - t[b = Math.max(0, h)], S = g * g;
                            return o[b] + u[b] * g + d[b] * S + v[b] * g * S;
                        }, e;
                    }();
                    a.default = r;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(27), e = n(65), c = 1;
                    function i(t) {
                        var o = t.nodeType === c ? t : t.parentElement;
                        if (!o)
                            return null;
                        var u = o.getBoundingClientRect(), d = u.top;
                        return { x: u.left, y: d };
                    }
                    a.getNodeClientOffset = i, a.getEventClientOffset = function (t) { return { x: t.clientX, y: t.clientY }; }, a.getDragPreviewOffset = function (t, o, u, d, v) { var b, p, l = (b = o).nodeName === "IMG" && (r.isFirefox() || !document.documentElement.contains(b)), h = i(l ? t : o), s = { x: u.x - h.x, y: u.y - h.y }, g = t.offsetWidth, S = t.offsetHeight, O = d.anchorX, j = d.anchorY, k = function (q, F, Q, z) { var V = q ? F.width : Q, ne = q ? F.height : z; return r.isSafari() && q && (ne /= window.devicePixelRatio, V /= window.devicePixelRatio), { dragPreviewWidth: V, dragPreviewHeight: ne }; }(l, o, g, S), T = k.dragPreviewWidth, P = k.dragPreviewHeight, R = v.offsetX, K = v.offsetY, B = K === 0 || K; return { x: R === 0 || R ? R : new e.default([0, 0.5, 1], [s.x, s.x / g * T, s.x + T - g]).interpolate(O), y: B ? K : (p = new e.default([0, 0.5, 1], [s.y, s.y / S * P, s.y + P - S]).interpolate(j), r.isSafari() && l && (p += (window.devicePixelRatio - 1) * P), p) }; };
                }, function (m, a, n) { var r = n(7); m.exports = function (e, c) { var i = this.__data__, t = r(i, e); return t < 0 ? (++this.size, i.push([e, c])) : i[t][1] = c, this; }; }, function (m, a, n) { var r = n(7); m.exports = function (e) { return r(this.__data__, e) > -1; }; }, function (m, a, n) { var r = n(7); m.exports = function (e) { var c = this.__data__, i = r(c, e); return i < 0 ? void 0 : c[i][1]; }; }, function (m, a, n) { var r = n(7), e = Array.prototype.splice; m.exports = function (c) { var i = this.__data__, t = r(i, c); return !(t < 0 || (t == i.length - 1 ? i.pop() : e.call(i, t, 1), --this.size, 0)); }; }, function (m, a) { m.exports = function () { this.__data__ = [], this.size = 0; }; }, function (m, a, n) {
                    var r = n(71), e = n(70), c = n(69), i = n(68), t = n(67);
                    function o(u) {
                        var d = -1, v = u == null ? 0 : u.length;
                        for (this.clear(); ++d < v;) {
                            var b = u[d];
                            this.set(b[0], b[1]);
                        }
                    }
                    o.prototype.clear = r, o.prototype.delete = e, o.prototype.get = c, o.prototype.has = i, o.prototype.set = t, m.exports = o;
                }, function (m, a, n) {
                    var r = n(72), e = "Expected a function";
                    function c(i, t) {
                        if (typeof i != "function" || t != null && typeof t != "function")
                            throw new TypeError(e);
                        var o = function () {
                            var u = arguments, d = t ? t.apply(this, u) : u[0], v = o.cache;
                            if (v.has(d))
                                return v.get(d);
                            var b = i.apply(this, u);
                            return o.cache = v.set(d, b) || v, b;
                        };
                        return o.cache = new (c.Cache || r), o;
                    }
                    c.Cache = r, m.exports = c;
                }, function (m, a, n) { var r = n(34), e = n(6), c = n(33), i = n(10), t = e(function (o) { return c(r(o, 1, i, !0)); }); m.exports = t; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(74), e = n(39), c = function () { function i() { this.entered = []; } return i.prototype.enter = function (t) { var o = this.entered.length; return this.entered = r(this.entered.filter(function (u) { return document.documentElement.contains(u) && (!u.contains || u.contains(t)); }), [t]), o === 0 && this.entered.length > 0; }, i.prototype.leave = function (t) { var o = this.entered.length; return this.entered = e(this.entered.filter(function (u) { return document.documentElement.contains(u); }), t), o > 0 && this.entered.length === 0; }, i.prototype.reset = function () { this.entered = []; }, i; }();
                    a.default = c;
                }, function (m, a, n) {
                    "use strict";
                    var r = this && this.__decorate || function (p, l, h, s) {
                        var g, S = arguments.length, O = S < 3 ? l : s === null ? s = Object.getOwnPropertyDescriptor(l, h) : s;
                        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                            O = Reflect.decorate(p, l, h, s);
                        else
                            for (var j = p.length - 1; j >= 0; j--)
                                (g = p[j]) && (O = (S < 3 ? g(O) : S > 3 ? g(l, h, O) : g(l, h)) || O);
                        return S > 3 && O && Object.defineProperty(l, h, O), O;
                    };
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var e = n(75), c = n(27), i = n(66), t = n(64), o = n(13), u = n(63), d = n(62), v = n(59), b = function () {
                        function p(l) { this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.enterLeaveCounter = new e.default, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.currentDragSourceNodeOffset = null, this.currentDragSourceNodeOffsetChanged = !1, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.actions = l.getActions(), this.monitor = l.getMonitor(), this.registry = l.getRegistry(), this.context = l.getContext(); }
                        return Object.defineProperty(p.prototype, "window", { get: function () { return this.context && this.context.window ? this.context.window : typeof window != "undefined" ? window : void 0; }, enumerable: !0, configurable: !0 }), p.prototype.setup = function () {
                            if (this.window !== void 0) {
                                if (this.window.__isReactDndBackendSetUp)
                                    throw new Error("Cannot have two HTML5 backends at the same time.");
                                this.window.__isReactDndBackendSetUp = !0, this.addEventListeners(this.window);
                            }
                        }, p.prototype.teardown = function () { this.window !== void 0 && (this.window.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.window), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && this.window.cancelAnimationFrame(this.asyncEndDragFrameId)); }, p.prototype.connectDragPreview = function (l, h, s) { var g = this; return this.sourcePreviewNodeOptions.set(l, s), this.sourcePreviewNodes.set(l, h), function () { g.sourcePreviewNodes.delete(l), g.sourcePreviewNodeOptions.delete(l); }; }, p.prototype.connectDragSource = function (l, h, s) { var g = this; this.sourceNodes.set(l, h), this.sourceNodeOptions.set(l, s); var S = function (j) { return g.handleDragStart(j, l); }, O = function (j) { return g.handleSelectStart(j); }; return h.setAttribute("draggable", !0), h.addEventListener("dragstart", S), h.addEventListener("selectstart", O), function () { g.sourceNodes.delete(l), g.sourceNodeOptions.delete(l), h.removeEventListener("dragstart", S), h.removeEventListener("selectstart", O), h.setAttribute("draggable", !1); }; }, p.prototype.connectDropTarget = function (l, h) { var s = this, g = function (j) { return s.handleDragEnter(j, l); }, S = function (j) { return s.handleDragOver(j, l); }, O = function (j) { return s.handleDrop(j, l); }; return h.addEventListener("dragenter", g), h.addEventListener("dragover", S), h.addEventListener("drop", O), function () { h.removeEventListener("dragenter", g), h.removeEventListener("dragover", S), h.removeEventListener("drop", O); }; }, p.prototype.addEventListeners = function (l) { l.addEventListener && (l.addEventListener("dragstart", this.handleTopDragStart), l.addEventListener("dragstart", this.handleTopDragStartCapture, !0), l.addEventListener("dragend", this.handleTopDragEndCapture, !0), l.addEventListener("dragenter", this.handleTopDragEnter), l.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), l.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), l.addEventListener("dragover", this.handleTopDragOver), l.addEventListener("dragover", this.handleTopDragOverCapture, !0), l.addEventListener("drop", this.handleTopDrop), l.addEventListener("drop", this.handleTopDropCapture, !0)); }, p.prototype.removeEventListeners = function (l) { l.removeEventListener && (l.removeEventListener("dragstart", this.handleTopDragStart), l.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), l.removeEventListener("dragend", this.handleTopDragEndCapture, !0), l.removeEventListener("dragenter", this.handleTopDragEnter), l.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), l.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), l.removeEventListener("dragover", this.handleTopDragOver), l.removeEventListener("dragover", this.handleTopDragOverCapture, !0), l.removeEventListener("drop", this.handleTopDrop), l.removeEventListener("drop", this.handleTopDropCapture, !0)); }, p.prototype.getCurrentSourceNodeOptions = function () { var l = this.monitor.getSourceId(), h = this.sourceNodeOptions.get(l); return d(h || {}, { dropEffect: this.altKeyPressed ? "copy" : "move" }); }, p.prototype.getCurrentDropEffect = function () { return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect; }, p.prototype.getCurrentSourcePreviewNodeOptions = function () { var l = this.monitor.getSourceId(), h = this.sourcePreviewNodeOptions.get(l); return d(h || {}, { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 }); }, p.prototype.getSourceClientOffset = function (l) { return i.getNodeClientOffset(this.sourceNodes.get(l)); }, p.prototype.isDraggingNativeItem = function () { var l = this.monitor.getItemType(); return Object.keys(o).some(function (h) { return o[h] === l; }); }, p.prototype.beginDragNativeItem = function (l) { this.clearCurrentDragSourceNode(); var h = t.createNativeDragSource(l); this.currentNativeSource = new h, this.currentNativeHandle = this.registry.addSource(l, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]); }, p.prototype.endDragNativeItem = function () { this.isDraggingNativeItem() && (this.actions.endDrag(), this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null); }, p.prototype.isNodeInDocument = function (l) { return !!document && document.body.contains(l) || !!this.window && this.window.document.body.contains(l); }, p.prototype.endDragIfSourceWasRemovedFromDOM = function () { var l = this.currentDragSourceNode; this.isNodeInDocument(l) || this.clearCurrentDragSourceNode() && this.actions.endDrag(); }, p.prototype.setCurrentDragSourceNode = function (l) { var h = this; this.clearCurrentDragSourceNode(), this.currentDragSourceNode = l, this.currentDragSourceNodeOffset = i.getNodeClientOffset(l), this.currentDragSourceNodeOffsetChanged = !1, this.mouseMoveTimeoutTimer = setTimeout(function () { return h.window && h.window.addEventListener("mousemove", h.endDragIfSourceWasRemovedFromDOM, !0); }, 1000); }, p.prototype.clearCurrentDragSourceNode = function () { return !!this.currentDragSourceNode && (this.currentDragSourceNode = null, this.currentDragSourceNodeOffset = null, this.currentDragSourceNodeOffsetChanged = !1, this.window && (this.window.clearTimeout(this.mouseMoveTimeoutTimer), this.window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)), this.mouseMoveTimeoutTimer = null, !0); }, p.prototype.checkIfCurrentDragSourceRectChanged = function () { var l = this.currentDragSourceNode; return !!l && (!!this.currentDragSourceNodeOffsetChanged || (this.currentDragSourceNodeOffsetChanged = !v(i.getNodeClientOffset(l), this.currentDragSourceNodeOffset), this.currentDragSourceNodeOffsetChanged)); }, p.prototype.handleTopDragStartCapture = function () { this.clearCurrentDragSourceNode(), this.dragStartSourceIds = []; }, p.prototype.handleDragStart = function (l, h) { this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(h); }, p.prototype.handleTopDragStart = function (l) {
                            var h = this, s = this.dragStartSourceIds;
                            this.dragStartSourceIds = null;
                            var g = i.getEventClientOffset(l);
                            this.monitor.isDragging() && this.actions.endDrag(), this.actions.beginDrag(s || [], { publishSource: !1, getSourceClientOffset: this.getSourceClientOffset, clientOffset: g });
                            var S = l.dataTransfer, O = t.matchNativeItemType(S);
                            if (this.monitor.isDragging()) {
                                if (typeof S.setDragImage == "function") {
                                    var j = this.monitor.getSourceId(), k = this.sourceNodes.get(j), T = this.sourcePreviewNodes.get(j) || k, P = this.getCurrentSourcePreviewNodeOptions(), R = { anchorX: P.anchorX, anchorY: P.anchorY }, K = { offsetX: P.offsetX, offsetY: P.offsetY }, B = i.getDragPreviewOffset(k, T, g, R, K);
                                    S.setDragImage(T, B.x, B.y);
                                }
                                try {
                                    S.setData("application/json", {});
                                }
                                catch (q) { }
                                this.setCurrentDragSourceNode(l.target), this.getCurrentSourcePreviewNodeOptions().captureDraggingState ? this.actions.publishDragSource() : setTimeout(function () { return h.actions.publishDragSource(); }, 0);
                            }
                            else if (O)
                                this.beginDragNativeItem(O);
                            else {
                                if (!(S.types || l.target.hasAttribute && l.target.hasAttribute("draggable")))
                                    return;
                                l.preventDefault();
                            }
                        }, p.prototype.handleTopDragEndCapture = function () { this.clearCurrentDragSourceNode() && this.actions.endDrag(); }, p.prototype.handleTopDragEnterCapture = function (l) {
                            if (this.dragEnterTargetIds = [], this.enterLeaveCounter.enter(l.target) && !this.monitor.isDragging()) {
                                var h = l.dataTransfer, s = t.matchNativeItemType(h);
                                s && this.beginDragNativeItem(s);
                            }
                        }, p.prototype.handleDragEnter = function (l, h) { this.dragEnterTargetIds.unshift(h); }, p.prototype.handleTopDragEnter = function (l) { var h = this, s = this.dragEnterTargetIds; this.dragEnterTargetIds = [], this.monitor.isDragging() && (this.altKeyPressed = l.altKey, c.isFirefox() || this.actions.hover(s, { clientOffset: i.getEventClientOffset(l) }), s.some(function (g) { return h.monitor.canDropOnTarget(g); }) && (l.preventDefault(), l.dataTransfer.dropEffect = this.getCurrentDropEffect())); }, p.prototype.handleTopDragOverCapture = function () { this.dragOverTargetIds = []; }, p.prototype.handleDragOver = function (l, h) { this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(h); }, p.prototype.handleTopDragOver = function (l) {
                            var h = this, s = this.dragOverTargetIds;
                            if (this.dragOverTargetIds = [], !this.monitor.isDragging())
                                return l.preventDefault(), void (l.dataTransfer.dropEffect = "none");
                            this.altKeyPressed = l.altKey, this.actions.hover(s || [], { clientOffset: i.getEventClientOffset(l) }), (s || []).some(function (g) { return h.monitor.canDropOnTarget(g); }) ? (l.preventDefault(), l.dataTransfer.dropEffect = this.getCurrentDropEffect()) : this.isDraggingNativeItem() ? (l.preventDefault(), l.dataTransfer.dropEffect = "none") : this.checkIfCurrentDragSourceRectChanged() && (l.preventDefault(), l.dataTransfer.dropEffect = "move");
                        }, p.prototype.handleTopDragLeaveCapture = function (l) { this.isDraggingNativeItem() && l.preventDefault(), this.enterLeaveCounter.leave(l.target) && this.isDraggingNativeItem() && this.endDragNativeItem(); }, p.prototype.handleTopDropCapture = function (l) { this.dropTargetIds = [], l.preventDefault(), this.isDraggingNativeItem() && this.currentNativeSource.mutateItemByReadingDataTransfer(l.dataTransfer), this.enterLeaveCounter.reset(); }, p.prototype.handleDrop = function (l, h) { this.dropTargetIds.unshift(h); }, p.prototype.handleTopDrop = function (l) { var h = this.dropTargetIds; this.dropTargetIds = [], this.actions.hover(h, { clientOffset: i.getEventClientOffset(l) }), this.actions.drop({ dropEffect: this.getCurrentDropEffect() }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.endDragIfSourceWasRemovedFromDOM(); }, p.prototype.handleSelectStart = function (l) { var h = l.target; typeof h.dragDrop == "function" && (h.tagName === "INPUT" || h.tagName === "SELECT" || h.tagName === "TEXTAREA" || h.isContentEditable || (l.preventDefault(), h.dragDrop())); }, r([u.default], p.prototype, "getSourceClientOffset", null), r([u.default], p.prototype, "endDragNativeItem", null), r([u.default], p.prototype, "isNodeInDocument", null), r([u.default], p.prototype, "endDragIfSourceWasRemovedFromDOM", null), r([u.default], p.prototype, "handleTopDragStartCapture", null), r([u.default], p.prototype, "handleTopDragStart", null), r([u.default], p.prototype, "handleTopDragEndCapture", null), r([u.default], p.prototype, "handleTopDragEnterCapture", null), r([u.default], p.prototype, "handleTopDragEnter", null), r([u.default], p.prototype, "handleTopDragOverCapture", null), r([u.default], p.prototype, "handleTopDragOver", null), r([u.default], p.prototype, "handleTopDragLeaveCapture", null), r([u.default], p.prototype, "handleTopDropCapture", null), r([u.default], p.prototype, "handleTopDrop", null), r([u.default], p.prototype, "handleSelectStart", null), p;
                    }();
                    a.default = b;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (i) { var t = void 0, o = void 0, u = void 0, d = void 0; function v() { d && (d(), d = null), t && o && (d = i.connectDropTarget(t, o, u)); } return { receiveHandlerId: function (b) { b !== t && (t = b, v()); }, hooks: (0, r.default)({ dropTarget: function (b, p) { b === o && (0, e.default)(p, u) || (o = b, u = p, v()); } }) }; };
                    var r = c(n(30)), e = c(n(29));
                    function c(i) { return i && i.__esModule ? i : { default: i }; }
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function o(u, d) {
                            for (var v = 0; v < d.length; v++) {
                                var b = d[v];
                                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(u, b.key, b);
                            }
                        }
                        return function (u, d, v) { return d && o(u.prototype, d), v && o(u, v), u; };
                    }();
                    a.default = function (o) { return new t(o); };
                    var e, c = (e = n(2)) && e.__esModule ? e : { default: e }, i = !1, t = function () {
                        function o(u) {
                            (function (d, v) {
                                if (!(d instanceof o))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.internalMonitor = u.getMonitor();
                        }
                        return r(o, [{ key: "receiveHandlerId", value: function (u) { this.targetId = u; } }, { key: "canDrop", value: function () {
                                    (0, c.default)(!i, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html");
                                    try {
                                        return i = !0, this.internalMonitor.canDropOnTarget(this.targetId);
                                    }
                                    finally {
                                        i = !1;
                                    }
                                } }, { key: "isOver", value: function (u) { return this.internalMonitor.isOverTarget(this.targetId, u); } }, { key: "getItemType", value: function () { return this.internalMonitor.getItemType(); } }, { key: "getItem", value: function () { return this.internalMonitor.getItem(); } }, { key: "getDropResult", value: function () { return this.internalMonitor.getDropResult(); } }, { key: "didDrop", value: function () { return this.internalMonitor.didDrop(); } }, { key: "getInitialClientOffset", value: function () { return this.internalMonitor.getInitialClientOffset(); } }, { key: "getInitialSourceClientOffset", value: function () { return this.internalMonitor.getInitialSourceClientOffset(); } }, { key: "getSourceClientOffset", value: function () { return this.internalMonitor.getSourceClientOffset(); } }, { key: "getClientOffset", value: function () { return this.internalMonitor.getClientOffset(); } }, { key: "getDifferenceFromInitialOffset", value: function () { return this.internalMonitor.getDifferenceFromInitialOffset(); } }]), o;
                    }();
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function t(o, u) {
                            for (var d = 0; d < u.length; d++) {
                                var v = u[d];
                                v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(o, v.key, v);
                            }
                        }
                        return function (o, u, d) { return u && t(o.prototype, u), d && t(o, d), o; };
                    }();
                    a.default = function (t) {
                        Object.keys(t).forEach(function (u) { (0, e.default)(i.indexOf(u) > -1, "Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected \"%s\" key. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", i.join(", "), u), (0, e.default)(typeof t[u] == "function", "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", u, u, t[u]); });
                        var o = function () {
                            function u(d) {
                                (function (v, b) {
                                    if (!(v instanceof u))
                                        throw new TypeError("Cannot call a class as a function");
                                })(this), this.monitor = d, this.props = null, this.component = null;
                            }
                            return r(u, [{ key: "receiveProps", value: function (d) { this.props = d; } }, { key: "receiveMonitor", value: function (d) { this.monitor = d; } }, { key: "receiveComponent", value: function (d) { this.component = d; } }, { key: "canDrop", value: function () { return !t.canDrop || t.canDrop(this.props, this.monitor); } }, { key: "hover", value: function () { t.hover && t.hover(this.props, this.monitor, this.component); } }, { key: "drop", value: function () {
                                        if (t.drop)
                                            return t.drop(this.props, this.monitor, this.component);
                                    } }]), u;
                        }();
                        return function (u) { return new o(u); };
                    };
                    var e = c(n(2));
                    function c(t) { return t && t.__esModule ? t : { default: t }; }
                    c(n(5));
                    var i = ["canDrop", "hover", "drop"];
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r, e, c) { var i = c.getRegistry(), t = i.addTarget(r, e); return { handlerId: t, unregister: function () { i.removeTarget(t); } }; };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (p, l, h) { var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; c.default.apply(void 0, ["DropTarget", "type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments))); var g = p; typeof p != "function" && ((0, r.default)((0, v.default)(p, !0), "Expected \"type\" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", p), g = function () { return p; }), (0, r.default)((0, e.default)(l), "Expected \"spec\" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", l); var S = (0, o.default)(l); return (0, r.default)(typeof h == "function", "Expected \"collect\" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", h), (0, r.default)((0, e.default)(s), "Expected \"options\" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", h), function (O) { return (0, i.default)({ connectBackend: function (j, k) { return j.connectDropTarget(k); }, containerDisplayName: "DropTarget", createHandler: S, registerHandler: t.default, createMonitor: u.default, createConnector: d.default, DecoratedComponent: O, getType: g, collect: h, options: s }); }; };
                    var r = b(n(2)), e = b(n(5)), c = b(n(8)), i = b(n(31)), t = b(n(80)), o = b(n(79)), u = b(n(78)), d = b(n(77)), v = b(n(28));
                    function b(p) { return p && p.__esModule ? p : { default: p }; }
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (i, t) { var o = i.ref; return (0, e.default)(typeof o != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"), o ? (0, c.cloneElement)(i, { ref: function (u) { t(u), o && o(u); } }) : (0, c.cloneElement)(i, { ref: t }); };
                    var r, e = (r = n(2)) && r.__esModule ? r : { default: r }, c = n(0);
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (i) { var t = void 0, o = void 0, u = void 0, d = void 0, v = void 0, b = void 0, p = void 0; function l() { d && (d(), d = null), t && o && (d = i.connectDragSource(t, o, u)); } function h() { p && (p(), p = null), t && v && (p = i.connectDragPreview(t, v, b)); } return { receiveHandlerId: function (s) { s !== t && (t = s, l(), h()); }, hooks: (0, r.default)({ dragSource: function (s, g) { s === o && (0, e.default)(g, u) || (o = s, u = g, l()); }, dragPreview: function (s, g) { s === v && (0, e.default)(g, b) || (v = s, b = g, h()); } }) }; };
                    var r = c(n(30)), e = c(n(29));
                    function c(i) { return i && i.__esModule ? i : { default: i }; }
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function u(d, v) {
                            for (var b = 0; b < v.length; b++) {
                                var p = v[b];
                                p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
                            }
                        }
                        return function (d, v, b) { return v && u(d.prototype, v), b && u(d, b), d; };
                    }();
                    a.default = function (u) { return new o(u); };
                    var e, c = (e = n(2)) && e.__esModule ? e : { default: e }, i = !1, t = !1, o = function () {
                        function u(d) {
                            (function (v, b) {
                                if (!(v instanceof u))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.internalMonitor = d.getMonitor();
                        }
                        return r(u, [{ key: "receiveHandlerId", value: function (d) { this.sourceId = d; } }, { key: "canDrag", value: function () {
                                    (0, c.default)(!i, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");
                                    try {
                                        return i = !0, this.internalMonitor.canDragSource(this.sourceId);
                                    }
                                    finally {
                                        i = !1;
                                    }
                                } }, { key: "isDragging", value: function () {
                                    (0, c.default)(!t, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");
                                    try {
                                        return t = !0, this.internalMonitor.isDraggingSource(this.sourceId);
                                    }
                                    finally {
                                        t = !1;
                                    }
                                } }, { key: "getItemType", value: function () { return this.internalMonitor.getItemType(); } }, { key: "getItem", value: function () { return this.internalMonitor.getItem(); } }, { key: "getDropResult", value: function () { return this.internalMonitor.getDropResult(); } }, { key: "didDrop", value: function () { return this.internalMonitor.didDrop(); } }, { key: "getInitialClientOffset", value: function () { return this.internalMonitor.getInitialClientOffset(); } }, { key: "getInitialSourceClientOffset", value: function () { return this.internalMonitor.getInitialSourceClientOffset(); } }, { key: "getSourceClientOffset", value: function () { return this.internalMonitor.getSourceClientOffset(); } }, { key: "getClientOffset", value: function () { return this.internalMonitor.getClientOffset(); } }, { key: "getDifferenceFromInitialOffset", value: function () { return this.internalMonitor.getDifferenceFromInitialOffset(); } }]), u;
                    }();
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function o(u, d) {
                            for (var v = 0; v < d.length; v++) {
                                var b = d[v];
                                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(u, b.key, b);
                            }
                        }
                        return function (u, d, v) { return d && o(u.prototype, d), v && o(u, v), u; };
                    }();
                    a.default = function (o) {
                        Object.keys(o).forEach(function (d) { (0, e.default)(i.indexOf(d) > -1, "Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected \"%s\" key. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", i.join(", "), d), (0, e.default)(typeof o[d] == "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", d, d, o[d]); }), t.forEach(function (d) { (0, e.default)(typeof o[d] == "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", d, d, o[d]); });
                        var u = function () {
                            function d(v) {
                                (function (b, p) {
                                    if (!(b instanceof d))
                                        throw new TypeError("Cannot call a class as a function");
                                })(this), this.monitor = v, this.props = null, this.component = null;
                            }
                            return r(d, [{ key: "receiveProps", value: function (v) { this.props = v; } }, { key: "receiveComponent", value: function (v) { this.component = v; } }, { key: "canDrag", value: function () { return !o.canDrag || o.canDrag(this.props, this.monitor); } }, { key: "isDragging", value: function (v, b) { return o.isDragging ? o.isDragging(this.props, this.monitor) : b === v.getSourceId(); } }, { key: "beginDrag", value: function () { return o.beginDrag(this.props, this.monitor, this.component); } }, { key: "endDrag", value: function () { o.endDrag && o.endDrag(this.props, this.monitor, this.component); } }]), d;
                        }();
                        return function (d) { return new u(d); };
                    };
                    var e = c(n(2));
                    function c(o) { return o && o.__esModule ? o : { default: o }; }
                    c(n(5));
                    var i = ["canDrag", "beginDrag", "isDragging", "endDrag"], t = ["beginDrag"];
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (r, e, c) { var i = c.getRegistry(), t = i.addSource(r, e); return { handlerId: t, unregister: function () { i.removeSource(t); } }; };
                }, function (m, a, n) {
                    "use strict";
                    a.__esModule = !0;
                    var r, e = (r = n(14)) && r.__esModule ? r : { default: r }, c = function () {
                        function i() {
                            (function (t, o) {
                                if (!(t instanceof i))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.isDisposed = !1, this.current = null;
                        }
                        return i.prototype.getDisposable = function () { return this.current; }, i.prototype.setDisposable = function () {
                            var t = arguments.length <= 0 || arguments[0] === void 0 ? null : arguments[0];
                            if (t != null && !e.default(t))
                                throw new Error("Expected either an empty value or a valid disposable");
                            var o = this.isDisposed, u = void 0;
                            o || (u = this.current, this.current = t), u && u.dispose(), o && t && t.dispose();
                        }, i.prototype.dispose = function () {
                            if (!this.isDisposed) {
                                this.isDisposed = !0;
                                var t = this.current;
                                this.current = null, t && t.dispose();
                            }
                        }, i;
                    }();
                    a.default = c, m.exports = a.default;
                }, function (m, a, n) {
                    "use strict";
                    a.__esModule = !0;
                    var r, e = (r = n(14)) && r.__esModule ? r : { default: r }, c = function () {
                        function i() {
                            for (var t = arguments.length, o = Array(t), u = 0; u < t; u++)
                                o[u] = arguments[u];
                            (function (v, b) {
                                if (!(v instanceof i))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), Array.isArray(o[0]) && o.length === 1 && (o = o[0]);
                            for (var d = 0; d < o.length; d++)
                                if (!e.default(o[d]))
                                    throw new Error("Expected a disposable");
                            this.disposables = o, this.isDisposed = !1;
                        }
                        return i.prototype.add = function (t) { this.isDisposed ? t.dispose() : this.disposables.push(t); }, i.prototype.remove = function (t) {
                            if (this.isDisposed)
                                return !1;
                            var o = this.disposables.indexOf(t);
                            return o !== -1 && (this.disposables.splice(o, 1), t.dispose(), !0);
                        }, i.prototype.dispose = function () {
                            if (!this.isDisposed) {
                                for (var t = this.disposables.length, o = new Array(t), u = 0; u < t; u++)
                                    o[u] = this.disposables[u];
                                for (this.isDisposed = !0, this.disposables = [], this.length = 0, u = 0; u < t; u++)
                                    o[u].dispose();
                            }
                        }, i;
                    }();
                    a.default = c, m.exports = a.default;
                }, function (m, a, n) {
                    "use strict";
                    a.__esModule = !0;
                    var r = function () {
                        function i(t, o) {
                            for (var u = 0; u < o.length; u++) {
                                var d = o[u];
                                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(t, d.key, d);
                            }
                        }
                        return function (t, o, u) { return o && i(t.prototype, o), u && i(t, u), t; };
                    }(), e = function () { }, c = function () {
                        function i(t) {
                            (function (o, u) {
                                if (!(o instanceof i))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.isDisposed = !1, this.action = t || e;
                        }
                        return r(i, null, [{ key: "empty", value: { dispose: e }, enumerable: !0 }]), i.prototype.dispose = function () { this.isDisposed || (this.action.call(null), this.isDisposed = !0); }, i;
                    }();
                    a.default = c, m.exports = a.default;
                }, function (m, a, n) {
                    "use strict";
                    function r(o) { return o && o.__esModule ? o : { default: o }; }
                    a.__esModule = !0;
                    var e = r(n(14));
                    a.isDisposable = e.default;
                    var c = r(n(89));
                    a.Disposable = c.default;
                    var i = r(n(88));
                    a.CompositeDisposable = i.default;
                    var t = r(n(87));
                    a.SerialDisposable = t.default;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function (p, l, h) { var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; c.default.apply(void 0, ["DragSource", "type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments))); var g = p; typeof p != "function" && ((0, r.default)((0, v.default)(p), "Expected \"type\" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", p), g = function () { return p; }), (0, r.default)((0, e.default)(l), "Expected \"spec\" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", l); var S = (0, o.default)(l); return (0, r.default)(typeof h == "function", "Expected \"collect\" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", h), (0, r.default)((0, e.default)(s), "Expected \"options\" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", h), function (O) { return (0, i.default)({ connectBackend: function (j, k) { return j.connectDragSource(k); }, containerDisplayName: "DragSource", createHandler: S, registerHandler: t.default, createMonitor: u.default, createConnector: d.default, DecoratedComponent: O, getType: g, collect: h, options: s }); }; };
                    var r = b(n(2)), e = b(n(5)), c = b(n(8)), i = b(n(31)), t = b(n(86)), o = b(n(85)), u = b(n(84)), d = b(n(83)), v = b(n(28));
                    function b(p) { return p && p.__esModule ? p : { default: p }; }
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = Object.assign || function (s) {
                        for (var g = 1; g < arguments.length; g++) {
                            var S = arguments[g];
                            for (var O in S)
                                Object.prototype.hasOwnProperty.call(S, O) && (s[O] = S[O]);
                        }
                        return s;
                    }, e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) { return typeof s; } : function (s) { return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s; }, c = function () {
                        function s(g, S) {
                            for (var O = 0; O < S.length; O++) {
                                var j = S[O];
                                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                            }
                        }
                        return function (g, S, O) { return S && s(g.prototype, S), O && s(g, O), g; };
                    }();
                    a.default = function (s) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        return l.default.apply(void 0, ["DragLayer", "collect[, options]"].concat(Array.prototype.slice.call(arguments))), (0, v.default)(typeof s == "function", "Expected \"collect\" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ", "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html", s), (0, v.default)((0, d.default)(g), "Expected \"options\" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html", g), function (S) {
                            var O, j, k = g.arePropsEqual, T = k === void 0 ? p.default : k, P = S.displayName || S.name || "Component", R = (j = O = function (K) {
                                function B(q, F) {
                                    (function (z, V) {
                                        if (!(z instanceof B))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this);
                                    var Q = function (z, V) {
                                        if (!z)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !V || typeof V != "object" && typeof V != "function" ? z : V;
                                    }(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, q));
                                    return Q.handleChange = Q.handleChange.bind(Q), Q.manager = F.dragDropManager, (0, v.default)(e(Q.manager) === "object", "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", P, P), Q.state = Q.getCurrentState(), Q;
                                }
                                return function (q, F) {
                                    if (typeof F != "function" && F !== null)
                                        throw new TypeError("Super expression must either be null or a function, not " + typeof F);
                                    q.prototype = Object.create(F && F.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), F && (Object.setPrototypeOf ? Object.setPrototypeOf(q, F) : q.__proto__ = F);
                                }(B, i.Component), c(B, [{ key: "getDecoratedComponentInstance", value: function () { return (0, v.default)(this.child, "In order to access an instance of the decorated component it can not be a stateless component."), this.child; } }, { key: "shouldComponentUpdate", value: function (q, F) { return !T(q, this.props) || !(0, b.default)(F, this.state); } }]), c(B, [{ key: "componentDidMount", value: function () { this.isCurrentlyMounted = !0; var q = this.manager.getMonitor(); this.unsubscribeFromOffsetChange = q.subscribeToOffsetChange(this.handleChange), this.unsubscribeFromStateChange = q.subscribeToStateChange(this.handleChange), this.handleChange(); } }, { key: "componentWillUnmount", value: function () { this.isCurrentlyMounted = !1, this.unsubscribeFromOffsetChange(), this.unsubscribeFromStateChange(); } }, { key: "handleChange", value: function () {
                                            if (this.isCurrentlyMounted) {
                                                var q = this.getCurrentState();
                                                (0, b.default)(q, this.state) || this.setState(q);
                                            }
                                        } }, { key: "getCurrentState", value: function () { var q = this.manager.getMonitor(); return s(q, this.props); } }, { key: "render", value: function () { var q = this; return t.default.createElement(S, r({}, this.props, this.state, { ref: function (F) { q.child = F; } })); } }]), B;
                            }(), O.DecoratedComponent = S, O.displayName = "DragLayer(" + P + ")", O.contextTypes = { dragDropManager: o.default.object.isRequired }, j);
                            return (0, u.default)(R, S);
                        };
                    };
                    var i = n(0), t = h(i), o = h(n(1)), u = h(n(16)), d = h(n(5)), v = h(n(2)), b = h(n(15)), p = h(n(32)), l = h(n(8));
                    function h(s) { return s && s.__esModule ? s : { default: s }; }
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0;
                    var r, e, c, i = function () {
                        function v(b, p) {
                            for (var l = 0; l < p.length; l++) {
                                var h = p[l];
                                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(b, h.key, h);
                            }
                        }
                        return function (b, p, l) { return p && v(b.prototype, p), l && v(b, l), b; };
                    }(), t = n(0), o = (c = n(1)) && c.__esModule ? c : { default: c }, u = n(45), d = (e = r = function (v) {
                        function b(p, l) {
                            (function (s, g) {
                                if (!(s instanceof b))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            var h = function (s, g) {
                                if (!s)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !g || typeof g != "object" && typeof g != "function" ? s : g;
                            }(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, p, l));
                            return h.backend = (0, u.unpackBackendForEs5Users)(p.backend), h.childContext = (0, u.createChildContext)(h.backend, { window: p && p.window ? p.window : l && l.window ? l.window : typeof window != "undefined" ? window : void 0 }), h;
                        }
                        return function (p, l) {
                            if (typeof l != "function" && l !== null)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof l);
                            p.prototype = Object.create(l && l.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(p, l) : p.__proto__ = l);
                        }(b, t.Component), i(b, [{ key: "componentWillReceiveProps", value: function (p) {
                                    if (p.backend !== this.props.backend || p.window !== this.props.window)
                                        throw new Error("DragDropContextProvider backend and window props must not change.");
                                } }, { key: "getChildContext", value: function () { return this.childContext; } }, { key: "render", value: function () { return t.Children.only(this.props.children); } }]), b;
                    }(), r.propTypes = { backend: o.default.oneOfType([o.default.func, o.default.object]).isRequired, children: o.default.element.isRequired, window: o.default.object }, r.defaultProps = { window: void 0 }, r.childContextTypes = u.CHILD_CONTEXT_TYPES, r.displayName = "DragDropContextProvider", r.contextTypes = { window: o.default.object }, e);
                    a.default = d;
                }, function (m, a) { m.exports = function () { }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function t(o, u) {
                            for (var d = 0; d < u.length; d++) {
                                var v = u[d];
                                v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(o, v.key, v);
                            }
                        }
                        return function (o, u, d) { return u && t(o.prototype, u), d && t(o, d), o; };
                    }();
                    a.default = function (t) { return new i(t); };
                    var e, c = (e = n(94)) && e.__esModule ? e : { default: e }, i = function () {
                        function t(o) {
                            (function (u, d) {
                                if (!(u instanceof t))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.actions = o.getActions();
                        }
                        return r(t, [{ key: "setup", value: function () { this.didCallSetup = !0; } }, { key: "teardown", value: function () { this.didCallTeardown = !0; } }, { key: "connectDragSource", value: function () { return c.default; } }, { key: "connectDragPreview", value: function () { return c.default; } }, { key: "connectDropTarget", value: function () { return c.default; } }, { key: "simulateBeginDrag", value: function (o, u) { this.actions.beginDrag(o, u); } }, { key: "simulatePublishDragSource", value: function () { this.actions.publishDragSource(); } }, { key: "simulateHover", value: function (o, u) { this.actions.hover(o, u); } }, { key: "simulateDrop", value: function () { this.actions.drop(); } }, { key: "simulateEndDrag", value: function () { this.actions.endDrag(); } }]), t;
                    }();
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function c(i, t) {
                            for (var o = 0; o < t.length; o++) {
                                var u = t[o];
                                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(i, u.key, u);
                            }
                        }
                        return function (i, t, o) { return t && c(i.prototype, t), o && c(i, o), i; };
                    }(), e = function () {
                        function c() {
                            (function (i, t) {
                                if (!(i instanceof c))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                        }
                        return r(c, [{ key: "canDrop", value: function () { return !0; } }, { key: "hover", value: function () { } }, { key: "drop", value: function () { } }]), c;
                    }();
                    a.default = e;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function c(i, t) {
                            for (var o = 0; o < t.length; o++) {
                                var u = t[o];
                                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(i, u.key, u);
                            }
                        }
                        return function (i, t, o) { return t && c(i.prototype, t), o && c(i, o), i; };
                    }(), e = function () {
                        function c() {
                            (function (i, t) {
                                if (!(i instanceof c))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                        }
                        return r(c, [{ key: "canDrag", value: function () { return !0; } }, { key: "isDragging", value: function (i, t) { return t === i.getSourceId(); } }, { key: "endDrag", value: function () { } }]), c;
                    }();
                    a.default = e;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () { return r++; };
                    var r = 0;
                }, function (m, a, n) {
                    "use strict";
                    (function (r) {
                        function e(s) { i.length || c(), i[i.length] = s; }
                        m.exports = e;
                        var c, i = [], t = 0, o = 1024;
                        function u() {
                            for (; t < i.length;) {
                                var s = t;
                                if (t += 1, i[s].call(), t > o) {
                                    for (var g = 0, S = i.length - t; g < S; g++)
                                        i[g] = i[g + t];
                                    i.length -= t, t = 0;
                                }
                            }
                            i.length = 0, t = 0;
                        }
                        var d, v, b, p = r !== void 0 ? r : self, l = p.MutationObserver || p.WebKitMutationObserver;
                        function h(s) { return function () { var g = setTimeout(O, 0), S = setInterval(O, 50); function O() { clearTimeout(g), clearInterval(S), s(); } }; }
                        typeof l == "function" ? (d = 1, v = new l(u), b = document.createTextNode(""), v.observe(b, { characterData: !0 }), c = function () { d = -d, b.data = d; }) : c = h(u), e.requestFlush = c, e.makeRequestCallFromTimer = h;
                    }).call(this, n(12));
                }, function (m, a, n) {
                    "use strict";
                    var r = n(99), e = [], c = [], i = r.makeRequestCallFromTimer(function () {
                        if (c.length)
                            throw c.shift();
                    });
                    function t(u) { var d; (d = e.length ? e.pop() : new o).task = u, r(d); }
                    function o() { this.task = null; }
                    m.exports = t, o.prototype.call = function () {
                        try {
                            this.task.call();
                        }
                        catch (u) {
                            t.onerror ? t.onerror(u) : (c.push(u), i());
                        }
                        finally {
                            this.task = null, e[e.length] = this;
                        }
                    };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function h(s, g) {
                            for (var S = 0; S < g.length; S++) {
                                var O = g[S];
                                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(s, O.key, O);
                            }
                        }
                        return function (s, g, S) { return g && h(s.prototype, g), S && h(s, S), s; };
                    }(), e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (h) { return typeof h; } : function (h) { return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h; }, c = d(n(2)), i = d(n(4)), t = d(n(100)), o = n(9), u = d(n(98));
                    function d(h) { return h && h.__esModule ? h : { default: h }; }
                    var v = { SOURCE: "SOURCE", TARGET: "TARGET" };
                    function b(h, s) { s && (0, i.default)(h) ? h.forEach(function (g) { return b(g, !1); }) : (0, c.default)(typeof h == "string" || (h === void 0 ? "undefined" : e(h)) === "symbol", s ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol."); }
                    function p(h) {
                        switch (h[0]) {
                            case "S": return v.SOURCE;
                            case "T": return v.TARGET;
                            default: (0, c.default)(!1, "Cannot parse handler ID: " + h);
                        }
                    }
                    var l = function () {
                        function h(s) {
                            (function (g, S) {
                                if (!(g instanceof h))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.store = s, this.types = {}, this.handlers = {}, this.pinnedSourceId = null, this.pinnedSource = null;
                        }
                        return r(h, [{ key: "addSource", value: function (s, g) { b(s), function (O) { (0, c.default)(typeof O.canDrag == "function", "Expected canDrag to be a function."), (0, c.default)(typeof O.beginDrag == "function", "Expected beginDrag to be a function."), (0, c.default)(typeof O.endDrag == "function", "Expected endDrag to be a function."); }(g); var S = this.addHandler(v.SOURCE, s, g); return this.store.dispatch((0, o.addSource)(S)), S; } }, { key: "addTarget", value: function (s, g) { b(s, !0), function (O) { (0, c.default)(typeof O.canDrop == "function", "Expected canDrop to be a function."), (0, c.default)(typeof O.hover == "function", "Expected hover to be a function."), (0, c.default)(typeof O.drop == "function", "Expected beginDrag to be a function."); }(g); var S = this.addHandler(v.TARGET, s, g); return this.store.dispatch((0, o.addTarget)(S)), S; } }, { key: "addHandler", value: function (s, g, S) {
                                    var O = function (j) {
                                        var k = (0, u.default)().toString();
                                        switch (j) {
                                            case v.SOURCE: return "S" + k;
                                            case v.TARGET: return "T" + k;
                                            default: (0, c.default)(!1, "Unknown role: " + j);
                                        }
                                    }(s);
                                    return this.types[O] = g, this.handlers[O] = S, O;
                                } }, { key: "containsHandler", value: function (s) { var g = this; return Object.keys(this.handlers).some(function (S) { return g.handlers[S] === s; }); } }, { key: "getSource", value: function (s, g) { return (0, c.default)(this.isSourceId(s), "Expected a valid source ID."), g && s === this.pinnedSourceId ? this.pinnedSource : this.handlers[s]; } }, { key: "getTarget", value: function (s) { return (0, c.default)(this.isTargetId(s), "Expected a valid target ID."), this.handlers[s]; } }, { key: "getSourceType", value: function (s) { return (0, c.default)(this.isSourceId(s), "Expected a valid source ID."), this.types[s]; } }, { key: "getTargetType", value: function (s) { return (0, c.default)(this.isTargetId(s), "Expected a valid target ID."), this.types[s]; } }, { key: "isSourceId", value: function (s) { return p(s) === v.SOURCE; } }, { key: "isTargetId", value: function (s) { return p(s) === v.TARGET; } }, { key: "removeSource", value: function (s) { var g = this; (0, c.default)(this.getSource(s), "Expected an existing source."), this.store.dispatch((0, o.removeSource)(s)), (0, t.default)(function () { delete g.handlers[s], delete g.types[s]; }); } }, { key: "removeTarget", value: function (s) { var g = this; (0, c.default)(this.getTarget(s), "Expected an existing target."), this.store.dispatch((0, o.removeTarget)(s)), (0, t.default)(function () { delete g.handlers[s], delete g.types[s]; }); } }, { key: "pinSource", value: function (s) { var g = this.getSource(s); (0, c.default)(g, "Expected an existing source."), this.pinnedSourceId = s, this.pinnedSource = g; } }, { key: "unpinSource", value: function () { (0, c.default)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null; } }]), h;
                    }();
                    a.default = l;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function b(p, l) {
                            for (var h = 0; h < l.length; h++) {
                                var s = l[h];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(p, s.key, s);
                            }
                        }
                        return function (p, l, h) { return l && b(p.prototype, l), h && b(p, h), p; };
                    }(), e = d(n(2)), c = d(n(4)), i = d(n(40)), t = d(n(101)), o = n(42), u = n(35);
                    function d(b) { return b && b.__esModule ? b : { default: b }; }
                    var v = function () {
                        function b(p) {
                            (function (l, h) {
                                if (!(l instanceof b))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this), this.store = p, this.registry = new t.default(p);
                        }
                        return r(b, [{ key: "subscribeToStateChange", value: function (p) {
                                    var l = this, h = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).handlerIds;
                                    (0, e.default)(typeof p == "function", "listener must be a function."), (0, e.default)(h === void 0 || (0, c.default)(h), "handlerIds, when specified, must be an array of strings.");
                                    var s = this.store.getState().stateId;
                                    return this.store.subscribe(function () {
                                        var g = l.store.getState(), S = g.stateId;
                                        try {
                                            S === s || S === s + 1 && !(0, u.areDirty)(g.dirtyHandlerIds, h) || p();
                                        }
                                        finally {
                                            s = S;
                                        }
                                    });
                                } }, { key: "subscribeToOffsetChange", value: function (p) { var l = this; (0, e.default)(typeof p == "function", "listener must be a function."); var h = this.store.getState().dragOffset; return this.store.subscribe(function () { var s = l.store.getState().dragOffset; s !== h && (h = s, p()); }); } }, { key: "canDragSource", value: function (p) { var l = this.registry.getSource(p); return (0, e.default)(l, "Expected to find a valid source."), !this.isDragging() && l.canDrag(this, p); } }, { key: "canDropOnTarget", value: function (p) {
                                    var l = this.registry.getTarget(p);
                                    if ((0, e.default)(l, "Expected to find a valid target."), !this.isDragging() || this.didDrop())
                                        return !1;
                                    var h = this.registry.getTargetType(p), s = this.getItemType();
                                    return (0, i.default)(h, s) && l.canDrop(this, p);
                                } }, { key: "isDragging", value: function () { return Boolean(this.getItemType()); } }, { key: "isDraggingSource", value: function (p) { var l = this.registry.getSource(p, !0); return (0, e.default)(l, "Expected to find a valid source."), !(!this.isDragging() || !this.isSourcePublic()) && this.registry.getSourceType(p) === this.getItemType() && l.isDragging(this, p); } }, { key: "isOverTarget", value: function (p) {
                                    var l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { shallow: !1 }).shallow;
                                    if (!this.isDragging())
                                        return !1;
                                    var h = this.registry.getTargetType(p), s = this.getItemType();
                                    if (!(0, i.default)(h, s))
                                        return !1;
                                    var g = this.getTargetIds();
                                    if (!g.length)
                                        return !1;
                                    var S = g.indexOf(p);
                                    return l ? S === g.length - 1 : S > -1;
                                } }, { key: "getItemType", value: function () { return this.store.getState().dragOperation.itemType; } }, { key: "getItem", value: function () { return this.store.getState().dragOperation.item; } }, { key: "getSourceId", value: function () { return this.store.getState().dragOperation.sourceId; } }, { key: "getTargetIds", value: function () { return this.store.getState().dragOperation.targetIds; } }, { key: "getDropResult", value: function () { return this.store.getState().dragOperation.dropResult; } }, { key: "didDrop", value: function () { return this.store.getState().dragOperation.didDrop; } }, { key: "isSourcePublic", value: function () { return this.store.getState().dragOperation.isSourcePublic; } }, { key: "getInitialClientOffset", value: function () { return this.store.getState().dragOffset.initialClientOffset; } }, { key: "getInitialSourceClientOffset", value: function () { return this.store.getState().dragOffset.initialSourceClientOffset; } }, { key: "getClientOffset", value: function () { return this.store.getState().dragOffset.clientOffset; } }, { key: "getSourceClientOffset", value: function () { return (0, o.getSourceClientOffset)(this.store.getState().dragOffset); } }, { key: "getDifferenceFromInitialOffset", value: function () { return (0, o.getDifferenceFromInitialOffset)(this.store.getState().dragOffset); } }]), b;
                    }();
                    a.default = v;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () { return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0) + 1; };
                }, function (m, a, n) { var r = n(10); m.exports = function (e) { return r(e) ? e : []; }; }, function (m, a, n) {
                    var r = n(21), e = n(20), c = n(19), i = n(18), t = n(36), o = n(17), u = Math.min;
                    m.exports = function (d, v, b) {
                        for (var p = b ? c : e, l = d[0].length, h = d.length, s = h, g = Array(h), S = 1 / 0, O = []; s--;) {
                            var j = d[s];
                            s && v && (j = i(j, t(v))), S = u(j.length, S), g[s] = !b && (v || l >= 120 && j.length >= 120) ? new r(s && j) : void 0;
                        }
                        j = d[0];
                        var k = -1, T = g[0];
                        e: for (; ++k < l && O.length < S;) {
                            var P = j[k], R = v ? v(P) : P;
                            if (P = b || P !== 0 ? P : 0, !(T ? o(T, R) : p(O, R, b))) {
                                for (s = h; --s;) {
                                    var K = g[s];
                                    if (!(K ? o(K, R) : p(d[s], R, b)))
                                        continue e;
                                }
                                T && T.push(R), O.push(P);
                            }
                        }
                        return O;
                    };
                }, function (m, a, n) { var r = n(18), e = n(105), c = n(6), i = n(104), t = c(function (o) { var u = r(o, i); return u.length && u[0] === o[0] ? e(u) : []; }); m.exports = t; }, function (m, a) { m.exports = function () { return []; }; }, function (m, a) { m.exports = function () { }; }, function (m, a) { m.exports = function () { return !1; }; }, function (m, a, n) { (function (r) { var e = typeof r == "object" && r && r.Object === Object && r; m.exports = e; }).call(this, n(12)); }, function (m, a, n) { var r = n(110), e = typeof self == "object" && self && self.Object === Object && self, c = r || e || Function("return this")(); m.exports = c; }, function (m, a, n) { var r = n(111).Symbol; m.exports = r; }, function (m, a, n) { var r = n(112), e = n(109), c = n(4), i = r ? r.isConcatSpreadable : void 0; m.exports = function (t) { return c(t) || e(t) || !!(i && t && t[i]); }; }, function (m, a) {
                    m.exports = function (n, r) {
                        for (var e = -1, c = r.length, i = n.length; ++e < c;)
                            n[i + e] = r[e];
                        return n;
                    };
                }, function (m, a, n) {
                    var r = n(38), e = n(34), c = n(33);
                    m.exports = function (i, t, o) {
                        var u = i.length;
                        if (u < 2)
                            return u ? c(i[0]) : [];
                        for (var d = -1, v = Array(u); ++d < u;)
                            for (var b = i[d], p = -1; ++p < u;)
                                p != d && (v[d] = r(v[d] || b, i[p], t, o));
                        return c(e(v, 1), t, o);
                    };
                }, function (m, a) {
                    m.exports = function (n, r) {
                        for (var e = -1, c = n == null ? 0 : n.length, i = 0, t = []; ++e < c;) {
                            var o = n[e];
                            r(o, e, n) && (t[i++] = o);
                        }
                        return t;
                    };
                }, function (m, a, n) { var r = n(116), e = n(6), c = n(115), i = n(10), t = e(function (o) { return c(r(o, i)); }); m.exports = t; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () {
                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                        switch (arguments[1].type) {
                            case r.ADD_SOURCE:
                            case r.ADD_TARGET: return e + 1;
                            case r.REMOVE_SOURCE:
                            case r.REMOVE_TARGET: return e - 1;
                            default: return e;
                        }
                    };
                    var r = n(9);
                }, function (m, a) { m.exports = function (n) { return typeof n == "number" && n > -1 && n % 1 == 0 && n <= 9007199254740991; }; }, function (m, a, n) {
                    var r = n(44), e = n(41);
                    m.exports = function (c) {
                        if (!e(c))
                            return !1;
                        var i = r(c);
                        return i == "[object Function]" || i == "[object GeneratorFunction]" || i == "[object AsyncFunction]" || i == "[object Proxy]";
                    };
                }, function (m, a, n) { var r = n(120), e = n(119); m.exports = function (c) { return c != null && e(c.length) && !r(c); }; }, function (m, a) { m.exports = function (n) { return n; }; }, function (m, a) {
                    m.exports = function (n, r, e) {
                        switch (e.length) {
                            case 0: return n.call(r);
                            case 1: return n.call(r, e[0]);
                            case 2: return n.call(r, e[0], e[1]);
                            case 3: return n.call(r, e[0], e[1], e[2]);
                        }
                        return n.apply(r, e);
                    };
                }, function (m, a, n) {
                    var r = n(123), e = Math.max;
                    m.exports = function (c, i, t) {
                        return i = e(i === void 0 ? c.length - 1 : i, 0), function () {
                            for (var o = arguments, u = -1, d = e(o.length - i, 0), v = Array(d); ++u < d;)
                                v[u] = o[i + u];
                            u = -1;
                            for (var b = Array(i + 1); ++u < i;)
                                b[u] = o[u];
                            return b[i] = t(v), r(c, this, b);
                        };
                    };
                }, function (m, a) { m.exports = function (n) { return n; }; }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = Object.assign || function (u) {
                        for (var d = 1; d < arguments.length; d++) {
                            var v = arguments[d];
                            for (var b in v)
                                Object.prototype.hasOwnProperty.call(v, b) && (u[b] = v[b]);
                        }
                        return u;
                    };
                    a.default = function () {
                        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o, d = arguments[1];
                        switch (d.type) {
                            case i.BEGIN_DRAG: return r({}, u, { itemType: d.itemType, item: d.item, sourceId: d.sourceId, isSourcePublic: d.isSourcePublic, dropResult: null, didDrop: !1 });
                            case i.PUBLISH_DRAG_SOURCE: return r({}, u, { isSourcePublic: !0 });
                            case i.HOVER: return r({}, u, { targetIds: d.targetIds });
                            case t.REMOVE_TARGET: return u.targetIds.indexOf(d.targetId) === -1 ? u : r({}, u, { targetIds: (0, c.default)(u.targetIds, d.targetId) });
                            case i.DROP: return r({}, u, { dropResult: d.dropResult, didDrop: !0, targetIds: [] });
                            case i.END_DRAG: return r({}, u, { itemType: null, item: null, sourceId: null, dropResult: null, didDrop: !1, isSourcePublic: null, targetIds: [] });
                            default: return u;
                        }
                    };
                    var e, c = (e = n(39)) && e.__esModule ? e : { default: e }, i = n(11), t = n(9), o = { itemType: null, item: null, sourceId: null, targetIds: [], dropResult: null, didDrop: !1, isSourcePublic: null };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 }), a.default = function () { var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments[1]; return { dirtyHandlerIds: (0, i.default)(u.dirtyHandlerIds, d, u.dragOperation), dragOffset: (0, r.default)(u.dragOffset, d), refCount: (0, c.default)(u.refCount, d), dragOperation: (0, e.default)(u.dragOperation, d), stateId: (0, t.default)(u.stateId) }; };
                    var r = o(n(42)), e = o(n(126)), c = o(n(118)), i = o(n(35)), t = o(n(103));
                    function o(u) { return u && u.__esModule ? u : { default: u }; }
                }, function (m, a) {
                    m.exports = function (n) {
                        if (!n.webpackPolyfill) {
                            var r = Object.create(n);
                            r.children || (r.children = []), Object.defineProperty(r, "loaded", { enumerable: !0, get: function () { return r.l; } }), Object.defineProperty(r, "id", { enumerable: !0, get: function () { return r.i; } }), Object.defineProperty(r, "exports", { enumerable: !0 }), r.webpackPolyfill = 1;
                        }
                        return r;
                    };
                }, function (m, a, n) {
                    "use strict";
                    n.r(a), function (r, e) { var c, i = n(49); c = typeof self != "undefined" ? self : typeof window != "undefined" ? window : r !== void 0 ? r : e; var t = Object(i.a)(c); a.default = t; }.call(this, n(12), n(128)(m));
                }, function (m, a) { m.exports = function (n, r) { return function (e) { return n(r(e)); }; }; }, function (m, a, n) { var r = n(130)(Object.getPrototypeOf, Object); m.exports = r; }, function (m, a, n) {
                    "use strict";
                    a.__esModule = !0, a.ActionTypes = void 0, a.default = function t(o, u, d) {
                        var v;
                        if (typeof u == "function" && d === void 0 && (d = u, u = void 0), d !== void 0) {
                            if (typeof d != "function")
                                throw new Error("Expected the enhancer to be a function.");
                            return d(t)(o, u);
                        }
                        if (typeof o != "function")
                            throw new Error("Expected the reducer to be a function.");
                        var b = o, p = u, l = [], h = l, s = !1;
                        function g() { h === l && (h = l.slice()); }
                        function S() { return p; }
                        function O(k) {
                            if (typeof k != "function")
                                throw new Error("Expected listener to be a function.");
                            var T = !0;
                            return g(), h.push(k), function () {
                                if (T) {
                                    T = !1, g();
                                    var P = h.indexOf(k);
                                    h.splice(P, 1);
                                }
                            };
                        }
                        function j(k) {
                            if (!(0, r.default)(k))
                                throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                            if (k.type === void 0)
                                throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
                            if (s)
                                throw new Error("Reducers may not dispatch actions.");
                            try {
                                s = !0, p = b(p, k);
                            }
                            finally {
                                s = !1;
                            }
                            for (var T = l = h, P = 0; P < T.length; P++)
                                (0, T[P])();
                            return k;
                        }
                        return j({ type: i.INIT }), (v = { dispatch: j, subscribe: O, getState: S, replaceReducer: function (k) {
                                if (typeof k != "function")
                                    throw new Error("Expected the nextReducer to be a function.");
                                b = k, j({ type: i.INIT });
                            } })[e.default] = function () {
                            var k, T = O;
                            return (k = { subscribe: function (P) {
                                    if (typeof P != "object")
                                        throw new TypeError("Expected the observer to be an object.");
                                    function R() { P.next && P.next(S()); }
                                    return R(), { unsubscribe: T(R) };
                                } })[e.default] = function () { return this; }, k;
                        }, v;
                    };
                    var r = c(n(5)), e = c(n(129));
                    function c(t) { return t && t.__esModule ? t : { default: t }; }
                    var i = a.ActionTypes = { INIT: "@@redux/INIT" };
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function () {
                        function d(v, b) {
                            for (var p = 0; p < b.length; p++) {
                                var l = b[p];
                                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(v, l.key, l);
                            }
                        }
                        return function (v, b, p) { return b && d(v.prototype, b), p && d(v, p), v; };
                    }(), e = o(n(132)), c = o(n(127)), i = function (d) {
                        if (d && d.__esModule)
                            return d;
                        var v = {};
                        if (d != null)
                            for (var b in d)
                                Object.prototype.hasOwnProperty.call(d, b) && (v[b] = d[b]);
                        return v.default = d, v;
                    }(n(11)), t = o(n(102));
                    function o(d) { return d && d.__esModule ? d : { default: d }; }
                    var u = function () {
                        function d(v) {
                            var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            (function (l, h) {
                                if (!(l instanceof d))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this);
                            var p = (0, e.default)(c.default);
                            this.context = b, this.store = p, this.monitor = new t.default(p), this.registry = this.monitor.registry, this.backend = v(this), p.subscribe(this.handleRefCountChange.bind(this));
                        }
                        return r(d, [{ key: "handleRefCountChange", value: function () { var v = this.store.getState().refCount > 0; v && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !v && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1); } }, { key: "getContext", value: function () { return this.context; } }, { key: "getMonitor", value: function () { return this.monitor; } }, { key: "getBackend", value: function () { return this.backend; } }, { key: "getRegistry", value: function () { return this.registry; } }, { key: "getActions", value: function () {
                                    var v = this, b = this.store.dispatch;
                                    return Object.keys(i).filter(function (p) { return typeof i[p] == "function"; }).reduce(function (p, l) {
                                        var h, s = i[l];
                                        return p[l] = (h = s, function () {
                                            for (var g = arguments.length, S = Array(g), O = 0; O < g; O++)
                                                S[O] = arguments[O];
                                            var j = h.apply(v, S);
                                            j !== void 0 && b(j);
                                        }), p;
                                    }, {});
                                } }]), d;
                    }();
                    a.default = u;
                }, function (m, a, n) {
                    "use strict";
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = n(133);
                    Object.defineProperty(a, "DragDropManager", { enumerable: !0, get: function () { return t(r).default; } });
                    var e = n(97);
                    Object.defineProperty(a, "DragSource", { enumerable: !0, get: function () { return t(e).default; } });
                    var c = n(96);
                    Object.defineProperty(a, "DropTarget", { enumerable: !0, get: function () { return t(c).default; } });
                    var i = n(95);
                    function t(o) { return o && o.__esModule ? o : { default: o }; }
                    Object.defineProperty(a, "createTestBackend", { enumerable: !0, get: function () { return t(i).default; } });
                }, function (m, a, n) {
                    "use strict";
                    m.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                }, function (m, a, n) {
                    "use strict";
                    m.exports = function (r, e, c, i, t, o, u, d) {
                        if (!r) {
                            var v;
                            if (e === void 0)
                                v = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var b = [c, i, t, o, u, d], p = 0;
                                (v = new Error(e.replace(/%s/g, function () { return b[p++]; }))).name = "Invariant Violation";
                            }
                            throw v.framesToPop = 1, v;
                        }
                    };
                }, function (m, a, n) {
                    "use strict";
                    function r(c) { return function () { return c; }; }
                    var e = function () { };
                    e.thatReturns = r, e.thatReturnsFalse = r(!1), e.thatReturnsTrue = r(!0), e.thatReturnsNull = r(null), e.thatReturnsThis = function () { return this; }, e.thatReturnsArgument = function (c) { return c; }, m.exports = e;
                }, function (m, a, n) {
                    "use strict";
                    var r = n(137), e = n(136), c = n(135);
                    m.exports = function () { function i(u, d, v, b, p, l) { l !== c && e(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); } function t() { return i; } i.isRequired = i; var o = { array: i, bool: i, func: i, number: i, object: i, string: i, symbol: i, any: i, arrayOf: t, element: i, instanceOf: t, node: i, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t }; return o.checkPropTypes = r, o.PropTypes = o, o; };
                }]);
        });
    });
    var Jt = Ut(Bt()), Zt = Ut(Bt()), { chessboardjsx: tn } = Jt;
    var export_default = Zt.default;
    return { chessboardjsx: tn, default: export_default };
})();
const mod16 = (async () => {
    const { default: _default } = await mod18;
    return { default: _default, ...await mod18 };
})();
const mod3 = (async () => {
    let wasm;
    let cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
    }
    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }
    function get_piece_from_i32(value) {
        try {
            wasm.get_piece_from_i32(8, value);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        }
        finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    function get_piece_index_from_character(value) {
        var ret = wasm.get_piece_index_from_character(value.codePointAt(0));
        return ret;
    }
    let cachegetUint32Memory0 = null;
    function getUint32Memory0() {
        if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory0;
    }
    let WASM_VECTOR_LEN = 0;
    function passArray32ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 4);
        getUint32Memory0().set(arg, ptr / 4);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }
    function create_board(pieces_and_positions, is_white_turn) {
        var ptr0 = passArray32ToWasm0(pieces_and_positions, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.create_board(ptr0, len0, is_white_turn);
        return WasmClient.__wrap(ret);
    }
    function getArrayI32FromWasm0(ptr, len) {
        return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
    }
    class WasmClient {
        static __wrap(ptr) {
            const obj = Object.create(WasmClient.prototype);
            obj.ptr = ptr;
            return obj;
        }
        free() {
            const ptr = this.ptr;
            this.ptr = 0;
            wasm.__wbg_wasmclient_free(ptr);
        }
        constructor() {
            var ret = wasm.wasmclient_new();
            return WasmClient.__wrap(ret);
        }
        move_piece(origin, target) {
            var ret = wasm.wasmclient_move_piece(this.ptr, origin, target);
            return ret !== 0;
        }
        get_valid_targets(position) {
            wasm.wasmclient_get_valid_targets(8, this.ptr, position);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            var v0 = getArrayI32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        }
        is_white_turn() {
            var ret = wasm.wasmclient_is_white_turn(this.ptr);
            return ret !== 0;
        }
        render_board() {
            wasm.wasmclient_render_board(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            var v0 = getArrayI32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        }
    }
    async function load(module, imports) {
        if (typeof Response === "function" && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === "function") {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                }
                catch (e) {
                    if (module.headers.get("Content-Type") != "application/wasm") {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                    }
                    else {
                        throw e;
                    }
                }
            }
            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        }
        else {
            const instance = await WebAssembly.instantiate(module, imports);
            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            }
            else {
                return instance;
            }
        }
    }
    async function init(input) {
        if (typeof input === "undefined") {
            input = import.meta.url.replace(/\.js$/, "_bg.wasm");
        }
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_throw = function (arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        if (typeof input === "string" || (typeof Request === "function" && input instanceof Request) || (typeof URL === "function" && input instanceof URL)) {
            input = fetch(input);
        }
        const { instance, module } = await load(await input, imports);
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        return wasm;
    }
    const _default = init;
    return { default: _default, get_piece_from_i32, get_piece_index_from_character, create_board, WasmClient };
})();
const mod12 = (async () => {
    const React = (await mod).default;
    const ChessBoard = (await mod16).default;
    const { Board, Position, Square, getSquare, getPositionIndex, getPositionFromSquare, getPosition } = await mod14;
    const { CHESS_PIECE_CODE_TO_CHAR_MAP, Color, PieceCode } = await mod15;
    const { create_board: createBoard, get_piece_index_from_character: getPieceIndex } = await mod3;
    function createPiecePositionSlice(pieces) {
        const values = Object.entries(pieces).flatMap(([square, pieceCode]) => {
            const position = getPositionIndex(getPositionFromSquare(square));
            const piece = getPieceIndex(CHESS_PIECE_CODE_TO_CHAR_MAP[pieceCode]);
            console.log({ position, piece, square, pieceCode });
            return [piece, position];
        });
        return new Int32Array(values);
    }
    function parseTargets(data) {
        return Array.from(data).map((positionIndex) => getPosition(positionIndex));
    }
    function GameBoard({ pieces, lastMove, movePiece, myColor, turn }) {
        const [selectedSquare, setSelectedSquare] = React.useState(null);
        const [validTargets, setValidTargets] = React.useState([]);
        const allowDrag = React.useCallback(({ piece }) => {
            const targetColor = piece.charAt(0) === "w" ? "white" : "black";
            return targetColor === myColor;
        }, [myColor]);
        const handleSquareSelect = React.useCallback((target) => {
            setValidTargets([]);
            if (!selectedSquare) {
                const slice = createPiecePositionSlice(pieces);
                const localGame = createBoard(slice, turn === "white");
                const selectedTarget = getPositionIndex(getPositionFromSquare(target));
                const validTargetValues = localGame.get_valid_targets(selectedTarget);
                const targets = parseTargets(validTargetValues).map((position) => getSquare(position));
                setSelectedSquare(target);
                setValidTargets(targets);
                return;
            }
            setSelectedSquare(null);
            if (!validTargets.includes(target))
                return;
            movePiece(getPositionFromSquare(selectedSquare), getPositionFromSquare(target));
        }, [movePiece, pieces, selectedSquare, turn, validTargets]);
        const handleDrop = React.useCallback(({ sourceSquare: originSquare, targetSquare }) => {
            setSelectedSquare(null);
            movePiece(getPositionFromSquare(originSquare), getPositionFromSquare(targetSquare));
        }, [movePiece]);
        const squareStyles = React.useMemo(() => ({
            ...(lastMove ? ({
                [getSquare(lastMove[0])]: {
                    backgroundColor: "#c6a220"
                },
                [getSquare(lastMove[1])]: {
                    backgroundColor: "#b3a220"
                }
            }) : {}),
            ...(selectedSquare ? {
                [selectedSquare]: {
                    backgroundColor: "#a2a220"
                }
            } : {}),
            ...Object.fromEntries(validTargets.map((target) => [
                target,
                {
                    backgroundColor: "#dddddd"
                },
            ]))
        }), [lastMove, selectedSquare, validTargets]);
        return (React.createElement(ChessBoard, { allowDrag: allowDrag, dropOffBoard: "snapback", id: "play", position: pieces, onSquareClick: handleSquareSelect, onDrop: handleDrop, orientation: myColor, squareStyles: squareStyles }));
    }
    return { default: _default };
})();
const mod7 = (async () => {
    const React = (await mod).default;
    const useGame = (await mod11).default;
    const ChessBoard = (await mod12).default;
    function Connecting() {
        return (React.createElement("span", null, "Connecting..."));
    }
    function GameFrame() {
        const game = useGame();
        return (React.createElement("div", { className: "frame" }, game.status === "connected" ? (React.createElement(ChessBoard, { pieces: game.handle.pieces, lastMove: game.handle.lastMove, movePiece: game.handle.movePiece, myColor: game.handle.myColor, turn: game.handle.turn })) : React.createElement(Connecting, null)));
    }
    return { default: _default };
})();
const mod8 = (async () => {
    const _default = `.App {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.App-header {
  text-align: center;
  font-size: calc(10px + 2vmin);
  color: white;

  margin-top: 10vh;
  flex: 0.2 0.2 0;
}

.main {
  flex: auto;
}

.frame {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
    return { default: _default };
})();
const mod2 = (async () => {
    const React = (await mod).default;
    const GameFrame = (await mod7).default;
    await mod8;
    function App() {
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" }, "Psy(chic) Chess"),
            React.createElement("main", { className: "main" },
                React.createElement(GameFrame, null))));
    }
    const _default = App;
    return { default: _default };
})();
const mod4 = (async () => {
    const _default = `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
    return { default: _default };
})();
export default (async () => {
    const React = (await mod).default;
    const ReactDOM = (await mod1).default;
    const App = (await mod2).default;
    const initWasm = (await mod3).default;
    await mod4;
    initWasm();
    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)), document.getElementById("root"));
    return {};
})();
