import React, { useContext } from 'react'
import { Col, Container, Row,  Nav } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'

export const MenuAdministrador = () => {
  const { cambioDashboard } = useContext(ContextAppAdministracion)

  const handleSelectDasboard = (selectedKey) => {
    cambioDashboard(selectedKey)
  }

  return (
    <Container className='menu p-0' fluid >
      <Row className='m-0'>
        <Col xs={12} className='p-0'>
            <p className='title-menu mb-0 mt-4'>Menú</p>
            <Nav onSelect={handleSelectDasboard} className="flex-column" defaultActiveKey='investigaciones'>
               <Nav.Item>
                  <Nav.Link eventKey='investigaciones'>Investigaciones</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey='investigadores'>Investigadores</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey='evaluaciones-asignadas'>Evaluaciones Asignadas</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey='usuarios'>Usuarios</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey='exportar'>Exportar Data</Nav.Link>
               </Nav.Item>
            </Nav>
        </Col>
      </Row>
    </Container>
  )
}
