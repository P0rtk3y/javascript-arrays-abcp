
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(originalArray, element){
  var newArray = [element, ...originalArray];
    return newArray;
}

addElementToBeginningOfArray([1], 'f', 'o', 'o')

function destructivelyAddElementToBeginningOfArray(originalArray, element){
   originalArray = originalArray.unshift(element);
      return originalArray;
}