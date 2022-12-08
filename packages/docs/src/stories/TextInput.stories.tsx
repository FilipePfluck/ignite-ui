import { Meta, StoryObj } from '@storybook/react'

import { TextInput, TextInputProps } from '@pfluck-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}
