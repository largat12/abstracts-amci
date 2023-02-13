import './css/login.css'
import React, { useContext } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { FormularioLogin } from './helpers/FormularioLogin'
import { LogoAMCI } from '../helpers/LogoAMCI'
import { ContextAppAdministracion } from '../context/ContextAppAdministracion'
import { Navigate } from 'react-router-dom'

export const Login = () => {

  const {userLogin} = useContext(ContextAppAdministracion)

  if(userLogin !== null && userLogin !== '{}'){
    return <Navigate to='/administracion' />
  }

  return (
    <Container fluid className='contenedor-app-registro bg-lines container-login'>
      <Row>
        <Col xs={12}>
          <Container className='form-login'>
            <Row>
              <Col xs={12} className='d-flex justify-center align-center' style={{"flex-direction":"column"}}>
                  <LogoAMCI />
                  <h1 className='mt-4 '>Iniciar Sesión</h1>
                  <FormularioLogin />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
