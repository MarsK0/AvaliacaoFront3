import { InputWrapper, StaticBackground, StyledForm, StyledInput, StyledSpan, Wrapper, StyledTextArea, ButtonWrapper, SaveButton, CancelButton, Error } from "./style"
import { TFormMessage, FormMessage } from "../../utils/validations/formMessage"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { useDispatch } from "react-redux"
import { addMessage, editMessage } from "../../store/slices/user"
import { IdentifiedMessage, ManageMessage } from "../../utils/types/user"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"



interface Props{
  modalIsOpen: boolean,
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction: 'create' | 'edit' | undefined
  setMessageAction: Dispatch<SetStateAction<"create" | "edit" | undefined>>,
  activeMessage: IdentifiedMessage | undefined,
  setActiveMessage: Dispatch<SetStateAction<IdentifiedMessage | undefined>>
}

const MessageModal: React.FC<Props> = ({modalIsOpen, 
                                        setMessageModalOpen, 
                                        messageAction, 
                                        setMessageAction,
                                        activeMessage,
                                        setActiveMessage}) =>{

  const dispatch = useDispatch()
  const loggedUser = useSelector((state:AppState) => state.authentication.user!)

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<TFormMessage>({
    resolver: zodResolver(FormMessage)
  })

  function handleMessage({datetime, title, description}: TFormMessage){
    const message: ManageMessage = {
      loggedUser,
      message: {
        time: datetime,
        title,
        description
      }
    }

    if(messageAction! === 'create'){
      dispatch(addMessage(message))
      setMessageAction(undefined)
      setMessageModalOpen(false)
    }
    else if(messageAction! === 'edit'){
      const editedMessage: IdentifiedMessage = {
        loggedUser,
        index: activeMessage!.index,
        time: datetime,
        title: title,
        description: description
      }

      dispatch(editMessage(editedMessage))
      setMessageAction(undefined)
      setMessageModalOpen(false)
    }
  }

  function handleClose(){
    setMessageAction(undefined)
    setActiveMessage(undefined)
    setMessageModalOpen(false)
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
                <CancelButton type="reset"
                              onClick={handleClose}>Cancelar</CancelButton>
              </ButtonWrapper>
            </StyledForm>
          </Wrapper>
        </StaticBackground>
      )
  }

  return null
}

export default MessageModal