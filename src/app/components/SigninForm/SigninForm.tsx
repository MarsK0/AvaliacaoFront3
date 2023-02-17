import { StyledForm, Container, Wrapper, StyledH1, StyledH2, Error } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { TFormLogin, FormLogin } from "../../utils/validations/formLogin"
import NeonButton from "../NeonButton/NeonButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const SigninForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormLogin>({
    resolver: zodResolver(FormLogin)
  })

  return(
    <>
      <StyledH1>Mamãe Mandou!</StyledH1>
      <Container>
        <Wrapper>
          <StyledForm onSubmit={handleSubmit(()=>{})} autoComplete="off">
            <StyledH2>Entrar</StyledH2>
            <InputWrapper>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('username')} />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            {errors.username?.message && <Error>{errors.username?.message}</Error>}
            <InputWrapper>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('password')} />
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper>
            {errors.password?.message && <Error>{errors.password?.message}</Error>}
            <NeonButton color="#fff" text="Entrar" />
          </StyledForm>
        </Wrapper>
      </Container>
    </>
  )
}

export default SigninForm