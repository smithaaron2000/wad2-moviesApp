import React from "react";
//import similarMovies from "../similarMovies";
import "./personDetails.css";
//import { Link } from "react-router-dom";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.biography}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Hometown
        </li>
        <li key="rdv" className="list-group-item ">
          {person.place_of_birth}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        <li key="rdv" className="list-group-item ">
          {person.known_for_department}
        </li>
      </ul>

      
    </>
  );
};