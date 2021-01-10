const smallCups = document.querySelectorAll('.cup-small');
const l = document.getElementById('l');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

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
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        remained.style.height = 1;
        l.innerText = `${250 * fullCups / 1000}L`
    }
}