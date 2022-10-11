function Time(time) {
  return `0${time}`.slice(-2);
}

const timerButtons = document.querySelectorAll('.header-item>button');
const timerForm = document.querySelector('.form-item');
const timerInput = document.querySelector('.input-item');
const timerLast = document.querySelector('.timer-last');
const timerEnd = document.querySelector('.timer-end');

let timer;
let sec = 0;

function runTimer() {
  if (sec <= 0) {
    clearInterval(timer); // 타이머 종료
  }
  // 타이머 분,초
  const [timerMin, timerSec] = [parseInt(sec / 60), sec % 60];
  // 타이머 남은 시간
  timerLast.textContent = `${Time(timerMin)} : ${Time(timerSec)}`;
  sec -= 1;
}

// 타이머 함수
function setTimer() {
  const date = new Date();

  // 현재 시,분,초
  const [nowSec, nowMin, nowHour] = [
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
  ];

  const sumSec = nowSec + (sec % 60);
  const sumMin = nowMin + parseInt(sec / 60) + parseInt(sumSec / 60);
  const finalMin = sumMin % 60;
  const finalHour = nowHour + (sumMin >= 60 ? parseInt(sumMin / 60) : 0);

  // 타이머 끝나는 시간
  timerEnd.textContent = `Be Back At ${Time(finalHour)} : ${Time(finalMin)}`;

  runTimer();
  timer = setInterval(runTimer, 1000); // 타이머 시작
}

timerButtons.forEach((timerBtn) =>
  timerBtn.addEventListener('click', (e) => {
    sec = Number(e.target.id);
    clearInterval(timer);
    setTimer(sec);
  }),
);

timerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInterval(timer);
  sec = Number(timerInput.value) * 60;
  setTimer(sec);
});
