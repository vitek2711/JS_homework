// МАССИВЫ. УПРАЖНЕНИЯ. УРОВЕНЬ 1. //
'use strict'
// 1 Задание
/*
const empty = Array();
console.log(empty);
*/

// 2 -4 Задание
/*const furniture = [
    'table',
    'armchair',
    'bed',
    'chair',
    'shelf',
    'chest',
    'wardrobe'
];
console.log(furniture.length); // Длинна масива
let firstFurnitire = furniture[0]; // Первый элемент массива
console.log(firstFurnitire);
console.log(furniture[Math.floor(furniture.length/2)]); // Средний элемент массива
console.log(furniture[furniture.length-1]); // Последний элемент массива*/

// 5 Задание
/*const mixedDataTypes = [
    36,
    'table',
    true,
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    {name: 'Viktor',  work: 'teatcher', adress: 'Mogilev'},
    88,
    false
];
console.log(mixedDataTypes.length);*/

// 6-7-8-9 Задание

/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies); // Вывод всего массива
console.log(itCompanies.length); // Количество компаний
console.log(itCompanies[0]); // Первая компания в массиве
console.log(itCompanies[Math.floor(itCompanies.length/2)]); // Средняя компания в массиве
console.log(itCompanies[itCompanies.length-1]); //Последняя компания в массиве*/

// 10 задание. Выводим кажый элемент массива
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}*/

// 11 Задание. Изменяем название каждой компании на заглавное
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i] = itCompanies[i].toUpperCase());
}*/

// 12 Задание. Вывести массив как предложение
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(`${itCompanies} являются крупными ИТ-компаниями`);*/

// 13 Задание. Проверяем, существует ли компания в массиве.
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let index = itCompanies.indexOf('Google');
if (index !==-1) {
    console.log(`Компания ${itCompanies[index]} существует в массиве`);
} else {
    console.log(`Такой компании не существует в массиве`);
}*/

// 14 Задание. Отфильтровть компании, которые имют о > 1

/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];*/

// Решение №1 //

/*let newArr = [];
let litera = 'o';
for (let i = 0; i < itCompanies.length; i++){
    let counter = 0;
    let emptyString = '';
    let item = itCompanies[i].split('');
    for (let t = 0; t < item.length; t++) {
        if (item[t] === litera.toLowerCase()) {
            counter += 1;
        }
    }
    if (counter >= 2) {
        emptyString === item;
        newArr.push(item.join(''));
    }
}
console.log(newArr);*/


// ИЛИ РЕШЕНИЕ №2 //

/*const result = [];
for (const value of itCompanies) {
    if ((value.match(/o/g) || []).length > 1) result.push(value);
}
console.log(result);*/

// 15 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.sort();
console.log(itCompanies);*/

// 16 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.reverse();
console.log(itCompanies);*/

// 17 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies.slice(0,3)); // Вырезаем первые три компании из массива*/

// 18 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies.slice(4,7)); // Вырезаем последние три компании из массива*/

// 19 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies.slice(2,5)); //Вырезаем середину компаний из массива*/

// 20 Задание
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.shift(); // Удаляем первую компанию в начале массива
console.log(itCompanies);*/

//Задание 21
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(2,3); // Удаляем компании из середины массива
console.log(itCompanies);*/

// Задание 22
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.pop(); // Удаляем последнюю компанию в конце массива
console.log(itCompanies);*/

// Задание 23
/*let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies.splice()); // Удаляем все компании из массива*/


// УПРАЖНЕНИЯ. УРОВЕНЬ 2. //

// Задание 2
/*let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const charsInText = text.split(' ');
console.log(charsInText.length); // 13 слов*/

// Задание 3

/*const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat'); // Добавили 'Meat' в начало корзины
shoppingCart.push('Sugar'); // Добавили 'Sugar' в конце корзины
console.log(shoppingCart.splice(4,1,0)); // Убираем мед
shoppingCart[3] = 'Green Tea'; // Изменяем элемент массива
console.log(shoppingCart);*/

//  Задание 4

