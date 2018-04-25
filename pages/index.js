// Helpers
import moment from 'moment'
import momentJal from 'moment-jalaali'
momentJal.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' })

// Components
import Link from 'next/link'
import Title from '../components/title'
import Back from '../components/back'

// Layouts
import Page from '../layouts/page'

// Other
import posts from '../data/essays'

const parseDate = date => moment(date, 'DD/MM/YYYY')
const parseJalaali = date => momentJal(date, 'DD/MM/YYYY')

// Assign a URL to each post and
// sort them by date (most recent one first)
const preparePosts = () =>
  posts
    .map(post =>
      Object.assign(
        {
          url: `/${parseDate(post.date).year()}/${post.id}`
        },
        post
      )
    )
    .sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

export default () => (
  <Page>
    <Title />

    <img src="/static/lightning.svg" className="logo-type" />
    <h1>{`امیرحسین اسلامی`}</h1>

    <ul>
      {preparePosts().map(post => (
        <li key={post.id}>
          <Link href={post.url} prefetch>
            <a>
              <b>{post.title}</b>
              <span>{parseJalaali(post.date).format('jD jMMMM jYYYY')}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        ul {
          margin: 0;
          padding: 0 0 10px 0;
          list-style: none;
        }

        li {
          margin: 25px 0;
          text-decoration: none;
        }

        li:last-child {
          margin-bottom: 0;
        }

        a {
          text-decoration: none;
          display: block;
        }

        b {
          color: #000;
          font-size: 25px;
          display: inline-block;
          font-weight: 600;
          line-height: 21px;
        }

        span {
          display: block;
          color: #c1c1c1;
          font-size: 16px;
          margin-top: 4px;
          margin-right: 8px;
        }

        h1 {
          display: inline-block;
          margin: 0px 0 40px 0;
          font-size: 35px;
          font-weight: 600;
        }
        .logo-type {
          display: inline-block;
          position: relative;
          top: 7px;
          width: 60px;
          height: 60px;
          margin-left: 10px;
          vertical-align: text-bottom;
        }

        @media (min-width: 768px) {
          a {
            display: inline-block;
          }

          span {
            display: inline-block;
            margin-left: 20px;
          }

          b {
            color: #282828;
            font-size: 25px;
          }

          ul {
            padding-bottom: 0;
          }

          a:hover b {
            color: #000;
          }

          h1 {
            font-size: 40px;
            margin-top: 0;
          }
        }

        @media (min-width: 992px) {
          span {
            opacity: 0;
          }

          li {
            margin: 22px 0;
          }

          a:hover span {
            opacity: 1;
          }
        }
      `}
    </style>
  </Page>
)
