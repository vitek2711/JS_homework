/// МОДУЛЬ 4: ФУНКЦИИ И МАССИВЫ ///

/// ЗАДАНИЕ 1 ///

/*
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

console.log(`${finland} ${belarus} ${ukraine}`);*/


/// ЗАДАНИЕ 2 ///

/*
let populationChina = 1441;
let populationIndia = 1382;
let populationRussia = 0.140;

let percentageOfWorld = 7900;

//function declaration //

function percentageOfWorld1(a, b ) {
    return (a / b * 100);
}

let chinaWorldPercent = parseFloat(percentageOfWorld1(populationChina, percentageOfWorld)).toFixed(2),
    indiaWorldPercent = parseFloat(percentageOfWorld1(populationIndia, percentageOfWorld)).toFixed(2),
    russiaWorldPercent = parseFloat(percentageOfWorld1(populationRussia, percentageOfWorld)).toFixed(3);

console.log(`В Китае проживает ${populationChina} млн. человек, т.е. около ${chinaWorldPercent}% от мировой численности.
В Индии проживает ${populationIndia} млн. человек, т.е. около ${indiaWorldPercent}% от мировой численности.
В России проживает ${populationRussia} млн. человек, т.е. около ${russiaWorldPercent}% от мировой численности.`);

//function expression //

let populationChina = 1441;
let populationIndia = 1382;
let populationRussia = 0.140;

let percentageOfWorld = 7900;

let percentageOfWorld2 = function(a, b) {
    return a / b * 100;
}
let chinaWorldPercent = parseFloat(percentageOfWorld2(populationChina, percentageOfWorld)).toFixed(2),
    indiaWorldPercent = parseFloat(percentageOfWorld2(populationIndia, percentageOfWorld)).toFixed(2),
    russiaWorldPercent = parseFloat(percentageOfWorld2(populationRussia, percentageOfWorld)).toFixed(3);

console.log(`В Китае проживает ${populationChina} млн. человек, т.е. около ${chinaWorldPercent}% от мировой численности.
В Индии проживает ${populationIndia} млн. человек, т.е. около ${indiaWorldPercent}% от мировой численности.
В России проживает ${populationRussia} млн. человек, т.е. около ${russiaWorldPercent}% от мировой численности.`);
*/


/// ЗАДАНИЕ 3 ///

// Arrow function //

/*let populationChina = 1441;
let populationIndia = 1382;
let populationRussia = 0.140;

let percentageOfWorld = 7900;

let percentageOfWorld3 = (a, b) => a / b *100;

let chinaWorldPercent = parseFloat(percentageOfWorld3(populationChina, percentageOfWorld)).toFixed(2),
    indiaWorldPercent = parseFloat(percentageOfWorld3(populationIndia, percentageOfWorld)).toFixed(2),
    russiaWorldPercent = parseFloat(percentageOfWorld3(populationRussia, percentageOfWorld)).toFixed(3);

console.log(`В Китае проживает ${populationChina} млн. человек, т.е. около ${chinaWorldPercent}% от мировой численности.
В Индии проживает ${populationIndia} млн. человек, т.е. около ${indiaWorldPercent}% от мировой численности.
В России проживает ${populationRussia} млн. человек, т.е. около ${russiaWorldPercent}% от мировой численности.`);*/


/// ЗАДАНИЕ 4 ///

'use strict'

var populationChina = 1441;
let populationIndia = 1382;
let populationRussia = 0.140;

const china = 'China';
const india = 'India';
const russia = 'Russia'

let percentageOfWorld = 7900;

let percentageOfWorld3 = (a, b) => a / b *100;

let chinaWorldPercent = parseFloat(percentageOfWorld3(populationChina, percentageOfWorld)).toFixed(2),
    indiaWorldPercent = parseFloat(percentageOfWorld3(populationIndia, percentageOfWorld)).toFixed(2),
    russiaWorldPercent = parseFloat(percentageOfWorld3(populationRussia, percentageOfWorld)).toFixed(3);

function describePopulation(country, population) {
    console.log(`В ${china} проживает ${populationChina} млн. человек, что составляет около ${chinaWorldPercent} % населения мира.`);
    console.log(`В ${india} проживает ${populationIndia} млн. человек, что составляет около ${indiaWorldPercent} % населения мира.`);
    console.log(`В ${russia} проживает ${populationRussia} млн. человек, что составляет около ${russiaWorldPercent} % населения мира.`);
}

describePopulation(china, populationChina),
                  (india, populationIndia),
                  (russia, populationRussia);






