import { Meta, StoryObj } from '@storybook/react'

import { TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
