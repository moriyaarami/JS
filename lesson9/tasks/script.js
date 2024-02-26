const tasks = document.querySelector(".tasks");

/* פונקצית add להוספת אלמנטים */
function add() {
    const input = document.querySelector("input");

    /* אם אין תוכן בתיבת הקלט- הפונקציה נעצרת */
    if (!input.value) {
        return;
    }

    /* יצירת אלמנט חדש ופעולות עם האלמנט */
    const li = document.createElement("li");
    tasks.appendChild(li);

    /* השמת התוכן של המשימה באלמנט חדש */
    const div = document.createElement("div");
    div.innerHTML = input.value;

    /* לאפשר למשתמש לערוך את התוכן */
    div.contentEditable = true;
    li.appendChild(div);

    /* יצירת לחצן מחיקה */
    const btn = document.createElement("button");
    btn.innerHTML = "X";

    /* יצירת ארוע- כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה */
    btn.addEventListener('click', function () {
        const isAloow = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`)

        if (isAloow) {
            li.remove();
        }
    })
    li.appendChild(btn);

    /* איפוס תיבת הקלט */
    input.value = "";

}

/*  פונקציה להוספת אלמנטים באמצעות לחיצה על Enter */
function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
    }
}
