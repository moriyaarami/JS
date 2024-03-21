function task1(elem) {
    elem.innerHTML = 'bayy';
    setTimeout(function () {
        elem.style.display = 'none';

    }, 1000)
}


let count = 1;
let myInterval;

function task2(elem) {
    if (myInterval) {
        myInterval = clearInterval(myInterval);
    } else {
        myInterval = setInterval(function () {
            elem.innerHTML = count++;
        }, 100)
    }
}

function task3() {

    /* אדום */
    setTimeout(function () {
        redCircle = document.querySelector('.redCircle');
        redCircle.style.backgroundColor = 'red';
    }, 100)
    setTimeout(function () {

        redCircle.style.backgroundColor = '';
    }, 1000 * 5)
    setTimeout(function () {

        redCircle.style.backgroundColor = 'red';
    }, 1000 * 12)
    setTimeout(function () {

        redCircle.style.backgroundColor = '';
    }, 1000 * 18)




    /* כתום */
    setTimeout(function () {
        yellowCircle = document.querySelector('.yellowCircle');
        yellowCircle.style.backgroundColor = 'yellow';
    }, 1000 * 3)
    setTimeout(function () {
        yellowCircle.style.backgroundColor = '';
    }, 1000 * 5)
    setTimeout(function () {
        yellowCircle.style.backgroundColor = 'yellow';
    }, 1000 * 10)
    setTimeout(function () {
        yellowCircle.style.backgroundColor = '';
    }, 1000 * 12)



    /* ירוק */
    setTimeout(function () {
        greenCircle = document.querySelector('.greenCircle');
        greenCircle.style.backgroundColor = 'green';
    }, 1000 * 5)
    setTimeout(function () {
        greenCircle.style.backgroundColor = '';
    }, 1000 * 10)

    setInterval(function () { }, 100)

}





