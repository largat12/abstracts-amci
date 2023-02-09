import { collection, getDocs } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const categoriasTrabajosLibres = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/reference/research-topic')
    let result = await getDocs(collectionRef)
    if(result.docs.length !== 0){
        let reference = result.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return reference
    }
    return false
}