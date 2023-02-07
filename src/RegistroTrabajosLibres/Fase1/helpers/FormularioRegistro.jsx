
import React from 'react'
import { FormularioInscripcion } from './Formulario/FormularioInscripcion'

export const FormularioRegistro = () => {

  
  return (
    <>
        
        <div className='description-formulario-registro'>
            <h5 className='text-center'><strong>INSTRUCCIONES PARA LA SECCIÓN 1</strong></h5>
            <ul>
                <li>Para una mejor experiencia dentro de la plataforma, por favor <strong>evite</strong> utilizar el <em>navegador Internet Explorer</em>.</li>
                <li>Ingrese los datos solicitados del autor designado como persona de contacto, a quien el Comité Organizador enviará las comunicaciones relativas al resumen.</li>
                <li>Ingrese todos los datos solicitados sin abreviaturas y en <strong>mayúscula sostenida</strong> excepto el correo electrónico.</li>
                <li>Los campos señalados con asterisco <strong style={{color:"red"}}>(*)</strong> son INDISPENSABLES para continuar a la siguiente sección.</li>
                <li>En el campo del correo electrónico, coloque una sola dirección. Este campo es de gran importancia, ya que todas las instrucciones y notificaciones serán enviadas a través del mismo.</li>
            </ul>
        </div>
        <FormularioInscripcion />
        
    </>
  )
}
