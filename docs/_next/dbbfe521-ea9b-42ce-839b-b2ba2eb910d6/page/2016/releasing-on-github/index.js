window.__NEXT_REGISTER_PAGE('/2016/releasing-on-github', function() {
  var comp = (module.exports = webpackJsonp(
    [37],
    {
      104: function(e, t, l) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LI = t.UL = t.OL = void 0)
        var n = l(1),
          o = a(n),
          r = l(0),
          s = a(r),
          i = function(e) {
            var t = e.children
            return s.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              s.default.createElement(o.default, {
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
              s.default.createElement(o.default, {
                styleId: '1299876035',
                css: [
                  'ul.jsx-1299876035{margin:30px 0;list-style:disc;padding:0 0 0 18px;}'
                ]
              })
            )
          },
          d = function(e) {
            var t = e.children,
              l = e.shallow,
              a = []
            return (
              l && a.push('shallow'),
              s.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (a.join(' ') || '') },
                t,
                s.default.createElement(o.default, {
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
      181: function(e, t, l) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = l(1),
          o = a(n),
          r = l(0),
          s = a(r)
        t.default = function(e) {
          var t = e.id,
            l = t ? ' ' + t : ''
          return s.default.createElement(
            'b',
            { className: 'jsx-1027436002' },
            'EDIT' + l + ':',
            s.default.createElement(o.default, {
              styleId: '1027436002',
              css: [
                'b.jsx-1027436002{background:#e9b6e1;padding:1px 3px;border-radius:3px;font-size:14px;font-weight:bold;color:#fff;}'
              ]
            })
          )
        }
      },
      595: function(e, t, l) {
        e.exports = l(596)
      },
      596: function(e, t, l) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = l(0),
          o = a(n),
          r = l(4),
          s = a(r),
          i = l(3),
          u = a(i),
          d = l(96),
          c = l(108),
          f = l(95),
          h = a(f),
          m = l(5),
          p = a(m),
          g = l(104),
          y = l(98),
          w = a(y),
          b = l(181),
          E = a(b)
        t.default = function() {
          return o.default.createElement(
            s.default,
            null,
            o.default.createElement(p.default, { id: 'releasing-on-github' }),
            o.default.createElement(
              u.default,
              null,
              'Every since programmers have started writing applications for the general public, there has always been that weird structural mess when thinking about how we should actually make them available to people who’re not so involved in what we’re doing (or even to ourselves).'
            ),
            o.default.createElement(
              u.default,
              null,
              'In turn, many of us have come up with their own concepts of how it should be done. Some folks even created very explicit guidelines with the intention of making their team move faster while keeping a consistent style.'
            ),
            o.default.createElement(
              u.default,
              null,
              'The community’s huge demand for a straightforward way of doing it has also led to the creation of things like Semantic Versioning, GitHub Releases and various open-source projects for automatically generating releases for your application.'
            ),
            o.default.createElement(
              u.default,
              null,
              'Today, I’m pretty comfortable with saying that we’re in a good position when it comes to the availability of concepts and small studies about how to properly publish releases for software.'
            ),
            o.default.createElement(
              u.default,
              null,
              'However — as with many things in our industry — there’s still a lot of bikeshedding going on.'
            ),
            o.default.createElement(
              u.default,
              null,
              'We’ll probably never reach the point where everybody agrees on the same opinions. Rather than that, there will most likely always be people who’re stubborn enough to completely ignore the benefits that the industry would be deriving from a consistent workflow.'
            ),
            o.default.createElement(d.H2, null, 'But Who Cares, Right? 😋'),
            o.default.createElement(
              u.default,
              null,
              'Instead of complaining about the problems of our industry, I’d like to take the chance and propose a new, simple concept for properly taking advantage of GitHub’s release mechanism.'
            ),
            o.default.createElement(
              u.default,
              null,
              'Increasing our common ground in this area helps the whole community to move forward faster and allows developers to focus on their actual software instead of wondering about the perfect setup for the releases.'
            ),
            o.default.createElement(
              u.default,
              null,
              'Got it? Then let’s start with...'
            ),
            o.default.createElement(d.H2, null, 'The Basics'),
            o.default.createElement(
              u.default,
              null,
              'Assuming that you’d like to publish ',
              o.default.createElement('b', null, 'version 0.2.0'),
              ' of a certain project, the first thing you need to do is open up your repository on GitHub.'
            ),
            o.default.createElement(w.default, null),
            o.default.createElement(
              u.default,
              null,
              'Now let your eyes float over the statistic bar at the top (the one with the colored bar at the bottom) and click on this section:'
            ),
            o.default.createElement(c.Image, {
              src: '/static/essays/2016/releasing-on-github/section.png'
            }),
            o.default.createElement(
              u.default,
              null,
              'Next, the “Releases” page will open. This is the place where the users of your software will later be looking for a descriptive list of what changed in each new update.'
            ),
            o.default.createElement(
              u.default,
              null,
              'At the moment, you haven’t created any releases yet and GitHub is asking you to create one. So let’s go ahead, hit the button:'
            ),
            o.default.createElement(c.Image, {
              src: '/static/essays/2016/releasing-on-github/new.png'
            }),
            o.default.createElement(
              u.default,
              null,
              'Now you’re on the most important page of all: The one that allows you to create a new release. To be more precise, you should currently be looking at the four most important fields:'
            ),
            o.default.createElement(d.H3, null, 'Tag Version'),
            o.default.createElement(
              u.default,
              null,
              'Because you want to publish version 0.2.0 of your project, you need to set this field to “0.2.0”.'
            ),
            o.default.createElement(
              u.default,
              null,
              'While some people might suggest you to prefix the version with “v”, I highly recommend against that: It’s clear that each new release also requires the increase of the version number (like stated ',
              o.default.createElement(
                h.default,
                { href: 'http://semver.org' },
                'here'
              ),
              ').'
            ),
            o.default.createElement(d.H3, null, 'Target Commit'),
            o.default.createElement(
              u.default,
              null,
              'Whenever you create a new commit using GitHub Releases, it will automatically generate a Git Tag for you. In order to create this tag, the platform needs to know which commit it should point to.'
            ),
            o.default.createElement(
              u.default,
              null,
              'By default, it will point to the last commit on the master branch. If you want to select a specific commit (you should only choose commits that are part of the release bundle), simply click on the button and switch it.'
            ),
            o.default.createElement(d.H3, null, 'Release Title'),
            o.default.createElement(
              u.default,
              null,
              'I recommend leaving this one empty. This will simply instruct GitHub to use the version number as the release title.'
            ),
            o.default.createElement(
              u.default,
              null,
              'However, if you’d like to surprise your users with a interesting, thoughtful phrase (or just a stupid arrangement of words), you can also put that one in and ensure a unique style that people will associate with you.'
            ),
            o.default.createElement(d.H3, null, 'Changelog'),
            o.default.createElement(
              u.default,
              null,
              'This multi-line text field is the most important part of the whole release. It indicates the changes made and how they’ll affect the user.'
            ),
            o.default.createElement(
              u.default,
              null,
              'Although this is a completely free-form text field, I highly suggest following the strict concept of Semantic Versioning. This means that you’ll end up with three headings:'
            ),
            o.default.createElement(
              g.UL,
              null,
              o.default.createElement(g.LI, null, 'Major Changes'),
              o.default.createElement(g.LI, null, 'Minor Changes'),
              o.default.createElement(g.LI, null, 'Patches')
            ),
            o.default.createElement(
              u.default,
              null,
              'Each section should start with a heading of the third type (three hashes in markdown) and contain a bullet list of changes with a quick explanation about what exactly changed, how it affects the end user and Links to the commits, pull requests and issues that are related to it.'
            ),
            o.default.createElement(d.H2, null, 'The Finish Line ....... 🏃‍'),
            o.default.createElement(
              u.default,
              null,
              'Once you’ve filled out all of these fields, you’re ready to publish your first release! Just hit the “publish release” button and it will be live. After that, your users will be able to look up the changes made in each new update directly on GitHub.'
            ),
            o.default.createElement(
              u.default,
              null,
              'This ensures transparency, shows your fans that you’re caring about your creations and makes sure that people will update their copy of your software to a release that fixes a certain bug instead of simply reporting it again (less work for you).'
            ),
            o.default.createElement(
              u.default,
              null,
              'Some other great advantages of releasing on GitHub:'
            ),
            o.default.createElement(
              g.UL,
              null,
              o.default.createElement(
                g.LI,
                null,
                'You can use their',
                ' ',
                o.default.createElement(
                  h.default,
                  { href: 'https://developer.github.com/v3/repos/releases/' },
                  'API'
                ),
                ' ',
                'to show the changelog somewhere else: Need it on your website? Or maybe even directly in the application? Easy!'
              ),
              o.default.createElement(
                g.LI,
                null,
                'A consistent changelog structure allows people to easily parse the content of your releases and display them in their own style.'
              ),
              o.default.createElement(
                g.LI,
                null,
                'Assuming that all developers are going to handle their software releases like mentioned above, we’ll be able to minimise the amount of confusion that gets created from everyone swearing by a different technique. In turn, we’ll move much faster collectively.'
              )
            ),
            o.default.createElement(d.H2, null, 'Examples'),
            o.default.createElement(
              u.default,
              null,
              'Here’s a list of selected repositories on which I’ve applied this technique (all of them are built on top of ',
              o.default.createElement(
                h.default,
                { href: 'https://nodejs.org/en/' },
                'Node'
              ),
              '):'
            ),
            o.default.createElement(
              g.UL,
              null,
              o.default.createElement(
                g.LI,
                null,
                o.default.createElement(
                  h.default,
                  { href: 'https://github.com/zeit/now-desktop/releases' },
                  'Now Desktop'
                ),
                ' ',
                '— The native client for ZEIT’s now'
              ),
              o.default.createElement(
                g.LI,
                null,
                o.default.createElement(
                  h.default,
                  { href: 'https://github.com/leo/args/releases' },
                  'Args'
                ),
                ' ',
                '— A minimal toolkit for creating Clis with node'
              ),
              o.default.createElement(
                g.LI,
                null,
                o.default.createElement(
                  h.default,
                  { href: 'https://github.com/zeit/micro/releases' },
                  'Micro'
                ),
                ' ',
                '— Async HTTP microservices made easy'
              )
            ),
            o.default.createElement(d.H2, null, 'Exceptions'),
            o.default.createElement(
              u.default,
              null,
              'We’re not living in a world where everything is just black or white. Although the concept mentioned above is perfectly for most projects, there might still be some cases in which the kind of software you’re releasing isn’t suitable for this release structure.'
            ),
            o.default.createElement(
              u.default,
              null,
              'What you should do in these cases is carefully try to adapt the technique and if it doesn’t work for your project, simply modify it slightly.'
            ),
            o.default.createElement(
              u.default,
              null,
              'But keep in mind: Our goal is to avoid as much confusion as possible. So each repository that’s not fitting for this way of releasing software, should at least adapt as much as possible from the things mentioned above!'
            ),
            o.default.createElement(w.default, null),
            o.default.createElement(
              u.default,
              null,
              o.default.createElement('b', null, "That's it! ✔️")
            ),
            o.default.createElement(
              u.default,
              null,
              'Now go out there and make sure that as many of your GitHub repositories as possible have proper releases in place. Thank you for caring about the welfare of our community/industry/whatever!'
            ),
            o.default.createElement(
              u.default,
              null,
              o.default.createElement(E.default, null),
              ' ',
              'I recently wrote',
              ' ',
              o.default.createElement(
                h.default,
                { href: 'https://github.com/zeit/release' },
                'release'
              ),
              ', which covers the whole workflow of creating a GitHub Release (and populating it with the changes made) with just a single command.'
            )
          )
        }
      },
      96: function(e, t, l) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          var n = l(7),
            o = a(n),
            r = l(1),
            s = a(r),
            i = l(0),
            u = a(i),
            d = l(97),
            c = a(d),
            f = function(e) {
              var t = e.level,
                l = e.fontSize,
                a = e.linked,
                n = e.children,
                o = n
              return (
                Array.isArray(n) &&
                  (o = n
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
                        fontSize: l,
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
                            href: '#' + (0, c.default)(o),
                            id: (0, c.default)(o),
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
            h = 1;
          h <= 6;
          h++
        )
          !(function(e) {
            var l = 'H' + e,
              a = [23, 18, 15, 13, 10, 9],
              n = function(t) {
                return new f(
                  (0, o.default)({}, t, {
                    level: e,
                    fontSize: a[e - 1],
                    linked: e > 1
                  })
                )
              }
            t[l] = n
          })(h)
      },
      97: function(e, t, l) {
        !(function(t, l) {
          e.exports = l()
        })(0, function() {
          function e(e) {
            return (
              (e = e.trim().toLowerCase()),
              (e = e.replace(t, '-')),
              (e = e.replace(l, ''))
            )
          }
          var t = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g,
            l = /(^-+|-+$)/g
          return e
        })
      },
      98: function(e, t, l) {
        'use strict'
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = l(1),
          o = a(n),
          r = l(0),
          s = a(r)
        t.default = function() {
          return s.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            s.default.createElement(o.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [595]
  ))
  return { page: comp.default }
})
