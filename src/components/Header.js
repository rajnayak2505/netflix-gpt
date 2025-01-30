import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView, toggleProfileDropDown } from "../utils/gptSlice";
import {langs, SUPPORTED_LANGS} from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store => store.user));
    const showGptSearch= useSelector(store => store.gpt.showGptSearch);
    const profileDropDown= useSelector(store => store.gpt.profileDropDown);

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

    const handleProfileClick = (e) => {
        dispatch(toggleProfileDropDown())
    }

    return(
        <>
        {( user &&
            <div className="header w-screen h-20 bg-black flex justify-between align-middle p-4 pe-8 fixed z-20">
                <img className="w-40" src={LOGO}/>
                <div>
                   <div className="flex">
                       <button className="text-white text-sm pr-2 pl-2 bg-slate-600 rounded-sm mr-1"
                       onClick={handleGptSearchClick}
                       >{showGptSearch?"Home":"GPT Search"}</button>
                    <div 
                        onClick={handleProfileClick}
                        className="cursor-pointer flex justify-end ">
                            <img className="w-10 inline" src={user.photoURL} alt="User Image"/>
                            <span className="relative -top-1">🔽</span>
                        </div>
                   </div>
                    { profileDropDown && <div className="auth-head bg-black h-16 w-36 text-center pt-2 pb-2 border-2 border-white">
                        {showGptSearch && <select className="" onChange={handleLanguageChange}>
                            {SUPPORTED_LANGS.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>}
                        <div className="">
                            <p className="text-white text-sm">{user.displayName}</p>
                        </div>
                        <button onClick={handleSignedOut} className=" text-white rounded-sm ">Logout</button>
                    </div>}
                </div>
            </div>
            )}
        </>
    );
}

export default Header;