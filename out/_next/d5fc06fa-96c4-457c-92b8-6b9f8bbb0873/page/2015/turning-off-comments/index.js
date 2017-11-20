window.__NEXT_REGISTER_PAGE('/2015/turning-off-comments', function() {
  var comp = (module.exports = webpackJsonp(
    [35],
    {
      105: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(1),
          l = n(o),
          i = a(0),
          s = n(i),
          r = a(3),
          u = n(r)
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
      107: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Note = t.Ref = t.FootNotes = void 0)
        var o = a(1),
          l = n(o),
          i = a(0),
          s = n(i),
          r = a(3),
          u = n(r),
          d = a(98),
          f = n(d)
        ;(t.FootNotes = function(e) {
          var t = e.children
          return s.default.createElement(
            'div',
            { hidden: !0, className: 'jsx-1826157987' },
            s.default.createElement(f.default, null),
            t,
            s.default.createElement(l.default, {
              styleId: '1826157987',
              css: ['div.jsx-1826157987{display:block;}']
            })
          )
        }),
          (t.Ref = function(e) {
            var t = e.id
            return s.default.createElement(
              'a',
              { href: '#f' + t, id: 's' + t, className: 'jsx-940031118' },
              t,
              s.default.createElement(l.default, {
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
              a = e.children
            return s.default.createElement(
              u.default,
              null,
              s.default.createElement(
                'a',
                { href: '#s' + t, id: 'f' + t, className: 'jsx-2215405902' },
                t
              ),
              a,
              s.default.createElement(l.default, {
                styleId: '2215405902',
                css: [
                  'a.jsx-2215405902{text-decoration:none;background:#e9b6e1;color:#fff;padding:1px 5px;border-radius:5px;margin-right:10px;}',
                  'a.jsx-2215405902:focus{background:#000;color:#fff;outline:none;}'
                ]
              })
            )
          })
      },
      563: function(e, t, a) {
        e.exports = a(564)
      },
      564: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(0),
          l = n(o),
          i = a(4),
          s = n(i),
          r = a(3),
          u = n(r),
          d = a(5),
          f = n(d),
          c = a(95),
          h = n(c),
          m = a(96),
          y = a(107),
          p = a(105),
          w = n(p),
          g = a(98),
          b = n(g)
        t.default = function() {
          return l.default.createElement(
            s.default,
            null,
            l.default.createElement(f.default, { id: 'turning-off-comments' }),
            l.default.createElement(
              u.default,
              null,
              'Since I started this blog using Jekyll, I knew this day would come. And yeah, here it is! Because this is a static site, there',
              "'",
              's no way to implement a neat commenting system without doing many things client-side. Since I thought allowing people to share their knowledge on my site was a good thing, I',
              "'",
              've embedded Disqus - a really convenient way to manage comments.'
            ),
            l.default.createElement(
              u.default,
              null,
              'But over time, I noticed a few things that bugged me on this constellation and I never felt really happy about the solution I put up for this problem. Thus there',
              "'",
              's now time for a change:'
            ),
            l.default.createElement(
              u.default,
              null,
              'It',
              "'",
              's not just about the time I',
              "'",
              've spend with moderating all those comments (that',
              "'",
              's probably what you were thinking of, when you first saw the headline). Currently, I don',
              "'",
              't need to use much of my time for this. But when looking at some other edges of this topic, you',
              "'",
              'll quickly notice that removing comments from my site is way better than keeping them.'
            ),
            l.default.createElement(m.H2, null, 'Your Time Is Valued'),
            l.default.createElement(
              u.default,
              null,
              'Right now, there',
              "'",
              's so much stuff happening on the web. And I know that I',
              "'",
              'm definitely not the only person you',
              "'",
              're drawing attention to, which is why I don',
              "'",
              't want to artificially encourage you to spent more time on a specific text if you actually want to move on and read the next one (or even leave my site).'
            ),
            l.default.createElement(
              u.default,
              null,
              'After finishing an article, you shouldn',
              "'",
              't be distracted with the decision wether to continue scrolling down and reading all of those comments or to just leave the page or read another article. I want to give people the chance to keep up with all the ideas and tips that I',
              "'",
              'm putting up here to make their work easier and more fun.'
            ),
            l.default.createElement(
              u.default,
              null,
              '... Instead of wasting their time for no reason.'
            ),
            l.default.createElement(m.H2, null, 'The Faster, the Better'),
            l.default.createElement(
              u.default,
              null,
              'Let',
              "'",
              's face it: Disqus is a performance-disaster. I only need a simple list of comments including a text field which allows people to easily add their own opinion. But that',
              "'",
              's not what I got and also not what I will ever get if I keep using this service.'
            ),
            l.default.createElement(
              u.default,
              null,
              'I don',
              "'",
              't exactly know why they don',
              "'",
              't care that much about speed, but maybe it has something to do with their own expectations: Maybe they just want to provide a convenient way for visitors to leave a comment. But if you ask me, loading ca. ',
              l.default.createElement(
                'b',
                null,
                '21 uncached scripts, icon-fonts, images and stylesheets'
              ),
              ' (which all together make around 253KB) + building a websocket-connection is just too much',
              l.default.createElement(y.Ref, { id: '1' }),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Although they',
              "'",
              're loading so much stuff for just one tool, they didn',
              "'",
              't even manage to have the commenting input resized when the user switches to landscape-mode on mobile devices.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Especially as a defender of the open and fast web, I simply can',
              "'",
              't affort this amount of garbage on my site. If I speak or write about something, I want to be able to account for it.'
            ),
            l.default.createElement(m.H2, null, 'How Disqus Makes Money'),
            l.default.createElement(
              u.default,
              null,
              'When I first started using the service, I kept searching for something like a',
              ' ',
              '"',
              'premium',
              '"',
              ' ',
              'or',
              ' ',
              '"',
              'pro',
              '"',
              ' ',
              'package, because I wanted to hide this damn branding at the bottom of the iframe (which itself is another argument for removing the system).'
            ),
            l.default.createElement(
              u.default,
              null,
              'But sadly, I didn',
              "'",
              't find one. Now, a few months later, I found out that Disqus did so once, but basically doesn',
              "'",
              't do it like this anyway. They',
              "'",
              're now providing a VIP service targeted at very large sites like Fox, IGN, etc. - but do you really think this could pay all the stuff they need to run it? No.'
            ),
            l.default.createElement(
              u.default,
              null,
              'I trust them when they say the following in their ',
              l.default.createElement(
                h.default,
                { href: 'http://bit.ly/2jcFuwV' },
                'Privacy Policy'
              ),
              ':'
            ),
            l.default.createElement(
              w.default,
              null,
              'We will not rent or sell your Personally Identifiable Information to third parties outside Disqus and its controlled subsidiaries and affiliates without your consent...'
            ),
            l.default.createElement(
              u.default,
              null,
              'But that doesn',
              "'",
              't mean they won',
              "'",
              't use the tracking data within their own company to generate targeted ads and show them on your site, if you integrate their service. And I figured out that this is something that I can',
              "'",
              't allow on my site anymore.'
            ),
            l.default.createElement(
              u.default,
              null,
              'And while we',
              "'",
              're on it: Yes, I use Google Analytics to monitor my site and find out which pages take too much time to load (and also on which device and browser). But I will probably also remove this service from my site in the future, as soon as I find out about another app which does the same while agreeing to not use the visitors data for creating targeted ads.'
            ),
            l.default.createElement(
              u.default,
              null,
              'I also contacted GitHub a while ago and asked them to implement a tiny analytics tool for GitHub pages within the already existing tool for tracking visitors which you get on repos (let',
              "'",
              's hope they will soon spin this something like this up).'
            ),
            l.default.createElement(
              m.H2,
              null,
              'How Does the Future Look Like?'
            ),
            l.default.createElement(
              u.default,
              null,
              'Firstly, I usually post my articles on ',
              l.default.createElement(
                h.default,
                { href: 'https://news.ycombinator.com/' },
                'Hacker News'
              ),
              ', as well as on',
              ' ',
              l.default.createElement(
                h.default,
                { href: 'https://www.designernews.co/' },
                'Designer News'
              ),
              ' ',
              '(and if I don',
              "'",
              't do it, you',
              "'",
              're of course free to do so). If you don',
              "'",
              't know them already: They',
              "'",
              're platforms which you can also use to add your own thoughts on a specific post of mine (e.g. on this one). Of course, you can also just write me on Twitter or via e-mail.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Using this method, I also make sure that people are not confronted with the question if they should post their comment on the platform which led them to the article or on my site. I',
              "'",
              'm really looking forward to the release of Apple',
              "'",
              's ',
              '"',
              'News',
              '"',
              ' app, maybe they will already provide a more convenient solution for this. And while we',
              "'",
              're on it: If you already downloaded the beta of iOS 9, try searching for ',
              '"',
              'Leo',
              '"',
              ' within the News app 😅 - and let me know if you found me (I',
              "'",
              'm unfortunately not yet able to register for Apple',
              "'",
              's new developer program to get the beta by myself, at least their site tells me this).'
            ),
            l.default.createElement(
              u.default,
              null,
              'Another great way to make room for your opinion is to simply quote the article on your own site and then let me know about it over social networks. If I encounter a great comment, I will make sure to publish it here (including my own statement).'
            ),
            l.default.createElement(b.default, null),
            l.default.createElement(
              u.default,
              null,
              'One of the great people who inspired me to do this is John Gruber from Daring Fireball. He also had a few of the thoughts I wrote about above and already',
              ' ',
              l.default.createElement(
                h.default,
                {
                  href:
                    'http://shawnblanc.net/2007/07/why-daring-fireball-is-comment-free/'
                },
                'disabled'
              ),
              ' ',
              'them many years ago.'
            ),
            l.default.createElement(
              u.default,
              null,
              'I hope you',
              "'",
              're not that disappointed about the fact that you wont be able to leave comments directly on my site anymore, but this is a step I definitely need to make. I also still value your opinion, only the way how you can interact with me changed, nothing else.'
            ),
            l.default.createElement(
              y.FootNotes,
              null,
              l.default.createElement(
                y.Note,
                { id: '1' },
                'I know that many of them are only loaded after the site itself has finished loading completely, but for me, the difference that this fact actually makes, is fairly small.'
              )
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
            i = a(1),
            s = n(i),
            r = a(0),
            u = n(r),
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
                  (0, r.createElement)(
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
            h = 1;
          h <= 6;
          h++
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
          })(h)
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
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(1),
          l = n(o),
          i = a(0),
          s = n(i)
        t.default = function() {
          return s.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            s.default.createElement(l.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [563]
  ))
  return { page: comp.default }
})
