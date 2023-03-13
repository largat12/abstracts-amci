
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export const FiltersEvaluacionesAsignadas = ({jurados, setSelectJurado, selectJurado}) => {

    const [validated, setValidated] = useState(false);
    const handleSelectJurado = () => {

    }
    const changeField = (field, value) => {
        setSelectJurado({
          [field]: value
        })
        if(!!validated[field]){
          setValidated({
            [field]:null
          })
        }
    }
    return (
        <Container fluid className='p-0 m-0 mt-4 mb-4'>
            <Row className='m-0 p-0'>
                <Col xs={3} className='p-0 d-flex align-content-center align-items-center'>
                    <p className='items-total-investigaciones m-0'>Total de jurados {jurados.length} de {jurados.length}</p>
                </Col>
                <Col xs={9} className='p-0 d-flex justify-content-end'>
                    <Form onChange={handleSelectJurado} className='d-flex'>
                        <Form.Select size="sm" name='selectJurados' placeholder='TIPO DE IDENTIFICACIÓN' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={selectJurado.selectJurados === undefined ? "" : selectJurado.selectJurados}  isInvalid={!!validated.selectJurados}>
                            <option value=''>SELECCIONE UN JURADO</option>
                            {jurados.length !== 0 ?
                                jurados.map((item) => {
                                    return <option key={item.id} value={item.id}>{item.nombre.toUpperCase()} {item.apellido.toUpperCase()}</option>
                                })
                            : ''}

                        </Form.Select>
                        <Form.Control.Feedback  type="invalid">
                        {validated.selectJurados}
                        </Form.Control.Feedback>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
