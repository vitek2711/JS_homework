'use strict'
//variables
let body = document.querySelector('body');

// option params
const option = {
    timeZone: 'Europe/Minsk',
    month: 'long',
    year: 'numeric',
}

//get current date
let currentDateInfo = new Date();

let currentDate = currentDateInfo.getDate();
let currentDay = currentDateInfo.getDay();
let currentMonth = currentDateInfo.getMonth();
let currentYear = currentDateInfo.getFullYear();

const monthArr = [
    'january',
    'february',
    'march',
    'april',
    'mai',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

const daysArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

// get current date info
let dateInfo = currentDateInfo.toLocaleString('en-EN', option);
console.log(dateInfo);

//render HTML-function
function renderHml() {
    document.querySelector('.info-block');
    //HTML-code
    let html = `
     <!-- title -->
    <h1>Colourful Calendar</h1>
    <h2>This calendar created by HTML, CSS, JavaScript</h2>
    <!-- start weather section -->
    <div class="weather">
        <i class="fa-solid fa-umbrella"></i>
    </div>
    <!-- start calendar section -->
    <div class="calendar-wrapper">
        <div class="info-block">
            <i id="arrowLeft" class="fa-solid fa-arrow-left"></i>
                 <!-- month & year -->
                 <p id='info' class="info"></p>
            <i id="arrowRight" class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="cell-block">
            <!-- days names-->
            <div class="cell dayname">mon</div>
            <div class="cell dayname">tue</div>
            <div class="cell dayname">wed</div>
            <div class="cell dayname">thu</div>
            <div class="cell dayname">fri</div>
            <div class="cell dayname weekend">sat</div>
            <div class="cell dayname weekend">sun</div>
            <!-- days numbers -->
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
        </div>
    </div>
`
    body.insertAdjacentHTML('afterbegin', html);
    addArrowHandlers();
}

renderHml();
getDateOfCalendar();

/// get dates in cells
function getDateOfCalendar() {
    const tempDate = new Date(currentDateInfo);
    let startDate = getDate(tempDate);
//get date numbers
    let cells = document.querySelectorAll('.day');
    cells.forEach(cell => {
        cell.innerText = startDate.getDate();
        startDate.setDate(tempDate.getDate() + 1);
    });

}

// get date
function getDate(myDate) {
    let day = myDate.getDay();
    if(myDate.getDay()===0){
        myDate.setDate(myDate.getDate() - 6);
        return myDate;
    }
    myDate.setDate(myDate.getDate() - day + 1);
    return myDate;
}

// arrow handlers
function addArrowHandlers() {
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    arrowLeft.addEventListener('click', (e) => {
        changeMonth(-1);
        if (currentMonth < 0) {
            currentYear -= 1;
        }
    })
    arrowRight.addEventListener('click', (e) => {
        changeMonth(1);
        if (currentMonth > 11) {
            currentYear += 1;
        }
    })
}

// change month
function changeMonth(month = 0) {
    currentMonth = currentDateInfo.setMonth(currentDateInfo.getMonth() + month);
    getDateOfCalendar();
    clearInfo();
    switchMonthAndYear();
}

let info = document.getElementById('info');

//switch month and year
function switchMonthAndYear() {
    info.innerText = `${currentDateInfo.toLocaleString('en-EN', option)}`;
}
switchMonthAndYear();

//clear info field
function clearInfo() {
    info.innerText = '';
}

//current date cell
let dayCell = document.querySelector('.day');

function currentDateCell(){
    if (currentDate === dayCell.innerText) {
        dayCell.style.border = "4px solid #F4D03FFF";
        dayCell.style.color = "#F4D03FFF";

    }
    dayCell.style.border = "4px solid #F4D03FFF";
    dayCell.style.color = "#F4D03FFF";
}
currentDateCell();

/*let dayCell = document.querySelector('.day');
function currentDateColor() {
    if (dayCell.innerText === currentDay) {
        dayCell.classList.add('currentday');
    }
}
currentDateColor()*/

console.log(dayCell)
console.log(currentDate)









