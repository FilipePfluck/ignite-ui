import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@pfluck-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será um `h2`, mas podemos trocar isso com a propriedade `as`',
      },
    },
  },
}
