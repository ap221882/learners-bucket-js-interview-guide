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
const sum = (arr)=>arr.reduce((prevValue, currValue, currIndex, array)=>{
  const nextValue = prevValue + currValue;
  return nextValue;
}, 0);

console.log('====================================');
console.log(sum(arr));
console.log('====================================');


// segregation of all values
const arr2 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segregate = (arr) => arr.reduce((prev, curr, currIdx, arr)=>{
  const florredValue = Math.floor(curr);
  if(!prev[florredValue]){
    prev[florredValue] = []
  };
  prev[florredValue].push(curr);
  return prev;
},{})

console.log('====================================');
console.log(segregate(arr2));
console.log('====================================');