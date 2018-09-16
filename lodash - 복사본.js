const throttle = document.getElementById('throttle');
const nothrottle = document.getElementById('nothrottle');

const throttleFunPP = _.throttle(() => {
        document.getElementById('throttle').innerHTML = ++throttle;
    },200)

const nothrottlePP = function() {
        ++nothrottle;
    }

document.onscroll = () => {
    throttleFun();
    nothrottleFun();
}