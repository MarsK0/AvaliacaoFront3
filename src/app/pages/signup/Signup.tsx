import SignupForm from "../../components/SignupForm/SignupForm"
import { StyledH1 } from "../../components/StyledH1/style"
import { Container } from "../../components/Containers/style"

const Signup: React.FC = () => {
  

  return (
    <Container>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <SignupForm />
    </Container>
  )
}

export default Signup
