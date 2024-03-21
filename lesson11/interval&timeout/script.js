const traffic1 = document.querySelector('.trafic-light');
const traffic2 = document.querySelector('.trafic-light-warning');

const first = traffic1.querySelector('div');
const second = traffic1.querySelector('div:nth-child(2)');
const last = traffic1.querySelector('div:last-child');

let trafficTimeOut;
let isLight = false;


function reset() {
    first.style.backgroundColor = '';
    second.style.backgroundColor = '';
    last.style.backgroundColor = '';
}


function green() {
    reset();
    last.style.backgroundColor = 'green';
    trafficTimeOut = setTimeout(yellow, 3 * 1000);
}

function yellow() {
    reset();
    second.style.backgroundColor = 'yellow';
    trafficTimeOut = setTimeout(red, 1000);
}

function red() {
    reset();
    first.style.backgroundColor = 'red';
    trafficTimeOut = setTimeout(redAndYellow, 3 * 1000);
}
function redAndYellow() {
    reset();
    second.style.backgroundColor = 'yellow';
    first.style.backgroundColor = 'red';
    trafficTimeOut = setTimeout(green, 1000);
}

function stop() {
    clearTimeout(trafficTimeOut);
}

function start() {
    red();
}
/* setTimeout(function () { }, 1000 * 5) */
setInterval(function () {
    const flashing = traffic2.querySelector('div:nth-child(2)');
    if (isLight) {
        flashing.style.backgroundColor = 'yellow';
        isLight = false;
    } else {
        flashing.style.backgroundColor = '';
        isLight = true;
    }
}, 1000)




