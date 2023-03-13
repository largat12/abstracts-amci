import { collection, getDocs } from "firebase/firestore"
import { dbApp } from "../configFirebase"

export const exportarData = async (type) => {
    let collectionRef = ''
    if(type === 'investigaciones'){
        collectionRef = collection(dbApp, 'trabajos-libres/abstracts/abstracts')
        let response = await getDocs(collectionRef)
        if(response.docs.length !== 0){
            let data = response.docs.map( (doc) => {
                let data = {...doc.data()}
                let modalidad = data.modalidad !==  undefined ? data.modalidad[0].name : 'SIN DEFINIR'
                return ( {id: doc.id, ...data, date:data.date.toDate().toLocaleDateString('es-CO', { year:"numeric", month:"numeric", day:"numeric"}) , status:data.status[0].name, resumen:data.resumen.replace( /(<([^>]+)>)/ig, ''), titulo:data.titulo.replace( /(<([^>]+)>)/ig, ''), modalidad: modalidad})   
            })
            return data
        }
        else {
            return null
        }
    }
    else if(type === 'investigadores'){
        collectionRef = collection(dbApp, 'trabajos-libres/userAbstracts/users')
        let response = await getDocs(collectionRef)
        if(response.docs.length !== 0){
            let data = response.docs.map( (doc) => {
                let data = {...doc.data()}
                return ( {id: doc.id, ...data, date:data.date.toDate().toLocaleDateString('es-CO', {  year:"numeric", month:"numeric", day:"numeric"}) })   
            })
            return data
        }
        else {
            return null
        }
    }

    
}