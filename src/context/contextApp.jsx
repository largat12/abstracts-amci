import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const estructuraDataContextApp = {"seccionState":1,"seccionTotal":4,"formRegister":{"activeFormFase1": false}, "usersRegister":[], 'completeRegistro':null}
    const [dataContextApp, setDataContextApp] = useState(estructuraDataContextApp)
    const [userRegisterMain, setUserRegisterMain] = useState({})
    const [infoTrabajosLibres, setInfoTrabajosLibres] = useState({})
    
    /*guardar el primer usuario*/
    useEffect(() => {
        //cargar primer usuario que registra el trabajo
        if(dataContextApp.seccionState === 2){
            let users = [...dataContextApp.usersRegister]
            let user = {...userRegisterMain}
            if(users.length === 0){
                users.push(user)
                setDataContextApp({
                    ...dataContextApp,
                    usersRegister:users
                })
            }
            else{
                const respuesta = []
                users.forEach( (item)=> {
                    return item.presentador = false
                })
                let response = users.some((item) => {
                    return item.numeroDeIdentificacion === user.numeroDeIdentificacion
                })
                if(response){
                    users.forEach((item) => {
                        if(item.numeroDeIdentificacion === user.numeroDeIdentificacion){
                            respuesta.push({...user})
                        }
                        else{
                            respuesta.push({...item})
                        }
                    })
                }
                else{
                    respuesta.push({...user}, ...users)
                }
            
                setDataContextApp({
                    ...dataContextApp,
                    usersRegister:respuesta
                })
            }
            
        }
    }, [dataContextApp.seccionState])
    //incrementar seccion
    const nextSection = ()=>{
        let seccionActual = {...dataContextApp}
        setDataContextApp({
            ...dataContextApp,
            seccionState:seccionActual.seccionState + 1 > 4 ? seccionActual.seccionState : seccionActual.seccionState + 1  
        })
    }
    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    //agregar investigadores despues del autor
    const addUsersRegister = (userRegister) => {
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
    //remover investigador
    const removeUserRegister = (id) => {
        let users = [...dataContextApp.usersRegister] 
        let result = users.filter((user) => {
            return user.numeroDeIdentificacion !== id
        })
        setDataContextApp({
            ...dataContextApp,
            usersRegister:result
        })

    }
    //editar investigador
    const updateUserRegister = (userRegister) => {
        let users = [...dataContextApp.usersRegister]
        let user = {...userRegister}
        /*-------- validar si el usuario viene como presentador --------------*/
        const respuesta = []
        if(user.presentador){
            users.forEach( (item)=> {
                return item.presentador = false
            })
        }
        let response = users.some((item) => {
            return item.numeroDeIdentificacion === user.numeroDeIdentificacion
        })
        if(response){
            users.forEach((item) => {
                if(item.numeroDeIdentificacion === user.numeroDeIdentificacion){
                    respuesta.push({...user})
                }
                else{
                    respuesta.push({...item})
                }
            })
        }
        else{
            respuesta.push({...user}, ...users)
        }
        setDataContextApp({
            ...dataContextApp,
            usersRegister:respuesta
        })
        return true
    }
    //validar presentador
    const validarPresentador = () => {
        let users = [...dataContextApp.usersRegister]
        let response = users.some((item) => {
            return item.presentador === true
        })
        return response
    }
    //limpiar contextos
    const clearContext = () => {
        setDataContextApp(estructuraDataContextApp)
        setUserRegisterMain({})
        setInfoTrabajosLibres({})
    }

    
    



    return(
        <ContextApp.Provider value={{dataContextApp, setDataContextApp, userRegisterMain, setUserRegisterMain, nextSection, addUsersRegister, removeUserRegister, updateUserRegister, validarPresentador, infoTrabajosLibres, setInfoTrabajosLibres, clearContext}}>
            {children}
        </ContextApp.Provider>
    )
}