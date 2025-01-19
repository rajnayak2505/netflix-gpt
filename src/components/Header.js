import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector((store => store.user))

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

    return(
        <>
        {( user &&
            <div className="header w-screen h-20 bg-black flex justify-between align-middle p-4 pe-8 fixed z-10">
                <img className="w-40" src={LOGO}/>
                    <div className="flex">
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