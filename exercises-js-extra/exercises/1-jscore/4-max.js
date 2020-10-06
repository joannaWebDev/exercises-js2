/*    
    Given an array of numbers, create a function to return the maximum even number
*/

const numbersArray1 = [1,3,2,5,9];
const numbersArray2 = [7,8,5,7,3,6];

// const max = (numbersArray) => {
//     numbersArray.sort((x, y) => y - x);

//     for (var i = 0; i < numbersArray.length; i++) {
//       if (numbersArray[i] % 2 == 0)
//         return numbersArray[i];
//       }
//     }
  

//2º opcion 
const max = (numbersArray) => {
    let maxNumber=0;
    numbersArray.forEach(element => {
        if (element % 2 == 0){ //con esto miramos si es par, el resto de dividir entre 2 es 0
            if (element > maxNumber){
                maxNumber = element; //maxNumber = 8
                console.log(maxNumber);
            }
        }
    });
    return maxNumber;
}


console.log("Maximum even number in the first array is " + max(numbersArray1));
console.log("Maximum even number in the second array is " + max(numbersArray2));


// let array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element * 2)
// }

// array.forEach(element => {
//     console.log(element * 2)
// });

// array.map(element => console.log(element * 2)); //coje cada elem por separado y hace una operacion sobre el