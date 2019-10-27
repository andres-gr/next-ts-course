import { FC } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'styles/global'
import Meta from 'components/Meta'
import Header from 'components/Header'
import styled, { theme } from '@theme'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`

const Page: FC = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyles />
    <StyledPage>
      <Meta />
      <Header />
      <Inner>
        { children }
      </Inner>
    </StyledPage>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
