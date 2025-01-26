import { useSelector } from "react-redux"
import { langs } from "../utils/languageConstants"

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="bg-black w-1/2 h-56 pt-10 opacity-90 m-auto">
        <form className="flex justify-center">
            <input className="w-9/12 bg-white rounded-sm p-3 border-none text-lg opacity-100" type="text" placeholder={langs[langKey].gptPlaceholder}/>
            <button className="w-1/6 bg-red-600 text-white text-lg rounded-sm px-3 py-2"> { langs[langKey].search }</button>
        </form>
    </div>
  )
}

export default GptSearchBar