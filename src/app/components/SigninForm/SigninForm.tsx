import { StyledForm, Wrapper, StyledH2, Error, StyledButton } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { Link, useNavigate } from "react-router-dom"
import { TFormLogin, FormLogin } from "../../utils/validations/formLogin"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"
import { Auth } from "../../utils/types/auth"
import { login } from "../../store/slices/auth"

const SigninForm: React.FC = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userList = useSelector((state: AppState) => state.userList.users)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormLogin>({
    resolver: zodResolver(FormLogin)
  })

  function handleLogin({username, password}: TFormLogin){
    const user = userList.find( (user) => username === user.username && password === user.password)

    if(user){
      const authUser: Auth = {
        id: user.id,
        username,
        messages: user.messages
      }
      dispatch(login(authUser))
      navigate('/')
    }
    else{
      alert('Combinação de usuário e senha inválida!')
    }
  }

  return(
    <>
        <Wrapper>
          <StyledForm onSubmit={handleSubmit(handleLogin)} autoComplete="off">
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
            <StyledButton>Entrar</StyledButton>
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