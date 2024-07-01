
// JS is a dynamic language, meaning there is no type checking, 
// meaning you do not have to define what data type will be held by the variable, 
// the JS compiler will figure out what kind of data the variable is holding


// in JavaScript, there are 2 ways to create a variable

// 1. 'let' keyword

let x = 1; // x is holding an int/Number data type

// variable created with 'let' can be changed after the initial declaration

x = 'a'; // x is now holding a character (aka 'char')

x = 'hello world'; // x is now holding a string

x = 1.34; // x is holding a float

//-----------------

// 2. const

// variables defined with the 'const' keyword CANNOT be changed afterwards

const y = 2; 

// if you run this file it will throw this error
// TypeError: Assignment to constant variable.
y = 3;

console.log(y);