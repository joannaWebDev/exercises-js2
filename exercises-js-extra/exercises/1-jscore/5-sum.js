/*
    If we sum all even numbers between 25 and 50 what is the result?
    Build a function, that calculates the sum of all even numbers between a start number and end number
*/

// YOUR CODE HERE
// const sumEvens = (evenNum) => {
//     let sum = 0
//     for (var i = 25; i <= 50; i++) {
//         if (evenNum[i] % 2 == 0)
//           sum = sum + evenNum[i]
//         }
//         return sum;
// }
// console.log(sumEvens(evenNum));

let total = 0;
for (let i = 25; i < 50; i++) {
    if (i % 2 == 0) {
        total = total + i;
    }    
}
console.log((total));


//let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);

// console.log(sumEvens(numStr));