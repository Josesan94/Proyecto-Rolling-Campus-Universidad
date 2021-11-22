import React, { Children, createContext,useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {
     
    const [user, setUser] = useState(null);


    const auth = {
        user,
        algo:"user algo",
        isLogged: () =>  user.id ? true : false,
        login,
        logout
    }

function    login() {
          setUser({id:1, name:"user logged"})
    }

    function logout() {
        setUser(null)
    }



    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
