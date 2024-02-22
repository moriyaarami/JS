function task1(element) {
    const elem = element.value;
    let res = ' ';
    for (let i = 0; i < 10; i++) {
        console.log(elem);
        res += elem + ' ';
        document.getElementById('output1').innerHTML = res;
    }
}

function task2(element) {
    const elem = element.value;
    let res = ' ';

    for (let i = 0; i < elem; i++) {
        res += 'hello' + ' ';
        document.getElementById('output2').innerHTML = res;
    }
}