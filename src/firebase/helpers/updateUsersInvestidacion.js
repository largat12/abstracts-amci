import { doc, updateDoc } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const updateUsersInvestidacion = async (idUsers, idInvestigacion) => {
    await Promise.all(
        idUsers.map( async (user) => {
            const collectionRef = doc(dbApp, 'trabajos-libres/userAbstracts/users', user)
            await updateDoc(collectionRef, {investigacion:idInvestigacion})
        })
    )
    return true
}