import Nav from './navigation/nav'
import Timer from './timerPage/timer'
import CubeSelect from './timerPage/cubeSelect'


function App() {
 
  
  const threeScramble = [
      "L",
      "B",
      "F",
      "D",
      "R",
      "U",
      "L'",
      "B'",
      "D'",
      "R'",
      "U'",
      "F'",
      "L2",
      "B2",
      "D2",
      "R2",
      "F2",
      "U2",
    ];
    const fourScrambles = [
      "L",
      "B",
      "F",
      "D",
      "R",
      "U",
      "L'",
      "B'",
      "D'",
      "R'",
      "U'",
      "F'",
      "L2",
      "B2",
      "D2",
      "R2",
      "F2",
      "U2",
      "Lw",
      "Bw",
      "Fw",
      "Dw",
      "Rw",
      "Uw",
      "Lw'",
      "Bw'",
      "Dw'",
      "Rw'",
      "Uw'",
      "Fw'",
      "Lw2",
      "Bw2",
      "Dw2",
      "Rw2",
      "Fw2",
      "Uw2",
    ];
    const fiveScrambles = [
      "L",
      "B",
      "F",
      "D",
      "R",
      "U",
      "L'",
      "B'",
      "D'",
      "R'",
      "U'",
      "F'",
      "L2",
      "B2",
      "D2",
      "R2",
      "F2",
      "U2",
      "Lw",
      "Bw",
      "Fw",
      "Dw",
      "Rw",
      "Uw",
      "Lw'",
      "Bw'",
      "Dw'",
      "Rw'",
      "Uw'",
      "Fw'",
      "Lw2",
      "Bw2",
      "Dw2",
      "Rw2",
      "Fw2",
      "Uw2",
    ];
    const sixScramble = [
      "L",
      "B",
      "F",
      "D",
      "R",
      "U",
      "L'",
      "B'",
      "D'",
      "R'",
      "U'",
      "F'",
      "L2",
      "B2",
      "D2",
      "R2",
      "F2",
      "U2",
      "3Lw",
      "3Bw",
      "3Fw",
      "3Dw",
      "3Rw",
      "3Uw",
      "3Lw'",
      "3Bw'",
      "3Dw'",
      "3Rw'",
      "3Uw'",
      "3Fw'",
      "3Lw2",
      "3Bw2",
      "3Dw2",
      "3Rw2",
      "3Fw2",
      "3Uw2",
      "3Lw",
      "3Bw",
      "3Fw",
      "3Dw",
      "3Rw",
      "3Uw",
      "3Lw'",
      "3Bw'",
      "3Dw'",
      "3Rw'",
      "3Uw'",
      "3Fw'",
      "3Lw2",
      "3Bw2",
      "3Dw2",
      "3Rw2",
      "3Fw2",
      "3Uw2",
    ];
    const sevenScramble = [
      "L",
      "B",
      "F",
      "D",
      "R",
      "U",
      "L'",
      "B'",
      "D'",
      "R'",
      "U'",
      "F'",
      "L2",
      "B2",
      "D2",
      "R2",
      "F2",
      "U2",
      "3Lw",
      "3Bw",
      "3Fw",
      "3Dw",
      "3Rw",
      "3Uw",
      "3Lw'",
      "3Bw'",
      "3Dw'",
      "3Rw'",
      "3Uw'",
      "3Fw'",
      "3Lw2",
      "3Bw2",
      "3Dw2",
      "3Rw2",
      "3Fw2",
      "3Uw2",
      "3Lw",
      "3Bw",
      "3Fw",
      "3Dw",
      "3Rw",
      "3Uw",
      "3Lw'",
      "3Bw'",
      "3Dw'",
      "3Rw'",
      "3Uw'",
      "3Fw'",
      "3Lw2",
      "3Bw2",
      "3Dw2",
      "3Rw2",
      "3Fw2",
      "3Uw2",
    ];
  
  const timeSec = document.querySelector(".time-s");
  const timeMs = document.querySelector(".time-ms");
  const scramble = document.querySelector(".scramble");
  const timeHolder = document.querySelector(".time");
  
  let startTime = 0;
  let endTime = 0;
  let timeTaken = 0;
  let timerStarted = false;
  let setIntervelFunction = 0;
  let firstKeyDown = true;
  let reqTimeEllapsed = false;
  let keyPressStartTime = 0;
  let keydownEventOccured = true;
  let keyupEventOccured = false;
  let timerUpRequired = false;
  let timerDownRequired = false;
  let keyDownLoopRequired = true;
  let whichtoChoose = threeScramble;
  let minMoves = 18;
  
  
  function changeTimeContent() {
    timeTaken = endTime - startTime;
    let timeInMs = ((timeTaken % 1000) - (timeTaken % 10)) / 10;
    timeMs.textContent = !timeInMs
      ? `00`
      : timeInMs < 10
      ? `0${timeInMs}`
      : `${timeInMs}`;
    let timeBig = Math.floor(timeTaken / 1000);
    timeSec.textContent =
      timeBig > 59
        ? timeBig % 60 > 9
          ? `${Math.floor(timeBig / 60)}:${timeBig % 60}`
          : `${Math.floor(timeBig / 60)}:0${timeBig % 60}`
        : timeBig > 9
        ? `${timeBig}`
        : `0${timeBig}`;
  }
  function endTimer() {
    endTime = Date.now();
    changeTimeContent();
    clearInterval(setIntervelFunction);
  }
  function startTimer() {
    timerStarted = true;
    startTime = Date.now();
    setIntervelFunction = setInterval(() => {
      endTime = Date.now();
      changeTimeContent();
    }, 10);
  }
  function getNewMove(mainArr, prevMove, dis1, dis2) {
    if (prevMove.includes(dis1) || prevMove.includes(dis2)) {
      const allowedArr = mainArr.filter(
        (move) => !(move.includes(dis1) || move.includes(dis2))
      );
      let newMove = allowedArr[Math.floor(Math.random() * allowedArr.length)];
      return newMove;
    }
    return prevMove;
  }
  
  function makeNewScramble(moves) {
    let newScramble = "";
    let newScrambleLength = 15 + Math.floor(Math.random() * 15 + 1);
    let onemove = moves[Math.floor(Math.random() * moves.length)];
    for (let i = 0; i < newScrambleLength; i++) {
      newScramble += onemove + " ";
      let oldMove = onemove;
      onemove = getNewMove(moves, onemove, "L", "R");
      if (oldMove === onemove) onemove = getNewMove(moves, onemove, "B", "F");
      if (oldMove === onemove) onemove = getNewMove(moves, onemove, "D", "U");
    }
    scramble.textContent = newScramble;
  }
  
  document.addEventListener("keyup", (event) => {
    if (event.key === " ") {
      firstKeyDown = true;
      keyDownLoopRequired = true;
      if (timerUpRequired && reqTimeEllapsed) {
        startTimer();
        timerDownRequired = true;
        timerUpRequired = false;
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (keyDownLoopRequired && event.key === " ") {
      if (firstKeyDown == true) keyPressStartTime = event.timeStamp;
      firstKeyDown = false;
      if (!timerDownRequired && event.timeStamp - keyPressStartTime > 500) {
        timerUpRequired = true;
        reqTimeEllapsed = true;
        timeSec.textContent = "00";
        timeMs.textContent = "00";
        timeHolder.classList.add("green-time");
      }
      if (timerDownRequired) {
        endTimer();
        makeNewScramble(fiveScrambles, 40);
        timeHolder.classList.remove("green-time");
        timerDownRequired = false;
        keyDownLoopRequired = false;
      }
    }
  });
  makeNewScramble(fourScrambles);

  
  return (
    <div className="container">
      <Nav />
      <Timer />
      <CubeSelect />

    </div>
  );
}

export default App
