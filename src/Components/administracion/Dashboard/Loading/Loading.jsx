import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <Container fluid className='container-loading'>
        <Row>
            <Col xs={12}>
                <div className='loading d-flex'>
                    <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /> <p>Cargando...</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
