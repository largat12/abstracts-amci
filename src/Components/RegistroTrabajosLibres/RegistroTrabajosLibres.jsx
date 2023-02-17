import './css/registro.css'
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BannerSuperior } from '../bannner/BannerSuperior'
import { ContextAppInvesitaciones } from '../../context/ContextAppInvesitaciones'
import { SessionActual } from './seccionesActuales/SessionActual'
import { Secciones } from './secciones/Secciones'
import { Fase1 } from './Fase1/Fase1'
import { Fase2 } from './Fase2/Fase2'
import { Fase3 } from './Fase3/Fase3'
import { Fase4 } from './Fase4/Fase4'
import { CompletadoRegistro } from './completado/CompletadoRegistro'

export const RegistroTrabajosLibres = () => {
  const {dataContextAppInvesitaciones} = useContext(ContextAppInvesitaciones) 
  return (
    
    <Container fluid className='contenedor-app-registro bg-lines'>
        <Container className='contenedor-registro'>
          <Row>
            <Col xs={12}>
              <SessionActual actual={dataContextAppInvesitaciones.seccionState} total={dataContextAppInvesitaciones.seccionTotal}/>
              <BannerSuperior />
              {dataContextAppInvesitaciones.completeRegistro === null ? <Secciones actual={dataContextAppInvesitaciones.seccionState} /> : ''}
              {// -------- session 1 -----
              dataContextAppInvesitaciones.seccionState === 1 && dataContextAppInvesitaciones.completeRegistro === null ? <Fase1 /> : ""}
              {// -------- session 2 -----
              dataContextAppInvesitaciones.seccionState === 2 && dataContextAppInvesitaciones.completeRegistro === null ? <Fase2 /> : ""}
              {// -------- session 3 -----
              dataContextAppInvesitaciones.seccionState === 3 && dataContextAppInvesitaciones.completeRegistro === null ? <Fase3 /> : ""}
              {// -------- session 4 -----
              dataContextAppInvesitaciones.seccionState === 4 && dataContextAppInvesitaciones.completeRegistro === null ? <Fase4 /> : ""}
              {// -------- session 4 -----
              dataContextAppInvesitaciones.completeRegistro !== null ? <CompletadoRegistro /> : ""}
            </Col>
          </Row>
        </Container>
    </Container>
    
  )
}
