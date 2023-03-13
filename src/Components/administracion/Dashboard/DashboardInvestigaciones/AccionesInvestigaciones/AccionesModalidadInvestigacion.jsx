import React, { useEffect, useState }from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

export const AccionesModalidadInvestigacion = ({buscarModalidadInvestigaciones, handleCambiarModalidad, messageAlert}) => {
    const [itemForm, setItemForm] = useState({})
    const [validated, setValidated] = useState(false);
    const [modalidad, setModalidad] = useState([])

    useEffect(()=>{
      buscarModalidadInvestigaciones().then((response)=>{
            setModalidad([...response])
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
        const { asignarModalidad } = itemForm
        const newErros = {}
        
        if(!asignarModalidad                  || asignarModalidad === ''                      || asignarModalidad === undefined) newErros.asignarModalidad = 'Modalidad obligatorio'
        return newErros
    }
    const handleSubmitModalidad = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{
          handleCambiarModalidad(itemForm, modalidad)
        }
    }
    return (
        <Container fluid className='p-0 m-0 mb-3 col-5'>
            <Form onSubmit={handleSubmitModalidad} className='col-12'>
                <Row>
                    
                    <Col xs={5}>
                        <Form.Select size="sm" name='asignarModalidad' placeholder='ASIGNAR MODADLIDAD' className='col-2 p-2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={itemForm.asignarModalidad === undefined ? "" : itemForm.asignarModalidad}  isInvalid={!!validated.asignarModalidad}>
                            <option value=''>SELECCIONE UNA MODALIDAD</option>
                            {modalidad.map(item =>{
                                return <option key={item.id} value={item.id}>{item.name.toUpperCase()}</option>
                            })}
                        </Form.Select>
                        
                    </Col>
                    <Col xs={2}>
                        <Button onClick={handleSubmitModalidad} className='btn-custom col-3 w-100'>Asignar</Button>
                    </Col>
                </Row>
            </Form>
            {messageAlert.message !== undefined ? <Alert className='alert acciones' variant={messageAlert.type}>{messageAlert.message}</Alert>: ''}
        </Container>
    )
}
