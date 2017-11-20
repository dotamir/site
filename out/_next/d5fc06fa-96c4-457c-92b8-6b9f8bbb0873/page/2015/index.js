window.__NEXT_REGISTER_PAGE('/2015', function() {
  var comp = (module.exports = webpackJsonp(
    [54],
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
          c = n(d),
          s = u(103),
          p = n(s),
          _ = u(0),
          v = u(121),
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
      },
      537: function(e, t, u) {
        e.exports = u(538)
      },
      538: function(e, t, u) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = u(123),
          o = (function(e) {
            return e && e.__esModule ? e : { default: e }
          })(n)
        t.default = (0, o.default)('/')
      }
    },
    [537]
  ))
  return { page: comp.default }
})
