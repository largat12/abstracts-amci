import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FormularioInscripcion } from './Formulario/FormularioInscripcion'

export const FormularioRegistro = ({setactiveForm}) => {

  const hangleAtrasPage = (e) => {
    e.preventDefault();
    setactiveForm(false)
  }
  const hangleSiguienteFace = (e) => {

  }
  return (
    <>
        <div className='description-formulario-registro'>
            <p><strong>INSTRUCCIONES PARA LA SECCIÓN 1</strong></p>
            <ul>
                <li>Para una mejor experiencia dentro de la plataforma, por favor <strong>evite</strong> utilizar el <em>navegador Internet Explorer</em>.</li>
                <li>Ingrese los datos solicitados del autor designado como persona de contacto, a quien el Comité Organizador enviará las comunicaciones relativas al resumen.</li>
                <li>Ingrese todos los datos solicitados sin abreviaturas y en <strong>mayúscula sostenida</strong> excepto el correo electrónico.</li>
                <li>Los campos señalados con asterisco <strong style={{color:"red"}}>(*)</strong> son INDISPENSABLES para continuar a la siguiente sección.</li>
                <li>En el campo del correo electrónico, coloque una sola dirección. Este campo es de gran importancia, ya que todas las instrucciones y notificaciones serán enviadas a través del mismo.</li>
            </ul>
        </div>
        <FormularioInscripcion/>
        <Container fluid>
          <Row className='m-0'>
            <Col xs={6} className='d-flex justify-content-start'>
              <Button className="btn-custom " onClick={hangleAtrasPage}><p><FontAwesomeIcon icon={ faArrowLeft}/> Anterior</p></Button>
            </Col>
            <Col xs={6} className='d-flex justify-content-end'>
              <Button className="btn-custom " onClick={hangleSiguienteFace}><p>Siguiente <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}
