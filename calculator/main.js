'use strict'

// Variables
let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;
let addMemory = '';
addMemory = num1 || num2;
let memoryClear = true;
const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');

document.querySelector('.memory').style.display = 'none';

// Arrays
const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'x', '/'];
const memoryAction = ['M+', 'MR/C'];

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
    else if (data) {
        outPut.textContent = data;
        return;
    }
    outPut.textContent = `${num1}${operSymbol}${num2}`;
}

//Clear
document.querySelector("#ac").onclick = clearOutputField;

// Click event
buttons.addEventListener('click', (e) => {
    let elem = e.target;
    if (!elem.classList.contains('btn')) {
        return;
    }

    const key = elem.textContent;

    // is the button pressed
    if (numStrArr.includes(key)) {
        if (num2 === '' && operSymbol === '') {
            num1 += key;
            showData(num1);
            return;
        }
        else if (num1 !=='' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            showData();
            return;
        }
        else {
            num2 += key;
            showData();
        }
        console.log(num1, num2, operSymbol);
        return;
    }

    // the button of operations pressed
    if (action.includes(key)) {
        operSymbol = key;
        console.log(num1, num2, operSymbol);
    }
    if (memoryAction.includes(key)) {
        if (key === 'MR/C' && addMemory !== '') {
            if (memoryClear) {
                // memory is off
                addMemory = '';
                showData(num1);
                document.querySelector('.memory').style.display = 'none';
            }
            showData(addMemory);
            memoryClear = true;
            return;
        }
        if (key === 'M+' && addMemory === '') {
            let m = num2 || num1 || addMemory;
            addMemory += Number(m);
            memoryClear = false;
            // memory is enabled
            document.querySelector('.memory').style.display = 'block';
            console.log(m);
            return;
        }
        else if (key === 'M+' && addMemory !== '') {
            let m = num2 || num1 || addMemory;
            addMemory = Number(m);
            memoryClear = false;
            // memory is enabled
            document.querySelector('.memory').style.display = 'block';
            console.log(m);
            return;
        }
        else if (key === 'M+' && addMemory !== '') {
            let m = num2 || num1 || addMemory;
            memoryClear = false;
            // memory is enabled
            document.querySelector('.memory').style.display = 'block';
            console.log(m);
            return;
        }
    }

    // calculations
    if (key === '=') {
        switch (operSymbol) {
            case '+':
                if (addMemory !== '' && num2 === '') {
                    num1 = Number(num1) + Number(addMemory);
                    showData();
                }
                else {
                    num1 = Number(num1) + Number(num2);
                }
                break;
            case '-':
                if (addMemory !== '' && num2 === '') {
                    num1 -= addMemory;
                }
                else {
                    num1 -= num2;
                }
                break;
            case 'x':
                if (addMemory !== ''&& num2 === '') {
                    num1 *= addMemory;
                }
                else {
                    num1 *= num2;
                }
                break;
            case '/':
                if (num2 === '0') {
                    outPut.textContent = 'error';
                    return;
                }
                else if (addMemory !== ''&& num2 === '') {
                    num1 /= addMemory;
                }
                else {
                    num1 /= num2;
                }
                break;
        }
        finish = true;
        showData(num1);
        num2 = '';
        memoryClear = false;
        console.log(num1, num2, operSymbol, addMemory);
        return;
    }
    memoryClear = false;
    showData();
});