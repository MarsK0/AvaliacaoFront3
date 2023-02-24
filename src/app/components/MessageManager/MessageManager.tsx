import { Dispatch, SetStateAction } from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Wrapper, StyledButton } from "./style"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
}

const MessageManager: React.FC<Props> = ({setMessageModalOpen}) => {

  return(
    <Wrapper>
      <SearchBar />
      <StyledButton onClick={() => setMessageModalOpen(true)}>Novo Recado</StyledButton>
    </Wrapper>
  )
}

export default MessageManager