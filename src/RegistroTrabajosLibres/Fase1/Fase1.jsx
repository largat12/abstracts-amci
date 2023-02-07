import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ContextApp } from '../../context/contextApp'
import { DescripcionTrabajosLibres } from './helpers/DescripcionTrabajosLibres'
import { FormularioRegistro } from './helpers/FormularioRegistro'

export const Fase1 = () => {
    const {dataContextApp} = useContext(ContextApp)


    return (
        <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                    
                    {dataContextApp.formRegister.activeFormFase1 ? <FormularioRegistro /> : <DescripcionTrabajosLibres />}
                </Col>
            </Row>
        </Container>
      )
}
