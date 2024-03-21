const page = document.querySelector("#page");
let type, params;
/* מגדירה אובייקט שבכל אובייקט יש מערך */
const elementSelect = {
    title: [
        'headerType',
        'color',
        'content',
    ],
    p: [
        'fontSize',
        'color',
        'content',
    ],
    input: [
        'inputType',
        'fontSize',
        'color',
        'content',
    ],
    button: [
        'fontSize',
        'color',
        'content',
    ],

};

function bgChange(elem) {
    page.style.backgroundColor = elem.value;
}

function paddingChange(elem) {
    page.style.padding = elem.value + "px";
}

function pageToShow(id, elem) {
    document.querySelector('nav a.active').classList.remove('active');
    elem.classList.add('active');

    document.querySelector('#panelSide >div.show').classList.remove('show');
    document.getElementById(id).classList.add('show');
}
/* בוחר את האלמנט שהוא רוצה להוסיף לדף */
function typeSelect(selectElem) {
    type = selectElem.value;
    params = elementSelect[type];

    /* הסתרת כל האלמנטים המוצגים */
    const divs = document.querySelectorAll('#params>div');

    for (const div of divs) {
        div.classList.remove('show');
    }

    /* הצגת האלמנטים הנצרכים */
    for (const p of params) {
        document.getElementById(p).classList.add('show');
    }
}

function add() {
    const elem = document.createElement(tagName);

    const inputType = document.querySelector('#inputType select').value;
    const fontSize = document.querySelector('#fontSize input').value;
    const color = document.querySelector('#color input').value;
    const content = document.querySelector('#content input').value;

    for (const p of params) {
        if (p === 'inputType') {

        } else if (p === 'fontSize') {

        } else if (p === 'color') {

        } else if (p === 'content') {
            if (type == input) {
                elem.value = content;
            } else {
                elem.innerHTML = content;
            }
        }
    }

    page.appendChild(elem);
}