import { useDispatch, useSelector } from "react-redux"
import { langs } from "../utils/languageConstants"
import { useRef } from "react";
import { API_OPTIONS, GEMINIAI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieTMDB = async(movieList) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieList}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json();
    return json.results;
   }

  const handelGptSearchClick = async () => {
    // const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const query = "act as a only movie recommendation system and suggest for the query: "+ searchText.current.value+ "provide only list of five movies with comma separated"
    try {
      // const result = await model.generateContent("provide only list of five movies with comma separated"+ query);
      // if(!result.response.text()){
      //   // Write error
      // }
      // const movieList = result.response.text().split(",");
      const movieList = ['Phir Hera Pheri', ' Hera Pheri', ' Golmaal', ' Jaane Tu... Ya Jaane Na', ' Fukrey\n']
      // console.log(movieList);
      const promiseArray = movieList.map(movie => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray)
      // console.log(tmdbResults)
      dispatch(addGptMovieResult({movieNames: movieList, movieResults: tmdbResults}))
    } catch (error) {
      console.error("Error:", error);
    }
  };

   

  return (
    <div className="w-screen bg-black h-36 p-10 opacity-90 m-auto">
        <form className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            className="w-screen bg-white rounded-sm p-3 border-none text-sm opacity-100" type="text" placeholder={langs[langKey].gptPlaceholder}/>
            <button className="w-20 bg-red-600 text-white text-lg rounded-sm px-3 py-2" onClick={handelGptSearchClick}> { langs[langKey].search }</button>
        </form>
    </div>
  )
}

export default GptSearchBar