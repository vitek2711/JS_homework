///  МОДУЛЬ 3. ТЕМА: ВЕТВЛЕНИЕ И ФУНКЦИИ

/////////////////////////////////////// ЗАДАЧА -1 /////////////////////////////////////////////
/*'use strict'

let userYear = prompt(`Пожалуйста, введите год`);
let wysokosny;

/// Пишем условия ///

if (userYear % 400 === 0) {
    wysokosny = true;
}
else if (userYear % 4 === 0) {
    wysokosny = true;
}
else if (userYear % 100 === 0) {
    wysokosny = false;
}
else {
    wysokosny = false;
}

/// Результат выводим в консоль ///

alert(`${userYear} год ${(wysokosny? '' : 'не')} является високосным`);*/


/////////////////////////////////////// ЗАДАЧА - 2 ////////////////////////////////////////////////////////////
/*'use strict'

let summ = prompt(`Введите сумму покупки`);

/// Размер скидки записываем в константу ///
const percent3 = 3;
const percent5 = 5;
const percent7 = 7;

/// Пишем условия ///
if (summ > 0 && summ < 200) {
    console.log(`Сумма к оплате ${summ}`); // Без скидки
}
else if (summ >= 200 && summ <= 300) {
    let discont = summ / 100 * percent3;
    let total = summ - discont;
    console.log(`Сумма к оплате ${total.toFixed(2)} со скидкой ${percent3} %`);  /// Учитывая 3% скидку
}
else if (summ >= 300 && summ <= 500) {
    let discont = summ / 100 * percent5;
    let total = summ - discont;
    console.log(`Сумма к оплате ${total.toFixed(2)} со скидкой ${percent5} %`);  /// Учитывая 5% скидку
}
else if (summ >=500) {
    let discont = summ / 100 * percent7;
    let total = summ - discont;
    console.log(`Сумма к оплате ${total.toFixed(2)} со скидкой ${percent7} %`);  /// Учитывая 7% скидку
}*/



/////////////////////////////////////////////// ЗАДАЧА - 3 ////////////////////////////////////////////////////////////

/*'use strict'

let answer = '';
let totalPoints = 0;

answer = prompt(`Береза является деревом? 
1. Да
2. Нет
3. Затрудняюсь ответить`);

switch (answer) {
    case '1':
    case '1.':
        alert( 'Верно! Вы заработали 2 балла!!!' );
        totalPoints += 2;
        break;
    case '2':
    case '2.':
        alert( 'Это неверный ответ' );
        break;

    case '3':
    case '3.':
        alert( 'Читайте дополнительную литературу' );
        break;
    default:
        alert(`Недопустимое значение`);
}

answer = prompt(`Умеют ли слоны летать?
1. Да
2. Нет
3. Только, когда они маленькие`);
switch (answer) {
    case '1':
        alert( `Даже при всем  своем желании они не смогут это сделать!!!` );
        break;
    case '2':
        alert( `Правильно! Вам начисляется 2 балла!!!` );
        totalPoints += 2;
        break;
    case '3':
        alert( `Обратитесь к знакомым зоологам с этим вопросом` );
        break;
    default:
        alert(`Недопустимое значение`);
}

answer = prompt(`Как звали отца Буратино?
1. Карло
2. Григорий
3. Джузеппе`);
switch (answer) {
    case '1':
    case '1.':
        alert( `В точку!` );
        totalPoints += 2;
        break;
    case '2':
    case '2.':
        alert( `Рекомендуем перечитать повесть-сказку "Приключения Буратино" А.Н.Толстого` );
        break;
    case '3':
    case '3.':
        alert( `Нет! Правильный ответ  - Карло!` );
        break;
    default:
        alert(`Недопустимое значение`);
}
alert(`Сумма набраных баллов = ${totalPoints} `);*/




/////////////////////////////////////////////// ЗАДАЧА - 4////////////////////////////////////////////////////////////
/*'use strict'

/// Вводим дату ///

let userDay = 28;
let userMonth = 12;
let userYear = 2021;

/// Создаем функцию проверки месяца на валидность ///
let getUserMonth = function() {
    if (userMonth >= 1 && userMonth <= 12) {
        return userMonth;
    }
    else {
        return `Введен неверный параметр`;
    }
}

/// Определяем, является ли год високосным ///

let leapYear = function() {
    if (userYear % 400 === 0) {  /// является високосным
        return true;
    }
    else if (userYear % 4 === 0) { /// является високосным
        return true;
    }
    else if (userYear % 100 === 0) { /// не является високосным
        return false;
    }
    else {
        return false;
    }
}

/// Определяем следующий день ///

let getDay = function(day, month) {
    let result;
    switch (month) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 11 :
        case 12 :
            result = day === 31;
            break;
        case 4 :
        case 6 :
        case 9 :
            result = day === 30;
            break;
        case 2:
            if (leapYear(userYear) === true && day === 29) { /// 29 февраля (для високосного года)
                result = true;
            }
            else if (leapYear(userYear) === false && day === 28) {  /// 28 февраля (для обычного года)
                result = true;
            }
            else {
                result = false;
            }
            break;
    }
    return result;
}

/// Определяем следующий месяц ///

let nextMonth = function (month) {
    if (month === 12 ) {
        return true;
    }
    else if (month >=1 && month < 12) {
        return false;
    }
    else {
        return(`Введено неверное значение`);
    }
}

/// Определяем следующую дату ///

function getNextDate(day, month, year) {
    if (getDay(day, month) === false) {
        day += 1;
    }
    else if (getDay(day, month) === true) {
        day = 1;
        if (nextMonth(month) === false) {
            month += 1
        }
        else if (nextMonth(month) === true) {
            month = 1;
            year += 1;
        }
    }
    return `Следующая дата: ${day}. ${month}. ${year}`;
}

console.log(getNextDate(userDay, getUserMonth(userMonth), userYear));*/


