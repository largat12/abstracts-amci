import { doc, updateDoc } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const updateUsersInvestidacion = async (idUsers, idInvestigacion) => {
    console.log('idUsers', idUsers)
    const response = await Promise.all(
        idUsers.map( async (user) => {
            const collectionRef = doc(dbApp, 'trabajos-libres/userAbstracts/users', user)
            let response = await updateDoc(collectionRef, {investigacion:idInvestigacion})
            console.log("response updateDoc", response)
        })
    )
    return true
}