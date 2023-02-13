import { createContext, useEffect, useState } from "react";

export const ContextAppAdministracion = createContext()
export const ContextAppAdministracionProvider = ({children}) => {

    const [userLogin, setUserLogin] = useState(sessionStorage.getItem('userLogin') === null || sessionStorage.getItem('userLogin') === '{}' ? null : JSON.parse( sessionStorage.getItem('userLogin') ))
    
    useEffect(()=>{
        sessionStorage.setItem('userLogin',JSON.stringify( {...userLogin} ) )
    },[userLogin])

    return  <ContextAppAdministracion.Provider value={{userLogin, setUserLogin}}>
                {children}
            </ContextAppAdministracion.Provider>
}