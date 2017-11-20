window.__NEXT_REGISTER_PAGE('/2015/frameworks-are-cool', function() {
  var comp = (module.exports = webpackJsonp(
    [44],
    {
      105: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(1),
          l = n(o),
          r = a(0),
          s = n(r),
          i = a(3),
          u = n(i)
        t.default = function(e) {
          var t = e.by,
            a = e.children
          return s.default.createElement(
            'blockquote',
            { className: 'jsx-4118782664' },
            s.default.createElement(
              u.default,
              null,
              a,
              t &&
                s.default.createElement(
                  'span',
                  { className: 'jsx-4118782664' },
                  '— ',
                  t
                )
            ),
            s.default.createElement(l.default, {
              styleId: '4118782664',
              css: [
                'blockquote.jsx-4118782664{margin:30px 0;color:#9B9B9B;font-style:oblique;border-left:3px solid #9B9B9B;padding-left:17px;font-size:15px;}',
                'span.jsx-4118782664{display:block;margin-top:15px;font-style:normal;}'
              ]
            })
          )
        }
      },
      525: function(e, t, a) {
        e.exports = a(526)
      },
      526: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(0),
          l = n(o),
          r = a(4),
          s = n(r),
          i = a(3),
          u = n(i),
          d = a(5),
          f = n(d),
          c = a(95),
          m = n(c),
          h = a(96),
          p = a(105),
          y = n(p)
        t.default = function() {
          return l.default.createElement(
            s.default,
            null,
            l.default.createElement(f.default, { id: 'frameworks-are-cool' }),
            l.default.createElement(
              u.default,
              null,
              'As a web developer, Im very concerned about performance. I',
              "'",
              've spent a lot of time finding the right workflow for building fast apps (and I still do). My primary wish is that a user shouldn',
              "'",
              't have to wait to get what he',
              "'",
              's looking for. We',
              "'",
              're the web. And the web is currently the fastest and easiest way to get information about a certain topic, be entertained or connect with other people on the other side of the world.'
            ),
            l.default.createElement(
              u.default,
              null,
              'To maintain this, I',
              "'",
              've tried to find the perfect balance between the ease & speed of development and performance. But since there',
              "'",
              's no real perfect way to handle this, I',
              ' ',
              l.default.createElement(
                m.default,
                { href: '/2015/developer-friendliness' },
                'ran against a wall'
              ),
              ' ',
              'very often. Over time, all of this felt more like a endless philosophical journey than a way to the best solution.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Now I know that it',
              "'",
              's important to see the big picture instead of just small parts. Of course I will still do my best to make the website of my clients as fast as possible (every MB counts!), but one thing that I will stop doing is trying to squeeze out every single byte of my code.'
            ),
            l.default.createElement(
              u.default,
              null,
              'As a rookie, the first thing you will now think is probably something like ',
              '"',
              'Oh look! He stopped caring about performance, simply because he',
              "'",
              's tired of looking for the best possible solution',
              '"',
              '. So I will try to explain why it',
              "'",
              's much better now than it was before (and not worse).'
            ),
            l.default.createElement(
              u.default,
              null,
              'This might sound a bit funny, but for me, it actually has been more effort to care less about this than caring more about it. I had to force myself to put my hands away from those never-ending stories of always wanting to reach the maximum speed and spend more time thinking about how to go bigger steps and improve my projects in an integral way.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Why? Because it',
              "'",
              's 2015. Devices and internet connections are getting faster and faster, while we',
              "'",
              're still spending hours of hours trying to reach such little goals instead of solving the big problems in our world.'
            ),
            l.default.createElement(
              u.default,
              null,
              l.default.createElement('b', null, 'But beware!'),
              ' I',
              "'",
              'm not telling you to stop caring about performance. I',
              "'",
              'm just trying to explain why it',
              "'",
              's better to make big steps.'
            ),
            l.default.createElement(
              u.default,
              null,
              'So I guess there',
              "'",
              's only one thing left to clarify:'
            ),
            l.default.createElement(h.H2, null, 'How I Came to This'),
            l.default.createElement(
              u.default,
              null,
              'I',
              "'",
              've spend the last year designing and developing a big web app based on ',
              l.default.createElement(
                m.default,
                { href: 'http://emberjs.com' },
                'Ember.js'
              ),
              ' (I will let you know more about it soon). For this reason, I also had to dig really deep into the idea behind client-side-rendered apps and separating the project into two parts: The app itself (running in the browser) and an API server which takes in requests and responds with data.'
            ),
            l.default.createElement(
              u.default,
              null,
              'At first, I was a bit confused why they',
              "'",
              're doing this and why all development tools in this area so opinionated, but now I understand and love it!'
            ),
            l.default.createElement(
              u.default,
              null,
              'The posts of Tom Dale (co-creator of Ember.js) were very helpful on my journey to get there. If you want to dig deeper into this, too, I recommend you to read',
              ' ',
              l.default.createElement(
                m.default,
                {
                  href:
                    'http://tomdale.net/2015/02/youre-missing-the-point-of-server-side-rendered-javascript-apps/'
                },
                'this'
              ),
              ' ',
              'and ',
              l.default.createElement(
                m.default,
                {
                  href:
                    'http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/'
                },
                'this'
              ),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Here',
              "'",
              's my favorite part:'
            ),
            l.default.createElement(
              y.default,
              { by: 'Tom Dale' },
              'So here’s what I think a more interesting study would be: what is the execution time of real world apps of approximately similar complexity? It may be that apps built with frameworks are still slower. But my hypothesis is that, for apps of any complexity, the ones that start off “vanilla” will accrete their own Frankenframework that performs similarly to, if not worse than, an off-the-shelf framework like Ember or Angular.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Of course those big frameworks aren',
              "'",
              't made for the average website and in their current state, you should only use them for real web apps. But if your project fits this criteria, you definitely need to use one of them (Ember.js is my personal recommendation).'
            ),
            l.default.createElement(h.H2, null, 'Conclusion'),
            l.default.createElement(
              u.default,
              null,
              'Don',
              "'",
              't underestimate the importance of performance in today',
              "'",
              's web. But also don',
              "'",
              't be so stupid to spend all of your valuable time on those little tweaks and go make some big steps!'
            ),
            l.default.createElement(
              u.default,
              null,
              'Oh. And before I forget it: No, I was wrong. Code',
              ' ',
              l.default.createElement(
                m.default,
                { href: '/2015/snippets-are-the-future' },
                "aren't"
              ),
              ' ',
              'the future. Carefully used frameworks are.'
            )
          )
        }
      },
      96: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          var o = a(7),
            l = n(o),
            r = a(1),
            s = n(r),
            i = a(0),
            u = n(i),
            d = a(97),
            f = n(d),
            c = function(e) {
              var t = e.level,
                a = e.fontSize,
                n = e.linked,
                o = e.children,
                l = o
              return (
                Array.isArray(o) &&
                  (l = o
                    .map(function(e) {
                      return 'string' == typeof e ? e : e.props.children
                    })
                    .join('')),
                u.default.createElement(
                  'div',
                  { className: 'jsx-1960885832' },
                  (0, i.createElement)(
                    'h' + t,
                    {
                      style: {
                        fontWeight: 700,
                        fontSize: a,
                        lineHeight: '1.5em'
                      }
                    },
                    n &&
                      u.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        u.default.createElement(
                          'a',
                          {
                            href: '#' + (0, f.default)(l),
                            id: (0, f.default)(l),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    o
                  ),
                  u.default.createElement(s.default, {
                    styleId: '1960885832',
                    css: [
                      'div.jsx-1960885832{margin-top:30px;}',
                      'span.jsx-1960885832{position:absolute;margin-left:-15px;width:15px;}',
                      'a.jsx-1960885832{text-decoration:none;color:#4492ff;padding-top:30px;}',
                      'a.jsx-1960885832:focus{outline:none;}',
                      '@media (min-width:922px){a.jsx-1960885832{visibility:hidden;}div.jsx-1960885832:hover a.jsx-1960885832,span.jsx-1960885832:hover a.jsx-1960885832{visibility:visible;}}'
                    ]
                  })
                )
              )
            },
            m = 1;
          m <= 6;
          m++
        )
          !(function(e) {
            var a = 'H' + e,
              n = [23, 18, 15, 13, 10, 9],
              o = function(t) {
                return new c(
                  (0, l.default)({}, t, {
                    level: e,
                    fontSize: n[e - 1],
                    linked: e > 1
                  })
                )
              }
            t[a] = o
          })(m)
      },
      97: function(e, t, a) {
        !(function(t, a) {
          e.exports = a()
        })(0, function() {
          function e(e) {
            return (
              (e = e.trim().toLowerCase()),
              (e = e.replace(t, '-')),
              (e = e.replace(a, ''))
            )
          }
          var t = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g,
            a = /(^-+|-+$)/g
          return e
        })
      }
    },
    [525]
  ))
  return { page: comp.default }
})
