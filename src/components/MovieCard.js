import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath, title }) => {

  if(!posterPath) return null;

  return (
    <div>
        <Link to="/watch">
          <img className="max-w-44 mx-3 text-white" alt={title} src={IMG_CDN_URL + posterPath} />
        </Link>
    </div>
  )
}

export default MovieCard;