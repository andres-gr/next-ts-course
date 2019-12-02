import NextApp, { AppContext } from 'next/app'
import Page from 'Components/Page'
import withApollo from 'Lib/apollo'

type InitPageProps = {
  query?: {
    [x: string]: string | string[]
  }
}

type NextInitProps = {
  pageProps: InitPageProps
}

class App extends NextApp<NextInitProps> {
  static async getInitialProps ({
    Component,
    ctx,
  }: AppContext) {
    const initProps = Component.getInitialProps || (() => Promise.resolve({}))
    const pageProps: InitPageProps = await initProps(ctx)
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

export default withApollo(App)
