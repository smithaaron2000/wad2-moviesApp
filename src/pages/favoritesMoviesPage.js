import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { useAuth0 } from "@auth0/auth0-react";

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const { isAuthenticated } = useAuth0();
  const favorites = context.movies.filter( m => m.favorite )


  return (
    isAuthenticated && (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    )
  );
};

export default FavoriteMoviesPage;