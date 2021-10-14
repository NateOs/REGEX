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
let result = twinkleStar.match(starRegex); //* match lets you return the value when true and null
console.log(result);

//! Match anthing with wildcard period 
//* The period in regex can stand for anything
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; //* Will match any word that starts with 'hu_', 
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Returns ["fun"]
let result = unRegex.test(exampleStr); // Returns true




