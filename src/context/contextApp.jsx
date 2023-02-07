import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const [dataContextApp, setDataContextApp] = useState({"seccionState":1,"seccionTotal":4,"dataRegistreUser":null})
    const [user, setUser] = useState("")
    const [dataFase1, setDataFase1] = useState({})

    useEffect(() => {
        setDataContextApp({
            ...dataContextApp,
            fase1: dataFase1
        })
    }, [dataFase1])
    


    return(
        <ContextApp.Provider value={{dataContextApp, setDataContextApp, user, setUser, dataFase1, setDataFase1}}>
            {children}
        </ContextApp.Provider>
    )
}