import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../../context/ContextAppAdministracion'
import { FormulariosEvaluacionesMetodologico } from './Formularios/FormulariosEvaluacionesMetodologico'

export const EvaluacionesMetodologico = ({contenidoInvestigacion}) => {
  const {cambioDashboard, userLogin} = useContext(ContextAppAdministracion)

  const handleDevolverse = () => {
    cambioDashboard('detallesInvestigacion',{tipo:"investigacion", id:contenidoInvestigacion.id})
  }

  

  return (
    <Container fluid className='h-100 p-4 detalles-investigacion'>
            <Row>
                <Col xs={12}>
                    <Container fluid className='m-0 p-0'>
                        <Row className='m-0 p-0'>
                            <Col xs={12} className='p-0 d-flex align-items-center align-content-center'>
                              <Button onClick={handleDevolverse} className='btn-custom' style={{'marginRight':'10px'}}><p><FontAwesomeIcon icon={faArrowLeft}/>Atras</p></Button>
                              <h1 className='m-0'>Evaluación Metodológica</h1>
                            </Col>
                            
                        </Row>
                    </Container>
                    <FormulariosEvaluacionesMetodologico contenidoInvestigacion={contenidoInvestigacion} userLogin={userLogin} />
                  </Col>
            </Row>
        </Container>
  )
}
