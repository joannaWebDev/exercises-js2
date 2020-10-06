/*
	MoviesFinder
    Step1: 
    - Write a function that given an array of movies return all the movies that include the text in their titles, if there is not any match return null
    - Filter is not case sensitive, club should be equal to CLUB in the function
    Step2:
    - Add to the function a new parameter 'minRate' , to filter only movies with a greater rate 
    - Add to the function a new parameter 'genre', to filter only movies that include this genre
*/

let movies = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "The Godfather: Part II",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "duration": "2h 32min",
      "genre": [
        "Action",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rate": 9
    },
    {
      "title": "12 Angry Men",
      "year": 1957,
      "director": "Sidney Lumet",
      "duration": "1h 36min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.9
    },
    {
      "title": "Schindler\"s List",
      "year": 1993,
      "director": "Steven Spielberg",
      "duration": "3h 15min",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],
      "rate": 8.9
    },
    {
      "title": "Pulp Fiction",
      "year": 1994,
      "director": "Quentin Tarantino",
      "duration": "2h 34min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.9
    },
    {
      "title": "The Lord of the Rings: The Return of the King",
      "year": 2003,
      "director": "Peter Jackson",
      "duration": "3h 21min",
      "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rate": 8.9
    },
    {
      "title": "Il buono, il brutto, il cattivo",
      "year": 1966,
      "director": "Sergio Leone",
      "duration": "3h 2min",
      "genre": [
        "Western"
      ],
      "rate": 8.9
    },
    {
      "title": "Fight Club",
      "year": 1999,
      "director": "David Fincher",
      "duration": "2h 19min",
      "genre": [
        "Drama"
      ],
      "rate": 8.8
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001,
      "director": "Peter Jackson",
      "duration": "2h 58min",
      "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rate": 8.8
    },
    {
      "title": "Forrest Gump",
      "year": 1994,
      "director": "Robert Zemeckis",
      "duration": "2h 22min",
      "genre": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "rate": 9.8
    },
    {
      "title": "Star Wars: Episode V - The Empire Strikes Back",
      "year": 1980,
      "director": "Irvin Kershner",
      "duration": "2h 4min",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy",
        "Sci-Fi"
      ],
      "rate": 8.8
    }
];


function filter(movies, text){
    // YOUR CODE HERE
}

console.log("Searching fi the result is: " + filter(bestMovies,"fi"));
console.log("Searching the the result is: " + filter(bestMovies,"the"));