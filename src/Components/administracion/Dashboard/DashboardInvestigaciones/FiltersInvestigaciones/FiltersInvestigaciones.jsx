import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const FiltersInvestigaciones = ({listInvestigaciones, contentInvestigaciones, setContentInvestigaciones}) => {
  const [valueForm, setValueForm] = useState({})

  const changeField = (field, value) => {
    setValueForm({
      ...valueForm,
      [field]:value
    })
  }
  const handleFilterInvestigaciones = (e) => {
      e.preventDefault()
      let response = listInvestigaciones.filter((item) => {
        return item["id"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1 || item["titulo"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1 || item["resumen"].toLowerCase().indexOf(valueForm['filterBuscar'].toLowerCase()) !== -1
      })
      setContentInvestigaciones(response)
  }
  return (
    <Container fluid className='p-0 m-0 mt-4 mb-4'>
      <Row className='m-0 p-0'>
        <Col xs={3} className='p-0 d-flex align-content-center align-items-center'>
           <p className='items-total-investigaciones m-0'>Total de investigaciones {listInvestigaciones.length} de {contentInvestigaciones.length}</p>
        </Col>
        <Col xs={9} className='p-0 d-flex justify-content-end'>
          <Form onSubmit={handleFilterInvestigaciones} className='d-flex'>
            <Form.Control type='text' placeholder='Buscar...' name='filterBuscar' className='inputSearch' onChange={(e) => {changeField(e.target.name, e.target.value)} } value={valueForm.filterBuscar === undefined ? "" : valueForm.filterBuscar} />
            <Button className='btnFilterSearch btn-custom ml-4' onClick={handleFilterInvestigaciones}><FontAwesomeIcon icon={faSearch} /></Button>
          </Form>
          
        </Col>
      </Row>
    </Container>
  )
}
