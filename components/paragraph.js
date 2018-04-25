export default ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
        p {
          font-size: 1.1em;
          line-height: 2em;
          word-spacing: -0.05rem;
          letter-spacing: -0.004rem;
          margin: 22px 0;
        }
      `}
    </style>
  </p>
)
