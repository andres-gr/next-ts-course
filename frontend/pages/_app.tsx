import App, { AppContext } from 'next/app'
import Page from 'Components/Page'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }: AppContext) {
    let pageProps: { query?: any } = { query: '' }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
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

export default MyApp
