import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const DescripcionTrabajosLibres = ({setactiveForm}) => {

  const hangleDescriptionTrabajosLibres = (e) => {
    e.preventDefault();
    setactiveForm(true)
  }

  return (
    <div className='description-formulario-registro'>
        <p>Bienvenido al sistema en línea para la convocatoria de trabajos libres del Congreso Nacional AMCI 2021 que se realizará del 26 al 28 de mayo de 2021 de forma virtual. <br/>
        Este sistema consta de cuatro secciones:</p>
        <ul>
            <li><strong>Sección 1:</strong> Datos del autor designado como persona de contacto.</li>
            <li><strong>Sección 2:</strong> Información del resumen.</li>
            <li><strong>Sección 3:</strong> Datos de autores y coautores.</li>
            <li><strong>Sección 4:</strong> Confirmación de envío.</li>
        </ul>
        <p><strong>NOTA:</strong></p>
        <ul>
            <li>Diligencie una sola vez la información de su resumen en el sistema en línea.</li>
            <li>No se aceptarán trabajos preliminares o en ejecución, solo estudios finalizados.</li>
            <li>No se aceptarán casos clínicos.</li>
            <li>Por lo menos uno de los autores del resumen sometido debe ser miembro de la AMCI para poder presentar en el congreso.</li>
            <li>En caso de que el autor presentador del resumen inscrito en el sistema cambie, debe notificarlo con tiempo a la organización, de lo contario no se tendrá en cuenta el trabajo para ser presentado en el congreso.</li>
        </ul>
        <p>Para solucionar cualquier duda o si requiere información adicional comuníquese con el Comité Organizador del congreso a través del correo electrónico <a href="mailto:abstract@comunicacionesefectivas.zendesk.com" target="_blank" rel="noreferrer">abstract@comunicacionesefectivas.zendesk.com</a></p>
        <Container fluid>
          <Row className='m-0'>
            <Col xs={12} className='d-flex justify-content-end'>
              <Button className="btn-custom " onClick={hangleDescriptionTrabajosLibres}><p>Siguiente <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
