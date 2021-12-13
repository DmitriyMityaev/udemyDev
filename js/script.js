'use strict';

let numberOfFolms = prompt('How many films you whathed?', '');
let personalMovieDB = {
  count: numberOfFolms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

let nameFilm = prompt('1st of the last films?', '');
let rateFilm = prompt('Your raiting of this film?', '');
let nameFilm2 = prompt('1st of the last films?', '');
let rateFilm2 = prompt('Your raiting of this film?', '');

personalMovieDB.movies[nameFilm] = rateFilm;
personalMovieDB.movies[nameFilm2] = rateFilm2;
