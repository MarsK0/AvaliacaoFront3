import styled from "styled-components"
import SearchBar from "../SearchBar/SearchBar"
import { Wrapper } from "./style"

const StyledButton = styled.button`
    position:relative;
    width: 45%;
    min-width: 175px;
    height: 30px;
    font-size: 1em;
    color: #0000ff;
    cursor: pointer;
    text-decoration: none;
    border: none;
    border-radius: 1rem;
    background: none;
    padding: .25rem;
    box-shadow: 0 0 5px 2px #0000ff;
    transition: .2s linear;

    @media (max-width: 500px) {
      width: 45%;
    }

    &:hover{
      background: #0000ff;
      color: #333333;
    }
`

const MessageManager: React.FC = () => {

  return(
    <Wrapper>
      <SearchBar />
      <StyledButton>Novo Recado</StyledButton>
    </Wrapper>
  )
}

export default MessageManager