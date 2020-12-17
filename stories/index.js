import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import PersonHeader from "../src/components/headerPersonList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import PersonDetails from "../src/components/personDetails";
import MovieHeader from "../src/components/headerMovie";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";

import { action } from "@storybook/addon-actions";
import PersonCard from "../src/components/personCard";
import PersonListHeader from "../src/components/headerPersonList";
import PeopleList from "../src/components/personList";

const sampleMovie = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const samplePerson = {
  "adult": false,
  "also_known_as": [
    "안야 테일러-조이",
    "Άνια Τέιλορ-Τζόι",
    "Аня Тейлор-Джой",
    "安雅·泰勒-乔伊"
  ],
  "biography": "Anya Josephine Marie Taylor-Joy (born 16 April 1996) is an American-born Argentine-British actress. She first became known for making appearances on the fantasy series Atlantis (2015), and had her breakthrough with the period horror film The Witch (2015), for which she earned several accolades. She gained further recognition and praise for her role as Casey Cooke in the psychological horror films Split (2016) and Glass (2019), Lily Reynolds in the black comedy Thoroughbreds (2017) and Emma Woodhouse in the comedy-drama Emma (2020). She garnered critical acclaim for her performance as Beth Harmon in the Netflix miniseries The Queen's Gambit (2020).",
  "birthday": "1996-04-16",
  "deathday": null,
  "gender": 1,
  "homepage": null,
  "id": 1397778,
  "imdb_id": "nm5896355",
  "known_for_department": "Acting",
  "name": "Anya Taylor-Joy",
  "place_of_birth": "Miami, Florida, USA",
  "popularity": 42.657,
  "profile_path": "/hwpqQBzL3vVSppnMIINc2RCHXgn.jpg"
};


storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sampleMovie}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sampleMovie, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sampleMovie, sampleMovie, sampleMovie, sampleMovie, sampleMovie];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sampleMovie} />);

  storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
    <MovieDetails movie={sampleMovie} />
  ));

  //////////////////////////////////////////////////////

  storiesOf("Popular People Page/PersonCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <PersonCard
      person={samplePerson}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...samplePerson, profile_path: undefined };
    return (
      <PersonCard
        person={sampleNoPoster}
      />
    );
  });

storiesOf("Popular People Page/PersonList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const people = [samplePerson, samplePerson, samplePerson, samplePerson, samplePerson];
    return (
      <PeopleList
        people={people}
      />
    );
  });

  storiesOf("Person Details Page/PersonHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonHeader person={samplePerson} />);

  storiesOf("Person Details Page/PersonDetails", module).add("default", () => (
    <PersonDetails person={samplePerson} />
  ));


  