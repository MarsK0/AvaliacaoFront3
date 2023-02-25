import { ContainerHome, ContainerMessages } from "../../components/Containers/style"
import NavBar from "../../components/NavBar/NavBar"
import MessageCard from "../../components/MessageCard/MessageCard"
import { useEffect, useState } from "react"
import MessageModal from "../../components/MessageModal/MessageModal"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"
import { useDispatch } from "react-redux"
import { login } from "../../store/slices/auth"
import { Message } from "../../utils/types/user"

const Home: React.FC = () => {

  const dispatch = useDispatch()

  const loggedUser = useSelector((state: AppState) => state.authentication.user)!
  const userList = useSelector((state: AppState) => state.userList.users)
  const userMessages = loggedUser?.messages

  useEffect(()=>{
    const loggedUserIndex = userList.findIndex(user => user.id === loggedUser.id)
    const user = userList[loggedUserIndex]

    dispatch(login(user))
  }, userList)

  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [messageAction, setMessageAction] = useState<'criar' | 'editar' | undefined>(undefined)
  const [activeMessage, setActiveMessage] = useState<Message | undefined>(undefined)

  return (
    <ContainerHome>
      <MessageModal modalIsOpen={messageModalOpen}
                    setMessageModalOpen={setMessageModalOpen}
                    messageAction={messageAction}
                    setMessageAction={setMessageAction}
                    activeMessage={activeMessage}
                    setActiveMessage={setActiveMessage}/>
      <NavBar setMessageModalOpen={setMessageModalOpen}
              messageAction={messageAction}
              setMessageAction={setMessageAction}/>
      <ContainerMessages>
        <>
          {userMessages &&
            userMessages.map((message, messageIndex)=>(
              <MessageCard key={messageIndex}
                           message={message}
                           messageIndex={messageIndex}/>
          ))}
        </>
      </ContainerMessages>
    </ContainerHome>
  )
}

export default Home