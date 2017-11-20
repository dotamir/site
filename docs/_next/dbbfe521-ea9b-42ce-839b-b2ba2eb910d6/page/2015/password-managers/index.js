window.__NEXT_REGISTER_PAGE('/2015/password-managers', function() {
  var comp = (module.exports = webpackJsonp(
    [47],
    {
      551: function(e, t, a) {
        e.exports = a(552)
      },
      552: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(0),
          s = o(n),
          i = a(4),
          l = o(i),
          r = a(3),
          d = o(r),
          u = a(5),
          h = o(u),
          f = a(96),
          c = a(95),
          p = o(c)
        t.default = function() {
          return s.default.createElement(
            l.default,
            null,
            s.default.createElement(h.default, { id: 'password-managers' }),
            s.default.createElement(
              d.default,
              null,
              'With computers, we got another big thing to worry about in our everyday life: Passwords.'
            ),
            s.default.createElement(
              d.default,
              null,
              'Many of us are faced with them daily and try to keep them ordered and stored in a safe place. Nevertheless the biggest part of all users isn’t giving a single fuck. This was part of the reason why a small group of developers decided to create a new way for handling those data bits using so-called “password managers”.'
            ),
            s.default.createElement(
              d.default,
              null,
              'I got upset about this myself a few years ago and decided to pay for 1Password on both OS X and iOS. After that, I immediately started caring more and more about my passwords. But I noticed something else too: I spend way more time with them.'
            ),
            s.default.createElement(
              d.default,
              null,
              'I started sorting them into groups, adding additional fields of information to my “vaults” and began storing things like credit cards, bank account data and such too. You won’t believe me, but I also got constantly distracted by those icons which showed up next to each entry.'
            ),
            s.default.createElement(
              d.default,
              null,
              'If a website didn’t add a proper icon for that, I couldn’t help myself and wrote them in regards to freaking add one.'
            ),
            s.default.createElement(f.H2, null, 'Enough!'),
            s.default.createElement(
              d.default,
              null,
              'Now I’m done with it, I don’t want to spend any more time with passwords. Besides that: it’s 2015. Our software should figure out all of that by itself, don’t you think so too? So I did it. I went back to where it all started: the iCloud keychain.'
            ),
            s.default.createElement(
              d.default,
              null,
              'Two days ago, I had lunch with one of my bosses and regarding my question if he’s using 1Password for personal purposes, he denied and told me about the built-in keychain functionality of iCloud. Since I had many bad experiences with it until that day, I looked at him like he was crazy. I couldn’t really understand it. But then he told me about how seamlessly it got integrated into Safari and how easy both the creation of new passwords and the way of managing them is.'
            ),
            s.default.createElement(
              d.default,
              null,
              'On the same day, I decided to give it another try and also be up-to-date about what’s happening in this section of our industry. And I’m glad I did it. There’s one special thing that boils many of my remaining thoughts down to the essence: “It’s built to make it seem like there are no passwords at all”.'
            ),
            s.default.createElement(
              d.default,
              null,
              'I read that on the internet and it’s exactly what the iCloud keychain does better compared to 1Password or other competitors. Do you really think that a regular user wants to spent so much time filling out fields and ordering passwords into groups? No! And I also don’t think that this is what today’s software should do. It should think by itself and always be prepared to provide us with our data.'
            ),
            s.default.createElement(
              d.default,
              null,
              'And that’s exactly what Apple’s keychain functionality does: if you visit a website, the fields are already filled-out and the only thing that’s left to be done by the user is clicking the submission button. No need for crappy-integrated 1Password options. It’s the same with saving passwords: I don’t need a third-party extension which pops up every time it thinks it’s needed. It just works. All password fields on a login form show a little key which I only need to hit once to be able to choose or save a password.'
            ),
            s.default.createElement(f.H2, null, 'For Developers'),
            s.default.createElement(
              d.default,
              null,
              'After doing a bit of research, I also found out that Apple now officially provides a way for third party app developers to access the keychain. As far as I know, the developer only needs to verify the ownership of the domain of his website and all users will be able to choose the related password directly out of a',
              ' ',
              s.default.createElement(
                p.default,
                {
                  href:
                    'https://9to5mac.com/2014/06/13/ios-8-lets-apps-access-safari-autofill-credentials-for-quick-easy-login/'
                },
                'selection popup'
              ),
              '. So easy, try it! I thing right know is the right time to make the change if you’re still using a third-party password manager.'
            ),
            s.default.createElement(
              d.default,
              null,
              'Just admit it: Apple doesn’t need to be that fast at making their software great. Because as soon as they actually make significant changes to it, it’s incomparable to third-party-apps when it comes to integration. Simply because they’re able to adjust the core of iOS like they want it. Of course that’s only one part of making great apps (besides the design and the actual features), but it this case, it’s the most important one.'
            ),
            s.default.createElement(
              d.default,
              null,
              'Regular people don’t spend time thinking about ordering their passwords. They want it to just work! And that’s the area in which we need to improve our products too.'
            ),
            s.default.createElement(f.H2, null, 'For Teams'),
            s.default.createElement(d.default, null, 'Oh.'),
            s.default.createElement(
              d.default,
              null,
              'I forgot to mention that this solution does work perfectly for personal use, but teams will definitely have to stick to apps like',
              ' ',
              s.default.createElement(
                p.default,
                { href: 'https://1password.com/teams/' },
                '1Password'
              ),
              ' ',
              '(since your team members probably won’t agree to use a single iCloud account).'
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
            s = o(n),
            i = a(1),
            l = o(i),
            r = a(0),
            d = o(r),
            u = a(97),
            h = o(u),
            f = function(e) {
              var t = e.level,
                a = e.fontSize,
                o = e.linked,
                n = e.children,
                s = n
              return (
                Array.isArray(n) &&
                  (s = n
                    .map(function(e) {
                      return 'string' == typeof e ? e : e.props.children
                    })
                    .join('')),
                d.default.createElement(
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
                    o &&
                      d.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        d.default.createElement(
                          'a',
                          {
                            href: '#' + (0, h.default)(s),
                            id: (0, h.default)(s),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    n
                  ),
                  d.default.createElement(l.default, {
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
                  (0, s.default)({}, t, {
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
      }
    },
    [551]
  ))
  return { page: comp.default }
})
