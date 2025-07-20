import { useState,createContext,useContext,useEffect} from "react";

const ThemeContext= createContext();

export const ThemeUse=()=>useContext(ThemeContext);

export const ThemeProvider =({children})=>{
        const [darkmode,setDarkmode]=useState();

        useEffect(()=>{
            if(darkmode){
             document.documentElement.classList.add('dark')
            }else{
              document.documentElement.classList.remove('dark')
            }

        },[darkmode]);

        const toggleTheme = ()=>{
            setDarkmode(!darkmode);
        }

        return(
            <>
            <ThemeContext.Provider value={{darkmode,toggleTheme}}>
                {children}
            </ThemeContext.Provider>
            </>
        )
        
}