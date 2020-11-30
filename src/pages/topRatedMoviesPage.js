import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {
    return !("favorites" in m);
  });

  return (
      <PageTemplate 
        title='Top Rated Movies'
        movies={movies}
        action={(toprated) => {
          // return <AddToFavoritesButton movie={toprated} /> 
        }}
      />
  );
};

export default TopRatedMovieListPage;