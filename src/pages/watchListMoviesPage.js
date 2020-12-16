import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { useAuth0 } from "@auth0/auth0-react";

const WatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const { isAuthenticated } = useAuth0();
  const watchlist = context.upcoming.filter( m => m.watchlist )

  return (
    isAuthenticated && (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    )
  );
};

export default WatchListMoviesPage;