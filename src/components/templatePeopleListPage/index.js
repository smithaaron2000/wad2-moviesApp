import React, { useState } from "react";
import PersonListHeader from "../headerPersonList";
import PeopleList from "../personList";
//import FilterControls from "../filterControls";


const PeopleListPageTemplate = ({people, name, action}) => {
  const [nameFilter] = useState("");
  //const [knownFilter, setKnownFilter] = useState("0");
  //const known = Number(knownFilter)
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  return (
    <>
      <PersonListHeader name={name} numPeople={displayedPeople.length} />
      <PeopleList
       action={action}
       people={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;