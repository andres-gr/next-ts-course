import Head from 'next/head'
import { useSingleItemQuery } from 'GraphQL/types'
import DisplayError from 'Components/ErrorMessage'
import styled from 'Styles/theme'

type SingleItemProps = {
  id: string | string[]
}

const SingleItemStyles = styled.div`
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  margin: 2rem auto;
  max-width: 1200px;
  min-height: 800px;
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
  .details {
    font-size: 2rem;
    margin: 3rem;
  }
`

const SingleItem = ({ id }: SingleItemProps) => {
  const {
    data,
    error,
    loading,
  } = useSingleItemQuery({
    variables: {
      where: { id } as { id: string },
    },
  })
  
  if (loading) return <p>Loading...</p>
  
  if (error) return <DisplayError error={ error } />
  
  if (!data?.item) return <h3>No item found!</h3>
  
  const {
    description,
    largeImage,
    title,
  } = data.item
  
  return (
    <SingleItemStyles>
      <Head>
        <title>
          Sick Fits | { title }
        </title>
      </Head>
      <img
        alt={ title }
        src={ largeImage }
      />
      <div className="details">
        <h2>Viewing { title }</h2>
        <p>{ description }</p>
      </div>
    </SingleItemStyles>
  )
}

export default SingleItem
