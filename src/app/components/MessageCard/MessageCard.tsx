import { Message } from "../../utils/types/user"
import { MessageH3, TipContainer, StyledMessage, Tip, Wrapper, MessageDescription, EditButton, DeleteButton, ButtonWrapper } from "./style"

interface Props{
  messageIndex: number,
  message: Message
}

const MessageCard: React.FC<Props> = ({messageIndex, message}) => {
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
            <EditButton>Editar</EditButton>
            <DeleteButton>Excluir</DeleteButton>
          </ButtonWrapper>
        </StyledMessage>
    </Wrapper>
  )
}

export default MessageCard