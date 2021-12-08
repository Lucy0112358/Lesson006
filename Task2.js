// Task 2 Write a function redundant that takes in a string str and returns a function that returns str.
// let str = "apple"
function redundant(str){
    return function(){
        return `"` + str + `"`;
    }
}
const  f1 = redundant("apple")
const f3 = redundant("");;
console.log(f3())