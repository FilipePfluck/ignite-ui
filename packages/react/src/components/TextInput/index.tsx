import { ComponentProps } from 'react'
import * as S from './styles'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
