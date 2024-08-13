import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  return (
    <button
      onClick={() => onToggleFavorite(id)}
      className="favorite-button"
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
