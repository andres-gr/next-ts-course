import Link from 'next/link'
import { Item as ItemProps } from 'GraphQL/types'
import ItemStyles from 'Styles/Item'
import Title from 'Styles/Title'
import PriceTag from 'Styles/PriceTag'
import formatMoney from 'Lib/formatMoney'
import DeleteItem from 'Components/DeleteItem'

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
      <DeleteItem id={ id }>
        Delete this Item
      </DeleteItem>
    </div>
  </ItemStyles>
)

export default Item
