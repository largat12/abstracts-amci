import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { ContextApp } from '../../../../context/contextApp';

export const FormularioInscripcion = ({setactiveForm}) => {
  const {dataContextApp, setDataContextApp, dataFase1, setDataFase1} = useContext(ContextApp)
  const [validated, setValidated] = useState(false);


  


  const changeField = (field, value) => {
    setDataFase1({
      ...dataFase1,
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
    const {titulo, genero, nombre, apellido, email, tipoDeIdentificacion, numeroDeIdentificacion, organizacionUniversidad, cargo, direccion, pais, departamento, ciudad, telefonoFijo, telefonoCelular, miembroAMCI} = dataFase1
    const newErros = {}
    
    if(!titulo                  || titulo === ''                      || titulo === undefined) newErros.titulo = 'Titulo obligatorio' 
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
    setactiveForm(false)
  }
  const hangleSiguienteFace = (e) => {
    e.preventDefault()
    const formErrors = validateForm();
    if(Object.keys(formErrors).length > 0){
      setValidated(formErrors)
    }
    else{
      setDataContextApp({
        ...dataContextApp,
        seccionState:2
      })
    }
  }

  

  return (
    <Form onSubmit={hangleSiguienteFace}>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingTitulo' label="TITULO" className='mb-3'>
                  <Form.Control type='text' placeholder='TITULO' name='titulo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.titulo === undefined ? "" : dataFase1.titulo} isInvalid={!!validated.titulo}/>
                  <Form.Control.Feedback  type="invalid">
                    {validated.titulo}
                  </Form.Control.Feedback>
              </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingNombre' label="NOMBRE (S)" className='mb-3'>
                <Form.Control type='text' placeholder='NOMBRE (S)' name='nombre' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.nombre === undefined ? "" : dataFase1.nombre} isInvalid={!!validated.nombre}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.nombre}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingApellido' label="APELLIDO (S)" className='mb-3'>
                <Form.Control type='email' placeholder='APELLIDO (S)' name='apellido' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.apellido === undefined ? "" : dataFase1.apellido} isInvalid={!!validated.apellido}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.apellido}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>    
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingEmail' label="EMAIL" className='mb-3'>
                <Form.Control type='email' placeholder='EMAIL' name='email' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.email === undefined ? "" : dataFase1.email} isInvalid={!!validated.email}/>
                <Form.Control.Feedback  type="invalid">
                  {validated.email}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingGenero' label="GÉNERO" className='mb-3'>
                <Form.Select size="sm" name='genero' placeholder='GÉNERO' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.genero === undefined ? "" : dataFase1.genero}  isInvalid={!!validated.genero}>
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
                <Form.Select size="sm" name='tipoDeIdentificacion' placeholder='TIPO DE IDENTIFICACIÓN' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.tipoDeIdentificacion === undefined ? "" : dataFase1.tipoDeIdentificacion}  isInvalid={!!validated.tipoDeIdentificacion}>
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
                <Form.Control type='text' placeholder='NÚMERO DE IDENTIFICACIÓN' name='numeroDeIdentificacion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.numeroDeIdentificacion === undefined ? "" : dataFase1.numeroDeIdentificacion}  isInvalid={!!validated.numeroDeIdentificacion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.numeroDeIdentificacion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingOrganizacionUniversidad' label="ORGANIZACIÓN / UNIVERSIDAD" className='mb-3'>
                <Form.Control type='text' placeholder='ORGANIZACIÓN / UNIVERSIDAD' name='organizacionUniversidad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.organizacionUniversidad === undefined ? "" : dataFase1.organizacionUniversidad} isInvalid={!!validated.organizacionUniversidad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.organizacionUniversidad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingCargo' label="CARGO" className='mb-3'>
                <Form.Control type='text' placeholder='CARGO' name='cargo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.cargo === undefined ? "" : dataFase1.cargo} isInvalid={!!validated.cargo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.cargo}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
            <FloatingLabel controlId='floatingPais' label="PAÍS" className='mb-3'>
                <Form.Control type='text' placeholder='PAÍS' name='pais' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.pais === undefined ? "" : dataFase1.pais} isInvalid={!!validated.pais}/>
                <Form.Control.Feedback  type="invalid">
                {validated.pais}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingDepartamento' label="DEPARTAMENTO / PROVINCIA / ESTADO" className='mb-3'>
                <Form.Control type='text' placeholder='DEPARTAMENTO / PROVINCIA / ESTADO' name='departamento' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.departamento === undefined ? "" : dataFase1.departamento} isInvalid={!!validated.departamento}/>
                <Form.Control.Feedback  type="invalid">
                {validated.departamento}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
        <Col xs={4}>
            <FloatingLabel controlId='floatingCiudad' label="CIUDAD" className='mb-3'>
                <Form.Control type='text' placeholder='CIUDAD' name='ciudad' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.ciudad === undefined ? "" : dataFase1.ciudad} isInvalid={!!validated.ciudad}/>
                <Form.Control.Feedback  type="invalid">
                {validated.ciudad}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingDireccion' label="DIRECCIÓN" className='mb-3'>
                <Form.Control type='text' placeholder='DIRECCIÓN' name='direccion' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.direccion === undefined ? "" : dataFase1.direccion} isInvalid={!!validated.direccion}/>
                <Form.Control.Feedback  type="invalid">
                {validated.direccion}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoFijo' label="TELÉFONO FIJO (código de país + código de ciudad + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO FIJO' name='telefonoFijo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.telefonoFijo === undefined ? "" : dataFase1.telefonoFijo} isInvalid={!!validated.telefonoFijo}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoFijo}
                </Form.Control.Feedback>
            </FloatingLabel> 
        </Col>
        <Col xs={6}>
            <FloatingLabel controlId='floatingTelefonoCelular' label="TELÉFONO CELULAR (código de país + número )" className='mb-3'>
                <Form.Control type='number' placeholder='TELÉFONO CELULAR' name='telefonoCelular' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.telefonoCelular === undefined ? "" : dataFase1.telefonoCelular} isInvalid={!!validated.telefonoCelular}/>
                <Form.Control.Feedback  type="invalid">
                {validated.telefonoCelular}
                </Form.Control.Feedback>
            </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <FloatingLabel controlId='floatingMiembroAMCI' label="MIEMBRO AMCI" className='mb-3'>
                <Form.Select size="sm" name='miembroAMCI' placeholder='MIEMBRO AMCI' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={dataFase1.miembroAMCI === undefined ? "" : dataFase1.miembroAMCI}  isInvalid={!!validated.miembroAMCI}>
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
