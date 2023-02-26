import { Dispatch, SetStateAction } from "react"
import { IdentifiedMessage, Message } from "../../utils/types/user"
import { MessageH3, TipContainer, StyledMessage, Tip, Wrapper, MessageDescription, EditButton, DeleteButton, ButtonWrapper } from "./style"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"
import { useDispatch } from "react-redux"
import { deleteMessage } from "../../store/slices/user"

interface Props{
  messageIndex: number,
  message: Message,
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  setActiveMessage: Dispatch<SetStateAction<IdentifiedMessage | undefined>>
  setMessageAction: Dispatch<SetStateAction<'create' | 'edit' | undefined>>
}
 
const MessageCard: React.FC<Props> = ({messageIndex, message, setActiveMessage, setMessageModalOpen, setMessageAction}) => {

  const dispatch = useDispatch()
  const loggedUser = useSelector((state: AppState) => state.authentication.user)!

  const activeMessage: IdentifiedMessage = {
    loggedUser,
    index: messageIndex,
    time: message.time,
    title: message.title,
    description: message.description,
  }

  function handleEdit(){
    setMessageAction('edit')
    setActiveMessage(activeMessage)
    setMessageModalOpen(true)
  }

  function handleDelete(){
    setActiveMessage(activeMessage)
    dispatch(deleteMessage(activeMessage))
    setActiveMessage(undefined)
  }

  return (
    <Wrapper>
        <StyledMessage>
          <p>{message.time}</p>
          <TipContainer>
            <MessageH3>{message.title}</MessageH3>
            <Tip>{message.title}</Tip>
          </TipContainer>
          <TipContainer>
            <MessageDescription>{message.description}</MessageDescription>
            <Tip>{message.description}</Tip>
          </TipContainer>
          <ButtonWrapper>
            <EditButton onClick={handleEdit}>Editar</EditButton>
            <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
          </ButtonWrapper>
        </StyledMessage>
    </Wrapper>
  )
}

export default MessageCard