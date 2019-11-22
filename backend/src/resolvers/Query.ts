import { forwardTo } from 'prisma-binding'
import { QueryResolvers } from 'Resolvers/generated'

const Query: QueryResolvers.Type = {
  item            : forwardTo('prisma'),
  items           : forwardTo('prisma'),
  itemsConnection : forwardTo('prisma'),
  users           : async (_parent, _args, { prismaClient }) => prismaClient.users(),
}

export default Query
