let btn = document.querySelectorAll("button")

btn.forEach(b => {
    b.addEventListener("click", btnClick)
});

let delteBtn = document.querySelector("#delte");
delteBtn.removeEventListener("click", btnClick);
delteBtn.addEventListener("click", delte);

let checkBtn = document.querySelector("#check");
checkBtn.removeEventListener("click", btnClick);
checkBtn.addEventListener("click", check);

function check() {

}

function delte() {
    document.querySelector(".value").textContent = "";
}

function btnClick() {
    document.querySelector(".value").textContent += this.textContent;
}
