import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    signOut
}
    from "firebase/auth";
import initializeAuthebtication from "../firebase/firebase.init";
initializeAuthebtication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    /* create user manually */
    const createUseruSignEmailAndPassword = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                Swal.fire({
                    icon: 'success',
                    title: 'Wow, Sign Up Successful!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'ok',
                    timer: 1500
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                if ('auth/email-already-in-use' === errorCode) {
                    Swal.fire({
                        title: 'This eamil already used!',
                        text: "Please use another email address!",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ok'
                    });
                }
            })
            .finally(() => setIsLoading(false));
    }

    /* sign with eamil and password */
    const signInUsingEmailAndPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                if ('auth/user-not-found' === errorCode) {
                    Swal.fire({
                        title: 'User not exist!',
                        text: "Please create an account first",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ok'
                    });
                } else if ('auth/wrong-password' === errorCode) {
                    Swal.fire({
                        title: 'Password mismatch!',
                        text: "Please put a valid password",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ok'
                    });
                }
            })
            .finally(() => setIsLoading(false));
    }

    /* sign with github */
    const signWithGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
            })
            .finally(() => setIsLoading(false));
    }

    /* google signin */
    const signWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    /* observe whether user auth state changed or not    */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    /* logout system */
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setIsLoading(false));
    }

    return {
        createUseruSignEmailAndPassword,
        signInUsingEmailAndPassword,
        user,
        signWithGoogle,
        signWithGithub,
        logOut,
        isLoading
    }
}

export default useFirebase;