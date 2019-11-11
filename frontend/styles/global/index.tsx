import {
  css,
  Global,
} from '@emotion/core'
import { theme } from 'Styles/theme'

const globalStyles = css`
  @font-face {
    font-family: 'radnika_next';
    font-style: normal;
    font-weight: normal;
    src: url('/radnikanext-medium-webfont.woff2') format('woff2');
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme.black};
    text-decoration: none;
  }
`

const GlobalStyles = () => (
  <Global
    styles={ globalStyles }
  />
)

export default GlobalStyles
