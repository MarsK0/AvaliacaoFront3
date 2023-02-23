import { Wrapper, Icon, TipContainer, Tip } from "./style"
import { logout } from "../../store/slices/auth"
import { useDispatch } from "react-redux"

const LogoutIcon: React.FC = () => {
  const dispatch = useDispatch()

  return(
    <Wrapper>
      <TipContainer>
        <Icon src="./assets/logout.png"
            onClick={() => dispatch(logout())}/>
        <Tip>Logout</Tip>
      </TipContainer>
    </Wrapper>
  )
}

export default LogoutIcon