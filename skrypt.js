var rateOne = document.getElementById('R1');
var rateTwo = document.getElementById('R2');
var rateThree = document.getElementById('R3');
var rateFour = document.getElementById('R4');
var rateFive = document.getElementById('R5');




var submitBt = document.getElementById('submitB');
var secondCard = document.getElementById('second-card');
var firstCard = document.getElementById('first-card');

submitBt.disabled = true;


rateOne.addEventListener('focus', function () {
    submitBt.disabled = false;
    var rating = document.getElementById('result')
    rating.innerHTML = 'Dałeś nam 1 na 5';
    
});
rateTwo.addEventListener('focus', function () {
    submitBt.disabled = false;
    var rating = document.getElementById('result')
    rating.innerHTML = 'Dałeś nam 2 na 5';
    
});
rateThree.addEventListener('focus', function () {
    submitBt.disabled = false;
    var rating = document.getElementById('result')
    rating.innerHTML = 'Dałeś nam 3 na 5';
    
});
rateFour.addEventListener('focus', function () {
    submitBt.disabled = false;
    var rating = document.getElementById('result')
    rating.innerHTML = 'Dałeś nam 4 na 5';
    
});
rateFive.addEventListener('focus', function () {
    submitBt.disabled = false;
    var rating = document.getElementById('result')
    rating.innerHTML = 'Dałeś nam 5 na 5';
    
});


submitBt.addEventListener('click', function () {
    secondCard.classList.remove('inactive');
    firstCard.classList.add('inactive');
});
