# Assignment 1 - ReactJS app.

Name: Aaron Tierney Smith
Student Number: 20084822

## Features.
 
 + Feature 1 - Watch List Page created: add movies from the upcoming movies to a Watch List page.
 + Feature 2 - Top Rated Movies endpoint: Shows the Top Rated Movies in a new Top Rated page.
 + Feature 3 - Credits endpoint: Shows the Cast for a specific movie (using the movie.id).
 + Feature 4 - Similar Movies: Shows the similar movies for a specific movie (using the movie.id).
 + Feature 5 - Popular People endpoint: Similar to the Home Page, only it shows People instead of movies.
 + Feature 6 - People Details endpoint: Displays the details of a person upon clicking on their image (either in the Popular People Page or the Cast in a movie)
 + Feature 7 - People Credits endpoint: Upon navigating to a person's details page, you can also view their TV/Movie Credits.
 + Feature 8 - Contact Form where the data received is managed in Firebase (Cloud Firestore).
 + Feature 9 - Public/Private Routes.
 + Feature 10 - External Authentication through the use of Auth0 - you must be logged in to access certain features.

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
+ https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US

## App Design.

### Component catalogue (If required).

![][storybookFeatures]

### UI Design.

![][watchList]
>Page displaying movies added to watch list from upcoming movies.

![][topRated]
>Page displaying the top rated movies.

![][cast]
>Displays the Cast on the movie Details page by pressing the "Show Credits" button.

![][similar]
>Displays similar Movies on the movie Details page by pressing the "Show Similar Movies" button.

![][popularPeople]
>Page displaying popular people.

![][personDetails]
> Page displaying person details and their TV/Movie Credits

![][contactUs]
>Displays the contact form.

## Routing.

+ /movies/watchlist (private) - displays all movies user added to their watch list.
+ /movies/toprated (private) - displays top rated movies.
+ /movies/movie.id/credits (public) - displays the credits of a specific movie.
+ /movies/movie.id/similar (public) - displays movies similar to a specific movie.
+ /people/popularpeople (public) - displays popular people.
+ /people/popularpeople/person.id (public) - displays the details and TV/Movie Credits of a specific person.
+ /contactus (public) - displays the contact form.

### Data hyperlinking.

![][movieCastToPersonDetails]
> Clicking a person card in the credits of a movie redirects you to the display of that person's details.

![][personToMovies]
>Clicking a movie card in person details redirects you to the display of that movie details.

![][popularPeopleToPersonDetails]
>Clicking a person card in popular people page redirects you to the display of that person details.

![][similarMoviesToMovieDetails]
>Clicking a movie card in similar movies redirects you to the display of that movie details.

![][topRatedToMovieDetails]
>Clicking a movie card in the top rated page redirects you to the display of that movie details.

## Independent learning (If relevant).

+ I created a Contact Form where the data was sent to Firebase (Cloud Firestore).
> https://www.youtube.com/watch?v=RKj3OjgftXc&t=1125s

> src\components\contactForm
> src\components\firebase\firebase.js

+ I implemented Authentication through the use of Auth0, thus implementing private routes.
> https://www.youtube.com/watch?v=MqczHS3Z2bc
> https://www.youtube.com/watch?v=NuCZgR09csE

> src\components\buttons\loginButton.js
> src\components\buttons\logoutButton.js
> src\components\profiles\profile.js
> src\components\routes\privateRoutes.js


---------------------------------

[storybookFeatures]: ./public/storybookFeatures.png
[movieCastToPersonDetails]: ./public/movieCastToPersonDetailsLink.png
[personToMovies]: ./public/personToMoviesLink.png
[popularPeopleToPersonDetails]: ./public/popularPeopleToPersonDetailsLink.png
[similarMoviesToMovieDetails]: ./public/similarMoviesToMovieDetailsLink.png
[topRatedToMovieDetails]: ./public/topRatedMoviesLink.png

[watchList]: ./public/watchList.png
[topRated]: ./public/topRated.png
[similar]: ./public/similarMovies.png
[cast]: ./public/castMovieDetailsPage.png
[popularPeople]: ./public/popularPeoplePage.png
[personDetails]: ./public/personDetails.png
[contactUs]: ./public/contactUs.png