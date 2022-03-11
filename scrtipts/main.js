//  LESSON 30 - ARRAYS --> MAP FUNCTION

// Create --> myMap(someArray, someFunction)
// The myMap() method creates a new array populated with the results of calling a provided function on every element in the provided array.

const array = [2, 4, 6, 8, 10];
const newArray = [];

function multiplication(key) {
    return key * 4;
}

function myMap (someArray, someFunction) {
    for(i = 0; i < someArray.length; i++) {
        result = someFunction(someArray[i]);
        newArray.push(result);
    }
    console.log(`The new Array is: ${newArray}`);
}
myMap(array, multiplication)


// ADDITIONAL OPTION:
let arr = [1, 2, 4, 6, 8, 10];

function increment(elem) {
  return elem * 2;
}

function myMap(someArr, someFunc) {
  resultsArr = [];
  for (elem of someArr) {
    result = someFunc(elem);
    resultsArr.push(result);
  }
  return resultsArr;
}

console.log(myMap(arr, increment));