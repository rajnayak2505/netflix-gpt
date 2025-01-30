import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    // console.log(movies)
    if(!movies) return;

  return (
    <div>
        <div className="movie-list pb-5">
            <h1 className="text-4xl p-3 pb-5 text-white">{title}</h1>
            <div className="movie-item flex">
                {movies?.map(movie => <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;