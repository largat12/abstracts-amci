import { collection, where, query, getDocs } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const buscarUser = async (data) => {
    const collectionRef = collection(dbApp, 'users-plataforma')
    const queryDoc = query(collectionRef, where('email','==', data.email), where('password','==', data.password))
    let response = await getDocs(queryDoc)
    if(response.docs.length !== 0){
        let user = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return user
    }
    else {
        return null
    }
}