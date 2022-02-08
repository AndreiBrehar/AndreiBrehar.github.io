const timer = document.getElementById('time');
const resume=document.getElementById('resume');
const stop=document.getElementById('stops');
const milis=document.getElementById('mili');
const reset=document.getElementById('reset');
var count = 0;
var hr = 0;
var min = 0;
var sec =0;
var mil = 0;
var stoptime = true;
reset.style.opacity='50%';
stop.style.opacity='50%';

function startTimer() {

    reset.style.opacity='100%';
    count++;
    if (stoptime == true) {
        stoptime = false;
        resume.innerHTML='Start';
        resume.style.opacity='50%';
        timerCycle();
    }
    if(count!=0){
        stop.style.opacity='100%';
    }
}
function stopTimer() {
    if(count!=0){
        var count = 0;
        resume.innerHTML='Resume';
        resume.style.opacity='100%';
    }
    if(count==0){
        stop.style.opacity='50%';
    }
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec=sec+1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;
        

        setTimeout("timerCycle()", 1000);
    }
}
function miliTimer(){
    if(stoptime==false){
        mil++;

    
        if(mil<10 || mil==0){
            mil='0'+mil;
        }
        if(mil==99){
            mil=0;
        }
        milis.innerHTML=':' + mil;
    }
}
setInterval(miliTimer, 10);
function resetTimer() {
    hr=0;
    min=0;
    sec=0;
    mil=0;
    timer.innerHTML = '00:00:00';
    milis.innerHTML=':0'+mil;
    resume.innerHTML='Start';
    resume.style.opacity='100%';
    stop.style.opacity='50%';
    reset.style.opacity='50%';
    stoptime=true;
    
}