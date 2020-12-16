import React, { useContext } from "react";
import PeoplePageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'
//import AddToFavoriteButton from '../components/buttons/addToFavorites'


const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people;


  return (
      <PeoplePageTemplate 
        name='No. People'
        people={people}
        action={(person) => {
          //return <AddToFavoriteButton movie={movie} /> 
          
        }}
      />
  );
};

export default PeopleListPage;