export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`

    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTopRatedMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getSimilarMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getCredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

    )
      .then(res => res.json())
      .then(json => json.cast);
  };

  export const getPopularPeople = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPerson = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then(res => res.json());
  };

  export const getPersonMovieCredits = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/6384/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };