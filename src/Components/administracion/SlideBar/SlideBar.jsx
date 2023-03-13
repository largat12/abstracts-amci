import './css/sliderbar.css'
import React from 'react'
import { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ContextAppAdministracion } from '../../../context/ContextAppAdministracion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu/Menu'

export const SlideBar = () => {

  const { userLogin, cerrarSesionFun} = useContext(ContextAppAdministracion)


  return (
    <Container fluid className='slidebar p-4'>
        <Row>
          <Col xs={12} className='content-slider'>
              <div className='menu'>
                <img src={process.env.PUBLIC_URL+'/img/logo_AMCI_blanco.svg'} alt='logo-AMCI' className='logoAMCI'/>
                <p className='title-name mb-1 mt-4'>¡Hola {userLogin.nombre} {userLogin.apellido}!</p>
                <Menu />

              </div>
              <div className='sing-in'>
                <Button variant='light' className='cerrar-sesion w-100' onClick={cerrarSesionFun}>Cerrar Sesión <FontAwesomeIcon icon={faSignIn}/></Button>
              </div>
            </Col>
        </Row>
    </Container>
  )
}
