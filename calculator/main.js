'use strict'

// Variables

let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;
let addMemory = '';
addMemory = num1 || num2;
let memoryClear = true;
let body = document.querySelector('body');

//html code
let html = `
    <h1 class="title">My Calculator</h1>
    <p class="description">Craeted by HTML, CSS, JavaScript</p>
    <div class="calculator">
        <output class="result">
            <span class="memory">M</span>
            <p id="outPut">0</p>
        </output>
        <p class="label">Электроника МК60</p>
        <div class="buttons">
            <div class="btn btn-grey" id="ac" data-num="ac">AC</div>
            <div class="btn btn-grey" data-num="M+">M+</div>
            <div class="btn btn-grey" data-num="MR/C">MR/C</div>
            <div class="btn btn-orange" data-num="x">x</div>

            <div class="btn" data-num="7">7</div>
            <div class="btn" data-num="8">8</div>
            <div class="btn" data-num="9">9</div>
            <div class="btn btn-orange" data-num="/">/</div>

            <div class="btn" data-num="4">4</div>
            <div class="btn" id='one' data-num="5">5</div>
            <div class="btn" data-num="6">6</div>
            <div class="btn btn-orange" data-num="+">+</div>

            <div class="btn" data-num="1">1</div>
            <div class="btn" data-num="2">2</div>
            <div class="btn" data-num="3">3</div>
            <div class="btn btn-orange" data-num="-">-</div>

            <div class="btn" data-num=".">.</div>
            <div class="btn" data-num="0">0</div>
            <div class="btn btn-green" data-num="=">=</div>
        </div>
        <p class="copyright"><span class="ussr">&#9773;</span> Made in USSR</p>
    </div>
`;
body.insertAdjacentHTML('beforeend', html);

const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');
let memory = document.querySelector('.memory');

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
                memory.style.display = 'none';
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
            memory.style.display = 'block';
            console.log(m);
            return;
        }
        else if (key === 'M+' && addMemory !== '') {
            let m = num2 || num1 || addMemory;
            addMemory = Number(m);
            memoryClear = false;
            // memory is enabled
            memory.style.display = 'block';
            console.log(m);
            return;
        }
        else if (key === 'M+' && addMemory !== '') {
            let m = num2 || num1 || addMemory;
            memoryClear = false;
            // memory is enabled
            memory.style.display = 'block';
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