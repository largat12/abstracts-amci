import React, { useContext, useState } from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { FormularioInvestigadores } from './helpers/FormularioInvestigadores'
import { ContextApp } from '../../context/contextApp'
import { MapInvestigadores } from './helpers/MapInvestigadores'

export const Fase2 = () => {
    const {dataContextApp, setDataContextApp} = useContext(ContextApp)
    const [userUpdateRegister, setUserUpdateRegister] = useState(null)


    const hangleAtrasPage = () =>{
        setDataContextApp({
          ...dataContextApp,
          seccionState: 1
        })
    }

    const consultarRegisterUser = (idUser) => {
        let users = [...dataContextApp.usersRegister]
        let user = users.find(item => item.numeroDeIdentificacion === idUser)
        setUserUpdateRegister(user)
        
    }

    const hangleSiguienteFace = () => {
        
    }



    return (
        <Container fluid className='formulario-registro'>
                <Row className='m-0'>
                    <Col xs={12}>
            
                        <div className='description-formulario-registro'>
                            <h5 className='text-center'><strong>INSTRUCCIONES PARA LA SECCIÓN 2</strong></h5>
                            <p>En esta sección, confirme los datos de los autores y coautores del resumen. Los campos señalados con asterisco <strong style={{color:"red"}}>(*)</strong> son <strong>INDISPENSABLES</strong> para continuar.</p>
                            <ul>
                                <li>Ingrese todos los datos solicitados sin abreviaturas y en <strong>mayúscula sostenida</strong> excepto el correo electrónico.</li>
                                <li>Marque el cuadro de verificación de <strong>"Autor-Presentador"</strong> si los datos ingresados corresponden al autor designado para la presentación del trabajo en el evento. Sólo puede seleccionar un Autor-Presentador.</li>
                                <li>Luego de ingresar cada coautor debe presionar el botón <strong>Guardar</strong> para que quede registrado dentro del cuadro <strong>"Lista de Autores".</strong></li>
                                <li>Confirme la veracidad de los datos y presione el botón "Siguiente".</li>
                            </ul>
                        </div>
                        <FormularioInvestigadores userUpdateRegister={userUpdateRegister} setUserUpdateRegister={setUserUpdateRegister}/>
                        <h5 className='text-center'><strong>LISTA DE INVESTIGADORES</strong></h5>
                        <MapInvestigadores consultarRegisterUser={consultarRegisterUser}/>    


                        <Container fluid className=' p-0'>
                            <Row className='m-0'>
                            <Col xs={6} className='d-flex justify-content-start p-0'>
                                <Button className="btn-custom " onClick={hangleAtrasPage}><p><FontAwesomeIcon icon={ faArrowLeft}/> Anterior</p></Button>
                            </Col>
                            <Col xs={6} className='d-flex justify-content-end  p-0'>
                                <Button className="btn-custom " onClick={hangleSiguienteFace}><p>Siguiente <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
                            </Col>
                            </Row>
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
    )
}

