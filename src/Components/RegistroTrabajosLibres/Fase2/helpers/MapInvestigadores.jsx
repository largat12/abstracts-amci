import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../../../context/ContextAppInvesitaciones'

export const MapInvestigadores = ({consultarRegisterUser}) => {
    const {dataContextAppInvesitaciones, removeUserRegister} = useContext(ContextAppInvesitaciones)
    const handleRemoveUser = (e) => {
        const idUser = e.target.attributes.dataid.value
        removeUserRegister(idUser)
    }

    const handleUpdateUser = (e) => {
        const idUser = e.target.attributes.dataid.value
        consultarRegisterUser(idUser)

        
    }


    return (
        <Container className='form-control p-4 mb-4'>
            <Row>
                <Col xs={12}>
                    {dataContextAppInvesitaciones.usersRegister.map((user, index) => {
                        return (    <Container key={user.numeroDeIdentificacion}  className='userList form-control mb-4'>
                                        <Row>
                                            <Col xs={6} className='d-flex justify-content-start align-items-center'>
                                                {user.nombre} {user.presentador ? ' (PRESENTADOR)' : ''}
                                            </Col>

                                            <Col xs={6} className='d-flex justify-content-end align-items-center'>
                                                {dataContextAppInvesitaciones.usersRegister.length !== 1 ? <Button className='btn-custom m-1' dataid={user.numeroDeIdentificacion} onClick={handleUpdateUser}>EDITAR</Button> : ''}
                                                {dataContextAppInvesitaciones.usersRegister.length !== 1 ? <Button className='btn-custom m-1' dataid={user.numeroDeIdentificacion} onClick={handleRemoveUser}>REMOVER</Button> : ''}
                                                
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
