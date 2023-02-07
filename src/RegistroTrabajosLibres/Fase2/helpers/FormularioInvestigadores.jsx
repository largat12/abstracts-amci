import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { ContextApp } from '../../../context/contextApp'



export const FormularioInvestigadores = () => {

  const {dataContextApp, setDataContextApp} = useContext(ContextApp)

  const hangleAtrasPage = () =>{
      setDataContextApp({
        ...dataContextApp,
        seccionState: 1
      })
  }

  const hangleSiguienteFace = () =>{
    
  }

  return (
    <Form>
      <Container fluid className=' p-0'>
        <Row className='m-0'>
          <Col xs={6} className='d-flex justify-content-start p-0'>
            <Button className="btn-custom " onClick={hangleAtrasPage}><p><FontAwesomeIcon icon={ faArrowLeft}/> Anterior</p></Button>
          </Col>
          <Col xs={6} className='d-flex justify-content-end  p-0'>
            <Button className="btn-custom " onClick={hangleSiguienteFace}><p>Siguiente <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}


