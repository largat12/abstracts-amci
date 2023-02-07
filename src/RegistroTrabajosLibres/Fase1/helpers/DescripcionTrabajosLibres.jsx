import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextApp } from '../../../context/contextApp'

export const DescripcionTrabajosLibres = () => {
  const {dataContextApp, setDataContextApp} = useContext(ContextApp)


  const hangleDescriptionTrabajosLibres = (e) => {
    e.preventDefault();
    let data = {...dataContextApp}
    data.formRegister.activeFormFase1 = true
    setDataContextApp({
      ...data
    })
  }

  return (
    <>
      <h1 className='text-center' style={{color:"var(--bg-primary)"}}>CONVOCATORIA DE RESÚMENES <br />HABILITADA HASTA  EL 1 DE ABRIL DE 2023</h1>
      <div className='description-formulario-registro'>
          <p>Bienvenido al sistema en línea para la convocatoria de trabajos libres del Congreso Nacional AMCI 2023 que se realizará del 17 de febrero al 1 de abril de 2023 de forma virtual. <br/>
          Este sistema consta de cuatro secciones:</p>
          <ul>
              <li><strong>Sección 1:</strong> Información del autor de contacto.</li>
              <li><strong>Sección 2:</strong> Información de investigadores.</li>
              <li><strong>Sección 3:</strong> Información del resumen.</li>
              <li><strong>Sección 4:</strong> Confirmación de envío.</li>
          </ul>
          <p><strong>NOTA:</strong></p>
          <ul>
              <li>Diligencie una sola vez la información de su resumen en el sistema en línea.</li>
              <li>No se aceptarán trabajos preliminares o en ejecución, solo estudios finalizados.</li>
              <li>No se aceptarán casos clínicos.</li>
              <li>Por lo menos uno de los autores del resumen sometido debe ser miembro de la AMCI para poder presentar en el congreso.</li>
              <li>En caso de que el autor presentador del resumen inscrito en el sistema cambie, debe notificarlo con tiempo a la organización, de lo contario no se tendrá en cuenta el trabajo para ser presentado en el congreso.</li>
              <li>Cada resumen podrá participar en un eje temático, usted podrá seleccionar el que considere más afín a la temática de la investigación entre los siguientes
                <ol>
                  <li><strong>Adultos – Respiratorio:</strong> diagnóstico, monitoreo, soporte y terapéutica, oxigenoterapia, ventilación mecánica.</li>
                  <li><strong>Adultos – Cardiovascular:</strong> diagnóstico, monitoreo, soporte, terapéutica, perfusión, asistencia circulatoria mecánica.</li>
                  <li><strong>Adultos - Neurocrítico:</strong> diagnóstico, monitoreo, soporte, terapéutica, pronóstico.</li>
                  <li><strong>Adultos - Sepsis:</strong> (diagnóstico, terapéutica, avances).</li>
                  <li><strong>Adultos - General:</strong> condiciones de alto riesgo obstétrico, metabólicas y soporte nutricional, autoinmunidad, microangiopatías entre otras.</li>
                  <li><strong>Adultos - innovación, organización, humanización y educación médica.</strong></li>
                  <li><strong>Cuidado Crítico Pediátrico</strong></li>
                  <li><strong>Enfermería</strong></li>
                  <li><strong>Terapia</strong></li>
                </ol>
              </li>
          </ul>
          <p>Para solucionar cualquier duda o si requiere información adicional comuníquese con el Comité Organizador del congreso a través del correo electrónico <a href="mailto:abstract@amci.org.co" target="_blank" rel="noreferrer">abstract@amci.org.co</a></p>
          <Container fluid className=' p-0'>
            <Row className='m-0'>
              <Col xs={12} className='d-flex justify-content-end  p-0'>
                <Button className="btn-custom " onClick={hangleDescriptionTrabajosLibres}><p>Siguiente <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
              </Col>
            </Row>
          </Container>
      </div>
    </>
  )
}
