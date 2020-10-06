/*
	MoviesFinder
	Write a function that given an array of movies return the first result that matches with the name, if there is not any match return null
	Find is not case sensitive, club should be equal to CLUB in the function
*/

const bestMovies = [
	"The Shawshank Redemption",
	"The Godfather",
	"The Godfather: Part II",
	"The Dark Knight",
	"12 Angry Men",
	"Schindler\"s List",
	"Pulp Fiction",
	"The Lord of the Rings: The Return of the King",
 	"Il buono, il brutto, il cattivo",
 	"Fight Club",
	"The Lord of the Rings: The Fellowship of the Ring",
	"Forrest Gump",
	"Star Wars: Episode V - The Empire Strikes Back",
];

const find = (movies, titleToSearch) => {
	// YOUR CODE HERE
	for (let i=0; i< movies.length; i++){
		if(movies[i].toLowerCase()===titleToSearch.toLowerCase()){
			return movies[i];
		}
	}		
	return null;
}

console.log("Searching Fight Club as a best movie: " + find(bestMovies,"Fight club"));
console.log("Searching Titanic as a best movie: " + find(bestMovies,"Titanic"));


