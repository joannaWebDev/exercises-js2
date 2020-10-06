/*
================
EXERCISE 1
Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
================
*/
const body = document.querySelector('body');
//setTimeout(() => body.style.backgroundColor = 'cyan', 5000)
// function changeBackgroundColorToRed () {
//     body.style.backgroundColor = 'red';
// }


//setTimeout(changeBackgroundColorToRed, 7500);

// function callCallback(inputFunction) {
//     inputFunction()
// }

// callCallback(changeBackgroundColorToRed)
/* Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp) */
const changeColorInterval = setInterval(() => {
    const numeroAleatorio = Math.random() > .5
    body.style.backgroundColor =numeroAleatorio ? 'cyan' : 'blue'
} , 5000)

console.log(changeColorInterval);