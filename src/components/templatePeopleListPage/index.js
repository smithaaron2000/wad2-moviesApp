import React, { useState } from "react";
import PersonListHeader from "../headerPersonList";
import PeopleList from "../personList";
import PeopleFilterControls from "../peopleFilterControls";


const PeopleListPageTemplate = ({people, name}) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
    };

  return (
    <>
      <PersonListHeader name={name} numPeople={displayedPeople.length} />
      <PeopleFilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
       people={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;