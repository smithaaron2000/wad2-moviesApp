import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch  } from "react-router-dom";
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
import ContactUsPage from "./pages/contactUsPage";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
//import PrivateRoute from "./components/routes/privateRoutes";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
      <MoviesContextProvider>
      <GenresContextProvider>
        <PeopleContextProvider>
        <Switch>
           <Route exact path="/contactus" component ={ContactUsPage} />
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

ReactDOM.render(
  <Auth0Provider
    domain = { domain }
    clientId = { clientId }
    redirectUri = {window.location.origin}>
<App /> 
</Auth0Provider>,
document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById("root"));