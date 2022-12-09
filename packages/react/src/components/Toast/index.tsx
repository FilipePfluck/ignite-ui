import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

import { Heading } from '../Heading'
import { Text } from '../Text'
import * as S from './styles'

export interface ToastProps extends ComponentProps<typeof S.ToastContainer> {
  title: string
  description: string
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <S.ToastContainer {...props}>
      <S.ToastTitle>
        <Heading size="sm">{title}</Heading>
      </S.ToastTitle>
      <S.ToastDescription>
        <Text>{description}</Text>
      </S.ToastDescription>
      <S.CloseToast>
        <X weight="bold" />
      </S.CloseToast>
    </S.ToastContainer>
  )
}

export const ToastProvider = S.ToastProvider

export const ToastViewport = S.ToastViewport
