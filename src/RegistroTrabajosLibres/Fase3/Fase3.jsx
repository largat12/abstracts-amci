import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import { categoriasTrabajosLibres } from '../../firebase/helpers/categoriasTrabajosLibres'
import { FormularioTrabajo } from './helpers/FormularioTrabajo'

export const Fase3 = () => {

  const [listCategoryTrabajosLibres, setListCategoryTrabajosLibres] = useState([])

  
  useEffect(() => {
    categoriasTrabajosLibres().then((response)=>{
      setListCategoryTrabajosLibres([...response])
    })
  
    
  }, [])

  
  

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

                    <FormularioTrabajo listCategoryTrabajosLibres={listCategoryTrabajosLibres}/>            
                      
                    
                </Col>
            </Row>
        </Container>
  )
}

