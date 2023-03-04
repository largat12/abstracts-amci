import { collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const updateJurados = async (dataJuradoInvestigaciones, dataJurado, dataJurdadoInvestigaciones) => {
    
    await Promise.all(
        dataJuradoInvestigaciones.map( async (item) => {
            //colleccion al documento
            const collectionRefJurado = await doc(dbApp, 'users-plataforma', dataJurado.id)
            //colleccion al documento
            const collectionRef = await doc(dbApp, 'trabajos-libres/abstracts/abstracts', item.id)
            //colleccion de los estados
            const collectionRefStatus = collection(dbApp, 'trabajos-libres/reference/statusInvestigation')
            //seleccionando el estado
            const queryDoc = query(collectionRefStatus, where('name', '==', 'Evaluadores Asignados'))
            let response = await getDocs(queryDoc)
            if(response.docs.length !== 0){
                let status = response.docs.map( (doc) => {
                    return ( {id: doc.id, ...doc.data()}  )   
                })
                //subiendo actualizacion de documento de investigacion
                await updateDoc(collectionRef, {jurados:[...item.data], status:[...status]})
                //subiendo actualizacion de documento de jurado
                await updateDoc(collectionRefJurado, {investigaciones:[...dataJurdadoInvestigaciones]})
                return true
            }else{
                return false
            }       
        })

    )
    
}