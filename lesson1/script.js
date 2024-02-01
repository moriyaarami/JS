function welcomeMessage() {
    alert("ברוכים הבאים לאתר שלי");
}
function showMessage() {
    console.log("ההודעה נשלחה בהצלחה");
}
function nameMessage() {

    var name = document.getElementById("userName").value;

    alert("welcome " + name);
}
function multi50() {
    var num = document.getElementById("Number").value;

    alert(num * 50);
}