import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 100px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  padding: '$4',
  borderRadius: '$sm',
  minWidth: 320,

  backgroundColor: '$gray800',
  border: '1px solid $gray500',

  listStyle: 'none',

  "&[data-state='open']": {
    animation: `${slideIn} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {})

export const ToastDescription = styled(Toast.Description, {})

export const CloseToast = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$white',
})

export const ToastViewport = styled(Toast.Viewport, {})

export const ToastProvider = Toast.Provider
