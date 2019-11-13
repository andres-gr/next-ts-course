import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import Mutation from 'Resolvers/Mutation'
import Query from 'Resolvers/Query'
import {
  prisma,
  prismaClient,
} from './db'

const create = () => new GraphQLServer({
  context: req => ({
    ...req,
    prisma,
    prismaClient,
  }),
  resolvers: {
    Mutation,
    Query,
  } as any,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  typeDefs: path.resolve(__dirname, 'prisma/schema.graphql'),
})

export default create
