;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    128: function(t, e, r) {
      var n
      t.exports = (function t(e, r, i) {
        function s(o, u) {
          if (!r[o]) {
            if (!e[o]) {
              var h = 'function' == typeof n && n
              if (!u && h) return n(o, !0)
              if (a) return a(o, !0)
              var f = new Error("Cannot find module '" + o + "'")
              throw ((f.code = 'MODULE_NOT_FOUND'), f)
            }
            var c = (r[o] = { exports: {} })
            e[o][0].call(
              c.exports,
              function(t) {
                var r = e[o][1][t]
                return s(r || t)
              },
              c,
              c.exports,
              t,
              e,
              r,
              i
            )
          }
          return r[o].exports
        }
        for (var a = 'function' == typeof n && n, o = 0; o < i.length; o++)
          s(i[o])
        return s
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
                    o,
                    u = t.length
                  ;(a = h(t)),
                    (o = new s((3 * u) / 4 - a)),
                    (r = a > 0 ? u - 4 : u)
                  var f = 0
                  for (e = 0; e < r; e += 4)
                    (n =
                      (i[t.charCodeAt(e)] << 18) |
                      (i[t.charCodeAt(e + 1)] << 12) |
                      (i[t.charCodeAt(e + 2)] << 6) |
                      i[t.charCodeAt(e + 3)]),
                      (o[f++] = (n >> 16) & 255),
                      (o[f++] = (n >> 8) & 255),
                      (o[f++] = 255 & n)
                  return (
                    2 === a
                      ? ((n =
                          (i[t.charCodeAt(e)] << 2) |
                          (i[t.charCodeAt(e + 1)] >> 4)),
                        (o[f++] = 255 & n))
                      : 1 === a &&
                        ((n =
                          (i[t.charCodeAt(e)] << 10) |
                          (i[t.charCodeAt(e + 1)] << 4) |
                          (i[t.charCodeAt(e + 2)] >> 2)),
                        (o[f++] = (n >> 8) & 255),
                        (o[f++] = 255 & n)),
                    o
                  )
                }),
                (r.fromByteArray = function(t) {
                  for (
                    var e,
                      r = t.length,
                      i = r % 3,
                      s = '',
                      a = [],
                      o = 0,
                      u = r - i;
                    o < u;
                    o += 16383
                  )
                    a.push(f(t, o, o + 16383 > u ? u : o + 16383))
                  return (
                    1 === i
                      ? ((e = t[r - 1]),
                        (s += n[e >> 2]),
                        (s += n[(e << 4) & 63]),
                        (s += '=='))
                      : 2 === i &&
                        ((e = (t[r - 2] << 8) + t[r - 1]),
                        (s += n[e >> 10]),
                        (s += n[(e >> 4) & 63]),
                        (s += n[(e << 2) & 63]),
                        (s += '=')),
                    a.push(s),
                    a.join('')
                  )
                })
              for (
                var n = [],
                  i = [],
                  s = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
                  a =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                  o = 0,
                  u = a.length;
                o < u;
                ++o
              )
                (n[o] = a[o]), (i[a.charCodeAt(o)] = o)
              function h(t) {
                var e = t.length
                if (e % 4 > 0)
                  throw new Error(
                    'Invalid string. Length must be a multiple of 4'
                  )
                return '=' === t[e - 2] ? 2 : '=' === t[e - 1] ? 1 : 0
              }
              function f(t, e, r) {
                for (var i, s, a = [], o = e; o < r; o += 3)
                  (i = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2]),
                    a.push(
                      n[((s = i) >> 18) & 63] +
                        n[(s >> 12) & 63] +
                        n[(s >> 6) & 63] +
                        n[63 & s]
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
              ;(r.Buffer = o),
                (r.SlowBuffer = function(t) {
                  return +t != t && (t = 0), o.alloc(+t)
                }),
                (r.INSPECT_MAX_BYTES = 50)
              var s = 2147483647
              function a(t) {
                if (t > s) throw new RangeError('Invalid typed array length')
                var e = new Uint8Array(t)
                return (e.__proto__ = o.prototype), e
              }
              function o(t, e, r) {
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
                            : new Uint8Array(t, e, r)).__proto__ = o.prototype),
                        n
                      )
                    })(t, e, r)
                  : 'string' === typeof t
                  ? (function(t, e) {
                      if (
                        (('string' === typeof e && '' !== e) || (e = 'utf8'),
                        !o.isEncoding(e))
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
                      if (o.isBuffer(t)) {
                        var e = 0 | l(t.length),
                          r = a(e)
                        return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
                      }
                      if (t) {
                        if (z(t) || 'length' in t)
                          return 'number' !== typeof t.length || H(t.length)
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
                if (t >= s)
                  throw new RangeError(
                    'Attempt to allocate Buffer larger than maximum size: 0x' +
                      s.toString(16) +
                      ' bytes'
                  )
                return 0 | t
              }
              function p(t, e) {
                if (o.isBuffer(t)) return t.length
                if (z(t) || j(t)) return t.byteLength
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
                      return O(t).length
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 2 * r
                    case 'hex':
                      return r >>> 1
                    case 'base64':
                      return R(t).length
                    default:
                      if (n) return O(t).length
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
                      return L(this, e, r)
                    case 'utf8':
                    case 'utf-8':
                      return I(this, e, r)
                    case 'ascii':
                      return B(this, e, r)
                    case 'latin1':
                    case 'binary':
                      return C(this, e, r)
                    case 'base64':
                      return S(this, e, r)
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return x(this, e, r)
                    default:
                      if (n) throw new TypeError('Unknown encoding: ' + t)
                      ;(t = (t + '').toLowerCase()), (n = !0)
                  }
              }
              function g(t, e, r) {
                var n = t[e]
                ;(t[e] = t[r]), (t[r] = n)
              }
              function d(t, e, r, n, i) {
                if (0 === t.length) return -1
                if (
                  ('string' === typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  H((r = +r)) && (r = i ? 0 : t.length - 1),
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
                  ('string' === typeof e && (e = o.from(e, n)), o.isBuffer(e))
                )
                  return 0 === e.length ? -1 : v(t, e, r, n, i)
                if ('number' === typeof e)
                  return (
                    (e &= 255),
                    'function' === typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(t, e, r)
                        : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                      : v(t, [e], r, n, i)
                  )
                throw new TypeError('val must be string, number or Buffer')
              }
              function v(t, e, r, n, i) {
                var s,
                  a = 1,
                  o = t.length,
                  u = e.length
                if (
                  void 0 !== n &&
                  ('ucs2' === (n = String(n).toLowerCase()) ||
                    'ucs-2' === n ||
                    'utf16le' === n ||
                    'utf-16le' === n)
                ) {
                  if (t.length < 2 || e.length < 2) return -1
                  ;(a = 2), (o /= 2), (u /= 2), (r /= 2)
                }
                function h(t, e) {
                  return 1 === a ? t[e] : t.readUInt16BE(e * a)
                }
                if (i) {
                  var f = -1
                  for (s = r; s < o; s++)
                    if (h(t, s) === h(e, -1 === f ? 0 : s - f)) {
                      if ((-1 === f && (f = s), s - f + 1 === u)) return f * a
                    } else -1 !== f && (s -= s - f), (f = -1)
                } else
                  for (r + u > o && (r = o - u), s = r; s >= 0; s--) {
                    for (var c = !0, l = 0; l < u; l++)
                      if (h(t, s + l) !== h(e, l)) {
                        c = !1
                        break
                      }
                    if (c) return s
                  }
                return -1
              }
              function b(t, e, r, n) {
                r = Number(r) || 0
                var i = t.length - r
                n ? (n = Number(n)) > i && (n = i) : (n = i)
                var s = e.length
                if (s % 2 !== 0) throw new TypeError('Invalid hex string')
                n > s / 2 && (n = s / 2)
                for (var a = 0; a < n; ++a) {
                  var o = parseInt(e.substr(2 * a, 2), 16)
                  if (H(o)) return a
                  t[r + a] = o
                }
                return a
              }
              function m(t, e, r, n) {
                return F(O(e, t.length - r), t, r, n)
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
                return F(R(e), t, r, n)
              }
              function T(t, e, r, n) {
                return F(
                  (function(t, e) {
                    for (
                      var r, n, i, s = [], a = 0;
                      a < t.length && !((e -= 2) < 0);
                      ++a
                    )
                      (r = t.charCodeAt(a)),
                        (n = r >> 8),
                        (i = r % 256),
                        s.push(i),
                        s.push(n)
                    return s
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
                  var s,
                    a,
                    o,
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
                        128 === (192 & (s = t[i + 1])) &&
                          (u = ((31 & h) << 6) | (63 & s)) > 127 &&
                          (f = u)
                        break
                      case 3:
                        ;(s = t[i + 1]),
                          (a = t[i + 2]),
                          128 === (192 & s) &&
                            128 === (192 & a) &&
                            (u =
                              ((15 & h) << 12) | ((63 & s) << 6) | (63 & a)) >
                              2047 &&
                            (u < 55296 || u > 57343) &&
                            (f = u)
                        break
                      case 4:
                        ;(s = t[i + 1]),
                          (a = t[i + 2]),
                          (o = t[i + 3]),
                          128 === (192 & s) &&
                            128 === (192 & a) &&
                            128 === (192 & o) &&
                            (u =
                              ((15 & h) << 18) |
                              ((63 & s) << 12) |
                              ((63 & a) << 6) |
                              (63 & o)) > 65535 &&
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
                  if (e <= A) return String.fromCharCode.apply(String, t)
                  for (var r = '', n = 0; n < e; )
                    r += String.fromCharCode.apply(String, t.slice(n, (n += A)))
                  return r
                })(n)
              }
              ;(r.kMaxLength = s),
                (o.TYPED_ARRAY_SUPPORT = (function() {
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
                o.TYPED_ARRAY_SUPPORT ||
                  'undefined' === typeof console ||
                  'function' !== typeof console.error ||
                  console.error(
                    'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                  ),
                'undefined' !== typeof Symbol &&
                  Symbol.species &&
                  o[Symbol.species] === o &&
                  Object.defineProperty(o, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                  }),
                (o.poolSize = 8192),
                (o.from = function(t, e, r) {
                  return u(t, e, r)
                }),
                (o.prototype.__proto__ = Uint8Array.prototype),
                (o.__proto__ = Uint8Array),
                (o.alloc = function(t, e, r) {
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
                (o.allocUnsafe = function(t) {
                  return f(t)
                }),
                (o.allocUnsafeSlow = function(t) {
                  return f(t)
                }),
                (o.isBuffer = function(t) {
                  return null != t && !0 === t._isBuffer
                }),
                (o.compare = function(t, e) {
                  if (!o.isBuffer(t) || !o.isBuffer(e))
                    throw new TypeError('Arguments must be Buffers')
                  if (t === e) return 0
                  for (
                    var r = t.length, n = e.length, i = 0, s = Math.min(r, n);
                    i < s;
                    ++i
                  )
                    if (t[i] !== e[i]) {
                      ;(r = t[i]), (n = e[i])
                      break
                    }
                  return r < n ? -1 : n < r ? 1 : 0
                }),
                (o.isEncoding = function(t) {
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
                (o.concat = function(t, e) {
                  if (!Array.isArray(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    )
                  if (0 === t.length) return o.alloc(0)
                  var r
                  if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
                  var n = o.allocUnsafe(e),
                    i = 0
                  for (r = 0; r < t.length; ++r) {
                    var s = t[r]
                    if (!o.isBuffer(s))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      )
                    s.copy(n, i), (i += s.length)
                  }
                  return n
                }),
                (o.byteLength = p),
                (o.prototype._isBuffer = !0),
                (o.prototype.swap16 = function() {
                  var t = this.length
                  if (t % 2 !== 0)
                    throw new RangeError(
                      'Buffer size must be a multiple of 16-bits'
                    )
                  for (var e = 0; e < t; e += 2) g(this, e, e + 1)
                  return this
                }),
                (o.prototype.swap32 = function() {
                  var t = this.length
                  if (t % 4 !== 0)
                    throw new RangeError(
                      'Buffer size must be a multiple of 32-bits'
                    )
                  for (var e = 0; e < t; e += 4)
                    g(this, e, e + 3), g(this, e + 1, e + 2)
                  return this
                }),
                (o.prototype.swap64 = function() {
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
                (o.prototype.toString = function() {
                  var t = this.length
                  return 0 === t
                    ? ''
                    : 0 === arguments.length
                    ? I(this, 0, t)
                    : y.apply(this, arguments)
                }),
                (o.prototype.equals = function(t) {
                  if (!o.isBuffer(t))
                    throw new TypeError('Argument must be a Buffer')
                  return this === t || 0 === o.compare(this, t)
                }),
                (o.prototype.inspect = function() {
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
                (o.prototype.compare = function(t, e, r, n, i) {
                  if (!o.isBuffer(t))
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
                    var s = i - n,
                      a = r - e,
                      u = Math.min(s, a),
                      h = this.slice(n, i),
                      f = t.slice(e, r),
                      c = 0;
                    c < u;
                    ++c
                  )
                    if (h[c] !== f[c]) {
                      ;(s = h[c]), (a = f[c])
                      break
                    }
                  return s < a ? -1 : a < s ? 1 : 0
                }),
                (o.prototype.includes = function(t, e, r) {
                  return -1 !== this.indexOf(t, e, r)
                }),
                (o.prototype.indexOf = function(t, e, r) {
                  return d(this, t, e, r, !0)
                }),
                (o.prototype.lastIndexOf = function(t, e, r) {
                  return d(this, t, e, r, !1)
                }),
                (o.prototype.write = function(t, e, r, n) {
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
                  for (var s = !1; ; )
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
                        if (s) throw new TypeError('Unknown encoding: ' + n)
                        ;(n = ('' + n).toLowerCase()), (s = !0)
                    }
                }),
                (o.prototype.toJSON = function() {
                  return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  }
                })
              var A = 4096
              function B(t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
                return n
              }
              function C(t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
                return n
              }
              function L(t, e, r) {
                var n,
                  i = t.length
                ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i)
                for (var s = '', a = e; a < r; ++a)
                  s += (n = t[a]) < 16 ? '0' + n.toString(16) : n.toString(16)
                return s
              }
              function x(t, e, r) {
                for (var n = t.slice(e, r), i = '', s = 0; s < n.length; s += 2)
                  i += String.fromCharCode(n[s] + 256 * n[s + 1])
                return i
              }
              function U(t, e, r) {
                if (t % 1 !== 0 || t < 0)
                  throw new RangeError('offset is not uint')
                if (t + e > r)
                  throw new RangeError('Trying to access beyond buffer length')
              }
              function _(t, e, r, n, i, s) {
                if (!o.isBuffer(t))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  )
                if (e > i || e < s)
                  throw new RangeError('"value" argument is out of bounds')
                if (r + n > t.length) throw new RangeError('Index out of range')
              }
              function M(t, e, r, n, i, s) {
                if (r + n > t.length) throw new RangeError('Index out of range')
                if (r < 0) throw new RangeError('Index out of range')
              }
              function P(t, e, r, n, s) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  s || M(t, 0, r, 4),
                  i.write(t, e, r, n, 23, 4),
                  r + 4
                )
              }
              function N(t, e, r, n, s) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  s || M(t, 0, r, 8),
                  i.write(t, e, r, n, 52, 8),
                  r + 8
                )
              }
              ;(o.prototype.slice = function(t, e) {
                var r = this.length
                ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                  (e = void 0 === e ? r : ~~e) < 0
                    ? (e += r) < 0 && (e = 0)
                    : e > r && (e = r),
                  e < t && (e = t)
                var n = this.subarray(t, e)
                return (n.__proto__ = o.prototype), n
              }),
                (o.prototype.readUIntLE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
                  for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
                    n += this[t + s] * i
                  return n
                }),
                (o.prototype.readUIntBE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
                  for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i
                  return n
                }),
                (o.prototype.readUInt8 = function(t, e) {
                  return (t >>>= 0), e || U(t, 1, this.length), this[t]
                }),
                (o.prototype.readUInt16LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  )
                }),
                (o.prototype.readUInt16BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  )
                }),
                (o.prototype.readUInt32LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  )
                }),
                (o.prototype.readUInt32BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  )
                }),
                (o.prototype.readIntLE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
                  for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
                    n += this[t + s] * i
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                }),
                (o.prototype.readIntBE = function(t, e, r) {
                  ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
                  for (
                    var n = e, i = 1, s = this[t + --n];
                    n > 0 && (i *= 256);

                  )
                    s += this[t + --n] * i
                  return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s
                }),
                (o.prototype.readInt8 = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                  )
                }),
                (o.prototype.readInt16LE = function(t, e) {
                  ;(t >>>= 0), e || U(t, 2, this.length)
                  var r = this[t] | (this[t + 1] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (o.prototype.readInt16BE = function(t, e) {
                  ;(t >>>= 0), e || U(t, 2, this.length)
                  var r = this[t + 1] | (this[t] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (o.prototype.readInt32LE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  )
                }),
                (o.prototype.readInt32BE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  )
                }),
                (o.prototype.readFloatLE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  )
                }),
                (o.prototype.readFloatBE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  )
                }),
                (o.prototype.readDoubleLE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  )
                }),
                (o.prototype.readDoubleBE = function(t, e) {
                  return (
                    (t >>>= 0),
                    e || U(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  )
                }),
                (o.prototype.writeUIntLE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1
                    _(this, t, e, r, i, 0)
                  }
                  var s = 1,
                    a = 0
                  for (this[e] = 255 & t; ++a < r && (s *= 256); )
                    this[e + a] = (t / s) & 255
                  return e + r
                }),
                (o.prototype.writeUIntBE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1
                    _(this, t, e, r, i, 0)
                  }
                  var s = r - 1,
                    a = 1
                  for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
                    this[e + s] = (t / a) & 255
                  return e + r
                }),
                (o.prototype.writeUInt8 = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 1, 255, 0),
                    (this[e] = 255 & t),
                    e + 1
                  )
                }),
                (o.prototype.writeUInt16LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 2, 65535, 0),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  )
                }),
                (o.prototype.writeUInt16BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 2, 65535, 0),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  )
                }),
                (o.prototype.writeUInt32LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 4, 4294967295, 0),
                    (this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t),
                    e + 4
                  )
                }),
                (o.prototype.writeUInt32BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 4, 4294967295, 0),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  )
                }),
                (o.prototype.writeIntLE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1)
                    _(this, t, e, r, i - 1, -i)
                  }
                  var s = 0,
                    a = 1,
                    o = 0
                  for (this[e] = 255 & t; ++s < r && (a *= 256); )
                    t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
                      (this[e + s] = (((t / a) >> 0) - o) & 255)
                  return e + r
                }),
                (o.prototype.writeIntBE = function(t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1)
                    _(this, t, e, r, i - 1, -i)
                  }
                  var s = r - 1,
                    a = 1,
                    o = 0
                  for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
                    t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
                      (this[e + s] = (((t / a) >> 0) - o) & 255)
                  return e + r
                }),
                (o.prototype.writeInt8 = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[e] = 255 & t),
                    e + 1
                  )
                }),
                (o.prototype.writeInt16LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 2, 32767, -32768),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  )
                }),
                (o.prototype.writeInt16BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 2, 32767, -32768),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  )
                }),
                (o.prototype.writeInt32LE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24),
                    e + 4
                  )
                }),
                (o.prototype.writeInt32BE = function(t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || _(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  )
                }),
                (o.prototype.writeFloatLE = function(t, e, r) {
                  return P(this, t, e, !0, r)
                }),
                (o.prototype.writeFloatBE = function(t, e, r) {
                  return P(this, t, e, !1, r)
                }),
                (o.prototype.writeDoubleLE = function(t, e, r) {
                  return N(this, t, e, !0, r)
                }),
                (o.prototype.writeDoubleBE = function(t, e, r) {
                  return N(this, t, e, !1, r)
                }),
                (o.prototype.copy = function(t, e, r, n) {
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
                    s = n - r
                  if (this === t && r < e && e < n)
                    for (i = s - 1; i >= 0; --i) t[i + e] = this[i + r]
                  else if (s < 1e3)
                    for (i = 0; i < s; ++i) t[i + e] = this[i + r]
                  else
                    Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e)
                  return s
                }),
                (o.prototype.fill = function(t, e, r, n) {
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
                    if ('string' === typeof n && !o.isEncoding(n))
                      throw new TypeError('Unknown encoding: ' + n)
                  } else 'number' === typeof t && (t &= 255)
                  if (e < 0 || this.length < e || this.length < r)
                    throw new RangeError('Out of range index')
                  if (r <= e) return this
                  var s
                  if (
                    ((e >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    t || (t = 0),
                    'number' === typeof t)
                  )
                    for (s = e; s < r; ++s) this[s] = t
                  else {
                    var a = o.isBuffer(t) ? t : new o(t, n),
                      u = a.length
                    for (s = 0; s < r - e; ++s) this[s + e] = a[s % u]
                  }
                  return this
                })
              var D = /[^+\/0-9A-Za-z-_]/g
              function O(t, e) {
                var r
                e = e || 1 / 0
                for (var n = t.length, i = null, s = [], a = 0; a < n; ++a) {
                  if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319) {
                        ;(e -= 3) > -1 && s.push(239, 191, 189)
                        continue
                      }
                      if (a + 1 === n) {
                        ;(e -= 3) > -1 && s.push(239, 191, 189)
                        continue
                      }
                      i = r
                      continue
                    }
                    if (r < 56320) {
                      ;(e -= 3) > -1 && s.push(239, 191, 189), (i = r)
                      continue
                    }
                    r = 65536 + (((i - 55296) << 10) | (r - 56320))
                  } else i && (e -= 3) > -1 && s.push(239, 191, 189)
                  if (((i = null), r < 128)) {
                    if ((e -= 1) < 0) break
                    s.push(r)
                  } else if (r < 2048) {
                    if ((e -= 2) < 0) break
                    s.push((r >> 6) | 192, (63 & r) | 128)
                  } else if (r < 65536) {
                    if ((e -= 3) < 0) break
                    s.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    )
                  } else {
                    if (!(r < 1114112)) throw new Error('Invalid code point')
                    if ((e -= 4) < 0) break
                    s.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    )
                  }
                }
                return s
              }
              function R(t) {
                return n.toByteArray(
                  (function(t) {
                    if ((t = t.trim().replace(D, '')).length < 2) return ''
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
              function z(t) {
                return (
                  'function' === typeof ArrayBuffer.isView &&
                  ArrayBuffer.isView(t)
                )
              }
              function H(t) {
                return t !== t
              }
            },
            { 'base64-js': 1, ieee754: 3 }
          ],
          3: [
            function(t, e, r) {
              ;(r.read = function(t, e, r, n, i) {
                var s,
                  a,
                  o = 8 * i - n - 1,
                  u = (1 << o) - 1,
                  h = u >> 1,
                  f = -7,
                  c = r ? i - 1 : 0,
                  l = r ? -1 : 1,
                  p = t[e + c]
                for (
                  c += l, s = p & ((1 << -f) - 1), p >>= -f, f += o;
                  f > 0;
                  s = 256 * s + t[e + c], c += l, f -= 8
                );
                for (
                  a = s & ((1 << -f) - 1), s >>= -f, f += n;
                  f > 0;
                  a = 256 * a + t[e + c], c += l, f -= 8
                );
                if (0 === s) s = 1 - h
                else {
                  if (s === u) return a ? NaN : (1 / 0) * (p ? -1 : 1)
                  ;(a += Math.pow(2, n)), (s -= h)
                }
                return (p ? -1 : 1) * a * Math.pow(2, s - n)
              }),
                (r.write = function(t, e, r, n, i, s) {
                  var a,
                    o,
                    u,
                    h = 8 * s - i - 1,
                    f = (1 << h) - 1,
                    c = f >> 1,
                    l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = n ? 0 : s - 1,
                    y = n ? 1 : -1,
                    g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
                  for (
                    e = Math.abs(e),
                      isNaN(e) || e === 1 / 0
                        ? ((o = isNaN(e) ? 1 : 0), (a = f))
                        : ((a = Math.floor(Math.log(e) / Math.LN2)),
                          e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                          (e += a + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) *
                            u >=
                            2 && (a++, (u /= 2)),
                          a + c >= f
                            ? ((o = 0), (a = f))
                            : a + c >= 1
                            ? ((o = (e * u - 1) * Math.pow(2, i)), (a += c))
                            : ((o = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                              (a = 0)));
                    i >= 8;
                    t[r + p] = 255 & o, p += y, o /= 256, i -= 8
                  );
                  for (
                    a = (a << i) | o, h += i;
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
                  s = 0,
                  a = function(t) {
                    i.forEach(function(e) {
                      e.forEach(function(e) {
                        return (n.NOTES[s] = e + t)
                      }),
                        s++
                    })
                  },
                  o = -1;
                o <= 9;
                o++
              )
                a(o)
              r.Constants = n
            },
            {}
          ],
          5: [
            function(t, e, r) {
              'use strict'
              var n = t('./player'),
                i = t('./utils'),
                s = t('./constants')
              e.exports = {
                Player: n.Player,
                Utils: i.Utils,
                Constants: s.Constants
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
                s = t('./utils').Utils,
                a = t('./track').Track
              Uint8Array.prototype.forEach ||
                Object.defineProperty(Uint8Array.prototype, 'forEach', {
                  value: Array.prototype.forEach
                })
              var o = (function() {
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
                          var e = s.atob(t.split(',')[1]),
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
                          s.bytesToLetters(this.buffer.subarray(0, 4))
                        )
                      }
                    },
                    {
                      key: 'getFormat',
                      value: function() {
                        return (
                          (this.format = s.bytesToNumber(
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
                            s.bytesToLetters(this.buffer.subarray(t, t + 4))
                          ) {
                            var e = s.bytesToNumber(
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
                            s.bytesToNumber(
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
                          (this.division = s.bytesToNumber(
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
              r.Player = o
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
                s = t('./utils').Utils,
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
                          return s.readVarInt(
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
                              var s = this.parseEvent()
                              if (this.enabled) return s
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
                          var e = s.readVarInt(
                            this.data.subarray(t + 2, t + 2 + 1)
                          )
                          return s.bytesToLetters(
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
                                  (e.data = s.bytesToNumber([this.data[t + 3]]))
                                break
                              case 47:
                                e.name = 'End of Track'
                                break
                              case 81:
                                ;(e.name = 'Set Tempo'),
                                  (e.data = Math.round(
                                    6e7 /
                                      s.bytesToNumber(
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
