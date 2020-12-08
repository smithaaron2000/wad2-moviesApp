import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PersonHeader = ({ person }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {person.name}
          {"  "}
          <a href={person.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default PersonHeader;