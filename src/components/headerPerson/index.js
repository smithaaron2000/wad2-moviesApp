import React from "react";
import "../../globals/fontawesome";

const PersonHeader = ({ person }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {person.name}
          {"  "}
        </h2>
      </div>
    </div>
  );
};

export default PersonHeader;