import React, { useContext, useState} from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'

export const DasnboardEvaluaciones = ({contenidoInvestigacion}) => {
    const {userLogin, cambioDashboard} = useContext(ContextAppAdministracion)
    const [evaluacion, setEvaluacion] = useState({})

    useEffect(()=>{
        let data = contenidoInvestigacion.jurados.find((item) => item.id === userLogin.id)
        setEvaluacion(data)
    },[])
    
    const handleEvaluacion = (tipo) => {
        let data = 'evaluacion-'+tipo.toLowerCase()
        cambioDashboard(data,null, contenidoInvestigacion)
    }


    //si no tiene jurados asignados
    if(contenidoInvestigacion.jurados.length === 0){
        return ( <></> )
    }
    return (
        <div className='content-evaluacion d-flex flex-direction-column'>
            {evaluacion.tipoEvaluacion === "metodologico"    && <Button onClick={(e) => {e.preventDefault(); handleEvaluacion('metodologico')}} className='btn-custom mb-2 w-100' >Evaluacion Metodológica</Button>}
            {evaluacion.tipoEvaluacion === "clinico"         && <Button onClick={(e) => {e.preventDefault(); handleEvaluacion('clinico')}} className='btn-custom mb-2 w-100' >Evaluacion Clinico</Button>}
        </div>
    )
}
