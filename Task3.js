// Task 3 Write a function that returns an anonymous function, which transforms its input by adding a
// particular suffix at the end.
function add_Suffix(str){
    return function(a){
return a + str 
    }
}
add_ly = add_Suffix("ly")

console.log(add_ly("hopeless"))

// Task 5 Write a function that implements filtering in array
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
let filteredArray = []
function FilterValues(values){
    for(let i = 0; i < values.length; i++){
        if(values[i]){
filteredArray.push(values[i])
        }
    }
    return filteredArray
}
console.log(FilterValues([null, true, {}, { name: "Elon" }, "", NaN, 0]))

// Task 6 Write a function that implements filtering in array
let cars = ["kia", "tesla", "bmw", "mercedes"]
let result = []
function filterByLength(cars){
    for(let i = 0; i < cars.length; i++){
if(cars[i].length>3){
result.push(cars[i])
}
    }
    return result
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]))

// Task 7 Given an array. Determine whether it consists only from uniques or not.
let array = ["kia", "tesla", "bmw", "mercedes", 1, "1"]
let uniques = []
function isUniquee (array){
    for(i=0; i<array.length;i++){
        if(uniques.indexOf(array[i])===-1){
            uniques.push(array[i])
        }
    }
    return uniques.length===array.length
}
console.log(isUniquee(array))

// Task 9 Given an array of numbers. Find the sum of numbersʼ quadratic which are even.
let numbers = [1, 12, 13, 14, 15]
let sum = 0
function sumOfQuadrats (ar){
    for(let i = 0; i < ar.length; i++){
        if(ar[i]%2===0){
            sum += ar[i]**2
        }
    }
    return sum
}
console.log(sumOfQuadrats(numbers))