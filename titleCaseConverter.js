/*
Assignment provided by FreeCodeCamp.org

Completed: January 13th, 2026
Program Description: Converts first character in provided sentence to uppercase, all other letters will be lowercase.
Concepts Learned: Leaving the seperate words as an array makes things much simpler. I was combining them all into a
single string and trying to put spaces in between until I realized I could just push and join with an array. 

User Stories:
1. You should have a titleCase function that takes a string as an argument.
2. The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
3. titleCase("I like to code") should return "I Like To Code".
4. titleCase("javaScript is fun") should return "Javascript Is Fun".
*/

function titleCase(sentence) {
  let result = [];
  let sepWords = sentence.split(" ");

  for (let i = 0; i < sepWords.length; i++) {
    let combWords = sepWords[i].charAt(0).toUpperCase() + sepWords[i].slice(1).toLowerCase();
    result.push(combWords); // I originally added everything up into a single string and tried putting spaces in between. Not a good solution.
  }
  return result.join(" ");
}
