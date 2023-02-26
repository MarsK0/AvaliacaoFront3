import { Dispatch, SetStateAction } from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Wrapper, StyledButton } from "./style"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction:  'create' | 'edit' | undefined,
  setMessageAction: Dispatch<React.SetStateAction<'create' | 'edit' | undefined>>,
  setSearchFilter: Dispatch<SetStateAction<string>>
}

const MessageManager: React.FC<Props> = ({setMessageModalOpen, setMessageAction, setSearchFilter}) => {

  function handleNewMessage(){
    setMessageAction('create')
    setMessageModalOpen(true)
  }

  return(
    <Wrapper>
      <SearchBar setSearchFilter={setSearchFilter}/>
      <StyledButton onClick={handleNewMessage}>Novo Recado</StyledButton>
    </Wrapper>
  )
}

export default MessageManager