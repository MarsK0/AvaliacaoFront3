import { StyledForm, Wrapper, StyledH2, Error } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { Link } from "react-router-dom"
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
        <Wrapper>
          <StyledForm onSubmit={handleSubmit(()=>{})} autoComplete="off">
            <StyledH2>Entrar</StyledH2>
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('username')} />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            {errors.username?.message && <Error >{errors.username?.message}</Error>}
            <InputWrapper style={{marginTop: '1.5rem',
                                  marginBottom: '1.5rem'}}>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('password')} />
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper>
            {errors.password?.message && <Error>{errors.password?.message}</Error>}
            <NeonButton color="#fff" 
                        text="Entrar"/>
            <Link to={'/signup'}
                  style={{
                    fontSize: '14px',
                    color: '#999',
                    marginTop: '1.5rem'
                  }}
                  className="marginTop">Não possui conta? Cadastre-se!</Link>
          </StyledForm>
        </Wrapper>
    </>
  )
}

export default SigninForm