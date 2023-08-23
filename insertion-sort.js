// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:
  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  let arrCopy = arr.map(el => el);
  let arrSorted = [];

  while (arrCopy.length !== 0) {
    console.log(arrSorted.join(','));
    let valueToSort = arrCopy.pop();
    arrSorted.push(null);

    let i = arrSorted.length - 2;
    while (arrSorted[i] > valueToSort) {
      if (i === -1) {
        arrSorted[0] = valueToSory;
      }
      else if (i === 0) {
        arrSorted[1] = arrSorted[0];
        arrSorted[0] = valueToSort;
      }
      else {
        [arrSorted[i], arrSorted[i + 1]] = [arrSorted[i + 1], arrSorted[i]]
      }
      i--;
    }

    arrSorted[i+1] = valueToSort;
  }

  return arrSorted;
}


// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let pointer = 1;
  let unsortedHalfCount = (arr.length) - pointer;

  while (unsortedHalfCount) {
    console.log(arr.join(','));


    let currentVal = arr[pointer];

    if (pointer === 0) {
      arr[pointer] = currentVal;
    }
    else {
      let i = pointer;
      while (arr[i - 1] > currentVal) {
        arr[i] = arr[i - 1];
        if (i === 1) {
          arr[i] = arr[i - 1];
          arr[i - 1] = currentVal;
        }
        i--;
      }
      arr[i] = currentVal;
    } 

    pointer++;
    unsortedHalfCount = (arr.length) - pointer;
  }
  return arr;

}

// arr = [2,4,6,8,1,3,5,7,9];
// let x = insertionSortInPlace(arr);
// console.log('final')
// console.log(x.join(','));

module.exports = [insertionSort, insertionSortInPlace];