import { Dispatch, SetStateAction } from "react"
import { StyledSearchBar, InputWrapper, StyledSpan } from "./style"

interface Props{
  setSearchFilter: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({setSearchFilter}) => {
  return (
    <InputWrapper>
      <StyledSearchBar onChange={event => setSearchFilter(event.target.value)}
                       placeholder=" "/>
      <StyledSpan>Buscar recado...</StyledSpan>
    </InputWrapper>
  )
}

export default SearchBar