import { StoryObj, Meta, DecoratorFn } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

const decoratorDefault: DecoratorFn = (Story) => {
  return (
    <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
      {Story()}
      <Text>Aceitar termos de uso</Text>
    </Box>
  )
}

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [decoratorDefault],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Seu nome',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    value: 'Gustavo',
  },
}
