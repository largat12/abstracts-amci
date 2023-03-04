import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const SeleccionarAccionInvestigaciones = ({contentCheckBox, setStateAcciones}) => {
    if(contentCheckBox.length === 0) return (<></>)
    return (
        <Container fluid className='p-0 m-0 mb-3'>
            <Row className='p-0 m-0'>
                <Col xs={12} className='p-0'>
                    <Button className='btn-custom' style={{'marginRight':'10px'}} onClick={(e) => {e.preventDefault();setStateAcciones('asignar-jurados')}}>
                        Asignar Jurado
                    </Button>
                    <Button className='btn-custom' onClick={(e) => {e.preventDefault();setStateAcciones('cambiar-investigacion')}} >
                        Cambiar investigación
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
