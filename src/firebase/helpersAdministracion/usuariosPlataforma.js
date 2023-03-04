import { collection, getDocs, orderBy, query} from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const usuariosPlataforma = async () => {
    const collectionRef = collection(dbApp, 'users-plataforma')
    const queryDoc = query(collectionRef, orderBy("date", "asc"))
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