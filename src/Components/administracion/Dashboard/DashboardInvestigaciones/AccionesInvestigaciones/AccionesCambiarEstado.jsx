import React, { useEffect, useState }from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

export const AccionesCambiarEstado = ({buscarEstadosInvestigaciones, handleCambiarEstado, messageAlert}) => {
    const [itemForm, setItemForm] = useState({})
    const [validated, setValidated] = useState(false);
    const [estados, setEstados] = useState([])

    useEffect(()=>{
        buscarEstadosInvestigaciones().then((response)=>{
            setEstados([...response])
        })
    },[])

    const changeField = (field, value) => {
        setItemForm({
            ...itemForm,
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
        const { asignarEstado} = itemForm
        const newErros = {}
        
        if(!asignarEstado                  || asignarEstado === ''                      || asignarEstado === undefined) newErros.asignarEstado = 'Estado obligatorio'
        return newErros
    }
    const handleSubmitEstado = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{
            handleCambiarEstado(itemForm, estados)
        }
    }
    return (
        <Container fluid className='p-0 m-0 mb-3 col-8'>
            <Form onSubmit={handleSubmitEstado} className='col-12'>
                <Row>
                    
                    <Col xs={5}>
                        <Form.Select size="sm" name='asignarEstado' placeholder='ASIGNAR ESTADO' className='col-2 p-2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={itemForm.asignarEstado === undefined ? "" : itemForm.asignarEstado}  isInvalid={!!validated.asignarEstado}>
                            <option value=''>SELECCIONE UN ESTADO</option>
                            {estados.map(item =>{
                                return <option key={item.id} value={item.id}>{item.name.toUpperCase()}</option>
                            })}
                        </Form.Select>
                        
                    </Col>
                    <Col xs={5}>
                        <Form.Control size="sm" name='asignarComentario' placeholder='ASIGNAR COMENTARIO' className='col-2 p-2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={itemForm.asignarComentario === undefined ? "" : itemForm.asignarComentario}  isInvalid={!!validated.asignarComentario} />
                            
                        
                    </Col>        
                    <Col xs={2}>
                        <Button onClick={handleSubmitEstado} className='btn-custom col-3 w-100'>Asignar</Button>
                    </Col>
                </Row>
            </Form>
            {messageAlert.message !== undefined ? <Alert className='alert acciones' variant={messageAlert.type}>{messageAlert.message}</Alert>: ''}
        </Container>
    )
}
