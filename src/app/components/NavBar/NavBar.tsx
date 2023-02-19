import { Wrapper, StyledNavBar } from "./style"
import MessageManager from "../MessageManager/MessageManager"
import ProfileManager from "../ProfileManager/ProfileManager"

const NavBar: React.FC = () => {
  return(
    <Wrapper>
      <StyledNavBar>
        <MessageManager />
        <ProfileManager />
      </StyledNavBar>
    </Wrapper>
  )
}

export default NavBar