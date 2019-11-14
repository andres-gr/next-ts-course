import NextApp, { AppContext } from 'next/app'
import Page from 'Components/Page'
import { NextInitProps } from 'Utils/types'

class App extends NextApp<NextInitProps> {
  static async getInitialProps ({
    Component,
    ctx,
  }: AppContext) {
    const initProps = Component.getInitialProps || (() => Promise.resolve({}))
    const pageProps: NextInitProps['pageProps'] = await initProps(ctx)
    pageProps.query = ctx.query
    return { pageProps }
  }
  
  render () {
    const {
      Component,
      pageProps,
    } = this.props
    return (
      <Page>
        <Component { ...pageProps } />
      </Page>
    )
  }
}

export default App
