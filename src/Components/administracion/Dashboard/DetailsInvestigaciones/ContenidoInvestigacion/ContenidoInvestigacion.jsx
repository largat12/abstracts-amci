import { Markup } from 'interweave'
import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { DasnboardEvaluaciones } from '../../DashboardEvaluaciones/DasnboardEvaluaciones'
import { Loading } from '../../Loading/Loading'

export const ContenidoInvestigacion = ({contenidoInvestigacion, userLogin}) => {
  if(contenidoInvestigacion === null) return(<Loading />)
  return (
    <Container fluid className='p-0'>
      <Row className='m-0'>
        <Col xs={9} className='p-0'>
          <div className='contenido pt-4'>
            <Container className='m-0 p-0'>
              <Row className='m-0'>
                <Col xs={4} className='p-0'>
                  <p><strong>Categoría:</strong><br />{contenidoInvestigacion.categoria}</p>
                </Col>
                <Col xs={2}>
                  <p><strong>Permiso:</strong><br />{contenidoInvestigacion.publicacion}</p>
                </Col>
                <Col xs={2} className='p-0'>
                  <p><strong>Estado:</strong><br />{contenidoInvestigacion.status[0].name}</p>
                </Col>
                <Col xs={2} className='p-0'>
                  <p><strong>Fecha:</strong><br />{contenidoInvestigacion.date.toDate().toLocaleDateString('es-CO', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"}) }</p>
                </Col>
                <Col xs={2} className='p-0'>
                  <p><strong>Modalidad:</strong><br />{contenidoInvestigacion.modalidad !==  undefined ? contenidoInvestigacion.modalidad[0].name : 'SIN DEFINIR'}</p>
                </Col>
              </Row>
              
              {contenidoInvestigacion.status[0].comentario !== undefined 
                ? 
                <Row className='m-0'>
                  <Col xs={12} className='p-0'>
                    <p><strong>Comentario de la modalidad:</strong><br />{contenidoInvestigacion.status[0].comentario}</p>
                  </Col>
                </Row>
                : 
                ''
              }
                
            </Container>
            <h3 className='titulos'>Título de la investigación</h3>
            <p>{contenidoInvestigacion.titulo}</p>
            <hr />
            <h3 className='Resumen'>Resumen de la investigación</h3>
            <Markup content={contenidoInvestigacion.resumen}></Markup>
            <hr />
            <h3 className='Resumen'>Relevancia de la investigación</h3>
            <p>{contenidoInvestigacion.relevancia}</p>
            <hr />
            <h3 className='Resumen'>Palabras clave</h3>
            <p>{contenidoInvestigacion.palabrasClaves.map((palabra, index)=>{

                if(index + 1 === contenidoInvestigacion.palabrasClaves.length){
                  return palabra
                }
                return palabra+', '

                })}
            </p>
          </div>
          <div className='contenido-usuarios mt-5 mb-5'>
            <h3 className='titulos'>Investigadores</h3>
            <Accordion>
                {contenidoInvestigacion.users.map((user)=>{
                  return (<Accordion.Item key={user.id} eventKey={user.id}>
                            <Accordion.Header>
                              {user.nombre} {user.apellido} {user.presentador ? '(PRESENTADOR)' : ''}
                            </Accordion.Header>
                            <Accordion.Body>
                              <Container fluid className='m-0 p-0'>
                                <Row className='m-0'>
                                  <Col xs={12} className='p-0'>
                                    <h5>Nombre Completo:</h5>
                                    <p>{user.titulo} {user.nombre} {user.apellido}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={6} className='p-0'>
                                    <h5>Email:</h5>
                                    <p>{user.email}</p>
                                  </Col>
                                  <Col xs={6} className='p-0'>
                                    <h5>Género:</h5>
                                    <p>{user.genero}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={6} className='p-0'>
                                    <h5>Tipo de identificación:</h5>
                                    <p>{user.tipoDeIdentificacion}</p>
                                  </Col>
                                  <Col xs={6} className='p-0'>
                                    <h5>Número de identificación:</h5>
                                    <p>{user.numeroDeIdentificacion}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={6} className='p-0'>
                                    <h5>Organización / Universidad:</h5>
                                    <p>{user.organizacionUniversidad}</p>
                                  </Col>
                                  <Col xs={6} className='p-0'>
                                    <h5>Cargo:</h5>
                                    <p>{user.cargo}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={3} className='p-0'>
                                    <h5>País:</h5>
                                    <p>{user.pais}</p>
                                  </Col>
                                  <Col xs={5} className='p-0'>
                                    <h5>Departamento / Provincia:</h5>
                                    <p>{user.departamento}</p>
                                  </Col>
                                  <Col xs={4} className='p-0'>
                                    <h5>Ciudad:</h5>
                                    <p>{user.ciudad}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={4} className='p-0'>
                                    <h5>Dirección:</h5>
                                    <p>{user.direccion}</p>
                                  </Col>
                                  <Col xs={4} className='p-0'>
                                    <h5>Teléfono fijo:</h5>
                                    <p>{user.telefonoFijo}</p>
                                  </Col>
                                  <Col xs={4} className='p-0'>
                                    <h5>Teléfono celular:</h5>
                                    <p>{user.telefonoCelular}</p>
                                  </Col>
                                </Row>
                                <hr className='mt-0'/>
                                <Row className='m-0'>
                                  <Col xs={12} className='p-0'>
                                    <h5>Miembro AMCI:</h5>
                                    <p>{user.miembroAMCI}</p>
                                  </Col>
                                </Row>
                              </Container>
                            </Accordion.Body>
                          </Accordion.Item>)
                })}
            </Accordion>
          </div>
        </Col>
        <Col xs={3} className='p-0'>
          <div className='puntuacion'>
              <div className='total'>
                  <p className='titlePuntos'>Total Puntos</p>
                  <p className='puntaje'>{contenidoInvestigacion.totalPuntuacion}</p>
                  <p className='texto'>{contenidoInvestigacion.totalPuntuacion === 1 ? 'punto' : 'puntos'}</p>
              </div>
              {
                contenidoInvestigacion.jurados.length !== 0 && userLogin.perfil !== "Jurado"
                ? 
                <div className='evaluadores'>
                    <h4>Evaluadores:</h4>
                    {
                      contenidoInvestigacion.jurados.map((element => {
                        return <p key={element.id}>{element.nombre} {element.apellido} ({element.tipoEvaluacion})</p>
                      }))
                    }
                    </div>
                : <></>
              }

              {
                contenidoInvestigacion.status[0].value !== 3 && contenidoInvestigacion.status[0].value !== 5 ? <DasnboardEvaluaciones contenidoInvestigacion={contenidoInvestigacion} /> : ''
              }
              
          </div>
        </Col>
      </Row>
    </Container>
  )
}
