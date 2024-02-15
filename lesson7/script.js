function task1() {
    const num = +document.getElementById("num1").value;
    let result = ' ';

    for (let i = 0; i < num; i++) {
        result += '* ';
    }
    document.getElementById("output1").innerHTML = result;
}


function task2() {
    const num = +document.getElementById("num2").value;
    let result = ' ';

    for (let i = 0; i < num; i++) {
        result += '* <br>';
    }
    document.getElementById("output2").innerHTML = result;
}

function task3() {
    const num = +document.getElementById("num3").value;
    let result = ' ';

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += i + ', '
        }
    }
    document.getElementById("output3").innerHTML = result;
}

