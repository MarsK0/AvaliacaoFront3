import { ContainerHome, ContainerMessages } from "../../components/Containers/style"
import NavBar from "../../components/NavBar/NavBar"
import MessageCard from "../../components/MessageCard/MessageCard"
import { useEffect, useState } from "react"
import MessageModal from "../../components/MessageModal/MessageModal"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"
import { useDispatch } from "react-redux"
import { login } from "../../store/slices/auth"
import { IdentifiedMessage } from "../../utils/types/user"

const Home: React.FC = () => {

  const dispatch = useDispatch()

  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [messageAction, setMessageAction] = useState<'create' | 'edit' | undefined>(undefined)
  const [activeMessage, setActiveMessage] = useState<IdentifiedMessage | undefined>(undefined)
  const [searchFilter, setSearchFilter] = useState<string>('')

  const loggedUser = useSelector((state: AppState) => state.authentication.user)!
  const userList = useSelector((state: AppState) => state.userList.users)
  const userMessages = loggedUser?.messages

  useEffect(()=>{
    const loggedUserIndex = userList.findIndex(user => user.id === loggedUser.id)
    const user = userList[loggedUserIndex]

    dispatch(login(user))
  }, userList)

  const filteredMessages = userMessages.filter(message => message.time.toLowerCase().indexOf(searchFilter.toLowerCase())>=0 ||
                                                          message.title.toLowerCase().indexOf(searchFilter.toLowerCase())>=0 ||
                                                          message.description.toLowerCase().indexOf(searchFilter.toLowerCase())>=0)

  return (
    <ContainerHome>
      {messageModalOpen &&
        <MessageModal modalIsOpen={messageModalOpen}
        setMessageModalOpen={setMessageModalOpen}
        messageAction={messageAction}
        setMessageAction={setMessageAction}
        activeMessage={activeMessage}
        setActiveMessage={setActiveMessage}/>
      }
      <NavBar setMessageModalOpen={setMessageModalOpen}
              messageAction={messageAction}
              setMessageAction={setMessageAction}
              setSearchFilter={setSearchFilter}/>
      <ContainerMessages>
        <>
          {filteredMessages &&
            filteredMessages.map((message, messageIndex)=>(
              <MessageCard key={messageIndex}
                           message={message}
                           messageIndex={messageIndex}
                           setMessageModalOpen={setMessageModalOpen}
                           setActiveMessage={setActiveMessage}
                           setMessageAction={setMessageAction}/>
          ))}
        </>
      </ContainerMessages>
    </ContainerHome>
  )
}

export default Home