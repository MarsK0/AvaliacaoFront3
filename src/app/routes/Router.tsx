import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Authenticate from "../components/authenticator/Authenticator";

const Router: React.FC = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router