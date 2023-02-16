import { StoryObj, Meta, DecoratorFn } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

const decoratorDefault: DecoratorFn = (Story) => {
  return (
    <Box
      as="label"
      css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
    >
      <Text>Nome</Text>
      {Story()}
    </Box>
  )
}

export default {
  title: 'Forms/Text Input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Seu nome',
  },
  decorators: [decoratorDefault],
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    value: 'Gustavo',
  },
  decorators: [decoratorDefault],
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'teste.com/',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
