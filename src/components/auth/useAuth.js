import React, {useContext} from 'react'
import  { AuthContext } from './AuthProvider'

function useAuth() {
    
    const context = useContext(AuthContext)
    console.log('context',context);
    return context
}

export default useAuth;
