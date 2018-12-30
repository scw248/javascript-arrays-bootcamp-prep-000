const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const addElementToBeginningOfArray = (arr, elem) => {
  let newArr = arr.slice
  newArr.unshift(elem);
  return newArr;
}

const destructivelyAddElementToBeginningOfArray = (arr, elem) => {
  arr.unshift(elem);
  return arr;
}

const 