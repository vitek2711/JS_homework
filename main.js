/// МОДУЛЬ 5: ЦИКЛЫ ///

'use strict'
/// ЗАДАНИЕ 1 ///

/*const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // сосдаем массив нужных чисел

// Пишем цикл //
for (let num = 0; num <= arr.length - 1; num++) {
// Пишем уловия цикла
    if (num === 0) {
        console.log(`${num} - это нуль`);
    }
    else if (num%2!==0) {
        console.log(`${num} - это нечетное число`);
    }
    else {
        console.log(`${num} - это четное число`);
    }
}*/

/// ЗАДАНИЕ 2 ///

/*var string = ''
console.log(string);
for(var x = 0; x < 20; x++) {
    console.log(string += 'X');
}*/

/// ЗАДАНИЕ 3 ///

/*const post = {
    author: 'John', // Вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: 'Alex',
            text: 'Lorem ipsum',
            rating: {
                likes: 10,
                dislikes: 2 // Вывести это число
            }
        },
        {
            userId: 5, // Вывести это число
            userName: 'Jane',
            text: 'Lorem ipsum 2', // Вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
// Выводим в консоль необходимы данные
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text)*/


/// ЗАДАНИЕ 4 ///

// Пишем цикл в цикле //
for (let i = 1; i <= 9; i++) {
    for (let k = 1; k<=10; k++){
        console.log(`${i} * ${k} = ${i*k}`);
    }
    console.log(`****************`); // разделитель
}


