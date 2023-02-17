import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../../../../context/ContextAppInvesitaciones';

export const FormularioInscripcion = () => {
  const {dataContextAppInvesitaciones, setDataContextAppInvesitaciones, userRegisterMain, setUserRegisterMain} = useContext(ContextAppInvesitaciones)
  const [validated, setValidated] = useState(false);

  const changeField = (field, value) => {
    setUserRegisterMain({
      ...userRegisterMain,
      [field]:value.toUpperCase()
    })
    if(!!validated[field]){
      setValidated({
        ...validated,
        [field]:null
      })
    }
  }
  const validateForm = () => {
    const {titulo, genero, nombre, apellido, email, tipoDeIdentificacion, numeroDeIdentificacion, organizacionUniversidad, cargo, direccion, pais, departamento, ciudad, telefonoFijo, telefonoCelular, miembroAMCI} = userRegisterMain
    const newErros = {}
    
    if(!titulo                  || titulo === ''                      || titulo === undefined) newErros.titulo = 'TÍtulo obligatorio' 
    if(!genero                  || genero === ''                      || genero === undefined) newErros.genero = 'Género obligatorio' 
    if(!nombre                  || nombre === ''                      || nombre === undefined) newErros.nombre = 'Nombre (s) obligatorio' 
    if(!apellido                || apellido === ''                    || apellido === undefined) newErros.apellido = 'Apellido (s) obligatorio'
    if(!email                   || email === ''                       || email === undefined) newErros.email = 'Email obligatorio' 
    else if(!/\S+@\S+\.\S+/.test(email)) newErros.email = 'Email no valido'
    if(!tipoDeIdentificacion    || tipoDeIdentificacion === ''        || tipoDeIdentificacion === undefined) newErros.tipoDeIdentificacion = 'Tipo de identificación obligatorio'
    if(!numeroDeIdentificacion  || numeroDeIdentificacion === ''      || numeroDeIdentificacion === undefined) newErros.numeroDeIdentificacion = 'Número de identificación' 
    if(!organizacionUniversidad || organizacionUniversidad === ''     || organizacionUniversidad === undefined) newErros.organizacionUniversidad = 'Organización / Universidad obligatorio' 
    if(!cargo                   || cargo === ''                       || cargo === undefined) newErros.cargo = 'Cargo obligatorio'
    if(!direccion               || direccion === ''                   || direccion === undefined) newErros.direccion = 'Dirección obligatorio'
    if(!pais                    || pais === ''                        || pais === undefined) newErros.pais = 'País obligatorio'
    if(!departamento            || departamento === ''                || departamento === undefined) newErros.departamento = 'Departamento obligatorio'
    if(!ciudad                  || ciudad === ''                      || ciudad === undefined) newErros.ciudad = 'Ciudad obligatorio'
    if(!telefonoFijo            || telefonoFijo === ''                || telefonoFijo === undefined) newErros.telefonoFijo = 'Teléfono fijo obligatorio'
    if(!telefonoCelular         || telefonoCelular === ''             || telefonoCelular === undefined) newErros.telefonoCelular = 'Teléfono celular obligatorio'

    
   


    if(!miembroAMCI || miembroAMCI === '' || miembroAMCI === undefined) newErros.miembroAMCI = 'Mimebro AMCI obligatorio' 

    return newErros
  }
  const hangleAtrasPage = (e) => {
    e.preventDefault();
    let data = {...dataContextAppInvesitaciones}
    data.formRegister.activeFormFase1 = false
    setDataContextAppInvesitaciones({
      ...data
    })
  }
  const hangleSiguienteFace = (e) => {
    e.preventDefault()
    const formErrors = validateForm();
    if(Object.keys(formErrors).length > 0){
      setValidated(formErrors)
    }
    else{
      setUserRegisterMain({
        ...userRegisterMain,
        presentador: true  
      })

      let users = [...dataContextAppInvesitaciones.usersRegister]
      let user = {...userRegisterMain,presentador: true}
      if(users.length === 0){
          users.push(user)
          let data = {...dataContextAppInvesitaciones, seccionState:dataContextAppInvesitaciones.seccionState + 1 > 4 ? dataContextAppInvesitaciones.seccionState : dataContextAppInvesitaciones.seccionState + 1, usersRegister:users}
          setDataContextAppInvesitaciones(data)
      }
      else{
          const respuesta = []
          users.forEach( (item) => {
              return item.presentador = false
          })
          let response = users.some((item) => {
              return item.numeroDeIdentificacion === user.numeroDeIdentificacion
          })
          if(response){
              users.forEach((item) => {
                  if(item.numeroDeIdentificacion === user.numeroDeIdentificacion){
                      respuesta.push({...user})
                  }
                  else{
                      respuesta.push({...item})
                  }
              })
          }
          else{
              respuesta.push({...user}, ...users)
          }
      
          let data = {...dataContextAppInvesitaciones, seccionState:dataContextAppInvesitaciones.seccionState + 1 > 4 ? dataContextAppInvesitaciones.seccionState : dataContextAppInvesitaciones.seccionState + 1, usersRegister:respuesta}
          setDataContextAppInvesitaciones(data)
      }
     
      
    }
  }
  return (
    <Form onSubmit={hangleSiguienteFace}>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingTitulo' label="TÍTULO (Dr. / Enfro. / Tr. / Ft. / Lic.)" className='mb-3'>
                  <Form.Control type='text' placeholder='TÍTULO' name='titulo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.titulo === undefined ? "" : userRegisterMain.titulo} isInvalid={!!validated.titulo}/>
                  <Form.Control.Feedback  type="invalid">
                    {validated.titulo}
                  </Form.Control.Feedback>
              </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingNombre' label="NOMBRE (S)" className='mb-3'>
                <Form.Control type='text' placeholder='NOMBRE (S)' name='nombre' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.nombre === undefined ? "" : userRegisterMain.nombre} isInvalid={!!validated.nombre}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.nombre}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingApellido' label="APELLIDO (S)" className='mb-3'>
                <Form.Control type='email' placeholder='APELLIDO (S)' name='apellido' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.apellido === undefined ? "" : userRegisterMain.apellido} isInvalid={!!validated.apellido}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.apellido}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>    
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingEmail' label="EMAIL" className='mb-3'>
                <Form.Control type='email' placeholder='EMAIL' name='email' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.email === undefined ? "" : userRegisterMain.email} isInvalid={!!validated.email}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.email}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingGenero' label="GÉNERO" className='mb-3'>
                <Form.Select size="sm" name='genero' placeholder='GÉNERO' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.genero === undefined ? "" : userRegisterMain.genero}  isInvalid={!!validated.genero}>
                  <option value=''>SELECCIONE UN GÉNERO</option>
                  <option value="MASCULINO">MASCULINO</option>
                  <option value="FEMENINO">FEMENINO</option>
                  <option value="OTRO">OTRO</option>
                </Form.Select>
                <Form.Control.Feedback  type="invalid">
                  {validated.genero}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTipoDeIdentificacion' label="TIPO DE IDENTIFICACIÓN" className='mb-3'>
                <Form.Select size="sm" name='tipoDeIdentificacion' placeholder='TIPO DE IDENTIFICACIÓN' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.tipoDeIdentificacion === undefined ? "" : userRegisterMain.tipoDeIdentificacion}  isInvalid={!!validated.tipoDeIdentificacion}>
                  <option value=''>SELECCIONE UN TIPO DE IDENTIFICACIÓN</option>
                  <option value="CÉDULA DE CIUDADANÍA">CÉDULA DE CIUDADANÍA</option>
                  <option value="CÉDULA DE EXTRANJERÍA">CÉDULA DE EXTRANJERÍA</option>
                  <option value="PASAPORTE">PASAPORTE</option>
                </Form.Select>
                <Form.Control.Feedback  type="invalid">
                  {validated.tipoDeIdentificacion}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingNumeroDeIdentificacion' label="NÚMERO DE IDENTIFICACIÓN" className='mb-3'>
                <Form.Control type='text' placeholder='NÚMERO DE IDENTIFICACIÓN' name='numeroDeIdentificacion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.numeroDeIdentificacion === undefined ? "" : userRegisterMain.numeroDeIdentificacion}  isInvalid={!!validated.numeroDeIdentificacion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.numeroDeIdentificacion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingOrganizacionUniversidad' label="ORGANIZACIÓN / UNIVERSIDAD" className='mb-3'>
                <Form.Control type='text' placeholder='ORGANIZACIÓN / UNIVERSIDAD' name='organizacionUniversidad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.organizacionUniversidad === undefined ? "" : userRegisterMain.organizacionUniversidad} isInvalid={!!validated.organizacionUniversidad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.organizacionUniversidad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingCargo' label="CARGO" className='mb-3'>
                <Form.Control type='text' placeholder='CARGO' name='cargo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.cargo === undefined ? "" : userRegisterMain.cargo} isInvalid={!!validated.cargo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.cargo}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
            <FloatingLabel controlId='floatingPais' label="PAÍS" className='mb-3'>
                <Form.Control type='text' placeholder='PAÍS' name='pais' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.pais === undefined ? "" : userRegisterMain.pais} isInvalid={!!validated.pais}/>
                <Form.Control.Feedback  type="invalid">
                {validated.pais}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingDepartamento' label="DEPARTAMENTO / PROVINCIA / ESTADO" className='mb-3'>
                <Form.Control type='text' placeholder='DEPARTAMENTO / PROVINCIA / ESTADO' name='departamento' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.departamento === undefined ? "" : userRegisterMain.departamento} isInvalid={!!validated.departamento}/>
                <Form.Control.Feedback  type="invalid">
                {validated.departamento}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingCiudad' label="CIUDAD" className='mb-3'>
                <Form.Control type='text' placeholder='CIUDAD' name='ciudad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.ciudad === undefined ? "" : userRegisterMain.ciudad} isInvalid={!!validated.ciudad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.ciudad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingDireccion' label="DIRECCIÓN" className='mb-3'>
                <Form.Control type='text' placeholder='DIRECCIÓN' name='direccion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.direccion === undefined ? "" : userRegisterMain.direccion} isInvalid={!!validated.direccion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.direccion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoFijo' label="TELÉFONO FIJO (código de país + código de ciudad + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO FIJO' name='telefonoFijo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.telefonoFijo === undefined ? "" : userRegisterMain.telefonoFijo} isInvalid={!!validated.telefonoFijo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoFijo}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoCelular' label="TELÉFONO CELULAR (código de país + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO CELULAR' name='telefonoCelular' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.telefonoCelular === undefined ? "" : userRegisterMain.telefonoCelular} isInvalid={!!validated.telefonoCelular}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoCelular}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingMiembroAMCI' label="MIEMBRO AMCI" className='mb-3'>
                <Form.Select size="sm" name='miembroAMCI' placeholder='MIEMBRO AMCI' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegisterMain.miembroAMCI === undefined ? "" : userRegisterMain.miembroAMCI}  isInvalid={!!validated.miembroAMCI}>
                  <option value=''>SELECCIONE RESPUESTA</option>
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </Form.Select>
                <Form.Control.Feedback  type="invalid">
                {validated.miembroAMCI}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
      </Row>    
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
    </Form>
  )
}
