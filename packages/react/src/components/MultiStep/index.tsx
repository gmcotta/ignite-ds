import { ComponentProps } from 'react'
import * as S from './styles'

export type MultiStepProps = ComponentProps<typeof S.MultiStepContainer> & {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <S.MultiStepContainer>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>
      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <S.Step key={step} active={currentStep >= step} />
        ))}
      </S.Steps>
    </S.MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
