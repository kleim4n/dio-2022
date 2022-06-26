/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}
