window.__NEXT_REGISTER_PAGE('/2015/fixing-apple-music', function() {
  var comp = (module.exports = webpackJsonp(
    [36],
    {
      104: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LI = t.UL = t.OL = void 0)
        var n = a(1),
          l = o(n),
          i = a(0),
          s = o(i),
          r = function(e) {
            var t = e.children
            return s.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              s.default.createElement(l.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          u = function(e) {
            var t = e.children
            return s.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              t,
              s.default.createElement(l.default, {
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
              o = []
            return (
              a && o.push('shallow'),
              s.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (o.join(' ') || '') },
                t,
                s.default.createElement(l.default, {
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
      107: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Note = t.Ref = t.FootNotes = void 0)
        var n = a(1),
          l = o(n),
          i = a(0),
          s = o(i),
          r = a(3),
          u = o(r),
          d = a(98),
          f = o(d)
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
      523: function(e, t, a) {
        e.exports = a(524)
      },
      524: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(0),
          l = o(n),
          i = a(4),
          s = o(i),
          r = a(3),
          u = o(r),
          d = a(5),
          f = o(d),
          h = a(95),
          c = o(h),
          m = a(96),
          p = a(104),
          y = a(107)
        t.default = function() {
          return l.default.createElement(
            s.default,
            null,
            l.default.createElement(f.default, { id: 'fixing-apple-music' }),
            l.default.createElement(
              u.default,
              null,
              'When Apple Music came out with iOS 8.4 a few weeks ago, I immediately knew that I wanted to switch over from Spotify. Although their service has always been stable and cheap, Apple',
              "'",
              's way of doing it brings more advantages in terms of integration and music management.'
            ),
            l.default.createElement(
              u.default,
              null,
              'That',
              "'",
              's of course the consequence of the fact, that they',
              "'",
              're able to access the stuff I',
              "'",
              've bought on the iTunes Store in the last years. I don',
              "'",
              't need to have two accounts with two different states at two different providers anymore. It',
              "'",
              's all merged together with my other iCloud stuff. After switching to the new music service, I found out that it works pretty well. But nevertheless, it still has many bugs and UX-insecurities which come from iTunes',
              "'",
              ' messy past with features like iTunes match, music auto-download, iTunes Store purchases and syncing all that stuff across different devices. But now, I feel like Apple really wants to fix this.'
            ),
            l.default.createElement(
              u.default,
              null,
              'It might not look like that in the first place, but if you look closer, you can see that they',
              "'",
              're already trying to hide some things away until they can finally remove them. But in the current state of their service, this action just seems to confuse most users. Besides that, it led to Apple music not syncing like it should, showing duplicated items and so on.'
            ),
            l.default.createElement(
              u.default,
              null,
              'In this post, I',
              "'",
              'd like to clear up what I think the guys at Apple are currently trying to accomplish and how we can use it to make our own music sync smoothly across all our devices.'
            ),
            l.default.createElement(
              u.default,
              null,
              'First off, I need to clarify that there are some things I can',
              "'",
              't help you fix: I',
              "'",
              'm talking of the problem, that some titles are sometimes not getting added to your library after you',
              "'",
              've clicked on',
              ' ',
              '"',
              'Add to my music',
              '"',
              '. That',
              "'",
              's something they need to fix by themselves before we can have a clean user-experience. But there',
              "'",
              's one thing I can help you with:'
            ),
            l.default.createElement(m.H2, null, 'The Syncing Problem'),
            l.default.createElement(
              u.default,
              null,
              'Like many of you, I',
              "'",
              've also noticed that Apple music sometimes just shows different amounts of my music on my devices. After adding a song on my iPhone, it sometimes wasn',
              "'",
              't shown on my iMac (even after re-enabling the iCloud music library).'
            ),
            l.default.createElement(
              u.default,
              null,
              'After experiencing this a couple of times, I was very pissed off. Later, I also read many articles like',
              ' ',
              l.default.createElement(
                c.default,
                {
                  href:
                    'http://www.loopinsight.com/2015/07/22/apple-music-is-a-nightmare-and-im-done-with-it/'
                },
                'this one'
              ),
              ' ',
              'about how bad the service currently is and that they',
              "'",
              'll leave it in favor of Spotify.'
            ),
            l.default.createElement(
              u.default,
              null,
              'But I didn',
              "'",
              't want to move again. I refused to believe that Apple actually delivered shit instead of the usual, perfect stuff. I mean, I wasn',
              "'",
              't even on a beta. Also, many of my friends and other people I know about the web didn',
              "'",
              't had that problem. So I knew, there needs to be something I was missing on my side.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Why is it working for many people and for some it',
              "'",
              's not?'
            ),
            l.default.createElement(m.H2, null, 'Suddenly, It Was All Fine'),
            l.default.createElement(
              u.default,
              null,
              'Then, a few days later, I decided to put another 3 hours of effort into digging into a possible solution I thought of. And suddenly, it all worked well. Now, I just need to add an album on my iMac for example, and it directly appears on my iPhone. I don',
              "'",
              't even need to re-open the Music app or stuff like that, it just seems to work fine now.'
            ),
            l.default.createElement(
              u.default,
              null,
              'And the same goes for my iPhone: Adding, removing, playing. It all works smoothly. There are no items missing in ',
              '"',
              'Recently added',
              '"',
              ' anymore and the library looks exactly like the one on my other devices.'
            ),
            l.default.createElement(
              u.default,
              null,
              'What I did? ',
              l.default.createElement('b', null, 'I just started fresh.')
            ),
            l.default.createElement(
              u.default,
              null,
              'After some time, I noticed a common behavior with all those people that were experiencing problems with Apple Music. They either...'
            ),
            l.default.createElement(
              p.UL,
              null,
              l.default.createElement(
                p.LI,
                null,
                'Imported their music from other services through Beats'
              ),
              l.default.createElement(
                p.LI,
                null,
                'Used a third-party app to move them'
              ),
              l.default.createElement(
                p.LI,
                null,
                'Added music that isn',
                "'",
                't on the Apple Music platform through CDs or the iTunes Store'
              )
            ),
            l.default.createElement(
              u.default,
              null,
              'I know that it shouldn',
              "'",
              't be like this and that Apple should fix this too, but in the current state of the platform, music from different ends just makes everything worse. Yeah, I also know that you want to use the music that you',
              "'",
              've bought on iTunes, but please just ignore that now.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Just do it like this: After deleting everything in your iCloud music library, all of your devices should display an empty library. If they don',
              "'",
              't do that, just sign out and back in on all of them.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Then, after you cleared everything out, you can start fresh - like I did it. And this time, don',
              "'",
              't download music from the iTunes Store or import some from CDs. The meta information of those titles currently simply messes up the order of all existing albums and therefore ruins the sync. Just rely on Apple Music',
              "'",
              's catalog until Apple fixes this problem and you',
              "'",
              'll experience the smooth syncing you',
              "'",
              're looking for.'
            ),
            l.default.createElement(m.H2, null, 'Why Does It Work Now?'),
            l.default.createElement(
              u.default,
              null,
              'Once I',
              "'",
              've removed all my albums from my iCloud music library (in order to start fresh), I noticed that if I turn it off on one of my devices, the same device will only show the music that I',
              "'",
              've bought on the iTunes Store - nothing else.'
            ),
            l.default.createElement(
              u.default,
              null,
              'And then, after I enabled it again, all items from the iTunes Store were hidden and my empty iCloud music library was shown. Thanks to this, I',
              "'",
              've noticed that there are two states of music in your iCloud: One list that contains all not-hidden',
              l.default.createElement(y.Ref, { id: '1' }),
              ' songs which you',
              "'",
              've bought from the store and one, that',
              "'",
              's called ',
              '"',
              'iCloud music library',
              '"',
              ' - and this one only contains a user-selected list of songs that you',
              "'",
              've added manually from the Apple music catalog, it doesn',
              "'",
              't naturally contain the songs that you',
              "'",
              've bought on the store.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Now the tricky thing about that',
              ' ',
              '"',
              'iCloud music library',
              '"',
              ' ',
              'thing: You',
              "'",
              're able to add that music. I',
              "'",
              'm talking of the songs that you',
              "'",
              've bought on the store or simply imported. But you shouldn',
              "'",
              't. Because that',
              "'",
              's exactly where your library will currently break.'
            ),
            l.default.createElement(
              u.default,
              null,
              'The reason why it breaks your library is because Apple is on its path to completely kill the bought-song model. The first step in this direction was completely separating the iCloud music library from the songs that you',
              "'",
              've actually bought',
              l.default.createElement(y.Ref, { id: '2' }),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'If they wouldn',
              "'",
              't to that, all users would be confused because the songs that they',
              "'",
              'vve bought are popping up in their iCloud music library too (besides the songs from the Apple Music catalog).'
            ),
            l.default.createElement(
              u.default,
              null,
              'If you ask me, that was one of their best decisions on this topic yet. To me, it really feels like their trying to move away the old iTunes Store stuff in favor of the new streaming model. And in the end, that',
              "'",
              's also the reason why your Apple music music isn',
              "'",
              't working if you want to use music that',
              "'",
              's not from the Apple music catalog. The songs from the iTunes Store or from CDs seem to have a different meta-data structure and therefore they',
              "'",
              're simply breaking your sync.'
            ),
            l.default.createElement(
              u.default,
              null,
              'Another proof of this thought of mine is the fact that as soon as you join Apple music the first time, your old songs from the iTunes Store aren',
              "'",
              't being moved to your iCloud music library. Only if some of your songs are on Apple Music, they will be added to your iCloud music library. Apple pointed this out under ',
              '"',
              'Using Apple Music',
              '"',
              ' in ',
              l.default.createElement(
                c.default,
                { href: 'https://support.apple.com/en-us/HT204962' },
                'this article'
              ),
              '.'
            ),
            l.default.createElement(
              u.default,
              null,
              'As I already said, I definitely think that this should be fixed by Apple. But in the current state of the service, it simply isn',
              "'",
              't (which is why I wrote this post). Just start fresh and don',
              "'",
              't add music from a different place than Apple Music - at least until Apple officially fixes this.'
            ),
            l.default.createElement(
              y.FootNotes,
              null,
              l.default.createElement(
                y.Note,
                { id: '1' },
                'As you might already know, there',
                "'",
                's this feature which allows you to hide bought songs from your music library. It',
                "'",
                's located in the right-click-menu. After you',
                "'",
                've removed an album, you can make it visible again by opening your Account in the iTunes Store and then go to',
                ' ',
                l.default.createElement(
                  c.default,
                  {
                    href:
                      'http://9to5mac.files.wordpress.com/2011/10/mac-app-store-view-hidden-purchases.jpg'
                  },
                  'Hidden Purchases'
                ),
                '.'
              ),
              l.default.createElement(
                y.Note,
                { id: '2' },
                'After starting fresh, there',
                "'",
                's no way to access the songs you',
                "'",
                've bought on the iTunes Store, besides disabling the iCloud music library. As you can see, Apple is trying to keep our hands away from the bought songs if we want to enjoy Apple Music.'
              )
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
            l = o(n),
            i = a(1),
            s = o(i),
            r = a(0),
            u = o(r),
            d = a(97),
            f = o(d),
            h = function(e) {
              var t = e.level,
                a = e.fontSize,
                o = e.linked,
                n = e.children,
                l = n
              return (
                Array.isArray(n) &&
                  (l = n
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
                    o &&
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
                    n
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
            c = 1;
          c <= 6;
          c++
        )
          !(function(e) {
            var a = 'H' + e,
              o = [23, 18, 15, 13, 10, 9],
              n = function(t) {
                return new h(
                  (0, l.default)({}, t, {
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
          l = o(n),
          i = a(0),
          s = o(i)
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
    [523]
  ))
  return { page: comp.default }
})
