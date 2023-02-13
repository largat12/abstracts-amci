import { addDoc, collection } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const subirInvestigacion = async (investigacion, documento, idUsers) => {
    
    let palabrasClaves = [investigacion.palabrasClave1, investigacion.palabrasClave2, investigacion.palabrasClave3]
    if(investigacion.palabrasClave4 !== undefined && investigacion.palabrasClave4 !== ''){
        palabrasClaves.push(investigacion.palabrasClave4)
    }
    if(investigacion.palabrasClave5 !== undefined && investigacion.palabrasClave5 !== ''){
        palabrasClaves.push(investigacion.palabrasClave5)
    }
    let newInvestigacion = {
        date: new Date(),
        categoria: investigacion.categoria,
        titulo: investigacion.titulo,
        resumen: investigacion.resumen,
        relevancia: investigacion.relevancia,
        palabrasClaves:palabrasClaves,
        publicacion: investigacion.publicacion,
        documento: documento,
        users:idUsers
    }
    const collectionRef = collection(dbApp, 'trabajos-libres/abstracts/abstracts')
    let response = await addDoc(collectionRef, newInvestigacion)
    if(response.id.length !== 0){
        return response.id
    }
    else{
        return null
    }
    
    
}