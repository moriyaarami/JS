function getValue(elemId) {
    return document.getElementById(elemId).value;

}
function lerner(mispar1, mispar2) {
    return Number(mispar1) + Number(mispar2);
}

let count = 0;
function counter(num) {
    count += num;

    document.getElementById("count").innerHTML = count;

}

/* פונקציה שמקבלת 3 מספרים ומחזירה סכום שלהם */
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

/* פונקציה שמקבלת מספר וחזירה את המספר כולל מעמ */
function calcVat(num) {
    return num * 1.17;
    /* return `ללא מע"מ: ${num} | כולל מע"מ: ${num * 1.17}`; */
}

function welcome(firstname, lastname) {
    return `ברוכים הבאים לאתר שלי ${firstname} ${lastname}`;
}

function avg(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

