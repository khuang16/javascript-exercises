const removeFromArray = function(array, ...arg) {
  // if only one argument
  // let indexToRemove = array.indexOf(arg);
  // array.splice(indexToRemove, 1);
  // return array;

  // account for many optional arguments
  let newArray = [];
  for (item of array) {
    if (!arg.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
