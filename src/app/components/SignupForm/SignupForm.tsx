import { StyledForm, Container, Wrapper, StyledH1, StyledH2 } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import NeonButton from "../NeonButton/NeonButton"

const SignupForm: React.FC = () => {
  
  return(
    <>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <Container>
        <Wrapper>
          <StyledForm>
            <StyledH2>Cadastrar</StyledH2>
            <InputWrapper>
              <StyledInput required type="text" />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            <InputWrapper>
              <StyledInput required type="text" />
              <StyledSpan>{'URL Avatar'}</StyledSpan>
            </InputWrapper>
            <InputWrapper>
              <StyledInput required type="password"/>
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper>
            <InputWrapper>
              <StyledInput required type="password"/>
              <StyledSpan>{'Repita a Senha'}</StyledSpan>
            </InputWrapper>
            <NeonButton color="#fff" 
                        text="Cadastrar" />
          </StyledForm>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignupForm