;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    134: function(t, n, e) {
      'use strict'
      e.r(n)
      var r = e(130),
        a = e.n(r),
        o = e(132),
        i = e(133),
        u = new i.Player(),
        c = { __sort__: [] },
        s = !1,
        l = ''
      function f(t, n) {
        if (c.__sort__.length > 5) {
          var e = c.__sort__.shift(0)
          delete c[e]
        }
        var r = Date.now()
        c[t] = { time: r, val: n }
        var a = c.__sort__
          .map(function(t) {
            return t.name
          })
          .indexOf(t)
        a < 0
          ? c.__sort__.push({ name: t, time: r })
          : (c.__sort__[a] = { name: t, time: r }),
          c.__sort__.sort(function(t, n) {
            return t.time - n.time
          })
      }
      function p(t) {
        return c[t]
      }
      function _(t, n) {
        return d.apply(this, arguments)
      }
      function d() {
        return (d = Object(o.a)(
          a.a.mark(function t(n, e) {
            var r, o, i
            return a.a.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      './static/midi/',
                      (r = e ? './static/midi/' + n : n),
                      (t.next = 4),
                      fetch(r)
                    )
                  case 4:
                    if (!(o = t.sent).ok) {
                      t.next = 12
                      break
                    }
                    return (t.next = 8), o.arrayBuffer()
                  case 8:
                    return (i = t.sent), t.abrupt('return', i)
                  case 12:
                    throw new Error('could not load '.concat(r))
                  case 13:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function h() {
        return (h = Object(o.a)(
          a.a.mark(function t() {
            var n,
              e,
              r,
              o = this,
              i = arguments
            return a.a.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n =
                          i.length > 0 && void 0 !== i[0] ? i[0] : 'star.mid'),
                        (e = !(i.length > 1 && void 0 !== i[1]) || i[1]),
                        !p((r = 'BUFF_' + n)))
                      ) {
                        t.next = 5
                        break
                      }
                      return t.abrupt('return', this)
                    case 5:
                      return t.abrupt(
                        'return',
                        _(n, e).then(function(t) {
                          return (
                            u.loadArrayBuffer(t),
                            f(r, t),
                            console.log(
                              '[player]',
                              'load',
                              ''.concat(n, ','),
                              'tracks',
                              u.tracks.length
                            ),
                            (s = !1),
                            (l = n),
                            o
                          )
                        })
                      )
                    case 6:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      u.on('endOfFile', function() {
        s = !0
      }),
        (n.default = {
          load: function(t, n) {
            var e = 'B64_'.concat(n)
            return p(e)
              ? this
              : (u.loadDataUri(t),
                f(e, t),
                console.log('[player]', 'load', 'tracks', u.tracks.length),
                (s = !1),
                (l = n),
                this)
          },
          loadUrl: function() {
            return h.apply(this, arguments)
          },
          setEventProxy: function(t) {
            var n = ['pause', 'stop', 'endOfFile']
            return (
              ['play', 'fileLoaded', 'midiEvent']
                .concat(n)
                .forEach(function(e) {
                  u.on(e, function() {
                    for (
                      var n = arguments.length, r = new Array(n), a = 0;
                      a < n;
                      a++
                    )
                      r[a] = arguments[a]
                    t.emit('player:'.concat(e), r)
                  }),
                    n.indexOf(e) > -1 &&
                      u.on(e, function() {
                        t.emit('player:sleep')
                      })
                }),
              this
            )
          },
          isPlaying: function() {
            return u.isPlaying()
          },
          getState: function() {
            return { isEnd: s, name: l }
          },
          play: function() {
            u.triggerPlayerEvent('play'), u.play()
          },
          toggle: function() {
            u.isPlaying() ? u.pause() : u.play()
          },
          pause: function() {
            u.triggerPlayerEvent('pause'), u.pause()
          },
          on: function(t, n) {
            u.on(t, n)
          },
          stop: function() {
            ;(s = !0), u.triggerPlayerEvent('stop'), u.stop()
          }
        })
    }
  }
])
