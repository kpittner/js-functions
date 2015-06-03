/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE


    var total = 1;
    var arr = [1, 2, 3, 4];
    for (var i = 0; i < arr.length; i++) {
      total = total * arr[i];
    };
    return total;
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(forEach(forEach === 24));


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    // YOUR CODE HERE

    var num = 0;
    for (var i = 0; i < args.length; i++){
      num = num + args[i];
    }
    return num;
}

console.assert(sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    var num = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++){
      num = num + args[i];
    }
    return num/args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var large = 0;
    // .. do something with each element of args
    // YOUR CODE HERE
    for (var i = 0; i < args.length; i++){
      if (args[i] > large) {
        large = args[i];
      }
    }
      return large;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var longestWord = args[0];
    for (var i = 0; i < args.length; i++) {
      if (args[i].length > longestWord.length) {
        longestWord = args[i];
      }
    }
    return longestWord;

}
 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var numbers = [50, 21, 67, 356];
numbers.sort(function numberS(a,b) {
  return a - b;
});

console.assert(numbers[0] === 21);

// .concat()

var str1 = "Howdy";
var str2 = "there!";

console.assert(str1.concat (str2))

// .indexOf()

var str = "Hey there!";

console.assert(str.indexOf("t"));

// .split()

var str = "Have a great day!";
var arr = str.split(" ");

console.assert(str.split(" "));

// .join()

var arr = ["adventure", "time", "jake", "finn"];

console.assert(arr.join());

// .pop()

var arr = ["adventure", "time", "jake", "finn"];

console.assert(arr.pop());

// .push()

var arr = ["adventure", "time", "jake", "finn"];

console.assert(arr.push("beemo"));

// .slice()

var arr = ["adventure", "time", "jake", "finn"];
var newArr = arr.slice(1,2);

console.assert(arr.slice(1,2));

// .splice()

var arr = ["adventure", "time", "jake", "finn"];

console.assert(arr.splice(0, 2, "marceline"));

// .shift()

var arr = ["adventure", "time", "jake", "finn"];
var newArr = arr.shift();

console.assert(arr.shift());


// .unshift()

var arr = ["adventure", "time", "jake", "finn"];
var newArr = arr.unshift();

console.assert(arr.unshift("rainacorn"));

// .filter()

function biggerThan(number) {
  return number > 15;
}
var arr = [4, 9, 90, 35, 14, 26].filter(biggerThan);

console.assert(arr.filter(biggerThan));

// .map()

var nums = [2, 4, 9];
var sqrt = nums.map(Math.sqrt);

console.assert(nums.map);
