import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { useAuth0 } from "@auth0/auth0-react";


const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const { isAuthenticated } = useAuth0();
  const movies = context.toprated.filter((m) => {
    return !("favorites" in m);
  
  });

  return (
    isAuthenticated && (
      <PageTemplate 
        title='Top Rated Movies'
        movies={movies}
        action={(toprated) => {
          // return <AddToFavoritesButton movie={toprated} /> 
        }}
      />
    )
  );
};

export default TopRatedMovieListPage;