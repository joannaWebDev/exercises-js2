/*
    Change the names in the array by putting the first letter in UpperCase
    Use instruction 'for' to console.log each name
*/
 const mcTeam = ["angelo","vincent","carlos","henriette"];

for (let i = 0; i < mcTeam.length; i++) {
    console.log('1', mcTeam[i][0].toUpperCase() + mcTeam[i].substring(1))
  }

//YOUR CODE HERE
for (let i = 0; i < mcTeam.length; i++) {
    let element = mcTeam[i];
    element = element[0].toUpperCase() + element.substring(1);
    console.log('2', element);
    
}

mcTeam.forEach(element => {
    element = element[0].toUpperCase() + element.substring(1);
    console.log('3', element);
});

mcTeam.map(element => {
    element = element[0].toUpperCase() + element.substring(1);
    console.log('4', element);
});

/*EXPECTED RESULT
>Angelo
>Vincent
>Carlos
>Henriette
*/

//all upercase
mcTeam.forEach(member => {
    member = member.toUpperCase();
    console.log(('uppercase' , m));  
})
