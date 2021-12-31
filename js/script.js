'use strict';

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('How many films you whathed?', '');

  while(!numberOfFilms) {
    numberOfFilms = +prompt('How many films you whathed?', '');
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms () {
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
}

rememberMyFilms ();

function detectPersonalLevel () {
  if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are classic film viewer');
  } else if(personalMovieDB.count < 10) {
    alert('Few film watched');
  } else {
    alert('You are movie fan!');
  }
}

detectPersonalLevel();

function showMyDB () {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  }
}



function writeYourGenres() {
  for(let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}:`);
  }
  console.log(personalMovieDB);
}

writeYourGenres();

/* 
function ucFirst(str) {

  //if(!str) return console.log('пустая строка');

  return str.charAt(0).toUpperCase() + str.slice('1');
}

console.log( ucFirst('') ); */


/* function checkSpam(str) {
  let strLowerCase = str.toLowerCase();
  
  return console.log( strLowerCase.includes('viagra') || strLowerCase.includes('xxx') );
}

checkSpam('xx x sdwxxxqwd'); */




/* function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    console.log( str.slice(0, maxlength - 1) ) + '...' : console.log(str);
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20); */

/* function extractCurrentcyValue(str) {
  return console.log( +str.slice(1) );
}

extractCurrentcyValue('$1299'); */