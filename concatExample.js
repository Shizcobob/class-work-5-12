const arrA1 = [1,2,3];
const arrA2 = [4,5,6];
const arrB1 = ["a", "b", "c"];
const arrB2 = ["x","y","z,"];
const expected7 = [1,2,3,"a","b","c"];
const expected8 = [4,5,6,"x","y","z"];




var result10 = arrA1.concat(arrA2,arrB1,arrB2);
console.log(result10);