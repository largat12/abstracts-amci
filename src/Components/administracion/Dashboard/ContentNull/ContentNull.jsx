import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const ContentNull = ({texto}) => {
  return (
        <Container fluid className='container-loading'>
            <Row>
                <Col xs={12}>
                    <div className='loading d-flex'>
                        <p>{texto}</p>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}
