window.__NEXT_REGISTER_PAGE('/2017', function() {
  var comp = (module.exports = webpackJsonp(
    [6],
    {
      577: function(e, t, u) {
        e.exports = u(578)
      },
      578: function(e, t, u) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = u(579),
          o = (function(e) {
            return e && e.__esModule ? e : { default: e }
          })(n)
        t.default = (0, o.default)('/')
      },
      579: function(e, t, u) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = u(14),
          r = n(o),
          a = u(5),
          l = n(a),
          f = u(6),
          i = n(f),
          d = u(15),
          c = n(d),
          s = u(16),
          p = n(s),
          _ = u(2),
          v = u(28),
          h = n(v),
          w = function(e) {
            return (function(t) {
              function u() {
                return (
                  (0, l.default)(this, u),
                  (0, c.default)(
                    this,
                    (u.__proto__ || (0, r.default)(u)).apply(this, arguments)
                  )
                )
              }
              return (
                (0, p.default)(u, t),
                (0, i.default)(u, null, [
                  {
                    key: 'getInitialProps',
                    value: function(t) {
                      var u = t.res
                      return (
                        u
                          ? (u.writeHead(301, { Location: e }), u.end())
                          : '/' === e.charAt(0)
                            ? h.default.push(e)
                            : (window.location = e),
                        {}
                      )
                    }
                  }
                ]),
                u
              )
            })(_.Component)
          }
        t.default = w
      }
    },
    [577]
  ))
  return { page: comp.default }
})
