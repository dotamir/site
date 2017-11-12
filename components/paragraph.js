export default ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
        p {
          font-size: 1.055rem;
          line-height: 1.818rem;
          word-spacing: -0.05rem;
          letter-spacing: -0.004rem;
          margin: 22px 0;
        }
      `}
    </style>
  </p>
)
