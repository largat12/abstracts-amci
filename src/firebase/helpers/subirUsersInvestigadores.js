import { addDoc, collection } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const subirUsersInvestigadores = async (users) => {
    const collectionRef = collection(dbApp, 'trabajos-libres/userAbstracts/users')
    const response = await Promise.all(
        users.map( async (user) => {
            let result = await addDoc(collectionRef, user)
            if(result.id.length !== 0){
                return result.id 
            }
            else{
                return null
            }
        })
    )
    return response
}