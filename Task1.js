// Task 1 Create a function that implements partial sum
function sum(a){
    return function (b){
      return a+b
    }
}
const addOne = sum(1);
console.log(addOne(3))

// Task 9 Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
// word or phrase without a repeating letter.

let str = "abcd efij klmnop"; 
let arr = [str[0]];
function NonPattern(str) {
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
      if (arr.indexOf(array[i]) === -1) {
      arr.push(array[i]);
    }
  }
  let res = array.length === arr.length;
  return res;
}
console.log(NonPattern(str));

// Task 4
function printAfter(print) {
 let a = "bye world"
 print()
 return   a 
}

const print = () => console.log("Elon Musk");
printAfter(print);

