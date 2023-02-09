import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Editor } from '@tinymce/tinymce-react'
import React, { useContext, useState} from 'react'
import { ContextApp } from '../../../context/contextApp'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

export const FormularioTrabajo = ({listCategoryTrabajosLibres}) => {
    const {dataContextApp, setDataContextApp, nextSection, infoTrabajosLibres, setInfoTrabajosLibres} = useContext(ContextApp)
    const [validated, setValidated] = useState(false)
    const [countEditor, setCountEditor] = useState(0);
    const sizeLimit = 2500;

    const changeField = (field, value) => {
        let valueField = value
        if(valueField.length > 250){
            valueField = valueField.slice(0, 250)
        }
        if(field === 'documento'){
            console.log("documento", value)
        }
        setInfoTrabajosLibres({
            ...infoTrabajosLibres,
            [field]: typeof valueField === 'boolean' ? valueField : valueField.toUpperCase()
        })
        if(!!validated[field]){
            setValidated({
            ...validated,
            [field]:null
            })
        }
    }
    const changeFile = (e) =>{

        let file = e.target.files
        setInfoTrabajosLibres({
            ...infoTrabajosLibres,
            documento:[...file]
        })
    }
    const validateForm = () => {
        const {titulo, categoria, relevancia, publicacion} = infoTrabajosLibres
        const {palabrasClave1, palabrasClave2, palabrasClave3} = infoTrabajosLibres
        const newErros = {}
        
        if(!categoria                  || categoria === ''                      || categoria === undefined) newErros.categoria = 'Categoría de la investigación obligatorio'
        if(!titulo                     || titulo === ''                         || titulo === undefined) newErros.titulo = 'Título de la investigación obligatorio'
        if(!relevancia                 || relevancia === ''                     || relevancia === undefined) newErros.relevancia = 'Relevacia de la investigación obligatorio'
        if(!palabrasClave1             || palabrasClave1 === ''                 || palabrasClave1 === undefined) newErros.palabrasClave1 = 'Palabra clave de la investigación obligatorio'
        if(!palabrasClave2             || palabrasClave2 === ''                 || palabrasClave2 === undefined) newErros.palabrasClave2 = 'Palabra clave de la investigación obligatorio'
        if(!palabrasClave3             || palabrasClave3 === ''                 || palabrasClave3 === undefined) newErros.palabrasClave3 = 'Palabra clave de la investigación obligatorio'
        if(!publicacion                || publicacion === ''                    || publicacion === undefined) newErros.publicacion = 'Publicacion de la investigación obligatorio'

        return newErros
    }
    const charCount = (editor) => {
        let text = editor.getContent({ format: "text" })
        return text.replaceAll("\n", "").length  
        
    }
    const handleInit = (value, editor) => {
        setCountEditor(charCount(editor));
    }
    const handleUpdate = (value, editor) => {
        const count = charCount(editor);
        if(count <= sizeLimit){
            setCountEditor(count)
            setInfoTrabajosLibres({
                ...infoTrabajosLibres,
                resumen: value
            })
        }
    }
    const handleBeforeAddUndo = (evt, editor) => {
        if (charCount(editor) > sizeLimit) {
            evt.preventDefault();
          }
    }
    const hangleAtrasPage = () =>{
        setDataContextApp({
        ...dataContextApp,
        seccionState: 2
        })
    }
    const hangleSiguienteFace = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{
            if(countEditor !== 0){
                nextSection()
            }
        }
        
    }

    return (
        <Form onSubmit={hangleSiguienteFace} >
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h6 className="text-left"><strong>CategorÍa de la investigación</strong></h6>
                    <Form.Select size="sm" name='categoria' placeholder='CategorÍa de la investigación' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.categoria === undefined ? "" : infoTrabajosLibres.categoria}  isInvalid={!!validated.categoria}>
                        <option value=''>SELECCIONE UN CATEGORÍA</option>
                        {listCategoryTrabajosLibres.length !== 0
                        ?
                        listCategoryTrabajosLibres.map((item) => {
                            return <option key={item.id} value={item.name}>{item.name}</option>
                            })
                        :''}
                        </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {validated.categoria}
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h6 className="text-left"><strong>Título de la investigación</strong></h6>
                    <ul>
                        <li>Debe indicar la naturaleza de su trabajo de manera breve.</li>
                        <li>El título debe estar escrito en <strong>LETRAS MAYÚSCULAS</strong> para poder continuar.</li>
                        <li>No debe exceder los 250 caracteres (25 palabras aproximadamente).</li>
                        <li>No debe contener los nombres de los autores.</li>
                    </ul>
                    <Form.Control as="textarea" rows="4" name='titulo' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.titulo === undefined ? "" : infoTrabajosLibres.titulo} isInvalid={!!validated.titulo}></Form.Control>
                    <Form.Control.Feedback  type="invalid">
                        {validated.titulo}
                    </Form.Control.Feedback>
                    <p className='mt-2 mb-0'>Cantidad de caracteres: <span style={{"color":"red"}}>{infoTrabajosLibres.titulo === undefined ? 0 : infoTrabajosLibres.titulo.length}</span></p>
                </Col>
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                <h6 className="text-left"><strong>Resumen de la investigación</strong></h6>
                <ul>
                    <li>El resumen del trabajo no debe exceder los 2600 caracteres (260 palabras aprox.), el sistema automáticamente cortará el texto si este se excede.</li>
                    <li>El resumen debe contener los siguientes parámetros exigidos para la evaluación:
                        <ol>
                            <li>Introducción</li>
                            <li>Objetivo</li>
                            <li>Materiales y métodos: 
                                <ol>
                                    <li>Tipo de estudio</li>
                                    <li>Sujetos de estudio</li>
                                    <li>Variables</li>
                                    <li>Métodos estadísticos</li>
                                </ol>
                            </li>
                            <li>Resultados:
                                <ol>
                                    <li>Número de sujetos participantes</li>
                                    <li>Principales resultados</li>
                                    <li>Tamaño del efecto con medidas de precisión</li>
                                </ol>
                            </li>
                            <li>Conclusiones</li>
                        </ol>
                    </li>
                </ul>
                <Editor
                    apiKey='gaqk6sicvtnb8qqgfsxih4d7z5bcri0gm0vsku6nxe5dasvs'
                    initialValue={''}
                    value={infoTrabajosLibres.resumen}
                    init={{
                    height: 500,
                    menubar: false,
                    }}
                    onInit={handleInit}
                    onEditorChange={handleUpdate}
                    onBeforeAddUndo={handleBeforeAddUndo}
                    required
                    name='descripcion'
                />
                <p className='mt-2 mb-0'>Cantidad de caracteres: <span style={{"color":"red"}}>{countEditor}</span></p>
                {parseInt(countEditor) === 0 ? <div className='invalid-feedback' style={{"display":'block'}}>Resumen de la investigación obligatorio</div>:''}
                </Col>
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h6 className="text-left"><strong>Relevancia de la investigación</strong></h6>
                    <ul>
                        <li>En este ítem describa brevemente cuál es la relevancia que usted considera que tiene su investigación para la Medicina Crítica.</li>
                    </ul>
                    <Form.Control as="textarea" rows="4" name='relevancia' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.relevancia === undefined ? "" : infoTrabajosLibres.relevancia} isInvalid={!!validated.relevancia}></Form.Control>
                    <Form.Control.Feedback  type="invalid">
                        {validated.relevancia}
                    </Form.Control.Feedback>
                    
                </Col>
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h6 className="text-left"><strong>Adjuntar de la investigación</strong></h6>
                </Col>
                <Form.Control type="file"  name='documento' onChange={changeFile} ></Form.Control>
                   
            </Row>
            <Row className='form-control p-4 mb-4'>
                <Col xs={12}>
                    <h6 className="text-left"><strong>Palabras Claves</strong></h6>
                    <FloatingLabel controlId='floatingPalabraClave' label="PALABRA CLAVE 1" className='mb-3'>
                        <Form.Control type='text' name='palabrasClave1' placeholder='PALABRA CLAVE 1' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.palabrasClave1 === undefined ? "" : infoTrabajosLibres.palabrasClave1} isInvalid={!!validated.palabrasClave1}></Form.Control>
                        <Form.Control.Feedback  type="invalid">
                            {validated.palabrasClave1}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingPalabraClave' label="PALABRA CLAVE 2" className='mb-3'>
                        <Form.Control type='text' name='palabrasClave2' placeholder='PALABRA CLAVE 2' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.palabrasClave2 === undefined ? "" : infoTrabajosLibres.palabrasClave2} isInvalid={!!validated.palabrasClave2}></Form.Control>
                        <Form.Control.Feedback  type="invalid">
                            {validated.palabrasClave2}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingPalabraClave' label="PALABRA CLAVE 3" className='mb-3'>
                        <Form.Control type='text' name='palabrasClave3' placeholder='PALABRA CLAVE 3' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.palabrasClave3 === undefined ? "" : infoTrabajosLibres.palabrasClave3} isInvalid={!!validated.palabrasClave3}></Form.Control>
                        <Form.Control.Feedback  type="invalid">
                            {validated.palabrasClave3}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingPalabraClave' label="PALABRA CLAVE 4" className='mb-3'>
                        <Form.Control type='text' name='palabrasClave4' placeholder='PALABRA CLAVE 4' onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.palabrasClave4 === undefined ? "" : infoTrabajosLibres.palabrasClave4} ></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingPalabraClave' label="PALABRA CLAVE 5" className='mb-3'>
                        <Form.Control type='text' name='palabrasClave5' placeholder='PALABRA CLAVE 5' onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.palabrasClave5 === undefined ? "" : infoTrabajosLibres.palabrasClave5} ></Form.Control>
                    </FloatingLabel>
                </Col>
                
            </Row>
            <Row className='p-4 mb-4'>
                <h6 className="text-left"><strong>En caso de que el resumen sea seleccionado para el evento, autorizo que se publique en las en la revista de AMCI:   </strong></h6>
                <Form.Select size="sm" name='publicacion' placeholder='Publicación de la investigación' required onChange={(e) => {changeField(e.target.name, e.target.value)} } value={infoTrabajosLibres.publicacion === undefined ? "" : infoTrabajosLibres.publicacion}  isInvalid={!!validated.publicacion}>
                    <option value=''>SELECCIONE</option>
                    <option value='SI'>SI</option>
                    <option value='NO'>NO</option>
                    </Form.Select>
                <Form.Control.Feedback  type="invalid">
                    {validated.publicacion}
                </Form.Control.Feedback> 
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