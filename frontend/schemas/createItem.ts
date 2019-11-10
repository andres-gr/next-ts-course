import {
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

export default createItemSchema
