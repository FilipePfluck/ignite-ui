import { Meta, StoryObj } from '@storybook/react'

import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@pfluck-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'data display/Toast',
  component: Toast,
  args: {
    title: 'This is a Toast',
    description: 'lorem ipsum',
    children: <Button>Hover me</Button>,
    open: true,
  },
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false)

      args.open = isOpen
      args.onOpenChange = setIsOpen

      return (
        <ToastProvider>
          <Box>
            <Button onClick={() => setIsOpen(true)}>Click me</Button>
          </Box>
          {Story()}
          <ToastViewport />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
