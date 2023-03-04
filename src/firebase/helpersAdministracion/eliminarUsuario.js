import { deleteDoc, doc } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const eliminarUsuario = async (id) => {
    await deleteDoc(doc(dbApp, 'users-plataforma', id))
    return id
}