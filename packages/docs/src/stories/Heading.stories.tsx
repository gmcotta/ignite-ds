import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps, headingSizeKeys } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    as: 'h2',
    children: 'Heading de exemplo',
  },
  argTypes: {
    size: {
      options: headingSizeKeys,
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading h1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading será um `h2`, mas podemos alterar a tag com a propriedade `as`',
      },
    },
  },
}
