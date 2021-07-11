// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
function PrintOneToOneHundred() {
  var number = 1;
  while (number < 101) {
    console.log(number)
    number++
  }
}
// PrintOneToOneHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function PrintEveryOtherNumber() {
  var number = 1
  while (number < 100) {
    console.log(number);
    number += 2
  }
}
// PrintEveryOtherNumber();
// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function Number_of_55(numbers) {
  var x = 0;
  numbers.forEach(function (number) {
    if (number === 55) {
      x++
    }
  })
  console.log(x);
}
// Number_of_55([2, 55, 55, 55, 20])

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function Awesomesauce(array) {
  var i = 0;
  var NewArray = [];
  while (i < array.length) {
    NewArray.push(array[i]);
    NewArray.push("awesomesauce");
    i++;
  }
  console.log(NewArray);
}
// Awesomesauce([1, 2, 3, 4, 5]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var ItemAmounts = { chair: 5, table: 2 };
// ItemAmounts.chair = 3;
// console.log(ItemAmounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function everyOtherString(input) {
  var i = 0;
  var NewArray = [];
  while (i < input.length) {
    NewArray.push(input[i]);
    i += 2;
  }
  console.log(NewArray);
}

// everyOtherString(["a", "b", "c", "d", "e"]);


// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function largestNumber(input) {
  var i = 0;
  var maxNumber = 0;
  while (i < input.length) {
    if (input[i] > maxNumber) {
      maxNumber = input[i];
    }
    i += 1;
  }
  console.log(maxNumber);
}
// largestNumber([5, 4, 10, 1, 2]);

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(input) {
  var output = 1;
  while (input > 0) {
    output = output * input;
    input--;
  }
  console.log(output);
}
// factorial(5);

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby

function descending(input) {
  var DescendingArray = [];
  var i = input.length - 1;
  while (i >= 0) {
    DescendingArray.push(input[i]);
    i--;
  }
  console.log(DescendingArray);
}

// descending([1, 3, 5, 7]);

// Write a function that takes in an array of numbers and returns its sum.

function sum(input) {
  var sum = 0;
  input.forEach(function (input) {
    sum += input;
  });
  console.log(sum);
}

// sum([1, 2, 3]);

// Write a function that takes in an array of strings and returns the smallest string

function smallesSting(input) {
  var smallest = "";
  var i = 0;
  while (i < input.length) {
    if (input[i].length > smallest.length) {
      smallest = input[i];
    }
    i++;
  }
  console.log(smallest);
}

// smallesSting(["Polar Bear", "bird", "tiger"]);

// Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order

function reverse(input) {
  var newArray = [];
  for (var i = input.length - 1; i >= 0; i--) {
    newArray.push(input[i]);
  }
  console.log(newArray);
}

// reverse([6, 7, 8, 9, 10]);


// Write a function that takes in an array of words and returns the number of words that begin with the letter “a”

function wordsThatStartWithA(input) {
  var aWords = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i][0] === "a") {
      aWords.push(input[i]);
    }
  }
  console.log(aWords);
}

// wordsThatStartWithA(["apple", "pear", "banana", "ace"]);

// Write a function that takes in an array of strings and joins them together to make a single string separated by commas

function joinStrings(input) {
  var longString = "";
  for (var i = 0; i < input.length; i++) {
    longString += input[i];
  }
  console.log(longString);
}

// joinStrings(["apple", "pear", "banana", "ace"]);

// Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other

function product(input) {
  var total = 1;
  for (var i = 0; i < input.length; i++) {
    total = total * input[i];
  }
  console.log(total);
}

// product([1, 2, 3, 100]);

// Write a function that takes in an array of numbers and returns the two smallest numbers



