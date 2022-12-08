import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@pfluck-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse quam optio obcaecati, harum unde labore tenetur, deleniti assumenda voluptas tempore aspernatur voluptates sequi? Pariatur soluta eum adipisci suscipit molestiae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
