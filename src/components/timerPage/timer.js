import './timer.css'
import Scramble from '../timerPage/scramble_img.png'

function Timer() {
    
    return (
    <div class="timer">
        <h1 class="time"><span class="time-s">00</span><span>:</span><span class="time-ms">00</span></h1>
        <p>Press and hold SPACE BAR to start timer </p>
        <h2 class="scramble">.</h2>
    <div class="buttons">
      <button class="timerbtn +2">+2</button>
      <button class="timerbtn dnf">DNF</button>
      <button class="timerbtn cancel">X</button>
    </div>
    <img src={Scramble} alt="" width="100/200" />
    </div>
    
    )
}
export default Timer;