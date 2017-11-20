window.__NEXT_REGISTER_PAGE('/2015/support', function() {
  var comp = (module.exports = webpackJsonp(
    [41],
    {
      104: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LI = t.UL = t.OL = void 0)
        var o = a(1),
          l = n(o),
          s = a(0),
          i = n(s),
          r = function(e) {
            var t = e.children
            return i.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              i.default.createElement(l.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          u = function(e) {
            var t = e.children
            return i.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              t,
              i.default.createElement(l.default, {
                styleId: '1299876035',
                css: [
                  'ul.jsx-1299876035{margin:30px 0;list-style:disc;padding:0 0 0 18px;}'
                ]
              })
            )
          },
          d = function(e) {
            var t = e.children,
              a = e.shallow,
              n = []
            return (
              a && n.push('shallow'),
              i.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (n.join(' ') || '') },
                t,
                i.default.createElement(l.default, {
                  styleId: '3704132522',
                  css: [
                    'li.jsx-3704132522{margin-bottom:15px;line-height:25px;}',
                    'li.shallow.jsx-3704132522{margin-bottom:10px;}'
                  ]
                })
              )
            )
          }
        ;(t.OL = r), (t.UL = u), (t.LI = d)
      },
      561: function(e, t, a) {
        e.exports = a(562)
      },
      562: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(0),
          l = n(o),
          s = a(4),
          i = n(s),
          r = a(3),
          u = n(r),
          d = a(5),
          h = n(d),
          c = a(96),
          f = a(98),
          m = n(f),
          p = a(95),
          y = n(p),
          w = a(108),
          g = a(104)
        t.default = function() {
          return l.default.createElement(
            i.default,
            null,
            l.default.createElement(h.default, { id: 'support' }),
            l.default.createElement(
              u.default,
              null,
              'I’m not a “Well, they might fix it in the future” kind of a person. If my process of interaction with a specific product is being interrupted by some nasty bug or a missing feature, I will make sure to let the creator know about this — no matter if it’s made by a single person or a company like Apple (I still believe that the folks over there will take their time to read it and sometimes even write back).'
            ),
            l.default.createElement(
              u.default,
              null,
              'And what I really like is, that many companies and independent creatives actually encourage this behaviour of mine by providing me with easy ways to contact them if I need help or want to provide feedback.'
            ),
            l.default.createElement(
              u.default,
              null,
              'However, there are still enough projects out there who’s creators don’t spend much time thinking about how they can leverage the user’s experience and make him believe in the value of his feedback.'
            ),
            l.default.createElement(
              u.default,
              null,
              'If you ask me, they’re just cutting themselves with this kind of not-giving-a-shit-behaviour. I mean, they could definitely use the user’s ideas to save time and therefore also money. They can make the product better without needing to think about how to do so.'
            ),
            l.default.createElement(c.H2, null, 'Common Mistakes'),
            l.default.createElement(
              u.default,
              null,
              'Firstly, let’s start off with the way the user needs to go to contact the makers. Most companies are offering multiple contacting ways like e-mail, social networks or live-chats (and some even a hotline with 30 minutes waiting time). Among those methods, there’s also the well-known contact form. You’re basically forced to provide pre-defined amounts of information which will then mostly just be converted into a freaking email reaching the creator, in turn.'
            ),
            l.default.createElement(u.default, null, 'Why? Really — why?'),
            l.default.createElement(
              u.default,
              null,
              l.default.createElement('b', null, 'I know why.'),
              ' You’re basically afraid that the user is too dumb to provide the necessary amount of information (or you just like generating extra effort for your fellow developers, which will need to code the “Drop us a message” page), right? Okay, then you’re at least caring about this process a bit.'
            ),
            l.default.createElement(
              u.default,
              null,
              'But not enough! Just think about it, there’s always some information left. You can’t cover all scenarios by simply forcing the user to think about which category is the most fitting one for his problem and then allowing him to choose it from a select-element (as an example).'
            ),
            l.default.createElement(
              u.default,
              null,
              'You need to leave him space for creativity. You need to allow him to use his own ways of explaining to show you what he’s missing or where he needs help from you. You need to let him digress from the explanation of his initial problem to maybe also think about a possible solution by himself, too. And yes; I AM looking on you, products with only this one contacting-method.'
            ),
            l.default.createElement(m.default, null),
            l.default.createElement(
              u.default,
              null,
              'I already mentioned the first one in the paragraphs above: e-mail. Why even bother setting up a contact form if the user is able to send out mails directly from his own mail-client? Therefore, he would be able to keep track of his sent messages and easily follow the conversations.'
            ),
            l.default.createElement(
              g.UL,
              null,
              l.default.createElement(
                g.LI,
                null,
                l.default.createElement(
                  'b',
                  null,
                  'Allow the user to follow up:'
                ),
                ' You might see this as a naturalness, but I’ve experienced many cases in which the UI forced me to write my feedback or support question over a pre-defined contact form. And the best thing: After I had received the answer, it didn’t even contain the text I had initially sent. How the fuck should I know what I sent days ago? Exactly! I guess I’m not the only person who’s sending much more than just one message each day — please make sure to provide the user with the question he had asked before (just add it as quotation to the end of the mail, for example).'
              ),
              l.default.createElement(
                g.LI,
                null,
                l.default.createElement(
                  'b',
                  null,
                  'One conversation for each question:'
                ),
                ' I know this might sound stupid, but there definitely are companies out there which are using some really neat ticketing-systems that are basically opening a new e-mail-conversation for each answer. What the heck? Just use the exact same thread the user wrote from to answer back.'
              ),
              l.default.createElement(
                g.LI,
                null,
                l.default.createElement(
                  u.default,
                  null,
                  l.default.createElement('b', null, 'Don’t repeat yourself:'),
                  ' I’m talking about information which has already been shown once — don’t waste space and use the same text again. A great example for this is the mail I recently automatically received from ',
                  l.default.createElement(
                    y.default,
                    { href: 'http://codepen.io' },
                    'CodePen'
                  ),
                  ' because my test for the premium package has expired:'
                ),
                l.default.createElement(w.Image, {
                  src: '/static/essays/2015/support/codepen.png'
                }),
                l.default.createElement(
                  u.default,
                  null,
                  'Why did they add the “CodePen” lettering to the subject line? It’s already the content of the “sender” meta-item. Just leave it out, thanks!'
                )
              ),
              l.default.createElement(
                g.LI,
                null,
                l.default.createElement(
                  'b',
                  null,
                  'You don’t need 30-line-long signatures:'
                ),
                ' I know you want to provide the user with all details about your company — but stop it, you don’t need to! The fact that the user already contacted you over e-mail means that he doesn’t need to know your freaking hotline-number or postal address (and even if he wants those, he just needs to open your website). Just be a bit more personal and use signatures which simply contain the name of the support staff who wrote the answer. For example: Cheers, Scott — Thats it! You don’t need more.'
              )
            ),
            l.default.createElement(
              u.default,
              null,
              'As I already said, please don’t force the user to write with you over your damn platform. He should be able to follow up whenever he wants to and shouldn’t need to log into your site to do so first. Just make use of things like Facebook, Twitter and the good-ol’',
              ' ',
              l.default.createElement(
                y.default,
                {
                  href:
                    'http://www.guinnessworldrecords.com/60/images/records/1971.jpg'
                },
                'e-mail'
              ),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Every single one of your users writes messages to multiple completely different services and I don’t think he wants to have all those messages scattered around different platforms (at least I personally don’t think that’s purposeful in any way). Take your time and make sending feedback and support questions more comfortable! You’ll quickly see that more users are spending their extremely valuable time to make your product better, because they want to be able to use it without disorders.'
            ),
            l.default.createElement(m.default, null),
            l.default.createElement(
              u.default,
              null,
              'Regarding the “one conversation for each question” argument: Please also make sure to not force the user to proceed with the dialogue over a completely different medium. The conversation should be started and finished in one stream (or “thread” if that makes more sense to you).'
            ),
            l.default.createElement(
              u.default,
              null,
              'For example, if a user reports a bug over Twitter, don’t advise him to fill out a freaking bug report. That just makes the user’s effort on getting the feedback to you redundant. — If you’re out of luck, he might even loose the incentive of writing you once again completely.'
            ),
            l.default.createElement(
              u.default,
              null,
              l.default.createElement(
                'i',
                null,
                'Thanks to',
                ' ',
                l.default.createElement(
                  y.default,
                  { href: 'https://github.com/e2b' },
                  '@e2b'
                ),
                ' ',
                'for letting me know about this.'
              )
            ),
            l.default.createElement(m.default, null),
            l.default.createElement(
              u.default,
              null,
              'When allowing users to write their feedback or questions via e-mail, the sender of the response should be set to your company’s name (or something similar). I saw a few bad examples like the following one, who basically set it to the real name of the guy who wrote me back:'
            ),
            l.default.createElement(w.Image, {
              src: '/static/essays/2015/support/github.png'
            }),
            l.default.createElement(
              u.default,
              null,
              'Now every time the user opens the mail app, it auto-completes the content of the “receiver”-field as soon as he starts typing in the company’s address. And no — even if he tries to remove this information, most apps will make sure that it stays.'
            ),
            l.default.createElement(
              u.default,
              null,
              'And technically, this info isn’t useful at all. I mean, if you have more than 1 single support staff, the user won’t write with Scott each time. He might also write with ',
              l.default.createElement('i', null, 'Ann'),
              ' or ',
              l.default.createElement('i', null, 'Jacob'),
              ', since they use the exact same address to stay in contact with customers — therefore the name is pretty useless in this context.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Yep. I do know that you can turn this off, but many apps have this option enabled by default. And if something is enabled by default, it’s very likely to not be disabled yet by the “average user”.'
            ),
            l.default.createElement(m.default, null),
            l.default.createElement(
              u.default,
              null,
              'All in all, simply be careful when setting up your new company’s customer relationship mechanisms.'
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
            s = a(1),
            i = n(s),
            r = a(0),
            u = n(r),
            d = a(97),
            h = n(d),
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
                            href: '#' + (0, h.default)(l),
                            id: (0, h.default)(l),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    o
                  ),
                  u.default.createElement(i.default, {
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
            f = 1;
          f <= 6;
          f++
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
          })(f)
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
          s = a(0),
          i = n(s)
        t.default = function() {
          return i.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            i.default.createElement(l.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [561]
  ))
  return { page: comp.default }
})