/*const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];
console.log(countries.includes("Ethiopia")); // Полверяем, существует ли элемент в массиве
// ТАК //
let index = countries.indexOf("Ethiopia");
// или ТАК //
if (index !==-1) {
    console.log(`Данная страна существует в массиве`);
} else {
    console.log(`Данная страна несуществует в массиве`);
}
// или ВОТ ТАК//
index !==-1
? console.log(`ДАННАЯ СТРАНА СУЩЕСТВУЕТ В МАССИВЕ`)
: console.log(`ДАННАЯ СТРАНА НЕ СУЩЕСТВУЕТ В МАССИВЕ`);*/

// Задание 5

/*const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
];

// Проверяем существует ли в массиве 'Sass'
console.log(webTechs.includes('Sass')); // false - следовательно элемент не существует в массиве
// Добавляем элемент в массив
/!*webTechs.push('Sass');*!/
// Выводим массива в консоль
console.log(webTechs);*/

// Задание 6

/*const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(frontEnd.concat(backEnd));*/



// УПРАЖНЕНИЯ. УРОВЕНЬ 3 //

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Сортируем массив //
/*ages.sort(); // Сортируем массив
console.log(ages);*/
// Найти средний возраст //
/*console.log((ages[Math.floor(ages.length / 2)] + ages[Math.floor(ages.length / 3)]) / 2); // Среднее число


// Находим среднее значение //
/*const ageSum = function (){
    var sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / ages.length;
}
console.log(ageSum(ages));*/

// Находим диапазон возрастов //
/*console.log(Math.abs(ages[0] - ages[9]));*/

// Сравнить средние значения //
/*
let item1 = Math.abs(ages[0] - (ages[Math.floor(ages.length / 2)])); // Значение №1 (Минимум и среднее)
let item2 = ages[ages.length - 1] - (ages[Math.floor(ages.length / 2)]); // Значение №2 (Максимум и среднее)


if (item1 > item2 ) {
    console.log(`Значение №1 больше значения №2`);
}else if (item1 < item2) {
    console.log(`Значение №2 больше значения №1`);
}
*/







// ЦИКЛЫ. УПРАЖНЕНИЯ. УРОВЕНЬ 1 //

//Задание 1
/*for (let i = 0; i <= 10; i++) {
    console.log(i); // Итерация с помощью цикла 'for'
}*/

/*let i = 0;
while (i <= 10) {
    console.log(i); // Итерация с помощью цикла 'while'
    i++;
}*/

/*let i = 0;
do {
    console.log(i); // Итерация с помощью цикла 'do ... while'
    i++
}while (i <= 10);*/


//Задание 2
/*for (let i = 10; i >= 0; i--) {
    console.log(i); // Итерация с помощью цикла 'for'
}*/

/*let i = 10;
while (i >= 0) {
    console.log(i); // Итерация с помощью цикла 'while'
    i--;
}*/


/*
let i = 10;
do {
    console.log(i); // Итерация с помощью цикла 'do ... while'
    i --;
} while (i>=0);
*/

// Задание 3
/*for (let i = 0; i <= 20; i++) {
    console.log(i);
}*/

// Задание 4
/*let str = '';
console.log(str);
for (let i = 0; i < 7; i++) {
    console.log(str += '#');
}*/

// Задание 5
/*for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}*/

// Задание 6
/*
console.log(`i  i^2 i^3`)
for (let i = 0; i <= 10; i++){
    console.log(`${i}   ${i**2}   ${i**3}`);
}
*/

// Задание 7

/*for (let i=0; i <=100; i++) {
    if (i % 2 === 0) {
        console.log(i); // Выводим четные числа в консоль от 1 до 100;
    }
}*/

// Задание 8

/*
for (let i=0; i <=100; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Выводим нечетные числа в консоль
    }
}
*/

// Задание 9
/*
nextNumber:
for (let i=2; i<=100; i++) {
    for (let j=2; j<i; j++) {
        if (i % j === 0)continue nextNumber;
    }
    console.log(i); // Выводим тольк простые числа
}
*/

// Задание 10

/*
let num = 0;
for (let i=0; i<=100; i++)
   if (i>=0 || i<=100) {
       var summ = num += i;

   }
console.log(summ); // Выводим сумму всех чисел
*/


