import React, {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const FilterInvestigadores = ({listInvestigadores, contentInvestigadores, setContentInvestigadores}) => {


    const [valueForm, setValueForm] = useState({})

    const changeField = (field, value) => {
        setValueForm({
        ...valueForm,
        [field]:value
        })
    }
    const handleFilterInvestigadores = (e) => {
        e.preventDefault()
        let response = listInvestigadores.filter((item) => {
            return item["id"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1 || item["nombre"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1 || item["apellido"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1
        })
        setContentInvestigadores(response)
    }
    if(listInvestigadores === null){
        return <></>
    }
    return (
    <Container fluid className='p-0 m-0 mt-4 mb-4'>
        <Row className='m-0 p-0'>
            <Col xs={3} className='p-0 d-flex align-content-center align-items-center'>
            <p className='items-total-investigaciones m-0'>Total de investigadores {listInvestigadores.length} de {contentInvestigadores.length}</p>
                
            </Col>
            <Col xs={9} className='p-0 d-flex justify-content-end'>
            <Form onSubmit={handleFilterInvestigadores} className='d-flex'>
                <Form.Control type='text' placeholder='Buscar...' name='filterBuscar' className='inputSearch' onChange={(e) => {changeField(e.target.name, e.target.value)} } value={valueForm.filterBuscar === undefined ? "" : valueForm.filterBuscar} />
                <Button className='btnFilterSearch btn-custom ml-4' onClick={handleFilterInvestigadores}><FontAwesomeIcon icon={faSearch} /></Button>
            </Form>
            
            </Col>
        </Row>
    </Container>
    )
}
