import Link from 'next/link'
import NavStyles from 'Styles/NavStyles'
import { useMeQuery } from 'GraphQL/types'
import { apolloClient } from 'Lib/apollo'

const Nav = () => {
  const { data } = useMeQuery({ client: apolloClient })
  
  const { me } = data || {}
  
  return (
    <NavStyles>
      <Link href="/items">
        <a>Shop</a>
      </Link>
      {
        me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
          </>
        )
      }
      {
        !me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )
      }
    </NavStyles>
  )
}

export default Nav
