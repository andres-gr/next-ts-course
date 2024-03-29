// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo, GraphQLIsTypeOfFn } from "graphql";
import {
  Item,
  ItemConnection,
  PageInfo,
  ItemEdge,
  AggregateItem,
  User
} from "../../prisma/generated/prisma-client";
import { Context } from "../../types";

export type ItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "image_ASC"
  | "image_DESC"
  | "largeImage_ASC"
  | "largeImage_DESC"
  | "price_ASC"
  | "price_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";
export type Permission =
  | "ADMIN"
  | "ITEM_CREATE"
  | "ITEM_DELETE"
  | "ITEM_UPDATE"
  | "PEMISSION_UPDATE"
  | "USER";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ItemWhereUniqueInput {
    id?: string | null;
  }
  export interface ItemWhereInput {
    AND?: ItemWhereInput[] | null;
    OR?: ItemWhereInput[] | null;
    NOT?: ItemWhereInput[] | null;
    id?: string | null;
    id_not?: string | null;
    id_in?: string[] | null;
    id_not_in?: string[] | null;
    id_lt?: string | null;
    id_lte?: string | null;
    id_gt?: string | null;
    id_gte?: string | null;
    id_contains?: string | null;
    id_not_contains?: string | null;
    id_starts_with?: string | null;
    id_not_starts_with?: string | null;
    id_ends_with?: string | null;
    id_not_ends_with?: string | null;
    title?: string | null;
    title_not?: string | null;
    title_in?: string[] | null;
    title_not_in?: string[] | null;
    title_lt?: string | null;
    title_lte?: string | null;
    title_gt?: string | null;
    title_gte?: string | null;
    title_contains?: string | null;
    title_not_contains?: string | null;
    title_starts_with?: string | null;
    title_not_starts_with?: string | null;
    title_ends_with?: string | null;
    title_not_ends_with?: string | null;
    description?: string | null;
    description_not?: string | null;
    description_in?: string[] | null;
    description_not_in?: string[] | null;
    description_lt?: string | null;
    description_lte?: string | null;
    description_gt?: string | null;
    description_gte?: string | null;
    description_contains?: string | null;
    description_not_contains?: string | null;
    description_starts_with?: string | null;
    description_not_starts_with?: string | null;
    description_ends_with?: string | null;
    description_not_ends_with?: string | null;
    image?: string | null;
    image_not?: string | null;
    image_in?: string[] | null;
    image_not_in?: string[] | null;
    image_lt?: string | null;
    image_lte?: string | null;
    image_gt?: string | null;
    image_gte?: string | null;
    image_contains?: string | null;
    image_not_contains?: string | null;
    image_starts_with?: string | null;
    image_not_starts_with?: string | null;
    image_ends_with?: string | null;
    image_not_ends_with?: string | null;
    largeImage?: string | null;
    largeImage_not?: string | null;
    largeImage_in?: string[] | null;
    largeImage_not_in?: string[] | null;
    largeImage_lt?: string | null;
    largeImage_lte?: string | null;
    largeImage_gt?: string | null;
    largeImage_gte?: string | null;
    largeImage_contains?: string | null;
    largeImage_not_contains?: string | null;
    largeImage_starts_with?: string | null;
    largeImage_not_starts_with?: string | null;
    largeImage_ends_with?: string | null;
    largeImage_not_ends_with?: string | null;
    price?: number | null;
    price_not?: number | null;
    price_in?: number[] | null;
    price_not_in?: number[] | null;
    price_lt?: number | null;
    price_lte?: number | null;
    price_gt?: number | null;
    price_gte?: number | null;
    createdAt?: string | null;
    createdAt_not?: string | null;
    createdAt_in?: string[] | null;
    createdAt_not_in?: string[] | null;
    createdAt_lt?: string | null;
    createdAt_lte?: string | null;
    createdAt_gt?: string | null;
    createdAt_gte?: string | null;
    updatedAt?: string | null;
    updatedAt_not?: string | null;
    updatedAt_in?: string[] | null;
    updatedAt_not_in?: string[] | null;
    updatedAt_lt?: string | null;
    updatedAt_lte?: string | null;
    updatedAt_gt?: string | null;
    updatedAt_gte?: string | null;
  }

  export interface ArgsItem {
    where: ItemWhereUniqueInput;
  }

  export interface ArgsItems {
    where?: ItemWhereInput | null;
    orderBy?: ItemOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export interface ArgsItemsConnection {
    where?: ItemWhereInput | null;
    orderBy?: ItemOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type ItemResolver =
    | ((
        parent: undefined,
        args: ArgsItem,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | null | Promise<Item | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | null | Promise<Item | null>;
      };

  export type ItemsResolver =
    | ((
        parent: undefined,
        args: ArgsItems,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Item | null> | Promise<Array<Item | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsItems,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Item | null> | Promise<Array<Item | null>>;
      };

  export type ItemsConnectionResolver =
    | ((
        parent: undefined,
        args: ArgsItemsConnection,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => ItemConnection | Promise<ItemConnection>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsItemsConnection,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => ItemConnection | Promise<ItemConnection>;
      };

  export type MeResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type UsersResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<User | null> | null | Promise<Array<User | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<User | null> | null | Promise<Array<User | null> | null>;
      };

  export interface Type {
    item:
      | ((
          parent: undefined,
          args: ArgsItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | null | Promise<Item | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsItem,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | null | Promise<Item | null>;
        };

    items:
      | ((
          parent: undefined,
          args: ArgsItems,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Item | null> | Promise<Array<Item | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsItems,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Item | null> | Promise<Array<Item | null>>;
        };

    itemsConnection:
      | ((
          parent: undefined,
          args: ArgsItemsConnection,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => ItemConnection | Promise<ItemConnection>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsItemsConnection,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => ItemConnection | Promise<ItemConnection>;
        };

    me:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    users:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<User | null> | null | Promise<Array<User | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<User | null> | null | Promise<Array<User | null> | null>;
        };
  }
}

export namespace ItemResolvers {
  export const defaultResolvers = {
    id: (parent: Item) => parent.id,
    title: (parent: Item) => parent.title,
    description: (parent: Item) => parent.description,
    image: (parent: Item) => (parent.image === undefined ? null : parent.image),
    largeImage: (parent: Item) =>
      parent.largeImage === undefined ? null : parent.largeImage,
    price: (parent: Item) => parent.price,
    createdAt: (parent: Item) => parent.createdAt,
    updatedAt: (parent: Item) => parent.updatedAt
  };

  export type IdResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type ImageResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type LargeImageResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type PriceResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UpdatedAtResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    image:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    largeImage:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    price:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | Promise<number>;
        };

    createdAt:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    updatedAt:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    __isTypeOf?: GraphQLIsTypeOfFn<Item, Context>;
  }
}

export namespace ItemConnectionResolvers {
  export const defaultResolvers = {
    pageInfo: (parent: ItemConnection) => parent.pageInfo,
    edges: (parent: ItemConnection) => parent.edges
  };

  export type PageInfoResolver =
    | ((
        parent: ItemConnection,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => PageInfo | Promise<PageInfo>)
    | {
        fragment: string;
        resolve: (
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => PageInfo | Promise<PageInfo>;
      };

  export type EdgesResolver =
    | ((
        parent: ItemConnection,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<ItemEdge | null> | Promise<Array<ItemEdge | null>>)
    | {
        fragment: string;
        resolve: (
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<ItemEdge | null> | Promise<Array<ItemEdge | null>>;
      };

  export type AggregateResolver =
    | ((
        parent: ItemConnection,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AggregateItem | Promise<AggregateItem>)
    | {
        fragment: string;
        resolve: (
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AggregateItem | Promise<AggregateItem>;
      };

  export interface Type {
    pageInfo:
      | ((
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => PageInfo | Promise<PageInfo>)
      | {
          fragment: string;
          resolve: (
            parent: ItemConnection,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => PageInfo | Promise<PageInfo>;
        };

    edges:
      | ((
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<ItemEdge | null> | Promise<Array<ItemEdge | null>>)
      | {
          fragment: string;
          resolve: (
            parent: ItemConnection,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<ItemEdge | null> | Promise<Array<ItemEdge | null>>;
        };

    aggregate:
      | ((
          parent: ItemConnection,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AggregateItem | Promise<AggregateItem>)
      | {
          fragment: string;
          resolve: (
            parent: ItemConnection,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AggregateItem | Promise<AggregateItem>;
        };
  }
}

export namespace PageInfoResolvers {
  export const defaultResolvers = {
    hasNextPage: (parent: PageInfo) => parent.hasNextPage,
    hasPreviousPage: (parent: PageInfo) => parent.hasPreviousPage,
    startCursor: (parent: PageInfo) =>
      parent.startCursor === undefined ? null : parent.startCursor,
    endCursor: (parent: PageInfo) =>
      parent.endCursor === undefined ? null : parent.endCursor
  };

  export type HasNextPageResolver =
    | ((
        parent: PageInfo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type HasPreviousPageResolver =
    | ((
        parent: PageInfo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type StartCursorResolver =
    | ((
        parent: PageInfo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type EndCursorResolver =
    | ((
        parent: PageInfo,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    hasNextPage:
      | ((
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: PageInfo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    hasPreviousPage:
      | ((
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: PageInfo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    startCursor:
      | ((
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: PageInfo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    endCursor:
      | ((
          parent: PageInfo,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: PageInfo,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export namespace ItemEdgeResolvers {
  export const defaultResolvers = {
    node: (parent: ItemEdge) => parent.node,
    cursor: (parent: ItemEdge) => parent.cursor
  };

  export type NodeResolver =
    | ((
        parent: ItemEdge,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | Promise<Item>)
    | {
        fragment: string;
        resolve: (
          parent: ItemEdge,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>;
      };

  export type CursorResolver =
    | ((
        parent: ItemEdge,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: ItemEdge,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    node:
      | ((
          parent: ItemEdge,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>)
      | {
          fragment: string;
          resolve: (
            parent: ItemEdge,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | Promise<Item>;
        };

    cursor:
      | ((
          parent: ItemEdge,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: ItemEdge,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };
  }
}

export namespace AggregateItemResolvers {
  export const defaultResolvers = {
    count: (parent: AggregateItem) => parent.count
  };

  export type CountResolver =
    | ((
        parent: AggregateItem,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolve: (
          parent: AggregateItem,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>;
      };

  export interface Type {
    count:
      | ((
          parent: AggregateItem,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolve: (
            parent: AggregateItem,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | Promise<number>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
    email: (parent: User) => parent.email,
    resetToken: (parent: User) =>
      parent.resetToken === undefined ? null : parent.resetToken,
    resetTokenExpiry: (parent: User) =>
      parent.resetTokenExpiry === undefined ? null : parent.resetTokenExpiry,
    permissions: (parent: User) => parent.permissions
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type ResetTokenResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type ResetTokenExpiryResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | null | Promise<number | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>;
      };

  export type PermissionsResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Permission | null>
        | null
        | Promise<Array<Permission | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Permission | null>
          | null
          | Promise<Array<Permission | null> | null>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    resetToken:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    resetTokenExpiry:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | null | Promise<number | null>;
        };

    permissions:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Permission | null>
          | null
          | Promise<Array<Permission | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Permission | null>
            | null
            | Promise<Array<Permission | null> | null>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ItemCreateInput {
    id?: string | null;
    title: string;
    description: string;
    image?: string | null;
    largeImage?: string | null;
    price: number;
  }
  export interface ItemWhereUniqueInput {
    id?: string | null;
  }
  export interface ItemUpdateInput {
    title?: string | null;
    description?: string | null;
    image?: string | null;
    largeImage?: string | null;
    price?: number | null;
  }

  export interface ArgsCreateItem {
    data: ItemCreateInput;
  }

  export interface ArgsDeleteItem {
    where: ItemWhereUniqueInput;
  }

  export interface ArgsUpdateItem {
    data: ItemUpdateInput;
    where: ItemWhereUniqueInput;
  }

  export interface ArgsSignin {
    email: string;
    password: string;
  }

  export interface ArgsSignup {
    email: string;
    name: string;
    password: string;
  }

  export type CreateItemResolver =
    | ((
        parent: undefined,
        args: ArgsCreateItem,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | Promise<Item>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>;
      };

  export type DeleteItemResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteItem,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | null | Promise<Item | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | null | Promise<Item | null>;
      };

  export type UpdateItemResolver =
    | ((
        parent: undefined,
        args: ArgsUpdateItem,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | Promise<Item>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUpdateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>;
      };

  export type SigninResolver =
    | ((
        parent: undefined,
        args: ArgsSignin,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>;
      };

  export type SignupResolver =
    | ((
        parent: undefined,
        args: ArgsSignup,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>;
      };

  export interface Type {
    createItem:
      | ((
          parent: undefined,
          args: ArgsCreateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateItem,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | Promise<Item>;
        };

    deleteItem:
      | ((
          parent: undefined,
          args: ArgsDeleteItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | null | Promise<Item | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteItem,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | null | Promise<Item | null>;
        };

    updateItem:
      | ((
          parent: undefined,
          args: ArgsUpdateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUpdateItem,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | Promise<Item>;
        };

    signin:
      | ((
          parent: undefined,
          args: ArgsSignin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignin,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | Promise<User>;
        };

    signup:
      | ((
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | Promise<User>;
        };
  }
}

export namespace NodeResolvers {
  export interface Type {
    __resolveType: (
      value: Item,
      context: Context,
      info: GraphQLResolveInfo
    ) => "Item" | Promise<"Item">;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Item: ItemResolvers.Type;
  ItemConnection: ItemConnectionResolvers.Type;
  PageInfo: PageInfoResolvers.Type;
  ItemEdge: ItemEdgeResolvers.Type;
  AggregateItem: AggregateItemResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  Node?: NodeResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
