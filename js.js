const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes'),
        sec = document.querySelector('.stopwatch__seconds'),
        min = document.querySelector('.stopwatch__minutes'),
        hours = document.querySelector('.stopwatch__hours'),
        startBtn = document.querySelector('.stopwatch__btn'),
        span = document.querySelector('.tabsLink__span');
        

function clock() {
    let time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    
    secondArrow.style = `transform: rotate(${seconds*6}deg)`
    minuteArrow.style = `transform: rotate(${minutes*6}deg)`
    hourArrow.style = `transform: rotate(${hours*30}deg)`
    
    minutesBox.innerHTML =  minutes < 10 ? '0' + minutes  : minutes
    hoursBox.innerHTML = hours < 10 ? '0' + hours  : hours
    
    setTimeout(() => clock(), 1000);
   
}

clock()

//setTimeout() - выполняет действия через указанное время

//setTimeout(() => console.log('hello'), 2000);

// рекурсия в js Это когда функция вызывает саму себя

/* let i = 1;

function req() {
    if (i <= 10) {
        console.log(i);
        i++
        setTimeout(() => req(), 1000);
    }
}

req() */

let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


startBtn.addEventListener('click', function stopwatch() {
    span.classList.add('active')
    sec.innerHTML++
    setTimeout(() => stopwatch(), 1000);
    if (sec.innerHTML == 60) {
        sec.innerHTML = 0;
        min.innerHTML++
    }
    if (min.innerHTML == 60) {
        min.innerHTML = 0;
        hours.innerHTML++
    }
    
    startBtn.innerHTML = 'STOP'
    if (startBtn.innerHTML = 'STOP') {
        startBtn.addEventListener('click', () => {
            span.classList.remove
            span.classList.add('active_clear')
            
        })
    }
})


