import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { investigaciones } from "../firebase/helpersAdministracion/investigaciones";

export const ContextAppAdministracion = createContext()
export const ContextAppAdministracionProvider = ({children}) => {
    const valSessionStorage = JSON.parse( sessionStorage.getItem('userLogin') )
    const [userLogin, setUserLogin,] = useState(sessionStorage.getItem('userLogin') === null || sessionStorage.getItem('userLogin') === '{}' ? null :  valSessionStorage[0] )
    const [pageDashboard, setPageDashboard] = useState({page:'investigaciones'})
    const [listIntestigaciones, setListInvestiaciones] = useState([])
    const navigate = useNavigate() 


    const iniciarSesionFun = (response) => {
        setUserLogin({...response[0]})
        sessionStorage.setItem('userLogin',JSON.stringify( {...response[0]} ) )
        navigate('/administracion')
    }

    const cerrarSesionFun = () => {
        sessionStorage.setItem('userLogin','{}') 
        setUserLogin('{}')
        navigate("/")
    }

    const cambioDashboard = (page) => {
        setPageDashboard({page})
    }

    const buscarInvestigaciones = () => {
        investigaciones().then((response) => setListInvestiaciones([response]))
    }

    return  <ContextAppAdministracion.Provider value={{userLogin, setUserLogin, pageDashboard, cambioDashboard, iniciarSesionFun, cerrarSesionFun, listIntestigaciones, setListInvestiaciones, buscarInvestigaciones}}>
                {children}
            </ContextAppAdministracion.Provider>
}