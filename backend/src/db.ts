import path from 'path'
import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  debug    : false,
  endpoint : process.env.PRISMA_ENDPOINT,
  secret   : process.env.PRISMA_SECRET,
  typeDefs : path.resolve(__dirname, 'prisma/generated/prisma.graphql'),
})

export { prisma as prismaClient } from 'Prisma/generated/prisma-client'
export { prisma }
