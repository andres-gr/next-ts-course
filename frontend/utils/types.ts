import { ReactNode } from 'react'
import { InferProps } from 'prop-types'
import { NextPageContext } from 'next'
import { ItemCreateInput } from 'GraphQL/types'
import { FormikProps } from 'formik'
import { AxiosError } from 'axios'

export type ChildrenProps = { children: ReactNode }

export type Files = {
  state: {
    files?: FileList | null
  }
}

export type HandleFileUpload = (files?: FileList | null) => void

export type HandleSubmit = (data: StripFields<ItemCreateInput>, formikArgs: FormikProps<StripFields<ItemCreateInput>>) => void

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

export type StripFields<T> = Omit<T, 'id' | '__typename'>

export type UseUploadFile = (files: FileList | null) => Promise<UseUploadFileResult>

export type UseUploadFileResult = {
  error?: null | AxiosError,
  uri?: {
    image?: string | null,
    largeImage?: string | null,
  },
}
