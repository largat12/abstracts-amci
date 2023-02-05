
import { Navigate } from "react-router-dom"


export const RouterProtected = ({user, children}) => {

    if(user === ""){
        return <Navigate to="/" />
    }

    return children;

}