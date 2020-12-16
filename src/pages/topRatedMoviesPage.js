import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { useAuth0 } from "@auth0/auth0-react";


const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const { isAuthenticated } = useAuth0();
  const movies = context.toprated;
  
  return (
    isAuthenticated && (
      <PageTemplate 
        title='Top Rated Movies'
        movies={movies}
        action={(toprated) => {
           //return <AddToFavoritesFromTopRatedButton toprated={toprated} /> 
        }}
      />
    )
  );
};

export default TopRatedMovieListPage;