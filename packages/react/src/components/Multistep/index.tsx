import * as S from './styles'

export interface MultistepProps {
  size: number
  currentStep?: number
}

export const Multistep = ({ size, currentStep = 1 }: MultistepProps) => {
  return (
    <S.MultistepContainer>
      <S.Label>
        Passo {currentStep} de {size}
        <S.Steps css={{ '--steps-size': size }}>
          {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
            <S.Step key={step} active={currentStep >= step} />
          ))}
        </S.Steps>
      </S.Label>
    </S.MultistepContainer>
  )
}

Multistep.displayName = 'Multistep'
