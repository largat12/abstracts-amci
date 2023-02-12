import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import { dbStorage } from "../configFirebase"


export const subirArchivos = async (file) => {
    let storageRef = ref(dbStorage, "investigaciones/"+ v4() )
    await uploadBytes(storageRef, file).then(response => {
        return response.metadata.fullPath
    })
    return await getDownloadURL(storageRef)
}