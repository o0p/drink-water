const smallCups = document.querySelectorAll('.cup-small');
const l = document.getElementById('#l');
const percentage = document.getElementById('#percentage');
const remained = document.getElementById('#remained');

smallCups.forEach(function(cup, i) {
    cup.addEventListener('click', () => highlightCups(i));
});

function highlightCups(i) {
    if (smallCups[i].classList.contains('full') 
    && !smallCups[i].nextElementSibling.classList.contains('full')) {
        i = i - 1;
    }
    smallCups.forEach(function(cup, i2){
        if (i2 <= i) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
}