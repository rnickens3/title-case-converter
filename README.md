# Title Case Converter
Converts first character in provided sentence to uppercase, all other letters will be lowercase.
Assignment provided by FreeCodeCamp.org

## User Stories
1. You should have a titleCase function that takes a string as an argument.
2. The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
3. titleCase("I like to code") should return "I Like To Code".
4. titleCase("javaScript is fun") should return "Javascript Is Fun".

## Tools & Languages Used
* JavaScript

## Features
* Converts first letter of every word to uppercase
* Converts the rest of the letters of every word to lowercase

## Examples
```
JavaScript

function titleCase(sentence) {
  let result = [];
  let sepWords = sentence.split(" ");

  for (let i = 0; i < sepWords.length; i++) {
    let combWords = sepWords[i].charAt(0).toUpperCase() + sepWords[i].slice(1).toLowerCase();
    result.push(combWords);
  }
  return result.join(" ");
}

console.log(titleCase("I like to code")) // "I Like To Code"

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
3. Place any string in the function and it will convert
