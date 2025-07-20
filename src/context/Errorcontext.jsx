import { useState,createContext,useContext } from "react";

const Errorcontext= createContext();

export const useError=()=> useContext(Errorcontext);

 export const ErrorProvider = ({children})=>{

    const [error,setError]=useState();

    const handleError=((message)=>{
        setError(message)
 })
 const clearError=()=>{
    setError(null);
 }

 return(
    <>
    <Errorcontext.Provider value={{error,handleError,clearError}}>
        {children}
    </Errorcontext.Provider>
    </>
 )

    
}