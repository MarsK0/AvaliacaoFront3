import { InputWrapper, StaticBackground, StyledForm, StyledInput, StyledSpan, Wrapper, StyledTextArea, ButtonWrapper, SaveButton, CancelButton } from "./style"
interface Props{
  modalIsOpen: boolean
}

const MessageModal: React.FC<Props> = ({modalIsOpen}) =>{

  if(modalIsOpen){
    return(
      <StaticBackground>
        <Wrapper>
          <StyledForm>
            <InputWrapper style={{marginTop: '1.5rem'}}>
              <StyledInput type="datetime-local"/>
            </InputWrapper>
            <InputWrapper style={{marginTop: '1.5rem'}}>
              <StyledInput type="text"
                           placeholder=" "/>
              <StyledSpan>Título</StyledSpan>
            </InputWrapper>
            <InputWrapper style={{marginTop: '1.5rem',
                                  marginBottom: '1.5rem'}}>
              <StyledTextArea placeholder="Descrição"
                              rows={7}/>
            </InputWrapper>
            <ButtonWrapper>
              <SaveButton type="submit">Salvar</SaveButton>
              <CancelButton type="button">Cancelar</CancelButton>
            </ButtonWrapper>
          </StyledForm>
        </Wrapper>
      </StaticBackground>
    )
  }

  return null
}

export default MessageModal