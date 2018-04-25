window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [7],
    {
      584: function(e, t, a) {
        e.exports = a(585)
      },
      585: function(e, t, a) {
        'use strict'
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(29),
          i = l(n),
          s = a(3),
          o = l(s),
          r = a(2),
          c = l(r),
          d = a(1),
          u = l(d),
          p = a(85),
          x = l(p),
          f = a(54),
          m = l(f),
          j = a(87),
          g = l(j),
          h = a(40),
          b = (l(h), a(83)),
          y = l(b),
          Y = a(86),
          E = l(Y)
        x.default.loadPersian({
          usePersianDigits: !0,
          dialect: 'persian-modern'
        })
        var M = function(e) {
            return (0, u.default)(e, 'DD/MM/YYYY')
          },
          k = function(e) {
            return (0, x.default)(e, 'DD/MM/YYYY')
          },
          v = function() {
            return E.default
              .map(function(e) {
                return (0,
                i.default)({ url: '/' + M(e.date).year() + '/' + e.id }, e)
              })
              .sort(function(e, t) {
                return M(t.date).diff(M(e.date))
              })
          }
        t.default = function() {
          return c.default.createElement(
            y.default,
            null,
            c.default.createElement(g.default, null),
            c.default.createElement('img', {
              src: '/static/lightning.svg',
              className: 'jsx-2461830353 logo-type'
            }),
            c.default.createElement(
              'h1',
              { className: 'jsx-2461830353' },
              'امیرحسین اسلامی'
            ),
            c.default.createElement(
              'ul',
              { className: 'jsx-2461830353' },
              v().map(function(e) {
                return c.default.createElement(
                  'li',
                  { key: e.id, className: 'jsx-2461830353' },
                  c.default.createElement(
                    m.default,
                    { href: e.url, prefetch: !0 },
                    c.default.createElement(
                      'a',
                      { className: 'jsx-2461830353' },
                      c.default.createElement(
                        'b',
                        { className: 'jsx-2461830353' },
                        e.title
                      ),
                      c.default.createElement(
                        'span',
                        { className: 'jsx-2461830353' },
                        k(e.date).format('jD jMMMM jYYYY')
                      )
                    )
                  )
                )
              })
            ),
            c.default.createElement(o.default, {
              styleId: '2461830353',
              css: [
                'ul.jsx-2461830353{margin:0;padding:0 0 10px 0;list-style:none;}',
                'li.jsx-2461830353{margin:25px 0;text-decoration:none;}',
                'li.jsx-2461830353:last-child{margin-bottom:0;}',
                'a.jsx-2461830353{text-decoration:none;display:block;}',
                'b.jsx-2461830353{color:#000;font-size:25px;display:inline-block;font-weight:600;line-height:21px;}',
                'span.jsx-2461830353{display:block;color:#c1c1c1;font-size:16px;margin-top:4px;margin-right:8px;}',
                'h1.jsx-2461830353{display:inline-block;margin:0px 0 40px 0;font-size:35px;font-weight:600;}',
                '.logo-type.jsx-2461830353{display:inline-block;position:relative;top:7px;width:60px;height:60px;margin-left:10px;vertical-align:text-bottom;}',
                '@media (min-width:768px){a.jsx-2461830353{display:inline-block;}span.jsx-2461830353{display:inline-block;margin-left:20px;}b.jsx-2461830353{color:#282828;font-size:25px;}ul.jsx-2461830353{padding-bottom:0;}a.jsx-2461830353:hover b.jsx-2461830353{color:#000;}h1.jsx-2461830353{font-size:40px;margin-top:0;}}',
                '@media (min-width:992px){span.jsx-2461830353{opacity:0;}li.jsx-2461830353{margin:22px 0;}a.jsx-2461830353:hover span.jsx-2461830353{opacity:1;}}'
              ]
            })
          )
        }
      }
    },
    [584]
  ))
  return { page: comp.default }
})
