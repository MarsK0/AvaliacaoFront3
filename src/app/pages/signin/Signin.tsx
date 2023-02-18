import { Container } from "../../components/Container/style"
import { StyledH1 } from "../../components/StyledH1/style"
import SigninForm from "../../components/SigninForm/SigninForm"

const Signin: React.FC = () => {
  return(
    <Container>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <SigninForm />
    </Container>
  )
}

export default Signin