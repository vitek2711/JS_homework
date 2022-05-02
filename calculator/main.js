// Variables
let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;
const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');
const ac = document.querySelector('#ac');


// Arrays
const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action  = ['-', '+', 'x', '/'];

//Clear function
function clearOutputField() {
    a = '';
    b= '';
    operSymbol = '';
    finish = false;
    outPut.p = 0;
}

//Clear
// document.querySelector('#ac').addEventListener('click', ()=> clearOutputField());
/*document.querySelector("#ac").onclick = clearOutputField();*/

// Click event
buttons.addEventListener('click', (e)=>{
    let elem = e.target;
    if (!elem.classList.contains('btn')) {
        elem = elem.parentNode;
    }

    if (elem.classList.contains('ac') === clearOutputField());
    outPut.textContent = '';

    const key = e.target.textContent;
    // is the button pressed
    if (numStrArr.includes(key)) {
        if (num2 === '' && operSymbol === ''){
            num1 += key;
            outPut.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && finish) {

        }
        else {
            num2 += key;
            outPut.textContent = num1;
        }
    }

    // is the button of operations pressed
    if(action.includes(key)) {
        num2 += key;
        outPut.textContent = num2;
    }
    console.log(num1, num2, operSymbol);

    // 
});



