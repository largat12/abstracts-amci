import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const SeleccionarAccionInvestigaciones = ({contentCheckBox, setStateAcciones}) => {
    if(contentCheckBox.length === 0) return (<></>)
    return (
        <Container fluid className='p-0 m-0 mb-3'>
            <Row className='p-0 m-0'>
                <Col xs={12} className='p-0'>
                    <Button className='btn-custom' onClick={(e) => {e.preventDefault();setStateAcciones('asignar-jurados')}}    style={{'marginRight':'10px'}}>
                        Asignar Jurado
                    </Button>
                    <Button className='btn-custom' onClick={(e) => {e.preventDefault();setStateAcciones('cambiar-estado')}}     style={{'marginRight':'10px'}}>
                        Cambiar Estado
                    </Button>
                    <Button className='btn-custom' onClick={(e) => {e.preventDefault();setStateAcciones('cambiar-modalidad')}} >
                        Modalidad de investigación
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
