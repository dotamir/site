window.__NEXT_REGISTER_PAGE('/2015/github-pages-limits', function() {
  var comp = (module.exports = webpackJsonp(
    [38],
    {
      128: function(e, t, a) {
        'use strict'
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function n(e, t) {
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
            var a = document.createElement('script')
            a.setAttribute('src', e),
              (a.onload = function() {
                return f.forEach(function(e) {
                  return e()
                })
              }),
              document.body.appendChild(a)
          } else f.push(t)
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = a(0),
          i = a.n(l),
          u = a(114),
          d = a.n(u),
          h = (function() {
            function e(e, t) {
              for (var a = 0; a < t.length; a++) {
                var o = t[a]
                ;(o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o)
              }
            }
            return function(t, a, o) {
              return a && e(t.prototype, a), o && e(t, o), t
            }
          })(),
          f = [],
          c = (function(e) {
            function t() {
              return (
                o(this, t),
                n(
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
                          var a = t.widgets,
                            o = e.props,
                            n = o.options,
                            r = o.onTweetLoadSuccess,
                            s = o.onTweetLoadError
                          a
                            .createTweetEmbed(e.props.id, e._div, n)
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
      529: function(e, t, a) {
        e.exports = a(530)
      },
      530: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(0),
          r = o(n),
          s = a(128),
          l = o(s),
          i = a(4),
          u = o(i),
          d = a(3),
          h = o(d),
          f = a(95),
          c = o(f),
          m = a(5),
          y = o(m),
          p = a(96),
          g = a(98),
          w = o(g)
        t.default = function() {
          return r.default.createElement(
            u.default,
            null,
            r.default.createElement(y.default, {
              id: 'github-pages-limits',
              hasCover: !0
            }),
            r.default.createElement(
              h.default,
              null,
              'The last time I came in contact with CloudFlare, I was managing root servers for my own tiny',
              ' ',
              r.default.createElement(
                c.default,
                { href: 'http://frewhost.net' },
                'hosting-provider'
              ),
              ' ',
              'and it looked like a really neat way to get rid of those damn DDoS attacks my service was getting back then. Unfortunately, their system wasn’t as functional and good-looking as it is today, so I struggled pretty hard with actually configuring it and getting everything running.'
            ),
            r.default.createElement(
              h.default,
              null,
              'But that also has a good side: I learned a lot about DNS records, the way how name-servers work and what it actually means to look after hundreds of domains.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Thanks to this experience, I was now able to easily get started with their improved service on my new site and hell yeah, it works like a charm. While browsing through the different options, I noticed that it’s exactly what GitHub wasn’t able to accomplish by itself. — I know, the most plausible reason is probably that they simple didn’t see a need for that. But I do. And if you carefully checked your own site and looked for ways to improve it’s performance, you also do.'
            ),
            r.default.createElement(p.H2, null, 'Browser Caching'),
            r.default.createElement(
              h.default,
              null,
              'The problem with GitHub pages is that many people were misusing it. Therefore it’s creators needed to find a balance between maximum speed and safety. The first thing that should come to your mind now is caching: Neither does Pages offer a way to change the expiration date of your files, nor did they set the default timeout to something high. To be more precise, it’s currently at around 10 minutes. They reason why they did that is probably that many silly developers were using Pages as a CDN for their assets or public libraries.'
            ),
            r.default.createElement(
              h.default,
              null,
              'While your site’s content will actually be hosted on Fastly’s CDN (they’ve partnered with GitHub), you shouldn’t share the URL of the files on your site as a central embedding point for every developer on the world.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Because many of us didn’t respect this rule, they simply prohibited us from accessing those parameters. And here comes CloudFlare. You simply change your domain’s NS records to a few hostnames which their wizard suggests and after a few hours, you are able to enjoy all of CloudFlare’s advantages regarding caching:'
            ),
            r.default.createElement(
              h.default,
              null,
              'You can now easily change the expiration date of your files or even minify HTML, CSS and JS. And that’s what brings us to the next stage:'
            ),
            r.default.createElement(p.H2, null, 'Minifying Stuff'),
            r.default.createElement(
              h.default,
              null,
              'Before I came back to CloudFlare because I needed a few name servers for my new domain, I was minifying the HTML code using a tacky Jekyll layout written in Liquid.'
            ),
            r.default.createElement(
              h.default,
              null,
              'I knew it’s not a real solution for this problem, but back then, I was pretty happy about it because it did exactly what Pages couldn’t do: Remove unnecessary characters from my files before serving them to the visitor.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Since it was just a layout, the HTML code was filtered through it and when it came out, it was minified like every good library would do it. But as I already said it, I just felt dirty while using it. And that’s not because it’s creator made shitty decisions (in terms of what was possible for him, he actually made a piece of art), but rather because a layout shouldn’t be used for such a purpose.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Thanks to CloudFlare, this is now history too. The only thing I needed to do was set some checkmarks in their dashboard and now all my files are being minified before they’re served. Since that process would take too much time on-the-fly, those parts are currently being cached on their servers. Although that means that I need to clear the cache manually every time I make changes to my site (as far as I understood it), I’m very happy about it.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Because from now on, the development process will be a bit easier for me and for contributors. All code lines are expanded by default, which means easier debugging for everyone!'
            ),
            r.default.createElement(p.H2, null, 'DDoS Protection'),
            r.default.createElement(
              h.default,
              null,
              'Besides making it faster, CloudFlare also protects my site from small to mid-scale DDoS attacks by serving the contents from a different server on their global DNS, in case that the origin server on GitHub’s cluster goes offline.'
            ),
            r.default.createElement(
              h.default,
              null,
              'By the way, this also decreases the time requests from clients take to reach my site. By using their name-servers, the average ping latency dropped from around 140ms to less than 30ms. This means that the delay between a page request and the answer from the server will be much smaller and this in turn means that the site loads faster.'
            ),
            r.default.createElement(p.H2, null, 'Analytics'),
            r.default.createElement(
              h.default,
              null,
              'To be honest, I never was a fan of Google Analytics. When I implemented it into my site a few months ago, I only did this because GitHub sadly doesn’t provide any way to get an overview of how many people are visiting your site. But as you might have thought it already: CloudFlare does provide one. Thanks to this feature, I was able to completely remove Google’s tracking code from my site while still being aware of the number of unique visitors or hits my site actually gets.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Besides that, their dashboard even tells me about the origin of the traffic, how much bandwidth was used and how many unwanted threats were blocked by their infrastructure. And for me, that’s all I need. If I wanted to know which browsers my visitors are using, I could simply look at a chart from W3C.'
            ),
            r.default.createElement(
              h.default,
              null,
              'All in all, this also has the nice side-effect that the data isn’t being sold to third-party folks (at least I don’t think that this is where CloudFlare gets its hugest revenue from, compared to companies like Google).'
            ),
            r.default.createElement(l.default, {
              id: '624669416299589635',
              className: 'tweet'
            }),
            r.default.createElement(
              h.default,
              null,
              'I’m sure that he wasn’t talking about the way how Google uses the information that it gets from Analytics, but rather if the cookies set by their services are also used for advertising purposes on completely different sites. But as you can see, there are many influential people wondering about what’s actually happing with their users data.'
            ),
            r.default.createElement(
              h.default,
              null,
              'And I definitely don’t want to be part of them, so I’m stopping this madness right now by keeping only the data I need and also not within the clients browser.'
            ),
            r.default.createElement(
              h.default,
              null,
              'In terms of performance, this kind of analytics-management also saves a lot of overhead that was triggered by all the requests that were made by the client to get those huge bags of scripts and other files from the Google’s servers, just for the purpose of recording one hit.'
            ),
            r.default.createElement(
              h.default,
              null,
              'And if that wasn’t enough, those scripts only have a expiration date of 2 hours. I firstly thought that they did this because they need to save the requests of the same users over and over again, but then I figured out that this would also be possible if the expiration date was set to something better (like one week).'
            ),
            r.default.createElement(
              h.default,
              null,
              'So in the end, I don’t have a clue why they’re even doing this.'
            ),
            r.default.createElement(
              h.default,
              null,
              'But enough with this stuff: At CloudFlare, this happens seamlessly on the server. As soon as a request comes in, the page gets served and at the same time, the web-server takes note of the client’s IP address and location data by simply extracting them from the parameters which were sent with the request — no additional overhead.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Sounds like a great deal, huh?'
            ),
            r.default.createElement(
              h.default,
              null,
              'But before I forget it: If you want to take advantage of those improvements, you not only need to use CloudFlare’s DNS network, but also their other services built for the purpose of accelerating and protecting your site.'
            ),
            r.default.createElement(
              h.default,
              null,
              'After logging into their dashboard and opening the “DNS” section, you’ll have to choose if you just want to use their DNS system, or also all the other great things.'
            ),
            r.default.createElement(
              h.default,
              null,
              'Now I finally found a neat way to combine the DNS-resolution of my domain name with all the other stuff that makes my site even faster and easier to manage in the development process.'
            ),
            r.default.createElement(w.default, null),
            r.default.createElement(
              h.default,
              null,
              'After a few hours with CloudFlare’s analytics tool, I found out about another great advantage over Google’s way of doing it: I’m finally able to track how many people are reading my posts through RSS. ♥️'
            ),
            r.default.createElement(
              h.default,
              null,
              'That’s only the case because the visits are being recorded on the back-end instead of on the front-end, like it was before.'
            )
          )
        }
      },
      96: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          var n = a(7),
            r = o(n),
            s = a(1),
            l = o(s),
            i = a(0),
            u = o(i),
            d = a(97),
            h = o(d),
            f = function(e) {
              var t = e.level,
                a = e.fontSize,
                o = e.linked,
                n = e.children,
                r = n
              return (
                Array.isArray(n) &&
                  (r = n
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
                    o &&
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
                    n
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
            var a = 'H' + e,
              o = [23, 18, 15, 13, 10, 9],
              n = function(t) {
                return new f(
                  (0, r.default)({}, t, {
                    level: e,
                    fontSize: o[e - 1],
                    linked: e > 1
                  })
                )
              }
            t[a] = n
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
      },
      98: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(1),
          r = o(n),
          s = a(0),
          l = o(s)
        t.default = function() {
          return l.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            l.default.createElement(r.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [529]
  ))
  return { page: comp.default }
})
