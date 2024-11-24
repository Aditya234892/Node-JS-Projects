/**
 * 1. Sum of Array
 */
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * 2. Remove Duplicates
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * 3. Find Maximum
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * 4. Find Minimum
 */
function findMin(arr) {
  return Math.min(...arr);
}

/**
 * 5. Average of Array
 */
function averageArray(arr) {
  return arr.length ? sumArray(arr) / arr.length : 0;
}

/**
 * 6. Filter Even Numbers
 */
function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

/**
 * 7. Filter Odd Numbers
 */
function filterOdd(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

/**
 * 8. Count Occurrences
 */
function countOccurrences(arr, value) {
  return arr.reduce((count, num) => (num === value ? count + 1 : count), 0);
}

/**
 * 9. Reverse Array
 */
function reverseArray(arr) {
  return [...arr].reverse();
}

/**
 * 10. Chunk Array
 */
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Exporting Functions
module.exports = {
  sumArray,
  removeDuplicates,
  findMax,
  findMin,
  averageArray,
  filterEven,
  filterOdd,
  countOccurrences,
  reverseArray,
  chunkArray,
};