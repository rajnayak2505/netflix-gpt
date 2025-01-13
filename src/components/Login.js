import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const [isSignInForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const [customMsg, setCustomMsg] = useState("Invalid Credential")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const name = useRef(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handelFormButton = () => {
        //validate the form data
        // console.log(email.current.value)
        // console.log(password.current.value)
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/41257462?v=4&size=64"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    navigate("/browse")
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  })
                // console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user)
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorMessage.includes('auth/invalid-credential')) {
                }
                setErrorMessage(customMsg)
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm)
    }


    return(
        <>
        <Header/>
            <div className="login">
                <div className="login h-lvh bg-cover fixed top-0 right-0 bottom-0 left-0" style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg')"}}>
                </div>
                <div className="bg-divcenter w-fit h-fit absolute right-0 top-0 bottom-0 left-0 m-auto z-20 p-20 text-white ">
                    <div className="text-4xl font-bold mb-6 ">{isSignInForm? "Sign In" : "Sign Up"}</div>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-80">
                    {!isSignInForm && <input 
                        ref={name}
                        className="p-3 bg-bginput rounded-sm border-solid border-2 border-white-100 mb-6" type="text" placeholder="Name"></input>}
                        <input 
                        ref={email}
                        className="p-3 bg-bginput rounded-sm border-solid border-2 border-white-100 mb-6" type="text" placeholder="Email"></input>
                        <input 
                        ref={password}
                        className="p-3 bg-bginput rounded-sm border-solid border-2 border-white-100 mb-6 " type="password" placeholder="Password"></input>
                        <span className="text-red-500 mb-5">{errorMessage}</span>
                        <button 
                        onClick={handelFormButton}
                        className="p-3 rounded-md bg-nfred font-bold mb-7">{isSignInForm? "Sign In" : "Sign Up"}</button>
                        <div className="font-thin">{isSignInForm? "New to Netflix?" : "Already user?"} <span onClick={toggleSignInForm} className="cursor-pointer hover:underline text-white font-bold">{isSignInForm? "Sign up now." : "Sign in"}</span></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;