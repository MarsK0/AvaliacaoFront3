import { ContainerHome, ContainerMessages } from "../../components/Containers/style"
import NavBar from "../../components/NavBar/NavBar"
import MessageCard from "../../components/MessageCard/MessageCard"
import { useState } from "react"
import MessageModal from "../../components/MessageModal/MessageModal"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"

const Home: React.FC = () => {

  const loggedUser = useSelector((state: AppState) => state.authentication.user)
  const userMessages = loggedUser?.messages

  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [messageAction, setMessageAction] = useState<'criar' | 'editar' | undefined>(undefined)

  return (
    <ContainerHome>
      <MessageModal modalIsOpen={messageModalOpen}
                    setMessageModalOpen={setMessageModalOpen}
                    messageAction={messageAction}
                    setMessageAction={setMessageAction}/>
      <NavBar setMessageModalOpen={setMessageModalOpen}/>
      <ContainerMessages>
        <>
          {userMessages &&
            userMessages.map((message, messageIndex)=>{
              <MessageCard key={messageIndex}
                           message={message}
                           messageIndex={messageIndex} />
            }
          )}
        </>
      </ContainerMessages>
    </ContainerHome>
  )
}

export default Home