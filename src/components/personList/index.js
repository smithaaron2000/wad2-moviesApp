import React from "react";
import Person from "../personCard/";
import "./peopleList.css";

const PeopleList = ({people, action}) => {
  const peopleCards = people.map(m => (
    <Person key={m.id} person={m} action={action} />
  ));
  return <div className="row movies bg-info">{peopleCards}</div>;
};

export default PeopleList;