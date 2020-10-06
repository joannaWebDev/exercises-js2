/* When you click the `Set Alarm` (#set) button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.
Every one second the title should count down by one.
When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.
You can stop the alarm sound by pressing the `Stop Alarm` button. */
//variables globales
let idInterval = -1; 
let contador = -1;

const setSeconds = () => {
  contador--;
  document.getElementById('timeRemaining').innerText= `Time Remaining: ${contador}`;
  if (contador === 0 ) {
    playAlarm();
    clearInterval(idInterval);
    document.body.style.backgroundColor = 'lightgray'
    console.log(contador);
  }
} 

function setAlarm() {
  contador = document.getElementById('alarmSet').value;
//deducting 1 sec  
  idInterval = setInterval(() => setSeconds(), 1000);
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("Reception.mp3");

function setup() {
  const btnDiv = document.getElementById('btnDiv');
  const pauseBtn = document.createElement('button');
  pauseBtn.innerHTML = 'pause';
  pauseBtn.style.backgroundColor = 'pink';
  btnDiv.appendChild(pauseBtn);

  const continueBtn = document.createElement('button'); 
  continueBtn.innerHTML = 'continue';
  continueBtn.style.backgroundColor = 'cyan';
  btnDiv.appendChild(continueBtn);

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
  
  pauseBtn.addEventListener("click", () => {
    clearInterval(idInterval);
  });

  continueBtn.addEventListener("click", () => {
    idInterval = setInterval(() => setSeconds(), 1000);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
