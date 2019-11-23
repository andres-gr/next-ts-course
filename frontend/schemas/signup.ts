import {
  object,
  string,
} from 'yup'

const signupSchema = object().shape({
  email: string()
    .default('')
    .email()
    .required(),
  name: string()
    .default('')
    .required(),
  password: string()
    .default('')
    .required(),
})

export type SignupSchema = {
  email: string
  name: string
  password: string
}

export default signupSchema
