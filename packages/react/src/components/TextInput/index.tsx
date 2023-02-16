import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S.Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <S.TextInputContainer>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
