const bc = new BroadcastChannel('arvonta_kanava');
const startBtn = document.getElementById('start-btn');
const maxInput = document.getElementById('max-num');

startBtn.addEventListener('click', () => {
  const maxVal = parseInt(maxInput.value);
  if (!maxVal || maxVal < 1) return;

  startBtn.disabled = true;
  bc.postMessage({ action: 'start', max: maxVal });

  // Lukitaan painike arvonnan ajaksi (20 sek)
  setTimeout(() => {
    startBtn.disabled = false;
  }, 20500);
});