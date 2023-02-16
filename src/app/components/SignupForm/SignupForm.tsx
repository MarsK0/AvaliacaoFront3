import { StyledForm, Container, Wrapper } from "./style"
import FormInput from "../FormInput/FormInput"

const SignupForm: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <StyledForm>
          <FormInput placeholder="Username" type="text"/>
        </StyledForm>
      </Wrapper>
    </Container>
  )
}

export default SignupForm