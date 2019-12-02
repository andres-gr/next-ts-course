import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MutationResolvers } from 'Resolvers/generated'
import { Item } from 'Prisma/generated/prisma-client'

const Mutation: MutationResolvers.Type = {
  createItem: async (_parent, { data }, { prismaClient }) => {
    const item = await prismaClient.createItem({ ...data })
    return item
  },
  deleteItem: async (_parent, { where }, { prismaClient }) => {
    const item = await prismaClient.item({ id: where.id })
      .$fragment<Pick<Item, 'id'>>('{ id }')
    return prismaClient.deleteItem({ id: item.id })
  },
  signin: async (_parent,
    {
      email,
      password,
    }, {
      prismaClient,
      response,
    },
  ) => {
    const user = await prismaClient.user({ email })
    if (!user) throw new Error(`No user found for email ${email}`)
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Invalid password!')
    const token = sign({ userId: user.id }, process.env.APP_SECRET)
    response.cookie('token', token, {
      httpOnly : true,
      maxAge   : 1000 * 60 * 60 * 24 * 365,
    })
    return user
  },
  signup: async (_parent,
    {
      name,
      ...rest
    }, {
      prismaClient,
      response,
    },
  ) => {
    const email = rest.email.toLowerCase(),
          password = await bcrypt.hash(rest.password, 10)
    const user = await prismaClient.createUser({
      email,
      name,
      password,
      permissions: {
        set: ['USER'],
      },
    })
    const token = sign(
      { userId: user.id },
      process.env.APP_SECRET,
    )
    response.cookie('token', token, {
      httpOnly : true,
      maxAge   : 1000 * 60 * 60 * 24 * 365,
    })
    return user
  },
  updateItem: async (_parent, {
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
