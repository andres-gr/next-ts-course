import { FC } from 'react'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'Styles/global'
import styled, { theme } from 'Styles/theme'
import Meta from 'Components/Meta'
import Header from 'Components/Header'
import { ChildrenProps } from 'Utils/types'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`

const Page: FC<ChildrenProps> = ({ children }: ChildrenProps) => (
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

export default Page
