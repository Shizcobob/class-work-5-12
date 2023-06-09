/* 
  Recreate the built in .slice method

  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)

  What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

/**
 * Returns a slice of given arr.
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(items, startIdx, endIdx) {
    var result = [];
    for(var i = startIdx; i < endIdx; i++){
        if(i < 0){
            i = 0;
        }else if(i >= items.length){
        return result;   
        }
       result.push(items[i]);    
    }
return result;
}

// 0 
// Tests
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);

const result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, "should be", expected2);

const result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, "should be", expected3);

const result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, "should be", expected4);

const result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, "should be", expected5);

const result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, "should be", expected6);


/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */


function concat(items1, items2) {
    // code here
    var result = items1;
    for(var i = 0; i < items2.length; i++){
        result.push(items2[i]);
    }
    return result;
  }

  arrA1.concat(arrA2);

  
  // Tests
  const arrA1 = [1,2,3];
  const arrA2 = [4,5,6];
  const arrB1 = ["a", "b", "c"];
  const arrB2 = ["x","y","z,"];
  const expected7 = [1,2,3,"a","b","c"];
  const expected8 = [4,5,6,"x","y","z"];

  const result7 = concat(arrA1, arrB1);
  console.log(result7, "should be", expected7);
  
  const result8 = concat(arrA2, arrB2);
  console.log(result8, "should be", expected8);
