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
    if (un == "banana" && pw == "a123") {
        document.getElementById("output2").innerHTML = "ברוך הבא";
    }
    else {
        document.getElementById("output2").innerHTML = "יש טעות באחד הפרטים";
    }
}
