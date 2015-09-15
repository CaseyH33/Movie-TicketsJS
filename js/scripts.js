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
