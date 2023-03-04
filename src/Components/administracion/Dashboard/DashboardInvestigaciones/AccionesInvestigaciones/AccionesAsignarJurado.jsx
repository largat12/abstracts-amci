import React, { useEffect, useState } from 'react'
import { Col, Button, Container, Form, Row, Alert } from 'react-bootstrap'

export const AccionesAsignarJurado = ({buscarJurados, handleAsignarJurados, messageAlert}) => {
    const [itemForm, setItemForm] = useState({})
    const [validated, setValidated] = useState(false);
    const [jurados, setJurados] = useState([])
    
    useEffect(()=>{
        buscarJurados().then((response)=>{
            setJurados([...response])
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
        const { asignarJurado, asignarTipodeEvaluacion} = itemForm
        const newErros = {}
        
        if(!asignarJurado                  || asignarJurado === ''                      || asignarJurado === undefined) newErros.asignarJurado = 'Jurado obligatorio'
        if(!asignarTipodeEvaluacion        || asignarTipodeEvaluacion === ''            || asignarTipodeEvaluacion === undefined) newErros.asignarTipodeEvaluacion = 'tipo de calificación obligatorio'
        return newErros
    }
    const handleSubmitJurado = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{
            handleAsignarJurados(itemForm, jurados)
        }
    }

    return (
        <Container fluid className='p-0 m-0 mb-3 col-5'>
            <Form onSubmit={handleSubmitJurado} className='col-12'>
                <Row>
                    
                    <Col xs={5}>
                        <Form.Select size="sm" name='asignarJurado' placeholder='ASIGNAR JURADO' className='col-2 p-2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={itemForm.asignarJurado === undefined ? "" : itemForm.asignarJurado}  isInvalid={!!validated.asignarJurado}>
                            <option value=''>SELECCIONE UN JURADO</option>
                            {jurados.map(item=>{
                                return <option key={item.id} value={item.id}>{item.nombre.toUpperCase()} {item.apellido.toUpperCase()}</option>
                            })}
                        </Form.Select>
                        
                    </Col>
                    <Col xs={5}>
                        <Form.Select size="sm" name='asignarTipodeEvaluacion' placeholder='ASIGNAR JURADO' className='col-2 p-2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={itemForm.asignarTipodeEvaluacion === undefined ? "" : itemForm.asignarTipodeEvaluacion}  isInvalid={!!validated.asignarTipodeEvaluacion}>
                            <option value=''>TIPO DE EVALUACIÓN</option>
                            <option value='metodologico'>METODOLÓGICO</option>
                            <option value='clinico'>CLINICO</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Button onClick={handleSubmitJurado} className='btn-custom col-3 w-100'>Asignar</Button>
                    </Col>
                </Row>
            </Form>
            {messageAlert.message !== undefined ? <Alert className='alert acciones' variant={messageAlert.type}>{messageAlert.message}</Alert>: ''}
        </Container>
    )
}
