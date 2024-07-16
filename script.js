let [hours, minutes, seconds] = [0, 0, 0];
let time = document.querySelector('#time');
let stop = document.querySelector('#stop');
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');


let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;

        }
    }
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    time.innerHTML = h + ':' + m + ':' + s;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}



function watchstop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    hours =0;
    minutes= 0;
    seconds =0;
 
    time.innerHTML = "00:00:00";
}

start.addEventListener('click', watchstart);
stop.addEventListener('click', watchstop);
reset.addEventListener('click', watchReset);








