import { MutationResolvers } from 'Resolvers/generated'
import { Item } from 'Prisma/generated/prisma-client'

const Mutation: MutationResolvers.Type = {
  createItem: async (parent, { data }, { prismaClient }) => {
    const item = await prismaClient.createItem({ ...data })
    return item
  },
  deleteItem: async (parent, { where }, { prismaClient }) => {
    const item = await prismaClient.item({ id: where.id })
      .$fragment<Pick<Item, 'id'>>('{ id }')
    return prismaClient.deleteItem({ id: item.id })
  },
  updateItem: async (parent, {
    data,
    where: { id },
  }, { prismaClient }) => {
    const item = await prismaClient.updateItem({
      data,
      where: { id },
    })
    return item
  },
}

export default Mutation
