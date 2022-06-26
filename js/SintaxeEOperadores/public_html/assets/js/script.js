/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function comparar(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var li = document.createElement('li');
    var text = document.createTextNode(compararNumeros(n1, n2));
    li.appendChild(text);
    document.getElementById('listComp').appendChild(li);
}
function compararNumeros(n1, n2){
    var text = "";
    var n3 = n1 + n2;
    text += "Os números " + n1 + " e " + n2;
    (n1 === n2)?(text +=' '):(text +=' não ');
    text += 'são iguais. Sua soma é ' + n3 + ', que é ';
    (n3 === 10)?(text+='igual a '):(
    (n3 > 10)?(text += "maior que "):(text+='menor que '));
    text +='10 e ';
    (n3 === 20)?(text+='igual a '):(
    (n3 > 20)?(text+='maior que '):(text+='menor que '));
    text +='20.';
    return text;
}