import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {langs, SUPPORTED_LANGS} from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((store => store.user))
    const showGptSearch= useSelector(store => store.gpt.showGptSearch)

    const handleSignedOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate('/browse')
            } else {
              dispatch(removeUser());
              navigate('/')
            }
          });  
          // unsubscribe when component unmounts
          return () => unsubscribe();        
    }, []);

    const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value));
    }

    return(
        <>
        {( user &&
            <div className="header w-screen h-20 bg-black flex justify-between align-middle p-4 pe-8 fixed z-20">
                <img className="w-40" src={LOGO}/>
                    <div className="flex justify-center align-middle">
                        {showGptSearch && <select className="mr-5 h-9" onChange={handleLanguageChange}>
                            {SUPPORTED_LANGS.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>}
                        <button className="text-white px-5 bg-slate-600 rounded-sm"
                        onClick={handleGptSearchClick}
                        >{showGptSearch?"Home":"GPT Search"}</button>
                        <div className="mx-5">
                            <p className="text-white text-sm">{user.displayName}</p>
                            <img className="w-10" src={user.photoURL} alt="User Image"/>
                        </div>
                        <button onClick={handleSignedOut} className=" text-white px-5 bg-red-600 rounded-sm ">Logout</button>
                    </div>
            </div>
            )}
        </>
    );
}

export default Header;