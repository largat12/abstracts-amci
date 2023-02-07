import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DescripcionTrabajosLibres } from './helpers/DescripcionTrabajosLibres'
import { FormularioRegistro } from './helpers/FormularioRegistro'

export const Fase1 = () => {

    const [activeForm, setactiveForm] = useState(false)

    return (
        <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                    <h1 className='text-center' style={{color:"var(--bg-primary)"}}>CONVOCATORIA DE RESÚMENES <br />HABILITADA HASTA  EL 1 DE ABRIL DE 2021</h1>
                    {activeForm ? <FormularioRegistro setactiveForm={setactiveForm}/> : <DescripcionTrabajosLibres setactiveForm={setactiveForm}/>}
                </Col>
            </Row>
        </Container>
      )
}
