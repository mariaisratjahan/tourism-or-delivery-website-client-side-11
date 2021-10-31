import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from './../firebase/firebase.inti';
initializeFirebase();

const useFirebase = () => {  
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true)


    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
       .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
       
        user,setUser,signInUsingGoogle,loading,setLoading,logOut
       
    }
}

export default useFirebase;