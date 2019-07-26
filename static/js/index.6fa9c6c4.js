!(function(t) {
  function e(e) {
    for (
      var g, s, a = e[0], r = e[1], p = e[2], m = 0, h = [];
      m < a.length;
      m++
    )
      (s = a[m]), i[s] && h.push(i[s][0]), (i[s] = 0)
    for (g in r) Object.prototype.hasOwnProperty.call(r, g) && (t[g] = r[g])
    for (A && A(e); h.length; ) h.shift()()
    return n.push.apply(n, p || []), o()
  }
  function o() {
    for (var t, e = 0; e < n.length; e++) {
      for (var o = n[e], g = !0, a = 1; a < o.length; a++) {
        var r = o[a]
        0 !== i[r] && (g = !1)
      }
      g && (n.splice(e--, 1), (t = s((s.s = o[0]))))
    }
    return t
  }
  var g = {},
    i = { 0: 0 },
    n = []
  function s(e) {
    if (g[e]) return g[e].exports
    var o = (g[e] = { i: e, l: !1, exports: {} })
    return t[e].call(o.exports, o, o.exports, s), (o.l = !0), o.exports
  }
  ;(s.m = t),
    (s.c = g),
    (s.d = function(t, e, o) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (s.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (s.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var g in t)
          s.d(
            o,
            g,
            function(e) {
              return t[e]
            }.bind(null, g)
          )
      return o
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return s.d(e, 'a', e), e
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (s.p = './')
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    r = a.push.bind(a)
  ;(a.push = e), (a = a.slice())
  for (var p = 0; p < a.length; p++) e(a[p])
  var A = r
  n.push([70, 1]), o()
})({
  119: function(t, e, o) {},
  120: function(t, e, o) {
    'use strict'
    var g = o(25)
    o.n(g).a
  },
  121: function(t, e, o) {
    'use strict'
    var g = o(26)
    o.n(g).a
  },
  122: function(t, e, o) {
    'use strict'
    var g = o(27)
    o.n(g).a
  },
  123: function(t, e, o) {
    'use strict'
    var g = o(28)
    o.n(g).a
  },
  124: function(t, e, o) {
    'use strict'
    var g = o(29)
    o.n(g).a
  },
  125: function(t, e, o) {
    'use strict'
    var g = o(30)
    o.n(g).a
  },
  126: function(t, e, o) {
    'use strict'
    o.r(e)
    o(119)
    var g = o(44),
      i = o(31),
      n = o(66),
      s = o(67)
    function a(t, e) {
      var o = t.reduce(function(t, e) {
        return t + e
      }, 0)
      if (0 === o) return 0
      var g = o / t.length
      return e ? Number(g.toFixed(e)) : g
    }
    function r() {
      return (performance || Date).now()
    }
    var p = (function() {
        function t() {
          Object(n.a)(this, t),
            (this.beginTime = 0),
            (this.prevTime = 0),
            (this._cursor = 0),
            (this._history = { ms: [], fps: [] }),
            (this.maxRecords = 10),
            (this.frames = 0)
        }
        return (
          Object(s.a)(t, [
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
                  g = this._history[t],
                  i = g.slice(0, Math.min(g.length, e))
                return a(i, o)
              }
            }
          ]),
          t
        )
      })(),
      A = 'keyframes',
      m = document.getElementById(A),
      h = {}
    var c = function(t, e) {
      if (((t = t.replace('.', '_')), h[t])) return t
      var o = '@keyframes '.concat(t, ' {\n    ').concat(e, '\n  }')
      if (m) {
        var g = m.sheet
        g.insertRule(o, g.cssRules.length)
      } else
        ((m = document.createElement('style')).id = A),
          (m.textContent = o),
          document.head.appendChild(m)
      return (h[t] = o), t
    }
    var u = function(t, e) {
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
    function l() {
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
                ? (this.angle = 45 + 90 * l(3))
                : (this.angle = 45 * l(7)),
              {
                transform: 'rotateZ('
                  .concat(this.angle, 'deg) rotateY(')
                  .concat(180 * l(1), 'deg)')
              }
            )
          }
        },
        mounted: function() {
          var t = this,
            e = this.shape || 'circle',
            o = this.$refs.path
          ;(this.length = Math.ceil(u(e, o))),
            window.addEventListener(
              'resize',
              function() {
                t.length = Math.ceil(u(e, o))
              },
              !1
            ),
            (this.styleObj.animationName = c(
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
      f = (o(120), o(0)),
      C = {
        name: 'Note',
        props: ['type'],
        components: {
          Shape: Object(f.a)(
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
      D =
        (o(121),
        Object(f.a)(
          C,
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
      v = !1,
      F = !1
    window.addEventListener('mouseup', function() {
      return (v = !1)
    })
    var k = {
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
            if (!F) {
              var e = this.tid
              this.pressMap[e] ||
                (this.press(e), (v = !0), (this.pressMap[e] = 'M'))
            }
          },
          mouseUp: function(t) {
            if (!F) {
              var e = this.tid
              v &&
                'M' == this.pressMap[e] &&
                (this.release(e), delete this.pressMap[e], (v = !1))
            }
          },
          mouseOver: function(t) {
            var e = this.tid
            v && !this.pressMap[e] && (this.press(e), (this.pressMap[e] = 'M'))
          },
          mouseOut: function(t) {
            var e = this.tid
            v &&
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
            F ? t.preventDefault() : 'touchend' === t.type && (F = !0)
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
                  for (var g = document.elementFromPoint(t, e); g; ) {
                    var i = o(g)
                    if (i) return i
                    g = g.parentNode
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
        (o(122),
        Object(f.a)(
          k,
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
      E = o(17),
      B = o.n(E)
    document.querySelector('body').addEventListener(
      'click',
      function() {
        B.a.start()
      },
      !1
    )
    var G = {
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
      Q = {
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
          var e, o, g
          if (
            (((e = t || {}).instruments = e.instruments || this.list),
            (e.baseUrl = e.baseUrl || this.baseUrl),
            (e.onload = e.onload || this.onload),
            e.ext &&
              (e.ext != this.ext && this.setExt(e.ext), (e.ext = this.ext)),
            (o = {}),
            Array.isArray(e.instruments))
          ) {
            for (g = 0; g <= e.instruments.length - 1; g++) {
              var i = this[e.instruments[g]]
              if (!0 === this.minify || !0 === e.minify) {
                var n = 1
                Object.keys(i).length >= 17 && (n = 2),
                  Object.keys(i).length >= 33 && (n = 4),
                  Object.keys(i).length >= 49 && (n = 6)
                var s = Object.keys(i).filter(function(t, e) {
                  return e % n != 0
                })
                s.forEach(function(t) {
                  delete i[t]
                })
              }
              o[e.instruments[g]] = new B.a.Sampler(i, {
                baseUrl: e.baseUrl + e.instruments[g] + '/',
                onload: e.onload
              })
            }
            return o
          }
          return (
            (i = this[e.instruments]),
            (!0 !== this.minify && !0 !== e.minify) ||
              ((n = 1),
              Object.keys(i).length >= 17 && (n = 2),
              Object.keys(i).length >= 33 && (n = 4),
              Object.keys(i).length >= 49 && (n = 6),
              (s = Object.keys(i).filter(function(t, e) {
                return e % n != 0
              })).forEach(function(t) {
                delete i[t]
              })),
            new B.a.Sampler(i, {
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
          A2: G.A2,
          A3: G.A3,
          A4: G.A4,
          A5: G.A5,
          A6: G.A6,
          'A#3': G['A#3'],
          'A#4': G['A#4'],
          'A#5': G['A#5'],
          'A#6': G['A#6'],
          B2: G.B2,
          B3: G.B3,
          B4: G.B4,
          B5: G.B5,
          B6: G.B6,
          C2: G.C2,
          C3: G.C3,
          C4: G.C4,
          C5: G.C5,
          C6: G.C6,
          C7: G.C7,
          'C#2': G['C#2'],
          'C#3': G['C#3'],
          'C#4': G['C#4'],
          'C#5': G['C#5'],
          'C#6': G['C#6'],
          D0: G.D0,
          D1: G.D1,
          D2: G.D2,
          D3: G.D3,
          D4: G.D4,
          D5: G.D5,
          D6: G.D6,
          'D#2': G['D#2'],
          'D#3': G['D#3'],
          'D#4': G['D#4'],
          'D#5': G['D#5'],
          'D#6': G['D#6'],
          E2: G.E2,
          E3: G.E3,
          E4: G.E4,
          E5: G.E5,
          E6: G.E6,
          F2: G.F2,
          F3: G.F3,
          F4: G.F4,
          F5: G.F5,
          F6: G.F6,
          'F#2': G['F#2'],
          'F#3': G['F#3'],
          'F#4': G['F#4'],
          'F#5': G['F#5'],
          'F#6': G['F#6'],
          G2: G.G2,
          G3: G.G3,
          G4: G.G4,
          G5: G.G5,
          G6: G.G6,
          'G#2': G['G#2'],
          'G#3': G['G#3'],
          'G#4': G['G#4'],
          'G#5': G['G#5'],
          'G#6': G['G#6']
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
      I = o(43),
      y = o.n(I),
      M = {
        isDebug: (function(t) {
          var e = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
            o = window.location.search.substr(1).match(e)
          return null === o ? null : decodeURI(o[2])
        })('__debug'),
        version: '0.5.0'
      }
    y.a.config({ output: M.isDebug && 'default', color: '#fff' })
    var U = y.a,
      N = {
        total: 15,
        tone: 4,
        shapes: ['muti', 'rect', 'circle'],
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      }
    function S(t) {
      var e = t.total,
        o = t.tone,
        g = t.notes,
        n = t.shapes,
        s = n[0],
        a = n.slice(1),
        r = g.length,
        p = o - 1
      return Object(i.a)(Array(e)).map(function(t, e) {
        var o = e % r == 0 ? s : a[e % a.length],
          i = g[e % r]
        return i === g[0] && p++, { shape: o, note: i + p, index: e }
      })
    }
    var b = {
        name: 'Keyboard',
        components: { Note: D, Tap: w },
        data: function() {
          return { list: S(N) }
        },
        created: function() {},
        mounted: function() {
          this.synth = Q.load({ instruments: 'piano' }).toMaster()
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
      T =
        (o(123),
        Object(f.a)(
          b,
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
      R = function(t) {
        var e = new FileReader()
        return new Promise(function(o, g) {
          if (!t) return g('invalid url')
          ;(e.onload = function(t) {
            var e = t.target.result
            o(e)
          }),
            e.readAsDataURL(t)
        })
      },
      x = {
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
            R(o).then(function(t) {
              e.$emit('drop', { code: 0, data: t, file: o, msg: 'success' })
            })
          },
          onDragover: function(t) {
            t.dataTransfer.dropEffect = 'copy'
          }
        }
      },
      j =
        (o(124),
        Object(f.a)(
          x,
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
    function J(t) {
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
              g
            ) {
              return e + e + o + o + g + g
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
    ;(J.prototype._GATF_cache = {}),
      (J.prototype._globAttFunc = function(t) {
        return (
          null == J.prototype._GATF_cache[t] &&
            (J.prototype._GATF_cache[t] = Math.pow(
              4 / (4 + Math.pow(t, 4)),
              4
            )),
          J.prototype._GATF_cache[t]
        )
      }),
      (J.prototype._xpos = function(t) {
        return this.width_2 + t * this.width_4
      }),
      (J.prototype._ypos = function(t, e) {
        var o = (this.MAX * this.amplitude) / e
        return (
          this.height_2 +
          this._globAttFunc(t) * o * Math.sin(this.frequency * t - this.phase)
        )
      }),
      (J.prototype._drawLine = function(t, e, o) {
        this.ctx.moveTo(0, 0),
          this.ctx.beginPath(),
          (this.ctx.strokeStyle = e),
          (this.ctx.lineWidth = o || 1)
        for (var g = -2; (g += 0.01) <= 2; ) {
          var i = this._ypos(g, t)
          Math.abs(g) >= 1.9 && (i = this.height_2),
            this.ctx.lineTo(this._xpos(g), i)
        }
        this.ctx.stroke()
      }),
      (J.prototype._clear = function() {
        ;(this.ctx.globalCompositeOperation = 'destination-out'),
          this.ctx.fillRect(0, 0, this.width, this.height),
          (this.ctx.globalCompositeOperation = 'source-over')
      }),
      (J.prototype._draw = function() {
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
      (J.prototype.start = function() {
        ;(this.phase = 0), (this.run = !0), this._draw()
      }),
      (J.prototype.stop = function() {
        ;(this.phase = 0), (this.run = !1)
      }),
      (J.prototype.setSpeed = function(t) {
        this.speed = t
      }),
      (J.prototype.setNoise = J.prototype.setAmplitude = function(t) {
        this.amplitude = Math.max(Math.min(t, 1), 0)
      })
    var _ = J,
      z = {
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
        watch: {
          width: function() {
            this.$emit('wave:resize')
          }
        },
        methods: {
          attachSiriWave: function() {
            var t = this,
              e = new _({
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
                  U.$('rate')('fps', e, 'wave:', o)
              }, this.rateTimer)
          },
          heartRate: function(t) {
            return t > 5 ? 3.5 : Number((0.5 * t + 1).toFixed(3))
          }
        }
      },
      O = Object(f.a)(
        z,
        function() {
          var t = this.$createElement
          return (this._self._c || t)('div', { ref: 'waveform' })
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      P = {
        data: function() {
          return { files: [] }
        },
        methods: {
          getFile: function() {
            var t = this,
              e = this.$refs.fileInput.files[0]
            R(e).then(function(e) {
              t.$emit('get-bg', e)
            })
          }
        }
      },
      V =
        (o(125),
        Object(f.a)(
          P,
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
    function Y() {
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
              U.$('screen')('force,', 'height', e.height, 'width', e.width),
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
              U.$('screen')('auto,', 'height', o.height, 'width', o.width),
              o
            )
          })(e)
    }
    var $ = new (o(68)).Player(),
      K =
        'data:audio/midi;base64,TVRoZAAAAAYAAQAFAGBNVHJrAAAAEwD/WAQEAmAIAP9RAwhSrgD/LwBNVHJrAAABigD/AxRNZWxvZHkgICAgICAgICAgICAgIACxAAAAwQMA/1gEBAJgCAD/UQMIUq4AkUhrSIFIQBiRSGtIgUhAGJFPa0iBT0AYkU9rSIFPQBiRUWRIgVFAGJFRa0iBUUAYkU9rgSiBT0AYkU1rSIFNQBiRTWtIgU1AGJFMa0iBTEAYkUxrSIFMQBiRSmtIgUpAGLEyAwCRSmtIgUpAGJFIa3iBSEBIkU9rSIFPQBiRT2tIgU9AGJFNa0iBTUAYkU1rSIFNQBiRTGtIgUxAGJFMa0iBTEAYkUprgRCBSkAwkU9rSIFPQBiRT2tIgU9AGJFNa0iBTUAYkU1rSIFNQBiRTGtIgUxAGJFMa0iBTEAYkUprgRCBSkAwkUhrSIFIQBiRSGtIgUhAGJFPa0iBT0AYkU9rSIFPQBiRUWtIgVFAGJFRa0iBUUAYkU9rfoFPQEKRTWtIgU1AGJFNa0iBTUAYkUxrSIFMQBiRTGtIgUxAGJFKa0iBSkAYkUprSIFKQBiRSGuBQIFIQAD/LwBNVHJrAAADIwD/AxRCYXNzICAgICAgICAgICAgICAgIACyAAAAwkAA/1gEBAJgCAD/UQMIUq4AkjBOMJI3QwGCMEAvkjROAoI3QC6SN0YKgjRAJpIwTgWCN0ArkjdHCIIwQCiSNEYGgjdAKpI3RhuCNEAVkjBSBYI3QCuSOUYGgjBAKpI1VASCOUAskjlMD4I1QCCCOUABkjBOMJI3TRmCMEAXkjRMBoI3QCqSN00DgjRAKoI3QAOSK04wkjVJD4IrQCGSMlQGgjVAKIIyQAKSNUwvgjVAAZIwRDCSN0wTgjBAHZI0TgWCN0AqgjRAAZI3RjCSL0kDgjdALZI3ThGCL0AfkjJSBYI3QCuSN0YGgjJAKpIwUgaCN0Aqkjc8F4IwQBmSNFECgjdALII0QAKSN1QugjdAApIrTjCSMFIJgitAJ5I0UgeCMEApkjBSDII0QCSSK1IBgjBAL5IyVAeCK0ApkjVUBYIyQCuSMlMGgjVAKpIrUgGCMkAvkjBUBoIrQCqCMEAAkjRRMJIwTAeCNEAjgjBABpIrRzCSL00MgitAJIIvQACSMlEvgjJAAZIvUjCSK1EJgi9AJ5IwVAaCK0AqkjRTAoIwQC6SME4BgjRAL5IrVASCMEAskjJUCIIrQCiSNVIBgjJAL5IyUgiCNUAokitNAYIyQC+SMFEGgitAKpI0VwGCMEAvkjBTF4I0QBeCMEACkitTMJIvSQuCK0AlkjJMA4IvQCyCMkABki9QF4IvQBmSMFQwkjc8E4IwQB2SNFIEgjdALJI3SQSCNEAqgjdAApIwVDCSN0cYgjBAGJI0TAiCN0AokjdRCII0QCiCN0AAkjBOMJI5TAyCMEAkkjVSCYI5QCeSOVIJgjVAJoI5QAGSMFMwkjdDEYIwQB+SNE4KgjdAJpI3SQyCNEAkkis8AJItSQSCN0AAgi1ALJI1VA2CK0AjkjJUBYI1QCmCMkACkjVTMJIwVAKCNUAukjc+HYIwQBOSNE4IgjdAKII0QACSN0wwki9SBoI3QCqSNU4Tgi9AHZIyTAWCNUArkjVRBIIyQCySMFQEgjVAgTyCMEAA/y8ATVRyawAABJMA/wMUQ2hvcmRzICAgICAgICAgICAgICAAswAAAMMCAP9YBAQCYAgA/1EDCFKuAJNATgCTQ00wkzxHBYNAQAGDQ0Aqk0BRAJNDTAGDPEAvkzw8A4NAQAGDQ0Ask0BRAJNDUQaDPEAqkzxGA4NAQAuDQ0AggzxAApNAUQCTQ1Qwkzw+AoNAQBCDQ0Aek0FXAJNFVgiDPEAokzxJA4NBQAaDRUAnk0FTAJNFUwyDPEAkkzxMD4NBQAaDRUAbk0BRAJNDUgmDPEAnkzxJCINDQAGDQEAnk0NNAJNAUwmDPEAnkzxJB4NAQAGDQ0AhgzxAB5M+VwCTQVcwkzlMBYM+QAWDQUAmkz5WAJNBVgiDOUAokzlSBYM+QAuDQUATgzlADZNAUwCTQ1Iwg0NAAJM8RwODQEAtk0BZAJNDUQqDPEAmkzxJBoNAQBODQ0ATgzxABJM+UwCTQVIwkztSA4M+QAGDQUAskz5TAJNBVwiDO0AokztTCINBQAGDPkAnkzxQAJNAVAODO0AtkzdQBIM8QAmDQEAjkzxRAJNAUwqDN0Amg0BAAJM3TgKDPEAlgzdACZNASQCTQ04ug0BAApM8TgSDQ0Ask0NZAJNAVwqDPEAmkzxMAoNAQBWDQ0AXgzxAApM+TQCTQVYYkzdHF4M+QASDQUAigzdAC5M+VACTQVYwkzdOB4M+QACDQUApkzxTAJNAUgaDN0AqkzdJAoNAQAGDPEAtk0BWAJM8UguDN0AlkzdSB4NAQAaDPEAjkztRAJM+UwKDN0AukzVUBYM+QAODO0AokztQAJM+VgWDNUArkzVTBIM+QAODO0AegzVAC5NDVACTQFYtg0BAA5M8UAmDQ0Ank0BXAJNDTgyDPEAkkzxUDINAQBqDQ0AEgzxABpM+UwCTQVgvgz5AAINBQAGTO0kwk0FbAJM+UwiDO0AokztRA4NBQAaDPkAhgztABpNAWACTPFQsgzxABINAQACTN0gwkzxjAJNAXQyDN0AkkzdQAYM8QBiDQEAXkztYAJM+VwWDN0ArkzdDBIM7QAODPkApkztSAJM+UwWDN0ArkzdMBIM+QASDO0AokzxWAJNAUwODN0AtkzdMAoNAQAGDPEAtkzxUAJNAVwWDN0ArkzdRBYNAQAGDPEAqk0BDAJNDTQSDN0AskzxSAYNAQAqDQ0Alk0BXAJNDUwSDPEAskzxSBoNAQAGDQ0AhgzxACJNBVgCTRVIwkzlSAYNBQAeDRUAok0FXAJNFUguDOUAlkzlRCINBQCODOUAFk0BTAJNDVAODRUAtkzxSAYNAQAODQ0Ask0BUAJNDUgWDPEArkzxRA4NDQAWDQEAokz5SAJNBUwSDPEAskzlRBYM+QAiDQUAjkz5XAJNBVweDOUApkzlUAoNBQAKDPkAhgzlAC5M8TgCTQFIYkzdJGIM8QASDQEAggzdADJM8WwCTQFswkzdOBoM8QAmDQEAhkztdAJM+VwWDN0ArkzdRA4M+QAGDO0AogzdABJM7UwCTPlYwkzdUCIM7QAKDPkAkgzdAApM8VACTQFmBQIM8QACDQEAA/y8ATVRyawAAASYA/wMURmlsbHMgICAgICAgICAgICAgICAAtAAAAMQNAP9YBAQCYAgA/1EDCFKujXCUSDoThEhABZRKPRCESkAIlExJD4RMQCGUTUkRhE1AH5RPUnWET0B7lFZHEIRWQAiUVEAQhFRACJRTIg+EU0AJlFFDD4RRQAmUT0kMhE9AghSUSEMOhEhACpRKQBGESkAHlExDEYRMQB+UTUMRhE1AH5RPRXmET0B3lE9JEIRPQAiUUT8UhFFABJRTQxeEU0ABlFQ/FoRUQAKUVkwPhFZAgTGUVEkRhFRAH5RPPgqET0AmlFhFDYRYQCOUVD0NhFRAI5RbUg+EW0CBMZRRVxKEUUAelE1DEIRNQCCUVFIOhFRAIpRPUhCET0AglFRJD4RUQAD/LwA=',
      L = '',
      W = function() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K
        if (L !== t) return $.loadDataUri(t), (L = t), $.tracks.length
      },
      q = function() {
        return $.isPlaying()
      },
      H = function() {
        $.play()
      },
      Z = function() {
        $.triggerPlayerEvent('pause'), $.pause()
      },
      X = function(t, e) {
        $.on(t, e)
      },
      tt = function() {
        $.stop()
      },
      et = o(69),
      ot = o.n(et),
      gt = {
        name: 'app',
        components: { Droparea: j, Keyboard: T, Waveline: O, SetBg: V },
        data: function() {
          return { stageSize: Y(), version: M.version, bgUrl: ot.a, tracks: 0 }
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
            this.registMidiPlayerEvent(),
            window.addEventListener(
              'resize',
              function() {
                t.stageSize = Y()
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
          autoplay: function() {
            q() ? Z() : (H(), console.log('play'))
          },
          registMidiPlayerEvent: function() {
            var t = this
            X('fileLoaded', function(e) {
              ;(t.tracks = e.tracks.length), console.log('tracks', t.tracks)
            }),
              X('midiEvent', function(e) {
                var o = e.noteName
                'Note on' === e.name
                  ? e.velocity > 0
                    ? t.keyboard.tapdown(o, e.channel)
                    : t.keyboard.tapup(o)
                  : 'Note off' === e.name && t.keyboard.tapup(o)
              }),
              X('endOfFile', function(e) {
                t.keyboard.release()
              }),
              X('pause', function(e) {
                t.keyboard.release()
              }),
              W()
          },
          onDropMidi: function(t) {
            tt(),
              this.keyboard.release(),
              0 === t.code && (W(t.data), console.log('play', t.file), H())
          }
        }
      },
      it = Object(f.a)(
        gt,
        function() {
          var t = this,
            e = t.$createElement,
            o = t._self._c || e
          return o(
            'div',
            { style: t.frameStyle, attrs: { id: 'app' } },
            [
              o(
                'Droparea',
                {
                  staticClass: 'main',
                  attrs: { accept: 'audio/midi' },
                  on: { drop: t.onDropMidi }
                },
                [o('Keyboard', { ref: 'keyboard', on: { play: t.onPlay } })],
                1
              ),
              o('Waveline', {
                ref: 'waveline',
                attrs: {
                  amplitude: '0.5',
                  speed: '0.01',
                  width: t.stageSize.width
                }
              }),
              o('SetBg', {
                staticClass: 'set-bg',
                on: { 'get-bg': t.changeBg }
              }),
              o('span', { staticClass: 'version', on: { click: t.autoplay } }, [
                t._v('v' + t._s(t.version))
              ])
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
    ;(g.a.config.productionTip = !1),
      new g.a({
        render: function(t) {
          return t(it)
        }
      }).$mount('#app')
  },
  25: function(t, e, o) {},
  26: function(t, e, o) {},
  27: function(t, e, o) {},
  28: function(t, e, o) {},
  29: function(t, e, o) {},
  30: function(t, e, o) {},
  69: function(t, e, o) {
    t.exports = o.p + 'static/img/bg.d24257d1.jpg'
  },
  70: function(t, e, o) {
    o(71), (t.exports = o(126))
  }
})
