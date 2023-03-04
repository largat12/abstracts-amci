import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {Loading} from '../../Loading/Loading'

export const ListUsuarios = ({contenidoUsuarios, buscarEliminarUsuario, userLogin}) => {
    if(contenidoUsuarios.length === 0) return <Loading />
    
    return (
        <div className='table-content mt-4'>
            <Container fluid className='thead'>
                <Row className='m-0'>
                    <Col xs={1}>Id</Col>
                    <Col xs={4}>Nombre Completo</Col>
                    <Col xs={4}>Email</Col>
                    <Col xs={2}>Perfil</Col>
                    <Col xs={1}>Acciones</Col>
                </Row>
            </Container>
            <Container fluid className='tbody'>
                {contenidoUsuarios.map((item)=>{
                    return (
                        <Row key={item.id} className='m-0'>
                            <Col xs={1}><p className='cortar-texto id'>{item.id}</p></Col>
                            <Col xs={4}><p className='cortar-texto titulo'>{item.nombre} {item.apellido}</p></Col>
                            <Col xs={4}><p className='cortar-texto nombre-completo'>{item.email}</p></Col>
                            <Col xs={2}><p className='cortar-texto email'>{item.perfil}</p></Col>
                            <Col xs={1} className='justify-content-end d-flex align-content-center'>
                                {userLogin.id !== item.id ? <Button onClick={(e) => {e.preventDefault();buscarEliminarUsuario(item.id)}} className='btn-custom'>Eliminar</Button> : ''}
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </div>
    )
}
