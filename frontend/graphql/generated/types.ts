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

export type AggregateItem = {
   __typename?: 'AggregateItem',
  count: Scalars['Int'],
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

/** A connection to a list of items. */
export type ItemConnection = {
   __typename?: 'ItemConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ItemEdge>>,
  aggregate: AggregateItem,
};

export type ItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  description: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  price: Scalars['Int'],
};

/** An edge in a connection. */
export type ItemEdge = {
   __typename?: 'ItemEdge',
  /** The item at the end of the edge. */
  node: Item,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ItemOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  image_ASC = 'image_ASC',
  image_DESC = 'image_DESC',
  largeImage_ASC = 'largeImage_ASC',
  largeImage_DESC = 'largeImage_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type ItemUpdateInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
};

export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ItemWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ItemWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ItemWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>,
  largeImage?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  largeImage_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  largeImage_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  largeImage_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  largeImage_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  largeImage_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  largeImage_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  largeImage_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  largeImage_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  largeImage_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  largeImage_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  largeImage_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  largeImage_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  largeImage_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createItem: Item,
  deleteItem?: Maybe<Item>,
  updateItem: Item,
  signup: User,
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


export type MutationSignupArgs = {
  email: Scalars['String'],
  name: Scalars['String'],
  password: Scalars['String']
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export enum Permission {
  ADMIN = 'ADMIN',
  ITEM_CREATE = 'ITEM_CREATE',
  ITEM_DELETE = 'ITEM_DELETE',
  ITEM_UPDATE = 'ITEM_UPDATE',
  PEMISSION_UPDATE = 'PEMISSION_UPDATE',
  USER = 'USER'
}

export type Query = {
   __typename?: 'Query',
  item?: Maybe<Item>,
  items: Array<Maybe<Item>>,
  itemsConnection: ItemConnection,
  me?: Maybe<User>,
  users?: Maybe<Array<Maybe<User>>>,
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput
};


export type QueryItemsArgs = {
  where?: Maybe<ItemWhereInput>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryItemsConnectionArgs = {
  where?: Maybe<ItemWhereInput>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['Float']>,
  permissions?: Maybe<Array<Maybe<Permission>>>,
};

export type SignupMutationVariables = {
  email: Scalars['String'],
  name: Scalars['String'],
  password: Scalars['String']
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

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

export type AllItemsQueryVariables = {
  where?: Maybe<ItemWhereInput>,
  skip?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>
};


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

export type ItemsPaginationQueryVariables = {};


export type ItemsPaginationQuery = (
  { __typename?: 'Query' }
  & { itemsConnection: (
    { __typename?: 'ItemConnection' }
    & { aggregate: (
      { __typename?: 'AggregateItem' }
      & Pick<AggregateItem, 'count'>
    ) }
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type ItemFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type ItemConnectionFragment = (
  { __typename?: 'ItemConnection' }
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoNoNestingFragment
  ), edges: Array<Maybe<(
    { __typename?: 'ItemEdge' }
    & ItemEdgeNoNestingFragment
  )>>, aggregate: (
    { __typename?: 'AggregateItem' }
    & AggregateItemNoNestingFragment
  ) }
);

export type PageInfoFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
);

export type ItemEdgeFragment = (
  { __typename?: 'ItemEdge' }
  & Pick<ItemEdge, 'cursor'>
  & { node: (
    { __typename?: 'Item' }
    & ItemNoNestingFragment
  ) }
);

export type AggregateItemFragment = (
  { __typename?: 'AggregateItem' }
  & Pick<AggregateItem, 'count'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'resetToken' | 'resetTokenExpiry' | 'permissions'>
);

export type ItemNoNestingFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type PageInfoNoNestingFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
);

export type ItemEdgeNoNestingFragment = (
  { __typename?: 'ItemEdge' }
  & Pick<ItemEdge, 'cursor'>
);

export type AggregateItemNoNestingFragment = (
  { __typename?: 'AggregateItem' }
  & Pick<AggregateItem, 'count'>
);

export type UserNoNestingFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'resetToken' | 'resetTokenExpiry' | 'permissions'>
);

export type ItemDeepNestingFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'createdAt' | 'updatedAt'>
);

export type ItemConnectionDeepNestingFragment = (
  { __typename?: 'ItemConnection' }
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoDeepNestingFragment
  ), edges: Array<Maybe<(
    { __typename?: 'ItemEdge' }
    & ItemEdgeDeepNestingFragment
  )>>, aggregate: (
    { __typename?: 'AggregateItem' }
    & AggregateItemDeepNestingFragment
  ) }
);

