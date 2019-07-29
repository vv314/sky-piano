!(function(t) {
  function e(e) {
    for (
      var n, g, a = e[0], r = e[1], p = e[2], c = 0, h = [];
      c < a.length;
      c++
    )
      (g = a[c]), i[g] && h.push(i[g][0]), (i[g] = 0)
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    for (m && m(e); h.length; ) h.shift()()
    return s.push.apply(s, p || []), o()
  }
  function o() {
    for (var t, e = 0; e < s.length; e++) {
      for (var o = s[e], n = !0, a = 1; a < o.length; a++) {
        var r = o[a]
        0 !== i[r] && (n = !1)
      }
      n && (s.splice(e--, 1), (t = g((g.s = o[0]))))
    }
    return t
  }
  var n = {},
    i = { 0: 0 },
    s = []
  function g(e) {
    if (n[e]) return n[e].exports
    var o = (n[e] = { i: e, l: !1, exports: {} })
    return t[e].call(o.exports, o, o.exports, g), (o.l = !0), o.exports
  }
  ;(g.e = function(t) {
    var e = [],
      o = i[t]
    if (0 !== o)
      if (o) e.push(o[2])
      else {
        var n = new Promise(function(e, n) {
          o = i[t] = [e, n]
        })
        e.push((o[2] = n))
        var s,
          a = document.createElement('script')
        ;(a.charset = 'utf-8'),
          (a.timeout = 120),
          g.nc && a.setAttribute('nonce', g.nc),
          (a.src = (function(t) {
            return (
              g.p +
              'static/js/' +
              ({}[t] || t) +
              '.' +
              { 2: '4441296e', 3: 'e780593b' }[t] +
              '.chunk.js'
            )
          })(t))
        var r = new Error()
        s = function(e) {
          ;(a.onerror = a.onload = null), clearTimeout(p)
          var o = i[t]
          if (0 !== o) {
            if (o) {
              var n = e && ('load' === e.type ? 'missing' : e.type),
                s = e && e.target && e.target.src
              ;(r.message =
                'Loading chunk ' + t + ' failed.\n(' + n + ': ' + s + ')'),
                (r.name = 'ChunkLoadError'),
                (r.type = n),
                (r.request = s),
                o[1](r)
            }
            i[t] = void 0
          }
        }
        var p = setTimeout(function() {
          s({ type: 'timeout', target: a })
        }, 12e4)
        ;(a.onerror = a.onload = s), document.head.appendChild(a)
      }
    return Promise.all(e)
  }),
    (g.m = t),
    (g.c = n),
    (g.d = function(t, e, o) {
      g.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (g.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (g.t = function(t, e) {
      if ((1 & e && (t = g(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (g.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          g.d(
            o,
            n,
            function(e) {
              return t[e]
            }.bind(null, n)
          )
      return o
    }),
    (g.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return g.d(e, 'a', e), e
    }),
    (g.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (g.p = './'),
    (g.oe = function(t) {
      throw (console.error(t), t)
    })
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    r = a.push.bind(a)
  ;(a.push = e), (a = a.slice())
  for (var p = 0; p < a.length; p++) e(a[p])
  var m = r
  s.push([71, 1]), o()
})({
  120: function(t, e, o) {},
  121: function(t, e, o) {
    'use strict'
    var n = o(25)
    o.n(n).a
  },
  122: function(t, e, o) {
    'use strict'
    var n = o(26)
    o.n(n).a
  },
  123: function(t, e, o) {
    'use strict'
    var n = o(27)
    o.n(n).a
  },
  124: function(t, e, o) {
    'use strict'
    var n = o(28)
    o.n(n).a
  },
  125: function(t, e, o) {
    'use strict'
    var n = o(29)
    o.n(n).a
  },
  126: function(t, e, o) {
    'use strict'
    var n = o(30)
    o.n(n).a
  },
  127: function(t, e, o) {
    'use strict'
    var n = o(31)
    o.n(n).a
  },
  128: function(t, e, o) {
    'use strict'
    var n = o(32)
    o.n(n).a
  },
  129: function(t, e, o) {
    'use strict'
    o.r(e)
    o(120)
    var n = o(46),
      i = o(33),
      s = o(68),
      g = o(69)
    function a(t, e) {
      var o = t.reduce(function(t, e) {
        return t + e
      }, 0)
      if (0 === o) return 0
      var n = o / t.length
      return e ? Number(n.toFixed(e)) : n
    }
    function r() {
      return (performance || Date).now()
    }
    var p = (function() {
        function t() {
          Object(s.a)(this, t),
            (this.beginTime = 0),
            (this.prevTime = 0),
            (this._cursor = 0),
            (this._history = { ms: [], fps: [] }),
            (this.maxRecords = 10),
            (this.frames = 0)
        }
        return (
          Object(g.a)(t, [
            {
              key: 'start',
              value: function() {
                return (this.prevTime = this.beginTime = r()), this.beginTime
              }
            },
            {
              key: 'check',
              value: function() {
                return r() - this.beginTime
              }
            },
            {
              key: '_record',
              value: function(t, e) {
                var o = this._history[t]
                o.unshift(Math.round(e)),
                  (o.length = Math.min(o.length, this.maxRecords))
              }
            },
            {
              key: 'tick',
              value: function() {
                var t = r()
                return (
                  this._frameMark(),
                  this._record('ms', t - this.beginTime),
                  (this.beginTime = t),
                  t >= this.prevTime + 1e3 &&
                    this._record('fps', this._getFrameRate(t)),
                  this
                )
              }
            },
            {
              key: 'emptyFrame',
              value: function() {
                var t = r()
                return (
                  this.frames > 0 && this.frames--,
                  t >= this.prevTime + 1e3 &&
                    this._record('fps', this._getFrameRate(t)),
                  this
                )
              }
            },
            {
              key: '_frameMark',
              value: function() {
                this.frames++
              }
            },
            {
              key: '_clearMark',
              value: function(t) {
                ;(this.prevTime = t), (this.frames = 0)
              }
            },
            {
              key: '_getFrameRate',
              value: function(t) {
                var e = (1e3 * this.frames) / (t - this.prevTime)
                return this._clearMark(t), e
              }
            },
            {
              key: 'checkBeats',
              value: function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 'ms',
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  o = arguments.length > 2 ? arguments[2] : void 0,
                  n = this._history[t],
                  i = n.slice(0, Math.min(n.length, e))
                return a(i, o)
              }
            }
          ]),
          t
        )
      })(),
      m = 'keyframes',
      c = document.getElementById(m),
      h = {}
    var u = function(t, e) {
      if (((t = t.replace('.', '_')), h[t])) return t
      var o = '@keyframes '.concat(t, ' {\n    ').concat(e, '\n  }')
      if (c) {
        var n = c.sheet
        n.insertRule(o, n.cssRules.length)
      } else
        ((c = document.createElement('style')).id = m),
          (c.textContent = o),
          document.head.appendChild(c)
      return (h[t] = o), t
    }
    var l = function(t, e) {
      var o = e.getTotalLength()
      return (
        o ||
        ('circle' === t
          ? (function(t) {
              var e = t.r.baseVal.value
              return 2 * Math.PI * e
            })(e)
          : 'rect' === t
          ? (function(t) {
              return 2 * (t.width.baseVal.value + t.height.baseVal.value)
            })(e)
          : 0)
      )
    }
    function f() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      return Math.floor(Math.random() * (t - e + 1) + e)
    }
    var d = {
        props: ['shape'],
        data: function() {
          return { length: 0, styleObj: { animationName: 'dash' }, angle: 0 }
        },
        computed: {
          rotate: function() {
            return (
              'rect' === this.shape
                ? (this.angle = 45 + 90 * f(3))
                : (this.angle = 45 * f(7)),
              {
                transform: 'rotateZ('
                  .concat(this.angle, 'deg) rotateY(')
                  .concat(180 * f(1), 'deg)')
              }
            )
          }
        },
        mounted: function() {
          var t = this,
            e = this.shape || 'circle',
            o = this.$refs.path
          ;(this.length = Math.ceil(l(e, o))),
            window.addEventListener(
              'resize',
              function() {
                t.length = Math.ceil(l(e, o))
              },
              !1
            ),
            (this.styleObj.animationName = u(
              'shape-'.concat(e, '-').concat(this.length),
              '0% {\n        opacity: 0;\n        stroke-dashoffset: '
                .concat(
                  this.length,
                  ';\n      }\n      50% {\n        opacity: .8;\n        stroke-dashoffset: '
                )
                .concat(
                  this.length / 2,
                  ';\n      }\n      100% {\n        opacity: 1;\n        stroke-dashoffset: 0;\n      }'
                )
            ))
        }
      },
      v = (o(121), o(0)),
      A = {
        name: 'Note',
        props: ['type'],
        components: {
          Shape: Object(v.a)(
            d,
            function() {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e
              return o('div', { staticClass: 'shape' }, [
                'rect' === t.shape
                  ? o(
                      'svg',
                      {
                        style: t.rotate,
                        attrs: { width: '100%', height: '100%', version: '1.1' }
                      },
                      [
                        o('rect', {
                          ref: 'path',
                          staticClass: 'path',
                          style: t.styleObj,
                          attrs: {
                            'stroke-dasharray': t.length,
                            'stroke-dashoffset': t.length,
                            x: '0',
                            y: '0',
                            width: '100%',
                            height: '100%'
                          }
                        })
                      ]
                    )
                  : o(
                      'svg',
                      {
                        style: t.rotate,
                        attrs: { width: '100%', height: '100%', version: '1.1' }
                      },
                      [
                        o('circle', {
                          ref: 'path',
                          staticClass: 'path',
                          style: t.styleObj,
                          attrs: {
                            'stroke-dasharray': t.length,
                            'stroke-dashoffset': t.length,
                            cx: '50%',
                            cy: '50%',
                            r: '50%'
                          }
                        })
                      ]
                    )
              ])
            },
            [],
            !1,
            null,
            null,
            null
          ).exports
        },
        data: function() {
          return { isAni: !1, isActive: !1, stopwatch: new p() }
        },
        computed: {
          activeClass: function() {
            return { 'note--active': this.isActive, 'note--ani': this.isAni }
          }
        },
        methods: {
          tapdown: function() {
            var t = this
            ;(this.isActive = !0),
              (this.isAni = !0),
              this.stopwatch.start(),
              setTimeout(function() {
                t.isAni = !1
              }, 300)
          },
          tapup: function() {
            var t = this,
              e = this.stopwatch.check()
            e < 120
              ? setTimeout(function() {
                  t.isActive = !1
                }, 120 - e)
              : (this.isActive = !1)
          },
          animationEnd: function() {
            console.log('animationEnd')
          }
        }
      },
      C =
        (o(122),
        Object(v.a)(
          A,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', { staticClass: 'note', class: this.activeClass }, [
              e('div', { staticClass: 'note_content' }, [
                e(
                  'div',
                  { staticClass: 'note_shape' },
                  [
                    'muti' === this.type || 'circle' === this.type
                      ? e('Shape', { attrs: { shape: 'circle' } })
                      : this._e(),
                    'muti' === this.type || 'rect' === this.type
                      ? e('Shape', { attrs: { shape: 'rect' } })
                      : this._e()
                  ],
                  1
                )
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      y = !1,
      D = !1
    window.addEventListener('mouseup', function() {
      return (y = !1)
    })
    var F = {
        props: ['tid'],
        data: function() {
          return { touches: [], pressMap: {} }
        },
        mounted: function() {},
        methods: {
          press: function(t) {
            this.$emit('tapdown', t)
          },
          release: function(t) {
            this.$emit('tapup', t)
          },
          mouseDown: function(t) {
            if (!D) {
              var e = this.tid
              this.pressMap[e] ||
                (this.press(e), (y = !0), (this.pressMap[e] = 'M'))
            }
          },
          mouseUp: function(t) {
            if (!D) {
              var e = this.tid
              y &&
                'M' == this.pressMap[e] &&
                (this.release(e), delete this.pressMap[e], (y = !1))
            }
          },
          mouseOver: function(t) {
            var e = this.tid
            y && !this.pressMap[e] && (this.press(e), (this.pressMap[e] = 'M'))
          },
          mouseOut: function(t) {
            var e = this.tid
            y &&
              'M' == this.pressMap[e] &&
              !(function(t, e) {
                for (; t; ) {
                  if (t == e) return !0
                  t = t.parentNode
                }
                return !1
              })(t.relatedTarget, this.$el) &&
              (this.release(e), delete this.pressMap[e])
          },
          touchHandle: function(t) {
            D ? t.preventDefault() : 'touchend' === t.type && (D = !0)
            var e = this.getTouchTargets(t.touches)
            return (
              this.releaseTouches(e), (this.touches = this.markTouches(e)), !0
            )
          },
          markTouches: function(t) {
            var e = this
            return t
              .map(function(t) {
                return (function(t) {
                  return e.touches.indexOf(t) > -1
                })(t)
                  ? t
                  : e.pressMap[t]
                  ? void 0
                  : (e.press(t), (e.pressMap[t] = 'T'), t)
              })
              .filter(Boolean)
          },
          releaseTouches: function(t) {
            var e = this
            this.touches.forEach(function(o) {
              ;(function(e) {
                return t.indexOf(e) > -1
              })(o) || (e.release(o), delete e.pressMap[o])
            })
          },
          getTouchTargets: function(t) {
            var e = function(t) {
              return t.dataset && t.dataset.tapitem
            }
            return Object(i.a)(t)
              .map(function(t) {
                return (function(t, e, o) {
                  for (var n = document.elementFromPoint(t, e); n; ) {
                    var i = o(n)
                    if (i) return i
                    n = n.parentNode
                  }
                })(t.clientX, t.clientY, e)
              })
              .filter(Boolean)
          },
          click: function() {
            console.log('click')
          }
        }
      },
      w =
        (o(123),
        Object(v.a)(
          F,
          function() {
            var t = this,
              e = t.$createElement
            return (t._self._c || e)(
              'div',
              {
                staticClass: 'tap',
                attrs: { 'data-tapitem': t.tid },
                on: {
                  mousedown: t.mouseDown,
                  mouseover: t.mouseOver,
                  mouseout: t.mouseOut,
                  mouseup: t.mouseUp,
                  touchstart: t.touchHandle,
                  touchmove: function(e) {
                    return e.preventDefault(), t.touchHandle(e)
                  },
                  touchend: t.touchHandle
                }
              },
              [t._t('default')],
              2
            )
          },
          [],
          !1,
          null,
          '797b489a',
          null
        ).exports),
      G = o(17),
      b = o.n(G)
    document.querySelector('body').addEventListener(
      'click',
      function() {
        b.a.start()
      },
      !1
    )
    var E = {
        C2: 'a49.mp3',
        D2: 'a50.mp3',
        E2: 'a51.mp3',
        F2: 'a52.mp3',
        G2: 'a53.mp3',
        A2: 'a54.mp3',
        B2: 'a55.mp3',
        C3: 'a56.mp3',
        D3: 'a57.mp3',
        E3: 'a48.mp3',
        F3: 'a81.mp3',
        G3: 'a87.mp3',
        A3: 'a69.mp3',
        B3: 'a82.mp3',
        C4: 'a84.mp3',
        D4: 'a89.mp3',
        E4: 'a85.mp3',
        F4: 'a73.mp3',
        G4: 'a79.mp3',
        A4: 'a80.mp3',
        B4: 'a65.mp3',
        C5: 'a83.mp3',
        D5: 'a68.mp3',
        E5: 'a70.mp3',
        F5: 'a71.mp3',
        G5: 'a72.mp3',
        A5: 'a74.mp3',
        B5: 'a75.mp3',
        C6: 'a76.mp3',
        D6: 'a90.mp3',
        E6: 'a88.mp3',
        F6: 'a67.mp3',
        G6: 'a86.mp3',
        A6: 'a66.mp3',
        B6: 'a78.mp3',
        C7: 'a77.mp3'
      },
      _ = {
        minify: !1,
        ext: '.[mp3|ogg]',
        baseUrl: './static/media/',
        list: [
          'bass-electric',
          'bassoon',
          'cello',
          'clarinet',
          'contrabass',
          'flute',
          'french-horn',
          'guitar-acoustic',
          'guitar-electric',
          'guitar-nylon',
          'harmonium',
          'harp',
          'organ',
          'piano',
          'saxophone',
          'trombone',
          'trumpet',
          'tuba',
          'violin',
          'xylophone'
        ],
        onload: null,
        setExt: function(t) {
          var e
          for (e = 0; e <= this.list.length - 1; e++)
            for (var o in this[this.list[e]])
              this[this.list[e]][o] = this[this.list[e]][o].replace(this.ext, t)
          return (
            (this.ext = t), console.log('sample extensions set to ' + this.ext)
          )
        },
        load: function(t) {
          var e, o, n
          if (
            (((e = t || {}).instruments = e.instruments || this.list),
            (e.baseUrl = e.baseUrl || this.baseUrl),
            (e.onload = e.onload || this.onload),
            e.ext &&
              (e.ext != this.ext && this.setExt(e.ext), (e.ext = this.ext)),
            (o = {}),
            Array.isArray(e.instruments))
          ) {
            for (n = 0; n <= e.instruments.length - 1; n++) {
              var i = this[e.instruments[n]]
              if (!0 === this.minify || !0 === e.minify) {
                var s = 1
                Object.keys(i).length >= 17 && (s = 2),
                  Object.keys(i).length >= 33 && (s = 4),
                  Object.keys(i).length >= 49 && (s = 6)
                var g = Object.keys(i).filter(function(t, e) {
                  return e % s != 0
                })
                g.forEach(function(t) {
                  delete i[t]
                })
              }
              o[e.instruments[n]] = new b.a.Sampler(i, {
                baseUrl: e.baseUrl + e.instruments[n] + '/',
                onload: e.onload
              })
            }
            return o
          }
          return (
            (i = this[e.instruments]),
            (!0 !== this.minify && !0 !== e.minify) ||
              ((s = 1),
              Object.keys(i).length >= 17 && (s = 2),
              Object.keys(i).length >= 33 && (s = 4),
              Object.keys(i).length >= 49 && (s = 6),
              (g = Object.keys(i).filter(function(t, e) {
                return e % s != 0
              })).forEach(function(t) {
                delete i[t]
              })),
            new b.a.Sampler(i, {
              baseUrl: e.baseUrl + e.instruments + '/',
              onload: e.onload
            })
          )
        },
        'bass-electric': {
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          'A#4': 'As4.[mp3|ogg]',
          'A#5': 'As5.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          'C#5': 'Cs5.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          E5: 'E5.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          G5: 'G5.[mp3|ogg]'
        },
        bassoon: {
          A3: 'A3.[mp3|ogg]',
          C2: 'C2.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          G1: 'G1.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          A1: 'A1.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]'
        },
        cello: {
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          'F#4': 'Fs4.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'G#3': 'Gs3.[mp3|ogg]',
          'G#4': 'Gs4.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          'A#4': 'As4.[mp3|ogg]',
          B2: 'B2.[mp3|ogg]',
          B3: 'B3.[mp3|ogg]',
          B4: 'B4.[mp3|ogg]',
          C2: 'C2.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          'D#4': 'Ds4.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]'
        },
        clarinet: {
          D3: 'D3.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          D5: 'D5.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          'F#5': 'Fs5.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          'A#4': 'As4.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]'
        },
        contrabass: {
          C1: 'C1.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]',
          D1: 'D1.[mp3|ogg]',
          E1: 'E1.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          'F#0': 'Fs0.[mp3|ogg]',
          'F#1': 'Fs1.[mp3|ogg]',
          G0: 'G0.[mp3|ogg]',
          'G#1': 'Gs1.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          A1: 'A1.[mp3|ogg]',
          'A#0': 'As0.[mp3|ogg]',
          B2: 'B2.[mp3|ogg]'
        },
        flute: {
          A5: 'A5.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          C6: 'C6.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          E5: 'E5.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]'
        },
        'french-horn': {
          D2: 'D2.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          'D#1': 'Ds1.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          G1: 'G1.[mp3|ogg]',
          A0: 'A0.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          C1: 'C1.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]'
        },
        'guitar-acoustic': {
          F3: 'F3.[mp3|ogg]',
          'F#1': 'Fs1.[mp3|ogg]',
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          G1: 'G1.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          'G#1': 'Gs1.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'G#3': 'Gs3.[mp3|ogg]',
          A1: 'A1.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          'A#1': 'As1.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          B1: 'B1.[mp3|ogg]',
          B2: 'B2.[mp3|ogg]',
          B3: 'B3.[mp3|ogg]',
          C2: 'C2.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          D1: 'D1.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          'D#1': 'Ds1.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          E1: 'E1.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          F1: 'F1.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]'
        },
        'guitar-electric': {
          'D#3': 'Ds3.[mp3|ogg]',
          'D#4': 'Ds4.[mp3|ogg]',
          'D#5': 'Ds5.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          'F#4': 'Fs4.[mp3|ogg]',
          'F#5': 'Fs5.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          A5: 'A5.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          C6: 'C6.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]'
        },
        'guitar-nylon': {
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          'F#4': 'Fs4.[mp3|ogg]',
          'F#5': 'Fs5.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G5: 'G3.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'G#4': 'Gs4.[mp3|ogg]',
          'G#5': 'Gs5.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          A5: 'A5.[mp3|ogg]',
          'A#5': 'As5.[mp3|ogg]',
          B1: 'B1.[mp3|ogg]',
          B2: 'B2.[mp3|ogg]',
          B3: 'B3.[mp3|ogg]',
          B4: 'B4.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          'C#5': 'Cs5.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          D5: 'D5.[mp3|ogg]',
          'D#4': 'Ds4.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          E5: 'E5.[mp3|ogg]'
        },
        harmonium: {
          C2: 'C2.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          'C#5': 'Cs5.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          D5: 'D5.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          'D#4': 'Ds4.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'G#3': 'Gs3.[mp3|ogg]',
          'G#4': 'Gs4.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          'A#4': 'As4.[mp3|ogg]'
        },
        harp: {
          C5: 'C5.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          D6: 'D6.[mp3|ogg]',
          D7: 'D7.[mp3|ogg]',
          E1: 'E1.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E5: 'E5.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          F6: 'F6.[mp3|ogg]',
          F7: 'F7.[mp3|ogg]',
          G1: 'G1.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G5: 'G5.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          A6: 'A6.[mp3|ogg]',
          B1: 'B1.[mp3|ogg]',
          B3: 'B3.[mp3|ogg]',
          B5: 'B5.[mp3|ogg]',
          B6: 'B6.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]'
        },
        organ: {
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          C6: 'C6.[mp3|ogg]',
          'D#1': 'Ds1.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          'D#4': 'Ds4.[mp3|ogg]',
          'D#5': 'Ds5.[mp3|ogg]',
          'F#1': 'Fs1.[mp3|ogg]',
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          'F#4': 'Fs4.[mp3|ogg]',
          'F#5': 'Fs5.[mp3|ogg]',
          A1: 'A1.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          A5: 'A5.[mp3|ogg]',
          C1: 'C1.[mp3|ogg]',
          C2: 'C2.[mp3|ogg]'
        },
        piano: {
          A2: E.A2,
          A3: E.A3,
          A4: E.A4,
          A5: E.A5,
          A6: E.A6,
          'A#3': E['A#3'],
          'A#4': E['A#4'],
          'A#5': E['A#5'],
          'A#6': E['A#6'],
          B2: E.B2,
          B3: E.B3,
          B4: E.B4,
          B5: E.B5,
          B6: E.B6,
          C2: E.C2,
          C3: E.C3,
          C4: E.C4,
          C5: E.C5,
          C6: E.C6,
          C7: E.C7,
          'C#2': E['C#2'],
          'C#3': E['C#3'],
          'C#4': E['C#4'],
          'C#5': E['C#5'],
          'C#6': E['C#6'],
          D0: E.D0,
          D1: E.D1,
          D2: E.D2,
          D3: E.D3,
          D4: E.D4,
          D5: E.D5,
          D6: E.D6,
          'D#2': E['D#2'],
          'D#3': E['D#3'],
          'D#4': E['D#4'],
          'D#5': E['D#5'],
          'D#6': E['D#6'],
          E2: E.E2,
          E3: E.E3,
          E4: E.E4,
          E5: E.E5,
          E6: E.E6,
          F2: E.F2,
          F3: E.F3,
          F4: E.F4,
          F5: E.F5,
          F6: E.F6,
          'F#2': E['F#2'],
          'F#3': E['F#3'],
          'F#4': E['F#4'],
          'F#5': E['F#5'],
          'F#6': E['F#6'],
          G2: E.G2,
          G3: E.G3,
          G4: E.G4,
          G5: E.G5,
          G6: E.G6,
          'G#2': E['G#2'],
          'G#3': E['G#3'],
          'G#4': E['G#4'],
          'G#5': E['G#5'],
          'G#6': E['G#6']
        },
        saxophone: {
          'D#4': 'Ds4.[mp3|ogg]',
          E2: 'E2.[mp3|ogg]',
          E3: 'E3.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          'F#2': 'Fs2.[mp3|ogg]',
          'F#3': 'Fs3.[mp3|ogg]',
          'F#4': 'Fs4.[mp3|ogg]',
          G2: 'G2.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'G#3': 'Gs3.[mp3|ogg]',
          'G#4': 'Gs4.[mp3|ogg]',
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          B2: 'B2.[mp3|ogg]',
          B3: 'B3.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          'C#2': 'Cs2.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          'C#4': 'Cs4.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]'
        },
        trombone: {
          'A#2': 'As2.[mp3|ogg]',
          C2: 'C2.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]',
          'C#1': 'Cs1.[mp3|ogg]',
          'C#3': 'Cs3.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          'D#1': 'Ds1.[mp3|ogg]',
          'D#2': 'Ds2.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          F1: 'F1.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          'G#1': 'Gs1.[mp3|ogg]',
          'G#2': 'Gs2.[mp3|ogg]',
          'A#0': 'As0.[mp3|ogg]',
          'A#1': 'As1.[mp3|ogg]'
        },
        trumpet: {
          C5: 'C5.[mp3|ogg]',
          D4: 'D4.[mp3|ogg]',
          'D#3': 'Ds3.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          F3: 'F3.[mp3|ogg]',
          F4: 'F4.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          A2: 'A2.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          'A#3': 'As3.[mp3|ogg]',
          C3: 'C3.[mp3|ogg]'
        },
        tuba: {
          'A#1': 'As1.[mp3|ogg]',
          'A#2': 'As2.[mp3|ogg]',
          D2: 'D2.[mp3|ogg]',
          D3: 'D3.[mp3|ogg]',
          'D#1': 'Ds1.[mp3|ogg]',
          F0: 'F0.[mp3|ogg]',
          F1: 'F1.[mp3|ogg]',
          F2: 'F2.[mp3|ogg]',
          'A#0': 'As0.[mp3|ogg]'
        },
        violin: {
          A3: 'A3.[mp3|ogg]',
          A4: 'A4.[mp3|ogg]',
          A5: 'A5.[mp3|ogg]',
          A6: 'A6.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          C6: 'C6.[mp3|ogg]',
          C7: 'C7.[mp3|ogg]',
          E4: 'E4.[mp3|ogg]',
          E5: 'E5.[mp3|ogg]',
          E6: 'E6.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          G5: 'G5.[mp3|ogg]',
          G6: 'G6.[mp3|ogg]'
        },
        xylophone: {
          C7: 'C7.[mp3|ogg]',
          G3: 'G3.[mp3|ogg]',
          G4: 'G4.[mp3|ogg]',
          G5: 'G5.[mp3|ogg]',
          G6: 'G6.[mp3|ogg]',
          C4: 'C4.[mp3|ogg]',
          C5: 'C5.[mp3|ogg]',
          C6: 'C6.[mp3|ogg]'
        }
      },
      x = o(45),
      k = o.n(x),
      B = {
        isDebug: (function(t) {
          var e = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
            o = window.location.search.substr(1).match(e)
          return null === o ? null : decodeURI(o[2])
        })('__debug'),
        version: '0.6.1'
      }
    k.a.config({ output: B.isDebug && 'default', color: '#fff' })
    var M = k.a,
      O = {
        total: 15,
        tone: 4,
        shapes: ['muti', 'rect', 'circle'],
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      }
    function T(t) {
      var e = t.total,
        o = t.tone,
        n = t.notes,
        s = t.shapes,
        g = s[0],
        a = s.slice(1),
        r = n.length,
        p = o - 1
      return Object(i.a)(Array(e)).map(function(t, e) {
        var o = e % r == 0 ? g : a[e % a.length],
          i = n[e % r]
        return i === n[0] && p++, { shape: o, note: i + p, index: e }
      })
    }
    var j = {
        name: 'Keyboard',
        components: { Note: C, Tap: w },
        data: function() {
          return { list: T(O) }
        },
        created: function() {},
        mounted: function() {
          this.synth = _.load({ instruments: 'piano' }).toMaster()
        },
        methods: {
          play: function(t) {
            this.synth.triggerAttackRelease(t), this.$emit('play', t)
          },
          tapdown: function(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
            this.play(t),
              this.tapNote(t, 'down'),
              console.log('tap', t, 'channel', e)
          },
          tapup: function(t) {
            this.tapNote(t, 'up')
          },
          tapNote: function(t, e) {
            var o = this.$refs['n_'.concat(t)]
            o && o[0] && ('down' === e ? o[0].tapdown() : o[0].tapup())
          },
          release: function() {
            var t = this
            this.list.forEach(function(e) {
              return t.tapNote(e.note, 'up')
            })
          }
        }
      },
      P =
        (o(124),
        Object(v.a)(
          j,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e
            return o('div', { staticClass: 'keyboard' }, [
              o(
                'ul',
                { staticClass: 'keyboard_wrap' },
                t._l(t.list, function(e) {
                  return o(
                    'li',
                    { attrs: { 'data-tapitem': e.note } },
                    [
                      o(
                        'Tap',
                        {
                          attrs: { tid: e.note },
                          on: { tapdown: t.tapdown, tapup: t.tapup }
                        },
                        [
                          o('Note', {
                            ref: 'n_' + e.note,
                            refInFor: !0,
                            attrs: { type: e.shape }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      $ = function(t) {
        var e = new FileReader()
        return new Promise(function(o, n) {
          if (!t) return n('invalid url')
          ;(e.onload = function(t) {
            var e = t.target.result
            o(e)
          }),
            e.readAsDataURL(t)
        })
      },
      S = {
        props: ['accept'],
        data: function() {
          return { acceptList: [], showDragPanel: !1 }
        },
        created: function() {
          ;(document.ondragover = function(t) {
            return t.preventDefault()
          }),
            (document.ondrop = function(t) {
              return t.preventDefault()
            })
        },
        mounted: function() {
          this.acceptList = (this.accept && this.accept.split(',')) || []
        },
        methods: {
          validate: function(t) {
            return this.acceptList.indexOf(t) > -1
          },
          onDrop: function(t) {
            var e = this,
              o = t.dataTransfer.files[0]
            if (((this.showDragPanel = !1), !this.validate(o.type)))
              return this.$emit('drop', {
                code: 1,
                data: '',
                msg: 'type error'
              })
            $(o).then(function(t) {
              e.$emit('drop', { code: 0, data: t, file: o, msg: 'success' })
            })
          },
          onDragover: function(t) {
            t.dataTransfer.dropEffect = 'copy'
          }
        }
      },
      L =
        (o(125),
        Object(v.a)(
          S,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e
            return o(
              'div',
              {
                staticClass: 'droparea',
                on: {
                  dragenter: function(e) {
                    t.showDragPanel = !0
                  }
                }
              },
              [
                t._t('default'),
                o('transition', { attrs: { name: 'fade-drop' } }, [
                  t.showDragPanel
                    ? o('div', {
                        staticClass: 'drop-panel',
                        on: {
                          dragover: function(e) {
                            return e.preventDefault(), t.onDragover(e)
                          },
                          dragleave: function(e) {
                            t.showDragPanel = !1
                          },
                          drop: t.onDrop
                        }
                      })
                    : t._e()
                ])
              ],
              2
            )
          },
          [],
          !1,
          null,
          'f194e6c6',
          null
        ).exports)
    function R(t) {
      ;(t = t || {}),
        (this.phase = 0),
        (this.run = !1),
        (this.ratio = t.ratio || window.devicePixelRatio || 1),
        (this.width = this.ratio * (t.width || 320)),
        (this.width_2 = this.width / 2),
        (this.width_4 = this.width / 4),
        (this.height = this.ratio * (t.height || 100)),
        (this.height_2 = this.height / 2),
        (this.MAX = this.height_2 - 4),
        (this.amplitude = t.amplitude || 1),
        (this.speed = t.speed || 0.2),
        (this.frequency = t.frequency || 6),
        (this.color =
          (function(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
              t,
              e,
              o,
              n
            ) {
              return e + e + o + o + n + n
            })
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
            return e
              ? parseInt(e[1], 16).toString() +
                  ',' +
                  parseInt(e[2], 16).toString() +
                  ',' +
                  parseInt(e[3], 16).toString()
              : null
          })(t.color || '#fff') || '255,255,255'),
        (this.canvas = document.createElement('canvas')),
        (this.canvas.width = this.width),
        (this.canvas.height = this.height),
        t.cover
          ? (this.canvas.style.width = this.canvas.style.height = '100%')
          : ((this.canvas.style.width = this.width / this.ratio + 'px'),
            (this.canvas.style.height = this.height / this.ratio + 'px')),
        (this.container = t.container || document.body),
        this.container.appendChild(this.canvas),
        (this.ctx = this.canvas.getContext('2d')),
        t.autostart && this.start()
    }
    ;(R.prototype._GATF_cache = {}),
      (R.prototype._globAttFunc = function(t) {
        return (
          null == R.prototype._GATF_cache[t] &&
            (R.prototype._GATF_cache[t] = Math.pow(
              4 / (4 + Math.pow(t, 4)),
              4
            )),
          R.prototype._GATF_cache[t]
        )
      }),
      (R.prototype._xpos = function(t) {
        return this.width_2 + t * this.width_4
      }),
      (R.prototype._ypos = function(t, e) {
        var o = (this.MAX * this.amplitude) / e
        return (
          this.height_2 +
          this._globAttFunc(t) * o * Math.sin(this.frequency * t - this.phase)
        )
      }),
      (R.prototype._drawLine = function(t, e, o) {
        this.ctx.moveTo(0, 0),
          this.ctx.beginPath(),
          (this.ctx.strokeStyle = e),
          (this.ctx.lineWidth = o || 1)
        for (var n = -2; (n += 0.01) <= 2; ) {
          var i = this._ypos(n, t)
          Math.abs(n) >= 1.9 && (i = this.height_2),
            this.ctx.lineTo(this._xpos(n), i)
        }
        this.ctx.stroke()
      }),
      (R.prototype._clear = function() {
        ;(this.ctx.globalCompositeOperation = 'destination-out'),
          this.ctx.fillRect(0, 0, this.width, this.height),
          (this.ctx.globalCompositeOperation = 'source-over')
      }),
      (R.prototype._draw = function() {
        !1 !== this.run &&
          ((this.phase = (this.phase + Math.PI * this.speed) % (2 * Math.PI)),
          this._clear(),
          this._drawLine(-2, 'rgba(' + this.color + ',0.1)'),
          this._drawLine(-6, 'rgba(' + this.color + ',0.2)'),
          this._drawLine(4, 'rgba(' + this.color + ',0.4)'),
          this._drawLine(2, 'rgba(' + this.color + ',0.6)'),
          this._drawLine(1, 'rgba(' + this.color + ',1)', 1.5),
          window.requestAnimationFrame
            ? requestAnimationFrame(this._draw.bind(this))
            : setTimeout(this._draw.bind(this), 20))
      }),
      (R.prototype.start = function() {
        ;(this.phase = 0), (this.run = !0), this._draw()
      }),
      (R.prototype.stop = function() {
        ;(this.phase = 0), (this.run = !1)
      }),
      (R.prototype.setSpeed = function(t) {
        this.speed = t
      }),
      (R.prototype.setNoise = R.prototype.setAmplitude = function(t) {
        this.amplitude = Math.max(Math.min(t, 1), 0)
      })
    var U = R,
      N = {
        props: ['amplitude', 'speed', 'width', 'height'],
        data: function() {
          return {
            wave: null,
            rateTimer: 2e3,
            currentSpeed: 0,
            stopwatch: new p()
          }
        },
        mounted: function() {
          this.attachSiriWave()
        },
        methods: {
          attachSiriWave: function() {
            var t = this,
              e = new U({
                container: this.$refs.waveform,
                width: this.width,
                height: 80,
                cover: !0,
                color: '#fefcb2',
                speed: this.speed || 0.02,
                amplitude: this.amplitude,
                frequency: 2
              }),
              o = function(t) {
                return e[t].bind(e)
              }
            this.$on('wave:start', o('start')),
              this.$on('wave:stop', o('stop')),
              this.$on('wave:setSpeed', o('setSpeed')),
              this.$on('wave:stop', o('setAmplitude')),
              this.$on('wave:resize', function() {
                var o = t.width
                ;(e.height = 80),
                  (e.height_2 = 40),
                  (e.MAX = e.height_2 - 4),
                  (e.width = o),
                  (e.width_2 = o / 2),
                  (e.width_4 = o / 4),
                  (e.canvas.height = 80),
                  (e.canvas.width = o),
                  (e.container.style.margin = '-40px auto')
              })
          },
          start: function() {
            this.$emit('wave:start'), this.initRateRecord()
          },
          stop: function() {
            this.$emit('wave:stop')
          },
          setSpeed: function(t) {
            this.currentSpeed !== t &&
              (this.$emit('wave:setSpeed', t), (this.currentSpeed = t))
          },
          setAmplitude: function(t) {
            this.$emit('wave:setAmplitude', t)
          },
          touch: function(t) {
            var e = this.stopwatch.tick().checkBeats('fps', 5),
              o = this.heartRate(e)
            this.setSpeed(this.speed * o)
          },
          initRateRecord: function() {
            var t = this
            this.stopwatch.start(),
              setInterval(function() {
                var e = t.stopwatch.emptyFrame().checkBeats('fps', 5),
                  o = t.heartRate(e)
                t.setSpeed(t.speed * o),
                  console.log('fps', e, 'wave', o),
                  M.$('rate')('fps', e, 'wave:', o)
              }, this.rateTimer)
          },
          heartRate: function(t) {
            return t > 5 ? 3.5 : Number((0.5 * t + 1).toFixed(3))
          }
        }
      },
      I =
        (o(126),
        Object(v.a)(
          N,
          function() {
            var t = this.$createElement
            return (this._self._c || t)('div', {
              ref: 'waveform',
              staticClass: 'waveform'
            })
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
    function z(t, e) {
      var o = this._evtMap[t]
      o &&
        o.slice().forEach(function(t) {
          t.apply(null, [].concat(e))
        })
    }
    function q(t, e) {
      this._evtMap[t] ? this._evtMap[t].push(e) : (this._evtMap[t] = [e])
    }
    function V(t, e) {
      if (this._evtMap[t] && e) {
        var o = this._evtMap[t].indexOf(e)
        if (o > -1) return this._evtMap[t].splice(o, 1)[0]
      }
      e || (this._evtMap[t] && (this._evtMap[t] = []))
    }
    function W() {
      this._evtMap = {}
    }
    ;(W.prototype.emit = z), (W.prototype.off = V), (W.prototype.on = q)
    var H = { _evtMap: {}, emit: z, off: V, on: q },
      X = {
        inject: ['getPlayer'],
        data: function() {
          return { isAutoPlaying: !1 }
        },
        computed: {
          version: function() {
            return 'v' + B.version
          }
        },
        mounted: function() {
          var t = this
          H.on('player:play', function() {
            t.isAutoPlaying = !0
          }),
            H.on('player:sleep', function() {
              t.isAutoPlaying = !1
            })
        },
        methods: {
          playMidi: function() {
            this.getPlayer()
              .then(function(t) {
                return t.isPlaying()
                  ? t.pause()
                  : t.getState().isEnd
                  ? void t.loadUrl('star.mid').then(function(t) {
                      return t.play()
                    })
                  : t.play()
              })
              .catch(function(t) {
                console.log('player err', t)
              })
          }
        }
      },
      K =
        (o(127),
        Object(v.a)(
          X,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              'span',
              {
                staticClass: 'version',
                class: { 'version--active': this.isAutoPlaying },
                on: { click: this.playMidi }
              },
              [this._v(this._s(this.version))]
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      J = {
        data: function() {
          return { files: [] }
        },
        methods: {
          getFile: function() {
            var t = this,
              e = this.$refs.fileInput.files[0]
            $(e).then(function(e) {
              t.$emit('get-bg', e)
            })
          }
        }
      },
      Y =
        (o(128),
        Object(v.a)(
          J,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', { staticClass: 'bg-btn' }, [
              e(
                'svg',
                {
                  staticClass: 'bg-icon',
                  attrs: {
                    viewBox: '0 0 1024 1024',
                    version: '1.1',
                    xmlns: 'http://www.w3.org/2000/svg'
                  }
                },
                [
                  e('path', {
                    attrs: {
                      d:
                        'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
                      'p-id': '7970',
                      fill: '#fefcb2'
                    }
                  }),
                  e('path', {
                    attrs: {
                      d:
                        'M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
                      'p-id': '7971',
                      fill: '#fefcb2'
                    }
                  })
                ]
              ),
              e('input', {
                ref: 'fileInput',
                attrs: {
                  type: 'file',
                  accept: 'image/gif,image/jpeg,image/jpg,image/png'
                },
                on: { change: this.getFile }
              })
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
    function Z() {
      var t =
          screen.msOrientation ||
          screen.mozOrientation ||
          (screen.orientation || {}).type,
        e = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      return 'portrait-secondary' === t || 'portrait-primary' === t
        ? (function(t) {
            var e = { height: t.width, width: t.height }
            return (
              console.log(
                'force landscape:',
                'height',
                e.height,
                'width',
                e.width
              ),
              M.$('screen')('force,', 'height', e.height, 'width', e.width),
              e
            )
          })(e)
        : (function(t) {
            var e = [t.height, t.width].sort(function(t, e) {
                return t - e
              }),
              o = { height: e[0], width: e[1] }
            return (
              console.log(
                'auto orientation:',
                'height',
                o.height,
                'width',
                o.width
              ),
              M.$('screen')('auto,', 'height', o.height, 'width', o.width),
              o
            )
          })(e)
    }
    var Q = o(70),
      tt = o.n(Q),
      et = {
        name: 'app',
        components: {
          Droparea: L,
          Keyboard: P,
          Waveline: I,
          Version: K,
          SetBg: Y
        },
        data: function() {
          return { stageSize: Z(), bgUrl: tt.a, tracks: 0 }
        },
        provide: function() {
          return { getPlayer: this.getPlayer }
        },
        computed: {
          frameStyle: function() {
            var t = this.stageSize,
              e = t.width,
              o = t.height
            return {
              backgroundImage: 'url('.concat(this.bgUrl, ')'),
              height: o + 'px',
              width: e + 'px'
            }
          }
        },
        created: function() {
          var t = localStorage.getItem('bgUrl')
          t && (this.bgUrl = t)
        },
        mounted: function() {
          var t = this
          ;(this.keyboard = this.$refs.keyboard),
            this.initWaveLine(),
            window.addEventListener(
              'resize',
              function() {
                t.stageSize = Z()
              },
              !1
            )
        },
        methods: {
          changeBg: function(t) {
            ;(this.bgUrl = t), localStorage.setItem('bgUrl', t)
          },
          initWaveLine: function() {
            this.$refs.waveline.start()
          },
          onPlay: function(t) {
            this.$refs.waveline.touch()
          },
          getPlayer: function() {
            var t = this
            return this._playerPromise
              ? this._playerPromise
              : ((this._playerPromise = Promise.all([o.e(2), o.e(3)])
                  .then(o.bind(null, 134))
                  .then(function(t) {
                    return t.default
                  })
                  .then(function(t) {
                    return t.setEventProxy(H)
                  })),
                H.on('player:fileLoaded', function(e) {
                  t.tracks = e.tracks.length
                }),
                H.on('player:midiEvent', function(e) {
                  var o = e.noteName
                  'Note on' === e.name
                    ? e.velocity > 0
                      ? t.keyboard.tapdown(o, e.channel)
                      : t.keyboard.tapup(o)
                    : 'Note off' === e.name && t.keyboard.tapup(o)
                }),
                H.on('player:play', function() {
                  console.log('[player] play')
                }),
                H.on('player:sleep', function() {
                  t.keyboard.release(), console.log('[player] sleep')
                }),
                console.log('[player] regist'),
                this._playerPromise)
          },
          onDropMidi: function(t) {
            this.getPlayer().then(function(e) {
              e.stop(),
                0 === t.code &&
                  (e.load(t.data, t.file).play(), console.log('play', t.file))
            })
          }
        }
      },
      ot = Object(v.a)(
        et,
        function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            'div',
            { style: this.frameStyle, attrs: { id: 'app' } },
            [
              e(
                'Droparea',
                {
                  staticClass: 'main',
                  attrs: { accept: 'audio/midi' },
                  on: { drop: this.onDropMidi }
                },
                [e('Keyboard', { ref: 'keyboard', on: { play: this.onPlay } })],
                1
              ),
              e('Waveline', {
                ref: 'waveline',
                attrs: {
                  amplitude: '0.5',
                  speed: '0.01',
                  width: this.stageSize.width
                }
              }),
              e('SetBg', {
                staticClass: 'set-bg',
                on: { 'get-bg': this.changeBg }
              }),
              e('Version')
            ],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      ).exports
    ;(n.a.config.productionTip = !1),
      new n.a({
        render: function(t) {
          return t(ot)
        }
      }).$mount('#app')
  },
  25: function(t, e, o) {},
  26: function(t, e, o) {},
  27: function(t, e, o) {},
  28: function(t, e, o) {},
  29: function(t, e, o) {},
  30: function(t, e, o) {},
  31: function(t, e, o) {},
  32: function(t, e, o) {},
  70: function(t, e, o) {
    t.exports = o.p + 'static/img/bg.d24257d1.jpg'
  },
  71: function(t, e, o) {
    o(72), (t.exports = o(129))
  }
})
