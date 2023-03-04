import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'

export const FormularioAnadirUsuario = ({buscarAnadirUsuario}) => {

    const [user, setUser] = useState({}) 
    const [validated, setValidated] = useState(false);

    const changeField = (field, value) => {
        setUser({
          ...user,
          [field]: value
        })
        if(!!validated[field]){
          setValidated({
            ...validated,
            [field]:null
          })
        }
      }
    const validateForm = () => {
        const { nombre, apellido, email, password, perfil} = user
        const newErros = {}
        
        if(!nombre                  || nombre === ''                      || nombre === undefined) newErros.nombre = 'Nombre obligatorio' 
        if(!apellido                || apellido === ''                    || apellido === undefined) newErros.apellido = 'Apellido (s) obligatorio'
        if(!email                   || email === ''                       || email === undefined) newErros.email = 'Email obligatorio' 
        else if(!/\S+@\S+\.\S+/.test(email)) newErros.email = 'Email no valido'
        if(!password                || password === ''                    || password === undefined) newErros.password = 'Contraseña obligatorio' 
        if(!perfil                  || perfil === ''                      || perfil === undefined) newErros.perfil = 'Perfil obligatorio' 
        
        return newErros
    }
    const hangleAddUser = (e) =>{
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{
            buscarAnadirUsuario(user)
        }
    }
    return (
        <Form onSubmit={hangleAddUser} className="mt-3">
            <Row>
                <Col xs={6}>
                    <FloatingLabel controlId='usuarioNombre' label='NOMBRE' className='mb-3'>
                        <Form.Control type='text' placeholder='NOMBRE' name='nombre' required onChange={(e) => {changeField(e.target.name, e.target.value)}} value={user.nombre === undefined ? "" : user.nombre} isInvalid={!!validated.nombre}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.nombre}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col xs={6}>
                    <FloatingLabel controlId='usuarioApellido' label='APELLIDO' className='mb-3'>
                        <Form.Control type='text' placeholder='APELLIDO' name='apellido' required onChange={(e) => {changeField(e.target.name, e.target.value)}} value={user.apellido === undefined ? "" : user.apellido} isInvalid={!!validated.apellido}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.apellido}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FloatingLabel controlId='usuarioEmail' label='EMAIL' className='mb-3'>
                        <Form.Control type='email' placeholder='EMAIL' name='email' required onChange={(e) => {changeField(e.target.name, e.target.value)}} value={user.email === undefined ? "" : user.email} isInvalid={!!validated.email}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.email}
                        </Form.Control.Feedback>
                    </FloatingLabel>    
                </Col>
                <Col xs={6}>
                    <FloatingLabel controlId='usuarioPassword' label='CONTRASEÑA' className='mb-3'>
                        <Form.Control type='password' placeholder='CONTRASEÑA' name='password' required onChange={(e) => {changeField(e.target.name, e.target.value)}} value={user.password === undefined ? "" : user.password} isInvalid={!!validated.password}/>
                        <Form.Control.Feedback  type="invalid">
                            {validated.password}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Select name='perfil' placeholder='PERFIL' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={user.perfil === undefined ? "" : user.perfil}  isInvalid={!!validated.perfil}>
                        <option value=''>SELECCIONE UN PERFIL</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Colaborador">Colaborador</option>
                        <option value="Jurado">Jurado</option>
                    </Form.Select>
                    <Form.Control.Feedback  type="invalid">
                        {validated.perfil}
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='d-flex justify-content-end'>
                    <Button onClick={hangleAddUser} className="btn-custom mt-2"><p>Guardar Usuario <FontAwesomeIcon icon={faSave} /></p></Button>
                </Col>
            </Row>
        </Form>
    )
}
