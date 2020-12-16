import React, { useState } from "react";
import PersonListHeader from "../headerPersonList";
import PeopleList from "../personList";
import PeopleFilterControls from "../peopleFilterControls";


const PeopleListPageTemplate = ({people, name, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  //const [genderFilter, setGenderFilter] = useState("0");
  //const gender = Number(genderFilter)
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
      //else setGenderFilter(value);
    };

  return (
    <>
      <PersonListHeader name={name} numPeople={displayedPeople.length} />
      <PeopleFilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
       action={action}
       people={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;