import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";


const AddToFavoritePeopleButton = ({ people }) => {
  const context = useContext(PeopleContext);

  const handleAddToFavoritePeople = e => {
    e.preventDefault();
    context.addToFavoritePeople(people.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavoritePeople}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoritePeopleButton;