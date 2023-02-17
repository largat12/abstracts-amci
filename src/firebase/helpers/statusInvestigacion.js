import { collection, getDocs, where, query} from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const statusInvestigacion = async (filter, value) => {
    const collectionRef = collection(dbApp, 'trabajos-libres/reference/statusInvestigation')
    const queryDoc = query(collectionRef, where(filter, '==', value))
    let response = await getDocs(queryDoc)
    if(response.docs.length !== 0){
        let status = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return status
    }
    else {
        return null
    }
}