import {  doc, getDoc } from "firebase/firestore"
import { dbApp } from "../configFirebase"

const buscarInvestigacion = async (id) => {
    let investigacion = ''
    const ref = doc(dbApp, 'trabajos-libres/abstracts/abstracts', id)
    const docSpan = await getDoc(ref)
    if(docSpan.exists()){
        investigacion = {'id':id, ...docSpan.data()}
    }
    return investigacion
}
const usersInvestigacion = async (listUsers) => {
    const users =   await Promise.all(
                        listUsers.map( async (user) => {
                            const id = user
                            const ref = doc(dbApp, 'trabajos-libres/userAbstracts/users', id)
                            const docSpan = await getDoc(ref)
                            if(docSpan.exists()){
                                return {'id':id, ...docSpan.data()}
                            }
                        })
                    )
    return users;
}


export const contenidoInvestigacionCompleta =  async(pageDashboard) => {
    return new Promise(async (resolve, reject) => {
        let infoId = pageDashboard.item.id;
        
        //traer informacion de la investigacion
        let investigacion = await buscarInvestigacion(infoId)
        //traer informacion de todos los usuarios
        let usersInfo = await usersInvestigacion(investigacion.users)
        //respuesta
        let response = {...investigacion, users:usersInfo}
        
        resolve(response)
    })

}