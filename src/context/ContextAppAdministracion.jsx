import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { anadirUsuario } from "../firebase/helpersAdministracion/anadirUsuario";
import { contenidoInvestigacionCompleta } from "../firebase/helpersAdministracion/contenidoInvestigacionCompleta";
import { eliminarUsuario } from "../firebase/helpersAdministracion/eliminarUsuario";
import { estados } from "../firebase/helpersAdministracion/estados";
import { exportarData } from "../firebase/helpersAdministracion/exportarData";
import { investigaciones } from "../firebase/helpersAdministracion/investigaciones";
import { investigadores } from "../firebase/helpersAdministracion/investigadores";
import { jurados } from "../firebase/helpersAdministracion/jurados";
import { modalidad } from "../firebase/helpersAdministracion/modalidad";
import { updateEstados } from "../firebase/helpersAdministracion/updateEstados";
import { updateJurados } from "../firebase/helpersAdministracion/updateJurados";
import { updateModalidad } from "../firebase/helpersAdministracion/updateModalidad";
import { usuariosPlataforma } from "../firebase/helpersAdministracion/usuariosPlataforma";

export const ContextAppAdministracion = createContext()
export const ContextAppAdministracionProvider = ({children}) => {
    const [userLogin, setUserLogin] = useState(sessionStorage.getItem('userLogin') === null || sessionStorage.getItem('userLogin') === '{}' ? null :  JSON.parse( sessionStorage.getItem('userLogin') ) )
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

    const cambioDashboard = (page, item = null, contenidoInvestigacion = null) => {
        setPageDashboard({page, item, contenidoInvestigacion})
    }

    const buscarInvestigaciones = () => {
        investigaciones().then((response) => {
            if(userLogin.perfil === 'Jurado'){
                if(response.length !== 0){
                    const data = []
                    response.forEach((investigacion) => {
                        if(investigacion.jurados.length !== 0){
                            investigacion.jurados.forEach((jurado) => {
                                if(userLogin.id === jurado.id){
                                    data.push(investigacion)
                                }
                            })
                        }
                    })
                    if(data.length === 0){
                        setListInvestigaciones(null)
                        return null
                    }
                    else{
                        setListInvestigaciones(data)
                        return data
                    }
                }
                else{
                    setListInvestigaciones([])
                    return []
                }
            }
            else{
                setListInvestigaciones(response)
                return response
            }
            
        })
    }

    const buscarInvestigadores = () => {
        investigadores(userLogin).then((response) => {
            if(userLogin.perfil === 'Jurado'){
                if(response.length !== 0){
                    const data = []
                    response.forEach((investigadores) => {
                        if(investigadores.jurados.length !== 0){
                            investigadores.jurados.forEach((jurado) => {
                                if(userLogin.id === jurado.id){
                                    data.push(investigadores)
                                }
                            })
                        }
                    })
                    if(data.length === 0){
                        setListInvestigadores(null)
                        return null
                    }
                    else{
                        setListInvestigadores(data)
                        return data
                    }
                }
                else{
                    setListInvestigadores([])
                    return []
                }
            }
            else{
                setListInvestigadores(response)
                return response
            }
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

    const buscarEstadosInvestigaciones = () => {
        return estados()
    }

    const buscarModalidadInvestigaciones = () => {
        return modalidad()
    }

    const updateJuradosInvestigacion = (dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones) => {
        return updateJurados(dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones)
    }

    const updateEstadoInvestigacion = (estadoSeleccionado, contentCheckBox) => {
        return updateEstados(estadoSeleccionado, contentCheckBox)
    }
    
    const updateModalidadInvestigacion = (modalidadSeleccionado, contentCheckBox) => {
        return updateModalidad(modalidadSeleccionado, contentCheckBox)
    }

    return  <ContextAppAdministracion.Provider value={{userLogin, setUserLogin, pageDashboard, cambioDashboard, iniciarSesionFun, cerrarSesionFun, listInvestigaciones, setListInvestigaciones, buscarInvestigaciones, buscarContenidoInvestigacionCompleta, listInvestigadores, setListInvestigadores, buscarInvestigadores, buscarUsuariosPlataforma, contenidoUsuarios, buscarEliminarUsuario, buscarAnadirUsuario, buscarExportarExcel, buscarJurados, buscarEstadosInvestigaciones, buscarModalidadInvestigaciones, updateJuradosInvestigacion, updateEstadoInvestigacion, updateModalidadInvestigacion}}>
                {children}
            </ContextAppAdministracion.Provider>
}