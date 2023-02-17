import { StyledForm, Container, Wrapper, StyledH1, StyledH2 } from "./style"
import FormInput from "../FormInput/FormInput"
import NeonButton from "../NeonButton/NeonButton"

const SignupForm: React.FC = () => {
  
  return(
    <>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <Container>
        <Wrapper>
          <StyledForm>
            <StyledH2>Cadastrar</StyledH2>
            <FormInput placeholder="Usuário" 
                       type="text" />
            <FormInput placeholder="URL Avatar" 
                       type="text" />
            <FormInput placeholder="Senha" 
                       type="password" />
            <FormInput placeholder="Repita a Senha" 
                       type="password" />
            <NeonButton color="#fff" 
                        text="Cadastrar" />
          </StyledForm>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignupForm