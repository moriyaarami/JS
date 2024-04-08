/* ex-1 */
/* const cart1 = [10, 20, 30, 40, 50, 10]; */
/* console.log(cart1);
console.log(...cart1); */

/* ex-1 */
/* const cart2 = [cart1]; */
/* console.log(cart2); */

/* ex-3 */
/* cart1.push(100);
console.log(cart1);
console.log(cart2); */

/* ex-4 */
/* const cart2 = [...cart1];

console.log(cart1);
console.log(cart2);

cart1.push(100);
console.log(cart1);
console.log(cart2); */

/* אובייקטים */

/* ex-1 */
const person = {
    firstName: "Moriya",
    lastName: "Arami",
    age: 20,
}
const personCopy = {
    person,

}
const newPerson = {
    ...person,
}

personCopy.person.age = 30;
newPerson.firstName = "adi"

console.log(person);
console.log(personCopy);
console.log(newPerson);

/* shallow copy & deep copy*/
const cart1 = [4, 30, 76, 100];
const cart2 = [1, 600, 56, 60]; 