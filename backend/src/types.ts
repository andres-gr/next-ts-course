import { ContextParameters } from 'graphql-yoga/dist/types'
import { Prisma as PrismaBinding } from 'Prisma/generated/prisma-binding'
import { Prisma as PrismaClient } from 'Prisma/generated/prisma-client'

export interface Context extends ContextParameters {
  prisma: PrismaBinding
  prismaClient: PrismaClient
}
