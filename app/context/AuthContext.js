"use client"

import { createContext, useContext, useState } from "react"


const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, SetUser] = useState(null)

    const login = (email) => {
        SetUser({email})
    }

    const logout = () => {
        SetUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
    
}
// Hook - өгөгдөл унших
export function useAuth() {
    return useContext(AuthContext)
}