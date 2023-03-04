import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { anadirUsuario } from "../firebase/helpersAdministracion/anadirUsuario";
import { contenidoInvestigacionCompleta } from "../firebase/helpersAdministracion/contenidoInvestigacionCompleta";
import { eliminarUsuario } from "../firebase/helpersAdministracion/eliminarUsuario";
import { exportarData } from "../firebase/helpersAdministracion/exportarData";
import { investigaciones } from "../firebase/helpersAdministracion/investigaciones";
import { investigadores } from "../firebase/helpersAdministracion/investigadores";
import { jurados } from "../firebase/helpersAdministracion/jurados";
import { updateJurados } from "../firebase/helpersAdministracion/updateJurados";
import { usuariosPlataforma } from "../firebase/helpersAdministracion/usuariosPlataforma";

export const ContextAppAdministracion = createContext()
export const ContextAppAdministracionProvider = ({children}) => {
    const [userLogin, setUserLogin,] = useState(sessionStorage.getItem('userLogin') === null || sessionStorage.getItem('userLogin') === '{}' ? null :  JSON.parse( sessionStorage.getItem('userLogin') ) )
    const [pageDashboard, setPageDashboard] = useState({page:'investigaciones',item:null})
    const [listInvestigaciones, setListInvestigaciones] = useState([])
    const [listInvestigadores, setListInvestigadores] = useState([])
    const [contenidoUsuarios, setContenidoUsuarios] = useState([])
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

    const cambioDashboard = (page, item = null) => {
        setPageDashboard({page, item})
    }

    const buscarInvestigaciones = () => {
        investigaciones().then((response) => {
            setListInvestigaciones(response)
            return response
        })
    }

    const buscarInvestigadores = () => {
        investigadores().then((response) => {
            setListInvestigadores(response)
            return response
        })

    }

    const buscarContenidoInvestigacionCompleta = () => {
        return contenidoInvestigacionCompleta(pageDashboard)
    }

    const buscarUsuariosPlataforma = async () => {
        let response = await usuariosPlataforma()
        setContenidoUsuarios(response)
    }

    const buscarEliminarUsuario = (id) => {
        eliminarUsuario(id).then((response) => {
            buscarUsuariosPlataforma()
        })
        
    }

    const buscarAnadirUsuario = (data) => {
        anadirUsuario(data).then((response)=>{
            buscarUsuariosPlataforma()
            cambioDashboard('usuarios')
        })
        
    }

    const buscarExportarExcel = (type) => {
        return exportarData(type)
    }
    const buscarJurados = () => {
        return jurados()
    }
    const updateJuradosInvestigacion = (dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones) => {
        return updateJurados(dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones)
    }

    return  <ContextAppAdministracion.Provider value={{userLogin, setUserLogin, pageDashboard, cambioDashboard, iniciarSesionFun, cerrarSesionFun, listInvestigaciones, setListInvestigaciones, buscarInvestigaciones, buscarContenidoInvestigacionCompleta, listInvestigadores, setListInvestigadores, buscarInvestigadores, buscarUsuariosPlataforma, contenidoUsuarios, buscarEliminarUsuario, buscarAnadirUsuario, buscarExportarExcel, buscarJurados, updateJuradosInvestigacion}}>
                {children}
            </ContextAppAdministracion.Provider>
}