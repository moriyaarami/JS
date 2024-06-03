const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const task = document.querySelector('.task');

let numOfEx = 0;
let numOfRightEx = 0;
let maxNumber;
let op;
let ex;
let result;
const operators = ['+', '-', '*', '/'];
const select = document.querySelector('select');

select.addEventListener('change', fnc = () => {
    const selected = select.value;
    const Index = select.selectedIndex;
    maxNumber = selected == 'קל' ? 10 : selected == 'בינוני' ? 50 : selected == 'קשה' ? 100 : 0;



    op = operators[Math.floor(Math.random() * operators.length)];
    RandomNumber(maxNumber, op);

});

function RandomNumber(n, op) {
    let n1 = Math.floor(Math.random() * n) + 1;
    let n2 = Math.floor(Math.random() * n) + 1;

    ex = `${n1} ${op} ${n2}`;
    task.innerHTML = ex;

    result = eval(ex);

}

const check = () => {
    const answer = +document.querySelector("#value").value;

    console.log(answer);

    if (answer == result) {
        numOfRightEx++;
        numOfEx++;
        span1.innerHTML = numOfRightEx;
        span2.innerHTML = numOfEx;
        alert("תשוב נכונה")
        RandomNumber(maxNumber, op);

    } else {
        numOfEx++;
        span1.innerHTML = numOfRightEx;
        span2.innerHTML = numOfEx;
        alert("תשובה לא נכונה");
        RandomNumber(maxNumber, op);
    }

    document.querySelector("#value").value = "";


}

const btn = document.querySelectorAll(".btn-container button");

btn.forEach(b => {
    b.addEventListener("click", btnClick = () => {
        document.querySelector("#value").value += b.textContent;
    });
});












