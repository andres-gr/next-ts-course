interface Defaults {
  __typename?: string
  id?: string
  createdAt?: string
  updatedAt?: string
}

function stripApollo<T extends Defaults> (oldItem: T): Omit<T, keyof Defaults> {
  const {
    __typename,
    createdAt,
    id,
    updatedAt,
    ...item
  } = oldItem
  return item
}

export default stripApollo
