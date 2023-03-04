import React, { useContext } from 'react'
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CSVDownload  } from 'react-csv';
import { ContextAppAdministracion } from '../../../../context/ContextAppAdministracion';

export const DashboardExportarData = () => {
  const [data, setData] = useState([])
  const { buscarExportarExcel } = useContext(ContextAppAdministracion)

 

  const handleExportData = (type) => {
    buscarExportarExcel(type).then((response) => {
      
      setData([...response])
      
      setTimeout(()=>{
        setData([])
      },100)
    })
  }
  return (
    <Container fluid className='h-100 p-4'>
        <Row>
            <Col xs={12}>
                <Container fluid className='m-0 p-0'>
                    <Row className='m-0 p-0'>
                        <Col xs={6} className='p-0'><h1>Exportar Data</h1></Col>
                        <Col xs={6} className='p-0 justify-content-end d-flex'>
                          <Button onClick={()=>{handleExportData('investigaciones')}} className='btn-custom'>Exportar Invesigaciones</Button>
                          <Button onClick={()=>{handleExportData('investigadores')}} className='btn-custom' style={{marginLeft:"10px"}}>Exportar Investigadores</Button>
                          {data.length !== 0 ? <CSVDownload data={data} target="_blank" separator={";"}/> : ''}
                        </Col>
                    </Row>
                </Container>
                
            </Col>
        </Row>
    </Container>
  )
}
