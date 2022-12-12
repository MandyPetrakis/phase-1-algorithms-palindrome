function isPalindrome(word) {
  let wordReversed = [...word];

  wordReversed = wordReversed.reverse().join("");

  return wordReversed === word;
}

/* 
build function to reverse the word
compare backwards word to forward word - return result
  Add your pseudocode here

  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
