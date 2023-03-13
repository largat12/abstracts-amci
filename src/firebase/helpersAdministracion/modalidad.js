import { collection, getDocs } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const modalidad = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/reference/presentation-aids')
    let response = await getDocs(collectionRef)
    if(response.docs.length !== 0){
        let modalidadInvestigaciones = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return modalidadInvestigaciones
    }
    else {
        return null
    }
}