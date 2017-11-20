window.__NEXT_REGISTER_PAGE('/2015/front-end-editors', function() {
  var comp = (module.exports = webpackJsonp(
    [60],
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
          s = a(0),
          i = o(s),
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
          d = function(e) {
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
          u = function(e) {
            var t = e.children,
              a = e.shallow,
              o = []
            return (
              a && o.push('shallow'),
              i.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (o.join(' ') || '') },
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
        ;(t.OL = r), (t.UL = d), (t.LI = u)
      },
      527: function(e, t, a) {
        e.exports = a(528)
      },
      528: function(e, t, a) {
        'use strict'
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(0),
          l = o(n),
          s = a(4),
          i = o(s),
          r = a(3),
          d = o(r),
          u = a(95),
          f = o(u),
          h = a(5),
          c = o(h),
          m = a(104)
        t.default = function() {
          return l.default.createElement(
            i.default,
            null,
            l.default.createElement(c.default, { id: 'front-end-editors' }),
            l.default.createElement(
              d.default,
              null,
              'If you’re on a social network and following some of the most known people in the industry, you can’t use excuse that you don’t already know of this topic. Every month someone new comes around with a supposedly better solution for allowing clients to easily edit their websites by themselves, without needing to contact an agency and pay a lot of money just to make a small change on the site.'
            ),
            l.default.createElement(
              d.default,
              null,
              'I took my time and started looking carefully on how those people are building such products and I noticed: Instead of learning from each other, they always make the same faults over and over again.'
            ),
            l.default.createElement(
              d.default,
              null,
              'Therefore I’d like to use this post to clear up some things for all those of you who’re planning to go into this direction too, since you’d like to enable casual people (who are no developers at all) to be independent from expensive companies. If you ask me, it’s not a bad idea at all. It just needs to be done properly!'
            ),
            l.default.createElement(
              d.default,
              null,
              'Then let’s start with some common errors I’ve recently noticed on many of those applications:'
            ),
            l.default.createElement(
              m.UL,
              null,
              l.default.createElement(
                m.LI,
                null,
                'Content isn’t absolute. It’s relative. If you’re developing websites and want to take care of it’s usability, you’ll build it mobile first. Which means that the elements on your site will react to the size of the screen and show different variants of the initial content to be perfectly accessible for users on different devices. This in turn means that you definitely need to find a way to edit those elements in deviant forms.'
              ),
              l.default.createElement(
                m.LI,
                null,
                'Elements aren’t always visible and therefore editable. They’re hidden between sliders, curtains, and other kinds of walls of different items or effects. If you want to create a productive app that makes editing easier, you either have to find a way to show those hidden parts as soon as the user wants to edit them (which is very hard since every design has a completely different markup for those things) or provide a different view for those items, which shows all hidden items so that the users can change their contents.'
              ),
              l.default.createElement(
                m.LI,
                null,
                'To break it down: More ease on the aspect of editing on the front side also means less possible complexity when it comes to the layout. If you want to create a useful solution, you need to find a way to maintain the complexity of the layout while also making it easy to edit (and maybe also move) elements around.'
              )
            ),
            l.default.createElement(
              d.default,
              null,
              'While developing such things, please take advantage of other peoples knowledge. Many of us spend hours of thinking about the right process and I’m sure you don’t want to waste time.'
            ),
            l.default.createElement(
              d.default,
              null,
              'As I already said, I’d love to provide clients with a front-end editing tool that doesn’t suck and I’m probably going implement one into',
              ' ',
              l.default.createElement(
                f.default,
                { href: 'http://muffin.cafe' },
                'Muffin'
              ),
              '.'
            ),
            l.default.createElement(
              d.default,
              null,
              'But please don’t understand this like an attack on those apps. I don’t fear for my job (like many others who’re writing essays like this one do). If they do something, they do it for themselves, rather than for the community and therefore lack the necessary drive and literally only',
              ' ',
              l.default.createElement(
                f.default,
                {
                  href:
                    'https://medium.com/@imcatnoone/it-s-called-ship-not-shit-bf5f84d223f9'
                },
                'ship shit'
              ),
              ', which is also the reason why they need to fear for someone else coming around with a better solution.'
            ),
            l.default.createElement(
              d.default,
              null,
              'However, all in all, I don’t give a fuck about which solution will make the run. As long as it keeps the web alive, I’m happy. But as you can see, there’s still a lot of work to do! 👊'
            ),
            l.default.createElement(
              d.default,
              null,
              'Otherwise I wouldn’t be here — that’s my job.'
            )
          )
        }
      }
    },
    [527]
  ))
  return { page: comp.default }
})
