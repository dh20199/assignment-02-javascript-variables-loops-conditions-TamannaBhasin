 // In this exercise we practice using variables and pasisng them
// to functions (as parameters) and from functions (as return values)

// in JS we work with several kinds of variables.
// There are several ways to declare varaiables, but we will always use
// this structure:
// var name = value;

// you can also declare several variables at once:
// var name1 = value1,
//     name2 = value2,
//     name3 = value3;
// note the commas on the first 2 lines, and the semi-colon on the last

// Here are the variable types you are likely to encounter in the course:
// - strings are sequences of letters or other characters
// - numbers are treated by JS as numbers, not as strings
// - booleans are either true or false
// - arrays are collections of values, usually written as [value0, value1, value2]
// - objects are complex variables with internal structure.
// Objects are quite a bit more complex than the other variable types and we will discuss them later.


// Problem 1
// write a function "hello" that always returns the string "Hello!"

  function hello () {
    // if you want you can declare a string variable first
    // or in this case you can just return the string directly
    // with something like "return 'Hello!'"
  }

// Problem 2
// Improve your initial function by accepting a parameter
// "name" and returning a string "Hello, [insert name]!"

function greeting(name) {
  // use the '+' operator to combine
  // strings.  So for instance, if I wanted to
  // say goodbye, I might write
  // var parting = "Goodbye, " + name + ".";
  // but of course I actually want to say hello.
}

// Problem 3
// write a function that takes three parameters and returns an array
// consisting of the three parameters together

function returnArray (first, second, third) {
  // you can define the array using "new Array ()" or just "[ , , ]"
  // don't forget to return it
}


// Problem 4
// write a function that, when passed a single argument (an array of 3 or more elements)
// returns a sentence of the form "first second was a third", so, e.g.,
// splitArray(["Italo", "Calvino", "novelist"])
// should return
// "Italo Calvino was a novelist."

function splitArray (thisArray) {
  // remember you can access individual elements of an array with
  // array[0]
  // array[1]
  // etc.

}

// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var exports = module.exports = {};
}
else {
  var exports = window.skeleton = {};
}

exports.hello = hello;
exports.greeting = greeting;
exports.returnArray = returnArray;
exports.splitArray = splitArray;
