import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion'
import { FiltersInvestigaciones } from './FiltersInvestigaciones/FiltersInvestigaciones'
import { ListInvestigaciones } from './ListInvestigaciones/ListInvestigaciones'

export const DashboardInvestigaciones = () => {
    const {buscarInvestigaciones, listIntestigaciones} = useContext(ContextAppAdministracion)

    useEffect(()=>{
        buscarInvestigaciones()
    },[])  


    return (
        <Container fluid className='h-100 p-4'>
            <Row>
                <Col xs={12}>
                    <Container fluid className='m-0 p-0'>
                        <Row className='m-0 p-0'>
                            <Col xs={6} className='p-0'><h1>Investigaciones</h1> </Col>
                            <Col xs={6} className='p-0 justify-content-end d-flex'><Button className='btn-custom' onClick={buscarInvestigaciones}>Actualizar investigaciones</Button></Col>
                        </Row>
                    </Container>
                    <FiltersInvestigaciones />
                    <ListInvestigaciones listIntestigaciones={listIntestigaciones}/>
                </Col>
            </Row>
        </Container>
    )
}
