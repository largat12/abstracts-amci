
import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { ContextAppAdministracion } from "../context/ContextAppAdministracion";


export const RouterProtected = ({children}) => {
    const {userLogin} = useContext(ContextAppAdministracion)
    console.log("userLogin")

    if(userLogin === null || userLogin === '{}'){
        return <Navigate to="/" />
    }

    return children;

}