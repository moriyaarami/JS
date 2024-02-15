function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ', ';
        i += 2;
    }

    document.getElementById("output1").innerHTML = res;
    /* להסיר את הכפתור לאחר ההצגה */
    document.getElementById("btn").style.display = 'none';
    /* document.getElementById("btn").remove(); */

}

function task2(elem) {
    const num = +elem.value;
    let isPrime = true;

    let i = 2;

    while (i < num) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

        i++;
    }

    const output = document.getElementById("output2");

    if (isPrime) {
        output.innerHTML = 'ראשוני';
        output.style.color = "blue";
    } else {
        output.innerHTML = 'פריק';
        output.style.color = "green";
    }
}

function task3() {
    const num = +document.getElementById("num").value;
    let res = '';

    let i = 1;

    while (i <= num) {
        res += i + ', ';

        i++;
    }

    document.getElementById("output3").innerHTML = res;
}
/* function task3() {
    const num = +document.getElementById("num1").value;
    let result = '';

    let i = 1;

    while (i <= num) {
        if (result) {
            result += ', '
        }

        result += i;

        i++;
    }

    document.getElementById("output3").innerHTML = result + '.';
} */

function task4() {
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    let res = ' ';

    let start = Math.min(num1, num2)
    let end = Math.max(num1, num2)
    /* let i = num1; */

    while (start <= end) {
        res += start + ', ';

        start++;
    }

    document.getElementById("output4").innerHTML = res;
}

function task5(number) {
    num = +number.value;
    console.log(num);
    let res = '';

    let i = 1;

    while (i <= num) {

        if (num % i == 0) {
            res += i;
            if (i < num) {
                res += ', '
            }
            else {
                res += ' .';
            }
        }
        i++;
    }

    document.getElementById("output5").innerHTML = res;
}

function task6() {
    const num = +document.getElementById("number").value;
    let res = ' ';

    let i = 1;
    while (i <= num) {
        res += '*  ';
        i++;
    }


    document.getElementById("output6").innerHTML = res;
}

function task7(number) {
    num = +number.value;
    console.log(num);
    let res = ' ';

    i = 1;

    while (i <= num) {
        res += '* <br> ';
        i++;
    }
    document.getElementById("output7").innerHTML = res;

}

function task8(number) {
    num = +number.value;
    i = 1;
    res = '';
    let total = 1;

    while (i <= number) {
        res += i;

        if (i < number) {
            res += '*';
        }
        else if (i === number) {
            res += '=';
        }
        total *= i;
        i++;
    }

    document.getElementById("output6").innerHTML = res + total;
}