import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);


    return(
        <div>
           <iframe className="w-screen h-screen" src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&loop=1&rel=0`} title="YouTube video player" autoPlay ></iframe>
        </div>
    )
};

export default VideoBackground;