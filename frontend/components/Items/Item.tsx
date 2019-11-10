import { Item as ItemProps } from 'GraphQL/types'
import Link from 'next/link'
import ItemStyles from 'Styles/Item'
import Title from 'Styles/Title'
import PriceTag from 'Styles/PriceTag'
import formatMoney from 'Lib/formatMoney'

const Item = ({
  description,
  id,
  image,
  price,
  title,
}: ItemProps) => (
  <ItemStyles>
    { image && (
      <img
        alt={ title }
        src={ image }
      />
    ) }
    <Title>
      <Link
        as={ `/item/${id}` }
        href="/item/[id]"
      >
        <a>{ title }</a>
      </Link>
    </Title>
    <PriceTag>{ formatMoney(price) }</PriceTag>
    <p>{ description }</p>
    <div className="buttonList">
      <Link
        as={ `/update/${id}` }
        href="/update/[id]"
      >
        <a>
          Edit
          <span
            aria-label="edit"
            role="img"
          >
            ✏️
          </span>
        </a>
      </Link>
      <button type="button">Add to Cart</button>
      <button type="button">Delete</button>
    </div>
  </ItemStyles>
)

export default Item
