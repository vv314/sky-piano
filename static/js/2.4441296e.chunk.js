;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    130: function(t, e, r) {
      t.exports = r(131)
    },
    131: function(t, e, r) {
      var n = (function(t) {
        'use strict'
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          i = 'function' === typeof Symbol ? Symbol : {},
          o = i.iterator || '@@iterator',
          a = i.asyncIterator || '@@asyncIterator',
          s = i.toStringTag || '@@toStringTag'
        function u(t, e, r, n) {
          var i = e && e.prototype instanceof g ? e : g,
            o = Object.create(i.prototype),
            a = new x(n || [])
          return (
            (o._invoke = (function(t, e, r) {
              var n = f
              return function(i, o) {
                if (n === l) throw new Error('Generator is already running')
                if (n === p) {
                  if ('throw' === i) throw o
                  return B()
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate
                  if (a) {
                    var s = S(a, r)
                    if (s) {
                      if (s === y) continue
                      return s
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg
                  else if ('throw' === r.method) {
                    if (n === f) throw ((n = p), r.arg)
                    r.dispatchException(r.arg)
                  } else 'return' === r.method && r.abrupt('return', r.arg)
                  n = l
                  var u = h(t, e, r)
                  if ('normal' === u.type) {
                    if (((n = r.done ? p : c), u.arg === y)) continue
                    return { value: u.arg, done: r.done }
                  }
                  'throw' === u.type &&
                    ((n = p), (r.method = 'throw'), (r.arg = u.arg))
                }
              }
            })(t, r, a)),
            o
          )
        }
        function h(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) }
          } catch (n) {
            return { type: 'throw', arg: n }
          }
        }
        t.wrap = u
        var f = 'suspendedStart',
          c = 'suspendedYield',
          l = 'executing',
          p = 'completed',
          y = {}
        function g() {}
        function v() {}
        function d() {}
        var b = {}
        b[o] = function() {
          return this
        }
        var m = Object.getPrototypeOf,
          w = m && m(m(A([])))
        w && w !== r && n.call(w, o) && (b = w)
        var k = (d.prototype = g.prototype = Object.create(b))
        function E(t) {
          ;['next', 'throw', 'return'].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t)
            }
          })
        }
        function T(t) {
          var e
          this._invoke = function(r, i) {
            function o() {
              return new Promise(function(e, o) {
                !(function e(r, i, o, a) {
                  var s = h(t[r], t, i)
                  if ('throw' !== s.type) {
                    var u = s.arg,
                      f = u.value
                    return f && 'object' === typeof f && n.call(f, '__await')
                      ? Promise.resolve(f.__await).then(
                          function(t) {
                            e('next', t, o, a)
                          },
                          function(t) {
                            e('throw', t, o, a)
                          }
                        )
                      : Promise.resolve(f).then(
                          function(t) {
                            ;(u.value = t), o(u)
                          },
                          function(t) {
                            return e('throw', t, o, a)
                          }
                        )
                  }
                  a(s.arg)
                })(r, i, e, o)
              })
            }
            return (e = e ? e.then(o, o) : o())
          }
        }
        function S(t, r) {
          var n = t.iterator[r.method]
          if (n === e) {
            if (((r.delegate = null), 'throw' === r.method)) {
              if (
                t.iterator.return &&
                ((r.method = 'return'),
                (r.arg = e),
                S(t, r),
                'throw' === r.method)
              )
                return y
              ;(r.method = 'throw'),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ))
            }
            return y
          }
          var i = h(n, t.iterator, r.arg)
          if ('throw' === i.type)
            return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
          var o = i.arg
          return o
            ? o.done
              ? ((r[t.resultName] = o.value),
                (r.next = t.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                (r.delegate = null),
                y)
              : o
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              y)
        }
        function I(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function L(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function x(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(I, this),
            this.reset(!0)
        }
        function A(t) {
          if (t) {
            var r = t[o]
            if (r) return r.call(t)
            if ('function' === typeof t.next) return t
            if (!isNaN(t.length)) {
              var i = -1,
                a = function r() {
                  for (; ++i < t.length; )
                    if (n.call(t, i)) return (r.value = t[i]), (r.done = !1), r
                  return (r.value = e), (r.done = !0), r
                }
              return (a.next = a)
            }
          }
          return { next: B }
        }
        function B() {
          return { value: e, done: !0 }
        }
        return (
          (v.prototype = k.constructor = d),
          (d.constructor = v),
          (d[s] = v.displayName = 'GeneratorFunction'),
          (t.isGeneratorFunction = function(t) {
            var e = 'function' === typeof t && t.constructor
            return (
              !!e &&
              (e === v || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (t.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s in t || (t[s] = 'GeneratorFunction')),
              (t.prototype = Object.create(k)),
              t
            )
          }),
          (t.awrap = function(t) {
            return { __await: t }
          }),
          E(T.prototype),
          (T.prototype[a] = function() {
            return this
          }),
          (t.AsyncIterator = T),
          (t.async = function(e, r, n, i) {
            var o = new T(u(e, r, n, i))
            return t.isGeneratorFunction(r)
              ? o
              : o.next().then(function(t) {
                  return t.done ? t.value : o.next()
                })
          }),
          E(k),
          (k[s] = 'Generator'),
          (k[o] = function() {
            return this
          }),
          (k.toString = function() {
            return '[object Generator]'
          }),
          (t.keys = function(t) {
            var e = []
            for (var r in t) e.push(r)
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop()
                  if (n in t) return (r.value = n), (r.done = !1), r
                }
                return (r.done = !0), r
              }
            )
          }),
          (t.values = A),
          (x.prototype = {
            constructor: x,
            reset: function(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e)
            },
            stop: function() {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function(t) {
              if (this.done) throw t
              var r = this
              function i(n, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (r.next = n),
                  i && ((r.method = 'next'), (r.arg = e)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    h = n.call(a, 'finallyLoc')
                  if (u && h) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!h)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r]
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), y)
                  : this.complete(a)
              )
            },
            complete: function(t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                y
              )
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), y
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.tryLoc === t) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var i = n.arg
                    L(r)
                  }
                  return i
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function(t, r, n) {
              return (
                (this.delegate = { iterator: A(t), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = e),
                y
              )
            }
          }),
          t
        )
      })(t.exports)
      try {
        regeneratorRuntime = n
      } catch (i) {
        Function('r', 'regeneratorRuntime = r')(n)
      }
    },
    132: function(t, e, r) {
      'use strict'
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (h) {
          return void r(h)
        }
        s.done ? e(u) : Promise.resolve(u).then(n, i)
      }
      function i(t) {
        return function() {
          var e = this,
            r = arguments
          return new Promise(function(i, o) {
            var a = t.apply(e, r)
            function s(t) {
              n(a, i, o, s, u, 'next', t)
            }
            function u(t) {
              n(a, i, o, s, u, 'throw', t)
            }
            s(void 0)
          })
        }
      }
      r.d(e, 'a', function() {
        return i
      })
    },
    133: function(t, e, r) {
      var n
      t.exports = (function t(e, r, i) {
        function o(s, u) {
          if (!r[s]) {
            if (!e[s]) {
              var h = 'function' == typeof n && n
              if (!u && h) return n(s, !0)
              if (a) return a(s, !0)
              var f = new Error("Cannot find module '" + s + "'")
              throw ((f.code = 'MODULE_NOT_FOUND'), f)
            }
            var c = (r[s] = { exports: {} })
            e[s][0].call(
              c.exports,
              function(t) {
                var r = e[s][1][t]
                return o(r || t)
              },
              c,
              c.exports,
              t,
              e,
              r,
              i
            )
          }
          return r[s].exports
        }
        for (var a = 'function' == typeof n && n, s = 0; s < i.length; s++)
          o(i[s])
        return o
      })(
        {
          1: [
            function(t, e, r) {
              'use strict'
              ;(r.byteLength = function(t) {
                return (3 * t.length) / 4 - h(t)
              }),
                (r.toByteArray = function(t) {
                  var e,
                    r,
                    n,
                    a,
                    s,
                    u = t.length
                  ;(a = h(t)),
                    (s = new o((3 * u) / 4 - a)),
                    (r = a > 0 ? u - 4 : u)
                  var f = 0
                  for (e = 0; e < r; e += 4)
                    (n =
                      (i[t.charCodeAt(e)] << 18) |
                      (i[t.charCodeAt(e + 1)] << 12) |
                      (i[t.charCodeAt(e + 2)] << 6) |
                      i[t.charCodeAt(e + 3)]),
                      (s[f++] = (n >> 16) & 255),
                      (s[f++] = (n >> 8) & 255),
                      (s[f++] = 255 & n)
                  return (
                    2 === a
                      ? ((n =
                          (i[t.charCodeAt(e)] << 2) |
                          (i[t.charCodeAt(e + 1)] >> 4)),
                        (s[f++] = 255 & n))
                      : 1 === a &&
                        ((n =
                          (i[t.charCodeAt(e)] << 10) |
                          (i[t.charCodeAt(e + 1)] << 4) |
                          (i[t.charCodeAt(e + 2)] >> 2)),
                        (s[f++] = (n >> 8) & 255),
                        (s[f++] = 255 & n)),
                    s
                  )
                }),
                (r.fromByteArray = function(t) {
                  for (
                    var e,
                      r = t.length,
                      i = r % 3,
                      o = '',
                      a = [],
                      s = 0,
                      u = r - i;
                    s < u;
                    s += 16383
                  )
                    a.push(f(t, s, s + 16383 > u ? u : s + 16383))
                  return (
                    1 === i
                      ? ((e = t[r - 1]),
                        (o += n[e >> 2]),
                        (o += n[(e << 4) & 63]),
                        (o += '=='))
                      : 2 === i &&
                        ((e = (t[r - 2] << 8) + t[r - 1]),
                        (o += n[e >> 10]),
                        (o += n[(e >> 4) & 63]),
                        (o += n[(e << 2) & 63]),
                        (o += '=')),
                    a.push(o),
                    a.join('')
                  )
                })
              for (
                var n = [],
                  i = [],
                  o = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
                  a =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                  s = 0,
                  u = a.length;
                s < u;
                ++s
              )
                (n[s] = a[s]), (i[a.charCodeAt(s)] = s)
              function h(t) {
                var e = t.length
                if (e % 4 > 0)
                  throw new Error(
                    'Invalid string. Length must be a multiple of 4'
                  )
                return '=' === t[e - 2] ? 2 : '=' === t[e - 1] ? 1 : 0
              }
              function f(t, e, r) {
                for (var i, o, a = [], s = e; s < r; s += 3)
                  (i = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2]),
                    a.push(
                      n[((o = i) >> 18) & 63] +
                        n[(o >> 12) & 63] +
                        n[(o >> 6) & 63] +
                        n[63 & o]
                    )
                return a.join('')
              }
              ;(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63)
            },
            {}
          ],
          2: [
            function(t, e, r) {
              'use strict'
              var n = t('base64-js'),
                i = t('ieee754')
              ;(r.Buffer = s),
                (r.SlowBuffer = function(t) {
                  return +t != t && (t = 0), s.alloc(+t)
                }),
                (r.INSPECT_MAX_BYTES = 50)
              var o = 2147483647
              function a(t) {
                if (t > o) throw new RangeError('Invalid typed array length')
                var e = new Uint8Array(t)
                return (e.__proto__ = s.prototype), e
              }
              function s(t, e, r) {
                if ('number' === typeof t) {
                  if ('string' === typeof e)
                    throw new Error(
                      'If encoding is specified then the first argument must be a string'
                    )
                  return f(t)
                }
                return u(t, e, r)
              }
              function u(t, e, r) {
                if ('number' === typeof t)
                  throw new TypeError('"value" argument must not be a number')
                return j(t)
                  ? (function(t, e, r) {
                      if (e < 0 || t.byteLength < e)
                        throw new RangeError("'offset' is out of bounds")
                      if (t.byteLength < e + (r || 0))
                        throw new RangeError("'length' is out of bounds")
                      var n
                      return (
                        ((n =
                          void 0 === e && void 0 === r
                            ? new Uint8Array(t)
                            : void 0 === r
                            ? new Uint8Array(t, e)
                            : new Uint8Array(t, e, r)).__proto__ = s.prototype),
                        n
                      )
                    })(t, e, r)
                  : 'string' === typeof t
                  ? (function(t, e) {
                      if (
                        (('string' === typeof e && '' !== e) || (e = 'utf8'),
                        !s.isEncoding(e))
                      )
                        throw new TypeError(
                          '"encoding" must be a valid string encoding'
                        )
                      var r = 0 | p(t, e),
                        n = a(r),
                        i = n.write(t, e)
                      return i !== r && (n = n.slice(0, i)), n
                    })(t, e)
                  : (function(t) {
                      if (s.isBuffer(t)) {
                        var e = 0 | l(t.length),
                          r = a(e)
                        return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
                      }
                      if (t) {
                        if (G(t) || 'length' in t)
                          return 'number' !== typeof t.length || z(t.length)
                            ? a(0)
                            : c(t)
                        if ('Buffer' === t.type && Array.isArray(t.data))
                          return c(t.data)
                      }
                      throw new TypeError(
                        'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                      )
                    })(t)
              }
              function h(t) {
                if ('number' !== typeof t)
                  throw new TypeError('"size" argument must be a number')
                if (t < 0)
                  throw new RangeError('"size" argument must not be negative')
              }
              function f(t) {
                return h(t), a(t < 0 ? 0 : 0 | l(t))
              }
              function c(t) {
                for (
                  var e = t.length < 0 ? 0 : 0 | l(t.length), r = a(e), n = 0;
                  n < e;
                  n += 1
                )
                  r[n] = 255 & t[n]
                return r
              }
              function l(t) {
                if (t >= o)
                  throw new RangeError(
                    'Attempt to allocate Buffer larger than maximum size: 0x' +
                      o.toString(16) +
                      ' bytes'
                  )
                return 0 | t
              }
              function p(t, e) {
                if (s.isBuffer(t)) return t.length
                if (G(t) || j(t)) return t.byteLength
                'string' !== typeof t && (t = '' + t)
                var r = t.length
                if (0 === r) return 0
                for (var n = !1; ; )
                  switch (e) {
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                      return r
                    case 'utf8':
                    case 'utf-8':
                    case void 0:
                      return R(t).length
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 2 * r
                    case 'hex':
                      return r >>> 1
                    case 'base64':
                      return D(t).length
                    default:
                      if (n) return R(t).length
                      ;(e = ('' + e).toLowerCase()), (n = !0)
                  }
              }
              function y(t, e, r) {
                var n = !1
                if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                  return ''
                if (
                  ((void 0 === r || r > this.length) && (r = this.length),
                  r <= 0)
                )
                  return ''
                if ((r >>>= 0) <= (e >>>= 0)) return ''
                for (t || (t = 'utf8'); ; )
                  switch (t) {
                    case 'hex':
                      return B(this, e, r)
                    case 'utf8':
                    case 'utf-8':
                      return I(this, e, r)
                    case 'ascii':
                      return x(this, e, r)
                    case 'latin1':
                    case 'binary':
                      return A(this, e, r)
                    case 'base64':
                      return S(this, e, r)
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return C(this, e, r)
                    default:
                      if (n) throw new TypeError('Unknown encoding: ' + t)
                      ;(t = (t + '').toLowerCase()), (n = !0)
                  }
              }
              function g(t, e, r) {
                var n = t[e]
                ;(t[e] = t[r]), (t[r] = n)
              }
              function v(t, e, r, n, i) {
                if (0 === t.length) return -1
                if (
                  ('string' === typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  z((r = +r)) && (r = i ? 0 : t.length - 1),
                  r < 0 && (r = t.length + r),
                  r >= t.length)
                ) {
                  if (i) return -1
                  r = t.length - 1
                } else if (r < 0) {
                  if (!i) return -1
                  r = 0
                }
                if (
                  ('string' === typeof e && (e = s.from(e, n)), s.isBuffer(e))
                )
                  return 0 === e.length ? -1 : d(t, e, r, n, i)
                if ('number' === typeof e)
                  return (
                    (e &= 255),
                    'function' === typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(t, e, r)
                        : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                      : d(t, [e], r, n, i)
                  )
                throw new TypeError('val must be string, number or Buffer')
              }
              function d(t, e, r, n, i) {
                var o,
                  a = 1,
                  s = t.length,
                  u = e.length
                if (
                  void 0 !== n &&
                  ('ucs2' === (n = String(n).toLowerCase()) ||
                    'ucs-2' === n ||
                    'utf16le' === n ||
                    'utf-16le' === n)
                ) {
                  if (t.length < 2 || e.length < 2) return -1
                  ;(a = 2), (s /= 2), (u /= 2), (r /= 2)
                }
                function h(t, e) {
                  return 1 === a ? t[e] : t.readUInt16BE(e * a)
                }
                if (i) {
                  var f = -1
                  for (o = r; o < s; o++)
                    if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
                      if ((-1 === f && (f = o), o - f + 1 === u)) return f * a
                    } else -1 !== f && (o -= o - f), (f = -1)
                } else
                  for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                    for (var c = !0, l = 0; l < u; l++)
                      if (h(t, o + l) !== h(e, l)) {
                        c = !1
                        break
                      }
                    if (c) return o
                  }
                return -1
              }
              function b(t, e, r, n) {
                r = Number(r) || 0
                var i = t.length - r
                n ? (n = Number(n)) > i && (n = i) : (n = i)
                var o = e.length
                if (o % 2 !== 0) throw new TypeError('Invalid hex string')
                n > o / 2 && (n = o / 2)
                for (var a = 0; a < n; ++a) {
                  var s = parseInt(e.substr(2 * a, 2), 16)
                  if (z(s)) return a
                  t[r + a] = s
                }
                return a
              }
              function m(t, e, r, n) {
                return F(R(e, t.length - r), t, r, n)
              }
              function w(t, e, r, n) {
                return F(
                  (function(t) {
                    for (var e = [], r = 0; r < t.length; ++r)
                      e.push(255 & t.charCodeAt(r))
                    return e
                  })(e),
                  t,
                  r,
                  n
                )
              }
              function k(t, e, r, n) {
                return w(t, e, r, n)
              }
              function E(t, e, r, n) {
                return F(D(e), t, r, n)
              }
              function T(t, e, r, n) {
                return F(
                  (function(t, e) {
                    for (
                      var r, n, i, o = [], a = 0;
                      a < t.length && !((e -= 2) < 0);
                      ++a
                    )
                      (r = t.charCodeAt(a)),
                        (n = r >> 8),
                        (i = r % 256),
                        o.push(i),
                        o.push(n)
                    return o
                  })(e, t.length - r),
                  t,
                  r,
                  n
                )
              }
              function S(t, e, r) {
                return 0 === e && r === t.length
                  ? n.fromByteArray(t)
                  : n.fromByteArray(t.slice(e, r))
              }
              function I(t, e, r) {
                r = Math.min(t.length, r)
                for (var n = [], i = e; i < r; ) {
                  var o,
                    a,
                    s,
                    u,
                    h = t[i],
                    f = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1
                  if (i + c <= r)
                    switch (c) {
                      case 1:
                        h < 128 && (f = h)
                        break
                      case 2:
                        128 === (192 & (o = t[i + 1])) &&
                          (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                          (f = u)
                        break
                      case 3:
                        ;(o = t[i + 1]),
                          (a = t[i + 2]),
                          128 === (192 & o) &&
                            128 === (192 & a) &&
                            (u =
                              ((15 & h) << 12) | ((63 & o) << 6) | (63 & a)) >
                              2047 &&
                            (u < 55296 || u > 57343) &&
                            (f = u)
                        break
                      case 4:
                        ;(o = t[i + 1]),
                          (a = t[i + 2]),
                          (s = t[i + 3]),
                          128 === (192 & o) &&
                            128 === (192 & a) &&
                            128 === (192 & s) &&
                            (u =
                              ((15 & h) << 18) |
                              ((63 & o) << 12) |
                              ((63 & a) << 6) |
                              (63 & s)) > 65535 &&
                            u < 1114112 &&
                            (f = u)
                    }
                  null === f
                    ? ((f = 65533), (c = 1))
                    : f > 65535 &&
                      ((f -= 65536),
                      n.push(((f >>> 10) & 1023) | 55296),
                      (f = 56320 | (1023 & f))),
                    n.push(f),
                    (i += c)
                }
                return (function(t) {
                  var e = t.length
                  if (e <= L) return String.fromCharCode.apply(String, t)
                  for (var r = '', n = 0; n < e; )
                    r += String.fromCharCode.apply(String, t.slice(n, (n += L)))
                  return r
                })(n)
              }
              ;(r.kMaxLength = o),
                (s.TYPED_ARRAY_SUPPORT = (function() {
                  try {
                    var t = new Uint8Array(1)
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42
                        }
                      }),
                      42 === t.foo()
                    )
                  } catch (e) {
                    return !1
                  }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                  'undefined' === typeof console ||
                  'function' !== typeof console.error ||
                  console.error(
                    'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                  ),
                'undefined' !== typeof Symbol &&
                  Symbol.species &&
                  s[Symbol.species] === s &&
                  Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                  }),
                (s.poolSize = 8192),
                (s.from = function(t, e, r) {
                  return u(t, e, r)
                }),
                (s.prototype.__proto__ = Uint8Array.prototype),
                (s.__proto__ = Uint8Array),
                (s.alloc = function(t, e, r) {
                  return (function(t, e, r) {
                    return (
                      h(t),
                      t <= 0
                        ? a(t)
                        : void 0 !== e
                        ? 'string' === typeof r
                          ? a(t).fill(e, r)
                          : a(t).fill(e)
                        : a(t)
                    )
                  })(t, e, r)
                }),
                (s.allocUnsafe = function(t) {
                  return f(t)
                }),
                (s.allocUnsafeSlow = function(t) {
                  return f(t)
                }),
                (s.isBuffer = function(t) {
                  return null != t && !0 === t._isBuffer
                }),
                (s.compare = function(t, e) {
                  if (!s.isBuffer(t) || !s.isBuffer(e))
                    throw new TypeError('Arguments must be Buffers')
                  if (t === e) return 0
                  for (
                    var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
                    i < o;
                    ++i
                  )
                    if (t[i] !== e[i]) {
                      ;(r = t[i]), (n = e[i])
                      break
                    }
                  return r < n ? -1 : n < r ? 1 : 0
                }),
                (s.isEncoding = function(t) {
                  switch (String(t).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return !0
                    default:
                      return !1
                  }
                }),
                (s.concat = function(t, e) {
                  if (!Array.isArray(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    )
                  if (0 === t.length) return s.alloc(0)
                  var r
                  if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
                  var n = s.allocUnsafe(e),
                    i = 0
                  for (r = 0; r < t.length; ++r) {
                    var o = t[r]
                    if (!s.isBuffer(o))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      )
                    o.copy(n, i), (i += o.length)
                  }
                  return n
                }),
                (s.byteLength = p),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function() {
                  var t = this.length
                  if (t % 2 !== 0)
                    throw new RangeError(
                      'Buffer size must be a multiple of 16-bits'
                    )
                  for (var e = 0; e < t; e += 2) g(this, e, e + 1)
                  return this
                }),
                (s.prototype.swap32 = function() {
                  var t = this.length
                  if (t % 4 !== 0)
                    throw new RangeError(
                      'Buffer size must be a multiple of 32-bits'
                    )
                  for (var e = 0; e < t; e += 4)
                    g(this, e, e + 3), g(this, e + 1, e + 2)
                  return this
                }),
                (s.prototype.swap64 = function() {
                  var t = this.length
                  if (t % 8 !== 0)
                    throw new RangeError(
                      'Buffer size must be a multiple of 64-bits'
                    )
                  for (var e = 0; e < t; e += 8)
                    g(this, e, e + 7),
                      g(this, e + 1, e + 6),
                      g(this, e + 2, e + 5),
                      g(this, e + 3, e + 4)
                  return this
                }),
                (s.prototype.toString = function() {
                  var t = this.length
                  return 0 === t
                    ? ''
                    : 0 === arguments.length
                    ? I(this, 0, t)
                    : y.apply(this, arguments)
                }),
                (s.prototype.equals = function(t) {
                  if (!s.isBuffer(t))
                    throw new TypeError('Argument must be a Buffer')
                  return this === t || 0 === s.compare(this, t)
                }),
                (s.prototype.inspect = function() {
                  var t = '',
                    e = r.INSPECT_MAX_BYTES
                  return (
                    this.length > 0 &&
                      ((t = this.toString('hex', 0, e)
                        .match(/.{2}/g)
                        .join(' ')),
                      this.length > e && (t += ' ... ')),
                    '<Buffer ' + t + '>'
                  )
                }),
                (s.prototype.compare = function(t, e, r, n, i) {
                  if (!s.isBuffer(t))
                    throw new TypeError('Argument must be a Buffer')
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === r && (r = t ? t.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    e < 0 || r > t.length || n < 0 || i > this.length)
                  )
                    throw new RangeError('out of range index')
                  if (n >= i && e >= r) return 0
                  if (n >= i) return -1
                  if (e >= r) return 1
                  if (
                    ((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)
                  )
                    return 0
                  for (
                    var o = i - n,
                      a = r - e,
                      u = Math.min(o, a),
                      h = this.slice(n, i),
                      f = t.slice(e, r),
                      c = 0;
                    c < u;
                    ++c
                  )
                    if (h[c] !== f[c]) {
                      ;(o = h[c]), (a = f[c])
                      break
                    }
                  return o < a ? -1 : a < o ? 1 : 0
                }),
                (s.prototype.includes = function(t, e, r) {
                  return -1 !== this.indexOf(t, e, r)
                }),
                (s.prototype.indexOf = function(t, e, r) {
                  return v(this, t, e, r, !0)
                }),
                (s.prototype.lastIndexOf = function(t, e, r) {
                  return v(this, t, e, r, !1)
                }),
                (s.prototype.write = function(t, e, r, n) {
                  if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
                  else if (void 0 === r && 'string' === typeof e)
                    (n = e), (r = this.length), (e = 0)
                  else {
                    if (!isFinite(e))
                      throw new Error(
                        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                      )
                    ;(e >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                        : ((n = r), (r = void 0))
                  }
                  var i = this.length - e
                  if (
                    ((void 0 === r || r > i) && (r = i),
                    (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                  )
                    throw new RangeError(
                      'Attempt to write outside buffer bounds'
                    )
                  n || (n = 'utf8')
                  for (var o = !1; ; )
                    switch (n) {
                      case 'hex':
                        return b(this, t, e, r)
                      case 'utf8':
                      case 'utf-8':
                        return m(this, t, e, r)
                      case 'ascii':
                        return w(this, t, e, r)
                      case 'latin1':
                      case 'binary':
                        return k(this, t, e, r)
                      case 'base64':
                        return E(this, t, e, r)
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return T(this, t, e, r)
                      default:
                        if (o) throw new TypeError('Unknown encoding: ' + n)
                        ;(n = ('' + n).toLowerCase()), (o = !0)
                    }
                }),
                (s.prototype.toJSON = function() {
                  return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  }
                })
              var L = 4096
              function x(t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
                return n
              }
              function A(t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
                return n
              }
              function B(t, e, r) {
                var n,
                  i = t.length
                ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i)
                for (var o = '', a = e; a < r; ++a)
                  o += (n = t[a]) < 16 ? '0' + n.toString(16) : n.toString(16)
                return o
              }
              function C(t, e, r) {
                for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2)
                  i += String.fromCharCode(n[o] + 256 * n[o + 1])
                return i
              }
              function _(t, e, r) {
                if (t % 1 !== 0 || t < 0)
                  throw new RangeError('offset is not uint')
                if (t + e > r)
                  throw new RangeError('Trying to access beyond buffer length')
              }
              function P(t, e, r, n, i, o) {
                if (!s.isBuffer(t))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  )
                if (e > i || e < o)
                  throw new RangeError('"value" argument is out of bounds')
                if (r + n > t.length) throw new RangeError('Index out of range')
              }
              function U(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError('Index out of range')
                if (r < 0) throw new RangeError('Index out of range')
              }
              function N(t, e, r, n, o) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  o || U(t, 0, r, 4),
                  i.write(t, e, r, n, 23, 4),
                  r + 4
                )
              }
              function O(t, e, r, n, o) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  o || U(t, 0, r, 8),
                  i.write(t, e, r, n, 52, 8),
                  r + 8
                )
              }
              ;(s.prototype.slice = function(t, e) {
                var r = this.length
                ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                  (e = void 0 === e ? r : ~~e) < 0
                    ? (e += r) < 0 && (e = 0)
                    : e > r && (e = r),
                  e < t && (e = t)
                var n = this.subarray(t, e)
                return (n.__proto__ = s.prototype), n
              }),
                (s.prototype.readUIntLE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || _(t, e, this.length)
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i
                  return n
                }),
                (s.prototype.readUIntBE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || _(t, e, this.length)
                  for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i
                  return n
                }),
                (s.prototype.readUInt8 = function(t, e) {
                  return (t >>>= 0), e || _(t, 1, this.length), this[t]
                }),
                (s.prototype.readUInt16LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  )
                }),
                (s.prototype.readUInt16BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  )
                }),
                (s.prototype.readUInt32LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  )
                }),
                (s.prototype.readUInt32BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  )
                }),
                (s.prototype.readIntLE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || _(t, e, this.length)
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                }),
                (s.prototype.readIntBE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || _(t, e, this.length)
                  for (
                    var n = e, i = 1, o = this[t + --n];
                    n > 0 && (i *= 256);

                  )
                    o += this[t + --n] * i
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                }),
                (s.prototype.readInt8 = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                  )
                }),
                (s.prototype.readInt16LE = function(t, e) {
                  ;(t >>>= 0), e || _(t, 2, this.length)
                  var r = this[t] | (this[t + 1] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (s.prototype.readInt16BE = function(t, e) {
                  ;(t >>>= 0), e || _(t, 2, this.length)
                  var r = this[t + 1] | (this[t] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (s.prototype.readInt32LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  )
                }),
                (s.prototype.readInt32BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  )
                }),
                (s.prototype.readFloatLE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  )
                }),
                (s.prototype.readFloatBE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  )
                }),
                (s.prototype.readDoubleLE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  )
                }),
                (s.prototype.readDoubleBE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || _(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  )
                }),
                (s.prototype.writeUIntLE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1
                    P(this, t, e, r, i, 0)
                  }
                  var o = 1,
                    a = 0
                  for (this[e] = 255 & t; ++a < r && (o *= 256); )
                    this[e + a] = (t / o) & 255
                  return e + r
                }),
                (s.prototype.writeUIntBE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1
                    P(this, t, e, r, i, 0)
                  }
                  var o = r - 1,
                    a = 1
                  for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                    this[e + o] = (t / a) & 255
                  return e + r
                }),
                (s.prototype.writeUInt8 = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 1, 255, 0),
                    (this[e] = 255 & t),
                    e + 1
                  )
                }),
                (s.prototype.writeUInt16LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 65535, 0),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  )
                }),
                (s.prototype.writeUInt16BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 65535, 0),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  )
                }),
                (s.prototype.writeUInt32LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 4294967295, 0),
                    (this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t),
                    e + 4
                  )
                }),
                (s.prototype.writeUInt32BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 4294967295, 0),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  )
                }),
                (s.prototype.writeIntLE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1)
                    P(this, t, e, r, i - 1, -i)
                  }
                  var o = 0,
                    a = 1,
                    s = 0
                  for (this[e] = 255 & t; ++o < r && (a *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                      (this[e + o] = (((t / a) >> 0) - s) & 255)
                  return e + r
                }),
                (s.prototype.writeIntBE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1)
                    P(this, t, e, r, i - 1, -i)
                  }
                  var o = r - 1,
                    a = 1,
                    s = 0
                  for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                      (this[e + o] = (((t / a) >> 0) - s) & 255)
                  return e + r
                }),
                (s.prototype.writeInt8 = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[e] = 255 & t),
                    e + 1
                  )
                }),
                (s.prototype.writeInt16LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 32767, -32768),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  )
                }),
                (s.prototype.writeInt16BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 2, 32767, -32768),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  )
                }),
                (s.prototype.writeInt32LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24),
                    e + 4
                  )
                }),
                (s.prototype.writeInt32BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || P(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  )
                }),
                (s.prototype.writeFloatLE = function(t, e, r) {
                  return N(this, t, e, !0, r)
                }),
                (s.prototype.writeFloatBE = function(t, e, r) {
                  return N(this, t, e, !1, r)
                }),
                (s.prototype.writeDoubleLE = function(t, e, r) {
                  return O(this, t, e, !0, r)
                }),
                (s.prototype.writeDoubleBE = function(t, e, r) {
                  return O(this, t, e, !1, r)
                }),
                (s.prototype.copy = function(t, e, r, n) {
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    n > 0 && n < r && (n = r),
                    n === r)
                  )
                    return 0
                  if (0 === t.length || 0 === this.length) return 0
                  if (e < 0) throw new RangeError('targetStart out of bounds')
                  if (r < 0 || r >= this.length)
                    throw new RangeError('sourceStart out of bounds')
                  if (n < 0) throw new RangeError('sourceEnd out of bounds')
                  n > this.length && (n = this.length),
                    t.length - e < n - r && (n = t.length - e + r)
                  var i,
                    o = n - r
                  if (this === t && r < e && e < n)
                    for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r]
                  else if (o < 1e3)
                    for (i = 0; i < o; ++i) t[i + e] = this[i + r]
                  else
                    Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e)
                  return o
                }),
                (s.prototype.fill = function(t, e, r, n) {
                  if ('string' === typeof t) {
                    if (
                      ('string' === typeof e
                        ? ((n = e), (e = 0), (r = this.length))
                        : 'string' === typeof r && ((n = r), (r = this.length)),
                      1 === t.length)
                    ) {
                      var i = t.charCodeAt(0)
                      i < 256 && (t = i)
                    }
                    if (void 0 !== n && 'string' !== typeof n)
                      throw new TypeError('encoding must be a string')
                    if ('string' === typeof n && !s.isEncoding(n))
                      throw new TypeError('Unknown encoding: ' + n)
                  } else 'number' === typeof t && (t &= 255)
                  if (e < 0 || this.length < e || this.length < r)
                    throw new RangeError('Out of range index')
                  if (r <= e) return this
                  var o
                  if (
                    ((e >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    t || (t = 0),
                    'number' === typeof t)
                  )
                    for (o = e; o < r; ++o) this[o] = t
                  else {
                    var a = s.isBuffer(t) ? t : new s(t, n),
                      u = a.length
                    for (o = 0; o < r - e; ++o) this[o + e] = a[o % u]
                  }
                  return this
                })
              var M = /[^+\/0-9A-Za-z-_]/g
              function R(t, e) {
                var r
                e = e || 1 / 0
                for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                  if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319) {
                        ;(e -= 3) > -1 && o.push(239, 191, 189)
                        continue
                      }
                      if (a + 1 === n) {
                        ;(e -= 3) > -1 && o.push(239, 191, 189)
                        continue
                      }
                      i = r
                      continue
                    }
                    if (r < 56320) {
                      ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
                      continue
                    }
                    r = 65536 + (((i - 55296) << 10) | (r - 56320))
                  } else i && (e -= 3) > -1 && o.push(239, 191, 189)
                  if (((i = null), r < 128)) {
                    if ((e -= 1) < 0) break
                    o.push(r)
                  } else if (r < 2048) {
                    if ((e -= 2) < 0) break
                    o.push((r >> 6) | 192, (63 & r) | 128)
                  } else if (r < 65536) {
                    if ((e -= 3) < 0) break
                    o.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    )
                  } else {
                    if (!(r < 1114112)) throw new Error('Invalid code point')
                    if ((e -= 4) < 0) break
                    o.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    )
                  }
                }
                return o
              }
              function D(t) {
                return n.toByteArray(
                  (function(t) {
                    if ((t = t.trim().replace(M, '')).length < 2) return ''
                    for (; t.length % 4 !== 0; ) t += '='
                    return t
                  })(t)
                )
              }
              function F(t, e, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= e.length || i >= t.length);
                  ++i
                )
                  e[i + r] = t[i]
                return i
              }
              function j(t) {
                return (
                  t instanceof ArrayBuffer ||
                  (null != t &&
                    null != t.constructor &&
                    'ArrayBuffer' === t.constructor.name &&
                    'number' === typeof t.byteLength)
                )
              }
              function G(t) {
                return (
                  'function' === typeof ArrayBuffer.isView &&
                  ArrayBuffer.isView(t)
                )
              }
              function z(t) {
                return t !== t
              }
            },
            { 'base64-js': 1, ieee754: 3 }
          ],
          3: [
            function(t, e, r) {
              ;(r.read = function(t, e, r, n, i) {
                var o,
                  a,
                  s = 8 * i - n - 1,
                  u = (1 << s) - 1,
                  h = u >> 1,
                  f = -7,
                  c = r ? i - 1 : 0,
                  l = r ? -1 : 1,
                  p = t[e + c]
                for (
                  c += l, o = p & ((1 << -f) - 1), p >>= -f, f += s;
                  f > 0;
                  o = 256 * o + t[e + c], c += l, f -= 8
                );
                for (
                  a = o & ((1 << -f) - 1), o >>= -f, f += n;
                  f > 0;
                  a = 256 * a + t[e + c], c += l, f -= 8
                );
                if (0 === o) o = 1 - h
                else {
                  if (o === u) return a ? NaN : (1 / 0) * (p ? -1 : 1)
                  ;(a += Math.pow(2, n)), (o -= h)
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - n)
              }),
                (r.write = function(t, e, r, n, i, o) {
                  var a,
                    s,
                    u,
                    h = 8 * o - i - 1,
                    f = (1 << h) - 1,
                    c = f >> 1,
                    l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = n ? 0 : o - 1,
                    y = n ? 1 : -1,
                    g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
                  for (
                    e = Math.abs(e),
                      isNaN(e) || e === 1 / 0
                        ? ((s = isNaN(e) ? 1 : 0), (a = f))
                        : ((a = Math.floor(Math.log(e) / Math.LN2)),
                          e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                          (e += a + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) *
                            u >=
                            2 && (a++, (u /= 2)),
                          a + c >= f
                            ? ((s = 0), (a = f))
                            : a + c >= 1
                            ? ((s = (e * u - 1) * Math.pow(2, i)), (a += c))
                            : ((s = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                              (a = 0)));
                    i >= 8;
                    t[r + p] = 255 & s, p += y, s /= 256, i -= 8
                  );
                  for (
                    a = (a << i) | s, h += i;
                    h > 0;
                    t[r + p] = 255 & a, p += y, a /= 256, h -= 8
                  );
                  t[r + p - y] |= 128 * g
                })
            },
            {}
          ],
          4: [
            function(t, e, r) {
              'use strict'
              for (
                var n = {
                    VERSION: '2.0.5',
                    NOTES: [],
                    CIRCLE_OF_FOURTHS: [
                      'C',
                      'F',
                      'Bb',
                      'Eb',
                      'Ab',
                      'Db',
                      'Gb',
                      'Cb',
                      'Fb',
                      'Bbb',
                      'Ebb',
                      'Abb'
                    ],
                    CIRCLE_OF_FIFTHS: [
                      'C',
                      'G',
                      'D',
                      'A',
                      'E',
                      'B',
                      'F#',
                      'C#',
                      'G#',
                      'D#',
                      'A#',
                      'E#'
                    ]
                  },
                  i = [
                    ['C'],
                    ['C#', 'Db'],
                    ['D'],
                    ['D#', 'Eb'],
                    ['E'],
                    ['F'],
                    ['F#', 'Gb'],
                    ['G'],
                    ['G#', 'Ab'],
                    ['A'],
                    ['A#', 'Bb'],
                    ['B']
                  ],
                  o = 0,
                  a = function(t) {
                    i.forEach(function(e) {
                      e.forEach(function(e) {
                        return (n.NOTES[o] = e + t)
                      }),
                        o++
                    })
                  },
                  s = -1;
                s <= 9;
                s++
              )
                a(s)
              r.Constants = n
            },
            {}
          ],
          5: [
            function(t, e, r) {
              'use strict'
              var n = t('./player'),
                i = t('./utils'),
                o = t('./constants')
              e.exports = {
                Player: n.Player,
                Utils: i.Utils,
                Constants: o.Constants
              }
            },
            { './constants': 4, './player': 6, './utils': 8 }
          ],
          6: [
            function(t, e, r) {
              'use strict'
              var n =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function(t) {
                        return typeof t
                      }
                    : function(t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                      },
                i = (function() {
                  function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                      var n = e[r]
                      ;(n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                  }
                  return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                  }
                })(),
                o = t('./utils').Utils,
                a = t('./track').Track
              Uint8Array.prototype.forEach ||
                Object.defineProperty(Uint8Array.prototype, 'forEach', {
                  value: Array.prototype.forEach
                })
              var s = (function() {
                function e(t, r) {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function')
                  })(this, e),
                    (this.sampleRate = 5),
                    (this.startTime = 0),
                    (this.buffer = r || null),
                    this.division,
                    this.format,
                    (this.setIntervalId = !1),
                    (this.tracks = []),
                    (this.instruments = []),
                    (this.defaultTempo = 120),
                    (this.tempo = null),
                    (this.startTick = 0),
                    (this.tick = 0),
                    (this.lastTick = null),
                    (this.inLoop = !1),
                    (this.totalTicks = 0),
                    (this.events = []),
                    (this.totalEvents = 0),
                    (this.eventListeners = {}),
                    'function' === typeof t && this.on('midiEvent', t)
                }
                return (
                  i(e, [
                    {
                      key: 'loadFile',
                      value: function(e) {
                        var r = t('fs')
                        return (
                          (this.buffer = r.readFileSync(e)), this.fileLoaded()
                        )
                      }
                    },
                    {
                      key: 'loadArrayBuffer',
                      value: function(t) {
                        return (
                          (this.buffer = new Uint8Array(t)), this.fileLoaded()
                        )
                      }
                    },
                    {
                      key: 'loadDataUri',
                      value: function(t) {
                        for (
                          var e = o.atob(t.split(',')[1]),
                            r = new Uint8Array(e.length),
                            n = 0;
                          n < e.length;
                          n++
                        )
                          r[n] = e.charCodeAt(n)
                        return (this.buffer = r), this.fileLoaded()
                      }
                    },
                    {
                      key: 'getFilesize',
                      value: function() {
                        return this.buffer ? this.buffer.length : 0
                      }
                    },
                    {
                      key: 'fileLoaded',
                      value: function() {
                        if (!this.validate())
                          throw 'Invalid MIDI file; should start with MThd'
                        return this.setTempo(this.defaultTempo)
                          .getDivision()
                          .getFormat()
                          .getTracks()
                          .dryRun()
                      }
                    },
                    {
                      key: 'validate',
                      value: function() {
                        return (
                          'MThd' ===
                          o.bytesToLetters(this.buffer.subarray(0, 4))
                        )
                      }
                    },
                    {
                      key: 'getFormat',
                      value: function() {
                        return (
                          (this.format = o.bytesToNumber(
                            this.buffer.subarray(8, 10)
                          )),
                          this
                        )
                      }
                    },
                    {
                      key: 'getTracks',
                      value: function() {
                        this.tracks = []
                        for (var t = 0; t < this.buffer.length; ) {
                          if (
                            'MTrk' ==
                            o.bytesToLetters(this.buffer.subarray(t, t + 4))
                          ) {
                            var e = o.bytesToNumber(
                              this.buffer.subarray(t + 4, t + 8)
                            )
                            this.tracks.push(
                              new a(
                                this.tracks.length,
                                this.buffer.subarray(t + 8, t + 8 + e)
                              )
                            )
                          }
                          t +=
                            o.bytesToNumber(
                              this.buffer.subarray(t + 4, t + 8)
                            ) + 8
                        }
                        return this
                      }
                    },
                    {
                      key: 'enableTrack',
                      value: function(t) {
                        return this.tracks[t - 1].enable(), this
                      }
                    },
                    {
                      key: 'disableTrack',
                      value: function(t) {
                        return this.tracks[t - 1].disable(), this
                      }
                    },
                    {
                      key: 'getDivision',
                      value: function() {
                        return (
                          (this.division = o.bytesToNumber(
                            this.buffer.subarray(12, 14)
                          )),
                          this
                        )
                      }
                    },
                    {
                      key: 'playLoop',
                      value: function(t) {
                        this.inLoop ||
                          ((this.inLoop = !0),
                          (this.tick = this.getCurrentTick()),
                          this.tracks.forEach(function(e) {
                            if (!t && this.endOfFile())
                              this.triggerPlayerEvent('endOfFile'), this.stop()
                            else {
                              var r = e.handleEvent(this.tick, t)
                              t && r
                                ? (r.hasOwnProperty('name') &&
                                    'Set Tempo' === r.name &&
                                    ((this.defaultTempo = r.data),
                                    this.setTempo(r.data)),
                                  r.hasOwnProperty('name') &&
                                    'Program Change' === r.name &&
                                    (this.instruments.includes(r.value) ||
                                      this.instruments.push(r.value)))
                                : r && this.emitEvent(r)
                            }
                          }, this),
                          t ||
                            this.triggerPlayerEvent('playing', {
                              tick: this.tick
                            }),
                          (this.inLoop = !1))
                      }
                    },
                    {
                      key: 'setTempo',
                      value: function(t) {
                        return (this.tempo = t), this
                      }
                    },
                    {
                      key: 'setStartTime',
                      value: function(t) {
                        this.startTime = t
                      }
                    },
                    {
                      key: 'play',
                      value: function() {
                        if (this.isPlaying()) throw 'Already playing...'
                        return (
                          this.startTime ||
                            (this.startTime = new Date().getTime()),
                          (this.setIntervalId = setInterval(
                            this.playLoop.bind(this),
                            this.sampleRate
                          )),
                          this
                        )
                      }
                    },
                    {
                      key: 'pause',
                      value: function() {
                        return (
                          clearInterval(this.setIntervalId),
                          (this.setIntervalId = !1),
                          (this.startTick = this.tick),
                          (this.startTime = 0),
                          this
                        )
                      }
                    },
                    {
                      key: 'stop',
                      value: function() {
                        return (
                          clearInterval(this.setIntervalId),
                          (this.setIntervalId = !1),
                          (this.startTick = 0),
                          (this.startTime = 0),
                          this.resetTracks(),
                          this
                        )
                      }
                    },
                    {
                      key: 'skipToTick',
                      value: function(t) {
                        return (
                          this.stop(),
                          (this.startTick = t),
                          this.tracks.forEach(function(e) {
                            e.setEventIndexByTick(t)
                          }),
                          this
                        )
                      }
                    },
                    {
                      key: 'skipToPercent',
                      value: function(t) {
                        if (t < 0 || t > 100)
                          throw 'Percent must be number between 1 and 100.'
                        return (
                          this.skipToTick(
                            Math.round((t / 100) * this.totalTicks)
                          ),
                          this
                        )
                      }
                    },
                    {
                      key: 'skipToSeconds',
                      value: function(t) {
                        var e = this.getSongTime()
                        if (t < 0 || t > e)
                          throw t + ' seconds not within song time of ' + e
                        return this.skipToPercent((t / e) * 100), this
                      }
                    },
                    {
                      key: 'isPlaying',
                      value: function() {
                        return (
                          this.setIntervalId > 0 ||
                          'object' === n(this.setIntervalId)
                        )
                      }
                    },
                    {
                      key: 'dryRun',
                      value: function() {
                        for (this.resetTracks(); !this.endOfFile(); )
                          this.playLoop(!0)
                        return (
                          (this.events = this.getEvents()),
                          (this.totalEvents = this.getTotalEvents()),
                          (this.totalTicks = this.getTotalTicks()),
                          (this.startTick = 0),
                          (this.startTime = 0),
                          this.resetTracks(),
                          this.triggerPlayerEvent('fileLoaded', this),
                          this
                        )
                      }
                    },
                    {
                      key: 'resetTracks',
                      value: function() {
                        return (
                          this.tracks.forEach(function(t) {
                            return t.reset()
                          }),
                          this
                        )
                      }
                    },
                    {
                      key: 'getEvents',
                      value: function() {
                        return this.tracks.map(function(t) {
                          return t.events
                        })
                      }
                    },
                    {
                      key: 'getTotalTicks',
                      value: function() {
                        return Math.max.apply(
                          null,
                          this.tracks.map(function(t) {
                            return t.delta
                          })
                        )
                      }
                    },
                    {
                      key: 'getTotalEvents',
                      value: function() {
                        return this.tracks.reduce(
                          function(t, e) {
                            return {
                              events: {
                                length: t.events.length + e.events.length
                              }
                            }
                          },
                          { events: { length: 0 } }
                        ).events.length
                      }
                    },
                    {
                      key: 'getSongTime',
                      value: function() {
                        return (
                          (this.totalTicks / this.division / this.tempo) * 60
                        )
                      }
                    },
                    {
                      key: 'getSongTimeRemaining',
                      value: function() {
                        return Math.round(
                          ((this.totalTicks - this.getCurrentTick()) /
                            this.division /
                            this.tempo) *
                            60
                        )
                      }
                    },
                    {
                      key: 'getSongPercentRemaining',
                      value: function() {
                        return Math.round(
                          (this.getSongTimeRemaining() / this.getSongTime()) *
                            100
                        )
                      }
                    },
                    {
                      key: 'bytesProcessed',
                      value: function() {
                        return (
                          14 +
                          8 * this.tracks.length +
                          this.tracks.reduce(
                            function(t, e) {
                              return { pointer: t.pointer + e.pointer }
                            },
                            { pointer: 0 }
                          ).pointer
                        )
                      }
                    },
                    {
                      key: 'eventsPlayed',
                      value: function() {
                        return this.tracks.reduce(
                          function(t, e) {
                            return { eventIndex: t.eventIndex + e.eventIndex }
                          },
                          { eventIndex: 0 }
                        ).eventIndex
                      }
                    },
                    {
                      key: 'endOfFile',
                      value: function() {
                        return this.isPlaying()
                          ? this.totalTicks - this.tick <= 0
                          : this.bytesProcessed() == this.buffer.length
                      }
                    },
                    {
                      key: 'getCurrentTick',
                      value: function() {
                        return !this.startTime && this.tick
                          ? this.startTick
                          : this.startTime
                          ? Math.round(
                              ((new Date().getTime() - this.startTime) / 1e3) *
                                (this.division * (this.tempo / 60))
                            ) + this.startTick
                          : 0
                      }
                    },
                    {
                      key: 'emitEvent',
                      value: function(t) {
                        return this.triggerPlayerEvent('midiEvent', t), this
                      }
                    },
                    {
                      key: 'on',
                      value: function(t, e) {
                        return (
                          this.eventListeners.hasOwnProperty(t) ||
                            (this.eventListeners[t] = []),
                          this.eventListeners[t].push(e),
                          this
                        )
                      }
                    },
                    {
                      key: 'triggerPlayerEvent',
                      value: function(t, e) {
                        return (
                          this.eventListeners.hasOwnProperty(t) &&
                            this.eventListeners[t].forEach(function(t) {
                              return t(e || {})
                            }),
                          this
                        )
                      }
                    }
                  ]),
                  e
                )
              })()
              r.Player = s
            },
            { './track': 7, './utils': 8, fs: 'fs' }
          ],
          7: [
            function(t, e, r) {
              'use strict'
              var n = (function() {
                  function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                      var n = e[r]
                      ;(n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                  }
                  return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                  }
                })(),
                i = t('./constants').Constants,
                o = t('./utils').Utils,
                a = (function() {
                  function t(e, r) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                    })(this, t),
                      (this.enabled = !0),
                      (this.eventIndex = 0),
                      (this.pointer = 0),
                      (this.lastTick = 0),
                      (this.lastStatus = null),
                      (this.index = e),
                      (this.data = r),
                      (this.delta = 0),
                      (this.runningDelta = 0),
                      (this.events = [])
                  }
                  return (
                    n(t, [
                      {
                        key: 'reset',
                        value: function() {
                          return (
                            (this.enabled = !0),
                            (this.eventIndex = 0),
                            (this.pointer = 0),
                            (this.lastTick = 0),
                            (this.lastStatus = null),
                            (this.delta = 0),
                            (this.runningDelta = 0),
                            this
                          )
                        }
                      },
                      {
                        key: 'enable',
                        value: function() {
                          return (this.enabled = !0), this
                        }
                      },
                      {
                        key: 'disable',
                        value: function() {
                          return (this.enabled = !1), this
                        }
                      },
                      {
                        key: 'setEventIndexByTick',
                        value: function(t) {
                          for (var e in ((t = t || 0), this.events))
                            if (this.events[e].tick >= t)
                              return (this.eventIndex = e), this
                        }
                      },
                      {
                        key: 'getCurrentByte',
                        value: function() {
                          return this.data[this.pointer]
                        }
                      },
                      {
                        key: 'getDeltaByteCount',
                        value: function() {
                          for (var t = this.getCurrentByte(), e = 1; t >= 128; )
                            (t = this.data[this.pointer + e]), e++
                          return e
                        }
                      },
                      {
                        key: 'getDelta',
                        value: function() {
                          return o.readVarInt(
                            this.data.subarray(
                              this.pointer,
                              this.pointer + this.getDeltaByteCount()
                            )
                          )
                        }
                      },
                      {
                        key: 'handleEvent',
                        value: function(t, e) {
                          if ((e = e || !1)) {
                            var r = t - this.lastTick,
                              n = this.getDelta(),
                              i = r >= n
                            if (this.pointer < this.data.length && (e || i)) {
                              var o = this.parseEvent()
                              if (this.enabled) return o
                            }
                          } else if (
                            this.events[this.eventIndex] &&
                            this.events[this.eventIndex].tick <= t &&
                            (this.eventIndex++, this.enabled)
                          )
                            return this.events[this.eventIndex - 1]
                          return null
                        }
                      },
                      {
                        key: 'getStringData',
                        value: function(t) {
                          this.pointer
                          var e = o.readVarInt(
                            this.data.subarray(t + 2, t + 2 + 1)
                          )
                          return o.bytesToLetters(
                            this.data.subarray(t + 1 + 2, t + 1 + e + 2)
                          )
                        }
                      },
                      {
                        key: 'parseEvent',
                        value: function() {
                          var t = this.pointer + this.getDeltaByteCount(),
                            e = {},
                            r = this.getDeltaByteCount()
                          if (
                            ((e.track = this.index + 1),
                            (e.delta = this.getDelta()),
                            (this.lastTick = this.lastTick + e.delta),
                            (this.runningDelta += e.delta),
                            (e.tick = this.runningDelta),
                            (e.byteIndex = this.pointer),
                            255 == this.data[t])
                          ) {
                            switch (this.data[t + 1]) {
                              case 0:
                                e.name = 'Sequence Number'
                                break
                              case 1:
                                ;(e.name = 'Text Event'),
                                  (e.string = this.getStringData(t))
                                break
                              case 2:
                                e.name = 'Copyright Notice'
                                break
                              case 3:
                                ;(e.name = 'Sequence/Track Name'),
                                  (e.string = this.getStringData(t))
                                break
                              case 4:
                                ;(e.name = 'Instrument Name'),
                                  (e.string = this.getStringData(t))
                                break
                              case 5:
                                ;(e.name = 'Lyric'),
                                  (e.string = this.getStringData(t))
                                break
                              case 6:
                                e.name = 'Marker'
                                break
                              case 7:
                                ;(e.name = 'Cue Point'),
                                  (e.string = this.getStringData(t))
                                break
                              case 9:
                                ;(e.name = 'Device Name'),
                                  (e.string = this.getStringData(t))
                                break
                              case 32:
                                e.name = 'MIDI Channel Prefix'
                                break
                              case 33:
                                ;(e.name = 'MIDI Port'),
                                  (e.data = o.bytesToNumber([this.data[t + 3]]))
                                break
                              case 47:
                                e.name = 'End of Track'
                                break
                              case 81:
                                ;(e.name = 'Set Tempo'),
                                  (e.data = Math.round(
                                    6e7 /
                                      o.bytesToNumber(
                                        this.data.subarray(t + 3, t + 6)
                                      )
                                  )),
                                  (this.tempo = e.data)
                                break
                              case 84:
                                e.name = 'SMTPE Offset'
                                break
                              case 88:
                                ;(e.name = 'Time Signature'),
                                  (e.data = this.data.subarray(t + 3, t + 7)),
                                  (e.timeSignature =
                                    e.data[0] + '/' + Math.pow(2, e.data[1]))
                                break
                              case 89:
                                ;(e.name = 'Key Signature'),
                                  (e.data = this.data.subarray(t + 3, t + 5)),
                                  e.data[0] >= 0
                                    ? (e.keySignature =
                                        i.CIRCLE_OF_FIFTHS[e.data[0]])
                                    : e.data[0] < 0 &&
                                      (e.keySignature =
                                        i.CIRCLE_OF_FOURTHS[
                                          Math.abs(e.data[0])
                                        ]),
                                  0 == e.data[1]
                                    ? (e.keySignature += ' Major')
                                    : 1 == e.data[1] &&
                                      (e.keySignature += ' Minor')
                                break
                              case 127:
                                e.name = 'Sequencer-Specific Meta-event'
                                break
                              default:
                                e.name =
                                  'Unknown: ' + this.data[t + 1].toString(16)
                            }
                            var n = this.data[this.pointer + r + 2]
                            this.pointer += r + 3 + n
                          } else if (240 == this.data[t]) {
                            e.name = 'Sysex'
                            var n = this.data[this.pointer + r + 1]
                            this.pointer += r + 2 + n
                          } else
                            this.data[t] < 128
                              ? ((e.running = !0),
                                (e.noteNumber = this.data[t]),
                                (e.noteName = i.NOTES[this.data[t]]),
                                (e.velocity = this.data[t + 1]),
                                this.lastStatus <= 143
                                  ? ((e.name = 'Note off'),
                                    (e.channel = this.lastStatus - 128 + 1))
                                  : this.lastStatus <= 159 &&
                                    ((e.name = 'Note on'),
                                    (e.channel = this.lastStatus - 144 + 1)),
                                (this.pointer += r + 2))
                              : ((this.lastStatus = this.data[t]),
                                this.data[t] <= 143
                                  ? ((e.name = 'Note off'),
                                    (e.channel = this.lastStatus - 128 + 1),
                                    (e.noteNumber = this.data[t + 1]),
                                    (e.noteName = i.NOTES[this.data[t + 1]]),
                                    (e.velocity = Math.round(
                                      (this.data[t + 2] / 127) * 100
                                    )),
                                    (this.pointer += r + 3))
                                  : this.data[t] <= 159
                                  ? ((e.name = 'Note on'),
                                    (e.channel = this.lastStatus - 144 + 1),
                                    (e.noteNumber = this.data[t + 1]),
                                    (e.noteName = i.NOTES[this.data[t + 1]]),
                                    (e.velocity = Math.round(
                                      (this.data[t + 2] / 127) * 100
                                    )),
                                    (this.pointer += r + 3))
                                  : this.data[t] <= 175
                                  ? ((e.name = 'Polyphonic Key Pressure'),
                                    (e.channel = this.lastStatus - 160 + 1),
                                    (e.note = i.NOTES[this.data[t + 1]]),
                                    (e.pressure = event[2]),
                                    (this.pointer += r + 3))
                                  : this.data[t] <= 191
                                  ? ((e.name = 'Controller Change'),
                                    (e.channel = this.lastStatus - 176 + 1),
                                    (e.number = this.data[t + 1]),
                                    (e.value = this.data[t + 2]),
                                    (this.pointer += r + 3))
                                  : this.data[t] <= 207
                                  ? ((e.name = 'Program Change'),
                                    (e.channel = this.lastStatus - 192 + 1),
                                    (e.value = this.data[t + 1]),
                                    (this.pointer += r + 2))
                                  : this.data[t] <= 223
                                  ? ((e.name = 'Channel Key Pressure'),
                                    (e.channel = this.lastStatus - 208 + 1),
                                    (this.pointer += r + 2))
                                  : this.data[t] <= 239
                                  ? ((e.name = 'Pitch Bend'),
                                    (e.channel = this.lastStatus - 224 + 1),
                                    (this.pointer += r + 3))
                                  : (e.name =
                                      'Unknown.  Pointer: ' +
                                      this.pointer.toString() +
                                      ' ' +
                                      t.toString() +
                                      ' ' +
                                      this.data.length))
                          return (this.delta += e.delta), this.events.push(e), e
                        }
                      },
                      {
                        key: 'endOfTrack',
                        value: function() {
                          return (
                            255 == this.data[this.pointer + 1] &&
                            47 == this.data[this.pointer + 2] &&
                            0 == this.data[this.pointer + 3]
                          )
                        }
                      }
                    ]),
                    t
                  )
                })()
              e.exports.Track = a
            },
            { './constants': 4, './utils': 8 }
          ],
          8: [
            function(t, e, r) {
              ;(function(t) {
                'use strict'
                var e = (function() {
                    function t(t, e) {
                      for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        ;(n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          'value' in n && (n.writable = !0),
                          Object.defineProperty(t, n.key, n)
                      }
                    }
                    return function(e, r, n) {
                      return r && t(e.prototype, r), n && t(e, n), e
                    }
                  })(),
                  n = (function() {
                    function r() {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          )
                      })(this, r)
                    }
                    return (
                      e(r, null, [
                        {
                          key: 'byteToHex',
                          value: function(t) {
                            return ('0' + t.toString(16)).slice(-2)
                          }
                        },
                        {
                          key: 'bytesToHex',
                          value: function(t) {
                            var e = []
                            return (
                              t.forEach(function(t) {
                                return e.push(r.byteToHex(t))
                              }),
                              e.join('')
                            )
                          }
                        },
                        {
                          key: 'hexToNumber',
                          value: function(t) {
                            return parseInt(t, 16)
                          }
                        },
                        {
                          key: 'bytesToNumber',
                          value: function(t) {
                            return r.hexToNumber(r.bytesToHex(t))
                          }
                        },
                        {
                          key: 'bytesToLetters',
                          value: function(t) {
                            var e = []
                            return (
                              t.forEach(function(t) {
                                return e.push(String.fromCharCode(t))
                              }),
                              e.join('')
                            )
                          }
                        },
                        {
                          key: 'decToBinary',
                          value: function(t) {
                            return (t >>> 0).toString(2)
                          }
                        },
                        {
                          key: 'readVarInt',
                          value: function(t) {
                            var e = 0
                            return (
                              t.forEach(function(t) {
                                var r = t
                                128 & r ? ((e += 127 & r), (e <<= 7)) : (e += r)
                              }),
                              e
                            )
                          }
                        },
                        {
                          key: 'atob',
                          value: (function(t) {
                            function e(e) {
                              return t.apply(this, arguments)
                            }
                            return (
                              (e.toString = function() {
                                return t.toString()
                              }),
                              e
                            )
                          })(function(e) {
                            return 'function' === typeof atob
                              ? atob(e)
                              : new t(e, 'base64').toString('binary')
                          })
                        }
                      ]),
                      r
                    )
                  })()
                r.Utils = n
              }.call(this, t('buffer').Buffer))
            },
            { buffer: 2 }
          ]
        },
        {},
        [5]
      )(5)
    }
  }
])
