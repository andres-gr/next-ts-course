import {
  InferType,
  number,
  object,
  string,
} from 'yup'

const createItemSchema = object().shape({
  description: string()
    .default('')
    .required(),
  image: string()
    .default(''),
  largeImage: string()
    .default(''),
  price: number()
    .default(0)
    .required(),
  title: string()
    .default('')
    .required(),
})

export type CreateItemSchema = InferType<typeof createItemSchema>

export default createItemSchema
