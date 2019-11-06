import gql from 'graphql-tag';
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
  items: Array<Maybe<Item>>,
  users?: Maybe<Array<Maybe<User>>>,
};

export type User = Node & {
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


