!(function(t) {
  function g(g) {
    for (
      var e, p, n = g[0], m = g[1], a = g[2], h = 0, c = [];
      h < n.length;
      h++
    )
      (p = n[h]), i[p] && c.push(i[p][0]), (i[p] = 0)
    for (e in m) Object.prototype.hasOwnProperty.call(m, e) && (t[e] = m[e])
    for (r && r(g); c.length; ) c.shift()()
    return s.push.apply(s, a || []), o()
  }
  function o() {
    for (var t, g = 0; g < s.length; g++) {
      for (var o = s[g], e = !0, n = 1; n < o.length; n++) {
        var m = o[n]
        0 !== i[m] && (e = !1)
      }
      e && (s.splice(g--, 1), (t = p((p.s = o[0]))))
    }
    return t
  }
  var e = {},
    i = { 0: 0 },
    s = []
  function p(g) {
    if (e[g]) return e[g].exports
    var o = (e[g] = { i: g, l: !1, exports: {} })
    return t[g].call(o.exports, o, o.exports, p), (o.l = !0), o.exports
  }
  ;(p.m = t),
    (p.c = e),
    (p.d = function(t, g, o) {
      p.o(t, g) || Object.defineProperty(t, g, { enumerable: !0, get: o })
    }),
    (p.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (p.t = function(t, g) {
      if ((1 & g && (t = p(t)), 8 & g)) return t
      if (4 & g && 'object' === typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (p.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & g && 'string' != typeof t)
      )
        for (var e in t)
          p.d(
            o,
            e,
            function(g) {
              return t[g]
            }.bind(null, e)
          )
      return o
    }),
    (p.n = function(t) {
      var g =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return p.d(g, 'a', g), g
    }),
    (p.o = function(t, g) {
      return Object.prototype.hasOwnProperty.call(t, g)
    }),
    (p.p = './')
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    m = n.push.bind(n)
  ;(n.push = g), (n = n.slice())
  for (var a = 0; a < n.length; a++) g(n[a])
  var r = m
  s.push([67, 1]), o()
})({
  116: function(t, g, o) {
    'use strict'
    var e = o(25)
    o.n(e).a
  },
  117: function(t, g, o) {
    'use strict'
    var e = o(26)
    o.n(e).a
  },
  118: function(t, g, o) {
    'use strict'
    var e = o(27)
    o.n(e).a
  },
  119: function(t, g, o) {
    'use strict'
    var e = o(28)
    o.n(e).a
  },
  120: function(t, g, o) {
    'use strict'
    o.r(g)
    var e = o(41),
      i = o(66),
      s = o(63),
      p = o(64)
    function n(t, g) {
      var o = t.reduce(function(t, g) {
        return t + g
      }, 0)
      if (0 === o) return 0
      var e = o / t.length
      return g ? Number(e.toFixed(g)) : e
    }
    function m() {
      return (performance || Date).now()
    }
    var a = (function() {
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
          Object(p.a)(t, [
            {
              key: 'start',
              value: function() {
                return (this.prevTime = this.beginTime = m()), this.beginTime
              }
            },
            {
              key: 'check',
              value: function() {
                return m() - this.beginTime
              }
            },
            {
              key: '_record',
              value: function(t, g) {
                var o = this._history[t]
                o.unshift(Math.round(g)),
                  (o.length = Math.min(o.length, this.maxRecords))
              }
            },
            {
              key: 'tick',
              value: function() {
                var t = m()
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
                var g = (1e3 * this.frames) / (t - this.prevTime)
                return this._clearMark(t), g
              }
            },
            {
              key: 'checkBeats',
              value: function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 'ms',
                  g =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  o = arguments.length > 2 ? arguments[2] : void 0,
                  e = this._history[t],
                  i = e.slice(0, Math.min(e.length, g))
                return n(i, o)
              }
            }
          ]),
          t
        )
      })(),
      r = {
        name: 'Item',
        props: ['type'],
        data: function() {
          return { isAni: !1, isActive: !1, stopwatch: new a() }
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
              g = this.stopwatch.check()
            g < 120
              ? setTimeout(function() {
                  t.isActive = !1
                }, 120 - g)
              : (this.isActive = !1)
          }
        }
      },
      h = (o(116), o(4)),
      c = Object(h.a)(
        r,
        function() {
          var t = this.$createElement,
            g = this._self._c || t
          return g('div', { staticClass: 'note', class: this.activeClass }, [
            g(
              'div',
              { staticClass: 'note_content' },
              [
                g('transition', { attrs: { appear: '', name: 'fade' } }, [
                  g('div', { staticClass: 'note_shape' }, [
                    'muti' === this.type || 'cicle' === this.type
                      ? g('div', { staticClass: 'shape cicle' })
                      : this._e(),
                    'muti' === this.type || 'rect' === this.type
                      ? g('div', { staticClass: 'shape rect' })
                      : this._e()
                  ])
                ])
              ],
              1
            )
          ])
        },
        [],
        !1,
        null,
        null,
        null
      ).exports
    function u(t) {
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
              g,
              o,
              e
            ) {
              return g + g + o + o + e + e
            })
            var g = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
            return g
              ? parseInt(g[1], 16).toString() +
                  ',' +
                  parseInt(g[2], 16).toString() +
                  ',' +
                  parseInt(g[3], 16).toString()
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
    ;(u.prototype._GATF_cache = {}),
      (u.prototype._globAttFunc = function(t) {
        return (
          null == u.prototype._GATF_cache[t] &&
            (u.prototype._GATF_cache[t] = Math.pow(
              4 / (4 + Math.pow(t, 4)),
              4
            )),
          u.prototype._GATF_cache[t]
        )
      }),
      (u.prototype._xpos = function(t) {
        return this.width_2 + t * this.width_4
      }),
      (u.prototype._ypos = function(t, g) {
        var o = (this.MAX * this.amplitude) / g
        return (
          this.height_2 +
          this._globAttFunc(t) * o * Math.sin(this.frequency * t - this.phase)
        )
      }),
      (u.prototype._drawLine = function(t, g, o) {
        this.ctx.moveTo(0, 0),
          this.ctx.beginPath(),
          (this.ctx.strokeStyle = g),
          (this.ctx.lineWidth = o || 1)
        for (var e = -2; (e += 0.01) <= 2; ) {
          var i = this._ypos(e, t)
          Math.abs(e) >= 1.9 && (i = this.height_2),
            this.ctx.lineTo(this._xpos(e), i)
        }
        this.ctx.stroke()
      }),
      (u.prototype._clear = function() {
        ;(this.ctx.globalCompositeOperation = 'destination-out'),
          this.ctx.fillRect(0, 0, this.width, this.height),
          (this.ctx.globalCompositeOperation = 'source-over')
      }),
      (u.prototype._draw = function() {
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
      (u.prototype.start = function() {
        ;(this.phase = 0), (this.run = !0), this._draw()
      }),
      (u.prototype.stop = function() {
        ;(this.phase = 0), (this.run = !1)
      }),
      (u.prototype.setSpeed = function(t) {
        this.speed = t
      }),
      (u.prototype.setNoise = u.prototype.setAmplitude = function(t) {
        this.amplitude = Math.max(Math.min(t, 1), 0)
      })
    var l = u,
      d = {
        props: ['amplitude', 'speed', 'width', 'height'],
        data: function() {
          return { wave: null }
        },
        mounted: function() {
          this.wave = new l({
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
      f = Object(h.a)(
        d,
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
      A = o(17),
      C = o.n(A)
    document.querySelector('body').addEventListener(
      'click',
      function() {
        C.a.start()
      },
      !1
    )
    var v = {
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
      D = {
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
          var g
          for (g = 0; g <= this.list.length - 1; g++)
            for (var o in this[this.list[g]])
              this[this.list[g]][o] = this[this.list[g]][o].replace(this.ext, t)
          return (
            (this.ext = t), console.log('sample extensions set to ' + this.ext)
          )
        },
        load: function(t) {
          var g, o, e
          if (
            (((g = t || {}).instruments = g.instruments || this.list),
            (g.baseUrl = g.baseUrl || this.baseUrl),
            (g.onload = g.onload || this.onload),
            g.ext &&
              (g.ext != this.ext && this.setExt(g.ext), (g.ext = this.ext)),
            (o = {}),
            Array.isArray(g.instruments))
          ) {
            for (e = 0; e <= g.instruments.length - 1; e++) {
              var i = this[g.instruments[e]]
              if (!0 === this.minify || !0 === g.minify) {
                var s = 1
                Object.keys(i).length >= 17 && (s = 2),
                  Object.keys(i).length >= 33 && (s = 4),
                  Object.keys(i).length >= 49 && (s = 6)
                var p = Object.keys(i).filter(function(t, g) {
                  return g % s != 0
                })
                p.forEach(function(t) {
                  delete i[t]
                })
              }
              o[g.instruments[e]] = new C.a.Sampler(i, {
                baseUrl: g.baseUrl + g.instruments[e] + '/',
                onload: g.onload
              })
            }
            return o
          }
          return (
            (i = this[g.instruments]),
            (!0 !== this.minify && !0 !== g.minify) ||
              ((s = 1),
              Object.keys(i).length >= 17 && (s = 2),
              Object.keys(i).length >= 33 && (s = 4),
              Object.keys(i).length >= 49 && (s = 6),
              (p = Object.keys(i).filter(function(t, g) {
                return g % s != 0
              })).forEach(function(t) {
                delete i[t]
              })),
            new C.a.Sampler(i, {
              baseUrl: g.baseUrl + g.instruments + '/',
              onload: g.onload
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
          A2: v.A2,
          A3: v.A3,
          A4: v.A4,
          A5: v.A5,
          A6: v.A6,
          'A#3': v['A#3'],
          'A#4': v['A#4'],
          'A#5': v['A#5'],
          'A#6': v['A#6'],
          B2: v.B2,
          B3: v.B3,
          B4: v.B4,
          B5: v.B5,
          B6: v.B6,
          C2: v.C2,
          C3: v.C3,
          C4: v.C4,
          C5: v.C5,
          C6: v.C6,
          C7: v.C7,
          'C#2': v['C#2'],
          'C#3': v['C#3'],
          'C#4': v['C#4'],
          'C#5': v['C#5'],
          'C#6': v['C#6'],
          D0: v.D0,
          D1: v.D1,
          D2: v.D2,
          D3: v.D3,
          D4: v.D4,
          D5: v.D5,
          D6: v.D6,
          'D#2': v['D#2'],
          'D#3': v['D#3'],
          'D#4': v['D#4'],
          'D#5': v['D#5'],
          'D#6': v['D#6'],
          E2: v.E2,
          E3: v.E3,
          E4: v.E4,
          E5: v.E5,
          E6: v.E6,
          F2: v.F2,
          F3: v.F3,
          F4: v.F4,
          F5: v.F5,
          F6: v.F6,
          'F#2': v['F#2'],
          'F#3': v['F#3'],
          'F#4': v['F#4'],
          'F#5': v['F#5'],
          'F#6': v['F#6'],
          G2: v.G2,
          G3: v.G3,
          G4: v.G4,
          G5: v.G5,
          G6: v.G6,
          'G#2': v['G#2'],
          'G#3': v['G#3'],
          'G#4': v['G#4'],
          'G#5': v['G#5'],
          'G#6': v['G#6']
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
      F = o(40),
      G = o.n(F)
    var b = {
      isDebug: (function(t) {
        var g = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
          o = window.location.search.substr(1).match(g)
        return null === o ? null : decodeURI(o[2])
      })('__debug'),
      version: '0.3.0'
    }
    G.a.config({ output: b.isDebug && 'default', color: '#fff' })
    var w = G.a,
      E = {
        total: 15,
        tone: 4,
        shapes: ['muti', 'rect', 'cicle'],
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      }
    function y(t) {
      var g = t.total,
        o = t.tone,
        e = t.notes,
        s = t.shapes,
        p = s[0],
        n = s.slice(1),
        m = e.length,
        a = o - 1
      return Object(i.a)(Array(g)).map(function(t, g) {
        var o = g % m == 0 ? p : n[g % n.length],
          i = e[g % m]
        return i === e[0] && a++, { shape: o, note: i + a, index: g }
      })
    }
    var _ = {
        name: 'Keyboard',
        props: ['stageWidth'],
        components: { Item: c, Waveline: f },
        data: function() {
          return {
            hasTouchEvt: !1,
            amplitude: 0.5,
            waveSpeed: 0.01,
            rateTimer: 3500,
            stopwatch: new a(),
            list: y(E)
          }
        },
        created: function() {
          console.table(y(E))
        },
        mounted: function() {
          ;(this.synth = D.load({ instruments: 'piano' }).toMaster()),
            this.initRateRecord(),
            this.$refs.waveline.start()
        },
        methods: {
          play: function(t) {
            this.synth.triggerAttackRelease(t, '1n')
          },
          tap: function(t, g) {
            var o = t.index,
              e = t.note,
              i = 'touchstart' === g.type
            if ((i && this.markTouchScreen(), !this.hasTouchEvt || i)) {
              this.getNoteIns(o).tapdown(),
                this.setWave(0.5 + (o + 1) / 5, this.heartRate()),
                this.play(e)
              var s = [
                i ? 'tap' : 'click',
                '{'.concat(g.target.className, '}'),
                e
              ]
              console.log.apply(console, s), w.$('event').apply(null, s)
            }
          },
          tapEnd: function(t, g) {
            var o = t.index,
              e = 'touchend' === g.type
            ;(this.hasTouchEvt && !e) || this.getNoteIns(o).tapup()
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
            var g =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              o = this.$refs.waveline,
              e = this.waveSpeed * g
            o &&
              (o.setSpeed(e),
              console.log('wave beats', t, g),
              w.$('wave')('amp:', t, 'speed:', g))
          }
        }
      },
      x =
        (o(117),
        Object(h.a)(
          _,
          function() {
            var t = this,
              g = t.$createElement,
              o = t._self._c || g
            return o(
              'div',
              { staticClass: 'main' },
              [
                o(
                  'ul',
                  { staticClass: 'keyboard' },
                  t._l(t.list, function(g) {
                    return o(
                      'li',
                      {
                        on: {
                          mousedown: function(o) {
                            return t.tap(g, o)
                          },
                          mouseup: function(o) {
                            return t.tapEnd(g, o)
                          },
                          touchstart: function(o) {
                            return t.tap(g, o)
                          },
                          touchend: function(o) {
                            return t.tapEnd(g, o)
                          }
                        }
                      },
                      [
                        o('Item', {
                          ref: 'n_' + g.index,
                          refInFor: !0,
                          attrs: { type: g.shape }
                        })
                      ],
                      1
                    )
                  }),
                  0
                ),
                o('Waveline', {
                  ref: 'waveline',
                  attrs: {
                    amplitude: t.amplitude,
                    speed: t.waveSpeed,
                    width: t.stageWidth
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
      B = {
        data: function() {
          return { files: [] }
        },
        methods: {
          getImg: function() {
            var t = this,
              g = this.$refs.fileInput.files[0],
              o = new FileReader()
            g &&
              ((o.onload = function(g) {
                var o = g.target.result
                t.$emit('get-bg', o)
              }),
              o.readAsDataURL(g))
          }
        }
      },
      k =
        (o(118),
        Object(h.a)(
          B,
          function() {
            var t = this.$createElement,
              g = this._self._c || t
            return g('form', { staticClass: 'input-form' }, [
              g('label', { staticClass: 'bg-btn' }, [
                g(
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
                    g('path', {
                      attrs: {
                        d:
                          'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
                        'p-id': '7970',
                        fill: '#fefcb2'
                      }
                    }),
                    g('path', {
                      attrs: {
                        d:
                          'M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
                        'p-id': '7971',
                        fill: '#fefcb2'
                      }
                    })
                  ]
                ),
                g('input', {
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
    function T() {
      var t =
          screen.msOrientation ||
          screen.mozOrientation ||
          (screen.orientation || {}).type,
        g = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      return 'portrait-secondary' === t || 'portrait-primary' === t
        ? (function(t) {
            var g = { height: t.width, width: t.height }
            return (
              console.log(
                'force landscape:',
                'height',
                g.height,
                'width',
                g.width
              ),
              w.$('screen')('force,', 'height', g.height, 'width', g.width),
              g
            )
          })(g)
        : (function(t) {
            var g = [t.height, t.width].sort(function(t, g) {
                return t - g
              }),
              o = { height: g[0], width: g[1] }
            return (
              console.log(
                'auto orientation:',
                'height',
                o.height,
                'width',
                o.width
              ),
              w.$('screen')('auto,', 'height', o.height, 'width', o.width),
              o
            )
          })(g)
    }
    var O = o(65),
      j = o.n(O),
      M = {
        name: 'app',
        components: { Keyboard: x, SetBg: k },
        data: function() {
          return { stageWidth: T().width, version: b.version, bgUrl: j.a }
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
              t.stageWidth = T().width
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
      S =
        (o(119),
        Object(h.a)(
          M,
          function() {
            var t = this.$createElement,
              g = this._self._c || t
            return g(
              'div',
              {
                style: { backgroundImage: 'url(' + this.bgUrl + ')' },
                attrs: { id: 'app' }
              },
              [
                g('Keyboard', { attrs: { stageWidth: this.stageWidth } }),
                g('SetBg', {
                  staticClass: 'set-bg',
                  on: { 'get-bg': this.changeBg }
                }),
                g('span', { staticClass: 'version' }, [
                  this._v('v' + this._s(this.version))
                ]),
                g('div')
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
    ;(e.a.config.productionTip = !1),
      new e.a({
        render: function(t) {
          return t(S)
        }
      }).$mount('#app')
  },
  25: function(t, g, o) {},
  26: function(t, g, o) {},
  27: function(t, g, o) {},
  28: function(t, g, o) {},
  65: function(t, g, o) {
    t.exports = o.p + 'static/img/bg.d24257d1.jpg'
  },
  67: function(t, g, o) {
    o(68), (t.exports = o(120))
  }
})
