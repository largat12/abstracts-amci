import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextApp } from '../../../context/contextApp'

export const MapInvestigadores = () => {
    const {dataContextApp} = useContext(ContextApp)
    return (
        <Container className='form-control p-4'>
            <Row>
                <Col xs={12}>
                    {dataContextApp.usersRegister.map((user, index) => {
                        return (    <Container key={index} className='userList form-control'>
                                        <Row>
                                            <Col xs={6} className='d-flex justify-content-start align-items-center'>
                                                {user.nombre} {user.presentador ? ' (PRESENTADOR)' : ''}
                                            </Col>

                                            <Col xs={6} className='d-flex justify-content-end align-items-center'>
                                                {dataContextApp.usersRegister.length !== 1 ? <Button className='btn-custom m-1'>EDITAR</Button> : ''}
                                                {dataContextApp.usersRegister.length !== 1 ? <Button className='btn-custom m-1'>REMOVER</Button> : ''}
                                                
                                            </Col>
                                        </Row>
                                    </Container>

                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
