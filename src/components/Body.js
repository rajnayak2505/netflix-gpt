import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
              dispatch(removeUser());
            }
          });          
    }, []);

    return(
        <div className="body">
            <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;