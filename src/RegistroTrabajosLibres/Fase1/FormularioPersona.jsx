import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Descripcion } from './Descripcion'

export const FormularioPersona = () => {
  return (
    <Container fluid className='formulario-registro'>
        <Row className='m-0'>
            <Col xs={12}>
                <h1 className='text-center' style={{color:"var(--bg-primary)"}}>CONVOCATORIA DE RESÚMENES <br />HABILITADA HASTA  EL 6 DE MAYO DE 2021</h1>
                <Descripcion />
            </Col>
        </Row>
    </Container>
  )
}
