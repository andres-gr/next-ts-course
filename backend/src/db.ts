import path from 'path'
import { Prisma } from 'prisma-binding'

export { prisma as prismaClient } from 'Prisma/generated/prisma-client'

const prisma = new Prisma({
  typeDefs : path.resolve(__dirname, 'prisma/generated/prisma.graphql'),
  endpoint : process.env.PRISMA_ENDPOINT,
  secret   : process.env.PRISMA_SECRET,
  debug    : false,
})

export { prisma }
