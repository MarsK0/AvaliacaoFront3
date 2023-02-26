import { Wrapper, StyledNavBar } from "./style"
import MessageManager from "../MessageManager/MessageManager"
import LogoutIcon from "../LogoutIcon/LogoutIcon"
import { Dispatch, SetStateAction } from "react"

interface Props{
  setMessageModalOpen: Dispatch<SetStateAction<boolean>>,
  messageAction:  'create' | 'edit' | undefined,
  setMessageAction: Dispatch<React.SetStateAction<'create' | 'edit' | undefined>>,
  setSearchFilter: Dispatch<SetStateAction<string>>
}

const NavBar: React.FC<Props> = ({setMessageModalOpen, messageAction, setMessageAction, setSearchFilter}) => {
  return(
    <Wrapper>
      <StyledNavBar>
        <MessageManager setMessageModalOpen={setMessageModalOpen}
                        messageAction={messageAction}
                        setMessageAction={setMessageAction}
                        setSearchFilter={setSearchFilter}/>
        <LogoutIcon />
      </StyledNavBar>
    </Wrapper>
  )
}

export default NavBar