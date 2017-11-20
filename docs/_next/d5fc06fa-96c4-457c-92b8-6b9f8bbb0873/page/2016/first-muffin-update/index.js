window.__NEXT_REGISTER_PAGE('/2016/first-muffin-update', function() {
  var comp = (module.exports = webpackJsonp(
    [46],
    {
      579: function(e, t, a) {
        e.exports = a(580)
      },
      580: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = a(0),
          o = n(l),
          i = a(4),
          r = n(i),
          s = a(3),
          d = n(s),
          u = a(95),
          f = n(u),
          h = a(5),
          c = n(h),
          m = a(96),
          p = a(108)
        t.default = function() {
          return o.default.createElement(
            r.default,
            null,
            o.default.createElement(c.default, { id: 'first-muffin-update' }),
            o.default.createElement(
              d.default,
              null,
              'Exactly one month has passed since I’ve announced what I’ve been doing the last half year: I’ve started building',
              ' ',
              o.default.createElement(
                f.default,
                { href: 'http://muffin.cafe' },
                'Muffin'
              ),
              ', a modern way of managing content on websites.'
            ),
            o.default.createElement(
              d.default,
              null,
              'Since then, a lot of progress happened. First off, it now has it’s own',
              ' ',
              o.default.createElement(
                f.default,
                { href: 'https://github.com/muffin' },
                'GitHub organisation'
              ),
              ' ',
              'that contains all of the repos that are related to it. And yes, I’ve already asked the guy who currently owns the “muffin” username, if he could release it. Let’s hope that will happen soon!'
            ),
            o.default.createElement(
              d.default,
              null,
              'But there’s also a great news regarding usernames: After emailing the guy who owned the “muffin” package on npm, he agreed to release it. I didn’t even had to do something in exchange. I just love the open source community and everything around it!'
            ),
            o.default.createElement(
              d.default,
              null,
              'I’ve also came to the conclusion that it’s probably a better idea to just leave all of its repositories public while developing. This way, it’s easier for other developers to help me with bringing it to a stable version.'
            ),
            o.default.createElement(m.H2, null, 'Ember'),
            o.default.createElement(
              d.default,
              null,
              'As you might have already noticed by now, the repository called “old” contains a lot of commits. Not only because I’ve added a lot to the main system, but also because it was rewritten a lot of times:'
            ),
            o.default.createElement(p.Image, {
              src: '/static/essays/2016/first-muffin-update/github-graph.png'
            }),
            o.default.createElement(
              d.default,
              null,
              'But in the middle of the process, something started bugging me: There didn’t seem to be a way to simply add the API to the Ember app (only mockups) and all in all, I thought making the server-side stuff a separate repo/package will make development much more complex for contributors. So I’ve switched back to server-side rendered.'
            ),
            o.default.createElement(
              d.default,
              null,
              'A few months later, I was struggling with building my own workflow for all of the things that are necessary for building a modern web app: ES2015 module bundling and resolving, running the web and livereloading server while also watching files and rebuilding if necessary and much more things of that kind.'
            ),
            o.default.createElement(
              d.default,
              null,
              'While I think that I’ve found a clean way to solve all of this, it was still too slow and complex. So asked myself: “Do you really want to rewrite all of this again?” No. Of course not. But I did!'
            ),
            o.default.createElement(
              d.default,
              null,
              'So in favour of making Muffin the most modern content management system, I’ve moved the core system to the repo called “old” and created new ones for the “client” and the API (“server”). In those repositories, I’ll now continue making the system stable.'
            ),
            o.default.createElement(
              d.default,
              null,
              'And hell yeah, it’s better! Way better. — In the first few days, I’ve already noticed that it’s much easier to add features and iterate over stuff. And the best thing about that: It will allow me to add many of those shiny new web things like web sockets and service workers to the application easily. So all in all, I definitely don’t regret this decision!'
            ),
            o.default.createElement(m.H2, null, "So, What's Next?"),
            o.default.createElement(
              d.default,
              null,
              'After having rebuilt the whole app using Ember, I will now continue adding more features to it and bring it to a stable version.'
            ),
            o.default.createElement(
              d.default,
              null,
              'Since some releases we’re already in use in that old “muffin” package on npm, the first release will be 1.0.0 and not 0.1.0. Because of this, I’ll have to make muffin stable for production before publishing the first release (like specified on',
              ' ',
              o.default.createElement(
                f.default,
                { href: 'http://semver.org' },
                'SemVer'
              ),
              ').'
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
          var l = a(7),
            o = n(l),
            i = a(1),
            r = n(i),
            s = a(0),
            d = n(s),
            u = a(97),
            f = n(u),
            h = function(e) {
              var t = e.level,
                a = e.fontSize,
                n = e.linked,
                l = e.children,
                o = l
              return (
                Array.isArray(l) &&
                  (o = l
                    .map(function(e) {
                      return 'string' == typeof e ? e : e.props.children
                    })
                    .join('')),
                d.default.createElement(
                  'div',
                  { className: 'jsx-1960885832' },
                  (0, s.createElement)(
                    'h' + t,
                    {
                      style: {
                        fontWeight: 700,
                        fontSize: a,
                        lineHeight: '1.5em'
                      }
                    },
                    n &&
                      d.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        d.default.createElement(
                          'a',
                          {
                            href: '#' + (0, f.default)(o),
                            id: (0, f.default)(o),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    l
                  ),
                  d.default.createElement(r.default, {
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
            c = 1;
          c <= 6;
          c++
        )
          !(function(e) {
            var a = 'H' + e,
              n = [23, 18, 15, 13, 10, 9],
              l = function(t) {
                return new h(
                  (0, o.default)({}, t, {
                    level: e,
                    fontSize: n[e - 1],
                    linked: e > 1
                  })
                )
              }
            t[a] = l
          })(c)
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
    [579]
  ))
  return { page: comp.default }
})
