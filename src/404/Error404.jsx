import './error404.css'
import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export const Error404 = () => {
    const navigate = useNavigate()

    const hangleErro404 = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <Container className='error404 bg-lines'>
            <Row>
                <Col xs={12} >
                    <h1>404</h1>
                    <h3>Parece que estás perdido.</h3>
                    <p>Parece que no podemos encontrar la página que estás buscando.</p>
                    <Button onClick={hangleErro404} className="btn-custom"><p>Volver al inicio<FontAwesomeIcon icon={faArrowRight}/></p></Button>
                </Col>
            </Row>
        </Container>
    )
}
