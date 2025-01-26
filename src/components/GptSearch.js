import { LOGIN_BG_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="gpt-page mt-36">
       <div className="login h-lvh bg-cover fixed top-0 right-0 bottom-0 left-0 -z-10" style={{backgroundImage: LOGIN_BG_IMG}}></div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch