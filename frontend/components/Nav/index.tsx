import { FC } from 'react'
import Link from 'next/link'

const Nav: FC = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </>
)

export default Nav
