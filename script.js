//here is my api key http://www.omdbapi.com/?i=tt3896198&apikey=76eea785
//example of api http://www.omdbapi.com/?t=Harry+Potter&y=2002&plot=short&apikey=76eea785
//with the title year and plot which is on the website
function displayMovieInfo(movieData){
    console.log(movieData);

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
    const movieRatings = movieData.imdbRating; // or you can dig into Ratings array
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

    const url = "http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=76eea785";


     // Fetch data from OMDb
    fetch(url)
        .then(response => response.json())
        .then(displayMovieInfo);

}

//function to get the data that the user entered on the website
function getUserInfo(){
    const title = document.getElementById("titleSearch").value;
    const year = document.getElementById("YearSearch").value;
    const plot = document.getElementById("plotSearch").value;


    useAPI(title,year,plot);
    console.log(title);
    console.log(year);
    console.log(plot);
}

//get the info from the textboxes
function searchClicked(){
    console.log("Search clicked");
    document.getElementById("movieInfo").style.display = "flex";
    document.getElementById("movieH3").style.display = "block";
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