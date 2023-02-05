import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export const Secciones = ({actual}) => {
  return (
    <Container className='content-session'>
        <Row>
            <Col xs={3} className={`item-seccion ${actual === 1 ? 'active' : ''}`  }>
                <p className='title session'>Sección 1</p>
                <p className='description session'>Datos del autor designado como persona de contacto </p>
            </Col>
            <Col xs={3} className={`item-seccion ${actual === 2 ? 'active' : ''}`  }>
                <p className='title session'>Sección 2</p>
                <p className='description session'>Información del resumen</p>
            </Col>
            <Col xs={3} className={`item-seccion ${actual === 3 ? 'active' : ''}`  }>
                <p className='title session'>Sección 3</p>
                <p className='description session'>Datos de autores y coautores</p>
            </Col>
            <Col xs={3} className={`item-seccion ${actual === 4 ? 'active' : ''}`  }>
                <p className='title session'>Sección 4</p>
                <p className='description session'>Confirmación de envío</p>
            </Col>
        </Row>
    </Container>
  )
}
