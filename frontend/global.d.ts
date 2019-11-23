
declare module '*/mutation.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const SIGNUP: DocumentNode;
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
export const ITEMS_PAGINATION: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/app-client.fragments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Item: DocumentNode;
export const ItemConnection: DocumentNode;
export const PageInfo: DocumentNode;
export const ItemEdge: DocumentNode;
export const AggregateItem: DocumentNode;
export const User: DocumentNode;
export const ItemNoNesting: DocumentNode;
export const PageInfoNoNesting: DocumentNode;
export const ItemEdgeNoNesting: DocumentNode;
export const AggregateItemNoNesting: DocumentNode;
export const UserNoNesting: DocumentNode;
export const ItemDeepNesting: DocumentNode;
export const ItemConnectionDeepNesting: DocumentNode;
export const PageInfoDeepNesting: DocumentNode;
export const ItemEdgeDeepNesting: DocumentNode;
export const AggregateItemDeepNesting: DocumentNode;
export const UserDeepNesting: DocumentNode;

  export default defaultDocument;
}
    