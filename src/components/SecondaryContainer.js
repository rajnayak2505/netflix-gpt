import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        movies && (
        <div className="bg-black ">
            <div className=" -mt-52 relative z-10">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
            </div>
        </div>
        )
    )
};

export default SecondaryContainer;