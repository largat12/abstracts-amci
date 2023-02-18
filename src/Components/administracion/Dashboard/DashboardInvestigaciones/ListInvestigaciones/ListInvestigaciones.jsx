import React from 'react'

export const ListInvestigaciones = ({listIntestigaciones}) => {
    
    console.log('listIntestigaciones', listIntestigaciones)

    if(listIntestigaciones.length === 0) return(<>cargando</>)
    return (
        <div className='table-content'>
        
        </div>
    )
}
