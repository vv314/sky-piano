;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function(t, e, i) {
      'use strict'
      function n(t, e, i, n, o, r, s, a) {
        var u,
          l = 'function' === typeof t ? t.options : t
        if (
          (e && ((l.render = e), (l.staticRenderFns = i), (l._compiled = !0)),
          n && (l.functional = !0),
          r && (l._scopeId = 'data-v-' + r),
          s
            ? ((u = function(t) {
                ;(t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' === typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s)
              }),
              (l._ssrRegister = u))
            : o &&
              (u = a
                ? function() {
                    o.call(this, this.$root.$options.shadowRoot)
                  }
                : o),
          u)
        )
          if (l.functional) {
            l._injectStyles = u
            var c = l.render
            l.render = function(t, e) {
              return u.call(e), c(t, e)
            }
          } else {
            var h = l.beforeCreate
            l.beforeCreate = h ? [].concat(h, u) : [u]
          }
        return { exports: t, options: l }
      }
      i.d(e, 'a', function() {
        return n
      })
    },
    function(t, e, i) {
      ;(function(e) {
        var i = 'object',
          n = function(t) {
            return t && t.Math == Math && t
          }
        t.exports =
          n(typeof globalThis == i && globalThis) ||
          n(typeof window == i && window) ||
          n(typeof self == i && self) ||
          n(typeof e == i && e) ||
          Function('return this')()
      }.call(this, i(33)))
    },
    function(t, e, i) {
      var n = i(1),
        o = i(14),
        r = i(39),
        s = i(56),
        a = n.Symbol,
        u = o('wks')
      t.exports = function(t) {
        return u[t] || (u[t] = (s && a[t]) || (s ? a : r)('Symbol.' + t))
      }
    },
    function(t, e, i) {
      var n = i(53),
        o = i(4),
        r = i(59),
        s = i(7).f
      t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = {})
        o(e, t) || s(e, t, { value: r.f(t) })
      }
    },
    function(t, e) {
      var i = {}.hasOwnProperty
      t.exports = function(t, e) {
        return i.call(t, e)
      }
    },
    function(t, e) {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (e) {
          return !0
        }
      }
    },
    function(t, e) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t
      }
    },
    function(t, e, i) {
      var n = i(8),
        o = i(48),
        r = i(10),
        s = i(18),
        a = Object.defineProperty
      e.f = n
        ? a
        : function(t, e, i) {
            if ((r(t), (e = s(e, !0)), r(i), o))
              try {
                return a(t, e, i)
              } catch (n) {}
            if ('get' in i || 'set' in i)
              throw TypeError('Accessors not supported')
            return 'value' in i && (t[e] = i.value), t
          }
    },
    function(t, e, i) {
      var n = i(5)
      t.exports = !n(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      })
    },
    function(t, e, i) {
      var n = i(8),
        o = i(7),
        r = i(12)
      t.exports = n
        ? function(t, e, i) {
            return o.f(t, e, r(1, i))
          }
        : function(t, e, i) {
            return (t[e] = i), t
          }
    },
    function(t, e, i) {
      var n = i(6)
      t.exports = function(t) {
        if (!n(t)) throw TypeError(String(t) + ' is not an object')
        return t
      }
    },
    function(t, e, i) {
      var n = i(1),
        o = i(34).f,
        r = i(9),
        s = i(19),
        a = i(37),
        u = i(51),
        l = i(77)
      t.exports = function(t, e) {
        var i,
          c,
          h,
          p,
          f,
          d = t.target,
          y = t.global,
          _ = t.stat
        if ((i = y ? n : _ ? n[d] || a(d, {}) : (n[d] || {}).prototype))
          for (c in e) {
            if (
              ((p = e[c]),
              (h = t.noTargetGet ? (f = o(i, c)) && f.value : i[c]),
              !l(y ? c : d + (_ ? '.' : '#') + c, t.forced) && void 0 !== h)
            ) {
              if (typeof p === typeof h) continue
              u(p, h)
            }
            ;(t.sham || (h && h.sham)) && r(p, 'sham', !0), s(i, c, p, t)
          }
      }
    },
    function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    function(t, e, i) {
      var n = i(47),
        o = i(36)
      t.exports = function(t) {
        return n(o(t))
      }
    },
    function(t, e, i) {
      var n = i(1),
        o = i(37),
        r = i(20),
        s = n['__core-js_shared__'] || o('__core-js_shared__', {})
      ;(t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
      })('versions', []).push({
        version: '3.1.3',
        mode: r ? 'pure' : 'global',
        copyright: '\xa9 2019 Denis Pushkarev (zloirock.ru)'
      })
    },
    function(t, e, i) {
      var n = i(36)
      t.exports = function(t) {
        return Object(n(t))
      }
    },
    function(t, e, i) {
      var n = i(7).f,
        o = i(4),
        r = i(2)('toStringTag')
      t.exports = function(t, e, i) {
        t &&
          !o((t = i ? t : t.prototype), r) &&
          n(t, r, { configurable: !0, value: e })
      }
    },
    function(t, e, i) {
      'undefined' != typeof self && self,
        (t.exports = (function(t) {
          var e = {}
          function i(n) {
            if (e[n]) return e[n].exports
            var o = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports
          }
          return (
            (i.m = t),
            (i.c = e),
            (i.d = function(t, e, n) {
              i.o(t, e) ||
                Object.defineProperty(t, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: n
                })
            }),
            (i.r = function(t) {
              Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (i.n = function(t) {
              var e =
                t && t.__esModule
                  ? function() {
                      return t.default
                    }
                  : function() {
                      return t
                    }
              return i.d(e, 'a', e), e
            }),
            (i.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (i.p = ''),
            i((i.s = 155))
          )
        })([
          function(t, e, i) {
            ;(function(n) {
              var o, r
              ;(o = [i(153)]),
                void 0 ===
                  (r = function(t) {
                    'use strict'
                    var e = function t() {
                      if (!(this instanceof t))
                        throw new Error(
                          "constructor needs to be called with the 'new' keyword"
                        )
                    }
                    return (
                      (e.prototype.toString = function() {
                        for (var t in e) {
                          var i = t[0].match(/^[A-Z]$/),
                            n = e[t] === this.constructor
                          if (e.isFunction(e[t]) && i && n) return t
                        }
                        return 'Tone'
                      }),
                      (e.prototype.dispose = function() {
                        return this
                      }),
                      (e.prototype.set = function(t, i, n) {
                        if (e.isObject(t)) n = i
                        else if (e.isString(t)) {
                          var o = {}
                          ;(o[t] = i), (t = o)
                        }
                        t: for (var r in t) {
                          i = t[r]
                          var s = this
                          if (-1 !== r.indexOf('.')) {
                            for (
                              var a = r.split('.'), u = 0;
                              u < a.length - 1;
                              u++
                            )
                              if ((s = s[a[u]]) instanceof e) {
                                a.splice(0, u + 1)
                                var l = a.join('.')
                                s.set(l, i)
                                continue t
                              }
                            r = a[a.length - 1]
                          }
                          var c = s[r]
                          e.isUndef(c) ||
                            ((e.Signal && c instanceof e.Signal) ||
                            (e.Param && c instanceof e.Param)
                              ? c.value !== i &&
                                (e.isUndef(n) ? (c.value = i) : c.rampTo(i, n))
                              : c instanceof AudioParam
                              ? c.value !== i && (c.value = i)
                              : e.TimeBase && c instanceof e.TimeBase
                              ? (s[r] = i)
                              : c instanceof e
                              ? c.set(i)
                              : c !== i && (s[r] = i))
                        }
                        return this
                      }),
                      (e.prototype.get = function(t) {
                        e.isUndef(t)
                          ? (t = this._collectDefaults(this.constructor))
                          : e.isString(t) && (t = [t])
                        for (var i = {}, n = 0; n < t.length; n++) {
                          var o = t[n],
                            r = this,
                            s = i
                          if (-1 !== o.indexOf('.')) {
                            for (
                              var a = o.split('.'), u = 0;
                              u < a.length - 1;
                              u++
                            ) {
                              var l = a[u]
                              ;(s[l] = s[l] || {}), (s = s[l]), (r = r[l])
                            }
                            o = a[a.length - 1]
                          }
                          var c = r[o]
                          e.isObject(t[o])
                            ? (s[o] = c.get())
                            : e.Signal && c instanceof e.Signal
                            ? (s[o] = c.value)
                            : e.Param && c instanceof e.Param
                            ? (s[o] = c.value)
                            : c instanceof AudioParam
                            ? (s[o] = c.value)
                            : c instanceof e
                            ? (s[o] = c.get())
                            : !e.isFunction(c) && e.isDefined(c) && (s[o] = c)
                        }
                        return i
                      }),
                      (e.prototype._collectDefaults = function(t) {
                        var i = []
                        if (
                          (e.isDefined(t.defaults) &&
                            (i = Object.keys(t.defaults)),
                          e.isDefined(t._super))
                        )
                          for (
                            var n = this._collectDefaults(t._super), o = 0;
                            o < n.length;
                            o++
                          )
                            -1 === i.indexOf(n[o]) && i.push(n[o])
                        return i
                      }),
                      (e.defaults = function(t, i, n) {
                        var o = {}
                        if (1 === t.length && e.isObject(t[0])) o = t[0]
                        else for (var r = 0; r < i.length; r++) o[i[r]] = t[r]
                        return e.isDefined(n.defaults)
                          ? e.defaultArg(o, n.defaults)
                          : e.isObject(n)
                          ? e.defaultArg(o, n)
                          : o
                      }),
                      (e.defaultArg = function(t, i) {
                        if (e.isObject(t) && e.isObject(i)) {
                          var n = {}
                          for (var o in t) n[o] = e.defaultArg(i[o], t[o])
                          for (var r in i) n[r] = e.defaultArg(t[r], i[r])
                          return n
                        }
                        return e.isUndef(t) ? i : t
                      }),
                      (e.prototype.log = function() {
                        if (
                          this.debug ||
                          this.toString() === e.global.TONE_DEBUG_CLASS
                        ) {
                          var t = Array.from(arguments)
                          t.unshift(this.toString() + ':'),
                            console.log.apply(void 0, t)
                        }
                      }),
                      (e.prototype.assert = function(t, e) {
                        if (!t) throw new Error(e)
                      }),
                      (e.connectSeries = function() {
                        for (
                          var t = arguments[0], i = 1;
                          i < arguments.length;
                          i++
                        ) {
                          var n = arguments[i]
                          t.connect(n), (t = n)
                        }
                        return e
                      }),
                      (e.isUndef = function(t) {
                        return void 0 === t
                      }),
                      (e.isDefined = function(t) {
                        return !e.isUndef(t)
                      }),
                      (e.isFunction = function(t) {
                        return 'function' == typeof t
                      }),
                      (e.isNumber = function(t) {
                        return 'number' == typeof t
                      }),
                      (e.isObject = function(t) {
                        return (
                          '[object Object]' ===
                            Object.prototype.toString.call(t) &&
                          t.constructor === Object
                        )
                      }),
                      (e.isBoolean = function(t) {
                        return 'boolean' == typeof t
                      }),
                      (e.isArray = function(t) {
                        return Array.isArray(t)
                      }),
                      (e.isString = function(t) {
                        return 'string' == typeof t
                      }),
                      (e.isNote = function(t) {
                        return (
                          e.isString(t) &&
                          /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
                        )
                      }),
                      (e.noOp = function() {}),
                      (e.prototype._readOnly = function(t) {
                        if (Array.isArray(t))
                          for (var e = 0; e < t.length; e++)
                            this._readOnly(t[e])
                        else
                          Object.defineProperty(this, t, {
                            writable: !1,
                            enumerable: !0
                          })
                      }),
                      (e.prototype._writable = function(t) {
                        if (Array.isArray(t))
                          for (var e = 0; e < t.length; e++)
                            this._writable(t[e])
                        else Object.defineProperty(this, t, { writable: !0 })
                      }),
                      (e.State = {
                        Started: 'started',
                        Stopped: 'stopped',
                        Paused: 'paused'
                      }),
                      (e.global = e.isUndef(n) ? window : n),
                      (e.equalPowerScale = function(t) {
                        var e = 0.5 * Math.PI
                        return Math.sin(t * e)
                      }),
                      (e.dbToGain = function(t) {
                        return Math.pow(10, t / 20)
                      }),
                      (e.gainToDb = function(t) {
                        return (Math.log(t) / Math.LN10) * 20
                      }),
                      (e.intervalToFrequencyRatio = function(t) {
                        return Math.pow(2, t / 12)
                      }),
                      (e.prototype.now = function() {
                        return e.context.now()
                      }),
                      (e.now = function() {
                        return e.context.now()
                      }),
                      (e.prototype.immediate = function() {
                        return e.context.currentTime
                      }),
                      (e.immediate = function() {
                        return e.context.currentTime
                      }),
                      (e.extend = function(t, i) {
                        function n() {}
                        e.isUndef(i) && (i = e),
                          (n.prototype = i.prototype),
                          (t.prototype = new n()),
                          (t.prototype.constructor = t),
                          (t._super = i)
                      }),
                      (e._audioContext = null),
                      (e.start = function() {
                        return e.context.resume()
                      }),
                      Object.defineProperty(e, 'context', {
                        get: function() {
                          return e._audioContext
                        },
                        set: function(t) {
                          ;(e._audioContext = t.isContext
                            ? t
                            : new e.Context(t)),
                            e.Context.emit('init', e._audioContext)
                        }
                      }),
                      Object.defineProperty(e.prototype, 'context', {
                        get: function() {
                          return e.context
                        }
                      }),
                      (e.setContext = function(t) {
                        e.context = t
                      }),
                      Object.defineProperty(e.prototype, 'blockTime', {
                        get: function() {
                          return 128 / this.context.sampleRate
                        }
                      }),
                      Object.defineProperty(e.prototype, 'sampleTime', {
                        get: function() {
                          return 1 / this.context.sampleRate
                        }
                      }),
                      Object.defineProperty(e, 'supported', {
                        get: function() {
                          var t =
                              e.global.hasOwnProperty('AudioContext') ||
                              e.global.hasOwnProperty('webkitAudioContext'),
                            i = e.global.hasOwnProperty('Promise')
                          return t && i
                        }
                      }),
                      Object.defineProperty(e, 'initialized', {
                        get: function() {
                          return Boolean(e.context)
                        }
                      }),
                      (e.getContext = function(t) {
                        return (
                          e.initialized
                            ? t(e.context)
                            : e.Context.on('init', function i() {
                                t(e.context), e.Context.off('init', i)
                              }),
                          e
                        )
                      }),
                      (e.version = t),
                      e
                    )
                  }.apply(e, o)) || (t.exports = r)
            }.call(this, i(154)))
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(4), i(14), i(97), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Signal = function() {
                      var e = t.defaults(
                        arguments,
                        ['value', 'units'],
                        t.Signal
                      )
                      t.Param.call(this, e),
                        (this._constantSource = this.context.createConstantSource()),
                        this._constantSource.start(0),
                        (this._param = this._constantSource.offset),
                        (this.value = e.value),
                        (this.output = this._constantSource),
                        (this.input = this._param = this.output.offset)
                    }),
                    t.extend(t.Signal, t.Param),
                    (t.Signal.defaults = {
                      value: 0,
                      units: t.Type.Default,
                      convert: !0
                    }),
                    (t.Signal.prototype.connect =
                      t.SignalBase.prototype.connect),
                    (t.Signal.prototype.disconnect =
                      t.SignalBase.prototype.disconnect),
                    (t.Signal.prototype.getValueAtTime = function(e) {
                      return this._param.getValueAtTime
                        ? this._param.getValueAtTime(e)
                        : t.Param.prototype.getValueAtTime.call(this, e)
                    }),
                    (t.Signal.prototype.dispose = function() {
                      return (
                        t.Param.prototype.dispose.call(this),
                        this._constantSource.disconnect(),
                        (this._constantSource = null),
                        this
                      )
                    }),
                    t.Signal
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(20)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.AudioNode = function() {
                      t.call(this)
                      var e = t.defaults(arguments, ['context'], {
                        context: t.context
                      })
                      this._context = e.context
                    }),
                    t.extend(t.AudioNode),
                    Object.defineProperty(t.AudioNode.prototype, 'context', {
                      get: function() {
                        return this._context
                      }
                    }),
                    (t.AudioNode.prototype.createInsOuts = function(t, e) {
                      1 === t
                        ? (this.input = this.context.createGain())
                        : t > 1 && (this.input = new Array(t)),
                        1 === e
                          ? (this.output = this.context.createGain())
                          : e > 1 && (this.output = new Array(e))
                    }),
                    Object.defineProperty(
                      t.AudioNode.prototype,
                      'channelCount',
                      {
                        get: function() {
                          return this.output.channelCount
                        },
                        set: function(t) {
                          return (this.output.channelCount = t)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AudioNode.prototype,
                      'channelCountMode',
                      {
                        get: function() {
                          return this.output.channelCountMode
                        },
                        set: function(t) {
                          return (this.output.channelCountMode = t)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AudioNode.prototype,
                      'channelInterpretation',
                      {
                        get: function() {
                          return this.output.channelInterpretation
                        },
                        set: function(t) {
                          return (this.output.channelInterpretation = t)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AudioNode.prototype,
                      'numberOfInputs',
                      {
                        get: function() {
                          return this.input
                            ? t.isArray(this.input)
                              ? this.input.length
                              : 1
                            : 0
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AudioNode.prototype,
                      'numberOfOutputs',
                      {
                        get: function() {
                          return this.output
                            ? t.isArray(this.output)
                              ? this.output.length
                              : 1
                            : 0
                        }
                      }
                    ),
                    (t.AudioNode.prototype.connect = function(e, i, n) {
                      return (
                        t.isArray(this.output)
                          ? ((i = t.defaultArg(i, 0)),
                            this.output[i].connect(e, 0, n))
                          : this.output.connect(e, i, n),
                        this
                      )
                    }),
                    (t.AudioNode.prototype.disconnect = function(e, i, n) {
                      t.isArray(this.output)
                        ? t.isNumber(e)
                          ? this.output[e].disconnect()
                          : ((i = t.defaultArg(i, 0)),
                            this.output[i].disconnect(e, 0, n))
                        : this.output.disconnect.apply(this.output, arguments)
                    }),
                    (t.AudioNode.prototype.chain = function() {
                      for (var t = this, e = 0; e < arguments.length; e++) {
                        var i = arguments[e]
                        t.connect(i), (t = i)
                      }
                      return this
                    }),
                    (t.AudioNode.prototype.fan = function() {
                      for (var t = 0; t < arguments.length; t++)
                        this.connect(arguments[t])
                      return this
                    }),
                    t.global.AudioNode &&
                      ((AudioNode.prototype.chain =
                        t.AudioNode.prototype.chain),
                      (AudioNode.prototype.fan = t.AudioNode.prototype.fan)),
                    (t.AudioNode.prototype.dispose = function() {
                      return (
                        t.isDefined(this.input) &&
                          (this.input instanceof AudioNode &&
                            this.input.disconnect(),
                          (this.input = null)),
                        t.isDefined(this.output) &&
                          (this.output instanceof AudioNode &&
                            this.output.disconnect(),
                          (this.output = null)),
                        (this._context = null),
                        this
                      )
                    }),
                    t.AudioNode
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(14), i(4), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Gain = function() {
                      var e = t.defaults(arguments, ['gain', 'units'], t.Gain)
                      t.AudioNode.call(this, e),
                        (this.input = this.output = this._gainNode = this.context.createGain()),
                        (this.gain = new t.Param({
                          param: this._gainNode.gain,
                          units: e.units,
                          value: e.gain,
                          convert: e.convert
                        })),
                        this._readOnly('gain')
                    }),
                    t.extend(t.Gain, t.AudioNode),
                    (t.Gain.defaults = { gain: 1, convert: !0 }),
                    (t.Gain.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this._gainNode.disconnect(),
                        (this._gainNode = null),
                        this._writable('gain'),
                        this.gain.dispose(),
                        (this.gain = null)
                    }),
                    t.Gain
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(65), i(46), i(45), i(20)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Type = {
                      Default: 'number',
                      Time: 'time',
                      Frequency: 'frequency',
                      TransportTime: 'transportTime',
                      Ticks: 'ticks',
                      NormalRange: 'normalRange',
                      AudioRange: 'audioRange',
                      Decibels: 'db',
                      Interval: 'interval',
                      BPM: 'bpm',
                      Positive: 'positive',
                      Gain: 'gain',
                      Cents: 'cents',
                      Degrees: 'degrees',
                      MIDI: 'midi',
                      BarsBeatsSixteenths: 'barsBeatsSixteenths',
                      Samples: 'samples',
                      Hertz: 'hertz',
                      Note: 'note',
                      Milliseconds: 'milliseconds',
                      Seconds: 'seconds',
                      Notation: 'notation'
                    }),
                    (t.prototype.toSeconds = function(e) {
                      return t.isNumber(e)
                        ? e
                        : t.isUndef(e)
                        ? this.now()
                        : t.isString(e) || t.isObject(e)
                        ? new t.Time(e).toSeconds()
                        : e instanceof t.TimeBase
                        ? e.toSeconds()
                        : void 0
                    }),
                    (t.prototype.toFrequency = function(e) {
                      return t.isNumber(e)
                        ? e
                        : t.isString(e) || t.isUndef(e) || t.isObject(e)
                        ? new t.Frequency(e).valueOf()
                        : e instanceof t.TimeBase
                        ? e.toFrequency()
                        : void 0
                    }),
                    (t.prototype.toTicks = function(e) {
                      return t.isNumber(e) || t.isString(e) || t.isObject(e)
                        ? new t.TransportTime(e).toTicks()
                        : t.isUndef(e)
                        ? t.Transport.ticks
                        : e instanceof t.TimeBase
                        ? e.toTicks()
                        : void 0
                    }),
                    t
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(14), i(3), i(36)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Multiply = function(e) {
                      t.Signal.call(this),
                        this.createInsOuts(2, 0),
                        (this._mult = this.input[0] = this.output = new t.Gain()),
                        (this._param = this.input[1] = this.output.gain),
                        (this.value = t.defaultArg(e, 0)),
                        (this.proxy = !1)
                    }),
                    t.extend(t.Multiply, t.Signal),
                    (t.Multiply.prototype.dispose = function() {
                      return (
                        t.Signal.prototype.dispose.call(this),
                        this._mult.dispose(),
                        (this._mult = null),
                        (this._param = null),
                        this
                      )
                    }),
                    t.Multiply
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(16), i(27), i(40), i(4), i(33), i(1), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Source = function(e) {
                      ;(e = t.defaultArg(e, t.Source.defaults)),
                        t.AudioNode.call(this),
                        (this._volume = this.output = new t.Volume(e.volume)),
                        (this.volume = this._volume.volume),
                        this._readOnly('volume'),
                        (this._state = new t.TimelineState(t.State.Stopped)),
                        (this._state.memory = 100),
                        (this._synced = !1),
                        (this._scheduled = []),
                        (this._volume.output.output.channelCount = 2),
                        (this._volume.output.output.channelCountMode =
                          'explicit'),
                        (this.mute = e.mute)
                    }),
                    t.extend(t.Source, t.AudioNode),
                    (t.Source.defaults = { volume: 0, mute: !1 }),
                    Object.defineProperty(t.Source.prototype, 'state', {
                      get: function() {
                        return this._synced
                          ? t.Transport.state === t.State.Started
                            ? this._state.getValueAtTime(t.Transport.seconds)
                            : t.State.Stopped
                          : this._state.getValueAtTime(this.now())
                      }
                    }),
                    Object.defineProperty(t.Source.prototype, 'mute', {
                      get: function() {
                        return this._volume.mute
                      },
                      set: function(t) {
                        this._volume.mute = t
                      }
                    }),
                    (t.Source.prototype._start = t.noOp),
                    (t.Source.prototype.restart = t.noOp),
                    (t.Source.prototype._stop = t.noOp),
                    (t.Source.prototype.start = function(e, i, n) {
                      if (
                        ((e =
                          t.isUndef(e) && this._synced
                            ? t.Transport.seconds
                            : this.toSeconds(e)),
                        this._state.getValueAtTime(e) === t.State.Started)
                      )
                        this._state.cancel(e),
                          this._state.setStateAtTime(t.State.Started, e),
                          this.restart(e, i, n)
                      else if (
                        (this._state.setStateAtTime(t.State.Started, e),
                        this._synced)
                      ) {
                        var o = this._state.get(e)
                        ;(o.offset = t.defaultArg(i, 0)), (o.duration = n)
                        var r = t.Transport.schedule(
                          function(t) {
                            this._start(t, i, n)
                          }.bind(this),
                          e
                        )
                        this._scheduled.push(r),
                          t.Transport.state === t.State.Started &&
                            this._syncedStart(this.now(), t.Transport.seconds)
                      } else this._start.apply(this, arguments)
                      return this
                    }),
                    (t.Source.prototype.stop = function(e) {
                      if (
                        ((e =
                          t.isUndef(e) && this._synced
                            ? t.Transport.seconds
                            : this.toSeconds(e)),
                        this._synced)
                      ) {
                        var i = t.Transport.schedule(this._stop.bind(this), e)
                        this._scheduled.push(i)
                      } else this._stop.apply(this, arguments)
                      return (
                        this._state.cancel(e),
                        this._state.setStateAtTime(t.State.Stopped, e),
                        this
                      )
                    }),
                    (t.Source.prototype.sync = function() {
                      return (
                        (this._synced = !0),
                        (this._syncedStart = function(e, i) {
                          if (i > 0) {
                            var n = this._state.get(i)
                            if (
                              n &&
                              n.state === t.State.Started &&
                              n.time !== i
                            ) {
                              var o,
                                r = i - this.toSeconds(n.time)
                              n.duration &&
                                (o = this.toSeconds(n.duration) - r),
                                this._start(e, this.toSeconds(n.offset) + r, o)
                            }
                          }
                        }.bind(this)),
                        (this._syncedStop = function(e) {
                          var i = t.Transport.getSecondsAtTime(
                            Math.max(e - this.sampleTime, 0)
                          )
                          this._state.getValueAtTime(i) === t.State.Started &&
                            this._stop(e)
                        }.bind(this)),
                        t.Transport.on('start loopStart', this._syncedStart),
                        t.Transport.on('stop pause loopEnd', this._syncedStop),
                        this
                      )
                    }),
                    (t.Source.prototype.unsync = function() {
                      this._synced &&
                        (t.Transport.off(
                          'stop pause loopEnd',
                          this._syncedStop
                        ),
                        t.Transport.off('start loopStart', this._syncedStart)),
                        (this._synced = !1)
                      for (var e = 0; e < this._scheduled.length; e++) {
                        var i = this._scheduled[e]
                        t.Transport.clear(i)
                      }
                      return (this._scheduled = []), this._state.cancel(0), this
                    }),
                    (t.Source.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this.unsync(),
                        (this._scheduled = null),
                        this._writable('volume'),
                        this._volume.dispose(),
                        (this._volume = null),
                        (this.volume = null),
                        this._state.dispose(),
                        (this._state = null)
                    }),
                    t.Source
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(36), i(98)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.WaveShaper = function(e, i) {
                      t.SignalBase.call(this),
                        (this._shaper = this.input = this.output = this.context.createWaveShaper()),
                        (this._curve = null),
                        Array.isArray(e)
                          ? (this.curve = e)
                          : isFinite(e) || t.isUndef(e)
                          ? (this._curve = new Float32Array(
                              t.defaultArg(e, 1024)
                            ))
                          : t.isFunction(e) &&
                            ((this._curve = new Float32Array(
                              t.defaultArg(i, 1024)
                            )),
                            this.setMap(e))
                    }),
                    t.extend(t.WaveShaper, t.SignalBase),
                    (t.WaveShaper.prototype.setMap = function(t) {
                      for (
                        var e = new Array(this._curve.length),
                          i = 0,
                          n = this._curve.length;
                        i < n;
                        i++
                      ) {
                        var o = (i / (n - 1)) * 2 - 1
                        e[i] = t(o, i)
                      }
                      return (this.curve = e), this
                    }),
                    Object.defineProperty(t.WaveShaper.prototype, 'curve', {
                      get: function() {
                        return this._shaper.curve
                      },
                      set: function(t) {
                        ;(this._curve = new Float32Array(t)),
                          (this._shaper.curve = this._curve)
                      }
                    }),
                    Object.defineProperty(
                      t.WaveShaper.prototype,
                      'oversample',
                      {
                        get: function() {
                          return this._shaper.oversample
                        },
                        set: function(t) {
                          if (!['none', '2x', '4x'].includes(t))
                            throw new RangeError(
                              "Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'"
                            )
                          this._shaper.oversample = t
                        }
                      }
                    ),
                    (t.WaveShaper.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._shaper.disconnect(),
                        (this._shaper = null),
                        (this._curve = null),
                        this
                      )
                    }),
                    t.WaveShaper
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(23), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Effect = function() {
                      var e = t.defaults(arguments, ['wet'], t.Effect)
                      t.AudioNode.call(this),
                        this.createInsOuts(1, 1),
                        (this._dryWet = new t.CrossFade(e.wet)),
                        (this.wet = this._dryWet.fade),
                        (this.effectSend = new t.Gain()),
                        (this.effectReturn = new t.Gain()),
                        this.input.connect(this._dryWet.a),
                        this.input.connect(this.effectSend),
                        this.effectReturn.connect(this._dryWet.b),
                        this._dryWet.connect(this.output),
                        this._readOnly(['wet'])
                    }),
                    t.extend(t.Effect, t.AudioNode),
                    (t.Effect.defaults = { wet: 1 }),
                    (t.Effect.prototype.connectEffect = function(t) {
                      return this.effectSend.chain(t, this.effectReturn), this
                    }),
                    (t.Effect.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._dryWet.dispose(),
                        (this._dryWet = null),
                        this.effectSend.dispose(),
                        (this.effectSend = null),
                        this.effectReturn.dispose(),
                        (this.effectReturn = null),
                        this._writable(['wet']),
                        (this.wet = null),
                        this
                      )
                    }),
                    t.Effect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Filter = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type', 'rolloff'],
                        t.Filter
                      )
                      t.AudioNode.call(this),
                        this.createInsOuts(1, 1),
                        (this._filters = []),
                        (this.frequency = new t.Signal(
                          e.frequency,
                          t.Type.Frequency
                        )),
                        (this.detune = new t.Signal(0, t.Type.Cents)),
                        (this.gain = new t.Signal({
                          value: e.gain,
                          convert: !0,
                          type: t.Type.Decibels
                        })),
                        (this.Q = new t.Signal(e.Q)),
                        (this._type = e.type),
                        (this._rolloff = e.rolloff),
                        (this.rolloff = e.rolloff),
                        this._readOnly(['detune', 'frequency', 'gain', 'Q'])
                    }),
                    t.extend(t.Filter, t.AudioNode),
                    (t.Filter.defaults = {
                      type: 'lowpass',
                      frequency: 350,
                      rolloff: -12,
                      Q: 1,
                      gain: 0
                    }),
                    Object.defineProperty(t.Filter.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(t) {
                        if (
                          -1 ===
                          [
                            'lowpass',
                            'highpass',
                            'bandpass',
                            'lowshelf',
                            'highshelf',
                            'notch',
                            'allpass',
                            'peaking'
                          ].indexOf(t)
                        )
                          throw new TypeError('Tone.Filter: invalid type ' + t)
                        this._type = t
                        for (var e = 0; e < this._filters.length; e++)
                          this._filters[e].type = t
                      }
                    }),
                    Object.defineProperty(t.Filter.prototype, 'rolloff', {
                      get: function() {
                        return this._rolloff
                      },
                      set: function(e) {
                        e = parseInt(e, 10)
                        var i = [-12, -24, -48, -96].indexOf(e)
                        if (-1 === i)
                          throw new RangeError(
                            'Tone.Filter: rolloff can only be -12, -24, -48 or -96'
                          )
                        ;(i += 1), (this._rolloff = e), this.input.disconnect()
                        for (var n = 0; n < this._filters.length; n++)
                          this._filters[n].disconnect(),
                            (this._filters[n] = null)
                        this._filters = new Array(i)
                        for (var o = 0; o < i; o++) {
                          var r = this.context.createBiquadFilter()
                          ;(r.type = this._type),
                            this.frequency.connect(r.frequency),
                            this.detune.connect(r.detune),
                            this.Q.connect(r.Q),
                            this.gain.connect(r.gain),
                            (this._filters[o] = r)
                        }
                        var s = [this.input]
                          .concat(this._filters)
                          .concat([this.output])
                        t.connectSeries.apply(t, s)
                      }
                    }),
                    (t.Filter.prototype.getFrequencyResponse = function(e) {
                      e = t.defaultArg(e, 128)
                      for (
                        var i = new Float32Array(e).map(function() {
                            return 1
                          }),
                          n = new Float32Array(e),
                          o = 0;
                        o < e;
                        o++
                      ) {
                        var r = 19980 * Math.pow(o / e, 2) + 20
                        n[o] = r
                      }
                      var s = new Float32Array(e),
                        a = new Float32Array(e)
                      return (
                        this._filters.forEach(
                          function() {
                            var t = this.context.createBiquadFilter()
                            ;(t.type = this._type),
                              (t.Q.value = this.Q.value),
                              (t.frequency.value = this.frequency.value),
                              (t.gain.value = this.gain.value),
                              t.getFrequencyResponse(n, s, a),
                              s.forEach(function(t, e) {
                                i[e] *= t
                              })
                          }.bind(this)
                        ),
                        i
                      )
                    }),
                    (t.Filter.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this)
                      for (var e = 0; e < this._filters.length; e++)
                        this._filters[e].disconnect(), (this._filters[e] = null)
                      return (
                        (this._filters = null),
                        this._writable(['detune', 'frequency', 'gain', 'Q']),
                        this.frequency.dispose(),
                        this.Q.dispose(),
                        (this.frequency = null),
                        (this.Q = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        this.gain.dispose(),
                        (this.gain = null),
                        this
                      )
                    }),
                    t.Filter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Merge = function() {
                      t.AudioNode.call(this),
                        this.createInsOuts(2, 0),
                        (this.left = this.input[0] = new t.Gain()),
                        (this.right = this.input[1] = new t.Gain()),
                        (this._merger = this.output = this.context.createChannelMerger(
                          2
                        )),
                        this.left.connect(this._merger, 0, 0),
                        this.right.connect(this._merger, 0, 1),
                        (this.left.channelCount = 1),
                        (this.right.channelCount = 1),
                        (this.left.channelCountMode = 'explicit'),
                        (this.right.channelCountMode = 'explicit')
                    }),
                    t.extend(t.Merge, t.AudioNode),
                    (t.Merge.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this.left.dispose(),
                        (this.left = null),
                        this.right.dispose(),
                        (this.right = null),
                        this._merger.disconnect(),
                        (this._merger = null),
                        this
                      )
                    }),
                    t.Merge
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(35), i(4), i(81)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Buffer = function() {
                      var e = t.defaults(
                        arguments,
                        ['url', 'onload', 'onerror'],
                        t.Buffer
                      )
                      t.call(this),
                        (this._buffer = null),
                        (this._reversed = e.reverse),
                        (this._xhr = null),
                        (this.onload = t.noOp),
                        e.url instanceof AudioBuffer ||
                        e.url instanceof t.Buffer
                          ? (this.set(e.url),
                            this.loaded || (this.onload = e.onload))
                          : t.isString(e.url) &&
                            this.load(e.url)
                              .then(e.onload)
                              .catch(e.onerror)
                    }),
                    t.extend(t.Buffer),
                    (t.Buffer.defaults = {
                      url: void 0,
                      reverse: !1,
                      onload: t.noOp,
                      onerror: t.noOp
                    }),
                    (t.Buffer.prototype.set = function(e) {
                      return (
                        e instanceof t.Buffer
                          ? e.loaded
                            ? (this._buffer = e.get())
                            : (e.onload = function() {
                                this.set(e), this.onload(this)
                              }.bind(this))
                          : (this._buffer = e),
                        this
                      )
                    }),
                    (t.Buffer.prototype.get = function() {
                      return this._buffer
                    }),
                    (t.Buffer.prototype.load = function(e, i, n) {
                      return new Promise(
                        function(o, r) {
                          this._xhr = t.Buffer.load(
                            e,
                            function(t) {
                              ;(this._xhr = null),
                                this.set(t),
                                o(this),
                                this.onload(this),
                                i && i(this)
                            }.bind(this),
                            function(t) {
                              ;(this._xhr = null), r(t), n && n(t)
                            }.bind(this)
                          )
                        }.bind(this)
                      )
                    }),
                    (t.Buffer.prototype.dispose = function() {
                      return (
                        t.prototype.dispose.call(this),
                        (this._buffer = null),
                        this._xhr &&
                          (t.Buffer._removeFromDownloadQueue(this._xhr),
                          this._xhr.abort(),
                          (this._xhr = null)),
                        this
                      )
                    }),
                    Object.defineProperty(t.Buffer.prototype, 'loaded', {
                      get: function() {
                        return this.length > 0
                      }
                    }),
                    Object.defineProperty(t.Buffer.prototype, 'duration', {
                      get: function() {
                        return this._buffer ? this._buffer.duration : 0
                      }
                    }),
                    Object.defineProperty(t.Buffer.prototype, 'length', {
                      get: function() {
                        return this._buffer ? this._buffer.length : 0
                      }
                    }),
                    Object.defineProperty(
                      t.Buffer.prototype,
                      'numberOfChannels',
                      {
                        get: function() {
                          return this._buffer
                            ? this._buffer.numberOfChannels
                            : 0
                        }
                      }
                    ),
                    (t.Buffer.prototype.fromArray = function(t) {
                      var e = t[0].length > 0,
                        i = e ? t.length : 1,
                        n = e ? t[0].length : t.length,
                        o = this.context.createBuffer(
                          i,
                          n,
                          this.context.sampleRate
                        )
                      e || 1 !== i || (t = [t])
                      for (var r = 0; r < i; r++) o.copyToChannel(t[r], r)
                      return (this._buffer = o), this
                    }),
                    (t.Buffer.prototype.toMono = function(e) {
                      if (t.isNumber(e)) this.fromArray(this.toArray(e))
                      else {
                        for (
                          var i = new Float32Array(this.length),
                            n = this.numberOfChannels,
                            o = 0;
                          o < n;
                          o++
                        )
                          for (
                            var r = this.toArray(o), s = 0;
                            s < r.length;
                            s++
                          )
                            i[s] += r[s]
                        ;(i = i.map(function(t) {
                          return t / n
                        })),
                          this.fromArray(i)
                      }
                      return this
                    }),
                    (t.Buffer.prototype.toArray = function(e) {
                      if (t.isNumber(e)) return this.getChannelData(e)
                      if (1 === this.numberOfChannels) return this.toArray(0)
                      for (var i = [], n = 0; n < this.numberOfChannels; n++)
                        i[n] = this.getChannelData(n)
                      return i
                    }),
                    (t.Buffer.prototype.getChannelData = function(t) {
                      return this._buffer.getChannelData(t)
                    }),
                    (t.Buffer.prototype.slice = function(e, i) {
                      i = t.defaultArg(i, this.duration)
                      for (
                        var n = Math.floor(
                            this.context.sampleRate * this.toSeconds(e)
                          ),
                          o = Math.floor(
                            this.context.sampleRate * this.toSeconds(i)
                          ),
                          r = [],
                          s = 0;
                        s < this.numberOfChannels;
                        s++
                      )
                        r[s] = this.toArray(s).slice(n, o)
                      return new t.Buffer().fromArray(r)
                    }),
                    (t.Buffer.prototype._reverse = function() {
                      if (this.loaded)
                        for (var t = 0; t < this.numberOfChannels; t++)
                          Array.prototype.reverse.call(this.getChannelData(t))
                      return this
                    }),
                    Object.defineProperty(t.Buffer.prototype, 'reverse', {
                      get: function() {
                        return this._reversed
                      },
                      set: function(t) {
                        this._reversed !== t &&
                          ((this._reversed = t), this._reverse())
                      }
                    }),
                    t.Emitter.mixin(t.Buffer),
                    (t.Buffer._downloadQueue = []),
                    (t.Buffer.baseUrl = ''),
                    (t.Buffer.fromArray = function(e) {
                      return new t.Buffer().fromArray(e)
                    }),
                    (t.Buffer.fromUrl = function(e) {
                      var i = new t.Buffer()
                      return i.load(e).then(function() {
                        return i
                      })
                    }),
                    (t.Buffer._removeFromDownloadQueue = function(e) {
                      var i = t.Buffer._downloadQueue.indexOf(e)
                      ;-1 !== i && t.Buffer._downloadQueue.splice(i, 1)
                    }),
                    (t.Buffer.load = function(e, i, n) {
                      i = t.defaultArg(i, t.noOp)
                      var o = e.match(/\[(.+\|?)+\]$/)
                      if (o) {
                        for (
                          var r = o[1].split('|'), s = r[0], a = 0;
                          a < r.length;
                          a++
                        )
                          if (t.Buffer.supportsType(r[a])) {
                            s = r[a]
                            break
                          }
                        e = e.replace(o[0], s)
                      }
                      function u(e) {
                        if (
                          (t.Buffer._removeFromDownloadQueue(c),
                          t.Buffer.emit('error', e),
                          !n)
                        )
                          throw e
                        n(e)
                      }
                      function l() {
                        for (
                          var e = 0, i = 0;
                          i < t.Buffer._downloadQueue.length;
                          i++
                        )
                          e += t.Buffer._downloadQueue[i].progress
                        t.Buffer.emit(
                          'progress',
                          e / t.Buffer._downloadQueue.length
                        )
                      }
                      var c = new XMLHttpRequest()
                      return (
                        c.open('GET', t.Buffer.baseUrl + e, !0),
                        (c.responseType = 'arraybuffer'),
                        (c.progress = 0),
                        t.Buffer._downloadQueue.push(c),
                        c.addEventListener('load', function() {
                          200 === c.status
                            ? t.context
                                .decodeAudioData(c.response)
                                .then(function(e) {
                                  ;(c.progress = 1),
                                    l(),
                                    i(e),
                                    t.Buffer._removeFromDownloadQueue(c),
                                    0 === t.Buffer._downloadQueue.length &&
                                      t.Buffer.emit('load')
                                })
                                .catch(function() {
                                  t.Buffer._removeFromDownloadQueue(c),
                                    u(
                                      'Tone.Buffer: could not decode audio data: ' +
                                        e
                                    )
                                })
                            : u('Tone.Buffer: could not locate file: ' + e)
                        }),
                        c.addEventListener('error', u),
                        c.addEventListener('progress', function(t) {
                          t.lengthComputable &&
                            ((c.progress = (t.loaded / t.total) * 0.95), l())
                        }),
                        c.send(),
                        c
                      )
                    }),
                    (t.Buffer.cancelDownloads = function() {
                      return (
                        t.Buffer._downloadQueue.slice().forEach(function(e) {
                          t.Buffer._removeFromDownloadQueue(e), e.abort()
                        }),
                        t.Buffer
                      )
                    }),
                    (t.Buffer.supportsType = function(t) {
                      var e = t.split('.')
                      return (
                        (e = e[e.length - 1]),
                        '' !==
                          document
                            .createElement('audio')
                            .canPlayType('audio/' + e)
                      )
                    }),
                    (t.loaded = function() {
                      var e, i
                      function n() {
                        t.Buffer.off('load', e), t.Buffer.off('error', i)
                      }
                      return new Promise(function(n, o) {
                        ;(e = function() {
                          n()
                        }),
                          (i = function() {
                            o()
                          }),
                          t.Buffer.on('load', e),
                          t.Buffer.on('error', i)
                      })
                        .then(n)
                        .catch(function(t) {
                          throw (n(), new Error(t))
                        })
                    }),
                    t.Buffer
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(17), i(26), i(2), i(1), i(22), i(4), i(28)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.LFO = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'min', 'max'],
                        t.LFO
                      )
                      t.AudioNode.call(this),
                        (this._oscillator = new t.Oscillator({
                          frequency: e.frequency,
                          type: e.type
                        })),
                        (this.frequency = this._oscillator.frequency),
                        (this.amplitude = this._oscillator.volume),
                        (this.amplitude.units = t.Type.NormalRange),
                        (this.amplitude.value = e.amplitude),
                        (this._stoppedSignal = new t.Signal(
                          0,
                          t.Type.AudioRange
                        )),
                        (this._zeros = new t.Zero()),
                        (this._stoppedValue = 0),
                        (this._a2g = new t.AudioToGain()),
                        (this._scaler = this.output = new t.Scale(
                          e.min,
                          e.max
                        )),
                        (this._units = t.Type.Default),
                        (this.units = e.units),
                        this._oscillator.chain(this._a2g, this._scaler),
                        this._zeros.connect(this._a2g),
                        this._stoppedSignal.connect(this._a2g),
                        this._readOnly(['amplitude', 'frequency']),
                        (this.phase = e.phase)
                    }),
                    t.extend(t.LFO, t.AudioNode),
                    (t.LFO.defaults = {
                      type: 'sine',
                      min: 0,
                      max: 1,
                      phase: 0,
                      frequency: '4n',
                      amplitude: 1,
                      units: t.Type.Default
                    }),
                    (t.LFO.prototype.start = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this._stoppedSignal.setValueAtTime(0, t),
                        this._oscillator.start(t),
                        this
                      )
                    }),
                    (t.LFO.prototype.stop = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this._stoppedSignal.setValueAtTime(
                          this._stoppedValue,
                          t
                        ),
                        this._oscillator.stop(t),
                        this
                      )
                    }),
                    (t.LFO.prototype.sync = function() {
                      return (
                        this._oscillator.sync(),
                        this._oscillator.syncFrequency(),
                        this
                      )
                    }),
                    (t.LFO.prototype.unsync = function() {
                      return (
                        this._oscillator.unsync(),
                        this._oscillator.unsyncFrequency(),
                        this
                      )
                    }),
                    Object.defineProperty(t.LFO.prototype, 'min', {
                      get: function() {
                        return this._toUnits(this._scaler.min)
                      },
                      set: function(t) {
                        ;(t = this._fromUnits(t)), (this._scaler.min = t)
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'max', {
                      get: function() {
                        return this._toUnits(this._scaler.max)
                      },
                      set: function(t) {
                        ;(t = this._fromUnits(t)), (this._scaler.max = t)
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'type', {
                      get: function() {
                        return this._oscillator.type
                      },
                      set: function(t) {
                        ;(this._oscillator.type = t),
                          (this._stoppedValue = this._oscillator._getInitialValue()),
                          (this._stoppedSignal.value = this._stoppedValue)
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'phase', {
                      get: function() {
                        return this._oscillator.phase
                      },
                      set: function(t) {
                        ;(this._oscillator.phase = t),
                          (this._stoppedValue = this._oscillator._getInitialValue()),
                          (this._stoppedSignal.value = this._stoppedValue)
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'units', {
                      get: function() {
                        return this._units
                      },
                      set: function(t) {
                        var e = this.min,
                          i = this.max
                        ;(this._units = t), (this.min = e), (this.max = i)
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'mute', {
                      get: function() {
                        return this._oscillator.mute
                      },
                      set: function(t) {
                        this._oscillator.mute = t
                      }
                    }),
                    Object.defineProperty(t.LFO.prototype, 'state', {
                      get: function() {
                        return this._oscillator.state
                      }
                    }),
                    (t.LFO.prototype.connect = function(e) {
                      return (
                        (e.constructor !== t.Signal &&
                          e.constructor !== t.Param) ||
                          ((this.convert = e.convert), (this.units = e.units)),
                        t.SignalBase.prototype.connect.apply(this, arguments),
                        this
                      )
                    }),
                    (t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits),
                    (t.LFO.prototype._toUnits = t.Param.prototype._toUnits),
                    (t.LFO.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['amplitude', 'frequency']),
                        this._oscillator.dispose(),
                        (this._oscillator = null),
                        this._stoppedSignal.dispose(),
                        (this._stoppedSignal = null),
                        this._zeros.dispose(),
                        (this._zeros = null),
                        this._scaler.dispose(),
                        (this._scaler = null),
                        this._a2g.dispose(),
                        (this._a2g = null),
                        (this.frequency = null),
                        (this.amplitude = null),
                        this
                      )
                    }),
                    t.LFO
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(29), i(94), i(1), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Subtract = function(e) {
                      t.Signal.call(this),
                        this.createInsOuts(2, 0),
                        (this._sum = this.input[0] = this.output = new t.Gain()),
                        (this._neg = new t.Negate()),
                        (this._param = this.input[1] = new t.Signal(e)),
                        this._param.chain(this._neg, this._sum),
                        (this.proxy = !1)
                    }),
                    t.extend(t.Subtract, t.Signal),
                    (t.Subtract.prototype.dispose = function() {
                      return (
                        t.Signal.prototype.dispose.call(this),
                        this._neg.dispose(),
                        (this._neg = null),
                        this._sum.disconnect(),
                        (this._sum = null),
                        this
                      )
                    }),
                    t.Subtract
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(4), i(2), i(24)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Param = function() {
                      var e = t.defaults(
                        arguments,
                        ['param', 'units', 'convert'],
                        t.Param
                      )
                      t.AudioNode.call(this, e),
                        (this._param = this.input = e.param),
                        (this.units = e.units),
                        (this.convert = e.convert),
                        (this.overridden = !1),
                        (this._events = new t.Timeline(1e3)),
                        t.isDefined(e.value) &&
                          this._param &&
                          this.setValueAtTime(e.value, 0)
                    }),
                    t.extend(t.Param, t.AudioNode),
                    (t.Param.defaults = {
                      units: t.Type.Default,
                      convert: !0,
                      param: void 0
                    }),
                    Object.defineProperty(t.Param.prototype, 'value', {
                      get: function() {
                        var t = this.now()
                        return this._toUnits(this.getValueAtTime(t))
                      },
                      set: function(t) {
                        ;(this._initialValue = this._fromUnits(t)),
                          this.cancelScheduledValues(this.now()),
                          this.setValueAtTime(t, this.now())
                      }
                    }),
                    Object.defineProperty(t.Param.prototype, 'minValue', {
                      get: function() {
                        return this.units === t.Type.Time ||
                          this.units === t.Type.Frequency ||
                          this.units === t.Type.NormalRange ||
                          this.units === t.Type.Positive ||
                          this.units === t.Type.BPM
                          ? 0
                          : this.units === t.Type.AudioRange
                          ? -1
                          : this.units === t.Type.Decibels
                          ? -1 / 0
                          : this._param.minValue
                      }
                    }),
                    Object.defineProperty(t.Param.prototype, 'maxValue', {
                      get: function() {
                        return this.units === t.Type.NormalRange ||
                          this.units === t.Type.AudioRange
                          ? 1
                          : this._param.maxValue
                      }
                    }),
                    (t.Param.prototype._fromUnits = function(e) {
                      if (
                        (!this.convert && !t.isUndef(this.convert)) ||
                        this.overridden
                      )
                        return e
                      switch (this.units) {
                        case t.Type.Time:
                          return this.toSeconds(e)
                        case t.Type.Frequency:
                          return this.toFrequency(e)
                        case t.Type.Decibels:
                          return t.dbToGain(e)
                        case t.Type.NormalRange:
                          return Math.min(Math.max(e, 0), 1)
                        case t.Type.AudioRange:
                          return Math.min(Math.max(e, -1), 1)
                        case t.Type.Positive:
                          return Math.max(e, 0)
                        default:
                          return e
                      }
                    }),
                    (t.Param.prototype._toUnits = function(e) {
                      if (!this.convert && !t.isUndef(this.convert)) return e
                      switch (this.units) {
                        case t.Type.Decibels:
                          return t.gainToDb(e)
                        default:
                          return e
                      }
                    }),
                    (t.Param.prototype._minOutput = 1e-5),
                    (t.Param.AutomationType = {
                      Linear: 'linearRampToValueAtTime',
                      Exponential: 'exponentialRampToValueAtTime',
                      Target: 'setTargetAtTime',
                      SetValue: 'setValueAtTime',
                      Cancel: 'cancelScheduledValues'
                    }),
                    (t.Param.prototype.setValueAtTime = function(e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        (e = this._fromUnits(e)),
                        this._events.add({
                          type: t.Param.AutomationType.SetValue,
                          value: e,
                          time: i
                        }),
                        this.log(t.Param.AutomationType.SetValue, e, i),
                        this._param.setValueAtTime(e, i),
                        this
                      )
                    }),
                    (t.Param.prototype.getValueAtTime = function(e) {
                      e = this.toSeconds(e)
                      var i = this._events.getAfter(e),
                        n = this._events.get(e),
                        o = t.defaultArg(
                          this._initialValue,
                          this._param.defaultValue
                        ),
                        r = o
                      if (null === n) r = o
                      else if (n.type === t.Param.AutomationType.Target) {
                        var s,
                          a = this._events.getBefore(n.time)
                        ;(s = null === a ? o : a.value),
                          (r = this._exponentialApproach(
                            n.time,
                            s,
                            n.value,
                            n.constant,
                            e
                          ))
                      } else
                        r =
                          null === i
                            ? n.value
                            : i.type === t.Param.AutomationType.Linear
                            ? this._linearInterpolate(
                                n.time,
                                n.value,
                                i.time,
                                i.value,
                                e
                              )
                            : i.type === t.Param.AutomationType.Exponential
                            ? this._exponentialInterpolate(
                                n.time,
                                n.value,
                                i.time,
                                i.value,
                                e
                              )
                            : n.value
                      return r
                    }),
                    (t.Param.prototype.setRampPoint = function(t) {
                      t = this.toSeconds(t)
                      var e = this.getValueAtTime(t)
                      return (
                        this.cancelAndHoldAtTime(t),
                        0 === e && (e = this._minOutput),
                        this.setValueAtTime(this._toUnits(e), t),
                        this
                      )
                    }),
                    (t.Param.prototype.linearRampToValueAtTime = function(
                      e,
                      i
                    ) {
                      return (
                        (e = this._fromUnits(e)),
                        (i = this.toSeconds(i)),
                        this._events.add({
                          type: t.Param.AutomationType.Linear,
                          value: e,
                          time: i
                        }),
                        this.log(t.Param.AutomationType.Linear, e, i),
                        this._param.linearRampToValueAtTime(e, i),
                        this
                      )
                    }),
                    (t.Param.prototype.exponentialRampToValueAtTime = function(
                      e,
                      i
                    ) {
                      return (
                        (e = this._fromUnits(e)),
                        (e = Math.max(this._minOutput, e)),
                        (i = this.toSeconds(i)),
                        this._events.add({
                          type: t.Param.AutomationType.Exponential,
                          time: i,
                          value: e
                        }),
                        this.log(t.Param.AutomationType.Exponential, e, i),
                        this._param.exponentialRampToValueAtTime(e, i),
                        this
                      )
                    }),
                    (t.Param.prototype.exponentialRampTo = function(t, e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        this.setRampPoint(i),
                        this.exponentialRampToValueAtTime(
                          t,
                          i + this.toSeconds(e)
                        ),
                        this
                      )
                    }),
                    (t.Param.prototype.linearRampTo = function(t, e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        this.setRampPoint(i),
                        this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
                        this
                      )
                    }),
                    (t.Param.prototype.targetRampTo = function(t, e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        this.setRampPoint(i),
                        this.exponentialApproachValueAtTime(t, i, e),
                        this
                      )
                    }),
                    (t.Param.prototype.exponentialApproachValueAtTime = function(
                      t,
                      e,
                      i
                    ) {
                      var n = Math.log(this.toSeconds(i) + 1) / Math.log(200)
                      return (
                        (e = this.toSeconds(e)), this.setTargetAtTime(t, e, n)
                      )
                    }),
                    (t.Param.prototype.setTargetAtTime = function(e, i, n) {
                      if (((e = this._fromUnits(e)), n <= 0))
                        throw new Error('timeConstant must be greater than 0')
                      return (
                        (i = this.toSeconds(i)),
                        this._events.add({
                          type: t.Param.AutomationType.Target,
                          value: e,
                          time: i,
                          constant: n
                        }),
                        this.log(t.Param.AutomationType.Target, e, i, n),
                        this._param.setTargetAtTime(e, i, n),
                        this
                      )
                    }),
                    (t.Param.prototype.setValueCurveAtTime = function(
                      e,
                      i,
                      n,
                      o
                    ) {
                      ;(o = t.defaultArg(o, 1)),
                        (n = this.toSeconds(n)),
                        (i = this.toSeconds(i)),
                        this.setValueAtTime(e[0] * o, i)
                      for (var r = n / (e.length - 1), s = 1; s < e.length; s++)
                        this.linearRampToValueAtTime(e[s] * o, i + s * r)
                      return this
                    }),
                    (t.Param.prototype.cancelScheduledValues = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._events.cancel(e),
                        this._param.cancelScheduledValues(e),
                        this.log(t.Param.AutomationType.Cancel, e),
                        this
                      )
                    }),
                    (t.Param.prototype.cancelAndHoldAtTime = function(e) {
                      var i = this.getValueAtTime(e)
                      this.log('cancelAndHoldAtTime', e, 'value=' + i),
                        this._param.cancelScheduledValues(e)
                      var n = this._events.get(e),
                        o = this._events.getAfter(e)
                      return (
                        n && n.time === e
                          ? o
                            ? this._events.cancel(o.time)
                            : this._events.cancel(e + this.sampleTime)
                          : o &&
                            (this._events.cancel(o.time),
                            o.type === t.Param.AutomationType.Linear
                              ? this.linearRampToValueAtTime(i, e)
                              : o.type === t.Param.AutomationType.Exponential &&
                                this.exponentialRampToValueAtTime(i, e)),
                        this._events.add({
                          type: t.Param.AutomationType.SetValue,
                          value: i,
                          time: e
                        }),
                        this._param.setValueAtTime(i, e),
                        this
                      )
                    }),
                    (t.Param.prototype.rampTo = function(e, i, n) {
                      return (
                        (i = t.defaultArg(i, 0.1)),
                        this.units === t.Type.Frequency ||
                        this.units === t.Type.BPM ||
                        this.units === t.Type.Decibels
                          ? this.exponentialRampTo(e, i, n)
                          : this.linearRampTo(e, i, n),
                        this
                      )
                    }),
                    (t.Param.prototype._exponentialApproach = function(
                      t,
                      e,
                      i,
                      n,
                      o
                    ) {
                      return i + (e - i) * Math.exp(-(o - t) / n)
                    }),
                    (t.Param.prototype._linearInterpolate = function(
                      t,
                      e,
                      i,
                      n,
                      o
                    ) {
                      return e + ((o - t) / (i - t)) * (n - e)
                    }),
                    (t.Param.prototype._exponentialInterpolate = function(
                      t,
                      e,
                      i,
                      n,
                      o
                    ) {
                      return e * Math.pow(n / e, (o - t) / (i - t))
                    }),
                    (t.Param.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        (this._param = null),
                        (this._events = null),
                        this
                      )
                    }),
                    t.Param
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(19), i(10), i(23)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.StereoEffect = function() {
                      t.AudioNode.call(this)
                      var e = t.defaults(arguments, ['wet'], t.Effect)
                      this.createInsOuts(1, 1),
                        (this._dryWet = new t.CrossFade(e.wet)),
                        (this.wet = this._dryWet.fade),
                        (this._split = new t.Split()),
                        (this.effectSendL = this._split.left),
                        (this.effectSendR = this._split.right),
                        (this._merge = new t.Merge()),
                        (this.effectReturnL = this._merge.left),
                        (this.effectReturnR = this._merge.right),
                        this.input.connect(this._split),
                        this.input.connect(this._dryWet, 0, 0),
                        this._merge.connect(this._dryWet, 0, 1),
                        this._dryWet.connect(this.output),
                        this._readOnly(['wet'])
                    }),
                    t.extend(t.StereoEffect, t.Effect),
                    (t.StereoEffect.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._dryWet.dispose(),
                        (this._dryWet = null),
                        this._split.dispose(),
                        (this._split = null),
                        this._merge.dispose(),
                        (this._merge = null),
                        (this.effectSendL = null),
                        (this.effectSendR = null),
                        (this.effectReturnL = null),
                        (this.effectReturnR = null),
                        this._writable(['wet']),
                        (this.wet = null),
                        this
                      )
                    }),
                    t.StereoEffect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(86), i(4), i(24), i(35), i(3), i(84), i(83), i(55)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.Transport = function() {
                    t.Emitter.call(this),
                      t.getContext(
                        function() {
                          ;(this.loop = !1),
                            (this._loopStart = 0),
                            (this._loopEnd = 0),
                            (this._ppq = e.defaults.PPQ),
                            (this._clock = new t.Clock({
                              callback: this._processTick.bind(this),
                              frequency: 0
                            })),
                            this._bindClockEvents(),
                            (this.bpm = this._clock.frequency),
                            (this.bpm._toUnits = this._toUnits.bind(this)),
                            (this.bpm._fromUnits = this._fromUnits.bind(this)),
                            (this.bpm.units = t.Type.BPM),
                            (this.bpm.value = e.defaults.bpm),
                            this._readOnly('bpm'),
                            (this._timeSignature = e.defaults.timeSignature),
                            (this._scheduledEvents = {}),
                            (this._timeline = new t.Timeline()),
                            (this._repeatedEvents = new t.IntervalTimeline()),
                            (this._syncedSignals = []),
                            (this._swingTicks = e.defaults.PPQ / 2),
                            (this._swingAmount = 0),
                            (this.context.transport = this)
                        }.bind(this)
                      )
                  }),
                    t.extend(t.Transport, t.Emitter),
                    (t.Transport.defaults = {
                      bpm: 120,
                      swing: 0,
                      swingSubdivision: '8n',
                      timeSignature: 4,
                      loopStart: 0,
                      loopEnd: '4m',
                      PPQ: 192
                    }),
                    (t.Transport.prototype.isTransport = !0),
                    (t.Transport.prototype._processTick = function(e, i) {
                      if (
                        this._swingAmount > 0 &&
                        i % this._ppq != 0 &&
                        i % (2 * this._swingTicks) != 0
                      ) {
                        var n =
                            (i % (2 * this._swingTicks)) /
                            (2 * this._swingTicks),
                          o = Math.sin(n * Math.PI) * this._swingAmount
                        e += t.Ticks((2 * this._swingTicks) / 3).toSeconds() * o
                      }
                      this.loop &&
                        i >= this._loopEnd &&
                        (this.emit('loopEnd', e),
                        this._clock.setTicksAtTime(this._loopStart, e),
                        (i = this._loopStart),
                        this.emit(
                          'loopStart',
                          e,
                          this._clock.getSecondsAtTime(e)
                        ),
                        this.emit('loop', e)),
                        this._timeline.forEachAtTime(i, function(t) {
                          t.invoke(e)
                        })
                    }),
                    (t.Transport.prototype.schedule = function(e, i) {
                      var n = new t.TransportEvent(this, {
                        time: t.TransportTime(i),
                        callback: e
                      })
                      return this._addEvent(n, this._timeline)
                    }),
                    (t.Transport.prototype.scheduleRepeat = function(
                      e,
                      i,
                      n,
                      o
                    ) {
                      var r = new t.TransportRepeatEvent(this, {
                        callback: e,
                        interval: t.Time(i),
                        time: t.TransportTime(n),
                        duration: t.Time(t.defaultArg(o, 1 / 0))
                      })
                      return this._addEvent(r, this._repeatedEvents)
                    }),
                    (t.Transport.prototype.scheduleOnce = function(e, i) {
                      var n = new t.TransportEvent(this, {
                        time: t.TransportTime(i),
                        callback: e,
                        once: !0
                      })
                      return this._addEvent(n, this._timeline)
                    }),
                    (t.Transport.prototype.clear = function(t) {
                      if (this._scheduledEvents.hasOwnProperty(t)) {
                        var e = this._scheduledEvents[t.toString()]
                        e.timeline.remove(e.event),
                          e.event.dispose(),
                          delete this._scheduledEvents[t.toString()]
                      }
                      return this
                    }),
                    (t.Transport.prototype._addEvent = function(t, e) {
                      return (
                        (this._scheduledEvents[t.id.toString()] = {
                          event: t,
                          timeline: e
                        }),
                        e.add(t),
                        t.id
                      )
                    }),
                    (t.Transport.prototype.cancel = function(e) {
                      return (
                        (e = t.defaultArg(e, 0)),
                        (e = this.toTicks(e)),
                        this._timeline.forEachFrom(
                          e,
                          function(t) {
                            this.clear(t.id)
                          }.bind(this)
                        ),
                        this._repeatedEvents.forEachFrom(
                          e,
                          function(t) {
                            this.clear(t.id)
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    (t.Transport.prototype._bindClockEvents = function() {
                      this._clock.on(
                        'start',
                        function(e, i) {
                          ;(i = t.Ticks(i).toSeconds()),
                            this.emit('start', e, i)
                        }.bind(this)
                      ),
                        this._clock.on(
                          'stop',
                          function(t) {
                            this.emit('stop', t)
                          }.bind(this)
                        ),
                        this._clock.on(
                          'pause',
                          function(t) {
                            this.emit('pause', t)
                          }.bind(this)
                        )
                    }),
                    Object.defineProperty(t.Transport.prototype, 'state', {
                      get: function() {
                        return this._clock.getStateAtTime(this.now())
                      }
                    }),
                    (t.Transport.prototype.start = function(e, i) {
                      return (
                        t.isDefined(i) && (i = this.toTicks(i)),
                        this._clock.start(e, i),
                        this
                      )
                    }),
                    (t.Transport.prototype.stop = function(t) {
                      return this._clock.stop(t), this
                    }),
                    (t.Transport.prototype.pause = function(t) {
                      return this._clock.pause(t), this
                    }),
                    (t.Transport.prototype.toggle = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._clock.getStateAtTime(e) !== t.State.Started
                          ? this.start(e)
                          : this.stop(e),
                        this
                      )
                    }),
                    Object.defineProperty(
                      t.Transport.prototype,
                      'timeSignature',
                      {
                        get: function() {
                          return this._timeSignature
                        },
                        set: function(e) {
                          t.isArray(e) && (e = (e[0] / e[1]) * 4),
                            (this._timeSignature = e)
                        }
                      }
                    ),
                    Object.defineProperty(t.Transport.prototype, 'loopStart', {
                      get: function() {
                        return t.Ticks(this._loopStart).toSeconds()
                      },
                      set: function(t) {
                        this._loopStart = this.toTicks(t)
                      }
                    }),
                    Object.defineProperty(t.Transport.prototype, 'loopEnd', {
                      get: function() {
                        return t.Ticks(this._loopEnd).toSeconds()
                      },
                      set: function(t) {
                        this._loopEnd = this.toTicks(t)
                      }
                    }),
                    (t.Transport.prototype.setLoopPoints = function(t, e) {
                      return (this.loopStart = t), (this.loopEnd = e), this
                    }),
                    Object.defineProperty(t.Transport.prototype, 'swing', {
                      get: function() {
                        return this._swingAmount
                      },
                      set: function(t) {
                        this._swingAmount = t
                      }
                    }),
                    Object.defineProperty(
                      t.Transport.prototype,
                      'swingSubdivision',
                      {
                        get: function() {
                          return t.Ticks(this._swingTicks).toNotation()
                        },
                        set: function(t) {
                          this._swingTicks = this.toTicks(t)
                        }
                      }
                    ),
                    Object.defineProperty(t.Transport.prototype, 'position', {
                      get: function() {
                        var e = this.now(),
                          i = this._clock.getTicksAtTime(e)
                        return t.Ticks(i).toBarsBeatsSixteenths()
                      },
                      set: function(t) {
                        var e = this.toTicks(t)
                        this.ticks = e
                      }
                    }),
                    Object.defineProperty(t.Transport.prototype, 'seconds', {
                      get: function() {
                        return this._clock.seconds
                      },
                      set: function(t) {
                        var e = this.now(),
                          i = this.bpm.timeToTicks(t, e)
                        this.ticks = i
                      }
                    }),
                    Object.defineProperty(t.Transport.prototype, 'progress', {
                      get: function() {
                        if (this.loop) {
                          var t = this.now()
                          return (
                            (this._clock.getTicksAtTime(t) - this._loopStart) /
                            (this._loopEnd - this._loopStart)
                          )
                        }
                        return 0
                      }
                    }),
                    Object.defineProperty(t.Transport.prototype, 'ticks', {
                      get: function() {
                        return this._clock.ticks
                      },
                      set: function(e) {
                        if (this._clock.ticks !== e) {
                          var i = this.now()
                          this.state === t.State.Started
                            ? (this.emit('stop', i),
                              this._clock.setTicksAtTime(e, i),
                              this.emit('start', i, this.seconds))
                            : this._clock.setTicksAtTime(e, i)
                        }
                      }
                    }),
                    (t.Transport.prototype.getTicksAtTime = function(t) {
                      return Math.round(this._clock.getTicksAtTime(t))
                    }),
                    (t.Transport.prototype.getSecondsAtTime = function(t) {
                      return this._clock.getSecondsAtTime(t)
                    }),
                    Object.defineProperty(t.Transport.prototype, 'PPQ', {
                      get: function() {
                        return this._ppq
                      },
                      set: function(t) {
                        var e = this.bpm.value
                        ;(this._ppq = t), (this.bpm.value = e)
                      }
                    }),
                    (t.Transport.prototype._fromUnits = function(t) {
                      return 1 / (60 / t / this.PPQ)
                    }),
                    (t.Transport.prototype._toUnits = function(t) {
                      return (t / this.PPQ) * 60
                    }),
                    (t.Transport.prototype.nextSubdivision = function(e) {
                      if (
                        ((e = this.toTicks(e)), this.state !== t.State.Started)
                      )
                        return 0
                      var i = this.now(),
                        n = e - (this.getTicksAtTime(i) % e)
                      return this._clock.nextTickTime(n, i)
                    }),
                    (t.Transport.prototype.syncSignal = function(e, i) {
                      if (!i) {
                        var n = this.now()
                        i =
                          0 !== e.getValueAtTime(n)
                            ? e.getValueAtTime(n) / this.bpm.getValueAtTime(n)
                            : 0
                      }
                      var o = new t.Gain(i)
                      return (
                        this.bpm.chain(o, e._param),
                        this._syncedSignals.push({
                          ratio: o,
                          signal: e,
                          initial: e.value
                        }),
                        (e.value = 0),
                        this
                      )
                    }),
                    (t.Transport.prototype.unsyncSignal = function(t) {
                      for (
                        var e = this._syncedSignals.length - 1;
                        e >= 0;
                        e--
                      ) {
                        var i = this._syncedSignals[e]
                        i.signal === t &&
                          (i.ratio.dispose(),
                          (i.signal.value = i.initial),
                          this._syncedSignals.splice(e, 1))
                      }
                      return this
                    }),
                    (t.Transport.prototype.dispose = function() {
                      return (
                        t.Emitter.prototype.dispose.call(this),
                        this._clock.dispose(),
                        (this._clock = null),
                        this._writable('bpm'),
                        (this.bpm = null),
                        this._timeline.dispose(),
                        (this._timeline = null),
                        this._repeatedEvents.dispose(),
                        (this._repeatedEvents = null),
                        this
                      )
                    })
                  var e = t.Transport
                  return (
                    (t.Transport = new e()),
                    t.Context.on('init', function(i) {
                      i.transport && i.transport.isTransport
                        ? (t.Transport = i.transport)
                        : (t.Transport = new e())
                    }),
                    t.Context.on('close', function(t) {
                      t.transport &&
                        t.transport.isTransport &&
                        t.transport.dispose()
                    }),
                    t.Transport
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(6), i(16), i(82)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Oscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type'],
                        t.Oscillator
                      )
                      t.Source.call(this, e),
                        (this._oscillator = null),
                        (this.frequency = new t.Signal(
                          e.frequency,
                          t.Type.Frequency
                        )),
                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                        (this._wave = null),
                        (this._partials = e.partials),
                        (this._partialCount = e.partialCount),
                        (this._phase = e.phase),
                        (this._type = e.type),
                        e.partialCount &&
                          e.type !== t.Oscillator.Type.Custom &&
                          (this._type =
                            this.baseType + e.partialCount.toString()),
                        (this.phase = this._phase),
                        this._readOnly(['frequency', 'detune'])
                    }),
                    t.extend(t.Oscillator, t.Source),
                    (t.Oscillator.defaults = {
                      type: 'sine',
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      partials: [],
                      partialCount: 0
                    }),
                    (t.Oscillator.Type = {
                      Sine: 'sine',
                      Triangle: 'triangle',
                      Sawtooth: 'sawtooth',
                      Square: 'square',
                      Custom: 'custom'
                    }),
                    (t.Oscillator.prototype._start = function(e) {
                      this.log('start', e),
                        (this._oscillator = new t.OscillatorNode()),
                        this._wave
                          ? this._oscillator.setPeriodicWave(this._wave)
                          : (this._oscillator.type = this._type),
                        this._oscillator.connect(this.output),
                        this.frequency.connect(this._oscillator.frequency),
                        this.detune.connect(this._oscillator.detune),
                        (e = this.toSeconds(e)),
                        this._oscillator.start(e)
                    }),
                    (t.Oscillator.prototype._stop = function(t) {
                      return (
                        this.log('stop', t),
                        this._oscillator &&
                          ((t = this.toSeconds(t)), this._oscillator.stop(t)),
                        this
                      )
                    }),
                    (t.Oscillator.prototype.restart = function(t) {
                      return (
                        this._oscillator && this._oscillator.cancelStop(),
                        this._state.cancel(this.toSeconds(t)),
                        this
                      )
                    }),
                    (t.Oscillator.prototype.syncFrequency = function() {
                      return t.Transport.syncSignal(this.frequency), this
                    }),
                    (t.Oscillator.prototype.unsyncFrequency = function() {
                      return t.Transport.unsyncSignal(this.frequency), this
                    }),
                    Object.defineProperty(t.Oscillator.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(t) {
                        var e = this._getRealImaginary(t, this._phase),
                          i = this.context.createPeriodicWave(e[0], e[1])
                        ;(this._wave = i),
                          null !== this._oscillator &&
                            this._oscillator.setPeriodicWave(this._wave),
                          (this._type = t)
                      }
                    }),
                    Object.defineProperty(t.Oscillator.prototype, 'baseType', {
                      get: function() {
                        return this._type.replace(this.partialCount, '')
                      },
                      set: function(e) {
                        this.partialCount &&
                        this._type !== t.Oscillator.Type.Custom &&
                        e !== t.Oscillator.Type.Custom
                          ? (this.type = e + this.partialCount)
                          : (this.type = e)
                      }
                    }),
                    Object.defineProperty(
                      t.Oscillator.prototype,
                      'partialCount',
                      {
                        get: function() {
                          return this._partialCount
                        },
                        set: function(e) {
                          var i = this._type,
                            n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(
                              this._type
                            )
                          n && (i = n[1]),
                            this._type !== t.Oscillator.Type.Custom &&
                              (this.type = 0 === e ? i : i + e.toString())
                        }
                      }
                    ),
                    (t.Oscillator.prototype.get = function() {
                      var e = t.prototype.get.apply(this, arguments)
                      return (
                        e.type !== t.Oscillator.Type.Custom &&
                          delete e.partials,
                        e
                      )
                    }),
                    (t.Oscillator.prototype._getRealImaginary = function(e, i) {
                      var n = 2048,
                        o = new Float32Array(n),
                        r = new Float32Array(n),
                        s = 1
                      if (e === t.Oscillator.Type.Custom)
                        (s = this._partials.length + 1),
                          (this._partialCount = this._partials.length),
                          (n = s)
                      else {
                        var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e)
                        a
                          ? ((s = parseInt(a[2]) + 1),
                            (this._partialCount = parseInt(a[2])),
                            (e = a[1]),
                            (n = s = Math.max(s, 2)))
                          : (this._partialCount = 0),
                          (this._partials = [])
                      }
                      for (var u = 1; u < n; ++u) {
                        var l,
                          c = 2 / (u * Math.PI)
                        switch (e) {
                          case t.Oscillator.Type.Sine:
                            ;(l = u <= s ? 1 : 0), (this._partials[u - 1] = l)
                            break
                          case t.Oscillator.Type.Square:
                            ;(l = 1 & u ? 2 * c : 0),
                              (this._partials[u - 1] = l)
                            break
                          case t.Oscillator.Type.Sawtooth:
                            ;(l = c * (1 & u ? 1 : -1)),
                              (this._partials[u - 1] = l)
                            break
                          case t.Oscillator.Type.Triangle:
                            ;(l =
                              1 & u
                                ? c * c * 2 * (((u - 1) >> 1) & 1 ? -1 : 1)
                                : 0),
                              (this._partials[u - 1] = l)
                            break
                          case t.Oscillator.Type.Custom:
                            l = this._partials[u - 1]
                            break
                          default:
                            throw new TypeError(
                              'Tone.Oscillator: invalid type: ' + e
                            )
                        }
                        0 !== l
                          ? ((o[u] = -l * Math.sin(i * u)),
                            (r[u] = l * Math.cos(i * u)))
                          : ((o[u] = 0), (r[u] = 0))
                      }
                      return [o, r]
                    }),
                    (t.Oscillator.prototype._inverseFFT = function(t, e, i) {
                      for (var n = 0, o = t.length, r = 0; r < o; r++)
                        n += t[r] * Math.cos(r * i) + e[r] * Math.sin(r * i)
                      return n
                    }),
                    (t.Oscillator.prototype._getInitialValue = function() {
                      for (
                        var t = this._getRealImaginary(this._type, 0),
                          e = t[0],
                          i = t[1],
                          n = 0,
                          o = 2 * Math.PI,
                          r = 0;
                        r < 8;
                        r++
                      )
                        n = Math.max(this._inverseFFT(e, i, (r / 8) * o), n)
                      return -this._inverseFFT(e, i, this._phase) / n
                    }),
                    Object.defineProperty(t.Oscillator.prototype, 'partials', {
                      get: function() {
                        return this._partials
                      },
                      set: function(e) {
                        ;(this._partials = e),
                          (this.type = t.Oscillator.Type.Custom)
                      }
                    }),
                    Object.defineProperty(t.Oscillator.prototype, 'phase', {
                      get: function() {
                        return this._phase * (180 / Math.PI)
                      },
                      set: function(t) {
                        ;(this._phase = (t * Math.PI) / 180),
                          (this.type = this._type)
                      }
                    }),
                    (t.Oscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        null !== this._oscillator &&
                          (this._oscillator.dispose(),
                          (this._oscillator = null)),
                        (this._wave = null),
                        this._writable(['frequency', 'detune']),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        (this._partials = null),
                        this
                      )
                    }),
                    t.Oscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(14), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Delay = function() {
                      var e = t.defaults(
                        arguments,
                        ['delayTime', 'maxDelay'],
                        t.Delay
                      )
                      t.AudioNode.call(this, e),
                        (this._maxDelay = Math.max(
                          this.toSeconds(e.maxDelay),
                          this.toSeconds(e.delayTime)
                        )),
                        (this._delayNode = this.input = this.output = this.context.createDelay(
                          this._maxDelay
                        )),
                        (this.delayTime = new t.Param({
                          param: this._delayNode.delayTime,
                          units: t.Type.Time,
                          value: e.delayTime
                        })),
                        this._readOnly('delayTime')
                    }),
                    t.extend(t.Delay, t.AudioNode),
                    (t.Delay.defaults = { maxDelay: 1, delayTime: 0 }),
                    Object.defineProperty(t.Delay.prototype, 'maxDelay', {
                      get: function() {
                        return this._maxDelay
                      }
                    }),
                    (t.Delay.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._delayNode.disconnect(),
                        (this._delayNode = null),
                        this._writable('delayTime'),
                        (this.delayTime = null),
                        this
                      )
                    }),
                    t.Delay
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Split = function() {
                      t.AudioNode.call(this),
                        this.createInsOuts(0, 2),
                        (this._splitter = this.input = this.context.createChannelSplitter(
                          2
                        )),
                        (this.left = this.output[0] = new t.Gain()),
                        (this.right = this.output[1] = new t.Gain()),
                        this._splitter.connect(this.left, 0, 0),
                        this._splitter.connect(this.right, 1, 0)
                    }),
                    t.extend(t.Split, t.AudioNode),
                    (t.Split.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._splitter.disconnect(),
                        this.left.dispose(),
                        (this.left = null),
                        this.right.dispose(),
                        (this.right = null),
                        (this._splitter = null),
                        this
                      )
                    }),
                    t.Split
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(35), i(24), i(34)]),
              void 0 ===
                (o = function(t) {
                  ;(t.Context = function() {
                    t.Emitter.call(this)
                    var i = t.defaults(arguments, ['context'], t.Context)
                    if (
                      !i.context &&
                      ((i.context = new t.global.AudioContext()), !i.context)
                    )
                      throw new Error(
                        'could not create AudioContext. Possibly too many AudioContexts running already.'
                      )
                    for (this._context = i.context; this._context.rawContext; )
                      this._context = this._context.rawContext
                    for (var n in this._context)
                      this._defineProperty(this._context, n)
                    ;(this._latencyHint = i.latencyHint),
                      (this._constants = {}),
                      (this.lookAhead = i.lookAhead),
                      (this._computedUpdateInterval = 0),
                      (this._ticker = new e(
                        this.emit.bind(this, 'tick'),
                        i.clockSource,
                        i.updateInterval
                      )),
                      (this._timeouts = new t.Timeline()),
                      (this._timeoutIds = 0),
                      this.on('tick', this._timeoutLoop.bind(this)),
                      (this._context.onstatechange = function(t) {
                        this.emit('statechange', t)
                      }.bind(this))
                  }),
                    t.extend(t.Context, t.Emitter),
                    t.Emitter.mixin(t.Context),
                    (t.Context.defaults = {
                      clockSource: 'worker',
                      latencyHint: 'interactive',
                      lookAhead: 0.1,
                      updateInterval: 0.03
                    }),
                    (t.Context.prototype.isContext = !0),
                    (t.Context.prototype._defineProperty = function(e, i) {
                      t.isUndef(this[i]) &&
                        Object.defineProperty(this, i, {
                          get: function() {
                            return 'function' == typeof e[i]
                              ? e[i].bind(e)
                              : e[i]
                          },
                          set: function(t) {
                            e[i] = t
                          }
                        })
                    }),
                    (t.Context.prototype.now = function() {
                      return this._context.currentTime + this.lookAhead
                    }),
                    Object.defineProperty(t.Context.prototype, 'destination', {
                      get: function() {
                        return this.master
                          ? this.master
                          : this._context.destination
                      }
                    }),
                    (t.Context.prototype.resume = function() {
                      return 'suspended' === this._context.state &&
                        this._context instanceof AudioContext
                        ? this._context.resume()
                        : Promise.resolve()
                    }),
                    (t.Context.prototype.close = function() {
                      var e = Promise.resolve()
                      return (
                        this !== t.global.TONE_AUDIO_CONTEXT &&
                          (e = this.rawContext.close()),
                        e.then(
                          function() {
                            t.Context.emit('close', this)
                          }.bind(this)
                        )
                      )
                    }),
                    (t.Context.prototype.getConstant = function(t) {
                      if (this._constants[t]) return this._constants[t]
                      for (
                        var e = this._context.createBuffer(
                            1,
                            128,
                            this._context.sampleRate
                          ),
                          i = e.getChannelData(0),
                          n = 0;
                        n < i.length;
                        n++
                      )
                        i[n] = t
                      var o = this._context.createBufferSource()
                      return (
                        (o.channelCount = 1),
                        (o.channelCountMode = 'explicit'),
                        (o.buffer = e),
                        (o.loop = !0),
                        o.start(0),
                        (this._constants[t] = o),
                        o
                      )
                    }),
                    (t.Context.prototype._timeoutLoop = function() {
                      for (
                        var t = this.now();
                        this._timeouts &&
                        this._timeouts.length &&
                        this._timeouts.peek().time <= t;

                      )
                        this._timeouts.shift().callback()
                    }),
                    (t.Context.prototype.setTimeout = function(t, e) {
                      this._timeoutIds++
                      var i = this.now()
                      return (
                        this._timeouts.add({
                          callback: t,
                          time: i + e,
                          id: this._timeoutIds
                        }),
                        this._timeoutIds
                      )
                    }),
                    (t.Context.prototype.clearTimeout = function(t) {
                      return (
                        this._timeouts.forEach(function(e) {
                          e.id === t && this.remove(e)
                        }),
                        this
                      )
                    }),
                    Object.defineProperty(
                      t.Context.prototype,
                      'updateInterval',
                      {
                        get: function() {
                          return this._ticker.updateInterval
                        },
                        set: function(t) {
                          this._ticker.updateInterval = t
                        }
                      }
                    ),
                    Object.defineProperty(t.Context.prototype, 'rawContext', {
                      get: function() {
                        return this._context
                      }
                    }),
                    Object.defineProperty(t.Context.prototype, 'clockSource', {
                      get: function() {
                        return this._ticker.type
                      },
                      set: function(t) {
                        this._ticker.type = t
                      }
                    }),
                    Object.defineProperty(t.Context.prototype, 'latencyHint', {
                      get: function() {
                        return this._latencyHint
                      },
                      set: function(e) {
                        var i = e
                        if (((this._latencyHint = e), t.isString(e)))
                          switch (e) {
                            case 'interactive':
                              ;(i = 0.1), (this._context.latencyHint = e)
                              break
                            case 'playback':
                              ;(i = 0.8), (this._context.latencyHint = e)
                              break
                            case 'balanced':
                              ;(i = 0.25), (this._context.latencyHint = e)
                              break
                            case 'fastest':
                              ;(this._context.latencyHint = 'interactive'),
                                (i = 0.01)
                          }
                        ;(this.lookAhead = i), (this.updateInterval = i / 3)
                      }
                    }),
                    (t.Context.prototype.dispose = function() {
                      return this.close().then(
                        function() {
                          for (var e in (t.Emitter.prototype.dispose.call(this),
                          this._ticker.dispose(),
                          (this._ticker = null),
                          this._timeouts.dispose(),
                          (this._timeouts = null),
                          this._constants))
                            this._constants[e].disconnect()
                          this._constants = null
                        }.bind(this)
                      )
                    })
                  var e = function(e, i, n) {
                    ;(this._type = i),
                      (this._updateInterval = n),
                      (this._callback = t.defaultArg(e, t.noOp)),
                      this._createClock()
                  }
                  if (
                    ((e.Type = {
                      Worker: 'worker',
                      Timeout: 'timeout',
                      Offline: 'offline'
                    }),
                    (e.prototype._createWorker = function() {
                      t.global.URL = t.global.URL || t.global.webkitURL
                      var e = new Blob([
                          'var timeoutTime = ' +
                            (1e3 * this._updateInterval).toFixed(1) +
                            ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"
                        ]),
                        i = URL.createObjectURL(e),
                        n = new Worker(i)
                      ;(n.onmessage = this._callback.bind(this)),
                        (this._worker = n)
                    }),
                    (e.prototype._createTimeout = function() {
                      this._timeout = setTimeout(
                        function() {
                          this._createTimeout(), this._callback()
                        }.bind(this),
                        1e3 * this._updateInterval
                      )
                    }),
                    (e.prototype._createClock = function() {
                      if (this._type === e.Type.Worker)
                        try {
                          this._createWorker()
                        } catch (t) {
                          ;(this._type = e.Type.Timeout), this._createClock()
                        }
                      else
                        this._type === e.Type.Timeout && this._createTimeout()
                    }),
                    Object.defineProperty(e.prototype, 'updateInterval', {
                      get: function() {
                        return this._updateInterval
                      },
                      set: function(t) {
                        ;(this._updateInterval = Math.max(t, 128 / 44100)),
                          this._type === e.Type.Worker &&
                            this._worker.postMessage(Math.max(1e3 * t, 1))
                      }
                    }),
                    Object.defineProperty(e.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(t) {
                        this._disposeClock(),
                          (this._type = t),
                          this._createClock()
                      }
                    }),
                    (e.prototype._disposeClock = function() {
                      this._timeout &&
                        (clearTimeout(this._timeout), (this._timeout = null)),
                        this._worker &&
                          (this._worker.terminate(),
                          (this._worker.onmessage = null),
                          (this._worker = null))
                    }),
                    (e.prototype.dispose = function() {
                      this._disposeClock(), (this._callback = null)
                    }),
                    t.getContext(function() {
                      var e = AudioNode.prototype.connect,
                        i = AudioNode.prototype.disconnect
                      function n(i, n, o) {
                        if (i.input)
                          return (
                            (o = t.defaultArg(o, 0)),
                            t.isArray(i.input)
                              ? this.connect(i.input[o])
                              : this.connect(i.input, n, o)
                          )
                        try {
                          return i instanceof AudioNode
                            ? (e.call(this, i, n, o), i)
                            : (e.call(this, i, n), i)
                        } catch (t) {
                          throw new Error(
                            'error connecting to node: ' + i + '\n' + t
                          )
                        }
                      }
                      AudioNode.prototype.connect !== n &&
                        ((AudioNode.prototype.connect = n),
                        (AudioNode.prototype.disconnect = function(e, n, o) {
                          if (e && e.input && t.isArray(e.input))
                            (o = t.defaultArg(o, 0)),
                              this.disconnect(e.input[o], n, 0)
                          else if (e && e.input) this.disconnect(e.input, n, o)
                          else
                            try {
                              e instanceof AudioParam
                                ? i.call(this, e, n)
                                : i.apply(this, arguments)
                            } catch (t) {
                              throw new Error(
                                'error disconnecting node: ' + e + '\n' + t
                              )
                            }
                        }))
                    }),
                    t.supported && !t.initialized)
                  ) {
                    if (
                      (t.global.TONE_AUDIO_CONTEXT ||
                        (t.global.TONE_AUDIO_CONTEXT = new t.Context()),
                      (t.context = t.global.TONE_AUDIO_CONTEXT),
                      !t.global.TONE_SILENCE_VERSION_LOGGING)
                    ) {
                      var i = 'v'
                      'dev' === t.version && (i = '')
                      var n = ' * Tone.js ' + i + t.version + ' * '
                      console.log('%c' + n, 'background: #000; color: #fff')
                    }
                  } else
                    t.supported ||
                      console.warn('This browser does not support Tone.js')
                  return t.Context
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(4), i(40)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Instrument = function(e) {
                      ;(e = t.defaultArg(e, t.Instrument.defaults)),
                        t.AudioNode.call(this),
                        (this._volume = this.output = new t.Volume(e.volume)),
                        (this.volume = this._volume.volume),
                        this._readOnly('volume'),
                        (this._scheduledEvents = [])
                    }),
                    t.extend(t.Instrument, t.AudioNode),
                    (t.Instrument.defaults = { volume: 0 }),
                    (t.Instrument.prototype.triggerAttack = t.noOp),
                    (t.Instrument.prototype.triggerRelease = t.noOp),
                    (t.Instrument.prototype.sync = function() {
                      return (
                        this._syncMethod('triggerAttack', 1),
                        this._syncMethod('triggerRelease', 0),
                        this
                      )
                    }),
                    (t.Instrument.prototype._syncMethod = function(e, i) {
                      var n = (this['_original_' + e] = this[e])
                      this[e] = function() {
                        var e = Array.prototype.slice.call(arguments),
                          o = e[i],
                          r = t.Transport.schedule(
                            function(t) {
                              ;(e[i] = t), n.apply(this, e)
                            }.bind(this),
                            o
                          )
                        this._scheduledEvents.push(r)
                      }.bind(this)
                    }),
                    (t.Instrument.prototype.unsync = function() {
                      return (
                        this._scheduledEvents.forEach(function(e) {
                          t.Transport.clear(e)
                        }),
                        (this._scheduledEvents = []),
                        this._original_triggerAttack &&
                          ((this.triggerAttack = this._original_triggerAttack),
                          (this.triggerRelease = this._original_triggerRelease)),
                        this
                      )
                    }),
                    (t.Instrument.prototype.triggerAttackRelease = function(
                      t,
                      e,
                      i,
                      n
                    ) {
                      return (
                        (i = this.toSeconds(i)),
                        (e = this.toSeconds(e)),
                        this.triggerAttack(t, i, n),
                        this.triggerRelease(i + e),
                        this
                      )
                    }),
                    (t.Instrument.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._volume.dispose(),
                        (this._volume = null),
                        this._writable(['volume']),
                        (this.volume = null),
                        this.unsync(),
                        (this._scheduledEvents = null),
                        this
                      )
                    }),
                    t.Instrument
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AudioToGain = function() {
                      t.SignalBase.call(this),
                        (this._norm = this.input = this.output = new t.WaveShaper(
                          function(t) {
                            return (t + 1) / 2
                          }
                        ))
                    }),
                    t.extend(t.AudioToGain, t.SignalBase),
                    (t.AudioToGain.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._norm.dispose(),
                        (this._norm = null),
                        this
                      )
                    }),
                    t.AudioToGain
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(13), i(93), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.CrossFade = function(e) {
                      t.AudioNode.call(this),
                        this.createInsOuts(2, 1),
                        (this.a = this.input[0] = new t.Gain()),
                        (this.b = this.input[1] = new t.Gain()),
                        (this.fade = new t.Signal(
                          t.defaultArg(e, 0.5),
                          t.Type.NormalRange
                        )),
                        (this._equalPowerA = new t.EqualPowerGain()),
                        (this._equalPowerB = new t.EqualPowerGain()),
                        (this._one = this.context.getConstant(1)),
                        (this._invert = new t.Subtract()),
                        this.a.connect(this.output),
                        this.b.connect(this.output),
                        this.fade.chain(this._equalPowerB, this.b.gain),
                        this._one.connect(this._invert, 0, 0),
                        this.fade.connect(this._invert, 0, 1),
                        this._invert.chain(this._equalPowerA, this.a.gain),
                        this._readOnly('fade')
                    }),
                    t.extend(t.CrossFade, t.AudioNode),
                    (t.CrossFade.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable('fade'),
                        this._equalPowerA.dispose(),
                        (this._equalPowerA = null),
                        this._equalPowerB.dispose(),
                        (this._equalPowerB = null),
                        this.fade.dispose(),
                        (this.fade = null),
                        this._invert.dispose(),
                        (this._invert = null),
                        (this._one = null),
                        this.a.dispose(),
                        (this.a = null),
                        this.b.dispose(),
                        (this.b = null),
                        this
                      )
                    }),
                    t.CrossFade
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Timeline = function() {
                      var e = t.defaults(arguments, ['memory'], t.Timeline)
                      t.call(this),
                        (this._timeline = []),
                        (this.memory = e.memory)
                    }),
                    t.extend(t.Timeline),
                    (t.Timeline.defaults = { memory: 1 / 0 }),
                    Object.defineProperty(t.Timeline.prototype, 'length', {
                      get: function() {
                        return this._timeline.length
                      }
                    }),
                    (t.Timeline.prototype.add = function(e) {
                      if (t.isUndef(e.time))
                        throw new Error(
                          'Tone.Timeline: events must have a time attribute'
                        )
                      e.time = e.time.valueOf()
                      var i = this._search(e.time)
                      if (
                        (this._timeline.splice(i + 1, 0, e),
                        this.length > this.memory)
                      ) {
                        var n = this.length - this.memory
                        this._timeline.splice(0, n)
                      }
                      return this
                    }),
                    (t.Timeline.prototype.remove = function(t) {
                      var e = this._timeline.indexOf(t)
                      return -1 !== e && this._timeline.splice(e, 1), this
                    }),
                    (t.Timeline.prototype.get = function(e, i) {
                      i = t.defaultArg(i, 'time')
                      var n = this._search(e, i)
                      return -1 !== n ? this._timeline[n] : null
                    }),
                    (t.Timeline.prototype.peek = function() {
                      return this._timeline[0]
                    }),
                    (t.Timeline.prototype.shift = function() {
                      return this._timeline.shift()
                    }),
                    (t.Timeline.prototype.getAfter = function(e, i) {
                      i = t.defaultArg(i, 'time')
                      var n = this._search(e, i)
                      return n + 1 < this._timeline.length
                        ? this._timeline[n + 1]
                        : null
                    }),
                    (t.Timeline.prototype.getBefore = function(e, i) {
                      i = t.defaultArg(i, 'time')
                      var n = this._timeline.length
                      if (n > 0 && this._timeline[n - 1][i] < e)
                        return this._timeline[n - 1]
                      var o = this._search(e, i)
                      return o - 1 >= 0 ? this._timeline[o - 1] : null
                    }),
                    (t.Timeline.prototype.cancel = function(t) {
                      if (this._timeline.length > 1) {
                        var e = this._search(t)
                        if (e >= 0)
                          if (this._timeline[e].time === t) {
                            for (
                              var i = e;
                              i >= 0 && this._timeline[i].time === t;
                              i--
                            )
                              e = i
                            this._timeline = this._timeline.slice(0, e)
                          } else this._timeline = this._timeline.slice(0, e + 1)
                        else this._timeline = []
                      } else
                        1 === this._timeline.length &&
                          this._timeline[0].time >= t &&
                          (this._timeline = [])
                      return this
                    }),
                    (t.Timeline.prototype.cancelBefore = function(t) {
                      var e = this._search(t)
                      return (
                        e >= 0 &&
                          (this._timeline = this._timeline.slice(e + 1)),
                        this
                      )
                    }),
                    (t.Timeline.prototype.previousEvent = function(t) {
                      var e = this._timeline.indexOf(t)
                      return e > 0 ? this._timeline[e - 1] : null
                    }),
                    (t.Timeline.prototype._search = function(e, i) {
                      if (0 === this._timeline.length) return -1
                      i = t.defaultArg(i, 'time')
                      var n = 0,
                        o = this._timeline.length,
                        r = o
                      if (o > 0 && this._timeline[o - 1][i] <= e) return o - 1
                      for (; n < r; ) {
                        var s = Math.floor(n + (r - n) / 2),
                          a = this._timeline[s],
                          u = this._timeline[s + 1]
                        if (a[i] === e) {
                          for (var l = s; l < this._timeline.length; l++)
                            this._timeline[l][i] === e && (s = l)
                          return s
                        }
                        if (a[i] < e && u[i] > e) return s
                        a[i] > e ? (r = s) : (n = s + 1)
                      }
                      return -1
                    }),
                    (t.Timeline.prototype._iterate = function(e, i, n) {
                      ;(i = t.defaultArg(i, 0)),
                        (n = t.defaultArg(n, this._timeline.length - 1)),
                        this._timeline.slice(i, n + 1).forEach(
                          function(t) {
                            e.call(this, t)
                          }.bind(this)
                        )
                    }),
                    (t.Timeline.prototype.forEach = function(t) {
                      return this._iterate(t), this
                    }),
                    (t.Timeline.prototype.forEachBefore = function(t, e) {
                      var i = this._search(t)
                      return -1 !== i && this._iterate(e, 0, i), this
                    }),
                    (t.Timeline.prototype.forEachAfter = function(t, e) {
                      var i = this._search(t)
                      return this._iterate(e, i + 1), this
                    }),
                    (t.Timeline.prototype.forEachBetween = function(t, e, i) {
                      var n = this._search(t),
                        o = this._search(e)
                      return (
                        -1 !== n && -1 !== o
                          ? (this._timeline[n].time !== t && (n += 1),
                            this._timeline[o].time === e && (o -= 1),
                            this._iterate(i, n, o))
                          : -1 === n && this._iterate(i, 0, o),
                        this
                      )
                    }),
                    (t.Timeline.prototype.forEachFrom = function(t, e) {
                      for (
                        var i = this._search(t);
                        i >= 0 && this._timeline[i].time >= t;

                      )
                        i--
                      return this._iterate(e, i + 1), this
                    }),
                    (t.Timeline.prototype.forEachAtTime = function(t, e) {
                      var i = this._search(t)
                      return (
                        -1 !== i &&
                          this._iterate(
                            function(i) {
                              i.time === t && e.call(this, i)
                            },
                            0,
                            i
                          ),
                        this
                      )
                    }),
                    (t.Timeline.prototype.dispose = function() {
                      return (
                        t.prototype.dispose.call(this),
                        (this._timeline = null),
                        this
                      )
                    }),
                    t.Timeline
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(21), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Monophonic = function(e) {
                      ;(e = t.defaultArg(e, t.Monophonic.defaults)),
                        t.Instrument.call(this, e),
                        (this.portamento = e.portamento)
                    }),
                    t.extend(t.Monophonic, t.Instrument),
                    (t.Monophonic.defaults = { portamento: 0 }),
                    (t.Monophonic.prototype.triggerAttack = function(t, e, i) {
                      return (
                        this.log('triggerAttack', t, e, i),
                        (e = this.toSeconds(e)),
                        this._triggerEnvelopeAttack(e, i),
                        this.setNote(t, e),
                        this
                      )
                    }),
                    (t.Monophonic.prototype.triggerRelease = function(t) {
                      return (
                        this.log('triggerRelease', t),
                        (t = this.toSeconds(t)),
                        this._triggerEnvelopeRelease(t),
                        this
                      )
                    }),
                    (t.Monophonic.prototype._triggerEnvelopeAttack = function() {}),
                    (t.Monophonic.prototype._triggerEnvelopeRelease = function() {}),
                    (t.Monophonic.prototype.getLevelAtTime = function(t) {
                      return (
                        (t = this.toSeconds(t)), this.envelope.getValueAtTime(t)
                      )
                    }),
                    (t.Monophonic.prototype.setNote = function(t, e) {
                      if (
                        ((e = this.toSeconds(e)),
                        this.portamento > 0 && this.getLevelAtTime(e) > 0.05)
                      ) {
                        var i = this.toSeconds(this.portamento)
                        this.frequency.exponentialRampTo(t, i, e)
                      } else this.frequency.setValueAtTime(t, e)
                      return this
                    }),
                    t.Monophonic
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(29), i(5), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Scale = function(e, i) {
                      t.SignalBase.call(this),
                        (this._outputMin = t.defaultArg(e, 0)),
                        (this._outputMax = t.defaultArg(i, 1)),
                        (this._scale = this.input = new t.Multiply(1)),
                        (this._add = this.output = new t.Add(0)),
                        this._scale.connect(this._add),
                        this._setRange()
                    }),
                    t.extend(t.Scale, t.SignalBase),
                    Object.defineProperty(t.Scale.prototype, 'min', {
                      get: function() {
                        return this._outputMin
                      },
                      set: function(t) {
                        ;(this._outputMin = t), this._setRange()
                      }
                    }),
                    Object.defineProperty(t.Scale.prototype, 'max', {
                      get: function() {
                        return this._outputMax
                      },
                      set: function(t) {
                        ;(this._outputMax = t), this._setRange()
                      }
                    }),
                    (t.Scale.prototype._setRange = function() {
                      ;(this._add.value = this._outputMin),
                        (this._scale.value = this._outputMax - this._outputMin)
                    }),
                    (t.Scale.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._add.dispose(),
                        (this._add = null),
                        this._scale.dispose(),
                        (this._scale = null),
                        this
                      )
                    }),
                    t.Scale
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Volume = function() {
                      var e = t.defaults(arguments, ['volume'], t.Volume)
                      t.AudioNode.call(this, e),
                        (this.output = this.input = new t.Gain(
                          e.volume,
                          t.Type.Decibels
                        )),
                        (this._unmutedVolume = e.volume),
                        (this.volume = this.output.gain),
                        this._readOnly('volume'),
                        (this.mute = e.mute)
                    }),
                    t.extend(t.Volume, t.AudioNode),
                    (t.Volume.defaults = { volume: 0, mute: !1 }),
                    Object.defineProperty(t.Volume.prototype, 'mute', {
                      get: function() {
                        return this.volume.value === -1 / 0
                      },
                      set: function(t) {
                        !this.mute && t
                          ? ((this._unmutedVolume = this.volume.value),
                            (this.volume.value = -1 / 0))
                          : this.mute &&
                            !t &&
                            (this.volume.value = this._unmutedVolume)
                      }
                    }),
                    (t.Volume.prototype.dispose = function() {
                      return (
                        this.input.dispose(),
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable('volume'),
                        this.volume.dispose(),
                        (this.volume = null),
                        this
                      )
                    }),
                    t.Volume
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(3), i(36)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Zero = function() {
                      t.SignalBase.call(this),
                        (this._gain = this.input = this.output = new t.Gain()),
                        this.context.getConstant(0).connect(this._gain)
                    }),
                    t.extend(t.Zero, t.SignalBase),
                    (t.Zero.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._gain.dispose(),
                        (this._gain = null),
                        this
                      )
                    }),
                    t.Zero
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Add = function(e) {
                      t.Signal.call(this),
                        this.createInsOuts(2, 0),
                        (this._sum = this.input[0] = this.input[1] = this.output = new t.Gain()),
                        (this._param = this.input[1] = new t.Signal(e)),
                        this._param.connect(this._sum),
                        (this.proxy = !1)
                    }),
                    t.extend(t.Add, t.Signal),
                    (t.Add.prototype.dispose = function() {
                      return (
                        t.Signal.prototype.dispose.call(this),
                        this._sum.dispose(),
                        (this._sum = null),
                        this
                      )
                    }),
                    t.Add
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(47), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AmplitudeEnvelope = function() {
                      t.Envelope.apply(this, arguments),
                        (this.input = this.output = new t.Gain()),
                        this._sig.connect(this.output.gain)
                    }),
                    t.extend(t.AmplitudeEnvelope, t.Envelope),
                    (t.AmplitudeEnvelope.prototype.dispose = function() {
                      return t.Envelope.prototype.dispose.call(this), this
                    }),
                    t.AmplitudeEnvelope
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(11), i(6), i(3), i(2), i(63)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.BufferSource = function() {
                      var e = t.defaults(
                        arguments,
                        ['buffer', 'onload'],
                        t.BufferSource
                      )
                      t.AudioNode.call(this, e),
                        (this.onended = e.onended),
                        (this._startTime = -1),
                        (this._sourceStarted = !1),
                        (this._sourceStopped = !1),
                        (this._stopTime = -1),
                        (this._gainNode = this.output = new t.Gain(0)),
                        (this._source = this.context.createBufferSource()),
                        this._source.connect(this._gainNode),
                        (this._source.onended = this._onended.bind(this)),
                        (this._buffer = new t.Buffer(e.buffer, e.onload)),
                        (this.playbackRate = new t.Param({
                          param: this._source.playbackRate,
                          units: t.Type.Positive,
                          value: e.playbackRate
                        })),
                        (this.fadeIn = e.fadeIn),
                        (this.fadeOut = e.fadeOut),
                        (this.curve = e.curve),
                        (this._onendedTimeout = -1),
                        (this.loop = e.loop),
                        (this.loopStart = e.loopStart),
                        (this.loopEnd = e.loopEnd)
                    }),
                    t.extend(t.BufferSource, t.AudioNode),
                    (t.BufferSource.defaults = {
                      onended: t.noOp,
                      onload: t.noOp,
                      loop: !1,
                      loopStart: 0,
                      loopEnd: 0,
                      fadeIn: 0,
                      fadeOut: 0,
                      curve: 'linear',
                      playbackRate: 1
                    }),
                    Object.defineProperty(t.BufferSource.prototype, 'state', {
                      get: function() {
                        return this.getStateAtTime(this.now())
                      }
                    }),
                    (t.BufferSource.prototype.getStateAtTime = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        -1 !== this._startTime &&
                        this._startTime <= e &&
                        (-1 === this._stopTime || e < this._stopTime) &&
                        !this._sourceStopped
                          ? t.State.Started
                          : t.State.Stopped
                      )
                    }),
                    (t.BufferSource.prototype.start = function(e, i, n, o) {
                      this.log('start', e, i, n, o),
                        this.assert(
                          -1 === this._startTime,
                          'can only be started once'
                        ),
                        this.assert(
                          this.buffer.loaded,
                          'buffer is either not set or not loaded'
                        ),
                        this.assert(
                          !this._sourceStopped,
                          'source is already stopped'
                        ),
                        (e = this.toSeconds(e)),
                        (i = this.loop
                          ? t.defaultArg(i, this.loopStart)
                          : t.defaultArg(i, 0)),
                        (i = this.toSeconds(i)),
                        (i = Math.max(i, 0)),
                        (o = t.defaultArg(o, 1))
                      var r = this.toSeconds(this.fadeIn)
                      if (
                        (r > 0
                          ? (this._gainNode.gain.setValueAtTime(0, e),
                            'linear' === this.curve
                              ? this._gainNode.gain.linearRampToValueAtTime(
                                  o,
                                  e + r
                                )
                              : this._gainNode.gain.exponentialApproachValueAtTime(
                                  o,
                                  e,
                                  r
                                ))
                          : this._gainNode.gain.setValueAtTime(o, e),
                        (this._startTime = e),
                        t.isDefined(n))
                      ) {
                        var s = this.toSeconds(n)
                        ;(s = Math.max(s, 0)), this.stop(e + s)
                      }
                      if (this.loop) {
                        var a = this.loopEnd || this.buffer.duration,
                          u = this.loopStart
                        i >= a && (i = ((i - u) % (a - u)) + u)
                      }
                      return (
                        (this._source.buffer = this.buffer.get()),
                        (this._source.loopEnd =
                          this.loopEnd || this.buffer.duration),
                        i < this.buffer.duration &&
                          ((this._sourceStarted = !0),
                          this._source.start(e, i)),
                        this
                      )
                    }),
                    (t.BufferSource.prototype.stop = function(e) {
                      this.log('stop', e),
                        this.assert(
                          this.buffer.loaded,
                          'buffer is either not set or not loaded'
                        ),
                        this.assert(
                          !this._sourceStopped,
                          'source is already stopped'
                        ),
                        (e = this.toSeconds(e)),
                        -1 !== this._stopTime && this.cancelStop()
                      var i = this.toSeconds(this.fadeOut)
                      return (
                        (this._stopTime = e + i),
                        i > 0
                          ? 'linear' === this.curve
                            ? this._gainNode.gain.linearRampTo(0, i, e)
                            : this._gainNode.gain.targetRampTo(0, i, e)
                          : (this._gainNode.gain.cancelAndHoldAtTime(e),
                            this._gainNode.gain.setValueAtTime(0, e)),
                        t.context.clearTimeout(this._onendedTimeout),
                        (this._onendedTimeout = t.context.setTimeout(
                          this._onended.bind(this),
                          this._stopTime - this.now()
                        )),
                        this
                      )
                    }),
                    (t.BufferSource.prototype.cancelStop = function() {
                      if (-1 !== this._startTime && !this._sourceStopped) {
                        var t = this.toSeconds(this.fadeIn)
                        this._gainNode.gain.cancelScheduledValues(
                          this._startTime + t + this.sampleTime
                        ),
                          this.context.clearTimeout(this._onendedTimeout),
                          (this._stopTime = -1)
                      }
                      return this
                    }),
                    (t.BufferSource.prototype._onended = function() {
                      if (!this._sourceStopped) {
                        this._sourceStopped = !0
                        var t =
                          'exponential' === this.curve ? 2 * this.fadeOut : 0
                        this._sourceStarted &&
                          -1 !== this._stopTime &&
                          this._source.stop(this._stopTime + t),
                          this.onended(this)
                      }
                    }),
                    Object.defineProperty(
                      t.BufferSource.prototype,
                      'loopStart',
                      {
                        get: function() {
                          return this._source.loopStart
                        },
                        set: function(t) {
                          this._source.loopStart = this.toSeconds(t)
                        }
                      }
                    ),
                    Object.defineProperty(t.BufferSource.prototype, 'loopEnd', {
                      get: function() {
                        return this._source.loopEnd
                      },
                      set: function(t) {
                        this._source.loopEnd = this.toSeconds(t)
                      }
                    }),
                    Object.defineProperty(t.BufferSource.prototype, 'buffer', {
                      get: function() {
                        return this._buffer
                      },
                      set: function(t) {
                        this._buffer.set(t)
                      }
                    }),
                    Object.defineProperty(t.BufferSource.prototype, 'loop', {
                      get: function() {
                        return this._source.loop
                      },
                      set: function(t) {
                        ;(this._source.loop = t), this.cancelStop()
                      }
                    }),
                    (t.BufferSource.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        (this.onended = null),
                        (this._source.onended = null),
                        this._source.disconnect(),
                        (this._source = null),
                        this._gainNode.dispose(),
                        (this._gainNode = null),
                        this._buffer.dispose(),
                        (this._buffer = null),
                        (this._startTime = -1),
                        (this.playbackRate = null),
                        t.context.clearTimeout(this._onendedTimeout),
                        this
                      )
                    }),
                    t.BufferSource
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(1), i(5), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FeedbackEffect = function() {
                      var e = t.defaults(
                        arguments,
                        ['feedback'],
                        t.FeedbackEffect
                      )
                      t.Effect.call(this, e),
                        (this._feedbackGain = new t.Gain(
                          e.feedback,
                          t.Type.NormalRange
                        )),
                        (this.feedback = this._feedbackGain.gain),
                        this.effectReturn.chain(
                          this._feedbackGain,
                          this.effectSend
                        ),
                        this._readOnly(['feedback'])
                    }),
                    t.extend(t.FeedbackEffect, t.Effect),
                    (t.FeedbackEffect.defaults = { feedback: 0.125 }),
                    (t.FeedbackEffect.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._writable(['feedback']),
                        this._feedbackGain.dispose(),
                        (this._feedbackGain = null),
                        (this.feedback = null),
                        this
                      )
                    }),
                    t.FeedbackEffect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(24), i(4)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.TimelineState = function(e) {
                      t.Timeline.call(this), (this._initial = e)
                    }),
                    t.extend(t.TimelineState, t.Timeline),
                    (t.TimelineState.prototype.getValueAtTime = function(t) {
                      var e = this.get(t)
                      return null !== e ? e.state : this._initial
                    }),
                    (t.TimelineState.prototype.setStateAtTime = function(t, e) {
                      return this.add({ state: t, time: e }), this
                    }),
                    (t.TimelineState.prototype.getLastState = function(t, e) {
                      e = this.toSeconds(e)
                      for (var i = this._search(e); i >= 0; i--) {
                        var n = this._timeline[i]
                        if (n.state === t) return n
                      }
                    }),
                    (t.TimelineState.prototype.getNextState = function(t, e) {
                      e = this.toSeconds(e)
                      var i = this._search(e)
                      if (-1 !== i)
                        for (var n = i; n < this._timeline.length; n++) {
                          var o = this._timeline[n]
                          if (o.state === t) return o
                        }
                    }),
                    t.TimelineState
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(66)]),
              void 0 ===
                (o = function(t) {
                  if (t.supported) {
                    !t.global.hasOwnProperty('AudioContext') &&
                      t.global.hasOwnProperty('webkitAudioContext') &&
                      (t.global.AudioContext = t.global.webkitAudioContext),
                      AudioContext.prototype.close ||
                        (AudioContext.prototype.close = function() {
                          return (
                            t.isFunction(this.suspend) && this.suspend(),
                            Promise.resolve()
                          )
                        }),
                      AudioContext.prototype.resume ||
                        (AudioContext.prototype.resume = function() {
                          var t = this.createBuffer(1, 1, this.sampleRate),
                            e = this.createBufferSource()
                          return (
                            (e.buffer = t),
                            e.connect(this.destination),
                            e.start(0),
                            Promise.resolve()
                          )
                        }),
                      !AudioContext.prototype.createGain &&
                        AudioContext.prototype.createGainNode &&
                        (AudioContext.prototype.createGain =
                          AudioContext.prototype.createGainNode),
                      !AudioContext.prototype.createDelay &&
                        AudioContext.prototype.createDelayNode &&
                        (AudioContext.prototype.createDelay =
                          AudioContext.prototype.createDelayNode)
                    var e = !1,
                      i = new OfflineAudioContext(1, 1, 44100),
                      n = new Uint32Array([
                        1179011410,
                        48,
                        1163280727,
                        544501094,
                        16,
                        131073,
                        44100,
                        176400,
                        1048580,
                        1635017060,
                        8,
                        0,
                        0,
                        0,
                        0
                      ]).buffer
                    try {
                      var o = i.decodeAudioData(n)
                      o && t.isFunction(o.then) && (e = !0)
                    } catch (t) {
                      e = !1
                    }
                    e ||
                      ((AudioContext.prototype._native_decodeAudioData =
                        AudioContext.prototype.decodeAudioData),
                      (AudioContext.prototype.decodeAudioData = function(t) {
                        return new Promise(
                          function(e, i) {
                            this._native_decodeAudioData(t, e, i)
                          }.bind(this)
                        )
                      }))
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Emitter = function() {
                      t.call(this), (this._events = {})
                    }),
                    t.extend(t.Emitter),
                    (t.Emitter.prototype.on = function(t, e) {
                      for (var i = t.split(/\W+/), n = 0; n < i.length; n++) {
                        var o = i[n]
                        this._events.hasOwnProperty(o) ||
                          (this._events[o] = []),
                          this._events[o].push(e)
                      }
                      return this
                    }),
                    (t.Emitter.prototype.once = function(t, e) {
                      var i = function() {
                        e.apply(this, arguments), this.off(t, i)
                      }.bind(this)
                      return this.on(t, i), this
                    }),
                    (t.Emitter.prototype.off = function(e, i) {
                      for (var n = e.split(/\W+/), o = 0; o < n.length; o++)
                        if (((e = n[o]), this._events.hasOwnProperty(e)))
                          if (t.isUndef(i)) this._events[e] = []
                          else
                            for (
                              var r = this._events[e], s = 0;
                              s < r.length;
                              s++
                            )
                              r[s] === i && r.splice(s, 1)
                      return this
                    }),
                    (t.Emitter.prototype.emit = function(t) {
                      if (this._events) {
                        var e = Array.apply(null, arguments).slice(1)
                        if (this._events.hasOwnProperty(t))
                          for (
                            var i = this._events[t].slice(0),
                              n = 0,
                              o = i.length;
                            n < o;
                            n++
                          )
                            i[n].apply(this, e)
                      }
                      return this
                    }),
                    (t.Emitter.mixin = function(e) {
                      var i = ['on', 'once', 'off', 'emit']
                      e._events = {}
                      for (var n = 0; n < i.length; n++) {
                        var o = i[n],
                          r = t.Emitter.prototype[o]
                        e[o] = r
                      }
                      return t.Emitter
                    }),
                    (t.Emitter.prototype.dispose = function() {
                      return (
                        t.prototype.dispose.call(this),
                        (this._events = null),
                        this
                      )
                    }),
                    t.Emitter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.SignalBase = function() {
                      t.AudioNode.call(this)
                    }),
                    t.extend(t.SignalBase, t.AudioNode),
                    (t.SignalBase.prototype.connect = function(e, i, n) {
                      return (
                        (t.Signal && t.Signal === e.constructor) ||
                        (t.Param && t.Param === e.constructor)
                          ? (e._param.cancelScheduledValues(0),
                            e._param.setValueAtTime(0, 0),
                            (e.overridden = !0))
                          : e instanceof AudioParam &&
                            (e.cancelScheduledValues(0),
                            e.setValueAtTime(0, 0)),
                        t.AudioNode.prototype.connect.call(this, e, i, n),
                        this
                      )
                    }),
                    t.SignalBase
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(17), i(49), i(71), i(48), i(70), i(69)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.OmniOscillator = function() {
                    var e = t.defaults(
                      arguments,
                      ['frequency', 'type'],
                      t.OmniOscillator
                    )
                    t.Source.call(this, e),
                      (this.frequency = new t.Signal(
                        e.frequency,
                        t.Type.Frequency
                      )),
                      (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                      (this._sourceType = void 0),
                      (this._oscillator = null),
                      (this.type = e.type),
                      this._readOnly(['frequency', 'detune']),
                      this.set(e)
                  }),
                    t.extend(t.OmniOscillator, t.Source),
                    (t.OmniOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      type: 'sine',
                      phase: 0
                    })
                  var e = 'PulseOscillator',
                    i = 'PWMOscillator',
                    n = 'FMOscillator',
                    o = 'AMOscillator',
                    r = 'FatOscillator'
                  ;(t.OmniOscillator.prototype._start = function(t) {
                    this._oscillator.start(t)
                  }),
                    (t.OmniOscillator.prototype._stop = function(t) {
                      this._oscillator.stop(t)
                    }),
                    (t.OmniOscillator.prototype.restart = function(t) {
                      this._oscillator.restart(t)
                    }),
                    Object.defineProperty(t.OmniOscillator.prototype, 'type', {
                      get: function() {
                        var t = ''
                        return (
                          this._sourceType === n
                            ? (t = 'fm')
                            : this._sourceType === o
                            ? (t = 'am')
                            : this._sourceType === r && (t = 'fat'),
                          t + this._oscillator.type
                        )
                      },
                      set: function(t) {
                        'fm' === t.substr(0, 2)
                          ? (this._createNewOscillator(n),
                            (this._oscillator.type = t.substr(2)))
                          : 'am' === t.substr(0, 2)
                          ? (this._createNewOscillator(o),
                            (this._oscillator.type = t.substr(2)))
                          : 'fat' === t.substr(0, 3)
                          ? (this._createNewOscillator(r),
                            (this._oscillator.type = t.substr(3)))
                          : 'pwm' === t
                          ? this._createNewOscillator(i)
                          : 'pulse' === t
                          ? this._createNewOscillator(e)
                          : (this._createNewOscillator('Oscillator'),
                            (this._oscillator.type = t))
                      }
                    }),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return this._oscillator.partials
                        },
                        set: function(t) {
                          this._oscillator.partials = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'partialCount',
                      {
                        get: function() {
                          return this._oscillator.partialCount
                        },
                        set: function(t) {
                          this._oscillator.partialCount = t
                        }
                      }
                    ),
                    (t.OmniOscillator.prototype.set = function(e, i) {
                      return (
                        'type' === e
                          ? (this.type = i)
                          : t.isObject(e) &&
                            e.hasOwnProperty('type') &&
                            (this.type = e.type),
                        t.prototype.set.apply(this, arguments),
                        this
                      )
                    }),
                    (t.OmniOscillator.prototype.get = function(t) {
                      var e = this._oscillator.get(t)
                      return (e.type = this.type), e
                    }),
                    (t.OmniOscillator.prototype._createNewOscillator = function(
                      e
                    ) {
                      if (e !== this._sourceType) {
                        this._sourceType = e
                        var i = t[e],
                          n = this.now()
                        if (null !== this._oscillator) {
                          var o = this._oscillator
                          o.stop(n),
                            this.context.setTimeout(function() {
                              o.dispose(), (o = null)
                            }, this.blockTime)
                        }
                        ;(this._oscillator = new i()),
                          this.frequency.connect(this._oscillator.frequency),
                          this.detune.connect(this._oscillator.detune),
                          this._oscillator.connect(this.output),
                          this.state === t.State.Started &&
                            this._oscillator.start(n)
                      }
                    }),
                    Object.defineProperty(t.OmniOscillator.prototype, 'phase', {
                      get: function() {
                        return this._oscillator.phase
                      },
                      set: function(t) {
                        this._oscillator.phase = t
                      }
                    })
                  var s = {
                    PulseOscillator: 'pulse',
                    PWMOscillator: 'pwm',
                    Oscillator: 'oscillator',
                    FMOscillator: 'fm',
                    AMOscillator: 'am',
                    FatOscillator: 'fat'
                  }
                  return (
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'sourceType',
                      {
                        get: function() {
                          return s[this._sourceType]
                        },
                        set: function(t) {
                          var e = 'sine'
                          'pwm' !== this._oscillator.type &&
                            'pulse' !== this._oscillator.type &&
                            (e = this._oscillator.type),
                            t === s.FMOscillator
                              ? (this.type = 'fm' + e)
                              : t === s.AMOscillator
                              ? (this.type = 'am' + e)
                              : t === s.FatOscillator
                              ? (this.type = 'fat' + e)
                              : t === s.Oscillator
                              ? (this.type = e)
                              : t === s.PulseOscillator
                              ? (this.type = 'pulse')
                              : t === s.PWMOscillator && (this.type = 'pwm')
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return this._oscillator.baseType
                        },
                        set: function(t) {
                          this.sourceType !== s.PulseOscillator &&
                            this.sourceType !== s.PWMOscillator &&
                            (this._oscillator.baseType = t)
                        }
                      }
                    ),
                    Object.defineProperty(t.OmniOscillator.prototype, 'width', {
                      get: function() {
                        if (this._sourceType === e)
                          return this._oscillator.width
                      }
                    }),
                    Object.defineProperty(t.OmniOscillator.prototype, 'count', {
                      get: function() {
                        if (this._sourceType === r)
                          return this._oscillator.count
                      },
                      set: function(t) {
                        this._sourceType === r && (this._oscillator.count = t)
                      }
                    }),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'spread',
                      {
                        get: function() {
                          if (this._sourceType === r)
                            return this._oscillator.spread
                        },
                        set: function(t) {
                          this._sourceType === r &&
                            (this._oscillator.spread = t)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'modulationType',
                      {
                        get: function() {
                          if (this._sourceType === n || this._sourceType === o)
                            return this._oscillator.modulationType
                        },
                        set: function(t) {
                          ;(this._sourceType !== n && this._sourceType !== o) ||
                            (this._oscillator.modulationType = t)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'modulationIndex',
                      {
                        get: function() {
                          if (this._sourceType === n)
                            return this._oscillator.modulationIndex
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'harmonicity',
                      {
                        get: function() {
                          if (this._sourceType === n || this._sourceType === o)
                            return this._oscillator.harmonicity
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.OmniOscillator.prototype,
                      'modulationFrequency',
                      {
                        get: function() {
                          if (this._sourceType === i)
                            return this._oscillator.modulationFrequency
                        }
                      }
                    ),
                    (t.OmniOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._writable(['frequency', 'detune']),
                        this.detune.dispose(),
                        (this.detune = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this._oscillator.dispose(),
                        (this._oscillator = null),
                        (this._sourceType = null),
                        this
                      )
                    }),
                    t.OmniOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(30), i(37), i(1), i(25)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Synth = function(e) {
                      ;(e = t.defaultArg(e, t.Synth.defaults)),
                        t.Monophonic.call(this, e),
                        (this.oscillator = new t.OmniOscillator(e.oscillator)),
                        (this.frequency = this.oscillator.frequency),
                        (this.detune = this.oscillator.detune),
                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                        this.oscillator.chain(this.envelope, this.output),
                        this._readOnly([
                          'oscillator',
                          'frequency',
                          'detune',
                          'envelope'
                        ])
                    }),
                    t.extend(t.Synth, t.Monophonic),
                    (t.Synth.defaults = {
                      oscillator: { type: 'triangle' },
                      envelope: {
                        attack: 0.005,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1
                      }
                    }),
                    (t.Synth.prototype._triggerEnvelopeAttack = function(t, e) {
                      return (
                        this.envelope.triggerAttack(t, e),
                        this.oscillator.start(t),
                        0 === this.envelope.sustain &&
                          this.oscillator.stop(
                            t + this.envelope.attack + this.envelope.decay
                          ),
                        this
                      )
                    }),
                    (t.Synth.prototype._triggerEnvelopeRelease = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this.envelope.triggerRelease(t),
                        this.oscillator.stop(t + this.envelope.release),
                        this
                      )
                    }),
                    (t.Synth.prototype.dispose = function() {
                      return (
                        t.Monophonic.prototype.dispose.call(this),
                        this._writable([
                          'oscillator',
                          'frequency',
                          'detune',
                          'envelope'
                        ]),
                        this.oscillator.dispose(),
                        (this.oscillator = null),
                        this.envelope.dispose(),
                        (this.envelope = null),
                        (this.frequency = null),
                        (this.detune = null),
                        this
                      )
                    }),
                    t.Synth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(11), i(31)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.Noise = function() {
                    var e = t.defaults(arguments, ['type'], t.Noise)
                    t.Source.call(this, e),
                      (this._source = null),
                      (this._type = e.type),
                      (this._playbackRate = e.playbackRate)
                  }),
                    t.extend(t.Noise, t.Source),
                    (t.Noise.defaults = { type: 'white', playbackRate: 1 }),
                    Object.defineProperty(t.Noise.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(i) {
                        if (this._type !== i) {
                          if (!(i in e))
                            throw new TypeError(
                              'Tone.Noise: invalid type: ' + i
                            )
                          if (
                            ((this._type = i), this.state === t.State.Started)
                          ) {
                            var n = this.now()
                            this._stop(n), this._start(n)
                          }
                        }
                      }
                    }),
                    Object.defineProperty(t.Noise.prototype, 'playbackRate', {
                      get: function() {
                        return this._playbackRate
                      },
                      set: function(t) {
                        ;(this._playbackRate = t),
                          this._source && (this._source.playbackRate.value = t)
                      }
                    }),
                    (t.Noise.prototype._start = function(i) {
                      var n = e[this._type]
                      ;(this._source = new t.BufferSource(n).connect(
                        this.output
                      )),
                        (this._source.loop = !0),
                        (this._source.playbackRate.value = this._playbackRate),
                        this._source.start(
                          this.toSeconds(i),
                          Math.random() * (n.duration - 0.001)
                        )
                    }),
                    (t.Noise.prototype._stop = function(t) {
                      this._source &&
                        (this._source.stop(this.toSeconds(t)),
                        (this._source = null))
                    }),
                    (t.Noise.prototype.restart = function(t) {
                      return this._stop(t), this._start(t), this
                    }),
                    (t.Noise.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        null !== this._source &&
                          (this._source.disconnect(), (this._source = null)),
                        (this._buffer = null),
                        this
                      )
                    })
                  var e = {},
                    i = {}
                  return (
                    Object.defineProperty(e, 'pink', {
                      get: function() {
                        if (!i.pink) {
                          for (var e = [], n = 0; n < 2; n++) {
                            var o,
                              r,
                              s,
                              a,
                              u,
                              l,
                              c,
                              h = new Float32Array(220500)
                            ;(e[n] = h), (o = r = s = a = u = l = c = 0)
                            for (var p = 0; p < 220500; p++) {
                              var f = 2 * Math.random() - 1
                              ;(o = 0.99886 * o + 0.0555179 * f),
                                (r = 0.99332 * r + 0.0750759 * f),
                                (s = 0.969 * s + 0.153852 * f),
                                (a = 0.8665 * a + 0.3104856 * f),
                                (u = 0.55 * u + 0.5329522 * f),
                                (l = -0.7616 * l - 0.016898 * f),
                                (h[p] = o + r + s + a + u + l + c + 0.5362 * f),
                                (h[p] *= 0.11),
                                (c = 0.115926 * f)
                            }
                          }
                          i.pink = new t.Buffer().fromArray(e)
                        }
                        return i.pink
                      }
                    }),
                    Object.defineProperty(e, 'brown', {
                      get: function() {
                        if (!i.brown) {
                          for (var e = [], n = 0; n < 2; n++) {
                            var o = new Float32Array(220500)
                            e[n] = o
                            for (var r = 0, s = 0; s < 220500; s++) {
                              var a = 2 * Math.random() - 1
                              ;(o[s] = (r + 0.02 * a) / 1.02),
                                (r = o[s]),
                                (o[s] *= 3.5)
                            }
                          }
                          i.brown = new t.Buffer().fromArray(e)
                        }
                        return i.brown
                      }
                    }),
                    Object.defineProperty(e, 'white', {
                      get: function() {
                        if (!i.white) {
                          for (var e = [], n = 0; n < 2; n++) {
                            var o = new Float32Array(220500)
                            e[n] = o
                            for (var r = 0; r < 220500; r++)
                              o[r] = 2 * Math.random() - 1
                          }
                          i.white = new t.Buffer().fromArray(e)
                        }
                        return i.white
                      }
                    }),
                    t.Noise
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(27), i(20), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.Master = function() {
                    t.AudioNode.call(this),
                      t.getContext(
                        function() {
                          this.createInsOuts(1, 0),
                            (this._volume = this.output = new t.Volume()),
                            (this.volume = this._volume.volume),
                            this._readOnly('volume'),
                            this.input.chain(
                              this.output,
                              this.context.destination
                            ),
                            (this.context.master = this)
                        }.bind(this)
                      )
                  }),
                    t.extend(t.Master, t.AudioNode),
                    (t.Master.defaults = { volume: 0, mute: !1 }),
                    (t.Master.prototype.isMaster = !0),
                    Object.defineProperty(t.Master.prototype, 'mute', {
                      get: function() {
                        return this._volume.mute
                      },
                      set: function(t) {
                        this._volume.mute = t
                      }
                    }),
                    (t.Master.prototype.chain = function() {
                      this.input.disconnect(),
                        this.input.chain.apply(this.input, arguments),
                        arguments[arguments.length - 1].connect(this.output)
                    }),
                    (t.Master.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this._writable('volume'),
                        this._volume.dispose(),
                        (this._volume = null),
                        (this.volume = null)
                    }),
                    (t.AudioNode.prototype.toMaster = function() {
                      return this.connect(this.context.master), this
                    })
                  var e = t.Master
                  return (
                    (t.Master = new e()),
                    t.Context.on('init', function(i) {
                      i.master && i.master.isMaster
                        ? (t.Master = i.master)
                        : (t.Master = new e())
                    }),
                    t.Context.on('close', function(t) {
                      t.master && t.master.isMaster && t.master.dispose()
                    }),
                    t.Master
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(89), i(47)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FrequencyEnvelope = function() {
                      var e = t.defaults(
                        arguments,
                        ['attack', 'decay', 'sustain', 'release'],
                        t.Envelope
                      )
                      ;(e = t.defaultArg(e, t.FrequencyEnvelope.defaults)),
                        t.ScaledEnvelope.call(this, e),
                        (this._octaves = e.octaves),
                        (this.baseFrequency = e.baseFrequency),
                        (this.octaves = e.octaves),
                        (this.exponent = e.exponent)
                    }),
                    t.extend(t.FrequencyEnvelope, t.Envelope),
                    (t.FrequencyEnvelope.defaults = {
                      baseFrequency: 200,
                      octaves: 4,
                      exponent: 1
                    }),
                    Object.defineProperty(
                      t.FrequencyEnvelope.prototype,
                      'baseFrequency',
                      {
                        get: function() {
                          return this._scale.min
                        },
                        set: function(t) {
                          ;(this._scale.min = this.toFrequency(t)),
                            (this.octaves = this._octaves)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FrequencyEnvelope.prototype,
                      'octaves',
                      {
                        get: function() {
                          return this._octaves
                        },
                        set: function(t) {
                          ;(this._octaves = t),
                            (this._scale.max =
                              this.baseFrequency * Math.pow(2, t))
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FrequencyEnvelope.prototype,
                      'exponent',
                      {
                        get: function() {
                          return this._exp.value
                        },
                        set: function(t) {
                          this._exp.value = t
                        }
                      }
                    ),
                    (t.FrequencyEnvelope.prototype.dispose = function() {
                      return t.ScaledEnvelope.prototype.dispose.call(this), this
                    }),
                    t.FrequencyEnvelope
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(26), i(61)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.ScaleExp = function(e, i, n) {
                      t.SignalBase.call(this),
                        (this._scale = this.output = new t.Scale(e, i)),
                        (this._exp = this.input = new t.Pow(
                          t.defaultArg(n, 2)
                        )),
                        this._exp.connect(this._scale)
                    }),
                    t.extend(t.ScaleExp, t.SignalBase),
                    Object.defineProperty(t.ScaleExp.prototype, 'exponent', {
                      get: function() {
                        return this._exp.value
                      },
                      set: function(t) {
                        this._exp.value = t
                      }
                    }),
                    Object.defineProperty(t.ScaleExp.prototype, 'min', {
                      get: function() {
                        return this._scale.min
                      },
                      set: function(t) {
                        this._scale.min = t
                      }
                    }),
                    Object.defineProperty(t.ScaleExp.prototype, 'max', {
                      get: function() {
                        return this._scale.max
                      },
                      set: function(t) {
                        this._scale.max = t
                      }
                    }),
                    (t.ScaleExp.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._scale.dispose(),
                        (this._scale = null),
                        this._exp.dispose(),
                        (this._exp = null),
                        this
                      )
                    }),
                    t.ScaleExp
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(14), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Compressor = function() {
                      var e = t.defaults(
                        arguments,
                        ['threshold', 'ratio'],
                        t.Compressor
                      )
                      t.AudioNode.call(this),
                        (this._compressor = this.input = this.output = this.context.createDynamicsCompressor()),
                        (this.threshold = new t.Param({
                          param: this._compressor.threshold,
                          units: t.Type.Decibels,
                          convert: !1
                        })),
                        (this.attack = new t.Param(
                          this._compressor.attack,
                          t.Type.Time
                        )),
                        (this.release = new t.Param(
                          this._compressor.release,
                          t.Type.Time
                        )),
                        (this.knee = new t.Param({
                          param: this._compressor.knee,
                          units: t.Type.Decibels,
                          convert: !1
                        })),
                        (this.ratio = new t.Param({
                          param: this._compressor.ratio,
                          convert: !1
                        })),
                        this._readOnly([
                          'knee',
                          'release',
                          'attack',
                          'ratio',
                          'threshold'
                        ]),
                        this.set(e)
                    }),
                    t.extend(t.Compressor, t.AudioNode),
                    (t.Compressor.defaults = {
                      ratio: 12,
                      threshold: -24,
                      release: 0.25,
                      attack: 0.003,
                      knee: 30
                    }),
                    (t.Compressor.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable([
                          'knee',
                          'release',
                          'attack',
                          'ratio',
                          'threshold'
                        ]),
                        this._compressor.disconnect(),
                        (this._compressor = null),
                        this.attack.dispose(),
                        (this.attack = null),
                        this.release.dispose(),
                        (this.release = null),
                        this.threshold.dispose(),
                        (this.threshold = null),
                        this.ratio.dispose(),
                        (this.ratio = null),
                        this.knee.dispose(),
                        (this.knee = null),
                        this
                      )
                    }),
                    t.Compressor
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(2), i(96)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Analyser = function() {
                      var e = t.defaults(
                        arguments,
                        ['type', 'size'],
                        t.Analyser
                      )
                      t.AudioNode.call(this),
                        (this._analyser = this.input = this.output = this.context.createAnalyser()),
                        (this._type = e.type),
                        (this._buffer = null),
                        (this.size = e.size),
                        (this.type = e.type)
                    }),
                    t.extend(t.Analyser, t.AudioNode),
                    (t.Analyser.defaults = {
                      size: 1024,
                      type: 'fft',
                      smoothing: 0.8
                    }),
                    (t.Analyser.Type = { Waveform: 'waveform', FFT: 'fft' }),
                    (t.Analyser.prototype.getValue = function() {
                      return (
                        this._type === t.Analyser.Type.FFT
                          ? this._analyser.getFloatFrequencyData(this._buffer)
                          : this._type === t.Analyser.Type.Waveform &&
                            this._analyser.getFloatTimeDomainData(this._buffer),
                        this._buffer
                      )
                    }),
                    Object.defineProperty(t.Analyser.prototype, 'size', {
                      get: function() {
                        return this._analyser.frequencyBinCount
                      },
                      set: function(t) {
                        ;(this._analyser.fftSize = 2 * t),
                          (this._buffer = new Float32Array(t))
                      }
                    }),
                    Object.defineProperty(t.Analyser.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(e) {
                        if (
                          e !== t.Analyser.Type.Waveform &&
                          e !== t.Analyser.Type.FFT
                        )
                          throw new TypeError(
                            'Tone.Analyser: invalid type: ' + e
                          )
                        this._type = e
                      }
                    }),
                    Object.defineProperty(t.Analyser.prototype, 'smoothing', {
                      get: function() {
                        return this._analyser.smoothingTimeConstant
                      },
                      set: function(t) {
                        this._analyser.smoothingTimeConstant = t
                      }
                    }),
                    (t.Analyser.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this._analyser.disconnect(),
                        (this._analyser = null),
                        (this._buffer = null)
                    }),
                    t.Analyser
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(65)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.TransportTime = function(e, i) {
                      if (!(this instanceof t.TransportTime))
                        return new t.TransportTime(e, i)
                      t.Time.call(this, e, i)
                    }),
                    t.extend(t.TransportTime, t.Time),
                    (t.TransportTime.prototype._now = function() {
                      return t.Transport.seconds
                    }),
                    t.TransportTime
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(64)]),
              void 0 ===
                (o = function(t) {
                  ;(t.Frequency = function(e, i) {
                    if (!(this instanceof t.Frequency))
                      return new t.Frequency(e, i)
                    t.TimeBase.call(this, e, i)
                  }),
                    t.extend(t.Frequency, t.TimeBase),
                    (t.Frequency.prototype._expressions = Object.assign(
                      {},
                      t.TimeBase.prototype._expressions,
                      {
                        midi: {
                          regexp: /^(\d+(?:\.\d+)?midi)/,
                          method: function(e) {
                            return 'midi' === this._defaultUnits
                              ? e
                              : t.Frequency.mtof(e)
                          }
                        },
                        note: {
                          regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                          method: function(i, n) {
                            var o = e[i.toLowerCase()] + 12 * (parseInt(n) + 1)
                            return 'midi' === this._defaultUnits
                              ? o
                              : t.Frequency.mtof(o)
                          }
                        },
                        tr: {
                          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                          method: function(t, e, i) {
                            var n = 1
                            return (
                              t &&
                                '0' !== t &&
                                (n *= this._beatsToUnits(
                                  this._getTimeSignature() * parseFloat(t)
                                )),
                              e &&
                                '0' !== e &&
                                (n *= this._beatsToUnits(parseFloat(e))),
                              i &&
                                '0' !== i &&
                                (n *= this._beatsToUnits(parseFloat(i) / 4)),
                              n
                            )
                          }
                        }
                      }
                    )),
                    (t.Frequency.prototype.transpose = function(e) {
                      return new this.constructor(
                        this.valueOf() * t.intervalToFrequencyRatio(e)
                      )
                    }),
                    (t.Frequency.prototype.harmonize = function(t) {
                      return t.map(
                        function(t) {
                          return this.transpose(t)
                        }.bind(this)
                      )
                    }),
                    (t.Frequency.prototype.toMidi = function() {
                      return t.Frequency.ftom(this.valueOf())
                    }),
                    (t.Frequency.prototype.toNote = function() {
                      var e = this.toFrequency(),
                        n = Math.log2(e / t.Frequency.A4),
                        o = Math.round(12 * n) + 57,
                        r = Math.floor(o / 12)
                      return r < 0 && (o += -12 * r), i[o % 12] + r.toString()
                    }),
                    (t.Frequency.prototype.toSeconds = function() {
                      return 1 / t.TimeBase.prototype.toSeconds.call(this)
                    }),
                    (t.Frequency.prototype.toFrequency = function() {
                      return t.TimeBase.prototype.toFrequency.call(this)
                    }),
                    (t.Frequency.prototype.toTicks = function() {
                      var e = this._beatsToUnits(1),
                        i = this.valueOf() / e
                      return Math.floor(i * t.Transport.PPQ)
                    }),
                    (t.Frequency.prototype._noArg = function() {
                      return 0
                    }),
                    (t.Frequency.prototype._frequencyToUnits = function(t) {
                      return t
                    }),
                    (t.Frequency.prototype._ticksToUnits = function(e) {
                      return (
                        1 /
                        ((60 * e) / (t.Transport.bpm.value * t.Transport.PPQ))
                      )
                    }),
                    (t.Frequency.prototype._beatsToUnits = function(e) {
                      return (
                        1 / t.TimeBase.prototype._beatsToUnits.call(this, e)
                      )
                    }),
                    (t.Frequency.prototype._secondsToUnits = function(t) {
                      return 1 / t
                    }),
                    (t.Frequency.prototype._defaultUnits = 'hz')
                  var e = {
                      cbb: -2,
                      cb: -1,
                      c: 0,
                      'c#': 1,
                      cx: 2,
                      dbb: 0,
                      db: 1,
                      d: 2,
                      'd#': 3,
                      dx: 4,
                      ebb: 2,
                      eb: 3,
                      e: 4,
                      'e#': 5,
                      ex: 6,
                      fbb: 3,
                      fb: 4,
                      f: 5,
                      'f#': 6,
                      fx: 7,
                      gbb: 5,
                      gb: 6,
                      g: 7,
                      'g#': 8,
                      gx: 9,
                      abb: 7,
                      ab: 8,
                      a: 9,
                      'a#': 10,
                      ax: 11,
                      bbb: 9,
                      bb: 10,
                      b: 11,
                      'b#': 12,
                      bx: 13
                    },
                    i = [
                      'C',
                      'C#',
                      'D',
                      'D#',
                      'E',
                      'F',
                      'F#',
                      'G',
                      'G#',
                      'A',
                      'A#',
                      'B'
                    ]
                  return (
                    (t.Frequency.A4 = 440),
                    (t.Frequency.mtof = function(e) {
                      return t.Frequency.A4 * Math.pow(2, (e - 69) / 12)
                    }),
                    (t.Frequency.ftom = function(e) {
                      return 69 + Math.round(12 * Math.log2(e / t.Frequency.A4))
                    }),
                    t.Frequency
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(61), i(4), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Envelope = function() {
                      var e = t.defaults(
                        arguments,
                        ['attack', 'decay', 'sustain', 'release'],
                        t.Envelope
                      )
                      t.AudioNode.call(this),
                        (this.attack = e.attack),
                        (this.decay = e.decay),
                        (this.sustain = e.sustain),
                        (this.release = e.release),
                        (this._attackCurve = 'linear'),
                        (this._releaseCurve = 'exponential'),
                        (this._sig = this.output = new t.Signal(0)),
                        (this.attackCurve = e.attackCurve),
                        (this.releaseCurve = e.releaseCurve),
                        (this.decayCurve = e.decayCurve)
                    }),
                    t.extend(t.Envelope, t.AudioNode),
                    (t.Envelope.defaults = {
                      attack: 0.01,
                      decay: 0.1,
                      sustain: 0.5,
                      release: 1,
                      attackCurve: 'linear',
                      decayCurve: 'exponential',
                      releaseCurve: 'exponential'
                    }),
                    Object.defineProperty(t.Envelope.prototype, 'value', {
                      get: function() {
                        return this.getValueAtTime(this.now())
                      }
                    }),
                    (t.Envelope.prototype._getCurve = function(e, i) {
                      if (t.isString(e)) return e
                      if (t.isArray(e)) {
                        for (var n in t.Envelope.Type)
                          if (t.Envelope.Type[n][i] === e) return n
                        return e
                      }
                    }),
                    (t.Envelope.prototype._setCurve = function(e, i, n) {
                      if (t.Envelope.Type.hasOwnProperty(n)) {
                        var o = t.Envelope.Type[n]
                        t.isObject(o) ? (this[e] = o[i]) : (this[e] = o)
                      } else {
                        if (!t.isArray(n))
                          throw new Error('Tone.Envelope: invalid curve: ' + n)
                        this[e] = n
                      }
                    }),
                    Object.defineProperty(t.Envelope.prototype, 'attackCurve', {
                      get: function() {
                        return this._getCurve(this._attackCurve, 'In')
                      },
                      set: function(t) {
                        this._setCurve('_attackCurve', 'In', t)
                      }
                    }),
                    Object.defineProperty(
                      t.Envelope.prototype,
                      'releaseCurve',
                      {
                        get: function() {
                          return this._getCurve(this._releaseCurve, 'Out')
                        },
                        set: function(t) {
                          this._setCurve('_releaseCurve', 'Out', t)
                        }
                      }
                    ),
                    Object.defineProperty(t.Envelope.prototype, 'decayCurve', {
                      get: function() {
                        return this._decayCurve
                      },
                      set: function(t) {
                        if (!['linear', 'exponential'].includes(t))
                          throw new Error('Tone.Envelope: invalid curve: ' + t)
                        this._decayCurve = t
                      }
                    }),
                    (t.Envelope.prototype.triggerAttack = function(e, i) {
                      this.log('triggerAttack', e, i), (e = this.toSeconds(e))
                      var n = this.toSeconds(this.attack),
                        o = this.toSeconds(this.decay)
                      i = t.defaultArg(i, 1)
                      var r = this.getValueAtTime(e)
                      if (
                        (r > 0 && (n = (1 - r) / (1 / n)),
                        'linear' === this._attackCurve)
                      )
                        this._sig.linearRampTo(i, n, e)
                      else if ('exponential' === this._attackCurve)
                        this._sig.targetRampTo(i, n, e)
                      else if (n > 0) {
                        this._sig.cancelAndHoldAtTime(e)
                        for (
                          var s = this._attackCurve, a = 1;
                          a < s.length;
                          a++
                        )
                          if (s[a - 1] <= r && r <= s[a]) {
                            ;(s = this._attackCurve.slice(a))[0] = r
                            break
                          }
                        this._sig.setValueCurveAtTime(s, e, n, i)
                      }
                      if (o) {
                        var u = i * this.sustain,
                          l = e + n
                        this.log('decay', l),
                          'linear' === this._decayCurve
                            ? this._sig.linearRampTo(u, o, l + this.sampleTime)
                            : 'exponential' === this._decayCurve &&
                              this._sig.exponentialApproachValueAtTime(u, l, o)
                      }
                      return this
                    }),
                    (t.Envelope.prototype.triggerRelease = function(e) {
                      this.log('triggerRelease', e), (e = this.toSeconds(e))
                      var i = this.getValueAtTime(e)
                      if (i > 0) {
                        var n = this.toSeconds(this.release)
                        if ('linear' === this._releaseCurve)
                          this._sig.linearRampTo(0, n, e)
                        else if ('exponential' === this._releaseCurve)
                          this._sig.targetRampTo(0, n, e)
                        else {
                          var o = this._releaseCurve
                          t.isArray(o) &&
                            (this._sig.cancelAndHoldAtTime(e),
                            this._sig.setValueCurveAtTime(o, e, n, i))
                        }
                      }
                      return this
                    }),
                    (t.Envelope.prototype.getValueAtTime = function(t) {
                      return this._sig.getValueAtTime(t)
                    }),
                    (t.Envelope.prototype.triggerAttackRelease = function(
                      t,
                      e,
                      i
                    ) {
                      return (
                        (e = this.toSeconds(e)),
                        this.triggerAttack(e, i),
                        this.triggerRelease(e + this.toSeconds(t)),
                        this
                      )
                    }),
                    (t.Envelope.prototype.cancel = function(t) {
                      return this._sig.cancelScheduledValues(t), this
                    }),
                    (t.Envelope.prototype.connect =
                      t.SignalBase.prototype.connect),
                    (function() {
                      var e,
                        i,
                        n = []
                      for (e = 0; e < 128; e++)
                        n[e] = Math.sin((e / 127) * (Math.PI / 2))
                      var o = []
                      for (e = 0; e < 127; e++) {
                        i = e / 127
                        var r =
                          Math.sin(i * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1
                        o[e] = r / 10 + 0.83 * i
                      }
                      o[127] = 1
                      var s = []
                      for (e = 0; e < 128; e++)
                        s[e] = Math.ceil((e / 127) * 5) / 5
                      var a = []
                      for (e = 0; e < 128; e++)
                        (i = e / 127),
                          (a[e] = 0.5 * (1 - Math.cos(Math.PI * i)))
                      var u,
                        l = []
                      for (e = 0; e < 128; e++) {
                        i = e / 127
                        var c = 4 * Math.pow(i, 3) + 0.2,
                          h = Math.cos(c * Math.PI * 2 * i)
                        l[e] = Math.abs(h * (1 - i))
                      }
                      function p(t) {
                        for (
                          var e = new Array(t.length), i = 0;
                          i < t.length;
                          i++
                        )
                          e[i] = 1 - t[i]
                        return e
                      }
                      t.Envelope.Type = {
                        linear: 'linear',
                        exponential: 'exponential',
                        bounce: { In: p(l), Out: l },
                        cosine: { In: n, Out: ((u = n), u.slice(0).reverse()) },
                        step: { In: s, Out: p(s) },
                        ripple: { In: o, Out: p(o) },
                        sine: { In: a, Out: p(a) }
                      }
                    })(),
                    (t.Envelope.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._sig.dispose(),
                        (this._sig = null),
                        (this._attackCurve = null),
                        (this._releaseCurve = null),
                        this
                      )
                    }),
                    t.Envelope
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(17), i(5), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FMOscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type', 'modulationType'],
                        t.FMOscillator
                      )
                      t.Source.call(this, e),
                        (this._carrier = new t.Oscillator(e.frequency, e.type)),
                        (this.frequency = new t.Signal(
                          e.frequency,
                          t.Type.Frequency
                        )),
                        (this.detune = this._carrier.detune),
                        (this.detune.value = e.detune),
                        (this.modulationIndex = new t.Multiply(
                          e.modulationIndex
                        )),
                        (this.modulationIndex.units = t.Type.Positive),
                        (this._modulator = new t.Oscillator(
                          e.frequency,
                          e.modulationType
                        )),
                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                        (this.harmonicity.units = t.Type.Positive),
                        (this._modulationNode = new t.Gain(0)),
                        this.frequency.connect(this._carrier.frequency),
                        this.frequency.chain(
                          this.harmonicity,
                          this._modulator.frequency
                        ),
                        this.frequency.chain(
                          this.modulationIndex,
                          this._modulationNode
                        ),
                        this._modulator.connect(this._modulationNode.gain),
                        this._modulationNode.connect(this._carrier.frequency),
                        this._carrier.connect(this.output),
                        this.detune.connect(this._modulator.detune),
                        (this.phase = e.phase),
                        this._readOnly([
                          'modulationIndex',
                          'frequency',
                          'detune',
                          'harmonicity'
                        ])
                    }),
                    t.extend(t.FMOscillator, t.Source),
                    (t.FMOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      type: 'sine',
                      modulationIndex: 2,
                      modulationType: 'square',
                      harmonicity: 1
                    }),
                    (t.FMOscillator.prototype._start = function(t) {
                      this._modulator.start(t), this._carrier.start(t)
                    }),
                    (t.FMOscillator.prototype._stop = function(t) {
                      this._modulator.stop(t), this._carrier.stop(t)
                    }),
                    (t.FMOscillator.prototype.restart = function(t) {
                      this._modulator.restart(t), this._carrier.restart(t)
                    }),
                    Object.defineProperty(t.FMOscillator.prototype, 'type', {
                      get: function() {
                        return this._carrier.type
                      },
                      set: function(t) {
                        this._carrier.type = t
                      }
                    }),
                    Object.defineProperty(
                      t.FMOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return this._carrier.baseType
                        },
                        set: function(t) {
                          this._carrier.baseType = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FMOscillator.prototype,
                      'partialCount',
                      {
                        get: function() {
                          return this._carrier.partialCount
                        },
                        set: function(t) {
                          this._carrier.partialCount = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FMOscillator.prototype,
                      'modulationType',
                      {
                        get: function() {
                          return this._modulator.type
                        },
                        set: function(t) {
                          this._modulator.type = t
                        }
                      }
                    ),
                    Object.defineProperty(t.FMOscillator.prototype, 'phase', {
                      get: function() {
                        return this._carrier.phase
                      },
                      set: function(t) {
                        ;(this._carrier.phase = t), (this._modulator.phase = t)
                      }
                    }),
                    Object.defineProperty(
                      t.FMOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return this._carrier.partials
                        },
                        set: function(t) {
                          this._carrier.partials = t
                        }
                      }
                    ),
                    (t.FMOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._writable([
                          'modulationIndex',
                          'frequency',
                          'detune',
                          'harmonicity'
                        ]),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        (this.detune = null),
                        this.harmonicity.dispose(),
                        (this.harmonicity = null),
                        this._carrier.dispose(),
                        (this._carrier = null),
                        this._modulator.dispose(),
                        (this._modulator = null),
                        this._modulationNode.dispose(),
                        (this._modulationNode = null),
                        this.modulationIndex.dispose(),
                        (this.modulationIndex = null),
                        this
                      )
                    }),
                    t.FMOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(17), i(1), i(7), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PulseOscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'width'],
                        t.Oscillator
                      )
                      t.Source.call(this, e),
                        (this.width = new t.Signal(
                          e.width,
                          t.Type.NormalRange
                        )),
                        (this._widthGate = new t.Gain(0)),
                        (this._sawtooth = new t.Oscillator({
                          frequency: e.frequency,
                          detune: e.detune,
                          type: 'sawtooth',
                          phase: e.phase
                        })),
                        (this.frequency = this._sawtooth.frequency),
                        (this.detune = this._sawtooth.detune),
                        (this._thresh = new t.WaveShaper(function(t) {
                          return t < 0 ? -1 : 1
                        })),
                        this._sawtooth.chain(this._thresh, this.output),
                        this.width.chain(this._widthGate, this._thresh),
                        this._readOnly(['width', 'frequency', 'detune'])
                    }),
                    t.extend(t.PulseOscillator, t.Source),
                    (t.PulseOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      width: 0.2
                    }),
                    (t.PulseOscillator.prototype._start = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._sawtooth.start(t),
                        this._widthGate.gain.setValueAtTime(1, t)
                    }),
                    (t.PulseOscillator.prototype._stop = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._sawtooth.stop(t),
                        this._widthGate.gain.setValueAtTime(0, t)
                    }),
                    (t.PulseOscillator.prototype.restart = function(t) {
                      this._sawtooth.restart(t),
                        this._widthGate.gain.cancelScheduledValues(t),
                        this._widthGate.gain.setValueAtTime(1, t)
                    }),
                    Object.defineProperty(
                      t.PulseOscillator.prototype,
                      'phase',
                      {
                        get: function() {
                          return this._sawtooth.phase
                        },
                        set: function(t) {
                          this._sawtooth.phase = t
                        }
                      }
                    ),
                    Object.defineProperty(t.PulseOscillator.prototype, 'type', {
                      get: function() {
                        return 'pulse'
                      }
                    }),
                    Object.defineProperty(
                      t.PulseOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return 'pulse'
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.PulseOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return []
                        }
                      }
                    ),
                    (t.PulseOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._sawtooth.dispose(),
                        (this._sawtooth = null),
                        this._writable(['width', 'frequency', 'detune']),
                        this.width.dispose(),
                        (this.width = null),
                        this._widthGate.dispose(),
                        (this._widthGate = null),
                        this._thresh.dispose(),
                        (this._thresh = null),
                        (this.frequency = null),
                        (this.detune = null),
                        this
                      )
                    }),
                    t.PulseOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(16), i(4), i(33)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Event = function() {
                      var e = t.defaults(
                        arguments,
                        ['callback', 'value'],
                        t.Event
                      )
                      t.call(this),
                        (this._loop = e.loop),
                        (this.callback = e.callback),
                        (this.value = e.value),
                        (this._loopStart = this.toTicks(e.loopStart)),
                        (this._loopEnd = this.toTicks(e.loopEnd)),
                        (this._state = new t.TimelineState(t.State.Stopped)),
                        (this._playbackRate = 1),
                        (this._startOffset = 0),
                        (this._probability = e.probability),
                        (this._humanize = e.humanize),
                        (this.mute = e.mute),
                        (this.playbackRate = e.playbackRate)
                    }),
                    t.extend(t.Event),
                    (t.Event.defaults = {
                      callback: t.noOp,
                      loop: !1,
                      loopEnd: '1m',
                      loopStart: 0,
                      playbackRate: 1,
                      value: null,
                      probability: 1,
                      mute: !1,
                      humanize: !1
                    }),
                    (t.Event.prototype._rescheduleEvents = function(e) {
                      return (
                        (e = t.defaultArg(e, -1)),
                        this._state.forEachFrom(
                          e,
                          function(e) {
                            var i
                            if (e.state === t.State.Started) {
                              t.isDefined(e.id) && t.Transport.clear(e.id)
                              var n =
                                e.time +
                                Math.round(
                                  this.startOffset / this._playbackRate
                                )
                              if (this._loop) {
                                ;(i = 1 / 0),
                                  t.isNumber(this._loop) &&
                                    (i = this._loop * this._getLoopDuration())
                                var o = this._state.getAfter(n)
                                null !== o && (i = Math.min(i, o.time - n)),
                                  i !== 1 / 0 &&
                                    (this._state.setStateAtTime(
                                      t.State.Stopped,
                                      n + i + 1
                                    ),
                                    (i = t.Ticks(i)))
                                var r = t.Ticks(this._getLoopDuration())
                                e.id = t.Transport.scheduleRepeat(
                                  this._tick.bind(this),
                                  r,
                                  t.Ticks(n),
                                  i
                                )
                              } else
                                e.id = t.Transport.schedule(
                                  this._tick.bind(this),
                                  t.Ticks(n)
                                )
                            }
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    Object.defineProperty(t.Event.prototype, 'state', {
                      get: function() {
                        return this._state.getValueAtTime(t.Transport.ticks)
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'startOffset', {
                      get: function() {
                        return this._startOffset
                      },
                      set: function(t) {
                        this._startOffset = t
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'probability', {
                      get: function() {
                        return this._probability
                      },
                      set: function(t) {
                        this._probability = t
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'humanize', {
                      get: function() {
                        return this._humanize
                      },
                      set: function(t) {
                        this._humanize = t
                      }
                    }),
                    (t.Event.prototype.start = function(e) {
                      return (
                        (e = this.toTicks(e)),
                        this._state.getValueAtTime(e) === t.State.Stopped &&
                          (this._state.add({
                            state: t.State.Started,
                            time: e,
                            id: void 0
                          }),
                          this._rescheduleEvents(e)),
                        this
                      )
                    }),
                    (t.Event.prototype.stop = function(e) {
                      if (
                        (this.cancel(e),
                        (e = this.toTicks(e)),
                        this._state.getValueAtTime(e) === t.State.Started)
                      ) {
                        this._state.setStateAtTime(t.State.Stopped, e)
                        var i = this._state.getBefore(e),
                          n = e
                        null !== i && (n = i.time), this._rescheduleEvents(n)
                      }
                      return this
                    }),
                    (t.Event.prototype.cancel = function(e) {
                      return (
                        (e = t.defaultArg(e, -1 / 0)),
                        (e = this.toTicks(e)),
                        this._state.forEachFrom(e, function(e) {
                          t.Transport.clear(e.id)
                        }),
                        this._state.cancel(e),
                        this
                      )
                    }),
                    (t.Event.prototype._tick = function(e) {
                      var i = t.Transport.getTicksAtTime(e)
                      if (
                        !this.mute &&
                        this._state.getValueAtTime(i) === t.State.Started
                      ) {
                        if (
                          this.probability < 1 &&
                          Math.random() > this.probability
                        )
                          return
                        if (this.humanize) {
                          var n = 0.02
                          t.isBoolean(this.humanize) ||
                            (n = this.toSeconds(this.humanize)),
                            (e += (2 * Math.random() - 1) * n)
                        }
                        this.callback(e, this.value)
                      }
                    }),
                    (t.Event.prototype._getLoopDuration = function() {
                      return Math.round(
                        (this._loopEnd - this._loopStart) / this._playbackRate
                      )
                    }),
                    Object.defineProperty(t.Event.prototype, 'loop', {
                      get: function() {
                        return this._loop
                      },
                      set: function(t) {
                        ;(this._loop = t), this._rescheduleEvents()
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'playbackRate', {
                      get: function() {
                        return this._playbackRate
                      },
                      set: function(t) {
                        ;(this._playbackRate = t), this._rescheduleEvents()
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'loopEnd', {
                      get: function() {
                        return t.Ticks(this._loopEnd).toSeconds()
                      },
                      set: function(t) {
                        ;(this._loopEnd = this.toTicks(t)),
                          this._loop && this._rescheduleEvents()
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'loopStart', {
                      get: function() {
                        return t.Ticks(this._loopStart).toSeconds()
                      },
                      set: function(t) {
                        ;(this._loopStart = this.toTicks(t)),
                          this._loop && this._rescheduleEvents()
                      }
                    }),
                    Object.defineProperty(t.Event.prototype, 'progress', {
                      get: function() {
                        if (this._loop) {
                          var e = t.Transport.ticks,
                            i = this._state.get(e)
                          if (null !== i && i.state === t.State.Started) {
                            var n = this._getLoopDuration()
                            return ((e - i.time) % n) / n
                          }
                          return 0
                        }
                        return 0
                      }
                    }),
                    (t.Event.prototype.dispose = function() {
                      this.cancel(),
                        this._state.dispose(),
                        (this._state = null),
                        (this.callback = null),
                        (this.value = null)
                    }),
                    t.Event
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(13), i(29), i(10), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MidSideMerge = function() {
                      t.AudioNode.call(this),
                        this.createInsOuts(2, 0),
                        (this.mid = this.input[0] = new t.Gain()),
                        (this._left = new t.Add()),
                        (this._timesTwoLeft = new t.Multiply(Math.SQRT1_2)),
                        (this.side = this.input[1] = new t.Gain()),
                        (this._right = new t.Subtract()),
                        (this._timesTwoRight = new t.Multiply(Math.SQRT1_2)),
                        (this._merge = this.output = new t.Merge()),
                        this.mid.connect(this._left, 0, 0),
                        this.side.connect(this._left, 0, 1),
                        this.mid.connect(this._right, 0, 0),
                        this.side.connect(this._right, 0, 1),
                        this._left.connect(this._timesTwoLeft),
                        this._right.connect(this._timesTwoRight),
                        this._timesTwoLeft.connect(this._merge, 0, 0),
                        this._timesTwoRight.connect(this._merge, 0, 1)
                    }),
                    t.extend(t.MidSideMerge, t.AudioNode),
                    (t.MidSideMerge.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this.mid.dispose(),
                        (this.mid = null),
                        this.side.dispose(),
                        (this.side = null),
                        this._left.dispose(),
                        (this._left = null),
                        this._timesTwoLeft.dispose(),
                        (this._timesTwoLeft = null),
                        this._right.dispose(),
                        (this._right = null),
                        this._timesTwoRight.dispose(),
                        (this._timesTwoRight = null),
                        this._merge.dispose(),
                        (this._merge = null),
                        this
                      )
                    }),
                    t.MidSideMerge
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(29), i(13), i(1), i(19), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MidSideSplit = function() {
                      t.AudioNode.call(this),
                        this.createInsOuts(0, 2),
                        (this._split = this.input = new t.Split()),
                        (this._midAdd = new t.Add()),
                        (this.mid = this.output[0] = new t.Multiply(
                          Math.SQRT1_2
                        )),
                        (this._sideSubtract = new t.Subtract()),
                        (this.side = this.output[1] = new t.Multiply(
                          Math.SQRT1_2
                        )),
                        this._split.connect(this._midAdd, 0, 0),
                        this._split.connect(this._midAdd, 1, 1),
                        this._split.connect(this._sideSubtract, 0, 0),
                        this._split.connect(this._sideSubtract, 1, 1),
                        this._midAdd.connect(this.mid),
                        this._sideSubtract.connect(this.side)
                    }),
                    t.extend(t.MidSideSplit, t.AudioNode),
                    (t.MidSideSplit.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this.mid.dispose(),
                        (this.mid = null),
                        this.side.dispose(),
                        (this.side = null),
                        this._midAdd.dispose(),
                        (this._midAdd = null),
                        this._sideSubtract.dispose(),
                        (this._sideSubtract = null),
                        this._split.dispose(),
                        (this._split = null),
                        this
                      )
                    }),
                    t.MidSideSplit
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(9), i(2), i(58)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.LowpassCombFilter = function() {
                      var e = t.defaults(
                        arguments,
                        ['delayTime', 'resonance', 'dampening'],
                        t.LowpassCombFilter
                      )
                      t.AudioNode.call(this),
                        (this._combFilter = this.output = new t.FeedbackCombFilter(
                          e.delayTime,
                          e.resonance
                        )),
                        (this.delayTime = this._combFilter.delayTime),
                        (this._lowpass = this.input = new t.Filter({
                          frequency: e.dampening,
                          type: 'lowpass',
                          Q: 0,
                          rolloff: -12
                        })),
                        (this.dampening = this._lowpass.frequency),
                        (this.resonance = this._combFilter.resonance),
                        this._lowpass.connect(this._combFilter),
                        this._readOnly(['dampening', 'resonance', 'delayTime'])
                    }),
                    t.extend(t.LowpassCombFilter, t.AudioNode),
                    (t.LowpassCombFilter.defaults = {
                      delayTime: 0.1,
                      resonance: 0.5,
                      dampening: 3e3
                    }),
                    (t.LowpassCombFilter.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['dampening', 'resonance', 'delayTime']),
                        this._combFilter.dispose(),
                        (this._combFilter = null),
                        (this.resonance = null),
                        (this.delayTime = null),
                        this._lowpass.dispose(),
                        (this._lowpass = null),
                        (this.dampening = null),
                        this
                      )
                    }),
                    t.LowpassCombFilter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(45)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Ticks = function(e, i) {
                      if (!(this instanceof t.Ticks)) return new t.Ticks(e, i)
                      t.TransportTime.call(this, e, i)
                    }),
                    t.extend(t.Ticks, t.TransportTime),
                    (t.Ticks.prototype._defaultUnits = 'i'),
                    (t.Ticks.prototype._now = function() {
                      return t.Transport.ticks
                    }),
                    (t.Ticks.prototype._beatsToUnits = function(t) {
                      return this._getPPQ() * t
                    }),
                    (t.Ticks.prototype._secondsToUnits = function(t) {
                      return Math.floor(
                        (t / (60 / this._getBpm())) * this._getPPQ()
                      )
                    }),
                    (t.Ticks.prototype._ticksToUnits = function(t) {
                      return t
                    }),
                    (t.Ticks.prototype.toTicks = function() {
                      return this.valueOf()
                    }),
                    (t.Ticks.prototype.toSeconds = function() {
                      return (
                        (this.valueOf() / this._getPPQ()) *
                        (60 / this._getBpm())
                      )
                    }),
                    t.Ticks
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(54)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.TransportEvent = function(e, i) {
                      ;(i = t.defaultArg(i, t.TransportEvent.defaults)),
                        t.call(this),
                        (this.Transport = e),
                        (this.id = t.TransportEvent._eventId++),
                        (this.time = t.Ticks(i.time)),
                        (this.callback = i.callback),
                        (this._once = i.once)
                    }),
                    t.extend(t.TransportEvent),
                    (t.TransportEvent.defaults = {
                      once: !1,
                      callback: t.noOp
                    }),
                    (t.TransportEvent._eventId = 0),
                    (t.TransportEvent.prototype.invoke = function(t) {
                      this.callback &&
                        (this.callback(t),
                        this._once &&
                          this.Transport &&
                          this.Transport.clear(this.id))
                    }),
                    (t.TransportEvent.prototype.dispose = function() {
                      return (
                        t.prototype.dispose.call(this),
                        (this.Transport = null),
                        (this.callback = null),
                        (this.time = null),
                        this
                      )
                    }),
                    t.TransportEvent
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(85), i(33), i(24), i(14)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.TickSource = function() {
                      var e = t.defaults(arguments, ['frequency'], t.TickSource)
                      ;(this.frequency = new t.TickSignal(e.frequency)),
                        this._readOnly('frequency'),
                        (this._state = new t.TimelineState(t.State.Stopped)),
                        this._state.setStateAtTime(t.State.Stopped, 0),
                        (this._tickOffset = new t.Timeline()),
                        this.setTicksAtTime(0, 0)
                    }),
                    t.extend(t.TickSource),
                    (t.TickSource.defaults = { frequency: 1 }),
                    Object.defineProperty(t.TickSource.prototype, 'state', {
                      get: function() {
                        return this._state.getValueAtTime(this.now())
                      }
                    }),
                    (t.TickSource.prototype.start = function(e, i) {
                      return (
                        (e = this.toSeconds(e)),
                        this._state.getValueAtTime(e) !== t.State.Started &&
                          (this._state.setStateAtTime(t.State.Started, e),
                          t.isDefined(i) && this.setTicksAtTime(i, e)),
                        this
                      )
                    }),
                    (t.TickSource.prototype.stop = function(e) {
                      if (
                        ((e = this.toSeconds(e)),
                        this._state.getValueAtTime(e) === t.State.Stopped)
                      ) {
                        var i = this._state.get(e)
                        i.time > 0 &&
                          (this._tickOffset.cancel(i.time),
                          this._state.cancel(i.time))
                      }
                      return (
                        this._state.cancel(e),
                        this._state.setStateAtTime(t.State.Stopped, e),
                        this.setTicksAtTime(0, e),
                        this
                      )
                    }),
                    (t.TickSource.prototype.pause = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._state.getValueAtTime(e) === t.State.Started &&
                          this._state.setStateAtTime(t.State.Paused, e),
                        this
                      )
                    }),
                    (t.TickSource.prototype.cancel = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this._state.cancel(t),
                        this._tickOffset.cancel(t),
                        this
                      )
                    }),
                    (t.TickSource.prototype.getTicksAtTime = function(e) {
                      e = this.toSeconds(e)
                      var i = this._state.getLastState(t.State.Stopped, e),
                        n = { state: t.State.Paused, time: e }
                      this._state.add(n)
                      var o = i,
                        r = 0
                      return (
                        this._state.forEachBetween(
                          i.time,
                          e + this.sampleTime,
                          function(e) {
                            var i = o.time,
                              n = this._tickOffset.get(e.time)
                            n.time >= o.time && ((r = n.ticks), (i = n.time)),
                              o.state === t.State.Started &&
                                e.state !== t.State.Started &&
                                (r +=
                                  this.frequency.getTicksAtTime(e.time) -
                                  this.frequency.getTicksAtTime(i)),
                              (o = e)
                          }.bind(this)
                        ),
                        this._state.remove(n),
                        r
                      )
                    }),
                    Object.defineProperty(t.TickSource.prototype, 'ticks', {
                      get: function() {
                        return this.getTicksAtTime(this.now())
                      },
                      set: function(t) {
                        this.setTicksAtTime(t, this.now())
                      }
                    }),
                    Object.defineProperty(t.TickSource.prototype, 'seconds', {
                      get: function() {
                        return this.getSecondsAtTime(this.now())
                      },
                      set: function(t) {
                        var e = this.now(),
                          i = this.frequency.timeToTicks(t, e)
                        this.setTicksAtTime(i, e)
                      }
                    }),
                    (t.TickSource.prototype.getSecondsAtTime = function(e) {
                      e = this.toSeconds(e)
                      var i = this._state.getLastState(t.State.Stopped, e),
                        n = { state: t.State.Paused, time: e }
                      this._state.add(n)
                      var o = i,
                        r = 0
                      return (
                        this._state.forEachBetween(
                          i.time,
                          e + this.sampleTime,
                          function(e) {
                            var i = o.time,
                              n = this._tickOffset.get(e.time)
                            n.time >= o.time && ((r = n.seconds), (i = n.time)),
                              o.state === t.State.Started &&
                                e.state !== t.State.Started &&
                                (r += e.time - i),
                              (o = e)
                          }.bind(this)
                        ),
                        this._state.remove(n),
                        r
                      )
                    }),
                    (t.TickSource.prototype.setTicksAtTime = function(t, e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._tickOffset.cancel(e),
                        this._tickOffset.add({
                          time: e,
                          ticks: t,
                          seconds: this.frequency.getDurationOfTicks(t, e)
                        }),
                        this
                      )
                    }),
                    (t.TickSource.prototype.getStateAtTime = function(t) {
                      return (
                        (t = this.toSeconds(t)), this._state.getValueAtTime(t)
                      )
                    }),
                    (t.TickSource.prototype.getTimeOfTick = function(e, i) {
                      i = t.defaultArg(i, this.now())
                      var n = this._tickOffset.get(i),
                        o = this._state.get(i),
                        r = Math.max(n.time, o.time),
                        s = this.frequency.getTicksAtTime(r) + e - n.ticks
                      return this.frequency.getTimeOfTick(s)
                    }),
                    (t.TickSource.prototype.forEachTickBetween = function(
                      e,
                      i,
                      n
                    ) {
                      var o = this._state.get(e)
                      if (
                        (this._state.forEachBetween(
                          e,
                          i,
                          function(i) {
                            o.state === t.State.Started &&
                              i.state !== t.State.Started &&
                              this.forEachTickBetween(
                                Math.max(o.time, e),
                                i.time - this.sampleTime,
                                n
                              ),
                              (o = i)
                          }.bind(this)
                        ),
                        (e = Math.max(o.time, e)),
                        o.state === t.State.Started && this._state)
                      ) {
                        var r = this.frequency.getTicksAtTime(e),
                          s = (r - this.frequency.getTicksAtTime(o.time)) % 1
                        0 !== s && (s = 1 - s)
                        for (
                          var a = this.frequency.getTimeOfTick(r + s), u = null;
                          a < i && this._state;

                        ) {
                          try {
                            n(a, Math.round(this.getTicksAtTime(a)))
                          } catch (t) {
                            u = t
                            break
                          }
                          this._state &&
                            (a += this.frequency.getDurationOfTicks(1, a))
                        }
                      }
                      if (u) throw u
                      return this
                    }),
                    (t.TickSource.prototype.dispose = function() {
                      return (
                        t.Param.prototype.dispose.call(this),
                        this._state.dispose(),
                        (this._state = null),
                        this._tickOffset.dispose(),
                        (this._tickOffset = null),
                        this._writable('frequency'),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this
                      )
                    }),
                    t.TickSource
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(90), i(13), i(1), i(4), i(18), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Follower = function() {
                      var e = t.defaults(arguments, ['smoothing'], t.Follower)
                      t.AudioNode.call(this),
                        this.createInsOuts(1, 1),
                        (this._abs = new t.Abs()),
                        (this._filter = this.context.createBiquadFilter()),
                        (this._filter.type = 'lowpass'),
                        (this._filter.frequency.value = 0),
                        (this._filter.Q.value = 0),
                        (this._sub = new t.Subtract()),
                        (this._delay = new t.Delay(this.blockTime)),
                        (this._smoothing = e.smoothing),
                        this.input.connect(this._delay, this._sub),
                        this.input.connect(this._sub, 0, 1),
                        this._sub.chain(this._abs, this._filter, this.output),
                        (this.smoothing = e.smoothing)
                    }),
                    t.extend(t.Follower, t.AudioNode),
                    (t.Follower.defaults = { smoothing: 0.05 }),
                    Object.defineProperty(t.Follower.prototype, 'smoothing', {
                      get: function() {
                        return this._smoothing
                      },
                      set: function(e) {
                        ;(this._smoothing = e),
                          (this._filter.frequency.value =
                            0.5 * t.Time(e).toFrequency())
                      }
                    }),
                    (t.Follower.prototype.connect =
                      t.SignalBase.prototype.connect),
                    (t.Follower.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._filter.disconnect(),
                        (this._filter = null),
                        this._delay.dispose(),
                        (this._delay = null),
                        this._sub.disconnect(),
                        (this._sub = null),
                        this._abs.dispose(),
                        (this._abs = null),
                        this
                      )
                    }),
                    t.Follower
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(42), i(1), i(14), i(18), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FeedbackCombFilter = function() {
                      var e = t.defaults(
                        arguments,
                        ['delayTime', 'resonance'],
                        t.FeedbackCombFilter
                      )
                      t.AudioNode.call(this),
                        (this._delay = this.input = this.output = new t.Delay(
                          e.delayTime
                        )),
                        (this.delayTime = this._delay.delayTime),
                        (this._feedback = new t.Gain(
                          e.resonance,
                          t.Type.NormalRange
                        )),
                        (this.resonance = this._feedback.gain),
                        this._delay.chain(this._feedback, this._delay),
                        this._readOnly(['resonance', 'delayTime'])
                    }),
                    t.extend(t.FeedbackCombFilter, t.AudioNode),
                    (t.FeedbackCombFilter.defaults = {
                      delayTime: 0.1,
                      resonance: 0.5
                    }),
                    (t.FeedbackCombFilter.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['resonance', 'delayTime']),
                        this._delay.dispose(),
                        (this._delay = null),
                        (this.delayTime = null),
                        this._feedback.dispose(),
                        (this._feedback = null),
                        (this.resonance = null),
                        this
                      )
                    }),
                    t.FeedbackCombFilter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(9), i(1), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MultibandSplit = function() {
                      var e = t.defaults(
                        arguments,
                        ['lowFrequency', 'highFrequency'],
                        t.MultibandSplit
                      )
                      t.AudioNode.call(this),
                        (this.input = new t.Gain()),
                        (this.output = new Array(3)),
                        (this.low = this.output[0] = new t.Filter(
                          0,
                          'lowpass'
                        )),
                        (this._lowMidFilter = new t.Filter(0, 'highpass')),
                        (this.mid = this.output[1] = new t.Filter(
                          0,
                          'lowpass'
                        )),
                        (this.high = this.output[2] = new t.Filter(
                          0,
                          'highpass'
                        )),
                        (this.lowFrequency = new t.Signal(
                          e.lowFrequency,
                          t.Type.Frequency
                        )),
                        (this.highFrequency = new t.Signal(
                          e.highFrequency,
                          t.Type.Frequency
                        )),
                        (this.Q = new t.Signal(e.Q)),
                        this.input.fan(this.low, this.high),
                        this.input.chain(this._lowMidFilter, this.mid),
                        this.lowFrequency.connect(this.low.frequency),
                        this.lowFrequency.connect(this._lowMidFilter.frequency),
                        this.highFrequency.connect(this.mid.frequency),
                        this.highFrequency.connect(this.high.frequency),
                        this.Q.connect(this.low.Q),
                        this.Q.connect(this._lowMidFilter.Q),
                        this.Q.connect(this.mid.Q),
                        this.Q.connect(this.high.Q),
                        this._readOnly([
                          'high',
                          'mid',
                          'low',
                          'highFrequency',
                          'lowFrequency'
                        ])
                    }),
                    t.extend(t.MultibandSplit, t.AudioNode),
                    (t.MultibandSplit.defaults = {
                      lowFrequency: 400,
                      highFrequency: 2500,
                      Q: 1
                    }),
                    (t.MultibandSplit.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable([
                          'high',
                          'mid',
                          'low',
                          'highFrequency',
                          'lowFrequency'
                        ]),
                        this.low.dispose(),
                        (this.low = null),
                        this._lowMidFilter.dispose(),
                        (this._lowMidFilter = null),
                        this.mid.dispose(),
                        (this.mid = null),
                        this.high.dispose(),
                        (this.high = null),
                        this.lowFrequency.dispose(),
                        (this.lowFrequency = null),
                        this.highFrequency.dispose(),
                        (this.highFrequency = null),
                        this.Q.dispose(),
                        (this.Q = null),
                        this
                      )
                    }),
                    t.MultibandSplit
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(23), i(10), i(19), i(92), i(1), i(22), i(28), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Panner = function(e) {
                      t.AudioNode.call(this),
                        (this._panner = this.input = this.output = this.context.createStereoPanner()),
                        (this.pan = this._panner.pan),
                        (this.pan.value = t.defaultArg(e, 0)),
                        this._readOnly('pan')
                    }),
                    t.extend(t.Panner, t.AudioNode),
                    (t.Panner.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable('pan'),
                        this._panner.disconnect(),
                        (this._panner = null),
                        (this.pan = null),
                        this
                      )
                    }),
                    t.Panner
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Pow = function(e) {
                      t.SignalBase.call(this),
                        (this._exp = t.defaultArg(e, 1)),
                        (this._expScaler = this.input = this.output = new t.WaveShaper(
                          this._expFunc(this._exp),
                          8192
                        ))
                    }),
                    t.extend(t.Pow, t.SignalBase),
                    Object.defineProperty(t.Pow.prototype, 'value', {
                      get: function() {
                        return this._exp
                      },
                      set: function(t) {
                        ;(this._exp = t),
                          this._expScaler.setMap(this._expFunc(this._exp))
                      }
                    }),
                    (t.Pow.prototype._expFunc = function(t) {
                      return function(e) {
                        return Math.pow(Math.abs(e), t)
                      }
                    }),
                    (t.Pow.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._expScaler.dispose(),
                        (this._expScaler = null),
                        this
                      )
                    }),
                    t.Pow
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(20), i(66)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.OfflineContext = function(e, i, n) {
                      var o = new OfflineAudioContext(e, i * n, n)
                      t.Context.call(this, {
                        context: o,
                        clockSource: 'offline',
                        lookAhead: 0,
                        updateInterval: 128 / n
                      }),
                        (this._duration = i),
                        (this._currentTime = 0)
                    }),
                    t.extend(t.OfflineContext, t.Context),
                    (t.OfflineContext.prototype.now = function() {
                      return this._currentTime
                    }),
                    (t.OfflineContext.prototype.resume = function() {
                      return Promise.resolve()
                    }),
                    (t.OfflineContext.prototype.render = function() {
                      for (; this._duration - this._currentTime >= 0; )
                        this.emit('tick'), (this._currentTime += this.blockTime)
                      return this._context.startRendering()
                    }),
                    (t.OfflineContext.prototype.close = function() {
                      return (this._context = null), Promise.resolve()
                    }),
                    t.OfflineContext
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(62)]),
              void 0 ===
                (o = function(t) {
                  if (t.supported) {
                    var e = navigator.userAgent.toLowerCase()
                    e.includes('safari') &&
                      !e.includes('chrome') &&
                      e.includes('mobile') &&
                      (t.OfflineContext.prototype.createBufferSource = function() {
                        var t = this._context.createBufferSource(),
                          e = t.start
                        return (
                          (t.start = function(i) {
                            this.setTimeout(
                              function() {
                                e.call(t, i)
                              }.bind(this),
                              0
                            )
                          }.bind(this)),
                          t
                        )
                      })
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.TimeBase = function(e, i) {
                      if (!(this instanceof t.TimeBase))
                        return new t.TimeBase(e, i)
                      if (
                        ((this._val = e),
                        (this._units = i),
                        t.isUndef(this._units) &&
                          t.isString(this._val) &&
                          parseFloat(this._val) == this._val &&
                          '+' !== this._val.charAt(0))
                      )
                        (this._val = parseFloat(this._val)),
                          (this._units = this._defaultUnits)
                      else if (e && e.constructor === this.constructor)
                        (this._val = e._val), (this._units = e._units)
                      else if (e instanceof t.TimeBase)
                        switch (this._defaultUnits) {
                          case 's':
                            this._val = e.toSeconds()
                            break
                          case 'i':
                            this._val = e.toTicks()
                            break
                          case 'hz':
                            this._val = e.toFrequency()
                            break
                          case 'midi':
                            this._val = e.toMidi()
                            break
                          default:
                            throw new Error(
                              'Unrecognized default units ' + this._defaultUnits
                            )
                        }
                    }),
                    t.extend(t.TimeBase),
                    (t.TimeBase.prototype._expressions = {
                      n: {
                        regexp: /^(\d+)n(\.?)$/i,
                        method: function(t, e) {
                          t = parseInt(t)
                          var i = '.' === e ? 1.5 : 1
                          return 1 === t
                            ? this._beatsToUnits(this._getTimeSignature()) * i
                            : this._beatsToUnits(4 / t) * i
                        }
                      },
                      t: {
                        regexp: /^(\d+)t$/i,
                        method: function(t) {
                          return (
                            (t = parseInt(t)),
                            this._beatsToUnits(8 / (3 * parseInt(t)))
                          )
                        }
                      },
                      m: {
                        regexp: /^(\d+)m$/i,
                        method: function(t) {
                          return this._beatsToUnits(
                            parseInt(t) * this._getTimeSignature()
                          )
                        }
                      },
                      i: {
                        regexp: /^(\d+)i$/i,
                        method: function(t) {
                          return this._ticksToUnits(parseInt(t))
                        }
                      },
                      hz: {
                        regexp: /^(\d+(?:\.\d+)?)hz$/i,
                        method: function(t) {
                          return this._frequencyToUnits(parseFloat(t))
                        }
                      },
                      tr: {
                        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                        method: function(t, e, i) {
                          var n = 0
                          return (
                            t &&
                              '0' !== t &&
                              (n += this._beatsToUnits(
                                this._getTimeSignature() * parseFloat(t)
                              )),
                            e &&
                              '0' !== e &&
                              (n += this._beatsToUnits(parseFloat(e))),
                            i &&
                              '0' !== i &&
                              (n += this._beatsToUnits(parseFloat(i) / 4)),
                            n
                          )
                        }
                      },
                      s: {
                        regexp: /^(\d+(?:\.\d+)?)s$/,
                        method: function(t) {
                          return this._secondsToUnits(parseFloat(t))
                        }
                      },
                      samples: {
                        regexp: /^(\d+)samples$/,
                        method: function(t) {
                          return parseInt(t) / this.context.sampleRate
                        }
                      },
                      default: {
                        regexp: /^(\d+(?:\.\d+)?)$/,
                        method: function(t) {
                          return this._expressions[
                            this._defaultUnits
                          ].method.call(this, t)
                        }
                      }
                    }),
                    (t.TimeBase.prototype._defaultUnits = 's'),
                    (t.TimeBase.prototype._getBpm = function() {
                      return t.Transport ? t.Transport.bpm.value : 120
                    }),
                    (t.TimeBase.prototype._getTimeSignature = function() {
                      return t.Transport ? t.Transport.timeSignature : 4
                    }),
                    (t.TimeBase.prototype._getPPQ = function() {
                      return t.Transport ? t.Transport.PPQ : 192
                    }),
                    (t.TimeBase.prototype._now = function() {
                      return this.now()
                    }),
                    (t.TimeBase.prototype._frequencyToUnits = function(t) {
                      return 1 / t
                    }),
                    (t.TimeBase.prototype._beatsToUnits = function(t) {
                      return (60 / this._getBpm()) * t
                    }),
                    (t.TimeBase.prototype._secondsToUnits = function(t) {
                      return t
                    }),
                    (t.TimeBase.prototype._ticksToUnits = function(t) {
                      return t * (this._beatsToUnits(1) / this._getPPQ())
                    }),
                    (t.TimeBase.prototype._noArg = function() {
                      return this._now()
                    }),
                    (t.TimeBase.prototype.valueOf = function() {
                      if (t.isUndef(this._val)) return this._noArg()
                      if (t.isString(this._val) && t.isUndef(this._units)) {
                        for (var e in this._expressions)
                          if (
                            this._expressions[e].regexp.test(this._val.trim())
                          ) {
                            this._units = e
                            break
                          }
                      } else if (t.isObject(this._val)) {
                        var i = 0
                        for (var n in this._val) {
                          var o = this._val[n]
                          i += new this.constructor(n).valueOf() * o
                        }
                        return i
                      }
                      if (t.isDefined(this._units)) {
                        var r = this._expressions[this._units],
                          s = this._val
                            .toString()
                            .trim()
                            .match(r.regexp)
                        return s
                          ? r.method.apply(this, s.slice(1))
                          : r.method.call(this, parseFloat(this._val))
                      }
                      return this._val
                    }),
                    (t.TimeBase.prototype.toSeconds = function() {
                      return this.valueOf()
                    }),
                    (t.TimeBase.prototype.toFrequency = function() {
                      return 1 / this.toSeconds()
                    }),
                    (t.TimeBase.prototype.toSamples = function() {
                      return this.toSeconds() * this.context.sampleRate
                    }),
                    (t.TimeBase.prototype.toMilliseconds = function() {
                      return 1e3 * this.toSeconds()
                    }),
                    (t.TimeBase.prototype.dispose = function() {
                      ;(this._val = null), (this._units = null)
                    }),
                    t.TimeBase
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(64), i(46)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Time = function(e, i) {
                      if (!(this instanceof t.Time)) return new t.Time(e, i)
                      t.TimeBase.call(this, e, i)
                    }),
                    t.extend(t.Time, t.TimeBase),
                    (t.Time.prototype._expressions = Object.assign(
                      {},
                      t.TimeBase.prototype._expressions,
                      {
                        quantize: {
                          regexp: /^@(.+)/,
                          method: function(e) {
                            if (t.Transport) {
                              var i = new this.constructor(e)
                              return this._secondsToUnits(
                                t.Transport.nextSubdivision(i)
                              )
                            }
                            return 0
                          }
                        },
                        now: {
                          regexp: /^\+(.+)/,
                          method: function(t) {
                            return this._now() + new this.constructor(t)
                          }
                        }
                      }
                    )),
                    (t.Time.prototype.quantize = function(e, i) {
                      i = t.defaultArg(i, 1)
                      var n = new this.constructor(e),
                        o = this.valueOf()
                      return o + (Math.round(o / n) * n - o) * i
                    }),
                    (t.Time.prototype.toNotation = function() {
                      for (
                        var e = this.toSeconds(), i = ['1m'], n = 1;
                        n < 8;
                        n++
                      ) {
                        var o = Math.pow(2, n)
                        i.push(o + 'n.'), i.push(o + 'n'), i.push(o + 't')
                      }
                      i.push('0')
                      var r = i[0],
                        s = t.Time(i[0]).toSeconds()
                      return (
                        i.forEach(function(i) {
                          var n = t.Time(i).toSeconds()
                          Math.abs(n - e) < Math.abs(s - e) &&
                            ((r = i), (s = n))
                        }),
                        r
                      )
                    }),
                    (t.Time.prototype.toBarsBeatsSixteenths = function() {
                      var t = this._beatsToUnits(1),
                        e = this.valueOf() / t
                      e = parseFloat(e.toFixed(4))
                      var i = Math.floor(e / this._getTimeSignature()),
                        n = (e % 1) * 4
                      return (
                        (e = Math.floor(e) % this._getTimeSignature()),
                        (n = n.toString()).length > 3 &&
                          (n = parseFloat(parseFloat(n).toFixed(3))),
                        [i, e, n].join(':')
                      )
                    }),
                    (t.Time.prototype.toTicks = function() {
                      var t = this._beatsToUnits(1),
                        e = this.valueOf() / t
                      return Math.round(e * this._getPPQ())
                    }),
                    (t.Time.prototype.toSeconds = function() {
                      return this.valueOf()
                    }),
                    (t.Time.prototype.toMidi = function() {
                      return t.Frequency.ftom(this.toFrequency())
                    }),
                    t.Time
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  if (t.supported) {
                    !t.global.hasOwnProperty('OfflineAudioContext') &&
                      t.global.hasOwnProperty('webkitOfflineAudioContext') &&
                      (t.global.OfflineAudioContext =
                        t.global.webkitOfflineAudioContext)
                    var e = new OfflineAudioContext(
                      1,
                      1,
                      44100
                    ).startRendering()
                    ;(e && t.isFunction(e.then)) ||
                      ((OfflineAudioContext.prototype._native_startRendering =
                        OfflineAudioContext.prototype.startRendering),
                      (OfflineAudioContext.prototype.startRendering = function() {
                        return new Promise(
                          function(t) {
                            ;(this.oncomplete = function(e) {
                              t(e.renderedBuffer)
                            }),
                              this._native_startRendering()
                          }.bind(this)
                        )
                      }))
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(11), i(6), i(56), i(31)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Player = function(e) {
                      var i
                      e instanceof t.Buffer && e.loaded
                        ? ((e = e.get()), (i = t.Player.defaults))
                        : (i = t.defaults(
                            arguments,
                            ['url', 'onload'],
                            t.Player
                          )),
                        t.Source.call(this, i),
                        (this.autostart = i.autostart),
                        (this._buffer = new t.Buffer({
                          url: i.url,
                          onload: this._onload.bind(this, i.onload),
                          reverse: i.reverse
                        })),
                        e instanceof AudioBuffer && this._buffer.set(e),
                        (this._loop = i.loop),
                        (this._loopStart = i.loopStart),
                        (this._loopEnd = i.loopEnd),
                        (this._playbackRate = i.playbackRate),
                        (this._activeSources = []),
                        (this.fadeIn = i.fadeIn),
                        (this.fadeOut = i.fadeOut)
                    }),
                    t.extend(t.Player, t.Source),
                    (t.Player.defaults = {
                      onload: t.noOp,
                      playbackRate: 1,
                      loop: !1,
                      autostart: !1,
                      loopStart: 0,
                      loopEnd: 0,
                      reverse: !1,
                      fadeIn: 0,
                      fadeOut: 0
                    }),
                    (t.Player.prototype.load = function(t, e) {
                      return this._buffer.load(t, this._onload.bind(this, e))
                    }),
                    (t.Player.prototype._onload = function(e) {
                      ;(e = t.defaultArg(e, t.noOp))(this),
                        this.autostart && this.start()
                    }),
                    (t.Player.prototype._onSourceEnd = function(e) {
                      var i = this._activeSources.indexOf(e)
                      this._activeSources.splice(i, 1),
                        0 !== this._activeSources.length ||
                          this._synced ||
                          this._state.setStateAtTime(t.State.Stopped, t.now())
                    }),
                    (t.Player.prototype._start = function(e, i, n) {
                      ;(i = this._loop
                        ? t.defaultArg(i, this._loopStart)
                        : t.defaultArg(i, 0)),
                        (i = this.toSeconds(i))
                      var o = t.defaultArg(
                        n,
                        Math.max(this._buffer.duration - i, 0)
                      )
                      ;(o = this.toSeconds(o)),
                        (o /= this._playbackRate),
                        (e = this.toSeconds(e))
                      var r = new t.BufferSource({
                        buffer: this._buffer,
                        loop: this._loop,
                        loopStart: this._loopStart,
                        loopEnd: this._loopEnd,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut
                      }).connect(this.output)
                      return (
                        this._loop ||
                          this._synced ||
                          this._state.setStateAtTime(t.State.Stopped, e + o),
                        this._activeSources.push(r),
                        this._loop && t.isUndef(n)
                          ? r.start(e, i)
                          : r.start(e, i, o - this.toSeconds(this.fadeOut)),
                        this
                      )
                    }),
                    (t.Player.prototype._stop = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this._activeSources.forEach(function(e) {
                          e.stop(t)
                        }),
                        this
                      )
                    }),
                    (t.Player.prototype.restart = function(t, e, i) {
                      return this._stop(t), this._start(t, e, i), this
                    }),
                    (t.Player.prototype.seek = function(e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        this._state.getValueAtTime(i) === t.State.Started &&
                          ((e = this.toSeconds(e)),
                          this._stop(i),
                          this._start(i, e)),
                        this
                      )
                    }),
                    (t.Player.prototype.setLoopPoints = function(t, e) {
                      return (this.loopStart = t), (this.loopEnd = e), this
                    }),
                    Object.defineProperty(t.Player.prototype, 'loopStart', {
                      get: function() {
                        return this._loopStart
                      },
                      set: function(t) {
                        ;(this._loopStart = t),
                          this._activeSources.forEach(function(e) {
                            e.loopStart = t
                          })
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'loopEnd', {
                      get: function() {
                        return this._loopEnd
                      },
                      set: function(t) {
                        ;(this._loopEnd = t),
                          this._activeSources.forEach(function(e) {
                            e.loopEnd = t
                          })
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'buffer', {
                      get: function() {
                        return this._buffer
                      },
                      set: function(t) {
                        this._buffer.set(t)
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'loop', {
                      get: function() {
                        return this._loop
                      },
                      set: function(e) {
                        if (
                          this._loop !== e &&
                          ((this._loop = e),
                          this._activeSources.forEach(function(t) {
                            t.loop = e
                          }),
                          e)
                        ) {
                          var i = this._state.getNextState(
                            t.State.Stopped,
                            this.now()
                          )
                          i && this._state.cancel(i.time)
                        }
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'playbackRate', {
                      get: function() {
                        return this._playbackRate
                      },
                      set: function(e) {
                        this._playbackRate = e
                        var i = this.now(),
                          n = this._state.getNextState(t.State.Stopped, i)
                        n && this._state.cancel(n.time),
                          this._activeSources.forEach(function(t) {
                            t.cancelStop(), t.playbackRate.setValueAtTime(e, i)
                          })
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'reverse', {
                      get: function() {
                        return this._buffer.reverse
                      },
                      set: function(t) {
                        this._buffer.reverse = t
                      }
                    }),
                    Object.defineProperty(t.Player.prototype, 'loaded', {
                      get: function() {
                        return this._buffer.loaded
                      }
                    }),
                    (t.Player.prototype.dispose = function() {
                      return (
                        this._activeSources.forEach(function(t) {
                          t.dispose()
                        }),
                        (this._activeSources = null),
                        t.Source.prototype.dispose.call(this),
                        this._buffer.dispose(),
                        (this._buffer = null),
                        this
                      )
                    }),
                    t.Player
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(30), i(41), i(37), i(1), i(9), i(25)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MonoSynth = function(e) {
                      ;(e = t.defaultArg(e, t.MonoSynth.defaults)),
                        t.Monophonic.call(this, e),
                        (this.oscillator = new t.OmniOscillator(e.oscillator)),
                        (this.frequency = this.oscillator.frequency),
                        (this.detune = this.oscillator.detune),
                        (this.filter = new t.Filter(e.filter)),
                        (this.filter.frequency.value = 5e3),
                        (this.filterEnvelope = new t.FrequencyEnvelope(
                          e.filterEnvelope
                        )),
                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                        this.oscillator.chain(
                          this.filter,
                          this.envelope,
                          this.output
                        ),
                        this.filterEnvelope.connect(this.filter.frequency),
                        this._readOnly([
                          'oscillator',
                          'frequency',
                          'detune',
                          'filter',
                          'filterEnvelope',
                          'envelope'
                        ])
                    }),
                    t.extend(t.MonoSynth, t.Monophonic),
                    (t.MonoSynth.defaults = {
                      frequency: 'C4',
                      detune: 0,
                      oscillator: { type: 'square' },
                      filter: { Q: 6, type: 'lowpass', rolloff: -24 },
                      envelope: {
                        attack: 0.005,
                        decay: 0.1,
                        sustain: 0.9,
                        release: 1
                      },
                      filterEnvelope: {
                        attack: 0.06,
                        decay: 0.2,
                        sustain: 0.5,
                        release: 2,
                        baseFrequency: 200,
                        octaves: 7,
                        exponent: 2
                      }
                    }),
                    (t.MonoSynth.prototype._triggerEnvelopeAttack = function(
                      t,
                      e
                    ) {
                      return (
                        (t = this.toSeconds(t)),
                        this.envelope.triggerAttack(t, e),
                        this.filterEnvelope.triggerAttack(t),
                        this.oscillator.start(t),
                        0 === this.envelope.sustain &&
                          this.oscillator.stop(
                            t + this.envelope.attack + this.envelope.decay
                          ),
                        this
                      )
                    }),
                    (t.MonoSynth.prototype._triggerEnvelopeRelease = function(
                      t
                    ) {
                      return (
                        this.envelope.triggerRelease(t),
                        this.filterEnvelope.triggerRelease(t),
                        this.oscillator.stop(t + this.envelope.release),
                        this
                      )
                    }),
                    (t.MonoSynth.prototype.dispose = function() {
                      return (
                        t.Monophonic.prototype.dispose.call(this),
                        this._writable([
                          'oscillator',
                          'frequency',
                          'detune',
                          'filter',
                          'filterEnvelope',
                          'envelope'
                        ]),
                        this.oscillator.dispose(),
                        (this.oscillator = null),
                        this.envelope.dispose(),
                        (this.envelope = null),
                        this.filterEnvelope.dispose(),
                        (this.filterEnvelope = null),
                        this.filter.dispose(),
                        (this.filter = null),
                        (this.frequency = null),
                        (this.detune = null),
                        this
                      )
                    }),
                    t.MonoSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(17), i(5), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FatOscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type', 'spread'],
                        t.FatOscillator
                      )
                      t.Source.call(this, e),
                        (this.frequency = new t.Signal(
                          e.frequency,
                          t.Type.Frequency
                        )),
                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                        (this._oscillators = []),
                        (this._spread = e.spread),
                        (this._type = e.type),
                        (this._phase = e.phase),
                        (this._partials = e.partials),
                        (this._partialCount = e.partialCount),
                        (this.count = e.count),
                        this._readOnly(['frequency', 'detune'])
                    }),
                    t.extend(t.FatOscillator, t.Source),
                    (t.FatOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      spread: 20,
                      count: 3,
                      type: 'sawtooth',
                      partials: [],
                      partialCount: 0
                    }),
                    (t.FatOscillator.prototype._start = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._forEach(function(e) {
                          e.start(t)
                        })
                    }),
                    (t.FatOscillator.prototype._stop = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._forEach(function(e) {
                          e.stop(t)
                        })
                    }),
                    (t.FatOscillator.prototype.restart = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._forEach(function(e) {
                          e.restart(t)
                        })
                    }),
                    (t.FatOscillator.prototype._forEach = function(t) {
                      for (var e = 0; e < this._oscillators.length; e++)
                        t.call(this, this._oscillators[e], e)
                    }),
                    Object.defineProperty(t.FatOscillator.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(t) {
                        ;(this._type = t),
                          this._forEach(function(e) {
                            e.type = t
                          })
                      }
                    }),
                    Object.defineProperty(t.FatOscillator.prototype, 'spread', {
                      get: function() {
                        return this._spread
                      },
                      set: function(t) {
                        if (
                          ((this._spread = t), this._oscillators.length > 1)
                        ) {
                          var e = -t / 2,
                            i = t / (this._oscillators.length - 1)
                          this._forEach(function(t, n) {
                            t.detune.value = e + i * n
                          })
                        }
                      }
                    }),
                    Object.defineProperty(t.FatOscillator.prototype, 'count', {
                      get: function() {
                        return this._oscillators.length
                      },
                      set: function(e) {
                        if (
                          ((e = Math.max(e, 1)), this._oscillators.length !== e)
                        ) {
                          this._forEach(function(t) {
                            t.dispose()
                          }),
                            (this._oscillators = [])
                          for (var i = 0; i < e; i++) {
                            var n = new t.Oscillator()
                            this.type === t.Oscillator.Type.Custom
                              ? (n.partials = this._partials)
                              : (n.type = this._type),
                              (n.partialCount = this._partialCount),
                              (n.phase = this._phase + (i / e) * 360),
                              (n.volume.value = -6 - 1.1 * e),
                              this.frequency.connect(n.frequency),
                              this.detune.connect(n.detune),
                              n.connect(this.output),
                              (this._oscillators[i] = n)
                          }
                          ;(this.spread = this._spread),
                            this.state === t.State.Started &&
                              this._forEach(function(t) {
                                t.start()
                              })
                        }
                      }
                    }),
                    Object.defineProperty(t.FatOscillator.prototype, 'phase', {
                      get: function() {
                        return this._phase
                      },
                      set: function(t) {
                        ;(this._phase = t),
                          this._forEach(function(e) {
                            e.phase = t
                          })
                      }
                    }),
                    Object.defineProperty(
                      t.FatOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return this._oscillators[0].baseType
                        },
                        set: function(t) {
                          this._forEach(function(e) {
                            e.baseType = t
                          }),
                            (this._type = this._oscillators[0].type)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FatOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return this._oscillators[0].partials
                        },
                        set: function(e) {
                          ;(this._partials = e),
                            (this._type = t.Oscillator.Type.Custom),
                            this._forEach(function(t) {
                              t.partials = e
                            })
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.FatOscillator.prototype,
                      'partialCount',
                      {
                        get: function() {
                          return this._oscillators[0].partialCount
                        },
                        set: function(t) {
                          ;(this._partialCount = t),
                            this._forEach(function(e) {
                              e.partialCount = t
                            }),
                            (this._type = this._oscillators[0].type)
                        }
                      }
                    ),
                    (t.FatOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._writable(['frequency', 'detune']),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        this._forEach(function(t) {
                          t.dispose()
                        }),
                        (this._oscillators = null),
                        (this._partials = null),
                        this
                      )
                    }),
                    t.FatOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(17), i(5), i(3), i(22)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AMOscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type', 'modulationType'],
                        t.AMOscillator
                      )
                      t.Source.call(this, e),
                        (this._carrier = new t.Oscillator(e.frequency, e.type)),
                        (this.frequency = this._carrier.frequency),
                        (this.detune = this._carrier.detune),
                        (this.detune.value = e.detune),
                        (this._modulator = new t.Oscillator(
                          e.frequency,
                          e.modulationType
                        )),
                        (this._modulationScale = new t.AudioToGain()),
                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                        (this.harmonicity.units = t.Type.Positive),
                        (this._modulationNode = new t.Gain(0)),
                        this.frequency.chain(
                          this.harmonicity,
                          this._modulator.frequency
                        ),
                        this.detune.connect(this._modulator.detune),
                        this._modulator.chain(
                          this._modulationScale,
                          this._modulationNode.gain
                        ),
                        this._carrier.chain(this._modulationNode, this.output),
                        (this.phase = e.phase),
                        this._readOnly(['frequency', 'detune', 'harmonicity'])
                    }),
                    t.extend(t.AMOscillator, t.Oscillator),
                    (t.AMOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      type: 'sine',
                      modulationType: 'square',
                      harmonicity: 1
                    }),
                    (t.AMOscillator.prototype._start = function(t) {
                      this._modulator.start(t), this._carrier.start(t)
                    }),
                    (t.AMOscillator.prototype._stop = function(t) {
                      this._modulator.stop(t), this._carrier.stop(t)
                    }),
                    (t.AMOscillator.prototype.restart = function(t) {
                      this._modulator.restart(t), this._carrier.restart(t)
                    }),
                    Object.defineProperty(t.AMOscillator.prototype, 'type', {
                      get: function() {
                        return this._carrier.type
                      },
                      set: function(t) {
                        this._carrier.type = t
                      }
                    }),
                    Object.defineProperty(
                      t.AMOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return this._carrier.baseType
                        },
                        set: function(t) {
                          this._carrier.baseType = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AMOscillator.prototype,
                      'partialCount',
                      {
                        get: function() {
                          return this._carrier.partialCount
                        },
                        set: function(t) {
                          this._carrier.partialCount = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.AMOscillator.prototype,
                      'modulationType',
                      {
                        get: function() {
                          return this._modulator.type
                        },
                        set: function(t) {
                          this._modulator.type = t
                        }
                      }
                    ),
                    Object.defineProperty(t.AMOscillator.prototype, 'phase', {
                      get: function() {
                        return this._carrier.phase
                      },
                      set: function(t) {
                        ;(this._carrier.phase = t), (this._modulator.phase = t)
                      }
                    }),
                    Object.defineProperty(
                      t.AMOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return this._carrier.partials
                        },
                        set: function(t) {
                          this._carrier.partials = t
                        }
                      }
                    ),
                    (t.AMOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._writable(['frequency', 'detune', 'harmonicity']),
                        (this.frequency = null),
                        (this.detune = null),
                        this.harmonicity.dispose(),
                        (this.harmonicity = null),
                        this._carrier.dispose(),
                        (this._carrier = null),
                        this._modulator.dispose(),
                        (this._modulator = null),
                        this._modulationNode.dispose(),
                        (this._modulationNode = null),
                        this._modulationScale.dispose(),
                        (this._modulationScale = null),
                        this
                      )
                    }),
                    t.AMOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(49), i(17), i(5)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PWMOscillator = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'modulationFrequency'],
                        t.PWMOscillator
                      )
                      t.Source.call(this, e),
                        (this._pulse = new t.PulseOscillator(
                          e.modulationFrequency
                        )),
                        (this._pulse._sawtooth.type = 'sine'),
                        (this._modulator = new t.Oscillator({
                          frequency: e.frequency,
                          detune: e.detune,
                          phase: e.phase
                        })),
                        (this._scale = new t.Multiply(2)),
                        (this.frequency = this._modulator.frequency),
                        (this.detune = this._modulator.detune),
                        (this.modulationFrequency = this._pulse.frequency),
                        this._modulator.chain(this._scale, this._pulse.width),
                        this._pulse.connect(this.output),
                        this._readOnly([
                          'modulationFrequency',
                          'frequency',
                          'detune'
                        ])
                    }),
                    t.extend(t.PWMOscillator, t.Source),
                    (t.PWMOscillator.defaults = {
                      frequency: 440,
                      detune: 0,
                      phase: 0,
                      modulationFrequency: 0.4
                    }),
                    (t.PWMOscillator.prototype._start = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._modulator.start(t),
                        this._pulse.start(t)
                    }),
                    (t.PWMOscillator.prototype._stop = function(t) {
                      ;(t = this.toSeconds(t)),
                        this._modulator.stop(t),
                        this._pulse.stop(t)
                    }),
                    (t.PWMOscillator.prototype.restart = function(t) {
                      this._modulator.restart(t), this._pulse.restart(t)
                    }),
                    Object.defineProperty(t.PWMOscillator.prototype, 'type', {
                      get: function() {
                        return 'pwm'
                      }
                    }),
                    Object.defineProperty(
                      t.PWMOscillator.prototype,
                      'baseType',
                      {
                        get: function() {
                          return 'pwm'
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.PWMOscillator.prototype,
                      'partials',
                      {
                        get: function() {
                          return []
                        }
                      }
                    ),
                    Object.defineProperty(t.PWMOscillator.prototype, 'phase', {
                      get: function() {
                        return this._modulator.phase
                      },
                      set: function(t) {
                        this._modulator.phase = t
                      }
                    }),
                    (t.PWMOscillator.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this._pulse.dispose(),
                        (this._pulse = null),
                        this._scale.dispose(),
                        (this._scale = null),
                        this._modulator.dispose(),
                        (this._modulator = null),
                        this._writable([
                          'modulationFrequency',
                          'frequency',
                          'detune'
                        ]),
                        (this.frequency = null),
                        (this.detune = null),
                        (this.modulationFrequency = null),
                        this
                      )
                    }),
                    t.PWMOscillator
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(50), i(4), i(16)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Part = function() {
                      var e = t.defaults(
                        arguments,
                        ['callback', 'events'],
                        t.Part
                      )
                      t.Event.call(this, e), (this._events = [])
                      for (var i = 0; i < e.events.length; i++)
                        Array.isArray(e.events[i])
                          ? this.add(e.events[i][0], e.events[i][1])
                          : this.add(e.events[i])
                    }),
                    t.extend(t.Part, t.Event),
                    (t.Part.defaults = {
                      callback: t.noOp,
                      loop: !1,
                      loopEnd: '1m',
                      loopStart: 0,
                      playbackRate: 1,
                      probability: 1,
                      humanize: !1,
                      mute: !1,
                      events: []
                    }),
                    (t.Part.prototype.start = function(e, i) {
                      var n = this.toTicks(e)
                      return (
                        this._state.getValueAtTime(n) !== t.State.Started &&
                          ((i = this._loop
                            ? t.defaultArg(i, this._loopStart)
                            : t.defaultArg(i, 0)),
                          (i = this.toTicks(i)),
                          this._state.add({
                            state: t.State.Started,
                            time: n,
                            offset: i
                          }),
                          this._forEach(function(t) {
                            this._startNote(t, n, i)
                          })),
                        this
                      )
                    }),
                    (t.Part.prototype._startNote = function(e, i, n) {
                      ;(i -= n),
                        this._loop
                          ? e.startOffset >= this._loopStart &&
                            e.startOffset < this._loopEnd
                            ? (e.startOffset < n &&
                                (i += this._getLoopDuration()),
                              e.start(t.Ticks(i)))
                            : e.startOffset < this._loopStart &&
                              e.startOffset >= n &&
                              ((e.loop = !1), e.start(t.Ticks(i)))
                          : e.startOffset >= n && e.start(t.Ticks(i))
                    }),
                    Object.defineProperty(t.Part.prototype, 'startOffset', {
                      get: function() {
                        return this._startOffset
                      },
                      set: function(t) {
                        ;(this._startOffset = t),
                          this._forEach(function(t) {
                            t.startOffset += this._startOffset
                          })
                      }
                    }),
                    (t.Part.prototype.stop = function(e) {
                      var i = this.toTicks(e)
                      return (
                        this._state.cancel(i),
                        this._state.setStateAtTime(t.State.Stopped, i),
                        this._forEach(function(t) {
                          t.stop(e)
                        }),
                        this
                      )
                    }),
                    (t.Part.prototype.at = function(e, i) {
                      e = t.TransportTime(e)
                      for (
                        var n = t.Ticks(1).toSeconds(), o = 0;
                        o < this._events.length;
                        o++
                      ) {
                        var r = this._events[o]
                        if (Math.abs(e.toTicks() - r.startOffset) < n)
                          return t.isDefined(i) && (r.value = i), r
                      }
                      return t.isDefined(i)
                        ? (this.add(e, i),
                          this._events[this._events.length - 1])
                        : null
                    }),
                    (t.Part.prototype.add = function(e, i) {
                      var n
                      return (
                        e.hasOwnProperty('time') && (e = (i = e).time),
                        (e = this.toTicks(e)),
                        i instanceof t.Event
                          ? ((n = i).callback = this._tick.bind(this))
                          : (n = new t.Event({
                              callback: this._tick.bind(this),
                              value: i
                            })),
                        (n.startOffset = e),
                        n.set({
                          loopEnd: this.loopEnd,
                          loopStart: this.loopStart,
                          loop: this.loop,
                          humanize: this.humanize,
                          playbackRate: this.playbackRate,
                          probability: this.probability
                        }),
                        this._events.push(n),
                        this._restartEvent(n),
                        this
                      )
                    }),
                    (t.Part.prototype._restartEvent = function(e) {
                      this._state.forEach(
                        function(i) {
                          i.state === t.State.Started
                            ? this._startNote(e, i.time, i.offset)
                            : e.stop(t.Ticks(i.time))
                        }.bind(this)
                      )
                    }),
                    (t.Part.prototype.remove = function(e, i) {
                      e.hasOwnProperty('time') && (e = (i = e).time),
                        (e = this.toTicks(e))
                      for (var n = this._events.length - 1; n >= 0; n--) {
                        var o = this._events[n]
                        o.startOffset === e &&
                          (t.isUndef(i) || (t.isDefined(i) && o.value === i)) &&
                          (this._events.splice(n, 1), o.dispose())
                      }
                      return this
                    }),
                    (t.Part.prototype.removeAll = function() {
                      return (
                        this._forEach(function(t) {
                          t.dispose()
                        }),
                        (this._events = []),
                        this
                      )
                    }),
                    (t.Part.prototype.cancel = function(t) {
                      return (
                        this._forEach(function(e) {
                          e.cancel(t)
                        }),
                        this._state.cancel(this.toTicks(t)),
                        this
                      )
                    }),
                    (t.Part.prototype._forEach = function(e, i) {
                      if (this._events) {
                        i = t.defaultArg(i, this)
                        for (var n = this._events.length - 1; n >= 0; n--) {
                          var o = this._events[n]
                          o instanceof t.Part ? o._forEach(e, i) : e.call(i, o)
                        }
                      }
                      return this
                    }),
                    (t.Part.prototype._setAll = function(t, e) {
                      this._forEach(function(i) {
                        i[t] = e
                      })
                    }),
                    (t.Part.prototype._tick = function(t, e) {
                      this.mute || this.callback(t, e)
                    }),
                    (t.Part.prototype._testLoopBoundries = function(e) {
                      e.startOffset < this._loopStart ||
                      e.startOffset >= this._loopEnd
                        ? e.cancel(0)
                        : e.state === t.State.Stopped && this._restartEvent(e)
                    }),
                    Object.defineProperty(t.Part.prototype, 'probability', {
                      get: function() {
                        return this._probability
                      },
                      set: function(t) {
                        ;(this._probability = t), this._setAll('probability', t)
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'humanize', {
                      get: function() {
                        return this._humanize
                      },
                      set: function(t) {
                        ;(this._humanize = t), this._setAll('humanize', t)
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'loop', {
                      get: function() {
                        return this._loop
                      },
                      set: function(t) {
                        ;(this._loop = t),
                          this._forEach(function(e) {
                            ;(e._loopStart = this._loopStart),
                              (e._loopEnd = this._loopEnd),
                              (e.loop = t),
                              this._testLoopBoundries(e)
                          })
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'loopEnd', {
                      get: function() {
                        return t.Ticks(this._loopEnd).toSeconds()
                      },
                      set: function(t) {
                        ;(this._loopEnd = this.toTicks(t)),
                          this._loop &&
                            this._forEach(function(e) {
                              ;(e.loopEnd = t), this._testLoopBoundries(e)
                            })
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'loopStart', {
                      get: function() {
                        return t.Ticks(this._loopStart).toSeconds()
                      },
                      set: function(t) {
                        ;(this._loopStart = this.toTicks(t)),
                          this._loop &&
                            this._forEach(function(t) {
                              ;(t.loopStart = this.loopStart),
                                this._testLoopBoundries(t)
                            })
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'playbackRate', {
                      get: function() {
                        return this._playbackRate
                      },
                      set: function(t) {
                        ;(this._playbackRate = t),
                          this._setAll('playbackRate', t)
                      }
                    }),
                    Object.defineProperty(t.Part.prototype, 'length', {
                      get: function() {
                        return this._events.length
                      }
                    }),
                    (t.Part.prototype.dispose = function() {
                      return (
                        t.Event.prototype.dispose.call(this),
                        this.removeAll(),
                        (this.callback = null),
                        (this._events = null),
                        this
                      )
                    }),
                    t.Part
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(50)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Loop = function() {
                      var e = t.defaults(
                        arguments,
                        ['callback', 'interval'],
                        t.Loop
                      )
                      t.call(this),
                        (this._event = new t.Event({
                          callback: this._tick.bind(this),
                          loop: !0,
                          loopEnd: e.interval,
                          playbackRate: e.playbackRate,
                          probability: e.probability
                        })),
                        (this.callback = e.callback),
                        (this.iterations = e.iterations)
                    }),
                    t.extend(t.Loop),
                    (t.Loop.defaults = {
                      interval: '4n',
                      callback: t.noOp,
                      playbackRate: 1,
                      iterations: 1 / 0,
                      probability: !0,
                      mute: !1
                    }),
                    (t.Loop.prototype.start = function(t) {
                      return this._event.start(t), this
                    }),
                    (t.Loop.prototype.stop = function(t) {
                      return this._event.stop(t), this
                    }),
                    (t.Loop.prototype.cancel = function(t) {
                      return this._event.cancel(t), this
                    }),
                    (t.Loop.prototype._tick = function(t) {
                      this.callback(t)
                    }),
                    Object.defineProperty(t.Loop.prototype, 'state', {
                      get: function() {
                        return this._event.state
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'progress', {
                      get: function() {
                        return this._event.progress
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'interval', {
                      get: function() {
                        return this._event.loopEnd
                      },
                      set: function(t) {
                        this._event.loopEnd = t
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'playbackRate', {
                      get: function() {
                        return this._event.playbackRate
                      },
                      set: function(t) {
                        this._event.playbackRate = t
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'humanize', {
                      get: function() {
                        return this._event.humanize
                      },
                      set: function(t) {
                        this._event.humanize = t
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'probability', {
                      get: function() {
                        return this._event.probability
                      },
                      set: function(t) {
                        this._event.probability = t
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'mute', {
                      get: function() {
                        return this._event.mute
                      },
                      set: function(t) {
                        this._event.mute = t
                      }
                    }),
                    Object.defineProperty(t.Loop.prototype, 'iterations', {
                      get: function() {
                        return !0 === this._event.loop
                          ? 1 / 0
                          : this._event.loop
                      },
                      set: function(t) {
                        this._event.loop = t === 1 / 0 || t
                      }
                    }),
                    (t.Loop.prototype.dispose = function() {
                      this._event.dispose(),
                        (this._event = null),
                        (this.callback = null)
                    }),
                    t.Loop
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(15), i(32)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.StereoXFeedbackEffect = function() {
                      var e = t.defaults(
                        arguments,
                        ['feedback'],
                        t.FeedbackEffect
                      )
                      t.StereoEffect.call(this, e),
                        (this.feedback = new t.Signal(
                          e.feedback,
                          t.Type.NormalRange
                        )),
                        (this._feedbackLR = new t.Gain()),
                        (this._feedbackRL = new t.Gain()),
                        this.effectReturnL.chain(
                          this._feedbackLR,
                          this.effectSendR
                        ),
                        this.effectReturnR.chain(
                          this._feedbackRL,
                          this.effectSendL
                        ),
                        this.feedback.fan(
                          this._feedbackLR.gain,
                          this._feedbackRL.gain
                        ),
                        this._readOnly(['feedback'])
                    }),
                    t.extend(t.StereoXFeedbackEffect, t.StereoEffect),
                    (t.StereoXFeedbackEffect.prototype.dispose = function() {
                      return (
                        t.StereoEffect.prototype.dispose.call(this),
                        this._writable(['feedback']),
                        this.feedback.dispose(),
                        (this.feedback = null),
                        this._feedbackLR.dispose(),
                        (this._feedbackLR = null),
                        this._feedbackRL.dispose(),
                        (this._feedbackRL = null),
                        this
                      )
                    }),
                    t.StereoXFeedbackEffect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(52), i(51)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MidSideEffect = function() {
                      t.Effect.apply(this, arguments),
                        (this._midSideSplit = new t.MidSideSplit()),
                        (this._midSideMerge = new t.MidSideMerge()),
                        (this.midSend = this._midSideSplit.mid),
                        (this.sideSend = this._midSideSplit.side),
                        (this.midReturn = this._midSideMerge.mid),
                        (this.sideReturn = this._midSideMerge.side),
                        this.effectSend.connect(this._midSideSplit),
                        this._midSideMerge.connect(this.effectReturn)
                    }),
                    t.extend(t.MidSideEffect, t.Effect),
                    (t.MidSideEffect.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._midSideSplit.dispose(),
                        (this._midSideSplit = null),
                        this._midSideMerge.dispose(),
                        (this._midSideMerge = null),
                        (this.midSend = null),
                        (this.sideSend = null),
                        (this.midReturn = null),
                        (this.sideReturn = null),
                        this
                      )
                    }),
                    t.MidSideEffect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(11), i(8)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Convolver = function() {
                      var e = t.defaults(
                        arguments,
                        ['url', 'onload'],
                        t.Convolver
                      )
                      t.Effect.call(this, e),
                        (this._convolver = this.context.createConvolver()),
                        (this._buffer = new t.Buffer(
                          e.url,
                          function(t) {
                            ;(this.buffer = t.get()), e.onload()
                          }.bind(this)
                        )),
                        this._buffer.loaded && (this.buffer = this._buffer),
                        (this.normalize = e.normalize),
                        this.connectEffect(this._convolver)
                    }),
                    t.extend(t.Convolver, t.Effect),
                    (t.Convolver.defaults = { onload: t.noOp, normalize: !0 }),
                    Object.defineProperty(t.Convolver.prototype, 'buffer', {
                      get: function() {
                        return this._buffer.length ? this._buffer : null
                      },
                      set: function(t) {
                        this._buffer.set(t),
                          this._convolver.buffer &&
                            (this.effectSend.disconnect(),
                            this._convolver.disconnect(),
                            (this._convolver = this.context.createConvolver()),
                            this.connectEffect(this._convolver)),
                          (this._convolver.buffer = this._buffer.get())
                      }
                    }),
                    Object.defineProperty(t.Convolver.prototype, 'normalize', {
                      get: function() {
                        return this._convolver.normalize
                      },
                      set: function(t) {
                        this._convolver.normalize = t
                      }
                    }),
                    (t.Convolver.prototype.load = function(t, e) {
                      return this._buffer.load(
                        t,
                        function(t) {
                          ;(this.buffer = t), e && e()
                        }.bind(this)
                      )
                    }),
                    (t.Convolver.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._buffer.dispose(),
                        (this._buffer = null),
                        this._convolver.disconnect(),
                        (this._convolver = null),
                        this
                      )
                    }),
                    t.Convolver
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(5), i(13)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Modulo = function(e) {
                      t.SignalBase.call(this),
                        this.createInsOuts(1, 0),
                        (this._shaper = new t.WaveShaper(Math.pow(2, 16))),
                        (this._multiply = new t.Multiply()),
                        (this._subtract = this.output = new t.Subtract()),
                        (this._modSignal = new t.Signal(e)),
                        this.input.fan(this._shaper, this._subtract),
                        this._modSignal.connect(this._multiply, 0, 0),
                        this._shaper.connect(this._multiply, 0, 1),
                        this._multiply.connect(this._subtract, 0, 1),
                        this._setWaveShaper(e)
                    }),
                    t.extend(t.Modulo, t.SignalBase),
                    (t.Modulo.prototype._setWaveShaper = function(t) {
                      this._shaper.setMap(function(e) {
                        return Math.floor((e + 1e-4) / t)
                      })
                    }),
                    Object.defineProperty(t.Modulo.prototype, 'value', {
                      get: function() {
                        return this._modSignal.value
                      },
                      set: function(t) {
                        ;(this._modSignal.value = t), this._setWaveShaper(t)
                      }
                    }),
                    (t.Modulo.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._shaper.dispose(),
                        (this._shaper = null),
                        this._multiply.dispose(),
                        (this._multiply = null),
                        this._subtract.dispose(),
                        (this._subtract = null),
                        this._modSignal.dispose(),
                        (this._modSignal = null),
                        this
                      )
                    }),
                    t.Modulo
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(16), i(11), i(62), i(40)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Offline = function(e, i) {
                      var n = t.context.sampleRate,
                        o = t.context,
                        r = new t.OfflineContext(2, i, n)
                      t.context = r
                      var s = e(t.Transport),
                        a = null
                      return (
                        (a =
                          s && t.isFunction(s.then)
                            ? s.then(function() {
                                return r.render()
                              })
                            : r.render()),
                        (t.context = o),
                        a.then(function(e) {
                          return new t.Buffer(e)
                        })
                      )
                    }),
                    t.Offline
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(11)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Buffers = function(e) {
                      var i = Array.prototype.slice.call(arguments)
                      i.shift()
                      var n = t.defaults(i, ['onload', 'baseUrl'], t.Buffers)
                      for (var o in (t.call(this),
                      (this._buffers = {}),
                      (this.baseUrl = n.baseUrl),
                      (this._loadingCount = 0),
                      e))
                        this._loadingCount++,
                          this.add(
                            o,
                            e[o],
                            this._bufferLoaded.bind(this, n.onload)
                          )
                    }),
                    t.extend(t.Buffers),
                    (t.Buffers.defaults = { onload: t.noOp, baseUrl: '' }),
                    (t.Buffers.prototype.has = function(t) {
                      return this._buffers.hasOwnProperty(t)
                    }),
                    (t.Buffers.prototype.get = function(t) {
                      if (this.has(t)) return this._buffers[t]
                      throw new Error('Tone.Buffers: no buffer named ' + t)
                    }),
                    (t.Buffers.prototype._bufferLoaded = function(t) {
                      this._loadingCount--,
                        0 === this._loadingCount && t && t(this)
                    }),
                    Object.defineProperty(t.Buffers.prototype, 'loaded', {
                      get: function() {
                        var t = !0
                        for (var e in this._buffers) {
                          var i = this.get(e)
                          t = t && i.loaded
                        }
                        return t
                      }
                    }),
                    (t.Buffers.prototype.add = function(e, i, n) {
                      return (
                        (n = t.defaultArg(n, t.noOp)),
                        i instanceof t.Buffer
                          ? ((this._buffers[e] = i), n(this))
                          : i instanceof AudioBuffer
                          ? ((this._buffers[e] = new t.Buffer(i)), n(this))
                          : t.isString(i) &&
                            (this._buffers[e] = new t.Buffer(
                              this.baseUrl + i,
                              n
                            )),
                        this
                      )
                    }),
                    (t.Buffers.prototype.dispose = function() {
                      for (var e in (t.prototype.dispose.call(this),
                      this._buffers))
                        this._buffers[e].dispose()
                      return (this._buffers = null), this
                    }),
                    t.Buffers
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.CtrlPattern = function() {
                      var e = t.defaults(
                        arguments,
                        ['values', 'type'],
                        t.CtrlPattern
                      )
                      t.call(this),
                        (this.values = e.values),
                        (this.index = 0),
                        (this._type = null),
                        (this._shuffled = null),
                        (this._direction = null),
                        (this.type = e.type)
                    }),
                    t.extend(t.CtrlPattern),
                    (t.CtrlPattern.Type = {
                      Up: 'up',
                      Down: 'down',
                      UpDown: 'upDown',
                      DownUp: 'downUp',
                      AlternateUp: 'alternateUp',
                      AlternateDown: 'alternateDown',
                      Random: 'random',
                      RandomWalk: 'randomWalk',
                      RandomOnce: 'randomOnce'
                    }),
                    (t.CtrlPattern.defaults = {
                      type: t.CtrlPattern.Type.Up,
                      values: []
                    }),
                    Object.defineProperty(t.CtrlPattern.prototype, 'value', {
                      get: function() {
                        if (0 !== this.values.length) {
                          if (1 === this.values.length) return this.values[0]
                          this.index = Math.min(
                            this.index,
                            this.values.length - 1
                          )
                          var e = this.values[this.index]
                          return (
                            this.type === t.CtrlPattern.Type.RandomOnce &&
                              (this.values.length !== this._shuffled.length &&
                                this._shuffleValues(),
                              (e = this.values[this._shuffled[this.index]])),
                            e
                          )
                        }
                      }
                    }),
                    Object.defineProperty(t.CtrlPattern.prototype, 'type', {
                      get: function() {
                        return this._type
                      },
                      set: function(e) {
                        ;(this._type = e),
                          (this._shuffled = null),
                          this._type === t.CtrlPattern.Type.Up ||
                          this._type === t.CtrlPattern.Type.UpDown ||
                          this._type === t.CtrlPattern.Type.RandomOnce ||
                          this._type === t.CtrlPattern.Type.AlternateUp
                            ? (this.index = 0)
                            : (this._type !== t.CtrlPattern.Type.Down &&
                                this._type !== t.CtrlPattern.Type.DownUp &&
                                this._type !==
                                  t.CtrlPattern.Type.AlternateDown) ||
                              (this.index = this.values.length - 1),
                          this._type === t.CtrlPattern.Type.UpDown ||
                          this._type === t.CtrlPattern.Type.AlternateUp
                            ? (this._direction = t.CtrlPattern.Type.Up)
                            : (this._type !== t.CtrlPattern.Type.DownUp &&
                                this._type !==
                                  t.CtrlPattern.Type.AlternateDown) ||
                              (this._direction = t.CtrlPattern.Type.Down),
                          this._type === t.CtrlPattern.Type.RandomOnce
                            ? this._shuffleValues()
                            : this._type === t.CtrlPattern.Random &&
                              (this.index = Math.floor(
                                Math.random() * this.values.length
                              ))
                      }
                    }),
                    (t.CtrlPattern.prototype.next = function() {
                      var e = this.type
                      return (
                        e === t.CtrlPattern.Type.Up
                          ? (this.index++,
                            this.index >= this.values.length &&
                              (this.index = 0))
                          : e === t.CtrlPattern.Type.Down
                          ? (this.index--,
                            this.index < 0 &&
                              (this.index = this.values.length - 1))
                          : e === t.CtrlPattern.Type.UpDown ||
                            e === t.CtrlPattern.Type.DownUp
                          ? (this._direction === t.CtrlPattern.Type.Up
                              ? this.index++
                              : this.index--,
                            this.index < 0
                              ? ((this.index = 1),
                                (this._direction = t.CtrlPattern.Type.Up))
                              : this.index >= this.values.length &&
                                ((this.index = this.values.length - 2),
                                (this._direction = t.CtrlPattern.Type.Down)))
                          : e === t.CtrlPattern.Type.Random
                          ? (this.index = Math.floor(
                              Math.random() * this.values.length
                            ))
                          : e === t.CtrlPattern.Type.RandomWalk
                          ? Math.random() < 0.5
                            ? (this.index--,
                              (this.index = Math.max(this.index, 0)))
                            : (this.index++,
                              (this.index = Math.min(
                                this.index,
                                this.values.length - 1
                              )))
                          : e === t.CtrlPattern.Type.RandomOnce
                          ? (this.index++,
                            this.index >= this.values.length &&
                              ((this.index = 0), this._shuffleValues()))
                          : e === t.CtrlPattern.Type.AlternateUp
                          ? (this._direction === t.CtrlPattern.Type.Up
                              ? ((this.index += 2),
                                (this._direction = t.CtrlPattern.Type.Down))
                              : ((this.index -= 1),
                                (this._direction = t.CtrlPattern.Type.Up)),
                            this.index >= this.values.length &&
                              ((this.index = 0),
                              (this._direction = t.CtrlPattern.Type.Up)))
                          : e === t.CtrlPattern.Type.AlternateDown &&
                            (this._direction === t.CtrlPattern.Type.Up
                              ? ((this.index += 1),
                                (this._direction = t.CtrlPattern.Type.Down))
                              : ((this.index -= 2),
                                (this._direction = t.CtrlPattern.Type.Up)),
                            this.index < 0 &&
                              ((this.index = this.values.length - 1),
                              (this._direction = t.CtrlPattern.Type.Down))),
                        this.value
                      )
                    }),
                    (t.CtrlPattern.prototype._shuffleValues = function() {
                      var t = []
                      this._shuffled = []
                      for (var e = 0; e < this.values.length; e++) t[e] = e
                      for (; t.length > 0; ) {
                        var i = t.splice(
                          Math.floor(t.length * Math.random()),
                          1
                        )
                        this._shuffled.push(i[0])
                      }
                    }),
                    (t.CtrlPattern.prototype.dispose = function() {
                      ;(this._shuffled = null), (this.values = null)
                    }),
                    t.CtrlPattern
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  t.supported &&
                    (AudioBuffer.prototype.copyToChannel ||
                      ((AudioBuffer.prototype.copyToChannel = function(
                        t,
                        e,
                        i
                      ) {
                        var n = this.getChannelData(e)
                        i = i || 0
                        for (var o = 0; o < n.length; o++) n[o + i] = t[o]
                      }),
                      (AudioBuffer.prototype.copyFromChannel = function(
                        t,
                        e,
                        i
                      ) {
                        var n = this.getChannelData(e)
                        i = i || 0
                        for (var o = 0; o < t.length; o++) t[o] = n[o + i]
                      })))
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(11), i(6), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.OscillatorNode = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'type'],
                        t.OscillatorNode
                      )
                      t.AudioNode.call(this, e),
                        (this.onended = e.onended),
                        (this._startTime = -1),
                        (this._stopTime = -1),
                        (this._gainNode = this.output = new t.Gain(0)),
                        (this._oscillator = this.context.createOscillator()),
                        this._oscillator.connect(this._gainNode),
                        (this.type = e.type),
                        (this.frequency = new t.Param({
                          param: this._oscillator.frequency,
                          units: t.Type.Frequency,
                          value: e.frequency
                        })),
                        (this.detune = new t.Param({
                          param: this._oscillator.detune,
                          units: t.Type.Cents,
                          value: e.detune
                        })),
                        (this._gain = 1)
                    }),
                    t.extend(t.OscillatorNode, t.AudioNode),
                    (t.OscillatorNode.defaults = {
                      frequency: 440,
                      detune: 0,
                      type: 'sine',
                      onended: t.noOp
                    }),
                    Object.defineProperty(t.OscillatorNode.prototype, 'state', {
                      get: function() {
                        return this.getStateAtTime(this.now())
                      }
                    }),
                    (t.OscillatorNode.prototype.getStateAtTime = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        -1 !== this._startTime &&
                        e >= this._startTime &&
                        (-1 === this._stopTime || e <= this._stopTime)
                          ? t.State.Started
                          : t.State.Stopped
                      )
                    }),
                    (t.OscillatorNode.prototype.start = function(t) {
                      if ((this.log('start', t), -1 !== this._startTime))
                        throw new Error(
                          'cannot call OscillatorNode.start more than once'
                        )
                      return (
                        (this._startTime = this.toSeconds(t)),
                        this._oscillator.start(this._startTime),
                        this._gainNode.gain.setValueAtTime(1, this._startTime),
                        this
                      )
                    }),
                    (t.OscillatorNode.prototype.setPeriodicWave = function(t) {
                      return this._oscillator.setPeriodicWave(t), this
                    }),
                    (t.OscillatorNode.prototype.stop = function(t) {
                      return (
                        this.log('stop', t),
                        this.assert(
                          -1 !== this._startTime,
                          "'start' must be called before 'stop'"
                        ),
                        this.cancelStop(),
                        (this._stopTime = this.toSeconds(t)),
                        this._stopTime > this._startTime
                          ? (this._gainNode.gain.setValueAtTime(
                              0,
                              this._stopTime
                            ),
                            this.context.clearTimeout(this._timeout),
                            (this._timeout = this.context.setTimeout(
                              function() {
                                this._oscillator.stop(this.now()),
                                  this.onended()
                              }.bind(this),
                              this._stopTime - this.context.currentTime
                            )))
                          : this._gainNode.gain.cancelScheduledValues(
                              this._startTime
                            ),
                        this
                      )
                    }),
                    (t.OscillatorNode.prototype.cancelStop = function() {
                      return (
                        -1 !== this._startTime &&
                          (this._gainNode.gain.cancelScheduledValues(
                            this._startTime + this.sampleTime
                          ),
                          this.context.clearTimeout(this._timeout),
                          (this._stopTime = -1)),
                        this
                      )
                    }),
                    Object.defineProperty(t.OscillatorNode.prototype, 'type', {
                      get: function() {
                        return this._oscillator.type
                      },
                      set: function(t) {
                        this._oscillator.type = t
                      }
                    }),
                    (t.OscillatorNode.prototype.dispose = function() {
                      return (
                        this.context.clearTimeout(this._timeout),
                        t.AudioNode.prototype.dispose.call(this),
                        (this.onended = null),
                        this._oscillator.disconnect(),
                        (this._oscillator = null),
                        this._gainNode.dispose(),
                        (this._gainNode = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        this
                      )
                    }),
                    t.OscillatorNode
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(55), i(54)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.TransportRepeatEvent = function(e, i) {
                      t.TransportEvent.call(this, e, i),
                        (i = t.defaultArg(i, t.TransportRepeatEvent.defaults)),
                        (this.duration = t.Ticks(i.duration)),
                        (this._interval = t.Ticks(i.interval)),
                        (this._currentId = -1),
                        (this._nextId = -1),
                        (this._nextTick = this.time),
                        (this._boundRestart = this._restart.bind(this)),
                        this.Transport.on(
                          'start loopStart',
                          this._boundRestart
                        ),
                        this._restart()
                    }),
                    t.extend(t.TransportRepeatEvent, t.TransportEvent),
                    (t.TransportRepeatEvent.defaults = {
                      duration: 1 / 0,
                      interval: 1
                    }),
                    (t.TransportRepeatEvent.prototype.invoke = function(e) {
                      this._createEvents(e),
                        t.TransportEvent.prototype.invoke.call(this, e)
                    }),
                    (t.TransportRepeatEvent.prototype._createEvents = function(
                      e
                    ) {
                      var i = this.Transport.getTicksAtTime(e)
                      i >= this.time &&
                        i >= this._nextTick &&
                        this._nextTick + this._interval <
                          this.time + this.duration &&
                        ((this._nextTick += this._interval),
                        (this._currentId = this._nextId),
                        (this._nextId = this.Transport.scheduleOnce(
                          this.invoke.bind(this),
                          t.Ticks(this._nextTick)
                        )))
                    }),
                    (t.TransportRepeatEvent.prototype._restart = function(e) {
                      this.Transport.clear(this._currentId),
                        this.Transport.clear(this._nextId),
                        (this._nextTick = this.time)
                      var i = this.Transport.getTicksAtTime(e)
                      i > this.time &&
                        (this._nextTick =
                          this.time +
                          Math.ceil((i - this.time) / this._interval) *
                            this._interval),
                        (this._currentId = this.Transport.scheduleOnce(
                          this.invoke.bind(this),
                          t.Ticks(this._nextTick)
                        )),
                        (this._nextTick += this._interval),
                        (this._nextId = this.Transport.scheduleOnce(
                          this.invoke.bind(this),
                          t.Ticks(this._nextTick)
                        ))
                    }),
                    (t.TransportRepeatEvent.prototype.dispose = function() {
                      return (
                        this.Transport.clear(this._currentId),
                        this.Transport.clear(this._nextId),
                        this.Transport.off(
                          'start loopStart',
                          this._boundRestart
                        ),
                        (this._boundCreateEvents = null),
                        t.TransportEvent.prototype.dispose.call(this),
                        (this.duration = null),
                        (this._interval = null),
                        this
                      )
                    }),
                    t.TransportRepeatEvent
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(4)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.IntervalTimeline = function() {
                    t.call(this), (this._root = null), (this._length = 0)
                  }),
                    t.extend(t.IntervalTimeline),
                    (t.IntervalTimeline.prototype.add = function(i) {
                      if (t.isUndef(i.time) || t.isUndef(i.duration))
                        throw new Error(
                          'Tone.IntervalTimeline: events must have time and duration parameters'
                        )
                      i.time = i.time.valueOf()
                      var n = new e(i.time, i.time + i.duration, i)
                      for (
                        null === this._root
                          ? (this._root = n)
                          : this._root.insert(n),
                          this._length++;
                        null !== n;

                      )
                        n.updateHeight(),
                          n.updateMax(),
                          this._rebalance(n),
                          (n = n.parent)
                      return this
                    }),
                    (t.IntervalTimeline.prototype.remove = function(t) {
                      if (null !== this._root) {
                        var e = []
                        this._root.search(t.time, e)
                        for (var i = 0; i < e.length; i++) {
                          var n = e[i]
                          if (n.event === t) {
                            this._removeNode(n), this._length--
                            break
                          }
                        }
                      }
                      return this
                    }),
                    Object.defineProperty(
                      t.IntervalTimeline.prototype,
                      'length',
                      {
                        get: function() {
                          return this._length
                        }
                      }
                    ),
                    (t.IntervalTimeline.prototype.cancel = function(t) {
                      return (
                        this.forEachFrom(
                          t,
                          function(t) {
                            this.remove(t)
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    (t.IntervalTimeline.prototype._setRoot = function(t) {
                      ;(this._root = t),
                        null !== this._root && (this._root.parent = null)
                    }),
                    (t.IntervalTimeline.prototype._replaceNodeInParent = function(
                      t,
                      e
                    ) {
                      null !== t.parent
                        ? (t.isLeftChild()
                            ? (t.parent.left = e)
                            : (t.parent.right = e),
                          this._rebalance(t.parent))
                        : this._setRoot(e)
                    }),
                    (t.IntervalTimeline.prototype._removeNode = function(t) {
                      if (null === t.left && null === t.right)
                        this._replaceNodeInParent(t, null)
                      else if (null === t.right)
                        this._replaceNodeInParent(t, t.left)
                      else if (null === t.left)
                        this._replaceNodeInParent(t, t.right)
                      else {
                        var e, i
                        if (t.getBalance() > 0)
                          if (null === t.left.right)
                            ((e = t.left).right = t.right), (i = e)
                          else {
                            for (e = t.left.right; null !== e.right; )
                              e = e.right
                            ;(e.parent.right = e.left),
                              (i = e.parent),
                              (e.left = t.left),
                              (e.right = t.right)
                          }
                        else if (null === t.right.left)
                          ((e = t.right).left = t.left), (i = e)
                        else {
                          for (e = t.right.left; null !== e.left; ) e = e.left
                          ;(e.parent = e.parent),
                            (e.parent.left = e.right),
                            (i = e.parent),
                            (e.left = t.left),
                            (e.right = t.right)
                        }
                        null !== t.parent
                          ? t.isLeftChild()
                            ? (t.parent.left = e)
                            : (t.parent.right = e)
                          : this._setRoot(e),
                          this._rebalance(i)
                      }
                      t.dispose()
                    }),
                    (t.IntervalTimeline.prototype._rotateLeft = function(t) {
                      var e = t.parent,
                        i = t.isLeftChild(),
                        n = t.right
                      ;(t.right = n.left),
                        (n.left = t),
                        null !== e
                          ? i
                            ? (e.left = n)
                            : (e.right = n)
                          : this._setRoot(n)
                    }),
                    (t.IntervalTimeline.prototype._rotateRight = function(t) {
                      var e = t.parent,
                        i = t.isLeftChild(),
                        n = t.left
                      ;(t.left = n.right),
                        (n.right = t),
                        null !== e
                          ? i
                            ? (e.left = n)
                            : (e.right = n)
                          : this._setRoot(n)
                    }),
                    (t.IntervalTimeline.prototype._rebalance = function(t) {
                      var e = t.getBalance()
                      e > 1
                        ? t.left.getBalance() < 0
                          ? this._rotateLeft(t.left)
                          : this._rotateRight(t)
                        : e < -1 &&
                          (t.right.getBalance() > 0
                            ? this._rotateRight(t.right)
                            : this._rotateLeft(t))
                    }),
                    (t.IntervalTimeline.prototype.get = function(t) {
                      if (null !== this._root) {
                        var e = []
                        if ((this._root.search(t, e), e.length > 0)) {
                          for (var i = e[0], n = 1; n < e.length; n++)
                            e[n].low > i.low && (i = e[n])
                          return i.event
                        }
                      }
                      return null
                    }),
                    (t.IntervalTimeline.prototype.forEach = function(t) {
                      if (null !== this._root) {
                        var e = []
                        this._root.traverse(function(t) {
                          e.push(t)
                        })
                        for (var i = 0; i < e.length; i++) {
                          var n = e[i].event
                          n && t(n)
                        }
                      }
                      return this
                    }),
                    (t.IntervalTimeline.prototype.forEachAtTime = function(
                      t,
                      e
                    ) {
                      if (null !== this._root) {
                        var i = []
                        this._root.search(t, i)
                        for (var n = i.length - 1; n >= 0; n--) {
                          var o = i[n].event
                          o && e(o)
                        }
                      }
                      return this
                    }),
                    (t.IntervalTimeline.prototype.forEachFrom = function(t, e) {
                      if (null !== this._root) {
                        var i = []
                        this._root.searchAfter(t, i)
                        for (var n = i.length - 1; n >= 0; n--) e(i[n].event)
                      }
                      return this
                    }),
                    (t.IntervalTimeline.prototype.dispose = function() {
                      var t = []
                      null !== this._root &&
                        this._root.traverse(function(e) {
                          t.push(e)
                        })
                      for (var e = 0; e < t.length; e++) t[e].dispose()
                      return (t = null), (this._root = null), this
                    })
                  var e = function(t, e, i) {
                    ;(this.event = i),
                      (this.low = t),
                      (this.high = e),
                      (this.max = this.high),
                      (this._left = null),
                      (this._right = null),
                      (this.parent = null),
                      (this.height = 0)
                  }
                  return (
                    (e.prototype.insert = function(t) {
                      t.low <= this.low
                        ? null === this.left
                          ? (this.left = t)
                          : this.left.insert(t)
                        : null === this.right
                        ? (this.right = t)
                        : this.right.insert(t)
                    }),
                    (e.prototype.search = function(t, e) {
                      t > this.max ||
                        (null !== this.left && this.left.search(t, e),
                        this.low <= t && this.high > t && e.push(this),
                        this.low > t ||
                          (null !== this.right && this.right.search(t, e)))
                    }),
                    (e.prototype.searchAfter = function(t, e) {
                      this.low >= t &&
                        (e.push(this),
                        null !== this.left && this.left.searchAfter(t, e)),
                        null !== this.right && this.right.searchAfter(t, e)
                    }),
                    (e.prototype.traverse = function(t) {
                      t(this),
                        null !== this.left && this.left.traverse(t),
                        null !== this.right && this.right.traverse(t)
                    }),
                    (e.prototype.updateHeight = function() {
                      null !== this.left && null !== this.right
                        ? (this.height =
                            Math.max(this.left.height, this.right.height) + 1)
                        : null !== this.right
                        ? (this.height = this.right.height + 1)
                        : null !== this.left
                        ? (this.height = this.left.height + 1)
                        : (this.height = 0)
                    }),
                    (e.prototype.updateMax = function() {
                      ;(this.max = this.high),
                        null !== this.left &&
                          (this.max = Math.max(this.max, this.left.max)),
                        null !== this.right &&
                          (this.max = Math.max(this.max, this.right.max))
                    }),
                    (e.prototype.getBalance = function() {
                      var t = 0
                      return (
                        null !== this.left && null !== this.right
                          ? (t = this.left.height - this.right.height)
                          : null !== this.left
                          ? (t = this.left.height + 1)
                          : null !== this.right &&
                            (t = -(this.right.height + 1)),
                        t
                      )
                    }),
                    (e.prototype.isLeftChild = function() {
                      return null !== this.parent && this.parent.left === this
                    }),
                    Object.defineProperty(e.prototype, 'left', {
                      get: function() {
                        return this._left
                      },
                      set: function(t) {
                        ;(this._left = t),
                          null !== t && (t.parent = this),
                          this.updateHeight(),
                          this.updateMax()
                      }
                    }),
                    Object.defineProperty(e.prototype, 'right', {
                      get: function() {
                        return this._right
                      },
                      set: function(t) {
                        ;(this._right = t),
                          null !== t && (t.parent = this),
                          this.updateHeight(),
                          this.updateMax()
                      }
                    }),
                    (e.prototype.dispose = function() {
                      ;(this.parent = null),
                        (this._left = null),
                        (this._right = null),
                        (this.event = null)
                    }),
                    t.IntervalTimeline
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1)]),
              void 0 ===
                (o = function(t) {
                  function e(t) {
                    return function(e, i) {
                      ;(i = this.toSeconds(i)), t.apply(this, arguments)
                      var n = this._events.get(i),
                        o = this._events.previousEvent(n),
                        r = this._getTicksUntilEvent(o, i)
                      return (n.ticks = Math.max(r, 0)), this
                    }
                  }
                  return (
                    (t.TickSignal = function(e) {
                      ;(e = t.defaultArg(e, 1)),
                        t.Signal.call(this, { units: t.Type.Ticks, value: e }),
                        (this._events.memory = 1 / 0),
                        this.cancelScheduledValues(0),
                        this._events.add({
                          type: t.Param.AutomationType.SetValue,
                          time: 0,
                          value: e
                        })
                    }),
                    t.extend(t.TickSignal, t.Signal),
                    (t.TickSignal.prototype.setValueAtTime = e(
                      t.Signal.prototype.setValueAtTime
                    )),
                    (t.TickSignal.prototype.linearRampToValueAtTime = e(
                      t.Signal.prototype.linearRampToValueAtTime
                    )),
                    (t.TickSignal.prototype.setTargetAtTime = function(
                      t,
                      e,
                      i
                    ) {
                      ;(e = this.toSeconds(e)),
                        this.setRampPoint(e),
                        (t = this._fromUnits(t))
                      for (
                        var n = this._events.get(e),
                          o = Math.round(Math.max(1 / i, 1)),
                          r = 0;
                        r <= o;
                        r++
                      ) {
                        var s = i * r + e,
                          a = this._exponentialApproach(
                            n.time,
                            n.value,
                            t,
                            i,
                            s
                          )
                        this.linearRampToValueAtTime(this._toUnits(a), s)
                      }
                      return this
                    }),
                    (t.TickSignal.prototype.exponentialRampToValueAtTime = function(
                      t,
                      e
                    ) {
                      ;(e = this.toSeconds(e)), (t = this._fromUnits(t))
                      var i = this._events.get(e)
                      null === i && (i = { value: this._initialValue, time: 0 })
                      for (
                        var n = Math.round(Math.max(10 * (e - i.time), 1)),
                          o = (e - i.time) / n,
                          r = 0;
                        r <= n;
                        r++
                      ) {
                        var s = o * r + i.time,
                          a = this._exponentialInterpolate(
                            i.time,
                            i.value,
                            e,
                            t,
                            s
                          )
                        this.linearRampToValueAtTime(this._toUnits(a), s)
                      }
                      return this
                    }),
                    (t.TickSignal.prototype._getTicksUntilEvent = function(
                      e,
                      i
                    ) {
                      if (null === e) e = { ticks: 0, time: 0 }
                      else if (t.isUndef(e.ticks)) {
                        var n = this._events.previousEvent(e)
                        e.ticks = this._getTicksUntilEvent(n, e.time)
                      }
                      var o = this.getValueAtTime(e.time),
                        r = this.getValueAtTime(i)
                      return (
                        this._events.get(i).time === i &&
                          this._events.get(i).type ===
                            t.Param.AutomationType.SetValue &&
                          (r = this.getValueAtTime(i - this.sampleTime)),
                        0.5 * (i - e.time) * (o + r) + e.ticks
                      )
                    }),
                    (t.TickSignal.prototype.getTicksAtTime = function(t) {
                      t = this.toSeconds(t)
                      var e = this._events.get(t)
                      return Math.max(this._getTicksUntilEvent(e, t), 0)
                    }),
                    (t.TickSignal.prototype.getDurationOfTicks = function(
                      t,
                      e
                    ) {
                      e = this.toSeconds(e)
                      var i = this.getTicksAtTime(e)
                      return this.getTimeOfTick(i + t) - e
                    }),
                    (t.TickSignal.prototype.getTimeOfTick = function(e) {
                      var i = this._events.get(e, 'ticks'),
                        n = this._events.getAfter(e, 'ticks')
                      if (i && i.ticks === e) return i.time
                      if (
                        i &&
                        n &&
                        n.type === t.Param.AutomationType.Linear &&
                        i.value !== n.value
                      ) {
                        var o = this.getValueAtTime(i.time),
                          r =
                            (this.getValueAtTime(n.time) - o) /
                            (n.time - i.time),
                          s = Math.sqrt(Math.pow(o, 2) - 2 * r * (i.ticks - e)),
                          a = (-o + s) / r
                        return (a > 0 ? a : (-o - s) / r) + i.time
                      }
                      return i
                        ? 0 === i.value
                          ? 1 / 0
                          : i.time + (e - i.ticks) / i.value
                        : e / this._initialValue
                    }),
                    (t.TickSignal.prototype.ticksToTime = function(e, i) {
                      return (
                        (i = this.toSeconds(i)),
                        new t.Time(this.getDurationOfTicks(e, i))
                      )
                    }),
                    (t.TickSignal.prototype.timeToTicks = function(e, i) {
                      ;(i = this.toSeconds(i)), (e = this.toSeconds(e))
                      var n = this.getTicksAtTime(i),
                        o = this.getTicksAtTime(i + e)
                      return new t.Ticks(o - n)
                    }),
                    t.TickSignal
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(56), i(33), i(35), i(20)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Clock = function() {
                      var e = t.defaults(
                        arguments,
                        ['callback', 'frequency'],
                        t.Clock
                      )
                      t.Emitter.call(this),
                        (this.callback = e.callback),
                        (this._nextTick = 0),
                        (this._tickSource = new t.TickSource(e.frequency)),
                        (this._lastUpdate = 0),
                        (this.frequency = this._tickSource.frequency),
                        this._readOnly('frequency'),
                        (this._state = new t.TimelineState(t.State.Stopped)),
                        this._state.setStateAtTime(t.State.Stopped, 0),
                        (this._boundLoop = this._loop.bind(this)),
                        this.context.on('tick', this._boundLoop)
                    }),
                    t.extend(t.Clock, t.Emitter),
                    (t.Clock.defaults = { callback: t.noOp, frequency: 1 }),
                    Object.defineProperty(t.Clock.prototype, 'state', {
                      get: function() {
                        return this._state.getValueAtTime(this.now())
                      }
                    }),
                    (t.Clock.prototype.start = function(e, i) {
                      return (
                        this.context.resume(),
                        (e = this.toSeconds(e)),
                        this._state.getValueAtTime(e) !== t.State.Started &&
                          (this._state.setStateAtTime(t.State.Started, e),
                          this._tickSource.start(e, i),
                          e < this._lastUpdate && this.emit('start', e, i)),
                        this
                      )
                    }),
                    (t.Clock.prototype.stop = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._state.cancel(e),
                        this._state.setStateAtTime(t.State.Stopped, e),
                        this._tickSource.stop(e),
                        e < this._lastUpdate && this.emit('stop', e),
                        this
                      )
                    }),
                    (t.Clock.prototype.pause = function(e) {
                      return (
                        (e = this.toSeconds(e)),
                        this._state.getValueAtTime(e) === t.State.Started &&
                          (this._state.setStateAtTime(t.State.Paused, e),
                          this._tickSource.pause(e),
                          e < this._lastUpdate && this.emit('pause', e)),
                        this
                      )
                    }),
                    Object.defineProperty(t.Clock.prototype, 'ticks', {
                      get: function() {
                        return Math.ceil(this.getTicksAtTime(this.now()))
                      },
                      set: function(t) {
                        this._tickSource.ticks = t
                      }
                    }),
                    Object.defineProperty(t.Clock.prototype, 'seconds', {
                      get: function() {
                        return this._tickSource.seconds
                      },
                      set: function(t) {
                        this._tickSource.seconds = t
                      }
                    }),
                    (t.Clock.prototype.getSecondsAtTime = function(t) {
                      return this._tickSource.getSecondsAtTime(t)
                    }),
                    (t.Clock.prototype.setTicksAtTime = function(t, e) {
                      return this._tickSource.setTicksAtTime(t, e), this
                    }),
                    (t.Clock.prototype.getTicksAtTime = function(t) {
                      return this._tickSource.getTicksAtTime(t)
                    }),
                    (t.Clock.prototype.nextTickTime = function(t, e) {
                      e = this.toSeconds(e)
                      var i = this.getTicksAtTime(e)
                      return this._tickSource.getTimeOfTick(i + t, e)
                    }),
                    (t.Clock.prototype._loop = function() {
                      var e = this._lastUpdate,
                        i = this.now()
                      ;(this._lastUpdate = i),
                        e !== i &&
                          (this._state.forEachBetween(
                            e,
                            i,
                            function(e) {
                              switch (e.state) {
                                case t.State.Started:
                                  var i = this._tickSource.getTicksAtTime(
                                    e.time
                                  )
                                  this.emit('start', e.time, i)
                                  break
                                case t.State.Stopped:
                                  0 !== e.time && this.emit('stop', e.time)
                                  break
                                case t.State.Paused:
                                  this.emit('pause', e.time)
                              }
                            }.bind(this)
                          ),
                          this._tickSource.forEachTickBetween(
                            e,
                            i,
                            function(t, e) {
                              this.callback(t, e)
                            }.bind(this)
                          ))
                    }),
                    (t.Clock.prototype.getStateAtTime = function(t) {
                      return (
                        (t = this.toSeconds(t)), this._state.getValueAtTime(t)
                      )
                    }),
                    (t.Clock.prototype.dispose = function() {
                      t.Emitter.prototype.dispose.call(this),
                        this.context.off('tick', this._boundLoop),
                        this._writable('frequency'),
                        this._tickSource.dispose(),
                        (this._tickSource = null),
                        (this.frequency = null),
                        (this._boundLoop = null),
                        (this._nextTick = 1 / 0),
                        (this.callback = null),
                        this._state.dispose(),
                        (this._state = null)
                    }),
                    t.Clock
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(1), i(5), i(7)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.GreaterThanZero = function() {
                      t.SignalBase.call(this),
                        (this._thresh = this.output = new t.WaveShaper(function(
                          t
                        ) {
                          return t <= 0 ? 0 : 1
                        },
                        127)),
                        (this._scale = this.input = new t.Multiply(1e4)),
                        this._scale.connect(this._thresh)
                    }),
                    t.extend(t.GreaterThanZero, t.SignalBase),
                    (t.GreaterThanZero.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._scale.dispose(),
                        (this._scale = null),
                        this._thresh.dispose(),
                        (this._thresh = null),
                        this
                      )
                    }),
                    t.GreaterThanZero
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(87), i(13), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.GreaterThan = function(e) {
                      t.Signal.call(this),
                        this.createInsOuts(2, 0),
                        (this._param = this.input[0] = new t.Subtract(e)),
                        (this.input[1] = this._param.input[1]),
                        (this._gtz = this.output = new t.GreaterThanZero()),
                        this._param.connect(this._gtz),
                        (this.proxy = !1)
                    }),
                    t.extend(t.GreaterThan, t.Signal),
                    (t.GreaterThan.prototype.dispose = function() {
                      return (
                        t.Signal.prototype.dispose.call(this),
                        this._gtz.dispose(),
                        (this._gtz = null),
                        this
                      )
                    }),
                    t.GreaterThan
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(47), i(26)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.ScaledEnvelope = function() {
                      var e = t.defaults(
                        arguments,
                        ['attack', 'decay', 'sustain', 'release'],
                        t.Envelope
                      )
                      t.Envelope.call(this, e),
                        (e = t.defaultArg(e, t.ScaledEnvelope.defaults)),
                        (this._exp = this.output = new t.Pow(e.exponent)),
                        (this._scale = this.output = new t.Scale(e.min, e.max)),
                        this._sig.chain(this._exp, this._scale)
                    }),
                    t.extend(t.ScaledEnvelope, t.Envelope),
                    (t.ScaledEnvelope.defaults = {
                      min: 0,
                      max: 1,
                      exponent: 1
                    }),
                    Object.defineProperty(t.ScaledEnvelope.prototype, 'min', {
                      get: function() {
                        return this._scale.min
                      },
                      set: function(t) {
                        this._scale.min = t
                      }
                    }),
                    Object.defineProperty(t.ScaledEnvelope.prototype, 'max', {
                      get: function() {
                        return this._scale.max
                      },
                      set: function(t) {
                        this._scale.max = t
                      }
                    }),
                    Object.defineProperty(
                      t.ScaledEnvelope.prototype,
                      'exponent',
                      {
                        get: function() {
                          return this._exp.value
                        },
                        set: function(t) {
                          this._exp.value = t
                        }
                      }
                    ),
                    (t.ScaledEnvelope.prototype.dispose = function() {
                      return (
                        t.Envelope.prototype.dispose.call(this),
                        this._scale.dispose(),
                        (this._scale = null),
                        this._exp.dispose(),
                        (this._exp = null),
                        this
                      )
                    }),
                    t.ScaledEnvelope
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(36)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Abs = function() {
                      t.SignalBase.call(this),
                        (this._abs = this.input = this.output = new t.WaveShaper(
                          function(t) {
                            return Math.abs(t) < 0.001 ? 0 : Math.abs(t)
                          },
                          1024
                        ))
                    }),
                    t.extend(t.Abs, t.SignalBase),
                    (t.Abs.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._abs.dispose(),
                        (this._abs = null),
                        this
                      )
                    }),
                    t.Abs
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Solo = function() {
                      var e = t.defaults(arguments, ['solo'], t.Solo)
                      t.AudioNode.call(this),
                        (this.input = this.output = new t.Gain()),
                        (this._soloBind = this._soloed.bind(this)),
                        this.context.on('solo', this._soloBind),
                        (this.solo = e.solo)
                    }),
                    t.extend(t.Solo, t.AudioNode),
                    (t.Solo.defaults = { solo: !1 }),
                    Object.defineProperty(t.Solo.prototype, 'solo', {
                      get: function() {
                        return this._isSoloed()
                      },
                      set: function(t) {
                        t ? this._addSolo() : this._removeSolo(),
                          this.context.emit('solo', this)
                      }
                    }),
                    Object.defineProperty(t.Solo.prototype, 'muted', {
                      get: function() {
                        return 0 === this.input.gain.value
                      }
                    }),
                    (t.Solo.prototype._addSolo = function() {
                      t.isArray(this.context._currentSolo) ||
                        (this.context._currentSolo = []),
                        this._isSoloed() || this.context._currentSolo.push(this)
                    }),
                    (t.Solo.prototype._removeSolo = function() {
                      if (this._isSoloed()) {
                        var t = this.context._currentSolo.indexOf(this)
                        this.context._currentSolo.splice(t, 1)
                      }
                    }),
                    (t.Solo.prototype._isSoloed = function() {
                      return (
                        !!t.isArray(this.context._currentSolo) &&
                        0 !== this.context._currentSolo.length &&
                        -1 !== this.context._currentSolo.indexOf(this)
                      )
                    }),
                    (t.Solo.prototype._noSolos = function() {
                      return (
                        !t.isArray(this.context._currentSolo) ||
                        0 === this.context._currentSolo.length
                      )
                    }),
                    (t.Solo.prototype._soloed = function() {
                      this._isSoloed()
                        ? (this.input.gain.value = 1)
                        : this._noSolos()
                        ? (this.input.gain.value = 1)
                        : (this.input.gain.value = 0)
                    }),
                    (t.Solo.prototype.dispose = function() {
                      return (
                        this.context.off('solo', this._soloBind),
                        this._removeSolo(),
                        (this._soloBind = null),
                        t.AudioNode.prototype.dispose.call(this),
                        this
                      )
                    }),
                    t.Solo
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(10), i(28), i(19), i(3), i(1), i(20)]),
              void 0 ===
                (o = function(t) {
                  if (
                    t.supported &&
                    !t.global.AudioContext.prototype.createStereoPanner
                  ) {
                    var e = function(e) {
                      ;(this.context = e),
                        (this.pan = new t.Signal(0, t.Type.AudioRange))
                      var i = new t.WaveShaper(function(e) {
                          return t.equalPowerScale((e + 1) / 2)
                        }, 4096),
                        n = new t.WaveShaper(function(e) {
                          return t.equalPowerScale(1 - (e + 1) / 2)
                        }, 4096),
                        o = new t.Gain(),
                        r = new t.Gain(),
                        s = (this.input = new t.Split())
                      ;(s._splitter.channelCountMode = 'explicit'),
                        new t.Zero().fan(i, n)
                      var a = (this.output = new t.Merge())
                      s.left.chain(o, a.left),
                        s.right.chain(r, a.right),
                        this.pan.chain(n, o.gain),
                        this.pan.chain(i, r.gain)
                    }
                    ;(e.prototype.disconnect = function() {
                      this.output.disconnect.apply(this.output, arguments)
                    }),
                      (e.prototype.connect = function() {
                        this.output.connect.apply(this.output, arguments)
                      }),
                      (AudioContext.prototype.createStereoPanner = function() {
                        return new e(this)
                      }),
                      (t.Context.prototype.createStereoPanner = function() {
                        return new e(this)
                      })
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.EqualPowerGain = function() {
                      t.SignalBase.call(this),
                        (this._eqPower = this.input = this.output = new t.WaveShaper(
                          function(e) {
                            return Math.abs(e) < 0.001
                              ? 0
                              : t.equalPowerScale(e)
                          }.bind(this),
                          4096
                        ))
                    }),
                    t.extend(t.EqualPowerGain, t.SignalBase),
                    (t.EqualPowerGain.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._eqPower.dispose(),
                        (this._eqPower = null),
                        this
                      )
                    }),
                    t.EqualPowerGain
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(5), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Negate = function() {
                      t.SignalBase.call(this),
                        (this._multiply = this.input = this.output = new t.Multiply(
                          -1
                        ))
                    }),
                    t.extend(t.Negate, t.SignalBase),
                    (t.Negate.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._multiply.dispose(),
                        (this._multiply = null),
                        this
                      )
                    }),
                    t.Negate
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(60), i(27), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PanVol = function() {
                      var e = t.defaults(arguments, ['pan', 'volume'], t.PanVol)
                      t.AudioNode.call(this),
                        (this._panner = this.input = new t.Panner(e.pan)),
                        (this.pan = this._panner.pan),
                        (this._volume = this.output = new t.Volume(e.volume)),
                        (this.volume = this._volume.volume),
                        this._panner.connect(this._volume),
                        (this.mute = e.mute),
                        this._readOnly(['pan', 'volume'])
                    }),
                    t.extend(t.PanVol, t.AudioNode),
                    (t.PanVol.defaults = { pan: 0, volume: 0, mute: !1 }),
                    Object.defineProperty(t.PanVol.prototype, 'mute', {
                      get: function() {
                        return this._volume.mute
                      },
                      set: function(t) {
                        this._volume.mute = t
                      }
                    }),
                    (t.PanVol.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['pan', 'volume']),
                        this._panner.dispose(),
                        (this._panner = null),
                        (this.pan = null),
                        this._volume.dispose(),
                        (this._volume = null),
                        (this.volume = null),
                        this
                      )
                    }),
                    t.PanVol
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(34)]),
              void 0 ===
                (o = function(t) {
                  t.supported &&
                    (AnalyserNode.prototype.getFloatTimeDomainData ||
                      (AnalyserNode.prototype.getFloatTimeDomainData = function(
                        t
                      ) {
                        var e = new Uint8Array(t.length)
                        this.getByteTimeDomainData(e)
                        for (var i = 0; i < e.length; i++)
                          t[i] = (e[i] - 128) / 128
                      }))
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(34), i(63), i(20), i(3)]),
              void 0 ===
                (o = function(t) {
                  if (
                    t.supported &&
                    !t.global.AudioContext.prototype.createConstantSource
                  ) {
                    var e = function(t) {
                      this.context = t
                      for (
                        var e = t.createBuffer(1, 128, t.sampleRate),
                          i = e.getChannelData(0),
                          n = 0;
                        n < i.length;
                        n++
                      )
                        i[n] = 1
                      ;(this._bufferSource = t.createBufferSource()),
                        (this._bufferSource.channelCount = 1),
                        (this._bufferSource.channelCountMode = 'explicit'),
                        (this._bufferSource.buffer = e),
                        (this._bufferSource.loop = !0)
                      var o = (this._output = t.createGain())
                      ;(this.offset = o.gain), this._bufferSource.connect(o)
                    }
                    ;(e.prototype.start = function(t) {
                      return this._bufferSource.start(t), this
                    }),
                      (e.prototype.stop = function(t) {
                        return this._bufferSource.stop(t), this
                      }),
                      (e.prototype.connect = function() {
                        return (
                          this._output.connect.apply(this._output, arguments),
                          this
                        )
                      }),
                      (e.prototype.disconnect = function() {
                        return (
                          this._output.disconnect.apply(
                            this._output,
                            arguments
                          ),
                          this
                        )
                      }),
                      (AudioContext.prototype.createConstantSource = function() {
                        return new e(this)
                      }),
                      (t.Context.prototype.createConstantSource = function() {
                        return new e(this)
                      })
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(34)]),
              void 0 ===
                (o = function(t) {
                  if (
                    t.supported &&
                    !t.global.AudioContext.prototype._native_createWaveShaper
                  ) {
                    var e = navigator.userAgent.toLowerCase()
                    if (e.includes('safari') && !e.includes('chrome')) {
                      var i = function(t) {
                        for (var e in ((this._internalNode = this.input = this.output = t._native_createWaveShaper()),
                        (this._curve = null),
                        this._internalNode))
                          this._defineProperty(this._internalNode, e)
                      }
                      Object.defineProperty(i.prototype, 'curve', {
                        get: function() {
                          return this._curve
                        },
                        set: function(t) {
                          this._curve = t
                          var e = new Float32Array(t.length + 1)
                          e.set(t, 1),
                            (e[0] = t[0]),
                            (this._internalNode.curve = e)
                        }
                      }),
                        (i.prototype._defineProperty = function(e, i) {
                          t.isUndef(this[i]) &&
                            Object.defineProperty(this, i, {
                              get: function() {
                                return 'function' == typeof e[i]
                                  ? e[i].bind(e)
                                  : e[i]
                              },
                              set: function(t) {
                                e[i] = t
                              }
                            })
                        }),
                        (t.global.AudioContext.prototype._native_createWaveShaper =
                          t.global.AudioContext.prototype.createWaveShaper),
                        (t.global.AudioContext.prototype.createWaveShaper = function() {
                          return new i(this)
                        })
                    }
                  }
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(46)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Midi = function(e, i) {
                      if (!(this instanceof t.Midi)) return new t.Midi(e, i)
                      t.Frequency.call(this, e, i)
                    }),
                    t.extend(t.Midi, t.Frequency),
                    (t.Midi.prototype._defaultUnits = 'midi'),
                    (t.Midi.prototype._frequencyToUnits = function(e) {
                      return t.Frequency.ftom(
                        t.Frequency.prototype._frequencyToUnits.call(this, e)
                      )
                    }),
                    (t.Midi.prototype._ticksToUnits = function(e) {
                      return t.Frequency.ftom(
                        t.Frequency.prototype._ticksToUnits.call(this, e)
                      )
                    }),
                    (t.Midi.prototype._beatsToUnits = function(e) {
                      return t.Frequency.ftom(
                        t.Frequency.prototype._beatsToUnits.call(this, e)
                      )
                    }),
                    (t.Midi.prototype._secondsToUnits = function(e) {
                      return t.Frequency.ftom(
                        t.Frequency.prototype._secondsToUnits.call(this, e)
                      )
                    }),
                    (t.Midi.prototype.toMidi = function() {
                      return this.valueOf()
                    }),
                    (t.Midi.prototype.toFrequency = function() {
                      return t.Frequency.mtof(this.toMidi())
                    }),
                    (t.Midi.prototype.transpose = function(t) {
                      return new this.constructor(this.toMidi() + t)
                    }),
                    t.Midi
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(27), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.UserMedia = function() {
                      var e = t.defaults(arguments, ['volume'], t.UserMedia)
                      t.AudioNode.call(this),
                        (this._mediaStream = null),
                        (this._stream = null),
                        (this._device = null),
                        (this._volume = this.output = new t.Volume(e.volume)),
                        (this.volume = this._volume.volume),
                        this._readOnly('volume'),
                        (this.mute = e.mute)
                    }),
                    t.extend(t.UserMedia, t.AudioNode),
                    (t.UserMedia.defaults = { volume: 0, mute: !1 }),
                    (t.UserMedia.prototype.open = function(e) {
                      return (
                        this.state === t.State.Started && this.close(),
                        t.UserMedia.enumerateDevices().then(
                          function(i) {
                            var n
                            if (t.isNumber(e)) n = i[e]
                            else if (
                              !(n = i.find(function(t) {
                                return t.label === e || t.deviceId === e
                              })) &&
                              i.length > 0
                            )
                              n = i[0]
                            else if (!n && t.isDefined(e))
                              throw new Error(
                                'Tone.UserMedia: no matching device: ' + e
                              )
                            this._device = n
                            var o = {
                              audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                              }
                            }
                            return (
                              n && (o.audio.deviceId = n.deviceId),
                              navigator.mediaDevices.getUserMedia(o).then(
                                function(t) {
                                  return (
                                    this._stream ||
                                      ((this._stream = t),
                                      (this._mediaStream = this.context.createMediaStreamSource(
                                        t
                                      )),
                                      this._mediaStream.connect(this.output)),
                                    this
                                  )
                                }.bind(this)
                              )
                            )
                          }.bind(this)
                        )
                      )
                    }),
                    (t.UserMedia.prototype.close = function() {
                      return (
                        this._stream &&
                          (this._stream.getAudioTracks().forEach(function(t) {
                            t.stop()
                          }),
                          (this._stream = null),
                          this._mediaStream.disconnect(),
                          (this._mediaStream = null)),
                        (this._device = null),
                        this
                      )
                    }),
                    (t.UserMedia.enumerateDevices = function() {
                      return navigator.mediaDevices
                        .enumerateDevices()
                        .then(function(t) {
                          return t.filter(function(t) {
                            return 'audioinput' === t.kind
                          })
                        })
                    }),
                    Object.defineProperty(t.UserMedia.prototype, 'state', {
                      get: function() {
                        return this._stream && this._stream.active
                          ? t.State.Started
                          : t.State.Stopped
                      }
                    }),
                    Object.defineProperty(t.UserMedia.prototype, 'deviceId', {
                      get: function() {
                        if (this._device) return this._device.deviceId
                      }
                    }),
                    Object.defineProperty(t.UserMedia.prototype, 'groupId', {
                      get: function() {
                        if (this._device) return this._device.groupId
                      }
                    }),
                    Object.defineProperty(t.UserMedia.prototype, 'label', {
                      get: function() {
                        if (this._device) return this._device.label
                      }
                    }),
                    Object.defineProperty(t.UserMedia.prototype, 'mute', {
                      get: function() {
                        return this._volume.mute
                      },
                      set: function(t) {
                        this._volume.mute = t
                      }
                    }),
                    (t.UserMedia.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this.close(),
                        this._writable('volume'),
                        this._volume.dispose(),
                        (this._volume = null),
                        (this.volume = null),
                        this
                      )
                    }),
                    Object.defineProperty(t.UserMedia, 'supported', {
                      get: function() {
                        return (
                          t.isDefined(navigator.mediaDevices) &&
                          t.isFunction(navigator.mediaDevices.getUserMedia)
                        )
                      }
                    }),
                    t.UserMedia
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(67), i(27), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Players = function(e) {
                      var i = Array.prototype.slice.call(arguments)
                      i.shift()
                      var n = t.defaults(i, ['onload'], t.Players)
                      for (var o in (t.AudioNode.call(this, n),
                      (this._volume = this.output = new t.Volume(n.volume)),
                      (this.volume = this._volume.volume),
                      this._readOnly('volume'),
                      (this._volume.output.output.channelCount = 2),
                      (this._volume.output.output.channelCountMode =
                        'explicit'),
                      (this.mute = n.mute),
                      (this._players = {}),
                      (this._loadingCount = 0),
                      (this._fadeIn = n.fadeIn),
                      (this._fadeOut = n.fadeOut),
                      e))
                        this._loadingCount++,
                          this.add(
                            o,
                            e[o],
                            this._bufferLoaded.bind(this, n.onload)
                          )
                    }),
                    t.extend(t.Players, t.AudioNode),
                    (t.Players.defaults = {
                      volume: 0,
                      mute: !1,
                      onload: t.noOp,
                      fadeIn: 0,
                      fadeOut: 0
                    }),
                    (t.Players.prototype._bufferLoaded = function(t) {
                      this._loadingCount--,
                        0 === this._loadingCount && t && t(this)
                    }),
                    Object.defineProperty(t.Players.prototype, 'mute', {
                      get: function() {
                        return this._volume.mute
                      },
                      set: function(t) {
                        this._volume.mute = t
                      }
                    }),
                    Object.defineProperty(t.Players.prototype, 'fadeIn', {
                      get: function() {
                        return this._fadeIn
                      },
                      set: function(t) {
                        ;(this._fadeIn = t),
                          this._forEach(function(e) {
                            e.fadeIn = t
                          })
                      }
                    }),
                    Object.defineProperty(t.Players.prototype, 'fadeOut', {
                      get: function() {
                        return this._fadeOut
                      },
                      set: function(t) {
                        ;(this._fadeOut = t),
                          this._forEach(function(e) {
                            e.fadeOut = t
                          })
                      }
                    }),
                    Object.defineProperty(t.Players.prototype, 'state', {
                      get: function() {
                        var e = !1
                        return (
                          this._forEach(function(i) {
                            e = e || i.state === t.State.Started
                          }),
                          e ? t.State.Started : t.State.Stopped
                        )
                      }
                    }),
                    (t.Players.prototype.has = function(t) {
                      return this._players.hasOwnProperty(t)
                    }),
                    (t.Players.prototype.get = function(t) {
                      if (this.has(t)) return this._players[t]
                      throw new Error('Tone.Players: no player named ' + t)
                    }),
                    (t.Players.prototype._forEach = function(t) {
                      for (var e in this._players) t(this._players[e], e)
                      return this
                    }),
                    Object.defineProperty(t.Players.prototype, 'loaded', {
                      get: function() {
                        var t = !0
                        return (
                          this._forEach(function(e) {
                            t = t && e.loaded
                          }),
                          t
                        )
                      }
                    }),
                    (t.Players.prototype.add = function(e, i, n) {
                      return (
                        (this._players[e] = new t.Player(i, n).connect(
                          this.output
                        )),
                        (this._players[e].fadeIn = this._fadeIn),
                        (this._players[e].fadeOut = this._fadeOut),
                        this
                      )
                    }),
                    (t.Players.prototype.stopAll = function(t) {
                      this._forEach(function(e) {
                        e.stop(t)
                      })
                    }),
                    (t.Players.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._volume.dispose(),
                        (this._volume = null),
                        this._writable('volume'),
                        (this.volume = null),
                        (this.output = null),
                        this._forEach(function(t) {
                          t.dispose()
                        }),
                        (this._players = null),
                        this
                      )
                    }),
                    t.Players
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(6), i(11), i(31)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.GrainPlayer = function() {
                      var e = t.defaults(
                        arguments,
                        ['url', 'onload'],
                        t.GrainPlayer
                      )
                      t.Source.call(this, e),
                        (this.buffer = new t.Buffer(e.url, e.onload)),
                        (this._clock = new t.Clock(
                          this._tick.bind(this),
                          e.grainSize
                        )),
                        (this._loopStart = 0),
                        (this._loopEnd = 0),
                        (this._activeSources = []),
                        (this._playbackRate = e.playbackRate),
                        (this._grainSize = e.grainSize),
                        (this._overlap = e.overlap),
                        (this.detune = e.detune),
                        (this.overlap = e.overlap),
                        (this.loop = e.loop),
                        (this.playbackRate = e.playbackRate),
                        (this.grainSize = e.grainSize),
                        (this.loopStart = e.loopStart),
                        (this.loopEnd = e.loopEnd),
                        (this.reverse = e.reverse),
                        this._clock.on('stop', this._onstop.bind(this))
                    }),
                    t.extend(t.GrainPlayer, t.Source),
                    (t.GrainPlayer.defaults = {
                      onload: t.noOp,
                      overlap: 0.1,
                      grainSize: 0.2,
                      playbackRate: 1,
                      detune: 0,
                      loop: !1,
                      loopStart: 0,
                      loopEnd: 0,
                      reverse: !1
                    }),
                    (t.GrainPlayer.prototype._start = function(e, i, n) {
                      ;(i = t.defaultArg(i, 0)),
                        (i = this.toSeconds(i)),
                        (e = this.toSeconds(e)),
                        (this._offset = i),
                        this._clock.start(e),
                        n && this.stop(e + this.toSeconds(n))
                    }),
                    (t.GrainPlayer.prototype._stop = function(t) {
                      this._clock.stop(t)
                    }),
                    (t.GrainPlayer.prototype._onstop = function(t) {
                      this._activeSources.forEach(function(e) {
                        ;(e.fadeOut = 0), e.stop(t)
                      })
                    }),
                    (t.GrainPlayer.prototype._tick = function(e) {
                      if (!this.loop && this._offset > this.buffer.duration)
                        this.stop(e)
                      else {
                        var i =
                            this._offset < this._overlap ? 0 : this._overlap,
                          n = new t.BufferSource({
                            buffer: this.buffer,
                            fadeIn: i,
                            fadeOut: this._overlap,
                            loop: this.loop,
                            loopStart: this._loopStart,
                            loopEnd: this._loopEnd,
                            playbackRate: t.intervalToFrequencyRatio(
                              this.detune / 100
                            )
                          }).connect(this.output)
                        n.start(e, this._offset),
                          (this._offset += this.grainSize),
                          n.stop(e + this.grainSize / this.playbackRate),
                          this._activeSources.push(n),
                          (n.onended = function() {
                            var t = this._activeSources.indexOf(n)
                            ;-1 !== t && this._activeSources.splice(t, 1)
                          }.bind(this))
                      }
                    }),
                    Object.defineProperty(
                      t.GrainPlayer.prototype,
                      'playbackRate',
                      {
                        get: function() {
                          return this._playbackRate
                        },
                        set: function(t) {
                          ;(this._playbackRate = t),
                            (this.grainSize = this._grainSize)
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.GrainPlayer.prototype,
                      'loopStart',
                      {
                        get: function() {
                          return this._loopStart
                        },
                        set: function(t) {
                          this._loopStart = this.toSeconds(t)
                        }
                      }
                    ),
                    Object.defineProperty(t.GrainPlayer.prototype, 'loopEnd', {
                      get: function() {
                        return this._loopEnd
                      },
                      set: function(t) {
                        this._loopEnd = this.toSeconds(t)
                      }
                    }),
                    Object.defineProperty(t.GrainPlayer.prototype, 'reverse', {
                      get: function() {
                        return this.buffer.reverse
                      },
                      set: function(t) {
                        this.buffer.reverse = t
                      }
                    }),
                    Object.defineProperty(
                      t.GrainPlayer.prototype,
                      'grainSize',
                      {
                        get: function() {
                          return this._grainSize
                        },
                        set: function(t) {
                          ;(this._grainSize = this.toSeconds(t)),
                            (this._clock.frequency.value =
                              this._playbackRate / this._grainSize)
                        }
                      }
                    ),
                    Object.defineProperty(t.GrainPlayer.prototype, 'overlap', {
                      get: function() {
                        return this._overlap
                      },
                      set: function(t) {
                        this._overlap = this.toSeconds(t)
                      }
                    }),
                    Object.defineProperty(t.GrainPlayer.prototype, 'loaded', {
                      get: function() {
                        return this.buffer.loaded
                      }
                    }),
                    (t.GrainPlayer.prototype.dispose = function() {
                      return (
                        t.Source.prototype.dispose.call(this),
                        this.buffer.dispose(),
                        (this.buffer = null),
                        this._clock.dispose(),
                        (this._clock = null),
                        this._activeSources.forEach(function(t) {
                          t.dispose()
                        }),
                        (this._activeSources = null),
                        this
                      )
                    }),
                    t.GrainPlayer
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(16), i(1), i(45)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.TransportTimelineSignal = function() {
                      t.Signal.apply(this, arguments),
                        (this.output = this._outputSig = new t.Signal(
                          this._initialValue
                        )),
                        (this._lastVal = this.value),
                        (this._synced = t.Transport.scheduleRepeat(
                          this._onTick.bind(this),
                          '1i'
                        )),
                        (this._bindAnchorValue = this._anchorValue.bind(this)),
                        t.Transport.on(
                          'start stop pause',
                          this._bindAnchorValue
                        ),
                        (this._events.memory = 1 / 0)
                    }),
                    t.extend(t.TransportTimelineSignal, t.Signal),
                    (t.TransportTimelineSignal.prototype._onTick = function(e) {
                      var i = this.getValueAtTime(t.Transport.seconds)
                      this._lastVal !== i &&
                        ((this._lastVal = i),
                        this._outputSig.linearRampToValueAtTime(i, e))
                    }),
                    (t.TransportTimelineSignal.prototype._anchorValue = function(
                      e
                    ) {
                      var i = this.getValueAtTime(t.Transport.seconds)
                      return (
                        (this._lastVal = i),
                        this._outputSig.cancelScheduledValues(e),
                        this._outputSig.setValueAtTime(i, e),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.getValueAtTime = function(
                      e
                    ) {
                      return (
                        (e = t.TransportTime(e)),
                        t.Signal.prototype.getValueAtTime.call(this, e)
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.setValueAtTime = function(
                      e,
                      i
                    ) {
                      return (
                        (i = t.TransportTime(i)),
                        t.Signal.prototype.setValueAtTime.call(this, e, i),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(
                      e,
                      i
                    ) {
                      return (
                        (i = t.TransportTime(i)),
                        t.Signal.prototype.linearRampToValueAtTime.call(
                          this,
                          e,
                          i
                        ),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(
                      e,
                      i
                    ) {
                      return (
                        (i = t.TransportTime(i)),
                        t.Signal.prototype.exponentialRampToValueAtTime.call(
                          this,
                          e,
                          i
                        ),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.setTargetAtTime = function(
                      e,
                      i,
                      n
                    ) {
                      return (
                        (i = t.TransportTime(i)),
                        t.Signal.prototype.setTargetAtTime.call(this, e, i, n),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.cancelScheduledValues = function(
                      e
                    ) {
                      return (
                        (e = t.TransportTime(e)),
                        t.Signal.prototype.cancelScheduledValues.call(this, e),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.setValueCurveAtTime = function(
                      e,
                      i,
                      n,
                      o
                    ) {
                      return (
                        (i = t.TransportTime(i)),
                        (n = t.TransportTime(n)),
                        t.Signal.prototype.setValueCurveAtTime.call(
                          this,
                          e,
                          i,
                          n,
                          o
                        ),
                        this
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function(
                      e
                    ) {
                      return t.Signal.prototype.cancelAndHoldAtTime.call(
                        this,
                        t.TransportTime(e)
                      )
                    }),
                    (t.TransportTimelineSignal.prototype.dispose = function() {
                      t.Transport.clear(this._synced),
                        t.Transport.off(
                          'start stop pause',
                          this._syncedCallback
                        ),
                        this._events.cancel(0),
                        t.Signal.prototype.dispose.call(this),
                        this._outputSig.dispose(),
                        (this._outputSig = null)
                    }),
                    t.TransportTimelineSignal
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(29), i(5)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Normalize = function(e, i) {
                      t.SignalBase.call(this),
                        (this._inputMin = t.defaultArg(e, 0)),
                        (this._inputMax = t.defaultArg(i, 1)),
                        (this._sub = this.input = new t.Add(0)),
                        (this._div = this.output = new t.Multiply(1)),
                        this._sub.connect(this._div),
                        this._setRange()
                    }),
                    t.extend(t.Normalize, t.SignalBase),
                    Object.defineProperty(t.Normalize.prototype, 'min', {
                      get: function() {
                        return this._inputMin
                      },
                      set: function(t) {
                        ;(this._inputMin = t), this._setRange()
                      }
                    }),
                    Object.defineProperty(t.Normalize.prototype, 'max', {
                      get: function() {
                        return this._inputMax
                      },
                      set: function(t) {
                        ;(this._inputMax = t), this._setRange()
                      }
                    }),
                    (t.Normalize.prototype._setRange = function() {
                      ;(this._sub.value = -this._inputMin),
                        (this._div.value =
                          1 / (this._inputMax - this._inputMin))
                    }),
                    (t.Normalize.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._sub.dispose(),
                        (this._sub = null),
                        this._div.dispose(),
                        (this._div = null),
                        this
                      )
                    }),
                    t.Normalize
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(7), i(1)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.GainToAudio = function() {
                      t.SignalBase.call(this),
                        (this._norm = this.input = this.output = new t.WaveShaper(
                          function(t) {
                            return 2 * Math.abs(t) - 1
                          }
                        ))
                    }),
                    t.extend(t.GainToAudio, t.SignalBase),
                    (t.GainToAudio.prototype.dispose = function() {
                      return (
                        t.SignalBase.prototype.dispose.call(this),
                        this._norm.dispose(),
                        (this._norm = null),
                        this
                      )
                    }),
                    t.GainToAudio
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  t.supported &&
                    (OscillatorNode.prototype.setPeriodicWave ||
                      (OscillatorNode.prototype.setPeriodicWave =
                        OscillatorNode.prototype.setWaveTable),
                    AudioContext.prototype.createPeriodicWave ||
                      (AudioContext.prototype.createPeriodicWave =
                        AudioContext.prototype.createWaveTable))
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(21), i(79), i(31)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Sampler = function(e) {
                      var i = Array.prototype.slice.call(arguments)
                      i.shift()
                      var n = t.defaults(i, ['onload', 'baseUrl'], t.Sampler)
                      t.Instrument.call(this, n)
                      var o = {}
                      for (var r in e)
                        if (t.isNote(r)) o[t.Frequency(r).toMidi()] = e[r]
                        else {
                          if (isNaN(parseFloat(r)))
                            throw new Error(
                              "Tone.Sampler: url keys must be the note's pitch"
                            )
                          o[r] = e[r]
                        }
                      ;(this._buffers = new t.Buffers(o, n.onload, n.baseUrl)),
                        (this._activeSources = {}),
                        (this.attack = n.attack),
                        (this.release = n.release),
                        (this.curve = n.curve)
                    }),
                    t.extend(t.Sampler, t.Instrument),
                    (t.Sampler.defaults = {
                      attack: 0,
                      release: 0.1,
                      onload: t.noOp,
                      baseUrl: '',
                      curve: 'exponential'
                    }),
                    (t.Sampler.prototype._findClosest = function(t) {
                      for (var e = 0; e < 96; ) {
                        if (this._buffers.has(t + e)) return -e
                        if (this._buffers.has(t - e)) return e
                        e++
                      }
                      return null
                    }),
                    (t.Sampler.prototype.triggerAttack = function(e, i, n) {
                      this.log('triggerAttack', e, i, n),
                        Array.isArray(e) || (e = [e])
                      for (var o = 0; o < e.length; o++) {
                        var r = t.Frequency(e[o]).toMidi(),
                          s = this._findClosest(r)
                        if (null !== s) {
                          var a = r - s,
                            u = this._buffers.get(a),
                            l = t.intervalToFrequencyRatio(s),
                            c = new t.BufferSource({
                              buffer: u,
                              playbackRate: l,
                              fadeIn: this.attack,
                              fadeOut: this.release,
                              curve: this.curve
                            }).connect(this.output)
                          c.start(i, 0, u.duration / l, n),
                            t.isArray(this._activeSources[r]) ||
                              (this._activeSources[r] = []),
                            this._activeSources[r].push(c),
                            (c.onended = function() {
                              if (
                                this._activeSources &&
                                this._activeSources[r]
                              ) {
                                var t = this._activeSources[r].indexOf(c)
                                ;-1 !== t && this._activeSources[r].splice(t, 1)
                              }
                            }.bind(this))
                        }
                      }
                      return this
                    }),
                    (t.Sampler.prototype.triggerRelease = function(e, i) {
                      this.log('triggerRelease', e, i),
                        Array.isArray(e) || (e = [e])
                      for (var n = 0; n < e.length; n++) {
                        var o = t.Frequency(e[n]).toMidi()
                        if (
                          this._activeSources[o] &&
                          this._activeSources[o].length
                        ) {
                          var r = this._activeSources[o].shift()
                          ;(i = this.toSeconds(i)), r.stop(i)
                        }
                      }
                      return this
                    }),
                    (t.Sampler.prototype.releaseAll = function(t) {
                      for (var e in ((t = this.toSeconds(t)),
                      this._activeSources))
                        for (var i = this._activeSources[e]; i.length; )
                          i.shift().stop(t)
                      return this
                    }),
                    (t.Sampler.prototype.sync = function() {
                      return (
                        this._syncMethod('triggerAttack', 1),
                        this._syncMethod('triggerRelease', 1),
                        this
                      )
                    }),
                    (t.Sampler.prototype.triggerAttackRelease = function(
                      e,
                      i,
                      n,
                      o
                    ) {
                      if (
                        ((n = this.toSeconds(n)),
                        this.triggerAttack(e, n, o),
                        t.isArray(i) && t.isArray(e))
                      )
                        for (var r = 0; r < e.length; r++) {
                          var s = i[Math.min(r, i.length - 1)]
                          this.triggerRelease(e[r], n + this.toSeconds(s))
                        }
                      else this.triggerRelease(e, n + this.toSeconds(i))
                      return this
                    }),
                    (t.Sampler.prototype.add = function(e, i, n) {
                      if (t.isNote(e)) {
                        var o = t.Frequency(e).toMidi()
                        this._buffers.add(o, i, n)
                      } else {
                        if (isNaN(parseFloat(e)))
                          throw new Error(
                            "Tone.Sampler: note must be the note's pitch. Instead got " +
                              e
                          )
                        this._buffers.add(e, i, n)
                      }
                    }),
                    Object.defineProperty(t.Sampler.prototype, 'loaded', {
                      get: function() {
                        return this._buffers.loaded
                      }
                    }),
                    (t.Sampler.prototype.dispose = function() {
                      for (var e in (t.Instrument.prototype.dispose.call(this),
                      this._buffers.dispose(),
                      (this._buffers = null),
                      this._activeSources))
                        this._activeSources[e].forEach(function(t) {
                          t.dispose()
                        })
                      return (this._activeSources = null), this
                    }),
                    t.Sampler
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(38), i(6)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PolySynth = function() {
                      var e = t.defaults(
                        arguments,
                        ['polyphony', 'voice'],
                        t.PolySynth
                      )
                      t.Instrument.call(this, e),
                        ((e = t.defaultArg(
                          e,
                          t.Instrument.defaults
                        )).polyphony = Math.min(
                          t.PolySynth.MAX_POLYPHONY,
                          e.polyphony
                        )),
                        (this.voices = new Array(e.polyphony)),
                        this.assert(
                          e.polyphony > 0,
                          'polyphony must be greater than 0'
                        ),
                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                        this._readOnly('detune')
                      for (var i = 0; i < e.polyphony; i++) {
                        var n = new e.voice(arguments[2], arguments[3])
                        if (!(n instanceof t.Monophonic))
                          throw new Error(
                            'Synth constructor must be instance of Tone.Monophonic'
                          )
                        ;(this.voices[i] = n),
                          (n.index = i),
                          n.connect(this.output),
                          n.hasOwnProperty('detune') &&
                            this.detune.connect(n.detune)
                      }
                    }),
                    t.extend(t.PolySynth, t.Instrument),
                    (t.PolySynth.defaults = {
                      polyphony: 4,
                      volume: 0,
                      detune: 0,
                      voice: t.Synth
                    }),
                    (t.PolySynth.prototype._getClosestVoice = function(e, i) {
                      var n = this.voices.find(function(n) {
                        if (
                          Math.abs(
                            n.frequency.getValueAtTime(e) - t.Frequency(i)
                          ) < 1e-4 &&
                          n.getLevelAtTime(e) > 1e-5
                        )
                          return n
                      })
                      return (
                        n ||
                        this.voices.slice().sort(
                          function(t, i) {
                            var n = t.getLevelAtTime(e + this.blockTime),
                              o = i.getLevelAtTime(e + this.blockTime)
                            return (
                              n < 1e-5 && (n = 0), o < 1e-5 && (o = 0), n - o
                            )
                          }.bind(this)
                        )[0]
                      )
                    }),
                    (t.PolySynth.prototype.triggerAttack = function(t, e, i) {
                      return (
                        Array.isArray(t) || (t = [t]),
                        (e = this.toSeconds(e)),
                        t.forEach(
                          function(t) {
                            var n = this._getClosestVoice(e, t)
                            n.triggerAttack(t, e, i),
                              this.log('triggerAttack', n.index, t)
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    (t.PolySynth.prototype.triggerRelease = function(t, e) {
                      return (
                        Array.isArray(t) || (t = [t]),
                        (e = this.toSeconds(e)),
                        t.forEach(
                          function(t) {
                            var i = this._getClosestVoice(e, t)
                            this.log('triggerRelease', i.index, t),
                              i.triggerRelease(e)
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    (t.PolySynth.prototype.triggerAttackRelease = function(
                      e,
                      i,
                      n,
                      o
                    ) {
                      if (
                        ((n = this.toSeconds(n)),
                        this.triggerAttack(e, n, o),
                        t.isArray(i) && t.isArray(e))
                      )
                        for (var r = 0; r < e.length; r++) {
                          var s = i[Math.min(r, i.length - 1)]
                          this.triggerRelease(e[r], n + this.toSeconds(s))
                        }
                      else this.triggerRelease(e, n + this.toSeconds(i))
                      return this
                    }),
                    (t.PolySynth.prototype.sync = function() {
                      return (
                        this._syncMethod('triggerAttack', 1),
                        this._syncMethod('triggerRelease', 1),
                        this
                      )
                    }),
                    (t.PolySynth.prototype.set = function(t, e, i) {
                      for (var n = 0; n < this.voices.length; n++)
                        this.voices[n].set(t, e, i)
                      return this
                    }),
                    (t.PolySynth.prototype.get = function(t) {
                      return this.voices[0].get(t)
                    }),
                    (t.PolySynth.prototype.releaseAll = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this.voices.forEach(function(e) {
                          e.triggerRelease(t)
                        }),
                        this
                      )
                    }),
                    (t.PolySynth.prototype.dispose = function() {
                      return (
                        t.Instrument.prototype.dispose.call(this),
                        this.voices.forEach(function(t) {
                          t.dispose()
                        }),
                        this._writable('detune'),
                        this.detune.dispose(),
                        (this.detune = null),
                        (this.voices = null),
                        this
                      )
                    }),
                    (t.PolySynth.MAX_POLYPHONY = 20),
                    t.PolySynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(21), i(39), i(53)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PluckSynth = function(e) {
                      ;(e = t.defaultArg(e, t.PluckSynth.defaults)),
                        t.Instrument.call(this, e),
                        (this._noise = new t.Noise('pink')),
                        (this.attackNoise = e.attackNoise),
                        (this._lfcf = new t.LowpassCombFilter({
                          resonance: e.resonance,
                          dampening: e.dampening
                        })),
                        (this.resonance = this._lfcf.resonance),
                        (this.dampening = this._lfcf.dampening),
                        this._noise.connect(this._lfcf),
                        this._lfcf.connect(this.output),
                        this._readOnly(['resonance', 'dampening'])
                    }),
                    t.extend(t.PluckSynth, t.Instrument),
                    (t.PluckSynth.defaults = {
                      attackNoise: 1,
                      dampening: 4e3,
                      resonance: 0.7
                    }),
                    (t.PluckSynth.prototype.triggerAttack = function(t, e) {
                      ;(t = this.toFrequency(t)), (e = this.toSeconds(e))
                      var i = 1 / t
                      return (
                        this._lfcf.delayTime.setValueAtTime(i, e),
                        this._noise.start(e),
                        this._noise.stop(e + i * this.attackNoise),
                        this
                      )
                    }),
                    (t.PluckSynth.prototype.dispose = function() {
                      return (
                        t.Instrument.prototype.dispose.call(this),
                        this._noise.dispose(),
                        this._lfcf.dispose(),
                        (this._noise = null),
                        (this._lfcf = null),
                        this._writable(['resonance', 'dampening']),
                        (this.dampening = null),
                        (this.resonance = null),
                        this
                      )
                    }),
                    t.PluckSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(30), i(41), i(39), i(1), i(9), i(21)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.NoiseSynth = function(e) {
                      ;(e = t.defaultArg(e, t.NoiseSynth.defaults)),
                        t.Instrument.call(this, e),
                        (this.noise = new t.Noise(e.noise)),
                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                        this.noise.chain(this.envelope, this.output),
                        this._readOnly(['noise', 'envelope'])
                    }),
                    t.extend(t.NoiseSynth, t.Instrument),
                    (t.NoiseSynth.defaults = {
                      noise: { type: 'white' },
                      envelope: { attack: 0.005, decay: 0.1, sustain: 0 }
                    }),
                    (t.NoiseSynth.prototype.triggerAttack = function(t, e) {
                      return (
                        (t = this.toSeconds(t)),
                        this.envelope.triggerAttack(t, e),
                        this.noise.start(t),
                        0 === this.envelope.sustain &&
                          this.noise.stop(
                            t + this.envelope.attack + this.envelope.decay
                          ),
                        this
                      )
                    }),
                    (t.NoiseSynth.prototype.triggerRelease = function(t) {
                      return (
                        this.envelope.triggerRelease(t),
                        this.noise.stop(t + this.envelope.release),
                        this
                      )
                    }),
                    (t.NoiseSynth.prototype.sync = function() {
                      return (
                        this._syncMethod('triggerAttack', 0),
                        this._syncMethod('triggerRelease', 0),
                        this
                      )
                    }),
                    (t.NoiseSynth.prototype.triggerAttackRelease = function(
                      t,
                      e,
                      i
                    ) {
                      return (
                        (e = this.toSeconds(e)),
                        (t = this.toSeconds(t)),
                        this.triggerAttack(e, i),
                        this.triggerRelease(e + t),
                        this
                      )
                    }),
                    (t.NoiseSynth.prototype.dispose = function() {
                      return (
                        t.Instrument.prototype.dispose.call(this),
                        this._writable(['noise', 'envelope']),
                        this.noise.dispose(),
                        (this.noise = null),
                        this.envelope.dispose(),
                        (this.envelope = null),
                        this
                      )
                    }),
                    t.NoiseSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(21), i(48), i(9), i(41), i(30), i(3), i(26), i(5)]),
              void 0 ===
                (o = function(t) {
                  var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897]
                  return (
                    (t.MetalSynth = function(i) {
                      ;(i = t.defaultArg(i, t.MetalSynth.defaults)),
                        t.Instrument.call(this, i),
                        (this.frequency = new t.Signal(
                          i.frequency,
                          t.Type.Frequency
                        )),
                        (this._oscillators = []),
                        (this._freqMultipliers = []),
                        (this._amplitue = new t.Gain(0).connect(this.output)),
                        (this._highpass = new t.Filter({
                          type: 'highpass',
                          Q: -3.0102999566398125
                        }).connect(this._amplitue)),
                        (this._octaves = i.octaves),
                        (this._filterFreqScaler = new t.Scale(
                          i.resonance,
                          7e3
                        )),
                        (this.envelope = new t.Envelope({
                          attack: i.envelope.attack,
                          attackCurve: 'linear',
                          decay: i.envelope.decay,
                          sustain: 0,
                          release: i.envelope.release
                        }).chain(
                          this._filterFreqScaler,
                          this._highpass.frequency
                        )),
                        this.envelope.connect(this._amplitue.gain)
                      for (var n = 0; n < e.length; n++) {
                        var o = new t.FMOscillator({
                          type: 'square',
                          modulationType: 'square',
                          harmonicity: i.harmonicity,
                          modulationIndex: i.modulationIndex
                        })
                        o.connect(this._highpass), (this._oscillators[n] = o)
                        var r = new t.Multiply(e[n])
                        ;(this._freqMultipliers[n] = r),
                          this.frequency.chain(r, o.frequency)
                      }
                      this.octaves = i.octaves
                    }),
                    t.extend(t.MetalSynth, t.Instrument),
                    (t.MetalSynth.defaults = {
                      frequency: 200,
                      envelope: { attack: 0.001, decay: 1.4, release: 0.2 },
                      harmonicity: 5.1,
                      modulationIndex: 32,
                      resonance: 4e3,
                      octaves: 1.5
                    }),
                    (t.MetalSynth.prototype.triggerAttack = function(e, i) {
                      return (
                        (e = this.toSeconds(e)),
                        (i = t.defaultArg(i, 1)),
                        this.envelope.triggerAttack(e, i),
                        this._oscillators.forEach(function(t) {
                          t.start(e)
                        }),
                        0 === this.envelope.sustain &&
                          this._oscillators.forEach(
                            function(t) {
                              t.stop(
                                e + this.envelope.attack + this.envelope.decay
                              )
                            }.bind(this)
                          ),
                        this
                      )
                    }),
                    (t.MetalSynth.prototype.triggerRelease = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this.envelope.triggerRelease(t),
                        this._oscillators.forEach(
                          function(e) {
                            e.stop(t + this.envelope.release)
                          }.bind(this)
                        ),
                        this
                      )
                    }),
                    (t.MetalSynth.prototype.sync = function() {
                      return (
                        this._syncMethod('triggerAttack', 0),
                        this._syncMethod('triggerRelease', 0),
                        this
                      )
                    }),
                    (t.MetalSynth.prototype.triggerAttackRelease = function(
                      t,
                      e,
                      i
                    ) {
                      return (
                        (e = this.toSeconds(e)),
                        (t = this.toSeconds(t)),
                        this.triggerAttack(e, i),
                        this.triggerRelease(e + t),
                        this
                      )
                    }),
                    Object.defineProperty(
                      t.MetalSynth.prototype,
                      'modulationIndex',
                      {
                        get: function() {
                          return this._oscillators[0].modulationIndex.value
                        },
                        set: function(t) {
                          for (var e = 0; e < this._oscillators.length; e++)
                            this._oscillators[e].modulationIndex.value = t
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.MetalSynth.prototype,
                      'harmonicity',
                      {
                        get: function() {
                          return this._oscillators[0].harmonicity.value
                        },
                        set: function(t) {
                          for (var e = 0; e < this._oscillators.length; e++)
                            this._oscillators[e].harmonicity.value = t
                        }
                      }
                    ),
                    Object.defineProperty(t.MetalSynth.prototype, 'resonance', {
                      get: function() {
                        return this._filterFreqScaler.min
                      },
                      set: function(t) {
                        ;(this._filterFreqScaler.min = t),
                          (this.octaves = this._octaves)
                      }
                    }),
                    Object.defineProperty(t.MetalSynth.prototype, 'octaves', {
                      get: function() {
                        return this._octaves
                      },
                      set: function(t) {
                        ;(this._octaves = t),
                          (this._filterFreqScaler.max =
                            this._filterFreqScaler.min * Math.pow(2, t))
                      }
                    }),
                    (t.MetalSynth.prototype.dispose = function() {
                      t.Instrument.prototype.dispose.call(this)
                      for (var e = 0; e < this._oscillators.length; e++)
                        this._oscillators[e].dispose(),
                          this._freqMultipliers[e].dispose()
                      ;(this._oscillators = null),
                        (this._freqMultipliers = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this._filterFreqScaler.dispose(),
                        (this._filterFreqScaler = null),
                        this._amplitue.dispose(),
                        (this._amplitue = null),
                        this.envelope.dispose(),
                        (this.envelope = null),
                        this._highpass.dispose(),
                        (this._highpass = null)
                    }),
                    t.MetalSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(37), i(21), i(30)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MembraneSynth = function(e) {
                      ;(e = t.defaultArg(e, t.MembraneSynth.defaults)),
                        t.Instrument.call(this, e),
                        (this.oscillator = new t.OmniOscillator(e.oscillator)),
                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                        (this.octaves = e.octaves),
                        (this.pitchDecay = e.pitchDecay),
                        this.oscillator.chain(this.envelope, this.output),
                        this._readOnly(['oscillator', 'envelope'])
                    }),
                    t.extend(t.MembraneSynth, t.Instrument),
                    (t.MembraneSynth.defaults = {
                      pitchDecay: 0.05,
                      octaves: 10,
                      oscillator: { type: 'sine' },
                      envelope: {
                        attack: 0.001,
                        decay: 0.4,
                        sustain: 0.01,
                        release: 1.4,
                        attackCurve: 'exponential'
                      }
                    }),
                    (t.MembraneSynth.prototype.triggerAttack = function(
                      t,
                      e,
                      i
                    ) {
                      e = this.toSeconds(e)
                      var n = (t = this.toFrequency(t)) * this.octaves
                      return (
                        this.oscillator.frequency.setValueAtTime(n, e),
                        this.oscillator.frequency.exponentialRampToValueAtTime(
                          t,
                          e + this.toSeconds(this.pitchDecay)
                        ),
                        this.envelope.triggerAttack(e, i),
                        this.oscillator.start(e),
                        0 === this.envelope.sustain &&
                          this.oscillator.stop(
                            e + this.envelope.attack + this.envelope.decay
                          ),
                        this
                      )
                    }),
                    (t.MembraneSynth.prototype.triggerRelease = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this.envelope.triggerRelease(t),
                        this.oscillator.stop(t + this.envelope.release),
                        this
                      )
                    }),
                    (t.MembraneSynth.prototype.dispose = function() {
                      return (
                        t.Instrument.prototype.dispose.call(this),
                        this._writable(['oscillator', 'envelope']),
                        this.oscillator.dispose(),
                        (this.oscillator = null),
                        this.envelope.dispose(),
                        (this.envelope = null),
                        this
                      )
                    }),
                    t.MembraneSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(38), i(1), i(5), i(25)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FMSynth = function(e) {
                      ;(e = t.defaultArg(e, t.FMSynth.defaults)),
                        t.Monophonic.call(this, e),
                        (this._carrier = new t.Synth(e.carrier)),
                        (this._carrier.volume.value = -10),
                        (this.oscillator = this._carrier.oscillator),
                        (this.envelope = this._carrier.envelope.set(
                          e.envelope
                        )),
                        (this._modulator = new t.Synth(e.modulator)),
                        (this._modulator.volume.value = -10),
                        (this.modulation = this._modulator.oscillator.set(
                          e.modulation
                        )),
                        (this.modulationEnvelope = this._modulator.envelope.set(
                          e.modulationEnvelope
                        )),
                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                        (this.harmonicity.units = t.Type.Positive),
                        (this.modulationIndex = new t.Multiply(
                          e.modulationIndex
                        )),
                        (this.modulationIndex.units = t.Type.Positive),
                        (this._modulationNode = new t.Gain(0)),
                        this.frequency.connect(this._carrier.frequency),
                        this.frequency.chain(
                          this.harmonicity,
                          this._modulator.frequency
                        ),
                        this.frequency.chain(
                          this.modulationIndex,
                          this._modulationNode
                        ),
                        this.detune.fan(
                          this._carrier.detune,
                          this._modulator.detune
                        ),
                        this._modulator.connect(this._modulationNode.gain),
                        this._modulationNode.connect(this._carrier.frequency),
                        this._carrier.connect(this.output),
                        this._readOnly([
                          'frequency',
                          'harmonicity',
                          'modulationIndex',
                          'oscillator',
                          'envelope',
                          'modulation',
                          'modulationEnvelope',
                          'detune'
                        ])
                    }),
                    t.extend(t.FMSynth, t.Monophonic),
                    (t.FMSynth.defaults = {
                      harmonicity: 3,
                      modulationIndex: 10,
                      detune: 0,
                      oscillator: { type: 'sine' },
                      envelope: {
                        attack: 0.01,
                        decay: 0.01,
                        sustain: 1,
                        release: 0.5
                      },
                      modulation: { type: 'square' },
                      modulationEnvelope: {
                        attack: 0.5,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                      }
                    }),
                    (t.FMSynth.prototype._triggerEnvelopeAttack = function(
                      t,
                      e
                    ) {
                      return (
                        (t = this.toSeconds(t)),
                        this._carrier._triggerEnvelopeAttack(t, e),
                        this._modulator._triggerEnvelopeAttack(t),
                        this
                      )
                    }),
                    (t.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
                      return (
                        (t = this.toSeconds(t)),
                        this._carrier._triggerEnvelopeRelease(t),
                        this._modulator._triggerEnvelopeRelease(t),
                        this
                      )
                    }),
                    (t.FMSynth.prototype.dispose = function() {
                      return (
                        t.Monophonic.prototype.dispose.call(this),
                        this._writable([
                          'frequency',
                          'harmonicity',
                          'modulationIndex',
                          'oscillator',
                          'envelope',
                          'modulation',
                          'modulationEnvelope',
                          'detune'
                        ]),
                        this._carrier.dispose(),
                        (this._carrier = null),
                        this._modulator.dispose(),
                        (this._modulator = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        this.modulationIndex.dispose(),
                        (this.modulationIndex = null),
                        this.harmonicity.dispose(),
                        (this.harmonicity = null),
                        this._modulationNode.dispose(),
                        (this._modulationNode = null),
                        (this.oscillator = null),
                        (this.envelope = null),
                        (this.modulationEnvelope = null),
                        (this.modulation = null),
                        this
                      )
                    }),
                    t.FMSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(68), i(12), i(1), i(5), i(25), i(14)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.DuoSynth = function(e) {
                      ;(e = t.defaultArg(e, t.DuoSynth.defaults)),
                        t.Monophonic.call(this, e),
                        (this.voice0 = new t.MonoSynth(e.voice0)),
                        (this.voice0.volume.value = -10),
                        (this.voice1 = new t.MonoSynth(e.voice1)),
                        (this.voice1.volume.value = -10),
                        (this._vibrato = new t.LFO(e.vibratoRate, -50, 50)),
                        this._vibrato.start(),
                        (this.vibratoRate = this._vibrato.frequency),
                        (this._vibratoGain = new t.Gain(
                          e.vibratoAmount,
                          t.Type.Positive
                        )),
                        (this.vibratoAmount = this._vibratoGain.gain),
                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                        (this.harmonicity.units = t.Type.Positive),
                        this.frequency.connect(this.voice0.frequency),
                        this.frequency.chain(
                          this.harmonicity,
                          this.voice1.frequency
                        ),
                        this._vibrato.connect(this._vibratoGain),
                        this._vibratoGain.fan(
                          this.voice0.detune,
                          this.voice1.detune
                        ),
                        this.voice0.connect(this.output),
                        this.voice1.connect(this.output),
                        this._readOnly([
                          'voice0',
                          'voice1',
                          'frequency',
                          'vibratoAmount',
                          'vibratoRate'
                        ])
                    }),
                    t.extend(t.DuoSynth, t.Monophonic),
                    (t.DuoSynth.defaults = {
                      vibratoAmount: 0.5,
                      vibratoRate: 5,
                      harmonicity: 1.5,
                      voice0: {
                        volume: -10,
                        portamento: 0,
                        oscillator: { type: 'sine' },
                        filterEnvelope: {
                          attack: 0.01,
                          decay: 0,
                          sustain: 1,
                          release: 0.5
                        },
                        envelope: {
                          attack: 0.01,
                          decay: 0,
                          sustain: 1,
                          release: 0.5
                        }
                      },
                      voice1: {
                        volume: -10,
                        portamento: 0,
                        oscillator: { type: 'sine' },
                        filterEnvelope: {
                          attack: 0.01,
                          decay: 0,
                          sustain: 1,
                          release: 0.5
                        },
                        envelope: {
                          attack: 0.01,
                          decay: 0,
                          sustain: 1,
                          release: 0.5
                        }
                      }
                    }),
                    (t.DuoSynth.prototype._triggerEnvelopeAttack = function(
                      t,
                      e
                    ) {
                      return (
                        (t = this.toSeconds(t)),
                        this.voice0._triggerEnvelopeAttack(t, e),
                        this.voice1._triggerEnvelopeAttack(t, e),
                        this
                      )
                    }),
                    (t.DuoSynth.prototype._triggerEnvelopeRelease = function(
                      t
                    ) {
                      return (
                        this.voice0._triggerEnvelopeRelease(t),
                        this.voice1._triggerEnvelopeRelease(t),
                        this
                      )
                    }),
                    (t.DuoSynth.prototype.getLevelAtTime = function(t) {
                      return (
                        (this.voice0.getLevelAtTime(t) +
                          this.voice1.getLevelAtTime(t)) /
                        2
                      )
                    }),
                    (t.DuoSynth.prototype.dispose = function() {
                      return (
                        t.Monophonic.prototype.dispose.call(this),
                        this._writable([
                          'voice0',
                          'voice1',
                          'frequency',
                          'vibratoAmount',
                          'vibratoRate'
                        ]),
                        this.voice0.dispose(),
                        (this.voice0 = null),
                        this.voice1.dispose(),
                        (this.voice1 = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this._vibratoGain.dispose(),
                        (this._vibratoGain = null),
                        (this._vibrato = null),
                        this.harmonicity.dispose(),
                        (this.harmonicity = null),
                        this.vibratoAmount.dispose(),
                        (this.vibratoAmount = null),
                        (this.vibratoRate = null),
                        this
                      )
                    }),
                    t.DuoSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(38), i(1), i(5), i(25), i(22), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AMSynth = function(e) {
                      ;(e = t.defaultArg(e, t.AMSynth.defaults)),
                        t.Monophonic.call(this, e),
                        (this._carrier = new t.Synth()),
                        (this._carrier.volume.value = -10),
                        (this.oscillator = this._carrier.oscillator.set(
                          e.oscillator
                        )),
                        (this.envelope = this._carrier.envelope.set(
                          e.envelope
                        )),
                        (this._modulator = new t.Synth()),
                        (this._modulator.volume.value = -10),
                        (this.modulation = this._modulator.oscillator.set(
                          e.modulation
                        )),
                        (this.modulationEnvelope = this._modulator.envelope.set(
                          e.modulationEnvelope
                        )),
                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                        (this.harmonicity.units = t.Type.Positive),
                        (this._modulationScale = new t.AudioToGain()),
                        (this._modulationNode = new t.Gain()),
                        this.frequency.connect(this._carrier.frequency),
                        this.frequency.chain(
                          this.harmonicity,
                          this._modulator.frequency
                        ),
                        this.detune.fan(
                          this._carrier.detune,
                          this._modulator.detune
                        ),
                        this._modulator.chain(
                          this._modulationScale,
                          this._modulationNode.gain
                        ),
                        this._carrier.chain(this._modulationNode, this.output),
                        this._readOnly([
                          'frequency',
                          'harmonicity',
                          'oscillator',
                          'envelope',
                          'modulation',
                          'modulationEnvelope',
                          'detune'
                        ])
                    }),
                    t.extend(t.AMSynth, t.Monophonic),
                    (t.AMSynth.defaults = {
                      harmonicity: 3,
                      detune: 0,
                      oscillator: { type: 'sine' },
                      envelope: {
                        attack: 0.01,
                        decay: 0.01,
                        sustain: 1,
                        release: 0.5
                      },
                      modulation: { type: 'square' },
                      modulationEnvelope: {
                        attack: 0.5,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                      }
                    }),
                    (t.AMSynth.prototype._triggerEnvelopeAttack = function(
                      t,
                      e
                    ) {
                      return (
                        (t = this.toSeconds(t)),
                        this._carrier._triggerEnvelopeAttack(t, e),
                        this._modulator._triggerEnvelopeAttack(t),
                        this
                      )
                    }),
                    (t.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
                      return (
                        this._carrier._triggerEnvelopeRelease(t),
                        this._modulator._triggerEnvelopeRelease(t),
                        this
                      )
                    }),
                    (t.AMSynth.prototype.dispose = function() {
                      return (
                        t.Monophonic.prototype.dispose.call(this),
                        this._writable([
                          'frequency',
                          'harmonicity',
                          'oscillator',
                          'envelope',
                          'modulation',
                          'modulationEnvelope',
                          'detune'
                        ]),
                        this._carrier.dispose(),
                        (this._carrier = null),
                        this._modulator.dispose(),
                        (this._modulator = null),
                        this.frequency.dispose(),
                        (this.frequency = null),
                        this.detune.dispose(),
                        (this.detune = null),
                        this.harmonicity.dispose(),
                        (this.harmonicity = null),
                        this._modulationScale.dispose(),
                        (this._modulationScale = null),
                        this._modulationNode.dispose(),
                        (this._modulationNode = null),
                        (this.oscillator = null),
                        (this.envelope = null),
                        (this.modulationEnvelope = null),
                        (this.modulation = null),
                        this
                      )
                    }),
                    t.AMSynth
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(72), i(16)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Sequence = function() {
                      var e = t.defaults(
                          arguments,
                          ['callback', 'events', 'subdivision'],
                          t.Sequence
                        ),
                        i = e.events
                      if (
                        (delete e.events,
                        t.Part.call(this, e),
                        (this._subdivision = this.toTicks(e.subdivision)),
                        t.isUndef(e.loopEnd) &&
                          t.isDefined(i) &&
                          (this._loopEnd = i.length * this._subdivision),
                        (this._loop = !0),
                        t.isDefined(i))
                      )
                        for (var n = 0; n < i.length; n++) this.add(n, i[n])
                    }),
                    t.extend(t.Sequence, t.Part),
                    (t.Sequence.defaults = { subdivision: '4n' }),
                    Object.defineProperty(t.Sequence.prototype, 'subdivision', {
                      get: function() {
                        return t.Ticks(this._subdivision).toSeconds()
                      }
                    }),
                    (t.Sequence.prototype.at = function(e, i) {
                      return (
                        t.isArray(i) && this.remove(e),
                        t.Part.prototype.at.call(this, this._indexTime(e), i)
                      )
                    }),
                    (t.Sequence.prototype.add = function(e, i) {
                      if (null === i) return this
                      if (t.isArray(i)) {
                        var n = Math.round(this._subdivision / i.length)
                        i = new t.Sequence(this._tick.bind(this), i, t.Ticks(n))
                      }
                      return (
                        t.Part.prototype.add.call(this, this._indexTime(e), i),
                        this
                      )
                    }),
                    (t.Sequence.prototype.remove = function(e, i) {
                      return (
                        t.Part.prototype.remove.call(
                          this,
                          this._indexTime(e),
                          i
                        ),
                        this
                      )
                    }),
                    (t.Sequence.prototype._indexTime = function(e) {
                      return e instanceof t.TransportTime
                        ? e
                        : t
                            .Ticks(e * this._subdivision + this.startOffset)
                            .toSeconds()
                    }),
                    (t.Sequence.prototype.dispose = function() {
                      return t.Part.prototype.dispose.call(this), this
                    }),
                    t.Sequence
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(73), i(80)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Pattern = function() {
                      var e = t.defaults(
                        arguments,
                        ['callback', 'values', 'pattern'],
                        t.Pattern
                      )
                      t.Loop.call(this, e),
                        (this._pattern = new t.CtrlPattern({
                          values: e.values,
                          type: e.pattern,
                          index: e.index
                        }))
                    }),
                    t.extend(t.Pattern, t.Loop),
                    (t.Pattern.defaults = {
                      pattern: t.CtrlPattern.Type.Up,
                      callback: t.noOp,
                      values: []
                    }),
                    (t.Pattern.prototype._tick = function(t) {
                      this.callback(t, this._pattern.value),
                        this._pattern.next()
                    }),
                    Object.defineProperty(t.Pattern.prototype, 'index', {
                      get: function() {
                        return this._pattern.index
                      },
                      set: function(t) {
                        this._pattern.index = t
                      }
                    }),
                    Object.defineProperty(t.Pattern.prototype, 'values', {
                      get: function() {
                        return this._pattern.values
                      },
                      set: function(t) {
                        this._pattern.values = t
                      }
                    }),
                    Object.defineProperty(t.Pattern.prototype, 'value', {
                      get: function() {
                        return this._pattern.value
                      }
                    }),
                    Object.defineProperty(t.Pattern.prototype, 'pattern', {
                      get: function() {
                        return this._pattern.type
                      },
                      set: function(t) {
                        this._pattern.type = t
                      }
                    }),
                    (t.Pattern.prototype.dispose = function() {
                      t.Loop.prototype.dispose.call(this),
                        this._pattern.dispose(),
                        (this._pattern = null)
                    }),
                    t.Pattern
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(18), i(12)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Vibrato = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'depth'],
                        t.Vibrato
                      )
                      t.Effect.call(this, e),
                        (this._delayNode = new t.Delay(0, e.maxDelay)),
                        (this._lfo = new t.LFO({
                          type: e.type,
                          min: 0,
                          max: e.maxDelay,
                          frequency: e.frequency,
                          phase: -90
                        })
                          .start()
                          .connect(this._delayNode.delayTime)),
                        (this.frequency = this._lfo.frequency),
                        (this.depth = this._lfo.amplitude),
                        (this.depth.value = e.depth),
                        this._readOnly(['frequency', 'depth']),
                        this.effectSend.chain(
                          this._delayNode,
                          this.effectReturn
                        )
                    }),
                    t.extend(t.Vibrato, t.Effect),
                    (t.Vibrato.defaults = {
                      maxDelay: 0.005,
                      frequency: 5,
                      depth: 0.1,
                      type: 'sine'
                    }),
                    Object.defineProperty(t.Vibrato.prototype, 'type', {
                      get: function() {
                        return this._lfo.type
                      },
                      set: function(t) {
                        this._lfo.type = t
                      }
                    }),
                    (t.Vibrato.prototype.dispose = function() {
                      t.Effect.prototype.dispose.call(this),
                        this._delayNode.dispose(),
                        (this._delayNode = null),
                        this._lfo.dispose(),
                        (this._lfo = null),
                        this._writable(['frequency', 'depth']),
                        (this.frequency = null),
                        (this.depth = null)
                    }),
                    t.Vibrato
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(12), i(15)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Tremolo = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'depth'],
                        t.Tremolo
                      )
                      t.StereoEffect.call(this, e),
                        (this._lfoL = new t.LFO({
                          phase: e.spread,
                          min: 1,
                          max: 0
                        })),
                        (this._lfoR = new t.LFO({
                          phase: e.spread,
                          min: 1,
                          max: 0
                        })),
                        (this._amplitudeL = new t.Gain()),
                        (this._amplitudeR = new t.Gain()),
                        (this.frequency = new t.Signal(
                          e.frequency,
                          t.Type.Frequency
                        )),
                        (this.depth = new t.Signal(
                          e.depth,
                          t.Type.NormalRange
                        )),
                        this._readOnly(['frequency', 'depth']),
                        this.effectSendL.chain(
                          this._amplitudeL,
                          this.effectReturnL
                        ),
                        this.effectSendR.chain(
                          this._amplitudeR,
                          this.effectReturnR
                        ),
                        this._lfoL.connect(this._amplitudeL.gain),
                        this._lfoR.connect(this._amplitudeR.gain),
                        this.frequency.fan(
                          this._lfoL.frequency,
                          this._lfoR.frequency
                        ),
                        this.depth.fan(
                          this._lfoR.amplitude,
                          this._lfoL.amplitude
                        ),
                        (this.type = e.type),
                        (this.spread = e.spread)
                    }),
                    t.extend(t.Tremolo, t.StereoEffect),
                    (t.Tremolo.defaults = {
                      frequency: 10,
                      type: 'sine',
                      depth: 0.5,
                      spread: 180
                    }),
                    (t.Tremolo.prototype.start = function(t) {
                      return this._lfoL.start(t), this._lfoR.start(t), this
                    }),
                    (t.Tremolo.prototype.stop = function(t) {
                      return this._lfoL.stop(t), this._lfoR.stop(t), this
                    }),
                    (t.Tremolo.prototype.sync = function(e) {
                      return (
                        this._lfoL.sync(e),
                        this._lfoR.sync(e),
                        t.Transport.syncSignal(this.frequency),
                        this
                      )
                    }),
                    (t.Tremolo.prototype.unsync = function() {
                      return (
                        this._lfoL.unsync(),
                        this._lfoR.unsync(),
                        t.Transport.unsyncSignal(this.frequency),
                        this
                      )
                    }),
                    Object.defineProperty(t.Tremolo.prototype, 'type', {
                      get: function() {
                        return this._lfoL.type
                      },
                      set: function(t) {
                        ;(this._lfoL.type = t), (this._lfoR.type = t)
                      }
                    }),
                    Object.defineProperty(t.Tremolo.prototype, 'spread', {
                      get: function() {
                        return this._lfoR.phase - this._lfoL.phase
                      },
                      set: function(t) {
                        ;(this._lfoL.phase = 90 - t / 2),
                          (this._lfoR.phase = t / 2 + 90)
                      }
                    }),
                    (t.Tremolo.prototype.dispose = function() {
                      return (
                        t.StereoEffect.prototype.dispose.call(this),
                        this._writable(['frequency', 'depth']),
                        this._lfoL.dispose(),
                        (this._lfoL = null),
                        this._lfoR.dispose(),
                        (this._lfoR = null),
                        this._amplitudeL.dispose(),
                        (this._amplitudeL = null),
                        this._amplitudeR.dispose(),
                        (this._amplitudeR = null),
                        (this.frequency = null),
                        (this.depth = null),
                        this
                      )
                    }),
                    t.Tremolo
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(75), i(1), i(5), i(13)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.StereoWidener = function() {
                      var e = t.defaults(arguments, ['width'], t.StereoWidener)
                      t.MidSideEffect.call(this, e),
                        (this.width = new t.Signal(
                          e.width,
                          t.Type.NormalRange
                        )),
                        this._readOnly(['width']),
                        (this._twoTimesWidthMid = new t.Multiply(2)),
                        (this._twoTimesWidthSide = new t.Multiply(2)),
                        (this._midMult = new t.Multiply()),
                        this._twoTimesWidthMid.connect(this._midMult, 0, 1),
                        this.midSend.chain(this._midMult, this.midReturn),
                        (this._oneMinusWidth = new t.Subtract()),
                        this._oneMinusWidth.connect(this._twoTimesWidthMid),
                        this.context
                          .getConstant(1)
                          .connect(this._oneMinusWidth, 0, 0),
                        this.width.connect(this._oneMinusWidth, 0, 1),
                        (this._sideMult = new t.Multiply()),
                        this.width.connect(this._twoTimesWidthSide),
                        this._twoTimesWidthSide.connect(this._sideMult, 0, 1),
                        this.sideSend.chain(this._sideMult, this.sideReturn)
                    }),
                    t.extend(t.StereoWidener, t.MidSideEffect),
                    (t.StereoWidener.defaults = { width: 0.5 }),
                    (t.StereoWidener.prototype.dispose = function() {
                      return (
                        t.MidSideEffect.prototype.dispose.call(this),
                        this._writable(['width']),
                        this.width.dispose(),
                        (this.width = null),
                        this._midMult.dispose(),
                        (this._midMult = null),
                        this._sideMult.dispose(),
                        (this._sideMult = null),
                        this._twoTimesWidthMid.dispose(),
                        (this._twoTimesWidthMid = null),
                        this._twoTimesWidthSide.dispose(),
                        (this._twoTimesWidthSide = null),
                        this._oneMinusWidth.dispose(),
                        (this._oneMinusWidth = null),
                        this
                      )
                    }),
                    t.StereoWidener
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(15), i(32), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.StereoFeedbackEffect = function() {
                      var e = t.defaults(
                        arguments,
                        ['feedback'],
                        t.FeedbackEffect
                      )
                      t.StereoEffect.call(this, e),
                        (this.feedback = new t.Signal(
                          e.feedback,
                          t.Type.NormalRange
                        )),
                        (this._feedbackL = new t.Gain()),
                        (this._feedbackR = new t.Gain()),
                        this.effectReturnL.chain(
                          this._feedbackL,
                          this.effectSendL
                        ),
                        this.effectReturnR.chain(
                          this._feedbackR,
                          this.effectSendR
                        ),
                        this.feedback.fan(
                          this._feedbackL.gain,
                          this._feedbackR.gain
                        ),
                        this._readOnly(['feedback'])
                    }),
                    t.extend(t.StereoFeedbackEffect, t.StereoEffect),
                    (t.StereoFeedbackEffect.prototype.dispose = function() {
                      return (
                        t.StereoEffect.prototype.dispose.call(this),
                        this._writable(['feedback']),
                        this.feedback.dispose(),
                        (this.feedback = null),
                        this._feedbackL.dispose(),
                        (this._feedbackL = null),
                        this._feedbackR.dispose(),
                        (this._feedbackR = null),
                        this
                      )
                    }),
                    t.StereoFeedbackEffect
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(78), i(9), i(10), i(39), i(3), i(76)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Reverb = function() {
                      var e = t.defaults(arguments, ['decay'], t.Reverb)
                      t.Effect.call(this, e),
                        (this._convolver = this.context.createConvolver()),
                        (this.decay = e.decay),
                        (this.preDelay = e.preDelay),
                        this.connectEffect(this._convolver)
                    }),
                    t.extend(t.Reverb, t.Effect),
                    (t.Reverb.defaults = { decay: 1.5, preDelay: 0.01 }),
                    (t.Reverb.prototype.generate = function() {
                      return t
                        .Offline(
                          function() {
                            var e = new t.Noise(),
                              i = new t.Noise(),
                              n = new t.Merge()
                            e.connect(n.left), i.connect(n.right)
                            var o = new t.Gain().toMaster()
                            n.connect(o),
                              e.start(0),
                              i.start(0),
                              o.gain.setValueAtTime(0, 0),
                              o.gain.linearRampToValueAtTime(1, this.preDelay),
                              o.gain.exponentialApproachValueAtTime(
                                0,
                                this.preDelay,
                                this.decay - this.preDelay
                              )
                          }.bind(this),
                          this.decay
                        )
                        .then(
                          function(t) {
                            return (this._convolver.buffer = t.get()), this
                          }.bind(this)
                        )
                    }),
                    (t.Reverb.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._convolver.disconnect(),
                        (this._convolver = null),
                        this
                      )
                    }),
                    t.Reverb
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(12), i(23), i(1), i(32), i(18)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PitchShift = function() {
                      var e = t.defaults(arguments, ['pitch'], t.PitchShift)
                      t.FeedbackEffect.call(this, e),
                        (this._frequency = new t.Signal(0)),
                        (this._delayA = new t.Delay(0, 1)),
                        (this._lfoA = new t.LFO({
                          min: 0,
                          max: 0.1,
                          type: 'sawtooth'
                        }).connect(this._delayA.delayTime)),
                        (this._delayB = new t.Delay(0, 1)),
                        (this._lfoB = new t.LFO({
                          min: 0,
                          max: 0.1,
                          type: 'sawtooth',
                          phase: 180
                        }).connect(this._delayB.delayTime)),
                        (this._crossFade = new t.CrossFade()),
                        (this._crossFadeLFO = new t.LFO({
                          min: 0,
                          max: 1,
                          type: 'triangle',
                          phase: 90
                        }).connect(this._crossFade.fade)),
                        (this._feedbackDelay = new t.Delay(e.delayTime)),
                        (this.delayTime = this._feedbackDelay.delayTime),
                        this._readOnly('delayTime'),
                        (this._pitch = e.pitch),
                        (this._windowSize = e.windowSize),
                        this._delayA.connect(this._crossFade.a),
                        this._delayB.connect(this._crossFade.b),
                        this._frequency.fan(
                          this._lfoA.frequency,
                          this._lfoB.frequency,
                          this._crossFadeLFO.frequency
                        ),
                        this.effectSend.fan(this._delayA, this._delayB),
                        this._crossFade.chain(
                          this._feedbackDelay,
                          this.effectReturn
                        )
                      var i = this.now()
                      this._lfoA.start(i),
                        this._lfoB.start(i),
                        this._crossFadeLFO.start(i),
                        (this.windowSize = this._windowSize)
                    }),
                    t.extend(t.PitchShift, t.FeedbackEffect),
                    (t.PitchShift.defaults = {
                      pitch: 0,
                      windowSize: 0.1,
                      delayTime: 0,
                      feedback: 0
                    }),
                    Object.defineProperty(t.PitchShift.prototype, 'pitch', {
                      get: function() {
                        return this._pitch
                      },
                      set: function(e) {
                        this._pitch = e
                        var i = 0
                        e < 0
                          ? ((this._lfoA.min = 0),
                            (this._lfoA.max = this._windowSize),
                            (this._lfoB.min = 0),
                            (this._lfoB.max = this._windowSize),
                            (i = t.intervalToFrequencyRatio(e - 1) + 1))
                          : ((this._lfoA.min = this._windowSize),
                            (this._lfoA.max = 0),
                            (this._lfoB.min = this._windowSize),
                            (this._lfoB.max = 0),
                            (i = t.intervalToFrequencyRatio(e) - 1)),
                          (this._frequency.value = i * (1.2 / this._windowSize))
                      }
                    }),
                    Object.defineProperty(
                      t.PitchShift.prototype,
                      'windowSize',
                      {
                        get: function() {
                          return this._windowSize
                        },
                        set: function(t) {
                          ;(this._windowSize = this.toSeconds(t)),
                            (this.pitch = this._pitch)
                        }
                      }
                    ),
                    (t.PitchShift.prototype.dispose = function() {
                      return (
                        t.FeedbackEffect.prototype.dispose.call(this),
                        this._frequency.dispose(),
                        (this._frequency = null),
                        this._delayA.disconnect(),
                        (this._delayA = null),
                        this._delayB.disconnect(),
                        (this._delayB = null),
                        this._lfoA.dispose(),
                        (this._lfoA = null),
                        this._lfoB.dispose(),
                        (this._lfoB = null),
                        this._crossFade.dispose(),
                        (this._crossFade = null),
                        this._crossFadeLFO.dispose(),
                        (this._crossFadeLFO = null),
                        this._writable('delayTime'),
                        this._feedbackDelay.dispose(),
                        (this._feedbackDelay = null),
                        (this.delayTime = null),
                        this
                      )
                    }),
                    t.PitchShift
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(74), i(1), i(18)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.PingPongDelay = function() {
                      var e = t.defaults(
                        arguments,
                        ['delayTime', 'feedback'],
                        t.PingPongDelay
                      )
                      t.StereoXFeedbackEffect.call(this, e),
                        (this._leftDelay = new t.Delay(0, e.maxDelayTime)),
                        (this._rightDelay = new t.Delay(0, e.maxDelayTime)),
                        (this._rightPreDelay = new t.Delay(0, e.maxDelayTime)),
                        (this.delayTime = new t.Signal(
                          e.delayTime,
                          t.Type.Time
                        )),
                        this.effectSendL.chain(
                          this._leftDelay,
                          this.effectReturnL
                        ),
                        this.effectSendR.chain(
                          this._rightPreDelay,
                          this._rightDelay,
                          this.effectReturnR
                        ),
                        this.delayTime.fan(
                          this._leftDelay.delayTime,
                          this._rightDelay.delayTime,
                          this._rightPreDelay.delayTime
                        ),
                        this._feedbackLR.disconnect(),
                        this._feedbackLR.connect(this._rightDelay),
                        this._readOnly(['delayTime'])
                    }),
                    t.extend(t.PingPongDelay, t.StereoXFeedbackEffect),
                    (t.PingPongDelay.defaults = {
                      delayTime: 0.25,
                      maxDelayTime: 1
                    }),
                    (t.PingPongDelay.prototype.dispose = function() {
                      return (
                        t.StereoXFeedbackEffect.prototype.dispose.call(this),
                        this._leftDelay.dispose(),
                        (this._leftDelay = null),
                        this._rightDelay.dispose(),
                        (this._rightDelay = null),
                        this._rightPreDelay.dispose(),
                        (this._rightPreDelay = null),
                        this._writable(['delayTime']),
                        this.delayTime.dispose(),
                        (this.delayTime = null),
                        this
                      )
                    }),
                    t.PingPongDelay
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(12), i(9), i(15)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Phaser = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'octaves', 'baseFrequency'],
                        t.Phaser
                      )
                      t.StereoEffect.call(this, e),
                        (this._lfoL = new t.LFO(e.frequency, 0, 1)),
                        (this._lfoR = new t.LFO(e.frequency, 0, 1)),
                        (this._lfoR.phase = 180),
                        (this._baseFrequency = e.baseFrequency),
                        (this._octaves = e.octaves),
                        (this.Q = new t.Signal(e.Q, t.Type.Positive)),
                        (this._filtersL = this._makeFilters(
                          e.stages,
                          this._lfoL,
                          this.Q
                        )),
                        (this._filtersR = this._makeFilters(
                          e.stages,
                          this._lfoR,
                          this.Q
                        )),
                        (this.frequency = this._lfoL.frequency),
                        (this.frequency.value = e.frequency),
                        this.effectSendL.connect(this._filtersL[0]),
                        this.effectSendR.connect(this._filtersR[0]),
                        this._filtersL[e.stages - 1].connect(
                          this.effectReturnL
                        ),
                        this._filtersR[e.stages - 1].connect(
                          this.effectReturnR
                        ),
                        this._lfoL.frequency.connect(this._lfoR.frequency),
                        (this.baseFrequency = e.baseFrequency),
                        (this.octaves = e.octaves),
                        this._lfoL.start(),
                        this._lfoR.start(),
                        this._readOnly(['frequency', 'Q'])
                    }),
                    t.extend(t.Phaser, t.StereoEffect),
                    (t.Phaser.defaults = {
                      frequency: 0.5,
                      octaves: 3,
                      stages: 10,
                      Q: 10,
                      baseFrequency: 350
                    }),
                    (t.Phaser.prototype._makeFilters = function(e, i, n) {
                      for (var o = new Array(e), r = 0; r < e; r++) {
                        var s = this.context.createBiquadFilter()
                        ;(s.type = 'allpass'),
                          n.connect(s.Q),
                          i.connect(s.frequency),
                          (o[r] = s)
                      }
                      return t.connectSeries.apply(t, o), o
                    }),
                    Object.defineProperty(t.Phaser.prototype, 'octaves', {
                      get: function() {
                        return this._octaves
                      },
                      set: function(t) {
                        this._octaves = t
                        var e = this._baseFrequency * Math.pow(2, t)
                        ;(this._lfoL.max = e), (this._lfoR.max = e)
                      }
                    }),
                    Object.defineProperty(t.Phaser.prototype, 'baseFrequency', {
                      get: function() {
                        return this._baseFrequency
                      },
                      set: function(t) {
                        ;(this._baseFrequency = t),
                          (this._lfoL.min = t),
                          (this._lfoR.min = t),
                          (this.octaves = this._octaves)
                      }
                    }),
                    (t.Phaser.prototype.dispose = function() {
                      t.StereoEffect.prototype.dispose.call(this),
                        this._writable(['frequency', 'Q']),
                        this.Q.dispose(),
                        (this.Q = null),
                        this._lfoL.dispose(),
                        (this._lfoL = null),
                        this._lfoR.dispose(),
                        (this._lfoR = null)
                      for (var e = 0; e < this._filtersL.length; e++)
                        this._filtersL[e].disconnect(),
                          (this._filtersL[e] = null)
                      this._filtersL = null
                      for (var i = 0; i < this._filtersR.length; i++)
                        this._filtersR[i].disconnect(),
                          (this._filtersR[i] = null)
                      return (
                        (this._filtersR = null), (this.frequency = null), this
                      )
                    }),
                    t.Phaser
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(58), i(15), i(26)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  var e = [0.06748, 0.06404, 0.08212, 0.09004],
                    i = [0.773, 0.802, 0.753, 0.733],
                    n = [347, 113, 37]
                  return (
                    (t.JCReverb = function() {
                      var o = t.defaults(arguments, ['roomSize'], t.JCReverb)
                      t.StereoEffect.call(this, o),
                        (this.roomSize = new t.Signal(
                          o.roomSize,
                          t.Type.NormalRange
                        )),
                        (this._scaleRoomSize = new t.Scale(-0.733, 0.197)),
                        (this._allpassFilters = []),
                        (this._feedbackCombFilters = [])
                      for (var r = 0; r < n.length; r++) {
                        var s = this.context.createBiquadFilter()
                        ;(s.type = 'allpass'),
                          (s.frequency.value = n[r]),
                          this._allpassFilters.push(s)
                      }
                      for (var a = 0; a < e.length; a++) {
                        var u = new t.FeedbackCombFilter(e[a], 0.1)
                        this._scaleRoomSize.connect(u.resonance),
                          (u.resonance.value = i[a]),
                          this._allpassFilters[
                            this._allpassFilters.length - 1
                          ].connect(u),
                          a < e.length / 2
                            ? u.connect(this.effectReturnL)
                            : u.connect(this.effectReturnR),
                          this._feedbackCombFilters.push(u)
                      }
                      this.roomSize.connect(this._scaleRoomSize),
                        t.connectSeries.apply(t, this._allpassFilters),
                        this.effectSendL.connect(this._allpassFilters[0]),
                        this.effectSendR.connect(this._allpassFilters[0]),
                        this._readOnly(['roomSize'])
                    }),
                    t.extend(t.JCReverb, t.StereoEffect),
                    (t.JCReverb.defaults = { roomSize: 0.5 }),
                    (t.JCReverb.prototype.dispose = function() {
                      t.StereoEffect.prototype.dispose.call(this)
                      for (var e = 0; e < this._allpassFilters.length; e++)
                        this._allpassFilters[e].disconnect(),
                          (this._allpassFilters[e] = null)
                      this._allpassFilters = null
                      for (var i = 0; i < this._feedbackCombFilters.length; i++)
                        this._feedbackCombFilters[i].dispose(),
                          (this._feedbackCombFilters[i] = null)
                      return (
                        (this._feedbackCombFilters = null),
                        this._writable(['roomSize']),
                        this.roomSize.dispose(),
                        (this.roomSize = null),
                        this._scaleRoomSize.dispose(),
                        (this._scaleRoomSize = null),
                        this
                      )
                    }),
                    t.JCReverb
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(53), i(15), i(1), i(19), i(10), i(42)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  var e = [
                      1557 / 44100,
                      1617 / 44100,
                      1491 / 44100,
                      1422 / 44100,
                      1277 / 44100,
                      1356 / 44100,
                      1188 / 44100,
                      1116 / 44100
                    ],
                    i = [225, 556, 441, 341]
                  return (
                    (t.Freeverb = function() {
                      var n = t.defaults(
                        arguments,
                        ['roomSize', 'dampening'],
                        t.Freeverb
                      )
                      t.StereoEffect.call(this, n),
                        (this.roomSize = new t.Signal(
                          n.roomSize,
                          t.Type.NormalRange
                        )),
                        (this.dampening = new t.Signal(
                          n.dampening,
                          t.Type.Frequency
                        )),
                        (this._combFilters = []),
                        (this._allpassFiltersL = []),
                        (this._allpassFiltersR = [])
                      for (var o = 0; o < i.length; o++) {
                        var r = this.context.createBiquadFilter()
                        ;(r.type = 'allpass'),
                          (r.frequency.value = i[o]),
                          this._allpassFiltersL.push(r)
                      }
                      for (var s = 0; s < i.length; s++) {
                        var a = this.context.createBiquadFilter()
                        ;(a.type = 'allpass'),
                          (a.frequency.value = i[s]),
                          this._allpassFiltersR.push(a)
                      }
                      for (var u = 0; u < e.length; u++) {
                        var l = new t.LowpassCombFilter(e[u])
                        u < e.length / 2
                          ? this.effectSendL.chain(l, this._allpassFiltersL[0])
                          : this.effectSendR.chain(l, this._allpassFiltersR[0]),
                          this.roomSize.connect(l.resonance),
                          this.dampening.connect(l.dampening),
                          this._combFilters.push(l)
                      }
                      t.connectSeries.apply(t, this._allpassFiltersL),
                        t.connectSeries.apply(t, this._allpassFiltersR),
                        this._allpassFiltersL[
                          this._allpassFiltersL.length - 1
                        ].connect(this.effectReturnL),
                        this._allpassFiltersR[
                          this._allpassFiltersR.length - 1
                        ].connect(this.effectReturnR),
                        this._readOnly(['roomSize', 'dampening'])
                    }),
                    t.extend(t.Freeverb, t.StereoEffect),
                    (t.Freeverb.defaults = { roomSize: 0.7, dampening: 3e3 }),
                    (t.Freeverb.prototype.dispose = function() {
                      t.StereoEffect.prototype.dispose.call(this)
                      for (var e = 0; e < this._allpassFiltersL.length; e++)
                        this._allpassFiltersL[e].disconnect(),
                          (this._allpassFiltersL[e] = null)
                      this._allpassFiltersL = null
                      for (var i = 0; i < this._allpassFiltersR.length; i++)
                        this._allpassFiltersR[i].disconnect(),
                          (this._allpassFiltersR[i] = null)
                      this._allpassFiltersR = null
                      for (var n = 0; n < this._combFilters.length; n++)
                        this._combFilters[n].dispose(),
                          (this._combFilters[n] = null)
                      return (
                        (this._combFilters = null),
                        this._writable(['roomSize', 'dampening']),
                        this.roomSize.dispose(),
                        (this.roomSize = null),
                        this.dampening.dispose(),
                        (this.dampening = null),
                        this
                      )
                    }),
                    t.Freeverb
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(32), i(1), i(18)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.FeedbackDelay = function() {
                      var e = t.defaults(
                        arguments,
                        ['delayTime', 'feedback'],
                        t.FeedbackDelay
                      )
                      t.FeedbackEffect.call(this, e),
                        (this._delayNode = new t.Delay(
                          e.delayTime,
                          e.maxDelay
                        )),
                        (this.delayTime = this._delayNode.delayTime),
                        this.connectEffect(this._delayNode),
                        this._readOnly(['delayTime'])
                    }),
                    t.extend(t.FeedbackDelay, t.FeedbackEffect),
                    (t.FeedbackDelay.defaults = {
                      delayTime: 0.25,
                      maxDelay: 1
                    }),
                    (t.FeedbackDelay.prototype.dispose = function() {
                      return (
                        t.FeedbackEffect.prototype.dispose.call(this),
                        this._delayNode.dispose(),
                        (this._delayNode = null),
                        this._writable(['delayTime']),
                        (this.delayTime = null),
                        this
                      )
                    }),
                    t.FeedbackDelay
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(7)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Distortion = function() {
                      var e = t.defaults(
                        arguments,
                        ['distortion'],
                        t.Distortion
                      )
                      t.Effect.call(this, e),
                        (this._shaper = new t.WaveShaper(4096)),
                        (this._distortion = e.distortion),
                        this.connectEffect(this._shaper),
                        (this.distortion = e.distortion),
                        (this.oversample = e.oversample)
                    }),
                    t.extend(t.Distortion, t.Effect),
                    (t.Distortion.defaults = {
                      distortion: 0.4,
                      oversample: 'none'
                    }),
                    Object.defineProperty(
                      t.Distortion.prototype,
                      'distortion',
                      {
                        get: function() {
                          return this._distortion
                        },
                        set: function(t) {
                          this._distortion = t
                          var e = 100 * t,
                            i = Math.PI / 180
                          this._shaper.setMap(function(t) {
                            return Math.abs(t) < 0.001
                              ? 0
                              : ((3 + e) * t * 20 * i) /
                                  (Math.PI + e * Math.abs(t))
                          })
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.Distortion.prototype,
                      'oversample',
                      {
                        get: function() {
                          return this._shaper.oversample
                        },
                        set: function(t) {
                          this._shaper.oversample = t
                        }
                      }
                    ),
                    (t.Distortion.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._shaper.dispose(),
                        (this._shaper = null),
                        this
                      )
                    }),
                    t.Distortion
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(12), i(15), i(18)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Chorus = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'delayTime', 'depth'],
                        t.Chorus
                      )
                      t.StereoEffect.call(this, e),
                        (this._depth = e.depth),
                        (this._delayTime = e.delayTime / 1e3),
                        (this._lfoL = new t.LFO({
                          frequency: e.frequency,
                          min: 0,
                          max: 1
                        })),
                        (this._lfoR = new t.LFO({
                          frequency: e.frequency,
                          min: 0,
                          max: 1,
                          phase: 180
                        })),
                        (this._delayNodeL = new t.Delay()),
                        (this._delayNodeR = new t.Delay()),
                        (this.frequency = this._lfoL.frequency),
                        this.effectSendL.chain(
                          this._delayNodeL,
                          this.effectReturnL
                        ),
                        this.effectSendR.chain(
                          this._delayNodeR,
                          this.effectReturnR
                        ),
                        this.effectSendL.connect(this.effectReturnL),
                        this.effectSendR.connect(this.effectReturnR),
                        this._lfoL.connect(this._delayNodeL.delayTime),
                        this._lfoR.connect(this._delayNodeR.delayTime),
                        this._lfoL.start(),
                        this._lfoR.start(),
                        this._lfoL.frequency.connect(this._lfoR.frequency),
                        (this.depth = this._depth),
                        (this.frequency.value = e.frequency),
                        (this.type = e.type),
                        this._readOnly(['frequency']),
                        (this.spread = e.spread)
                    }),
                    t.extend(t.Chorus, t.StereoEffect),
                    (t.Chorus.defaults = {
                      frequency: 1.5,
                      delayTime: 3.5,
                      depth: 0.7,
                      type: 'sine',
                      spread: 180
                    }),
                    Object.defineProperty(t.Chorus.prototype, 'depth', {
                      get: function() {
                        return this._depth
                      },
                      set: function(t) {
                        this._depth = t
                        var e = this._delayTime * t
                        ;(this._lfoL.min = Math.max(this._delayTime - e, 0)),
                          (this._lfoL.max = this._delayTime + e),
                          (this._lfoR.min = Math.max(this._delayTime - e, 0)),
                          (this._lfoR.max = this._delayTime + e)
                      }
                    }),
                    Object.defineProperty(t.Chorus.prototype, 'delayTime', {
                      get: function() {
                        return 1e3 * this._delayTime
                      },
                      set: function(t) {
                        ;(this._delayTime = t / 1e3), (this.depth = this._depth)
                      }
                    }),
                    Object.defineProperty(t.Chorus.prototype, 'type', {
                      get: function() {
                        return this._lfoL.type
                      },
                      set: function(t) {
                        ;(this._lfoL.type = t), (this._lfoR.type = t)
                      }
                    }),
                    Object.defineProperty(t.Chorus.prototype, 'spread', {
                      get: function() {
                        return this._lfoR.phase - this._lfoL.phase
                      },
                      set: function(t) {
                        ;(this._lfoL.phase = 90 - t / 2),
                          (this._lfoR.phase = t / 2 + 90)
                      }
                    }),
                    (t.Chorus.prototype.dispose = function() {
                      return (
                        t.StereoEffect.prototype.dispose.call(this),
                        this._lfoL.dispose(),
                        (this._lfoL = null),
                        this._lfoR.dispose(),
                        (this._lfoR = null),
                        this._delayNodeL.dispose(),
                        (this._delayNodeL = null),
                        this._delayNodeR.dispose(),
                        (this._delayNodeR = null),
                        this._writable('frequency'),
                        (this.frequency = null),
                        this
                      )
                    }),
                    t.Chorus
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(7)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Chebyshev = function() {
                      var e = t.defaults(arguments, ['order'], t.Chebyshev)
                      t.Effect.call(this, e),
                        (this._shaper = new t.WaveShaper(4096)),
                        (this._order = e.order),
                        this.connectEffect(this._shaper),
                        (this.order = e.order),
                        (this.oversample = e.oversample)
                    }),
                    t.extend(t.Chebyshev, t.Effect),
                    (t.Chebyshev.defaults = { order: 1, oversample: 'none' }),
                    (t.Chebyshev.prototype._getCoefficient = function(t, e, i) {
                      return i.hasOwnProperty(e)
                        ? i[e]
                        : ((i[e] =
                            0 === e
                              ? 0
                              : 1 === e
                              ? t
                              : 2 * t * this._getCoefficient(t, e - 1, i) -
                                this._getCoefficient(t, e - 2, i)),
                          i[e])
                    }),
                    Object.defineProperty(t.Chebyshev.prototype, 'order', {
                      get: function() {
                        return this._order
                      },
                      set: function(t) {
                        this._order = t
                        for (
                          var e = new Array(4096), i = e.length, n = 0;
                          n < i;
                          ++n
                        ) {
                          var o = (2 * n) / i - 1
                          e[n] = 0 === o ? 0 : this._getCoefficient(o, t, {})
                        }
                        this._shaper.curve = e
                      }
                    }),
                    Object.defineProperty(t.Chebyshev.prototype, 'oversample', {
                      get: function() {
                        return this._shaper.oversample
                      },
                      set: function(t) {
                        this._shaper.oversample = t
                      }
                    }),
                    (t.Chebyshev.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._shaper.dispose(),
                        (this._shaper = null),
                        this
                      )
                    }),
                    t.Chebyshev
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(13), i(77)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.BitCrusher = function() {
                      var e = t.defaults(arguments, ['bits'], t.BitCrusher)
                      t.Effect.call(this, e)
                      var i = 1 / Math.pow(2, e.bits - 1)
                      ;(this._subtract = new t.Subtract()),
                        (this._modulo = new t.Modulo(i)),
                        (this._bits = e.bits),
                        this.effectSend.fan(this._subtract, this._modulo),
                        this._modulo.connect(this._subtract, 0, 1),
                        this._subtract.connect(this.effectReturn)
                    }),
                    t.extend(t.BitCrusher, t.Effect),
                    (t.BitCrusher.defaults = { bits: 4 }),
                    Object.defineProperty(t.BitCrusher.prototype, 'bits', {
                      get: function() {
                        return this._bits
                      },
                      set: function(t) {
                        this._bits = t
                        var e = 1 / Math.pow(2, t - 1)
                        this._modulo.value = e
                      }
                    }),
                    (t.BitCrusher.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._subtract.dispose(),
                        (this._subtract = null),
                        this._modulo.dispose(),
                        (this._modulo = null),
                        this
                      )
                    }),
                    t.BitCrusher
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(57), i(42), i(8), i(9)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AutoWah = function() {
                      var e = t.defaults(
                        arguments,
                        ['baseFrequency', 'octaves', 'sensitivity'],
                        t.AutoWah
                      )
                      t.Effect.call(this, e),
                        (this.follower = new t.Follower(e.follower)),
                        (this._sweepRange = new t.ScaleExp(0, 1, 0.5)),
                        (this._baseFrequency = e.baseFrequency),
                        (this._octaves = e.octaves),
                        (this._inputBoost = new t.Gain()),
                        (this._bandpass = new t.Filter({
                          rolloff: -48,
                          frequency: 0,
                          Q: e.Q
                        })),
                        (this._peaking = new t.Filter(0, 'peaking')),
                        (this._peaking.gain.value = e.gain),
                        (this.gain = this._peaking.gain),
                        (this.Q = this._bandpass.Q),
                        this.effectSend.chain(
                          this._inputBoost,
                          this.follower,
                          this._sweepRange
                        ),
                        this._sweepRange.connect(this._bandpass.frequency),
                        this._sweepRange.connect(this._peaking.frequency),
                        this.effectSend.chain(
                          this._bandpass,
                          this._peaking,
                          this.effectReturn
                        ),
                        this._setSweepRange(),
                        (this.sensitivity = e.sensitivity),
                        this._readOnly(['gain', 'Q'])
                    }),
                    t.extend(t.AutoWah, t.Effect),
                    (t.AutoWah.defaults = {
                      baseFrequency: 100,
                      octaves: 6,
                      sensitivity: 0,
                      Q: 2,
                      gain: 2,
                      follower: { attack: 0.3, release: 0.5 }
                    }),
                    Object.defineProperty(t.AutoWah.prototype, 'octaves', {
                      get: function() {
                        return this._octaves
                      },
                      set: function(t) {
                        ;(this._octaves = t), this._setSweepRange()
                      }
                    }),
                    Object.defineProperty(
                      t.AutoWah.prototype,
                      'baseFrequency',
                      {
                        get: function() {
                          return this._baseFrequency
                        },
                        set: function(t) {
                          ;(this._baseFrequency = t), this._setSweepRange()
                        }
                      }
                    ),
                    Object.defineProperty(t.AutoWah.prototype, 'sensitivity', {
                      get: function() {
                        return t.gainToDb(1 / this._inputBoost.gain.value)
                      },
                      set: function(e) {
                        this._inputBoost.gain.value = 1 / t.dbToGain(e)
                      }
                    }),
                    (t.AutoWah.prototype._setSweepRange = function() {
                      ;(this._sweepRange.min = this._baseFrequency),
                        (this._sweepRange.max = Math.min(
                          this._baseFrequency * Math.pow(2, this._octaves),
                          this.context.sampleRate / 2
                        ))
                    }),
                    (t.AutoWah.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this.follower.dispose(),
                        (this.follower = null),
                        this._sweepRange.dispose(),
                        (this._sweepRange = null),
                        this._bandpass.dispose(),
                        (this._bandpass = null),
                        this._peaking.dispose(),
                        (this._peaking = null),
                        this._inputBoost.dispose(),
                        (this._inputBoost = null),
                        this._writable(['gain', 'Q']),
                        (this.gain = null),
                        (this.Q = null),
                        this
                      )
                    }),
                    t.AutoWah
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(12), i(60)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AutoPanner = function() {
                      var e = t.defaults(arguments, ['frequency'], t.AutoPanner)
                      t.Effect.call(this, e),
                        (this._lfo = new t.LFO({
                          frequency: e.frequency,
                          amplitude: e.depth,
                          min: -1,
                          max: 1
                        })),
                        (this.depth = this._lfo.amplitude),
                        (this._panner = new t.Panner()),
                        (this.frequency = this._lfo.frequency),
                        this.connectEffect(this._panner),
                        this._lfo.connect(this._panner.pan),
                        (this.type = e.type),
                        this._readOnly(['depth', 'frequency'])
                    }),
                    t.extend(t.AutoPanner, t.Effect),
                    (t.AutoPanner.defaults = {
                      frequency: 1,
                      type: 'sine',
                      depth: 1
                    }),
                    (t.AutoPanner.prototype.start = function(t) {
                      return this._lfo.start(t), this
                    }),
                    (t.AutoPanner.prototype.stop = function(t) {
                      return this._lfo.stop(t), this
                    }),
                    (t.AutoPanner.prototype.sync = function(t) {
                      return this._lfo.sync(t), this
                    }),
                    (t.AutoPanner.prototype.unsync = function() {
                      return this._lfo.unsync(), this
                    }),
                    Object.defineProperty(t.AutoPanner.prototype, 'type', {
                      get: function() {
                        return this._lfo.type
                      },
                      set: function(t) {
                        this._lfo.type = t
                      }
                    }),
                    (t.AutoPanner.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._lfo.dispose(),
                        (this._lfo = null),
                        this._panner.dispose(),
                        (this._panner = null),
                        this._writable(['depth', 'frequency']),
                        (this.frequency = null),
                        (this.depth = null),
                        this
                      )
                    }),
                    t.AutoPanner
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(8), i(12), i(9)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.AutoFilter = function() {
                      var e = t.defaults(
                        arguments,
                        ['frequency', 'baseFrequency', 'octaves'],
                        t.AutoFilter
                      )
                      t.Effect.call(this, e),
                        (this._lfo = new t.LFO({
                          frequency: e.frequency,
                          amplitude: e.depth
                        })),
                        (this.depth = this._lfo.amplitude),
                        (this.frequency = this._lfo.frequency),
                        (this.filter = new t.Filter(e.filter)),
                        (this._octaves = 0),
                        this.connectEffect(this.filter),
                        this._lfo.connect(this.filter.frequency),
                        (this.type = e.type),
                        this._readOnly(['frequency', 'depth']),
                        (this.octaves = e.octaves),
                        (this.baseFrequency = e.baseFrequency)
                    }),
                    t.extend(t.AutoFilter, t.Effect),
                    (t.AutoFilter.defaults = {
                      frequency: 1,
                      type: 'sine',
                      depth: 1,
                      baseFrequency: 200,
                      octaves: 2.6,
                      filter: { type: 'lowpass', rolloff: -12, Q: 1 }
                    }),
                    (t.AutoFilter.prototype.start = function(t) {
                      return this._lfo.start(t), this
                    }),
                    (t.AutoFilter.prototype.stop = function(t) {
                      return this._lfo.stop(t), this
                    }),
                    (t.AutoFilter.prototype.sync = function(t) {
                      return this._lfo.sync(t), this
                    }),
                    (t.AutoFilter.prototype.unsync = function() {
                      return this._lfo.unsync(), this
                    }),
                    Object.defineProperty(t.AutoFilter.prototype, 'type', {
                      get: function() {
                        return this._lfo.type
                      },
                      set: function(t) {
                        this._lfo.type = t
                      }
                    }),
                    Object.defineProperty(
                      t.AutoFilter.prototype,
                      'baseFrequency',
                      {
                        get: function() {
                          return this._lfo.min
                        },
                        set: function(t) {
                          ;(this._lfo.min = this.toFrequency(t)),
                            (this.octaves = this._octaves)
                        }
                      }
                    ),
                    Object.defineProperty(t.AutoFilter.prototype, 'octaves', {
                      get: function() {
                        return this._octaves
                      },
                      set: function(t) {
                        ;(this._octaves = t),
                          (this._lfo.max = this.baseFrequency * Math.pow(2, t))
                      }
                    }),
                    (t.AutoFilter.prototype.dispose = function() {
                      return (
                        t.Effect.prototype.dispose.call(this),
                        this._lfo.dispose(),
                        (this._lfo = null),
                        this.filter.dispose(),
                        (this.filter = null),
                        this._writable(['frequency', 'depth']),
                        (this.frequency = null),
                        (this.depth = null),
                        this
                      )
                    }),
                    t.AutoFilter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(23), i(10), i(19), i(1), i(22), i(28)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  ;(t.Listener = function() {
                    t.call(this),
                      (this._orientation = [0, 0, 0, 0, 0, 0]),
                      (this._position = [0, 0, 0]),
                      t.getContext(
                        function() {
                          this.set(e.defaults), (this.context.listener = this)
                        }.bind(this)
                      )
                  }),
                    t.extend(t.Listener),
                    (t.Listener.defaults = {
                      positionX: 0,
                      positionY: 0,
                      positionZ: 0,
                      forwardX: 0,
                      forwardY: 0,
                      forwardZ: 1,
                      upX: 0,
                      upY: 1,
                      upZ: 0
                    }),
                    (t.Listener.prototype.isListener = !0),
                    (t.Listener.prototype._rampTimeConstant = 0.01),
                    (t.Listener.prototype.setPosition = function(t, e, i) {
                      if (this.context.rawContext.listener.positionX) {
                        var n = this.now()
                        this.context.rawContext.listener.positionX.setTargetAtTime(
                          t,
                          n,
                          this._rampTimeConstant
                        ),
                          this.context.rawContext.listener.positionY.setTargetAtTime(
                            e,
                            n,
                            this._rampTimeConstant
                          ),
                          this.context.rawContext.listener.positionZ.setTargetAtTime(
                            i,
                            n,
                            this._rampTimeConstant
                          )
                      } else
                        this.context.rawContext.listener.setPosition(t, e, i)
                      return (
                        (this._position = Array.prototype.slice.call(
                          arguments
                        )),
                        this
                      )
                    }),
                    (t.Listener.prototype.setOrientation = function(
                      t,
                      e,
                      i,
                      n,
                      o,
                      r
                    ) {
                      if (this.context.rawContext.listener.forwardX) {
                        var s = this.now()
                        this.context.rawContext.listener.forwardX.setTargetAtTime(
                          t,
                          s,
                          this._rampTimeConstant
                        ),
                          this.context.rawContext.listener.forwardY.setTargetAtTime(
                            e,
                            s,
                            this._rampTimeConstant
                          ),
                          this.context.rawContext.listener.forwardZ.setTargetAtTime(
                            i,
                            s,
                            this._rampTimeConstant
                          ),
                          this.context.rawContext.listener.upX.setTargetAtTime(
                            n,
                            s,
                            this._rampTimeConstant
                          ),
                          this.context.rawContext.listener.upY.setTargetAtTime(
                            o,
                            s,
                            this._rampTimeConstant
                          ),
                          this.context.rawContext.listener.upZ.setTargetAtTime(
                            r,
                            s,
                            this._rampTimeConstant
                          )
                      } else
                        this.context.rawContext.listener.setOrientation(
                          t,
                          e,
                          i,
                          n,
                          o,
                          r
                        )
                      return (
                        (this._orientation = Array.prototype.slice.call(
                          arguments
                        )),
                        this
                      )
                    }),
                    Object.defineProperty(t.Listener.prototype, 'positionX', {
                      set: function(t) {
                        ;(this._position[0] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[0]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'positionY', {
                      set: function(t) {
                        ;(this._position[1] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[1]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'positionZ', {
                      set: function(t) {
                        ;(this._position[2] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[2]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'forwardX', {
                      set: function(t) {
                        ;(this._orientation[0] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[0]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'forwardY', {
                      set: function(t) {
                        ;(this._orientation[1] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[1]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'forwardZ', {
                      set: function(t) {
                        ;(this._orientation[2] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[2]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'upX', {
                      set: function(t) {
                        ;(this._orientation[3] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[3]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'upY', {
                      set: function(t) {
                        ;(this._orientation[4] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[4]
                      }
                    }),
                    Object.defineProperty(t.Listener.prototype, 'upZ', {
                      set: function(t) {
                        ;(this._orientation[5] = t),
                          this.setOrientation.apply(this, this._orientation)
                      },
                      get: function() {
                        return this._orientation[5]
                      }
                    }),
                    (t.Listener.prototype.dispose = function() {
                      return (
                        (this._orientation = null),
                        (this._position = null),
                        this
                      )
                    })
                  var e = t.Listener
                  return (
                    (t.Listener = new e()),
                    t.Context.on('init', function(i) {
                      i.listener && i.listener.isListener
                        ? (t.Listener = i.listener)
                        : (t.Listener = new e())
                    }),
                    t.Listener
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(24)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Draw = function() {
                      t.call(this),
                        (this._events = new t.Timeline()),
                        (this.expiration = 0.25),
                        (this.anticipation = 0.008),
                        (this._boundDrawLoop = this._drawLoop.bind(this))
                    }),
                    t.extend(t.Draw),
                    (t.Draw.prototype.schedule = function(t, e) {
                      return (
                        this._events.add({
                          callback: t,
                          time: this.toSeconds(e)
                        }),
                        1 === this._events.length &&
                          requestAnimationFrame(this._boundDrawLoop),
                        this
                      )
                    }),
                    (t.Draw.prototype.cancel = function(t) {
                      return this._events.cancel(this.toSeconds(t)), this
                    }),
                    (t.Draw.prototype._drawLoop = function() {
                      for (
                        var e = t.context.currentTime;
                        this._events.length &&
                        this._events.peek().time - this.anticipation <= e;

                      ) {
                        var i = this._events.shift()
                        e - i.time <= this.expiration && i.callback()
                      }
                      this._events.length > 0 &&
                        requestAnimationFrame(this._boundDrawLoop)
                    }),
                    (t.Draw = new t.Draw()),
                    t.Draw
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(3)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  var e = {}
                  return (
                    (t.prototype.send = function(i, n) {
                      e.hasOwnProperty(i) || (e[i] = this.context.createGain()),
                        (n = t.defaultArg(n, 0))
                      var o = new t.Gain(n, t.Type.Decibels)
                      return this.connect(o), o.connect(e[i]), o
                    }),
                    (t.prototype.receive = function(t, i) {
                      return (
                        e.hasOwnProperty(t) ||
                          (e[t] = this.context.createGain()),
                        e[t].connect(this, 0, i),
                        this
                      )
                    }),
                    t.Context.on('init', function(t) {
                      t.buses ? (e = t.buses) : ((e = {}), (t.buses = e))
                    }),
                    t
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(4)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.CtrlRandom = function() {
                      var e = t.defaults(
                        arguments,
                        ['min', 'max'],
                        t.CtrlRandom
                      )
                      t.call(this),
                        (this.min = e.min),
                        (this.max = e.max),
                        (this.integer = e.integer)
                    }),
                    t.extend(t.CtrlRandom),
                    (t.CtrlRandom.defaults = { min: 0, max: 1, integer: !1 }),
                    Object.defineProperty(t.CtrlRandom.prototype, 'value', {
                      get: function() {
                        var t = this.toSeconds(this.min),
                          e = this.toSeconds(this.max),
                          i = Math.random(),
                          n = i * t + (1 - i) * e
                        return this.integer && (n = Math.floor(n)), n
                      }
                    }),
                    t.CtrlRandom
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.CtrlMarkov = function(e, i) {
                      t.call(this),
                        (this.values = t.defaultArg(e, {})),
                        (this.value = t.defaultArg(
                          i,
                          Object.keys(this.values)[0]
                        ))
                    }),
                    t.extend(t.CtrlMarkov),
                    (t.CtrlMarkov.prototype.next = function() {
                      if (this.values.hasOwnProperty(this.value)) {
                        var e = this.values[this.value]
                        if (t.isArray(e))
                          for (
                            var i = this._getProbDistribution(e),
                              n = Math.random(),
                              o = 0,
                              r = 0;
                            r < i.length;
                            r++
                          ) {
                            var s = i[r]
                            if (n > o && n < o + s) {
                              var a = e[r]
                              t.isObject(a)
                                ? (this.value = a.value)
                                : (this.value = a)
                            }
                            o += s
                          }
                        else this.value = e
                      }
                      return this.value
                    }),
                    (t.CtrlMarkov.prototype._getProbDistribution = function(e) {
                      for (
                        var i = [], n = 0, o = !1, r = 0;
                        r < e.length;
                        r++
                      ) {
                        var s = e[r]
                        t.isObject(s)
                          ? ((o = !0), (i[r] = s.probability))
                          : (i[r] = 1 / e.length),
                          (n += i[r])
                      }
                      if (o) for (var a = 0; a < i.length; a++) i[a] = i[a] / n
                      return i
                    }),
                    (t.CtrlMarkov.prototype.dispose = function() {
                      this.values = null
                    }),
                    t.CtrlMarkov
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(4)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.CtrlInterpolate = function() {
                      var e = t.defaults(
                        arguments,
                        ['values', 'index'],
                        t.CtrlInterpolate
                      )
                      t.call(this),
                        (this.values = e.values),
                        (this.index = e.index)
                    }),
                    t.extend(t.CtrlInterpolate),
                    (t.CtrlInterpolate.defaults = { index: 0, values: [] }),
                    Object.defineProperty(
                      t.CtrlInterpolate.prototype,
                      'value',
                      {
                        get: function() {
                          var t = this.index
                          t = Math.min(t, this.values.length - 1)
                          var e = Math.floor(t),
                            i = this.values[e],
                            n = this.values[Math.ceil(t)]
                          return this._interpolate(t - e, i, n)
                        }
                      }
                    ),
                    (t.CtrlInterpolate.prototype._interpolate = function(
                      e,
                      i,
                      n
                    ) {
                      if (t.isArray(i)) {
                        for (var o = [], r = 0; r < i.length; r++)
                          o[r] = this._interpolate(e, i[r], n[r])
                        return o
                      }
                      if (t.isObject(i)) {
                        var s = {}
                        for (var a in i) s[a] = this._interpolate(e, i[a], n[a])
                        return s
                      }
                      return (
                        (1 - e) * (i = this._toNumber(i)) +
                        e * (n = this._toNumber(n))
                      )
                    }),
                    (t.CtrlInterpolate.prototype._toNumber = function(e) {
                      return t.isNumber(e) ? e : this.toSeconds(e)
                    }),
                    (t.CtrlInterpolate.prototype.dispose = function() {
                      this.values = null
                    }),
                    t.CtrlInterpolate
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(44), i(2)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Waveform = function() {
                      var e = t.defaults(arguments, ['size'], t.Waveform)
                      ;(e.type = t.Analyser.Type.Waveform),
                        t.AudioNode.call(this),
                        (this._analyser = this.input = this.output = new t.Analyser(
                          e
                        ))
                    }),
                    t.extend(t.Waveform, t.AudioNode),
                    (t.Waveform.defaults = { size: 1024 }),
                    (t.Waveform.prototype.getValue = function() {
                      return this._analyser.getValue()
                    }),
                    Object.defineProperty(t.Waveform.prototype, 'size', {
                      get: function() {
                        return this._analyser.size
                      },
                      set: function(t) {
                        this._analyser.size = t
                      }
                    }),
                    (t.Waveform.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this._analyser.dispose(),
                        (this._analyser = null)
                    }),
                    t.Waveform
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(23), i(10), i(19), i(1), i(22), i(28), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Panner3D = function() {
                      var e = t.defaults(
                        arguments,
                        ['positionX', 'positionY', 'positionZ'],
                        t.Panner3D
                      )
                      t.AudioNode.call(this),
                        (this._panner = this.input = this.output = this.context.createPanner()),
                        (this._panner.panningModel = e.panningModel),
                        (this._panner.maxDistance = e.maxDistance),
                        (this._panner.distanceModel = e.distanceModel),
                        (this._panner.coneOuterGain = e.coneOuterGain),
                        (this._panner.coneOuterAngle = e.coneOuterAngle),
                        (this._panner.coneInnerAngle = e.coneInnerAngle),
                        (this._panner.refDistance = e.refDistance),
                        (this._panner.rolloffFactor = e.rolloffFactor),
                        (this._orientation = [
                          e.orientationX,
                          e.orientationY,
                          e.orientationZ
                        ]),
                        (this._position = [
                          e.positionX,
                          e.positionY,
                          e.positionZ
                        ]),
                        (this.orientationX = e.orientationX),
                        (this.orientationY = e.orientationY),
                        (this.orientationZ = e.orientationZ),
                        (this.positionX = e.positionX),
                        (this.positionY = e.positionY),
                        (this.positionZ = e.positionZ)
                    }),
                    t.extend(t.Panner3D, t.AudioNode),
                    (t.Panner3D.defaults = {
                      positionX: 0,
                      positionY: 0,
                      positionZ: 0,
                      orientationX: 0,
                      orientationY: 0,
                      orientationZ: 0,
                      panningModel: 'equalpower',
                      maxDistance: 1e4,
                      distanceModel: 'inverse',
                      coneOuterGain: 0,
                      coneOuterAngle: 360,
                      coneInnerAngle: 360,
                      refDistance: 1,
                      rolloffFactor: 1
                    }),
                    (t.Panner3D.prototype._rampTimeConstant = 0.01),
                    (t.Panner3D.prototype.setPosition = function(t, e, i) {
                      if (this._panner.positionX) {
                        var n = this.now()
                        this._panner.positionX.setTargetAtTime(
                          t,
                          n,
                          this._rampTimeConstant
                        ),
                          this._panner.positionY.setTargetAtTime(
                            e,
                            n,
                            this._rampTimeConstant
                          ),
                          this._panner.positionZ.setTargetAtTime(
                            i,
                            n,
                            this._rampTimeConstant
                          )
                      } else this._panner.setPosition(t, e, i)
                      return (
                        (this._position = Array.prototype.slice.call(
                          arguments
                        )),
                        this
                      )
                    }),
                    (t.Panner3D.prototype.setOrientation = function(t, e, i) {
                      if (this._panner.orientationX) {
                        var n = this.now()
                        this._panner.orientationX.setTargetAtTime(
                          t,
                          n,
                          this._rampTimeConstant
                        ),
                          this._panner.orientationY.setTargetAtTime(
                            e,
                            n,
                            this._rampTimeConstant
                          ),
                          this._panner.orientationZ.setTargetAtTime(
                            i,
                            n,
                            this._rampTimeConstant
                          )
                      } else this._panner.setOrientation(t, e, i)
                      return (
                        (this._orientation = Array.prototype.slice.call(
                          arguments
                        )),
                        this
                      )
                    }),
                    Object.defineProperty(t.Panner3D.prototype, 'positionX', {
                      set: function(t) {
                        ;(this._position[0] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[0]
                      }
                    }),
                    Object.defineProperty(t.Panner3D.prototype, 'positionY', {
                      set: function(t) {
                        ;(this._position[1] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[1]
                      }
                    }),
                    Object.defineProperty(t.Panner3D.prototype, 'positionZ', {
                      set: function(t) {
                        ;(this._position[2] = t),
                          this.setPosition.apply(this, this._position)
                      },
                      get: function() {
                        return this._position[2]
                      }
                    }),
                    Object.defineProperty(
                      t.Panner3D.prototype,
                      'orientationX',
                      {
                        set: function(t) {
                          ;(this._orientation[0] = t),
                            this.setOrientation.apply(this, this._orientation)
                        },
                        get: function() {
                          return this._orientation[0]
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.Panner3D.prototype,
                      'orientationY',
                      {
                        set: function(t) {
                          ;(this._orientation[1] = t),
                            this.setOrientation.apply(this, this._orientation)
                        },
                        get: function() {
                          return this._orientation[1]
                        }
                      }
                    ),
                    Object.defineProperty(
                      t.Panner3D.prototype,
                      'orientationZ',
                      {
                        set: function(t) {
                          ;(this._orientation[2] = t),
                            this.setOrientation.apply(this, this._orientation)
                        },
                        get: function() {
                          return this._orientation[2]
                        }
                      }
                    ),
                    (t.Panner3D._aliasProperty = function(e) {
                      Object.defineProperty(t.Panner3D.prototype, e, {
                        set: function(t) {
                          this._panner[e] = t
                        },
                        get: function() {
                          return this._panner[e]
                        }
                      })
                    }),
                    t.Panner3D._aliasProperty('panningModel'),
                    t.Panner3D._aliasProperty('refDistance'),
                    t.Panner3D._aliasProperty('rolloffFactor'),
                    t.Panner3D._aliasProperty('distanceModel'),
                    t.Panner3D._aliasProperty('coneInnerAngle'),
                    t.Panner3D._aliasProperty('coneOuterAngle'),
                    t.Panner3D._aliasProperty('coneOuterGain'),
                    t.Panner3D._aliasProperty('maxDistance'),
                    (t.Panner3D.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._panner.disconnect(),
                        (this._panner = null),
                        (this._orientation = null),
                        (this._position = null),
                        this
                      )
                    }),
                    t.Panner3D
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(59), i(43), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MultibandCompressor = function(e) {
                      t.AudioNode.call(this),
                        (e = t.defaultArg(
                          arguments,
                          t.MultibandCompressor.defaults
                        )),
                        (this._splitter = this.input = new t.MultibandSplit({
                          lowFrequency: e.lowFrequency,
                          highFrequency: e.highFrequency
                        })),
                        (this.lowFrequency = this._splitter.lowFrequency),
                        (this.highFrequency = this._splitter.highFrequency),
                        (this.output = new t.Gain()),
                        (this.low = new t.Compressor(e.low)),
                        (this.mid = new t.Compressor(e.mid)),
                        (this.high = new t.Compressor(e.high)),
                        this._splitter.low.chain(this.low, this.output),
                        this._splitter.mid.chain(this.mid, this.output),
                        this._splitter.high.chain(this.high, this.output),
                        this._readOnly([
                          'high',
                          'mid',
                          'low',
                          'highFrequency',
                          'lowFrequency'
                        ])
                    }),
                    t.extend(t.MultibandCompressor, t.AudioNode),
                    (t.MultibandCompressor.defaults = {
                      low: t.Compressor.defaults,
                      mid: t.Compressor.defaults,
                      high: t.Compressor.defaults,
                      lowFrequency: 250,
                      highFrequency: 2e3
                    }),
                    (t.MultibandCompressor.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._splitter.dispose(),
                        this._writable([
                          'high',
                          'mid',
                          'low',
                          'highFrequency',
                          'lowFrequency'
                        ]),
                        this.low.dispose(),
                        this.mid.dispose(),
                        this.high.dispose(),
                        (this._splitter = null),
                        (this.low = null),
                        (this.mid = null),
                        (this.high = null),
                        (this.lowFrequency = null),
                        (this.highFrequency = null),
                        this
                      )
                    }),
                    t.MultibandCompressor
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(10), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Mono = function() {
                      t.AudioNode.call(this),
                        this.createInsOuts(1, 0),
                        (this._merge = this.output = new t.Merge()),
                        this.input.connect(this._merge, 0, 0),
                        this.input.connect(this._merge, 0, 1)
                    }),
                    t.extend(t.Mono, t.AudioNode),
                    (t.Mono.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._merge.dispose(),
                        (this._merge = null),
                        this
                      )
                    }),
                    t.Mono
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(52), i(51), i(43), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.MidSideCompressor = function(e) {
                      t.AudioNode.call(this),
                        (e = t.defaultArg(e, t.MidSideCompressor.defaults)),
                        (this._midSideSplit = this.input = new t.MidSideSplit()),
                        (this._midSideMerge = this.output = new t.MidSideMerge()),
                        (this.mid = new t.Compressor(e.mid)),
                        (this.side = new t.Compressor(e.side)),
                        this._midSideSplit.mid.chain(
                          this.mid,
                          this._midSideMerge.mid
                        ),
                        this._midSideSplit.side.chain(
                          this.side,
                          this._midSideMerge.side
                        ),
                        this._readOnly(['mid', 'side'])
                    }),
                    t.extend(t.MidSideCompressor, t.AudioNode),
                    (t.MidSideCompressor.defaults = {
                      mid: {
                        ratio: 3,
                        threshold: -24,
                        release: 0.03,
                        attack: 0.02,
                        knee: 16
                      },
                      side: {
                        ratio: 6,
                        threshold: -30,
                        release: 0.25,
                        attack: 0.03,
                        knee: 10
                      }
                    }),
                    (t.MidSideCompressor.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['mid', 'side']),
                        this.mid.dispose(),
                        (this.mid = null),
                        this.side.dispose(),
                        (this.side = null),
                        this._midSideSplit.dispose(),
                        (this._midSideSplit = null),
                        this._midSideMerge.dispose(),
                        (this._midSideMerge = null),
                        this
                      )
                    }),
                    t.MidSideCompressor
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(44), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Meter = function() {
                      var e = t.defaults(arguments, ['smoothing'], t.Meter)
                      t.AudioNode.call(this),
                        (this.smoothing = e.smoothing),
                        (this._rms = 0),
                        (this.input = this.output = this._analyser = new t.Analyser(
                          'waveform',
                          256
                        ))
                    }),
                    t.extend(t.Meter, t.AudioNode),
                    (t.Meter.defaults = { smoothing: 0.8 }),
                    (t.Meter.prototype.getLevel = function() {
                      for (
                        var e = this._analyser.getValue(), i = 0, n = 0;
                        n < e.length;
                        n++
                      ) {
                        var o = e[n]
                        i += o * o
                      }
                      var r = Math.sqrt(i / e.length)
                      return (
                        (this._rms = Math.max(r, this._rms * this.smoothing)),
                        t.gainToDb(this._rms)
                      )
                    }),
                    (t.Meter.prototype.getValue = function() {
                      return this._analyser.getValue()[0]
                    }),
                    (t.Meter.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._analyser.dispose(),
                        (this._analyser = null),
                        this
                      )
                    }),
                    t.Meter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(43), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Limiter = function() {
                      var e = t.defaults(arguments, ['threshold'], t.Limiter)
                      t.AudioNode.call(this),
                        (this._compressor = this.input = this.output = new t.Compressor(
                          {
                            attack: 0.001,
                            decay: 0.001,
                            threshold: e.threshold
                          }
                        )),
                        (this.threshold = this._compressor.threshold),
                        this._readOnly('threshold')
                    }),
                    t.extend(t.Limiter, t.AudioNode),
                    (t.Limiter.defaults = { threshold: -12 }),
                    (t.Limiter.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._compressor.dispose(),
                        (this._compressor = null),
                        this._writable('threshold'),
                        (this.threshold = null),
                        this
                      )
                    }),
                    t.Limiter
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(57), i(88), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.Gate = function() {
                      var e = t.defaults(
                        arguments,
                        ['threshold', 'smoothing'],
                        t.Gate
                      )
                      t.AudioNode.call(this),
                        this.createInsOuts(1, 1),
                        (this._follower = new t.Follower(e.smoothing)),
                        (this._gt = new t.GreaterThan(t.dbToGain(e.threshold))),
                        this.input.connect(this.output),
                        this.input.chain(
                          this._follower,
                          this._gt,
                          this.output.gain
                        )
                    }),
                    t.extend(t.Gate, t.AudioNode),
                    (t.Gate.defaults = { smoothing: 0.1, threshold: -40 }),
                    Object.defineProperty(t.Gate.prototype, 'threshold', {
                      get: function() {
                        return t.gainToDb(this._gt.value)
                      },
                      set: function(e) {
                        this._gt.value = t.dbToGain(e)
                      }
                    }),
                    Object.defineProperty(t.Gate.prototype, 'smoothing', {
                      get: function() {
                        return this._follower.smoothing
                      },
                      set: function(t) {
                        this._follower.smoothing = t
                      }
                    }),
                    (t.Gate.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._follower.dispose(),
                        this._gt.dispose(),
                        (this._follower = null),
                        (this._gt = null),
                        this
                      )
                    }),
                    t.Gate
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(44), i(2)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.FFT = function() {
                      var e = t.defaults(arguments, ['size'], t.FFT)
                      ;(e.type = t.Analyser.Type.FFT),
                        t.AudioNode.call(this),
                        (this._analyser = this.input = this.output = new t.Analyser(
                          e
                        ))
                    }),
                    t.extend(t.FFT, t.AudioNode),
                    (t.FFT.defaults = { size: 1024 }),
                    (t.FFT.prototype.getValue = function() {
                      return this._analyser.getValue()
                    }),
                    Object.defineProperty(t.FFT.prototype, 'size', {
                      get: function() {
                        return this._analyser.size
                      },
                      set: function(t) {
                        this._analyser.size = t
                      }
                    }),
                    (t.FFT.prototype.dispose = function() {
                      t.AudioNode.prototype.dispose.call(this),
                        this._analyser.dispose(),
                        (this._analyser = null)
                    }),
                    t.FFT
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(59), i(3), i(2)]),
              void 0 ===
                (o = function(t) {
                  'use strict'
                  return (
                    (t.EQ3 = function() {
                      var e = t.defaults(
                        arguments,
                        ['low', 'mid', 'high'],
                        t.EQ3
                      )
                      t.AudioNode.call(this),
                        (this.output = new t.Gain()),
                        (this._multibandSplit = this.input = new t.MultibandSplit(
                          {
                            lowFrequency: e.lowFrequency,
                            highFrequency: e.highFrequency
                          }
                        )),
                        (this._lowGain = new t.Gain(e.low, t.Type.Decibels)),
                        (this._midGain = new t.Gain(e.mid, t.Type.Decibels)),
                        (this._highGain = new t.Gain(e.high, t.Type.Decibels)),
                        (this.low = this._lowGain.gain),
                        (this.mid = this._midGain.gain),
                        (this.high = this._highGain.gain),
                        (this.Q = this._multibandSplit.Q),
                        (this.lowFrequency = this._multibandSplit.lowFrequency),
                        (this.highFrequency = this._multibandSplit.highFrequency),
                        this._multibandSplit.low.chain(
                          this._lowGain,
                          this.output
                        ),
                        this._multibandSplit.mid.chain(
                          this._midGain,
                          this.output
                        ),
                        this._multibandSplit.high.chain(
                          this._highGain,
                          this.output
                        ),
                        this._readOnly([
                          'low',
                          'mid',
                          'high',
                          'lowFrequency',
                          'highFrequency'
                        ])
                    }),
                    t.extend(t.EQ3, t.AudioNode),
                    (t.EQ3.defaults = {
                      low: 0,
                      mid: 0,
                      high: 0,
                      lowFrequency: 400,
                      highFrequency: 2500
                    }),
                    (t.EQ3.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable([
                          'low',
                          'mid',
                          'high',
                          'lowFrequency',
                          'highFrequency'
                        ]),
                        this._multibandSplit.dispose(),
                        (this._multibandSplit = null),
                        (this.lowFrequency = null),
                        (this.highFrequency = null),
                        this._lowGain.dispose(),
                        (this._lowGain = null),
                        this._midGain.dispose(),
                        (this._midGain = null),
                        this._highGain.dispose(),
                        (this._highGain = null),
                        (this.low = null),
                        (this.mid = null),
                        (this.high = null),
                        (this.Q = null),
                        this
                      )
                    }),
                    t.EQ3
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e, i) {
            var n, o
            ;(n = [i(0), i(95), i(91), i(2)]),
              void 0 ===
                (o = function(t) {
                  return (
                    (t.Channel = function() {
                      var e = t.defaults(arguments, ['volume', 'pan'], t.PanVol)
                      t.AudioNode.call(this, e),
                        (this._solo = this.input = new t.Solo(e.solo)),
                        (this._panVol = this.output = new t.PanVol({
                          pan: e.pan,
                          volume: e.volume,
                          mute: e.mute
                        })),
                        (this.pan = this._panVol.pan),
                        (this.volume = this._panVol.volume),
                        this._solo.connect(this._panVol),
                        this._readOnly(['pan', 'volume'])
                    }),
                    t.extend(t.Channel, t.AudioNode),
                    (t.Channel.defaults = {
                      pan: 0,
                      volume: 0,
                      mute: !1,
                      solo: !1
                    }),
                    Object.defineProperty(t.Channel.prototype, 'solo', {
                      get: function() {
                        return this._solo.solo
                      },
                      set: function(t) {
                        this._solo.solo = t
                      }
                    }),
                    Object.defineProperty(t.Channel.prototype, 'muted', {
                      get: function() {
                        return this._solo.muted || this.mute
                      }
                    }),
                    Object.defineProperty(t.Channel.prototype, 'mute', {
                      get: function() {
                        return this._panVol.mute
                      },
                      set: function(t) {
                        this._panVol.mute = t
                      }
                    }),
                    (t.Channel.prototype.dispose = function() {
                      return (
                        t.AudioNode.prototype.dispose.call(this),
                        this._writable(['pan', 'volume']),
                        this._panVol.dispose(),
                        (this._panVol = null),
                        (this.pan = null),
                        (this.volume = null),
                        this._solo.dispose(),
                        (this._solo = null),
                        this
                      )
                    }),
                    t.Channel
                  )
                }.apply(e, n)) || (t.exports = o)
          },
          function(t, e) {
            t.exports = '13.4.9'
          },
          function(t, e) {
            var i
            i = (function() {
              return this
            })()
            try {
              i = i || Function('return this')() || (0, eval)('this')
            } catch (t) {
              'object' == typeof window && (i = window)
            }
            t.exports = i
          },
          function(t, e, i) {
            i(30),
              i(44),
              i(152),
              i(43),
              i(23),
              i(47),
              i(151),
              i(58),
              i(150),
              i(9),
              i(57),
              i(41),
              i(149),
              i(12),
              i(148),
              i(53),
              i(10),
              i(147),
              i(146),
              i(51),
              i(52),
              i(145),
              i(144),
              i(59),
              i(60),
              i(143),
              i(95),
              i(89),
              i(91),
              i(19),
              i(27),
              i(142),
              i(141),
              i(140),
              i(80),
              i(139),
              i(2),
              i(11),
              i(79),
              i(138),
              i(86),
              i(20),
              i(18),
              i(137),
              i(35),
              i(3),
              i(84),
              i(136),
              i(40),
              i(78),
              i(62),
              i(14),
              i(24),
              i(33),
              i(16),
              i(55),
              i(83),
              i(135),
              i(134),
              i(133),
              i(132),
              i(131),
              i(130),
              i(76),
              i(129),
              i(8),
              i(128),
              i(32),
              i(127),
              i(126),
              i(75),
              i(125),
              i(124),
              i(123),
              i(122),
              i(15),
              i(121),
              i(120),
              i(74),
              i(119),
              i(118),
              i(50),
              i(73),
              i(72),
              i(117),
              i(116),
              i(115),
              i(114),
              i(113),
              i(21),
              i(112),
              i(111),
              i(25),
              i(68),
              i(110),
              i(109),
              i(108),
              i(107),
              i(38),
              i(96),
              i(81),
              i(34),
              i(63),
              i(97),
              i(66),
              i(106),
              i(92),
              i(98),
              i(90),
              i(29),
              i(22),
              i(93),
              i(105),
              i(88),
              i(87),
              i(77),
              i(5),
              i(94),
              i(104),
              i(61),
              i(26),
              i(42),
              i(1),
              i(36),
              i(13),
              i(85),
              i(103),
              i(7),
              i(28),
              i(70),
              i(31),
              i(69),
              i(48),
              i(102),
              i(39),
              i(37),
              i(17),
              i(82),
              i(67),
              i(101),
              i(49),
              i(71),
              i(6),
              i(56),
              i(100),
              i(46),
              i(99),
              i(54),
              i(65),
              i(64),
              i(45),
              i(4),
              (t.exports = i(0))
          }
        ]))
    },
    function(t, e, i) {
      var n = i(6)
      t.exports = function(t, e) {
        if (!n(t)) return t
        var i, o
        if (e && 'function' == typeof (i = t.toString) && !n((o = i.call(t))))
          return o
        if ('function' == typeof (i = t.valueOf) && !n((o = i.call(t))))
          return o
        if (!e && 'function' == typeof (i = t.toString) && !n((o = i.call(t))))
          return o
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function(t, e, i) {
      var n = i(1),
        o = i(14),
        r = i(9),
        s = i(4),
        a = i(37),
        u = i(50),
        l = i(38),
        c = l.get,
        h = l.enforce,
        p = String(u).split('toString')
      o('inspectSource', function(t) {
        return u.call(t)
      }),
        (t.exports = function(t, e, i, o) {
          var u = !!o && !!o.unsafe,
            l = !!o && !!o.enumerable,
            c = !!o && !!o.noTargetGet
          'function' == typeof i &&
            ('string' != typeof e || s(i, 'name') || r(i, 'name', e),
            (h(i).source = p.join('string' == typeof e ? e : ''))),
            t !== n
              ? (u ? !c && t[e] && (l = !0) : delete t[e],
                l ? (t[e] = i) : r(t, e, i))
              : l
              ? (t[e] = i)
              : a(e, i)
        })(Function.prototype, 'toString', function() {
          return ('function' == typeof this && c(this).source) || u.call(this)
        })
    },
    function(t, e) {
      t.exports = !1
    },
    function(t, e, i) {
      var n = i(14),
        o = i(39),
        r = n('keys')
      t.exports = function(t) {
        return r[t] || (r[t] = o(t))
      }
    },
    function(t, e) {
      t.exports = {}
    },
    function(t, e, i) {
      var n = i(41),
        o = Math.min
      t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
      }
    },
    function(t, e) {
      t.exports = {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      'use strict'
      function n(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = new Array(t.length); e < t.length; e++)
                i[e] = t[e]
              return i
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t)
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      i.d(e, 'a', function() {
        return n
      })
    },
    function(t, e) {
      var i
      i = (function() {
        return this
      })()
      try {
        i = i || new Function('return this')()
      } catch (n) {
        'object' === typeof window && (i = window)
      }
      t.exports = i
    },
    function(t, e, i) {
      var n = i(8),
        o = i(46),
        r = i(12),
        s = i(13),
        a = i(18),
        u = i(4),
        l = i(48),
        c = Object.getOwnPropertyDescriptor
      e.f = n
        ? c
        : function(t, e) {
            if (((t = s(t)), (e = a(e, !0)), l))
              try {
                return c(t, e)
              } catch (i) {}
            if (u(t, e)) return r(!o.f.call(t, e), t[e])
          }
    },
    function(t, e) {
      var i = {}.toString
      t.exports = function(t) {
        return i.call(t).slice(8, -1)
      }
    },
    function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t)
        return t
      }
    },
    function(t, e, i) {
      var n = i(1),
        o = i(9)
      t.exports = function(t, e) {
        try {
          o(n, t, e)
        } catch (i) {
          n[t] = e
        }
        return e
      }
    },
    function(t, e, i) {
      var n,
        o,
        r,
        s = i(73),
        a = i(1),
        u = i(6),
        l = i(9),
        c = i(4),
        h = i(21),
        p = i(22),
        f = a.WeakMap
      if (s) {
        var d = new f(),
          y = d.get,
          _ = d.has,
          v = d.set
        ;(n = function(t, e) {
          return v.call(d, t, e), e
        }),
          (o = function(t) {
            return y.call(d, t) || {}
          }),
          (r = function(t) {
            return _.call(d, t)
          })
      } else {
        var m = h('state')
        ;(p[m] = !0),
          (n = function(t, e) {
            return l(t, m, e), e
          }),
          (o = function(t) {
            return c(t, m) ? t[m] : {}
          }),
          (r = function(t) {
            return c(t, m)
          })
      }
      t.exports = {
        set: n,
        get: o,
        has: r,
        enforce: function(t) {
          return r(t) ? o(t) : n(t, {})
        },
        getterFor: function(t) {
          return function(e) {
            var i
            if (!u(e) || (i = o(e)).type !== t)
              throw TypeError('Incompatible receiver, ' + t + ' required')
            return i
          }
        }
      }
    },
    function(t, e) {
      var i = 0,
        n = Math.random()
      t.exports = function(t) {
        return (
          'Symbol(' +
          String(void 0 === t ? '' : t) +
          ')_' +
          (++i + n).toString(36)
        )
      }
    },
    function(t, e, i) {
      var n = i(54),
        o = i(42).concat('length', 'prototype')
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return n(t, o)
        }
    },
    function(t, e) {
      var i = Math.ceil,
        n = Math.floor
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? n : i)(t)
      }
    },
    function(t, e) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
    },
    function(t, e, i) {
      var n = i(35)
      t.exports =
        Array.isArray ||
        function(t) {
          return 'Array' == n(t)
        }
    },
    function(t, e, i) {
      t.exports = (function() {
        'use strict'
        function t(t) {
          return document.querySelector(t)
        }
        function e(t) {
          return document.createElement(t)
        }
        function i(t) {
          return !isNaN(Number(t))
        }
        function n(t) {
          return (
            ('object' === typeof t && 1 === t.nodeType) || 11 === t.nodeType
          )
        }
        function o(e, i) {
          return (e = n(e) ? e : t(e)).appendChild(i), e
        }
        !(function(t, e) {
          void 0 === e && (e = {})
          var i = e.insertAt
          if (t && 'undefined' !== typeof document) {
            var n = document.head || document.getElementsByTagName('head')[0],
              o = document.createElement('style')
            ;(o.type = 'text/css'),
              'top' === i && n.firstChild
                ? n.insertBefore(o, n.firstChild)
                : n.appendChild(o),
              o.styleSheet
                ? (o.styleSheet.cssText = t)
                : o.appendChild(document.createTextNode(t))
          }
        })(
          '._win_tip_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  max-height: 75%;\n  word-break: break-all;\n  max-width: 55%;\n  color: #fff;\n  font-size: 12px;\n  z-index: 100;\n  overflow: auto;\n  opacity: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);\n  -webkit-overflow-scrolling: touch;\n  transition: opacity 0.3s;\n}\n\n._win_tip {\n  display: inline-block;\n  min-width: 80px;\n  padding: 8px;\n  margin-bottom: 1px;\n  color: inherit;\n  border: 0;\n  background-color: rgba(34, 34, 34, 0.75);\n}\n\n._win_tip_box--sleep {\n  opacity: 0.3;\n}\n'
        )
        var r = '_win_tip_box',
          s = '_win_tip',
          a = '_tip_',
          u = '_win_tip_box--sleep',
          l = '__name',
          c = 3e4,
          h = 1,
          p = 0,
          f = console.log,
          d = { output: 'default', console: !1, opacity: 0.75, color: '#fff' }
        function y(t) {
          void 0 === t && (t = 'default')
          var e = ['default', 'info', 'warn', 'error'],
            i = e.indexOf(d.output) < 0 ? e.length : e.indexOf(d.output)
          return e.indexOf(t) >= i || !0 === d.output
        }
        function _() {
          for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i]
          var n = v(),
            o = t('.' + n),
            r = y('default') && e.length
          return r ? T(o, [n], m(e)) : {}
        }
        function v(t) {
          return (t = void 0 === t ? h++ : t), (a + t).replace(/\s+/g, '_')
        }
        function m(t, e) {
          var i = t
            .map(function(t) {
              return 'object' === typeof t
                ? (function(e) {
                    try {
                      return JSON.stringify(e)
                    } catch (t) {
                      return (
                        console.error('[wintip]', "can't print object", e), ''
                      )
                    }
                  })(t)
                : '' + t
            })
            .join(' ')
          return e ? '[' + e + '] ' + i : i
        }
        function g(t) {
          clearTimeout(p), t.classList.remove(u), setTimeout(b, c, t)
        }
        function b(t) {
          t.classList.add(u)
        }
        function S(t, e) {
          if (
            (0.75 != d.opacity &&
              (t.style.backgroundColor = 'rgba(0, 0, 0, ' + d.opacity + ')'),
            !e)
          )
            return t
          var i = e.color,
            n = e.level
          return i && (t.style.color = i), n && (t.dataset.level = n), t
        }
        function T(i, n, a, u) {
          var l = t('.' + r),
            c = (function(t, i, n) {
              var r = document.createDocumentFragment(),
                a = e('span')
              return (
                (a.className = [s].concat(t).join(' ')),
                (a.textContent = i),
                o(r, S(a, n)),
                o(r, e('br')),
                r
              )
            })(n, a, u)
          return i
            ? ((i.textContent = a), S(i, u))
            : (l
                ? (o(l, c), (l.scrollTop = l.scrollHeight), g(l))
                : o(
                    document.body,
                    (function(t) {
                      var i = e('div')
                      return (
                        (i.className = r),
                        (i.style.color = d.color),
                        (i.onclick = function() {
                          return g(i)
                        }),
                        o(i, t)
                      )
                    })(c)
                  ),
              t('.' + n.join(' .')))
        }
        function w(e, n, o) {
          function r() {
            for (var r = [], s = arguments.length; s--; ) r[s] = arguments[s]
            var a = i(e) ? [v()] : [v(), v(e)],
              u = y(o.level) && r.length
            return u ? T(n || t('.' + v(e)), a, m(r, i(e) ? '' : e), o) : null
          }
          return (r[l] = e), r
        }
        return (
          (_.remove = function(e) {
            if (e) {
              var o,
                r = n(e)
                  ? e
                  : 'function' === typeof e
                  ? t('.' + v(e[l]))
                  : i(e)
                  ? ((o = '.' + s), document.querySelectorAll(o))[e]
                  : t('.' + v(e))
              r && (r.nextElementSibling.remove(), r.remove())
            }
          }),
          (_.config = function(t) {
            var e
            Object.assign(d, t),
              (e = y('default') && d.console),
              (console.log = e
                ? function() {
                    for (var t = [], e = arguments.length; e--; )
                      t[e] = arguments[e]
                    _.apply(_, t), f.apply(console, t)
                  }
                : f)
          }),
          (_.$ = function(e, n) {
            if ((void 0 === n && (n = {}), e && 'object' === typeof e))
              return w('', null, e)
            var o = t('.' + v(e))
            if (i(e) && !o)
              throw new Error('[wintip]: name ' + e + ' is not defined')
            return w(('' + e).trim(), o, n)
          }),
          (_.info = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return _.$({ level: 'info' }).apply(_, t)
          }),
          (_.warn = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return _.$({ color: '#fee381', level: 'warn' }).apply(_, t)
          }),
          (_.error = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return _.$({ color: '#ff4545', level: 'error' }).apply(_, t)
          }),
          (_.version = '1.5.0'),
          _
        )
      })()
    },
    function(t, e, i) {
      'use strict'
      ;(function(t) {
        var i = Object.freeze({})
        function n(t) {
          return void 0 === t || null === t
        }
        function o(t) {
          return void 0 !== t && null !== t
        }
        function r(t) {
          return !0 === t
        }
        function s(t) {
          return (
            'string' === typeof t ||
            'number' === typeof t ||
            'symbol' === typeof t ||
            'boolean' === typeof t
          )
        }
        function a(t) {
          return null !== t && 'object' === typeof t
        }
        var u = Object.prototype.toString
        function l(t) {
          return '[object Object]' === u.call(t)
        }
        function c(t) {
          return '[object RegExp]' === u.call(t)
        }
        function h(t) {
          var e = parseFloat(String(t))
          return e >= 0 && Math.floor(e) === e && isFinite(t)
        }
        function p(t) {
          return (
            o(t) &&
            'function' === typeof t.then &&
            'function' === typeof t.catch
          )
        }
        function f(t) {
          return null == t
            ? ''
            : Array.isArray(t) || (l(t) && t.toString === u)
            ? JSON.stringify(t, null, 2)
            : String(t)
        }
        function d(t) {
          var e = parseFloat(t)
          return isNaN(e) ? t : e
        }
        function y(t, e) {
          for (
            var i = Object.create(null), n = t.split(','), o = 0;
            o < n.length;
            o++
          )
            i[n[o]] = !0
          return e
            ? function(t) {
                return i[t.toLowerCase()]
              }
            : function(t) {
                return i[t]
              }
        }
        y('slot,component', !0)
        var _ = y('key,ref,slot,slot-scope,is')
        function v(t, e) {
          if (t.length) {
            var i = t.indexOf(e)
            if (i > -1) return t.splice(i, 1)
          }
        }
        var m = Object.prototype.hasOwnProperty
        function g(t, e) {
          return m.call(t, e)
        }
        function b(t) {
          var e = Object.create(null)
          return function(i) {
            return e[i] || (e[i] = t(i))
          }
        }
        var S = /-(\w)/g,
          T = b(function(t) {
            return t.replace(S, function(t, e) {
              return e ? e.toUpperCase() : ''
            })
          }),
          w = b(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
          }),
          x = /\B([A-Z])/g,
          A = b(function(t) {
            return t.replace(x, '-$1').toLowerCase()
          })
        var O = Function.prototype.bind
          ? function(t, e) {
              return t.bind(e)
            }
          : function(t, e) {
              function i(i) {
                var n = arguments.length
                return n
                  ? n > 1
                    ? t.apply(e, arguments)
                    : t.call(e, i)
                  : t.call(e)
              }
              return (i._length = t.length), i
            }
        function k(t, e) {
          e = e || 0
          for (var i = t.length - e, n = new Array(i); i--; ) n[i] = t[i + e]
          return n
        }
        function P(t, e) {
          for (var i in e) t[i] = e[i]
          return t
        }
        function C(t) {
          for (var e = {}, i = 0; i < t.length; i++) t[i] && P(e, t[i])
          return e
        }
        function E(t, e, i) {}
        var F = function(t, e, i) {
            return !1
          },
          M = function(t) {
            return t
          }
        function q(t, e) {
          if (t === e) return !0
          var i = a(t),
            n = a(e)
          if (!i || !n) return !i && !n && String(t) === String(e)
          try {
            var o = Array.isArray(t),
              r = Array.isArray(e)
            if (o && r)
              return (
                t.length === e.length &&
                t.every(function(t, i) {
                  return q(t, e[i])
                })
              )
            if (t instanceof Date && e instanceof Date)
              return t.getTime() === e.getTime()
            if (o || r) return !1
            var s = Object.keys(t),
              u = Object.keys(e)
            return (
              s.length === u.length &&
              s.every(function(i) {
                return q(t[i], e[i])
              })
            )
          } catch (l) {
            return !1
          }
        }
        function R(t, e) {
          for (var i = 0; i < t.length; i++) if (q(t[i], e)) return i
          return -1
        }
        function j(t) {
          var e = !1
          return function() {
            e || ((e = !0), t.apply(this, arguments))
          }
        }
        var N = 'data-server-rendered',
          D = ['component', 'directive', 'filter'],
          I = [
            'beforeCreate',
            'created',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'beforeDestroy',
            'destroyed',
            'activated',
            'deactivated',
            'errorCaptured',
            'serverPrefetch'
          ],
          L = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: F,
            isReservedAttr: F,
            isUnknownElement: F,
            getTagNamespace: E,
            parsePlatformTagName: M,
            mustUseProp: F,
            async: !0,
            _lifecycleHooks: I
          },
          B = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
        function V(t) {
          var e = (t + '').charCodeAt(0)
          return 36 === e || 95 === e
        }
        function U(t, e, i, n) {
          Object.defineProperty(t, e, {
            value: i,
            enumerable: !!n,
            writable: !0,
            configurable: !0
          })
        }
        var $ = new RegExp('[^' + B.source + '.$_\\d]')
        var G,
          z = '__proto__' in {},
          W = 'undefined' !== typeof window,
          Q = 'undefined' !== typeof WXEnvironment && !!WXEnvironment.platform,
          H = Q && WXEnvironment.platform.toLowerCase(),
          X = W && window.navigator.userAgent.toLowerCase(),
          Z = X && /msie|trident/.test(X),
          Y = X && X.indexOf('msie 9.0') > 0,
          J = X && X.indexOf('edge/') > 0,
          K =
            (X && X.indexOf('android'),
            (X && /iphone|ipad|ipod|ios/.test(X)) || 'ios' === H),
          tt =
            (X && /chrome\/\d+/.test(X),
            X && /phantomjs/.test(X),
            X && X.match(/firefox\/(\d+)/)),
          et = {}.watch,
          it = !1
        if (W)
          try {
            var nt = {}
            Object.defineProperty(nt, 'passive', {
              get: function() {
                it = !0
              }
            }),
              window.addEventListener('test-passive', null, nt)
          } catch (Lo) {}
        var ot = function() {
            return (
              void 0 === G &&
                (G =
                  !W &&
                  !Q &&
                  'undefined' !== typeof t &&
                  (t.process && 'server' === t.process.env.VUE_ENV)),
              G
            )
          },
          rt = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
        function st(t) {
          return 'function' === typeof t && /native code/.test(t.toString())
        }
        var at,
          ut =
            'undefined' !== typeof Symbol &&
            st(Symbol) &&
            'undefined' !== typeof Reflect &&
            st(Reflect.ownKeys)
        at =
          'undefined' !== typeof Set && st(Set)
            ? Set
            : (function() {
                function t() {
                  this.set = Object.create(null)
                }
                return (
                  (t.prototype.has = function(t) {
                    return !0 === this.set[t]
                  }),
                  (t.prototype.add = function(t) {
                    this.set[t] = !0
                  }),
                  (t.prototype.clear = function() {
                    this.set = Object.create(null)
                  }),
                  t
                )
              })()
        var lt = E,
          ct = 0,
          ht = function() {
            ;(this.id = ct++), (this.subs = [])
          }
        ;(ht.prototype.addSub = function(t) {
          this.subs.push(t)
        }),
          (ht.prototype.removeSub = function(t) {
            v(this.subs, t)
          }),
          (ht.prototype.depend = function() {
            ht.target && ht.target.addDep(this)
          }),
          (ht.prototype.notify = function() {
            var t = this.subs.slice()
            for (var e = 0, i = t.length; e < i; e++) t[e].update()
          }),
          (ht.target = null)
        var pt = []
        function ft(t) {
          pt.push(t), (ht.target = t)
        }
        function dt() {
          pt.pop(), (ht.target = pt[pt.length - 1])
        }
        var yt = function(t, e, i, n, o, r, s, a) {
            ;(this.tag = t),
              (this.data = e),
              (this.children = i),
              (this.text = n),
              (this.elm = o),
              (this.ns = void 0),
              (this.context = r),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = e && e.key),
              (this.componentOptions = s),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = a),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1)
          },
          _t = { child: { configurable: !0 } }
        ;(_t.child.get = function() {
          return this.componentInstance
        }),
          Object.defineProperties(yt.prototype, _t)
        var vt = function(t) {
          void 0 === t && (t = '')
          var e = new yt()
          return (e.text = t), (e.isComment = !0), e
        }
        function mt(t) {
          return new yt(void 0, void 0, void 0, String(t))
        }
        function gt(t) {
          var e = new yt(
            t.tag,
            t.data,
            t.children && t.children.slice(),
            t.text,
            t.elm,
            t.context,
            t.componentOptions,
            t.asyncFactory
          )
          return (
            (e.ns = t.ns),
            (e.isStatic = t.isStatic),
            (e.key = t.key),
            (e.isComment = t.isComment),
            (e.fnContext = t.fnContext),
            (e.fnOptions = t.fnOptions),
            (e.fnScopeId = t.fnScopeId),
            (e.asyncMeta = t.asyncMeta),
            (e.isCloned = !0),
            e
          )
        }
        var bt = Array.prototype,
          St = Object.create(bt)
        ;[
          'push',
          'pop',
          'shift',
          'unshift',
          'splice',
          'sort',
          'reverse'
        ].forEach(function(t) {
          var e = bt[t]
          U(St, t, function() {
            for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n]
            var o,
              r = e.apply(this, i),
              s = this.__ob__
            switch (t) {
              case 'push':
              case 'unshift':
                o = i
                break
              case 'splice':
                o = i.slice(2)
            }
            return o && s.observeArray(o), s.dep.notify(), r
          })
        })
        var Tt = Object.getOwnPropertyNames(St),
          wt = !0
        function xt(t) {
          wt = t
        }
        var At = function(t) {
          ;(this.value = t),
            (this.dep = new ht()),
            (this.vmCount = 0),
            U(t, '__ob__', this),
            Array.isArray(t)
              ? (z
                  ? (function(t, e) {
                      t.__proto__ = e
                    })(t, St)
                  : (function(t, e, i) {
                      for (var n = 0, o = i.length; n < o; n++) {
                        var r = i[n]
                        U(t, r, e[r])
                      }
                    })(t, St, Tt),
                this.observeArray(t))
              : this.walk(t)
        }
        function Ot(t, e) {
          var i
          if (a(t) && !(t instanceof yt))
            return (
              g(t, '__ob__') && t.__ob__ instanceof At
                ? (i = t.__ob__)
                : wt &&
                  !ot() &&
                  (Array.isArray(t) || l(t)) &&
                  Object.isExtensible(t) &&
                  !t._isVue &&
                  (i = new At(t)),
              e && i && i.vmCount++,
              i
            )
        }
        function kt(t, e, i, n, o) {
          var r = new ht(),
            s = Object.getOwnPropertyDescriptor(t, e)
          if (!s || !1 !== s.configurable) {
            var a = s && s.get,
              u = s && s.set
            ;(a && !u) || 2 !== arguments.length || (i = t[e])
            var l = !o && Ot(i)
            Object.defineProperty(t, e, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                var e = a ? a.call(t) : i
                return (
                  ht.target &&
                    (r.depend(),
                    l &&
                      (l.dep.depend(),
                      Array.isArray(e) &&
                        (function t(e) {
                          for (var i = void 0, n = 0, o = e.length; n < o; n++)
                            (i = e[n]) && i.__ob__ && i.__ob__.dep.depend(),
                              Array.isArray(i) && t(i)
                        })(e))),
                  e
                )
              },
              set: function(e) {
                var n = a ? a.call(t) : i
                e === n ||
                  (e !== e && n !== n) ||
                  (a && !u) ||
                  (u ? u.call(t, e) : (i = e), (l = !o && Ot(e)), r.notify())
              }
            })
          }
        }
        function Pt(t, e, i) {
          if (Array.isArray(t) && h(e))
            return (t.length = Math.max(t.length, e)), t.splice(e, 1, i), i
          if (e in t && !(e in Object.prototype)) return (t[e] = i), i
          var n = t.__ob__
          return t._isVue || (n && n.vmCount)
            ? i
            : n
            ? (kt(n.value, e, i), n.dep.notify(), i)
            : ((t[e] = i), i)
        }
        function Ct(t, e) {
          if (Array.isArray(t) && h(e)) t.splice(e, 1)
          else {
            var i = t.__ob__
            t._isVue ||
              (i && i.vmCount) ||
              (g(t, e) && (delete t[e], i && i.dep.notify()))
          }
        }
        ;(At.prototype.walk = function(t) {
          for (var e = Object.keys(t), i = 0; i < e.length; i++) kt(t, e[i])
        }),
          (At.prototype.observeArray = function(t) {
            for (var e = 0, i = t.length; e < i; e++) Ot(t[e])
          })
        var Et = L.optionMergeStrategies
        function Ft(t, e) {
          if (!e) return t
          for (
            var i, n, o, r = ut ? Reflect.ownKeys(e) : Object.keys(e), s = 0;
            s < r.length;
            s++
          )
            '__ob__' !== (i = r[s]) &&
              ((n = t[i]),
              (o = e[i]),
              g(t, i) ? n !== o && l(n) && l(o) && Ft(n, o) : Pt(t, i, o))
          return t
        }
        function Mt(t, e, i) {
          return i
            ? function() {
                var n = 'function' === typeof e ? e.call(i, i) : e,
                  o = 'function' === typeof t ? t.call(i, i) : t
                return n ? Ft(n, o) : o
              }
            : e
            ? t
              ? function() {
                  return Ft(
                    'function' === typeof e ? e.call(this, this) : e,
                    'function' === typeof t ? t.call(this, this) : t
                  )
                }
              : e
            : t
        }
        function qt(t, e) {
          var i = e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t
          return i
            ? (function(t) {
                for (var e = [], i = 0; i < t.length; i++)
                  -1 === e.indexOf(t[i]) && e.push(t[i])
                return e
              })(i)
            : i
        }
        function Rt(t, e, i, n) {
          var o = Object.create(t || null)
          return e ? P(o, e) : o
        }
        ;(Et.data = function(t, e, i) {
          return i ? Mt(t, e, i) : e && 'function' !== typeof e ? t : Mt(t, e)
        }),
          I.forEach(function(t) {
            Et[t] = qt
          }),
          D.forEach(function(t) {
            Et[t + 's'] = Rt
          }),
          (Et.watch = function(t, e, i, n) {
            if ((t === et && (t = void 0), e === et && (e = void 0), !e))
              return Object.create(t || null)
            if (!t) return e
            var o = {}
            for (var r in (P(o, t), e)) {
              var s = o[r],
                a = e[r]
              s && !Array.isArray(s) && (s = [s]),
                (o[r] = s ? s.concat(a) : Array.isArray(a) ? a : [a])
            }
            return o
          }),
          (Et.props = Et.methods = Et.inject = Et.computed = function(
            t,
            e,
            i,
            n
          ) {
            if (!t) return e
            var o = Object.create(null)
            return P(o, t), e && P(o, e), o
          }),
          (Et.provide = Mt)
        var jt = function(t, e) {
          return void 0 === e ? t : e
        }
        function Nt(t, e, i) {
          if (
            ('function' === typeof e && (e = e.options),
            (function(t, e) {
              var i = t.props
              if (i) {
                var n,
                  o,
                  r = {}
                if (Array.isArray(i))
                  for (n = i.length; n--; )
                    'string' === typeof (o = i[n]) && (r[T(o)] = { type: null })
                else if (l(i))
                  for (var s in i)
                    (o = i[s]), (r[T(s)] = l(o) ? o : { type: o })
                t.props = r
              }
            })(e),
            (function(t, e) {
              var i = t.inject
              if (i) {
                var n = (t.inject = {})
                if (Array.isArray(i))
                  for (var o = 0; o < i.length; o++) n[i[o]] = { from: i[o] }
                else if (l(i))
                  for (var r in i) {
                    var s = i[r]
                    n[r] = l(s) ? P({ from: r }, s) : { from: s }
                  }
              }
            })(e),
            (function(t) {
              var e = t.directives
              if (e)
                for (var i in e) {
                  var n = e[i]
                  'function' === typeof n && (e[i] = { bind: n, update: n })
                }
            })(e),
            !e._base && (e.extends && (t = Nt(t, e.extends, i)), e.mixins))
          )
            for (var n = 0, o = e.mixins.length; n < o; n++)
              t = Nt(t, e.mixins[n], i)
          var r,
            s = {}
          for (r in t) a(r)
          for (r in e) g(t, r) || a(r)
          function a(n) {
            var o = Et[n] || jt
            s[n] = o(t[n], e[n], i, n)
          }
          return s
        }
        function Dt(t, e, i, n) {
          if ('string' === typeof i) {
            var o = t[e]
            if (g(o, i)) return o[i]
            var r = T(i)
            if (g(o, r)) return o[r]
            var s = w(r)
            return g(o, s) ? o[s] : o[i] || o[r] || o[s]
          }
        }
        function It(t, e, i, n) {
          var o = e[t],
            r = !g(i, t),
            s = i[t],
            a = Vt(Boolean, o.type)
          if (a > -1)
            if (r && !g(o, 'default')) s = !1
            else if ('' === s || s === A(t)) {
              var u = Vt(String, o.type)
              ;(u < 0 || a < u) && (s = !0)
            }
          if (void 0 === s) {
            s = (function(t, e, i) {
              if (!g(e, 'default')) return
              var n = e.default
              0
              if (
                t &&
                t.$options.propsData &&
                void 0 === t.$options.propsData[i] &&
                void 0 !== t._props[i]
              )
                return t._props[i]
              return 'function' === typeof n && 'Function' !== Lt(e.type)
                ? n.call(t)
                : n
            })(n, o, t)
            var l = wt
            xt(!0), Ot(s), xt(l)
          }
          return s
        }
        function Lt(t) {
          var e = t && t.toString().match(/^\s*function (\w+)/)
          return e ? e[1] : ''
        }
        function Bt(t, e) {
          return Lt(t) === Lt(e)
        }
        function Vt(t, e) {
          if (!Array.isArray(e)) return Bt(e, t) ? 0 : -1
          for (var i = 0, n = e.length; i < n; i++) if (Bt(e[i], t)) return i
          return -1
        }
        function Ut(t, e, i) {
          ft()
          try {
            if (e)
              for (var n = e; (n = n.$parent); ) {
                var o = n.$options.errorCaptured
                if (o)
                  for (var r = 0; r < o.length; r++)
                    try {
                      if (!1 === o[r].call(n, t, e, i)) return
                    } catch (Lo) {
                      Gt(Lo, n, 'errorCaptured hook')
                    }
              }
            Gt(t, e, i)
          } finally {
            dt()
          }
        }
        function $t(t, e, i, n, o) {
          var r
          try {
            ;(r = i ? t.apply(e, i) : t.call(e)) &&
              !r._isVue &&
              p(r) &&
              !r._handled &&
              (r.catch(function(t) {
                return Ut(t, n, o + ' (Promise/async)')
              }),
              (r._handled = !0))
          } catch (Lo) {
            Ut(Lo, n, o)
          }
          return r
        }
        function Gt(t, e, i) {
          if (L.errorHandler)
            try {
              return L.errorHandler.call(null, t, e, i)
            } catch (Lo) {
              Lo !== t && zt(Lo, null, 'config.errorHandler')
            }
          zt(t, e, i)
        }
        function zt(t, e, i) {
          if ((!W && !Q) || 'undefined' === typeof console) throw t
          console.error(t)
        }
        var Wt,
          Qt = !1,
          Ht = [],
          Xt = !1
        function Zt() {
          Xt = !1
          var t = Ht.slice(0)
          Ht.length = 0
          for (var e = 0; e < t.length; e++) t[e]()
        }
        if ('undefined' !== typeof Promise && st(Promise)) {
          var Yt = Promise.resolve()
          ;(Wt = function() {
            Yt.then(Zt), K && setTimeout(E)
          }),
            (Qt = !0)
        } else if (
          Z ||
          'undefined' === typeof MutationObserver ||
          (!st(MutationObserver) &&
            '[object MutationObserverConstructor]' !==
              MutationObserver.toString())
        )
          Wt =
            'undefined' !== typeof setImmediate && st(setImmediate)
              ? function() {
                  setImmediate(Zt)
                }
              : function() {
                  setTimeout(Zt, 0)
                }
        else {
          var Jt = 1,
            Kt = new MutationObserver(Zt),
            te = document.createTextNode(String(Jt))
          Kt.observe(te, { characterData: !0 }),
            (Wt = function() {
              ;(Jt = (Jt + 1) % 2), (te.data = String(Jt))
            }),
            (Qt = !0)
        }
        function ee(t, e) {
          var i
          if (
            (Ht.push(function() {
              if (t)
                try {
                  t.call(e)
                } catch (Lo) {
                  Ut(Lo, e, 'nextTick')
                }
              else i && i(e)
            }),
            Xt || ((Xt = !0), Wt()),
            !t && 'undefined' !== typeof Promise)
          )
            return new Promise(function(t) {
              i = t
            })
        }
        var ie = new at()
        function ne(t) {
          !(function t(e, i) {
            var n, o
            var r = Array.isArray(e)
            if ((!r && !a(e)) || Object.isFrozen(e) || e instanceof yt) return
            if (e.__ob__) {
              var s = e.__ob__.dep.id
              if (i.has(s)) return
              i.add(s)
            }
            if (r) for (n = e.length; n--; ) t(e[n], i)
            else for (o = Object.keys(e), n = o.length; n--; ) t(e[o[n]], i)
          })(t, ie),
            ie.clear()
        }
        var oe = b(function(t) {
          var e = '&' === t.charAt(0),
            i = '~' === (t = e ? t.slice(1) : t).charAt(0),
            n = '!' === (t = i ? t.slice(1) : t).charAt(0)
          return {
            name: (t = n ? t.slice(1) : t),
            once: i,
            capture: n,
            passive: e
          }
        })
        function re(t, e) {
          function i() {
            var t = arguments,
              n = i.fns
            if (!Array.isArray(n))
              return $t(n, null, arguments, e, 'v-on handler')
            for (var o = n.slice(), r = 0; r < o.length; r++)
              $t(o[r], null, t, e, 'v-on handler')
          }
          return (i.fns = t), i
        }
        function se(t, e, i, o, s, a) {
          var u, l, c, h
          for (u in t)
            (l = t[u]),
              (c = e[u]),
              (h = oe(u)),
              n(l) ||
                (n(c)
                  ? (n(l.fns) && (l = t[u] = re(l, a)),
                    r(h.once) && (l = t[u] = s(h.name, l, h.capture)),
                    i(h.name, l, h.capture, h.passive, h.params))
                  : l !== c && ((c.fns = l), (t[u] = c)))
          for (u in e) n(t[u]) && o((h = oe(u)).name, e[u], h.capture)
        }
        function ae(t, e, i) {
          var s
          t instanceof yt && (t = t.data.hook || (t.data.hook = {}))
          var a = t[e]
          function u() {
            i.apply(this, arguments), v(s.fns, u)
          }
          n(a)
            ? (s = re([u]))
            : o(a.fns) && r(a.merged)
            ? (s = a).fns.push(u)
            : (s = re([a, u])),
            (s.merged = !0),
            (t[e] = s)
        }
        function ue(t, e, i, n, r) {
          if (o(e)) {
            if (g(e, i)) return (t[i] = e[i]), r || delete e[i], !0
            if (g(e, n)) return (t[i] = e[n]), r || delete e[n], !0
          }
          return !1
        }
        function le(t) {
          return s(t)
            ? [mt(t)]
            : Array.isArray(t)
            ? (function t(e, i) {
                var a = []
                var u, l, c, h
                for (u = 0; u < e.length; u++)
                  n((l = e[u])) ||
                    'boolean' === typeof l ||
                    ((c = a.length - 1),
                    (h = a[c]),
                    Array.isArray(l)
                      ? l.length > 0 &&
                        (ce((l = t(l, (i || '') + '_' + u))[0]) &&
                          ce(h) &&
                          ((a[c] = mt(h.text + l[0].text)), l.shift()),
                        a.push.apply(a, l))
                      : s(l)
                      ? ce(h)
                        ? (a[c] = mt(h.text + l))
                        : '' !== l && a.push(mt(l))
                      : ce(l) && ce(h)
                      ? (a[c] = mt(h.text + l.text))
                      : (r(e._isVList) &&
                          o(l.tag) &&
                          n(l.key) &&
                          o(i) &&
                          (l.key = '__vlist' + i + '_' + u + '__'),
                        a.push(l)))
                return a
              })(t)
            : void 0
        }
        function ce(t) {
          return o(t) && o(t.text) && !1 === t.isComment
        }
        function he(t, e) {
          if (t) {
            for (
              var i = Object.create(null),
                n = ut ? Reflect.ownKeys(t) : Object.keys(t),
                o = 0;
              o < n.length;
              o++
            ) {
              var r = n[o]
              if ('__ob__' !== r) {
                for (var s = t[r].from, a = e; a; ) {
                  if (a._provided && g(a._provided, s)) {
                    i[r] = a._provided[s]
                    break
                  }
                  a = a.$parent
                }
                if (!a)
                  if ('default' in t[r]) {
                    var u = t[r].default
                    i[r] = 'function' === typeof u ? u.call(e) : u
                  } else 0
              }
            }
            return i
          }
        }
        function pe(t, e) {
          if (!t || !t.length) return {}
          for (var i = {}, n = 0, o = t.length; n < o; n++) {
            var r = t[n],
              s = r.data
            if (
              (s && s.attrs && s.attrs.slot && delete s.attrs.slot,
              (r.context !== e && r.fnContext !== e) || !s || null == s.slot)
            )
              (i.default || (i.default = [])).push(r)
            else {
              var a = s.slot,
                u = i[a] || (i[a] = [])
              'template' === r.tag
                ? u.push.apply(u, r.children || [])
                : u.push(r)
            }
          }
          for (var l in i) i[l].every(fe) && delete i[l]
          return i
        }
        function fe(t) {
          return (t.isComment && !t.asyncFactory) || ' ' === t.text
        }
        function de(t, e, n) {
          var o,
            r = Object.keys(e).length > 0,
            s = t ? !!t.$stable : !r,
            a = t && t.$key
          if (t) {
            if (t._normalized) return t._normalized
            if (s && n && n !== i && a === n.$key && !r && !n.$hasNormal)
              return n
            for (var u in ((o = {}), t))
              t[u] && '$' !== u[0] && (o[u] = ye(e, u, t[u]))
          } else o = {}
          for (var l in e) l in o || (o[l] = _e(e, l))
          return (
            t && Object.isExtensible(t) && (t._normalized = o),
            U(o, '$stable', s),
            U(o, '$key', a),
            U(o, '$hasNormal', r),
            o
          )
        }
        function ye(t, e, i) {
          var n = function() {
            var t = arguments.length ? i.apply(null, arguments) : i({})
            return (t =
              t && 'object' === typeof t && !Array.isArray(t) ? [t] : le(t)) &&
              (0 === t.length || (1 === t.length && t[0].isComment))
              ? void 0
              : t
          }
          return (
            i.proxy &&
              Object.defineProperty(t, e, {
                get: n,
                enumerable: !0,
                configurable: !0
              }),
            n
          )
        }
        function _e(t, e) {
          return function() {
            return t[e]
          }
        }
        function ve(t, e) {
          var i, n, r, s, u
          if (Array.isArray(t) || 'string' === typeof t)
            for (i = new Array(t.length), n = 0, r = t.length; n < r; n++)
              i[n] = e(t[n], n)
          else if ('number' === typeof t)
            for (i = new Array(t), n = 0; n < t; n++) i[n] = e(n + 1, n)
          else if (a(t))
            if (ut && t[Symbol.iterator]) {
              i = []
              for (var l = t[Symbol.iterator](), c = l.next(); !c.done; )
                i.push(e(c.value, i.length)), (c = l.next())
            } else
              for (
                s = Object.keys(t),
                  i = new Array(s.length),
                  n = 0,
                  r = s.length;
                n < r;
                n++
              )
                (u = s[n]), (i[n] = e(t[u], u, n))
          return o(i) || (i = []), (i._isVList = !0), i
        }
        function me(t, e, i, n) {
          var o,
            r = this.$scopedSlots[t]
          r
            ? ((i = i || {}), n && (i = P(P({}, n), i)), (o = r(i) || e))
            : (o = this.$slots[t] || e)
          var s = i && i.slot
          return s ? this.$createElement('template', { slot: s }, o) : o
        }
        function ge(t) {
          return Dt(this.$options, 'filters', t) || M
        }
        function be(t, e) {
          return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }
        function Se(t, e, i, n, o) {
          var r = L.keyCodes[e] || i
          return o && n && !L.keyCodes[e]
            ? be(o, n)
            : r
            ? be(r, t)
            : n
            ? A(n) !== e
            : void 0
        }
        function Te(t, e, i, n, o) {
          if (i)
            if (a(i)) {
              var r
              Array.isArray(i) && (i = C(i))
              var s = function(s) {
                if ('class' === s || 'style' === s || _(s)) r = t
                else {
                  var a = t.attrs && t.attrs.type
                  r =
                    n || L.mustUseProp(e, a, s)
                      ? t.domProps || (t.domProps = {})
                      : t.attrs || (t.attrs = {})
                }
                var u = T(s),
                  l = A(s)
                u in r ||
                  l in r ||
                  ((r[s] = i[s]),
                  o &&
                    ((t.on || (t.on = {}))['update:' + s] = function(t) {
                      i[s] = t
                    }))
              }
              for (var u in i) s(u)
            } else;
          return t
        }
        function we(t, e) {
          var i = this._staticTrees || (this._staticTrees = []),
            n = i[t]
          return n && !e
            ? n
            : (Ae(
                (n = i[t] = this.$options.staticRenderFns[t].call(
                  this._renderProxy,
                  null,
                  this
                )),
                '__static__' + t,
                !1
              ),
              n)
        }
        function xe(t, e, i) {
          return Ae(t, '__once__' + e + (i ? '_' + i : ''), !0), t
        }
        function Ae(t, e, i) {
          if (Array.isArray(t))
            for (var n = 0; n < t.length; n++)
              t[n] && 'string' !== typeof t[n] && Oe(t[n], e + '_' + n, i)
          else Oe(t, e, i)
        }
        function Oe(t, e, i) {
          ;(t.isStatic = !0), (t.key = e), (t.isOnce = i)
        }
        function ke(t, e) {
          if (e)
            if (l(e)) {
              var i = (t.on = t.on ? P({}, t.on) : {})
              for (var n in e) {
                var o = i[n],
                  r = e[n]
                i[n] = o ? [].concat(o, r) : r
              }
            } else;
          return t
        }
        function Pe(t, e, i, n) {
          e = e || { $stable: !i }
          for (var o = 0; o < t.length; o++) {
            var r = t[o]
            Array.isArray(r)
              ? Pe(r, e, i)
              : r && (r.proxy && (r.fn.proxy = !0), (e[r.key] = r.fn))
          }
          return n && (e.$key = n), e
        }
        function Ce(t, e) {
          for (var i = 0; i < e.length; i += 2) {
            var n = e[i]
            'string' === typeof n && n && (t[e[i]] = e[i + 1])
          }
          return t
        }
        function Ee(t, e) {
          return 'string' === typeof t ? e + t : t
        }
        function Fe(t) {
          ;(t._o = xe),
            (t._n = d),
            (t._s = f),
            (t._l = ve),
            (t._t = me),
            (t._q = q),
            (t._i = R),
            (t._m = we),
            (t._f = ge),
            (t._k = Se),
            (t._b = Te),
            (t._v = mt),
            (t._e = vt),
            (t._u = Pe),
            (t._g = ke),
            (t._d = Ce),
            (t._p = Ee)
        }
        function Me(t, e, n, o, s) {
          var a,
            u = this,
            l = s.options
          g(o, '_uid')
            ? ((a = Object.create(o))._original = o)
            : ((a = o), (o = o._original))
          var c = r(l._compiled),
            h = !c
          ;(this.data = t),
            (this.props = e),
            (this.children = n),
            (this.parent = o),
            (this.listeners = t.on || i),
            (this.injections = he(l.inject, o)),
            (this.slots = function() {
              return (
                u.$slots || de(t.scopedSlots, (u.$slots = pe(n, o))), u.$slots
              )
            }),
            Object.defineProperty(this, 'scopedSlots', {
              enumerable: !0,
              get: function() {
                return de(t.scopedSlots, this.slots())
              }
            }),
            c &&
              ((this.$options = l),
              (this.$slots = this.slots()),
              (this.$scopedSlots = de(t.scopedSlots, this.$slots))),
            l._scopeId
              ? (this._c = function(t, e, i, n) {
                  var r = Ve(a, t, e, i, n, h)
                  return (
                    r &&
                      !Array.isArray(r) &&
                      ((r.fnScopeId = l._scopeId), (r.fnContext = o)),
                    r
                  )
                })
              : (this._c = function(t, e, i, n) {
                  return Ve(a, t, e, i, n, h)
                })
        }
        function qe(t, e, i, n, o) {
          var r = gt(t)
          return (
            (r.fnContext = i),
            (r.fnOptions = n),
            e.slot && ((r.data || (r.data = {})).slot = e.slot),
            r
          )
        }
        function Re(t, e) {
          for (var i in e) t[T(i)] = e[i]
        }
        Fe(Me.prototype)
        var je = {
            init: function(t, e) {
              if (
                t.componentInstance &&
                !t.componentInstance._isDestroyed &&
                t.data.keepAlive
              ) {
                var i = t
                je.prepatch(i, i)
              } else {
                ;(t.componentInstance = (function(t, e) {
                  var i = { _isComponent: !0, _parentVnode: t, parent: e },
                    n = t.data.inlineTemplate
                  o(n) &&
                    ((i.render = n.render),
                    (i.staticRenderFns = n.staticRenderFns))
                  return new t.componentOptions.Ctor(i)
                })(t, Ye)).$mount(e ? t.elm : void 0, e)
              }
            },
            prepatch: function(t, e) {
              var n = e.componentOptions
              !(function(t, e, n, o, r) {
                0
                var s = o.data.scopedSlots,
                  a = t.$scopedSlots,
                  u = !!(
                    (s && !s.$stable) ||
                    (a !== i && !a.$stable) ||
                    (s && t.$scopedSlots.$key !== s.$key)
                  ),
                  l = !!(r || t.$options._renderChildren || u)
                ;(t.$options._parentVnode = o),
                  (t.$vnode = o),
                  t._vnode && (t._vnode.parent = o)
                if (
                  ((t.$options._renderChildren = r),
                  (t.$attrs = o.data.attrs || i),
                  (t.$listeners = n || i),
                  e && t.$options.props)
                ) {
                  xt(!1)
                  for (
                    var c = t._props, h = t.$options._propKeys || [], p = 0;
                    p < h.length;
                    p++
                  ) {
                    var f = h[p],
                      d = t.$options.props
                    c[f] = It(f, d, e, t)
                  }
                  xt(!0), (t.$options.propsData = e)
                }
                n = n || i
                var y = t.$options._parentListeners
                ;(t.$options._parentListeners = n),
                  Ze(t, n, y),
                  l && ((t.$slots = pe(r, o.context)), t.$forceUpdate())
                0
              })(
                (e.componentInstance = t.componentInstance),
                n.propsData,
                n.listeners,
                e,
                n.children
              )
            },
            insert: function(t) {
              var e,
                i = t.context,
                n = t.componentInstance
              n._isMounted || ((n._isMounted = !0), ei(n, 'mounted')),
                t.data.keepAlive &&
                  (i._isMounted
                    ? (((e = n)._inactive = !1), ni.push(e))
                    : ti(n, !0))
            },
            destroy: function(t) {
              var e = t.componentInstance
              e._isDestroyed ||
                (t.data.keepAlive
                  ? (function t(e, i) {
                      if (i && ((e._directInactive = !0), Ke(e))) return
                      if (!e._inactive) {
                        e._inactive = !0
                        for (var n = 0; n < e.$children.length; n++)
                          t(e.$children[n])
                        ei(e, 'deactivated')
                      }
                    })(e, !0)
                  : e.$destroy())
            }
          },
          Ne = Object.keys(je)
        function De(t, e, s, u, l) {
          if (!n(t)) {
            var c = s.$options._base
            if ((a(t) && (t = c.extend(t)), 'function' === typeof t)) {
              var h
              if (
                n(t.cid) &&
                void 0 ===
                  (t = (function(t, e) {
                    if (r(t.error) && o(t.errorComp)) return t.errorComp
                    if (o(t.resolved)) return t.resolved
                    var i = $e
                    i &&
                      o(t.owners) &&
                      -1 === t.owners.indexOf(i) &&
                      t.owners.push(i)
                    if (r(t.loading) && o(t.loadingComp)) return t.loadingComp
                    if (i && !o(t.owners)) {
                      var s = (t.owners = [i]),
                        u = !0,
                        l = null,
                        c = null
                      i.$on('hook:destroyed', function() {
                        return v(s, i)
                      })
                      var h = function(t) {
                          for (var e = 0, i = s.length; e < i; e++)
                            s[e].$forceUpdate()
                          t &&
                            ((s.length = 0),
                            null !== l && (clearTimeout(l), (l = null)),
                            null !== c && (clearTimeout(c), (c = null)))
                        },
                        f = j(function(i) {
                          ;(t.resolved = Ge(i, e)), u ? (s.length = 0) : h(!0)
                        }),
                        d = j(function(e) {
                          o(t.errorComp) && ((t.error = !0), h(!0))
                        }),
                        y = t(f, d)
                      return (
                        a(y) &&
                          (p(y)
                            ? n(t.resolved) && y.then(f, d)
                            : p(y.component) &&
                              (y.component.then(f, d),
                              o(y.error) && (t.errorComp = Ge(y.error, e)),
                              o(y.loading) &&
                                ((t.loadingComp = Ge(y.loading, e)),
                                0 === y.delay
                                  ? (t.loading = !0)
                                  : (l = setTimeout(function() {
                                      ;(l = null),
                                        n(t.resolved) &&
                                          n(t.error) &&
                                          ((t.loading = !0), h(!1))
                                    }, y.delay || 200))),
                              o(y.timeout) &&
                                (c = setTimeout(function() {
                                  ;(c = null), n(t.resolved) && d(null)
                                }, y.timeout)))),
                        (u = !1),
                        t.loading ? t.loadingComp : t.resolved
                      )
                    }
                  })((h = t), c))
              )
                return (function(t, e, i, n, o) {
                  var r = vt()
                  return (
                    (r.asyncFactory = t),
                    (r.asyncMeta = {
                      data: e,
                      context: i,
                      children: n,
                      tag: o
                    }),
                    r
                  )
                })(h, e, s, u, l)
              ;(e = e || {}),
                wi(t),
                o(e.model) &&
                  (function(t, e) {
                    var i = (t.model && t.model.prop) || 'value',
                      n = (t.model && t.model.event) || 'input'
                    ;(e.attrs || (e.attrs = {}))[i] = e.model.value
                    var r = e.on || (e.on = {}),
                      s = r[n],
                      a = e.model.callback
                    o(s)
                      ? (Array.isArray(s) ? -1 === s.indexOf(a) : s !== a) &&
                        (r[n] = [a].concat(s))
                      : (r[n] = a)
                  })(t.options, e)
              var f = (function(t, e, i) {
                var r = e.options.props
                if (!n(r)) {
                  var s = {},
                    a = t.attrs,
                    u = t.props
                  if (o(a) || o(u))
                    for (var l in r) {
                      var c = A(l)
                      ue(s, u, l, c, !0) || ue(s, a, l, c, !1)
                    }
                  return s
                }
              })(e, t)
              if (r(t.options.functional))
                return (function(t, e, n, r, s) {
                  var a = t.options,
                    u = {},
                    l = a.props
                  if (o(l)) for (var c in l) u[c] = It(c, l, e || i)
                  else
                    o(n.attrs) && Re(u, n.attrs), o(n.props) && Re(u, n.props)
                  var h = new Me(n, u, s, r, t),
                    p = a.render.call(null, h._c, h)
                  if (p instanceof yt) return qe(p, n, h.parent, a)
                  if (Array.isArray(p)) {
                    for (
                      var f = le(p) || [], d = new Array(f.length), y = 0;
                      y < f.length;
                      y++
                    )
                      d[y] = qe(f[y], n, h.parent, a)
                    return d
                  }
                })(t, f, e, s, u)
              var d = e.on
              if (((e.on = e.nativeOn), r(t.options.abstract))) {
                var y = e.slot
                ;(e = {}), y && (e.slot = y)
              }
              !(function(t) {
                for (
                  var e = t.hook || (t.hook = {}), i = 0;
                  i < Ne.length;
                  i++
                ) {
                  var n = Ne[i],
                    o = e[n],
                    r = je[n]
                  o === r || (o && o._merged) || (e[n] = o ? Ie(r, o) : r)
                }
              })(e)
              var _ = t.options.name || l
              return new yt(
                'vue-component-' + t.cid + (_ ? '-' + _ : ''),
                e,
                void 0,
                void 0,
                void 0,
                s,
                { Ctor: t, propsData: f, listeners: d, tag: l, children: u },
                h
              )
            }
          }
        }
        function Ie(t, e) {
          var i = function(i, n) {
            t(i, n), e(i, n)
          }
          return (i._merged = !0), i
        }
        var Le = 1,
          Be = 2
        function Ve(t, e, i, u, l, c) {
          return (
            (Array.isArray(i) || s(i)) && ((l = u), (u = i), (i = void 0)),
            r(c) && (l = Be),
            (function(t, e, i, s, u) {
              if (o(i) && o(i.__ob__)) return vt()
              o(i) && o(i.is) && (e = i.is)
              if (!e) return vt()
              0
              Array.isArray(s) &&
                'function' === typeof s[0] &&
                (((i = i || {}).scopedSlots = { default: s[0] }),
                (s.length = 0))
              u === Be
                ? (s = le(s))
                : u === Le &&
                  (s = (function(t) {
                    for (var e = 0; e < t.length; e++)
                      if (Array.isArray(t[e]))
                        return Array.prototype.concat.apply([], t)
                    return t
                  })(s))
              var l, c
              if ('string' === typeof e) {
                var h
                ;(c = (t.$vnode && t.$vnode.ns) || L.getTagNamespace(e)),
                  (l = L.isReservedTag(e)
                    ? new yt(L.parsePlatformTagName(e), i, s, void 0, void 0, t)
                    : (i && i.pre) || !o((h = Dt(t.$options, 'components', e)))
                    ? new yt(e, i, s, void 0, void 0, t)
                    : De(h, i, t, s, e))
              } else l = De(e, i, t, s)
              return Array.isArray(l)
                ? l
                : o(l)
                ? (o(c) &&
                    (function t(e, i, s) {
                      e.ns = i
                      'foreignObject' === e.tag && ((i = void 0), (s = !0))
                      if (o(e.children))
                        for (var a = 0, u = e.children.length; a < u; a++) {
                          var l = e.children[a]
                          o(l.tag) &&
                            (n(l.ns) || (r(s) && 'svg' !== l.tag)) &&
                            t(l, i, s)
                        }
                    })(l, c),
                  o(i) &&
                    (function(t) {
                      a(t.style) && ne(t.style)
                      a(t.class) && ne(t.class)
                    })(i),
                  l)
                : vt()
            })(t, e, i, u, l)
          )
        }
        var Ue,
          $e = null
        function Ge(t, e) {
          return (
            (t.__esModule || (ut && 'Module' === t[Symbol.toStringTag])) &&
              (t = t.default),
            a(t) ? e.extend(t) : t
          )
        }
        function ze(t) {
          return t.isComment && t.asyncFactory
        }
        function We(t) {
          if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) {
              var i = t[e]
              if (o(i) && (o(i.componentOptions) || ze(i))) return i
            }
        }
        function Qe(t, e) {
          Ue.$on(t, e)
        }
        function He(t, e) {
          Ue.$off(t, e)
        }
        function Xe(t, e) {
          var i = Ue
          return function n() {
            var o = e.apply(null, arguments)
            null !== o && i.$off(t, n)
          }
        }
        function Ze(t, e, i) {
          ;(Ue = t), se(e, i || {}, Qe, He, Xe, t), (Ue = void 0)
        }
        var Ye = null
        function Je(t) {
          var e = Ye
          return (
            (Ye = t),
            function() {
              Ye = e
            }
          )
        }
        function Ke(t) {
          for (; t && (t = t.$parent); ) if (t._inactive) return !0
          return !1
        }
        function ti(t, e) {
          if (e) {
            if (((t._directInactive = !1), Ke(t))) return
          } else if (t._directInactive) return
          if (t._inactive || null === t._inactive) {
            t._inactive = !1
            for (var i = 0; i < t.$children.length; i++) ti(t.$children[i])
            ei(t, 'activated')
          }
        }
        function ei(t, e) {
          ft()
          var i = t.$options[e],
            n = e + ' hook'
          if (i)
            for (var o = 0, r = i.length; o < r; o++) $t(i[o], t, null, t, n)
          t._hasHookEvent && t.$emit('hook:' + e), dt()
        }
        var ii = [],
          ni = [],
          oi = {},
          ri = !1,
          si = !1,
          ai = 0
        var ui = 0,
          li = Date.now
        if (W && !Z) {
          var ci = window.performance
          ci &&
            'function' === typeof ci.now &&
            li() > document.createEvent('Event').timeStamp &&
            (li = function() {
              return ci.now()
            })
        }
        function hi() {
          var t, e
          for (
            ui = li(),
              si = !0,
              ii.sort(function(t, e) {
                return t.id - e.id
              }),
              ai = 0;
            ai < ii.length;
            ai++
          )
            (t = ii[ai]).before && t.before(),
              (e = t.id),
              (oi[e] = null),
              t.run()
          var i = ni.slice(),
            n = ii.slice()
          ;(ai = ii.length = ni.length = 0),
            (oi = {}),
            (ri = si = !1),
            (function(t) {
              for (var e = 0; e < t.length; e++)
                (t[e]._inactive = !0), ti(t[e], !0)
            })(i),
            (function(t) {
              var e = t.length
              for (; e--; ) {
                var i = t[e],
                  n = i.vm
                n._watcher === i &&
                  n._isMounted &&
                  !n._isDestroyed &&
                  ei(n, 'updated')
              }
            })(n),
            rt && L.devtools && rt.emit('flush')
        }
        var pi = 0,
          fi = function(t, e, i, n, o) {
            ;(this.vm = t),
              o && (t._watcher = this),
              t._watchers.push(this),
              n
                ? ((this.deep = !!n.deep),
                  (this.user = !!n.user),
                  (this.lazy = !!n.lazy),
                  (this.sync = !!n.sync),
                  (this.before = n.before))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = i),
              (this.id = ++pi),
              (this.active = !0),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new at()),
              (this.newDepIds = new at()),
              (this.expression = ''),
              'function' === typeof e
                ? (this.getter = e)
                : ((this.getter = (function(t) {
                    if (!$.test(t)) {
                      var e = t.split('.')
                      return function(t) {
                        for (var i = 0; i < e.length; i++) {
                          if (!t) return
                          t = t[e[i]]
                        }
                        return t
                      }
                    }
                  })(e)),
                  this.getter || (this.getter = E)),
              (this.value = this.lazy ? void 0 : this.get())
          }
        ;(fi.prototype.get = function() {
          var t
          ft(this)
          var e = this.vm
          try {
            t = this.getter.call(e, e)
          } catch (Lo) {
            if (!this.user) throw Lo
            Ut(Lo, e, 'getter for watcher "' + this.expression + '"')
          } finally {
            this.deep && ne(t), dt(), this.cleanupDeps()
          }
          return t
        }),
          (fi.prototype.addDep = function(t) {
            var e = t.id
            this.newDepIds.has(e) ||
              (this.newDepIds.add(e),
              this.newDeps.push(t),
              this.depIds.has(e) || t.addSub(this))
          }),
          (fi.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--; ) {
              var e = this.deps[t]
              this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var i = this.depIds
            ;(this.depIds = this.newDepIds),
              (this.newDepIds = i),
              this.newDepIds.clear(),
              (i = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = i),
              (this.newDeps.length = 0)
          }),
          (fi.prototype.update = function() {
            this.lazy
              ? (this.dirty = !0)
              : this.sync
              ? this.run()
              : (function(t) {
                  var e = t.id
                  if (null == oi[e]) {
                    if (((oi[e] = !0), si)) {
                      for (var i = ii.length - 1; i > ai && ii[i].id > t.id; )
                        i--
                      ii.splice(i + 1, 0, t)
                    } else ii.push(t)
                    ri || ((ri = !0), ee(hi))
                  }
                })(this)
          }),
          (fi.prototype.run = function() {
            if (this.active) {
              var t = this.get()
              if (t !== this.value || a(t) || this.deep) {
                var e = this.value
                if (((this.value = t), this.user))
                  try {
                    this.cb.call(this.vm, t, e)
                  } catch (Lo) {
                    Ut(
                      Lo,
                      this.vm,
                      'callback for watcher "' + this.expression + '"'
                    )
                  }
                else this.cb.call(this.vm, t, e)
              }
            }
          }),
          (fi.prototype.evaluate = function() {
            ;(this.value = this.get()), (this.dirty = !1)
          }),
          (fi.prototype.depend = function() {
            for (var t = this.deps.length; t--; ) this.deps[t].depend()
          }),
          (fi.prototype.teardown = function() {
            if (this.active) {
              this.vm._isBeingDestroyed || v(this.vm._watchers, this)
              for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this)
              this.active = !1
            }
          })
        var di = { enumerable: !0, configurable: !0, get: E, set: E }
        function yi(t, e, i) {
          ;(di.get = function() {
            return this[e][i]
          }),
            (di.set = function(t) {
              this[e][i] = t
            }),
            Object.defineProperty(t, i, di)
        }
        function _i(t) {
          t._watchers = []
          var e = t.$options
          e.props &&
            (function(t, e) {
              var i = t.$options.propsData || {},
                n = (t._props = {}),
                o = (t.$options._propKeys = [])
              t.$parent && xt(!1)
              var r = function(r) {
                o.push(r)
                var s = It(r, e, i, t)
                kt(n, r, s), r in t || yi(t, '_props', r)
              }
              for (var s in e) r(s)
              xt(!0)
            })(t, e.props),
            e.methods &&
              (function(t, e) {
                t.$options.props
                for (var i in e)
                  t[i] = 'function' !== typeof e[i] ? E : O(e[i], t)
              })(t, e.methods),
            e.data
              ? (function(t) {
                  var e = t.$options.data
                  l(
                    (e = t._data =
                      'function' === typeof e
                        ? (function(t, e) {
                            ft()
                            try {
                              return t.call(e, e)
                            } catch (Lo) {
                              return Ut(Lo, e, 'data()'), {}
                            } finally {
                              dt()
                            }
                          })(e, t)
                        : e || {})
                  ) || (e = {})
                  var i = Object.keys(e),
                    n = t.$options.props,
                    o = (t.$options.methods, i.length)
                  for (; o--; ) {
                    var r = i[o]
                    0, (n && g(n, r)) || V(r) || yi(t, '_data', r)
                  }
                  Ot(e, !0)
                })(t)
              : Ot((t._data = {}), !0),
            e.computed &&
              (function(t, e) {
                var i = (t._computedWatchers = Object.create(null)),
                  n = ot()
                for (var o in e) {
                  var r = e[o],
                    s = 'function' === typeof r ? r : r.get
                  0,
                    n || (i[o] = new fi(t, s || E, E, vi)),
                    o in t || mi(t, o, r)
                }
              })(t, e.computed),
            e.watch &&
              e.watch !== et &&
              (function(t, e) {
                for (var i in e) {
                  var n = e[i]
                  if (Array.isArray(n))
                    for (var o = 0; o < n.length; o++) Si(t, i, n[o])
                  else Si(t, i, n)
                }
              })(t, e.watch)
        }
        var vi = { lazy: !0 }
        function mi(t, e, i) {
          var n = !ot()
          'function' === typeof i
            ? ((di.get = n ? gi(e) : bi(i)), (di.set = E))
            : ((di.get = i.get ? (n && !1 !== i.cache ? gi(e) : bi(i.get)) : E),
              (di.set = i.set || E)),
            Object.defineProperty(t, e, di)
        }
        function gi(t) {
          return function() {
            var e = this._computedWatchers && this._computedWatchers[t]
            if (e)
              return e.dirty && e.evaluate(), ht.target && e.depend(), e.value
          }
        }
        function bi(t) {
          return function() {
            return t.call(this, this)
          }
        }
        function Si(t, e, i, n) {
          return (
            l(i) && ((n = i), (i = i.handler)),
            'string' === typeof i && (i = t[i]),
            t.$watch(e, i, n)
          )
        }
        var Ti = 0
        function wi(t) {
          var e = t.options
          if (t.super) {
            var i = wi(t.super)
            if (i !== t.superOptions) {
              t.superOptions = i
              var n = (function(t) {
                var e,
                  i = t.options,
                  n = t.sealedOptions
                for (var o in i) i[o] !== n[o] && (e || (e = {}), (e[o] = i[o]))
                return e
              })(t)
              n && P(t.extendOptions, n),
                (e = t.options = Nt(i, t.extendOptions)).name &&
                  (e.components[e.name] = t)
            }
          }
          return e
        }
        function xi(t) {
          this._init(t)
        }
        function Ai(t) {
          t.cid = 0
          var e = 1
          t.extend = function(t) {
            t = t || {}
            var i = this,
              n = i.cid,
              o = t._Ctor || (t._Ctor = {})
            if (o[n]) return o[n]
            var r = t.name || i.options.name
            var s = function(t) {
              this._init(t)
            }
            return (
              ((s.prototype = Object.create(i.prototype)).constructor = s),
              (s.cid = e++),
              (s.options = Nt(i.options, t)),
              (s.super = i),
              s.options.props &&
                (function(t) {
                  var e = t.options.props
                  for (var i in e) yi(t.prototype, '_props', i)
                })(s),
              s.options.computed &&
                (function(t) {
                  var e = t.options.computed
                  for (var i in e) mi(t.prototype, i, e[i])
                })(s),
              (s.extend = i.extend),
              (s.mixin = i.mixin),
              (s.use = i.use),
              D.forEach(function(t) {
                s[t] = i[t]
              }),
              r && (s.options.components[r] = s),
              (s.superOptions = i.options),
              (s.extendOptions = t),
              (s.sealedOptions = P({}, s.options)),
              (o[n] = s),
              s
            )
          }
        }
        function Oi(t) {
          return t && (t.Ctor.options.name || t.tag)
        }
        function ki(t, e) {
          return Array.isArray(t)
            ? t.indexOf(e) > -1
            : 'string' === typeof t
            ? t.split(',').indexOf(e) > -1
            : !!c(t) && t.test(e)
        }
        function Pi(t, e) {
          var i = t.cache,
            n = t.keys,
            o = t._vnode
          for (var r in i) {
            var s = i[r]
            if (s) {
              var a = Oi(s.componentOptions)
              a && !e(a) && Ci(i, r, n, o)
            }
          }
        }
        function Ci(t, e, i, n) {
          var o = t[e]
          !o || (n && o.tag === n.tag) || o.componentInstance.$destroy(),
            (t[e] = null),
            v(i, e)
        }
        !(function(t) {
          t.prototype._init = function(t) {
            var e = this
            ;(e._uid = Ti++),
              (e._isVue = !0),
              t && t._isComponent
                ? (function(t, e) {
                    var i = (t.$options = Object.create(t.constructor.options)),
                      n = e._parentVnode
                    ;(i.parent = e.parent), (i._parentVnode = n)
                    var o = n.componentOptions
                    ;(i.propsData = o.propsData),
                      (i._parentListeners = o.listeners),
                      (i._renderChildren = o.children),
                      (i._componentTag = o.tag),
                      e.render &&
                        ((i.render = e.render),
                        (i.staticRenderFns = e.staticRenderFns))
                  })(e, t)
                : (e.$options = Nt(wi(e.constructor), t || {}, e)),
              (e._renderProxy = e),
              (e._self = e),
              (function(t) {
                var e = t.$options,
                  i = e.parent
                if (i && !e.abstract) {
                  for (; i.$options.abstract && i.$parent; ) i = i.$parent
                  i.$children.push(t)
                }
                ;(t.$parent = i),
                  (t.$root = i ? i.$root : t),
                  (t.$children = []),
                  (t.$refs = {}),
                  (t._watcher = null),
                  (t._inactive = null),
                  (t._directInactive = !1),
                  (t._isMounted = !1),
                  (t._isDestroyed = !1),
                  (t._isBeingDestroyed = !1)
              })(e),
              (function(t) {
                ;(t._events = Object.create(null)), (t._hasHookEvent = !1)
                var e = t.$options._parentListeners
                e && Ze(t, e)
              })(e),
              (function(t) {
                ;(t._vnode = null), (t._staticTrees = null)
                var e = t.$options,
                  n = (t.$vnode = e._parentVnode),
                  o = n && n.context
                ;(t.$slots = pe(e._renderChildren, o)),
                  (t.$scopedSlots = i),
                  (t._c = function(e, i, n, o) {
                    return Ve(t, e, i, n, o, !1)
                  }),
                  (t.$createElement = function(e, i, n, o) {
                    return Ve(t, e, i, n, o, !0)
                  })
                var r = n && n.data
                kt(t, '$attrs', (r && r.attrs) || i, null, !0),
                  kt(t, '$listeners', e._parentListeners || i, null, !0)
              })(e),
              ei(e, 'beforeCreate'),
              (function(t) {
                var e = he(t.$options.inject, t)
                e &&
                  (xt(!1),
                  Object.keys(e).forEach(function(i) {
                    kt(t, i, e[i])
                  }),
                  xt(!0))
              })(e),
              _i(e),
              (function(t) {
                var e = t.$options.provide
                e && (t._provided = 'function' === typeof e ? e.call(t) : e)
              })(e),
              ei(e, 'created'),
              e.$options.el && e.$mount(e.$options.el)
          }
        })(xi),
          (function(t) {
            var e = {
                get: function() {
                  return this._data
                }
              },
              i = {
                get: function() {
                  return this._props
                }
              }
            Object.defineProperty(t.prototype, '$data', e),
              Object.defineProperty(t.prototype, '$props', i),
              (t.prototype.$set = Pt),
              (t.prototype.$delete = Ct),
              (t.prototype.$watch = function(t, e, i) {
                if (l(e)) return Si(this, t, e, i)
                ;(i = i || {}).user = !0
                var n = new fi(this, t, e, i)
                if (i.immediate)
                  try {
                    e.call(this, n.value)
                  } catch (o) {
                    Ut(
                      o,
                      this,
                      'callback for immediate watcher "' + n.expression + '"'
                    )
                  }
                return function() {
                  n.teardown()
                }
              })
          })(xi),
          (function(t) {
            var e = /^hook:/
            ;(t.prototype.$on = function(t, i) {
              var n = this
              if (Array.isArray(t))
                for (var o = 0, r = t.length; o < r; o++) n.$on(t[o], i)
              else
                (n._events[t] || (n._events[t] = [])).push(i),
                  e.test(t) && (n._hasHookEvent = !0)
              return n
            }),
              (t.prototype.$once = function(t, e) {
                var i = this
                function n() {
                  i.$off(t, n), e.apply(i, arguments)
                }
                return (n.fn = e), i.$on(t, n), i
              }),
              (t.prototype.$off = function(t, e) {
                var i = this
                if (!arguments.length)
                  return (i._events = Object.create(null)), i
                if (Array.isArray(t)) {
                  for (var n = 0, o = t.length; n < o; n++) i.$off(t[n], e)
                  return i
                }
                var r,
                  s = i._events[t]
                if (!s) return i
                if (!e) return (i._events[t] = null), i
                for (var a = s.length; a--; )
                  if ((r = s[a]) === e || r.fn === e) {
                    s.splice(a, 1)
                    break
                  }
                return i
              }),
              (t.prototype.$emit = function(t) {
                var e = this,
                  i = e._events[t]
                if (i) {
                  i = i.length > 1 ? k(i) : i
                  for (
                    var n = k(arguments, 1),
                      o = 'event handler for "' + t + '"',
                      r = 0,
                      s = i.length;
                    r < s;
                    r++
                  )
                    $t(i[r], e, n, e, o)
                }
                return e
              })
          })(xi),
          (function(t) {
            ;(t.prototype._update = function(t, e) {
              var i = this,
                n = i.$el,
                o = i._vnode,
                r = Je(i)
              ;(i._vnode = t),
                (i.$el = o ? i.__patch__(o, t) : i.__patch__(i.$el, t, e, !1)),
                r(),
                n && (n.__vue__ = null),
                i.$el && (i.$el.__vue__ = i),
                i.$vnode &&
                  i.$parent &&
                  i.$vnode === i.$parent._vnode &&
                  (i.$parent.$el = i.$el)
            }),
              (t.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
              }),
              (t.prototype.$destroy = function() {
                var t = this
                if (!t._isBeingDestroyed) {
                  ei(t, 'beforeDestroy'), (t._isBeingDestroyed = !0)
                  var e = t.$parent
                  !e ||
                    e._isBeingDestroyed ||
                    t.$options.abstract ||
                    v(e.$children, t),
                    t._watcher && t._watcher.teardown()
                  for (var i = t._watchers.length; i--; )
                    t._watchers[i].teardown()
                  t._data.__ob__ && t._data.__ob__.vmCount--,
                    (t._isDestroyed = !0),
                    t.__patch__(t._vnode, null),
                    ei(t, 'destroyed'),
                    t.$off(),
                    t.$el && (t.$el.__vue__ = null),
                    t.$vnode && (t.$vnode.parent = null)
                }
              })
          })(xi),
          (function(t) {
            Fe(t.prototype),
              (t.prototype.$nextTick = function(t) {
                return ee(t, this)
              }),
              (t.prototype._render = function() {
                var t,
                  e = this,
                  i = e.$options,
                  n = i.render,
                  o = i._parentVnode
                o &&
                  (e.$scopedSlots = de(
                    o.data.scopedSlots,
                    e.$slots,
                    e.$scopedSlots
                  )),
                  (e.$vnode = o)
                try {
                  ;($e = e), (t = n.call(e._renderProxy, e.$createElement))
                } catch (Lo) {
                  Ut(Lo, e, 'render'), (t = e._vnode)
                } finally {
                  $e = null
                }
                return (
                  Array.isArray(t) && 1 === t.length && (t = t[0]),
                  t instanceof yt || (t = vt()),
                  (t.parent = o),
                  t
                )
              })
          })(xi)
        var Ei = [String, RegExp, Array],
          Fi = {
            KeepAlive: {
              name: 'keep-alive',
              abstract: !0,
              props: { include: Ei, exclude: Ei, max: [String, Number] },
              created: function() {
                ;(this.cache = Object.create(null)), (this.keys = [])
              },
              destroyed: function() {
                for (var t in this.cache) Ci(this.cache, t, this.keys)
              },
              mounted: function() {
                var t = this
                this.$watch('include', function(e) {
                  Pi(t, function(t) {
                    return ki(e, t)
                  })
                }),
                  this.$watch('exclude', function(e) {
                    Pi(t, function(t) {
                      return !ki(e, t)
                    })
                  })
              },
              render: function() {
                var t = this.$slots.default,
                  e = We(t),
                  i = e && e.componentOptions
                if (i) {
                  var n = Oi(i),
                    o = this.include,
                    r = this.exclude
                  if ((o && (!n || !ki(o, n))) || (r && n && ki(r, n))) return e
                  var s = this.cache,
                    a = this.keys,
                    u =
                      null == e.key
                        ? i.Ctor.cid + (i.tag ? '::' + i.tag : '')
                        : e.key
                  s[u]
                    ? ((e.componentInstance = s[u].componentInstance),
                      v(a, u),
                      a.push(u))
                    : ((s[u] = e),
                      a.push(u),
                      this.max &&
                        a.length > parseInt(this.max) &&
                        Ci(s, a[0], a, this._vnode)),
                    (e.data.keepAlive = !0)
                }
                return e || (t && t[0])
              }
            }
          }
        !(function(t) {
          var e = {
            get: function() {
              return L
            }
          }
          Object.defineProperty(t, 'config', e),
            (t.util = {
              warn: lt,
              extend: P,
              mergeOptions: Nt,
              defineReactive: kt
            }),
            (t.set = Pt),
            (t.delete = Ct),
            (t.nextTick = ee),
            (t.observable = function(t) {
              return Ot(t), t
            }),
            (t.options = Object.create(null)),
            D.forEach(function(e) {
              t.options[e + 's'] = Object.create(null)
            }),
            (t.options._base = t),
            P(t.options.components, Fi),
            (function(t) {
              t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = [])
                if (e.indexOf(t) > -1) return this
                var i = k(arguments, 1)
                return (
                  i.unshift(this),
                  'function' === typeof t.install
                    ? t.install.apply(t, i)
                    : 'function' === typeof t && t.apply(null, i),
                  e.push(t),
                  this
                )
              }
            })(t),
            (function(t) {
              t.mixin = function(t) {
                return (this.options = Nt(this.options, t)), this
              }
            })(t),
            Ai(t),
            (function(t) {
              D.forEach(function(e) {
                t[e] = function(t, i) {
                  return i
                    ? ('component' === e &&
                        l(i) &&
                        ((i.name = i.name || t),
                        (i = this.options._base.extend(i))),
                      'directive' === e &&
                        'function' === typeof i &&
                        (i = { bind: i, update: i }),
                      (this.options[e + 's'][t] = i),
                      i)
                    : this.options[e + 's'][t]
                }
              })
            })(t)
        })(xi),
          Object.defineProperty(xi.prototype, '$isServer', { get: ot }),
          Object.defineProperty(xi.prototype, '$ssrContext', {
            get: function() {
              return this.$vnode && this.$vnode.ssrContext
            }
          }),
          Object.defineProperty(xi, 'FunctionalRenderContext', { value: Me }),
          (xi.version = '2.6.10')
        var Mi = y('style,class'),
          qi = y('input,textarea,option,select,progress'),
          Ri = y('contenteditable,draggable,spellcheck'),
          ji = y('events,caret,typing,plaintext-only'),
          Ni = function(t, e) {
            return Vi(e) || 'false' === e
              ? 'false'
              : 'contenteditable' === t && ji(e)
              ? e
              : 'true'
          },
          Di = y(
            'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
          ),
          Ii = 'http://www.w3.org/1999/xlink',
          Li = function(t) {
            return ':' === t.charAt(5) && 'xlink' === t.slice(0, 5)
          },
          Bi = function(t) {
            return Li(t) ? t.slice(6, t.length) : ''
          },
          Vi = function(t) {
            return null == t || !1 === t
          }
        function Ui(t) {
          for (var e = t.data, i = t, n = t; o(n.componentInstance); )
            (n = n.componentInstance._vnode) && n.data && (e = $i(n.data, e))
          for (; o((i = i.parent)); ) i && i.data && (e = $i(e, i.data))
          return (function(t, e) {
            if (o(t) || o(e)) return Gi(t, zi(e))
            return ''
          })(e.staticClass, e.class)
        }
        function $i(t, e) {
          return {
            staticClass: Gi(t.staticClass, e.staticClass),
            class: o(t.class) ? [t.class, e.class] : e.class
          }
        }
        function Gi(t, e) {
          return t ? (e ? t + ' ' + e : t) : e || ''
        }
        function zi(t) {
          return Array.isArray(t)
            ? (function(t) {
                for (var e, i = '', n = 0, r = t.length; n < r; n++)
                  o((e = zi(t[n]))) && '' !== e && (i && (i += ' '), (i += e))
                return i
              })(t)
            : a(t)
            ? (function(t) {
                var e = ''
                for (var i in t) t[i] && (e && (e += ' '), (e += i))
                return e
              })(t)
            : 'string' === typeof t
            ? t
            : ''
        }
        var Wi = {
            svg: 'http://www.w3.org/2000/svg',
            math: 'http://www.w3.org/1998/Math/MathML'
          },
          Qi = y(
            'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
          ),
          Hi = y(
            'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
            !0
          ),
          Xi = function(t) {
            return Qi(t) || Hi(t)
          }
        var Zi = Object.create(null)
        var Yi = y('text,number,password,search,email,tel,url')
        var Ji = Object.freeze({
            createElement: function(t, e) {
              var i = document.createElement(t)
              return 'select' !== t
                ? i
                : (e.data &&
                    e.data.attrs &&
                    void 0 !== e.data.attrs.multiple &&
                    i.setAttribute('multiple', 'multiple'),
                  i)
            },
            createElementNS: function(t, e) {
              return document.createElementNS(Wi[t], e)
            },
            createTextNode: function(t) {
              return document.createTextNode(t)
            },
            createComment: function(t) {
              return document.createComment(t)
            },
            insertBefore: function(t, e, i) {
              t.insertBefore(e, i)
            },
            removeChild: function(t, e) {
              t.removeChild(e)
            },
            appendChild: function(t, e) {
              t.appendChild(e)
            },
            parentNode: function(t) {
              return t.parentNode
            },
            nextSibling: function(t) {
              return t.nextSibling
            },
            tagName: function(t) {
              return t.tagName
            },
            setTextContent: function(t, e) {
              t.textContent = e
            },
            setStyleScope: function(t, e) {
              t.setAttribute(e, '')
            }
          }),
          Ki = {
            create: function(t, e) {
              tn(e)
            },
            update: function(t, e) {
              t.data.ref !== e.data.ref && (tn(t, !0), tn(e))
            },
            destroy: function(t) {
              tn(t, !0)
            }
          }
        function tn(t, e) {
          var i = t.data.ref
          if (o(i)) {
            var n = t.context,
              r = t.componentInstance || t.elm,
              s = n.$refs
            e
              ? Array.isArray(s[i])
                ? v(s[i], r)
                : s[i] === r && (s[i] = void 0)
              : t.data.refInFor
              ? Array.isArray(s[i])
                ? s[i].indexOf(r) < 0 && s[i].push(r)
                : (s[i] = [r])
              : (s[i] = r)
          }
        }
        var en = new yt('', {}, []),
          nn = ['create', 'activate', 'update', 'remove', 'destroy']
        function on(t, e) {
          return (
            t.key === e.key &&
            ((t.tag === e.tag &&
              t.isComment === e.isComment &&
              o(t.data) === o(e.data) &&
              (function(t, e) {
                if ('input' !== t.tag) return !0
                var i,
                  n = o((i = t.data)) && o((i = i.attrs)) && i.type,
                  r = o((i = e.data)) && o((i = i.attrs)) && i.type
                return n === r || (Yi(n) && Yi(r))
              })(t, e)) ||
              (r(t.isAsyncPlaceholder) &&
                t.asyncFactory === e.asyncFactory &&
                n(e.asyncFactory.error)))
          )
        }
        function rn(t, e, i) {
          var n,
            r,
            s = {}
          for (n = e; n <= i; ++n) o((r = t[n].key)) && (s[r] = n)
          return s
        }
        var sn = {
          create: an,
          update: an,
          destroy: function(t) {
            an(t, en)
          }
        }
        function an(t, e) {
          ;(t.data.directives || e.data.directives) &&
            (function(t, e) {
              var i,
                n,
                o,
                r = t === en,
                s = e === en,
                a = ln(t.data.directives, t.context),
                u = ln(e.data.directives, e.context),
                l = [],
                c = []
              for (i in u)
                (n = a[i]),
                  (o = u[i]),
                  n
                    ? ((o.oldValue = n.value),
                      (o.oldArg = n.arg),
                      hn(o, 'update', e, t),
                      o.def && o.def.componentUpdated && c.push(o))
                    : (hn(o, 'bind', e, t),
                      o.def && o.def.inserted && l.push(o))
              if (l.length) {
                var h = function() {
                  for (var i = 0; i < l.length; i++) hn(l[i], 'inserted', e, t)
                }
                r ? ae(e, 'insert', h) : h()
              }
              c.length &&
                ae(e, 'postpatch', function() {
                  for (var i = 0; i < c.length; i++)
                    hn(c[i], 'componentUpdated', e, t)
                })
              if (!r) for (i in a) u[i] || hn(a[i], 'unbind', t, t, s)
            })(t, e)
        }
        var un = Object.create(null)
        function ln(t, e) {
          var i,
            n,
            o = Object.create(null)
          if (!t) return o
          for (i = 0; i < t.length; i++)
            (n = t[i]).modifiers || (n.modifiers = un),
              (o[cn(n)] = n),
              (n.def = Dt(e.$options, 'directives', n.name))
          return o
        }
        function cn(t) {
          return (
            t.rawName || t.name + '.' + Object.keys(t.modifiers || {}).join('.')
          )
        }
        function hn(t, e, i, n, o) {
          var r = t.def && t.def[e]
          if (r)
            try {
              r(i.elm, t, i, n, o)
            } catch (Lo) {
              Ut(Lo, i.context, 'directive ' + t.name + ' ' + e + ' hook')
            }
        }
        var pn = [Ki, sn]
        function fn(t, e) {
          var i = e.componentOptions
          if (
            (!o(i) || !1 !== i.Ctor.options.inheritAttrs) &&
            (!n(t.data.attrs) || !n(e.data.attrs))
          ) {
            var r,
              s,
              a = e.elm,
              u = t.data.attrs || {},
              l = e.data.attrs || {}
            for (r in (o(l.__ob__) && (l = e.data.attrs = P({}, l)), l))
              (s = l[r]), u[r] !== s && dn(a, r, s)
            for (r in ((Z || J) &&
              l.value !== u.value &&
              dn(a, 'value', l.value),
            u))
              n(l[r]) &&
                (Li(r)
                  ? a.removeAttributeNS(Ii, Bi(r))
                  : Ri(r) || a.removeAttribute(r))
          }
        }
        function dn(t, e, i) {
          t.tagName.indexOf('-') > -1
            ? yn(t, e, i)
            : Di(e)
            ? Vi(i)
              ? t.removeAttribute(e)
              : ((i =
                  'allowfullscreen' === e && 'EMBED' === t.tagName
                    ? 'true'
                    : e),
                t.setAttribute(e, i))
            : Ri(e)
            ? t.setAttribute(e, Ni(e, i))
            : Li(e)
            ? Vi(i)
              ? t.removeAttributeNS(Ii, Bi(e))
              : t.setAttributeNS(Ii, e, i)
            : yn(t, e, i)
        }
        function yn(t, e, i) {
          if (Vi(i)) t.removeAttribute(e)
          else {
            if (
              Z &&
              !Y &&
              'TEXTAREA' === t.tagName &&
              'placeholder' === e &&
              '' !== i &&
              !t.__ieph
            ) {
              var n = function(e) {
                e.stopImmediatePropagation(), t.removeEventListener('input', n)
              }
              t.addEventListener('input', n), (t.__ieph = !0)
            }
            t.setAttribute(e, i)
          }
        }
        var _n = { create: fn, update: fn }
        function vn(t, e) {
          var i = e.elm,
            r = e.data,
            s = t.data
          if (
            !(
              n(r.staticClass) &&
              n(r.class) &&
              (n(s) || (n(s.staticClass) && n(s.class)))
            )
          ) {
            var a = Ui(e),
              u = i._transitionClasses
            o(u) && (a = Gi(a, zi(u))),
              a !== i._prevClass &&
                (i.setAttribute('class', a), (i._prevClass = a))
          }
        }
        var mn,
          gn = { create: vn, update: vn },
          bn = '__r',
          Sn = '__c'
        function Tn(t, e, i) {
          var n = mn
          return function o() {
            var r = e.apply(null, arguments)
            null !== r && An(t, o, i, n)
          }
        }
        var wn = Qt && !(tt && Number(tt[1]) <= 53)
        function xn(t, e, i, n) {
          if (wn) {
            var o = ui,
              r = e
            e = r._wrapper = function(t) {
              if (
                t.target === t.currentTarget ||
                t.timeStamp >= o ||
                t.timeStamp <= 0 ||
                t.target.ownerDocument !== document
              )
                return r.apply(this, arguments)
            }
          }
          mn.addEventListener(t, e, it ? { capture: i, passive: n } : i)
        }
        function An(t, e, i, n) {
          ;(n || mn).removeEventListener(t, e._wrapper || e, i)
        }
        function On(t, e) {
          if (!n(t.data.on) || !n(e.data.on)) {
            var i = e.data.on || {},
              r = t.data.on || {}
            ;(mn = e.elm),
              (function(t) {
                if (o(t[bn])) {
                  var e = Z ? 'change' : 'input'
                  ;(t[e] = [].concat(t[bn], t[e] || [])), delete t[bn]
                }
                o(t[Sn]) &&
                  ((t.change = [].concat(t[Sn], t.change || [])), delete t[Sn])
              })(i),
              se(i, r, xn, An, Tn, e.context),
              (mn = void 0)
          }
        }
        var kn,
          Pn = { create: On, update: On }
        function Cn(t, e) {
          if (!n(t.data.domProps) || !n(e.data.domProps)) {
            var i,
              r,
              s = e.elm,
              a = t.data.domProps || {},
              u = e.data.domProps || {}
            for (i in (o(u.__ob__) && (u = e.data.domProps = P({}, u)), a))
              i in u || (s[i] = '')
            for (i in u) {
              if (((r = u[i]), 'textContent' === i || 'innerHTML' === i)) {
                if ((e.children && (e.children.length = 0), r === a[i]))
                  continue
                1 === s.childNodes.length && s.removeChild(s.childNodes[0])
              }
              if ('value' === i && 'PROGRESS' !== s.tagName) {
                s._value = r
                var l = n(r) ? '' : String(r)
                En(s, l) && (s.value = l)
              } else if ('innerHTML' === i && Hi(s.tagName) && n(s.innerHTML)) {
                ;(kn = kn || document.createElement('div')).innerHTML =
                  '<svg>' + r + '</svg>'
                for (var c = kn.firstChild; s.firstChild; )
                  s.removeChild(s.firstChild)
                for (; c.firstChild; ) s.appendChild(c.firstChild)
              } else if (r !== a[i])
                try {
                  s[i] = r
                } catch (Lo) {}
            }
          }
        }
        function En(t, e) {
          return (
            !t.composing &&
            ('OPTION' === t.tagName ||
              (function(t, e) {
                var i = !0
                try {
                  i = document.activeElement !== t
                } catch (Lo) {}
                return i && t.value !== e
              })(t, e) ||
              (function(t, e) {
                var i = t.value,
                  n = t._vModifiers
                if (o(n)) {
                  if (n.number) return d(i) !== d(e)
                  if (n.trim) return i.trim() !== e.trim()
                }
                return i !== e
              })(t, e))
          )
        }
        var Fn = { create: Cn, update: Cn },
          Mn = b(function(t) {
            var e = {},
              i = /:(.+)/
            return (
              t.split(/;(?![^(]*\))/g).forEach(function(t) {
                if (t) {
                  var n = t.split(i)
                  n.length > 1 && (e[n[0].trim()] = n[1].trim())
                }
              }),
              e
            )
          })
        function qn(t) {
          var e = Rn(t.style)
          return t.staticStyle ? P(t.staticStyle, e) : e
        }
        function Rn(t) {
          return Array.isArray(t) ? C(t) : 'string' === typeof t ? Mn(t) : t
        }
        var jn,
          Nn = /^--/,
          Dn = /\s*!important$/,
          In = function(t, e, i) {
            if (Nn.test(e)) t.style.setProperty(e, i)
            else if (Dn.test(i))
              t.style.setProperty(A(e), i.replace(Dn, ''), 'important')
            else {
              var n = Bn(e)
              if (Array.isArray(i))
                for (var o = 0, r = i.length; o < r; o++) t.style[n] = i[o]
              else t.style[n] = i
            }
          },
          Ln = ['Webkit', 'Moz', 'ms'],
          Bn = b(function(t) {
            if (
              ((jn = jn || document.createElement('div').style),
              'filter' !== (t = T(t)) && t in jn)
            )
              return t
            for (
              var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0;
              i < Ln.length;
              i++
            ) {
              var n = Ln[i] + e
              if (n in jn) return n
            }
          })
        function Vn(t, e) {
          var i = e.data,
            r = t.data
          if (
            !(n(i.staticStyle) && n(i.style) && n(r.staticStyle) && n(r.style))
          ) {
            var s,
              a,
              u = e.elm,
              l = r.staticStyle,
              c = r.normalizedStyle || r.style || {},
              h = l || c,
              p = Rn(e.data.style) || {}
            e.data.normalizedStyle = o(p.__ob__) ? P({}, p) : p
            var f = (function(t, e) {
              var i,
                n = {}
              if (e)
                for (var o = t; o.componentInstance; )
                  (o = o.componentInstance._vnode) &&
                    o.data &&
                    (i = qn(o.data)) &&
                    P(n, i)
              ;(i = qn(t.data)) && P(n, i)
              for (var r = t; (r = r.parent); )
                r.data && (i = qn(r.data)) && P(n, i)
              return n
            })(e, !0)
            for (a in h) n(f[a]) && In(u, a, '')
            for (a in f) (s = f[a]) !== h[a] && In(u, a, null == s ? '' : s)
          }
        }
        var Un = { create: Vn, update: Vn },
          $n = /\s+/
        function Gn(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(' ') > -1
                ? e.split($n).forEach(function(e) {
                    return t.classList.add(e)
                  })
                : t.classList.add(e)
            else {
              var i = ' ' + (t.getAttribute('class') || '') + ' '
              i.indexOf(' ' + e + ' ') < 0 &&
                t.setAttribute('class', (i + e).trim())
            }
        }
        function zn(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(' ') > -1
                ? e.split($n).forEach(function(e) {
                    return t.classList.remove(e)
                  })
                : t.classList.remove(e),
                t.classList.length || t.removeAttribute('class')
            else {
              for (
                var i = ' ' + (t.getAttribute('class') || '') + ' ',
                  n = ' ' + e + ' ';
                i.indexOf(n) >= 0;

              )
                i = i.replace(n, ' ')
              ;(i = i.trim())
                ? t.setAttribute('class', i)
                : t.removeAttribute('class')
            }
        }
        function Wn(t) {
          if (t) {
            if ('object' === typeof t) {
              var e = {}
              return !1 !== t.css && P(e, Qn(t.name || 'v')), P(e, t), e
            }
            return 'string' === typeof t ? Qn(t) : void 0
          }
        }
        var Qn = b(function(t) {
            return {
              enterClass: t + '-enter',
              enterToClass: t + '-enter-to',
              enterActiveClass: t + '-enter-active',
              leaveClass: t + '-leave',
              leaveToClass: t + '-leave-to',
              leaveActiveClass: t + '-leave-active'
            }
          }),
          Hn = W && !Y,
          Xn = 'transition',
          Zn = 'animation',
          Yn = 'transition',
          Jn = 'transitionend',
          Kn = 'animation',
          to = 'animationend'
        Hn &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((Yn = 'WebkitTransition'), (Jn = 'webkitTransitionEnd')),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((Kn = 'WebkitAnimation'), (to = 'webkitAnimationEnd')))
        var eo = W
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function(t) {
              return t()
            }
        function io(t) {
          eo(function() {
            eo(t)
          })
        }
        function no(t, e) {
          var i = t._transitionClasses || (t._transitionClasses = [])
          i.indexOf(e) < 0 && (i.push(e), Gn(t, e))
        }
        function oo(t, e) {
          t._transitionClasses && v(t._transitionClasses, e), zn(t, e)
        }
        function ro(t, e, i) {
          var n = ao(t, e),
            o = n.type,
            r = n.timeout,
            s = n.propCount
          if (!o) return i()
          var a = o === Xn ? Jn : to,
            u = 0,
            l = function() {
              t.removeEventListener(a, c), i()
            },
            c = function(e) {
              e.target === t && ++u >= s && l()
            }
          setTimeout(function() {
            u < s && l()
          }, r + 1),
            t.addEventListener(a, c)
        }
        var so = /\b(transform|all)(,|$)/
        function ao(t, e) {
          var i,
            n = window.getComputedStyle(t),
            o = (n[Yn + 'Delay'] || '').split(', '),
            r = (n[Yn + 'Duration'] || '').split(', '),
            s = uo(o, r),
            a = (n[Kn + 'Delay'] || '').split(', '),
            u = (n[Kn + 'Duration'] || '').split(', '),
            l = uo(a, u),
            c = 0,
            h = 0
          return (
            e === Xn
              ? s > 0 && ((i = Xn), (c = s), (h = r.length))
              : e === Zn
              ? l > 0 && ((i = Zn), (c = l), (h = u.length))
              : (h = (i = (c = Math.max(s, l)) > 0 ? (s > l ? Xn : Zn) : null)
                  ? i === Xn
                    ? r.length
                    : u.length
                  : 0),
            {
              type: i,
              timeout: c,
              propCount: h,
              hasTransform: i === Xn && so.test(n[Yn + 'Property'])
            }
          )
        }
        function uo(t, e) {
          for (; t.length < e.length; ) t = t.concat(t)
          return Math.max.apply(
            null,
            e.map(function(e, i) {
              return lo(e) + lo(t[i])
            })
          )
        }
        function lo(t) {
          return 1e3 * Number(t.slice(0, -1).replace(',', '.'))
        }
        function co(t, e) {
          var i = t.elm
          o(i._leaveCb) && ((i._leaveCb.cancelled = !0), i._leaveCb())
          var r = Wn(t.data.transition)
          if (!n(r) && !o(i._enterCb) && 1 === i.nodeType) {
            for (
              var s = r.css,
                u = r.type,
                l = r.enterClass,
                c = r.enterToClass,
                h = r.enterActiveClass,
                p = r.appearClass,
                f = r.appearToClass,
                y = r.appearActiveClass,
                _ = r.beforeEnter,
                v = r.enter,
                m = r.afterEnter,
                g = r.enterCancelled,
                b = r.beforeAppear,
                S = r.appear,
                T = r.afterAppear,
                w = r.appearCancelled,
                x = r.duration,
                A = Ye,
                O = Ye.$vnode;
              O && O.parent;

            )
              (A = O.context), (O = O.parent)
            var k = !A._isMounted || !t.isRootInsert
            if (!k || S || '' === S) {
              var P = k && p ? p : l,
                C = k && y ? y : h,
                E = k && f ? f : c,
                F = (k && b) || _,
                M = k && 'function' === typeof S ? S : v,
                q = (k && T) || m,
                R = (k && w) || g,
                N = d(a(x) ? x.enter : x)
              0
              var D = !1 !== s && !Y,
                I = fo(M),
                L = (i._enterCb = j(function() {
                  D && (oo(i, E), oo(i, C)),
                    L.cancelled ? (D && oo(i, P), R && R(i)) : q && q(i),
                    (i._enterCb = null)
                }))
              t.data.show ||
                ae(t, 'insert', function() {
                  var e = i.parentNode,
                    n = e && e._pending && e._pending[t.key]
                  n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(),
                    M && M(i, L)
                }),
                F && F(i),
                D &&
                  (no(i, P),
                  no(i, C),
                  io(function() {
                    oo(i, P),
                      L.cancelled ||
                        (no(i, E),
                        I || (po(N) ? setTimeout(L, N) : ro(i, u, L)))
                  })),
                t.data.show && (e && e(), M && M(i, L)),
                D || I || L()
            }
          }
        }
        function ho(t, e) {
          var i = t.elm
          o(i._enterCb) && ((i._enterCb.cancelled = !0), i._enterCb())
          var r = Wn(t.data.transition)
          if (n(r) || 1 !== i.nodeType) return e()
          if (!o(i._leaveCb)) {
            var s = r.css,
              u = r.type,
              l = r.leaveClass,
              c = r.leaveToClass,
              h = r.leaveActiveClass,
              p = r.beforeLeave,
              f = r.leave,
              y = r.afterLeave,
              _ = r.leaveCancelled,
              v = r.delayLeave,
              m = r.duration,
              g = !1 !== s && !Y,
              b = fo(f),
              S = d(a(m) ? m.leave : m)
            0
            var T = (i._leaveCb = j(function() {
              i.parentNode &&
                i.parentNode._pending &&
                (i.parentNode._pending[t.key] = null),
                g && (oo(i, c), oo(i, h)),
                T.cancelled ? (g && oo(i, l), _ && _(i)) : (e(), y && y(i)),
                (i._leaveCb = null)
            }))
            v ? v(w) : w()
          }
          function w() {
            T.cancelled ||
              (!t.data.show &&
                i.parentNode &&
                ((i.parentNode._pending || (i.parentNode._pending = {}))[
                  t.key
                ] = t),
              p && p(i),
              g &&
                (no(i, l),
                no(i, h),
                io(function() {
                  oo(i, l),
                    T.cancelled ||
                      (no(i, c), b || (po(S) ? setTimeout(T, S) : ro(i, u, T)))
                })),
              f && f(i, T),
              g || b || T())
          }
        }
        function po(t) {
          return 'number' === typeof t && !isNaN(t)
        }
        function fo(t) {
          if (n(t)) return !1
          var e = t.fns
          return o(e)
            ? fo(Array.isArray(e) ? e[0] : e)
            : (t._length || t.length) > 1
        }
        function yo(t, e) {
          !0 !== e.data.show && co(e)
        }
        var _o = (function(t) {
          var e,
            i,
            a = {},
            u = t.modules,
            l = t.nodeOps
          for (e = 0; e < nn.length; ++e)
            for (a[nn[e]] = [], i = 0; i < u.length; ++i)
              o(u[i][nn[e]]) && a[nn[e]].push(u[i][nn[e]])
          function c(t) {
            var e = l.parentNode(t)
            o(e) && l.removeChild(e, t)
          }
          function h(t, e, i, n, s, u, c) {
            if (
              (o(t.elm) && o(u) && (t = u[c] = gt(t)),
              (t.isRootInsert = !s),
              !(function(t, e, i, n) {
                var s = t.data
                if (o(s)) {
                  var u = o(t.componentInstance) && s.keepAlive
                  if (
                    (o((s = s.hook)) && o((s = s.init)) && s(t, !1),
                    o(t.componentInstance))
                  )
                    return (
                      p(t, e),
                      f(i, t.elm, n),
                      r(u) &&
                        (function(t, e, i, n) {
                          for (var r, s = t; s.componentInstance; )
                            if (
                              ((s = s.componentInstance._vnode),
                              o((r = s.data)) && o((r = r.transition)))
                            ) {
                              for (r = 0; r < a.activate.length; ++r)
                                a.activate[r](en, s)
                              e.push(s)
                              break
                            }
                          f(i, t.elm, n)
                        })(t, e, i, n),
                      !0
                    )
                }
              })(t, e, i, n))
            ) {
              var h = t.data,
                y = t.children,
                _ = t.tag
              o(_)
                ? ((t.elm = t.ns
                    ? l.createElementNS(t.ns, _)
                    : l.createElement(_, t)),
                  m(t),
                  d(t, y, e),
                  o(h) && v(t, e),
                  f(i, t.elm, n))
                : r(t.isComment)
                ? ((t.elm = l.createComment(t.text)), f(i, t.elm, n))
                : ((t.elm = l.createTextNode(t.text)), f(i, t.elm, n))
            }
          }
          function p(t, e) {
            o(t.data.pendingInsert) &&
              (e.push.apply(e, t.data.pendingInsert),
              (t.data.pendingInsert = null)),
              (t.elm = t.componentInstance.$el),
              _(t) ? (v(t, e), m(t)) : (tn(t), e.push(t))
          }
          function f(t, e, i) {
            o(t) &&
              (o(i)
                ? l.parentNode(i) === t && l.insertBefore(t, e, i)
                : l.appendChild(t, e))
          }
          function d(t, e, i) {
            if (Array.isArray(e))
              for (var n = 0; n < e.length; ++n)
                h(e[n], i, t.elm, null, !0, e, n)
            else
              s(t.text) &&
                l.appendChild(t.elm, l.createTextNode(String(t.text)))
          }
          function _(t) {
            for (; t.componentInstance; ) t = t.componentInstance._vnode
            return o(t.tag)
          }
          function v(t, i) {
            for (var n = 0; n < a.create.length; ++n) a.create[n](en, t)
            o((e = t.data.hook)) &&
              (o(e.create) && e.create(en, t), o(e.insert) && i.push(t))
          }
          function m(t) {
            var e
            if (o((e = t.fnScopeId))) l.setStyleScope(t.elm, e)
            else
              for (var i = t; i; )
                o((e = i.context)) &&
                  o((e = e.$options._scopeId)) &&
                  l.setStyleScope(t.elm, e),
                  (i = i.parent)
            o((e = Ye)) &&
              e !== t.context &&
              e !== t.fnContext &&
              o((e = e.$options._scopeId)) &&
              l.setStyleScope(t.elm, e)
          }
          function g(t, e, i, n, o, r) {
            for (; n <= o; ++n) h(i[n], r, t, e, !1, i, n)
          }
          function b(t) {
            var e,
              i,
              n = t.data
            if (o(n))
              for (
                o((e = n.hook)) && o((e = e.destroy)) && e(t), e = 0;
                e < a.destroy.length;
                ++e
              )
                a.destroy[e](t)
            if (o((e = t.children)))
              for (i = 0; i < t.children.length; ++i) b(t.children[i])
          }
          function S(t, e, i, n) {
            for (; i <= n; ++i) {
              var r = e[i]
              o(r) && (o(r.tag) ? (T(r), b(r)) : c(r.elm))
            }
          }
          function T(t, e) {
            if (o(e) || o(t.data)) {
              var i,
                n = a.remove.length + 1
              for (
                o(e)
                  ? (e.listeners += n)
                  : (e = (function(t, e) {
                      function i() {
                        0 === --i.listeners && c(t)
                      }
                      return (i.listeners = e), i
                    })(t.elm, n)),
                  o((i = t.componentInstance)) &&
                    o((i = i._vnode)) &&
                    o(i.data) &&
                    T(i, e),
                  i = 0;
                i < a.remove.length;
                ++i
              )
                a.remove[i](t, e)
              o((i = t.data.hook)) && o((i = i.remove)) ? i(t, e) : e()
            } else c(t.elm)
          }
          function w(t, e, i, n) {
            for (var r = i; r < n; r++) {
              var s = e[r]
              if (o(s) && on(t, s)) return r
            }
          }
          function x(t, e, i, s, u, c) {
            if (t !== e) {
              o(e.elm) && o(s) && (e = s[u] = gt(e))
              var p = (e.elm = t.elm)
              if (r(t.isAsyncPlaceholder))
                o(e.asyncFactory.resolved)
                  ? k(t.elm, e, i)
                  : (e.isAsyncPlaceholder = !0)
              else if (
                r(e.isStatic) &&
                r(t.isStatic) &&
                e.key === t.key &&
                (r(e.isCloned) || r(e.isOnce))
              )
                e.componentInstance = t.componentInstance
              else {
                var f,
                  d = e.data
                o(d) && o((f = d.hook)) && o((f = f.prepatch)) && f(t, e)
                var y = t.children,
                  v = e.children
                if (o(d) && _(e)) {
                  for (f = 0; f < a.update.length; ++f) a.update[f](t, e)
                  o((f = d.hook)) && o((f = f.update)) && f(t, e)
                }
                n(e.text)
                  ? o(y) && o(v)
                    ? y !== v &&
                      (function(t, e, i, r, s) {
                        for (
                          var a,
                            u,
                            c,
                            p = 0,
                            f = 0,
                            d = e.length - 1,
                            y = e[0],
                            _ = e[d],
                            v = i.length - 1,
                            m = i[0],
                            b = i[v],
                            T = !s;
                          p <= d && f <= v;

                        )
                          n(y)
                            ? (y = e[++p])
                            : n(_)
                            ? (_ = e[--d])
                            : on(y, m)
                            ? (x(y, m, r, i, f), (y = e[++p]), (m = i[++f]))
                            : on(_, b)
                            ? (x(_, b, r, i, v), (_ = e[--d]), (b = i[--v]))
                            : on(y, b)
                            ? (x(y, b, r, i, v),
                              T &&
                                l.insertBefore(t, y.elm, l.nextSibling(_.elm)),
                              (y = e[++p]),
                              (b = i[--v]))
                            : on(_, m)
                            ? (x(_, m, r, i, f),
                              T && l.insertBefore(t, _.elm, y.elm),
                              (_ = e[--d]),
                              (m = i[++f]))
                            : (n(a) && (a = rn(e, p, d)),
                              n((u = o(m.key) ? a[m.key] : w(m, e, p, d)))
                                ? h(m, r, t, y.elm, !1, i, f)
                                : on((c = e[u]), m)
                                ? (x(c, m, r, i, f),
                                  (e[u] = void 0),
                                  T && l.insertBefore(t, c.elm, y.elm))
                                : h(m, r, t, y.elm, !1, i, f),
                              (m = i[++f]))
                        p > d
                          ? g(t, n(i[v + 1]) ? null : i[v + 1].elm, i, f, v, r)
                          : f > v && S(0, e, p, d)
                      })(p, y, v, i, c)
                    : o(v)
                    ? (o(t.text) && l.setTextContent(p, ''),
                      g(p, null, v, 0, v.length - 1, i))
                    : o(y)
                    ? S(0, y, 0, y.length - 1)
                    : o(t.text) && l.setTextContent(p, '')
                  : t.text !== e.text && l.setTextContent(p, e.text),
                  o(d) && o((f = d.hook)) && o((f = f.postpatch)) && f(t, e)
              }
            }
          }
          function A(t, e, i) {
            if (r(i) && o(t.parent)) t.parent.data.pendingInsert = e
            else for (var n = 0; n < e.length; ++n) e[n].data.hook.insert(e[n])
          }
          var O = y('attrs,class,staticClass,staticStyle,key')
          function k(t, e, i, n) {
            var s,
              a = e.tag,
              u = e.data,
              l = e.children
            if (
              ((n = n || (u && u.pre)),
              (e.elm = t),
              r(e.isComment) && o(e.asyncFactory))
            )
              return (e.isAsyncPlaceholder = !0), !0
            if (
              o(u) &&
              (o((s = u.hook)) && o((s = s.init)) && s(e, !0),
              o((s = e.componentInstance)))
            )
              return p(e, i), !0
            if (o(a)) {
              if (o(l))
                if (t.hasChildNodes())
                  if (
                    o((s = u)) &&
                    o((s = s.domProps)) &&
                    o((s = s.innerHTML))
                  ) {
                    if (s !== t.innerHTML) return !1
                  } else {
                    for (
                      var c = !0, h = t.firstChild, f = 0;
                      f < l.length;
                      f++
                    ) {
                      if (!h || !k(h, l[f], i, n)) {
                        c = !1
                        break
                      }
                      h = h.nextSibling
                    }
                    if (!c || h) return !1
                  }
                else d(e, l, i)
              if (o(u)) {
                var y = !1
                for (var _ in u)
                  if (!O(_)) {
                    ;(y = !0), v(e, i)
                    break
                  }
                !y && u.class && ne(u.class)
              }
            } else t.data !== e.text && (t.data = e.text)
            return !0
          }
          return function(t, e, i, s) {
            if (!n(e)) {
              var u,
                c = !1,
                p = []
              if (n(t)) (c = !0), h(e, p)
              else {
                var f = o(t.nodeType)
                if (!f && on(t, e)) x(t, e, p, null, null, s)
                else {
                  if (f) {
                    if (
                      (1 === t.nodeType &&
                        t.hasAttribute(N) &&
                        (t.removeAttribute(N), (i = !0)),
                      r(i) && k(t, e, p))
                    )
                      return A(e, p, !0), t
                    ;(u = t),
                      (t = new yt(
                        l.tagName(u).toLowerCase(),
                        {},
                        [],
                        void 0,
                        u
                      ))
                  }
                  var d = t.elm,
                    y = l.parentNode(d)
                  if (
                    (h(e, p, d._leaveCb ? null : y, l.nextSibling(d)),
                    o(e.parent))
                  )
                    for (var v = e.parent, m = _(e); v; ) {
                      for (var g = 0; g < a.destroy.length; ++g) a.destroy[g](v)
                      if (((v.elm = e.elm), m)) {
                        for (var T = 0; T < a.create.length; ++T)
                          a.create[T](en, v)
                        var w = v.data.hook.insert
                        if (w.merged)
                          for (var O = 1; O < w.fns.length; O++) w.fns[O]()
                      } else tn(v)
                      v = v.parent
                    }
                  o(y) ? S(0, [t], 0, 0) : o(t.tag) && b(t)
                }
              }
              return A(e, p, c), e.elm
            }
            o(t) && b(t)
          }
        })({
          nodeOps: Ji,
          modules: [
            _n,
            gn,
            Pn,
            Fn,
            Un,
            W
              ? {
                  create: yo,
                  activate: yo,
                  remove: function(t, e) {
                    !0 !== t.data.show ? ho(t, e) : e()
                  }
                }
              : {}
          ].concat(pn)
        })
        Y &&
          document.addEventListener('selectionchange', function() {
            var t = document.activeElement
            t && t.vmodel && xo(t, 'input')
          })
        var vo = {
          inserted: function(t, e, i, n) {
            'select' === i.tag
              ? (n.elm && !n.elm._vOptions
                  ? ae(i, 'postpatch', function() {
                      vo.componentUpdated(t, e, i)
                    })
                  : mo(t, e, i.context),
                (t._vOptions = [].map.call(t.options, So)))
              : ('textarea' === i.tag || Yi(t.type)) &&
                ((t._vModifiers = e.modifiers),
                e.modifiers.lazy ||
                  (t.addEventListener('compositionstart', To),
                  t.addEventListener('compositionend', wo),
                  t.addEventListener('change', wo),
                  Y && (t.vmodel = !0)))
          },
          componentUpdated: function(t, e, i) {
            if ('select' === i.tag) {
              mo(t, e, i.context)
              var n = t._vOptions,
                o = (t._vOptions = [].map.call(t.options, So))
              if (
                o.some(function(t, e) {
                  return !q(t, n[e])
                })
              )
                (t.multiple
                  ? e.value.some(function(t) {
                      return bo(t, o)
                    })
                  : e.value !== e.oldValue && bo(e.value, o)) && xo(t, 'change')
            }
          }
        }
        function mo(t, e, i) {
          go(t, e, i),
            (Z || J) &&
              setTimeout(function() {
                go(t, e, i)
              }, 0)
        }
        function go(t, e, i) {
          var n = e.value,
            o = t.multiple
          if (!o || Array.isArray(n)) {
            for (var r, s, a = 0, u = t.options.length; a < u; a++)
              if (((s = t.options[a]), o))
                (r = R(n, So(s)) > -1), s.selected !== r && (s.selected = r)
              else if (q(So(s), n))
                return void (t.selectedIndex !== a && (t.selectedIndex = a))
            o || (t.selectedIndex = -1)
          }
        }
        function bo(t, e) {
          return e.every(function(e) {
            return !q(e, t)
          })
        }
        function So(t) {
          return '_value' in t ? t._value : t.value
        }
        function To(t) {
          t.target.composing = !0
        }
        function wo(t) {
          t.target.composing &&
            ((t.target.composing = !1), xo(t.target, 'input'))
        }
        function xo(t, e) {
          var i = document.createEvent('HTMLEvents')
          i.initEvent(e, !0, !0), t.dispatchEvent(i)
        }
        function Ao(t) {
          return !t.componentInstance || (t.data && t.data.transition)
            ? t
            : Ao(t.componentInstance._vnode)
        }
        var Oo = {
            model: vo,
            show: {
              bind: function(t, e, i) {
                var n = e.value,
                  o = (i = Ao(i)).data && i.data.transition,
                  r = (t.__vOriginalDisplay =
                    'none' === t.style.display ? '' : t.style.display)
                n && o
                  ? ((i.data.show = !0),
                    co(i, function() {
                      t.style.display = r
                    }))
                  : (t.style.display = n ? r : 'none')
              },
              update: function(t, e, i) {
                var n = e.value
                !n !== !e.oldValue &&
                  ((i = Ao(i)).data && i.data.transition
                    ? ((i.data.show = !0),
                      n
                        ? co(i, function() {
                            t.style.display = t.__vOriginalDisplay
                          })
                        : ho(i, function() {
                            t.style.display = 'none'
                          }))
                    : (t.style.display = n ? t.__vOriginalDisplay : 'none'))
              },
              unbind: function(t, e, i, n, o) {
                o || (t.style.display = t.__vOriginalDisplay)
              }
            }
          },
          ko = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
          }
        function Po(t) {
          var e = t && t.componentOptions
          return e && e.Ctor.options.abstract ? Po(We(e.children)) : t
        }
        function Co(t) {
          var e = {},
            i = t.$options
          for (var n in i.propsData) e[n] = t[n]
          var o = i._parentListeners
          for (var r in o) e[T(r)] = o[r]
          return e
        }
        function Eo(t, e) {
          if (/\d-keep-alive$/.test(e.tag))
            return t('keep-alive', { props: e.componentOptions.propsData })
        }
        var Fo = function(t) {
            return t.tag || ze(t)
          },
          Mo = function(t) {
            return 'show' === t.name
          },
          qo = {
            name: 'transition',
            props: ko,
            abstract: !0,
            render: function(t) {
              var e = this,
                i = this.$slots.default
              if (i && (i = i.filter(Fo)).length) {
                0
                var n = this.mode
                0
                var o = i[0]
                if (
                  (function(t) {
                    for (; (t = t.parent); ) if (t.data.transition) return !0
                  })(this.$vnode)
                )
                  return o
                var r = Po(o)
                if (!r) return o
                if (this._leaving) return Eo(t, o)
                var a = '__transition-' + this._uid + '-'
                r.key =
                  null == r.key
                    ? r.isComment
                      ? a + 'comment'
                      : a + r.tag
                    : s(r.key)
                    ? 0 === String(r.key).indexOf(a)
                      ? r.key
                      : a + r.key
                    : r.key
                var u = ((r.data || (r.data = {})).transition = Co(this)),
                  l = this._vnode,
                  c = Po(l)
                if (
                  (r.data.directives &&
                    r.data.directives.some(Mo) &&
                    (r.data.show = !0),
                  c &&
                    c.data &&
                    !(function(t, e) {
                      return e.key === t.key && e.tag === t.tag
                    })(r, c) &&
                    !ze(c) &&
                    (!c.componentInstance ||
                      !c.componentInstance._vnode.isComment))
                ) {
                  var h = (c.data.transition = P({}, u))
                  if ('out-in' === n)
                    return (
                      (this._leaving = !0),
                      ae(h, 'afterLeave', function() {
                        ;(e._leaving = !1), e.$forceUpdate()
                      }),
                      Eo(t, o)
                    )
                  if ('in-out' === n) {
                    if (ze(r)) return l
                    var p,
                      f = function() {
                        p()
                      }
                    ae(u, 'afterEnter', f),
                      ae(u, 'enterCancelled', f),
                      ae(h, 'delayLeave', function(t) {
                        p = t
                      })
                  }
                }
                return o
              }
            }
          },
          Ro = P({ tag: String, moveClass: String }, ko)
        function jo(t) {
          t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }
        function No(t) {
          t.data.newPos = t.elm.getBoundingClientRect()
        }
        function Do(t) {
          var e = t.data.pos,
            i = t.data.newPos,
            n = e.left - i.left,
            o = e.top - i.top
          if (n || o) {
            t.data.moved = !0
            var r = t.elm.style
            ;(r.transform = r.WebkitTransform =
              'translate(' + n + 'px,' + o + 'px)'),
              (r.transitionDuration = '0s')
          }
        }
        delete Ro.mode
        var Io = {
          Transition: qo,
          TransitionGroup: {
            props: Ro,
            beforeMount: function() {
              var t = this,
                e = this._update
              this._update = function(i, n) {
                var o = Je(t)
                t.__patch__(t._vnode, t.kept, !1, !0),
                  (t._vnode = t.kept),
                  o(),
                  e.call(t, i, n)
              }
            },
            render: function(t) {
              for (
                var e = this.tag || this.$vnode.data.tag || 'span',
                  i = Object.create(null),
                  n = (this.prevChildren = this.children),
                  o = this.$slots.default || [],
                  r = (this.children = []),
                  s = Co(this),
                  a = 0;
                a < o.length;
                a++
              ) {
                var u = o[a]
                if (u.tag)
                  if (null != u.key && 0 !== String(u.key).indexOf('__vlist'))
                    r.push(u),
                      (i[u.key] = u),
                      ((u.data || (u.data = {})).transition = s)
                  else;
              }
              if (n) {
                for (var l = [], c = [], h = 0; h < n.length; h++) {
                  var p = n[h]
                  ;(p.data.transition = s),
                    (p.data.pos = p.elm.getBoundingClientRect()),
                    i[p.key] ? l.push(p) : c.push(p)
                }
                ;(this.kept = t(e, null, l)), (this.removed = c)
              }
              return t(e, null, r)
            },
            updated: function() {
              var t = this.prevChildren,
                e = this.moveClass || (this.name || 'v') + '-move'
              t.length &&
                this.hasMove(t[0].elm, e) &&
                (t.forEach(jo),
                t.forEach(No),
                t.forEach(Do),
                (this._reflow = document.body.offsetHeight),
                t.forEach(function(t) {
                  if (t.data.moved) {
                    var i = t.elm,
                      n = i.style
                    no(i, e),
                      (n.transform = n.WebkitTransform = n.transitionDuration =
                        ''),
                      i.addEventListener(
                        Jn,
                        (i._moveCb = function t(n) {
                          ;(n && n.target !== i) ||
                            (n && !/transform$/.test(n.propertyName)) ||
                            (i.removeEventListener(Jn, t),
                            (i._moveCb = null),
                            oo(i, e))
                        })
                      )
                  }
                }))
            },
            methods: {
              hasMove: function(t, e) {
                if (!Hn) return !1
                if (this._hasMove) return this._hasMove
                var i = t.cloneNode()
                t._transitionClasses &&
                  t._transitionClasses.forEach(function(t) {
                    zn(i, t)
                  }),
                  Gn(i, e),
                  (i.style.display = 'none'),
                  this.$el.appendChild(i)
                var n = ao(i)
                return this.$el.removeChild(i), (this._hasMove = n.hasTransform)
              }
            }
          }
        }
        ;(xi.config.mustUseProp = function(t, e, i) {
          return (
            ('value' === i && qi(t) && 'button' !== e) ||
            ('selected' === i && 'option' === t) ||
            ('checked' === i && 'input' === t) ||
            ('muted' === i && 'video' === t)
          )
        }),
          (xi.config.isReservedTag = Xi),
          (xi.config.isReservedAttr = Mi),
          (xi.config.getTagNamespace = function(t) {
            return Hi(t) ? 'svg' : 'math' === t ? 'math' : void 0
          }),
          (xi.config.isUnknownElement = function(t) {
            if (!W) return !0
            if (Xi(t)) return !1
            if (((t = t.toLowerCase()), null != Zi[t])) return Zi[t]
            var e = document.createElement(t)
            return t.indexOf('-') > -1
              ? (Zi[t] =
                  e.constructor === window.HTMLUnknownElement ||
                  e.constructor === window.HTMLElement)
              : (Zi[t] = /HTMLUnknownElement/.test(e.toString()))
          }),
          P(xi.options.directives, Oo),
          P(xi.options.components, Io),
          (xi.prototype.__patch__ = W ? _o : E),
          (xi.prototype.$mount = function(t, e) {
            return (function(t, e, i) {
              var n
              return (
                (t.$el = e),
                t.$options.render || (t.$options.render = vt),
                ei(t, 'beforeMount'),
                (n = function() {
                  t._update(t._render(), i)
                }),
                new fi(
                  t,
                  n,
                  E,
                  {
                    before: function() {
                      t._isMounted && !t._isDestroyed && ei(t, 'beforeUpdate')
                    }
                  },
                  !0
                ),
                (i = !1),
                null == t.$vnode && ((t._isMounted = !0), ei(t, 'mounted')),
                t
              )
            })(
              this,
              (t =
                t && W
                  ? (function(t) {
                      if ('string' === typeof t) {
                        var e = document.querySelector(t)
                        return e || document.createElement('div')
                      }
                      return t
                    })(t)
                  : void 0),
              e
            )
          }),
          W &&
            setTimeout(function() {
              L.devtools && rt && rt.emit('init', xi)
            }, 0),
          (e.a = xi)
      }.call(this, i(33)))
    },
    function(t, e, i) {
      'use strict'
      var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        r = o && !n.call({ 1: 2 }, 1)
      e.f = r
        ? function(t) {
            var e = o(this, t)
            return !!e && e.enumerable
          }
        : n
    },
    function(t, e, i) {
      var n = i(5),
        o = i(35),
        r = ''.split
      t.exports = n(function() {
        return !Object('z').propertyIsEnumerable(0)
      })
        ? function(t) {
            return 'String' == o(t) ? r.call(t, '') : Object(t)
          }
        : Object
    },
    function(t, e, i) {
      var n = i(8),
        o = i(5),
        r = i(49)
      t.exports =
        !n &&
        !o(function() {
          return (
            7 !=
            Object.defineProperty(r('div'), 'a', {
              get: function() {
                return 7
              }
            }).a
          )
        })
    },
    function(t, e, i) {
      var n = i(1),
        o = i(6),
        r = n.document,
        s = o(r) && o(r.createElement)
      t.exports = function(t) {
        return s ? r.createElement(t) : {}
      }
    },
    function(t, e, i) {
      var n = i(14)
      t.exports = n('native-function-to-string', Function.toString)
    },
    function(t, e, i) {
      var n = i(4),
        o = i(74),
        r = i(34),
        s = i(7)
      t.exports = function(t, e) {
        for (var i = o(e), a = s.f, u = r.f, l = 0; l < i.length; l++) {
          var c = i[l]
          n(t, c) || a(t, c, u(e, c))
        }
      }
    },
    function(t, e, i) {
      var n = i(53),
        o = i(1),
        r = function(t) {
          return 'function' == typeof t ? t : void 0
        }
      t.exports = function(t, e) {
        return arguments.length < 2
          ? r(n[t]) || r(o[t])
          : (n[t] && n[t][e]) || (o[t] && o[t][e])
      }
    },
    function(t, e, i) {
      t.exports = i(1)
    },
    function(t, e, i) {
      var n = i(4),
        o = i(13),
        r = i(75).indexOf,
        s = i(22)
      t.exports = function(t, e) {
        var i,
          a = o(t),
          u = 0,
          l = []
        for (i in a) !n(s, i) && n(a, i) && l.push(i)
        for (; e.length > u; ) n(a, (i = e[u++])) && (~r(l, i) || l.push(i))
        return l
      }
    },
    function(t, e) {
      e.f = Object.getOwnPropertySymbols
    },
    function(t, e, i) {
      var n = i(5)
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function() {
          return !String(Symbol())
        })
    },
    function(t, e, i) {
      var n = i(10),
        o = i(78),
        r = i(42),
        s = i(22),
        a = i(79),
        u = i(49),
        l = i(21)('IE_PROTO'),
        c = function() {},
        h = function() {
          var t,
            e = u('iframe'),
            i = r.length
          for (
            e.style.display = 'none',
              a.appendChild(e),
              e.src = String('javascript:'),
              (t = e.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              h = t.F;
            i--;

          )
            delete h.prototype[r[i]]
          return h()
        }
      ;(t.exports =
        Object.create ||
        function(t, e) {
          var i
          return (
            null !== t
              ? ((c.prototype = n(t)),
                (i = new c()),
                (c.prototype = null),
                (i[l] = t))
              : (i = h()),
            void 0 === e ? i : o(i, e)
          )
        }),
        (s[l] = !0)
    },
    function(t, e, i) {
      var n = i(54),
        o = i(42)
      t.exports =
        Object.keys ||
        function(t) {
          return n(t, o)
        }
    },
    function(t, e, i) {
      e.f = i(2)
    },
    function(t, e, i) {
      var n = i(82)
      t.exports = function(t, e, i) {
        if ((n(t), void 0 === e)) return t
        switch (i) {
          case 0:
            return function() {
              return t.call(e)
            }
          case 1:
            return function(i) {
              return t.call(e, i)
            }
          case 2:
            return function(i, n) {
              return t.call(e, i, n)
            }
          case 3:
            return function(i, n, o) {
              return t.call(e, i, n, o)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    function(t, e, i) {
      var n = i(6),
        o = i(43),
        r = i(2)('species')
      t.exports = function(t, e) {
        var i
        return (
          o(t) &&
            ('function' != typeof (i = t.constructor) ||
            (i !== Array && !o(i.prototype))
              ? n(i) && null === (i = i[r]) && (i = void 0)
              : (i = void 0)),
          new (void 0 === i ? Array : i)(0 === e ? 0 : e)
        )
      }
    },
    function(t, e, i) {
      'use strict'
      var n = i(18),
        o = i(7),
        r = i(12)
      t.exports = function(t, e, i) {
        var s = n(e)
        s in t ? o.f(t, s, r(0, i)) : (t[s] = i)
      }
    },
    function(t, e, i) {
      var n = i(35),
        o = i(2)('toStringTag'),
        r =
          'Arguments' ==
          n(
            (function() {
              return arguments
            })()
          )
      t.exports = function(t) {
        var e, i, s
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (i = (function(t, e) {
              try {
                return t[e]
              } catch (i) {}
            })((e = Object(t)), o))
          ? i
          : r
          ? n(e)
          : 'Object' == (s = n(e)) && 'function' == typeof e.callee
          ? 'Arguments'
          : s
      }
    },
    function(t, e, i) {
      'use strict'
      var n,
        o,
        r,
        s = i(65),
        a = i(9),
        u = i(4),
        l = i(2),
        c = i(20),
        h = l('iterator'),
        p = !1
      ;[].keys &&
        ('next' in (r = [].keys())
          ? (o = s(s(r))) !== Object.prototype && (n = o)
          : (p = !0)),
        void 0 == n && (n = {}),
        c ||
          u(n, h) ||
          a(n, h, function() {
            return this
          }),
        (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: p })
    },
    function(t, e, i) {
      var n = i(4),
        o = i(15),
        r = i(21),
        s = i(112),
        a = r('IE_PROTO'),
        u = Object.prototype
      t.exports = s
        ? Object.getPrototypeOf
        : function(t) {
            return (
              (t = o(t)),
              n(t, a)
                ? t[a]
                : 'function' == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? u
                : null
            )
          }
    },
    function(t, e, i) {
      'use strict'
      var n = i(116)
      function o() {}
      var r = null,
        s = {}
      function a(t) {
        if ('object' !== typeof this)
          throw new TypeError('Promises must be constructed via new')
        if ('function' !== typeof t)
          throw new TypeError(
            "Promise constructor's argument is not a function"
          )
        ;(this._h = 0),
          (this._i = 0),
          (this._j = null),
          (this._k = null),
          t !== o && f(t, this)
      }
      function u(t, e) {
        for (; 3 === t._i; ) t = t._j
        if ((a._l && a._l(t), 0 === t._i))
          return 0 === t._h
            ? ((t._h = 1), void (t._k = e))
            : 1 === t._h
            ? ((t._h = 2), void (t._k = [t._k, e]))
            : void t._k.push(e)
        !(function(t, e) {
          n(function() {
            var i = 1 === t._i ? e.onFulfilled : e.onRejected
            if (null !== i) {
              var n = (function(t, e) {
                try {
                  return t(e)
                } catch (i) {
                  return (r = i), s
                }
              })(i, t._j)
              n === s ? c(e.promise, r) : l(e.promise, n)
            } else 1 === t._i ? l(e.promise, t._j) : c(e.promise, t._j)
          })
        })(t, e)
      }
      function l(t, e) {
        if (e === t)
          return c(
            t,
            new TypeError('A promise cannot be resolved with itself.')
          )
        if (e && ('object' === typeof e || 'function' === typeof e)) {
          var i = (function(t) {
            try {
              return t.then
            } catch (e) {
              return (r = e), s
            }
          })(e)
          if (i === s) return c(t, r)
          if (i === t.then && e instanceof a)
            return (t._i = 3), (t._j = e), void h(t)
          if ('function' === typeof i) return void f(i.bind(e), t)
        }
        ;(t._i = 1), (t._j = e), h(t)
      }
      function c(t, e) {
        ;(t._i = 2), (t._j = e), a._m && a._m(t, e), h(t)
      }
      function h(t) {
        if ((1 === t._h && (u(t, t._k), (t._k = null)), 2 === t._h)) {
          for (var e = 0; e < t._k.length; e++) u(t, t._k[e])
          t._k = null
        }
      }
      function p(t, e, i) {
        ;(this.onFulfilled = 'function' === typeof t ? t : null),
          (this.onRejected = 'function' === typeof e ? e : null),
          (this.promise = i)
      }
      function f(t, e) {
        var i = !1,
          n = (function(t, e, i) {
            try {
              t(e, i)
            } catch (n) {
              return (r = n), s
            }
          })(
            t,
            function(t) {
              i || ((i = !0), l(e, t))
            },
            function(t) {
              i || ((i = !0), c(e, t))
            }
          )
        i || n !== s || ((i = !0), c(e, r))
      }
      ;(t.exports = a),
        (a._l = null),
        (a._m = null),
        (a._n = o),
        (a.prototype.then = function(t, e) {
          if (this.constructor !== a)
            return (function(t, e, i) {
              return new t.constructor(function(n, r) {
                var s = new a(o)
                s.then(n, r), u(t, new p(e, i, s))
              })
            })(this, t, e)
          var i = new a(o)
          return u(this, new p(t, e, i)), i
        })
    },
    function(t, e, i) {
      'use strict'
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      i.d(e, 'a', function() {
        return n
      })
    },
    function(t, e, i) {
      'use strict'
      function n(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      function o(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
      }
      i.d(e, 'a', function() {
        return o
      })
    },
    ,
    ,
    function(t, e, i) {
      'use strict'
      i(72),
        i(83),
        i(84),
        i(85),
        i(86),
        i(87),
        i(88),
        i(89),
        i(90),
        i(91),
        i(92),
        i(93),
        i(94),
        i(95),
        i(96),
        i(98),
        i(104),
        i(105),
        i(106),
        i(108),
        'undefined' === typeof Promise &&
          (i(115).enable(), (window.Promise = i(117))),
        (Object.assign = i(118))
    },
    function(t, e, i) {
      'use strict'
      var n = i(11),
        o = i(1),
        r = i(20),
        s = i(8),
        a = i(56),
        u = i(5),
        l = i(4),
        c = i(43),
        h = i(6),
        p = i(10),
        f = i(15),
        d = i(13),
        y = i(18),
        _ = i(12),
        v = i(57),
        m = i(58),
        g = i(40),
        b = i(80),
        S = i(55),
        T = i(34),
        w = i(7),
        x = i(46),
        A = i(9),
        O = i(19),
        k = i(14),
        P = i(21),
        C = i(22),
        E = i(39),
        F = i(2),
        M = i(59),
        q = i(3),
        R = i(16),
        j = i(38),
        N = i(81).forEach,
        D = P('hidden'),
        I = F('toPrimitive'),
        L = j.set,
        B = j.getterFor('Symbol'),
        V = Object.prototype,
        U = o.Symbol,
        $ = o.JSON,
        G = $ && $.stringify,
        z = T.f,
        W = w.f,
        Q = b.f,
        H = x.f,
        X = k('symbols'),
        Z = k('op-symbols'),
        Y = k('string-to-symbol-registry'),
        J = k('symbol-to-string-registry'),
        K = k('wks'),
        tt = o.QObject,
        et = !tt || !tt.prototype || !tt.prototype.findChild,
        it =
          s &&
          u(function() {
            return (
              7 !=
              v(
                W({}, 'a', {
                  get: function() {
                    return W(this, 'a', { value: 7 }).a
                  }
                })
              ).a
            )
          })
            ? function(t, e, i) {
                var n = z(V, e)
                n && delete V[e], W(t, e, i), n && t !== V && W(V, e, n)
              }
            : W,
        nt = function(t, e) {
          var i = (X[t] = v(U.prototype))
          return (
            L(i, { type: 'Symbol', tag: t, description: e }),
            s || (i.description = e),
            i
          )
        },
        ot =
          a && 'symbol' == typeof U.iterator
            ? function(t) {
                return 'symbol' == typeof t
              }
            : function(t) {
                return Object(t) instanceof U
              },
        rt = function(t, e, i) {
          t === V && rt(Z, e, i), p(t)
          var n = y(e, !0)
          return (
            p(i),
            l(X, n)
              ? (i.enumerable
                  ? (l(t, D) && t[D][n] && (t[D][n] = !1),
                    (i = v(i, { enumerable: _(0, !1) })))
                  : (l(t, D) || W(t, D, _(1, {})), (t[D][n] = !0)),
                it(t, n, i))
              : W(t, n, i)
          )
        },
        st = function(t, e) {
          p(t)
          var i = d(e),
            n = m(i).concat(ct(i))
          return (
            N(n, function(e) {
              ;(s && !at.call(i, e)) || rt(t, e, i[e])
            }),
            t
          )
        },
        at = function(t) {
          var e = y(t, !0),
            i = H.call(this, e)
          return (
            !(this === V && l(X, e) && !l(Z, e)) &&
            (!(i || !l(this, e) || !l(X, e) || (l(this, D) && this[D][e])) || i)
          )
        },
        ut = function(t, e) {
          var i = d(t),
            n = y(e, !0)
          if (i !== V || !l(X, n) || l(Z, n)) {
            var o = z(i, n)
            return (
              !o || !l(X, n) || (l(i, D) && i[D][n]) || (o.enumerable = !0), o
            )
          }
        },
        lt = function(t) {
          var e = Q(d(t)),
            i = []
          return (
            N(e, function(t) {
              l(X, t) || l(C, t) || i.push(t)
            }),
            i
          )
        },
        ct = function(t) {
          var e = t === V,
            i = Q(e ? Z : d(t)),
            n = []
          return (
            N(i, function(t) {
              !l(X, t) || (e && !l(V, t)) || n.push(X[t])
            }),
            n
          )
        }
      a ||
        (O(
          (U = function() {
            if (this instanceof U)
              throw TypeError('Symbol is not a constructor')
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              e = E(t),
              i = function t(i) {
                this === V && t.call(Z, i),
                  l(this, D) && l(this[D], e) && (this[D][e] = !1),
                  it(this, e, _(1, i))
              }
            return s && et && it(V, e, { configurable: !0, set: i }), nt(e, t)
          }).prototype,
          'toString',
          function() {
            return B(this).tag
          }
        ),
        (x.f = at),
        (w.f = rt),
        (T.f = ut),
        (g.f = b.f = lt),
        (S.f = ct),
        s &&
          (W(U.prototype, 'description', {
            configurable: !0,
            get: function() {
              return B(this).description
            }
          }),
          r || O(V, 'propertyIsEnumerable', at, { unsafe: !0 })),
        (M.f = function(t) {
          return nt(F(t), t)
        })),
        n({ global: !0, wrap: !0, forced: !a, sham: !a }, { Symbol: U }),
        N(m(K), function(t) {
          q(t)
        }),
        n(
          { target: 'Symbol', stat: !0, forced: !a },
          {
            for: function(t) {
              var e = String(t)
              if (l(Y, e)) return Y[e]
              var i = U(e)
              return (Y[e] = i), (J[i] = e), i
            },
            keyFor: function(t) {
              if (!ot(t)) throw TypeError(t + ' is not a symbol')
              if (l(J, t)) return J[t]
            },
            useSetter: function() {
              et = !0
            },
            useSimple: function() {
              et = !1
            }
          }
        ),
        n(
          { target: 'Object', stat: !0, forced: !a, sham: !s },
          {
            create: function(t, e) {
              return void 0 === e ? v(t) : st(v(t), e)
            },
            defineProperty: rt,
            defineProperties: st,
            getOwnPropertyDescriptor: ut
          }
        ),
        n(
          { target: 'Object', stat: !0, forced: !a },
          { getOwnPropertyNames: lt, getOwnPropertySymbols: ct }
        ),
        n(
          {
            target: 'Object',
            stat: !0,
            forced: u(function() {
              S.f(1)
            })
          },
          {
            getOwnPropertySymbols: function(t) {
              return S.f(f(t))
            }
          }
        ),
        $ &&
          n(
            {
              target: 'JSON',
              stat: !0,
              forced:
                !a ||
                u(function() {
                  var t = U()
                  return (
                    '[null]' != G([t]) ||
                    '{}' != G({ a: t }) ||
                    '{}' != G(Object(t))
                  )
                })
            },
            {
              stringify: function(t) {
                for (var e, i, n = [t], o = 1; arguments.length > o; )
                  n.push(arguments[o++])
                if (((i = e = n[1]), (h(e) || void 0 !== t) && !ot(t)))
                  return (
                    c(e) ||
                      (e = function(t, e) {
                        if (
                          ('function' == typeof i && (e = i.call(this, t, e)),
                          !ot(e))
                        )
                          return e
                      }),
                    (n[1] = e),
                    G.apply($, n)
                  )
              }
            }
          ),
        U.prototype[I] || A(U.prototype, I, U.prototype.valueOf),
        R(U, 'Symbol'),
        (C[D] = !0)
    },
    function(t, e, i) {
      var n = i(1),
        o = i(50),
        r = n.WeakMap
      t.exports = 'function' === typeof r && /native code/.test(o.call(r))
    },
    function(t, e, i) {
      var n = i(52),
        o = i(40),
        r = i(55),
        s = i(10)
      t.exports =
        n('Reflect', 'ownKeys') ||
        function(t) {
          var e = o.f(s(t)),
            i = r.f
          return i ? e.concat(i(t)) : e
        }
    },
    function(t, e, i) {
      var n = i(13),
        o = i(23),
        r = i(76),
        s = function(t) {
          return function(e, i, s) {
            var a,
              u = n(e),
              l = o(u.length),
              c = r(s, l)
            if (t && i != i) {
              for (; l > c; ) if ((a = u[c++]) != a) return !0
            } else
              for (; l > c; c++)
                if ((t || c in u) && u[c] === i) return t || c || 0
            return !t && -1
          }
        }
      t.exports = { includes: s(!0), indexOf: s(!1) }
    },
    function(t, e, i) {
      var n = i(41),
        o = Math.max,
        r = Math.min
      t.exports = function(t, e) {
        var i = n(t)
        return i < 0 ? o(i + e, 0) : r(i, e)
      }
    },
    function(t, e, i) {
      var n = i(5),
        o = /#|\.prototype\./,
        r = function(t, e) {
          var i = a[s(t)]
          return i == l || (i != u && ('function' == typeof e ? n(e) : !!e))
        },
        s = (r.normalize = function(t) {
          return String(t)
            .replace(o, '.')
            .toLowerCase()
        }),
        a = (r.data = {}),
        u = (r.NATIVE = 'N'),
        l = (r.POLYFILL = 'P')
      t.exports = r
    },
    function(t, e, i) {
      var n = i(8),
        o = i(7),
        r = i(10),
        s = i(58)
      t.exports = n
        ? Object.defineProperties
        : function(t, e) {
            r(t)
            for (var i, n = s(e), a = n.length, u = 0; a > u; )
              o.f(t, (i = n[u++]), e[i])
            return t
          }
    },
    function(t, e, i) {
      var n = i(52)
      t.exports = n('document', 'documentElement')
    },
    function(t, e, i) {
      var n = i(13),
        o = i(40).f,
        r = {}.toString,
        s =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      t.exports.f = function(t) {
        return s && '[object Window]' == r.call(t)
          ? (function(t) {
              try {
                return o(t)
              } catch (e) {
                return s.slice()
              }
            })(t)
          : o(n(t))
      }
    },
    function(t, e, i) {
      var n = i(60),
        o = i(47),
        r = i(15),
        s = i(23),
        a = i(61),
        u = [].push,
        l = function(t) {
          var e = 1 == t,
            i = 2 == t,
            l = 3 == t,
            c = 4 == t,
            h = 6 == t,
            p = 5 == t || h
          return function(f, d, y, _) {
            for (
              var v,
                m,
                g = r(f),
                b = o(g),
                S = n(d, y, 3),
                T = s(b.length),
                w = 0,
                x = _ || a,
                A = e ? x(f, T) : i ? x(f, 0) : void 0;
              T > w;
              w++
            )
              if ((p || w in b) && ((m = S((v = b[w]), w, g)), t))
                if (e) A[w] = m
                else if (m)
                  switch (t) {
                    case 3:
                      return !0
                    case 5:
                      return v
                    case 6:
                      return w
                    case 2:
                      u.call(A, v)
                  }
                else if (c) return !1
            return h ? -1 : l || c ? c : A
          }
        }
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6)
      }
    },
    function(t, e) {
      t.exports = function(t) {
        if ('function' != typeof t)
          throw TypeError(String(t) + ' is not a function')
        return t
      }
    },
    function(t, e, i) {
      'use strict'
      var n = i(11),
        o = i(8),
        r = i(1),
        s = i(4),
        a = i(6),
        u = i(7).f,
        l = i(51),
        c = r.Symbol
      if (
        o &&
        'function' == typeof c &&
        (!('description' in c.prototype) || void 0 !== c().description)
      ) {
        var h = {},
          p = function() {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof p ? new c(t) : void 0 === t ? c() : c(t)
            return '' === t && (h[e] = !0), e
          }
        l(p, c)
        var f = (p.prototype = c.prototype)
        f.constructor = p
        var d = f.toString,
          y = 'Symbol(test)' == String(c('test')),
          _ = /^Symbol\((.*)\)[^)]+$/
        u(f, 'description', {
          configurable: !0,
          get: function() {
            var t = a(this) ? this.valueOf() : this,
              e = d.call(t)
            if (s(h, t)) return ''
            var i = y ? e.slice(7, -1) : e.replace(_, '$1')
            return '' === i ? void 0 : i
          }
        }),
          n({ global: !0, forced: !0 }, { Symbol: p })
      }
    },
    function(t, e, i) {
      i(3)('asyncIterator')
    },
    function(t, e, i) {
      i(3)('hasInstance')
    },
    function(t, e, i) {
      i(3)('isConcatSpreadable')
    },
    function(t, e, i) {
      i(3)('iterator')
    },
    function(t, e, i) {
      i(3)('match')
    },
    function(t, e, i) {
      i(3)('replace')
    },
    function(t, e, i) {
      i(3)('search')
    },
    function(t, e, i) {
      i(3)('species')
    },
    function(t, e, i) {
      i(3)('split')
    },
    function(t, e, i) {
      i(3)('toPrimitive')
    },
    function(t, e, i) {
      i(3)('toStringTag')
    },
    function(t, e, i) {
      i(3)('unscopables')
    },
    function(t, e, i) {
      'use strict'
      var n = i(11),
        o = i(5),
        r = i(43),
        s = i(6),
        a = i(15),
        u = i(23),
        l = i(62),
        c = i(61),
        h = i(97),
        p = i(2)('isConcatSpreadable'),
        f = !o(function() {
          var t = []
          return (t[p] = !1), t.concat()[0] !== t
        }),
        d = h('concat'),
        y = function(t) {
          if (!s(t)) return !1
          var e = t[p]
          return void 0 !== e ? !!e : r(t)
        }
      n(
        { target: 'Array', proto: !0, forced: !f || !d },
        {
          concat: function(t) {
            var e,
              i,
              n,
              o,
              r,
              s = a(this),
              h = c(s, 0),
              p = 0
            for (e = -1, n = arguments.length; e < n; e++)
              if (((r = -1 === e ? s : arguments[e]), y(r))) {
                if (p + (o = u(r.length)) > 9007199254740991)
                  throw TypeError('Maximum allowed index exceeded')
                for (i = 0; i < o; i++, p++) i in r && l(h, p, r[i])
              } else {
                if (p >= 9007199254740991)
                  throw TypeError('Maximum allowed index exceeded')
                l(h, p++, r)
              }
            return (h.length = p), h
          }
        }
      )
    },
    function(t, e, i) {
      var n = i(5),
        o = i(2)('species')
      t.exports = function(t) {
        return !n(function() {
          var e = []
          return (
            ((e.constructor = {})[o] = function() {
              return { foo: 1 }
            }),
            1 !== e[t](Boolean).foo
          )
        })
      }
    },
    function(t, e, i) {
      var n = i(11),
        o = i(99)
      n(
        {
          target: 'Array',
          stat: !0,
          forced: !i(103)(function(t) {
            Array.from(t)
          })
        },
        { from: o }
      )
    },
    function(t, e, i) {
      'use strict'
      var n = i(60),
        o = i(15),
        r = i(100),
        s = i(101),
        a = i(23),
        u = i(62),
        l = i(102)
      t.exports = function(t) {
        var e,
          i,
          c,
          h,
          p = o(t),
          f = 'function' == typeof this ? this : Array,
          d = arguments.length,
          y = d > 1 ? arguments[1] : void 0,
          _ = void 0 !== y,
          v = 0,
          m = l(p)
        if (
          (_ && (y = n(y, d > 2 ? arguments[2] : void 0, 2)),
          void 0 == m || (f == Array && s(m)))
        )
          for (i = new f((e = a(p.length))); e > v; v++)
            u(i, v, _ ? y(p[v], v) : p[v])
        else
          for (h = m.call(p), i = new f(); !(c = h.next()).done; v++)
            u(i, v, _ ? r(h, y, [c.value, v], !0) : c.value)
        return (i.length = v), i
      }
    },
    function(t, e, i) {
      var n = i(10)
      t.exports = function(t, e, i, o) {
        try {
          return o ? e(n(i)[0], i[1]) : e(i)
        } catch (s) {
          var r = t.return
          throw (void 0 !== r && n(r.call(t)), s)
        }
      }
    },
    function(t, e, i) {
      var n = i(2),
        o = i(24),
        r = n('iterator'),
        s = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (o.Array === t || s[r] === t)
      }
    },
    function(t, e, i) {
      var n = i(63),
        o = i(24),
        r = i(2)('iterator')
      t.exports = function(t) {
        if (void 0 != t) return t[r] || t['@@iterator'] || o[n(t)]
      }
    },
    function(t, e, i) {
      var n = i(2)('iterator'),
        o = !1
      try {
        var r = 0,
          s = {
            next: function() {
              return { done: !!r++ }
            },
            return: function() {
              o = !0
            }
          }
        ;(s[n] = function() {
          return this
        }),
          Array.from(s, function() {
            throw 2
          })
      } catch (a) {}
      t.exports = function(t, e) {
        if (!e && !o) return !1
        var i = !1
        try {
          var r = {}
          ;(r[n] = function() {
            return {
              next: function() {
                return { done: (i = !0) }
              }
            }
          }),
            t(r)
        } catch (a) {}
        return i
      }
    },
    function(t, e, i) {
      var n = i(1)
      i(16)(n.JSON, 'JSON', !0)
    },
    function(t, e, i) {
      i(16)(Math, 'Math', !0)
    },
    function(t, e, i) {
      var n = i(19),
        o = i(107),
        r = Object.prototype
      o !== r.toString && n(r, 'toString', o, { unsafe: !0 })
    },
    function(t, e, i) {
      'use strict'
      var n = i(63),
        o = {}
      ;(o[i(2)('toStringTag')] = 'z'),
        (t.exports =
          '[object z]' !== String(o)
            ? function() {
                return '[object ' + n(this) + ']'
              }
            : o.toString)
    },
    function(t, e, i) {
      'use strict'
      var n = i(109).charAt,
        o = i(38),
        r = i(110),
        s = o.set,
        a = o.getterFor('String Iterator')
      r(
        String,
        'String',
        function(t) {
          s(this, { type: 'String Iterator', string: String(t), index: 0 })
        },
        function() {
          var t,
            e = a(this),
            i = e.string,
            o = e.index
          return o >= i.length
            ? { value: void 0, done: !0 }
            : ((t = n(i, o)), (e.index += t.length), { value: t, done: !1 })
        }
      )
    },
    function(t, e, i) {
      var n = i(41),
        o = i(36),
        r = function(t) {
          return function(e, i) {
            var r,
              s,
              a = String(o(e)),
              u = n(i),
              l = a.length
            return u < 0 || u >= l
              ? t
                ? ''
                : void 0
              : (r = a.charCodeAt(u)) < 55296 ||
                r > 56319 ||
                u + 1 === l ||
                (s = a.charCodeAt(u + 1)) < 56320 ||
                s > 57343
              ? t
                ? a.charAt(u)
                : r
              : t
              ? a.slice(u, u + 2)
              : s - 56320 + ((r - 55296) << 10) + 65536
          }
        }
      t.exports = { codeAt: r(!1), charAt: r(!0) }
    },
    function(t, e, i) {
      'use strict'
      var n = i(11),
        o = i(111),
        r = i(65),
        s = i(113),
        a = i(16),
        u = i(9),
        l = i(19),
        c = i(2),
        h = i(20),
        p = i(24),
        f = i(64),
        d = f.IteratorPrototype,
        y = f.BUGGY_SAFARI_ITERATORS,
        _ = c('iterator'),
        v = function() {
          return this
        }
      t.exports = function(t, e, i, c, f, m, g) {
        o(i, e, c)
        var b,
          S,
          T,
          w = function(t) {
            if (t === f && P) return P
            if (!y && t in O) return O[t]
            switch (t) {
              case 'keys':
              case 'values':
              case 'entries':
                return function() {
                  return new i(this, t)
                }
            }
            return function() {
              return new i(this)
            }
          },
          x = e + ' Iterator',
          A = !1,
          O = t.prototype,
          k = O[_] || O['@@iterator'] || (f && O[f]),
          P = (!y && k) || w(f),
          C = ('Array' == e && O.entries) || k
        if (
          (C &&
            ((b = r(C.call(new t()))),
            d !== Object.prototype &&
              b.next &&
              (h ||
                r(b) === d ||
                (s ? s(b, d) : 'function' != typeof b[_] && u(b, _, v)),
              a(b, x, !0, !0),
              h && (p[x] = v))),
          'values' == f &&
            k &&
            'values' !== k.name &&
            ((A = !0),
            (P = function() {
              return k.call(this)
            })),
          (h && !g) || O[_] === P || u(O, _, P),
          (p[e] = P),
          f)
        )
          if (
            ((S = {
              values: w('values'),
              keys: m ? P : w('keys'),
              entries: w('entries')
            }),
            g)
          )
            for (T in S) (!y && !A && T in O) || l(O, T, S[T])
          else n({ target: e, proto: !0, forced: y || A }, S)
        return S
      }
    },
    function(t, e, i) {
      'use strict'
      var n = i(64).IteratorPrototype,
        o = i(57),
        r = i(12),
        s = i(16),
        a = i(24),
        u = function() {
          return this
        }
      t.exports = function(t, e, i) {
        var l = e + ' Iterator'
        return (
          (t.prototype = o(n, { next: r(1, i) })),
          s(t, l, !1, !0),
          (a[l] = u),
          t
        )
      }
    },
    function(t, e, i) {
      var n = i(5)
      t.exports = !n(function() {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        )
      })
    },
    function(t, e, i) {
      var n = i(10),
        o = i(114)
      t.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function() {
              var t,
                e = !1,
                i = {}
              try {
                ;(t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  '__proto__'
                ).set).call(i, []),
                  (e = i instanceof Array)
              } catch (r) {}
              return function(i, r) {
                return n(i), o(r), e ? t.call(i, r) : (i.__proto__ = r), i
              }
            })()
          : void 0)
    },
    function(t, e, i) {
      var n = i(6)
      t.exports = function(t) {
        if (!n(t) && null !== t)
          throw TypeError("Can't set " + String(t) + ' as a prototype')
        return t
      }
    },
    function(t, e, i) {
      'use strict'
      var n = i(66),
        o = [ReferenceError, TypeError, RangeError],
        r = !1
      function s() {
        ;(r = !1), (n._l = null), (n._m = null)
      }
      function a(t, e) {
        return e.some(function(e) {
          return t instanceof e
        })
      }
      ;(e.disable = s),
        (e.enable = function(t) {
          ;(t = t || {}), r && s()
          r = !0
          var e = 0,
            i = 0,
            u = {}
          function l(e) {
            ;(t.allRejections || a(u[e].error, t.whitelist || o)) &&
              ((u[e].displayId = i++),
              t.onUnhandled
                ? ((u[e].logged = !0),
                  t.onUnhandled(u[e].displayId, u[e].error))
                : ((u[e].logged = !0),
                  (function(t, e) {
                    console.warn(
                      'Possible Unhandled Promise Rejection (id: ' + t + '):'
                    ),
                      ((e && (e.stack || e)) + '')
                        .split('\n')
                        .forEach(function(t) {
                          console.warn('  ' + t)
                        })
                  })(u[e].displayId, u[e].error)))
          }
          ;(n._l = function(e) {
            2 === e._i &&
              u[e._o] &&
              (u[e._o].logged
                ? (function(e) {
                    u[e].logged &&
                      (t.onHandled
                        ? t.onHandled(u[e].displayId, u[e].error)
                        : u[e].onUnhandled ||
                          (console.warn(
                            'Promise Rejection Handled (id: ' +
                              u[e].displayId +
                              '):'
                          ),
                          console.warn(
                            '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                              u[e].displayId +
                              '.'
                          )))
                  })(e._o)
                : clearTimeout(u[e._o].timeout),
              delete u[e._o])
          }),
            (n._m = function(t, i) {
              0 === t._h &&
                ((t._o = e++),
                (u[t._o] = {
                  displayId: null,
                  error: i,
                  timeout: setTimeout(l.bind(null, t._o), a(i, o) ? 100 : 2e3),
                  logged: !1
                }))
            })
        })
    },
    function(t, e, i) {
      'use strict'
      ;(function(e) {
        function i(t) {
          o.length || (n(), !0), (o[o.length] = t)
        }
        t.exports = i
        var n,
          o = [],
          r = 0,
          s = 1024
        function a() {
          for (; r < o.length; ) {
            var t = r
            if (((r += 1), o[t].call(), r > s)) {
              for (var e = 0, i = o.length - r; e < i; e++) o[e] = o[e + r]
              ;(o.length -= r), (r = 0)
            }
          }
          ;(o.length = 0), (r = 0), !1
        }
        var u = 'undefined' !== typeof e ? e : self,
          l = u.MutationObserver || u.WebKitMutationObserver
        function c(t) {
          return function() {
            var e = setTimeout(n, 0),
              i = setInterval(n, 50)
            function n() {
              clearTimeout(e), clearInterval(i), t()
            }
          }
        }
        ;(n =
          'function' === typeof l
            ? (function(t) {
                var e = 1,
                  i = new l(t),
                  n = document.createTextNode('')
                return (
                  i.observe(n, { characterData: !0 }),
                  function() {
                    ;(e = -e), (n.data = e)
                  }
                )
              })(a)
            : c(a)),
          (i.requestFlush = n),
          (i.makeRequestCallFromTimer = c)
      }.call(this, i(33)))
    },
    function(t, e, i) {
      'use strict'
      var n = i(66)
      t.exports = n
      var o = c(!0),
        r = c(!1),
        s = c(null),
        a = c(void 0),
        u = c(0),
        l = c('')
      function c(t) {
        var e = new n(n._n)
        return (e._i = 1), (e._j = t), e
      }
      ;(n.resolve = function(t) {
        if (t instanceof n) return t
        if (null === t) return s
        if (void 0 === t) return a
        if (!0 === t) return o
        if (!1 === t) return r
        if (0 === t) return u
        if ('' === t) return l
        if ('object' === typeof t || 'function' === typeof t)
          try {
            var e = t.then
            if ('function' === typeof e) return new n(e.bind(t))
          } catch (i) {
            return new n(function(t, e) {
              e(i)
            })
          }
        return c(t)
      }),
        (n.all = function(t) {
          var e = Array.prototype.slice.call(t)
          return new n(function(t, i) {
            if (0 === e.length) return t([])
            var o = e.length
            function r(s, a) {
              if (a && ('object' === typeof a || 'function' === typeof a)) {
                if (a instanceof n && a.then === n.prototype.then) {
                  for (; 3 === a._i; ) a = a._j
                  return 1 === a._i
                    ? r(s, a._j)
                    : (2 === a._i && i(a._j),
                      void a.then(function(t) {
                        r(s, t)
                      }, i))
                }
                var u = a.then
                if ('function' === typeof u)
                  return void new n(u.bind(a)).then(function(t) {
                    r(s, t)
                  }, i)
              }
              ;(e[s] = a), 0 === --o && t(e)
            }
            for (var s = 0; s < e.length; s++) r(s, e[s])
          })
        }),
        (n.reject = function(t) {
          return new n(function(e, i) {
            i(t)
          })
        }),
        (n.race = function(t) {
          return new n(function(e, i) {
            t.forEach(function(t) {
              n.resolve(t).then(e, i)
            })
          })
        }),
        (n.prototype.catch = function(t) {
          return this.then(null, t)
        })
    },
    function(t, e, i) {
      'use strict'
      var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable
      function s(t) {
        if (null === t || void 0 === t)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          )
        return Object(t)
      }
      t.exports = (function() {
        try {
          if (!Object.assign) return !1
          var t = new String('abc')
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1
          for (var e = {}, i = 0; i < 10; i++)
            e['_' + String.fromCharCode(i)] = i
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function(t) {
                return e[t]
              })
              .join('')
          )
            return !1
          var n = {}
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(t) {
              n[t] = t
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
          )
        } catch (o) {
          return !1
        }
      })()
        ? Object.assign
        : function(t, e) {
            for (var i, a, u = s(t), l = 1; l < arguments.length; l++) {
              for (var c in (i = Object(arguments[l])))
                o.call(i, c) && (u[c] = i[c])
              if (n) {
                a = n(i)
                for (var h = 0; h < a.length; h++)
                  r.call(i, a[h]) && (u[a[h]] = i[a[h]])
              }
            }
            return u
          }
    }
  ]
])
