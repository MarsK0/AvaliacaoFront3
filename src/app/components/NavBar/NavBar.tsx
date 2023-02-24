import { Wrapper, StyledNavBar } from "./style"
import MessageManager from "../MessageManager/MessageManager"
import LogoutIcon from "../LogoutIcon/LogoutIcon"
import { Dispatch, SetStateAction } from "react"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
}

const NavBar: React.FC<Props> = ({setMessageModalOpen}) => {
  return(
    <Wrapper>
      <StyledNavBar>
        <MessageManager setMessageModalOpen={setMessageModalOpen}/>
        <LogoutIcon />
      </StyledNavBar>
    </Wrapper>
  )
}

export default NavBar