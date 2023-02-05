import './css/registro.css'
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BannerSuperior } from '../bannner/BannerSuperior'
import { ContextApp } from '../context/contextApp'
import { SessionActual } from './seccionesActuales/SessionActual'
import { Secciones } from './secciones/Secciones'

export const RegistroTrabajosLibres = () => {
  const {dataRegistro} = useContext(ContextApp) 
  return (
    <Container fluid className='contenedor-app-registro bg-lines'>
        <Container className='contenedor-registro'>
          <Row>
            <Col xs={12}>
              <SessionActual actual={dataRegistro.seccionState} total={dataRegistro.seccionTotal}/>
              <BannerSuperior />
              <Secciones actual={dataRegistro.seccionState} />
            </Col>
          </Row>
        </Container>
    </Container>
    
  )
}
