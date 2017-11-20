window.__NEXT_REGISTER_PAGE('/2013', function() {
  var comp = (module.exports = webpackJsonp(
    [56],
    {
      123: function(e, t, u) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = u(101),
          r = n(o),
          a = u(99),
          l = n(a),
          f = u(100),
          i = n(f),
          d = u(102),
          s = n(d),
          c = u(103),
          p = n(c),
          _ = u(0),
          v = u(121),
          h = n(v),
          y = function(e) {
            return (function(t) {
              function u() {
                return (
                  (0, l.default)(this, u),
                  (0, s.default)(
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
        t.default = y
      },
      474: function(e, t, u) {
        e.exports = u(475)
      },
      475: function(e, t, u) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = u(123),
          o = (function(e) {
            return e && e.__esModule ? e : { default: e }
          })(n)
        t.default = (0, o.default)('/essays')
      }
    },
    [474]
  ))
  return { page: comp.default }
})
