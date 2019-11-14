
declare module '*/mutation.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CREATE_ITEM: DocumentNode;
export const DELETE_ITEM: DocumentNode;
export const UPDATE_ITEM: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/query.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ALL_ITEMS: DocumentNode;
export const SINGLE_ITEM: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/app-client.fragments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Item: DocumentNode;
export const User: DocumentNode;
export const ItemNoNesting: DocumentNode;
export const UserNoNesting: DocumentNode;
export const ItemDeepNesting: DocumentNode;
export const UserDeepNesting: DocumentNode;

  export default defaultDocument;
}
    