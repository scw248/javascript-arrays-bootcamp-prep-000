var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = arr.slice()
  newArr.unshift(elem);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  let newArr = arr.slice();
  newArr.push(elem)
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(array, index){
  return array[index];
}