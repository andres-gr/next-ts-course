import { Item as ItemProps } from 'GraphQL/types'
import Link from 'next/link'
import ItemStyles from 'Styles/Item'
import Title from 'Styles/Title'

const Item = ({
  id,
  title,
}: ItemProps) => (
  <ItemStyles>
    <Title>
      <Link
        as={ `/item/${id}` }
        href="/item/[id]"
      >
        <a>{ title }</a>
      </Link>
    </Title>
  </ItemStyles>
)

export default Item
