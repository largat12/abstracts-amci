import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { ContextApp } from '../../context/contextApp'
import { InformacionFinal } from './Helpers/InformacionFinal'

export const Fase4 = () => {
  const {dataContextApp, setDataContextApp, infoTrabajosLibres} = useContext(ContextApp)

  const hangleAtrasPage = () =>{
    setDataContextApp({
      ...dataContextApp,
      seccionState: 3
    })
  }
  const enviarTrabajoLibre = () => {

  }
  

  return (
    <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                <div className='description-formulario-registro'>
                  <h5 className='text-center'><strong>INSTRUCCIONES PARA LA SECCIÓN 4</strong></h5>
                  <ul>
                       <li>Por favor verifique que todos los datos suministrados estén correctos antes de terminar el proceso. Si desea realizar un cambio, haga clic en el botón <strong>ANTERIOR</strong> en la parte inferior izquierda. </li>
                      <li>Haciendo clic en el botón <strong>TERMINAR</strong> en la parte inferior derecha de esta página, usted confirmará el registro de su resumen de trabajo libre. Recibirá en la confirmación de registro una copia de este resumen vía correo electrónico.</li>
                  </ul>
                </div> 
                <InformacionFinal dataContextApp={dataContextApp} infoTrabajosLibres={infoTrabajosLibres}/>   
                <Container fluid className=' p-0'>
                  <Row className='m-0'>
                  <Col xs={6} className='d-flex justify-content-start p-0'>
                      <Button className="btn-custom " onClick={hangleAtrasPage}><p><FontAwesomeIcon icon={ faArrowLeft}/> Anterior</p></Button>
                  </Col>
                  <Col xs={6} className='d-flex justify-content-end  p-0'>
                      <Button className="btn-custom" onClick={enviarTrabajoLibre}><p>Terminar <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
                  </Col>
                  </Row>
              </Container>
                </Col>
            </Row>
        </Container>
  )
}

