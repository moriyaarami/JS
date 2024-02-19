function numbers() {
    const num = 11;
    for (let i = 1; i < num; i++) {
        console.log(i);
    }
}

function numbers1() {
    const num = 8;
    for (let i = 0; i < num; i++) {
        if (i >= 2 && i <= 7) {
            console.log(i);
        }

        if (i < 2 && i > 7) {
            return;
        }
    }
}

function numbers2() {
    const num = -1;
    for (let i = 10; i > num; i--) {
        console.log(i);
    }
}

function numbers3() {
    const num = 2;
    for (let i = 8; i > num; i--) {
        if (i <= 8 && i >= 3) {
            console.log(i);
        } else {
            return;
        }
    }
}
function stat(number) {
    const num = +number.value;
    let res = '';
    for (let i = num; i <= 100; i++) {
        res += i + ' ';
    }
    document.getElementById("output1").innerHTML = res;

}
function startEnd() {
    const n1 = document.getElementById("start").value;
    const n2 = document.getElementById("end").value;

    let res = '';

    for (let i = n1; i <= n2; i++) {

        res += i + ' ';

    }
    document.getElementById("output2").innerHTML = res;
}

function startEnd2() {
    const n1 = document.getElementById("start").value;
    const n2 = document.getElementById("end").value;

    let res = '';

    let start = Math.min(n1, n2)
    let end = Math.max(n1, n2)

    for (let i = 0; i <= end; i++) {
        if (start <= end) {
            res += start + ' ';
        }
    }
    document.getElementById("output3").innerHTML = res;
}