
import { collection, getDocs, where, query} from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const jurados = async () => {
    const collectionRef = collection(dbApp, 'users-plataforma')
    const queryDoc = query(collectionRef, where('perfil', '==', 'Jurado'))
    let response = await getDocs(queryDoc)
    if(response.docs.length !== 0){
        let userJurados = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return userJurados
    }
    else {
        return null
    }
}