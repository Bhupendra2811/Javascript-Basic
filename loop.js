var names = [
    "Alex",
    "Jam", 
    "Joe", 
    "Ai",
    "Bob"
]
console.log("fori");
for (var i =0;i<names.length;i++){
    console.log(names[i]);
}
console.log();
console.log("for of");

for (const na of names) {
    console.log(na);
}

console.log();
console.log("forEach");


names.forEach(function(name) {
    console.log(name)
});