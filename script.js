const setupStep = document.getElementById('step-setup');
const drawStep = document.getElementById('step-draw');
const startBtn = document.getElementById('start-btn');
const maxInput = document.getElementById('max-number');
const display = document.getElementById('number-display');
const instruction = document.getElementById('instruction-text');

let maxVal = 100;
let isRunning = false;
let isFinished = false;

// Siirrytään syötöstä arvontaruutuun
startBtn.addEventListener('click', () => {
  const inputVal = parseInt(maxInput.value);
  if (isNaN(inputVal) || inputVal < 1) {
    alert('Syötä kelvollinen numero (vähintään 1).');
    return;
  }
  
  maxVal = inputVal;
  setupStep.classList.add('hidden');
  drawStep.classList.remove('hidden');
});

// Klikataan mitä tahansa kohtaa arvontaruudussa aloittaaksesi
drawStep.addEventListener('click', () => {
  if (isRunning || isFinished) return;

  isRunning = true;
  instruction.classList.add('hidden');

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
      isRunning = false;
      isFinished = true;
    } else {
      display.textContent = Math.floor(Math.random() * maxVal) + 1;
    }
  }, intervalTime);
});