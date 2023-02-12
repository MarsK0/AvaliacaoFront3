import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../../store/reducersRoot";
import { LoggedUser } from "../../store/slices/auth";

interface Props{
  page: ReactElement
}

const Authenticator: React.FC<Props> = ({page}) =>{
  const userIsLoggedIn: boolean = useSelector((state: AppState) => state.authentication.isLoggedIn)

  if(!userIsLoggedIn){
    return <Navigate to='/signin' />
  }

  return <>{page}</>

}

export default Authenticator