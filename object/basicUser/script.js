let user = {
    fullName: 'moriya Arami',
    userName: 'MoriyaArami',
    password: '2942004',
    isLogin: 'false',
};

/* console.log(userBankAcount);
console.log(typeof userBankAcount.first);
console.log(typeof userBankAcount.last);
console.log(typeof userBankAcount.userName);
console.log(typeof userBankAcount.password);
console.log(typeof userBankAcount.statusLogin);
console.log(typeof userBankAcount.total);
console.log(typeof userBankAcount.cradit); */

function ChangeName() {
    user.fullName = document.getElementById('change').value;

    localStorage.setItem('ChangeName', user.fullName);
}
user.fullName = localStorage.getItem('ChangeName');

function logIn() {
    const us = document.getElementById('userName');
    const pass = document.getElementById('password');

    if (user.userName == us.value && user.password == pass.value) {
        user.isLogin = 'true';
        alert(user.isLogin);
    } else {
        alert(user.isLogin);
    }

}

function changePassword() {
    const lastpass = document.getElementById('lastpassword');
    const newpass = document.getElementById('Newpassword');

    if (user.password == lastpass.value) {
        user.password = newpass.value;
        console.log(user.password);
    } else {
        console.log("יש בעיה")
    }
    localStorage.setItem('changePassword', user.password);

}
user.password = localStorage.getItem('changePassword');

function logOut() {
    user.isLogin = false;
    alert(user.isLogin);
}

let userBankAcount = {
    first: 'moriya',
    last: 'arami',
    userName: 'moriyaarami',
    password: '12345678',
    statusLogin: false,
    total: 0,
    cradit: 500,
};
function keep() {
    money = +document.getElementById('keepMoney').value;
    userBankAcount.total += money;
    confirm(`הכנסת לחשבון ${money} שקלים כרגע יש לך סהכ ${userBankAcount.total}`)
}

function take() {

    pass = document.getElementById('pass').value;
    /*  console.log(pass); */

    if (pass == userBankAcount.password) {
        userBankAcount.statusLogin = true;
        console.log(userBankAcount.statusLogin)
    } else {
        alert('יש בעיה');
    }

    takeMoney = document.getElementById('takeMoney').value;
    if (userBankAcount.statusLogin == true) {
        if (userBankAcount.cradit >= takeMoney) {
            userBankAcount.total -= takeMoney;
            alert(`משכת כרגע ${takeMoney} שקלים , נשאר לך בחשבון ${userBankAcount.total}`);
        } else {
            alert("יש בעיה")
        }
    }

}

function changeCredit() {
    pass = document.getElementById('yourPassword').value;
    /*  console.log(pass); */

    if (pass == userBankAcount.password) {
        userBankAcount.statusLogin = true;
    } else {
        alert('יש בעיה');
    }

    craditFrame = document.getElementById('craditFrame').value;
    managerPass = document.getElementById('managerPass').value;

    if (userBankAcount.statusLogin == true) {
        if (managerPass == 'admin123456') {
            userBankAcount.cradit = craditFrame;
            alert(`מסגרת האשראי שלך כרגע היא: ${craditFrame}`);
        } else {
            alert("יש בעיה")
        }
    }
}