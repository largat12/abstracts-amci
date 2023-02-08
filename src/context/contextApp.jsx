import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const [dataContextApp, setDataContextApp] = useState({"seccionState":1,"seccionTotal":4,"formRegister":{"activeFormFase1": false}, "usersRegister":[]})
    const [userRegisterMain, setUserRegisterMain] = useState({})
    


    /*guardar el primer usuario*/
    useEffect(() => {
        //cargar primer usuario que registra el trabajo
        if(dataContextApp.seccionState === 2){
            let users = [...dataContextApp.usersRegister]
            let user = {...userRegisterMain}
            if(users.length === 0){
                users.push(user)
            }
            setDataContextApp({
                ...dataContextApp,
                usersRegister:users
            })
        }
    }, [dataContextApp.seccionState])


    const updateUsersRegister = (userRegister) => {
        let users = [...dataContextApp.usersRegister]
        let user = {...userRegister}
        if(user.presentador){
            users.forEach( (item)=> {
                return item.presentador = false
            })
        }
        let existUser = users.some((item) => {
            return item.numeroDeIdentificacion === user.numeroDeIdentificacion || item.email === user.telefonoCelular  || item.telefonoCelular === user.telefonoCelular
        })
        console.log("users", users, "existUser", existUser)
        if(existUser){
            return false
        }
        else{
            setDataContextApp({
                ...dataContextApp,
                usersRegister:[...users,user]
            })
            return true
        }

        
    }
    
    



    return(
        <ContextApp.Provider value={{dataContextApp, setDataContextApp, userRegisterMain, setUserRegisterMain, updateUsersRegister}}>
            {children}
        </ContextApp.Provider>
    )
}