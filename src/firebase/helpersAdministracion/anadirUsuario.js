import { addDoc, collection } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const anadirUsuario = async (data) => {
    const collectionRef = collection(dbApp, 'users-plataforma')
    let response = await addDoc(collectionRef, {date:new Date(), ...data})
    if(response.id.length !== 0){
        return response.id
    }
    else{
        return null
    }
}