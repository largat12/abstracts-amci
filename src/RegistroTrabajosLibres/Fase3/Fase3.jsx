import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { ContextApp } from '../../context/contextApp'
import { categoriasTrabajosLibres } from '../../firebase/helpers/categoriasTrabajosLibres'

export const Fase3 = () => {
  const {dataContextApp, setDataContextApp, nextSection} = useContext(ContextApp)
  const [listCategoryTrabajosLibres, setListCategoryTrabajosLibres] = useState([])
  useEffect(() => {
    categoriasTrabajosLibres().then((response)=>{
      setListCategoryTrabajosLibres([...response])
    })
  
    
  }, [])

  const hangleAtrasPage = () =>{
    setDataContextApp({
      ...dataContextApp,
      seccionState: 2
    })
}
  
  const hangleSiguienteFace = () => {
    nextSection()
  }
  

  return (
    <Container fluid className='formulario-registro'>
            <Row className='m-0'>
                <Col xs={12}>
                    <div className='description-formulario-registro'>
                        <h5 className='text-center'><strong>INSTRUCCIONES PARA LA SECCIÓN 3</strong></h5>
                        <ul>
                            <li>Seleccione la <strong>CATEGORÍA</strong> de participación entre las siguientes
                              <ul>
                                {listCategoryTrabajosLibres.length !== 0 ?
                                 listCategoryTrabajosLibres.map((item) => {
                                  return <li key={item.id}>{item.name}</li>
                                 })
                                 : ''}
                              </ul>
                            </li>
                            <li>Escriba el <strong>TÍTULO</strong> en mayúscula sostenida en el que evidencie brevemente la naturaleza de su trabajo. No debe exceder 250 caracteres (25 palabras aproximadamente) ni contener los nombres de los autores.</li>
                            <li>Incluya la información del <strong>RESUMEN</strong> teniendo en cuenta las siguientes recomendaciones, con una extensión máxima de 350 palabras</li>
                        </ul>
                    </div>
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

