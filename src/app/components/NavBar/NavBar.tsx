import { Wrapper, StyledNavBar } from "./style"
import MessageManager from "../MessageManager/MessageManager"
import LogoutIcon from "../LogoutIcon/LogoutIcon"

const NavBar: React.FC = () => {
  return(
    <Wrapper>
      <StyledNavBar>
        <MessageManager />
        <LogoutIcon />
      </StyledNavBar>
    </Wrapper>
  )
}

export default NavBar