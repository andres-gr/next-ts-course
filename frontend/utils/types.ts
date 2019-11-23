import { ReactNode } from 'react'
import { InferProps } from 'prop-types'
import { ItemCreateInput } from 'GraphQL/types'
import { FormikProps } from 'formik'
import { AxiosError } from 'axios'
import { SignupSchema } from 'Schemas/signup'

export type ChildrenProps = { children: ReactNode }

export type CreateItemValues = StripFields<ItemCreateInput>

export type Files = {
  state: {
    files?: FileList | null
  }
}

export type HandleFileUpload = (files?: FileList | null) => void

export type HandleSubmit = (values: CreateItemValues, formikArgs: FormikProps<CreateItemValues>) => void

export type HandleSubmitSignup = (values: SignupSchema, formikArgs: SignupFormikArgs) => void

export type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
}

export type Nuldefined = null | undefined

export type PageProps = {
  query?: {
    [x: string]: string
  }
}

export type SignupFormikArgs = FormikProps<SignupSchema>

export type StripFields<T> = Omit<T, 'id' | '__typename'>

export type UseUploadFile = (files: FileList | Nuldefined) => Promise<UseUploadFileResult>

export type UseUploadFileResult = {
  error?: null | AxiosError,
  uri?: {
    image?: string | null,
    largeImage?: string | null,
  },
}
