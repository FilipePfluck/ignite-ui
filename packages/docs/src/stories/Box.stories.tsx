import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@pfluck-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
