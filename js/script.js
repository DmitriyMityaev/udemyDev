'use strict';

let numberOfFolms = +prompt('How many films you whathed?', '');
let personalMovieDB = {
  count: numberOfFolms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

outer:
for(let i = 0; i < 2; i++) {
  let nameFilm = prompt('One of the last films?', '');

  while(nameFilm){
    let rateFilm = prompt('Your raiting of this film?', '');
    personalMovieDB.movies[nameFilm] = rateFilm;
    continue outer;
  }

  if(!nameFilm) {
    i--;
    continue outer;
  }
  
}

if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('You are classic film viewer');
} else if(personalMovieDB.count < 10) {
  alert('Few film watched');
} else {
  alert('You are movie fan!');
}


