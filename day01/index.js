window.addEventListener('keydown', function (e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0; //오디오 재생시점을 0으로 설정 -> 오디오 연속으로
  sound.play();

  div.classList.add('isPlaying');
});
const playings = document.querySelectorAll('.drumBox');

playings.forEach((div) =>
  div.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') return;
    div.classList.remove('isPlaying');
    console.log(e);
  }),
);
