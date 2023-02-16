import { StyledInput, StyledSpan, Wrapper } from "./style"

interface Props{
  placeholder: string;
  type: string;
}

const FormInput: React.FC<Props> = ({placeholder, type}) => {
  return (
      <Wrapper>
        <StyledInput required type={type}/>
        <StyledSpan>{placeholder}</StyledSpan>
      </Wrapper>
  )
}

export default FormInput