//here is my api key http://www.omdbapi.com/?i=tt3896198&apikey=76eea785
//example of api http://www.omdbapi.com/?t=Harry+Potter&y=2002&plot=short&apikey=76eea785
//with the title year and plot which is on the website
function displayMovieInfo(movieData){
    console.log(movieData);

    //gets all the information from the api and put into variables
    const movieTitle = movieData.Title;
    const movieYear = movieData.Year;
    const movieRated = movieData.Rated;
    const movieReleased = movieData.Released;
    const movieRuntime = movieData.Runtime;
    const movieGenre = movieData.Genre;
    const movieDirector = movieData.Director;
    const movieWriter = movieData.Writer;
    const movieActors = movieData.Actors;
    const moviePlot = movieData.Plot;
    const movieAwards = movieData.Awards;
    const moviePoster = movieData.Poster;
    const movieRatings = movieData.imdbRating; 
    const movieBoxOffice = movieData.BoxOffice;

     // Update HTML
    document.getElementById("movieTitle").textContent = movieTitle;
    document.getElementById("movieYear").textContent = movieYear;
    document.getElementById("movieRated").textContent = movieRated;
    document.getElementById("movieReleased").textContent = movieReleased;
    document.getElementById("movieRuntime").textContent = movieRuntime;
    document.getElementById("movieGenre").textContent = movieGenre;
    document.getElementById("movieDirector").textContent = movieDirector;
    document.getElementById("movieWriter").textContent = movieWriter;
    document.getElementById("movieActors").textContent = movieActors;
    document.getElementById("moviePlot").textContent = moviePlot;
    document.getElementById("movieAwards").textContent = movieAwards;
    document.getElementById("moviePoster").src = moviePoster;
    document.getElementById("movieRatings").textContent = movieRatings;
    document.getElementById("movieBoxOffice").textContent = movieBoxOffice;
}


function useAPI(title, year, plot){
    //api searching with title year and plot
    const url = "http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=76eea785";


     // Fetch data from OMDb
    fetch(url)
        .then(response => response.json())
        .then(displayMovieInfo);

}

//function to get the data that the user entered on the website
function getUserInfo(){
    //value from the search
    const title = document.getElementById("titleSearch").value;
    const year = document.getElementById("YearSearch").value;
    const plot = document.getElementById("plotSearch").value;



    //checks if title search box is empty
    if (title === "") {
        errorMessage.textContent = "⚠️ Please enter a movie title.";
        errorMessage.style.display = "block"; // show the message
    }else {//else display movie information and use the api
        document.getElementById("movieInfo").style.display = "flex";
        document.getElementById("movieH3").style.display = "block";
        document.getElementById("movieDetails").style.display = "block";

        errorMessage.style.display = "none";
        useAPI(title, year, plot);
    }

}

//get the info from the textboxes
function searchClicked(){
    console.log("Search clicked");
  
    getUserInfo();
}
//Resets whats in the textboxes.
function resetClicked(){
    console.log("reset clicked");
    document.getElementById("movieInfo").style.display = "none";
    document.getElementById("movieH3").style.display = "none";
    // Clear input fields
    document.getElementById("titleSearch").value = "";
    document.getElementById("YearSearch").value = "";
    document.getElementById("plotSearch").value = "short"; // reset to default

    // Clear movie info
    document.getElementById("movieTitle").textContent = "";
    document.getElementById("movieYear").textContent = "";
    document.getElementById("movieRated").textContent = "";
    document.getElementById("movieReleased").textContent = "";
    document.getElementById("movieRuntime").textContent = "";
    document.getElementById("movieGenre").textContent = "";
    document.getElementById("movieDirector").textContent = "";
    document.getElementById("movieWriter").textContent = "";
    document.getElementById("movieActors").textContent = "";
    document.getElementById("moviePlot").textContent = "";
    document.getElementById("movieAwards").textContent = "";
    document.getElementById("moviePoster").src = "";
    document.getElementById("movieRatings").textContent = "";
    document.getElementById("movieBoxOffice").textContent = "";
}
//array used to store favourite movies
let favourites = [];

//adds movies to the favourite list
function addToFavourites() {
    const movie = {
        title: document.getElementById("movieTitle").textContent,
        year: document.getElementById("movieYear").textContent,
        poster: document.getElementById("moviePoster").src,
        plot: document.getElementById("moviePlot").textContent
    };

    // Avoid duplicates
    if (!favourites.find(fav => fav.title === movie.title && fav.year === movie.year)) {
        favourites.push(movie);
        console.log(`${movie.title} has been added to favourites!`);
        displayFavourites(); // update the list live
    } else {
        console.log(`${movie.title} is already in favourites!`);
    }
}


//function to display all the favourite movies in the array
function displayFavourites() {
    const container = document.getElementById("favouriteMovies");
    container.style.display = "flex"; //makes it visible
    // Clear previous content except the heading
    container.innerHTML = "<h3>Favourite Movies</h3>";
    //if there are no movies favourited
    if (favourites.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No favourites yet!";
        msg.style.color = "#555";
        container.appendChild(msg);
        return;
    }


    //displays all the movies in the array
    favourites.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("favMovie");

        // Poster
        const poster = document.createElement("img");
        poster.src = movie.poster || "";
        poster.alt = movie.title;

        // Details
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("favMovieDetails");

        const title = document.createElement("h4");
        title.textContent = `${movie.title} (${movie.year})`;

        const plot = document.createElement("p");
        plot.textContent = movie.plot;

        detailsDiv.appendChild(title);
        detailsDiv.appendChild(plot);

        movieDiv.appendChild(poster);
        movieDiv.appendChild(detailsDiv);

        container.appendChild(movieDiv);
    });
}

