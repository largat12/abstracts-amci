
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { ContextAppInvesitaciones } from '../../../../context/ContextAppInvesitaciones';

export const FormularioInvestigadores = ({userUpdateRegister, setUserUpdateRegister}) => { 
  
  const {addUsersRegister, updateUserRegister} = useContext(ContextAppInvesitaciones)
  const [userRegister, setUserRegister] = useState({})
  const [validated, setValidated] = useState(false);
  const [validatedLoad, setValidatedLoad] = useState(null);
  

  
  useEffect(()=>{
      setUserRegister({...userUpdateRegister})
  },[userUpdateRegister])


  const changeField = (field, value) => {
    setValidatedLoad(null)
    setUserRegister({
      ...userRegister,
      [field]: typeof value === 'boolean' ? value : value.toUpperCase()
    })
    if(!!validated[field]){
      setValidated({
        ...validated,
        [field]:null
      })
    }
  }
  const validateForm = () => {
    const { titulo, nombre, apellido, email, tipoDeIdentificacion, numeroDeIdentificacion, organizacionUniversidad, cargo, direccion, pais, departamento, ciudad, telefonoFijo, telefonoCelular, miembroAMCI} = userRegister
    const newErros = {}
    
    if(!titulo                  || titulo === ''                      || titulo === undefined) newErros.titulo = 'Título obligatorio'
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
  const hangleAddUser = (e) =>{
    e.preventDefault()
    const formErrors = validateForm();
    if(Object.keys(formErrors).length > 0){
        setValidated(formErrors)
    }
    else{
        /*------agregar guario---------*/
        if(userUpdateRegister === null){
          let response = addUsersRegister(userRegister)
          if(!response){
            setValidatedLoad({"status":"danger", "msg":"Revisar información suministrada, no se puede tener el mismo email, identificación o teléfono celular igual a otro investigador"})
          }
          else{
            setValidatedLoad({"status":"success", "msg":"Ingresado investigador correctamente"})
          }
        }
        /*------guardar usuario editado ----- */
        else if(userUpdateRegister !== null){
          let response = updateUserRegister(userRegister)
          if(!response){
            setValidatedLoad({"status":"danger", "msg":"Revisar información suministrada, no se puede tener el mismo email, identificación o teléfono celular igual a otro investigador"})
          }
          else{
            setValidatedLoad({"status":"success", "msg":"Cambios de investigador guardados correctamente"})
          }
        }
        setUserUpdateRegister(null)
        setInterval(()=>{
          setValidatedLoad(null)
        }, 3000)
    }
  }

  return (
    <Form onSubmit={hangleAddUser} className="mb-3">
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingTitulo' label="TÍTULO (Dr. / Enfro. / Tr. / Ft. / Lic.)" className='mb-3'>
                  <Form.Control type='text' placeholder='TÍTULO' name='titulo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.titulo === undefined ? "" : userRegister.titulo} isInvalid={!!validated.titulo}/>
                  <Form.Control.Feedback  type="invalid">
                    {validated.titulo}
                  </Form.Control.Feedback>
              </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingNombre' label="NOMBRE (S)" className='mb-3'>
                <Form.Control type='text' placeholder='NOMBRE (S)' name='nombre' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.nombre === undefined ? "" : userRegister.nombre} isInvalid={!!validated.nombre}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.nombre}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingApellido' label="APELLIDO (S)" className='mb-3'>
                <Form.Control type='email' placeholder='APELLIDO (S)' name='apellido' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.apellido === undefined ? "" : userRegister.apellido} isInvalid={!!validated.apellido}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.apellido}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>    
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingEmail' label="EMAIL" className='mb-3'>
                <Form.Control type='email' placeholder='EMAIL' name='email' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.email === undefined ? "" : userRegister.email} isInvalid={!!validated.email}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.email}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingGenero' label="GÉNERO" className='mb-3'>
                <Form.Select size="sm" name='genero' placeholder='GÉNERO' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.genero === undefined ? "" : userRegister.genero}  isInvalid={!!validated.genero}>
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
                <Form.Select size="sm" name='tipoDeIdentificacion' placeholder='TIPO DE IDENTIFICACIÓN' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.tipoDeIdentificacion === undefined ? "" : userRegister.tipoDeIdentificacion}  isInvalid={!!validated.tipoDeIdentificacion}>
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
                <Form.Control type='text' placeholder='NÚMERO DE IDENTIFICACIÓN' name='numeroDeIdentificacion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.numeroDeIdentificacion === undefined ? "" : userRegister.numeroDeIdentificacion}  isInvalid={!!validated.numeroDeIdentificacion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.numeroDeIdentificacion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingOrganizacionUniversidad' label="ORGANIZACIÓN / UNIVERSIDAD" className='mb-3'>
                <Form.Control type='text' placeholder='ORGANIZACIÓN / UNIVERSIDAD' name='organizacionUniversidad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.organizacionUniversidad === undefined ? "" : userRegister.organizacionUniversidad} isInvalid={!!validated.organizacionUniversidad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.organizacionUniversidad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingCargo' label="CARGO" className='mb-3'>
                <Form.Control type='text' placeholder='CARGO' name='cargo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.cargo === undefined ? "" : userRegister.cargo} isInvalid={!!validated.cargo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.cargo}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
            <FloatingLabel controlId='floatingPais' label="PAÍS" className='mb-3'>
                <Form.Control type='text' placeholder='PAÍS' name='pais' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.pais === undefined ? "" : userRegister.pais} isInvalid={!!validated.pais}/>
                <Form.Control.Feedback  type="invalid">
                {validated.pais}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingDepartamento' label="DEPARTAMENTO / PROVINCIA / ESTADO" className='mb-3'>
                <Form.Control type='text' placeholder='DEPARTAMENTO / PROVINCIA / ESTADO' name='departamento' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.departamento === undefined ? "" : userRegister.departamento} isInvalid={!!validated.departamento}/>
                <Form.Control.Feedback  type="invalid">
                {validated.departamento}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingCiudad' label="CIUDAD" className='mb-3'>
                <Form.Control type='text' placeholder='CIUDAD' name='ciudad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.ciudad === undefined ? "" : userRegister.ciudad} isInvalid={!!validated.ciudad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.ciudad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingDireccion' label="DIRECCIÓN" className='mb-3'>
                <Form.Control type='text' placeholder='DIRECCIÓN' name='direccion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.direccion === undefined ? "" : userRegister.direccion} isInvalid={!!validated.direccion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.direccion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoFijo' label="TELÉFONO FIJO (código de país + código de ciudad + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO FIJO' name='telefonoFijo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.telefonoFijo === undefined ? "" : userRegister.telefonoFijo} isInvalid={!!validated.telefonoFijo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoFijo}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoCelular' label="TELÉFONO CELULAR (código de país + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO CELULAR' name='telefonoCelular' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.telefonoCelular === undefined ? "" : userRegister.telefonoCelular} isInvalid={!!validated.telefonoCelular}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoCelular}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingMiembroAMCI' label="MIEMBRO AMCI" className='mb-3'>
                <Form.Select size="sm" name='miembroAMCI' placeholder='MIEMBRO AMCI' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={userRegister.miembroAMCI === undefined ? "" : userRegister.miembroAMCI}  isInvalid={!!validated.miembroAMCI}>
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
      <Row>
        <Col xs={6}>
            <Form.Check type='checkbox' label='¿ES PRESENTADOR?' name='presentador' required onChange={(e) => {changeField(e.target.name, e.target.checked )} } value={userRegister.presentador === undefined ? "" : userRegister.presentador} /> 
        </Col>
        <Col xs={6} className='d-flex justify-content-end'>
            <Button onClick={hangleAddUser} className="btn-custom"><p>Guardar <FontAwesomeIcon icon={faSave} /></p></Button>
        </Col>
      </Row>
      {validatedLoad !== null ? <Alert className='mt-4' key={validatedLoad.status} variant={validatedLoad.status}>{validatedLoad.msg}</Alert> : ''}
      
    </Form>
  )
}


