const reverseString = function(string) {
  // USING FOR LOOPS
  // const stringArray = []
  // for (let i = 0; i < string.length; i++) {
  //   stringArray.push(string[i]);
  // }
  // let newString = "";
  // for (let i = 0; i < stringArray.length; i++) {
  //   newString += stringArray[stringArray.length - i - 1]
  // }
  // return newString;

  // USING STRING METHODS
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
