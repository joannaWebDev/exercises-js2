/*
================
You are given the following list of movies
================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
/*Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"*/
function showMovies(){
  movies.forEach(movie => {
    const allMovies = document.getElementById('all-movies');
    const paragraph = document.createElement('p');
    paragraph.innerText = `${movie.title} - ${movie.director}`;
    allMovies.appendChild(paragraph)
  })
  const moviesNumber = document.getElementById('movies-number');
  moviesNumber.innerText = movies.length;
}
setTimeout(showMovies, 1000);//se ejectuta primero

/*Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?
// create a new movie object for your favorite movie
// create addMovies function*/
var myMovies = [
  {
    title: 'Matrix',
    director: 'Wakowski Sisters',
    type: 'Sci Fi',
    haveWatched: true
  },
  {
    title: 'Titanic',
    director: 'James Cameron',
    type: 'drama',
    haveWatched: false
  },
  {
    title: 'Joker',
    director: 'Todd Phillips',
    type: 'comedia',
    haveWatched: true
  }
]

function addMovies(movie) {
  document.querySelectorAll('p:not([class])').forEach(p => p.remove()); 
  movies.push(movie);
  setTimeout(showMovies, 1000);//se ejecuta tercero
}

/* Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks
 */
setTimeout(() =>addMovies(myMovies[0]) ,2000) //se ejecuta segundo

/* Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3 */
function createMovieObject(title, director, type, haveWatched) {
  const movie = {
    title: title,
    director: director,
    type: type,
    haveWatched: haveWatched
  }
  return movie
}


document.getElementById('save').addEventListener('click', event=> {
  event.preventDefault();
//obtener los valores de los inputs
  const title = document.getElementById('input-title').value;
  const director = document.getElementById('input-director').value;
  const type = document.getElementById('input-type').value;
  const haveWatched = document.getElementById('input-watched').checked;

  const newMovie = createMovieObject(title, director, type, haveWatched); //son las 4 variables mostradas en el objeto movie
  addMovies(newMovie);

})



