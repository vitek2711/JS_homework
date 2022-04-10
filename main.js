'use strict'

// Задание 1 //
// Для диапозона чисел от 0 до 10

// let arr = [];
/*function getSeriesOfNumbers() {
    for (let i = 0; arr.length < 9; i++) {
        const c = i+1;
        arr.push(c);
    }
    return arr;
}
getSeriesOfNumbers();
console.log(arr);*/

/*function getNum(x, y) {
    if (x === y-1){
     return [];
    }
    x++;
    arr.push(x);
    getNum(x, y);
    return arr;
};
console.log(getNum(0,10));*/


// Задание 2

/*const febArr = [0,1];
function getFibonacciNum(febArr){
    for (let i=2; i<10; i++) {
        febArr[i] = febArr[i-1] + febArr[i-2];
    }
}
getFibonacciNum(febArr);
console.log(febArr.slice(0,10));*/

// Задание 3

/*let cleanArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});
console.log(cleanArr);*/


// Задание 4

/*let number = 33333333337;
let array = (""+number).split("").map(Number);
let sumNum = 0;

for (let i = 0; i < array.length; i++) {
     sumNum += array[i];
}

function getNumber(sumNum) {
     let newArray = (""+sumNum).split("").map(Number);
     let sum = 0;
     for (let j = 0; j < newArray.length; j++) {
          sum += newArray[j];
     }
     if (sum > 9) {
          getNumber(sum);
     }
     else {
          console.log(`Сумма чисел всех итераций <= 9`);
     }
}
getNumber(sumNum);*/

// Задача 5

/*let string = 'var_text_hello'; // var_text_hello --> varTextHello
let splitted = string.split('');


splitted.splice(3,1);
splitted.splice(7,1);
splitted.splice(3,1,'T');
splitted.splice(7,1,'H');

let result = splitted.join('');

console.log(result);*/

// Задача 6

/*let string = '123456'; // '123456' --> '214365'
console.log(string);

let split = string.split("");

function getNumberLine(split) {
    const reverseArr = [];
    for (let i = 0; i < split.length; i++) {
      reverseArr.push(split[++i],split[i-1]);
    }
    return reverseArr.join('');
}
console.log(getNumberLine(split));*/

// Задача 7

// Найти пересечение массивов и вернуть их в виде массива

/*
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function getInt(arr1, arr2){
    let concatArr = arr1.concat(arr2).sort();
    const doubleItems = [];
    for (let i=0; i<concatArr.length; i++) {
        if (concatArr[i+1] === concatArr[i]) {
            doubleItems.push(concatArr[i]);
        }
    }
    console.log(doubleItems);
}
getInt(arr1, arr2);
*/



















