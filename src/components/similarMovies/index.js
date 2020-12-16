import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ movie }) => {
  const [similarMovies, setSimilars] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then(similarMovies => {
      setSimilars(similarMovies);
    });
  }, []);
  return(
    <div>
      <div className= "row movies bg-info">
        {similarMovies.map(r => {

  return(

    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${r.id}`}>
        <img
          className="card-img-tag center "
          alt={r.title}
          src={
            r.poster_path
              ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{r.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {r.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {r.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
    
  );
}
)
}
</div>
</div>
);
};