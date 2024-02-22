const div = document.querySelector('#numbers');
const output = document.querySelector('#output');

div.innerHTML = numbers.join(', ');

function max() {
    let num = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `המספר הגדול הוא:${num}`;

}

function min() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < num) {
            num = numbers[i];
        }
    }

    output.innerHTML = `המספר הקטן הוא:${num}`;
}

function sum() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }

    output.innerHTML = `סכום המספרים הוא:${num}`;
}

function average() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }



    const average = Math.round(num / numbers.length);
    output.innerHTML = `ממוצע המספרים הוא:${average}`;
}

function count() {

    output.innerHTML = `אורך המערך הוא:${numbers.length}`;
}

function up() {
    numbers.sort((a, b) => a - b);

    div.innerHTML = numbers.join(', ');
}

function down() {
    numbers.sort((a, b) => b - a);

    div.innerHTML = numbers.join(', ');
}

function start() {
    numbers.shift();

    div.innerHTML = numbers.join(', ');
}

function end() {
    numbers.pop();

    div.innerHTML = numbers.join(', ');
}
/* 
function newStart() {
    numbers.unshift(20);

    div.innerHTML = numbers.join(', ');
}

function newEnd() {
    numbers.push(20);

    div.innerHTML = numbers.join(', ');
} */

function lines() {
    div.innerHTML = numbers.join(', <br> ');
}
function oneline() {
    div.innerHTML = numbers.join(', ');
}



function startPlus() {
    let num = document.querySelector('#number');

    numbers.unshift(+num.value);

    div.innerHTML = numbers.join(', ');
}

function endPlus() {
    let num = document.querySelector('#number');

    numbers.push(+num.value);

    div.innerHTML = numbers.join(', ');
}

function removeNumber() {

}

function remove() {
    let num = document.querySelector('#num');

    numbers.splice(+num.value, 1);

    div.innerHTML = numbers.join(', ');
}

