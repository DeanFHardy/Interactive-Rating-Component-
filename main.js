//Ratig Options
const ratings = {
    bad: 1,
    average: 2,
    good: 3,
    great: 4,
    perfect: 5
}

//Run get Ratings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

function getRatings() {
    for(let rating in ratings){
        console.log(ratings[rating]);
    }
}

