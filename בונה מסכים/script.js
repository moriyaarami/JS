
const elem = document.createElement("div");
function add() {

    elem.className = "elem";
    document.body.appendChild(elem);
    elem.style.width = "100px";
    elem.style.height = "100px";
    elem.style.border = "2px solid black";


    const bgcolor = document.querySelector('#color').value;
    elem.style.backgroundColor = bgcolor;


    const height = document.querySelector('#height').value;
    const width = document.querySelector('#width').value;
    elem.style.width = height + "px";;
    elem.style.height = width + "px";


    const textarea = document.querySelector('#textarea').value;
    elem.innerHTML = textarea;


    const textColor = document.querySelector('#textcolor').value;
    const sizeColor = document.querySelector('#sizecolor').value;
    elem.innerHTML = textColor;

    /*  localStorage.setItem('box', elem); */
}

