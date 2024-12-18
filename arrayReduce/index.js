// ~# SIGNATURE
/**
 * arr.reduce(cb, initialValue)
 * 
 * arr.reduce((prevValue, currValue, currIndex, array)=>{
 * const nextValue = prevValue + currValue;
 * return nextValue;}, initialValue)
 */

// sum of all values
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = (arr) => arr.reduce((prevValue, currValue, currIndex, array) => {
  const nextValue = prevValue + currValue;
  return nextValue;
}, 0);

console.log('====================================');
console.log(sum(arr));
console.log('====================================');


// segregation of all values
const arr2 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segregate = (arr) => arr.reduce((prev, curr, currIdx, arr) => {
  const florredValue = Math.floor(curr);
  if (!prev[florredValue]) {
    prev[florredValue] = []
  };
  prev[florredValue].push(curr);
  return prev;
}, {})

console.log('====================================');
console.log(segregate(arr2));
console.log('====================================');

// piping pure fns

const upperCase = (str) => {
  return str.toUpperCase();
};
const reverse = (str) => {
  return str.split('').reverse().join('');
};
const append = (str) => {
  return "Hello " + str;
};

const arr3 = [upperCase, reverse, append];

const pipe = (arr, valueToBePassed) => arr.reduce((prevValue, currValue, currentIndex, _array) => {
  const nextValue = currValue(prevValue);
  return nextValue;
}, valueToBePassed)

console.log('====================================');
console.log(pipe(arr3, 'learnersbucket'));
console.log('====================================');

// Async tasks executor

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${time}`);
    }, time * 1000)
  })
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
  ];

const asyncSeriesExecuter = (promiseArray) => promiseArray.reduce((prevValue, currentValue, currentIndex, _array) => {
  return prevValue.then(() => currentValue.then((val) => console.log(val)))
}, Promise.resolve());

asyncSeriesExecuter(promises);