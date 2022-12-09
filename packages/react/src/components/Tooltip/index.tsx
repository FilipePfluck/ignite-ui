import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import * as S from './styles'

export interface TooltipProps
  extends ComponentProps<typeof S.TooltipContainer> {
  message: string
  children: ReactNode
}

export const TooltipProvider = S.TooltipProvider

export const Tooltip = ({ children, message, ...props }: TooltipProps) => {
  return (
    <S.TooltipContainer {...props}>
      <S.TooltipTrigger asChild>{children}</S.TooltipTrigger>
      <S.TooltipPortal>
        <S.TooltipContent sideOffset={4}>
          <Text size="sm">{message}</Text>
          <S.TooltipArrow />
        </S.TooltipContent>
      </S.TooltipPortal>
    </S.TooltipContainer>
  )
}
