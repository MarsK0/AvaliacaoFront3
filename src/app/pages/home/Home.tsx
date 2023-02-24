import { ContainerHome, ContainerMessages } from "../../components/Containers/style"
import NavBar from "../../components/NavBar/NavBar"
import Message from "../../components/Message/Message"
import { useEffect, useState } from "react"
import MessageModal from "../../components/MessageModal/MessageModal"

const Home: React.FC = () => {

  const [messageModalOpen, setMessageModalOpen] = useState(false)

  return (
    <ContainerHome>
      <MessageModal modalIsOpen={messageModalOpen}
                    setMessageModalOpen={setMessageModalOpen}/>
      <NavBar setMessageModalOpen={setMessageModalOpen}/>
      <ContainerMessages>
        <Message />
      </ContainerMessages>
    </ContainerHome>
  )
}

export default Home