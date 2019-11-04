import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import Query from 'Resolvers/Query'
import Mutation from 'Resolvers/Mutation'
import {
  prisma,
  prismaClient,
} from './db'

const create = () => new GraphQLServer({
  typeDefs  : path.resolve(__dirname, 'prisma/schema.graphql'),
  resolvers : {
    Query,
    Mutation,
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    prisma,
    prismaClient,
  }),
})

export default create
