const div = document.createElement('div');
const n1 = document.createElement('span');
const n2 = document.createElement('span');

const operator = document.createElement('span');
operator.className = 'operator';
operator.innerHTML = '+'

const task = document.querySelector('.task');
task.appendChild(div);
div.appendChild(n1);
div.appendChild(operator);
div.appendChild(n2);
let result;
let score = 0;
let thisOptionNumber = 0;
let o;

const optionsOperator = ['+', '-', '*', ':'];

function Operators() {

    const selectElem = document.getElementById('operator');
    selectElem.addEventListener('change', () => {
        const index = selectElem.selectedIndex;


        if (index == 0 || index == 1) {
            operator.innerHTML = optionsOperator[0];
            result = +n1.innerHTML + + n2.innerHTML
            o = optionsOperator[0]
        } else if (index == 2) {

            operator.innerHTML = optionsOperator[1];
            result = +n1.innerHTML - + n2.innerHTML;
            o = optionsOperator[1]
        } else if (index == 3) {

            operator.innerHTML = optionsOperator[2];
            result = +n1.innerHTML * + n2.innerHTML;
            o = optionsOperator[2]
        } else if (index == 4) {

            operator.innerHTML = optionsOperator[3];

            o = optionsOperator[3]
        }
        result;

    });

}



/* פונקציה שיוצרת תרגיל חשבון */
function text(n) {

    n1.innerHTML = Math.floor(Math.random() * n) + 1;
    n2.innerHTML = Math.floor(Math.random() * n) + 1;

    input.value = '';

    Operators();

}


function check() {

    console.log(result);


    const input = document.querySelector('#input').value;

    if (input == result) {
        Result(true);
        table();
        Score(true);
    } else {
        Result(false);
        table();
        Score(false);
    }

}

function Result(answer) {

    const p = document.createElement('p');

    if (answer) {
        p.innerHTML = 'תשובה נכונה';
        setTimeout(() => {
            p.innerHTML = '';
            text(thisOptionNumber);
        }, 1000);

    } else {
        p.innerHTML = 'תשובה לא נכונה';
        setTimeout(() => {
            p.innerHTML = '';
            text(thisOptionNumber)

        }, 1000);

    }

    container.appendChild(p);
    Score();
}

function optionsNumbers() {

    const selectElem = document.getElementById('numbers');
    selectElem.addEventListener('change', () => {
        const index = selectElem.selectedIndex;
        if (index == 0) {
            thisOptionNumber = -1;
            text(thisOptionNumber);
        } else if (index === 1) {
            thisOptionNumber = 10;
            text(thisOptionNumber);

        } else if (index === 2) {
            thisOptionNumber = 100;
            text(thisOptionNumber);

        } else if (index === 3) {
            thisOptionNumber = 500;
            text(thisOptionNumber);

        } else if (index === 4) {
            thisOptionNumber = 1000;
            text(thisOptionNumber);

        }

    });


}



/* יצירת טבלה לתשובות שהמשתמש ענה  */
function table() {

    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${n2.innerHTML} ${o} ${n1.innerHTML}</td>
    <td>${result}</td>
    <td>${input.value}</td>
    <td>${input.value == result ? '5' : '0'}</td>
`;


    tbody.appendChild(tr);

}

function Score(res) {
    if (res) {
        score += 5;
    } else {
        score += 0;
    }
    showScore = document.querySelector('.score');
    showScore.innerHTML = score;
}

function reset() {
    score = 0;
    showScore.innerHTML = score;
    text(0);
}

