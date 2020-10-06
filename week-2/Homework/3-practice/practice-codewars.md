/*Complete the following CodeWars on JavaScript concepts you learned in previous weeks.
# CodeWars
- [Is it even?](https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript)
1. In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.*/

function testEven(n) {
    if ( n % 2 == 0) {
      return true;
    } else {
      return false
    }
}

function testEven(n) {
  return n % 2 == 0;
}
//Test.assertEquals(testEven(0), true, "testEven for 0");
//   Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
//   Test.assertEquals(testEven(1), false, "testEven for 1");
//   Test.assertEquals(testEven(2), true, "testEven for 2");
//   Test.assertEquals(testEven(-4), true, "testEven for 2");


/*  2.- [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript)
//  Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump == mpg * fuelLeft) {
      return true;
    } else {
      return false;
    }
  };

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump == mpg * fuelLeft;
  }

// const assert = require("chai").assert;
// describe("zeroFill", function() {
//   it("Sample Tests", function() {
//     assert.equal(zeroFuel(50, 25, 2), true);
//     assert.equal(zeroFuel(100, 50, 1), false);
//   });
// });
// 

/* 3 [Removing elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript)
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!*/

function removeEveryOther(arr){
    let answer = [];
    arr.map(function (current, index, array) {
    if(index % 2 === 0) {
      answer.push(current)
    }
  })
    return answer;
  }

function removeEveryOther(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
  if(i % 2 === 0) {
    result.push(arr[i])
  }
}

function removeEveryOther(arr){ 
  for (let x = 1; x < arr.length; x++) {
    arr.splice(x, 1);    
  }
  return arr;
}

// Test.describe("Basic tests",_=>{
//     Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
//     Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
//     Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
//     Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
//     })

/* 4- [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript)
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8*/
var summation = function (num) {
    let sum = 0;    
    for (let i = 1; i <= num ; i++) {
      sum += i;
    }    
    return sum;
  }

  const summation =  n => n * (n+1) / 2;
// describe('summation', function () {
//     it('should return the correct total', function () {
//       Test.assertEquals(summation(1), 1)
//       Test.assertEquals(summation(8), 36)
//     })
//   })
  

/* 5- [Find the Difference in Age between Oldest and Youngest Family Members](https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript)
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}


function differenceInAges(ages) {
  ages.sort((a, b) => a-b);
  let result = [];
  result.push(ages[0]);
  result.push(ages[ages.length-1]);
  result.push(ages[ages.length-1]-ages[0]);
  return result;
}
// Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
// Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);


/*6 [Filter out the Geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript)
Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];    
    return birds.filter(item => !geese.includes(item));
  };

function gooseFilter2 (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];    
    let newArray = birds.filter(function(elem) {
        return geese.indexOf(elem) === -1;
      }) // with the filter we pass all the elements which satisfied our condition (indexOf),into a new array. Filter usually works with sth is true or false
      return newArray;
  };

function gooseFilter3(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => geese.indexOf(item) == -1);
}

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];    
  geese.forEach(goose => {
    const indice = birds.indexOf(goose);
    if (indice !== -1) {
      birds.splice(indice, 1);
    }   
  })
  return birds;
}
//   Test.describe("Basic tests",function(){
//     Test.it("Mixed list",function(){
//       Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//     });
//     Test.it("No geese",function(){
//       Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//     });
//     Test.it("All geese",function(){
//       Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
//     });