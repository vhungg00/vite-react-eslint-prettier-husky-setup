import { Global, css } from '@emotion/react'

/**
 * GlobalStyle
 */
export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        * {
          font-weight: 400;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        #root {
          min-height: 100%;
          min-width: 100%;
        }

        p,
        label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5em;
        }

        input,
        select {
          font-family: inherit;
          font-size: inherit;
        }
      `}
    />
  )
}
