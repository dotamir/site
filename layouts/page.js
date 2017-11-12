// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Other
import { version } from '../package'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

// Only show progress bar if page
// transition takes longer than 200 milliseconds
Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Log a sweet message in the browser
// Showing the version and GitHub repository
// if (global.document) {
//   const info = [
//     `Version: ${version}`,
//     `You can find the code here: https://github.com/leo/site`,
//     `Have a great day! :)`
//   ]

//   for (const message of info) {
//     console.log(message)
//   }
// }

// const viewSource = event => {
//   const allowed = ['P', 'SPAN', 'H1', 'H2', 'H3', 'PRE', 'CODE']

//   if (allowed.includes(event.target.tagName)) {
//     return
//   }

//   document.location = 'https://github.com/dotamir/site'
//   event.preventDefault()
// }

export default ({ children }) => (
  <main>
    <Head>
      <link
        rel="mask-icon"
        href="http://dotam.ir/static/lightning.svg"
        color="#000000"
      />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="icon" href="/static/touch-icon.png" type="image/png" />
      <link
        href="https://cdn.rawgit.com/rastikerdar/sahel-font/v1.0.0-alpha9/dist/font-face.css"
        rel="stylesheet"
        type="text/css"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta name="description" content="A Front-End Developer" />
      <meta name="twitter:site" content="@dotamir" />
      <meta name="twitter:creator" content="@dotamir" />
    </Head>

    {children}

    <style jsx global>
      {`
        body {
          font-family: 'Sahel', -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          direction: rtl;
        }

        html,
        body {
          height: 100%;
        }

        body > div:first-child,
        body > div:first-child > div:first-child,
        body > div:first-child > div:first-child > div {
          height: inherit;
        }

        main {
          padding: 30px;
          box-sizing: border-box;
          position: relative;
          min-height: 100%;
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #4492ff;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }

        @media (min-width: 768px) {
          main {
            padding: 45px;
          }
        }
      `}
    </style>
  </main>
)
