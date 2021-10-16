//* Regex is used in programming to match patterns in strings

let sentence = "The dog chased the cat.";
// let regex = /the/

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); //* This means check if 'myRegex' matches anything in 'myString'

// console.log(result); // returns true

let waldoIsHiding = 'Somewhere Waldo is hiding in this text'
let waldoRegex = /Waldo/; 

//* This means check id waldoRegex matches anything in 'waldoIsHiding',
//* however the '/ /' combination is case sensitive
// let result = waldoRegex.test(waldoIsHiding); //returns true


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
// let quoteSample = "The quick brown fox jumped over the lazy dog 12 11 0 1 2 3 4 5 6 7 8 9 10 11";
//* this will match all letters of the alphabet 
//* and numbers between the specified ranges, non -case sensitive
// let alphabetRegex = /[0-9A-Z]/ig; 
// let result = quoteSample.match(alphabetRegex)
// console.log(result);

// //! Match single characters not specified
// let quoteSample = "3 blind mice."
// let myRegex = /[^0-9aeiou]/ig // ^ means negate the matches, return others instead.
// let result = quoteSample.match(myRegex);
// console.log(result);

//! Match characters that appear more than once
// let quoteSample = "3 blind mice Mississippi."
// let myRegex = /s+/ig // ^ means negate the matches, return others instead.
// let result = quoteSample.match(myRegex);
// console.log(result);

//! Match characters that appear 0 or more times
// let soccerWord = "Gooooooal."
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon"

// let sRegex = /go*/ig; //* Means find instances of g if !found go...
// console.log(soccerWord.match(sRegex)); // returns Goooooo
// console.log(gPhrase.match(sRegex)); // returns g
// console.log(oPhrase.match(sRegex)); // null

let chewieQuote = "Aaaaaaaaaaargh!";
let chewieRegex = /Aa*/ig
// console.log(chewieQuote.match(chewieRegex)); // returns "Aaaaaaa"

//! Find characters with lazy/greedy matching
// let string = "titanic";
// // returns 'ti' with the '?' which means lazy matching and
// // 'titani' without, which is greedy matching
// let regex = /t[a-z]*?i/; 
// console.log(string.match(regex)); 

// let text = "<h1>Winter is coming</h1>"
// let myRegex = /<.*?>/
// let result = text.match(myRegex);
// console.log(result);

//! Quick Test, find one or more of a character
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals); // returns the 3 Cs

//! Match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing."
let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result); // returns TRUE, using ^before chars returns a match thats at the start of the string

//! Match ending string patterns
let caboose = "The last car on a train is the caboose"
let lastRegex = /caboose$/;
// console.log(lastRegex.test(caboose)) //retuns true because caboose is indeed at the end of the strings

//! Match all letters and numbers
let quoteSample = "The five boxing wizards jump quickly"
let alphabetRegexV2 = /\w/g; // \w is a shorthand character class that will match [a-z][0-9] and _
//! Match none letters and numbers, to match this use Uppercase W which will return the opposite of the above

// console.log(quoteSample.match(alphabetRegexV2).length); //returns 31 for the lenth of chars 

//! Match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // replacing 'd' with D returns all non-number characters instead
// let result = numString.match(numRegex);
// console.log(result) // returns 3 as the number of numbers found

//!Quick Test
//*  Validating a username
/* 
   1. If there are numbers, they must be at the end.
   2. Letters can be lowercase and uppercase.
   3. Atleast two characters long. Two-letter names can't have numbers.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2,}\d*$/g; // this regex passes the conditions above, {2,}, this means minimum of two, will have no pair if max is not specified
// console.log(userCheck.test(username));

//! Match whitespace
let sample = "Whitespace is important in separating words.";
let countWhiteSpace = /\s/g; // using uppercase S returns non-whitespace chars instead
// console.log(sample.match(countWhiteSpace)); // returns all white space chars

//! Specify Upper and Lower number of matches
let ohStr = "Ohhh no";
let ohRgex = /Oh{3,} no/; //{3,} means match 3 or specified number of 'h', an upper bound and a lower bound of h characters.
// console.log(ohRgex.test(ohStr))

//! Specify exact number of matches
let timStr = "Hazzzzah"
let timRegex = /Haz{4}/; // Without the comma, this means match exactly 'Ha', followed by 4z
let result = timRegex.test(timStr)

//! Check for All or None
let favWord = "favorite"
let favRegex = /favou?rite/; // '?' conditionally checks if u exists or not and matches both 'favourite' and 'favorite'
console.log(favRegex.test(favWord))