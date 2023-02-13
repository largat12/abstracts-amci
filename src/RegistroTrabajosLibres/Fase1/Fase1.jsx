import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../context/ContextAppInvesitaciones'
import { DescripcionTrabajosLibres } from './helpers/DescripcionTrabajosLibres'
import { FormularioRegistro } from './helpers/FormularioRegistro'

export const Fase1 = () => {
    const {dataContextAppInvesitaciones} = useContext(ContextAppInvesitaciones)


    return (
        <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                    
                    {dataContextAppInvesitaciones.formRegister.activeFormFase1 ? <FormularioRegistro /> : <DescripcionTrabajosLibres />}
                </Col>
            </Row>
        </Container>
      )
}
