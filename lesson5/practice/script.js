function task1() {
    const userName = prompt("שלום מדבר נציג המלונית מלון דרכים מה שמכם בבקשה");

    if (!userName) {
        return;
    }

    const days = prompt(`יש לי שאלה ${userName} כמה ימים תרצה להתארח אצלינו?`, 1);

    if (!days) {
        return;
    }

    let price = days * 100;

    alert(`עלות המלונית ליום הינה 100 שקלים ולכן תשלם רק ${price}`)

    const isBreakfast = confirm(`עלות ארוחת בוקר הינה 30 שקלים רוצה שנפנק אותך?`)

    if (isBreakfast) {
        price += 30 * days;
    }
    alert(`סהכ לתשלום ${price}`);
}

function task2() {
    const name = prompt(`שלום מדבר נציג מלון הספורט מה השם בבקשה?`);
    if (!name) {
        return;
    }
    const guests = +prompt(`יש לי שאלה ${name} כמה אורחים תרצו להיות`);
    if (!guests) {
        return;
    }

    if (guests < 1 && guests > 15) {
        alert(`אין אפשרות להזמין`)
    } else if (guests <= 2) {
        alert(`m`);
        const night = +prompt(`כמה לילות `);
        price = (guests * 200) * night;
    } else if (guests <= 5) {
        alert(`l`);
        const night = +prompt(`כמה לילות `);
        price = (guests * 100) * night;
    } else if (guests <= 15) {
        alert(`xl`);
        const night = +prompt(`כמה לילות `);
        price = (guests * 50) * night;
    }
    alert(`סהכ לתשלום ${price}`);
    const Breakfast = prompt(`עלות ארוחת בוקר הינה 30 שקלים האם תרצה שנפנק אותך`);
    if (Breakfast == "לא") {
        alert(`סהכ לתשלום ${price}`);
    } else {
        alert(`סהכ לתשלום פלוס ארוחת בוקר${price + 30}`);
    }
}

function task3() {
    const name = prompt(`שלום מדברים ממלון טבע , מה השם בבקשה?`);
    const guests = +prompt(`יש לי שאלה ${name} כמה אורחים תהיו?`);

    if (guests >= 1 && guests <= 2) {
        alert(`אתם צריכים חדר M`);
        const night = +prompt(`?כמה לילות `);
        pay = (guests * 150) * night;

    } else if (guests >= 3 && guests <= 5) {
        alert(`אתם צריכים חדר L`);
        const night = +prompt(`?כמה לילות `);
        pay = (guests * 120) * night;

    } else if (guests >= 6 && guests <= 15) {
        alert(`אתם צריכים חדר XL`);
        const night = +prompt(`?כמה לילות `);
        pay = ((guests * 80) * night);

    } else {
        return;
    }
    alert(`סהכ לתשלום ${pay}`);

    const Breakfast = prompt(`עלות ארוחת בוקר הינה 50 שקלים האם תרצה שנפנק אותך`);
    if (Breakfast == "לא") {
        alert(`סהכ לתשלום ${pay}`);
    } else {
        alert(`סהכ לתשלום פלוס ארוחת בוקר${pay + 50}`);
    }
}

function task4() {
    const name = prompt(`שלום מדברים ממלון טבע , מה השם בבקשה?`);
    const guests = +prompt(`יש לי שאלה ${name} כמה אורחים תהיו?`);

    if (guests >= 1 && guests <= 2) {
        alert(`אתם צריכים חדר M`);
        const night = +prompt(`?כמה לילות `);
        pay = (guests * 400) * night;

    } else if (guests >= 3 && guests <= 5) {
        alert(`אתם צריכים חדר L`);
        const night = +prompt(`?כמה לילות `);
        pay = (guests * 300) * night;

    } else if (guests >= 6 && guests <= 15) {
        alert(`אתם צריכים חדר XL`);
        const night = +prompt(`?כמה לילות `);
        pay = ((guests * 150) * night);

    } else {
        return;
    }
    alert(`סהכ לתשלום ${pay}`);

    const Breakfast = prompt(`עלות ארוחת בוקר הינה 50 שקלים האם תרצה שנפנק אותך`);
    if (Breakfast == "לא") {
        alert(`סהכ לתשלום ${pay}`);
    } else {
        alert(`סהכ לתשלום פלוס ארוחת בוקר${pay + 50}`);
    }
}




function smart() {
    const name = prompt(`שלום מדבר הסוכן מה השם בבקשה?`);

    const alone = prompt(`יש לי שאלה ${name} אתה מגיע לבד ?`);

    if (alone == "לא") {
        guest = +prompt(`כמה אורחים תהיו ?`);
        select = prompt(`יש לך אפשרות של כמה מלונות 
         מלון ספורט , מלון טבע ומלון סוויטות איזה מלון תרצו?` )
        if (select == "מלון ספורט") {
            task2()
        } else if (select == "מלון טבע") {
            task3()
        } else if (select == "מלון סוויטות") {
            task4()
        }
    } else {
        task1()
    }
}



