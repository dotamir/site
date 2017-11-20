window.__NEXT_REGISTER_PAGE('/2015/snippets-are-the-future', function() {
  var comp = (module.exports = webpackJsonp(
    [48],
    {
      107: function(e, t, n) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Note = t.Ref = t.FootNotes = void 0)
        var a = n(1),
          l = o(a),
          s = n(0),
          r = o(s),
          i = n(3),
          u = o(i),
          d = n(98),
          f = o(d)
        ;(t.FootNotes = function(e) {
          var t = e.children
          return r.default.createElement(
            'div',
            { hidden: !0, className: 'jsx-1826157987' },
            r.default.createElement(f.default, null),
            t,
            r.default.createElement(l.default, {
              styleId: '1826157987',
              css: ['div.jsx-1826157987{display:block;}']
            })
          )
        }),
          (t.Ref = function(e) {
            var t = e.id
            return r.default.createElement(
              'a',
              { href: '#f' + t, id: 's' + t, className: 'jsx-940031118' },
              t,
              r.default.createElement(l.default, {
                styleId: '940031118',
                css: [
                  'a.jsx-940031118{top:-5px;font-size:10px;position:relative;text-decoration:none;background:#e9b6e1;color:#fff;font-weight:700;padding:1px 5px;border-radius:7px;}',
                  'a.jsx-940031118:focus{background:#000;color:#fff;outline:none;}'
                ]
              })
            )
          }),
          (t.Note = function(e) {
            var t = e.id,
              n = e.children
            return r.default.createElement(
              u.default,
              null,
              r.default.createElement(
                'a',
                { href: '#s' + t, id: 'f' + t, className: 'jsx-2215405902' },
                t
              ),
              n,
              r.default.createElement(l.default, {
                styleId: '2215405902',
                css: [
                  'a.jsx-2215405902{text-decoration:none;background:#e9b6e1;color:#fff;padding:1px 5px;border-radius:5px;margin-right:10px;}',
                  'a.jsx-2215405902:focus{background:#000;color:#fff;outline:none;}'
                ]
              })
            )
          })
      },
      555: function(e, t, n) {
        e.exports = n(556)
      },
      556: function(e, t, n) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var a = n(0),
          l = o(a),
          s = n(4),
          r = o(s),
          i = n(3),
          u = o(i),
          d = n(5),
          f = o(d),
          c = n(95),
          h = o(c),
          m = n(107)
        t.default = function() {
          return l.default.createElement(
            r.default,
            null,
            l.default.createElement(f.default, {
              id: 'snippets-are-the-future'
            }),
            l.default.createElement(
              u.default,
              null,
              'The last time I wrote about this problem (in ',
              l.default.createElement(
                h.default,
                { href: '/2015/developer-friendliness' },
                'this post'
              ),
              '), I was thinking that the web just isn',
              "'",
              't built for the maximum performance when using pre-made libraries from other people. And yes, I still think that',
              "'",
              's a major obstacle for which we still need to find a proper fix.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Okay, let me explain that before we go on. To me, it looks like developers are caring more and more about frameworks and pretty libraries which speed up the development-process and enable them to do more in less time (which of course saves money, but that',
              "'",
              's not why were here, right?). The disadvantage of this method is that while they',
              "'",
              're doing so, they',
              "'",
              're losing the sense for being able to squish out the maximum of performance. This leads to a much slower www, but helps agencys - and other companies that are creating websites for money - to finish more orders within the same time.'
            ),
            l.default.createElement(
              u.default,
              null,
              'But I',
              "'",
              'm not here to help you with doing so. I',
              "'",
              'm here to encourage you to think about how we can make the web faster while keeping the same level of awesomeness',
              l.default.createElement(m.Ref, { id: '1' }),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Great, then let',
              "'",
              's talk about the best compromise I found out about: ',
              l.default.createElement('b', null, 'Codes'),
              '. While allowing developers to use code from other coders, we still keep the mountain of unnecessary clutter that',
              "'",
              's being loaded on each page-request as tiny as possible. Stop making clunky libraries, start sharing snippets! This will avoid many unused functions, helpers, etc. and reduce the size of the code that',
              "'",
              's getting presented to the client (which speeds up the painting-process within the browser).'
            ),
            l.default.createElement(
              u.default,
              null,
              'Cool, huh? Yes, it is.',
              l.default.createElement('br', null),
              'But I know, it',
              "'",
              's far away from perfect.'
            ),
            l.default.createElement(
              u.default,
              null,
              'But in my view, it',
              "'",
              's currently the biggest place for our fat, effort-shy, fast-clearance-loving asses on the fine line between performance and developer-friendliness. Trust me.'
            ),
            l.default.createElement(
              u.default,
              null,
              l.default.createElement(
                'i',
                null,
                '"',
                'Why isn',
                "'",
                't it perfect?',
                '"'
              ),
              ', you may ask. Easy: While mixing together multiple snippets and self-made code, there',
              "'",
              's still the possibility of the same code occurring multiple times. To get the best result, those occurrences should normally be combined into functions, that',
              "'",
              's why they',
              "'",
              're here (the functions). But before we build an extremely complex engine that combines multiple occurrences of the same code into neat functions (or do this by ourselfes, of course), there',
              "'",
              's no ',
              '"',
              'perfect',
              '"',
              ' answer to this. But however, please try my suggestion, you',
              "'",
              'll see that it',
              "'",
              's both convenient and performance-improving.'
            ),
            l.default.createElement(
              m.FootNotes,
              null,
              l.default.createElement(
                m.Note,
                { id: '1' },
                'We shouldn',
                "'",
                't limit our options in this area, developers should still be able to build completely crazy, dynamic and stunning web-apps.'
              )
            )
          )
        }
      },
      98: function(e, t, n) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var a = n(1),
          l = o(a),
          s = n(0),
          r = o(s)
        t.default = function() {
          return r.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            r.default.createElement(l.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [555]
  ))
  return { page: comp.default }
})
