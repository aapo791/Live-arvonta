const bc = new BroadcastChannel('arvonta_kanava');
const display = document.getElementById('number-display');

bc.onmessage = (event) => {
  if (event.data.action === 'start') {
    runDraw(event.data.max);
  }
};

function runDraw(maxVal) {
  display.classList.remove('winner');
  const duration = 20000; // 20 sekuntia
  const intervalTime = 50;
  const startTime = Date.now();

  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime >= duration) {
      clearInterval(timer);
      const finalWinner = Math.floor(Math.random() * maxVal) + 1;
      display.textContent = finalWinner;
      display.classList.add('winner');
    } else {
      display.textContent = Math.floor(Math.random() * maxVal) + 1;
    }
  }, intervalTime);
}