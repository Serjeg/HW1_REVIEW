/*1. Find the minimum element of an array */

let minNum = [897, 159, 5, 28, 1, -1];

for (let x = 0; x < minNum.length; x++) {
    if (minNum[x] < minNum[0]) {
        minNum[0] = minNum[x];
    }
}
console.log(minNum[0]);


/*2. Find the maximum element of an array */

let maxNum = [-45, 0, 34, 510, 13, 214];

for (let y = 0; y < maxNum.length; y++) {
    if (maxNum[y] > maxNum[0]) {
        maxNum[0] = maxNum[y];
    }

}
console.log(maxNum[0]);


/*3. Find the index of the minimum element of an array */

function findIndexOfMinNum(arr) {
  let minIndex = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return {
    minIndex
  };
}
console.log(findIndexOfMinNum([17, 1, 0, -2, 15, 3, 0, -1]));


/*4. Find the index of the maximum element of an array */

function findIndexOfMaxNum(arr) {
  
  let maxIndex = 1;
  let max = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
     max = arr[i]
     maxIndex = i;
    }
  }
  return {
    maxIndex
  };
}
console.log(findIndexOfMaxNum([335, -286, 157, 14, -400, 1, 2703, 76]));


/*5. Calculate the sum of the elements of an array with odd indices */

/////


/*6. Reverse an array (array in the opposite direction) */

/////


/*7. Count the number of uneven elements in an array */

/////


/*8. Swap the first and second half of the array, for example, 
for an array 1 2 3 4, result 3 4 1 2 */

/////


/*9. Sort the array (Bubble, Select, Insert) */

/////