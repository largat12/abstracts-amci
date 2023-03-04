import React, { useContext, useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { ListUsuarios } from './ListUsuarios/ListUsuarios'

export const DashboradUsuarios = () => {
    const {cambioDashboard, buscarUsuariosPlataforma, contenidoUsuarios, buscarEliminarUsuario, userLogin} = useContext(ContextAppAdministracion)

    useEffect(()=>{
        buscarUsuariosPlataforma()
    },[])
    
    return (
        <Container fluid className='h-100 p-4'>
            <Row>
                <Col xs={12}>
                    <Container fluid className='m-0 p-0'>
                        <Row className='m-0 p-0'>
                            <Col xs={6} className='p-0'><h1>Listado de Usuarios</h1></Col>
                            <Col xs={6} className='p-0 justify-content-end d-flex'><Button className='btn-custom' onClick={(e) => {e.preventDefault(); cambioDashboard('anadirUsuario')}}><p>Añadir usuario</p></Button></Col>
                        </Row>
                    </Container>
                    <ListUsuarios contenidoUsuarios={contenidoUsuarios} buscarEliminarUsuario={buscarEliminarUsuario} userLogin={userLogin}/>
                </Col>
            </Row>
        </Container>
    )
}
