
// We know that functions and Array are objects (Special kind of obj. that can be Executed.) in JS And obj. is an Expression, Expr. can only be stored on the RHS of =(assignment operator).

// Ananymous Function:
let isOdd = function (num) {
    return num%2 !== 0;
};

// We can pass any kind of Expr. as an arguments inside functions. Becoz as an Argument we can only pass Expr.

// We can Only return an Expr. from a function.
// Higher Order Function
function filterOdd(arr, fn) {
    console.log(fn(25),  "Inside filterOdd");
    return arr;  // return Expression.
}

// Higher Order Function
function filterEven(arr) {
    return function() {};  // return func. defination
}
console.log(filterEven([1,3,4,9]));

// isOdd (Callback Function)
filterOdd([1,2,4,5], isOdd); // isOdd -> Function Defition

// 1. A func. that accepts a function defination as an arguments is know as HOF. Whether it's accepts a func. defination Or return a func. defination called HOF.

// 2. func. which is passed as function defination in HOF is called Callback Func.