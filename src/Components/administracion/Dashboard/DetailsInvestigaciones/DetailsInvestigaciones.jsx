import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useContext} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { ContenidoInvestigacion } from './ContenidoInvestigacion/ContenidoInvestigacion'

export const DetailsInvestigaciones = () => {
    const {cambioDashboard, pageDashboard, buscarContenidoInvestigacionCompleta} = useContext(ContextAppAdministracion)
    const [contenidoInvestigacion, setContenidoInvestigacion] = useState(null)

    useEffect(()=>{
        buscarContenidoInvestigacionCompleta().then((response) => {
            setContenidoInvestigacion(response)
        })
        
    },[])
    const handleDevolverse = () => {
        let page  = pageDashboard.item.tipo === 'investigacion' ? 'investigaciones' : 'investigadores'
        cambioDashboard(page)
    }
    return (
        <Container fluid className='h-100 p-4 detalles-investigacion'>
            <Row>
                <Col xs={12}>
                    <Container fluid className='m-0 p-0'>
                        <Row className='m-0 p-0'>
                            <Col xs={12} className='p-0 d-flex align-items-center align-content-center'>
                              <Button onClick={handleDevolverse} className='btn-custom' style={{'marginRight':'10px'}}><p><FontAwesomeIcon icon={faArrowLeft}/>Atras</p></Button>
                              {pageDashboard.item.tipo === 'investigacion' ? <h1 className='m-0'>Detalles de la investigación</h1> : <h1 className='m-0'>Detalles de la usuario</h1>}
                            </Col>
                            
                        </Row>
                    </Container>
                    <ContenidoInvestigacion contenidoInvestigacion={contenidoInvestigacion}/>
                  </Col>
            </Row>
        </Container>
    )
}
