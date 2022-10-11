const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

const SPEED_MAX = 4;
const SPEED_MIN = 0.4;

function handleSpeedRate(e) {
  const y = (e.pageY - this.offsetTop) / this.offsetHeight; //0~1
  const rate = y * (SPEED_MAX - SPEED_MIN) + SPEED_MIN;

  speedBar.style.height = `${y * 100}%`;
  speedBar.textContent = `${rate.toFixed(2)}x`;
  video.playbackRate = rate; // 비디오 속도 조절
}

speed.addEventListener('mousemove', handleSpeedRate);
