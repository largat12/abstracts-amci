import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const ListInvestigacionesAsignadas = ({dataInvestigaciones, handleViewInvestigation, userLogin}) => {
  
  
  if(dataInvestigaciones === null){
    return (
      <Container fluid className='container-loading'>
          <Row>
              <Col xs={12}>
                  <div className='loading d-flex'>
                     No tiene investigaciones asignadas
                  </div>
              </Col>
          </Row>
      </Container>
    )
  }
  else if(dataInvestigaciones.length === 0){
    return <></>
  }
  
  
  return (
    <div className='table-content'>
            <Container fluid className='thead p-0 pt-2 pb-2'>
                <Row className='m-0'>
                    <Col className='p-0 m-0 border-right' style={{width:'40px', flex:'0 0 40px'}}>

                    </Col>
                    <Col className='p-0 m-0 border-right' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                        <Container fluid className='p-0 m-0'>
                            <Row className='m-0'>
                                <Col xs={1} className='border-right'>ID</Col>
                                <Col xs={3} className='border-right'>Título</Col>
                                <Col xs={userLogin.perfil !== 'Jurado' ? 3 : 5} className='border-right'>Resumen</Col>
                                <Col xs={1} className='border-right'>Puntos</Col>
                                {userLogin.perfil !== 'Jurado' ? <Col xs={2} className='border-right'>Jurado(s)</Col> : <></>}
                                <Col xs={1} className='border-right'>Estado</Col>
                                <Col xs={1} className='border-right'>Acciones</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='tbody p-0'>
                {dataInvestigaciones.map((item) => {
                    return (
                        <Row key={item.id} className='m-0 p-0 pt-2 pb-2'>
                            <Col className='p-0 m-0 d-flex justify-content-center align-items-center' style={{width:'40px', flex:'0 0 40px'}}>
                                
                            </Col>
                            <Col className='p-0 m-0' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                                <Container fluid className='p-0 m-0'>
                                    <Row className='m-0'>
                                        <Col xs={1}><p className='cortar-texto id'>{item.id}</p></Col>
                                        <Col xs={3}><p className='cortar-texto titulo'>{item.titulo}</p></Col>
                                        <Col xs={userLogin.perfil !== 'Jurado' ? 3 : 5}><p className='cortar-texto resumen'>{item.resumen.replace( /(<([^>]+)>)/ig, '')}</p></Col>
                                        <Col xs={1}><p className='cortar-texto total-puntos'>{item.totalPuntuacion}</p></Col>
                                        {userLogin.perfil !== 'Jurado' ?
                                        <Col xs={2}>
                                            <p className='cortar-texto jurados'>
                                            {
                                                item.jurados.length === 0 
                                                ? '' 
                                                : item.jurados.map((item)=>{
                                                    return <span key={item.id}>{item.nombre} {item.apellido} ({item.tipoEvaluacion})</span>
                                                })
                                            }
                                            </p>
                                        </Col>
                                        :
                                        <></>}
                                        <Col xs={1}><p className='estado'><span className={item.status[0].name.toLowerCase()}>{item.status[0].name}</span></p></Col>
                                        <Col xs={1} className='justify-content-end d-flex align-content-center'><Button onClick={(e) => {e.preventDefault();handleViewInvestigation(item.id)}} className='btn-custom'>Detalles</Button></Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </div>
  )
}
