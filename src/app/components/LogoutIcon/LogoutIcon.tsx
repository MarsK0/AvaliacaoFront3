import { Wrapper, Icon, TipContainer, Tip } from "./style"

const LogoutIcon: React.FC = () => {
  return(
    <Wrapper>
      <TipContainer>
        <Icon src="./assets/logout.png"
            onClick={()=>{}}/>
        <Tip>Logout</Tip>
      </TipContainer>
    </Wrapper>
  )
}

export default LogoutIcon