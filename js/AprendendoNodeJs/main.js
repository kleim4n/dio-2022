/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par.`);
        }
    }
    console.log('Os números pares são: ', evenNums);
}

returnEvenValues([1,2,3,4,5,6,7,8]);