import './timer.css'
import Scramble from '../timerPage/scramble_img.png'
import Result from '../scramble/scramble'
export default function Timer() {
    
    return (
    <div className="timer">
        <h1 className="time"><span className="time-s">00</span><span>:</span><span className="time-ms">00</span></h1>
        <p>Press and hold SPACE BAR to start timer </p>
        <h2 className="scramble"><Result /></h2>
    <div className="buttons">
      <button className="timerbtn +2">+2</button>
      <button className="timerbtn dnf">DNF</button>
      <button className="timerbtn cancel">X</button>
    </div>
    <img src={Scramble} alt="" width="100/200" />
    </div>
    
    )
}
