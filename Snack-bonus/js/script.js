// declaration array
const array = [1,23,65,32,3,56,29,5,4,2,88,200];
const a = 2;
const b = 5;
// save newArray and call function
const newArray = array.filter((element,index) => a <= index && b >= index);
// show result in console
console.log(newArray);
