import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector(store => store.gpt);
  if(!movieNames || !movieResults) return null;
  // console.log(movieResults[1)

  return (
    <div className="movies-sugg bg-black">
      <h2 className="text-white">Search results:</h2>
      {movieNames.map((movieName, index) => (
      <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
      ))}
    </div>
  )
}

export default GptMovieSuggestions