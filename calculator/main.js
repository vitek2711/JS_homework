'use strict'

// Variables
let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;
let addMemory = '';
const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');
const resultField = document.querySelector('.result');

// Arrays
const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action  = ['-', '+', 'x', '/', '+ -', 'M+', 'M-'];

//Clear function
function clearOutputField() {
    num1 = '';
    num2 = '';
    addMemory = 0;
    finish = false;
    outPut.textContent = '0';
}

//Clear
document.querySelector("#ac").onclick = clearOutputField;

// Click event
buttons.addEventListener('click', (e)=>{
    let elem = e.target;
    if (!elem.classList.contains('btn')) {
        elem.parentNode;
    }

    const key = e.target.textContent;

    // is the button pressed
    if (numStrArr.includes(key)) {
        if (num2 === '' && operSymbol === ''){
            num1 += key;
            outPut.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            outPut.textContent = num2;
        }
        else {
            num2 += key;
            outPut.textContent = num2;
        }
        console.log(num1, num2, operSymbol);
        return;
    }

    // the button of operations pressed
    if(action.includes(key)) {
        operSymbol = key;
        outPut.textContent = operSymbol;
        console.log(num1, num2, operSymbol);
        return;
    }

   // add in memory function
  /*  function addInMemory(){
        if (key === '=' && operSymbol === 'M+') {
            if (num1 === '') {
                addMemory = ''
            }
            else if (num1 !== '') {
                addMemory = (+num1);
                num1 = '';
                num2 = '';
                operSymbol = '';
                resultField.insertAdjacentText('afterbegin', 'm');
            }
            console.log(addMemory);
        }
    }
    addInMemory();*/

    // get from memory function
    function getFromMemory() {
        action.includes(key);
        operSymbol = key;
        if (addMemory !== '' && operSymbol){
             num1 = (+num1) - (+addMemory);
        }
        else if (addMemory !== '' && operSymbol) {
              num1 = num1 + addMemory;
        }
        else if (addMemory !== '' && operSymbol){
             num1 = num1 * addMemory;
        }
        else if (addMemory !== '' && operSymbol){
              num1 = num1 / addMemory;
        }
        else if (addMemory === '') {
             console.log('memory is empty');
        }
    }


    // calculations
    if (key === '=') {
        switch (operSymbol) {
            case '+':
                num1 = (+num1) + (+num2);
            break;
            case '-':
                num1 -= num2;
            break;
            case 'x':
                num1 *= num2;
            break;
            case '/':
                if (num2 === '0') {
                   outPut.textContent = 'error';
                   return;
                }
                num1 /= num2;
            break;
            case '+ -':
                num1 = -num1;
            break;

            // add in memory
           case 'M+':
                addMemory = (+num1);
                resultField.insertAdjacentText('afterbegin', 'm');
                num1 = '';
                num2 = '';
                operSymbol = '';
                console.log(addMemory);
            break;

            //get from memory
           case 'M-':
               getFromMemory();
               /*if (addMemory !=='' && key === '+') {
                   num1 = (+num1) + (+addMemory);
               }
               if (addMemory !=='' && key === '-') {
                   num1 = num1 - addMemory;
               }
               if (addMemory !=='' &&  key === '*') {
                   num1 = num1 * addMemory;
               }
               if (addMemory !=='' && action === '/') {
                   num1 = num1 / addMemory;
               }
               else if (addMemory === '') {
                   console.log('memory is empty');
                   return num1;
               }
            break;*/
        }
        finish = true;
        outPut.textContent = num1;
        console.log(num1, num2, operSymbol);
    }
});



