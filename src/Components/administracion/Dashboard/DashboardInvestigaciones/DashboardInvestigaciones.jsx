import React, { useEffect, useState ,useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { AccionesAsignarJurado } from './AccionesInvestigaciones/AccionesAsignarJurado'
import { SeleccionarAccionInvestigaciones } from './AccionesInvestigaciones/SeleccionarAccionInvestigaciones'
import { FiltersInvestigaciones } from './FiltersInvestigaciones/FiltersInvestigaciones'
import { ListInvestigaciones } from './ListInvestigaciones/ListInvestigaciones'

export const DashboardInvestigaciones = () => {
    const {buscarInvestigaciones, listInvestigaciones, cambioDashboard, userLogin, buscarJurados, updateJuradosInvestigacion} = useContext(ContextAppAdministracion)
    const [contentInvestigaciones, setContentInvestigaciones] = useState([])
    const [btnActualizar, setBtnActualizar] = useState("Actualizar investigaciones")
    const [contentCheckBox, setContentCheckBox] = useState([])
    const [messageAlert, setMessageAlert] = useState({})
    const [stateAcciones, setStateAcciones] = useState('')

    useEffect(()=>{
        buscarInvestigaciones()
    },[])  

    useEffect(()=>{
        setContentInvestigaciones(listInvestigaciones)
        setBtnActualizar("Actualizado")
        setTimeout(()=>{
            setBtnActualizar("Actualizar investigaciones") 
        },1000)
    },[listInvestigaciones])

    useEffect(()=>{
        if(contentCheckBox.length === 0){
            setStateAcciones('') 
        }
    },[contentCheckBox])
    const handleBuscarInvestigaciones = () => {
        buscarInvestigaciones()
        setBtnActualizar("Actualizando...")
    }

    const handleViewInvestigation = (id) => {
        cambioDashboard('detallesInvestigacion',{"tipo":"investigacion", "id":id})
    }

    const handleAsignarJurados = (seleccionado, jurados) => {
        
        let status = false;
        //-----------------------------------------
        //---------------jurado asignado-----------
        //-----------------------------------------
        let jurado = []
        jurados.forEach(item => {
           if(item.id === seleccionado.asignarJurado){
            jurado.push(item) 
           } 
        });
        //-----------------------------------------
        //------informacion de todo el jurado------
        //-----------------------------------------
        let infoJurado = {}
        jurados.forEach((item)=>{
            if(item.id === seleccionado.asignarJurado){
                infoJurado = {id:item.id,  nombre:item.nombre, apellido:item.apellido, tipoEvaluacion:seleccionado.asignarTipodeEvaluacion}
            }
        })
        //-----------------------------------------
        //---------investigaciones seleccionadas---
        //-----------------------------------------
        let dataJuradoInvestigaciones = []
        contentInvestigaciones.forEach(investigacion => {
            if(contentCheckBox.includes(investigacion.id)){
                //si no tiene items
                if(investigacion.jurados.length === 0){
                    dataJuradoInvestigaciones.push({id:investigacion.id, data:[infoJurado]})
                    status = true
                }
                else{
                    let response = investigacion.jurados.some((elemento) => elemento.id === seleccionado.asignarJurado && elemento.tipoEvaluacion === seleccionado.asignarTipodeEvaluacion)
                    if(response){
                        setMessageAlert({'type':'danger','message':'Ya el jurado se encuentra asignado'})
                        status = false
                    }
                    else{
                        dataJuradoInvestigaciones.push({id:investigacion.id, data:[...investigacion.jurados, infoJurado]})    
                        status = true
                    }
                }
            }
        })
        //-----------------------------------------
        //---------investigaciones a jurados-------
        //-----------------------------------------
        
        let dataJurado = jurados.find(element => element.id === seleccionado.asignarJurado)
        let dataJurdadoInvestigaciones = []
        if(dataJurado.investigaciones === undefined){
            dataJurdadoInvestigaciones.push(...contentCheckBox)
        }
        else{
            if(dataJurado.investigaciones.length === 0){
                dataJurdadoInvestigaciones.push(...contentCheckBox)  
            }
            else{
                let response = [...dataJurado.investigaciones, ...contentCheckBox]
                response = new Set(response) 
                dataJurdadoInvestigaciones.push(...response)
            }
        }
        if(status){
            updateJuradosInvestigacion(dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones).then(response => {
                buscarInvestigaciones()
                setMessageAlert({'type':'success','message':'Jurado asignado'})
                
            })
        }
        setTimeout(() => {
            setMessageAlert({})
        }, 5000)
        

        
    }
    
    
    return (
        <Container fluid className='h-100 p-4 acciones investigaciones'>
            <Row>
                <Col xs={12}>
                    <Container fluid className='m-0 p-0'>
                        <Row className='m-0 p-0'>
                            <Col xs={6} className='p-0'><h1>Investigaciones</h1> </Col>
                            <Col xs={6} className='p-0 justify-content-end d-flex'><Button className='btn-custom' onClick={handleBuscarInvestigaciones}>{btnActualizar}</Button></Col>
                        </Row>
                    </Container>
                    <FiltersInvestigaciones listInvestigaciones={listInvestigaciones} contentInvestigaciones={contentInvestigaciones} setContentInvestigaciones={setContentInvestigaciones}/>
                    {userLogin.perfil === 'Administrador'
                    ?  
                    <>
                        <SeleccionarAccionInvestigaciones contentCheckBox={contentCheckBox} setStateAcciones={setStateAcciones}/>
                        {stateAcciones === 'asignar-jurados' && <AccionesAsignarJurado contentCheckBox={contentCheckBox} buscarJurados={buscarJurados} handleAsignarJurados={handleAsignarJurados} messageAlert={messageAlert}/>}
                    </>
                    : ''}
                    
                    <ListInvestigaciones contentInvestigaciones={contentInvestigaciones} handleViewInvestigation={handleViewInvestigation} userLogin={userLogin} contentCheckBox={contentCheckBox} setContentCheckBox={setContentCheckBox}/>
                </Col>
            </Row>
        </Container>
    )
}
