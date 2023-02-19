import { StyledSearchBar, InputWrapper, StyledSpan } from "./style"

const SearchBar: React.FC = () => {
  return (
    <InputWrapper>
      <StyledSearchBar placeholder=" "/>
      <StyledSpan>Buscar recado...</StyledSpan>
    </InputWrapper>
  )
}

export default SearchBar