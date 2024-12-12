import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const googleProvider  = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const socialLoginGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                if(currentUser){
                    setUser(currentUser)
                }else{
                    setUser(null)
                }
                console.log(currentUser)
                setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        loading,
        createUser,
        signInUser,
        socialLoginGoogle,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;