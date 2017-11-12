// Components
import Head from 'next/head'

const suffix = 'امیرحسین اسلامی'

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} — ${suffix}` : suffix}</title>
  </Head>
)
