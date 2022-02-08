const timer = document.getElementById('time');
const resume=document.getElementById('resume');
const milis=document.getElementById('mil');
var count = 0;
var hr = 0;
var min = 0;
var sec = 0;
var mil = 0;
var stoptime = true;

function startTimer() {
    count++;
    if (stoptime == true) {
        stoptime = false;
        resume.innerHTML='Start'
        timerCycle();
    }
}
function stopTimer() {
    if(count!=0){
        var count = 0;
        resume.innerHTML='Resume';
    }
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        mil = parseInt(mil);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        mil += 1;

        if (mil==60){
            sec+=1;
            mil=0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if(mil<10|| mil==0){
            mil='0'+mil;
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
        mili.innerHTML=':' + mil;

        setTimeout("timerCycle()", 10);
    }
}

function resetTimer() {
    hr=0;
    min=0;
    sec=0;
    mil=0;
    timer.innerHTML = '00:00:00';
    mili.innerHTML=':0'+mil;
    resume.innerHTML='Start';
    stoptime=true;
    
}