
import { signupService , signinService  } from "../service/authservice.js";
import { createContext,useContext,useState,useEffect } from "react";
import { getToken,setToken,removeToken } from "../utils/storage.js";
import {useNavigate} from 'react-router-dom';

const AuthContext= createContext();
 
export const useAuth=()=> useContext(AuthContext);

export const Authprovider = ({children})=>{
    const [user,setUser]=useState(0);
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();

useEffect(()=>{
  const token=getToken();
  if(token){
    setUser({token});
    setLoading(false);
  }
},[]);

function logout(){
removeToken();
setUser(null);
navigate('/login')
}


    async function signin(cred) {
        const data = await signinService(cred);
        setToken(data.token);
        setUser({token:data.token})
        navigate("/tasks")
    }

    async function signup(cred) {
        await signupService(cred);
        navigate("/login");
    }

    

    return(
      <>
     <AuthContext.Provider value={{user,logout,signin,signup}}>
      {children}
     </AuthContext.Provider>

      </>
    )




}