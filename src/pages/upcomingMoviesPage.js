import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {
    return !("watchlist" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(upcoming) => {
          return <AddToWatchListButton movie={upcoming} /> 
        }}
      />
  );
};

export default MovieListPage;