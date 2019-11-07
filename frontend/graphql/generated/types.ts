import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: Date,
};


export type Item = Node & {
   __typename?: 'Item',
  id: Scalars['ID'],
  title: Scalars['String'],
  description: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  price: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  description: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  price: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createItem: Item,
};


export type MutationCreateItemArgs = {
  data: ItemCreateInput
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  items: Array<Maybe<Item>>,
  users?: Maybe<Array<Maybe<User>>>,
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type AllItemsQueryVariables = {};


export type AllItemsQuery = (
  { __typename?: 'Query' }
  & { items: Array<Maybe<(
    { __typename?: 'Item' }
    & ItemFragment
  )>> }
);

export type ItemFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export type ItemNoNestingFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type UserNoNestingFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export type ItemDeepNestingFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type UserDeepNestingFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export const ItemFragmentDoc = gql`
    fragment Item on Item {
  id
  title
  description
  image
  largeImage
  price
  createdAt
  updatedAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  createdAt
  updatedAt
}
    `;
export const ItemNoNestingFragmentDoc = gql`
    fragment ItemNoNesting on Item {
  id
  title
  description
  image
  largeImage
  price
  createdAt
  updatedAt
}
    `;
export const UserNoNestingFragmentDoc = gql`
    fragment UserNoNesting on User {
  id
  name
  createdAt
  updatedAt
}
    `;
export const ItemDeepNestingFragmentDoc = gql`
    fragment ItemDeepNesting on Item {
  id
  title
  description
  image
  largeImage
  price
  createdAt
  updatedAt
}
    `;
export const UserDeepNestingFragmentDoc = gql`
    fragment UserDeepNesting on User {
  id
  name
  createdAt
  updatedAt
}
    `;
export const AllItemsDocument = gql`
    query AllItems {
  items {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useAllItemsQuery__
 *
 * To run a query within a React component, call `useAllItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
      }
export function useAllItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
        }
export type AllItemsQueryHookResult = ReturnType<typeof useAllItemsQuery>;
export type AllItemsLazyQueryHookResult = ReturnType<typeof useAllItemsLazyQuery>;
export type AllItemsQueryResult = ApolloReactCommon.QueryResult<AllItemsQuery, AllItemsQueryVariables>;