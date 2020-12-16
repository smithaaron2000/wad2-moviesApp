import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import LoginButton from "../buttons/loginButton";
import LogoutButton from "../buttons/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
};

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watch List 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/toprated">
              Top Rated 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/people/popularpeople">
              Popular People 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contactus">
              Contact Us 
            </Link>
          </li>
          <li className="nav-item">
            <AuthNav/>
          </li>
          {/* <li className="nav-item">
            <LogoutButton />
          </li> */}
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;