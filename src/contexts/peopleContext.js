
import React, { useEffect, createContext, useReducer } from "react";
import { getPopularPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    
    case "load":
      return { people: action.payload.people};

    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { people: [] });


  useEffect(() => {
    getPopularPeople().then((people) => {
      dispatch({ type: "load", payload: { people } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;