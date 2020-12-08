import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const SimilarMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.similar.filter((m) => {
    return !("watchlist" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(similar) => {
          return <AddToWatchListButton movie={similar} /> 
        }}
      />
  );
};

export default SimilarMovieListPage;