// Packages
import Head from 'next/head'
import moment from 'moment'
import momentJal from 'moment-jalaali'
momentJal.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' })

// Other
import posts from '../data/essays'

// Components
import Title from './title'
import Back from './back'
import { Image } from './figure'

// Make date easily readable
const parseDate = date => moment(date, 'DD-MM-YYYY')
const parseJalaali = date => momentJal(date, 'DD/MM/YYYY')

// Find post using its identifier
const findPost = id => posts.find(post => post.id === id)

export default ({ id, hasCover }) => {
  const post = findPost(id)
  const headingClass = hasCover ? 'has-cover' : ''
  const date = parseDate(post.date)

  let coverURL

  if (hasCover) {
    coverURL = `/static/essays/${date.format('YYYY')}/${id}/cover.png`
  }

  return (
    <aside>
      <Back to="/" outsideCover={hasCover} />

      {hasCover && <Image src={coverURL} isCover />}
      <Title value={post.title} />

      <h1 className={headingClass}>{post.title}</h1>
      <span>{parseJalaali(post.date).format('jD jMMMM jYYYY')}</span>

      {post.title && (
        <Head>
          <meta name="twitter:title" content={post.title} />
        </Head>
      )}

      {post.description && (
        <Head>
          <meta name="twitter:description" content={post.description} />
          <meta name="description" content={post.description} />
        </Head>
      )}

      {hasCover && (
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={'https://leo.im' + coverURL} />
        </Head>
      )}

      <style jsx>
        {`
          h1 {
            font-weight: 600;
            margin: 0 0 8px 0;
            font-size: 24px;
            // padding-right: 55px;
            line-height: 1.3em;
          }

          h1.has-cover {
            padding-right: 0;
          }

          span {
            color: #7c7c7c;
            font-size: 16px;
          }

          aside {
            margin-bottom: 35px;
            margin-top: 14px;
          }

          @media (min-width: 992px) {
            h1 {
              font-size: 28px;
              margin-bottom: 7px;
            }

            span {
              font-size: 16px;
            }
          }
        `}
      </style>
    </aside>
  )
}
