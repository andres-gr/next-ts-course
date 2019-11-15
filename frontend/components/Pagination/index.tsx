import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PaginationStyles from 'Styles/PaginationStyles'
import { useItemsPaginationQuery } from 'GraphQL/types'
import { PER_PAGE } from 'Lib/constants'

const Pagination = () => {
  const router = useRouter()
  
  const {
    data,
    loading,
  } = useItemsPaginationQuery()
  
  if (loading) return <p>Loading...</p>
  
  const { count } = data.itemsConnection.aggregate
  
  const pages = Math.ceil(count / PER_PAGE),
        page = router.query.page
          ? parseFloat(router.query.page as string)
          : 1
  
  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits! Page { page } of { pages }
        </title>
      </Head>
      <Link
        prefetch
        href={{
          pathname : '/items',
          query    : {
            page: page - 1,
          },
        }}
      >
        <a
          aria-disabled={ page <= 1 }
          className="prev"
        >
          ← Prev
        </a>
      </Link>
      <p>
        Page { page } of { pages }
      </p>
      <p>
        { count } Items Total
      </p>
      <Link
        prefetch
        href={{
          pathname : '/items',
          query    : {
            page: page + 1,
          },
        }}
      >
        <a
          aria-disabled={ page >= pages }
          className="prev"
        >
          Next →
        </a>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination
