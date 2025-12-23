const secs = document.querySelector('.secs-hand');
const mins = document.querySelector('.mins-hand');
const hrs = document.querySelector('.hours-hand');


function setData() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)* 360) + 90;
    secs.style.transform = `rotate(${secondsDegrees}deg)`


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60)* 360) + 90;
    mins.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12)* 360) + 90;
    hrs.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setData, 1000);

