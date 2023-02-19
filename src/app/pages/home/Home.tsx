import { ContainerHome, ContainerMessages } from "../../components/Containers/style"
import NavBar from "../../components/NavBar/NavBar"
import Message from "../../components/Message/Message"

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <NavBar />
      <ContainerMessages>
        <Message />
      </ContainerMessages>
    </ContainerHome>
  )
}

export default Home