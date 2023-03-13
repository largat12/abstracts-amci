import { doc, updateDoc } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const updateModalidad = async (modalidadSeleccionado, contentCheckBox) => {
    await Promise.all(
        contentCheckBox.map(async (elementId) => {
            const collectionRef = await doc(dbApp, 'trabajos-libres/abstracts/abstracts', elementId)
            await updateDoc(collectionRef, {modalidad:[modalidadSeleccionado]})
        })
    )
}