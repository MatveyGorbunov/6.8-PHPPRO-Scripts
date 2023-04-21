const trafficLightR = document.querySelector('#trafficLightR');
const trafficLightY = document.querySelector('#trafficLightY');
const trafficLightG = document.querySelector('#trafficLightG');

function makeRed() {
    trafficLightG.style.background = ('black');
    trafficLightY.style.background = ('black');
    trafficLightR.style.background = ('red');
    trafficLightR.addEventListener('click', makeRed);
}

function makeYellow() {
    trafficLightR.style.background = ('black');
    trafficLightY.style.background = ('yellow');
    trafficLightG.style.background = ('black');
    trafficLightY.addEventListener('click', makeYellow);
}

function makeGreen() {
    trafficLightR.style.background = ('black');
    trafficLightY.style.background = ('black');
    trafficLightG.style.background = ('green');
    trafficLightG.addEventListener('click', makeGreen);
}

trafficLightR.addEventListener('click', makeRed);
trafficLightY.addEventListener('click', makeYellow);
trafficLightG.addEventListener('click', makeGreen);




