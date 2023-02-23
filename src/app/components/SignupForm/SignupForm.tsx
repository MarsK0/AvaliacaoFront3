import { StyledForm, Wrapper, StyledH2, Error } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { Link, useNavigate } from "react-router-dom"
import { FormSignup, TFormSignup } from "../../utils/validations/formSignup"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppState } from "../../store/reducersRoot"
import { User } from "../../utils/types/user"
import { addUser } from "../../store/slices/user"
import { StyledButton } from "./style"



const SignupForm: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userList = useSelector((state: AppState) => state.userList.users)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormSignup>({
    resolver: zodResolver(FormSignup)
  })

  function handleSignup({username, password}: TFormSignup){
    const user = userList.find((user) => user.username === username)

    if(!user){
      const newUser: User ={
        username,
        password,
        messages: []
      }

      dispatch(addUser(newUser))
      navigate('/signin')
    }
    else{
      alert('Usuário já cadastrado!')
    }
  }
  
  return(
    <>
        <Wrapper>
          <StyledForm onSubmit={handleSubmit(handleSignup)} autoComplete="off">
            <StyledH2>Cadastrar</StyledH2>
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('username')} />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            {errors.username?.message && <Error>{errors.username?.message}</Error>}
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('password')} />
              <StyledSpan>{'Senha'}</StyledSpan>
            </InputWrapper >
            {errors.password?.message && <Error>{errors.password?.message}</Error>}
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="password"
                           placeholder=" "
                           {...register('repeatPassword')} />
              <StyledSpan>{'Repita a Senha'}</StyledSpan>
            </InputWrapper>
            {errors.repeatPassword?.message && <Error>{errors.repeatPassword?.message}</Error>}
            <StyledButton>Cadastrar</StyledButton>
            <Link to={'/signin'}
                  style={{
                    fontSize: '14px',
                    color: '#aaa',
                    marginTop: '1rem'
                  }}>Já possui conta? Entre!</Link>
          </StyledForm>
        </Wrapper>
    </>
  )
}

export default SignupForm