let ratings = document.querySelectorAll('.circle');
let btn = document.getElementById('btn');
let thankYou = document.querySelector('.thankYou');
let span = document.getElementById('rating');
let header = document.getElementById('header');
let star = document.querySelector('.star');
let paragraph = document.querySelector('.p-1');
let list = document.querySelector('.list');

//Loop through the rating values
for (let i = 0; i < ratings.length; i++) { 
    ratings[i].addEventListener('click', () => {
        //Aquire the selected value
        let rating = ratings[i].innerHTML;

        //Loop through to check for selected value and to switch rating if the user chooses
        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected');
        }
        //Add selected rating
        ratings[i].classList.add('selected');

        //Replace the rating options with Thank You screen once rating has been selected and submitted

        btn.addEventListener('click', () => {
            header.style.display = 'none';
            star.style.display = 'none';
            paragraph.style.display = 'none';
            list.style.display = 'none';
            btn.style.display = 'none';
            span.innerHTML = rating;
            thankYou.style.display = 'block';
        });

    });
}


