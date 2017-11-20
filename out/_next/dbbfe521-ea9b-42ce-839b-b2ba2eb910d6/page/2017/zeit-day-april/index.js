window.__NEXT_REGISTER_PAGE('/2017/zeit-day-april', function() {
  var comp = (module.exports = webpackJsonp(
    [33],
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
          i = a(0),
          r = n(i),
          s = function(e) {
            var t = e.children
            return r.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              r.default.createElement(l.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          h = function(e) {
            var t = e.children
            return r.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              t,
              r.default.createElement(l.default, {
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
              r.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (n.join(' ') || '') },
                t,
                r.default.createElement(l.default, {
                  styleId: '3704132522',
                  css: [
                    'li.jsx-3704132522{margin-bottom:15px;line-height:25px;}',
                    'li.shallow.jsx-3704132522{margin-bottom:10px;}'
                  ]
                })
              )
            )
          }
        ;(t.OL = s), (t.UL = h), (t.LI = d)
      },
      105: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(1),
          l = n(o),
          i = a(0),
          r = n(i),
          s = a(3),
          h = n(s)
        t.default = function(e) {
          var t = e.by,
            a = e.children
          return r.default.createElement(
            'blockquote',
            { className: 'jsx-4118782664' },
            r.default.createElement(
              h.default,
              null,
              a,
              t &&
                r.default.createElement(
                  'span',
                  { className: 'jsx-4118782664' },
                  '— ',
                  t
                )
            ),
            r.default.createElement(l.default, {
              styleId: '4118782664',
              css: [
                'blockquote.jsx-4118782664{margin:30px 0;color:#9B9B9B;font-style:oblique;border-left:3px solid #9B9B9B;padding-left:17px;font-size:15px;}',
                'span.jsx-4118782664{display:block;margin-top:15px;font-style:normal;}'
              ]
            })
          )
        }
      },
      182: function(e, t, a) {
        'use strict'
        var n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t]
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
              }
              return e
            },
          o = function e(t, a) {
            if ((t.length >= 0 && t.raw) || (a && a.length && a.raw))
              throw new Error(
                "you forgot to add 'markdown-in-js/babel' to your babel plugins"
              )
            return 'function' == typeof t
              ? e({}, t)
              : a
                ? 'function' == typeof a
                  ? a(
                      n(
                        {
                          br: 'br',
                          a: 'a',
                          img: 'img',
                          em: 'em',
                          strong: 'strong',
                          p: 'p',
                          h1: 'h1',
                          h2: 'h2',
                          h3: 'h3',
                          h4: 'h4',
                          h5: 'h5',
                          h6: 'h6',
                          code: 'code',
                          pre: 'pre',
                          hr: 'hr',
                          blockquote: 'blockquote',
                          ul: 'ul',
                          ol: 'ol',
                          li: 'li'
                        },
                        t
                      )
                    )
                  : void 0
                : function(a) {
                    return e(t, a)
                  }
          }
        e.exports = o
      },
      183: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(0),
          l = n(o),
          i = a(4),
          r = n(i),
          s = a(5),
          h = n(s)
        t.default = function(e) {
          return function(t) {
            return function() {
              return l.default.createElement(
                r.default,
                null,
                l.default.createElement(h.default, e),
                t
              )
            }
          }
        }
      },
      184: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(3),
          l = n(o),
          i = a(104),
          r = a(95),
          s = n(r),
          h = a(105),
          d = n(h),
          u = a(108),
          c = a(98),
          f = n(c),
          m = a(96)
        t.default = {
          p: l.default,
          ul: i.UL,
          ol: i.OL,
          li: i.LI,
          a: s.default,
          hr: f.default,
          blockquote: d.default,
          img: u.Image,
          h1: m.H1,
          h2: m.H2,
          h3: m.H3,
          h4: m.H4
        }
      },
      613: function(e, t, a) {
        e.exports = a(614)
      },
      614: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = a(0),
          l = n(o),
          i = a(182),
          r = n(i),
          s = a(183),
          h = n(s),
          d = a(108),
          u = a(184),
          c = n(u)
        t.default = (0, h.default)({ id: 'zeit-day-april', hasCover: !0 })(
          (0, r.default)(c.default, function(e) {
            return l.default.createElement(
              'div',
              { className: '_markdown_' },
              l.default.createElement(
                e.p,
                null,
                'When we had our first internal discussion about potentially making a conference happen around ',
                l.default.createElement(
                  e.a,
                  { href: 'https://zeit.co' },
                  'ZEIT'
                ),
                ', its products and ',
                l.default.createElement(
                  e.a,
                  { href: 'https://zeit.chat' },
                  'its community'
                ),
                ", I got very excited and was looking forward to the date. Not just because we haven't had one of these before, but also because it would've been my first time to meet the team in person."
              ),
              l.default.createElement(
                e.p,
                null,
                "Suddenly, it was April the 23th (a week before the conference), I packed my clothing and was driven to the Nuremberg airport, where I arrived at about 3 am. After checking in and eating something (didn't have breakfast), I had to say goodbye to my mum and entered the plane:"
              ),
              l.default.createElement(
                e.p,
                null,
                l.default.createElement(e.img, {
                  src: '/static/essays/2017/zeit-day-april/nuremberg.png',
                  alt: 'The plane'
                })
              ),
              l.default.createElement(
                e.p,
                null,
                "The last time I took a flight to a different country was about 7 years ago, so I wasn't familiar at all with the feeling anymore. However, the first half of the flight was pretty easy to handle for me: As the plane got higher and higher over the clouds, I tried to focus and keep calm, to make my body adapt to the different circumstances with ease."
              ),
              l.default.createElement(
                e.p,
                null,
                "But hell, the last few minutes were pure crap. The plane changed to descend and it felt like I was loosing the ground below my feet. At that time, I slowly started noticing that my body wasn't ready at all and my stomach was feeling really bad. I quickly grabbed the paper bag at the back of the seat in front of me and puked all over it."
              ),
              l.default.createElement(
                e.p,
                null,
                l.default.createElement(
                  e.a,
                  { href: 'https://www.youtube.com/watch?v=a8c5wmeOL9o' },
                  'Noice'
                ),
                ', right? 😌'
              ),
              l.default.createElement(
                e.p,
                null,
                'We were already on the runway on the Paris airport, so my seatmate quickly opened up his seatbelt and moved over to the aisle, while pulling all sorts of handkerchiefs out of his bags and handing them to me.'
              ),
              l.default.createElement(
                e.p,
                null,
                'I felt like pure shit and was laughing at the same time. Why? Because I knew that my body was sending me a signal and that I had to listen to it. In this case, it meant leaving the plane and not entering the one that goes to San Francisco. I wanted to stay in Paris and calm down before going on with anything else.'
              ),
              l.default.createElement(
                e.p,
                null,
                "And that's exactly what I did: I left the plane, took the exit door in the overpass to the SF plane (Paris was my stopover) and then reached the conveyor belt for getting my baggage."
              ),
              l.default.createElement(
                e.p,
                null,
                'Then it suddenly hit me: I was so dizzy that I completely ignored that the baggage will go straight to the next plane if the current airport is just a stopover for you. "Very nice, Leo... Very. Nice.", I thought.'
              ),
              l.default.createElement(
                e.p,
                null,
                'Because I knew that the plane to SF would be departing in just a few minutes from that time, I got into a rush and tried all kinds of ways to tell the airport folks to not move my stuff to the next plane (because I wanted to stay in Paris). Sadly, none of the special baggage phones or computers there helped me, because they were only being used for telling the flight provider about baggage that got lost.'
              ),
              l.default.createElement(
                e.p,
                null,
                'While trying to reach someone from their team on one of these phones, I placed my boarding card on the table next to me (which also had the baggage identification on it). Then I got tired of not having achieved anything to get my stuff back and left the area with the conveyor belt.'
              ),
              l.default.createElement(
                e.p,
                null,
                'Outside of that section, I found actual people from the airport team and told them about my problem (first class folks, because they were the only ones that spoke proper english). They got me another special black phone which I used to directly call someone from the "behind the scenes" guys and it took me a long time to explain who I was and what my baggage was. Why? Because I left the fucking boarding card in the other room.'
              ),
              l.default.createElement(e.p, null, 'GOTDAMMIT, LEO! 🤦'),
              l.default.createElement(
                e.p,
                null,
                "Thankfully, they've been very helpful and easy to handle, so we somehow managed to find my stuff only based on the information that I had in my mind. Once the conversation was over, my baggage was placed in terminal 2F. So I thought, the only thing left to do was to quickly walk over to it and get my clothing back. But no! Terminal 2F was about 20 minutes away from where I landed, because I had to take the bus, which also stopped at another terminal."
              ),
              l.default.createElement(
                e.p,
                null,
                "Once I finally arrived there, I wasn't able to straight to the conveyor belt for the baggage, because the doors were only one-way, of course. So I spent another 30 minutes talking to security people, who I explained my situation to and who then opened a special door for me, so that I could get to my stuff."
              ),
              l.default.createElement(
                e.p,
                null,
                'I looked at the luggage belt and waited. Nothing! I waited even longer. Still nothing! Finally I got pissed off and talked to some more first class support people, who then finally managed to get suitcase out onto the luggage belt after another 20 minutes of waiting.'
              ),
              l.default.createElement(
                e.p,
                null,
                "Who would have thought that getting out of a stopover would be so hard? Well, that was it. I didn't want to visit Paris anymore, I just wanted to go back home and write code in peace. Therefore, my next step was to get a train ticket to my hometown Bamberg (in Bavaria), which costed a whole lotta money."
              ),
              l.default.createElement(
                e.p,
                null,
                "It also took me about half an hour to even get that ticket, because I firstly tried the information centre, where I was standing in line, just to be told that the fucking printer doesn't work anymore."
              ),
              l.default.createElement(
                e.p,
                null,
                "But thankfully, they had a special shop in place which was designed specifically for getting such tickets, so that's where I finally bought them:"
              ),
              l.default.createElement(
                e.p,
                null,
                l.default.createElement(d.Image, {
                  src: '/static/essays/2017/zeit-day-april/tickets.png',
                  width: '380'
                })
              ),
              l.default.createElement(
                e.p,
                null,
                'Then I waited for about 4 hours: I called my mum, answered a few Slack messages, and even pushed Now Desktop forward. All despite the fact that I was completely dizzy from the flight. When the train ultimately came, I dropped into my seat like I was about to take a endless sleep.'
              ),
              l.default.createElement(
                e.p,
                null,
                'I was so tired, but happy to finally get back home!'
              ),
              l.default.createElement(
                e.p,
                null,
                "Hours over hours passed while I was facing into the opposite direction to where the train was going. All of this waiting while moving at about 300 km/h while sitting wrong (I always need to face into the direction of travel), made me even more dizzy and my head started feeling really heavy until I couldn't stand it anymore: I took the next exit and left the train in Brussels, Belgium."
              ),
              l.default.createElement(
                e.blockquote,
                null,
                l.default.createElement(
                  e.p,
                  null,
                  'Ok. Calm down, Leo. Get some fresh air!'
                ),
                l.default.createElement(
                  e.p,
                  null,
                  "Also... What the hell are you doing in Brussels? 600 km away from home?! It's getting pretty late, man!"
                )
              ),
              l.default.createElement(
                e.p,
                null,
                "After I ate something a tiny shop, I left the train station thinking that I could potentially get a taxi to drive me closer to my hometown, so that my mum could pick me up (being in a car is much more comfortable when you're feeling dizzy than being in in a train that's going 300 km/h, because you can stop whenever you want and eventually even make little pauses at restaurants to eat and drink something)."
              ),
              l.default.createElement(
                e.p,
                null,
                'I was immediately approached my a rather old man, who asked me if I was looking for a taxi. I was, so I followed him.'
              ),
              l.default.createElement(
                e.p,
                null,
                'Firstly, everything felt normal. But when the taxi cars showed up, we were walking into a completely different direction. I asked him where his taxi was and he pointed at a dented, big and grey car parking in a thin street.'
              ),
              l.default.createElement(
                e.p,
                null,
                'I instantly got suspicious and asked him for his taxi driver license. He showed me a simple receipt form with the word "Taxi driving" and his phone number on the top, which - of course - had nothing to do with an actual license.'
              ),
              l.default.createElement(
                e.p,
                null,
                "After that, I started walking away from him, trying to get to a real taxi. He kept following me asking where I wanted to go to, but once I told him where I was living, he suddenly got pretty quiet. Why? Because real taxis drive you as far as you want them to (at least in most countries I know), fakes ones fail after a few kilometres, because it's too heavy job for them."
              ),
              l.default.createElement(
                e.p,
                null,
                'Despite him shouting and pointing at other cars that were also fake taxis, I managed to get into a real one (a big van), where I then explained the driver my situation and where I wanted to go to. It took me ages to get it through, because he was very churned. Looking at the stuff that was laying in the front of his car, I also felt like he was doing drugs (which led to him being so nervous all the time).'
              ),
              l.default.createElement(
                e.p,
                null,
                'The taxi had already gained momentum, so I just told him to get me as far as possible to my hometown (still 600 kilometres away from that point).'
              ),
              l.default.createElement(
                e.p,
                null,
                "However, after rushing through Brussels' streets and mountains with his car (he wasn't driving responsible at all and constantly shouting stuff and calling people, shouting at them and so on), I started getting doubts. Should I really trust this guy with my life? He might as well drive me to somewhere else or do whatever the hell with my baggage."
              ),
              l.default.createElement(
                e.p,
                null,
                "So I lied to him and told him that a friend would pick me up and the train station (that's where we left), because I didn't want to hurt his feelings. He took a lot of detours and eventually managed to get back on the way to where we came from."
              ),
              l.default.createElement(
                e.p,
                null,
                "While we were driving, I started getting that bad feeling in stomach again (because he was going so reckless at full speed), so I asked him for a paper bag. But I couldn't even manage to get the message through, because I started choking on the word, which was why I made hand signs."
              ),
              l.default.createElement(
                e.p,
                null,
                'One thing led to another and I puked all over his taxi. I kinda managed to pull down the window, so I also puked the whole side of the big van (although I was aiming away from the car, it felt like it went all directly on it).'
              ),
              l.default.createElement(
                e.p,
                null,
                'He pulled over to the side on the highway, walked over to my side of the car and looked at it with a really nice look (I think he was pretty angry). Then he started shouting really weird things and pulled an ass full of paper handkerchiefs out of his trousers, before handing them to me through the window.'
              ),
              l.default.createElement(
                e.p,
                null,
                'Once he got back into the car, we drove over to the train station, where he dropped me off at the exact same position where we started from. I gave him 30€ more (rounded the price up to 100€) so that could clean his car and refrain from sending out his cousins to kick my ass or whatever.'
              ),
              l.default.createElement(e.p, null, 'Anyway.'),
              l.default.createElement(
                e.p,
                null,
                "I knew I had to call someone to pick me up in Brussels or maybe even spend a night there, because it was getting very late. Therefore I tried to find a hotel where I could spend a few hours without getting fooled by criminals. I wandered through the city near the train station and I couldn't find a single one suggested by Siri that wasn't looking suspicious."
              ),
              l.default.createElement(
                e.p,
                null,
                l.default.createElement(e.img, {
                  src: '/static/essays/2017/zeit-day-april/hotel.png',
                  alt: 'The hotel'
                })
              ),
              l.default.createElement(
                e.p,
                null,
                'But then, finally, I noticed that the train station had a build-in 4-star hotel! "Hell yeah", I thought. I placed my baggage there and asked the team if I could stay for a few hours, before I called my mum and asked her if she could get me. However, she wasn\'t very enthusiastic about that (of course, she would have to drive to Brussels, which would take about 5-6 hours). I tried to convince her with several techniques, but it simply didn\'t work. I had to book a night!'
              ),
              l.default.createElement(
                e.p,
                null,
                'In the hotel room, I threw all of my stuff on the ground, took a warm bath and immediately went to bed (I was so tired, I even left all of the lights on - they were on the whole night).'
              ),
              l.default.createElement(
                e.p,
                null,
                'Then, on the next morning, I booked yet another train ticket to a city close to my hometown (because I wanted to travel with train as less as possible, since I still felt very dizzy). I got on the train and picked the only seat that was facing into the direction of travel: One reserved for disabled people (I waited until the train gained momentum, of course, before choosing that seat - it was free).'
              ),
              l.default.createElement(
                e.p,
                null,
                l.default.createElement(e.img, {
                  src: '/static/essays/2017/zeit-day-april/frankfurt.png',
                  alt: 'Frankfurt'
                })
              ),
              l.default.createElement(
                e.p,
                null,
                'Just a few hours later, I arrived in Frankfurt, where I was supposed to get on another train to Bavaria. However, the guy who booked my ticket in Brussels chose the next train from a different train station in Frankfurt (the train was starting at the main station, but I arrived at the airport station). Since that was a mistake (not enough time to get to the other one), I had to buy YET ANOTHER train ticket. I even paid 4,50€ (what the hell?) for a simple bun with salmon on it.'
              ),
              l.default.createElement(
                e.p,
                null,
                'I was so happy when I finally arrived in Bavaria, where my mother picked me up. We drove home and I went back on my MacBook to continue writing code. After that, I got a lot of sleep.'
              ),
              l.default.createElement(e.hr, null),
              l.default.createElement(
                e.p,
                null,
                "Hell, those were shitty days! But that doesn't matter too much, since I'm back again and healthy. I just thought it would be funny to share this story with you, so that you can understand why I didn't make it to the conference this time."
              ),
              l.default.createElement(
                e.p,
                null,
                "I'll just leave this one thing here: There will be another ",
                l.default.createElement(
                  e.a,
                  { href: 'https://zeit.co/day' },
                  'ZEIT Day'
                ),
                " soon - and I'll be there, no doubt! 😜"
              )
            )
          })
        )
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
            r = n(i),
            s = a(0),
            h = n(s),
            d = a(97),
            u = n(d),
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
                h.default.createElement(
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
                      h.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        h.default.createElement(
                          'a',
                          {
                            href: '#' + (0, u.default)(l),
                            id: (0, u.default)(l),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    o
                  ),
                  h.default.createElement(r.default, {
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
          i = a(0),
          r = n(i)
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
    [613]
  ))
  return { page: comp.default }
})
