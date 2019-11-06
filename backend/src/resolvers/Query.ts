import { forwardTo } from 'prisma-binding'
import { QueryResolvers } from 'Resolvers/generated'

const Query: QueryResolvers.Type = {
  items : forwardTo('prisma'),
  users : async (parent, args, { prismaClient }) => prismaClient.users(),
}

export default Query
