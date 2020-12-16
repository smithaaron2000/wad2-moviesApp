import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import SimilarMovie from "../components/similarMovies";
import Credits from "../components/credits"
import useMovie from "../hooks/useMovie";


const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <br/>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/credits`}
              >
                Show Credits
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Credits 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/credits`}
          render={props => <Credits movie={movie} {...props} />}
        />
        <br/>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Show Similar Movies
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Similar Movies 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/similar`}
          render={props => <SimilarMovie movie={movie} {...props} />}
        />
        {/* <Credits movie={movie} /> */}
        {/* <SimilarMovie movie={movie} /> */}
        
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
}

  export default withRouter(MoviePage);
