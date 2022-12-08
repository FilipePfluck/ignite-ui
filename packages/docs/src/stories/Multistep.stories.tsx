import { Meta, StoryObj } from '@storybook/react'

import { Box, Multistep, MultistepProps } from '@pfluck-ignite-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
  },
}
