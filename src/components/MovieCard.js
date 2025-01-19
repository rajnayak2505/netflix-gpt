import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath }) => {
  return (
    <div>
        <img className="max-w-44 mx-3" alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;