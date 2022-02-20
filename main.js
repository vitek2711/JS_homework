///  МОДУЛЬ 3. ТЕМА: ВЕТВЛЕНИЕ И ФУНКЦИИ

///// ЗАДАЧА -1 ////
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




///// ЗАДАЧА - 2 /////
'use strict'

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
}




