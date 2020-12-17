import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButton from '../components/buttons/addToFavorites'
import Profile from '../components/profiles/profile';


const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <>
    <Profile />
      <PageTemplate
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoriteButton movie={movie} /> 
          }}
      />
      </>
  );
};

export default MovieListPage;