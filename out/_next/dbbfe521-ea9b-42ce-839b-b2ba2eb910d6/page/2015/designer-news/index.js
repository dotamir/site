window.__NEXT_REGISTER_PAGE('/2015/designer-news', function() {
  var comp = (module.exports = webpackJsonp(
    [34],
    {
      104: function(e, t, n) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LI = t.UL = t.OL = void 0)
        var o = n(1),
          r = a(o),
          s = n(0),
          l = a(s),
          i = function(e) {
            var t = e.children
            return l.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              l.default.createElement(r.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          u = function(e) {
            var t = e.children
            return l.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              t,
              l.default.createElement(r.default, {
                styleId: '1299876035',
                css: [
                  'ul.jsx-1299876035{margin:30px 0;list-style:disc;padding:0 0 0 18px;}'
                ]
              })
            )
          },
          d = function(e) {
            var t = e.children,
              n = e.shallow,
              a = []
            return (
              n && a.push('shallow'),
              l.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (a.join(' ') || '') },
                t,
                l.default.createElement(r.default, {
                  styleId: '3704132522',
                  css: [
                    'li.jsx-3704132522{margin-bottom:15px;line-height:25px;}',
                    'li.shallow.jsx-3704132522{margin-bottom:10px;}'
                  ]
                })
              )
            )
          }
        ;(t.OL = i), (t.UL = u), (t.LI = d)
      },
      105: function(e, t, n) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = n(1),
          r = a(o),
          s = n(0),
          l = a(s),
          i = n(3),
          u = a(i)
        t.default = function(e) {
          var t = e.by,
            n = e.children
          return l.default.createElement(
            'blockquote',
            { className: 'jsx-4118782664' },
            l.default.createElement(
              u.default,
              null,
              n,
              t &&
                l.default.createElement(
                  'span',
                  { className: 'jsx-4118782664' },
                  '— ',
                  t
                )
            ),
            l.default.createElement(r.default, {
              styleId: '4118782664',
              css: [
                'blockquote.jsx-4118782664{margin:30px 0;color:#9B9B9B;font-style:oblique;border-left:3px solid #9B9B9B;padding-left:17px;font-size:15px;}',
                'span.jsx-4118782664{display:block;margin-top:15px;font-style:normal;}'
              ]
            })
          )
        }
      },
      128: function(e, t, n) {
        'use strict'
        function a(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        }
        function r(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        }
        function s(e, t) {
          if (0 === f.length) {
            f.push(t)
            var n = document.createElement('script')
            n.setAttribute('src', e),
              (n.onload = function() {
                return f.forEach(function(e) {
                  return e()
                })
              }),
              document.body.appendChild(n)
          } else f.push(t)
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = n(0),
          i = n.n(l),
          u = n(114),
          d = n.n(u),
          h = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var a = t[n]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a)
              }
            }
            return function(t, n, a) {
              return n && e(t.prototype, n), a && e(t, a), t
            }
          })(),
          f = [],
          c = (function(e) {
            function t() {
              return (
                a(this, t),
                o(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              r(t, e),
              h(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this,
                      t = function() {
                        window.twttr.ready().then(function(t) {
                          var n = t.widgets,
                            a = e.props,
                            o = a.options,
                            r = a.onTweetLoadSuccess,
                            s = a.onTweetLoadError
                          n
                            .createTweetEmbed(e.props.id, e._div, o)
                            .then(r)
                            .catch(s)
                        })
                      }
                    if (window.twttr) t()
                    else {
                      s(
                        (window.location.protocol.indexOf('file') >= 0
                          ? this.props.protocol
                          : '') + '//platform.twitter.com/widgets.js',
                        t
                      )
                    }
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return i.a.createElement('div', {
                      className: this.props.className,
                      ref: function(t) {
                        e._div = t
                      }
                    })
                  }
                }
              ]),
              t
            )
          })(i.a.Component)
        ;(c.propTypes = {
          id: d.a.string,
          options: d.a.object,
          protocol: d.a.string,
          onTweetLoadSuccess: d.a.func,
          onTweetLoadError: d.a.func,
          className: d.a.string
        }),
          (c.defaultProps = {
            protocol: 'https:',
            options: {},
            className: null
          }),
          (t.default = c)
      },
      519: function(e, t, n) {
        e.exports = n(520)
      },
      520: function(e, t, n) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = n(0),
          r = a(o),
          s = n(128),
          l = a(s),
          i = n(4),
          u = a(i),
          d = n(3),
          h = a(d),
          f = n(5),
          c = a(f),
          m = n(95),
          p = a(m),
          y = n(105),
          w = a(y),
          g = n(104),
          b = n(96)
        t.default = function() {
          return r.default.createElement(
            u.default,
            null,
            r.default.createElement(c.default, { id: 'designer-news' }),
            r.default.createElement(
              h.default,
              null,
              'I already wanted to write something like this a while ago, however I wasn',
              "'",
              't sure yet. But a recent tweet of Joel Califa finally caught my attention:'
            ),
            r.default.createElement(l.default, {
              id: '617104311890251776',
              className: 'tweet'
            }),
            r.default.createElement(
              h.default,
              null,
              'I',
              "'",
              'm not entirely sure about how he exactly meant this. He either looks at this from an ',
              '"',
              'the entries and comments aren',
              "'",
              't useful anymore',
              '"',
              ' ',
              'or a',
              ' ',
              '"',
              'just too much',
              '"',
              '-perspective, I don',
              "'",
              't know. But that doesn',
              "'",
              't even matter here, since it was useful anyway (because it triggered me to write about the latter).'
            ),
            r.default.createElement(
              h.default,
              null,
              'I thought this would be a matter of course in our industry, but it looks like many providers and creatives didn',
              "'",
              't understand the principles behind the method of valuing the users time yet. Therefore I',
              "'",
              'd like to point out some things which I would never allow on my projects and explain how to do it better. Think of this as my 2 cents on how to provide the user with more temporal space instead of making him exhausted with too much content.'
            ),
            r.default.createElement(b.H2, null, 'The Problem'),
            r.default.createElement(
              h.default,
              null,
              'Your user isn',
              "'",
              't only visiting your site. Your work is - like my own site - only a small part of all the stuff a user visits to get stuff done. He needs your site or app to get inspired, entertained or productive. After that, he will go on to the next product and start using it.'
            ),
            r.default.createElement(
              h.default,
              null,
              'So please, don',
              "'",
              't act like you',
              "'",
              're the center of the user',
              "'",
              's everyday life. I know, it',
              "'",
              's hard, since it',
              "'",
              's exactly turned around for you. Because for YOU, it IS part of the center of your everyday life (at least it should be, if you ask me).'
            ),
            r.default.createElement(
              h.default,
              null,
              '"',
              'How am I straining my user',
              "'",
              's attention?',
              '"',
              ', you might ask. Let',
              "'",
              's take',
              ' ',
              r.default.createElement(
                p.default,
                { href: 'https://www.designernews.co' },
                'Designer News'
              ),
              ' ',
              'as an example for this: It',
              "'",
              's a service which was initially built to allow designers ...'
            ),
            r.default.createElement(
              w.default,
              { by: 'Designer News' },
              '... to discuss and share interesting things in our industry.'
            ),
            r.default.createElement(
              h.default,
              null,
              'There was a time when it wasn',
              "'",
              't open for everyone (aka.',
              ' ',
              '"',
              'invite-only',
              '"',
              '), but after a while they got bigger. They opened up the registration-process for everyone and the increasing amount of new members pushed them to think of more strict guidelines for the community. I guess, with this change, they also had to adjust the system itself a bit, too. But what they left uncovered was definitely the fact that they should have started to regulate the numbers of posts which will catch the user',
              "'",
              's attention.'
            ),
            r.default.createElement(
              h.default,
              null,
              'On the front page for example, there are currently around 25 posts shown ',
              r.default.createElement(
                'b',
                null,
                'and I think this numbers stays the same over time'
              ),
              '. I',
              "'",
              'm sure that there are many people out there who want to make sure to stay up-to-date and therefore read all of those stories (since they',
              "'",
              're presented directly in the front). And this leads us to the problem: As far as I had noticed it in the last few months, those links don',
              "'",
              't stay there for ... let',
              "'",
              's say ... one day or even one week. I',
              "'",
              'm not sure how their algorithm exactly works, but I noticed that they will switch as soon as a different story gets an higher amount of up-votes.'
            ),
            r.default.createElement(
              h.default,
              null,
              'If you take a look there, you',
              "'",
              'll see that there are some posts from around 19 hours ago, some from 13 and in-between some from 4 days (the one I saw was sponsored) or 3 hours ago. For me, that doesn',
              "'",
              't make much sense. But I',
              "'",
              'm sure there',
              "'",
              's a pretty stable and well thought-out technique behind this scenario - maybe I',
              "'",
              'm just not able to spot it.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Anyway, this isn',
              "'",
              't a proper solution, if you ask me. I feel like I',
              "'",
              'm constantly getting showered with new links and stories without being able to step aside and say ',
              '"',
              'Okay, I',
              "'",
              've read every post for this day, now I know what',
              "'",
              's going on',
              '"',
              '. And that',
              "'",
              's exactly the same with every similar site:',
              ' ',
              r.default.createElement(
                p.default,
                { href: 'http://news.ycombinator.com' },
                'Hacker News'
              ),
              ' ',
              'is another great example.'
            ),
            r.default.createElement(b.H2, null, 'My Solution'),
            r.default.createElement(
              h.default,
              null,
              'The user should be able to finish a task. If you',
              "'",
              're part of his daily routine, he doesn',
              "'",
              't want to spent hours on your front page because new content constantly pops up. At least that',
              "'",
              's my point of view on this topic. I think that sites like DN or HN are great for staying up-to-date in this industry, but they sometimes just made me angry because they don',
              "'",
              't seem to care about my time.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Of course, I am able to close the tab whenever I want. But that',
              "'",
              's not the point here. I don',
              "'",
              't want to leave without being able to say that I',
              "'",
              've checked the most important news of today.',
              ' ',
              r.default.createElement(
                'b',
                null,
                'I don',
                "'",
                't want to do things halfway.'
              ),
              ' ',
              'And I',
              "'",
              'm very sure that there are many people out there who think like this as well.'
            ),
            r.default.createElement(
              h.default,
              null,
              'So here are some ideas to get this right:'
            ),
            r.default.createElement(
              g.OL,
              null,
              r.default.createElement(
                g.LI,
                null,
                r.default.createElement(
                  h.default,
                  null,
                  'A great way to solve this might be to simply implement another part of the algorithm which will discover the most up-voted topics each day and will then pack them together into one beautiful timeline/stream and serve them on the front page the next day. This method of course leads to the fact that the visitor will get the news delayed by one day.'
                ),
                r.default.createElement(
                  w.default,
                  null,
                  'For me, this wouldn',
                  "'",
                  't be that much of a problem. There',
                  "'",
                  's so much happing out there, I',
                  "'",
                  'm thankful even if I only get the most important things on day later.'
                )
              ),
              r.default.createElement(
                g.LI,
                null,
                'If we want to make sure that the user get',
                "'",
                's the latest news without a delay, we could just pick one post every time it reaches a specific number of up-votes and add it to the front page. Then there',
                "'",
                's one single post at the home page. If another post hits that pre-defined number of up-votes, it will also be added below the previous one - until there are 25 post on the front. Then the picking-process stops until the next day.'
              )
            ),
            r.default.createElement(
              h.default,
              null,
              'I know those proposals are far away from perfect. But at least I don',
              "'",
              't whine about what bugs me without serving you with some possible solutions to get around that problem.'
            ),
            r.default.createElement(b.H2, null, 'Afterword'),
            r.default.createElement(
              h.default,
              null,
              'I hope I was able to express my ideas on this situation so that you can understand them. If you',
              "'",
              're also exhausted with the current state of those sites, please let me know about your opinion. Maybe someone over at Designer News reads & maybe even considers this for the future.'
            )
          )
        }
      },
      96: function(e, t, n) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          var o = n(7),
            r = a(o),
            s = n(1),
            l = a(s),
            i = n(0),
            u = a(i),
            d = n(97),
            h = a(d),
            f = function(e) {
              var t = e.level,
                n = e.fontSize,
                a = e.linked,
                o = e.children,
                r = o
              return (
                Array.isArray(o) &&
                  (r = o
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
                        fontSize: n,
                        lineHeight: '1.5em'
                      }
                    },
                    a &&
                      u.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        u.default.createElement(
                          'a',
                          {
                            href: '#' + (0, h.default)(r),
                            id: (0, h.default)(r),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    o
                  ),
                  u.default.createElement(l.default, {
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
            var n = 'H' + e,
              a = [23, 18, 15, 13, 10, 9],
              o = function(t) {
                return new f(
                  (0, r.default)({}, t, {
                    level: e,
                    fontSize: a[e - 1],
                    linked: e > 1
                  })
                )
              }
            t[n] = o
          })(c)
      },
      97: function(e, t, n) {
        !(function(t, n) {
          e.exports = n()
        })(0, function() {
          function e(e) {
            return (
              (e = e.trim().toLowerCase()),
              (e = e.replace(t, '-')),
              (e = e.replace(n, ''))
            )
          }
          var t = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g,
            n = /(^-+|-+$)/g
          return e
        })
      }
    },
    [519]
  ))
  return { page: comp.default }
})
