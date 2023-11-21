let myName ="issach";

let remainName=myName.slice(1,myName.length);
console.log(remainName);

let firstLetter =myName.slice(0,1);
let firstLetterInName=firstLetter.toUpperCase();

console.log(firstLetterInName+remainName);

console.log(myName.length);


let lastName="Emani";

console.log(lastName.indexOf('m'));// returns the particukar index element

console.log(lastName.includes('E'));// returns the boolean value for Included or not 