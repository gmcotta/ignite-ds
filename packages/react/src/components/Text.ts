import { fontSizes } from '@gmcotta-ignite-ds/tokens'
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const textSizeKeys = Object.keys(fontSizes)

const sizesStylesObject = textSizeKeys.reduce<
  Record<string, { fontSize: string }>
>((acc, size) => {
  return {
    ...acc,
    [size]: { fontSize: `$${size}` },
  }
}, {})

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: sizesStylesObject,
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
