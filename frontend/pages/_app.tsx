import App from 'next/app'
import Page from 'Components/Page'

class MyApp extends App {
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
