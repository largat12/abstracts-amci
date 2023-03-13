import React, { useContext, useEffect, useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { FiltersEvaluacionesAsignadas } from './FiltersEvaluacionesAsignadas/FiltersEvaluacionesAsignadas'
import { ListInvestigacionesAsignadas } from './ListInvestigacionesAsignadas/ListInvestigacionesAsignadas'

export const DashboardEvaluacionesAsignadas = () => {
  const { buscarJurados, buscarInvestigaciones, listInvestigaciones, cambioDashboard, userLogin} = useContext(ContextAppAdministracion)
  const [jurados, setJurados] = useState([])
  const [selectJurado, setSelectJurado] = useState({})
  const [btnActualizar, setBtnActualizar] = useState("Actualizar Evaluaciones")
  const [dataInvestigaciones, setDataInvestigaciones] = useState([])

  useEffect(()=>{
      setDataInvestigaciones([])
      buscarJurados().then((response) => {
        if(userLogin.perfil === 'Jurado'){
          let data = response.find((item) => item.id === userLogin.id)
          setJurados([data])
        }
        else{
          setJurados([...response])
        }

        
      })
  },[])

  useEffect(()=>{
    setBtnActualizar("Actualizado")
    setTimeout(()=>{
        setBtnActualizar("Actualizar Evaluaciones") 
    },1000)
  },[jurados])

  useEffect(()=>{
    if( selectJurado.selectJurados !== '' && selectJurado.selectJurados !== undefined){
      const juradoSeleccionado = jurados.find((item) => item.id === selectJurado.selectJurados)
      buscarInvestigaciones()
      const data = []
      const investigaciones = listInvestigaciones
      if(investigaciones !== null){
        investigaciones.forEach((investigacion) => {
          if(investigacion.jurados.length !== 0){
            investigacion.jurados.forEach((jurado) => {
              if(juradoSeleccionado.id === jurado.id){
                data.push({...investigacion})
              }
            })
          }
        })
      }
      if(data.length === 0){
        setDataInvestigaciones(null)
      }
      else{
        setDataInvestigaciones(data)
      }
      
    }
    else{
      setDataInvestigaciones([])
    }

  },[selectJurado])


  const handleBuscarJurados = () => {
    buscarJurados().then((response) => {
      setJurados([...response])
    })
    setBtnActualizar("Actualizando...")
  }

  const handleViewInvestigation = (id) => {
    cambioDashboard('detallesInvestigacion',{"tipo":"investigacion", "id":id})
  }


  return (
    <Container fluid className='h-100 p-4 acciones evaluacionesAsignadas'>
      <Row>
        <Col xs={12}>
          <Container fluid className='m-0 p-0'>
            <Row className='m-0 p-0'>
              <Col xs={6} className='p-0'><h1>Evaluaciones Asignadas</h1> </Col>
              <Col xs={6} className='p-0 justify-content-end d-flex'><Button className='btn-custom' onClick={handleBuscarJurados}>{btnActualizar}</Button></Col>
            </Row>
          </Container>
          <FiltersEvaluacionesAsignadas jurados={jurados} setSelectJurado={setSelectJurado} selectJurado={selectJurado}/>
          <ListInvestigacionesAsignadas dataInvestigaciones={dataInvestigaciones} handleViewInvestigation={handleViewInvestigation} userLogin={userLogin}/>
        </Col>
      </Row>
    </Container>
  )
}
