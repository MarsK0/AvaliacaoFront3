import { StyledForm, Wrapper, StyledH2, Error } from "./style"
import { StyledInput, StyledSpan, InputWrapper } from '../FormInput/style'
import { Link } from "react-router-dom"
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
        <Wrapper >
          <StyledForm onSubmit={handleSubmit(()=>{})} autoComplete="off">
            <StyledH2>Cadastrar</StyledH2>
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('username')} />
              <StyledSpan>{'Usuário'}</StyledSpan>
            </InputWrapper>
            {errors.username?.message && <Error>{errors.username?.message}</Error>}
            <InputWrapper style={{marginTop: '1rem'}}>
              <StyledInput type="text"
                           placeholder=" "
                           {...register('avatar')} />
              <StyledSpan>{'URL Avatar'}</StyledSpan>
            </InputWrapper>
            {errors.avatar?.message && <Error>{errors.avatar?.message}</Error>}
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
            <NeonButton color="#fff" 
                        text="Cadastrar" />
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