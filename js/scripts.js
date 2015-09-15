function Ticket(movieTitle, matinee, newRelease, userAge) {
    this.movieTitle = movieTitle;
    this.matinee = matinee;
    this.newRelease = newRelease;
    this.userAge = userAge;
}

Ticket.prototype.price = function() {
    if ((this.matinee === true) || (this.newRelease === false) || (this.age >= 65)) {
        return 5;
    } else {
        return 10;
    }
}


function Movie (movieTitle, times, newRelease) {
    this.movieTitle = movieTitle;
    this.times = times;
    this.newRelease = newRelease;
}

var movies = [];

var straightOuttaCompton = new Movie("Straight Outta Compton", ["1000", "1215", "1630", "1945", "2200"], false);
var madMax = new Movie("Mad Max: Fury Road", ["1030", "1200", "1645", "1900", "2115"], false);
var jurassicWorld = new Movie("Jurassic World", ["1245", "1600", "1915", "2000"], false);
var everest = new Movie("Everest", ["1030", "1200", "1645", "1900", "2115"], true);
var mazeRunner = new Movie("Maze Runner: The Scorch Trials", ["1000", "1215", "1630", "1945", "2200"], true);
var starWars = new Movie("Star Wars: The Force Awakens", ["23:59"], true);

movies.push(straightOuttaCompton, madMax, jurassicWorld, everest, mazeRunner, starWars);
