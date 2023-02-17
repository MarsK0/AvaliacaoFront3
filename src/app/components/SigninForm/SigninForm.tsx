import { StyledForm, Container, Wrapper, StyledH1, StyledH2 } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import NeonButton from "../NeonButton/NeonButton"

const SigninForm: React.FC = () => {
  return(
    <>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <Container>
        <Wrapper>
          <StyledForm>
            <StyledH2>Entrar</StyledH2>
            <InputWrapper>
              <StyledInput required type="text" />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            <InputWrapper>
              <StyledInput required type="password"/>
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper>
            <NeonButton color="#fff" text="Entrar" />
          </StyledForm>
        </Wrapper>
      </Container>
    </>
  )
}

export default SigninForm