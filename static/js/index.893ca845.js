!(function(t) {
  function e(e) {
    for (
      var o, n, p = e[0], a = e[1], r = e[2], h = 0, c = [];
      h < p.length;
      h++
    )
      (n = p[h]), s[n] && c.push(s[n][0]), (s[n] = 0)
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
    for (m && m(e); c.length; ) c.shift()()
    return i.push.apply(i, r || []), g()
  }
  function g() {
    for (var t, e = 0; e < i.length; e++) {
      for (var g = i[e], o = !0, p = 1; p < g.length; p++) {
        var a = g[p]
        0 !== s[a] && (o = !1)
      }
      o && (i.splice(e--, 1), (t = n((n.s = g[0]))))
    }
    return t
  }
  var o = {},
    s = { 0: 0 },
    i = []
  function n(e) {
    if (o[e]) return o[e].exports
    var g = (o[e] = { i: e, l: !1, exports: {} })
    return t[e].call(g.exports, g, g.exports, n), (g.l = !0), g.exports
  }
  ;(n.m = t),
    (n.c = o),
    (n.d = function(t, e, g) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: g })
    }),
    (n.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var g = Object.create(null)
      if (
        (n.r(g),
        Object.defineProperty(g, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            g,
            o,
            function(e) {
              return t[e]
            }.bind(null, o)
          )
      return g
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = './')
  var p = (window.webpackJsonp = window.webpackJsonp || []),
    a = p.push.bind(p)
  ;(p.push = e), (p = p.slice())
  for (var r = 0; r < p.length; r++) e(p[r])
  var m = a
  i.push([67, 1]), g()
})({
  116: function(t, e, g) {},
  117: function(t, e, g) {
    'use strict'
    var o = g(25)
    g.n(o).a
  },
  118: function(t, e, g) {
    'use strict'
    var o = g(26)
    g.n(o).a
  },
  119: function(t, e, g) {
    'use strict'
    var o = g(27)
    g.n(o).a
  },
  120: function(t, e, g) {
    'use strict'
    var o = g(28)
    g.n(o).a
  },
  121: function(t, e, g) {
    'use strict'
    g.r(e)
    var o = g(41),
      s = (g(116), g(66)),
      i = g(63),
      n = g(64)
    function p(t, e) {
      var g = t.reduce(function(t, e) {
        return t + e
      }, 0)
      if (0 === g) return 0
      var o = g / t.length
      return e ? Number(o.toFixed(e)) : o
    }
    function a() {
      return (performance || Date).now()
    }
    var r = (function() {
        function t() {
          Object(i.a)(this, t),
            (this.beginTime = 0),
            (this.prevTime = 0),
            (this._cursor = 0),
            (this._history = { ms: [], fps: [] }),
            (this.maxRecords = 10),
            (this.frames = 0)
        }
        return (
          Object(n.a)(t, [
            {
              key: 'start',
              value: function() {
                return (this.prevTime = this.beginTime = a()), this.beginTime
              }
            },
            {
              key: 'check',
              value: function() {
                return a() - this.beginTime
              }
            },
            {
              key: '_record',
              value: function(t, e) {
                var g = this._history[t]
                g.unshift(Math.round(e)),
                  (g.length = Math.min(g.length, this.maxRecords))
              }
            },
            {
              key: 'tick',
              value: function() {
                var t = a()
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
                  g = arguments.length > 2 ? arguments[2] : void 0,
                  o = this._history[t],
                  s = o.slice(0, Math.min(o.length, e))
                return p(s, g)
              }
            }
          ]),
          t
        )
      })(),
      m = 'keyframes',
      h = document.getElementById(m),
      c = {}
    var u = function(t, e) {
      if (((t = t.replace('.', '_')), c[t])) return t
      var g = '@keyframes '.concat(t, ' {\n    ').concat(e, '\n  }')
      if (h) {
        var o = h.sheet
        o.insertRule(g, o.cssRules.length)
      } else
        ((h = document.createElement('style')).id = m),
          (h.textContent = g),
          document.head.appendChild(h)
      return (c[t] = g), t
    }
    var l = function(t, e) {
      var g = e.getTotalLength()
      return (
        g ||
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
    function d() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      return Math.floor(Math.random() * (t - e + 1) + e)
    }
    var f = {
        props: ['shape'],
        data: function() {
          return { length: 0, styleObj: { animationName: 'dash' }, angle: 0 }
        },
        computed: {
          rotate: function() {
            return (
              'rect' === this.shape
                ? (this.angle = 45 + 90 * d(3))
                : (this.angle = 45 * d(7)),
              {
                transform: 'rotateZ('
                  .concat(this.angle, 'deg) rotateY(')
                  .concat(180 * d(1), 'deg)')
              }
            )
          }
        },
        mounted: function() {
          var t = this,
            e = this.shape || 'circle'
          ;(this.length = Math.ceil(l(e, this.$refs.path))),
            window.addEventListener(
              'resize',
              function() {
                t.length = Math.ceil(l(e, t.$refs.path))
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
      A = (g(117), g(3)),
      C = {
        name: 'Note',
        props: ['type'],
        components: {
          Shape: Object(A.a)(
            f,
            function() {
              var t = this,
                e = t.$createElement,
                g = t._self._c || e
              return g('div', { staticClass: 'shape' }, [
                'rect' === t.shape
                  ? g(
                      'svg',
                      {
                        style: t.rotate,
                        attrs: {
                          width: '100%',
                          height: '100%',
                          viewBox: '0 0 100% 100%',
                          version: '1.1'
                        }
                      },
                      [
                        g('rect', {
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
                  : g(
                      'svg',
                      {
                        style: t.rotate,
                        attrs: { width: '100%', height: '100%', version: '1.1' }
                      },
                      [
                        g('circle', {
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
          return { isAni: !1, isActive: !1, stopwatch: new r() }
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
              }, 250)
          },
          tapup: function() {
            var t = this,
              e = this.stopwatch.check()
            e < 120
              ? setTimeout(function() {
                  t.isActive = !1
                }, 120 - e)
              : (this.isActive = !1)
          }
        }
      },
      v =
        (g(118),
        Object(A.a)(
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
        ).exports)
    function D(t) {
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
              g,
              o
            ) {
              return e + e + g + g + o + o
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
    ;(D.prototype._GATF_cache = {}),
      (D.prototype._globAttFunc = function(t) {
        return (
          null == D.prototype._GATF_cache[t] &&
            (D.prototype._GATF_cache[t] = Math.pow(
              4 / (4 + Math.pow(t, 4)),
              4
            )),
          D.prototype._GATF_cache[t]
        )
      }),
      (D.prototype._xpos = function(t) {
        return this.width_2 + t * this.width_4
      }),
      (D.prototype._ypos = function(t, e) {
        var g = (this.MAX * this.amplitude) / e
        return (
          this.height_2 +
          this._globAttFunc(t) * g * Math.sin(this.frequency * t - this.phase)
        )
      }),
      (D.prototype._drawLine = function(t, e, g) {
        this.ctx.moveTo(0, 0),
          this.ctx.beginPath(),
          (this.ctx.strokeStyle = e),
          (this.ctx.lineWidth = g || 1)
        for (var o = -2; (o += 0.01) <= 2; ) {
          var s = this._ypos(o, t)
          Math.abs(o) >= 1.9 && (s = this.height_2),
            this.ctx.lineTo(this._xpos(o), s)
        }
        this.ctx.stroke()
      }),
      (D.prototype._clear = function() {
        ;(this.ctx.globalCompositeOperation = 'destination-out'),
          this.ctx.fillRect(0, 0, this.width, this.height),
          (this.ctx.globalCompositeOperation = 'source-over')
      }),
      (D.prototype._draw = function() {
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
      (D.prototype.start = function() {
        ;(this.phase = 0), (this.run = !0), this._draw()
      }),
      (D.prototype.stop = function() {
        ;(this.phase = 0), (this.run = !1)
      }),
      (D.prototype.setSpeed = function(t) {
        this.speed = t
      }),
      (D.prototype.setNoise = D.prototype.setAmplitude = function(t) {
        this.amplitude = Math.max(Math.min(t, 1), 0)
      })
    var F = D,
      G = {
        props: ['amplitude', 'speed', 'width', 'height'],
        data: function() {
          return { wave: null }
        },
        mounted: function() {
          this.wave = new F({
            container: document.getElementById('waveform'),
            width: this.width,
            height: 80,
            cover: !0,
            color: '#fefcb2',
            speed: this.speed || 0.02,
            amplitude: this.amplitude,
            frequency: 2
          })
        },
        watch: {
          width: function() {
            this.resize()
          }
        },
        methods: {
          resize: function() {
            var t = this.width
            ;(this.wave.height = 80),
              (this.wave.height_2 = 40),
              (this.wave.MAX = this.wave.height_2 - 4),
              (this.wave.width = t),
              (this.wave.width_2 = t / 2),
              (this.wave.width_4 = t / 4),
              (this.wave.canvas.height = 80),
              (this.wave.canvas.width = t),
              (this.wave.container.style.margin = '-40px auto')
          },
          start: function() {
            this.wave.start()
          },
          stop: function() {
            this.wave.stop()
          },
          setSpeed: function(t) {
            this.wave.setSpeed(t)
          },
          setAmplitude: function(t) {
            this.wave.setAmplitude(t)
          }
        }
      },
      b = Object(A.a)(
        G,
        function() {
          var t = this.$createElement
          return (this._self._c || t)('div', { attrs: { id: 'waveform' } })
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      w = g(17),
      y = g.n(w)
    document.querySelector('body').addEventListener(
      'click',
      function() {
        y.a.start()
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
        C7: 'a77.mp3',
        'C#2': 'b49.mp3',
        'D#2': 'b50.mp3',
        'F#2': 'b52.mp3',
        'G#2': 'b53.mp3',
        'A#2': 'b54.mp3',
        'C#3': 'b56.mp3',
        'D#3': 'b57.mp3',
        'F#3': 'b81.mp3',
        'G#3': 'b87.mp3',
        'A#3': 'b69.mp3',
        'C#4': 'b84.mp3',
        'D#4': 'b89.mp3',
        'F#4': 'b73.mp3',
        'G#4': 'b79.mp3',
        'A#4': 'b80.mp3',
        'C#5': 'b83.mp3',
        'D#5': 'b68.mp3',
        'F#5': 'b71.mp3',
        'G#5': 'b72.mp3',
        'A#5': 'b74.mp3',
        'C#6': 'b76.mp3',
        'D#6': 'b90.mp3',
        'F#6': 'b67.mp3',
        'G#6': 'b86.mp3',
        'A#6': 'b66.mp3'
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
            for (var g in this[this.list[e]])
              this[this.list[e]][g] = this[this.list[e]][g].replace(this.ext, t)
          return (
            (this.ext = t), console.log('sample extensions set to ' + this.ext)
          )
        },
        load: function(t) {
          var e, g, o
          if (
            (((e = t || {}).instruments = e.instruments || this.list),
            (e.baseUrl = e.baseUrl || this.baseUrl),
            (e.onload = e.onload || this.onload),
            e.ext &&
              (e.ext != this.ext && this.setExt(e.ext), (e.ext = this.ext)),
            (g = {}),
            Array.isArray(e.instruments))
          ) {
            for (o = 0; o <= e.instruments.length - 1; o++) {
              var s = this[e.instruments[o]]
              if (!0 === this.minify || !0 === e.minify) {
                var i = 1
                Object.keys(s).length >= 17 && (i = 2),
                  Object.keys(s).length >= 33 && (i = 4),
                  Object.keys(s).length >= 49 && (i = 6)
                var n = Object.keys(s).filter(function(t, e) {
                  return e % i != 0
                })
                n.forEach(function(t) {
                  delete s[t]
                })
              }
              g[e.instruments[o]] = new y.a.Sampler(s, {
                baseUrl: e.baseUrl + e.instruments[o] + '/',
                onload: e.onload
              })
            }
            return g
          }
          return (
            (s = this[e.instruments]),
            (!0 !== this.minify && !0 !== e.minify) ||
              ((i = 1),
              Object.keys(s).length >= 17 && (i = 2),
              Object.keys(s).length >= 33 && (i = 4),
              Object.keys(s).length >= 49 && (i = 6),
              (n = Object.keys(s).filter(function(t, e) {
                return e % i != 0
              })).forEach(function(t) {
                delete s[t]
              })),
            new y.a.Sampler(s, {
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
      x = g(40),
      B = g.n(x),
      k = {
        isDebug: (function(t) {
          var e = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
            g = window.location.search.substr(1).match(e)
          return null === g ? null : decodeURI(g[2])
        })('__debug'),
        version: '0.4.0'
      }
    B.a.config({ output: k.isDebug && 'default', color: '#fff' })
    var S = B.a,
      O = {
        total: 15,
        tone: 4,
        shapes: ['muti', 'rect', 'circle'],
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      }
    function j(t) {
      var e = t.total,
        g = t.tone,
        o = t.notes,
        i = t.shapes,
        n = i[0],
        p = i.slice(1),
        a = o.length,
        r = g - 1
      return Object(s.a)(Array(e)).map(function(t, e) {
        var g = e % a == 0 ? n : p[e % p.length],
          s = o[e % a]
        return s === o[0] && r++, { shape: g, note: s + r, index: e }
      })
    }
    var T = {
        name: 'Keyboard',
        props: ['stageSize'],
        components: { Note: v, Waveline: b },
        data: function() {
          return {
            hasTouchEvt: !1,
            amplitude: 0.5,
            waveSpeed: 0.01,
            rateTimer: 3e3,
            stopwatch: new r(),
            list: j(O)
          }
        },
        created: function() {
          console.table(j(O))
        },
        mounted: function() {
          ;(this.synth = _.load({ instruments: 'piano' }).toMaster()),
            this.initRateRecord(),
            this.$refs.waveline.start()
        },
        methods: {
          play: function(t) {
            this.synth.triggerAttackRelease(t, '1n')
          },
          tap: function(t, e) {
            var g = t.index,
              o = t.note,
              s = 'touchstart' === e.type
            if ((s && this.markTouchScreen(), !this.hasTouchEvt || s)) {
              this.getNoteIns(g).tapdown(),
                this.setWave(0.5 + (g + 1) / 5, this.heartRate()),
                this.play(o)
              var i = [s ? 'tap' : 'click', o]
              console.log.apply(console, i), S.$('event').apply(null, i)
            }
          },
          tapEnd: function(t, e) {
            var g = t.index,
              o = 'touchend' === e.type
            ;(this.hasTouchEvt && !o) || this.getNoteIns(g).tapup()
          },
          markTouchScreen: function() {
            this.hasTouchEvt = !0
          },
          getNoteIns: function(t) {
            return this.$refs['n_'.concat(t)][0]
          },
          initRateRecord: function() {
            var t = this
            this.stopwatch.start(),
              setInterval(function() {
                t.setWave(0.5, t.heartRate())
              }, this.rateTimer)
          },
          heartRate: function() {
            var t = this.stopwatch.tick().checkBeats('fps', 5)
            return t > 5 ? 5 : Number((0.8 * t + 1).toFixed(3))
          },
          setWave: function(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              g = this.$refs.waveline,
              o = this.waveSpeed * e
            g &&
              (g.setSpeed(o),
              console.log('wave beats', t, e),
              S.$('wave')('amp:', t, 'speed:', e))
          }
        }
      },
      M =
        (g(119),
        Object(A.a)(
          T,
          function() {
            var t = this,
              e = t.$createElement,
              g = t._self._c || e
            return g(
              'div',
              { staticClass: 'main' },
              [
                g(
                  'ul',
                  { staticClass: 'keyboard' },
                  t._l(t.list, function(e) {
                    return g(
                      'li',
                      {
                        on: {
                          mousedown: function(g) {
                            return t.tap(e, g)
                          },
                          mouseup: function(g) {
                            return t.tapEnd(e, g)
                          },
                          touchstart: function(g) {
                            return t.tap(e, g)
                          },
                          touchend: function(g) {
                            return t.tapEnd(e, g)
                          }
                        }
                      },
                      [
                        g('Note', {
                          ref: 'n_' + e.index,
                          refInFor: !0,
                          attrs: { type: e.shape }
                        })
                      ],
                      1
                    )
                  }),
                  0
                ),
                g('Waveline', {
                  ref: 'waveline',
                  attrs: {
                    amplitude: t.amplitude,
                    speed: t.waveSpeed,
                    width: t.stageSize.width
                  }
                })
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      I = {
        data: function() {
          return { files: [] }
        },
        methods: {
          getImg: function() {
            var t = this,
              e = this.$refs.fileInput.files[0],
              g = new FileReader()
            e &&
              ((g.onload = function(e) {
                var g = e.target.result
                t.$emit('get-bg', g)
              }),
              g.readAsDataURL(e))
          }
        }
      },
      $ =
        (g(120),
        Object(A.a)(
          I,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e('form', { staticClass: 'input-form' }, [
              e('label', { staticClass: 'bg-btn' }, [
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
                  on: { change: this.getImg }
                })
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
    function R() {
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
              S.$('screen')('force,', 'height', e.height, 'width', e.width),
              e
            )
          })(e)
        : (function(t) {
            var e = [t.height, t.width].sort(function(t, e) {
                return t - e
              }),
              g = { height: e[0], width: e[1] }
            return (
              console.log(
                'auto orientation:',
                'height',
                g.height,
                'width',
                g.width
              ),
              S.$('screen')('auto,', 'height', g.height, 'width', g.width),
              g
            )
          })(e)
    }
    var z = g(65),
      U = g.n(z),
      L = {
        name: 'app',
        components: { Keyboard: M, SetBg: $ },
        data: function() {
          return { stageSize: R(), version: k.version, bgUrl: U.a }
        },
        computed: {
          frameStyle: function() {
            var t = this.stageSize,
              e = t.width,
              g = t.height
            return {
              backgroundImage: 'url('.concat(this.bgUrl, ')'),
              height: g + 'px',
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
          window.addEventListener(
            'resize',
            function() {
              t.stageSize = R()
            },
            !1
          )
        },
        methods: {
          changeBg: function(t) {
            ;(this.bgUrl = t), localStorage.setItem('bgUrl', t)
          }
        }
      },
      N = Object(A.a)(
        L,
        function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            'div',
            { style: this.frameStyle, attrs: { id: 'app' } },
            [
              e('Keyboard', { attrs: { stageSize: this.stageSize } }),
              e('SetBg', {
                staticClass: 'set-bg',
                on: { 'get-bg': this.changeBg }
              }),
              e('span', { staticClass: 'version' }, [
                this._v('v' + this._s(this.version))
              ]),
              e('div')
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
    ;(o.a.config.productionTip = !1),
      new o.a({
        render: function(t) {
          return t(N)
        }
      }).$mount('#app')
  },
  25: function(t, e, g) {},
  26: function(t, e, g) {},
  27: function(t, e, g) {},
  28: function(t, e, g) {},
  65: function(t, e, g) {
    t.exports = g.p + 'static/img/bg.d24257d1.jpg'
  },
  67: function(t, e, g) {
    g(68), (t.exports = g(121))
  }
})
