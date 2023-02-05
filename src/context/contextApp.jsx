import { createContext, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const [dataContextApp, setDataContextApp] = useState([])
    const [user, setUser] = useState("")
    const [dataRegistro, setDataRegistro] = useState({"seccionState":1,"seccionTotal":4,"dataRegistreUser":null})

    return(
        <ContextApp.Provider value={{dataContextApp, user, setUser, dataRegistro, setDataRegistro}}>
            {children}
        </ContextApp.Provider>
    )
}