import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {dbApp} from '../configFirebase'

export const investigadores = async (userLogin) => {
    const collectionRef = collection(dbApp, 'trabajos-libres/userAbstracts/users')
    let response = await getDocs(collectionRef)
    if(response.docs.length !== 0){
        let investigadores = response.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })

        if(userLogin.perfil === 'Jurado'){
            const data = []
            await Promise.all(
                investigadores.map(async (investigador) => {
                    const collectionDocInvestigacion =  doc(dbApp, 'trabajos-libres/abstracts/abstracts', investigador.investigacion)
                    const docInvestigacion = await getDoc(collectionDocInvestigacion)
                    if(docInvestigacion.exists()){
                        const infoInvestigacion = docInvestigacion.data()
                        data.push({...investigador, jurados:infoInvestigacion.jurados})
                    }
                    
                })
            )
            return data
        }
        else{
            return investigadores
        }
        
        
        
        
    }
    else {
        return null
    }
}