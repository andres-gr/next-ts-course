/* eslint-disable no-console */
import { FC } from 'react'
import { ApolloError } from 'apollo-client'
import styled from 'Styles/theme'

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`

export type DisplayErrorProps = { error?: ApolloError }

const DisplayError: FC<DisplayErrorProps> = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null
  console.warn(error)
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        { error.message.replace('GraphQL error: ', '') }
      </p>
    </ErrorStyles>
  )
}

export default DisplayError
