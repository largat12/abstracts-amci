import { Markup } from 'interweave'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const InformacionFinal = ({dataContextApp, infoTrabajosLibres}) => {

    const [usuarioContacto, setUsuarioContacto] = useState(null)
    useEffect(() => {
      let users = [...dataContextApp.usersRegister]
      let user = users.find((item) => {
        return item.presentador === true
      })
      setUsuarioContacto(user)
    }, [dataContextApp])
    

    return (
        <Container >
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    {usuarioContacto !== null 
                    ?
                    <>
                        <h5 className='text-left'>Persona de contacto</h5> 
                        <p className='mb-0'>
                        <strong>Titulo:</strong> {usuarioContacto.titulo}<br />
                        <strong>Nombre:</strong> {usuarioContacto.nombre}<br />
                        <strong>Apellido:</strong> {usuarioContacto.apellido}<br />
                        <strong>Email:</strong> {usuarioContacto.email}<br />
                        <strong>Tipo de identificación:</strong> {usuarioContacto.tipoDeIdentificacion}<br />
                        <strong>Número de identificación:</strong> {usuarioContacto.numeroDeIdentificacion}<br />
                        <strong>Organización / Universidad:</strong> {usuarioContacto.organizacionUniversidad}<br />
                        <strong>Cargo:</strong> {usuarioContacto.cargo}<br />
                        <strong>País:</strong> {usuarioContacto.pais}<br />
                        <strong>Departamento / Provincia / Estado:</strong> {usuarioContacto.departamento}<br />
                        <strong>Ciudad:</strong> {usuarioContacto.ciudad}<br />
                        <strong>Teléfono fijo:</strong> {usuarioContacto.ciudad}<br />
                        <strong>Teléfono celular:</strong> {usuarioContacto.ciudad}<br />
                        <strong>Miembro AMCI:</strong> {usuarioContacto.ciudad}
                        {usuarioContacto.presentador ? <><br /><strong>Presentador:</strong>si</>: ''}
                        </p>
                    </>
                    :''}
                </Col>
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h5>Investigación</h5>
                    <p><strong>CategorÍa de la investigación</strong><br/>{infoTrabajosLibres.categoria}</p>   
                    <p><strong>Título de la investigación</strong><br/>{infoTrabajosLibres.titulo}</p> 
                    <p><strong>Resumen de la investigación</strong><br/><Markup content={infoTrabajosLibres.resumen}/></p>
                    <p><strong>Relevancia de la investigación</strong><br/><Markup content={infoTrabajosLibres.relevancia}/></p>
                    <p><strong>Relevancia de la investigación</strong><br/><Markup content={infoTrabajosLibres.relevancia}/></p>  
                    <p><strong>Palabras Clave</strong><br/>{infoTrabajosLibres.palabrasClave1 +", "+ infoTrabajosLibres.palabrasClave2 +", "+ infoTrabajosLibres.palabrasClave3 + (infoTrabajosLibres.palabrasClave4 !== undefined ? ", "+ infoTrabajosLibres.palabrasClave4 :'') + (infoTrabajosLibres.palabrasClave5 !== undefined ? ", "+ infoTrabajosLibres.palabrasClave5 :'') }</p>    
                </Col>            
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h5>Investigadores</h5>
                    <p>
                    {
                        dataContextApp.usersRegister.map((item) => {
                            return <>{item.titulo} {item.name} {item.apellido} {item.presentador ? 'PRESENTADOR' : ''}</>
                        })
                    }
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
