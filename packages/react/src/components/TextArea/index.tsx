import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as S from './styles'

export type TextAreaProps = ComponentProps<typeof S.TextAreaContainer>

export const TextArea = forwardRef<
  ElementRef<typeof S.TextAreaContainer>,
  TextAreaProps
>(({ ...props }, ref) => {
  return <S.TextAreaContainer ref={ref} {...props} />
})

TextArea.displayName = 'TextArea'
