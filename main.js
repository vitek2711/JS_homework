///  МОДУЛЬ 3. ТЕМА: ВЕТВЛЕНИЕ И ФУНКЦИИ

/////////////////////////////////////// ЗАДАЧА -1 /////////////////////////////////////////////
/*'use strict'

let userYear = prompt(`Пожалуйста, введите год`);
let wysokosny;
let no = false;

/// Пишем условия ///

if (userYear % 400 == 0)
    wysokosny = true;
else if (userYear % 4 == 0)
    wysokosny = true;
else if (userYear % 100 == 0)
    wysokosny = false;
else
    wysokosny = false;

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

/////////////////////////////////////////////// ЗАДАЧА - 4 ////////////////////////////////////////////////////////////

'use strict'

let num1 = -50;
let num2 = 30;

const result = function(a, b) {
    if(a >= 0 && b >= 0)
    return(a - b);
    else if(a < 0 && b < 0)
    return(a * b);
    else if(a < 0 && b >=0 || a >= 0 && b < 0)
    return(a + b);
    else('Неверный параметр');
}
console.log(result(num1, num2));








