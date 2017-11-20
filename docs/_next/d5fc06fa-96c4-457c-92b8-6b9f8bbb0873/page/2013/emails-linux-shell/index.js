window.__NEXT_REGISTER_PAGE('/2013/emails-linux-shell', function() {
  var comp = (module.exports = webpackJsonp(
    [28],
    {
      10: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function t(l) {
          return l.match(y)
        }
        function c(l) {
          var o = l.lines,
            e = l.startingLineNumber,
            r = l.style
          return o.map(function(l, o) {
            var t = o + e
            return g.default.createElement(
              'span',
              {
                key: 'line-' + o,
                className: 'react-syntax-highlighter-line-number',
                style: 'function' == typeof r ? r(t) : r
              },
              t + '\n'
            )
          })
        }
        function s(l) {
          var o = l.codeString,
            e = l.containerStyle,
            r = void 0 === e ? { float: 'left', paddingRight: '10px' } : e,
            t = l.numberStyle,
            s = void 0 === t ? {} : t,
            a = l.startingLineNumber
          return g.default.createElement(
            'code',
            { style: r },
            c({
              lines: o.replace(/\n$/, '').split('\n'),
              style: s,
              startingLineNumber: a
            })
          )
        }
        function a(l) {
          var o = l.children,
            e = l.lineNumber,
            r = l.lineStyle,
            t = l.className
          return {
            type: 'element',
            tagName: 'span',
            properties: {
              className: void 0 === t ? [] : t,
              style: 'function' == typeof r ? r(e) : r
            },
            children: o
          }
        }
        function n(l) {
          for (
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              r = 0;
            r < l.length;
            r++
          ) {
            var t = l[r]
            if ('text' === t.type) e.push(a({ children: [t], className: o }))
            else if (t.children) {
              var c = o.concat(t.properties.className)
              e = e.concat(n(t.children, c))
            }
          }
          return e
        }
        function i(l, o) {
          for (var e = n(l.value), r = [], c = -1, s = 0; s < e.length; )
            !(function() {
              var l = e[s],
                n = l.children[0].value
              t(n) &&
                (function() {
                  var t = n.split('\n')
                  t.forEach(function(n, i) {
                    var h = r.length + 1,
                      j = { type: 'text', value: n + '\n' }
                    if (0 === i) {
                      var d = e.slice(c + 1, s).concat(
                        a({
                          children: [j],
                          className: l.properties.className
                        })
                      )
                      r.push(a({ children: d, lineNumber: h, lineStyle: o }))
                    } else if (i === t.length - 1) {
                      var f =
                        e[s + 1] && e[s + 1].children && e[s + 1].children[0]
                      if (f) {
                        var b = { type: 'text', value: '' + n },
                          u = a({
                            children: [b],
                            className: l.properties.className
                          })
                        e.splice(s + 1, 0, u)
                      } else
                        r.push(
                          a({ children: [j], lineNumber: h, lineStyle: o })
                        )
                    } else
                      r.push(a({ children: [j], lineNumber: h, lineStyle: o }))
                  }),
                    (c = s)
                })(),
                s++
            })()
          if (c !== e.length - 1) {
            var i = e.slice(c + 1, e.length)
            i &&
              i.length &&
              r.push(a({ children: i, lineNumber: r.length + 1, lineStyle: o }))
          }
          return r
        }
        function h(l) {
          var o = l.rows,
            e = l.stylesheet,
            r = l.useInlineStyles
          return o.map(function(l, o) {
            return (0,
            p.default)({ node: l, stylesheet: e, useInlineStyles: r, key: 'code-segement' + o })
          })
        }
        Object.defineProperty(o, '__esModule', { value: !0 })
        var j = e(6),
          d = r(j),
          f = e(11),
          b = r(f)
        o.default = function(l, o) {
          return function(e) {
            var r = e.language,
              t = e.children,
              c = e.style,
              a = void 0 === c ? o : c,
              n = e.customStyle,
              j = void 0 === n ? {} : n,
              f = e.codeTagProps,
              u = void 0 === f ? {} : f,
              m = e.useInlineStyles,
              p = void 0 === m || m,
              y = e.showLineNumbers,
              v = void 0 !== y && y,
              k = e.startingLineNumber,
              w = void 0 === k ? 1 : k,
              A = e.lineNumberContainerStyle,
              _ = e.lineNumberStyle,
              W = e.wrapLines,
              O = e.lineStyle,
              S = void 0 === O ? {} : O,
              E = e.renderer,
              P = e.PreTag,
              x = void 0 === P ? 'pre' : P,
              C = e.CodeTag,
              M = void 0 === C ? 'code' : C,
              B = e.code,
              D = void 0 === B ? (Array.isArray(t) ? t[0] : t) : B,
              N = (0, b.default)(e, [
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
            ;(W = !(!E || void 0 !== W) || W), (E = E || h)
            var L =
              r && l.getLanguage(r) ? l.highlight(r, D) : l.highlightAuto(D)
            ;(null !== L.language && 'text' !== r) ||
              (L.value = [{ type: 'text', value: D }])
            var R = a.hljs || { backgroundColor: '#fff' },
              q = p
                ? (0, d.default)({}, N, { style: (0, d.default)({}, R, j) })
                : (0, d.default)({}, N, { className: 'hljs' }),
              X = W ? i(L, S) : L.value,
              I = v
                ? g.default.createElement(s, {
                    containerStyle: A,
                    numberStyle: _,
                    startingLineNumber: w,
                    codeString: D
                  })
                : null
            return g.default.createElement(
              x,
              q,
              I,
              g.default.createElement(
                M,
                u,
                E({ rows: X, stylesheet: a, useInlineStyles: p })
              )
            )
          }
        }
        var u = e(0),
          g = r(u),
          m = e(12),
          p = r(m),
          y = /\n/g
      },
      11: function(l, o, e) {
        'use strict'
        ;(o.__esModule = !0),
          (o.default = function(l, o) {
            var e = {}
            for (var r in l)
              o.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]))
            return e
          })
      },
      116: function(l, o) {
        l.exports = function(l) {
          var o = {
              className: 'variable',
              variants: [
                { begin: /\$[\w\d#@][\w\d_]*/ },
                { begin: /\$\{(.*?)}/ }
              ]
            },
            e = {
              className: 'string',
              begin: /"/,
              end: /"/,
              contains: [
                l.BACKSLASH_ESCAPE,
                o,
                {
                  className: 'variable',
                  begin: /\$\(/,
                  end: /\)/,
                  contains: [l.BACKSLASH_ESCAPE]
                }
              ]
            },
            r = { className: 'string', begin: /'/, end: /'/ }
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
                contains: [l.inherit(l.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
                relevance: 0
              },
              l.HASH_COMMENT_MODE,
              e,
              r,
              o
            ]
          }
        }
      },
      12: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function t(l) {
          var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = arguments[2]
          return l.reduce(function(l, o) {
            return (0, j.default)({}, l, e[o])
          }, o)
        }
        function c(l) {
          return l.join(' ')
        }
        function s(l, o) {
          var e = 0
          return function(r) {
            return (
              (e += 1),
              r.map(function(r, t) {
                return a({
                  node: r,
                  stylesheet: l,
                  useInlineStyles: o,
                  key: 'code-segment-' + e + '-' + t
                })
              })
            )
          }
        }
        function a(l) {
          var o = l.node,
            e = l.stylesheet,
            r = l.style,
            a = void 0 === r ? {} : r,
            n = l.useInlineStyles,
            h = l.key,
            d = o.properties,
            b = o.type,
            u = o.tagName,
            g = o.value
          if ('text' === b) return g
          if (u) {
            var m = s(e, n),
              p = n
                ? { style: t(d.className, (0, i.default)({}, d.style, a), e) }
                : { className: c(d.className) },
              y = m(o.children)
            return f.default.createElement(u, (0, j.default)({ key: h }, p), y)
          }
        }
        Object.defineProperty(o, '__esModule', { value: !0 })
        var n = e(6),
          i = r(n),
          h = e(7),
          j = r(h)
        ;(o.createStyleObject = t),
          (o.createClassNameString = c),
          (o.createChildren = s),
          (o.default = a)
        var d = e(0),
          f = r(d)
      },
      13: function(l, o, e) {
        'use strict'
        function r() {}
        function t(l, o) {
          var e,
            r,
            t,
            c,
            s = o || {},
            n = s.prefix,
            i = s.subset || S,
            j = i.length,
            d = -1
          if (((null !== n && void 0 !== n) || (n = p), 'string' != typeof l))
            throw new Error('Expected `string` for value, got `' + l + '`')
          for (r = h({}), e = h({}); ++d < j; )
            (c = i[d]),
              f(c) &&
                ((t = h(a(c, l, !1, n))),
                (t.language = c),
                t.relevance > r.relevance && (r = t),
                t.relevance > e.relevance && ((r = e), (e = t)))
          return r.language && (e.secondBest = r), e
        }
        function c(l, o, e) {
          var r = e || {},
            t = r.prefix
          return (null !== t && void 0 !== t) || (t = p), h(a(l, o, !0, t))
        }
        function s(l, o) {
          var e = (E[l] = o(u)),
            r = e.aliases,
            t = r && r.length,
            c = -1
          for (S.push(l); ++c < t; ) P[r[c]] = l
        }
        function a(l, o, e, r, c) {
          function s(l, o) {
            var e, r, t
            if (((U += l), void 0 === o)) return u(h(), D), 0
            if ((e = P(o, M)))
              return u(h(), D), n(e, o), e.returnBegin ? 0 : o.length
            if ((r = S(M, o))) {
              ;(t = M), t.returnEnd || t.excludeEnd || (U += o), u(h(), D)
              do {
                M.className && x(), (F += M.relevance), (M = M.parent)
              } while (M !== r.parent)
              return (
                t.excludeEnd && g(o, D),
                (U = k),
                r.starts && n(r.starts, k),
                t.returnEnd ? 0 : o.length
              )
            }
            if (A(o, M))
              throw new Error(
                'Illegal lexeme "' +
                  o +
                  '" for mode "' +
                  (M.className || '<unnamed>') +
                  '"'
              )
            return (U += o), o.length || 1
          }
          function n(l, o) {
            var e
            l.className && (e = v(l.className, [])),
              l.returnBegin
                ? (U = k)
                : l.excludeBegin ? (g(o, D), (U = k)) : (U = o),
              e && (D.push(e), I.push(D), (D = e.children)),
              (M = Object.create(l, { parent: { value: M } }))
          }
          function h() {
            var l = void 0 === M.subLanguage ? b() : d()
            return (U = k), l
          }
          function d() {
            var l,
              o = 'string' == typeof M.subLanguage
            return o && !E[M.subLanguage]
              ? g(U, [])
              : ((l = o
                  ? a(M.subLanguage, U, !0, r, X[M.subLanguage])
                  : t(U, {
                      subset: M.subLanguage.length ? M.subLanguage : void 0,
                      prefix: r
                    })),
                M.relevance > 0 && (F += l.relevance),
                o && (X[M.subLanguage] = l.top),
                [v(l.language, l.value, !0)])
          }
          function b() {
            var l,
              o,
              e,
              r,
              t = []
            if (!M.keywords) return g(U, t)
            for (l = 0, M.lexemesRe.lastIndex = 0, o = M.lexemesRe.exec(U); o; )
              g(U.substring(l, o.index), t),
                (r = w(M, o)),
                r
                  ? ((F += r[1]),
                    (e = v(r[0], [])),
                    t.push(e),
                    g(o[0], e.children))
                  : g(o[0], t),
                (l = M.lexemesRe.lastIndex),
                (o = M.lexemesRe.exec(U))
            return g(U.substr(l), t), t
          }
          function u(l, o) {
            for (var e, r = l.length, t = -1; ++t < r; )
              (e = l[t]), e.type === W ? g(e.value, o) : o.push(e)
          }
          function g(l, o) {
            var e
            return (
              l &&
                ((e = o[o.length - 1]),
                e && e.type === W ? (e.value += l) : o.push(p(l))),
              o
            )
          }
          function p(l) {
            return { type: W, value: l }
          }
          function v(l, o, e) {
            return {
              type: _,
              tagName: O,
              properties: { className: [(e ? k : r) + l] },
              children: o
            }
          }
          function w(l, o) {
            var e = o[0]
            return (
              C[y] && (e = e.toLowerCase()),
              m.call(l.keywords, e) && l.keywords[e]
            )
          }
          function A(l, o) {
            return !e && j(o.illegalRe, l)
          }
          function S(l, o) {
            if (j(l.endRe, o)) {
              for (; l.endsParent && l.parent; ) l = l.parent
              return l
            }
            if (l.endsWithParent) return S(l.parent, o)
          }
          function P(l, o) {
            for (var e = o.contains, r = e.length, t = -1; ++t < r; )
              if (j(e[t].beginRe, l)) return e[t]
          }
          function x() {
            D = I.pop() || q
          }
          var C,
            M,
            B,
            D,
            N,
            L,
            R,
            q,
            X = {},
            I = [],
            U = k,
            F = 0
          if ('string' != typeof l)
            throw new Error('Expected `string` for name, got `' + l + '`')
          if ('string' != typeof o)
            throw new Error('Expected `string` for value, got `' + o + '`')
          if (((C = f(l)), (B = M = c || C), (D = q = []), !C))
            throw new Error('Unknown language: `' + l + '` is not registered')
          i(C)
          try {
            for (
              N = M.terminators.lastIndex = 0, R = M.terminators.exec(o);
              R;

            )
              (L = s(o.substring(N, R.index), R[0])),
                (N = M.terminators.lastIndex = R.index + L),
                (R = M.terminators.exec(o))
            for (s(o.substr(N)), B = M; B.parent; )
              B.className && x(), (B = B.parent)
            return { relevance: F, value: D, language: l, top: M }
          } catch (l) {
            if (-1 === l.message.indexOf('Illegal')) throw l
            return { relevance: 0, value: g(o, []) }
          }
        }
        function n(l) {
          return (
            l.variants &&
              !l[v] &&
              (l[v] = l.variants.map(function(o) {
                return g(l, { variants: null }, o)
              })),
            l[v] || (l.endsWithParent && [g(l)]) || [l]
          )
        }
        function i(l) {
          function o(t, c) {
            function s(o, e) {
              var r, t, c, s
              for (
                l[y] && (e = e.toLowerCase()),
                  r = e.split(w),
                  s = r.length,
                  c = -1;
                ++c < s;

              )
                (t = r[c].split(A)), (i[t[0]] = [o, t[1] ? Number(t[1]) : 1])
            }
            var a,
              i = {}
            t.compiled ||
              ((t.compiled = !0),
              (t.keywords = t.keywords || t.beginKeywords),
              t.keywords &&
                ('string' == typeof t.keywords
                  ? s('keyword', t.keywords)
                  : Object.keys(t.keywords).forEach(function(l) {
                      s(l, t.keywords[l])
                    }),
                (t.keywords = i)),
              (t.lexemesRe = e(t.lexemes || /\w+/, !0)),
              c &&
                (t.beginKeywords &&
                  (t.begin =
                    '\\b(' + t.beginKeywords.split(w).join(A) + ')\\b'),
                t.begin || (t.begin = /\B|\b/),
                (t.beginRe = e(t.begin)),
                t.end || t.endsWithParent || (t.end = /\B|\b/),
                t.end && (t.endRe = e(t.end)),
                (t.terminatorEnd = r(t.end) || k),
                t.endsWithParent &&
                  c.terminatorEnd &&
                  (t.terminatorEnd += (t.end ? A : k) + c.terminatorEnd)),
              t.illegal && (t.illegalRe = e(t.illegal)),
              void 0 === t.relevance && (t.relevance = 1),
              t.contains || (t.contains = []),
              (t.contains = Array.prototype.concat.apply(
                [],
                t.contains.map(function(l) {
                  return n('self' === l ? t : l)
                })
              )),
              t.contains.forEach(function(l) {
                o(l, t)
              }),
              t.starts && o(t.starts, c),
              (a = t.contains
                .map(function(l) {
                  return l.beginKeywords ? '\\.?(' + l.begin + ')\\.?' : l.begin
                })
                .concat([t.terminatorEnd, t.illegal])
                .map(r)
                .filter(Boolean)),
              (t.terminators = a.length ? e(a.join(A), !0) : { exec: d }))
          }
          function e(o, e) {
            return new RegExp(r(o), 'm' + (l[y] ? 'i' : '') + (e ? 'g' : ''))
          }
          function r(l) {
            return (l && l.source) || l
          }
          o(l)
        }
        function h(l) {
          return {
            relevance: l.relevance || 0,
            language: l.language || null,
            value: l.value || []
          }
        }
        function j(l, o) {
          var e = l && l.exec(o)
          return e && 0 === e.index
        }
        function d() {
          return null
        }
        function f(l) {
          return (l = l.toLowerCase()), E[l] || E[P[l]]
        }
        var b = e(14)
        r.prototype = b
        var u = new r()
        ;(l.exports = u),
          (u.highlight = c),
          (u.highlightAuto = t),
          (u.registerLanguage = s),
          (u.getLanguage = f)
        var g = b.inherit,
          m = {}.hasOwnProperty,
          p = 'hljs-',
          y = 'case_insensitive',
          v = 'cached_variants',
          k = '',
          w = ' ',
          A = '|',
          _ = 'element',
          W = 'text',
          O = 'span',
          S = [],
          E = {},
          P = {}
      },
      14: function(l, o, e) {
        !(function(l) {
          ;('object' == typeof window && window) ||
            ('object' == typeof self && self)
          l(o)
        })(function(l) {
          function o(l) {
            return l
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          }
          function e(l) {
            return l.nodeName.toLowerCase()
          }
          function r(l, o) {
            var e = l && l.exec(o)
            return e && 0 === e.index
          }
          function t(l) {
            return O.test(l)
          }
          function c(l) {
            var o,
              e,
              r,
              c,
              s = l.className + ' '
            if (
              ((s += l.parentNode ? l.parentNode.className : ''),
              (e = S.exec(s)))
            )
              return k(e[1]) ? e[1] : 'no-highlight'
            for (s = s.split(/\s+/), o = 0, r = s.length; o < r; o++)
              if (((c = s[o]), t(c) || k(c))) return c
          }
          function s(l) {
            var o,
              e = {},
              r = Array.prototype.slice.call(arguments, 1)
            for (o in l) e[o] = l[o]
            return (
              r.forEach(function(l) {
                for (o in l) e[o] = l[o]
              }),
              e
            )
          }
          function a(l) {
            var o = []
            return (
              (function l(r, t) {
                for (var c = r.firstChild; c; c = c.nextSibling)
                  3 === c.nodeType
                    ? (t += c.nodeValue.length)
                    : 1 === c.nodeType &&
                      (o.push({ event: 'start', offset: t, node: c }),
                      (t = l(c, t)),
                      e(c).match(/br|hr|img|input/) ||
                        o.push({ event: 'stop', offset: t, node: c }))
                return t
              })(l, 0),
              o
            )
          }
          function n(l, r, t) {
            function c() {
              return l.length && r.length
                ? l[0].offset !== r[0].offset
                  ? l[0].offset < r[0].offset ? l : r
                  : 'start' === r[0].event ? l : r
                : l.length ? l : r
            }
            function s(l) {
              function r(l) {
                return (
                  ' ' +
                  l.nodeName +
                  '="' +
                  o(l.value).replace('"', '&quot;') +
                  '"'
                )
              }
              h += '<' + e(l) + w.map.call(l.attributes, r).join('') + '>'
            }
            function a(l) {
              h += '</' + e(l) + '>'
            }
            function n(l) {
              ;('start' === l.event ? s : a)(l.node)
            }
            for (var i = 0, h = '', j = []; l.length || r.length; ) {
              var d = c()
              if (
                ((h += o(t.substring(i, d[0].offset))),
                (i = d[0].offset),
                d === l)
              ) {
                j.reverse().forEach(a)
                do {
                  n(d.splice(0, 1)[0]), (d = c())
                } while (d === l && d.length && d[0].offset === i)
                j.reverse().forEach(s)
              } else
                'start' === d[0].event ? j.push(d[0].node) : j.pop(),
                  n(d.splice(0, 1)[0])
            }
            return h + o(t.substr(i))
          }
          function i(l) {
            return (
              l.variants &&
                !l.cached_variants &&
                (l.cached_variants = l.variants.map(function(o) {
                  return s(l, { variants: null }, o)
                })),
              l.cached_variants || (l.endsWithParent && [s(l)]) || [l]
            )
          }
          function h(l) {
            function o(l) {
              return (l && l.source) || l
            }
            function e(e, r) {
              return new RegExp(
                o(e),
                'm' + (l.case_insensitive ? 'i' : '') + (r ? 'g' : '')
              )
            }
            function r(t, c) {
              if (!t.compiled) {
                if (
                  ((t.compiled = !0),
                  (t.keywords = t.keywords || t.beginKeywords),
                  t.keywords)
                ) {
                  var s = {},
                    a = function(o, e) {
                      l.case_insensitive && (e = e.toLowerCase()),
                        e.split(' ').forEach(function(l) {
                          var e = l.split('|')
                          s[e[0]] = [o, e[1] ? Number(e[1]) : 1]
                        })
                    }
                  'string' == typeof t.keywords
                    ? a('keyword', t.keywords)
                    : A(t.keywords).forEach(function(l) {
                        a(l, t.keywords[l])
                      }),
                    (t.keywords = s)
                }
                ;(t.lexemesRe = e(t.lexemes || /\w+/, !0)),
                  c &&
                    (t.beginKeywords &&
                      (t.begin =
                        '\\b(' + t.beginKeywords.split(' ').join('|') + ')\\b'),
                    t.begin || (t.begin = /\B|\b/),
                    (t.beginRe = e(t.begin)),
                    t.end || t.endsWithParent || (t.end = /\B|\b/),
                    t.end && (t.endRe = e(t.end)),
                    (t.terminator_end = o(t.end) || ''),
                    t.endsWithParent &&
                      c.terminator_end &&
                      (t.terminator_end +=
                        (t.end ? '|' : '') + c.terminator_end)),
                  t.illegal && (t.illegalRe = e(t.illegal)),
                  null == t.relevance && (t.relevance = 1),
                  t.contains || (t.contains = []),
                  (t.contains = Array.prototype.concat.apply(
                    [],
                    t.contains.map(function(l) {
                      return i('self' === l ? t : l)
                    })
                  )),
                  t.contains.forEach(function(l) {
                    r(l, t)
                  }),
                  t.starts && r(t.starts, c)
                var n = t.contains
                  .map(function(l) {
                    return l.beginKeywords
                      ? '\\.?(' + l.begin + ')\\.?'
                      : l.begin
                  })
                  .concat([t.terminator_end, t.illegal])
                  .map(o)
                  .filter(Boolean)
                t.terminators = n.length
                  ? e(n.join('|'), !0)
                  : {
                      exec: function() {
                        return null
                      }
                    }
              }
            }
            r(l)
          }
          function j(l, e, t, c) {
            function s(l, o) {
              var e, t
              for (e = 0, t = o.contains.length; e < t; e++)
                if (r(o.contains[e].beginRe, l)) return o.contains[e]
            }
            function a(l, o) {
              if (r(l.endRe, o)) {
                for (; l.endsParent && l.parent; ) l = l.parent
                return l
              }
              if (l.endsWithParent) return a(l.parent, o)
            }
            function n(l, o) {
              return !t && r(o.illegalRe, l)
            }
            function i(l, o) {
              var e = y.case_insensitive ? o[0].toLowerCase() : o[0]
              return l.keywords.hasOwnProperty(e) && l.keywords[e]
            }
            function f(l, o, e, r) {
              var t = r ? '' : x.classPrefix,
                c = '<span class="' + t,
                s = e ? '' : P
              return (c += l + '">') + o + s
            }
            function b() {
              var l, e, r, t
              if (!w.keywords) return o(O)
              for (
                t = '',
                  e = 0,
                  w.lexemesRe.lastIndex = 0,
                  r = w.lexemesRe.exec(O);
                r;

              )
                (t += o(O.substring(e, r.index))),
                  (l = i(w, r)),
                  l ? ((S += l[1]), (t += f(l[0], o(r[0])))) : (t += o(r[0])),
                  (e = w.lexemesRe.lastIndex),
                  (r = w.lexemesRe.exec(O))
              return t + o(O.substr(e))
            }
            function u() {
              var l = 'string' == typeof w.subLanguage
              if (l && !_[w.subLanguage]) return o(O)
              var e = l
                ? j(w.subLanguage, O, !0, A[w.subLanguage])
                : d(O, w.subLanguage.length ? w.subLanguage : void 0)
              return (
                w.relevance > 0 && (S += e.relevance),
                l && (A[w.subLanguage] = e.top),
                f(e.language, e.value, !1, !0)
              )
            }
            function g() {
              ;(W += null != w.subLanguage ? u() : b()), (O = '')
            }
            function m(l) {
              ;(W += l.className ? f(l.className, '', !0) : ''),
                (w = Object.create(l, { parent: { value: w } }))
            }
            function p(l, o) {
              if (((O += l), null == o)) return g(), 0
              var e = s(o, w)
              if (e)
                return (
                  e.skip
                    ? (O += o)
                    : (e.excludeBegin && (O += o),
                      g(),
                      e.returnBegin || e.excludeBegin || (O = o)),
                  m(e, o),
                  e.returnBegin ? 0 : o.length
                )
              var r = a(w, o)
              if (r) {
                var t = w
                t.skip
                  ? (O += o)
                  : (t.returnEnd || t.excludeEnd || (O += o),
                    g(),
                    t.excludeEnd && (O = o))
                do {
                  w.className && (W += P),
                    w.skip || (S += w.relevance),
                    (w = w.parent)
                } while (w !== r.parent)
                return r.starts && m(r.starts, ''), t.returnEnd ? 0 : o.length
              }
              if (n(o, w))
                throw new Error(
                  'Illegal lexeme "' +
                    o +
                    '" for mode "' +
                    (w.className || '<unnamed>') +
                    '"'
                )
              return (O += o), o.length || 1
            }
            var y = k(l)
            if (!y) throw new Error('Unknown language: "' + l + '"')
            h(y)
            var v,
              w = c || y,
              A = {},
              W = ''
            for (v = w; v !== y; v = v.parent)
              v.className && (W = f(v.className, '', !0) + W)
            var O = '',
              S = 0
            try {
              for (var E, C, M = 0; ; ) {
                if (
                  ((w.terminators.lastIndex = M), !(E = w.terminators.exec(e)))
                )
                  break
                ;(C = p(e.substring(M, E.index), E[0])), (M = E.index + C)
              }
              for (p(e.substr(M)), v = w; v.parent; v = v.parent)
                v.className && (W += P)
              return { relevance: S, value: W, language: l, top: w }
            } catch (l) {
              if (l.message && -1 !== l.message.indexOf('Illegal'))
                return { relevance: 0, value: o(e) }
              throw l
            }
          }
          function d(l, e) {
            e = e || x.languages || A(_)
            var r = { relevance: 0, value: o(l) },
              t = r
            return (
              e.filter(k).forEach(function(o) {
                var e = j(o, l, !1)
                ;(e.language = o),
                  e.relevance > t.relevance && (t = e),
                  e.relevance > r.relevance && ((t = r), (r = e))
              }),
              t.language && (r.second_best = t),
              r
            )
          }
          function f(l) {
            return x.tabReplace || x.useBR
              ? l.replace(E, function(l, o) {
                  return x.useBR && '\n' === l
                    ? '<br>'
                    : x.tabReplace ? o.replace(/\t/g, x.tabReplace) : ''
                })
              : l
          }
          function b(l, o, e) {
            var r = o ? W[o] : e,
              t = [l.trim()]
            return (
              l.match(/\bhljs\b/) || t.push('hljs'),
              -1 === l.indexOf(r) && t.push(r),
              t.join(' ').trim()
            )
          }
          function u(l) {
            var o,
              e,
              r,
              s,
              i,
              h = c(l)
            t(h) ||
              (x.useBR
                ? ((o = document.createElementNS(
                    'http://www.w3.org/1999/xhtml',
                    'div'
                  )),
                  (o.innerHTML = l.innerHTML
                    .replace(/\n/g, '')
                    .replace(/<br[ \/]*>/g, '\n')))
                : (o = l),
              (i = o.textContent),
              (r = h ? j(h, i, !0) : d(i)),
              (e = a(o)),
              e.length &&
                ((s = document.createElementNS(
                  'http://www.w3.org/1999/xhtml',
                  'div'
                )),
                (s.innerHTML = r.value),
                (r.value = n(e, a(s), i))),
              (r.value = f(r.value)),
              (l.innerHTML = r.value),
              (l.className = b(l.className, h, r.language)),
              (l.result = { language: r.language, re: r.relevance }),
              r.second_best &&
                (l.second_best = {
                  language: r.second_best.language,
                  re: r.second_best.relevance
                }))
          }
          function g(l) {
            x = s(x, l)
          }
          function m() {
            if (!m.called) {
              m.called = !0
              var l = document.querySelectorAll('pre code')
              w.forEach.call(l, u)
            }
          }
          function p() {
            addEventListener('DOMContentLoaded', m, !1),
              addEventListener('load', m, !1)
          }
          function y(o, e) {
            var r = (_[o] = e(l))
            r.aliases &&
              r.aliases.forEach(function(l) {
                W[l] = o
              })
          }
          function v() {
            return A(_)
          }
          function k(l) {
            return (l = (l || '').toLowerCase()), _[l] || _[W[l]]
          }
          var w = [],
            A = Object.keys,
            _ = {},
            W = {},
            O = /^(no-?highlight|plain|text)$/i,
            S = /\blang(?:uage)?-([\w-]+)\b/i,
            E = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            P = '</span>',
            x = {
              classPrefix: 'hljs-',
              tabReplace: null,
              useBR: !1,
              languages: void 0
            }
          return (
            (l.highlight = j),
            (l.highlightAuto = d),
            (l.fixMarkup = f),
            (l.highlightBlock = u),
            (l.configure = g),
            (l.initHighlighting = m),
            (l.initHighlightingOnLoad = p),
            (l.registerLanguage = y),
            (l.listLanguages = v),
            (l.getLanguage = k),
            (l.inherit = s),
            (l.IDENT_RE = '[a-zA-Z]\\w*'),
            (l.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
            (l.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
            (l.C_NUMBER_RE =
              '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
            (l.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
            (l.RE_STARTERS_RE =
              '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
            (l.BACKSLASH_ESCAPE = { begin: '\\\\[\\s\\S]', relevance: 0 }),
            (l.APOS_STRING_MODE = {
              className: 'string',
              begin: "'",
              end: "'",
              illegal: '\\n',
              contains: [l.BACKSLASH_ESCAPE]
            }),
            (l.QUOTE_STRING_MODE = {
              className: 'string',
              begin: '"',
              end: '"',
              illegal: '\\n',
              contains: [l.BACKSLASH_ESCAPE]
            }),
            (l.PHRASAL_WORDS_MODE = {
              begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            }),
            (l.COMMENT = function(o, e, r) {
              var t = l.inherit(
                { className: 'comment', begin: o, end: e, contains: [] },
                r || {}
              )
              return (
                t.contains.push(l.PHRASAL_WORDS_MODE),
                t.contains.push({
                  className: 'doctag',
                  begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                  relevance: 0
                }),
                t
              )
            }),
            (l.C_LINE_COMMENT_MODE = l.COMMENT('//', '$')),
            (l.C_BLOCK_COMMENT_MODE = l.COMMENT('/\\*', '\\*/')),
            (l.HASH_COMMENT_MODE = l.COMMENT('#', '$')),
            (l.NUMBER_MODE = {
              className: 'number',
              begin: l.NUMBER_RE,
              relevance: 0
            }),
            (l.C_NUMBER_MODE = {
              className: 'number',
              begin: l.C_NUMBER_RE,
              relevance: 0
            }),
            (l.BINARY_NUMBER_MODE = {
              className: 'number',
              begin: l.BINARY_NUMBER_RE,
              relevance: 0
            }),
            (l.CSS_NUMBER_MODE = {
              className: 'number',
              begin:
                l.NUMBER_RE +
                '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
              relevance: 0
            }),
            (l.REGEXP_MODE = {
              className: 'regexp',
              begin: /\//,
              end: /\/[gimuy]*/,
              illegal: /\n/,
              contains: [
                l.BACKSLASH_ESCAPE,
                {
                  begin: /\[/,
                  end: /\]/,
                  relevance: 0,
                  contains: [l.BACKSLASH_ESCAPE]
                }
              ]
            }),
            (l.TITLE_MODE = {
              className: 'title',
              begin: l.IDENT_RE,
              relevance: 0
            }),
            (l.UNDERSCORE_TITLE_MODE = {
              className: 'title',
              begin: l.UNDERSCORE_IDENT_RE,
              relevance: 0
            }),
            (l.METHOD_GUARD = {
              begin: '\\.\\s*' + l.UNDERSCORE_IDENT_RE,
              relevance: 0
            }),
            l
          )
        })
      },
      15: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(o, '__esModule', { value: !0 })
        var t = e(16)
        Object.defineProperty(o, 'agate', {
          enumerable: !0,
          get: function() {
            return r(t).default
          }
        })
        var c = e(17)
        Object.defineProperty(o, 'androidstudio', {
          enumerable: !0,
          get: function() {
            return r(c).default
          }
        })
        var s = e(18)
        Object.defineProperty(o, 'arduinoLight', {
          enumerable: !0,
          get: function() {
            return r(s).default
          }
        })
        var a = e(19)
        Object.defineProperty(o, 'arta', {
          enumerable: !0,
          get: function() {
            return r(a).default
          }
        })
        var n = e(20)
        Object.defineProperty(o, 'ascetic', {
          enumerable: !0,
          get: function() {
            return r(n).default
          }
        })
        var i = e(21)
        Object.defineProperty(o, 'atelierCaveDark', {
          enumerable: !0,
          get: function() {
            return r(i).default
          }
        })
        var h = e(22)
        Object.defineProperty(o, 'atelierCaveLight', {
          enumerable: !0,
          get: function() {
            return r(h).default
          }
        })
        var j = e(23)
        Object.defineProperty(o, 'atelierDuneDark', {
          enumerable: !0,
          get: function() {
            return r(j).default
          }
        })
        var d = e(24)
        Object.defineProperty(o, 'atelierDuneLight', {
          enumerable: !0,
          get: function() {
            return r(d).default
          }
        })
        var f = e(25)
        Object.defineProperty(o, 'atelierEstuaryDark', {
          enumerable: !0,
          get: function() {
            return r(f).default
          }
        })
        var b = e(26)
        Object.defineProperty(o, 'atelierEstuaryLight', {
          enumerable: !0,
          get: function() {
            return r(b).default
          }
        })
        var u = e(27)
        Object.defineProperty(o, 'atelierForestDark', {
          enumerable: !0,
          get: function() {
            return r(u).default
          }
        })
        var g = e(28)
        Object.defineProperty(o, 'atelierForestLight', {
          enumerable: !0,
          get: function() {
            return r(g).default
          }
        })
        var m = e(29)
        Object.defineProperty(o, 'atelierHeathDark', {
          enumerable: !0,
          get: function() {
            return r(m).default
          }
        })
        var p = e(30)
        Object.defineProperty(o, 'atelierHeathLight', {
          enumerable: !0,
          get: function() {
            return r(p).default
          }
        })
        var y = e(31)
        Object.defineProperty(o, 'atelierLakesideDark', {
          enumerable: !0,
          get: function() {
            return r(y).default
          }
        })
        var v = e(32)
        Object.defineProperty(o, 'atelierLakesideLight', {
          enumerable: !0,
          get: function() {
            return r(v).default
          }
        })
        var k = e(33)
        Object.defineProperty(o, 'atelierPlateauDark', {
          enumerable: !0,
          get: function() {
            return r(k).default
          }
        })
        var w = e(34)
        Object.defineProperty(o, 'atelierPlateauLight', {
          enumerable: !0,
          get: function() {
            return r(w).default
          }
        })
        var A = e(35)
        Object.defineProperty(o, 'atelierSavannaDark', {
          enumerable: !0,
          get: function() {
            return r(A).default
          }
        })
        var _ = e(36)
        Object.defineProperty(o, 'atelierSavannaLight', {
          enumerable: !0,
          get: function() {
            return r(_).default
          }
        })
        var W = e(37)
        Object.defineProperty(o, 'atelierSeasideDark', {
          enumerable: !0,
          get: function() {
            return r(W).default
          }
        })
        var O = e(38)
        Object.defineProperty(o, 'atelierSeasideLight', {
          enumerable: !0,
          get: function() {
            return r(O).default
          }
        })
        var S = e(39)
        Object.defineProperty(o, 'atelierSulphurpoolDark', {
          enumerable: !0,
          get: function() {
            return r(S).default
          }
        })
        var E = e(40)
        Object.defineProperty(o, 'atelierSulphurpoolLight', {
          enumerable: !0,
          get: function() {
            return r(E).default
          }
        })
        var P = e(41)
        Object.defineProperty(o, 'atomOneDark', {
          enumerable: !0,
          get: function() {
            return r(P).default
          }
        })
        var x = e(42)
        Object.defineProperty(o, 'atomOneLight', {
          enumerable: !0,
          get: function() {
            return r(x).default
          }
        })
        var C = e(43)
        Object.defineProperty(o, 'brownPaper', {
          enumerable: !0,
          get: function() {
            return r(C).default
          }
        })
        var M = e(44)
        Object.defineProperty(o, 'codepenEmbed', {
          enumerable: !0,
          get: function() {
            return r(M).default
          }
        })
        var B = e(45)
        Object.defineProperty(o, 'colorBrewer', {
          enumerable: !0,
          get: function() {
            return r(B).default
          }
        })
        var D = e(46)
        Object.defineProperty(o, 'darcula', {
          enumerable: !0,
          get: function() {
            return r(D).default
          }
        })
        var N = e(47)
        Object.defineProperty(o, 'dark', {
          enumerable: !0,
          get: function() {
            return r(N).default
          }
        })
        var L = e(48)
        Object.defineProperty(o, 'darkula', {
          enumerable: !0,
          get: function() {
            return r(L).default
          }
        })
        var R = e(49)
        Object.defineProperty(o, 'defaultStyle', {
          enumerable: !0,
          get: function() {
            return r(R).default
          }
        })
        var q = e(50)
        Object.defineProperty(o, 'docco', {
          enumerable: !0,
          get: function() {
            return r(q).default
          }
        })
        var X = e(51)
        Object.defineProperty(o, 'dracula', {
          enumerable: !0,
          get: function() {
            return r(X).default
          }
        })
        var I = e(52)
        Object.defineProperty(o, 'far', {
          enumerable: !0,
          get: function() {
            return r(I).default
          }
        })
        var U = e(53)
        Object.defineProperty(o, 'foundation', {
          enumerable: !0,
          get: function() {
            return r(U).default
          }
        })
        var F = e(54)
        Object.defineProperty(o, 'githubGist', {
          enumerable: !0,
          get: function() {
            return r(F).default
          }
        })
        var z = e(55)
        Object.defineProperty(o, 'github', {
          enumerable: !0,
          get: function() {
            return r(z).default
          }
        })
        var Q = e(56)
        Object.defineProperty(o, 'googlecode', {
          enumerable: !0,
          get: function() {
            return r(Q).default
          }
        })
        var T = e(57)
        Object.defineProperty(o, 'grayscale', {
          enumerable: !0,
          get: function() {
            return r(T).default
          }
        })
        var H = e(58)
        Object.defineProperty(o, 'gruvboxDark', {
          enumerable: !0,
          get: function() {
            return r(H).default
          }
        })
        var K = e(59)
        Object.defineProperty(o, 'gruvboxLight', {
          enumerable: !0,
          get: function() {
            return r(K).default
          }
        })
        var V = e(60)
        Object.defineProperty(o, 'hopscotch', {
          enumerable: !0,
          get: function() {
            return r(V).default
          }
        })
        var J = e(61)
        Object.defineProperty(o, 'hybrid', {
          enumerable: !0,
          get: function() {
            return r(J).default
          }
        })
        var Z = e(62)
        Object.defineProperty(o, 'idea', {
          enumerable: !0,
          get: function() {
            return r(Z).default
          }
        })
        var G = e(63)
        Object.defineProperty(o, 'irBlack', {
          enumerable: !0,
          get: function() {
            return r(G).default
          }
        })
        var Y = e(64)
        Object.defineProperty(o, 'kimbieDark', {
          enumerable: !0,
          get: function() {
            return r(Y).default
          }
        })
        var $ = e(65)
        Object.defineProperty(o, 'kimbieLight', {
          enumerable: !0,
          get: function() {
            return r($).default
          }
        })
        var ll = e(66)
        Object.defineProperty(o, 'magula', {
          enumerable: !0,
          get: function() {
            return r(ll).default
          }
        })
        var ol = e(67)
        Object.defineProperty(o, 'monoBlue', {
          enumerable: !0,
          get: function() {
            return r(ol).default
          }
        })
        var el = e(68)
        Object.defineProperty(o, 'monokaiSublime', {
          enumerable: !0,
          get: function() {
            return r(el).default
          }
        })
        var rl = e(69)
        Object.defineProperty(o, 'monokai', {
          enumerable: !0,
          get: function() {
            return r(rl).default
          }
        })
        var tl = e(70)
        Object.defineProperty(o, 'obsidian', {
          enumerable: !0,
          get: function() {
            return r(tl).default
          }
        })
        var cl = e(71)
        Object.defineProperty(o, 'ocean', {
          enumerable: !0,
          get: function() {
            return r(cl).default
          }
        })
        var sl = e(72)
        Object.defineProperty(o, 'paraisoDark', {
          enumerable: !0,
          get: function() {
            return r(sl).default
          }
        })
        var al = e(73)
        Object.defineProperty(o, 'paraisoLight', {
          enumerable: !0,
          get: function() {
            return r(al).default
          }
        })
        var nl = e(74)
        Object.defineProperty(o, 'pojoaque', {
          enumerable: !0,
          get: function() {
            return r(nl).default
          }
        })
        var il = e(75)
        Object.defineProperty(o, 'purebasic', {
          enumerable: !0,
          get: function() {
            return r(il).default
          }
        })
        var hl = e(76)
        Object.defineProperty(o, 'qtcreatorDark', {
          enumerable: !0,
          get: function() {
            return r(hl).default
          }
        })
        var jl = e(77)
        Object.defineProperty(o, 'qtcreatorLight', {
          enumerable: !0,
          get: function() {
            return r(jl).default
          }
        })
        var dl = e(78)
        Object.defineProperty(o, 'railscasts', {
          enumerable: !0,
          get: function() {
            return r(dl).default
          }
        })
        var fl = e(79)
        Object.defineProperty(o, 'rainbow', {
          enumerable: !0,
          get: function() {
            return r(fl).default
          }
        })
        var bl = e(80)
        Object.defineProperty(o, 'routeros', {
          enumerable: !0,
          get: function() {
            return r(bl).default
          }
        })
        var ul = e(81)
        Object.defineProperty(o, 'schoolBook', {
          enumerable: !0,
          get: function() {
            return r(ul).default
          }
        })
        var gl = e(82)
        Object.defineProperty(o, 'solarizedDark', {
          enumerable: !0,
          get: function() {
            return r(gl).default
          }
        })
        var ml = e(83)
        Object.defineProperty(o, 'solarizedLight', {
          enumerable: !0,
          get: function() {
            return r(ml).default
          }
        })
        var pl = e(84)
        Object.defineProperty(o, 'sunburst', {
          enumerable: !0,
          get: function() {
            return r(pl).default
          }
        })
        var yl = e(85)
        Object.defineProperty(o, 'tomorrowNightBlue', {
          enumerable: !0,
          get: function() {
            return r(yl).default
          }
        })
        var vl = e(86)
        Object.defineProperty(o, 'tomorrowNightBright', {
          enumerable: !0,
          get: function() {
            return r(vl).default
          }
        })
        var kl = e(87)
        Object.defineProperty(o, 'tomorrowNightEighties', {
          enumerable: !0,
          get: function() {
            return r(kl).default
          }
        })
        var wl = e(88)
        Object.defineProperty(o, 'tomorrowNight', {
          enumerable: !0,
          get: function() {
            return r(wl).default
          }
        })
        var Al = e(89)
        Object.defineProperty(o, 'tomorrow', {
          enumerable: !0,
          get: function() {
            return r(Al).default
          }
        })
        var _l = e(90)
        Object.defineProperty(o, 'vs', {
          enumerable: !0,
          get: function() {
            return r(_l).default
          }
        })
        var Wl = e(91)
        Object.defineProperty(o, 'vs2015', {
          enumerable: !0,
          get: function() {
            return r(Wl).default
          }
        })
        var Ol = e(92)
        Object.defineProperty(o, 'xcode', {
          enumerable: !0,
          get: function() {
            return r(Ol).default
          }
        })
        var Sl = e(93)
        Object.defineProperty(o, 'xt256', {
          enumerable: !0,
          get: function() {
            return r(Sl).default
          }
        })
        var El = e(94)
        Object.defineProperty(o, 'zenburn', {
          enumerable: !0,
          get: function() {
            return r(El).default
          }
        })
      },
      16: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      17: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      18: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      19: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      20: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      21: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      22: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      23: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      24: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      25: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      26: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      27: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      28: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      29: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      30: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      31: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      32: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      33: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      34: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      35: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      36: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      37: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      38: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      39: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      40: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      41: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      42: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      43: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      44: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      45: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      46: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      468: function(l, o, e) {
        l.exports = e(469)
      },
      469: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(o, '__esModule', { value: !0 })
        var t = e(0),
          c = r(t),
          s = e(116),
          a = r(s),
          n = e(4),
          i = r(n),
          h = e(3),
          j = r(h),
          d = e(5),
          f = r(d),
          b = e(8)
        o.default = function() {
          return c.default.createElement(
            i.default,
            null,
            c.default.createElement(f.default, { id: 'emails-linux-shell' }),
            c.default.createElement(
              j.default,
              null,
              'Immer öfters kommt es vor, dass ich bestimmte Log-Datein von meinem Server laden muss. Um das ganze etwas zu vereinfachen hab ich mich mal nach einer Möglichkeit umgeschaut, die Logs direkt an meine E-Mail-Adresse zu senden.'
            ),
            c.default.createElement(
              j.default,
              null,
              'Auf sauber aufgesetzten Linux-Servern (sendmail installiert und funktionsfähig), kann mittels folgendem Kommandos eine E-Mail direkt über die Shell versendet werden:'
            ),
            c.default.createElement(
              b.Code,
              { language: 'bash', syntax: a.default },
              'mail -s "Dein Betreff" mail@domain.tld'
            ),
            c.default.createElement(
              j.default,
              null,
              'Nach der Eingabe sollte der Text-Cursor eine Zeile weiter nach unten verschoben werden, was einem die Möglichkeit bietet, nun den gewünschten Inhalt einzugeben. Sobald wir fertig sind muss zunächst die Eingabe-Taste gedrückt, dann das Feld mit ',
              c.default.createElement('b', null, 'Strg + D'),
              ' geschlossen werden.'
            ),
            c.default.createElement(
              j.default,
              null,
              'Direkt nach dem Schließen des Inhalts-Editors wird die Nachricht versendet und sollte für gewöhnlich sekunden später im Posteingang des Empfängers landen.'
            ),
            c.default.createElement(
              j.default,
              null,
              'Das ganze reicht mir jedoch nicht, da ich ja eine Datei an die Mail anhängen möchte. Hierfür fügen wir zum allgemeinen Kommando einfach noch ',
              '"',
              '-a',
              '"',
              ' sowie den Pfad zur Datei hinzu:'
            ),
            c.default.createElement(
              b.Code,
              { language: 'bash', syntax: a.default },
              'mail -s "Betreff" -a /logs/file.log mail@domain.tld'
            ),
            c.default.createElement(
              j.default,
              null,
              'Das beste an der ganzen Sachen ist ja immer noch, dass mit diesen Hilfe dieser Befehle natürlich auch Mails durch Shell-Scripte versendet werden können. Hierfür erstellen wir solches ganz einfach und setzen einen - sagen wir ... täglichen - Cronjob drauf an, welcher uns dann z.B. jeden Morgen unsere Logfiles oder ähnliches zusendet.'
            ),
            c.default.createElement(
              j.default,
              null,
              'Natürlich müsste dann auch der Inhalt der E-Mail direkt im Script definiert werden. Dies erledigen wir, indem wir ein echo an mail weitergeben:'
            ),
            c.default.createElement(
              b.Code,
              { language: 'bash', syntax: a.default },
              'echo “Deine Nachricht” | mail -s “Betreff” mail@domain.tld'
            ),
            c.default.createElement(
              j.default,
              null,
              'Wem das ganze dann noch nicht genug ist, der kann sich mittels ',
              c.default.createElement(b.InlineCode, null, 'man mail'),
              ' alle möglichen Variablen der Funktion einsehen und natürlich auch welche Bedingungen beim Definieren dieser eingehalten werden müssen.'
            )
          )
        }
      },
      47: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      48: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }), (o.default = {})
      },
      49: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      50: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      51: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      52: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      53: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      54: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      55: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      56: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      57: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      58: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      59: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      60: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      61: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      62: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      63: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      64: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      65: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      66: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      67: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      68: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      69: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      70: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      71: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      72: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      73: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      74: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      75: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      76: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      77: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      78: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      79: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      8: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.InlineCode = o.Code = void 0)
        var t = e(101),
          c = r(t),
          s = e(99),
          a = r(s),
          n = e(100),
          i = r(n),
          h = e(102),
          j = r(h),
          d = e(103),
          f = r(d),
          b = e(1),
          u = r(b),
          g = e(0),
          m = r(g),
          p = e(9),
          y = r(p),
          v = e(15),
          k = {
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
          w = (function(l) {
            function o(l) {
              ;(0, a.default)(this, o)
              var e = (0, j.default)(
                this,
                (o.__proto__ || (0, c.default)(o)).call(this, l)
              )
              if (!l.language || !l.syntax)
                throw new Error('Please define the `language` and `syntax`')
              return (0, p.registerLanguage)(l.language, l.syntax), e
            }
            return (
              (0, f.default)(o, l),
              (0, i.default)(o, [
                {
                  key: 'render',
                  value: function() {
                    return m.default.createElement(
                      y.default,
                      {
                        language: this.props.language,
                        style: v.github,
                        customStyle: k
                      },
                      this.props.children
                    )
                  }
                }
              ]),
              o
            )
          })(g.Component),
          A = function(l) {
            var o = l.children
            return m.default.createElement(
              'code',
              { className: 'jsx-1132460883' },
              o,
              m.default.createElement(u.default, {
                styleId: '1132460883',
                css: [
                  'code.jsx-1132460883{background:#f3f3f3;padding:2px 4px;border-radius:3px;font-size:0.85em;color:#3a3a3a;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, Courier New,monospace,serif;}'
                ]
              })
            )
          }
        ;(o.Code = w), (o.InlineCode = A)
      },
      80: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      81: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      82: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      83: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      84: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      85: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      86: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      87: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      88: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      89: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      9: function(l, o, e) {
        'use strict'
        function r(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.registerLanguage = void 0)
        var t = e(10),
          c = r(t),
          s = e(13),
          a = r(s)
        o.registerLanguage = a.default.registerLanguage
        o.default = (0, c.default)(a.default, {})
      },
      90: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      91: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      92: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      93: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      94: function(l, o, e) {
        'use strict'
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = {
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
      }
    },
    [468]
  ))
  return { page: comp.default }
})
