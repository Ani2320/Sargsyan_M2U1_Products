import { createContext, useState } from "react";

const defaultUser = {
    name: ""
}

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);
    return (
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}