import { StyledForm, Container, Wrapper, StyledH2 } from "./style"
import FormInput from "../FormInput/FormInput"
import NeonButton from "../NeonButton/NeonButton"

const SigninForm: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <StyledForm>
          <StyledH2>Entrar</StyledH2>
          <FormInput type="text" placeholder="Usuário" />
          <FormInput type="password" placeholder="Senha" />
          <NeonButton color="#fff" text="Entrar" />
        </StyledForm>
      </Wrapper>
    </Container>
  )
}

export default SigninForm