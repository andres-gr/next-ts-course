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

export type ItemUpdateInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createItem: Item,
  deleteItem?: Maybe<Item>,
  updateItem: Item,
};


export type MutationCreateItemArgs = {
  data: ItemCreateInput
};


export type MutationDeleteItemArgs = {
  where: ItemWhereUniqueInput
};


export type MutationUpdateItemArgs = {
  data: ItemUpdateInput,
  where: ItemWhereUniqueInput
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  items: Array<Maybe<Item>>,
  item?: Maybe<Item>,
  users?: Maybe<Array<Maybe<User>>>,
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type CreateItemMutationVariables = {
  data: ItemCreateInput
};


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem: (
    { __typename?: 'Item' }
    & ItemFragment
  ) }
);

export type DeleteItemMutationVariables = {
  where: ItemWhereUniqueInput
};


export type DeleteItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteItem: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
  )> }
);

export type UpdateItemMutationVariables = {
  data: ItemUpdateInput,
  where: ItemWhereUniqueInput
};


export type UpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { updateItem: (
    { __typename?: 'Item' }
    & ItemFragment
  ) }
);

export type AllItemsQueryVariables = {};


export type AllItemsQuery = (
  { __typename?: 'Query' }
  & { items: Array<Maybe<(
    { __typename?: 'Item' }
    & ItemFragment
  )>> }
);

export type SingleItemQueryVariables = {
  where: ItemWhereUniqueInput
};


export type SingleItemQuery = (
  { __typename?: 'Query' }
  & { item: Maybe<(
    { __typename?: 'Item' }
    & ItemFragment
  )> }
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
export const CreateItemDocument = gql`
    mutation CREATE_ITEM($data: ItemCreateInput!) {
  createItem(data: $data) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;
export type CreateItemMutationFn = ApolloReactCommon.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, baseOptions);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = ApolloReactCommon.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const DeleteItemDocument = gql`
    mutation DELETE_ITEM($where: ItemWhereUniqueInput!) {
  deleteItem(where: $where) {
    id
  }
}
    `;
export type DeleteItemMutationFn = ApolloReactCommon.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, baseOptions);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = ApolloReactCommon.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const UpdateItemDocument = gql`
    mutation UPDATE_ITEM($data: ItemUpdateInput!, $where: ItemWhereUniqueInput!) {
  updateItem(data: $data, where: $where) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;
export type UpdateItemMutationFn = ApolloReactCommon.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, baseOptions);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = ApolloReactCommon.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const AllItemsDocument = gql`
    query ALL_ITEMS {
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
export const SingleItemDocument = gql`
    query SINGLE_ITEM($where: ItemWhereUniqueInput!) {
  item(where: $where) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useSingleItemQuery__
 *
 * To run a query within a React component, call `useSingleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SingleItemQuery, SingleItemQueryVariables>) {
        return ApolloReactHooks.useQuery<SingleItemQuery, SingleItemQueryVariables>(SingleItemDocument, baseOptions);
      }
export function useSingleItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleItemQuery, SingleItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SingleItemQuery, SingleItemQueryVariables>(SingleItemDocument, baseOptions);
        }
export type SingleItemQueryHookResult = ReturnType<typeof useSingleItemQuery>;
export type SingleItemLazyQueryHookResult = ReturnType<typeof useSingleItemLazyQuery>;
export type SingleItemQueryResult = ApolloReactCommon.QueryResult<SingleItemQuery, SingleItemQueryVariables>;