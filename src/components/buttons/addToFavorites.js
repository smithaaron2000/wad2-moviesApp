import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const { isAuthenticated } = useAuth0();

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    isAuthenticated && (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
    )
  );
};

export default AddToFavoriteButton;