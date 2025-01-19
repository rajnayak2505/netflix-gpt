import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store => store.user))

    const handleSignedOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    };

    return(
        <>
            <div className="header h-20 bg-black flex justify-between align-middle p-4 pe-8">
                <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
                {( user &&
                    <button onClick={handleSignedOut} className=" text-white px-5 bg-red-600 rounded-sm ">Logout</button>
                )}
            </div>

            <div className="header relative top-0 right-0 bottom-0 left-0 w-lvw h-lvh bg-black opacity-50 z-10"></div>
            <img className="w-60 absolute top-5 left-5 z-20 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        </>
    );
}

export default Header;