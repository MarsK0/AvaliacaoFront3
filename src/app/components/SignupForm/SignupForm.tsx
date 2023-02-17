import { StyledForm, Container, Wrapper, StyledH1, StyledH2, Error } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { FormSignup, TFormSignup } from "../../utils/validations/formSignup"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import NeonButton from "../NeonButton/NeonButton"

const SignupForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormSignup>({
    resolver: zodResolver(FormSignup)
  })
  
  return(
    <>
      <Container>
      <StyledH1>Mamãe Mandou!</StyledH1>
        <Wrapper>
          <StyledForm onSubmit={handleSubmit(()=>{})} autoComplete="off">
            <StyledH2>Cadastrar</StyledH2>
            <InputWrapper>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('username')} />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            {errors.username?.message && <Error>{errors.username?.message}</Error>}
            <InputWrapper>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('avatar')} />
              <StyledSpan>{'URL Avatar'}</StyledSpan>
            </InputWrapper>
            {errors.avatar?.message && <Error>{errors.avatar?.message}</Error>}
            <InputWrapper>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('password')} />
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper>
            {errors.password?.message && <Error>{errors.password?.message}</Error>}
            <InputWrapper>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('repeatPassword')} />
              <StyledSpan>{'Repita a Senha'}</StyledSpan>
            </InputWrapper>
            {errors.repeatPassword?.message && <Error>{errors.repeatPassword?.message}</Error>}
            <NeonButton color="#fff" 
                        text="Cadastrar" />
          </StyledForm>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignupForm