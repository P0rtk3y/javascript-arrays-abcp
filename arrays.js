
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, originalArray){
  var newArray = [element, ...originalArray];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(element, originalArray){
    
    originalArray.unshift(element);
      return originalArray;
}