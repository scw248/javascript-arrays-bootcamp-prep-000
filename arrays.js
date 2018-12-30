var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const addElementToBeginningOfArray = (arr, elem) => {
  let newArr = arr.slice()
  newArr.unshift(elem);
  return newArr;
}

const destructivelyAddElementToBeginningOfArray = (arr, elem) => {
  arr.unshift(elem);
  return arr;
}

const addElementToEndOfArray = (arr, elem) => {
  let newArr = arr.slice();
  newArr.push(elem)
  return newArr
}

const destructivelyAddElementToEndOfArray = (arr, elem) => {
  arr.push(elem);
  return arr;
}