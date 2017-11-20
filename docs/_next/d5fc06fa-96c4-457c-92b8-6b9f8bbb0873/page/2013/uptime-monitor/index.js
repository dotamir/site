window.__NEXT_REGISTER_PAGE('/2013/uptime-monitor', function() {
  var comp = (module.exports = webpackJsonp(
    [81],
    {
      494: function(e, n, i) {
        e.exports = i(495)
      },
      495: function(e, n, i) {
        'use strict'
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(n, '__esModule', { value: !0 })
        var r = i(0),
          s = t(r),
          a = i(4),
          u = t(a),
          d = i(3),
          l = t(d),
          o = i(5),
          h = t(o),
          c = i(95),
          m = t(c)
        n.default = function() {
          return s.default.createElement(
            u.default,
            null,
            s.default.createElement(h.default, { id: 'uptime-monitor' }),
            s.default.createElement(
              l.default,
              null,
              'Eigentlich hätte ich euch schon viel früher darüber informieren sollen, aber das Projekt hat einen ziemlich großen Teil meiner Zeit gefressen. Ich rede von Uptime-Monitor, einem schlanken, einfach zu bedienenden Dienst, welcher es Besitzern einer Homepage möglich macht, über den Status ihrer Webseite auf dem Laufenden bleiben zu können, ganz egal wo auch immer sie gerade sind.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Das Verfahren ist eigentlich ganz einfach zu verstehen: Zunächst erstellt der Nutzer auf unserer Seite einen - wie wir ihn nennen - “Monitor”, indem er die URL, IP oder Domain seiner Webseite sowie einen kurzen Projektnamen (Dient zur Unterscheidung von anderen Monitoren) angibt.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Dann hat der User die Möglichkeit, ein Intervall festzulegen, indem die angegebene Adresse von unserem Dienst geprüft werden soll. Hierbei kann er zwischen ',
              s.default.createElement('mark', null, '60, 30, 15, 10'),
              ' und den für Premium-Nutzer freigegebenen 5 und einer Minute wählen. Dann werden alle Einstellungen gespeichert und die genannte Adresse fortan von unserer Infrastruktur auf Verfügbarkeit geprüft.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Alle Monitore, die der Nutzer in seinem Konto erstellt hat, werden auf der Übersicht untereinander aufgelistet. Nun die Erklärung des Sinn und Zweckes des Projektes mit Hilfe eines kleinen Beispiels: Die Webseite des Nutzers erleidet einen schweren DDoS-Angriff, oder hält ganz einfach nicht stand, da zu viele andere User die Seite besuchen. Jetzt kommt Uptime-Monitor ins Spiel. Durch die regelmäßige Prüfung der Adresse erfährt unser System, dass die Webseite des Nutzers nicht mehr erreichbar ist, da bei Zugriff eine Zeitüberschreitung erfolgt.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Unsere Infrastruktur reagiert nun sofort und sendet an den Nutzer eine E-Mail, oder kontaktiert in wahlweiße ganz einfach per SMS aufs Handy. Nun kann der Administrator reagieren und entsprechende Schritte einleiten, damit seine Webseite wieder einwandfrei erreichbar ist. Um die SMS-Funktion nutzen zu können, wird dem Nutzer ein sogenanntes Premium-Upgrade geboten, welches er für günstige 30€ für ein Jahr via Zahlung per PayPal erwerben kann.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Natürlich bieten wir für Entwickler auch eine API. Diese dient als Schnittstelle zu unseren Systemen und ermöglicht es dem User, die gesammelten Daten z.B. auch auf seiner eigenen Homepage auszugeben. Für Nutzer mit einem Premium-Konto gibt es die API v2, mit der auf Wunsch auch neue Monitore erstellt, oder bereits bestehende bearbeitet werden können. User mit einem kostenfreien Account müssen sich hierbei mit der API v1 begnügen, welche ausschließlich die Abfrage von Daten erlaubt, und das nur im Bereich bestimmter Limits. Nutzer, welche im Besitz eines Premium-Kontos sind, können bis zu 50 Monitore hinzufügen, wobei sich “Free-User” mit maximal 3 Stück zufrieden geben müssen.'
            ),
            s.default.createElement(
              l.default,
              null,
              'Selbstverständlich müssen auch wir unsere Infrastruktur irgendwie finanzieren, bzw. unsere Dienstleistung aufrecht erhalten. Mit dem Kauf eines Premium-Accounts für 1 Jahr unterstützen sie unser Projekt. Wir können unsere Leistung somit weiterhin aufrecht erhalten, sowie weitere Funktionen einbauen und leichter auf Kundenwünsche eingehen. In seinem jetzigen Status wird das ganze Projekt voll und ganz durch die Einnahmen finanziert, die durch den Verkauf von Premium-Paketen generiert werden können. In diesem Sinne bedanken wir uns sehr für jegliche Unterstützung! Man bedenke hierbei folgendes: Auf einen einzigen Nutzer kommen pro Monitor täglich bis zu 1440 Abfragen.'
            ),
            s.default.createElement(
              l.default,
              null,
              'So, ich denke das sind für Heute genug Infos. Das Projekt geht offiziell voraussichtlich gegen Ende Juli online. Wer direkt informiert werden möchte, wenn das Projekt erreichbar ist, kann derzeit unter uptime-monitor.net seine E-Mail-Adresse eintragen, an die am Release-Tag eine Nachricht gesendet wird. (Keine Angst, die Adresse wird nach dem einmaligen Versand der Veröffentlichungs-Nachricht direkt von unserem System entfernt, es erfolgt kein Newsletter-Abo oder Ähnliches. Für weitere Neuigkeiten und Informationen über das Projekt bietet sich übrigends mein',
              ' ',
              s.default.createElement(
                m.default,
                { href: 'https://twitter.com/notquiteleo' },
                'Twitter-Account'
              ),
              ' ',
              'an.'
            )
          )
        }
      }
    },
    [494]
  ))
  return { page: comp.default }
})
