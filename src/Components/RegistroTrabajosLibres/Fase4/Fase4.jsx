import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../../context/ContextAppInvesitaciones'
import { statusInvestigacion } from '../../../firebase/helpers/statusInvestigacion'
import { subirArchivos } from '../../../firebase/helpers/subirArchivos'
import { subirInvestigacion } from '../../../firebase/helpers/subirInvestigacion'
import { subirUsersInvestigadores } from '../../../firebase/helpers/subirUsersInvestigadores'
import { updateUsersInvestidacion } from '../../../firebase/helpers/updateUsersInvestidacion'
import { InformacionFinal } from './Helpers/InformacionFinal'

export const Fase4 = () => {
  const {dataContextAppInvesitaciones, setDataContextAppInvesitaciones, infoTrabajosLibres} = useContext(ContextAppInvesitaciones)
  const [textVariable, setTextVariable] = useState('Terminar')


  const hangleAtrasPage = () =>{
    setDataContextAppInvesitaciones({
      ...dataContextAppInvesitaciones,
      seccionState: 3
    })
  }
  const enviarTrabajoLibre = () => {
    setTextVariable('Enviando...')
    let urlDocumento = null
    let response = new Promise( async (resolve, reject)=>{
      /*--------------------------------------------*/
      /*---------- subir trabajo libre ------------*/
      /*--------------------------------------------*/
      if(infoTrabajosLibres.documento !== null){
        urlDocumento = await subirArchivos(infoTrabajosLibres.documento).then((response) => {
          return response
        })
      }
      /*--------------------------------------------*/
      /*--------- Categorias de trabajos -----------*/
      /*--------------------------------------------*/
      let status =  await statusInvestigacion('name', 'Inscrito')
      /*--------------------------------------------*/
      /*------------ añadir usuarios ---------------*/
      /*--------------------------------------------*/
      let idUsers = await subirUsersInvestigadores(dataContextAppInvesitaciones.usersRegister)
      /*--------------------------------------------*/
      /*------------ subir documento ---------------*/
      /*--------------------------------------------*/
      let idInvestigacion = await subirInvestigacion(infoTrabajosLibres, urlDocumento, idUsers, status)
      /*--------------------------------------------*/
      /*--------- subir documento a usuarios -------*/
      /*--------------------------------------------*/
      let usersUpdate = await updateUsersInvestidacion(idUsers, idInvestigacion)
      resolve({idUsers:idUsers,idInvestigacion:idInvestigacion, usersUpdate:usersUpdate})
    })
    response.then((response)=>{
      setDataContextAppInvesitaciones({
        ...dataContextAppInvesitaciones,
        completeRegistro:response
      })
    })
  }
  

  return (
    <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                <div className='description-formulario-registro'>
                  <h5 className='text-center'><strong>INSTRUCCIONES PARA LA SECCIÓN 4</strong></h5>
                  <ul>
                       <li>Por favor verifique que todos los datos suministrados estén correctos antes de terminar el proceso. Si desea realizar un cambio, haga clic en el botón <strong>ANTERIOR</strong> en la parte inferior izquierda. </li>
                      <li>Haciendo clic en el botón <strong>TERMINAR</strong> en la parte inferior derecha de esta página, usted confirmará el registro de su resumen de trabajo libre. Recibirá en la confirmación de registro una copia de este resumen vía correo electrónico.</li>
                  </ul>
                </div> 
                <InformacionFinal dataContextAppInvesitaciones={dataContextAppInvesitaciones} infoTrabajosLibres={infoTrabajosLibres}/>   
                <Container fluid className=' p-0'>
                  <Row className='m-0'>
                  <Col xs={6} className='d-flex justify-content-start p-0'>
                      <Button className="btn-custom " onClick={hangleAtrasPage}><p><FontAwesomeIcon icon={ faArrowLeft}/> Anterior</p></Button>
                  </Col>
                  <Col xs={6} className='d-flex justify-content-end  p-0'>
                      <Button className="btn-custom" onClick={enviarTrabajoLibre}><p>{textVariable} <FontAwesomeIcon icon={ faArrowRight}/></p></Button>
                  </Col>
                  </Row>
              </Container>
                </Col>
            </Row>
        </Container>
  )
}

