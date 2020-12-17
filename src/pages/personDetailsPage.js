import React from "react";
import { withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PersonPageTemplate from "../components/templatePersonPage";
import PersonMovieCredits from "../components/personCredits"
import usePerson from "../hooks/usePerson";


const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)
  return (
    <>
    {person ? (
      <>
        <PersonPageTemplate person={person}>
          <PersonDetails person={person} />
        </PersonPageTemplate>
        <PersonMovieCredits person={person} />
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
}

  export default withRouter(PersonPage);
