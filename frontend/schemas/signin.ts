import {
  object,
  string,
} from 'yup'

const signinSchema = object().shape({
  email: string()
    .default('')
    .email()
    .required(),
  password: string()
    .default('')
    .required(),
})

export type SigninSchema = {
  email: string
  password: string
}

export default signinSchema
