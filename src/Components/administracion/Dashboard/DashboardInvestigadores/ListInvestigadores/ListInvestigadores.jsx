import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Loading } from '../../Loading/Loading'

export const ListInvestigadores = ({contentInvestigadores, handleViewInvestigadores}) => {
    //console.log('contentInvestigadores', contentInvestigadores)
    if(contentInvestigadores.length === 0) return( <Loading/>)

    return (
        <div className='table-content'>
            <Container fluid className='thead p-0 pt-2 pb-2'>
                <Row className='m-0'>
                    <Col className='p-0 m-0 border-right' style={{width:'40px', flex:'0 0 40px'}}>

                    </Col>
                    <Col className='p-0 m-0 border-right' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                        <Container fluid className='p-0 m-0'>
                        <Row className='m-0'>
                            <Col xs={1} className='border-right'>ID</Col>
                            <Col xs={1} className='border-right'>Título</Col>
                            <Col xs={3} className='border-right'>Nombre Completo</Col>
                            <Col xs={3} className='border-right'>Email</Col>
                            <Col xs={1} className='border-right'>País</Col>
                            <Col xs={1} className='border-right'>Ciudad</Col>
                            <Col xs={1} className='border-right'>Cargo</Col>
                            <Col xs={1} className='border-right'>Acciones</Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
                
            <Container fluid className='tbody p-0'>
                {contentInvestigadores.map((item)=>{
                    return (
                        <Row key={item.id} className='m-0 p-0 pt-2 pb-2'>
                            <Col className='p-0 m-0' style={{width:'40px', flex:'0 0 40px'}}>

                            </Col>
                            <Col className='p-0 m-0' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                                <Container fluid className='p-0 m-0'>
                                    <Row className='m-0'>
                                        <Col xs={1}><p className='cortar-texto id'>{item.id}</p></Col>
                                        <Col xs={1}><p className='cortar-texto titulo'>{item.titulo}</p></Col>
                                        <Col xs={3}><p className='cortar-texto nombre-completo'>{item.nombre} {item.apellido}</p></Col>
                                        <Col xs={3}><p className='cortar-texto email'>{item.email}</p></Col>
                                        <Col xs={1}><p className='cortar-texto pais'>{item.pais}</p></Col>
                                        <Col xs={1}><p className='cortar-texto ciudad'>{item.ciudad}</p></Col>
                                        <Col xs={1}><p className='cortar-texto cargo'>{item.cargo}</p></Col>
                                        <Col xs={1} className='justify-content-end d-flex align-content-center'><Button onClick={(e) => {e.preventDefault();handleViewInvestigadores(item.investigacion)}} className='btn-custom'>Detalles</Button></Col>
                                    </Row>
                                </Container>
                            </Col>
                            
                        </Row>
                    )
                })}

            </Container>
        </div>
    )
}
