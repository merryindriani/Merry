
const playBtn = document.getElementById('playBtn');
const music = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = 'Pause Musik';
  } else {
    music.pause();
    playBtn.textContent = 'Putar Musik';
  }
});
