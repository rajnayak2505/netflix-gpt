import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {

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

    

    return(
        <div className="body">
            <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;