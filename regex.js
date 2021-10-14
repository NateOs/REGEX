//* Regex is used in programming to match patterns in strings

let sentence = "The dog chased the cat.";
let regex = /the/

// let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex.test(myString); //* This means check if 'myRegex' matches anything in 'myString'

// console.log(result); // returns true

let waldoIsHiding = 'Somewhere Waldo is hiding in this text'
let waldoRegex = /Waldo/; 

//* This means check id waldoRegex matches anything in 'waldoIsHiding',
//* however the '/ /' combination is case sensitive
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

//! Match a literal string with different possibilities
let petString = "James has  a pet cat.";
let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);

//* returns true because 'cat' is a match, will also return true if dog
//* was a match or any of the other strings in the regex with the '|' sign.
// console.log(result);

//! Using the 'i' flag to ignore case 
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
console.log(result);


