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

/*
if(currentDateInfo.getMonth()===(new Date()).getMonth() && currentDateInfo.getFullYear()===(new Date()).getFullYear()){

}
*/

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
                 <p class="info">${dateInfo}</p>
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
    })
    arrowRight.addEventListener('click', (e) => {
        changeMonth(1);
    })
}

// change month
function changeMonth(month = 0) {
    currentDateInfo.setMonth(currentDateInfo.getMonth() + month);
    getDateOfCalendar();
}

//get other month
function getOtherMonth(dateInfo) {
    if (changeMonth(-1)) {
        return dateInfo - 1;
    }
    addArrowHandlers();
}
getOtherMonth(dateInfo)








