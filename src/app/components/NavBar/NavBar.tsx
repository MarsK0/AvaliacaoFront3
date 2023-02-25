import { Wrapper, StyledNavBar } from "./style"
import MessageManager from "../MessageManager/MessageManager"
import LogoutIcon from "../LogoutIcon/LogoutIcon"
import { Dispatch, SetStateAction } from "react"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction:  'criar' | 'editar' | undefined,
  setMessageAction: Dispatch<React.SetStateAction<"criar" | "editar" | undefined>>
}

const NavBar: React.FC<Props> = ({setMessageModalOpen, messageAction, setMessageAction}) => {
  return(
    <Wrapper>
      <StyledNavBar>
        <MessageManager setMessageModalOpen={setMessageModalOpen}
                        messageAction={messageAction}
                        setMessageAction={setMessageAction}/>
        <LogoutIcon />
      </StyledNavBar>
    </Wrapper>
  )
}

export default NavBar