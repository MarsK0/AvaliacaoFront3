import { Dispatch, SetStateAction } from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Wrapper, StyledButton } from "./style"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction:  'criar' | 'editar' | undefined,
  setMessageAction: Dispatch<React.SetStateAction<"criar" | "editar" | undefined>>
}

const MessageManager: React.FC<Props> = ({setMessageModalOpen, setMessageAction}) => {

  function handleNewMessage(){
    setMessageAction('criar')
    setMessageModalOpen(true)
  }

  return(
    <Wrapper>
      <SearchBar />
      <StyledButton onClick={handleNewMessage}>Novo Recado</StyledButton>
    </Wrapper>
  )
}

export default MessageManager