import styled from "styled-components"
import SearchBar from "../SearchBar/SearchBar"
import { Wrapper, StyledButton } from "./style"

const MessageManager: React.FC = () => {

  return(
    <Wrapper>
      <SearchBar />
      <StyledButton>Novo Recado</StyledButton>
    </Wrapper>
  )
}

export default MessageManager