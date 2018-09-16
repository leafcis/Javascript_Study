const throttle = document.getElementById('throttle');
const nothrottle = document.getElementById('nothrottle');

let throttleValue = 0;
let nothrottleValue = 0;

throttle.innerHTML = throttleValue;
nothrottle.innerHTML = nothrottleValue;

const throttleFunPP = function() {
    throttleSelf(function() {
    ++throttleValue;
    throttle.innerHTML = throttleValue;
    })
}

const nothrottlePP = function() {
        ++nothrottleValue;
        nothrottle.innerHTML = nothrottleValue;
    }

function eventfun() {
    throttleFunPP();
    nothrottlePP();
}



function throttleSelf(fun, ms) {
    let throttleBool;

    if(!throttleBool)
    {
        throttleBool = true;
        fun(...args);
        setTimeout(() => {
            throttleBool = false;
        }, 200)
    }
}