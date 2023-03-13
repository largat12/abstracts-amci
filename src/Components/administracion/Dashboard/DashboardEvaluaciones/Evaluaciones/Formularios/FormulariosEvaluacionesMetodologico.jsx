import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export const FormulariosEvaluacionesMetodologico = ({contenidoInvestigacion, userLogin}) => {
    const [item, setItem] = useState({})
    const [totalPuntos, setTotalPuntos] = useState(0)
    const [validated, setValidated] = useState(false);

    const users = contenidoInvestigacion.users.sort(function (a, b) {
        if (a.presentador) {
          return -1;
        }
        if (b.presentador) {
          return 1;
        }
        // a must be equal to b
        return 0;
    });
    useEffect(()=>{
        const totalPuntos = Object.values(item).reduce((a, b) => parseInt(a) + parseInt(b), 0);
        setTotalPuntos(totalPuntos)

    },[item])
    const changeField = (field, value, attribute) => {
        let data = value
        if(value >= parseInt(attribute.max)){
            data = parseInt(attribute.max)
        }
        else if(value === ''){
            data = 0
        }
        setItem({
          ...item,
          [field]:  data
        })
        if(!!validated[field]){
          setValidated({
            ...validated,
            [field]:null
          })
        }
    }
    const validateForm = () => {
        const { introduccion, objetivo, materialesMetodos, resultados, conclusiones } = item
        const newErros = {}
        
        if(!introduccion            || introduccion === ''          || introduccion === undefined) newErros.introduccion = 'Introducción obligatorio'
        if(!objetivo                || objetivo === ''              || objetivo === undefined) newErros.objetivo = 'Objetivo obligatorio'
        if(!materialesMetodos       || materialesMetodos === ''     || materialesMetodos === undefined) newErros.materialesMetodos = 'Materiales y métodos obligatorio'
        if(!resultados              || resultados === ''            || resultados === undefined) newErros.resultados = 'Resultados obligatorio'
        if(!conclusiones            || conclusiones === ''          || conclusiones === undefined) newErros.conclusiones = 'Conclusiones obligatorio'

        return newErros
    }
    const handleSubmitEvaluacion = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setValidated(formErrors)
        }
        else{

        }
    }

    //console.log('contenidoInvestigacion', contenidoInvestigacion)
    //console.log('userLogin', userLogin)
    return (
        <Container fluid className='p-0'>
            <Row className='m-0'>
                <Col xs={9} className='p-0'>
                    <div className='contenido pt-4'>
                        <Container className='m-0 p-0'>
                            <Row className='m-0'>
                                <Col xs={12} className='p-0'>
                                    <p><strong>Título:</strong><br />{contenidoInvestigacion.titulo}</p>
                                </Col>
                            </Row>
                            <Row className='m-0'>
                                {users.length !== 0 &&
                                    <Col xs={6} className='p-0'>
                                        <p><strong>Investigadores:</strong><br />{users.map((user)=>{
                                            return <span key={user.id}>{user.nombre} {user.apellido}{user.presentador && ' (presentador)'}<br/></span>
                                        })}</p>
                                    </Col>
                                }
                                <Col xs={6} className='p-0'>
                                    <p><strong>Evaluador:</strong><br />{userLogin.nombre.toUpperCase()} {userLogin.apellido.toUpperCase()}</p>
                                </Col>
                            </Row>
                            <Row className='m-0'>
                                <Col xs={12} className='p-0'>
                                    <hr />
                                    <h3>FORMATO DE EVALUACIÓN<br />RESUMENES DE INVESTIGACIÓN ORIGINAL (70%)</h3>
                                </Col>
                            </Row>
                            <Row className='m-0'>
                                <Col xs={12} className='p-0'>
                                    <Form onSubmit={handleSubmitEvaluacion} className="mb-3">
                                        <Row>
                                            <Col xs={11}>
                                                <p><strong>Introducción (0 a 10 puntos)</strong>
                                                <br />identificación de un problema / explica por qué es importante hacer el estudio.</p>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Control type='number' placeholder='0' min='0' max='10' className='text-center' name='introduccion' required onChange={(e) => {changeField(e.target.name, e.target.value, e.target)} } value={item.introduccion === undefined ? 0 : item.introduccion} isInvalid={!!validated.introduccion}/>
                                                <Form.Control.Feedback  type="invalid">
                                                    {validated.introduccion}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={11}>
                                                <p><strong>Objetivo (0 a 10 puntos)</strong>
                                                <br />Explícito, acorde con el título y metodología.</p>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Control type='number' placeholder='0' min='0' max='10' className='text-center' name='objetivo' required onChange={(e) => {changeField(e.target.name, e.target.value, e.target)} } value={item.objetivo === undefined ? 0 : item.objetivo} isInvalid={!!validated.objetivo}/>
                                                <Form.Control.Feedback  type="invalid">
                                                    {validated.objetivo}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={11}>
                                                <p><strong>Materiales y métodos (0 a 30 puntos)</strong>
                                                <br />Tipo de estudio: Acorde con objetivo.
                                                <br />Descripción de los sujetos: Informa condiciones de selección de sujetos.
                                                <br />Variables: Informa qué midió.
                                                <br />Métodos estadísticos: Descritos y acorde con objetivo.</p>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Control type='number' placeholder='0' min='0' max='30' className='text-center' name='materialesMetodos' required onChange={(e) => {changeField(e.target.name, e.target.value, e.target)} } value={item.materialesMetodos === undefined ? 0 : item.materialesMetodos} isInvalid={!!validated.materialesMetodos}/>
                                                <Form.Control.Feedback  type="invalid">
                                                    {validated.materialesMetodos}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={11}>
                                                <p><strong>Resultados (0 a 30 puntos)</strong>
                                                <br />Número de sujetos participantes.
                                                <br />Principales resultados: Debe incluir texto, no únicamente números.
                                                <br />Presenta tamaño del efecto con medidas de precisión: Preferiblemente IC y No debe incluir únicamente valor p.</p>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Control type='number' placeholder='0' min='0' max='30' className='text-center' name='resultados' required onChange={(e) => {changeField(e.target.name, e.target.value, e.target)} } value={item.resultados === undefined ? 0 : item.resultados} isInvalid={!!validated.resultados}/>
                                                <Form.Control.Feedback  type="invalid">
                                                    {validated.resultados}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={11}>
                                                <p><strong>Conclusiones (0 a 10 puntos)</strong>
                                                <br />Acorde con el objetivo y metodología del estudio. No debe repetir los resultados.</p>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Control type='number' placeholder='0' min='0' max='10' className='text-center' name='conclusiones' required onChange={(e) => {changeField(e.target.name, e.target.value, e.target)} } value={item.conclusiones === undefined ? 0 : item.conclusiones} isInvalid={!!validated.conclusiones}/>
                                                <Form.Control.Feedback  type="invalid">
                                                    {validated.conclusiones}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col xs={3} className=''>
                    <div className='puntuacion'>
                        <div className='total'>
                            <p class="puntaje">{totalPuntos}</p>
                            <p class="titlePuntos">Puntos Evaluados</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
