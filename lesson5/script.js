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