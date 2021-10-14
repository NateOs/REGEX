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
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// let result = fccRegex.test(myString);
// console.log(result);

//! Returning the match value
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/;
// let result = myString.match(fccRegex); //* match lets you return the value when true and null when no match is found
// console.log(result);

//! Find more than the first match with the 'g' flag
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g; //* the g flag here means find every instance of the string arg
// let result = testStr.match(ourRegex);
// console.log(result);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; //* you can combine flags for different results
// let result = twinkleStar.match(starRegex); //* match lets you return the value when true and null
// console.log(result);/

//! Match anthing with wildcard period 
//* The period in regex can stand for anything
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; //* Will match any word that starts with 'hu_', 
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Returns ["fun"]
// let result = unRegex.test(exampleStr); // Returns true
// console.log(result);

//! Match single character with multiple possibilities
// let bgRegex = /b[aiu]g/; //* this will match bug, big and bug
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct";
// let vowelRegex = /[aieou]/ig; //* this will match every instance of vowels, non-case sensitive
// let result = quoteSample.match(bgRegex)
// console.log(result);

// //! Match letters of the alphabet
// let quoteSample = "The quick brown fox jumped over the lazy dog";
// let alphabetRegex = /[a-z]/ig; //* this will match all letters of the alphabet, non-case sensitive
// let result = quoteSample.match(alphabetRegex)
// console.log(result);

//! Match both letters of the alphabet and numbers
let quoteSample = "The quick brown fox jumped over the lazy dog 12 11 0 1 2 3 4 5 6 7 8 9 10 11";
//* this will match all letters of the alphabet 
//* and numbers between the specified ranges, non -case sensitive
let alphabetRegex = /[0-9A-Z]/ig; 
let result = quoteSample.match(alphabetRegex)
console.log(result);




