import { FC } from 'react'
import PropTypes from 'prop-types'

const Page: FC = ({ children }) => (
  <>
    <p>The page component.</p>
    { children }
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
