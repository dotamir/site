window.__NEXT_REGISTER_PAGE('/2017/electron-next', function() {
  var comp = (module.exports = webpackJsonp(
    [2],
    {
      10: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function r(e) {
          return e.match(y)
        }
        function c(e) {
          var l = e.lines,
            o = e.startingLineNumber,
            t = e.style
          return l.map(function(e, l) {
            var r = l + o
            return g.default.createElement(
              'span',
              {
                key: 'line-' + l,
                className: 'react-syntax-highlighter-line-number',
                style: 'function' == typeof t ? t(r) : t
              },
              r + '\n'
            )
          })
        }
        function a(e) {
          var l = e.codeString,
            o = e.containerStyle,
            t = void 0 === o ? { float: 'left', paddingRight: '10px' } : o,
            r = e.numberStyle,
            a = void 0 === r ? {} : r,
            s = e.startingLineNumber
          return g.default.createElement(
            'code',
            { style: t },
            c({
              lines: l.replace(/\n$/, '').split('\n'),
              style: a,
              startingLineNumber: s
            })
          )
        }
        function s(e) {
          var l = e.children,
            o = e.lineNumber,
            t = e.lineStyle,
            r = e.className
          return {
            type: 'element',
            tagName: 'span',
            properties: {
              className: void 0 === r ? [] : r,
              style: 'function' == typeof t ? t(o) : t
            },
            children: l
          }
        }
        function n(e) {
          for (
            var l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              t = 0;
            t < e.length;
            t++
          ) {
            var r = e[t]
            if ('text' === r.type) o.push(s({ children: [r], className: l }))
            else if (r.children) {
              var c = l.concat(r.properties.className)
              o = o.concat(n(r.children, c))
            }
          }
          return o
        }
        function i(e, l) {
          for (var o = n(e.value), t = [], c = -1, a = 0; a < o.length; )
            !(function() {
              var e = o[a],
                n = e.children[0].value
              r(n) &&
                (function() {
                  var r = n.split('\n')
                  r.forEach(function(n, i) {
                    var h = t.length + 1,
                      d = { type: 'text', value: n + '\n' }
                    if (0 === i) {
                      var u = o.slice(c + 1, a).concat(
                        s({
                          children: [d],
                          className: e.properties.className
                        })
                      )
                      t.push(s({ children: u, lineNumber: h, lineStyle: l }))
                    } else if (i === r.length - 1) {
                      var f =
                        o[a + 1] && o[a + 1].children && o[a + 1].children[0]
                      if (f) {
                        var j = { type: 'text', value: '' + n },
                          b = s({
                            children: [j],
                            className: e.properties.className
                          })
                        o.splice(a + 1, 0, b)
                      } else
                        t.push(
                          s({ children: [d], lineNumber: h, lineStyle: l })
                        )
                    } else
                      t.push(s({ children: [d], lineNumber: h, lineStyle: l }))
                  }),
                    (c = a)
                })(),
                a++
            })()
          if (c !== o.length - 1) {
            var i = o.slice(c + 1, o.length)
            i &&
              i.length &&
              t.push(s({ children: i, lineNumber: t.length + 1, lineStyle: l }))
          }
          return t
        }
        function h(e) {
          var l = e.rows,
            o = e.stylesheet,
            t = e.useInlineStyles
          return l.map(function(e, l) {
            return (0,
            p.default)({ node: e, stylesheet: o, useInlineStyles: t, key: 'code-segement' + l })
          })
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var d = o(6),
          u = t(d),
          f = o(11),
          j = t(f)
        l.default = function(e, l) {
          return function(o) {
            var t = o.language,
              r = o.children,
              c = o.style,
              s = void 0 === c ? l : c,
              n = o.customStyle,
              d = void 0 === n ? {} : n,
              f = o.codeTagProps,
              b = void 0 === f ? {} : f,
              m = o.useInlineStyles,
              p = void 0 === m || m,
              y = o.showLineNumbers,
              v = void 0 !== y && y,
              w = o.startingLineNumber,
              k = void 0 === w ? 1 : w,
              E = o.lineNumberContainerStyle,
              _ = o.lineNumberStyle,
              A = o.wrapLines,
              x = o.lineStyle,
              O = void 0 === x ? {} : x,
              W = o.renderer,
              S = o.PreTag,
              C = void 0 === S ? 'pre' : S,
              P = o.CodeTag,
              N = void 0 === P ? 'code' : P,
              M = o.code,
              B = void 0 === M ? (Array.isArray(r) ? r[0] : r) : M,
              D = (0, j.default)(o, [
                'language',
                'children',
                'style',
                'customStyle',
                'codeTagProps',
                'useInlineStyles',
                'showLineNumbers',
                'startingLineNumber',
                'lineNumberContainerStyle',
                'lineNumberStyle',
                'wrapLines',
                'lineStyle',
                'renderer',
                'PreTag',
                'CodeTag',
                'code'
              ])
            ;(A = !(!W || void 0 !== A) || A), (W = W || h)
            var I =
              t && e.getLanguage(t) ? e.highlight(t, B) : e.highlightAuto(B)
            ;(null !== I.language && 'text' !== t) ||
              (I.value = [{ type: 'text', value: B }])
            var L = s.hljs || { backgroundColor: '#fff' },
              R = p
                ? (0, u.default)({}, D, { style: (0, u.default)({}, L, d) })
                : (0, u.default)({}, D, { className: 'hljs' }),
              T = A ? i(I, O) : I.value,
              q = v
                ? g.default.createElement(a, {
                    containerStyle: E,
                    numberStyle: _,
                    startingLineNumber: k,
                    codeString: B
                  })
                : null
            return g.default.createElement(
              C,
              R,
              q,
              g.default.createElement(
                N,
                b,
                W({ rows: T, stylesheet: s, useInlineStyles: p })
              )
            )
          }
        }
        var b = o(0),
          g = t(b),
          m = o(12),
          p = t(m),
          y = /\n/g
      },
      104: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.LI = l.UL = l.OL = void 0)
        var r = o(1),
          c = t(r),
          a = o(0),
          s = t(a),
          n = function(e) {
            var l = e.children
            return s.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              l,
              s.default.createElement(c.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          i = function(e) {
            var l = e.children
            return s.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              l,
              s.default.createElement(c.default, {
                styleId: '1299876035',
                css: [
                  'ul.jsx-1299876035{margin:30px 0;list-style:disc;padding:0 0 0 18px;}'
                ]
              })
            )
          },
          h = function(e) {
            var l = e.children,
              o = e.shallow,
              t = []
            return (
              o && t.push('shallow'),
              s.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (t.join(' ') || '') },
                l,
                s.default.createElement(c.default, {
                  styleId: '3704132522',
                  css: [
                    'li.jsx-3704132522{margin-bottom:15px;line-height:25px;}',
                    'li.shallow.jsx-3704132522{margin-bottom:10px;}'
                  ]
                })
              )
            )
          }
        ;(l.OL = n), (l.UL = i), (l.LI = h)
      },
      11: function(e, l, o) {
        'use strict'
        ;(l.__esModule = !0),
          (l.default = function(e, l) {
            var o = {}
            for (var t in e)
              l.indexOf(t) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]))
            return o
          })
      },
      116: function(e, l) {
        e.exports = function(e) {
          var l = {
              className: 'variable',
              variants: [
                { begin: /\$[\w\d#@][\w\d_]*/ },
                { begin: /\$\{(.*?)}/ }
              ]
            },
            o = {
              className: 'string',
              begin: /"/,
              end: /"/,
              contains: [
                e.BACKSLASH_ESCAPE,
                l,
                {
                  className: 'variable',
                  begin: /\$\(/,
                  end: /\)/,
                  contains: [e.BACKSLASH_ESCAPE]
                }
              ]
            },
            t = { className: 'string', begin: /'/, end: /'/ }
          return {
            aliases: ['sh', 'zsh'],
            lexemes: /\b-?[a-z\._]+\b/,
            keywords: {
              keyword:
                'if then else elif fi for while in do done case esac function',
              literal: 'true false',
              built_in:
                'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
              _: '-ne -eq -lt -gt -f -d -e -s -l -a'
            },
            contains: [
              { className: 'meta', begin: /^#![^\n]+sh\s*$/, relevance: 10 },
              {
                className: 'function',
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
                relevance: 0
              },
              e.HASH_COMMENT_MODE,
              o,
              t,
              l
            ]
          }
        }
      },
      117: function(e, l) {
        e.exports = function(e) {
          var l = '[A-Za-z$_][0-9A-Za-z$_]*',
            o = {
              keyword:
                'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
              literal: 'true false null undefined NaN Infinity',
              built_in:
                'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
            },
            t = {
              className: 'number',
              variants: [
                { begin: '\\b(0[bB][01]+)' },
                { begin: '\\b(0[oO][0-7]+)' },
                { begin: e.C_NUMBER_RE }
              ],
              relevance: 0
            },
            r = {
              className: 'subst',
              begin: '\\$\\{',
              end: '\\}',
              keywords: o,
              contains: []
            },
            c = {
              className: 'string',
              begin: '`',
              end: '`',
              contains: [e.BACKSLASH_ESCAPE, r]
            }
          r.contains = [
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            c,
            t,
            e.REGEXP_MODE
          ]
          var a = r.contains.concat([
            e.C_BLOCK_COMMENT_MODE,
            e.C_LINE_COMMENT_MODE
          ])
          return {
            aliases: ['js', 'jsx'],
            keywords: o,
            contains: [
              {
                className: 'meta',
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
              },
              { className: 'meta', begin: /^#!/, end: /$/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              c,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              t,
              {
                begin: /[{,]\s*/,
                relevance: 0,
                contains: [
                  {
                    begin: l + '\\s*:',
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{ className: 'attr', begin: l, relevance: 0 }]
                  }
                ]
              },
              {
                begin:
                  '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                contains: [
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  e.REGEXP_MODE,
                  {
                    className: 'function',
                    begin: '(\\(.*?\\)|' + l + ')\\s*=>',
                    returnBegin: !0,
                    end: '\\s*=>',
                    contains: [
                      {
                        className: 'params',
                        variants: [
                          { begin: l },
                          { begin: /\(\s*\)/ },
                          {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: o,
                            contains: a
                          }
                        ]
                      }
                    ]
                  },
                  {
                    begin: /</,
                    end: /(\/\w+|\w+\/)>/,
                    subLanguage: 'xml',
                    contains: [
                      { begin: /<\w+\s*\/>/, skip: !0 },
                      {
                        begin: /<\w+/,
                        end: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        contains: [{ begin: /<\w+\s*\/>/, skip: !0 }, 'self']
                      }
                    ]
                  }
                ],
                relevance: 0
              },
              {
                className: 'function',
                beginKeywords: 'function',
                end: /\{/,
                excludeEnd: !0,
                contains: [
                  e.inherit(e.TITLE_MODE, { begin: l }),
                  {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: a
                  }
                ],
                illegal: /\[|%/
              },
              { begin: /\$[(.]/ },
              e.METHOD_GUARD,
              {
                className: 'class',
                beginKeywords: 'class',
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"\[\]]/,
                contains: [
                  { beginKeywords: 'extends' },
                  e.UNDERSCORE_TITLE_MODE
                ]
              },
              { beginKeywords: 'constructor', end: /\{/, excludeEnd: !0 }
            ],
            illegal: /#(?!!)/
          }
        }
      },
      12: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function r(e) {
          var l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = arguments[2]
          return e.reduce(function(e, l) {
            return (0, d.default)({}, e, o[l])
          }, l)
        }
        function c(e) {
          return e.join(' ')
        }
        function a(e, l) {
          var o = 0
          return function(t) {
            return (
              (o += 1),
              t.map(function(t, r) {
                return s({
                  node: t,
                  stylesheet: e,
                  useInlineStyles: l,
                  key: 'code-segment-' + o + '-' + r
                })
              })
            )
          }
        }
        function s(e) {
          var l = e.node,
            o = e.stylesheet,
            t = e.style,
            s = void 0 === t ? {} : t,
            n = e.useInlineStyles,
            h = e.key,
            u = l.properties,
            j = l.type,
            b = l.tagName,
            g = l.value
          if ('text' === j) return g
          if (b) {
            var m = a(o, n),
              p = n
                ? { style: r(u.className, (0, i.default)({}, u.style, s), o) }
                : { className: c(u.className) },
              y = m(l.children)
            return f.default.createElement(b, (0, d.default)({ key: h }, p), y)
          }
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var n = o(6),
          i = t(n),
          h = o(7),
          d = t(h)
        ;(l.createStyleObject = r),
          (l.createClassNameString = c),
          (l.createChildren = a),
          (l.default = s)
        var u = o(0),
          f = t(u)
      },
      128: function(e, l, o) {
        'use strict'
        function t(e, l) {
          if (!(e instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        function r(e, l) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !l || ('object' != typeof l && 'function' != typeof l) ? e : l
        }
        function c(e, l) {
          if ('function' != typeof l && null !== l)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof l
            )
          ;(e.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, l)
                : (e.__proto__ = l))
        }
        function a(e, l) {
          if (0 === u.length) {
            u.push(l)
            var o = document.createElement('script')
            o.setAttribute('src', e),
              (o.onload = function() {
                return u.forEach(function(e) {
                  return e()
                })
              }),
              document.body.appendChild(o)
          } else u.push(l)
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var s = o(0),
          n = o.n(s),
          i = o(114),
          h = o.n(i),
          d = (function() {
            function e(e, l) {
              for (var o = 0; o < l.length; o++) {
                var t = l[o]
                ;(t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(e, t.key, t)
              }
            }
            return function(l, o, t) {
              return o && e(l.prototype, o), t && e(l, t), l
            }
          })(),
          u = [],
          f = (function(e) {
            function l() {
              return (
                t(this, l),
                r(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              c(l, e),
              d(l, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this,
                      l = function() {
                        window.twttr.ready().then(function(l) {
                          var o = l.widgets,
                            t = e.props,
                            r = t.options,
                            c = t.onTweetLoadSuccess,
                            a = t.onTweetLoadError
                          o
                            .createTweetEmbed(e.props.id, e._div, r)
                            .then(c)
                            .catch(a)
                        })
                      }
                    if (window.twttr) l()
                    else {
                      a(
                        (window.location.protocol.indexOf('file') >= 0
                          ? this.props.protocol
                          : '') + '//platform.twitter.com/widgets.js',
                        l
                      )
                    }
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return n.a.createElement('div', {
                      className: this.props.className,
                      ref: function(l) {
                        e._div = l
                      }
                    })
                  }
                }
              ]),
              l
            )
          })(n.a.Component)
        ;(f.propTypes = {
          id: h.a.string,
          options: h.a.object,
          protocol: h.a.string,
          onTweetLoadSuccess: h.a.func,
          onTweetLoadError: h.a.func,
          className: h.a.string
        }),
          (f.defaultProps = {
            protocol: 'https:',
            options: {},
            className: null
          }),
          (l.default = f)
      },
      129: function(e, l) {
        e.exports = function(e) {
          var l = { literal: 'true false null' },
            o = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
            t = {
              end: ',',
              endsWithParent: !0,
              excludeEnd: !0,
              contains: o,
              keywords: l
            },
            r = {
              begin: '{',
              end: '}',
              contains: [
                {
                  className: 'attr',
                  begin: /"/,
                  end: /"/,
                  contains: [e.BACKSLASH_ESCAPE],
                  illegal: '\\n'
                },
                e.inherit(t, { begin: /:/ })
              ],
              illegal: '\\S'
            },
            c = {
              begin: '\\[',
              end: '\\]',
              contains: [e.inherit(t)],
              illegal: '\\S'
            }
          return (
            o.splice(o.length, 0, r, c),
            { contains: o, keywords: l, illegal: '\\S' }
          )
        }
      },
      13: function(e, l, o) {
        'use strict'
        function t() {}
        function r(e, l) {
          var o,
            t,
            r,
            c,
            a = l || {},
            n = a.prefix,
            i = a.subset || O,
            d = i.length,
            u = -1
          if (((null !== n && void 0 !== n) || (n = p), 'string' != typeof e))
            throw new Error('Expected `string` for value, got `' + e + '`')
          for (t = h({}), o = h({}); ++u < d; )
            (c = i[u]),
              f(c) &&
                ((r = h(s(c, e, !1, n))),
                (r.language = c),
                r.relevance > t.relevance && (t = r),
                r.relevance > o.relevance && ((t = o), (o = r)))
          return t.language && (o.secondBest = t), o
        }
        function c(e, l, o) {
          var t = o || {},
            r = t.prefix
          return (null !== r && void 0 !== r) || (r = p), h(s(e, l, !0, r))
        }
        function a(e, l) {
          var o = (W[e] = l(b)),
            t = o.aliases,
            r = t && t.length,
            c = -1
          for (O.push(e); ++c < r; ) S[t[c]] = e
        }
        function s(e, l, o, t, c) {
          function a(e, l) {
            var o, t, r
            if (((X += e), void 0 === l)) return b(h(), B), 0
            if ((o = S(l, N)))
              return b(h(), B), n(o, l), o.returnBegin ? 0 : l.length
            if ((t = O(N, l))) {
              ;(r = N), r.returnEnd || r.excludeEnd || (X += l), b(h(), B)
              do {
                N.className && C(), (U += N.relevance), (N = N.parent)
              } while (N !== t.parent)
              return (
                r.excludeEnd && g(l, B),
                (X = w),
                t.starts && n(t.starts, w),
                r.returnEnd ? 0 : l.length
              )
            }
            if (E(l, N))
              throw new Error(
                'Illegal lexeme "' +
                  l +
                  '" for mode "' +
                  (N.className || '<unnamed>') +
                  '"'
              )
            return (X += l), l.length || 1
          }
          function n(e, l) {
            var o
            e.className && (o = v(e.className, [])),
              e.returnBegin
                ? (X = w)
                : e.excludeBegin ? (g(l, B), (X = w)) : (X = l),
              o && (B.push(o), q.push(B), (B = o.children)),
              (N = Object.create(e, { parent: { value: N } }))
          }
          function h() {
            var e = void 0 === N.subLanguage ? j() : u()
            return (X = w), e
          }
          function u() {
            var e,
              l = 'string' == typeof N.subLanguage
            return l && !W[N.subLanguage]
              ? g(X, [])
              : ((e = l
                  ? s(N.subLanguage, X, !0, t, T[N.subLanguage])
                  : r(X, {
                      subset: N.subLanguage.length ? N.subLanguage : void 0,
                      prefix: t
                    })),
                N.relevance > 0 && (U += e.relevance),
                l && (T[N.subLanguage] = e.top),
                [v(e.language, e.value, !0)])
          }
          function j() {
            var e,
              l,
              o,
              t,
              r = []
            if (!N.keywords) return g(X, r)
            for (e = 0, N.lexemesRe.lastIndex = 0, l = N.lexemesRe.exec(X); l; )
              g(X.substring(e, l.index), r),
                (t = k(N, l)),
                t
                  ? ((U += t[1]),
                    (o = v(t[0], [])),
                    r.push(o),
                    g(l[0], o.children))
                  : g(l[0], r),
                (e = N.lexemesRe.lastIndex),
                (l = N.lexemesRe.exec(X))
            return g(X.substr(e), r), r
          }
          function b(e, l) {
            for (var o, t = e.length, r = -1; ++r < t; )
              (o = e[r]), o.type === A ? g(o.value, l) : l.push(o)
          }
          function g(e, l) {
            var o
            return (
              e &&
                ((o = l[l.length - 1]),
                o && o.type === A ? (o.value += e) : l.push(p(e))),
              l
            )
          }
          function p(e) {
            return { type: A, value: e }
          }
          function v(e, l, o) {
            return {
              type: _,
              tagName: x,
              properties: { className: [(o ? w : t) + e] },
              children: l
            }
          }
          function k(e, l) {
            var o = l[0]
            return (
              P[y] && (o = o.toLowerCase()),
              m.call(e.keywords, o) && e.keywords[o]
            )
          }
          function E(e, l) {
            return !o && d(l.illegalRe, e)
          }
          function O(e, l) {
            if (d(e.endRe, l)) {
              for (; e.endsParent && e.parent; ) e = e.parent
              return e
            }
            if (e.endsWithParent) return O(e.parent, l)
          }
          function S(e, l) {
            for (var o = l.contains, t = o.length, r = -1; ++r < t; )
              if (d(o[r].beginRe, e)) return o[r]
          }
          function C() {
            B = q.pop() || R
          }
          var P,
            N,
            M,
            B,
            D,
            I,
            L,
            R,
            T = {},
            q = [],
            X = w,
            U = 0
          if ('string' != typeof e)
            throw new Error('Expected `string` for name, got `' + e + '`')
          if ('string' != typeof l)
            throw new Error('Expected `string` for value, got `' + l + '`')
          if (((P = f(e)), (M = N = c || P), (B = R = []), !P))
            throw new Error('Unknown language: `' + e + '` is not registered')
          i(P)
          try {
            for (
              D = N.terminators.lastIndex = 0, L = N.terminators.exec(l);
              L;

            )
              (I = a(l.substring(D, L.index), L[0])),
                (D = N.terminators.lastIndex = L.index + I),
                (L = N.terminators.exec(l))
            for (a(l.substr(D)), M = N; M.parent; )
              M.className && C(), (M = M.parent)
            return { relevance: U, value: B, language: e, top: N }
          } catch (e) {
            if (-1 === e.message.indexOf('Illegal')) throw e
            return { relevance: 0, value: g(l, []) }
          }
        }
        function n(e) {
          return (
            e.variants &&
              !e[v] &&
              (e[v] = e.variants.map(function(l) {
                return g(e, { variants: null }, l)
              })),
            e[v] || (e.endsWithParent && [g(e)]) || [e]
          )
        }
        function i(e) {
          function l(r, c) {
            function a(l, o) {
              var t, r, c, a
              for (
                e[y] && (o = o.toLowerCase()),
                  t = o.split(k),
                  a = t.length,
                  c = -1;
                ++c < a;

              )
                (r = t[c].split(E)), (i[r[0]] = [l, r[1] ? Number(r[1]) : 1])
            }
            var s,
              i = {}
            r.compiled ||
              ((r.compiled = !0),
              (r.keywords = r.keywords || r.beginKeywords),
              r.keywords &&
                ('string' == typeof r.keywords
                  ? a('keyword', r.keywords)
                  : Object.keys(r.keywords).forEach(function(e) {
                      a(e, r.keywords[e])
                    }),
                (r.keywords = i)),
              (r.lexemesRe = o(r.lexemes || /\w+/, !0)),
              c &&
                (r.beginKeywords &&
                  (r.begin =
                    '\\b(' + r.beginKeywords.split(k).join(E) + ')\\b'),
                r.begin || (r.begin = /\B|\b/),
                (r.beginRe = o(r.begin)),
                r.end || r.endsWithParent || (r.end = /\B|\b/),
                r.end && (r.endRe = o(r.end)),
                (r.terminatorEnd = t(r.end) || w),
                r.endsWithParent &&
                  c.terminatorEnd &&
                  (r.terminatorEnd += (r.end ? E : w) + c.terminatorEnd)),
              r.illegal && (r.illegalRe = o(r.illegal)),
              void 0 === r.relevance && (r.relevance = 1),
              r.contains || (r.contains = []),
              (r.contains = Array.prototype.concat.apply(
                [],
                r.contains.map(function(e) {
                  return n('self' === e ? r : e)
                })
              )),
              r.contains.forEach(function(e) {
                l(e, r)
              }),
              r.starts && l(r.starts, c),
              (s = r.contains
                .map(function(e) {
                  return e.beginKeywords ? '\\.?(' + e.begin + ')\\.?' : e.begin
                })
                .concat([r.terminatorEnd, r.illegal])
                .map(t)
                .filter(Boolean)),
              (r.terminators = s.length ? o(s.join(E), !0) : { exec: u }))
          }
          function o(l, o) {
            return new RegExp(t(l), 'm' + (e[y] ? 'i' : '') + (o ? 'g' : ''))
          }
          function t(e) {
            return (e && e.source) || e
          }
          l(e)
        }
        function h(e) {
          return {
            relevance: e.relevance || 0,
            language: e.language || null,
            value: e.value || []
          }
        }
        function d(e, l) {
          var o = e && e.exec(l)
          return o && 0 === o.index
        }
        function u() {
          return null
        }
        function f(e) {
          return (e = e.toLowerCase()), W[e] || W[S[e]]
        }
        var j = o(14)
        t.prototype = j
        var b = new t()
        ;(e.exports = b),
          (b.highlight = c),
          (b.highlightAuto = r),
          (b.registerLanguage = a),
          (b.getLanguage = f)
        var g = j.inherit,
          m = {}.hasOwnProperty,
          p = 'hljs-',
          y = 'case_insensitive',
          v = 'cached_variants',
          w = '',
          k = ' ',
          E = '|',
          _ = 'element',
          A = 'text',
          x = 'span',
          O = [],
          W = {},
          S = {}
      },
      14: function(e, l, o) {
        !(function(e) {
          ;('object' == typeof window && window) ||
            ('object' == typeof self && self)
          e(l)
        })(function(e) {
          function l(e) {
            return e
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          }
          function o(e) {
            return e.nodeName.toLowerCase()
          }
          function t(e, l) {
            var o = e && e.exec(l)
            return o && 0 === o.index
          }
          function r(e) {
            return x.test(e)
          }
          function c(e) {
            var l,
              o,
              t,
              c,
              a = e.className + ' '
            if (
              ((a += e.parentNode ? e.parentNode.className : ''),
              (o = O.exec(a)))
            )
              return w(o[1]) ? o[1] : 'no-highlight'
            for (a = a.split(/\s+/), l = 0, t = a.length; l < t; l++)
              if (((c = a[l]), r(c) || w(c))) return c
          }
          function a(e) {
            var l,
              o = {},
              t = Array.prototype.slice.call(arguments, 1)
            for (l in e) o[l] = e[l]
            return (
              t.forEach(function(e) {
                for (l in e) o[l] = e[l]
              }),
              o
            )
          }
          function s(e) {
            var l = []
            return (
              (function e(t, r) {
                for (var c = t.firstChild; c; c = c.nextSibling)
                  3 === c.nodeType
                    ? (r += c.nodeValue.length)
                    : 1 === c.nodeType &&
                      (l.push({ event: 'start', offset: r, node: c }),
                      (r = e(c, r)),
                      o(c).match(/br|hr|img|input/) ||
                        l.push({ event: 'stop', offset: r, node: c }))
                return r
              })(e, 0),
              l
            )
          }
          function n(e, t, r) {
            function c() {
              return e.length && t.length
                ? e[0].offset !== t[0].offset
                  ? e[0].offset < t[0].offset ? e : t
                  : 'start' === t[0].event ? e : t
                : e.length ? e : t
            }
            function a(e) {
              function t(e) {
                return (
                  ' ' +
                  e.nodeName +
                  '="' +
                  l(e.value).replace('"', '&quot;') +
                  '"'
                )
              }
              h += '<' + o(e) + k.map.call(e.attributes, t).join('') + '>'
            }
            function s(e) {
              h += '</' + o(e) + '>'
            }
            function n(e) {
              ;('start' === e.event ? a : s)(e.node)
            }
            for (var i = 0, h = '', d = []; e.length || t.length; ) {
              var u = c()
              if (
                ((h += l(r.substring(i, u[0].offset))),
                (i = u[0].offset),
                u === e)
              ) {
                d.reverse().forEach(s)
                do {
                  n(u.splice(0, 1)[0]), (u = c())
                } while (u === e && u.length && u[0].offset === i)
                d.reverse().forEach(a)
              } else
                'start' === u[0].event ? d.push(u[0].node) : d.pop(),
                  n(u.splice(0, 1)[0])
            }
            return h + l(r.substr(i))
          }
          function i(e) {
            return (
              e.variants &&
                !e.cached_variants &&
                (e.cached_variants = e.variants.map(function(l) {
                  return a(e, { variants: null }, l)
                })),
              e.cached_variants || (e.endsWithParent && [a(e)]) || [e]
            )
          }
          function h(e) {
            function l(e) {
              return (e && e.source) || e
            }
            function o(o, t) {
              return new RegExp(
                l(o),
                'm' + (e.case_insensitive ? 'i' : '') + (t ? 'g' : '')
              )
            }
            function t(r, c) {
              if (!r.compiled) {
                if (
                  ((r.compiled = !0),
                  (r.keywords = r.keywords || r.beginKeywords),
                  r.keywords)
                ) {
                  var a = {},
                    s = function(l, o) {
                      e.case_insensitive && (o = o.toLowerCase()),
                        o.split(' ').forEach(function(e) {
                          var o = e.split('|')
                          a[o[0]] = [l, o[1] ? Number(o[1]) : 1]
                        })
                    }
                  'string' == typeof r.keywords
                    ? s('keyword', r.keywords)
                    : E(r.keywords).forEach(function(e) {
                        s(e, r.keywords[e])
                      }),
                    (r.keywords = a)
                }
                ;(r.lexemesRe = o(r.lexemes || /\w+/, !0)),
                  c &&
                    (r.beginKeywords &&
                      (r.begin =
                        '\\b(' + r.beginKeywords.split(' ').join('|') + ')\\b'),
                    r.begin || (r.begin = /\B|\b/),
                    (r.beginRe = o(r.begin)),
                    r.end || r.endsWithParent || (r.end = /\B|\b/),
                    r.end && (r.endRe = o(r.end)),
                    (r.terminator_end = l(r.end) || ''),
                    r.endsWithParent &&
                      c.terminator_end &&
                      (r.terminator_end +=
                        (r.end ? '|' : '') + c.terminator_end)),
                  r.illegal && (r.illegalRe = o(r.illegal)),
                  null == r.relevance && (r.relevance = 1),
                  r.contains || (r.contains = []),
                  (r.contains = Array.prototype.concat.apply(
                    [],
                    r.contains.map(function(e) {
                      return i('self' === e ? r : e)
                    })
                  )),
                  r.contains.forEach(function(e) {
                    t(e, r)
                  }),
                  r.starts && t(r.starts, c)
                var n = r.contains
                  .map(function(e) {
                    return e.beginKeywords
                      ? '\\.?(' + e.begin + ')\\.?'
                      : e.begin
                  })
                  .concat([r.terminator_end, r.illegal])
                  .map(l)
                  .filter(Boolean)
                r.terminators = n.length
                  ? o(n.join('|'), !0)
                  : {
                      exec: function() {
                        return null
                      }
                    }
              }
            }
            t(e)
          }
          function d(e, o, r, c) {
            function a(e, l) {
              var o, r
              for (o = 0, r = l.contains.length; o < r; o++)
                if (t(l.contains[o].beginRe, e)) return l.contains[o]
            }
            function s(e, l) {
              if (t(e.endRe, l)) {
                for (; e.endsParent && e.parent; ) e = e.parent
                return e
              }
              if (e.endsWithParent) return s(e.parent, l)
            }
            function n(e, l) {
              return !r && t(l.illegalRe, e)
            }
            function i(e, l) {
              var o = y.case_insensitive ? l[0].toLowerCase() : l[0]
              return e.keywords.hasOwnProperty(o) && e.keywords[o]
            }
            function f(e, l, o, t) {
              var r = t ? '' : C.classPrefix,
                c = '<span class="' + r,
                a = o ? '' : S
              return (c += e + '">') + l + a
            }
            function j() {
              var e, o, t, r
              if (!k.keywords) return l(x)
              for (
                r = '',
                  o = 0,
                  k.lexemesRe.lastIndex = 0,
                  t = k.lexemesRe.exec(x);
                t;

              )
                (r += l(x.substring(o, t.index))),
                  (e = i(k, t)),
                  e ? ((O += e[1]), (r += f(e[0], l(t[0])))) : (r += l(t[0])),
                  (o = k.lexemesRe.lastIndex),
                  (t = k.lexemesRe.exec(x))
              return r + l(x.substr(o))
            }
            function b() {
              var e = 'string' == typeof k.subLanguage
              if (e && !_[k.subLanguage]) return l(x)
              var o = e
                ? d(k.subLanguage, x, !0, E[k.subLanguage])
                : u(x, k.subLanguage.length ? k.subLanguage : void 0)
              return (
                k.relevance > 0 && (O += o.relevance),
                e && (E[k.subLanguage] = o.top),
                f(o.language, o.value, !1, !0)
              )
            }
            function g() {
              ;(A += null != k.subLanguage ? b() : j()), (x = '')
            }
            function m(e) {
              ;(A += e.className ? f(e.className, '', !0) : ''),
                (k = Object.create(e, { parent: { value: k } }))
            }
            function p(e, l) {
              if (((x += e), null == l)) return g(), 0
              var o = a(l, k)
              if (o)
                return (
                  o.skip
                    ? (x += l)
                    : (o.excludeBegin && (x += l),
                      g(),
                      o.returnBegin || o.excludeBegin || (x = l)),
                  m(o, l),
                  o.returnBegin ? 0 : l.length
                )
              var t = s(k, l)
              if (t) {
                var r = k
                r.skip
                  ? (x += l)
                  : (r.returnEnd || r.excludeEnd || (x += l),
                    g(),
                    r.excludeEnd && (x = l))
                do {
                  k.className && (A += S),
                    k.skip || (O += k.relevance),
                    (k = k.parent)
                } while (k !== t.parent)
                return t.starts && m(t.starts, ''), r.returnEnd ? 0 : l.length
              }
              if (n(l, k))
                throw new Error(
                  'Illegal lexeme "' +
                    l +
                    '" for mode "' +
                    (k.className || '<unnamed>') +
                    '"'
                )
              return (x += l), l.length || 1
            }
            var y = w(e)
            if (!y) throw new Error('Unknown language: "' + e + '"')
            h(y)
            var v,
              k = c || y,
              E = {},
              A = ''
            for (v = k; v !== y; v = v.parent)
              v.className && (A = f(v.className, '', !0) + A)
            var x = '',
              O = 0
            try {
              for (var W, P, N = 0; ; ) {
                if (
                  ((k.terminators.lastIndex = N), !(W = k.terminators.exec(o)))
                )
                  break
                ;(P = p(o.substring(N, W.index), W[0])), (N = W.index + P)
              }
              for (p(o.substr(N)), v = k; v.parent; v = v.parent)
                v.className && (A += S)
              return { relevance: O, value: A, language: e, top: k }
            } catch (e) {
              if (e.message && -1 !== e.message.indexOf('Illegal'))
                return { relevance: 0, value: l(o) }
              throw e
            }
          }
          function u(e, o) {
            o = o || C.languages || E(_)
            var t = { relevance: 0, value: l(e) },
              r = t
            return (
              o.filter(w).forEach(function(l) {
                var o = d(l, e, !1)
                ;(o.language = l),
                  o.relevance > r.relevance && (r = o),
                  o.relevance > t.relevance && ((r = t), (t = o))
              }),
              r.language && (t.second_best = r),
              t
            )
          }
          function f(e) {
            return C.tabReplace || C.useBR
              ? e.replace(W, function(e, l) {
                  return C.useBR && '\n' === e
                    ? '<br>'
                    : C.tabReplace ? l.replace(/\t/g, C.tabReplace) : ''
                })
              : e
          }
          function j(e, l, o) {
            var t = l ? A[l] : o,
              r = [e.trim()]
            return (
              e.match(/\bhljs\b/) || r.push('hljs'),
              -1 === e.indexOf(t) && r.push(t),
              r.join(' ').trim()
            )
          }
          function b(e) {
            var l,
              o,
              t,
              a,
              i,
              h = c(e)
            r(h) ||
              (C.useBR
                ? ((l = document.createElementNS(
                    'http://www.w3.org/1999/xhtml',
                    'div'
                  )),
                  (l.innerHTML = e.innerHTML
                    .replace(/\n/g, '')
                    .replace(/<br[ \/]*>/g, '\n')))
                : (l = e),
              (i = l.textContent),
              (t = h ? d(h, i, !0) : u(i)),
              (o = s(l)),
              o.length &&
                ((a = document.createElementNS(
                  'http://www.w3.org/1999/xhtml',
                  'div'
                )),
                (a.innerHTML = t.value),
                (t.value = n(o, s(a), i))),
              (t.value = f(t.value)),
              (e.innerHTML = t.value),
              (e.className = j(e.className, h, t.language)),
              (e.result = { language: t.language, re: t.relevance }),
              t.second_best &&
                (e.second_best = {
                  language: t.second_best.language,
                  re: t.second_best.relevance
                }))
          }
          function g(e) {
            C = a(C, e)
          }
          function m() {
            if (!m.called) {
              m.called = !0
              var e = document.querySelectorAll('pre code')
              k.forEach.call(e, b)
            }
          }
          function p() {
            addEventListener('DOMContentLoaded', m, !1),
              addEventListener('load', m, !1)
          }
          function y(l, o) {
            var t = (_[l] = o(e))
            t.aliases &&
              t.aliases.forEach(function(e) {
                A[e] = l
              })
          }
          function v() {
            return E(_)
          }
          function w(e) {
            return (e = (e || '').toLowerCase()), _[e] || _[A[e]]
          }
          var k = [],
            E = Object.keys,
            _ = {},
            A = {},
            x = /^(no-?highlight|plain|text)$/i,
            O = /\blang(?:uage)?-([\w-]+)\b/i,
            W = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            S = '</span>',
            C = {
              classPrefix: 'hljs-',
              tabReplace: null,
              useBR: !1,
              languages: void 0
            }
          return (
            (e.highlight = d),
            (e.highlightAuto = u),
            (e.fixMarkup = f),
            (e.highlightBlock = b),
            (e.configure = g),
            (e.initHighlighting = m),
            (e.initHighlightingOnLoad = p),
            (e.registerLanguage = y),
            (e.listLanguages = v),
            (e.getLanguage = w),
            (e.inherit = a),
            (e.IDENT_RE = '[a-zA-Z]\\w*'),
            (e.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
            (e.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
            (e.C_NUMBER_RE =
              '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
            (e.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
            (e.RE_STARTERS_RE =
              '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
            (e.BACKSLASH_ESCAPE = { begin: '\\\\[\\s\\S]', relevance: 0 }),
            (e.APOS_STRING_MODE = {
              className: 'string',
              begin: "'",
              end: "'",
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE]
            }),
            (e.QUOTE_STRING_MODE = {
              className: 'string',
              begin: '"',
              end: '"',
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE]
            }),
            (e.PHRASAL_WORDS_MODE = {
              begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            }),
            (e.COMMENT = function(l, o, t) {
              var r = e.inherit(
                { className: 'comment', begin: l, end: o, contains: [] },
                t || {}
              )
              return (
                r.contains.push(e.PHRASAL_WORDS_MODE),
                r.contains.push({
                  className: 'doctag',
                  begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                  relevance: 0
                }),
                r
              )
            }),
            (e.C_LINE_COMMENT_MODE = e.COMMENT('//', '$')),
            (e.C_BLOCK_COMMENT_MODE = e.COMMENT('/\\*', '\\*/')),
            (e.HASH_COMMENT_MODE = e.COMMENT('#', '$')),
            (e.NUMBER_MODE = {
              className: 'number',
              begin: e.NUMBER_RE,
              relevance: 0
            }),
            (e.C_NUMBER_MODE = {
              className: 'number',
              begin: e.C_NUMBER_RE,
              relevance: 0
            }),
            (e.BINARY_NUMBER_MODE = {
              className: 'number',
              begin: e.BINARY_NUMBER_RE,
              relevance: 0
            }),
            (e.CSS_NUMBER_MODE = {
              className: 'number',
              begin:
                e.NUMBER_RE +
                '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
              relevance: 0
            }),
            (e.REGEXP_MODE = {
              className: 'regexp',
              begin: /\//,
              end: /\/[gimuy]*/,
              illegal: /\n/,
              contains: [
                e.BACKSLASH_ESCAPE,
                {
                  begin: /\[/,
                  end: /\]/,
                  relevance: 0,
                  contains: [e.BACKSLASH_ESCAPE]
                }
              ]
            }),
            (e.TITLE_MODE = {
              className: 'title',
              begin: e.IDENT_RE,
              relevance: 0
            }),
            (e.UNDERSCORE_TITLE_MODE = {
              className: 'title',
              begin: e.UNDERSCORE_IDENT_RE,
              relevance: 0
            }),
            (e.METHOD_GUARD = {
              begin: '\\.\\s*' + e.UNDERSCORE_IDENT_RE,
              relevance: 0
            }),
            e
          )
        })
      },
      15: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var r = o(16)
        Object.defineProperty(l, 'agate', {
          enumerable: !0,
          get: function() {
            return t(r).default
          }
        })
        var c = o(17)
        Object.defineProperty(l, 'androidstudio', {
          enumerable: !0,
          get: function() {
            return t(c).default
          }
        })
        var a = o(18)
        Object.defineProperty(l, 'arduinoLight', {
          enumerable: !0,
          get: function() {
            return t(a).default
          }
        })
        var s = o(19)
        Object.defineProperty(l, 'arta', {
          enumerable: !0,
          get: function() {
            return t(s).default
          }
        })
        var n = o(20)
        Object.defineProperty(l, 'ascetic', {
          enumerable: !0,
          get: function() {
            return t(n).default
          }
        })
        var i = o(21)
        Object.defineProperty(l, 'atelierCaveDark', {
          enumerable: !0,
          get: function() {
            return t(i).default
          }
        })
        var h = o(22)
        Object.defineProperty(l, 'atelierCaveLight', {
          enumerable: !0,
          get: function() {
            return t(h).default
          }
        })
        var d = o(23)
        Object.defineProperty(l, 'atelierDuneDark', {
          enumerable: !0,
          get: function() {
            return t(d).default
          }
        })
        var u = o(24)
        Object.defineProperty(l, 'atelierDuneLight', {
          enumerable: !0,
          get: function() {
            return t(u).default
          }
        })
        var f = o(25)
        Object.defineProperty(l, 'atelierEstuaryDark', {
          enumerable: !0,
          get: function() {
            return t(f).default
          }
        })
        var j = o(26)
        Object.defineProperty(l, 'atelierEstuaryLight', {
          enumerable: !0,
          get: function() {
            return t(j).default
          }
        })
        var b = o(27)
        Object.defineProperty(l, 'atelierForestDark', {
          enumerable: !0,
          get: function() {
            return t(b).default
          }
        })
        var g = o(28)
        Object.defineProperty(l, 'atelierForestLight', {
          enumerable: !0,
          get: function() {
            return t(g).default
          }
        })
        var m = o(29)
        Object.defineProperty(l, 'atelierHeathDark', {
          enumerable: !0,
          get: function() {
            return t(m).default
          }
        })
        var p = o(30)
        Object.defineProperty(l, 'atelierHeathLight', {
          enumerable: !0,
          get: function() {
            return t(p).default
          }
        })
        var y = o(31)
        Object.defineProperty(l, 'atelierLakesideDark', {
          enumerable: !0,
          get: function() {
            return t(y).default
          }
        })
        var v = o(32)
        Object.defineProperty(l, 'atelierLakesideLight', {
          enumerable: !0,
          get: function() {
            return t(v).default
          }
        })
        var w = o(33)
        Object.defineProperty(l, 'atelierPlateauDark', {
          enumerable: !0,
          get: function() {
            return t(w).default
          }
        })
        var k = o(34)
        Object.defineProperty(l, 'atelierPlateauLight', {
          enumerable: !0,
          get: function() {
            return t(k).default
          }
        })
        var E = o(35)
        Object.defineProperty(l, 'atelierSavannaDark', {
          enumerable: !0,
          get: function() {
            return t(E).default
          }
        })
        var _ = o(36)
        Object.defineProperty(l, 'atelierSavannaLight', {
          enumerable: !0,
          get: function() {
            return t(_).default
          }
        })
        var A = o(37)
        Object.defineProperty(l, 'atelierSeasideDark', {
          enumerable: !0,
          get: function() {
            return t(A).default
          }
        })
        var x = o(38)
        Object.defineProperty(l, 'atelierSeasideLight', {
          enumerable: !0,
          get: function() {
            return t(x).default
          }
        })
        var O = o(39)
        Object.defineProperty(l, 'atelierSulphurpoolDark', {
          enumerable: !0,
          get: function() {
            return t(O).default
          }
        })
        var W = o(40)
        Object.defineProperty(l, 'atelierSulphurpoolLight', {
          enumerable: !0,
          get: function() {
            return t(W).default
          }
        })
        var S = o(41)
        Object.defineProperty(l, 'atomOneDark', {
          enumerable: !0,
          get: function() {
            return t(S).default
          }
        })
        var C = o(42)
        Object.defineProperty(l, 'atomOneLight', {
          enumerable: !0,
          get: function() {
            return t(C).default
          }
        })
        var P = o(43)
        Object.defineProperty(l, 'brownPaper', {
          enumerable: !0,
          get: function() {
            return t(P).default
          }
        })
        var N = o(44)
        Object.defineProperty(l, 'codepenEmbed', {
          enumerable: !0,
          get: function() {
            return t(N).default
          }
        })
        var M = o(45)
        Object.defineProperty(l, 'colorBrewer', {
          enumerable: !0,
          get: function() {
            return t(M).default
          }
        })
        var B = o(46)
        Object.defineProperty(l, 'darcula', {
          enumerable: !0,
          get: function() {
            return t(B).default
          }
        })
        var D = o(47)
        Object.defineProperty(l, 'dark', {
          enumerable: !0,
          get: function() {
            return t(D).default
          }
        })
        var I = o(48)
        Object.defineProperty(l, 'darkula', {
          enumerable: !0,
          get: function() {
            return t(I).default
          }
        })
        var L = o(49)
        Object.defineProperty(l, 'defaultStyle', {
          enumerable: !0,
          get: function() {
            return t(L).default
          }
        })
        var R = o(50)
        Object.defineProperty(l, 'docco', {
          enumerable: !0,
          get: function() {
            return t(R).default
          }
        })
        var T = o(51)
        Object.defineProperty(l, 'dracula', {
          enumerable: !0,
          get: function() {
            return t(T).default
          }
        })
        var q = o(52)
        Object.defineProperty(l, 'far', {
          enumerable: !0,
          get: function() {
            return t(q).default
          }
        })
        var X = o(53)
        Object.defineProperty(l, 'foundation', {
          enumerable: !0,
          get: function() {
            return t(X).default
          }
        })
        var U = o(54)
        Object.defineProperty(l, 'githubGist', {
          enumerable: !0,
          get: function() {
            return t(U).default
          }
        })
        var F = o(55)
        Object.defineProperty(l, 'github', {
          enumerable: !0,
          get: function() {
            return t(F).default
          }
        })
        var z = o(56)
        Object.defineProperty(l, 'googlecode', {
          enumerable: !0,
          get: function() {
            return t(z).default
          }
        })
        var H = o(57)
        Object.defineProperty(l, 'grayscale', {
          enumerable: !0,
          get: function() {
            return t(H).default
          }
        })
        var Q = o(58)
        Object.defineProperty(l, 'gruvboxDark', {
          enumerable: !0,
          get: function() {
            return t(Q).default
          }
        })
        var K = o(59)
        Object.defineProperty(l, 'gruvboxLight', {
          enumerable: !0,
          get: function() {
            return t(K).default
          }
        })
        var G = o(60)
        Object.defineProperty(l, 'hopscotch', {
          enumerable: !0,
          get: function() {
            return t(G).default
          }
        })
        var V = o(61)
        Object.defineProperty(l, 'hybrid', {
          enumerable: !0,
          get: function() {
            return t(V).default
          }
        })
        var J = o(62)
        Object.defineProperty(l, 'idea', {
          enumerable: !0,
          get: function() {
            return t(J).default
          }
        })
        var Z = o(63)
        Object.defineProperty(l, 'irBlack', {
          enumerable: !0,
          get: function() {
            return t(Z).default
          }
        })
        var Y = o(64)
        Object.defineProperty(l, 'kimbieDark', {
          enumerable: !0,
          get: function() {
            return t(Y).default
          }
        })
        var $ = o(65)
        Object.defineProperty(l, 'kimbieLight', {
          enumerable: !0,
          get: function() {
            return t($).default
          }
        })
        var ee = o(66)
        Object.defineProperty(l, 'magula', {
          enumerable: !0,
          get: function() {
            return t(ee).default
          }
        })
        var le = o(67)
        Object.defineProperty(l, 'monoBlue', {
          enumerable: !0,
          get: function() {
            return t(le).default
          }
        })
        var oe = o(68)
        Object.defineProperty(l, 'monokaiSublime', {
          enumerable: !0,
          get: function() {
            return t(oe).default
          }
        })
        var te = o(69)
        Object.defineProperty(l, 'monokai', {
          enumerable: !0,
          get: function() {
            return t(te).default
          }
        })
        var re = o(70)
        Object.defineProperty(l, 'obsidian', {
          enumerable: !0,
          get: function() {
            return t(re).default
          }
        })
        var ce = o(71)
        Object.defineProperty(l, 'ocean', {
          enumerable: !0,
          get: function() {
            return t(ce).default
          }
        })
        var ae = o(72)
        Object.defineProperty(l, 'paraisoDark', {
          enumerable: !0,
          get: function() {
            return t(ae).default
          }
        })
        var se = o(73)
        Object.defineProperty(l, 'paraisoLight', {
          enumerable: !0,
          get: function() {
            return t(se).default
          }
        })
        var ne = o(74)
        Object.defineProperty(l, 'pojoaque', {
          enumerable: !0,
          get: function() {
            return t(ne).default
          }
        })
        var ie = o(75)
        Object.defineProperty(l, 'purebasic', {
          enumerable: !0,
          get: function() {
            return t(ie).default
          }
        })
        var he = o(76)
        Object.defineProperty(l, 'qtcreatorDark', {
          enumerable: !0,
          get: function() {
            return t(he).default
          }
        })
        var de = o(77)
        Object.defineProperty(l, 'qtcreatorLight', {
          enumerable: !0,
          get: function() {
            return t(de).default
          }
        })
        var ue = o(78)
        Object.defineProperty(l, 'railscasts', {
          enumerable: !0,
          get: function() {
            return t(ue).default
          }
        })
        var fe = o(79)
        Object.defineProperty(l, 'rainbow', {
          enumerable: !0,
          get: function() {
            return t(fe).default
          }
        })
        var je = o(80)
        Object.defineProperty(l, 'routeros', {
          enumerable: !0,
          get: function() {
            return t(je).default
          }
        })
        var be = o(81)
        Object.defineProperty(l, 'schoolBook', {
          enumerable: !0,
          get: function() {
            return t(be).default
          }
        })
        var ge = o(82)
        Object.defineProperty(l, 'solarizedDark', {
          enumerable: !0,
          get: function() {
            return t(ge).default
          }
        })
        var me = o(83)
        Object.defineProperty(l, 'solarizedLight', {
          enumerable: !0,
          get: function() {
            return t(me).default
          }
        })
        var pe = o(84)
        Object.defineProperty(l, 'sunburst', {
          enumerable: !0,
          get: function() {
            return t(pe).default
          }
        })
        var ye = o(85)
        Object.defineProperty(l, 'tomorrowNightBlue', {
          enumerable: !0,
          get: function() {
            return t(ye).default
          }
        })
        var ve = o(86)
        Object.defineProperty(l, 'tomorrowNightBright', {
          enumerable: !0,
          get: function() {
            return t(ve).default
          }
        })
        var we = o(87)
        Object.defineProperty(l, 'tomorrowNightEighties', {
          enumerable: !0,
          get: function() {
            return t(we).default
          }
        })
        var ke = o(88)
        Object.defineProperty(l, 'tomorrowNight', {
          enumerable: !0,
          get: function() {
            return t(ke).default
          }
        })
        var Ee = o(89)
        Object.defineProperty(l, 'tomorrow', {
          enumerable: !0,
          get: function() {
            return t(Ee).default
          }
        })
        var _e = o(90)
        Object.defineProperty(l, 'vs', {
          enumerable: !0,
          get: function() {
            return t(_e).default
          }
        })
        var Ae = o(91)
        Object.defineProperty(l, 'vs2015', {
          enumerable: !0,
          get: function() {
            return t(Ae).default
          }
        })
        var xe = o(92)
        Object.defineProperty(l, 'xcode', {
          enumerable: !0,
          get: function() {
            return t(xe).default
          }
        })
        var Oe = o(93)
        Object.defineProperty(l, 'xt256', {
          enumerable: !0,
          get: function() {
            return t(Oe).default
          }
        })
        var We = o(94)
        Object.defineProperty(l, 'zenburn', {
          enumerable: !0,
          get: function() {
            return t(We).default
          }
        })
      },
      16: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#333',
              color: 'white'
            },
            'hljs-name': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-code': { fontStyle: 'italic', color: '#888' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-tag': { color: '#62c8f3' },
            'hljs-variable': { color: '#ade5fc' },
            'hljs-template-variable': { color: '#ade5fc' },
            'hljs-selector-id': { color: '#ade5fc' },
            'hljs-selector-class': { color: '#ade5fc' },
            'hljs-string': { color: '#a2fca2' },
            'hljs-bullet': { color: '#d36363' },
            'hljs-type': { color: '#ffa' },
            'hljs-title': { color: '#ffa' },
            'hljs-section': { color: '#ffa' },
            'hljs-attribute': { color: '#ffa' },
            'hljs-quote': { color: '#ffa' },
            'hljs-built_in': { color: '#ffa' },
            'hljs-builtin-name': { color: '#ffa' },
            'hljs-number': { color: '#d36363' },
            'hljs-symbol': { color: '#d36363' },
            'hljs-keyword': { color: '#fcc28c' },
            'hljs-selector-tag': { color: '#fcc28c' },
            'hljs-literal': { color: '#fcc28c' },
            'hljs-comment': { color: '#888' },
            'hljs-deletion': { color: '#333', backgroundColor: '#fc9b9b' },
            'hljs-regexp': { color: '#c6b4f0' },
            'hljs-link': { color: '#c6b4f0' },
            'hljs-meta': { color: '#fc9b9b' },
            'hljs-addition': { backgroundColor: '#a2fca2', color: '#333' }
          })
      },
      17: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              color: '#a9b7c6',
              background: '#282b2e',
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em'
            },
            'hljs-number': { color: '#6897BB' },
            'hljs-literal': { color: '#6897BB' },
            'hljs-symbol': { color: '#6897BB' },
            'hljs-bullet': { color: '#6897BB' },
            'hljs-keyword': { color: '#cc7832' },
            'hljs-selector-tag': { color: '#cc7832' },
            'hljs-deletion': { color: '#cc7832' },
            'hljs-variable': { color: '#629755' },
            'hljs-template-variable': { color: '#629755' },
            'hljs-link': { color: '#629755' },
            'hljs-comment': { color: '#808080' },
            'hljs-quote': { color: '#808080' },
            'hljs-meta': { color: '#bbb529' },
            'hljs-string': { color: '#6A8759' },
            'hljs-attribute': { color: '#6A8759' },
            'hljs-addition': { color: '#6A8759' },
            'hljs-section': { color: '#ffc66d' },
            'hljs-title': { color: '#ffc66d' },
            'hljs-type': { color: '#ffc66d' },
            'hljs-name': { color: '#e8bf6a' },
            'hljs-selector-id': { color: '#e8bf6a' },
            'hljs-selector-class': { color: '#e8bf6a' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      18: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#FFFFFF',
              color: '#434f54'
            },
            'hljs-subst': { color: '#434f54' },
            'hljs-keyword': { color: '#00979D' },
            'hljs-attribute': { color: '#00979D' },
            'hljs-selector-tag': { color: '#00979D' },
            'hljs-doctag': { color: '#00979D' },
            'hljs-name': { color: '#00979D' },
            'hljs-built_in': { color: '#D35400' },
            'hljs-literal': { color: '#D35400' },
            'hljs-bullet': { color: '#D35400' },
            'hljs-code': { color: '#D35400' },
            'hljs-addition': { color: '#D35400' },
            'hljs-regexp': { color: '#00979D' },
            'hljs-symbol': { color: '#00979D' },
            'hljs-variable': { color: '#00979D' },
            'hljs-template-variable': { color: '#00979D' },
            'hljs-link': { color: '#00979D' },
            'hljs-selector-attr': { color: '#00979D' },
            'hljs-selector-pseudo': { color: '#00979D' },
            'hljs-type': { color: '#005C5F' },
            'hljs-string': { color: '#005C5F' },
            'hljs-selector-id': { color: '#005C5F' },
            'hljs-selector-class': { color: '#005C5F' },
            'hljs-quote': { color: '#005C5F' },
            'hljs-template-tag': { color: '#005C5F' },
            'hljs-deletion': { color: '#005C5F' },
            'hljs-title': { color: '#880000', fontWeight: 'bold' },
            'hljs-section': { color: '#880000', fontWeight: 'bold' },
            'hljs-comment': { color: 'rgba(149,165,166,.8)' },
            'hljs-meta-keyword': { color: '#728E00' },
            'hljs-meta': { color: '#434f54' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-function': { color: '#728E00' },
            'hljs-number': { color: '#8A7B52' }
          })
      },
      19: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#222',
              color: '#aaa'
            },
            'hljs-subst': { color: '#aaa' },
            'hljs-section': { color: '#fff', fontWeight: 'bold' },
            'hljs-comment': { color: '#444' },
            'hljs-quote': { color: '#444' },
            'hljs-meta': { color: '#444' },
            'hljs-string': { color: '#ffcc33' },
            'hljs-symbol': { color: '#ffcc33' },
            'hljs-bullet': { color: '#ffcc33' },
            'hljs-regexp': { color: '#ffcc33' },
            'hljs-number': { color: '#00cc66' },
            'hljs-addition': { color: '#00cc66' },
            'hljs-built_in': { color: '#32aaee' },
            'hljs-builtin-name': { color: '#32aaee' },
            'hljs-literal': { color: '#32aaee' },
            'hljs-type': { color: '#32aaee' },
            'hljs-template-variable': { color: '#32aaee' },
            'hljs-attribute': { color: '#32aaee' },
            'hljs-link': { color: '#32aaee' },
            'hljs-keyword': { color: '#6644aa' },
            'hljs-selector-tag': { color: '#6644aa' },
            'hljs-name': { color: '#6644aa' },
            'hljs-selector-id': { color: '#6644aa' },
            'hljs-selector-class': { color: '#6644aa' },
            'hljs-title': { color: '#bb1166' },
            'hljs-variable': { color: '#bb1166' },
            'hljs-deletion': { color: '#bb1166' },
            'hljs-template-tag': { color: '#bb1166' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      20: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: 'white',
              color: 'black'
            },
            'hljs-string': { color: '#888' },
            'hljs-variable': { color: '#888' },
            'hljs-template-variable': { color: '#888' },
            'hljs-symbol': { color: '#888' },
            'hljs-bullet': { color: '#888' },
            'hljs-section': { color: '#888', fontWeight: 'bold' },
            'hljs-addition': { color: '#888' },
            'hljs-attribute': { color: '#888' },
            'hljs-link': { color: '#888' },
            'hljs-comment': { color: '#ccc' },
            'hljs-quote': { color: '#ccc' },
            'hljs-meta': { color: '#ccc' },
            'hljs-deletion': { color: '#ccc' },
            'hljs-keyword': { fontWeight: 'bold' },
            'hljs-selector-tag': { fontWeight: 'bold' },
            'hljs-name': { fontWeight: 'bold' },
            'hljs-type': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      21: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#7e7887' },
            'hljs-quote': { color: '#7e7887' },
            'hljs-variable': { color: '#be4678' },
            'hljs-template-variable': { color: '#be4678' },
            'hljs-attribute': { color: '#be4678' },
            'hljs-regexp': { color: '#be4678' },
            'hljs-link': { color: '#be4678' },
            'hljs-tag': { color: '#be4678' },
            'hljs-name': { color: '#be4678' },
            'hljs-selector-id': { color: '#be4678' },
            'hljs-selector-class': { color: '#be4678' },
            'hljs-number': { color: '#aa573c' },
            'hljs-meta': { color: '#aa573c' },
            'hljs-built_in': { color: '#aa573c' },
            'hljs-builtin-name': { color: '#aa573c' },
            'hljs-literal': { color: '#aa573c' },
            'hljs-type': { color: '#aa573c' },
            'hljs-params': { color: '#aa573c' },
            'hljs-string': { color: '#2a9292' },
            'hljs-symbol': { color: '#2a9292' },
            'hljs-bullet': { color: '#2a9292' },
            'hljs-title': { color: '#576ddb' },
            'hljs-section': { color: '#576ddb' },
            'hljs-keyword': { color: '#955ae7' },
            'hljs-selector-tag': { color: '#955ae7' },
            'hljs-deletion': {
              color: '#19171c',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#be4678'
            },
            'hljs-addition': {
              color: '#19171c',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#2a9292'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#19171c',
              color: '#8b8792',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      22: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#655f6d' },
            'hljs-quote': { color: '#655f6d' },
            'hljs-variable': { color: '#be4678' },
            'hljs-template-variable': { color: '#be4678' },
            'hljs-attribute': { color: '#be4678' },
            'hljs-tag': { color: '#be4678' },
            'hljs-name': { color: '#be4678' },
            'hljs-regexp': { color: '#be4678' },
            'hljs-link': { color: '#be4678' },
            'hljs-selector-id': { color: '#be4678' },
            'hljs-selector-class': { color: '#be4678' },
            'hljs-number': { color: '#aa573c' },
            'hljs-meta': { color: '#aa573c' },
            'hljs-built_in': { color: '#aa573c' },
            'hljs-builtin-name': { color: '#aa573c' },
            'hljs-literal': { color: '#aa573c' },
            'hljs-type': { color: '#aa573c' },
            'hljs-params': { color: '#aa573c' },
            'hljs-string': { color: '#2a9292' },
            'hljs-symbol': { color: '#2a9292' },
            'hljs-bullet': { color: '#2a9292' },
            'hljs-title': { color: '#576ddb' },
            'hljs-section': { color: '#576ddb' },
            'hljs-keyword': { color: '#955ae7' },
            'hljs-selector-tag': { color: '#955ae7' },
            'hljs-deletion': {
              color: '#19171c',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#be4678'
            },
            'hljs-addition': {
              color: '#19171c',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#2a9292'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#efecf4',
              color: '#585260',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      23: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#999580' },
            'hljs-quote': { color: '#999580' },
            'hljs-variable': { color: '#d73737' },
            'hljs-template-variable': { color: '#d73737' },
            'hljs-attribute': { color: '#d73737' },
            'hljs-tag': { color: '#d73737' },
            'hljs-name': { color: '#d73737' },
            'hljs-regexp': { color: '#d73737' },
            'hljs-link': { color: '#d73737' },
            'hljs-selector-id': { color: '#d73737' },
            'hljs-selector-class': { color: '#d73737' },
            'hljs-number': { color: '#b65611' },
            'hljs-meta': { color: '#b65611' },
            'hljs-built_in': { color: '#b65611' },
            'hljs-builtin-name': { color: '#b65611' },
            'hljs-literal': { color: '#b65611' },
            'hljs-type': { color: '#b65611' },
            'hljs-params': { color: '#b65611' },
            'hljs-string': { color: '#60ac39' },
            'hljs-symbol': { color: '#60ac39' },
            'hljs-bullet': { color: '#60ac39' },
            'hljs-title': { color: '#6684e1' },
            'hljs-section': { color: '#6684e1' },
            'hljs-keyword': { color: '#b854d4' },
            'hljs-selector-tag': { color: '#b854d4' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#20201d',
              color: '#a6a28c',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      24: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#7d7a68' },
            'hljs-quote': { color: '#7d7a68' },
            'hljs-variable': { color: '#d73737' },
            'hljs-template-variable': { color: '#d73737' },
            'hljs-attribute': { color: '#d73737' },
            'hljs-tag': { color: '#d73737' },
            'hljs-name': { color: '#d73737' },
            'hljs-regexp': { color: '#d73737' },
            'hljs-link': { color: '#d73737' },
            'hljs-selector-id': { color: '#d73737' },
            'hljs-selector-class': { color: '#d73737' },
            'hljs-number': { color: '#b65611' },
            'hljs-meta': { color: '#b65611' },
            'hljs-built_in': { color: '#b65611' },
            'hljs-builtin-name': { color: '#b65611' },
            'hljs-literal': { color: '#b65611' },
            'hljs-type': { color: '#b65611' },
            'hljs-params': { color: '#b65611' },
            'hljs-string': { color: '#60ac39' },
            'hljs-symbol': { color: '#60ac39' },
            'hljs-bullet': { color: '#60ac39' },
            'hljs-title': { color: '#6684e1' },
            'hljs-section': { color: '#6684e1' },
            'hljs-keyword': { color: '#b854d4' },
            'hljs-selector-tag': { color: '#b854d4' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#fefbec',
              color: '#6e6b5e',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      25: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#878573' },
            'hljs-quote': { color: '#878573' },
            'hljs-variable': { color: '#ba6236' },
            'hljs-template-variable': { color: '#ba6236' },
            'hljs-attribute': { color: '#ba6236' },
            'hljs-tag': { color: '#ba6236' },
            'hljs-name': { color: '#ba6236' },
            'hljs-regexp': { color: '#ba6236' },
            'hljs-link': { color: '#ba6236' },
            'hljs-selector-id': { color: '#ba6236' },
            'hljs-selector-class': { color: '#ba6236' },
            'hljs-number': { color: '#ae7313' },
            'hljs-meta': { color: '#ae7313' },
            'hljs-built_in': { color: '#ae7313' },
            'hljs-builtin-name': { color: '#ae7313' },
            'hljs-literal': { color: '#ae7313' },
            'hljs-type': { color: '#ae7313' },
            'hljs-params': { color: '#ae7313' },
            'hljs-string': { color: '#7d9726' },
            'hljs-symbol': { color: '#7d9726' },
            'hljs-bullet': { color: '#7d9726' },
            'hljs-title': { color: '#36a166' },
            'hljs-section': { color: '#36a166' },
            'hljs-keyword': { color: '#5f9182' },
            'hljs-selector-tag': { color: '#5f9182' },
            'hljs-deletion': {
              color: '#22221b',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ba6236'
            },
            'hljs-addition': {
              color: '#22221b',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#7d9726'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#22221b',
              color: '#929181',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      26: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#6c6b5a' },
            'hljs-quote': { color: '#6c6b5a' },
            'hljs-variable': { color: '#ba6236' },
            'hljs-template-variable': { color: '#ba6236' },
            'hljs-attribute': { color: '#ba6236' },
            'hljs-tag': { color: '#ba6236' },
            'hljs-name': { color: '#ba6236' },
            'hljs-regexp': { color: '#ba6236' },
            'hljs-link': { color: '#ba6236' },
            'hljs-selector-id': { color: '#ba6236' },
            'hljs-selector-class': { color: '#ba6236' },
            'hljs-number': { color: '#ae7313' },
            'hljs-meta': { color: '#ae7313' },
            'hljs-built_in': { color: '#ae7313' },
            'hljs-builtin-name': { color: '#ae7313' },
            'hljs-literal': { color: '#ae7313' },
            'hljs-type': { color: '#ae7313' },
            'hljs-params': { color: '#ae7313' },
            'hljs-string': { color: '#7d9726' },
            'hljs-symbol': { color: '#7d9726' },
            'hljs-bullet': { color: '#7d9726' },
            'hljs-title': { color: '#36a166' },
            'hljs-section': { color: '#36a166' },
            'hljs-keyword': { color: '#5f9182' },
            'hljs-selector-tag': { color: '#5f9182' },
            'hljs-deletion': {
              color: '#22221b',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ba6236'
            },
            'hljs-addition': {
              color: '#22221b',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#7d9726'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f4f3ec',
              color: '#5f5e4e',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      27: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#9c9491' },
            'hljs-quote': { color: '#9c9491' },
            'hljs-variable': { color: '#f22c40' },
            'hljs-template-variable': { color: '#f22c40' },
            'hljs-attribute': { color: '#f22c40' },
            'hljs-tag': { color: '#f22c40' },
            'hljs-name': { color: '#f22c40' },
            'hljs-regexp': { color: '#f22c40' },
            'hljs-link': { color: '#f22c40' },
            'hljs-selector-id': { color: '#f22c40' },
            'hljs-selector-class': { color: '#f22c40' },
            'hljs-number': { color: '#df5320' },
            'hljs-meta': { color: '#df5320' },
            'hljs-built_in': { color: '#df5320' },
            'hljs-builtin-name': { color: '#df5320' },
            'hljs-literal': { color: '#df5320' },
            'hljs-type': { color: '#df5320' },
            'hljs-params': { color: '#df5320' },
            'hljs-string': { color: '#7b9726' },
            'hljs-symbol': { color: '#7b9726' },
            'hljs-bullet': { color: '#7b9726' },
            'hljs-title': { color: '#407ee7' },
            'hljs-section': { color: '#407ee7' },
            'hljs-keyword': { color: '#6666ea' },
            'hljs-selector-tag': { color: '#6666ea' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#1b1918',
              color: '#a8a19f',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      28: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#766e6b' },
            'hljs-quote': { color: '#766e6b' },
            'hljs-variable': { color: '#f22c40' },
            'hljs-template-variable': { color: '#f22c40' },
            'hljs-attribute': { color: '#f22c40' },
            'hljs-tag': { color: '#f22c40' },
            'hljs-name': { color: '#f22c40' },
            'hljs-regexp': { color: '#f22c40' },
            'hljs-link': { color: '#f22c40' },
            'hljs-selector-id': { color: '#f22c40' },
            'hljs-selector-class': { color: '#f22c40' },
            'hljs-number': { color: '#df5320' },
            'hljs-meta': { color: '#df5320' },
            'hljs-built_in': { color: '#df5320' },
            'hljs-builtin-name': { color: '#df5320' },
            'hljs-literal': { color: '#df5320' },
            'hljs-type': { color: '#df5320' },
            'hljs-params': { color: '#df5320' },
            'hljs-string': { color: '#7b9726' },
            'hljs-symbol': { color: '#7b9726' },
            'hljs-bullet': { color: '#7b9726' },
            'hljs-title': { color: '#407ee7' },
            'hljs-section': { color: '#407ee7' },
            'hljs-keyword': { color: '#6666ea' },
            'hljs-selector-tag': { color: '#6666ea' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f1efee',
              color: '#68615e',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      29: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#9e8f9e' },
            'hljs-quote': { color: '#9e8f9e' },
            'hljs-variable': { color: '#ca402b' },
            'hljs-template-variable': { color: '#ca402b' },
            'hljs-attribute': { color: '#ca402b' },
            'hljs-tag': { color: '#ca402b' },
            'hljs-name': { color: '#ca402b' },
            'hljs-regexp': { color: '#ca402b' },
            'hljs-link': { color: '#ca402b' },
            'hljs-selector-id': { color: '#ca402b' },
            'hljs-selector-class': { color: '#ca402b' },
            'hljs-number': { color: '#a65926' },
            'hljs-meta': { color: '#a65926' },
            'hljs-built_in': { color: '#a65926' },
            'hljs-builtin-name': { color: '#a65926' },
            'hljs-literal': { color: '#a65926' },
            'hljs-type': { color: '#a65926' },
            'hljs-params': { color: '#a65926' },
            'hljs-string': { color: '#918b3b' },
            'hljs-symbol': { color: '#918b3b' },
            'hljs-bullet': { color: '#918b3b' },
            'hljs-title': { color: '#516aec' },
            'hljs-section': { color: '#516aec' },
            'hljs-keyword': { color: '#7b59c0' },
            'hljs-selector-tag': { color: '#7b59c0' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#1b181b',
              color: '#ab9bab',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      30: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#776977' },
            'hljs-quote': { color: '#776977' },
            'hljs-variable': { color: '#ca402b' },
            'hljs-template-variable': { color: '#ca402b' },
            'hljs-attribute': { color: '#ca402b' },
            'hljs-tag': { color: '#ca402b' },
            'hljs-name': { color: '#ca402b' },
            'hljs-regexp': { color: '#ca402b' },
            'hljs-link': { color: '#ca402b' },
            'hljs-selector-id': { color: '#ca402b' },
            'hljs-selector-class': { color: '#ca402b' },
            'hljs-number': { color: '#a65926' },
            'hljs-meta': { color: '#a65926' },
            'hljs-built_in': { color: '#a65926' },
            'hljs-builtin-name': { color: '#a65926' },
            'hljs-literal': { color: '#a65926' },
            'hljs-type': { color: '#a65926' },
            'hljs-params': { color: '#a65926' },
            'hljs-string': { color: '#918b3b' },
            'hljs-symbol': { color: '#918b3b' },
            'hljs-bullet': { color: '#918b3b' },
            'hljs-title': { color: '#516aec' },
            'hljs-section': { color: '#516aec' },
            'hljs-keyword': { color: '#7b59c0' },
            'hljs-selector-tag': { color: '#7b59c0' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f7f3f7',
              color: '#695d69',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      31: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#7195a8' },
            'hljs-quote': { color: '#7195a8' },
            'hljs-variable': { color: '#d22d72' },
            'hljs-template-variable': { color: '#d22d72' },
            'hljs-attribute': { color: '#d22d72' },
            'hljs-tag': { color: '#d22d72' },
            'hljs-name': { color: '#d22d72' },
            'hljs-regexp': { color: '#d22d72' },
            'hljs-link': { color: '#d22d72' },
            'hljs-selector-id': { color: '#d22d72' },
            'hljs-selector-class': { color: '#d22d72' },
            'hljs-number': { color: '#935c25' },
            'hljs-meta': { color: '#935c25' },
            'hljs-built_in': { color: '#935c25' },
            'hljs-builtin-name': { color: '#935c25' },
            'hljs-literal': { color: '#935c25' },
            'hljs-type': { color: '#935c25' },
            'hljs-params': { color: '#935c25' },
            'hljs-string': { color: '#568c3b' },
            'hljs-symbol': { color: '#568c3b' },
            'hljs-bullet': { color: '#568c3b' },
            'hljs-title': { color: '#257fad' },
            'hljs-section': { color: '#257fad' },
            'hljs-keyword': { color: '#6b6bb8' },
            'hljs-selector-tag': { color: '#6b6bb8' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#161b1d',
              color: '#7ea2b4',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      32: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#5a7b8c' },
            'hljs-quote': { color: '#5a7b8c' },
            'hljs-variable': { color: '#d22d72' },
            'hljs-template-variable': { color: '#d22d72' },
            'hljs-attribute': { color: '#d22d72' },
            'hljs-tag': { color: '#d22d72' },
            'hljs-name': { color: '#d22d72' },
            'hljs-regexp': { color: '#d22d72' },
            'hljs-link': { color: '#d22d72' },
            'hljs-selector-id': { color: '#d22d72' },
            'hljs-selector-class': { color: '#d22d72' },
            'hljs-number': { color: '#935c25' },
            'hljs-meta': { color: '#935c25' },
            'hljs-built_in': { color: '#935c25' },
            'hljs-builtin-name': { color: '#935c25' },
            'hljs-literal': { color: '#935c25' },
            'hljs-type': { color: '#935c25' },
            'hljs-params': { color: '#935c25' },
            'hljs-string': { color: '#568c3b' },
            'hljs-symbol': { color: '#568c3b' },
            'hljs-bullet': { color: '#568c3b' },
            'hljs-title': { color: '#257fad' },
            'hljs-section': { color: '#257fad' },
            'hljs-keyword': { color: '#6b6bb8' },
            'hljs-selector-tag': { color: '#6b6bb8' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#ebf8ff',
              color: '#516d7b',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      33: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#7e7777' },
            'hljs-quote': { color: '#7e7777' },
            'hljs-variable': { color: '#ca4949' },
            'hljs-template-variable': { color: '#ca4949' },
            'hljs-attribute': { color: '#ca4949' },
            'hljs-tag': { color: '#ca4949' },
            'hljs-name': { color: '#ca4949' },
            'hljs-regexp': { color: '#ca4949' },
            'hljs-link': { color: '#ca4949' },
            'hljs-selector-id': { color: '#ca4949' },
            'hljs-selector-class': { color: '#ca4949' },
            'hljs-number': { color: '#b45a3c' },
            'hljs-meta': { color: '#b45a3c' },
            'hljs-built_in': { color: '#b45a3c' },
            'hljs-builtin-name': { color: '#b45a3c' },
            'hljs-literal': { color: '#b45a3c' },
            'hljs-type': { color: '#b45a3c' },
            'hljs-params': { color: '#b45a3c' },
            'hljs-string': { color: '#4b8b8b' },
            'hljs-symbol': { color: '#4b8b8b' },
            'hljs-bullet': { color: '#4b8b8b' },
            'hljs-title': { color: '#7272ca' },
            'hljs-section': { color: '#7272ca' },
            'hljs-keyword': { color: '#8464c4' },
            'hljs-selector-tag': { color: '#8464c4' },
            'hljs-deletion': {
              color: '#1b1818',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ca4949'
            },
            'hljs-addition': {
              color: '#1b1818',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#4b8b8b'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#1b1818',
              color: '#8a8585',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      34: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#655d5d' },
            'hljs-quote': { color: '#655d5d' },
            'hljs-variable': { color: '#ca4949' },
            'hljs-template-variable': { color: '#ca4949' },
            'hljs-attribute': { color: '#ca4949' },
            'hljs-tag': { color: '#ca4949' },
            'hljs-name': { color: '#ca4949' },
            'hljs-regexp': { color: '#ca4949' },
            'hljs-link': { color: '#ca4949' },
            'hljs-selector-id': { color: '#ca4949' },
            'hljs-selector-class': { color: '#ca4949' },
            'hljs-number': { color: '#b45a3c' },
            'hljs-meta': { color: '#b45a3c' },
            'hljs-built_in': { color: '#b45a3c' },
            'hljs-builtin-name': { color: '#b45a3c' },
            'hljs-literal': { color: '#b45a3c' },
            'hljs-type': { color: '#b45a3c' },
            'hljs-params': { color: '#b45a3c' },
            'hljs-string': { color: '#4b8b8b' },
            'hljs-symbol': { color: '#4b8b8b' },
            'hljs-bullet': { color: '#4b8b8b' },
            'hljs-title': { color: '#7272ca' },
            'hljs-section': { color: '#7272ca' },
            'hljs-keyword': { color: '#8464c4' },
            'hljs-selector-tag': { color: '#8464c4' },
            'hljs-deletion': {
              color: '#1b1818',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#ca4949'
            },
            'hljs-addition': {
              color: '#1b1818',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#4b8b8b'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f4ecec',
              color: '#585050',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      35: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#78877d' },
            'hljs-quote': { color: '#78877d' },
            'hljs-variable': { color: '#b16139' },
            'hljs-template-variable': { color: '#b16139' },
            'hljs-attribute': { color: '#b16139' },
            'hljs-tag': { color: '#b16139' },
            'hljs-name': { color: '#b16139' },
            'hljs-regexp': { color: '#b16139' },
            'hljs-link': { color: '#b16139' },
            'hljs-selector-id': { color: '#b16139' },
            'hljs-selector-class': { color: '#b16139' },
            'hljs-number': { color: '#9f713c' },
            'hljs-meta': { color: '#9f713c' },
            'hljs-built_in': { color: '#9f713c' },
            'hljs-builtin-name': { color: '#9f713c' },
            'hljs-literal': { color: '#9f713c' },
            'hljs-type': { color: '#9f713c' },
            'hljs-params': { color: '#9f713c' },
            'hljs-string': { color: '#489963' },
            'hljs-symbol': { color: '#489963' },
            'hljs-bullet': { color: '#489963' },
            'hljs-title': { color: '#478c90' },
            'hljs-section': { color: '#478c90' },
            'hljs-keyword': { color: '#55859b' },
            'hljs-selector-tag': { color: '#55859b' },
            'hljs-deletion': {
              color: '#171c19',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#b16139'
            },
            'hljs-addition': {
              color: '#171c19',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#489963'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#171c19',
              color: '#87928a',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      36: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#5f6d64' },
            'hljs-quote': { color: '#5f6d64' },
            'hljs-variable': { color: '#b16139' },
            'hljs-template-variable': { color: '#b16139' },
            'hljs-attribute': { color: '#b16139' },
            'hljs-tag': { color: '#b16139' },
            'hljs-name': { color: '#b16139' },
            'hljs-regexp': { color: '#b16139' },
            'hljs-link': { color: '#b16139' },
            'hljs-selector-id': { color: '#b16139' },
            'hljs-selector-class': { color: '#b16139' },
            'hljs-number': { color: '#9f713c' },
            'hljs-meta': { color: '#9f713c' },
            'hljs-built_in': { color: '#9f713c' },
            'hljs-builtin-name': { color: '#9f713c' },
            'hljs-literal': { color: '#9f713c' },
            'hljs-type': { color: '#9f713c' },
            'hljs-params': { color: '#9f713c' },
            'hljs-string': { color: '#489963' },
            'hljs-symbol': { color: '#489963' },
            'hljs-bullet': { color: '#489963' },
            'hljs-title': { color: '#478c90' },
            'hljs-section': { color: '#478c90' },
            'hljs-keyword': { color: '#55859b' },
            'hljs-selector-tag': { color: '#55859b' },
            'hljs-deletion': {
              color: '#171c19',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#b16139'
            },
            'hljs-addition': {
              color: '#171c19',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#489963'
            },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#ecf4ee',
              color: '#526057',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      37: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#809980' },
            'hljs-quote': { color: '#809980' },
            'hljs-variable': { color: '#e6193c' },
            'hljs-template-variable': { color: '#e6193c' },
            'hljs-attribute': { color: '#e6193c' },
            'hljs-tag': { color: '#e6193c' },
            'hljs-name': { color: '#e6193c' },
            'hljs-regexp': { color: '#e6193c' },
            'hljs-link': { color: '#e6193c' },
            'hljs-selector-id': { color: '#e6193c' },
            'hljs-selector-class': { color: '#e6193c' },
            'hljs-number': { color: '#87711d' },
            'hljs-meta': { color: '#87711d' },
            'hljs-built_in': { color: '#87711d' },
            'hljs-builtin-name': { color: '#87711d' },
            'hljs-literal': { color: '#87711d' },
            'hljs-type': { color: '#87711d' },
            'hljs-params': { color: '#87711d' },
            'hljs-string': { color: '#29a329' },
            'hljs-symbol': { color: '#29a329' },
            'hljs-bullet': { color: '#29a329' },
            'hljs-title': { color: '#3d62f5' },
            'hljs-section': { color: '#3d62f5' },
            'hljs-keyword': { color: '#ad2bee' },
            'hljs-selector-tag': { color: '#ad2bee' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#131513',
              color: '#8ca68c',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      38: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#687d68' },
            'hljs-quote': { color: '#687d68' },
            'hljs-variable': { color: '#e6193c' },
            'hljs-template-variable': { color: '#e6193c' },
            'hljs-attribute': { color: '#e6193c' },
            'hljs-tag': { color: '#e6193c' },
            'hljs-name': { color: '#e6193c' },
            'hljs-regexp': { color: '#e6193c' },
            'hljs-link': { color: '#e6193c' },
            'hljs-selector-id': { color: '#e6193c' },
            'hljs-selector-class': { color: '#e6193c' },
            'hljs-number': { color: '#87711d' },
            'hljs-meta': { color: '#87711d' },
            'hljs-built_in': { color: '#87711d' },
            'hljs-builtin-name': { color: '#87711d' },
            'hljs-literal': { color: '#87711d' },
            'hljs-type': { color: '#87711d' },
            'hljs-params': { color: '#87711d' },
            'hljs-string': { color: '#29a329' },
            'hljs-symbol': { color: '#29a329' },
            'hljs-bullet': { color: '#29a329' },
            'hljs-title': { color: '#3d62f5' },
            'hljs-section': { color: '#3d62f5' },
            'hljs-keyword': { color: '#ad2bee' },
            'hljs-selector-tag': { color: '#ad2bee' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f4fbf4',
              color: '#5e6e5e',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      39: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#898ea4' },
            'hljs-quote': { color: '#898ea4' },
            'hljs-variable': { color: '#c94922' },
            'hljs-template-variable': { color: '#c94922' },
            'hljs-attribute': { color: '#c94922' },
            'hljs-tag': { color: '#c94922' },
            'hljs-name': { color: '#c94922' },
            'hljs-regexp': { color: '#c94922' },
            'hljs-link': { color: '#c94922' },
            'hljs-selector-id': { color: '#c94922' },
            'hljs-selector-class': { color: '#c94922' },
            'hljs-number': { color: '#c76b29' },
            'hljs-meta': { color: '#c76b29' },
            'hljs-built_in': { color: '#c76b29' },
            'hljs-builtin-name': { color: '#c76b29' },
            'hljs-literal': { color: '#c76b29' },
            'hljs-type': { color: '#c76b29' },
            'hljs-params': { color: '#c76b29' },
            'hljs-string': { color: '#ac9739' },
            'hljs-symbol': { color: '#ac9739' },
            'hljs-bullet': { color: '#ac9739' },
            'hljs-title': { color: '#3d8fd1' },
            'hljs-section': { color: '#3d8fd1' },
            'hljs-keyword': { color: '#6679cc' },
            'hljs-selector-tag': { color: '#6679cc' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#202746',
              color: '#979db4',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      40: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#6b7394' },
            'hljs-quote': { color: '#6b7394' },
            'hljs-variable': { color: '#c94922' },
            'hljs-template-variable': { color: '#c94922' },
            'hljs-attribute': { color: '#c94922' },
            'hljs-tag': { color: '#c94922' },
            'hljs-name': { color: '#c94922' },
            'hljs-regexp': { color: '#c94922' },
            'hljs-link': { color: '#c94922' },
            'hljs-selector-id': { color: '#c94922' },
            'hljs-selector-class': { color: '#c94922' },
            'hljs-number': { color: '#c76b29' },
            'hljs-meta': { color: '#c76b29' },
            'hljs-built_in': { color: '#c76b29' },
            'hljs-builtin-name': { color: '#c76b29' },
            'hljs-literal': { color: '#c76b29' },
            'hljs-type': { color: '#c76b29' },
            'hljs-params': { color: '#c76b29' },
            'hljs-string': { color: '#ac9739' },
            'hljs-symbol': { color: '#ac9739' },
            'hljs-bullet': { color: '#ac9739' },
            'hljs-title': { color: '#3d8fd1' },
            'hljs-section': { color: '#3d8fd1' },
            'hljs-keyword': { color: '#6679cc' },
            'hljs-selector-tag': { color: '#6679cc' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#f5f7ff',
              color: '#5e6687',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      41: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#abb2bf',
              background: '#282c34'
            },
            'hljs-comment': { color: '#5c6370', fontStyle: 'italic' },
            'hljs-quote': { color: '#5c6370', fontStyle: 'italic' },
            'hljs-doctag': { color: '#c678dd' },
            'hljs-keyword': { color: '#c678dd' },
            'hljs-formula': { color: '#c678dd' },
            'hljs-section': { color: '#e06c75' },
            'hljs-name': { color: '#e06c75' },
            'hljs-selector-tag': { color: '#e06c75' },
            'hljs-deletion': { color: '#e06c75' },
            'hljs-subst': { color: '#e06c75' },
            'hljs-literal': { color: '#56b6c2' },
            'hljs-string': { color: '#98c379' },
            'hljs-regexp': { color: '#98c379' },
            'hljs-addition': { color: '#98c379' },
            'hljs-attribute': { color: '#98c379' },
            'hljs-meta-string': { color: '#98c379' },
            'hljs-built_in': { color: '#e6c07b' },
            'hljs-class .hljs-title': { color: '#e6c07b' },
            'hljs-attr': { color: '#d19a66' },
            'hljs-variable': { color: '#d19a66' },
            'hljs-template-variable': { color: '#d19a66' },
            'hljs-type': { color: '#d19a66' },
            'hljs-selector-class': { color: '#d19a66' },
            'hljs-selector-attr': { color: '#d19a66' },
            'hljs-selector-pseudo': { color: '#d19a66' },
            'hljs-number': { color: '#d19a66' },
            'hljs-symbol': { color: '#61aeee' },
            'hljs-bullet': { color: '#61aeee' },
            'hljs-link': { color: '#61aeee', textDecoration: 'underline' },
            'hljs-meta': { color: '#61aeee' },
            'hljs-selector-id': { color: '#61aeee' },
            'hljs-title': { color: '#61aeee' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      42: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#383a42',
              background: '#fafafa'
            },
            'hljs-comment': { color: '#a0a1a7', fontStyle: 'italic' },
            'hljs-quote': { color: '#a0a1a7', fontStyle: 'italic' },
            'hljs-doctag': { color: '#a626a4' },
            'hljs-keyword': { color: '#a626a4' },
            'hljs-formula': { color: '#a626a4' },
            'hljs-section': { color: '#e45649' },
            'hljs-name': { color: '#e45649' },
            'hljs-selector-tag': { color: '#e45649' },
            'hljs-deletion': { color: '#e45649' },
            'hljs-subst': { color: '#e45649' },
            'hljs-literal': { color: '#0184bb' },
            'hljs-string': { color: '#50a14f' },
            'hljs-regexp': { color: '#50a14f' },
            'hljs-addition': { color: '#50a14f' },
            'hljs-attribute': { color: '#50a14f' },
            'hljs-meta-string': { color: '#50a14f' },
            'hljs-built_in': { color: '#c18401' },
            'hljs-class .hljs-title': { color: '#c18401' },
            'hljs-attr': { color: '#986801' },
            'hljs-variable': { color: '#986801' },
            'hljs-template-variable': { color: '#986801' },
            'hljs-type': { color: '#986801' },
            'hljs-selector-class': { color: '#986801' },
            'hljs-selector-attr': { color: '#986801' },
            'hljs-selector-pseudo': { color: '#986801' },
            'hljs-number': { color: '#986801' },
            'hljs-symbol': { color: '#4078f2' },
            'hljs-bullet': { color: '#4078f2' },
            'hljs-link': { color: '#4078f2', textDecoration: 'underline' },
            'hljs-meta': { color: '#4078f2' },
            'hljs-selector-id': { color: '#4078f2' },
            'hljs-title': { color: '#4078f2' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      43: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#b7a68e url(./brown-papersq.png)',
              color: '#363c69'
            },
            'hljs-keyword': { color: '#005599', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#005599', fontWeight: 'bold' },
            'hljs-literal': { color: '#005599', fontWeight: 'bold' },
            'hljs-subst': { color: '#363c69' },
            'hljs-string': { color: '#2c009f' },
            'hljs-title': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-section': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-type': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-attribute': { color: '#2c009f' },
            'hljs-symbol': { color: '#2c009f' },
            'hljs-bullet': { color: '#2c009f' },
            'hljs-built_in': { color: '#2c009f' },
            'hljs-addition': { color: '#2c009f' },
            'hljs-variable': { color: '#2c009f' },
            'hljs-template-tag': { color: '#2c009f' },
            'hljs-template-variable': { color: '#2c009f' },
            'hljs-link': { color: '#2c009f' },
            'hljs-name': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-comment': { color: '#802022' },
            'hljs-quote': { color: '#802022' },
            'hljs-meta': { color: '#802022' },
            'hljs-deletion': { color: '#802022' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      44: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#222',
              color: '#fff'
            },
            'hljs-comment': { color: '#777' },
            'hljs-quote': { color: '#777' },
            'hljs-variable': { color: '#ab875d' },
            'hljs-template-variable': { color: '#ab875d' },
            'hljs-tag': { color: '#ab875d' },
            'hljs-regexp': { color: '#ab875d' },
            'hljs-meta': { color: '#ab875d' },
            'hljs-number': { color: '#ab875d' },
            'hljs-built_in': { color: '#ab875d' },
            'hljs-builtin-name': { color: '#ab875d' },
            'hljs-literal': { color: '#ab875d' },
            'hljs-params': { color: '#ab875d' },
            'hljs-symbol': { color: '#ab875d' },
            'hljs-bullet': { color: '#ab875d' },
            'hljs-link': { color: '#ab875d' },
            'hljs-deletion': { color: '#ab875d' },
            'hljs-section': { color: '#9b869b' },
            'hljs-title': { color: '#9b869b' },
            'hljs-name': { color: '#9b869b' },
            'hljs-selector-id': { color: '#9b869b' },
            'hljs-selector-class': { color: '#9b869b' },
            'hljs-type': { color: '#9b869b' },
            'hljs-attribute': { color: '#9b869b' },
            'hljs-string': { color: '#8f9c6c' },
            'hljs-keyword': { color: '#8f9c6c' },
            'hljs-selector-tag': { color: '#8f9c6c' },
            'hljs-addition': { color: '#8f9c6c' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      45: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#fff',
              color: '#000'
            },
            'hljs-subst': { color: '#000' },
            'hljs-string': { color: '#756bb1' },
            'hljs-meta': { color: '#756bb1' },
            'hljs-symbol': { color: '#756bb1' },
            'hljs-template-tag': { color: '#756bb1' },
            'hljs-template-variable': { color: '#756bb1' },
            'hljs-addition': { color: '#756bb1' },
            'hljs-comment': { color: '#636363' },
            'hljs-quote': { color: '#636363' },
            'hljs-number': { color: '#31a354' },
            'hljs-regexp': { color: '#31a354' },
            'hljs-literal': { color: '#31a354' },
            'hljs-bullet': { color: '#31a354' },
            'hljs-link': { color: '#31a354' },
            'hljs-deletion': { color: '#88f' },
            'hljs-variable': { color: '#88f' },
            'hljs-keyword': { color: '#3182bd' },
            'hljs-selector-tag': { color: '#3182bd' },
            'hljs-title': { color: '#3182bd' },
            'hljs-section': { color: '#3182bd' },
            'hljs-built_in': { color: '#3182bd' },
            'hljs-doctag': { color: '#3182bd' },
            'hljs-type': { color: '#3182bd' },
            'hljs-tag': { color: '#3182bd' },
            'hljs-name': { color: '#3182bd' },
            'hljs-selector-id': { color: '#3182bd' },
            'hljs-selector-class': { color: '#3182bd' },
            'hljs-strong': { color: '#3182bd' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-attribute': { color: '#e6550d' }
          })
      },
      46: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#2b2b2b',
              color: '#bababa'
            },
            'hljs-strong': { color: '#a8a8a2' },
            'hljs-emphasis': { color: '#a8a8a2', fontStyle: 'italic' },
            'hljs-bullet': { color: '#6896ba' },
            'hljs-quote': { color: '#6896ba' },
            'hljs-link': { color: '#6896ba' },
            'hljs-number': { color: '#6896ba' },
            'hljs-regexp': { color: '#6896ba' },
            'hljs-literal': { color: '#6896ba' },
            'hljs-code': { color: '#a6e22e' },
            'hljs-selector-class': { color: '#a6e22e' },
            'hljs-keyword': { color: '#cb7832' },
            'hljs-selector-tag': { color: '#cb7832' },
            'hljs-section': { color: '#cb7832' },
            'hljs-attribute': { color: '#cb7832' },
            'hljs-name': { color: '#cb7832' },
            'hljs-variable': { color: '#cb7832' },
            'hljs-params': { color: '#b9b9b9' },
            'hljs-string': { color: '#6a8759' },
            'hljs-subst': { color: '#e0c46c' },
            'hljs-type': { color: '#e0c46c' },
            'hljs-built_in': { color: '#e0c46c' },
            'hljs-builtin-name': { color: '#e0c46c' },
            'hljs-symbol': { color: '#e0c46c' },
            'hljs-selector-id': { color: '#e0c46c' },
            'hljs-selector-attr': { color: '#e0c46c' },
            'hljs-selector-pseudo': { color: '#e0c46c' },
            'hljs-template-tag': { color: '#e0c46c' },
            'hljs-template-variable': { color: '#e0c46c' },
            'hljs-addition': { color: '#e0c46c' },
            'hljs-comment': { color: '#7f7f7f' },
            'hljs-deletion': { color: '#7f7f7f' },
            'hljs-meta': { color: '#7f7f7f' }
          })
      },
      47: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#444',
              color: '#ddd'
            },
            'hljs-keyword': { color: 'white', fontWeight: 'bold' },
            'hljs-selector-tag': { color: 'white', fontWeight: 'bold' },
            'hljs-literal': { color: 'white', fontWeight: 'bold' },
            'hljs-section': { color: 'white', fontWeight: 'bold' },
            'hljs-link': { color: 'white' },
            'hljs-subst': { color: '#ddd' },
            'hljs-string': { color: '#d88' },
            'hljs-title': { color: '#d88', fontWeight: 'bold' },
            'hljs-name': { color: '#d88', fontWeight: 'bold' },
            'hljs-type': { color: '#d88', fontWeight: 'bold' },
            'hljs-attribute': { color: '#d88' },
            'hljs-symbol': { color: '#d88' },
            'hljs-bullet': { color: '#d88' },
            'hljs-built_in': { color: '#d88' },
            'hljs-addition': { color: '#d88' },
            'hljs-variable': { color: '#d88' },
            'hljs-template-tag': { color: '#d88' },
            'hljs-template-variable': { color: '#d88' },
            'hljs-comment': { color: '#777' },
            'hljs-quote': { color: '#777' },
            'hljs-deletion': { color: '#777' },
            'hljs-meta': { color: '#777' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      48: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }), (l.default = {})
      },
      49: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#F0F0F0',
              color: '#444'
            },
            'hljs-subst': { color: '#444' },
            'hljs-comment': { color: '#888888' },
            'hljs-keyword': { fontWeight: 'bold' },
            'hljs-attribute': { fontWeight: 'bold' },
            'hljs-selector-tag': { fontWeight: 'bold' },
            'hljs-meta-keyword': { fontWeight: 'bold' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-name': { fontWeight: 'bold' },
            'hljs-type': { color: '#880000' },
            'hljs-string': { color: '#880000' },
            'hljs-number': { color: '#880000' },
            'hljs-selector-id': { color: '#880000' },
            'hljs-selector-class': { color: '#880000' },
            'hljs-quote': { color: '#880000' },
            'hljs-template-tag': { color: '#880000' },
            'hljs-deletion': { color: '#880000' },
            'hljs-title': { color: '#880000', fontWeight: 'bold' },
            'hljs-section': { color: '#880000', fontWeight: 'bold' },
            'hljs-regexp': { color: '#BC6060' },
            'hljs-symbol': { color: '#BC6060' },
            'hljs-variable': { color: '#BC6060' },
            'hljs-template-variable': { color: '#BC6060' },
            'hljs-link': { color: '#BC6060' },
            'hljs-selector-attr': { color: '#BC6060' },
            'hljs-selector-pseudo': { color: '#BC6060' },
            'hljs-literal': { color: '#78A960' },
            'hljs-built_in': { color: '#397300' },
            'hljs-bullet': { color: '#397300' },
            'hljs-code': { color: '#397300' },
            'hljs-addition': { color: '#397300' },
            'hljs-meta': { color: '#1f7199' },
            'hljs-meta-string': { color: '#4d99bf' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      50: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#000',
              background: '#f8f8ff'
            },
            'hljs-comment': { color: '#408080', fontStyle: 'italic' },
            'hljs-quote': { color: '#408080', fontStyle: 'italic' },
            'hljs-keyword': { color: '#954121' },
            'hljs-selector-tag': { color: '#954121' },
            'hljs-literal': { color: '#954121' },
            'hljs-subst': { color: '#954121' },
            'hljs-number': { color: '#40a070' },
            'hljs-string': { color: '#219161' },
            'hljs-doctag': { color: '#219161' },
            'hljs-selector-id': { color: '#19469d' },
            'hljs-selector-class': { color: '#19469d' },
            'hljs-section': { color: '#19469d' },
            'hljs-type': { color: '#19469d' },
            'hljs-params': { color: '#00f' },
            'hljs-title': { color: '#458', fontWeight: 'bold' },
            'hljs-tag': { color: '#000080', fontWeight: 'normal' },
            'hljs-name': { color: '#000080', fontWeight: 'normal' },
            'hljs-attribute': { color: '#000080', fontWeight: 'normal' },
            'hljs-variable': { color: '#008080' },
            'hljs-template-variable': { color: '#008080' },
            'hljs-regexp': { color: '#b68' },
            'hljs-link': { color: '#b68' },
            'hljs-symbol': { color: '#990073' },
            'hljs-bullet': { color: '#990073' },
            'hljs-built_in': { color: '#0086b3' },
            'hljs-builtin-name': { color: '#0086b3' },
            'hljs-meta': { color: '#999', fontWeight: 'bold' },
            'hljs-deletion': { background: '#fdd' },
            'hljs-addition': { background: '#dfd' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      51: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#282a36',
              color: '#f8f8f2'
            },
            'hljs-keyword': { color: '#8be9fd', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#8be9fd', fontWeight: 'bold' },
            'hljs-literal': { color: '#8be9fd', fontWeight: 'bold' },
            'hljs-section': { color: '#8be9fd', fontWeight: 'bold' },
            'hljs-link': { color: '#8be9fd' },
            'hljs-function .hljs-keyword': { color: '#ff79c6' },
            'hljs-subst': { color: '#f8f8f2' },
            'hljs-string': { color: '#f1fa8c' },
            'hljs-title': { color: '#f1fa8c', fontWeight: 'bold' },
            'hljs-name': { color: '#f1fa8c', fontWeight: 'bold' },
            'hljs-type': { color: '#f1fa8c', fontWeight: 'bold' },
            'hljs-attribute': { color: '#f1fa8c' },
            'hljs-symbol': { color: '#f1fa8c' },
            'hljs-bullet': { color: '#f1fa8c' },
            'hljs-addition': { color: '#f1fa8c' },
            'hljs-variable': { color: '#f1fa8c' },
            'hljs-template-tag': { color: '#f1fa8c' },
            'hljs-template-variable': { color: '#f1fa8c' },
            'hljs-comment': { color: '#6272a4' },
            'hljs-quote': { color: '#6272a4' },
            'hljs-deletion': { color: '#6272a4' },
            'hljs-meta': { color: '#6272a4' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      52: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#000080',
              color: '#0ff'
            },
            'hljs-subst': { color: '#0ff' },
            'hljs-string': { color: '#ff0' },
            'hljs-attribute': { color: '#ff0' },
            'hljs-symbol': { color: '#ff0' },
            'hljs-bullet': { color: '#ff0' },
            'hljs-built_in': { color: '#ff0' },
            'hljs-builtin-name': { color: '#ff0' },
            'hljs-template-tag': { color: '#ff0' },
            'hljs-template-variable': { color: '#ff0' },
            'hljs-addition': { color: '#ff0' },
            'hljs-keyword': { color: '#fff', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#fff', fontWeight: 'bold' },
            'hljs-section': { color: '#fff', fontWeight: 'bold' },
            'hljs-type': { color: '#fff' },
            'hljs-name': { color: '#fff', fontWeight: 'bold' },
            'hljs-selector-id': { color: '#fff' },
            'hljs-selector-class': { color: '#fff' },
            'hljs-variable': { color: '#fff' },
            'hljs-comment': { color: '#888' },
            'hljs-quote': { color: '#888' },
            'hljs-doctag': { color: '#888' },
            'hljs-deletion': { color: '#888' },
            'hljs-number': { color: '#0f0' },
            'hljs-regexp': { color: '#0f0' },
            'hljs-literal': { color: '#0f0' },
            'hljs-link': { color: '#0f0' },
            'hljs-meta': { color: '#008080' },
            'hljs-title': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      53: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#eee',
              color: 'black'
            },
            'hljs-link': { color: '#070' },
            'hljs-emphasis': { color: '#070', fontStyle: 'italic' },
            'hljs-attribute': { color: '#070' },
            'hljs-addition': { color: '#070' },
            'hljs-strong': { color: '#d14', fontWeight: 'bold' },
            'hljs-string': { color: '#d14' },
            'hljs-deletion': { color: '#d14' },
            'hljs-quote': { color: '#998', fontStyle: 'italic' },
            'hljs-comment': { color: '#998', fontStyle: 'italic' },
            'hljs-section': { color: '#900' },
            'hljs-title': { color: '#900' },
            'hljs-class .hljs-title': { color: '#458' },
            'hljs-type': { color: '#458' },
            'hljs-variable': { color: '#336699' },
            'hljs-template-variable': { color: '#336699' },
            'hljs-bullet': { color: '#997700' },
            'hljs-meta': { color: '#3344bb' },
            'hljs-code': { color: '#099' },
            'hljs-number': { color: '#099' },
            'hljs-literal': { color: '#099' },
            'hljs-keyword': { color: '#099' },
            'hljs-selector-tag': { color: '#099' },
            'hljs-regexp': { backgroundColor: '#fff0ff', color: '#880088' },
            'hljs-symbol': { color: '#990073' },
            'hljs-tag': { color: '#007700' },
            'hljs-name': { color: '#007700' },
            'hljs-selector-id': { color: '#007700' },
            'hljs-selector-class': { color: '#007700' }
          })
      },
      54: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              background: 'white',
              padding: '0.5em',
              color: '#333333',
              overflowX: 'auto'
            },
            'hljs-comment': { color: '#969896' },
            'hljs-meta': { color: '#969896' },
            'hljs-string': { color: '#df5000' },
            'hljs-variable': { color: '#df5000' },
            'hljs-template-variable': { color: '#df5000' },
            'hljs-strong': { color: '#df5000' },
            'hljs-emphasis': { color: '#df5000' },
            'hljs-quote': { color: '#df5000' },
            'hljs-keyword': { color: '#a71d5d' },
            'hljs-selector-tag': { color: '#a71d5d' },
            'hljs-type': { color: '#a71d5d' },
            'hljs-literal': { color: '#0086b3' },
            'hljs-symbol': { color: '#0086b3' },
            'hljs-bullet': { color: '#0086b3' },
            'hljs-attribute': { color: '#0086b3' },
            'hljs-section': { color: '#63a35c' },
            'hljs-name': { color: '#63a35c' },
            'hljs-tag': { color: '#333333' },
            'hljs-title': { color: '#795da3' },
            'hljs-attr': { color: '#795da3' },
            'hljs-selector-id': { color: '#795da3' },
            'hljs-selector-class': { color: '#795da3' },
            'hljs-selector-attr': { color: '#795da3' },
            'hljs-selector-pseudo': { color: '#795da3' },
            'hljs-addition': { color: '#55a532', backgroundColor: '#eaffea' },
            'hljs-deletion': { color: '#bd2c00', backgroundColor: '#ffecec' },
            'hljs-link': { textDecoration: 'underline' }
          })
      },
      55: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#333',
              background: '#f8f8f8'
            },
            'hljs-comment': { color: '#998', fontStyle: 'italic' },
            'hljs-quote': { color: '#998', fontStyle: 'italic' },
            'hljs-keyword': { color: '#333', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#333', fontWeight: 'bold' },
            'hljs-subst': { color: '#333', fontWeight: 'normal' },
            'hljs-number': { color: '#008080' },
            'hljs-literal': { color: '#008080' },
            'hljs-variable': { color: '#008080' },
            'hljs-template-variable': { color: '#008080' },
            'hljs-tag .hljs-attr': { color: '#008080' },
            'hljs-string': { color: '#d14' },
            'hljs-doctag': { color: '#d14' },
            'hljs-title': { color: '#900', fontWeight: 'bold' },
            'hljs-section': { color: '#900', fontWeight: 'bold' },
            'hljs-selector-id': { color: '#900', fontWeight: 'bold' },
            'hljs-type': { color: '#458', fontWeight: 'bold' },
            'hljs-class .hljs-title': { color: '#458', fontWeight: 'bold' },
            'hljs-tag': { color: '#000080', fontWeight: 'normal' },
            'hljs-name': { color: '#000080', fontWeight: 'normal' },
            'hljs-attribute': { color: '#000080', fontWeight: 'normal' },
            'hljs-regexp': { color: '#009926' },
            'hljs-link': { color: '#009926' },
            'hljs-symbol': { color: '#990073' },
            'hljs-bullet': { color: '#990073' },
            'hljs-built_in': { color: '#0086b3' },
            'hljs-builtin-name': { color: '#0086b3' },
            'hljs-meta': { color: '#999', fontWeight: 'bold' },
            'hljs-deletion': { background: '#fdd' },
            'hljs-addition': { background: '#dfd' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      56: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: 'white',
              color: 'black'
            },
            'hljs-comment': { color: '#800' },
            'hljs-quote': { color: '#800' },
            'hljs-keyword': { color: '#008' },
            'hljs-selector-tag': { color: '#008' },
            'hljs-section': { color: '#008' },
            'hljs-title': { color: '#606' },
            'hljs-name': { color: '#008' },
            'hljs-variable': { color: '#660' },
            'hljs-template-variable': { color: '#660' },
            'hljs-string': { color: '#080' },
            'hljs-selector-attr': { color: '#080' },
            'hljs-selector-pseudo': { color: '#080' },
            'hljs-regexp': { color: '#080' },
            'hljs-literal': { color: '#066' },
            'hljs-symbol': { color: '#066' },
            'hljs-bullet': { color: '#066' },
            'hljs-meta': { color: '#066' },
            'hljs-number': { color: '#066' },
            'hljs-link': { color: '#066' },
            'hljs-doctag': { color: '#606', fontWeight: 'bold' },
            'hljs-type': { color: '#606' },
            'hljs-attr': { color: '#606' },
            'hljs-built_in': { color: '#606' },
            'hljs-builtin-name': { color: '#606' },
            'hljs-params': { color: '#606' },
            'hljs-attribute': { color: '#000' },
            'hljs-subst': { color: '#000' },
            'hljs-formula': { backgroundColor: '#eee', fontStyle: 'italic' },
            'hljs-selector-id': { color: '#9B703F' },
            'hljs-selector-class': { color: '#9B703F' },
            'hljs-addition': { backgroundColor: '#baeeba' },
            'hljs-deletion': { backgroundColor: '#ffc8bd' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      57: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#333',
              background: '#fff'
            },
            'hljs-comment': { color: '#777', fontStyle: 'italic' },
            'hljs-quote': { color: '#777', fontStyle: 'italic' },
            'hljs-keyword': { color: '#333', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#333', fontWeight: 'bold' },
            'hljs-subst': { color: '#333', fontWeight: 'normal' },
            'hljs-number': { color: '#777' },
            'hljs-literal': { color: '#777' },
            'hljs-string': {
              color: '#333',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat'
            },
            'hljs-doctag': {
              color: '#333',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat'
            },
            'hljs-formula': {
              color: '#333',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat'
            },
            'hljs-title': { color: '#000', fontWeight: 'bold' },
            'hljs-section': { color: '#000', fontWeight: 'bold' },
            'hljs-selector-id': { color: '#000', fontWeight: 'bold' },
            'hljs-class .hljs-title': { color: '#333', fontWeight: 'bold' },
            'hljs-type': { color: '#333', fontWeight: 'bold' },
            'hljs-name': { color: '#333', fontWeight: 'bold' },
            'hljs-tag': { color: '#333' },
            'hljs-regexp': {
              color: '#333',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPUlEQVQYV2NkQAN37979r6yszIgujiIAU4RNMVwhuiQ6H6wQl3XI4oy4FMHcCJPHcDS6J2A2EqUQpJhohQDexSef15DBCwAAAABJRU5ErkJggg==) repeat'
            },
            'hljs-symbol': {
              color: '#000',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAO7d+/+z4gsBhJwdXVlhAvCBECKwIIwAbhKZBUwBQA6hBpm5efZsgAAAABJRU5ErkJggg==) repeat'
            },
            'hljs-bullet': {
              color: '#000',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAO7d+/+z4gsBhJwdXVlhAvCBECKwIIwAbhKZBUwBQA6hBpm5efZsgAAAABJRU5ErkJggg==) repeat'
            },
            'hljs-link': {
              color: '#000',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAO7d+/+z4gsBhJwdXVlhAvCBECKwIIwAbhKZBUwBQA6hBpm5efZsgAAAABJRU5ErkJggg==) repeat'
            },
            'hljs-built_in': { color: '#000', textDecoration: 'underline' },
            'hljs-builtin-name': { color: '#000', textDecoration: 'underline' },
            'hljs-meta': { color: '#999', fontWeight: 'bold' },
            'hljs-deletion': {
              color: '#fff',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAABS3WWCAAAAE0lEQVQIW2MMDQ39zzhz5kwIAQAyxweWgUHd1AAAAABJRU5ErkJggg==) repeat'
            },
            'hljs-addition': {
              color: '#000',
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALUlEQVQYV2N89+7dfwYk8P79ewZBQUFkIQZGOiu6e/cuiptQHAPl0NtNxAQBAM97Oejj3Dg7AAAAAElFTkSuQmCC) repeat'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      58: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#282828',
              color: '#ebdbb2'
            },
            'hljs-subst': { color: '#ebdbb2' },
            'hljs-deletion': { color: '#fb4934' },
            'hljs-formula': { color: '#fb4934' },
            'hljs-keyword': { color: '#fb4934' },
            'hljs-link': { color: '#fb4934' },
            'hljs-selector-tag': { color: '#fb4934' },
            'hljs-built_in': { color: '#83a598' },
            'hljs-emphasis': { color: '#83a598', fontStyle: 'italic' },
            'hljs-name': { color: '#83a598' },
            'hljs-quote': { color: '#83a598' },
            'hljs-strong': { color: '#83a598', fontWeight: 'bold' },
            'hljs-title': { color: '#83a598' },
            'hljs-variable': { color: '#83a598' },
            'hljs-attr': { color: '#fabd2f' },
            'hljs-params': { color: '#fabd2f' },
            'hljs-template-tag': { color: '#fabd2f' },
            'hljs-type': { color: '#fabd2f' },
            'hljs-builtin-name': { color: '#8f3f71' },
            'hljs-doctag': { color: '#8f3f71' },
            'hljs-literal': { color: '#d3869b' },
            'hljs-number': { color: '#d3869b' },
            'hljs-code': { color: '#fe8019' },
            'hljs-meta': { color: '#fe8019' },
            'hljs-regexp': { color: '#fe8019' },
            'hljs-selector-id': { color: '#fe8019' },
            'hljs-template-variable': { color: '#fe8019' },
            'hljs-addition': { color: '#b8bb26' },
            'hljs-meta-string': { color: '#b8bb26' },
            'hljs-section': { color: '#b8bb26', fontWeight: 'bold' },
            'hljs-selector-attr': { color: '#b8bb26' },
            'hljs-selector-class': { color: '#b8bb26' },
            'hljs-string': { color: '#b8bb26' },
            'hljs-symbol': { color: '#b8bb26' },
            'hljs-attribute': { color: '#8ec07c' },
            'hljs-bullet': { color: '#8ec07c' },
            'hljs-class': { color: '#8ec07c' },
            'hljs-function': { color: '#8ec07c' },
            'hljs-function .hljs-keyword': { color: '#8ec07c' },
            'hljs-meta-keyword': { color: '#8ec07c' },
            'hljs-selector-pseudo': { color: '#8ec07c' },
            'hljs-tag': { color: '#8ec07c', fontWeight: 'bold' },
            'hljs-comment': { color: '#928374', fontStyle: 'italic' },
            'hljs-link_label': { color: '#d3869b' }
          })
      },
      59: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#fbf1c7',
              color: '#3c3836'
            },
            'hljs-subst': { color: '#3c3836' },
            'hljs-deletion': { color: '#9d0006' },
            'hljs-formula': { color: '#9d0006' },
            'hljs-keyword': { color: '#9d0006' },
            'hljs-link': { color: '#9d0006' },
            'hljs-selector-tag': { color: '#9d0006' },
            'hljs-built_in': { color: '#076678' },
            'hljs-emphasis': { color: '#076678', fontStyle: 'italic' },
            'hljs-name': { color: '#076678' },
            'hljs-quote': { color: '#076678' },
            'hljs-strong': { color: '#076678', fontWeight: 'bold' },
            'hljs-title': { color: '#076678' },
            'hljs-variable': { color: '#076678' },
            'hljs-attr': { color: '#b57614' },
            'hljs-params': { color: '#b57614' },
            'hljs-template-tag': { color: '#b57614' },
            'hljs-type': { color: '#b57614' },
            'hljs-builtin-name': { color: '#8f3f71' },
            'hljs-doctag': { color: '#8f3f71' },
            'hljs-literal': { color: '#8f3f71' },
            'hljs-number': { color: '#8f3f71' },
            'hljs-code': { color: '#af3a03' },
            'hljs-meta': { color: '#af3a03' },
            'hljs-regexp': { color: '#af3a03' },
            'hljs-selector-id': { color: '#af3a03' },
            'hljs-template-variable': { color: '#af3a03' },
            'hljs-addition': { color: '#79740e' },
            'hljs-meta-string': { color: '#79740e' },
            'hljs-section': { color: '#79740e', fontWeight: 'bold' },
            'hljs-selector-attr': { color: '#79740e' },
            'hljs-selector-class': { color: '#79740e' },
            'hljs-string': { color: '#79740e' },
            'hljs-symbol': { color: '#79740e' },
            'hljs-attribute': { color: '#427b58' },
            'hljs-bullet': { color: '#427b58' },
            'hljs-class': { color: '#427b58' },
            'hljs-function': { color: '#427b58' },
            'hljs-function .hljs-keyword': { color: '#427b58' },
            'hljs-meta-keyword': { color: '#427b58' },
            'hljs-selector-pseudo': { color: '#427b58' },
            'hljs-tag': { color: '#427b58', fontWeight: 'bold' },
            'hljs-comment': { color: '#928374', fontStyle: 'italic' },
            'hljs-link_label': { color: '#8f3f71' }
          })
      },
      60: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#989498' },
            'hljs-quote': { color: '#989498' },
            'hljs-variable': { color: '#dd464c' },
            'hljs-template-variable': { color: '#dd464c' },
            'hljs-attribute': { color: '#dd464c' },
            'hljs-tag': { color: '#dd464c' },
            'hljs-name': { color: '#dd464c' },
            'hljs-selector-id': { color: '#dd464c' },
            'hljs-selector-class': { color: '#dd464c' },
            'hljs-regexp': { color: '#dd464c' },
            'hljs-link': { color: '#dd464c' },
            'hljs-deletion': { color: '#dd464c' },
            'hljs-number': { color: '#fd8b19' },
            'hljs-built_in': { color: '#fd8b19' },
            'hljs-builtin-name': { color: '#fd8b19' },
            'hljs-literal': { color: '#fd8b19' },
            'hljs-type': { color: '#fd8b19' },
            'hljs-params': { color: '#fd8b19' },
            'hljs-class .hljs-title': { color: '#fdcc59' },
            'hljs-string': { color: '#8fc13e' },
            'hljs-symbol': { color: '#8fc13e' },
            'hljs-bullet': { color: '#8fc13e' },
            'hljs-addition': { color: '#8fc13e' },
            'hljs-meta': { color: '#149b93' },
            'hljs-function': { color: '#1290bf' },
            'hljs-section': { color: '#1290bf' },
            'hljs-title': { color: '#1290bf' },
            'hljs-keyword': { color: '#c85e7c' },
            'hljs-selector-tag': { color: '#c85e7c' },
            hljs: {
              display: 'block',
              background: '#322931',
              color: '#b9b5b8',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      605: function(e, l, o) {
        e.exports = o(606)
      },
      606: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var r = o(0),
          c = t(r),
          a = o(116),
          s = t(a),
          n = o(117),
          i = t(n),
          h = o(129),
          d = t(h),
          u = o(128),
          f = t(u),
          j = o(4),
          b = t(j),
          g = o(3),
          m = t(g),
          p = o(5),
          y = t(p),
          v = o(95),
          w = t(v),
          k = o(96),
          E = o(104),
          _ = o(8),
          A = o(108),
          x = o(98),
          O = t(x)
        l.default = function() {
          return c.default.createElement(
            b.default,
            null,
            c.default.createElement(y.default, {
              id: 'electron-next',
              hasCover: !0
            }),
            c.default.createElement(
              m.default,
              null,
              'Since the first release of Electron',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://github.com/electron/electron/releases/tag/v0.1.0'
                },
                'in 2013'
              ),
              ' ',
              'we',
              "'",
              've come a very long way: With the high goal of conquering native, the web',
              "'",
              's ambassadors (you and me) developed various useful projects for all kinds of use cases.'
            ),
            c.default.createElement(
              m.default,
              null,
              'Nowadays, many of the daily tasks previously handled by native apps are now done by software that runs on top of Electron: Editing code (',
              c.default.createElement(
                w.default,
                { href: 'https://atom.io' },
                'Atom'
              ),
              '), sending and receiving messages (',
              c.default.createElement(
                w.default,
                { href: 'https://www.whatsapp.com/download' },
                'WhatsApp'
              ),
              ', ',
              c.default.createElement(
                w.default,
                { href: 'https://slack.com/downloads' },
                'Slack'
              ),
              ') or emails (',
              c.default.createElement(
                w.default,
                { href: 'https://www.nylas.com/nylas-mail/' },
                'Nylas Mail'
              ),
              ') and even complex things like running commands (',
              c.default.createElement(
                w.default,
                { href: 'https://hyper.is' },
                'Hyper'
              ),
              '):'
            ),
            c.default.createElement(f.default, {
              id: '812011746638569472',
              className: 'tweet'
            }),
            c.default.createElement(
              m.default,
              null,
              'To sum this up, I don',
              "'",
              't think I have to tell you any more how important it is and how big its impact on our industry is today. And yet, it',
              "'",
              's',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://npm-stat.com/charts.html?package=electron' },
                'still growing'
              ),
              '!'
            ),
            c.default.createElement(
              m.default,
              null,
              'Of course, these achievements weren',
              "'",
              't completely free of charge:'
            ),
            c.default.createElement(
              m.default,
              null,
              'We spent hours convincing our fellow coworkers that a rewrite was worth it. We held conferences and spread the word across the whole globe, so that all of us may have the ability to convert our app ideas into reality.'
            ),
            c.default.createElement(
              m.default,
              null,
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://github.com/electron/electron/graphs/contributors'
                },
                'Some of us'
              ),
              ' ',
              'even contributed our own spare time and spent it reporting issues, fixing bugs and making Electron better!'
            ),
            c.default.createElement(
              m.default,
              null,
              'Sure, all of this has been very difficult. But',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://www.youtube.com/watch?v=oRojY4uZNI8&t=15s' },
                'let',
                "'",
                's not rest'
              ),
              ' ',
              'now!'
            ),
            c.default.createElement(
              m.default,
              null,
              'There',
              "'",
              's still a long road ahead of us: More operating systems and devices are waiting for us. We',
              "'",
              're barely halfway there. So much more to discover!'
            ),
            c.default.createElement(k.H2, null, 'Chapters'),
            c.default.createElement(
              m.default,
              null,
              'If you want, you can jump directly to a specific section. However, if you want to be guided through building an Electron app using Next.js',
              ' ',
              c.default.createElement('b', null, 'from start to finish'),
              ' (recommended), simply skip to the next paragraph.'
            ),
            c.default.createElement(
              E.UL,
              null,
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#the-dream' },
                  'The Dream'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#making-the-dream-come-true' },
                  'Making the Dream Come True'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#installing-the-dependencies' },
                  'Installing the Dependencies'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#testing-the-boilerplate' },
                  'Testing the Boilerplate'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#preparing-the-new-renderer' },
                  'Preparing the New Renderer'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#preparing-the-main-process' },
                  'Preparing the Main Process'
                )
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: '#taking-it-to-production' },
                  'Taking It to Production'
                )
              )
            ),
            c.default.createElement(k.H2, null, 'Highlighted OSS Projects'),
            c.default.createElement(
              m.default,
              null,
              'If you want to jump right into some code, here are a few GitHub repositories (this article talks about many more, but the ones below are the most important):'
            ),
            c.default.createElement(
              E.UL,
              null,
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/leo/electron-next' },
                  'electron-next'
                ),
                ' – Prepares the renderer for the use of Next.js'
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/leo/electron-next-skeleton' },
                  'electron-next-skeleton'
                ),
                ' ',
                '– An example Electron app built with Next.js'
              )
            ),
            c.default.createElement(k.H2, null, 'The Dream'),
            c.default.createElement(
              m.default,
              null,
              'But enough of the 👏 cheering 👏 now. With the above in mind, I',
              "'",
              'd like to introduce you to a new concept of building Electron apps:'
            ),
            c.default.createElement(
              m.default,
              null,
              'So far, we',
              "'",
              've either been using vanilla JavaScript or some sort of custom Webpack/Babel/Gulp setup to handle building the',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://github.com/electron/electron/blob/3decb5eb28ffacc587c5b8fe201483a8b65b4138/docs/tutorial/quick-start.md#renderer-process'
                },
                'renderer process'
              ),
              '.'
            ),
            c.default.createElement(
              m.default,
              null,
              'At ',
              c.default.createElement(
                w.default,
                { href: 'https://zeit.co' },
                'ZEIT'
              ),
              ', we',
              "'",
              've gathered a lot of experience with this topic in the past and discovered a much more efficient and more straightforward way to handle this:',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/zeit/next.js' },
                'Next.js'
              ),
              '!'
            ),
            c.default.createElement(
              m.default,
              null,
              'Yes, I',
              "'",
              'm serious. It',
              "'",
              's not just very good for sites and web apps, but it also makes creating Electron apps easier than ever before. That',
              "'",
              's because it allows us - as app developers - to abstract most of the complex development environment away into a tiny tool belt.'
            ),
            c.default.createElement(
              m.default,
              null,
              'Once implemented,',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/zeit/next.js' },
                'Next.js'
              ),
              ' will take care of:'
            ),
            c.default.createElement(
              E.UL,
              null,
              c.default.createElement(
                E.LI,
                { shallow: !0 },
                'Handling the',
                ' ',
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/zeit/next.js#routing' },
                  'routing'
                ),
                ' and',
                ' ',
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/zeit/next.js#prefetching-pages' },
                  'prefetching'
                ),
                ' ',
                'of pre-defined pages'
              ),
              c.default.createElement(
                E.LI,
                { shallow: !0 },
                'Transpiling, bundling and minifying your code'
              ),
              c.default.createElement(
                E.LI,
                { shallow: !0 },
                c.default.createElement(
                  w.default,
                  {
                    href:
                      'https://github.com/zeit/next.js#automatic-code-splitting'
                  },
                  'Splitting'
                ),
                ' ',
                'your code'
              ),
              c.default.createElement(
                E.LI,
                { shallow: !0 },
                'Live-reloading all ',
                c.default.createElement(_.InlineCode, null, 'BrowserWindow'),
                ' instances that are pointing to Next.js pages'
              ),
              c.default.createElement(
                E.LI,
                { shallow: !0 },
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/zeit/next.js#css' },
                  'Styling'
                ),
                ' ',
                'components and pages using',
                ' ',
                c.default.createElement(
                  w.default,
                  { href: 'https://github.com/zeit/styled-jsx' },
                  'styled-jsx'
                )
              )
            ),
            c.default.createElement(
              m.default,
              null,
              'In order for Next.js bundles to fit perfectly into how we',
              "'",
              're building Electron apps (and to make deploying easier), we also released',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://zeit.co/blog/next3-preview' },
                'a feature'
              ),
              ' that lets you export static files for the use in the production version of your app.'
            ),
            c.default.createElement(
              m.default,
              null,
              'And that',
              "'",
              's ',
              c.default.createElement(
                w.default,
                { href: 'https://zeit.co/blog/next' },
                'not even all'
              ),
              ' ',
              'yet!'
            ),
            c.default.createElement(
              m.default,
              null,
              'So why can',
              "'",
              't we have these wonderful features inside an Electron app without a complicated configuration setup? Well... Starting today, it',
              "'",
              's actually possible! 🎉'
            ),
            c.default.createElement(k.H2, null, 'Making the Dream Come True'),
            c.default.createElement(
              m.default,
              null,
              'As the first step into the light, we',
              "'",
              'll spin up a fresh Electron boilerplate. This will make you understand how to create the perfect renderer process using Next.js, but also how to implement it into your existing application.'
            ),
            c.default.createElement(
              m.default,
              null,
              'Thankfully, there',
              "'",
              's a suitable',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/electron/electron-quick-start' },
                'skeleton app'
              ),
              ' ',
              'which you can easily clone to your device (',
              c.default.createElement(
                w.default,
                { href: 'https://git-scm.com' },
                'Git'
              ),
              ' ',
              'and ',
              c.default.createElement(
                w.default,
                { href: 'https://nodejs.org/en/' },
                'Node.js'
              ),
              ' need to be installed):'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'git clone https://github.com/electron/electron-quick-start'
            ),
            c.default.createElement(
              m.default,
              null,
              'Once it has finished setting up a clone that you can interact with on your local device, move into the directory of the repository:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'cd electron-quick-start'
            ),
            c.default.createElement(k.H3, null, 'Installing the Dependencies'),
            c.default.createElement(
              m.default,
              null,
              'Now that we got the boilerplate, let',
              "'",
              's make sure that the pre-defined dependencies are installed. To do so, you only need to run the following command:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm install'
            ),
            c.default.createElement(
              m.default,
              null,
              'Next, install the remaining dependencies that we',
              "'",
              'll need for the renderer. First, we',
              "'",
              'll start with the',
              ' ',
              c.default.createElement(_.InlineCode, null, 'devDependencies'),
              ': The core package of',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/zeit/next.js' },
                'Next.js'
              ),
              ' (used in development), ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/facebook/react' },
                'react'
              ),
              ' ',
              'and',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://github.com/facebook/react/tree/master/packages/react-dom'
                },
                'react-dom'
              ),
              ' ',
              '(bundled with the production version of your app):'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm install next@beta react react-dom --save-dev'
            ),
            c.default.createElement(
              m.default,
              null,
              'As the last installation step, we need to define',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/leo/electron-next' },
                'electron-next'
              ),
              ', which ensures that Electron can handle Next.js',
              "'",
              ' output in the renderer...'
            ),
            c.default.createElement(f.default, {
              id: '881783902691577856',
              className: 'tweet'
            }),
            c.default.createElement(
              m.default,
              null,
              '...and',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/sindresorhus/electron-is-dev' },
                'electron-is-dev'
              ),
              ', which allows us to change the main process',
              "'",
              ' behaviour depending on the environment the application is running in (you',
              "'",
              'll understand why this is important later in this tutorial).'
            ),
            c.default.createElement(
              m.default,
              null,
              'They will be used both in production and development, so they need to be installed as normal dependencies:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm install electron-next electron-is-dev --save'
            ),
            c.default.createElement(k.H3, null, 'Testing the Boilerplate'),
            c.default.createElement(
              m.default,
              null,
              'Before we go on, I suggest ensuring that you',
              "'",
              've followed the instructions carefully. To do so, you can start the boilerplate application like this:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm start'
            ),
            c.default.createElement(
              m.default,
              null,
              'If you',
              "'",
              've done everything right, a window should open:'
            ),
            c.default.createElement(A.Image, {
              src: '/static/essays/2017/electron-next/without-next.png',
              width: '512'
            }),
            c.default.createElement(
              m.default,
              null,
              'Saw it? Perfect! Now you can go on with the next section and skip the following sentence. If not, please repeat the steps from',
              ' ',
              c.default.createElement(
                w.default,
                { href: '#making-the-dream-come-true' },
                'here'
              ),
              '.'
            ),
            c.default.createElement(k.H3, null, 'Preparing the New Renderer'),
            c.default.createElement(
              m.default,
              null,
              'Looks like we',
              "'",
              're good to go into real detail now. Are you excited? I am, at least! So let',
              "'",
              's not waste any more time and talk about how we can add our Next.js code to our Electron project.'
            ),
            c.default.createElement(
              m.default,
              null,
              'For the module to have something to create a bundle from, we need to create a directory called ',
              '"',
              'renderer',
              '"',
              ' (I suggest calling the directory that contains the main process code ',
              '"',
              'main',
              '"',
              '). Create it and then also move into it:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'mkdir renderer && cd renderer'
            ),
            c.default.createElement(
              m.default,
              null,
              'Inside this directory, you can build your file and folder structure just like you would do in a normal Next.js site. Take',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://github.com/zeit/now-desktop/tree/be0add76aed5e27a19bbed99f0eb5490ef32a8b6/renderer'
                },
                'Now Desktop'
              ),
              ' ',
              'as an example.'
            ),
            c.default.createElement(
              m.default,
              null,
              'For this tutorial however, we',
              "'",
              'll only create the most important things: An entry page and the configuration file that tells Next.js how to behave correctly. Let',
              "'",
              's start with the entry page (a file named',
              ' ',
              c.default.createElement(_.InlineCode, null, 'start.js'),
              ' inside ',
              '"',
              'pages',
              '"',
              '). For now, we',
              "'",
              'll just use basic',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href:
                    'https://facebook.github.io/react/docs/jsx-in-depth.html'
                },
                'JSX'
              ),
              ' ',
              'to print out ',
              '"',
              'Ahoy, Next.js',
              '"',
              ' inside an HTML tag:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              'export default () => (\n  <span>This is Next.js speaking</span>\n)'
            ),
            c.default.createElement(
              m.default,
              null,
              'After you',
              "'",
              're done, create the configuration file named',
              ' ',
              c.default.createElement(_.InlineCode, null, 'next.config.js'),
              '. Inside it, you only need to do handle two things:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "module.exports = {\n  webpack(config) {\n    // Allows you to load Electron modules and\n    // native Node.js ones into your renderer\n    config.target = 'electron-renderer'\n    return config\n  },\n  exportPathMap() {\n    // Let Next.js know where to find the entry page\n    // when it's exporting the static bundle for the use\n    // in the production version of your app\n    return {\n      '/start': { page: '/start' }\n    }\n  }\n}"
            ),
            c.default.createElement(
              m.default,
              null,
              'Now we',
              "'",
              're finished with preparing a basic renderer. In the next section, you',
              "'",
              'll learn what you need to do in order for your application to properly bundle the code we just added (a.k.a. how to make the main process handle it).'
            ),
            c.default.createElement(k.H3, null, 'Preparing the Main Process'),
            c.default.createElement(
              m.default,
              null,
              'In order for the renderer code to be built and reloaded automatically by Next.js, we firstly need to load',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/leo/electron-next' },
                'electron-next'
              ),
              ' ',
              '(which we added as a dependency earlier) and call it inside the existing',
              ' ',
              c.default.createElement(_.InlineCode, null, 'main.js'),
              ' file (contains the main process',
              "'",
              ' ',
              'code).'
            ),
            c.default.createElement(
              m.default,
              null,
              'On the first line of the file, we',
              "'",
              'll import it:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "const prepareNext = require('electron-next')"
            ),
            c.default.createElement(
              m.default,
              null,
              'Then the only thing left is calling it. For this to happen, we need to replace the existing event listener (which creates a window once the app is ready)...'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "app.on('ready', createWindow)"
            ),
            c.default.createElement(
              m.default,
              null,
              '...with one that does the same but also makes the main process handle the new renderer code before creating the window:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "app.on('ready', async () => {\n  await prepareNext('./renderer')\n  createWindow()\n})"
            ),
            c.default.createElement(
              m.default,
              null,
              'Now the only thing left is pointing the existing',
              ' ',
              c.default.createElement(_.InlineCode, null, 'BrowserWindow'),
              ' instance to the right URL depending on the environment the app is running in:'
            ),
            c.default.createElement(
              m.default,
              null,
              'In development, it should show the hot-reloading and automatically re-building instance of Next.js and in production, it needs to serve the static renderer files that were exported in advance (we',
              "'",
              'll talk about the exporting soon).'
            ),
            c.default.createElement(
              m.default,
              null,
              'So please move back to the first line and load',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/sindresorhus/electron-is-dev' },
                'electron-is-dev'
              ),
              ', a dependency we',
              "'",
              've added earlier in',
              ' ',
              c.default.createElement(
                w.default,
                { href: '#installing-the-dependencies' },
                'this section'
              ),
              ':'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "const isDev = require('electron-is-dev')"
            ),
            c.default.createElement(
              m.default,
              null,
              'Next, switch to the line where the window content gets loaded using the',
              ' ',
              c.default.createElement(_.InlineCode, null, '.loadURL'),
              ' method and replace it with this:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'javascript', syntax: i.default },
              "const devPath = 'http://localhost:8000/start'\nconst prodPath = path.resolve('renderer/out/start/index.html')\nconst entry = isDev ? devPath : 'file://' + prodPath\n\nmainWindow.loadURL(entry)"
            ),
            c.default.createElement(
              m.default,
              null,
              'Now, when running ',
              c.default.createElement(_.InlineCode, null, 'npm start'),
              ' to start the application, you should see this:'
            ),
            c.default.createElement(A.Image, {
              src: '/static/essays/2017/electron-next/with-next.png',
              width: '450'
            }),
            c.default.createElement(
              m.default,
              null,
              'As you can see, Electron is now rendering the entry page that was built by Next.js behind the curtains. When making changes to the',
              ' ',
              c.default.createElement(_.InlineCode, null, 'start.js'),
              ' file inside the ',
              '"',
              'pages',
              '"',
              ' ',
              'directory, you',
              "'",
              'll notice that the code is being reloaded automatically.'
            ),
            c.default.createElement(
              m.default,
              null,
              'From here on, you can start building a full-blown new renderer using Next.js inside the ',
              '"',
              'renderer',
              '"',
              ' directory – just like you would do it when building a web app! 😏'
            ),
            c.default.createElement(k.H3, null, 'Taking It to Production'),
            c.default.createElement(
              m.default,
              null,
              'When reading this section, you',
              "'",
              've already learned how to implement Next.js into an Electron application and take advantage of its development workflow. However, you still haven',
              "'",
              't understood how this works in the bundled production version of your application. The next few paragraphs will tell you.'
            ),
            c.default.createElement(
              m.default,
              null,
              'The reason why',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/leo/electron-next' },
                'electron-next'
              ),
              ' ',
              'doesn',
              "'",
              't have the same behaviour in the final app as in development is that opening a port (like Next.js does it for providing hot reloading and auto-building of your code) is generally not a good idea because it introduces a security vulnerability on the user',
              "'",
              's device.'
            ),
            c.default.createElement(
              m.default,
              null,
              'It',
              "'",
              's therefore safe for development, but ',
              c.default.createElement('b', null, 'not for production'),
              '.'
            ),
            c.default.createElement(
              m.default,
              null,
              'What',
              "'",
              's much safer, however, is letting the',
              ' ',
              c.default.createElement(_.InlineCode, null, 'BrowserWindow'),
              ' instances directly access the static files of your renderer. This is made possible by',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://zeit.co/blog/next3-preview#next-export' },
                c.default.createElement(_.InlineCode, null, 'next export')
              ),
              ', a new sub command that we',
              "'",
              've introduced with',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://zeit.co/blog/next3-preview' },
                'Next.js 3'
              ),
              '.'
            ),
            c.default.createElement(
              m.default,
              null,
              'For this example, we',
              "'",
              're going to use',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href: 'https://github.com/electron-userland/electron-builder'
                },
                'electron-builder'
              ),
              ', a widely used solution for packing your application. Please keep in mind that this is not a requirement - you can use any builder of your choice, as long as you configure it to do the same as what I',
              "'",
              'll show you now...'
            ),
            c.default.createElement(
              m.default,
              null,
              'Firstly, install it from',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://www.npmjs.com/package/electron-builder' },
                'npm'
              ),
              ':'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm install electron-builder --save-dev'
            ),
            c.default.createElement(
              m.default,
              null,
              'Then you need to modify the ',
              c.default.createElement(_.InlineCode, null, 'scripts'),
              ' property to include a two new values next to the existing',
              ' ',
              c.default.createElement(_.InlineCode, null, 'start'),
              ' one:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'json', syntax: d.default },
              '"scripts": {\n  "start": "electron .",\n  "build": "next build renderer && next export renderer",\n  "dist": "npm run build && build"\n}'
            ),
            c.default.createElement(
              E.UL,
              null,
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(_.InlineCode, null, 'build'),
                ' will tell Next.js how to build and export your renderer'
              ),
              c.default.createElement(
                E.LI,
                null,
                c.default.createElement(_.InlineCode, null, 'dist'),
                ' makes',
                ' ',
                c.default.createElement(
                  w.default,
                  {
                    href:
                      'https://github.com/electron-userland/electron-builder'
                  },
                  'electron-builder'
                ),
                ' ',
                'run the ',
                c.default.createElement(_.InlineCode, null, 'build'),
                ' script before packing the app'
              )
            ),
            c.default.createElement(
              m.default,
              null,
              'Afterwards, the final touch of any code file in this tutorial will be to add a entirely new property to your ',
              c.default.createElement(_.InlineCode, null, 'package.json'),
              ' ',
              'file: It tells',
              ' ',
              c.default.createElement(
                w.default,
                {
                  href: 'https://github.com/electron-userland/electron-builder'
                },
                'electron-builder'
              ),
              ' ',
              'to only copy the needed renderer files (the ones created by',
              ' ',
              c.default.createElement(_.InlineCode, null, 'next export'),
              ') to the bundle:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'json', syntax: d.default },
              '"build": {\n  "files": [\n    "**/*",\n    "!renderer",\n    "renderer/out"\n  ]\n}'
            ),
            c.default.createElement(
              m.default,
              null,
              'That',
              "'",
              's it! Now you can test your packaged application in production:'
            ),
            c.default.createElement(
              _.Code,
              { language: 'bash', syntax: s.default },
              'npm run dist'
            ),
            c.default.createElement(
              m.default,
              null,
              'Isn',
              "'",
              't that wonderfully magic? ✨'
            ),
            c.default.createElement(
              m.default,
              null,
              'Starting today, you can use Next.js to build wonderful Electron applications that will empower and maybe even entertain your audience - your call!'
            ),
            c.default.createElement(
              m.default,
              null,
              'In order for you to better understand how all of this comes together in the end, I also created',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/leo/electron-next-skeleton' },
                'a boilerplate'
              ),
              ', which sums all of the stuff you',
              "'",
              've just learned up in one repository - feel free to clone it and try it out by yourself!'
            ),
            c.default.createElement(
              m.default,
              null,
              'Also make sure to check out',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/zeit/next.js' },
                'Next.js'
              ),
              ' and',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://github.com/leo/electron-next' },
                'electron-next'
              ),
              '. If there',
              "'",
              's anything missing or something needs that needs to be fixed, feel free to take part!'
            ),
            c.default.createElement(O.default, null),
            c.default.createElement(
              m.default,
              null,
              'Now the only thing left for me to say is:'
            ),
            c.default.createElement(
              m.default,
              null,
              c.default.createElement('b', null, 'Thank you'),
              ' for taking the time to read this article! I',
              "'",
              'm sure that we have the collective power to bring all of the web',
              "'",
              's capabilities to native (...and beyond)! 🚀'
            ),
            c.default.createElement(
              m.default,
              null,
              'Oh. And you can follow me',
              ' ',
              c.default.createElement(
                w.default,
                { href: 'https://twitter.com/notquiteleo' },
                'on Twitter'
              ),
              ' if you want to stay updated about how this technique evolves and when I discover new ways to make it even easier. Enjoy the rest of your day!'
            )
          )
        }
      },
      61: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#1d1f21',
              color: '#c5c8c6'
            },
            'hljs::selection': { background: '#373b41' },
            'hljs span::selection': { background: '#373b41' },
            'hljs::-moz-selection': { background: '#373b41' },
            'hljs span::-moz-selection': { background: '#373b41' },
            'hljs-title': { color: '#f0c674' },
            'hljs-name': { color: '#f0c674' },
            'hljs-comment': { color: '#707880' },
            'hljs-meta': { color: '#707880' },
            'hljs-meta .hljs-keyword': { color: '#707880' },
            'hljs-number': { color: '#cc6666' },
            'hljs-symbol': { color: '#cc6666' },
            'hljs-literal': { color: '#cc6666' },
            'hljs-deletion': { color: '#cc6666' },
            'hljs-link': { color: '#cc6666' },
            'hljs-string': { color: '#b5bd68' },
            'hljs-doctag': { color: '#b5bd68' },
            'hljs-addition': { color: '#b5bd68' },
            'hljs-regexp': { color: '#b5bd68' },
            'hljs-selector-attr': { color: '#b5bd68' },
            'hljs-selector-pseudo': { color: '#b5bd68' },
            'hljs-attribute': { color: '#b294bb' },
            'hljs-code': { color: '#b294bb' },
            'hljs-selector-id': { color: '#b294bb' },
            'hljs-keyword': { color: '#81a2be' },
            'hljs-selector-tag': { color: '#81a2be' },
            'hljs-bullet': { color: '#81a2be' },
            'hljs-tag': { color: '#81a2be' },
            'hljs-subst': { color: '#8abeb7' },
            'hljs-variable': { color: '#8abeb7' },
            'hljs-template-tag': { color: '#8abeb7' },
            'hljs-template-variable': { color: '#8abeb7' },
            'hljs-type': { color: '#de935f' },
            'hljs-built_in': { color: '#de935f' },
            'hljs-builtin-name': { color: '#de935f' },
            'hljs-quote': { color: '#de935f' },
            'hljs-section': { color: '#de935f' },
            'hljs-selector-class': { color: '#de935f' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      62: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#000',
              background: '#fff'
            },
            'hljs-subst': { fontWeight: 'normal', color: '#000' },
            'hljs-title': { fontWeight: 'normal', color: '#000' },
            'hljs-comment': { color: '#808080', fontStyle: 'italic' },
            'hljs-quote': { color: '#808080', fontStyle: 'italic' },
            'hljs-meta': { color: '#808000' },
            'hljs-tag': { background: '#efefef' },
            'hljs-section': { fontWeight: 'bold', color: '#000080' },
            'hljs-name': { fontWeight: 'bold', color: '#000080' },
            'hljs-literal': { fontWeight: 'bold', color: '#000080' },
            'hljs-keyword': { fontWeight: 'bold', color: '#000080' },
            'hljs-selector-tag': { fontWeight: 'bold', color: '#000080' },
            'hljs-type': { fontWeight: 'bold', color: '#000080' },
            'hljs-selector-id': { fontWeight: 'bold', color: '#000080' },
            'hljs-selector-class': { fontWeight: 'bold', color: '#000080' },
            'hljs-attribute': { fontWeight: 'bold', color: '#0000ff' },
            'hljs-number': { fontWeight: 'normal', color: '#0000ff' },
            'hljs-regexp': { fontWeight: 'normal', color: '#0000ff' },
            'hljs-link': { fontWeight: 'normal', color: '#0000ff' },
            'hljs-string': { color: '#008000', fontWeight: 'bold' },
            'hljs-symbol': {
              color: '#000',
              background: '#d0eded',
              fontStyle: 'italic'
            },
            'hljs-bullet': {
              color: '#000',
              background: '#d0eded',
              fontStyle: 'italic'
            },
            'hljs-formula': {
              color: '#000',
              background: '#d0eded',
              fontStyle: 'italic'
            },
            'hljs-doctag': { textDecoration: 'underline' },
            'hljs-variable': { color: '#660e7a' },
            'hljs-template-variable': { color: '#660e7a' },
            'hljs-addition': { background: '#baeeba' },
            'hljs-deletion': { background: '#ffc8bd' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      63: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#000',
              color: '#f8f8f8'
            },
            'hljs-comment': { color: '#7c7c7c' },
            'hljs-quote': { color: '#7c7c7c' },
            'hljs-meta': { color: '#7c7c7c' },
            'hljs-keyword': { color: '#96cbfe' },
            'hljs-selector-tag': { color: '#96cbfe' },
            'hljs-tag': { color: '#96cbfe' },
            'hljs-name': { color: '#96cbfe' },
            'hljs-attribute': { color: '#ffffb6' },
            'hljs-selector-id': { color: '#ffffb6' },
            'hljs-string': { color: '#a8ff60' },
            'hljs-selector-attr': { color: '#a8ff60' },
            'hljs-selector-pseudo': { color: '#a8ff60' },
            'hljs-addition': { color: '#a8ff60' },
            'hljs-subst': { color: '#daefa3' },
            'hljs-regexp': { color: '#e9c062' },
            'hljs-link': { color: '#e9c062' },
            'hljs-title': { color: '#ffffb6' },
            'hljs-section': { color: '#ffffb6' },
            'hljs-type': { color: '#ffffb6' },
            'hljs-doctag': { color: '#ffffb6' },
            'hljs-symbol': { color: '#c6c5fe' },
            'hljs-bullet': { color: '#c6c5fe' },
            'hljs-variable': { color: '#c6c5fe' },
            'hljs-template-variable': { color: '#c6c5fe' },
            'hljs-literal': { color: '#c6c5fe' },
            'hljs-number': { color: '#ff73fd' },
            'hljs-deletion': { color: '#ff73fd' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      64: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#d6baad' },
            'hljs-quote': { color: '#d6baad' },
            'hljs-variable': { color: '#dc3958' },
            'hljs-template-variable': { color: '#dc3958' },
            'hljs-tag': { color: '#dc3958' },
            'hljs-name': { color: '#dc3958' },
            'hljs-selector-id': { color: '#dc3958' },
            'hljs-selector-class': { color: '#dc3958' },
            'hljs-regexp': { color: '#dc3958' },
            'hljs-meta': { color: '#dc3958' },
            'hljs-number': { color: '#f79a32' },
            'hljs-built_in': { color: '#f79a32' },
            'hljs-builtin-name': { color: '#f79a32' },
            'hljs-literal': { color: '#f79a32' },
            'hljs-type': { color: '#f79a32' },
            'hljs-params': { color: '#f79a32' },
            'hljs-deletion': { color: '#f79a32' },
            'hljs-link': { color: '#f79a32' },
            'hljs-title': { color: '#f06431' },
            'hljs-section': { color: '#f06431' },
            'hljs-attribute': { color: '#f06431' },
            'hljs-string': { color: '#889b4a' },
            'hljs-symbol': { color: '#889b4a' },
            'hljs-bullet': { color: '#889b4a' },
            'hljs-addition': { color: '#889b4a' },
            'hljs-keyword': { color: '#98676a' },
            'hljs-selector-tag': { color: '#98676a' },
            'hljs-function': { color: '#98676a' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#221a0f',
              color: '#d3af86',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      65: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#a57a4c' },
            'hljs-quote': { color: '#a57a4c' },
            'hljs-variable': { color: '#dc3958' },
            'hljs-template-variable': { color: '#dc3958' },
            'hljs-tag': { color: '#dc3958' },
            'hljs-name': { color: '#dc3958' },
            'hljs-selector-id': { color: '#dc3958' },
            'hljs-selector-class': { color: '#dc3958' },
            'hljs-regexp': { color: '#dc3958' },
            'hljs-meta': { color: '#dc3958' },
            'hljs-number': { color: '#f79a32' },
            'hljs-built_in': { color: '#f79a32' },
            'hljs-builtin-name': { color: '#f79a32' },
            'hljs-literal': { color: '#f79a32' },
            'hljs-type': { color: '#f79a32' },
            'hljs-params': { color: '#f79a32' },
            'hljs-deletion': { color: '#f79a32' },
            'hljs-link': { color: '#f79a32' },
            'hljs-title': { color: '#f06431' },
            'hljs-section': { color: '#f06431' },
            'hljs-attribute': { color: '#f06431' },
            'hljs-string': { color: '#889b4a' },
            'hljs-symbol': { color: '#889b4a' },
            'hljs-bullet': { color: '#889b4a' },
            'hljs-addition': { color: '#889b4a' },
            'hljs-keyword': { color: '#98676a' },
            'hljs-selector-tag': { color: '#98676a' },
            'hljs-function': { color: '#98676a' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#fbebd4',
              color: '#84613d',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      66: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              backgroundColor: '#f4f4f4',
              color: 'black'
            },
            'hljs-subst': { color: 'black' },
            'hljs-string': { color: '#050' },
            'hljs-title': { color: 'navy', fontWeight: 'bold' },
            'hljs-symbol': { color: '#050' },
            'hljs-bullet': { color: '#050' },
            'hljs-attribute': { color: '#050' },
            'hljs-addition': { color: '#050' },
            'hljs-variable': { color: '#050' },
            'hljs-template-tag': { color: '#050' },
            'hljs-template-variable': { color: '#050' },
            'hljs-comment': { color: '#777' },
            'hljs-quote': { color: '#777' },
            'hljs-number': { color: '#800' },
            'hljs-regexp': { color: '#800' },
            'hljs-literal': { color: '#800' },
            'hljs-type': { color: '#800' },
            'hljs-link': { color: '#800' },
            'hljs-deletion': { color: '#00e' },
            'hljs-meta': { color: '#00e' },
            'hljs-keyword': { fontWeight: 'bold', color: 'navy' },
            'hljs-selector-tag': { fontWeight: 'bold', color: 'navy' },
            'hljs-doctag': { fontWeight: 'bold', color: 'navy' },
            'hljs-section': { fontWeight: 'bold', color: 'navy' },
            'hljs-built_in': { fontWeight: 'bold', color: 'navy' },
            'hljs-tag': { fontWeight: 'bold', color: 'navy' },
            'hljs-name': { fontWeight: 'bold', color: 'navy' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      67: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#eaeef3',
              color: '#00193a'
            },
            'hljs-keyword': { fontWeight: 'bold' },
            'hljs-selector-tag': { fontWeight: 'bold' },
            'hljs-title': { fontWeight: 'bold', color: '#0048ab' },
            'hljs-section': { fontWeight: 'bold', color: '#0048ab' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-name': { fontWeight: 'bold', color: '#0048ab' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-comment': { color: '#738191' },
            'hljs-string': { color: '#0048ab' },
            'hljs-built_in': { color: '#0048ab' },
            'hljs-literal': { color: '#0048ab' },
            'hljs-type': { color: '#0048ab' },
            'hljs-addition': { color: '#0048ab' },
            'hljs-tag': { color: '#0048ab' },
            'hljs-quote': { color: '#0048ab' },
            'hljs-selector-id': { color: '#0048ab' },
            'hljs-selector-class': { color: '#0048ab' },
            'hljs-meta': { color: '#4c81c9' },
            'hljs-subst': { color: '#4c81c9' },
            'hljs-symbol': { color: '#4c81c9' },
            'hljs-regexp': { color: '#4c81c9' },
            'hljs-attribute': { color: '#4c81c9' },
            'hljs-deletion': { color: '#4c81c9' },
            'hljs-variable': { color: '#4c81c9' },
            'hljs-template-variable': { color: '#4c81c9' },
            'hljs-link': { color: '#4c81c9' },
            'hljs-bullet': { color: '#4c81c9' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      68: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#23241f',
              color: '#f8f8f2'
            },
            'hljs-tag': { color: '#f8f8f2' },
            'hljs-subst': { color: '#f8f8f2' },
            'hljs-strong': { color: '#a8a8a2', fontWeight: 'bold' },
            'hljs-emphasis': { color: '#a8a8a2', fontStyle: 'italic' },
            'hljs-bullet': { color: '#ae81ff' },
            'hljs-quote': { color: '#ae81ff' },
            'hljs-number': { color: '#ae81ff' },
            'hljs-regexp': { color: '#ae81ff' },
            'hljs-literal': { color: '#ae81ff' },
            'hljs-link': { color: '#ae81ff' },
            'hljs-code': { color: '#a6e22e' },
            'hljs-title': { color: '#a6e22e' },
            'hljs-section': { color: '#a6e22e' },
            'hljs-selector-class': { color: '#a6e22e' },
            'hljs-keyword': { color: '#f92672' },
            'hljs-selector-tag': { color: '#f92672' },
            'hljs-name': { color: '#f92672' },
            'hljs-attr': { color: '#f92672' },
            'hljs-symbol': { color: '#66d9ef' },
            'hljs-attribute': { color: '#66d9ef' },
            'hljs-params': { color: '#f8f8f2' },
            'hljs-class .hljs-title': { color: '#f8f8f2' },
            'hljs-string': { color: '#e6db74' },
            'hljs-type': { color: '#e6db74' },
            'hljs-built_in': { color: '#e6db74' },
            'hljs-builtin-name': { color: '#e6db74' },
            'hljs-selector-id': { color: '#e6db74' },
            'hljs-selector-attr': { color: '#e6db74' },
            'hljs-selector-pseudo': { color: '#e6db74' },
            'hljs-addition': { color: '#e6db74' },
            'hljs-variable': { color: '#e6db74' },
            'hljs-template-variable': { color: '#e6db74' },
            'hljs-comment': { color: '#75715e' },
            'hljs-deletion': { color: '#75715e' },
            'hljs-meta': { color: '#75715e' }
          })
      },
      69: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#272822',
              color: '#ddd'
            },
            'hljs-tag': { color: '#f92672' },
            'hljs-keyword': { color: '#f92672', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#f92672', fontWeight: 'bold' },
            'hljs-literal': { color: '#f92672', fontWeight: 'bold' },
            'hljs-strong': { color: '#f92672' },
            'hljs-name': { color: '#f92672' },
            'hljs-code': { color: '#66d9ef' },
            'hljs-class .hljs-title': { color: 'white' },
            'hljs-attribute': { color: '#bf79db' },
            'hljs-symbol': { color: '#bf79db' },
            'hljs-regexp': { color: '#bf79db' },
            'hljs-link': { color: '#bf79db' },
            'hljs-string': { color: '#a6e22e' },
            'hljs-bullet': { color: '#a6e22e' },
            'hljs-subst': { color: '#a6e22e' },
            'hljs-title': { color: '#a6e22e', fontWeight: 'bold' },
            'hljs-section': { color: '#a6e22e', fontWeight: 'bold' },
            'hljs-emphasis': { color: '#a6e22e' },
            'hljs-type': { color: '#a6e22e', fontWeight: 'bold' },
            'hljs-built_in': { color: '#a6e22e' },
            'hljs-builtin-name': { color: '#a6e22e' },
            'hljs-selector-attr': { color: '#a6e22e' },
            'hljs-selector-pseudo': { color: '#a6e22e' },
            'hljs-addition': { color: '#a6e22e' },
            'hljs-variable': { color: '#a6e22e' },
            'hljs-template-tag': { color: '#a6e22e' },
            'hljs-template-variable': { color: '#a6e22e' },
            'hljs-comment': { color: '#75715e' },
            'hljs-quote': { color: '#75715e' },
            'hljs-deletion': { color: '#75715e' },
            'hljs-meta': { color: '#75715e' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-selector-id': { fontWeight: 'bold' }
          })
      },
      70: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#282b2e',
              color: '#e0e2e4'
            },
            'hljs-keyword': { color: '#93c763', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#93c763', fontWeight: 'bold' },
            'hljs-literal': { color: '#93c763', fontWeight: 'bold' },
            'hljs-selector-id': { color: '#93c763' },
            'hljs-number': { color: '#ffcd22' },
            'hljs-attribute': { color: '#668bb0' },
            'hljs-code': { color: 'white' },
            'hljs-class .hljs-title': { color: 'white' },
            'hljs-section': { color: 'white', fontWeight: 'bold' },
            'hljs-regexp': { color: '#d39745' },
            'hljs-link': { color: '#d39745' },
            'hljs-meta': { color: '#557182' },
            'hljs-tag': { color: '#8cbbad' },
            'hljs-name': { color: '#8cbbad', fontWeight: 'bold' },
            'hljs-bullet': { color: '#8cbbad' },
            'hljs-subst': { color: '#8cbbad' },
            'hljs-emphasis': { color: '#8cbbad' },
            'hljs-type': { color: '#8cbbad', fontWeight: 'bold' },
            'hljs-built_in': { color: '#8cbbad' },
            'hljs-selector-attr': { color: '#8cbbad' },
            'hljs-selector-pseudo': { color: '#8cbbad' },
            'hljs-addition': { color: '#8cbbad' },
            'hljs-variable': { color: '#8cbbad' },
            'hljs-template-tag': { color: '#8cbbad' },
            'hljs-template-variable': { color: '#8cbbad' },
            'hljs-string': { color: '#ec7600' },
            'hljs-symbol': { color: '#ec7600' },
            'hljs-comment': { color: '#818e96' },
            'hljs-quote': { color: '#818e96' },
            'hljs-deletion': { color: '#818e96' },
            'hljs-selector-class': { color: '#A082BD' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-title': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      71: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#65737e' },
            'hljs-quote': { color: '#65737e' },
            'hljs-variable': { color: '#bf616a' },
            'hljs-template-variable': { color: '#bf616a' },
            'hljs-tag': { color: '#bf616a' },
            'hljs-name': { color: '#bf616a' },
            'hljs-selector-id': { color: '#bf616a' },
            'hljs-selector-class': { color: '#bf616a' },
            'hljs-regexp': { color: '#bf616a' },
            'hljs-deletion': { color: '#bf616a' },
            'hljs-number': { color: '#d08770' },
            'hljs-built_in': { color: '#d08770' },
            'hljs-builtin-name': { color: '#d08770' },
            'hljs-literal': { color: '#d08770' },
            'hljs-type': { color: '#d08770' },
            'hljs-params': { color: '#d08770' },
            'hljs-meta': { color: '#d08770' },
            'hljs-link': { color: '#d08770' },
            'hljs-attribute': { color: '#ebcb8b' },
            'hljs-string': { color: '#a3be8c' },
            'hljs-symbol': { color: '#a3be8c' },
            'hljs-bullet': { color: '#a3be8c' },
            'hljs-addition': { color: '#a3be8c' },
            'hljs-title': { color: '#8fa1b3' },
            'hljs-section': { color: '#8fa1b3' },
            'hljs-keyword': { color: '#b48ead' },
            'hljs-selector-tag': { color: '#b48ead' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#2b303b',
              color: '#c0c5ce',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      72: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#8d8687' },
            'hljs-quote': { color: '#8d8687' },
            'hljs-variable': { color: '#ef6155' },
            'hljs-template-variable': { color: '#ef6155' },
            'hljs-tag': { color: '#ef6155' },
            'hljs-name': { color: '#ef6155' },
            'hljs-selector-id': { color: '#ef6155' },
            'hljs-selector-class': { color: '#ef6155' },
            'hljs-regexp': { color: '#ef6155' },
            'hljs-link': { color: '#ef6155' },
            'hljs-meta': { color: '#ef6155' },
            'hljs-number': { color: '#f99b15' },
            'hljs-built_in': { color: '#f99b15' },
            'hljs-builtin-name': { color: '#f99b15' },
            'hljs-literal': { color: '#f99b15' },
            'hljs-type': { color: '#f99b15' },
            'hljs-params': { color: '#f99b15' },
            'hljs-deletion': { color: '#f99b15' },
            'hljs-title': { color: '#fec418' },
            'hljs-section': { color: '#fec418' },
            'hljs-attribute': { color: '#fec418' },
            'hljs-string': { color: '#48b685' },
            'hljs-symbol': { color: '#48b685' },
            'hljs-bullet': { color: '#48b685' },
            'hljs-addition': { color: '#48b685' },
            'hljs-keyword': { color: '#815ba4' },
            'hljs-selector-tag': { color: '#815ba4' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#2f1e2e',
              color: '#a39e9b',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      73: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#776e71' },
            'hljs-quote': { color: '#776e71' },
            'hljs-variable': { color: '#ef6155' },
            'hljs-template-variable': { color: '#ef6155' },
            'hljs-tag': { color: '#ef6155' },
            'hljs-name': { color: '#ef6155' },
            'hljs-selector-id': { color: '#ef6155' },
            'hljs-selector-class': { color: '#ef6155' },
            'hljs-regexp': { color: '#ef6155' },
            'hljs-link': { color: '#ef6155' },
            'hljs-meta': { color: '#ef6155' },
            'hljs-number': { color: '#f99b15' },
            'hljs-built_in': { color: '#f99b15' },
            'hljs-builtin-name': { color: '#f99b15' },
            'hljs-literal': { color: '#f99b15' },
            'hljs-type': { color: '#f99b15' },
            'hljs-params': { color: '#f99b15' },
            'hljs-deletion': { color: '#f99b15' },
            'hljs-title': { color: '#fec418' },
            'hljs-section': { color: '#fec418' },
            'hljs-attribute': { color: '#fec418' },
            'hljs-string': { color: '#48b685' },
            'hljs-symbol': { color: '#48b685' },
            'hljs-bullet': { color: '#48b685' },
            'hljs-addition': { color: '#48b685' },
            'hljs-keyword': { color: '#815ba4' },
            'hljs-selector-tag': { color: '#815ba4' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#e7e9db',
              color: '#4f424c',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      74: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              color: '#dccf8f',
              background: 'url(./pojoaque.jpg) repeat scroll left top #181914'
            },
            'hljs-comment': { color: '#586e75', fontStyle: 'italic' },
            'hljs-quote': { color: '#586e75', fontStyle: 'italic' },
            'hljs-keyword': { color: '#b64926' },
            'hljs-selector-tag': { color: '#b64926' },
            'hljs-literal': { color: '#b64926' },
            'hljs-addition': { color: '#b64926' },
            'hljs-number': { color: '#468966' },
            'hljs-string': { color: '#468966' },
            'hljs-doctag': { color: '#468966' },
            'hljs-regexp': { color: '#468966' },
            'hljs-title': { color: '#ffb03b' },
            'hljs-section': { color: '#ffb03b' },
            'hljs-built_in': { color: '#ffb03b' },
            'hljs-name': { color: '#ffb03b' },
            'hljs-variable': { color: '#b58900' },
            'hljs-template-variable': { color: '#b58900' },
            'hljs-class .hljs-title': { color: '#b58900' },
            'hljs-type': { color: '#b58900' },
            'hljs-tag': { color: '#b58900' },
            'hljs-attribute': { color: '#b89859' },
            'hljs-symbol': { color: '#cb4b16' },
            'hljs-bullet': { color: '#cb4b16' },
            'hljs-link': { color: '#cb4b16' },
            'hljs-subst': { color: '#cb4b16' },
            'hljs-meta': { color: '#cb4b16' },
            'hljs-deletion': { color: '#dc322f' },
            'hljs-selector-id': { color: '#d3a60c' },
            'hljs-selector-class': { color: '#d3a60c' },
            'hljs-formula': { background: '#073642' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      75: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#FFFFDF',
              color: '#000000'
            },
            'hljs-type': { color: '#000000' },
            'hljs-function': { color: '#000000' },
            'hljs-name': { color: '#000000', fontWeight: 'bold' },
            'hljs-number': { color: '#000000' },
            'hljs-attr': { color: '#000000' },
            'hljs-params': { color: '#000000' },
            'hljs-subst': { color: '#000000' },
            'hljs-comment': { color: '#00AAAA' },
            'hljs-regexp': { color: '#00AAAA' },
            'hljs-section': { color: '#00AAAA' },
            'hljs-selector-pseudo': { color: '#00AAAA' },
            'hljs-addition': { color: '#00AAAA' },
            'hljs-title': { color: '#006666' },
            'hljs-tag': { color: '#006666' },
            'hljs-variable': { color: '#006666' },
            'hljs-code': { color: '#006666' },
            'hljs-keyword': { color: '#006666', fontWeight: 'bold' },
            'hljs-class': { color: '#006666', fontWeight: 'bold' },
            'hljs-meta-keyword': { color: '#006666', fontWeight: 'bold' },
            'hljs-selector-class': { color: '#006666', fontWeight: 'bold' },
            'hljs-built_in': { color: '#006666', fontWeight: 'bold' },
            'hljs-builtin-name': { color: '#006666', fontWeight: 'bold' },
            'hljs-string': { color: '#0080FF' },
            'hljs-selector-attr': { color: '#0080FF' },
            'hljs-symbol': { color: '#924B72' },
            'hljs-link': { color: '#924B72' },
            'hljs-deletion': { color: '#924B72' },
            'hljs-attribute': { color: '#924B72' },
            'hljs-meta': { color: '#924B72', fontWeight: 'bold' },
            'hljs-literal': { color: '#924B72', fontWeight: 'bold' },
            'hljs-selector-id': { color: '#924B72', fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      76: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#000000',
              color: '#aaaaaa'
            },
            'hljs-subst': { color: '#aaaaaa' },
            'hljs-tag': { color: '#aaaaaa' },
            'hljs-title': { color: '#aaaaaa' },
            'hljs-strong': { color: '#a8a8a2' },
            'hljs-emphasis': { color: '#a8a8a2', fontStyle: 'italic' },
            'hljs-bullet': { color: '#ff55ff' },
            'hljs-quote': { color: '#ff55ff' },
            'hljs-number': { color: '#ff55ff' },
            'hljs-regexp': { color: '#ff55ff' },
            'hljs-literal': { color: '#ff55ff' },
            'hljs-code\n.hljs-selector-class': { color: '#aaaaff' },
            'hljs-stronge': { fontStyle: 'italic' },
            'hljs-type': { fontStyle: 'italic', color: '#ff55ff' },
            'hljs-keyword': { color: '#ffff55' },
            'hljs-selector-tag': { color: '#ffff55' },
            'hljs-function': { color: '#ffff55' },
            'hljs-section': { color: '#ffff55' },
            'hljs-symbol': { color: '#ffff55' },
            'hljs-name': { color: '#ffff55' },
            'hljs-attribute': { color: '#ff5555' },
            'hljs-variable': { color: '#8888ff' },
            'hljs-params': { color: '#8888ff' },
            'hljs-class .hljs-title': { color: '#8888ff' },
            'hljs-string': { color: '#ff55ff' },
            'hljs-selector-id': { color: '#ff55ff' },
            'hljs-selector-attr': { color: '#ff55ff' },
            'hljs-selector-pseudo': { color: '#ff55ff' },
            'hljs-built_in': { color: '#ff55ff' },
            'hljs-builtin-name': { color: '#ff55ff' },
            'hljs-template-tag': { color: '#ff55ff' },
            'hljs-template-variable': { color: '#ff55ff' },
            'hljs-addition': { color: '#ff55ff' },
            'hljs-link': { color: '#ff55ff' },
            'hljs-comment': { color: '#55ffff' },
            'hljs-meta': { color: '#55ffff' },
            'hljs-deletion': { color: '#55ffff' }
          })
      },
      77: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#ffffff',
              color: '#000000'
            },
            'hljs-subst': { color: '#000000' },
            'hljs-tag': { color: '#000000' },
            'hljs-title': { color: '#000000' },
            'hljs-strong': { color: '#000000' },
            'hljs-emphasis': { color: '#000000', fontStyle: 'italic' },
            'hljs-bullet': { color: '#000080' },
            'hljs-quote': { color: '#000080' },
            'hljs-number': { color: '#000080' },
            'hljs-regexp': { color: '#000080' },
            'hljs-literal': { color: '#000080' },
            'hljs-code\n.hljs-selector-class': { color: '#800080' },
            'hljs-stronge': { fontStyle: 'italic' },
            'hljs-type': { fontStyle: 'italic', color: '#008000' },
            'hljs-keyword': { color: '#808000' },
            'hljs-selector-tag': { color: '#808000' },
            'hljs-function': { color: '#808000' },
            'hljs-section': { color: '#808000' },
            'hljs-symbol': { color: '#808000' },
            'hljs-name': { color: '#808000' },
            'hljs-attribute': { color: '#800000' },
            'hljs-variable': { color: '#0055AF' },
            'hljs-params': { color: '#0055AF' },
            'hljs-class .hljs-title': { color: '#0055AF' },
            'hljs-string': { color: '#008000' },
            'hljs-selector-id': { color: '#008000' },
            'hljs-selector-attr': { color: '#008000' },
            'hljs-selector-pseudo': { color: '#008000' },
            'hljs-built_in': { color: '#008000' },
            'hljs-builtin-name': { color: '#008000' },
            'hljs-template-tag': { color: '#008000' },
            'hljs-template-variable': { color: '#008000' },
            'hljs-addition': { color: '#008000' },
            'hljs-link': { color: '#008000' },
            'hljs-comment': { color: '#008000' },
            'hljs-meta': { color: '#008000' },
            'hljs-deletion': { color: '#008000' }
          })
      },
      78: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#232323',
              color: '#e6e1dc'
            },
            'hljs-comment': { color: '#bc9458', fontStyle: 'italic' },
            'hljs-quote': { color: '#bc9458', fontStyle: 'italic' },
            'hljs-keyword': { color: '#c26230' },
            'hljs-selector-tag': { color: '#c26230' },
            'hljs-string': { color: '#a5c261' },
            'hljs-number': { color: '#a5c261' },
            'hljs-regexp': { color: '#a5c261' },
            'hljs-variable': { color: '#a5c261' },
            'hljs-template-variable': { color: '#a5c261' },
            'hljs-subst': { color: '#519f50' },
            'hljs-tag': { color: '#e8bf6a' },
            'hljs-name': { color: '#e8bf6a' },
            'hljs-type': { color: '#da4939' },
            'hljs-symbol': { color: '#6d9cbe' },
            'hljs-bullet': { color: '#6d9cbe' },
            'hljs-built_in': { color: '#6d9cbe' },
            'hljs-builtin-name': { color: '#6d9cbe' },
            'hljs-attr': { color: '#6d9cbe' },
            'hljs-link': { color: '#6d9cbe', textDecoration: 'underline' },
            'hljs-params': { color: '#d0d0ff' },
            'hljs-attribute': { color: '#cda869' },
            'hljs-meta': { color: '#9b859d' },
            'hljs-title': { color: '#ffc66d' },
            'hljs-section': { color: '#ffc66d' },
            'hljs-addition': {
              backgroundColor: '#144212',
              color: '#e6e1dc',
              display: 'inline-block',
              width: '100%'
            },
            'hljs-deletion': {
              backgroundColor: '#600',
              color: '#e6e1dc',
              display: 'inline-block',
              width: '100%'
            },
            'hljs-selector-class': { color: '#9b703f' },
            'hljs-selector-id': { color: '#8b98ab' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      79: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#474949',
              color: '#d1d9e1'
            },
            'hljs-comment': { color: '#969896', fontStyle: 'italic' },
            'hljs-quote': { color: '#969896', fontStyle: 'italic' },
            'hljs-keyword': { color: '#cc99cc' },
            'hljs-selector-tag': { color: '#cc99cc' },
            'hljs-literal': { color: '#cc99cc' },
            'hljs-type': { color: '#cc99cc' },
            'hljs-addition': { color: '#cc99cc' },
            'hljs-number': { color: '#f99157' },
            'hljs-selector-attr': { color: '#f99157' },
            'hljs-selector-pseudo': { color: '#f99157' },
            'hljs-string': { color: '#8abeb7' },
            'hljs-doctag': { color: '#8abeb7' },
            'hljs-regexp': { color: '#8abeb7' },
            'hljs-title': { color: '#b5bd68' },
            'hljs-name': { color: '#b5bd68', fontWeight: 'bold' },
            'hljs-section': { color: '#b5bd68', fontWeight: 'bold' },
            'hljs-built_in': { color: '#b5bd68' },
            'hljs-variable': { color: '#ffcc66' },
            'hljs-template-variable': { color: '#ffcc66' },
            'hljs-selector-id': { color: '#ffcc66' },
            'hljs-class .hljs-title': { color: '#ffcc66' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-symbol': { color: '#f99157' },
            'hljs-bullet': { color: '#f99157' },
            'hljs-subst': { color: '#f99157' },
            'hljs-meta': { color: '#f99157' },
            'hljs-link': { color: '#f99157' },
            'hljs-deletion': { color: '#dc322f' },
            'hljs-formula': { background: '#eee8d5' },
            'hljs-attr': { color: '#81a2be' },
            'hljs-attribute': { color: '#81a2be' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      8: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.InlineCode = l.Code = void 0)
        var r = o(101),
          c = t(r),
          a = o(99),
          s = t(a),
          n = o(100),
          i = t(n),
          h = o(102),
          d = t(h),
          u = o(103),
          f = t(u),
          j = o(1),
          b = t(j),
          g = o(0),
          m = t(g),
          p = o(9),
          y = t(p),
          v = o(15),
          w = {
            margin: '30px 0',
            padding: '14px',
            borderRadius: '4px',
            width: '100%',
            boxSizing: 'border-box',
            wordWrap: 'normal',
            fontSize: '0.9em',
            lineHeight: '1.5em',
            WebkitOverflowScrolling: 'touch',
            fontFamily:
              'Menlo, Monaco, Lucida Console, Liberation Mono, Courier New, monospace, serif'
          },
          k = (function(e) {
            function l(e) {
              ;(0, s.default)(this, l)
              var o = (0, d.default)(
                this,
                (l.__proto__ || (0, c.default)(l)).call(this, e)
              )
              if (!e.language || !e.syntax)
                throw new Error('Please define the `language` and `syntax`')
              return (0, p.registerLanguage)(e.language, e.syntax), o
            }
            return (
              (0, f.default)(l, e),
              (0, i.default)(l, [
                {
                  key: 'render',
                  value: function() {
                    return m.default.createElement(
                      y.default,
                      {
                        language: this.props.language,
                        style: v.github,
                        customStyle: w
                      },
                      this.props.children
                    )
                  }
                }
              ]),
              l
            )
          })(g.Component),
          E = function(e) {
            var l = e.children
            return m.default.createElement(
              'code',
              { className: 'jsx-1132460883' },
              l,
              m.default.createElement(b.default, {
                styleId: '1132460883',
                css: [
                  'code.jsx-1132460883{background:#f3f3f3;padding:2px 4px;border-radius:3px;font-size:0.85em;color:#3a3a3a;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, Courier New,monospace,serif;}'
                ]
              })
            )
          }
        ;(l.Code = k), (l.InlineCode = E)
      },
      80: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#F0F0F0',
              color: '#444'
            },
            'hljs-subst': { color: '#444' },
            'hljs-comment': { color: '#888888' },
            'hljs-keyword': { fontWeight: 'bold' },
            'hljs-selector-tag': { fontWeight: 'bold' },
            'hljs-meta-keyword': { fontWeight: 'bold' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-name': { fontWeight: 'bold' },
            'hljs-attribute': { color: '#0E9A00' },
            'hljs-function': { color: '#99069A' },
            'hljs-builtin-name': { color: '#99069A' },
            'hljs-type': { color: '#880000' },
            'hljs-string': { color: '#880000' },
            'hljs-number': { color: '#880000' },
            'hljs-selector-id': { color: '#880000' },
            'hljs-selector-class': { color: '#880000' },
            'hljs-quote': { color: '#880000' },
            'hljs-template-tag': { color: '#880000' },
            'hljs-deletion': { color: '#880000' },
            'hljs-title': { color: '#880000', fontWeight: 'bold' },
            'hljs-section': { color: '#880000', fontWeight: 'bold' },
            'hljs-regexp': { color: '#BC6060' },
            'hljs-symbol': { color: '#BC6060' },
            'hljs-variable': { color: '#BC6060' },
            'hljs-template-variable': { color: '#BC6060' },
            'hljs-link': { color: '#BC6060' },
            'hljs-selector-attr': { color: '#BC6060' },
            'hljs-selector-pseudo': { color: '#BC6060' },
            'hljs-literal': { color: '#78A960' },
            'hljs-built_in': { color: '#0C9A9A' },
            'hljs-bullet': { color: '#0C9A9A' },
            'hljs-code': { color: '#0C9A9A' },
            'hljs-addition': { color: '#0C9A9A' },
            'hljs-meta': { color: '#1f7199' },
            'hljs-meta-string': { color: '#4d99bf' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      81: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '15px 0.5em 0.5em 30px',
              fontSize: '11px',
              lineHeight: '16px',
              color: '#3e5915'
            },
            re: {
              background: '#f6f6ae url(./school-book.png)',
              borderTop: 'solid 2px #d2e8b9',
              borderBottom: 'solid 1px #d2e8b9'
            },
            'hljs-keyword': { color: '#005599', fontWeight: 'bold' },
            'hljs-selector-tag': { color: '#005599', fontWeight: 'bold' },
            'hljs-literal': { color: '#005599', fontWeight: 'bold' },
            'hljs-subst': { color: '#3e5915' },
            'hljs-string': { color: '#2c009f' },
            'hljs-title': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-section': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-type': { color: '#2c009f', fontWeight: 'bold' },
            'hljs-symbol': { color: '#2c009f' },
            'hljs-bullet': { color: '#2c009f' },
            'hljs-attribute': { color: '#2c009f' },
            'hljs-built_in': { color: '#2c009f' },
            'hljs-builtin-name': { color: '#2c009f' },
            'hljs-addition': { color: '#2c009f' },
            'hljs-variable': { color: '#2c009f' },
            'hljs-template-tag': { color: '#2c009f' },
            'hljs-template-variable': { color: '#2c009f' },
            'hljs-link': { color: '#2c009f' },
            'hljs-comment': { color: '#e60415' },
            'hljs-quote': { color: '#e60415' },
            'hljs-deletion': { color: '#e60415' },
            'hljs-meta': { color: '#e60415' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-name': { fontWeight: 'bold' },
            'hljs-selector-id': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      82: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#002b36',
              color: '#839496'
            },
            'hljs-comment': { color: '#586e75' },
            'hljs-quote': { color: '#586e75' },
            'hljs-keyword': { color: '#859900' },
            'hljs-selector-tag': { color: '#859900' },
            'hljs-addition': { color: '#859900' },
            'hljs-number': { color: '#2aa198' },
            'hljs-string': { color: '#2aa198' },
            'hljs-meta .hljs-meta-string': { color: '#2aa198' },
            'hljs-literal': { color: '#2aa198' },
            'hljs-doctag': { color: '#2aa198' },
            'hljs-regexp': { color: '#2aa198' },
            'hljs-title': { color: '#268bd2' },
            'hljs-section': { color: '#268bd2' },
            'hljs-name': { color: '#268bd2' },
            'hljs-selector-id': { color: '#268bd2' },
            'hljs-selector-class': { color: '#268bd2' },
            'hljs-attribute': { color: '#b58900' },
            'hljs-attr': { color: '#b58900' },
            'hljs-variable': { color: '#b58900' },
            'hljs-template-variable': { color: '#b58900' },
            'hljs-class .hljs-title': { color: '#b58900' },
            'hljs-type': { color: '#b58900' },
            'hljs-symbol': { color: '#cb4b16' },
            'hljs-bullet': { color: '#cb4b16' },
            'hljs-subst': { color: '#cb4b16' },
            'hljs-meta': { color: '#cb4b16' },
            'hljs-meta .hljs-keyword': { color: '#cb4b16' },
            'hljs-selector-attr': { color: '#cb4b16' },
            'hljs-selector-pseudo': { color: '#cb4b16' },
            'hljs-link': { color: '#cb4b16' },
            'hljs-built_in': { color: '#dc322f' },
            'hljs-deletion': { color: '#dc322f' },
            'hljs-formula': { background: '#073642' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      83: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#fdf6e3',
              color: '#657b83'
            },
            'hljs-comment': { color: '#93a1a1' },
            'hljs-quote': { color: '#93a1a1' },
            'hljs-keyword': { color: '#859900' },
            'hljs-selector-tag': { color: '#859900' },
            'hljs-addition': { color: '#859900' },
            'hljs-number': { color: '#2aa198' },
            'hljs-string': { color: '#2aa198' },
            'hljs-meta .hljs-meta-string': { color: '#2aa198' },
            'hljs-literal': { color: '#2aa198' },
            'hljs-doctag': { color: '#2aa198' },
            'hljs-regexp': { color: '#2aa198' },
            'hljs-title': { color: '#268bd2' },
            'hljs-section': { color: '#268bd2' },
            'hljs-name': { color: '#268bd2' },
            'hljs-selector-id': { color: '#268bd2' },
            'hljs-selector-class': { color: '#268bd2' },
            'hljs-attribute': { color: '#b58900' },
            'hljs-attr': { color: '#b58900' },
            'hljs-variable': { color: '#b58900' },
            'hljs-template-variable': { color: '#b58900' },
            'hljs-class .hljs-title': { color: '#b58900' },
            'hljs-type': { color: '#b58900' },
            'hljs-symbol': { color: '#cb4b16' },
            'hljs-bullet': { color: '#cb4b16' },
            'hljs-subst': { color: '#cb4b16' },
            'hljs-meta': { color: '#cb4b16' },
            'hljs-meta .hljs-keyword': { color: '#cb4b16' },
            'hljs-selector-attr': { color: '#cb4b16' },
            'hljs-selector-pseudo': { color: '#cb4b16' },
            'hljs-link': { color: '#cb4b16' },
            'hljs-built_in': { color: '#dc322f' },
            'hljs-deletion': { color: '#dc322f' },
            'hljs-formula': { background: '#eee8d5' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      84: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#000',
              color: '#f8f8f8'
            },
            'hljs-comment': { color: '#aeaeae', fontStyle: 'italic' },
            'hljs-quote': { color: '#aeaeae', fontStyle: 'italic' },
            'hljs-keyword': { color: '#e28964' },
            'hljs-selector-tag': { color: '#e28964' },
            'hljs-type': { color: '#e28964' },
            'hljs-string': { color: '#65b042' },
            'hljs-subst': { color: '#daefa3' },
            'hljs-regexp': { color: '#e9c062' },
            'hljs-link': { color: '#e9c062' },
            'hljs-title': { color: '#89bdff' },
            'hljs-section': { color: '#89bdff' },
            'hljs-tag': { color: '#89bdff' },
            'hljs-name': { color: '#89bdff' },
            'hljs-class .hljs-title': { textDecoration: 'underline' },
            'hljs-doctag': { textDecoration: 'underline' },
            'hljs-symbol': { color: '#3387cc' },
            'hljs-bullet': { color: '#3387cc' },
            'hljs-number': { color: '#3387cc' },
            'hljs-params': { color: '#3e87e3' },
            'hljs-variable': { color: '#3e87e3' },
            'hljs-template-variable': { color: '#3e87e3' },
            'hljs-attribute': { color: '#cda869' },
            'hljs-meta': { color: '#8996a8' },
            'hljs-formula': {
              backgroundColor: '#0e2231',
              color: '#f8f8f8',
              fontStyle: 'italic'
            },
            'hljs-addition': { backgroundColor: '#253b22', color: '#f8f8f8' },
            'hljs-deletion': { backgroundColor: '#420e09', color: '#f8f8f8' },
            'hljs-selector-class': { color: '#9b703f' },
            'hljs-selector-id': { color: '#8b98ab' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      85: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#7285b7' },
            'hljs-quote': { color: '#7285b7' },
            'hljs-variable': { color: '#ff9da4' },
            'hljs-template-variable': { color: '#ff9da4' },
            'hljs-tag': { color: '#ff9da4' },
            'hljs-name': { color: '#ff9da4' },
            'hljs-selector-id': { color: '#ff9da4' },
            'hljs-selector-class': { color: '#ff9da4' },
            'hljs-regexp': { color: '#ff9da4' },
            'hljs-deletion': { color: '#ff9da4' },
            'hljs-number': { color: '#ffc58f' },
            'hljs-built_in': { color: '#ffc58f' },
            'hljs-builtin-name': { color: '#ffc58f' },
            'hljs-literal': { color: '#ffc58f' },
            'hljs-type': { color: '#ffc58f' },
            'hljs-params': { color: '#ffc58f' },
            'hljs-meta': { color: '#ffc58f' },
            'hljs-link': { color: '#ffc58f' },
            'hljs-attribute': { color: '#ffeead' },
            'hljs-string': { color: '#d1f1a9' },
            'hljs-symbol': { color: '#d1f1a9' },
            'hljs-bullet': { color: '#d1f1a9' },
            'hljs-addition': { color: '#d1f1a9' },
            'hljs-title': { color: '#bbdaff' },
            'hljs-section': { color: '#bbdaff' },
            'hljs-keyword': { color: '#ebbbff' },
            'hljs-selector-tag': { color: '#ebbbff' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#002451',
              color: 'white',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      86: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#969896' },
            'hljs-quote': { color: '#969896' },
            'hljs-variable': { color: '#d54e53' },
            'hljs-template-variable': { color: '#d54e53' },
            'hljs-tag': { color: '#d54e53' },
            'hljs-name': { color: '#d54e53' },
            'hljs-selector-id': { color: '#d54e53' },
            'hljs-selector-class': { color: '#d54e53' },
            'hljs-regexp': { color: '#d54e53' },
            'hljs-deletion': { color: '#d54e53' },
            'hljs-number': { color: '#e78c45' },
            'hljs-built_in': { color: '#e78c45' },
            'hljs-builtin-name': { color: '#e78c45' },
            'hljs-literal': { color: '#e78c45' },
            'hljs-type': { color: '#e78c45' },
            'hljs-params': { color: '#e78c45' },
            'hljs-meta': { color: '#e78c45' },
            'hljs-link': { color: '#e78c45' },
            'hljs-attribute': { color: '#e7c547' },
            'hljs-string': { color: '#b9ca4a' },
            'hljs-symbol': { color: '#b9ca4a' },
            'hljs-bullet': { color: '#b9ca4a' },
            'hljs-addition': { color: '#b9ca4a' },
            'hljs-title': { color: '#7aa6da' },
            'hljs-section': { color: '#7aa6da' },
            'hljs-keyword': { color: '#c397d8' },
            'hljs-selector-tag': { color: '#c397d8' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: 'black',
              color: '#eaeaea',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      87: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#999999' },
            'hljs-quote': { color: '#999999' },
            'hljs-variable': { color: '#f2777a' },
            'hljs-template-variable': { color: '#f2777a' },
            'hljs-tag': { color: '#f2777a' },
            'hljs-name': { color: '#f2777a' },
            'hljs-selector-id': { color: '#f2777a' },
            'hljs-selector-class': { color: '#f2777a' },
            'hljs-regexp': { color: '#f2777a' },
            'hljs-deletion': { color: '#f2777a' },
            'hljs-number': { color: '#f99157' },
            'hljs-built_in': { color: '#f99157' },
            'hljs-builtin-name': { color: '#f99157' },
            'hljs-literal': { color: '#f99157' },
            'hljs-type': { color: '#f99157' },
            'hljs-params': { color: '#f99157' },
            'hljs-meta': { color: '#f99157' },
            'hljs-link': { color: '#f99157' },
            'hljs-attribute': { color: '#ffcc66' },
            'hljs-string': { color: '#99cc99' },
            'hljs-symbol': { color: '#99cc99' },
            'hljs-bullet': { color: '#99cc99' },
            'hljs-addition': { color: '#99cc99' },
            'hljs-title': { color: '#6699cc' },
            'hljs-section': { color: '#6699cc' },
            'hljs-keyword': { color: '#cc99cc' },
            'hljs-selector-tag': { color: '#cc99cc' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#2d2d2d',
              color: '#cccccc',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      88: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#969896' },
            'hljs-quote': { color: '#969896' },
            'hljs-variable': { color: '#cc6666' },
            'hljs-template-variable': { color: '#cc6666' },
            'hljs-tag': { color: '#cc6666' },
            'hljs-name': { color: '#cc6666' },
            'hljs-selector-id': { color: '#cc6666' },
            'hljs-selector-class': { color: '#cc6666' },
            'hljs-regexp': { color: '#cc6666' },
            'hljs-deletion': { color: '#cc6666' },
            'hljs-number': { color: '#de935f' },
            'hljs-built_in': { color: '#de935f' },
            'hljs-builtin-name': { color: '#de935f' },
            'hljs-literal': { color: '#de935f' },
            'hljs-type': { color: '#de935f' },
            'hljs-params': { color: '#de935f' },
            'hljs-meta': { color: '#de935f' },
            'hljs-link': { color: '#de935f' },
            'hljs-attribute': { color: '#f0c674' },
            'hljs-string': { color: '#b5bd68' },
            'hljs-symbol': { color: '#b5bd68' },
            'hljs-bullet': { color: '#b5bd68' },
            'hljs-addition': { color: '#b5bd68' },
            'hljs-title': { color: '#81a2be' },
            'hljs-section': { color: '#81a2be' },
            'hljs-keyword': { color: '#b294bb' },
            'hljs-selector-tag': { color: '#b294bb' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: '#1d1f21',
              color: '#c5c8c6',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      89: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            'hljs-comment': { color: '#8e908c' },
            'hljs-quote': { color: '#8e908c' },
            'hljs-variable': { color: '#c82829' },
            'hljs-template-variable': { color: '#c82829' },
            'hljs-tag': { color: '#c82829' },
            'hljs-name': { color: '#c82829' },
            'hljs-selector-id': { color: '#c82829' },
            'hljs-selector-class': { color: '#c82829' },
            'hljs-regexp': { color: '#c82829' },
            'hljs-deletion': { color: '#c82829' },
            'hljs-number': { color: '#f5871f' },
            'hljs-built_in': { color: '#f5871f' },
            'hljs-builtin-name': { color: '#f5871f' },
            'hljs-literal': { color: '#f5871f' },
            'hljs-type': { color: '#f5871f' },
            'hljs-params': { color: '#f5871f' },
            'hljs-meta': { color: '#f5871f' },
            'hljs-link': { color: '#f5871f' },
            'hljs-attribute': { color: '#eab700' },
            'hljs-string': { color: '#718c00' },
            'hljs-symbol': { color: '#718c00' },
            'hljs-bullet': { color: '#718c00' },
            'hljs-addition': { color: '#718c00' },
            'hljs-title': { color: '#4271ae' },
            'hljs-section': { color: '#4271ae' },
            'hljs-keyword': { color: '#8959a8' },
            'hljs-selector-tag': { color: '#8959a8' },
            hljs: {
              display: 'block',
              overflowX: 'auto',
              background: 'white',
              color: '#4d4d4c',
              padding: '0.5em'
            },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      9: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.registerLanguage = void 0)
        var r = o(10),
          c = t(r),
          a = o(13),
          s = t(a)
        l.registerLanguage = s.default.registerLanguage
        l.default = (0, c.default)(s.default, {})
      },
      90: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: 'white',
              color: 'black'
            },
            'hljs-comment': { color: '#008000' },
            'hljs-quote': { color: '#008000' },
            'hljs-variable': { color: '#008000' },
            'hljs-keyword': { color: '#00f' },
            'hljs-selector-tag': { color: '#00f' },
            'hljs-built_in': { color: '#00f' },
            'hljs-name': { color: '#00f' },
            'hljs-tag': { color: '#00f' },
            'hljs-string': { color: '#a31515' },
            'hljs-title': { color: '#a31515' },
            'hljs-section': { color: '#a31515' },
            'hljs-attribute': { color: '#a31515' },
            'hljs-literal': { color: '#a31515' },
            'hljs-template-tag': { color: '#a31515' },
            'hljs-template-variable': { color: '#a31515' },
            'hljs-type': { color: '#a31515' },
            'hljs-addition': { color: '#a31515' },
            'hljs-deletion': { color: '#2b91af' },
            'hljs-selector-attr': { color: '#2b91af' },
            'hljs-selector-pseudo': { color: '#2b91af' },
            'hljs-meta': { color: '#2b91af' },
            'hljs-doctag': { color: '#808080' },
            'hljs-attr': { color: '#f00' },
            'hljs-symbol': { color: '#00b0e8' },
            'hljs-bullet': { color: '#00b0e8' },
            'hljs-link': { color: '#00b0e8' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      91: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#1E1E1E',
              color: '#DCDCDC'
            },
            'hljs-keyword': { color: '#569CD6' },
            'hljs-literal': { color: '#569CD6' },
            'hljs-symbol': { color: '#569CD6' },
            'hljs-name': { color: '#569CD6' },
            'hljs-link': { color: '#569CD6', textDecoration: 'underline' },
            'hljs-built_in': { color: '#4EC9B0' },
            'hljs-type': { color: '#4EC9B0' },
            'hljs-number': { color: '#B8D7A3' },
            'hljs-class': { color: '#B8D7A3' },
            'hljs-string': { color: '#D69D85' },
            'hljs-meta-string': { color: '#D69D85' },
            'hljs-regexp': { color: '#9A5334' },
            'hljs-template-tag': { color: '#9A5334' },
            'hljs-subst': { color: '#DCDCDC' },
            'hljs-function': { color: '#DCDCDC' },
            'hljs-title': { color: '#DCDCDC' },
            'hljs-params': { color: '#DCDCDC' },
            'hljs-formula': { color: '#DCDCDC' },
            'hljs-comment': { color: '#57A64A', fontStyle: 'italic' },
            'hljs-quote': { color: '#57A64A', fontStyle: 'italic' },
            'hljs-doctag': { color: '#608B4E' },
            'hljs-meta': { color: '#9B9B9B' },
            'hljs-meta-keyword': { color: '#9B9B9B' },
            'hljs-tag': { color: '#9B9B9B' },
            'hljs-variable': { color: '#BD63C5' },
            'hljs-template-variable': { color: '#BD63C5' },
            'hljs-attr': { color: '#9CDCFE' },
            'hljs-attribute': { color: '#9CDCFE' },
            'hljs-builtin-name': { color: '#9CDCFE' },
            'hljs-section': { color: 'gold' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-bullet': { color: '#D7BA7D' },
            'hljs-selector-tag': { color: '#D7BA7D' },
            'hljs-selector-id': { color: '#D7BA7D' },
            'hljs-selector-class': { color: '#D7BA7D' },
            'hljs-selector-attr': { color: '#D7BA7D' },
            'hljs-selector-pseudo': { color: '#D7BA7D' },
            'hljs-addition': {
              backgroundColor: '#144212',
              display: 'inline-block',
              width: '100%'
            },
            'hljs-deletion': {
              backgroundColor: '#600',
              display: 'inline-block',
              width: '100%'
            }
          })
      },
      92: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#fff',
              color: 'black'
            },
            'hljs-comment': { color: '#006a00' },
            'hljs-quote': { color: '#006a00' },
            'hljs-keyword': { color: '#aa0d91' },
            'hljs-selector-tag': { color: '#aa0d91' },
            'hljs-literal': { color: '#aa0d91' },
            'hljs-name': { color: '#008' },
            'hljs-variable': { color: '#660' },
            'hljs-template-variable': { color: '#660' },
            'hljs-string': { color: '#c41a16' },
            'hljs-regexp': { color: '#080' },
            'hljs-link': { color: '#080' },
            'hljs-title': { color: '#1c00cf' },
            'hljs-tag': { color: '#1c00cf' },
            'hljs-symbol': { color: '#1c00cf' },
            'hljs-bullet': { color: '#1c00cf' },
            'hljs-number': { color: '#1c00cf' },
            'hljs-meta': { color: '#1c00cf' },
            'hljs-section': { color: '#5c2699' },
            'hljs-class .hljs-title': { color: '#5c2699' },
            'hljs-type': { color: '#5c2699' },
            'hljs-attr': { color: '#5c2699' },
            'hljs-built_in': { color: '#5c2699' },
            'hljs-builtin-name': { color: '#5c2699' },
            'hljs-params': { color: '#5c2699' },
            'hljs-attribute': { color: '#000' },
            'hljs-subst': { color: '#000' },
            'hljs-formula': { backgroundColor: '#eee', fontStyle: 'italic' },
            'hljs-addition': { backgroundColor: '#baeeba' },
            'hljs-deletion': { backgroundColor: '#ffc8bd' },
            'hljs-selector-id': { color: '#9b703f' },
            'hljs-selector-class': { color: '#9b703f' },
            'hljs-doctag': { fontWeight: 'bold' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-emphasis': { fontStyle: 'italic' }
          })
      },
      93: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              color: '#eaeaea',
              background: '#000',
              padding: '0.5'
            },
            'hljs-subst': { color: '#eaeaea' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' },
            'hljs-builtin-name': { color: '#eaeaea' },
            'hljs-type': { color: '#eaeaea' },
            'hljs-params': { color: '#da0000' },
            'hljs-literal': { color: '#ff0000', fontWeight: 'bolder' },
            'hljs-number': { color: '#ff0000', fontWeight: 'bolder' },
            'hljs-name': { color: '#ff0000', fontWeight: 'bolder' },
            'hljs-comment': { color: '#969896' },
            'hljs-selector-id': { color: '#00ffff' },
            'hljs-quote': { color: '#00ffff' },
            'hljs-template-variable': { color: '#00ffff', fontWeight: 'bold' },
            'hljs-variable': { color: '#00ffff', fontWeight: 'bold' },
            'hljs-title': { color: '#00ffff', fontWeight: 'bold' },
            'hljs-selector-class': { color: '#fff000' },
            'hljs-keyword': { color: '#fff000' },
            'hljs-symbol': { color: '#fff000' },
            'hljs-string': { color: '#00ff00' },
            'hljs-bullet': { color: '#00ff00' },
            'hljs-tag': { color: '#000fff' },
            'hljs-section': { color: '#000fff' },
            'hljs-selector-tag': { color: '#000fff', fontWeight: 'bold' },
            'hljs-attribute': { color: '#ff00ff' },
            'hljs-built_in': { color: '#ff00ff' },
            'hljs-regexp': { color: '#ff00ff' },
            'hljs-link': { color: '#ff00ff' },
            'hljs-meta': { color: '#fff', fontWeight: 'bolder' }
          })
      },
      94: function(e, l, o) {
        'use strict'
        Object.defineProperty(l, '__esModule', { value: !0 }),
          (l.default = {
            hljs: {
              display: 'block',
              overflowX: 'auto',
              padding: '0.5em',
              background: '#3f3f3f',
              color: '#dcdcdc'
            },
            'hljs-keyword': { color: '#e3ceab' },
            'hljs-selector-tag': { color: '#e3ceab' },
            'hljs-tag': { color: '#e3ceab' },
            'hljs-template-tag': { color: '#dcdcdc' },
            'hljs-number': { color: '#8cd0d3' },
            'hljs-variable': { color: '#efdcbc' },
            'hljs-template-variable': { color: '#efdcbc' },
            'hljs-attribute': { color: '#efdcbc' },
            'hljs-literal': { color: '#efefaf' },
            'hljs-subst': { color: '#8f8f8f' },
            'hljs-title': { color: '#efef8f' },
            'hljs-name': { color: '#efef8f' },
            'hljs-selector-id': { color: '#efef8f' },
            'hljs-selector-class': { color: '#efef8f' },
            'hljs-section': { color: '#efef8f' },
            'hljs-type': { color: '#efef8f' },
            'hljs-symbol': { color: '#dca3a3' },
            'hljs-bullet': { color: '#dca3a3' },
            'hljs-link': { color: '#dca3a3' },
            'hljs-deletion': { color: '#cc9393' },
            'hljs-string': { color: '#cc9393' },
            'hljs-built_in': { color: '#cc9393' },
            'hljs-builtin-name': { color: '#cc9393' },
            'hljs-addition': { color: '#7f9f7f' },
            'hljs-comment': { color: '#7f9f7f' },
            'hljs-quote': { color: '#7f9f7f' },
            'hljs-meta': { color: '#7f9f7f' },
            'hljs-emphasis': { fontStyle: 'italic' },
            'hljs-strong': { fontWeight: 'bold' }
          })
      },
      96: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        for (
          var r = o(7),
            c = t(r),
            a = o(1),
            s = t(a),
            n = o(0),
            i = t(n),
            h = o(97),
            d = t(h),
            u = function(e) {
              var l = e.level,
                o = e.fontSize,
                t = e.linked,
                r = e.children,
                c = r
              return (
                Array.isArray(r) &&
                  (c = r
                    .map(function(e) {
                      return 'string' == typeof e ? e : e.props.children
                    })
                    .join('')),
                i.default.createElement(
                  'div',
                  { className: 'jsx-1960885832' },
                  (0, n.createElement)(
                    'h' + l,
                    {
                      style: {
                        fontWeight: 700,
                        fontSize: o,
                        lineHeight: '1.5em'
                      }
                    },
                    t &&
                      i.default.createElement(
                        'span',
                        { className: 'jsx-1960885832' },
                        i.default.createElement(
                          'a',
                          {
                            href: '#' + (0, d.default)(c),
                            id: (0, d.default)(c),
                            className: 'jsx-1960885832'
                          },
                          '#'
                        )
                      ),
                    r
                  ),
                  i.default.createElement(s.default, {
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
            var o = 'H' + e,
              t = [23, 18, 15, 13, 10, 9],
              r = function(l) {
                return new u(
                  (0, c.default)({}, l, {
                    level: e,
                    fontSize: t[e - 1],
                    linked: e > 1
                  })
                )
              }
            l[o] = r
          })(f)
      },
      97: function(e, l, o) {
        !(function(l, o) {
          e.exports = o()
        })(0, function() {
          function e(e) {
            return (
              (e = e.trim().toLowerCase()),
              (e = e.replace(l, '-')),
              (e = e.replace(o, ''))
            )
          }
          var l = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g,
            o = /(^-+|-+$)/g
          return e
        })
      },
      98: function(e, l, o) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(l, '__esModule', { value: !0 })
        var r = o(1),
          c = t(r),
          a = o(0),
          s = t(a)
        l.default = function() {
          return s.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            s.default.createElement(c.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [605]
  ))
  return { page: comp.default }
})
