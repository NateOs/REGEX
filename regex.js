//* Regex is used in programming to match patterns in strings

let sentence = "The dog chased the cat.";
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex.test(myString); //* This means check if 'myRegex' matches anything in 'myString'

// console.log(result); // returns true

let waldoIsHiding = 'Somewhere Waldo is hiding in this text'
let waldoRegex = /Waldo/; 

//* This means check id waldoRegex matches anything in 'waldoIsHiding',
//* however the '/ /' combination is case sensitive
let result = waldoRegex.test(waldoIsHiding);
console.log(result);