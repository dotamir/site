import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Code, InlineCode } from '../../components/code'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'

export default asPost({
  id: 'broken',
  hasCover: false
})(markdown(components)`
شکسته
مثل سدی که ترک برداشته باشه. مثل سنگی که بالاخره آب ازش عبور کرده. مثل هرچیزی که شکسته شده باشه و نمیخواد قبول کنه که شکسته! تا الان همه‌چی رو پیش خودم نگه می‌داشتم. اما اونقدری نبودم که پیش خودم نگه دارم و جاری شد. و نمی‌خوام قبول کنم که باختم و نتونستم جلودار جاری شدنش باشم. میخوام بهش جریان بدم و کنترلش کنم .

دوست نداشتم بنویسم برای اینکه کس دیگه‌ای بخونه. نوشته‌های خصوصی زیاد دارم، اما چیزی که برای خوندن بقیه باشه نداشتم و این اولین میشه. همیشه درحال توصیف خودم به سایه خودم بودم. واسه نوشتن برای عموم دلیل می‌خواستم و دلیلش برام روشن شد و از این به بعد سعی میکنم برای بقیه هم بنویسم و دیگه با سایه‌ای که روی دیوار افتاده کم حرف می‌زنم. نوشته‌هایی که پارادوکس زیاد دارن، اما می‌نویسم که تضادها از بین برن .
برام سخته نوشتن برای شماها، اما تمام سعی خودم رو می‌کنم. پس اگه مشکلی توی نوشته بود و یا بد نوشتم حتما بهم بگید که بتونم بهتر بشم.

امیدوارم از اینجا بودن و خوندن لذت ببرید ...

امیرحسین اسلامی، ۱۰ فروردین ۱۳۹۶
`)
