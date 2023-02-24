import { InputWrapper, StaticBackground, StyledForm, StyledInput, StyledSpan, Wrapper, StyledTextArea, ButtonWrapper, SaveButton, CancelButton, Error } from "./style"
import { TFormMessage, FormMessage } from "../../utils/validations/formMessage"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"


interface Props{
  modalIsOpen: boolean,
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction?: 'criar' | 'editar' | undefined
  setMessageAction: Dispatch<SetStateAction<"criar" | "editar" | undefined>>
}

const MessageModal: React.FC<Props> = ({modalIsOpen, setMessageModalOpen}) =>{

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<TFormMessage>({
    resolver: zodResolver(FormMessage)
  })

  function handleMessage({datetime, title, description}: TFormMessage){
    
  }

  if(modalIsOpen){
    return(
      <StaticBackground>
        <Wrapper>
          <StyledForm noValidate onSubmit={handleSubmit(handleMessage)}>
            <InputWrapper style={{marginTop: '1.5rem'}}>
              <StyledInput type="datetime-local"
                           {...register('datetime')}/>
            </InputWrapper>
            {errors.datetime?.message && <Error>{errors.datetime?.message}</Error>}
            <InputWrapper style={{marginTop: '1.5rem'}}>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('title')}/>
              <StyledSpan>Título</StyledSpan>
            </InputWrapper>
            {errors.title?.message && <Error>{errors.title?.message}</Error>}
            <InputWrapper style={{marginTop: '1.5rem'}}>
              <StyledTextArea placeholder="Descrição"
                              rows={7}
                              {...register('description')}/>
            </InputWrapper>
            {errors.description?.message && <Error>{errors.description?.message}</Error>}
            <ButtonWrapper>
              <SaveButton type="submit">Salvar</SaveButton>
              <CancelButton type="button"
                            onClick={()=> setMessageModalOpen(false)}>Cancelar</CancelButton>
            </ButtonWrapper>
          </StyledForm>
        </Wrapper>
      </StaticBackground>
    )
  }

  return null
}

export default MessageModal