'use strict'

// Variables
let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;
let addMemory = '';
let memoryClear = false;
const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');
document.querySelector('.memory').style.display = 'none';

// Arrays
const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'x', '/', 'M+', 'MR/C'];

//Clear function
function clearOutputField() {
    num1 = '';
    num2 = '';
    operSymbol = '';
    finish = false;
    showData('0');
}

// show data
function showData(data) {
    if (!num1 && !operSymbol && !num2 && !data) {
        return;
    }
    if (data) {
        outPut.textContent = data;
        return;
    }
    outPut.textContent = `${num1}${operSymbol}${num2}`;
}

//Clear
document.querySelector("#ac").onclick = clearOutputField;

// Click event
buttons.addEventListener('click', (e) => {
    if (finish) {
        finish = false;
        clearOutputField();
    }
    let elem = e.target;
    if (!elem.classList.contains('btn')) {
        return;
    }

    const key = elem.textContent;

    // is the button pressed
    if (numStrArr.includes(key)) {
        if (num2 === '' && operSymbol === '') {
            num1 += key;
        }
        else if (num1 !=='' && num2 !== '' && finish) {
             num2 = key;
             finish = false;
             outPut.textContent = num2;
            }
        else {
            num2 += key;
            showData();
        }
        console.log(num1, num2, operSymbol);
    }

    // the button of operations pressed
    if (action.includes(key)) {
        if (key === 'MR/C') {
            if (memoryClear) {
                addMemory = 0;
                memoryClear = false;
                // memory is off
                document.querySelector('.memory').style.display = 'none';
            }
            showData(addMemory);
            memoryClear = true;
            return;
        }
        if (key === 'M+') {
            let m = num2 || num1;
            addMemory += Number(m);
            memoryClear = false;
            // memory is enabled
            document.querySelector('.memory').style.display = 'block';
            return;
        }
        operSymbol = key;
        console.log(num1, num2, operSymbol);
    }

    // calculations
    if (key === '=') {
        if (num2 === '') num2 = num1;
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
            }
        finish = true;
        showData(num1);
        memoryClear = false;
        console.log(num1, num2, operSymbol);
        return;
    }
    memoryClear = false;
    showData();
});