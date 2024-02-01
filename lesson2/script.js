let count = 0;

function counter() {
    /*   count++; */
    /*     console.log(count); */
    document.getElementById("btn").innerHTML = ++count;
}
function multi() {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;
    /* console.log(n1 * n2); */
    /*  alert(n1 * n2); */

    document.getElementById("autput1").innerHTML = n1 * n2;

}
function plus() {
    const n3 = +document.getElementById("num3").value;
    const n4 = +document.getElementById("num4").value;
    /* console.log(+n3 + +n4); */
    /*  alert(+n3 + +n4); */
    document.getElementById("output2").innerHTML = n3 + n4;
}

function plusResult() {
    const n5 = +document.getElementById("num5").value;
    const n6 = +document.getElementById("num6").value;
    /*  const result = n5 + n6; */
    /* document.getElementById("output3").innerHTML = (n5) + "+" + (n6) + " = " + result; */

    const result = `${n5}+ ${n6} = ${n5 + n6}`;
    document.getElementById("output3").innerHTML = result;

}