const readline = require('readline');

// Function to perform binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }

  return -1; 
}

// Read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Enter a sorted array (comma-separated):');
rl.question('', (arrayInput) => {
  const array = arrayInput.split(',').map(Number);

  console.log('Enter the element you want to find:');
  rl.question('', (targetInput) => {
    const target = Number(targetInput);

    // Perform binary search
    const index = binarySearch(array, target);

    if (index !== -1) {
      console.log(`Element found at index: ${index}`);
    } else {
      console.log('Element not found in the array.');
    }

    rl.close();
  });
});

module.exports = binarySearch;
