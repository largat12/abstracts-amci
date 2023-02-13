import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const categoriasTrabajosLibres = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/reference/research-topic')
    const queryRef = query(collectionRef, orderBy("name"))
    let result = await getDocs(queryRef)
    if(result.docs.length !== 0){
        let reference = result.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return reference
    }
    return false
}