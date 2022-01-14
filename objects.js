
var person = {
    firstName: "bhupendra",
    age : 21,
    isMale: true,
    balance : 100.32,
    dob : new Date(2000, 11, 28),
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);

console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person))