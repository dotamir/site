window.__NEXT_REGISTER_PAGE('/2015/version-two', function() {
  var comp = (module.exports = webpackJsonp(
    [3],
    {
      10: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function r(l) {
          return l.match(y)
        }
        function c(l) {
          var e = l.lines,
            o = l.startingLineNumber,
            t = l.style
          return e.map(function(l, e) {
            var r = e + o
            return m.default.createElement(
              'span',
              {
                key: 'line-' + e,
                className: 'react-syntax-highlighter-line-number',
                style: 'function' == typeof t ? t(r) : t
              },
              r + '\n'
            )
          })
        }
        function s(l) {
          var e = l.codeString,
            o = l.containerStyle,
            t = void 0 === o ? { float: 'left', paddingRight: '10px' } : o,
            r = l.numberStyle,
            s = void 0 === r ? {} : r,
            a = l.startingLineNumber
          return m.default.createElement(
            'code',
            { style: t },
            c({
              lines: e.replace(/\n$/, '').split('\n'),
              style: s,
              startingLineNumber: a
            })
          )
        }
        function a(l) {
          var e = l.children,
            o = l.lineNumber,
            t = l.lineStyle,
            r = l.className
          return {
            type: 'element',
            tagName: 'span',
            properties: {
              className: void 0 === r ? [] : r,
              style: 'function' == typeof t ? t(o) : t
            },
            children: e
          }
        }
        function n(l) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              t = 0;
            t < l.length;
            t++
          ) {
            var r = l[t]
            if ('text' === r.type) o.push(a({ children: [r], className: e }))
            else if (r.children) {
              var c = e.concat(r.properties.className)
              o = o.concat(n(r.children, c))
            }
          }
          return o
        }
        function i(l, e) {
          for (var o = n(l.value), t = [], c = -1, s = 0; s < o.length; )
            !(function() {
              var l = o[s],
                n = l.children[0].value
              r(n) &&
                (function() {
                  var r = n.split('\n')
                  r.forEach(function(n, i) {
                    var h = t.length + 1,
                      d = { type: 'text', value: n + '\n' }
                    if (0 === i) {
                      var f = o.slice(c + 1, s).concat(
                        a({
                          children: [d],
                          className: l.properties.className
                        })
                      )
                      t.push(a({ children: f, lineNumber: h, lineStyle: e }))
                    } else if (i === r.length - 1) {
                      var u =
                        o[s + 1] && o[s + 1].children && o[s + 1].children[0]
                      if (u) {
                        var j = { type: 'text', value: '' + n },
                          b = a({
                            children: [j],
                            className: l.properties.className
                          })
                        o.splice(s + 1, 0, b)
                      } else
                        t.push(
                          a({ children: [d], lineNumber: h, lineStyle: e })
                        )
                    } else
                      t.push(a({ children: [d], lineNumber: h, lineStyle: e }))
                  }),
                    (c = s)
                })(),
                s++
            })()
          if (c !== o.length - 1) {
            var i = o.slice(c + 1, o.length)
            i &&
              i.length &&
              t.push(a({ children: i, lineNumber: t.length + 1, lineStyle: e }))
          }
          return t
        }
        function h(l) {
          var e = l.rows,
            o = l.stylesheet,
            t = l.useInlineStyles
          return e.map(function(l, e) {
            return (0,
            p.default)({ node: l, stylesheet: o, useInlineStyles: t, key: 'code-segement' + e })
          })
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var d = o(6),
          f = t(d),
          u = o(11),
          j = t(u)
        e.default = function(l, e) {
          return function(o) {
            var t = o.language,
              r = o.children,
              c = o.style,
              a = void 0 === c ? e : c,
              n = o.customStyle,
              d = void 0 === n ? {} : n,
              u = o.codeTagProps,
              b = void 0 === u ? {} : u,
              g = o.useInlineStyles,
              p = void 0 === g || g,
              y = o.showLineNumbers,
              v = void 0 !== y && y,
              k = o.startingLineNumber,
              w = void 0 === k ? 1 : k,
              A = o.lineNumberContainerStyle,
              _ = o.lineNumberStyle,
              E = o.wrapLines,
              x = o.lineStyle,
              W = void 0 === x ? {} : x,
              S = o.renderer,
              O = o.PreTag,
              C = void 0 === O ? 'pre' : O,
              I = o.CodeTag,
              P = void 0 === I ? 'code' : I,
              M = o.code,
              B = void 0 === M ? (Array.isArray(r) ? r[0] : r) : M,
              N = (0, j.default)(o, [
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
            ;(E = !(!S || void 0 !== E) || E), (S = S || h)
            var D =
              t && l.getLanguage(t) ? l.highlight(t, B) : l.highlightAuto(B)
            ;(null !== D.language && 'text' !== t) ||
              (D.value = [{ type: 'text', value: B }])
            var R = a.hljs || { backgroundColor: '#fff' },
              L = p
                ? (0, f.default)({}, N, { style: (0, f.default)({}, R, d) })
                : (0, f.default)({}, N, { className: 'hljs' }),
              q = E ? i(D, W) : D.value,
              X = v
                ? m.default.createElement(s, {
                    containerStyle: A,
                    numberStyle: _,
                    startingLineNumber: w,
                    codeString: B
                  })
                : null
            return m.default.createElement(
              C,
              L,
              X,
              m.default.createElement(
                P,
                b,
                S({ rows: q, stylesheet: a, useInlineStyles: p })
              )
            )
          }
        }
        var b = o(0),
          m = t(b),
          g = o(12),
          p = t(g),
          y = /\n/g
      },
      104: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.LI = e.UL = e.OL = void 0)
        var r = o(1),
          c = t(r),
          s = o(0),
          a = t(s),
          n = function(l) {
            var e = l.children
            return a.default.createElement(
              'ol',
              { className: 'jsx-3698006301' },
              e,
              a.default.createElement(c.default, {
                styleId: '3698006301',
                css: [
                  'ol.jsx-3698006301{list-style:decimal;margin:30px 0;padding:0 0 0 22px;}'
                ]
              })
            )
          },
          i = function(l) {
            var e = l.children
            return a.default.createElement(
              'ul',
              { className: 'jsx-1299876035' },
              e,
              a.default.createElement(c.default, {
                styleId: '1299876035',
                css: [
                  'ul.jsx-1299876035{margin:30px 0;list-style:disc;padding:0 0 0 18px;}'
                ]
              })
            )
          },
          h = function(l) {
            var e = l.children,
              o = l.shallow,
              t = []
            return (
              o && t.push('shallow'),
              a.default.createElement(
                'li',
                { className: 'jsx-3704132522 ' + (t.join(' ') || '') },
                e,
                a.default.createElement(c.default, {
                  styleId: '3704132522',
                  css: [
                    'li.jsx-3704132522{margin-bottom:15px;line-height:25px;}',
                    'li.shallow.jsx-3704132522{margin-bottom:10px;}'
                  ]
                })
              )
            )
          }
        ;(e.OL = n), (e.UL = i), (e.LI = h)
      },
      107: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.Note = e.Ref = e.FootNotes = void 0)
        var r = o(1),
          c = t(r),
          s = o(0),
          a = t(s),
          n = o(3),
          i = t(n),
          h = o(98),
          d = t(h)
        ;(e.FootNotes = function(l) {
          var e = l.children
          return a.default.createElement(
            'div',
            { hidden: !0, className: 'jsx-1826157987' },
            a.default.createElement(d.default, null),
            e,
            a.default.createElement(c.default, {
              styleId: '1826157987',
              css: ['div.jsx-1826157987{display:block;}']
            })
          )
        }),
          (e.Ref = function(l) {
            var e = l.id
            return a.default.createElement(
              'a',
              { href: '#f' + e, id: 's' + e, className: 'jsx-940031118' },
              e,
              a.default.createElement(c.default, {
                styleId: '940031118',
                css: [
                  'a.jsx-940031118{top:-5px;font-size:10px;position:relative;text-decoration:none;background:#e9b6e1;color:#fff;font-weight:700;padding:1px 5px;border-radius:7px;}',
                  'a.jsx-940031118:focus{background:#000;color:#fff;outline:none;}'
                ]
              })
            )
          }),
          (e.Note = function(l) {
            var e = l.id,
              o = l.children
            return a.default.createElement(
              i.default,
              null,
              a.default.createElement(
                'a',
                { href: '#s' + e, id: 'f' + e, className: 'jsx-2215405902' },
                e
              ),
              o,
              a.default.createElement(c.default, {
                styleId: '2215405902',
                css: [
                  'a.jsx-2215405902{text-decoration:none;background:#e9b6e1;color:#fff;padding:1px 5px;border-radius:5px;margin-right:10px;}',
                  'a.jsx-2215405902:focus{background:#000;color:#fff;outline:none;}'
                ]
              })
            )
          })
      },
      11: function(l, e, o) {
        'use strict'
        ;(e.__esModule = !0),
          (e.default = function(l, e) {
            var o = {}
            for (var t in l)
              e.indexOf(t) >= 0 ||
                (Object.prototype.hasOwnProperty.call(l, t) && (o[t] = l[t]))
            return o
          })
      },
      12: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function r(l) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = arguments[2]
          return l.reduce(function(l, e) {
            return (0, d.default)({}, l, o[e])
          }, e)
        }
        function c(l) {
          return l.join(' ')
        }
        function s(l, e) {
          var o = 0
          return function(t) {
            return (
              (o += 1),
              t.map(function(t, r) {
                return a({
                  node: t,
                  stylesheet: l,
                  useInlineStyles: e,
                  key: 'code-segment-' + o + '-' + r
                })
              })
            )
          }
        }
        function a(l) {
          var e = l.node,
            o = l.stylesheet,
            t = l.style,
            a = void 0 === t ? {} : t,
            n = l.useInlineStyles,
            h = l.key,
            f = e.properties,
            j = e.type,
            b = e.tagName,
            m = e.value
          if ('text' === j) return m
          if (b) {
            var g = s(o, n),
              p = n
                ? { style: r(f.className, (0, i.default)({}, f.style, a), o) }
                : { className: c(f.className) },
              y = g(e.children)
            return u.default.createElement(b, (0, d.default)({ key: h }, p), y)
          }
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var n = o(6),
          i = t(n),
          h = o(7),
          d = t(h)
        ;(e.createStyleObject = r),
          (e.createClassNameString = c),
          (e.createChildren = s),
          (e.default = a)
        var f = o(0),
          u = t(f)
      },
      13: function(l, e, o) {
        'use strict'
        function t() {}
        function r(l, e) {
          var o,
            t,
            r,
            c,
            s = e || {},
            n = s.prefix,
            i = s.subset || W,
            d = i.length,
            f = -1
          if (((null !== n && void 0 !== n) || (n = p), 'string' != typeof l))
            throw new Error('Expected `string` for value, got `' + l + '`')
          for (t = h({}), o = h({}); ++f < d; )
            (c = i[f]),
              u(c) &&
                ((r = h(a(c, l, !1, n))),
                (r.language = c),
                r.relevance > t.relevance && (t = r),
                r.relevance > o.relevance && ((t = o), (o = r)))
          return t.language && (o.secondBest = t), o
        }
        function c(l, e, o) {
          var t = o || {},
            r = t.prefix
          return (null !== r && void 0 !== r) || (r = p), h(a(l, e, !0, r))
        }
        function s(l, e) {
          var o = (S[l] = e(b)),
            t = o.aliases,
            r = t && t.length,
            c = -1
          for (W.push(l); ++c < r; ) O[t[c]] = l
        }
        function a(l, e, o, t, c) {
          function s(l, e) {
            var o, t, r
            if (((T += l), void 0 === e)) return b(h(), B), 0
            if ((o = O(e, P)))
              return b(h(), B), n(o, e), o.returnBegin ? 0 : e.length
            if ((t = W(P, e))) {
              ;(r = P), r.returnEnd || r.excludeEnd || (T += e), b(h(), B)
              do {
                P.className && C(), (F += P.relevance), (P = P.parent)
              } while (P !== t.parent)
              return (
                r.excludeEnd && m(e, B),
                (T = k),
                t.starts && n(t.starts, k),
                r.returnEnd ? 0 : e.length
              )
            }
            if (A(e, P))
              throw new Error(
                'Illegal lexeme "' +
                  e +
                  '" for mode "' +
                  (P.className || '<unnamed>') +
                  '"'
              )
            return (T += e), e.length || 1
          }
          function n(l, e) {
            var o
            l.className && (o = v(l.className, [])),
              l.returnBegin
                ? (T = k)
                : l.excludeBegin ? (m(e, B), (T = k)) : (T = e),
              o && (B.push(o), X.push(B), (B = o.children)),
              (P = Object.create(l, { parent: { value: P } }))
          }
          function h() {
            var l = void 0 === P.subLanguage ? j() : f()
            return (T = k), l
          }
          function f() {
            var l,
              e = 'string' == typeof P.subLanguage
            return e && !S[P.subLanguage]
              ? m(T, [])
              : ((l = e
                  ? a(P.subLanguage, T, !0, t, q[P.subLanguage])
                  : r(T, {
                      subset: P.subLanguage.length ? P.subLanguage : void 0,
                      prefix: t
                    })),
                P.relevance > 0 && (F += l.relevance),
                e && (q[P.subLanguage] = l.top),
                [v(l.language, l.value, !0)])
          }
          function j() {
            var l,
              e,
              o,
              t,
              r = []
            if (!P.keywords) return m(T, r)
            for (l = 0, P.lexemesRe.lastIndex = 0, e = P.lexemesRe.exec(T); e; )
              m(T.substring(l, e.index), r),
                (t = w(P, e)),
                t
                  ? ((F += t[1]),
                    (o = v(t[0], [])),
                    r.push(o),
                    m(e[0], o.children))
                  : m(e[0], r),
                (l = P.lexemesRe.lastIndex),
                (e = P.lexemesRe.exec(T))
            return m(T.substr(l), r), r
          }
          function b(l, e) {
            for (var o, t = l.length, r = -1; ++r < t; )
              (o = l[r]), o.type === E ? m(o.value, e) : e.push(o)
          }
          function m(l, e) {
            var o
            return (
              l &&
                ((o = e[e.length - 1]),
                o && o.type === E ? (o.value += l) : e.push(p(l))),
              e
            )
          }
          function p(l) {
            return { type: E, value: l }
          }
          function v(l, e, o) {
            return {
              type: _,
              tagName: x,
              properties: { className: [(o ? k : t) + l] },
              children: e
            }
          }
          function w(l, e) {
            var o = e[0]
            return (
              I[y] && (o = o.toLowerCase()),
              g.call(l.keywords, o) && l.keywords[o]
            )
          }
          function A(l, e) {
            return !o && d(e.illegalRe, l)
          }
          function W(l, e) {
            if (d(l.endRe, e)) {
              for (; l.endsParent && l.parent; ) l = l.parent
              return l
            }
            if (l.endsWithParent) return W(l.parent, e)
          }
          function O(l, e) {
            for (var o = e.contains, t = o.length, r = -1; ++r < t; )
              if (d(o[r].beginRe, l)) return o[r]
          }
          function C() {
            B = X.pop() || L
          }
          var I,
            P,
            M,
            B,
            N,
            D,
            R,
            L,
            q = {},
            X = [],
            T = k,
            F = 0
          if ('string' != typeof l)
            throw new Error('Expected `string` for name, got `' + l + '`')
          if ('string' != typeof e)
            throw new Error('Expected `string` for value, got `' + e + '`')
          if (((I = u(l)), (M = P = c || I), (B = L = []), !I))
            throw new Error('Unknown language: `' + l + '` is not registered')
          i(I)
          try {
            for (
              N = P.terminators.lastIndex = 0, R = P.terminators.exec(e);
              R;

            )
              (D = s(e.substring(N, R.index), R[0])),
                (N = P.terminators.lastIndex = R.index + D),
                (R = P.terminators.exec(e))
            for (s(e.substr(N)), M = P; M.parent; )
              M.className && C(), (M = M.parent)
            return { relevance: F, value: B, language: l, top: P }
          } catch (l) {
            if (-1 === l.message.indexOf('Illegal')) throw l
            return { relevance: 0, value: m(e, []) }
          }
        }
        function n(l) {
          return (
            l.variants &&
              !l[v] &&
              (l[v] = l.variants.map(function(e) {
                return m(l, { variants: null }, e)
              })),
            l[v] || (l.endsWithParent && [m(l)]) || [l]
          )
        }
        function i(l) {
          function e(r, c) {
            function s(e, o) {
              var t, r, c, s
              for (
                l[y] && (o = o.toLowerCase()),
                  t = o.split(w),
                  s = t.length,
                  c = -1;
                ++c < s;

              )
                (r = t[c].split(A)), (i[r[0]] = [e, r[1] ? Number(r[1]) : 1])
            }
            var a,
              i = {}
            r.compiled ||
              ((r.compiled = !0),
              (r.keywords = r.keywords || r.beginKeywords),
              r.keywords &&
                ('string' == typeof r.keywords
                  ? s('keyword', r.keywords)
                  : Object.keys(r.keywords).forEach(function(l) {
                      s(l, r.keywords[l])
                    }),
                (r.keywords = i)),
              (r.lexemesRe = o(r.lexemes || /\w+/, !0)),
              c &&
                (r.beginKeywords &&
                  (r.begin =
                    '\\b(' + r.beginKeywords.split(w).join(A) + ')\\b'),
                r.begin || (r.begin = /\B|\b/),
                (r.beginRe = o(r.begin)),
                r.end || r.endsWithParent || (r.end = /\B|\b/),
                r.end && (r.endRe = o(r.end)),
                (r.terminatorEnd = t(r.end) || k),
                r.endsWithParent &&
                  c.terminatorEnd &&
                  (r.terminatorEnd += (r.end ? A : k) + c.terminatorEnd)),
              r.illegal && (r.illegalRe = o(r.illegal)),
              void 0 === r.relevance && (r.relevance = 1),
              r.contains || (r.contains = []),
              (r.contains = Array.prototype.concat.apply(
                [],
                r.contains.map(function(l) {
                  return n('self' === l ? r : l)
                })
              )),
              r.contains.forEach(function(l) {
                e(l, r)
              }),
              r.starts && e(r.starts, c),
              (a = r.contains
                .map(function(l) {
                  return l.beginKeywords ? '\\.?(' + l.begin + ')\\.?' : l.begin
                })
                .concat([r.terminatorEnd, r.illegal])
                .map(t)
                .filter(Boolean)),
              (r.terminators = a.length ? o(a.join(A), !0) : { exec: f }))
          }
          function o(e, o) {
            return new RegExp(t(e), 'm' + (l[y] ? 'i' : '') + (o ? 'g' : ''))
          }
          function t(l) {
            return (l && l.source) || l
          }
          e(l)
        }
        function h(l) {
          return {
            relevance: l.relevance || 0,
            language: l.language || null,
            value: l.value || []
          }
        }
        function d(l, e) {
          var o = l && l.exec(e)
          return o && 0 === o.index
        }
        function f() {
          return null
        }
        function u(l) {
          return (l = l.toLowerCase()), S[l] || S[O[l]]
        }
        var j = o(14)
        t.prototype = j
        var b = new t()
        ;(l.exports = b),
          (b.highlight = c),
          (b.highlightAuto = r),
          (b.registerLanguage = s),
          (b.getLanguage = u)
        var m = j.inherit,
          g = {}.hasOwnProperty,
          p = 'hljs-',
          y = 'case_insensitive',
          v = 'cached_variants',
          k = '',
          w = ' ',
          A = '|',
          _ = 'element',
          E = 'text',
          x = 'span',
          W = [],
          S = {},
          O = {}
      },
      14: function(l, e, o) {
        !(function(l) {
          ;('object' == typeof window && window) ||
            ('object' == typeof self && self)
          l(e)
        })(function(l) {
          function e(l) {
            return l
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          }
          function o(l) {
            return l.nodeName.toLowerCase()
          }
          function t(l, e) {
            var o = l && l.exec(e)
            return o && 0 === o.index
          }
          function r(l) {
            return x.test(l)
          }
          function c(l) {
            var e,
              o,
              t,
              c,
              s = l.className + ' '
            if (
              ((s += l.parentNode ? l.parentNode.className : ''),
              (o = W.exec(s)))
            )
              return k(o[1]) ? o[1] : 'no-highlight'
            for (s = s.split(/\s+/), e = 0, t = s.length; e < t; e++)
              if (((c = s[e]), r(c) || k(c))) return c
          }
          function s(l) {
            var e,
              o = {},
              t = Array.prototype.slice.call(arguments, 1)
            for (e in l) o[e] = l[e]
            return (
              t.forEach(function(l) {
                for (e in l) o[e] = l[e]
              }),
              o
            )
          }
          function a(l) {
            var e = []
            return (
              (function l(t, r) {
                for (var c = t.firstChild; c; c = c.nextSibling)
                  3 === c.nodeType
                    ? (r += c.nodeValue.length)
                    : 1 === c.nodeType &&
                      (e.push({ event: 'start', offset: r, node: c }),
                      (r = l(c, r)),
                      o(c).match(/br|hr|img|input/) ||
                        e.push({ event: 'stop', offset: r, node: c }))
                return r
              })(l, 0),
              e
            )
          }
          function n(l, t, r) {
            function c() {
              return l.length && t.length
                ? l[0].offset !== t[0].offset
                  ? l[0].offset < t[0].offset ? l : t
                  : 'start' === t[0].event ? l : t
                : l.length ? l : t
            }
            function s(l) {
              function t(l) {
                return (
                  ' ' +
                  l.nodeName +
                  '="' +
                  e(l.value).replace('"', '&quot;') +
                  '"'
                )
              }
              h += '<' + o(l) + w.map.call(l.attributes, t).join('') + '>'
            }
            function a(l) {
              h += '</' + o(l) + '>'
            }
            function n(l) {
              ;('start' === l.event ? s : a)(l.node)
            }
            for (var i = 0, h = '', d = []; l.length || t.length; ) {
              var f = c()
              if (
                ((h += e(r.substring(i, f[0].offset))),
                (i = f[0].offset),
                f === l)
              ) {
                d.reverse().forEach(a)
                do {
                  n(f.splice(0, 1)[0]), (f = c())
                } while (f === l && f.length && f[0].offset === i)
                d.reverse().forEach(s)
              } else
                'start' === f[0].event ? d.push(f[0].node) : d.pop(),
                  n(f.splice(0, 1)[0])
            }
            return h + e(r.substr(i))
          }
          function i(l) {
            return (
              l.variants &&
                !l.cached_variants &&
                (l.cached_variants = l.variants.map(function(e) {
                  return s(l, { variants: null }, e)
                })),
              l.cached_variants || (l.endsWithParent && [s(l)]) || [l]
            )
          }
          function h(l) {
            function e(l) {
              return (l && l.source) || l
            }
            function o(o, t) {
              return new RegExp(
                e(o),
                'm' + (l.case_insensitive ? 'i' : '') + (t ? 'g' : '')
              )
            }
            function t(r, c) {
              if (!r.compiled) {
                if (
                  ((r.compiled = !0),
                  (r.keywords = r.keywords || r.beginKeywords),
                  r.keywords)
                ) {
                  var s = {},
                    a = function(e, o) {
                      l.case_insensitive && (o = o.toLowerCase()),
                        o.split(' ').forEach(function(l) {
                          var o = l.split('|')
                          s[o[0]] = [e, o[1] ? Number(o[1]) : 1]
                        })
                    }
                  'string' == typeof r.keywords
                    ? a('keyword', r.keywords)
                    : A(r.keywords).forEach(function(l) {
                        a(l, r.keywords[l])
                      }),
                    (r.keywords = s)
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
                    (r.terminator_end = e(r.end) || ''),
                    r.endsWithParent &&
                      c.terminator_end &&
                      (r.terminator_end +=
                        (r.end ? '|' : '') + c.terminator_end)),
                  r.illegal && (r.illegalRe = o(r.illegal)),
                  null == r.relevance && (r.relevance = 1),
                  r.contains || (r.contains = []),
                  (r.contains = Array.prototype.concat.apply(
                    [],
                    r.contains.map(function(l) {
                      return i('self' === l ? r : l)
                    })
                  )),
                  r.contains.forEach(function(l) {
                    t(l, r)
                  }),
                  r.starts && t(r.starts, c)
                var n = r.contains
                  .map(function(l) {
                    return l.beginKeywords
                      ? '\\.?(' + l.begin + ')\\.?'
                      : l.begin
                  })
                  .concat([r.terminator_end, r.illegal])
                  .map(e)
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
            t(l)
          }
          function d(l, o, r, c) {
            function s(l, e) {
              var o, r
              for (o = 0, r = e.contains.length; o < r; o++)
                if (t(e.contains[o].beginRe, l)) return e.contains[o]
            }
            function a(l, e) {
              if (t(l.endRe, e)) {
                for (; l.endsParent && l.parent; ) l = l.parent
                return l
              }
              if (l.endsWithParent) return a(l.parent, e)
            }
            function n(l, e) {
              return !r && t(e.illegalRe, l)
            }
            function i(l, e) {
              var o = y.case_insensitive ? e[0].toLowerCase() : e[0]
              return l.keywords.hasOwnProperty(o) && l.keywords[o]
            }
            function u(l, e, o, t) {
              var r = t ? '' : C.classPrefix,
                c = '<span class="' + r,
                s = o ? '' : O
              return (c += l + '">') + e + s
            }
            function j() {
              var l, o, t, r
              if (!w.keywords) return e(x)
              for (
                r = '',
                  o = 0,
                  w.lexemesRe.lastIndex = 0,
                  t = w.lexemesRe.exec(x);
                t;

              )
                (r += e(x.substring(o, t.index))),
                  (l = i(w, t)),
                  l ? ((W += l[1]), (r += u(l[0], e(t[0])))) : (r += e(t[0])),
                  (o = w.lexemesRe.lastIndex),
                  (t = w.lexemesRe.exec(x))
              return r + e(x.substr(o))
            }
            function b() {
              var l = 'string' == typeof w.subLanguage
              if (l && !_[w.subLanguage]) return e(x)
              var o = l
                ? d(w.subLanguage, x, !0, A[w.subLanguage])
                : f(x, w.subLanguage.length ? w.subLanguage : void 0)
              return (
                w.relevance > 0 && (W += o.relevance),
                l && (A[w.subLanguage] = o.top),
                u(o.language, o.value, !1, !0)
              )
            }
            function m() {
              ;(E += null != w.subLanguage ? b() : j()), (x = '')
            }
            function g(l) {
              ;(E += l.className ? u(l.className, '', !0) : ''),
                (w = Object.create(l, { parent: { value: w } }))
            }
            function p(l, e) {
              if (((x += l), null == e)) return m(), 0
              var o = s(e, w)
              if (o)
                return (
                  o.skip
                    ? (x += e)
                    : (o.excludeBegin && (x += e),
                      m(),
                      o.returnBegin || o.excludeBegin || (x = e)),
                  g(o, e),
                  o.returnBegin ? 0 : e.length
                )
              var t = a(w, e)
              if (t) {
                var r = w
                r.skip
                  ? (x += e)
                  : (r.returnEnd || r.excludeEnd || (x += e),
                    m(),
                    r.excludeEnd && (x = e))
                do {
                  w.className && (E += O),
                    w.skip || (W += w.relevance),
                    (w = w.parent)
                } while (w !== t.parent)
                return t.starts && g(t.starts, ''), r.returnEnd ? 0 : e.length
              }
              if (n(e, w))
                throw new Error(
                  'Illegal lexeme "' +
                    e +
                    '" for mode "' +
                    (w.className || '<unnamed>') +
                    '"'
                )
              return (x += e), e.length || 1
            }
            var y = k(l)
            if (!y) throw new Error('Unknown language: "' + l + '"')
            h(y)
            var v,
              w = c || y,
              A = {},
              E = ''
            for (v = w; v !== y; v = v.parent)
              v.className && (E = u(v.className, '', !0) + E)
            var x = '',
              W = 0
            try {
              for (var S, I, P = 0; ; ) {
                if (
                  ((w.terminators.lastIndex = P), !(S = w.terminators.exec(o)))
                )
                  break
                ;(I = p(o.substring(P, S.index), S[0])), (P = S.index + I)
              }
              for (p(o.substr(P)), v = w; v.parent; v = v.parent)
                v.className && (E += O)
              return { relevance: W, value: E, language: l, top: w }
            } catch (l) {
              if (l.message && -1 !== l.message.indexOf('Illegal'))
                return { relevance: 0, value: e(o) }
              throw l
            }
          }
          function f(l, o) {
            o = o || C.languages || A(_)
            var t = { relevance: 0, value: e(l) },
              r = t
            return (
              o.filter(k).forEach(function(e) {
                var o = d(e, l, !1)
                ;(o.language = e),
                  o.relevance > r.relevance && (r = o),
                  o.relevance > t.relevance && ((r = t), (t = o))
              }),
              r.language && (t.second_best = r),
              t
            )
          }
          function u(l) {
            return C.tabReplace || C.useBR
              ? l.replace(S, function(l, e) {
                  return C.useBR && '\n' === l
                    ? '<br>'
                    : C.tabReplace ? e.replace(/\t/g, C.tabReplace) : ''
                })
              : l
          }
          function j(l, e, o) {
            var t = e ? E[e] : o,
              r = [l.trim()]
            return (
              l.match(/\bhljs\b/) || r.push('hljs'),
              -1 === l.indexOf(t) && r.push(t),
              r.join(' ').trim()
            )
          }
          function b(l) {
            var e,
              o,
              t,
              s,
              i,
              h = c(l)
            r(h) ||
              (C.useBR
                ? ((e = document.createElementNS(
                    'http://www.w3.org/1999/xhtml',
                    'div'
                  )),
                  (e.innerHTML = l.innerHTML
                    .replace(/\n/g, '')
                    .replace(/<br[ \/]*>/g, '\n')))
                : (e = l),
              (i = e.textContent),
              (t = h ? d(h, i, !0) : f(i)),
              (o = a(e)),
              o.length &&
                ((s = document.createElementNS(
                  'http://www.w3.org/1999/xhtml',
                  'div'
                )),
                (s.innerHTML = t.value),
                (t.value = n(o, a(s), i))),
              (t.value = u(t.value)),
              (l.innerHTML = t.value),
              (l.className = j(l.className, h, t.language)),
              (l.result = { language: t.language, re: t.relevance }),
              t.second_best &&
                (l.second_best = {
                  language: t.second_best.language,
                  re: t.second_best.relevance
                }))
          }
          function m(l) {
            C = s(C, l)
          }
          function g() {
            if (!g.called) {
              g.called = !0
              var l = document.querySelectorAll('pre code')
              w.forEach.call(l, b)
            }
          }
          function p() {
            addEventListener('DOMContentLoaded', g, !1),
              addEventListener('load', g, !1)
          }
          function y(e, o) {
            var t = (_[e] = o(l))
            t.aliases &&
              t.aliases.forEach(function(l) {
                E[l] = e
              })
          }
          function v() {
            return A(_)
          }
          function k(l) {
            return (l = (l || '').toLowerCase()), _[l] || _[E[l]]
          }
          var w = [],
            A = Object.keys,
            _ = {},
            E = {},
            x = /^(no-?highlight|plain|text)$/i,
            W = /\blang(?:uage)?-([\w-]+)\b/i,
            S = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            O = '</span>',
            C = {
              classPrefix: 'hljs-',
              tabReplace: null,
              useBR: !1,
              languages: void 0
            }
          return (
            (l.highlight = d),
            (l.highlightAuto = f),
            (l.fixMarkup = u),
            (l.highlightBlock = b),
            (l.configure = m),
            (l.initHighlighting = g),
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
            (l.COMMENT = function(e, o, t) {
              var r = l.inherit(
                { className: 'comment', begin: e, end: o, contains: [] },
                t || {}
              )
              return (
                r.contains.push(l.PHRASAL_WORDS_MODE),
                r.contains.push({
                  className: 'doctag',
                  begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                  relevance: 0
                }),
                r
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
      15: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = o(16)
        Object.defineProperty(e, 'agate', {
          enumerable: !0,
          get: function() {
            return t(r).default
          }
        })
        var c = o(17)
        Object.defineProperty(e, 'androidstudio', {
          enumerable: !0,
          get: function() {
            return t(c).default
          }
        })
        var s = o(18)
        Object.defineProperty(e, 'arduinoLight', {
          enumerable: !0,
          get: function() {
            return t(s).default
          }
        })
        var a = o(19)
        Object.defineProperty(e, 'arta', {
          enumerable: !0,
          get: function() {
            return t(a).default
          }
        })
        var n = o(20)
        Object.defineProperty(e, 'ascetic', {
          enumerable: !0,
          get: function() {
            return t(n).default
          }
        })
        var i = o(21)
        Object.defineProperty(e, 'atelierCaveDark', {
          enumerable: !0,
          get: function() {
            return t(i).default
          }
        })
        var h = o(22)
        Object.defineProperty(e, 'atelierCaveLight', {
          enumerable: !0,
          get: function() {
            return t(h).default
          }
        })
        var d = o(23)
        Object.defineProperty(e, 'atelierDuneDark', {
          enumerable: !0,
          get: function() {
            return t(d).default
          }
        })
        var f = o(24)
        Object.defineProperty(e, 'atelierDuneLight', {
          enumerable: !0,
          get: function() {
            return t(f).default
          }
        })
        var u = o(25)
        Object.defineProperty(e, 'atelierEstuaryDark', {
          enumerable: !0,
          get: function() {
            return t(u).default
          }
        })
        var j = o(26)
        Object.defineProperty(e, 'atelierEstuaryLight', {
          enumerable: !0,
          get: function() {
            return t(j).default
          }
        })
        var b = o(27)
        Object.defineProperty(e, 'atelierForestDark', {
          enumerable: !0,
          get: function() {
            return t(b).default
          }
        })
        var m = o(28)
        Object.defineProperty(e, 'atelierForestLight', {
          enumerable: !0,
          get: function() {
            return t(m).default
          }
        })
        var g = o(29)
        Object.defineProperty(e, 'atelierHeathDark', {
          enumerable: !0,
          get: function() {
            return t(g).default
          }
        })
        var p = o(30)
        Object.defineProperty(e, 'atelierHeathLight', {
          enumerable: !0,
          get: function() {
            return t(p).default
          }
        })
        var y = o(31)
        Object.defineProperty(e, 'atelierLakesideDark', {
          enumerable: !0,
          get: function() {
            return t(y).default
          }
        })
        var v = o(32)
        Object.defineProperty(e, 'atelierLakesideLight', {
          enumerable: !0,
          get: function() {
            return t(v).default
          }
        })
        var k = o(33)
        Object.defineProperty(e, 'atelierPlateauDark', {
          enumerable: !0,
          get: function() {
            return t(k).default
          }
        })
        var w = o(34)
        Object.defineProperty(e, 'atelierPlateauLight', {
          enumerable: !0,
          get: function() {
            return t(w).default
          }
        })
        var A = o(35)
        Object.defineProperty(e, 'atelierSavannaDark', {
          enumerable: !0,
          get: function() {
            return t(A).default
          }
        })
        var _ = o(36)
        Object.defineProperty(e, 'atelierSavannaLight', {
          enumerable: !0,
          get: function() {
            return t(_).default
          }
        })
        var E = o(37)
        Object.defineProperty(e, 'atelierSeasideDark', {
          enumerable: !0,
          get: function() {
            return t(E).default
          }
        })
        var x = o(38)
        Object.defineProperty(e, 'atelierSeasideLight', {
          enumerable: !0,
          get: function() {
            return t(x).default
          }
        })
        var W = o(39)
        Object.defineProperty(e, 'atelierSulphurpoolDark', {
          enumerable: !0,
          get: function() {
            return t(W).default
          }
        })
        var S = o(40)
        Object.defineProperty(e, 'atelierSulphurpoolLight', {
          enumerable: !0,
          get: function() {
            return t(S).default
          }
        })
        var O = o(41)
        Object.defineProperty(e, 'atomOneDark', {
          enumerable: !0,
          get: function() {
            return t(O).default
          }
        })
        var C = o(42)
        Object.defineProperty(e, 'atomOneLight', {
          enumerable: !0,
          get: function() {
            return t(C).default
          }
        })
        var I = o(43)
        Object.defineProperty(e, 'brownPaper', {
          enumerable: !0,
          get: function() {
            return t(I).default
          }
        })
        var P = o(44)
        Object.defineProperty(e, 'codepenEmbed', {
          enumerable: !0,
          get: function() {
            return t(P).default
          }
        })
        var M = o(45)
        Object.defineProperty(e, 'colorBrewer', {
          enumerable: !0,
          get: function() {
            return t(M).default
          }
        })
        var B = o(46)
        Object.defineProperty(e, 'darcula', {
          enumerable: !0,
          get: function() {
            return t(B).default
          }
        })
        var N = o(47)
        Object.defineProperty(e, 'dark', {
          enumerable: !0,
          get: function() {
            return t(N).default
          }
        })
        var D = o(48)
        Object.defineProperty(e, 'darkula', {
          enumerable: !0,
          get: function() {
            return t(D).default
          }
        })
        var R = o(49)
        Object.defineProperty(e, 'defaultStyle', {
          enumerable: !0,
          get: function() {
            return t(R).default
          }
        })
        var L = o(50)
        Object.defineProperty(e, 'docco', {
          enumerable: !0,
          get: function() {
            return t(L).default
          }
        })
        var q = o(51)
        Object.defineProperty(e, 'dracula', {
          enumerable: !0,
          get: function() {
            return t(q).default
          }
        })
        var X = o(52)
        Object.defineProperty(e, 'far', {
          enumerable: !0,
          get: function() {
            return t(X).default
          }
        })
        var T = o(53)
        Object.defineProperty(e, 'foundation', {
          enumerable: !0,
          get: function() {
            return t(T).default
          }
        })
        var F = o(54)
        Object.defineProperty(e, 'githubGist', {
          enumerable: !0,
          get: function() {
            return t(F).default
          }
        })
        var U = o(55)
        Object.defineProperty(e, 'github', {
          enumerable: !0,
          get: function() {
            return t(U).default
          }
        })
        var Q = o(56)
        Object.defineProperty(e, 'googlecode', {
          enumerable: !0,
          get: function() {
            return t(Q).default
          }
        })
        var H = o(57)
        Object.defineProperty(e, 'grayscale', {
          enumerable: !0,
          get: function() {
            return t(H).default
          }
        })
        var K = o(58)
        Object.defineProperty(e, 'gruvboxDark', {
          enumerable: !0,
          get: function() {
            return t(K).default
          }
        })
        var z = o(59)
        Object.defineProperty(e, 'gruvboxLight', {
          enumerable: !0,
          get: function() {
            return t(z).default
          }
        })
        var V = o(60)
        Object.defineProperty(e, 'hopscotch', {
          enumerable: !0,
          get: function() {
            return t(V).default
          }
        })
        var Y = o(61)
        Object.defineProperty(e, 'hybrid', {
          enumerable: !0,
          get: function() {
            return t(Y).default
          }
        })
        var J = o(62)
        Object.defineProperty(e, 'idea', {
          enumerable: !0,
          get: function() {
            return t(J).default
          }
        })
        var G = o(63)
        Object.defineProperty(e, 'irBlack', {
          enumerable: !0,
          get: function() {
            return t(G).default
          }
        })
        var Z = o(64)
        Object.defineProperty(e, 'kimbieDark', {
          enumerable: !0,
          get: function() {
            return t(Z).default
          }
        })
        var $ = o(65)
        Object.defineProperty(e, 'kimbieLight', {
          enumerable: !0,
          get: function() {
            return t($).default
          }
        })
        var ll = o(66)
        Object.defineProperty(e, 'magula', {
          enumerable: !0,
          get: function() {
            return t(ll).default
          }
        })
        var el = o(67)
        Object.defineProperty(e, 'monoBlue', {
          enumerable: !0,
          get: function() {
            return t(el).default
          }
        })
        var ol = o(68)
        Object.defineProperty(e, 'monokaiSublime', {
          enumerable: !0,
          get: function() {
            return t(ol).default
          }
        })
        var tl = o(69)
        Object.defineProperty(e, 'monokai', {
          enumerable: !0,
          get: function() {
            return t(tl).default
          }
        })
        var rl = o(70)
        Object.defineProperty(e, 'obsidian', {
          enumerable: !0,
          get: function() {
            return t(rl).default
          }
        })
        var cl = o(71)
        Object.defineProperty(e, 'ocean', {
          enumerable: !0,
          get: function() {
            return t(cl).default
          }
        })
        var sl = o(72)
        Object.defineProperty(e, 'paraisoDark', {
          enumerable: !0,
          get: function() {
            return t(sl).default
          }
        })
        var al = o(73)
        Object.defineProperty(e, 'paraisoLight', {
          enumerable: !0,
          get: function() {
            return t(al).default
          }
        })
        var nl = o(74)
        Object.defineProperty(e, 'pojoaque', {
          enumerable: !0,
          get: function() {
            return t(nl).default
          }
        })
        var il = o(75)
        Object.defineProperty(e, 'purebasic', {
          enumerable: !0,
          get: function() {
            return t(il).default
          }
        })
        var hl = o(76)
        Object.defineProperty(e, 'qtcreatorDark', {
          enumerable: !0,
          get: function() {
            return t(hl).default
          }
        })
        var dl = o(77)
        Object.defineProperty(e, 'qtcreatorLight', {
          enumerable: !0,
          get: function() {
            return t(dl).default
          }
        })
        var fl = o(78)
        Object.defineProperty(e, 'railscasts', {
          enumerable: !0,
          get: function() {
            return t(fl).default
          }
        })
        var ul = o(79)
        Object.defineProperty(e, 'rainbow', {
          enumerable: !0,
          get: function() {
            return t(ul).default
          }
        })
        var jl = o(80)
        Object.defineProperty(e, 'routeros', {
          enumerable: !0,
          get: function() {
            return t(jl).default
          }
        })
        var bl = o(81)
        Object.defineProperty(e, 'schoolBook', {
          enumerable: !0,
          get: function() {
            return t(bl).default
          }
        })
        var ml = o(82)
        Object.defineProperty(e, 'solarizedDark', {
          enumerable: !0,
          get: function() {
            return t(ml).default
          }
        })
        var gl = o(83)
        Object.defineProperty(e, 'solarizedLight', {
          enumerable: !0,
          get: function() {
            return t(gl).default
          }
        })
        var pl = o(84)
        Object.defineProperty(e, 'sunburst', {
          enumerable: !0,
          get: function() {
            return t(pl).default
          }
        })
        var yl = o(85)
        Object.defineProperty(e, 'tomorrowNightBlue', {
          enumerable: !0,
          get: function() {
            return t(yl).default
          }
        })
        var vl = o(86)
        Object.defineProperty(e, 'tomorrowNightBright', {
          enumerable: !0,
          get: function() {
            return t(vl).default
          }
        })
        var kl = o(87)
        Object.defineProperty(e, 'tomorrowNightEighties', {
          enumerable: !0,
          get: function() {
            return t(kl).default
          }
        })
        var wl = o(88)
        Object.defineProperty(e, 'tomorrowNight', {
          enumerable: !0,
          get: function() {
            return t(wl).default
          }
        })
        var Al = o(89)
        Object.defineProperty(e, 'tomorrow', {
          enumerable: !0,
          get: function() {
            return t(Al).default
          }
        })
        var _l = o(90)
        Object.defineProperty(e, 'vs', {
          enumerable: !0,
          get: function() {
            return t(_l).default
          }
        })
        var El = o(91)
        Object.defineProperty(e, 'vs2015', {
          enumerable: !0,
          get: function() {
            return t(El).default
          }
        })
        var xl = o(92)
        Object.defineProperty(e, 'xcode', {
          enumerable: !0,
          get: function() {
            return t(xl).default
          }
        })
        var Wl = o(93)
        Object.defineProperty(e, 'xt256', {
          enumerable: !0,
          get: function() {
            return t(Wl).default
          }
        })
        var Sl = o(94)
        Object.defineProperty(e, 'zenburn', {
          enumerable: !0,
          get: function() {
            return t(Sl).default
          }
        })
      },
      16: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      17: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      18: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      19: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      20: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      21: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      22: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      23: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      24: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      25: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      26: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      27: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      28: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      29: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      30: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      31: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      32: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      33: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      34: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      35: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      36: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      37: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      38: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      39: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      40: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      41: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      42: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      43: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      44: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      45: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      46: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      47: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      48: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = {})
      },
      49: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      50: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      51: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      52: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      53: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      54: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      55: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      56: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      565: function(l, e, o) {
        l.exports = o(566)
      },
      566: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = o(0),
          c = t(r),
          s = o(4),
          a = t(s),
          n = o(3),
          i = t(n),
          h = o(5),
          d = t(h),
          f = o(95),
          u = t(f),
          j = o(96),
          b = o(107),
          m = o(108),
          g = o(8),
          p = o(104),
          y = o(567)
        e.default = function() {
          return c.default.createElement(
            a.default,
            null,
            c.default.createElement(d.default, { id: 'version-two' }),
            c.default.createElement(
              i.default,
              null,
              'Time passes by so fast. It',
              "'",
              's been about 3 months since my first post on my new blog. At that time, I just wanted to put a MVP out there, to be able to publish my posts. But I',
              "'",
              've also immediately promised that I',
              "'",
              'll make sure to release a self-made look for it as soon as I will find some time to create one.'
            ),
            c.default.createElement(
              i.default,
              null,
              'And now, around',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'https://github.com/leo/site/commits/master' },
                '120 commits'
              ),
              ' ',
              'later, I',
              "'",
              'm very proud to present you the first design that I made completely by my self. You won',
              "'",
              't believe it, but a huge amount of decisions were made in this short time. I found out that blogging is a really great way to get something out there without needing to set up an additional environment (like it needs to be done for a coded project, for example). If something important comes to my mind, I just need to open',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'https://ia.net/writer/mac/' },
                'iA Writer'
              ),
              ' ',
              'and let it flow.'
            ),
            c.default.createElement(
              i.default,
              null,
              'When I moved to from Tumblr to GitHub Pages a few months ago, I did it because I was annoyed by how less the app actually cares about performance. If you take a look around, you',
              "'",
              'll notice that there are many other web developers or designers who care about this topic and therefore switched to a static deployment. Since I did that, I often heard and read that this method takes a price.'
            ),
            c.default.createElement(
              i.default,
              null,
              'And yes, of course it does. It',
              "'",
              's not possible for me to create flexible algorithms for sorting posts or adding comments, but that',
              "'",
              's completely okay. For this site, I don',
              "'",
              't need all that stuff. And I think that',
              "'",
              's exactly what makes it appealing to visitors.'
            ),
            c.default.createElement(j.H2, null, "Stackin' Blocks"),
            c.default.createElement(
              i.default,
              null,
              'Sometimes, the act of limiting creativity actually embraces the same. Do you remember',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'http://minecraft.net' },
                'Minecraft'
              ),
              '? The game where everything only consists of angled boxes mashed together to represent materials, animals or even tools or humans? I',
              "'",
              'm sure you do. I',
              "'",
              've spend a huge part of my childhood playing it and yeah, I sometimes still do (when I',
              "'",
              'm out of creativity and need to recharge',
              c.default.createElement(b.Ref, { id: '1' }),
              '). 🐓'
            ),
            c.default.createElement(
              i.default,
              null,
              'Just ask yourself why so many adults and kids love this game and therefore bought over',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'https://minecraft.net/stats' },
                '20.000.000 copies'
              ),
              ' ',
              'although it',
              "'",
              's so easy to get a cracked version (not that I would recommend that, please keep supporting those Mojang guys and girls).'
            ),
            c.default.createElement(
              i.default,
              null,
              'The fact that you only have square blocks available to create your own ideas leads to a higher effort which your brain needs to make to achieve what you want. Because some things from the real world or your mind can',
              "'",
              't be built in the same way in this game, you need to think more. And that',
              "'",
              's exactly what keeps you from getting bored quickly. It',
              "'",
              's the balance between the ease of creation (which comes with a huge range of different tools and materials) and the additional effort that makes the game not-too-easy, but also not-too-hard.'
            ),
            c.default.createElement(
              i.default,
              null,
              c.default.createElement(
                'i',
                null,
                'So how did we get here, exactly?'
              )
            ),
            c.default.createElement(
              i.default,
              null,
              'Oh, yeah. You',
              "'",
              're right. I originally just wanted to explain why it',
              "'",
              's not that bad to limit your own options. On one hand, you don',
              "'",
              't have that much ways to realize your thought, but on the other hand, you don',
              "'",
              't need to waste time deciding between different methods — you already made the decision for that in the beginning.'
            ),
            c.default.createElement(j.H2, null, 'Improvements'),
            c.default.createElement(
              i.default,
              null,
              'I didn',
              "'",
              't just create this new update because I was lonely hanging around at home. I actually wanted to finally introduce some neat features which I also usually implement when developing other websites and therefore don',
              "'",
              't want to miss on my personal one.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Besides that, I also wanted to do some things which I had in my mind for a long time (since I started my first blog in 2013). So please, go ahead and check them out:'
            ),
            c.default.createElement(
              j.H3,
              null,
              'More "Leo", Less "Leonard Lamprecht"'
            ),
            c.default.createElement(
              i.default,
              null,
              'I guess I literally wasted hundreds of hours thinking about how I should name my site. First, I wanted to use one of my old nicknames (',
              '"mindrun"',
              ' for example), because they',
              "'",
              're easy to remember and some people already know them, so they could easily find it. But in the end, I just decided to officially call it ',
              '"leo"',
              ', since that is how my friends call me and how I also like to be called on the web.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Besides the fact that the name is very easy to spell, it',
              "'",
              's also a symbol for something strong, bold and wise — I',
              "'",
              'm talking of the lion. I actually don',
              "'",
              't know if this word is actively being used when talking about the lion in English, but in German, it definitely isn',
              "'",
              't. Therefore I also din',
              "'",
              't know about this from the beginning.'
            ),
            c.default.createElement(
              i.default,
              null,
              'To cut a long story short: I thought it',
              "'",
              's way easier for people to just refer to me as ',
              '"leo"',
              ' instead of using my full name. But please don',
              "'",
              't take that the wrong way, I AM really proud of my full name. Every family has a really huge background of people who ran big efforts just to survive and start a family. They did everything they could to do exactly that',
              c.default.createElement(b.Ref, { id: '2' }),
              '. That makes me really proud - and you should be too of yours.'
            ),
            c.default.createElement(
              i.default,
              null,
              'I',
              "'",
              'm sure that many people will interpret that headline on top of this section as something like ',
              '"',
              'Okay, he',
              "'",
              's not the guy I used to know anymore',
              '"',
              '. But that',
              "'",
              's just wrong. Please don',
              "'",
              't take that too seriously, it',
              "'",
              's just an abbreviation - not a new brand or something like that.'
            ),
            c.default.createElement(j.H3, null, 'Fira? Fira!'),
            c.default.createElement(
              i.default,
              null,
              'If you',
              "'",
              're an active contributor to Mozilla',
              "'",
              's projects, or just know them pretty good, you',
              "'",
              'll probably also know about ',
              c.default.createElement(
                u.default,
                { href: 'http://www.carrois.com/fira-4-1/' },
                'Fira'
              ),
              '.'
            ),
            c.default.createElement(
              i.default,
              null,
              'You don',
              "'",
              't know about it? No problem! It',
              "'",
              's basically a new, open-source font which is now mainly used in Firefox OS. It',
              "'",
              's available in over 16 weights and I completely fell in love with every single one! What I especially like about it is that the letter ',
              c.default.createElement('b', null, 'l'),
              ' has such a nice curve',
              c.default.createElement(b.Ref, { id: '3' }),
              ' at the bottom, which flows like the rounded bottom of the letter ',
              c.default.createElement('b', null, 'e'),
              '.'
            ),
            c.default.createElement(m.Image, {
              src: '/static/essays/2015/version-two/fira.png'
            }),
            c.default.createElement(
              i.default,
              null,
              'It was originally designed by the typomaniac',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'https://en.wikipedia.org/wiki/Erik_Spiekermann' },
                'Erik Spiekermann'
              ),
              ' ',
              'in cooperation with the folks at',
              ' ',
              c.default.createElement(
                u.default,
                { href: 'http://carrois.com' },
                'Carrois Type Design'
              ),
              ' ',
              'and is now widely used in Mozilla',
              "'",
              's software palette.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Since I don',
              "'",
              't know that much about typography yet, this font really makes me look forward to my upcoming training as Mediengestalter (german for media designer), where I',
              "'",
              'll hopefully learn more about this beautiful form of communication. I',
              "'",
              'm definitely planning to put more effort into making sure that fonts which I use on the web are the right ones and also properly styled in terms of weight, size and kerning.'
            ),
            c.default.createElement(j.H3, null, 'Better feed'),
            c.default.createElement(
              i.default,
              null,
              'Since I released my first blog posts a few years ago, I always stood glued to RSS for providing a feed. Mostly because I didn',
              "'",
              't know of any other alternative and maybe also because the themes I',
              "'",
              've used didn',
              "'",
              't have the Atom feed url in their',
              ' ',
              c.default.createElement(g.InlineCode, null, 'head'),
              ' ',
              'tag yet (therefore I never really got to experiment with it).'
            ),
            c.default.createElement(
              i.default,
              null,
              'But now, because the whole source code of my site is public and entirely editable through templates, I came across the ',
              c.default.createElement(g.InlineCode, null, 'feed.xml'),
              ' file from the default Jekyll theme and started searching for a precise explanation of the RSS format. The reason I did this was because I needed some information on how to format my post',
              "'",
              's meta-data for the feed.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Coming across different un-official documentation sites, I',
              "'",
              've noticed that there',
              "'",
              's not only RSS: There',
              "'",
              's also RSS 2 and Atom. After getting some knowledge about the differences of those two, I figured out that I like the last format more than both RSS versions. Part of the reason for this is because Atom fixed a lot of the design flaws of the old RSS standard. For example, the names of the keys in the old format haven',
              "'",
              't been chosen as carefully as in Atom (just to name a few):'
            ),
            c.default.createElement(
              y.Table,
              null,
              c.default.createElement(
                y.Row,
                { header: !0 },
                c.default.createElement(y.Column, null, 'RSS'),
                c.default.createElement(y.Column, null, 'Atom')
              ),
              c.default.createElement(
                y.Row,
                null,
                c.default.createElement(y.Column, null, 'managingEditor'),
                c.default.createElement(y.Column, null, 'author')
              ),
              c.default.createElement(
                y.Row,
                null,
                c.default.createElement(y.Column, null, 'guid'),
                c.default.createElement(y.Column, null, 'id')
              ),
              c.default.createElement(
                y.Row,
                null,
                c.default.createElement(y.Column, null, 'lastBuildDate'),
                c.default.createElement(y.Column, null, 'updated')
              ),
              c.default.createElement(
                y.Row,
                null,
                c.default.createElement(
                  y.Column,
                  null,
                  c.default.createElement(g.InlineCode, null, '<rss>')
                ),
                c.default.createElement(
                  y.Column,
                  null,
                  c.default.createElement(g.InlineCode, null, '<feed>')
                )
              )
            ),
            c.default.createElement(
              i.default,
              null,
              'Things like that are important to me, because they make me feel like the people who thought out this format spent much of their time just to make it simpler and avoid confusion. And that kind of effort is always one I will value.'
            ),
            c.default.createElement(
              i.default,
              null,
              'But of course that wasn',
              "'",
              't the only reason why I chose Atom (although it',
              "'",
              's a pretty big one). Some other cool things which really convinced me:'
            ),
            c.default.createElement(
              p.UL,
              null,
              c.default.createElement(
                p.LI,
                null,
                'The',
                ' ',
                c.default.createElement(g.InlineCode, null, 'id'),
                ' ',
                'key doesn',
                "'",
                't need a',
                ' ',
                c.default.createElement(g.InlineCode, null, 'isPermaLink'),
                ' ',
                'attribute anymore, if it contains a permalink.'
              ),
              c.default.createElement(
                p.LI,
                null,
                'I felt like the image-element was really poorly designed in RSS, which was why I was really happy when I noticed that Atom introduced the logo- and icon-tags that simply contain the URL to the image - no width, height or other specifications.'
              ),
              c.default.createElement(
                p.LI,
                null,
                'Space for more information within the',
                ' ',
                c.default.createElement(g.InlineCode, null, 'author'),
                ' ',
                'tag. You',
                "'",
                're free to use',
                ' ',
                c.default.createElement(g.InlineCode, null, '<name>'),
                ',',
                ' ',
                c.default.createElement(g.InlineCode, null, '<email>'),
                ' ',
                'and ',
                c.default.createElement(g.InlineCode, null, '<uri>'),
                ' tags.'
              )
            ),
            c.default.createElement(
              i.default,
              null,
              'So in the End, I',
              "'",
              've decided to go with Atom. If you experience any troubles with this change, please go ahead and let me know about it, so that I can quickly fix it.'
            ),
            c.default.createElement(j.H3, null, 'What Else?'),
            c.default.createElement(
              i.default,
              null,
              'Apart from the changes you',
              "'",
              'll actually notice when visiting my site, I',
              "'",
              've also added some subtle ones. For most people, those might be not as important as the upper ones, but for me, they are.'
            ),
            c.default.createElement(j.H4, null, 'Semantic HTML'),
            c.default.createElement(
              i.default,
              null,
              'The last theme I used on this blog wasn',
              "'",
              't really optimized for this. It felt like it was created before HTML 5 and hadn',
              "'",
              't been updated since then. Because I am a web developer and very focused on creating semantically correct sites which can be easily interpreted by every software/device, I needed to change this.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Starting with the way my articles are displayed, I',
              "'",
              've created a completely new theme which doesn',
              "'",
              't entirely rely on divs anymore and I',
              "'",
              'm very happy with the result.'
            ),
            c.default.createElement(
              i.default,
              null,
              'Sure, there are still some things like the footnotes which are generated directly by the markdown engine Jekyll uses to convert my output and therefore can',
              "'",
              't be changed without moving my site to a custom environment. But because I don',
              "'",
              't want to do so - since I enjoy GitHub Pages and the simple way how it wants you to publish content - I',
              "'",
              'll ignore this for now. I mean, it',
              "'",
              's not even incorrect. Those ',
              c.default.createElement(g.InlineCode, null, 'div'),
              ' tags are simply meant to represent a flow of content of any form (at least that',
              "'",
              's how I',
              "'",
              've interpreted W3C',
              "'",
              's explanation).'
            ),
            c.default.createElement(j.H4, null, 'Less Code'),
            c.default.createElement(
              i.default,
              null,
              'The re-design fortunately allowed me to rethink how this thing even works. I had to create new CSS files, a better HTML structure and was therefore able to start with my own methods when it comes to clean code. For example, I reduced the number of different SASS files and avoided using those funny variables (since I like keeping my SASS as similar to CSS as possible).'
            ),
            c.default.createElement(
              i.default,
              null,
              'If you want to find out more about what I did there, just take a look at the source code - I don',
              "'",
              't want to waste your time here.'
            ),
            c.default.createElement(j.H4, null, 'Forgot something?'),
            c.default.createElement(
              i.default,
              null,
              'Yes! I planned another cool improvement for my site, but the time didn',
              "'",
              't come yet. Besides that fact, I couldn',
              "'",
              't wait for it before releasing the new update, please have mercy with me... 😅'
            ),
            c.default.createElement(
              i.default,
              null,
              'As soon as it',
              "'",
              's there, I',
              "'",
              'll let you know about it.'
            ),
            c.default.createElement(i.default, null, 'Oh.'),
            c.default.createElement(
              i.default,
              null,
              '... and I banged my head on the table, yelled',
              ' ',
              '"',
              'FUCK THE WOOORLD!!',
              '"',
              ' ',
              'and changed my post',
              "'",
              's permalink root from',
              ' ',
              c.default.createElement(g.InlineCode, null, '/blog'),
              ' ',
              'to',
              ' ',
              c.default.createElement(g.InlineCode, null, '/notes'),
              ', which will make all existing links to my posts on the web completely useless.'
            ),
            c.default.createElement(j.H2, null, 'What I Learned from This'),
            c.default.createElement(
              i.default,
              null,
              'Before I finish this article (probably one of the longest I',
              "'",
              've ever written), I want to leave a few words about how I actually came to this point where I figured out how my new site will look and work:'
            ),
            c.default.createElement(
              i.default,
              null,
              c.default.createElement('i', null, 'Insecure?'),
              ' — Yeah, I guess that',
              "'",
              's what describes my design-technical situation before this release the best. I know that it',
              "'",
              's far from award winning, but I',
              "'",
              'm very proud of what I did with this update anyway. I finally managed to convert my thoughts into a working prototype. Before that, I discarded many designs which first appealed to me, but then turned out to be bad after some time.'
            ),
            c.default.createElement(
              i.default,
              null,
              'But I think I found out what my problem was: I wanted to create in one flow, without a pause. But now I know, that this is exactly what design needs: Time. Because I tried so hard to make something great, the result wasn',
              "'",
              't quite fitting my expectations. Instead of doing that again, I just did a few things and then left the design some ',
              '"',
              'time to breathe',
              '"',
              '. Meanwhile I had enough time for myself to think about which change I wanted to apply next. And hell yeah — it worked!'
            ),
            c.default.createElement(
              b.FootNotes,
              null,
              c.default.createElement(
                b.Note,
                { id: '1' },
                'And please, don',
                "'",
                't ask me why the hell I sometimes place those chicken or pigs here and there, I just love these little icons sitting in between good looking typography.'
              ),
              c.default.createElement(
                b.Note,
                { id: '2' },
                'I might write about the story of my family another time, I',
                "'",
                'm pretty sure you',
                "'",
                'll find it interesting!'
              ),
              c.default.createElement(
                b.Note,
                { id: '3' },
                'The most fonts I know don',
                "'",
                't have that feature. The ',
                c.default.createElement('b', null, 'l'),
                ' letter is usually more of simple line than an actual letter.'
              )
            )
          )
        }
      },
      567: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.Column = e.Row = e.Table = void 0)
        var r = o(101),
          c = t(r),
          s = o(99),
          a = t(s),
          n = o(100),
          i = t(n),
          h = o(102),
          d = t(h),
          f = o(103),
          u = t(f),
          j = o(1),
          b = t(j),
          m = o(0),
          g = t(m),
          p = o(114),
          y = function(l) {
            var e = l.children
            return g.default.createElement(
              'table',
              {
                cellSpacing: '0',
                cellPadding: '5',
                className: 'jsx-2310845477'
              },
              e,
              g.default.createElement(b.default, {
                styleId: '2310845477',
                css: [
                  'table.jsx-2310845477{table-layout:fixed;width:100%;margin:30px -5px;border:none;}'
                ]
              })
            )
          },
          v = (function(l) {
            function e() {
              return (
                (0, a.default)(this, e),
                (0, d.default)(
                  this,
                  (e.__proto__ || (0, c.default)(e)).apply(this, arguments)
                )
              )
            }
            return (
              (0, u.default)(e, l),
              (0, i.default)(e, [
                {
                  key: 'getChildContext',
                  value: function() {
                    return { header: this.props.header || !1 }
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return g.default.createElement(
                      'tr',
                      { className: 'jsx-3172562805' },
                      this.props.children,
                      g.default.createElement(b.default, {
                        styleId: '3172562805',
                        css: [
                          'tr.jsx-3172562805{text-align:left;font-size:15px;}'
                        ]
                      })
                    )
                  }
                }
              ]),
              e
            )
          })(m.Component)
        v.childContextTypes = { header: p.bool }
        var k = function(l, e) {
          var o = l.children
          return (0, m.createElement)(e.header ? 'th' : 'td', {}, o)
        }
        ;(k.contextTypes = { header: p.bool }),
          (e.Table = y),
          (e.Row = v),
          (e.Column = k)
      },
      57: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      58: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      59: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      60: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      61: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      62: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      63: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      64: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      65: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      66: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      67: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      68: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      69: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      70: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      71: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      72: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      73: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      74: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      75: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      76: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      77: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      78: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      79: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      8: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.InlineCode = e.Code = void 0)
        var r = o(101),
          c = t(r),
          s = o(99),
          a = t(s),
          n = o(100),
          i = t(n),
          h = o(102),
          d = t(h),
          f = o(103),
          u = t(f),
          j = o(1),
          b = t(j),
          m = o(0),
          g = t(m),
          p = o(9),
          y = t(p),
          v = o(15),
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
            function e(l) {
              ;(0, a.default)(this, e)
              var o = (0, d.default)(
                this,
                (e.__proto__ || (0, c.default)(e)).call(this, l)
              )
              if (!l.language || !l.syntax)
                throw new Error('Please define the `language` and `syntax`')
              return (0, p.registerLanguage)(l.language, l.syntax), o
            }
            return (
              (0, u.default)(e, l),
              (0, i.default)(e, [
                {
                  key: 'render',
                  value: function() {
                    return g.default.createElement(
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
              e
            )
          })(m.Component),
          A = function(l) {
            var e = l.children
            return g.default.createElement(
              'code',
              { className: 'jsx-1132460883' },
              e,
              g.default.createElement(b.default, {
                styleId: '1132460883',
                css: [
                  'code.jsx-1132460883{background:#f3f3f3;padding:2px 4px;border-radius:3px;font-size:0.85em;color:#3a3a3a;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, Courier New,monospace,serif;}'
                ]
              })
            )
          }
        ;(e.Code = w), (e.InlineCode = A)
      },
      80: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      81: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      82: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      83: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      84: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      85: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      86: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      87: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      88: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      89: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      9: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.registerLanguage = void 0)
        var r = o(10),
          c = t(r),
          s = o(13),
          a = t(s)
        e.registerLanguage = a.default.registerLanguage
        e.default = (0, c.default)(a.default, {})
      },
      90: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      91: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      92: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      93: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      94: function(l, e, o) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
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
      96: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        for (
          var r = o(7),
            c = t(r),
            s = o(1),
            a = t(s),
            n = o(0),
            i = t(n),
            h = o(97),
            d = t(h),
            f = function(l) {
              var e = l.level,
                o = l.fontSize,
                t = l.linked,
                r = l.children,
                c = r
              return (
                Array.isArray(r) &&
                  (c = r
                    .map(function(l) {
                      return 'string' == typeof l ? l : l.props.children
                    })
                    .join('')),
                i.default.createElement(
                  'div',
                  { className: 'jsx-1960885832' },
                  (0, n.createElement)(
                    'h' + e,
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
                  i.default.createElement(a.default, {
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
            u = 1;
          u <= 6;
          u++
        )
          !(function(l) {
            var o = 'H' + l,
              t = [23, 18, 15, 13, 10, 9],
              r = function(e) {
                return new f(
                  (0, c.default)({}, e, {
                    level: l,
                    fontSize: t[l - 1],
                    linked: l > 1
                  })
                )
              }
            e[o] = r
          })(u)
      },
      97: function(l, e, o) {
        !(function(e, o) {
          l.exports = o()
        })(0, function() {
          function l(l) {
            return (
              (l = l.trim().toLowerCase()),
              (l = l.replace(e, '-')),
              (l = l.replace(o, ''))
            )
          }
          var e = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g,
            o = /(^-+|-+$)/g
          return l
        })
      },
      98: function(l, e, o) {
        'use strict'
        function t(l) {
          return l && l.__esModule ? l : { default: l }
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = o(1),
          c = t(r),
          s = o(0),
          a = t(s)
        e.default = function() {
          return a.default.createElement(
            'div',
            { className: 'jsx-567296780' },
            a.default.createElement(c.default, {
              styleId: '567296780',
              css: [
                'div.jsx-567296780{width:60px;height:1px;background:#e3e3e3;margin:40px auto;}'
              ]
            })
          )
        }
      }
    },
    [565]
  ))
  return { page: comp.default }
})
