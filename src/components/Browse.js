import useNowPlayingMovies from "../hooks/useNoPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
    

    return(
        <div className="browse overflow-hidden">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}

export default Browse;