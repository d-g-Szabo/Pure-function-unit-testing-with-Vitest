// pure functions to test
// implement the functions to pass as many of the tests in js-challenges.test.js as you can

export function isPalindrome(string) {
  // implement function
  let isPalindrome = false;
  string = string.toLowerCase();
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  // split() will split the string into an array of substrings
  // reverse() will reverse the array
  let reversedString = string.split("").reverse().join(""); // join() will join the elements of the array into a string
  if (string === reversedString) {
    isPalindrome = true;
  }
  return isPalindrome;
}

export function isAnagram() {
  //can make it without arguments
  // implement function
  let isAnagram = false;
  let string1 = arguments[0].toLowerCase(); // if there is no arguments, it will be undefined
  let string2 = arguments[1].toLowerCase(); // but if there is, it will be the indexed argument !cool!
  string1 = string1.replace(/[^a-zA-Z0-9]/g, "");
  string2 = string2.replace(/[^a-zA-Z0-9]/g, "");
  // split() will split the string into an array of substrings
  let sortedString1 = string1.split("").sort().join(""); // sort() will sort the array in ascending order
  let sortedString2 = string2.split("").sort().join(""); // join() will join the elements of the array into a string
  if (sortedString1 === sortedString2) {
    isAnagram = true;
  }
  return isAnagram;
}

export function countLetters(word, letterToCount) {
  // implement function
  word = word.toLowerCase();
  letterToCount = letterToCount.toLowerCase(); // to make it case-insensitive use toLowerCase()
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index] === letterToCount) {
      count++;
    }
  }
  return count;
}
