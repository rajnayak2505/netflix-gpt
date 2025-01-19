import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // early return [if movies is null]
    if(!movies) return;
    const randomMovieId = Math.floor(Math.random() * 20);
    const mainMovie = movies[randomMovieId];
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;
    return(
        <div>
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
};

export default MainContainer;
