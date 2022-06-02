'use strict'
//variables
let body = document.querySelector('body');

// option params
const option = {
    timeZone: 'Europe/Minsk',
    month: 'long',
    year: 'numeric',
}

//get full current date
let currentDateInfo = new Date();
console.log(currentDateInfo);

// get current date info for calendar (month & year)
let dateInfo = currentDateInfo.toLocaleString('en-EN',option);
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
            <i class="fa-solid fa-arrow-left"></i>
                 <!-- month & year -->
                 <p class="info">${dateInfo}</p>
            <i class="fa-solid fa-arrow-right"></i>
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
}
renderHml();

let startDate = getDate(currentDateInfo);

//get date numbers
let cells = document.querySelectorAll('.day');
cells.forEach(cell=>{
    cell.innerText=startDate.getDate();
    startDate.setDate(currentDateInfo.getDate()+1);
});


function getDate(myDate){
    let day = myDate.getDay();
    myDate.setDate(myDate.getDate()-day);
    return myDate;
}

//get current day











