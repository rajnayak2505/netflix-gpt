import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNoPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    
    
    return(
        <div className="browse overflow-hidden">
            <Header/>
            {
                showGptSearch ? 
               ( <GptSearch/>) :
                (<>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>)
            }
        </div>
    );
}

export default Browse;