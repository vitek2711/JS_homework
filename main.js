/// МОДУЛЬ 5: МЕТОДЫ МАССИВОВ. ОБЪЕКТЫ ///

/// ЗАДАНИЕ 1 ///
/*'use strict'

let neighbours = ['russia', 'ukraine', 'latvian', 'lithuania', 'poland']; // массив с соседями

neighbours.push('utopia'); // добавляем новую страну в конец массива
console.log(neighbours); // выводим новый массив в консоль

neighbours.pop('utopia'); // удаляем распавшуюся страну из конца массива, потому что она распалась (лучше бы это сделала первая страна массива)
console.log(neighbours); // проверяем. Выводим массив в консоль


console.log(neighbours.includes ('germany') ); // false возвращает нам, что поиск не оказался успешным и такой страны в массиве нет

/// Ищем страну и выводим результат поиска в консоль ///
if (neighbours.includes ('germany')) {
    console.log('Такая страна НАЙДЕНА');
}
else {
    console.log('Вероятно, это не центральноевропейская страна')
}

/// Ищем индекс страны в массиве ///
console.log(neighbours.indexOf('russia'));

/// Удаляем элемент с таким индексом ///
neighbours.splice(0, 1);

/// Добавляем элемент по полученному индексу ///
neighbours.splice(0, 0, 'tirania');
console.log(neighbours);

/!*
/// ИЛИ раз страна находится вначале, то можно использовтаь unshift ///
neighbours.unshift('tirania');
console.log(neighbours);
*!/*/


/// ЗАДАНИЕ 2///
'use strict'

const myCountry = {
    country: 'Belarus',
    capital: 'Minsk',
    language: 'belarussian',
    population: 9.5,
    neighbours: ['russia', 'ukraine', 'latvian', 'lithuania', 'poland']
}
console.log(myCountry);

