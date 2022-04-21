'user strict'

const questionText = document.querySelector('#question');
const questionList = document.querySelector('#list');
let changeBtn = document.querySelector('#change');
let inputValue;
let resBtn = document.querySelector('#result');
let input1 = document.querySelector('#input1');
let myForm = document.querySelector('.myForm');

const poll = {
    question: 'Какой твой любимый язык программирования?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: new Array(4).fill(0),
};

let answers = poll.answers;
const options = poll.options;

//Вопрос
questionText.insertAdjacentHTML(
    'beforebegin',
    poll.question,
);

// Варианты для выбора

questionList.innerHTML = '';
const langList = poll.options;
langList.forEach((lang, i)=> {
    questionList.innerHTML += `
    <li class='lang_item'>${i+1}. ${lang}</li>`;
});

// Получаем введенные значения
changeBtn.addEventListener('click', ()=>{
    inputValue = input1.value;
    answers.forEach((item, index, arr) =>{
       if (index === inputValue - 1) arr[index]++;
    });
    input1.value = "";
});

resBtn.addEventListener('click', ()=>{
    myForm.insertAdjacentText('beforeend',
        `${options[0]}= ${answers[0]}; ${options[1]}= ${answers[1]}; ${options[2]}= ${answers[2]}; ${options[3]}= ${answers[3]}`);
    resBtn.remove();
})


console.log(poll.answers);










