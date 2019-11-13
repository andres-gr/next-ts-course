import { InferProps } from 'prop-types'
import { NextPageContext } from 'next'
import { ItemCreateInput } from 'GraphQL/types'
import {
  FormikProps,
  FormikValues,
} from 'formik'
import { AxiosError } from 'axios'

export type Files = {
  state: {
    files?: FileList | null
  }
}

export type HandleFileUpload = (files?: FileList | null) => void

export type HandleSubmit = (data: ItemCreateInput, formikArgs: FormikProps<FormikValues>) => void

export type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
}

export type NextInitProps = {
  pageProps: {
    query?: NextPageContext['query']
  }
}

export type UseUploadFile = (files: FileList | null) => Promise<UseUploadFileResult>

export type UseUploadFileResult = {
  error?: null | AxiosError,
  uri?: {
    image?: string | null,
    largeImage?: string | null,
  },
}