/////////////////////////////////////////////// ЗАДАЧА - 5 ////////////////////////////////////////////////////////////
/*
'use strict'

let num1 = 100;
let num2 = -30;

const result = function(a, b) {
    if(a >= 0 && b >= 0) {
        return (a - b);
    }
    else if(a < 0 && b < 0) {
        return (a * b);
    }
    else if(a < 0 && b >=0 || a >= 0 && b < 0) {
        return (a + b);
    }
    else {
        return ('Неверный параметр');
    }
}
console.log(result(num1, num2));*/

/////////////////////////////////////////////// ЗАДАЧА - 6 ////////////////////////////////////////////////////////////
/*'use strict'

let num1 = 6;
let num2 = 2;

/// ФУНКЦИЯ СЛОЖЕНИЯ ///
const result = function summ(a, b) {
    return a + b;
}
console.log(result(num1, num2));

/// ФУНКЦИЯ РАЗНОСТИ ///
const result2 = function summ(a, b) {
    return a - b;
}
console.log(result2(num1, num2));

/// ФУНКЦИЯ ДЕЛЕНИЯ ///
const result3 = function summ(a, b) {
    return a / b;
}
console.log(result3(num1, num2));*!/

/// ФУНКЦИЯ УМНОЖЕНИЯ ///
const result4 = function summ(a, b) {
    return a * b;
}
console.log(result4(num1, num2));*/


////////////////////////////////////////////// ОСОБЫЕ ЗАДАЧИ ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////   1   ///////////////////////////////////////////////////////////////

/*'use strict'

// Средний балл после 1 этапа //

const dolphinsPoints1 = (96 + 108 + 89) / 3; /// Средний балл Дельфинов
const coalsPoints1 = (88 + 91 + 110) / 3; /// Средний балл Коалл

// Средний балл после 2 этапа //

const dolphinsPoints2 = (97 + 112 + 101) / 3;
const coalsPoints2 = (109 + 95 + 123) / 3;

// Средний балл после 3 этапа //

const dolphinsPoints3 = (97 + 112 + 101) / 3;
const coalsPoints3 = (109 + 95 + 106) / 3;

// Находим победителя после 1 этапа соревнований//

let getWinnerOne = function (dolphinsPoints1, coalsPoints1) {
    if (dolphinsPoints1 > coalsPoints1 && dolphinsPoints1 >= 100) {
        return `Doslphins is Winner!!!`;
    }
    else if (dolphinsPoints1 < coalsPoints1 && coalsPoints1 >= 100) {
        return `Coals is Winner!!!`;
        }
    else if (dolphinsPoints1 === coalsPoints1 && (dolphinsPoints1 || coalsPoints1 >= 100)) {
        return `It is Draw!!!`;
    }
    else {
        return `Ни одной команде не удалось одержать победу согласно регламента`
    }
}
console.log(getWinnerOne(dolphinsPoints1,coalsPoints1));

// Находим победителя после 2 этапа соревнований//

let getWinnerTwo = function (dolphinsPoints2, coalsPoints2) {
    if (dolphinsPoints2 > coalsPoints2 && dolphinsPoints2 > 100) {
        return `Doslphins is Winner!!!`;
    }
    else if (dolphinsPoints2 < coalsPoints2 && coalsPoints2 > 100) {
        return `Coals is Winner!!!`;
    }
    else if (dolphinsPoints2 === coalsPoints2 && (dolphinsPoints2 || coalsPoints2 > 100)) {
        return `It is Draw!!!`;
    }
}
console.log(getWinnerTwo(dolphinsPoints2, coalsPoints2));

// Находим победителя после 3 этапа соревнований//

let getWinnerThree = function (dolphinsPoints3, coalsPoints3) {
    if (dolphinsPoints3 > coalsPoints3 && dolphinsPoints > 100) {
        return `Doslphins is Winner!!!`;
    }
    else if (dolphinsPoints3 < coalsPoints3 && coalsPoints3 > 100) {
        return `Coals is Winner!!!`;
    }
    else if (dolphinsPoints3 === coalsPoints3 && (dolphinsPoints3 || coalsPoints3) > 100) {
        return `It is Draw!!!`;
    }
}
console.log(getWinnerThree(dolphinsPoints3, coalsPoints3));*/

//////////////////////////////////////////////////   2   ///////////////////////////////////////////////////////////////
/*

'use strict'

// const sum = 275; // сумма денег 275 рублей
// const sum = 40; // сумма денег 40 рублей
const sum = 430; // сумма денег 430 рублей

const tipPercent15 = 15; // Процент чаевых, если сумма >= 50 && <= 300 реблей
const  tipPercent20 = 20; // Процент чаевых, если сумма >= 300 рублей
const  tipPercent0 = 0; // Процент чаевых, если сумма < 50 рублей

/// Расчет  размера чаевых ///
let tip1 = sum / 100 * tipPercent15; // Расчет чаевых для 15 %
let tip2 = sum / 100 * tipPercent20; // Расчет чаевых для 20 %
let tip = sum / 100 * tipPercent0; // Расчет для 0 процентов чаевых

/// Пишем функцию вывода в зависимости от величины суммы ///

let total = (sum < 50) ? tip :
    (sum >= 50 && sum <= 300) ? tip1 : tip2;

/// Выводим результат в консоль ///

console.log(`Ваш счет составил ${sum} рублей, чаевые составили ${total} рублей, а общая стоимость - ${sum + total} рублей`);
*/