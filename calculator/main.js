'user strict'
// Переменные
let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;

const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');

// Массивы с цифрами и операциями
const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action  = ['-', '+', 'x', '/'];

//Функция очистки значений
function clear() {
    a = '';
    b= '';
    operSymbol = '';
    finish = false;
    outPut.p = 0;
}

document.querySelector('#ac').onclck = clear;

// Получаем событие по нажатию
buttons.addEventListener('click', (e)=>{
    let elem = e.target;
    while (!elem.classList.contains('btn')) {
        elem = elem.parentNode;
    }
    console.log(elem.dataset.num);
    const key = e.target.textContent;

    // Проверяем нажата ли кнопка
    if (numStrArr.includes(key)) {
       num1 += key;
       outPut.textContent = num1;
    }
    // Проверяем нажата ли клавиша операции
    if(action.includes(key)) {
        num2 += key;
        outPut.textContent = num2;
    }
});


