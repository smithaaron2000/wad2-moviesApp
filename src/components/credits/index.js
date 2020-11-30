// import React, { useEffect, useState } from "react";
// import { getCredits } from "../../api/tmdb-api";
// import "../../globals/fontawesome";

// export default ({ movie }) => {
//   const [credits, setCredits] = useState([]);

//   useEffect(() => {
//    // console.log(getCredits(movie.id).res)
//     getCredits(movie.id).then(credits => {

//       setCredits(credits);

//     });
//   }, []);

//   return(
//     <div>
//       <h3>Credits (Cast and Crew)</h3>
//       <div className= "row credits bg-info">
//     <table className="table table-striped table-bordered table-hover">
//       <thead>
//         <tr>
//           <th scope="col">Name</th>
//           <th scope="col">Character</th>
//         </tr>
//       </thead>
//       <tbody>
//         {credits.map(r => {
//             return (
//               <tr key={r.id}>
//                 <td>{r.name}</td>
//                 <td>{r.character}</td>
//               </tr>
//             );
//           })}
//       </tbody>
//     </table>
//     </div>
//     </div>
//   );
// };

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
      {/* <Link to={`/credits/${r.id}`}> */}
        <img
          className="card-img-tag center "
          alt={r.name}
          src={
            r.profile_path
              ? `https://image.tmdb.org/t/p/w500/${r.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        {/* </Link> */}
        <div className="card-body">
          <h4 className="card-title ">{r.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
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