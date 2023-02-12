import React, { useContext, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ContextApp } from '../../context/contextApp'

export const CompletadoRegistro = () => {
  const {clearContext} = useContext(ContextApp)
  const navigate = useNavigate()
  
  const handleFinalizarRegistro = (e) => {
    e.preventDefault()
    clearContext()
    navigate('/')
  }
  
  return (
    <Container className='mt-4'>
      <Row>
        <Col xs={12} className=''>
          <h1 className='text-center'>Registro Completado</h1>
          <p className='text-center'>Tu investigación fue enviada con exito. Nos comunicaremos pronto contigo.</p>
          <Container fluid className=' p-0'>
            <Row className='m-0'>
              <Col xs={12} className='d-flex justify-content-start p-0'>
                  <Button className='btn-custom' onClick={handleFinalizarRegistro}>Cerrar</Button>
              </Col>
            </Row>
          </Container>
          
        </Col>
      </Row>
    </Container>
  )
}
