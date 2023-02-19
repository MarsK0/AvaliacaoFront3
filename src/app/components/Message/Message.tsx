import { MessageH3, TipContainer, StyledMessage, Tip, Wrapper, MessageDescription } from "./style"

const Message: React.FC = () => {
  return (
    <Wrapper>
        <StyledMessage>
          <p>23/02/2001 00:00</p>
          <TipContainer>
            <MessageH3>TESTE</MessageH3>
            <Tip>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum distinctio obcaecati vel quidem quibusdam ut porro illo, voluptatibus officia, dolorum voluptas velit quaerat perferendis labore consequatur voluptates fugit quis molestias!</Tip>
          </TipContainer>
          <TipContainer>
            <MessageDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quasi, cupiditate accusamus minus corrupti alias eum dolorem? Hic ab quaerat, sequi quam harum unde aperiam et nemo non vero!
            </MessageDescription>
            <Tip>TESTE</Tip>
          </TipContainer>
        </StyledMessage>
    </Wrapper>
  )
}

export default Message