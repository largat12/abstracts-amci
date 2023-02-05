import { createContext, useState } from "react";

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
    const [dataContextApp, setDataContextApp] = useState([])
    const [user, setUser] = useState("")

    return(
        <ContextApp.Provider value={{dataContextApp, user}}>
            {children}
        </ContextApp.Provider>
    )
}