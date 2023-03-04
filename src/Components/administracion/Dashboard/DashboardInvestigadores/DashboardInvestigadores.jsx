import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { FilterInvestigadores } from './FilterInvestigadores/FilterInvestigadores'
import { ListInvestigadores } from './ListInvestigadores/ListInvestigadores'

export const DashboardInvestigadores = () => {
  const {buscarInvestigadores, listInvestigadores, cambioDashboard} = useContext(ContextAppAdministracion)
  const [contentInvestigadores, setContentInvestigadores] = useState([])
  const [btnActualizar, setBtnActualizar] = useState("Actualizar investigadores")
  
  useEffect(()=>{
      buscarInvestigadores()
  },[])

  useEffect(()=>{
      setContentInvestigadores(listInvestigadores)
      setBtnActualizar("Actualizado")
      setTimeout(()=>{
          setBtnActualizar("Actualizar investigadores") 
      },1000)
  },[listInvestigadores])


  const handleBuscarInvestigadores = () => {
      buscarInvestigadores()
      setBtnActualizar("Actualizando...")
  }

  const handleViewInvestigadores = (id) => {
      cambioDashboard('detallesInvestigadores',{"tipo":"investigadores", "id":id})

  }
  
  return (
    <Container fluid className='h-100 p-4'>
      <Row>
        <Col xs={12}>
          <Container fluid className='m-0 p-0'>
            <Row className='m-0 p-0'>
              <Col xs={6} className='p-0'><h1>Investigadores</h1></Col>
              <Col xs={6} className='p-0 justify-content-end d-flex'><Button className='btn-custom' onClick={handleBuscarInvestigadores}>{btnActualizar}</Button></Col>
            </Row>
          </Container>
          <FilterInvestigadores listInvestigadores={listInvestigadores} contentInvestigadores={contentInvestigadores} setContentInvestigadores={setContentInvestigadores}/>
          <ListInvestigadores contentInvestigadores={contentInvestigadores} handleViewInvestigadores={handleViewInvestigadores}/>
        </Col>
      </Row>
    </Container>
  )
}
