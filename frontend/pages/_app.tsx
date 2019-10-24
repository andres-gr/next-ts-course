import App from 'next/app'

class MyApp extends App {
  render () {
    const {
      Component,
      pageProps
    } = this.props
    return (
      <>
        <span>Cosa</span>
        <Component { ...pageProps } />
      </>
    )
  }
}

export default MyApp
