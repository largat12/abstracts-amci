import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Dashboard } from './Dashboard/Dashboard'
import { SlideBar } from './SlideBar/SlideBar'

export const Administracion = () => {
  return (
    <Container fluid className='contenedor-app-registro bg-lines container-login'>
      <Row>
        <Col xs={2} className='p-0' style={{'boxShadow':'0 30px 90px rgb(0 0 0 / 17%)'}}>
            <SlideBar />
        </Col>
        <Col xs={10} className='p-0 content-dashboard'>
            <Dashboard />
        </Col>
      </Row>
    </Container>
  )
}
