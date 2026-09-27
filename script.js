// for rapidly changing variable use let instead of 'var'.
let currentDistance = 0;

const distanceDisplay = document.querySelector('#distance');

//buttons
const increaseButton = document.querySelector('#increase')
const decreaseButton = document.querySelector('#decrease')
const resetButton = document.querySelector('#reset')

//increase button
increaseButton.addEventListener("click", function () {
    currentDistance = currentDistance + 1;
    updateDisplay();
});

function updateDisplay(){
    distanceDisplay.textContent = `${currentDistance} km`;
}

//decrease button
decreaseButton.addEventListener("click", function () {
    currentDistance = currentDistance - 1;
    if(currentDistance < 0){
        currentDistance = 0;
    }
    updateDisplay();
});

//reset button
resetButton.addEventListener("click", function() {
    currentDistance = 0;
    updateDisplay();
});