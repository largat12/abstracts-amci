import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const [dataContextApp, setDataContextApp] = useState({"seccionState":2,"seccionTotal":4,"formRegister":{"activeFormFase1": false}, "usersRegister":[]})
    const [userRegisterMain, setUserRegisterMain] = useState({})
    

    useEffect(() => {
        if(dataContextApp.seccionState === 2){
            let users = [...dataContextApp.usersRegister]
            /* -----------------validacion de usuarios----------*/
            if(users.length === 0 ){
                users.push({...userRegisterMain})
            }
            else{

            }
            /*-----------------insertando informacion-----------*/
            setDataContextApp({
                ...dataContextApp,
                usersRegister:users
            })
        }
    }, [userRegisterMain, dataContextApp.seccionState])
    


    return(
        <ContextApp.Provider value={{dataContextApp, setDataContextApp, userRegisterMain, setUserRegisterMain}}>
            {children}
        </ContextApp.Provider>
    )
}