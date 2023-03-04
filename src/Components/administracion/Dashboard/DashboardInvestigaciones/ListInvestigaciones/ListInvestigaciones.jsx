import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Loading } from '../../Loading/Loading'

export const ListInvestigaciones = ({contentInvestigaciones, handleViewInvestigation, userLogin, contentCheckBox, setContentCheckBox}) => {
    const [isChecked, setIsChecked] = useState({})
    
    const handleOnChange = (e) => {
        const value = e.target.value
        if(isChecked[value] === undefined || isChecked[value] === false){
            setIsChecked({...isChecked,
                [value]:true    
            })
            setContentCheckBox([...contentCheckBox, value])
        }
        else{
            setIsChecked({...isChecked,
                [value]:false    
            })
            let response =  []
            contentCheckBox.forEach((item) => {
                if(item !== value){
                    response.push(item) 
                }
            })
            setContentCheckBox([...response])
        }
    }


    if(contentInvestigaciones.length === 0) return(<Loading/>)
    return (
        <div className='table-content'>
            <Container fluid className='thead p-0 pt-2 pb-2'>
                <Row className='m-0'>
                    <Col className='p-0 m-0 border-right' style={{width:'40px', flex:'0 0 40px'}}>

                    </Col>
                    <Col className='p-0 m-0 border-right' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                        <Container fluid className='p-0 m-0'>
                            <Row className='m-0'>
                                <Col xs={1} className='border-right'>ID</Col>
                                <Col xs={3} className='border-right'>Título</Col>
                                <Col xs={3} className='border-right'>Resumen</Col>
                                <Col xs={1} className='border-right'>Puntos</Col>
                                <Col xs={2} className='border-right'>Jurado(s)</Col>
                                <Col xs={1} className='border-right'>Estado</Col>
                                <Col xs={1} className='border-right'>Acciones</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='tbody p-0'>
                {contentInvestigaciones.map((item) => {
                    return (
                        <Row key={item.id} className='m-0 p-0 pt-2 pb-2'>
                            <Col className='p-0 m-0 d-flex justify-content-center align-items-center' style={{width:'40px', flex:'0 0 40px'}}>
                                {userLogin.perfil === 'Administrador' ?
                                    <input type='checkbox' className='form-check-input' name={item.id} value={item.id} checked={isChecked[item.id] === undefined || isChecked[item.id] === false ? false : true} onChange={handleOnChange}/>
                                :
                                ''}
                            </Col>
                            <Col className='p-0 m-0' style={{width:'calc(100% - 40px)', flex:'0 0 calc(100% - 40px)'}}>
                                <Container fluid className='p-0 m-0'>
                                    <Row className='m-0'>
                                        <Col xs={1}><p className='cortar-texto id'>{item.id}</p></Col>
                                        <Col xs={3}><p className='cortar-texto titulo'>{item.titulo}</p></Col>
                                        <Col xs={3}><p className='cortar-texto resumen'>{item.resumen.replace( /(<([^>]+)>)/ig, '')}</p></Col>
                                        <Col xs={1}><p className='cortar-texto total-puntos'>{item.totalPuntuacion}</p></Col>
                                        <Col xs={2}>
                                            <p className='cortar-texto jurados'>
                                            {
                                                item.jurados.length === 0 
                                                ? '' 
                                                : item.jurados.map((item)=>{
                                                    return <span key={item.id}>{item.nombre} {item.apellido} ({item.tipoEvaluacion})</span>
                                                })
                                            }
                                            </p>
                                        </Col>
                                        <Col xs={1}><p className='estado'><span className={item.status[0].name.toLowerCase()}>{item.status[0].name}</span></p></Col>
                                        <Col xs={1} className='justify-content-end d-flex align-content-center'><Button onClick={(e) => {e.preventDefault();handleViewInvestigation(item.id)}} className='btn-custom'>Detalles</Button></Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </div>
    )
}
