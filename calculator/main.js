'user strict'

let num1 = '';
let num2 = '';
let operSymbol = '';
let finish = false;

const numStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];




const buttons = document.querySelector('.buttons');
const outPut = document.querySelector('#outPut');


buttons.addEventListener('click', (e)=>{
    let elem = e.target;
    while (!elem.classList.contains('btn')) {
        elem = elem.parentNode;
    }
    if (elem.dataset.num==='1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' ){
         outPut.insertAdjacentHTML(elem.dataset.num);
    }
    console.log(elem.dataset.num);
});


