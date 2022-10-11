const hour = document.querySelector('.hourHand');
const min = document.querySelector('.minuteHand');
const sec = document.querySelector('.secondHand');

var hourDeg = 0;
var minDeg = 0;
var secDeg = 0;


setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hour.style.transform = `rotate(${hours * 30}deg)`;
    min.style.transform = `rotate(${minutes * 6}deg)`;
    sec.style.transform = `rotate(${seconds * 3}deg)`;
}, 1000);

//1시간에 30도 1분에 6도 1초에 3도