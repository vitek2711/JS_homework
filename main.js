/// МОДУЛЬ 4: ФУНКЦИИ И МАССИВЫ ///
/// ЗАДАНИЕ 1 ///
'use strict'

let  country = 'Finland',
    population = 6,
    capital = 'Helsinki';

let country1 = 'Belarus',
    population1 = 9.5,
    capital1 = 'Minsk';

let country2 = 'Ukraine',
    population2 = 40,
    capital2 = 'Kyiv';

function describeCountry(a, b, c) {
    return(`There are ${ b } million people living in ${ a }. The capital of ${ a } is ${ c }.`);
}

let finland = describeCountry(country, population, capital),
    belarus = describeCountry(country1, population1, capital1),
    ukraine = describeCountry(country2, population2, capital2);

console.log(`${finland} ${belarus} ${ukraine}`);