const numbers = [108, 4, 130, 34, 124, 11, 144, 85, 82, 80, 123, 25, 128, 78, 36, 30, 90, 23, 84, 147, 143, 18, 62, 96, 63, 129, 15, 109, 52, 119, 138, 65, 18, 135, 69, 89, 13, 70, 109, 22];

document.querySelector('#numbers div').innerHTML = numbers.join(', ');

/* תרגיל 1  */
document.querySelector("#task1 p").innerHTML = students.map(x => `${x.firstName} ${x.lastName}`).join(", ") + ".";

/* תרגיל 2 */
document.querySelector("#task2 p").innerHTML = students.map(x => `${x.phone}`).join(", ") + ".";

/* תרגיל 3 */
document.querySelector("#task3 p").innerHTML = numbers.map(x => x * 2).join(' | ');

/* תרגיל 4 */
document.querySelector("#task4 p").innerHTML = numbers.filter(x => x > 40).join(' | ');

/* תרגיל 5 */
document.querySelector("#task5 p").innerHTML = numbers.filter(x => x >= 20 && x <= 50).join(' | ');

/* תרגיל 6 */
document.querySelector("#task6 input").addEventListener('input', ev => {
    const val = ev.target.value;

    document.querySelector("#task6 p").innerHTML =
        students
            .map(x => `${x.firstName} ${x.lastName}`)
            .filter(x => x.includes(val)).join('<br>');
})
