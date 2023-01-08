const daysOutput = document.getElementById('days');
const hoursOutput = document.getElementById('hours');
const minutesOutput = document.getElementById('minutes');
const secondsOutput = document.getElementById('seconds');


function loadTime(){
    let time = 1000 * 60 * 60 * 24 * 3;
    let timeleft;
    setInterval(function() {
        time-=1000;
        daysOutput.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24));
        hoursOutput.innerHTML = Math.floor(time / (1000 * 60 * 60) % 24);
        minutesOutput.innerHTML = Math.floor(time / (1000 * 60) % 60);
        secondsOutput.innerHTML = Math.floor(time / (1000) % 60);
    }, 1000)

}

loadTime();
