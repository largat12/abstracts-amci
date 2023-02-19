import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const ListInvestigaciones = ({contentInvestigaciones, handleViewInvestigation}) => {

    if(contentInvestigaciones.length === 0) return(<>cargando</>)
    return (
        <div className='table-content'>
            <Container fluid className='thead'>
                <Row className='m-0'>
                    <Col xs={1}>ID</Col>
                    <Col xs={3}>Título</Col>
                    <Col xs={3}>Resumen</Col>
                    <Col xs={2}>Total puntos</Col>
                    <Col xs={1}>Estado</Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
            <Container fluid className='tbody'>
                {contentInvestigaciones.map((item) => {
                    return (
                        <Row key={item.id} className='m-0'>
                            <Col xs={1}><p className='cortar-texto id'>{item.id}</p></Col>
                            <Col xs={3}><p className='cortar-texto titulo'>{item.titulo}</p></Col>
                            <Col xs={3}><p className='cortar-texto resumen'>{item.resumen.replace( /(<([^>]+)>)/ig, '')}</p></Col>
                            <Col xs={2}><p className='cortar-texto total-puntos'>{item.totalPuntuacion}</p></Col>
                            <Col xs={1}><p className='estado'><span className={item.status[0].name.toLowerCase()}>{item.status[0].name}</span></p></Col>
                            <Col xs={2} className='justify-content-end d-flex align-content-center'><Button onClick={handleViewInvestigation} className='btn-custom'>ver detalles</Button></Col>
                        </Row>
                    )
                })}
            </Container>
        </div>
    )
}
