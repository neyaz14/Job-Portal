import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signout = () => {
        return signOut(auth);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
                    .then(res => {
                        // console.log("Login token",res.data)
                        setLoading(false);
                    })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials:true})
                .then(res=> {
                    // console.log('logOut',res.data)
                    setLoading(false);
                })
            }
            
        })
        return () => {
            unsubscribe();
        }
    }, [])




    const authInfo = {
        user, loading, createUser, login
        , signout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;