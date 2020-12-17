import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated;
  
  return (
      <PageTemplate 
        title='Top Rated Movies'
        movies={movies}
        action={(toprated) => {
           //return <AddToFavoritesFromTopRatedButton toprated={toprated} /> 
        }}
      />
  );
};

export default TopRatedMovieListPage;