//Задание 11

/*const arrNum = [];
for (let i=0; i<=100; i++)
        arrNum.push(i);

// console.log(arrNum);

// Находим четные числа массива
var summNumber = 0;
for (let i=0; i < arrNum.length; i++)
    if (arrNum[i] % 2 === 0) {
        var summ = summNumber += i;
    }
console.log(summ); // Выводим сумму всех четных чисел в консоль

//Находим сумму позиций четных чисел в массиве
var indexNumber = 0;
for (let j=0; j<=arrNum.length; j++) {
    if (arrNum.indexOf(j+1) % 2 === 0) {
        var sumIndex = indexNumber += j;
    }
}
console.log(sumIndex);*/


//Задание 12
/*
const arrNum = [];

var summNumber = 0;
var indexNumber = 0;
for (let i=0; i<=100; i++) {
    if (i % 2 === 0) {
        var summ = summNumber += i; // Для четных чисел
    }
}

for (let j=0; j<=100; j++){
    if (j % 2 !== 0) {
        var summIndex = indexNumber += j; // Для нечетных чисел
    }
}

arrNum.push(summ, summIndex); // Добавляем значения в массив

console.log(arrNum); // Записываем результат в консоль
*/

// Задание 13

/*function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers='0123456789'; // Пишем ряд цифр в строковом диапозоне
const arrValue = [];
let value ='';
for(let i=0;i<5;i++){
    value+=numbers[getRandomNum(0, numbers.length-1)];
}
arrValue.push(value);
console.log(arrValue);*/

// Задание 14

/*let arrNum = [];
function randomNumFunction(min, max) {
    let generateNumber = 0;
    for (let i=0; arrNum.length<5; i++) {
        generateNumber = Math.floor(Math.random() * (max - min)) + min;
        if (true !== arrNum.includes(generateNumber)) {
            arrNum.push(generateNumber);
        }
    }
}
randomNumFunction(1, 15);
console.log(arrNum);*/

// Задание 15

/*
function getRandomstring (min, max) {
    return(Math.floor(Math.random()*(max-min+1)+min));
}
let string = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ';
let value = '';
for (var i=0; i<10; i++){
    value += string[getRandomstring(0, string.length-1)];
}
console.log(value);*/



// УРОВЕНЬ 2 //
// Задание 1

// Сгенерировать случайную длинну индетификатора

/*function getRandomstring (min, max) {
    return(Math.floor(Math.random()*(max-min+1)+min));
}

let string = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ';
let value = '';
for (var i=0; i<string.length; i++){
    value += string[getRandomstring(0, string.length)];
}
console.log(value);*/

//Задание 2
// Написать скрипт, который генерирует случайное шестнадцатиричное число

/*let string = '0123456789ABCDEF'
let hexString = '';
let item = '#';
for (let i=0; i<6; i++) {
    hexString += string[(Math.floor(Math.random()*16))];
}
console.log(item+hexString);*/

// Задание 3
//Генерация случайного RGB-числа

/*let rgb1 = Math.floor(Math.random()*256);
let rgb2 = Math.floor(Math.random()*256);
let rgb3 = Math.floor(Math.random()*256);

console.log(`RGB(${rgb1}, ${rgb2}, ${rgb3})`);*/

// Задание 4

/*const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];

const arr = [];
for (let i=0; i<countries.length; i++) {
    countries[i]=countries[i].toUpperCase();
    arr.push(countries[i]);
}
console.log(arr);*/


// Задание 5

/*const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];

const countriesLenght = [];
for (let i=0; i<countries.length; i++) {
    countries[i] = countries[i].length;
    countriesLenght.push(countries[i]);
}
console.log(countriesLenght);*/

// Задание 6

/*const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];

let countriesArr = [];

for (let i=0; i<countries.length; i++) {
    countries[i] = [countries[i], countries[i].toUpperCase().slice(0,3), countries[i].length];
    countriesArr.push(countries[i]);
}

console.log(countriesArr)*/

/*for (let j=0; j<countries.length; j++) {
    let twoParam = countries[j].toUpperCase().split(0,3);
    countriesArr[j].push(twoParam);
}*/













