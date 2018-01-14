
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(originalArray, element){
  var newArray = [element, ...originalArray];
    return newArray;
}

addElementToBeginningOfArray([1], 'f', 'o', 'o')



function destructivelyAddElementToBeginningOfArray(originalArray, element){
  originalArray.unshift(element);
      return originalArray;
}

destructivelyAddElementToBeginningOfArray('foo', 1)

function addElementToEndOfArray(originalArray, element){
  var newArray = [...originalArray, element];
    return newArray;
}

function destructivelyAddElementToEndOfArray(originalArray, element){
  originalArray.push(element);
    return originalArray
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(originalArray, element){
    originalArray.shift(element);
      return originalArray;
}

