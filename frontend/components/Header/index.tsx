import { FC } from 'react'
import Nav from 'components/Nav'

const Header: FC = () => (
  <div>
    <div className="bar">
      <a href="/">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      <p>Cart</p>
    </div>
  </div>
)

export default Header