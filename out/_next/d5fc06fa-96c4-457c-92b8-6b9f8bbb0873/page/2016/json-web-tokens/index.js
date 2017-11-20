window.__NEXT_REGISTER_PAGE('/2016/json-web-tokens', function() {
  var comp = (module.exports = webpackJsonp(
    [40],
    {
      104: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LI = t.UL = t.OL = void 0)
        var l = a(1),
          s = n(l),
          r = a(0),
          o = n(r),
          i = function(e) {
            var t = e.children
            return o.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              t,
              o.default.createElement(s.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          u = function(e) {
            var t = e.children
            return o.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              t,
              o.default.createElement(s.default, {
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
              o.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (n.join(' ') || '') },
                t,
                o.default.createElement(s.default, {
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
      589: function(e, t, a) {
        e.exports = a(590)
      },
      590: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = a(0),
          s = n(l),
          r = a(4),
          o = n(r),
          i = a(3),
          u = n(i),
          d = a(95),
          h = n(d),
          f = a(5),
          c = n(f),
          m = a(108),
          p = a(98),
          w = n(p),
          y = a(96),
          g = a(104)
        t.default = function() {
          return s.default.createElement(
            o.default,
            null,
            s.default.createElement(c.default, { id: 'json-web-tokens' }),
            s.default.createElement(
              u.default,
              null,
              'There are many ways to handle authentication for web apps. Many frameworks (like Ember.js) come with a neat CLI and therefore only require a few commands to set up a new method for handling it. And that’s exactly how I stumbled upon JSON Web Tokens:'
            ),
            s.default.createElement(
              u.default,
              null,
              'In my current project, I’m using',
              ' ',
              s.default.createElement(
                h.default,
                { href: 'http://ember-simple-auth.com' },
                'ember-simple-auth'
              ),
              ' ',
              'for managing authentications and everything related to them.'
            ),
            s.default.createElement(
              u.default,
              null,
              'After setting it up, the default authentication you get is OAuth2. However, I didn’t just wanted to keep what I was given. I wanted to find out what the best method for my particular case is. So I’ve crawled the web for nearly an hour and found out that there really is a better way for me to handle those things: So-called “JWTs”.'
            ),
            s.default.createElement(
              u.default,
              null,
              'And because it was also a lot of fun to implement them, I’d like to share with you why it might be the best solution for your app, too.'
            ),
            s.default.createElement(u.default, null, 'Ready? Fine!'),
            s.default.createElement(w.default, null),
            s.default.createElement(y.H2, null, 'How It Works'),
            s.default.createElement(
              u.default,
              null,
              'In contrast to OAuth2 sessions, JWT sessions are self-contained. That means all the information about current session is already part of the token itself. So instead of saving details about each running session to the DB (like OAuth does it), all the data that is required to verify such a session is already being stored on the client.'
            ),
            s.default.createElement(
              u.default,
              null,
              'More specifically, here are all the steps of such a process:'
            ),
            s.default.createElement(
              g.OL,
              null,
              s.default.createElement(
                g.LI,
                null,
                'After the user enters his name and password, the data will be sent to the API (preferably through HTTPS).'
              ),
              s.default.createElement(
                g.LI,
                null,
                'On there, both fields should be compared to the user’s DB entry. If the user exists and the password matches, step 3 will take effect. If not, the client will receive an error informing the user about entering different credentials.'
              ),
              s.default.createElement(
                g.LI,
                null,
                'Username and password will be passed to a middleware of your choice (I’m using',
                ' ',
                s.default.createElement(
                  h.default,
                  { href: 'https://github.com/koajs/jwt' },
                  'koa-jwt'
                ),
                ', since I’m using Koa for the web server). In there, the data will be encrypted with the previously mentioned private session key and converted into a single String: The so-called “token”.'
              ),
              s.default.createElement(
                g.LI,
                null,
                'That token will now be added to the response. From now on, it’s saved on the client (either as a cookie, or in the LocalStorage).'
              )
            ),
            s.default.createElement(
              u.default,
              null,
              'Each time the client tries to load data from the API, it will add that token to the request’s headers. This makes it easy for the server to verify if it’s still a valid session token by decrypting the token using the private session key and comparing the obtained data to the user’s DB entry:'
            ),
            s.default.createElement(m.Image, {
              src: '/static/essays/2016/json-web-tokens/diagram.png',
              origin: 'https://jwt.io'
            }),
            s.default.createElement(
              u.default,
              null,
              'However, I think most middlewares don’t actually compare the token’s contents again. They simply decrypt it and if that’s not possible, it was abviously not generated using the session secret and therefore not issued by the server. In this case, the client will receive an error, the session token will get destroyed and the user will get logged out.'
            ),
            s.default.createElement(y.H2, null, 'Letting Sessions Expire'),
            s.default.createElement(
              u.default,
              null,
              'Since there’s no session data saved on the API-part of the app, there’s also no way to destroy it from there.'
            ),
            s.default.createElement(
              u.default,
              null,
              'Because of this, most middlewares that support JSON Web Tokens will simply append a property called “exp” to the response when passing the token to the client (see step 4).'
            ),
            s.default.createElement(
              u.default,
              null,
              'And this property will then be used by the client-side framework to determine when the session will expire. A few minutes/seconds (you can specifiy this, of course) before the it does, it will then send a request to the API asking for a refresh of the token.'
            ),
            s.default.createElement(
              u.default,
              null,
              'This request also contains the old token and therefore also the user’s data and password. The server will use this data to verify the session by comparing it to the user’s entry in the database. And if the data is valid, step 3 will take effect again.'
            ),
            s.default.createElement(
              u.default,
              null,
              'When the refresh token reaches the client, it also comes with an updated “exp” property and the whole process will start again.'
            ),
            s.default.createElement(w.default, null),
            s.default.createElement(
              u.default,
              null,
              '“So what’s the best way to implement this into my Ember app”, you might ask now. Well, I have the',
              ' ',
              s.default.createElement(
                h.default,
                { href: 'https://github.com/jpadilla/ember-simple-auth-token' },
                'perfect plugin'
              ),
              ' ',
              'for you then.'
            ),
            s.default.createElement(
              u.default,
              null,
              'It extends your ember-simple-auth instance and handles all of the necessary communication between the API and the client.'
            ),
            s.default.createElement(
              u.default,
              null,
              'For the API, there’s',
              ' ',
              s.default.createElement(
                h.default,
                { href: 'https://github.com/koajs/jwt' },
                'koa-jwt'
              ),
              ', ',
              s.default.createElement(
                h.default,
                { href: 'https://github.com/auth0/express-jwt' },
                'express-jwt'
              ),
              '  and',
              ' ',
              s.default.createElement(
                h.default,
                { href: 'https://github.com/auth0/node-jsonwebtoken' },
                'jsonwebtoken'
              ),
              ' ',
              'if you rather want to implement the middleware between your web server and the actual creation of tokens by yourself...'
            ),
            s.default.createElement(
              u.default,
              null,
              'So there’s only one thing left for me to say: Thank you for reading this and go, help shape the future of secure web authentication by implementing it into your own application!'
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
            s = n(l),
            r = a(1),
            o = n(r),
            i = a(0),
            u = n(i),
            d = a(97),
            h = n(d),
            f = function(e) {
              var t = e.level,
                a = e.fontSize,
                n = e.linked,
                l = e.children,
                s = l
              return (
                Array.isArray(l) &&
                  (s = l
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
                    n &&
                      u.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        u.default.createElement(
                          'a',
                          {
                            href: '#' + (0, h.default)(s),
                            id: (0, h.default)(s),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    l
                  ),
                  u.default.createElement(o.default, {
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
                return new f(
                  (0, s.default)({}, t, {
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
      },
      98: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = a(1),
          s = n(l),
          r = a(0),
          o = n(r)
        t.default = function() {
          return o.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            o.default.createElement(s.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [589]
  ))
  return { page: comp.default }
})
