let counter = 1;

function plus() {
    /* הגדלנו את המשתנה באחד  */
    counter++;
    /* שמנו את הערך ב html */
    document.getElementById("count").innerHTML = counter;
    /* שיננו את גודל הכתב של המספר */
    document.getElementById("count").style.fontSize = counter + "px";


}
function minus() {
    /* הקטנו את המשתנה באחד  */
    counter--;
    /* שמנו את הערך ב html */
    document.getElementById("count").innerHTML = counter;
    /* שיננו את גודל הכתב של המספר בהתאם לגוד של המספר*/
    document.getElementById("count").style.fontSize = counter + "px";
}

function cityChange() {
    const city = document.getElementById("city").value;

    if (city == "1200" || city == "7400") {
        document.getElementById("output1").innerHTML = "נכון מאוד";
    }
    else {
        document.getElementById("output1").innerHTML = "לא נכון מאוד";
    }
}

function enter() {

    const un = document.getElementById("userName").value;
    const pw = document.getElementById("password").value;
    const output2 = document.getElementById("output2");
    if (un == "banana" && pw == "a123") {
        output2.innerHTML = "ברוך הבא";
        output2.style.color = "green";
    }
    else {
        output2.innerHTML = "יש טעות באחד הפרטים";
        output2.style.color = "red";
    }
}
function tast1() {
    const num = document.getElementById("number").value;
    const number = document.getElementById("number");
    /*  const number = +num.value; */

    if (num <= 40) {
        number.style.backgroundColor = "red";
    } else if (num <= 60) {
        number.style.backgroundColor = "orange";
    } else if (num <= 80) {
        number.style.backgroundColor = "blue";
    } else if (num <= 100) {
        number.style.backgroundColor = "green";
    }
}
function replace() {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;

    document.getElementById("str1").value = str2;
    document.getElementById("str2").value = str1;

}

function salerycalcultor() {
    const name = document.getElementById("user").value;
    const num = document.getElementById("salery").value;
    let total10 = +num + +num / 10;
    let total5 = +num + (+num / 10) / 2;

    if (total10 <= 6000) {
        document.getElementById("output3").innerHTML = total10;
    } else if (total10 > 6000) {
        document.getElementById("output3").innerHTML = total5;
    }

}
/* function salerycalcultor() {
    const name = document.getElementById("user").value;
    const num = document.getElementById("salery").value;
    let raise = salery * 1.1;

    if (raise > 6000) {
        raise = salery * 1.05;
        document.getElementById("output3").innerHTML = 'השכר החדש של ' + name + ' הוא ' + raise + ' שח';
    }

} */


function check() {
    let age = +document.getElementById("age").value;
    let height = +document.getElementById("height").value;
    let output = document.getElementById("output4");

    if ((age >= 14 && age <= 18 || age >= 21 && age <= 26) && height >= 182) {
        output.innerHTML = "התקבלת"
    } else {
        output.innerHTML = "לא התקבלת"
    }
}
