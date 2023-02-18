import { collection, getDocs } from 'firebase/firestore'
import {dbApp} from '../configFirebase'

export const investigaciones = async () => {
    const collectionRef = collection(dbApp, 'trabajos-libres/abstracts/abstracts')
    let response = await getDocs(collectionRef)
    if(response.docs.length !== 0){
        let investigaciones = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })


        
        return investigaciones
    }
    else {
        return null
    }
    
}