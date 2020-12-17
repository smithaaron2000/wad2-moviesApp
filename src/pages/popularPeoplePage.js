import React, { useContext } from "react";
import PeoplePageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people;


  return (
      <PeoplePageTemplate 
        name='No. People'
        people={people}
      />
  );
};

export default PeopleListPage;