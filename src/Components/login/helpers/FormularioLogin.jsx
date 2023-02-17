import React, { useContext, useState } from 'react'
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../context/ContextAppAdministracion';
import { buscarUser } from '../../../firebase/helpers/buscarUser';

export const FormularioLogin = () => {
    const { iniciarSesionFun } = useContext(ContextAppAdministracion)
    const [iniciarSesion, setIniciarSesion] = useState({})
    const [validated, setValidated] = useState(false);
    const [errorUsuario, setErrorUsuario] = useState(true)
    const [textButton, setTextButton] = useState('Iniciar Sesión')

    const changeField = (field, value) => {
        setErrorUsuario(true)
        setIniciarSesion({
            ...iniciarSesion,
            [field]:value
        })
        if(!!validated[field]){
            setValidated({
              ...validated,
              [field]:null
            })
        }
    }
    const validateForm = () => {
        const {email, password} = iniciarSesion
        const newErros = {}

        if(!email                   || email === ''                       || email === undefined) newErros.email = 'Email obligatorio' 
        else if(!/\S+@\S+\.\S+/.test(email)) newErros.email = 'Email no valido'
        if(!password                  || password === ''                      || password === undefined) newErros.password = 'Contraseña obligatorio'

        return newErros
    }
    const handleIniciarSesion = (e) => {
        setTextButton('Iniciando sesión...')
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
             setValidated(formErrors)
             setTextButton('Iniciar Sesión')
        }
        else{
            buscarUser(iniciarSesion).then(response => {
                if(response === null){
                    setErrorUsuario(null)
                    setTextButton('Iniciar Sesión')
                }
                else{
                    setErrorUsuario(true)
                    setTextButton('Cargando...')
                    iniciarSesionFun(response)
                }
            })
            
        }
    }

    return (
        <Form onSubmit={handleIniciarSesion} className='col-12'>
            <Row>
                <Col xs={12}>
                    <FloatingLabel label="EMAIL" className='mb-4'>
                        <Form.Control type='email' placeholder='EMAIL' name='email' required onChange={ (e) => {changeField(e.target.name, e.target.value)} } value={iniciarSesion.email === undefined ? "" : iniciarSesion.titulo} isInvalid={!!validated.email}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.email}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel label="PASSWORD" className='mb-4'>
                        <Form.Control type='password' placeholder='PASSWORD' name='password' required onChange={ (e) => {changeField(e.target.name, e.target.value)} } value={iniciarSesion.password === undefined ? "" : iniciarSesion.password} isInvalid={!!validated.password}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.password}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    {errorUsuario === null ? <Alert key='danger' variant='danger'>Email o password incorrectos</Alert>: ''}
                    <Container fluid className=' p-0'>
                        <Col xs={12} className='d-flex justify-content-center p-0'>
                            <Button onClick={handleIniciarSesion} className='btn-custom'>{textButton}</Button>
                        </Col>
                    </Container>
                </Col>
            </Row>
        </Form>
    )
}
