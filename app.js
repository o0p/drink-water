const smallCups = document.querySelectorAll('.cup-small');
const l = document.getElementById('#l');
const percentage = document.getElementById('#percentage');
const remained = document.getElementById('#remained');

smallCups.forEach(function(cup, i) {
    cup.addEventListener('click', () => highlightCups(i));
});

function highlightCups(i) {

    smallCups.forEach(function(cup, i2){
        if (i2 <= i) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
}