export type PageInfoDeepNestingFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
);

export type ItemEdgeDeepNestingFragment = (
  { __typename?: 'ItemEdge' }
  & Pick<ItemEdge, 'cursor'>
  & { node: (
    { __typename?: 'Item' }
    & ItemDeepNestingFragment
  ) }
);

export type AggregateItemDeepNestingFragment = (
  { __typename?: 'AggregateItem' }
  & Pick<AggregateItem, 'count'>
);

export type UserDeepNestingFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'resetToken' | 'resetTokenExpiry' | 'permissions'>
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
export const PageInfoNoNestingFragmentDoc = gql`
    fragment PageInfoNoNesting on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const ItemEdgeNoNestingFragmentDoc = gql`
    fragment ItemEdgeNoNesting on ItemEdge {
  cursor
}
    `;
export const AggregateItemNoNestingFragmentDoc = gql`
    fragment AggregateItemNoNesting on AggregateItem {
  count
}
    `;
export const ItemConnectionFragmentDoc = gql`
    fragment ItemConnection on ItemConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...ItemEdgeNoNesting
  }
  aggregate {
    ...AggregateItemNoNesting
  }
}
    ${PageInfoNoNestingFragmentDoc}
${ItemEdgeNoNestingFragmentDoc}
${AggregateItemNoNestingFragmentDoc}`;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
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
export const ItemEdgeFragmentDoc = gql`
    fragment ItemEdge on ItemEdge {
  node {
    ...ItemNoNesting
  }
  cursor
}
    ${ItemNoNestingFragmentDoc}`;
export const AggregateItemFragmentDoc = gql`
    fragment AggregateItem on AggregateItem {
  count
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
  resetToken
  resetTokenExpiry
  permissions
}
    `;
export const UserNoNestingFragmentDoc = gql`
    fragment UserNoNesting on User {
  id
  name
  email
  resetToken
  resetTokenExpiry
  permissions
}
    `;
export const PageInfoDeepNestingFragmentDoc = gql`
    fragment PageInfoDeepNesting on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
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
export const ItemEdgeDeepNestingFragmentDoc = gql`
    fragment ItemEdgeDeepNesting on ItemEdge {
  node {
    ...ItemDeepNesting
  }
  cursor
}
    ${ItemDeepNestingFragmentDoc}`;
export const AggregateItemDeepNestingFragmentDoc = gql`
    fragment AggregateItemDeepNesting on AggregateItem {
  count
}
    `;
export const ItemConnectionDeepNestingFragmentDoc = gql`
    fragment ItemConnectionDeepNesting on ItemConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...ItemEdgeDeepNesting
  }
  aggregate {
    ...AggregateItemDeepNesting
  }
}
    ${PageInfoDeepNestingFragmentDoc}
${ItemEdgeDeepNestingFragmentDoc}
${AggregateItemDeepNestingFragmentDoc}`;
export const UserDeepNestingFragmentDoc = gql`
    fragment UserDeepNesting on User {
  id
  name
  email
  resetToken
  resetTokenExpiry
  permissions
}
    `;
export const SignupDocument = gql`
    mutation SIGNUP($email: String!, $name: String!, $password: String!) {
  signup(email: $email, name: $name, password: $password) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
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
    query ALL_ITEMS($where: ItemWhereInput, $skip: Int, $first: Int) {
  items(where: $where, orderBy: createdAt_DESC, skip: $skip, first: $first) {
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
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
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
export const ItemsPaginationDocument = gql`
    query ITEMS_PAGINATION {
  itemsConnection {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useItemsPaginationQuery__
 *
 * To run a query within a React component, call `useItemsPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsPaginationQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsPaginationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemsPaginationQuery, ItemsPaginationQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemsPaginationQuery, ItemsPaginationQueryVariables>(ItemsPaginationDocument, baseOptions);
      }
export function useItemsPaginationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemsPaginationQuery, ItemsPaginationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemsPaginationQuery, ItemsPaginationQueryVariables>(ItemsPaginationDocument, baseOptions);
        }
export type ItemsPaginationQueryHookResult = ReturnType<typeof useItemsPaginationQuery>;
export type ItemsPaginationLazyQueryHookResult = ReturnType<typeof useItemsPaginationLazyQuery>;
export type ItemsPaginationQueryResult = ApolloReactCommon.QueryResult<ItemsPaginationQuery, ItemsPaginationQueryVariables>;
export const MeDocument = gql`
    query ME {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;