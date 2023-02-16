import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps, textSizeKeys } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Texto de exemplo',
    size: 'md',
  },
  argTypes: {
    size: {
      options: textSizeKeys,
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Texto em negrito',
    as: 'strong',
  },
}
