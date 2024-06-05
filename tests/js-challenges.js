// pure functions to test
// implement the functions to pass as many of the tests in js-challenges.test.js as you can

export function isPalindrome(string) {
  // implement function
  let isPalindrome = false;
  string = string.toLowerCase();
  string = string.replace(" ", "");
  let reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    isPalindrome = true;
  }
  return isPalindrome;
}

export function isAnagram() {
  // implement function
}

export function countLetters(word, letterToCount) {
  // implement function
  word = word.toLowerCase();
  letterToCount = letterToCount.toLowerCase();
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index] === letterToCount) {
      count++;
    }
  }
  return count;
}
