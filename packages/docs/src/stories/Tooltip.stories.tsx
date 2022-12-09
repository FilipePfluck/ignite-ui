import { Meta, StoryObj } from '@storybook/react'

import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@pfluck-ignite-ui/react'

export default {
  title: 'data display/Tooltip',
  component: Tooltip,
  args: {
    message: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box css={{ display: 'flex' }}>{Story()}</Box>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
