import { collection, getDocs } from 'firebase/firestore'
import {dbApp} from '../configFirebase'

export const investigadores = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/userAbstracts/users')
    let response = await getDocs(collectionRef)
    if(response.docs.length !== 0){
        let investigadores = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return investigadores
    }
    else {
        return null
    }
}