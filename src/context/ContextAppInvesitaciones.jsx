import { createContext, useState } from "react";

export const ContextAppInvesitaciones = createContext()

export const ContextAppInvesitacionesProvider = ({children}) => {
    const estructuraDataContextAppInvesitaciones = {"seccionState":1,"seccionTotal":4,"formRegister":{"activeFormFase1": false}, "usersRegister":[], 'completeRegistro':null}
    const [dataContextAppInvesitaciones, setDataContextAppInvesitaciones] = useState(estructuraDataContextAppInvesitaciones)
    const [userRegisterMain, setUserRegisterMain] = useState({})
    const [infoTrabajosLibres, setInfoTrabajosLibres] = useState({})
    //incrementar seccion
    const nextSection = ()=>{
        setDataContextAppInvesitaciones({
            ...dataContextAppInvesitaciones,
            seccionState:dataContextAppInvesitaciones.seccionState + 1 > 4 ? dataContextAppInvesitaciones.seccionState : dataContextAppInvesitaciones.seccionState + 1  
        })
    }
    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    //agregar investigadores despues del autor
    const addUsersRegister = (userRegister) => {
        let users = [...dataContextAppInvesitaciones.usersRegister]
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
            setDataContextAppInvesitaciones({
                ...dataContextAppInvesitaciones,
                usersRegister:[...users,user]
            })
            return true
        }  
    }
    //remover investigador
    const removeUserRegister = (id) => {
        let users = [...dataContextAppInvesitaciones.usersRegister] 
        let result = users.filter((user) => {
            return user.numeroDeIdentificacion !== id
        })
        setDataContextAppInvesitaciones({
            ...dataContextAppInvesitaciones,
            usersRegister:result
        })

    }
    //editar investigador
    const updateUserRegister = (userRegister) => {
        let users = [...dataContextAppInvesitaciones.usersRegister]
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
        setDataContextAppInvesitaciones({
            ...dataContextAppInvesitaciones,
            usersRegister:respuesta
        })
        return true
    }
    //validar presentador
    const validarPresentador = () => {
        let users = [...dataContextAppInvesitaciones.usersRegister]
        let response = users.some((item) => {
            return item.presentador === true
        })
        return response
    }
    //limpiar contextos
    const clearContext = () => {
        setDataContextAppInvesitaciones(estructuraDataContextAppInvesitaciones)
        setUserRegisterMain({})
        setInfoTrabajosLibres({})
    }


    return(
        <ContextAppInvesitaciones.Provider value={{dataContextAppInvesitaciones, setDataContextAppInvesitaciones, userRegisterMain, setUserRegisterMain, nextSection, addUsersRegister, removeUserRegister, updateUserRegister, validarPresentador, infoTrabajosLibres, setInfoTrabajosLibres, clearContext}}>
            {children}
        </ContextAppInvesitaciones.Provider>
    )
}