import { FC } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'Styles/global'
import styled, { theme } from 'Styles/theme'
import Meta from 'Components/Meta'
import Header from 'Components/Header'

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
  children: PropTypes.node.isRequired,
}

export default Page
