import { FC } from 'react'
import PropTypes from 'prop-types'
import Meta from 'components/Meta'
import Header from 'components/Header'

const Page: FC = ({ children }) => (
  <>
    <Meta />
    <Header />
    { children }
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
