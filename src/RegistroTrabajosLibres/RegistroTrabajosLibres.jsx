import './css/registro.css'
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BannerSuperior } from '../bannner/BannerSuperior'
import { ContextApp } from '../context/contextApp'
import { SessionActual } from './seccionesActuales/SessionActual'
import { Secciones } from './secciones/Secciones'
import { Fase1 } from './Fase1/Fase1'
import { Fase2 } from './Fase2/Fase2'
import { Fase3 } from './Fase3/Fase3'
import { Fase4 } from './Fase4/Fase4'
import { CompletadoRegistro } from './completado/CompletadoRegistro'

export const RegistroTrabajosLibres = () => {
  const {dataContextApp} = useContext(ContextApp) 
  return (
    <Container fluid className='contenedor-app-registro bg-lines'>
        <Container className='contenedor-registro'>
          <Row>
            <Col xs={12}>
              <SessionActual actual={dataContextApp.seccionState} total={dataContextApp.seccionTotal}/>
              <BannerSuperior />
              {dataContextApp.completeRegistro === null ? <Secciones actual={dataContextApp.seccionState} /> : ''}
              {// -------- session 1 -----
              dataContextApp.seccionState === 1 && dataContextApp.completeRegistro === null ? <Fase1 /> : ""}
              {// -------- session 2 -----
              dataContextApp.seccionState === 2 && dataContextApp.completeRegistro === null ? <Fase2 /> : ""}
              {// -------- session 3 -----
              dataContextApp.seccionState === 3 && dataContextApp.completeRegistro === null ? <Fase3 /> : ""}
              {// -------- session 4 -----
              dataContextApp.seccionState === 4 && dataContextApp.completeRegistro === null ? <Fase4 /> : ""}
              {// -------- session 4 -----
              dataContextApp.completeRegistro !== null ? <CompletadoRegistro /> : ""}
            </Col>
          </Row>
        </Container>
    </Container>
    
  )
}
