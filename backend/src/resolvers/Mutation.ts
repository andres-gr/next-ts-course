import { MutationResolvers } from 'Resolvers/generated'

const Mutation: MutationResolvers.Type = {
  createItem: async (parent, { data }, { prismaClient }) => {
    const item = await prismaClient.createItem({ ...data })
    return item
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
