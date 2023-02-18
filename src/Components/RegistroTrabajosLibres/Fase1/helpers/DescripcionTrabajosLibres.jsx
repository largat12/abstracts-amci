import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../../../context/ContextAppInvesitaciones'

export const DescripcionTrabajosLibres = () => {
  const {dataContextAppInvesitaciones, setDataContextAppInvesitaciones} = useContext(ContextAppInvesitaciones)


  const hangleDescriptionTrabajosLibres = (e) => {
    e.preventDefault();
    let data = {...dataContextAppInvesitaciones}
    data.formRegister.activeFormFase1 = true
    setDataContextAppInvesitaciones({
      ...data
    })
  }

  return (
    <>
      <h1 className='text-center' style={{color:"var(--bg-primary)"}}>CONVOCATORIA DE RESÚMENES <br />HABILITADA HASTA EL 31 DE MARZO DE 2023</h1>
      <div className='description-formulario-registro'>
          <p>Bienvenido al sistema en línea para la convocatoria de trabajos libres del Congreso Nacional AMCI 2023, la inscripción virtual de resúmenes estará disponible entre el 18 de febrero al 31 de marzo de 2023. <br/>
          Este sistema consta de cuatro secciones:</p>
          <ul>
              <li><strong>Sección 1:</strong> Información del autor de contacto.</li>
              <li><strong>Sección 2:</strong> Información de investigadores.</li>
              <li><strong>Sección 3:</strong> Información del resumen.</li>
              <li><strong>Sección 4:</strong> Confirmación de envío.</li>
          </ul>
          <p><strong>Orientaciones para la inscripción de resúmenes:</strong></p>
          <ul>
              <li>Diligencie una sola vez la información de su resumen en el sistema en línea.</li>
              <li>No se aceptarán trabajos preliminares o en ejecución, solo estudios finalizados.</li>
              <li>No se aceptarán casos clínicos.</li>
              <li>Por lo menos uno de los autores del resumen sometido debe ser miembro de la AMCI para poder presentar en el congreso.</li>
              <li>En caso de modificar al autor de presentación, deberá notificar el cambio al Comité Organizador previo al evento.</li>
              <li>Cada resumen podrá participar en un eje temático, usted podrá seleccionar el que considere más afín a la temática de la investigación entre los siguientes
                
                
                <ol>
                  <li><strong>Adultos – Respiratorio:</strong> diagnóstico, monitoreo, soporte y terapéutica, oxigenoterapia, ventilación mecánica.</li>
                  <li><strong>Adultos – Cardiovascular:</strong> diagnóstico, monitoreo, soporte, terapéutica, perfusión, asistencia circulatoria mecánica.</li>
                  <li><strong>Adultos - Neurocrítico:</strong> diagnóstico, monitoreo, soporte, terapéutica, pronóstico.</li>
                  <li><strong>Adultos - Sepsis:</strong> diagnóstico, terapéutica, avances.</li>
                  <li><strong>Adultos - General:</strong> condiciones de alto riesgo obstétrico, metabólicas y soporte nutricional, autoinmunidad, microangiopatías entre otras.</li>
                  <li><strong>Adultos - Innovación, organización, humanización y educación médica.</strong></li>
                  <li><strong>Cuidado Crítico Pediátrico</strong></li>
                  <li><strong>Enfermería</strong></li>
                  <li><strong>Terapia</strong></li>
                  <li><strong>Trabajos de grado de especialización de medicina crítica:</strong> aplica para todos los profesionales de la salud de medicina, enfermería y terapia que hayan finalizado su formación e investigación en los dos años previo al evento.</li>
                </ol>
              </li>
          </ul>
          <p>Para solucionar cualquier duda o si requiere información adicional comuníquese con el Comité Organizador del congreso a través del correo electrónico <a href="mailto:administracion@amci.org.co" target="_blank" rel="noreferrer">administracion@amci.org.co</a></p>
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
