// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <article>{children}</article>

    <style jsx>
      {`
        article {
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
          max-width: 780px;
          color: #282828;
        }
      `}
    </style>

    <style jsx global>
      {`
        .tweet {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
        }
      `}
    </style>
  </Page>
)
