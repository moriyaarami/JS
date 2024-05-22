const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const container = document.querySelector('#container');
let result;
let score = 0;

/* פונקציה שיוצרת תרגיל חשבון */
function text(n) {
    num1.innerHTML = Math.floor(Math.random() * n) + 1;
    num2.innerHTML = Math.floor(Math.random() * n) + 1;
    input.value = '';

}


function check() {
    result = +num1.innerHTML + +num2.innerHTML;
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
            p.innerHTML = ''
            options();
        }, 1000);


    } else {
        p.innerHTML = 'תשובה לא נכונה';
        setTimeout(() => {
            p.innerHTML = ''
            text();
        }, 1000);

    }

    container.appendChild(p);
    Score();

}

function options() {

    const selectElem = document.getElementById('numbers');
    selectElem.addEventListener('change', () => {
        const index = selectElem.selectedIndex;
        const value = selectElem[index].value;
        console.log(index, value);
        if (index === 1) {
            text(10);
            check();
        } else if (index === 2) {
            text(100);
        } else if (index === 3) {
            text(500);
        } else if (index === 4) {
            text(1000);
        }

    })
}


/* יצירת טבלה לתשובות שהמשתמש ענה  */
function table() {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${num2.innerHTML}+${num1.innerHTML}</td>
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

