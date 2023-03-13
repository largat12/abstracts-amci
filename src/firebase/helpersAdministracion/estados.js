import { collection, getDocs } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const estados = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/reference/statusInvestigation')
    let response = await getDocs(collectionRef)
    if(response.docs.length !== 0){
        let estadosInvestigaciones = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return estadosInvestigaciones
    }
    else {
        return null
    }
}