import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import FavoritesMoviesPage from './pages/favoritesMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListMoviesPage from "./pages/watchListMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
//import SimilarMoviesPage from "./pages/similarMoviesPage";
import PopularPeoplePage from "./pages/popularPeoplePage";
import PeopleContextProvider from "./contexts/peopleContext";
import PersonDetailsPage from "./pages/personDetailsPage";


const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
      <MoviesContextProvider>
      <GenresContextProvider>
        <PeopleContextProvider>
        <Switch>
          <Route exact path="/people/popularpeople/:id" component={PersonDetailsPage} />
          <Route exact path="/people/popularpeople" component={PopularPeoplePage} />
        <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
        <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoritesMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </PeopleContextProvider>
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));