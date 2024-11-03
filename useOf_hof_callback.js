
// 1.
let numbers = [1, 3, 5, 8, 10, 9, 18, 15, 36, 89, 55];

let isOdd = function(num) {
    return num%2 !== 0;
}

let isEven = function(num) {
    return num % 2 == 0;
}

let isDevisibleBy = function (num) {
    return num%5 === 0;
}

let finalArray = [];

// Higher Order Function:

// Here we are using function defination and filtering Array.
let filter = function(arr, cbfn) {
    for(let num of arr) {
        if(cbfn(num)) {
            finalArray.push(num);
        }
    }
    return finalArray;
}

// isEven, isOdd : Callback function
// console.log(filter(numbers, isEven)); 
// console.log(filter(numbers, isOdd));
// console.log(filter(numbers, isDevisibleBy));



// 2.
// Higher order function: 
// Here we are returning function defination.
function multiplyBy(num) {
    return function (num2) {
        return num * num2;
    };
} 


// Here we can create multiple function with different variables.

let multiplyBy7 = multiplyBy(9);

let multiplyBy12 = multiplyBy(8);
// console.log(multiplyBy7(7));

// console.log(multiplyBy12(12));

let guna = multiplyBy(6);
console.log(guna(20));