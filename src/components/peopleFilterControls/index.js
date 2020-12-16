import React, { useContext } from "react";
import "./peopleFilterControls.css";
import { PeopleContext } from '../../contexts/peopleContext' 

const PeopleFilterControls = props => {
  const context = useContext(PeopleContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Name Search"
            onChange={handleTextChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default PeopleFilterControls;