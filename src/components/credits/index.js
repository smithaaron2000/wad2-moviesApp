import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCredits } from "../../api/tmdb-api";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, []);
  return(
    <div>
      <h3>Credits (Cast and Crew)</h3>
      <div className= "row movies bg-info">
        {credits.map(r => {

  return(

    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/popularpeople/${r.id}`}>
        <img
          className="card-img-tag center "
          alt={r.name}
          src={
            r.profile_path
              ? `https://image.tmdb.org/t/p/w500/${r.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{r.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "user"]} />
            <span> {r.character}</span>
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