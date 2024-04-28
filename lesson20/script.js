
function logIn(ev) {

    ev.preventDefault();

    const { userName, password } = ev.target.elements;

    const obj = {
        userName: userName.value,
        password: password.value,
    };

    fetch('https://api.shipap.co.il/login', {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(res => {

            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x)
                })
            }
        })
        .then(data => {
            alert(`ההתחברות של ${data.fullName} בוצעה בהצלחה!`);
            ev.target.style.display = 'none';

            /* הופעת הכפתור התנתקות */
            document.querySelector('.logOut').classList.remove('logOut');

            document.querySelector('#container>button').classList.add('logOutButton');

            userName.value = '';
            password.value = '';


        })
        .catch(err => alert(err.message));

}


function logOut() {
    fetch(`https://api.shipap.co.il/logout`, {
        credentials: 'include',
    })
        .then(() => {
            alert('ההתנתקות בוצעה בהצלחה!');
            document.querySelector('#container>form').style.display = 'block';
            document.querySelector('#container>form').style.display = 'flex';


            document.querySelector('.logOutButton').classList.remove('logOutButton');
            document.querySelector('#container>button').classList.add('logOut');

        });
}


