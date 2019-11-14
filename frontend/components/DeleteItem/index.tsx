/* eslint-disable no-alert */
import { useCallback } from 'react'
import { ChildrenProps } from 'Utils/types'
import {
  Item,
  useDeleteItemMutation,
} from 'GraphQL/types'
import { ALL_ITEMS } from 'Documents/items/query.graphql'

type DeleteItemProps = {
  id: string
} & ChildrenProps

type CacheItems = { items: Item[] }

const DeleteItem = ({
  children,
  id,
}: DeleteItemProps) => {
  const [
    deleteItem,
    {
      loading,
    },
  ] = useDeleteItemMutation()
  
  const handleDelete = useCallback(async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await deleteItem({
        update: (cache, { data }) => {
          const { items } = cache.readQuery<CacheItems>({ query: ALL_ITEMS })
          const nextItems = items.filter(({ id: itemId }) => itemId !== data.deleteItem.id)
          cache.writeQuery<CacheItems>({
            data  : { items: nextItems },
            query : ALL_ITEMS,
          })
        },
        variables: {
          where: { id },
        },
      })
    }
  }, [
    deleteItem,
    id,
  ])
  
  return (
    <button
      disabled={ loading }
      type="button"
      onClick={ handleDelete }
    >
      { children }
    </button>
  )
}

export default DeleteItem
